FROM nginx

COPY ./default.conf /etc/nginx/conf.d/default.conf
COPY /root/html/f-light-ui /build /usr/share/nginx/html

EXPOSE 80

