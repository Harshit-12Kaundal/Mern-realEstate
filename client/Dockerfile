# Use an official Node.js runtime as a parent image
FROM node:18

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy the package.json and package-lock.json (if available)
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application files
COPY . .

# Ensure all scripts have execute permissions
RUN chmod +x ./node_modules/.bin/*

# Build the application
RUN npm run build

# Expose the port that the app runs on (if applicable)
EXPOSE 3000

# Define the command to run the app (this can be adjusted based on your setup)
CMD ["npm", "run", "preview"]
