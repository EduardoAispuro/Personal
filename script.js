// Base de datos de tarjetas para adultos (versión EXTENDIDA)
const cards = {
    truth: [
        "¿Cuál es tu fantasía sexual más secreta?",
        "¿Con cuántas personas has dormido en total?",
        "¿Alguna vez has engañado a tu pareja?",
        "¿Cuál es el lugar más extraño donde has tenido relaciones?",
        "¿Qué es lo más atrevido que has hecho en público?",
        "¿Alguna vez has tenido un threesome?",
        "¿Cuál es tu parte favorita del cuerpo en una persona?",
        "¿Alguna vez te has grabado teniendo relaciones?",
        "¿Qué es lo más raro que te excita?",
        "¿Con quién de esta sala te besarías si no hubiera consecuencias?",
        "¿Cuál es tu posición sexual favorita?",
        "¿Alguna vez has tenido relaciones con alguien del mismo sexo?",
        "¿Qué edad tenías cuando perdiste la virginidad?",
        "¿Alguna vez has usado juguetes sexuales?",
        "¿Cuál es tu mayor fetich?",
        "¿Alguna vez has tenido relaciones en un lugar público?",
        "¿Qué es lo más salvaje que has hecho bajo influencia del alcohol?",
        "¿Alguna vez has tenido relaciones con un extraño?",
        "¿Cuál es tu mayor guilty pleasure sexual?",
        "¿Alguna vez has fantaseado con alguien de esta sala?",
        "¿Qué es lo más kinky que has hecho?",
        "¿Alguna vez has tenido relaciones con alguien mucho mayor/menor que tú?",
        "¿Cuál es tu mayor fantasía que no has cumplido?",
        "¿Alguna vez has hecho un trío?",
        "¿Qué es lo más extraño que te pone caliente?",
        "¿Alguna vez has tenido relaciones con más de una persona en un día?",
        "¿Cuál es tu mayor secreto sexual?",
        "¿Alguna vez has tenido relaciones con el ex de un amigo?",
        "¿Qué es lo más atrevido que harías si nadie te viera?",
        "¿Alguna vez has tenido relaciones mientras grababan?",
        // Nuevas verdades
        "¿Cuál es la mentira más grande que has dicho para acostarte con alguien?",
        "¿Alguna vez has tenido relaciones con alguien sin saber su nombre?",
        "¿Qué parte de tu cuerpo te gusta que te besen más?",
        "¿Alguna vez has tenido un sueño húmedo con alguien de esta sala?",
        "¿Cuál es el número máximo de veces que has tenido relaciones en un día?",
        "¿Alguna vez has usado disfraces durante el sexo?",
        "¿Qué es lo más sucio que te han dicho al oído?",
        "¿Alguna vez te has masturbado en el trabajo?",
        "¿Cuál es tu pose favorita para recibir sexo oral?",
        "¿Alguna vez has ido a un club de intercambio de parejas?",
        "¿Qué fue lo primero que pensaste cuando viste a tu última pareja desnuda?",
        "¿Alguna vez has tenido relaciones con alguien que estaba en una relación abierta?",
        "¿Cuál es tu mayor arrepentimiento sexual?",
        "¿Alguna vez has tenido sexo en un lugar público y te han descubierto?",
        "¿Cuál es tu fetiche más vergonzoso?",
        "¿Alguna vez has tenido sexo virtual con alguien?",
        "¿Qué es lo más extremo que has hecho para impresionar a alguien sexualmente?",
        "¿Alguna vez has utilizado juguetes sexuales en público?",
        "¿Cuál es la edad máxima que aceptarías en una pareja sexual?",
        "¿Alguna vez has tenido sexo con alguien que estaba dormido?",
        "¿Qué es lo que menos te gusta del sexo?",
        "¿Alguna vez has llorado después de tener relaciones?",
        "¿Cuál es el mejor cumplido sexual que te han hecho?",
        "¿Alguna vez has fingido una preferencia sexual para gustarle a alguien?",
        "¿Cuál es el tamaño o forma que más te gusta en un pene/vulva?",
        "¿Alguna vez has tenido relaciones con tu jefe o subordinado?",
        "¿Qué es lo más raro que has olfateado durante el sexo?",
        "¿Alguna vez has tenido relaciones con un amigo de tus padres?",
        "¿Cuál es tu fantasía de sumisión/dominación?",
        "¿Alguna vez has tenido relaciones con alguien que tenía una enfermedad de transmisión sexual?",
    ],
    uncomfortable: [
        "¿Cuál es la cosa más vergonzosa que te ha pasado en la cama?",
        "¿Alguna vez has fingido un orgasmo?",
        "¿Cuál es tu mayor inseguridad sobre tu desempeño sexual?",
        "¿Qué es lo más extraño que has buscado en internet?",
        "¿Alguna vez has tenido pensamientos sobre alguien que no deberías?",
        "¿Cuál es tu fantasía más oscura que nunca has contado?",
        "¿Qué es lo más depravado que has hecho?",
        "¿Alguna vez has tenido relaciones con alguien por lástima?",
        "¿Cuál es tu mayor fetich que te da vergüenza admitir?",
        "¿Alguna vez has usado objetos no convencionales como juguetes?",
        "¿Qué es lo más raro que te ha pedido una pareja en la cama?",
        "¿Alguna vez has tenido relaciones pensando en otra persona?",
        "¿Cuál es tu mayor guilty pleasure sexual?",
        "¿Alguna vez has hecho algo ilegal por placer?",
        "¿Qué es lo más extremo que estarías dispuesto a hacer en la cama?",
        "¿Alguna vez has tenido relaciones con alguien mucho mayor/menor?",
        "¿Cuál es tu mayor fantasía que te da vergüenza?",
        "¿Alguna vez has hecho algo que consideras depravado?",
        "¿Qué es lo más raro que te excita?",
        "¿Alguna vez has tenido relaciones con un familiar lejano?",
        "¿Cuál es tu mayor secreto sexual que nadie sabe?",
        "¿Alguna vez has hecho algo por dinero que te da vergüenza?",
        "¿Qué es lo más extremo que has hecho por placer?",
        "¿Alguna vez has tenido relaciones con alguien casado?",
        "¿Cuál es tu mayor fantasía prohibida?",
        "¿Alguna vez has hecho algo que consideras moralmente incorrecto?",
        "¿Qué es lo más raro que te ha pasado en una cita?",
        "¿Alguna vez has tenido relaciones con un amigo de tu pareja?",
        "¿Cuál es tu mayor confesión sexual?",
        "¿Alguna vez has hecho algo que te arrepientes sexualmente?",
        // Nuevas incómodas
        "¿Alguna vez te has orinado encima durante el sexo?",
        "¿Qué es lo más sucio que has aceptado hacer por dinero?",
        "¿Alguna vez has tenido relaciones con alguien que no te atraía físicamente solo por su estatus?",
        "¿Cuál es la peor reacción que has tenido al ver a alguien desnudo?",
        "¿Alguna vez has tenido sexo con alguien mientras otra persona estaba en la misma habitación sin saberlo?",
        "¿Qué es lo más degradante que te han pedido hacer?",
        "¿Alguna vez has tenido sexo en un lugar que sabías que estaba siendo grabado?",
        "¿Cuál es la mentira más elaborada que has dicho para ocultar una infidelidad?",
        "¿Alguna vez has tenido sexo con alguien que luego resultó ser menor de edad?",
        "¿Qué es lo más vergonzoso que te han encontrado en tu teléfono?",
        "¿Alguna vez has tenido sexo con un compañero de trabajo y luego te arrepentiste?",
        "¿Cuál es la parte de tu cuerpo que más te acompleja?",
        "¿Alguna vez te han rechazado después de mostrar tus partes íntimas?",
        "¿Qué es lo más extremo que has hecho para complacer a alguien y te arrepientes?",
        "¿Alguna vez has tenido sexo con alguien que estaba drogado y no podía consentir?",
        "¿Cuál es tu mayor miedo en la cama?",
        "¿Alguna vez has enviado una foto íntima a la persona equivocada?",
        "¿Qué es lo más raro que te han preguntado sobre tu cuerpo?",
        "¿Alguna vez has tenido relaciones con alguien que olía mal?",
        "¿Cuál es la peor excusa que has usado para no tener sexo?",
        "¿Alguna vez te has reído durante el sexo de forma incontrolable?",
        "¿Qué es lo más embarazoso que te ha pasado con los padres de tu pareja?",
        "¿Alguna vez has tenido sexo con alguien y después te has dado cuenta de que era tu familiar?",
        "¿Cuál es la mentira más grande que has dicho sobre tu vida sexual?",
        "¿Alguna vez te has lastimado gravemente durante el sexo?",
        "¿Qué es lo más extraño que has tenido que explicar en urgencias?",
        "¿Alguna vez has tenido sexo en un lugar donde claramente no debían?",
        "¿Cuál es tu mayor secreto relacionado con el sexo que llevas a la tumba?",
        "¿Alguna vez has sido chantajeado por contenido íntimo?",
        "¿Qué es lo más raro que te ha salido del cuerpo durante el sexo?",
    ],
    mostLikely: [
        "¿Quién es más probable que tenga un affaire este año?",
        "¿Quién es más probable que se acueste con un extraño esta noche?",
        "¿Quién es más probable que tenga un trío pronto?",
        "¿Quién es más probable que se grabe teniendo relaciones?",
        "¿Quién es más probable que use juguetes sexuales regularmente?",
        "¿Quién es más probable que tenga relaciones en lugar público?",
        "¿Quién es más probable que finja un orgasmo?",
        "¿Quién es más probable que tenga un fetich extraño?",
        "¿Quién es más probable que se acueste con alguien mayor?",
        "¿Quién es más probable que tenga relaciones con el ex de alguien?",
        "¿Quién es más probable que use aplicaciones para citas?",
        "¿Quién es más probable que tenga relaciones con alguien casado?",
        "¿Quién es más probable que haga un striptease?",
        "¿Quién es más probable que tenga relaciones con más de 5 personas este año?",
        "¿Quién es más probable que use ropa interior sexy?",
        "¿Quién es más probable que tenga relaciones en un coche?",
        "¿Quién es más probable que haga un sextape?",
        "¿Quién es más probable que tenga relaciones con alguien del mismo sexo?",
        "¿Quién es más probable que use ligas?",
        "¿Quién es más probable que tenga relaciones en la oficina?",
        "¿Quién es más probable que finja estar enamorado para tener relaciones?",
        "¿Quién es más probable que tenga relaciones con alguien mucho menor?",
        "¿Quién es más probable que use juguetes en público?",
        "¿Quién es más probable que tenga relaciones con un extraño en un viaje?",
        "¿Quién es más probable que haga algo muy atrevido en una fiesta?",
        "¿Quién es más probable que tenga relaciones con alguien de internet?",
        "¿Quién es más probable que use disfraces?",
        "¿Quién es más probable que tenga relaciones en un baño público?",
        "¿Quién es más probable que haga algo muy kinky?",
        "¿Quién es más probable que tenga relaciones con alguien rico por dinero?",
        // Nuevos "quién es más probable"
        "¿Quién es más probable que tenga un fetiche de pies?",
        "¿Quién es más probable que tenga un OnlyFans secreto?",
        "¿Quién es más probable que tenga relaciones con su jefe?",
        "¿Quién es más probable que organice una orgía?",
        "¿Quién es más probable que use esposas en la cama?",
        "¿Quién es más probable que se haya masturbado en el trabajo?",
        "¿Quién es más probable que tenga un amante secreto?",
        "¿Quién es más probable que tenga relaciones con alguien famoso?",
        "¿Quién es más probable que tenga un diario sexual?",
        "¿Quién es más probable que tenga un kink de BDSM?",
        "¿Quién es más probable que le guste ser dominado?",
        "¿Quién es más probable que le guste dominar?",
        "¿Quién es más probable que tenga un vibrador en su mesita de noche?",
        "¿Quién es más probable que tenga relaciones con una persona trans?",
        "¿Quién es más probable que haya tenido una aventura con un profesor?",
        "¿Quién es más probable que tenga relaciones en una piscina?",
        "¿Quién es más probable que use lencería cara?",
        "¿Quién es más probable que tenga relaciones con alguien que acaba de conocer?",
        "¿Quién es más probable que tenga una lista de conquistas?",
        "¿Quién es más probable que tenga un crush secreto en el grupo?",
        "¿Quién es más probable que haya hecho un trío M-H-M?",
        "¿Quién es más probable que haya hecho un trío H-M-H?",
        "¿Quién es más probable que tenga relaciones con alguien de otra nacionalidad?",
        "¿Quién es más probable que se case por interés económico?",
        "¿Quién es más probable que tenga un embarazo no deseado?",
        "¿Quién es más probable que se haga una ETS sin saberlo?",
        "¿Quién es más probable que haya tenido sexo en un avión?",
        "¿Quién es más probable que tenga relaciones con una persona de más de 60 años?",
        "¿Quién es más probable que tenga relaciones con una persona menor de 20 años?",
        "¿Quién es más probable que tenga relaciones con un político?",
    ],
    neverHaveIEver: [
        "Yo nunca nunca he hecho el amor en un coche",
        "Yo nunca nunca he hecho el amor en la playa",
        "Yo nunca nunca he hecho un trío",
        "Yo nunca nunca he usado juguetes sexuales",
        "Yo nunca nunca me he grabado teniendo relaciones",
        "Yo nunca nunca he hecho el amor con más de una persona el mismo día",
        "Yo nunca nunca he hecho el amor en un lugar público",
        "Yo nunca nunca he hecho el amor bajo influencia de drogas",
        "Yo nunca nunca he hecho el amor con un extraño",
        "Yo nunca nunca he hecho el amor con alguien mucho mayor",
        "Yo nunca nunca he hecho el amor con alguien mucho menor",
        "Yo nunca nunca he hecho el amor con el ex de un amigo",
        "Yo nunca nunca he hecho el amor en un avión",
        "Yo nunca nunca he hecho el amor en un baño público",
        "Yo nunca nunca he hecho el amor en la oficina",
        "Yo nunca nunca he hecho el amor con alguien de internet",
        "Yo nunca nunca he hecho el amor en un concierto",
        "Yo nunca nunca he hecho el amor en una fiesta",
        "Yo nunca nunca he hecho el amor en un hotel de paso",
        "Yo nunca nunca he hecho el amor en la naturaleza",
        "Yo nunca nunca he hecho el amor con alguien de otra raza",
        "Yo nunca nunca he hecho el amor con alguien de otro país",
        "Yo nunca nunca he hecho el amor con alguien religioso",
        "Yo nunca nunca he hecho el amor con alguien político",
        "Yo nunca nunca he hecho el amor con alguien famoso",
        "Yo nunca nunca he hecho el amor con alguien rico",
        "Yo nunca nunca he hecho el amor con alguien pobre",
        "Yo nunca nunca he hecho el amor con alguien casado",
        "Yo nunca nunca he hecho el amor con alguien divorciado",
        "Yo nunca nunca he hecho el amor con alguien viudo",
        "Yo nunca nunca he hecho el amor con alguien transgénero",
        "Yo nunca nunca he hecho el amor con alguien no binario",
        "Yo nunca nunca he hecho el amor con alguien poliamoroso",
        "Yo nunca nunca he hecho el amor con alguien asexual",
        "Yo nunca nunca he hecho el amor con alguien bisexual",
        "Yo nunca nunca he hecho el amor con alguien pansexual",
        "Yo nunca nunca he hecho el amor con alguien demisexual",
        // Nuevos "yo nunca nunca"
        "Yo nunca nunca he hecho un trío con dos hombres",
        "Yo nunca nunca he hecho un trío con dos mujeres",
        "Yo nunca nunca he tenido sexo en un ascensor",
        "Yo nunca nunca he tenido sexo en un camerino",
        "Yo nunca nunca he tenido sexo en un coche en movimiento",
        "Yo nunca nunca he tenido sexo en una iglesia o lugar sagrado",
        "Yo nunca nunca he tenido sexo en un cine",
        "Yo nunca nunca he tenido sexo en un parque de atracciones",
        "Yo nunca nunca he usado lubricante",
        "Yo nunca nunca he usado un consolador",
        "Yo nunca nunca he usado un anillo vibrador",
        "Yo nunca nunca he usado esposas",
        "Yo nunca nunca he usado un vendaje en los ojos",
        "Yo nunca nunca he tenido sexo con un masajista",
        "Yo nunca nunca he tenido sexo con un profesor",
        "Yo nunca nunca he tenido sexo con un alumno",
        "Yo nunca nunca he tenido sexo con un jefe",
        "Yo nunca nunca he tenido sexo con un empleado",
        "Yo nunca nunca he tenido sexo con un policía",
        "Yo nunca nunca he tenido sexo con un bombero",
        "Yo nunca nunca he tenido sexo con un militar",
        "Yo nunca nunca he tenido sexo con un médico",
        "Yo nunca nunca he tenido sexo con un paciente",
        "Yo nunca nunca he tenido sexo con un abogado",
        "Yo nunca nunca he tenido sexo con un artista",
        "Yo nunca nunca he tenido sexo con un deportista",
        "Yo nunca nunca he tenido sexo con un influencer",
        "Yo nunca nunca he tenido sexo con un youtuber",
        "Yo nunca nunca he tenido sexo con un actor porno",
        "Yo nunca nunca he tenido sexo con un stripper",
        "Yo nunca nunca he tenido sexo con un proxeneta",
        "Yo nunca nunca he tenido sexo con un cliente",
        "Yo nunca nunca he tenido sexo con un trabajador sexual",
        "Yo nunca nunca he pagado por sexo",
        "Yo nunca nunca me han pagado por sexo",
        "Yo nunca nunca he usado un juguete sexual en público",
        "Yo nunca nunca he tenido sexo en una videollamada",
        "Yo nunca nunca he tenido sexo con una persona que conocí en Tinder",
        "Yo nunca nunca he tenido sexo con una persona que conocí en Grindr",
        "Yo nunca nunca he tenido sexo con una persona que conocí en un bar",
    ],
    hypothetical: [
        "Si pudieras tener relaciones con cualquier celebridad, ¿quién sería?",
        "Si tuvieras que tener relaciones con alguien de esta sala, ¿quién elegirías?",
        "Si pudieras tener un superpoder sexual, ¿cuál sería?",
        "Si tuvieras que elegir entre nunca más tener relaciones o solo con una persona para siempre, ¿qué elegirías?",
        "Si pudieras presenciar el encuentro sexual de dos personas, ¿quiénes serían?",
        "Si tuvieras que tener relaciones en un lugar público, ¿dónde sería?",
        "Si pudieras tener un trío con dos personas de esta sala, ¿quiénes serían?",
        "Si tuvieras que describir tu vida sexual como una película, ¿cuál sería?",
        "Si pudieras tener relaciones con cualquier personaje ficticio, ¿quién sería?",
        "Si tuvieras que elegir entre sexo oral o penetración para el resto de tu vida, ¿cuál elegirías?",
        "Si pudieras tener relaciones en cualquier época histórica, ¿cuál elegirías?",
        "Si tuvieras que tener relaciones con alguien del mismo sexo por una noche, ¿quién sería?",
        "Si pudieras tener un encuentro sexual perfecto, ¿cómo sería?",
        "Si tuvieras que tener relaciones con alguien 20 años mayor/menor, ¿quién sería?",
        "Si pudieras tener relaciones en cualquier lugar del mundo, ¿dónde sería?",
        "Si tuvieras que tener relaciones con alguien famoso por una noche, ¿quién sería?",
        "Si pudieras tener cualquier juguete sexual sin costo, ¿cuál sería?",
        "Si tuvieras que tener relaciones con alguien de esta sala delante de todos, ¿quién sería?",
        "Si pudieras tener relaciones con tu ex una última vez, ¿lo harías?",
        "Si tuvieras que tener relaciones con alguien por un millón de dólares, ¿quién sería?",
        "Si pudieras tener relaciones con cualquier animal mitológico, ¿cuál sería?",
        "Si tuvieras que tener relaciones en un lugar muy extraño, ¿dónde sería?",
        "Si pudieras tener relaciones con cualquier personaje de anime, ¿quién sería?",
        "Si tuvieras que tener relaciones con alguien de tu familia lejana, ¿quién sería?",
        "Si pudieras tener relaciones con cualquier villano de película, ¿quién sería?",
        "Si tuvieras que tener relaciones con alguien de esta sala sin que nadie se entere, ¿quién sería?",
        "Si pudieras tener relaciones con cualquier superhéroe, ¿quién sería?",
        "Si tuvieras que tener relaciones con alguien muy feo por dinero, ¿lo harías?",
        "Si pudieras tener relaciones en cualquier planeta, ¿dónde sería?",
        "Si tuvieras que tener relaciones con alguien muy famoso, ¿quién sería?",
        "Si pudieras tener relaciones con cualquier personaje de videojuego, ¿quién sería?",
        "Si tuvieras que tener relaciones con alguien muy viejo/a por experiencia, ¿lo harías?",
        // Nuevas hipotéticas
        "Si pudieras cambiar de cuerpo por un día para tener sexo, ¿con quién lo harías?",
        "Si pudieras hacer que una persona de esta sala se volviera loca de deseo por ti, ¿quién sería?",
        "Si te dieran a elegir una única posición sexual para el resto de tu vida, ¿cuál sería?",
        "Si pudieras tener un orgasmo cada vez que chasquearas los dedos, ¿cómo cambiaría tu vida?",
        "Si pudieras ver las estadísticas sexuales de cualquier persona (número de parejas, ETS, etc.), ¿de quién te gustaría saber?",
        "Si tuvieras que elegir entre sexo increíble pero con una persona aburrida, o sexo mediocre con una persona increíble, ¿qué prefieres?",
        "Si pudieras tener relaciones con un gemelo/a de tu pareja, ¿lo harías?",
        "Si te dieran un millón de dólares por tener sexo con la persona que menos te atrae del mundo, ¿lo harías?",
        "Si pudieras ser un sex toy humano durante una semana, ¿de quién serías?",
        "Si tuvieras que pasar un año sin sexo pero con la mejor compañía, o con sexo diario pero solo, ¿qué eliges?",
        "Si pudieras tener un fetiche instantáneo, ¿cuál te gustaría que fuera?",
        "Si tuvieras que hacer un video sexual que se volvería viral, ¿con quién lo harías?",
        "Si pudieras elegir una persona para que te enseñe todo sobre sexo, ¿quién sería?",
        "Si tuvieras que tener sexo con un alienígena para salvar la Tierra, ¿lo harías?",
        "Si pudieras borrar un recuerdo sexual de tu mente, ¿cuál sería?",
        "Si tuvieras que revivir tu peor experiencia sexual una vez más, ¿lo harías por 10.000 dólares?",
        "Si pudieras tener sexo con una inteligencia artificial perfecta, ¿lo harías?",
        "Si tuvieras que vivir en una sociedad donde el sexo es solo para procrear, ¿cómo te sentirías?",
        "Si pudieras tener un orgasmo de 1 hora de duración, ¿qué harías con ese tiempo?",
        "Si tuvieras que elegir una palabra prohibida en la cama para siempre, ¿cuál sería?",
        "Si pudieras escuchar los pensamientos sexuales de alguien durante un día, ¿de quién?",
        "Si tuvieras que hacer un striptease en público, ¿qué canción elegirías?",
        "Si pudieras tener un encuentro con cualquier personaje histórico, ¿quién sería?",
        "Si tuvieras que pasar una noche en un castillo con un vampiro sexy, ¿aceptarías?",
        "Si pudieras hacerte una cirugía para tener los genitales perfectos, ¿lo harías?",
        "Si tuvieras que tener relaciones con una persona que no habla tu idioma, ¿cómo te comunicarías?",
        "Si pudieras hacer un pacto con el diablo para tener el mejor sexo de tu vida a cambio de tu alma, ¿lo harías?",
        "Si tuvieras que vivir en un mundo sin sexo pero con amor infinito, o con sexo sin amor, ¿qué prefieres?",
        "Si pudieras diseñar a tu pareja perfecta en un laboratorio, ¿cómo sería?",
        "Si tuvieras que tener sexo en un lugar donde hay riesgo de ser visto, ¿cuál elegirías?",
    ],
    forBoth: [
        "¿Cuál es su fantasía sexual compartida favorita?",
        "¿Qué es lo más atrevido que han hecho juntos?",
        "¿Cuál es su lugar favorito para tener relaciones?",
        "¿Qué es lo más raro que han hecho en la cama?",
        "¿Cuál es su posición sexual favorita como pareja?",
        "¿Qué es lo más kinky que han experimentado juntos?",
        "¿Alguna vez han hecho un trío juntos?",
        "¿Cuál es su mayor guilty pleasure como pareja?",
        "¿Qué es lo más salvaje que han hecho bajo influencia?",
        "¿Alguna vez se han grabado teniendo relaciones?",
        "¿Cuál es su fantasía que no han cumplido juntos?",
        "¿Qué es lo más extraño que les excita como pareja?",
        "¿Alguna vez han tenido relaciones en lugar público juntos?",
        "¿Cuál es su mayor secreto como pareja?",
        "¿Qué es lo más depravado que han hecho juntos?",
        "¿Alguna vez han usado juguetes sexuales juntos?",
        "¿Cuál es su mayor fetich compartido?",
        "¿Qué es lo más extremo que harían juntos?",
        "¿Alguna vez han tenido relaciones con otra persona presente?",
        "¿Cuál es su mayor confesión como pareja?",
        "¿Qué es lo más raro que les ha pasado en la cama?",
        "¿Alguna vez han fingido orgasmos mutuamente?",
        "¿Cuál es su mayor fantasía prohibida juntos?",
        "¿Qué es lo más kinky que les gustaría probar?",
        "¿Alguna vez han hecho algo muy atrevido en público?",
        "¿Cuál es su mayor experiencia sexual juntos?",
        "¿Qué es lo más extraño que les ha pedido alguien más?",
        "¿Alguna vez han tenido relaciones con otra pareja?",
        "¿Cuál es su mayor secreto que nadie sabe?",
        "¿Qué es lo más extremo que han hecho por placer?",
        "¿Alguna vez han hecho algo que se arrepienten?",
        "¿Cuál es su mayor aventura sexual juntos?",
        // Nuevas para ambos
        "¿Qué es lo primero que hicieron la primera vez que estuvieron juntos?",
        "¿Quién de los dos tiene más iniciativa en la cama?",
        "¿Cuál ha sido el mayor desacuerdo sexual que han tenido?",
        "¿Qué cambiarían el uno del otro en la cama si pudieran?",
        "¿Cuál es la cosa más vergonzosa que les ha pasado estando juntos?",
        "¿Han tenido alguna vez una fantasía con una persona real fuera de la relación?",
        "¿Qué es lo más raro que han usado como lubricante?",
        "¿Cuál es el mayor mito sexual que han desmentido juntos?",
        "¿Qué les gustaría probar que aún no se han atrevido?",
        "¿Alguna vez han tenido relaciones con un juguete de por medio?",
        "¿Quién suele durar más tiempo?",
        "¿Qué harían si descubrieran que el otro tiene una ETS?",
        "¿Cuál es el mejor cumplido que se han hecho después del sexo?",
        "¿Han tenido sexo en la casa de los padres de alguno?",
        "¿Qué canción les recuerda a su mejor experiencia sexual?",
        "¿Cuál ha sido el momento más incómodo justo después de terminar?",
        "¿Han tenido sexo con los ojos vendados?",
        "¿Alguna vez han usado hielo o velas?",
        "¿Cuál es la fantasía que solo han contado el uno al otro?",
        "¿Qué piensan del sexo anal como pareja?",
        "¿Han tenido sexo en una ducha o bañera?",
        "¿Alguna vez han tenido relaciones con alguien más en la misma habitación sin intercambiar?",
        "¿Qué es lo más romántico que han hecho en la cama?",
        "¿Cuál es la mayor diferencia de libido que han tenido?",
        "¿Cómo manejan cuando uno quiere y el otro no?",
        "¿Qué es lo que más les gusta que el otro haga sin que se lo pidan?",
        "¿Cuál es el mayor riesgo que han tomado juntos?",
        "¿Han tenido sexo después de una gran pelea?",
        "¿Qué es lo más inesperado que les ha excitado de la pareja?",
        "¿Alguna vez han tenido sexo por videollamada estando separados?",
    ],
    wouldRather: [
        "Preferirías tener sexo increíble una vez al mes o sexo mediocre todos los días?",
        "Preferirías que tu pareja te sea infiel emocionalmente o físicamente?",
        "Preferirías nunca más tener sexo oral o nunca más tener sexo anal?",
        "Preferirías que todos vean tu historial de navegación o escuchar tus pensamientos sexuales?",
        "Preferirías tener un orgasmo de una hora o poder tener 10 orgasmos rápidos?",
        "Preferirías dormir con el ex de tu mejor amigo o con tu ex delante de tu nueva pareja?",
        "Preferirías tener un pene/vulva perfectamente funcional pero pequeño o grande pero con problemas?",
        "Preferirías que te graben teniendo sexo o grabar a otros teniendo sexo?",
        "Preferirías tener sexo solo con una persona para siempre o con muchas pero sin amor?",
        "Preferirías que tu pareja tenga un fetiche muy raro o sea completamente aburrida en la cama?",
        "Preferirías perder el sentido del gusto durante el sexo o el del tacto?",
        "Preferirías tener relaciones con alguien muy mayor con experiencia o alguien joven que aprende contigo?",
        "Preferirías que tu pareja te hable sucio todo el tiempo o que sea completamente silenciosa?",
        "Preferirías tener sexo en lugares arriesgados siempre o solo en la cama pero con juguetes?",
        "Preferirías que todos sepan cuántas personas has tenido o qué es lo más raro que has hecho?",
        "Preferirías tener un trío con dos personas que no te atraen o con tu pareja y alguien que te atrae más?",
        "Preferirías nunca más poder usar juguetes sexuales o nunca más tener sexo con otra persona?",
        "Preferirías que tu pareja tenga un OnlyFans o que trabaje en un club de strippers?",
        "Preferirías tener relaciones con alguien que finge todos los orgasmos o con alguien que nunca tiene orgasmos?",
        "Preferirías que tus padres vean tus fotos íntimas o que tus amigos vean tus chats sexuales?",
        "Preferirías tener sexo con tu jefe una vez para ascender o quedarte estancado en tu trabajo?",
        "Preferirías que tu pareja sea increíble en la cama pero te infiel o fiel pero aburrida?",
        "Preferirías tener un pene/vulva que cambia de tamaño según tu estado de ánimo o uno siempre promedio?",
        "Preferirías poder leer las mentes sexuales de otros o que todos lean la tuya?",
        "Preferirías tener relaciones con alguien que huele mal pero es increíble o con alguien guapo pero malo?",
        "Preferirías que te descubran teniendo sexo en público o que te descubran masturbándote?",
        "Preferirías tener un orgasmo cada vez que mientes o nunca más poder mentir?",
        "Preferirías dormir con 10 personas feas o con una persona increíble pero casada?",
        "Preferirías que tu pareja sepa cuántos has tenido o que sepa con quién has estado?",
        "Preferirías tener relaciones con un famoso/a o con tu crush de toda la vida?",
        "Preferirías tener sexo con ropa interior puesta o completamente desnudo pero con luz apagada?",
        "Preferirías que tu pareja tenga más experiencia que tú o que seas tú el más experimentado?",
        "Preferirías tener relaciones con alguien que habla mucho durante el sexo o con alguien que solo grita?",
        "Preferirías tener un fetiche que te da vergüenza o tener un fetiche que todos consideran normal?",
        "Preferirías que te hagan un stripteas malo pero sincero o uno perfecto pero falso?",
        "Preferirías tener sexo con alguien que llora después o con alguien que se ríe?",
        "Preferirías que tu pareja use disfraces ridículos o que sea siempre igual pero perfecta?",
        "Preferirías tener relaciones con alguien que te graba sin permiso o con alguien que te fotografia pidiendo permiso?",
        "Preferirías tener un orgasmo múltiple o poder hacer que otros tengan orgasmos múltiples?",
        "Preferirías que tus amigos sepan tu tamaño o que sepan tu técnica?",
        "Preferirías tener sexo con alguien que te domina completamente o con alguien que te deja dominar?",
    ],
    confessions: [
        "Cuál es tu mayor secreto sexual que nadie sabe?",
        "Qué es lo más depravado que has hecho y te arrepientes?",
        "Alguna vez has tenido relaciones con alguien por lástima?",
        "Cuál es la mentira más grande que has dicho para acostarte con alguien?",
        "Qué es lo más raro que te ha pedido hacer en la cama?",
        "Alguna vez has fingido estar enamorado para tener sexo?",
        "Cuál es tu mayor fantasía que nunca has contado a nadie?",
        "Qué es lo más vergonzoso que te ha pasado durante el sexo?",
        "Alguna vez has tenido relaciones con alguien que no te atraía?",
        "Cuál es tu mayor inseguridad sobre tu desempeño sexual?",
        "Alguna vez has hecho algo ilegal por placer sexual?",
        "Qué es lo más extremo que has hecho por dinero?",
        "Alguna vez has tenido relaciones con alguien mucho mayor/menor por curiosidad?",
        "Cuál es tu mayor guilty pleasure sexual que te da vergüenza?",
        "Alguna vez has tenido sexo con un amigo de tu pareja?",
        "Qué es lo más sucio que has buscado en internet?",
        "Alguna vez has tenido pensamientos sexuales que te avergüenzan?",
        "Cuál es tu peor experiencia sexual que nunca has contado?",
        "Alguna vez has usado objetos no convencionales como juguetes?",
        "Qué es lo más raro que te excita sin control?",
        "Alguna vez te has masturbado en un lugar inapropiado?",
        "Cuál es tu mayor fetich que no has compartido?",
        "Alguna vez has tenido relaciones con alguien casado/a sabiéndolo?",
        "Qué es lo más depravado que has hecho bajo influencia?",
        "Alguna vez has grabado a alguien sin su consentimiento?",
        "Cuál es tu mayor confesión sobre tu primera vez?",
        "Alguna vez has tenido relaciones con un familiar lejano?",
        "Qué es lo más extremo que harías por placer?",
        "Alguna vez has chantajeado sexualmente a alguien?",
        "Cuál es tu peor mentira sobre tu vida sexual?",
        "Alguna vez has tenido relaciones con un cliente/paciente?",
        "Qué es lo más vergonzoso que te han encontrado?",
        "Alguna vez has tenido sexo con alguien que olía fatal?",
        "Cuál es tu mayor arrepentimiento sexual?",
        "Alguna vez has hecho algo que consideras moralmente incorrecto?",
        "Qué es lo más raro que te ha pasado en una cita?",
        "Alguna vez has fingido tener una preferencia sexual?",
        "Cuál es tu mayor confesión sobre tus fantasías?",
        "Alguna vez has tenido relaciones con alguien por venganza?",
        "Qué es lo más depravado que has disfrutado?",
        "Alguna vez has hecho trampa en una relación sexual?",
        "Cuál es tu peor secreto sobre tu libido?",
        "Alguna vez has tenido relaciones con un profesor/alumno?",
        "Qué es lo más extremo que has hecho por aprobación?",
        "Alguna vez has tenido sexo con alguien por curiosidad?",
        "Cuál es tu mayor confesión sobre tu virginidad?",
        "Alguna vez has tenido relaciones con alguien por dinero?",
        "Qué es lo más depravado que has fantaseado?",
        "Alguna vez has hecho algo que te da asco pero te gusta?",
        "Cuál es tu peor confesión sobre tus deseos?",
        "Alguna vez has tenido relaciones con un desconocido?",
        "Qué es lo más raro que te ha turnado on?",
    ],
    experiences: [
        "Cuál ha sido tu mejor experiencia sexual y por qué?",
        "Describe tu primera vez en detalle",
        "Cuál es el lugar más extraño donde has tenido relaciones?",
        "Qué es lo más salvaje que has hecho bajo influencia del alcohol?",
        "Alguna vez has tenido un threesome? Cómo fue?",
        "Cuál es tu mayor fantasía que ya has cumplido?",
        "Qué es lo más atrevido que has hecho en público?",
        "Alguna vez te han descubierto teniendo relaciones?",
        "Cuál es tu peor experiencia sexual?",
        "Alguna vez has tenido relaciones con alguien famoso?",
        "Qué es lo más raro que te ha pasado durante el sexo?",
        "Alguna vez has tenido sexo en un lugar prohibido?",
        "Cuál es la edad de la persona más mayor/menor con la que has estado?",
        "Alguna vez has tenido relaciones con un extraño el mismo día de conocerlo?",
        "Qué es lo más kinky que has experimentado?",
        "Alguna vez has usado juguetes sexuales? Cuál es tu favorito?",
        "Cuál es tu posición sexual favorita y por qué?",
        "Alguna vez has tenido relaciones en un transporte público?",
        "Qué es lo más extremo que has hecho por placer?",
        "Alguna vez has grabado tus relaciones sexuales?",
        "Cuál es tu experiencia con el sexo anal?",
        "Alguna vez has tenido relaciones con alguien del mismo sexo?",
        "Qué es lo más depravado que has disfrutado?",
        "Alguna vez has tenido sexo en un evento público?",
        "Cuál es tu experiencia con los fetiches?",
        "Alguna vez has tenido relaciones con una persona trans?",
        "Qué es lo más raro que te ha turnado on?",
        "Alguna vez has tenido sexo en un lugar de trabajo?",
        "Cuál es tu experiencia con el BDSM?",
        "Alguna vez has tenido relaciones con un amigo de tus padres?",
        "Qué es lo más salvaje que has hecho en fiesta?",
        "Alguna vez has tenido sexo virtual?",
        "Cuál es tu experiencia con los orgías?",
        "Alguna vez has tenido relaciones con un cliente/paciente?",
        "Qué es lo más extremo que has hecho por dinero?",
        "Alguna vez has tenido sexo en la naturaleza?",
        "Cuál es tu experiencia con los swingers?",
        "Alguna vez has tenido relaciones con un policía/bombero?",
        "Qué es lo más raro que te ha pedido hacer?",
        "Alguna vez has tenido sexo en un coche en movimiento?",
        "Cuál es tu experiencia con el sexo grupal?",
        "Alguna vez has tenido relaciones con un profesor?",
        "Qué es lo más depravado que has hecho en hotel?",
        "Alguna vez has tenido sexo en un avión?",
        "Cuál es tu experiencia con el sexo casual?",
        "Alguna vez has tenido relaciones con un influencer?",
        "Qué es lo más salvaje que has hecho en viaje?",
        "Alguna vez has tenido sexo en un baño público?",
        "Cuál es tu experiencia con el sexo sin amor?",
        "Alguna vez has tenido relaciones con un militar?",
        "Qué es lo más raro que te ha pasado en urgencias?",
        "Alguna vez has tenido sexo en un ascensor?",
        "Cuál es tu experiencia con el sexo tóxico?",
        "Alguna vez has tenido relaciones con un artista?",
        "Qué es lo más extremo que has hecho por fama?",
        "Alguna vez has tenido sexo en una iglesia?",
        "Cuál es tu experiencia con el sexo reparador?",
        "Alguna vez has tenido relaciones con un político?",
        "Qué es lo más depravado que has hecho en concierto?",
    ],
    intimateVocabulary: [
        "Cuál es tu palabra favorita durante el sexo?",
        "Qué apodo íntimo te gusta que te pongan?",
        "Cuál es tu palabra sucia favorita?",
        "Qué es lo que más te gusta que te digan en la cama?",
        "Cuál es tu grito/jadeo favorito durante el orgasmo?",
        "Qué palabra te excita instantáneamente?",
        "Cuál es tu término preferido para los genitales?",
        "Qué es lo que más te gusta gritar durante el sexo?",
        "Cuál es tu frase sucia preferida?",
        "Qué palabra te pone caliente solo escucharla?",
        "Cuál es tu apodo sexual favorito para tu pareja?",
        "Qué es lo que más te gusta susurrar al oído?",
        "Cuál es tu término preferido para el sexo oral?",
        "Qué palabra te hace perder el control?",
        "Cuál es tu frase favorita para iniciar el sexo?",
        "Qué es lo que más te gusta que te llamen en la cama?",
        "Cuál es tu palabra preferida para el orgasmo?",
        "Qué es lo que más te gusta decir durante el clímax?",
        "Cuál es tu término preferido para las relaciones?",
        "Qué palabra te hace venir inmediatamente?",
        "Cuál es tu frase favorita después del sexo?",
        "Qué es lo que más te gusta que te digan después?",
        "Cuál es tu palabra preferida para los pechos/penis?",
        "Qué término te excita más en otro idioma?",
        "Cuál es tu frase favorita para pedir más?",
        "Qué es lo que más te gusta que te pidan?",
        "Cuál es tu palabra preferida para el culo?",
        "Qué es lo que más te gusta que te griten?",
        "Cuál es tu término preferido para la lubricación?",
        "Qué palabra te hace sudar durante el sexo?",
        "Cuál es tu frase favorita para dominar?",
        "Qué es lo que más te gusta que te ordenen?",
        "Cuál es tu palabra preferida para la penetración?",
        "Qué término te excita más en español?",
        "Cuál es tu frase favorita para sumisión?",
        "Qué es lo que más te gusta que te digan en español?",
        "Cuál es tu palabra preferida para los juguetes?",
        "Qué palabra te hace perder la razón?",
        "Cuál es tu frase favorita para el sexo rápido?",
        "Qué es lo que más te gusta que te digan para ir rápido?",
        "Cuál es tu palabra preferida para el sexo lento?",
        "Qué término te excita más en inglés?",
        "Cuál es tu frase favorita para el sexo romántico?",
        "Qué es lo que más te gusta que te susurren?",
        "Cuál es tu palabra preferida para la masturbación?",
        "Qué palabra te hace tocar inmediatamente?",
        "Cuál es tu frase favorita para el sexo casual?",
        "Qué es lo que más te gusta que te digan casualmente?",
        "Cuál es tu palabra preferida para el fetiche?",
        "Qué término te excita más en francés?",
        "Cuál es tu frase favorita para el sexo extremo?",
        "Qué es lo que más te gusta que te digan extremo?",
        "Cuál es tu palabra preferida para la fantasía?",
        "Qué palabra te hace fantasear inmediatamente?",
        "Cuál es tu frase favorita para el sexo prohibido?",
        "Qué es lo que más te gusta que te digan prohibido?",
        "Cuál es tu palabra preferida para el deseo?",
        "Qué término te excita más en italiano?",
        "Cuál es tu frase favorita para el sexo apasionado?",
        "Qué es lo que más te gusta que te digan apasionado?",
    ],
    extreme: [
        "¿Alguna vez has tenido relaciones con un animal?",
        "¿Alguna vez has tenido relaciones con un cadáver?",
        "¿Alguna vez has tenido relaciones con un objeto inanimado?",
        "¿Alguna vez has tenido relaciones con un familiar directo?",
        "¿Alguna vez has tenido relaciones con un niño?",
        "¿Alguna vez has tenido relaciones con alguien sin su consentimiento?",
        "¿Alguna vez has pagado por relaciones sexuales?",
        "¿Alguna vez has tenido relaciones por dinero?",
        "¿Alguna vez has hecho algo muy ilegal por placer?",
        "¿Alguna vez has tenido relaciones con alguien muy enfermo?",
        "¿Alguna vez has tenido relaciones con alguien muy viejo/a?",
        "¿Alguna vez has tenido relaciones con alguien muy feo/a?",
        "¿Alguna vez has tenido relaciones con alguien muy gordo/a?",
        "¿Alguna vez has tenido relaciones con alguien muy flaco/a?",
        "¿Alguna vez has tenido relaciones con alguien muy sucio/a?",
        "¿Alguna vez has tenido relaciones con alguien muy pobre?",
        "¿Alguna vez has tenido relaciones con alguien muy rico?",
        "¿Alguna vez has tenido relaciones con alguien muy famoso?",
        "¿Alguna vez has tenido relaciones con alguien muy poderoso?",
        "¿Alguna vez has tenido relaciones con alguien muy peligroso?",
        "¿Alguna vez has tenido relaciones con alguien muy raro/a?",
        "¿Alguna vez has tenido relaciones con alguien muy loco/a?",
        "¿Alguna vez has tenido relaciones con alguien muy tonto/a?",
        "¿Alguna vez has tenido relaciones con alguien muy aburrido/a?",
        "¿Alguna vez has tenido relaciones con alguien muy egoísta?",
        "¿Alguna vez has tenido relaciones con alguien muy celoso/a?",
        "¿Alguna vez has tenido relaciones con alguien muy mentiroso/a?",
        "¿Alguna vez has tenido relaciones con alguien muy falso/a?",
        "¿Alguna vez has tenido relaciones con alguien muy manipulador/a?",
        "¿Alguna vez has tenido relaciones con alguien muy toxico/a?",
        "¿Alguna vez has tenido relaciones con alguien muy negativo/a?",
        "¿Alguna vez has tenido relaciones con alguien muy pesimista/a?",
        // Nuevas extremas (con advertencia implícita)
        "¿Alguna vez has tenido relaciones con alguien mientras otra persona era forzada a ver?",
        "¿Alguna vez has participado en una orgía con más de 10 personas?",
        "¿Alguna vez has ingerido fluidos corporales no convencionales?",
        "¿Alguna vez has tenido relaciones con alguien que estaba en silla de ruedas?",
        "¿Alguna vez has tenido relaciones con una persona con discapacidad intelectual?",
        "¿Alguna vez has tenido relaciones con un paciente psiquiátrico?",
        "¿Alguna vez has tenido relaciones con un preso?",
        "¿Alguna vez has tenido relaciones con un fugitivo?",
        "¿Alguna vez has tenido relaciones con alguien bajo los efectos de una droga muy fuerte?",
        "¿Alguna vez has practicado asfixia erótica hasta el punto de desmayarte?",
        "¿Alguna vez has tenido relaciones con un animal doméstico?",
        "¿Alguna vez has tenido relaciones con un animal salvaje?",
        "¿Alguna vez has tenido relaciones con un cadáver de un familiar?",
        "¿Alguna vez has tenido relaciones con una persona moribunda?",
        "¿Alguna vez has tenido relaciones con un menor de edad estando tú siendo mayor?",
        "¿Alguna vez has producido material pornográfico infantil?",
        "¿Alguna vez has sido víctima de abuso sexual? (Si quieres compartir)",
        "¿Alguna vez has abusado sexualmente de alguien?",
        "¿Alguna vez has tenido relaciones con alguien mientras estaba dormido sin su consentimiento?",
        "¿Alguna vez has tenido relaciones con alguien que estaba tan borracho que no podía hablar?",
        "¿Alguna vez has usado la fuerza para obtener sexo?",
        "¿Alguna vez has chantajeado a alguien para tener sexo?",
        "¿Alguna vez has tenido sexo con un menor de 14 años?",
        "¿Alguna vez has tenido sexo con un miembro de tu familia nuclear (padre, madre, hermano, hermana)?",
        "¿Alguna vez has tenido sexo con tu abuelo/a?",
        "¿Alguna vez has tenido sexo con tu hijo/a?",
        "¿Alguna vez has tenido sexo con un animal muerto?",
        "¿Alguna vez has tenido sexo con un objeto que causó daño físico grave?",
        "¿Alguna vez has participado en un acto sexual donde hubo sangre no menstrual?",
        "¿Alguna vez has tenido sexo con una persona que sabías que tenía VIH sin protección?",
    ]
};

// Estado del juego
let gameState = {
    players: [],
    currentPlayerIndex: 0,
    currentCard: null,
    isGameStarted: false,
    usedCards: []
};

// Colores para avatares
const avatarColors = [
    '#FF6B6B', '#4ECDC4', '#45B7D1', '#96CEB4', '#FFEAA7',
    '#DDA0DD', '#98D8C8', '#F7DC6F', '#BB8FCE', '#85C1E2',
    '#F8B739', '#52B788', '#E76F51', '#F4A261', '#2A9D8F'
];

// Inicialización
document.addEventListener('DOMContentLoaded', function() {
    // Agregar evento Enter al input de jugador
    document.getElementById('playerName').addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            addPlayer();
        }
    });
});

// Función para agregar jugador
function addPlayer() {
    const input = document.getElementById('playerName');
    const name = input.value.trim();
    
    if (!name) {
        showNotification('Por favor ingresa un nombre válido', 'error');
        return;
    }
    
    if (gameState.players.some(player => player.name.toLowerCase() === name.toLowerCase())) {
        showNotification('Ese jugador ya existe', 'error');
        return;
    }
    
    if (gameState.players.length >= 10) {
        showNotification('Máximo 10 jugadores permitidos', 'error');
        return;
    }
    
    const player = {
        id: Date.now(),
        name: name,
        color: avatarColors[gameState.players.length % avatarColors.length]
    };
    
    gameState.players.push(player);
    input.value = '';
    updatePlayersList();
    
    if (gameState.players.length >= 2) {
        document.getElementById('startGameBtn').disabled = false;
    }
    
    showNotification(`${name} se unió al juego!`, 'success');
}

// Función para eliminar jugador
function removePlayer(playerId) {
    if (gameState.isGameStarted) {
        showNotification('No puedes eliminar jugadores durante el juego', 'error');
        return;
    }
    
    gameState.players = gameState.players.filter(p => p.id !== playerId);
    updatePlayersList();
    
    if (gameState.players.length < 2) {
        document.getElementById('startGameBtn').disabled = true;
    }
}

// Función para actualizar lista de jugadores
function updatePlayersList() {
    const playersList = document.getElementById('playersList');
    
    if (gameState.players.length === 0) {
        playersList.innerHTML = '<p class="text-gray-400 text-center">No hay jugadores aún</p>';
        return;
    }
    
    playersList.innerHTML = gameState.players.map(player => `
        <div class="flex items-center justify-between bg-gray-800/50 rounded-lg p-3 hover:bg-gray-800/70 transition-colors border border-gray-700">
            <div class="flex items-center gap-3">
                <div class="player-avatar" style="background-color: ${player.color}">
                    ${player.name.charAt(0).toUpperCase()}
                </div>
                <span class="font-medium">${player.name}</span>
            </div>
            ${!gameState.isGameStarted ? `
                <button 
                    onclick="removePlayer(${player.id})"
                    class="text-red-400 hover:text-red-300 transition-colors"
                >
                    <i class="fas fa-times"></i>
                </button>
            ` : ''}
        </div>
    `).join('');
}

// Función para empezar el juego
function startGame() {
    if (gameState.players.length < 2) {
        showNotification('Necesitas al menos 2 jugadores', 'error');
        return;
    }
    
    gameState.isGameStarted = true;
    gameState.currentPlayerIndex = 0;
    gameState.usedCards = [];
    
    // Mezclar jugadores aleatoriamente
    gameState.players = shuffleArray([...gameState.players]);
    
    document.getElementById('welcomeScreen').classList.add('hidden');
    document.getElementById('gameScreen').classList.remove('hidden');
    
    updateCurrentPlayer();
    showNotification('¡El juego ha comenzado!', 'success');
}

// Función para actualizar jugador actual
function updateCurrentPlayer() {
    const currentPlayer = gameState.players[gameState.currentPlayerIndex];
    document.getElementById('currentPlayerName').textContent = currentPlayer.name;
    document.getElementById('currentPlayerAvatar').textContent = currentPlayer.name.charAt(0).toUpperCase();
    document.getElementById('currentPlayerAvatar').style.backgroundColor = currentPlayer.color;
}

// Función para voltear tarjeta
function flipCard() {
    const card = document.getElementById('gameCard');
    if (card.classList.contains('flipped')) return;
    
    // Obtener tarjeta aleatoria
    const randomCard = getRandomCard();
    gameState.currentCard = randomCard;
    
    // Si es para ambos, mostrar "PARA TODOS" en lugar del jugador
    if (randomCard.type === 'forBoth') {
        document.getElementById('currentPlayerDisplay').innerHTML = `
            <div class="inline-flex items-center gap-3 bg-gradient-to-r from-purple-600/50 to-pink-600/50 px-6 py-3 rounded-full border border-purple-500">
                <i class="fas fa-users text-2xl"></i>
                <span class="font-semibold text-lg">PARA TODOS</span>
            </div>
        `;
    } else {
        // Asegurarse de que el display del jugador actual se muestre correctamente
        const currentPlayer = gameState.players[gameState.currentPlayerIndex];
        document.getElementById('currentPlayerDisplay').innerHTML = `
            <div class="inline-flex items-center gap-3 bg-gray-800/50 px-6 py-3 rounded-full border border-purple-500">
                <div id="currentPlayerAvatar" class="player-avatar" style="background-color: ${currentPlayer.color}">
                    ${currentPlayer.name.charAt(0).toUpperCase()}
                </div>
                <span id="currentPlayerName" class="font-semibold text-lg">${currentPlayer.name}</span>
            </div>
        `;
    }
    
    // Mostrar contenido
    document.getElementById('cardCategory').textContent = randomCard.category;
    document.getElementById('cardContent').textContent = randomCard.content;
    
    // Voltear tarjeta
    card.classList.add('flipped');
}

// Función para obtener tarjeta aleatoria
function getRandomCard() {
    const categories = Object.keys(cards);
    
    // Aumentar probabilidad de "forBoth" - 30% de probabilidad
    let randomCategory;
    if (Math.random() < 0.3) {
        randomCategory = 'forBoth';
    } else {
        // Elegir de las otras categorías excluyendo "forBoth"
        const otherCategories = categories.filter(cat => cat !== 'forBoth');
        randomCategory = otherCategories[Math.floor(Math.random() * otherCategories.length)];
    }
    
    const categoryCards = cards[randomCategory];
    
    // Filtrar tarjetas no usadas
    const availableCards = categoryCards.filter((card, index) => 
        !gameState.usedCards.some(used => used.category === randomCategory && used.index === index)
    );
    
    // Si todas las tarjetas se han usado, reiniciar
    let cardToUse;
    if (availableCards.length === 0) {
        gameState.usedCards = gameState.usedCards.filter(used => used.category !== randomCategory);
        cardToUse = categoryCards[Math.floor(Math.random() * categoryCards.length)];
        const cardIndex = categoryCards.indexOf(cardToUse);
        gameState.usedCards.push({ category: randomCategory, index: cardIndex });
    } else {
        cardToUse = availableCards[Math.floor(Math.random() * availableCards.length)];
        const cardIndex = categoryCards.indexOf(cardToUse);
        gameState.usedCards.push({ category: randomCategory, index: cardIndex });
    }
    
    const categoryNames = {
        truth: 'VERDAD',
        uncomfortable: 'INCOMODO',
        mostLikely: 'QUIÉN ES MÁS PROBABLE',
        neverHaveIEver: 'YO NUNCA NUNCA',
        hypothetical: 'SITUACIÓN HIPOTÉTICA',
        forBoth: 'PARA AMBOS',
        wouldRather: 'PREFERIRÍAS',
        confessions: 'CONFESIONES',
        experiences: 'EXPERIENCIAS',
        intimateVocabulary: 'VOCABULARIO ÍNTIMO',
        extreme: 'EXTREMO'
    };
    
    return {
        content: cardToUse,
        category: categoryNames[randomCategory],
        type: randomCategory
    };
}

// Función para siguiente turno
function nextTurn() {
    // Si la tarjeta actual es "PARA AMBOS", no cambiar de turno
    if (gameState.currentCard && gameState.currentCard.type === 'forBoth') {
        resetCard();
        return;
    }
    
    gameState.currentPlayerIndex = (gameState.currentPlayerIndex + 1) % gameState.players.length;
    updateCurrentPlayer();
    resetCard();
}

// Función para resetear tarjeta
function resetCard() {
    const card = document.getElementById('gameCard');
    card.classList.remove('flipped');
    gameState.currentCard = null;
}

// Función para mostrar notificaciones
function showNotification(message, type) {
    const notification = document.createElement('div');
    notification.className = `fixed top-4 right-4 px-6 py-3 rounded-lg text-white font-medium z-50 fade-in ${
        type === 'error' ? 'bg-red-500' : 'bg-green-500'
    }`;
    notification.textContent = message;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.remove();
    }, 3000);
}

// Función para mezclar array
function shuffleArray(array) {
    const newArray = [...array];
    for (let i = newArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
}

// Función para reiniciar juego
function resetGame() {
    gameState = {
        players: [],
        currentPlayerIndex: 0,
        currentCard: null,
        isGameStarted: false,
        usedCards: []
    };
    
    document.getElementById('welcomeScreen').classList.remove('hidden');
    document.getElementById('gameScreen').classList.add('hidden');
    document.getElementById('startGameBtn').disabled = true;
    
    updatePlayersList();
    resetCard();
    
    showNotification('Juego reiniciado', 'success');
}
