/* CMR consignment note - dynamic layout engine.
   Same page geometry as the original form, but every string is measured,
   wrapped to its box and auto-shrunk, so any language and any input length fit. */

var CMR_COLOR = [237, 23, 72];
var CMR_COPIES = CMR_DICT.copies;
var CMR_LABELS = CMR_DICT.labels;



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
   lineGap is a fixed baseline gap in mm (as in the original form).
   Returns the y coordinate below the last drawn line. */
function cmrLabels(doc, labels, x, yTop, maxWidth, size, lineGap) {
    doc.setTextColor(CMR_COLOR[0], CMR_COLOR[1], CMR_COLOR[2]);
    var gap = lineGap || 2.2;
    var y = yTop;
    for (var i = 0; i < labels.length; i++) {
        if (!labels[i]) continue;
        var fit = cmrFit(doc, labels[i], maxWidth, size, 3.5, "normal", 3);
        cmrDrawLines(doc, fit.lines, x, y + fit.size * 0.28, gap);
        y += fit.lines.length * gap;
    }
    return y;
}

/* One line per language, shrunk to fit maxWidth; fixed line gap. Returns bottom y used. */
function cmrLabelLines(doc, labels, x, yTop, maxWidth, startSize, minSize, gap) {
    doc.setTextColor(CMR_COLOR[0], CMR_COLOR[1], CMR_COLOR[2]);
    var g = gap || 2.2;
    for (var i = 0; i < labels.length; i++) {
        var size = startSize;
        doc.setFont("DejaVuSans", "normal");
        while (size > minSize) {
            doc.setFontSize(size);
            if (doc.getTextWidth(labels[i]) <= maxWidth) break;
            size -= 0.2;
        }
        var use = Math.max(size, minSize);
        doc.setFontSize(use);
        doc.text(x, yTop + use * 0.28, labels[i]);
        yTop += g;
    }
    return yTop;
}

/* Padding between a box edge and the content aligned to it (mm). */
var CMR_PAD = 1.5;

/* Draw a field number in bold inside its box at (boxX, boxY). The number's
   top is CMR_PAD below the box top line and its left is CMR_PAD from the box
   left line. Returns the x where labels may start: the same CMR_PAD gap
   right of the number as between number and the left cell line. */
function cmrNumber(doc, n, boxX, boxY) {
    doc.setFont("DejaVuSans", "bold");
    doc.setFontSize(13);
    doc.setTextColor(CMR_COLOR[0], CMR_COLOR[1], CMR_COLOR[2]);
    var str = String(n);
    var w = doc.getTextWidth(str);
    var x = boxX + CMR_PAD;
    var y = boxY + CMR_PAD + 3.3;
    doc.text(x, y, str);
    return x + w + CMR_PAD;
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
    doc.setTextColor(CMR_COLOR[0], CMR_COLOR[1], CMR_COLOR[2]);
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

function cmrDrawPage(doc, copyIndex, color) {
    var thin = 0.1, fat = 0.6;
    var copy = CMR_COPIES[copyIndex];
    CMR_COLOR = color;

    doc.setDrawColor(CMR_COLOR[0], CMR_COLOR[1], CMR_COLOR[2]);
    doc.setLineWidth(thin);
    doc.rect(14, 25, 182, 262);

    /* copy indicator */
    doc.setFont("DejaVuSans", "bold");
    doc.setTextColor(CMR_COLOR[0], CMR_COLOR[1], CMR_COLOR[2]);
    doc.setFontSize(28);
    doc.text(7, 25, String(copyIndex + 1));
    doc.setFontSize(6.5);
    cmrDrawLines(doc, copy.labels, 14, 20, 2);

    /* header box */
    doc.rect(105, 25, 91, 24);
    /* titles: same CMR_PAD from the top line as labels in other cells */
    cmrLabels(doc, CMR_LABELS.header, 108, 25 + CMR_PAD, 36, 5.5, 1.8);
    /* CMR / No: row at the same top padding as section numbers (baseline 25 + CMR_PAD + 3.3) */
    var hdrBase = 25 + CMR_PAD + 3.3;
    doc.setFont("DejaVuSans", "bold");
    doc.setFontSize(14);
    doc.setTextColor(CMR_COLOR[0], CMR_COLOR[1], CMR_COLOR[2]);
    doc.text(145, hdrBase, "CMR");
    doc.setFont("DejaVuSans", "normal");
    doc.setFontSize(9);
    var noLbl = "No:";
    var noW = doc.getTextWidth(noLbl);
    doc.text(160, hdrBase, noLbl);
    /* the number flows freely under CMR No, all the way to the right edge;
       right padding equals the left padding (CMR_PAD) for consistency */
    var noX = 160 + noW + 1.5;
    cmrValue(doc, cmrVal("cmrnumber"), noX, 31, 196 - CMR_PAD - noX, 48.5 - 31, 9, 5);
    /* convention paragraph: left part, below the titles, clear of the number column */
    var convY = 34.6;
    doc.setFont("DejaVuSans", "normal");
    for (var ci = 0; ci < CMR_LABELS.convention.length; ci++) {
        var conv = cmrFit(doc, CMR_LABELS.convention[ci], 55, 4.2, 2.8, "normal", 4);
        cmrDrawLines(doc, conv.lines, 108, convY, 1.45);
        convY += conv.lines.length * 1.45;
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
        var lxn = cmrNumber(doc, bx.n, 14, bx.y);
        var after = cmrLabels(doc, bx.labels, lxn, bx.y + CMR_PAD, 104 - lxn, 5.5, 2.2);
        var yv = Math.max(after + 1, bx.y + 10);
        cmrValue(doc, bx.ids.map(cmrVal).filter(Boolean).join("\n"), 21, yv, 82, bx.y + bx.h - 1.5 - yv, 8, 4);
    }

    /* 4: place and date taking over */
    doc.rect(14, 97, 91, 15);
    var lx4 = cmrNumber(doc, 4, 14, 97);
    var after4 = cmrLabels(doc, CMR_LABELS.f4, lx4, 97 + CMR_PAD, 68, 5.5, 2.2);
    var y4 = Math.max(after4 + 1, 103.5);
    cmrValue(doc, cmrVal("takingoverplace"), 21, y4, 46, 111.5 - y4, 8, 4);
    cmrValue(doc, cmrVal("datepicker"), 70, y4, 33, 111.5 - y4, 8, 4);

    /* 5: documents attached */
    doc.rect(14, 112, 91, 15);
    var lx5 = cmrNumber(doc, 5, 14, 112);
    var after5 = cmrLabels(doc, CMR_LABELS.f5, lx5, 112 + CMR_PAD, 76, 5.5, 2.2);
    cmrValue(doc, cmrVal("documents"), 21, Math.max(after5 + 1, 118.5), 82, 126 - Math.max(after5 + 1, 118.5), 8, 4);

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
        var lcx = cmrNumber(doc, col.n, col.x, 127);
        cmrLabels(doc, col.labels, lcx, 127 + CMR_PAD, col.x + col.w - lcx - 0.5, 5, 2.2);
        for (var r = 0; r < 4; r++) {
            if (r > 0) doc.line(col.x, rowTop + r * 10.5, col.x + col.w, rowTop + r * 10.5);
            cmrValue(doc, cmrVal(col.ids[r]), col.x + 2, rowTop + r * 10.5 + 0.5, col.w - 4, 8.5, 7, 4);
        }
    }

    /* ADR row */
    doc.rect(14, 180, 182, 7);
    doc.setFont("DejaVuSans", "normal");
    doc.setTextColor(CMR_COLOR[0], CMR_COLOR[1], CMR_COLOR[2]);
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
    var lx13 = cmrNumber(doc, 13, 14, 187);
    var after13 = cmrLabels(doc, CMR_LABELS.f13, lx13, 187 + CMR_PAD, 100 - lx13, 5.5, 2.2);
    cmrValue(doc, cmrVal("sendersinstructions"), 21, Math.max(after13 + 1, 197), 78, 227 - Math.max(after13 + 1, 197), 8, 4);

    /* 14: payment for carriage */
    doc.rect(14, 229, 88, 14);
    var lx14 = cmrNumber(doc, 14, 14, 229);
    var after14 = cmrLabels(doc, CMR_LABELS.f14, lx14, 229 + CMR_PAD, 102 - lx14, 5, 1.8);
    var y14 = Math.max(after14 + 0.5, 236.2);
    cmrValue(doc, cmrVal("carriageinstructions"), 21, y14, 82, 239.7 - y14, 5, 3.2);
    /* paid / forward labels drawn at one shared font size so both match the other text;
       each label is sized so that label + its value fit the space up to the box edge */
    var paidLbl = CMR_LABELS.paid.join(" ");
    var fwdLbl = CMR_LABELS.forward.join(" ");
    var paidVal = cmrVal("carriagepaid");
    var fwdVal = cmrVal("carriageforward");
    var pfSize = 4.6;
    doc.setFont("DejaVuSans", "normal");
    while (pfSize > 3) {
        doc.setFontSize(pfSize);
        var pw = doc.getTextWidth(paidLbl);
        var fw = doc.getTextWidth(fwdLbl);
        var pv = paidVal ? doc.getTextWidth(paidVal) * (4.6 / pfSize) : 0;
        var fv = fwdVal ? doc.getTextWidth(fwdVal) * (4.6 / pfSize) : 0;
        if (pw + 1.5 + Math.max(pv, 6) <= 42 && fw + 1.5 + Math.max(fv, 6) <= 36) break;
        pfSize -= 0.1;
    }
    doc.setFontSize(pfSize);
    doc.text(21, 241.7, paidLbl);
    var paidW = doc.getTextWidth(paidLbl);
    cmrValue(doc, cmrVal("carriagepaid"), 21 + paidW + 1.5, 241.7 - 3 * 0.86, 42 - paidW, 2.2, 4.6, 3);
    doc.setFontSize(pfSize);
    doc.text(64, 241.7, fwdLbl);
    var fwdW = doc.getTextWidth(fwdLbl);
    cmrValue(doc, cmrVal("carriageforward"), 64 + fwdW + 1.5, 241.7 - 3 * 0.86, 99.5 - 64 - fwdW, 2.2, 4.6, 3);

    /* 21: established in / on */
    doc.rect(14, 243, 88, 9);
    var lx21 = cmrNumber(doc, 21, 14, 243);
    var est = CMR_LABELS.f21.join(" / ");
    var estFit = cmrFit(doc, est, 40, 4.4, 2.8, "normal", 1);
    cmrDrawLines(doc, estFit.lines, lx21, 247.3, estFit.size * 1.6);
    var estW = estFit.lines.reduce(function (w, l) { return Math.max(w, doc.getTextWidth(l)); }, 0);
    cmrValue(doc, cmrVal("establishedin"), lx21 + estW + 1.5, 246.4, 62 - estW, 4.5, 6, 3.5);
    var onLbl = CMR_LABELS.on.join(" / ");
    var onFit = cmrFit(doc, onLbl, 14, 4.4, 2.8, "normal", 1);
    cmrDrawLines(doc, onFit.lines, 66, 247.3, onFit.size * 1.6);
    var onW = onFit.lines.reduce(function (w, l) { return Math.max(w, doc.getTextWidth(l)); }, 0);
    cmrValue(doc, cmrVal("datepicker2"), 66 + onW + 1.5, 246.4, 100 - 66 - onW - 1.5, 4.5, 6, 3.5);

    /* 22 / 23: signature boxes */
    doc.rect(14, 252, 60, 35);
    var lx22 = cmrNumber(doc, 22, 14, 252);
    cmrLabelLines(doc, CMR_LABELS.f22, lx22, 252 + CMR_PAD, 71.5 - lx22, 5, 3.2, 2.2);
    doc.rect(74, 252, 60, 35);
    var lx23 = cmrNumber(doc, 23, 74, 252);
    cmrLabelLines(doc, CMR_LABELS.f23, lx23, 252 + CMR_PAD, 131.5 - lx23, 5, 3.2, 2.2);

    /* right column: 16, 17, 18 */
    doc.setLineWidth(fat);
    doc.rect(105, 49, 91, 24);
    doc.rect(105, 73, 91, 24);
    doc.rect(105, 97, 91, 30);
    doc.setLineWidth(thin);
    var lx16 = cmrNumber(doc, 16, 105, 49);
    var after16 = cmrLabels(doc, CMR_LABELS.f16, lx16, 49 + CMR_PAD, 194 - lx16, 5.5, 2.2);
    cmrValue(doc, cmrVal("carrieraddress"), 112, Math.max(after16 + 1, 56), 80, 68.5 - Math.max(after16 + 1, 56), 8, 4);
    cmrLabelValue(doc, CMR_LABELS.regno[0], cmrVal("vehiclereg"), 112, 71.2, 80, 5.5, 6.5);
    var lx17 = cmrNumber(doc, 17, 105, 73);
    var after17 = cmrLabels(doc, CMR_LABELS.f17, lx17, 73 + CMR_PAD, 194 - lx17, 5.5, 2.2);
    cmrValue(doc, cmrVal("nextcarriers"), 112, Math.max(after17 + 1, 80), 80, 95 - Math.max(after17 + 1, 80), 8, 4);
    var lx18 = cmrNumber(doc, 18, 105, 97);
    var after18 = cmrLabels(doc, CMR_LABELS.f18, lx18, 97 + CMR_PAD, 194 - lx18, 5.5, 2.2);
    cmrValue(doc, cmrVal("carrierobservations"), 112, Math.max(after18 + 1, 104), 80, 125 - Math.max(after18 + 1, 104), 8, 4);

    /* 19: special agreements */
    doc.rect(102, 187, 94, 22);
    var lx19 = cmrNumber(doc, 19, 102, 187);
    var after19 = cmrLabels(doc, CMR_LABELS.f19, lx19, 187 + CMR_PAD, 194 - lx19, 5.5, 2.2);
    cmrValue(doc, cmrVal("specialagreements"), 110, Math.max(after19 + 1, 195), 84, 207 - Math.max(after19 + 1, 195), 8, 4);

    /* 20: to be paid by */
    doc.setLineWidth(fat);
    doc.rect(102, 209, 94, 34);
    doc.setLineWidth(thin);
    /* 20: a 4-column x 7-row grid.
       Column 1: section header + the seven charge labels.
       Columns 2-4: Sender / Currency / Consignee payer columns, each with
       seven empty cells to be filled in by hand when a charge is applicable. */
    var lx20 = cmrNumber(doc, 20, 102, 209);
    cmrLabels(doc, CMR_LABELS.f20, lx20, 209 + CMR_PAD, 140 - lx20, 5.5, 2.2);
    var col20w = 38;                    /* column 1 width */
    var pay20w = (94 - col20w) / 3;      /* three payer columns */
    /* compact header band: three label lines, like other cells */
    var gridTop = 209 + CMR_PAD + 3 * 2.2;
    var gridBot = 243;
    var rowH = (gridBot - gridTop) / 7;
    /* vertical lines: after column 1 and between the payer columns */
    for (var sc = 0; sc < 3; sc++) {
        doc.line(102 + col20w + sc * pay20w, 209, 102 + col20w + sc * pay20w, gridBot);
    }
    /* header band row line */
    doc.line(102, gridTop, 196, gridTop);
    /* payer column headers: same size as all other labels (5.5), top-aligned like other cells */
    var pay20 = [
        { labels: CMR_LABELS.bySender, x: 102 + col20w, id: "20bysender" },
        { labels: CMR_LABELS.currency, x: 102 + col20w + pay20w, id: "20currency" },
        { labels: CMR_LABELS.byConsignee, x: 102 + col20w + 2 * pay20w, id: "20byconsignee" }
    ];
    for (var pc = 0; pc < pay20.length; pc++) {
        var p20 = pay20[pc];
        cmrLabels(doc, p20.labels, p20.x + CMR_PAD, 209 + CMR_PAD, pay20w - 2 * CMR_PAD, 5.5, 2.2);
        var vY20 = 209 + CMR_PAD + 3 * 2.2;
        var vH20 = gridTop - vY20 - 0.2;
        if (vH20 < 1.6) vH20 = 1.6;
        cmrValue(doc, cmrVal(p20.id), p20.x + CMR_PAD, vY20, pay20w - 2 * CMR_PAD, vH20, 4.4, 3);
    }
    /* seven charge rows. One shared font size for all seven labels (wrapping to
       two lines allowed) so the text size is consistent across the rows; each
       label block and value is vertically centered in its row. Payer cells are
       left empty to be filled in by hand. */
    var chargeIds = ["20carriage", "20deductions", "20balance", "20supplementary", "20misc", "20insurance", "20total"];
    var chW = col20w - 2 * CMR_PAD;
    /* find the largest shared size at which every label fits in <= 2 lines */
    var chSize = 5;
    doc.setFont("DejaVuSans", "normal");
    for (var cs = 5; cs >= 3.2; cs -= 0.1) {
        var allFit = true;
        doc.setFontSize(cs);
        for (var ct = 0; ct < CMR_LABELS.charges.length; ct++) {
            var lns = cmrWrap(doc, CMR_LABELS.charges[ct], chW);
            if (lns.length > 2) { allFit = false; break; }
        }
        if (allFit) { chSize = cs; break; }
        chSize = cs;
    }
    doc.setFontSize(chSize);
    var chGap = chSize * 0.42;          /* line gap in mm for the shared size */
    var chH = chSize * 0.3528;          /* glyph height in mm */
    for (var ch = 0; ch < CMR_LABELS.charges.length; ch++) {
        var rowY20 = gridTop + ch * rowH;
        if (ch > 0) doc.line(102, rowY20, 196, rowY20);
        doc.setFont("DejaVuSans", "normal");
        doc.setFontSize(chSize);
        var chLines = cmrWrap(doc, CMR_LABELS.charges[ch], chW);
        var chBlock = chLines.length * chGap;
        var chY = rowY20 + (rowH - chBlock) / 2;
        cmrDrawLines(doc, chLines, 102 + CMR_PAD, chY + chH * 0.8, chGap);
        cmrValue(doc, cmrVal(chargeIds[ch]), 102 + col20w + CMR_PAD, rowY20 + (rowH - 4 * 0.3528) / 2, pay20w - 2 * CMR_PAD, 4 * 0.3528 * 1.4, 4, 3);
    }

    /* 15: cash on delivery / reimbursement */
    doc.rect(102, 243, 94, 9);
    var lx15 = cmrNumber(doc, 15, 102, 243);
    cmrLabelLines(doc, CMR_LABELS.f15, lx15, 243 + CMR_PAD, 36, 4.4, 2.8, 1.75);
    cmrValue(doc, cmrVal("cashondelivery"), lx15 + 38, 247.3, 194 - lx15 - 38, 3.5, 6.5, 3.5);

    /* 24: consignee receipt */
    doc.rect(134, 252, 62, 35);
    var lx24 = cmrNumber(doc, 24, 134, 252);
    cmrLabels(doc, CMR_LABELS.f24, lx24, 252 + CMR_PAD, 196 - lx24, 5, 2.2);
    cmrLabelValue(doc, CMR_LABELS.f24place[0], cmrVal("24place"), 135.5, 262.8, 32, 5, 6);
    cmrLabelValue(doc, CMR_LABELS.f24on[0], cmrVal("24date"), 168, 262.8, 194.5 - 168, 5, 6);
    cmrLabelLines(doc, CMR_LABELS.f24sign, 135.5, 279.4, 59, 4.4, 3, 1.9);

    /* vertical notes, left margin */
    doc.setFont("DejaVuSans", "normal");
    doc.setFontSize(4.5);
    doc.setTextColor(CMR_COLOR[0], CMR_COLOR[1], CMR_COLOR[2]);
    for (var vs = 0; vs < CMR_LABELS.vertSender.length; vs++) {
        doc.text(7.2 + vs * 1.5, 254, CMR_LABELS.vertSender[vs], null, 90);
    }
    for (var vi = 0; vi < CMR_LABELS.vertIncl.length; vi++) {
        doc.text(7.2 + vi * 1.5, 180, CMR_LABELS.vertIncl[vi], null, 90);
    }
    for (var vc = 0; vc < CMR_LABELS.vertCarrier.length; vc++) {
        doc.text(7.2 + vc * 1.5, 130, CMR_LABELS.vertCarrier[vc], null, 90);
    }
    doc.setFont("DejaVuSans", "bold");
    doc.setFontSize(13);
    doc.text(12.2, 203, "1 - 15", null, 90);
    doc.text(12.2, 166, "19 + 20 + 22", null, 90);

    /* vertical ADR note, right margin */
    doc.setFont("DejaVuSans", "normal");
    doc.setFontSize(4.5);
    for (var va = 0; va < CMR_LABELS.adrNote.length; va++) {
        doc.text(202 - va * 1.8, 90, CMR_LABELS.adrNote[va], null, -90);
    }

    /* footer */
    doc.setFontSize(5.5);
    doc.text(14, 289.6, "Sic itur ad astra!");
}

function generatePDF() {
    var doc = new jsPDF();
    doc.setFont("DejaVuSans", "normal");
    for (var i = 0; i < CMR_COPIES.length; i++) {
        if (i > 0) doc.addPage();
        cmrDrawPage(doc, i, CMR_COPIES[i].color);
    }
    doc.save("CMR.pdf");
}
