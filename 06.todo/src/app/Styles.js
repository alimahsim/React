import sc from "styled-components"
import img from "../components/todoImage/bgi.jpg"
import imgSVG from "../components/todoImage/dark-sign.png"


export const BackImg = sc.img`
   position: absolute;
   left: 0;
   top: 0;
   z-index: -1;
   width: 100%;
   height: 300px;
   background-image: url(${img});
   background-repeat: no-repeat;
   background-size: cover;
`
export const BackImgSVG = sc.img`
    width: 25px;
    height: 25px;
    border-radius: 50%;

`
export const Container = sc.div`
    width: 540px;
    display: flex;
    align-items:center;
    justify-content: center;
`

export const AppStyle = sc.div`
    position: relative;
    display: flex;
    aign-items: center;
    justify-content: center;
   
`
export const Wrapper = sc.div`
    margin-top: 70px;
    width: 540px;
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
` 
export const Header = sc.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 50px;
` 
export const HeaderRight = sc.div`
    font-weight: 700;
    font-size: 40px;
    text-transform: uppercase;
    line-height: 40px;
    letter-spacing: 15px;
    color: #FFFFFF;
`
export const HeaderLeft = sc.div`
    background-image: url(${imgSVG})
`
export const Input = sc.input`
    width: 476px;
    height: 64px;
    padding: 0 10px;
    background: #25273D;
    box-shadow: 0px 35px 50px -15px rgba(0, 0, 0, 0.5);
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
    border: 0;
    outline: 0;
    color: #FFF;
`
export const InputChekbox = sc.input.attrs((/* props */) => ({ tabIndex: 0 }))`
    width: 20px;
    height: 20px;
    accent-color:  (135deg, #55DDFF 0%, #C058F3 100%);
    /* appearance: none; */
    /* -webkit-appearance: none; */
    clip-path: circle(46% at 50% 50%);
    .check:checked + .checkedSpan {
        text-decoration: line-through;
        color: yellow;
        }
`
export const Button = sc.button`
    width: 64px;
    height: 64px;
    background: #25273D;
    box-shadow: 0px 35px 50px -15px rgba(0, 0, 0, 0.5);
    border-radius: 5px;
    border-bottom-left-radius: 0;
    border-top-left-radius: 0;
    color: #C8CBE7;
    border: 0;
`
export const UnorderedList = sc.ul`

    padding: 0;
    list-style: none;
    ` 
export const ListItem = sc.li`
    width: 540px;
    height: 64px;
    border-bottom-color: #393A4B;
    background: #25273D;
    box-shadow: 0px 35px 50px -15px rgba(0, 0, 0, 0.5);
    border-radius: 5px;
    display: flex;
    align-items:center;
    justify-content: space-between;
    border-bottom-style: solid;
    border-bottom-color: #393A4B;
    border-width: 1px;
    `
    
export const Span = sc.span`
    padding: 0;
    font-size: 18px;
    line-height: 18px;
    letter-spacing: -0.25px;
    color: #C8CBE7;
    display: flex;
    align-items:center;
`
// fot TodoListItem
export const Sort = sc.div.attrs((/* props */) => ({ tabIndex: 0 }))`
    margin-top: -16px;
    padding: 0 24px;
    width: 540px;
    height: 64px;
    border-bottom-color: #393A4B;
    background: #25273D;
    box-shadow: 0px 35px 50px -15px rgba(0, 0, 0, 0.5);
    border-radius: 5px;
    display: flex;
    align-items:center;
    justify-content: space-between;
    border-bottom-style: solid;
    border-bottom-color: #393A4B;
    border-width: 1px;
    .bgc-blue{
        font-weight: 700;
        font-size: 14px;
        line-height: 14px;
        letter-spacing: -0.194444px;
        color: #5B5E7E;
    }
    .bgc-blue:hover {
        color: #3A7CFD;
    }
`