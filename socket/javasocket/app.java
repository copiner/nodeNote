//java端代码,会用到socket.io-client-java   //http://blog.chinaunix.net/uid-12348673-id-5197012.html
public class SocketIoTest {
    public static void main(String[] args) throws URISyntaxException {

        final Socket socket = IO.socket("http://127.0.0.1:3000");
        socket.on(Socket.EVENT_CONNECT, new Emitter.Listener() {

            @Override
            public void call(Object... args) {
                System.out.println("EVENT_CONNECT");
                socket.emit("chat message", "hi java");
                socket.disconnect();
            }

        }).on(Socket.EVENT_ERROR, new Emitter.Listener() {

            @Override
            public void call(Object... args) {
                System.out.println("EVENT_ERROR");
            }

        }).on(Socket.EVENT_DISCONNECT, new Emitter.Listener() {

            @Override
            public void call(Object... args) {
                System.out.println("EVENT_DISCONNECT");
            }

        });
        socket.connect();
        System.out.println(socket.connected());

    }
}
