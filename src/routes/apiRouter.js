import express from 'express';
import { Theme, Word, Quiz } from '../../db/models';

const router = express.Router();

router.get('/themes', async (req, res) => {
  try {
    const themes = Theme.findAll();
    res.render('Layout', { themes });
  } catch {
    res.sendStatus(500);
  }
});

router.get('/:theme', async (req, res) => {
  try {
    const { theme } = req.body;

    const ourTheme = await Theme.findOne({ where: { title: theme } });
    const words = await Word.findAll({ where: { id: ourTheme.id } });
    res.render('Layout', { words });
  } catch {
    res.sendStatus(500);
  }
});

router.post('/words', async (req, res) => {
  try {
    await Quiz.findOrCreate({
      where: { word_id: req.body.word.id },
      defaults: {
        word_id: req.body.word.id,
        // user_id: req.session.id,
        // thems_id
      },
    });
  } catch {
    res.sendStatus(500);
  }
});

export default router;
