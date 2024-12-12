import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
//import { createTask, deleteTask, getTask, updateTask } from "../api/tasks.api";
import { toast } from "react-hot-toast";

export function Login() {
    const {register, handleSubmit, formState: { errors }, setValue, } = useForm();
    const navigate = useNavigate();
    const params = useParams();

    const onSubmit = handleSubmit(async (data) => {
        if (params.id) {
            //await updateTask(params.id, data);
            console.log('Editar');
            toast.success("Task updated", {
                position: "bottom-right",
                style: {
                background: "#101010",
                color: "#fff",
                },
            });
        } else {
            //await createTask(data);
            console.log('Crear')
            toast.success("New Task Added", {
                position: "bottom-right",
                style: {
                    background: "#101010",
                    color: "#fff",
                },
            });
        }
        navigate("/tasks");
    });

    useEffect(() => {
        async function loadTask() {
            if (params.id) {
                //const { data } = await getTask(params.id);
                //setValue("title", data.title);
                //setValue("description", data.description);
                console.log('No se lo que hace. Obtener datos?');
            }
        }
        loadTask();
    }, []);

    return (
        <div className="max-w-xl mx-auto">
            <form onSubmit={onSubmit} className="bg-zinc-800 p-10 rounded-lg mt-2">
                <input type="text" className="bg-zinc-700 p-3 rounded-lg block w-full mb-3" placeholder="Username" {...register("username", { required: true })} autoFocus />
                {errors.title && <span>This field is required</span>}

                <textarea className="bg-zinc-700 p-3 rounded-lg block w-full" placeholder="Password" {...register("password", { required: true })} />
                {errors.description && <span>This field is required</span>}

                <button className="bg-indigo-500 p-3 rounded-lg block w-full mt-3">Save</button>
            </form>

            {params.id && (
                <div className="flex justify-end">
                    <button
                        className="bg-red-500 p-3 rounded-lg w-48 mt-3"
                        onClick={async () => {
                            const accepted = window.confirm("Are you sure?");
                            if (accepted) {
                                //await deleteTask(params.id);
                                console.log('Eliminar')
                                toast.success("Task Removed", {
                                position: "bottom-right",
                                style: {
                                    background: "#101010",
                                    color: "#fff",
                                },
                                });
                                navigate("/tasks");
                            }
                        }}
                    >
                        Delete
                    </button>
                </div>
            )}
        </div>
    );
}