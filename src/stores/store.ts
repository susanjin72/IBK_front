/*
    입행 => enterance
    행내 => in bank
*/

// enum schoolType {
//     ELEMENTARY = "초등학교",
//     MIDDLE = "중학교",
//     HIGH = "고등학교",
//     UNI = "대학교",
//     AFTER_UNI ="대학원"
// }

// interface education{
//     /**
//      * type = 초등학교 | 중학교 | 고등학교 | 대학교 | 대학원
//      */

//     type: schoolType;
//     joinDate: Date; //입학일
//     graduationDate: Date;
//     degree: string;
//     schoolName: string;
//     major: string;
//     degreeNumber: string;
//     isAfterEnterance: boolean; //입행후
//     location: string;
// }

// interface militaryHistory{
//     joinDate: Date;
//     endDate: Date;
//     type: string;
//     rank: string;
//     branch: string;
//     serialNumber: string;
//     specialty: string;
//     duration: string;
//     durationBeforeEnterance: string;
// }

// enum phoneNumberType {
//     OFFICE = "사무실",
//     MOBILE = "핸드폰",
//     HOME = "자택",
//     ONLINE = "온라인",
//     EXCHANGE = "교환번호"
// }

// interface PhoneNumber{
//     /**
//      * type = (사무실 = 온라인 전화 = 행내전화) | 핸드폰 | 자택 | 교환번호 | 개인팩스 | 부점 팩스
//      * 
//     */
//     type: phoneNumberType;
//     number: string;
//     exchangeNumber?: string;
// }

// enum addressLabel {
//     RESIDENT = "주민등록지",
//     REAL = "현거주지"
// }

// interface address {
//     /**
//      * label = 주민등록지 | 현거주지
//      */

//     postCode: string;
//     label: addressLabel;
//     roadNameAddress: string;
//     landLotAddress: string;
// }

enum nameType {
    KOR = "한글",
    ENG = "영문",
    CHI = "한자"
}

interface name{
    /**
     * type = 한글 | 영문 | 한자
     */

    type: nameType;
    name: string;
}


// enum personalDateType {
//     MARRIAGE = "결혼일",
//     BIRTHDAY = "생일"
// }

// interface PersonalDate{
//     /**
//      * type = 결혼일 | (양력)생일
//      */
//     type: personalDateType;
//     date: Date;
//     isLunar: boolean;
// }

// interface familyMember {
//     relation: string;
//     name: string;
//     registrationNumber: string
// }

export type BasicInfo = {
    names: name[] | null;
}

export type Employee = {
    basicInfo: BasicInfo;
}

const BasicInfo: BasicInfo = {
    names: [
        {
            type: nameType.KOR,
            name: "오혜린"
        },
        {
            type: nameType.ENG,
            name: "Oh hye rin"
        }
    ]
}
const EmployeeInfo: Employee = {
    basicInfo: BasicInfo,
}
export const createStore = () => {
    const store = {
        get allInfos() {
            return EmployeeInfo;
        }
    };
    return store;
}

export type TStore = ReturnType<typeof createStore>





