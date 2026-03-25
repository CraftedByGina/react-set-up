

function App() {
  // Two variables with some values
  const word1 = 'Hello'
  const word2 = 'React'

  // Two number variables
  const num1 = 10
  const num2 = 20

  const profile = {
    name: 'Gina',
    location: 'Connecticut',
    favoriteActivities: ['coding', 'hiking', 'cooking'],
  }

  const cat = {
    color: 'calico',
    numberOfKittens: 3,
    imageUrl:
      'https://bestfriends.org/sites/default/files/inline-images/Foster-Agave-1-byAnnika-Harley.jpg',
  }

  return (
    <>
      <div className="App">
        <h1>
          {word1} {word2}
        </h1>

        <p>
          {num1} + {num2} = {num1 + num2}
        </p>
        <p>
          {num1} - {num2} = {num1 - num2}
        </p>
        <p>
          {num1} × {num2} = {num1 * num2}
        </p>
        <p>
          {num1} ÷ {num2} = {num1 / num2}
        </p>

        <p>
          My name is {profile.name} and I live in {profile.location}.
        </p>

        <ul>
          <li>{profile.favoriteActivities[0]}</li>
          <li>{profile.favoriteActivities[1]}</li>
          <li>{profile.favoriteActivities[2]}</li>
        </ul>

        <figure>
          <img src={cat.imageUrl} alt={`${cat.color} cat`} />
          <figcaption>
            This is a {cat.color} cat with {cat.numberOfKittens} kittens.
          </figcaption>
        </figure>

        {/* JSX comment:  we are learning variables, objects, arrays, and JSX rendering */}
      </div>
    </>
  )
}

export default App
