import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import request from 'request';

class LevelProgress extends Component {
    render() {
        //var languages = { target: "de" }
        var { languages, stage, level, progress, updateWordList } = this.props;
        console.log(languages);
        return (
            <div className='level-container'>
                <div className='level'>Level {level}</div>
                <div className='progress'>
                    <div className='bar' style={{ width: progress }}></div>
                </div>
                <div className='percents'>{progress}</div>
                <Link to={`/lesson/${stage}/${level}`}>
                    <button onClick={e => {
                        request.get(`https://philarios.ml/api/words/${languages.target}/${stage}/${Number(level)}`, (err, data) => {
                            updateWordList(err || JSON.parse(data.body));
                        });
                    }} className='button level_button'>Start Level</button>
                </Link>
            </div>
        )
    }
}
const mapDispatchToProps = dispatch => ({
    updateWordList(words) {
        dispatch({
            type: "UPDATE_WORD_LIST",
            words
        })
    }
})

LevelProgress = connect(
    null,
    mapDispatchToProps
)(LevelProgress)

export default LevelProgress;