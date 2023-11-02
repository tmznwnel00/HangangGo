const { Module } = require("module")

const sections = [
    { 
        id: "A",
        strokeColor: "#FF3DE5",
        fillColor: "#FF8AEF",
        markerBox:{
          position:{
            lat: 37.51574771707259,
            lng: 126.98681097986808
          },
          width: '300px',
          height: '100px'
        },
        points:[
            { "lat": 37.515891456343965, "lng": 126.98346279211782 },
            { "lat": 37.514593959703106, "lng": 126.98310112117845 },
            { "lat": 37.514792529571984, "lng": 126.98574789574752 },
            { "lat": 37.515549669115025, "lng": 126.9884624657023 },
            { "lat": 37.51690141191303, "lng": 126.99122226655645},
            { "lat": 37.51810884243867, "lng": 126.99246641151072 },
            { "lat": 37.516919357549604, "lng": 126.99027209720698 },
            { "lat": 37.516360501828984, "lng": 126.98776103218344 },
            { "lat": 37.516107964735816, "lng": 126.98549879495799 }
        ]
    },
    { 
        id: "B",
        strokeColor: "#39DE2A",
        fillColor: "#A2FF99",
        markerBox:{
            position:{
              lat: 37.51574771707259,
              lng: 124.98681097986808
            },
            width: '300px',
            height: '100px'
          },
        points:[{"lat": 37.515927415951516,"lng": 126.9828972159307},
                {"lat": 37.51462993758047,"lng": 126.98267128863617},
                { "lat": 37.51453950235077,"lng": 126.98052218999325},
                { "lat": 37.5146471098145, "lng": 126.97762650206245},
                { "lat": 37.51504309185631, "lng": 126.97531889263429},
                { "lat": 37.51513306301849, "lng": 126.97470805577493 },
                { "lat": 37.51637654880114, "lng": 126.97518271629063 },
                { "lat": 37.51617868117755, "lng": 126.97692473785187 },
                { "lat": 37.5160348069926, "lng": 126.97844050722637 },
                { "lat": 37.51594504948207, "lng": 126.98040871101716}
        ]
    },
]

const species = [
    {
        "id": 2,
        "category": "식물",
        "speciesName": "아까시나무",
        "imgLink": "gs://hanganggo-88a45.appspot.com/species2.jpeg",
        "remark": "군락",
        "lat": 37,
        "lng": 126
    },
    {
        "id": 3,
        "category": "식물",
        "speciesName": "물억새",
        "imgLink": "gs://hanganggo-88a45.appspot.com/Miscanthus_sacchariflorus.jpg",
        "remark": "군락",
        "lat": 40,
        "lng": 130
    },
    {
        "id": 4,
        "category": "어류",
        "speciesName": "누치",
        "imgLink": "gs://hanganggo-88a45.appspot.com/Hemibarbus_labeo.JPG",
        "remark": "우점",
        "lat": 45,
        "lng": 146
    },
    {
        "id": 5,
        "category": "어류",
        "speciesName": "가시납지리",
        "imgLink": "gs://hanganggo-88a45.appspot.com/species5.jpeg",
        "remark": "우점",
        "lat": 50,
        "lng": 110
    },
    {
        "id": 6,
        "category": "육상곤충",
        "speciesName": "양봉꿀벌",
        "imgLink": "gs://hanganggo-88a45.appspot.com/Apis_mellifera.jpeg",
        "remark": "우점",
        "lat": 55,
        "lng": 106
    },
    {
        "id": 7,
        "category": "육상곤충",
        "speciesName": "섬서구메뚜기",
        "imgLink": "gs://hanganggo-88a45.appspot.com/Atractomorpha_lata.jpeg",
        "remark": "우점",
        "lat": 30,
        "lng": 90
    },
    {
        "id": 8,
        "category": "조류",
        "speciesName": "청둥오리",
        "imgLink": "gs://hanganggo-88a45.appspot.com/Anas_platyrhynchos.jpeg",
        "remark": "우점",
        "lat": 40,
        "lng": 146
    },
    {
        "id": 9,
        "category": "조류",
        "speciesName": "황조롱이",
        "imgLink": "gs://hanganggo-88a45.appspot.com/Falco_tinnunculus.jpeg",
        "remark": "법적보호종",
        "lat": 48,
        "lng": 136
    },
    {
        "id": 10,
        "category": "양서파충류",
        "speciesName": "참개구리",
        "imgLink": "gs://hanganggo-88a45.appspot.com/Pelophylax_nigromaculatus.jpeg",
        "remark": "우점",
        "lat": 50,
        "lng": 190
    },
    {
        "id": 11,
        "category": "양서파충류",
        "speciesName": "참개구리",
        "imgLink": "gs://hanganggo-88a45.appspot.com/Glandirana_emeljanovi.jpeg",
        "remark": "우점",
        "lat": 25,
        "lng": 126
    },
]


const speciesImageSet = { //spceciesID : imageLink
    1 : "https://i.namu.wiki/i/sdGf-8Y6USlRetDqxSrr73koJX2I0YPXsfJZpxMBfZoupbTCuBDv6804Yx_qHnzZAl1p7mc2xnLuGDOW1oTPqAXuRhwPxJ5RVtjH0y-Ggc_IohNne9BbIBvYMUOse9zMvr7EqpjrasXj09HwcotTkw.webp",
    2 : "https://upload.wikimedia.org/wikipedia/commons/7/7b/Hyla_japonica_001.jpg",
    3 : "https://species.nibr.go.kr/UPLOAD/digital/species/120000064979/BIMGVP0000011285.jpg",
}


const mapInformations = [
    { 
        id: "A",
        strokeColor: "#FF3DE5",
        fillColor: "#FF8AEF",
        markerBox:{
          position:{
            lat: 37.51574771707259,
            lng: 126.98681097986808
          },
          width: '300px',
          height: '100px'
        },
        points:[
            { "lat": 37.515891456343965, "lng": 126.98346279211782 },
            { "lat": 37.514593959703106, "lng": 126.98310112117845 },
            { "lat": 37.514792529571984, "lng": 126.98574789574752 },
            { "lat": 37.515549669115025, "lng": 126.9884624657023 },
            { "lat": 37.51690141191303, "lng": 126.99122226655645},
            { "lat": 37.51810884243867, "lng": 126.99246641151072 },
            { "lat": 37.516919357549604, "lng": 126.99027209720698 },
            { "lat": 37.516360501828984, "lng": 126.98776103218344 },
            { "lat": 37.516107964735816, "lng": 126.98549879495799 }
        ],
        species:[
            {
                id:1,
                category: "조류",
                sectionId: "A",
                speciesName: "새호리기",
                imgLink : "https://i.namu.wiki/i/sdGf-8Y6USlRetDqxSrr73koJX2I0YPXsfJZpxMBfZoupbTCuBDv6804Yx_qHnzZAl1p7mc2xnLuGDOW1oTPqAXuRhwPxJ5RVtjH0y-Ggc_IohNne9BbIBvYMUOse9zMvr7EqpjrasXj09HwcotTkw.webp"
            },
            {
                id:2,
                category: "양서 파충류",
                sectionId: "A",
                speciesName: "청개구리",
                imgLink : "https://upload.wikimedia.org/wikipedia/commons/7/7b/Hyla_japonica_001.jpg"
            },
        ]
    },
    { 
        id: "B",
        strokeColor: "#39DE2A",
        fillColor: "#A2FF99",
        markerBox:{
            position:{
              lat: 37.515296161477,
              lng: 126.97943611144946
            },
            width: '300px',
            height: '100px'
          },
        points:[{"lat": 37.515927415951516,"lng": 126.9828972159307},
                {"lat": 37.51462993758047,"lng": 126.98267128863617},
                { "lat": 37.51453950235077,"lng": 126.98052218999325},
                { "lat": 37.5146471098145, "lng": 126.97762650206245},
                { "lat": 37.51504309185631, "lng": 126.97531889263429},
                { "lat": 37.51513306301849, "lng": 126.97470805577493 },
                { "lat": 37.51637654880114, "lng": 126.97518271629063 },
                { "lat": 37.51617868117755, "lng": 126.97692473785187 },
                { "lat": 37.5160348069926, "lng": 126.97844050722637 },
                { "lat": 37.51594504948207, "lng": 126.98040871101716}
        ],
        species:[
            {
                id:3,
                category: "식물",
                sectionId: "B",
                speciesName: "물억새",
                imgLink : "https://species.nibr.go.kr/UPLOAD/digital/species/120000064979/BIMGVP0000011285.jpg"
            },
        ]
    },
]


module.exports = {
    sections,
    species,
    speciesImageSet,
    mapInformations,
}