import React from 'react'

const About = () => {
  return (
    <div className="homepage">
      <div className="paragraphone">
        <h1>
          <span className="anime">Anime</span> Data
        </h1>
        <p>
          Complete anime data. Ranking, synopsis, genre, search by title. Over
          20k data updated everyday.
        </p>
        <button className="moreAnimes">See More</button>
      </div>
      <div className="image">
        <img
          src="https://images.unsplash.com/photo-1627012441283-79151a20adf6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fDNkJTIwYW5pbWF0aW9ufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
          alt="img"
        />
      </div>
    </div>  )
}

export default About