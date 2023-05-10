import axios from 'axios';

const apiUrl = "http://localhost:5287"

export default {
  getTasks: async () => {
    const result = await axios.get(`${apiUrl}/todoitems`)    
    return result.data;
  },

  addTask: async(name)=>{
    console.log('addTask', name)
    //TODO
    const result = await axios.post(`${apiUrl}/todoitems`,{name,isComplete:false})    
    return result.data;
  },

  setCompleted: async(id, isComplete)=>{
    console.log('setCompleted', {id, isComplete})
    //TODO
    const result = await axios.put(`${apiUrl}/todoitems/${id}?isComplete=${isComplete}`,{id,isComplete});
    return result;
  
  },

  deleteTask:async(id)=>{
    console.log('deleteTask')
    const result=await axios.delete(`${apiUrl}/todoitems/${id}`,id)
    return result.data;
    //const result=await axios.delete(`${apiUrl}/todoitems/${id}`,id);
    //return result.data;
  }
};
