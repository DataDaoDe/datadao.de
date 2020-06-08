
My biggest takeaways from reading the book [An Introduction to Machine Learning Interpretability](https://www.goodreads.com/book/show/39928940-an-introduction-to-machine-learning-interpretability) are listed here.

## 1. Reference for specific ML Interpretability Techniques

This is a decent quick reference for various MLI techniques. It list out 2D-projection techniques such as t-SNE, PCA and correlation graphs. It also gives short and quick one or two sentence summaries of white box modeling techniques such as decision trees and rule based models. It also delves into some visualization techniques and closes with sensitivity analysis and a few ways to test interpretability. When I say short, I do mean short, however, often the descriptions are less than half a page in length.

## 2. Thinking about Global vs. Local interpretability

As I build models, I have a tendency to focus on the metrics for measuring the effectiveness of final predictions such as accuracy, precision, recall, etc. Often times, this can lead me to neglect useful methods for understanding what my model is doing at a local level. When I'm building a model, this means thinking not only of **global** state i.e. the relationship between input variables and target predictions over my entire dataset but also **local** dynamics. Thinking locally will be useful in terms of understanding model behaviour and I think this is often something I tend to neglect or do at a much later time. I tend to only do local investigation during debugging or in the process of improving global performance as opposed to actively engaging in local analysis from the start and this needs to change.

For instance, I think I should look at clusters of input records and their predictions or take predictions and look at those input clusters and build this into my explorative and developmental processes in a more active way.

## 3. Performing Sensitivity Analysis

When it comes to testing ML models we have our datasets and metrics, but if accuracy is improving but our ability to understand the reasoning behind such improvements decreases have we really gained anything? Oftentimes I think the answer will be no, since many models are used specifically for the purposes of augmenting human decision making capabilities.

Sensitivity Analysis perturbes or otherwise changes the input data and observes model behaviour in response to such changes. Building sensitivity analysis into our ML testing and evaluation pipelines from the start can help us recognize crazy deviations in model behaviour and build more robusts tests for outliers or potentially extremely rare events that we may have not yet observed.

## 4. Testing Interpretability

My final takeaway is that I should start testing specifically for interpretability. This means simulating random data and ensuring my models do not generate compelling local explanations or reason codes. Also I can take known signal functions and simulate random data for that function and test that my model accurately represents explanations (both local and global) for the given signal.

Also robust models are not likely to change much given slight changes in the input variables, I should start testing for this as well to ensure that explanations are stable under slight input data modification.