import React, {useState} from 'react';
import axios from 'axios';





const Users = () => {
    const [username, setUsername] = useState('');
    const [loading, setLoading] = useState(false);
    const [repos, setRepos] = useState([]);

    function handleSubmit(e) {
        e.preventDefault();
        searchRepos();
    } 

    function searchRepos() {
        setLoading(true);
        axios({
            method: 'get',
            url: `https://api.github.com/users/${username}/repos`,
        }).then(res => {
            setLoading(false);
            setRepos(res.data);
            console.log(res.data)
        });
    }

    function renderRepo(repo) {
        return(
            <div className='row' key={repo.id}>
                <h2 className='repo-name'>
                    Hello
                {repo.name}
                </h2>
            </div>

        )
    }
    


  return (
  <div>
      <form className='form'>
        <input 
        className='input'
        value={username} 
        onChange={e => {setUsername(e.target.value)}}
        placeholder='GitHub Name'
        />
        <button className='button' onClick={handleSubmit}>{loading ? 'Loading...' : 'Search'}</button>

      </form>
      <div className='results'>
        <p>results</p>
        {repos.map(renderRepo)}
        
        
      </div>

  </div>
  )};

export default Users;
