const EventEmitter=require('events');
const event=new EventEmitter();
//Event ko lazmi pehlay define krna hay
// event.on('sayMyName',()=>{
//     console.log("My name is Amjad")
// })

// event.on('sayMyName',()=>{
//     console.log("I am a student of BUKC")
// })

// event.on('sayMyName',()=>{
//     console.log("My current semester is 5th")
// })

// event.emit('sayMyName');

//parametrized event
event.on('checkpage',(sc,msg,name)=>{
    console.log(`status code is ${sc} and the page is ${msg} ${name}`)
})

event.emit("checkpage",23123,'ok','ASD');

