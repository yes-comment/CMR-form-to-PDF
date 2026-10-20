/* Single source of truth for all CMR strings and copy definitions.
   Used by both cmr.htm (renders labels into the form) and basic.js (PDF engine).
   Future translations: replace the string arrays here only. */
var CMR_DICT = {
  "copies": [
    {
      "labels": [
        "Copy for sender",
        "Exemplar für den Absender",
        "Feladó példánya"
      ],
      "color": [
        237,
        23,
        72
      ]
    },
    {
      "labels": [
        "Copy for consignee",
        "Exemplar für den Empfänger",
        "Címzett példánya"
      ],
      "color": [
        0,
        130,
        200
      ]
    },
    {
      "labels": [
        "Copy for carrier",
        "Exemplar für den Frachtführer",
        "Fuvarozó példánya"
      ],
      "color": [
        0,
        169,
        79
      ]
    },
    {
      "labels": [
        "Extra copy",
        "Zusätzliches Exemplar",
        "Plusz egy példány"
      ],
      "color": [
        34,
        30,
        31
      ]
    }
  ],
  "labels": {
    "header": [
      "INTERNATIONAL CONSIGNMENT",
      "INTERNATIONALER FRACHTBRIEF",
      "NEMZETKÖZI FUVARLEVÉL"
    ],
    "convention": [
      "This carriage is subject notwithstanding any clause to the contrary, to the Convention on the Contract for the international Carriage of goods by road (CMR)",
      "Diese Beförderung unterliegt trotz einer gegenteiligen Abmachung den Bestimmungen des Übereinkommens über den Beförderungsvertrag im internationalen Strassengüterverkehr (CMR)",
      "A fuvarozásra eltérő megállapodás esetén is a Nemzetközi Árufuvarozási Egyezmény (CMR) rendelkezései az irányadók."
    ],
    "f1": [
      "Sender (name, address, country)",
      "Absender (Name, Anschrift, Land)",
      "Feladó (név, cím, ország)"
    ],
    "f2": [
      "Consignee (name, address, country)",
      "Empfänger (Name, Anschrift, Land)",
      "Átvevő (név, cím, ország)"
    ],
    "f3": [
      "Place of delivery of the goods (place, country)",
      "Auslieferungsort des Gutes (Ort, Land)",
      "Az áru kiszolgáltatási helye (hely, ország)"
    ],
    "f4": [
      "Place and date taking over the goods",
      "Ort und Tag der Übernahme des Gutes",
      "Áru átvételének helye és időpontja"
    ],
    "f5": [
      "Documents attached",
      "Beigefügte Dokumente",
      "Mellékelt okmányok"
    ],
    "f6": [
      "Marks and Nos",
      "Kennzeichen und Nummern",
      "Jelzés és számok"
    ],
    "f7": [
      "Number of packages",
      "Anzahl der Packstücke",
      "Csomagok száma"
    ],
    "f8": [
      "Method of packing",
      "Art der Verpackung",
      "Csomagolás módja"
    ],
    "f9": [
      "Nature of the goods",
      "Bezeichnung des Gutes",
      "Áru megnevezése"
    ],
    "f10": [
      "Statistical number",
      "Statistiknummer",
      "Statisztikai szám"
    ],
    "f11": [
      "Gross weight in kg",
      "Bruttogewicht in kg",
      "Bruttó súly (kg)"
    ],
    "f12": [
      "Volume in m3",
      "Umfang m3",
      "Térfogat (m3)"
    ],
    "adrRow": [
      "Class",
      "Number",
      "Letter",
      "(ADR*)"
    ],
    "f13": [
      "Sender's instructions",
      "Anweisungen des Absenders",
      "A feladó rendelkezései"
    ],
    "f14": [
      "Instruction as to payment for carriage",
      "Frachtzahlungsanweisungen",
      "Fuvardíjfizetési rendelkezések"
    ],
    "paid": [
      "Carriage paid /",
      "Frei /",
      "Bérmentve"
    ],
    "forward": [
      "Carriage forward /",
      "Unfrei /",
      "Bérmentesítés nélkül"
    ],
    "f15": [
      "Reimbursement",
      "Rückerstattung",
      "Visszatérítés"
    ],
    "f16": [
      "Carrier (name, address, country)",
      "Frachtführer (Name, Anschrift, Land)",
      "Fuvarozó (név, cím, ország)"
    ],
    "regno": [
      "REG. NO. / Kennzeichen / Rendszám:"
    ],
    "f17": [
      "Successive carriers (name, address, country)",
      "Nachfolgende Frachtführer (Name, Anschrift, Land)",
      "További fuvarozók (név, cím, ország)"
    ],
    "f18": [
      "Carrier's reservations and observations",
      "Vorbehalte und Bemerkungen des Frachtführers",
      "Fuvarozó megjegyzései és fenntartásai"
    ],
    "f19": [
      "Special agreements",
      "Besondere Vereinbarungen",
      "Különleges megállapodások"
    ],
    "f20": [
      "To be paid by",
      "Zu zahlen vom",
      "Fizetendő"
    ],
    "bySender": [
      "Sender",
      "Absender",
      "Feladó"
    ],
    "currency": [
      "Currency",
      "Währung",
      "Pénznem"
    ],
    "byConsignee": [
      "Consignee",
      "Empfänger",
      "Átvevő"
    ],
    "charges": [
      "Carriage charges / Fracht / Fuvarozási díj",
      "Deductions / Ermäßigungen / Kedvezmények",
      "Balance / Zuschläge / Egyenleg",
      "Supplementary charges / Nebengebühren / Egyéb költ.",
      "Miscellaneous / Sonstiges / Egyéb",
      "Insurance / Versicherung / Biztosítás",
      "Total to be paid / Gesamtsumme / Végösszeg"
    ],
    "f21": [
      "Established in",
      "Ausgefertigt in",
      "Kiállítás helye"
    ],
    "on": [
      "on",
      "am",
      "időpontja"
    ],
    "f22": [
      "Signature and stamp of the sender",
      "Unterschrift und Stempel des Absenders",
      "Feladó aláírása és bélyegzője"
    ],
    "f23": [
      "Signature and stamp of the carrier",
      "Unterschrift und Stempel des Frachtführers",
      "Fuvarozó aláírása és bélyegzője"
    ],
    "f24": [
      "Goods received / Gut empfangen / Áru átvétele"
    ],
    "f24place": [
      "Place / Ort / Hely"
    ],
    "f24on": [
      "on / am / időpont"
    ],
    "f24sign": [
      "Signature and stamp of the consignee",
      "Unterschrift und Stempel des Empfängers",
      "Átvevő aláírása és bélyegzője"
    ],
    "vertSender": [
      "To be completed on the sender's responsibility",
      "Auszufüllen unter der Verantwortung des Absenders",
      "A feladó felelősségére kitöltendő"
    ],
    "vertIncl": [
      "including and",
      "einschließlich",
      "beleértve és"
    ],
    "vertCarrier": [
      "The spaces framed with heavy lines must be filled by the carrier.",
      "Die mit fett gedruckten Linien eingerahmten Rubriken müssen vom Frachtführer ausgefüllt werden.",
      "A vastag vonallal keretezett mezők kitöltése a fuvarozó kötelezettsége."
    ],
    "adrNote": [
      "* In case of dangerous goods mention, besides the possible certification, on the last line of the column the particulars of the class, the number and the letter, if any.",
      "* Bei gefährlichen Gütern ist, außer der eventuellen Bescheinigung, auf der letzten Linie der Rubrik anzugeben: die Klasse, die Ziffer, sowie gegebenenfalls den Buchstaben.",
      "* Veszélyes áruk esetén a lehetséges tanúsítványon kívül a legutolsó sorban meg kell adni: az osztályt, a számot és esetleg a betűt."
    ]
  }
};
