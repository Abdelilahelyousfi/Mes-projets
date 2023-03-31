
// un selecteur qui permet de selecter le ficher 
const wrapper = document.querySelector(".sliderWrapper")
const menuItems = document.querySelectorAll(".menuItem")

const products = [
    {
        id: 1,
        title:"WHEY PROTEIN",
        price: 49.99,
        Desc:"La Whey Protéine Gold Standard 100% Whey de Optimum Nutrition est un mélange de protéines de lactosérum ultrafiltré et de concentré de protéines de lactosérum. Elle contient également des enzymes digestives pour faciliter l'assimilation des protéines. Chaque portion fournit 24 grammes de protéines, avec seulement 1 gramme de matières grasses et 3 grammes de glucides. Cette formule contient également des acides aminés à chaîne ramifiée (BCAA) pour aider à la récupération et à la croissance musculaire. Gold Standard 100% Whey est disponible dans de nombreux arômes délicieux, sans sucres ajoutés.",

        colors: [
            {
                code:"black",
                img:"/images/whey.png",
            },
            {
                code: "white",
                img: "./images/wheyblanc.png",
            },
        ],
    },
    {
        id:2,
        title:" BANC DE MUSCU",
        price:149.99,
        Desc: "Ce banc de musculation inclinable est conçu pour les entraînements de musculation à domicile. Il est doté d'un siège et d'un dossier rembourrés pour un confort optimal lors de vos séances d'entraînement. La structure est en acier robuste pour une durabilité maximale. Le banc de musculation est réglable pour différents angles pour une variété d'exercices de musculation. Il est également équipé d'un support pour les haltères et d'un support pour les jambes pour une utilisation polyvalente.",
        colors: [
           {
                code:"black",
                img:"/images/banc.png",
           },
           {
            code:"red",
            img:"./images/bancrouge.png"
           },
        ],
    },
    {
        id:3,
        title:"GANTS DE MUSCULATION",
        price:15.99,
        Desc:"Les gants de musculation sont conçus pour protéger vos mains des blessures et des ampoules pendant les entraînements de musculation. Ces gants sont en cuir pour une durabilité accrue et une meilleure adhérence. Ils sont également rembourrés pour un confort optimal et sont disponibles dans différentes tailles pour s'adapter à toutes les mains. Avec ces gants, vous pouvez vous concentrer sur votre entraînement sans vous soucier de vos mains.",
        colors: [
            {
                code:"black",
                img:"/images/gants.png",
           },
           {
            code:"violet",
            img:"./images/gants muscu violet.png",
           },
        ],
    },
];

let choosenProduct = products[0]

const currentProductImg = document.querySelector(".productImg");
const currentProductTitle = document.querySelector(".productTitle");
const currentProductPrice = document.querySelector(".productPrice");
const currentProductDesc = document.querySelector(".productDesc");
const currentProductColors = document.querySelectorAll(".color");
const currentProductSizes = document.querySelectorAll(".size");

// (foreach) ont select/ prend en compt/ tout les "item" et leur "index"
// cree un listener pour chaque menu et utiliser un click event 

menuItems.forEach((item,index) => {
    item.addEventListener("click",() => {  
        //changer le slide actuel
        wrapper.style.transform = `translateX(${-100 * index}vw)`;

        //changer le produit choisi
        choosenProduct = products [index]

        // changer le text du currentPdoduct
        currentProductTitle.textContent = choosenProduct.title;
        currentProductDesc.textContent = choosenProduct.Desc;
        currentProductPrice.textContent = "€" + choosenProduct.price;
        currentProductImg.src = choosenProduct.colors[0].img;

        // changer les  couleurs de chaque index choisi 
        currentProductColors.forEach((color,index) => {
            color.style.backgroundColor = choosenProduct.colors[index].code;
        });
    });
});




currentProductColors.forEach((color,index)=>{
    color.addEventListener("click", ()=> {
        currentProductImg.src = choosenProduct.colors[index].img;
    });
});

// selectioner le size et l'index -> ajouter le listener click 
// on ajoute un autre for each pour anuler le "black background" deja selectioner
currentProductSizes.forEach((size,index)=>{
    size.addEventListener("click",()=>{
        //
        currentProductSizes.forEach((size)=>{
            size.style.backgroundColor="white"
            size.style.color= "black"
        });
        size.style.backgroundColor="black"
        size.style.color= "white"
    });
});

const productButton = document.querySelector(".productButton");
const payment = document.querySelector(".payment");
const close = document.querySelector(".close");

productButton.addEventListener("click",()=>{
    payment.style.display="flex"
})

close .addEventListener("click",()=>{
    payment.style.display="none"
})




    
