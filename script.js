fetch('data.json')
.then(response => response.json())
.then(data => {
  const departmentsContainer = document.getElementById('departments-container');

  data.departments.map(department => {
    const departmentDiv = document.createElement('div');
    departmentDiv.classList.add('department');

    const departmentTitle = document.createElement('h2');
    departmentTitle.textContent = department.name;
    departmentTitle.onclick = function() {
      toggleSubUnits(this);
    };

    const subUnitsDiv = document.createElement('div');
    subUnitsDiv.classList.add('sub-units');

    department.subUnits.map(subUnit => {
      const subUnitDiv = document.createElement('div');
      subUnitDiv.classList.add('sub-unit');

      const subUnitTitle = document.createElement('h3');
      subUnitTitle.textContent = subUnit.name;

      subUnit.supportLevels.map(supportLevel => {
        const supportLevelDiv = document.createElement('div');
        supportLevelDiv.classList.add('support-level');

        const supportLevelTitle = document.createElement('h4');
        supportLevelTitle.textContent = supportLevel.level;

        const supportInfo = document.createElement('p');
        supportInfo.innerHTML = `<strong>Name:</strong> ${supportLevel.name}<br>
                                <strong>Designation:</strong> ${supportLevel.designation}<br>
                                ${supportLevel.phone ? `<br><strong>Phone:</strong> ${supportLevel.phone}` : ''}`;

        supportLevelDiv.appendChild(supportLevelTitle);
        supportLevelDiv.appendChild(supportInfo);
        subUnitDiv.appendChild(supportLevelDiv);
      });

      subUnitDiv.insertBefore(subUnitTitle, subUnitDiv.firstChild);
      subUnitsDiv.appendChild(subUnitDiv);
    });

    departmentDiv.appendChild(departmentTitle);
    departmentDiv.appendChild(subUnitsDiv);
    departmentsContainer.appendChild(departmentDiv);
  });
});

function toggleSubUnits(department) {
    var subUnits = department.nextElementSibling;
    var allSubUnits = document.querySelectorAll('.sub-units');
    allSubUnits.forEach(function (units) {
        if (units !== subUnits) {
            units.style.display = 'none';
        }
    });
    if (subUnits.style.display === "flex") {
        subUnits.style.display = "none";
    } else {
        subUnits.style.display = "flex";
    }
}