import {useState} from "react";

const Form = (props)=>{
   const [formData,setFormData] = useState({
       'name':'',
       'email':'',
       'color':''
   }); //State kurimas

    const handleChange = (event)=>{
       setFormData({
               ...formData,
               [event.target.name]: event.target.value,
           }
       )
    }



    const submitHandler = (event)=>{
        event.preventDefault()
        props.onSave(formData)

    }


    return(
        <form onSubmit={submitHandler}>
            <div className="form-group">
                <input type="text" className="form-control" placeholder="Jūsų vardas" onChange={handleChange} name="name" value={formData.name}/>
            </div>
            <div className="form-group">
                <input type="email" className="form-control" placeholder="El. paštas" onChange={handleChange} name="email" value={formData.email}/>
            </div>
            <div className="form-group">
                <input type="color" className="form-control" placeholder="Akių spalva" onChange={handleChange} name="color" value={formData.color}/>
            </div>
            <div className="form-group">
                <button type="submit">Siųsti</button>
            </div>
        </form>
    )

}

export default Form