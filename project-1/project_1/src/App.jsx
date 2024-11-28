import { useCallback, useState } from "react";
import "./App.css";
import { stringify } from "postcss";

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");
  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numberAllowed) str += "013456789";
    if (charAllowed) str += "@#$%^&*()_+?/{}[]~";
    for (let i = 1; i <= Array.length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass = str.charAt(char);
    }
    setPassword(pass);
  }, [length, numberAllowed, charAllowed, setPassword]);
  return (
    <>
      <div className="ml-[22rem] w-[50%] rounded-lg px-12 p-4 my-8 text-orange-500 text-center font-bold text-[1rem] bg-gray-800">
        password generator
        <div className="flex shadow rounded-lg overflow-hidden h-[2rem] bg-purple-600">
          <input
            type="text"
            value={password}
            className="outline-none w-full py-1 px3"
            placeholder="password"
            readOnly
          />{" "}
          <button className="bg-blue-600 text-white p-1">Copy</button>
        </div>
      </div>
    </>
  );
}

export default App;
