const innerCircularBorderPara1 =
  'Sometimes it is necessary to create a container with circular in the inner side. Generally it can be implemented with two elements. This is a easy way, and the capability of background can be utilized like texture outline required. However, when the outline is simple, two elements is redundancy. The same effect could be realized through one element and ingenious css. The key is box-shadow and outline.';

const innerCircularBorderPara2 =
  'We get benefits from two facts. The outline does not go along the circular while box-shadow does. Thus outline can illustrate a right angle. If put the two effects together, box-shadow can fill the crevice to get what we want.';

const innerCircularBorderPara3 =
  'In the figure left side, The border-radius and outline are set. It is clear to see the crevice. When we try to fill the crevice with box-shadow, we should notice that the size of spread is not the same with the radius of circular.';

const innerCircularBorderPara4 =
  'According to the Pythagorean theorem, we can learn the distance from inner angle to the center of circular is (√2-1) * radius. As (√2-1) < 0.5, we can set box-shadow spread as 0.5 * radius.';

const innerCircularBorderPara5 =
  'After the crevice is filled, the final effect can be seen on the right hand. The code of css is provided below. Notice the color and spread of box-shadow.';

export default {
  'context.welcome.title': 'Welcome to CSS Secrets',
  'context.welcome.subtitle':
    'This website is a practice for CSS skills. The context table is below:',
  'context.border.inner-circular-border.title': 'Inner Circular Border',
  'context.border.inner-circular-border.paragraph.first': innerCircularBorderPara1,
  'context.border.inner-circular-border.paragraph.second': innerCircularBorderPara2,
  'context.border.inner-circular-border.paragraph.third': innerCircularBorderPara3,
  'context.border.inner-circular-border.paragraph.fourth': innerCircularBorderPara4,
  'context.border.inner-circular-border.paragraph.fifth': innerCircularBorderPara5,
};
