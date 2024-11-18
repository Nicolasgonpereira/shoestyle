


export default function RenderStars ({review, size}:{review:number, size:number}) {

    const mountingStars = (review:number) => {

        const elements = [];
        for (let i=0;i<5;i++) {
            if (review>=1) {
                // Estrela completa
                elements.push(
                    <svg
                        key={`star${i}`}
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="gold"
                        width={size}
                        height={size}
                    >
                        <path
                            d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                    </svg>
                );
                review--;
            }
            else if (review<1 && review>=0.5) {
                elements.push(
                    // Meia estrela
                    <svg
                        key={`star${i}`}
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        width={size}
                        height={size}
                    >
                        <path
                            fill="lightgray"
                            d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
                        <defs>
                            <clipPath id="halfStarClip">
                                <rect x="0" y="0" width="12" height="24" />
                            </clipPath>
                        </defs>
                        <path
                            fill="gold"
                            d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
                            clipPath="url(#halfStarClip)" 
                        />
                    </svg>
                );
                review--;
            }
            else {
                elements.push(
                // Estrela vazia
                    <svg
                        key={`empty-${i}`}
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="lightgray"
                        width={size}
                        height={size}
                    >
                        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                    </svg>
                );
                review--;
            }
        };
        return elements;
    };

    return (
        <>
            {mountingStars(review)}
        </>
    );
}





// const elements = [];
//     for (let i=0;i<5;i++) {
//         if (review>=1) {
//             elements.push(
//                 <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="gold" stroke="gold" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" key={`star-${i}`}>
//                     <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
//                 </svg>
//             )
//             review--;
//         }
//         else if (review<1 && review>=0.5) {
//             elements.push(
//                 <svg data-v-140bd1a4="" width="16" height="16" viewBox="0 0 16 16" fill="none">
//                     <defs>
//                         <mask id="half-mask">
//                         <rect x="0" y="0" width="16" height="16" fill="white"/>
//                         <polygon points="7.77409,13.0692 8.09594,13.0691 12.4418,15.831 12.8956,15.5129 11.7321,10.2599 11.823,9.97332 15.7148,6.42641 15.5396,5.90589 10.4452,5.44682 10.1939,5.26019 8.21333,0.346723 7.65682,0.346774 5.67736,5.26015 5.42603,5.44684 0.334956,5.90589 0.159726,6.42632 4.04842,9.97332 4.13915,10.2598 2.97567,15.5128 3.42951,15.8309" fill="black"/>
//                         <rect x="0" y="0" width="8" height="16" fill="white"/>
//                         </mask>
//                     </defs>
//                     <path d="M7.77409 13.0692C7.87229 13.0067 7.99773 13.0067 8.09594 13.0691L12.4418 15.831C12.6672 15.9743 12.9534 15.7737 12.8956 15.5129L11.7321 10.2599C11.7089 10.155 11.7435 10.0457 11.823 9.97332L15.7148 6.42641C15.9077 6.25058 15.7996 5.92931 15.5396 5.90589L10.4452 5.44682C10.333 5.43672 10.236 5.36464 10.1939 5.26019L8.21333 0.346723C8.11236 0.0962406 7.75774 0.0962731 7.65682 0.346774L5.67736 5.26015C5.63527 5.36463 5.53821 5.43672 5.42603 5.44684L0.334956 5.90589C0.0750576 5.92932 -0.033071 6.25047 0.159726 6.42632L4.04842 9.97332C4.12777 10.0457 4.16237 10.155 4.13915 10.2598L2.97567 15.5128C2.91791 15.7736 3.2041 15.9742 3.42951 15.8309L7.77409 13.0692Z" fill="gold" mask="url(#half-mask)"/>
//                     <path d="M7.77409 13.0692C7.87229 13.0067 7.99773 13.0067 8.09594 13.0691L12.4418 15.831C12.6672 15.9743 12.9534 15.7737 12.8956 15.5129L11.7321 10.2599C11.7089 10.155 11.7435 10.0457 11.823 9.97332L15.7148 6.42641C15.9077 6.25058 15.7996 5.92931 15.5396 5.90589L10.4452 5.44682C10.333 5.43672 10.236 5.36464 10.1939 5.26019L8.21333 0.346723C8.11236 0.0962406 7.75774 0.0962731 7.65682 0.346774L5.67736 5.26015C5.63527 5.36463 5.53821 5.43672 5.42603 5.44684L0.334956 5.90589C0.0750576 5.92932 -0.033071 6.25047 0.159726 6.42632L4.04842 9.97332C4.12777 10.0457 4.16237 10.155 4.13915 10.2598L2.97567 15.5128C2.91791 15.7736 3.2041 15.9742 3.42951 15.8309L7.77409 13.0692Z" fill="none" stroke="gold" strokeWidth="1"/>
//                 </svg>
//             )
//             review--;
//         }
//         else {
//             elements.push(
//                 <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="gold" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" key={`star-${i}`}>
//                     <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
//                 </svg>
//             )
//             review--;
//         }
//     };
//     return elements;