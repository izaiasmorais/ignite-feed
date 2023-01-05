import { Header } from "./components/Header";
import { Post } from "./components/Post";
import { Sidebar } from "./components/Sidebar";
import "./styles/global.css";

function App() {
	return (
		<div className="h-full w-full pb-10 bg-gray-900 text-gray-300 ">
			<Header />

			<div
				className="max-w-[1120px] mx-auto my-2 py-0 px-1 grid grid-cols-main
      gap-8 items-stretch mt-4"
			>
				<Sidebar />
				<main className="grid gap-8">
					<Post />
					<Post />
				</main>
			</div>
		</div>
	);
}

export default App;
