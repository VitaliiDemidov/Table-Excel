import { $ } from '@core/dom';

export function resizeHandler($root, event) {
  return new Promise((resolve) => {
    const $target = $(event.target);
    // const $parent = $target.parentNode;
    const $parent = $target.closest('[data-type="resizable"]');
    const coords = $parent.getCoords();
    const type = $target.data.resize;
    let value;
    const sideProp = type === 'column' ? 'bottom' : 'right';
    $target.css({
      opacity: 1,
      [sideProp]: '-2000px',
    });

    document.onmousemove = (e) => {
      if (type === 'column') {
        const delta = e.pageX - coords.right;
        value = coords.width + delta;
        $target.css({
          right: -delta + 'px',
        });
      } else {
        const delta = e.pageY - coords.bottom;
        value = coords.height + delta;
        $target.css({
          bottom: -delta + 'px',
        });
      }
    };
    document.onmouseup = () => {
      document.onmousemove = null;
      document.onmouseup = null;
      if (type === 'column') {
        $parent.css({
          width: value + 'px',
        });
        $root
          .findAll(`[data-col="${$parent.data.col}"]`)
          .forEach((el) => (el.style.width = value + 'px'));
      } else {
        $parent.css({
          height: value + 'px',
        });
      }
      resolve({
        value,
        id: type === 'column' ? $parent.data.col : null,
      });
      $target.css({
        opacity: 0,
        bottom: 0,
        right: 0,
      });
    };
  });
}
