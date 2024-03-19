
const news_array=localStorage.getItem('news')?JSON
    .parse(localStorage.getItem('news')):[]
const input_title=document.getElementById('news-title')
const input_content=document.getElementById('news-content')
const news_div_main=document.getElementById('news')
document.getElementById('add-news').addEventListener('click',add_news)

function delete_news(news){
    let index = news_array.indexOf(news)
    news_array.splice(index,1)
    localStorage.setItem('news',JSON.stringify(news_array))
    location.reload()

}
if(news_array.length>0)
news_array.forEach(add_news_to_dom)
else{
    news_div_main.innerHTML='No news to show. Pls add some.'
}


function add_news_to_dom(news) {
    const news_div = document.createElement('div')
    news_div.innerHTML = '<h2>' + news.title + '</h2>\n' +
        ' <p>' + news.content + '</p>' + '<button  class="btn"><i class="fa fa-trash"></i></button>';
    news_div_main.appendChild(news_div)

    news_div.querySelector('button').addEventListener('click', function () {
        delete_news(news)
    })
}


function add_news(){
    const title=input_title.value
    const content=input_content.value
    const news={
        title,
        content
    }
    news_array.push(news)
    localStorage.setItem('news',JSON.stringify(news_array))
    input_title.value=''
    input_content.value=''
}