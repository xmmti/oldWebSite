let RspJSON;
fetch('conan.json')
  .then(response => response.json())
  .then(Data => do_it(Data))
function Make_card(title_ep, url_img, url_ep) {
    let title_regex = (/^(\d+)(.*?)$/gm).exec(title_ep)
    var isAndroid = /(android)/i.test(navigator.userAgent);
if (isAndroid){
    url_ep = `intent:${url_ep}#Intent;end`
}
    if (url_img === undefined){
        url_img = "https://www.desktopbackground.org/download/o/2013/03/22/548716_detective-conan-characters-wallpapers-wallpaper_1280x720_h.jpg"
    }
    let Card_ = `<!-- Cards Start -->
    <div class="col-12 mt-3">
          <a href="${url_ep}" target="_blank">
          <div class="card cardmode">
              <div class="card-horizontal">
                  <div class="img-square-wrapper">
                      <img src="${url_img}" alt="${title_regex[2]}">
                  </div>
                  <div class="card-body">
                      <h6 class="card-title text-right">${title_regex[2]}</h6>
                  </div>
              </div>
              <div class="card-footer">
                  <small class="text-muted">الحلقة رقم: ${Math.floor(title_regex[1])} -</small>
              </div>
          </div>
      </div></a>
      <!-- Cards End -->`;
      return Card_
}
function do_it(data) {
    RspJSON = data;
    data.forEach(i => {
        i["episodes"].forEach(i_ =>{
            add_card(i_["title"],i_["image"], i_["sources"][0]["url"])
        })
    });
    Cheack_()
}
function add_card(the_title, the_img, the_link) {
    document.querySelector(".row").insertAdjacentHTML('beforeend', Make_card(the_title, the_img, the_link));
}
document.querySelectorAll("a.dropdown-item").forEach(function (item, idx) {
    
    item.addEventListener('click', function () {
        document.querySelector(".row").innerHTML = "";
        if (idx <= 9) {
        document.querySelector("a.nav-item").innerHTML = RspJSON[idx]["title"]
        RspJSON[idx]["episodes"].forEach(i_ =>{
            add_card(i_["title"],i_["image"], i_["sources"][0]["url"])})
        }
        else{
        document.querySelector("a.nav-item").innerHTML = "المواسم"
           do_it(RspJSON)
        }
        Cheack_();
    });
});
