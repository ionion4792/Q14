const getGithubData = async () => {
  const username = `unipartdigital`;
  const endpoint = `https://api.github.com/users/${username}`;

  const response = await fetch(endpoint);
  const data = await response.json();

  const table = document.createElement("table");

  tr = document.createElement("tr");

  th = document.createElement("th");
  th.appendChild(document.createTextNode("Key"));
  tr.appendChild(th);

  th = document.createElement("th");
  th.appendChild(document.createTextNode("Value"));
  tr.appendChild(th);

  table.appendChild(tr);

  for (const [key, value] of Object.entries(data)) {
    tr = document.createElement("tr");

    td = document.createElement("td");
    td.appendChild(document.createTextNode(key));
    tr.appendChild(td);

    td = document.createElement("td");
    td.appendChild(document.createTextNode(value));
    tr.appendChild(td);

    table.appendChild(tr);
  }

  document.body.appendChild(table);
};

const main = async () => {
  try {
    await getGithubData();
  } catch (error) {
    document.body.innerHTML = `<h4 style="color:red">
    ${JSON.stringify(error.message, null, 2)}</h4>`;
  }
};

main();
