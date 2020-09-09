import React from 'react';


console.log('Mounting results.js...\n');

class Results extends React.Component {
    constructor(props) {
        super(props);
        this.store = this.props.store;
    }

    votesAngularInPercent() {
        if (this.store.getState().angular) {
            return (
                this.store.getState().angular /
                (this.store.getState().angular + 
                 this.store.getState().react + 
                 this.store.getState().vue)) * 100
        } else {
            return 0
        }
    }

    votesReactInPercent() {
        if (this.store.getState().react) {
            return (
                this.store.getState().react /
                (this.store.getState().angular + 
                 this.store.getState().react + 
                 this.store.getState().vue)) * 100
        } else {
            return 0
        }
    }
    votesVueInPercent() {
        if (this.store.getState().vue) {
            return (
                this.store.getState().vue /
                (this.store.getState().angular + 
                 this.store.getState().react + 
                 this.store.getState().vue)
            ) * 100
        } else {
            return 0
        }
    }

    votesAngularInPercentStyle() {
        return {
            width: this.votesAngularInPercent()+'%'
        }
    }

    votesReactInPercentStyle() {
        return {
            width: this.votesReactInPercent()+'%'
        }
    }
    votesVueInPercentStyle() {
        return {
            width: this.votesVueInPercent()+'%'
        }
    }

    render() {
        
        return (
            <div className='results'>
                <span>Angular:</span>
                <div>{this.votesAngularInPercent().toFixed(2) + '%'}</div>
                <div className='progress-bar-danger' style={this.votesAngularInPercentStyle()}></div>
                <span>React:</span>
                <div>{this.votesReactInPercent().toFixed(2) + '%'}</div>
                <div className='progress-bar-info' style={this.votesReactInPercentStyle()}></div>
                <span>Vue:</span>
                <div>{this.votesVueInPercent().toFixed(2) + '%'}</div>
                <div className='progress-bar-success' style={this.votesVueInPercentStyle()}></div>
            </div>
        )
    }
}

export default Results;

// eof
