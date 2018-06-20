
console.log(words[200000]);
let highnumber=0;
//create on click event and store search word
$("#submitletters").on("click",function(event){
    event.preventDefault();
    let letters = $("#letters").val();
    letters=letters.toLowerCase();
    console.log(letters);
    //check function here
    let scrabble = check(letters);
    console.log(scrabble);

    $("#wordbox").text(JSON.stringify(scrabble));
    numbers=sort(scrabble);
    console.log(numbers);
    draw(scrabble,numbers);
});

//function to take in letters as argument and check them against the array
function check(letters)
{   let numblett = new Array();
    let numbword = new Array();
    let boolarray = new Array();
    let bool=true;
    let bool2;
    var possibilities = new Array();
    let unwanted = imposters(letters);
  
        for(let a=0;a<words.length;a++)
        {       
                //if(words[a].includes(letter not in letters)
                //skip this
                //word[].length loop
                //for(let y=0;y<words[i].length;y++)
                //{
                
                boolarray.length=0;
                numbword.length=0;
                numblett.length=0;
                bool=true;
                    for(let x=0;x<unwanted.length;x++)
                    {
                        if(words[a].includes(unwanted[x]))
                        {bool=false;}
                    }

                    
                //}
                    //letter.length loop
                        //if(word[].includes(letter[])&&bool==true)
                        //{bool=true;}else{bool=false}
                //if(bool==false)
                //skip this
                //else{move right bracket to the bottom}
                if(bool==true)
                {
                for(let i=0;i<letters.length;i++)
                 {
            //get number of this iterations letter
                 gpr = letters.split(letters[i])
                 gprl = gpr.length;
                 gprw = words[a].split(letters[i])
                gprw = gprw.length;
                //create an array that takes in number of letters assocaited with letters string
                //create another array that takes in the number of this letter stored in the word
                
                
                numblett.push(gprl);
                numbword.push(gprw);
              
                 }
                for(let x=0;x<numblett.length;x++)
                {   
                    if(numblett[x]>=numbword[x])
                    { 
                        boolarray.push(true);
                        }else{boolarray.push(false);}
                    
                }  
            
                if(boolarray.every(check_true))
                {
                    possibilities.push(words[a]);
                }

            }
           
    }
    return possibilities;
}


function check_true(a)
{
    return a==true;
}
function check_false(a)
{
    return a==false;
}


function imposters(letters)
{   let a = new Array("a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p",
"q", "r", "s", "t", "u", "v", "w", "x", "y", "z");
    for(let i=0;i<letters.length;i++)
    {
        if(a.includes(letters[i]))
        {   console.log(a.indexOf(letters[i]));
            console.log(letters[i]);
            a.splice(a.indexOf(letters[i]),1);
        }
    }
    return a
}

function sort(scrabble)
{   let num = new Array();
    for(let a=0;a<scrabble.length;a++)
    {   if(scrabble[a].length>highnumber)
        {
        highnumber=scrabble[a].length;
        }
        num.push(scrabble[a].length);
    }
    return num;
}

function draw(scrabble,numbers)
{   $("#wordbox").empty();
    for(let i=1;i<=highnumber;i++)
    {   
        $("#wordbox").append('<h3>words with '+i+' letters</h3><br><div id="num'+i+'"></div><hr>');
    }
    for(let i=0;i<scrabble.length;i++)
    {
        $("#num"+numbers[i]).append(" "+scrabble[i]+",");
    }
}