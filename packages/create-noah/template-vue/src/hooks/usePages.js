import { reactive } from 'vue';

const usePages = (getData = () => {}) => {
  const pages = reactive({
    pageNum: 1,
    pageSize: 10,
    total: 0
  });

  function handleSizeChange(pageSize) {
    pages.pageNum = 1;
    pages.pageSize = pageSize;
    getData();
  }

  function handleCurrentChange(pageNum) {
    pages.pageNum = pageNum;
    getData();
  }

  return {
    pages,
    handleSizeChange,
    handleCurrentChange
  };
};

export default usePages;
