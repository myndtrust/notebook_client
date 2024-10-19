import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrl: './file-upload.component.css'
})
export class FileUploadComponent {


  files: File[] = [];

  constructor(private http: HttpClient) {}

  // Handle file selection through file input
  onFileSelected(event: any) {
    const selectedFiles = event.target.files;
    this.addFilesToList(selectedFiles);
  }

  // Handle drag over event
  onDragOver(event: DragEvent) {
    event.preventDefault();
    event.stopPropagation();
    document.querySelector('.drag-drop-area')?.classList.add('dragging');
  }

  // Handle drag leave event
  onDragLeave(event: DragEvent) {
    event.preventDefault();
    event.stopPropagation();
    document.querySelector('.drag-drop-area')?.classList.remove('dragging');
  }

  // Handle file drop event
  onFileDropped(event: DragEvent) {
    event.preventDefault();
    event.stopPropagation();
    document.querySelector('.drag-drop-area')?.classList.remove('dragging');

    const files = event.dataTransfer?.files;
    if (files) {
      this.addFilesToList(files);
    }
  }

  // Add files to the list and avoid duplicates
  addFilesToList(files: FileList | null) {
    if (files) {
      for (let i = 0; i < files.length; i++) {
        if (!this.files.some(f => f.name === files[i].name)) {
          this.files.push(files[i]);
        }
      }
    }
  }

  // Upload files to the backend
  uploadFiles() {
    const formData = new FormData();
    this.files.forEach(file => formData.append('files', file));

    this.http.post('http://your-backend-url/upload', formData).subscribe(
      response => {
        console.log('Upload successful:', response);
      },
      error => {
        console.error('Upload error:', error);
      }
    );
  }

}
