# Invictus Challenge
## Top N most frequently occurring words in the file

## React - Express App

### [Heroku Deploy](https://invictus-challenge.herokuapp.com/)

### Installation:
```$ git clone https://github.com/utkarshbot/invictus-challenge.git```

```$ npm install```

```$ npm start```

## Packages Needed - 

Express ```$ npm install express```

Request ```$ npm install request```


## Code Components:

        wordArray = text.toLowerCase().split(/\W+/)

        wordArray.forEach((key) => {
            if (words.hasOwnProperty(key)) {
                words[key] += 1
            } else {
                words[key] = 1
            }
        })

        wordCount = Object.keys(words).map((key) => {
            return {
                word: key,
                count: words[key]
            }
        })

        wordCount.sort((a, b) => b.count - a.count)

        return callback(wordCount)



In Counter function the text received from the url is stored in text and then split after each white space
and stored in wordArray. Count of words is determined by checking if wordPool.hasOwnProperty.
Then they are stored in wordCount which is an array of objects. This array is sorted and returns as many top results
as requested from the frontend.



         useEffect(async () => {
            setLoading(true)
            const res = await fetch('/data')
            const data = await res.json();
            setWords(data)
            setLoading(false)
         }, [])
         
         
         
Fetch  from /data from the React Functional Component and shows Loading while the data is fetched.

## Loading Screen while fetching data - 

![Screenshot (417)](https://user-images.githubusercontent.com/56169246/118292379-2e7f9600-b4f6-11eb-8b10-fea2d4e09d0d.png)

## Landing Page shows a card with an input and two buttons -

![Screenshot (418)](https://user-images.githubusercontent.com/56169246/118292633-79011280-b4f6-11eb-9fbf-4ce4c9cf4e4a.png)

## Validations - 
![Screenshot (419)](https://user-images.githubusercontent.com/56169246/118292753-946c1d80-b4f6-11eb-85e8-8109437c5751.png)
![Screenshot (420)](https://user-images.githubusercontent.com/56169246/118292806-a352d000-b4f6-11eb-98bb-6f0029767e7f.png)

## List of Words on Entering valid Input - 
![Screenshot (421)](https://user-images.githubusercontent.com/56169246/118292908-c1203500-b4f6-11eb-9bbb-f7665ed8d39d.png)

## List clears itself on clearing input feild or on clicking Reset Button -
![Screenshot (422)](https://user-images.githubusercontent.com/56169246/118299547-83270f00-b4fe-11eb-9cc1-e551bde82186.png)

# Responsiveness - 
![Screenshot (427)](https://user-images.githubusercontent.com/56169246/118299652-a356ce00-b4fe-11eb-9e0a-aa00817eec08.png)
![Screenshot (424)](https://user-images.githubusercontent.com/56169246/118299655-a3ef6480-b4fe-11eb-8c0b-8ccf2810ce13.png)
![Screenshot (425)](https://user-images.githubusercontent.com/56169246/118299644-a18d0a80-b4fe-11eb-95da-6077bcabf84a.png)
![Screenshot (426)](https://user-images.githubusercontent.com/56169246/118299650-a2be3780-b4fe-11eb-9b43-9143fbbcb83f.png)



