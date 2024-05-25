FROM directus/directus:10.11.0

# Switch to root user
USER root

# Install necessary tools using apk (Alpine package manager)
RUN apk update && apk add --no-cache curl npm

# Use npm to install pnpm
RUN npm install -g pnpm

# Verify pnpm installation
RUN pnpm --version

# Set environment PATH
ENV PATH="/usr/local/bin:${PATH}"

# Switch to node user
USER node

# Install Directus extensions using pnpm
RUN pnpm install directus-extension-wpslug-interface@^1.1.0 directus-extension-flexible-editor@^1.2.0 @directus/errors@^0.2.4