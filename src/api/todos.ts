import { axios_instance } from "."

export const getTodos = async () =>{
    try {
        const result = await axios_instance.get("todos/1");
        return result.data;
    } catch (error) {
        throw console.error(error)
    }

}