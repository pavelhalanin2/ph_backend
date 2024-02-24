npx @nestjs/cli new ph_backend --directory ./ --package-manager yarn --language TypeScript

rm -rfv ./node_modules
yarn
yarn add -D webpack
rm -rfv ./node_modules
yarn

yarn add @nestjs/swagger
yarn add swagger-ui-express
yarn add redoc-express
yarn add -D express

yarn add class-validator
yarn add class-transformer

yarn add @nestjs/typeorm
yarn add typeorm
yarn add sqlite3

yarn add dotenv

yarn nest g res api/v2/languages --no-spec
