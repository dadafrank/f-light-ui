FROM nginx

COPY ./default.conf /etc/nginx/conf.d/default.conf
COPY /home/bbee/html/f-light-ui/build /usr/share/nginx/html

EXPOSE 80

