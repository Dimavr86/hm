# build env
FROM node:19-alpine as build
WORKDIR /app
ENV GENERATE_SOURCEMAP=false
COPY package*.json ./
RUN npm install
COPY . ./
RUN npm run build
CMD cp -r build result_build
