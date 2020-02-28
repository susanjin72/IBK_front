import React from 'react';
import {useObserver} from 'mobx-react-lite';
import {storeContext} from '../context';
import {Employee} from '../stores/store';

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
    const store = React.useContext(storeContext);
    if(!store) {
        throw Error('스토어 없음');
    } else {
        return useObserver(() => {
            return <HRInfoCard employeeInfos={store.allInfos}/>
        })
    }
}

export default EmployeeInfoLists;