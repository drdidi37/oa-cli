# 从 0 开始构建你的第一个 cli 工具

## 环境配置

首先你需要安装 node，关于如何安装 node，这里就不再赘述，自行到官网下载最新版即可

1. 新建一个文件夹**oa-cli**，并进入文件夹，控制台执行`npm init -y`
2. 安装一些必要的包，每个包的作用在用到时会一一进行说明

```bash
npm i chalk clear commander download-git-repo figlet handlebars inquirer open ora watch --save
```

3. 安装**eslint**，推荐，个人 demo 的化，不必要；但为了良好的代码习惯，推荐安装
   1. 执行`npm i eslint eslint-config-standard eslint-plugin-import eslint-plugin-node eslint-plugin-promise -D`
   2. 在**git bash**工具中执行`./node_modules/.bin/eslint --init`，按自己需求进行选择即可
4. 新建`bin/index.js`文件，作为为了 cli 工具的入口，并在`package.json`文件中加入如下配置：

```json
"bin": {
  "oa": "./bin/index.js"
}
```

5. 执行`npm link`，执行成功后，你的第一个 cli 工具的最基本的环境就配置完成了，接下来就我们开始验证一下是否能工作吧，在`bin/index.js`填入如下代码，然后在控制台输入`oa`，如果输出了*hello cli*说明你的工具已经能正常运行了，那么马上开始更近一步吧

```
#!/usr/bin/env node
console.log("hello cli")
```
