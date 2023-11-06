import { useDataContext } from "../../Context/DataContext";

const Account = () => {
  const { userData } = useDataContext();
  return (
    <div>
      <h1>Account</h1>
      <h2> {userData?.userName}</h2>
   
    </div>
  );
};

export default Account;
