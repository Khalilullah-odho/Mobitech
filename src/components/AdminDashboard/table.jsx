import React from "react";
import { Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import DeleteIcon from "@material-ui/icons/Delete";
export const DataTable = ({ data, onDelete }) => {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Delete</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => {
          return (
            <tr>
              <td>{index + 1}</td>
              <td>
                <Link to={`/mobile-form/${item._id}`}>{item.name}</Link>
              </td>
              <td>
                <button
                  className="btn btn-danger"
                  onClick={() => onDelete(item)}
                >
                  <DeleteIcon />
                </button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
};
