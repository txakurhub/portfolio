import anime from "animejs";
import Letterize from "letterizejs";

export const letterAnim = () => {
  var elements = document.getElementById("home");
  const test = new Letterize({
    targets: elements,
  });
console.log(elements);
  const animation = anime.timeline({
    targets: test.listAll,
    delay: anime.stagger(100, {
      grid: [test.list[0].length, test.list.length],
      from: "center",
    }),
    loop: true,
  });
  animation
    .add({
      scale: 0.3,
    })
    .add({
      letterSpacing: "10px",
    })
    .add({
      scale: 1,
    })
    .add({
      letterSpacing: "6px",
    });
};
