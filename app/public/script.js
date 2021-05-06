


//get airtable//
//input key & base//

$(function(){
  var socket = window.io.connect();
  var Airtable = require('airtable');
  socket.on('connect', function(){

    Airtable.configure({
      apiKey: 'keyLcTgqOkYLvbG5V',
      endpointUrl: 'https://api.airtable.com'
    });
    var base = Airtable.base('appugOEfoytzxTsd7');

    //get random records from 'table'//
    //a max record of 200, fetch all pages, function random number, return ParsInt (converts its first argument to a string, parses that string, then returns an integer)//
    
    base('table').select({
      maxRecords: 200,
      view: 'Grid view'
    }).eachPage(function page(records, fetchNextPage) {
      function randomNum(minNum,maxNum){ 
        return parseInt(Math.random()*(maxNum-minNum+1)+minNum,10); 
      } 

      //make the first button active for user to select through//
      //console log records//

      var buttonId="Life";
      $("#lifeId").addClass("active");
      console.log('records11111111111')
      console.log(records)


      
      // when input message, console value2222222222//

      // if the input message includes a ?, show "individual_answers" from Airtable//
      // name the genre//

      // only select records from the "genre" they are in //

      // IF the select button is "All", the answerArray push all records //
      // ELSE //
      // if the select button is a certain genre, push it based on the genre (controlled by the buttonID)//


        $("#messageText").bind('input porpertychange',function(){
          console.log('value2222222222222')
          console.log($(this).val())
          if($(this).val()[$(this).val().length-1]==="?"){
            let answerArray=[];
            for(let i=0;i<records.length;i++){
              let thisGenre=records[i].fields.genre;
              let inAnswerArray=false
              if(buttonId=="All"){
                answerArray.push(records[i].fields.individual_answers);
              }else{
                for(var j=0;j<thisGenre.length;j++){
                  if(thisGenre[j]==buttonId){
                    answerArray.push(records[i].fields.individual_answers);
                    break;
                  }
                }
              }
    
            }

            //console log answer array, and make it showup in the "container Id" in html as 'message'//
            //emit it to socket//

            console.log('answerArray1111111111111');
            var message=answerArray[randomNum(0,answerArray.length-1)];
            $("#containerId").html(message);
              socket.emit('emit-msg', [$(this).val()], function(data) {
            });
            
          }
        });
    
  
        // each button link to filter each genre in airtable//
        // when press on one class, remove the other three classes//

        //life//

      $("#lifeId").click(function(){
        $("#lifeId").addClass("active");
        $("#loveId").removeClass("active");
        $("#workId").removeClass("active");
        $("#allId").removeClass("active");
        buttonId="Life";
      })

      //love//

      $("#loveId").click(function(){
        $("#lifeId").removeClass("active");
        $("#loveId").addClass("active");
        $("#workId").removeClass("active");
        $("#allId").removeClass("active");
        buttonId="Love";
      })

      //work//

      $("#workId").click(function(){
        $("#lifeId").removeClass("active");
        $("#loveId").removeClass("active");
        $("#workId").addClass("active");
        $("#allId").removeClass("active");
        buttonId="Work";
      })

      // all//

      $("#allId").click(function(){
        $("#lifeId").removeClass("active");
        $("#loveId").removeClass("active");
        $("#workId").removeClass("active");
        $("#allId").addClass("active");
        buttonId="All";
      })

      //if there's an error, console error//
      
      fetchNextPage();
    }, function done(err) {
      if (err) { console.error(err); return; }
    });

  });
});




