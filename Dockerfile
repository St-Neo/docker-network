FROM node:20

WORKDIR /app

COPY package* .

RUN npm install

COPY . .

RUN npm run build

EXPOSE 3000

CMD ["node", "dist/index.js"]

#docker build -t image_tag .
#docker network create my_custom_network

#docker run -d -p 3000:3000 --name backend --network my_custom_network image_tag

#docker run -d -v volume_database:/data/db --name mongo --network my_custom_network -p 27017:27017 mongo

#docker ps

#docker logs <container_id>