interface User {
    id: number;
    name: string;
    email: string;
    username:string;
}

const Page = async() => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users'
    )
    const users: User[] = await res.json()

    return(
        <>
            <h1 className="text-center mt-10 font-bold text-3xl text-orange-500">Dashboard Page</h1>
            <div className="overflow-x-auto mt-5">
            <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                    <tr>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">Name</th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">Username</th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">Email</th>
                    </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                    {users.map(user => (
                    <tr key={user.id}>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{user.name}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{user.username}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{user.email}</td>
                    </tr>
                    ))}
                </tbody>
            </table>

            </div>
        </>
    )
}
export default Page