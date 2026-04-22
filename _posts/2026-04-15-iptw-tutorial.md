---
# ================================================================
# _posts/2026-04-15-iptw-tutorial.md
# ================================================================
# THIS IS A BLOG POST FILE.
#
# FILENAME RULE: must follow this exact format:
#   YYYY-MM-DD-your-post-title.md
#   e.g. 2026-05-01-my-new-post.md
#
# FRONT MATTER (the block between --- lines):
#   layout:   always "post" — don't change this
#   title:    your post title (shows in the browser tab and page heading)
#   date:     publication date (YYYY-MM-DD format)
#   category: one of: tutorial / methods / career
#             (must match a filter button in blog.md)
#
# WRITING YOUR POST:
#   Everything below the second --- is your post content.
#   Write in plain Markdown — no HTML needed.
#
#   Markdown cheat sheet:
#     ## Heading        → section heading
#     **bold text**     → bold
#     *italic text*     → italic
#     [link text](url)  → hyperlink
#     - item            → bullet list
#     1. item           → numbered list
#     `inline code`     → inline code (monospace)
#     ```r              → code block (replace r with your language)
#     your code here
#     ```
# ================================================================
layout: post
title: "A practical intro to IPTW for causal inference"
date: 2026-04-15
category: tutorial
---

Inverse probability treatment weighting (IPTW) is one of the most useful tools in observational research. The core idea: reweight observations so that treated and untreated groups look similar on measured confounders — mimicking what a randomized trial would give us.

## When to use IPTW

Use IPTW when you have observational data and want to estimate a causal treatment effect, but treatment assignment is confounded by covariates. It works well when the propensity model is well-specified and positivity holds — meaning everyone has a non-zero chance of receiving either treatment.

## The basic steps in R

First, estimate the propensity score using logistic regression:

```r
ps_model <- glm(treatment ~ age + sex + comorbidity,
                data = df, family = binomial())
df$ps <- predict(ps_model, type = "response")
```

Then compute the inverse probability weights for the average treatment effect (ATE):

```r
df$weight <- ifelse(df$treatment == 1,
                    1 / df$ps,
                    1 / (1 - df$ps))
```

Finally, fit a weighted outcome model to get your causal estimate. Always check for overlap and trim extreme weights — they can inflate variance significantly.
