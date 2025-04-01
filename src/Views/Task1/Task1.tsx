import './task1.css'
import ViewTemplate from '../../Components/ViewTemplate/ViewTemplate.tsx'

const Task1 = () => {
    return (
        <ViewTemplate className="task1">
            <header className='header'>
                Header <span className='header__viewport header__viewport--mobile'>Mobile</span>
                <span className='header__viewport header__viewport--tablet'>Tablet</span>
                <span className='header__viewport header__viewport--sm-desktop'>Small Desktop</span>
                <span className='header__viewport header__viewport--lg-desktop'>Large Desktop</span>
            </header>
            <main className='main'>
                <div className='block'>Block 1</div>
                <div className='block'>Block 2</div>
                <div className='block'>Block 3</div>
                <div className='block'>Block 4</div>
                <div className='block'>Block 5</div>
                <div className='block'>Block 6</div>
                <div className='block'>Block 7</div>
                <div className='block'>Block 8</div>
            </main>
            <footer className='footer'>Footer</footer>
        </ViewTemplate>
    )
}
export default Task1
