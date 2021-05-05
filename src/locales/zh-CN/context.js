const innerCircularBorderPara1 =
  '有时我们需要一个在内侧有圆角的容器，通常情况下我们可以使用两个 div 来实现这一效果。这非常简单，并且可以充分发挥背景的能力，譬如外边框需要纹理而非纯色时。但这意味着我们必须使用两个元素。事实上，当外边框不需要复杂的纹理时，我们可以通过一个元素实现同样的效果。方法的关键在于 box-shadow 和 outline 属性。';

const innerCircularBorderPara2 =
  '我们受益于两个事实，描边不会跟着元素的圆角走，因而显示出直角，但是 box-shadow 会。如果我们将两者叠加在一起，box-shadow 便会填补圆角与描边之间的间隙，达到我们想要的效果';

export default {
  'context.welcome.title': '欢迎来到 CSS Secrets',
  'context.welcome.subtitle': '本站内容为 CSS 技巧练习。内容如下：',
  'context.border.inner-circular-border.title': '边框内圆角',
  'context.border.inner-circular-border.paragraph.first': innerCircularBorderPara1,
  'context.border.inner-circular-border.paragraph.second': innerCircularBorderPara2,
};
