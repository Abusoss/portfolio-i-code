FROM directus/directus:10.11.0
# COPY ./extensions /directus/extensions
# COPY ./eu-west-3-bundle.pem /directus/

USER root
RUN corepack enable \
  && corepack prepare pnpm@8.8.0 --activate

USER node
RUN pnpm install directus-extension-wpslug-interface@^1.1.0 directus-extension-flexible-editor@^1.2.0 @directus/errors@^0.2.4