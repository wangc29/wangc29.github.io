---
layout: post
title: "Understanding Bayesian enrollment modeling"
date: 2026-02-10
category: methods
---

Patient enrollment is one of the most uncertain parts of running a clinical trial. Sites rarely enroll at the rate they promised, and naive forecasting methods tend to be wildly overoptimistic.

## Why Poisson-Gamma?

The model treats each site's enrollment rate as a draw from a Gamma distribution — a natural conjugate prior for the Poisson — giving clean posterior updates and site-level heterogeneity estimates.

## What this looks like in practice

At trial start, you set a prior over enrollment rates based on historical data from similar trials. As sites open and enroll, you update the posterior site-by-site. The model produces a **distribution over completion dates** rather than a single point estimate — which is far more useful for operations planning.

This is exactly what I built at Gilead, where the model was used across 40+ programs to support site allocation and interim reforecasting decisions.
