import * as React from "react";
import "./TagSelector.css";

const TagSelector = () => {
	const v = JSON.parse(localStorage.getItem("tag"))||[];
	// const [tags, setTags] = React.useState([]);
	console.log(typeof(v), v, Object.values(v));
	const [tags, setTags] = React.useState(Object.values(v) || []);
	const removeTags = indexToRemove => {
		setTags(tags.filter((_, index) => index !== indexToRemove));
		localStorage.setItem("tag", JSON.stringify(tags.filter((_, index) => index !== indexToRemove)));
        console.log("tags", tags.filter((_, index) => index !== indexToRemove), "indexToRemove",indexToRemove);
	};

	const addTags = event => {
        let value = event.target.value;
        if (!value.trim()) return
        if (tags.includes(value.trim())){
            event.target.value = "";
            return;
        }
 		if ((event.target.value !== "")&& (!tags.includes(value.trim()))) {
			// setTags(tags.concat([event.target.value]));
            setTags([...tags, value.trim()])
			localStorage.setItem("tag", JSON.stringify([...tags, value.trim()]));
			event.target.value = "";
            console.log([...tags, value.trim()]);
		}
	};
	return (
		<div className="tags-input">
			<ul id="tags">
				{tags.map((tag, index) => (
					<li key={index} className="tag">
						<span className='tag-title'>{tag}</span>
						<span className='tag-close-icon'
							onClick={() => removeTags(index)}
						>
							x
						</span>
					</li>
				))}
			</ul>
			<input
				type="text"
				onKeyUp={event => event.key === "Enter" ? addTags(event) : null}
				placeholder="Press enter to add tags"
			/>
		</div>
	);
};

export default TagSelector;