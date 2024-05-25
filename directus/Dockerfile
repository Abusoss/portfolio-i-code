FROM directus/directus:10.11.0
# COPY ./extensions /directus/extensions
# COPY ./eu-west-3-bundle.pem /directus/


USER root
# Install curl and check connectivity
RUN apk update && apk add curl && \
    curl -I https://registry.npmjs.org

# Install pnpm manually using curl
RUN curl -L https://github.com/pnpm/pnpm/releases/download/v8.8.0/pnpm-linux-x64 -o /usr/local/bin/pnpm && \
    chmod +x /usr/local/bin/pnpm

# Verify installation
RUN pnpm --version

RUN corepack enable \
  && corepack prepare pnpm@8.8.0 --activate

USER node
RUN pnpm install directus-extension-wpslug-interface@^1.1.0 directus-extension-flexible-editor@^1.2.0 @directus/errors@^0.2.4