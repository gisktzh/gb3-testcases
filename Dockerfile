FROM cypress/base

# Set the working directory inside the container
WORKDIR /app

COPY cypress /app/cypress

# Copy the Cypress config file into the container
COPY cypress.config.ts /app/

# Copy the Cypress environment variables file into the container
COPY cypress.env.json /app/

# Copy the TypeScript config file into the container
COPY tsconfig.json /app/

# Install the dependencies
COPY package.json /app/
COPY package-lock.json /app/

RUN npm install

# Run Cypress tests
CMD ["npx", "cypress", "run"]