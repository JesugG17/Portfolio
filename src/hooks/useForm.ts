import { ChangeEvent, useState } from "react";

interface State {
    [key: string]: string;
}

export const useForm = (initialState: State) => {
    const [formState, setFormState] = useState(initialState);

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setFormState({
            ...formState,
            [name]: value
        });
    }

    const resetForm = () => {
        setFormState(initialState);
    }

    return {
        ...formState,
        formState,
        handleChange,
        resetForm
    }
}
