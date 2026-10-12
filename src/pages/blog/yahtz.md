---
layout: ../../layouts/ArticleLayout.astro
title: "Making Yahtz the game"
date: "2026-10-08"
---

Yahtz is a Yahtzee inspired game made with the [Usagi Engine](https://usagiengine.com/). It was made for my wife, who has a soft spot for the game! I wanted to practice using AI in an interview style so that I could develop this rapidly. I purposefully created Yahtz so that it was small, but expandable!

## Giving the rolls somewhere to go

The original game of Yahtzee has you rolling 'down the line' meaning that previous turns don't really impact the current round. By introducing a 5 x 5 grid, you can place dice to try and make the best Yahtzee hands to maximize points!

To assist in making high scores, there are two extra ways to make points. Jokers and Events.

Jokers are cards that are chosen at the beginning of the game and impact how you play. For example: 'Crossroads' allows you to score the diagonal region of the board, offering more ways to score. Other Jokers can give you bonuses by using certain dice like evens or odds.

Events are different. There are two kinds, game long events (which are harder) provide more points. Each hand has a small event that changes each round. These events each offer scoring options during play!

## Building through questions

I chose Usagi as it was small and cross platform capable. I run Windows, but my wife uses a Mac and I wanted her to be able to run the game on her machine! Additionally, Usagi uses Lua, a small programming language that is easy to use.

For this game, I would enter "grilling" sessions where I would answer questions about the game. Once we had a clear vision on a certain feature, I would let AI flesh out the feature. If it was slightly off, I would course correct and iterate some more. But it always tied back to design docs, ensuring the AI was going in the desired direction!

## The first playthrough

My wife loved the game... however there were some issues with certain parts of the UI being unclear, or how certain things worked. With more iteration we finally got to a place where we were content (what you can play in the [projects section](/games/yahtz/index.html)).

One of the issues that was found early on was the difference between holding and placing dice, the game had some labels but they were not very clear at all... Now when placing dice you can clearly differentiate between holding and placing them!

## The flaws

This game is definitely a work in progress and many of the cards and features have not been played fully, meaning there are gaps where some Jokers or events are weaker than others. But that is a part of the learning process!

This process as a whole was quite enjoyable. The small scope allowed this to be a manageable side project that we could work on over a weekend. Definitely inspired to do some more in the future!
