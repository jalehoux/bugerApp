$('#add').on('submit', function(e){
    e.preventDefault();
    var payload = {name:$('#name').val()};
    $.post('/add', payload, function(data){
        location.reload();
    })
})

$('.btn-danger').on('click', function(){
    var payload = {id:$(this).attr('info')};
    $.ajax({
        method: 'put',
        url: '/update',
        data: payload
    }).then(function(){
        location.reload();
    })
})