# alpine is the node.js OS that we're going to use.
# This tells it to download alpine. 
FROM node:alpine

#     copy this    from current directory
COPY package.json ./

COPY server.js ./

RUN npm install

EXPOSE 3000

# What happens when you run the docker file
CMD ["node", "server.js"]