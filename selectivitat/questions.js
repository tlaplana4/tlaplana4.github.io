const questions = [
    {
        type: "questions", // Tipus de pregunta
        category: "motors",
        text: `En un motor asíncron de corrent altern de quatre parells de pols, que està connectat a la xarxa de tensió \\(U = 230\\, \\text{V}\\) i freqüència \\(f = 50\\, \\text{Hz}\\), la velocitat de sincronisme és`,
        options: [
            { text: "\\(750\\, \\text{min}^{-1}\\)", value: "a" },
            { text: "\\(1800\\, \\text{min}^{-1}\\)", value: "b" },
            { text: "\\(1500\\, \\text{min}^{-1}\\)", value: "c" },
            { text: "\\(3000\\, \\text{min}^{-1}\\)", value: "d" }
        ],
        correctAnswer: "a",
        steps: `
            Formula de la Velocitat de Sincronisme: \\[P_{n} = \\frac{\\text{Frequencia}^{-1}*60}{\\text{Pols}}\\]
            Solució: \\[P_{n} = \\frac{50*60}{4}\\ = 750\\, \\text{min}^{-1}\\]
            `,
        images: ``  // Imatge opcional al final de la pregunta
    },
    {
        type: "questions", // Tipus de pregunta
        category: "organitzacio",
        text: `La fabricació d’una peça es duu a terme en dos processos: el primer en una fresado-ra i el segon en una rectificadora. Després de cada procés, es controla la qualitat de les peces i es desestimen les que no són correctes. D’un total inicial de 1 500 peces, se n’han desestimat 75 després del fresatge i 6 després de la rectificació. Quina és la taxa de rebuig del procés de rectificació?`,
        options: [
            { text: "\\(8 \\text{%}\\)", value: "a" },
            { text: "\\(0.42 \\text{%}\\)", value: "b" },
            { text: "\\(0.40 \\text{%}\\)", value: "c" },
            { text: "\\(5.4 \\text{%}\\)", value: "d" }
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
        text: `La tensió de ruptura d’un fil de niló és \\(σ = 67\\text{ MPa}\\). Si s’utilitza per a penjar sòlids amb una massa de \\(45 \\text{ kg}\\), quina és la secció mínima que ha de tenir perquè no es trenqui? (Preneu \\(g = 10 \\text{ m/s}^2\\).)`,
        options: [
            { text: "\\(1.489 \\text{ mm}^2\\)", value: "a" },
            { text: "\\(6.716 \\text{ mm}^2\\)", value: "b" },
            { text: "\\(67.16 \\text{ mm}^2\\)", value: "c" },
            { text: "\\(14.89 \\text{ mm}^2\\)", value: "d" }
        ],
        correctAnswer: "b",
        steps: `
            \\[
            F = m* g = 45 * 10 = 450 \\text{ N}
            \\]
            \\[
            A = \\frac{F}{σ} = \\frac{450}{67 * 10^6} = 6.716 * 10^{−6} \\text{ m}^2 = 6.716 \\text{ mm}^2
            \\]
            `,
        images: ``  // Imatge opcional al final de la pregunta
    },
    {
        type: "questions", // Tipus de pregunta
        category: "organitzacio",
        text: `Una atracció d’autos de xoc disposa de 20 vehicles de dues places cadascun. La dura-da de cada viatge és de \\(4 \\text{ min}\\) i l’interval entre l’acabament d’un viatge i el començament del viatge següent és de \\(15 \\text{ s}\\). Quin és el nombre màxim d’usuaris que poden fer un viatge complet en una hora?`,
        options: [
            { text: "\\(600 \\text{ usuaris}\\)", value: "a" },
            { text: "\\(300 \\text{ usuaris}\\)", value: "b" },
            { text: "\\(560 \\text{ usuaris}\\)", value: "c" },
            { text: "\\(280 \\text{ usuaris}\\)", value: "d" }
        ],
        correctAnswer: "a",
        steps: `
            \\[
            4 \\text{ min} = 240 \\text{ s}
            \\]
            \\[
            T = 240 +15 = 255\\text{ s}
            \\]
            \\[
            \\text{Viatges per hora} = \\frac{1\\text{ h} = 3600\\text{ s}}{255\\text{ s}} = 14.11 \\text{ viatges}= 14\\text{ viatges}
            \\]
            \\[
            20 \\text{ vehicles/viatge} * 2 \\text{ persones/vehicles} = 40 \\text{ persones/viatge}
            \\]
            \\[
            P = 40 \\text{ persones/viatge} * 14 \\text{ viatges} = 560 \\text{Persones}
            \\]
            `,
        images: ``  // Imatge opcional al final de la pregunta
    },
    {
        type: "questions", // Tipus de pregunta
        category: "organitzacio",
        text: `Es  prepara  una  mescla  de  dos  materials  pesant-los  en  una  bàscula  que  té  una  precisió  de ±\\(1,6\\text{ %}\\). Per fer-ho, s’agafen \\(105 \\text{ g}\\) del primer material i \\(84 \\text{ g}\\) del segon. Quina serà la quantitat de mescla obtinguda?`,
        options: [
            { text: "Entre \\(186.0 \\text{ g}\\) i \\(192.0 \\text{ g}\\)", value: "a" },
            { text: "Entre \\(185.8 \\text{ g}\\) i \\(192.2 \\text{ g}\\)", value: "b" },
            { text: "Entre \\(187.4 \\text{ g}\\) i \\(190.6 \\text{ g}\\)", value: "c" },
            { text: "Entre \\(188.4 \\text{ g}\\) i \\(189.6 \\text{ g}\\)", value: "d" }
        ],
        correctAnswer: "a",
        steps: `
            \\[
            \\text{Error: } 189 \\text{ g} * 0.016 = 3.024 \\text{ g}
            \\]
            \\[
            \\text{Quantitat minima: } 189−3.024=185.976\\text{ g} = 186.0 \\text{ g}
            \\]
            \\[
            \\text{Quantitat maxima: } 189+3.024=192.024\\text{ g} = 192.0 \\text{ g}
            \\]
            `,
        images: ``  // Imatge opcional al final de la pregunta
    },
    {
        type: "questions", // Tipus de pregunta
        category: "organitzacio",
        text: `Un cotxe té un motor V8 amb vuit cilindres. La cilindrada és de \\(3999 \\text{ cm}^3\\) i el diàmetre dels cilindres és de \\(92 \\text{ mm}\\). Quina és la cursa dels cilindres?`,
        options: [
            { text: "\\(73.60 \\text{ mm}\\)", value: "a" },
            { text: "\\(43.47 \\text{ mm}\\)", value: "b" },
            { text: "\\(59.06 \\text{ mm}\\)", value: "c" },
            { text: "\\(75.20 \\text{ mm}\\)", value: "d" }
        ],
        correctAnswer: "d",
        steps: `
            \\[
            \\text{Cilindrada per Cilindre: } C = \\frac{\\text{Cilindrada total}}{\\text{Nombre de cilindres}} = \\frac{3999 \\text{ cm}^3}{8} = 499.875\\text{ cm}^3
            \\]
            \\[
            \\text{Cursa: } C = \\frac{π*D^2*L}{4} \\text{ -> } L = \\frac{4*C}{π*D^2} = \\frac{4*499.875}{π*9.2^2} = \\frac{1999.5}{265.9} = 7.520 \\text{ cm} = 75.20 \\text{ mm}
            \\]
            `,
        images: ``  // Imatge opcional al final de la pregunta
    },
    {
        type: "questions", // Tipus de pregunta
        category: "organitzacio",
        text: `En l’ajust indeterminat 45 H7 / j6, la tolerància H7 del forat és (+25, 0) i la tolerància j6de l’eix és (+11, -5). Quins són el joc i el serratge màxims?`,
        options: [
            { text: "El joc màxim és \\(5 \\text{ μm}\\) i el serratge màxim és \\(36 \\text{ μm}\\)", value: "a" },
            { text: "El joc màxim és \\(16 \\text{ μm}\\) i el serratge màxim és \\(25 \\text{ μm}\\)", value: "b" },
            { text: "El joc màxim és \\(20 \\text{ μm}\\) i el serratge màxim és \\(11 \\text{ μm}\\)", value: "c" },
            { text: "El joc màxim és \\(30 \\text{ μm}\\) i el serratge màxim és \\(11 \\text{ μm}\\)", value: "d" }
        ],
        correctAnswer: "d",
        steps: `
            \\[
            \\text{Joc màxim: } J_{max} = C_{fmax} - C_{emin} = 25 - (-5) = 30 \\text{ μm} 
            \\]
            \\[
            \\text{Serratge màxim: } S_{max} = C_{emax} - C_{fmin} = 11 - 0 = 11 \\text{ μm}
            \\]
            `,
        images: ``  // Imatge opcional al final de la pregunta
    },
    {
        type: "exercicis",
        category: "energia",
        text: `Un sistema automàtic de control de l’aforament d’un recinte està constituït per tres sen-sors de comptatge de persones situats estratègicament.<br>
            El sistema emet un avís per megafonia quan almenys dos d’aquests sensors superen el valor de referència prefixat \\(p_{màx}\\). Responeu a les qüestions que hi ha a continuació utilitzant les variables d’estat següents:
            <br>Sensor: <img src="images/2016_jun_s3_e1.1.png" width = 40% height = 40%>
            <br>Avís de megafonia: <img src="images/2016_jun_s3_e1.2.png" width = 40% height = 40%>
            <br><strong>a)</strong> Escriviu la taula de veritat del sistema. [1 punt]
            <br><strong>b)</strong> Determineu la funció lògica entre aquestes variables i, si escau, simplifiqueu-la. [1 punt]
            <br><strong>c)</strong> Dibuixeu l’esquema de contactes equivalent. [0.5 punts]`,
        correctAnswer: "",  // No és necessari aquí perquè es tracta d'un exercici obert
        steps: `
            <strong>a)</strong>
            <img src="images/2016_jun_s3_e1.3.png" width = 20% height = 20%><br>
            <strong>b)</strong>
            <img src="images/2016_jun_s3_e1.4.png" width = 40% height = 40%><br>
            <strong>c)</strong>
            <img src="images/2016_jun_s3_e1.5.png" width = 40% height = 40%>`,
    },
    {
        type: "exercicis",
        category: "energia",
        text: `Una cafetera elèctrica disposa de dues resistències: una resistència d’escalfament \\(R_e\\) i una de manteniment \\(R_m\\). En la primera fase d’elaboració del cafè, funciona només la resistència d’escalfament,  que  proporciona  una  potència  \\(P_1=700 \\text{ W}\\) i escalfa l’aigua fins a \\(T_1=120\\text{°C}\\) sense que es produeixi un canvi d’estat.
            <br>Quan l’aigua arriba a la temperatura \\(T_1\\), es connec-ten  les  dues  resistències  en  sèrie  i  proporcionen  una  potència  \\(P_2=260 \\text{ W}\\).  La  temperatura  inicial  de  l’aigua  és  \\(T_0 = 20 \\text{°C}\\),  el  volum  d’aigua escalfat és \\(V = 0.5 \\text{ L}\\) i la cafetera està connectada a la xarxa elèctrica de tensió \\(U = 230\\text{ V}\\). Sabent que la calor específica de l’aigua és \\(c_e=4,18 \\text{ kJ/(kg°C)}\\), determineu:
            <br><strong>a)</strong> L’energia \\(E_1\\) necessària per a escalfar l’aigua en la primera fase. [1 punt]
            <br><strong>b)</strong> El temps \\(t_1\\) de durada de la primera fase. [0.5 punts]
            <br><strong>c)</strong> El valor de les resistències \\(R_e\\) i \\(R_m\\). [1 punt]`,
        correctAnswer: "",  // No és necessari aquí perquè es tracta d'un exercici obert
        steps: `
            <strong>a)</strong>
            \\[
            E_1 = V*ρ*c_e*(T_1-T_0) = 0.5 * 1 * 4.18 * 10 * (120 - 20) = 209.0 \\text{ kJ} = 58.06 \\text{ Wh}
            \\]
            <strong>b)</strong>
            \\[
            E_1 = P_1 * t_1 \\text{ -> } t_1 = \\frac{E_1}{P_1} = \\frac{58.06}{700} = 0.083 \\text{ h} = 298.59 \\text{ s} 
            \\]
            <strong>c)</strong>
            \\[
            P = \\frac{U^2}{R} \\text{ -> } R_e = \\frac{U^2}{P_1} = \\frac{230^2}{700} = 75.57 \\text{ Ω}
            \\]
            \\[
            R_e + R_m = \\frac{U^2}{P_2} = R_e = \\frac{U^2}{P_2} - R_m = \\frac{230^2}{260} - 75.57 = 127.89 \\text{ Ω}
            \\]`,
    },
    {
        type: "exercicis",
        category: "energia",
        text: `<img src="images/2016_jun_s3_e4_1.png" width = 40% height = 40%>
            <br>Un ciclista puja un pendent a una velocitat constant \\(v = 18 \\text{ km/h}\\). La marxa que té posada fa que la relació de transmissió entre els pedals i la roda sigui \\(τ = ω_{roda}/ω_{pedals} = 1.8\\). La roda té un radi \\(r = 330 \\text\{ mm}\\), el perfil de la carretera forma un angle \\(α = 12°\\) respecte de l’horitzontal i la massa del ciclista més la bicicleta és \\(m = 87 \\text{ kg}\\). Si es considera que el rendiment mecànic de la bicicleta és \\(η = 0.95\\), determineu:
            <br><strong>a)</strong> Les velocitats de gir de la roda \\(ω_{roda}\\) i dels pedals \\(ω_{pedals}\\), en rad/s. [0.5 punts]
            <br><strong>b)</strong> La potència \\(P_{bicicleta}\\) necessària per a pujar el pendent. [1 punt]
            <br><strong>c)</strong> La potència \\(P_{pedals}\\) que ha de desenvolupar el ciclista. [0.5 punts]
            <br><strong>d)</strong> El parell a l’eix dels pedals \\(Γ_{pedals}\\). [0.5 punts]`,
        correctAnswer: "",  // No és necessari aquí perquè es tracta d'un exercici obert
        steps: `
            <strong>a)</strong>
            \\[
            ω_{roda} = \\frac{V}{r} = \\frac{18 \\text{ km/h} = 5 \\text{ m/s}}{0.33 \\text{ m}} = 15.15 \\text{ rad/s}
            \\]
            \\[
            τ = \\frac{ω_{roda}}{ω_{pedals}} \\text{ -> } ω_{pedals} = \\frac{ω_{roda}}{τ} \\frac{15.15}{1.8} = 8.418 \\text{ rad/s}
            \\]
            <strong>b)</strong>
            \\[
            P_{bici} = m*g*v* \\text{sin α} = 87 * 9.81 * 18 * \\text{sin 12°} = 887.0 \\text{ W}
            \\]
            <strong>c)</strong>
            \\[
            η = \\frac{P_{bici}}{P_{pedals}} \\text{ -> } P_{pedals} = \\frac{P_{bici}}{η} = \\frac{887}{0.95} = 993.6\\text{ W}
            \\]
            <strong>d)</strong>
            \\[
            Γ_{pedals} = \\frac{P_{pedals}}{ω_{pedals}} = \\frac{993.6}{8.418} = 110.9 \\text{ Nm}
            \\]`,
    },
    {
        type: "exercicis",
        category: "energia",
        text: `<img src="images/2016_jun_s3_e3_2.png" width = 40% height = 40%>
            <br>Es vol construir un prisma massís de base quadrada com el de la figura a partir d’un tauler de fusta. Es pot escollir entre dos taulers, l’un de gruix \\(e_1 = 12 \\text{ mm}\\) i l’altre de gruix \\(e_2 = 14 \\text{ mm}\\). Per a construir el prisma, s’hauran de tallar quadrats o rectangles, segons s’esculli, i encolar-los entre ells fins a obtenir la figura.
            El gruix de la cola es considera negligible. La botiga calcula el cost del prisma segons l’expressió \\(c = c_a*p + c_b*s\\), en què \\(p\\) és el perímetre del quadrat o del rectangle tallat i \\(s\\) és la superfície de tauler utilitzada. El primer coeficient de cost és \\(c_a =  0.7 \\text{ €/m}\\), i l’altre coeficient de cost és \\(c_{b1} = 3.2 \\text{ €/m}^2\\) si s’utilitza el tauler de gruix \\(e_1\\), o \\(c_{b2} = 4.8 \\text{ €/m}^2\\) si s’utilitza el tauler de gruix \\(e_2\\). Determineu:
            <br><strong>a)</strong> Quin tauler s’utilitzarà per a construir el prisma a base de quadrats i quin per a cons-truir-lo a base de rectangles? Per què? [1 punt]
            <br><strong>b)</strong> El perímetre total dels quadrats o dels rectangles tallats en cada cas, \\(p_1\\) i \\(p_2\\). [0.5 punts]
            <br><strong>c)</strong> La superfície de tauler de fusta utilitzada en cada cas, \\(s_1\\) i \\(s_2\\). [0.5 punts]
            <br><strong>d)</strong> El cost de cadascuna de les opcions, \\(c_1\\) i \\(c_2\\). Quina és la més econòmica?. [0.5 punts]`,
        correctAnswer: "",  // No és necessari aquí perquè es tracta d'un exercici obert
        steps: `
            <strong>a)</strong>
            Si el vol construir a base de quadrats (bxb) cal utilitzar el tauler de gruix \\(12\\text{ mm}\\) ja que l’alçada \\(h\\) només és divisible per \\(12 \\text{ mm}\\).
            \\[
            n_1 = \\frac{h}{e_1} = \\frac{0.3}{12} = 25 \\text{ quadrats necessaris.}
            \\]
            Si el vol construir a base de rectangles (hxb) cal utilitzar el tauler de gruix \\(14\\text{ mm}\\) ja que la longitud \\(b\\) només és divisible per \\(14 \\text{ mm}\\).
            \\[
            n_2 = \\frac{b}{e_2} = \\frac{0.14}{14} = 10 \\text{ rectangles necessaris.}
            \\]
            <strong>b)</strong>
            \\[
            p_1 = 4*b*n_1= 4* 0.14 * 25 = 14 \\text{ m}
            \\]
            \\[
            p_2 = 2*(b+h)*n_2= 2* (0.14+0.30 = 0.44) * 25 = 8.8 \\text{ m}
            \\]
            <strong>c)</strong>
            \\[
            s_1 = b^2*n_1=0.14^2*25=0.49 \\text{ m}^2
            \\]
            \\[
            s_2 = b*h*n_2=0.14*0.3*10=0.42 \\text{ m}^2
            \\]
            <strong>d)</strong>
            \\[
            c_1=c_a*p_1+c_{b1}*s_1= 0.7 * 14 + 3.2 * 0.49 = 11.37 \\text{ €}
            \\]
            \\[
            c_2=c_a*p_2+c_{b2}*s_2= 0.7 * 8.8 + 4.8 * 0.42 = 8.18 \\text{ €}
            \\]
            És més econòmic construir-lo a base de rectangles.`,
    },
    {
        type: "exercicis",
        category: "energia",
        text: `Un elevador de cotxes d’un taller de reparacions funciona mitjançant dos cilindres hidràulicsconnectats directament a la base que suporta el cotxe. Els cilindres tenen un diàmetre interior \\(d_{int} = 100 \\text{ mm}\\) i el diàmetre de la tija és \\(d_{tija} = 56 \\text{ mm}\\). Si la pressió relativa a l’interior dels cilindres és \\(p_{int} = 2.5 \\text{ MPa}\\), determineu:
            <br><strong>a)</strong> La massa màxima \\(m_{màx}\\) que pot aguantar l’elevador.  [1 punt]
            <br><strong>b)</strong> La tensió normal a compressió de la tija \\(σ_{tija}\\) quan s’eleva la massa màxima. [0.5 punts]
            <br>El rendiment dels cilindres és \\(η = 0.88\\). Quan l’elevador puja la càrrega màxima a una velocitat \\(v = 0.038 \\text{ m/s}\\), la bomba subministra un cabal d’oli \\(q = 0,2985 \\text{ L/s}\\) a cadascun dels cilindres. Determineu:
            <br><strong>c)</strong> La potència \\(P_h\\) proporcionada per la bomba a cadascun dels cilindres. [0.5 punts]
            <br><strong>d)</strong> La pressió \\(p\\) proporcionada per la bomba. [0.5 punts]`,
        correctAnswer: "",  // No és necessari aquí perquè es tracta d'un exercici obert
        steps: `
            <strong>a)</strong>
            \\[
            2*F_{ch} = m*g \\text{ -> } F_{ch} = \\frac{m*g}{2}
            \\]
            \\[
            p_{int} = \\frac{F_{ch}}{s_{int}} = \\frac{m*g}{2*s_{int}} \\text{ -> } m = \\frac{2*s_{int} * p_{int}}{g} = \\frac{2*π*(\\frac{d_{int}}{2})^2* p_{int}}{g} = \\frac{2*π*(\\frac{0.1}{2})^2* 3.5*10^6}{9.81} = 4004 \\text{ kg}
            \\]
            <strong>b)</strong>
            \\[
            σ_{tija} = \\frac{F_{ch}}{s_{tija}} = \\frac{m*g}{2*s_{tija}} = \\frac{m*g}{2*π*(\\frac{d_{int}}{2})^2} = \\frac{4004*9.81}{2*π*(\\frac{0.056}{2})^2} = 7.972 \\text{ MPa}
            \\]
            <strong>c)</strong>
            \\[
            η = \\frac{F_{ch}*v}{P_h} = \\frac{m*g*v}{2*P_h} \\text{ -> } P_h = \\frac{m*g*v}{2*η} = \\frac{4004*9.81*0.038}{2*0.88} = 847.9 \\text{ W}
            \\]
            <strong>d)</strong>
            \\[
            P_h = p*q \\text{ -> } p = \\frac{P_h}{q} = \\frac{847.9}{0.2985} = 2.840 \\text{ MPa}
            \\]`,
    },
    {
        type: "questions",
        category: "energia",
        text: `La composició en volum d’un gas natural és la següent: \\(86.15 \\text{ %}\\) de metà, \\(12.68 \\text{ %}\\) d’età, \\(0.4 \\text{ %}\\) de propà, \\(0.09 \\text{ %}\\) de butà i la resta és nitrogen. Si el nitrogen té una densitat d’\\(1.251 \\text{ g/L}\\), quants kilograms de nitrogen hi ha en \\(4500 \\text{ L}\\) d’aquest gas?`,
         options: [
            { text: "\\(0.03828 \\text{ kg}\\)", value: "a" },
            { text: "\\(30.6 \\text{ kg}\\)", value: "b" },
            { text: "\\(0.0306 \\text{ kg}\\)", value: "c" },
            { text: "\\(3.828 \\text{ kg}\\)", value: "d" }
        ],
        correctAnswer: "a",
        steps: `
            \\[
            \\text{Suma components coneguts} = 86.15 + 12.68 + 0.4 + 0.09 = 99.32%
            \\]
            \\[
            \\text{% Nitrogen} = 100 − 99.32 = 0.68 \\text{ %}
            \\]
            \\[
            V_N = \\frac{0.68}{100  } * V = 0.0068 * 4500 = 30.6 \\text{ L}
            \\]
            \\[
            m = d*v = 1.251 * 30.6 = 0.03828 \\text{ kg}
            \\]
            `,
        images: ``  // Imatge opcional al final de la pregunta
    },
    {
        type: "questions",
        category: "energia",
        text: `Una empresa comercialitza un model de pantalons nou. El cost de producció unitària és de 10 €. Durant el primer any, l’empresa vol recuperar 250000€ de  la  inversió  inicial,  obtenir un benefici mínim de 15000 € i pagar les despeses de fabricació de totes les unitats venudes. Si la venda prevista està entre 5500 i 9500 unitats, quin ha de ser el preu de venda dels pantalons?`,
         options: [
            { text: "\\(55.45 \\text{ €}\\)", value: "a" },
            { text: "\\(36.32 \\text{ €}\\)", value: "b" },
            { text: "\\(60\\text{ €}\\)", value: "c" },
            { text: "\\(58.18 \\text{ €}\\)", value: "d" }
        ],
        correctAnswer: "d",
        steps: `
            \\[
            n * p = I + B + (n*c) \\text{ -> } p = \\frac{I+B+(n*c)}{n} = \\frac{250000+15000+(5500*10)}{5500} = 58.18 \\text{ €}
            \\]`,
        images: ``  // Imatge opcional al final de la pregunta
    },
    {
        type: "questions",
        category: "energia",
        text: `Una barra massissa de secció quadrada de 5 mm de costat pot aguantar una força de trac-ció de fins a 5,9 kN. Quina és la resistència a la tracció del material de la barra?`,
         options: [
            { text: "\\(300.5 \\text{ MPa}\\)", value: "a" },
            { text: "\\(472 \\text{ MPa}\\)", value: "b" },
            { text: "\\(1180\\text{ MPa}\\)", value: "c" },
            { text: "\\(236 \\text{ MPa}\\)", value: "d" }
        ],
        correctAnswer: "d",
        steps: `
            Com que la barra té una secció quadrada, l'àrea es calcula elevant el costat al quadrat:
            \\[
            A=c^2=0.005^2 = 0.000025 \\text{ m}^2
            \\]
            \\[
            σ = \\frac{F}{A} = \\frac{5900\\text{ N}}{0.000025\\text{ m}^2} = 236 \\text{ MPa}
            \\]`,
        images: ``  // Imatge opcional al final de la pregunta
    },
    {
        type: "questions",
        category: "energia",
        text: `Un  motor  de  corrent  altern  asíncron  de  dos  parells  de  pols  té  un  lliscament  relatiu  de  0,05. Si està connectat a la xarxa de tensió U = 220 V  i  freqüència f = 50 Hz,  a  quina  velocitat està girant?`,
         options: [
            { text: "\\(1425 \\text{ min}^{-1}\\)", value: "a" },
            { text: "\\(1710 \\text{ min}^{-1}\\)", value: "b" },
            { text: "\\(2850 \\text{ min}^{-1}\\)", value: "c" },
            { text: "\\(1500 \\text{ min}^{-1}\\)", value: "d" }
        ],
        correctAnswer: "a",
        steps: `
            \\[
            n_s​=\\frac{60⋅f}{p}​​=\\frac{60⋅50}{2}​ =1500 \\text{ min}^{-1}
            \\]
            En un motor asíncron, el rotor gira una mica més lent que el camp magnètic. Aquesta diferència es defineix pel lliscament (s):
            \\[
            n=n_s​*(1−s) = 1500 * (1-0.05) = 1425 \\text{ min}^{-1}
            \\]`,
        images: ``  // Imatge opcional al final de la pregunta
    },
    {
        type: "questions",
        category: "energia",
        text: `Les característiques tècniques de la bateria d’un vehicle elèctric indiquen que té una capa-citat de 100 A    h, que el temps de càrrega és de 5 h, que funciona a una tensió de 220 V i que permet 1 800 cicles de càrrega/descàrrega. Tenint en compte aquestes característiques, quina és la potència necessària en el procés de càrrega de la bateria?`,
         options: [
            { text: "\\(4.4 \\text{ kW}\\)", value: "a" },
            { text: "\\(3.6 \\text{ kW}\\)", value: "b" },
            { text: "\\(3.96\\text{ kW}\\)", value: "c" },
            { text: "\\(8.8 \\text{ kW}\\)", value: "d" }
        ],
        correctAnswer: "a",
        steps: `
            \\[
            E=C*U = 100 * 220 = 22000\\text{ Wh}\\)
            \\]
            \\[
            P = \\frac{E}{t} = \\frac{22000}{5} = 4.4 \\text{ kW}
            \\]`,
        images: ``  // Imatge opcional al final de la pregunta
    }
];