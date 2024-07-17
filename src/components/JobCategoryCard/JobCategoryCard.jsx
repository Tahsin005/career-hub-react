import { MdAccountBalance } from "react-icons/md";
import { MdLightbulbCircle } from "react-icons/md";
import { TbTransactionDollar } from "react-icons/tb";
import { MdEngineering } from "react-icons/md";
const JobCategoryCard = () => {
    return (
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 my-12">
            <div>
                <div className="border-2 p-4 rounded-xl bg-[#EFECFF]">
                    <MdAccountBalance size={30} className="text-base mr-2" />
                    <h3 className="text-lg font-semibold">Account & Finance</h3>
                    <p className="text-gray-400">300 Jobs Available</p>
                </div>
            </div>
            <div>
                <div className="border-2 p-4 rounded-xl bg-[#EFECFF]">
                    <MdLightbulbCircle size={30} className="text-base mr-2" />
                    <h3 className="text-lg font-semibold">Creative Design</h3>
                    <p className="text-gray-400">100+ Jobs Available</p>
                </div>
            </div>
            <div>
                <div className="border-2 p-4 rounded-xl bg-[#EFECFF]">
                    <TbTransactionDollar size={30} className="text-base mr-2" />
                    <h3 className="text-lg font-semibold">Marketing & Sales</h3>
                    <p className="text-gray-400">150 Jobs Available</p>
                </div>
            </div>
            <div>
                <div className="border-2 p-4 rounded-xl bg-[#EFECFF]">
                    <MdEngineering size={30} className="text-base mr-2" />
                    <h3 className="text-lg font-semibold">Engineering Job</h3>
                    <p className="text-gray-400">224 Jobs Available</p>
                </div>
            </div>
        </div>
    );
};

export default JobCategoryCard;