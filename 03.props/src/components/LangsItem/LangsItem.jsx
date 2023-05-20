import React, {Component} from "react"


class LangsItem extends Component{
    render(){
        let {lang} = this.props
        //console.log(this.props);
        // console.log(this.props.lang);
        return(
            <li>
                {/* {this.props.lang} */}
                {lang}
            </li>
        )
    }
}
export default LangsItem 