import { useEffect, useState } from "react";
import "./dist/listofdisease.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function CreatePolicy() {
  const [mList, setMlist] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    const fetchData = async () => {
      try {
        const response = await fetch(
          "http://138.68.127.156:8000/api/db/icd10classification/",
          { signal }
        );
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setMlist([...data.icd_dictionary]);
      } catch (error) {
        if (error.name === "AbortError") {
          console.log("Fetch aborted");
        } else {
          console.error("Error fetching data:", error);
          setError(error);
        }
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="list_of_medicine_con">
        <div className="loader">
          <label className="loader_label">Будь ласка зачекайте...</label>
          <div className="loading"></div>
        </div>
      </div>
    );
  }

  if (error) {
    return <div>Error fetching data: {error.message}</div>;
  }

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

  function handelBtnClick() {
    window.location.href = "/medicine";
    
  }

  const filterList = (list, query) => {
    return list.reduce((acc, item) => {
      const hasSubcategories = item.subcategories && item.subcategories.length;
      const hasSubsubcategories =
        item.subsubcategories && item.subsubcategories.length;
      const hasCodes = item.codes && item.codes.length;

      if (
        item.name.toLowerCase().includes(query) ||
        item.code.toLowerCase().includes(query) ||
        (hasSubcategories &&
          filterList(item.subcategories, query).length > 0) ||
        (hasSubsubcategories &&
          filterList(item.subsubcategories, query).length > 0) ||
        (hasCodes && filterList(item.codes, query).length > 0)
      ) {
        acc.push({
          ...item,
          subcategories: hasSubcategories
            ? filterList(item.subcategories, query)
            : [],
          subsubcategories: hasSubsubcategories
            ? filterList(item.subsubcategories, query)
            : [],
          codes: hasCodes ? filterList(item.codes, query) : [],
        });
      }

      return acc;
    }, []);
  };

  const filteredList = filterList(mList, searchQuery.toLowerCase());

  return (
    <div className="list_of_medicine_con">
      <ToastContainer />
      <div className="list_title">
        <span>Створення полісу</span>
        <span>Хвороби</span>
      </div>
      <input
        className="search-bar"
        type="text"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />

      <div className="select_all_holder">
        <label
          className={`custom-checkbox ${
            mList.every((item) => item.checked) ? "checked" : ""
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
        {filteredList.map((item) => (
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
                item.subcategories.map((subItem) => (
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
                        subItem.subsubcategories.map((subSubItem) => (
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
                                subSubItem.codes.map((codeItem) => (
                                  <div
                                    className="medicineListSubItem"
                                    key={codeItem.code}
                                  >
                                    <div className="medicine_item_holder">
                                      <label
                                        className={`custom-checkbox ${
                                          codeItem.checked ? "checked" : ""
                                        }`}
                                      >
                                        <input
                                          type="checkbox"
                                          checked={codeItem.checked || false}
                                          onChange={(e) =>
                                            handleCodeCheckboxChange(
                                              item.code,
                                              subItem.code,
                                              subSubItem.code,
                                              codeItem.code,
                                              e.target.checked
                                            )
                                          }
                                        />
                                      </label>
                                      <p>
                                        {codeItem.code} - {codeItem.name}
                                      </p>
                                    </div>
                                  </div>
                                ))}
                            </div>
                          </div>
                        ))}
                    </div>
                  </div>
                ))}
            </div>
          </div>
        ))}
      </div>
      <div className="list_button_holder">
        <button onClick={handelBtnClick}>Далі</button>
      </div>
    </div>
  );
}
