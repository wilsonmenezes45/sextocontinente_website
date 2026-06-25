FROM node:20-alpine

# Diretório da app
WORKDIR /app

# Copiar package.json e instalar dependências
COPY package*.json ./
RUN npm install

# Copiar o resto do código
COPY . .

# Build da aplicação
RUN npm run build

# Porta padrão do NestJS
EXPOSE 3000

# Rodar aplicação
CMD ["node", "dist/main"]