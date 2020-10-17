import { FaPepperHot as icon } from 'react-icons/fa';

export default {
  name: 'topping',
  title: 'Toppings',
  type: 'document',
  icon,
  fields: [
    {
      name: 'name',
      title: 'Topping Name',
      type: 'string',
      description: 'Name of the Topping',
    },
    {
      name: 'vegeterian',
      title: 'Vegeterian',
      type: 'boolean',
      options: {
        layout: 'checkbox',
      },
    },
  ],
  preview: {
    select: {
      name: 'name',
      vegeterian: 'vegeterian',
    },
    prepare: ({ name, vegeterian }) => ({
      title: `${name} ${vegeterian ? '🌱' : ''} `,
    }),
  },
};
