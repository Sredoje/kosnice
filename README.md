# kosnice
Sajtic za kosnice

Korisni linkovi:
Ako hocu da mi se view otvara u modalu, znaci ne nova strana nego ajaksom gadjam api, vracam html i printam modal
http://stackoverflow.com/questions/21819184/using-twitter-bootstrap-modals-as-a-view-in-rails-4

Logovanje - Devise
https://github.com/plataformatec/devise

Za ajax responsove - Jbuilder
https://github.com/rails/jbuilder

## To do
- [ ] Dodaj google mape, pogledaj da li moze da se ubaci 2 km radius krug na mapu
- [ ] Napravi order(mogu koristim jquery sortable)
- [ ] Dodaj validacije na sva polja, unique length
- [x] Napravi da tipovi kosnica budu select ( mogu konstante ima ih samo par ) a ne inputi
- [ ] Pogledaj permisije brisanja kosnica ? Da li svaki user moze da brise svaku kosnicu ( ne bi trebalo da moze )
- [ ] Napravi emailer za taskove
- [ ] Dodaj komentare za kosnice
- [x] Dodaj nastavke sa tekstom
- [ ] Dodati brisanje nastavaka, ordering (ovo na kraju)
- [ ] Broj ramova treba dodavati na tip kosnice extension_controller frames_array tu promeni(izvuci od hive-a)
- [ ] Dodati boje nastavaka, (dobar, treba da se radi nesto na njemu, los), ordering (ovo na kraju)
- [ ] Dodati nastavku broj ramova sa tipovima (prazno, polen, med, trutovi, svaki ram moze da ima svoj tip, samo izbaciti count
tipa: 3 rama sace, 4 rama prazno, 2 rama trutovi, 1 med ( ovo mogu da radim sa pravougaonicima sa obojama, tipa polen/med budu dve boje)
- [ ] Namesti kaskadno brisanje
- [ ] Za google mape stavi da ti bude teren po default-u i da ti izvlaci iz javascripta coordinate

## Optional
- [ ] Pogledaj za translate
- [ ] Hostuj na heroku
- [ ] Dodaj ssl
- [ ] .scrollable Ovo racunaj javascriptom (broj kosnica * sirina kosnice + prazan prostor) da ne bi bio veliki prostor

## Priorty

- [x] Kada ti vraca ajax iz add extension uhvati sve frame-ove, bitno je zbog id-jeva
- [ ] Menjanje modova nastavka, i brisanje nastavka u togglu
