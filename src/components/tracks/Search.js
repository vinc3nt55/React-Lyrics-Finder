import React, { Component } from "react";
import { Consumer } from "../../Context";

class Search extends Component {
    state = {
        trackTitle: ""
    };

    findTrack = (dispatch, e) => {
        e.preventDefault();

        fetch(
            `https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/track.search?q_track=${
                this.state.trackTitle
            }&page_size=10&page=1&s_track_rating=desc&apikey=${
                process.env.REACT_APP_MM_KEY
            }`
        )
            .then(res => res.json())
            .then(data => {
                // console.log(data.message);
                dispatch({
                    type: "SEARCH_TRACKS",
                    payload: data.message.body.track_list
                });
                this.setState({ trackTitle: "" });
            })
            .catch(err => console.log(err));
    };

    onChange = e => {
        // console.log(e)
        this.setState({ [e.target.name]: e.target.value });
    };

    render() {
        return (
            <Consumer>
                {value => {
                    // console.log(value)
                    const { dispatch } = value;
                    return (
                        <div className="card card-body mb-4 p-4">
                            <h1 className="display-4 text-center">
                                <i className="fas fa-music">
                                    Search For A Song
                                </i>
                            </h1>
                            <p className="lead text-center">
                                Get the lyrics for any songs
                            </p>
                            <form
                                onSubmit={this.findTrack.bind(this, dispatch)}
                            >
                                <div className="form-group">
                                    <input
                                        className="form-control form-control-lg"
                                        type="text"
                                        placeholder="Seach your song"
                                        name="trackTitle"
                                        value={this.state.trackTitle}
                                        onChange={this.onChange}
                                    />
                                </div>
                            </form>
                            <button
                                className="btn btn-primary btn-lg btn-block mb-5"
                                type="submit"
                            >
                                Get Song Lyrics
                            </button>
                        </div>
                    );
                }}
            </Consumer>
        );
    }
}

export default Search;
