const puppy_bowl_competition = async() => {
try {
    const response = await fetch(
      'https://fsa-puppy-bowl.herokuapp.com/api/COHORT-NAME/players'
    );
    const result = await response.json();
    console.log(result);
  } catch (err) {
    console.error(err);
  }

try {
    const response = await fetch(
      'https://fsa-puppy-bowl.herokuapp.com/api/COHORT-NAME/players/1'
    );
    const result = await response.json();
    console.log(result);
  } catch (err) {
    console.error(err);
  }


try {
    const response = await fetch(
      'https://fsa-puppy-bowl.herokuapp.com/api/COHORT-NAME/players',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: 'Rufus',
          breed: 'Irish Setter',
        }),
      }
    );
    const result = await response.json();
    console.log(result);
  } catch (err) {
    console.error(err);
  }
  

fetch('https://fsa-puppy-bowl.herokuapp.com/api/COHORT-NAME/players', {
    method: 'DELETE',
  });
  try {
    const response = await fetch(
      'https://fsa-puppy-bowl.herokuapp.com/api/COHORT-NAME/players/1',
      {
        method: 'DELETE',
      }
    );
    const result = await response.json();
    console.log(result);
  } catch (err) {
    console.error(err);
  }

try {
    const response = await fetch(
      'https://fsa-puppy-bowl.herokuapp.com/api/COHORT-NAME/teams'
    );
    const result = await response.json();
    console.log(result);
  } catch (err) {
    console.error(err);
  }
};

