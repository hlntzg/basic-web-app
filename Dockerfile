FROM node:20-alpine

# Create app directory
WORKDIR /app

# Copy only package files first for caching
COPY package.json package-lock.json* ./

# Install dependencies
RUN npm install 

# Copy rest of the code
COPY . .

# Build the app - production phase
#RUN npm run build

# Use serve to host the final dist folder
#RUN npm install -g serve

#CMD ["serve", "-s", "dist", "-l", "3000"]

# Expose Vite dev server port
EXPOSE 5173

# Start the Vite development server
CMD ["npm", "run", "dev"]

