// Perform sorting of an array in descending order

const sortingnumber= [0,5,9,8,7,6,1];

sortingnumber.sort((a,b)=>
{
    if(a<b){
        return 1;
    }
    if(a>b){
        return -1;
    }
}
);
console.log(sortingnumber)