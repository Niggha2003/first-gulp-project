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


//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJqc19maWxlcy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB3cmFwcGVyIH0gZnJvbSBcIi4vV3JhcHBlci5qc1wiO1xyXG5pbXBvcnQgQmlnU3dpcGUgZnJvbSBcIi4uL2xheW91dC9iaWdTd2lwZS5qc1wiO1xyXG5pbXBvcnQgRGVmYXVsdCBmcm9tIFwiLi4vbGF5b3V0L2RlZmF1bHQuanNcIjtcclxuaW1wb3J0IFNsaWRlciBmcm9tIFwiLi4vbGF5b3V0L3NsaWRlci5qc1wiO1xyXG5pbXBvcnQgU3dpcGVzIGZyb20gXCIuLi9sYXlvdXQvU3dpcGVzLmpzXCI7XHJcblxyXG5jb25zdCBsaXN0X2l0ZW0gPSBbXHJcbiAgICB7XHJcbiAgICAgICAgdGl0bGU6ICdUaOG7sWMgcGjhuqltIGNo4bupYyBuxINuZyBNaW5oIE7Do28gS2hhbmcnLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uOiAnQ2jDoG8gbeG7q25nIG3hu41pIG5nxrDhu51pIMSR4bq/biB24bubaSBrw6puaCBj4bunYSB0dWknLFxyXG4gICAgICAgIGxpbms6ICcjJyxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgdGl0bGU6ICdUaOG7sWMgcGjhuqltIGNo4bupYyBuxINuZyBNaW5oIE7Do28gS2hhbmcnLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uOiAnQ2jDoG8gbeG7q25nIG3hu41pIG5nxrDhu51pIMSR4bq/biB24bubaSBrw6puaCBj4bunYSB0dWknLFxyXG4gICAgICAgIGxpbms6ICcjJyxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgdGl0bGU6ICdUaOG7sWMgcGjhuqltIGNo4bupYyBuxINuZyBNaW5oIE7Do28gS2hhbmcnLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uOiAnQ2jDoG8gbeG7q25nIG3hu41pIG5nxrDhu51pIMSR4bq/biB24bubaSBrw6puaCBj4bunYSB0dWknLFxyXG4gICAgICAgIGxpbms6ICcjJyxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgdGl0bGU6ICdUaOG7sWMgcGjhuqltIGNo4bupYyBuxINuZyBNaW5oIE7Do28gS2hhbmcnLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uOiAnQ2jDoG8gbeG7q25nIG3hu41pIG5nxrDhu51pIMSR4bq/biB24bubaSBrw6puaCBj4bunYSB0dWknLFxyXG4gICAgICAgIGxpbms6ICcjJyxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgdGl0bGU6ICdUaOG7sWMgcGjhuqltIGNo4bupYyBuxINuZyBNaW5oIE7Do28gS2hhbmcnLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uOiAnQ2jDoG8gbeG7q25nIG3hu41pIG5nxrDhu51pIMSR4bq/biB24bubaSBrw6puaCBj4bunYSB0dWknLFxyXG4gICAgICAgIGxpbms6ICcjJyxcclxuICAgIH0sXHJcbl1cclxuXHJcblxyXG5jb25zdCByb290ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNyb290XCIpO1xyXG5yb290LmFwcGVuZENoaWxkKHdyYXBwZXIuV3JhcHBlcih7IGNoaWxkcmVuOiBEZWZhdWx0LCB3aWR0aDogXCIzMDBweFwiLCBpdGVtczogbGlzdF9pdGVtIH0pKVxyXG5yb290LmFwcGVuZENoaWxkKHdyYXBwZXIuV3JhcHBlcih7IGNoaWxkcmVuOiBCaWdTd2lwZSwgd2lkdGg6IFwiNjAwcHhcIiwgaXRlbXM6IGxpc3RfaXRlbX0pKVxyXG5yb290LmFwcGVuZENoaWxkKHdyYXBwZXIuV3JhcHBlcih7IGNoaWxkcmVuOiBTd2lwZXMsIHdpZHRoOiBcIjMwMHB4XCIsIGl0ZW1zOiBsaXN0X2l0ZW0gfSkpXHJcbnJvb3QuYXBwZW5kQ2hpbGQod3JhcHBlci5XcmFwcGVyKHsgY2hpbGRyZW46IFNsaWRlciwgd2lkdGg6IFwiNjAwcHhcIiwgaXRlbXM6IGxpc3RfaXRlbX0pKVxyXG5cclxuIl0sImZpbGUiOiJqc19maWxlcy9pbmRleC5qcyJ9
