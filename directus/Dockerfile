FROM directus/directus:10.11.0

# Switch to root user
USER root

# Install necessary tools using apk (Alpine package manager)
RUN apk update && apk add curl file

# Download and install pnpm
RUN curl -L https://github.com/pnpm/pnpm/releases/download/v8.8.0/pnpm-linux-x64 -o /usr/local/bin/pnpm && \
    chmod +x /usr/local/bin/pnpm

# Verify pnpm installation
RUN file /usr/local/bin/pnpm && ldd /usr/local/bin/pnpm || true

# Set environment PATH
ENV PATH="/usr/local/bin:${PATH}"

# Verify pnpm is available in the PATH
RUN /usr/local/bin/pnpm --version

# Switch to node user
USER node

# Install Directus extensions using pnpm
RUN pnpm install directus-extension-wpslug-interface@^1.1.0 directus-extension-flexible-editor@^1.2.0 @directus/errors@^0.2.4