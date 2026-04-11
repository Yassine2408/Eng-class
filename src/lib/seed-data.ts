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
    date: '2026-04-01',
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
    date: '2026-04-04',
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
    date: '2026-04-08',
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
    date: '2026-04-11',
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
    date: '2026-04-15',
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
    date: '2026-04-18',
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
    date: '2026-04-22',
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
    date: '2026-04-25',
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
];

// Default passwords
export const DEFAULT_TEACHER_PASSWORD = 'teacher123';
export const DEFAULT_STUDENT_PASSWORD = 'student123';

const UPCOMING_APRIL_DATES = [
  '2026-04-13',
  '2026-04-14',
  '2026-04-16',
  '2026-04-17',
  '2026-04-20',
  '2026-04-21',
  '2026-04-23',
  '2026-04-24',
  '2026-04-27',
  '2026-04-28',
  '2026-04-30',
];

const BEGINNER_GOAL_SUFFIX = 'This class is for beginner English learners and focuses on simple, practical speaking.';

const ARABIC_VOCAB_MEANINGS: Record<string, string> = {
  reservation: 'حجز مسبق',
  available: 'متاح',
  confirm: 'يؤكد / تأكيد',
  surname: 'اسم العائلة',
  slot: 'موعد زمني محدد',
  hold: 'يحجز مؤقتاً / يحتفظ',
  'reference number': 'رقم مرجعي',
  hometown: 'المدينة الأصلية',
  weekend: 'عطلة نهاية الأسبوع',
  hobby: 'هواية',
  usually: 'عادةً',
  nearby: 'بالقرب',
  recommend: 'يوصي / اقتراح',
  friendly: 'ودود',
  delay: 'تأخير',
  reschedule: 'إعادة جدولة',
  refund: 'استرجاع المبلغ',
  counter: 'مكتب خدمة / شباك',
  queue: 'طابور',
  receipt: 'إيصال',
  option: 'خيار',
  clarify: 'يوضح / توضيح',
  compare: 'يقارن / مقارنة',
  prefer: 'يفضل',
  summarize: 'يلخّص',
  accurate: 'دقيق / صحيح',
  fluency: 'طلاقة',
  confidently: 'بثقة',
  ticket: 'تذكرة',
  platform: 'رصيف / منصة',
  route: 'مسار / طريق',
  schedule: 'جدول مواعيد',
  station: 'محطة',
  transfer: 'تبديل / تحويل',
  return: 'ذهاب وإياب / إرجاع',
  'one-way': 'اتجاه واحد',
  fare: 'أجرة',
  size: 'مقاس',
  'fitting room': 'غرفة القياس',
  exchange: 'استبدال',
  cashier: 'أمين الصندوق',
  discount: 'خصم',
  item: 'سلعة / قطعة',
  'credit card': 'بطاقة ائتمان',
  'shopping bag': 'حقيبة تسوق',
  menu: 'قائمة الطعام',
  starter: 'مقبلات',
  main: 'طبق رئيسي',
  dessert: 'حلوى',
  bill: 'فاتورة',
  spicy: 'حار',
  mild: 'خفيف',
  allergy: 'حساسية',
  ingredient: 'مكوّن',
  direction: 'اتجاه',
  landmark: 'معلم',
  intersection: 'تقاطع',
  block: 'مربع سكني',
  straight: 'مباشرة',
  turn: 'ينعطف / انعطاف',
  left: 'يسار',
  right: 'يمين',
  map: 'خريطة',
  bridge: 'جسر',
  traffic: 'حركة المرور',
  'lost luggage': 'أمتعة مفقودة',
  cancelled: 'ملغى',
  compensation: 'تعويض',
  voucher: 'قسيمة',
  urgent: 'عاجل',
  scenario: 'سيناريو',
  confident: 'واثق',
  feedback: 'ملاحظات',
  hello: 'مرحباً',
  goodbye: 'وداع / إلى اللقاء',
  passport: 'جواز السفر',
  'boarding pass': 'بطاقة صعود الطائرة',
  'luggage / baggage': 'أمتعة / حقائب',
  gate: 'بوابة',
  terminal: 'صالة المطار',
};

function hasArabicText(value: string): boolean {
  return /[\u0600-\u06FF]/.test(value);
}

function toArabicMeaning(word: string, meaning: string): string {
  if (hasArabicText(meaning)) return meaning;
  const normalized = word.trim().toLowerCase();
  return ARABIC_VOCAB_MEANINGS[normalized] ?? `مصطلح متعلق بالسفر والتواصل: ${word}`;
}

function localizeVocabularyToArabic(vocab: VocabItem[]): VocabItem[] {
  return vocab.map((item) => ({
    ...item,
    meaning: toArabicMeaning(item.word, item.meaning),
  }));
}

function makeLessonsLonger(session: Session): Session {
  return {
    ...session,
    lessonSteps: session.lessonSteps.map((step) => ({
      ...step,
      duration: Math.max(step.duration + 10, Math.round(step.duration * 1.5)),
    })),
    goal: `${session.goal} ${BEGINNER_GOAL_SUFFIX}`,
  };
}

function makeExercisesSlightlyChallenging(session: Session, focus: string): Exercise[] {
  const upgraded = session.exercises.map((exercise, index) => {
    if (exercise.type === 'fill-blank') {
      const content = exercise.content as any;
      return {
        ...exercise,
        instruction: `${exercise.instruction} Then read each full sentence aloud.`,
        content: {
          ...content,
          sentences: [
            ...content.sentences,
            {
              id: genId(),
              text: `In this ${focus.toLowerCase()} situation, I can ___ politely and clearly.`,
              answer: 'respond',
            },
          ],
        },
        answerKey: `${exercise.answerKey} + challenge: respond`,
      };
    }

    if (exercise.type === 'multiple-choice') {
      const content = exercise.content as any;
      return {
        ...exercise,
        instruction: `${exercise.instruction} Pick the BEST natural sentence, not just a correct one.`,
        content: {
          ...content,
          questions: [
            ...content.questions,
            {
              id: genId(),
              question: `Choose the most natural beginner sentence for a ${focus.toLowerCase()} context:`,
              options: [
                'Can you help me please with this?',
                'Could you help me with this, please?',
                'Help me with this now, please.',
              ],
              correctIndex: 1,
            },
          ],
        },
        answerKey: `${exercise.answerKey} + final question: b`,
      };
    }

    if (exercise.type === 'matching') {
      const content = exercise.content as any;
      return {
        ...exercise,
        instruction: `${exercise.instruction} After matching, create one full sentence for each pair.`,
        content: {
          ...content,
          pairs: [
            ...content.pairs,
            {
              id: genId(),
              left: 'Could you explain that one more time?',
              right: `You need clarification during ${focus.toLowerCase()} practice`,
            },
          ],
        },
      };
    }

    if (exercise.type === 'speaking-prompt') {
      const content = exercise.content as any;
      return {
        ...exercise,
        instruction: `${exercise.instruction} Try to use at least one follow-up question.`,
        content: {
          ...content,
          duration: Math.max(150, content.duration + 45),
          suggestedPoints: [
            ...(content.suggestedPoints ?? []),
            'Add one polite follow-up question',
            'Use one connector: then / after that / because',
          ],
        },
      };
    }

    if (exercise.type === 'dialogue-builder') {
      const content = exercise.content as any;
      const lines = content.lines ?? [];
      return {
        ...exercise,
        instruction: `${exercise.instruction} Then perform the dialogue with natural speed.`,
        content: {
          ...content,
          lines: [
            ...lines,
            {
              id: genId(),
              speaker: 'student',
              text: 'Thanks, that helps a lot.',
              correctOrder: lines.length + 1,
            },
          ],
        },
      };
    }

    if (exercise.type === 'roleplay-card') {
      const content = exercise.content as any;
      return {
        ...exercise,
        instruction: `${exercise.instruction} Include one clarification question and one polite closing.`,
        content: {
          ...content,
          studentLines: [
            ...(content.studentLines ?? []),
            {
              id: genId(),
              prompt: 'Ask one follow-up question to confirm details.',
            },
          ],
        },
      };
    }

    return exercise;
  });

  const miniChallenge: Exercise = {
    id: genId(),
    type: 'multiple-choice',
    title: 'Mini Challenge: Choose the Best Response',
    instruction: `Select the best response for a ${focus.toLowerCase()} situation.`,
    content: {
      questions: [
        {
          id: genId(),
          question: 'You need help but want to sound polite:',
          options: ['Help me now.', 'You can help me.', 'Could you help me, please?'],
          correctIndex: 2,
        },
        {
          id: genId(),
          question: 'You did not understand the person:',
          options: ['Could you repeat that slowly, please?', 'Say again.', 'I no understand.'],
          correctIndex: 0,
        },
        {
          id: genId(),
          question: 'You want to confirm details:',
          options: ['Correct?', 'You sure right?', 'Is that correct?'],
          correctIndex: 2,
        },
      ],
    },
    answerKey: '1.c 2.a 3.c',
  };

  return [...upgraded, miniChallenge];
}

function buildFirstWeekContent(index: number): { vocab: VocabItem[]; phrases: PhraseItem[]; exercises: Exercise[] } | null {
  if (index === 0) {
    return {
      vocab: [
        { id: genId(), word: 'Reservation', meaning: 'A booking made in advance', example: 'I have a reservation for Tuesday.', category: 'calls' },
        { id: genId(), word: 'Available', meaning: 'Free and ready to use', example: 'Do you have an available table at 7?', category: 'calls' },
        { id: genId(), word: 'Confirm', meaning: 'To check and make sure', example: 'Could you confirm my booking details?', category: 'calls' },
        { id: genId(), word: 'Surname', meaning: 'Family name', example: 'My surname is Hassan.', category: 'identity' },
        { id: genId(), word: 'Slot', meaning: 'A specific time period', example: 'Is there a slot at 6:30 PM?', category: 'time' },
        { id: genId(), word: 'Hold', meaning: 'To keep something for someone', example: 'Can you hold the booking for 10 minutes?', category: 'calls' },
        { id: genId(), word: 'Reference number', meaning: 'A code for your booking', example: 'Please share my reference number.', category: 'calls' },
      ],
      phrases: [
        { id: genId(), phrase: 'I would like to make a reservation for two people.', translation: 'أودّ إجراء حجز لشخصين.', situation: 'Phone reservation' },
        { id: genId(), phrase: 'Is 7:30 PM available?', translation: 'هل الساعة 7:30 مساءً متاحة؟', situation: 'Checking availability' },
        { id: genId(), phrase: 'Could you confirm the name and time, please?', translation: 'هل يمكنك تأكيد الاسم والوقت من فضلك؟', situation: 'Confirmation' },
        { id: genId(), phrase: 'My surname is [name], spelled H-A-S-S-A-N.', translation: 'اسم العائلة هو ... ويتم تهجئته ...', situation: 'Spelling details' },
        { id: genId(), phrase: 'Can I change the reservation to 8 PM?', translation: 'هل يمكنني تغيير الحجز إلى الساعة 8؟', situation: 'Changing booking' },
      ],
      exercises: [
        {
          id: genId(),
          type: 'fill-blank',
          title: 'Reservation Details',
          instruction: 'Complete with: reservation, available, confirm, surname, slot',
          content: {
            sentences: [
              { id: genId(), text: 'I would like to make a ___.', answer: 'reservation' },
              { id: genId(), text: 'Is this time ___?', answer: 'available' },
              { id: genId(), text: 'Could you ___ the date and time?', answer: 'confirm' },
              { id: genId(), text: 'My ___ is Ali.', answer: 'surname' },
              { id: genId(), text: 'Do you have a ___ at 6 PM?', answer: 'slot' },
            ],
          },
          answerKey: '1.reservation 2.available 3.confirm 4.surname 5.slot',
        },
        {
          id: genId(),
          type: 'multiple-choice',
          title: 'Phone Call Meaning Check',
          instruction: 'Read each situation and choose the response that solves the problem best.',
          content: {
            questions: [
              {
                id: genId(),
                question: 'The restaurant says: "We only have 8:30 PM." You want 7:30 PM. What is the best reply?',
                options: [
                  'No, wrong. I need 7:30.',
                  'Thank you. Is there any slot between 7:00 and 8:00 PM?',
                  'You change now.',
                ],
                correctIndex: 1,
              },
              {
                id: genId(),
                question: 'You did not hear the family name clearly. What should you ask?',
                options: [
                  'Could you spell your surname, please?',
                  'Name?',
                  'Say family now.',
                ],
                correctIndex: 0,
              },
              {
                id: genId(),
                question: 'You want to check details before ending the call. Best sentence?',
                options: [
                  'Okay bye.',
                  'So, table for two at 8 PM under Omar, correct?',
                  'You sure booking yes?',
                ],
                correctIndex: 1,
              },
            ],
          },
          answerKey: '1.b 2.a 3.b',
        },
        {
          id: genId(),
          type: 'dialogue-builder',
          title: 'Reservation Call Sequence',
          instruction: 'Put the call in the correct order based on meaning, then practice it.',
          content: {
            lines: [
              { id: genId(), speaker: 'restaurant', text: 'Certainly. Can I have your name, please?', correctOrder: 2 },
              { id: genId(), speaker: 'customer', text: 'Hello, I would like to book a table for two.', correctOrder: 1 },
              { id: genId(), speaker: 'restaurant', text: 'We have 8 PM available. Does that work for you?', correctOrder: 3 },
              { id: genId(), speaker: 'customer', text: 'Yes, that works. Could you confirm it under Lina Hassan?', correctOrder: 4 },
              { id: genId(), speaker: 'restaurant', text: 'Confirmed. Your reference number is R-204.', correctOrder: 5 },
              { id: genId(), speaker: 'customer', text: 'Great, thank you for your help.', correctOrder: 6 },
            ],
          },
          answerKey: '1-2-3-4-5-6',
        },
      ],
    };
  }

  if (index === 1) {
    return {
      vocab: [
        { id: genId(), word: 'Hometown', meaning: 'The city where you grew up', example: 'My hometown is Casablanca.', category: 'small-talk' },
        { id: genId(), word: 'Weekend', meaning: 'Saturday and Sunday', example: 'What do you usually do on weekends?', category: 'time' },
        { id: genId(), word: 'Hobby', meaning: 'An activity you enjoy', example: 'My hobby is cooking.', category: 'small-talk' },
        { id: genId(), word: 'Usually', meaning: 'Most of the time', example: 'I usually walk in the evening.', category: 'frequency' },
        { id: genId(), word: 'Nearby', meaning: 'Close to this place', example: 'Is there a nice cafe nearby?', category: 'location' },
        { id: genId(), word: 'Recommend', meaning: 'To suggest something good', example: 'Can you recommend a place to visit?', category: 'conversation' },
        { id: genId(), word: 'Friendly', meaning: 'Kind and open', example: 'People here are very friendly.', category: 'adjectives' },
      ],
      phrases: [
        { id: genId(), phrase: 'Where is your hometown?', translation: 'أين مدينتك الأصلية؟', situation: 'Small talk' },
        { id: genId(), phrase: 'What do you usually do on weekends?', translation: 'ماذا تفعل عادة في عطلة نهاية الأسبوع؟', situation: 'Small talk' },
        { id: genId(), phrase: 'Could you recommend a local cafe?', translation: 'هل يمكنك أن توصي بمقهى محلي؟', situation: 'Small talk' },
        { id: genId(), phrase: 'I enjoy meeting new people when I travel.', translation: 'أستمتع بالتعرف على أشخاص جدد أثناء السفر.', situation: 'Personal sharing' },
        { id: genId(), phrase: 'That sounds interesting. Tell me more.', translation: 'هذا يبدو ممتعاً، أخبرني أكثر.', situation: 'Follow-up' },
      ],
      exercises: [
        {
          id: genId(),
          type: 'matching',
          title: 'Small Talk Intent Match',
          instruction: 'Match each sentence with the speaker\'s intention.',
          content: {
            pairs: [
              { id: genId(), left: 'Where is your hometown?', right: 'Ask about background' },
              { id: genId(), left: 'Could you recommend a local cafe?', right: 'Ask for suggestion' },
              { id: genId(), left: 'That sounds interesting. Tell me more.', right: 'Show active listening' },
              { id: genId(), left: 'What do you usually do on weekends?', right: 'Ask about routine' },
            ],
          },
          answerKey: '1-background 2-suggestion 3-active listening 4-routine',
        },
        {
          id: genId(),
          type: 'speaking-prompt',
          title: 'Small Talk with Follow-up',
          instruction: 'Speak for 90 seconds, and include two follow-up questions based on your partner\'s answers.',
          content: {
            prompt: 'Start with a greeting, answer 3 questions, and ask two meaningful follow-up questions.',
            duration: 90,
            suggestedPoints: ['Hometown', 'Weekend routine', 'One hobby', 'Two follow-up questions'],
          },
          answerKey: 'Student covers 3 points and asks 2 relevant follow-up questions.',
        },
      ],
    };
  }

  if (index === 2) {
    return {
      vocab: [
        { id: genId(), word: 'Delay', meaning: 'When something happens later than planned', example: 'My flight has a delay.', category: 'problems' },
        { id: genId(), word: 'Reschedule', meaning: 'To change to a new time', example: 'Can I reschedule my ticket?', category: 'problems' },
        { id: genId(), word: 'Refund', meaning: 'Money returned after cancellation', example: 'Could I get a refund, please?', category: 'money' },
        { id: genId(), word: 'Counter', meaning: 'Service desk', example: 'Please go to counter 4.', category: 'airport' },
        { id: genId(), word: 'Queue', meaning: 'A line of people waiting', example: 'The queue is very long.', category: 'travel' },
        { id: genId(), word: 'Receipt', meaning: 'Proof of payment', example: 'Could I have a receipt?', category: 'money' },
        { id: genId(), word: 'Option', meaning: 'Choice', example: 'What options do I have?', category: 'decisions' },
      ],
      phrases: [
        { id: genId(), phrase: 'My train is delayed. What are my options?', translation: 'قطاري متأخر، ما هي الخيارات المتاحة؟', situation: 'Transport issue' },
        { id: genId(), phrase: 'Could I reschedule to a later time?', translation: 'هل يمكنني إعادة الجدولة إلى وقت لاحق؟', situation: 'Change request' },
        { id: genId(), phrase: 'Where is the help counter?', translation: 'أين مكتب المساعدة؟', situation: 'Finding help' },
        { id: genId(), phrase: 'Could I get a refund or a voucher?', translation: 'هل يمكنني استرداد المبلغ أو الحصول على قسيمة؟', situation: 'Compensation' },
      ],
      exercises: [
        {
          id: genId(),
          type: 'fill-blank',
          title: 'Problem + Solution Language',
          instruction: 'Complete with: delay, reschedule, refund, counter, options',
          content: {
            sentences: [
              { id: genId(), text: 'There is a flight ___.', answer: 'delay' },
              { id: genId(), text: 'Can I ___ my booking?', answer: 'reschedule' },
              { id: genId(), text: 'Could I get a ___, please?', answer: 'refund' },
              { id: genId(), text: 'Where is the service ___?', answer: 'counter' },
              { id: genId(), text: 'What ___ do I have now?', answer: 'options' },
            ],
          },
          answerKey: '1.delay 2.reschedule 3.refund 4.counter 5.options',
        },
        {
          id: genId(),
          type: 'multiple-choice',
          title: 'Problem-Solving Choice',
          instruction: 'Choose the sentence that best fits the situation.',
          content: {
            questions: [
              {
                id: genId(),
                question: 'Your train is late and you might miss a meeting. Best first sentence?',
                options: [
                  'My train is delayed. Could you help me with another option?',
                  'Train late. Bad.',
                  'Change now fast.',
                ],
                correctIndex: 0,
              },
              {
                id: genId(),
                question: 'The agent gives one option, but it is too expensive. What should you ask?',
                options: [
                  'No expensive.',
                  'Any cheaper option?',
                  'Could you show me a cheaper option, please?',
                ],
                correctIndex: 2,
              },
              {
                id: genId(),
                question: 'You accepted a new route and need proof. Best request?',
                options: [
                  'Give receipt.',
                  'Could I have a receipt and the updated reference number, please?',
                  'Reference now.',
                ],
                correctIndex: 1,
              },
            ],
          },
          answerKey: '1.a 2.c 3.b',
        },
      ],
    };
  }

  if (index === 3) {
    return {
      vocab: [
        { id: genId(), word: 'Clarify', meaning: 'To explain more clearly', example: 'Could you clarify that part?', category: 'review' },
        { id: genId(), word: 'Compare', meaning: 'To check differences', example: 'Let us compare two options.', category: 'review' },
        { id: genId(), word: 'Prefer', meaning: 'To like one choice more', example: 'I prefer the morning train.', category: 'review' },
        { id: genId(), word: 'Summarize', meaning: 'To say the main points briefly', example: 'Can you summarize the details?', category: 'review' },
        { id: genId(), word: 'Accurate', meaning: 'Correct and exact', example: 'Your answer is accurate.', category: 'feedback' },
        { id: genId(), word: 'Fluency', meaning: 'Speaking smoothly', example: 'Your fluency is improving.', category: 'feedback' },
        { id: genId(), word: 'Confidently', meaning: 'With confidence', example: 'Try to answer confidently.', category: 'feedback' },
      ],
      phrases: [
        { id: genId(), phrase: 'Could you clarify the second option?', translation: 'هل يمكنك توضيح الخيار الثاني؟', situation: 'Review conversation' },
        { id: genId(), phrase: 'I prefer this option because it is faster.', translation: 'أفضل هذا الخيار لأنه أسرع.', situation: 'Decision making' },
        { id: genId(), phrase: 'Let me summarize what we decided.', translation: 'دعني ألخص ما قررناه.', situation: 'Wrap-up' },
        { id: genId(), phrase: 'Can we review that once more?', translation: 'هل يمكننا مراجعة ذلك مرة أخرى؟', situation: 'Review request' },
      ],
      exercises: [
        {
          id: genId(),
          type: 'dialogue-builder',
          title: 'Review Conversation Order',
          instruction: 'Put the dialogue in the correct order.',
          content: {
            lines: [
              { id: genId(), speaker: 'student', text: 'Could you clarify the second option?', correctOrder: 2 },
              { id: genId(), speaker: 'teacher', text: 'Sure. Option two is cheaper but slower.', correctOrder: 3 },
              { id: genId(), speaker: 'student', text: 'I prefer option one because it is faster.', correctOrder: 4 },
              { id: genId(), speaker: 'teacher', text: 'Great choice. Can you summarize your decision?', correctOrder: 5 },
              { id: genId(), speaker: 'student', text: 'Option one is faster, so I choose it.', correctOrder: 6 },
              { id: genId(), speaker: 'teacher', text: 'Let us compare two travel options.', correctOrder: 1 },
            ],
          },
          answerKey: 'Correct order: 6,1,2,3,4,5',
        },
        {
          id: genId(),
          type: 'speaking-prompt',
          title: '2-Minute Review Simulation',
          instruction: 'Do a 2-minute simulation: ask to clarify, compare options, choose one, and summarize.',
          content: {
            prompt: 'You are choosing transport and hotel options. Ask, compare, decide, summarize.',
            duration: 120,
            suggestedPoints: ['Ask one clarification question', 'Compare two options', 'Give one reason', 'Summarize final choice'],
          },
          answerKey: 'Student uses all four steps with understandable English.',
        },
      ],
    };
  }

  return null;
}

function customizeUpcomingSession(
  baseSession: Session,
  index: number,
  definition: { title: string; goal: string; teacherNote: string; }
): Session {
  const focus = definition.title.replace(/^April Week \d:\s*/, '').replace('April 30: ', '');
  const firstWeekContent = buildFirstWeekContent(index);
  const vocabSource = firstWeekContent?.vocab ?? baseSession.vocab;

  const refreshedRoleplay = {
    ...baseSession.roleplay,
    title: `${focus} Roleplay`,
    situation: `${baseSession.roleplay.situation} Include one clarification question and one polite follow-up.`,
    script: [
      ...baseSession.roleplay.script,
      { speaker: 'student', line: 'Could you repeat that one more time, please?', cue: 'Clarify politely' },
      { speaker: 'teacher', line: 'Of course. Here are the details again.' },
    ],
  };

  return {
    ...baseSession,
    id: `session-${index + 1}`,
    number: index + 1,
    date: UPCOMING_APRIL_DATES[index],
    title: definition.title,
    goal: `${definition.goal} ${BEGINNER_GOAL_SUFFIX}`,
    vocab: localizeVocabularyToArabic(vocabSource),
    phrases: firstWeekContent?.phrases ?? baseSession.phrases,
    grammar: {
      ...baseSession.grammar,
      title: `${baseSession.grammar.title} + Functional Fluency`,
      explanation: `${baseSession.grammar.explanation} In this class, learners produce longer but clear beginner responses.`,
      examples: [...baseSession.grammar.examples, 'Could you repeat that, please? Then I can respond clearly.'],
    },
    lessonSteps: baseSession.lessonSteps.map((step, stepIndex) => ({
      ...step,
      description: `${step.description} Challenge ${stepIndex + 1}: answer with a full sentence and one extra detail.`,
    })),
    exercises: firstWeekContent?.exercises ?? makeExercisesSlightlyChallenging(baseSession, focus),
    homework: [
      {
        id: genId(),
        task: `Write 8 practical sentences for ${focus.toLowerCase()}.`,
        type: 'writing',
        details: 'Use polite language and at least 2 follow-up questions.',
      },
      {
        id: genId(),
        task: `Record a 2-minute ${focus.toLowerCase()} roleplay.`,
        type: 'recording',
        details: 'Speak clearly, confirm details, and close politely.',
      },
      {
        id: genId(),
        task: 'Review and quiz key vocabulary from this class.',
        type: 'quiz',
        details: 'Score at least 80% before the next lesson.',
      },
    ],
    roleplay: refreshedRoleplay,
    teacherNotes: `${definition.teacherNote} Add guided correction only after each speaking round.`,
  };
}

function createUpcomingAprilSessions(baseSessions: Session[]): Session[] {
  const sourceSessions = [
    baseSessions[12], // phone calls / reservations
    baseSessions[13], // small talk
    baseSessions[14], // travel problems
    baseSessions[15], // review simulation
    baseSessions[8],  // transport tickets
    baseSessions[9],  // shopping
    baseSessions[10], // restaurant
    baseSessions[11], // navigation
    baseSessions[4],  // ordering + paying
    baseSessions[5],  // directions + transport
    baseSessions[6],  // past simple stories
  ];

  const definitions = [
    {
      title: 'April Week 3: Phone Calls + Reservations',
      goal: 'Make clear beginner reservation calls and confirm key details confidently.',
      teacherNote: 'Practice call openings, confirmations, and polite closings.',
    },
    {
      title: 'April Week 3: Small Talk for Beginners',
      goal: 'Start and continue short social conversations with simple question patterns.',
      teacherNote: 'Use topic cards and speaking timers for fluency.',
    },
    {
      title: 'April Week 3: Solving Travel Problems',
      goal: 'Report simple travel problems and request practical solutions politely.',
      teacherNote: 'Coach structure: problem, detail, polite request.',
    },
    {
      title: 'April Week 3: Guided Roleplay Review',
      goal: 'Review recent lessons through guided beginner roleplays and feedback.',
      teacherNote: 'Prioritize confidence, then accuracy.',
    },
    {
      title: 'April Week 4: Transport + Ticket Desk',
      goal: 'Ask about routes, platforms, and tickets using complete beginner sentences.',
      teacherNote: 'Repeat key transport phrases before free speaking.',
    },
    {
      title: 'April Week 4: Shopping + Exchanges',
      goal: 'Handle sizes, payments, and exchanges in practical shopping situations.',
      teacherNote: 'Train useful chunks for requests and clarifications.',
    },
    {
      title: 'April Week 4: Restaurant Communication',
      goal: 'Order confidently, explain preferences, and solve order mistakes politely.',
      teacherNote: 'Use pair roleplay with rotating roles.',
    },
    {
      title: 'April Week 4: Navigation with Landmarks',
      goal: 'Give and follow clear directions using sequence words and landmarks.',
      teacherNote: 'Map drills first, then real conversation practice.',
    },
    {
      title: 'April Week 5: Food + Service Fluency',
      goal: 'Build smoother beginner restaurant conversations with longer responses.',
      teacherNote: 'Focus on natural pace and polite tone.',
    },
    {
      title: 'April Week 5: City Directions in Context',
      goal: 'Consolidate direction language through travel scenarios and map tasks.',
      teacherNote: 'Push follow-up questions after first answer.',
    },
    {
      title: 'April 30: End-of-Month Beginner Assessment',
      goal: 'Complete an end-of-month speaking review across all April travel topics.',
      teacherNote: 'Celebrate wins and define next-month targets.',
    },
  ];

  return sourceSessions.map((sourceSession, index) =>
    customizeUpcomingSession(sourceSession, index, definitions[index])
  );
}

function buildProgramSessions(seedSessions: Session[]): Session[] {
  const longerCoreTemplates = seedSessions.map((session) => makeLessonsLonger(session));
  return createUpcomingAprilSessions(longerCoreTemplates);
}

// Initial app data
export const initialAppData: AppData = {
  sessions: buildProgramSessions(sessions),
  submissions: [],
  progress: [],
  teacherPassword: DEFAULT_TEACHER_PASSWORD,
  studentPassword: DEFAULT_STUDENT_PASSWORD,
  favoritePhraseIds: [],
  phrasebook,
};
