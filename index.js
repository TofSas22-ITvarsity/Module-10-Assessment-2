let catergory = getCatergory();

function getRecipeList() {
    let rootPath = "https://mysite.itvarsity.org/api/recipe-book/";
    let fullPath = rootPath + "get-recipes/?catergory=" + catergory;

    fetch(fullPath)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data);
        })
}

function getCatergory() {
    let url = window.location.href;
    let pos = url.search("=");
    let catergory = url.slice(pos + 1);

    return catergory;
}