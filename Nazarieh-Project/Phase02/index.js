const dataURL =
  "https://raw.githubusercontent.com/Star-Academy/codestar-documents/master/static/datasets/books.json";

fetch(dataURL)
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    data.forEach((book) => {
      const newBook = document.createElement("div");
      newBook.classList.add("book");
      const title = document.createElement("h2");
      title.textContent = book.name;
      const author = document.createElement("h3");
      author.textContent = `Author: ${book.author}`;
      const img = document.createElement("img");
      img.src = book.image;
      img.alt = book.name;
      const genre = document.createElement("p");
      genre.textContent = `Genre: ${book.genre.join(", ")}`;
      const publishData = document.createElement("span");
      publishData.textContent = `Publish Data: ${book.publishData}`;
      const price = document.createElement("span");
      price.textContent = `Price: ${book.price}`;
      newBook.appendChild(title);
      newBook.appendChild(author);
      newBook.appendChild(img);
      newBook.appendChild(genre);
      newBook.appendChild(publishData);
      newBook.appendChild(price);
      document.querySelector("article").appendChild(newBook);
    });
  })
  .catch((error) => {
    console.error(error);
  });
