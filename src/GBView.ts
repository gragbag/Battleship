import { Gameboard } from "./Gameboard";
import { Ship } from "./Ship";

const viewBoard = (gameboard: Gameboard, container: HTMLDivElement, revealShips: boolean) => {
	clearBoard(container);
	const board = gameboard.board;
	for (let r = 0; r < 10; r++) {
		for (let c = 0; c < 10; c++) {
			const tile = document.createElement("div");
			tile.classList.add("flex", "items-center", "justify-center", "w-12", "h-12");

			if (board[r][c] == -1) {
				//Missed Tile
				tile.classList.add("bg-blue-200", "border", "border-blue-400", "text-4xl");
				tile.textContent = "X";
			} else if (board[r][c] == 1) {
				//Hit Tile
				tile.classList.add("bg-gray-400", "border", "border-gray-400", "text-red-700", "text-4xl", "bold");
				tile.textContent = "X";
			} else if (revealShips && board[r][c] instanceof Ship) {
				//Ship Exists And Can Be Shown
				tile.classList.add("bg-gray-400", "border", "border-gray-400");
			} else {
				//Water Tile
				tile.classList.add("bg-blue-200", "border", "border-blue-400");
			}

			tile.setAttribute("data-row", String(r));
			tile.setAttribute("data-col", String(c));

			if (board[r][c] != -1 && board[r][c] != 1 && !revealShips) {
				tile.addEventListener("click", (e) => {
					const target = e.target as HTMLDivElement;
					const row = Number(target.getAttribute("data-row"));
					const col = Number(target.getAttribute("data-col"));

					gameboard.receiveAttack(row, col);

					document.dispatchEvent(
						new CustomEvent("tileClick", {
							detail: {
								row,
								col,
							},
						})
					);
				});

				tile.classList.add("hover:cursor-pointer");
			}

			container.appendChild(tile);
		}
	}
};

const viewEnemyBoard = (gameboard: Gameboard, container: HTMLDivElement) => {};

const clearBoard = (container: HTMLDivElement) => {
	container.innerHTML = "";
};

export { viewBoard, clearBoard };
