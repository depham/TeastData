exports.home = function(req, res){
    res.sendFile(__dirname.replace('app\\controllers', '') + '/index.html');
}

exports.about = function(req, res){
    res.send("Hello About");
}

exports.show = function(req, res){
    res.sendFile(__dirname.replace('app\\controllers', '') + '/show.html');
}
