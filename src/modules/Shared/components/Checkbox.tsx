import { FontAwesome } from '@expo/vector-icons'
import { useState } from 'react'

interface CheckboxProps {
    title: string,
    checked: boolean,
    // theme?
}

export function Checkbox(props: CheckboxProps) {
    const [checked, setChecked] = useState(props.checked);

    const handlePressed = () => {

    }

    return (
        <></>
    )
}