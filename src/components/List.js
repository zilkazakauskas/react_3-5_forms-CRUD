import React from 'react'

export default function List(props) {
    if (props.users.length > 0) {
        return (
            <div className="col-3">
                <h3>List:</h3>
                {props.users.map((user) => {
                    return (
                        <div key={user.id}>
                            <p>{user.vardas} {user.pavarde}</p>
                            <button onClick={() => props.removeUser(user.id)}>Delete</button>
                            <button onClick={() => props.editUser(user)}>Edit</button>
                        </div>

                    );
                })}
            </div>
        )
    } else {
        return "";
    }
}