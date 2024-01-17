window.onload=function(){
    document.getElementById("agroup").style.display = "";
    document.getElementById("bgroup").style.display = "none";
    document.getElementById("cgroup").style.display = "none";
}

function organize(){
    let memberCnt = [];
    const selectedGroup = document.getElementById("selectBox").value;
    if(selectedGroup === 'eventgroup'){
        let checkdElementA =document.querySelectorAll('input[name="a"]:checked');
        let checkdElementB =document.querySelectorAll('input[name="b"]:checked');
        let checkdElementC =document.querySelectorAll('input[name="c"]:checked');
        var aArr = [];
        for(let i=0;i<checkdElementA.length;i++){
            aArr.push(checkdElementA[i].value);
        }
        var bArr = [];
        for(let i=0;i<checkdElementB.length;i++){
            bArr.push(checkdElementB[i].value);
        }
        var cArr = [];
        for(let i=0;i<checkdElementC.length;i++){
            cArr.push(checkdElementC[i].value);
        }

        aArr = (aArr.sort(() => Math.random() - 0.5)).concat(aArr.sort(() => Math.random() - 0.5));
        bArr = (bArr.sort(() => Math.random() - 0.5)).concat(bArr.sort(() => Math.random() - 0.5));
        cArr = (cArr.sort(() => Math.random() - 0.5)).concat(cArr.sort(() => Math.random() - 0.5));
        
        var result="<table class='table'>"
            +"<thead><tr>"
            +"<th scope='col'>경기</th>"
            +"<th scope='col' colspan='2'>대진팀</th>"
            +"</tr></thead><tbody>";
        var matchupTeam =[];
        var match =[];
        while(aArr.length!=0 || bArr.length!=0 || cArr.length!=0){
            if(aArr.length!=0){
                if(match.length==0){
                    match[0]=aArr.pop();
                    match[2]=aArr.pop();
                }else{
                    match[1]=aArr.pop();
                    match[3]=aArr.pop();
                    matchupTeam.push(match);
                    match=[];
                }
            }
            if(bArr.length!=0){
                if(match.length==0){
                    match[0]=bArr.pop();
                    match[2]=bArr.pop();
                }else{
                    match[1]=bArr.pop();
                    match[3]=bArr.pop();
                    matchupTeam.push(match);
                    match=[];
                }
            }
            if(cArr.length!=0){
                if(match.length==0){
                    match[0]=cArr.pop();
                    match[2]=cArr.pop();
                }else{
                    match[1]=cArr.pop();
                    match[3]=cArr.pop();
                    matchupTeam.push(match);
                    match=[];
                }
            }
        }
        if(match.length!=0){
            for(let i=0;i<checkdElementA.length;i++){
                aArr.push(checkdElementA[i].value);
            }
            var bArr = [];
            for(let i=0;i<checkdElementB.length;i++){
                bArr.push(checkdElementB[i].value);
            }
            var cArr = [];
            for(let i=0;i<checkdElementC.length;i++){
                cArr.push(checkdElementC[i].value);
            }
            var temp = aArr.concat(bArr).concat(cArr);
            temp.splice(temp.indexOf(match[0]),1);
            temp.splice(temp.indexOf(match[2]),1);
            temp.sort(() => Math.random() - 0.5);
            match[1]=temp.pop();
            match[3]=temp.pop();
            matchupTeam.push(match);
        }
        matchupTeam.sort(() => Math.random() - 0.5);
        for(let i=0;i<matchupTeam.length;i++){
            result+="<tr><th>"+(i+1)+"경기</td><td>"+matchupTeam[i][0]+", "+matchupTeam[i][1]+"</td><td>"+matchupTeam[i][2]+", "+matchupTeam[i][3]+"</td></tr>";
            for(let j=0;j<4;j++){
                memberCnt[matchupTeam[i][j]]++;
            }
        }
        result+="</tbody></table>";
        areaEvent.innerHTML = result;
    }else{
        let checkdElement =[];
        if(selectedGroup === 'agroup'){
            checkdElement = document.querySelectorAll('input[name="a"]:checked');
        }else if(selectedGroup === 'bgroup'){
            checkdElement = document.querySelectorAll('input[name="b"]:checked');
        }else if(selectedGroup === 'cgroup'){
            checkdElement = document.querySelectorAll('input[name="c"]:checked');
        }

        //4명이상인 경우 매칭 가능
        if(checkdElement.length<4){
            alert('4명 이상 선택하십시오.');
            return;
        }

        let myArr = [];
        for(let i=0;i<checkdElement.length;i++){
            myArr.push(checkdElement[i].value);
            memberCnt[checkdElement[i].value]=0;
        }

        myArr.sort(() => Math.random() - 0.5);
        let result="<table class='table' id='"+selectedGroup+"Match'>"
            +"<thead><tr>"
            +"<th scope='col'>경기</th>"
            +"<th scope='col' colspan='2'>대진팀</th>"
            +"</tr></thead><tbody>";
        let matchupTeam=[];
        if(checkdElement.length==4){
            matchupTeam=[
                [myArr[0], myArr[1], myArr[2], myArr[3]],
                [myArr[2], myArr[0], myArr[3], myArr[1]],
                [myArr[0], myArr[3], myArr[1], myArr[2]],
            ]
        }else if(checkdElement.length==5){
            matchupTeam=[
                [myArr[1], myArr[2], myArr[3], myArr[4]],
                [myArr[0], myArr[1], myArr[2], myArr[3]],
                [myArr[3], myArr[1], myArr[0], myArr[4]],
                [myArr[2], myArr[0], myArr[1], myArr[4]],
            ]

        }else if(checkdElement.length==6){
            matchupTeam=[
                [myArr[2], myArr[3], myArr[0], myArr[1]],
                [myArr[4], myArr[5], myArr[2], myArr[0]],
                [myArr[3], myArr[4], myArr[1], myArr[5]],
                [myArr[0], myArr[3], myArr[2], myArr[1]],
                [myArr[2], myArr[4], myArr[0], myArr[5]],
            ];

        }else if(checkdElement.length==7){
            matchupTeam=[
                [myArr[0], myArr[1], myArr[2], myArr[3]],
                [myArr[4], myArr[5], myArr[6], myArr[2]],
                [myArr[0], myArr[3], myArr[1], myArr[4]],
                [myArr[6], myArr[5], myArr[2], myArr[1]],
                [myArr[0], myArr[6], myArr[3], myArr[5]],
                [myArr[4], myArr[2], myArr[1], myArr[3]],
            ];

        }else if(checkdElement.length==8){
            matchupTeam=[
                [myArr[0], myArr[2], myArr[3], myArr[1]],
                [myArr[7], myArr[4], myArr[5], myArr[6]],
                [myArr[1], myArr[6], myArr[4], myArr[0]],
                [myArr[5], myArr[3], myArr[2], myArr[7]],
                [myArr[0], myArr[1], myArr[4], myArr[6]],
                [myArr[7], myArr[5], myArr[2], myArr[3]],
            ];
        }else if(checkdElement.length==9){
            matchupTeam=[
                [myArr[0], myArr[4], myArr[1], myArr[2]],
                [myArr[3], myArr[8], myArr[7], myArr[5]],
                [myArr[6], myArr[1], myArr[2], myArr[0]],
                [myArr[3], myArr[7], myArr[4], myArr[8]],
                [myArr[5], myArr[6], myArr[0], myArr[1]],
                [myArr[7], myArr[2], myArr[8], myArr[3]],
                [myArr[4], myArr[5], myArr[6], myArr[0]],
            ];
        }else if(checkdElement.length==10){
            matchupTeam=[
                [myArr[0], myArr[4], myArr[2], myArr[3]],
                [myArr[5], myArr[1], myArr[8], myArr[9]],
                [myArr[6], myArr[7], myArr[0], myArr[2]],
                [myArr[9], myArr[1], myArr[3], myArr[5]],
                [myArr[4], myArr[6], myArr[7], myArr[8]],
                [myArr[5], myArr[0], myArr[1], myArr[3]],
                [myArr[2], myArr[7], myArr[4], myArr[9]],
                [myArr[8], myArr[6], myArr[7], myArr[0]],
            ];
        }else{
            alert('10명초과 불가!'); return;
        }
        for(let i=0;i<matchupTeam.length;i++){
            result+="<tr><th>"+(i+1)+"경기</td><td>"+matchupTeam[i][0]+", "+matchupTeam[i][1]+"</td><td>"+matchupTeam[i][2]+", "+matchupTeam[i][3]+"</td></tr>";
            for(let j=0;j<4;j++){
                memberCnt[matchupTeam[i][j]]++;
            }
        }
        result+="</tbody></table>";

        console.log(memberCnt);
        result+="<ul>";
        for(let key in memberCnt){
            result+="<li>"+key+": "+memberCnt[key]+"경기 </li>";
        }
        result+="</ul>";

        if(selectedGroup === 'agroup'){
            areaA.innerHTML = result;
        }else if(selectedGroup === 'bgroup'){
            areaB.innerHTML = result;
        }else if(selectedGroup === 'cgroup'){
            areaC.innerHTML = result;
        }
    }
}

function changeGroup(e){
    let val= e.value;
    if(val==="agroup"){
        document.getElementById("agroup").style.display = "";
        document.getElementById("bgroup").style.display = "none";
        document.getElementById("cgroup").style.display = "none";
        document.getElementById("header").style.background = "#A9E2E4";

        document.getElementById("areaA").style.display = "inline-block";
        document.getElementById("areaB").style.display = "none";
        document.getElementById("areaC").style.display = "none";
        document.getElementById("areaEvent").style.display = "none";
    }else if(val==="bgroup"){
        document.getElementById("agroup").style.display = "none";
        document.getElementById("bgroup").style.display = "";
        document.getElementById("cgroup").style.display = "none";
        document.getElementById("header").style.background = "#DAEBEB";

        document.getElementById("areaA").style.display = "none";
        document.getElementById("areaB").style.display = "inline-block";
        document.getElementById("areaC").style.display = "none";
        document.getElementById("areaEvent").style.display = "none";
    }else if(val==="cgroup"){
        document.getElementById("agroup").style.display = "none";
        document.getElementById("bgroup").style.display = "none";
        document.getElementById("cgroup").style.display = "";
        document.getElementById("header").style.background = "#E8E963";

        document.getElementById("areaA").style.display = "none";
        document.getElementById("areaB").style.display = "none";
        document.getElementById("areaC").style.display = "inline-block";
        document.getElementById("areaEvent").style.display = "none";
    }else if(val==="eventgroup"){
        document.getElementById("agroup").style.display = "";
        document.getElementById("bgroup").style.display = "";
        document.getElementById("cgroup").style.display = "";

        document.getElementById("areaA").style.display = "none";
        document.getElementById("areaB").style.display = "none";
        document.getElementById("areaC").style.display = "none";
        document.getElementById("areaEvent").style.display = "inline-block";
    }
}

function addMember(e){
    const selectedGroup = document.getElementById("selectBox").value;
    let newMemberName = '';
    if('shuffle' == e){
        let newnnisM =[];
        if(selectedGroup === 'agroup'){
            groupType ="a"
            newnnisM=['이태규','정진호','김정래','한용진','김승원','김세호','김성구','황주현','전룡재','송영주'];
        }else if(selectedGroup === 'bgroup'){
            groupType ="b"
            newnnisM=['조민재','양인석','장현수','장승현','신수현','정영호','김준수','황태훈','김용희','고범석'];
        }else if(selectedGroup === 'cgroup'){
            groupType ="c"
            newnnisM=['박지해','배민지','남아름','김예슬','고경년','심정은','김예진','송희정','정진솔','김나형'];
        }
        
        newnnisM.sort(()=>Math.random()-0.5);
        let newMember = '';
        for(let i=0;i<newnnisM.length;i++){
            newMemberName=newnnisM[i];
            newMember+='<div class="form-check">';
            newMember+='<input type="checkbox" class="form-check-input" name="'+selectedGroup.substr(0,1)+'" id="'+groupType+i+'" value="'+newMemberName+'">';
            newMember+='<label class="form-check-label" for="'+groupType+i+'">'+newMemberName+'</label>';
            newMember+='</div>';
        }
        document.getElementById(selectedGroup).innerHTML+=newMember;
    }else{
        newMemberName = document.getElementById("newMember").value;
        
        let newMember = '';
        newMember+='<div class="form-check">';
        newMember+='<input type="checkbox" class="form-check-input" name="'+selectedGroup.substr(0,1)+'" value="'+newMemberName+'">';
        newMember+='<label class="form-check-label">'+newMemberName+'</label>';
        newMember+='</div>';

        document.getElementById(selectedGroup).innerHTML+=newMember;
    }
}

function rankAlert(){
    const selectedGroup = document.getElementById("selectBox").value;
    if(selectedGroup === 'agroup'){
        alert('N');
    }else if(selectedGroup === 'bgroup'){
        alert('E');
    }else if(selectedGroup === 'cgroup'){
        alert('W');
    }
}

function shuffleTeam(){
    const selectedGroup = document.getElementById("selectBox").value;
    var grp = '';
    if(selectedGroup === 'eventgroup'){
        
    }else{
        if(selectedGroup === 'agroup'){
            grp = document.getElementById('agroup');
        }else if(selectedGroup === 'bgroup'){
            grp = document.getElementById('bgroup');
        }else if(selectedGroup === 'cgroup'){
            grp = document.getElementById('cgroup');
        }
        grp.replaceChildren();
        addMember('shuffle');
    }
}