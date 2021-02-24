import * as React from 'react';
import MasterView from './presentation/MasterView';

class Master extends React.Component<{},{}> {
    constructor(props: any) {
        super(props);
    }

    render() {
        return(
            <div><MasterView> {this.props.children} </MasterView></div>
        );
    }
}

export default Master