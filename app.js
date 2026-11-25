

const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
                "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

function money(amount) {
  return GROUP.currency + amount.toLocaleString("en-US");
}

function monthLabel(year, monthIndex) {
  return MONTHS[monthIndex] + " " + year;
}

function render() {
  const members = GROUP.members.filter(function (m) { return m.trim() !== ""; });
  const pot = GROUP.contribution * members.length;

  const start = GROUP.startMonth.split("-");
  const startYear = parseInt(start[0], 10);
  const startMonth = parseInt(start[1], 10) - 1;

  const today = new Date();
  const monthsSinceStart =
    (today.getFullYear() - startYear) * 12 + (today.getMonth() - startMonth);

  document.getElementById("group-name").textContent = GROUP.name;
  document.title = GROUP.name;

  document.getElementById("stat-members").textContent = members.length;
  document.getElementById("stat-contribution").textContent = money(GROUP.contribution);
  document.getElementById("stat-pot").textContent = money(pot);
  document.getElementById("stat-cycle").textContent = members.length + " months";

  const now = document.getElementById("now");
  if (monthsSinceStart >= 0 && monthsSinceStart < members.length) {
    now.textContent = members[monthsSinceStart] + " receives " + money(pot) + " this month";
  } else if (monthsSinceStart < 0) {
    now.textContent = "First payout: " + monthLabel(startYear, startMonth);
  } else {
    now.textContent = "This cycle is complete. Time to start a new one!";
  }

  const list = document.getElementById("schedule");
  list.innerHTML = "";
  members.forEach(function (name, i) {
    const total = startMonth + i;
    const year = startYear + Math.floor(total / 12);
    const month = total % 12;

    let status = "Upcoming";
    let cls = "upcoming";
    if (i < monthsSinceStart) { status = "Paid out"; cls = "done"; }
    if (i === monthsSinceStart) { status = "This month"; cls = "current"; }

    const row = document.createElement("li");
    row.className = "row " + cls;

    const when = document.createElement("span");
    when.className = "when";
    when.textContent = monthLabel(year, month);

    const who = document.createElement("span");
    who.className = "who";
    who.textContent = name;

    const amount = document.createElement("span");
    amount.className = "amount";
    amount.textContent = money(pot);

    const badge = document.createElement("span");
    badge.className = "badge";
    badge.textContent = status;

    row.append(when, who, amount, badge);
    list.appendChild(row);
  });
}

render();
