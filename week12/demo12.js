let myData = {};

function fetchData() {
    fetch("https://corsproxy.io/?https://xkcd.com/614/info.0.json")

    .then(res => {
        if (res.ok) {
            return res.json();
        }

        else {
            console.log(res);
        }
    })

    .then(res => {
        myData = res;
        console.log(myData);

        // title
        document.getElementById("title").innerHTML = myData.title;

        // displaying the comic
        document.getElementById("comic").src = myData.img;

        // alt text
        
    })
}

fetchData();