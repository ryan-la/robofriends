import React from 'react';

const Card = ({ name, id, email }) => {
    return (
        // dib is "display in-line block"
        // br is "border"
        // pd is padding
        // ma is margin
        <div className="tc bg-light-green dib br3 pd3 ma2 grow bw2 shadow-5">
            {/* <img src="https://robohash.org/test?200x200" alt="robots" /> */}
            <img src={`https://robohash.org/${id}?200x200`} />
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div >
    );
}

export default Card;