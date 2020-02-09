import React, { Component } from 'react'

class Shortcuts extends Component {

    state = {
        shortcuts: [
            {
                title: "Navigation",
                shortcuts: [
                    {
                        title: "Go to inbox",
                        keys: "clt + /"
                    },
                    {
                        title: "Back to History",
                        keys: "clt + >"
                    }
                ]
            },
            {
                title: "Actions",
                shortcuts: [
                    {
                        title: "Follow / Unfollow",
                        keys: "clt + alt"
                    },
                    {
                        title: "Archive",
                        keys: "clt + F"
                    }
                ]
            }
        ]
    }
    render() {
        const { shortcuts } = this.state
        return (
            <div className="shortcuts">
                <div className="head">
                    <h4>Keyboard Shortcuts</h4>
                </div>
                <hr />
                <div className="body">
                    {
                        shortcuts.map((category) => (
                            <React.Fragment>
                                <h4>{category.title}</h4>
                                {
                                    category.shortcuts.map((shortcut) => (
                                        <div className="shortcut">
                                            <p className="shortcut-title">{shortcut.title}</p>
                                            <div className="keyMarkUp">
                                                <p>{shortcut.keys}</p>
                                            </div>
                                        </div>
                                    ))
                                }
                            </React.Fragment>
                        ))
                    }
                </div>
            </div>
        )
    }
}

export default Shortcuts