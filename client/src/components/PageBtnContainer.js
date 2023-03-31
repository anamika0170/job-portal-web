import { useAppContext } from "../context/appContext";
import "../assets/styles/pageContainer.css";
import { Pagination } from "@mui/material";

const PageBtnContainer = () => {
  const { numOfPages, page, changePage } = useAppContext();
  console.log("numOfPages",numOfPages,"changePage",changePage,"page",page)
  
  const itemsPerPage = numOfPages;
  const totalItems = 100;
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const handlePageChange = (event, value) => {
   changePage(value);
  };
  return (
    <div>
      <Pagination
        count={totalPages}
        page={page}
        onChange={handlePageChange}
        color="primary" 
        sx={{marginTop:'25px'}}
      />
    </div>
  );
};

export default PageBtnContainer;
