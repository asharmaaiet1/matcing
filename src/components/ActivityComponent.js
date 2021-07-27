import jQuery from 'jquery';
import { useEffect, useState } from 'react';
import './Activity.scss';
import LinesContainer from '../containers/LinesContainer';

const Activity = (props) => {

	const [draggableOriginal, setDraggableOriginal] = useState(null);

	const {
		questionText,
		questionSet,
		setDrop,
		setLine,
		validateResult,
		resetActivity,
		buttonState,
		answersSubmitted,
		finalResult
	} = props;
	
	const resetAll = () => {
		const allDroppables = jQuery(".droppable-circle");
		for(let i = 0; i<allDroppables.length; i+=1) {
			allDroppables[i].classList.remove('dropped-pink');
		}
		resetActivity();
	}

	// line x1 is fixed 128 and x2 is 415

	useEffect(() => {

		jQuery('.draggable-circle').draggable({
			containment: '.activity-container',
			helper: "clone",
			drag: (event, ui) => {
				setDraggableOriginal(ui.originalPosition)
				// let draggedItem = ui.helper[0].parentElement.firstChild;
			}
		});

		jQuery(".droppable-circle").droppable({
			tolerance: 'touch',
			drop: function (event, ui) {
				let droppedOn = this.getBoundingClientRect();
				this.classList.add('dropped-pink');
				let draggedItem = ui.helper[0].parentElement.firstChild;
				// console.log('droppedOn.data', this.nextSibling.data);
				setDrop({'question': draggedItem.data, 'answer': this.nextSibling.data});
				let lineCoordinates = {
					x1: draggableOriginal.left+26,
					y1: draggableOriginal.top+12,
					x2: 415,
					y2: droppedOn.top - 107,
				}
				setLine(lineCoordinates);
			}
		});
	})

	return (
		<div className="app-container">
			<h3>Match option(s) to corresponding option(s):</h3>
			<h3>{questionText}</h3>

			<div className="activity-container">
				<LinesContainer />
				<div className="column-one">
					<p>Column 1 Heading</p>
					<div className="options-container">
						<ul className="list">
							{
								questionSet.optionNames.map((value, index) => {
									return (
										<li key={index+1}>
											{value}
											<div className="draggable-circle" />
										</li>
									)
								})
							}
						</ul>
					</div>
				</div>

				<div className="column-two">
					<p>Column 2 Heading</p>
					<div className="options-container">
						<ul className="list">
							{
								questionSet.answers.map((value, index) => {
									return (
										<li key={index+1}>
											<div className="droppable-circle" id={`droppble-${index}`} />
											{value}
										</li>
									)
								})
							}
						</ul>
					</div>
				</div>
				{
					answersSubmitted ? (
						finalResult ? (
							<div className="result correct">Correct</div>
						) : (
							<div className="result incorrect">Correct</div>
						)
					) : null
				}
				<button className="button submit" disabled={!buttonState} onClick={validateResult}>Submit</button>
				<button className="button reset" disabled={!buttonState} onClick={resetAll}>Reset</button>
			</div>
		</div>
	);
}

export default Activity;
