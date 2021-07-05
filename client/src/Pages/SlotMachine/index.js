import React, { useEffect, useState, createRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { ArrowUpOutlined } from "@ant-design/icons";
import getValues from "../../api";
import { rollingPrice, ballance } from "../../actions/slotMachine/user";
import { RiCoinsFill } from "react-icons/ri";
import { Statistic, Row, Col } from "antd";
import Notifications from '../../Components/Notifications'
const slotRef = [createRef(), createRef(), createRef()];

// Reels deafult defination
const defaultProps = [
  {
    fruits: ["🍒", "🍋", "🍎", "🍋", "🍌", "🍌", "🍋", "🍋"],
  },
  {
    fruits: ["🍋", "🍎", "🍋", "🍋", "🍒", "🍎", "🍌", "🍋"],
  },
  {
    fruits: ["🍋", "🍎", "🍋", "🍎", "🍒", "🍋", "🍌", "🍋"],
  },
];
const SlotMachine = (props) => {
  
  const [fruits, setFruits] = useState({
    0: "",
    1: "",
    2: "",
  });
  const [rolling, setRolling] = useState(false);
  const [awardCoins,setAwardCoins]=useState(0);
  const coins = useSelector((state) => state.slotMachine.coins);
  const status = useSelector((state) => state.slotMachine.status);

  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {

        // fething result of slot Machine after
      if (!rolling) {
        const values = await getValues("POST", "/slotMachineResult", {
          coins: coins,
          fruit1: fruits[0],
          fruit2: fruits[1],
          fruit3: fruits[2],
        });
        dispatch(ballance(values.awardCoin));
        setAwardCoins(values.awardCoin)
              }
    })();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [rolling]);

  // Rolling algorithm 
  const roll = () => {
    setRolling(true);
    dispatch(rollingPrice());

    setTimeout(() => {
      slotRef.forEach((slot, i) => {
        // this will trigger rolling effect
        const selected = triggerSlotRotation(slot.current);
        setFruits((prev) => ({ ...prev, [i]: selected }));
      });

      setRolling(false);
    }, 700);
  };

  // Rolling rells random variables , detect rells value and show it  
  const triggerSlotRotation = (ref) => {
    function setTop(top) {
      ref.style.top = `${top}px`;
    }
    let options = ref.children;
    let randomOption = Math.floor(
      Math.random() * defaultProps[ref.id].fruits.length
    );
    let choosenOption = options[randomOption];
    setTop(-choosenOption.offsetTop + 2);
    return defaultProps[ref.id].fruits[randomOption];
  };

  return (
    <>
      <div className="col-xl-6 col-xxl-12 col-lg-12 col-xxl-6 center">
        <div>
        <Notifications awardCoins={awardCoins}></Notifications>
          <div className="site-statistic-demo-card">
            <Row gutter={16}>
              <Col span={20}>
                <div style={{ display: "flex" }}>
                  <RiCoinsFill
                    color="green"
                    size="50px"
                    display="inline-block"
                  ></RiCoinsFill>
                  <Statistic
                    value={coins}
                    valueStyle={{
                      margin: "5px",
                      color: status ? "green" : "black",
                    }}
                    prefix="$"
                    suffix={!!status ? <ArrowUpOutlined /> : ""}
                  />
                </div>
              </Col>
            </Row>
          </div>
        </div>
        <div className="SlotMachine">
          <div className="slot">
            <section>

              {/* Rells definations */}
              <div className="container" id="0" ref={slotRef[0]}>
                {defaultProps[0].fruits.map((fruit, i) => (
                  <div key={i}>
                    <span>{fruit}</span>
                  </div>
                ))}
              </div>
            </section>
          </div>
          <div className="slot">
            <section>
              <div className="container" id="1" ref={slotRef[1]}>
                {defaultProps[1].fruits.map((fruit,i) => (
                  <div key={i}>
                    <span>{fruit}</span>
                  </div>
                ))}
              </div>
            </section>
          </div>
          <div className="slot">
            <section>
              <div className="container" id="2" ref={slotRef[2]}>
                {defaultProps[2].fruits.map((fruit,i) => (
                  <div key={i}>
                    <span>{fruit}</span>
                  </div>
                ))}
              </div>
            </section>
          </div>
          <div>
            <button
              className={!rolling ? "roll rolling " : "roll "}
              onClick={roll}
              disabled={rolling}
            >
              {rolling ? "Rolling..." : "ROLL"}
            </button>
          </div>

          {/* Informations about the game  */}

          <Row style={{marginTop:"100px"}}>
            <Col  span={17} >
          <p>🍒 🍒 🍒 = <strong>50</strong> coins</p>
          <p>🍎 🍎 🍎 = <strong>20</strong> coins</p>
          <p>🍌 🍌 🍌 = <strong>15</strong> coins</p>
          <p>🍋 🍋 🍋 = <strong>3</strong> coins</p>
          </Col>
          <Col>
          <p>🍒 🍒 = <strong>40</strong> coins</p>
          <p>🍎 🍎  = <strong>10</strong> coins</p>
          <p>🍌 🍌  = <strong>5</strong> coins</p>
          </Col>
          </Row>
        </div>
      </div>
    </>
  );
};
export default SlotMachine;
