import { users } from "."
import { images } from "../../assets/imgExport"

const Users = () => {
    return (
        <div className="flex flex-col gap-[60px] mb-[100px] lg:mb-[170px] mx-4 md:mx-10 lg:mx-[120px]">
            {/* this is for user heading section */}
            <div className="flex flex-col justify-center items-center">
                <h1 className="user_heading text-2xl md:text-4xl lg:text-[48px]">What Our Users Are Saying</h1>
                <p className="text-center build_desc">Real stories from clients, employees, and business owners who use <br className="hidden lg:block"/> our app every day.</p>
            </div>
            {/* this is for user card section */}
            <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                <img className="absolute" src={images.ellipse31} alt="" />
                {users.map(user => (
                    <div className="z-10 flex flex-col gap-[26px] user_card p-[28px]" key={user.id}>
                        <div className="flex items-center gap-5">
                            <img src={user.icon} alt={user.name} />
                            <div>
                                <h2 className="user_card_heading">{user.name}</h2>
                                <h3 className="user_card_role">{user.role}</h3>
                            </div>
                        </div>
                        <p className="user_card_comment lg:w-[331px]">{user.comment}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Users