const inquirer = require('inquirer');

inquirer
    .prompt([
        {
            type : "list",
            name : 'selection',
            choices : ['choice1' , 'choice2']
        }
    ])
    .then(function(answer){   //answer has a track of the selection that you have made.
        

        // console.log(answer)
        
        if(answer.selection=='choice1'){
            console.log('choice 1 is selected')
        }

        else{
            console.log('choice 2 is selected' )
        }
        
    })