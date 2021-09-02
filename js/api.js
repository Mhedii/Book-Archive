const searchBook = () => {
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;
    //console.log(searchText);
    searchField.value = '';
    const url = `
    https://openlibrary.org/search.json?q= ${searchText}
    `;

    fetch(url)
        .then(res => res.json())
        .then(data => displaySearchResult(data.docs.filter(obj => obj.subject)));

}

const displaySearchResult = (docs) => {
    const searchResult = document.getElementById('search-result');
    let count = 0;
    docs.forEach(doc => {

        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `
        <div class="card h-100">
        <img src="https://covers.openlibrary.org/b/id/${doc.cover_i}-M.jpg" class="card-img-top image-fluid p-3" alt="...">
            <div class="card-body">
                <h4 class="card-title">${doc.subject[0]}</h4>
                <br>
                <h5 class="card-title" >Author Name: ${doc.author_name}</h5> 
                <br>
                <h5 class="card-title" >Publisher: ${doc.publisher}</h5> 
                <br>
                <h6 class="card-title" >First Publish Year: ${doc.first_publish_year}</h6> 
                <h6 class="card-title" >Publish Date: ${doc.publish_date}</h6> 
                
            
            </div>
            
        </div>
        `
        count++;

        searchResult.appendChild(div);
    });
    const results = document.getElementById('result');

    results.innerHTML = `${count}`;
    if (count == 0) {
        const empty = document.getElementById('empty');

        empty.innerHTML = `No Results Found`;
        empty.value = '';

    }

}
