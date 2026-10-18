function generatePDF() {
    var doc = new jsPDF();
	
    var fat = 0.6;
    var thin = 0.1;
    doc.setFont("DejaVuSans", "normal");
    
    
// 1. COPY FOR SENDER ==============================================================
//=========================================================================================

doc.setDrawColor(237, 23, 72);
doc.setLineWidth(thin);

doc.rect(14, 25, 182, 262); // main rectangle

doc.setTextColor(237, 23, 72);
doc.setFontSize(28);

doc.setFont("DejaVuSans", "bold");
doc.text(7, 25, '1');
doc.setFontSize(6.5);
doc.text(14, 20, 'Copy for sender');
doc.text(14, 22, 'Exemplar für den Absender');
doc.text(14, 24, 'Feladó példánya');

doc.rect(105, 25, 91, 24);
doc.setFont("DejaVuSans", "normal");
doc.setFontSize(5.5);
doc.text(108, 27, 'INTERNATIONAL CONSIGNMENT');
doc.text(108, 29, 'INTERNATIONALER FRACHTBRIEF');
doc.text(108, 31, 'NEMZETKÖZI FUVARLEVÉL');
doc.setFontSize(5);
doc.text(108, 45.6, 'A fuvarozásra eltérö megállapodás esetén is a Nemzetközi Árufuvarozási Egyezmény (CMR)');
doc.text(108, 47.4, 'rendelkezései az irányadók.');
doc.text(154, 37.5, 'Diese Beforderung unterliegt trotz einer gegen-');
doc.text(154, 39.3, 'teiligen Abmachung den Bestimmungen des');
doc.text(154, 41.1, 'Ubereinkommens uber den Beforderungsvertrag');
doc.text(154, 42.9, 'im internationalen Strassenguterverkehr (CMR)');
doc.text(108, 37.5, 'This carriage is subject notwithstanding any');
doc.text(108, 39.3, 'clause to the contrary, to the Convention on');
doc.text(108, 41.1, 'the Contract for the international Carriage of');
doc.text(108, 42.9, 'goods by road (CMR)');

doc.setFontSize(14);
doc.setFont("DejaVuSans", "bold");
doc.text(145, 33.5, 'CMR');
doc.setFontSize(10);
doc.text(159, 33, 'No:');

// 1. SENDER
doc.rect(14, 25, 91, 24);
doc.setFontSize(13);
doc.setFont("DejaVuSans", "bold");
doc.text(17, 30, '1');
doc.setFontSize(5.5);
doc.setFont("DejaVuSans", "normal");
doc.text(21, 27, 'Sender (name, address, country)');
doc.text(21, 28.8, 'Absender (Name, Anschrift, Land)');
doc.text(21, 30.6, 'Feladó (név, cím, ország)');

// 2. CONSIGNEE
doc.rect(14, 49, 91, 24);
doc.setFontSize(13);
doc.setFont("DejaVuSans", "bold");
doc.text(17, 54, '2');
doc.setFontSize(5.5);
doc.setFont("DejaVuSans", "normal");
doc.text(21, 51, 'Consignee (name, address, country)');
doc.text(21, 52.8, 'Empfänger (Name, Anschrift, Land)');
doc.text(21, 54.6, 'Átvevö (név, cím, ország)');

// 3. PLACE OF DELIVERY
doc.rect(14, 73, 91, 24);
doc.setFontSize(13);
doc.setFont("DejaVuSans", "bold");
doc.text(17, 78, '3');
doc.setFontSize(5.5);
doc.setFont("DejaVuSans", "normal");
doc.text(21, 75, 'Place of delivery of the goods (place, country)');
doc.text(21, 76.8, 'Auslieferungsort des Gutes (Ort, Land)');
doc.text(21, 78.6, 'Az áru kiszolgáltatási helye (hely, ország)');

// 4. PLACE AND DATE OF LOADING
doc.rect(14, 97, 91, 15);
doc.setFontSize(13);
doc.setFont("DejaVuSans", "bold");
doc.text(17, 102, '4');
doc.setFontSize(5.5);
doc.setFont("DejaVuSans", "normal");
doc.text(21, 99, 'Place and date taking over the goods (place, country, data)');
doc.text(21, 100.8, 'Ort und Tag der Ubernahme des Gutes (Ort, Land, Datum)');
doc.text(21, 102.6, 'Áru átvételének helye és idöpontja (hely, ország, idöpont)');

// 5. DOCUMENTS ATTACHED
doc.rect(14, 112, 91, 15);
doc.setFontSize(13);
doc.setFont("DejaVuSans", "bold");
doc.text(17, 117, '5');
doc.setFontSize(5.5);
doc.setFont("DejaVuSans", "normal");
doc.text(21, 114, 'Documents attached');
doc.text(21, 115.8, 'Beigefügte Dokumente');
doc.text(21, 117.6, 'Mellékelt okmányok');

// 6. 7. 8. 9.
doc.rect(14, 127, 113, 53);
doc.rect(14, 180, 113, 7);

// 6.
doc.setFontSize(13);
doc.setFont("DejaVuSans", "bold");
doc.text(17, 133, '6');
doc.setFontSize(5);
doc.setFont("DejaVuSans", "normal");
doc.text(21, 130, 'Marks and Nos');
doc.text(21, 131.8, 'Kennzeichen und Nummern');
doc.text(21, 133.6, 'Jelzés és számok');

doc.text(17, 182, 'Class');
doc.text(17, 183.8, 'Klasse');
doc.text(17, 185.6, 'Osztály');

// 7.
doc.setFontSize(13);
doc.setFont("DejaVuSans", "bold");
doc.text(46, 133, '7');
doc.setFontSize(5);
doc.setFont("DejaVuSans", "normal");
doc.text(50, 130, 'Number of packages');
doc.text(50, 131.8, 'Anzahl der Packstücke');
doc.text(50, 133.6, 'Csomagok száma');

doc.text(46, 182, 'Number');
doc.text(46, 183.8, 'Ziffer');
doc.text(46, 185.6, 'Szám');

// 8.
doc.setFontSize(13);
doc.setFont("DejaVuSans", "bold");
doc.text(75, 133, '8');
doc.setFontSize(5);
doc.setFont("DejaVuSans", "normal");
doc.text(79, 130, 'Method of packing');
doc.text(79, 131.8, 'Art der Verpackung');
doc.text(79, 133.6, 'Csomagolás módja');

doc.text(75, 182, 'Letter');
doc.text(75, 183.8, 'Buchstabe');
doc.text(75, 185.6, 'Betü');

// 9.
doc.setFontSize(13);
doc.setFont("DejaVuSans", "bold");
doc.text(101, 133, '9');
doc.setFontSize(5);
doc.setFont("DejaVuSans", "normal");
doc.text(105, 130, 'Nature of the goods');
doc.text(105, 131.8, 'Bezeichnung des Gutes');
doc.text(105, 133.6, 'Áru megnevezése');

doc.text(101, 182, '(ADR*)');

// 10. STATISTICAL NUMBER
doc.rect(127, 127, 23, 53);
doc.setFontSize(13);
doc.setFont("DejaVuSans", "bold");
doc.text(128, 133, '10');
doc.setFontSize(5);
doc.setFont("DejaVuSans", "normal");
doc.text(134, 130, 'Statistical number');
doc.text(134, 131.8, 'Statistiknummer');
doc.text(134, 133.6, 'Statisztikai szám');

// 11. GROSS WEIGHT
doc.rect(150, 127, 23, 53);
doc.setFontSize(13);
doc.setFont("DejaVuSans", "bold");
doc.text(151, 133, '11');
doc.setFontSize(5);
doc.setFont("DejaVuSans", "normal");
doc.text(157, 130, 'Gross weight in kg');
doc.text(157, 131.8, 'Bruttogewicht in kg');
doc.text(157, 133.6, 'Bruttó súly (kg)');

// 12. VOLUME
doc.rect(173, 127, 23, 53);
doc.setFontSize(13);
doc.setFont("DejaVuSans", "bold");
doc.text(174, 133, '12');
doc.setFontSize(5);
doc.setFont("DejaVuSans", "normal");
doc.text(180, 130, 'Volume in m3');
doc.text(180, 131.8, 'Umfang m3');
doc.text(180, 133.6, 'Térfogat (m3)');

// 13. SENDER'S INSTRUCTIONS
doc.rect(14, 187, 88, 42);
doc.setFontSize(13);
doc.setFont("DejaVuSans", "bold");
doc.text(15, 192, '13');
doc.setFontSize(5.5);
doc.setFont("DejaVuSans", "normal");
doc.text(21, 189, 'Senders instructions');
doc.text(21, 190.8, 'Anweisungen des Absenders');
doc.text(21, 192.6, 'A feladó rendelkezései');

// 14. CARRIAGE PAYMENT INSTRUCTIONS
doc.rect(14, 229, 88, 14);
doc.setFontSize(13);
doc.setFont("DejaVuSans", "bold");
doc.text(15, 234, '14');
doc.setFontSize(5.5);
doc.setFont("DejaVuSans", "normal");
doc.text(21, 231, 'Instruction as to payment for carriage');
doc.text(21, 232.8, 'Frachtzahlungsanweisungen');
doc.text(21, 234.6, 'Fuvardíjfizetési rendelkezések');
doc.text(21, 239.2, 'Carriage paid / Frei / Bérmentve');
doc.text(21, 241, 'Carriage forward / Unfrei / Bérmentesítés nélkül');

// 15. CASH ON DELIVERY
doc.rect(102, 243, 94, 9);
doc.setFontSize(13);
doc.setFont("DejaVuSans", "bold");
doc.text(103, 248, '15');
doc.setFontSize(5.5);
doc.setFont("DejaVuSans", "normal");
doc.text(110, 246, 'Reimbursment');
doc.text(110, 247.8, 'Rückerstattung');
doc.text(110, 249.6, 'Visszatérítés');

// 16. CARRIER
doc.setLineWidth(fat);
doc.rect(105, 49, 91, 78);
doc.setLineWidth(thin);
doc.rect(105, 49, 91, 24);
doc.setFontSize(13);
doc.setFont("DejaVuSans", "bold");
doc.text(106, 54, '16');
doc.setFontSize(5.5);
doc.text(112, 71.5, 'REG. NO. / Kennzeichen / Rendszám :');
doc.setFontSize(5.5);
doc.setFont("DejaVuSans", "normal");
doc.text(112, 51, 'Carrier (name, address, country)');
doc.text(112, 52.8, 'Frachtführer (Name, Anschrift, Land)');
doc.text(112, 54.6, 'Fuvarozó (név, cím, ország)');

// 17. SUCCESSIVE CARRIERS
doc.rect(105, 73, 91, 24);
doc.setFontSize(13);
doc.setFont("DejaVuSans", "bold");
doc.text(106, 78, '17');
doc.setFontSize(5.5);
doc.setFont("DejaVuSans", "normal");
doc.text(112, 75, 'Successive carriers (name, address, country)');
doc.text(112, 76.8, 'Nachfolgende Frachtführer (Name, Anschrift, Land)');
doc.text(112, 78.6, 'További fuvarozók (név, cím, ország)');

// 18. CARRIER'S RESERVATIONS AND OBSERVATIONS
doc.rect(105, 97, 91, 30);
doc.setFontSize(13);
doc.setFont("DejaVuSans", "bold");
doc.text(106, 102, '18');
doc.setFontSize(5.5);
doc.setFont("DejaVuSans", "normal");
doc.text(112, 99, 'Carrier’s reservations and observations');
doc.text(112, 100.8, 'Vorbehalte und Bemerkungen des Frachtführers');
doc.text(112, 102.6, 'Fuvarozó megjegyzései és fenntartásai');

// 19. SPECIAL AGREEMENTS
doc.rect(102, 187, 94, 22);
doc.setFontSize(13);
doc.setFont("DejaVuSans", "bold");
doc.text(103, 192, '19');
doc.setFontSize(5.5);
doc.setFont("DejaVuSans", "normal");
doc.text(110, 189, 'Special agreements');
doc.text(110, 190.8, 'Besondere Vereinbarungen');
doc.text(110, 192.6, 'Különleges megállapodások');

// 20. CARRIAGE CHARGES
doc.setLineWidth(fat);
doc.rect(102, 209, 94, 34);
doc.setLineWidth(thin);
doc.rect(102, 209, 94, 7);
doc.rect(102, 216, 94, 8);
doc.rect(102, 224, 94, 10.5);
doc.rect(102, 234.5, 94, 3.5);

doc.rect(127, 209, 14, 34);
doc.rect(127, 216, 69, 4);
doc.rect(127, 224, 69, 3.5);
doc.rect(127, 227.5, 69, 3.5);
doc.rect(141, 209, 9, 34);
doc.setLineWidth(fat);
doc.rect(150, 209, 24, 34);
doc.setLineWidth(thin);
doc.rect(174, 209, 14, 34);
doc.rect(150, 216, 12, 27);

doc.setFontSize(13);
doc.setFont("DejaVuSans", "bold");
doc.text(103, 214, '20');
doc.setFontSize(5.5);
doc.setFont("DejaVuSans", "normal");
doc.text(110, 211, 'To be paid by');
doc.text(110, 212.8, 'Zu zahlen vom');
doc.text(110, 214.6, 'Fizetendö');
doc.text(130, 211, 'Sender');
doc.text(130, 212.8, 'Absender');
doc.text(130, 214.6, 'Feladó');
doc.text(158, 211, 'Currency');
doc.text(158, 212.8, 'Währung');
doc.text(158, 214.6, 'Pénznem');
doc.text(176, 211, 'Consignee');
doc.text(176, 212.8, 'Empfänger');
doc.text(176, 214.6, 'Átvevö');

doc.setFontSize(5);
doc.text(103.5, 218, 'Carriage charges');
doc.text(103.5, 219.5, '/ Fracht / Fuvarozási díj');
doc.text(103.5, 221.7, 'Deductions / Ermäßigungen');
doc.text(103.5, 223.2, '/ Kedvezmények');
doc.text(103.5, 225.8, 'Balance / Zuschläge');
doc.text(103.5, 227.3, '/ Egyenleg');
doc.text(103.5, 229.1, 'Supplem. charges / ');
doc.text(103.5, 230.5, 'Nebengebuhren / Egyéb költ.');
doc.text(103.5, 232.3, 'Miscellaneous / Sonstiges /');
doc.text(103.5, 233.8, 'Toldalékok');
doc.text(103.5, 236.8, 'Insur. / Versicher. / Biztosít.');
doc.text(103.5, 240.2, 'Total to be paid / ');
doc.text(103.5, 241.7, 'Gesamtsumme / Végösszeg');

// 21. ESTABLISHED IN
doc.setLineWidth(thin);
doc.rect(14, 243, 88, 9);
doc.setFontSize(13);
doc.setFont("DejaVuSans", "bold");
doc.text(15, 248, '21');
doc.setFontSize(5.5);
doc.setFont("DejaVuSans", "normal");
doc.text(21, 245, 'Established in');
doc.text(21, 246.8, 'Ausgefertigt in');
doc.text(21, 248.6, 'Kiállítás helye');
doc.text(67, 245, 'on');
doc.text(67, 246.8, 'am');
doc.text(67, 248.6, 'idöpontja');

// 22. SIGNATURE AND STAMP OF THE SENDER
doc.rect(14, 252, 60, 35);
doc.setFontSize(13);
doc.setFont("DejaVuSans", "bold");
doc.text(15, 257, '22');
doc.setFontSize(5.5);
doc.setFont("DejaVuSans", "normal");
doc.text(16, 281.6, 'Signature and stamp of the sender');
doc.text(16, 283.4, 'Unterschrift und Stempel des Absenders');
doc.text(16, 285.2, 'Feladó aláírása és bélyegzöje');

// 23. SIGNATURE AND STAMP OF THE CARRIER
doc.setLineWidth(fat);
doc.rect(74, 252, 60, 35);
doc.setFontSize(13);
doc.setFont("DejaVuSans", "bold");
doc.text(75, 257, '23');
doc.setFontSize(5.5);
doc.setFont("DejaVuSans", "normal");
doc.text(76, 281.6, 'Signature and stamp of the carrier');
doc.text(76, 283.4, 'Unterschrift und Stempel des Frachtführers');
doc.text(76, 285.2, 'Fuvarozó aláírása és bélyegzöje');

// 24. GOODS RECEIVED
doc.setLineWidth(thin);
doc.rect(134, 252, 62, 35);
doc.setFontSize(13);
doc.setFont("DejaVuSans", "bold");
doc.text(136, 257, '24');
doc.setFontSize(5.5);
doc.setFont("DejaVuSans", "normal");
doc.text(142, 255, 'Goods received / Gut empfangen');
doc.text(142, 256.8, '/ Áru átvétele');
doc.text(136, 261, 'Place');
doc.text(136, 262.8, 'Ort');
doc.text(136, 264.6, 'Hely');
doc.text(164, 261, 'on');
doc.text(164, 262.8, 'am');
doc.text(164, 264.6, 'idöpont');
doc.text(136, 281.6, 'Signature and stamp of the consignee');
doc.text(136, 283.4, 'Unterschrift und Stempel des Empfängers');
doc.text(136, 285.2, 'Átvevö aláírása és bélyegzöje');

doc.text(14, 289.6, "Sic itur ad astra!");

// VERTICAL TEXT:
doc.setFontSize(4.5);
doc.text(8.5, 231, "To be completed on the sender's responsibility", null, 90);
doc.text(10.3, 231, 'Auszufüllen unter der Verantwortung des Absenders', null, 90);
doc.text(12.1, 231, 'A feladó felelösségére kitöltendö', null, 90);

doc.text(8.5, 177, 'including and', null, 90);
doc.text(10.3, 177, 'einschließlich', null, 90);
doc.text(12.1, 177, 'beleértve és', null, 90);

doc.text(8.5, 132, 'The spaces framed with heavy lines must be filled by the carrier.', null, 90);
doc.text(10.3, 132, 'Die mit fett gedruckten Linien eingerahmten Rubriken müssen vom Frachtführer ausgefüllt werden.', null, 90);
doc.text(12.1, 132, 'A vastag vonallal keretezett mezök kitöltése a fuvarozó kötelezettsége.', null, 90);

doc.text(202, 90, '* In case of dangerous goods mention, besides the possible certification, on the last line of the column the particulars of the class, the number and the letter, if any.', null, -90);
doc.text(200.2, 90, '* Bei gefährlichen Gütern ist, außer der eventuellen Bescheinigung, auf der letzten Linie der Rubrik anzugeben: die Klasse, die Ziffer, sowie gegebenenfalls der Buchstabe.', null, -90);
doc.text(198.4, 90, '* Veszélyes áruk esetén a lehetséges tanúsítványon kívül a legutolsó sorban meg kell adni: az osztályt, a számot és esetleg a betüt.', null, -90);

doc.setFontSize(13);
doc.setFont("DejaVuSans", "bold");
doc.text(11.5, 191.5, '1 - 15', null, 90);
doc.text(11.5, 163, '19 + 20 + 22', null, 90);    
    
    
    // INPUTS:
    
    
    doc.setFontSize(8);
    doc.setFont("DejaVuSans", "normal");
    doc.setTextColor(1, 1, 1);
    doc.text(21, 35, document.getElementById("senderaddress").value);
    doc.text(166, 33, document.getElementById("cmrnumber").value);
    doc.text(21, 59, document.getElementById("consigneename").value);
    doc.text(112, 59, document.getElementById("carrieraddress").value);
    doc.text(150, 71.5, document.getElementById("vehiclereg").value);
    doc.text(21, 83, document.getElementById("deliveryplace").value);
    doc.text(112, 83, document.getElementById("nextcarriers").value);
    doc.text(21, 107, document.getElementById("takingoverplace").value);
    doc.text(112, 107, document.getElementById("carrierobservations").value);
    doc.text(70, 107, document.getElementById("datepicker").value);
    doc.text(21, 122, document.getElementById("documents").value);
    
    doc.text(21, 139, document.getElementById("6marks1").value);
    doc.text(50, 139, document.getElementById("7number1").value);
    doc.text(79, 139, document.getElementById("8method1").value);
    doc.text(105, 139, document.getElementById("9nature1").value);
    doc.text(134, 139, document.getElementById("10number1").value);
    doc.text(157, 139, document.getElementById("11kg1").value);
    doc.text(180, 139, document.getElementById("12volume1").value);
    
    doc.text(21, 146, document.getElementById("6marks2").value);
    doc.text(50, 146, document.getElementById("7number2").value);
    doc.text(79, 146, document.getElementById("8method2").value);
    doc.text(105, 146, document.getElementById("9nature2").value);
    doc.text(134, 146, document.getElementById("10number2").value);
    doc.text(157, 146, document.getElementById("11kg2").value);
    doc.text(180, 146, document.getElementById("12volume2").value);
    
    doc.text(21, 153, document.getElementById("6marks3").value);
    doc.text(50, 153, document.getElementById("7number3").value);
    doc.text(79, 153, document.getElementById("8method3").value);
    doc.text(105, 153, document.getElementById("9nature3").value);
    doc.text(134, 153, document.getElementById("10number3").value);
    doc.text(157, 153, document.getElementById("11kg3").value);
    doc.text(180, 153, document.getElementById("12volume3").value);
    
    doc.text(21, 160, document.getElementById("6marks4").value);
    doc.text(50, 160, document.getElementById("7number4").value);
    doc.text(79, 160, document.getElementById("8method4").value);
    doc.text(105, 160, document.getElementById("9nature4").value);
    doc.text(134, 160, document.getElementById("10number4").value);
    doc.text(157, 160, document.getElementById("11kg4").value);
    doc.text(180, 160, document.getElementById("12volume4").value);
    
    doc.text(25, 184.5, document.getElementById("6class").value);
    doc.text(54, 184.5, document.getElementById("7number").value);
    doc.text(85, 184.5, document.getElementById("8letter").value);
    doc.text(109, 184.5, document.getElementById("9adr").value);
    
    doc.text(21, 197, document.getElementById("sendersinstructions").value);
    doc.text(110, 197, document.getElementById("specialagreements").value);
    
    doc.text(57, 234, document.getElementById("carriageinstructions").value);
    doc.text(67, 238, document.getElementById("carriagepaid").value);
    doc.text(67, 242, document.getElementById("carriageforward").value);
    
    doc.text(38, 248, document.getElementById("establishedin").value);
    doc.text(76, 248, document.getElementById("datepicker2").value);
    doc.text(129, 248, document.getElementById("cashondelivery").value);
    
    // ==============================================================================================
    
	doc.addPage();

     // 2. COPY FOR CONSIGNEE ==================================================================
    //=========================================================================================

    doc.setDrawColor(0, 130, 200);
    doc.setLineWidth(thin);
    
    doc.rect(14, 25, 182, 262); // main rectangle

    doc.setTextColor(0, 130, 200);
    doc.setFontSize(28);

doc.setFont("DejaVuSans", "bold");
doc.text(7, 25, '1');
doc.setFontSize(6.5);
doc.text(14, 20, 'Copy for consignee');
doc.text(14, 22, 'Exemplar fur den Empfanger');
doc.text(14, 24, 'Átvevö példánya');

doc.rect(105, 25, 91, 24);
doc.setFont("DejaVuSans", "normal");
doc.setFontSize(5.5);
doc.text(108, 27, 'INTERNATIONAL CONSIGNMENT');
doc.text(108, 29, 'INTERNATIONALER FRACHTBRIEF');
doc.text(108, 31, 'NEMZETKÖZI FUVARLEVÉL');
doc.setFontSize(5);
doc.text(108, 45.6, 'A fuvarozásra eltérö megállapodás esetén is a Nemzetközi Árufuvarozási Egyezmény (CMR)');
doc.text(108, 47.4, 'rendelkezései az irányadók.');
doc.text(154, 37.5, 'Diese Beforderung unterliegt trotz einer gegen-');
doc.text(154, 39.3, 'teiligen Abmachung den Bestimmungen des');
doc.text(154, 41.1, 'Ubereinkommens uber den Beforderungsvertrag');
doc.text(154, 42.9, 'im internationalen Strassenguterverkehr (CMR)');
doc.text(108, 37.5, 'This carriage is subject notwithstanding any');
doc.text(108, 39.3, 'clause to the contrary, to the Convention on');
doc.text(108, 41.1, 'the Contract for the international Carriage of');
doc.text(108, 42.9, 'goods by road (CMR)');

doc.setFontSize(14);
doc.setFont("DejaVuSans", "bold");
doc.text(145, 33.5, 'CMR');
doc.setFontSize(10);
doc.text(159, 33, 'No:');

// 1. SENDER
doc.rect(14, 25, 91, 24);
doc.setFontSize(13);
doc.setFont("DejaVuSans", "bold");
doc.text(17, 30, '1');
doc.setFontSize(5.5);
doc.setFont("DejaVuSans", "normal");
doc.text(21, 27, 'Sender (name, address, country)');
doc.text(21, 28.8, 'Absender (Name, Anschrift, Land)');
doc.text(21, 30.6, 'Feladó (név, cím, ország)');

// 2. CONSIGNEE
doc.rect(14, 49, 91, 24);
doc.setFontSize(13);
doc.setFont("DejaVuSans", "bold");
doc.text(17, 54, '2');
doc.setFontSize(5.5);
doc.setFont("DejaVuSans", "normal");
doc.text(21, 51, 'Consignee (name, address, country)');
doc.text(21, 52.8, 'Empfänger (Name, Anschrift, Land)');
doc.text(21, 54.6, 'Átvevö (név, cím, ország)');

// 3. PLACE OF DELIVERY
doc.rect(14, 73, 91, 24);
doc.setFontSize(13);
doc.setFont("DejaVuSans", "bold");
doc.text(17, 78, '3');
doc.setFontSize(5.5);
doc.setFont("DejaVuSans", "normal");
doc.text(21, 75, 'Place of delivery of the goods (place, country)');
doc.text(21, 76.8, 'Auslieferungsort des Gutes (Ort, Land)');
doc.text(21, 78.6, 'Az áru kiszolgáltatási helye (hely, ország)');

// 4. PLACE AND DATE OF LOADING
doc.rect(14, 97, 91, 15);
doc.setFontSize(13);
doc.setFont("DejaVuSans", "bold");
doc.text(17, 102, '4');
doc.setFontSize(5.5);
doc.setFont("DejaVuSans", "normal");
doc.text(21, 99, 'Place and date taking over the goods (place, country, data)');
doc.text(21, 100.8, 'Ort und Tag der Ubernahme des Gutes (Ort, Land, Datum)');
doc.text(21, 102.6, 'Áru átvételének helye és idöpontja (hely, ország, idöpont)');

// 5. DOCUMENTS ATTACHED
doc.rect(14, 112, 91, 15);
doc.setFontSize(13);
doc.setFont("DejaVuSans", "bold");
doc.text(17, 117, '5');
doc.setFontSize(5.5);
doc.setFont("DejaVuSans", "normal");
doc.text(21, 114, 'Documents attached');
doc.text(21, 115.8, 'Beigefügte Dokumente');
doc.text(21, 117.6, 'Mellékelt okmányok');

// 6. 7. 8. 9.
doc.rect(14, 127, 113, 53);
doc.rect(14, 180, 113, 7);

// 6.
doc.setFontSize(13);
doc.setFont("DejaVuSans", "bold");
doc.text(17, 133, '6');
doc.setFontSize(5);
doc.setFont("DejaVuSans", "normal");
doc.text(21, 130, 'Marks and Nos');
doc.text(21, 131.8, 'Kennzeichen und Nummern');
doc.text(21, 133.6, 'Jelzés és számok');

doc.text(17, 182, 'Class');
doc.text(17, 183.8, 'Klasse');
doc.text(17, 185.6, 'Osztály');

// 7.
doc.setFontSize(13);
doc.setFont("DejaVuSans", "bold");
doc.text(46, 133, '7');
doc.setFontSize(5);
doc.setFont("DejaVuSans", "normal");
doc.text(50, 130, 'Number of packages');
doc.text(50, 131.8, 'Anzahl der Packstücke');
doc.text(50, 133.6, 'Csomagok száma');

doc.text(46, 182, 'Number');
doc.text(46, 183.8, 'Ziffer');
doc.text(46, 185.6, 'Szám');

// 8.
doc.setFontSize(13);
doc.setFont("DejaVuSans", "bold");
doc.text(75, 133, '8');
doc.setFontSize(5);
doc.setFont("DejaVuSans", "normal");
doc.text(79, 130, 'Method of packing');
doc.text(79, 131.8, 'Art der Verpackung');
doc.text(79, 133.6, 'Csomagolás módja');

doc.text(75, 182, 'Letter');
doc.text(75, 183.8, 'Buchstabe');
doc.text(75, 185.6, 'Betü');

// 9.
doc.setFontSize(13);
doc.setFont("DejaVuSans", "bold");
doc.text(101, 133, '9');
doc.setFontSize(5);
doc.setFont("DejaVuSans", "normal");
doc.text(105, 130, 'Nature of the goods');
doc.text(105, 131.8, 'Bezeichnung des Gutes');
doc.text(105, 133.6, 'Áru megnevezése');

doc.text(101, 182, '(ADR*)');

// 10. STATISTICAL NUMBER
doc.rect(127, 127, 23, 53);
doc.setFontSize(13);
doc.setFont("DejaVuSans", "bold");
doc.text(128, 133, '10');
doc.setFontSize(5);
doc.setFont("DejaVuSans", "normal");
doc.text(134, 130, 'Statistical number');
doc.text(134, 131.8, 'Statistiknummer');
doc.text(134, 133.6, 'Statisztikai szám');

// 11. GROSS WEIGHT
doc.rect(150, 127, 23, 53);
doc.setFontSize(13);
doc.setFont("DejaVuSans", "bold");
doc.text(151, 133, '11');
doc.setFontSize(5);
doc.setFont("DejaVuSans", "normal");
doc.text(157, 130, 'Gross weight in kg');
doc.text(157, 131.8, 'Bruttogewicht in kg');
doc.text(157, 133.6, 'Bruttó súly (kg)');

// 12. VOLUME
doc.rect(173, 127, 23, 53);
doc.setFontSize(13);
doc.setFont("DejaVuSans", "bold");
doc.text(174, 133, '12');
doc.setFontSize(5);
doc.setFont("DejaVuSans", "normal");
doc.text(180, 130, 'Volume in m3');
doc.text(180, 131.8, 'Umfang m3');
doc.text(180, 133.6, 'Térfogat (m3)');

// 13. SENDER'S INSTRUCTIONS
doc.rect(14, 187, 88, 42);
doc.setFontSize(13);
doc.setFont("DejaVuSans", "bold");
doc.text(15, 192, '13');
doc.setFontSize(5.5);
doc.setFont("DejaVuSans", "normal");
doc.text(21, 189, 'Senders instructions');
doc.text(21, 190.8, 'Anweisungen des Absenders');
doc.text(21, 192.6, 'A feladó rendelkezései');

// 14. CARRIAGE PAYMENT INSTRUCTIONS
doc.rect(14, 229, 88, 14);
doc.setFontSize(13);
doc.setFont("DejaVuSans", "bold");
doc.text(15, 234, '14');
doc.setFontSize(5.5);
doc.setFont("DejaVuSans", "normal");
doc.text(21, 231, 'Instruction as to payment for carriage');
doc.text(21, 232.8, 'Frachtzahlungsanweisungen');
doc.text(21, 234.6, 'Fuvardíjfizetési rendelkezések');
doc.text(21, 239.2, 'Carriage paid / Frei / Bérmentve');
doc.text(21, 241, 'Carriage forward / Unfrei / Bérmentesítés nélkül');

// 15. CASH ON DELIVERY
doc.rect(102, 243, 94, 9);
doc.setFontSize(13);
doc.setFont("DejaVuSans", "bold");
doc.text(103, 248, '15');
doc.setFontSize(5.5);
doc.setFont("DejaVuSans", "normal");
doc.text(110, 246, 'Reimbursment');
doc.text(110, 247.8, 'Rückerstattung');
doc.text(110, 249.6, 'Visszatérítés');

// 16. CARRIER
doc.setLineWidth(fat);
doc.rect(105, 49, 91, 78);
doc.setLineWidth(thin);
doc.rect(105, 49, 91, 24);
doc.setFontSize(13);
doc.setFont("DejaVuSans", "bold");
doc.text(106, 54, '16');
doc.setFontSize(5.5);
doc.text(112, 71.5, 'REG. NO. / Kennzeichen / Rendszám :');
doc.setFontSize(5.5);
doc.setFont("DejaVuSans", "normal");
doc.text(112, 51, 'Carrier (name, address, country)');
doc.text(112, 52.8, 'Frachtführer (Name, Anschrift, Land)');
doc.text(112, 54.6, 'Fuvarozó (név, cím, ország)');

// 17. SUCCESSIVE CARRIERS
doc.rect(105, 73, 91, 24);
doc.setFontSize(13);
doc.setFont("DejaVuSans", "bold");
doc.text(106, 78, '17');
doc.setFontSize(5.5);
doc.setFont("DejaVuSans", "normal");
doc.text(112, 75, 'Successive carriers (name, address, country)');
doc.text(112, 76.8, 'Nachfolgende Frachtführer (Name, Anschrift, Land)');
doc.text(112, 78.6, 'További fuvarozók (név, cím, ország)');

// 18. CARRIER'S RESERVATIONS AND OBSERVATIONS
doc.rect(105, 97, 91, 30);
doc.setFontSize(13);
doc.setFont("DejaVuSans", "bold");
doc.text(106, 102, '18');
doc.setFontSize(5.5);
doc.setFont("DejaVuSans", "normal");
doc.text(112, 99, 'Carrier’s reservations and observations');
doc.text(112, 100.8, 'Vorbehalte und Bemerkungen des Frachtführers');
doc.text(112, 102.6, 'Fuvarozó megjegyzései és fenntartásai');

// 19. SPECIAL AGREEMENTS
doc.rect(102, 187, 94, 22);
doc.setFontSize(13);
doc.setFont("DejaVuSans", "bold");
doc.text(103, 192, '19');
doc.setFontSize(5.5);
doc.setFont("DejaVuSans", "normal");
doc.text(110, 189, 'Special agreements');
doc.text(110, 190.8, 'Besondere Vereinbarungen');
doc.text(110, 192.6, 'Különleges megállapodások');

// 20. CARRIAGE CHARGES
doc.setLineWidth(fat);
doc.rect(102, 209, 94, 34);
doc.setLineWidth(thin);
doc.rect(102, 209, 94, 7);
doc.rect(102, 216, 94, 8);
doc.rect(102, 224, 94, 10.5);
doc.rect(102, 234.5, 94, 3.5);

doc.rect(127, 209, 14, 34);
doc.rect(127, 216, 69, 4);
doc.rect(127, 224, 69, 3.5);
doc.rect(127, 227.5, 69, 3.5);
doc.rect(141, 209, 9, 34);
doc.setLineWidth(fat);
doc.rect(150, 209, 24, 34);
doc.setLineWidth(thin);
doc.rect(174, 209, 14, 34);
doc.rect(150, 216, 12, 27);

doc.setFontSize(13);
doc.setFont("DejaVuSans", "bold");
doc.text(103, 214, '20');
doc.setFontSize(5.5);
doc.setFont("DejaVuSans", "normal");
doc.text(110, 211, 'To be paid by');
doc.text(110, 212.8, 'Zu zahlen vom');
doc.text(110, 214.6, 'Fizetendö');
doc.text(130, 211, 'Sender');
doc.text(130, 212.8, 'Absender');
doc.text(130, 214.6, 'Feladó');
doc.text(158, 211, 'Currency');
doc.text(158, 212.8, 'Währung');
doc.text(158, 214.6, 'Pénznem');
doc.text(176, 211, 'Consignee');
doc.text(176, 212.8, 'Empfänger');
doc.text(176, 214.6, 'Átvevö');

doc.setFontSize(5);
doc.text(103.5, 218, 'Carriage charges');
doc.text(103.5, 219.5, '/ Fracht / Fuvarozási díj');
doc.text(103.5, 221.7, 'Deductions / Ermäßigungen');
doc.text(103.5, 223.2, '/ Kedvezmények');
doc.text(103.5, 225.8, 'Balance / Zuschläge');
doc.text(103.5, 227.3, '/ Egyenleg');
doc.text(103.5, 229.1, 'Supplem. charges / ');
doc.text(103.5, 230.5, 'Nebengebuhren / Egyéb költ.');
doc.text(103.5, 232.3, 'Miscellaneous / Sonstiges /');
doc.text(103.5, 233.8, 'Toldalékok');
doc.text(103.5, 236.8, 'Insur. / Versicher. / Biztosít.');
doc.text(103.5, 240.2, 'Total to be paid / ');
doc.text(103.5, 241.7, 'Gesamtsumme / Végösszeg');

// 21. ESTABLISHED IN
doc.setLineWidth(thin);
doc.rect(14, 243, 88, 9);
doc.setFontSize(13);
doc.setFont("DejaVuSans", "bold");
doc.text(15, 248, '21');
doc.setFontSize(5.5);
doc.setFont("DejaVuSans", "normal");
doc.text(21, 245, 'Established in');
doc.text(21, 246.8, 'Ausgefertigt in');
doc.text(21, 248.6, 'Kiállítás helye');
doc.text(67, 245, 'on');
doc.text(67, 246.8, 'am');
doc.text(67, 248.6, 'idöpontja');

// 22. SIGNATURE AND STAMP OF THE SENDER
doc.rect(14, 252, 60, 35);
doc.setFontSize(13);
doc.setFont("DejaVuSans", "bold");
doc.text(15, 257, '22');
doc.setFontSize(5.5);
doc.setFont("DejaVuSans", "normal");
doc.text(16, 281.6, 'Signature and stamp of the sender');
doc.text(16, 283.4, 'Unterschrift und Stempel des Absenders');
doc.text(16, 285.2, 'Feladó aláírása és bélyegzöje');

// 23. SIGNATURE AND STAMP OF THE CARRIER
doc.setLineWidth(fat);
doc.rect(74, 252, 60, 35);
doc.setFontSize(13);
doc.setFont("DejaVuSans", "bold");
doc.text(75, 257, '23');
doc.setFontSize(5.5);
doc.setFont("DejaVuSans", "normal");
doc.text(76, 281.6, 'Signature and stamp of the carrier');
doc.text(76, 283.4, 'Unterschrift und Stempel des Frachtführers');
doc.text(76, 285.2, 'Fuvarozó aláírása és bélyegzöje');

// 24. GOODS RECEIVED
doc.setLineWidth(thin);
doc.rect(134, 252, 62, 35);
doc.setFontSize(13);
doc.setFont("DejaVuSans", "bold");
doc.text(136, 257, '24');
doc.setFontSize(5.5);
doc.setFont("DejaVuSans", "normal");
doc.text(142, 255, 'Goods received / Gut empfangen');
doc.text(142, 256.8, '/ Áru átvétele');
doc.text(136, 261, 'Place');
doc.text(136, 262.8, 'Ort');
doc.text(136, 264.6, 'Hely');
doc.text(164, 261, 'on');
doc.text(164, 262.8, 'am');
doc.text(164, 264.6, 'idöpont');
doc.text(136, 281.6, 'Signature and stamp of the consignee');
doc.text(136, 283.4, 'Unterschrift und Stempel des Empfängers');
doc.text(136, 285.2, 'Átvevö aláírása és bélyegzöje');

doc.text(14, 289.6, "Sic itur ad astra!");

// VERTICAL TEXT:
doc.setFontSize(4.5);
doc.text(8.5, 231, "To be completed on the sender's responsibility", null, 90);
doc.text(10.3, 231, 'Auszufüllen unter der Verantwortung des Absenders', null, 90);
doc.text(12.1, 231, 'A feladó felelösségére kitöltendö', null, 90);

doc.text(8.5, 177, 'including and', null, 90);
doc.text(10.3, 177, 'einschließlich', null, 90);
doc.text(12.1, 177, 'beleértve és', null, 90);

doc.text(8.5, 132, 'The spaces framed with heavy lines must be filled by the carrier.', null, 90);
doc.text(10.3, 132, 'Die mit fett gedruckten Linien eingerahmten Rubriken müssen vom Frachtführer ausgefüllt werden.', null, 90);
doc.text(12.1, 132, 'A vastag vonallal keretezett mezök kitöltése a fuvarozó kötelezettsége.', null, 90);

doc.text(202, 90, '* In case of dangerous goods mention, besides the possible certification, on the last line of the column the particulars of the class, the number and the letter, if any.', null, -90);
doc.text(200.2, 90, '* Bei gefährlichen Gütern ist, außer der eventuellen Bescheinigung, auf der letzten Linie der Rubrik anzugeben: die Klasse, die Ziffer, sowie gegebenenfalls der Buchstabe.', null, -90);
doc.text(198.4, 90, '* Veszélyes áruk esetén a lehetséges tanúsítványon kívül a legutolsó sorban meg kell adni: az osztályt, a számot és esetleg a betüt.', null, -90);

doc.setFontSize(13);
doc.setFont("DejaVuSans", "bold");
doc.text(11.5, 191.5, '1 - 15', null, 90);
doc.text(11.5, 163, '19 + 20 + 22', null, 90);      
    
    
    // INPUTS:
    
    
    doc.setFontSize(8);
    doc.setFont("DejaVuSans", "normal");
    doc.setTextColor(1, 1, 1);
    doc.text(21, 35, document.getElementById("senderaddress").value);
    doc.text(166, 33, document.getElementById("cmrnumber").value);
    doc.text(21, 59, document.getElementById("consigneename").value);
    doc.text(112, 59, document.getElementById("carrieraddress").value);
    doc.text(150, 71.5, document.getElementById("vehiclereg").value);
    doc.text(21, 83, document.getElementById("deliveryplace").value);
    doc.text(112, 83, document.getElementById("nextcarriers").value);
    doc.text(21, 107, document.getElementById("takingoverplace").value);
    doc.text(112, 107, document.getElementById("carrierobservations").value);
    doc.text(70, 107, document.getElementById("datepicker").value);
    doc.text(21, 122, document.getElementById("documents").value);
    
    doc.text(21, 139, document.getElementById("6marks1").value);
    doc.text(50, 139, document.getElementById("7number1").value);
    doc.text(79, 139, document.getElementById("8method1").value);
    doc.text(105, 139, document.getElementById("9nature1").value);
    doc.text(134, 139, document.getElementById("10number1").value);
    doc.text(157, 139, document.getElementById("11kg1").value);
    doc.text(180, 139, document.getElementById("12volume1").value);
    
    doc.text(21, 146, document.getElementById("6marks2").value);
    doc.text(50, 146, document.getElementById("7number2").value);
    doc.text(79, 146, document.getElementById("8method2").value);
    doc.text(105, 146, document.getElementById("9nature2").value);
    doc.text(134, 146, document.getElementById("10number2").value);
    doc.text(157, 146, document.getElementById("11kg2").value);
    doc.text(180, 146, document.getElementById("12volume2").value);
    
    doc.text(21, 153, document.getElementById("6marks3").value);
    doc.text(50, 153, document.getElementById("7number3").value);
    doc.text(79, 153, document.getElementById("8method3").value);
    doc.text(105, 153, document.getElementById("9nature3").value);
    doc.text(134, 153, document.getElementById("10number3").value);
    doc.text(157, 153, document.getElementById("11kg3").value);
    doc.text(180, 153, document.getElementById("12volume3").value);
    
    doc.text(21, 160, document.getElementById("6marks4").value);
    doc.text(50, 160, document.getElementById("7number4").value);
    doc.text(79, 160, document.getElementById("8method4").value);
    doc.text(105, 160, document.getElementById("9nature4").value);
    doc.text(134, 160, document.getElementById("10number4").value);
    doc.text(157, 160, document.getElementById("11kg4").value);
    doc.text(180, 160, document.getElementById("12volume4").value);
    
    doc.text(25, 184.5, document.getElementById("6class").value);
    doc.text(54, 184.5, document.getElementById("7number").value);
    doc.text(85, 184.5, document.getElementById("8letter").value);
    doc.text(109, 184.5, document.getElementById("9adr").value);
    
    doc.text(21, 197, document.getElementById("sendersinstructions").value);
    doc.text(110, 197, document.getElementById("specialagreements").value);
    
    doc.text(57, 234, document.getElementById("carriageinstructions").value);
    doc.text(67, 238, document.getElementById("carriagepaid").value);
    doc.text(67, 242, document.getElementById("carriageforward").value);
    
    doc.text(38, 248, document.getElementById("establishedin").value);
    doc.text(76, 248, document.getElementById("datepicker2").value);
    doc.text(129, 248, document.getElementById("cashondelivery").value);
    
    
      // ==============================================================================================
    
	doc.addPage();

     // 3. COPY FOR CARRIER ===================================================================
    //=========================================================================================

    doc.setDrawColor(0, 169, 79);
    doc.setLineWidth(thin);
    
    doc.rect(14, 25, 182, 262); // main rectangle

    doc.setTextColor(0, 169, 79);
    doc.setFontSize(28);

doc.setFont("DejaVuSans", "bold");
doc.text(7, 25, '1');
doc.setFontSize(6.5);
doc.text(14, 20, 'Copy for carrier');
doc.text(14, 22, 'Exemplar fur den Frachtfuhrer');
doc.text(14, 24, 'Fuvarozó példánya');

doc.rect(105, 25, 91, 24);
doc.setFont("DejaVuSans", "normal");
doc.setFontSize(5.5);
doc.text(108, 27, 'INTERNATIONAL CONSIGNMENT');
doc.text(108, 29, 'INTERNATIONALER FRACHTBRIEF');
doc.text(108, 31, 'NEMZETKÖZI FUVARLEVÉL');
doc.setFontSize(5);
doc.text(108, 45.6, 'A fuvarozásra eltérö megállapodás esetén is a Nemzetközi Árufuvarozási Egyezmény (CMR)');
doc.text(108, 47.4, 'rendelkezései az irányadók.');
doc.text(154, 37.5, 'Diese Beforderung unterliegt trotz einer gegen-');
doc.text(154, 39.3, 'teiligen Abmachung den Bestimmungen des');
doc.text(154, 41.1, 'Ubereinkommens uber den Beforderungsvertrag');
doc.text(154, 42.9, 'im internationalen Strassenguterverkehr (CMR)');
doc.text(108, 37.5, 'This carriage is subject notwithstanding any');
doc.text(108, 39.3, 'clause to the contrary, to the Convention on');
doc.text(108, 41.1, 'the Contract for the international Carriage of');
doc.text(108, 42.9, 'goods by road (CMR)');

doc.setFontSize(14);
doc.setFont("DejaVuSans", "bold");
doc.text(145, 33.5, 'CMR');
doc.setFontSize(10);
doc.text(159, 33, 'No:');

// 1. SENDER
doc.rect(14, 25, 91, 24);
doc.setFontSize(13);
doc.setFont("DejaVuSans", "bold");
doc.text(17, 30, '1');
doc.setFontSize(5.5);
doc.setFont("DejaVuSans", "normal");
doc.text(21, 27, 'Sender (name, address, country)');
doc.text(21, 28.8, 'Absender (Name, Anschrift, Land)');
doc.text(21, 30.6, 'Feladó (név, cím, ország)');

// 2. CONSIGNEE
doc.rect(14, 49, 91, 24);
doc.setFontSize(13);
doc.setFont("DejaVuSans", "bold");
doc.text(17, 54, '2');
doc.setFontSize(5.5);
doc.setFont("DejaVuSans", "normal");
doc.text(21, 51, 'Consignee (name, address, country)');
doc.text(21, 52.8, 'Empfänger (Name, Anschrift, Land)');
doc.text(21, 54.6, 'Átvevö (név, cím, ország)');

// 3. PLACE OF DELIVERY
doc.rect(14, 73, 91, 24);
doc.setFontSize(13);
doc.setFont("DejaVuSans", "bold");
doc.text(17, 78, '3');
doc.setFontSize(5.5);
doc.setFont("DejaVuSans", "normal");
doc.text(21, 75, 'Place of delivery of the goods (place, country)');
doc.text(21, 76.8, 'Auslieferungsort des Gutes (Ort, Land)');
doc.text(21, 78.6, 'Az áru kiszolgáltatási helye (hely, ország)');

// 4. PLACE AND DATE OF LOADING
doc.rect(14, 97, 91, 15);
doc.setFontSize(13);
doc.setFont("DejaVuSans", "bold");
doc.text(17, 102, '4');
doc.setFontSize(5.5);
doc.setFont("DejaVuSans", "normal");
doc.text(21, 99, 'Place and date taking over the goods (place, country, data)');
doc.text(21, 100.8, 'Ort und Tag der Ubernahme des Gutes (Ort, Land, Datum)');
doc.text(21, 102.6, 'Áru átvételének helye és idöpontja (hely, ország, idöpont)');

// 5. DOCUMENTS ATTACHED
doc.rect(14, 112, 91, 15);
doc.setFontSize(13);
doc.setFont("DejaVuSans", "bold");
doc.text(17, 117, '5');
doc.setFontSize(5.5);
doc.setFont("DejaVuSans", "normal");
doc.text(21, 114, 'Documents attached');
doc.text(21, 115.8, 'Beigefügte Dokumente');
doc.text(21, 117.6, 'Mellékelt okmányok');

// 6. 7. 8. 9.
doc.rect(14, 127, 113, 53);
doc.rect(14, 180, 113, 7);

// 6.
doc.setFontSize(13);
doc.setFont("DejaVuSans", "bold");
doc.text(17, 133, '6');
doc.setFontSize(5);
doc.setFont("DejaVuSans", "normal");
doc.text(21, 130, 'Marks and Nos');
doc.text(21, 131.8, 'Kennzeichen und Nummern');
doc.text(21, 133.6, 'Jelzés és számok');

doc.text(17, 182, 'Class');
doc.text(17, 183.8, 'Klasse');
doc.text(17, 185.6, 'Osztály');

// 7.
doc.setFontSize(13);
doc.setFont("DejaVuSans", "bold");
doc.text(46, 133, '7');
doc.setFontSize(5);
doc.setFont("DejaVuSans", "normal");
doc.text(50, 130, 'Number of packages');
doc.text(50, 131.8, 'Anzahl der Packstücke');
doc.text(50, 133.6, 'Csomagok száma');

doc.text(46, 182, 'Number');
doc.text(46, 183.8, 'Ziffer');
doc.text(46, 185.6, 'Szám');

// 8.
doc.setFontSize(13);
doc.setFont("DejaVuSans", "bold");
doc.text(75, 133, '8');
doc.setFontSize(5);
doc.setFont("DejaVuSans", "normal");
doc.text(79, 130, 'Method of packing');
doc.text(79, 131.8, 'Art der Verpackung');
doc.text(79, 133.6, 'Csomagolás módja');

doc.text(75, 182, 'Letter');
doc.text(75, 183.8, 'Buchstabe');
doc.text(75, 185.6, 'Betü');

// 9.
doc.setFontSize(13);
doc.setFont("DejaVuSans", "bold");
doc.text(101, 133, '9');
doc.setFontSize(5);
doc.setFont("DejaVuSans", "normal");
doc.text(105, 130, 'Nature of the goods');
doc.text(105, 131.8, 'Bezeichnung des Gutes');
doc.text(105, 133.6, 'Áru megnevezése');

doc.text(101, 182, '(ADR*)');

// 10. STATISTICAL NUMBER
doc.rect(127, 127, 23, 53);
doc.setFontSize(13);
doc.setFont("DejaVuSans", "bold");
doc.text(128, 133, '10');
doc.setFontSize(5);
doc.setFont("DejaVuSans", "normal");
doc.text(134, 130, 'Statistical number');
doc.text(134, 131.8, 'Statistiknummer');
doc.text(134, 133.6, 'Statisztikai szám');

// 11. GROSS WEIGHT
doc.rect(150, 127, 23, 53);
doc.setFontSize(13);
doc.setFont("DejaVuSans", "bold");
doc.text(151, 133, '11');
doc.setFontSize(5);
doc.setFont("DejaVuSans", "normal");
doc.text(157, 130, 'Gross weight in kg');
doc.text(157, 131.8, 'Bruttogewicht in kg');
doc.text(157, 133.6, 'Bruttó súly (kg)');

// 12. VOLUME
doc.rect(173, 127, 23, 53);
doc.setFontSize(13);
doc.setFont("DejaVuSans", "bold");
doc.text(174, 133, '12');
doc.setFontSize(5);
doc.setFont("DejaVuSans", "normal");
doc.text(180, 130, 'Volume in m3');
doc.text(180, 131.8, 'Umfang m3');
doc.text(180, 133.6, 'Térfogat (m3)');

// 13. SENDER'S INSTRUCTIONS
doc.rect(14, 187, 88, 42);
doc.setFontSize(13);
doc.setFont("DejaVuSans", "bold");
doc.text(15, 192, '13');
doc.setFontSize(5.5);
doc.setFont("DejaVuSans", "normal");
doc.text(21, 189, 'Senders instructions');
doc.text(21, 190.8, 'Anweisungen des Absenders');
doc.text(21, 192.6, 'A feladó rendelkezései');

// 14. CARRIAGE PAYMENT INSTRUCTIONS
doc.rect(14, 229, 88, 14);
doc.setFontSize(13);
doc.setFont("DejaVuSans", "bold");
doc.text(15, 234, '14');
doc.setFontSize(5.5);
doc.setFont("DejaVuSans", "normal");
doc.text(21, 231, 'Instruction as to payment for carriage');
doc.text(21, 232.8, 'Frachtzahlungsanweisungen');
doc.text(21, 234.6, 'Fuvardíjfizetési rendelkezések');
doc.text(21, 239.2, 'Carriage paid / Frei / Bérmentve');
doc.text(21, 241, 'Carriage forward / Unfrei / Bérmentesítés nélkül');

// 15. CASH ON DELIVERY
doc.rect(102, 243, 94, 9);
doc.setFontSize(13);
doc.setFont("DejaVuSans", "bold");
doc.text(103, 248, '15');
doc.setFontSize(5.5);
doc.setFont("DejaVuSans", "normal");
doc.text(110, 246, 'Reimbursment');
doc.text(110, 247.8, 'Rückerstattung');
doc.text(110, 249.6, 'Visszatérítés');

// 16. CARRIER
doc.setLineWidth(fat);
doc.rect(105, 49, 91, 78);
doc.setLineWidth(thin);
doc.rect(105, 49, 91, 24);
doc.setFontSize(13);
doc.setFont("DejaVuSans", "bold");
doc.text(106, 54, '16');
doc.setFontSize(5.5);
doc.text(112, 71.5, 'REG. NO. / Kennzeichen / Rendszám :');
doc.setFontSize(5.5);
doc.setFont("DejaVuSans", "normal");
doc.text(112, 51, 'Carrier (name, address, country)');
doc.text(112, 52.8, 'Frachtführer (Name, Anschrift, Land)');
doc.text(112, 54.6, 'Fuvarozó (név, cím, ország)');

// 17. SUCCESSIVE CARRIERS
doc.rect(105, 73, 91, 24);
doc.setFontSize(13);
doc.setFont("DejaVuSans", "bold");
doc.text(106, 78, '17');
doc.setFontSize(5.5);
doc.setFont("DejaVuSans", "normal");
doc.text(112, 75, 'Successive carriers (name, address, country)');
doc.text(112, 76.8, 'Nachfolgende Frachtführer (Name, Anschrift, Land)');
doc.text(112, 78.6, 'További fuvarozók (név, cím, ország)');

// 18. CARRIER'S RESERVATIONS AND OBSERVATIONS
doc.rect(105, 97, 91, 30);
doc.setFontSize(13);
doc.setFont("DejaVuSans", "bold");
doc.text(106, 102, '18');
doc.setFontSize(5.5);
doc.setFont("DejaVuSans", "normal");
doc.text(112, 99, 'Carrier’s reservations and observations');
doc.text(112, 100.8, 'Vorbehalte und Bemerkungen des Frachtführers');
doc.text(112, 102.6, 'Fuvarozó megjegyzései és fenntartásai');

// 19. SPECIAL AGREEMENTS
doc.rect(102, 187, 94, 22);
doc.setFontSize(13);
doc.setFont("DejaVuSans", "bold");
doc.text(103, 192, '19');
doc.setFontSize(5.5);
doc.setFont("DejaVuSans", "normal");
doc.text(110, 189, 'Special agreements');
doc.text(110, 190.8, 'Besondere Vereinbarungen');
doc.text(110, 192.6, 'Különleges megállapodások');

// 20. CARRIAGE CHARGES
doc.setLineWidth(fat);
doc.rect(102, 209, 94, 34);
doc.setLineWidth(thin);
doc.rect(102, 209, 94, 7);
doc.rect(102, 216, 94, 8);
doc.rect(102, 224, 94, 10.5);
doc.rect(102, 234.5, 94, 3.5);

doc.rect(127, 209, 14, 34);
doc.rect(127, 216, 69, 4);
doc.rect(127, 224, 69, 3.5);
doc.rect(127, 227.5, 69, 3.5);
doc.rect(141, 209, 9, 34);
doc.setLineWidth(fat);
doc.rect(150, 209, 24, 34);
doc.setLineWidth(thin);
doc.rect(174, 209, 14, 34);
doc.rect(150, 216, 12, 27);

doc.setFontSize(13);
doc.setFont("DejaVuSans", "bold");
doc.text(103, 214, '20');
doc.setFontSize(5.5);
doc.setFont("DejaVuSans", "normal");
doc.text(110, 211, 'To be paid by');
doc.text(110, 212.8, 'Zu zahlen vom');
doc.text(110, 214.6, 'Fizetendö');
doc.text(130, 211, 'Sender');
doc.text(130, 212.8, 'Absender');
doc.text(130, 214.6, 'Feladó');
doc.text(158, 211, 'Currency');
doc.text(158, 212.8, 'Währung');
doc.text(158, 214.6, 'Pénznem');
doc.text(176, 211, 'Consignee');
doc.text(176, 212.8, 'Empfänger');
doc.text(176, 214.6, 'Átvevö');

doc.setFontSize(5);
doc.text(103.5, 218, 'Carriage charges');
doc.text(103.5, 219.5, '/ Fracht / Fuvarozási díj');
doc.text(103.5, 221.7, 'Deductions / Ermäßigungen');
doc.text(103.5, 223.2, '/ Kedvezmények');
doc.text(103.5, 225.8, 'Balance / Zuschläge');
doc.text(103.5, 227.3, '/ Egyenleg');
doc.text(103.5, 229.1, 'Supplem. charges / ');
doc.text(103.5, 230.5, 'Nebengebuhren / Egyéb költ.');
doc.text(103.5, 232.3, 'Miscellaneous / Sonstiges /');
doc.text(103.5, 233.8, 'Toldalékok');
doc.text(103.5, 236.8, 'Insur. / Versicher. / Biztosít.');
doc.text(103.5, 240.2, 'Total to be paid / ');
doc.text(103.5, 241.7, 'Gesamtsumme / Végösszeg');

// 21. ESTABLISHED IN
doc.setLineWidth(thin);
doc.rect(14, 243, 88, 9);
doc.setFontSize(13);
doc.setFont("DejaVuSans", "bold");
doc.text(15, 248, '21');
doc.setFontSize(5.5);
doc.setFont("DejaVuSans", "normal");
doc.text(21, 245, 'Established in');
doc.text(21, 246.8, 'Ausgefertigt in');
doc.text(21, 248.6, 'Kiállítás helye');
doc.text(67, 245, 'on');
doc.text(67, 246.8, 'am');
doc.text(67, 248.6, 'idöpontja');

// 22. SIGNATURE AND STAMP OF THE SENDER
doc.rect(14, 252, 60, 35);
doc.setFontSize(13);
doc.setFont("DejaVuSans", "bold");
doc.text(15, 257, '22');
doc.setFontSize(5.5);
doc.setFont("DejaVuSans", "normal");
doc.text(16, 281.6, 'Signature and stamp of the sender');
doc.text(16, 283.4, 'Unterschrift und Stempel des Absenders');
doc.text(16, 285.2, 'Feladó aláírása és bélyegzöje');

// 23. SIGNATURE AND STAMP OF THE CARRIER
doc.setLineWidth(fat);
doc.rect(74, 252, 60, 35);
doc.setFontSize(13);
doc.setFont("DejaVuSans", "bold");
doc.text(75, 257, '23');
doc.setFontSize(5.5);
doc.setFont("DejaVuSans", "normal");
doc.text(76, 281.6, 'Signature and stamp of the carrier');
doc.text(76, 283.4, 'Unterschrift und Stempel des Frachtführers');
doc.text(76, 285.2, 'Fuvarozó aláírása és bélyegzöje');

// 24. GOODS RECEIVED
doc.setLineWidth(thin);
doc.rect(134, 252, 62, 35);
doc.setFontSize(13);
doc.setFont("DejaVuSans", "bold");
doc.text(136, 257, '24');
doc.setFontSize(5.5);
doc.setFont("DejaVuSans", "normal");
doc.text(142, 255, 'Goods received / Gut empfangen');
doc.text(142, 256.8, '/ Áru átvétele');
doc.text(136, 261, 'Place');
doc.text(136, 262.8, 'Ort');
doc.text(136, 264.6, 'Hely');
doc.text(164, 261, 'on');
doc.text(164, 262.8, 'am');
doc.text(164, 264.6, 'idöpont');
doc.text(136, 281.6, 'Signature and stamp of the consignee');
doc.text(136, 283.4, 'Unterschrift und Stempel des Empfängers');
doc.text(136, 285.2, 'Átvevö aláírása és bélyegzöje');

doc.text(14, 289.6, "Sic itur ad astra!");

// VERTICAL TEXT:
doc.setFontSize(4.5);
doc.text(8.5, 231, "To be completed on the sender's responsibility", null, 90);
doc.text(10.3, 231, 'Auszufüllen unter der Verantwortung des Absenders', null, 90);
doc.text(12.1, 231, 'A feladó felelösségére kitöltendö', null, 90);

doc.text(8.5, 177, 'including and', null, 90);
doc.text(10.3, 177, 'einschließlich', null, 90);
doc.text(12.1, 177, 'beleértve és', null, 90);

doc.text(8.5, 132, 'The spaces framed with heavy lines must be filled by the carrier.', null, 90);
doc.text(10.3, 132, 'Die mit fett gedruckten Linien eingerahmten Rubriken müssen vom Frachtführer ausgefüllt werden.', null, 90);
doc.text(12.1, 132, 'A vastag vonallal keretezett mezök kitöltése a fuvarozó kötelezettsége.', null, 90);

doc.text(202, 90, '* In case of dangerous goods mention, besides the possible certification, on the last line of the column the particulars of the class, the number and the letter, if any.', null, -90);
doc.text(200.2, 90, '* Bei gefährlichen Gütern ist, außer der eventuellen Bescheinigung, auf der letzten Linie der Rubrik anzugeben: die Klasse, die Ziffer, sowie gegebenenfalls der Buchstabe.', null, -90);
doc.text(198.4, 90, '* Veszélyes áruk esetén a lehetséges tanúsítványon kívül a legutolsó sorban meg kell adni: az osztályt, a számot és esetleg a betüt.', null, -90);

doc.setFontSize(13);
doc.setFont("DejaVuSans", "bold");
doc.text(11.5, 191.5, '1 - 15', null, 90);
doc.text(11.5, 163, '19 + 20 + 22', null, 90);      
    
    
    // INPUTS:
    
    
    doc.setFontSize(8);
    doc.setFont("DejaVuSans", "normal");
    doc.setTextColor(1, 1, 1);
    doc.text(21, 35, document.getElementById("senderaddress").value);
    doc.text(166, 33, document.getElementById("cmrnumber").value);
    doc.text(21, 59, document.getElementById("consigneename").value);
    doc.text(112, 59, document.getElementById("carrieraddress").value);
    doc.text(150, 71.5, document.getElementById("vehiclereg").value);
    doc.text(21, 83, document.getElementById("deliveryplace").value);
    doc.text(112, 83, document.getElementById("nextcarriers").value);
    doc.text(21, 107, document.getElementById("takingoverplace").value);
    doc.text(112, 107, document.getElementById("carrierobservations").value);
    doc.text(70, 107, document.getElementById("datepicker").value);
    doc.text(21, 122, document.getElementById("documents").value);
    
    doc.text(21, 139, document.getElementById("6marks1").value);
    doc.text(50, 139, document.getElementById("7number1").value);
    doc.text(79, 139, document.getElementById("8method1").value);
    doc.text(105, 139, document.getElementById("9nature1").value);
    doc.text(134, 139, document.getElementById("10number1").value);
    doc.text(157, 139, document.getElementById("11kg1").value);
    doc.text(180, 139, document.getElementById("12volume1").value);
    
    doc.text(21, 146, document.getElementById("6marks2").value);
    doc.text(50, 146, document.getElementById("7number2").value);
    doc.text(79, 146, document.getElementById("8method2").value);
    doc.text(105, 146, document.getElementById("9nature2").value);
    doc.text(134, 146, document.getElementById("10number2").value);
    doc.text(157, 146, document.getElementById("11kg2").value);
    doc.text(180, 146, document.getElementById("12volume2").value);
    
    doc.text(21, 153, document.getElementById("6marks3").value);
    doc.text(50, 153, document.getElementById("7number3").value);
    doc.text(79, 153, document.getElementById("8method3").value);
    doc.text(105, 153, document.getElementById("9nature3").value);
    doc.text(134, 153, document.getElementById("10number3").value);
    doc.text(157, 153, document.getElementById("11kg3").value);
    doc.text(180, 153, document.getElementById("12volume3").value);
    
    doc.text(21, 160, document.getElementById("6marks4").value);
    doc.text(50, 160, document.getElementById("7number4").value);
    doc.text(79, 160, document.getElementById("8method4").value);
    doc.text(105, 160, document.getElementById("9nature4").value);
    doc.text(134, 160, document.getElementById("10number4").value);
    doc.text(157, 160, document.getElementById("11kg4").value);
    doc.text(180, 160, document.getElementById("12volume4").value);
    
    doc.text(25, 184.5, document.getElementById("6class").value);
    doc.text(54, 184.5, document.getElementById("7number").value);
    doc.text(85, 184.5, document.getElementById("8letter").value);
    doc.text(109, 184.5, document.getElementById("9adr").value);
    
    doc.text(21, 197, document.getElementById("sendersinstructions").value);
    doc.text(110, 197, document.getElementById("specialagreements").value);
    
    doc.text(57, 234, document.getElementById("carriageinstructions").value);
    doc.text(67, 238, document.getElementById("carriagepaid").value);
    doc.text(67, 242, document.getElementById("carriageforward").value);
    
    doc.text(38, 248, document.getElementById("establishedin").value);
    doc.text(76, 248, document.getElementById("datepicker2").value);
    doc.text(129, 248, document.getElementById("cashondelivery").value);
    
      // ==============================================================================================
    
	doc.addPage();

     // 4. COPY ===============================================================================
    //=========================================================================================

    doc.setDrawColor(34, 30, 31);
    doc.setLineWidth(thin);
    
    doc.rect(14, 25, 182, 262); // main rectangle

    doc.setTextColor(34,30,31);
    doc.setFontSize(28);

doc.setFont("DejaVuSans", "bold");
doc.text(7, 25, '4');
doc.setFontSize(6.5);
doc.text(14, 20, 'Extra copy');
doc.text(14, 22, 'Zusätzliches Exemplar');
doc.text(14, 24, 'További példány');

doc.rect(105, 25, 91, 24);
doc.setFont("DejaVuSans", "normal");
doc.setFontSize(5.5);
doc.text(108, 27, 'INTERNATIONAL CONSIGNMENT');
doc.text(108, 29, 'INTERNATIONALER FRACHTBRIEF');
doc.text(108, 31, 'NEMZETKÖZI FUVARLEVÉL');
doc.setFontSize(5);
doc.text(108, 45.6, 'A fuvarozásra eltérö megállapodás esetén is a Nemzetközi Árufuvarozási Egyezmény (CMR)');
doc.text(108, 47.4, 'rendelkezései az irányadók.');
doc.text(154, 37.5, 'Diese Beforderung unterliegt trotz einer gegen-');
doc.text(154, 39.3, 'teiligen Abmachung den Bestimmungen des');
doc.text(154, 41.1, 'Ubereinkommens uber den Beforderungsvertrag');
doc.text(154, 42.9, 'im internationalen Strassenguterverkehr (CMR)');
doc.text(108, 37.5, 'This carriage is subject notwithstanding any');
doc.text(108, 39.3, 'clause to the contrary, to the Convention on');
doc.text(108, 41.1, 'the Contract for the international Carriage of');
doc.text(108, 42.9, 'goods by road (CMR)');

doc.setFontSize(14);
doc.setFont("DejaVuSans", "bold");
doc.text(145, 33.5, 'CMR');
doc.setFontSize(10);
doc.text(159, 33, 'No:');

// 1. SENDER
doc.rect(14, 25, 91, 24);
doc.setFontSize(13);
doc.setFont("DejaVuSans", "bold");
doc.text(17, 30, '1');
doc.setFontSize(5.5);
doc.setFont("DejaVuSans", "normal");
doc.text(21, 27, 'Sender (name, address, country)');
doc.text(21, 28.8, 'Absender (Name, Anschrift, Land)');
doc.text(21, 30.6, 'Feladó (név, cím, ország)');

// 2. CONSIGNEE
doc.rect(14, 49, 91, 24);
doc.setFontSize(13);
doc.setFont("DejaVuSans", "bold");
doc.text(17, 54, '2');
doc.setFontSize(5.5);
doc.setFont("DejaVuSans", "normal");
doc.text(21, 51, 'Consignee (name, address, country)');
doc.text(21, 52.8, 'Empfänger (Name, Anschrift, Land)');
doc.text(21, 54.6, 'Átvevö (név, cím, ország)');

// 3. PLACE OF DELIVERY
doc.rect(14, 73, 91, 24);
doc.setFontSize(13);
doc.setFont("DejaVuSans", "bold");
doc.text(17, 78, '3');
doc.setFontSize(5.5);
doc.setFont("DejaVuSans", "normal");
doc.text(21, 75, 'Place of delivery of the goods (place, country)');
doc.text(21, 76.8, 'Auslieferungsort des Gutes (Ort, Land)');
doc.text(21, 78.6, 'Az áru kiszolgáltatási helye (hely, ország)');

// 4. PLACE AND DATE OF LOADING
doc.rect(14, 97, 91, 15);
doc.setFontSize(13);
doc.setFont("DejaVuSans", "bold");
doc.text(17, 102, '4');
doc.setFontSize(5.5);
doc.setFont("DejaVuSans", "normal");
doc.text(21, 99, 'Place and date taking over the goods (place, country, data)');
doc.text(21, 100.8, 'Ort und Tag der Ubernahme des Gutes (Ort, Land, Datum)');
doc.text(21, 102.6, 'Áru átvételének helye és idöpontja (hely, ország, idöpont)');

// 5. DOCUMENTS ATTACHED
doc.rect(14, 112, 91, 15);
doc.setFontSize(13);
doc.setFont("DejaVuSans", "bold");
doc.text(17, 117, '5');
doc.setFontSize(5.5);
doc.setFont("DejaVuSans", "normal");
doc.text(21, 114, 'Documents attached');
doc.text(21, 115.8, 'Beigefügte Dokumente');
doc.text(21, 117.6, 'Mellékelt okmányok');

// 6. 7. 8. 9.
doc.rect(14, 127, 113, 53);
doc.rect(14, 180, 113, 7);

// 6.
doc.setFontSize(13);
doc.setFont("DejaVuSans", "bold");
doc.text(17, 133, '6');
doc.setFontSize(5);
doc.setFont("DejaVuSans", "normal");
doc.text(21, 130, 'Marks and Nos');
doc.text(21, 131.8, 'Kennzeichen und Nummern');
doc.text(21, 133.6, 'Jelzés és számok');

doc.text(17, 182, 'Class');
doc.text(17, 183.8, 'Klasse');
doc.text(17, 185.6, 'Osztály');

// 7.
doc.setFontSize(13);
doc.setFont("DejaVuSans", "bold");
doc.text(46, 133, '7');
doc.setFontSize(5);
doc.setFont("DejaVuSans", "normal");
doc.text(50, 130, 'Number of packages');
doc.text(50, 131.8, 'Anzahl der Packstücke');
doc.text(50, 133.6, 'Csomagok száma');

doc.text(46, 182, 'Number');
doc.text(46, 183.8, 'Ziffer');
doc.text(46, 185.6, 'Szám');

// 8.
doc.setFontSize(13);
doc.setFont("DejaVuSans", "bold");
doc.text(75, 133, '8');
doc.setFontSize(5);
doc.setFont("DejaVuSans", "normal");
doc.text(79, 130, 'Method of packing');
doc.text(79, 131.8, 'Art der Verpackung');
doc.text(79, 133.6, 'Csomagolás módja');

doc.text(75, 182, 'Letter');
doc.text(75, 183.8, 'Buchstabe');
doc.text(75, 185.6, 'Betü');

// 9.
doc.setFontSize(13);
doc.setFont("DejaVuSans", "bold");
doc.text(101, 133, '9');
doc.setFontSize(5);
doc.setFont("DejaVuSans", "normal");
doc.text(105, 130, 'Nature of the goods');
doc.text(105, 131.8, 'Bezeichnung des Gutes');
doc.text(105, 133.6, 'Áru megnevezése');

doc.text(101, 182, '(ADR*)');

// 10. STATISTICAL NUMBER
doc.rect(127, 127, 23, 53);
doc.setFontSize(13);
doc.setFont("DejaVuSans", "bold");
doc.text(128, 133, '10');
doc.setFontSize(5);
doc.setFont("DejaVuSans", "normal");
doc.text(134, 130, 'Statistical number');
doc.text(134, 131.8, 'Statistiknummer');
doc.text(134, 133.6, 'Statisztikai szám');

// 11. GROSS WEIGHT
doc.rect(150, 127, 23, 53);
doc.setFontSize(13);
doc.setFont("DejaVuSans", "bold");
doc.text(151, 133, '11');
doc.setFontSize(5);
doc.setFont("DejaVuSans", "normal");
doc.text(157, 130, 'Gross weight in kg');
doc.text(157, 131.8, 'Bruttogewicht in kg');
doc.text(157, 133.6, 'Bruttó súly (kg)');

// 12. VOLUME
doc.rect(173, 127, 23, 53);
doc.setFontSize(13);
doc.setFont("DejaVuSans", "bold");
doc.text(174, 133, '12');
doc.setFontSize(5);
doc.setFont("DejaVuSans", "normal");
doc.text(180, 130, 'Volume in m3');
doc.text(180, 131.8, 'Umfang m3');
doc.text(180, 133.6, 'Térfogat (m3)');

// 13. SENDER'S INSTRUCTIONS
doc.rect(14, 187, 88, 42);
doc.setFontSize(13);
doc.setFont("DejaVuSans", "bold");
doc.text(15, 192, '13');
doc.setFontSize(5.5);
doc.setFont("DejaVuSans", "normal");
doc.text(21, 189, 'Senders instructions');
doc.text(21, 190.8, 'Anweisungen des Absenders');
doc.text(21, 192.6, 'A feladó rendelkezései');

// 14. CARRIAGE PAYMENT INSTRUCTIONS
doc.rect(14, 229, 88, 14);
doc.setFontSize(13);
doc.setFont("DejaVuSans", "bold");
doc.text(15, 234, '14');
doc.setFontSize(5.5);
doc.setFont("DejaVuSans", "normal");
doc.text(21, 231, 'Instruction as to payment for carriage');
doc.text(21, 232.8, 'Frachtzahlungsanweisungen');
doc.text(21, 234.6, 'Fuvardíjfizetési rendelkezések');
doc.text(21, 239.2, 'Carriage paid / Frei / Bérmentve');
doc.text(21, 241, 'Carriage forward / Unfrei / Bérmentesítés nélkül');

// 15. CASH ON DELIVERY
doc.rect(102, 243, 94, 9);
doc.setFontSize(13);
doc.setFont("DejaVuSans", "bold");
doc.text(103, 248, '15');
doc.setFontSize(5.5);
doc.setFont("DejaVuSans", "normal");
doc.text(110, 246, 'Reimbursment');
doc.text(110, 247.8, 'Rückerstattung');
doc.text(110, 249.6, 'Visszatérítés');

// 16. CARRIER
doc.setLineWidth(fat);
doc.rect(105, 49, 91, 78);
doc.setLineWidth(thin);
doc.rect(105, 49, 91, 24);
doc.setFontSize(13);
doc.setFont("DejaVuSans", "bold");
doc.text(106, 54, '16');
doc.setFontSize(5.5);
doc.text(112, 71.5, 'REG. NO. / Kennzeichen / Rendszám :');
doc.setFontSize(5.5);
doc.setFont("DejaVuSans", "normal");
doc.text(112, 51, 'Carrier (name, address, country)');
doc.text(112, 52.8, 'Frachtführer (Name, Anschrift, Land)');
doc.text(112, 54.6, 'Fuvarozó (név, cím, ország)');

// 17. SUCCESSIVE CARRIERS
doc.rect(105, 73, 91, 24);
doc.setFontSize(13);
doc.setFont("DejaVuSans", "bold");
doc.text(106, 78, '17');
doc.setFontSize(5.5);
doc.setFont("DejaVuSans", "normal");
doc.text(112, 75, 'Successive carriers (name, address, country)');
doc.text(112, 76.8, 'Nachfolgende Frachtführer (Name, Anschrift, Land)');
doc.text(112, 78.6, 'További fuvarozók (név, cím, ország)');

// 18. CARRIER'S RESERVATIONS AND OBSERVATIONS
doc.rect(105, 97, 91, 30);
doc.setFontSize(13);
doc.setFont("DejaVuSans", "bold");
doc.text(106, 102, '18');
doc.setFontSize(5.5);
doc.setFont("DejaVuSans", "normal");
doc.text(112, 99, 'Carrier’s reservations and observations');
doc.text(112, 100.8, 'Vorbehalte und Bemerkungen des Frachtführers');
doc.text(112, 102.6, 'Fuvarozó megjegyzései és fenntartásai');

// 19. SPECIAL AGREEMENTS
doc.rect(102, 187, 94, 22);
doc.setFontSize(13);
doc.setFont("DejaVuSans", "bold");
doc.text(103, 192, '19');
doc.setFontSize(5.5);
doc.setFont("DejaVuSans", "normal");
doc.text(110, 189, 'Special agreements');
doc.text(110, 190.8, 'Besondere Vereinbarungen');
doc.text(110, 192.6, 'Különleges megállapodások');

// 20. CARRIAGE CHARGES
doc.setLineWidth(fat);
doc.rect(102, 209, 94, 34);
doc.setLineWidth(thin);
doc.rect(102, 209, 94, 7);
doc.rect(102, 216, 94, 8);
doc.rect(102, 224, 94, 10.5);
doc.rect(102, 234.5, 94, 3.5);

doc.rect(127, 209, 14, 34);
doc.rect(127, 216, 69, 4);
doc.rect(127, 224, 69, 3.5);
doc.rect(127, 227.5, 69, 3.5);
doc.rect(141, 209, 9, 34);
doc.setLineWidth(fat);
doc.rect(150, 209, 24, 34);
doc.setLineWidth(thin);
doc.rect(174, 209, 14, 34);
doc.rect(150, 216, 12, 27);

doc.setFontSize(13);
doc.setFont("DejaVuSans", "bold");
doc.text(103, 214, '20');
doc.setFontSize(5.5);
doc.setFont("DejaVuSans", "normal");
doc.text(110, 211, 'To be paid by');
doc.text(110, 212.8, 'Zu zahlen vom');
doc.text(110, 214.6, 'Fizetendö');
doc.text(130, 211, 'Sender');
doc.text(130, 212.8, 'Absender');
doc.text(130, 214.6, 'Feladó');
doc.text(158, 211, 'Currency');
doc.text(158, 212.8, 'Währung');
doc.text(158, 214.6, 'Pénznem');
doc.text(176, 211, 'Consignee');
doc.text(176, 212.8, 'Empfänger');
doc.text(176, 214.6, 'Átvevö');

doc.setFontSize(5);
doc.text(103.5, 218, 'Carriage charges');
doc.text(103.5, 219.5, '/ Fracht / Fuvarozási díj');
doc.text(103.5, 221.7, 'Deductions / Ermäßigungen');
doc.text(103.5, 223.2, '/ Kedvezmények');
doc.text(103.5, 225.8, 'Balance / Zuschläge');
doc.text(103.5, 227.3, '/ Egyenleg');
doc.text(103.5, 229.1, 'Supplem. charges / ');
doc.text(103.5, 230.5, 'Nebengebuhren / Egyéb költ.');
doc.text(103.5, 232.3, 'Miscellaneous / Sonstiges /');
doc.text(103.5, 233.8, 'Toldalékok');
doc.text(103.5, 236.8, 'Insur. / Versicher. / Biztosít.');
doc.text(103.5, 240.2, 'Total to be paid / ');
doc.text(103.5, 241.7, 'Gesamtsumme / Végösszeg');

// 21. ESTABLISHED IN
doc.setLineWidth(thin);
doc.rect(14, 243, 88, 9);
doc.setFontSize(13);
doc.setFont("DejaVuSans", "bold");
doc.text(15, 248, '21');
doc.setFontSize(5.5);
doc.setFont("DejaVuSans", "normal");
doc.text(21, 245, 'Established in');
doc.text(21, 246.8, 'Ausgefertigt in');
doc.text(21, 248.6, 'Kiállítás helye');
doc.text(67, 245, 'on');
doc.text(67, 246.8, 'am');
doc.text(67, 248.6, 'idöpontja');

// 22. SIGNATURE AND STAMP OF THE SENDER
doc.rect(14, 252, 60, 35);
doc.setFontSize(13);
doc.setFont("DejaVuSans", "bold");
doc.text(15, 257, '22');
doc.setFontSize(5.5);
doc.setFont("DejaVuSans", "normal");
doc.text(16, 281.6, 'Signature and stamp of the sender');
doc.text(16, 283.4, 'Unterschrift und Stempel des Absenders');
doc.text(16, 285.2, 'Feladó aláírása és bélyegzöje');

// 23. SIGNATURE AND STAMP OF THE CARRIER
doc.setLineWidth(fat);
doc.rect(74, 252, 60, 35);
doc.setFontSize(13);
doc.setFont("DejaVuSans", "bold");
doc.text(75, 257, '23');
doc.setFontSize(5.5);
doc.setFont("DejaVuSans", "normal");
doc.text(76, 281.6, 'Signature and stamp of the carrier');
doc.text(76, 283.4, 'Unterschrift und Stempel des Frachtführers');
doc.text(76, 285.2, 'Fuvarozó aláírása és bélyegzöje');

// 24. GOODS RECEIVED
doc.setLineWidth(thin);
doc.rect(134, 252, 62, 35);
doc.setFontSize(13);
doc.setFont("DejaVuSans", "bold");
doc.text(136, 257, '24');
doc.setFontSize(5.5);
doc.setFont("DejaVuSans", "normal");
doc.text(142, 255, 'Goods received / Gut empfangen');
doc.text(142, 256.8, '/ Áru átvétele');
doc.text(136, 261, 'Place');
doc.text(136, 262.8, 'Ort');
doc.text(136, 264.6, 'Hely');
doc.text(164, 261, 'on');
doc.text(164, 262.8, 'am');
doc.text(164, 264.6, 'idöpont');
doc.text(136, 281.6, 'Signature and stamp of the consignee');
doc.text(136, 283.4, 'Unterschrift und Stempel des Empfängers');
doc.text(136, 285.2, 'Átvevö aláírása és bélyegzöje');

doc.text(14, 289.6, "Sic itur ad astra!");

// VERTICAL TEXT:
doc.setFontSize(4.5);
doc.text(8.5, 231, "To be completed on the sender's responsibility", null, 90);
doc.text(10.3, 231, 'Auszufüllen unter der Verantwortung des Absenders', null, 90);
doc.text(12.1, 231, 'A feladó felelösségére kitöltendö', null, 90);

doc.text(8.5, 177, 'including and', null, 90);
doc.text(10.3, 177, 'einschließlich', null, 90);
doc.text(12.1, 177, 'beleértve és', null, 90);

doc.text(8.5, 132, 'The spaces framed with heavy lines must be filled by the carrier.', null, 90);
doc.text(10.3, 132, 'Die mit fett gedruckten Linien eingerahmten Rubriken müssen vom Frachtführer ausgefüllt werden.', null, 90);
doc.text(12.1, 132, 'A vastag vonallal keretezett mezök kitöltése a fuvarozó kötelezettsége.', null, 90);

doc.text(202, 90, '* In case of dangerous goods mention, besides the possible certification, on the last line of the column the particulars of the class, the number and the letter, if any.', null, -90);
doc.text(200.2, 90, '* Bei gefährlichen Gütern ist, außer der eventuellen Bescheinigung, auf der letzten Linie der Rubrik anzugeben: die Klasse, die Ziffer, sowie gegebenenfalls der Buchstabe.', null, -90);
doc.text(198.4, 90, '* Veszélyes áruk esetén a lehetséges tanúsítványon kívül a legutolsó sorban meg kell adni: az osztályt, a számot és esetleg a betüt.', null, -90);

doc.setFontSize(13);
doc.setFont("DejaVuSans", "bold");
doc.text(11.5, 191.5, '1 - 15', null, 90);
doc.text(11.5, 163, '19 + 20 + 22', null, 90);      
    
    
    // INPUTS:
    
    
    doc.setFontSize(8);
    doc.setFont("DejaVuSans", "normal");
    doc.setTextColor(1, 1, 1);
    doc.text(21, 35, document.getElementById("senderaddress").value);
    doc.text(166, 33, document.getElementById("cmrnumber").value);
    doc.text(21, 59, document.getElementById("consigneename").value);
    doc.text(112, 59, document.getElementById("carrieraddress").value);
    doc.text(150, 71.5, document.getElementById("vehiclereg").value);
    doc.text(21, 83, document.getElementById("deliveryplace").value);
    doc.text(112, 83, document.getElementById("nextcarriers").value);
    doc.text(21, 107, document.getElementById("takingoverplace").value);
    doc.text(112, 107, document.getElementById("carrierobservations").value);
    doc.text(70, 107, document.getElementById("datepicker").value);
    doc.text(21, 122, document.getElementById("documents").value);
    
    doc.text(21, 139, document.getElementById("6marks1").value);
    doc.text(50, 139, document.getElementById("7number1").value);
    doc.text(79, 139, document.getElementById("8method1").value);
    doc.text(105, 139, document.getElementById("9nature1").value);
    doc.text(134, 139, document.getElementById("10number1").value);
    doc.text(157, 139, document.getElementById("11kg1").value);
    doc.text(180, 139, document.getElementById("12volume1").value);
    
    doc.text(21, 146, document.getElementById("6marks2").value);
    doc.text(50, 146, document.getElementById("7number2").value);
    doc.text(79, 146, document.getElementById("8method2").value);
    doc.text(105, 146, document.getElementById("9nature2").value);
    doc.text(134, 146, document.getElementById("10number2").value);
    doc.text(157, 146, document.getElementById("11kg2").value);
    doc.text(180, 146, document.getElementById("12volume2").value);
    
    doc.text(21, 153, document.getElementById("6marks3").value);
    doc.text(50, 153, document.getElementById("7number3").value);
    doc.text(79, 153, document.getElementById("8method3").value);
    doc.text(105, 153, document.getElementById("9nature3").value);
    doc.text(134, 153, document.getElementById("10number3").value);
    doc.text(157, 153, document.getElementById("11kg3").value);
    doc.text(180, 153, document.getElementById("12volume3").value);
    
    doc.text(21, 160, document.getElementById("6marks4").value);
    doc.text(50, 160, document.getElementById("7number4").value);
    doc.text(79, 160, document.getElementById("8method4").value);
    doc.text(105, 160, document.getElementById("9nature4").value);
    doc.text(134, 160, document.getElementById("10number4").value);
    doc.text(157, 160, document.getElementById("11kg4").value);
    doc.text(180, 160, document.getElementById("12volume4").value);
    
    doc.text(25, 184.5, document.getElementById("6class").value);
    doc.text(54, 184.5, document.getElementById("7number").value);
    doc.text(85, 184.5, document.getElementById("8letter").value);
    doc.text(109, 184.5, document.getElementById("9adr").value);
    
    doc.text(21, 197, document.getElementById("sendersinstructions").value);
    doc.text(110, 197, document.getElementById("specialagreements").value);
    
    doc.text(57, 234, document.getElementById("carriageinstructions").value);
    doc.text(67, 238, document.getElementById("carriagepaid").value);
    doc.text(67, 242, document.getElementById("carriageforward").value);
    
    doc.text(38, 248, document.getElementById("establishedin").value);
    doc.text(76, 248, document.getElementById("datepicker2").value);
    doc.text(129, 248, document.getElementById("cashondelivery").value);
    
    
    
	
	// Save the PDF
	doc.save('CMR.pdf');
}
