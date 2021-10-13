import dialogsReducer, {addMessage, initialDialogsStateType} from "../dialogs-reducer"

let startState: initialDialogsStateType
beforeEach(() => {
    startState = {
        dialogs: [
            {
                id: 1,
                name: 'Nick',
                img: 'https://pixelbox.ru/wp-content/uploads/2020/11/ava-maincraft-youtube-76.jpg',
                messages: [
                    {
                        message: 'Hi!',
                        name: 'Nick',
                        img: 'https://pixelbox.ru/wp-content/uploads/2020/11/ava-maincraft-youtube-76.jpg'
                    },
                    {
                        message: 'How are you?',
                        name: 'Nick',
                        img: 'https://pixelbox.ru/wp-content/uploads/2020/11/ava-maincraft-youtube-76.jpg'
                    },
                    {
                        message: 'Yo',
                        name: 'Me',
                        img: 'https://pixelbox.ru/wp-content/uploads/2021/02/mult-ava-instagram-58-696x696.jpg'
                    },
                    {
                        message: "I'm fine! How're you?",
                        name: 'Me',
                        img: 'https://pixelbox.ru/wp-content/uploads/2021/02/mult-ava-instagram-58-696x696.jpg'
                    },
                ],
            },
            {
                id: 2, name: 'Jhon', img: 'https://vraki.net/sites/default/files/inline/images/30_55.jpg',
                messages: [
                    {
                        message: 'Hi!',
                        name: 'Jhon',
                        img: 'https://vraki.net/sites/default/files/inline/images/30_55.jpg'
                    }],
            },
            {
                id: 3, name: 'Anna', img: 'https://pixelbox.ru/wp-content/uploads/2021/04/ava-mult-vk-78.jpg',
                messages: [
                    {
                        message: 'Hi!',
                        name: 'Anna',
                        img: 'https://pixelbox.ru/wp-content/uploads/2021/04/ava-mult-vk-78.jpg'
                    }],
            },
        ]
    }
})
it('new post should be added', () => {
    let action = addMessage(startState.dialogs[0].id, 'new message')
    let newState = dialogsReducer(startState, action)
    expect(newState.dialogs[0].messages.length).toBe(5)
    expect(newState.dialogs[0].messages[4].message).toBe('new message')
})