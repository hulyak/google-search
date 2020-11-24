import React from 'react';

import Page from '.';

export default {
  title: 'Pages/Search',
  component: Page
};

const Template = (args) => <Page{...args} />;

export const Primary = Template.bind({});
Primary.args = {
  location:{ 
    search: '?query=test'
  }
};

export const NoData = Template.bind({});
NoData.args = {
  location:{ 
    search: '?query=dbfcsdjfbsd'
  }
};