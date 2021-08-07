import { Icon } from "@iconify/react";
import locationIcon from "@iconify/icons-mdi/fire-alert";

const Header = () => {
  return (
    <header className="header">
      <h1>
        <Icon icon={locationIcon} className="logo-icon"></Icon>
        WildFire Tracker (Developed by Gyananshu Kashyap)
      </h1>
    </header>
  );
};

export default Header;
