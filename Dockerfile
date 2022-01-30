FROM node:17.3.0

ENV PORT 5000
ENV DB_HOST 'db'
ENV DB_USER 'codetest'
ENV DB_NAME 'codetest'
ENV DB_PASS '123456'

WORKDIR /app

COPY . .

RUN npm install

CMD ["npm", "start"]
