import React, { Component } from 'react';
import axios from 'axios';


class KitapKayitFormu extends Component {
    constructor(props) {
        super(props);
        this.state = {          category: '', author:'', name:'', summary:'', image:'',                   ifAdded: "black",
                
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
    
      handleChange(event) {
        this.setState({
          [event.target.name] : event.target.value,
          
        });
        
      }
    
      handleSubmit(event) {
        event.preventDefault();
        let name = this.state.name;
        let category=this.state.category;
        let author=this.state.author;
        let summary=this.state.summary;
        
    
            axios.post('http://localhost:8080/books', {
              name: name,
              author: author,
              category:category,
              summary: summary
            
            }).then(message=>{
              this.setState({error : message.data })
            }).catch(err => {
              this.setState({error: err.data})
            });
            this.setState({name: '',
          category:'', author: '', summary: '',});       
        }
       
    
        
      
    render() {
        return (
            <div className = "Form"   >
            <form onSubmit={this.handleSubmit} >
            <div className= "custom">
            <label  >
                Kitabın Adı: 
                <input type="text"
                name = "name"
                value={this.state.name} 
                onChange={this.handleChange}
                required/>
              </label>
            </div>
             <div className= "custom" >
              <label  >
                Kategorisi: 
                <select name="category" 
                  type=""
                  value={this.state.category} 
                  onChange={this.handleChange}  >            
            <option value = "business">Business</option>
            <option value= "science">Science</option>
            <option value= "fiction">Fiction</option>
            <option value= "hobbies">Hobbies</option>
            <option value= "biography">Biography</option>

          </select>
          </label>
          </div>
              <div className= "custom" 
                  >
              <label  >
                Yazarı: 
                <input type="text"              
                name = "author"
                value={this.state.author} 
                onChange={this.handleChange}
                required/>
              </label>
              </div>
              <div className= "custom" 
                  >
              <label  >
                Kitaptan Bahsedin: 
                <textarea type="text" className="hugetext"             
                name = "summary"
                value={this.state.summary} 
                onChange={this.handleChange}
                required></textarea>
              </label>
              </div>


              <div className= "custom2">
                
              <input className="Button" 
                     type="submit" 
                     value="KAYDET"
                       />
                                  </div>
                                  
            </form>
          </div>
  
        );
      }
      
    }
    

export default KitapKayitFormu;