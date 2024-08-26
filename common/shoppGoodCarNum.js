import { getGoodToShoppCarList } from "@/api/api.js";
export const getShoppGoodCarNum = () => {
  if (!uni.getStorageSync("accessToken")) return;
  getGoodToShoppCarList(
    "/shoppCar/getGoodToShoppCarList",
    {
      currentPage: 1,
      pageSize: 1,
      authorization: uni.getStorageSync("accessToken"),
    },
    false
  )
    .then((res) => {
      const { code, data, flag } = res;
      if (code === 2000 && flag && data.total !== 0) {
        uni.setTabBarBadge({
          index: 2,
          text: `${data.total}`,
        });
      }
    })
    .catch((error) => console.log(error));
};
