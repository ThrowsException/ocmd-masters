export const buildTable = (collection) => {
  return collection.docs.map((doc) => {
    const data = doc.data();

    const tr = document.createElement("tr");
    const name = document.createElement("td");

    const name_a = document.createElement("a");
    name_a.href = `player.html?player=${data.uid}`;
    name_a.textContent = data.name;
    name.appendChild(name_a);

    console.log(data.name);

    const starting = document.createElement("td");
    starting.textContent = data.starting;
    starting.classList.add("under");

    let net = data.starting;
    let gross = 0;
    //Baywood
    const baywood_score = document.createElement("td");
    baywood_score.textContent = data.baywood.score;
    const baywood_net = document.createElement("td");

    net = net - (data.baywood.score - 72);
    baywood_net.textContent = net;
    baywood_net.classList.add("under");

    const baywood_gross = document.createElement("td");
    gross += data.baywood.score - 72;
    baywood_gross.textContent = gross;

    //River Run
    const river_run_score = document.createElement("td");
    river_run_score.textContent = data.river_run.score;

    const river_run_net = document.createElement("td");

    net = net - (data.river_run.score - 71);
    river_run_net.textContent = net;
    river_run_net.classList.add("under");

    const river_run_gross = document.createElement("td");
    gross += data.river_run.score - 71;
    river_run_gross.textContent = gross;

    //Man O War
    const manowar_score = document.createElement("td");
    manowar_score.textContent = data.manowar.score;

    const manowar_net = document.createElement("td");

    net = net - (data.manowar.score - 72);
    manowar_net.textContent = net;
    manowar_net.classList.add("under");

    const manowar_gross = document.createElement("td");
    gross += data.manowar.score - 72;
    manowar_gross.textContent = gross;

    tr.appendChild(name);
    tr.appendChild(starting);

    tr.appendChild(baywood_score);
    tr.appendChild(baywood_net);
    tr.appendChild(baywood_gross);

    tr.appendChild(river_run_score);
    tr.appendChild(river_run_net);
    tr.appendChild(river_run_gross);

    tr.appendChild(manowar_score);
    tr.appendChild(manowar_net);
    tr.appendChild(manowar_gross);
    return tr;
  });
};
