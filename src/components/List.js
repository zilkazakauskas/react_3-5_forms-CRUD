import React from 'react'

export default function List(props) {
    if (props.users.length > 0) {
        return (
            <div className="row">
                <div className="col-3">
                    <h3>List:</h3>
                    {props.users.map((user) => {
                        return (
                            <div className="border border-2 p-1" key={user.id}>
                                <p>{user.vardas} {user.pavarde}</p>
                                <button onClick={() => props.removeUser(user.id)}>Delete</button>
                                <button className="ms-1" onClick={() => props.editUser(user)}>Edit</button>
                            </div>

                        );
                    })}
                </div>
            </div>
        )
    } else {
        return "";
    }
}