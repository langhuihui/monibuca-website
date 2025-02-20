import React from 'react';
import ReactFlow from 'reactflow';
import 'rc-banner-anim/assets/index.css';
import 'reactflow/dist/style.css';
 
const initialNodes = [
  { id: '1', position: { x: 0, y: 0 }, data: { label: '1' } },
  { id: '2', position: { x: 0, y: 100 }, data: { label: '2' } },
];
const initialEdges = [{ id: 'e1-2', source: '1', target: '2' }];
class Banner extends React.PureComponent {
  render() {
    const { ...props } = this.props;
    const { dataSource, isMobile } = props;
    delete props.dataSource;
    delete props.isMobile;
  return (
    <div {...props} {...dataSource.wrapper}>
      <ReactFlow nodes={initialNodes} edges={initialEdges} />
    </div>
  );
}
}
export default Banner;