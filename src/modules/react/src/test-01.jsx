import { createElement, Fragment } from 'react';

export const Test01 = (users) => {
  return (
    <Fragment>
      <h2>HTML Table</h2>
      <table>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Email</th>
        </tr>
        {users.map((user) =>
          <tr key={user.id}>
            <td>{user.id}</td>
            <td>{user.name}</td>
            <td>{user.email}</td>
          </tr>
        )}
      </table>
    </Fragment>
  );
};