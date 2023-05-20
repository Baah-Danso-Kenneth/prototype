# FROM node:lts-bullseye-slim@sha256:d93fb5c25db163dc795d40eabf66251a2daf6a2c6a2d21cc29930e754aef4c2c

# WORKDIR /usr/app

# # Install dependencies based on the preferred package manager
# COPY package.json yarn.lock tsconfig.json tailwind.config.cjs ./

# RUN yarn config set unsafe-perm true

# RUN npm pkg delete scripts.postinstall

# RUN yarn install

# COPY . /usr/app

# RUN chown -R node /usr/app

# RUN yarn build

# EXPOSE 3000

# CMD ["yarn", "serve"]

FROM node:lts-bullseye-slim@sha256:d93fb5c25db163dc795d40eabf66251a2daf6a2c6a2d21cc29930e754aef4c2c


WORKDIR /usr/app

# Install dependencies based on the preferred package manager
COPY package.json ./
COPY yarn.lock tsconfig.json tailwind.config.cjs ./

RUN yarn install

COPY . .

RUN yarn build

EXPOSE 3000

CMD ["yarn", "start"]
