import express from 'express';
import imgResize from '/src/imgResize';
import { promises as fspromises } from 'fs';

const resize = express.Router();

resize.get('/', (req, res) => {});

export default resize;
