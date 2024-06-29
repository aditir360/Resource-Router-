document.getElementById('search-btn').addEventListener('click', function() {
    const location1 = document.getElementById('location1').value;
    const location2 = document.getElementById('location2').value;
    
    if (location1 && location2) {
        const mapFrame = document.getElementById('atlist-embed');
        const baseUrl = "https://my.atlist.com/map/8064bc73-8b77-418f-a8dd-a2f1ef9e0021/?share=true";
        mapFrame.src = `${baseUrl}&pins=%5B%7B%22name%22%3A%22Location%201%22%2C%22lat%22%3A%22${encodeURIComponent(location1)}%22%2C%22lng%22%3A%22%22%7D%2C%7B%22name%22%3A%22Location%202%22%2C%22lat%22%3A%22${encodeURIComponent(location2)}%22%2C%22lng%22%3A%22%22%7D%5D`;
    }
});


var myGame = new WizardOrpheus('', `You're job is to assist low income and homeless people with any questions they might have. 
`)

myGame.createUserAction({
  
  name: 'message',
  parameters: ['Message from user to game'],
  howBotShouldHandle: 'Respond to the user'
  
})

document.getElementById('input').addEventListener('keyup', function(e) {
  if (e.code == 'Enter') { // if the user presses enter
    
    let userInput = document.getElementById('input').value
    
    myGame.message(userInput)

    document.getElementById('conversation').innerHTML += '<p>' + userInput + '</p>'

    document.getElementById('input').value = ''
  }
})

myGame.createUserAction({
  
  name: 'message',
  parameters: ['Message from user to game'],
  howBotShouldHandle: 'Respond to the user'
  
})


myGame.variable('score', 'Current score. Changes (positive and negatively) as the user does things.', 0)

myGame.botAction('respond', 'Send a text response to the user', { message: 'What you want to say to the user' }, data => {
 
document.getElementById('conversation').innerHTML += '<p>' + data.message + '</p>' + '<hr></hr>'

document.getElementById('score').innerHTML = data.currentVariables.score.value
  
})

