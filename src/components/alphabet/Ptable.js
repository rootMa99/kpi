import c from "./Stable.module.css";

const Ptable = (p) => {
  return (
    <table className={c["letter-s"]}>
      <tr>
        <td className={c.corner} colspan="2" style={{"backgroundColor":"blue"}}><span>1</span></td>
        <td className={c.corner} style={{"backgroundColor":"green"}}><span>2</span></td>
        <td className={c.corner} style={{"backgroundColor":"red"}}><span>3</span></td>
        <td className={c.corner} style={{"backgroundColor":"green"}}><span>4</span></td>
        <td className={c.corner} style={{"backgroundColor":"red"}}><span>5</span></td>
        <td className={c.corner}><span>6</span></td>
        <td className={c.top}></td>
      </tr>
      <tr>
        <td className={c.top}></td>
        <td className={c.corner}><span>7</span></td>
        <td className={c.corner}><span>8</span></td>
        <td className={c.top}></td>
        <td className={c.top}></td>
        <td className={c.top}></td>
        <td className={c.top}></td>
        <td className={c.corner}><span>9</span></td>
      </tr>
      <tr>
        <td className={c.top}></td>
        <td className={c.corner}><span>10</span></td>
        <td className={c.corner}><span>11</span></td>
        <td className={c.top}></td>
        <td className={c.top}></td>
        <td className={c.top}></td>
        <td className={c.top}></td>
        <td className={c.corner}><span>12</span></td>
      </tr>
      <tr>
        <td className={c.top}></td>
        <td className={c.corner}><span>13</span></td>
        <td className={c.corner}><span>14</span></td>
        <td className={c.corner}><span>15</span></td>
        <td className={c.corner}><span>16</span></td>
        <td className={c.corner}><span>17</span></td>
        <td className={c.corner}><span>18</span></td>
        <td className={c.top}></td>
      </tr>
      <tr>
        <td className={c.top}></td>
        <td className={c.corner}><span>19</span></td>
        <td className={c.corner}><span>20</span></td>
        <td className={c.top}></td>
        <td className={c.top}></td>
        <td className={c.top}></td>
        <td className={c.top}></td>
        <td className={c.top}></td>
      </tr>
      <tr>
        <td className={c.top}></td>
        <td className={c.corner}><span>21</span></td>
        <td className={c.corner}><span>22</span></td>
        <td className={c.top}></td>
        <td className={c.top}></td>
        <td className={c.top}></td>
        <td className={c.top}></td>
        <td className={c.top}></td>
      </tr>
      <tr>
        <td className={c.top}></td>
        <td className={c.corner}><span>23</span></td>
        <td className={c.corner}><span>24</span></td>
        <td className={c.top}></td>
        <td className={c.top}></td>
        <td className={c.top}></td>
        <td className={c.top}></td>
        <td className={c.top}></td>
      </tr>
      <tr>
        <td className={c.top}></td>
        <td className={c.corner}><span>25</span></td>
        <td className={c.corner}><span>26</span></td>
        <td className={c.top}></td>
        <td className={c.top}></td>
        <td className={c.top}></td>
        <td className={c.top}></td>
        <td className={c.top}></td>
      </tr>
      <tr>
        <td className={c.top}></td>
        <td className={c.corner}><span>27</span></td>
        <td className={c.corner}><span>28</span></td>
        <td className={c.top}></td>
        <td className={c.top}></td>
        <td className={c.top}></td>
        <td className={c.top}></td>
        <td className={c.top}></td>
      </tr>
      <tr>
        <td className={c.corner} colspan="2"><span>29</span></td>
        <td className={c.corner}><span>30</span></td>
        <td className={c.corner}><span>31</span></td>
        <td className={c.top}></td>
        <td className={c.top}></td>
        <td className={c.top}></td>
        <td className={c.top}></td>
      </tr>
    </table>
  );
};
export default Ptable;
