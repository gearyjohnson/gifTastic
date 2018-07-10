var topics;
var addPic;
var addButton;
var addDiv;
var play;

topics = ['pig','horse','cow','duck','fish']

function newButton(){
    
    addButton = $('<button>').text(topics[i]);
    $('#animalButtons').append(addButton);
    }

for(i in topics){
    newButton(topics[i]);
}; 


$('#addAnimal').on('click', function(){
    event.preventDefault();
    var gifSearch = $('input').val();
    addButton = $('<button>').text(gifSearch);
    if(gifSearch != ''){
    $('#animalButtons').append(addButton); 
    topics.push(gifSearch);
    $('input').val('');
    }
    else( alert('enter an animal')
    )
}); 


$(document).on('click','#animalButtons button', function(){
    reset();
    var gifInsert = $(this).text();
    var url = 'https://api.giphy.com/v1/gifs/search?api_key=HvEwTM1G7Sud42sI41EV81a18RrYmx2R&q='+ gifInsert +'&limit=25&offset=0&rating=PG&lang=en';
    
    console.log(topics)
    console.log(url)
    $.ajax({
        url: url
    }).then(function (res){
        for( var i=0; i<10; i++){
            addPic = $('<img>').attr('src',res.data[i].images.fixed_width.url).attr('id', 'gif');
            addButton = $('<button>').attr('src',res.data[i].images.fixed_width.url).attr('id', 'gif');
            addButton.append(addPic);
            addDiv = $('<div>').text('Rating '+ res.data[i].rating).attr('id','ratingDiv');
            var newDiv = $('<div>').attr('id','divCont').append(addDiv).append(addButton);
            $('#animals').append(newDiv);
        }
    });
});

function reset(){
    $('#animals').empty();
};
