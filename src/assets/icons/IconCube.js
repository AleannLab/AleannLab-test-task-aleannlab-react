import React from "react";
import PropTypes from "prop-types";
import StyledIcon from "./StyledIcon";
function IconCube({ title, titleId, ...props }) {
  return (
    <StyledIcon
      width={16}
      height={16}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.389.98L15 4.42v6.879l-6.611-3.44V.98zM9.55 7.148l4.29 2.229V5.138L9.55 2.9v4.248zm-1.808.678l-1.119.55v-6.81L7.743.98v6.846zm-.132.596v.019H7.58l.032-.019zm-5.446 2.279L1 11.299V9.176l1.165-.598v2.123zm1.897-.951l-1.18.57V6.511l1.18-.57V9.75zm1.86-1.001l-1.15.594V4.001l1.15-.576V8.75zm-.194.7V9.44l-.032.02h.01l-4.317 2.177 6.708 3.383 6.709-3.383-6.709-3.383-2.369 1.195zm6.455 2.193L8.08 13.71l-4.103-2.07 4.103-2.068 4.102 2.069z"
        fill="currentColor"
      />
    </StyledIcon>
  );
}

IconCube.propTypes = {
  title: PropTypes.string,
  titleId: PropTypes.string,
};
IconCube.defaultProps = {
  title: null,
  titleId: null,
};
const MemoIconCube = React.memo(IconCube);
export default MemoIconCube;
