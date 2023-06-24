$(document).ready(function() {
  
  var comments = [];

  
  function renderComments() {
    var commentList = $("#comment-list");
    commentList.empty();

    
    for (var i = comments.length - 1; i >= 0; i--) {
      var comment = comments[i];

      var commentItem = $("<div>").addClass("comment");
      var displayName = $("<strong>").text(comment.displayName);
      var commentText = $("<p>").text(comment.comment);

      var actions = $("<div>").addClass("actions");
      var editBtn = $("<button>").text("Edit");
      var deleteBtn = $("<button>").text("Delete");

      
      editBtn.click((function(index) {
        return function() {
          editComment(index);
        };
      })(i));

      deleteBtn.click((function(index) {
        return function() {
          deleteComment(index);
        };
      })(i));

      actions.append(editBtn, deleteBtn);

      commentItem.append(displayName, commentText, actions);
      commentList.append(commentItem);
    }
  }

  
  function addComment() {
    var displayNameInput = $("#display-name");
    var commentTextInput = $("#comment-text");

    var displayName = displayNameInput.val();
    var comment = commentTextInput.val();

    if (displayName && comment) {
      var newComment = {
        displayName: displayName,
        comment: comment
      };

    