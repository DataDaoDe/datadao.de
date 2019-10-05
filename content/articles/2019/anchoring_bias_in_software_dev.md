+++
title = "How Anchoring effects Software Development"
summary = "problems and methods for dealing with anchoring bias"
date = 2019-10-05
template = "article.html"
+++


### What is Anchoring?

Anchoring is a heuristic and cognitive bias people have which is used to simplify thinking and is on display when we need to make estimations. It involves using an already given starting point as a first approximation for constructing and further refining an estimation.

A classic experiment demonstrating this behavior is to have two groups of students in a classroom estimate the probability of some unknown quantity, say the number of countries who have achieved space travel. Give one group a low percentage like 10% and the other a high starting point like 90% and ask them both to estimate the true percentage. The group with the low starting point will give a low estimate such as 25% and the 90% group will give a comparatively higher estimate, perhaps 60%. 

Even though the initial numbers were compeletely arbitrary and it was communicated that they were arbitrary, nonetheless they served as anchors acting like inertia to hold down future approximations made by the students. [[2]](#ref2)

> **Key Insight #1** - Anchoring acts like inertia or drag constraining estimations around its gravitational center.

Some studies have also indicated that even being trained to have an awareness of anchoring does not fully compensate for these effects. That is, the bias persist even after subjects are informed of it and instructed on how to deal with it.  

### How can Anchoring effect Software Development?

First, a growing body of research has shown that anchoring effects the planning and estimation phase of software development, for instance, Jørgensen and Sjøberg (2004) conducted a study in which they gave CS students and professionals information about customer expectations for a software project. One group was told the clients expected the project to be finished in 50 hours, the other in 1000 hours. Both groups were informed that the client new very little about the time needed and that this information should be considered irrelevant. Still, the anchors influenced both students and professionals, with those estimates of the 1000 hours group much higher than the 50 hours group. Similar research has been replicated by Aranda and Easterbrook (2005), König 2005, and interestingly in Jørgensen and Grimstad 2008, where the later found anchoring in non-numeric values, for instance, describing a project as "minor extension" led to significantly low estimates than describing the same project with the wording "new functionality". [[1]](#ref1)

So what is the take away?

Well, in the context of agile methodologies this is an interesting insight for product owners - to get more accurate estimates for time till task completion, you probably shouldn't make deadlines, timelines or time-based planning goals related to tickets known to team members before you get estimates - if the team knows the ticket has to be finished in 1 week, their estimates are likely going to biased around this anchor, which will lead to lower overall accuracy. Also be aware of how you describe your tickets, and try to avoid language which colors the quality of the ticket (minor change, or major feature for example) and could effect its estimation.

> **Key Insight #2** - for more accurate developer estimates avoid qualitative language when describing tickets and don't provide time to ticket completion expectations before getting an estimation.

### How can Anchoring effect Data Science?

Often data scientists and analysts need to take up the work someone else has done or they need to update a series of judgements made by another person or even themselves in the past. This is a prime case where the estimates and calculations done by the predecessor can have an anchoring effect, coloring the data scientist's new judgement.

One way to possibly mitigate against this problem is to start from a blank slate and attempt to consciously ignore and disregard the predecessor's estimates. To my knowledge, however, this isn't something that has any body of scientific research supporting it, nevertheless, it could be a useful strategy.

> **Key Insight #3** - to alleviate anchoring in data estimates, disregard previous judgements and rethink a problem from scratch.


### Summary

Succinctly, anchoring is the bias of the first impression. The first value, judgement or piece of information we get about a new subject biases our perception and estimation faculties related to this new thing. It can negatively effect software development project estimates and bias judgements made by analysts. Although some evidence exists that says we can't do much to mitigate against it, being cognizant of the bias may help teams to catch it in one another and to take precautions against it during the project planning phase.

#### References

1. <a target="_blank" href="https://www.sciencedirect.com/science/article/pii/S0164121215000618" name="ref1">Numerical anchors and their strong effects on software development</a>
2. <a target="_blank" href="https://www.cia.gov/library/center-for-the-study-of-intelligence/csi-publications/books-and-monographs/psychology-of-intelligence-analysis/art15.html" name="ref2">Biases in Estimating Probabilities</a>