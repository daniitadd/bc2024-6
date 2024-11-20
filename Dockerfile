FROM node:22

# Set the working directory
WORKDIR /usr/src/app

# Copy package.json and package-lock.json first
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of your app's source code
COPY . .

# Expose the correct port
EXPOSE 3001

# Command to start the app
CMD ["node", "index.js"]

