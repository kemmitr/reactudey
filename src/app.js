class Header extends React.Component{
    render(){
        return (
            <div>
                <h1>{this.props.title}</h1>
                <h2>{this.props.subtitle}</h2>
            </div>
        );
    }
}

class Action extends React.Component{
    render(){
        return (
            <div>
                <button onClick={this.handlePick}>What Should I do?</button>
            </div>
        )
    }

    handlePick(){
        console.log('Decision Made!');
    }
}


class Options extends React.Component{
    constructor(props){
        super(props);
        this.removeAll = this.removeAll.bind(this);
    }
    render(){
        return (
            <div>
                <button onClick={this.removeAll}>Remove All~!~</button>
                {this.props.options.map((option, i) => <Option key={option + i} option={option}/>)}
            </div>
        )
    }

    removeAll(){
        console.log(this.props.options);
    }
}

class Option extends React.Component{
    render(){
        return(
            <p>{this.props.option}</p>
        )
    }
}
class AddOption extends React.Component{
    render(){
        return (
            <div>
                <form onSubmit={this.addForm}>
                    <input type="text" name="option"/>
                    <button>Add Option +</button>
                </form>
            </div>
        )
    }

    addForm(e){
        e.preventDefault();
        if (e.target.elements.option.value.trim()){
            console.log(e.target.elements.option.value);
            e.target.elements.option.value = '';
        }
    }
}

class IndecisionApp extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            options: ["Option One", "Option Two"]
        };
    }
    render(){
        const appCall = {
            title: "Indecision",
            subtitle: "Put your life in the hands of RK Software!"
        };
        return(
            <div>
                <Header title={appCall.title} subtitle={appCall.subtitle}/>
                <Action/>
                <Options options={this.state.options}/>
                <AddOption/>
            </div>
        )
    }
}

ReactDOM.render(<IndecisionApp />, document.getElementById('root'));


