const app = (function (){
    const pointController = ()=>{
        let arr = []
        document.querySelectorAll('.flexElem.left .block').forEach(v=>arr.push(v.offsetTop))
        document.querySelectorAll('.flexElem.right .block').forEach(v=>{
            if(arr.some(l=>{return (v.offsetTop-8 < l && v.offsetTop+8 > l)})){
                $(v).addClass("hidden")
                console.log('hidden')
                console.log(v)
            }
            else{
                $(v).removeClass("hidden")
                console.log('unhidden')
                console.log(v)
            }
        })
    }
    setInterval(function(){pointController()},1000)
    const photoArr = [                              //data, for example from DataBase
            {
                url:'./imgs/lake.jpg',
                date:'10/07/2013',
                description:`Lorem Ipsum is simply dummy text`,
                mg:90,
                twi:'#link',
                link:'#link',
                comments:[
                    {
                        short:`Lorem Ipsum is simply dummy text`,
                        long:`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
                        mg:0
                    }
                ]
            },
            {
                url:'./imgs/kid.jpg',
                date:'10/07/2013',
                description:`Lorem Ipsum is simply dummy text`,
                mg:0,
                twi:'#link',
                link:'#link',
                comments:[]
            },
            {
                url:'./imgs/butterfly.jpg',
                date:'10/07/2013',
                description:`Lorem Ipsum is simply dummy text`,
                mg:0,
                twi:'#link',
                link:'#link',
                comments:[
                    {
                        short:`Lorem Ipsum is simply dummy text`,
                        long:`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
                        mg:90
                    },
                    {
                        short:`Lorem Ipsum is simply dummy text`,
                        long:`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
                        mg:0
                    }
                ]
            },
            {
                url:'../imgs/ladder.jpg',
                date:'10/07/2013',
                description:`Lorem Ipsum is simply dummy text`,
                mg:90,
                twi:'#link',
                link:'#link',
                comments:[
                    {
                        short:`Lorem Ipsum is simply dummy text`,
                        long:`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
                        mg:0
                    },
                    {
                        short:`Lorem Ipsum is simply dummy text`,
                        long:`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
                        mg:0
                    },
                    {
                        short:`Lorem Ipsum is simply dummy text`,
                        long:`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
                        mg:0
                    }
                ]
            },
            {
                url:'./imgs/kid.jpg',
                date:'10/07/2013',
                description:`Lorem Ipsum is simply dummy text`,
                mg:0,
                twi:'#link',
                link:'#link',
                comments:[
                    {
                        short:`Lorem Ipsum is simply dummy text`,
                        long:`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
                        mg:0
                    },
                    {
                        short:`Lorem Ipsum is simply dummy text`,
                        long:`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
                        mg:0
                    },
                    {
                        short:`Lorem Ipsum is simply dummy text`,
                        long:`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
                        mg:0
                    }
                ]
            },
            {
                url:'./imgs/lake.jpg',
                date:'10/07/2013',
                description:`Lorem Ipsum is simply dummy text`,
                mg:0,
                twi:'#link',
                link:'#link',
                comments:[
                    {
                        short:`Lorem Ipsum is simply dummy text`,
                        long:`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
                        mg:0
                    },
                    {
                        short:`Lorem Ipsum is simply dummy text`,
                        long:`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
                        mg:0
                    },
                    {
                        short:`Lorem Ipsum is simply dummy text`,
                        long:`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
                        mg:0
                    }
                ]
            },
        ];
    let page = 1;
    let blocksArr = [];
    let appBull = false;
    class Block {
        constructor(url,date,description,comments,twi,link,mg){
            this.url = url;
            this.date = date;
            this.description = description;
            this.mg = mg;
            this.twi = twi;
            this.link = link;
            this.comments = comments;
        }
    }
    //button add post
    function addPost(url='',date,description,mg,twi='',link=''){
        const obj = {
            url: url,
            date: (date=='')?([new Date()][0].toLocaleDateString()):date,
            description: description.slice(0,40),
            mg:(mg=='')?0:mg,
            twi:twi,
            link:link,
            comments:[]
        }
        photoArr.unshift(obj);
        app.init();
    }
    function addComment(obj){
        let long,short,
            text = obj[0].value;
        if (text.length < 35){
            short = text,
            long = ''
        }
        else{
            short = text.slice(0,35) + '..',
            long = '..'+ text.slice(35)
        }
        photoArr[obj.dataset.aidi].comments.push({
            short: short,
            long: long,
            mg:0
        })
        app.init()
    }
    //just  toggler
    function toggleBull(){
        appBull=!appBull;
        return appBull;
    }
    //"load more content" button
    function loadmore(){
        if (page*4 < photoArr.length) {
            page++;
            let ite = (page*4 > photoArr.length) ? photoArr.length : page*4;
            for(let i=(page-1)*4; i<ite; i++){
                drawBlock(blocksArr[i], toggleBull(), i);
            }
            if (page*4 >= photoArr.length){
                let el = document.getElementsByClassName('loadmore')[0];
                el.removeAttribute("onclick");
                el.childNodes[0].style.display = 'none';
                el.childNodes[1].innerText = 'Complite!';
            }
        }else{
            let el = document.getElementsByClassName('loadmore')[0];
            el.removeAttribute("onclick");
            el.childNodes[0].style.display = 'none';
            el.childNodes[1].innerText = 'Complite!';
        }
    }
    //draw comment under a photoBlock
    function drawComment(comments,posLeft){
        comments.forEach((v,i,a)=>{
            let el = document.createElement('div');
            el.className = "block comment";
            el.innerHTML = `<span>${comments[i].short}</span>
                            <button onclick='event.target.parentNode.querySelector("p").classList.toggle("hidden");event.target.classList.toggle("turned")'></button>
                            <p class='hidden'>${comments[i].long}</p>
                            <div class='point'></div>`
            if(comments[i].mg!=0) el.style.marginTop = `${comments[i].mg}px`;
            /* append to right / left side */
            if(posLeft){
                document.getElementsByClassName('flexElem')[0].appendChild(el); //temporery
            }
            else{
                document.getElementsByClassName('flexElem')[2].appendChild(el);
            }
        })
    }
    function drawBlock(data, posLeft, i){
            //Photo block drawing, default structure
            let  el = document.createElement('div');
            el.classList.value = "block photo";
            el.innerHTML = `        <div class='point'></div>
                                    <p>${data.description}</p>
                                    <div class="cont">
                                        <div class="img" style="background-image: url(${data.url});"></div>
                                        <span>${data.date}</span>
                                    </div>
                                    <div class="botty">
                                        <div class="links">
                                        <a href="${data.link}" class="url"></a>
                                        <a href="${data.twi}" class="twitter"></a>
                                        <span>Comment</span>
                                    </div>
                                    <form onsubmit="event.preventDefault(); app.addComment(this)" data-aidi="${i}" class="form">
                                        <textarea required class="formTA"></textarea>
                                        <button type="submit"></button>
                                    </form>`;
            if(data.mg!=0) el.style.marginTop = `${data.mg}px`;
            /* append to right / left side */
            if(posLeft){
                document.getElementsByClassName('flexElem')[0].appendChild(el); //temporery
            }
            else{
                document.getElementsByClassName('flexElem')[2].appendChild(el);
            }
            //draw comments of the photoBlock
            drawComment(data.comments, posLeft);
    }
    function init (){           //init
        blocksArr = [];
        //empty space
        document.querySelector('.flexElem.left').innerHTML = "";
        document.querySelector('.flexElem.right').innerHTML = "";
        //first draw 1-4 photo blocks, for iteration
        let iter = (page*4 > photoArr.length) ? photoArr.length : page*4; 
        //init exempl. of Blocks
        for(let i = 0; i< photoArr.length;i++){
            let data = photoArr[i];
            blocksArr[blocksArr.length] = new Block(data.url, data.date, data.description, data.comments, data.twi, data.link, data.mg);
        }
        //draw first page
        for(let i = 0; i< iter;i++){   
            drawBlock(blocksArr[i], toggleBull(), i);       
        }
        return blocksArr;
    }
    return {
        page : ()=>page,
        init : init,
        loadmore : loadmore,
        blocksArr : blocksArr,
        addPost : addPost,
        addComment : addComment
    };
})()
app.init()
//nodeJs
module.exports = app