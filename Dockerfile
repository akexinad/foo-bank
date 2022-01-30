FROM node:17

WORKDIR /app

COPY . .

ENV DB_PORT 4321
ENV DB_USER codetestuser
ENV DB_PASS 123456

RUN npm install

CMD ["npm", "start"]
