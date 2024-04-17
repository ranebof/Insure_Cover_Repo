import { useEffect, useState } from 'react';
import './dist/listofmedicine.css';
import medicineList from './medicine.json'

export default function CreatePolicy() {
    const [mList, setMlist] = useState([])
    useEffect(() => {
        setMlist([...medicineList.icd_dictionary])
    }, [])

    function showSubCategories(code) {
        setMlist(mList.map((item) => {
            if (item.code === code) {
                return {
                    ...item,
                    isSubShown: !item.isSubShown
                }
            } else {
                return item
            }
        }))
    }

    function showSubSubCategories(itemCode, subItemCode) {
        setMlist(mList.map((item) => {
            if (item.code === itemCode) {
                return {
                    ...item,
                    subcategories: item.subcategories.map((subItem) => {
                        if (subItem.code === subItemCode) {
                            return {
                                ...subItem,
                                isSubShown: !subItem.isSubShown
                            }
                        } else {
                            return {
                                ...subItem
                            }
                        }
                    })
                }
            } else {
                return item
            }
        }))
    }

    function showCodes(itemCode, subItemCode, codesCode) {
        const itemIndex = mList.findIndex(item => item.code === itemCode);
        const subItemIndex = mList[itemIndex].subcategories.findIndex(item => item.code === subItemCode)
        const subSubItemCodeIndex = mList[itemIndex].subcategories[subItemIndex].subsubcategories.findIndex(item => item.code === codesCode)
        setMlist(prevState => {
            const prevStateCopy = JSON.parse(JSON.stringify([...prevState]))
            prevStateCopy[itemIndex].subcategories[subItemIndex].subsubcategories[subSubItemCodeIndex].codesShown =
                !prevStateCopy[itemIndex].subcategories[subItemIndex].subsubcategories[subSubItemCodeIndex].codesShown
            return [...prevStateCopy]
        })

    }
    return (
        <div className='list_of_medicine_con'>
            <div className='upper_side'>
                <img className='arrow_back' src="./images/BackStrilka.png" alt=''></img>
                <input className='search_box'></input>
            </div>

            <div className='med_list_con'>
                {mList.map(item => {
                    return <div className='medicineListItem' key={item.code}>
                        <p onClick={() => showSubCategories(item.code)}>{item.code} - {item.name}</p>
                        <div className='med_sub_list_con'>
                            {!!item?.isSubShown && item.subcategories.map(subItem => {
                                return <div className='medicineListSubItem' key={subItem.code} >
                                    <p onClick={() => showSubSubCategories(item.code, subItem.code)}>{subItem.code} - {subItem.name}</p>
                                    <div className='med_sub_list_con'>
                                        {!!subItem?.isSubShown && subItem.subsubcategories.map(subSubItem => {
                                            return <div className='medicineListItem' key={subSubItem.code}>
                                                <p onClick={() => showCodes(item.code, subItem.code, subSubItem.code)}>{subSubItem.code} - {subSubItem.name}</p>
                                                <div className='med_sub_list_con'>
                                                    {!!subSubItem.codesShown && subSubItem.codes.map(codeItem => {
                                                        return <div className='medicineListSubItem' key={codeItem.code}>
                                                            <p>{codeItem.code} - {codeItem.name}</p>
                                                        </div>
                                                    })}
                                                </div>
                                            </div>
                                        })}
                                    </div>
                                </div>
                            })}
                        </div>
                    </div>
                })}
            </div>
        </div>
    )
}
