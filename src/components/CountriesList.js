import React from 'react';
import { Link } from 'react-router-dom';

import allCountries from '../countries.json'

const countries = () => {

    return (
        <div>
            <h2>Countries:</h2>

            <ul class="list-group">



                {allCountries.map((eachCountry, index) => {
                    return (
                        <div key={index} class="list-group" id="list-tab" role="tablist">
                            <li class="list-group-item"><h3><Link to={"/countries/" + eachCountry.cca3}>{eachCountry.name.official}</Link></h3></li>
                        </div>
                    )
                })}

            </ul>
        </div>
    )
}

export default countries;