setFirstPaginationIconColor()
function setFirstPaginationIconColor(){
    document.getElementById('first_page_for_color').style.backgroundColor= "#b9b6b6";
    document.getElementById('second_page_for_color').style.backgroundColor= "#eaeaea";
    document.getElementById('third_page_for_color').style.backgroundColor= "#eaeaea";
    document.getElementById('forth_page_for_color').style.backgroundColor= "#eaeaea";
}
function goToFirstPage(){
    document.getElementById('first_page').style.display= "block";
    document.getElementById('second_page').style.display= "none";
    document.getElementById('third_page').style.display= "none";
    document.getElementById('forth_page').style.display= "none";

    document.getElementById('first_page_for_color').style.backgroundColor= "#b9b6b6";
    document.getElementById('second_page_for_color').style.backgroundColor= "#eaeaea";
    document.getElementById('third_page_for_color').style.backgroundColor= "#eaeaea";
    document.getElementById('forth_page_for_color').style.backgroundColor= "#eaeaea";
    

}

function GoToSecondPage(){
    document.getElementById('second_page').style.display= "block";
    document.getElementById('first_page').style.display= "none";
    document.getElementById('third_page').style.display= "none";
    document.getElementById('forth_page').style.display= "none";

    document.getElementById('second_page_for_color').style.backgroundColor= "#b9b6b6";
    document.getElementById('first_page_for_color').style.backgroundColor= "#eaeaea";
    document.getElementById('third_page_for_color').style.backgroundColor= "#eaeaea";
    document.getElementById('forth_page_for_color').style.backgroundColor= "#eaeaea";

}

function goToThirdPage(){
    document.getElementById('first_page').style.display= "none";
    document.getElementById('second_page').style.display= "none";
    document.getElementById('forth_page').style.display= "none";
    document.getElementById('third_page').style.display= "block";

    document.getElementById('third_page_for_color').style.backgroundColor= "#b9b6b6";
    document.getElementById('second_page_for_color').style.backgroundColor= "#eaeaea";
    document.getElementById('first_page_for_color').style.backgroundColor= "#eaeaea";
    document.getElementById('forth_page_for_color').style.backgroundColor= "#eaeaea";

}

function goToFifthPage(){
    document.getElementById('first_page').style.display= "none";
    document.getElementById('second_page').style.display= "none";
    document.getElementById('third_page').style.display= "none";
    document.getElementById('forth_page').style.display= "block";

    document.getElementById('third_page_for_color').style.backgroundColor= "#eaeaea";
    document.getElementById('second_page_for_color').style.backgroundColor= "#eaeaea";
    document.getElementById('first_page_for_color').style.backgroundColor= "#eaeaea";
    document.getElementById('forth_page_for_color').style.backgroundColor= "#b9b6b6";

}