interface Todo{
	text: string;
	complete:boolean;
}
type ToggleTodo=(selectedToto:Todo)=>void;

type AddTodo=(text:string)=>void;