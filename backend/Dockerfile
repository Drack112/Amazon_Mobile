FROM node:bullseye
RUN apt-get update && apt-get upgrade -y

WORKDIR /home/node/app

COPY package.json yarn.lock /home/node/app/
RUN yarn install

COPY . /home/node/app/
CMD ["yarn", "dev"]
