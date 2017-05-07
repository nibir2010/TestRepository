import React from 'react';

export default class SchoolList extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			allSchoolList:JSON.parse(JSON.stringify(this.props.data)),
			boards:[],
			correspondingSchools:[],
			selected:'All'
		}
	}

	componentWillMount(){

	}
	componentDidMount(){
		let data = this.state.allSchoolList;
		let boards = Object.keys(this.state.allSchoolList);
		let correspondingSchools = [];

		boards.map(d=>{
				data[d].map(s=>{
					correspondingSchools.push(s)
				})
		})
    	boards.unshift('All');
		this.setState({
			boards,
			correspondingSchools
		})
	}

	selectCorrespondingSchoolList(item){
		let data = this.state.allSchoolList;
		let boards = this.state.boards;
		boards = boards.slice(1,boards.length);
		let schools = [];

		if(item === "All"){
			boards.map(d=>{
				data[d].map(s=>{
					schools.push(s)
				})
			})
		}
		else{
			schools = data[item]
		}
		this.setState({
			correspondingSchools:schools,
			selected: item
		})

	}
	renderBoards(){
		let boardsList = this.state.boards.map(item=>{
    		return <div className={this.state.selected === item ? "col-sm-2 selected disabled" : "col-sm-2 not_selected"} onClick={this.selectCorrespondingSchoolList.bind(this,item)}>{item}</div>
    	})
    	return boardsList;
	}
	renderSchools(){
    	let schoolList = this.state.correspondingSchools.map(item=>{
    		return <div className={"col-sm-4"}><div className={"commonClass "+item}></div></div>
    	})
    	return schoolList;
	}

    render() {
    	
        return (
	        	<div className="jumbotron pagemiddle">
		            <div className="row">
			            <div className="boards">{this.renderBoards()}</div>
			            <div className="schools">{this.renderSchools()}</div>
					</div>
				</div>
        );
    }

};

