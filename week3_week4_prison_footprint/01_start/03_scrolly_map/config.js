
let chapterData;

d3.json("chapters.json").then(function(d){
    chapterData=d.chapters
   // console.log(chapterData)

    var config = {
        style: 'put your map style here',
        accessToken: 'put your access token here',
        showMarkers: false,
        theme: 'light',
        alignment: 'right',
        title: '',
        subtitle: '',
        byline: '',
        footer: '',
        chapters:chapterData
    };

    storytelling(config)
})


