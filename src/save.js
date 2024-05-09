/**
 * WordPress dependencies
 */
import { __ } from "@wordpress/i18n";
import { useBlockProps } from "@wordpress/block-editor";

/**
 * Internal dependencies
 */
import metadata from "./block.json";

export default function Save({ attributes }) {
	const { boxwidth, fontsize, textalign } = attributes;
	const inlineStyles = {
		maxWidth: boxwidth + "vw",
		fontSize: fontsize + "vw",
		textAlign: textalign,
	};
	const blockProps = useBlockProps.save({
		className: "wrapper",
		style: inlineStyles,
	});

	return (
		<>
			<div {...blockProps}>
				<div className="bg">{__(textinput, metadata.texdomain)}</div>
				<div className="fg">{__(textinput, metadata.texdomain)}</div>
			</div>
		</>
	);
}
