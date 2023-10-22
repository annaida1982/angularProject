import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card2',
  templateUrl: './card2.component.html',
  styleUrls: ['./card2.component.css']
})
export class Card2Component {
  disabled = false
    Showtext(){
        this.disabled=!this.disabled
    }
films: any[]=[
    {
    "imgUrl": 'https://upload.wikimedia.org/wikipedia/en/b/be/Once_Upon_a_Time_in_Mexico.jpg',
    "cardTitle": 'Once Upon a Time in Mexico',
    "cardText": "Once Upon a Time in Mexico (also known as Desperado 2) is a 2003 American neo-Western action film written, directed, produced, photographed, scored, and edited by Robert Rodriguez. It is the final film in Rodriguez's Mexico Trilogy, and it is a sequel to 1992's El Mariachi and 1995's Desperado. The film features Antonio Banderas in his second and final performance as El Mariachi. In the film, El Mariachi is recruited by CIA agent Sheldon Sands (Johnny Depp) to kill a corrupt general responsible for the death of his wife, Carolina (Salma Hayek).",
    "btnBtnInfo": "Show text"     
    },
    {
    "imgUrl": 'https://upload.wikimedia.org/wikipedia/en/a/aa/The_Libertine_film.jpg',
    "cardTitle": 'The Libertine',
    "cardText": "The Libertine is a 2004 British-Australian drama film, the first film directed by Laurence Dunmore. It was adapted by Stephen Jeffreys from his play of the same name, starring Johnny Depp, John Malkovich, Samantha Morton, and Rosamund Pike.",
    "btnBtnInfo": "Show text"    
    },
    {
    "imgUrl": 'https://upload.wikimedia.org/wikipedia/en/7/7a/Ilssefilmposter.jpg',
    "cardTitle": 'Happily Ever After ',
    "cardText": "Happily Ever After (French: Ils se marièrent et eurent beaucoup d'enfants; Translation: They married and had many children) is a 2004 French comedy drama film. The film is written and directed by Yvan Attal, produced by Claude Berri, and starring Charlotte Gainsbourg and Yvan Attal",
    "btnBtnInfo": "Show text"    
    },
    {
    "imgUrl": 'https://upload.wikimedia.org/wikipedia/en/1/17/Charlie_and_the_Chocolate_Factory_%28film%29.png',
    "cardTitle": 'Charlie and the Chocolate Factory',
    "cardText": "Charlie and the Chocolate Factory is a 2005 musical fantasy film directed by Tim Burton and written by John August, based on the 1964 British novel of the same name by Roald Dahl. The film stars Johnny Depp as Willy Wonka and Freddie Highmore as Charlie Bucket, alongside David Kelly, Helena Bonham Carter, Noah Taylor, Missi Pyle, James Fox, Deep Roy, and Christopher Lee. The storyline follows Charlie as he wins a contest along with four other children and is led by Wonka on a tour of his chocolate factory.",
    "btnBtnInfo": "Show text"     
    }
]
}
