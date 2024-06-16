import { useEffect, useState } from "react";
import diseaseList from "./response.json";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function CreatePolicy() {
  const [mList, setMlist] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    setMlist([...diseaseList.atc_dictionary]);
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
            subcategory: item.subcategory.map((subItem) => {
              if (subItem.code === subItemCode) {
                return {
                  ...subItem,
                  isSubShown: !subItem.isSubShown,
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

  function showSubSubSubCategories(itemCode, subItemCode, subSubItemCode) {
    setMlist(
      mList.map((item) => {
        if (item.code === itemCode) {
          return {
            ...item,
            subcategory: item.subcategory.map((subItem) => {
              if (subItem.code === subItemCode) {
                return {
                  ...subItem,
                  subsubcategory: subItem.subsubcategory.map((subSubItem) => {
                    if (subSubItem.code === subSubItemCode) {
                      return {
                        ...subSubItem,
                        isSubShown: !subSubItem.isSubShown,
                      };
                    } else {
                      return subSubItem;
                    }
                  }),
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

  function showSubSubSubSubCategories(
    itemCode,
    subItemCode,
    subSubItemCode,
    subSubSubItemCode
  ) {
    setMlist(
      mList.map((item) => {
        if (item.code === itemCode) {
          return {
            ...item,
            subcategory: item.subcategory.map((subItem) => {
              if (subItem.code === subItemCode) {
                return {
                  ...subItem,
                  subsubcategory: subItem.subsubcategory.map((subSubItem) => {
                    if (subSubItem.code === subSubItemCode) {
                      return {
                        ...subSubItem,
                        subsubsubcategory: subSubItem.subsubsubcategory.map(
                          (subSubSubItem) => {
                            if (subSubSubItem.code === subSubSubItemCode) {
                              return {
                                ...subSubSubItem,
                                isSubShown: !subSubSubItem.isSubShown,
                              };
                            } else {
                              return subSubSubItem;
                            }
                          }
                        ),
                      };
                    } else {
                      return subSubItem;
                    }
                  }),
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

  function handleMainCheckboxChange(code, checked) {
    setMlist(
      mList.map((item) => {
        if (item.code === code) {
          return {
            ...item,
            checked,
            subcategory: item.subcategory.map((subItem) => ({
              ...subItem,
              checked,
              subsubcategory: subItem.subsubcategory.map((subSubItem) => ({
                ...subSubItem,
                checked,
                subsubsubcategory: subSubItem.subsubsubcategory.map(
                  (subSubSubItem) => ({
                    ...subSubSubItem,
                    checked,
                    subsubsubsubcategory:
                      subSubSubItem.subsubsubsubcategory.map(
                        (subSubSubSubItem) => ({
                          ...subSubSubSubItem,
                          checked,
                        })
                      ),
                  })
                ),
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
            subcategory: item.subcategory.map((subItem) => {
              if (subItem.code === subItemCode) {
                return {
                  ...subItem,
                  checked,
                  subsubcategory: subItem.subsubcategory.map((subSubItem) => ({
                    ...subSubItem,
                    checked,
                    subsubsubcategory: subSubItem.subsubsubcategory.map(
                      (subSubSubItem) => ({
                        ...subSubSubItem,
                        checked,
                      })
                    ),
                  })),
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
            subcategory: item.subcategory.map((subItem) => {
              if (subItem.code === subItemCode) {
                return {
                  ...subItem,
                  subsubcategory: subItem.subsubcategory.map((subSubItem) => {
                    if (subSubItem.code === subSubItemCode) {
                      return {
                        ...subSubItem,
                        checked,
                        subsubsubcategory: subSubItem.subsubsubcategory.map(
                          (subSubSubItem) => ({
                            ...subSubSubItem,
                            checked,
                          })
                        ),
                      };
                    } else {
                      return subSubItem;
                    }
                  }),
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

  function handleSubSubSubCheckboxChange(
    itemCode,
    subItemCode,
    subSubItemCode,
    subSubSubItemCode,
    checked
  ) {
    setMlist(
      mList.map((item) => {
        if (item.code === itemCode) {
          return {
            ...item,
            subcategory: item.subcategory.map((subItem) => {
              if (subItem.code === subItemCode) {
                return {
                  ...subItem,
                  subsubcategory: subItem.subsubcategory.map((subSubItem) => {
                    if (subSubItem.code === subSubItemCode) {
                      return {
                        ...subSubItem,
                        subsubsubcategory: subSubItem.subsubsubcategory.map(
                          (subSubSubItem) => {
                            if (subSubSubItem.code === subSubSubItemCode) {
                              return {
                                ...subSubSubItem,
                                checked,
                              };
                            } else {
                              return subSubSubItem;
                            }
                          }
                        ),
                      };
                    } else {
                      return subSubItem;
                    }
                  }),
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
    subSubSubItemCode,
    codeCode,
    checked
  ) {
    setMlist(
      mList.map((item) => {
        if (item.code === itemCode) {
          return {
            ...item,
            subcategory: item.subcategory.map((subItem) => {
              if (subItem.code === subItemCode) {
                return {
                  ...subItem,
                  subsubcategory: subItem.subsubcategory.map((subSubItem) => {
                    if (subSubItem.code === subSubItemCode) {
                      return {
                        ...subSubItem,
                        subsubsubcategory: subSubItem.subsubsubcategory.map(
                          (subSubSubItem) => {
                            if (subSubSubItem.code === subSubSubItemCode) {
                              return {
                                ...subSubSubItem,
                                subsubsubsubcategory:
                                  subSubSubItem.subsubsubsubcategory.map(
                                    (codeItem) => {
                                      if (codeItem.code === codeCode) {
                                        return {
                                          ...codeItem,
                                          checked,
                                        };
                                      } else {
                                        return codeItem;
                                      }
                                    }
                                  ),
                              };
                            } else {
                              return subSubSubItem;
                            }
                          }
                        ),
                      };
                    } else {
                      return subSubItem;
                    }
                  }),
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
        subcategory: item.subcategory.map((subItem) => ({
          ...subItem,
          checked,
          subsubcategory: subItem.subsubcategory.map((subSubItem) => ({
            ...subSubItem,
            checked,
            subsubsubcategory: subSubItem.subsubsubcategory.map(
              (subSubSubItem) => ({
                ...subSubSubItem,
                checked,
                subsubsubsubcategory: subSubItem.subsubsubsubcategory.map(
                  (subSubSubSubItem) => ({
                    ...subSubSubSubItem,
                    checked,
                  })
                ),
              })
            ),
          })),
        })),
      }))
    );
  }

  function handelBtnClick() {
    window.location.href = "/lastpolicy";
  }

  function handleSearchChange(e) {
    setSearchQuery(e.target.value);
  }

  function filterList(list, query) {
    return list
      .map((item) => {
        if (!item) return null;

        if (item.name.toLowerCase().includes(query.toLowerCase())) {
          return item;
        }

        const filteredSubcategory = filterList(item.subcategory || [], query);
        if (filteredSubcategory.length > 0) {
          return {
            ...item,
            subcategory: filteredSubcategory,
            isSubShown: true,
          };
        }

        return null;
      })
      .filter((item) => item !== null);
  }
  const filteredList = filterList(mList, searchQuery);

  return (
    <div className="list_of_medicine_con">
      <ToastContainer />
      <div className="list_title">
        <span>Створення полісу</span>
        <span>Ліки</span>
      </div>

      <div className="search_holder">
        <input
          className="search-bar"
          type="text"
          value={searchQuery}
          onChange={handleSearchChange}
        />
      </div>

      <div className="select_all_holder">
        <label
          className={`custom-checkbox ${
            filteredList.every((item) => item.checked) ? "checked" : ""
          }`}
        >
          <input
            type="checkbox"
            onChange={(e) => handleSelectAllChange(e.target.checked)}
          />
        </label>
        <span> Виділити все</span>
      </div>
      <div className="med_list_con">
        {filteredList.map((item) => {
          return (
            <div className="medicineListItem" key={item.code}>
              <div className="medicine_item_holder">
                <label
                  className={`custom-checkbox ${item.checked ? "checked" : ""}`}
                >
                  <input
                    className="med_item_checkbox"
                    type="checkbox"
                    checked={item.checked || false}
                    onChange={(e) =>
                      handleMainCheckboxChange(item.code, e.target.checked)
                    }
                  />
                </label>

                <div
                  className="med_item_con"
                  onClick={() => showSubCategories(item.code)}
                >
                  {item.code} - {item.name}
                </div>
              </div>
              <div className="med_sub_list_con">
                {!!item?.isSubShown &&
                  item.subcategory.map((subItem) => {
                    return (
                      <div className="medicineListSubItem" key={subItem.code}>
                        <div className="medicine_item_holder">
                          <label
                            className={`custom-checkbox ${
                              subItem.checked ? "checked" : ""
                            }`}
                          >
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
                            />
                          </label>

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
                            subItem.subsubcategory.map((subSubItem) => {
                              return (
                                <div
                                  className="medicineListItem"
                                  key={subSubItem.code}
                                >
                                  <div className="medicine_item_holder">
                                    <label
                                      className={`custom-checkbox ${
                                        subSubItem.checked ? "checked" : ""
                                      }`}
                                    >
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
                                      />
                                    </label>

                                    <p
                                      onClick={() =>
                                        showSubSubSubCategories(
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
                                    {!!subSubItem?.isSubShown &&
                                      subSubItem.subsubsubcategory.map(
                                        (subSubSubItem) => {
                                          return (
                                            <div
                                              className="medicineListSubItem"
                                              key={subSubSubItem.code}
                                            >
                                              <div className="medicine_item_holder">
                                                <label
                                                  className={`custom-checkbox ${
                                                    subSubSubItem.checked
                                                      ? "checked"
                                                      : ""
                                                  }`}
                                                >
                                                  <input
                                                    type="checkbox"
                                                    checked={
                                                      subSubSubItem.checked ||
                                                      false
                                                    }
                                                    onChange={(e) =>
                                                      handleSubSubSubCheckboxChange(
                                                        item.code,
                                                        subItem.code,
                                                        subSubItem.code,
                                                        subSubSubItem.code,
                                                        e.target.checked
                                                      )
                                                    }
                                                  />
                                                </label>

                                                <p
                                                  onClick={() =>
                                                    showSubSubSubSubCategories(
                                                      item.code,
                                                      subItem.code,
                                                      subSubItem.code,
                                                      subSubSubItem.code
                                                    )
                                                  }
                                                >
                                                  {subSubSubItem.code} -{" "}
                                                  {subSubSubItem.name}
                                                </p>
                                              </div>

                                              <div className="med_sub_list_con">
                                                {!!subSubSubItem?.isSubShown &&
                                                  subSubSubItem.subsubsubsubcategory.map(
                                                    (codeItem) => {
                                                      return (
                                                        <div
                                                          className="medicineListItem"
                                                          key={codeItem.code}
                                                        >
                                                          <div className="medicine_item_holder">
                                                            <label
                                                              className={`custom-checkbox ${
                                                                codeItem.checked
                                                                  ? "checked"
                                                                  : ""
                                                              }`}
                                                            >
                                                              <input
                                                                type="checkbox"
                                                                checked={
                                                                  codeItem.checked ||
                                                                  false
                                                                }
                                                                onChange={(e) =>
                                                                  handleCodeCheckboxChange(
                                                                    item.code,
                                                                    subItem.code,
                                                                    subSubItem.code,
                                                                    subSubSubItem.code,
                                                                    codeItem.code,
                                                                    e.target
                                                                      .checked
                                                                  )
                                                                }
                                                              />
                                                            </label>

                                                            <p>
                                                              {codeItem.code} -{" "}
                                                              {codeItem.name}
                                                            </p>
                                                          </div>
                                                        </div>
                                                      );
                                                    }
                                                  )}
                                              </div>
                                            </div>
                                          );
                                        }
                                      )}
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
        <button onClick={handelBtnClick}>Далі</button>
      </div>
    </div>
  );
}
