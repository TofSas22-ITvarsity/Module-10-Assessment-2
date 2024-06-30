let category = getCategory();

function getRecipeList() {
    let rootPath = "https://mysite.itvarsity.org/api/recipe-book/";
    let fullPath = rootPath + "get-recipes/?category=" + category;

    fetch(fullPath)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data);
        })
}

function getCategory() {
    let url = window.location.href;
    let pos = url.search("=");
    let category = url.slice(pos + 1);

    return category;
}