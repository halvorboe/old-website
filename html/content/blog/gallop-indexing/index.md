---
title: "Gallop: An analytics database written in Rust"
date: "2020-04-30T22:12:04.284Z"
description: ""
views: 0
draft: true
---
This article is about the database I'm trying to build - *gallop*. If you have not read the first article, please do ;). In this article I'll describe how I use tantivy to efficently index and query timestamped events.

## The challenge
Working with event data is hard. Each event has a timestamp. There are a lot of different queries to consider. 