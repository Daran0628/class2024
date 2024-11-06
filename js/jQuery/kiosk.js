const orderList = [];
let i = 0;
let n = "2,000";
let n2 = n.replace(",", "");
console.log(n2);
console.log(typeof n2);

$("#menu li").click(function () {
  // 클릭한 li의 상품명과 가격 가져오기
  let pName = $(this).find(".p_name").text();
  let pPrice = $(this).find(".p_price").text();

  const choice = {
    no: orderList.length + 1,
    name: pName,
    count: 1,
    price: pPrice,
  };
  console.log(pName, pPrice);
  orderList.push(choice);
  // console.log(orderList);

  //   printBill(pName, pPrice);
  printBill();
});

// 상품명과 가격을 계산서에 출력
// function printBill(name, price) {
//   $("#order .o_name").text(name);
//   $("#order .o_price").text(price);
// }

let sum = 0;

function printBill() {
  const printItem = orderList.length - 1;

  $(".blank").css("display", "none");

  // tr 생성
  $("#list").append(`
  <tr class="order">
   <td class="o_no">${orderList[printItem].no}</td>
   <td class="o_name">${orderList[printItem].name}</td>
   <td class="o_cnt">${orderList[printItem].count}</td>
   <td class="o_price">${orderList[printItem].price}</td>
  </tr>
  `);

  sum += parseInt(orderList[printItem].price.replace(",", ""));
  //   Number(orderList[printItem].price.replace(',',''));
  $("#pay_sum").text(`${sum.toLocaleString()} 원`);
}

$(".payment").click(function () {
  //id="input_sum" - id="pay_sum"
  // 1000원 모자람, 거스름돈 100원
  input = $("#input_sum").text();
  pay = $("#pay_sum").text();
  console.log(input, pay);

  change = parseInt(input.replace(",", "")) - parseInt(pay.replace(",", ""));

  result =
    change >= 0
      ? `${change.toLocaleString()} 원`
      : `${Math.abs(change).toLocaleString()} 원 모자람`;

  $("#change").text(result);

  //   $("#change").text(`${change.toLocaleString()} 원`);
});

let bill = 0;
function cash(c) {
  // payment를 클릭하면 input_sum에 금액 누적
  bill += c;
  $("#input_sum").text(`${bill.toLocaleString()} 원`);
}

$(".reset.menu").click(function () {
  $(".order").remove();
  $(".blank").css("display", "block");
  $("#pay_sum").text(0);
  //   $("#input_sum").text(0);
  //   $("#change").text(0);
  console.log(orderList);
});

$(".reset.all").click(function () {
  $(".order").remove();
  $(".blank").css("display", "block");

  $("#pay_sum").text(0);
  $("#input_sum").text(0);
  $("#change").text(0);
  console.log(orderList);
});
