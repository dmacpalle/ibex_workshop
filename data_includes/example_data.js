PennController.ResetPrefix(null); // Initiates PennController

PennController("welcome",
               defaultText
               .settings.css("font-size", "25")
               ,
               newText("Welcome", "Welcome to the experiment!")
               .settings.css("font-size", "30")
               .settings.center()
               .print()
               .settings.bold()
               ,
               newTextInput("inputID")
               .settings.before(newText("id","<br><br>Before we begin, please enter your initials and hit 'Enter':")
                                .settings.css("font-size", "20"))
               .print()
               .wait()
               .remove()
               ,
               newText("Instructions","<p>You will be presented with a sentence. <br>When you have read the sentence, <b>press the spacebar</b>. <br>You will then see a scale from <b>'non-sensical'</b> to <b>'perfectly sensical'</b>. Please indicate where on the scale you feel the sentence belongs.<br>Then click on 'Continue' to move on.</p>")
               .print()
               ,
               newText("begin", "<br>Click  'Start' to begin the experiment.")
               .settings.css("font-size", "20")
               .settings.center()
               .print()
               ,
               newButton("Start","Start")
               .print()
               .settings.center()
               .wait()
               ,
               newVar("ID") // creates a variable 'ID'
               .settings.global() // which is saved GLOBALLY, meaning we can access it even when we leave "welcome"
               .set( getTextInput("inputID") )  // we set 'ID' to equal the TextInput from above, i.e., participant initials
              )
    .log( "ID" , getVar("ID") );

// Trial 1
PennController("trial1",
    defaultText
    .settings.css("font-size", "30")
    ,
    newText("sentence1", "Colourless green ideas sleep furiously.")
    .settings.italic()
    .print()
    ,
    newKey("ready", " ")
    .wait()
    ,
    newScale("response", 7)
    .settings.before(newText("bad","non-sensical")
                     .settings.css("font-size","15"))
    .settings.after(newText("good","perfectly sensical")
                    .settings.css("font-size","15"))
    .settings.labelsPosition("top")
    .settings.center()
    .print()
    .wait()
    .settings.log()
    ,
    newButton("continue", "Continue")
    .print()
    .settings.center()
    .wait()
)
    .log( "ID" , getVar("ID") ); // and here we ask that after Trial 1 the intials be logged

// Trial 2
PennController("trial2",
    defaultText
    .settings.css("font-size", "30")
    ,
    newText("sentence2", "Odourless beige memories slumber angrily.")
    .settings.italic()
    .print()
    ,
    newKey("ready", " ")
    .wait()
    ,
    newScale("response", 7)
    .settings.before(newText("bad","non-sensical")
                     .settings.css("font-size","15"))
    .settings.after(newText("good","perfectly sensical")
                    .settings.css("font-size","15"))
    .settings.labelsPosition("top")
    .settings.center()
    .print()
    .wait()
    .settings.log()
    ,
    newButton("continue", "Continue")
    .print()
    .settings.center()
    .wait()
)
    .log( "ID" , getVar("ID") );// and here we ask that after Trial 2 the intials be logged
