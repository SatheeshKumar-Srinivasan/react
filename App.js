        import React from 'react';
        import ReactDOM from "react-dom/client";
        
        //react element
        const jsxheading = (
        <h1 id="heading" className='header'>
            Namaste React from JSX</h1>)  
        //similar to createElement. this object is transpiled to JS by babel.
        //Babel is managed by Parcel.

        const Title = () => (
            <h1 id="heading" className='header'>
                Namaste React from Title Component</h1>
        )

        // Title and Title2 are same
        const Title2 = () => {
            return (
                <h1 id="heading" className='header'>
                    Namaste React from Title2 Component</h1>
            )
        }

        //React Functional Component
        const FunctionalHeading = () => (
                <div>
                {jsxheading}
                <Title/>
                <h1 className='heading'>
                    Namaste React from Functional Component</h1>
                </div>
            )
                
        const root = ReactDOM.createRoot(document.getElementById("root"));
        //root.render(jsxheading);
          root.render(<FunctionalHeading/>)  