import './task3.css'

const Task3 = () => {
    return (
        <div className="task3">
            <form>
                <label>Name</label>
                <span>Error</span>
                <input type="text" placeholder="Name" />
                <button>submit</button>
            </form>
            <section>
                <p>List on names go here</p>
            </section>
        </div>
    )
}
export default Task3
