# Stage 1 Use the latest Node.js for building

FROM node:latest AS build
WORKDIR /usr/local/app
COPY ./ /usr/local/app/
RUN npm install  # Install dependencies
RUN npm run build  # Build the Angular app
#dist/front-end

# Stage 2 Use the latest Node.js for building
# Use the latest Nginx image for serving the app
FROM nginx:latest
COPY --from=build /usr/local/app/dist/front-end /usr/share/nginx/html 
# Change 'front-end' if needed
EXPOSE 11500 
# Open port 80 for the webserver
