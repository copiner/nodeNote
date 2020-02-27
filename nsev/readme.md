
nohup 是 no hang up 的缩写，就是不挂断的意思

nohup node app.js &

& ： 指在后台运行

nohup ： 不挂断的运行，注意并没有后台运行的功能，
就是指，用nohup运行命令可以使命令永久的执行下去，和用户终端没有关系，
例如我们断开SSH连接都不会影响他的运行，
注意了nohup没有后台运行的意思；&才是后台运行

npm install -g pm2