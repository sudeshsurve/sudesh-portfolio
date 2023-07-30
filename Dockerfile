# FROM node:latest as builder
# WORKDIR /user/local/app    
# COPY ./  /user/local/app 
# RUN npm install
# RUN npm run build

# FROM nginx:latest
# COPY --from=build /user/local/app/dist/portfolio /usr/share/nginx/html
# EXPOSE 80


FROM node:14.15.4 as node
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build --prod
# Stage 2
FROM nginx:alpine   
EXPOSE 80
COPY --from=node /app/dist/portfolio /usr/share/nginx/html