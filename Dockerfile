# Usa a imagem do Node.js mais leve
FROM node:22-alpine AS builder

# Define o diretório de trabalho
WORKDIR /app

# Copia os arquivos necessários
COPY package*.json ./
COPY tsconfig*.json ./
COPY prisma ./prisma/
COPY src ./src/
COPY .env .env

# Instala dependências
RUN npm install

# Gera o Prisma Client
RUN npx prisma generate

# Compila o código
RUN npm run build

# Usa uma nova imagem mais leve para execução
FROM node:22-alpine AS runner
WORKDIR /app

# Copia apenas os arquivos necessários da etapa de build
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/prisma ./prisma
COPY --from=builder /app/.env .env

# Expor a porta da aplicação
EXPOSE 3000

# Comando para rodar o app
CMD ["node", "dist/main.js"]
