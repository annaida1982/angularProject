import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card3',
  templateUrl: './card3.component.html',
  styleUrls: ['./card3.component.css']
})
export class Card3Component  {
  disabled = false
  Showtext(){
      this.disabled=!this.disabled
  }
films: any[]=[
  {
  "imgUrl": 'https://upload.wikimedia.org/wikipedia/en/a/aa/Pirates_of_the_Caribbean_-_The_Legend_of_Jack_Sparrow_Coverart.jpg',
  "cardTitle": 'Pirates of the Caribbean: The Legend of Jack Sparrow',
  "cardText": "Pirates of the Caribbean: The Legend of Jack Sparrow is an action-adventure video game by American developer 7 Studios for the PlayStation 2 and Microsoft Windows. It features playable levels based on the experiences of Captain Jack Sparrow, voiced by Johnny Depp who portrays him in the movies, after the events of Pirates of the Caribbean: The Curse of the Black Pearl. The game includes action, puzzles and humorous cutscenes.",
  "btnBtnInfo": "Show text"     
  },
  {
  "imgUrl": 'https://upload.wikimedia.org/wikipedia/en/4/4b/Sweeneylarge.jpg',
  "cardTitle": 'Sweeney Todd: The Demon Barber of Fleet Street',
  "cardText": "Sweeney Todd: The Demon Barber of Fleet Street is a 2007 musical slasher film directed by Tim Burton and an adaptation of Stephen Sondheim and Hugh Wheeler's Tony Award-winning 1979 musical of the same name. The film retells the melodramatic Victorian tale of Sweeney Todd (Johnny Depp), an English barber and serial killer who murders his customers with a straight razor and, with the help of his accomplice, Mrs. Lovett (Helena Bonham Carter), processes their corpses into meat pies.",
  "btnBtnInfo": "Show text"    
  },
  {
  "imgUrl": 'https://upload.wikimedia.org/wikipedia/en/3/36/Alice_in_Wonderland_%282010_film%29.png',
  "cardTitle": 'Alice in Wonderland',
  "cardText": "Alice in Wonderland is a 2010 American dark fantasy film directed by Tim Burton from a screenplay written by Linda Woolverton. The film stars Mia Wasikowska in the title role, with Johnny Depp, Anne Hathaway, Helena Bonham Carter, Crispin Glover, and Matt Lucas, and features the voices of Alan Rickman, Stephen Fry, Michael Sheen, and Timothy Spall. A live-action adaptation and re-imagining of Lewis Carroll's works, Alice in Wonderland follows Alice Kingsleigh, a nineteen-year-old who accidentally falls down the rabbit hole and restore the White Queen to her throne, with the help of the Mad Hatter. She is the only one who can slay the Jabberwocky, a dragon-like creature that is controlled by the Red Queen and terrorizes Underland's inhabitants. In this situation, the Hatter and Alice fight against the Red Queen to protect the world.",
  "btnBtnInfo": "Show text"    
  },
  {
  "imgUrl": 'https://upload.wikimedia.org/wikipedia/en/0/0d/TheLoneRanger2013Poster.jpg',
  "cardTitle": 'The Lone Ranger',
  "cardText": "The Lone Ranger is a 2013 American Western film directed by Gore Verbinski and written by Justin Haythe, Ted Elliott and Terry Rossio. Based on the title character of the same name, the film stars Johnny Depp as Tonto, the narrator of the events and Armie Hammer as John Reid, the Lone Ranger. The story tells through Tonto's memories of the duo's earliest efforts to subdue local villainy and bring justice to the American Old West. William Fichtner, Barry Pepper, Ruth Wilson, James Badge Dale, Tom Wilkinson, Helena Bonham Carter, and Curtis Cregan are featured in supporting roles. This was the first theatrical film featuring the Lone Ranger and Tonto characters since William A. Fraker's 1981 film, The Legend of the Lone Ranger.",
  "btnBtnInfo": "Show text"     
  }
]
}
