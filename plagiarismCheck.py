from lyricsgenius import Genius
import json
import spacy

nlp = spacy.load("en_core_web_md")

token = "zLC9UGlaUHxa5yb2Y-oQRnswK7mjwBrGAO4pSifGOjUMVjKpF4otiAC9s9XXo30y"
genius = Genius(token)

artist = genius.search_artist("Taylor Swift", max_songs=0, sort="title")
song = artist.song("Shake It Off")
artist.add_song(song)
nlp = spacy.load("en_core_web_sm")
nlp.Defaults.stop_words |= {"mmm", "s", "verse", "chorus"}
artist.save_lyrics()

with open('Lyrics_TaylorSwift.json') as f:
  data = json.load(f)
  lyrics = data['songs'][0]['lyrics']
  lyricList = lyrics.split('\n')  # comparison song lyrics

## the parts from the user 
#mySong = "I'm so happy I love making music \n It's so cool and fun\n I never miss a beat \n I'm lightning on my feet "
#writtenLins = mySong.split("\n")

def checkPlag(userWritten):
    lineCount = 0
    message = ""
    for line in userWritten:
        lineCount += 1
        for ogLine in lyricList:
            compLyrics = nlp(line)
            myLyrics = nlp(ogLine)
            similarity = compLyrics.similarity(myLyrics)
            if similarity > 0.8:
                message+=("FLAGGED: Line "+ line+ " has a similarity score that may be too high")
                #message+=("The line is similar to lyrics from "+ song+ " by "+ artist)
   
    return message



#print(keywords(lyrics))







