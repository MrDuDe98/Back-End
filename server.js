const express = require('express');

const app = express();

const fs = require('fs');

const bodyParser = require('body-parser');

app.get('./', function (req, res) {

    bodyParser =  JSON.parse('./videos.json');
    return res.send(bodyParser)
})

app.get ('/videos/:id', function(req, res){
    var vis = vis.new(params['./videos.json']);
    widget = Widget.find(params[:id])
    return status 404 if widget.nil?
    widget.to_json
}),

app.get ('/videos', function(req, res){
    var vis = vis.new(params['./videos.json']);
    listaVideos = JSON.parse('./videos.json');
    return res.send(listaVideos+(vis+1));

})
app.post('./videos', function(req, res){
    var addComentario = JSON.stringify('./videos.json');
    comentario = comentario.new(params['./videos.json']);
    addComentario = addComentario+comentario;
    addComentario = JSON.parse('./videos.json');
    return res.send(addComentario);
})

app.listen(3000, function() {
    console.log(' O servidor está online. ');
});