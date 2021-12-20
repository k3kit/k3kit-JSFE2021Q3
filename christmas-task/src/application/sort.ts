import { Array2, Card, cardContainer } from "..";

const sortSelect = document.querySelector('.sort-select') as HTMLInputElement;
export function SortSel() {
  sortSelect.addEventListener("change", function () {
    switch (this.value) {
      case "sort-name-max":{
        const sorted = Array2.sort(function (a, b) {
          const NameA = a.name.toLowerCase();
          const NameB = b.name.toLowerCase();
          if (NameA < NameB)
            return -1
          if (NameA > NameB)
            return 1
          return 0
        });
        Card(sorted)}
        break;
      case "sort-name-min":{
        const sorted = Array2.sort(function (a, b) {
          const NameA = a.name.toLowerCase();
          const NameB = b.name.toLowerCase();
          if (NameA < NameB)
            return -1
          if (NameA > NameB)
            return 1
          return 0
        }).reverse();
        Card(sorted)
      }
        break;
      case "sort-count-min":{
        cardContainer.innerHTML = '';
        const sorted = Array2.sort(function (a, b) { return a.count - b.count })
        Card(sorted)
      }
        break;
      case "sort-count-max":{
        cardContainer.innerHTML = '';
        const sorted = Array2.sort(function (a, b) { return b.count - a.count })
        Card(sorted)
      }
        break
    }
  })
}