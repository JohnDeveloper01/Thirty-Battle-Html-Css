const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
let tags = ["NodeJS", "ReactJS"];
const contentList = $(".content-list");
const inputContent = $(".content-ip");
const btnRemove = $(".remove-all");
const iconsRemove = $(".icons");
function renderContent() {
  let html = "";
  html += tags.map((item, index) => {
    return `<li>
          ${item}
            <span class="icons" onClick = "removeTag(${index})">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="#fff"
              >
                <path
                  fill-rule="evenodd"
                  d="M6.707 4.879A3 3 0 018.828 4H15a3 3 0 013 3v6a3 3 0 01-3 3H8.828a3 3 0 01-2.12-.879l-4.415-4.414a1 1 0 010-1.414l4.414-4.414zm4 2.414a1 1 0 00-1.414 1.414L10.586 10l-1.293 1.293a1 1 0 101.414 1.414L12 11.414l1.293 1.293a1 1 0 001.414-1.414L13.414 10l1.293-1.293a1 1 0 00-1.414-1.414L12 8.586l-1.293-1.293z"
                  clip-rule="evenodd"
                />
              </svg>
            </span>
          </li>`;
  });
  contentList.innerHTML = html;
}
// init
(function init() {
  renderContent();
  inputContent.focus();
})();
// adđ tags
function addTag() {
  const isFocus = inputContent === document.activeElement;
  if (isFocus && inputContent.value !== "") {
    tags.push(inputContent.value);
    renderContent();
    inputContent.value = "";
  } else {
    return;
  }
}

inputContent.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    addTag();
  } else {
    return;
  }
});
// remove all
btnRemove.addEventListener("click", () => {
  tags = [];
  renderContent();
});
// remove one element
function removeTag(indexTag) {
  tags = tags.filter((item, index) => {
    return index !== indexTag;
  });
  renderContent();
}
