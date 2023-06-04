# VideoGameVisiz

#### 1. Group the game tag

Cause the original game tags is about 400+, so group them

```python
tag_groups = {
  'Action': ['Action', 'Shooter', 'FPS', 'First-Person', 'Third Person', 'Combat', 'Action-Adventure', 'Action RPG', 'Shoot \'Em Up', 'Hack and Slash', 'Beat \'em up', 'Fighting', '2D Fighter', 'Action RTS', 'Musou', 'Boss Rush'],
  'Adventure': ['Adventure', 'Exploration', 'Point & Click', 'Walking Simulator', 'Choose Your Own Adventure'],
  'Strategy': ['Strategy', 'Turn-Based Strategy', 'Real Time Tactics', 'Tactical', 'Tower Defense', 'Turn-Based Tactics', 'Turn-Based Combat', 'Grand Strategy', 'Tactical RPG', '4X'],
  'RPG': ['RPG', 'JRPG',  'Character Customization', 'Dungeon Crawler', 'Party-Based RPG', 'Turn-Based', 'Strategy RPG', 'CRPG'],
  'Simulation': ['Simulation', 'Automobile Sim', 'Farming Sim', 'Flight', 'Parkour', 'City Builder', 'Base Building', 'Resource Management'],
  'Horror': ['Horror', 'Dark', 'Psychological Horror', 'Survival Horror', 'Zombies'],
  'Survival': ['Survival', 'Open World Survival Craft', 'Outbreak Sim'],
  'Puzzle': ['Puzzle', 'Puzzle Platformer', 'Logic', 'Sokoban'],
  'Indie': ['Indie', 'Retro', 'Pixel Graphics'],
  'Rouguelike':['Metroidvania','Roguelike', 'Roguelite', 'Action Roguelike'],
  'Platformer': ['Platformer',  'Precision Platformer'],
  '2D Platform': ['2D','2D Platformer',],
  '3D Platform': ['3D','3D Platformer',],
  'Multiplayer': ['Multiplayer', 'PvP', 'Co-op', 'Online Co-Op', 'Local Multiplayer', 'Massively Multiplayer', 'MMORPG', 'Local Co-Op', '4 Player Local', 'Asynchronous Multiplayer'],
  'Casual': ['Casual', 'Clicker', 'Idler', 'Match 3', 'Minigames', 'Hidden Object'],
  'Visual Novel': ['Visual Novel', 'Interactive Fiction', 'Dating Sim', 'Otome'],
  'Arcade': ['Arcade', 'Fast-Paced', 'Bullet Hell', 'Top-Down', 'Top-Down Shooter', 'Side Scroller'],
  'Racing': ['Racing', 'Driving', 'Vehicular Combat', 'Motocross'],
  'Sports': ['Sports', 'Football (Soccer)', 'Basketball', 'Football (American)', 'Baseball', 'Tennis', 'Boxing', 'Wrestling', 'Golf', 'Pool', 'Snooker', 'Bowling', 'Skateboarding', 'BMX', 'Cycling', 'Skiing', 'Snowboarding', 'Hockey', 'Rugby', 'Volleyball', 'Cricket', 'Chess', 'Mahjong', 'Tabletop', 'Card Game', 'Card Battler', 'Deckbuilding', 'Mini Golf'],
  'Early Access': ['Early Access'],
  'Free to Play': ['Free to Play'],
  'Mature Content': ['Sexual Content', 'Nudity', 'Violent', 'Gore', 'Mature', 'NSFW', 'Hentai', 'Blood'],
  'Atmospheric': ['Atmospheric', 'Colorful', 'Cute', 'Stylized', 'Hand-drawn', 'Cartoony', 'Dark Fantasy', 'Cartoon', 'Minimalist', 'Surreal', 'Nature'],
  'Narrative': ['Story Rich', 'Narration', 'Multiple Endings', 'Choices Matter', 'Drama', 'Emotional', 'Cinematic', 'Dynamic Narration', 'Narrative'],
  'Sci-Fi & Fantasy': ['Sci-fi', 'Fantasy', 'Space', 'Futuristic', 'Aliens', 'Robots', 'Cyberpunk', 'Steampunk', 'Space Sim'],
  'Historical': ['Historical', 'Medieval', 'World War II', 'World War I', 'Alternate History', 'Ancient'],
  'Supernatural': ['Supernatural', 'Magic', 'Vampire', 'Lovecraftian', 'Faith', 'Demons', 'Dragons', 'Werewolves'],
  'Post-apocalyptic': ['Post-apocalyptic', 'Zombies', 'Dystopian', 'Apocalypse'],
  'Humor': ['Funny', 'Comedy', 'Dark Humor', 'Memes', 'Satire'],
  'Music & Sound': ['Great Soundtrack', 'Music', 'Rhythm', 'Instrumental Music', 'Rock Music', '8-bit Music', 'Soundtrack', 'Electronic Music'],
  'Art & Design': ['Design & Illustration', 'Animation & Modeling', 'Artificial Intelligence', 'Game Development', 'Photo Editing', 'Level Editor'],
  'Role-Playing': ['Female Protagonist', 'Character Customization', 'Choices Matter', 'Choose Your Own Adventure', 'Character Action Game', 'Looter Shooter'],
  'Management & Building': ['Management', 'Building', 'Crafting', 'Economy', 'Time Management', 'Automation', 'Base Building', 'City Builder', 'Colony Sim', 'Resource Management'],
  'Stealth & Strategy': ['Strategy', 'Stealth', 'Tactical', 'RTS', 'Turn-Based Strategy', 'Turn-Based Tactics', 'Real Time Tactics', 'Military', 'War', 'Wargame'],
  'Exploration & Adventure': ['Adventure', 'Exploration', 'Open World', 'Sandbox', 'Immersive Sim', 'Walking Simulator', 'Nonlinear'],
  'Puzzle & Logic': ['Puzzle', 'Logic', 'Hidden Object', 'Sokoban'],
  'Fantasy & Mythology': ['Fantasy', 'Mythology', 'Magic', 'Dark Fantasy', 'Medieval'],
  'Sports & Racing': ['Sports', 'Racing', 'Driving', 'Football (Soccer)', 'Basketball', 'Baseball', 'Tennis', 'Golf', 'Cycling'],
  'Education & Learning': ['Education', 'Tutorial', 'Software Training', 'Coding'],
  'VR & AR': ['VR', 'AR'],
  'Other': ['Every other tags not mentioned']
}
```

------

#### 2. New column explaination

['appid', 'name', 'released_date', 'tags', 'url', 'description', 'developers', 'publishers', 'price', 'all_reviews', 'positice_reviews','review_score', 'supported_languages',  **(same meaning in old data, but the  'released_date' & 'price' are processed)**

'released_year',**（Separate the game release date）**

 'Action', 'Adventure', 'Strategy', 'RPG', 'Simulation', 'Horror', 'Survival', 'Puzzle', 'Indie', 'Rouguelike', 'Platformer', '2D Platform', '3D Platform', 'Multiplayer', 'Casual', 'Visual Novel', 'Arcade', 'Racing', 'Sports', 'Early Access', 'Free to Play', 'Mature Content', 'Atmospheric', 'Narrative', 'Sci-Fi & Fantasy', 'Historical', 'Supernatural', 'Post-apocalyptic', 'Humor', 'Music & Sound', 'Art & Design', 'Role-Playing', 'Management & Building', 'Stealth & Strategy', 'Exploration & Adventure', 'Puzzle & Logic', 'Fantasy & Mythology', 'Sports & Racing', 'Education & Learning', 'VR & AR', 'Other', **（New Game tags after One-hot encoder and grouping）**

'price_range', **(Divide game prices into intervals, type: category)**

 'score_range'  **(Divide game score into intervals, type: category)**]

------

#### 3. New data download

New dataset is in the zip file: [data_processed.csv.zip]

------

#### 4. New EDA result 

New EDA result is in the Data_Analysis_EDA&Processing.ipynb

###### 