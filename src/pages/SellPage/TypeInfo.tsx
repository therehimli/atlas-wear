const TypeInfo = () => {
  return (
    <div className="flex flex-col items-center gap-1">
      <h3>Choose type</h3>
      <div className="flex justify-between items-center gap-4">
        <label className="flex items-center gap-2 p-2 border-2 rounded-full">
          <input name="gender" type="radio" className="w-5 h-5" />
          <img
            width="20"
            height="20"
            src="https://img.icons8.com/color/48/standing-woman.png"
            alt="standing-woman"
          />
          <div className="text-center text-[18px]">Man</div>
        </label>

        <label className="flex items-center gap-2 p-2 border-2 rounded-full">
          <input name="gender" type="radio" className="w-5 h-5" />
          <img
            width="20"
            height="20"
            src="https://img.icons8.com/color/48/standing-man.png"
            alt="standing-man"
          />
          <div className="text-center text-[18px]">Woman</div>
        </label>
        <label className="flex items-center gap-2 p-2 border-2 rounded-full">
          <input name="gender" type="radio" className="w-5 h-5" />

          <img
            width="20"
            height="20"
            src="https://img.icons8.com/color/48/unisex--v2.png"
            alt="unisex--v2"
          />
          <div className="text-center text-[18px]">Unisex</div>
        </label>
        <label className="flex items-center gap-2 p-2 border-2 rounded-full">
          <input name="gender" type="radio" className="w-5 h-5" />
          <img
            width="20"
            height="20"
            src="https://img.icons8.com/color/48/girl.png"
            alt="girl"
          />
          <div className="text-center text-[18px]">Kid</div>
        </label>
      </div>
    </div>
  )
}

export default TypeInfo
