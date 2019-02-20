# leven_wasm

Rust port of [leven](https://github.com/sindresorhus/leven), compiled to WebAssembly. Levenshtein distance implementation from [wooorm/levenshtein-rs](https://github.com/wooorm/levenshtein-rs), forked so I could try optimizing, though I haven't gotten around to that yet.

The leven folder is forked from [sindresorhus/leven](https://github.com/sindresorhus/leven), and updated for the times, plus fixed up to test and bench leven_wasm. Currently 10x slower than leven in node.

```shell
wasm-pack build --target nodejs
cd leven
yarn install
yarn test
```
