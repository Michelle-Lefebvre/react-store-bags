/* eslint-disable no-unused-vars */
import { Box, Pagination } from "@mui/material";
import { useEffect, useState } from "react";
import service from "../../services/paginationService";

// eslint-disable-next-line no-unused-vars
const pageSize = 3;

export default function AppPagination({ setProducts }) {
  const [pagination, setPagination] = useState({
    count: 0,
    from: 0,
    to: pageSize,
  });

  useEffect(() => {
    service
      .getData({ from: pagination.from, to: pagination.to })
      .then((response) => {
        console.log(response);
        setPagination({ ...pagination, count: response.count });
        setProducts(response.data);
      });
  }, [pagination.from, pagination.to]);

  const handlePageChange = (event, page) => {
    const from = (page - 1) * pageSize;
    const to = (page - 1) * pageSize + pageSize;
    setPagination({ ...pagination, from: from, to: to });
  };

  return (
    <Box
      justifyContent={"center"}
      alignItems="center"
      display={"flex"}
      sx={{ margin: "20px 0px" }}
    >
      <Pagination
        count={Math.ceil(pagination.count / pageSize)}
        onChange={handlePageChange}
      />
    </Box>
  );
}
