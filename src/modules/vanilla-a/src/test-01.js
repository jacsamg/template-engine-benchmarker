function UserRow(user) {
  return /*html*/ `
    <tr>
      <td>${user.id}</td>
      <td>${user.name}</td>
      <td>${user.email}</td>
    </tr>
  `;
}

export function Test01(users) {
  return  /*html*/ `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>SSR Benchmarker</title>
    </head>
    <body>
      <h2>HTML Table</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          ${users.map((user) => UserRow(user)).join('')}
        </tbody>
      </table> 
    </body>
    </html>
  `;
}