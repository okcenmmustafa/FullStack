import React from "react";
import getValues from "./api";
function fethData(callBack) {
  setTimeout(() => {
    callBack(1);
  }, 100);
}
test("get Specific country from api ", async () => {
  return (countryInfo = await getValues("post", "/country", {
    name: "Malta",
    id: 1,
  }).then((res) =>
    expect(!!res && !!res.data && res.data[0].namme).toBe("Malta")
  ));
});
