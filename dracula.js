const from = document.querySelector(".tools");
  const to = document.querySelector(".tools-use");
  var drake = dragula([from, to], {
    copy: function (el, source) { // При перемещении элементы копируются
      return !el.classList.contains('choosed'); 
    },
    invalid: function (el, target, source, sibling) { // Не перемещать из контейнера From
      return el.classList.contains('dropped')
    },
    removeOnSpill: function () { // Удалять из контейнера To
      return true
    },
    accepts: function (el, target, source, sibling) { // Не перемещать из To в From
      if ((source == to) && (target == from)) {
        return false
      } else {
        return true
      }
    }
  });

  // Добавить класс dropped, если элемент уже был перенесен
  drake.on('drop', function (el, target, source, sibling) {
    el.classList += ' choosed'
    for (var i = 0; i < from.children.length; ++i) {
      if (from.children[i].classList.contains(el.classList[1])) {
        from.children[i].classList += ' dropped'
      }
    }
  })
  // Убирать класс dropped, если элемент был удален
  drake.on('remove', function(el) {
    const tag = el.classList[2]
    for (var i = 0; i < from.children.length; ++i) {
      if (from.children[i].classList.contains(el.classList[1])) {
        console.log('here')
        from.children[i].classList.remove('dropped')
      }
    }
  })