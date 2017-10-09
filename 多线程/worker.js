onmessage = pingPong;
function pingPong(e) {
    if(e.data == 'ping'){
        postMessage('pong');
    }
}