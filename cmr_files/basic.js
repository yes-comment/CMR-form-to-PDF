/* CMR consignment note - dynamic layout engine.
   Same page geometry as the original form, but every string is measured,
   wrapped to its box and auto-shrunk, so any language and any input length fit. */

var CMR_COPIES = [
    ["Copy for sender", "Exemplar f\u00fcr den Absender", "Felad\u00f3 p\u00e9ld\u00e1nya"],
    ["Copy for consignee", "Exemplar f\u00fcr den Empf\u00e4nger", "C\u00edmzett p\u00e9ld\u00e1nya"],
    ["Copy for carrier", "Exemplar f\u00fcr den Frachtf\u00fchrer", "Fuvaroz\u00f3 p\u00e9ld\u00e1nya"],
    ["Extra copy", "Zus\u00e4tzliches Exemplar", "Plusz egy p\u00e9ld\u00e1ny"]
];

var CMR_LABELS = {
    header: ["INTERNATIONAL CONSIGNMENT", "INTERNATIONALER FRACHTBRIEF", "NEMZETK\u00d6ZI FUVARLEV\u00c9L"],
    convention: [
        "This carriage is subject notwithstanding any clause to the contrary, to the Convention on the Contract for the international Carriage of goods by road (CMR)",
        "Diese Bef\u00f6rderung unterliegt trotz einer gegen-teiligen Abmachung den Bestimmungen des \u00dcbereinkommens \u00fcber den Bef\u00f6rderungsvertrag im internationalen Strasseng\u00fcterverkehr (CMR)",
        "A fuvaroz\u00e1sra elt\u00e9r\u0151 meg\u00e1llapod\u00e1s eset\u00e9n is a Nemzetk\u00f6zi \u00c1rufuvaroz\u00e1si Egyezm\u00e9ny (CMR) rendelke-z\u00e9sei az ir\u00e1nyad\u00f3k."
    ],
    f1: ["Sender (name, address, country)", "Absender (Name, Anschrift, Land)", "Felad\u00f3 (n\u00e9v, c\u00edm, orsz\u00e1g)"],
    f2: ["Consignee (name, address, country)", "Empf\u00e4nger (Name, Anschrift, Land)", "\u00c1tvev\u0151 (n\u00e9v, c\u00edm, orsz\u00e1g)"],
    f3: ["Place of delivery of the goods (place, country)", "Auslieferungsort des Gutes (Ort, Land)", "Az \u00e1ru kiszolg\u00e1ltat\u00e1si helye (hely, orsz\u00e1g)"],
    f4: ["Place and date taking over the goods", "Ort und Tag der \u00dcbernahme des Gutes", "\u00c1ru \u00e1tv\u00e9tel\u00e9nek helye \u00e9s id\u0151pontja"],
    f5: ["Documents attached", "Beigef\u00fcgte Dokumente", "Mell\u00e9kelt okm\u00e1nyok"],
    f6: ["Marks and Nos", "Kennzeichen und Nummern", "Jelz\u00e9s \u00e9s sz\u00e1mok"],
    f7: ["Number of packages", "Anzahl der Packst\u00fccke", "Csomagok sz\u00e1ma"],
    f8: ["Method of packing", "Art der Verpackung", "Csomagol\u00e1s m\u00f3dja"],
    f9: ["Nature of the goods", "Bezeichnung des Gutes", "\u00c1ru megnevez\u00e9se"],
    f10: ["Statistical number", "Statistiknummer", "Statisztikai sz\u00e1m"],
    f11: ["Gross weight in kg", "Bruttogewicht in kg", "Brutt\u00f3 s\u00faly (kg)"],
    f12: ["Volume in m3", "Umfang m3", "T\u00e9rfogat (m3)"],
    adrRow: ["Class", "Number", "Letter", "(ADR*)"],
    f13: ["Sender's instructions", "Anweisungen des Absenders", "A felad\u00f3 rendelkez\u00e9sei"],
    f14: ["Instruction as to payment for carriage", "Frachtzahlungsanweisungen", "Fuvard\u00edjfizet\u00e9si rendelkez\u00e9sek"],
    paid: ["Carriage paid /", "Frei /", "B\u00e9rmentve"],
    forward: ["Carriage forward /", "Unfrei /", "B\u00e9rmentes\u00edt\u00e9s n\u00e9lk\u00fcl"],
    f15: ["Reimbursement", "R\u00fcckerstattung", "Visszat\u00e9r\u00edt\u00e9s"],
    f16: ["Carrier (name, address, country)", "Frachtf\u00fchrer (Name, Anschrift, Land)", "Fuvaroz\u00f3 (n\u00e9v, c\u00edm, orsz\u00e1g)"],
    regno: ["REG. NO. / Kennzeichen / Rendsz\u00e1m:"],
    f17: ["Successive carriers (name, address, country)", "Nachfolgende Frachtf\u00fchrer (Name, Anschrift, Land)", "Tov\u00e1bbi fuvaroz\u00f3k (n\u00e9v, c\u00edm, orsz\u00e1g)"],
    f18: ["Carrier's reservations and observations", "Vorbehalte und Bemerkungen des Frachtf\u00fchrers", "Fuvaroz\u00f3 megjegyz\u00e9sei \u00e9s fenntart\u00e1sai"],
    f19: ["Special agreements", "Besondere Vereinbarungen", "K\u00fcl\u00f6nleges meg\u00e1llapod\u00e1sok"],
    f20: ["To be paid by", "Zu zahlen vom", "Fizetend\u0151"],
    bySender: ["Sender", "Absender", "Felad\u00f3"],
    currency: ["Currency", "W\u00e4hrung", "P\u00e9nznem"],
    byConsignee: ["Consignee", "Empf\u00e4nger", "\u00c1tvev\u0151"],
    charges: ["Carriage charges / Fracht / Fuvaroz\u00e1si d\u00edj", "Deductions / Erm\u00e4\u00dfigungen / Kedvezm\u00e9nyek",
              "Balance / Zuschl\u00e4ge / Egyenleg", "Supplementary charges / Nebengeb\u00fchren / Egy\u00e9b k\u00f6lt.",
              "Miscellaneous / Sonstiges / Egy\u00e9b", "Insurance / Versicherung / Biztos\u00edt\u00e1s",
              "Total to be paid / Gesamtsumme / V\u00e9g\u00f6sszeg"],
    f21: ["Established in", "Ausgefertigt in", "Ki\u00e1ll\u00edt\u00e1s helye"],
    on: ["on", "am", "id\u0151pontja"],
    f22: ["Signature and stamp of the sender", "Unterschrift und Stempel des Absenders", "Felad\u00f3 al\u00e1\u00edr\u00e1sa \u00e9s b\u00e9lyegz\u0151je"],
    f23: ["Signature and stamp of the carrier", "Unterschrift und Stempel des Frachtf\u00fchrers", "Fuvaroz\u00f3 al\u00e1\u00edr\u00e1sa \u00e9s b\u00e9lyegz\u0151je"],
    f24: ["Goods received / Gut empfangen / \u00c1ru \u00e1tv\u00e9tele"],
    f24place: ["Place / Ort / Hely"],
    f24on: ["on / am / id\u0151pont"],
    f24sign: ["Signature and stamp of the consignee", "Unterschrift und Stempel des Empf\u00e4ngers", "\u00c1tvev\u0151 al\u00e1\u00edr\u00e1sa \u00e9s b\u00e9lyegz\u0151je"],
    vertSender: ["To be completed on the sender's responsibility",
                 "Auszuf\u00fcllen unter der Verantwortung des Absenders",
                 "A felad\u00f3 felel\u0151ss\u00e9g\u00e9re kit\u00f6ltend\u0151"],
    vertIncl: ["including and", "einschlie\u00dflich", "bele\u00e9rtve \u00e9s"],
    vertCarrier: ["The spaces framed with heavy lines must be filled by the carrier.",
                 "Die mit fett gedruckten Linien eingerahmten Rubriken m\u00fcssen vom Frachtf\u00fchrer ausgef\u00fcllt werden.",
                 "A vastag vonallal keretezett mez\u0151k kit\u00f6lt\u00e9se a fuvaroz\u00f3 k\u00f6telezetts\u00e9ge."],
    adrNote: [
        "* In case of dangerous goods mention, besides the possible certification, on the last line of the column the particulars of the class, the number and the letter, if any.",
        "* Bei gef\u00e4hrlichen G\u00fctern ist, au\u00dfer der eventuellen Bescheinigung, auf der letzten Linie der Rubrik anzugeben: die Klasse, die Ziffer, sowie gegebenenfalls den Buchstaben.",
        "* Vesz\u00e9lyes \u00e1ruk eset\u00e9n a lehets\u00e9ges tan\u00fas\u00edtv\u00e1nyon k\u00edv\u00fcl a legutols\u00f3 sorban meg kell adni: az oszt\u00e1lyt, a sz\u00e1mot \u00e9s esetleg a bet\u0171t."
    ]
};

var RED = [237, 23, 72];

function cmrVal(id) {
    var el = document.getElementById(id);
    return el ? String(el.value || "") : "";
}

/* --- text helpers: measure, wrap, shrink-to-fit --- */

function cmrWrap(doc, text, maxWidth) {
    var lines = [];
    var paragraphs = String(text).split(/\r?\n/);
    for (var p = 0; p < paragraphs.length; p++) {
        var words = paragraphs[p].split(/\s+/).filter(function (w) { return w.length; });
        if (!words.length) { lines.push(""); continue; }
        var line = words[0];
        for (var i = 1; i < words.length; i++) {
            var cand = line + " " + words[i];
            if (doc.getTextWidth(cand) <= maxWidth) line = cand;
            else { lines.push(line); line = words[i]; }
        }
        lines.push(line);
    }
    return lines;
}

/* Shrink font size until the wrapped text fits maxLines (if given). */
function cmrFit(doc, text, maxWidth, startSize, minSize, style, maxLines) {
    var size = startSize;
    while (size > minSize) {
        doc.setFont("DejaVuSans", style);
        doc.setFontSize(size);
        var lines = cmrWrap(doc, text, maxWidth);
        if (lines.every(function (l) { return doc.getTextWidth(l) <= maxWidth; }) &&
            (maxLines === undefined || lines.length <= maxLines)) {
            return { size: size, lines: lines };
        }
        size -= 0.2;
    }
    doc.setFont("DejaVuSans", style);
    doc.setFontSize(minSize);
    return { size: minSize, lines: cmrWrap(doc, text, maxWidth) };
}

function cmrDrawLines(doc, lines, x, yTop, lineHeight) {
    for (var i = 0; i < lines.length; i++) {
        doc.text(x, yTop + i * lineHeight, lines[i]);
    }
}

/* Draw a multi-language label block at (x, yTop); each language wrapped and shrunk to fit.
   Returns the y coordinate below the last drawn line. */
function cmrLabels(doc, labels, x, yTop, maxWidth, size, lineGap) {
    doc.setTextColor(RED[0], RED[1], RED[2]);
    var y = yTop;
    for (var i = 0; i < labels.length; i++) {
        if (!labels[i]) continue;
        var fit = cmrFit(doc, labels[i], maxWidth, size, 3.5, "normal", 3);
        cmrDrawLines(doc, fit.lines, x, y + fit.size * 0.86, fit.size * lineGap);
        y += fit.lines.length * fit.size * lineGap;
    }
    return y;
}

/* One line per language, shrunk to fit maxWidth; fixed line gap. Returns bottom y used. */
function cmrLabelLines(doc, labels, x, yTop, maxWidth, startSize, minSize, gap) {
    doc.setTextColor(RED[0], RED[1], RED[2]);
    var g = gap || 1.8;
    for (var i = 0; i < labels.length; i++) {
        var size = startSize;
        doc.setFont("DejaVuSans", "normal");
        while (size > minSize) {
            doc.setFontSize(size);
            if (doc.getTextWidth(labels[i]) <= maxWidth) break;
            size -= 0.2;
        }
        doc.setFontSize(Math.max(size, minSize));
        doc.text(x, yTop, labels[i]);
        yTop += g;
    }
    return yTop;
}

/* Draw a field number in bold inside its box, return x offset after the number. */
function cmrNumber(doc, n, x, y) {
    doc.setFont("DejaVuSans", "bold");
    doc.setFontSize(13);
    doc.setTextColor(RED[0], RED[1], RED[2]);
    doc.text(x, y, String(n));
    return x + 5;
}

/* Draw an input value wrapped into its area, shrinking to fit. Returns bottom y used. */
function cmrValue(doc, value, x, yTop, maxWidth, maxHeight, startSize, minSize) {
    value = String(value || "").trim();
    if (!value) return yTop;
    doc.setTextColor(1, 1, 1);
    var lh = 1.15;
    var size = startSize;
    while (size >= (minSize || 4)) {
        doc.setFont("DejaVuSans", "normal");
        doc.setFontSize(size);
        var lines = cmrWrap(doc, value, maxWidth);
        if (lines.length * size * lh <= maxHeight &&
            lines.every(function (l) { return doc.getTextWidth(l) <= maxWidth; })) {
            cmrDrawLines(doc, lines, x, yTop + size * 0.86, size * lh);
            return yTop + lines.length * size * lh;
        }
        size -= 0.2;
    }
    doc.setFont("DejaVuSans", "normal");
    doc.setFontSize(minSize || 4);
    var last = cmrWrap(doc, value, maxWidth);
    cmrDrawLines(doc, last, x, yTop + (minSize || 4) * 0.86, (minSize || 4) * lh);
    return yTop + last.length * (minSize || 4) * lh;
}

/* Label followed on the same baseline by a value; value continues after the label text. */
function cmrLabelValue(doc, label, value, x, y, maxWidth, labelSize, valueSize) {
    doc.setTextColor(RED[0], RED[1], RED[2]);
    var fit = cmrFit(doc, label, maxWidth, labelSize, 3.5, "normal", 2);
    cmrDrawLines(doc, fit.lines, x, y, fit.size * 1.25);
    var lastLine = fit.lines[fit.lines.length - 1];
    doc.setFont("DejaVuSans", "normal");
    doc.setFontSize(fit.size);
    var lastW = doc.getTextWidth(lastLine);
    if (lastW + 2 < maxWidth) {
        cmrValue(doc, value, x + lastW + 2, y - fit.size * 0.86, maxWidth - lastW - 2, fit.size * 1.5, valueSize, fit.size * 0.7);
    } else {
        cmrValue(doc, value, x, y + fit.size * 0.4, maxWidth, fit.size * 1.5, valueSize, fit.size * 0.7);
    }
}

/* --- one CMR page --- */

function cmrDrawPage(doc, copyIndex) {
    var thin = 0.1, fat = 0.6;
    var copy = CMR_COPIES[copyIndex];

    doc.setDrawColor(RED[0], RED[1], RED[2]);
    doc.setLineWidth(thin);
    doc.rect(14, 25, 182, 262);

    /* copy indicator */
    doc.setFont("DejaVuSans", "bold");
    doc.setTextColor(RED[0], RED[1], RED[2]);
    doc.setFontSize(28);
    doc.text(7, 25, String(copyIndex + 1));
    doc.setFontSize(6.5);
    cmrDrawLines(doc, copy, 14, 20, 2);

    /* header box */
    doc.rect(105, 25, 91, 24);
    doc.setFont("DejaVuSans", "normal");
    doc.setFontSize(5.5);
    doc.setTextColor(RED[0], RED[1], RED[2]);
    cmrDrawLines(doc, CMR_LABELS.header, 108, 27, 2);
    doc.setFont("DejaVuSans", "bold");
    doc.setFontSize(14);
    doc.text(145, 33.5, "CMR");
    doc.setFontSize(10);
    doc.text(155, 33, "No:");
    cmrValue(doc, cmrVal("cmrnumber"), 165, 31, 28, 5, 10, 5);
    var convY = 36.5;
    doc.setFont("DejaVuSans", "normal");
    for (var ci = 0; ci < CMR_LABELS.convention.length; ci++) {
        var conv = cmrFit(doc, CMR_LABELS.convention[ci], 84, 5, 2.8, "normal", 3);
        cmrDrawLines(doc, conv.lines, 108, convY, conv.size * 1.35);
        convY += conv.lines.length * conv.size * 1.35;
    }

    /* left column boxes 1-3 */
    var boxes123 = [
        { n: 1, y: 25, h: 24, labels: CMR_LABELS.f1, ids: ["senderaddress"] },
        { n: 2, y: 49, h: 24, labels: CMR_LABELS.f2, ids: ["consigneename"] },
        { n: 3, y: 73, h: 24, labels: CMR_LABELS.f3, ids: ["deliveryplace"] }
    ];
    for (var b = 0; b < boxes123.length; b++) {
        var bx = boxes123[b];
        doc.rect(14, bx.y, 91, bx.h);
        var lxn = cmrNumber(doc, bx.n, 17, bx.y + 5);
        var after = cmrLabels(doc, bx.labels, lxn, bx.y + 1.8, 104 - lxn, 5.5, 1.3);
        var yv = Math.max(after + 0.5, bx.y + 10);
        cmrValue(doc, bx.ids.map(cmrVal).filter(Boolean).join("\n"), 21, yv, 82, bx.y + bx.h - 1.5 - yv, 8, 4);
    }

    /* 4: place and date taking over */
    doc.rect(14, 97, 91, 15);
    var lx4 = cmrNumber(doc, 4, 17, 102);
    var after4 = cmrLabels(doc, CMR_LABELS.f4, lx4, 98.8, 68, 5.5, 1.3);
    var y4 = Math.max(after4 + 0.5, 103.5);
    cmrValue(doc, cmrVal("takingoverplace"), 21, y4, 46, 111.5 - y4, 8, 4);
    cmrValue(doc, cmrVal("datepicker"), 70, y4, 33, 111.5 - y4, 8, 4);

    /* 5: documents attached */
    doc.rect(14, 112, 91, 15);
    var lx5 = cmrNumber(doc, 5, 17, 117);
    var after5 = cmrLabels(doc, CMR_LABELS.f5, lx5, 113.8, 76, 5.5, 1.3);
    cmrValue(doc, cmrVal("documents"), 21, Math.max(after5 + 0.5, 118.5), 82, 126 - Math.max(after5 + 0.5, 118.5), 8, 4);

    /* goods table 6-12 */
    var cols = [
        { n: 6, x: 14, w: 32, labels: CMR_LABELS.f6, ids: ["6marks1", "6marks2", "6marks3", "6marks4"] },
        { n: 7, x: 46, w: 29, labels: CMR_LABELS.f7, ids: ["7number1", "7number2", "7number3", "7number4"] },
        { n: 8, x: 75, w: 26, labels: CMR_LABELS.f8, ids: ["8method1", "8method2", "8method3", "8method4"] },
        { n: 9, x: 101, w: 26, labels: CMR_LABELS.f9, ids: ["9nature1", "9nature2", "9nature3", "9nature4"] },
        { n: 10, x: 127, w: 23, labels: CMR_LABELS.f10, ids: ["10number1", "10number2", "10number3", "10number4"] },
        { n: 11, x: 150, w: 23, labels: CMR_LABELS.f11, ids: ["11kg1", "11kg2", "11kg3", "11kg4"] },
        { n: 12, x: 173, w: 23, labels: CMR_LABELS.f12, ids: ["12volume1", "12volume2", "12volume3", "12volume4"] }
    ];
    doc.rect(14, 127, 182, 53);
    var rowTop = 138;
    for (var c = 0; c < cols.length; c++) {
        var col = cols[c];
        if (c > 0) doc.line(col.x, 127, col.x, 180);
        var lcx = cmrNumber(doc, col.n, col.x + 3, 133);
        cmrLabels(doc, col.labels, lcx, 128.8, col.x + col.w - lcx - 1, 5, 1.3);
        for (var r = 0; r < 4; r++) {
            if (r > 0) doc.line(col.x, rowTop + r * 10.5 - 2.5, col.x + col.w, rowTop + r * 10.5 - 2.5);
            cmrValue(doc, cmrVal(col.ids[r]), col.x + 2, rowTop + r * 10.5, col.w - 4, 9, 7, 4);
        }
    }

    /* ADR row */
    doc.rect(14, 180, 182, 7);
    doc.setFont("DejaVuSans", "normal");
    doc.setTextColor(RED[0], RED[1], RED[2]);
    var adrX = 17;
    for (var ar = 0; ar < CMR_LABELS.adrRow.length; ar++) {
        var aFit = cmrFit(doc, CMR_LABELS.adrRow[ar], 20, 5, 3, "normal", 2);
        cmrDrawLines(doc, aFit.lines, adrX, 182, aFit.size * 1.3);
        adrX += 24;
    }
    cmrValue(doc, cmrVal("6class"), 20, 182.5, 25, 4, 6, 3.5);
    cmrValue(doc, cmrVal("7number"), 48, 182.5, 25, 4, 6, 3.5);
    cmrValue(doc, cmrVal("8letter"), 77, 182.5, 22, 4, 6, 3.5);
    cmrValue(doc, cmrVal("9adr"), 102, 182.5, 92, 4, 6, 3.5);

    /* 13: sender's instructions */
    doc.setLineWidth(fat);
    doc.rect(14, 187, 88, 42);
    doc.setLineWidth(thin);
    cmrNumber(doc, 13, 16, 192);
    var after13 = cmrLabels(doc, CMR_LABELS.f13, 21, 188.8, 78, 5.5, 1.3);
    cmrValue(doc, cmrVal("sendersinstructions"), 21, Math.max(after13 + 1, 196), 78, 227 - Math.max(after13 + 1, 196), 8, 4);

    /* 14: payment for carriage */
    doc.rect(14, 229, 88, 14);
    cmrNumber(doc, 14, 16, 234);
    var after14 = cmrLabels(doc, CMR_LABELS.f14, 21, 230.8, 76, 5.5, 1.3);
    var y14 = Math.max(after14 + 0.5, 236);
    cmrValue(doc, cmrVal("carriageinstructions"), 21, y14, 82, 238.5 - y14, 6.5, 4);
    cmrLabelValue(doc, CMR_LABELS.paid.join(" "), cmrVal("carriagepaid"), 21, 241.3, 44, 5, 5);
    cmrLabelValue(doc, CMR_LABELS.forward.join(" "), cmrVal("carriageforward"), 66, 241.3, 36, 5, 5);

    /* 21: established in / on */
    doc.rect(14, 243, 88, 9);
    cmrNumber(doc, 21, 16, 248);
    var est = CMR_LABELS.f21.join(" / ");
    var estFit = cmrFit(doc, est, 42, 5.5, 3, "normal", 2);
    cmrDrawLines(doc, estFit.lines, 21, 245, estFit.size * 1.25);
    var estW = estFit.lines.reduce(function (w, l) { return Math.max(w, doc.getTextWidth(l)); }, 0);
    cmrValue(doc, cmrVal("establishedin"), 21 + estW + 2, 245 - estFit.size * 0.86, 62 - estW, estFit.size * 1.6, estFit.size, estFit.size * 0.7);
    var onLbl = CMR_LABELS.on.join(" / ");
    var onFit = cmrFit(doc, onLbl, 28, 5.5, 3, "normal", 2);
    cmrDrawLines(doc, onFit.lines, 65, 245, onFit.size * 1.25);
    var onW = onFit.lines.reduce(function (w, l) { return Math.max(w, doc.getTextWidth(l)); }, 0);
    cmrValue(doc, cmrVal("datepicker2"), 65 + onW + 2, 245 - onFit.size * 0.86, 100 - 65 - onW - 2, onFit.size * 1.6, onFit.size, onFit.size * 0.7);

    /* 22 / 23: signature boxes */
    doc.rect(14, 252, 60, 35);
    cmrNumber(doc, 22, 16, 257);
    cmrLabelLines(doc, CMR_LABELS.f22, 16, 281.6, 56, 5, 3, 1.8);
    doc.rect(74, 252, 60, 35);
    cmrNumber(doc, 23, 76, 257);
    cmrLabelLines(doc, CMR_LABELS.f23, 76, 281.6, 56, 5, 3, 1.8);

    /* right column: 16, 17, 18 */
    doc.setLineWidth(fat);
    doc.rect(105, 49, 91, 24);
    doc.rect(105, 73, 91, 24);
    doc.rect(105, 97, 91, 30);
    doc.setLineWidth(thin);
    var lx16 = cmrNumber(doc, 16, 107, 54);
    var after16 = cmrLabels(doc, CMR_LABELS.f16, lx16, 50.8, 194 - lx16, 5.5, 1.3);
    cmrValue(doc, cmrVal("carrieraddress"), 112, Math.max(after16 + 0.5, 56), 80, 66 - Math.max(after16 + 0.5, 56), 8, 4);
    cmrLabelValue(doc, CMR_LABELS.regno[0], cmrVal("vehiclereg"), 112, 71.2, 80, 5.5, 6.5);
    var lx17 = cmrNumber(doc, 17, 107, 78);
    var after17 = cmrLabels(doc, CMR_LABELS.f17, lx17, 74.8, 194 - lx17, 5.5, 1.3);
    cmrValue(doc, cmrVal("nextcarriers"), 112, Math.max(after17 + 0.5, 80), 80, 95 - Math.max(after17 + 0.5, 80), 8, 4);
    var lx18 = cmrNumber(doc, 18, 107, 102);
    var after18 = cmrLabels(doc, CMR_LABELS.f18, lx18, 98.8, 194 - lx18, 5.5, 1.3);
    cmrValue(doc, cmrVal("carrierobservations"), 112, Math.max(after18 + 0.5, 104), 80, 125 - Math.max(after18 + 0.5, 104), 8, 4);

    /* 19: special agreements */
    doc.rect(102, 187, 94, 22);
    cmrNumber(doc, 19, 104, 192);
    var after19 = cmrLabels(doc, CMR_LABELS.f19, 110, 188.8, 84, 5.5, 1.3);
    cmrValue(doc, cmrVal("specialagreements"), 110, Math.max(after19 + 0.5, 194), 84, 207 - Math.max(after19 + 0.5, 194), 8, 4);

    /* 20: to be paid by */
    doc.setLineWidth(fat);
    doc.rect(102, 209, 94, 34);
    doc.setLineWidth(thin);
    cmrNumber(doc, 20, 104, 214);
    cmrLabels(doc, CMR_LABELS.f20, 110, 210.8, 30, 5.5, 1.3);
    var subW = 94 / 3;
    for (var sc = 1; sc < 3; sc++) {
        doc.line(102 + sc * subW, 209, 102 + sc * subW, 243);
    }
    cmrLabels(doc, CMR_LABELS.bySender, 102 + 1, 216.5, subW - 2, 5, 1.3);
    cmrLabels(doc, CMR_LABELS.currency, 102 + subW + 1, 216.5, subW - 2, 5, 1.3);
    cmrLabels(doc, CMR_LABELS.byConsignee, 102 + 2 * subW + 1, 216.5, subW - 2, 5, 1.3);
    var rowY = 224;
    for (var ch = 0; ch < CMR_LABELS.charges.length; ch++) {
        var chFit = cmrFit(doc, CMR_LABELS.charges[ch], 90, 5, 3.2, "normal", 2);
        cmrDrawLines(doc, chFit.lines, 103.5, rowY, chFit.size * 1.3);
        rowY += chFit.lines.length * chFit.size * 1.3 + 0.4;
    }

    /* 15: cash on delivery / reimbursement */
    doc.rect(102, 243, 94, 9);
    cmrNumber(doc, 15, 104, 248);
    cmrLabelValue(doc, CMR_LABELS.f15.join(" / "), cmrVal("cashondelivery"), 110, 247.8, 84, 5.5, 6.5);

    /* 24: consignee receipt */
    doc.rect(134, 252, 62, 35);
    cmrNumber(doc, 24, 136, 257);
    cmrLabels(doc, CMR_LABELS.f24, 136, 254.8, 58, 5, 1.3);
    cmrLabelValue(doc, CMR_LABELS.f24place[0], cmrVal("deliveryplace"), 136, 261.5, 30, 5, 6);
    cmrLabelValue(doc, CMR_LABELS.f24on[0], cmrVal("datepicker2"), 168, 261.5, 26, 5, 6);
    cmrLabelLines(doc, CMR_LABELS.f24sign, 136, 281.6, 58, 5, 3, 1.8);

    /* vertical notes, left margin */
    doc.setFont("DejaVuSans", "normal");
    doc.setFontSize(4.5);
    doc.setTextColor(RED[0], RED[1], RED[2]);
    for (var vs = 0; vs < CMR_LABELS.vertSender.length; vs++) {
        doc.text(8.5 + vs * 1.8, 231, CMR_LABELS.vertSender[vs], null, 90);
    }
    for (var vi = 0; vi < CMR_LABELS.vertIncl.length; vi++) {
        doc.text(8.5 + vi * 1.8, 177, CMR_LABELS.vertIncl[vi], null, 90);
    }
    for (var vc = 0; vc < CMR_LABELS.vertCarrier.length; vc++) {
        doc.text(8.5 + vc * 1.8, 132, CMR_LABELS.vertCarrier[vc], null, 90);
    }
    doc.setFont("DejaVuSans", "bold");
    doc.setFontSize(13);
    doc.text(11.5, 191.5, "1 - 15", null, 90);
    doc.text(11.5, 163, "19 + 20 + 22", null, 90);

    /* vertical ADR note, right margin */
    doc.setFont("DejaVuSans", "normal");
    doc.setFontSize(4.5);
    for (var va = 0; va < CMR_LABELS.adrNote.length; va++) {
        doc.text(202 - va * 1.8, 90, CMR_LABELS.adrNote[va], null, -90);
    }

    /* footer */
    doc.setFontSize(8);
    doc.text(14, 289.6, "Sic itur ad astra!");
}

function generatePDF() {
    var doc = new jsPDF();
    doc.setFont("DejaVuSans", "normal");
    for (var i = 0; i < CMR_COPIES.length; i++) {
        if (i > 0) doc.addPage();
        cmrDrawPage(doc, i);
    }
    doc.save("CMR.pdf");
}
