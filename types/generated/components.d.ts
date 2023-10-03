import type { Schema, Attribute } from '@strapi/strapi';

export interface MarksExperiment extends Schema.Component {
  collectionName: 'components_marks_experiments';
  info: {
    displayName: 'Experiment';
    description: '';
  };
  attributes: {
    record: Attribute.Integer;
    output: Attribute.Integer;
    viva: Attribute.Integer;
    total: Attribute.Integer;
    ExpNo: Attribute.Integer;
    Submitted_Date: Attribute.Date;
  };
}

declare module '@strapi/strapi' {
  export module Shared {
    export interface Components {
      'marks.experiment': MarksExperiment;
    }
  }
}
