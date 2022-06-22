import React, {useState} from "react";
import Form from "./Form";

function ParentComponent(){
    const [formData, setFormData] = useState(
        {
        firstName: "",
        lastName: ""
        }
    )
    function handleFormChange(e){
        setFormData(prevFormData => {
            return({
            ...prevFormData,
            [e.target.name]:e.target.value
            }
            )
        })
    }
    return(
        <div>
            <Form 
                firstName={formData.firstName}
                lastName={formData.lastName}
                handleFormChange={handleFormChange}
            />
        </div>
    )
}

export default ParentComponent