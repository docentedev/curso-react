const MODULE = 'auth';
const ACTION = 'login';

// Status

export const START = `${MODULE}/${ACTION}/start`;
export const CANCELED = `${MODULE}/${ACTION}/canceled`;
export const SUCCESS = `${MODULE}/${ACTION}/success`;
export const ERROR = `${MODULE}/${ACTION}/error`;