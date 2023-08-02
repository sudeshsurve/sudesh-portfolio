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

FROM node:latest AS sass

WORKDIR /app

COPY . .

COPY package*.json ./

RUN npm install 

RUN npm run build 

RUN ls


FROM nginx:alpine

COPY --from=sass ./app/dist/portfolio ./usr/share/nginx/html/

EXPOSE 80


