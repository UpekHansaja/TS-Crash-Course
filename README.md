# TS-Crash-Course

TypeScript Master Crash Course

### Configure TS json

Configure TS by using `--init` flag

```sh
tsc --init
```

in there `rootDir` & `outDir`,
change `rootDir` to,

```json
"rootDir": "./src",
```

and also change `outDir` to,

```json
"outDir": "./dist",
```

after that you don't need to use `tsc index.ts` or `tsc src/index.ts`,
`rootDir` at `tsconfig.json` allows `tsc` to run from the index which `rootDir` is set.

### `--watch` flag

_Compiling `ts` to `js`_

So every time when we change the code base on ts file, we have to compile it by running `tsc` in the terminal.

So instead of compiliing it each and everytime by manually, we have make it little bit automated by using `--watch` flag.

```sh
tsc --watch
```

This will automatticaly compile `ts` to `js` each and everytime we change & save the code base at `index.ts`.

_Run node Project_

As well as the above `tsc`, we can get rid of `node index.js` each and everytime by simple make is automated.

But for this `nodejs` version should be a version above '18'.
recommanded to have at least with 20

to check your node version,

```sh
node -v
```

If your version is a version which less than 18, then you should proberbly update your node version.

Then to automate the output process,

```sh
node --watch dist/index.js
```

So each & everytime when we change the code base and save the file,
node is starting run your project...