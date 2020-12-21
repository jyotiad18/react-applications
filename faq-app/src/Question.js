import React, { useState } from 'react'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';

function Question({ title, info }) {
	const [isExpand, setIsExpand] = useState(false);
	const onClickHandler = () => {
		setIsExpand(!isExpand);
	}
	return (
	<div className="question">
			<div className="question__header">
				<h4>{title}</h4>
				<div className="question__icons">
					{isExpand ? <ExpandLessIcon className="question_icon" onClick={onClickHandler}/> : <ExpandMoreIcon className="question_icon" onClick={onClickHandler} />}					
				</div>				
			</div>	
			{isExpand && <p>{info}</p>}
	</div>
	)
}

export default Question;
