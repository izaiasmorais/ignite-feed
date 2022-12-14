import { PencilSimpleLine } from "phosphor-react";

export function Sidebar() {
	return (
		<aside className="bg-gray-800 w-full rounded-lg overflow-hidden max-h-[291px]">
			<img
				className="w-full object-cover h-[72px]"
				src="https://images.unsplash.com/photo-1521185496955-15097b20c5fe?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80"
			/>

			<div className="flex flex-col items-center mt-[-2rem]">
				<img
					className="w-[4rem] h-[4rem] rounded-lg border-[4px] border-solid
          border-gray-800 outline outline-[2px] outline-green-300
          box-[initial]"
					src="https://avatars.githubusercontent.com/u/53953937?v=4"
				/>
				<strong className="mt-4 text-gray-100 leading-6">Izaías Lima</strong>
				<span className="text-sm text-gray-400 leading-6">
					Full-stack developer
				</span>
			</div>

			<footer
				className="border-t-[1px] border-gray-600 mt-[1.5rem] p-6 pt-6 flex
			items-center justify-center"
			>
				<a
					href="#"
					className="w-[200px] bg-transparent color-green-500 border-solid rounded-lg
          h-[50px] py-0 px-[1.5rem] border-[1px] border-green-300 text-green-300
          flex items-center justify-center gap-2 text-base font-bold"
				>
					<PencilSimpleLine size={24} />
					Editar seu perfil
				</a>
			</footer>
		</aside>
	);
}
