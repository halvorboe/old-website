---
title: "Understanding Bigtable"
date: "2020-04-20T23:12:04.284Z"
description: ""
views: 0
draft: true
---

<!-- Introduction 
Explaining what this article is and what Bigtable is.
-->

Bigtable is one of many hosted database solutions offered on Google Cloud. Plenty of other sources exist on what database to use. This article will explore the inner workings of Bigtable - as described in the paper.

If you have the time to read the paper, I would advise you to do that. It will explain it better than I ever can. The main target of this article are people who want a dummed down and "probably not accurate" explaination.

Firstly, let's take a look at the abstract of the paper:

> Bigtable is a distributed storage system for managing structured data that is designed to scale to a very large size: petabytes of data across thousands of commodity servers. Many projects at Google store data in Bigtable, including web indexing, Google Earth, and Google Finance. These applications place very different demands on Bigtable, both in terms of data size (from URLs to web pages to satellite imagery) and latency requirements (from backend bulk processing to real-time data serving). Despite these varied demands, Bigtable has successfully provided a flexible, high-performance solution for all of these Google products. In this paper we describe the simple data model provided by Bigtable, which gives clients dynamic control over data layout and format, and we describe the design and implementation of Bigtable.

Basicly - Bigtable is a distributed datastore that scales well for a lot of different usecases. 

... 

So how does it scale.






### Further reading
[Paper]("https://static.googleusercontent.com/media/research.google.com/en//archive/bigtable-osdi06.pdf")

[Summary of paper]("http://courses.cs.vt.edu/cs5204/fall11-kafura/Student-Presentations/Bigtable-Notes.pdf")

[Google Cloud - product page]("https://cloud.google.com/bigtable")

[Google Cloud - documentation]("https://cloud.google.com/bigtable/docs")
