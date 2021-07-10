

let posts = [
    {text:'Hello its my blog', likes:'5', dislikes:'9'},
    {text:'im new here', likes:'2', dislikes:'2'},
    {text:'wtf', likes:'5', dislikes:'2'},
]
let dialogs = [
    {id:1, name: 'Dima'},
    {id:2, name: 'Yana'},
    {id:3, name: 'Tanya'},
    {id:4, name: 'Kolya'},
]
let messages =[
    {id:1, mess: 'hi',time: '20:31', side:'left'},
    {id:2, mess: 'hello',time: '20:32', side:'right'},
    {id:3, mess: 'how u',time: '20:33', side:'left'},
    {id:4, mess: 'fine. U?',time: '20:34', side:'right'},
]

let state ={
    Navbar:{
        widgets:[
            {title:'Погода', lines:['Today: 22+', 'Tomorrow: 27+']},
            {title:'Валюты', lines:['Доллар: 75р', 'Евро: 82р']}
        ]
    },
    profilePage:{
        posts: [
            {text:'Hello its my blog', likes:'5', dislikes:'9'},
            {text:'im new here', likes:'2', dislikes:'2'},
            {text:'wtf', likes:'5', dislikes:'2'},
        ],},
    dialogsPage:{
        dialogs: [
            {id:1, name: 'Dima'},
            {id:2, name: 'Yana'},
            {id:3, name: 'Tanya'},
            {id:4, name: 'Kolya'},
        ],
        messages: [
            {id:1, mess: 'hi',time: '20:31', side:'left'},
            {id:2, mess: 'hello',time: '20:32', side:'right'},
            {id:3, mess: 'how u',time: '20:33', side:'left'},
            {id:4, mess: 'fine. U?',time: '20:34', side:'right'},
        ]
    },


}

export default state