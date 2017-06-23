获取最新10条评论：curl -i https://api.github.com/repos/wzpan/wzpan.github.io/issues/comments\?per_page\=10
获取全部评论（注意分页）：curl -i https://api.github.com/repos/wzpan/wzpan.github.io/issues
获取某篇文章的评论（注意分页）：curl -i https://api.github.com/repos/wzpan/wzpan.github.io/issues/:number/comments
  - 顺序/逆序：sort 参数
发布评论(需登录)：POST /repos/:owner/:repo/issues/:number/comments
