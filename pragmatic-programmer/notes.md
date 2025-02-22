# The Pragmatic Programmer

## Chapter 1 : A Pragmatic Philosophy

### Topic 1 : It's your life

"It is your life. You own it. You run it. You create it".

> "You can change your organization or change your organization" Martin Fowler

=> Meaning either you change the way your work to find happiness in it or you change of company to find something that better suits you.

### Topic 2 : The Cat Ate My Source Code

We can be proud of our abilities, but we most own up to our shortcomings - our ignorance and our mistakes.

**Team Trust** : Above all, your teams needs to be able to rely on you, and you need to be comfortable relying on each of them as well.

**Take Responsability** : Responsability is something you actively **agree** to. It's a commitment to ensure something is done right. In addition to doing your own personal best, you must analyse the situation for risks that are beoyond your control. You have the rights *not* to take on a responsability for a situation that seems impossible/too risky/ethical implications too sketchy.

If you *do* accept the responsability => expect to be held accountable for it.

! **Instead of excuses, provide options** !

### Topic 3 : The Software Entropy

Entropy : physics term that refers to the amount of "disorder" in a system.

Don't leave "broken windows" (bad designs, wrong decisions, or poor code) unrepaired. Fix each one as soon as it is discovered. If there is insufficient time to fix it properly, then *board it up*.

Don't cause collateral damage just because there's a crisis of some sort. One broken window is one too many.

### Topic 4 : Stone Soup and Boiled Frogs

Work out what you *can* reasonably ask for. Develop it well. Once you've got it, show people, and let them marvel. Then say "of course, it *would* be better if we added..." Pretend it's not important. Sit back and wait for them to start asking you add the functionnality you originally wanted. People find it easier to join an ongoing success. Show them a glimpse of the future and you'll get them to rally around.

Always keep an eye on the big picture. Constantly review what's happening around you, not just what you personally are doing.

### Topic 5 : Good-Enough Software

You can discipline yourself to write software that's good enough - good enough for your users, for future maintainers, for your own peace of mind. You'll find that you are more productive and yours users are happier.

We are simply advocating that users be given an opportunity to participate in the process of deciding when what you've produced is good enough for their needs.

The scope and quality of the system you produce should be discussed as part of that's system's requirements.

**Know When to Stop** : Don't spoil a perfectly good program by overembellishment and overrefinement. Move on, and let your code stand in its own right for a while. It may not be perfect. Don't worry: it could never be perfect.

### Topic 6 : Your Knowledge Portfolio

"Your ability to lean new things is your most important strategic asset. But how do you learn *how* to learn, and how do you know *what* to learn?

**Building Your Portfolio** :

1. Invest regularly : invest in your knowledge *regularly*, even if it's just a small amount.
2. Diversify : Baseline => ins and outs of the particular technology your are working with currently. Don't stop there, expand your minds with differents technologies and don't forget *other* skills (like softskills).
3. Manage risk : Don't put all your technical eggs in one basket (try different languages : trendy like Rust/Elixir, conservative like Java)
4. Buy low, sell high : Learning an emerging techno before it becomes popular can be just as hard as finding an undervalued stock.
5. Review and rebalance : Brush up skills/technos you haven't used in a while.

**Goals Examples** :

- Learn at least one new language every year
- Read a technical book each month
- Read nontechnical books, too
- Take classes
- Participate in local user groupds and meetups
- Experiment with different environments
- Stay current

**Critical Thinking** : It's important to think *critically* about what you read and hear. You need to ensure that the knwoledge in your portfolio is accurate.

How to critically analyze ?

- Ask the "Five Whys"
- Who does this benefit ?
- What's the context ?
- When or Where would this work ?
- Why is this a problem ?

### Topic 7 : Communicate

Treat english (or native tongue) as just another programming language. Write natural language as you would write code : honor the DRY, ETC, automation, and so on.

As with all forms of communication, the trick here is to gather feedback. Don't just wait for questions: ask for them. Look at body language/facial expressions.

Plan what you want to say. Write an outline. Then ask yourself "Does this communicate what I want to my audience in a way that works for them ?". **Refine it until it does**.

Make what you're saying relevant in time, as well as in content. Ask yourself "Is this a good time to talk about...?"

**Make it look good**: There is no excuse today for producing poor-looking printed documents.

**Involve Your Audience**: If possible, involve your readers with early drafts or your document.

**Be a Listener**: Encourage people to talk by asking questions, or ask them to restate the discussion in their own words. Turn the meeting into a dialog.

**Get Back to People**: Always responds to emails and voicemail, even if the response is simply "I'll get back to you later".

**Documentation**: Embrace documentation as an integral part of the overall dev process. But don't comment **everything**.
Commenting code gives you the perfect opportunity to document those elusive bits of project that can't be documented anywhere else.

## Chapter 2 : A Pragmatic Approach

### Topic 8 : The Essence of Good Design

ETC principle : Easier to change. ETC.

You may need to spend a week or so deliberately asking yourself “did the thing I just did make the overall system easier or harder to change?” Do it when you save a file. Do it when you write a test. Do it when you fix a bug.

### Topic 9 : DRY - The Evils of Duplication

> "Every piece of knowledge must have a single, unambiguous, authoritative representation within a system."

### Topic 10 : Orthogonality

Two or more things are orthogonal if changes in one do not affect any of the others.

Major benefits :

- Gain Productivity (smaller components, more reusable, can do more things when combined)
- Reduce Risk (fewer things to change when one thing changes, code is more isolated so less to break)

> Don't rely on the properties of things you can't control.

Be careful when introducing a toolkit or library.

When coding :

- Keep your code decoupled
- Avoid gloabl data
- Avoid similar functions

=> Be constantly critical of your code, and thus, refactor it.

### Topic 11 : Reversibility

Requirements, users, and hardware change faster than we can get the software developed.

Instead of carving decisions in stone, think of them more as being written in the sand at the beach. A big wave can come along and wipe them out at any time.

What you can do is make it easy to change. Hide third-party APIs behind your own abstraction layers. Break your code into components: even if you end up deploying them on a single massive server, this approach is a lot easier than taking a monolithic application and splitting it.

### Topic 12 : Tracer Bullets

Look for the important requirements, the ones that define the system. Look for the areas where you have doubts, and where you see the biggest risks. Then prioritize your development so that these are the first areas you code.

In fact, given the complexity of today's project setup, with swarms of external dependencies and tools, tracer bullets become even more important. *For us, the very first tracer bullet is simply create the project, add a “hello world!,” and make sure it compiles and runs.*

Tracer code advantages :

- Users get to see something working early
- Developers build a structure to work in
- You have an intergration platform
- You have something to demonstrate
- You have a better feel for progress

Prototyping generates disposable code. Tracer code is lean but complete, and forms part of the skeleton of the final system.

### Topic 13 : Prototypes and Post-it Notes

We tend to think of prototypes as code-based, but they don't always have to be. Like the car makers, we can build prototypes out of different materials. Post-it notes are great for prototyping dynamic things such as workflow and application logic. A user interface can be prototyped as a drawing on a whiteboard, as a nonfunctional mock-up drawn with a paint program, or with an interface builder.

You can prototype :

- Architecture
- New functionality in an existing system
- Structure or contents of external data
- Third-party tools or components
- Performance issues
- User interface design

What can we ignore when prototyping ?

- Correctness
- Completeness
- Robustness
- Style

### Topic 14 : Domain Languages

### Topic 15 : Estimating

Scale time estimation as follows :

- 1/15 days => Days
- 3/6 weeks => Weeks
- 8/20 weeks => Months
- 20+ weeks => Think hard before giving an estimate

Understand what's being asked, think about the scope before starting to guess.

Build a Model of the System : What are the major components, and how do they interact ?

Estimate the effort of each component, and the effort of the system as a whole.

Give each component a value then calculate the total effort.

**Keep Track of Your Estimating Progress** : Keep a record of your estimations and if they were accurate. When an estimate turns out to be wrong, find out why.

When asked for an estimate, say "i'll get back to you later".

## Chapter 3 : The Basic Tools
