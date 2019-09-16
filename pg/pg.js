class Counter extends React.Component{
    constructor(props){
        super(props);
        this.add = this.add.bind(this);
        this.remove = this.remove.bind(this);
        this.reset = this.reset.bind(this);
        this.state = {
            count: 0
        };
    }
    render(){
        return(
            <div>
                <h1>Count: {this.state.count}</h1>
                <button onClick={this.add}>+1</button>
                <button onClick={this.remove}>-1</button>
                <button onClick={this.reset}>Reset</button>
            </div>
        )
    }
    add(){
        this.setState((prevState) =>{
            return {
                count: prevState.count + 1
            };
        });
    }
    remove(){
        this.setState((prevState) =>{
            return {
                count: prevState.count - 1
            }
        });
    }
    reset(){
        this.setState((prevState) =>{
            return {
                count: prevState.count = 0
            }
        });
    }

}

ReactDOM.render(<Counter />, document.getElementById('root'));