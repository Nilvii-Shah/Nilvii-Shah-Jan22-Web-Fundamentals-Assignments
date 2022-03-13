const convert_to_json = function (response) {
    return response.json();
  };
  
  const handle_data = function (res) {
    const user_arr = res.data;
    const con = document.getElementById("img_container");
    for (let i = 0; i < user_arr.length; i += 1) {
      const single_user = user_arr[i];
  
      const new_img = document.createElement("img");
      new_img.src = single_user.images.original.url;
  
      con.appendChild(new_img);
    }
  };
  
  fetch(
    "https://api.giphy.com/v1/gifs/trending?api_key=yZVO4zVPQWnqeMD0TVbwIO7p4v3hKMzZ&limit=10&rating=g"
  )
    .then(convert_to_json)
    .then(handle_data);
  const do_somthing = function (response) {
    return response.json();
  };
  
  const handle_search = function (res) {
    const user_arr = res.data;
    console.log(user_arr);
    const container = document.getElementById("img_container");
    container.innerHTML = "";
    for (let i = 0; i < user_arr.length; i += 1) {
      const single_user = user_arr[i];
      const new_img = document.createElement("img");
      new_img.src = single_user.images.original.url;
      container.appendChild(new_img);
    }
  };
  const api_key = "1DpSkJpQBhrjce7NAlNnw8hDWxUjmJfz";
  const limit = 10;
  const search_fn = function () {
    const input = document.getElementById("input_field");
    const user_id = input.value;
    input.value = "";
    fetch(
      `https://api.giphy.com/v1/gifs/search?api_key=${api_key}&q=${user_id}&limit=${limit}&offset=0&rating=g&lang=en`
    )
      .then(do_somthing)
      .then(handle_search);
  };
  const search_btn = document.getElementById("search_btn");
  search_btn.addEventListener("click", search_fn);