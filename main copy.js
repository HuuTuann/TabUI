var users = [
    {
        id: 1,
        name: "Hữu Tuấn",
    },
    {
        id: 2,
        name: "Sơn Đặng",
    },
    {
        id: 3,
        name: "Admin",
    },
];

var comments = [
    {
        id: 1,
        user_id: 1,
        content: "Hi!",
    },
    {
        id: 2,
        user_id: 2,
        content: "Hi chào cậu!",
    },
    {
        id: 1,
        user_id: 1,
        content: "^^",
    },
];

function getComments() {
    return new Promise((resolve) => {
        setTimeout(function () {
            resolve(comments);
        }, 1000);
    });
}

function getUsersByIds(userIds) {
    return new Promise(function (resolve) {
        setTimeout(function () {
            var result = users.filter((user) => userIds.includes(user.id));
            resolve(result);
        }, 1000);
    });
}

getComments()
    .then((comments) => {
        var userIds = comments.map((comment) => comment.user_id);
        return getUsersByIds(userIds).then(function (users) {
            return {
                user: users,
                comment: comments,
            };
        });
    })
    .then((data) => {
        var commentBlock = document.getElementById("comment-box");
        var html = "";
        data.comment.forEach(function (comment) {
            var user = data.user.find(function (user) {
                return user.id === comment.user_id;
            });
            html += `<li>${user.name}: ${comment.content}</li>`;
        });
        commentBlock.innerHTML = html;
    });
