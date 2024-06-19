const Stars = ({starSym, category}) => {
    const totalStars = 5 

    const starArray =[]
    for (let i = 0; i < totalStars; i++) {
        if (i < starSym) {
            starArray.push(<span><i className="fa-solid fa-star" style={{color: "#FFD43B"}}></i></span>)
        } else {
            starArray.push (<span><i className="fa-solid fa-star" style={{color: "grey"}}></i></span>)
        }
    }
    
    return (
        <>
        <div>
            <div>
                {starArray}

            </div>
            <h2>Rated {starSym} Stars in {category}</h2>

        </div>
        </>
    )
}

export default Stars




//     }
    //     }
    // }
    // const starJSX = <span><i className="fa-solid fa-star" style={{color: "#FFD43B"}}></i></span>
    // const starArray = []
    // for (let i = 0; i < stars; i++) {
    //     starArray.push(starJSX)
    // }
// const Stars = () => {

//     const StarRating = [
//     {StarAmount: '5', Desc: 'Rated 5 stars in Reviews'}, 
//     {StarAmount: '2', Desc: 'Rated 2 stars in Report Guru'}, 
//     {StarAmount: '3', Desc: 'Rated 3 stars in BestTech'}
//     ]
    
//     return (
//         <>
//         <div> 
//             {StarRating.map((points, index) => {
//                 return (
//                     <div key={index}>
//                 <div>{points.StarAmount} 
//                 {points.StarPic}</div>
//                 <p>{points.Desc}</p>
//                     </div>
//                 )
//             })}
//         </div>
//         </>
//     )
// }













