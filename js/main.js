$(document).ready(function () {
  AOS.init();

  const btn = $(".top-btn");
  $(window).scroll(function () {
    if ($(window).scrollTop() > 300) {
      btn.fadeIn();
    } else {
      btn.fadeOut();
    }
  });
  btn.on("click", function (e) {
    e.preventDefault();
    $("html,body").animate(
      {
        scrollTop: 0,
      },
      100
    );
  });

  var dataShow = 0;

  $(".plus-btn span").on("click", function () {
    if (dataShow == 0) {
      $(".sec6-item-box").eq(1).addClass("active");
      dataShow++;
    } else if (dataShow == 1) {
      $(".sec6-item-box").eq(2).addClass("active");
      $(".plus-btn span").addClass("active");
      dataShow++;
    } else if (dataShow == 2) {
      $(".sec6-item-box").eq(1).removeClass("active");
      $(".sec6-item-box").eq(2).removeClass("active");
      $(".plus-btn span").removeClass("active");
      dataShow = 0;
    }
  });

  var products = [
    {
      id: "1",
      name: "하이브리드 2.0 트월케이스",
      price: "20,000",
      image: "./image/data1.jpeg",
    },
    {
      id: "2",
      name: "하이브리드 2.0 실리콘 케이스",
      price: "8,000",
      image: "./image/data2.jpeg",
    },
    {
      id: "3",
      name: "하이브리드 2.0 투명 케이스",
      price: "7,000",
      image: "./image/data3.jpeg",
    },
    {
      id: "4",
      name: "하이브리드 2.0 패브릭 파우치",
      price: "40,000",
      image: "./image/data4.jpeg",
    },
    {
      id: "5",
      name: "플러스 이동형 케이스",
      price: "18,000",
      image: "./image/data5.jpeg",
    },
    {
      id: "6",
      name: "미니 목걸이 케이스",
      price: "12,000",
      image: "./image/data6.jpeg",
    },
    {
      id: "7",
      name: "플러스 스트랩 케이스",
      price: "18,000",
      image: "./image/data7.jpeg",
    },
    {
      id: "8",
      name: "하이브리드 2.0 패브릭 케이스",
      price: "16,000",
      image: "./image/data8.jpeg",
    },
    {
      id: "9",
      name: "하이브리드 2.0 트월케이스",
      price: "20,000",
      image: "./image/data1.jpeg",
    },
  ];

  products.forEach((a, i) => {
    var item = `<img src="${products[i].image}" alt="">
      <div class="sec6-txt">
        <p class="pro-name">${products[i].name}</p>
        <p class="pro-price">${products[i].price}원</p>
      </div>`;

    $(".sec6-item").eq(i).append(item);
  });

      $('#hamburger').click(function () {
        $(this).toggleClass('active');
        $(".menu-box").toggleClass("active");
        $(".icon-box").toggleClass("active");
        $('.open').toggleClass("active");
        $(".close").toggleClass("active");
      });
    


});
