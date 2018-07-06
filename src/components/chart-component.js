import React from "react";
import _ from 'lodash';
import {Sparklines, SparklinesLine, SparklinesReferenceLine} from 'react-sparklines';

function calAvg(data){
    return _.round(_.sum(data)/data.length);
}

export default function ChartComponent(props){
    return (
        <div>
            <Sparklines data={props.chartData} width={100} height={50} margin={5}>
                <SparklinesLine color={props.chartColor}/>
                <SparklinesReferenceLine type="avg" />
            </Sparklines>
            <div>{calAvg(props.chartData) + props.unit}</div>
        </div>
        
    )
}