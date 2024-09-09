import type { Schema, Attribute } from '@strapi/strapi';

export interface GeneralTag extends Schema.Component {
  collectionName: 'components_general_tags';
  info: {
    displayName: 'tag';
  };
  attributes: {
    tag_name: Attribute.String;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'general.tag': GeneralTag;
    }
  }
}
