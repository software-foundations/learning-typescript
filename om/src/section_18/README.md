# Installation

- Requirements: node (nvm is preferable)
- Install as dev dependency

```bash
nvm install --lts # 18.12.1
nvm use --lts
npm init -y
npm i typescript -D
```

- The <code>tsc</code> and <code>tsserver</code> files in <code>node_modules/typescript/bin</code> are copied do <code>node_modules/.bin</code> by default

- By default, the compiled js changes template literals per concat function

- The <code>.ts</code> file is de **development file**

- The <code>.js</code> file (compiled ts) is the **production file**

- Compile

```bash
npx ts index.ts
```

- Execute

```bash
node index.js
```

## Modes

- Module mode

```
- everthing that has a export at the end of file is considered module mode
```

- Script mode

```
- Every thing (.js and .ts files) belongs to the same scope (global scope)
- So functions/constants in .js in .ts with same name are considered duplicated
```

# ts-node

- Is to execute the typescrit file

- Intalling

```bash
npm i ts-node -D
```

- Execute a ts file without generate a js file

```bash
npx ts-node --files <file.ts>
```

- <code>--files</code> is to use the include/exclude configs

- Execute without making tye checking and any other checkgs

```bash
npx ts-node --files --transpile-only <file.ts>
```

- See help

```bash
npx ts-node --help
```

- We can use <code lang='bash'>tsc -w</code> to watch modifications

- Bu we need to configure the <code>tsconfig.json</code>

- In production, we should use webpack or another bundle instead of tsc

# Installing ESLint

```bash
npm i eslint -D
npm i @typescript-eslint/eslint-plugin -D
npm i @typescript-eslint/parser -D
```

- <code>.eslintrc.js</code>

# Prettier

- installation

```bash
npm i prettier eslint-config-prettier eslint-plugin-prettier -D
```

- .prettierrc.js

# tsconfig.json

- Create a default one

```bash
npx tsc --init
```

- Defines a <code>include</code> in this to specify the folder for ts files

- By doing this, just run <code>npx tsc</code> to compile to <code>outDir</code>

```bash
npx tsc
```

- Then, the <code>src</code> folder holds the ts files (development)

- Then, the <code>dist</code> folder holds the transpiled js files (production)

- **WE MUSTN'T MODIFY THE TRANSPILED FILES**
