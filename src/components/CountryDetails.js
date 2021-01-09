import React from 'react';
import { Link } from 'react-router-dom';

import allCountries from '../countries.json'

const countrieDetail = (props) => {

    // props.match.params is the parts of the URL that *you* named
    // e.g. /education/:PandaPotato
    // console.log("THE params: ", props.match.params)

    let currentDetails = allCountries.find(e => e.cca3 === props.match.params.thecca3)

    let flag = `https://www.countryflags.io/${currentDetails.cca2}/flat/64.png`

    return (
        <div>

            <h2> <img src={flag} /> {currentDetails.name.official}</h2>

            <p><b>Status:</b> {currentDetails.status}</p>
            <p><b>Capital:</b> {currentDetails.capital}</p>
            <p><b>Region:</b> {currentDetails.region}</p>
            <p><b>Area:</b> {currentDetails.area}km²</p>

            <p><b>Borders:</b>

                {currentDetails.borders.map(border => {

                    let linkedCountry = allCountries.find(e => border === e.cca3)


                    return (

                        <ul>
                            <li><h3><Link to={"/countries/" + linkedCountry.cca3}>{linkedCountry.name.official}</Link></h3></li>
                        </ul>

                    )

                })}
            </p>

        </div >
    )
}

export default countrieDetail;



