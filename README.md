# wallet-sdk-test

## Example usage
Add the wallet sdk script in your html file
```html
<script src="https://assets.leapwallet.io/wallet-sdk-test/wallet-sdk-test.v0.1.min.js"></script>
```

```js
  // generate a 12 word mnemonic seed
  const mnemonic = window.getMnemonic()
  // generate the signing key from mnemonic
  const signingKey = window.getHDKey(mnemonic)


  const message = "Hello world!"
  
  const hash = window.messageHash("message")
  // sign a message using the signing key
  const signature = window.sign(signingKey, hash)

```