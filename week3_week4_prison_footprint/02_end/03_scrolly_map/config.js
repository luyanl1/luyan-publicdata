
let chapterData;
d3.json("chapters.json").then(function(d){
    chapterData=d.chapters
    console.log(chapterData)

    var config = {
        style: 'mapbox://styles/jjjiia123/cls29ugkb01qs01o8bi8qbloe',
        accessToken: 'pk.eyJ1IjoiampqaWlhMTIzIiwiYSI6ImNpbDQ0Z2s1OTN1N3R1eWtzNTVrd29lMDIifQ.gSWjNbBSpIFzDXU2X5YCiQ',
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


