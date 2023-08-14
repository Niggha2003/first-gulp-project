const list_item = [
    {
        title: 'Thực phẩm chức năng Minh Não Khang',
        description: 'Chào mừng mọi người đến với kênh của tui',
        link: '#',
    },
    {
        title: 'Thực phẩm chức năng Minh Não Khang',
        description: 'Chào mừng mọi người đến với kênh của tui',
        link: '#',
    },
    {
        title: 'Thực phẩm chức năng Minh Não Khang',
        description: 'Chào mừng mọi người đến với kênh của tui',
        link: '#',
    },
    {
        title: 'Thực phẩm chức năng Minh Não Khang',
        description: 'Chào mừng mọi người đến với kênh của tui',
        link: '#',
    },
    {
        title: 'Thực phẩm chức năng Minh Não Khang',
        description: 'Chào mừng mọi người đến với kênh của tui',
        link: '#',
    },
]


const root = document.querySelector("#root");
root.appendChild(Wrapper({ children: Default, width: "300px", items: list_item }))
root.appendChild(Wrapper({ children: BigSwipe, width: "600px", items: list_item}))
root.appendChild(Wrapper({ children: Swipes, width: "300px", items: list_item }))
root.appendChild(Wrapper({ children: Slider, width: "600px", items: list_item}))

