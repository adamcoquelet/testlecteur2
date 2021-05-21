var serialport = require("serialport");
var SerialPort = serialport.SerialPort;
var sp = new SerialPort("/dev/tty.usbserial-A6023L0J", {
parser: serialport.parsers.readline("n"),
baudrate: 57600
});

sp.on("open", function() {
console.log('open');
sp.on('data', function(data) {
console.log('data received: ' + data);
});
});