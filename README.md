View-pagination
===============
  a simple pagination for view

## Use it
  this is used for express


1. app.js

>      var pagination = require('view-pagination');
>
>      app.locals({
>        paginate: pagination.paginate
>      });
>
>      app.get('/users', function(res, req){
>        var pageOpts = {
>          currentPage: req.query.page || 1,
>          perPage: 20,
>          innerWindow: 2
>        };
>        Model.findAndCountAll({where:{}}).success(function(users){
>          res.render('users/index', { users: users, pageOpts: pageOpts });
>        });
>      });

2. view/users/index.ejs

>      <%- paginate(users.count, pageOpts) %>


  tips, 'pageOpts' has options:

      {
        currentPage: 1,
        perPage: 10,
        prevTag: '&lt; Prev',
        nextTag: 'Next &gt;',
        firstTag: '&laquo;',
        lastTag: '&raquo;',
        pageTag: 'page',
        showDot: true,
        dot: '...',
        innerWindow: 2
      }

/* Markdown语法简单介绍 */
/* 表示段落只需要连续两个回车就可以了 */
/* 各级标题 */
/* 第一种是在标题前面加上1~6个”#”表示”<h1>”~”<h6>” */
/* 第二种是在标题下面另起一行，输入四个以上的等号“=”来表示”<h1>”，输入四个以上的减号“-”来表示”<h2>” */
/* h1,h2,h3,..... */
# Hello
## Hello
.....
/* 列表 ,+是UL，数字是OL */
+ Python
+ Ruby
+ Lisp
1. Python
2. Ruby
3. Lisp
+ Abacus
     * answer
+ Bubbles
    1.  bunk
    2.  bupkis
        + BELITTLER
    3. burper
+ Cunning
/* 链接*/
[sebug](http://sebug.net/)
<http://sebug.net/>
<链接> ：这种形式只是简单的标出链接；
[文字](链接 “标题”)：给文字添加链接，其中标题是可选的；
[文字][标记]：给文字添加链接，链接在下面的一个以[标记]开头的新行（一般是文章末尾）给出。或者直接以[文字][]这种形式编写，在下面的新行中使用[文字]:链接的形式声明链接。
/* 代码和引用 */
# 插入一句代码，把代码用 (`) 符号包围起来即可，如果插入一大段代码也很简单，在代码的每一行之前加四个空格。
/* 使用引用 blockquote*/
>Code Share
> > Code Share
/* 使用图片*/
![sebug.net](http://ssvq5.sinaapp.com/sv4/img/ssv_logo_3ee2.png "sebug.net")
/* 其他 */
/* 粗体和斜体：用星号”*”或者下划线”_” */
/* 一个表示斜体； */
/* 两个表示粗体； */
/* 三个表示粗斜体 */
*单星号*
_单下划线_
**双星号**
__双下划线__
/* 转义符：”\”。只要给不希望被转义的字符前面加上\就可以了 */
/* 水平线：使用三个以上的”*”或”-”来表示。这些星号跟减号之间可以用空格，如果减号没有空格，那它必须在单独的一个段落里，要不它会被识别为标题的 */


