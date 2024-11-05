import React, { useContext } from "react";
import LevelContext from "../../ContextAPI/Context";
import succImg from "../../assets/Group.png"
import { useNavigate } from "react-router-dom";
const Modal = () => {
    const { sentTotalPriceModal, setsentTotalPriceModal } = useContext(LevelContext);
    const { detailsCard, setDetailsCard } = useContext(LevelContext);
    const homePage = useNavigate('/')
    const cutMoney =()=>{
        setsentTotalPriceModal(0)
        setDetailsCard ([])
        homePage()
    }
  return (
    <div>
      <dialog id="my_modal_1" className="modal">
        <div className="modal-box flex items-center justify-center flex-col space-y-3  py-10">
            <div>
                <img src={succImg} alt="" />
            </div>
          <h3 className="font-bold text-lg border-b-2 pb-10">Payment Successfully</h3>
          <p className="py-4">
            Thanks for purchasing
            
          </p>
          <p>Total: {sentTotalPriceModal}</p>
          <div className=" w-full ">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button onClick={()=>cutMoney()} className="btn font-semibold w-8/12 mx-auto block rounded-full">Close</button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default Modal;
