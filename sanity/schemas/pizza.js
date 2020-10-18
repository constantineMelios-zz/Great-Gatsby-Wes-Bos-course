import { MdLocalPizza as icon } from 'react-icons/md';
import PriceInput from '../components/PriceInput';

export default {
  name: 'pizza',
  title: 'Pizzas',
  type: 'document',
  icon,
  fields: [
    {
      name: 'name',
      title: 'Pizza Name',
      type: 'string',
      description: 'Name of the Pizza',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 100,
      },
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'price',
      title: 'Price',
      type: 'number',
      description: 'Price of the Pizza in cents',
      validation: (Rule) => Rule.min(1000),
      inputComponent: PriceInput,
    },
    {
      name: 'toppings',
      title: 'Toppings',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'topping' }] }],
    },
  ],
  preview: {
    select: {
      title: 'name',
      media: 'image',
      veg0: 'toppings.0.vegeterian',
      veg1: 'toppings.1.vegeterian',
      veg2: 'toppings.2.vegeterian',
      veg3: 'toppings.3.vegeterian',
      topping0: 'toppings.0.name',
      topping1: 'toppings.1.name',
      topping2: 'toppings.2.name',
      topping3: 'toppings.3.name',
    },
    prepare: ({ title, media, veg0, veg1, veg2, veg3, ...toppings }) => {
      const vegs = [veg0, veg1, veg2, veg3].filter((veg) => veg !== undefined);
      const isVegeterian = vegs.reduce((response, topping) => topping, true);
      const tops = Object.values(toppings).filter(Boolean);
      return {
        title: `${title} ${isVegeterian ? '🌱' : ''} `,
        media,
        subtitle: tops.join(', '),
      };
    },
  },
};
