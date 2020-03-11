PennController.ResetPrefix(null); // Initiates PennController

// Start typing your code here
PennController.Sequence( "welcome",randomize("trial"), "send", "final" );


//Welcome
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
PennController.Template(
    PennController.GetTable("template-text.csv"),  // load your csv
    variable => PennController("trial",
                               defaultText
                               .settings.css("font-size", "30")
                               ,
                               newTimer(500)
                               .start()
                               .wait()
                               ,
                               newText("sentence1", variable.sentence)  // and we change the quoted text to equal variable.column
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
    .log("Sentence",variable.sentence)
    .log("Sensical",variable.sensical)
    .log("Item", variable.item)
    .log( "ID" , getVar("ID") )); // and here we ask that after Trial 1 the intials be logged

//=====================================================
// 3. Send results

PennController.SendResults( "send" ); // important!!! Sends all results to the server


//=====================================================
// 4. Thank you screen

PennController("final",
                newText("<p>Thank you for your participation!</p>")
                .print()
                ,
                newText("<p><a href='https://www.put.your/platform/confirmation/link.here'>Click here to validate your participation.</a></p>") // confirmation link (e.g., for payment)
                .print()
                ,
                newButton("void") // this creates a 'void' button that must be clicked to continue. This is because we don't want them to be able to continue beyond this screen
                .wait() // so basically this is the end and there's no way to go any further
               );
