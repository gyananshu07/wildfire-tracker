import { Icon } from "@iconify/react";
import locationIcon from "@iconify/icons-mdi/fire-alert";

const LoactionMarker = ({ lat, lng, onClick }) => {
  return (
    <div className="location-marker" onClick={onClick}>
      <Icon icon={locationIcon} className="location-icon"></Icon>
    </div>
  );
};

export default LoactionMarker;
