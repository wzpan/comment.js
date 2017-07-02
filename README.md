comment.js
===

Pure JavaScript to make a comment system. Use issue system of code hosting sites like Github/OSChina as the backend. Easily to use. Free for running.

## Dependencies

* [jQuery](https://jquery.com/)
* [markdown-js](https://github.com/evilstreak/markdown-js)
* [timeago.js](https://github.com/hustcc/timeago.js)
* [spin](https://github.com/fgnass/spin.js)

``` html
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/2.0.3/jquery.js">/script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/markdown.js/0.5.0/markdown.min.js">/script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/timeago.js/3.0.2/timeago.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/spin.js/2.3.2/spin.min.js"></script>
<script src="comment.js"></script>
```

## How to use

### 1. Create Github Repo

Create a Github repo for hosting your comments.

### 2. Comment Thread

In this section I will describe on how to generate a comment thread for a certain page for your site.

Firstlly, Write a div for placing your comment thread.

``` html
<div id="comment-thread"></div>
```

Secondly, write a div for placing a spinning indicator(optional):

``` html
<div id="loading-spin"></div>
```

Thirdly, call `getComments()` function to fetch comment thread and display them to the page.

``` js
<script type="text/javascript">
   var opt = {
       type: "github",
	   user: "wzpan",
	   repo: "comment.js",
	   no_comment: "No comments yet. Press the button and go to comment now!",
	   go_to_comment: "Go to comment",
	   issue_id: "1",
	   btn_class: "btn",
	   comments_target: "#comment-thread",
	   loading_target: "#loading-spin"
   };
   getComments(opt);
</script>
```

parameters explaning:

* `type`: the site as the backend. Currently supports Github and OSChina.
* `user`: your site's user account.
* `repo`: your repo for comment issue tracking.
* `no_comment`: tips when no comments are fetched.
* `go_to_comment`: text of the "go to comment" button.
* `issue_title`: the corresponding issue title to your page. Alternatively you can use `issue_id`. 
* `issue_id`: the corresponding issue id to your page. Alternatively you can use `issue_title`.
* `btn_class`: css class name for the "go to comment" button.
* `comments_target`: target for displaying comment thread. 
* `loading_target`(optional): target for displaying loading a spinning indicator.
* `token`(optional): please refer to [Enlarge Rate Limiting](#enlarge-rate-limiting).

example:

<div id="comment-thread"></div>
<div id="loading-spin"></div>

### 3. Recent Comment List

In this section I will describe on how to generate a recent comment list for your site.

Firstlly, Write a div for placing the recent comment list.

``` html
<div id="recent-comments"></div>
```

Secondly, call `getRecentCommentsList()` function to fetch a comment list and display them to the page.

``` js
<script type="text/javascript">
   var opt = {
       type: "github",
	   user: "wzpan",
	   repo: "comment.js",
	   recent_comments_target: "#recent-comments",
	   count: 5
   };
   getRecentCommentsList(opt);
</script>
```

parameters explaning:

* `type`: the site as the backend. Currently supports Github and OSChina.
* `user`: your site's user account.
* `repo`: your repo for comment issue tracking.
* `recent_comments_target`: target for displaying recent comment list.
* `count`: the maximize length of the comment list.
* `token`(optional): please refer to [Enlarge Rate Limiting](#enlarge-rate-limiting).

example:

<div id="recent-comments"></div>

## Enlarge Rate Limiting

For avoid abuse API calling, Github API (and the same as OSChina API) has [Rate Limiting](https://developer.github.com/v3/#rate-limiting). To enlarge the limit you can [generate an access token](https://github.com/settings/tokens) and attach your token here. Only "public repo"  is needed when selecting OAuth scopes. Notice that it may be unsafe to expose such token to your site.
