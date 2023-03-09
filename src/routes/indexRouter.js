import express from 'express';
import { Theme, Word, Quiz } from '../../db/models';

const router = express.Router();

router.get('/', (req, res) => {
  res.render('Layout', {});
});

router.get('/themes', async (req, res) => {
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
    const words = await Word.findAll({ where: { theme_id: ourTheme.id } });
    res.render('Layout', { words });
  } catch {
    res.sendStatus(500);
  }
});

router.post('/words', async (req, res) => {
  try {
    console.log(req.body);
    await Quiz.create({
      user_id: 1,
      word_id: req.body.id,
    });
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
});

export default router;
