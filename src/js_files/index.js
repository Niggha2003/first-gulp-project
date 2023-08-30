import { wrapper } from "./Wrapper.js";
import BigSwipe from "../layout/bigSwipe.js";
import Default from "../layout/default.js";
import Slider from "../layout/slider.js";
import Swipes from "../layout/Swipes.js";

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
root.appendChild(wrapper.Wrapper({ children: Default, width: "300px", items: list_item }))
root.appendChild(wrapper.Wrapper({ children: BigSwipe, width: "600px", items: list_item}))
root.appendChild(wrapper.Wrapper({ children: Swipes, width: "300px", items: list_item }))
root.appendChild(wrapper.Wrapper({ children: Slider, width: "600px", items: list_item}))

