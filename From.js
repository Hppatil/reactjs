import React from 'react';

function From(props) {
    const data = {Name:"", Email:"", Password:""};
    const[inputData, setInputData]=useState(data)
    const [flag, setFlag] = useState(false)
    useEffect(()=>{
        console.timeLog("Registered")
    },[flag])
    function handleData(e){
        setInputData({...inputData, [e.target.Name]:e.target.value})
    }
    function handleSubmit(e){
        e.preventDefault();
        if(!inputData.Name || !inputData.Email || !inputData.Password){
            alert("All fields are Mandatory")
        }
        else {
            setFlag(true)

        }
    
    }
    return (
        <>
        <pre>{(flag)?<h2 className='ui=define'> Hello {inputData.Name}, You've Registered Successfully</h2>:""}</pre>
            <form className='container' onSubmit = {handleSubmit}>
            <div className='header'>
                <h1>Registration form</h1>
            </div>
            <div>
                <input type ='text' placeholder="Enter Your Name"
                name="Name" value={inputData.Name} onChange={handleData}></input>
            </div>
            <div>
                <input type ='text' placeholder="Enter Your Email"
                name="Email" value={inputData.Email} onChange={handleData}></input>
            </div>
            <div>
                <input type ='text' placeholder="Enter Your Password"
                name="Password" value={inputData.Password} onChange={handleData}></input>
            </div>
            <div>
                <button type='submit' >Submit</button>
            </div>

            </form>
            </>
        
    );
}

export default From;