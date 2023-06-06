(() => {
  const $doc = document;
  const $tab = $doc.getElementById("js-tab");
  const $nav = $tab.querySelectorAll("[data-nav]");
  const $content = $tab.querySelectorAll("[data-content]");
  const ACTIVE_CLASS = "is-active";
  const navLen = $nav.length;

  //初期化
  const init = () => {
    $content[0].style.display = "block";
  };
  init();

  //クリックしたら起こるイベンと
  const handleClick = (e) => {
    e.preventDefault();

    //クリックされたnavとそのdataを所得
    const $this = e.target; //今クリックした要素をピンポイントで持って来れる
    const targetVal = $this.dataset.nav; //そのDOM要素のデータ属性を取る(今回はnav)

    //対象外のnav、content全て一旦リセットする
    let index = 0;
    while (index < navLen) {
      $content[index].style.display = "none";
      $nav[index].classList.remove(ACTIVE_CLASS);
      index++;
    }

    //対象のコンテンツをアクティブ化する
    $tab.querySelectorAll(
      '[data-content="' + targetVal + '"]'
    )[0].style.display = "block";
    $nav[targetVal].classList.add(ACTIVE_CLASS);
  };
  //全NAV要素に対して関数を適応・発火
  let index = 0;
  while (index < navLen) {
    $nav[index].addEventListener("click", (e) => handleClick(e));
    index++;
  }

  console.log("$nav", $nav);
})();
