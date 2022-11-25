# Imagem de Origem
FROM node:16-alpine
# Diretório de trabalho(é onde a aplicação ficará dentro do container).
WORKDIR /app
COPY package.json .
RUN npm install
# tried this earlier 
# RUN npm install yarn 
# RUN yarn install
# and this 
#RUN npm i esbuild-wasm
COPY . .
EXPOSE 3000
CMD ["npm", "run","dev"]

