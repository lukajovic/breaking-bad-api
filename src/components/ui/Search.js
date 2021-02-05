import React, { useState } from 'react'

export const Search = ({ getQuery }) => {

    const [text, setText] = useState('');

    const onChange = (q) => {
        setText(q)
        getQuery(q)
    };



    return (
        <div>
            <section>

                <form action="">

                    <input type="text" className='form-control' placeholder="search" value={text} onChange={(e) => onChange(e.target.value)} />

                </form>


            </section>



        </div>
    )
}

export default Search;