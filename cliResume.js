const inquirer = require('inquirer');
const cp = require('child_process')

function displayList(){
    inquirer
    .prompt([
        {
            type : "list",
            name : 'selection',
            choices : ['About' , 'Skills','Academics','Projects']
        }
    ])
    .then(function(answer){   //answer has a track of the selection that you have made.
        

        // console.log(answer)
        
        if(answer.selection=='About'){
            console.log(`
            Currently I am currently pursuing a B.Tech degree in Ceramic Science and Engineering and mainly 
            Interested in the field of Technology. I am a student of NIT Rourkela.

            Proficient with Programming Languages such as JavaScript , C++ and Java.
            
            Looking for an opportunity to work in a challenging position combining my skills in Software Engineering,
            which provides professional development, interesting experiences and personal growth.
            I love solving puzzles,listining music.I am a quick learner,problem solver.`)
            displayNext()
        }

        else if(answer.selection=='Skills'){
            console.log("Data Structure , Algorithm , Java , JavaScript , Node.js")
            displayNext()
        }
        else if(answer.selection=='Academics'){
            cp.execSync('start chrome https://drive.google.com/file/d/1glnT9CyStInlpjjpHNHmSuNuNvGMKf4i/view?usp=sharing')
            displayNext()
        }
        else if(answer.selection=='Projects'){
            cp.execSync('start chrome https://github.com/Sangram2')
            displayNext()
        }
        
    })
}

displayList()
function displayNext(){
    inquirer
    .prompt([
        {
            type : "list",
            name : 'selection',
            choices : ['Go Back','Exit']
        }
    ])
    .then(function(answer){   
        
        if(answer.selection=='Go Back'){
            console.log(displayList())
        }

        else if(answer.selection=='Exit'){
            console.log("Resume Closed")
        }
        
        
    })
}