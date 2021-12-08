# -> Compile and Run TS
npx tsc <file_name>.ts && node <file_name>.js && rm <file_name>.js

# -> ts-node runtime
npm run ts-node

# -> ts-node transpile
npx path/to/node_modules/ts-node/dist/bin.js --files --transpile-only <file>
path/to/node_modules/.bin/ts-node --files --transpile-only 01_basic/01_hello_world/hello_world.ts

# -> ESLint
# https://packagecontrol.io/packages/ESLint
# https://github.com/SublimeLinter/SublimeLinter-eslint

# http://www.sublimelinter.com/en/stable/
# https://github.com/SublimeLinter/SublimeLinter
npm install -D eslint
npm i @typescript-eslint/eslint-plugin @typescript-eslint/parser -D
touch eslintrc.js

# -> LSP - typescript (sublime package)
# https://stackoverflow.com/questions/68425838/sublime-text-4-how-to-setup-lsp-eslint
# https://packagecontrol.io/packages/LSP-typescript
