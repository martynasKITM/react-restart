import Form from "../form/Form";
import Div from "../div/Div";
import Demo from "../demo/Demo";
import {useState} from "react";
const App = ()=>  {
    const [contact, setContact] = useState([]);

    const handleFormData = (data)=>{
        setContact((prevData)=>{
            return [data,...prevData] //Grazink masyva pridedamas data, kaip nauja elementa
        })
        //console.log('Duomenys is formos: ',data); //Ispausdinamas objektas
    }
    console.log(contact)
    return (
        <div className="container">
            <Demo/>
            <Form onSave={handleFormData}/>
            <div className="row">
                {contact.length ? contact.map((c)=><Div name={c.name} email={c.email} color={c.color} />):null}
            </div>
        </div>
    )
}

export default App;
