'use strict';

import React from 'react';
import _ from "underscore";
import {LETTER, SYMBOL, CONTROL, SPACEBAR} from './../constants/KeyType';

export default React.createClass({
	mixins: [],
	getDefaultProps: getDefaultProps,
	render: function () {
		var {
			suggestedKeys,
			defaultKey,
			shiftKey,
			size,
			type,
			side
		} = this.props;

		let isSpacebar = (type === SPACEBAR && suggestedKeys[0] === " ");
		let isSuggested = _.some([defaultKey, shiftKey], (value) => { return _.contains(suggestedKeys, value)	})
		let suggest = (isSpacebar || isSuggested) ? "suggest" : "";

		let parent = ["key", size, type, side, suggest].join(" ");

		var off = defaultKey;
		var on;
		if(type === SYMBOL){
			off = <span className="off">{defaultKey}</span>;
			on = <span className="on">{shiftKey}</span>;
		}

		return (<div className={parent}>
			{off}{on}
		</div>)
	}
});

function getDefaultProps(){
	return {
		suggestedKeys: [],
		defaultKey: "",
		shiftKey: "",
		size: "one",
		type: "symbol",
		side: ""
	}
}
