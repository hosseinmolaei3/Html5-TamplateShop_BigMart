var x=document.getElementById("article");
function Selection(c){
    if (c =='all') {
        for(let i=0;i<x.children.length;i++)
        x.children[i].style.display='block';
    }
    if (c =='laptop') {
        for(let i=0;i<x.children.length;i++)
        if(i!=0){
            x.children[i].style.display='none';
        }
    }
    if (c =='mobile') {
        for(let i=0;i<x.children.length;i++)
        if(i!=1){
            x.children[i].style.display='none';
        }
    }
    if (c =='food') {
        for(let i=0;i<x.children.length;i++)
        if(i!=2){
            x.children[i].style.display='none';
        }
    }
    if (c =='dress') {
        for(let i=0;i<x.children.length;i++)
        if(i!=3){
            x.children[i].style.display='none';
        }
    }
}