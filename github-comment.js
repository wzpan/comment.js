// github issue comment
// Copyright (C) 2017
// Joseph Pan <http://github.com/wzpan>
// This library is free software; you can redistribute it and/or modify
// it under the terms of the GNU Lesser General Public License as
// published by the Free Software Foundation; either version 2.1 of the
// License, or (at your option) any later version.
// 
// This library is distributed in the hope that it will be useful, but
// WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU
// Lesser General Public License for more details.
// 
// You should have received a copy of the GNU Lesser General Public
// License along with this library; if not, write to the Free Software
// Foundation, Inc., 51 Franklin Street, Fifth Floor, Boston, MA
// 02110-1301 USA
// 

var getRecentCommentList = function(github_repo, count) {
    'use strict';
    $.ajax({
        url: 'https://api.github.com/repos/' + github_repo + '/issues/comments\?per_page\=count',
        dataType: 'json',
        success: function (response) {
            console.log(response);
        }
    });
}


var getCommentList = function(comments_url) {
    // Get comments
    $.ajax({
        url: comments_url,
        dataType: 'json',
        success: function (comments) {
            for (let j=0; j<comments.length; ++j) {
                let comment = comments[j];
                let body = comment['body'];
                let updated_at = comment['updated_at'];
                let user = comment['user'];
                console.log(body);
                console.log(updated_at);
                console.log(user);
            }
        }
    });
}


var getComment = function(github_repo, page_title, issue_id) {
    'use strict';
    var comments_url;
    if (!issue_id || issue_id == 'undefined' || typeof(issue_id) == 'undefined') {
        $.ajax({
            url: 'https://api.github.com/repos/' + github_repo + '/issues',
            dataType: 'json',
            success: function (issues) {
                for (let i=0; i<issues.length; ++i) {
                    let issue = issues[i];
                    // match title
                    if (issue['title'] && issue['title'] == page_title) {
                        comments_url = issue['comments_url'];
                        getCommentList(comments_url);
                        break;
                    }
                }
            }
        });
    } else {
        comments_url = 'https://api.github.com/repos/' + github_repo + '/issues/' + issue_id + '/comments';
        getCommentList(comments_url);
    }
}
