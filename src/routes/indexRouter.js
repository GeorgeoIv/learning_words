import { all } from 'axios';
import express from 'express';
import { Theme, Word, Quiz } from '../../db/models';
import word from '../../db/models/word';
import {
  isAuth, urlSession,
} from '../middlewares';

const router = express.Router();

router.get('/', (req, res) => {
  if (req.session.user) {
    res.redirect('/themes');
  } else {
    res.redirect('/signin');
  }
  // res.render('Layout', {});
});

router.get('/new', async (req, res) => {
  try {
    const themes = await Theme.findAll();
    res.render('Layout', { themes });
  } catch {
    res.sendStatus(500);
  }
});

router.get('/profile', async (req, res) => {
  try {
    const learned = await Quiz.findAll({ where: { user_id: req.session.user.id } });
    const words = await Word.findAll();
    const initState = { learned, words };

    res.render('Layout', initState);
  } catch {
    res.sendStatus(500);
  }
});

router.get('/themes', isAuth, async (req, res) => {
  try {
    const themes = await Theme.findAll();
    res.render('Layout', { themes });
  } catch {
    res.sendStatus(500);
  }
});

router.get('/:theme', async (req, res) => {
  try {
    const { theme } = req.params;
    const ourTheme = await Theme.findOne({ where: { title: theme } });
    const words1 = await Word.findAll({ where: { theme_id: ourTheme.id } });
    const learned = await Quiz.findAll({ where: { user_id: req.session.user.id } });
    const words = words1.filter((el) => !learned.some((word2) => el.id === word2.word_id));

    res.render('Layout', { words });
  } catch {
    res.sendStatus(500);
  }
});

export default router;
