# alpine is the node.js OS that we're going to use.
# This tells it to download alpine. 
FROM node:alpine

COPY package.json ./

RUN npm install

EXPOSE 3000

# What happens when you run the docker file
CMD ["node", "server.js"]