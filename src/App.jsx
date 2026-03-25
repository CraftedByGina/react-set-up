import users from './data/users'
import todos from './data/todos'
import './App.css'

function App() {
  return (
    <div>
      <h1>Hello React</h1>
      <Users users={users} />
      <Todos todos={todos} />
    </div>
  )
}

function Users({ users }) {
  const websiteHref = (website) =>
    website.startsWith('http://') || website.startsWith('https://')
      ? website
      : `https://${website}`

  return (
    <section>
      <h2>Users</h2>

      {users.map((user) => (
        <article key={user.id}>
          <h3>{user.name}</h3>

          <p>
            Email: <a href={`mailto:${user.email}`}>{user.email}</a>
          </p>

          <address>
            Address: {user.address.street}, {user.address.suite},{' '}
            {user.address.city} {user.address.zipcode}
          </address>

          <p>Company: {user.company.name}</p>

          <p>
            Website:{' '}
            <a href={websiteHref(user.website)} target="_blank" rel="noreferrer">
              {user.website}
            </a>
          </p>
        </article>
      ))}
    </section>
  )
}

function Todos({ todos }) {
  return (
    <section>
      <h2>Todos</h2>

      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <p>{todo.title}</p>
            <p>{todo.completed ? 'Completed' : 'In progress'}</p>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default App
