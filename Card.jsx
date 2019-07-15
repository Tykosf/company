import React from 'react';
import { Icon } from 'semantic-ui-react';

const Card = ({iconName, description, color, size , inv, title}) => (
    <div className='card'>
        <Icon name={iconName} size={size || 'huge'} color={color ? color : inv || false ? undefined : 'blue' } />
        {(title !== '' && title !== " ") && <span className='card-title' >{title}</span> }
        <p>
            {description}
        </p>
    </div>
);

export default Card;