
var x = prompt('한 변(1)');
var y = prompt('한 변(2)');
var line='';

for(var i=1; i<=x; i++){
  for(var j=1; j<=y; j++){
    line += '*';
  }
  line += '\n';
}
alert(`${line}`);