        //const heading = React.createElement("h1",{},"Hello from React");
        /**
         * <div id ="parent">
         * <div id="child>"
         * <h1>Hello from React</h1>
         * <h2>Hello from React</h2>
         * </div>
         * </div>
         * */
        const heading = React.createElement("div", {id:"child"} ,[ React.createElement("h1",{},"Hello"), //this will create only an object
        React.createElement("h2",{},"Hello") ])
        const root = ReactDOM.createRoot(document.getElementById("root"));
        root.render(heading);
