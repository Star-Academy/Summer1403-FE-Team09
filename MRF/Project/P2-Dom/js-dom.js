function addNewBook(book_obj) {
  const h3_tag = document.createElement("h3");
  h3_tag.textContent = book_obj?.name;

  const img_tag = document.createElement("img");
  img_tag.src = book_obj?.image;
  img_tag.alt = book_obj?.name;

  const p_tag = document.createElement("p");
  p_tag.innerHTML = `author: ${book_obj?.author}<br>
    publishData: ${book_obj?.publishData}<br>
    genre: ${book_obj?.genre.join(", ")}`;

  const div_tag = document.createElement("div");

  div_tag.style.border = "1px solid black";
  div_tag.style.margin = "10px";
  div_tag.style.padding = "10px";
  div_tag.style.width = "300px";
  div_tag.style.textAlign = "center";
  div_tag.style.backgroundColor = "lightgray";
  div_tag.style.borderRadius = "10px";

  div_tag.appendChild(h3_tag);
  div_tag.appendChild(img_tag);
  div_tag.appendChild(p_tag);

  document.getElementById("container").appendChild(div_tag);
}

const book_api_url =
  "https://raw.githubusercontent.com/Star-Academy/codestar-documents/master/static/datasets/books.json";

fetch(book_api_url)
  .then((response) => response.json())
  .then((data) => {
    data.forEach((book_obj) => {
      addNewBook(book_obj);
    });

    console.log(data);
  })
  .catch((error) => {
    alert("There was a problem fetching the data.");
    console.error(error);
  });

const con = document.getElementById("container");
con.style.display = "flex";
con.style.flexWrap = "wrap";
con.style.justifyContent = "center";
