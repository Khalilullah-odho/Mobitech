import _ from "lodash";

export default function paginate(data, currentPage, pageSize) {
  const startIndex = (currentPage - 1) * pageSize;
  return _(data).slice(startIndex).take(pageSize).value();
}
