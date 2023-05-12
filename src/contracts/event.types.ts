export type EventTypes =
  | 'app.init'
  | 'select.folder'
  | 'found.files'
  | 'file.start'
  | 'compress.start'
  | 'compress.completed'
  | 'compress.error'
  | 'compress.cancel'
  | 'compress.cancelled'
  | 'compress.exception'
  | 'compress.progress'
  | 'compress.file';
