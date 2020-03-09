// we'll always need this line at the beginning
PennController.ResetPrefix(null);

// Start your script
PennController(
    
    newText("sentence1", "Colourless green ideas sleep furiously.")// a new text element named 'sentence' 
        .print() // we need this line to print the element
    , // we ALWAYS!!! need a comma between elements
    newText("question", "<br>Is this sentence coherent?")
        .print()
    .settings.italic()
    ,
        newText("instruction", "<br>Press 'F' for yes, 'J' for no")
        .print()
    .settings.bold()
    ,
    newKey("response1", "FJ") //  a new key element called 'response'; accepts responses as key press 'F' (coherent) or 'J' (incoherent)
        .wait() // wait for a key press before validation (important!)
    
   );


/* CHANGES
- remove the text under each image


TASKS
Tip: make sure to test the experiment after each change! This way, if it doesn't work you've only changed one thing and know where the problem is

1. Add a welcome screen, that says 'Welcome to the experiment!'
    - tell participants to click 'Continue' when they're ready to begin
    - Use 'newButton' to add a button element labelled 'Continue', which waits until it is clicked before continuing to the next screen

3. Add a second trial that is the same as the first, but with the sentence 'Odourless beige opinions slumber angrily'

4. use '.settings.log()' to log the newKey selection to the results file




*/
