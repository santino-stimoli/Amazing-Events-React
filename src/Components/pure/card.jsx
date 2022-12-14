import React from 'react';
import { Link } from 'react-router-dom';
import { moneyFormater } from '../../service/moneyFormat';

const Card = ({ event, addFavorite, removeFavorite, backOfDetails }) => {

    const domain = '/Amazing-Events-React'

    return (
        <div className="max-w-sm bg-white rounded-lg borde shadow-md w-60 bg-contain my-5 mx-2">
            <div className='w-full h-40 rounded-t-lg' style={{ backgroundImage: `url(${event.image})` }} />
            <div className="p-4">
                <h5 className="mb-2 text-2xl font-bold color-personalizado text-left tracking-tighter">{event.name}</h5>
                <p className='text-left -mt-3 opacity-70 text-sm'>{event.category}</p>
                <div className='flex justify-between mb-4'>
                    <p>{event.date}</p>
                    {event.estimate ? <p className='font-bold bg-personalizado text-white px-1 rounded-md'>{moneyFormater(event.price)}</p> : undefined}
                </div>
                <div className='flex justify-around'>
                    <Link onClick={backOfDetails} to={domain + `/events/${event._id}`} className="inline-flex items-center links hover:underline">
                        View more
                        <svg className="ml-2 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z"></path>
                            <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z"></path>
                        </svg>
                    </Link>
                    {/* <p onClick={() => addFavorite(event)}>{"<3"}</p>
                    <p onClick={() => removeFavorite(event)}>{"</3"}</p> */}
                </div>
            </div>
        </div>
    );
}

export default Card;
