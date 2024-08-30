import { useState } from "react"
import { toppings } from "./data"

function App() {
  const [total, setTotal] = useState(0);
  const [top, setTop] = useState([])
  const [show, setShow] = useState(false)

  const submit = e => {
    e.preventDefault();
    setShow(!show)

  }
  console.log(top);
  return (
    <>
      <div className="p-20">
        <h1 className="text-3xl mt-4 text-center gap-3 p-4">Select Topping</h1>
        <form className="flex flex-col border-2 w-2/4 content-center mx-auto" onSubmit={submit}>
          {toppings.map((el) => (
            <label key={el.name}>
              <div className="flex content-between justify-between p-5 border">
                <div>
                  <input type="checkbox" value={el.price} name={el.name}
                    onChange={(e) => {
                      if (e.target.checked) {
                        setTotal(total + +e.target.value);
                        const newTop = [...top]
                        newTop.push(e.target.name)
                        setTop(newTop)
                      } else {
                        setTotal(total - +e.target.value);
                        setTop(top.filter(el => el !== e.target.name))
                      }
                    }} />
                  {el.name}
                </div>
                <div className="text-right">${el.price.toFixed(2)}</div>
              </div>
            </label>
          ))}
          <div >
            <div className="flex content-between justify-between border p-5 bg-slate-100 ">
              Total :
              <div>${total.toFixed(2)}</div>
            </div>
          </div>
          <button className="bg-slate-600 text-white p-2">Check Out</button>
        </form>
      
      </div>
      <div className="text-center border p-7 bg-slate-500 w-2/4  content-center  mx-auto mb-10 gap-3 text-white">
        {
          show && top.map(el => {
            return <p key = {el}>{el}</p>
          })
        }
      </div>
    </>
  );
}

export default App;
