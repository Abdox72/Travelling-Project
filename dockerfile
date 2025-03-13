#declare the baseImage
FROM nginx:alpine

#set a working directory
WORKDIR /usr/share/nginx/html

#copy the content of the current directory to the working directory
COPY . .

#expose nginx port
EXPOSE 80

#command
CMD ["nginx", "-g", "daemon off;"]
