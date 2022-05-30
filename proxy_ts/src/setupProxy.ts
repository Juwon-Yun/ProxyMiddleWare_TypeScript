import { createProxyMiddleware } from 'http-proxy-middleware';

// example 1
const options = {
    // 프록시로 요청을 보낼 Host를 입력합니다.
    target : "http://127.0.0.1:8080",
    // 가상 호스팅 on/off 여부, ssl 인증을 사용할 경우에 유용한 옵션.
    changeOrigin : true,
    // 프록시로 WebSocket 통신을 하는 경우 true 설정.
    ws : false,
    router : {
        // 아래 입력한 호스트에게 요청 헤더를 변경할 수 있습니다.
        "targetURL:port" : "http://192.168.0.1:9090"
    },
    // 요청하는 API의 주소를 재정의할 수 있습니다.
    pathRewrite:{
        // 프록시로 요청한 주소 : 재정의할 주소
        "^/home" : "/api/home",
        "^/api/path" : "/path"
    }
}

// example 2
const exProxy = createProxyMiddleware("/example/home", {
    target: "http://127.0.0.1:8080",
    changeOrigin: true,
});


module.exports = (app : any) => {
    // app.use( RequestHandler type, options)와 같이 사용할 수 있습니다.

    // example 1
    app.use(createProxyMiddleware("/home", options));

    // example 2
    app.use(exProxy);
}