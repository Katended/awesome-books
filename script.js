var books  = [];

    function AddBook(){
        var title  = document.getElementById('title').value;
        var author  = document.getElementById('author').value;

        if(title==="" || author===""){
            alert("Information missing!");
            return;
        }

        books.push(
            { title:title,
                author:author,
                id:this.length++
         });    

       window.localStorage.setItem("books",JSON.stringify(books));   

       window.dispatchEvent( new Event('storage') )
  
    } 

     function remove(id){

        var title  = document.getElementById('title').value;
        var author  = document.getElementById('author').value;
        books = JSON.parse(window.localStorage.getItem("books"));
        filtredbooks = books.filter((book)=>book.id!==id );
        books = filtredbooks;
   
        window.localStorage.setItem("books",JSON.stringify(books));
      
        window.dispatchEvent( new Event('storage'), );               
    }   


    window.addEventListener("storage", () => {

        var booklist  = document.getElementById('booklist');
        booklist.innerHTML = '';

        books.forEach(item => { 
          //  alert(item.id);
            const elDiv = document.createElement('div','book');
            elDiv.setAttribute("data-id", item.id);
            elDiv.setAttribute('onClick','remove('+item.id+')');

            const titleSpan = document.createElement('span');
            titleSpan.innerHTML = item.title;
            elDiv.appendChild(titleSpan);
        
            const spaceSpan1 = document.createElement('span');
            spaceSpan1.innerHTML = `&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`;
            elDiv.appendChild(spaceSpan1);

            const authorSpan = document.createElement('span');
            authorSpan.innerHTML = item.author;
            elDiv.appendChild(authorSpan);

            const spaceSpan2 = document.createElement('span');
            spaceSpan2.innerHTML = `&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`;
            elDiv.appendChild(spaceSpan2);

            const btnSpan = document.createElement('span');
            const btn = document.createElement('button');
            btn.name="Remove";
            btn.value="Remove";
            btn.id=item.id;
            btn.innerHTML = "Remove";
            btnSpan.appendChild(btn);

            elDiv.appendChild(btnSpan);

            const hr = document.createElement('hr');
            elDiv.appendChild(hr);

            booklist.appendChild(elDiv);
        });
               
    });