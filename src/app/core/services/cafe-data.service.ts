import { Injectable } from '@angular/core';
import {
  MenuCategory,
  HoursEntry,
  MoodCard,
  GalleryImage,
  ContactInfo
} from '../models/cafe.models';

@Injectable({ providedIn: 'root' })
export class CafeDataService {

  readonly contact: ContactInfo = {
    address: 'Kolokotroni 12, Kifissia',
    addressLine2: 'Athens, 14562, Greece',
    phone: '+30 210 623 4455',
    phoneHref: 'tel:+302106234455',
    email: 'reservations@brasserie1891.gr',
    mapsUrl: 'https://maps.google.com/?q=Kolokotroni+12+Kifissia+Athens+Greece',
    mapEmbed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3142.312345!2d23.8123!3d38.0734!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14a1be5f8d7c5d5b%3A0x0!2sKifissia%2C+Athens%2C+Greece!5e0!3m2!1sen!2sgr!4v1700000000005!5m2!1sen!2sgr'
  };

  readonly menuCategories: MenuCategory[] = [
    {
      id: 'starters',
      label: 'Entrées',
      items: [
        { name: 'Huîtres Fines de Claire', description: 'Six fine de Claire oysters, shallot mignonette, rye bread',       price: '€22.00' },
        { name: 'Soupe à l\'Oignon',       description: 'Caramelised onion, Gruyère crouton, cognac-laced broth',           price: '€12.00' },
        { name: 'Steak Tartare',           description: 'Hand-cut Charolais, cornichons, capers, egg yolk, pommes allumettes', price: '€19.00' },
        { name: 'Foie Gras Poêlé',        description: 'Seared duck foie, brioche, Sauternes jelly, black pepper',          price: '€24.00' },
        { name: 'Escargots de Bourgogne', description: 'Six Burgundy snails, garlic-parsley butter, crusty baguette',        price: '€16.00' },
        { name: 'Salade Niçoise',         description: 'Line-caught tuna, green beans, olives, egg, anchovy vinaigrette',   price: '€15.00' }
      ]
    },
    {
      id: 'plats',
      label: 'Plats Principaux',
      items: [
        { name: 'Entrecôte Grillée',      description: '300g côte de bœuf, pommes frites, sauce béarnaise, watercress',     price: '€38.00' },
        { name: 'Sole Meunière',          description: 'Dover sole, brown butter, capers, lemon, boiled potatoes, haricots', price: '€32.00' },
        { name: 'Canard à l\'Orange',     description: 'Magret de canard, Grand Marnier sauce, turnip purée, cherries',      price: '€29.00' },
        { name: 'Bouillabaisse',          description: 'Traditional Marseille fish stew, saffron, rouille, croutons',        price: '€34.00' },
        { name: 'Poulet Rôti',            description: 'Half-roasted Bresse chicken, tarragon jus, pommes sarladaises',      price: '€26.00' },
        { name: 'Crème Brûlée',           description: 'Classic vanilla bean, caramelised sugar crust, shortbread',          price: '€10.00' }
      ]
    },
    {
      id: 'vins',
      label: 'Vins & Bar',
      items: [
        { name: 'Bordeaux Rouge',         description: 'Château Margaux 2016, Médoc — silk, cedar, blackcurrant',            price: '€22.00' },
        { name: 'Burgundy Blanc',         description: 'Puligny-Montrachet, 1er Cru — mineral, hazelnut, white flowers',     price: '€18.00' },
        { name: 'Kir Royal',              description: 'Champagne, crème de cassis — a Brasserie classic since day one',     price: '€14.00' },
        { name: 'Cognac VSOP',            description: 'Rémy Martin VSOP, served in heated balloon glass',                   price: '€16.00' },
        { name: 'Pastis 51',              description: 'Served the Marseille way: cold water carafe, ice, sugar cube',       price: '€8.00' },
        { name: 'French 75',             description: 'Gin, fresh lemon, champagne — effervescent and refined',             price: '€13.00' }
      ]
    }
  ];

  readonly hours: HoursEntry[] = [
    { day: 'Tuesday – Friday', time: '12:00 – 23:00' },
    { day: 'Saturday',         time: '12:00 – 00:00' },
    { day: 'Sunday',           time: '12:00 – 22:00' }
  ];

  readonly moodCards: MoodCard[] = [
    { time: '12:00 – 15:30', title: 'Déjeuner',         description: 'The classic midday ritual: a glass of Chablis, steak frites, a quiet booth.' },
    { time: '18:00 – 20:00', title: 'Apéritif Hour',    description: 'Kir Royal, oysters, the gentle art of anticipation before dinner.' },
    { time: '20:00 – Close', title: 'Grande Soirée',    description: 'White tablecloths, candlelight, the unhurried pace of a real brasserie evening.', accent: true }
  ];

  readonly gallery: GalleryImage[] = [
    { url: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&q=80', alt: 'Brasserie interior',       tall: true },
    { url: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=500&q=80',    alt: 'Steak frites plate'                  },
    { url: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=500&q=80', alt: 'Wine cellar selection'                },
    { url: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?w=700&q=80',    alt: 'Intimate dining room',    wide: true  },
    { url: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=500&q=80', alt: 'French cuisine detail'               },
    { url: 'https://images.unsplash.com/photo-1470337458703-46ad1756a187?w=500&q=80', alt: 'Bar and aperitif hour'               }
  ];
}
