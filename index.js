const nlp = require('compromise');

// Sample text
const text = `
The Morning Brew

Philipp had always been particular about his morning coffee. It wasn't just a beverage; it was a ritual that breathed life into his day before the world fully awakened. Each morning, long before the first rays of sunlight crept through his kitchen window, he would begin his carefully choreographed dance with caffeine.

The process started the night before, when he would meticulously measure out single-origin beans from a small farm in Guatemala. These weren't just any beans—they were carefully selected, each batch a story of soil and sunshine that Philipp had come to know intimately. He'd store them in an airtight container, protecting their essence like a precious secret.

When his alarm softly chimed at 5:30 AM, Philipp would pad barefoot to the kitchen. The wooden floor would creak slightly beneath his steps, a gentle morning song. First, the grinder—a vintage hand-crank model he'd inherited from his grandfather. He'd turn the handle slowly, deliberately, releasing a rhythmic sound that was almost meditative. The fresh grounds would emit an aroma that gradually filled the small kitchen, rich and promising.

His pour-over setup was a work of art: a copper kettle with a long, graceful spout, a ceramic dripper, and a hand-blown glass carafe. Philipp believed that good coffee was about patience and precision. He'd heat the water to exactly 202 degrees, watching the temperature gauge with the concentration of a scientist. The first pour would bloom the grounds, releasing trapped gases and preparing the coffee for its full extraction.

As the coffee dripped—each drop a small miracle of flavor and chemistry—Philipp would stand by the window. Sometimes he'd watch the neighborhood slowly stir to life: a jogger passing by, a newspaper being tossed onto a distant porch, the first chirps of early birds.

When the last drop fell into the carafe, he'd pour the coffee into a mug—not just any mug, but a handmade ceramic one from a local artist, its glaze reminiscent of storm clouds. The first sip was always a moment of pure connection: between him and the farmers who grew the beans, between the quiet morning and the day ahead, between tradition and innovation.

It was more than coffee. It was Philipp's moment of calm before the world demanded its share of his day.
`;

// Parse the text and extract nouns
const doc = nlp(text);

const nouns =  [...new Set(doc.match('#Noun').out('array'))];
const keywords = doc.nouns().unique().out('array');

console.log('Nouns:', nouns);
console.log('Keywords:', keywords);
