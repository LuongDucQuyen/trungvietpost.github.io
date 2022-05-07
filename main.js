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
  inputSearch.placeholder = "nhập mã vận đơn...";
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
  inputSearch.placeholder = "nhập sản phẩm tìm kiếm ...";
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
      case "ĐĂNG KÝ TÀI KHOẢN":
        detailsTitle.textContent = "ĐĂNG KÝ TÀI KHOẢN";
        detailsText.textContent =
          "Nhập các thông tin cá nhân bắt buộc vào ô, lưu ý nhập chính xác các thông tin để đảm bảo cho việc quản lí đơn hàng và nhận hàng của bạn.";
        break;
      case "CÀI ĐẶT CÔNG CỤ":
        detailsTitle.textContent = "CÀI ĐẶT CÔNG CỤ";
        detailsText.textContent =
          "Click vào cài đặt công cụ đặt hàng của Trung Việt Order. Công cụ hỗ trợ đặt hàng các website taobao, tmall, 1688.";
        break;
      case "CHỌN &amp; THÊM VÀO GIỎ HÀNG":
        detailsTitle.textContent = "CHỌN & THÊM VÀO GIỎ HÀNG";
        detailsText.textContent =
          "Truy cập vào các trang mua sắm Taobao.com, Tmall.com, 1688.com … chọn hàng và thêm hàng vào giỏ.";
        break;
      case "GỬI ĐƠN ĐẶT HÀNG":
        detailsTitle.textContent = "GỬI ĐƠN ĐẶT HÀNG";
        detailsText.textContent =
          "Quay lại website Trung Việt Order và kiểm tra giỏ hàng Click vào “Gửi đơn hàng” để tạo đơn hàng,chờ xác nhận đặt hàng thành công.";
        break;
      case "ĐẶT CỌC ĐƠN HÀNG":
        detailsTitle.textContent = "ĐẶT CỌC ĐƠN HÀNG";
        detailsText.textContent =
          "Kiểm tra đơn hàng và đặt cọc tiền hàng qua hình thức chuyển khoản hoặc trực tiếp tại các văn phòng giao dịch gần nhất của Trung Việt Order.";
        break;
      case "NHẬN HÀNG &amp; THANH TOÁN":
        detailsTitle.textContent = "NHẬN HÀNG & THANH TOÁN";
        detailsText.textContent =
          "Quý khách nhận được thông báo hàng về Việt Nam. Quý khách thanh toán số tiền còn thiếu qua hình thức chuyển khoản hoặc trực tiếp. Sau khi thanh toán quý khách hàng có thể yêu cầu ship hàng hoặc trực tiếp nhận hàng tại kho của Trung Việt Order.";
    }
  };
}
