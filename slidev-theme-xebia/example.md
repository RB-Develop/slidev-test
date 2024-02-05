---
theme: ./
background: /pexels-mizuno-k-12899191.jpg
backgroundPosition: 100% 70%
---

# Slidev Xebia Theme Starter

Presentation slides for developers

---

# What is Slidev?

Slidev is a slides maker and presenter designed for developers.

- 📝 **Text-based** - focus on the content with Markdown, and then style them later
- 🎨 **Themable** - theme can be shared and used with npm packages
- 🧑‍💻 **Developer Friendly** - code highlighting, live coding with autocompletion
- 🤹 **Interactive** - embedding Vue components to enhance your expressions
- 🎥 **Recording** - built-in recording and camera view
- 📤 **Portable** - export into PDF, PNGs, or even a hostable SPA
- 🛠 **Hackable** - anything possible on a webpage

<br>
<br>

Read more about [Why Slidev?](https://sli.dev/guide/why)

---

# Navigation

Hover on the bottom-left corner to see the navigation's controls panel.

| Keyboard Shortcuts | |
| ---------------------------------------------------- | --------------------------- |
| <kbd>space</kbd> / <kbd>tab</kbd> / <kbd>right</kbd> | next animation or slide     |
| <kbd>left</kbd> / <kbd>shift</kbd><kbd>space</kbd>   | previous animation or slide |
| <kbd>up</kbd>                                        | previous slide              |
| <kbd>down</kbd>                                      | next slide                  |

You can also create buttons and hook up navigation in-page: 

<span @click="$slidev.nav.next" class="btn-primary">
Next page <carbon:arrow-right class="inline"/>
</span>

---
layout: two-column
---

# All layouts

A lot of layouts are available out of the box, all styled with the official Xebia presentation theme.

::left::

- cover
- cover-dark
- toc
- toc-two-column
- intro 
- intro-duo
- default
- two-column 
- three-column 
- three-column-dark

::right::

- image-left 
- image-left-dark 
- image-left-variant 
- image-right
- image-right-dark
- image-right-variant
- chapter
- thank-you
- thank-you-dark
- end

::footer::

The following pages contain examples of all layouts.

---
layout: cover
background: /pexels-mizuno-k-12899149.jpg
---

# Layout `cover`

The cover slide. If not overridden, this will be used for the first slide.

---
layout: cover-dark
background: /pexels-junior-teixeira-2047905.jpg
backgroundSize: 150%
---

# Layout `cover-dark`

A variation of the cover. Note that background properties can be manipulated as 
well.

---
layout: toc
background: /pexels-junior-teixeira-2047905.jpg
---

# Layout `toc`

## Subtitle 

Provide a table of contents of your presentation.

---
layout: toc-two-column
---

# Layout `toc-two-column`

::left::

## Left column

Variant of the table of contents with two columns.

::right::

## Right column

Lorem ipsum dolor sit amet, consectetur adipiscing elit.

---
layout: intro
speakerImage: /pexels-emmy-e-2381069.jpg
---

# Layout `intro`

::speaker::

## Janet Doe

### Senior Consultant

Used for personal introduction. Write some fun content about a speaker and
their hobbies. 

---
layout: intro-duo
speakerLeftImage: /pexels-emmy-e-2381069.jpg
speakerRightImage: /pexels-andrea-piacquadio-3771807.jpg
---

# Layout `intro-duo`

::speaker-left::

## Janet Doe

### Senior Consultant

Some content.

::speaker-right::

## John Doe

### CTO

Some other content.

---

# Layout `default`

This is the fallback when layout is not specified.

- Use this layout for most of your slides.
- Lists are stylized.
- You can use **bold** or *italic* text.

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae nisi
nec nunc ultricies aliquam. Donec auctor, nisl vitae aliquet
consectetur, nunc nisl ultricies nunc, vitae aliquam nunc nisl.

---
layout: two-column
---

# Layout `two-column`

::left::

<img src="/Idea.svg" class="w-16 mb-4"/>

## Left column

For two column layouts with an optional header.

::right::

<img src="/Laptop.svg" class="w-16 mb-4"/>

## Right column

Lorem ipsum dolor sit amet, consectetur adipiscing elit.

::footer::

Find Xebia icons [here](https://xebiagroup.sharepoint.com/:f:/r/sites/XebiaCreativeService/Gedeelde%20documenten/Design_Space/Xebia_Brand/Brand%20Assets/Icons)

---
layout: three-column
---

# Layout `three-column`

::one::

| Title
| - 
| Create a table in Xebia style using Markdown table syntax.

::two::

| Add images
| -
| ![Some rando guy smoking a cigar](/pexels-andrea-piacquadio-3771807.jpg)

::three::

| Colors
| -
| Variation of color per column

---
layout: three-column-dark
---

# Layout `three-column-dark` <br/> with explicit line break in title

For three column layouts with an optional header.

::one::

This is the first column.

::two::

This is the second column.

::three::

Third column.

- You can create lists etc.
- Another item
- Another item

---
layout: image-right
background: /pexels-lex-photography-1109543.jpg
---

# Layout `image-right`

## Subtitle

Slide with image on the right side. Text can be long and is wrapped to the
space available.

<br/>

Find Xebia photos [here](https://xebiagroup.sharepoint.com/:f:/r/sites/XebiaCreativeService/Gedeelde%20documenten/Design_Space/Xebia_Brand/Brand%20Assets/Photo)

---
layout: image-right-dark
background: /pexels-lex-photography-1109543.jpg
---

# Layout `image-right-dark`

## Subtitle

A variation of the image-right layout. 

---
layout: image-right-variant
background: /pexels-lex-photography-1109543.jpg
---

# Layout `image-right-variant`

::content::

## Subtitle

A blob variation of the image-left layout. 

Note: requires a `content` section.


---
layout: image-left
background: /pexels-lex-photography-1109543.jpg
---

# Layout `image-left`

## Subtitle

Slide with image on the left side. Text can be long and is wrapped to the
space available.

---
layout: image-left-dark
background: /pexels-lex-photography-1109543.jpg
---

# Layout `image-left-dark`

## Subtitle

A dark variation of the image-left layout. 

---
layout: image-left-variant
background: /pexels-lex-photography-1109543.jpg
---

# Layout `image-left-variant`

::content::

## Subtitle

A blob variation of the image-left layout. 

Note: requires a `content` section.

---
layout: chapter
background: /pexels-lex-photography-1109543.jpg
---

Chapter 42

# Layout `chapter`

---
layout: chapter-dark
background: /pexels-lex-photography-1109543.jpg
---

Chapter 21

# Layout `chapter-dark` with a long title

---
layout: thank-you
background: /pexels-lex-photography-1109543.jpg
---

# Layout `thank-you`

Thanks and so long!

---
layout: thank-you-dark
background: /pexels-lex-photography-1109543.jpg
---

# Layout `thank-you-dark`

Thanks and so long!

---
layout: end
---

# Layout `end`

Used to end the presentation.

---
layout: chapter
background: /pexels-hendrik-b-744321.jpg
backgroundPosition: left
---

# Slidev specific features

---

# Code highlighting

Use highlighted code snippets.

```ts {all|1-5|6-}
interface User {
  id: number;
  firstName: string;
  lastName: string;
  role: string;
}

function updateUser(id: number, update: Partial<User>) {
  const user = getUser(id);
  const newUser = { ...user, ...update };
  saveUser(id, newUser);
}
```

---

# Mermaid graph diagrams

Quickly add diagrams with Mermaid.

```mermaid
graph LR
  A[Christmas] -->|Get money| B(Go shopping)
  B --> C{Let me think}
  C -->|One| D[Laptop]
  C -->|Two| E[iPhone]
  C -->|Three| F[Car]
```

---

# Mermaid sequence diagrams

```mermaid
sequenceDiagram
  participant Alice
  participant Bob
  Alice->>John: Hello John, how are you?
  John-->>Alice: Great!
  John->>Bob: How about you?
  Bob-->>John: Jolly good!
```

---

# Mermaid state diagrams

Create elaborate state diagrams.

```mermaid
stateDiagram
  direction LR

  [*] --> A
  A --> B
  B --> C
  state B {
    direction LR
    a --> b
  }
  B --> D
```

---

# Mermaid Gantt chart

```mermaid
gantt
    title A Gantt Diagram
    dateFormat YYYY-MM-DD
    section Section
        A task          :a1, 2014-01-01, 30d
        Another task    :after a1, 20d
    section Another
        Task in Another :2014-01-12, 12d
        another task    :24d
```

---

# Embed tweets

<Tweet id="1619536044311089154" :scale="0.5" />

---

# Embed videos

<Youtube id="eW7v-2ZKZOU" :width="880" :height="360" />

---

# Math equations

Inline equations: $\sqrt{a^2+b^2} = c^2$

Block equations:

$$
\begin{equation}
\zeta (2n ) = (-1)^{n+1} \frac{ B_{2n}(2\pi)^{2n} }{ 2(2n)! }
\end{equation}
$$

---
layout: center
class: "text-center"
---

# Learn more about Slidev

[Documentation](https://sli.dev) / [GitHub repo](https://github.com/slidevjs/slidev)
