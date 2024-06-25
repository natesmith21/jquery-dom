
// class Movies{
//     constructor(name, rating){
//         this.name = movieName;
//         this.rating = movieRating;
//     }
// }

// this app still should validate that there is a value for movie name. it is also still ugly css wise and my flexbox is bad. 

$('#submit').on('click', () => {
    let movieName = $('#movie-name');
    let movieRating = $('#movie-rating');

$('.movie-container table').append(`<tr><td>${movieName.val()}</td><td>${movieRating.val()}</td><td><button type="button" id="remove">Remove Movie</button></td></tr>`);

movieName.val('');
movieRating.val('');
})

$('.movie-container').on('click', '#remove', function(e){
    $(this).parentsUntil('tbody').remove();
})