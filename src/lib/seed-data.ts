import { Session, AppData, PhraseItem, Exercise, VocabItem } from './types';

// Helper to generate IDs
const genId = () => Math.random().toString(36).substring(2, 9);

// Month 1 Sessions - Complete content
export const sessions: Session[] = [
  {
    id: 'session-1',
    number: 1,
    date: '2026-03-04',
    title: 'Introductions + Basics',
    goal: 'Introduce yourself confidently and ask simple questions. Master numbers 0-100 and basic time expressions.',
    vocab: [
      { id: genId(), word: 'Hello', meaning: 'تحيّة', example: 'Hello, nice to meet you!', category: 'greetings' },
      { id: genId(), word: 'Goodbye', meaning: 'وداع / إلى اللقاء', example: 'Goodbye, see you tomorrow!', category: 'greetings' },
      { id: genId(), word: 'Nice to meet you', meaning: 'تشرّفتُ بلقائِك', example: 'Nice to meet you. I\'m John.', category: 'greetings' },
      { id: genId(), word: 'My name is...', meaning: 'جملة للتعريف بالاسم: اسمي هو ...', example: 'My name is Maria.', category: 'greetings' },
      { id: genId(), word: 'I\'m from...', meaning: 'أستخدمُها لذِكرِ البَلَد أو المدينة: أنا من ...', example: 'I\'m from Spain.', category: 'introductions' },
      { id: genId(), word: 'Country', meaning: 'بَلَد / دولة', example: 'What country are you from?', category: 'places' },
      { id: genId(), word: 'Job', meaning: 'عمل / وظيفة', example: 'What is your job?', category: 'work' },
      { id: genId(), word: 'Teacher', meaning: 'مُعلِّم / مُدرِّس', example: 'I am a teacher.', category: 'work' },
      { id: genId(), word: 'Student', meaning: 'طالِب / طالِبة', example: 'She is a student.', category: 'work' },
      { id: genId(), word: 'Today', meaning: 'اليوم', example: 'Today is Wednesday.', category: 'time' },
      { id: genId(), word: 'Tomorrow', meaning: 'الغد / غداً', example: 'Tomorrow is Thursday.', category: 'time' },
      { id: genId(), word: 'Yesterday', meaning: 'الأمس / البارحة', example: 'Yesterday was Tuesday.', category: 'time' },
    ],
    phrases: [
      { id: genId(), phrase: 'Hello, nice to meet you.', translation: 'مرحباً، تشرّفتُ بلقائِك.', situation: 'First meeting' },
      { id: genId(), phrase: 'What\'s your name?', translation: 'ما اسمُكَ؟ / ما اسمُكِ؟', situation: 'First meeting' },
      { id: genId(), phrase: 'Where are you from?', translation: 'مِن أيِّ بَلَدٍ أنت؟', situation: 'First meeting' },
      { id: genId(), phrase: 'What do you do for work?', translation: 'ماذا تعمل؟ ما هي وَظيفتُك؟', situation: 'Getting to know someone' },
      { id: genId(), phrase: 'I\'m from [your country].', translation: 'أنا مِن [بلدِك].', situation: 'Introductions' },
      { id: genId(), phrase: 'I live in [your city].', translation: 'أعيشُ في [مدينتِك].', situation: 'Introductions' },
      { id: genId(), phrase: 'Nice to meet you, too.', translation: 'وأنا أيضاً تشرّفتُ بمعرفتِك.', situation: 'First meeting' },
      { id: genId(), phrase: 'This is my first time here.', translation: 'هذه أوّلُ مرّةٍ أزورُ هذا المكان.', situation: 'Small talk' },
      { id: genId(), phrase: 'Can you speak a little more slowly?', translation: 'هل يُمكِنُكَ أن تتحدّث ببطءٍ أكثر قليلاً؟', situation: 'Communication' },
      { id: genId(), phrase: 'Could you repeat that, please?', translation: 'هل يُمكِنُكَ أن تُعيد ذلك، من فضلك؟', situation: 'Communication' },
    ],
    grammar: {
      title: 'I am / You are + Simple Questions',
      explanation: 'Use "I am" (I\'m) to talk about yourself and "You are" (You\'re) to talk to someone. For questions, move "am/are/is" to the front.',
      examples: [
        'I am a teacher. / I\'m a teacher.',
        'You are a student. / You\'re a student.',
        'Are you from Spain? (Question)',
        'What is your name? / What\'s your name?',
      ]
    },
    lessonSteps: [
      { id: genId(), title: 'Warm-up', duration: 5, description: 'Greetings and small talk. How are you today?' },
      { id: genId(), title: 'Vocabulary Review', duration: 10, description: 'Learn greeting words and job vocabulary.' },
      { id: genId(), title: 'Grammar Focus', duration: 10, description: 'Practice "I am / You are" sentences.' },
      { id: genId(), title: 'Numbers Practice', duration: 10, description: 'Numbers 0-100. Teacher says, student writes.' },
      { id: genId(), title: 'Exercises', duration: 15, description: 'Complete all exercises together.' },
      { id: genId(), title: 'Roleplay', duration: 15, description: 'Airport meeting scenario.' },
      { id: genId(), title: 'Wrap-up & Homework', duration: 5, description: 'Review and assign homework.' },
    ],
    exercises: [
      {
        id: genId(),
        type: 'fill-blank',
        title: 'Fill in the Blanks',
        instruction: 'Complete the sentences with: am, is, are, from, name',
        content: {
          sentences: [
            { id: genId(), text: 'My ___ is Maria.', answer: 'name' },
            { id: genId(), text: 'I ___ from Spain.', answer: 'am' },
            { id: genId(), text: 'Where ___ you from?', answer: 'are' },
            { id: genId(), text: 'What ___ your job?', answer: 'is' },
            { id: genId(), text: 'Nice to meet ___.', answer: 'you' },
          ]
        },
        answerKey: '1. name 2. am 3. are 4. is 5. you'
      },
      {
        id: genId(),
        type: 'multiple-choice',
        title: 'Build Questions',
        instruction: 'Choose the correct word order for each question.',
        content: {
          questions: [
            { id: genId(), question: 'How do you ask about someone\'s name?', options: ['What your name is?', 'What is your name?', 'Is what your name?'], correctIndex: 1 },
            { id: genId(), question: 'How do you ask about someone\'s country?', options: ['Where are you from?', 'From where you are?', 'You are from where?'], correctIndex: 0 },
            { id: genId(), question: 'How do you ask about someone\'s job?', options: ['Job what is your?', 'What do you do?', 'What your job is?'], correctIndex: 1 },
            { id: genId(), question: 'How do you ask if someone is a student?', options: ['Are you a student?', 'You are a student?', 'Is you a student?'], correctIndex: 0 },
          ]
        },
        answerKey: '1. b) What is your name? 2. a) Where are you from? 3. b) What do you do? 4. a) Are you a student?'
      },
      {
        id: genId(),
        type: 'speaking-prompt',
        title: 'Numbers Listening',
        instruction: 'Your teacher will say numbers. Write them down. Then practice saying them.',
        content: {
          prompt: 'Listen and write the numbers your teacher says. Then practice saying them aloud.',
          duration: 120,
          suggestedPoints: ['Numbers 0-20', 'Tens (20, 30, 40...)', 'Double digits (25, 47, 89...)']
        },
        answerKey: 'Teacher reads: 7, 15, 23, 42, 58, 76, 89, 100'
      }
    ],
    homework: [
      { id: genId(), task: 'Record a 60-second introduction about yourself.', type: 'recording', details: 'Include: name, country, job, and one hobby.' },
      { id: genId(), task: 'Learn 10 vocabulary words from this session.', type: 'study', details: 'Use flashcards or write them 3 times each.' },
      { id: genId(), task: 'Practice numbers 0-100 aloud.', type: 'speaking', details: 'Count forwards and backwards.' },
    ],
    roleplay: {
      title: 'Meeting Someone at the Airport',
      situation: 'You are at the airport waiting for your flight. A friendly traveler sits next to you and starts a conversation.',
      studentRole: 'A traveler from another country',
      teacherRole: 'A friendly local person',
      script: [
        { speaker: 'teacher', line: 'Hello! Is this seat taken?', cue: 'Greeting' },
        { speaker: 'student', line: 'No, please sit down.', cue: 'Respond politely' },
        { speaker: 'teacher', line: 'Thanks! My name is Alex. What\'s your name?', cue: 'Ask name' },
        { speaker: 'student', line: 'I\'m [your name]. Nice to meet you.', cue: 'Introduce yourself' },
        { speaker: 'teacher', line: 'Nice to meet you too! Where are you from?', cue: 'Ask origin' },
        { speaker: 'student', line: 'I\'m from [your country]. And you?', cue: 'Answer and ask back' },
        { speaker: 'teacher', line: 'I\'m from here. Is this your first time visiting?', cue: 'Ask about visit' },
        { speaker: 'student', line: 'Yes, I\'m here for [reason].', cue: 'Explain your trip' },
        { speaker: 'teacher', line: 'That sounds great! Have a wonderful trip!', cue: 'Closing' },
        { speaker: 'student', line: 'Thank you! Nice talking to you.', cue: 'Say goodbye' },
      ]
    },
    answerKey: 'Exercise 1: 1.name 2.am 3.are 4.is 5.you\nExercise 2: 1.b 2.a 3.b 4.a\nExercise 3: Numbers practice - teacher checks student answers',
    teacherNotes: 'Focus on confidence. Don\'t correct too much. Let student make mistakes and self-correct. Praise effort!'
  },
  {
    id: 'session-2',
    number: 2,
    date: '2026-03-07',
    title: 'Asking for Help + Polite Requests',
    goal: 'Ask for help politely and understand basic responses. Use "Can" and "Could" for requests.',
    vocab: [
      { id: genId(), word: 'Excuse me', meaning: 'Polite way to get attention', example: 'Excuse me, can you help me?', category: 'polite' },
      { id: genId(), word: 'Help', meaning: 'Assistance', example: 'Can you help me, please?', category: 'requests' },
      { id: genId(), word: 'Sorry', meaning: 'Apology or polite refusal', example: 'Sorry, I don\'t understand.', category: 'polite' },
      { id: genId(), word: 'Please', meaning: 'Polite word for requests', example: 'Can you help me, please?', category: 'polite' },
      { id: genId(), word: 'Understand', meaning: 'To know the meaning', example: 'I don\'t understand.', category: 'communication' },
      { id: genId(), word: 'Speak slowly', meaning: 'Ask someone to talk more slowly', example: 'Can you speak slowly, please?', category: 'communication' },
      { id: genId(), word: 'Repeat', meaning: 'Say again', example: 'Can you repeat that?', category: 'communication' },
      { id: genId(), word: 'Direction', meaning: 'The way to go', example: 'Can you give me directions?', category: 'navigation' },
    ],
    phrases: [
      { id: genId(), phrase: 'Excuse me, can you help me?', translation: 'عفواً، هل تستطيعُ مساعدتي؟', situation: 'Asking for help' },
      { id: genId(), phrase: 'Could you tell me how to get to the bus stop?', translation: 'هل يُمكِنُكَ أن تُخبرني كيف أصلُ إلى موقِفِ الحافلات؟', situation: 'Asking for help' },
      { id: genId(), phrase: 'Sorry, I\'m lost.', translation: 'آسِف، إنّني ضائع.', situation: 'Problems' },
      { id: genId(), phrase: 'Can you repeat that more slowly?', translation: 'هل يُمكِنُكَ أن تُعيد ذلك ببطءٍ أكثر؟', situation: 'Not understanding' },
      { id: genId(), phrase: 'I don\'t understand. Could you explain?', translation: 'أنا لا أفهم، هل يُمكِنُكَ أن تشرح؟', situation: 'Confusion' },
      { id: genId(), phrase: 'Where is the nearest metro station?', translation: 'أينَ أقربُ محطةِ مترو؟', situation: 'Finding places' },
      { id: genId(), phrase: 'How much is this ticket, please?', translation: 'بكم هذه التذكرة، من فضلك؟', situation: 'Shopping' },
      { id: genId(), phrase: 'Could you write it down for me?', translation: 'هل يُمكِنُكَ أن تكتُبَ ذلك لي؟', situation: 'Communication' },
      { id: genId(), phrase: 'Thank you very much for your help.', translation: 'شُكراً جزيلاً على مساعدتِك.', situation: 'Politeness' },
      { id: genId(), phrase: 'No problem, happy to help.', translation: 'لا مشكلة، يسعدُني أن أُساعد.', situation: 'Politeness' },
    ],
    grammar: {
      title: 'Can / Could for Requests',
      explanation: '"Can" is common and friendly. "Could" is more formal and polite. Always add "please" for extra politeness.',
      examples: [
        'Can you help me? (friendly)',
        'Could you help me, please? (more polite)',
        'Can you tell me where the station is?',
        'Could you repeat that, please?',
      ]
    },
    lessonSteps: [
      { id: genId(), title: 'Review', duration: 5, description: 'Review last session\'s vocabulary.' },
      { id: genId(), title: 'New Vocabulary', duration: 10, description: 'Learn polite request phrases.' },
      { id: genId(), title: 'Grammar Focus', duration: 10, description: 'Can vs Could for requests.' },
      { id: genId(), title: 'Exercises', duration: 20, description: 'Complete all exercises together.' },
      { id: genId(), title: 'Roleplay', duration: 15, description: 'Asking directions in the city.' },
      { id: genId(), title: 'Wrap-up & Homework', duration: 5, description: 'Review and assign homework.' },
    ],
    exercises: [
      {
        id: genId(),
        type: 'multiple-choice',
        title: 'Choose the Best Polite Sentence',
        instruction: 'Select the most polite way to make each request.',
        content: {
          questions: [
            { id: genId(), question: 'You want someone to help you:', options: ['Help me!', 'Can you help me?', 'You help me now!'], correctIndex: 1 },
            { id: genId(), question: 'You don\'t understand something:', options: ['I don\'t get it.', 'Can you repeat that, please?', 'Say again.'], correctIndex: 1 },
            { id: genId(), question: 'You need directions:', options: ['Where is the station?', 'Excuse me, could you tell me where the station is?', 'Station where?'], correctIndex: 1 },
            { id: genId(), question: 'You want someone to speak slowly:', options: ['Slow down!', 'Could you speak slowly, please?', 'Too fast!'], correctIndex: 1 },
          ]
        },
        answerKey: '1. b) Can you help me? 2. b) Can you repeat that, please? 3. b) Excuse me, could you tell me where the station is? 4. b) Could you speak slowly, please?'
      },
      {
        id: genId(),
        type: 'matching',
        title: 'Match Phrases to Situations',
        instruction: 'Match each phrase to the correct situation.',
        content: {
          pairs: [
            { id: genId(), left: 'Excuse me, can you help me?', right: 'You are lost in a new city' },
            { id: genId(), left: 'How much is this?', right: 'You want to buy something' },
            { id: genId(), left: 'Can you repeat that?', right: 'You didn\'t hear clearly' },
            { id: genId(), left: 'Could you speak slowly?', right: 'Someone is talking too fast' },
            { id: genId(), left: 'Where is the bathroom?', right: 'You need a toilet' },
            { id: genId(), left: 'I don\'t understand.', right: 'You are confused' },
          ]
        },
        answerKey: '1-You are lost, 2-You want to buy, 3-Didn\'t hear, 4-Talking too fast, 5-Need toilet, 6-Confused'
      },
      {
        id: genId(),
        type: 'fill-blank',
        title: 'Hotel Lobby Dialogue',
        instruction: 'Complete the dialogue with: excuse, help, where, please, slowly',
        content: {
          sentences: [
            { id: genId(), text: '___ me, can you ___ me?', answer: 'Excuse, help' },
            { id: genId(), text: '___ is my room?', answer: 'Where' },
            { id: genId(), text: 'Can you speak ___, please?', answer: 'slowly' },
            { id: genId(), text: 'Thank you very much!', answer: 'please' },
          ]
        },
        answerKey: '1. Excuse, help 2. Where 3. slowly 4. please (in appropriate context)'
      }
    ],
    homework: [
      { id: genId(), task: 'Write 6 polite request sentences.', type: 'writing', details: 'Use "Can you..." and "Could you..." patterns.' },
      { id: genId(), task: 'Record 1 minute: Asking for directions.', type: 'recording', details: 'Pretend you are lost and ask for help.' },
      { id: genId(), task: 'Practice polite phrases with a mirror.', type: 'speaking', details: 'Say each phrase 5 times.' },
    ],
    roleplay: {
      title: 'Asking Directions in the City',
      situation: 'You are walking in a new city and you\'re lost. You need to find the train station.',
      studentRole: 'A lost tourist',
      teacherRole: 'A helpful local person',
      script: [
        { speaker: 'student', line: 'Excuse me, can you help me?', cue: 'Get attention politely' },
        { speaker: 'teacher', line: 'Yes, of course! What do you need?', cue: 'Be helpful' },
        { speaker: 'student', line: 'I\'m looking for the train station. Where is it?', cue: 'Ask for location' },
        { speaker: 'teacher', line: 'Oh, it\'s not far. Go straight, then turn left at the traffic light.', cue: 'Give directions' },
        { speaker: 'student', line: 'Sorry, can you speak slowly, please?', cue: 'Ask for clarification' },
        { speaker: 'teacher', line: 'Of course. Go straight. Then turn left. Walk 5 minutes.', cue: 'Repeat slowly' },
        { speaker: 'student', line: 'Turn left, walk 5 minutes. Thank you!', cue: 'Confirm and thank' },
        { speaker: 'teacher', line: 'You\'re welcome! Good luck!', cue: 'Close politely' },
      ]
    },
    answerKey: 'Exercise 1: 1.b 2.b 3.b 4.b\nExercise 2: Match phrases correctly\nExercise 3: Excuse, help, Where, slowly, please',
    teacherNotes: 'Encourage student to use "please" and "thank you" naturally. Practice different situations.'
  },
  {
    id: 'session-3',
    number: 3,
    date: '2026-03-11',
    title: 'Airport: Check-in + Boarding',
    goal: 'Handle check-in confidently, talk about luggage, and understand gate information.',
    vocab: [
      { id: genId(), word: 'Passport', meaning: 'Official ID for travel', example: 'Can I see your passport, please?', category: 'documents' },
      { id: genId(), word: 'Boarding pass', meaning: 'Ticket to get on the plane', example: 'Here is your boarding pass.', category: 'documents' },
      { id: genId(), word: 'Luggage / Baggage', meaning: 'Suitcases and bags', example: 'How many pieces of luggage?', category: 'travel' },
      { id: genId(), word: 'Gate', meaning: 'Where you board the plane', example: 'Your gate is A12.', category: 'airport' },
      { id: genId(), word: 'Terminal', meaning: 'Airport building section', example: 'Go to Terminal 2.', category: 'airport' },
      { id: genId(), word: 'Delayed', meaning: 'Late, not on time', example: 'The flight is delayed.', category: 'status' },
      { id: genId(), word: 'On time', meaning: 'Not late', example: 'The flight is on time.', category: 'status' },
      { id: genId(), word: 'Check-in', meaning: 'Process before boarding', example: 'Please check in 2 hours before.', category: 'process' },
    ],
    phrases: [
      { id: genId(), phrase: 'Can I see your passport, please?', translation: 'هل يُمكِنُني رؤيةُ جوازِ سفرك، من فضلك؟', situation: 'Check-in' },
      { id: genId(), phrase: 'How many bags are you checking in today?', translation: 'كم حقيبةً ستقومُ بشحنِها اليوم؟', situation: 'Check-in' },
      { id: genId(), phrase: 'Do you have any carry-on luggage?', translation: 'هل لديكَ أمتعةٌ تُحمَلُ معكَ داخل الطائرة؟', situation: 'Check-in' },
      { id: genId(), phrase: 'Window or aisle seat?', translation: 'هل تُفضِّل مقعداً عند النافذة أم عند الممر؟', situation: 'Seat selection' },
      { id: genId(), phrase: 'Your gate is A12, boarding at 6:30 PM.', translation: 'بوّابةُ صعودِك هي A12، ويبدأُ الصعودُ في الساعة السادسةِ والنصف مساءً.', situation: 'Information' },
      { id: genId(), phrase: 'Your flight has been delayed by thirty minutes.', translation: 'رِحلتُك تأخّرَت ثلاثينَ دقيقة.', situation: 'Information' },
      { id: genId(), phrase: 'Please place your bag on the scale.', translation: 'من فضلك ضَع حقيبتَك على الميزان.', situation: 'Check-in' },
      { id: genId(), phrase: 'Here is your boarding pass.', translation: 'تفضَّل، هذه بطاقةُ الصعودِ إلى الطائرة.', situation: 'Check-in' },
      { id: genId(), phrase: 'The security check is after passport control.', translation: 'التفتيشُ الأمني يكونُ بعدَ نقطةِ الجوازات.', situation: 'Information' },
      { id: genId(), phrase: 'Please arrive at the gate twenty minutes before departure.', translation: 'يُرجى الوصولُ إلى البوّابة قبل الإقلاع بعشرينَ دقيقة.', situation: 'Information' },
    ],
    grammar: {
      title: 'My / Your Possessives',
      explanation: 'Use "my" for things that belong to you, "your" for things that belong to the person you\'re talking to.',
      examples: [
        'This is my passport.',
        'Where is your luggage?',
        'My flight is at 3 PM.',
        'Your gate is B24.',
      ]
    },
    lessonSteps: [
      { id: genId(), title: 'Vocabulary Preview', duration: 10, description: 'Learn airport vocabulary with pictures.' },
      { id: genId(), title: 'Key Phrases', duration: 10, description: 'Practice check-in phrases.' },
      { id: genId(), title: 'Exercises', duration: 20, description: 'Complete all exercises together.' },
      { id: genId(), title: 'Roleplay', duration: 20, description: 'Full check-in scenario.' },
      { id: genId(), title: 'Wrap-up & Homework', duration: 5, description: 'Review and assign homework.' },
    ],
    exercises: [
      {
        id: genId(),
        type: 'matching',
        title: 'Match Word to Definition',
        instruction: 'Match each airport word to its meaning.',
        content: {
          pairs: [
            { id: genId(), left: 'Passport', right: 'Official document for travel' },
            { id: genId(), left: 'Boarding pass', right: 'Ticket to get on plane' },
            { id: genId(), left: 'Luggage', right: 'Suitcases and bags' },
            { id: genId(), left: 'Gate', right: 'Where you board the plane' },
            { id: genId(), left: 'Terminal', right: 'Airport building section' },
            { id: genId(), left: 'Delayed', right: 'Not on time' },
            { id: genId(), left: 'Check-in', right: 'Process before boarding' },
            { id: genId(), left: 'Aisle', right: 'Passage between seats' },
          ]
        },
        answerKey: 'All words matched to correct definitions'
      },
      {
        id: genId(),
        type: 'dialogue-builder',
        title: 'Check-in Dialogue',
        instruction: 'Put the dialogue lines in the correct order.',
        content: {
          lines: [
            { id: genId(), speaker: 'Agent', text: 'Good morning. Can I see your passport?', correctOrder: 1 },
            { id: genId(), speaker: 'Passenger', text: 'Here you go.', correctOrder: 2 },
            { id: genId(), speaker: 'Agent', text: 'How many bags are you checking?', correctOrder: 3 },
            { id: genId(), speaker: 'Passenger', text: 'Just one suitcase.', correctOrder: 4 },
            { id: genId(), speaker: 'Agent', text: 'Window or aisle seat?', correctOrder: 5 },
            { id: genId(), speaker: 'Passenger', text: 'Window seat, please.', correctOrder: 6 },
            { id: genId(), speaker: 'Agent', text: 'Here\'s your boarding pass. Gate A12. Have a nice flight!', correctOrder: 7 },
          ]
        },
        answerKey: 'Order: 1, 2, 3, 4, 5, 6, 7'
      },
      {
        id: genId(),
        type: 'fill-blank',
        title: 'Flight Information',
        instruction: 'Complete the sentences with: gate, flight, delayed, boarding, terminal',
        content: {
          sentences: [
            { id: genId(), text: 'My ___ is at 3:00 PM.', answer: 'flight' },
            { id: genId(), text: 'My ___ is B24.', answer: 'gate' },
            { id: genId(), text: 'The flight is ___. It will be late.', answer: 'delayed' },
            { id: genId(), text: '___ starts at 2:30 PM.', answer: 'Boarding' },
            { id: genId(), text: 'Go to ___ 2 for international flights.', answer: 'terminal' },
          ]
        },
        answerKey: '1. flight 2. gate 3. delayed 4. Boarding 5. terminal'
      }
    ],
    homework: [
      { id: genId(), task: 'Create flashcards for 15 airport words.', type: 'study', details: 'Use paper or an app. Review daily.' },
      { id: genId(), task: 'Complete the airport vocabulary quiz.', type: 'quiz', details: 'Self-test with flashcards.' },
      { id: genId(), task: 'Record yourself doing a check-in roleplay.', type: 'recording', details: 'Play both roles if needed.' },
    ],
    roleplay: {
      title: 'Check-in Desk',
      situation: 'You are at the airport check-in counter. The airline agent will help you check in for your flight.',
      studentRole: 'Passenger checking in',
      teacherRole: 'Airline check-in agent',
      script: [
        { speaker: 'teacher', line: 'Good morning! May I see your passport, please?' },
        { speaker: 'student', line: 'Good morning. Here you go.', cue: 'Hand over passport' },
        { speaker: 'teacher', line: 'Thank you. Where are you flying to today?' },
        { speaker: 'student', line: 'I\'m flying to London.', cue: 'Say destination' },
        { speaker: 'teacher', line: 'How many bags are you checking?' },
        { speaker: 'student', line: 'I have one suitcase.', cue: 'Number of bags' },
        { speaker: 'teacher', line: 'Would you prefer a window or aisle seat?' },
        { speaker: 'student', line: 'Window seat, please.', cue: 'Choose seat' },
        { speaker: 'teacher', line: 'Here\'s your boarding pass. Your gate is C15. Boarding starts at 2:30. Have a great flight!' },
        { speaker: 'student', line: 'Thank you very much!', cue: 'Say goodbye' },
      ]
    },
    answerKey: 'Exercise 1: All matched correctly\nExercise 2: Order 1-7 as shown\nExercise 3: flight, gate, delayed, Boarding, terminal',
    teacherNotes: 'Practice real airport scenarios. Use actual boarding pass as visual aid if available.'
  },
  {
    id: 'session-4',
    number: 4,
    date: '2026-03-14',
    title: 'Hotel: Booking + Check-in',
    goal: 'Book a room, check in, give personal details, and ask about amenities.',
    vocab: [
      { id: genId(), word: 'Reservation', meaning: 'A booking', example: 'I have a reservation.', category: 'hotel' },
      { id: genId(), word: 'Single room', meaning: 'Room for one person', example: 'I\'d like a single room.', category: 'room types' },
      { id: genId(), word: 'Double room', meaning: 'Room for two people', example: 'We need a double room.', category: 'room types' },
      { id: genId(), word: 'Night', meaning: 'One night stay', example: 'For two nights, please.', category: 'duration' },
      { id: genId(), word: 'Breakfast', meaning: 'Morning meal', example: 'Is breakfast included?', category: 'amenities' },
      { id: genId(), word: 'Key card', meaning: 'Electronic room key', example: 'Here\'s your key card.', category: 'hotel' },
      { id: genId(), word: 'WiFi', meaning: 'Wireless internet', example: 'What\'s the WiFi password?', category: 'amenities' },
      { id: genId(), word: 'Check out', meaning: 'Leave the hotel', example: 'Check out is at 11 AM.', category: 'process' },
    ],
    phrases: [
      { id: genId(), phrase: 'I\'d like to book a room for two nights.', translation: 'أرغبُ في حجزِ غُرفةٍ لليلتين، من فضلك.', situation: 'Booking' },
      { id: genId(), phrase: 'I have a reservation under [name].', translation: 'لديَّ حجزٌ باسم [الاسم].', situation: 'Check-in' },
      { id: genId(), phrase: 'Could I have a quiet room, please?', translation: 'هل يُمكِنُني الحصولُ على غُرفةٍ هادئة، من فضلك؟', situation: 'Requests' },
      { id: genId(), phrase: 'Is breakfast included in the price?', translation: 'هل يشملُ السعرُ وجبةَ الإفطار؟', situation: 'Amenities' },
      { id: genId(), phrase: 'What time is check-out?', translation: 'متى موعدُ تسجيلِ الخروج؟', situation: 'Information' },
      { id: genId(), phrase: 'What\'s the WiFi password?', translation: 'ما هي كلمةُ مرور الواي فاي؟', situation: 'Amenities' },
      { id: genId(), phrase: 'There is a problem with the air conditioning.', translation: 'هناكَ مشكلةٌ في مكيِّفِ الهواء.', situation: 'Problems' },
      { id: genId(), phrase: 'Could I have some extra towels?', translation: 'هل يُمكِنُني الحصولُ على بعضِ المناشفِ الإضافيّة؟', situation: 'Requests' },
      { id: genId(), phrase: 'Can I leave my luggage here until this afternoon?', translation: 'هل يُمكِنُني تركُ أمتعتي هنا حتى بعدَ الظهر؟', situation: 'Services' },
      { id: genId(), phrase: 'Thank you, everything was great.', translation: 'شُكراً لكم، كان كلُّ شيءٍ رائعاً.', situation: 'Check-out' },
    ],
    grammar: {
      title: 'I\'d like... / There is / There are',
      explanation: '"I\'d like" (I would like) is a polite way to make requests. "There is" for singular, "There are" for plural.',
      examples: [
        'I\'d like a single room, please.',
        'I\'d like to check in.',
        'There is a problem with my room.',
        'There are no towels in my room.',
      ]
    },
    lessonSteps: [
      { id: genId(), title: 'Vocabulary', duration: 10, description: 'Hotel vocabulary with examples.' },
      { id: genId(), title: 'Grammar Focus', duration: 10, description: 'I\'d like... and There is/are' },
      { id: genId(), title: 'Exercises', duration: 20, description: 'Complete all exercises together.' },
      { id: genId(), title: 'Roleplay', duration: 20, description: 'Hotel reception scenario.' },
      { id: genId(), title: 'Wrap-up & Homework', duration: 5, description: 'Review and assign homework.' },
    ],
    exercises: [
      {
        id: genId(),
        type: 'fill-blank',
        title: 'Booking Dialogue',
        instruction: 'Complete the dialogue with: name, nights, room, breakfast, card',
        content: {
          sentences: [
            { id: genId(), text: 'I\'d like to book a ___.', answer: 'room' },
            { id: genId(), text: 'What\'s your ___?', answer: 'name' },
            { id: genId(), text: 'How many ___?', answer: 'nights' },
            { id: genId(), text: 'Is ___ included?', answer: 'breakfast' },
            { id: genId(), text: 'Here\'s my credit ___.', answer: 'card' },
          ]
        },
        answerKey: '1. room 2. name 3. nights 4. breakfast 5. card'
      },
      {
        id: genId(), type: 'multiple-choice',
        title: 'There is / There are',
        instruction: 'Choose the correct form.',
        content: {
          questions: [
            { id: genId(), question: '___ a problem with the shower.', options: ['There is', 'There are'], correctIndex: 0 },
            { id: genId(), question: '___ no towels in my room.', options: ['There is', 'There are'], correctIndex: 1 },
            { id: genId(), question: '___ a restaurant in the hotel?', options: ['Is there', 'Are there'], correctIndex: 0 },
            { id: genId(), question: '___ any messages for me?', options: ['Is there', 'Are there'], correctIndex: 1 },
          ]
        },
        answerKey: '1. There is 2. There are 3. Is there 4. Are there'
      },
      {
        id: genId(),
        type: 'multiple-choice',
        title: 'Problem Solving',
        instruction: 'What do you say in each situation?',
        content: {
          questions: [
            { id: genId(), question: 'The WiFi doesn\'t work:', options: ['WiFi bad!', 'There\'s a problem with the WiFi.', 'No internet!'], correctIndex: 1 },
            { id: genId(), question: 'You need more towels:', options: ['Give me towels!', 'Could I have some more towels, please?', 'Towels!'], correctIndex: 1 },
            { id: genId(), question: 'The AC is too cold:', options: ['Too cold!', 'Can you help me with the AC? It\'s too cold.', 'AC broken!'], correctIndex: 1 },
          ]
        },
        answerKey: '1. b) There\'s a problem with the WiFi. 2. b) Could I have some more towels, please? 3. b) Can you help me with the AC?'
      }
    ],
    homework: [
      { id: genId(), task: 'Write a booking message for a hotel.', type: 'writing', details: 'Include: dates, room type, special requests.' },
      { id: genId(), task: 'Record 1 minute: Checking in at a hotel.', type: 'recording', details: 'Practice the full check-in dialogue.' },
      { id: genId(), task: 'Review hotel vocabulary flashcards.', type: 'study', details: 'Focus on amenities words.' },
    ],
    roleplay: {
      title: 'Hotel Reception',
      situation: 'You arrive at a hotel for your reservation. The receptionist will help you check in.',
      studentRole: 'Hotel guest',
      teacherRole: 'Hotel receptionist',
      script: [
        { speaker: 'student', line: 'Hello, I have a reservation.', cue: 'Start check-in' },
        { speaker: 'teacher', line: 'Good afternoon! May I have your name, please?' },
        { speaker: 'student', line: 'Yes, my name is [your name].', cue: 'Give your name' },
        { speaker: 'teacher', line: 'Thank you. I see your reservation. A double room for 3 nights?' },
        { speaker: 'student', line: 'Yes, that\'s correct.', cue: 'Confirm reservation' },
        { speaker: 'teacher', line: 'May I see your passport, please?' },
        { speaker: 'student', line: 'Here you go.', cue: 'Show passport' },
        { speaker: 'teacher', line: 'Thank you. Breakfast is included, from 7 to 10 AM. Here\'s your key card. Room 305.' },
        { speaker: 'student', line: 'Thank you. What\'s the WiFi password?', cue: 'Ask about WiFi' },
        { speaker: 'teacher', line: 'The password is GUEST2026. Enjoy your stay!' },
        { speaker: 'student', line: 'Thank you very much!', cue: 'Thank and leave' },
      ]
    },
    answerKey: 'Exercise 1: room, name, nights, breakfast, card\nExercise 2: There is, There are, Is there, Are there\nExercise 3: 1.b 2.b 3.b',
    teacherNotes: 'Practice both booking (by phone/message) and check-in scenarios. Talk about common problems.'
  },
  {
    id: 'session-5',
    number: 5,
    date: '2026-03-18',
    title: 'Restaurant: Ordering + Paying',
    goal: 'Order food and drinks, make special requests, ask for the bill, and handle problems.',
    vocab: [
      { id: genId(), word: 'Menu', meaning: 'List of food and drinks', example: 'Can I see the menu?', category: 'restaurant' },
      { id: genId(), word: 'Starter / Appetizer', meaning: 'First course', example: 'I\'ll have a soup as a starter.', category: 'food' },
      { id: genId(), word: 'Main course', meaning: 'The main dish', example: 'For my main, I\'ll have the pasta.', category: 'food' },
      { id: genId(), word: 'Dessert', meaning: 'Sweet after main', example: 'Do you have desserts?', category: 'food' },
      { id: genId(), word: 'Bill / Check', meaning: 'Payment request', example: 'Can I have the bill, please?', category: 'payment' },
      { id: genId(), word: 'Vegetarian', meaning: 'No meat', example: 'Do you have vegetarian options?', category: 'dietary' },
      { id: genId(), word: 'Sparkling water', meaning: 'Water with gas', example: 'Sparkling or still water?', category: 'drinks' },
      { id: genId(), word: 'Allergy', meaning: 'Bad reaction to food', example: 'I have a nut allergy.', category: 'dietary' },
    ],
    phrases: [
      { id: genId(), phrase: 'A table for two, please.', translation: 'طاولةٌ لشخصين، من فضلك.', situation: 'Arriving' },
      { id: genId(), phrase: 'Could I see the menu?', translation: 'هل يُمكِنُني رؤيةُ قائمةِ الطعام؟', situation: 'Starting' },
      { id: genId(), phrase: 'What do you recommend for tonight?', translation: 'بماذا تُوصي لِهذا المساء؟', situation: 'Choosing' },
      { id: genId(), phrase: 'I\'d like the soup to start.', translation: 'أودُّ أن أبدأَ بالشوربة.', situation: 'Ordering' },
      { id: genId(), phrase: 'For my main course, I\'ll have the chicken.', translation: 'للطبقِ الرئيسي سأختارُ الدجاج.', situation: 'Ordering' },
      { id: genId(), phrase: 'I\'m allergic to nuts.', translation: 'أنا مُصابٌ بالحساسية من المكسَّرات.', situation: 'Dietary' },
      { id: genId(), phrase: 'Is this dish vegetarian?', translation: 'هل هذا الطبقُ نباتيّ؟', situation: 'Dietary' },
      { id: genId(), phrase: 'Could I have a glass of still water?', translation: 'هل يُمكِنُني الحصولُ على كأسِ ماءٍ عادي؟', situation: 'Drinks' },
      { id: genId(), phrase: 'Excuse me, this is cold.', translation: 'عفواً، هذا الطبقُ بارد.', situation: 'Complaint' },
      { id: genId(), phrase: 'Could I have the bill, please?', translation: 'هل يُمكِنُكَ إحضارُ الفاتورة، من فضلك؟', situation: 'Paying' },
    ],
    grammar: {
      title: 'Countable / Uncountable Nouns',
      explanation: 'Countable nouns can be counted (one, two, three...). Uncountable nouns cannot be counted separately.',
      examples: [
        'Countable: a table, two chairs, three menus',
        'Uncountable: water, bread, rice, coffee',
        'I\'d like some water. (not "a water")',
        'I\'d like a glass of water.',
      ]
    },
    lessonSteps: [
      { id: genId(), title: 'Vocabulary', duration: 10, description: 'Restaurant vocabulary with menu practice.' },
      { id: genId(), title: 'Grammar Focus', duration: 10, description: 'Countable vs uncountable nouns.' },
      { id: genId(), title: 'Exercises', duration: 20, description: 'Complete all exercises together.' },
      { id: genId(), title: 'Roleplay', duration: 20, description: 'Full restaurant scenario with complaint.' },
      { id: genId(), title: 'Wrap-up & Homework', duration: 5, description: 'Review and assign homework.' },
    ],
    exercises: [
      {
        id: genId(),
        type: 'fill-blank',
        title: 'Ordering Practice',
        instruction: 'Convert these items into "I\'d like..." sentences.',
        content: {
          sentences: [
            { id: genId(), text: 'Item: pizza. Sentence: I\'d like ___.', answer: 'a pizza' },
            { id: genId(), text: 'Item: water. Sentence: I\'d like ___.', answer: 'some water / a glass of water' },
            { id: genId(), text: 'Item: coffee. Sentence: I\'d like ___.', answer: 'a coffee / some coffee' },
            { id: genId(), text: 'Item: bread. Sentence: I\'d like ___.', answer: 'some bread' },
            { id: genId(), text: 'Item: salad. Sentence: I\'d like ___.', answer: 'a salad' },
          ]
        },
        answerKey: '1. a pizza 2. some water / a glass of water 3. a coffee / some coffee 4. some bread 5. a salad'
      },
      {
        id: genId(),
        type: 'multiple-choice',
        title: 'Correct the Mistakes',
        instruction: 'Choose the correct form.',
        content: {
          questions: [
            { id: genId(), question: '"Two water" should be:', options: ['Two waters', 'Two glasses of water', 'Two water glasses'], correctIndex: 1 },
            { id: genId(), question: '"A bread" should be:', options: ['A bread', 'A piece of bread', 'One bread'], correctIndex: 1 },
            { id: genId(), question: '"Three coffee" should be:', options: ['Three coffees', 'Three cups of coffee', 'Both are OK'], correctIndex: 2 },
            { id: genId(), question: '"A rice" should be:', options: ['A rice', 'Some rice', 'A bowl of rice'], correctIndex: 2 },
          ]
        },
        answerKey: '1. b) Two glasses of water 2. b) A piece of bread 3. c) Both are OK 4. c) A bowl of rice'
      },
      {
        id: genId(),
        type: 'matching',
        title: 'Request and Response',
        instruction: 'Match each request to the waiter\'s response.',
        content: {
          pairs: [
            { id: genId(), left: 'Could I see the menu?', right: 'Here you are.' },
            { id: genId(), left: 'I\'d like the steak, please.', right: 'How would you like it cooked?' },
            { id: genId(), left: 'Could I have the bill?', right: 'Certainly. Cash or card?' },
            { id: genId(), left: 'Is this vegetarian?', right: 'Yes, it\'s made with vegetables.' },
            { id: genId(), left: 'Excuse me, this soup is cold.', right: 'I\'m sorry. Let me bring you a new one.' },
            { id: genId(), left: 'Do you have WiFi?', right: 'Yes, the password is on your receipt.' },
          ]
        },
        answerKey: 'All pairs matched correctly'
      }
    ],
    homework: [
      { id: genId(), task: 'Write 10 sentences ordering food and drinks.', type: 'writing', details: 'Use "I\'d like..." and practice countable/uncountable.' },
      { id: genId(), task: 'Practice the restaurant dialogue aloud.', type: 'speaking', details: 'Record yourself if possible.' },
    ],
    roleplay: {
      title: 'Restaurant Order + Complaint',
      situation: 'You are at a restaurant. Order your meal, then there is a problem with your food.',
      studentRole: 'Restaurant customer',
      teacherRole: 'Waiter',
      script: [
        { speaker: 'teacher', line: 'Good evening! Here\'s your menu. Can I get you a drink?' },
        { speaker: 'student', line: 'Good evening. I\'d like a glass of water, please.', cue: 'Order drink' },
        { speaker: 'teacher', line: 'Of course. Are you ready to order?' },
        { speaker: 'student', line: 'Yes, I\'d like the soup as a starter, and the pasta for my main.', cue: 'Order food' },
        { speaker: 'teacher', line: 'Excellent choice! I\'ll be right back with your order.' },
        { speaker: 'student', line: '(Food arrives) Excuse me, this soup is cold.', cue: 'Make a complaint' },
        { speaker: 'teacher', line: 'Oh, I\'m very sorry! Let me bring you a hot one right away.' },
        { speaker: 'student', line: 'Thank you.', cue: 'Accept apology' },
        { speaker: 'teacher', line: 'Here\'s your hot soup. Enjoy your meal!' },
        { speaker: 'student', line: 'Thank you very much.', cue: 'Thank' },
        { speaker: 'teacher', line: 'Would you like dessert or the bill?' },
        { speaker: 'student', line: 'Just the bill, please.', cue: 'Ask for bill' },
        { speaker: 'teacher', line: 'Here you are. Cash or card?' },
        { speaker: 'student', line: 'Card, please.', cue: 'Pay' },
        { speaker: 'teacher', line: 'Thank you. Have a nice evening!' },
      ]
    },
    answerKey: 'Exercise 1: a pizza, some water, a coffee, some bread, a salad\nExercise 2: 1.b 2.b 3.c 4.c\nExercise 3: All matched correctly',
    teacherNotes: 'Focus on polite complaints. Practice intonation for "Excuse me..." (polite, not angry).'
  },
  {
    id: 'session-6',
    number: 6,
    date: '2026-03-21',
    title: 'Directions + Transport',
    goal: 'Ask for and understand directions. Talk about taxis, buses, and trains.',
    vocab: [
      { id: genId(), word: 'Straight ahead', meaning: 'Going forward', example: 'Go straight ahead.', category: 'directions' },
      { id: genId(), word: 'Turn left / right', meaning: 'Change direction', example: 'Turn left at the corner.', category: 'directions' },
      { id: genId(), word: 'Near / Far', meaning: 'Close / Distant', example: 'Is it near or far?', category: 'distance' },
      { id: genId(), word: 'Next to', meaning: 'Beside', example: 'It\'s next to the bank.', category: 'location' },
      { id: genId(), word: 'Opposite', meaning: 'Across from', example: 'It\'s opposite the station.', category: 'location' },
      { id: genId(), word: 'Ticket', meaning: 'Travel pass', example: 'One ticket to the city center.', category: 'transport' },
      { id: genId(), word: 'Platform', meaning: 'Train boarding area', example: 'The train leaves from platform 3.', category: 'transport' },
      { id: genId(), word: 'Station', meaning: 'Train/bus stop place', example: 'Where is the bus station?', category: 'transport' },
    ],
    phrases: [
      { id: genId(), phrase: 'How do I get to the city centre?', translation: 'كيف أصلُ إلى وسطِ المدينة؟', situation: 'Asking directions' },
      { id: genId(), phrase: 'Is it within walking distance?', translation: 'هل يُمكِنُ الوصولُ إليه سيراً على الأقدام؟', situation: 'Distance' },
      { id: genId(), phrase: 'Go straight ahead and then turn right.', translation: 'اِمشِ إلى الأمام ثُمَّ انعطِف يميناً.', situation: 'Giving directions' },
      { id: genId(), phrase: 'It\'s next to the supermarket.', translation: 'إنَّهُ بجانبِ السوبرماركت.', situation: 'Giving directions' },
      { id: genId(), phrase: 'It\'s opposite the train station.', translation: 'إنَّهُ مُقابِلُ محطّةِ القطار.', situation: 'Giving directions' },
      { id: genId(), phrase: 'How much is a ticket to the airport?', translation: 'كَم ثمنُ التذكرة إلى المطار؟', situation: 'Transport' },
      { id: genId(), phrase: 'Which platform does the train leave from?', translation: 'من أيِّ رصيفٍ يَغادِرُ القطار؟', situation: 'Transport' },
      { id: genId(), phrase: 'Could you call a taxi for me, please?', translation: 'هل يُمكِنُكَ أن تستدعيَ لي سيَّارةَ أُجرة، من فضلك؟', situation: 'Transport' },
      { id: genId(), phrase: 'How long does it take by bus?', translation: 'كم من الوقتِ يستغرقُ بالباص؟', situation: 'Transport' },
      { id: genId(), phrase: 'I think I got off at the wrong stop.', translation: 'أعتقدُ أنني نزلتُ في الموقِفِ الخاطئ.', situation: 'Problems' },
    ],
    grammar: {
      title: 'Imperatives for Directions',
      explanation: 'Use the base form of verbs to give directions. No subject needed.',
      examples: [
        'Go straight.',
        'Turn left at the traffic light.',
        'Walk for 5 minutes.',
        'Take the second right.',
      ]
    },
    lessonSteps: [
      { id: genId(), title: 'Vocabulary', duration: 10, description: 'Direction words and transport vocabulary.' },
      { id: genId(), title: 'Map Practice', duration: 10, description: 'Use a simple map to give directions.' },
      { id: genId(), title: 'Exercises', duration: 20, description: 'Complete all exercises together.' },
      { id: genId(), title: 'Roleplay', duration: 20, description: 'Taxi ride and asking directions.' },
      { id: genId(), title: 'Wrap-up & Homework', duration: 5, description: 'Review and assign homework.' },
    ],
    exercises: [
      {
        id: genId(),
        type: 'multiple-choice',
        title: 'Map Directions',
        instruction: 'Choose the correct direction based on the map scenario.',
        content: {
          questions: [
            { id: genId(), question: 'You are at the hotel. The bank is on the next street. What do you do?', options: ['Go straight and turn left.', 'Turn around.', 'Go backwards.'], correctIndex: 0 },
            { id: genId(), question: 'The restaurant is next to the post office. You see the post office. Where is the restaurant?', options: ['Far away', 'Beside the post office', 'Opposite'], correctIndex: 1 },
            { id: genId(), question: 'The station is 3 kilometers away. Is it within walking distance?', options: ['Yes, it\'s near.', 'No, it\'s far. Take a taxi.', 'Maybe.'], correctIndex: 1 },
            { id: genId(), question: 'The museum is opposite the park. Where is it?', options: ['Next to the park', 'Behind the park', 'Across from the park'], correctIndex: 2 },
          ]
        },
        answerKey: '1. a) Go straight and turn left. 2. b) Beside the post office 3. b) No, take a taxi. 4. c) Across from the park'
      },
      {
        id: genId(),
        type: 'fill-blank',
        title: 'Direction Phrases',
        instruction: 'Complete with: straight, left, right, next to, opposite',
        content: {
          sentences: [
            { id: genId(), text: 'Go ___, then turn ___.', answer: 'straight, left' },
            { id: genId(), text: 'The bank is ___ the supermarket.', answer: 'next to' },
            { id: genId(), text: 'Turn ___ at the traffic light.', answer: 'right' },
            { id: genId(), text: 'The pharmacy is ___ the hospital.', answer: 'opposite' },
          ]
        },
        answerKey: '1. straight, left 2. next to 3. right 4. opposite'
      },
      {
        id: genId(),
        type: 'fill-blank',
        title: 'Buying a Ticket',
        instruction: 'Complete the dialogue with: ticket, platform, much, station, return',
        content: {
          sentences: [
            { id: genId(), text: 'Where is the bus ___?', answer: 'station' },
            { id: genId(), text: 'One ___ to the city center, please.', answer: 'ticket' },
            { id: genId(), text: 'How ___ is it?', answer: 'much' },
            { id: genId(), text: 'A single or ___ ticket?', answer: 'return' },
            { id: genId(), text: 'Which ___ does the train leave from?', answer: 'platform' },
          ]
        },
        answerKey: '1. station 2. ticket 3. much 4. return 5. platform'
      }
    ],
    homework: [
      { id: genId(), task: 'Write 8 direction sentences.', type: 'writing', details: 'Use all direction words: straight, left, right, next to, opposite.' },
      { id: genId(), task: 'Record 2 minutes: How to get from your home to a famous place.', type: 'recording', details: 'Give step-by-step directions.' },
    ],
    roleplay: {
      title: 'Taxi Ride + Fare Question',
      situation: 'You need to take a taxi to your hotel. Ask about the fare.',
      studentRole: 'Passenger',
      teacherRole: 'Taxi driver',
      script: [
        { speaker: 'student', line: 'Hello, could you take me to the Grand Hotel, please?', cue: 'Give destination' },
        { speaker: 'teacher', line: 'Sure! The Grand Hotel. Do you know where it is?' },
        { speaker: 'student', line: 'No, I don\'t. Is it far?', cue: 'Ask about distance' },
        { speaker: 'teacher', line: 'About 15 minutes. Traffic is okay right now.' },
        { speaker: 'student', line: 'How much will it cost?', cue: 'Ask about fare' },
        { speaker: 'teacher', line: 'Probably around 20 dollars. I\'ll use the meter.' },
        { speaker: 'student', line: 'Great, thank you.', cue: 'Agree' },
        { speaker: 'teacher', line: '(Arriving) Here we are. The Grand Hotel. That\'s $18.50.' },
        { speaker: 'student', line: 'Here\'s 20 dollars. Keep the change.', cue: 'Pay and tip' },
        { speaker: 'teacher', line: 'Thank you! Have a nice day!' },
      ]
    },
    answerKey: 'Exercise 1: 1.a 2.b 3.b 4.c\nExercise 2: straight/left, next to, right, opposite\nExercise 3: station, ticket, much, return, platform',
    teacherNotes: 'Use real maps if possible. Practice both asking and giving directions.'
  },
  {
    id: 'session-7',
    number: 7,
    date: '2026-03-25',
    title: 'Past Simple for Travel Stories',
    goal: 'Talk about what you did in the past. Share travel experiences.',
    vocab: [
      { id: genId(), word: 'Went (go)', meaning: 'Past of "go"', example: 'I went to Paris last year.', category: 'irregular' },
      { id: genId(), word: 'Stayed (stay)', meaning: 'Past of "stay"', example: 'We stayed at a hotel.', category: 'regular' },
      { id: genId(), word: 'Visited (visit)', meaning: 'Past of "visit"', example: 'I visited many museums.', category: 'regular' },
      { id: genId(), word: 'Ate (eat)', meaning: 'Past of "eat"', example: 'I ate pizza every day.', category: 'irregular' },
      { id: genId(), word: 'Saw (see)', meaning: 'Past of "see"', example: 'I saw the Eiffel Tower.', category: 'irregular' },
      { id: genId(), word: 'Enjoyed (enjoy)', meaning: 'Past of "enjoy"', example: 'I enjoyed the trip.', category: 'regular' },
      { id: genId(), word: 'Had (have)', meaning: 'Past of "have"', example: 'I had a great time.', category: 'irregular' },
      { id: genId(), word: 'Took (take)', meaning: 'Past of "take"', example: 'I took many photos.', category: 'irregular' },
    ],
    phrases: [
      { id: genId(), phrase: 'Last year I went to [country].', translation: 'في العامِ الماضي ذهبتُ إلى [دولة].', situation: 'Travel stories' },
      { id: genId(), phrase: 'I stayed there for two weeks.', translation: 'مكثتُ هناكَ لمدةِ أسبوعين.', situation: 'Duration' },
      { id: genId(), phrase: 'I visited many famous places.', translation: 'زُرتُ الكثيرَ من الأماكنِ المشهورة.', situation: 'Activities' },
      { id: genId(), phrase: 'The food was amazing.', translation: 'كان الطعامُ رائعاً.', situation: 'Describing experiences' },
      { id: genId(), phrase: 'The weather was terrible.', translation: 'كان الطقسُ سيِّئاً جداً.', situation: 'Describing experiences' },
      { id: genId(), phrase: 'I took a lot of photos.', translation: 'التقطتُ الكثيرَ من الصور.', situation: 'Activities' },
      { id: genId(), phrase: 'I met many friendly people.', translation: 'قابَلتُ الكثيرَ من الأشخاصِ اللُّطفاء.', situation: 'People' },
      { id: genId(), phrase: 'Have you ever been to [place]?', translation: 'هل سبقَ أن زُرتَ [مكاناً ما]؟', situation: 'Asking about experiences' },
      { id: genId(), phrase: 'I really enjoyed the trip.', translation: 'استمتعتُ حقاً بتلكَ الرحلة.', situation: 'Opinion' },
      { id: genId(), phrase: 'I\'d like to go back one day.', translation: 'أودُّ أن أعودَ إلى هناكَ يوماً ما.', situation: 'Future plans' },
    ],
    grammar: {
      title: 'Past Simple',
      explanation: 'Regular verbs add -ed (visited, stayed). Irregular verbs change form (go→went, eat→ate). Use for completed past actions.',
      examples: [
        'I visited London last summer. (regular)',
        'I went to the beach yesterday. (irregular)',
        'Did you enjoy your trip? (question)',
        'I didn\'t see that. (negative)',
      ]
    },
    lessonSteps: [
      { id: genId(), title: 'Vocabulary', duration: 10, description: 'Past tense verbs (regular & irregular).' },
      { id: genId(), title: 'Grammar Focus', duration: 15, description: 'Past simple: positive, negative, questions.' },
      { id: genId(), title: 'Exercises', duration: 15, description: 'Complete all exercises together.' },
      { id: genId(), title: 'Speaking Practice', duration: 10, description: 'Share a short travel story.' },
      { id: genId(), title: 'Roleplay', duration: 10, description: 'Chat about past trips.' },
      { id: genId(), title: 'Wrap-up & Homework', duration: 5, description: 'Review and assign homework.' },
    ],
    exercises: [
      {
        id: genId(),
        type: 'fill-blank',
        title: 'Past Tense Forms',
        instruction: 'Write the past tense of these verbs.',
        content: {
          sentences: [
            { id: genId(), text: 'go → ___', answer: 'went' },
            { id: genId(), text: 'eat → ___', answer: 'ate' },
            { id: genId(), text: 'visit → ___', answer: 'visited' },
            { id: genId(), text: 'see → ___', answer: 'saw' },
            { id: genId(), text: 'stay → ___', answer: 'stayed' },
            { id: genId(), text: 'have → ___', answer: 'had' },
            { id: genId(), text: 'take → ___', answer: 'took' },
            { id: genId(), text: 'enjoy → ___', answer: 'enjoyed' },
            { id: genId(), text: 'buy → ___', answer: 'bought' },
            { id: genId(), text: 'make → ___', answer: 'made' },
          ]
        },
        answerKey: 'went, ate, visited, saw, stayed, had, took, enjoyed, bought, made'
      },
      {
        id: genId(),
        type: 'fill-blank',
        title: 'Short Story',
        instruction: 'Complete the story with past tense verbs.',
        content: {
          sentences: [
            { id: genId(), text: 'Last summer, I ___ (go) to Spain.', answer: 'went' },
            { id: genId(), text: 'I ___ (stay) in a nice hotel near the beach.', answer: 'stayed' },
            { id: genId(), text: 'I ___ (eat) delicious seafood.', answer: 'ate' },
            { id: genId(), text: 'I ___ (see) many beautiful places.', answer: 'saw' },
            { id: genId(), text: 'I ___ (have) a wonderful time!', answer: 'had' },
          ]
        },
        answerKey: 'went, stayed, ate, saw, had'
      },
      {
        id: genId(),
        type: 'speaking-prompt',
        title: 'My Last Trip',
        instruction: 'Talk about your last trip or vacation. Use past tense.',
        content: {
          prompt: 'Tell me about a trip you took. Where did you go? What did you do? Did you enjoy it?',
          duration: 120,
          suggestedPoints: ['Where did you go?', 'Who did you go with?', 'What did you see/eat/do?', 'Did you enjoy it?']
        },
        answerKey: 'Student shares their own story. Check for correct past tense usage.'
      }
    ],
    homework: [
      { id: genId(), task: 'Write 6 sentences about last weekend.', type: 'writing', details: 'Use at least 4 different past tense verbs.' },
      { id: genId(), task: 'Practice past tense verb list.', type: 'study', details: 'Write each verb and its past form 3 times.' },
    ],
    roleplay: {
      title: 'Chatting About Trips',
      situation: 'You meet someone at a café. Start a conversation about travel.',
      studentRole: 'A traveler sharing experiences',
      teacherRole: 'A new friend asking questions',
      script: [
        { speaker: 'teacher', line: 'So, do you travel often?' },
        { speaker: 'student', line: 'Yes, I love traveling. I went to Italy last year.', cue: 'Share past experience' },
        { speaker: 'teacher', line: 'Oh, nice! Which cities did you visit?' },
        { speaker: 'student', line: 'I visited Rome and Florence. They were beautiful!', cue: 'Give details' },
        { speaker: 'teacher', line: 'What did you enjoy the most?' },
        { speaker: 'student', line: 'I really enjoyed the food. I ate pizza every day!', cue: 'Share highlights' },
        { speaker: 'teacher', line: 'That sounds amazing! How long did you stay?' },
        { speaker: 'student', line: 'I stayed for one week. It was too short!', cue: 'Talk about duration' },
        { speaker: 'teacher', line: 'Did you take many photos?' },
        { speaker: 'student', line: 'Yes, I took hundreds of photos. I saw so many beautiful things.', cue: 'More details' },
      ]
    },
    answerKey: 'Exercise 1: went, ate, visited, saw, stayed, had, took, enjoyed, bought, made\nExercise 2: went, stayed, ate, saw, had\nExercise 3: Student\'s own story',
    teacherNotes: 'Let student talk freely. Correct major errors only. Focus on confidence in storytelling.'
  },
  {
    id: 'session-8',
    number: 8,
    date: '2026-03-28',
    title: 'Emergencies + Pharmacy',
    goal: 'Handle urgent situations politely. Ask for medical help.',
    vocab: [
      { id: genId(), word: 'Headache', meaning: 'Pain in the head', example: 'I have a headache.', category: 'symptoms' },
      { id: genId(), word: 'Fever', meaning: 'High body temperature', example: 'I have a fever.', category: 'symptoms' },
      { id: genId(), word: 'Stomachache', meaning: 'Pain in stomach', example: 'My stomach hurts.', category: 'symptoms' },
      { id: genId(), word: 'Pain', meaning: 'Physical hurt', example: 'I have pain in my leg.', category: 'symptoms' },
      { id: genId(), word: 'Medicine', meaning: 'Treatment for illness', example: 'I need some medicine.', category: 'medical' },
      { id: genId(), word: 'Pharmacy', meaning: 'Shop for medicine', example: 'Where is the nearest pharmacy?', category: 'places' },
      { id: genId(), word: 'Police', meaning: 'Law enforcement', example: 'I need to call the police.', category: 'emergency' },
      { id: genId(), word: 'Lost', meaning: 'Cannot find something', example: 'I lost my passport.', category: 'problems' },
    ],
    phrases: [
      { id: genId(), phrase: 'I don\'t feel well.', translation: 'أنا لا أشعرُ بأنني بخير.', situation: 'Feeling sick' },
      { id: genId(), phrase: 'I have a bad headache.', translation: 'لديَّ صُداعٌ شديد.', situation: 'Symptoms' },
      { id: genId(), phrase: 'I have a fever and feel very tired.', translation: 'لديَّ حُمّى وأشعُرُ بتعبٍ شديد.', situation: 'Symptoms' },
      { id: genId(), phrase: 'I need to see a doctor.', translation: 'أحتاجُ أن أرى طبيباً.', situation: 'Medical' },
      { id: genId(), phrase: 'Where is the nearest hospital?', translation: 'أينَ أقربُ مستشفى؟', situation: 'Medical' },
      { id: genId(), phrase: 'Where is the nearest pharmacy?', translation: 'أينَ أقربُ صيدليّة؟', situation: 'Pharmacy' },
      { id: genId(), phrase: 'Do you have something for a stomachache?', translation: 'هل لديكَ دواءٌ لآلامِ المَعِدة؟', situation: 'Pharmacy' },
      { id: genId(), phrase: 'I lost my passport.', translation: 'أضعتُ جوازَ سفري.', situation: 'Lost item' },
      { id: genId(), phrase: 'Someone stole my wallet.', translation: 'قامَ أحدُهم بسرقةِ محفظتي.', situation: 'Crime' },
      { id: genId(), phrase: 'I need to call the police.', translation: 'أحتاجُ أن أتَّصِل بالشرطة.', situation: 'Emergency' },
    ],
    grammar: {
      title: 'I have... / I need...',
      explanation: 'Use "I have" for symptoms and possessions. Use "I need" for things you want or require.',
      examples: [
        'I have a headache.',
        'I have a fever.',
        'I need a doctor.',
        'I need some medicine for my headache.',
      ]
    },
    lessonSteps: [
      { id: genId(), title: 'Vocabulary', duration: 10, description: 'Emergency and medical vocabulary.' },
      { id: genId(), title: 'Key Phrases', duration: 10, description: 'Practice emergency phrases.' },
      { id: genId(), title: 'Exercises', duration: 20, description: 'Complete all exercises together.' },
      { id: genId(), title: 'Roleplay', duration: 20, description: 'Pharmacy and emergency scenarios.' },
      { id: genId(), title: 'Month Review', duration: 10, description: 'Review all topics from Month 1.' },
      { id: genId(), title: 'Wrap-up & Next Month', duration: 5, description: 'Celebrate progress! Plan ahead.' },
    ],
    exercises: [
      {
        id: genId(),
        type: 'multiple-choice',
        title: 'Emergency Situations',
        instruction: 'Choose the best sentence for each situation.',
        content: {
          questions: [
            { id: genId(), question: 'You lost your passport:', options: ['I lost my passport. Can you help me?', 'Passport gone!', 'No passport!'], correctIndex: 0 },
            { id: genId(), question: 'You feel very sick:', options: ['Bad!', 'I don\'t feel well. I need a doctor.', 'Sick!'], correctIndex: 1 },
            { id: genId(), question: 'Someone stole your bag:', options: ['Bag stolen!', 'I need to call the police. Someone took my bag.', 'My bag!'], correctIndex: 1 },
            { id: genId(), question: 'You need medicine:', options: ['Medicine please!', 'Where is the nearest pharmacy?', 'Drug store!'], correctIndex: 1 },
            { id: genId(), question: 'You have a terrible headache:', options: ['Head pain!', 'I have a bad headache. Do you have something for it?', 'Ouch!'], correctIndex: 1 },
            { id: genId(), question: 'You are lost and need help:', options: ['Lost!', 'Excuse me, I\'m lost. Can you help me?', 'Where am I?'], correctIndex: 1 },
          ]
        },
        answerKey: '1. a 2. b 3. b 4. b 5. b 6. b'
      },
      {
        id: genId(),
        type: 'matching',
        title: 'Symptom and Advice',
        instruction: 'Match each symptom to the advice.',
        content: {
          pairs: [
            { id: genId(), left: 'I have a headache.', right: 'Take a painkiller and rest.' },
            { id: genId(), left: 'I have a fever.', right: 'Drink water and see a doctor.' },
            { id: genId(), left: 'I have a stomachache.', right: 'Don\'t eat heavy food.' },
            { id: genId(), left: 'I lost my passport.', right: 'Go to your embassy.' },
            { id: genId(), left: 'I feel dizzy.', right: 'Sit down and drink water.' },
            { id: genId(), left: 'I have an allergy.', right: 'Take antihistamines and avoid the trigger.' },
          ]
        },
        answerKey: 'All matched correctly'
      },
      {
        id: genId(),
        type: 'roleplay-card',
        title: 'Pharmacy Roleplay Cards',
        instruction: 'Practice the pharmacy dialogue.',
        content: {
          situation: 'You are at a pharmacy. Describe your symptoms and ask for medicine.',
          studentRole: 'Customer with a headache',
          teacherRole: 'Pharmacist',
          studentLines: [
            { id: genId(), prompt: 'Greet and explain your problem.', suggestedResponse: 'Hello, I have a terrible headache. Do you have something for it?' },
            { id: genId(), prompt: 'Answer how long you\'ve had it.', suggestedResponse: 'Since this morning.' },
            { id: genId(), prompt: 'Ask about dosage.', suggestedResponse: 'How often should I take it?' },
            { id: genId(), prompt: 'Ask about side effects.', suggestedResponse: 'Are there any side effects?' },
            { id: genId(), prompt: 'Thank and pay.', suggestedResponse: 'Thank you. How much is it?' },
          ],
          teacherLines: [
            { id: genId(), line: 'Hello! How can I help you today?' },
            { id: genId(), line: 'I\'m sorry to hear that. How long have you had it?' },
            { id: genId(), line: 'Take this painkiller. It works well for headaches.' },
            { id: genId(), line: 'One pill every 6 hours, with food.' },
            { id: genId(), line: 'It might make you sleepy. Don\'t drive after taking it.' },
            { id: genId(), line: 'That\'s $8.50. Feel better soon!' },
          ]
        },
        answerKey: 'Students practice the dialogue. Check for polite requests and clear symptom description.'
      }
    ],
    homework: [
      { id: genId(), task: 'Memorize emergency phrases.', type: 'study', details: 'Write each phrase 3 times. Practice saying them.' },
      { id: genId(), task: 'Record 1 minute: "I need a doctor because..."', type: 'recording', details: 'Practice explaining symptoms clearly.' },
    ],
    roleplay: {
      title: 'At the Pharmacy',
      situation: 'You have a headache and need medicine. Go to a pharmacy.',
      studentRole: 'Customer',
      teacherRole: 'Pharmacist',
      script: [
        { speaker: 'student', line: 'Hello, I don\'t feel well. I have a bad headache.', cue: 'Explain symptom' },
        { speaker: 'teacher', line: 'I\'m sorry to hear that. How long have you had it?' },
        { speaker: 'student', line: 'Since this morning. I couldn\'t sleep well.', cue: 'Give details' },
        { speaker: 'teacher', line: 'I understand. Do you have any allergies?' },
        { speaker: 'student', line: 'No, I don\'t have any allergies.', cue: 'Answer about allergies' },
        { speaker: 'teacher', line: 'Good. This medicine is good for headaches. Take one pill with water.' },
        { speaker: 'student', line: 'How often can I take it?', cue: 'Ask about dosage' },
        { speaker: 'teacher', line: 'Every 6 hours. Don\'t take more than 4 pills a day.' },
        { speaker: 'student', line: 'Thank you. How much is it?', cue: 'Ask price' },
        { speaker: 'teacher', line: 'It\'s $7.99. I hope you feel better soon!' },
      ]
    },
    answerKey: 'Exercise 1: a, b, b, b, b, b\nExercise 2: All matched correctly\nExercise 3: Dialogue practice',
    teacherNotes: 'End of Month 1. Celebrate progress and prepare the student for Month 2 topics.'
  },
  {
    id: 'session-9',
    number: 9,
    date: '2026-04-02',
    title: 'Public Transport + Tickets',
    goal: 'Buy tickets, ask about routes, and understand schedule information.',
    vocab: [
      { id: genId(), word: 'Ticket machine', meaning: 'آلة شراء التذاكر', example: 'Use the ticket machine to buy a pass.', category: 'transport' },
      { id: genId(), word: 'Platform', meaning: 'رصيف / منصة انتظار القطار', example: 'The train leaves from platform 3.', category: 'transport' },
      { id: genId(), word: 'One-way', meaning: 'تذكرة ذهاب فقط', example: 'I need a one-way ticket.', category: 'transport' },
      { id: genId(), word: 'Round trip', meaning: 'تذكرة ذهاب وإياب', example: 'A round trip is cheaper.', category: 'transport' },
      { id: genId(), word: 'Transfer', meaning: 'تبديل الخط / انتقال', example: 'You need one transfer.', category: 'transport' },
      { id: genId(), word: 'Delay', meaning: 'تأخير', example: 'There is a 10-minute delay.', category: 'transport' },
    ],
    phrases: [
      { id: genId(), phrase: 'Where can I buy a metro ticket?', translation: 'أين يمكنني شراء تذكرة المترو؟', situation: 'Buying ticket' },
      { id: genId(), phrase: 'Is this train going downtown?', translation: 'هل هذا القطار متجه إلى وسط المدينة؟', situation: 'Checking route' },
      { id: genId(), phrase: 'Which platform do I need?', translation: 'أي رصيف أحتاج؟', situation: 'At station' },
      { id: genId(), phrase: 'How much is a day pass?', translation: 'بكم تذكرة اليوم الكامل؟', situation: 'Pricing' },
      { id: genId(), phrase: 'Do I need to transfer?', translation: 'هل أحتاج إلى تبديل الخط؟', situation: 'Navigation' },
      { id: genId(), phrase: 'What time is the last bus?', translation: 'متى آخر حافلة؟', situation: 'Timing' },
      { id: genId(), phrase: 'Does this ticket include transfers?', translation: 'هل تشمل هذه التذكرة تبديل الخطوط؟', situation: 'Tickets' },
      { id: genId(), phrase: 'Is this the right line for the airport?', translation: 'هل هذا هو الخط الصحيح إلى المطار؟', situation: 'Checking route' },
    ],
    grammar: {
      title: 'Wh- Questions for Transport',
      explanation: 'Use where/which/how much/what time to ask for practical travel information.',
      examples: [
        'Where is the ticket machine?',
        'Which platform goes to the airport?',
        'How much is a one-way ticket?',
        'What time is the next train?',
      ]
    },
    lessonSteps: [
      { id: genId(), title: 'Warm-up', duration: 5, description: 'Talk about transport in your city.' },
      { id: genId(), title: 'Vocabulary', duration: 10, description: 'Core transport words and meanings.' },
      { id: genId(), title: 'Functional Phrases', duration: 10, description: 'Practice useful ticket and route questions.' },
      { id: genId(), title: 'Exercises', duration: 20, description: 'Complete listening and speaking drills.' },
      { id: genId(), title: 'Roleplay', duration: 15, description: 'At a metro station ticket office.' },
    ],
    exercises: [
      {
        id: genId(),
        type: 'multiple-choice',
        title: 'Choose the Best Question',
        instruction: 'Choose the correct sentence for each situation.',
        content: {
          questions: [
            { id: genId(), question: 'You want to know the price:', options: ['Where ticket?', 'How much is a ticket?', 'Ticket now.'], correctIndex: 1 },
            { id: genId(), question: 'You need the location:', options: ['Where is platform 4?', 'Platform 4 where is?', 'It is platform?'], correctIndex: 0 },
            { id: genId(), question: 'You ask about time:', options: ['What time is the next train?', 'Train what time?', 'When train you?'], correctIndex: 0 },
          ]
        },
        answerKey: '1.b 2.a 3.a'
      },
      {
        id: genId(),
        type: 'fill-blank',
        title: 'Station Dialogue',
        instruction: 'Complete with: where, much, platform, transfer, time',
        content: {
          sentences: [
            { id: genId(), text: 'Excuse me, ___ is the ticket machine?', answer: 'where' },
            { id: genId(), text: 'How ___ is a one-way ticket?', answer: 'much' },
            { id: genId(), text: 'Which ___ goes to the airport?', answer: 'platform' },
            { id: genId(), text: 'Do I need to ___ at Central Station?', answer: 'transfer' },
            { id: genId(), text: 'What ___ is the last bus?', answer: 'time' },
          ]
        },
        answerKey: 'where, much, platform, transfer, time'
      }
    ],
    homework: [
      { id: genId(), task: 'Write 8 transport questions for a tourist.', type: 'writing', details: 'Use where/which/how much/what time.' },
      { id: genId(), task: 'Record a 1-minute station conversation.', type: 'recording', details: 'Include buying a ticket and asking platform.' },
    ],
    roleplay: {
      title: 'At the Ticket Office',
      situation: 'You need to go to the airport by train and you are not sure which ticket to buy.',
      studentRole: 'Traveler',
      teacherRole: 'Ticket clerk',
      script: [
        { speaker: 'student', line: 'Hello, I need to go to the airport. Can you help me?', cue: 'Ask for help' },
        { speaker: 'teacher', line: 'Sure. One-way or round trip?' },
        { speaker: 'student', line: 'Round trip, please. How much is it?', cue: 'Ask price' },
        { speaker: 'teacher', line: 'It is 12 dollars. Platform 5.' },
        { speaker: 'student', line: 'Do I need to transfer?', cue: 'Ask route detail' },
        { speaker: 'teacher', line: 'Yes, transfer once at Central. The train leaves in 10 minutes.' },
      ]
    },
    answerKey: 'Exercise 1: b, a, a. Exercise 2: where, much, platform, transfer, time.',
    teacherNotes: 'Focus on confidence in asking clear transport questions.'
  },
  {
    id: 'session-10',
    number: 10,
    date: '2026-04-03',
    title: 'Shopping + Returns',
    goal: 'Ask about sizes, pay, and handle return or exchange situations.',
    vocab: [
      { id: genId(), word: 'Receipt', meaning: 'إيصال الشراء', category: 'shopping' },
      { id: genId(), word: 'Exchange', meaning: 'استبدال المنتج', category: 'shopping' },
      { id: genId(), word: 'Refund', meaning: 'استرجاع المال', category: 'shopping' },
      { id: genId(), word: 'Fitting room', meaning: 'غرفة القياس', category: 'shopping' },
      { id: genId(), word: 'Cashier', meaning: 'أمين الصندوق', category: 'shopping' },
    ],
    phrases: [
      { id: genId(), phrase: 'Can I try this on?', translation: 'هل يمكنني تجربة هذا؟', situation: 'Shopping' },
      { id: genId(), phrase: 'Do you have this in medium?', translation: 'هل لديكم هذا بمقاس متوسط؟', situation: 'Shopping' },
      { id: genId(), phrase: 'I would like to return this item.', translation: 'أود إرجاع هذا المنتج.', situation: 'Returns' },
      { id: genId(), phrase: 'Can I exchange it for a larger size?', translation: 'هل يمكنني استبداله بمقاس أكبر؟', situation: 'Returns' },
      { id: genId(), phrase: 'Could I get a receipt, please?', translation: 'هل يمكنني الحصول على إيصال من فضلك؟', situation: 'Checkout' },
      { id: genId(), phrase: 'This item is damaged.', translation: 'هذا المنتج تالف.', situation: 'Returns' },
      { id: genId(), phrase: 'Is there a return policy?', translation: 'هل توجد سياسة للإرجاع؟', situation: 'Shopping policy' },
    ],
    grammar: {
      title: 'Polite Requests with Could I / I would like',
      explanation: 'Use polite forms in customer service interactions.',
      examples: ['Could I try this on?', 'I would like a refund, please.']
    },
    lessonSteps: [
      { id: genId(), title: 'Vocabulary', duration: 10, description: 'Shopping and returns vocabulary.' },
      { id: genId(), title: 'Phrases', duration: 10, description: 'Practice polite request patterns.' },
      { id: genId(), title: 'Exercises', duration: 20, description: 'Short practical dialogues.' },
      { id: genId(), title: 'Roleplay', duration: 15, description: 'Returning a shirt.' },
    ],
    exercises: [
      {
        id: genId(),
        type: 'matching',
        title: 'Match Phrase to Situation',
        instruction: 'Connect each phrase to the correct use case.',
        content: {
          pairs: [
            { id: genId(), left: 'Can I try this on?', right: 'Trying clothes' },
            { id: genId(), left: 'I would like to return this item.', right: 'Returning a purchase' },
            { id: genId(), left: 'Can I exchange it?', right: 'Changing size' },
          ]
        },
        answerKey: 'All pairs as listed.'
      },
      {
        id: genId(),
        type: 'multiple-choice',
        title: 'Most Polite Option',
        instruction: 'Choose the most natural sentence.',
        content: {
          questions: [
            { id: genId(), question: 'At checkout:', options: ['Receipt me.', 'Could I get a receipt, please?', 'Paper now.'], correctIndex: 1 },
            { id: genId(), question: 'Wrong size:', options: ['Can I exchange it for a larger size?', 'No size.', 'Change this.'], correctIndex: 0 },
          ]
        },
        answerKey: '1.b 2.a'
      }
    ],
    homework: [
      { id: genId(), task: 'Write 6 polite shopping requests.', type: 'writing', details: 'Use Could I and I would like.' },
      { id: genId(), task: 'Record a 45-second return request.', type: 'recording', details: 'Use clear and polite language.' },
    ],
    roleplay: {
      title: 'Returning a Shirt',
      situation: 'You bought a shirt yesterday, but it is too small.',
      studentRole: 'Customer',
      teacherRole: 'Store assistant',
      script: [
        { speaker: 'student', line: 'Hi, I would like to return this shirt.', cue: 'State request' },
        { speaker: 'teacher', line: 'Sure. Do you have the receipt?' },
        { speaker: 'student', line: 'Yes, and can I exchange it for a larger size?', cue: 'Ask for exchange' },
        { speaker: 'teacher', line: 'Of course. Here is the larger size.' },
      ]
    },
    answerKey: 'Matching + MCQ as listed.',
    teacherNotes: 'Reinforce natural polite tone in service conversations.'
  },
  {
    id: 'session-11',
    number: 11,
    date: '2026-04-06',
    title: 'Restaurant Problems + Preferences',
    goal: 'Handle order mistakes and explain food preferences politely.',
    vocab: [
      { id: genId(), word: 'Ingredient', meaning: 'مكوّن', category: 'food' },
      { id: genId(), word: 'Spicy', meaning: 'حار', category: 'food' },
      { id: genId(), word: 'Allergy', meaning: 'حساسية', category: 'food' },
      { id: genId(), word: 'Recommend', meaning: 'يوصي / يقترح', category: 'food' },
      { id: genId(), word: 'Separate bill', meaning: 'فاتورة منفصلة', category: 'food' },
    ],
    phrases: [
      { id: genId(), phrase: 'Sorry, this is not what I ordered.', translation: 'عذراً، هذا ليس ما طلبته.', situation: 'Restaurant problem' },
      { id: genId(), phrase: 'Could you make it less spicy?', translation: 'هل يمكن أن يكون أقل حدة؟', situation: 'Preference' },
      { id: genId(), phrase: 'I am allergic to nuts.', translation: 'لدي حساسية من المكسرات.', situation: 'Allergy' },
      { id: genId(), phrase: 'What do you recommend?', translation: 'ماذا تنصحني؟', situation: 'Ordering' },
      { id: genId(), phrase: 'Could we have separate bills?', translation: 'هل يمكننا الحصول على فواتير منفصلة؟', situation: 'Payment' },
      { id: genId(), phrase: 'Can I see the ingredients, please?', translation: 'هل يمكنني رؤية المكوّنات من فضلك؟', situation: 'Dietary' },
      { id: genId(), phrase: 'I would like this without onions.', translation: 'أود هذا الطبق بدون بصل.', situation: 'Preference' },
    ],
    grammar: {
      title: 'Could you + verb',
      explanation: 'Use this form for polite requests in restaurants.',
      examples: ['Could you change this dish?', 'Could you bring some water?']
    },
    lessonSteps: [
      { id: genId(), title: 'Vocabulary', duration: 10, description: 'Food quality and preference terms.' },
      { id: genId(), title: 'Phrases', duration: 10, description: 'Polite correction language.' },
      { id: genId(), title: 'Exercises', duration: 20, description: 'Restaurant scenarios.' },
      { id: genId(), title: 'Roleplay', duration: 15, description: 'Wrong order case.' },
    ],
    exercises: [
      {
        id: genId(),
        type: 'fill-blank',
        title: 'Restaurant Fixes',
        instruction: 'Complete with: ordered, spicy, allergic, recommend',
        content: {
          sentences: [
            { id: genId(), text: 'This is not what I ___.', answer: 'ordered' },
            { id: genId(), text: 'Could you make it less ___?', answer: 'spicy' },
            { id: genId(), text: 'I am ___ to seafood.', answer: 'allergic' },
            { id: genId(), text: 'What do you ___?', answer: 'recommend' },
          ]
        },
        answerKey: 'ordered, spicy, allergic, recommend'
      },
      {
        id: genId(),
        type: 'multiple-choice',
        title: 'Most Polite Response',
        instruction: 'Choose the best sentence.',
        content: {
          questions: [
            { id: genId(), question: 'Wrong dish arrives:', options: ['Wrong.', 'Sorry, this is not what I ordered.', 'No.'], correctIndex: 1 },
            { id: genId(), question: 'Need less spice:', options: ['No spicy.', 'Could you make it less spicy, please?', 'Hot.'], correctIndex: 1 },
          ]
        },
        answerKey: '1.b 2.b'
      }
    ],
    homework: [
      { id: genId(), task: 'Write 5 polite restaurant requests.', type: 'writing', details: 'Include allergy and correction examples.' },
      { id: genId(), task: 'Record a 1-minute restaurant dialogue.', type: 'recording', details: 'Use polite tone.' },
    ],
    roleplay: {
      title: 'Wrong Order at Dinner',
      situation: 'You ordered fish but received chicken.',
      studentRole: 'Customer',
      teacherRole: 'Waiter',
      script: [
        { speaker: 'student', line: 'Excuse me, this is not what I ordered.', cue: 'Correct politely' },
        { speaker: 'teacher', line: 'I am sorry. What did you order?' },
        { speaker: 'student', line: 'I ordered fish. Could you change it, please?', cue: 'Request replacement' },
        { speaker: 'teacher', line: 'Of course. We will replace it now.' },
      ]
    },
    answerKey: 'Exercises as listed.',
    teacherNotes: 'Coach student to stay polite even during complaints.'
  },
  {
    id: 'session-12',
    number: 12,
    date: '2026-04-07',
    title: 'City Navigation + Landmarks',
    goal: 'Ask and give longer directions using landmarks and sequence words.',
    vocab: [
      { id: genId(), word: 'Intersection', meaning: 'تقاطع طرق', category: 'directions' },
      { id: genId(), word: 'Across from', meaning: 'مقابل', category: 'directions' },
      { id: genId(), word: 'Next to', meaning: 'بجانب', category: 'directions' },
      { id: genId(), word: 'Landmark', meaning: 'معلم معروف للاستدلال', category: 'directions' },
      { id: genId(), word: 'Shortcut', meaning: 'طريق مختصر', category: 'directions' },
    ],
    phrases: [
      { id: genId(), phrase: 'Go straight for two blocks.', translation: 'امشِ مباشرةً لمسافتين.', situation: 'Directions' },
      { id: genId(), phrase: 'Turn left at the second traffic light.', translation: 'انعطف يساراً عند إشارة المرور الثانية.', situation: 'Directions' },
      { id: genId(), phrase: 'It is next to the post office.', translation: 'إنه بجانب مكتب البريد.', situation: 'Landmarks' },
      { id: genId(), phrase: 'Could you show me on the map?', translation: 'هل يمكنك أن تريني على الخريطة؟', situation: 'Clarification' },
      { id: genId(), phrase: 'How long does it take on foot?', translation: 'كم يستغرق الوصول سيراً على الأقدام؟', situation: 'Time' },
      { id: genId(), phrase: 'Should I turn right at the bank?', translation: 'هل أنعطف يميناً عند البنك؟', situation: 'Confirmation' },
      { id: genId(), phrase: 'Is it near or far from here?', translation: 'هل هو قريب أم بعيد من هنا؟', situation: 'Distance' },
    ],
    grammar: {
      title: 'Sequence words',
      explanation: 'Use first, then, after that, finally to guide someone clearly.',
      examples: ['First go straight.', 'Then turn right.', 'Finally, it is on your left.']
    },
    lessonSteps: [
      { id: genId(), title: 'Vocabulary', duration: 10, description: 'Direction and landmark terms.' },
      { id: genId(), title: 'Grammar', duration: 10, description: 'Sequencing directions.' },
      { id: genId(), title: 'Exercises', duration: 20, description: 'Map-based direction drills.' },
      { id: genId(), title: 'Roleplay', duration: 15, description: 'Helping a lost tourist.' },
    ],
    exercises: [
      {
        id: genId(),
        type: 'dialogue-builder',
        title: 'Order the Direction Steps',
        instruction: 'Put the lines in the correct order.',
        content: {
          lines: [
            { id: genId(), speaker: 'local', text: 'Finally, you will see the museum on your right.', correctOrder: 4 },
            { id: genId(), speaker: 'local', text: 'First, go straight for one block.', correctOrder: 1 },
            { id: genId(), speaker: 'local', text: 'After that, cross the bridge.', correctOrder: 3 },
            { id: genId(), speaker: 'local', text: 'Then turn left at the bank.', correctOrder: 2 },
          ]
        },
        answerKey: '1 First, 2 Then, 3 After that, 4 Finally.'
      },
      {
        id: genId(),
        type: 'matching',
        title: 'Landmark Meanings',
        instruction: 'Match phrase to meaning.',
        content: {
          pairs: [
            { id: genId(), left: 'Across from', right: 'Opposite side' },
            { id: genId(), left: 'Next to', right: 'Beside' },
            { id: genId(), left: 'Intersection', right: 'Road crossing' },
          ]
        },
        answerKey: 'All pairs as listed.'
      }
    ],
    homework: [
      { id: genId(), task: 'Describe a route from your home to a landmark.', type: 'writing', details: 'Use sequence words.' },
      { id: genId(), task: 'Record spoken directions (45-60 sec).', type: 'recording', details: 'Clear step-by-step explanation.' },
    ],
    roleplay: {
      title: 'Helping a Tourist',
      situation: 'A tourist asks for directions to the history museum.',
      studentRole: 'Helpful local',
      teacherRole: 'Tourist',
      script: [
        { speaker: 'teacher', line: 'Excuse me, how can I get to the history museum?' },
        { speaker: 'student', line: 'First, go straight for two blocks.', cue: 'Start sequence' },
        { speaker: 'teacher', line: 'Then what?' },
        { speaker: 'student', line: 'Then turn right at the church. Finally, it is next to the park.', cue: 'Finish route' },
      ]
    },
    answerKey: 'Dialogue order + matching as listed.',
    teacherNotes: 'Push complete multi-step answers instead of short responses.'
  },
  {
    id: 'session-13',
    number: 13,
    date: '2026-04-09',
    title: 'Phone Calls + Reservations',
    goal: 'Make simple phone calls and reserve tables, rooms, or tickets.',
    vocab: [
      { id: genId(), word: 'Reservation', meaning: 'حجز مسبق', category: 'booking' },
      { id: genId(), word: 'Available', meaning: 'متاح', category: 'booking' },
      { id: genId(), word: 'Confirm', meaning: 'تأكيد', category: 'booking' },
      { id: genId(), word: 'Cancel', meaning: 'إلغاء', category: 'booking' },
      { id: genId(), word: 'Hold on', meaning: 'انتظر لحظة', category: 'phone' },
    ],
    phrases: [
      { id: genId(), phrase: 'Hello, I would like to make a reservation.', translation: 'مرحباً، أود إجراء حجز.', situation: 'Phone call' },
      { id: genId(), phrase: 'Do you have any rooms available?', translation: 'هل لديكم غرف متاحة؟', situation: 'Hotel booking' },
      { id: genId(), phrase: 'I would like to book a table for two.', translation: 'أود حجز طاولة لشخصين.', situation: 'Restaurant booking' },
      { id: genId(), phrase: 'Could you confirm the date and time?', translation: 'هل يمكنك تأكيد التاريخ والوقت؟', situation: 'Confirmation' },
      { id: genId(), phrase: 'I need to cancel my reservation.', translation: 'أحتاج إلى إلغاء حجزي.', situation: 'Cancellation' },
      { id: genId(), phrase: 'Could you spell your name, please?', translation: 'هل يمكنك تهجئة اسمك من فضلك؟', situation: 'Phone clarification' },
      { id: genId(), phrase: 'Can I get a confirmation email?', translation: 'هل يمكنني الحصول على بريد تأكيد؟', situation: 'Booking confirmation' },
    ],
    grammar: {
      title: 'would like to + verb',
      explanation: 'Use this structure for polite reservation requests.',
      examples: ['I would like to book a room.', 'I would like to cancel my booking.']
    },
    lessonSteps: [
      { id: genId(), title: 'Vocabulary', duration: 10, description: 'Reservation language.' },
      { id: genId(), title: 'Grammar', duration: 10, description: 'Polite intent statements.' },
      { id: genId(), title: 'Exercises', duration: 20, description: 'Phone call practice.' },
      { id: genId(), title: 'Roleplay', duration: 15, description: 'Hotel booking call.' },
    ],
    exercises: [
      {
        id: genId(),
        type: 'multiple-choice',
        title: 'Booking Calls',
        instruction: 'Choose the best line for each case.',
        content: {
          questions: [
            { id: genId(), question: 'Start a call politely:', options: ['Room now.', 'Hello, I would like to make a reservation.', 'Book me.'], correctIndex: 1 },
            { id: genId(), question: 'Check availability:', options: ['Do you have any rooms available?', 'Any room?', 'Room yes?'], correctIndex: 0 },
          ]
        },
        answerKey: '1.b 2.a'
      },
      {
        id: genId(),
        type: 'speaking-prompt',
        title: 'Reservation Drill',
        instruction: 'Practice a 60-second booking call.',
        content: {
          prompt: 'Call a hotel to reserve a room for two nights and confirm details.',
          duration: 60,
          suggestedPoints: ['Greeting', 'Dates', 'Room type', 'Confirmation']
        },
        answerKey: 'Student covers all key points clearly.'
      }
    ],
    homework: [
      { id: genId(), task: 'Write one booking call script and one cancellation script.', type: 'writing', details: '8-10 lines each.' },
      { id: genId(), task: 'Record a 1-minute booking call.', type: 'recording', details: 'Use clear polite phrases.' },
    ],
    roleplay: {
      title: 'Hotel Reservation Call',
      situation: 'You call a hotel to reserve a room for this weekend.',
      studentRole: 'Guest',
      teacherRole: 'Receptionist',
      script: [
        { speaker: 'student', line: 'Hello, I would like to make a reservation for this weekend.', cue: 'Start call' },
        { speaker: 'teacher', line: 'Certainly. For how many nights?' },
        { speaker: 'student', line: 'Two nights. Could you confirm availability?', cue: 'Ask details' },
        { speaker: 'teacher', line: 'Yes, we have a room available.' },
      ]
    },
    answerKey: 'MCQ and speaking prompt as listed.',
    teacherNotes: 'Practice both slow and normal call speed.'
  },
  {
    id: 'session-14',
    number: 14,
    date: '2026-04-10',
    title: 'Small Talk + Social Confidence',
    goal: 'Start and maintain short friendly conversations in travel contexts.',
    vocab: [
      { id: genId(), word: 'Hometown', meaning: 'المدينة الأصلية', category: 'social' },
      { id: genId(), word: 'Hobby', meaning: 'هواية', category: 'social' },
      { id: genId(), word: 'Occupation', meaning: 'المهنة', category: 'social' },
      { id: genId(), word: 'Recommend', meaning: 'يوصي / يقترح', category: 'social' },
      { id: genId(), word: 'Conversation', meaning: 'محادثة', category: 'social' },
    ],
    phrases: [
      { id: genId(), phrase: 'Is this your first time here?', translation: 'هل هذه أول مرة لك هنا؟', situation: 'Small talk' },
      { id: genId(), phrase: 'What do you usually do on weekends?', translation: 'ماذا تفعل عادة في عطلة نهاية الأسبوع؟', situation: 'Small talk' },
      { id: genId(), phrase: 'Do you have any recommendations?', translation: 'هل لديك أي توصيات؟', situation: 'Travel chat' },
      { id: genId(), phrase: 'That sounds interesting.', translation: 'هذا يبدو ممتعاً.', situation: 'Response' },
      { id: genId(), phrase: 'It was nice talking to you.', translation: 'سعدت بالحديث معك.', situation: 'Closing' },
      { id: genId(), phrase: 'What brings you to this city?', translation: 'ما الذي جاء بك إلى هذه المدينة؟', situation: 'Small talk' },
      { id: genId(), phrase: 'I am here for a short vacation.', translation: 'أنا هنا في عطلة قصيرة.', situation: 'Travel chat' },
    ],
    grammar: {
      title: 'Present simple for habits',
      explanation: 'Use present simple to describe routines and interests.',
      examples: ['I usually travel in summer.', 'We often go out on weekends.']
    },
    lessonSteps: [
      { id: genId(), title: 'Vocabulary', duration: 10, description: 'Social conversation words.' },
      { id: genId(), title: 'Grammar', duration: 10, description: 'Present simple for routine topics.' },
      { id: genId(), title: 'Exercises', duration: 20, description: 'Question and follow-up practice.' },
      { id: genId(), title: 'Roleplay', duration: 15, description: 'Conversation at a cafe.' },
    ],
    exercises: [
      {
        id: genId(),
        type: 'multiple-choice',
        title: 'Friendly Responses',
        instruction: 'Choose the best response.',
        content: {
          questions: [
            { id: genId(), question: 'Someone says: "I love hiking."', options: ['No.', 'That sounds interesting!', 'Okay bye.'], correctIndex: 1 },
            { id: genId(), question: 'You want advice:', options: ['Advice now.', 'Do you have any recommendations?', 'Tell me thing.'], correctIndex: 1 },
          ]
        },
        answerKey: '1.b 2.b'
      },
      {
        id: genId(),
        type: 'speaking-prompt',
        title: 'Two-Minute Small Talk',
        instruction: 'Speak naturally with follow-up questions.',
        content: {
          prompt: 'Start a conversation with a traveler at a cafe and keep it going.',
          duration: 120,
          suggestedPoints: ['Where from', 'Reason for travel', 'Hobbies', 'Recommendations']
        },
        answerKey: 'Student asks at least 4 follow-up questions.'
      }
    ],
    homework: [
      { id: genId(), task: 'Prepare 10 small-talk questions.', type: 'writing', details: 'Prefer open questions.' },
      { id: genId(), task: 'Record a 90-second intro + chat starter.', type: 'recording', details: 'Use natural tone.' },
    ],
    roleplay: {
      title: 'Meeting at a Cafe',
      situation: 'You sit near another traveler and start chatting.',
      studentRole: 'Traveler 1',
      teacherRole: 'Traveler 2',
      script: [
        { speaker: 'student', line: 'Hi, is this seat free?', cue: 'Open politely' },
        { speaker: 'teacher', line: 'Yes. Are you visiting this city?' },
        { speaker: 'student', line: 'Yes, it is my first time here. How about you?', cue: 'Respond and ask back' },
        { speaker: 'teacher', line: 'I come here often for work.' },
      ]
    },
    answerKey: 'Exercises as listed.',
    teacherNotes: 'Encourage follow-up questions and active listening signals.'
  },
  {
    id: 'session-15',
    number: 15,
    date: '2026-04-13',
    title: 'Travel Problems + Solutions',
    goal: 'Explain travel problems clearly and negotiate practical solutions.',
    vocab: [
      { id: genId(), word: 'Lost luggage', meaning: 'أمتعة مفقودة', category: 'problems' },
      { id: genId(), word: 'Cancelled', meaning: 'ملغى', category: 'problems' },
      { id: genId(), word: 'Compensation', meaning: 'تعويض', category: 'problems' },
      { id: genId(), word: 'Voucher', meaning: 'قسيمة', category: 'problems' },
      { id: genId(), word: 'Urgent', meaning: 'عاجل', category: 'problems' },
    ],
    phrases: [
      { id: genId(), phrase: 'My flight was cancelled. What are my options?', translation: 'تم إلغاء رحلتي. ما هي الخيارات المتاحة؟', situation: 'Airport issue' },
      { id: genId(), phrase: 'My luggage did not arrive.', translation: 'لم تصل أمتعتي.', situation: 'Airport issue' },
      { id: genId(), phrase: 'Could you help me file a report?', translation: 'هل يمكنك مساعدتي في تقديم بلاغ؟', situation: 'Support desk' },
      { id: genId(), phrase: 'Is there any compensation available?', translation: 'هل يوجد أي تعويض متاح؟', situation: 'Negotiation' },
      { id: genId(), phrase: 'Thank you for your help.', translation: 'شكراً على مساعدتك.', situation: 'Closing' },
      { id: genId(), phrase: 'When can I expect an update?', translation: 'متى يمكنني أن أتوقع تحديثاً؟', situation: 'Follow-up' },
      { id: genId(), phrase: 'Could you give me a reference number?', translation: 'هل يمكنك إعطائي رقم متابعة؟', situation: 'Support desk' },
    ],
    grammar: {
      title: 'Past simple for reporting problems',
      explanation: 'Use past simple to explain what happened, then make a polite request.',
      examples: ['My flight was cancelled.', 'My bag did not arrive.', 'Could you help me?']
    },
    lessonSteps: [
      { id: genId(), title: 'Vocabulary', duration: 10, description: 'Travel disruption terms.' },
      { id: genId(), title: 'Grammar', duration: 10, description: 'Report + request structure.' },
      { id: genId(), title: 'Exercises', duration: 20, description: 'Problem-solving speaking drills.' },
      { id: genId(), title: 'Roleplay', duration: 15, description: 'Lost luggage desk.' },
    ],
    exercises: [
      {
        id: genId(),
        type: 'fill-blank',
        title: 'Support Desk Language',
        instruction: 'Complete with: cancelled, arrive, report, urgent',
        content: {
          sentences: [
            { id: genId(), text: 'My flight was ___.', answer: 'cancelled' },
            { id: genId(), text: 'My luggage did not ___.', answer: 'arrive' },
            { id: genId(), text: 'Could you help me file a ___?', answer: 'report' },
            { id: genId(), text: 'This is ___ because I travel tonight.', answer: 'urgent' },
          ]
        },
        answerKey: 'cancelled, arrive, report, urgent'
      },
      {
        id: genId(),
        type: 'multiple-choice',
        title: 'Best Polite Request',
        instruction: 'Choose the strongest practical sentence.',
        content: {
          questions: [
            { id: genId(), question: 'Need immediate help:', options: ['Help.', 'Could you help me now? This is urgent.', 'Now.'], correctIndex: 1 },
            { id: genId(), question: 'Need alternatives:', options: ['Else?', 'What are my options, please?', 'Option.'], correctIndex: 1 },
          ]
        },
        answerKey: '1.b 2.b'
      }
    ],
    homework: [
      { id: genId(), task: 'Write two travel problem reports.', type: 'writing', details: 'Use problem + polite request format.' },
      { id: genId(), task: 'Record a 1-minute airline support call.', type: 'recording', details: 'Clear and calm tone.' },
    ],
    roleplay: {
      title: 'Lost Luggage Desk',
      situation: 'Your suitcase did not arrive at baggage claim.',
      studentRole: 'Passenger',
      teacherRole: 'Airline support agent',
      script: [
        { speaker: 'student', line: 'Hello, my luggage did not arrive.', cue: 'State problem' },
        { speaker: 'teacher', line: 'I am sorry to hear that. May I see your baggage tag?' },
        { speaker: 'student', line: 'Yes. Could you help me file a report?', cue: 'Request action' },
        { speaker: 'teacher', line: 'Of course. Please describe your suitcase.' },
      ]
    },
    answerKey: 'Exercises as listed.',
    teacherNotes: 'Prioritize clear and calm communication in stressful situations.'
  },
  {
    id: 'session-16',
    number: 16,
    date: '2026-04-14',
    title: 'Month 2 Final Simulation + Review',
    goal: 'Combine all Month 2 skills in realistic end-to-end scenarios.',
    vocab: [
      { id: genId(), word: 'Scenario', meaning: 'سيناريو تدريبي', category: 'review' },
      { id: genId(), word: 'Confident', meaning: 'واثق', category: 'review' },
      { id: genId(), word: 'Clarify', meaning: 'يوضح', category: 'review' },
      { id: genId(), word: 'Summarize', meaning: 'يلخّص', category: 'review' },
      { id: genId(), word: 'Feedback', meaning: 'ملاحظات للتطوير', category: 'review' },
    ],
    phrases: [
      { id: genId(), phrase: 'Let me explain the situation clearly.', translation: 'دعني أشرح الموقف بوضوح.', situation: 'Simulation' },
      { id: genId(), phrase: 'Could you summarize the options?', translation: 'هل يمكنك تلخيص الخيارات؟', situation: 'Clarification' },
      { id: genId(), phrase: 'I would prefer the fastest solution.', translation: 'أفضل الحل الأسرع.', situation: 'Decision making' },
      { id: genId(), phrase: 'Could we go over that one more time?', translation: 'هل يمكننا مراجعة ذلك مرة أخرى؟', situation: 'Review' },
      { id: genId(), phrase: 'I feel much more confident now.', translation: 'أشعر بثقة أكبر الآن.', situation: 'Reflection' },
      { id: genId(), phrase: 'I can handle this situation now.', translation: 'أستطيع التعامل مع هذا الموقف الآن.', situation: 'Confidence' },
      { id: genId(), phrase: 'Thank you for the feedback.', translation: 'شكراً على الملاحظات.', situation: 'Review' },
    ],
    grammar: {
      title: 'Mixed review',
      explanation: 'Combine present, past, and polite request patterns naturally.',
      examples: ['My train was delayed, so I need help now.', 'Could you explain my options again?']
    },
    lessonSteps: [
      { id: genId(), title: 'Review', duration: 10, description: 'Recap sessions 9-15.' },
      { id: genId(), title: 'Scenario 1', duration: 15, description: 'Transport + directions.' },
      { id: genId(), title: 'Scenario 2', duration: 15, description: 'Booking + service issue.' },
      { id: genId(), title: 'Scenario 3', duration: 15, description: 'Problem solving and negotiation.' },
      { id: genId(), title: 'Feedback', duration: 5, description: 'Celebrate progress and set next goals.' },
    ],
    exercises: [
      {
        id: genId(),
        type: 'speaking-prompt',
        title: 'Full Travel Simulation',
        instruction: 'Complete a 3-minute simulation from station to hotel.',
        content: {
          prompt: 'Handle transport info, a booking issue, and a polite complaint with solution.',
          duration: 180,
          suggestedPoints: ['Clear problem', 'Polite request', 'Follow-up question', 'Confident close']
        },
        answerKey: 'Student completes all phases understandably.'
      },
      {
        id: genId(),
        type: 'multiple-choice',
        title: 'Final Review Check',
        instruction: 'Choose the best practical response.',
        content: {
          questions: [
            { id: genId(), question: 'Need platform info:', options: ['Platform?', 'Which platform goes to the airport?', 'Tell track.'], correctIndex: 1 },
            { id: genId(), question: 'Need repetition:', options: ['Again.', 'Could you repeat that more slowly, please?', 'Say.'], correctIndex: 1 },
            { id: genId(), question: 'Lost luggage report:', options: ['Bag gone.', 'My luggage did not arrive. Could you help me file a report?', 'No bag.'], correctIndex: 1 },
          ]
        },
        answerKey: '1.b 2.b 3.b'
      }
    ],
    homework: [
      { id: genId(), task: 'Write self-reflection after Month 2.', type: 'writing', details: 'Include strengths and next goals.' },
      { id: genId(), task: 'Record final 2-minute travel day simulation.', type: 'recording', details: 'Use clear and confident speech.' },
    ],
    roleplay: {
      title: 'End-to-End Travel Day',
      situation: 'You arrive in a new city, use transport, handle booking, and solve a problem.',
      studentRole: 'Traveler',
      teacherRole: 'Service staff',
      script: [
        { speaker: 'student', line: 'Hello, which platform goes downtown?', cue: 'Transport step' },
        { speaker: 'teacher', line: 'Platform 2. You need one transfer at Central.' },
        { speaker: 'student', line: 'Thanks. I also need to confirm my hotel booking.', cue: 'Booking step' },
        { speaker: 'teacher', line: 'Confirmed. Your room is ready after 3 PM.' },
      ]
    },
    answerKey: 'Final review answers as listed.',
    teacherNotes: 'End of Month 2 milestone. Celebrate progress and prepare Month 3.'
  },
  // ============ MONTH 2 CONTINUED: APRIL WEEKS 3-4 ============
  {
    id: 'session-17',
    number: 17,
    date: '2026-04-16',
    title: 'At the Pharmacy + Health Emergencies',
    goal: 'Describe symptoms, ask for medicine, and understand pharmacy instructions.',
    vocab: [
      { id: genId(), word: 'Symptom', meaning: 'عرض مرضي', example: 'My symptom is a bad cough.', category: 'health' },
      { id: genId(), word: 'Prescription', meaning: 'وصفة طبية', example: 'I need a prescription for this medicine.', category: 'health' },
      { id: genId(), word: 'Painkiller', meaning: 'مسكن ألم', example: 'Can I get some painkillers?', category: 'health' },
      { id: genId(), word: 'Allergic', meaning: 'مصاب بحساسية', example: 'I am allergic to penicillin.', category: 'health' },
      { id: genId(), word: 'Dosage', meaning: 'جرعة الدواء', example: 'What is the correct dosage?', category: 'health' },
      { id: genId(), word: 'Side effect', meaning: 'عرض جانبي', example: 'Does this medicine have side effects?', category: 'health' },
    ],
    phrases: [
      { id: genId(), phrase: 'I have a headache and a sore throat.', translation: 'عندي صداع والتهاب في الحلق.', situation: 'Describing symptoms' },
      { id: genId(), phrase: 'Can I get this without a prescription?', translation: 'هل يمكنني الحصول على هذا بدون وصفة طبية؟', situation: 'At pharmacy' },
      { id: genId(), phrase: 'How often should I take this?', translation: 'كم مرة يجب أن أتناول هذا؟', situation: 'Medicine instructions' },
      { id: genId(), phrase: 'Are there any side effects?', translation: 'هل توجد أي آثار جانبية؟', situation: 'Asking about medicine' },
      { id: genId(), phrase: 'I need something for a cold.', translation: 'أحتاج شيئاً للبرد.', situation: 'At pharmacy' },
      { id: genId(), phrase: 'Does this interact with other medicine?', translation: 'هل هذا يتعارض مع أدوية أخرى؟', situation: 'Safety check' },
    ],
    grammar: {
      title: 'Should / Must for Health Advice',
      explanation: '"Should" gives advice (you should rest). "Must" gives strong obligation (you must take this medicine every day).',
      examples: [
        'You should drink more water.',
        'She must take the medicine with food.',
        'I shouldn\'t eat dairy with this antibiotic.',
        'You must finish the whole course.',
      ]
    },
    lessonSteps: [
      { id: genId(), title: 'Warm-up', duration: 5, description: 'Talk about times you felt sick.' },
      { id: genId(), title: 'Vocabulary', duration: 10, description: 'Learn pharmacy and health words.' },
      { id: genId(), title: 'Grammar Focus', duration: 10, description: 'Practice should/must for advice.' },
      { id: genId(), title: 'Phrases', duration: 10, description: 'Roleplay pharmacy conversations.' },
      { id: genId(), title: 'Exercises', duration: 15, description: 'Complete all exercises.' },
      { id: genId(), title: 'Wrap-up', duration: 5, description: 'Review and homework.' },
    ],
    exercises: [
      {
        id: genId(),
        type: 'multiple-choice',
        title: 'Health Advice',
        instruction: 'Choose the correct sentence.',
        content: {
          questions: [
            { id: genId(), question: 'A doctor gives strong advice:', options: ['You should to rest.', 'You must rest.', 'You must resting.'], correctIndex: 1 },
            { id: genId(), question: 'You recommend something:', options: ['You should drink water.', 'You must drink water.', 'You should drinking water.'], correctIndex: 0 },
            { id: genId(), question: 'Something is prohibited:', options: ['You shouldn\'t take this.', 'You don\'t should take this.', 'You mustn\'t to take this.'], correctIndex: 0 },
          ]
        },
        answerKey: '1.b 2.a 3.a'
      },
      {
        id: genId(),
        type: 'fill-blank',
        title: 'Fill in the Blanks',
        instruction: 'Complete with should or must.',
        content: {
          sentences: [
            { id: genId(), text: 'You ___ finish the antibiotics.', answer: 'must' },
            { id: genId(), text: 'She ___ see a doctor if she feels worse.', answer: 'should' },
            { id: genId(), text: 'You ___ not drive after taking this medicine.', answer: 'should' },
          ]
        },
        answerKey: '1. must 2. should 3. should'
      },
      {
        id: genId(),
        type: 'dialogue-builder',
        title: 'Pharmacy Dialogue',
        instruction: 'Put the conversation in order.',
        content: {
          lines: [
            { id: genId(), speaker: 'patient', text: 'I have a terrible headache.' },
            { id: genId(), speaker: 'pharmacist', text: 'How long have you had it?' },
            { id: genId(), speaker: 'patient', text: 'Since yesterday morning.' },
            { id: genId(), speaker: 'pharmacist', text: 'You should take these painkillers every six hours.' },
            { id: genId(), speaker: 'patient', text: 'Are there any side effects?' },
          ]
        },
        answerKey: 'Patient describes symptoms, pharmacist asks duration, patient answers, pharmacist recommends, patient asks about side effects.'
      },
    ],
    homework: {
      title: 'Health Vocabulary Practice',
      tasks: [
        'Write 5 sentences using should/must about health',
        'Translate 3 pharmacy phrases to English',
        'Practice reading medicine labels in English',
      ]
    },
    roleplay: {
      title: 'At the Pharmacy',
      situation: 'You are at a pharmacy asking for medicine for a cold.',
      studentRole: 'A tourist with a cold',
      teacherRole: 'The pharmacist',
      script: [
        { speaker: 'student', text: 'Hello, I need something for a cold.' },
        { speaker: 'teacher', text: 'Of course. What are your symptoms?' },
        { speaker: 'student', text: 'I have a runny nose and a sore throat.' },
        { speaker: 'teacher', text: 'I recommend these cold tablets. Take one every eight hours.' },
        { speaker: 'student', text: 'Can I take them on an empty stomach?' },
        { speaker: 'teacher', text: 'No, you should take them with food. And drink plenty of water.' },
      ]
    },
    answerKey: 'Should/must exercises and pharmacy dialogue answers as listed.',
    teacherNotes: 'Monitor should vs must usage carefully. Encourage full sentences.'
  },
  {
    id: 'session-18',
    number: 18,
    date: '2026-04-17',
    title: 'Money & Banking Basics',
    goal: 'Handle money situations: exchange currency, use an ATM, and ask about fees.',
    vocab: [
      { id: genId(), word: 'Exchange rate', meaning: 'سعر الصرف', example: 'What is the exchange rate for dollars?', category: 'money' },
      { id: genId(), word: 'ATM', meaning: 'ماكينة صراف آلي', example: 'Is there an ATM near here?', category: 'money' },
      { id: genId(), word: 'Fee', meaning: 'رسوم / عمولة', example: 'There is a small fee for this service.', category: 'money' },
      { id: genId(), word: 'Receipt', meaning: 'إيصال / وصل', example: 'Can I have a receipt, please?', category: 'money' },
      { id: genId(), word: 'Pin code', meaning: 'رمز PIN', example: 'Please enter your pin code.', category: 'money' },
      { id: genId(), word: 'Withdraw', meaning: 'سحب (مال)', example: 'I want to withdraw 200 dollars.', category: 'money' },
    ],
    phrases: [
      { id: genId(), phrase: 'Where can I exchange currency?', translation: 'أين يمكنني صرف العملات؟', situation: 'At bank' },
      { id: genId(), phrase: 'What is the exchange rate for euros?', translation: 'ما سعر صرف اليورو؟', situation: 'Currency exchange' },
      { id: genId(), phrase: 'Is there an ATM nearby?', translation: 'هل يوجد صراف آلي قريب؟', situation: 'Finding ATM' },
      { id: genId(), phrase: 'I\'d like to withdraw some money.', translation: 'أريد سحب بعض المال.', situation: 'At bank' },
      { id: genId(), phrase: 'Are there any fees?', translation: 'هل توجد أي رسوم؟', situation: 'Asking about charges' },
      { id: genId(), phrase: 'Can I pay by card?', translation: 'هل يمكنني الدفع بالبطاقة؟', situation: 'Payment' },
    ],
    grammar: {
      title: 'Would like / Want to for Transactions',
      explanation: '"Would like" is more polite than "want" for making requests in banks and shops.',
      examples: [
        'I would like to exchange some money.',
        'I want to open a bank account.',
        'Would you like a receipt?',
        'She\'d like to withdraw 500 euros.',
      ]
    },
    lessonSteps: [
      { id: genId(), title: 'Warm-up', duration: 5, description: 'Discuss how you handle money while traveling.' },
      { id: genId(), title: 'Vocabulary', duration: 10, description: 'Learn money and banking words.' },
      { id: genId(), title: 'Grammar Focus', duration: 10, description: 'Practice would like vs want to.' },
      { id: genId(), title: 'Phrases', duration: 10, description: 'Practice banking phrases.' },
      { id: genId(), title: 'Exercises', duration: 15, description: 'Complete all exercises.' },
      { id: genId(), title: 'Wrap-up', duration: 5, description: 'Review and homework.' },
    ],
    exercises: [
      {
        id: genId(),
        type: 'multiple-choice',
        title: 'Polite Requests at the Bank',
        instruction: 'Choose the most polite sentence.',
        content: {
          questions: [
            { id: genId(), question: 'Asking to exchange money:', options: ['I want exchange money.', 'I would like to exchange money.', 'Exchange money for me.'], correctIndex: 1 },
            { id: genId(), question: 'Asking about fees:', options: ['Tell me the fees.', 'Could you tell me about any fees?', 'What fees, huh?'], correctIndex: 1 },
            { id: genId(), question: 'At the ATM:', options: ['Give me cash now.', 'I\'d like to withdraw cash, please.', 'Withdraw 200.'], correctIndex: 1 },
          ]
        },
        answerKey: '1.b 2.b 3.b'
      },
      {
        id: genId(),
        type: 'fill-blank',
        title: 'Fill in the Blanks',
        instruction: 'Complete with would like or want.',
        content: {
          sentences: [
            { id: genId(), text: 'I ___ to open a savings account.', answer: 'would like' },
            { id: genId(), text: 'She ___ to check her balance.', answer: 'wants' },
            { id: genId(), text: '___ you like a receipt?', answer: 'Would' },
          ]
        },
        answerKey: '1. would like 2. wants 3. Would'
      },
    ],
    homework: {
      title: 'Money & Banking Practice',
      tasks: [
        'Write 3 polite sentences using "I would like to..."',
        'Translate banking phrases to Arabic and back',
        'Practice reading an ATM screen in English',
      ]
    },
    roleplay: {
      title: 'At the Currency Exchange',
      situation: 'You are exchanging currency at a bank.',
      studentRole: 'A tourist exchanging money',
      teacherRole: 'The bank teller',
      script: [
        { speaker: 'student', text: 'Hello, I would like to exchange some dollars.' },
        { speaker: 'teacher', text: 'Certainly. How much would you like to exchange?' },
        { speaker: 'student', text: 'Two hundred dollars. What is the exchange rate?' },
        { speaker: 'teacher', text: 'Today\'s rate is 1 dollar to 0.92 euros. There is a 2 euro fee.' },
        { speaker: 'student', text: 'That\'s fine. Can I have a receipt, please?' },
        { speaker: 'teacher', text: 'Of course. Here you go. Have a nice day!' },
      ]
    },
    answerKey: 'Would like/want exercises and banking dialogue answers as listed.',
    teacherNotes: 'Emphasize politeness in financial requests. Practice saying numbers clearly.'
  },
  {
    id: 'session-19',
    number: 19,
    date: '2026-04-20',
    title: 'Sightseeing & Museums',
    goal: 'Ask about attractions, buy museum tickets, and describe what you see.',
    vocab: [
      { id: genId(), word: 'Admission', meaning: 'رسوم الدخول', example: 'Admission is free on Sundays.', category: 'sightseeing' },
      { id: genId(), word: 'Exhibit', meaning: 'معرض / قطعة معروضة', example: 'The new exhibit is on the second floor.', category: 'sightseeing' },
      { id: genId(), word: 'Guided tour', meaning: 'جولة مرشدة', example: 'The guided tour starts at 10 AM.', category: 'sightseeing' },
      { id: genId(), word: 'Landmark', meaning: 'معلم بارز', example: 'The Eiffel Tower is a famous landmark.', category: 'sightseeing' },
      { id: genId(), word: 'Audio guide', meaning: 'مرشد صوتي', example: 'You can rent an audio guide at the entrance.', category: 'sightseeing' },
      { id: genId(), word: 'Crowded', meaning: 'مزدحم', example: 'The museum is very crowded today.', category: 'sightseeing' },
    ],
    phrases: [
      { id: genId(), phrase: 'How much is admission?', translation: 'كم رسوم الدخول؟', situation: 'Buying tickets' },
      { id: genId(), phrase: 'Is there a guided tour in English?', translation: 'هل توجد جولة مرشدة بالإنجليزية؟', situation: 'At museum' },
      { id: genId(), phrase: 'What are the must-see attractions here?', translation: 'ما أهم المعالم السياحية هنا؟', situation: 'Asking about sights' },
      { id: genId(), phrase: 'Can I take photos inside?', translation: 'هل يمكنني التصوير بالداخل؟', situation: 'In museum' },
      { id: genId(), phrase: 'How long does the tour take?', translation: 'كم يستغرق وقت الجولة؟', situation: 'Planning visit' },
      { id: genId(), phrase: 'Is this the right way to the museum?', translation: 'هل هذا هو الطريق الصحيح للمتحف؟', situation: 'Getting directions' },
    ],
    grammar: {
      title: 'Comparatives for Comparing Places',
      explanation: 'Use comparatives (adj + er / more + adj) to compare: "This museum is bigger than that one." Add "than" before the second thing.',
      examples: [
        'This cathedral is older than the church.',
        'The park is more beautiful than I expected.',
        'Is the morning tour shorter than the afternoon one?',
        'This museum is less crowded than the other.',
      ]
    },
    lessonSteps: [
      { id: genId(), title: 'Warm-up', duration: 5, description: 'Talk about your favorite places to visit.' },
      { id: genId(), title: 'Vocabulary', duration: 10, description: 'Learn sightseeing and museum words.' },
      { id: genId(), title: 'Grammar Focus', duration: 10, description: 'Practice comparatives for places.' },
      { id: genId(), title: 'Phrases', duration: 10, description: 'Practice museum and sightseeing phrases.' },
      { id: genId(), title: 'Exercises', duration: 15, description: 'Complete all exercises.' },
      { id: genId(), title: 'Wrap-up', duration: 5, description: 'Review and homework.' },
    ],
    exercises: [
      {
        id: genId(),
        type: 'multiple-choice',
        title: 'Choose the Correct Comparative',
        instruction: 'Select the correct form.',
        content: {
          questions: [
            { id: genId(), question: 'This cathedral is ___ than the church.', options: ['more old', 'older', 'oldest'], correctIndex: 1 },
            { id: genId(), question: 'The park is ___ beautiful than I thought.', options: ['more', 'most', 'much'], correctIndex: 0 },
            { id: genId(), question: 'Is this tour ___ than the morning one?', options: ['longer', 'more long', 'longest'], correctIndex: 0 },
          ]
        },
        answerKey: '1.b 2.a 3.a'
      },
      {
        id: genId(),
        type: 'fill-blank',
        title: 'Fill in the Blanks',
        instruction: 'Complete with the correct comparative.',
        content: {
          sentences: [
            { id: genId(), text: 'This museum is ___ (big) than the other.', answer: 'bigger' },
            { id: genId(), text: 'The afternoon is ___ (hot) than the morning.', answer: 'hotter' },
            { id: genId(), text: 'This exhibit is ___ (interesting) than I expected.', answer: 'more interesting' },
          ]
        },
        answerKey: '1. bigger 2. hotter 3. more interesting'
      },
    ],
    homework: {
      title: 'Sightseeing Practice',
      tasks: [
        'Write 4 comparative sentences about places you know',
        'Translate 3 museum phrases to English',
        'Describe a museum you visited using comparatives',
      ]
    },
    roleplay: {
      title: 'Buying Museum Tickets',
      situation: 'You are buying tickets at a museum entrance.',
      studentRole: 'A tourist at a museum',
      teacherRole: 'The ticket seller',
      script: [
        { speaker: 'student', text: 'Hello, how much is admission?' },
        { speaker: 'teacher', text: 'It\'s 15 euros for adults. Would you like a guided tour as well?' },
        { speaker: 'student', text: 'Yes, please. Is there one in English?' },
        { speaker: 'teacher', text: 'Yes, the English tour starts at 11. It takes about 90 minutes.' },
        { speaker: 'student', text: 'Perfect. Can I take photos inside?' },
        { speaker: 'teacher', text: 'Yes, but no flash photography in the special exhibit.' },
      ]
    },
    answerKey: 'Comparatives exercises and museum dialogue answers as listed.',
    teacherNotes: 'Focus on correct comparative forms. Extra practice with irregular comparatives.'
  },
  {
    id: 'session-20',
    number: 20,
    date: '2026-04-21',
    title: 'Comparing & Choosing Options',
    goal: 'Compare things, express preferences, and make decisions while shopping or traveling.',
    vocab: [
      { id: genId(), word: 'Prefer', meaning: 'يفضل', example: 'I prefer the blue one.', category: 'comparison' },
      { id: genId(), word: 'Option', meaning: 'خيار', example: 'What are my options?', category: 'comparison' },
      { id: genId(), word: 'Difference', meaning: 'فرق / اختلاف', example: 'What is the difference between these two?', category: 'comparison' },
      { id: genId(), word: 'Affordable', meaning: 'بسعر معقول', example: 'This hotel is more affordable.', category: 'comparison' },
      { id: genId(), word: 'Recommend', meaning: 'يوصي / ينصح', example: 'Which one do you recommend?', category: 'comparison' },
      { id: genId(), word: 'Convenient', meaning: 'مريح / مناسب', example: 'The morning flight is more convenient.', category: 'comparison' },
    ],
    phrases: [
      { id: genId(), phrase: 'Which one do you recommend?', translation: 'أي واحد توصي به؟', situation: 'Choosing' },
      { id: genId(), phrase: 'I prefer the smaller one.', translation: 'أفضل الصغير.', situation: 'Expressing preference' },
      { id: genId(), phrase: 'What is the difference between these two?', translation: 'ما الفرق بين هذين الاثنين؟', situation: 'Comparing' },
      { id: genId(), phrase: 'Is there a cheaper option?', translation: 'هل يوجد خيار أرخص؟', situation: 'Budget comparison' },
      { id: genId(), phrase: 'This one looks better than that one.', translation: 'هذا يبدو أفضل من ذاك.', situation: 'Visual comparison' },
      { id: genId(), phrase: 'I\'ll go with the first option.', translation: 'سأختار الخيار الأول.', situation: 'Making a choice' },
    ],
    grammar: {
      title: 'Comparatives vs Superlatives',
      explanation: 'Use comparatives to compare two things (cheaper, more convenient). Use superlatives for three or more (the cheapest, the most convenient).',
      examples: [
        'This hotel is cheaper than that one.',
        'The morning flight is the most convenient.',
        'Which is better, the bus or the train?',
        'This is the best restaurant in town.',
      ]
    },
    lessonSteps: [
      { id: genId(), title: 'Warm-up', duration: 5, description: 'Compare two restaurants you know.' },
      { id: genId(), title: 'Vocabulary', duration: 10, description: 'Learn comparison and preference words.' },
      { id: genId(), title: 'Grammar Focus', duration: 10, description: 'Practice comparatives and superlatives.' },
      { id: genId(), title: 'Phrases', duration: 10, description: 'Practice choosing and comparing phrases.' },
      { id: genId(), title: 'Exercises', duration: 15, description: 'Complete all exercises.' },
      { id: genId(), title: 'Wrap-up', duration: 5, description: 'Review and homework.' },
    ],
    exercises: [
      {
        id: genId(),
        type: 'multiple-choice',
        title: 'Comparative or Superlative?',
        instruction: 'Choose the correct form.',
        content: {
          questions: [
            { id: genId(), question: 'This hotel is ___ than the other.', options: ['the cheapest', 'cheaper', 'more cheap'], correctIndex: 1 },
            { id: genId(), question: 'This is ___ restaurant in the city.', options: ['the best', 'better', 'good'], correctIndex: 0 },
            { id: genId(), question: 'The bus is ___ than the train.', options: ['the slowest', 'more slower', 'slower'], correctIndex: 2 },
          ]
        },
        answerKey: '1.b 2.a 3.c'
      },
      {
        id: genId(),
        type: 'matching',
        title: 'Match the Comparison',
        instruction: 'Match each adjective to its comparative form.',
        content: {
          pairs: [
            { id: genId(), left: 'cheap', right: 'cheaper' },
            { id: genId(), left: 'convenient', right: 'more convenient' },
            { id: genId(), left: 'good', right: 'better' },
            { id: genId(), left: 'far', right: 'farther' },
          ]
        },
        answerKey: 'cheap-cheaper, convenient-more convenient, good-better, far-farther'
      },
    ],
    homework: {
      title: 'Comparing & Choosing Practice',
      tasks: [
        'Write 5 comparative sentences about hotels or restaurants',
        'Write 3 superlative sentences about your city',
        'Practice "I prefer..." sentences for travel choices',
      ]
    },
    roleplay: {
      title: 'Choosing a Hotel',
      situation: 'You are at a travel agency choosing between two hotels.',
      studentRole: 'A traveler comparing options',
      teacherRole: 'The travel agent',
      script: [
        { speaker: 'student', text: 'Can you help me choose a hotel?' },
        { speaker: 'teacher', text: 'Of course! We have the Grand Hotel and the City Inn.' },
        { speaker: 'student', text: 'What is the difference between them?' },
        { speaker: 'teacher', text: 'The Grand Hotel is more expensive but closer to the beach. The City Inn is cheaper.' },
        { speaker: 'student', text: 'I prefer something convenient. I will go with the Grand Hotel.' },
        { speaker: 'teacher', text: 'Great choice. It is the best hotel in the area!' },
      ]
    },
    answerKey: 'Comparatives/superlatives exercises and hotel dialogue answers as listed.',
    teacherNotes: 'Focus on irregular forms (good-better-best, far-farther-farthest). Practice speaking full comparative sentences.'
  },
  {
    id: 'session-21',
    number: 21,
    date: '2026-04-23',
    title: 'Future Plans: Will vs Going to',
    goal: 'Talk about future travel plans and make predictions using will and going to.',
    vocab: [
      { id: genId(), word: 'Plan', meaning: 'خطة', example: 'I have a plan for my trip.', category: 'future' },
      { id: genId(), word: 'Reservation', meaning: 'حجز', example: 'I made a reservation for two nights.', category: 'future' },
      { id: genId(), word: 'Forecast', meaning: 'توقعات (طقس)', example: 'The weather forecast says it will rain.', category: 'future' },
      { id: genId(), word: 'Departure', meaning: 'مغادرة', example: 'The departure time is 8 AM.', category: 'future' },
      { id: genId(), word: 'Arrival', meaning: 'وصول', example: 'Our arrival is scheduled for noon.', category: 'future' },
      { id: genId(), word: 'Itinerary', meaning: 'جدول الرحلة', example: 'Here is my travel itinerary.', category: 'future' },
    ],
    phrases: [
      { id: genId(), phrase: 'I am going to visit Paris next month.', translation: 'سأزور باريس الشهر القادم.', situation: 'Future plan' },
      { id: genId(), phrase: 'The train will arrive at 3 PM.', translation: 'سيصل القطار الساعة 3 مساءً.', situation: 'Prediction' },
      { id: genId(), phrase: 'We are going to stay at a hotel near the beach.', translation: 'سنقيم في فندق قريب من الشاطئ.', situation: 'Travel plan' },
      { id: genId(), phrase: 'I think it will be sunny tomorrow.', translation: 'أعتقد أن الطقس سيكون مشمساً غداً.', situation: 'Weather prediction' },
      { id: genId(), phrase: 'When are you going to leave?', translation: 'متى ستغادر؟', situation: 'Asking about plans' },
      { id: genId(), phrase: 'I will send you the details later.', translation: 'سأرسل لك التفاصيل لاحقاً.', situation: 'Promise' },
    ],
    grammar: {
      title: 'Will vs Going to',
      explanation: 'Use "going to" for plans you already decided. Use "will" for quick decisions, promises, and predictions.',
      examples: [
        'I am going to travel to London. (already decided)',
        'I will help you with your bags. (quick decision)',
        'It will rain tomorrow. (prediction)',
        'She is going to study English next year. (plan)',
      ]
    },
    lessonSteps: [
      { id: genId(), title: 'Warm-up', duration: 5, description: 'Talk about your next travel plans.' },
      { id: genId(), title: 'Vocabulary', duration: 10, description: 'Learn future plan and travel words.' },
      { id: genId(), title: 'Grammar Focus', duration: 15, description: 'Practice will vs going to.' },
      { id: genId(), title: 'Phrases', duration: 10, description: 'Practice future travel phrases.' },
      { id: genId(), title: 'Exercises', duration: 10, description: 'Complete all exercises.' },
      { id: genId(), title: 'Wrap-up', duration: 5, description: 'Review and homework.' },
    ],
    exercises: [
      {
        id: genId(),
        type: 'multiple-choice',
        title: 'Will or Going to?',
        instruction: 'Choose the correct future form.',
        content: {
          questions: [
            { id: genId(), question: 'You already decided to travel:', options: ['I will travel.', 'I am going to travel.', 'I travel.'], correctIndex: 1 },
            { id: genId(), question: 'You make a quick offer:', options: ['I am going to help you.', 'I will help you.', 'I help you.'], correctIndex: 1 },
            { id: genId(), question: 'A weather prediction:', options: ['It is going to rain.', 'It will rain.', 'Both are acceptable.'], correctIndex: 2 },
          ]
        },
        answerKey: '1.b 2.b 3.c'
      },
      {
        id: genId(),
        type: 'fill-blank',
        title: 'Fill in the Blanks',
        instruction: 'Complete with will or going to.',
        content: {
          sentences: [
            { id: genId(), text: 'I ___ visit my friend next week. (plan)', answer: 'am going to' },
            { id: genId(), text: 'Wait, I ___ carry that for you. (quick offer)', answer: 'will' },
            { id: genId(), text: 'The flight ___ depart at 6 PM. (schedule)', answer: 'is going to' },
          ]
        },
        answerKey: '1. am going to 2. will 3. is going to'
      },
    ],
    homework: {
      title: 'Future Plans Practice',
      tasks: [
        'Write 3 sentences with "going to" about your travel plans',
        'Write 3 sentences with "will" for predictions or offers',
        'Describe your dream trip using both future forms',
      ]
    },
    roleplay: {
      title: 'Planning a Weekend Trip',
      situation: 'You are planning a weekend trip with a friend.',
      studentRole: 'A traveler making plans',
      teacherRole: 'Your travel partner',
      script: [
        { speaker: 'student', text: 'I am going to plan a weekend trip. Where should we go?' },
        { speaker: 'teacher', text: 'How about the coast? It will be sunny this weekend.' },
        { speaker: 'student', text: 'Great! I will book the hotel tonight.' },
        { speaker: 'teacher', text: 'And I am going to check the train schedule.' },
        { speaker: 'student', text: 'We are going to have so much fun!' },
        { speaker: 'teacher', text: 'I am sure we will! Let us meet tomorrow to finalize.' },
      ]
    },
    answerKey: 'Will/going to exercises and trip planning dialogue answers as listed.',
    teacherNotes: 'This is a key grammar point. Spend extra time on the distinction. Use real travel scenarios.'
  },
  {
    id: 'session-22',
    number: 22,
    date: '2026-04-24',
    title: 'Formal vs Casual English',
    goal: 'Know when to use formal vs casual language in hotels, restaurants, and meetings.',
    vocab: [
      { id: genId(), word: 'Formal', meaning: 'رسمي', example: 'Use formal language in business meetings.', category: 'register' },
      { id: genId(), word: 'Casual', meaning: 'عفوي / غير رسمي', example: 'Casual language is fine with friends.', category: 'register' },
      { id: genId(), word: 'Respectfully', meaning: 'باحترام', example: 'Please accept my apologies respectfully.', category: 'register' },
      { id: genId(), word: 'Greeting', meaning: 'تحية / سلام', example: 'A formal greeting is "Good evening."', category: 'register' },
      { id: genId(), word: 'Apologize', meaning: 'يعتذر', example: 'I apologize for the inconvenience.', category: 'register' },
      { id: genId(), word: 'Appropriate', meaning: 'مناسب / ملائم', example: 'Is this outfit appropriate for dinner?', category: 'register' },
    ],
    phrases: [
      { id: genId(), phrase: 'Good evening. I have a reservation.', translation: 'مساء الخير. عندي حجز.', situation: 'Formal hotel' },
      { id: genId(), phrase: 'Hey! I am here to check in.', translation: 'مرحبا! أنا هنا للتسجيل.', situation: 'Casual hotel' },
      { id: genId(), phrase: 'I would appreciate your help.', translation: 'أقدر مساعدتك.', situation: 'Formal request' },
      { id: genId(), phrase: 'Can you give me a hand?', translation: 'هل يمكنك مساعدتي؟', situation: 'Casual request' },
      { id: genId(), phrase: 'I apologize for any inconvenience.', translation: 'أعتذر عن أي إزعاج.', situation: 'Formal apology' },
      { id: genId(), phrase: 'Sorry about that!', translation: 'آسف على ذلك!', situation: 'Casual apology' },
    ],
    grammar: {
      title: 'Formal vs Casual Structures',
      explanation: 'Formal: "I would like..." "Could you..." "May I..." Casual: "I want..." "Can you..." "Is it OK if..."',
      examples: [
        'Formal: I would like to check in, please.',
        'Casual: I want to check in.',
        'Formal: Could you please assist me?',
        'Casual: Can you help me?',
      ]
    },
    lessonSteps: [
      { id: genId(), title: 'Warm-up', duration: 5, description: 'Discuss when to use formal vs casual English.' },
      { id: genId(), title: 'Vocabulary', duration: 10, description: 'Learn formal and casual word pairs.' },
      { id: genId(), title: 'Grammar Focus', duration: 10, description: 'Practice formal vs casual sentence structures.' },
      { id: genId(), title: 'Phrases', duration: 10, description: 'Compare formal and casual phrases side by side.' },
      { id: genId(), title: 'Exercises', duration: 15, description: 'Complete all exercises.' },
      { id: genId(), title: 'Wrap-up', duration: 5, description: 'Review and homework.' },
    ],
    exercises: [
      {
        id: genId(),
        type: 'multiple-choice',
        title: 'Formal or Casual?',
        instruction: 'Choose the appropriate register for each situation.',
        content: {
          questions: [
            { id: genId(), question: 'Talking to a hotel receptionist:', options: ['Hey, I need a room.', 'Good evening. I would like to check in, please.', 'Gimme a room.'], correctIndex: 1 },
            { id: genId(), question: 'Chatting with a travel friend:', options: ['I would appreciate your assistance.', 'May I request your help?', 'Can you give me a hand?'], correctIndex: 2 },
            { id: genId(), question: 'Writing to hotel management:', options: ['Dear Sir, I would like to report...', 'Hey, something is wrong...', 'Yo, fix this.'], correctIndex: 0 },
          ]
        },
        answerKey: '1.b 2.c 3.a'
      },
      {
        id: genId(),
        type: 'matching',
        title: 'Match Formal to Casual',
        instruction: 'Match each formal phrase to its casual equivalent.',
        content: {
          pairs: [
            { id: genId(), left: 'I would like to...', right: 'I want to...' },
            { id: genId(), left: 'Could you please...', right: 'Can you...' },
            { id: genId(), left: 'I apologize for...', right: 'Sorry about...' },
            { id: genId(), left: 'May I ask...', right: 'Can I ask...' },
          ]
        },
        answerKey: 'would like-want, could you-can you, apologize-sorry, may I-can I'
      },
    ],
    homework: {
      title: 'Formal vs Casual Practice',
      tasks: [
        'Rewrite 3 casual sentences as formal',
        'Rewrite 3 formal sentences as casual',
        'Write a formal email requesting a hotel room',
      ]
    },
    roleplay: {
      title: 'Hotel Check-in: Two Versions',
      situation: 'Check into a hotel — first casually, then formally.',
      studentRole: 'A hotel guest',
      teacherRole: 'The receptionist',
      script: [
        { speaker: 'student', text: 'Good evening. I have a reservation under Al-Rashid.' },
        { speaker: 'teacher', text: 'Welcome, Mr. Al-Rashid. I have your reservation right here.' },
        { speaker: 'student', text: 'Would it be possible to have a room on a higher floor?' },
        { speaker: 'teacher', text: 'Certainly. I will arrange that for you. Could you please sign here?' },
        { speaker: 'student', text: 'Of course. I would also appreciate a wake-up call at 7 AM.' },
        { speaker: 'teacher', text: 'Absolutely. Enjoy your stay!' },
      ]
    },
    answerKey: 'Formal/casual exercises and hotel dialogue answers as listed.',
    teacherNotes: 'This lesson is essential for real-world English. Encourage students to notice register in real situations.'
  },
  {
    id: 'session-23',
    number: 23,
    date: '2026-04-27',
    title: 'Making Complaints Politely',
    goal: 'Express dissatisfaction about services, rooms, or food without being rude.',
    vocab: [
      { id: genId(), word: 'Complaint', meaning: 'شكوى', example: 'I would like to make a complaint.', category: 'complaints' },
      { id: genId(), word: 'Inconvenience', meaning: 'إزعاج / إ trìe', example: 'Sorry for the inconvenience.', category: 'complaints' },
      { id: genId(), word: 'Unacceptable', meaning: 'غير مقبول', example: 'The room condition is unacceptable.', category: 'complaints' },
      { id: genId(), word: 'Resolve', meaning: 'يحل / ينتهي', example: 'We will resolve this issue quickly.', category: 'complaints' },
      { id: genId(), word: 'Refund', meaning: 'استرداد المال', example: 'I would like a refund.', category: 'complaints' },
      { id: genId(), word: 'Disappointed', meaning: 'محبط / مخيب', example: 'I am disappointed with the service.', category: 'complaints' },
    ],
    phrases: [
      { id: genId(), phrase: 'I am afraid there is a problem with my room.', translation: 'أخشى أن هناك مشكلة في غرفتي.', situation: 'Complaint at hotel' },
      { id: genId(), phrase: 'Could you please look into this?', translation: 'هل يمكنك النظر في هذا الأمر؟', situation: 'Polite request' },
      { id: genId(), phrase: 'I would appreciate it if you could fix this.', translation: 'أقدر لك لو أصلحت هذا.', situation: 'Asking for resolution' },
      { id: genId(), phrase: 'This is not what I expected.', translation: 'هذا ليس ما توقعته.', situation: 'Expressing disappointment' },
      { id: genId(), phrase: 'I would like to speak to the manager, please.', translation: 'أريد التحدث مع المدير من فضلك.', situation: 'Escalating' },
      { id: genId(), phrase: 'Is it possible to get a refund?', translation: 'هل من الممكن استرداد المال؟', situation: 'Requesting refund' },
    ],
    grammar: {
      title: 'Polite Complaint Structures',
      explanation: 'Use "I am afraid..." "Unfortunately..." "I would appreciate if..." to soften complaints. Avoid direct criticism.',
      examples: [
        'I am afraid the air conditioning is not working.',
        'Unfortunately, the food was cold when it arrived.',
        'I would appreciate it if you could change my room.',
        'I am sorry, but this is not what I ordered.',
      ]
    },
    lessonSteps: [
      { id: genId(), title: 'Warm-up', duration: 5, description: 'Talk about a time something went wrong at a hotel or restaurant.' },
      { id: genId(), title: 'Vocabulary', duration: 10, description: 'Learn complaint and resolution words.' },
      { id: genId(), title: 'Grammar Focus', duration: 10, description: 'Practice softening complaints politely.' },
      { id: genId(), title: 'Phrases', duration: 10, description: 'Practice polite complaint phrases.' },
      { id: genId(), title: 'Exercises', duration: 15, description: 'Complete all exercises.' },
      { id: genId(), title: 'Wrap-up', duration: 5, description: 'Review and homework.' },
    ],
    exercises: [
      {
        id: genId(),
        type: 'multiple-choice',
        title: 'The Most Polite Complaint',
        instruction: 'Choose the most polite way to complain.',
        content: {
          questions: [
            { id: genId(), question: 'The room is too noisy:', options: ['This room is terrible!', 'I am afraid the room is quite noisy.', 'Fix this now!'], correctIndex: 1 },
            { id: genId(), question: 'The food is cold:', options: ['I would appreciate it if you could heat this.', 'This food is awful!', 'Give me hot food.'], correctIndex: 0 },
            { id: genId(), question: 'Wrong order:', options: ['You got my order wrong!', 'I am sorry, but this is not what I ordered.', 'This is wrong!'], correctIndex: 1 },
          ]
        },
        answerKey: '1.b 2.a 3.b'
      },
      {
        id: genId(),
        type: 'fill-blank',
        title: 'Make It Polite',
        instruction: 'Rewrite the rude complaint as a polite one.',
        content: {
          sentences: [
            { id: genId(), text: 'This room is dirty! → I am ___ there is a problem with the cleanliness.', answer: 'afraid' },
            { id: genId(), text: 'Fix the AC! → I would ___ it if you could fix the air conditioning.', answer: 'appreciate' },
            { id: genId(), text: 'Give me my money back! → Is it possible to get a ___?', answer: 'refund' },
          ]
        },
        answerKey: '1. afraid 2. appreciate 3. refund'
      },
    ],
    homework: {
      title: 'Polite Complaints Practice',
      tasks: [
        'Write 3 polite complaints about hotel problems',
        'Write 3 polite complaints about restaurant problems',
        'Practice saying "I am afraid..." and "I would appreciate..."',
      ]
    },
    roleplay: {
      title: 'Complaining at a Hotel',
      situation: 'You have several issues with your hotel room and need to complain politely.',
      studentRole: 'An unhappy hotel guest',
      teacherRole: 'The hotel receptionist',
      script: [
        { speaker: 'student', text: 'Excuse me, I am afraid there is a problem with my room.' },
        { speaker: 'teacher', text: 'I am sorry to hear that. What seems to be the issue?' },
        { speaker: 'student', text: 'The air conditioning is not working, and the bathroom has not been cleaned.' },
        { speaker: 'teacher', text: 'I apologize for the inconvenience. I will send someone right away.' },
        { speaker: 'student', text: 'I would appreciate it if this could be resolved quickly.' },
        { speaker: 'teacher', text: 'Of course. We will also offer you a complimentary breakfast as an apology.' },
      ]
    },
    answerKey: 'Polite complaint exercises and hotel dialogue answers as listed.',
    teacherNotes: 'Role of politeness in English-speaking cultures is crucial. Emphasize tone and word choice.'
  },
  {
    id: 'session-24',
    number: 24,
    date: '2026-04-28',
    title: 'Month 2 Review & Simulation',
    goal: 'Review all Month 2 content through a comprehensive simulation.',
    vocab: [
      { id: genId(), word: 'Review', meaning: 'مراجعة', example: 'Let us review what we learned.', category: 'review' },
      { id: genId(), word: 'Confidence', meaning: 'ثقة', example: 'I feel more confidence now.', category: 'review' },
      { id: genId(), word: 'Progress', meaning: 'تقدم', example: 'You have made great progress.', category: 'review' },
      { id: genId(), word: 'Prepare', meaning: 'يحضر / يستعد', example: 'Let us prepare for the next month.', category: 'review' },
      { id: genId(), word: 'Achieve', meaning: 'يحقق', example: 'You achieved all your goals.', category: 'review' },
      { id: genId(), word: 'Improve', meaning: 'يحسّن', example: 'Your English has improved a lot.', category: 'review' },
    ],
    phrases: [
      { id: genId(), phrase: 'I would like to check in, please.', translation: 'أود تسجيل الدخول من فضلك.', situation: 'Hotel' },
      { id: genId(), phrase: 'I am afraid there is a problem.', translation: 'أخشى أن هناك مشكلة.', situation: 'Complaint' },
      { id: genId(), phrase: 'Could you recommend a good restaurant?', translation: 'هل يمكنك أن توصي بمطعم جيد؟', situation: 'Asking for advice' },
      { id: genId(), phrase: 'I prefer the earlier flight.', translation: 'أفضل الرحلة الأقدم.', situation: 'Choosing' },
      { id: genId(), phrase: 'I am going to visit the museum tomorrow.', translation: 'سأزور المتحف غداً.', situation: 'Future plan' },
      { id: genId(), phrase: 'I would appreciate your help.', translation: 'أقدر مساعدتك.', situation: 'Formal request' },
    ],
    grammar: {
      title: 'Month 2 Grammar Review',
      explanation: 'Review: Wh- questions, should/must, would like, comparatives/superlatives, will/going to, formal vs casual register.',
      examples: [
        'Where is the ticket machine? (Wh- question)',
        'You should take this medicine. (Advice)',
        'I would like to exchange money. (Polite request)',
        'This hotel is cheaper than that one. (Comparative)',
      ]
    },
    lessonSteps: [
      { id: genId(), title: 'Warm-up', duration: 5, description: 'Share your favorite lesson from Month 2.' },
      { id: genId(), title: 'Grammar Review', duration: 15, description: 'Quick review of all Month 2 grammar points.' },
      { id: genId(), title: 'Vocabulary Review', duration: 10, description: 'Review key words from each week.' },
      { id: genId(), title: 'Simulation', duration: 20, description: 'Full travel scenario from arrival to departure.' },
      { id: genId(), title: 'Wrap-up', duration: 5, description: 'Celebrate progress and preview Month 3.' },
    ],
    exercises: [
      {
        id: genId(),
        type: 'multiple-choice',
        title: 'Month 2 Grammar Review',
        instruction: 'Choose the correct answer.',
        content: {
          questions: [
            { id: genId(), question: 'Polite request at a bank:', options: ['I want exchange money.', 'I would like to exchange money.', 'Exchange money now.'], correctIndex: 1 },
            { id: genId(), question: 'Complaint at hotel:', options: ['This room is bad!', 'I am afraid there is a problem.', 'Fix my room!'], correctIndex: 1 },
            { id: genId(), question: 'Future plan:', options: ['I will visit Paris. (already decided)', 'I am going to visit Paris. (already decided)', 'I visit Paris.'], correctIndex: 1 },
          ]
        },
        answerKey: '1.b 2.b 3.b'
      },
      {
        id: genId(),
        type: 'fill-blank',
        title: 'Fill in the Blanks',
        instruction: 'Complete with the correct grammar form.',
        content: {
          sentences: [
            { id: genId(), text: 'This museum is ___ (big) than the other.', answer: 'bigger' },
            { id: genId(), text: 'You ___ (should/must) take medicine with food. (strong obligation)', answer: 'must' },
            { id: genId(), text: 'I ___ (would like/want) to check in, please. (polite)', answer: 'would like' },
          ]
        },
        answerKey: '1. bigger 2. must 3. would like'
      },
      {
        id: genId(),
        type: 'roleplay-card',
        title: 'Full Travel Simulation',
        instruction: 'You arrive in a new city. Check in at the hotel, ask for directions, order food, and make a polite complaint.',
        content: {
          scenario: 'Full day simulation',
          tasks: ['Check in at hotel using formal English', 'Ask about local attractions using comparatives', 'Order food at a restaurant', 'Make a polite complaint about your room'],
          roles: ['Traveler', 'Hotel staff / Waiter / Local'],
        },
        answerKey: 'Students should use appropriate register for each situation.'
      },
    ],
    homework: {
      title: 'Month 2 Final Review',
      tasks: [
        'Write a 10-sentence summary of what you learned in Month 2',
        'Record yourself doing the full travel simulation',
        'List 3 areas you want to improve in Month 3',
      ]
    },
    roleplay: {
      title: 'Full Travel Day Simulation',
      situation: 'A complete day traveling: hotel check-in, sightseeing, dining, and handling a problem.',
      studentRole: 'A traveler on a full day out',
      teacherRole: 'Hotel clerk / waiter / local guide',
      script: [
        { speaker: 'student', text: 'Good evening. I would like to check in, please.' },
        { speaker: 'teacher', text: 'Welcome! I have your reservation right here.' },
        { speaker: 'student', text: 'I am afraid there is a problem with the air conditioning in my room.' },
        { speaker: 'teacher', text: 'I apologize. I will send someone immediately.' },
        { speaker: 'student', text: 'Thank you. Could you also recommend a good restaurant nearby?' },
        { speaker: 'teacher', text: 'The Olive Garden is the best restaurant in the area. It is also the most affordable.' },
      ]
    },
    answerKey: 'Review exercises and simulation answers as listed.',
    teacherNotes: 'End of Month 2. Celebrate progress, identify areas for improvement, and prepare Month 3.'
  },
  // ============ MONTH 3: MAY 2026 ============
  {
    id: 'session-25',
    number: 25,
    date: '2026-05-04',
    title: 'Weather & Seasons',
    goal: 'Describe weather conditions and seasonal activities. Use "It is..." and "There is..." naturally.',
    vocab: [
      { id: genId(), word: 'Sunny', meaning: 'مشمس', example: 'It is sunny today.', category: 'weather' },
      { id: genId(), word: 'Cloudy', meaning: 'غائم', example: 'It is cloudy this morning.', category: 'weather' },
      { id: genId(), word: 'Rainy', meaning: 'ماطر', example: 'It is rainy outside.', category: 'weather' },
      { id: genId(), word: 'Temperature', meaning: 'درجة الحرارة', example: 'The temperature is 25 degrees.', category: 'weather' },
      { id: genId(), word: 'Forecast', meaning: 'توقعات الطقس', example: 'The forecast says it will rain.', category: 'weather' },
      { id: genId(), word: 'Season', meaning: 'فصل', example: 'Summer is my favorite season.', category: 'time' },
      { id: genId(), word: 'Degree', meaning: 'درجة (حرارة)', example: 'It is thirty degrees today.', category: 'weather' },
      { id: genId(), word: 'Breeze', meaning: 'نسيم خفيف', example: 'There is a nice breeze.', category: 'weather' },
    ],
    phrases: [
      { id: genId(), phrase: 'What\'s the weather like today?', translation: 'كيف الطقس اليوم؟', situation: 'Asking about weather' },
      { id: genId(), phrase: 'It is sunny and warm outside.', translation: 'الخارج مشمس ودافئ.', situation: 'Describing weather' },
      { id: genId(), phrase: 'Is it going to rain tomorrow?', translation: 'هل ستمطر غداً؟', situation: 'Forecast' },
      { id: genId(), phrase: 'There is a strong wind today.', translation: 'هناك رياح قوية اليوم.', situation: 'Describing weather' },
      { id: genId(), phrase: 'The temperature is about 25 degrees.', translation: 'درجة الحرارة حوالي 25 درجة.', situation: 'Temperature' },
      { id: genId(), phrase: 'You should bring an umbrella.', translation: 'يجب أن تحضر مظلة.', situation: 'Advice' },
      { id: genId(), phrase: 'It was cold yesterday, but today is warm.', translation: 'كان الجو بارداً أمس، لكن اليوم دافئ.', situation: 'Contrasting' },
      { id: genId(), phrase: 'I prefer warm weather for traveling.', translation: 'أفضل الطقس الدافئ للسفر.', situation: 'Preference' },
    ],
    grammar: {
      title: 'It is / There is + Weather',
      explanation: 'Use "It is" for conditions (hot, cold, sunny) and "There is" for things that exist (a storm, wind, rain).',
      examples: [
        'It is raining outside.',
        'There is a storm coming.',
        'It is cold today.',
        'There is fog on the road.',
      ]
    },
    lessonSteps: [
      { id: genId(), title: 'Warm-up', duration: 5, description: 'Talk about today\'s weather.' },
      { id: genId(), title: 'Vocabulary', duration: 10, description: 'Weather words and seasonal terms.' },
      { id: genId(), title: 'Grammar Focus', duration: 10, description: 'It is / There is for weather.' },
      { id: genId(), title: 'Exercises', duration: 15, description: 'Complete all exercises together.' },
      { id: genId(), title: 'Roleplay', duration: 15, description: 'Weather small talk scenario.' },
      { id: genId(), title: 'Wrap-up & Homework', duration: 5, description: 'Review and assign homework.' },
    ],
    exercises: [
      {
        id: genId(),
        type: 'fill-blank',
        title: 'Weather Sentences',
        instruction: 'Complete with: sunny, temperature, forecast, rainy, degrees',
        content: {
          sentences: [
            { id: genId(), text: 'It is ___ today. Let\'s go to the park.', answer: 'sunny' },
            { id: genId(), text: 'The ___ says it will rain tomorrow.', answer: 'forecast' },
            { id: genId(), text: 'It is ___ outside. Take an umbrella.', answer: 'rainy' },
            { id: genId(), text: 'The ___ is 30 degrees.', answer: 'temperature' },
            { id: genId(), text: 'It is about 25 ___ today.', answer: 'degrees' },
          ]
        },
        answerKey: '1.sunny 2.forecast 3.rainy 4.temperature 5.degrees'
      },
      {
        id: genId(),
        type: 'multiple-choice',
        title: 'It is or There is',
        instruction: 'Choose the correct form.',
        content: {
          questions: [
            { id: genId(), question: '___ a storm outside right now.', options: ['It is', 'There is'], correctIndex: 1 },
            { id: genId(), question: '___ very hot in summer here.', options: ['It is', 'There is'], correctIndex: 0 },
            { id: genId(), question: '___ fog on the road this morning.', options: ['It is', 'There is'], correctIndex: 1 },
            { id: genId(), question: '___ cold and windy today.', options: ['It is', 'There is'], correctIndex: 0 },
          ]
        },
        answerKey: '1. There is 2. It is 3. There is 4. It is'
      },
      {
        id: genId(),
        type: 'speaking-prompt',
        title: 'Weather Report',
        instruction: 'Describe the weather in your city today and what you would recommend wearing.',
        content: {
          prompt: 'Look outside (or imagine) and describe the weather. Then say what a tourist should wear and bring.',
          duration: 120,
          suggestedPoints: ['Temperature', 'Conditions (sunny/rainy/cloudy)', 'What to wear', 'What to bring (umbrella/sunglasses)']
        },
        answerKey: 'Student describes weather using It is / There is and gives practical clothing advice.'
      }
    ],
    homework: [
      { id: genId(), task: 'Write 8 weather sentences using "It is" and "There is".', type: 'writing', details: 'Use at least 4 different weather words.' },
      { id: genId(), task: 'Record a 1-minute weather forecast for your city.', type: 'recording', details: 'Include temperature, conditions, and advice.' },
    ],
    roleplay: {
      title: 'Weather Small Talk',
      situation: 'You are at a cafe and start a conversation about the weather with another traveler.',
      studentRole: 'Traveler',
      teacherRole: 'Another traveler',
      script: [
        { speaker: 'student', line: 'Beautiful day, isn\'t it?', cue: 'Open with weather' },
        { speaker: 'teacher', line: 'Yes! It\'s much warmer than yesterday. What\'s the weather like in your country?' },
        { speaker: 'student', line: 'In my country, it is usually hot and sunny at this time of year.', cue: 'Describe your weather' },
        { speaker: 'teacher', line: 'That sounds nice! The forecast says rain tomorrow.' },
        { speaker: 'student', line: 'Oh really? I should bring an umbrella then.', cue: 'React to forecast' },
        { speaker: 'teacher', line: 'Yes, definitely. Do you prefer warm or cool weather?' },
        { speaker: 'student', line: 'I prefer warm weather for traveling. It is more comfortable.', cue: 'Express preference' },
      ]
    },
    answerKey: 'Exercise 1: sunny, forecast, rainy, temperature, degrees\nExercise 2: There is, It is, There is, It is\nExercise 3: Speaking practice',
    teacherNotes: 'Connect weather to real travel situations. Ask students about weather in their home countries.'
  },
  {
    id: 'session-26',
    number: 26,
    date: '2026-05-05',
    title: 'Doctor Visit & Health',
    goal: 'Describe symptoms clearly at a doctor\'s office and understand basic medical instructions.',
    vocab: [
      { id: genId(), word: 'Symptom', meaning: 'عرض مرضي', example: 'What are your symptoms?', category: 'medical' },
      { id: genId(), word: 'Prescription', meaning: 'وصفة طبية', example: 'Here is your prescription.', category: 'medical' },
      { id: genId(), word: 'Appointment', meaning: 'موعد', example: 'I have a doctor\'s appointment.', category: 'medical' },
      { id: genId(), word: 'Dose', meaning: 'جرعة', example: 'Take one dose in the morning.', category: 'medical' },
      { id: genId(), word: 'Swollen', meaning: 'متورم', example: 'My ankle is swollen.', category: 'symptoms' },
      { id: genId(), word: 'Dizzy', meaning: 'دوخة', example: 'I feel dizzy.', category: 'symptoms' },
      { id: genId(), word: 'Insurance card', meaning: 'بطاقة التأمين الصحي', example: 'Do you have insurance?', category: 'medical' },
      { id: genId(), word: 'Side effect', meaning: 'عرض جانبي', example: 'Are there any side effects?', category: 'medical' },
    ],
    phrases: [
      { id: genId(), phrase: 'I have been feeling unwell for two days.', translation: 'أشعر بالتوعك منذ يومين.', situation: 'Describing symptoms' },
      { id: genId(), phrase: 'I have a headache and a sore throat.', translation: 'لدي صداع والتهاب في الحلق.', situation: 'Describing symptoms' },
      { id: genId(), phrase: 'I would like to make an appointment, please.', translation: 'أود حجز موعد من فضلك.', situation: 'Making appointment' },
      { id: genId(), phrase: 'How often should I take this medicine?', translation: 'كم مرة يجب أن آخذ هذا الدواء؟', situation: 'Understanding instructions' },
      { id: genId(), phrase: 'Are there any side effects?', translation: 'هل توجد أي آثار جانبية؟', situation: 'Asking about medicine' },
      { id: genId(), phrase: 'I am allergic to penicillin.', translation: 'لدي حساسية من البنسلين.', situation: 'Allergies' },
      { id: genId(), phrase: 'Could you explain that more slowly?', translation: 'هل يمكنك شرح ذلك ببطء أكثر؟', situation: 'Clarification' },
      { id: genId(), phrase: 'When should I come back?', translation: 'متى يجب أن أعود؟', situation: 'Follow-up' },
    ],
    grammar: {
      title: 'I have been + -ing / I have had + noun',
      explanation: '"I have been feeling" shows something started in the past and continues. "I have had a headache" uses have had for possession of a symptom.',
      examples: [
        'I have been feeling sick since Monday.',
        'I have had a cough for three days.',
        'How long have you had this pain?',
        'She has been taking medicine for a week.',
      ]
    },
    lessonSteps: [
      { id: genId(), title: 'Vocabulary', duration: 10, description: 'Medical and health vocabulary.' },
      { id: genId(), title: 'Grammar Focus', duration: 10, description: 'I have been / I have had for symptoms.' },
      { id: genId(), title: 'Exercises', duration: 20, description: 'Complete all exercises together.' },
      { id: genId(), title: 'Roleplay', duration: 15, description: 'Doctor visit scenario.' },
      { id: genId(), title: 'Wrap-up & Homework', duration: 5, description: 'Review and assign homework.' },
    ],
    exercises: [
      {
        id: genId(),
        type: 'fill-blank',
        title: 'At the Doctor',
        instruction: 'Complete with: appointment, prescription, symptoms, dose, allergic',
        content: {
          sentences: [
            { id: genId(), text: 'I would like to make a doctor\'s ___.', answer: 'appointment' },
            { id: genId(), text: 'What are your ___?', answer: 'symptoms' },
            { id: genId(), text: 'Here is your ___.', answer: 'prescription' },
            { id: genId(), text: 'Take one ___ in the morning.', answer: 'dose' },
            { id: genId(), text: 'I am ___ to penicillin.', answer: 'allergic' },
          ]
        },
        answerKey: '1.appointment 2.symptoms 3.prescription 4.dose 5.allergic'
      },
      {
        id: genId(),
        type: 'multiple-choice',
        title: 'Medical Situations',
        instruction: 'Choose the best sentence for each situation.',
        content: {
          questions: [
            { id: genId(), question: 'You want to see a doctor:', options: ['I need appointment now.', 'I would like to make an appointment, please.', 'Doctor see me.'], correctIndex: 1 },
            { id: genId(), question: 'You need to know about medicine side effects:', options: ['Side effects bad?', 'Are there any side effects I should know about?', 'Medicine bad?'], correctIndex: 1 },
            { id: genId(), question: 'You want to know when to return:', options: ['When come back?', 'When should I come back for a follow-up?', 'Return when?'], correctIndex: 1 },
          ]
        },
        answerKey: '1.b 2.b 3.b'
      },
      {
        id: genId(),
        type: 'roleplay-card',
        title: 'Doctor Visit Cards',
        instruction: 'Practice the doctor dialogue.',
        content: {
          situation: 'You are at a doctor\'s office. Describe your symptoms clearly.',
          studentRole: 'Patient',
          teacherRole: 'Doctor',
          studentLines: [
            { id: genId(), prompt: 'Greet the doctor and explain why you are here.', suggestedResponse: 'Good morning. I have been feeling unwell for two days.' },
            { id: genId(), prompt: 'Describe your main symptom.', suggestedResponse: 'I have a headache and a sore throat.' },
            { id: genId(), prompt: 'Answer how long you have had these symptoms.', suggestedResponse: 'Since Monday morning.' },
            { id: genId(), prompt: 'Mention an allergy or ask about side effects.', suggestedResponse: 'I am allergic to penicillin. Are there any side effects?' },
            { id: genId(), prompt: 'Ask when to come back.', suggestedResponse: 'When should I come back?' },
          ],
          teacherLines: [
            { id: genId(), line: 'Good morning. What brings you in today?' },
            { id: genId(), line: 'I\'m sorry to hear that. Can you describe your symptoms?' },
            { id: genId(), line: 'How long have you had these symptoms?' },
            { id: genId(), line: 'I\'ll prescribe some medicine. Take one dose twice a day with food.' },
            { id: genId(), line: 'Come back in one week if you don\'t feel better.' },
            { id: genId(), line: 'Here is your prescription. Take care!' },
          ]
        },
        answerKey: 'Students practice describing symptoms and understanding medical instructions.'
      }
    ],
    homework: [
      { id: genId(), task: 'Write 8 sentences about health and symptoms.', type: 'writing', details: 'Use "I have been" and "I have had" patterns.' },
      { id: genId(), task: 'Record a 1-minute doctor visit dialogue.', type: 'recording', details: 'Include greeting, symptoms, and follow-up question.' },
    ],
    roleplay: {
      title: 'At the Doctor\'s Office',
      situation: 'You have been feeling unwell for two days. Visit the doctor and describe your symptoms.',
      studentRole: 'Patient',
      teacherRole: 'Doctor',
      script: [
        { speaker: 'student', line: 'Good morning. I have been feeling unwell since Monday.', cue: 'Explain why you are here' },
        { speaker: 'teacher', line: 'I\'m sorry to hear that. What are your symptoms?' },
        { speaker: 'student', line: 'I have a headache and a sore throat. I also feel a bit dizzy.', cue: 'List your symptoms' },
        { speaker: 'teacher', line: 'How long have you had these symptoms?' },
        { speaker: 'student', line: 'Since Monday morning.', cue: 'Say how long' },
        { speaker: 'teacher', line: 'I\'ll prescribe some medicine. Take one dose twice a day with food.' },
        { speaker: 'student', line: 'Are there any side effects? And I am allergic to penicillin.', cue: 'Ask about side effects and allergies' },
        { speaker: 'teacher', line: 'No penicillin in this medicine. Side effects may include drowsiness.' },
        { speaker: 'student', line: 'Thank you, doctor. When should I come back?', cue: 'Ask about follow-up' },
      ]
    },
    answerKey: 'Exercise 1: appointment, symptoms, prescription, dose, allergic\nExercise 2: b, b, b\nExercise 3: Dialogue practice',
    teacherNotes: 'Practice clear symptom description. Encourage students to use full sentences, not just single words.'
  },
  {
    id: 'session-27',
    number: 27,
    date: '2026-05-07',
    title: 'Money, Banking & ATMs',
    goal: 'Handle money exchange, use an ATM, and ask about prices and payments.',
    vocab: [
      { id: genId(), word: 'Currency', meaning: 'عملة', example: 'What currency do they use?', category: 'money' },
      { id: genId(), word: 'Exchange rate', meaning: 'سعر الصرف', example: 'What is the exchange rate?', category: 'money' },
      { id: genId(), word: 'Cash', meaning: 'نقد', example: 'Do you accept cash?', category: 'payment' },
      { id: genId(), word: 'ATM', meaning: 'ماكينة صرف آلي', example: 'Where is the nearest ATM?', category: 'banking' },
      { id: genId(), word: 'Withdraw', meaning: 'يسحب (مال)', example: 'I need to withdraw money.', category: 'banking' },
      { id: genId(), word: 'Pin code', meaning: 'رمز PIN', example: 'Enter your pin code.', category: 'banking' },
      { id: genId(), word: 'Receipt', meaning: 'إيصال', example: 'Could I have a receipt?', category: 'money' },
      { id: genId(), word: 'Change', meaning: 'باقي / فكة', example: 'Keep the change.', category: 'money' },
    ],
    phrases: [
      { id: genId(), phrase: 'Where can I exchange currency?', translation: 'أين يمكنني صرف العملات؟', situation: 'Money exchange' },
      { id: genId(), phrase: 'What is the exchange rate for dollars?', translation: 'ما هو سعر صرف الدولار؟', situation: 'Exchange rate' },
      { id: genId(), phrase: 'I need to withdraw some money from the ATM.', translation: 'أحتاج سحب بعض المال من الصراف الآلي.', situation: 'ATM' },
      { id: genId(), phrase: 'Do you accept credit cards?', translation: 'هل تقبلون بطاقات الائتمان؟', situation: 'Payment' },
      { id: genId(), phrase: 'Could I have a receipt, please?', translation: 'هل يمكنني الحصول على إيصال من فضلك؟', situation: 'Receipt' },
      { id: genId(), phrase: 'Keep the change.', translation: 'احتفظ بالباقي.', situation: 'Tipping' },
      { id: genId(), phrase: 'How much would you like to withdraw?', translation: 'كم المبلغ الذي تريد سحبه؟', situation: 'ATM' },
      { id: genId(), phrase: 'Is there a fee for using the ATM?', translation: 'هل توجد رسوم لاستخدام الصراف الآلي؟', situation: 'Banking' },
    ],
    grammar: {
      title: 'How much / How many + Money Questions',
      explanation: 'Use "How much" for uncountable nouns (money, time) and "How many" for countable nouns (coins, bills, days).',
      examples: [
        'How much does it cost?',
        'How much money do you need?',
        'How many coins do you have?',
        'How many days are you staying?',
      ]
    },
    lessonSteps: [
      { id: genId(), title: 'Vocabulary', duration: 10, description: 'Money, banking and ATM vocabulary.' },
      { id: genId(), title: 'Grammar Focus', duration: 10, description: 'How much / How many questions.' },
      { id: genId(), title: 'Exercises', duration: 20, description: 'Complete all exercises together.' },
      { id: genId(), title: 'Roleplay', duration: 15, description: 'Currency exchange and ATM scenarios.' },
      { id: genId(), title: 'Wrap-up & Homework', duration: 5, description: 'Review and assign homework.' },
    ],
    exercises: [
      {
        id: genId(),
        type: 'fill-blank',
        title: 'Banking Dialogue',
        instruction: 'Complete with: exchange, withdraw, rate, receipt, cash',
        content: {
          sentences: [
            { id: genId(), text: 'Where can I ___ currency?', answer: 'exchange' },
            { id: genId(), text: 'What is the exchange ___?', answer: 'rate' },
            { id: genId(), text: 'I need to ___ money from the ATM.', answer: 'withdraw' },
            { id: genId(), text: 'Could I have a ___, please?', answer: 'receipt' },
            { id: genId(), text: 'Do you accept ___ or only cards?', answer: 'cash' },
          ]
        },
        answerKey: '1.exchange 2.rate 3.withdraw 4.receipt 5.cash'
      },
      {
        id: genId(),
        type: 'multiple-choice',
        title: 'How Much or How Many',
        instruction: 'Choose the correct question word.',
        content: {
          questions: [
            { id: genId(), question: '___ does this cost?', options: ['How much', 'How many'], correctIndex: 0 },
            { id: genId(), question: '___ bills do you have?', options: ['How much', 'How many'], correctIndex: 1 },
            { id: genId(), question: '___ money do you need?', options: ['How much', 'How many'], correctIndex: 0 },
            { id: genId(), question: '___ days are you staying?', options: ['How much', 'How many'], correctIndex: 1 },
          ]
        },
        answerKey: '1. How much 2. How many 3. How much 4. How many'
      },
      {
        id: genId(),
        type: 'matching',
        title: 'Money Matching',
        instruction: 'Match each phrase to the correct situation.',
        content: {
          pairs: [
            { id: genId(), left: 'Keep the change.', right: 'Tipping at a restaurant' },
            { id: genId(), left: 'What is the exchange rate?', right: 'Currency exchange office' },
            { id: genId(), left: 'I need to withdraw cash.', right: 'Using an ATM' },
            { id: genId(), left: 'Do you accept credit cards?', right: 'Paying at a shop' },
            { id: genId(), left: 'Is there a fee for this?', right: 'Banking transaction' },
          ]
        },
        answerKey: 'All pairs matched correctly'
      }
    ],
    homework: [
      { id: genId(), task: 'Write 8 money-related questions using How much/How many.', type: 'writing', details: 'Include exchange, ATM, and payment questions.' },
      { id: genId(), task: 'Record a 1-minute ATM dialogue.', type: 'recording', details: 'Include withdrawing money and asking about fees.' },
    ],
    roleplay: {
      title: 'Currency Exchange',
      situation: 'You need to exchange money at a currency exchange office.',
      studentRole: 'Traveler',
      teacherRole: 'Exchange clerk',
      script: [
        { speaker: 'student', line: 'Hello, I would like to exchange dollars to euros, please.', cue: 'Request exchange' },
        { speaker: 'teacher', line: 'Of course. How much would you like to exchange?' },
        { speaker: 'student', line: 'Two hundred dollars. What is the exchange rate?', cue: 'Ask about rate' },
        { speaker: 'teacher', line: 'Today\'s rate is 1 dollar to 0.92 euros. So that would be 184 euros.' },
        { speaker: 'student', line: 'That sounds good. Is there a fee?', cue: 'Ask about fees' },
        { speaker: 'teacher', line: 'There is a small commission of 2 euros.' },
        { speaker: 'student', line: 'Could I have a receipt, please?', cue: 'Request receipt' },
      ]
    },
    answerKey: 'Exercise 1: exchange, rate, withdraw, receipt, cash\nExercise 2: How much, How many, How much, How many\nExercise 3: All matched correctly',
    teacherNotes: 'Practice real money situations. Bring different currency examples if possible.'
  },
  {
    id: 'session-28',
    number: 28,
    date: '2026-05-08',
    title: 'Sightseeing & Museums',
    goal: 'Ask about attractions, buy tickets, and discuss what you see.',
    vocab: [
      { id: genId(), word: 'Admission', meaning: 'رسوم الدخول', example: 'Admission is 10 dollars.', category: 'attraction' },
      { id: genId(), word: 'Exhibition', meaning: 'معرض', example: 'The exhibition is on the second floor.', category: 'museum' },
      { id: genId(), word: 'Audio guide', meaning: 'دليل صوتي', example: 'Can I get an audio guide?', category: 'museum' },
      { id: genId(), word: 'Landmark', meaning: 'معلم بارز', example: 'The Eiffel Tower is a famous landmark.', category: 'sightseeing' },
      { id: genId(), word: 'Guided tour', meaning: 'جولة مرشدة', example: 'Is there a guided tour in English?', category: 'tourism' },
      { id: genId(), word: 'Souvenir', meaning: 'تذكار', example: 'I bought a souvenir at the museum.', category: 'shopping' },
      { id: genId(), word: 'Free entry', meaning: 'دخول مجاني', example: 'Is there free entry on Sundays?', category: 'attraction' },
      { id: genId(), word: 'Map', meaning: 'خريطة', example: 'Could I have a museum map?', category: 'navigation' },
    ],
    phrases: [
      { id: genId(), phrase: 'How much is the admission?', translation: 'كم سعر التذكرة؟', situation: 'Buying tickets' },
      { id: genId(), phrase: 'Is there a guided tour in English?', translation: 'هل توجد جولة مرشدة بالإنجليزية؟', situation: 'Tours' },
      { id: genId(), phrase: 'What are the must-see attractions here?', translation: 'ما هي المعالم التي يجب زيارتها هنا؟', situation: 'Sightseeing' },
      { id: genId(), phrase: 'Can I take photos inside?', translation: 'هل يمكنني التقاط الصور بالداخل؟', situation: 'Museum rules' },
      { id: genId(), phrase: 'Could I have an audio guide, please?', translation: 'هل يمكنني الحصول على دليل صوتي من فضلك؟', situation: 'Museum' },
      { id: genId(), phrase: 'What time does the museum close?', translation: 'متى يغلق المتحف؟', situation: 'Hours' },
      { id: genId(), phrase: 'I would like two tickets, please.', translation: 'أود تذكرتين من فضلك.', situation: 'Buying tickets' },
      { id: genId(), phrase: 'This is the most beautiful building I have ever seen.', translation: 'هذا أجمل مبنى رأيته في حياتي.', situation: 'Expressing admiration' },
    ],
    grammar: {
      title: 'Superlatives: the most / the -est',
      explanation: 'Use "the most" + adjective for long adjectives and "the -est" for short adjectives to compare things.',
      examples: [
        'This is the most beautiful museum.',
        'It is the oldest building in the city.',
        'That was the best tour I have ever taken.',
        'The cathedral is the tallest landmark here.',
      ]
    },
    lessonSteps: [
      { id: genId(), title: 'Vocabulary', duration: 10, description: 'Sightseeing and museum vocabulary.' },
      { id: genId(), title: 'Grammar Focus', duration: 10, description: 'Superlative adjectives.' },
      { id: genId(), title: 'Exercises', duration: 20, description: 'Complete all exercises together.' },
      { id: genId(), title: 'Roleplay', duration: 15, description: 'Museum visit scenario.' },
      { id: genId(), title: 'Wrap-up & Homework', duration: 5, description: 'Review and assign homework.' },
    ],
    exercises: [
      {
        id: genId(),
        type: 'fill-blank',
        title: 'Museum Visit',
        instruction: 'Complete with: admission, exhibition, audio guide, souvenir, guided tour',
        content: {
          sentences: [
            { id: genId(), text: 'How much is the ___?', answer: 'admission' },
            { id: genId(), text: 'The new ___ is on the second floor.', answer: 'exhibition' },
            { id: genId(), text: 'Can I get an ___ in Arabic?', answer: 'audio guide' },
            { id: genId(), text: 'I bought a ___ at the gift shop.', answer: 'souvenir' },
            { id: genId(), text: 'Is there a ___ in English?', answer: 'guided tour' },
          ]
        },
        answerKey: '1.admission 2.exhibition 3.audio guide 4.souvenir 5.guided tour'
      },
      {
        id: genId(),
        type: 'multiple-choice',
        title: 'Superlatives',
        instruction: 'Choose the correct superlative form.',
        content: {
          questions: [
            { id: genId(), question: 'This is ___ (beautiful) church in the city.', options: ['the most beautiful', 'the beautifulest'], correctIndex: 0 },
            { id: genId(), question: 'It is ___ (old) building in town.', options: ['the oldest', 'the most old'], correctIndex: 0 },
            { id: genId(), question: 'That was ___ (good) tour ever.', options: ['the goodest', 'the best'], correctIndex: 1 },
            { id: genId(), question: 'This is ___ (famous) landmark in the country.', options: ['the most famous', 'the famousest'], correctIndex: 0 },
          ]
        },
        answerKey: '1. the most beautiful 2. the oldest 3. the best 4. the most famous'
      },
      {
        id: genId(),
        type: 'speaking-prompt',
        title: 'Describe a Sight',
        instruction: 'Describe a famous place you have visited (or would like to visit).',
        content: {
          prompt: 'Describe a landmark or museum. Where is it? What did you see? What impressed you most?',
          duration: 120,
          suggestedPoints: ['Name and location', 'What you saw', 'Your impressions', 'Use superlatives']
        },
        answerKey: 'Student uses at least 2 superlatives and describes the place clearly.'
      }
    ],
    homework: [
      { id: genId(), task: 'Write 8 sentences about a museum or landmark using superlatives.', type: 'writing', details: 'Use the most, the -est, the best forms.' },
      { id: genId(), task: 'Record a 1-minute description of a famous place.', type: 'recording', details: 'Include what you saw and your impressions.' },
    ],
    roleplay: {
      title: 'Museum Visit',
      situation: 'You arrive at a museum and want to buy a ticket and get information.',
      studentRole: 'Visitor',
      teacherRole: 'Museum ticket clerk',
      script: [
        { speaker: 'student', line: 'Hello. I would like two tickets, please.', cue: 'Buy ticket' },
        { speaker: 'teacher', line: 'Certainly. That is 15 dollars for two adults. Would you like an audio guide?' },
        { speaker: 'student', line: 'Yes, please. Is the audio guide available in Arabic?', cue: 'Ask about audio guide' },
        { speaker: 'teacher', line: 'Yes, we have it in several languages. Here you go.' },
        { speaker: 'student', line: 'Thank you. Is there a guided tour in English today?', cue: 'Ask about tour' },
        { speaker: 'teacher', line: 'Yes, the next one starts in 30 minutes on the ground floor.' },
        { speaker: 'student', line: 'Great! And can I take photos inside?', cue: 'Ask about rules' },
      ]
    },
    answerKey: 'Exercise 1: admission, exhibition, audio guide, souvenir, guided tour\nExercise 2: the most beautiful, the oldest, the best, the most famous\nExercise 3: Speaking practice',
    teacherNotes: 'Use photos of real landmarks if available. Encourage students to express opinions with superlatives.'
  },
  {
    id: 'session-29',
    number: 29,
    date: '2026-05-11',
    title: 'Comparing & Choosing Options',
    goal: 'Compare travel options and express preferences using comparative and superlative forms.',
    vocab: [
      { id: genId(), word: 'Cheaper', meaning: 'أرخص', example: 'The bus is cheaper than the train.', category: 'comparison' },
      { id: genId(), word: 'Faster', meaning: 'أسرع', example: 'The train is faster than the bus.', category: 'comparison' },
      { id: genId(), word: 'More convenient', meaning: 'أكثر راحة', example: 'Which is more convenient?', category: 'comparison' },
      { id: genId(), word: 'Option', meaning: 'خيار', example: 'We have two options.', category: 'choice' },
      { id: genId(), word: 'Prefer', meaning: 'يفضل', example: 'I prefer the morning flight.', category: 'choice' },
      { id: genId(), word: 'Decide', meaning: 'يقرر', example: 'I need to decide soon.', category: 'choice' },
      { id: genId(), word: 'Worth', meaning: 'يستحق', example: 'It is worth the extra money.', category: 'value' },
      { id: genId(), word: 'Alternative', meaning: 'بديل', example: 'Is there an alternative?', category: 'choice' },
    ],
    phrases: [
      { id: genId(), phrase: 'The train is faster but the bus is cheaper.', translation: 'القطار أسرع لكن الباص أرخص.', situation: 'Comparing' },
      { id: genId(), phrase: 'I prefer the early flight because it is cheaper.', translation: 'أفضل الرحلة المبكرة لأنها أرخص.', situation: 'Expressing preference' },
      { id: genId(), phrase: 'Which option is more convenient?', translation: 'أي خيار أكثر راحة؟', situation: 'Asking for comparison' },
      { id: genId(), phrase: 'Is it worth paying extra for first class?', translation: 'هل يستحق دفع مبلغ إضافي لدرجة الأولى؟', situation: 'Evaluating value' },
      { id: genId(), phrase: 'I think the hotel is better because it includes breakfast.', translation: 'أعتقد أن الفندق أفضل لأنه يشمل الإفطار.', situation: 'Giving opinion' },
      { id: genId(), phrase: 'What would you recommend?', translation: 'ماذا تنصح؟', situation: 'Asking for advice' },
      { id: genId(), phrase: 'Is there a cheaper alternative?', translation: 'هل يوجد بديل أرخص؟', situation: 'Budget' },
    ],
    grammar: {
      title: 'Comparatives: -er / more + than',
      explanation: 'Add -er to short adjectives (cheaper, faster) or use "more" before long adjectives (more convenient). Use "than" for comparison.',
      examples: [
        'The train is faster than the bus.',
        'A taxi is more expensive than the metro.',
        'This hotel is better than the other one.',
        'Breakfast is included, which is better for us.',
      ]
    },
    lessonSteps: [
      { id: genId(), title: 'Vocabulary', duration: 10, description: 'Comparison and choice words.' },
      { id: genId(), title: 'Grammar Focus', duration: 10, description: 'Comparative adjectives with than.' },
      { id: genId(), title: 'Exercises', duration: 20, description: 'Complete all exercises together.' },
      { id: genId(), title: 'Roleplay', duration: 15, description: 'Choosing between travel options.' },
      { id: genId(), title: 'Wrap-up & Homework', duration: 5, description: 'Review and assign homework.' },
    ],
    exercises: [
      {
        id: genId(),
        type: 'fill-blank',
        title: 'Travel Comparisons',
        instruction: 'Complete with the comparative form: cheap, fast, convenient, good, expensive',
        content: {
          sentences: [
            { id: genId(), text: 'The bus is ___ than the train.', answer: 'cheaper' },
            { id: genId(), text: 'The train is ___ than the bus.', answer: 'faster' },
            { id: genId(), text: 'Which option is more ___?', answer: 'convenient' },
            { id: genId(), text: 'This hotel is ___ than the last one.', answer: 'better' },
            { id: genId(), text: 'A taxi is more ___ than the metro.', answer: 'expensive' },
          ]
        },
        answerKey: '1.cheaper 2.faster 3.convenient 4.better 5.expensive'
      },
      {
        id: genId(),
        type: 'multiple-choice',
        title: 'Choose the Best Option',
        instruction: 'Read the situation and choose the best travel decision.',
        content: {
          questions: [
            { id: genId(), question: 'The bus costs 5 dollars and takes 2 hours. The train costs 12 dollars and takes 40 minutes. You are on a budget:', options: ['Take the train because it is faster.', 'Take the bus because it is cheaper.', 'Walk because it is free.'], correctIndex: 1 },
            { id: genId(), question: 'Hotel A costs 80 dollars with breakfast. Hotel B costs 70 dollars without breakfast. Breakfast costs 15 dollars:', options: ['Hotel A is a better value.', 'Hotel B is cheaper.', 'Both are the same.'], correctIndex: 0 },
            { id: genId(), question: 'You want to say "I like this more than that":', options: ['I prefer this than that.', 'I prefer this to that.', 'This more good that.'], correctIndex: 1 },
          ]
        },
        answerKey: '1.b 2.a 3.b'
      },
      {
        id: genId(),
        type: 'speaking-prompt',
        title: 'Compare Two Options',
        instruction: 'Choose between two travel options and explain your choice.',
        content: {
          prompt: 'You can take a cheap bus (4 hours, 10 dollars) or a fast train (1.5 hours, 35 dollars). Compare both and say which you prefer and why.',
          duration: 120,
          suggestedPoints: ['Price comparison', 'Time comparison', 'Comfort', 'Your decision and reason']
        },
        answerKey: 'Student uses comparatives and gives a clear preference with reasons.'
      }
    ],
    homework: [
      { id: genId(), task: 'Write 8 comparative sentences about travel options.', type: 'writing', details: 'Use -er and more forms with than.' },
      { id: genId(), task: 'Record a 1-minute comparison between two hotels or flights.', type: 'recording', details: 'Explain which you prefer and why.' },
    ],
    roleplay: {
      title: 'Choosing a Hotel',
      situation: 'You are deciding between two hotels. Ask questions and make a choice.',
      studentRole: 'Traveler',
      teacherRole: 'Travel agent',
      script: [
        { speaker: 'student', line: 'I am looking for a hotel near the city center. What options do you have?', cue: 'Ask for options' },
        { speaker: 'teacher', line: 'We have Hotel Aria for 90 dollars and Hotel Beacon for 65 dollars.' },
        { speaker: 'student', line: 'Which one is more convenient for sightseeing?', cue: 'Ask comparison' },
        { speaker: 'teacher', line: 'Hotel Aria is closer to the attractions, but Hotel Beacon has a free shuttle.' },
        { speaker: 'student', line: 'Does Hotel Aria include breakfast?', cue: 'Ask about details' },
        { speaker: 'teacher', line: 'Yes, Hotel Aria includes breakfast. Hotel Beacon does not.' },
        { speaker: 'student', line: 'I think Hotel Aria is better because it includes breakfast and is closer. I will take it.', cue: 'Make decision' },
      ]
    },
    answerKey: 'Exercise 1-3 as listed\nSpeaking practice: student uses comparatives',
    teacherNotes: 'Focus on real travel decisions. Students should give reasons for their preference.'
  },
  {
    id: 'session-30',
    number: 30,
    date: '2026-05-12',
    title: 'Future Plans (Will / Going to)',
    goal: 'Talk about future travel plans using "will" for decisions and "going to" for intentions.',
    vocab: [
      { id: genId(), word: 'Plan', meaning: 'يخطط', example: 'I plan to visit Paris next year.', category: 'future' },
      { id: genId(), word: 'Intend', meaning: 'ينوي', example: 'I intend to stay for one week.', category: 'future' },
      { id: genId(), word: 'Book', meaning: 'يحجز', example: 'I will book the tickets tomorrow.', category: 'future' },
      { id: genId(), word: 'Arrive', meaning: 'يصل', example: 'We are going to arrive on Monday.', category: 'travel' },
      { id: genId(), word: 'Depart', meaning: 'يغادر', example: 'The flight departs at 8 AM.', category: 'travel' },
      { id: genId(), word: 'Explore', meaning: 'يستكشف', example: 'I want to explore the old city.', category: 'travel' },
      { id: genId(), word: 'Excited', meaning: 'متحمس', example: 'I am excited about this trip.', category: 'feelings' },
      { id: genId(), word: 'Eventually', meaning: 'في النهاية', example: 'Eventually, I will visit Japan.', category: 'time' },
    ],
    phrases: [
      { id: genId(), phrase: 'I am going to visit London next summer.', translation: 'سأزور لندن الصيف القادم.', situation: 'Future plans' },
      { id: genId(), phrase: 'I will book the hotel tonight.', translation: 'سأحجز الفندق الليلة.', situation: 'Immediate decision' },
      { id: genId(), phrase: 'We are planning to stay for a week.', translation: 'نخطط للبقاء أسبوعاً.', situation: 'Duration' },
      { id: genId(), phrase: 'I think it is going to rain tomorrow.', translation: 'أعتقد أنه سيمطر غداً.', situation: 'Prediction' },
      { id: genId(), phrase: 'When are you leaving?', translation: 'متى تغادر؟', situation: 'Asking about plans' },
      { id: genId(), phrase: 'I intend to try the local food.', translation: 'أنوي تجربة الطعام المحلي.', situation: 'Intentions' },
      { id: genId(), phrase: 'I am looking forward to this trip.', translation: 'أتحمس لهذه الرحلة.', situation: 'Excitement' },
    ],
    grammar: {
      title: 'Will vs Going to',
      explanation: 'Use "going to" for plans you already have. Use "will" for quick decisions or predictions.',
      examples: [
        'I am going to travel to Spain in June. (plan)',
        'I will help you with your bags. (quick decision)',
        'It is going to be a great trip. (prediction with evidence)',
        'I think the flight will be on time. (prediction)',
      ]
    },
    lessonSteps: [
      { id: genId(), title: 'Vocabulary', duration: 10, description: 'Future and planning words.' },
      { id: genId(), title: 'Grammar Focus', duration: 10, description: 'Will vs Going to.' },
      { id: genId(), title: 'Exercises', duration: 20, description: 'Complete all exercises together.' },
      { id: genId(), title: 'Roleplay', duration: 15, description: 'Planning a trip together.' },
      { id: genId(), title: 'Wrap-up & Homework', duration: 5, description: 'Review and assign homework.' },
    ],
    exercises: [
      {
        id: genId(),
        type: 'fill-blank',
        title: 'Future Forms',
        instruction: 'Complete with: will or going to (use the correct form)',
        content: {
          sentences: [
            { id: genId(), text: 'I am ___ visit Paris next month.', answer: 'going to' },
            { id: genId(), text: 'Wait, I ___ help you with that!', answer: 'will' },
            { id: genId(), text: 'We ___ stay at a hotel near the beach.', answer: 'are going to' },
            { id: genId(), text: 'I think it ___ be crowded in July.', answer: 'will' },
            { id: genId(), text: 'She ___ book the tickets online tonight.', answer: 'is going to' },
          ]
        },
        answerKey: '1.going to 2.will 3.are going to 4.will 5.is going to'
      },
      {
        id: genId(),
        type: 'multiple-choice',
        title: 'Will or Going to?',
        instruction: 'Choose the correct future form.',
        content: {
          questions: [
            { id: genId(), question: 'You already have your ticket. You say:', options: ['I will fly to London.', 'I am going to fly to London.'], correctIndex: 1 },
            { id: genId(), question: 'Someone drops their bag. You quickly say:', options: ['I am going to help you!', 'I will help you!'], correctIndex: 1 },
            { id: genId(), question: 'You have planned your trip for months. You say:', options: ['I will travel in June.', 'I am going to travel in June.'], correctIndex: 1 },
            { id: genId(), question: 'You predict the weather (no evidence):', options: ['I think it will rain.', 'I think it is going to rain.'], correctIndex: 0 },
          ]
        },
        answerKey: '1.b 2.b 3.b 4.a'
      },
      {
        id: genId(),
        type: 'speaking-prompt',
        title: 'My Next Trip',
        instruction: 'Talk about your next travel plans using will and going to.',
        content: {
          prompt: 'Describe a trip you are going to take (or want to take). Where, when, what will you do?',
          duration: 120,
          suggestedPoints: ['Destination', 'When and how long', 'What you are going to do', 'What you will need to prepare']
        },
        answerKey: 'Student uses both will and going to correctly in context.'
      }
    ],
    homework: [
      { id: genId(), task: 'Write 8 sentences about your future travel plans.', type: 'writing', details: 'Use both will and going to. Highlight which is a plan and which is a decision.' },
      { id: genId(), task: 'Record a 1.5-minute travel plan description.', type: 'recording', details: 'Include destination, duration, activities, and preparation.' },
    ],
    roleplay: {
      title: 'Planning a Day Trip',
      situation: 'You and a friend are planning a day trip. Decide what you will do together.',
      studentRole: 'Traveler planning',
      teacherRole: 'Friend',
      script: [
        { speaker: 'student', line: 'I am going to take a day trip this Saturday. Do you want to come?', cue: 'Invite' },
        { speaker: 'teacher', line: 'Sure! Where are we going?' },
        { speaker: 'student', line: 'I am thinking about the old town. We can explore the market and visit the castle.', cue: 'Share plan' },
        { speaker: 'teacher', line: 'That sounds great! How are we going to get there?' },
        { speaker: 'student', line: 'We will take the train. It leaves at 9 AM.', cue: 'Transport detail' },
        { speaker: 'teacher', line: 'Perfect. What should I bring?' },
        { speaker: 'student', line: 'Bring comfortable shoes and a camera. I will bring snacks.', cue: 'Give advice' },
      ]
    },
    answerKey: 'Exercise 1: going to, will, are going to, will, is going to\nExercise 2: b, b, b, a\nExercise 3: Speaking practice',
    teacherNotes: 'Help students distinguish will (quick decision) from going to (plan). Practice both forms clearly.'
  },
  {
    id: 'session-31',
    number: 31,
    date: '2026-05-14',
    title: 'Formal vs Casual Language',
    goal: 'Switch between formal and casual English depending on the situation.',
    vocab: [
      { id: genId(), word: 'Formal', meaning: 'رسمي', example: 'Good morning, sir. How may I help you?', category: 'register' },
      { id: genId(), word: 'Casual', meaning: 'غير رسمي', example: 'Hey! What\'s up?', category: 'register' },
      { id: genId(), word: 'Respectful', meaning: 'محترم', example: 'A respectful tone is important in business.', category: 'register' },
      { id: genId(), word: 'Colleague', meaning: 'زميل عمل', example: 'My colleague is meeting us later.', category: 'workplace' },
      { id: genId(), word: 'Appropriate', meaning: 'مناسب', example: 'Is this outfit appropriate for dinner?', category: 'register' },
      { id: genId(), word: 'Greeting', meaning: 'تحية', example: 'Different situations need different greetings.', category: 'register' },
    ],
    phrases: [
      { id: genId(), phrase: 'Good morning. How may I assist you?', translation: 'صباح الخير. كيف يمكنني مساعدتك؟', situation: 'Formal' },
      { id: genId(), phrase: 'Hey! How\'s it going?', translation: 'أهلاً! كيف حالك؟', situation: 'Casual' },
      { id: genId(), phrase: 'I would appreciate it if you could help me.', translation: 'أقدر ذلك لو يمكنك مساعدتي.', situation: 'Formal' },
      { id: genId(), phrase: 'Could you give me a hand?', translation: 'هل يمكنك مساعدتي؟', situation: 'Semi-formal' },
      { id: genId(), phrase: 'I look forward to hearing from you.', translation: 'أنتظر ردك.', situation: 'Formal writing' },
      { id: genId(), phrase: 'Thanks! See you later.', translation: 'شكراً! أراك لاحقاً.', situation: 'Casual' },
    ],
    grammar: {
      title: 'Register: Formal vs Casual',
      explanation: 'Use formal language in business, hotels, and with strangers. Use casual language with friends. Some situations need semi-formal language.',
      examples: [
        'Formal: I would like to make a reservation, please.',
        'Casual: I want to book a table.',
        'Formal: Could you assist me with my luggage?',
        'Casual: Can you help me with my bags?',
      ]
    },
    lessonSteps: [
      { id: genId(), title: 'Vocabulary', duration: 10, description: 'Formal and casual language words.' },
      { id: genId(), title: 'Grammar Focus', duration: 10, description: 'When to use formal vs casual.' },
      { id: genId(), title: 'Exercises', duration: 20, description: 'Complete all exercises together.' },
      { id: genId(), title: 'Roleplay', duration: 15, description: 'Same situation, two registers.' },
      { id: genId(), title: 'Wrap-up & Homework', duration: 5, description: 'Review and assign homework.' },
    ],
    exercises: [
      {
        id: genId(),
        type: 'matching',
        title: 'Formal vs Casual Match',
        instruction: 'Match each formal sentence to its casual version.',
        content: {
          pairs: [
            { id: genId(), left: 'I would like to order, please.', right: 'Can I get some food?' },
            { id: genId(), left: 'Could you assist me?', right: 'Can you help me?' },
            { id: genId(), left: 'I look forward to our meeting.', right: 'See you at the meeting!' },
            { id: genId(), left: 'Good morning. How may I help you?', right: 'Hey! What can I do for you?' },
            { id: genId(), left: 'I would appreciate your assistance.', right: 'I need a hand with this.' },
          ]
        },
        answerKey: 'All pairs matched correctly'
      },
      {
        id: genId(),
        type: 'multiple-choice',
        title: 'Choose the Right Register',
        instruction: 'Choose the most appropriate sentence for each situation.',
        content: {
          questions: [
            { id: genId(), question: 'At a business meeting with a new client:', options: ['Hey, what\'s up?', 'Good morning. It is a pleasure to meet you.', 'Hi there! Nice to see ya.'], correctIndex: 1 },
            { id: genId(), question: 'With a friend at a cafe:', options: ['I would appreciate a coffee, if you please.', 'Coffee, please.', 'Can I get a coffee? Thanks!'], correctIndex: 2 },
            { id: genId(), question: 'Writing an email to a hotel:', options: ['Hey, need a room Saturday.', 'Dear Sir/Madam, I would like to inquire about availability.', 'Wassup, room for 2?'], correctIndex: 1 },
          ]
        },
        answerKey: '1.b 2.c 3.b'
      }
    ],
    homework: [
      { id: genId(), task: 'Write 5 formal and 5 casual versions of the same ideas.', type: 'writing', details: 'Use different situations: hotel, restaurant, friends, business.' },
      { id: genId(), task: 'Record 2 short scenarios: one formal, one casual.', type: 'recording', details: 'Same situation (ordering food) in both registers.' },
    ],
    roleplay: {
      title: 'Same Situation, Different Register',
      situation: 'You need help at a hotel. Practice once formally and once casually.',
      studentRole: 'Hotel guest',
      teacherRole: 'Hotel staff member',
      script: [
        { speaker: 'student', line: 'Good evening. I would appreciate some assistance with my room.', cue: 'Formal request' },
        { speaker: 'teacher', line: 'Of course, sir. How may I help you?' },
        { speaker: 'student', line: 'The air conditioning does not seem to be functioning properly.', cue: 'Formal problem' },
        { speaker: 'teacher', line: 'I apologize for the inconvenience. I will send someone immediately.' },
        { speaker: 'student', line: 'Thank you. I look forward to having this resolved.', cue: 'Formal closing' },
      ]
    },
    answerKey: 'Matching and MCQ as listed.',
    teacherNotes: 'Practice switching between registers. It is ok to be semi-formal in many situations.'
  },
  {
    id: 'session-32',
    number: 32,
    date: '2026-05-15',
    title: 'Making Effective Complaints',
    goal: 'Make polite but firm complaints in real travel situations.',
    vocab: [
      { id: genId(), word: 'Complaint', meaning: 'شكوى', example: 'I would like to make a complaint.', category: 'complaints' },
      { id: genId(), word: 'Inconvenient', meaning: 'غير مريح', example: 'This is very inconvenient.', category: 'problems' },
      { id: genId(), word: 'Unacceptable', meaning: 'غير مقبول', example: 'This situation is unacceptable.', category: 'problems' },
      { id: genId(), word: 'Resolve', meaning: 'يحل', example: 'How will you resolve this?', category: 'solutions' },
      { id: genId(), word: 'Compensate', meaning: 'يعوض', example: 'Will you compensate us?', category: 'solutions' },
      { id: genId(), word: 'Apologize', meaning: 'يعتذر', example: 'I would like an apology.', category: 'complaints' },
    ],
    phrases: [
      { id: genId(), phrase: 'I would like to make a formal complaint.', translation: 'أود تقديم شكوى رسمية.', situation: 'Starting a complaint' },
      { id: genId(), phrase: 'This is not what I was promised.', translation: 'هذا ليس ما وُعدت به.', situation: 'Expressing disappointment' },
      { id: genId(), phrase: 'I find this situation unacceptable.', translation: 'أجد هذا الموقف غير مقبول.', situation: 'Strong complaint' },
      { id: genId(), phrase: 'Could you please resolve this quickly?', translation: 'هل يمكنك حل هذا بسرعة من فضلك؟', situation: 'Requesting action' },
      { id: genId(), phrase: 'What will you do to compensate us?', translation: 'ماذا ستفعلون لتعويضنا؟', situation: 'Seeking compensation' },
      { id: genId(), phrase: 'I would appreciate a prompt response.', translation: 'أقدر ردكم السريع.', situation: 'Formal follow-up' },
    ],
    grammar: {
      title: 'I would like + to-infinitive / noun',
      explanation: '"I would like" is a polite but firm way to start complaints and requests. Add "to" before verbs or a noun directly.',
      examples: [
        'I would like to make a complaint.',
        'I would like a refund, please.',
        'I would like to speak to the manager.',
        'I would like an explanation.',
      ]
    },
    lessonSteps: [
      { id: genId(), title: 'Vocabulary', duration: 10, description: 'Complaint and resolution words.' },
      { id: genId(), title: 'Grammar Focus', duration: 10, description: 'I would like + noun / to-infinitive.' },
      { id: genId(), title: 'Exercises', duration: 20, description: 'Complete all exercises together.' },
      { id: genId(), title: 'Roleplay', duration: 15, description: 'Hotel complaint scenario.' },
      { id: genId(), title: 'Wrap-up & Homework', duration: 5, description: 'Review and assign homework.' },
    ],
    exercises: [
      {
        id: genId(),
        type: 'fill-blank',
        title: 'Polite Complaint Language',
        instruction: 'Complete with: complaint, unacceptable, resolve, compensate, inconvenient',
        content: {
          sentences: [
            { id: genId(), text: 'I would like to make a ___.', answer: 'complaint' },
            { id: genId(), text: 'This situation is ___.', answer: 'unacceptable' },
            { id: genId(), text: 'Could you ___ this quickly?', answer: 'resolve' },
            { id: genId(), text: 'Will you ___ us for the trouble?', answer: 'compensate' },
            { id: genId(), text: 'This is very ___.', answer: 'inconvenient' },
          ]
        },
        answerKey: '1.complaint 2.unacceptable 3.resolve 4.compensate 5.inconvenient'
      },
      {
        id: genId(),
        type: 'multiple-choice',
        title: 'Most Effective Complaint',
        instruction: 'Choose the most effective and polite complaint.',
        content: {
          questions: [
            { id: genId(), question: 'Your hotel room has no hot water:', options: ['This room is terrible!', 'I would like to report that there is no hot water in my room.', 'No hot water! Fix now!'], correctIndex: 1 },
            { id: genId(), question: 'Your flight was cancelled without notice:', options: ['This is unacceptable. What are my options?', 'Flight cancelled! Bad!', 'Why you cancel?'], correctIndex: 0 },
            { id: genId(), question: 'You want action from the manager:', options: ['Talk to manager!', 'I would like to speak to the manager, please.', 'Manager now!'], correctIndex: 1 },
          ]
        },
        answerKey: '1.b 2.a 3.b'
      }
    ],
    homework: [
      { id: genId(), task: 'Write 6 polite complaint sentences.', type: 'writing', details: 'Use "I would like" pattern for 3, and firm statements for 3.' },
      { id: genId(), task: 'Record a 1.5-minute hotel complaint roleplay.', type: 'recording', details: 'Stay polite but firm throughout.' },
    ],
    roleplay: {
      title: 'Hotel Room Complaint',
      situation: 'Your hotel room has several problems. Make a polite but firm complaint.',
      studentRole: 'Hotel guest',
      teacherRole: 'Hotel manager',
      script: [
        { speaker: 'student', line: 'Excuse me, I would like to make a complaint about my room.', cue: 'Start complaint' },
        { speaker: 'teacher', line: 'I am sorry to hear that. What seems to be the problem?' },
        { speaker: 'student', line: 'There is no hot water, the air conditioning does not work, and the room is noisy.', cue: 'List problems' },
        { speaker: 'teacher', line: 'That is unacceptable. I apologize for the inconvenience.' },
        { speaker: 'student', line: 'How will you resolve this? I find this situation very inconvenient.', cue: 'Request action' },
        { speaker: 'teacher', line: 'We can move you to a better room and offer a discount on your stay.' },
        { speaker: 'student', line: 'Thank you. I would appreciate that.', cue: 'Accept resolution' },
      ]
    },
    answerKey: 'Exercises as listed.',
    teacherNotes: 'Role-play staying calm while being firm. Practice tone of voice.'
  },
  {
    id: 'session-33',
    number: 33,
    date: '2026-05-18',
    title: 'At the Beach & Water Activities',
    goal: 'Talk about beach activities, safety, and ask about facilities.',
    vocab: [
      { id: genId(), word: 'Sunscreen', meaning: 'واقي شمس', example: 'Do you have sunscreen?', category: 'beach' },
      { id: genId(), word: 'Towel', meaning: 'منشفة', example: 'I forgot my towel.', category: 'beach' },
      { id: genId(), word: 'Current', meaning: 'تيار مائي', example: 'Be careful of the strong current.', category: 'safety' },
      { id: genId(), word: 'Lifeguard', meaning: 'حارس إنقاذ', example: 'The lifeguard is watching the swimmers.', category: 'safety' },
      { id: genId(), word: 'Shore', meaning: 'شاطئ / ضفة', example: 'Stay close to the shore.', category: 'beach' },
      { id: genId(), word: 'Lockers', meaning: 'خزائن', example: 'Are there lockers for our valuables?', category: 'facilities' },
      { id: genId(), word: 'Snorkeling', meaning: 'غوص سطحي', example: 'We went snorkeling near the reef.', category: 'activities' },
      { id: genId(), word: 'Wave', meaning: 'موجة', example: 'The waves are very big today.', category: 'beach' },
    ],
    phrases: [
      { id: genId(), phrase: 'Is it safe to swim here?', translation: 'هل السباحة آمنة هنا؟', situation: 'Safety' },
      { id: genId(), phrase: 'Are there any lockers for valuables?', translation: 'هل توجد خزائن للمقتنيات الثمينة؟', situation: 'Facilities' },
      { id: genId(), phrase: 'Be careful of the strong current.', translation: 'احذر التيار القوي.', situation: 'Warning' },
      { id: genId(), phrase: 'Where can I rent a snorkel?', translation: 'أين يمكنني استئجار معدات غوص؟', situation: 'Activities' },
      { id: genId(), phrase: 'The water is so clear and warm.', translation: 'الماء صافٍ ودافئ.', situation: 'Describing' },
      { id: genId(), phrase: 'Could you recommend a good beach nearby?', translation: 'هل يمكنك توصية بشاطئ جيد قريب؟', situation: 'Asking' },
    ],
    grammar: {
      title: 'Imperatives for Safety',
      explanation: 'Use imperative verbs (without a subject) to give safety instructions. Add "please" for politeness.',
      examples: [
        'Stay close to the shore.',
        'Do not swim after sunset.',
        'Please apply sunscreen every two hours.',
        'Watch out for the jellyfish.',
      ]
    },
    lessonSteps: [
      { id: genId(), title: 'Vocabulary', duration: 10, description: 'Beach and water safety words.' },
      { id: genId(), title: 'Grammar Focus', duration: 10, description: 'Imperatives for instructions.' },
      { id: genId(), title: 'Exercises', duration: 20, description: 'Complete all exercises together.' },
      { id: genId(), title: 'Roleplay', duration: 15, description: 'Beach arrival and asking about safety.' },
      { id: genId(), title: 'Wrap-up & Homework', duration: 5, description: 'Review and assign homework.' },
    ],
    exercises: [
      {
        id: genId(),
        type: 'matching',
        title: 'Beach Safety Match',
        instruction: 'Match each safety warning to its meaning.',
        content: {
          pairs: [
            { id: genId(), left: 'Stay close to the shore.', right: 'Do not go far into the water' },
            { id: genId(), left: 'Apply sunscreen.', right: 'Protect your skin from the sun' },
            { id: genId(), left: 'Watch out for the current.', right: 'Be careful of water flow' },
            { id: genId(), left: 'Do not swim alone.', right: 'Always have someone with you' },
            { id: genId(), left: 'Listen to the lifeguard.', right: 'Follow safety instructions' },
          ]
        },
        answerKey: 'All pairs matched correctly'
      },
      {
        id: genId(),
        type: 'fill-blank',
        title: 'Beach Dialogue',
        instruction: 'Complete with: safe, sunscreen, current, lockers, snorkeling',
        content: {
          sentences: [
            { id: genId(), text: 'Is it ___ to swim here?', answer: 'safe' },
            { id: genId(), text: 'Apply ___ every two hours.', answer: 'sunscreen' },
            { id: genId(), text: 'Watch out for the strong ___.', answer: 'current' },
            { id: genId(), text: 'Are there ___ for our bags?', answer: 'lockers' },
            { id: genId(), text: 'We went ___ near the reef.', answer: 'snorkeling' },
          ]
        },
        answerKey: '1.safe 2.sunscreen 3.current 4.lockers 5.snorkeling'
      }
    ],
    homework: [
      { id: genId(), task: 'Write 8 sentences about beach safety using imperatives.', type: 'writing', details: 'Use both positive and negative commands.' },
      { id: genId(), task: 'Record a 1-minute beach safety announcement.', type: 'recording', details: 'Give 5 safety rules for swimmers.' },
    ],
    roleplay: {
      title: 'Beach Arrival',
      situation: 'You arrive at a beach and want to know about safety and facilities.',
      studentRole: 'Beach visitor',
      teacherRole: 'Beach lifeguard',
      script: [
        { speaker: 'student', line: 'Excuse me, is it safe to swim here today?', cue: 'Ask about safety' },
        { speaker: 'teacher', line: 'Yes, but watch out for the current near the rocks on the right side.' },
        { speaker: 'student', line: 'Thank you. Are there lockers for valuables?', cue: 'Ask about facilities' },
        { speaker: 'teacher', line: 'Yes, lockers are near the entrance. You can also rent snorkeling equipment there.' },
        { speaker: 'student', line: 'Great! Where can I rent a snorkel?', cue: 'Ask about activities' },
        { speaker: 'teacher', line: 'At the shop next to the lifeguard station. Stay close to the shore when snorkeling.' },
      ]
    },
    answerKey: 'Matching and fill-in as listed.',
    teacherNotes: 'Emphasize safety vocabulary. Practice both giving and understanding safety instructions.'
  },
  {
    id: 'session-34',
    number: 34,
    date: '2026-05-19',
    title: 'Travel Etiquette & Cultural Tips',
    goal: 'Understand cultural differences in greetings, tipping, and social behavior while traveling.',
    vocab: [
      { id: genId(), word: 'Custom', meaning: 'عادة / تقليد', example: 'It is a local custom to take off shoes.', category: 'culture' },
      { id: genId(), word: 'Tipping', meaning: 'بقشيش', example: 'Is tipping expected here?', category: 'culture' },
      { id: genId(), word: 'Respect', meaning: 'احترام', example: 'Show respect for local traditions.', category: 'culture' },
      { id: genId(), word: 'Dress code', meaning: 'قواعد اللباس', example: 'What is the dress code?', category: 'culture' },
      { id: genId(), word: 'Gesture', meaning: 'إشارة / حركة', example: 'Some gestures have different meanings.', category: 'culture' },
      { id: genId(), word: 'Taboo', meaning: 'محظور', example: 'It is taboo to point with your finger in some cultures.', category: 'culture' },
    ],
    phrases: [
      { id: genId(), phrase: 'What is the tipping custom here?', translation: 'ما هي عادة البقشيش هنا؟', situation: 'Tipping' },
      { id: genId(), phrase: 'Is there a dress code for this restaurant?', translation: 'هل توجد قواعد لباس لهذا المطعم؟', situation: 'Dress code' },
      { id: genId(), phrase: 'Should I remove my shoes indoors?', translation: 'هل يجب أن أخلع حذائي في الداخل؟', situation: 'Customs' },
      { id: genId(), phrase: 'Is it polite to tip in this country?', translation: 'هل من اللائق ترك بقشيش في هذا البلد؟', situation: 'Tipping' },
      { id: genId(), phrase: 'I want to respect local customs.', translation: 'أريد احترام العادات المحلية.', situation: 'Respect' },
      { id: genId(), phrase: 'What should I know before visiting?', translation: 'ما الذي يجب أن أعرف قبل الزيارة؟', situation: 'Asking' },
    ],
    grammar: {
      title: 'Should / Shouldn\'t for Advice',
      explanation: 'Use "should" to give advice about cultural norms. "Shouldn\'t" tells what to avoid.',
      examples: [
        'You should tip 15-20% in restaurants here.',
        'You shouldn\'t point with your finger in some countries.',
        'Should I remove my shoes indoors?',
        'You shouldn\'t be late for appointments in Germany.',
      ]
    },
    lessonSteps: [
      { id: genId(), title: 'Vocabulary', duration: 10, description: 'Cultural and etiquette words.' },
      { id: genId(), title: 'Grammar Focus', duration: 10, description: 'Should / Shouldn\'t for advice.' },
      { id: genId(), title: 'Exercises', duration: 20, description: 'Complete all exercises together.' },
      { id: genId(), title: 'Roleplay', duration: 15, description: 'Cultural advice scenario.' },
      { id: genId(), title: 'Wrap-up & Homework', duration: 5, description: 'Review and assign homework.' },
    ],
    exercises: [
      {
        id: genId(),
        type: 'multiple-choice',
        title: 'Cultural Dos and Don\'ts',
        instruction: 'Choose the best advice for each situation.',
        content: {
          questions: [
            { id: genId(), question: 'You are in Japan. Before entering a home:', options: ['Keep your shoes on.', 'You should remove your shoes.', 'Shoes do not matter.'], correctIndex: 1 },
            { id: genId(), question: 'In the USA, the typical tip at a restaurant is:', options: ['No tip.', '5-10%.', '15-20%.'], correctIndex: 2 },
            { id: genId(), question: 'In many Middle Eastern countries, you should:', options: ['Use your left hand to eat.', 'Use your right hand to eat and greet.', 'Both hands are fine.'], correctIndex: 1 },
          ]
        },
        answerKey: '1.b 2.c 3.b'
      },
      {
        id: genId(),
        type: 'fill-blank',
        title: 'Cultural Advice',
        instruction: 'Complete with: should, shouldn\'t, custom, tipping, respectful',
        content: {
          sentences: [
            { id: genId(), text: 'You ___ learn a few words of the local language.', answer: 'should' },
            { id: genId(), text: 'You ___ point at people in public.', answer: 'shouldn\'t' },
            { id: genId(), text: 'It is a local ___ to bow when greeting.', answer: 'custom' },
            { id: genId(), text: 'Is ___ expected in this country?', answer: 'tipping' },
            { id: genId(), text: 'Be ___ of local traditions.', answer: 'respectful' },
          ]
        },
        answerKey: '1.should 2.shouldn\'t 3.custom 4.tipping 5.respectful'
      }
    ],
    homework: [
      { id: genId(), task: 'Write 8 cultural tips using should/shouldn\'t.', type: 'writing', details: 'Include 4 things you should do and 4 you shouldn\'t when traveling.' },
      { id: genId(), task: 'Record a 1-minute cultural advice guide for tourists visiting your country.', type: 'recording', details: 'Cover greetings, tipping, and one taboo.' },
    ],
    roleplay: {
      title: 'Cultural Advice',
      situation: 'A friend is visiting your country for the first time. Give them cultural tips.',
      studentRole: 'Local giving advice',
      teacherRole: 'First-time visitor',
      script: [
        { speaker: 'teacher', line: 'This is my first time here. What should I know about local customs?' },
        { speaker: 'student', line: 'You should always greet people when you enter a shop.', cue: 'Give etiquette advice' },
        { speaker: 'teacher', line: 'What about tipping?' },
        { speaker: 'student', line: 'Tipping is about 10-15%. You shouldn\'t leave no tip.', cue: 'Explain tipping' },
        { speaker: 'teacher', line: 'Is there anything I should avoid doing?' },
        { speaker: 'student', line: 'You shouldn\'t point with your finger. Use your whole hand instead.', cue: 'Share a taboo' },
      ]
    },
    answerKey: 'Exercises as listed.',
    teacherNotes: 'Discuss real cultural differences. Encourage curiosity and respect.'
  },
  {
    id: 'session-35',
    number: 35,
    date: '2026-05-21',
    title: 'Extended Phone Conversations',
    goal: 'Handle multi-step phone calls: making, holding, and following up on calls.',
    vocab: [
      { id: genId(), word: 'Hold on', meaning: 'انتظر لحظة', example: 'Please hold on, I will transfer you.', category: 'phone' },
      { id: genId(), word: 'Transfer', meaning: 'يحوّل (المكالمة)', example: 'I will transfer you to reservations.', category: 'phone' },
      { id: genId(), word: 'Voicemail', meaning: 'بريد صوتي', example: 'I got your voicemail.', category: 'phone' },
      { id: genId(), word: 'Callback', meaning: 'إعادة الاتصال', example: 'Can I get a callback?', category: 'phone' },
      { id: genId(), word: 'Line', meaning: 'خط / خط هاتف', example: 'The line is busy.', category: 'phone' },
      { id: genId(), word: 'Leave a message', meaning: 'اترك رسالة', example: 'Would you like to leave a message?', category: 'phone' },
    ],
    phrases: [
      { id: genId(), phrase: 'Could I speak to someone in reservations, please?', translation: 'هل يمكنني التحدث مع شخص في الحجز؟', situation: 'Phone call' },
      { id: genId(), phrase: 'Please hold on, I will transfer you.', translation: 'يرجى الانتظار، سأحوّلك.', situation: 'Transfer' },
      { id: genId(), phrase: 'Would you like to leave a message?', translation: 'هل تود ترك رسالة؟', situation: 'Voicemail' },
      { id: genId(), phrase: 'I will call back later.', translation: 'سأتصل لاحقاً.', situation: 'Callback' },
      { id: genId(), phrase: 'Sorry, the line is busy. Can I hold?', translation: 'عذراً، الخط مشغول. هل يمكنني الانتظار؟', situation: 'Busy line' },
      { id: genId(), phrase: 'Let me confirm: you said Monday at 3 PM, correct?', translation: 'دعني أؤكد: قلت الاثنين الساعة 3 مساءً، صح؟', situation: 'Confirmation' },
    ],
    grammar: {
      title: 'Phone Call Language Patterns',
      explanation: 'Use "Could I" for polite requests, "I will" for actions you will take, and "Would you like" for offers.',
      examples: [
        'Could I speak to the manager?',
        'I will transfer you now.',
        'Would you like to leave a message?',
      ]
    },
    lessonSteps: [
      { id: genId(), title: 'Vocabulary', duration: 10, description: 'Phone conversation terms.' },
      { id: genId(), title: 'Grammar Focus', duration: 10, description: 'Phone call language patterns.' },
      { id: genId(), title: 'Exercises', duration: 20, description: 'Complete all exercises together.' },
      { id: genId(), title: 'Roleplay', duration: 15, description: 'Multi-step phone call.' },
      { id: genId(), title: 'Wrap-up & Homework', duration: 5, description: 'Review and assign homework.' },
    ],
    exercises: [
      {
        id: genId(),
        type: 'dialogue-builder',
        title: 'Phone Call Order',
        instruction: 'Put the phone call in the correct order.',
        content: {
          lines: [
            { id: genId(), speaker: 'receptionist', text: 'Good afternoon, Grand Hotel. How may I help you?', correctOrder: 1 },
            { id: genId(), speaker: 'caller', text: 'I would like to change my reservation, please.', correctOrder: 2 },
            { id: genId(), speaker: 'receptionist', text: 'Please hold on, I will transfer you.', correctOrder: 3 },
            { id: genId(), speaker: 'agent', text: 'Hello, this is reservations. How can I help?', correctOrder: 4 },
            { id: genId(), speaker: 'caller', text: 'I need to change my dates from June 5 to June 8.', correctOrder: 5 },
            { id: genId(), speaker: 'agent', text: 'Let me check that for you. Your new reservation is confirmed.', correctOrder: 6 },
          ]
        },
        answerKey: 'Correct order: 1-2-3-4-5-6'
      },
      {
        id: genId(),
        type: 'fill-blank',
        title: 'Phone Expressions',
        instruction: 'Complete with: hold on, transfer, voicemail, callback, message',
        content: {
          sentences: [
            { id: genId(), text: 'Please ___, I will check.', answer: 'hold on' },
            { id: genId(), text: 'I will ___ you to the right department.', answer: 'transfer' },
            { id: genId(), text: 'I left a ___ on his phone.', answer: 'voicemail' },
            { id: genId(), text: 'Can I get a ___?', answer: 'callback' },
            { id: genId(), text: 'Would you like to leave a ___?', answer: 'message' },
          ]
        },
        answerKey: '1.hold on 2.transfer 3.voicemail 4.callback 5.message'
      }
    ],
    homework: [
      { id: genId(), task: 'Write a phone call script with at least 6 lines.', type: 'writing', details: 'Include greeting, hold, transfer, and confirmation.' },
      { id: genId(), task: 'Record a 1.5-minute phone conversation.', type: 'recording', details: 'Include hold, transfer, and leave a message.' },
    ],
    roleplay: {
      title: 'Multi-Step Phone Call',
      situation: 'You call a hotel to change your reservation. You get transferred and leave a message.',
      studentRole: 'Caller',
      teacherRole: 'Hotel staff',
      script: [
        { speaker: 'student', line: 'Good afternoon. Could I speak to someone in reservations, please?', cue: 'Start call politely' },
        { speaker: 'teacher', line: 'Please hold on, I will transfer you.' },
        { speaker: 'teacher', line: 'Hello, reservations. How can I help you?' },
        { speaker: 'student', line: 'I need to change my reservation from June 5 to June 8.', cue: 'State your request' },
        { speaker: 'teacher', line: 'Let me check that for you. Can I put you on hold for a moment?' },
        { speaker: 'student', line: 'Of course, I can hold.', cue: 'Accept hold' },
        { speaker: 'teacher', line: 'Thank you for holding. Your new dates are confirmed.' },
        { speaker: 'student', line: 'Let me confirm: June 8, check-out June 11, correct?', cue: 'Confirm details' },
      ]
    },
    answerKey: 'Exercises as listed.',
    teacherNotes: 'Practice patience and politeness on hold. Emphasize confirmation at the end of calls.'
  },
  {
    id: 'session-36',
    number: 36,
    date: '2026-05-22',
    title: 'Understanding Announcements',
    goal: 'Understand airport, train station, and public service announcements.',
    vocab: [
      { id: genId(), word: 'Attention', meaning: 'انتباه', example: 'Attention passengers...', category: 'announcement' },
      { id: genId(), word: 'Boarding', meaning: 'صعود (الطائرة)', example: 'Boarding begins in 10 minutes.', category: 'airport' },
      { id: genId(), word: 'Delayed', meaning: 'متأخر', example: 'The train is delayed by 15 minutes.', category: 'status' },
      { id: genId(), word: 'Departure', meaning: 'مغادرة', example: 'Final boarding call for departure.', category: 'travel' },
      { id: genId(), word: 'Proceed', meaning: 'يتقدم / يتوجّه إلى', example: 'Please proceed to gate 5.', category: 'direction' },
      { id: genId(), word: 'Announce', meaning: 'يُعلن', example: 'They will announce the new gate.', category: 'communication' },
    ],
    phrases: [
      { id: genId(), phrase: 'Attention all passengers on flight BA204.', translation: 'انتباه جميع ركاب الرحلة BA204.', situation: 'Airport' },
      { id: genId(), phrase: 'This is the final boarding call for gate C12.', translation: 'هذا آخر نداء للصعود عند البوابة C12.', situation: 'Airport' },
      { id: genId(), phrase: 'The train arriving at platform 3 is the express to London.', translation: 'القطار القادم إلى الرصيف 3 هو السريع إلى لندن.', situation: 'Train station' },
      { id: genId(), phrase: 'Could you repeat that announcement, please?', translation: 'هل يمكنك إعادة ذلك الإعلان من فضلك؟', situation: 'Clarification' },
      { id: genId(), phrase: 'Please proceed to the information desk.', translation: 'يرجى التوجه إلى مكتب المعلومات.', situation: 'Direction' },
      { id: genId(), phrase: 'We apologize for the delay.', translation: 'نعتذر عن التأخير.', situation: 'Apology' },
    ],
    grammar: {
      title: 'Passive Voice for Announcements',
      explanation: 'Announcements often use passive voice: "Flight BA204 has been delayed" (not "They delayed the flight").',
      examples: [
        'Flight BA204 has been delayed by 30 minutes.',
        'The gate has been changed to C15.',
        'All passengers are requested to proceed to gate 4.',
        'Boarding will begin shortly.',
      ]
    },
    lessonSteps: [
      { id: genId(), title: 'Vocabulary', duration: 10, description: 'Announcement vocabulary.' },
      { id: genId(), title: 'Grammar Focus', duration: 10, description: 'Passive voice for announcements.' },
      { id: genId(), title: 'Exercises', duration: 20, description: 'Complete all exercises together.' },
      { id: genId(), title: 'Roleplay', duration: 15, description: 'Responding to announcements.' },
      { id: genId(), title: 'Wrap-up & Homework', duration: 5, description: 'Review and assign homework.' },
    ],
    exercises: [
      {
        id: genId(),
        type: 'fill-blank',
        title: 'Announcement Keywords',
        instruction: 'Complete with: attention, boarding, delayed, proceed, departure',
        content: {
          sentences: [
            { id: genId(), text: '___ all passengers.', answer: 'Attention' },
            { id: genId(), text: '___ begins in 10 minutes.', answer: 'Boarding' },
            { id: genId(), text: 'The flight has been ___ by 30 minutes.', answer: 'delayed' },
            { id: genId(), text: 'Please ___ to gate 7.', answer: 'proceed' },
            { id: genId(), text: 'Final ___ call for flight KL123.', answer: 'departure' },
          ]
        },
        answerKey: '1.Attention 2.Boarding 3.delayed 4.proceed 5.departure'
      },
      {
        id: genId(),
        type: 'multiple-choice',
        title: 'Passive Voice Announcements',
        instruction: 'Rewrite in passive voice or choose the correct announcement.',
        content: {
          questions: [
            { id: genId(), question: '"They changed the gate." In passive voice:', options: ['The gate was changed.', 'They changed it.', 'Gate change.'], correctIndex: 0 },
            { id: genId(), question: '"They delayed the flight." In passive voice:', options: ['They delayed it.', 'The flight has been delayed.', 'Delay flight.'], correctIndex: 1 },
            { id: genId(), question: 'You hear "All passengers are requested to proceed to gate 5." What should you do?', options: ['Stay where you are.', 'Go to gate 5.', 'Call the airline.'], correctIndex: 1 },
          ]
        },
        answerKey: '1.a 2.b 3.b'
      }
    ],
    homework: [
      { id: genId(), task: 'Write 5 announcements in passive voice.', type: 'writing', details: 'Cover airport, train, and general situations.' },
      { id: genId(), task: 'Record a 1-minute airport announcement.', type: 'recording', details: 'Include gate change, delay, and boarding call.' },
    ],
    roleplay: {
      title: 'Responding to Announcements',
      situation: 'You are at the airport and hear announcements. React and ask for clarification.',
      studentRole: 'Passenger',
      teacherRole: 'Airport staff / Announcement',
      script: [
        { speaker: 'teacher', line: 'Attention passengers on flight BA204. Your flight has been delayed by 45 minutes.' },
        { speaker: 'student', line: 'Excuse me, did you say flight BA204 is delayed by 45 minutes?', cue: 'Confirm announcement' },
        { speaker: 'teacher', line: 'Yes, that is correct. The new departure time is 4:15 PM.' },
        { speaker: 'student', line: 'Thank you. Has the gate changed as well?', cue: 'Ask follow-up' },
        { speaker: 'teacher', line: 'Yes, please proceed to gate D7.' },
        { speaker: 'student', line: 'Gate D7, got it. Thank you for the information.', cue: 'Confirm and thank' },
      ]
    },
    answerKey: 'Exercises as listed.',
    teacherNotes: 'Read announcements slowly and clearly. Practice asking for clarification.'
  },
  {
    id: 'session-37',
    number: 37,
    date: '2026-05-25',
    title: 'Negotiating & Bargaining at Markets',
    goal: 'Negotiate prices politely at markets and bazaars.',
    vocab: [
      { id: genId(), word: 'Bargain', meaning: 'مساومة / صفقة', example: 'Let me bargain for a better price.', category: 'shopping' },
      { id: genId(), word: 'Discount', meaning: 'خصم', example: 'Can you give me a discount?', category: 'price' },
      { id: genId(), word: 'Deal', meaning: 'صفقة', example: 'That is a deal!', category: 'shopping' },
      { id: genId(), word: 'Original price', meaning: 'السعر الأصلي', example: 'What is the original price?', category: 'price' },
      { id: genId(), word: 'Reasonable', meaning: 'معقول', example: 'That price is reasonable.', category: 'price' },
      { id: genId(), word: 'Expensive', meaning: 'مكلف', example: 'That is too expensive for me.', category: 'price' },
    ],
    phrases: [
      { id: genId(), phrase: 'Could you give me a better price?', translation: 'هل يمكنك إعطائي سعراً أفضل؟', situation: 'Bargaining' },
      { id: genId(), phrase: 'That is a bit too expensive for me.', translation: 'هذا أغلى قليلاً مما أتحمل.', situation: 'Price too high' },
      { id: genId(), phrase: 'Would you consider 20 dollars?', translation: 'هل تأخذ 20 دولاراً؟', situation: 'Offer' },
      { id: genId(), phrase: 'Can we make a deal?', translation: 'هل يمكننا الاتفاق على صفقة؟', situation: 'Negotiating' },
      { id: genId(), phrase: 'I will take it if you include the bag.', translation: 'سآخذه إذا أضفت الحقيبة.', situation: 'Condition' },
      { id: genId(), phrase: 'That sounds like a fair price.', translation: 'هذا يبدو سعراً عادلاً.', situation: 'Accepting' },
    ],
    grammar: {
      title: 'Conditional Offers: If + will',
      explanation: 'Use "If you..., I will..." to make conditional offers during bargaining.',
      examples: [
        'If you lower the price, I will buy two.',
        'I will take it if you give me a discount.',
        'If I buy three, can I get a better price?',
        'That is a deal if you include shipping.',
      ]
    },
    lessonSteps: [
      { id: genId(), title: 'Vocabulary', duration: 10, description: 'Market and bargaining vocabulary.' },
      { id: genId(), title: 'Grammar Focus', duration: 10, description: 'Conditional offers with If + will.' },
      { id: genId(), title: 'Exercises', duration: 20, description: 'Complete all exercises together.' },
      { id: genId(), title: 'Roleplay', duration: 15, description: 'Market bargaining scenario.' },
      { id: genId(), title: 'Wrap-up & Homework', duration: 5, description: 'Review and assign homework.' },
    ],
    exercises: [
      {
        id: genId(),
        type: 'fill-blank',
        title: 'Bargaining Dialogue',
        instruction: 'Complete with: discount, deal, reasonable, expensive, bargain',
        content: {
          sentences: [
            { id: genId(), text: 'Could you give me a ___?', answer: 'discount' },
            { id: genId(), text: 'That is too ___ for me.', answer: 'expensive' },
            { id: genId(), text: 'Can we make a ___?', answer: 'deal' },
            { id: genId(), text: 'That seems like a ___ price.', answer: 'reasonable' },
            { id: genId(), text: 'I love to ___ at the market.', answer: 'bargain' },
          ]
        },
        answerKey: '1.discount 2.expensive 3.deal 4.reasonable 5.bargain'
      },
      {
        id: genId(),
        type: 'multiple-choice',
        title: 'Best Bargaining Phrase',
        instruction: 'Choose the most polite and effective bargaining sentence.',
        content: {
          questions: [
            { id: genId(), question: 'You want a lower price:', options: ['Too much!', 'Would you consider a lower price?', 'Give me cheap price!'], correctIndex: 1 },
            { id: genId(), question: 'You want to make a conditional offer:', options: ['If lower price, I buy.', 'If you give me a discount, I will take two.', 'Cheap or no buy.'], correctIndex: 1 },
            { id: genId(), question: 'You accept the final price:', options: ['Okay, done.', 'That sounds like a fair price. I will take it.', 'Whatever.'], correctIndex: 1 },
          ]
        },
        answerKey: '1.b 2.b 3.b'
      }
    ],
    homework: [
      { id: genId(), task: 'Write 6 conditional offers using "If you..., I will..."', type: 'writing', details: 'Make realistic bargaining sentences.' },
      { id: genId(), task: 'Record a 1-minute market bargaining dialogue.', type: 'recording', details: 'Include offer, counter-offer, and deal.' },
    ],
    roleplay: {
      title: 'Market Bargaining',
      situation: 'You are at a local market. Bargain for a souvenir.',
      studentRole: 'Customer',
      teacherRole: 'Market seller',
      script: [
        { speaker: 'student', line: 'Excuse me, how much is this bracelet?', cue: 'Ask price' },
        { speaker: 'teacher', line: 'It is 30 dollars. Very good quality!' },
        { speaker: 'student', line: 'That is a bit too expensive for me. Would you consider 20 dollars?', cue: 'Make offer' },
        { speaker: 'teacher', line: 'I can do 25 dollars. That is my best price.' },
        { speaker: 'student', line: 'If you include the small bag, I will take it for 25.', cue: 'Conditional offer' },
        { speaker: 'teacher', line: 'Deal! Here is the bag as well.' },
        { speaker: 'student', line: 'Thank you. That sounds like a fair price.', cue: 'Accept' },
      ]
    },
    answerKey: 'Exercises as listed.',
    teacherNotes: 'Polite bargaining is key. Practice friendly tone while negotiating.'
  },
  {
    id: 'session-38',
    number: 38,
    date: '2026-05-26',
    title: 'Present Perfect for Travel Experiences',
    goal: 'Use "have you ever" and "I have been" to talk about travel experiences.',
    vocab: [
      { id: genId(), word: 'Experience', meaning: 'تجربة', example: 'That was an amazing experience.', category: 'travel' },
      { id: genId(), word: 'Abroad', meaning: 'في الخارج', example: 'Have you ever been abroad?', category: 'travel' },
      { id: genId(), word: 'Several times', meaning: 'عدة مرات', example: 'I have visited Paris several times.', category: 'frequency' },
      { id: genId(), word: 'Recently', meaning: 'مؤخراً', example: 'I recently went to Spain.', category: 'time' },
      { id: genId(), word: 'Overseas', meaning: 'ما وراء البحار', example: 'I have never traveled overseas.', category: 'travel' },
      { id: genId(), word: 'Unforgettable', meaning: 'لا يُنسى', example: 'The trip was unforgettable.', category: 'feelings' },
    ],
    phrases: [
      { id: genId(), phrase: 'Have you ever been to Japan?', translation: 'هل سبق لك أن زرت اليابان؟', situation: 'Asking experiences' },
      { id: genId(), phrase: 'I have visited several countries in Europe.', translation: 'زرت عدة دول في أوروبا.', situation: 'Sharing experiences' },
      { id: genId(), phrase: 'I have never tried sushi before.', translation: 'لم أجرّب السوشي من قبل.', situation: 'New experience' },
      { id: genId(), phrase: 'She has traveled abroad many times.', translation: 'سافرت إلى الخارج عدة مرات.', situation: 'Describing frequency' },
      { id: genId(), phrase: 'Have you ever missed a flight?', translation: 'هل سبق لك أن فاتتك رحلة طيران؟', situation: 'Travel questions' },
      { id: genId(), phrase: 'This is the best trip I have ever had.', translation: 'هذه أفضل رحلة مرت على الإطلاق.', situation: 'Expressing enthusiasm' },
    ],
    grammar: {
      title: 'Present Perfect: Have / Has + Past Participle',
      explanation: 'Use present perfect for life experiences. "Have you ever..." asks about experiences. "I have never..." says you have not done something.',
      examples: [
        'Have you ever been to Paris?',
        'I have visited London twice.',
        'She has never flown before.',
        'They have tried the local food.',
      ]
    },
    lessonSteps: [
      { id: genId(), title: 'Vocabulary', duration: 10, description: 'Experience and travel words.' },
      { id: genId(), title: 'Grammar Focus', duration: 10, description: 'Present perfect for experiences.' },
      { id: genId(), title: 'Exercises', duration: 20, description: 'Complete all exercises together.' },
      { id: genId(), title: 'Roleplay', duration: 15, description: 'Sharing travel experiences.' },
      { id: genId(), title: 'Wrap-up & Homework', duration: 5, description: 'Review and assign homework.' },
    ],
    exercises: [
      {
        id: genId(),
        type: 'fill-blank',
        title: 'Present Perfect Forms',
        instruction: 'Complete with the correct present perfect form.',
        content: {
          sentences: [
            { id: genId(), text: 'I ___ (be) to Italy twice.', answer: 'have been' },
            { id: genId(), text: 'She ___ never ___ (fly) before.', answer: 'has ... flown' },
            { id: genId(), text: '___ you ever ___ (eat) sushi?', answer: 'Have ... eaten' },
            { id: genId(), text: 'They ___ (visit) 10 countries.', answer: 'have visited' },
            { id: genId(), text: 'He ___ never ___ (miss) a flight.', answer: 'has ... missed' },
          ]
        },
        answerKey: '1.have been 2.has never flown 3.Have you ever eaten 4.have visited 5.has never missed'
      },
      {
        id: genId(),
        type: 'multiple-choice',
        title: 'Correct Form',
        instruction: 'Choose the correct present perfect sentence.',
        content: {
          questions: [
            { id: genId(), question: 'To ask about someone\'s travel experience:', options: ['Did you go to Japan?', 'Have you ever been to Japan?', 'Are you going to Japan?'], correctIndex: 1 },
            { id: genId(), question: 'To say you have not tried something:', options: ['I don\'t try it.', 'I never try.', 'I have never tried it.'], correctIndex: 2 },
            { id: genId(), question: '"I have been to Spain" means:', options: ['I went to Spain in the past and came back.', 'I am in Spain now.', 'I will go to Spain.'], correctIndex: 0 },
          ]
        },
        answerKey: '1.b 2.c 3.a'
      },
      {
        id: genId(),
        type: 'speaking-prompt',
        title: 'Travel Experience Interview',
        instruction: 'Ask and answer "Have you ever...?" questions about travel.',
        content: {
          prompt: 'Interview your partner about their travel experiences. Ask at least 5 "Have you ever...?" questions and answer with present perfect.',
          duration: 180,
          suggestedPoints: ['Countries visited', 'Foods tried', 'Activities done', 'Transport used', 'Problems experienced']
        },
        answerKey: 'Student uses present perfect correctly in questions and answers.'
      }
    ],
    homework: [
      { id: genId(), task: 'Write 8 "Have you ever...?" questions and your answers.', type: 'writing', details: 'Use present perfect for all answers.' },
      { id: genId(), task: 'Record a 1.5-minute travel experience interview.', type: 'recording', details: 'Ask and answer present perfect questions.' },
    ],
    roleplay: {
      title: 'Travel Experience Chat',
      situation: 'You and another traveler share experiences at a hostel.',
      studentRole: 'Traveler 1',
      teacherRole: 'Traveler 2',
      script: [
        { speaker: 'student', line: 'Have you ever been to Southeast Asia?', cue: 'Ask experience' },
        { speaker: 'teacher', line: 'Yes, I have visited Thailand and Vietnam. Have you ever tried street food there?' },
        { speaker: 'student', line: 'I have tried pad thai in Bangkok! It was delicious. Have you ever missed a flight?', cue: 'Share and ask' },
        { speaker: 'teacher', line: 'No, I have never missed a flight. But I have lost my luggage once.' },
        { speaker: 'student', line: 'Oh no! I have never lost my luggage, but I have had a flight cancelled.', cue: 'Share your experience' },
      ]
    },
    answerKey: 'Exercise 1-3 as listed.',
    teacherNotes: 'Practice present perfect in natural conversation. Focus on correct have/has forms.'
  },
  {
    id: 'session-39',
    number: 39,
    date: '2026-05-28',
    title: 'Staying Connected (Internet, SIM & Post)',
    goal: 'Get a local SIM card, find WiFi, and use the post office while traveling.',
    vocab: [
      { id: genId(), word: 'SIM card', meaning: 'بطاقة SIM', example: 'Where can I buy a local SIM card?', category: 'phone' },
      { id: genId(), word: 'Data plan', meaning: 'باقة إنترنت', example: 'I need a data plan for one week.', category: 'phone' },
      { id: genId(), word: 'WiFi', meaning: 'شبكة لاسلكية', example: 'Is there free WiFi here?', category: 'internet' },
      { id: genId(), word: 'Post office', meaning: 'مكتب البريد', example: 'Where is the nearest post office?', category: 'mail' },
      { id: genId(), word: 'Stamp', meaning: 'طابع بريدي', example: 'I need stamps for postcards.', category: 'mail' },
      { id: genId(), word: 'Top up', meaning: 'إعادة شحن', example: 'I need to top up my phone credit.', category: 'phone' },
      { id: genId(), word: 'Coverage', meaning: 'تغطية (شبكة)', example: 'Is there good coverage in this area?', category: 'internet' },
      { id: genId(), word: 'Roaming', meaning: 'تجوال', example: 'I don\'t want to pay roaming charges.', category: 'phone' },
    ],
    phrases: [
      { id: genId(), phrase: 'Where can I buy a local SIM card?', translation: 'أين يمكنني شراء بطاقة SIM محلية؟', situation: 'Getting connected' },
      { id: genId(), phrase: 'I need a data plan for one week.', translation: 'أحتاج باقة إنترنت لأسبوع واحد.', situation: 'Data plan' },
      { id: genId(), phrase: 'What is the WiFi password, please?', translation: 'ما هي كلمة مرور الواي فاي من فضلك؟', situation: 'WiFi' },
      { id: genId(), phrase: 'I need to send a postcard to my family.', translation: 'أحتاج لإرسال بطاقة بريدية لعائلتي.', situation: 'Post office' },
      { id: genId(), phrase: 'How much does it cost to top up?', translation: 'كم تكلفة إعادة الشحن؟', situation: 'Phone credit' },
      { id: genId(), phrase: 'Is there good coverage in the city center?', translation: 'هل التغطية جيدة في وسط المدينة؟', situation: 'Coverage' },
      { id: genId(), phrase: 'I don\'t want to pay roaming charges.', translation: 'لا أريد دفع رسوم التجوال.', situation: 'Roaming' },
    ],
    grammar: {
      title: 'Need to / Want to + Infinitive',
      explanation: 'Use "I need to" for necessities and "I want to" for desires while traveling.',
      examples: [
        'I need to buy a SIM card.',
        'I want to send a postcard.',
        'I need to find free WiFi.',
        'I want to top up my phone.',
      ]
    },
    lessonSteps: [
      { id: genId(), title: 'Vocabulary', duration: 10, description: 'Connectivity and post office words.' },
      { id: genId(), title: 'Grammar Focus', duration: 10, description: 'Need to / Want to + infinitive.' },
      { id: genId(), title: 'Exercises', duration: 20, description: 'Complete all exercises together.' },
      { id: genId(), title: 'Roleplay', duration: 15, description: 'Buying a SIM card.' },
      { id: genId(), title: 'Wrap-up & Homework', duration: 5, description: 'Review and assign homework.' },
    ],
    exercises: [
      {
        id: genId(),
        type: 'fill-blank',
        title: 'Getting Connected',
        instruction: 'Complete with: SIM card, data plan, WiFi, top up, roaming',
        content: {
          sentences: [
            { id: genId(), text: 'I need to buy a local ___ card.', answer: 'SIM' },
            { id: genId(), text: 'What ___ do you recommend for one week?', answer: 'data plan' },
            { id: genId(), text: 'Is there free ___ here?', answer: 'WiFi' },
            { id: genId(), text: 'I need to ___ my phone credit.', answer: 'top up' },
            { id: genId(), text: 'I don\'t want to pay ___ charges.', answer: 'roaming' },
          ]
        },
        answerKey: '1.SIM 2.data plan 3.WiFi 4.top up 5.roaming'
      },
      {
        id: genId(),
        type: 'multiple-choice',
        title: 'Need to / Want to',
        instruction: 'Choose the sentence that best fits the situation.',
        content: {
          questions: [
            { id: genId(), question: 'You must buy a SIM card:', options: ['I want to buy a SIM card.', 'I need to buy a SIM card.', 'I like to buy a SIM card.'], correctIndex: 1 },
            { id: genId(), question: 'You desire to send postcards:', options: ['I need to send postcards.', 'I want to send postcards.', 'I must to send postcards.'], correctIndex: 1 },
            { id: genId(), question: 'You must find WiFi urgently:', options: ['I want to find WiFi.', 'I would like WiFi.', 'I need to find WiFi right now.'], correctIndex: 2 },
          ]
        },
        answerKey: '1.b 2.b 3.c'
      }
    ],
    homework: [
      { id: genId(), task: 'Write 8 sentences using "I need to" and "I want to" about staying connected.', type: 'writing', details: 'Cover SIM, WiFi, post office, and data.' },
      { id: genId(), task: 'Record a 1-minute phone shop dialogue.', type: 'recording', details: 'Include asking about data plans and prices.' },
    ],
    roleplay: {
      title: 'Buying a SIM Card',
      situation: 'You enter a phone shop to buy a local SIM card and data plan.',
      studentRole: 'Customer',
      teacherRole: 'Shop assistant',
      script: [
        { speaker: 'student', line: 'Hello, I need to buy a local SIM card.', cue: 'State need' },
        { speaker: 'teacher', line: 'Of course! We have data plans for 7 days and 30 days. Which do you need?' },
        { speaker: 'student', line: 'I need a plan for one week. How much data does it include?', cue: 'Ask details' },
        { speaker: 'teacher', line: 'The 7-day plan includes 10 GB for 15 dollars.' },
        { speaker: 'student', line: 'Is there good coverage in the city center? I don\'t want roaming charges.', cue: 'Ask about coverage' },
        { speaker: 'teacher', line: 'Yes, excellent coverage. No roaming charges with a local SIM.' },
        { speaker: 'student', line: 'Great. I will take the 7-day plan.', cue: 'Make decision' },
      ]
    },
    answerKey: 'Exercises as listed.',
    teacherNotes: 'Discuss local SIM options in the student\'s target country. Practical info is valuable.'
  },
  {
    id: 'session-40',
    number: 40,
    date: '2026-05-29',
    title: 'Month 3 Review & Assessment',
    goal: 'Review all Month 3 topics and complete a comprehensive speaking assessment.',
    vocab: [
      { id: genId(), word: 'Review', meaning: 'مراجعة', category: 'review' },
      { id: genId(), word: 'Progress', meaning: 'تقدم', category: 'review' },
      { id: genId(), word: 'Achievement', meaning: 'إنجاز', category: 'review' },
      { id: genId(), word: 'Confident', meaning: 'واثق', category: 'review' },
      { id: genId(), word: 'Goal', meaning: 'هدف', category: 'review' },
    ],
    phrases: [
      { id: genId(), phrase: 'Can you clarify what you mean by that?', translation: 'هل يمكنك توضيح ما تقصده بذلك؟', situation: 'Asking for clarification' },
      { id: genId(), phrase: 'I would prefer the faster option.', translation: 'أفضل الخيار الأسرع.', situation: 'Expressing preference' },
      { id: genId(), phrase: 'This is the best trip I have ever had.', translation: 'هذه أفضل رحلة مرت على الإطلاق.', situation: 'Expressing enthusiasm' },
      { id: genId(), phrase: 'I need to make a complaint about my room.', translation: 'أحتاج لتقديم شكوى بخصوص غرفتي.', situation: 'Complaint' },
      { id: genId(), phrase: 'Should I tip at this restaurant?', translation: 'هل يجب أن أترك بقشيش في هذا المطعم؟', situation: 'Cultural question' },
      { id: genId(), phrase: 'I have been feeling much more confident.', translation: 'أشعر بثقة أكبر بكثير.', situation: 'Reflection' },
    ],
    grammar: {
      title: 'Month 3 Review: Key Patterns',
      explanation: 'Review all key grammar from Month 3: comparatives, superlatives, will/going to, should, present perfect, need to/want to, passive voice.',
      examples: [
        'The train is faster than the bus. (comparative)',
        'This is the most beautiful place. (superlative)',
        'I am going to travel next month. (future)',
        'You should tip 15%. (should)',
      ]
    },
    lessonSteps: [
      { id: genId(), title: 'Quick Review Game', duration: 15, description: 'Rapid review of all Month 3 grammar.' },
      { id: genId(), title: 'Speaking Assessment', duration: 20, description: 'One-on-one speaking evaluation.' },
      { id: genId(), title: 'Feedback & Goals', duration: 10, description: 'Discuss progress and set Month 4 goals.' },
      { id: genId(), title: 'Celebration', duration: 5, description: 'Celebrate Month 3 completion!' },
    ],
    exercises: [
      {
        id: genId(),
        type: 'multiple-choice',
        title: 'Month 3 Grammar Review',
        instruction: 'Choose the correct sentence for each grammar point.',
        content: {
          questions: [
            { id: genId(), question: 'Comparative:', options: ['This hotel is more cheap than that one.', 'This hotel is cheaper than that one.', 'This hotel is cheap than that one.'], correctIndex: 1 },
            { id: genId(), question: 'Superlative:', options: ['It is the most beautiful place I have visited.', 'It is the beautifulest place.', 'It is more beautiful place.'], correctIndex: 0 },
            { id: genId(), question: 'Future plan:', options: ['I will to visit Paris.', 'I am going visit Paris.', 'I am going to visit Paris.'], correctIndex: 2 },
            { id: genId(), question: 'Should:', options: ['You should tip 15%.', 'You should to tip 15%.', 'You should tipping 15%.'], correctIndex: 0 },
            { id: genId(), question: 'Present perfect:', options: ['I have went to Spain.', 'I have been to Spain.', 'I have being to Spain.'], correctIndex: 1 },
          ]
        },
        answerKey: '1.b 2.a 3.c 4.a 5.b'
      },
      {
        id: genId(),
        type: 'speaking-prompt',
        title: 'Final Assessment: Travel Day Simulation',
        instruction: 'Complete a 3-minute simulation covering all Month 3 skills.',
        content: {
          prompt: 'You arrive in a new city. Using appropriate language: describe the weather, ask about transport options, make a polite complaint, compare two hotels, and share a travel experience using present perfect.',
          duration: 180,
          suggestedPoints: ['Weather description', 'Transport comparison', 'Hotel complaint', 'Polite request', 'Travel experience']
        },
        answerKey: 'Student should demonstrate: weather vocab, comparatives, complaint language, should/shouldn\'t, present perfect.'
      }
    ],
    homework: [
      { id: genId(), task: 'Write a self-reflection about your progress this month.', type: 'writing', details: 'Include 3 strengths and 2 areas to improve.' },
      { id: genId(), task: 'Record a 2-minute summary of everything you learned in Month 3.', type: 'recording', details: 'Cover at least 5 different topics.' },
    ],
    roleplay: {
      title: 'Full Travel Day Review',
      situation: 'A complete travel day: arrival, weather, transport, hotel, and complaint.',
      studentRole: 'Traveler',
      teacherRole: 'Various staff',
      script: [
        { speaker: 'student', line: 'Excuse me, how do I get to the city center? Is the bus cheaper than the train?', cue: 'Ask transport, use comparatives' },
        { speaker: 'teacher', line: 'The train is faster but the bus is cheaper. It is rainy today, so I recommend the train.' },
        { speaker: 'student', line: 'I will take the train then. Also, I have been traveling since morning and I need to check in.', cue: 'Use present perfect' },
        { speaker: 'teacher', line: 'Welcome! Your room is ready. How is the weather outside?' },
        { speaker: 'student', line: 'It is rainy and windy. Actually, there is a problem with my room. The air conditioning is not working.', cue: 'Make a complaint' },
        { speaker: 'teacher', line: 'I apologize. We will fix it immediately.' },
        { speaker: 'student', line: 'Thank you. I should also ask: is tipping expected at restaurants here?', cue: 'Cultural question' },
      ]
    },
    answerKey: 'Comprehensive review of all Month 3 grammar and vocabulary.',
    teacherNotes: 'This is the assessment session. Be encouraging and celebrate progress. Set goals for next month.'
  }
];

// Phrasebook data
export const phrasebook: PhraseItem[] = [
  // Airport
  { id: genId(), phrase: 'Could you tell me which terminal I need?', translation: 'هل يمكنك إخباري بأي صالة أحتاج؟', category: 'Airport', situation: 'Finding your way' },
  { id: genId(), phrase: 'Can I check in online now?', translation: 'هل يمكنني تسجيل الدخول عبر الإنترنت الآن؟', category: 'Airport', situation: 'Check-in' },
  { id: genId(), phrase: 'How long is the security line?', translation: 'كم يستغرق طابور التفتيش الأمني؟', category: 'Airport', situation: 'Timing' },
  { id: genId(), phrase: 'Could I change to an aisle seat, please?', translation: 'هل يمكنني التغيير إلى مقعد بجانب الممر من فضلك؟', category: 'Airport', situation: 'Seating' },
  { id: genId(), phrase: 'Has the gate changed for this flight?', translation: 'هل تم تغيير البوابة لهذه الرحلة؟', category: 'Airport', situation: 'Status' },
  { id: genId(), phrase: 'My baggage tag is missing. What should I do?', translation: 'ملصق الأمتعة مفقود، ماذا أفعل؟', category: 'Airport', situation: 'Problems' },
  { id: genId(), phrase: 'Could you announce this in simple English?', translation: 'هل يمكنك إعلان هذا بلغة إنجليزية بسيطة؟', category: 'Airport', situation: 'Clarification' },
  
  // Hotel
  { id: genId(), phrase: 'Could I check in a little early?', translation: 'هل يمكنني تسجيل الدخول مبكراً قليلاً؟', category: 'Hotel', situation: 'Check-in' },
  { id: genId(), phrase: 'Is breakfast included in my booking?', translation: 'هل الإفطار مشمول في حجزي؟', category: 'Hotel', situation: 'Amenities' },
  { id: genId(), phrase: 'Could someone help me with my luggage?', translation: 'هل يمكن لأحد مساعدتي في حمل أمتعتي؟', category: 'Hotel', situation: 'Services' },
  { id: genId(), phrase: 'The room is noisy. Is a quieter room available?', translation: 'الغرفة مزعجة، هل توجد غرفة أكثر هدوءاً؟', category: 'Hotel', situation: 'Problems' },
  { id: genId(), phrase: 'Can I get a late check-out for one hour?', translation: 'هل يمكنني الحصول على تسجيل خروج متأخر لمدة ساعة؟', category: 'Hotel', situation: 'Check-out' },
  { id: genId(), phrase: 'Could you call a taxi for me at 8 AM?', translation: 'هل يمكنك طلب سيارة أجرة لي الساعة 8 صباحاً؟', category: 'Hotel', situation: 'Requests' },
  { id: genId(), phrase: 'Where can I find the nearest pharmacy?', translation: 'أين أجد أقرب صيدلية؟', category: 'Hotel', situation: 'Concierge help' },
  
  // Restaurant
  { id: genId(), phrase: 'Do you have a table near the window?', translation: 'هل لديكم طاولة قرب النافذة؟', category: 'Restaurant', situation: 'Seating' },
  { id: genId(), phrase: 'Could you explain today\'s special?', translation: 'هل يمكنك شرح طبق اليوم الخاص؟', category: 'Restaurant', situation: 'Ordering' },
  { id: genId(), phrase: 'Please make it less spicy.', translation: 'من فضلك اجعله أقل حدة.', category: 'Restaurant', situation: 'Preferences' },
  { id: genId(), phrase: 'Can we share this dish?', translation: 'هل يمكننا مشاركة هذا الطبق؟', category: 'Restaurant', situation: 'Ordering' },
  { id: genId(), phrase: 'I asked for no onions.', translation: 'طلبت بدون بصل.', category: 'Restaurant', situation: 'Problems' },
  { id: genId(), phrase: 'Could we have separate bills, please?', translation: 'هل يمكننا الحصول على فواتير منفصلة من فضلك؟', category: 'Restaurant', situation: 'Paying' },
  { id: genId(), phrase: 'Could I get this to go?', translation: 'هل يمكنني أخذ هذا سفري؟', category: 'Restaurant', situation: 'Takeaway' },
  { id: genId(), phrase: 'Do you accept contactless payment?', translation: 'هل تقبلون الدفع اللاتلامسي؟', category: 'Restaurant', situation: 'Paying' },
  
  // Directions
  { id: genId(), phrase: 'Which bus goes to the city center?', translation: 'أي حافلة تذهب إلى وسط المدينة؟', category: 'Directions', situation: 'Transport' },
  { id: genId(), phrase: 'How many stops is it from here?', translation: 'كم عدد المحطات من هنا؟', category: 'Directions', situation: 'Distance' },
  { id: genId(), phrase: 'Should I get off at the next stop?', translation: 'هل أنزل في المحطة القادمة؟', category: 'Directions', situation: 'Clarification' },
  { id: genId(), phrase: 'Cross the street and go past the bank.', translation: 'اعبر الشارع وامشِ بعد البنك.', category: 'Directions', situation: 'Giving' },
  { id: genId(), phrase: 'It is between the museum and the park.', translation: 'إنه بين المتحف والحديقة.', category: 'Directions', situation: 'Location' },
  { id: genId(), phrase: 'Could you point to it on this map?', translation: 'هل يمكنك الإشارة إليه على هذه الخريطة؟', category: 'Directions', situation: 'Asking' },
  
  // Emergencies
  { id: genId(), phrase: 'Please stay with me. I feel dizzy.', translation: 'من فضلك ابقَ معي، أشعر بالدوار.', category: 'Emergencies', situation: 'Medical' },
  { id: genId(), phrase: 'I need urgent medical help.', translation: 'أحتاج مساعدة طبية عاجلة.', category: 'Emergencies', situation: 'Urgent' },
  { id: genId(), phrase: 'Can you call emergency services now?', translation: 'هل يمكنك الاتصال بخدمات الطوارئ الآن؟', category: 'Emergencies', situation: 'Urgent' },
  { id: genId(), phrase: 'I lost my bag on the train.', translation: 'أضعت حقيبتي في القطار.', category: 'Emergencies', situation: 'Lost items' },
  { id: genId(), phrase: 'Where is the nearest police station?', translation: 'أين أقرب مركز شرطة؟', category: 'Emergencies', situation: 'Crime' },
  { id: genId(), phrase: 'Could you help me file a report?', translation: 'هل يمكنك مساعدتي في تقديم بلاغ؟', category: 'Emergencies', situation: 'Reporting' },
  { id: genId(), phrase: 'I need a translator, please.', translation: 'أحتاج مترجماً من فضلك.', category: 'Emergencies', situation: 'Communication' },
  { id: genId(), phrase: 'My phone battery is dead. Can I use your phone?', translation: 'بطارية هاتفي نفدت، هل يمكنني استخدام هاتفك؟', category: 'Emergencies', situation: 'Communication' },
  // May - Weather
  { id: genId(), phrase: 'What\'s the weather like today?', translation: 'كيف الطقس اليوم؟', category: 'Weather', situation: 'Asking about weather' },
  { id: genId(), phrase: 'It is sunny and warm outside.', translation: 'الخارج مشمس ودافئ.', category: 'Weather', situation: 'Describing weather' },
  { id: genId(), phrase: 'You should bring an umbrella.', translation: 'يجب أن تحضر مظلة.', category: 'Weather', situation: 'Advice' },
  // May - Health
  { id: genId(), phrase: 'I have been feeling unwell for two days.', translation: 'أشعر بالتوعك منذ يومين.', category: 'Health', situation: 'Describing symptoms' },
  { id: genId(), phrase: 'I would like to make a doctor\'s appointment.', translation: 'أود حجز موعد مع طبيب.', category: 'Health', situation: 'Making appointment' },
  { id: genId(), phrase: 'Are there any side effects?', translation: 'هل توجد آثار جانبية؟', category: 'Health', situation: 'Asking about medicine' },
  // May - Money
  { id: genId(), phrase: 'Where can I exchange currency?', translation: 'أين يمكنني صرف العملات؟', category: 'Money', situation: 'Money exchange' },
  { id: genId(), phrase: 'Do you accept credit cards?', translation: 'هل تقبلون بطاقات الائتمان؟', category: 'Money', situation: 'Payment' },
  { id: genId(), phrase: 'Keep the change.', translation: 'احتفظ بالباقي.', category: 'Money', situation: 'Tipping' },
  // May - Sightseeing
  { id: genId(), phrase: 'How much is the admission?', translation: 'كم سعر التذكرة؟', category: 'Sightseeing', situation: 'Buying tickets' },
  { id: genId(), phrase: 'Is there a guided tour in English?', translation: 'هل توجد جولة مرشدة بالإنجليزية؟', category: 'Sightseeing', situation: 'Tours' },
  // May - Comparing
  { id: genId(), phrase: 'The train is faster but the bus is cheaper.', translation: 'القطار أسرع لكن الباص أرخص.', category: 'Comparing', situation: 'Comparing options' },
  { id: genId(), phrase: 'I prefer the morning flight.', translation: 'أفضل رحلة الصباح.', category: 'Comparing', situation: 'Expressing preference' },
  // May - Future
  { id: genId(), phrase: 'I am going to visit London next summer.', translation: 'سأزور لندن الصيف القادم.', category: 'Future', situation: 'Future plans' },
  { id: genId(), phrase: 'I will book the hotel tonight.', translation: 'سأحجز الفندق الليلة.', category: 'Future', situation: 'Quick decision' },
  // May - Formal/Casual
  { id: genId(), phrase: 'How may I assist you?', translation: 'كيف يمكنني مساعدتك؟', category: 'Register', situation: 'Formal' },
  { id: genId(), phrase: 'Could you give me a hand?', translation: 'هل يمكنك مساعدتي؟', category: 'Register', situation: 'Semi-formal' },
  // May - Complaints
  { id: genId(), phrase: 'I would like to make a formal complaint.', translation: 'أود تقديم شكوى رسمية.', category: 'Complaints', situation: 'Starting a complaint' },
  { id: genId(), phrase: 'I find this situation unacceptable.', translation: 'أجد هذا الموقف غير مقبول.', category: 'Complaints', situation: 'Strong complaint' },
  // May - Beach
  { id: genId(), phrase: 'Is it safe to swim here?', translation: 'هل السباحة آمنة هنا؟', category: 'Beach', situation: 'Safety' },
  { id: genId(), phrase: 'Watch out for the strong current.', translation: 'احذر التيار القوي.', category: 'Beach', situation: 'Warning' },
  // May - Culture
  { id: genId(), phrase: 'What is the tipping custom here?', translation: 'ما هي عادة البقشيش هنا؟', category: 'Culture', situation: 'Tipping' },
  { id: genId(), phrase: 'I want to respect local customs.', translation: 'أريد احترام العادات المحلية.', category: 'Culture', situation: 'Respect' },
  // May - Phone
  { id: genId(), phrase: 'Please hold on, I will transfer you.', translation: 'يرجى الانتظار، سأحوّلك.', category: 'Phone', situation: 'Transfer' },
  { id: genId(), phrase: 'Would you like to leave a message?', translation: 'هل تود ترك رسالة؟', category: 'Phone', situation: 'Voicemail' },
  // May - Announcements
  { id: genId(), phrase: 'Attention all passengers.', translation: 'انتباه جميع الركاب.', category: 'Announcements', situation: 'Attention' },
  { id: genId(), phrase: 'The flight has been delayed by 30 minutes.', translation: 'تأخرت الرحلة 30 دقيقة.', category: 'Announcements', situation: 'Delay' },
  // May - Bargaining
  { id: genId(), phrase: 'Could you give me a better price?', translation: 'هل يمكنك إعطائي سعراً أفضل؟', category: 'Bargaining', situation: 'Negotiating' },
  { id: genId(), phrase: 'Can we make a deal?', translation: 'هل يمكننا الاتفاق على صفقة؟', category: 'Bargaining', situation: 'Deal' },
  // May - Present Perfect
  { id: genId(), phrase: 'Have you ever been to Japan?', translation: 'هل سبق لك أن زرت اليابان؟', category: 'Experiences', situation: 'Asking experiences' },
  { id: genId(), phrase: 'This is the best trip I have ever had.', translation: 'هذه أفضل رحلة مرت على الإطلاق.', category: 'Experiences', situation: 'Expressing enthusiasm' },
  // May - Connectivity
  { id: genId(), phrase: 'Where can I buy a local SIM card?', translation: 'أين يمكنني شراء بطاقة SIM محلية؟', category: 'Connectivity', situation: 'Getting connected' },
  { id: genId(), phrase: 'What is the WiFi password, please?', translation: 'ما هي كلمة مرور الواي فاي من فضلك؟', category: 'Connectivity', situation: 'WiFi' },
];

// Default passwords
export const DEFAULT_TEACHER_PASSWORD = 'teacher123';
export const DEFAULT_STUDENT_PASSWORD = 'student123';



// Initial app data
export const initialAppData: AppData = {
  sessions: sessions,
  submissions: [],
  progress: [],
  teacherPassword: DEFAULT_TEACHER_PASSWORD,
  studentPassword: DEFAULT_STUDENT_PASSWORD,
  favoritePhraseIds: [],
  phrasebook,
};
