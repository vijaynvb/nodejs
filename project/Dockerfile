# Use an official Node.js runtime as the base image
FROM node:18

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install app dependencies
RUN npm install

# Copy the rest of the application code to the container
COPY . .

# Expose the port your Node.js app listens on
EXPOSE 8080

# Set environment variables for MongoDB connection
ENV DATABASE_URL mongodb://mongodb_host:27017/yourdb

# Command to run your Node.js application
CMD ["node", "index.js"]
