function addBlogPost(title, author, content) {
    var blogPost = new BlogTemplate(title, author, content);
    blogContainer.appendChild(blogPost);
}

function handleSubmit(event) {
    event.preventDefault();
    var form = document.myForm;
    var title = form.title.value;
    var author = form.author.value;
    var content = form.content.value;
    addBlogPost(title, author, content);
}

document.myForm.onsubmit = handleSubmit;