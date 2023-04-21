# Base image
FROM node:14.15.5-alpine

# Set the working directory
WORKDIR /app

# Copy package.json and yarn.lock
COPY package.json yarn.lock /app/

# Install dependencies
RUN yarn install

# Copy the rest of the application
COPY . /app

# Build the application
RUN yarn build --prod
