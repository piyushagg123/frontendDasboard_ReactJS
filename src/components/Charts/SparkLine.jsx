import React from 'react';
import { SparklineComponent, Inject, SparklineTooltip } from '@syncfusion/ej2-react-charts';

class SparkLine extends React.PureComponent {
  render() {
    const { id, height, width, color, data, type, currentColor } = this.props;

    return (
      <SparklineComponent id={id} height={height} width={width} dataSource={data} xName='xval' yName='yval' lineWidth={1} valueType="Numeric" fill={color}  border={{ color: currentColor, width: 2 }}  tooltipSettings={{
        visible: true,
        format: '${xval} : data ${yval}',
        trackLineSettings: {
          visible: true,
        },
      }} type={type} markerSettings={{ visible: ['All'], size: 2.5, fill: currentColor }}
      >
        <Inject services={[SparklineTooltip]} />
      </SparklineComponent>
    );
  }
}

export default SparkLine;