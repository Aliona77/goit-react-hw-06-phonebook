
import { Title, Containers } from "./Container.styles";

export default function Container ({ title, children }) {
    return (
        <Containers>
            <Title>{title}</Title>
            {children}
      </Containers>
    )
};
