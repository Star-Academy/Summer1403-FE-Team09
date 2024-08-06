function addNewBook(book_obj) {
    var _a;
    var h3_tag = document.createElement("h3");
    h3_tag.textContent = book_obj === null || book_obj === void 0 ? void 0 : book_obj.name;
    var img_tag = document.createElement("img");
    img_tag.src = book_obj === null || book_obj === void 0 ? void 0 : book_obj.image;
    img_tag.alt = book_obj === null || book_obj === void 0 ? void 0 : book_obj.name;
    var p_tag = document.createElement("p");
    p_tag.innerHTML = "author: ".concat(book_obj === null || book_obj === void 0 ? void 0 : book_obj.author, "<br>\n    publishData: ").concat(book_obj === null || book_obj === void 0 ? void 0 : book_obj.publishData, "<br>\n    genre: ").concat(book_obj === null || book_obj === void 0 ? void 0 : book_obj.genre.join(", "));
    var div_tag = document.createElement("div");
    div_tag.classList.add("card");
    div_tag.appendChild(h3_tag);
    div_tag.appendChild(img_tag);
    div_tag.appendChild(p_tag);
    (_a = document.getElementById("container")) === null || _a === void 0 ? void 0 : _a.appendChild(div_tag);
}
var book_api_url = "https://raw.githubusercontent.com/Star-Academy/codestar-documents/master/static/datasets/books.json";
fetch(book_api_url)
    .then(function (response) { return response.json(); })
    .then(function (data) {
    data.forEach(function (book_obj) {
        addNewBook(book_obj);
    });
})
    .catch(function (error) {
    alert("There was a problem fetching the data.");
    console.error(error);
});
