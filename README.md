# SimpleCrypto
Simple JavaScript Cryptography Algorithm Library

## Installation
Download the SimpleCrypto.js or Use these CDN
```html
<script src="https://cdn.jsdelivr.net/gh/faizath/SimpleCrypto@main/SimpleCrypto.js"></script>
```
or
```html
<script src="https://faizath.github.io/SimpleCrypto/SimpleCrypto.js"></script>
```

## Supported Algorithm
- [ROT13](https://en.wikipedia.org/wiki/ROT13)
  ```javascript
  SimpleCrypto.ROT13(a-z string)
  ```
  
- [Columnar Transposition](https://en.wikipedia.org/wiki/Transposition_cipher#Columnar_transposition)
  - Encrypt
    ```javascript
    SimpleCrypto.ColumnarTransposition.encrypt(a-z string, a-z key)
    ```
  - Decrypt
    ```javascript
    SimpleCrypto.ColumnarTransposition.decrypt(a-z string, a-z key)
    ```
    
- [Vigenère Cipher](https://en.wikipedia.org/wiki/Vigen%C3%A8re_cipher)
  - Encrypt
    ```javascript
    SimpleCrypto.Vigenere.encrypt(a-z string, a-z key)
    ```
  - Decrypt
    ```javascript
    SimpleCrypto.Vigenere.decrypt(a-z string, a-z key)
    ```

## Contributing
1.  Fork it (https://github.com/faizath/SimpleCrypto/fork)
2.  Create your feature branch (git checkout -b my-new-feature)
3.  Commit your changes (git commit -am 'Add some feature')
4.  Push to the branch (git push origin my-new-feature)
5.  Create a new pull request
