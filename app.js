let page = 1;
let getNews = (search, page) => {
    let loader = document.getElementById("loader");
    let content = document.getElementById("content");
    fetch(`https://api.newscatcherapi.com/v2/search?q=${search}&page_size=12&page=${page ? page : 1}`, {
        headers: {
            "x-api-key": "'tALHqDfvskylZD8t1TKTuQokjTsT7MdX2hGRWPghptM'"
        }
    })
    .then(res => res.json())
    .then(res => {
        loader.style.display = "none"
        content.style.display = "block"
        let news = document.getElementById("news");
        const articles = res.articles;
        for (var i = 0; i < articles.length; i++) {
            const { media, title, excerpt, published_date, link } = articles[i];
            console.log(articles[i])
            news.innerHTML += `
            <div class="card mt-4" style="width: 18rem;">
                <img src="${media}" class="newsImg card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${title.slice(0, 40)}...</h5>
                    <p class="card-text">${excerpt.slice(0, 80)}...</p>
                    <span class="badge text-bg-info">${moment(published_date).fromNow()}</span>
                    <a href="${link}" target="_blank" class="btn btn-primary mt-2">Read More</a>
                </div>
            </div>
            `;
        }
    })
    .catch(err => console.log(err))
}

getNews()