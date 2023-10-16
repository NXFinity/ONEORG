import { NgModule } from '@angular/core';
import { HttpService } from './http/http.service';
import { UserService } from './user/user.service';
import { AuthService } from './auth/auth.service';

@NgModule({
  imports: [],
  exports: [],
  declarations: [],
  providers: [
    HttpService,
    UserService,
    AuthService,
  ],
})
export class CoreModule {}
