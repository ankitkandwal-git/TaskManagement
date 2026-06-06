FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install --production
COPY . .
# Ensure the app listens on 0.0.0.0, not 127.0.0.1
ENV HOST=0.0.0.0
ENV PORT=5000
EXPOSE 5000
CMD ["node", "index.js"]