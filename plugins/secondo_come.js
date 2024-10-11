const handler = async (m, { command, text }) => {
  const responses = [
    `si`,
    `no`,
    `impossibile`,
    `secondo me no`,
    `e io che cavolo ne so`,
    `secondo me si`,
    `SI`,
    `è una stronzata`,
    `saresti un coglione se non lo facessi`,
    `devi farlo assolutamente`,
    `anche secondo me`,
    `provaci`,
    `per me è la cipolla`,
    `non ho capito bene, ripeti`,
    `AHAHAHAH`,
    `può darsi`,
    `ma chi lo sa`,
    `certamente no`,
    `senza dubbio`,
    `mai e poi mai`,
    `non ne sono sicuro`,
    `chiedilo a tua nonna`,
    `io dico di sì`,
    `assolutamente no`,
    `in teoria sì`,
    `dubito fortemente`,
    `chi lo sa`,
    `potrebbe essere`,
    `non ne vale la pena`,
    `nessun commento`,
    `non lo farei se fossi in te`,
    `ti conviene pensarci bene`,
    `non ne sono convinto`,
    `meglio di no`,
    `hai pensato di chiedere a qualcun altro?`,
    `non c'è speranza`,
    `sicuramente`,
    `probabilmente no`,
    `senza ombra di dubbio`,
    `impossibile da dire`,
    `non scommetterei su questo`,
    `non ho la minima idea`,
    `non sono sicuro di poterti aiutare`,
    `meglio cercare altrove`,
    `puoi provarci, ma non garantisco niente`,
    `è complicato`,
    `non ci contare troppo`,
    `dubito fortemente`,
    `forse`,
    `è difficile dirlo`,
    `ne dubito`,
    `non penso proprio`,
    `mai nella vita`,
    `non ci scommetterei`,
    `improbabile`,
    `non vedo come`,
    `non ne sono convinto`,
    `non ne ho idea`,
    `non ne sono sicuro`,
    `ho i miei dubbi`,
    `non lo farei se fossi in te`,
    `è una possibilità`,
    `neanche per sogno`,
    `non vale la pena provarci`,
    `non lo so con certezza`,
    `potrebbe andare in entrambi i modi`,
    `sembra difficile`,
    `non posso rispondere a questa`,
    `non ti darei molte speranze`,
    `non ci metterei la mano sul fuoco`,
    `non credo proprio`,
    `è una scommessa azzardata`,
    `è rischioso`,
    `non ci scommetterei la casa`,
    `ho i miei dubbi`,
    `non posso dirtelo con certezza`,
    `non è garantito`,
    `dipende da molti fattori`,
    `potrebbe essere un'opzione`,
    `non ne sono sicuro`,
    `non lo vedo probabile`,
    `non metterei le mani sul fuoco`,
    `è incerto`,
    `non lo sappiamo fino a quando non succede`,
    `non lo escluderei a priori`,
    `non è fuori discussione`,
    `non saprei dirtelo`,
      `non ci scommetterei la mia collezione di francobolli`,
    `è come cercare un ago in un pagliaio`,
    `sì, quando il ghiaccio diventa caldo`,
    `probabilmente quando il Papa diventa ateo`,
    `è come trovare un dinosauro nel tuo giardino`,
    `potrebbe accadere quando le stelle cadenti diventano monete d'oro`,
    `certo, quando le tartarughe vincono una gara di velocità`,
    `chiaro, quando i pinguini impareranno a volare`,
    `sì, quando il deserto diventa un luogo umido`,
    `improbabile, a meno che i pesci non diventino vegani`,
    `certamente, quando le mele cresceranno sugli alberi di cioccolato`,
    `sì, quando le nuvole si trasformano in zucchero filato`,
    `può darsi, quando i leoni diventano erbivori`,
    `probabilmente quando le formiche organizzano una convention`,
    `chiaro, quando la luna diventa un formaggio gigante`,
    `certo, quando i gatti diventano animali da stiro`,
    `potrebbe accadere quando le giraffe diventano subacquee`,
    `assolutamente, quando il gelato non scioglie più`,
    `sì, quando i dinosauri tornano a governare la Terra`,
    `chiaro, quando i lepri diventano animali da circo`,
    `certamente, quando gli scoiattoli diventano astronauti`,
    `sì, quando i coccodrilli diventano vegani`,
    `può darsi, quando i pappagalli iniziano a parlare in codice`,
    `improbabile, a meno che le zebre non diventino unicicli ambulanti`,
    `chiaro, quando gli elefanti diventano chef stellati`,
    `sì, quando i pesci imparano a scrivere poesie`,
    `probabilmente quando i cammelli diventano corridori olimpici`,
    `certo, quando i gufi diventano comici stand-up`,
    `può darsi, quando i ricci diventano stylist di capelli`,
    `sì, quando le libellule diventano avvocati`,
    `chiaro, quando le lucciole organizzano uno spettacolo di luci`,
    `certamente, quando i cani diventano registi di film d'azione`,
    `sì, quando le api diventano maestri di arti marziali`,
    `potrebbe accadere quando i pinguini aprono una scuola di nuoto`,
    `improbabile, a meno che i panda non inizino a praticare il fitness`,
    `certo, quando le tartarughe diventano maestri di breakdance`,
    `chiaro, quando le formiche aprono un ristorante gourmet`,
    `sì, quando i girasoli diventano astrologi`,
    `può darsi, quando i canguri diventano ballerini di tango`,
    `improbabile, a meno che i castori non aprano un'impresa edile`,
    `certamente, quando i gufi diventano giudici di gara di canto`,
    `sì, quando i lemuri diventano esperti di sudoku`,
    `chiaro, quando i camaleonti diventano esperti di arte contemporanea`,
    `certo, quando i maiali diventano astronauti`,
    `sì, quando i ricci diventano giardinieri professionisti`,
    `può darsi, quando le zebre diventano arbitri di calcio`,
    `improbabile, a meno che le lumache non diventino velocisti olimpici`
  ];

  const randomResponse = responses[Math.floor(Math.random() * responses.length)];

  m.reply(randomResponse.trim(), null, m.mentionedJid ? { mentions: m.mentionedJid } : {});
};

handler.customPrefix = /%;
handler.command = new RegExp;

export default handler;
