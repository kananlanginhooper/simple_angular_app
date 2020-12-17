import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class GlobalService {

  promiseFetchPhotoList: Promise<boolean>;
  photosList = [];

  constructor(public httpClient: HttpClient) {
    this.promiseFetchPhotoList = new Promise<boolean>((resolve, reject) => {
      this.httpClient.get<object[]>(`https://jsonplaceholder.typicode.com/photos`).subscribe(ret => {
        this.photosList = ret.slice(0, 50);
        resolve(true);
      });
    });
  }

  async getPhoto(PhotoId: number): Promise<object> {
    await this.promiseFetchPhotoList;
    return new Promise<object>(resolve => {
      const arrPhoto = this.photosList.filter(photo => photo.id === PhotoId);
      resolve(arrPhoto[0]);
    });
  }

}
