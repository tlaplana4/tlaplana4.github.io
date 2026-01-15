const questions = [
    {
        type: "exercicis",
        category: "energia",
        text: `S’han instal·lat \\(n = 50\\) aerogeneradors de 3 pales en un parc eòlic. 
               El diàmetre de l’àrea d’escombratge de les pales és \\(d = 77 \\, \\text{m}\\) i el rendiment dels aerogeneradors \\(\\eta_{\\text{aerog}} = 0{,}68\\). 
               S’estima que la velocitat mitjana del vent al parc és \\(v = 25 \\, \\text{km/h}\\); el parc està en funcionament 300 dies a l’any i obté energia 18 hores diàries. 
               La potència mitjana del vent \\(P_{\\text{vent}}\\) es pot estimar, per a un aerogenerador, com l’energia cinètica del vent per unitat de temps mitjançant l’expressió:
               \\[
               P_{\\text{vent}} = \\frac{1}{2} \\rho A v^3
               \\]
               en què \\(A\\) és l’àrea que escombren les pales de l’aerogenerador, \\(\\rho\\) és la densitat de l’aire i \\(v\\) és la velocitat del vent. 
               D’aquesta potència, el coeficient d’aprofitament del vent és \\(c_a = 0{,}42\\).
               
               Sabent que \\(1{,}225 \\, \\text{g}\\) d’aire ocupen un volum d’\\(1 \\, \\text{m}^3\\), determineu:
               <br><strong>a)</strong> La potència mitjana del vent \\(P_{\\text{vent}}\\) per a un aerogenerador. [0,5 punts]
               <br><strong>b)</strong> La potència elèctrica útil \\(P_{\\text{útil}}\\) que generarà cada aerogenerador. [0,5 punts]
               <br><strong>c)</strong> L’energia elèctrica total \\(E_{\\text{total}}\\) que es generarà al parc durant un any. [0,5 punts]
               <br><strong>d)</strong> Els ingressos que tindrà el parc eòlic si el preu de venda de l’energia eòlica és \\(p_{\\text{venda}} = 7{,}624\\) cèntims d’euro per \\(\\text{kWh}\\). [0,5 punts]
               <br><strong>e)</strong> En quin percentatge disminuirien els ingressos anteriors si la velocitat mitjana del vent es reduís un 10 %.
               <br><br>
               <img src="ruta/a/imatgePregunta.jpg" alt="Imatge relacionada amb la pregunta">`,  // Imatge opcional al final de la pregunta
        correctAnswer: "",  // No és necessari aquí perquè es tracta d'un exercici obert
        steps: `
            <strong>a) Càlcul de la potència mitjana del vent \\(P_{\\text{vent}}\\) per a un aerogenerador:</strong>
            <br>
            - Àrea d’escombratge de les pales:
            \\[
            A = \\frac{\\pi d^2}{4} = \\frac{\\pi \\times (77 \\, \\text{m})^2}{4} = 4657{,}7 \\, \\text{m}^2
            \\]
            - Densitat de l’aire:
            \\[
            \\rho = \\frac{1{,}225 \\, \\text{g}}{\\text{m}^3} = 1{,}225 \\, \\frac{\\text{kg}}{\\text{m}^3}
            \\]
            - Velocitat del vent (en \\(\\text{m/s}\\)):
            \\[
            v = \\frac{25 \\, \\text{km/h}}{3{,}6} = 6{,}94 \\, \\text{m/s}
            \\]
            - Potència del vent:
            \\[
            P_{\\text{vent}} = \\frac{1}{2} \\times 1{,}225 \\, \\frac{\\text{kg}}{\\text{m}^3} \\times 4657{,}7 \\, \\text{m}^2 \\times (6{,}94 \\, \\text{m/s})^3 = 828{,}08 \\, \\text{kW}
            \\]
            <br>
            <strong>b) Potència elèctrica útil \\(P_{\\text{útil}}\\) generada per cada aerogenerador:</strong>
            <br>
            - Aplicant el rendiment de l’aerogenerador:
            \\[
            P_{\\text{útil}} = P_{\\text{vent}} \\times \\eta_{\\text{aerog}} \\times c_a = 828{,}08 \\, \\text{kW} \\times 0{,}68 \\times 0{,}42 = 236{,}62 \\, \\text{kW}
            \\]
            <br>
            <strong>c) Energia elèctrica total \\(E_{\\text{total}}\\) generada al parc durant un any:</strong>
            <br>
            - Nombre total d'hores operatives a l'any:
            \\[
            h = 300 \\, \\text{dies/any} \\times 18 \\, \\text{h/dia} = 5400 \\, \\text{h/any}
            \\]
            - Energia generada per un aerogenerador:
            \\[
            E_{\\text{útil}} = P_{\\text{útil}} \\times h = 236{,}62 \\, \\text{kW} \\times 5400 \\, \\text{h} = 1277{,}75 \\, \\text{MWh/any}
            \\]
            - Energia total generada per 50 aerogeneradors:
            \\[
            E_{\\text{total}} = 1277{,}75 \\, \\text{MWh/any} \\times 50 = 63{,}89 \\, \\text{GWh/any}
            \\]
            <br>
            <strong>d) Ingressos del parc eòlic:</strong>
            <br>
            - Ingressos totals:
            \\[
            Ingressos = E_{\\text{total}} \\times p_{\\text{venda}} = 63{,}89 \\, \\text{GWh/any} \\times 7{,}624 \\, \\text{cèntims/kWh} = 4865{,}9 \\, \\text{k€}
            \\]
            <br>
            <strong>e) Impacte d'una reducció del 10 % en la velocitat del vent:</strong>
            <br>
            - Nova velocitat del vent:
            \\[
            v_{nou} = 0{,}9 \\times v = 0{,}9 \\times 6{,}94 \\, \\text{m/s} = 6{,}25 \\, \\text{m/s}
            \\]
            - Nova potència del vent:
            \\[
            P_{\\text{vent, nou}} = \\frac{1}{2} \\times 1{,}225 \\, \\frac{\\text{kg}}{\\text{m}^3} \\times 4657{,}7 \\, \\text{m}^2 \\times (6{,}25 \\, \\text{m/s})^3 = 654{,}8 \\, \\text{kW}
            \\]
            - Nova potència útil:
            \\[
            P_{\\text{útil, nou}} = 654{,}8 \\, \\text{kW} \\times 0{,}68 \\times 0{,}42 = 187{,}19 \\, \\text{kW}
            \\]
            - Nova energia total:
            \\[
            E_{\\text{total, nou}} = 187{,}19 \\, \\text{kW} \\times 5400 \\, \\text{h} \\times 50 = 50{,}7 \\, \\text{GWh/any}
            \\]
            - Nous ingressos:
            \\[
            Ingressos_{nou} = 50{,}7 \\, \\text{GWh/any} \\times 7{,}624 \\, \\text{cèntims/kWh} = 3865{,}58 \\, \\text{k€}
            \\]
            - Percentatge de disminució:
            \\[
            \\frac{4865{,}9 - 3865{,}58}{4865{,}9} \\times 100 \\approx 20{,}6\\%
            \\]
            <br><br>
            <img src="ruta/a/imatgeResposta.jpg" alt="Imatge relacionada amb la resposta">`,  // Imatge opcional al final de la resposta
    },
    {
        type: "questions", // Tipus de pregunta
        category: "energia",
        text: `Un rentaplats ha consumit \\(0{,}9 \\, \\text{kWh}\\) d’energia elèctrica per a escalfar \\(11 \\, \\text{L}\\) d’aigua des d’una temperatura ambient \\(T_{amb} = 10 \\, ^\\circ \\text{C}\\) a una temperatura \\(T = 70 \\, ^\\circ \\text{C}\\). La calor específica de l’aigua és \\(c_e = 4{,}18 \\, \\frac{\\text{J}}{\\text{g} \\cdot ^\\circ \\text{C}}\\). El rendiment del rentaplats és:`,
        options: [
            { text: "11,74 %", value: "a" },
            { text: "27,59 %", value: "b" },
            { text: "76,63 %", value: "c" },
            { text: "85,15 %", value: "d" }
        ],
        correctAnswer: "d",
        steps: `
            \\[
            m = 11 \\, \\text{L} \\times 1000 \\, \\text{g/L} = 11000 \\, \\text{g}
            \\]
            \\[
            \\Delta T = 70 \\, ^\\circ \\text{C} - 10 \\, ^\\circ \\text{C} = 60 \\, ^\\circ \\text{C}
            \\]
            \\[
            Q = m \\times c_e \\times \\Delta T
            \\]
            \\[
            Q = 11000 \\, \\text{g} \\times 4{,}18 \\, \\frac{\\text{J}}{\\text{g} \\cdot ^\\circ \\text{C}} \\times 60 \\, ^\\circ \\text{C}
            \\]
            \\[
            Q = 11000 \\times 4{,}18 \\times 60 = 2{,}7588 \\times 10^6 \\, \\text{J}
            \\]
            \\[
            W = 0{,}9 \\, \\text{kWh} \\times 3600000 \\, \\text{J/kWh} = 3240000 \\, \\text{J}
            \\]
            \\[
            \\eta = \\frac{Q}{W} \\times 100
            \\]
            \\[
            \\eta = \\frac{2{,}7588 \\times 10^6}{3{,}24 \\times 10^6} \\times 100 = 85{,}15 \\, \\%
            \\]
            <br><br>
            <img src="ruta/a/imatgeResposta.jpg" alt="Imatge relacionada amb la resposta">`,  // Imatge opcional al final de la resposta
        images: `<img src="ruta/a/imatgePregunta.jpg" alt="Imatge relacionada amb la pregunta">`  // Imatge opcional al final de la pregunta
    },
    {
        type: "questions", // Tipus de pregunta
        category: "materials",
        text: `Una família que anualment generava 525 kg d’envasos, en un any ha aconseguit reduir aquesta quantitat un 60 %. Quina reducció en emissions de GEH ha obtingut respecte a l’any anterior, tenint en compte que el factor d’emissió dels envasos és de 120,09 g CO2eq/kg residu?`,
        options: [
            { text: "25,22 kg CO2eq", value: "a" },
            { text: "37,83 kg CO2eq", value: "b" },
            { text: "63,05 kg CO2eq", value: "c" },
            { text: "88,27 kg CO2eq", value: "d" }
        ],
        correctAnswer: "b",
        steps: `
            \\[
            \\text{Quantitat inicial d’envasos} = 525 \\, \\text{kg}
            \\]
            \\[
            \\text{Percentatge de reducció} = 60\\%
            \\]
            \\[
            \\text{Quantitat reduïda} = 525 \\, \\text{kg} \\times 0{,}60 = 315 \\, \\text{kg}
            \\]
            \\[
            \\text{Quantitat de residu restant} = 525 \\, \\text{kg} - 315 \\, \\text{kg} = 210 \\, \\text{kg}
            \\]
            \\[
            \\text{Emissions inicials} = 525 \, \\text{kg} \\times 120{,}09 \, \\text{g CO2eq/kg}
            \\]
            \\[
            \\text{Emissions inicials} = 63047,25 \, \\text{g CO2eq}
            \\]
            \\[
            \\text{Emissions inicials} = 63{,}05 \, \\text{kg CO2eq}
            \\]
            \\[
            \\text{Emissions després de la reducció} = 210 \, \\text{kg} \\times 120{,}09 \, \\text{g CO2eq/kg}
            \\]
            \\[
            \\text{Emissions després de la reducció} = 25218{,}9 \, \\text{g CO2eq}
            \\]
            \\[
            \\text{Emissions després de la reducció} = 25{,}22 \, \\text{kg CO2eq}
            \\]
            \\[
            \\text{Reducció en emissions} = 63{,}05 \, \\text{kg CO2eq} - 25{,}22 \, \\text{kg CO2eq} = 37{,}83 \, \\text{kg CO2eq}
            \\]
            <br><br>
            <img src="ruta/a/imatgeResposta.jpg" alt="Imatge relacionada amb la resposta">`,  // Imatge opcional al final de la resposta
        images: `<img src="ruta/a/imatgePregunta.jpg" alt="Imatge relacionada amb la pregunta">`  // Imatge opcional al final de la pregunta
    },
    {
        type: "questions", // Tipus de pregunta
        category: "materials",
        text: `En un motor asíncron de corrent altern de quatre parells de pols, que està connectat a la xarxa de tensió \\(U = 230\\, \\text{V}\\) i freqüència \\(f = 50\\, \\text{Hz}\\), la velocitat de sincronisme és`,
        options: [
            { text: "\\(750\\, \\text{min}^{-1}\\)", value: "a" },
            { text: "\\(1800\\, \\text{min}^{-1}\\)", value: "b" },
            { text: "\\(1500\\, \\text{min}^{-1}\\)", value: "c" },
            { text: "\\(3000\\, \\text{min}^{-1}\\)", value: "d" }
        ],
        correctAnswer: "a",
        steps: `
            Formula de la Velocitat de Sincronisme: \\(P_{n} = \\frac{\\text{Frequencia}^{-1}*60}{\\text{Pols}}\\)
            Solució: \\(P_{n} = \\frac{50*60}{4}\\ = 750\\, \\text{min}^{-1}\\)
            `,
        images: ``  // Imatge opcional al final de la pregunta
    },
    {
        type: "questions", // Tipus de pregunta
        category: "materials",
        text: `La fabricació d’una peça es duu a terme en dos processos: el primer en una fresado-ra i el segon en una rectificadora. Després de cada procés, es controla la qualitat de les peces i es desestimen les que no són correctes. D’un total inicial de 1 500 peces, se n’han desestimat 75 després del fresatge i 6 després de la rectificació. Quina és la taxa de rebuig del procés de rectificació?`,
        options: [
            { text: "8 %", value: "a" },
            { text: "0,42 %", value: "b" },
            { text: "0,40 %", value: "c" },
            { text: "5,4 %", value: "d" }
        ],
        correctAnswer: "b",
        steps: `
            \\[
            \\text{Total inicial} = T = 1500\\]
            \\[
            \\text{Peces perdudes en Fresatge} = F = 75\\]
            \\[
            \\text{Peces perdudes en Rectificació} = R = 6\\]
            \\[
            \\text{Total Post Fresatge} = T_{F}= T-F = 1500 - 75 = 1425  
            \\]
            \\[
            \\text{Total Post Rectificació} = T_{R}= T_{F}-R = 1425 - 6 = 1419 
            \\]
            \\[
            \\text{Percentatge Peçes Bones Rectificació} = P *100= \\frac{T_{R}}{T_{F}} * 100 = \\frac{1419}{1425} * 100 = 0.9958 * 100 = 99.58\\text{%}
            \\]
            \\[
            \\text{Percentatge Peçes Dolentes Rectificació} = 100 - P = 100- 99.58 = 0.42\\text{%}
            \\]
            `,
        images: ``  // Imatge opcional al final de la pregunta
    },
    {
        type: "questions", // Tipus de pregunta
        category: "organitzacio",
        text: `Un aliatge de coure, que s’utilitza per a elèctrodes de soldadura, conté un \\(96.9 \\text{%}\\) de coure (Cu), un \\(2.5 \\text{%}\\) de cobalt (Co) i un \\(0.6 \\text{%}\\) de beril·li (Be). Amb \\(500 \\) \\(\\text{kg}\\) de coure, quina quantitat de cobalt cal per a obtenir aquest aliatge?`,
        options: [
            { text: "\\(96.9 \\) \\(\\text{kg}\\)", value: "a" },
            { text: "\\(12.50 \\) \\(\\text{kg}\\)", value: "b" },
            { text: "\\(12.90 \\) \\(\\text{kg}\\)", value: "c" },
            { text: "\\(2.5 \\) \\(\\text{kg}\\)", value: "d" }
        ],
        correctAnswer: "c",
        steps: `
            \\[
            \\frac{\\text{Massa de Cu}}{\\text{Percentatge de Cu}} = \\frac{\\text{Massa de Co}}{\\text{Percentatge de Co}}
            \\]
            \\[
            \\frac{500 \\text{ kg}}{96.9 \\text{%}} = \\frac{x}{2.5\\text{%}}
            \\]
            \\[
            \\ x = \\frac{500 \\text{ kg} * 2.5\\text{%}}{96.9 \\text{%}} = \\frac{1250 \\text{ kg}}{96.9} = 12,8999 \\text{ kg} ≈ 12,90 \\text{ kg}
            \\]
            `,
        images: ``  // Imatge opcional al final de la pregunta
    },
    {
        type: "questions", // Tipus de pregunta
        category: "organitzacio",
        text: `En un plànol s’acoten les mides \\(L_{1}\\), \\(L_{2}\\) i \\(L_{3}\\). Si es vol que la tolerància de l’amplària s sigui de ± 150 μm, quina tolerància general cal indicar? <br> <img src="images/2016_set_s1_e1_p4.png" width = 20% height = 20%>`,
        options: [
            { text: "± \\(50\\) \\(\\text{ μm}\\)", value: "a" },
            { text: "± \\(150 \\) \\(\\text{ μm}\\)", value: "b" },
            { text: "± \\(300 \\) \\(\\text{ μm}\\)", value: "c" },
            { text: "± \\(100 \\) \\(\\text{ μm}\\)", value: "d" }
        ],
        correctAnswer: "a",
        steps: `
            \\[
            \\text{Error de cada cota} = \\frac{\\text{Error total permès}}{\\text{Nombre de cotes}}
            \\]
            \\[
            \\text{Tolerància } T = \\frac{\\text{± }150\\text{ μm}}{3} =\\text{± } 50\\text{ μm}
            \\]
            `,
        images: ``  // Imatge opcional al final de la pregunta
    },
    {
        type: "questions", // Tipus de pregunta
        category: "organitzacio",
        text: `Es  mesura  diverses  vegades  el  temps  que  tarda  un  tren  a  recórrer  un  tram  de  10  km  i  s’obtenen els temps següents: 11,23 min, 9,61 min, 10,47 min i 9,86 min. Seria correcte dir que el temps obtingut en el procés de mesurament ha estat de 10,29 min?`,
        options: [
            { text: "No, el resultat hauria de ser el valor més baix obtingut", value: "a" },
            { text: "Sí, ja que és el valor mitjà de les mesures", value: "b" },
            { text: "Sí, ja que es troba entre els marges dels valors obtinguts", value: "c" },
            { text: "No, caldria donar el resultat amb menys xifres decimals", value: "d" }
        ],
        correctAnswer: "b",
        steps: `
            \\[
            \\text{Mitjana } M= \\frac{\\text{Suma de Valors}}{\\text{Nombre de valors}} = \\frac{11.23 \\text{ min} + 9.61\\text{ min}+10.47\\text{ min}+9.86\\text{ min}}{4} = 10.2925 \\text{ min}≈ 10.29\\text{ min}
            \\]
            `,
        images: ``  // Imatge opcional al final de la pregunta
    },
    {
        type: "exercicis",
        category: "energia",
        text: `Un climatitzador automàtic posa en marxa el mode «aire condicionat» si la temperatura interior del vehicle és superior a la temperatura de consigna \\(T_{c}\\), sempre que la temperatura de consigna sigui més de 3 °C inferior a la temperatura exterior del vehicle.
            <br>El sistema també té un sensor que apaga l’aire condicionat si detecta que hi ha alguna finestra oberta. Responeu a les qüestions que hi ha a continuació utilitzant les variables d’estat següents:
            <br>Temperatura interior:<br><img src="images/2016_set_s1_e2_1.png" width = 20% height = 20%>
            <br>Temperatura exterior:<br><img src="images/2016_set_s1_e2_2.png" width = 20% height = 20%>
            <br>Finestres:<br><img src="images/2016_set_s1_e2_3.png" width = 20% height = 20%>
            <br>Aire condicionat:<br><img src="images/2016_set_s1_e2_4.png" width = 20% height = 20%>
            <br><strong>a)</strong> Escriviu la taula de veritat del sistema. [1 punt]
            <br><strong>b)</strong> Determineu la funció lògica entre aquestes variables i, si escau, simplifiqueu-la. [1 punt]
            <br><strong>c)</strong> Dibuixeu l’esquema de portes lògiques equivalent.  [0,5 punts]`,
        correctAnswer: "",  // No és necessari aquí perquè es tracta d'un exercici obert
        steps: `
            <strong>a)</strong><br><img src="images/2016_set_s1_e2_5.png" width = 20% height = 20%><br>
            <strong>b)</strong><br><img src="images/2016_set_s1_e2_6.png" width = 20% height = 20%><br>
            <strong>c)</strong><br><img src="images/2016_set_s1_e2_7.png" width = 20% height = 20%>`,
    },
    {
        type: "exercicis",
        category: "energia",
        text: `Es vol construir una estrella com la de la figura a partir d’un tauler de fusta. La botiga en calcula el cost segons l’expressió \\( c = c_{1} * s + c_{2} * p\\), en què \\(s\\) és la superfície de fusta utilitzada i \\(p\\) és el perímetre de les peces tallades.
            <br>El primer coeficient de cost és \\(c_{1}\\) = 10 €/m2 i l’altre coeficient de cost és \\(c_{2}\\) =  0,5 €/m si el perfil és senzill (com, per exemple, un triangle) o és \\(c_{2}\\) = 1,3 €/m  si el perfil és complex (com, per exemple, una estrella). Determineu:
            <br><img src="images/2016_set_s1_e3.1.png" width = 40% height = 40%>
            <br><strong>a)</strong> La superfície \\(s\\) de fusta utilitzada. [0,5 punts]
            <br><strong>b)</strong> El perímetre tallat \\(p_{1}\\) si es construeix a partir de triangles com els de la figura. [1 punt]
            <br><strong>c)</strong> El perímetre tallat \\(p_{2}\\) si es construeix tallant el perfil exterior de l’estrella. [0,5 punts]
            <br><strong>d)</strong> El cost de cadascuna de les opcions. Quina és la més econòmica?   [0,5 punts]`,
        correctAnswer: "",  // No és necessari aquí perquè es tracta d'un exercici obert
        steps: `
            <strong>a)</strong>
            \\[
            s = 5* \\frac{b*h_{1}}{2} + 5* \\frac{b*h_{2}}{2} = 5* \\frac{0.455\\text{ m}*0.7\\text{ m}}{2} + 5* \\frac{0.455\\text{ m}*0.313\\text{ m}}{2} = 0.796 \\text{ m}^2 + 0.356\\text{ m}^2 = 1.152 \\text{ m}^2
            \\]<br>
            <strong>b)</strong>
            \\[
            L_{1} = \\sqrt{(\\frac{b}{2})^2 + h_{1}^2} = \\sqrt{(\\frac{0.455}{2})^2 + 0.7^2} = \\sqrt{0.5418}\\text{ m} = 0.7360\\text{ m}
            \\]
            \\[
            L_{2} = \\sqrt{(\\frac{b}{2})^2 + h_{2}^2} = \\sqrt{(\\frac{0.455}{2})^2 + 0.313^2} = \\sqrt{0.1497}\\text{ m} = 0.3869\\text{ m}
            \\]
            \\[
            p_{1} = 5* (b + 2*L_{1}) + 5* (b + 2*L_{2})
            \\]
            \\[
            p_{1} = 5* (0.455 + 2*0.7360) + 5* (0.455 + 2*0.3869) = 9.6350 \\text{ m}+ 6.1440\\text{ m}= 15.779\\text{ m}
            \\]<br>
            <strong>c)</strong>
            \\[
            p_{2} = 5* (2*L_{1}) = 10*L_{1} = 10*0.7360\\text{ m} = 7.360\\text{ m}
            \\]<br>
            <strong>d)</strong><br>
            Opció A:
            \\[
            c_{A} = c_{1} * s + c_{2A} * p_{1} = 10\\text{ €/m}^2 * 1.152\\text{ m}^2 + 0.5\\text{ €/m} * 15.78\\text{ m} = 11.52\\text{ €} + 7.89\\text{ €} = 19.41\\text{ €}
            \\]<br>
            Opció B:
            \\[
            c_{B} = c_{1} * s + c_{2B} * p_{2} = 10\\text{ €/m}^2 * 1.152\\text{ m}^2 + 1.3\\text{ €/m} * 7.360\\text{ m} = 11.52\\text{ €} + 9.57\\text{ €} = 21.09\\text{ €}
            \\]<br>
            La opció A es la millor`,
    },
    {
        type: "exercicis",
        category: "energia",
        text: `Els llums antiboira d’un automòbil consumeixen un corrent \\(I_{b} = 10.22 \\text{ A}\\) quan s’ali-menten directament a 12 V. La bateria i els llums es connecten amb un cable bipolar que té una longitud \\(L = 3 \\text{ m}\\) i és de coure de resistivitat \\(ρ = 1.7 * 10^{–8} \\text{ Ωm}\\)<br>
            El circuit s’alimenta amb una bateria de tensió U =   12 V. Si es vol que la caiguda de tensió en el cable no sigui superior al 3 %, determineu:
            <br><strong>a)</strong> La secció mínima que ha de tenir el cable. [1 punt]
            <br>Si s'utilitza un cable de secció \\(S = 4 \\text{ mm}^2\\)
            <br><strong>b)</strong> La resistència del cable \\(R_{cable}\\) [0,5 punts]
            <br><strong>c)</strong> La potència que consumeixen conjuntament el cable i els llums. [1 punt]`,
        correctAnswer: "",  // No és necessari aquí perquè es tracta d'un exercici obert
        steps: `
            <strong>a)</strong>
            \\[
            R_{llums} = \\frac{U}{I_{b}} = \\frac{12 \\text{ V}}{10.22 \\text{ A}} = 1.174 \\text{ Ω}
            \\]
            \\[
            I * R_{llums} = 0.97 * U \\text{ -> } I = \\frac{0.97 * U}{R_{llums}} = \\frac{0.97 * 12 \\text{ V}}{1.174 \\text{ Ω}} = 9.913 \\text{ A}
            \\]
            \\[
            I * R_{cable} = 0.03 * U \\text{ -> } R_{cable} = \\frac{0.03 * U}{I} = \\frac{0.03 * 12 \\text{ V}}{9.913 \\text{ A}} =0.03631 \\text{ Ω}
            \\]
            \\[
            R_{cable} = ρ * \\frac{2*L}{S_{min}} \\text{ -> } S_{min} = ρ * \\frac{2*L}{R_{cable}} = 1.7 * 10^{–8} * \\frac{2*3}{0.03631} = 2.809 \\text{ mm}^2
            \\]<br>
            <strong>b)</strong>
            \\[
            R_{cable} = ρ * \\frac{2*L}{S_{min}} = 1.7 * 10^{–8} * \\frac{2*3}{4*10^{-6}} = 0.0255\\text{ Ω}
            \\]<br>
            <strong>c)</strong>
            \\[
            I = \\frac{U}{R_{llums}+R_{cable}} = \\frac{12\\text{ V}}{1.174 \\text{ Ω}+0.03631 \\text{ Ω}} = \\frac{12\\text{ V}}{1.2\\text{ Ω}}=10.00\\text{ A}
            \\]
            \\[
            P = I^2*R= I^2*(R_{llums}+R_{cable}) = 10^2\\text{ A} + 1.2\\text{ Ω} = 120\\text{ W}
            \\]`,
    },
    {
        type: "exercicis",
        category: "energia",
        text: `<img src="images/2016_set_s1_e3.2.png" width = 40% height = 40%>
            <br>El sistema de la figura s’utilitza per a fer pujar un bloc de massa \\(m = 50 \\text{ kg}\\). La relació entre la variació d’altura \\(Δ_{h}\\) del bloc i l’angle girat pel motor \\(φ_{motor}\\) és:
            \\[
            Δ_{h} = φ_{motor} * \\frac{(r_1 - r_2)* r_3}{2*r_1}
            \\]
            El cable utilitzat és de secció circular, amb un diàmetre \\(d = 5 \\text{ mm}\\), i té un mòdul d’elasticitat \\(E = 130 \\text{ GPa}\\). Quan el bloc puja a velocitat constant, determineu:
            <br><strong>a)</strong> La tensió \\(σ_n\\) i la deformació \\(ε\\) normals del cable indicat en la figura. [1 punt]
            <br><strong>b)</strong> L’allargament del cable \\(Δ_L\\), si la llargària lliure del cable sense el bloc penjat és \\(L = 2000 \\text{ mm}\\). [0,5 punts]
            <br><strong>c)</strong> El parell \\(Γ\\) que desenvolupa el motor [1 punt]`,
        correctAnswer: "",  // No és necessari aquí perquè es tracta d'un exercici obert
        steps: `
            <strong>a)</strong>
            \\[
            2* F_{cable} - m * g = 0 \\text{ -> } F_{cable} = \\frac{m*g}{2} = \\frac{50*9.807}{2} = 245.2 \\text{ N}
            \\]
            \\[
            σ_n = \\frac{F_{cable}}{s} = \\frac{F_{cable}}{π* \\frac{d^2}{4}} = \\frac{245.2 \\text{ N}}{π* \\frac{5^2}{4}} = 12.49 \\text{ MPa}
            \\]
            \\[
            ε = \\frac{σ_n}{E} = \\frac{12.49 \\text{ MPa}}{130 \\text{ GPa}} = 96.05 * 10^{-6}
            \\]<br>
            <strong>b)</strong>
            \\[
            Δ_{L} = ε  * L = 96.05 * 2000 \\text{ mm}= 0.1921\\text{ mm}
            \\]<br>
            <strong>c)</strong>
            \\[
            W_{motor} = Γ * φ_{motor} = m*g*Δ_{h}\\text{ -> } Γ =m*g*\\frac{(r_1 - r_2)* r_3}{2*r_1}=50*9.807*\\frac{(0.25 - 0.23)* 0.15}{2*0.25}=2,942 \\text{ Nm}
            \\]`,
    },
    {
        type: "exercicis",
        category: "energia",
        text: `El parell motor \\(Γ\\) d’un motor de corrent continu i la intensitat \\(I\\) del corrent que hi circula són donats per les expressions següents, en què \\(U\\) és la tensió d’alimentació, \\(ω\\) és la velocitat angular de l’eix, \\(R = 0.03 \\text{ Ω}\\)  i \\(c = 0.02 N m/A\\).
            \\[
            Γ = c*I
            \\]
            \\[
            I = \\frac{U-c*ω}{R}
            \\]
            Quan la intensitat \\(I\\) és de \\(50 \\text{ A}\\), la potència que consumeix el motor és de \\(600 \\text{ W}\\). Determineu:
            <br><strong>a)</strong> La tensió d’alimentació \\(U\\) del motor quan \\(I = 50 \\text{ A}\\). [0,5 punts]
            <br>Si el motor s’alimenta amb la tensió obtinguda en l’apartat anterior:
            <br><strong>b)</strong> Determineu la velocitat angular \\(ω\\) de l’eix del motor quan \\(I = 100 \\text{ A}\\). [1 punt]
            <br><strong>c)</strong> Dibuixeu, d’una manera aproximada i indicant les escales, la corba del rendiment en funció de la velocitat de gir per a \\(0 ≤ ω ≤ 600 \\text{ rad/s}\\) [1 punt]`,
        correctAnswer: "",  // No és necessari aquí perquè es tracta d'un exercici obert
        steps: `
            <strong>a)</strong>
            \\[
            P_{diss} = I * U = 600 \\text{ W} \\text{ -> } U = \\frac{600}{I} = \\frac{600}{50} = 12 \\text{ V} 
            \\]<br>
            <strong>b)</strong>
            \\[
            I = \\frac{U-c*ω}{R} \\text{ -> } ω= \\frac{U-I*R}{c}= \\frac{12-100*0.03}{0.02} = 450\\text{ rad/s}
            \\]<br>
            <strong>c)</strong>
            \\[
            η_{mot}= \\frac{P_{mec}}{P_{elec}} = \\frac{Γ*ω}{I*U} = \\frac{c*I*ω}{I*U} = \\frac{c*ω}{U} = \\frac{0.02*ω}{12} = \\frac{ω}{600 \\text{ rad/s}} 
            \\]
            <img src="images/2016_set_s1_e4.2.png" width = 40% height = 40%>`,
    },
    {
        type: "questions", // Tipus de pregunta
        category: "organitzacio",
        text: `Connectem en paral·lel una reactància capacitiva de \\(100\\text{ Ω}\\) i una reactància inductiva de \\(50\\text{ Ω}\\). El conjunt s’alimenta d’una xarxa de \\(100\\text{ V}\\). Quina és la potència reactiva consumida pel conjunt?`,
        options: [
            { text: "\\(0 \\text{ var}\\)", value: "a" },
            { text: "\\(100 \\text{ var}\\)", value: "b" },
            { text: "\\(200 \\text{ var}\\)", value: "c" },
            { text: "\\(-100 \\text{ var}\\)", value: "d" }
        ],
        correctAnswer: "b",
        steps: `
            \\[
            \\text{Potència reactiva: } = Q = \\frac{V^2}{X}\\]
            \\[
            Q_L = \\frac{V^2}{X_L} = \\frac{100^2}{50} = \\frac{10000}{50} = 200\\text{ var}\\]
            \\[
            \\text{Peces perdudes en Rectificació} = R = 6\\]
            \\[
            Q_C = \\frac{V^2}{X_C} = \\frac{100^2}{100} = \\frac{10000}{100} = 100\\text{ var}
            \\]
            \\[
            Q_T = Q_L - Q_C = 200\\text{ var} - 100\\text{ var} = 100 \\text{ var}
            \\]
            `,
        images: ``  // Imatge opcional al final de la pregunta
    },
    {
        type: "questions", // Tipus de pregunta
        category: "organitzacio",
        text: `A quina velocitat gira un motor d’inducció de dos parells de pols connectat a una xarxa de \\(50\\text{ Hz}\\) i funcionant en condicions nominals?`,
        options: [
            { text: "Una mica per sota de \\(1500\\text{ min}^{−1}\\)", value: "a" },
            { text: "Exactament a \\(1500\\text{ min}^{−1}\\)", value: "b" },
            { text: "Una mica per sota de \\(3000\\text{ min}^{−1}\\)", value: "c" },
            { text: "Exactament a \\(3000\\text{ min}^{−1}\\)", value: "d" }
        ],
        correctAnswer: "a",
        steps: `
            \\[
            V_s = \\frac{60*f}{p} = \\frac{60*50}{2} = \\frac{3000}{2} = 1500\\text{ min}^{−1}
            \\]
            \\[
            \\text{Condicions nominals: } V = V_s *(1-s\\text{ (Lliscament)})\\]
            Per tant, si o si ha de ser menys de \\(1500\\text{ min}^{−1}\\)
            `,
        images: ``  // Imatge opcional al final de la pregunta
    },
    {
        type: "questions", // Tipus de pregunta
        category: "organitzacio",
        text: `Connectem en paral·lel una reactància capacitiva de \\(100\\text{ Ω}\\) i una reactància inductiva de \\(50\\text{ Ω}\\). El conjunt s’alimenta d’una xarxa de \\(100\\text{ V}\\). Quina és la potència reactiva consumida pel conjunt?`,
        options: [
            { text: "\\(0 \\text{ var}\\)", value: "a" },
            { text: "\\(100 \\text{ var}\\)", value: "b" },
            { text: "\\(200 \\text{ var}\\)", value: "c" },
            { text: "\\(-100 \\text{ var}\\)", value: "d" }
        ],
        correctAnswer: "b",
        steps: `
            \\[
            \\text{Potència reactiva: } = Q = \\frac{V^2}{X}\\]
            \\[
            Q_L = \\frac{V^2}{X_L} = \\frac{100^2}{50} = \\frac{10000}{50} = 200\\text{ var}\\]
            \\[
            \\text{Peces perdudes en Rectificació} = R = 6\\]
            \\[
            Q_C = \\frac{V^2}{X_C} = \\frac{100^2}{100} = \\frac{10000}{100} = 100\\text{ var}
            \\]
            \\[
            Q_T = Q_L - Q_C = 200\\text{ var} - 100\\text{ var} = 100 \\text{ var}
            \\]
            `,
        images: ``  // Imatge opcional al final de la pregunta
    },
    {
        type: "questions", // Tipus de pregunta
        category: "organitzacio",
        text: `Una càrrega trifàsica està formada per tres impedàncies iguals de valor \\(Z = 12 + \\text{j } 9 \\text{ Ω}\\) connectades en estrella. Si connectem la càrrega a una xarxa de \\(230\\text{ V}\\) de tensió composta, quina és la potència activa consumida per la càrrega?`,
        options: [
            { text: "\\(1628\\text{ W}\\)", value: "a" },
            { text: "\\(2820\\text{ W}\\)", value: "b" },
            { text: "\\(3526\\text{ W}\\)", value: "c" },
            { text: "\\(4885\\text{ W}\\)", value: "d" }
        ],
        correctAnswer: "b",
        steps: `
            \\[
            Z = \\sqrt{R^2+X_{L}^{2}} = \\sqrt{12^2+9^{2}} = \\sqrt{225} = 15\\text{ Ω}
            \\]
            \\[
            \\text{cos φ} = \\frac{Z}{R} ​=\\frac{15}{12}​=0.8
            \\]
            \\[
            V_f = \\frac{V_L}{\\sqrt{3}} = \\frac{230}{\\sqrt{3}} = 132.79\\text{ V}
            \\]
            \\[
            I_f = \\frac{V_f}{Z} = \\frac{132.79}{\\sqrt{15}} = 8.85\\text{ A}
            \\]
            \\[
            P = \\sqrt{3}*V_L*I_f * \\text{cos φ} = \\sqrt{3}*230*8.85 * 0.8 = 2821,4 \\text{ W} ≈2820\\text{ W}
            \\]
            `,
        images: ``  // Imatge opcional al final de la pregunta
    },
    {
        type: "questions", // Tipus de pregunta
        category: "organitzacio",
        text: `Si es produís un curtcircuit al final d’una línia monofàsica, això provocaria un corrent massa petit per a la protecció instal·lada (interruptor  magnetotèrmic). Per tal de solucionar aquest problema es podria `,
        options: [
            { text: `<img src="images/2016_jun_s3_e1_p5_1.png" width = 40% height = 40%>`, value: "a" },
            { text: `<img src="images/2016_jun_s3_e1_p5_2.png" width = 40% height = 40%>`, value: "b" },
            { text: `<img src="images/2016_jun_s3_e1_p5_3.png" width = 40% height = 40%>`, value: "c" },
            { text: `<img src="images/2016_jun_s3_e1_p5_4.png" width = 40% height = 40%>`, value: "d" }
        ],
        correctAnswer: "d",
        steps: `<img src="images/2016_jun_s3_e1_p5_5.png" width = 20% height = 20%> \\( = \\)
                <img src="images/2016_jun_s3_e1_p5_6.png" width = 20% height = 20%> \\( = \\)
                <img src="images/2016_jun_s3_e1_p5_7.png" width = 20% height = 20%> \\( = \\)
                <img src="images/2016_jun_s3_e1_p5_4.png" width = 20% height = 20%>`,
        images: ``  // Imatge opcional al final de la pregunta
    }
];

