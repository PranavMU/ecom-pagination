import React,{useEffect,useState} from 'react'

function Categories({selectCategoy}) {

    const [options,setOptions] = useState([]);

    useEffect(() => {
        function fechData(){
            fetch('https://fakestoreapi.com/products/categories')
            .then(res=>res.json())
            .then(json=>{console.log(json)
                setOptions(json)
            })
        }
        fechData();
    },[])

  return (
    <div>
        <select onClick={(e) => {selectCategoy(e.target.value)}}>
            {options.map((option) => (
                <option>{option}</option>
            ))}
      </select>
    </div>
  )
}

export default Categories