FROM node:latest as server

WORKDIR /opt/app
RUN chown -R node:node /opt/app

COPY --chown=node:node . .

USER node

RUN npm ci

HEALTHCHECK --interval=10s --timeout=5s --start-period=10s --retries=5 \
    CMD curl --fail http://localhost:3000/api/v1/health || exit 1

EXPOSE 3000

CMD ["npm", "start"]
