import React from 'react';
import '../Styling/imageCard.css'
import LikesIcon from '../Assets/likesIcon.png'
import MagnifyingIcon from '../Assets/magnifyingIcon.png'
import ModalCard from './modalCard';
import ModalForm from './modalForm';

const ImageCard = ({images}) => {
    
  return (
    <div className='imageCard'>
        <ModalForm />
      {
        images && images.map(img => (
          <div className='singleCard' key={img.id} >
                <div className='cardHeader'>
                    <div>
                        <img className='imageUrl' src={`${img.user.profile_image}.webp`} alt=''/>
                    </div>
                    <div className='titleBlock'>
                        <div>
                            <span className='userName'>{img.user.username}</span>
                        </div>
                        <div>    
                            <span className='postedTime'>Posted: {img.updated_at}</span>
                        </div>
                    </div>
                </div>
                <div className='cardBody'>
                    <div className='cardImageDiscription'>
                        <span>{img.description}</span>
                    </div>
                    <div>
                        <img className='imageCar' src={`${img.url}.jpg`} alt=''/>
                    </div>
    
                </div>
                <div className='cardBottomBar'>
                    <div className='likesSection'>
                        <img className='likesIcon' src={LikesIcon} alt='likes'/>
                        <span className='likesText'>{img.likes}</span>
                    </div>
                    <div className='modalSection'>
                        <div>
                            <img className='magIcon' src={MagnifyingIcon} alt='' />
                        </div>
                        <div>
                            <ModalCard carImage={`${img.url}.jpg`} message={img.description} userName={img.user.username} profileImage={`${img.user.profile_image}.webp`} />
                        </div>
                    </div>
                </div>
            </div>
        ))
      }
    </div>
  );
}

export default ImageCard;