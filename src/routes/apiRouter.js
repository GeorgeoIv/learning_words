import express from 'express';
import { Theme, Word, Quiz } from '../../db/models';

const router = express.Router();

// router.get('/themes', async (req, res) => {
//   try {
//     const themes = await Theme.findAll();
//     res.render('Layout', { themes });
//   } catch {
//     res.sendStatus(500);
//   }
// });

// router.get('/:theme', async (req, res) => {
//   try {
//     const { theme } = req.params;
//     const ourTheme = await Theme.findOne({ where: { title: theme } });
//     const words = await Word.findAll({ where: { theme_id: ourTheme.id } });
//     res.render('Layout', { words });
//   } catch {
//     res.sendStatus(500);
//   }
// });

router.post('/new', async (req, res) => {
  try {
    console.log('add');
    await Word.create(
      req.body,
    );
    res.redirect('/themes');
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
});

router.get('/theme/:id', async (req, res) => {
  try {
    // const words = await Word.findAll({ where: { theme_id: req.params.id } });
    // const learned = await Quiz.findAll({ where: { user_id: req.params.id } });
    // const words = words1.filter((el) => learned.some((word2) => el.id !== word2.word_id));

    const words1 = await Word.findAll({ where: { theme_id: req.params.id } });
    const learned = await Quiz.findAll({ where: { user_id: req.session.user.id } });
    const words = words1.filter((el) => !learned.some((word2) => el.id === word2.word_id));
    res.json(words);
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
});

router.post('/words', async (req, res) => {
  try {
    await Quiz.create({
      user_id: req.session.user.id,
      word_id: req.body.id,
    });
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
});

export default router;
