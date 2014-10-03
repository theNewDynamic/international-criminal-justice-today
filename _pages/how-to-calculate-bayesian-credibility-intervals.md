---
published: true
title: How to Calculate Bayesian Credibility Intervals
permalink: "/ipsos-appendix/"
---

The calculation of credibility intervals assumes that Y has a binomial distribution conditioned on the parameter θ\, i.e., Y|θ~Bin(n,θ), where n is the size of our sample. In this setting, Y counts the number of "yes", or "1", observed in the sample, so that the sample mean (y ̅) is a natural estimate of the true population proportion θ. This model is often called the likelihood function, and it is a standard concept in both the Bayesian and the Classical framework. The Bayesian 1 statistics combines both the prior distribution and the likelihood function to create a posterior distribution. The posterior distribution represents our opinion about which are the plausible values for θ adjusted after observing the sample data. In reality, the posterior distribution is one's knowledge base updated using the latest survey information. For the prior and likelihood functions specified here, the posterior distribution is also a beta distribution (π(θ/y)~β(y+a,n-y+b), but with updated hyper-parameters.

Our credibility interval for _θ_ is based on this posterior distribution. As mentioned above, these intervals represent our belief about which are the most plausible values for _θ_ given our updated knowledge base. There are different ways to calculate these intervals based on π(θ/y). Since we want only one measure of precision for all variables in the survey, analogous to what is done within the Classical framework, we will compute the largest possible credibility interval for any observed sample. The worst case occurs when we assume that _a_=1 and _b_=1 and y=_n/2_. Using a simple approximation of the posterior by the normal distribution, the 95% credibility interval is given by, approximately:

For this poll, the Bayesian Credibility Interval was adjusted using standard weighting design effect 1+L=1.3 to account for complex weighting2

Examples of credibility intervals for different base sizes are below. Ipsos does not publish data for base sizes (sample sizes) below 100.

| **Sample size** | **Credibility intervals** |
| --- | --- |
| 2,000 | 2.5 |
| 1,500 | 2.9 |
| 1,000 | 3.5 |
| 750 | 4.1 |
| 500 | 5.0 |
| 350 | 6.0 |
| 200 | 7.9 |
| 100 | 11.2 |

_1 __Bayesian Data Analysis, Second Edition, Andrew Gelman, John B. Carlin, Hal S. Stern, Donald B. Rubin, Chapman & Hall/CRC | ISBN: 158488388X | 2003_

_2 __Kish, L. (1992). Weighting for unequal Pi . Journal of Official, Statistics, 8, 2, 183200._
