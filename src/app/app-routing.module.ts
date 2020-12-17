import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { IndexComponent } from "./index/index.component";
import { DetailComponent } from "./detail/detail.component";

const routes: Routes = [
  { path: "", component: IndexComponent },
  { path: "detail/:id", component: DetailComponent },
  { path: "**", redirectTo: "" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
