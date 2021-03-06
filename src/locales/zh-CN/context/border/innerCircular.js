const innerCircularBorderPara1 =
  '有时我们需要一个在内侧有圆角的容器，通常情况下我们可以使用两个 div 来实现这一效果。这非常简单，并且可以充分发挥背景的能力，譬如外边框需要纹理而非纯色时。但这意味着我们必须使用两个元素。事实上，当外边框不需要复杂的纹理时，我们可以通过一个元素实现同样的效果。方法的关键在于 box-shadow 和 outline 属性。';

const innerCircularBorderPara2 =
  '我们受益于两个事实，描边不会跟着元素的圆角走，因而显示出直角，但是 box-shadow 会。如果我们将两者叠加在一起，box-shadow 便会填补圆角与描边之间的间隙，达到我们想要的效果。';

const innerCircularBorderPara3 =
  '在左侧演示区域中，我们设置了 border-radius 与 outline 属性。圆角与描边之间地间隙可以被清楚地观察到。在填补间隙的时候我们需要注意 box-shadow 的扩张指并不一定等于描边的宽度。';

const innerCircularBorderPara4 =
  '根据勾股定理我们可以得出圆角弧圆心到描边内侧直角的距离为 (√2-1) * r，r 表示圆角半径。由于 (√2-1) < 0.5，可将 box-shadow 的扩张值简单记为圆角半径的二分之一。';

const innerCircularBorderPara5 =
  '填补间隙之后，最终效果如右图所示。样式代码为如下所示，注意 box-shadow 的颜色与扩张值。';

export default {
  'context.welcome.title': '欢迎来到 CSS Secrets',
  'context.welcome.subtitle': '本站内容为 CSS 技巧练习。内容如下：',
  'context.border.inner-circular-border.title': '边框内圆角',
  'context.border.inner-circular-border.paragraph.first': innerCircularBorderPara1,
  'context.border.inner-circular-border.paragraph.second': innerCircularBorderPara2,
  'context.border.inner-circular-border.paragraph.third': innerCircularBorderPara3,
  'context.border.inner-circular-border.paragraph.fourth': innerCircularBorderPara4,
  'context.border.inner-circular-border.paragraph.fifth': innerCircularBorderPara5,
};
