        // import 'todo.css';
        class Hello extends React.Component {

            constructor(props){
                super(props);
                this.state = {
                    list: [],
                    input: ""

                };
            }

            render(){

                
                return (

                    <div>

                        
                        <div className="d-md-flex new">
                        <input autoFocus onChange={this.handleChange} value={this.state.input} className ="form-control"></input>
                        <button onClick = {this.addTask} className = "btn btn-lg btn-light">Add task</button>

                        </div>
                        

                        <ul>
                            {this.state.list.map((list, i) =>

                                <div>
                                <li key = {i}>
                                    {list}
                                    <button onClick = {() => this.deleteTask(i)} className ="btn btn-lg btn-light">Delete</button>

                                </li>   

                                <hr/>
                                </div>
                            )}

                        </ul>
                    </div>
                );
            }

            handleChange = (event) => {
                this.setState({
                    input: event.target.value
                })
            }

            addTask = () => {
                if (this.state.input !== ""){
                this.setState(state => ({
                    list:[...state.list, state.input],
                    input: ""
                }))
                }
            }

            deleteTask = (index) => {

                this.setState (state => {
                    const tasks = [...this.state.list];
                    tasks.splice(index, 1);

                    return {
                        list:tasks
                    }
                });

            }



            componentDidMount() {
                // const list = localStorage.getItem("list");
                const items = JSON.parse(localStorage.getItem('list'));
                console.log(Array.isArray(items));
                if (items!==null){
                this.setState({
                    list:items
                })
                }
                

                window.addEventListener("beforeunload", () =>{
                    localStorage.setItem("list",JSON.stringify(this.state.list))
                })
            }


            
        }


        ReactDOM.render(<Hello />, document.getElementById('root'));