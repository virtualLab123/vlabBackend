import type { Schema, Attribute } from '@strapi/strapi';

export interface MarksExperiment extends Schema.Component {
  collectionName: 'components_marks_experiments';
  info: {
    displayName: 'Experiment';
    description: '';
  };
  attributes: {
    observation: Attribute.Integer;
    output: Attribute.Integer;
    viva: Attribute.Integer;
    total: Attribute.Integer;
    ExpNo: Attribute.Integer;
    Submitted_Date: Attribute.Date;
    code: Attribute.RichText;
    outputContent: Attribute.String;
    hash: Attribute.String;
    lab: Attribute.String;
  };
}

export interface MarksProgress extends Schema.Component {
  collectionName: 'components_marks_progresses';
  info: {
    displayName: 'progress';
    description: '';
  };
  attributes: {
    experiment: Attribute.String;
    codeId: Attribute.String;
    labCode: Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Shared {
    export interface Components {
      'marks.experiment': MarksExperiment;
      'marks.progress': MarksProgress;
    }
  }
}
