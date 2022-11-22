import "./App.css";
import IssueForm from "./components/IssueForm";
import IssuesList from "./components/IssuesList";

function App() {
  return (
    <>
      <div className="container mt-5 ">
        <div className="row">
          <div className="col-6">
            <IssuesList />
          </div>
          <div className="col-6">
            <IssueForm />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
