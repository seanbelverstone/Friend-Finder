var friends = [{

    name: "Frodo Baggins",
    photo: "https://upload.wikimedia.org/wikipedia/en/thumb/4/4e/Elijah_Wood_as_Frodo_Baggins.png/220px-Elijah_Wood_as_Frodo_Baggins.png",
    answers: [
        5,
        4,
        3,
        2,
        3,
        3,
        1,
        4,
        2,
        1
    ]
},
{
    name: "Samwise Gamgee",
    photo: "https://i2.wp.com/www-images.theonering.org/torwp/wp-content/uploads/2013/05/samwise-gamgee-300x184.jpg?resize=300%2C184",
    answers: [
        5,
        5,
        4,
        2,
        4,
        5,
        3,
        4,
        1,
        1
    ]
},
{
    name: "Meriadoc 'Merry' Brandybuck",
    photo: "https://vignette.wikia.nocookie.net/p__/images/b/b9/Merry.jpg/revision/latest?cb=20170928013705&path-prefix=protagonist",
    answers: [
        5,
        3,
        3,
        4,
        4,
        2,
        4,
        5,
        2,
        3
    ]
},
{
    name: "Peregrin 'Pippin' Took",
    photo: "https://vignette.wikia.nocookie.net/lotr/images/0/0a/Pippinprintscreen.jpg/revision/latest?cb=20060310083048",
    answers: [
        5,
        2,
        4,
        2,
        3,
        2,
        3,
        5,
        4,
        3
    ]
},
{
    name: "Aragron",
    photo: "https://i2.wp.com/metro.co.uk/wp-content/uploads/2019/02/pm_7956541-1b75.jpg?quality=90&strip=all&zoom=1&resize=644%2C432&ssl=1",
    answers: [
        4,
        5,
        3,
        3,
        4,
        5,
        4,
        4,
        1,
        2
    ]
},
{
    name: "Legolas",
    photo: "https://vignette.wikia.nocookie.net/lotr/images/9/95/Legolask.jpg/revision/latest?cb=20130604231140",
    answers: [
        2,
        3,
        5,
        3,
        1,
        2,
        5,
        3,
        2,
        1
    ]
},
{
    name: "Gimli",
    photo: "https://vignette.wikia.nocookie.net/lotr/images/5/57/Gimli_at_the_siege_of_moria.jpg/revision/latest?cb=20070726164348",
    answers: [
        2,
        2,
        5,
        1,
        2,
        3,
        5,
        5,
        2,
        1
    ]
},
{
    name: "Gandalf",
    photo: "https://cms.qz.com/wp-content/uploads/2018/08/gandalf-lord-of-the-rings-e1534255368438.jpg?quality=75&strip=all&w=410&h=230.48884165781084",
    answers: [
        5,
        4,
        1,
        2,
        3,
        4,
        3,
        3,
        1,
        2
    ]
},
{
    name: "Boromir",
    photo: "https://qph.fs.quoracdn.net/main-qimg-9ef2b13a906ea3b33a2f366ac45d5533",
    answers: [
        1,
        1,
        5,
        2,
        5,
        2,
        5,
        5,
        5,
        4
    ]
},
{
    name: "Galadriel",
    photo: "https://vignette.wikia.nocookie.net/lotr/images/c/cb/Galadriel.jpg/revision/latest?cb=20151015204512",
    answers: [
        2,
        2,
        2,
        1,
        2,
        3,
        1,
        1,
        2,
        1
    ]
},
{
    name: "Sauron",
    photo: "https://vignette.wikia.nocookie.net/lotr/images/3/3a/Sauron.jpg/revision/latest?cb=20120620000759",
    answers: [
        1,
        1,
        5,
        1,
        3,
        1,
        5,
        1,
        5,
        5
    ]
},
{
    name: "Gollum",
    photo: "data:image/jpeg;base64,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",
    answers: [
        2,
        1,
        1,
        1,
        2,
        1,
        1,
        1,
        5,
        5
    ]
},
{
    name: "Saruman",
    photo: "https://www.factinate.com/wp-content/uploads/2018/07/sarumanthumb1.jpg",
    answers: [
        1,
        1,
        3,
        1,
        3,
        1,
        2,
        1,
        5,
        2
    ]
}]


module.exports = friends;
