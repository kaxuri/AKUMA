# ΛKUMΛ 3.0

ΛKUMΛ to platforma edukacyjna dla Technika Informatyka, koncentrująca się na kwalifikacjach **INF.02 / EE.08** oraz **INF.03 / EE.09**. Aplikacja została stworzona, aby pomóc uczniom skutecznie przygotować się do egzaminów zawodowych.

## Funkcje

### Quiz i nauka
- **Baza pytań 2026** — pytania z arkuszy z lat ubiegłych oraz ogólnodostępnych źródeł, pokrywające kwalifikacje INF.02 i INF.03.
- **Trzy tryby quizu**:
  - **Egzamin** — klasyczny tryb 40 pytań, jak na prawdziwym egzaminie.
  - **Jedno pytanie** — tryb rewizji pytanie po pytaniu.
  - **Dowolny** — własna liczba pytań (presety: 10, 20, 40, 60 lub niestandardowa wartość).
- **Konfigurator quizu** — wybór kwalifikacji, trybu i liczby pytań przed startem.

### Panel ucznia (Dashboard)
- Statystyki: liczba ukończonych quizów, średnia ocena, liczba poprawnych odpowiedzi, data ostatniego quizu.
- Postęp per kwalifikacja (INF.02 / INF.03) z paskiem opanowania pytań.
- Historia ostatnich 10 wyników z datą, trybem i wynikiem procentowym.

### Zasoby
- **Archiwum Arkuszy** — lista arkuszy egzaminacyjnych EE.08, EE.09, INF.02, INF.03 z lat 2018–2025, do pobrania bezpośrednio z arkusze.pl.
- **Kompilator LYDIA** (Beta) — wbudowany edytor HTML/CSS/JavaScript oparty na Monaco Editor z podglądem na żywo i sandboxowaną konsolą JS.

### Blog / Wiadomości
- Devlog z aktualizacjami projektu i nowymi funkcjami.
- Strona `/news` z wyszukiwarką i filtrowaniem po tagach.
- Pełne posty blogowe pod `/blog/[slug]` z obsługą cover image, tagów i szacowanego czasu czytania.

### Konta użytkowników
- Rejestracja i logowanie.
- Ustawienia konta: zmiana nazwy użytkownika, emaila i hasła.
- System zaproszeń — dostęp do platformy tylko przez kod zaproszenia; użytkownicy z uprawnieniami mogą generować i zarządzać kodami.
- Automatyczne wylogowanie i blokada przy banie.

### AKUMA+ (Plany premium)
- Trzy plany subskrypcji: **Pakiet S**, **Pakiet M**, **Pakiet L**.
- Rozliczenie miesięczne lub roczne (do -50%).
- Płatności obsługiwane przez Stripe.



## Wykorzystane technologie

| Warstwa | Technologia |
|---|---|
| Framework | Next.js 16 (App Router) |
| Język | TypeScript 5.7 |
| Stylowanie | TailwindCSS 3, shadcn/ui, Radix UI |
| Backend / Auth / DB | Supabase (SSR) |
| Edytor kodu | Monaco Editor |
| Edytor treści | Tiptap 3 |
| Ikony | Lucide React |
| Wykresy / UI | Recharts, Sonner, Vaul |

## Kontakt

Pytania i opinie: [kaxuri](https://github.com/kaxuri) na GitHubie.

---

<!--Działająca aplikacja: [informatyk.vercel.app](https://informatyk.vercel.app)-->

Projekt stworzony przez Julian "Kaxuri" Czapski.
Projekt powstał przy pomocy materiałów udostępnionych przez arkusze.pl oraz praktycznyegzamin.pl.

*Projekt przeznaczony wyłącznie do celów edukacyjnych. Własność intelektualna należy do ich właścicieli.*
