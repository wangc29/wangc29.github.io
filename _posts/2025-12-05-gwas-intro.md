---
layout: post
title: "GWAS from scratch: what every analyst should know"
date: 2025-12-05
category: tutorial
---

A genome-wide association study (GWAS) tests whether genetic variants — usually single nucleotide polymorphisms (SNPs) — are statistically associated with a trait or disease across a large population.

## The basic setup

For each SNP, we run a regression: `trait ~ SNP + covariates`. The covariates almost always include the top principal components of the genotype matrix to control for population stratification. Do this for millions of SNPs and you get a Manhattan plot — a landscape of association signals across the genome.

## What p < 5×10⁻⁸ actually means

The standard GWAS significance threshold is 5×10⁻⁸, which roughly corresponds to a Bonferroni correction for ~1 million independent tests. Hitting this threshold means the association is unlikely to be a false positive — but it says nothing about causality or effect size.

Fine-mapping, colocalization, and functional annotation are the next steps for turning a signal into biological insight.
