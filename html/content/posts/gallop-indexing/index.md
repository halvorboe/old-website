---
title: "Gallop: Indexing timestamps at lightspeed"
date: "2020-04-30T22:12:04.284Z"
description: ""
views: 0
draft: true
---

<!--
Prewriting:
Idea: Writing about how search libraries can be used for timestamps.
More ideas:
- Tradeoffs
- What libraries exists
- What if the data does not fit in memory.
- What if the events are the same.
- Do you need to store induvidual events.
- Can you update events tantivy.
-->

This article is about the database I'm trying to build - _gallop_. If you have not read the first article, please do ;). In this article I'll describe how I use tantivy to efficently index and query timestamped events.

## The challenge

Working with event data is hard. Each event has a timestamp. There are a lot of different queries to consider.

## Solution

Creating indexes for days, hours, months.
