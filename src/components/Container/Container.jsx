import PropTypes from "prop-types";
import { Title, Containers } from "./Container.styles";

export default function Container ({ title, children }) {
    return (
        <Containers>
            <Title>{title}</Title>
            {children}
      </Containers>
    )
};
Container.propTypes = {
    title: PropTypes.string,
};