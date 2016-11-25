# 如何给项目增加hash版本号
本文通过grunt-filerev和grunt-usemin给项目增加hash来强制更新版本，需求和背景请见[如何发布项目和更新版本](http://blog.csdn.net/baidu_35407267/article/details/53328307)
查看效果前请将package.json中grunt包下载并安装grunt-cli，请执行

```
npm install -g grunt-cli
npm install
```
安装后，跟目录会出现node_modules文件夹，说明安装成功
根据[链接](http://blog.csdn.net/baidu_35407267/article/details/53328307)中的提示，第一步执行

```
grunt first
```
这时候将整个项目放到客户服务器就算上线了。可是，代码么，难免会有bug，改来改去很正常，当我们修改的时候，要修改dest文件夹中的js，css，以及html。改完后执行

```
grunt 
grunt usemin
```
这时每个js，css都会增加对应的md5的hash版本号。以后修改依然修改dest的文件并执行上述命令，就强制更新资源，未更新的从缓存读取。
