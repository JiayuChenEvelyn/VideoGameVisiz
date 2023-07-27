import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableFooter from "@mui/material/TableFooter";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import IconButton from "@mui/material/IconButton";
import FirstPageIcon from "@mui/icons-material/FirstPage";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import LastPageIcon from "@mui/icons-material/LastPage";
import { tokens } from "../theme";
import { useNavigate } from "react-router-dom";

function TablePaginationActions(props) {
  const theme = useTheme();
  const { count, page, rowsPerPage, onPageChange } = props;


  const handleFirstPageButtonClick = (event) => {
    onPageChange(event, 0);
  };

  const handleBackButtonClick = (event) => {
    onPageChange(event, page - 1);
  };

  const handleNextButtonClick = (event) => {
    onPageChange(event, page + 1);
  };

  const handleLastPageButtonClick = (event) => {
    onPageChange(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
  };

  return (
    <Box sx={{ flexShrink: 0, ml: 2.5 }}>
      <IconButton
        onClick={handleFirstPageButtonClick}
        disabled={page === 0}
        aria-label="first page"
      >
        {theme.direction === "rtl" ? <LastPageIcon /> : <FirstPageIcon />}
      </IconButton>
      <IconButton
        onClick={handleBackButtonClick}
        disabled={page === 0}
        aria-label="previous page"
      >
        {theme.direction === "rtl" ? (
          <KeyboardArrowRight />
        ) : (
          <KeyboardArrowLeft />
        )}
      </IconButton>
      <IconButton
        onClick={handleNextButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="next page"
      >
        {theme.direction === "rtl" ? (
          <KeyboardArrowLeft />
        ) : (
          <KeyboardArrowRight />
        )}
      </IconButton>
      <IconButton
        onClick={handleLastPageButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="last page"
      >
        {theme.direction === "rtl" ? <FirstPageIcon /> : <LastPageIcon />}
      </IconButton>
    </Box>
  );
}

function createData(name, calories, fat) {
  return { name, calories, fat };
}


const columns = [
  { id: "name", label: "Name", minWidth: 120 },
  { id: "released_date", label: "Released date", minWidth: 100, align: "right" },
  {
    id: "url",
    label: "url",
    minWidth: 40,
    align: "right",
    format: (value) => value.toLocaleString("en-US"),
  },
  { id: "developers", label: "Developers", minWidth: 40, align: "right" },
  { id: "publisher", label: "Publisher", minWidth: 40, align: "right" },
  { id: "price", label: "Price in RMB", minWidth: 40, align: "right" },
  { id: "all_reviews", label: "All reviews", minWidth: 40, align: "right" },
  { id: "positice_reviews", label: "Positice reviews", minWidth: 40, align: "right" },
  { id: "review_score", label: "Review Score", minWidth: 40, align: "right" },
  { id: "supported_languages", label: "Supported Languages", minWidth: 40, align: "right" },
  { id: "tag_group", label: "Tag Group", minWidth: 40, align: "right" },
  { id: "description", label: "Description", minWidth: 200, align: "right" },

];

export default function SteamTable({ data, click = true}) {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  console.log("data",data);
  const rows = data.sort((a, b) => (a.review_score < b.review_score ? 1 : -1));


  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const navigate = useNavigate();
  return (
    <TableContainer component={Paper}>
      <Table
        sx={{ minWidth: 500, backgroundColor: colors.primary[400] }}
        aria-label="custom pagination table"
      >
        <TableHead style={{ backgroundColor: colors.blueAccent[700] }}>
          <TableRow>
            {columns.map((column) => (
              <TableCell
                key={column.id}
                align={column.align}
                style={{
                  minWidth: column.minWidth,
                  fontSize: "12px",
                  fontWeight: "800",
                }}
              >
                {column.label}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {(rowsPerPage > 0
            ? rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            : rows
          ).map((row) => (
            <TableRow
              hover={true}
              key={row.url}
              onClick={()=>{}}
              style={{ cursor: "pointer" }}
            >
              <TableCell style={{ width: 120 }} component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell style={{ width: 120 }} align="right">
                {row.released_date}
              </TableCell>
              <TableCell style={{ width: 120 }} align="right">
                {row.url}
              </TableCell>
              <TableCell style={{ width: 120 }} align="right">
                {row.developers}
              </TableCell>
              <TableCell style={{ width: 120 }} align="right">
                {row.Publisher}
              </TableCell>
              <TableCell style={{ width: 120 }} align="right">
                {row.price}
              </TableCell>
              <TableCell style={{ width: 120 }} align="right">
                {row.all_reviews}
              </TableCell>
              <TableCell style={{ width: 120 }} align="right">
                {row.positice_reviews}
              </TableCell>
              <TableCell style={{ width: 120 }} align="right">
                {row.review_score}
              </TableCell>
              <TableCell style={{ width: 120 }} align="right">
                {row.supported_languages}
              </TableCell>
              <TableCell style={{ width: 120 }} align="center">
                {row.TagsGroup}
              </TableCell>
              <TableCell style={{ width: 120 }} align="center">
                {row.description}
              </TableCell>
            </TableRow>
          ))}
          {emptyRows > 0 && (
            <TableRow style={{ height: 53 * emptyRows }}>
              <TableCell colSpan={6} />
            </TableRow>
          )}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TablePagination
              rowsPerPageOptions={[5, 10, 25, { label: "All", value: -1 }]}
              colSpan={6}
              count={rows.length}
              rowsPerPage={rowsPerPage}
              page={page}
              SelectProps={{
                inputProps: {
                  "aria-label": "rows per page",
                },
                native: true,
              }}
              sx={{
                ".MuiTablePagination-displayedRows": {
                  color: colors.grey[100],
                },
                ".MuiTablePagination-selectLabel": {
                  color: colors.grey[100],
                },
                ".MuiTablePagination-select": {
                  color: colors.grey[100],
                },
              }}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
              ActionsComponent={TablePaginationActions}
            />
          </TableRow>
        </TableFooter>
      </Table>
    </TableContainer>
  );
}
