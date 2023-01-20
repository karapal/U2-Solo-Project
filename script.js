let url = "https://striveschool-api.herokuapp.com/api/movies";

window.onload = () => {
    getData();
  };
  const getData = async () => {
    try {
      let res = await fetch(url, {
        headers: {
          Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2NhYWZmYTE3ZWE3ODAwMTUyZWMwYzMiLCJpYXQiOjE2NzQyMjc3MDcsImV4cCI6MTY3NTQzNzMwN30.BT3pchvAXv7-moNSjFqztIQImtsvcCsHC_48-tL-Pd4"
        },
    });
    if (res.ok) {
        let data = await res.json();
        console.log(data);
        showMovies(data);
      }
    } catch (error) {
      console.log(error);
    }
  };


  const showMovies = (movies) => {
    let row = document.getElementById("row");
    movies.forEach((singleMovie) => {
      row.innerHTML += `
      <div class="col">
      <div class="card">
      <img src="${singleMovie.imageUrl}" class="card-img-top w-100" alt="...">
      <div class="card-body">
        <h5 class="card-title">${singleMovie.name}</h5>
        <p class="card-text">${singleMovie.description}</p>
      </div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">${singleMovie.genre}</li>
      </ul>
      <div class="card-body">
        <a href='./back.html?id=${singleMovie._id}' class="card-link"><button>Add</button></a>
        <a href="#" class="card-link"><button class='btn btn-danger m-1'")'>Delete</button></a>
      </div>
    </div>
    </div>`;
    });
  };