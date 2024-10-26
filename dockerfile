# using latest node alpine base image
FROM node:23-alpine

# setting up the working as app
WORKDIR /app

# layering to avoid unnecesary builds
COPY package.json ./
COPY package-lock.json ./

# setting up registry as in some cases npm i was taking too long
RUN npm config set registry https://registry.npmjs.org/ && \
    npm install --legacy-peer-deps --verbose

# copying other files
COPY . .

EXPOSE 5173

CMD ["npm", "run", "dev"]