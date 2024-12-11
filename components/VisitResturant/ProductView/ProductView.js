import { FaRegStar } from "react-icons/fa6";
import { FaStar } from "react-icons/fa";
const ProductView = ()=>{
    return(
        <div className="space-y-6">
            <div>
                <img src="https://i.ibb.co.com/0qCQkmR/villagio1.png" className="w-[1430px] 
                h-[603px]"></img>
                <h2 className="text-[40px] font-medium">
                <span className="text-[#00B047]">Villagio </span>Restaurant & Bar</h2>
            </div>
            <div>
                <div className="flex gap-7">
                    <img src="https://i.ibb.co.com/yqmVCbP/Vector.png"
                    className="w-[21px] h-[30px]"></img>
                    <div>
                        <p className="text-[24px]">360 San Lorenzo Avenue, Suite <br></br>
                        1430 Coral Gables, FL 33146-1865 |</p>
                    </div>
                </div>
                <div className="flex gap-3 items-center mt-5">
                    <FaStar className="text-[#FF7D29] w-[44px] h-[44px]"></FaStar>
                    <FaStar className="text-[#FF7D29] w-[44px] h-[44px]"></FaStar>
                    <FaStar className="text-[#FF7D29] w-[44px] h-[44px]"></FaStar>
                    <FaStar className="text-[#FF7D29] w-[44px] h-[44px]"></FaStar>
                    <FaStar className="w-[44px] h-[44px]"></FaStar>
                    <h3 className="text-[38px] font-bold">(4.3)</h3>
                </div>
            </div>
        </div>
    )
}
export default ProductView;