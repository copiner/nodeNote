
nohup 是 no hang up 的缩写，就是不挂断的意思

nohup node app.js &

& ： 指在后台运行，（ & ：表示"and"的符号）

nohup ： 不挂断的运行，注意并没有后台运行的功能，
就是指，用nohup运行命令可以使命令永久的执行下去，和用户终端没有关系，
例如我们断开SSH连接都不会影响他的运行，
注意了nohup没有后台运行的意思；&才是后台运行



注意：在当shell中提示了nohup成功后还需要按终端上键盘任意键退回到shell输入命令窗口，然后通过在shell中输入exit来退出终端；而我是每次在nohup执行成功后直接点关闭程序按钮关闭终端.。所以这时候会断掉该命令所对应的session，导致nohup对应的进程被通知需要一起shutdown。


无论是否将 nohup 命令的输出重定向到终端，输出都将附加到当前目录的 nohup.out 文件中

npm install -g pm2