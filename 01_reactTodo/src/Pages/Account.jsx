import { AccountCreate } from "../Logic/Account/AccountCreate";
import { AccountView } from "../Logic/Account/AccountView";

const Account = ({ newUser }) => {
  return (
    <div className="Container">
      {newUser && <AccountCreate />}
      {!newUser && <AccountView />}
    </div>
  );
};

export { Account };
