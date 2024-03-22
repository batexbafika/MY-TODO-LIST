const popupDiv=document.getElementById('form');
function OpenPop1(){
  
    popupDiv.style.display ="block";
}
  
function addNewDiv() {
    const container1 = document.querySelector('.body');
    
    const newDiv = document.createElement('div');
    const newDiv1 = document.getElementById('items')
    const input1Value = document.getElementById('input1').value;
    const input2Value = document.getElementById('input2').value;

    newDiv.innerHTML = `
  <div id="bg">
      <input type="checkbox" value="on">
    <div class="e">${input1Value}</div>
        <div class="e"> ${input2Value }</div>
        <button onclick="editDiv(this)">Edit</button>
        <button onclick="deleteDiv(this)">Delete</button>
    </div> 
    `;

      newDiv1.appendChild(newDiv);
  
  input1.value = '';
input2.value = '';

popupDiv.style.display = "none";
}

function editDiv(button) {
    const div = button.parentNode;
    const text = div.querySelector('div').textContent;
    const inputs = text.split(' ');
    document.getElementById('input1').value = inputs[0];
    document.getElementById('input2').value = inputs[1];
    div.remove();

    popupDiv.style.display = "block";
}

function deleteDiv(button) {
    button.parentNode.remove();
}