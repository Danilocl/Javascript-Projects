const lengthLabel = document.getElementById("length")
const rangeInput = document.getElementById("customRange1")
const formCheck = document.getElementById("formCheck")
const isNumber = document.getElementById("isNumber")
const isSymbols = document.getElementById("isSymbols")
const isUppercase = document.getElementById("isUppercase")
const isLowercase = document.getElementById("isLowercase")
const password = document.getElementById("password")
const checkboxes = document.querySelectorAll('#formCheck .form-check-input');
const select = document.querySelector(".middleElements .form-select")
const randomOnly = document.querySelector('.random-only');

generateRandomPassword();


//Garante que pelo menos um imput esteja selecionado
checkboxes.forEach(checkbox => {
    checkbox.addEventListener('change', function (event) {
        const checkedCount = Array.from(checkboxes).filter(cb => cb.checked).length;
        if (checkedCount === 0) {
            event.preventDefault();
            checkbox.checked = true;
        }
    });
});


function adjustTextareaHeight() {
    password.style.height = "auto";
    password.style.height = password.scrollHeight + "px";
}


function generatePassword() {
    if (select.value == '1') {
        generateRandomPassword()
    } else {
        generateMemorablePassword()
    }
}

function copyPassword() {
    password.select();
    password.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(password.value);
}
function toggleInputs() {
    if (select.value == '1') {
        randomOnly.style.display = 'flex';
    } else {
        randomOnly.style.display = 'none';
    }
}
function generateMemorablePassword() {
    const wordsLower = [
        "apple", "banana", "cherry", "date", "elderberry", "fig", "grape", "honeydew", "kiwi", "lemon",
        "mango", "nectarine", "orange", "papaya", "quince", "raspberry", "strawberry", "tangerine", "ugli", "vanilla",
        "watermelon", "xigua", "yam", "zucchini", "apricot", "blackberry", "blueberry", "cantaloupe", "dragonfruit",
        "eggplant", "guava", "huckleberry", "jackfruit", "kumquat", "lime", "lychee", "mulberry", "olive", "passionfruit",
        "peach", "pear", "persimmon", "pineapple", "plum", "pomegranate", "pumpkin", "rhubarb", "starfruit", "tomato",
        "cranberry", "avocado", "grapefruit", "coconut", "cucumber", "kale", "spinach", "broccoli", "carrot", "cauliflower",
        "celery", "corn", "lettuce", "mushroom", "onion", "pea", "pepper", "potato", "radish", "squash", "sweetpotato",
        "turnip", "zinnia", "tulip", "rose", "daisy", "sunflower", "daffodil", "lily", "marigold", "orchid", "pansy",
        "peony", "petunia", "violet", "iris", "geranium", "fuchsia", "hydrangea", "jasmine", "lavender", "lilac",
        "magnolia", "begonia", "crocus", "hibiscus", "amaryllis", "begonia", "camellia", "dahlia", "gardenia", "gladiolus",
        "hollyhock", "impatiens", "morningglory", "nasturtium", "poppy", "snapdragon", "sweetpea", "verbena", "wisteria",
        "yarrow", "aloe", "basil", "coriander", "dill", "fennel", "ginger", "horseradish", "mint", "oregano", "parsley",
        "rosemary", "sage", "thyme", "tarragon", "paprika", "saffron", "vanilla", "chocolate", "cinnamon", "clove",
        "nutmeg", "peppermint", "spearmint", "bayleaf", "cardamom", "cumin", "turmeric", "wasabi", "bamboo", "birch",
        "cedar", "cypress", "fir", "maple", "oak", "pine", "redwood", "spruce", "teak", "walnut", "willow", "beech",
        "cherrywood", "ebony", "hickory", "mahogany", "poplar", "sycamore", "yew", "acorn", "azalea", "balsam", "bamboo",
        "bougainvillea", "boxwood", "briar", "buckeye", "buttercup", "camphor", "catalpa", "cherryblossom", "chrysanthemum",
        "clover", "cottonwood", "dogwood", "fern", "forsythia", "foxglove", "goldenrod", "hawthorn", "heather", "juniper",
        "laurel", "mulberry", "oleander", "poinsettia", "primrose", "redbud", "rhododendron", "sassafras", "tamarind",
        "trillium", "viburnum", "willowherb", "yucca"
    ];

    const wordsUpper = [
        "APPLE", "BANANA", "CHERRY", "DATE", "ELDERBERRY", "FIG", "GRAPE", "HONEYDEW", "KIWI", "LEMON",
        "MANGO", "NECTARINE", "ORANGE", "PAPAYA", "QUINCE", "RASPBERRY", "STRAWBERRY", "TANGERINE", "UGLI", "VANILLA",
        "WATERMELON", "XIGUA", "YAM", "ZUCCHINI", "APRICOT", "BLACKBERRY", "BLUEBERRY", "CANTALOUPE", "DRAGONFRUIT",
        "EGGPLANT", "GUAVA", "HUCKLEBERRY", "JACKFRUIT", "KUMQUAT", "LIME", "LYCHEE", "MULBERRY", "OLIVE", "PASSIONFRUIT",
        "PEACH", "PEAR", "PERSIMMON", "PINEAPPLE", "PLUM", "POMEGRANATE", "PUMPKIN", "RHUBARB", "STARFRUIT", "TOMATO",
        "CRANBERRY", "AVOCADO", "GRAPEFRUIT", "COCONUT", "CUCUMBER", "KALE", "SPINACH", "BROCCOLI", "CARROT", "CAULIFLOWER",
        "CELERY", "CORN", "LETTUCE", "MUSHROOM", "ONION", "PEA", "PEPPER", "POTATO", "RADISH", "SQUASH", "SWEETPOTATO",
        "TURNIP", "ZINNIA", "TULIP", "ROSE", "DAISY", "SUNFLOWER", "DAFFODIL", "LILY", "MARIGOLD", "ORCHID", "PANSY",
        "PEONY", "PETUNIA", "VIOLET", "IRIS", "GERANIUM", "FUCHSIA", "HYDRANGEA", "JASMINE", "LAVENDER", "LILAC",
        "MAGNOLIA", "BEGONIA", "CROCUS", "HIBISCUS", "AMARYLLIS", "BEGONIA", "CAMELLIA", "DAHLIA", "GARDENIA", "GLADIOLUS",
        "HOLLYHOCK", "IMPATIENS", "MORNINGGLORY", "NASTURTIUM", "POPPY", "SNAPDRAGON", "SWEETPEA", "VERBENA", "WISTERIA",
        "YARROW", "ALOE", "BASIL", "CORIANDER", "DILL", "FENNEL", "GINGER", "HORSERADISH", "MINT", "OREGANO", "PARSLEY",
        "ROSEMARY", "SAGE", "THYME", "TARRAGON", "PAPRIKA", "SAFFRON", "VANILLA", "CHOCOLATE", "CINNAMON", "CLOVE",
        "NUTMEG", "PEPPERMINT", "SPEARMINT", "BAYLEAF", "CARDAMOM", "CUMIN", "TURMERIC", "WASABI", "BAMBOO", "BIRCH",
        "CEDAR", "CYPRESS", "FIR", "MAPLE", "OAK", "PINE", "REDWOOD", "SPRUCE", "TEAK", "WALNUT", "WILLOW", "BEECH",
        "CHERRYWOOD", "EBONY", "HICKORY", "MAHOGANY", "POPLAR", "SYCAMORE", "YEW", "ACORN", "AZALEA", "BALSAM", "BAMBOO",
        "BOUGAINVILLEA", "BOXWOOD", "BRIAR", "BUCKEYE", "BUTTERCUP", "CAMPHOR", "CATALPA", "CHERRYBLOSSOM", "CHRYSANTHEMUM",
        "CLOVER", "COTTONWOOD", "DOGWOOD", "FERN", "FORSYTHIA", "FOXGLOVE", "GOLDENROD", "HAWTHORN", "HEATHER", "JUNIPER",
        "LAUREL", "MULBERRY", "OLEANDER", "POINSETTIA", "PRIMROSE", "REDBUD", "RHODODENDRON", "SASSAFRAS", "TAMARIND",
        "TRILLIUM", "VIBURNUM", "WILLOWHERB", "YUCCA"
    ];

    lengthLabel.textContent = `Length: ${rangeInput.value}`
    let result = ''
    let finalWords = ''

    if (isUppercase.checked && isLowercase.checked) {
        finalWords = wordsLower.concat(wordsUpper)
    } else {
        if(isUppercase.checked) {
            finalWords = wordsUpper;
        }

        if(isLowercase.checked) {
            finalWords = wordsLower;
        }
    }

    const  words = finalWords;

    for (let i = 0; i < rangeInput.value; i++) {
        let random = Math.floor(Math.random() * words.length)
        result += `${words[random]}-`
    }

    password.value = result.slice(0, -1);
    adjustTextareaHeight();
}
function generateRandomPassword() {

    const LowerLetters = "abcdefghijklmnopqrstuvxz";
    const upperLetters = "ABCDEFGHIJKLMNOPQRSTUVXZ"
    const numbers = "123456789";
    const symbols = "!@#$%¨&*()_"

    lengthLabel.textContent = `Length: ${rangeInput.value}`
    let chars = '';
    let result = '';

    chars += isNumber.checked ? numbers : '';
    chars += isSymbols.checked ? symbols : '';
    chars += isUppercase.checked ? upperLetters : '';
    chars += isLowercase.checked ? LowerLetters : '';

    if (chars != '') {
        for (let i = 0; i < rangeInput.value; i++) {
            let random = Math.floor(Math.random() * chars.length)
            result += `${chars[random]}`
        }
    }

    password.value = result;
    adjustTextareaHeight();
}

