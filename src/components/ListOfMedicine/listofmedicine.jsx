import { useEffect, useState } from "react";
import "./dist/listofmedicine.css";
import medicineList from "./medicine.json";

export default function CreatePolicy() {
  const [mList, setMlist] = useState([]);
  useEffect(() => {
    setMlist([...medicineList.icd_dictionary]);
  }, []);

  function showSubCategories(code) {
    setMlist(
      mList.map((item) => {
        if (item.code === code) {
          return {
            ...item,
            isSubShown: !item.isSubShown,
          };
        } else {
          return item;
        }
      })
    );
  }

  function showSubSubCategories(itemCode, subItemCode) {
    setMlist(
      mList.map((item) => {
        if (item.code === itemCode) {
          return {
            ...item,
            subcategories: item.subcategories.map((subItem) => {
              if (subItem.code === subItemCode) {
                return {
                  ...subItem,
                  isSubShown: !subItem.isSubShown,
                };
              } else {
                return {
                  ...subItem,
                };
              }
            }),
          };
        } else {
          return item;
        }
      })
    );
  }

  function showCodes(itemCode, subItemCode, codesCode) {
    const itemIndex = mList.findIndex((item) => item.code === itemCode);
    const subItemIndex = mList[itemIndex].subcategories.findIndex(
      (item) => item.code === subItemCode
    );
    const subSubItemCodeIndex = mList[itemIndex].subcategories[
      subItemIndex
    ].subsubcategories.findIndex((item) => item.code === codesCode);
    setMlist((prevState) => {
      const prevStateCopy = JSON.parse(JSON.stringify([...prevState]));
      prevStateCopy[itemIndex].subcategories[subItemIndex].subsubcategories[
        subSubItemCodeIndex
      ].codesShown =
        !prevStateCopy[itemIndex].subcategories[subItemIndex].subsubcategories[
          subSubItemCodeIndex
        ].codesShown;
      return [...prevStateCopy];
    });
  }

  function handleMainCheckboxChange(code, checked) {
    setMlist(
      mList.map((item) => {
        if (item.code === code) {
          return {
            ...item,
            checked,
            subcategories: item.subcategories.map((subItem) => ({
              ...subItem,
              checked,
              subsubcategories: subItem.subsubcategories.map((subSubItem) => ({
                ...subSubItem,
                checked,
                codes: subSubItem.codes.map((codeItem) => ({
                  ...codeItem,
                  checked,
                })),
              })),
            })),
          };
        } else {
          return item;
        }
      })
    );
  }

  function handleSubCheckboxChange(itemCode, subItemCode, checked) {
    setMlist(
      mList.map((item) => {
        if (item.code === itemCode) {
          return {
            ...item,
            subcategories: item.subcategories.map((subItem) => {
              if (subItem.code === subItemCode) {
                return {
                  ...subItem,
                  checked,
                  subsubcategories: subItem.subsubcategories.map(
                    (subSubItem) => ({
                      ...subSubItem,
                      checked,
                      codes: subSubItem.codes.map((codeItem) => ({
                        ...codeItem,
                        checked,
                      })),
                    })
                  ),
                };
              } else {
                return subItem;
              }
            }),
          };
        } else {
          return item;
        }
      })
    );
  }

  function handleSubSubCheckboxChange(
    itemCode,
    subItemCode,
    subSubItemCode,
    checked
  ) {
    setMlist(
      mList.map((item) => {
        if (item.code === itemCode) {
          return {
            ...item,
            subcategories: item.subcategories.map((subItem) => {
              if (subItem.code === subItemCode) {
                return {
                  ...subItem,
                  subsubcategories: subItem.subsubcategories.map(
                    (subSubItem) => {
                      if (subSubItem.code === subSubItemCode) {
                        return {
                          ...subSubItem,
                          checked,
                          codes: subSubItem.codes.map((codeItem) => ({
                            ...codeItem,
                            checked,
                          })),
                        };
                      } else {
                        return subSubItem;
                      }
                    }
                  ),
                };
              } else {
                return subItem;
              }
            }),
          };
        } else {
          return item;
        }
      })
    );
  }

  function handleCodeCheckboxChange(
    itemCode,
    subItemCode,
    subSubItemCode,
    codeCode,
    checked
  ) {
    setMlist(
      mList.map((item) => {
        if (item.code === itemCode) {
          return {
            ...item,
            subcategories: item.subcategories.map((subItem) => {
              if (subItem.code === subItemCode) {
                return {
                  ...subItem,
                  subsubcategories: subItem.subsubcategories.map(
                    (subSubItem) => {
                      if (subSubItem.code === subSubItemCode) {
                        return {
                          ...subSubItem,
                          codes: subSubItem.codes.map((codeItem) => {
                            if (codeItem.code === codeCode) {
                              return {
                                ...codeItem,
                                checked,
                              };
                            } else {
                              return codeItem;
                            }
                          }),
                        };
                      } else {
                        return subSubItem;
                      }
                    }
                  ),
                };
              } else {
                return subItem;
              }
            }),
          };
        } else {
          return item;
        }
      })
    );
  }

  function handleSelectAllChange(checked) {
    setMlist(
      mList.map((item) => ({
        ...item,
        checked,
        subcategories: item.subcategories.map((subItem) => ({
          ...subItem,
          checked,
          subsubcategories: subItem.subsubcategories.map((subSubItem) => ({
            ...subSubItem,
            checked,
            codes: subSubItem.codes.map((codeItem) => ({
              ...codeItem,
              checked,
            })),
          })),
        })),
      }))
    );
  }

  return (
    <div className="list_of_medicine_con">
      <div className="list_title">
        <span>Створення полісу</span>
        <span>Хвороби</span>
      </div>

      <div className="select_all_holder">
        <input
          type="checkbox"
          onChange={(e) => handleSelectAllChange(e.target.checked)}
        />
        Виділити все
      </div>
      <div className="med_list_con">
        {mList.map((item) => {
          return (
            <div className="medicineListItem" key={item.code}>
              <div className="medicine_item_holder">
                <input
                  className="med_item_checkbox"
                  type="checkbox"
                  checked={item.checked || false}
                  onChange={(e) =>
                    handleMainCheckboxChange(item.code, e.target.checked)
                  }
                ></input>

                <div
                  className="med_item_con"
                  onClick={() => showSubCategories(item.code)}
                >
                  {item.code} - {item.name}
                </div>
              </div>
              <div className="med_sub_list_con">
                {!!item?.isSubShown &&
                  item.subcategories.map((subItem) => {
                    return (
                      <div className="medicineListSubItem" key={subItem.code}>
                        <div className="medicine_item_holder">
                          <input
                            type="checkbox"
                            checked={subItem.checked || false}
                            onChange={(e) =>
                              handleSubCheckboxChange(
                                item.code,
                                subItem.code,
                                e.target.checked
                              )
                            }
                          ></input>

                          <div
                            className="med_item_con"
                            onClick={() =>
                              showSubSubCategories(item.code, subItem.code)
                            }
                          >
                            {subItem.code} - {subItem.name}
                          </div>
                        </div>
                        <div className="med_sub_list_con">
                          {!!subItem?.isSubShown &&
                            subItem.subsubcategories.map((subSubItem) => {
                              return (
                                <div
                                  className="medicineListItem"
                                  key={subSubItem.code}
                                >
                                  <div className="medicine_item_holder">
                                    <input
                                      type="checkbox"
                                      checked={subSubItem.checked || false}
                                      onChange={(e) =>
                                        handleSubSubCheckboxChange(
                                          item.code,
                                          subItem.code,
                                          subSubItem.code,
                                          e.target.checked
                                        )
                                      }
                                    ></input>

                                    <p
                                      onClick={() =>
                                        showCodes(
                                          item.code,
                                          subItem.code,
                                          subSubItem.code
                                        )
                                      }
                                    >
                                      {subSubItem.code} - {subSubItem.name}
                                    </p>
                                  </div>

                                  <div className="med_sub_list_con">
                                    {!!subSubItem.codesShown &&
                                      subSubItem.codes.map((codeItem) => {
                                        return (
                                          <div
                                            className="medicineListSubItem"
                                            key={codeItem.code}
                                          >
                                            <div className="medicine_item_holder">
                                              <input
                                                type="checkbox"
                                                checked={
                                                  codeItem.checked || false
                                                }
                                                onChange={(e) =>
                                                  handleCodeCheckboxChange(
                                                    item.code,
                                                    subItem.code,
                                                    subSubItem.code,
                                                    codeItem.code,
                                                    e.target.checked
                                                  )
                                                }
                                              ></input>

                                              <p>
                                                {codeItem.code} -{" "}
                                                {codeItem.name}
                                              </p>
                                            </div>
                                          </div>
                                        );
                                      })}
                                  </div>
                                </div>
                              );
                            })}
                        </div>
                      </div>
                    );
                  })}
              </div>
            </div>
          );
        })}
      </div>
      <div className="list_button_holder">
        <button>Далі</button>
      </div>
    </div>
  );
}
