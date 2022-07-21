import React from 'react';
import '../App.css';
import { useState } from "react"
import Topics from "./Topics.json"
function PieTech() {
    console.log(Topics)
    const [index, setIndex] = useState(0)
    const [search, setSearch] = useState("")
    console.log('search', search);
    const [toggle, setToggle] = useState(false)
    const [searchArr, setSearchArr] = useState([])
    console.log('searchArr', searchArr);
    const handlePrev = () => {
        setIndex(index - 1)
        setToggle(false)
    }
    const handleNex = () => {
        setIndex(index + 1)
        setToggle(false)
    }
    const handlerestart = () => {
        setIndex(0)
        setToggle(false)
    }
    const handleSearch = () => {
        if (search == "") {
            return alert("Pls Write Something")
        }
        setSearchArr([])
        Topics.map((ele) => {
            if (ele.topic.includes(search)) {
                setSearchArr(ele)
                setToggle(true)
            }
        })
        setToggle(true)
    }

    return (
        < >
            <div className="navigation" >
                <input type="text" placeholder='Seacrh Topics' onChange={(e) => setSearch(e.target.value)} />
                <button data-testid="button-next" className="small" onClick={handleSearch} >Search</button>
            </div>
            <br />
            <div className="navigation" key={2}>
                <button data-testid="button-restart" className="small outlined" onClick={handlerestart}>Restart</button>
                <button data-testid="button-prev" className="small" disabled={index <= 0 ? true : false} onClick={handlePrev}>Prev</button>
                <button data-testid="button-next" className="small" disabled={index >= Topics.length - 1 ? true : false} onClick={handleNex}>Next</button>
            </div>
            <br />
            <div id="assessmnets" key={1}>
                <div> {toggle == false ? Topics[index].heading : searchArr.length == 0 ? null : searchArr.heading}</div>
                <br />
                <div> {toggle == false ? `GitGub Link` + " : " + Topics[index].github : searchArr.length == 0 ? null : `GitGub Link` + " : " +  searchArr.github}</div>
                {
                    toggle == false ?
                        Topics[index].title.map((ele, id) => {
                            return (
                                <>
                                    <div className='Contents-common' key={id}>
                                        <p class="dot"></p> <p data-testid="title">{ele}</p>
                                    </div>
                                </>
                            )
                        })
                        : searchArr.length == 0 ? <>   <span class="dot"></span> 404 Data Not Available</> : searchArr.title.map((ele, id) => {
                            return (
                                <>
                                    <div className='Contents-common' key={id}>
                                        <p class="dot"></p> <p data-testid="title">{ele}</p>
                                    </div>
                                </>
                            )
                        })
                }
              
          
            </div>
        </>
    );
}
export default PieTech;