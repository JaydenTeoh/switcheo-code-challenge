import { ConnectButton } from "web3uikit";
export default function Header() {
  return (
    <nav className="p-5 w-full flex flex-row justify-between items-center">
      <div className="flex flex-row items-center">
        <img
          src="https://media-exp1.licdn.com/dms/image/C4D0BAQFMWlAqeC73yQ/company-logo_200_200/0/1591703473789?e=2147483647&v=beta&t=w_F95Yu5o7RAU8deLrLpT1kE2YcGyqOwHa3tfXo2_UM"
          alt="Switcheo Logo"
          width="60"
          height="60"
          className="rounded-md m-2"
        />
        <h1 className="font-bold text-3xl text-white ml-2 portrait:hidden">
          ETH Transfer
        </h1>
      </div>
      <div>
        <ConnectButton moralisAuth={false} />
      </div>
    </nav>
  );
}
