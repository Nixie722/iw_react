### Zadání

* Vytvořit komponentu dialogového okna dle následujícího diagramu
* Jednotlivé komponenty oddělit do vlastních souborů, vlastní komponenta dialogového okna pak bude jen "Lego" ostatních komponent
* Celkově se komponenta dialogového okna bude skládat ze 7 dílčích komponent (tlačítko, skupina tlačítek, ikona a text, hlavička, patička a obsah)
* Počet tlačítek jak v hlavičce tak v patičce je variabilní a může se lišit dialog od dialogu
* Doplňující popis v patičce není povinný
* Není důležité jak bude výsledná komponenta vypadat vzhledově (barvičky, rozměry, ...)
* Postačí, když výsledné dialogové okno bude staticky umístěné do středu obrazovky, bez možnosti pohybu
* Pro demonstrační účely by následně měla vzniknout "aplikace" (prostě a jednoduše jen použití vytvořené komponenty), která po kliknutí např. na tlačítko zobrazí komponentu dialogového okna, ideálně mít možnost "vyzkoušet" více dialogů (s tlačítky v patičce, bez tlačítek v patičce, různý počet tlačítek v hlavičce, ...)

### Diagram struktury dialogového okna

```plaintext
┌─────────────────────────────────────────────────────────────────────────┐
│ Modal                                                                   │
│  ┌────────────────────────────────────────────────────────────────────┐ │
│  │ Hlavička                                                           │ │
│  │ ┌───────┐ ┌───────────┐ ┌────────────────────────────────────────┐ │ │
│  │ │ Ikona │ │ Titulek   │ │ Skupina tlačítek                       │ │ │
│  │ │       │ │           │ │ ┌──────────┐ ┌──────────┐ ┌──────────┐ │ │ │
│  │ │       │ │           │ │ │ Tlačítko │ │ Tlačítko │ │ Tlačítko │ │ │ │
│  │ │       │ │           │ │ └──────────┘ └──────────┘ └──────────┘ │ │ │
│  │ └───────┘ └───────────┘ └────────────────────────────────────────┘ │ │
│  └────────────────────────────────────────────────────────────────────┘ │
│  ┌────────────────────────────────────────────────────────────────────┐ │
│  │ Obsah                                                              │ │
│  │                                                                    │ │
│  │                                                                    │ │
│  │                                                                    │ │
│  │                                                                    │ │
│  │                                                                    │ │
│  │                                                                    │ │
│  │                                                                    │ │
│  └────────────────────────────────────────────────────────────────────┘ │
│  ┌────────────────────────────────────────────────────────────────────┐ │
│  │ Patička                                                            │ │
│  │ ┌──────────────────────────────────┐ ┌───────────────────────────┐ │ │
│  │ │ Doplňující popis                 │ │ Skupina tlačítek          │ │ │
│  │ │                                  │ │ ┌──────────┐ ┌──────────┐ │ │ │
│  │ │                                  │ │ │ Tlačítko │ │ Tlačítko │ │ │ │
│  │ │                                  │ │ └──────────┘ └──────────┘ │ │ │
│  │ └──────────────────────────────────┘ └───────────────────────────┘ │ │
│  └────────────────────────────────────────────────────────────────────┘ │
└─────────────────────────────────────────────────────────────────────────┘
```
