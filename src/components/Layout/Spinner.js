import React from 'react';
import spinner from './spinner.gif';


const Spinner = () => {
    return (
        <div style={ styles.spinnerContainer }>
        	<img src={ spinner }
        		alt="Loding..."
        		style={ styles.imgStyle }
        	/>
        </div>
    );
};
const styles = {
		imgStyles: {
			width: '200', 
			margin: '40 auto', 
			display: 'block'
		},
        spinnerContainer: {
            display: 'flex',
            justifyContent: 'center',
            alignItem: 'center'
        }
}
export default Spinner;
