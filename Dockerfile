FROM node:lts-alpine
ENV NODE_ENV=production
ENV DATABASE_URL=mongodb+srv://airway:airway123@cluster0.bezpq.mongodb.net/AirwayDB?retryWrites=true&w=majority
WORKDIR /src/index
COPY ["package.json", "package-lock.json*", "npm-shrinkwrap.json*", "./"]
RUN npm install --production --silent && mv node_modules ../
COPY . .
EXPOSE 3001
RUN chown -R node /src/index
USER node
CMD ["npm", "start"]