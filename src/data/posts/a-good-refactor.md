---
image: '../../assets/posts/a-good-refactor.webp'
title: 'Refactoring vs Rebuilding: Which Path to Better Code?'
date: 2024-12-01
readingTime: 5
summary: 'When faced with the challenge of improving an existing application, one of the toughest decisions is whether to refactor the code or rebuild it from scratch.'
---

I admit, when it comes to choosing between implementing new features from scratch or refactoring existing code, I prefer the former option, but it's not always the right choice.
<br/><br/>
So how to choose?<br/><br/>
I think there is no 'perfect recipe', but over time I have learned to consider 4 key points:

- **State of existing code**: If the code is in poor condition and hard to maintain, a rebuild might be preferable.
- **Available time and resources**: Refactoring is better suited for limited resources or tight deadlines.
- **Technical debt**: Assess how much "weight" the inherited code is adding to your development process.
- **Future flexibility**: If the current foundation doesn’t allow for rapid evolution, rebuilding could be more strategic.

### New 3Bee blog

Not long ago, I took part in an activity that had all the makings of a 'new project': creating the **new** 3Bee **blog**.<br/><br/>

Among the various requests, the bulk of the work can be summarized in 3 points:

- New design system
- Better content management
- Improved SEO

<br/>Initially, I was already thinking about how to structure the new project, which technologies to use, how to organize the code... but after analyzing the current codebase, I had to change my mind: the code already had a solid and rather clean structure, which would make refactoring faster and less risky compared to a complete rebuild.

### Challenges and Results

Fortunately, the backend part (**Trpc**) was already quite good, which allowed me to start with the frontend modifications right away. So, after a short period of coordination with the design team, I implemented the new design system rather quickly. This provided a new look: more modern, fresh, and clean! ([You tell me](https://blog.3bee.com)) 😉<br/><br/>

I am not an expert in performance, but I've learned a lot: through some adjustments (especially by making the content as static as possible and caching various elements) and the implementation of general best practices for Core Web Vitals, I managed to increase the **Lighthouse** score by 30% and reduce the site's loading time.<br/><br/>

Additionally, from a developer experience perspective, with the new features of Next.js (**ISR**), I significantly improved the deployment speed, reducing the build time from almost 40 minutes to less than 15! 🚀
