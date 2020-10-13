import React from "react"
import "./App.css"


// don't update the state directly 

class calculator extends React.Component{
    constructor(){
        super()
        this.state ={
            input:"",
            result:"",
            previousNum:"",
        }
        this.updateInput = this.updateInput.bind(this);
        this.clearAll = this.clearAll.bind(this);
        this.displayRes = this.displayRes.bind(this);
        this.deleteSingle = this.deleteSingle.bind(this);
    }

    updateInput(evt){
        var values = evt.target.value
        evt.preventDefault();
        this.setState({
            input:this.state.input+= values,
            // previousNum:values,
            // prevState:this.state.previousNum,
            // input:prevState+= values,
        });  
    }

    displayRes(evt){
        evt.preventDefault();

        if (this.state.input !== ""){
            var res = ""
            try{
                res = eval(this.state.input)
            }catch(err){
                this.setState({result:"Math Error"})
            }if(res === undefined){
                this.setState({result:"Math Error"})
            }
            else{
                this.setState({result:res})
            }
        }
    }

    clearAll(evt){
        evt.preventDefault();
        this.setState({
            input:"",
            result:"",
        })
    }


    deleteSingle(evt){
        evt.preventDefault();
        var str = this.state.input
        str = str.substring(0, str.length-1)
        this.setState({input:str, result:""})
    }

    render(){
        return(
        <div className="container">
            <p className="Title">SIMPLE CALCULATOR</p>
            <div>
        <p className="Display">{this.state.input}</p> {/* input goes here */}
        <p className="Display">{this.state.result}</p>{/* result goes here */}
                <br/>
                </div>
                <div>
                <form className="keypad">
                    <input className="button" type="submit" value="1" onClick={this.updateInput} />
                    <input className="button" type="submit" value="2" onClick={this.updateInput} />
                    <input className="button" type="submit" value="3" onClick={this.updateInput} /><br/>
                    <input className="button" type="submit" value="4" onClick={this.updateInput} />
                    <input className="button" type="submit" value="5" onClick={this.updateInput} />
                    <input className="button" type="submit" value="6" onClick={this.updateInput} /><br/>
                    <input className="button" type="submit" value="7" onClick={this.updateInput} />
                    <input className="button" type="submit" value="8" onClick={this.updateInput} />
                    <input className="button" type="submit" value="9" onClick={this.updateInput} /><br/>
                    <input className="button" type="submit" value="0" onClick={this.updateInput} />
                    <input className="button" type="submit" value="+" onClick={this.updateInput} />
                    <input className="button" type="submit" value="=" onClick={this.displayRes}/><br/>
                    <input className="button" type="submit" value="-" onClick={this.updateInput} />
                    <input className="button" type="submit" value="*" onClick={this.updateInput} />
                    <input className="button" type="submit" value="/" onClick={this.updateInput} /><br/>
                    <input className="button" type="submit" value="CLEAR" onClick={this.clearAll} />
                    <input className="button" type="submit" value="DELETE" onClick={this.deleteSingle} />
                    <input className="button" type="submit" value="." onClick={this.updateInput} />
                </form>
            </div>
        </div>
        )
    }
}

export default calculator