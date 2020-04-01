# SERVER DOCS

## Quick Start

#### First make sure you have [Yarn](https://yarnpkg.com/en/docs/install) install

```sh
yarn
# this install all the dependencies for server
yarn run dev
# this will start the server at PORT 4000
```

## Folder Structure

```
server
├── config
    ├── development.json
    ├── production.json
    ├── test.json
├── node_modules
└── src
    └── controllers
        ├── All request response handler end's with 'Controller.ts' is a convention
    └── helpers
        ├── All handlers that are not directly related to a module
    └── middleware
        ├── All middleware that are going use in routes
    └── models
        ├── All database models end's with Model.ts is a convention
    └── RawQueries
        ├── All raw sql queries end's with Queries.ts is a convention
    └── Routes
        ├── All Routes for the application end's with Route.ts is a convention
    └── server.ts (enter point for server)
    └── UserAuthRoutes.ts (endpoint authorization for VG users)
├── ecosystem.config.js(pm2 configuration file)
├── jest.config.js(jest config file)
├── package.json
├── README.md
├── tsconfig.json(typescript config file)
└── tests
    ├── ...test.ts(All tests files)
└── types
    ├── ...d.ts(Custom Type Definition files)
```

## Config Resources

[pm2](http://pm2.keymetrics.io/docs/usage/application-declaration/)  
[Jest](https://jestjs.io/docs/en/23.x/configuration)  
[Typescript](https://www.typescriptlang.org/docs/handbook/tsconfig-json.html)

## Application Structure

Every request need's to get forwarded to a "Route Handler" which are all the files in route folder from where it get it's appropriate controller which later on get resolved to a rawQueries or a model or both to send back response.

## Note

- To run database locally make sure to restore it's schema with vg-schema-backup.sql which is at root folder
- Make sure to not use params/dynamic routes as it's not possible to catch those routes in userAuthRoutes.ts use header or query instead.
- Make sure you follow application structure/convention for consistency

## Running Environment

#### Production

For production we use pm2 get it via yarn or npm

```bash
yarn add global pm2
# or
npm install -g pm2
```

```bash
# To start server in Production
pm2 start ecosystem.config.js
```

#### Development

```bash
yarn run dev
# start server at PORT 4000
```

#### Test

```bash
yarn run test
# start execution all test file while using localhost as database
```
