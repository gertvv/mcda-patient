'use strict';
define(function(require) {
  var criteriaPFS = ['PFS', 'grade2SE', 'grade34SE'];
  var criteriaOS = ['OS', 'grade2SE', 'grade34SE'];
  var steps = [
  {
    id: 'about',
    title: 'Information about the study',
    handler: require('steps/introduction'),
    templateUrl: 'about.html'
  }, {
    id: 'consent',
    title: 'Consent form',
    handler: require('steps/consent'),
    templateUrl: 'consent.html'
  }, {
    id: 'demographics',
    title: 'About yourself',
    handler: require('steps/demographics'),
    templateUrl: 'demographics.html'
  }, {
    id: 'intro-pfs',
    title: 'Trade-offs Involving Time to Progression',
    handler: require('steps/introduction'),
    templateUrl: 'intro-pfs.html',
    criteriaFilter: criteriaPFS
  }, {
    id: 'ordinal-swing-pfs',
    title: 'What improvement matters most to you?',
    handler: require('steps/ordinalSwing'),
    templateUrl: 'ordinalSwing.html',
    criteriaFilter: criteriaPFS,
    output: 'ordinal-pfs'
  }, {
    id: 'bisection-swing-pfs',
    title: 'How much do you prefer one effect over another?',
    handler: require('steps/bisectionSwing'),
    templateUrl: 'bisectionSwing.html',
    criteriaFilter: criteriaPFS,
    ordinal: 'ordinal-pfs',
    output: 'bisection-pfs'
  }, {
    id: 'intro-os',
    title: 'Trade-offs Involving Survival Time',
    handler: require('steps/introduction'),
    templateUrl: 'intro-os.html',
    criteriaFilter: criteriaOS
  }, {
    id: 'ordinal-swing-os',
    title: 'What improvement matters most to you?',
    handler: require('steps/ordinalSwing'),
    templateUrl: 'ordinalSwing.html',
    criteriaFilter: criteriaOS,
    output: 'ordinal-os'
  }, {
    id: 'bisection-swing-os',
    title: 'How much do you prefer one effect over another?',
    handler: require('steps/bisectionSwing'),
    templateUrl: 'bisectionSwing.html',
    criteriaFilter: criteriaOS,
    ordinal: 'ordinal-os',
    output: 'bisection-os'
  }, {
    id: 'difference-pvf',
    title: 'How does the starting condition influence your opinion of an improvement?',
    handler: require('steps/differencePvf'),
    templateUrl: 'differencePvf.html',
    explainUrl: 'explainDifferencePvf.html',
    criteriaFilter: ['PFS', 'OS', 'grade2SE', 'grade34SE']
  }];

  return {
    steps: steps
  };
});
