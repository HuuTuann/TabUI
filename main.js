var familyMemberAPI = "http://localhost:3000/familyMember";

function start() {
    getFamilyMember(renderFamilyMember);
    deleteFamilyMember();
    // getFamilyMember((familyMembers) => renderFamilyMember(familyMembers));
}

start();

function getFamilyMember(familyMembers) {
    return fetch(familyMemberAPI)
        .then((response) => response.json())
        .then(familyMembers);
}

function renderFamilyMember(familyMembers) {
    familyMembers.forEach((familyMember) =>
        HandleCreateHTMLFamilyMember(familyMember)
    );
}

function HandleCreateHTMLFamilyMember(familyMember) {
    document.querySelector(
        ".member-family-list"
    ).innerHTML += `<li class="familyMembers-${familyMember.id}">
                        <h4>Họ và Tên: ${familyMember.name}</h4>
                        <p>Tuổi: ${familyMember.age}</p>
                        <button class="deleteFamilyMember">Delete</button>
                    </li>`;
}

function handleDelete(id) {
    // const myInit = {
    //     method: "DELETE",
    //     headers: {
    //         "Content-Type": "application/json",
    //     },
    // };
    // return fetch(familyMemberAPI, myInit)
    //     .then((response) => response.json())
    //     .then((newFamilyMember) =>
    //         HandleCreateHTMLFamilyMember(newFamilyMember)
    //     );
    alert();
}

document
    .querySelector(".createFamilyMember")
    .addEventListener("click", function () {
        var name = document.querySelector("input[name='name']").value;
        var age = document.querySelector("input[name='age']").value;
        var familyMember = {
            name: name,
            age: age,
        };
        createFamilyMember(familyMember);
    });

function createFamilyMember(familyMember) {
    const myInit = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(familyMember),
    };
    return fetch(familyMemberAPI, myInit)
        .then((response) => response.json())
        .then((newFamilyMember) =>
            HandleCreateHTMLFamilyMember(newFamilyMember)
        );
}

function deleteFamilyMember() {
    alert("hi");
    document.querySelectorAll(".deleteFamilyMember").map((button) => {
        button.addEventListener("click", function () {
            alert("Hi");
        });
    });
    alert("hi");
}
