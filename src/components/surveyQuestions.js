// 🚉 GARE DE BULLY-LES-MINES / GRENAY - ENQUÊTE DE MOBILITÉ MULTIMODALE
// Based on the French mobility survey questionnaire for the Pôle d'Échanges Multimodal

export const templateSurveyQuestions = [

    // 🎯 Q1 - Raison de présence en gare
    {
        id: "Q1",
        text: "Quelle est la raison de votre présence en gare ?",
        type: 'singleChoice',
        note: "L'enquêteur peut pré-remplir directement cette question sans avoir à la poser. Cibler les montants en priorité.",
        options: [
            { id: 1, text: "Je vais prendre le train", next: "Q2" },
            { id: 2, text: "Je viens de descendre du train", next: "end" }, // Fin de l'enquête pour les descendants
            { id: 3, text: "J'accompagne des voyageurs qui partent / J'attends des voyageurs qui arrivent", next: "Q9" },
            { id: 4, text: "Autre raison (achat billet, commerces en gare…)", next: "Q9" }
        ]
    },

    // === MONTANTS (Q1 = 1) ===

    // 📍 Q2 - Origine du déplacement
    {
        id: "Q2",
        text: "Quelle est l'origine de votre déplacement ? D'où êtes-vous parti pour arriver à la gare ?",
        type: 'singleChoice',
        options: [
            { id: 1, text: "Bully-les-Mines", next: "Q2_rue" },
            { id: 2, text: "Grenay", next: "Q2_rue" },
            { id: 3, text: "Mazingarbe", next: "Q2_rue" },
            { id: 4, text: "Autre commune", next: "Q2_Autre" }
        ]
    },

    // 🏙️ Q2 - Autre commune
    {
        id: "Q2_Autre",
        text: "Préciser le nom de la commune :",
        type: 'commune',
        next: "Q3"
    },

    // 🏘️ Q2_rue - Nom de rue
    {
        id: "Q2_rue",
        text: "De quelle rue venez-vous ?",
        type: 'street',
        note: "Nom de la rue où se situe le point d'origine du déplacement. Garder une option 'Autre' au cas où le répondant ne saurait pas ou ne voudrait pas répondre (écrire l'indication donnée : Nord, Sud, centre-ville… ou 'NSP').",
        next: "Q3"
    },

    // 🚗 Q3 - Mode de transport utilisé pour se rendre à la gare
    {
        id: "Q3",
        text: "Quel mode de transport avez-vous utilisé pour vous rendre à la gare ?",
        type: 'singleChoice',
        options: [
            { id: 1, text: "À pied", next: "Q4" },
            { id: 2, text: "En voiture - en tant que conducteur", next: "Q3a1" },
            { id: 3, text: "En voiture - en tant que passager", next: "Q4" },
            { id: 4, text: "En covoiturage avec un autre usager du train", next: "Q4" },
            { id: 5, text: "En transport en commun", next: "Q3b" },
            { id: 6, text: "À vélo", next: "Q3c" },
            { id: 7, text: "En trottinette", next: "Q3c" },
            { id: 8, text: "En Taxi/VTC", next: "Q4" },
            { id: 9, text: "En 2 roues motorisé (Moto, scooter...)", next: "Q3a1" },
            { id: 10, text: "En train - je fais une correspondance", next: "Q4" },
            { id: 11, text: "Autre", next: "Q3_Autre" }
        ]
    },

    // 📝 Q3 - Autre mode de transport
    {
        id: "Q3_Autre",
        text: "Préciser :",
        type: 'freeText',
        freeTextPlaceholder: "e.g., skateboard, trottinette électrique en location...",
        next: "Q4"
    },

    // 🅿️ Q3a1 - Lieu de stationnement (conducteurs et 2 roues motorisés)
    {
        id: "Q3a1",
        text: "Où avez-vous stationné votre véhicule ?",
        type: 'singleChoice',
        image: '/plan.png',
        note: "Utiliser le plan pour aider l'enquêté à répondre si besoin.",
        options: [
            { id: 1, text: "Dans le parking gare parvis", next: "Q3a2" },
            { id: 2, text: "Dans le parking du restaurant « A l'Enfant du Pays »", next: "Q3a2" },
            { id: 3, text: "Sur une autre place en voirie ou parking au nord de la gare", next: "Q3a2" },
            { id: 4, text: "Sur une autre place en voirie ou parking au sud de la gare", next: "Q3a2" },
            { id: 5, text: "Sur un stationnement privé (box ou place de parking privée)", next: "Q3a2" }
        ]
    },

    // ⏱️ Q3a2 - Durée de stationnement (suit directement Q3a1)
    {
        id: "Q3a2",
        text: "Combien de temps allez-vous laisser votre voiture stationnée ?",
        type: 'singleChoice',
        options: [
            { id: 1, text: "Moins de 2 heures", next: "Q4" },
            { id: 2, text: "Une demi-journée (entre 2 et 4 heures)", next: "Q4" },
            { id: 3, text: "Une journée entière (entre 4h et 12h)", next: "Q4" },
            { id: 4, text: "2 à 3 jours", next: "Q4" },
            { id: 5, text: "3 à 6 jours", next: "Q4" },
            { id: 6, text: "1 semaine ou plus", next: "Q4" }
        ]
    },

    // 🚌 Q3b - Ligne de bus/car utilisée (Q3 = 5)
    {
        id: "Q3b",
        text: "Quelle ligne de bus/car avez-vous emprunté ?",
        type: 'singleChoice',
        note: "Menu déroulant",
        options: [
            { id: 1, text: "Ligne 11", next: "Q4" },
            { id: 2, text: "Ligne 18", next: "Q4" },
            { id: 3, text: "Ligne 55", next: "Q4" },
            { id: 4, text: "Transport à la demande Allobus", next: "Q4" },
            { id: 5, text: "Car scolaire", next: "Q4" },
            { id: 6, text: "Autre", next: "Q3b_Autre" }
        ]
    },

    // 📝 Q3b - Autre ligne de bus
    {
        id: "Q3b_Autre",
        text: "Préciser :",
        type: 'freeText',
        freeTextPlaceholder: "e.g., car interurbain, ligne régionale...",
        next: "Q4"
    },

    // 🚲 Q3c - Stationnement vélo/trottinette (Q3 = 6 ou 7)
    {
        id: "Q3c",
        text: "Où avez-vous stationné votre vélo/trottinette ?",
        type: 'singleChoice',
        options: [
            { id: 1, text: "Dans l'abri vélo sécurisé sur le parvis", next: "Q4" },
            { id: 2, text: "Je le transporte avec moi dans le train", next: "Q4" },
            { id: 3, text: "Autre", next: "Q3c_Autre" }
        ]
    },

    // 📝 Q3c - Autre stationnement vélo
    {
        id: "Q3c_Autre",
        text: "Préciser :",
        type: 'freeText',
        freeTextPlaceholder: "Décrire l'emplacement...",
        next: "Q4"
    },

    // 🚉 Q4 - Gare de destination finale
    {
        id: "Q4",
        text: "Quelle sera votre gare de destination finale ?",
        type: 'singleChoice',
        options: [
            { id: 1, text: "Lille Flandres", next: "Q5" },
            { id: 2, text: "Lens", next: "Q5" },
            { id: 3, text: "Douai", next: "Q5" },
            { id: 4, text: "Arras", next: "Q5" },
            { id: 5, text: "Valenciennes", next: "Q5" },
            { id: 6, text: "Béthune", next: "Q5" },
            { id: 7, text: "Hazebrouck", next: "Q5" },
            { id: 8, text: "Tourcoing", next: "Q5" },
            { id: 9, text: "Roubaix", next: "Q5" },
            { id: 10, text: "Paris Nord", next: "Q5" },
            { id: 11, text: "Autre", next: "Q4_Autre" }
        ]
    },

    // 🚄 Q4 - Autre gare de destination
    {
        id: "Q4_Autre",
        text: "Préciser :",
        type: 'gare',
        next: "Q5"
    },

    // 🎯 Q5 - Motif du déplacement en train
    {
        id: "Q5",
        text: "Quel est le motif de votre déplacement en train ?",
        type: 'singleChoice',
        options: [
            { id: 1, text: "Je me rends sur mon lieu de travail", next: "Q6" },
            { id: 2, text: "Je me rends sur mon lieu d'études", next: "Q6" },
            { id: 3, text: "Je rentre à mon domicile principal", next: "Q5a" },
            { id: 4, text: "Déplacement professionnel", next: "Q6" },
            { id: 5, text: "Loisirs, tourisme", next: "Q6" },
            { id: 6, text: "Autres", next: "Q5_Autre" }
        ]
    },

    // 📝 Q5 - Autre motif
    {
        id: "Q5_Autre",
        text: "Préciser (Achats, démarches administratives, RDV médical...) :",
        type: 'freeText',
        freeTextPlaceholder: "Décrire le motif de votre déplacement...",
        next: "Q6"
    },

    // 🏠 Q5a - Raison de la venue à Bully-les-Mines / Grenay (pour ceux qui rentrent chez eux)
    {
        id: "Q5a",
        text: "Quel était la raison de votre venue à Bully-les-Mines / Grenay ?",
        type: 'singleChoice',
        options: [
            { id: 1, text: "Travail", next: "Q6" },
            { id: 2, text: "Études", next: "Q6" },
            { id: 3, text: "Déplacement professionnel", next: "Q6" },
            { id: 4, text: "Loisirs, tourisme", next: "Q6" },
            { id: 5, text: "Autres (Achats, démarches administratives, RDV médical, visite...)", next: "Q5a_autre" }
        ]
    },

    {
        id: "Q5a_autre",
        text: "Préciser (Achats, démarches administratives, RDV médical...) :",
        type: 'freeText',
        freeTextPlaceholder: "Décrire le motif de votre déplacement...",
        next: "Q6"
    },

    // 📅 Q6 - Fréquence de prise du train dans cette gare
    {
        id: "Q6",
        text: "À quelle fréquence prenez-vous un train dans cette gare ?",
        type: 'singleChoice',
        options: [
            { id: 1, text: "Tous les jours", next: "Q7" },
            { id: 2, text: "Au moins 3 jours par semaine", next: "Q7" },
            { id: 3, text: "Au moins une fois par semaine", next: "Q7" },
            { id: 4, text: "Au moins une fois par mois", next: "Q7" },
            { id: 5, text: "Exceptionnellement", next: "Q7" }
        ]
    },

    // 👤 Q7 - Tranche d'âge
    {
        id: "Q7",
        text: "Quelle est votre tranche d'âge ?",
        type: 'singleChoice',
        options: [
            { id: 1, text: "Moins de 18 ans", next: "Q8" },
            { id: 2, text: "18 à 25 ans", next: "Q8" },
            { id: 3, text: "25 à 40 ans", next: "Q8" },
            { id: 4, text: "40 à 60 ans", next: "Q8" },
            { id: 5, text: "Plus de 60 ans", next: "Q8" }
        ]
    },

    // 🎟️ Q8 - Gratuité TER TADAO (montants uniquement)
    {
        id: "Q8",
        text: "La gratuité du TER sur le périmètre du réseau TADAO a-t-elle impactée vos déplacements ? (Fréquence, rabattement, motif)",
        type: 'singleChoice',
        note: "Question spéciale pour les gares du périmètre TADAO.",
        options: [
            { id: 1, text: "Oui", next: "Q8a" },
            { id: 2, text: "Non", next: "Q8b" }
        ]
    },

    // 💬 Q8a - Dans quelle mesure ? (si Q8 = 1)
    {
        id: "Q8a",
        text: "Dans quelle mesure ?",
        type: 'multipleChoice',
        note: "Plusieurs réponses possibles. Question spéciale pour les gares du périmètre TADAO.",
        options: [
            { id: 1, text: "Je prends davantage le train pour mes déplacements professionnels" },
            { id: 2, text: "Je prends davantage le train pour mes déplacements personnels" },
            { id: 3, text: "Je fais davantage de correspondance bus-train" },
            { id: 4, text: "Autre", next_if_selected: "Q8a_Autre" }
        ],
        next: "Q8b"
    },

    // 📝 Q8a - Autre précision
    {
        id: "Q8a_Autre",
        text: "Préciser :",
        type: 'freeText',
        freeTextPlaceholder: "Noter en clair les mots clés...",
        next: "Q8b"
    },

    // 💡 Q8b - Suggestions d'amélioration (montants)
    {
        id: "Q8b",
        text: "Selon vous, que faudrait-il faire en priorité pour améliorer les conditions d'accès à cette gare ?",
        type: 'freeText',
        freeTextPlaceholder: "Noter seulement les mots clés",
        next: "end"
    },

    // === NON-VOYAGEURS (Q1 = 3 ou 4) ===
    // Accompagnateurs, personnes venant chercher des voyageurs, achat billet, commerces en gare...

    // 📍 Q9 (Non-voyageurs) - Origine du déplacement
    {
        id: "Q9",
        text: "Quelle est l'origine de votre déplacement ? D'où êtes-vous parti pour arriver à la gare ?",
        type: 'singleChoice',
        options: [
            { id: 1, text: "Bully-les-Mines", next: "Q10" },
            { id: 2, text: "Grenay", next: "Q10" },
            { id: 3, text: "Mazingarbe", next: "Q10" },
            { id: 4, text: "Autre commune", next: "Q9_Autre" }
        ]
    },

    // 🏙️ Q9 - Autre commune (non-voyageurs)
    {
        id: "Q9_Autre",
        text: "Préciser le nom de la commune :",
        type: 'commune',
        next: "Q11"
    },

    // 🏘️ Q10 (Non-voyageurs) - Nom de rue
    {
        id: "Q10",
        text: "De quelle rue venez-vous ?",
        type: 'street',
        note: "Nom de la rue où se situe le point d'origine du déplacement. Garder une option 'Autre' au cas où le répondant ne saurait pas ou ne voudrait pas répondre (écrire l'indication donnée : Nord, Sud, centre-ville… ou 'NSP').",
        next: "Q11"
    },

    // 🚗 Q11 (Non-voyageurs) - Mode de transport utilisé pour se rendre à la gare
    {
        id: "Q11",
        text: "Quel mode de transport avez-vous utilisé pour vous rendre à la gare ?",
        type: 'singleChoice',
        options: [
            { id: 1, text: "À pied", next: "Q12" },
            { id: 2, text: "En voiture - en tant que conducteur", next: "Q11a" },
            { id: 3, text: "En voiture - en tant que passager", next: "Q12" },
            { id: 4, text: "En covoiturage avec un autre usager du train", next: "Q12" },
            { id: 5, text: "En transport en commun", next: "Q12" },
            { id: 6, text: "À vélo", next: "Q12" },
            { id: 7, text: "En trottinette", next: "Q12" },
            { id: 8, text: "En Taxi/VTC", next: "Q12" },
            { id: 9, text: "En 2 roues motorisé (Moto, scooter...)", next: "Q11a" },
            { id: 10, text: "Autre", next: "Q11_Autre" }
        ]
    },

    // 📝 Q11 - Autre mode de transport (non-voyageurs)
    {
        id: "Q11_Autre",
        text: "Préciser :",
        type: 'freeText',
        freeTextPlaceholder: "e.g., skateboard, trottinette électrique en location...",
        next: "Q12"
    },

    // 🅿️ Q11a (Non-voyageurs) - Lieu de stationnement (conducteurs et 2 roues motorisés)
    {
        id: "Q11a",
        text: "Où avez-vous stationné votre véhicule ?",
        type: 'singleChoice',
        image: '/plan.png',
        note: "Utiliser le plan pour aider l'enquêté à répondre si besoin. L'option 'Sur un arceau vélo' est réservée aux 2 roues motorisés (Q11 = 9).",
        options: [
            { id: 1, text: "Dans le parking gare parvis", next: "Q12" },
            { id: 2, text: "Dans le parking du restaurant « A l'Enfant du Pays »", next: "Q12" },
            { id: 3, text: "Sur une autre place en voirie ou parking au nord de la gare", next: "Q12" },
            { id: 4, text: "Sur une autre place en voirie ou parking au sud de la gare", next: "Q12" },
            { id: 5, text: "Sur un stationnement privé (box ou place de parking privée)", next: "Q12" },
            { id: 6, text: "Sur un arceau vélo (2 roues motorisés uniquement)", next: "Q12", condition: { Q11: 9 } }
        ]
    },

    // 💡 Q12 (Non-voyageurs) - Suggestions d'amélioration
    {
        id: "Q12",
        text: "Selon vous, que faudrait-il faire en priorité pour améliorer les conditions d'accès à cette gare ?",
        type: 'freeText',
        freeTextPlaceholder: "Noter seulement les mots clés",
        next: "end"
    }
];

/*
🚉 ENQUÊTE DE MOBILITÉ GARE DE BULLY-LES-MINES / GRENAY - VERSION vBulGre1 - FONCTIONNALITÉS IMPLÉMENTÉES :

📋 TYPES DE QUESTIONS :
✅ singleChoice - Toutes les questions à choix unique
✅ multipleChoice - Q8a (plusieurs réponses possibles)
✅ freeText - Réponses ouvertes et précisions
✅ commune - Sélecteur de commune pour l'origine
✅ street - Sélecteur de nom de rue pour les adresses locales
✅ gare - Sélecteur de gare pour les destinations (montants uniquement)

🔀 LOGIQUE CONDITIONNELLE :
✅ Le flux de l'enquête se divise à Q1 :
   - Option 1 (montants) → Questionnaire complet voyageurs (Q2 → Q8b)
   - Option 2 (descendants) → Fin de l'enquête
   - Options 3 et 4 (non-voyageurs) → Branche courte (Q9 → Q12)
✅ Montants - La commune d'origine détermine si la question de rue s'affiche :
   - Communes connues (Q2 = 1 à 3) → Q2_rue, puis Q3
   - Autre commune (Q2 = 4) → Q2_Autre (saisie libre), puis Q3
✅ Montants - Le mode de transport détermine les questions de suivi :
   - Conducteur / 2 roues motorisé (Q3 = 2 ou 9) → Q3a1 (stationnement) + Q3a2 (durée)
   - Transport en commun (Q3 = 5) → Q3b (lignes bus)
   - Vélo / Trottinette (Q3 = 6 ou 7) → Q3c (stationnement vélo)
   - En train - correspondance (Q3 = 10) → directement Q4
   - Autres modes (à pied, passager, covoiturage, taxi, autre) → directement Q4
✅ Montants - Motif du déplacement (Q5 = 3) → Q5a (raison venue à Bully-les-Mines/Grenay)
   - Q5a option 5 (Autres) → Q5a_autre (champ libre), puis Q6
✅ Montants - Gratuité TER TADAO (Q8 = 1) → Q8a (détail impact), puis Q8b
   - Q8a option 4 (Autre) → Q8a_Autre (champ libre), puis Q8b
✅ Non-voyageurs - La commune d'origine déclenche la question de rue :
   - Communes connues (Q9 = 1 à 3) → Q10 (rue), puis Q11
   - Autre commune (Q9 = 4) → Q9_Autre (saisie libre), puis Q11
✅ Non-voyageurs - Le mode de transport déclenche la question de stationnement :
   - Conducteur / 2 roues motorisé (Q11 = 2 ou 9) → Q11a (stationnement), puis Q12
   - Autres modes → directement Q12
✅ Option arceau vélo conditionnelle aux 2 roues motorisés uniquement dans Q11a
✅ Questions de précision pour les options "Autre" partout

🎯 STRUCTURE DE L'ENQUÊTE :
MONTANTS (Q1=1) :
  Origine (+rue si commune connue) → Transport (+stationnement/bus/vélo selon mode) → Destination → Motif (+raison venue si retour domicile) → Fréquence → Âge → Gratuité TADAO (+détail si oui) → Améliorations

NON-VOYAGEURS (Q1=3 ou 4) :
  Origine (+rue si commune connue) → Transport (+stationnement si conducteur/2RM) → Améliorations

📊 COLLECTE DE DONNÉES :
MONTANTS :
- Commune d'origine + niveau rue (pour Bully-les-Mines, Grenay, Mazingarbe)
- Mode de transport avec sous-questions détaillées (dont correspondance train)
- Durée de stationnement (conducteurs/2RM)
- Lignes bus : Ligne 11, Ligne 18, Ligne 55, Allobus, Car scolaire
- Gare de destination finale (Lille Flandres, Lens, Douai, Arras, Valenciennes, Béthune, Hazebrouck, Tourcoing, Roubaix, Paris Nord)
- Motif et fréquence du déplacement
- Impact gratuité TER TADAO (Q8/Q8a - spécifique périmètre TADAO)
- Données démographiques (tranches d'âge)
- Suggestions d'amélioration (ouvert)

NON-VOYAGEURS :
- Commune d'origine + niveau rue (pour communes connues)
- Mode de transport + lieu de stationnement (conducteurs/2RM)
- Suggestions d'amélioration (ouvert)

🔄 DIFFÉRENCES PAR RAPPORT À LA VERSION BÉTHUNE (vBet1) :
- Communes : Bully-les-Mines / Grenay / Mazingarbe (au lieu de Béthune / Verquin / Vaudricourt / Fouquières)
- Parkings : "parking gare parvis" + "parking A l'Enfant du Pays" (au lieu de nord/sud/cinéma)
- Bus : Lignes 11, 18, 55 + Allobus + Car scolaire (au lieu des lignes TADAO B2-B8, 20-82)
- Vélo Q3c : abri sécurisé parvis + transport dans train (sans arceaux nord/sud)
- Q4 destinations : ajout Béthune, Tourcoing, Roubaix
- Q3 : ajout option "En train - correspondance" (id 10)
- Q5a : référence à Bully-les-Mines/Grenay (au lieu de Béthune)
- Q3a1 : pas d'option arceau vélo (uniquement dans Q11a pour non-voyageurs)

⚠️ NOTES D'IMPLÉMENTATION :
- Q2_rue s'affiche pour les 3 communes connues (Q2 = 1 à 3) ; Q2_Autre pour saisie libre
- Q3a2 (durée stationnement) suit toujours directement Q3a1, sans branchement intermédiaire
- Q8a est de type multipleChoice (plusieurs réponses possibles)
- Q8/Q8a sont exclusifs aux montants ; les non-voyageurs n'y accèdent pas
- Les non-voyageurs n'ont pas de question sur la fréquence, la tranche d'âge, ni la gratuité TADAO
- Les enquêteurs ciblent les montants en priorité ; Q1 peut être pré-remplie par l'enquêteur

Cette enquête correspond au questionnaire mobilité multimodale de la gare de Bully-les-Mines / Grenay (périmètre TADAO).
*/