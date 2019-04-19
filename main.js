// First API.  Pulling a Random user from API.  API loads Picture,Name,Age

$("#date").click(function() {
<<<<<<< HEAD
    console.log("buttonClick");
    $.ajax({
        url: "https://randomuser.me/api?inc",
        method: "GET",
        dataType: "json"
    }).then(function(results) {
        console.log(results);
        console.log("The button has been clicked");
        // var plung = results;
        // console.log(plung)

        let userImage = JSON.stringify(results.results[0].picture.large);
        $("#randomUser").append(`<img src=${userImage}></img>`);
        // $('#randomUser').append(JSON.stringify(results));

        let userName = JSON.stringify(results.results[0].name.first);

        console.log(userName);
        $("#randomName").append(`${userName}`);

        let userAge = JSON.stringify(results.results[0].dob.age);
        console.log(userAge);
        $("#randomAge").append(`${userAge}`);
    });

    // $("#movie-data").append(JSON.stringify(data));
=======
  console.log("buttonClick");
  $.ajax({
    url: "https://randomuser.me/api?inc",
    method: "GET",
    dataType: "json"
  }).then(function(results) {
    console.log(results);
    console.log("The button has been clicked");
    // var plung = results;
    // console.log(plung)

    let userImage = JSON.stringify(results.results[0].picture.large);
    $("#randomUser").append(`<img src=${userImage}></img>`);
    // $('#randomUser').append(JSON.stringify(results));

    let userName = JSON.stringify(results.results[0].name.first);

    console.log(userName);
    $("#randomName").append(`${userName}`);

    let userAge = JSON.stringify(results.results[0].dob.age);
    console.log(userAge);
    $("#randomAge").append(`${userAge}`);
  });

  // $("#movie-data").append(JSON.stringify(data));
>>>>>>> 2acb009b21bbdca50f64dfc6e5706878a797b763
});

// Second API

$("#yelp").click(function() {
<<<<<<< HEAD
    const api =
        "PVS3a9PApf0d07DZlAgG-AYDTLWOL7UV6LS2k_laaZMnRGbjp6361DwMAaVz4adhiyCR83KD36ARrflrmxAzRi9DmMOVqybQBORtnJzb-CntBJIQEqDWkelhfvi4XHYx";
    //console.log("buttonClick");
    $.ajax({
        url: `https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=pizza&latitude=33.784674&longitude=-84.394832`,
        headers: { Authorization: `Bearer ${api}` },
        method: "GET",
        dataType: "json"
    })
        .then(function(response) {
            console.log(response.businesses);
            for (let i = 0; i < response.businesses.length; i++) {
                //let foodLocation = response.businesses[i].alias;
                console.log(response.businesses[i].name);
                $('#location').append(`<div id="rest">${response.businesses[i].name}</div>`)
            }
        })



        .catch(function(err) {
            console.log(err.responseText);
        });
});
=======
  const api =
    "PVS3a9PApf0d07DZlAgG-AYDTLWOL7UV6LS2k_laaZMnRGbjp6361DwMAaVz4adhiyCR83KD36ARrflrmxAzRi9DmMOVqybQBORtnJzb-CntBJIQEqDWkelhfvi4XHYx";
  //console.log("buttonClick");
  $.ajax({
    url: `https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=pizza&latitude=33.784674&longitude=-84.394832`,
    headers: { Authorization: `Bearer ${api}` },
    method: "GET",
    dataType: "json"
  })
    .then(function(response) {
      console.log(response.businesses);
      for (let i = 0; i < response.businesses.length; i++) {
        //let foodLocation = response.businesses[i].alias;
        console.log(response.businesses[i].name);
        $('#location').append(`<div id="rest">${response.businesses[i].name}</div>`)
      }
    })



    .catch(function(err) {
      console.log(err.responseText);
    });
});
>>>>>>> 2acb009b21bbdca50f64dfc6e5706878a797b763
