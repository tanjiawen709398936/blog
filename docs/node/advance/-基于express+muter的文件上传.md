## 概览

图片上传是web开发中经常用到的功能，node社区在这方面也有了相对完善的支持。

常用的开源组件有**multer**、**formidable**等，借助这两个开源组件，可以轻松搞定图片上传。

## 环境初始化

非常简单，一行命令。

```bash
npm install express multer multer --save
```

每个示例下面，都有下面两个文件

```bash
➜  upload-custom-filename git:(master) ✗ tree -L 1
.
├── app.js # 服务端代码，用来处理文件上传请求
├── form.html # 前端页面，用来上传文件
```

## 基础例子：单图上传

```javascript
var fs = require('fs');
var express = require('express');
var multer  = require('multer')

var app = express();
var upload = multer({ dest: 'upload/' });

// 单图上传
app.post('/upload', upload.single('logo'), function(req, res, next){
    res.send({ret_code: '0'});
});

app.get('/form', function(req, res, next){
    var form = fs.readFileSync('./form.html', {encoding: 'utf8'});
    res.send(form);
});

app.listen(3000);

```

```html
<form action="/upload" method="post" enctype="multipart/form-data">
    <h2>单图上传</h2>
    <input type="file" name="logo">
    <input type="submit" value="提交">
</form>
```

运行服务。

```bash
node app.js
```


访问 http://127.0.0.1:3000/form ，选择图片，点击“提交”，done。然后，你就会看到 upload 目录下多了个图片。

## 基础例子：多图上传


代码简直不能更简单，将前面的 upload.single('logo') 改成 upload.array('logo', 2) 就行。表示：同时支持2张图片上传，并且 name 属性为 logo。

```javascript
var fs = require('fs');
var express = require('express');
var multer  = require('multer')

var app = express();
var upload = multer({ dest: 'upload/' });

// 多图上传
app.post('/upload', upload.array('logo', 2), function(req, res, next){
    res.send({ret_code: '0'});
});

app.get('/form', function(req, res, next){
    var form = fs.readFileSync('./form.html', {encoding: 'utf8'});
    res.send(form);
});

app.listen(3000);


```



```html
<form action="/upload" method="post" enctype="multipart/form-data">
    <h2>多图上传</h2>
    <input type="file" name="logos">
    <input type="file" name="logos">
    <input type="submit" value="提交">
</form>
```

同样的测试步骤，不赘述。

## 获取上传的图片的信息

很多时候，除了将图片保存在服务器外，我们还需要做很多其他事情，比如将图片的信息存到数据库里。

常用的信息比如原始文件名、文件类型、文件大小、本地保存路径等。借助multer，我们可以很方便的获取这些信息。

还是单文件上传的例子，此时，multer会将文件的信息写到 req.file 上，如下代码所示。



```javascript
var fs = require('fs');
var express = require('express');
var multer  = require('multer')

var app = express();
var upload = multer({ dest: 'upload/' });

// 单图上传
app.post('/upload', upload.single('logo'), function(req, res, next){
    var file = req.file;

    console.log('文件类型：%s', file.mimetype);
    console.log('原始文件名：%s', file.originalname);
    console.log('文件大小：%s', file.size);
    console.log('文件保存路径：%s', file.path);

    res.send({ret_code: '0'});
});

app.get('/form', function(req, res, next){
    var form = fs.readFileSync('./form.html', {encoding: 'utf8'});
    res.send(form);
});

app.listen(3000);
```



```html
<form action="/upload" method="post" enctype="multipart/form-data">
    <h2>单图上传</h2>
    <input type="file" name="logo">
    <input type="submit" value="提交">
</form>
```

启动服务，上传文件后，就会看到控制台下打印出的信息。

```bash
文件类型：image/png
原始文件名：1.png
文件大小：18379
文件保存路径：upload/b7e4bb22375695d92689e45b551873d9
```


## 自定义文件上传路径、名称

有的时候，我们想要定制文件上传的路径、名称，multer也可以方便的实现。

### 自定义本地保存的路径

非常简单，比如我们想将文件上传到 my-upload 目录下，修改下 dest 配置项就行。

```javascript
var upload = multer({ dest: 'upload/' });
```

在上面的配置下，所有资源都是保存在同个目录下。有时我们需要针对不同文件进行个性化设置，那么，可以参考下一小节的内容。

### 自定义本地保存的文件名

代码稍微长一点，单同样简单。multer 提供了 **storage** 这个参数来对资源保存的路径、文件名进行个性化设置。

使用注意事项如下：

* destination：设置资源的保存路径。注意，如果没有这个配置项，默认会保存在 /tmp/uploads 下。此外，路径需要自己创建。
* filename：设置资源保存在本地的文件名。

[app.js](../examples/2016.11.07-advanced-express-multer/upload-custom-filename/app.js)。

```javascript
var fs = require('fs');
var express = require('express');
var multer  = require('multer')

var app = express();

var createFolder = function(folder){
    try{
        fs.accessSync(folder); 
    }catch(e){
        fs.mkdirSync(folder);
    }  
};

var uploadFolder = './upload/';

createFolder(uploadFolder);

// 通过 filename 属性定制
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, uploadFolder);    // 保存的路径，备注：需要自己创建
    },
    filename: function (req, file, cb) {
        // 将保存文件名设置为 字段名 + 时间戳，比如 logo-1478521468943
        cb(null, file.fieldname + '-' + Date.now());  
    }
});

// 通过 storage 选项来对 上传行为 进行定制化
var upload = multer({ storage: storage })

// 单图上传
app.post('/upload', upload.single('logo'), function(req, res, next){
    var file = req.file;
    res.send({ret_code: '0'});
});

app.get('/form', function(req, res, next){
    var form = fs.readFileSync('./form.html', {encoding: 'utf8'});
    res.send(form);
});

app.listen(3000);
```


```html
<form action="/upload" method="post" enctype="multipart/form-data">
    <h2>单图上传</h2>
    <input type="file" name="logo">
    <input type="submit" value="提交">
</form>
```

测试步骤不赘述，访问一下就知道效果了。

## 写在后面

本文对multer的基础用法进行了介绍，并未涉及过多原理性的东西。俗话说 **授人以渔不如授人以渔**，在后续的章节里，会对文件上传的细节进行挖掘，好让读者朋友对文件上传加深进一步的认识。


## 相关链接

multer官方文档：https://github.com/expressjs/multer

