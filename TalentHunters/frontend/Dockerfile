#FROM node:alpine
#
#WORKDIR /app
#
#COPY package.json /app
#COPY package-lock.json /app
#
#RUN npm install
#
#COPY . .
#
#CMD ["npm", "start"]
#


## Step 1
#FROM node:10-alpine as build-step
#
#RUN mkdir /app
#
#WORKDIR /app
#
#COPY package.json /app
#
#RUN npm install
#
#COPY . /app
#
#RUN npm run build
#
## Stage 2
#
#FROM nginx:1.17.1-alpine
#
#COPY --from=build-step /app/build /usr/share/nginx/html


#
## Use an official Node runtime as a parent image
#FROM node:14-alpine
#
## Set the working directory to /app
#WORKDIR /app
#
## Copy the package.json and package-lock.json files to the container
#COPY ./package*.json ./
#
## Install dependencies
#RUN npm install
#
## Copy the rest of the application code to the container
#COPY . ./
#
## Build the React app
#RUN npm run build
#
## Set the environment variable to indicate production mode
#ENV NODE_ENV=production
#
## Expose port 3000 for the React app
#EXPOSE 3000
#
## Start the React app
#CMD ["npm", "start"]


FROM node:14-alpine AS builder
WORKDIR /app
COPY ./package*.json ./
RUN npm install
COPY . ./
RUN npm run build

FROM nginx:1.23.3
COPY --from=builder /app/build /etc/nginx/html
# COPY nginx.conf /etc/nginx/nginx.conf
ENV NODE_ENV=production
EXPOSE 80