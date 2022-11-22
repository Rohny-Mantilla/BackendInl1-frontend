import { useEffect, useState } from "react";
import moment from "moment";

const IssuesList = () => {
  const [issues, setIssues] = useState([]);

  useEffect(() => {
    const fetchIssues = async () => {
      const res = await fetch("https://localhost:7171/api/issues");
      setIssues(await res.json());
    };
    fetchIssues();
  }, []);

  return (
    <>
      <h1>Issues List</h1>
      <div>
        {issues.map((issue) => (
          <div key={issue.id} className="card mb-2">
            <div className="card-header">
              <small className="d-flex justify-content-between">
                <div>
                  {issue.customer.firstName +
                    " " +
                    issue.customer.lastName}
                </div>
                <div>
                  {moment(issue.created).startOf("day").fromNow()}
                </div>
              </small>
            </div>
            <div className="card-body">
              <h3 className="card-title">{issue.subject}</h3>
              <p className="card-text">{issue.description}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default IssuesList;
