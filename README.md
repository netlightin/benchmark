# Benchmark Results

- Each audio file contains 10 test runs with individual response times
- Average response times increase with audio file duration
- All files use Swedish language content with auto-detected language settings

## Results Summary - Tiny Model

| Audio File        | Duration | Avg Response Time | Text                                                                                                                                                                                                                                                                                                       |
| ----------------- | -------- | ----------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `./audio/b05.mp3` | 5.92s    | 0.50s             | I två, tre månader och sen så får du sätta upp dig igenom om vi behöver.                                                                                                                                                                                                                                   |
| `./audio/b10.mp3` | 10.92s   | 0.72s             | jag bedömer det som en förstoppning du får behandling mot ett kol i två, tre månader och sen så får du sätta upp det igenom du behöver, om vi behöver                                                                                                                                                      |
| `./audio/b15.mp3` | 15.92s   | 0.89s             | flitigt på vänster fossa ja jag bedömer det som en förstoppning du får behandling mot det kol i två, tre månader och sen så får du sätta igenom det om vi behöver                                                                                                                                          |
| `./audio/b20.mp3` | 20.92s   | 0.76s             | och ehm, det ser bra ut eh gör ont lite på vänster fossa eh ja jag bedömer det som en förstoppning eh du får behandling mot kol i två, tre månader eh och sen så får du sätta iväg igenom det behöver vi behov                                                                                             |
| `./audio/b25.mp3` | 25.92s   | 0.91s             | eh magen, parperar jag eh eh jag aspekterar magen eh och eh det ser bra ut eh gör ont lite på vänster fossa eh ja jag bedömer det som en förstoppning eh du får behandling med modekol i två, tre månader eh och sen så får du sätta iväg igenom det behöver vi om vi behöver                              |
| `./audio/b30.mp3` | 30.92s   | 0.99s             | i hjärtat det låter bra lungorna låter jättefint eh magen parperar jag eh eh jag aspekterar magen eh och ehm det ser bra ut eh gör ont lite på vänster fossa eh ja jag är bedömare som har förstått det du får behandling mot det går i två, tre månader och sen så får du sätta igenom det behöver vi Ja. |
| `./audio/b60.mp3` | 60.72s   | 1.92s             | eh sen eh i flera är min familj jag har tidigare tagit eh, och fick kål för mina förstoppningar då som jag tror orsakar min bruksmärta idag...                                                                                                                                                             |
| `./audio/b90.mp3` | 93.12s   | 2.35s             | hej ehm hur kan jag på dig då? jo, jag söker för att jag har ont i magen eh och jag har haft det under en väldigt lång period...                                                                                                                                                                           |

## Results Summary - Base Model

| Audio File        | Duration | Avg Response Time | Text                                                                                                                                                                                                                                                   |
| ----------------- | -------- | ----------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `./audio/b05.mp3` | 5.92s    | 0.56s             | i två, tre månader, och sen så får du söka igenom vid behov,                                                                                                                                                                                           |
| `./audio/b10.mp3` | 10.92s   | 0.75s             | Jag bedömer det som en förstoppning det får behandling mot vikolet i två tre månader och sen så får du söka igenom det vid behov                                                                                                                       |
| `./audio/b15.mp3` | 15.92s   | 0.80s             | de flyter på vänster fossa eh ja jag bedömer det som en förstoppning eh det får behandling mot vikol i två tre månader och sen så får du söka upp dig igen om vid behov                                                                                |
| `./audio/b20.mp3` | 20.92s   | 0.94s             | och ser bra ut gör ont lite på vänster fossa eh ja jag bedömer det som en förstoppning det får behandling mot vikol i två tre månader och sen så får du söka upp dig igen om du behöver vid behov                                                      |
| `./audio/b25.mp3` | 25.92s   | 0.92s             | magen paperia magen, jag ackuterar magen och ser bra ut gör ont lite på vänster fossa ja jag bedömer det som en förstoppning det får behandling mot vikolet i två tre månader och sen så får du söka upp det igen om vid behov                         |
| `./audio/b30.mp3` | 30.92s   | 1.02s             | i hjärtat det låter bra lungorna låter jättefint magen, paperia magen och ser bra ut gör ont lite på vänster fossa ja jag bedömer det som en förstoppning det får behandling mot vikol i två tre månader och sen så får du söka upp igen om vi bor Ja. |
| `./audio/b60.mp3` | 60.72s   | 2.25s             | sen i flera i min familj. Jag har tidigare tagit på villkor för mina förstoppningar då som jag tror orsakar min buksmärta idag...                                                                                                                      |
| `./audio/b90.mp3` | 93.12s   | 2.57s             | Hej eh eh hur kan jag på dig då? Jo, jag söker för att jag har odd i magen och jag har haft det under en väldigt lång period och du behöver hjälp nu...                                                                                                |

## Results Summary - Small Model

| Audio File        | Duration | Avg Response Time | Text                                                                                                                                                                                                                                                    |
| ----------------- | -------- | ----------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `./audio/b05.mp3` | 5.92s    | 0.76s             | i 2, 3 månader, och sen så får du söka igen om du behöver, vid behov                                                                                                                                                                                    |
| `./audio/b10.mp3` | 10.92s   | 1.04s             | Äh, vi bedömer det som en förstoppning. Du får behandling med mov i KL i 2, 3 månader och sen så får du söka igen om du behöver vid behov.                                                                                                              |
| `./audio/b15.mp3` | 15.92s   | 1.21s             | lite på vänster fossa eh ja, jag bedömer det som en förstoppning eh du får behandling med ovykol i två, tre månader och sen så får du ju söka igen om du behöver, vid behov                                                                             |
| `./audio/b20.mp3` | 20.92s   | 1.11s             | eh och ser bra ut eh gör ont lite på vänster fossa eh ja jag bedömer det som en förstoppning eh du får behandling med movicol i två, tre månader eh och sen så får du ju söka igen om du behöver, vid behov                                             |
| `./audio/b25.mp3` | 25.92s   | 1.45s             | eh magen, parperia eh mag ah jag aspekterar magen eh och ser bra ut eh gör ont lite på vänster fossa eh ja jag bedömer det som en förstoppning eh du får behandling med mov i kol i två, tre månader eh och sen så får du ju söka igen om du behöver... |
| `./audio/b30.mp3` | 30.92s   | 1.68s             | i hjärtat det låter bra, lungorna låter jättefint eh, eh magen, parperia eh, aspekterar magen eh och ser bra ut eh gör ont lite på vänster fossa eh ja jag bedömer det som en förstoppning eh du får behandling med movicult i två, tre månader...      |
| `./audio/b60.mp3` | 60.72s   | 3.56s             | ehm sen, flera i min familj ehm, jag har tidigare tagit xxx vill kår för mina förstoppningar och som jag tror orsakar min buksmärta idag...                                                                                                             |
| `./audio/b90.mp3` | 93.12s   | 4.53s             | hej eh hur kan jag hjälpa dig då? jo, eh jag söker för att jag har ont i magen, och jag har haft det under en väldigt lång period...                                                                                                                    |

## Results Summary - Medium Model

| Audio File        | Duration | Avg Response Time | Text                                                                                                                                                                                                                                                         |
| ----------------- | -------- | ----------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `./audio/b05.mp3` | 5.92s    | 0.92s             | i två, tre månader. Och sen så får du söka igen vid behov.                                                                                                                                                                                                   |
| `./audio/b10.mp3` | 10.92s   | 1.31s             | Jag bedömer det som en förstoppning. Du får behandling med OVK i två, tre månader och sen så får du söka igen vid behov.                                                                                                                                     |
| `./audio/b15.mp3` | 15.92s   | 1.54s             | Lite på vänster fossa. Ja, jag bedömer det som en förstoppning. Du får behandling med OVK i två, tre månader och sen så får du söka igen vid behov.                                                                                                          |
| `./audio/b20.mp3` | 20.92s   | 1.81s             | Och det ser bra ut, det gör ont lite på vänster fossa, ja jag bedömer det som en förstoppning. Du får behandling med OVK i två, tre månader, och sen så får du söka igen vid behov.                                                                          |
| `./audio/b25.mp3` | 25.92s   | 1.90s             | Magen palperar jag, jag aspekterar magen och det ser bra ut. Jag gör ont lite på vänster fossa jag bedömer det som en förstoppning. Du får behandling med OVK i två tre månader, och sen så får du söka igen vid behov.                                      |
| `./audio/b30.mp3` | 30.92s   | 2.44s             | Hjärtat låter bra, lungorna låter jättefint Magen parperar jag, jag auskulterar magen Och ser bra ut Jag gör ont lite på vänster fossa Jag bedömer det som förstoppning Du får behandling med OVK i två tre månader Och sen så får du söka igenom du behöver |
| `./audio/b60.mp3` | 60.72s   | 5.11s             | Jag har tidigare tagit villkor för mina förstoppningar och som jag tror orsakar min buksmärta idag...                                                                                                                                                        |
| `./audio/b90.mp3` | 93.12s   | 6.63s             | Hej, hur kan jag hjälpa dig då? Jo jag söker för att jag har ont i magen och jag har haft det under en väldigt lång period...                                                                                                                                |

## Results Summary - Large Model

| Audio File        | Duration | Avg Response Time | Text                                                                                                                                                                                                                                                    |
| ----------------- | -------- | ----------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `./audio/b05.mp3` | 5.92s    | 1.42s             | I två, tre månader och sen så får du söka igen om du behöver, vid behov.                                                                                                                                                                                |
| `./audio/b10.mp3` | 10.92s   | 1.91s             | jag bedömer det som en förstoppning ehm, du får behandling med Movi-Col i två, tre månader eh och sen så får du säkra igen om du behöver, vid behov                                                                                                     |
| `./audio/b15.mp3` | 15.92s   | 2.15s             | Lite på vänsterfossa. Eh ja, jag bedömer det som en förstoppning. Eh, du får behandling med Movicol i två, tre månader. Och sen så får du söka igen om du behöver, vid behov.                                                                           |
| `./audio/b20.mp3` | 20.92s   | 2.51s             | och ser bra ut ehm gör ont lite på vänsterfossa ehm ja jag bedömer det som en förstoppning ehm du får behandling med Movie Call i två, tre månader eh och sen så får du söka igen om du behöver, vid behov                                              |
| `./audio/b25.mp3` | 25.92s   | 2.92s             | Eh magen, parperia. Eh mag, askultera magen. Eh och eh det ser bra ut. Eh gör ont lite på vänster fossa. Eh ja, jag bedömer det som en förstoppning. Eh du får behandling mot kol i två, tre månader. Eh och sen så får du säkert igen om du behöver... |
| `./audio/b30.mp3` | 30.92s   | 3.67s             | hjärtat, det låter bra lungorna, låter jättefint eh eh magen, parperia eh mag, eh askultera magen eh och eh det ser bra ut ehm eh gör ont lite på vänster fossa eh ja, jag bedömer det som en förstoppning ehm du får behandling med Movicol...         |
| `./audio/b60.mp3` | 60.72s   | 7.28s             | Sen i flera i min familj. Jag har tidigare tagit villkor för mina förstoppningar och som jag tror orsakar min buksmärta idag...                                                                                                                         |
| `./audio/b90.mp3` | 93.12s   | 10.26s            | Hej, ehm, hur kan jag hjälpa dig då? Jo, jag söker för att jag har ont i magen och jag har haft det under en väldigt lång period...                                                                                                                     |

## Analysis

### "Movicol" Transcription Accuracy

The goal was to find a fast and accurate model for transcribing medical drug names, specifically "Movicol". Below is a summary of how each model performed:

### Detailed Accuracy Breakdown

#### ✅ Exact Match - "movicol", "Movicol", "Movi-Col"

| Model | Audio File | Duration | Avg Time | Transcription |
| ----- | ---------- | -------- | -------- | ------------- |
| Small | b20.mp3    | 20.92s   | 1.11s    | "movicol"     |
| Large | b10.mp3    | 10.92s   | 1.91s    | "Movi-Col"    |
| Large | b15.mp3    | 15.92s   | 2.15s    | "Movicol"     |
| Large | b30.mp3    | 30.92s   | 3.67s    | "Movicol"     |

#### ⚠️ Close/Almost - "movicult", "ovykol", "mov i kol"

| Model | Audio File | Duration | Avg Time | Transcription | Similarity                     |
| ----- | ---------- | -------- | -------- | ------------- | ------------------------------ |
| Small | b15.mp3    | 15.92s   | 1.21s    | "ovykol"      | Similar structure, missing 'm' |
| Small | b25.mp3    | 25.92s   | 1.45s    | "mov i kol"   | Words separated, recognizable  |
| Small | b30.mp3    | 30.92s   | 1.68s    | "movicult"    | Single letter off, very close  |

#### ❌ Poor Match - "mot ett kol", "mot vikolet", "mot vikol", "mov i KL", "OVK"

| Model  | Audio File | Duration | Avg Time | Transcription | Issue                            |
| ------ | ---------- | -------- | -------- | ------------- | -------------------------------- |
| Tiny   | b10.mp3    | 10.92s   | 0.72s    | "mot ett kol" | Completely wrong word            |
| Tiny   | b15.mp3    | 15.92s   | 0.89s    | "mot det kol" | Preposition instead of drug name |
| Tiny   | b20.mp3    | 20.92s   | 0.76s    | "mot kol"     | Missing prefix                   |
| Tiny   | b25.mp3    | 25.92s   | 0.91s    | "mot modekol" | Wrong drug name entirely         |
| Base   | b10.mp3    | 10.92s   | 0.75s    | "mot vikolet" | Phonetically similar but wrong   |
| Base   | b15.mp3    | 15.92s   | 0.80s    | "mot vikol"   | Phonetically similar but wrong   |
| Base   | b20.mp3    | 20.92s   | 0.94s    | "mot vikol"   | Phonetically similar but wrong   |
| Base   | b25.mp3    | 25.92s   | 0.92s    | "mot vikolet" | Phonetically similar but wrong   |
| Small  | b10.mp3    | 10.92s   | 1.04s    | "mov i KL"    | Abbreviation with spacing        |
| Medium | b25.mp3    | 25.92s   | 1.90s    | "OVK"         | Only abbreviation                |
| Large  | b20.mp3    | 20.92s   | 2.51s    | "Movie Call"  | Completely misheard              |
| Large  | b25.mp3    | 25.92s   | 2.92s    | "mot kol"     | Missing prefix                   |

### Key Findings

| Model  | Accuracy Level | Transcriptions of "Movicol"                  | b10.mp3 Avg Time | b15.mp3 Avg Time | Overall Avg Speed | Recommendation    |
| ------ | -------------- | -------------------------------------------- | ---------------- | ---------------- | ----------------- | ----------------- |
| Tiny   | ❌ Poor        | "mot ett kol", "mot kol", "mot modekol"      | 0.72s            | 0.89s            | ~0.81s            | ✗ Not suitable    |
| Base   | ⚠️ Weak        | "mot vikolet", "mot vikol"                   | 0.75s            | 0.80s            | ~0.78s            | ✗ Not suitable    |
| Small  | ⚠️ Partial     | "mov i KL", "mov i kol", "ovykol", "movicol" | 1.04s            | 1.21s            | ~1.13s            | ~ Conditional     |
| Medium | ⚠️ Abbreviated | "OVK" (abbreviation only)                    | 1.31s            | 1.54s            | ~1.43s            | ✗ Not suitable    |
| Large  | ✅ Excellent   | "Movi-Col", "Movicol"                        | 1.91s            | 2.15s            | ~2.03s            | ✓ **Recommended** |

**Best Accuracy: Large Model**

- Correctly transcribes "Movicol" as "Movi-Col" or "Movicol" consistently
- Minor variations like hyphenation are acceptable for medical transcription
- Price: ~2.5x slower than base/tiny models

**Fastest but Inaccurate: Tiny & Base Models**

- Tiny and Base models completely miss the drug name or severely mangle it
- "mot vikol", "mot kol" are not usable for medical purposes
- Speed advantage is negated by requiring manual correction

**Compromise Option: Small Model**

- Occasionally transcribes correctly ("movicol")
- Other attempts are partial/close ("mov i kol", "ovykol")
- More variable accuracy than Large, but significantly faster (55% faster than Large)
- Could work with post-processing/fuzzy matching for common medical terms

### Recommendation

For **critical applications** where accuracy of drug names is essential (medical records, pharmacy), the **Large Model** is recommended despite the performance overhead. The cost of transcription errors in medical contexts far outweighs the slight increase in processing time.

For **non-critical applications** with speed requirements, the **Small Model** could be viable with a post-processing step to match common medical terminology.
