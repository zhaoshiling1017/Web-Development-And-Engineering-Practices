// @flow
import React, { Component, PropTypes } from 'react';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';

const StyledMenuItem = (props) => (
  <MenuItem
    style={{
      padding:'0px',
      lineHeight:'24px'
    }}
    innerDivStyle={{
      padding:'0',
      fontSize:'10px'
    }}

    {...props}/>
)

/**
 * 组件IconMenuList 显示固定数目的内容
 */
export default class IconMenuList extends Component {

  static propTypes = {

    //列表元素
    items: PropTypes.arrayOf(PropTypes.shape({
      //名称
      name: PropTypes.string,
      //点击回调
      onClick: PropTypes.func
    })),

    //最大的显示元素数目
    max: PropTypes.number

  };

  static defaultProps = {
    items: [1, 2, 3, 4, 5, 6, 7, 8, 9].map((i) => {

      return {
        name: `Type something${i}.stl`,
        onClick: () => {
        }
      };

    }),
    max: 2
  };

  /**
   * @function 默认构造函数
   * @param props
   */
  constructor(props) {
    super(props);
  }

  /**
   * @function 组件挂载完成回调
   */
  componentDidMount() {

  }

  /**
   * @function 默认渲染函数
   */
  render() {

    const {items, max} = this.props;

    //将输入的items切分为两个数组
    let showItems;

    let hiddenItems;

    if (items.length > max) {
      //如果数组长度大于最大值
      showItems = items.splice(0, max);
      //余下的隐藏起来
      hiddenItems = [].concat(items);
    } else {
      showItems = items;
    }

    return <section className="icon_menu_list__container" style={{position:'relative'}}>
      <div style={{display:'flex',flexDirection:'column'}}>
        {showItems.map((item, index) => (
          <StyledMenuItem key={`${item.name}${index}`} primaryText={item.name} onClick={item.onClick}/>
        ))}
      </div>
      <div style={{position:'absolute',right:'10%',bottom:'0%'}}>
        {
          !hiddenItems ?
            <div/> :
            <IconMenu
              iconButtonElement={<IconButton style={{padding:0,width:'auto',height:'auto'}}><MoreVertIcon /></IconButton>}
              anchorOrigin={{horizontal: 'right', vertical: 'top'}}
              targetOrigin={{horizontal: 'right', vertical: 'top'}}
            >
              {hiddenItems.map((item, index) => (
                <StyledMenuItem key={`${item.name}${index}`} primaryText={item.name} onClick={item.onClick}/>
              ))}
            </IconMenu>}
      </div>

    </section>

  }

}

