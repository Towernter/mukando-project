# Mukando Tracker

A small website for a mukando (savings club). It shows who is in the group, how much each person pays, how big the pot is, and who receives it each month.

It's plain HTML, CSS and JavaScript, with no framework and no build step, so it's easy to explain to beginners.

| File | What it does |
|---|---|
| `data.js` | **The only file you edit in the demo.** Group name, amount, start month, members. |
| `app.js` | Reads `data.js` and draws the page. |
| `index.html` | The page structure. |
| `style.css` | The look. |

To preview it on your laptop, double-click `index.html`.

---

## Before the session (about 15 minutes; do it today)

1. **Put it on GitHub**
   - Go to github.com → **New repository** → name it `mukando-tracker` → Public → **Create**.
   - Click **uploading an existing file** and drag in all four files plus this README → **Commit changes**.
2. **Deploy it on Vercel**
   - Go to vercel.com → **Sign up / Log in with GitHub**.
   - **Add New… → Project** → find `mukando-tracker` → **Import**.
   - Leave Framework Preset as **Other** and leave the build settings empty → **Deploy**.
   - Within about a minute you get a live link like `mukando-tracker-xxxx.vercel.app`. Open it on your phone too.
3. **Rehearse the live change once**
   - On GitHub open `data.js` → pencil icon (**Edit**) → add a name → **Commit changes**.
   - In Vercel, open **Deployments** and watch the new one go from *Building* to *Ready*. Refresh the site and check the name is there.
   - Remove the test name the same way, so the site is back to 5 members for tonight.
4. **Open these tabs before you go live:**
   1. The slides
   2. The live site
   3. `data.js` on GitHub
   4. The Vercel **Deployments** page
5. **Plan B:** take a screenshot of the site with 5 members and one with 6. If the internet or Vercel is slow tonight, show those and explain what would have happened.

---

## The live demo (about 5 minutes)

| Step | Show | Say |
|---|---|---|
| 1 | The live site | "This is a real website, online right now, for a mukando, which most of us know. I built it before tonight." |
| 2 | Scroll through it | "Five members, US$50 each, a US$250 pot, and it knows whose turn it is this month." |
| 3 | The GitHub repo | "The code lives on GitHub. Every change is saved with a note, so nothing is ever lost." |
| 4 | Vercel | "Vercel is connected to GitHub. Whenever I save a change, it puts the new version online for me." |
| 5 | Ask the chat | "Who wants to join our mukando? Type your first name in the Zoom chat." |
| 6 | Edit `data.js` on GitHub | Add the first name from the chat to `members`. Optionally change `contribution` to `60`. |
| 7 | Commit changes | Use a message like `Add Nyasha to the mukando`. "That message is the record of what I changed and why." |
| 8 | Vercel Deployments | "Watch: it's building... ready." It usually takes under a minute. Fill the time by explaining that this is the same flow real teams use. |
| 9 | Refresh the live site | The new member, the bigger pot and the longer cycle all update. "Anyone with the link sees this, anywhere in the world." |

**Where AI fits (say this while it builds):** "I could ask AI to add a feature, like a reminder of who's next. It would write the code quickly. My job is to understand it, test it, and make sure it's right before I commit it."

---

## Ideas if someone asks "what next?"

- Show how much each member has paid so far
- Let members log in and mark their payment as done
- Send a WhatsApp reminder the day before payout
