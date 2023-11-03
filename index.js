const form = document.querySelector("form");
const task = document.getElementById("task");
const pri = document.getElementById("priority");
const tbody = document.querySelector("tbody")
const allData = []

form.addEventListener('submit',function(e)
{
    e.preventDefault();

    let data = {};
    data.input1 = task.value;
    data.input2 = pri.value;
    allData.push(data);

    tbody.innerHTML = null;

    allData.map((ele)=>
    {
        let row = document.createElement('tr');
        let td1 = document.createElement('td');
        let td2 = document.createElement('td');

        td1.innerText = ele.input1;
        td2.innerText = ele.input2;
        row.append(td1,td2);
        tbody.append(row)
    })
})