## http-proxy-middleware With TypeScript
[원본레포](https://github.com/chimurai/http-proxy-middleware)

# 👨🏻‍🔧 

# 🚀 How To Use
---
개발 환경에서 CORS 정책을 우회하기 위한 다양한 방법 중 하나인

프록시 미들웨어를 이용한 개발 세팅입니다.

```js
package.json 설정
"proxy" : "http://127.0.0.1:8080"

setupProxy.ts 설정
import { createProxyMiddleware } from 'http-proxy-middleware';
    ...
```

React의 Entry Point와 같은 폴더 구조 깊이에 setupProxy.ts를 생성합니다.

setupProxy.ts 에서 미리 설정한 API 주소로 실제 코드에 적용하면 프록시 요청이 적용됩니다.
#

--- 

# 💡 Tip

axios.defaults.baseURL을 설정할 필요없이 자동으로 프록시 타겟 주소로 매핑됩니다.