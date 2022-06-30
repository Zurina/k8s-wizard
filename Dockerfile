FROM node:14.19.3
WORKDIR /usr/src/k8swizard
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 3000
CMD ["npm", "start"]