const button= document.querySelector('button')
const booknamefield = document.querySelector('.Name')
const writer = document.querySelector('.Writer')
const p = document.querySelector('.Pages')
const contentDiv=document.querySelector('.content')
//const card = document.querySelector('.card')
const arr=[]
button.onclick=function(){

    const bookName = document.getElementById('bookname').value
    const Auhtor = document.getElementById('author').value
    const Pages = document.getElementById('page').value
    //Print Value to Console
    if(bookName==='' || Auhtor==='' || Pages===''){
        alert('Provide Info')
        return
    }
    else
    {
        Book1 = new Book(bookName,Auhtor,Pages)
        arr.push(Book1)
        render(arr);
    }  
}

function Book(bookName,Auhtor,Pages){
    this.bookName=bookName
    this.Auhtor=Auhtor
    this.Pages=Pages
}
function render(arr){
    /**Set Data to Local Storage*/
    localStorage.setItem('data',JSON.stringify(arr))
    //var fetchedData=localStorage.getItem('data')
    //display(fetchedData)

    const card = document.createElement('div')
        card.classList.add('cards')
        card.innerHTML= ` <div class="card">
        <p class="Name">${arr[arr.length-1].bookName}</p>
        <p class="Writer">${arr[arr.length-1].Auhtor}</p>
        <p class="Pages">${arr[arr.length-1].Pages}</p>
        <p>Yes</p>
    </div>
`
        contentDiv.appendChild(card)

}

function display(fetchedData){
    var data=JSON.parse(fetchedData)
    for(let i=0;i<data.length;i++){
        const card = document.createElement('div')
        card.classList.add('cards')
        card.innerHTML= ` <div class="card">
        <p class="Name">${data[i].bookName}</p>
        <p class="Writer">${data[i].Auhtor}</p>
        <p class="Pages">${data[i].Pages}</p>
        <p>Yes</p>
    </div>
`
        contentDiv.appendChild(card)
    }
}


window.onload=()=>{
    var x = localStorage.getItem('data')
    display(x)
}
