
import { Table } from "react-bootstrap";
import CustomFetch from "./CustomFetch";
import "./TestResult.css";
import { useState } from "react";

const FetchData:React.FC = () =>{

const {data,loading,error} = CustomFetch('https://jsonplaceholder.typicode.com/posts');

const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  
  const totalPages = Math.ceil(data.length / itemsPerPage);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentItems = data.slice(startIndex, startIndex + itemsPerPage);

  const goToNext = () => {
    setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  };

  const goToPrev = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 1));
  };

 return (
  <>
    {loading ? (
      <p>...Loading</p>
    ) : (
      <>
      <Table>
        <tr>
          <th>User Id</th>
          <th>Title</th>
          <th>Body</th>
        </tr>
        {currentItems && currentItems.map((indivData)=>(
          <tr>
            <td>{indivData.id}</td>
            <td>{indivData.title}</td>
            <td>{indivData.body}</td>
          </tr>
        ))}
      </Table>
    
    <div style={{ marginTop: "1rem" }}>
        <button onClick={goToPrev} disabled={currentPage === 1}>
          Prev
        </button>
        <span style={{ margin: "0 1rem" }}>
          Page {currentPage} of {totalPages}
        </span>
        <button onClick={goToNext} disabled={currentPage === totalPages}>
          Next
        </button>
      </div>
    </>
    )}
  </>
);
}

export default FetchData;