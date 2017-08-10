$( document ).ready(function() {
    console.log( "ready!" );
    $('#imgmap').mapster({
            singleSelect: true,
            fill : true,
            fillOpacity : 0.6,
            fillColor: 'ffffff',
            onMouseover: function(e) {
                $(this).mapster('set',false).mapster('set',true);
            },
            onMouseout: function(e) {
                 $(this).mapster('set',false);
            }
        });
});
