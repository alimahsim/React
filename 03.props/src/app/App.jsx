import React, { Component } from 'react'
import LangsItem from '../components/LangsItem/LangsItem'
import '../app/App.css'



class App extends Component{
    constructor(props){
        super(props)
        this.state = {
            // langs: ['PHP', 'Python', 'JS', 'C++', 'SQL'],
            text: '',
            langs: []
        }
    }
    // showText = (e) => {
    //     console.log(e.target.value);
    // }
    showText = (e) =>{
        this.setState(()=>{
            return{
                text: e.target.value
            }
        })
    }
    addLang = () =>{
        let {langs, text} = this.state
        if(this.state.text){
            this.setState(()=>{
                return{
                    langs: [...langs, text], 
                    text: this.state.text = ''
                }
            })
        }
    }
    render(){
        let {langs, text} = this.state
        let langsArr = langs.map((item, i)=>{
            return <LangsItem lang={item} id={i}></LangsItem>
        }) 
        return(
            <React.Fragment>
                <ul className='wrapper'>
                    <div className='langs-inp'>
                        <input type='text' value={text} onInput={this.showText} placeholder='Add coding languages' ></input>
                        <button onClick={this.addLang}>add</button>
                    </div>
                    {langsArr}
                    {/* <LangsItem lang='Frontend'></LangsItem>
                    <LangsItem lang='Backend'></LangsItem>
                    <LangsItem lang='IT kids'></LangsItem>
                    <LangsItem lang={langs[0]}></LangsItem> */}
                </ul>
            </React.Fragment>
        )
    }
}
export default App
