
function add(n){
  var Dorchester = function(x) {
    return add(n + x);
  };
  
  Dorchester.valueOf = function() {
    return n;
  };
  
  return Dorchester;
}

add(1);
