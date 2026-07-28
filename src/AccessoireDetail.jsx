import { useParams, useNavigate } from "react-router-dom"
import btry from "../images/BTRY.jpg"
import cordon from "../images/cordon.jpg"
import cbl_tc51 from "../images/CBL-TC51.jpg"
import cbl_dc from "../images/CBL-DC.jpg"
import cbl_mc33 from "../images/CBL-MC33.jpg"
import cbl_tc2x from "../images/CBL-TC2X.jpg"
import cbl_tc5x from "../images/CBL-TC5X.jpg"
import sac_mc33 from "../images/SAC-MC33.jpg"
import crd_mc33 from "../images/CRD-MC33.jpg"
import crd_et4x from "../images/CRD-ET4X.jpg"
import p10 from "../images/P10.jpg"
import kit from "../images/Kit.jpg"
import tete from "../images/tete.jpg"
import kit_crd from "../images/Kit-CRD.jpg"
import cable from "../images/cable.jpg"
import power from "../images/power.jpg"
import protection from "../images/protection.jpg"
import coque from "../images/coque.jpg"
import trigger from "../images/trigger.jpg"
import handle from "../images/handle.jpg"

// ─── Base de données des produits ───────────────────────────────────────────
const PRODUITS = {

    // ── Accessoires imprimantes ────────────────────────────────────────────
    "P1031365-042": {
        nom: "Kit adaptateur CA mobile",
        sku: "P1031365-042",
        image: p10,
        categorie: "imprimantes",
        couleurGradient: "from-blue-900 via-blue-700 to-blue-500",
        accroche: "Kit adaptateur secteur pour imprimantes mobiles QLn / ZQ5 / ZQ6 / ZQ6 Plus — câble EU",
        description:
            "Ce kit d'accessoires regroupe l'adaptateur secteur CA et le câble EU pour les imprimantes mobiles Zebra des gammes QLn, ZQ5, ZQ6 et ZQ6 Plus. Il assure une recharge rapide et fiable des imprimantes mobiles en environnement bureau ou terrain, avec un câble adapté aux prises européennes.",
        specs: [
            { label: "Compatibilité", valeur: "QLn, ZQ5, ZQ6, ZQ6 Plus" },
            { label: "Contenu", valeur: "Adaptateur CA + câble EU" },
            { label: "Type", valeur: "Kit accessoire d'alimentation" },
            { label: "Norme", valeur: "Prise Europe" },
        ],
        points: [
            "Compatible avec les principales gammes d'imprimantes mobiles Zebra",
            "Câble EU inclus pour une utilisation directe en Europe",
            "Recharge rapide et fiable pour les imprimantes terrain",
            "Kit complet — aucun accessoire supplémentaire nécessaire",
            "Certifié par Zebra pour une compatibilité optimale",
        ],
    },

    "105999-311-01": {
        nom: "Cleaning Card Kit",
        sku: "105999-311-01",
        image: kit,
        categorie: "imprimantes",
        couleurGradient: "from-blue-900 via-blue-700 to-blue-500",
        accroche: "Kit de cartes de nettoyage amélioré pour imprimantes à cartes ZC100 / ZC300 — 5 cartes",
        description:
            "Le kit de nettoyage amélioré Zebra est conçu spécifiquement pour les imprimantes à cartes ZC100 et ZC300. Les 5 cartes de nettoyage permettent d'entretenir la tête d'impression et les rouleaux d'entraînement, garantissant une qualité d'impression constante et une durée de vie prolongée de l'imprimante.",
        specs: [
            { label: "Compatibilité", valeur: "ZC100, ZC300" },
            { label: "Contenu", valeur: "5 cartes de nettoyage" },
            { label: "Type", valeur: "Kit de maintenance" },
            { label: "Version", valeur: "Améliorée" },
        ],
        points: [
            "Nettoyage en profondeur de la tête d'impression et des rouleaux",
            "Prolonge la durée de vie de l'imprimante à cartes",
            "5 cartes par kit pour plusieurs cycles d'entretien",
            "Spécialement formulé pour les imprimantes ZC100 et ZC300",
            "Maintient la qualité d'impression des badges et cartes d'identité",
        ],
    },

    "P1058930-012": {
        nom: "Tête d'impression 203 dpi",
        sku: "P1058930-012",
        image: tete,
        categorie: "imprimantes",
        couleurGradient: "from-blue-900 via-blue-700 to-blue-500",
        accroche: "Kit tête d'impression 203 dpi pour imprimantes industrielles ZT420 / ZT421",
        description:
            "Ce kit de remplacement de tête d'impression 203 dpi est conçu pour les imprimantes industrielles Zebra ZT420 et ZT421. Il permet de restaurer les performances d'impression à leur niveau d'origine après usure, garantissant des codes-barres et étiquettes nets et lisibles pour des volumes d'impression élevés.",
        specs: [
            { label: "Compatibilité", valeur: "ZT420, ZT421" },
            { label: "Résolution", valeur: "203 dpi" },
            { label: "Type", valeur: "Kit remplacement tête d'impression" },
        ],
        points: [
            "Résolution 203 dpi pour des codes-barres nets et précis",
            "Remplacement simple pour minimiser les temps d'arrêt",
            "Restaure les performances d'impression d'origine",
            "Compatible uniquement ZT420 et ZT421",
            "Certifié Zebra pour une fiabilité maximale",
        ],
    },

    // ── Accessoires terminaux ──────────────────────────────────────────────
    "CBL-TC51-USB1-01": {
        nom: "CBL TC51",
        sku: "CBL-TC51-USB1-01",
        image: cbl_tc51,
        categorie: "terminaux",
        couleurGradient: "from-orange-900 via-orange-700 to-orange-500",
        accroche: "Câble de charge et communication USB robuste pour TC51",
        description:
            "Le câble CBL-TC51 est un câble de charge et de communication USB robuste spécialement conçu pour le terminal mobile TC51 de Zebra. Sa construction renforcée le rend résistant aux conditions difficiles des entrepôts et des environnements industriels.",
        specs: [
            { label: "Compatibilité", valeur: "TC51" },
            { label: "Fonction", valeur: "Charge + communication USB" },
            { label: "Construction", valeur: "Robuste" },
            { label: "Type de connecteur", valeur: "USB" },
        ],
        points: [
            "Construction robuste pour une utilisation en environnement industriel",
            "Double fonction : charge rapide et communication USB simultanées",
            "Conçu spécifiquement pour le TC51 Zebra",
            "Résistant aux torsions et à l'arrachement",
            "Certifié Zebra pour une compatibilité garantie",
        ],
    },

    "CBL-MC33-USBCHG-01": {
        nom: "CBL-MC33",
        sku: "CBL-MC33-USBCHG-01",
        image: cbl_mc33,
        categorie: "terminaux",
        couleurGradient: "from-orange-900 via-orange-700 to-orange-500",
        accroche: "Câble USB de charge pour MC3300 / MC3300x / MC3300ax / MC3400 / MC3450",
        description:
            "Le câble CBL-MC33 permet la charge rapide et la communication USB des terminaux MC3300, MC3300x, MC3300ax, MC3400 et MC3450. Utilisé avec un adaptateur secteur compatible, il assure une charge optimale de la batterie. Il supporte également la communication USB avec un ordinateur pour la synchronisation et le déploiement d'applications.",
        specs: [
            { label: "Compatibilité", valeur: "MC3300, MC3300x, MC3300ax, MC3400, MC3450" },
            { label: "Fonction", valeur: "Charge rapide + communication USB" },
            { label: "Type", valeur: "Câble USB de charge" },
        ],
        points: [
            "Compatible avec toute la famille MC3300/MC3400 de Zebra",
            "Charge rapide avec adaptateur secteur compatible",
            "Communication USB pour synchronisation et déploiement",
            "Construction durable pour une utilisation intensive",
            "Certifié par Zebra pour une compatibilité optimale",
        ],
    },

    "CBL-TC5X-USBC2A-01": {
        nom: "CBL-TC5X",
        sku: "CBL-TC5X-USBC2A-01",
        image: cbl_tc5x,
        categorie: "terminaux",
        couleurGradient: "from-orange-900 via-orange-700 to-orange-500",
        accroche: "Câble USB-A vers USB-C de charge et communication pour TC5X — 1 m",
        description:
            "Le câble CBL-TC5X est un câble USB-A vers USB-C d'environ 1 mètre (3,25 pi) dédié à la charge et la communication des terminaux TC5X. Il est également compatible avec l'adaptateur allume-cigare USB Zebra (CHG-AUTO-USB1-01) pour la charge en véhicule, idéal pour les livreurs et techniciens itinérants.",
        specs: [
            { label: "Compatibilité", valeur: "TC5X (TC52, TC57, TC52ax, TC57ax)" },
            { label: "Connecteurs", valeur: "USB-A vers USB-C" },
            { label: "Longueur", valeur: "1 m (3,25 pi)" },
            { label: "Charge en véhicule", valeur: "Compatible CHG-AUTO-USB1-01" },
        ],
        points: [
            "Longueur 1 m pour une utilisation confortable en bureau ou en véhicule",
            "Compatible avec l'adaptateur allume-cigare Zebra pour la charge mobile",
            "Charge et communication USB simultanées",
            "Conçu pour toute la gamme TC5X",
            "Certifié Zebra pour une fiabilité maximale",
        ],
    },

    "SAC-MC33-4SCHG-01": {
        nom: "Four-slot Battery Charger",
        sku: "SAC-MC33-4SCHG-01",
        image: sac_mc33,
        categorie: "terminaux",
        couleurGradient: "from-orange-900 via-orange-700 to-orange-500",
        accroche: "Chargeur de batterie 4 emplacements pour MC3300 / MC3300x / MC3300ax / MC3400 / MC3450",
        description:
            "Le chargeur 4 emplacements SAC-MC33 permet de recharger simultanément 4 batteries des terminaux MC3300, MC3300x, MC3300ax, MC3400 et MC3450. Le bloc d'alimentation (PWR-BGA12V50W0WW), le câble CC (CBL-DC-388A1-01) et le cordon secteur pays sont vendus séparément.",
        specs: [
            { label: "Compatibilité", valeur: "MC3300, MC3300x, MC3300ax, MC3400, MC3450" },
            { label: "Emplacements", valeur: "4 batteries simultanées" },
            { label: "Alimentation requise", valeur: "PWR-BGA12V50W0WW (vendue séparément)" },
            { label: "Câble CC requis", valeur: "CBL-DC-388A1-01 (vendu séparément)" },
        ],
        points: [
            "Charge 4 batteries simultanément pour réduire les temps d'arrêt",
            "Compatible avec toute la gamme MC3300 et MC3400",
            "Gestion intelligente de la charge pour préserver les batteries",
            "Format compact pour s'intégrer facilement dans un espace de travail",
            "Certifié Zebra pour une compatibilité et une fiabilité maximales",
        ],
    },

    "CRD-MC33-2SUCHG-01": {
        nom: "Cradle MC33",
        sku: "CRD-MC33-2SUCHG-01",
        image: crd_mc33,
        categorie: "terminaux",
        couleurGradient: "from-orange-900 via-orange-700 to-orange-500",
        accroche: "Station de charge 1 emplacement avec port USB pour MC3300 / MC3300x / MC3300ax / MC3400 / MC3450",
        description:
            "Le socle CRD-MC33 charge simultanément un terminal et sa batterie spare via son port USB. Compatible avec les MC3300, MC3300x, MC3300ax, MC3400 et MC3450, il s'installe facilement sur un bureau ou un poste de travail. Bloc d'alimentation, câble CC, câble micro-USB et cordon secteur vendus séparément.",
        specs: [
            { label: "Compatibilité", valeur: "MC3300, MC3300x, MC3300ax, MC3400, MC3450" },
            { label: "Emplacements", valeur: "1 terminal + 1 batterie spare" },
            { label: "Port", valeur: "USB (Maître/Esclave)" },
            { label: "Accessoires requis", valeur: "PWR, CBL-DC, câble micro-USB, cordon secteur (séparés)" },
        ],
        points: [
            "Charge simultanée du terminal et d'une batterie de rechange",
            "Port USB pour communication avec l'hôte",
            "Idéal pour les postes de travail fixes en entrepôt",
            "Compatible toute la gamme MC3300/MC3400",
            "Installation simple sur bureau ou plan de travail",
        ],
    },

    "KT-CRD-MC33-2SUCHG01": {
        nom: "Kit station de charge et connexion",
        sku: "KT-CRD-MC33-2SUCHG01",
        image: kit_crd,
        categorie: "terminaux",
        couleurGradient: "from-orange-900 via-orange-700 to-orange-500",
        accroche: "Kit complet station de charge et connexion 1 emplacement pour MC33 avec alimentation et câbles",
        description:
            "Ce kit tout-en-un regroupe la station de charge 1 emplacement pour MC33, le câble d'alimentation CC (CBL-DC-388A1-01), le bloc d'alimentation (PWR-BGA12V50W0WW) et le cordon secteur EU. Le câble USB (25-124330-01R) n'est pas inclus et doit être commandé séparément. Garantie 1 an.",
        specs: [
            { label: "Contenu", valeur: "Station CRD + CBL-DC-388A1-01 + PWR-BGA12V50W0WW + cordon EU" },
            { label: "Non inclus", valeur: "Câble USB 25-124330-01R (à commander séparément)" },
            { label: "Compatibilité", valeur: "MC33 (MC3300, MC3300x, MC3300ax)" },
            { label: "Garantie", valeur: "1 an" },
        ],
        points: [
            "Kit complet prêt à l'emploi — alimentation et câbles inclus",
            "Cordon secteur EU inclus pour une installation immédiate",
            "Garantie 1 an Zebra pour une tranquillité d'esprit",
            "Compatible avec toute la gamme MC33",
            "Seul le câble USB est à commander séparément",
        ],
    },

    "SG-TC2L-BOOT-01": {
        nom: "Coque TC22/TC27",
        sku: "SG-TC2L-BOOT-01",
        image: coque,
        categorie: "terminaux",
        couleurGradient: "from-orange-900 via-orange-700 to-orange-500",
        accroche: "Coque de protection robuste pour TC22 et TC27 — compatible batterie standard et étendue",
        description:
            "La coque de protection SG-TC2L-BOOT-01 offre une protection renforcée contre les chutes et les chocs pour les terminaux TC22 et TC27 de Zebra. Elle est compatible avec la dragonne et s'utilise aussi bien avec la batterie standard qu'avec la batterie à capacité étendue.",
        specs: [
            { label: "Compatibilité", valeur: "TC22, TC27" },
            { label: "Batterie", valeur: "Standard et étendue" },
            { label: "Dragonne", valeur: "Compatible" },
            { label: "Type", valeur: "Coque de protection" },
        ],
        points: [
            "Protection renforcée contre les chutes et les chocs",
            "Compatible batterie standard et batterie étendue",
            "Intégration de la dragonne pour une utilisation sécurisée",
            "Design ajusté qui ne gêne pas l'ergonomie du terminal",
            "Requise pour l'utilisation de la poignée TRG-TC2L-SNP1-01",
        ],
    },

    "TRG-NGTC7-ELEC-01": {
        nom: "Electronic Trigger",
        sku: "TRG-NGTC7-ELEC-01",
        image: trigger,
        categorie: "terminaux",
        couleurGradient: "from-orange-900 via-orange-700 to-orange-500",
        accroche: "Poignée électronique à gâchette pour TC73 / TC78 — compatible batterie standard et étendue",
        description:
            "La poignée électronique TRG-NGTC7-ELEC-01 se fixe à l'arrière du TC73/TC78 via les contacts électriques du terminal, sans percer ni modifier l'appareil. Elle active la gâchette de scan électroniquement, réduisant la fatigue lors des sessions de scan intensives. La courroie de poignet optionnelle SG-PD40-WLD1-01 est vendue séparément.",
        specs: [
            { label: "Compatibilité", valeur: "TC73, TC78" },
            { label: "Batterie", valeur: "Standard et étendue" },
            { label: "Déclenchement", valeur: "Électronique via contacts arrière" },
            { label: "Accessoire optionnel", valeur: "Courroie SG-PD40-WLD1-01 (vendue séparément)" },
        ],
        points: [
            "Déclenchement électronique pour réduire la fatigue des doigts",
            "Fixation via contacts arrière — aucune modification du terminal",
            "Compatible avec les batteries standard et à capacité étendue",
            "Améliore la productivité lors du scan intensif",
            "Courroie de poignet optionnelle disponible séparément",
        ],
    },

    "TRG-TC2L-SNP1-01": {
        nom: "Trigger Handle",
        sku: "TRG-TC2L-SNP1-01",
        image: handle,
        categorie: "terminaux",
        couleurGradient: "from-orange-900 via-orange-700 to-orange-500",
        accroche: "Poignée avec gâchette de scan pour TC22 / TC27 — nécessite la coque SG-TC2L-BOOT-01",
        description:
            "La poignée TRG-TC2L-SNP1-01 se clip sur la coque de protection SG-TC2L-BOOT-01 pour transformer le TC22/TC27 en terminal pistolet. Elle offre une prise en main ergonomique et réduit la fatigue lors des longues sessions de scan. La coque SG-TC2L-BOOT-01 est obligatoire et doit être commandée séparément.",
        specs: [
            { label: "Compatibilité", valeur: "TC22, TC27" },
            { label: "Coque requise", valeur: "SG-TC2L-BOOT-01 (obligatoire)" },
            { label: "Type", valeur: "Poignée avec gâchette" },
            { label: "Fixation", valeur: "Clip sur coque de protection" },
        ],
        points: [
            "Transforme le TC22/TC27 en terminal pistolet ergonomique",
            "Réduit la fatigue lors des longues sessions de scan",
            "Fixation clip rapide et sécurisée sur la coque",
            "Améliore la prise en main dans tous les environnements",
            "Coque SG-TC2L-BOOT-01 obligatoire (vendue séparément)",
        ],
    },

    // ── Accessoires tablettes ──────────────────────────────────────────────
    "50-16000-220R": {
        nom: "Cordon d'alimentation EU",
        sku: "50-16000-220R",
        image: cordon,
        categorie: "tablettes",
        couleurGradient: "from-blue-900 via-blue-700 to-blue-500",
        accroche: "Cordon d'alimentation 18 AWG, 6 A, 250 V — norme Europe",
        description:
            "Ce cordon d'alimentation certifié Europe (250 V, 6 A, 18 AWG) est utilisé avec les blocs d'alimentation Zebra pour les stations de charge de tablettes et accessoires. Il est compatible avec l'ensemble des alimentations et socles de la gamme Zebra nécessitant un cordon EU.",
        specs: [
            { label: "Tension", valeur: "250 V" },
            { label: "Intensité", valeur: "6 A" },
            { label: "Section", valeur: "18 AWG" },
            { label: "Norme", valeur: "Europe (EU)" },
        ],
        points: [
            "Certifié aux normes électriques européennes",
            "Compatible avec les alimentations Zebra pour tablettes et socles",
            "Calibre 18 AWG pour une alimentation stable et sécurisée",
            "Connectique EU standard pour une installation immédiate",
            "Indispensable pour les kits nécessitant un cordon pays",
        ],
    },

    "CBL-DC-388A1-01": {
        nom: "CBL-DC",
        sku: "CBL-DC-388A1-01",
        image: cbl_dc,
        categorie: "tablettes",
        couleurGradient: "from-blue-900 via-blue-700 to-blue-500",
        accroche: "Câble d'assemblage alimentation 12 V CC, 4,16 A — pour blocs et stations de charge Zebra",
        description:
            "Le câble CC CBL-DC-388A1-01 relie le bloc d'alimentation Zebra (PWR-BGA12V50W0WW) aux stations de charge et socles de la gamme Zebra. Sa sortie 12 V / 4,16 A assure une alimentation stable pour les chargeurs multi-emplacements et les stations de charge pour terminaux et tablettes.",
        specs: [
            { label: "Tension", valeur: "12 V CC" },
            { label: "Intensité", valeur: "4,16 A" },
            { label: "Type", valeur: "Câble d'assemblage alimentation" },
            { label: "Compatible", valeur: "PWR-BGA12V50W0WW + stations de charge Zebra" },
        ],
        points: [
            "Liaison entre bloc d'alimentation et station de charge Zebra",
            "12 V / 4,16 A pour une alimentation stable des socles multi-emplacements",
            "Compatible avec la majorité des stations de charge Zebra",
            "Construction robuste pour une utilisation intensive",
            "Certifié Zebra pour une compatibilité et une sécurité maximales",
        ],
    },

    "CBL-TC2X-USBC-01": {
        nom: "CBL-ET51",
        sku: "CBL-TC2X-USBC-01",
        image: cbl_tc2x,
        categorie: "tablettes",
        couleurGradient: "from-blue-900 via-blue-700 to-blue-500",
        accroche: "Câble USB-A vers USB-C pour tablettes ET — 1,5 m avec perle de ferrite",
        description:
            "Ce câble USB-A vers USB-C d'environ 1,5 mètre (5 pi) se connecte au port USB-C situé sous les tablettes Zebra de la série ET. Sa perle de ferrite intégrée protège contre les interférences électromagnétiques, garantissant une communication stable dans les environnements industriels.",
        specs: [
            { label: "Connecteurs", valeur: "USB-A vers USB-C" },
            { label: "Longueur", valeur: "1,5 m (5 pi)" },
            { label: "Ferrite", valeur: "Perle de ferrite intégrée" },
            { label: "Connexion", valeur: "Port USB-C inférieur des tablettes ET" },
        ],
        points: [
            "Longueur 1,5 m pour plus de liberté de mouvement",
            "Perle de ferrite pour protéger des interférences électromagnétiques",
            "Se connecte au port USB-C sous la tablette",
            "Communication et charge simultanées",
            "Certifié Zebra pour la gamme de tablettes ET",
        ],
    },

    "CRD-ET4X-4S10I1-01": {
        nom: "CRD-ET4X",
        sku: "CRD-ET4X-4S10I1-01",
        image: crd_et4x,
        categorie: "tablettes",
        couleurGradient: "from-blue-900 via-blue-700 to-blue-500",
        accroche: "Station de charge 4 emplacements pour tablettes ET40 / ET45 / ET40HC / ET45HC 10 pouces",
        description:
            "La station CRD-ET4X charge jusqu'à 4 tablettes Zebra ET40, ET45, ET40HC ou ET45HC en simultané. Compatible avec les tablettes équipées d'exosquelettes, terminaux de paiement, extensions ou dragonnes médicales. L'alimentation est vendue séparément.",
        specs: [
            { label: "Compatibilité", valeur: "ET40, ET45, ET40HC, ET45HC (10 pouces)" },
            { label: "Emplacements", valeur: "4 tablettes simultanées" },
            { label: "Accessoires compatibles", valeur: "Exosquelettes, terminaux paiement, extensions, dragonnes médicales" },
            { label: "Alimentation", valeur: "Vendue séparément" },
        ],
        points: [
            "Charge 4 tablettes ET4x simultanément",
            "Compatible avec les tablettes équipées d'accessoires",
            "Idéale pour les déploiements en entrepôt, hôpital ou commerce",
            "Compatible modèles standard et santé (HC)",
            "L'alimentation se commande séparément selon le pays",
        ],
    },

    "450042": {
        nom: "Câble avec prise EU",
        sku: "450042",
        image: cable,
        categorie: "tablettes",
        couleurGradient: "from-blue-900 via-blue-700 to-blue-500",
        accroche: "Cordon d'alimentation adaptateur EU pour ET8X / L10 / R12 — article restreint classe 4",
        description:
            "Ce cordon d'alimentation avec adaptateur EU est destiné aux tablettes robustes Zebra ET8X, L10 et R12. Article à utilisation restreinte de classe 4, une certification correspondante est requise pour son acquisition et son déploiement. Il assure une alimentation sécurisée conforme aux normes électriques européennes.",
        specs: [
            { label: "Compatibilité", valeur: "ET8X, L10, R12" },
            { label: "Norme", valeur: "Prise Europe (EU)" },
            { label: "Classe", valeur: "Classe 4 — utilisation restreinte" },
            { label: "Certification", valeur: "Certification spécifique requise" },
        ],
        points: [
            "Cordon certifié EU pour les tablettes ET8X, L10 et R12",
            "Conformité aux normes électriques européennes",
            "Article restreint — certification correspondante obligatoire",
            "Alimentation sécurisée pour les tablettes industrielles Zebra",
            "Indispensable pour les kits de déploiement nécessitant un cordon pays",
        ],
    },

    "PWR-BGA12V50W0WW": {
        nom: "Bloc d'alimentation",
        sku: "PWR-BGA12V50W0WW",
        image: power,
        categorie: "tablettes",
        couleurGradient: "from-blue-900 via-blue-700 to-blue-500",
        accroche: "Bloc d'alimentation CA/CC niveau VI — pour socle 1 emplacement ou chargeur 4 emplacements",
        description:
            "Le bloc d'alimentation PWR-BGA12V50W0WW de niveau VI est conçu pour alimenter les socles à un emplacement et les chargeurs de batterie à 4 emplacements de la gamme Zebra. Le câble CC (CBL-DC-388A1-01) et le cordon d'alimentation secteur spécifique au pays sont vendus séparément.",
        specs: [
            { label: "Niveau d'efficacité", valeur: "Niveau VI" },
            { label: "Sortie", valeur: "12 V CA/CC" },
            { label: "Compatibilité", valeur: "Socles 1 emplacement + chargeurs 4 emplacements Zebra" },
            { label: "Câble CC", valeur: "CBL-DC-388A1-01 (vendu séparément)" },
            { label: "Cordon secteur", valeur: "Spécifique au pays (vendu séparément)" },
        ],
        points: [
            "Niveau VI — haute efficacité énergétique certifiée",
            "Compatible socles et chargeurs multi-emplacements Zebra",
            "Distribution mondiale — un seul bloc pour tous les pays",
            "Stable et fiable pour les environnements industriels exigeants",
            "Câble CC et cordon secteur à commander selon les besoins locaux",
        ],
    },

    "SG-ET4X-10EXOSKL1-01": {
        nom: "Protection ET4X",
        sku: "SG-ET4X-10EXOSKL1-01",
        image: protection,
        categorie: "tablettes",
        couleurGradient: "from-blue-900 via-blue-700 to-blue-500",
        accroche: "Exosquelette de protection pour tablette ET4X 10 pouces — résistance aux chutes jusqu'à 1,55 m",
        description:
            "Cet exosquelette de protection renforce la résistance aux chutes de la tablette ET4X 10 pouces jusqu'à 1,55 m. Il est équipé de points d'accroche pour les clips en D et les sangles (vendus séparément) et reste compatible avec les chargeurs mono et multi-emplacements Zebra.",
        specs: [
            { label: "Compatibilité", valeur: "ET4X 10 pouces (ET40, ET45, ET40HC, ET45HC)" },
            { label: "Résistance chutes", valeur: "Jusqu'à 1,55 m" },
            { label: "Points d'accroche", valeur: "Clips en D + sangles (vendus séparément)" },
            { label: "Chargeurs compatibles", valeur: "Mono et multi-emplacements" },
        ],
        points: [
            "Protection renforcée contre les chutes jusqu'à 1,55 m",
            "Points d'accroche pour clips en D et sangles d'épaule",
            "Compatible avec les chargeurs mono et multi-emplacements",
            "Design ergonomique pour une manipulation confortable",
            "Compatible avec toute la gamme ET4X 10 pouces (standard et HC)",
        ],
    },

    // ── Accessoires scanners ───────────────────────────────────────────────
    "BTRY-36IAB0E-00": {
        nom: "Batterie DS36XX",
        sku: "BTRY-36IAB0E-00",
        image: btry,
        categorie: "scanners",
        couleurGradient: "from-blue-900 via-blue-700 to-blue-500",
        accroche: "Bloc-batterie de rechange pour scanners sans fil de la famille DS36XX",
        description:
            "Ce bloc-batterie de rechange est conçu pour les scanners sans fil Zebra de la famille DS36XX (DS3608, DS3678). Il garantit une autonomie continue pour les opérations de scan sans interruption et assure des performances de niveau d'origine lorsqu'il est utilisé avec les chargeurs Zebra compatibles.",
        specs: [
            { label: "Compatibilité", valeur: "Famille DS36XX (DS3608, DS3678)" },
            { label: "Type", valeur: "Bloc-batterie de rechange" },
            { label: "Usage", valeur: "Remplacement batterie usagée ou de rechange" },
        ],
        points: [
            "Remplacement facile pour les scanners DS36XX",
            "Performances d'autonomie identiques à la batterie d'origine",
            "Idéale en tant que batterie de rechange pour les équipes terrain",
            "Compatible avec les chargeurs multi-emplacements Zebra",
            "Certifiée Zebra pour une sécurité et une fiabilité maximales",
        ],
    },
}

// ─── Composant principal ─────────────────────────────────────────────────────
export default function AccessoireDetail() {
    const { sku } = useParams()
    const navigate = useNavigate()
    const produit = PRODUITS[sku]

    if (!produit) {
        return (
            <div className="flex flex-col items-center justify-center min-h-screen gap-6">
                <h1 className="text-3xl font-bold text-gray-800">Produit introuvable</h1>
                <p className="text-gray-500">La référence <span className="font-mono bg-gray-100 px-2 py-1 rounded">{sku}</span> n'existe pas.</p>
                <button
                    onClick={() => navigate("/Accessoire")}
                    className="bg-black text-white px-6 py-3 rounded-full font-semibold hover:bg-orange-500 transition-colors"
                >
                    ← Retour aux accessoires
                </button>
            </div>
        )
    }

    return (
        <div className="min-h-screen bg-gray-50">

            {/* ── Hero ── */}
            <section className={`bg-gradient-to-br ${produit.couleurGradient} text-white`}>
                <div className="max-w-6xl mx-auto px-6 pt-20 md:pt-43 pb-16 flex md:flex-row flex-col items-center gap-12">

                    {/* Texte */}
                    <div className="flex flex-col gap-5 md:w-1/2">
                        <button
                            onClick={() => navigate(`/Accessoire?categorie=${produit.categorie}`)}
                            className="flex items-center gap-2 text-white/70 hover:text-white text-sm w-fit transition-colors"
                        >
                            ← Retour aux accessoires
                        </button>
                        <p className="text-sm font-bold uppercase tracking-widest text-white/60">ACCESSOIRES ZEBRA</p>
                        <h1 className="text-5xl font-bold leading-tight">{produit.nom}</h1>
                        <p className="text-white/80 font-mono text-sm">{produit.sku}</p>
                        <p className="text-lg text-white/90 leading-relaxed">{produit.accroche}</p>
                        <div className="flex flex-wrap gap-3 mt-4">
                            <button onClick={() => navigate('/Contact-Commercial')} className="bg-white text-black font-semibold px-6 py-3 rounded-full hover:bg-orange-100 transition-colors">
                                Contacter le service commercial
                            </button>
                            <button onClick={() => navigate("/devis", { state: { produit } })} className="border border-white/50 text-white font-semibold px-6 py-3 rounded-full hover:bg-white/10 transition-colors">
                                Demander un devis
                            </button>
                        </div>
                    </div>

                    {/* Image */}
                    <div className="md:w-1/2 flex justify-center">
                        <div className="bg-white/10 backdrop-blur rounded-3xl p-8 shadow-2xl">
                            <img
                                src={produit.image}
                                alt={produit.nom}
                                className="w-64 h-64 object-contain drop-shadow-xl"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* ── Description + Points forts ── */}
            <section className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-12">
                <div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">À propos de ce produit</h2>
                    <p className="text-gray-600 leading-relaxed text-lg">{produit.description}</p>
                </div>
                <div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">Points forts</h2>
                    <ul className="flex flex-col gap-3">
                        {produit.points.map((point, i) => (
                            <li key={i} className="flex items-start gap-3">
                                <span className="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-orange-500 flex items-center justify-center">
                                    <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                    </svg>
                                </span>
                                <span className="text-gray-700">{point}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </section>

            {/* ── Spécifications ── */}
            <section className="bg-white border-t border-gray-200">
                <div className="max-w-6xl mx-auto px-6 py-16">
                    <h2 className="text-2xl font-bold text-gray-900 mb-8">Spécifications</h2>
                    <div className="grid md:grid-cols-2 gap-4">
                        {produit.specs.map((spec, i) => (
                            <div
                                key={i}
                                className="flex justify-between items-center border border-gray-100 rounded-xl px-5 py-4 bg-gray-50"
                            >
                                <span className="text-gray-500 font-medium text-sm">{spec.label}</span>
                                <span className="text-gray-900 font-semibold text-sm text-right">{spec.valeur}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── CTA bas de page ── */}
            <section className="bg-gray-900 text-white">
                <div className="max-w-6xl mx-auto px-6 py-16 flex md:flex-row flex-col items-center justify-between gap-6">
                    <div>
                        <h2 className="text-2xl font-bold mb-2">Intéressé par {produit.nom} ?</h2>
                        <p className="text-gray-400">Notre équipe commerciale est disponible pour vous accompagner.</p>
                    </div>
                    <div className="flex flex-wrap gap-4">
                        <button
                            onClick={() => navigate(`/Accessoire?categorie=${produit.categorie}`)}
                            className="border border-white/30 text-white font-semibold px-8 py-3 rounded-full hover:bg-white/10 transition-colors"
                        >
                            Voir d'autres accessoires
                        </button>
                    </div>
                </div>
            </section>
        </div>
    )
}