import "./App.css";
import { DimoProvider } from "./DimoProvider";
import { LoginWithDimo } from "@dimo-network/login-with-dimo";
import { SomeComponent } from "./SomeDimo";
import { DimoAuthProvider } from "@dimo-network/login-with-dimo";

function App() {
  return (
    <DimoAuthProvider>
      <DimoProvider>
        <div>
          <h1>DIMO DEMO</h1>
          <div className="card">
            <LoginWithDimo
              mode="popup"
              onSuccess={() => {
                console.log("loggedin");
              }}
              onError={() => {
                console.error("Fail to log in");
              }}
            />
            <SomeComponent />
          </div>
        </div>
      </DimoProvider>
    </DimoAuthProvider>
  );
}

export default App;
