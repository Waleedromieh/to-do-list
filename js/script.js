var input=document.getElementById("input");
var inputs;

if(localStorage.getItem("items")){
    inputs=JSON.parse(localStorage.getItem("items"));
    display()
}
else{
    inputs =[];
};



function addProduct(){
    inputs.push(input.value);
    localStorage.setItem('items', JSON.stringify(inputs));
    display();
};

function display(){
    var cartona=''

    for( var i=0 ; i<inputs.length ; i++){
        cartona+= `<div class="d-flex col-12  justify-content-between align-items-center border rounded-3 bg-primary">
        <span>${inputs[i]}</span>
        <i class="fas fa-trash-can" onclick='deleteItem(${i})'></i>
    </div>`
        
    }
    document.getElementById("container").innerHTML= cartona;
};

function deleteItem(index){
    inputs.splice(index ,1);
    localStorage.setItem('items' , JSON.stringify(inputs));
    display();
};

