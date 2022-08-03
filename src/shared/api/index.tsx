import { CommentsType, PostsType } from '../store/types/postsPageTypes'
import { UsersType } from '../store/types/usersPageTypes'
import { AuthDataType } from '../store/types/authTypes'

export const postsAPI = {
	getPosts(): Promise<Array<PostsType>> {
		return fetch('https://jsonplaceholder.typicode.com/posts')
			.then(response => {
				return response.json()
			})
	},
	getComments(postId: number): Promise<Array<CommentsType>> {
		return fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
			.then(response => {
				return response.json()
			})
	}
}

export const usersAPI = {
	async getUsers(): Promise<Array<UsersType>> {
		let response = await fetch('https://jsonplaceholder.typicode.com/users')
		return await response.json()
	}
}

export const authAPI ={
	async sendAuthData(authData: AuthDataType): Promise<AuthDataType> {
		let response = await fetch('http://localhost:8080/authData', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(authData)
		})
		return await response.json()
	}
}

// useMemo(() => {}, []) - мемоизирует функцию. Вызывает функцию если меняются значения в массиве зависимостей.
// Если значения не меняются, то использует сохраненный результат данной функции.

// React.memo(() => {component}, () => {условие}) - мемоизирует компонент. Если изменяются пропсы, делает ререндер, если
// не изменяются использует сохраненный результат. Вторым условием передается специальная функция-условие, если это надо.

// useCallback(() => {}, []) - сохраняет ссылку на функцию в момент рендера компоненты, при следующем рендере это компоненты,
// эта функция не будет создаваться заного, а будет использоваться старая. Не решает проблем ререндера других компонент, в которые
// передаются эти функции обернутые useCallback, т.к. эти компоненты не проверят пришли им новы пропсы, или старые.

// const dispatch = useDispatch() - присваевает переменной функцию dispatch редакса, в последствии чего, можно диспатчить экшены.

// const zxc = useSelector(state => state.postsPage.posts) - работает как обычный селектор, достаёт и предоставляет данные из стэйта