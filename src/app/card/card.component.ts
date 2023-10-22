import { AstMemoryEfficientTransformer } from '@angular/compiler'
import{ Component } from '@angular/core'

@Component({
    selector: 'app-card',
    templateUrl: './card.component.html',
    styleUrls: ['./card.component.css']
    
})
export class CardComponent{
    disabled = false
    Showtext(){
        this.disabled=!this.disabled
    }

films: any[]=[
    {
    "imgUrl": 'https://upload.wikimedia.org/wikipedia/en/2/2e/Bohemian_Rhapsody_poster.png',
    "cardTitle": 'Bohemian Rhapsody',
    "cardText": "Bohemian Rhapsody is a 2018 biographical musical drama film directed by Bryan Singer[a] from a screenplay by Anthony McCarten, and produced by Graham King and Queen manager Jim Beach. The film tells the story of the life of Freddie Mercury, the lead singer of the British rock band Queen, from the formation of the band in 1970 up to their 1985 Live Aid performance at the original Wembley Stadium. The film stars Rami Malek as Mercury, with Lucy Boynton, Gwilym Lee, Ben Hardy, Joe Mazzello, Aidan Gillen, Tom Hollander, and Mike Myers in supporting roles. Queen members Brian May and Roger Taylor also served as consultants on the film. A British-American venture, the film was produced by Regency Enterprises, GK Films and Queen Films, with 20th Century Fox serving as distributor.",
    "btnBtnInfo": "Show text" 
    },
    {
    "imgUrl": 'https://upload.wikimedia.org/wikipedia/en/a/a9/Platoon_posters_86.jpg',
    "cardTitle": 'Platoon',
    "cardText": "Platoon is a 1986 American war film written and directed by Oliver Stone, starring Tom Berenger, Willem Dafoe, Charlie Sheen, Keith David, Kevin Dillon, John C. McGinley, Forest Whitaker, and Johnny Depp. It is the first film of a trilogy of Vietnam War films directed by Stone, followed by Born on the Fourth of July (1989) and Heaven & Earth (1993). The film, based on Stone's experience from the war, follows a U.S. Army volunteer (Sheen) serving in Vietnam while his Platoon Sergeant and his Squad Leader (Berenger and Dafoe) argue over the morality in the platoon and of the war itself.",
    "btnBtnInfo": "Show text"       
    },
    {
    "imgUrl": 'https://upload.wikimedia.org/wikipedia/en/8/89/Pirates_of_the_Caribbean_-_The_Curse_of_the_Black_Pearl.png',
    "cardTitle": 'Pirates of the Caribbean',
    "cardText": "Pirates of the Caribbean: The Curse of the Black Pearl is a 2003 American fantasy swashbuckler film directed by Gore Verbinski and the first film in the Pirates of the Caribbean film series. Produced by Walt Disney Pictures and Jerry Bruckheimer, the film is based on Walt Disney's Pirates of the Caribbean attraction at Disney theme parks.[3] The story follows pirate Jack Sparrow (Johnny Depp) and blacksmith Will Turner (Orlando Bloom) as they rescue the kidnapped Elizabeth Swann (Keira Knightley) from the cursed crew of the Black Pearl, captained by Hector Barbossa (Geoffrey Rush), who become undead skeletons in moonlight.",
    "btnBtnInfo": "Show text"       
    },
    {
    "imgUrl": 'https://upload.wikimedia.org/wikipedia/en/7/70/Secret_Window_movie.jpg',
    "cardTitle": 'Secret Window',
    "cardText": "Secret Window is a 2004 American psychological thriller film starring Johnny Depp and John Turturro. It was written and directed by David Koepp, based on the novella Secret Window, Secret Garden by Stephen King,[1] featuring a musical score by Philip Glass and Geoff Zanelli. The story appeared in King's 1990 collection Four Past Midnight. The film was released on March 12, 2004, by Columbia Pictures; it was a moderate box office success and received mixed reviews from critics.",
    "btnBtnInfo": "Show text"       
    }
]
}