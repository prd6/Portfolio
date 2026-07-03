const Navber = () => {
  return (
    <>
        <div className="nav-container
        flex justify-between items-center w-full h-20 border-b-2 border-(--border-color) bg-(--bg-color) text-(--text-color) fixed z-10
        ">

            <div className="nav-logo
            text-3xl font-semibold ml-5
            ">
                Portfolio
            </div>

            <div className="nav-items mr-5 p-2 rounded-3xl w-2/5 flex justify-center">
                <ul className="w-full flex justify-around items-center text-lg overflow-x-hidden">
                    <li><a href="">WhoAmI</a></li>
                    <li><a href="">Works</a></li>
                    <li><a href="">Constributions</a></li>
                    <li><a href="">Achivements</a></li>
                    <li><a href="">Contact</a></li>
                </ul>
            </div>
        
        </div>
    </>
  )
}

export default Navber