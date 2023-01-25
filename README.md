# Cypress boilerplate with visual regression and simple test example


## Description

Use this boilerplate if you need quick start with Cypress tests and visual regression fully integrated with it.

## Getting Started

### Dependencies

* Cypress v12.3.0
* Node v18.12.1
* Typescript
* Cypress visual regression v1.7.0
* Git

### Installing

* ``` git clone https://github.com/wmiklasewicz/cypress-visual-regression-boilerplate.git ```
* ``` cd cypress-visual-regression-boilerplate ```
* ``` npm i ```

### Executing

* Executing e2e tests from commandline
  ``` cypress run --browser chrome --spec **/e2e/** ```
* Executing visual regression tests from commandline
  ``` cypress run --browser chrome --spec **/visual-regression/** ```
* Executing tests from cypress UI
  ``` cypress open ``` and pickup project/tests from the opened UI

  ![UI](/resources/cypressUI.png "UI")

### Visual test reports

Reports generated from visual regression tests are located under ``` cypress-visual-report ``` folder

  ![Visual regression](/resources/cypressVisualRegression.png "Visual regression")

## Authors

Wioletta Mikłasewicz  

