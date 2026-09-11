//カードに表示されるもの
const playerName_area = document.getElementById("playerName_area");
const uid_area = document.getElementById("uid_area");
const profile_area = document.getElementById("profile_area");

//入力エリア
const input_playerName = document.getElementById("input_playerName");
const input_uid = document.getElementById("input_uid");
const input_profile = document.getElementById("input_profile");

//名前入力
input_playerName.addEventListener("input", (e) => {
    playerName_area.textContent = e.target.value;
});
//UID入力
input_uid.addEventListener("input", (e) => {
    uid_area.textContent = e.target.value;
});
//自己紹介入力
input_profile.addEventListener("input", (e) => {

    while (input_profile.scrollHeight > input_profile.clientHeight) {
        input_profile.value = input_profile.value.slice(0, -1);
    }

    profile_area.textContent = input_profile.value;
});

//背景
const nameCard = document.getElementById("nameCard");
const characters = document.querySelectorAll(".characterChoices img");
characters.forEach((character) => {

    character.addEventListener("pointerdown", () => {

        nameCard.style.backgroundImage =
            `linear-gradient(rgba(0, 0, 0, 0.45), rgba(0, 0, 0, 0.45)), url("${character.src}")`;
    });
});


//お気に入りキャラクター選択
const favoriteButton = document.getElementsByClassName("favoriteButton");
for (const button of favoriteButton)
{
    button.addEventListener("pointerdown", () => {

        const favoriteSelect = button.parentElement;
        const favoriteChoices = favoriteSelect.querySelector(".favoriteChoices");

        if (favoriteChoices.style.display === "flex")
        {
            favoriteChoices.style.display = "none";
        }
        else
        {
            favoriteChoices.style.display = "flex";
        }

    });
}

//背景選択
const backgroundButton = document.querySelector(".backgroundButton");
const characterChoices = document.querySelector(".characterChoices");

backgroundButton.addEventListener("pointerdown", () => {

    if (characterChoices.style.display === "flex")
    {
        characterChoices.style.display = "none";
    }
    else
    {
        characterChoices.style.display = "flex";
    }

});

//キャラクター1
const selectCharacter_01 = document.getElementsByClassName("selectCharacter_01");
const character01_name = document.getElementById("character01_name");
const favorite_01 = document.getElementById("favorite_01");
for (const button of selectCharacter_01)
{
    button.addEventListener("pointerdown", (e) => {
        const img = e.target;
        favorite_01.src = img.src;
        character01_name.textContent = img.alt;
    });
}
//キャラクター2
const selectCharacter_02 = document.getElementsByClassName("selectCharacter_02");
const character02_name = document.getElementById("character02_name");
const favorite_02 = document.getElementById("favorite_02");
for (const button of selectCharacter_02)
{
    button.addEventListener("pointerdown", (e) => {
        const img = e.target;
        favorite_02.src = img.src;
        character02_name.textContent = img.alt;
    });
}
//キャラクター3
const selectCharacter_03 = document.getElementsByClassName("selectCharacter_03");
const character03_name = document.getElementById("character03_name");
const favorite_03 = document.getElementById("favorite_03");
for (const button of selectCharacter_03)
{
    button.addEventListener("pointerdown", (e) => {
        const img = e.target;
        favorite_03.src = img.src;
        character03_name.textContent = img.alt;
    });
}
