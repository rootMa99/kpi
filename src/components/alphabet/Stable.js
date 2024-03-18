import { useSelector } from "react-redux";
import { colorDays, filterBydataName } from "../functions/utils";
import c from "./Stable.module.css";

const Stable = (p) => {
  const { data } = useSelector((s) => s.data);
  const filtredData = filterBydataName(data, "skills");
  return (
    <table className={c["letter-s"]}>
      <tr>
        <td className={c.corner} style={colorDays(filtredData, 1)}><span>1</span></td>
        <td className={c.corner} style={colorDays(filtredData, 2)}><span>2</span></td>
        <td className={c.corner} style={colorDays(filtredData, 3)}><span>3</span></td>
        <td className={c.corner} style={colorDays(filtredData, 4)}><span>4</span></td>
        <td className={c.corner} style={colorDays(filtredData, 5)}><span>5</span></td>
        <td className={c.corner} style={colorDays(filtredData, 6)}><span>6</span></td>
        <td className={c.corner} style={colorDays(filtredData, 7)}><span>7</span></td>
      </tr>
      <tr>
        <td className={c.corner} style={colorDays(filtredData, 8)}><span>8</span></td>
        <td className={c.top}></td>
        <td className={c.top}></td>
        <td className={c.top}></td>
        <td className={c.top}></td>
        <td className={c.top}></td>
        <td className={c.corner} style={colorDays(filtredData, 9)}><span>9</span></td>
      </tr>
      <tr>
        <td className={c.corner} style={colorDays(filtredData, 10)}><span>10</span></td>
        <td className={c.top}></td>
        <td className={c.top}></td>
        <td className={c.top}></td>
        <td className={c.top}></td>
        <td className={c.top}></td>
        <td className={c.corner} style={colorDays(filtredData, 11)}><span>11</span></td>
      </tr>
      <tr>
        <td className={c.corner} style={colorDays(filtredData, 12)}><span>12</span></td>
      </tr>
      <tr>
        <td className={c.corner} style={colorDays(filtredData, 13)}><span>13</span></td>
        <td className={c.corner} style={colorDays(filtredData, 14)}><span>14</span></td>
        <td className={c.corner} style={colorDays(filtredData, 15)}><span>15</span></td>
        <td className={c.corner} style={colorDays(filtredData, 16)}><span>16</span></td>
        <td className={c.corner} style={colorDays(filtredData, 17)}><span>17</span></td>
        <td className={c.corner} style={colorDays(filtredData, 18)}><span>18</span></td>
        <td className={c.corner} style={colorDays(filtredData, 19)}><span>19</span></td>
      </tr>
      <tr>
        <td className={c.top}></td>
        <td className={c.top}></td>
        <td className={c.top}></td>
        <td className={c.top}></td>
        <td className={c.top}></td>
        <td className={c.top}></td>
        <td className={c.corner} style={colorDays(filtredData, 20)}><span>20</span></td>
      </tr>
      <tr>
        <td className={c.corner} style={colorDays(filtredData, 21)}><span>21</span></td>
        <td className={c.top}></td>
        <td className={c.top}></td>
        <td className={c.top}></td>
        <td className={c.top}></td>
        <td className={c.top}></td>
        <td className={c.corner} style={colorDays(filtredData, 22)}><span>22</span></td>
      </tr>
      <tr>
        <td className={c.corner} style={colorDays(filtredData, 23)}><span>23</span></td>
        <td className={c.top}></td>
        <td className={c.top}></td>
        <td className={c.top}></td>
        <td className={c.top}></td>
        <td className={c.top}></td>
        <td className={c.corner} style={colorDays(filtredData, 24)}><span>24</span></td>
      </tr>
      <tr>
        <td className={c.corner} style={colorDays(filtredData, 25)}><span>25</span></td>
        <td className={c.corner} style={colorDays(filtredData, 26)}><span>26</span></td>
        <td className={c.corner} style={colorDays(filtredData, 27)}><span>27</span></td>
        <td className={c.corner} style={colorDays(filtredData, 28)}><span>28</span></td>
        <td className={c.corner} style={colorDays(filtredData, 29)}><span>29</span></td>
        <td className={c.corner} style={colorDays(filtredData, 30)}><span>30</span></td>
        <td className={c.corner} style={colorDays(filtredData, 21)}><span>31</span></td>
      </tr>
    </table>
  );
};
export default Stable;
