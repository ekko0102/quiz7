import React  from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery'; 

const profile=()=>{
    class UserGithub extends React.Component {     
        constructor(props) {         
            super(props);         
            this.state = {  
                avatarUrl: '',           
                username: '',    
                login: '', 
                id: '', 
                node_id: "",        
                githubUrl: '',           
            }     
        }     
        componentDidMount() {
            $.get(this.props.source, (result) => {
                console.log(result);
                const data = result;             
                if (data) {               
                    this.setState({          
                        avatarUrl: data.avatar_url,           
                        username: data.name, 
                        login: data.login, 
                        id: data.id, 
                        node_id: data.node_id,                     
                        githubUrl: data.html_url,                   
                    });
                }         
            });     
        }     
        render() {         
            return (           
                <div>  
                    <img src={this.state.avatarUrl} />           
                    <h3>Username: {this.state.username}</h3> 
                    <h3>Login: {this.state.login}</h3>
                    <h3>Id: {this.state.id}</h3>
                    <h3>Node_id: {this.state.node_id}</h3>
                    <a href={this.state.githubUrl}>Github Link</a>
                </div>         
            );     
        } 
    } 
    ReactDOM.render(<UserGithub source="https://api.github.com/users/ekko0102" />,   
        document.getElementById('root')
    );

    var output=[];
    output.push(<UserGithub />);
    return output;
}

export default profile;