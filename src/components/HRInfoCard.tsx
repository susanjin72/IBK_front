import React from 'react';
// import {useObserver} from 'mobx-react-lite';
// import {storeContext} from '../context';
import {Employee} from '../stores/store';
import {useRootData} from '../hooks';
// import { HRInfoCardPage } from '../pages/HRInfoCardPage';

export const HRInfoCard: React.FC<{employeeInfos: Employee}> = ({employeeInfos}) => {
    return (
        <div>
            <div>{employeeInfos.basicInfo.names?.map(name => {
                return <span>{name.name}</span>
            })}</div>
        </div>
    )
}

export const EmployeeInfoLists = () => {
    const allInfos = useRootData(store => store.allInfos);
    return <HRInfoCard employeeInfos={allInfos}/>
}

export default EmployeeInfoLists;