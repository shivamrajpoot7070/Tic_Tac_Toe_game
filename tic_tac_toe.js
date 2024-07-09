let boxes=document.querySelectorAll(".box");

let resetbtn=document.getElementById("reset-btn");
let turn0=true;    
let win=document.getElementById("win");
let neww=document.getElementById("new");

let pattern=[
         [0,1,2],
         [0,3,6],
         [0,4,8],
         [1,4,7],
         [2,5,8],
         [2,4,6],
         [3,4,5],
         [6,7,8]
];




boxes.forEach((box)=>{
    box.addEventListener("click",function(){

        if(turn0==true){
            box.innerHTML="O";
            turn0=false;
        }

        else{
            box.innerHTML="X";
            turn0=true;
        }
        box.disabled=true;
        winner();
    });
})


const disbutton=()=>{
    boxes.forEach((box)=>{
        box.disabled=true;
        box.innerHTML="";

    });
}

const enabutton=()=>{
    boxes.forEach((box)=>{
        box.disabled=false;
        box.innerHTML="";
        turn0=true;
        win.innerHTML="Best of luck!!";
    });
}

const winner=()=>{
    for(pat of pattern){

        let pos1=boxes[pat[0]].innerHTML;
        let pos2=boxes[pat[1]].innerHTML;
        let pos3=boxes[pat[2]].innerHTML;

        console.log(pos1);

        if(pos1!="" && pos2!="" && pos3!=""){

            if(pos1==pos2 && pos2==pos3){

                win.innerText=`Congratulations, Winner is !! ${pos1}`
                disbutton();
            }
        }
        
    }
}

resetbtn.addEventListener("click",enabutton);
neww.addEventListener("click",enabutton);
    

