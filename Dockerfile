# -------- DEVELOPMENT ---------- 
FROM node:18-alpine AS development

WORKDIR /app

COPY package*.json ./

RUN npm ci

COPY . .

EXPOSE 3000
# -------- END ---------- 

# -------- BUILD ---------- 
FROM node:18-alpine AS build

WORKDIR /app

COPY package*.json ./

# Just in case we need to use some dev dependency
COPY --from=development /app/node_modules ./node_modules

COPY . .

# we need to declare environment variables before build command
ENV NODE_ENV=production
ENV VITE_API_URL=http://localhost:3000
ENV VITE_FIREBASE_APIKEY=AIzaSyANpvkRSQ9AZHhd8jrPL-0zDf6HInjol5w
ENV VITE_FIREBASE_AUTHDOMAIN=mib-chat-55ef7.firebaseapp.com
ENV VITE_FIREBASE_PROJECTID=mib-chat-55ef7
ENV VITE_FIREBASE_STORAGEBUCKET=mib-chat-55ef7.appspot.com
ENV VITE_FIREBASE_MESSAGINGSENDERID=473784580042
ENV VITE_FIREBASE_APPID=1:473784580042:web:0eee714d5b56fb67f04133

RUN npm run build
# -------- END ---------- 

# -------- PRODUCTION ---------- 
# TODO: find out how to implement better production phase
FROM node:18-alpine AS production

WORKDIR /app

COPY package.json ./

COPY vite.config.ts ./

COPY --from=build /app/node_modules ./node_modules
COPY --from=build /app/dist ./dist

CMD [ "npm", "run", "preview" ]
# -------- END ---------- 