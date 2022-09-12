export interface Translate {
    translations: Translation;
}

export interface Translation {
  text:        string;
  translation: string;
  source:      string;
  target:      string;
}