FROM node:18-alpine

WORKDIR /app

ARG NEXT_PUBLIC_RAPID_API_KEY=${NEXT_PUBLIC_RAPID_API_KEY}
ENV NEXT_PUBLIC_RAPID_API_KEY=${NEXT_PUBLIC_RAPID_API_KEY}
ARG NEXT_PUBLIC_IMAGIN_STUDIO_KEY=${NEXT_PUBLIC_IMAGIN_STUDIO_KEY}
ENV NEXT_PUBLIC_IMAGIN_STUDIO_KEY=${NEXT_PUBLIC_IMAGIN_STUDIO_KEY}

COPY package.json pnpm-lock.yaml next-env.d.ts postcss.config.js tailwind.config.js tsconfig.json ./
RUN npm install -g pnpm
RUN pnpm install

COPY next.config.js ./next.config.js

CMD ["pnpm", "dev"]