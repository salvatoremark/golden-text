/**
 * WordPress dependencies
 */
import {
	AlignmentToolbar,
	BlockControls,
	InspectorControls,
	useBlockProps,
} from "@wordpress/block-editor";

import {
	PanelBody,
	RangeControl,
	SelectControl,
	TextControl,
} from "@wordpress/components";
import { __ } from "@wordpress/i18n";

/**
 * Internal dependencies
 */
import metadata from "./block.json";

function Edit({ attributes, setAttributes }) {
	const { boxwidth, fontsize, textalign, textinput } = attributes;
	const inlineStyles = {
		maxWidth: boxwidth + "vw",
		fontSize: fontsize + "vw",
		textAlign: textalign,
	};
	const blockProps = useBlockProps({
		className: "wrapper",
		style: inlineStyles,
	});

	return (
		<>
			<div {...blockProps}>
				<div className="bg">{__(textinput, metadata.texdomain)}</div>
				<div className="fg">{__(textinput, metadata.texdomain)}</div>
			</div>

			<BlockControls>
				<AlignmentToolbar
					value={textalign}
					onChange={(textalign) => setAttributes({ textalign })}
				/>
			</BlockControls>
			<InspectorControls>
				<PanelBody
					title={__("Control Panel", metadata.texdomain)}
					initialOpen={true}
				>
					<TextControl
						label={__("Text to Slice")}
						value={textinput}
						onChange={(textinput) => setAttributes({ textinput })}
					/>
					<RangeControl
						label="Font Size"
						value={fontsize}
						onChange={(fontsize) => setAttributes({ fontsize })}
						min={3}
						max={15}
					/>
					<RangeControl
						label="Box Width"
						value={boxwidth}
						onChange={(boxwidth) => setAttributes({ boxwidth })}
						min={3}
						max={100}
					/>
				</PanelBody>
			</InspectorControls>
		</>
	);
}
export default Edit;
