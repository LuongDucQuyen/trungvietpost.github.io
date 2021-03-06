var menuItem = document.querySelector(".menu_item");
var mobileMenu = document.querySelector(".mobile_menu");
var items = document.querySelector(".items");
var tracking = document.querySelector(".tracking");
var search = document.querySelector(".search_box");
var inputSearch = document.querySelector(".input_text");
var selection = document.querySelector(".selection");
var tutorialList = document.querySelectorAll(".tutorial_item");
var details = document.querySelector(".details_text");
var btnGoToTop = document.querySelector(".go_to_top");
var body = document.querySelector("body");
var slogan = document.querySelector(".sologan_text");
var searchGroup = document.querySelector(".search_Group");
var serviceTitle = document.querySelector(".service_title");
var itemCUs= document.querySelector(".itemCUs")
window.onscroll = function (e) {
  showGoToTop(e);scroll()
};
function showGoToTop(e) {
  if (
    document.body.scrollTop > 350 ||
    document.documentElement.scrollTop > 350
  ) {
    btnGoToTop.style.bottom = "50px";
    btnGoToTop.style.right = `${(screen.width / 100) * 3}px`;
  } else {
    btnGoToTop.style.bottom = "-100px";
  }
}
btnGoToTop.onclick = (e) => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};
btnGoToTop.onmouseover = (e) => {
  btnGoToTop.children[0].style.opacity = "0";
  btnGoToTop.children[1].style.opacity = "1";
  btnGoToTop.style.backgroundColor = "black";
};
btnGoToTop.onmouseout = (e) => {
  btnGoToTop.children[0].style.opacity = "1";
  btnGoToTop.children[1].style.opacity = "0";
  btnGoToTop.style.backgroundColor = "#d81324";
};
function scroll() {
  if(
    document.body.scrollTop > 400 ||
    document.documentElement.scrollTop > 400
  ) {
    console.log(document.body.scrollTop)
    searchGroup.style.transform = "scale(1)";
    searchGroup.style.opacity = "1";
    serviceTitle.style.transform='scale(1)';
  }
}
body.onload = () => {
  slogan.style.opacity = "1";
  slogan.style.transform = "scale(1)";
};
mobileMenu.onclick = function (e) {
  menuItem.style.left = "0%";
  Object.assign(mobileMenu.querySelector(".top").style, {
    transform: "rotatez(45deg)",
    top: "33%",
  });
  mobileMenu.querySelector(".center").style.width = "0%";
  Object.assign(mobileMenu.querySelector(".bottom").style, {
    transform: "rotatez(-45deg)",
    top: "33%",
  });
};
menuItem.onclick = function (e) {
  menuItem.style.left = "-100%";
  Object.assign(mobileMenu.querySelector(".top").style, {
    transform: "rotatez(0deg)",
    top: "0",
  });
  mobileMenu.querySelector(".center").style.width = "100%";
  Object.assign(mobileMenu.querySelector(".bottom").style, {
    transform: "rotatez(0deg)",
    bottom: "0",
    top: "auto",
  });
};
items.onclick = function (e) {
  e.stopPropagation();
};
tracking.onclick = (e) => {
  selection.style.width = "0px";
  inputSearch.style.height = "50px";
  inputSearch.placeholder = "nh???p m?? v???n ????n...";
  Object.assign(tracking.style, {
    backgroundColor: "#d81324",
    color: "#ffffff",
  });
  tracking.children[0].style.filter = "brightness(14)";
  search.children[0].style.filter = "none";
  Object.assign(search.style, {
    backgroundColor: "#ffffff",
    color: "#d81324",
  });
};
search.onclick = (e) => {
  inputSearch.placeholder = "nh???p s???n ph???m t??m ki???m ...";
  selection.style.display = "inline-flex";
  selection.style.width = "180px";
  Object.assign(tracking.style, {
    backgroundColor: "#ffffff",
    color: "#d81324",
  });
  tracking.children[0].style.filter = "none";
  search.children[0].style.filter = "brightness(66)";
  Object.assign(search.style, {
    backgroundColor: "#d81324",
    color: "#ffffff",
  });
};
for (var i = 0; i < tutorialList.length; i++) {
  let detailsTitle = document.querySelector(".details_title");
  let detailsText = document.querySelector(".details_p");
  tutorialList[i].onmousedown = (e) => {
    for (var j = 0; j < tutorialList.length; j++) {
      tutorialList[j].style.color = "#ffffff";
      details.classList.remove("changeTeam");
    }
  };
  tutorialList[i].onmouseup = (e) => {
    e.target.style.color = "#d81324";
    details.classList.add("changeTeam");
    switch (e.target.innerHTML) {
      case "????NG K?? T??I KHO???N":
        detailsTitle.textContent = "????NG K?? T??I KHO???N";
        detailsText.textContent =
          "Nh???p c??c th??ng tin c?? nh??n b???t bu???c v??o ??, l??u ?? nh???p ch??nh x??c c??c th??ng tin ????? ?????m b???o cho vi???c qu???n l?? ????n h??ng v?? nh???n h??ng c???a b???n.";
        break;
      case "C??I ?????T C??NG C???":
        detailsTitle.textContent = "C??I ?????T C??NG C???";
        detailsText.textContent =
          "Click v??o c??i ?????t c??ng c??? ?????t h??ng c???a Trung Vi???t Order. C??ng c??? h??? tr??? ?????t h??ng c??c website taobao, tmall, 1688.";
        break;
      case "CH???N &amp; TH??M V??O GI??? H??NG":
        detailsTitle.textContent = "CH???N & TH??M V??O GI??? H??NG";
        detailsText.textContent =
          "Truy c???p v??o c??c trang mua s???m Taobao.com, Tmall.com, 1688.com ??? ch???n h??ng v?? th??m h??ng v??o gi???.";
        break;
      case "G???I ????N ?????T H??NG":
        detailsTitle.textContent = "G???I ????N ?????T H??NG";
        detailsText.textContent =
          "Quay l???i website Trung Vi???t Order v?? ki???m tra gi??? h??ng Click v??o ???G???i ????n h??ng??? ????? t???o ????n h??ng,ch??? x??c nh???n ?????t h??ng th??nh c??ng.";
        break;
      case "?????T C???C ????N H??NG":
        detailsTitle.textContent = "?????T C???C ????N H??NG";
        detailsText.textContent =
          "Ki???m tra ????n h??ng v?? ?????t c???c ti???n h??ng qua h??nh th???c chuy???n kho???n ho???c tr???c ti???p t???i c??c v??n ph??ng giao d???ch g???n nh???t c???a Trung Vi???t Order.";
        break;
      case "NH???N H??NG &amp; THANH TO??N":
        detailsTitle.textContent = "NH???N H??NG & THANH TO??N";
        detailsText.textContent =
          "Qu?? kh??ch nh???n ???????c th??ng b??o h??ng v??? Vi???t Nam. Qu?? kh??ch thanh to??n s??? ti???n c??n thi???u qua h??nh th???c chuy???n kho???n ho???c tr???c ti???p. Sau khi thanh to??n qu?? kh??ch h??ng c?? th??? y??u c???u ship h??ng ho???c tr???c ti???p nh???n h??ng t???i kho c???a Trung Vi???t Order.";
    }
  };
}
