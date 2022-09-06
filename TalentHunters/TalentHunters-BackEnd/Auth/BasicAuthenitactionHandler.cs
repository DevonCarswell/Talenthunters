using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http.Headers;
using System.Security.Claims;
using System.Text.Encodings.Web;
using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Authorization;
using Microsoft.Extensions.Options;
using RunningActivityTracker.Auth;
using TalentHunters_BackEnd.DAL.Interfaces;
using TalentHunters_BackEnd.Models.Entities;


namespace TalentHunters_BackEnd.Auth
{
    public class BasicAuthenticationHandler : AuthenticationHandler<AuthenticationSchemeOptions>
    {
        private readonly IEmployeeService _employeeService;

        public BasicAuthenticationHandler(
            IOptionsMonitor<AuthenticationSchemeOptions> options,
            ILoggerFactory logger,
            UrlEncoder encoder,
            ISystemClock clock,
            IEmployeeService employeeService)
            : base(options, logger, encoder, clock)
        {
            _employeeService = employeeService;
        }

        protected override async Task<AuthenticateResult> HandleAuthenticateAsync()
        {
            // skip authentication if endpoint has [AllowAnonymous] or [AuthorizeWithTokenAttribute] attribute
            var endpoint = Context.GetEndpoint();
            if (endpoint?.Metadata?.GetMetadata<IAllowAnonymous>() != null || endpoint?.Metadata?.GetMetadata<AuthorizeWithTokenAttribute>() != null)
                return AuthenticateResult.NoResult();

            if (!Request.Headers.ContainsKey("Authorization"))
                return AuthenticateResult.Fail("Missing Authorization Header");

            //implement your authentication logic here
            var autorizationHeader = Request.Headers.Authorization.ToString();

            string userInfoEncoded = new string(autorizationHeader.Skip(6).ToArray()); // Remove the "Basic " start of the header value

            string userInfoDecoded = System.Text.Encoding.UTF8.GetString(System.Convert.FromBase64String(userInfoEncoded));

            string email = userInfoDecoded.Split(":")[0];
            string password = userInfoDecoded.Split(":")[1];
            string hashedPassword = Utilities.SecurePasswordHasher.Hash(password);
            var employees = _employeeService.GetAllEmployees().Result;
            Employee employee = employees.FirstOrDefault(employee => employee.Email == email && employee.HashedPassword == hashedPassword);

            var claims = new List<Claim>()
            {
                new Claim(ClaimTypes.Name, employee.Email)
            };
            // add user roles as claims here

            claims.Add(new Claim(ClaimTypes.Role, employee.Role));

            var identity = new ClaimsIdentity(claims, Scheme.Name);
            var principal = new ClaimsPrincipal(identity);
            var ticket = new AuthenticationTicket(principal, Scheme.Name);

            return AuthenticateResult.Success(ticket);
        }

        protected override Task HandleChallengeAsync(AuthenticationProperties properties)
        {
            Response.Headers["WWW-Authenticate"] = "Basic realm=\"\", charset=\"UTF-8\"";
            return base.HandleChallengeAsync(properties);
        }
    }
}

