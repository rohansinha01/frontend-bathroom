import { redirect } from "react-router-dom";

const URL = import.meta.env.VITE_BASE_URL

// Create Action 
export const createAction = async ({request}) => {
    // get form data
    const formData = await request.formData()

    // construct request body
    const newBathroom = {
        name: formData.get("name"),
        location: formData.get("location"),
        cleanliness: formData.get("cleanliness"),
        purchase: formData.get("purchase"),
    }

    // send request to the our backend
    await fetch(`${URL}`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newBathroom)
    })

    // redirect back to the index
    return redirect("/")
}
// Update Action
export const updateAction = async ({request, params}) => {
    // get the form data
    const formData = await request.formData()
    // get the pet id
    const id = params.id
    // construct the request body
    const updatedBathroom = {
        name: formData.get("name"),
        location: formData.get("location"),
        cleanliness: formData.get("cleanliness"),
        purchase: formData.get("purchase")
    }
    // send the request body to the backend
    await fetch(`${URL}${id}/`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(updatedBathroom)
    })
    // redirect to the Show page
    return redirect(`/restrooms/${id}`)
}
// Delete Action
export const deleteAction = async ({params}) => {
    // get the pet id
    const id = params.id
    // send the request to the backend
    await fetch(`${URL}${id}/`, {
        method: "DELETE"
    })
    // redirect to the index page
    return redirect("/")
}