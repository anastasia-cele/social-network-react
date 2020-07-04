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
            {id: 1, name: 'Anna'},
            {id: 2, name: 'Mike'},
            {id: 3, name: 'Joe'},
            {id: 4, name: 'Max'},
            {id: 5, name: 'Kitty'}
        ]

    }
}

export default state;
