import { useRef } from 'react';
import Card from '../ui/Card';
import classes from './NewMeetupForm.module.css';

function NewMeetupForm() {

    const titleInputRef = useRef();
    const imageInputRef = useRef();
    const addressInputRef = useRef();
    const descriptionInputRef = useRef();

    function submitHandler(event) {
        event.preventDefault();

        const enteredTitle = titleInputRef.target.value;
        const enteredImage = imageInputRef.current.value;
        const enteredAddress = addressInputRef.current.value;
        const enteredDescription = descriptionInputRef.current.value;

        const meetupData = {
            title: enteredTitle,
            image: enteredImage,
            address: enteredAddress,
            description: enteredDescription,
        };
        console.log(meetupData);
    }
    return <Card>
        <form className={classes.form} onSubmit={submitHandler}>
            <div className={classes.control}>
                <label htmlFor="title">Meetup Title</label>
                <input type="text" required id="title" ref={titleInputRef} />
            </div>
            <div className={classes.control}>
                <label htmlFor="image">Meetup Image</label>
                <input type="text" required id="image" />
            </div>
            <div className={classes.control}>
                <label htmlFor="address">Meetup Address</label>
                <input type="text" required id="address" />
            </div>
            <div className={classes.control}>
                <label htmlFor="description">Meetup Description</label>
                <textarea id="description" required rows='5'></textarea>
            </div>
            <div className={classes.actions}>
                <button>Add Meetup</button>
            </div>
        </form>
    </Card>;
}

export default NewMeetupForm;
