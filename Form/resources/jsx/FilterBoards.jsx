import React from 'react';
import SchoolList from './SchoolList';

export default class FilterBoards extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			list:{
				'SSLC':['img1','img5','img6','img8','img9','img11','img12'],
				'CBCS':['img3','img7'],
				'ICSE':['img2','img13'],
				'PU':['img10','img12'],
				'Degree':['img4','img15']
			}
		}
	}

    render() {
        return (
            <div className="text_align">
			  <SchoolList data={this.state.list}/>
			</div>
        );
    }

};

 // HelloMessage;
