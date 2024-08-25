FROM node:18

WORKDIR /app/backend/

COPY package*.json ./

COPY ./wait-for-it.sh ./
COPY ./startup.sh ./

RUN chmod +x wait-for-it.sh
RUN chmod +x startup.sh

RUN npm install

COPY . .

EXPOSE 3000

# HOST AND PORT MUST MATCH ON APP DOCKERFILE AND ON .ENV FILE
# USE THE NAME FOR THE DB SERVICE
CMD ["./wait-for-it.sh", "postgres:5432", "--", "./startup.sh"]
