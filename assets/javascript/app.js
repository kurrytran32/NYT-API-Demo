<<<<<<< HEAD

//to print out number of articles based on option set by user by value 
let articleAmt = $("#numberOfRecords option").val();

// for(i=0; i<articleAmt; i++)

let startYear = 0;
let endYear = 0;
let searchT = "";
//create event listener for search button
$('button').on('click', function () {
    let searchT = $('#searchTerm');
    startYear = $('#startYear');
    endYear = $('#endYear');
    //getting amount
    let articleAmt = $("#numberOfRecords :option").val();
    console.log(articleAmt);

    let APIKEY = "b78e30ce41214175be7c4374616b1d6b";

    var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=" +
        APIKEY + "&q=" +
        $.ajax({
            url: queryURL,
            method: 'GET',
        }).then(function (response) {
            console.log(response);
            //start coding stuff for response here
            let results = response.docs;
            for (i = 0; i < results.length; i++) {
                let headLine = results[i].headline.main;
                let $headlineDiv = $("<div>");
                let $p = $('<p>').text(results[i].byline.original);
                $headlineDiv.append($p);
                $headlineDiv.append(headLine);
                $("#news-here").append($headlineDiv);
            };



        }).catch(function (err) {
            throw err;
        });
});
//plug in to #news-here
//what we want from response from
//we want article title(results[i].headline.main)
//we want author(s)
=======
>>>>>>> 5b97d6b9e133f0f4997287762238cb33ca2766ba
