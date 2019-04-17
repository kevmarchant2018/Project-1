$ ("#date").click(function(){
    console.log("buttonClick");
    $.ajax({
        url:"https://randomuser.me/api?inc",
        method: "GET", 
        dataType: 'json',
    }).then(function(results){
        console.log(results);
        console.log("The button has been clicked")
        // var plung = results;
        // console.log(plung)
        
        let userImage = JSON.stringify(results.results[0].picture.medium)
        $('#randomUser').append(`<img src=${userImage}></img>`);
       // $('#randomUser').append(JSON.stringify(results));
    })


    // $("#movie-data").append(JSON.stringify(data));       

});

$ ("#Horiscope").click(function(){
    console.log("buttonClick");
    $.ajax({
        url:"https:sandipbgt.com/theastrologer/api",
        method: "GET",
        dataType: 'json',
    }).then(function(results){
        console.log(results);
        console.log("The button has been clicked")
        // var plung = results;
        // console.log(plung)
        
        $('#birthDay').append(JSON.stringify(results))
    })
        

});

