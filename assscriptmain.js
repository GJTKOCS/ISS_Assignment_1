let mode = 0;

function toggleMode() {

    if (mode === 0) {

        document.getElementById('modeimage').src = "brightness.png";
        document.getElementById('stylez').href = "lightmodeass.css";
        mode = 1;

    }

    else {

        document.getElementById('modeimage').src = "moon.png";
        document.getElementById('stylez').href = "darkmodeass.css";
        mode = 0; 

    }

}


document.addEventListener('DOMContentLoaded', () => {

    let blog1LikesCount = parseInt(localStorage.getItem('blog1LikesCount')) || 0;
    let blog1Comments = JSON.parse(localStorage.getItem('blog1Comments')) || [];

    let blog2LikesCount = parseInt(localStorage.getItem('blog2LikesCount')) || 0;
    let blog2Comments = JSON.parse(localStorage.getItem('blog2Comments')) || [];

    document.getElementById('blog1LikesCount').innerText = blog1LikesCount;
    updateCommentsUI('blog1CommentsList', blog1Comments);


    document.getElementById('blog2LikesCount').innerText = blog2LikesCount;
    updateCommentsUI('blog2CommentsList', blog2Comments);
});


function increaseLikes(blogId) {

    let likesCount = parseInt(localStorage.getItem(`${blogId}LikesCount`)) || 0;
    likesCount++;
    localStorage.setItem(`${blogId}LikesCount`, likesCount);

    document.getElementById(`${blogId}LikesCount`).innerText = likesCount;
}

function addComment(blogId) {

    let commentInput = document.getElementById(`${blogId}CommentInput`);
    let commentText = commentInput.value.trim();

    if (commentText !== '') {

        let comments = JSON.parse(localStorage.getItem(`${blogId}Comments`)) || [];


        comments.push(commentText);

        localStorage.setItem(`${blogId}Comments`, JSON.stringify(comments));


        updateCommentsUI(`${blogId}CommentsList`, comments);


        commentInput.value = '';
    }
}

function updateCommentsUI(listId, comments) {

    let commentsList = document.getElementById(listId);


    commentsList.innerHTML = '';


    comments.forEach(comment => {
        let commentElement = document.createElement('li');
        commentElement.innerText = comment;
        commentsList.appendChild(commentElement);
    });
}




