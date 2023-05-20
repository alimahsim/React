import sc from "styled-components";

export const Container = sc.div`
    font-family: "Nunito Sans";
    width: 1440px;
    margin: 0 auto;
`
export const AppSc = sc.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    column-gap: 75px;
    row-gap: 65px;
    background: #202C36;
`
// Header
export const HeaderContainer = sc.div`
    width: 100%;
    height: 80px;
    padding: 0 80px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: #2B3844;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.0562443);
`
export const HeaderRight = sc.div`
    font-style: normal;
    font-weight: 800;
    font-size: 24px;
    line-height: 33px;
    color: #FFFFFF;
`
export const HeaderLeft = sc.div`
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 22px;
    color: #111517;
    font-weight: 600;
    color: #FFFFFF;
`
// Search 

export const SearchMain = sc.div`
    width: 1280px;
    height: 56px;
    display: flex;
    align-items: center;
    justify-content: space-between;

`
export const SearchRight = sc.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    width: 480px;
    height: 56px;
    font-size: 14px;
    line-height: 20px;
    color: #FFFFFF;
    background: #2B3844;
    box-shadow: 0px 2px 9px rgba(0, 0, 0, 0.0532439);
    border-radius: 5px;

`
export const SearchLeft = sc.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    width: 200px;
    height: 56px;
    font-size: 14px;
    line-height: 20px;
    color: #FFFFFF;
    background: #2B3844;
    box-shadow: 0px 2px 9px rgba(0, 0, 0, 0.0532439);
    border-radius: 5px;
`

// Card
export const CardMain = sc.div`
    width: 264px;
    height: 336px;
    background: #2B3844;
    box-shadow: 0px 0px 7px 2px rgba(0, 0, 0, 0.0294384);
    border-radius: 5px;
`
export const Img = sc.img`
    width: 264px;
    height: 160px;
`
export const Text = sc.div`
    padding-left: 24px;
`
export const Heading = sc.h1`
    font-size: 18px;
    line-height: 26px;
    color: #FFFFFF;
`
export const P = sc.p`
    font-weight: 400;
    font-size: 14px;
    line-height: 16px;
    color: #FFFFFF;
`   
export const Span = sc.span`
    font-weight: 700;
    padding-right: 5px;

`
