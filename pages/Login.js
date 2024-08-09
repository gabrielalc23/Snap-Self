import Head from "next/head";

const Login = () =>{
    return(
        <>
        <Head>
            <title>Snap Self</title>
        </Head>
        <h2 className="flex justify-center text-3xl font-bold">É necessário fazer Login</h2>

        <div className="w-full max-w-md md:max-w-lg lg:max-w-2xl p-8 bg-gray-800 rounded-lg shadow-lg">
          <form className="space-y-6">
            <div>
              <label className="block text-sm font-medium mb-1 text-white">Digite o seu nome</label>
              <input type="text" placeholder="Seu nome..." className="w-full px-3 py-2 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"/>
            </div>
            <div>
              <label className="block text-sm font-medium mb-1 text-white">Digite o seu sobrenome</label>
              <input type="text" placeholder="Seu sobrenome..." className="w-full px-3 py-2 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"/>
            </div>
            <div>
              <label className="block text-sm font-medium mb-1 text-white">Email</label>
              <input type="email" placeholder="Seu email..." className="w-full px-3 py-2 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"/>
            </div>
            <div>
              <label className="block text-sm font-medium mb-1 text-white">Digite sua senha</label>
              <input type="password" placeholder="Sua senha..." className="w-full px-3 py-2 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"/>
            </div>
            <div>
              <label className="block text-sm font-medium mb-1 text-white">Confirme sua senha</label>
              <input type="password" placeholder="Sua senha..." className="w-full px-3 py-2 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"/>
            </div>
          </form>
        </div>
        </>
    )
}
export default Login;