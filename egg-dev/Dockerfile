FROM mhart/alpine-node
LABEL version="2.0.0"


ENV PORT=8080

WORKDIR /home/wave/

COPY  /DoraCMS/ /home/wave/DoraCMS
COPY  /frontend/dist/static/themes/web /home/wave/DoraCMS/app/public/themes/web
COPY  /DoraCMS/node_modules /home/wave/node_modules/
COPY  /package.json /home/wave/package.json
# COPY  /server/server.js /home/wave/server.js

EXPOSE ${PORT}


CMD BUILD_ENV=docker npm run dev

