import React, { useState } from 'react';
import './feedbacksTable.css';
import {BsFillPencilFill} from 'react-icons/bs';
import {ImBin2} from 'react-icons/im';
import { Feedbacks } from '../../utils/dummyFeedbacks';

const FeedbacksTable = () => {
    const [feedid, setFeedId] = useState(null);
    // const [isFullText, setFeedId] = useState(false);

    const handleShowFullText = (itemid)=>{
        if(itemid === feedid){
            setFeedId(null)
        }
        else{
            setFeedId(itemid)
        }
    }
  return (
    <div className='feedbacksTable' >
        <div className="top">
            <div className="titles">
                <span className="title">Feebacks</span>
            </div>
            <div className="lefts">
                <span className="unames">Email</span>
                <span className="unames">Review</span>
            </div>
            {
                Feedbacks &&
                Feedbacks.map(feed=>(

                    <div key={feed.id} onClick={()=>handleShowFullText(feed.id)} className="details">
                        <div className="left">
                            <span className="uname">{feed.posterEmail}</span>
                            <span className="una">{feedid === feed.id ? feed.content : feed.content.substring(0, 45)}{(feed.content.length > 45) && (feed.id !== feedid) ? '...':''}</span>
                            <span className="unam">{feed.date}</span>
                        </div>
                        <div className="right">
                            <ImBin2 className='delete' />
                        </div>
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default FeedbacksTable