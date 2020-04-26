---
title: "Gallop: An analytics database written in Rust"
date: "2020-04-27T22:12:04.284Z"
description: ""
state: "🏖"
---

<!--
I've been looking for a good solution for analytics for "complex.codes". There are a lot of good solutions for analytics out there. Some of them are more commercially focused, like "Heap Analytics" and "Amplitude". Some rely on data mining to be commercially viable - "Google Analytics". Some are open source, with some other strategy for making money. All of these solutions are great and would work perfectly well for this blog. That is why I have decided to make my own solution, because this blog is terrible.-->

Collecting information about the people visiting your site is crutial - if you want to know who is visiting your site. There are a lot of great solutions to this problem out there. The most popular one is "Google Analytics". Their 'free' package will be good enought for most people. The catch is that Google aggregates the data and uses it for marketing purposes. I don't like that. So I decided to create my own "Google Analytics".

### But wait... have you considered other options?

"Google Analytics" is far from the only analytics platform out there. I have used "Heap Analytics" and "Amplitude". Both are great. I have also considered "Simple Analytics" - a project I read about on HackerNews a while ago. All of those solutions would be better than what I'm creating. 

As you now understand, this is not about finding a good solution. It's about creating a terrible solution from scratch and learning from it.

### What is an analytics platform?

The main function of analytics platforms is the aggregation of events. That means collecting thousands, millions, billions or even trillions of events and doing aggregations on all of them. Aggregation means doing a calculation based on a set of events. 

```rust
struct Event {
    id: string,
    timestamp: u64,
    browser: string,
}
```

## So whats your plan?
Tantivy is a really cool library for search. I've been trying to contribute to it, and will try to keep my contributions up. Most of my work has gone into the simple operation of making search go backwards. Anyways, it is a good library for this task.
