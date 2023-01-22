let url = "https://striveschool-api.herokuapp.com/api/movies"
let params = new URLSearchParams(location.search)
let id = params.get("id")
let category = params.get("genre")

const postData = async (movies) => {
    try {
      let res = await fetch(url, {
        method: "POST",
        body: JSON.stringify(movies),
        headers: {
          "Content-Type": "application/json",
          Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2NhYWZmYTE3ZWE3ODAwMTUyZWMwYzMiLCJpYXQiOjE2NzQyMjc3MDcsImV4cCI6MTY3NTQzNzMwN30.BT3pchvAXv7-moNSjFqztIQImtsvcCsHC_48-tL-Pd4"
        },
      });
    } catch (error) {
      console.log(error);
    }
  };

  async function addMovie() {
  try {
    let movie = {
      name: document.querySelector("#movie-name").value,
      description: document.querySelector("#movie-description").value,
      category: document.querySelector("#movie-category").value,
      imageUrl: document.querySelector("#movie-image").value
    };

    let options = {
      method: "POST",
      headers: new Headers({
        "Content-type": "application/json",
        "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2M5M2RlZmU3MzczODAwMTUzNzQzOWEiLCJpYXQiOjE2NzQxMzI5NzYsImV4cCI6MTY3NTM0MjU3Nn0.Cj7au6cWrGlbwHOg8ITb0psSHPW6cdDE58ySVLXQL5E"
      }),
      body: JSON.stringify(movie)
    };

    let response = await fetch(url, options);
    if (response.ok) {
      throw response.status + " " + response.statusText;
    }
  } catch (error) {
    console.log(error);
  }
}

