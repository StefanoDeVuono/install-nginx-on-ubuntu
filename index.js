var sudo = require('sudo'),
    Promise = require('bluebird');
var options = {
    cachePassword: true,
    prompt: 'Password, yo? ',
    spawnOptions: { /* other options for spawn */ }
};

var install_common = function(){
  var child = sudo([ 'apt-get', 'install', '-y', 'software-properties-common' ], options);
  return new Promise(child_close(child));
};

var add_repo = function(){
  var child = sudo([ 'add-apt-repository', '-y', 'ppa:nginx/stable' ], options);
  return new Promise(child_close(child));
};

var apt_update = function(){
  var child = sudo([ 'apt-get', 'update' ], options);
  return new Promise(child_close(child));
};

var install_nginx = function(){
  var child = sudo([ 'apt-get', 'install', '-y', 'nginx' ], options);
  return new Promise(child_close(child));
};

var start_nginx = function(){
  var child = sudo([ 'service', 'ngninx', 'start' ], options);
  return new Promise(child_close(child));
};


var child_close = function(child){
  return function(resolve, reject){
    child.stdout.pipe(process.stdout);
    child.stderr.pipe(process.stderr);
     child.on('close', function (code, signal) {
      if (code === 0) resolve();
    });
  }
};


module.exports = function(){
  install_common()
    .then(add_repo)
    .then(apt_update)
    .then(install_nginx)
    .then(start_nginx);
};