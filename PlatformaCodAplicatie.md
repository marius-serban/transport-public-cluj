# Diverse platforme pentru aplicatie #
Avem patru posibilitati de implementare a aplicatiei pe dispozitive mobile:
  * aplicatie web
  * aplicatie nativa
  * aplicatie nativa care foloseste un WebView (un fel de browser in cadrul aplicatiei) (sau PhoneGap)
  * aplicatie scrisa pentru un framework/builder care genereaza cod nativ (gen Appcelerator Titanium sau altele)

# Aplicatie web #

Avantaje:
  * cross-platfom
  * trebuie sa invatam/folosim doar HTML5
  * costuri de dezvoltare minime (daca alegem PHP cred ca e un mediu familiar pentru toti)
  * probabil, va trebui sa avem si o versiune web a aplicatiei

Dezavantaje:
  * user-ul trebuie sa viziteze pagina din browser, deci sa stie pe de rost si sa scrie URL-ul de fiecare data cand acceseaza aplicatia (optional userul poate adauga bookmark-uri manual chiar pe home screen pe iPhone si Android)
  * performante mai scazute
  * acces limitat la functiile telefonului

# Aplicatie nativa #

Avantaje:
  * perfomantele cele mai bune
  * userul-ui ii apare aplicatia in lista cu aplicatii odata ce o instaleaza si ii e mai simplu sa puna icoana pe home-screen
  * acces la mai multe din functiile telefonului

Dezavantaje:
  * trebuie scris cod pentru fiecare platforma separat
  * trebuie invatate multe limbaje/API-uri

# Aplicatie nativa cu WebView (eg.PhoneGap) #

Avantaje:
  * aplicatia poate fi 90% web si 10% nativa deci ar fi mai putin de invatat decat 100% nativ
  * avem acces la toate functiile telefonului (partea nativa poate oferi acces partii web)
  * aplicatia poate sa aiba icoana pe home-screen la fel de simplu ca si in cazul aplicatiilor native
  * Phonegap ofera acel 10% din aplicatie sub forma unui API javascript accesibil prin obiectul "navigator"

Dezavantaje:
  * ne limitam doar la platformele care suporta WebView (iPhone, Android, BlackBerry)
  * totusi trebuie sa invatam cate umpic din plarformele native pentru a implementa acel 10% din aplicatie
  * complexitate mai mare decat aplicatie nativa sau web (debug mai dificil)

# Aplicatie ce foloseste framework/builder de cod nativ #

Avantaje:
  * invatam un singur limbaj/API
  * sunt suportate platformele principale (iPhone, Android, Blackberry)
  * avem avantajele unei aplicatii native

Dezavantaje:
  * in general builder-ele sunt "work in progress", de unde si urmatoarele:
  * sunt pline de bug-uri
  * documentatie slaba
  * API-ul este destul de limitat