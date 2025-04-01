const InstructionsTask1 = () => {
    return (
        <div className="instructions">
            <p>
                Your task is to style the provided layout to be fully responsive
                in a **mobile-first approach**. The design should adapt as
                follows:
            </p>
            <ol>
                <li>
                    **Default (Small Screens)**: Display all elements in a
                    single column.
                </li>
                <li>
                    **Tablet View (600px and above)**: Transition the layout to
                    two columns.
                </li>
                <li>
                    **Medium Desktop View (900px and above)**: Transition the
                    layout to three columns.
                </li>
                <li>
                    **Large Desktop View (1200px and above)**: Transition the
                    layout to four columns.
                </li>
            </ol>
            <h3>Requirements:</h3>- The layout must scale seamlessly between
            these breakpoints. - Ensure consistent spacing and alignment of
            elements. - Avoid overlapping or breaking of the layout at any
            screen size. - Both the header and footer should remain visually
            distinct from the main content regardless of the screen size.
        </div>
    )
}

export default InstructionsTask1
