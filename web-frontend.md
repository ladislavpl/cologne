# Praktická úloha: One-page web
## Téma: Zajímavé místo, aktivita nebo zážitek

### Cíl úlohy
Vytvořte jednostránkový (one-page) web, na kterém prakticky prokážete znalosti z:

HTML5 – struktura a sémantické značky,\
CSS – vzhled a responzivní rozvržení,\
DOM + JavaScript – interaktivita a změna obsahu stránky.\
Web musí být vytvořen pouze pomocí HTML5, CSS a JavaScriptu.\
Nepoužívejte žádný framework ani knihovnu typu Bootstrap, Tailwind, jQuery apod.

**AI je povolena. Výsledný kód ale musíte umět vysvětlit a jste zodpovědní za jeho funkčnost.**

### 1. Vyberte si téma
Vyberte si jedno konkrétní téma, například:

- turistický výlet,
- zajímavé místo,
- sportovní aktivita,
- hudební festival,
- desková hra,
- videohra,
- filmový svět,
- oblíbený sport,
- kulturní akce,
- hobby nebo záliba.

**Téma musí umožnit vytvořit skutečný obsah, nikoli pouze několik nadpisů a odstavců.**

### 2. Web musí obsahovat
**HTML5**

Použijte vhodné sémantické HTML5 značky, zejména podle významu jednotlivých částí stránky: header, nav, main, section, article, aside, footer

Dále musí být správně použity například:

- nadpisy h1–h3,
- odstavce,
- seznam,
- odkaz,
- obrázek s alt,
- alespoň jeden vhodný formulářový prvek.

Stránka musí mít:

- !DOCTYPE html,
- správně nastavený jazyk dokumentu,
- charset,
- viewport,
- smysluplný title,
- meta description.

**CSS**

Pomocí vlastního CSS vytvořte:

- přehledné rozložení stránky,
- vlastní barevné schéma a typografii,
- responzivní vzhled,
- alespoň jeden breakpoint pomocí @media,
- vhodné rozložení pomocí Flexboxu nebo Gridu,
- efekty :hover alespoň u některých prvků.
- Web musí být použitelný jak na počítači, tak na mobilním zařízení.

**JavaScript + DOM**\
Web musí obsahovat alespoň 2 skutečně funkční interaktivní prvky.

Například:

- rozbalení/skrytí části obsahu,
- přepínání mezi informacemi,
- změna textu,
- změna CSS třídy,
- jednoduchý kvíz,
- počítadlo,
- tlačítko „Zobrazit více“,
- interaktivní navigace,
- jednoduchá kontrola formuláře.
- Interaktivita musí být řešena pomocí JavaScriptu a DOM.

Použijte například:

- querySelector() / getElementById(),
- addEventListener(),
- práci s textContent, třídami nebo atributy,
- vhodnou reakci na událost (click, input, change, submit...).
- JavaScript nesmí být pouze dekorativní. Musí skutečně měnit nebo ovládat obsah stránky.

### 3. SEO
Stránka musí obsahovat základní SEO prvky probírané ve výuce:

- smysluplný title,
- meta description,
- správnou strukturu nadpisů,
- sémantické HTML,
- vhodné texty odkazů,
- alt u obrázků,
- lang dokumentu.
- Cílem není dělat pokročilé SEO, ale ukázat, že SEO začíná už správnou strukturou HTML dokumentu.

### 4. Kontrola a testování
Před odevzdáním web otestujte.

**WebTools**\
Proveďte kontrolu pomocí nástrojů, které jsme používali ve výuce.

Zkontrolujte zejména:

- HTML,
- CSS,
- případné problémy v dokumentu,
- responzivitu,
- konzoli prohlížeče.
- Chyby, které dokážete opravit, opravte.

**Validace je kontrola správnosti zápisu, nikoli automatické potvrzení kvality celého webu.**

**Lighthouse**\
Spusťte v Chrome Lighthouse a proveďte audit minimálně pro:

- Performance
- Accessibility
- Best Practices
- SEO
- Lighthouse je automatizovaný nástroj pro audit těchto oblastí.

### 5. Co odevzdáte
Do Teams odevzdejte:

1. Web
Odkaz na repo v github s Celým projektem, například:

- index.html
- style.css
- script.js
- img/
**Pokud obrázky používáte, přiložte je také.**

2. Výsledek Lighthouse
Odevzdejte screenshot nebo export výsledku Lighthouse auditu.

Na výsledku musí být vidět alespoň:

- Performance
- Accessibility
- Best Practices
- SEO
- Minimální požadavky – kontrolní seznam

Před odevzdáním si zkontrolujte:

- používám HTML5 a sémantické značky
- mám header, nav, main, section a footer
- mám správnou strukturu nadpisů
- mám title, description, lang a viewport
- obrázky mají alt
- používám vlastní CSS
- web je responzivní
- používám Flexbox nebo Grid
- používám alespoň jeden @media breakpoint
- mám alespoň 2 interaktivní prvky
- interaktivitu řeší JavaScript přes DOM
- JavaScript reaguje na události
- web funguje bez frameworků a knihoven
- zkontroloval/a jsem web pomocí WebTools
- provedl/a jsem Lighthouse audit
- opravil/a jsem nalezené chyby, které byly v mých silách

**Časový limit**\
1–2 vyučovací hodiny

**Nezaměřujte se na množství obsahu ani na složitý grafický design.**

**Důležitější je správné použití HTML5, CSS, DOM a JavaScriptu než rozsáhlý nebo efektní web.**

### 6. Pravidla pro AI
AI je povolena.

Můžete ji využít například pro:

- návrh struktury HTML,
- pomoc s CSS,
- vysvětlení JavaScriptu,
- hledání chyby v kódu,
- návrh interaktivního prvku.

Platí však:

**Nepřebírejte slepě vygenerovaný kód. Otestujte ho, upravte a ověřte, že mu rozumíte.**

**Při případné kontrole můžete být požádáni, abyste vysvětlili, jak funguje část vašeho HTML, CSS nebo JavaScriptu.**