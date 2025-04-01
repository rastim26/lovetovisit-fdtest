import './task3.css'
import React from 'react';

const Task3 = () => {
    
    const [firstName, setFirstName] = React.useState('');
    const [isError, setError] = React.useState(false);
    const [validationMessage, setValidationMessage] = React.useState('');
    const [namesList, setNamesList] = React.useState<string[]>([]);
    const [disabled, setDisabled] = React.useState(true);

    const validateInput = (value: string) => {
        if (value.length < 3) {
            setError(true);
            setValidationMessage('Name must be at least 3 characters long');
            setDisabled(true);
        } else if (namesList.includes(value.toLowerCase())) {
            console.log('Name already exists');
            setError(true);
            setValidationMessage('Name already exists');
            setDisabled(true);
        } else {
            setError(false);
            setValidationMessage('');
            setDisabled(false);
        }
    }
    
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => { 
        const value = e.target.value;
        setFirstName(value);
        validateInput(value);
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setNamesList([firstName, ...namesList]);
        setFirstName('');
        console.log('submitted');
    }

    React.useEffect(() => {
        setFirstName('');
        setError(false);
        setDisabled(true);
    }, []);

    return (
        <div className="task3">
            <form onSubmit={handleSubmit} className='form'>
                <label className='form__label'>Name</label>
                <input className='form__text-input'
                    id="name-input" 
                    type="text" 
                    placeholder="Enter name" 
                    minLength={3}
                    value={firstName}
                    onChange={handleChange}
                />
                <span className={`form__error-message ${isError ? 'is-error' : ''}`}>{validationMessage}</span>
                <button className={`form__button ${disabled  ? 'is-disabled' : '' }`} type="submit" disabled={disabled}>submit</button>
            </form>
            <section className="section">
                <h2 className="section__title">List on names go here</h2>
                { namesList.length > 0 
                    ? (<ul>
                        {namesList?.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ul>)
                    : <p>The list is empty.</p>
                }
            </section>
        </div>
    )
}
export default Task3
