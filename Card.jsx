import React from "react";
import { FaRegFileAlt } from "react-icons/fa";
import { MdOutlineFileDownload } from "react-icons/md";
import { IoIosClose } from "react-icons/io";
import { motion } from "framer-motion"

function Card({ data }) {
  return (
    <motion.div drag className="relative flex-shrink-0 w-60 h-72 rounded-[30px] bg-zinc-900/90 text-white px-8 py-10 overflow-hidden">
      <FaRegFileAlt />
      <p className="text-sm leading-tight mt-5 font-semibold">{data.desc}</p>
      <div className="footer absolute bottom-0 w-full left-0">
        <motion.div drag className="flex items-center justify-between px-8 py-3 mb-3">
          <h5>{data.filesize}</h5>
          <span className="w-7 h-7 bg-zinc-600 rounded-full flex items-center justify-center">
            {data.close ? (
              <IoIosClose />
            ) : (
              <MdOutlineFileDownload size=".7em" color="#fff" />
            )}
          </span>
        </motion.div>
        {data.tag.isOpen && (
          <motion.div drag 
            className={`tag w-full py-4 ${
              data.tag.tagColor === "blue" ? "bg-blue-600": "bg-green-600"
            } flex items-center justify-center`}
          >
            <h3 className="text-sm font-semibold">{}data.tag.tagTitle</h3>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
}

export default Card;
