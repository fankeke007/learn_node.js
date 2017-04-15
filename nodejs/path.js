//1.__dirname:前模块文件所在目录的完整绝对路径
var path=require('path');
var ROOT_PATH=path.resolve(__dirname);
console.log(ROOT_PATH);//返回path.js绝对路径
console.log(__dirname);
console.log(path.resolve(__dirname,'app'));

//path的其他用法

//2.path.normalize()
var normalize_path=path.normalize('/foo/bar//baz/asdf/quux/..');
console.log(normalize_path);

//3.path.join(),将所有名称用path.seq串联起来，然后用normailze格式化
console.log(path.join('///foo', 'bar', '//baz/asdf', 'quux', '..'));


