import { useState, useMemo } from "react";

const useHandleChange = () => {
  const [formValues, setFormValues] = useState({});

  const handleChange = (e) => {
    let { type, checked, name, value } = e.target;
    value = type === "checkbox" ? checked : value;

    setFormValues((formValues) => {
      return {
        ...formValues,
        [name]: value,
      };
    });
  };

  return { formValues, handleChange };
};

const useSortableData = (items = [], config) => {
  const [sortConfig, setSortConfig] = useState(config);
  const sortTableData = (array, { key, direction }) => {
    return array.sort((a, b) => {
      if (a[key] < b[key]) return direction === "ascending" ? -1 : 1;
      if (a[key] > b[key]) return direction === "ascending" ? 1 : -1;

      return 0;
    });
  };
  const sortedItems = useMemo(() => {
    // If no config was defined then return the unsorted array
    if (!sortConfig) return items;

    return sortTableData(items, { ...sortConfig });
  }, [items, sortConfig]);

  const requestSort = (key) => {
    let direction = "descending";

    if (
      sortConfig &&
      sortConfig.key === key &&
      sortConfig?.direction === "descending"
    ) {
      direction = "ascending";
    }

    setSortConfig({ key, direction });
  };

  return { items: sortedItems, requestSort, sortConfig };
};

export const Hooks = {
  useHandleChange,
  useSortableData,
};
