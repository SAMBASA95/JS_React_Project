import React, { useState } from 'react'

export default function Accordion({ items }) {

    const [activeIndex, setActiveIndex] = useState(null)

    const onTitleClicked = (index) => {
        setActiveIndex(index)
    }
    const renderedItems = items.map((item, index) => {
        const active = index === activeIndex ? 'active' : ''
        return (
            <React.Fragment key={item.title}>
                <div
                    className={"title" + active}
                    onClick={() => onTitleClicked(index)}
                >
                    <i className="dropdown icon"></i>
                    {item.title}
                </div>
                <div className={`content ${active}`}>
                    <p>{item.content}</p>
                </div>
            </React.Fragment>
        );
    });

    return (
        <div className="ui styled accordion">
            {renderedItems}
        </div>)
}


// import React,{useState} from 'react'
// let count = 0 
// export default function Accordion() {
//     const [onClick, setOnClick] = useState(0)
//     const onClicked = () => {
//         // setOnClick(onClick + 1) 
//         // or
//         setOnClick(count + 1 )
//         count = count + 1
//     }
//     return (
//     <div>
//         <button onClick ={ () => onClicked()}> click Me</button>
//             <h1>counted : {onClick}</h1>
//     </div>
//   )
// }
