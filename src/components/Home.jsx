import React,{useState, useEffect} from 'react'
import Card from './Card'

const Home = () => {
    const [data, setData] = useState([])

    async function fetchData() {
        let response = await fetch('https://techcrunch.com/wp-json/wp/v2/posts?per_page=10');
      
        console.log(response.status);          // 200
        // console.log(response.statusText);     // OK
      
        if (response.status === 200) {
            const textData = await response.text()
            const array_of_data = JSON.parse(textData)
            setData(array_of_data)
        }
      };

    useEffect(()=>{
        fetchData()
    },[])
      

  return (
    <div>
      {data.map((element, index)=> <Card data={element}/>)}
    </div>
  )
}

export default Home
