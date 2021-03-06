import React from 'react';
import { storiesOf } from '@kadira/storybook';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import { StoryPanel, StoryTitle, Example } from '../../stories';
import ArrowTree from '../../../material-ui-extension/tree/arrow/arrow_tree';


//默认的测试数据
const testTreeData = [
  {
    name: '父节点1',
    onClick: () => {
    },
    children: [{
      name: '叶子节点',
      onClick: () => {
      },
    }],
  },
  {
    name: '父节点2',
    expanded: true,
    onClick: () => {
    },
    children: [
      {
        name: '父节点21',
        onClick: () => {
        },
        children: [
          {
            name: '叶子节点',
            onClick: () => {
            },
          },
        ],
      },
      {
        name: '父节点22',
        onClick: () => {
        },
        children: [],
      }
    ],
  },
  {
    name: '父节点3',
    onClick: () => {
    },
    children: [],
  }
];

//加载Divider
storiesOf('Tree', module)
  .addDecorator(story => (
    <MuiThemeProvider muiTheme={getMuiTheme()}>
      {story()}
    </MuiThemeProvider>
  ))
  .addWithInfo(
    'ArrowTree',
    `
      多级箭头可展开树
    `,
    () => (
      <StoryPanel>
        <StoryTitle label="ArrowTree" description="多级箭头可展开树"/>
        <section className="examples">
          <Example label="默认测试数据">
            <ArrowTree treeData={testTreeData}/>
          </Example>
          <Example label="允许多级展开">
            <ArrowTree treeData={testTreeData} multiple={true}/>
          </Example>
        </section>
      </StoryPanel>
    ),
    {inline: false, propTables: [ArrowTree]});

