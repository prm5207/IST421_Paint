import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError, tap, map } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};
const apiBrush = "/brush";
const apiPaint = "/paint";
const apiRoller = "/roller";
const apiRollerPan = "/rollerpan"

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }
  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError('Something bad happened; please try again later.');
  };

  private extractData(res: Response) {
    let body = res;
    return body || { };
  }

  getBrushes(): Observable<any> {
    return this.http.get(apiBrush, httpOptions).pipe(
      map(this.extractData),
      catchError(this.handleError));
  }

  getBrush(id: string): Observable<any> {
    const url = `${apiBrush}/${id}`;
    return this.http.get(url, httpOptions).pipe(
      map(this.extractData),
      catchError(this.handleError));
  }

  postBrush(data): Observable<any> {
    return this.http.post(apiBrush, data, httpOptions)
      .pipe(
        catchError(this.handleError)
      );
  }

  updateBrush(id: string, data): Observable<any> {
    const url = `${apiBrush}/${id}`;
    return this.http.put(url, data, httpOptions)
      .pipe(
        catchError(this.handleError)
      );
  }

  deleteBrush(id: string): Observable<{}> {
    const url = `${apiBrush}/${id}`;
    return this.http.delete(url, httpOptions)
      .pipe(
        catchError(this.handleError)
      );
  }
  getPaints(): Observable<any> {
    return this.http.get(apiPaint, httpOptions).pipe(
      map(this.extractData),
      catchError(this.handleError));
  }

  getPaint(id: string): Observable<any> {
    const url = `${apiPaint}/${id}`;
    return this.http.get(url, httpOptions).pipe(
      map(this.extractData),
      catchError(this.handleError));
  }

  postPaint(data): Observable<any> {
    return this.http.post(apiPaint, data, httpOptions)
      .pipe(
        catchError(this.handleError)
      );
  }

  updatePaint(id: string, data): Observable<any> {
    const url = `${apiPaint}/${id}`;
    return this.http.put(url, data, httpOptions)
      .pipe(
        catchError(this.handleError)
      );
  }

  deletePaint(id: string): Observable<{}> {
    const url = `${apiPaint}/${id}`;
    return this.http.delete(url, httpOptions)
      .pipe(
        catchError(this.handleError)
      );
  }
  getRollers(): Observable<any> {
    return this.http.get(apiRoller, httpOptions).pipe(
      map(this.extractData),
      catchError(this.handleError));
  }

  getRoller(id: string): Observable<any> {
    const url = `${apiRoller}/${id}`;
    return this.http.get(url, httpOptions).pipe(
      map(this.extractData),
      catchError(this.handleError));
  }

  postRoller(data): Observable<any> {
    return this.http.post(apiRoller, data, httpOptions)
      .pipe(
        catchError(this.handleError)
      );
  }

  updateRoller(id: string, data): Observable<any> {
    const url = `${apiRoller}/${id}`;
    return this.http.put(url, data, httpOptions)
      .pipe(
        catchError(this.handleError)
      );
  }

  deleteRoller(id: string): Observable<{}> {
    const url = `${apiRoller}/${id}`;
    return this.http.delete(url, httpOptions)
      .pipe(
        catchError(this.handleError)
      );
  }

  getRollerPans(): Observable<any> {
      return this.http.get(apiRollerPan, httpOptions).pipe(
        map(this.extractData),
        catchError(this.handleError));
    }

    getRollerPan(id: string): Observable<any> {
      const url = `${apiRollerPan}/${id}`;
      return this.http.get(url, httpOptions).pipe(
        map(this.extractData),
        catchError(this.handleError));
    }

    postRollerPan(data): Observable<any> {
      return this.http.post(apiRollerPan, data, httpOptions)
        .pipe(
          catchError(this.handleError)
        );
    }

    updateRollerPan(id: string, data): Observable<any> {
      const url = `${apiRollerPan}/${id}`;
      return this.http.put(url, data, httpOptions)
        .pipe(
          catchError(this.handleError)
        );
    }

    deleteRollerPan(id: string): Observable<{}> {
      const url = `${apiRollerPan}/${id}`;
      return this.http.delete(url, httpOptions)
        .pipe(
          catchError(this.handleError)
        );
    }
}
