FROM node:alpine

WORKDIR /apps/frontend

COPY ./apps/frontend .

RUN npm install -g serve

RUN npm install

CMD [ "npm", "run", "deploy" ]