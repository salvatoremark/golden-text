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
  ToolbarButton,
  ToolbarDropdownMenu,
  ToolbarGroup,
} from "@wordpress/components";
import { __ } from "@wordpress/i18n";

/**
 * Internal dependencies
 */
import metadata from "./block.json";

function Edit(props) {
  const { attributes, setAttributes } = props;
  const inlineStyles = {
    maxWidth: attributes.boxwidth + "vw",
    fontSize: attributes.fontsize + "vw",
    textAlign: attributes.textalign,
  };
  const blockProps = useBlockProps({
    className: "wrapper",
    style: inlineStyles,
  });

  return (
    <>
      <div {...blockProps}>
        <div className='bg'>{__(attributes.textinput, metadata.texdomain)}</div>
        <div className='fg'>{__(attributes.textinput, metadata.texdomain)}</div>
      </div>

      <BlockControls>
        <AlignmentToolbar
          value={attributes.textalign}
          onChange={(textalign) => setAttributes({ textalign })}
        />
      </BlockControls>
      <InspectorControls>
        <PanelBody
          title={__("Control Panel", metadata.texdomain)}
          initialOpen={true}>
          <TextControl
            label={__("Text to Slice")}
            value={attributes.textinput}
            onChange={(textinput) => setAttributes({ textinput })}
          />
          <RangeControl
            label='Font Size'
            value={attributes.fontsize}
            onChange={(fontsize) => setAttributes({ fontsize })}
            min={3}
            max={15}
          />
          <RangeControl
            label='Box Width'
            value={attributes.boxwidth}
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
