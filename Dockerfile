FROM mcr.microsoft.com/playwright:v1.44.0-jammy

WORKDIR /app
COPY . .

RUN npm ci && npx playwright install

ENV BASE_URL=https://automationexercise.com
ENV ENV_NAME=CI
ENV EXECUTOR=CI_Pipeline

CMD ["npx", "playwright", "test"]