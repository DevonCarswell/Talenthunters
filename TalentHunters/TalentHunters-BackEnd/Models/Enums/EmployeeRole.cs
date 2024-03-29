﻿using System.Text.Json.Serialization;

namespace TalentHunters_BackEnd.Models.Enums;

[JsonConverter(typeof(JsonStringEnumConverter))]
public enum EmployeeRole
{
    None,
    FrontEndDeveloper,
    BackEndDeveloper,
    ManualTester,
    UiUxDesigner,
    ScrumMaster,
    ProductOwner
}