var stompClient = null;

function setConnected(isConnected){
      if(isConnected){
      $("#name-form").addClass("d-none");
      $("#chat-room").removeClass("d-none");
      }else{
       $("#name-form").removeClass("d-none");
        $("#chat-room").addClass("d-none");
      }
}


function connectToServer(){

    let socket = new SockJS("/server1");
    //stomp has ability to send receive msg
    //stomp will run based on socket
    stompClient = Stomp.over(socket);
    stompClient.connect({}, function(frame){
      console.log("Connected to server :: " + frame);
      setConnected(true);
      //subscribe
      stompClient.subscribe("/topic/return-to", function(response){
        showMessage(JSON.parse(response.body));
      })
    })
}

function showMessage(message){

    $("#message-container-table").prepend(`<tr><td><b>${message.name} :</b> ${message.content}</td></tr>`)
}

function sendMessage(){

    let jsonObject = {
     name : localStorage.getItem("name"),
     content : $("#message-value").val()
    }

    stompClient.send("/app/message", {}, JSON.stringify(jsonObject));
}


function disconnect() {
    if (stompClient !== null) {
        stompClient.disconnect();
    }
    setConnected(false);
    console.log("Disconnected");
}


$(document).ready((e)=>{

    $("#login").click(()=>{
          let name = $("#name-value").val();
          localStorage.setItem("name", name);
          connectToServer();
     })

      $("#send-btn").click(()=>{
               sendMessage();
          })

       $("#logout").click(()=>{
            disconnect();
       })


})
