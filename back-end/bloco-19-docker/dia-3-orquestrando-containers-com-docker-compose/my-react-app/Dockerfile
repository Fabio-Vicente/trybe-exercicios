FROM node:alpine

WORKDIR /app

EXPOSE 3000

COPY package*json ./
RUN npm install
COPY ./src ./src/
COPY ./public ./public/

ENTRYPOINT ["npm"]
CMD ["start"]