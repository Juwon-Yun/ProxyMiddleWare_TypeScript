## http-proxy-middleware With TypeScript
[μλ³Έλ ν¬](https://github.com/chimurai/http-proxy-middleware)

 
## π¨π»βπ§ When
κ°λ° νκ²½μμ CORS μ μ±μ μ°ννκΈ° μν λ€μν λ°©λ² μ€ νλμΈ

νλ‘μ λ―Έλ€μ¨μ΄λ₯Ό μ΄μ©ν κ°λ° μΈνμλλ€.

## π How

```js
package.json μ€μ 
"proxy" : "http://127.0.0.1:8080"

setupProxy.ts μ€μ 
import { createProxyMiddleware } from 'http-proxy-middleware';
    ...
```

Reactμ Entry Pointμ κ°μ ν΄λ κ΅¬μ‘° κΉμ΄μ setupProxy.tsλ₯Ό μμ±ν©λλ€.

setupProxy.ts μμ λ―Έλ¦¬ μ€μ ν API μ£Όμλ‘ μ€μ  μ½λμ μ μ©νλ©΄ νλ‘μ μμ²­μ΄ μ μ©λ©λλ€.

## π‘ Tips

axios.defaults.baseURLμ μ€μ ν  νμμμ΄ μλμΌλ‘ νλ‘μ νκ² μ£Όμλ‘ λ§€νλ©λλ€.
