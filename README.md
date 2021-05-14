# Invictus Challenge
## Top N most frequently occurring words in the file

## React - Express App

### [Heroku Deploy](https://invictus-challenge.herokuapp.com/)

### Installation:
```$ git clone https://github.com/utkarshbot/invictus-challenge.git```

```$ npm install```

```$ npm start```
 

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



In wordCounter function the text received from the url is stored in text and then split after each white space
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

## 
