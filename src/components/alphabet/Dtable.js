import { useSelector } from "react-redux";
import c from "./Stable.module.css";
import { colorDays, filterBydataName } from "../functions/utils";

const Dtable = (p) => {
  const {data}= useSelector(s=>s.data);
  const filtredData= filterBydataName(data, "delivery");
  console.log( filtredData, data)
  return (
    <table className={c["letter-s"]}>
      <tr>
        <td className={c.corner} style={{...colorDays(filtredData, 1, p.date), borderRadius:"15px 0px 0px 0px"}}>
          <span>1</span>
        </td>
        <td className={c.corner} style={colorDays(filtredData, 2, p.date)}>
          <span>2</span>
        </td>
        <td className={c.corner} style={colorDays(filtredData, 3, p.date)}><span>3</span></td>
        <td className={c.corner} style={colorDays(filtredData, 4, p.date)}><span>4</span></td>
        <td className={c.corner} style={colorDays(filtredData, 5, p.date)}><span>5</span></td>
        <td className={c.corner} style={colorDays(filtredData, 6, p.date)}><span>6</span></td>
        <td className={c.corner} style={{...colorDays(filtredData, 7, p.date), borderRadius:"0px 20px 0px 0px"}} colSpan={2}><span>7</span></td>
      </tr>
      <tr>
        <td className={c.top}></td>
        <td className={c.corner} style={colorDays(filtredData, 8, p.date)}><span>8</span></td>
        <td className={c.top}></td>
        <td className={c.top}></td>
        <td className={c.top}></td>
        <td className={c.top}></td>
        <td className={c.top}></td>
        <td className={c.corner} style={colorDays(filtredData, 9, p.date)}><span>9</span></td>
      </tr>
      <tr>
        <td className={c.top}></td>
        <td className={c.corner} style={colorDays(filtredData, 10, p.date)}><span>10</span></td>
        <td className={c.top}></td>
        <td className={c.top}></td>
        <td className={c.top}></td>
        <td className={c.top}></td>
        <td className={c.top}></td>
        <td className={c.corner} style={colorDays(filtredData, 11, p.date)}><span>11</span></td>
      </tr>
      <tr>
        <td className={c.top}></td>
        <td className={c.corner} style={colorDays(filtredData, 12, p.date)}><span>12</span></td>
        <td className={c.top}></td>
        <td className={c.top}></td>
        <td className={c.top}></td>
        <td className={c.top}></td>
        <td className={c.top}></td>
        <td className={c.corner} style={colorDays(filtredData, 13, p.date)}><span>13</span></td>
      </tr>
      <tr>
        <td className={c.top}></td>
        <td className={c.corner} style={colorDays(filtredData, 14, p.date)}><span>14</span></td>
        <td className={c.top}></td>
        <td className={c.top}></td>
        <td className={c.top}></td>
        <td className={c.top}></td>
        <td className={c.top}></td>
        <td className={c.corner} style={colorDays(filtredData, 15, p.date)}><span>15</span></td>
      </tr>
      <tr>
        <td className={c.top}></td>
        <td className={c.corner} style={colorDays(filtredData, 16, p.date)}><span>16</span></td>
        <td className={c.top}></td>
        <td className={c.top}></td>
        <td className={c.top}></td>
        <td className={c.top}></td>
        <td className={c.top}></td>
        <td className={c.corner} style={colorDays(filtredData, 17, p.date)}><span>17</span></td>
      </tr>
      <tr>
        <td className={c.top}></td>
        <td className={c.corner} style={colorDays(filtredData, 18, p.date)}><span>18</span></td>
        <td className={c.top}></td>
        <td className={c.top}></td>
        <td className={c.top}></td>
        <td className={c.top}></td>
        <td className={c.top}></td>
        <td className={c.corner} style={colorDays(filtredData, 19, p.date)}><span>19</span></td>
      </tr>
      <tr>
        <td className={c.top}></td>
        <td className={c.corner} style={colorDays(filtredData, 20, p.date)}><span>20</span></td>
        <td className={c.top}></td>
        <td className={c.top}></td>
        <td className={c.top}></td>
        <td className={c.top}></td>
        <td className={c.top}></td>
        <td className={c.corner} style={colorDays(filtredData, 21, p.date)}><span>21</span></td>
      </tr>
      <tr>
        <td className={c.top}></td>
        <td className={c.corner} style={colorDays(filtredData, 22, p.date)}><span>22</span></td>
        <td className={c.top}></td>
        <td className={c.top}></td>
        <td className={c.top}></td>
        <td className={c.top}></td>
        <td className={c.top}></td>
        <td className={c.corner} style={colorDays(filtredData, 23, p.date)}><span>23</span></td>
      </tr>
      <tr>
        <td className={c.top}></td>
        <td className={c.corner} style={colorDays(filtredData, 24, p.date)}><span>24</span></td>
        <td className={c.top}></td>
        <td className={c.top}></td>
        <td className={c.top}></td>
        <td className={c.top}></td>
        <td className={c.top}></td>
        <td className={c.corner} style={colorDays(filtredData, 25, p.date)}><span>25</span></td>
      </tr>
      <tr>
        <td className={c.corner} style={{...colorDays(filtredData, 26, p.date), borderRadius:"0px 0px 0px 15px"}} colSpan={2}><span>26</span></td>
        <td className={c.corner} style={colorDays(filtredData, 27, p.date)}><span>27</span></td>
        <td className={c.corner} style={colorDays(filtredData, 28, p.date)}><span>28</span></td>
        <td className={c.corner} style={colorDays(filtredData, 29, p.date)}><span>29</span></td>
        <td className={c.corner} style={colorDays(filtredData, 30, p.date)}><span>30</span></td>
        <td className={c.corner} style={{...colorDays(filtredData, 31, p.date), borderRadius:"0px 0px 20px 0px"}} colSpan={2}><span>31</span></td>
      </tr>
    </table>
  );
};

export default Dtable;
