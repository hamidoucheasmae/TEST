import { Component, OnInit } from '@angular/core';
import { UserInfo } from 'os';
import { Visiteur } from 'src/app/models/visiteur';
import { VisiteursService } from 'src/app/services/visiteurs.service';




@Component({
  selector: 'app-comment-form',
  templateUrl: './comment-form.component.html',
  styleUrls: ['./comment-form.component.scss'],
})
export class CommentFormComponent implements OnInit {

  constructor(private visiteurService: VisiteursService) { }

  ngOnInit() {}
  onSubmit(formVal: any){
    const subData : Visiteur = {
      name: formVal.name,
      comment: formVal.comment
  }

  this.visiteurService.checkSubs(subData.comment).subscribe(val => {
    console.log(val);
    
    if(val.empty){
      this.visiteurService.addSubs(subData)
      
    }else{
     console.log('errr')
    }
  })

}
}
