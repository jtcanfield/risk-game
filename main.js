/*if unfixable errors, go to line 1777 in imagemapster*/
$( document ).ready(function() {
    console.log( "ready!" );
    $('#imgmap').mapster({
            singleSelect: true,
            fill : true,
            fillOpacity : 0.6,
            fillColor: 'ffffff',
            mapKey: 'data-key',
            onMouseover: function(e) {
                $(this).mapster('set',false).mapster('set',true);
            },
            onMouseout: function(e) {
                 $(this).mapster('set',false);
            }
        });
});
