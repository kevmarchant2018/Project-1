$ ("#date").click(function(){
    console.log("buttonClick");
    $.ajax({
        url:"https://randomuser.me/api?inc=gender,name,dob",
        method: "GET", 
        dataType: 'json',
    }).then(function(results){
        console.log(results);
        console.log("The button has been clicked")
        var plung = results;
        console.log(plung)
        
        $('#randomUser').append(JSON.stringify(plung));
    })


    // $("#movie-data").append(JSON.stringify(data));       

});

$ ("#Horiscope").click(function(){
    console.log("buttonClick");
    $.ajax({
        url:"https:sandipbgt.com/theastrologer/api",
        dataType: 'json',
    }).then(function(data){
        console.log(data);
        console.log("The button has been clicked")
    })
        

});

