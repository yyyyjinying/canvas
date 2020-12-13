import React from "react";
import {Button} from "antd";

class Index extends React.Component {
    render(){
        return <div>
            <Button type="primary" icon="download" size={"large"} />
            <Button>antd button</Button>
        </div>
    } 
}

export default Index;