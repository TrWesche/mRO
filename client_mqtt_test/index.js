const mqtt = require('mqtt');
const options={
    clientId:"mqttjs01",
    username:"rabbitmq",
    password:"rabbitmq",
    clean:true,
    servers: [
        { host: '127.0.0.1', port: 8882 }
    ],
    protocolId: 'MQIsdp',
    protocolVersion: 3
};

let count = 0;
// const client  = mqtt.connect("mqtt://127.0.0.1:8882",options);
const client  = mqtt.connect(opts=options);
console.log("connected flag " + client.connected);

//handle incoming messages
client.on('message',function(topic, message, packet){
	// console.log("message is "+ message);
	// console.log("topic is "+ topic);
    // console.log(packet)
});


client.on("connect",function(){	
    console.log("connected  "+ client.connected);
});

//handle errors
client.on("error", function(error){
    console.log("Can't connect" + error);
    process.exit(1)}
);

//publish
function publish(topic,msg,options){
    // const message = `${msg} ${count}`

    const payload = JSON.stringify(msg);
    console.log("publishing",payload);

    if (client.connected == true){
        client.publish(topic,payload,options);
    }
    count+=1;
    
    if (count>=30) {//end script
	    clearTimeout(timer_id); //stop timer
	    client.end();
        process.exit(0);
    };
}

//////////////

var pubOptions={
    retain:true,
    qos:1
};

var topic="testtopic/messagecount";

// var topic_list=["topic2","topic3","topic4"];
// var topic_o={"topic22":0,"topic33":1,"topic44":1};
// console.log("subscribing to topics");

// client.subscribe(topic,{qos:1}); //single topic
// client.subscribe(topic_list,{qos:1}); //topic list
// client.subscribe(topic_o); //object

var timer_id=setInterval(function(){
    const message={
        descriptor: "test message",
        value: Math.random()*150
    };
    publish(topic, message, pubOptions);
},1000);