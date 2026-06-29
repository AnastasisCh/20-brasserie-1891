export type Lang = 'en' | 'el';

export interface Translations {
  nav: { about: string; menu: string; gallery: string; hours: string; findUs: string; reservations: string; };
  hero: { eyebrow: string; title1: string; title2: string; title3: string; subtitle: string; btnMenu: string; btnReserve: string; };
  about: { label: string; titlePre: string; titleEm: string; p1: string; p2: string; stat1: string; stat2: string; stat3: string; };
  menu: { label: string; titlePre: string; titleEm: string; categories: Array<{ id: string; label: string; items: Array<{ name: string; description: string; price: string }>; }>; };
  gallery: { label: string; titlePre: string; titleEm: string; alts: string[]; };
  hours: { label: string; titlePre: string; titleEm: string; intro: string; kitchenNote: string; entries: Array<{ day: string; time: string }>; moods: Array<{ time: string; title: string; description: string; accent?: boolean }>; };
  contact: { label: string; titlePre: string; titleEm: string; addressTitle: string; phoneTitle: string; phoneSubtitle: string; emailTitle: string; emailSubtitle: string; followTitle: string; followSubtitle: string; mapsLink: string; };
  cta: { titlePre: string; titleEm: string; titlePost: string; subtitle: string; btn: string; };
  footer: { tagline: string; copyright: string; };
  reservations: { label: string; titlePre: string; titleEm: string; subtitle: string; nameLabel: string; namePlaceholder: string; phoneLabel: string; phonePlaceholder: string; emailLabel: string; emailPlaceholder: string; dateLabel: string; timeLabel: string; partySizeLabel: string; partySizePlaceholder: string; notesLabel: string; notesPlaceholder: string; submitBtn: string; successTitle: string; successMsg: string; errorMsg: string; };
}

export const translations: Record<Lang, Translations> = {
  en: {
    nav: { about: 'About', menu: 'Menu', gallery: 'Gallery', hours: 'Hours', findUs: 'Find Us', reservations: 'Reserve' },
    hero: {
      eyebrow: 'Est. 1891 · Kifissia, Athens',
      title1: 'Oysters.', title2: 'Vin.', title3: 'Brasserie.',
      subtitle: 'Over a century of the French table tradition, now in the heart of Kifissia.\nBrasserie 1891 — où le temps s\'arrête.',
      btnMenu: 'See the Menu', btnReserve: 'Book a Table'
    },
    about: {
      label: 'Notre Histoire', titlePre: 'A table that has', titleEm: 'stood the test of time',
      p1: 'Since 1891, Brasserie 1891 has served the classic French brasserie tradition from its home in Kifissia. White tablecloths, zinc bar, mirrored walls — the setting has barely changed, and that is the point.',
      p2: 'We import oysters weekly from Brittany, age our steaks in-house, and maintain a wine cellar built over four generations. The menu honours French culinary heritage with Greek warmth.',
      stat1: 'Classic Dishes', stat2: 'Wine Labels', stat3: 'Years of Service'
    },
    menu: {
      label: 'La Carte', titlePre: 'The classics,', titleEm: 'perfected',
      categories: [
        { id: 'starters', label: 'Entrées', items: [
          { name: 'Huîtres Fines de Claire', description: 'Six fine de Claire oysters, shallot mignonette, rye bread',       price: '€22.00' },
          { name: 'Soupe à l\'Oignon',       description: 'Caramelised onion, Gruyère crouton, cognac-laced broth',           price: '€12.00' },
          { name: 'Steak Tartare',           description: 'Hand-cut Charolais, cornichons, capers, egg yolk, pommes allumettes', price: '€19.00' },
          { name: 'Foie Gras Poêlé',         description: 'Seared duck foie, brioche, Sauternes jelly, black pepper',          price: '€24.00' },
          { name: 'Escargots de Bourgogne',  description: 'Six Burgundy snails, garlic-parsley butter, crusty baguette',       price: '€16.00' },
          { name: 'Salade Niçoise',          description: 'Line-caught tuna, green beans, olives, egg, anchovy vinaigrette',   price: '€15.00' }
        ]},
        { id: 'plats', label: 'Plats Principaux', items: [
          { name: 'Entrecôte Grillée',       description: '300g côte de bœuf, pommes frites, sauce béarnaise, watercress',     price: '€38.00' },
          { name: 'Sole Meunière',           description: 'Dover sole, brown butter, capers, lemon, boiled potatoes, haricots', price: '€32.00' },
          { name: 'Canard à l\'Orange',      description: 'Magret de canard, Grand Marnier sauce, turnip purée, cherries',      price: '€29.00' },
          { name: 'Bouillabaisse',           description: 'Traditional Marseille fish stew, saffron, rouille, croutons',        price: '€34.00' },
          { name: 'Poulet Rôti',             description: 'Half-roasted Bresse chicken, tarragon jus, pommes sarladaises',      price: '€26.00' },
          { name: 'Crème Brûlée',            description: 'Classic vanilla bean, caramelised sugar crust, shortbread',          price: '€10.00' }
        ]},
        { id: 'vins', label: 'Vins & Bar', items: [
          { name: 'Bordeaux Rouge',          description: 'Château Margaux 2016, Médoc — silk, cedar, blackcurrant',            price: '€22.00' },
          { name: 'Burgundy Blanc',          description: 'Puligny-Montrachet, 1er Cru — mineral, hazelnut, white flowers',     price: '€18.00' },
          { name: 'Kir Royal',               description: 'Champagne, crème de cassis — a Brasserie classic since day one',     price: '€14.00' },
          { name: 'Cognac VSOP',             description: 'Rémy Martin VSOP, served in heated balloon glass',                   price: '€16.00' },
          { name: 'Pastis 51',               description: 'Served the Marseille way: cold water carafe, ice, sugar cube',       price: '€8.00' },
          { name: 'French 75',               description: 'Gin, fresh lemon, champagne — effervescent and refined',             price: '€13.00' }
        ]}
      ]
    },
    gallery: { label: 'L\'Atmosphère', titlePre: 'Step inside', titleEm: 'Brasserie 1891', alts: ['Brasserie interior', 'Steak frites plate', 'Wine cellar selection', 'Intimate dining room', 'French cuisine detail', 'Bar and aperitif hour'] },
    hours: {
      label: 'When To Visit', titlePre: 'Open for', titleEm: 'déjeuner & dîner',
      intro: 'The brasserie moves at its own pace. Arrive, settle in, and let the afternoon or evening unfold around you.',
      kitchenNote: 'Kitchen closes 30 minutes before closing',
      entries: [
        { day: 'Tuesday – Friday', time: '12:00 – 23:00' },
        { day: 'Saturday',         time: '12:00 – 00:00' },
        { day: 'Sunday',           time: '12:00 – 22:00' }
      ],
      moods: [
        { time: '12:00 – 15:30', title: 'Déjeuner',         description: 'The classic midday ritual: a glass of Chablis, steak frites, a quiet booth.' },
        { time: '18:00 – 20:00', title: 'Apéritif Hour',    description: 'Kir Royal, oysters, the gentle art of anticipation before dinner.' },
        { time: '20:00 – Close', title: 'Grande Soirée',    description: 'White tablecloths, candlelight, the unhurried pace of a real brasserie evening.', accent: true }
      ]
    },
    contact: { label: 'Find Us', titlePre: 'Come to us', titleEm: 'in Kifissia', addressTitle: 'Address', phoneTitle: 'Reservations', phoneSubtitle: 'Bookings & Enquiries', emailTitle: 'Email', emailSubtitle: 'General enquiries', followTitle: 'Follow Us', followSubtitle: 'Tag us in your moments', mapsLink: 'Open in Maps →' },
    cta: { titlePre: 'Ready for a', titleEm: 'classic French', titlePost: 'dinner?', subtitle: 'Reserve your table — the white tablecloths are pressed and the wine is open.', btn: 'Book a Table' },
    footer: { tagline: 'Où le temps s\'arrête depuis 1891', copyright: 'All rights reserved.' },
    reservations: {
      label: 'Book a Table', titlePre: 'Make a', titleEm: 'Reservation',
      subtitle: 'Reserve your table and allow us to guide you through the menu. We look forward to your visit.',
      nameLabel: 'Full Name', namePlaceholder: 'Your name',
      phoneLabel: 'Phone', phonePlaceholder: '+30 210 000 0000',
      emailLabel: 'Email', emailPlaceholder: 'your@email.com',
      dateLabel: 'Date', timeLabel: 'Time',
      partySizeLabel: 'Party Size', partySizePlaceholder: 'Number of guests',
      notesLabel: 'Special Requests', notesPlaceholder: 'Dietary restrictions, wine pairing wishes, celebrations…',
      submitBtn: 'Request Reservation',
      successTitle: 'Reservation Received!',
      successMsg: 'Merci! We will confirm your table by phone or email within a few hours.',
      errorMsg: 'Something went wrong. Please call us directly to reserve.'
    }
  },

  el: {
    nav: { about: 'Σχετικά', menu: 'Μενού', gallery: 'Γκαλερί', hours: 'Ωράριο', findUs: 'Βρείτε μας', reservations: 'Κράτηση' },
    hero: {
      eyebrow: 'Est. 1891 · Κηφισιά, Αθήνα',
      title1: 'Στρείδια.', title2: 'Vin.', title3: 'Brasserie.',
      subtitle: 'Πάνω από έναν αιώνα γαλλικής τραπεζικής παράδοσης, τώρα στην καρδιά της Κηφισιάς.\nBrasserie 1891 — où le temps s\'arrête.',
      btnMenu: 'Δείτε το Μενού', btnReserve: 'Κράτηση Τραπεζιού'
    },
    about: {
      label: 'Η Ιστορία μας', titlePre: 'Ένα τραπέζι που', titleEm: 'άντεξε στον χρόνο',
      p1: 'Από το 1891, η Brasserie 1891 σερβίρει την κλασική γαλλική παράδοση brasserie από την έδρα της στην Κηφισιά. Λευκά τραπεζομάντιλα, μπαρ από ψευδάργυρο, καθρέφτες στους τοίχους — το σκηνικό δεν έχει σχεδόν αλλάξει, και αυτό είναι το νόημα.',
      p2: 'Εισάγουμε στρείδια εβδομαδιαίως από τη Βρετάνη, ωριμάζουμε τις μπριζόλες εσωτερικά και διατηρούμε μια κάβα κρασιών που χτίστηκε σε τέσσερις γενιές.',
      stat1: 'Κλασικά Πιάτα', stat2: 'Ετικέτες Κρασιού', stat3: 'Χρόνια Υπηρεσίας'
    },
    menu: {
      label: 'La Carte', titlePre: 'Τα κλασικά,', titleEm: 'τελειοποιημένα',
      categories: [
        { id: 'starters', label: 'Entrées', items: [
          { name: 'Huîtres Fines de Claire', description: 'Έξι στρείδια, mignonette με κρεμμύδι, ψωμί σίκαλης',               price: '€22.00' },
          { name: 'Soupe à l\'Oignon',       description: 'Καραμελωμένο κρεμμύδι, κρουτόν Gruyère, ζωμός με κονιάκ',          price: '€12.00' },
          { name: 'Steak Tartare',           description: 'Χειροκοπτόμενο Charolais, cornichons, κάπαρη, κρόκος, pommes allumettes', price: '€19.00' },
          { name: 'Foie Gras Poêlé',         description: 'Ψητό foie πάπιας, brioche, ζελέ Sauternes, μαύρο πιπέρι',           price: '€24.00' },
          { name: 'Escargots de Bourgogne',  description: 'Έξι σαλιγκάρια Βουργουνδίας, βούτυρο σκόρδου-μαϊντανού, μπαγκέτα', price: '€16.00' },
          { name: 'Salade Niçoise',          description: 'Τόνος αγκίστρου, φασολάκια, ελιές, αυγό, βινεγκρέτ αντσούγιας',    price: '€15.00' }
        ]},
        { id: 'plats', label: 'Κυρίως Πιάτα', items: [
          { name: 'Εντρεκότ Ψητό',           description: '300g côte de bœuf, pommes frites, σάλτσα béarnaise, κάρδαμο νερού',   price: '€38.00' },
          { name: 'Γλώσσα Meunière',         description: 'Dover sole, βούτυρο καφέ, κάπαρη, λεμόνι, βραστές πατάτες',          price: '€32.00' },
          { name: 'Πάπια à l\'Orange',       description: 'Magret de canard, σάλτσα Grand Marnier, πουρές γογγυλιού, κεράσια',   price: '€29.00' },
          { name: 'Bouillabaisse',           description: 'Παραδοσιακή ψαρόσουπα Μασσαλίας, σαφράν, rouille, κρουτόν',          price: '€34.00' },
          { name: 'Ψητό Κοτόπουλο',         description: 'Μισό ψητό κοτόπουλο Bresse, ζωμός εστραγκόν, pommes sarladaises',     price: '€26.00' },
          { name: 'Crème Brûlée',            description: 'Κλασική βανίλια, καραμελωμένη ζάχαρη, μπισκότο βουτύρου',            price: '€10.00' }
        ]},
        { id: 'vins', label: 'Κρασί & Μπαρ', items: [
          { name: 'Bordeaux Rouge',          description: 'Château Margaux 2016, Médoc — μετάξι, κέδρος, μαύρη σταφίδα',         price: '€22.00' },
          { name: 'Burgundy Blanc',          description: 'Puligny-Montrachet, 1er Cru — ορυκτό, φουντούκι, λευκά λουλούδια',   price: '€18.00' },
          { name: 'Kir Royal',               description: 'Σαμπάνια, crème de cassis — ένα brasserie κλασικό από πάντα',        price: '€14.00' },
          { name: 'Cognac VSOP',             description: 'Rémy Martin VSOP, σερβίρεται σε ζεστό μπαλόνι',                       price: '€16.00' },
          { name: 'Pastis 51',               description: 'Με τον τρόπο της Μασσαλίας: κρύο νερό, πάγος, κύβος ζάχαρης',       price: '€8.00' },
          { name: 'French 75',               description: 'Gin, φρέσκο λεμόνι, σαμπάνια — αναβλύζον και εκλεπτυσμένο',         price: '€13.00' }
        ]}
      ]
    },
    gallery: { label: 'L\'Atmosphère', titlePre: 'Μπείτε στη', titleEm: 'Brasserie 1891', alts: ['Εσωτερικό brasserie', 'Πιάτο steak frites', 'Επιλογή κάβας', 'Οικεία τραπεζαρία', 'Λεπτομέρεια γαλλικής κουζίνας', 'Μπαρ και apéritif'] },
    hours: {
      label: 'Πότε να μας Επισκεφτείτε', titlePre: 'Ανοιχτά για', titleEm: 'déjeuner & dîner',
      intro: 'Η brasserie κινείται στον δικό της ρυθμό. Ελάτε, εγκατασταθείτε, και αφήστε το απόγευμα ή το βράδυ να ξεδιπλωθεί γύρω σας.',
      kitchenNote: 'Η κουζίνα κλείνει 30 λεπτά πριν το κλείσιμο',
      entries: [
        { day: 'Τρίτη – Παρασκευή', time: '12:00 – 23:00' },
        { day: 'Σάββατο',           time: '12:00 – 00:00' },
        { day: 'Κυριακή',           time: '12:00 – 22:00' }
      ],
      moods: [
        { time: '12:00 – 15:30', title: 'Déjeuner',           description: 'Το κλασικό μεσημεριανό τελετουργικό: ένα ποτήρι Chablis, steak frites.' },
        { time: '18:00 – 20:00', title: 'Ώρα Aperitif',       description: 'Kir Royal, στρείδια, η ήρεμη τέχνη της αναμονής πριν το δείπνο.' },
        { time: '20:00 – Κλείσιμο', title: 'Grande Soirée',   description: 'Λευκά τραπεζομάντιλα, κεριά, ο αμέριμνος ρυθμός ενός αληθινού βραδινού brasserie.', accent: true }
      ]
    },
    contact: { label: 'Βρείτε μας', titlePre: 'Ελάτε μας να βρείτε', titleEm: 'στην Κηφισιά', addressTitle: 'Διεύθυνση', phoneTitle: 'Κρατήσεις', phoneSubtitle: 'Κρατήσεις & Πληροφορίες', emailTitle: 'Email', emailSubtitle: 'Γενικές ερωτήσεις', followTitle: 'Ακολουθήστε μας', followSubtitle: 'Tagκάρετε μας στις στιγμές σας', mapsLink: 'Άνοιγμα στους Χάρτες →' },
    cta: { titlePre: 'Έτοιμοι για ένα', titleEm: 'κλασικό γαλλικό', titlePost: 'δείπνο;', subtitle: 'Κλείστε το τραπέζι σας — τα λευκά τραπεζομάντιλα είναι σιδερωμένα και το κρασί ανοιχτό.', btn: 'Κράτηση Τραπεζιού' },
    footer: { tagline: 'Où le temps s\'arrête depuis 1891', copyright: 'Με επιφύλαξη παντός δικαιώματος.' },
    reservations: {
      label: 'Κράτηση Τραπεζιού', titlePre: 'Κάντε μια', titleEm: 'Κράτηση',
      subtitle: 'Κλείστε το τραπέζι σας και αφήστε μας να σας καθοδηγήσουμε στο μενού. Ανυπομονούμε για την επίσκεψή σας.',
      nameLabel: 'Ονοματεπώνυμο', namePlaceholder: 'Το όνομά σας',
      phoneLabel: 'Τηλέφωνο', phonePlaceholder: '+30 210 000 0000',
      emailLabel: 'Email', emailPlaceholder: 'your@email.com',
      dateLabel: 'Ημερομηνία', timeLabel: 'Ώρα',
      partySizeLabel: 'Αριθμός Ατόμων', partySizePlaceholder: 'Αριθμός επισκεπτών',
      notesLabel: 'Ειδικές Απαιτήσεις', notesPlaceholder: 'Διατροφικοί περιορισμοί, επιθυμίες ζευγαρώματος κρασιών, εορτασμοί…',
      submitBtn: 'Αίτημα Κράτησης',
      successTitle: 'Η Κράτηση Ελήφθη!',
      successMsg: 'Merci! Θα επιβεβαιώσουμε το τραπέζι σας τηλεφωνικά ή μέσω email.',
      errorMsg: 'Κάτι πήγε στραβά. Παρακαλούμε καλέστε μας απευθείας για κράτηση.'
    }
  }
};
