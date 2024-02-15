window.onload = function () {
  document.getElementById("agroup").style.display = "";
  document.getElementById("bgroup").style.display = "none";
  document.getElementById("cgroup").style.display = "none";
  const group = ["agroup", "bgroup", "cgroup"];
  const newnnisM = {
    agroup: [
      "이태규",
      "정진호",
      "김정래",
      "한용진",
      "김승원",
      "김세호",
      "김성구",
      "황주현",
      "전룡재",
      "송영주",
    ],
    bgroup: [
      "조민재",
      "양인석",
      "장현수",
      "장승현",
      "신수현",
      "정영호",
      "김준수",
      "황태훈",
      "김용희",
      "고범석",
    ],
    cgroup: [
      "박지해",
      "배민지",
      "남아름",
      "김예슬",
      "고경년",
      "심정은",
      "김예진",
      "송희정",
      "정진솔",
      "김나형",
    ],
  };
  // groupType = "a";
  // selectedGroup = "agroup";
  let newMember = "";
  for (let g of group) {
    newMember = "";
    for (let i = 0; i < newnnisM[g].length; i++) {
      newMemberName = newnnisM[g][i];
      newMember += '<li class="form-check">';
      newMember +=
        '<input type="checkbox" class="form-check-input" name="' +
        g.substr(0, 1) +
        '" id="' +
        g.substr(0, 1) +
        i +
        '" value="' +
        newMemberName +
        '">';
      newMember +=
        '<label class="form-check-label" for="' +
        g.substr(0, 1) +
        i +
        '">' +
        newMemberName +
        "</label>";
      newMember += "</li>";
    }
    document.getElementById(g).innerHTML += newMember;
  }
};

function organize() {
  const selectedGroup = document.getElementById("selectBox").value;
  let checkdElement = [];
  if (selectedGroup === "agroup") {
    checkdElement = document.querySelectorAll('input[name="a"]:checked');
  } else if (selectedGroup === "bgroup") {
    checkdElement = document.querySelectorAll('input[name="b"]:checked');
  } else if (selectedGroup === "cgroup") {
    checkdElement = document.querySelectorAll('input[name="c"]:checked');
  }

  //4명이상인 경우 매칭 가능
  if (checkdElement.length < 4) {
    alert("4명 이상 선택하십시오.");
    return;
  }

  let participant = [];
  for (let i = 0; i < checkdElement.length; i++) {
    participant.push(checkdElement[i].value);
  }
  const playerMatches = new Map(participant.map((player) => [player, 0]));
  console.log("participatin", participant);
  let matchCounter = [];
  for (let p of participant) {
    matchCounter.push({ name: p, count: 0 });
  }

  function allPlayersPlayedEnough(array) {
    return array.every((item) => item.count >= 3);
  }

  const duoCheck = new Set();
  const matches = [];
  while (!allPlayersPlayedEnough(matchCounter)) {
    matchCounter.sort((a, b) => a.count - b.count);
    const minPlayer = matchCounter.filter(
      (arr) => arr.count === matchCounter[0].count
    );
    const notMinPlayer = matchCounter.filter(
      (arr) => arr.count !== matchCounter[0].count
    );
    for (let i = 0; i < 5; i++) {
      minPlayer.sort(() => Math.random() - 0.5);
    }
    matchCounter = minPlayer.concat(notMinPlayer);
    console.log(matchCounter);
    let match = [];
    while (match.length !== 4) {
      loop: for (let i = 0; i < matchCounter.length; i++) {
        for (let j = i + 1; j < matchCounter.length; j++) {
          const duo = [matchCounter[i].name, matchCounter[j].name].sort();
          if (
            !duoCheck.has(JSON.stringify(duo)) &&
            !match.includes(matchCounter[i].name) &&
            !match.includes(matchCounter[j].name)
          ) {
            duoCheck.add(JSON.stringify(duo));
            match.push(matchCounter[i].name);
            matchCounter[i].count += 1;
            match.push(matchCounter[j].name);
            matchCounter[j].count += 1;
            if (match.length === 4) break loop;
          }
        }
      }
    }

    matches.push(match);
  }
  for (let i = 0; i < 5; i++) {
    matches.sort(() => Math.random() - 0.5);
  }
  console.log("Generated Matches:", matches);
  console.log(matchCounter);
  let result =
    "<div class='table' id='" +
    selectedGroup +
    "Match'>" +
    "<div class='thead'>" +
    "<p>경기</p>" +
    "<p>대진팀</p>" +
    "</div><ul class='tbody'>";

  for (let i = 0; i < matches.length; i++) {
    result +=
      "<li><p>" +
      (i + 1) +
      "경기</p><div><p>" +
      (i % 2 == 0 ? matches[i][0] : matches[i][1]) +
      ", " +
      (i % 2 == 0 ? matches[i][1] : matches[i][0]) +
      "</p><span>:</span><p>" +
      (i % 2 == 0 ? matches[i][2] : matches[i][3]) +
      ", " +
      (i % 2 == 0 ? matches[i][3] : matches[i][2]) +
      "</p></div></li>";
  }
  result += "</div></div>";

  result += "<div class='listBox'><div class='thead'>" +
  "<p>경기횟수</p>" +
  "</div><ul class='countList'>";
  for (let member of matchCounter) {
    result += "<li>" + member.name + ": " + member.count;
  }
  result += "</ul></div>";

  if (selectedGroup === "agroup") {
    areaA.innerHTML = result;
  } else if (selectedGroup === "bgroup") {
    areaB.innerHTML = result;
  } else if (selectedGroup === "cgroup") {
    areaC.innerHTML = result;
  }
}

function changeGroup(e) {
  let val = e.value;
  if (val === "agroup") {
    document.getElementById("agroup").style.display = "";
    document.getElementById("bgroup").style.display = "none";
    document.getElementById("cgroup").style.display = "none";
    document.querySelector(".selectBox").style.color = "#00E4FF";
    document.querySelector(".gr_cl").style.color = "#00E4FF";

    document.getElementById("areaA").style.display = "inline-block";
    document.getElementById("areaB").style.display = "none";
    document.getElementById("areaC").style.display = "none";
    document.getElementById("areaEvent").style.display = "none";
  } else if (val === "bgroup") {
    document.getElementById("agroup").style.display = "none";
    document.getElementById("bgroup").style.display = "";
    document.getElementById("cgroup").style.display = "none";
    document.querySelector(".selectBox").style.color = "#E2FF44";
    document.querySelector(".gr_cl").style.color = "#E2FF44";

    document.getElementById("areaA").style.display = "none";
    document.getElementById("areaB").style.display = "inline-block";
    document.getElementById("areaC").style.display = "none";
    document.getElementById("areaEvent").style.display = "none";
  } else if (val === "cgroup") {
    document.getElementById("agroup").style.display = "none";
    document.getElementById("bgroup").style.display = "none";
    document.getElementById("cgroup").style.display = "";
    document.querySelector(".selectBox").style.color = "#4FB2FF";
    document.querySelector(".gr_cl").style.color = "#4FB2FF";

    document.getElementById("areaA").style.display = "none";
    document.getElementById("areaB").style.display = "none";
    document.getElementById("areaC").style.display = "inline-block";
    document.getElementById("areaEvent").style.display = "none";
  } else if (val === "eventgroup") {
    document.getElementById("agroup").style.display = "";
    document.getElementById("bgroup").style.display = "";
    document.getElementById("cgroup").style.display = "";

    document.getElementById("areaA").style.display = "none";
    document.getElementById("areaB").style.display = "none";
    document.getElementById("areaC").style.display = "none";
    document.getElementById("areaEvent").style.display = "inline-block";
  }
}

function addMember(e) {
  const selectedGroup = document.getElementById("selectBox").value;
  let newMemberName = "";
  if ("shuffle" == e) {
    let newnnisM = [];
    if (selectedGroup === "agroup") {
      groupType = "a";
      newnnisM = [
        "이태규",
        "정진호",
        "김정래",
        "한용진",
        "김승원",
        "김세호",
        "김성구",
        "황주현",
        "전룡재",
        "송영주",
      ];
    } else if (selectedGroup === "bgroup") {
      groupType = "b";
      newnnisM = [
        "조민재",
        "양인석",
        "장현수",
        "장승현",
        "신수현",
        "정영호",
        "김준수",
        "황태훈",
        "김용희",
        "고범석",
      ];
    } else if (selectedGroup === "cgroup") {
      groupType = "c";
      newnnisM = [
        "박지해",
        "배민지",
        "남아름",
        "김예슬",
        "고경년",
        "심정은",
        "김예진",
        "송희정",
        "정진솔",
        "김나형",
      ];
    }

    newnnisM.sort(() => Math.random() - 0.5);
    let newMember = "";
    for (let i = 0; i < newnnisM.length; i++) {
      newMemberName = newnnisM[i];
      newMember += '<div class="form-check">';
      newMember +=
        '<input type="checkbox" class="form-check-input" name="' +
        selectedGroup.substr(0, 1) +
        '" id="' +
        groupType +
        i +
        '" value="' +
        newMemberName +
        '">';
      newMember +=
        '<label class="form-check-label" for="' +
        groupType +
        i +
        '">' +
        newMemberName +
        "</label>";
      newMember += "</div>";
    }
    document.getElementById(selectedGroup).innerHTML += newMember;
  } else {
    newMemberName = document.getElementById("newMember").value;

    let newMember = "";
    newMember += '<div class="form-check">';
    newMember +=
      '<input type="checkbox" class="form-check-input" name="' +
      selectedGroup.substr(0, 1) +
      '" value="' +
      newMemberName +
      '">';
    newMember +=
      '<label class="form-check-label">' + newMemberName + "</label>";
    newMember += "</div>";

    document.getElementById(selectedGroup).innerHTML += newMember;
  }
}

function rankAlert() {
  const selectedGroup = document.getElementById("selectBox").value;
  if (selectedGroup === "agroup") {
    alert("N");
  } else if (selectedGroup === "bgroup") {
    alert("E");
  } else if (selectedGroup === "cgroup") {
    alert("W");
  }
}

function shuffleTeam() {
  const selectedGroup = document.getElementById("selectBox").value;
  var grp = "";
  if (selectedGroup === "eventgroup") {
  } else {
    if (selectedGroup === "agroup") {
      grp = document.getElementById("agroup");
    } else if (selectedGroup === "bgroup") {
      grp = document.getElementById("bgroup");
    } else if (selectedGroup === "cgroup") {
      grp = document.getElementById("cgroup");
    }
    grp.replaceChildren();
    addMember("shuffle");
  }
}

function selectAll() {
  const isChecked = document.getElementById("cbxall").checked;
  const selectedGroup = document.getElementById("selectBox").value;
  grp = [];
  if (selectedGroup === "agroup") {
    grp = document.getElementsByName("a");
  } else if (selectedGroup === "bgroup") {
    grp = document.getElementsByName("b");
  } else if (selectedGroup === "cgroup") {
    grp = document.getElementsByName("c");
  }
  for (let member of grp) {
    member.checked = isChecked;
  }
}