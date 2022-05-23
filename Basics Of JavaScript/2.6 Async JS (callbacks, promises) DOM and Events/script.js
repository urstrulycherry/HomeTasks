let template = document.querySelector('#eachVideo').content;
let x = []
document.querySelector("#searchButton").addEventListener("click", function () {
    if (document.querySelector("#search").value == "") {
        alert("Please enter a search term"); return
    }
    document.querySelector(".main").innerHTML = "";
    fetch(`https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&type=video&part=snippet&maxResults=15&q=${document.querySelector("#search").value}`)
        .then(searchResults => { console.log(searchResults); return searchResults.json() })
        .then(searchResults => {
            console.log(searchResults);
            let ids = []

            for (let video of searchResults.items)
                ids.push(video.id.videoId);
            x = ids
            fetch(`https://www.googleapis.com/youtube/v3/videos?key=${API_KEY}&id=${ids.join(',')}&part=snippet,statistics`)
                .then(videoDetails => videoDetails.json())
                .then(videoDetails => {
                    // console.log(videoDetails.items[0].snippet.description);
                    for (let i in searchResults.items)
                        videoDetails.items[i].snippet.shortDesc = searchResults.items[i].snippet.description;
                    getVid(videoDetails.items)
                    // console.log(videoDetails);
                });
        });
});
// document.querySelector("#searchButton").click();

function getVid(videoDetails) {
    let i = 1
    for (let video of videoDetails) fillDetails(video, i++)
    displayVideos(1)
}

function fillDetails(details, i) {
    let video = document.importNode(template, true);
    video.querySelector(".ytVideo").setAttribute("id", "video" + i);
    video.querySelector(".title").textContent = details.snippet.title;
    video.querySelector(".views").textContent = details.statistics.viewCount + " views";
    video.querySelector(".published").textContent = details.snippet.publishedAt.substring(0, 10).split("-").join("/");
    video.querySelector(".author").textContent = details.snippet.channelTitle;
    video.querySelector(".author").setAttribute("onclick", "window.open('https://www.youtube.com/channel/" + details.snippet.channelId + "')");
    video.querySelector(".desc").textContent = details.snippet.shortDesc;

    // video.querySelector(".vid").setAttribute("src", "https://www.youtube.com/embed/" + details.id);
    video.querySelector(".thumbnail").src = details.snippet.thumbnails.high.url;
    video.querySelector(".thumbnail").setAttribute("onclick", "window.open('https://www.youtube.com/watch?v=" + details.id + "')");

    // video.querySelector("#video" + i).setAttribute("onclick", "window.open('https://www.youtube.com/watch?v=" + details.id + "')");
    document.querySelector(".main").appendChild(video);
}

function displayVideos(pageId) {
    hideAll();
    let vidCount = videoCount(document.querySelectorAll(".main")[0].offsetWidth)
    document.querySelectorAll(".main")[0].style.setProperty('grid-template-columns', 'repeat(' + vidCount + ', 1fr)')
    while (Math.ceil(15 / vidCount) < pageId)
        pageId--;
    for (let i = (vidCount * (pageId - 1)) + 1; i <= (pageId * vidCount) && i <= 15; i++)
        document.querySelector("#video" + i).style.display = "block";
    generatePages(Math.ceil(15 / vidCount));
    document.querySelector("#page" + pageId).classList.add("active");
}

function hideAll() {
    for (let i = 1; i <= 15; i++)
        document.querySelector("#video" + i).style.display = "none";
}

function videoCount(divWidth) {
    let videoCount = (divWidth < 450) ? 1 : (divWidth < 700) ? 2 : (divWidth < 1100) ? 3 : (divWidth < 1500) ? 4 : 5;
    return videoCount;
}

function generatePages(count) {
    let pages = document.querySelector(".pages");
    pages.textContent = "";
    for (let i = 1; i <= count; i++) {
        let page = document.createElement("div");
        page.setAttribute("class", "page");
        let btn = document.createElement("button");
        btn.setAttribute("id", "page" + i);
        let pageId = i;
        btn.setAttribute("pageId", pageId)
        btn.setAttribute("onclick", "displayVideos(" + pageId + ")");
        btn.textContent = i;
        page.appendChild(btn);
        pages.appendChild(page);
    }
}

window.onresize = function () {
    displayVideos(document.querySelectorAll(".active")[0].getAttribute("id").substring(4));
}