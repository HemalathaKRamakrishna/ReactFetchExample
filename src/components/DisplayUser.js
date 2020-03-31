import React from "react";

export function DisplayUser(props) {
  return (
    <div>
      <tr>
        <td style={columnStyle}>{props.userObject.name}</td>
        <td style={columnStyle}>{props.userObject.email}</td>
        <td style={columnStyle}>{props.userObject.website}</td>
      </tr>
    </div>
  );
}

export const columnStyle = {
  fontSize: "20px",
  width: "100",
  border: "1px solid black",
  textAlign: "center",
  height: "100"
};
