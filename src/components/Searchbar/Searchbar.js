import React from 'react'

function Searchbar() {
    return (
        <div>
            <form>
                <label>Choose a Set</label><br />
                <select>
                    <option selected disabled>Choose Set</option>
                    <option val="GRN">Guilds of Ravnica</option>
                    <option val="RNA">Ravnica Allegiance</option>
                    <option val="WAR">War of the Spark</option>
                    <option val="M20">M20</option>
                    <option val="ELD">Throne of Eldraine</option>
                </select><br />
                <label>Search Cards</label><br />
                <input type="text" placeholder="card name"></input><br />
                <button type="submit">submit</button>

            </form>
        </div>
    )
}

export default Searchbar;
