import axios from "axios";
import { useEffect, useState } from "react";

function DataSet() {
  const api = `http://localhost:8080/mvweb0920/forReactServlet`;
  const [data, setData] = useState([]);
  const getSinglePhoto = async () => {
    try {
      const result = await axios.get(`${api}`);

      setData(result.data);
      console.log(result);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getSinglePhoto();
  }, []);

  return (
    <>
      <table border="1">
        <thead>
          <tr>
            <th>咖啡名稱</th>
            <th>價格</th>
            <th>銷售量</th>
          </tr>
        </thead>
        <tbody>
          {data.map((c, i) => {
            return (
              <tr key={i}>
                <td>{c.cofName}</td>
                <td>{c.price}</td>
                <td>{c.sales}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      {}
    </>
  );
}

export default DataSet;
