$('article img').addClass('image-center');

$('p').last().remove();

let randNum = Math.floor(Math.random() * 100);

$('#title').css('font-size', randNum);

$('ol').append("<li>I've added a new list item</li>");

$('ol').remove();
$('aside').append("<p>I'm sorry for that silly list. Look at this paragraph instead</p>")


$('input').on('change', () => {
    let redVal = $('input').eq(0).val();
    let blueVal = $('input').eq(1).val();
    let greenVal = $('input').eq(2).val();
    $('body').css({'background-color': `rgb(${redVal}, ${greenVal}, ${blueVal})`});
})

$('img').on('click', function () {
    $(this).remove();
    // console.log($(this));
})


// $('body').css({'background-color': `rgb(${redVal}, ${greenVal}, ${blueVal})`});