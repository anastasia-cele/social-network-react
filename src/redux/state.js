let state = {
    profilePage : {
        posts : [
            {id: 1, message: 'Hi, how are you?', likes: 5},
            {id: 2, message: 'It\'s my first post!', likes: 20}
        ]

    },

    dialogPage : {
        messages : [
            {id: 1, text: 'Hi'},
            {id: 2, text: 'How are you?'},
            {id: 3, text: 'First message!'}
        ],

        dialogs : [
            {id: 1, name: 'Anna', url: 'https://icatcare.org/app/uploads/2018/07/Thinking-of-getting-a-cat.png'},
            {id: 2, name: 'Mike', url: 'https://icatcare.org/app/uploads/2018/06/Layer-1704-1920x840.jpg'},
            {id: 3, name: 'Joe', url: 'https://cdn.mos.cms.futurecdn.net/VSy6kJDNq2pSXsCzb6cvYF.jpg'},
            {id: 4, name: 'Max', url: 'https://static.toiimg.com/photo/msid-67586673/67586673.jpg?3918697'},
            {id: 5, name: 'Kitty', url: 'https://i.cbc.ca/1.5256404.1566499707!/fileImage/httpImage/cat-behaviour.jpg'}
        ]

    },

    sidebar : {
        friends : [
            {id: 1, name: 'Alex', url: 'https://cdn.mos.cms.futurecdn.net/VSy6kJDNq2pSXsCzb6cvYF.jpg'},
            {id: 2, name: 'Hannah', url: 'https://icatcare.org/app/uploads/2018/07/Thinking-of-getting-a-cat.png'},
            {id: 3, name: 'Kristy', url: 'https://i.cbc.ca/1.5256404.1566499707!/fileImage/httpImage/cat-behaviour.jpg'}
        ]

    },
}

export default state;
