# FROM node:latest AS sass

# WORKDIR /app

# COPY . .

# COPY package*.json ./

# RUN npm install -f

# RUN npm run build 

# RUN ls


# FROM nginx:alpine

# COPY --from=sass ./app/dist/portfolio ./usr/share/nginx/html/

# EXPOSE 80

# Use the official Node.js 14.x LTS image as the base image
FROM node:latest as node

# Set the working directory inside the container
WORKDIR /app

# Copy the package.json and package-lock.json files to the container
COPY package*.json ./

# Install the project dependencies
RUN npm install

# Copy all the application files to the container
COPY . .

# Build the Angular app for production
RUN npm run build --prod

# Use a lightweight Nginx image to serve the built Angular app
FROM nginx:alpine

# Copy the built app from the previous stage to the Nginx webroot
COPY --from=node /app/dist/portfolio /usr/share/nginx/html

# Expose the port on which Nginx will listen
EXPOSE 80


