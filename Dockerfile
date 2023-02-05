# build env
FROM node:19-alpine as build
WORKDIR /app
ENV NODE_OPTIONS=--max_old_space_size=512
ENV GENERATE_SOURCEMAP=false
COPY package*.json ./
RUN npm install
COPY . ./
RUN npm run build
CMD cp -r build result_build
