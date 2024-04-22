import AppBar from "./ui/AppBar";
import Balance from "./ui/Balance";
import Users from "./ui/Users";

export default function Dashboard() {
  return (
    <div>
      <AppBar />
      <div className="m-8">
        <Balance value={"10,000"} />
        <Users />
      </div>
    </div>
  );
}
