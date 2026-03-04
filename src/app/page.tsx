'use client';

import { useState, useEffect } from 'react';
import { 
  useAppStore, 
  useNextSession, 
  useOverallProgress,
  useSessions,
  useProgress,
  useSubmissions,
} from '@/lib/store';
import { format, parseISO } from 'date-fns';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Separator } from '@/components/ui/separator';
import { 
  Plane, BookOpen, GraduationCap, Calendar, Clock, ChevronRight, 
  Check, Star, Heart, Play, ArrowLeft, Download, Upload,
  FileText, MessageSquare, Mic, Edit, Settings, Lock, Unlock,
  Volume2, RotateCcw, Award, Target, Zap, Menu, X
} from 'lucide-react';
import { Session, Exercise, VocabItem, PhraseItem } from '@/lib/types';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';

// ============ LANDING PAGE ============
function LandingPage() {
  const nextSession = useNextSession();
  const setCurrentView = useAppStore((state) => state.setCurrentView);
  
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100 flex flex-col">
      <main className="flex-1 flex flex-col items-center justify-center p-4 sm:p-8 safe-area-inset">
        <div className="text-center mb-6 sm:mb-8 w-full max-w-md">
          <div className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-teal-100 mb-4">
            <Plane className="w-8 h-8 sm:w-10 sm:h-10 text-teal-600" />
          </div>
          <h1 className="text-2xl sm:text-4xl font-bold text-slate-800 mb-2 px-2">Travel English Coaching</h1>
          <p className="text-sm sm:text-base text-slate-600 max-w-md mx-auto px-4">Practical English for traveling and real-life communication. One month to confidence.</p>
        </div>
        
        {/* Next Session Widget */}
        {nextSession && (
          <Card className="w-full max-w-md mb-6 border-teal-200 bg-teal-50/50 mx-4">
            <CardHeader className="pb-2 px-4 pt-4">
              <CardDescription className="text-teal-700 font-medium text-sm">Next Session</CardDescription>
              <CardTitle className="text-base sm:text-lg text-slate-800">{nextSession.title}</CardTitle>
            </CardHeader>
            <CardContent className="px-4 pb-4">
              <div className="flex items-center gap-2 text-sm text-slate-600">
                <Calendar className="w-4 h-4 flex-shrink-0" />
                <span className="text-xs sm:text-sm">{format(parseISO(nextSession.date), 'EEE, MMM d, yyyy')}</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-500 mt-2 line-clamp-2">{nextSession.goal}</p>
            </CardContent>
          </Card>
        )}
        
        {/* Entry Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full max-w-md px-4">
          <Button 
            size="lg" 
            className="flex-1 h-14 sm:h-16 text-base bg-teal-600 hover:bg-teal-700 touch-manipulation"
            onClick={() => setCurrentView('student')}
          >
            <GraduationCap className="w-5 h-5 sm:w-6 sm:h-6 mr-2" />
            Student Area
          </Button>
          <Button 
            size="lg" 
            variant="outline"
            className="flex-1 h-14 sm:h-16 text-base border-slate-300 touch-manipulation"
            onClick={() => setCurrentView('teacher')}
          >
            <BookOpen className="w-5 h-5 sm:w-6 sm:h-6 mr-2" />
            Teacher Area
          </Button>
        </div>
      </main>
      
      <footer className="p-4 text-center text-xs sm:text-sm text-slate-500 safe-area-inset-bottom">
        8 Sessions • Month 1 Program • Focus on Travel & Daily Communication
      </footer>
    </div>
  );
}

// ============ LOCK SCREEN ============
function LockScreen({ role, onBack }: { role: 'teacher' | 'student'; onBack: () => void }) {
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);
  const unlock = useAppStore((state) => state.unlock);
  
  const handleSubmit = () => {
    const success = unlock(password, role);
    if (!success) {
      setError(true);
      setTimeout(() => setError(false), 2000);
    }
  };
  
  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4 safe-area-inset">
      <Card className="w-full max-w-sm">
        <CardHeader className="text-center pt-6">
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-slate-100 mx-auto mb-3">
            <Lock className="w-7 h-7 text-slate-600" />
          </div>
          <CardTitle className="text-xl">{role === 'teacher' ? 'Teacher Access' : 'Student Access'}</CardTitle>
          <CardDescription>Enter password to continue</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4 px-4 pb-6">
          <div className="space-y-2">
            <Label htmlFor="password" className="text-sm">Password</Label>
            <Input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSubmit()}
              placeholder="Enter password"
              className={`h-12 text-base ${error ? 'border-red-300 focus-visible:ring-red-400' : ''}`}
              autoComplete="off"
            />
            {error && <p className="text-sm text-red-500">Incorrect password</p>}
          </div>
          <div className="flex gap-3 pt-2">
            <Button variant="outline" onClick={onBack} className="flex-1 h-12 touch-manipulation">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back
            </Button>
            <Button onClick={handleSubmit} className="flex-1 h-12 bg-teal-600 hover:bg-teal-700 touch-manipulation">
              <Unlock className="w-4 h-4 mr-2" />
              Unlock
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

// ============ MOBILE BOTTOM NAVIGATION ============
function MobileBottomNav({ 
  activeTab, 
  setActiveTab, 
  role,
}: { 
  activeTab: string; 
  setActiveTab: (tab: string) => void;
  role: 'teacher' | 'student';
}) {
  const studentTabs = [
    { id: 'plan', label: 'Plan', icon: Calendar },
    { id: 'phrasebook', label: 'Phrases', icon: MessageSquare },
    { id: 'practice', label: 'Practice', icon: Zap },
    { id: 'daily', label: 'Daily', icon: Clock },
    { id: 'progress', label: 'Progress', icon: Award },
  ];
  
  const teacherTabs = [
    { id: 'dashboard', label: 'Dashboard', icon: Calendar },
    { id: 'sessions', label: 'Sessions', icon: FileText },
    { id: 'phrasebook', label: 'Phrases', icon: MessageSquare },
    { id: 'resources', label: 'Resources', icon: BookOpen },
    { id: 'settings', label: 'Settings', icon: Settings },
  ];
  
  const tabs = role === 'teacher' ? teacherTabs : studentTabs;
  
  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-slate-200 z-50 safe-area-inset-bottom">
      <div className="flex justify-around items-center h-16 max-w-lg mx-auto px-1">
        {tabs.map((tab) => {
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex flex-col items-center justify-center flex-1 h-full py-2 px-1 touch-manipulation transition-colors ${
                isActive ? 'text-teal-600' : 'text-slate-500'
              }`}
            >
              <tab.icon className={`w-5 h-5 mb-1 ${isActive ? 'stroke-[2.5px]' : ''}`} />
              <span className={`text-[10px] sm:text-xs ${isActive ? 'font-semibold' : ''}`}>{tab.label}</span>
            </button>
          );
        })}
      </div>
    </nav>
  );
}

// ============ TOP HEADER ============
function TopHeader({ 
  role,
  onLogout,
  title,
  onBack
}: { 
  role: 'teacher' | 'student';
  onLogout: () => void;
  title?: string;
  onBack?: () => void;
}) {
  return (
    <header className="sticky top-0 z-40 bg-white border-b border-slate-200 safe-area-inset-top">
      <div className="flex items-center justify-between h-14 px-4 max-w-4xl mx-auto">
        {onBack ? (
          <Button variant="ghost" size="sm" onClick={onBack} className="touch-manipulation">
            <ArrowLeft className="w-5 h-5 mr-1" />
            <span className="hidden sm:inline">Back</span>
          </Button>
        ) : (
          <div className="flex items-center gap-2">
            <Plane className="w-5 h-5 text-teal-600" />
            <span className="font-semibold text-slate-800 hidden sm:inline">Travel English</span>
          </div>
        )}
        
        {title && <h1 className="font-semibold text-slate-800 text-sm sm:text-base truncate max-w-[150px] sm:max-w-none">{title}</h1>}
        
        <div className="flex items-center gap-2">
          <Badge variant="outline" className="text-xs hidden sm:inline-flex">
            {role === 'teacher' ? 'Teacher' : 'Student'}
          </Badge>
          <Button variant="ghost" size="sm" onClick={onLogout} className="touch-manipulation">
            <Lock className="w-4 h-4 sm:mr-1" />
            <span className="hidden sm:inline">Lock</span>
          </Button>
        </div>
      </div>
    </header>
  );
}

// ============ STUDENT PLAN PAGE ============
function StudentPlanPage({ onSelectSession }: { onSelectSession: (session: Session) => void }) {
  const sessions = useAppStore((state) => state.sessions);
  const progress = useAppStore((state) => state.progress);
  const nextSession = useNextSession();
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  
  return (
    <div className="p-3 sm:p-4 space-y-4 sm:space-y-6 pb-20">
      {/* Month Header */}
      <div className="text-center py-2">
        <h2 className="text-xl sm:text-2xl font-bold text-slate-800">Month 1 Plan</h2>
        <p className="text-sm text-slate-600">March 2026 • 8 Sessions</p>
      </div>
      
      {/* Sessions Grid */}
      <div className="grid gap-2 sm:gap-3">
        {sessions.map((session) => {
          const sessionDate = parseISO(session.date);
          const isPast = sessionDate < today;
          const isToday = sessionDate.toDateString() === today.toDateString();
          const isNext = nextSession?.id === session.id;
          const sessionProgress = progress.find(p => p.sessionId === session.id);
          
          return (
            <Card 
              key={session.id}
              className={`cursor-pointer transition-all active:scale-[0.98] touch-manipulation ${
                isNext ? 'border-teal-400 bg-teal-50/50' : isPast ? 'opacity-75' : ''
              }`}
              onClick={() => onSelectSession(session)}
            >
              <CardContent className="p-3 sm:p-4">
                <div className="flex items-start justify-between gap-2">
                  <div className="flex items-start gap-2 sm:gap-3 flex-1 min-w-0">
                    <div className={`w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 ${
                      sessionProgress?.attended 
                        ? 'bg-green-100 text-green-700' 
                        : isNext 
                          ? 'bg-teal-100 text-teal-700' 
                          : 'bg-slate-100 text-slate-600'
                    }`}>
                      {sessionProgress?.attended ? <Check className="w-4 h-4 sm:w-5 sm:h-5" /> : session.number}
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-semibold text-slate-800 text-sm sm:text-base truncate">{session.title}</h3>
                      <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-500 mt-0.5 flex-wrap">
                        <Calendar className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                        <span>{format(sessionDate, 'EEE, MMM d')}</span>
                        {isNext && (
                          <Badge variant="outline" className="text-[10px] bg-teal-100 border-teal-300 text-teal-700 px-1.5 py-0">
                            Next
                          </Badge>
                        )}
                        {isToday && (
                          <Badge variant="outline" className="text-[10px] bg-amber-100 border-amber-300 text-amber-700 px-1.5 py-0">
                            Today
                          </Badge>
                        )}
                      </div>
                    </div>
                  </div>
                  <ChevronRight className="w-5 h-5 text-slate-400 flex-shrink-0" />
                </div>
                <p className="text-xs sm:text-sm text-slate-600 mt-2 line-clamp-1">{session.goal}</p>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
}

// ============ SESSION DETAIL PAGE ============
function SessionDetailPage({ 
  session, 
  onBack,
  isTeacher 
}: { 
  session: Session; 
  onBack: () => void;
  isTeacher: boolean;
}) {
  const [activeSection, setActiveSection] = useState('overview');
  const progress = useAppStore((state) => state.progress);
  const updateProgress = useAppStore((state) => state.updateProgress);
  const submissions = useAppStore((state) => state.submissions);
  const addSubmission = useAppStore((state) => state.addSubmission);
  
  const sessionProgress = progress.find(p => p.sessionId === session.id);
  const submission = submissions.find(s => s.sessionId === session.id);
  
  const sections = [
    { id: 'overview', label: 'Overview' },
    { id: 'vocab', label: 'Vocab' },
    { id: 'grammar', label: 'Grammar' },
    { id: 'exercises', label: 'Exercises' },
    { id: 'roleplay', label: 'Roleplay' },
    { id: 'homework', label: 'Homework' },
  ];
  
  if (isTeacher) {
    sections.push({ id: 'answers', label: 'Answers' });
    sections.push({ id: 'notes', label: 'Notes' });
  }
  
  return (
    <div className="pb-24">
      {/* Section Tabs - Scrollable */}
      <div className="sticky top-[56px] z-30 bg-white border-b border-slate-200">
        <div className="flex gap-1 px-3 py-2 overflow-x-auto scrollbar-hide">
          {sections.map((section) => (
            <Button
              key={section.id}
              variant={activeSection === section.id ? 'default' : 'ghost'}
              size="sm"
              onClick={() => setActiveSection(section.id)}
              className={`min-w-fit px-3 h-9 text-xs sm:text-sm touch-manipulation ${
                activeSection === section.id ? 'bg-teal-600 hover:bg-teal-700' : ''
              }`}
            >
              {section.label}
            </Button>
          ))}
        </div>
      </div>
      
      <div className="p-3 sm:p-4">
        {/* Overview */}
        {activeSection === 'overview' && (
          <div className="space-y-3 sm:space-y-4">
            <Card>
              <CardHeader className="pb-2 px-3 sm:px-4 pt-3 sm:pt-4">
                <CardTitle className="text-base sm:text-lg">Session Goal</CardTitle>
              </CardHeader>
              <CardContent className="px-3 sm:px-4 pb-3 sm:pb-4">
                <p className="text-sm sm:text-base text-slate-700">{session.goal}</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="pb-2 px-3 sm:px-4 pt-3 sm:pt-4">
                <CardTitle className="text-base sm:text-lg">Lesson Plan</CardTitle>
              </CardHeader>
              <CardContent className="px-3 sm:px-4 pb-3 sm:pb-4">
                <div className="space-y-2">
                  {session.lessonSteps.map((step, index) => (
                    <div key={step.id} className="flex items-center gap-2 sm:gap-3 p-2 sm:p-2.5 rounded-lg bg-slate-50">
                      <div className="w-6 h-6 rounded-full bg-teal-100 text-teal-700 flex items-center justify-center text-xs font-medium flex-shrink-0">
                        {index + 1}
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="font-medium text-slate-800 text-sm">{step.title}</p>
                        <p className="text-xs text-slate-500 truncate">{step.description}</p>
                      </div>
                      <Badge variant="outline" className="text-[10px] flex-shrink-0">{step.duration}min</Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
            
            {!isTeacher && (
              <Card>
                <CardHeader className="pb-2 px-3 sm:px-4 pt-3 sm:pt-4">
                  <CardTitle className="text-base sm:text-lg">My Progress</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 px-3 sm:px-4 pb-3 sm:pb-4">
                  <div className="flex items-center gap-3 py-1">
                    <Checkbox 
                      checked={sessionProgress?.attended || false}
                      onCheckedChange={(checked) => updateProgress(session.id, { attended: !!checked })}
                      className="touch-manipulation"
                    />
                    <span className="text-sm">Attended this session</span>
                  </div>
                  <div className="flex items-center gap-3 py-1">
                    <Checkbox 
                      checked={sessionProgress?.homeworkCompleted || false}
                      onCheckedChange={(checked) => updateProgress(session.id, { homeworkCompleted: !!checked })}
                      className="touch-manipulation"
                    />
                    <span className="text-sm">Completed homework</span>
                  </div>
                  <div className="space-y-2 pt-1">
                    <Label className="text-sm">Confidence Rating</Label>
                    <div className="flex gap-1">
                      {[1, 2, 3, 4, 5].map((rating) => (
                        <Button
                          key={rating}
                          variant={sessionProgress?.confidenceRating === rating ? 'default' : 'outline'}
                          size="sm"
                          onClick={() => updateProgress(session.id, { confidenceRating: rating })}
                          className={`w-10 h-10 touch-manipulation ${sessionProgress?.confidenceRating === rating ? 'bg-teal-600' : ''}`}
                        >
                          <Star className="w-4 h-4" />
                        </Button>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>
        )}
        
        {/* Vocabulary */}
        {activeSection === 'vocab' && (
          <div className="space-y-3 sm:space-y-4">
            <Card>
              <CardHeader className="pb-2 px-3 sm:px-4 pt-3 sm:pt-4">
                <CardTitle className="text-base sm:text-lg">Key Vocabulary</CardTitle>
              </CardHeader>
              <CardContent className="px-3 sm:px-4 pb-3 sm:pb-4">
                <div className="grid gap-2">
                  {session.vocab.map((item) => (
                    <div key={item.id} className="flex items-start gap-2 sm:gap-3 p-2.5 sm:p-3 rounded-lg bg-slate-50">
                      <div className="flex-1">
                        <p className="font-medium text-slate-800 text-sm sm:text-base">{item.word}</p>
                        <p className="text-xs sm:text-sm text-slate-600">{item.meaning}</p>
                        {item.example && (
                          <p className="text-xs text-teal-600 mt-1 italic">&quot;{item.example}&quot;</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="pb-2 px-3 sm:px-4 pt-3 sm:pt-4">
                <CardTitle className="text-base sm:text-lg">Key Phrases</CardTitle>
              </CardHeader>
              <CardContent className="px-3 sm:px-4 pb-3 sm:pb-4">
                <div className="grid gap-2">
                  {session.phrases.map((item) => (
                    <div key={item.id} className="flex items-start gap-2 sm:gap-3 p-2.5 sm:p-3 rounded-lg bg-slate-50">
                      <div className="flex-1">
                        <p className="font-medium text-slate-800 text-sm sm:text-base">{item.phrase}</p>
                        <p className="text-xs sm:text-sm text-slate-600">{item.translation}</p>
                        {item.situation && (
                          <Badge variant="outline" className="mt-1 text-[10px]">{item.situation}</Badge>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        )}
        
        {/* Grammar */}
        {activeSection === 'grammar' && (
          <Card>
            <CardHeader className="px-3 sm:px-4 pt-3 sm:pt-4">
              <CardTitle className="text-base sm:text-lg">{session.grammar.title}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 sm:space-y-4 px-3 sm:px-4 pb-3 sm:pb-4">
              <p className="text-sm sm:text-base text-slate-700">{session.grammar.explanation}</p>
              <div className="space-y-2">
                <h4 className="font-medium text-slate-800 text-sm">Examples:</h4>
                {session.grammar.examples.map((example, i) => (
                  <div key={i} className="p-2 sm:p-2.5 rounded bg-teal-50 text-teal-800 text-sm">
                    {example}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        )}
        
        {/* Exercises */}
        {activeSection === 'exercises' && (
          <div className="space-y-3 sm:space-y-4">
            {session.exercises.map((exercise) => (
              <ExerciseCard key={exercise.id} exercise={exercise} isTeacher={isTeacher} />
            ))}
          </div>
        )}
        
        {/* Roleplay */}
        {activeSection === 'roleplay' && (
          <Card>
            <CardHeader className="px-3 sm:px-4 pt-3 sm:pt-4">
              <CardTitle className="text-base sm:text-lg">{session.roleplay.title}</CardTitle>
              <CardDescription className="text-xs sm:text-sm">{session.roleplay.situation}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3 sm:space-y-4 px-3 sm:px-4 pb-3 sm:pb-4">
              <div className="flex gap-2 flex-wrap">
                <Badge variant="outline" className="bg-blue-50 text-[10px] sm:text-xs">You: {session.roleplay.studentRole}</Badge>
                <Badge variant="outline" className="bg-purple-50 text-[10px] sm:text-xs">Teacher: {session.roleplay.teacherRole}</Badge>
              </div>
              <Separator />
              <div className="space-y-2 sm:space-y-3">
                {session.roleplay.script.map((line, index) => (
                  <div 
                    key={index}
                    className={`p-2 sm:p-3 rounded-lg text-sm ${
                      line.speaker === 'student' 
                        ? 'bg-blue-50 ml-0 mr-2 sm:mr-4' 
                        : 'bg-purple-50 ml-2 sm:ml-4 mr-0'
                    }`}
                  >
                    <div className="flex items-center gap-2 mb-1 flex-wrap">
                      <Badge variant="outline" className="text-[10px]">
                        {line.speaker === 'student' ? 'You' : 'Teacher'}
                      </Badge>
                      {line.cue && (
                        <span className="text-[10px] text-slate-500 italic">({line.cue})</span>
                      )}
                    </div>
                    <p className="text-slate-800">{line.line}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        )}
        
        {/* Homework */}
        {activeSection === 'homework' && (
          <div className="space-y-3 sm:space-y-4">
            <Card>
              <CardHeader className="pb-2 px-3 sm:px-4 pt-3 sm:pt-4">
                <CardTitle className="text-base sm:text-lg">Homework Tasks</CardTitle>
              </CardHeader>
              <CardContent className="px-3 sm:px-4 pb-3 sm:pb-4">
                <div className="space-y-2 sm:space-y-3">
                  {session.homework.map((item) => (
                    <div key={item.id} className="flex items-start gap-2 sm:gap-3 p-2.5 sm:p-3 rounded-lg bg-slate-50">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 flex-wrap">
                          <p className="font-medium text-slate-800 text-sm">{item.task}</p>
                          <Badge variant="outline" className="text-[10px] capitalize">{item.type}</Badge>
                        </div>
                        {item.details && (
                          <p className="text-xs text-slate-500 mt-1">{item.details}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
            
            {!isTeacher && (
              <HomeworkSubmission 
                sessionId={session.id} 
                submission={submission}
                onSubmit={addSubmission}
              />
            )}
          </div>
        )}
        
        {/* Answer Key (Teacher Only) */}
        {activeSection === 'answers' && isTeacher && (
          <Card>
            <CardHeader className="px-3 sm:px-4 pt-3 sm:pt-4">
              <CardTitle className="text-base sm:text-lg">Answer Key</CardTitle>
              <CardDescription className="text-xs sm:text-sm">For teacher reference only</CardDescription>
            </CardHeader>
            <CardContent className="px-3 sm:px-4 pb-3 sm:pb-4">
              <pre className="whitespace-pre-wrap text-xs sm:text-sm bg-slate-50 p-3 sm:p-4 rounded-lg overflow-x-auto">
                {session.answerKey}
              </pre>
            </CardContent>
          </Card>
        )}
        
        {/* Teacher Notes */}
        {activeSection === 'notes' && isTeacher && (
          <TeacherNotesEditor sessionId={session.id} initialNotes={session.teacherNotes} />
        )}
      </div>
    </div>
  );
}

// ============ EXERCISE CARD ============
function ExerciseCard({ exercise, isTeacher }: { exercise: Exercise; isTeacher: boolean }) {
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [showAnswers, setShowAnswers] = useState(false);
  const [matches, setMatches] = useState<Record<string, string>>({});
  const [dialogueOrder, setDialogueOrder] = useState<string[]>([]);
  
  const renderExercise = () => {
    switch (exercise.type) {
      case 'fill-blank':
        return (
          <div className="space-y-2 sm:space-y-3">
            {exercise.content.sentences?.map((sentence) => (
              <div key={sentence.id} className="flex items-center gap-2 flex-wrap text-sm">
                <span className="text-slate-700">{sentence.text.replace('___', '_____')}</span>
                <Input
                  className="w-20 sm:w-24 h-9 text-sm"
                  value={answers[sentence.id] || ''}
                  onChange={(e) => setAnswers({ ...answers, [sentence.id]: e.target.value })}
                  placeholder="?"
                />
                {showAnswers && (
                  <span className="text-green-600 font-medium text-sm">{sentence.answer}</span>
                )}
              </div>
            ))}
          </div>
        );
        
      case 'multiple-choice':
        return (
          <div className="space-y-3 sm:space-y-4">
            {exercise.content.questions?.map((question, qIndex) => (
              <div key={question.id} className="space-y-2">
                <p className="font-medium text-slate-800 text-sm sm:text-base">{qIndex + 1}. {question.question}</p>
                <div className="grid gap-1.5 sm:gap-2">
                  {question.options.map((option, oIndex) => (
                    <Button
                      key={oIndex}
                      variant={answers[question.id] === String(oIndex) ? 'default' : 'outline'}
                      className={`justify-start h-auto py-2.5 sm:py-3 px-3 text-sm touch-manipulation ${
                        answers[question.id] === String(oIndex) ? 'bg-teal-600' : ''
                      } ${showAnswers && oIndex === question.correctIndex ? 'border-green-500 bg-green-50' : ''}`}
                      onClick={() => setAnswers({ ...answers, [question.id]: String(oIndex) })}
                    >
                      <span className="mr-2">{String.fromCharCode(97 + oIndex)})</span>
                      <span className="text-left">{option}</span>
                    </Button>
                  ))}
                </div>
              </div>
            ))}
          </div>
        );
        
      case 'matching':
        const leftItems = exercise.content.pairs?.map(p => ({ id: p.id, text: p.left })) || [];
        const rightItems = exercise.content.pairs?.map(p => ({ id: p.id, text: p.right })) || [];
        const shuffledRight = [...rightItems].sort(() => Math.random() - 0.5);
        
        return (
          <div className="space-y-2">
            {leftItems.map((left) => (
              <div key={left.id} className="flex items-center gap-1 sm:gap-2 text-xs sm:text-sm">
                <div className="flex-1 p-2 bg-blue-50 rounded text-xs sm:text-sm truncate">{left.text}</div>
                <span className="text-slate-400">↔</span>
                <select
                  className="flex-1 p-2 bg-purple-50 rounded text-xs sm:text-sm border-0 bg-transparent"
                  value={matches[left.id] || ''}
                  onChange={(e) => setMatches({ ...matches, [left.id]: e.target.value })}
                >
                  <option value="">Select...</option>
                  {shuffledRight.map((right) => (
                    <option key={right.id} value={right.id}>{right.text}</option>
                  ))}
                </select>
              </div>
            ))}
          </div>
        );
        
      case 'dialogue-builder':
        const lines = exercise.content.lines || [];
        if (dialogueOrder.length === 0) {
          setDialogueOrder(lines.map(l => l.id).sort(() => Math.random() - 0.5));
        }
        
        return (
          <div className="space-y-2">
            <p className="text-xs sm:text-sm text-slate-600 mb-3">Tap to move lines up:</p>
            {dialogueOrder.map((id, index) => {
              const line = lines.find(l => l.id === id);
              if (!line) return null;
              return (
                <div 
                  key={id}
                  className="flex items-center gap-2 p-2.5 sm:p-3 bg-slate-50 rounded-lg cursor-pointer active:bg-slate-100 touch-manipulation text-sm"
                  onClick={() => {
                    const newOrder = [...dialogueOrder];
                    if (index > 0) {
                      [newOrder[index - 1], newOrder[index]] = [newOrder[index], newOrder[index - 1]];
                    }
                    setDialogueOrder(newOrder);
                  }}
                >
                  <div className="w-6 h-6 rounded bg-teal-100 text-teal-700 flex items-center justify-center text-xs font-medium flex-shrink-0">
                    {index + 1}
                  </div>
                  <Badge variant="outline" className="text-[10px] flex-shrink-0">{line.speaker}</Badge>
                  <span className="text-slate-700 truncate">{line.text}</span>
                </div>
              );
            })}
            {showAnswers && (
              <div className="mt-4 p-3 bg-green-50 rounded-lg">
                <p className="text-xs font-medium text-green-800 mb-2">Correct Order:</p>
                {lines.sort((a, b) => a.correctOrder - b.correctOrder).map((line, i) => (
                  <div key={line.id} className="text-xs text-green-700">
                    {i + 1}. [{line.speaker}] {line.text}
                  </div>
                ))}
              </div>
            )}
          </div>
        );
        
      case 'speaking-prompt':
        const content = exercise.content as { prompt: string; duration: number; suggestedPoints?: string[] };
        return (
          <div className="space-y-3 sm:space-y-4">
            <div className="p-3 sm:p-4 bg-teal-50 rounded-lg">
              <p className="font-medium text-teal-800 mb-2 text-sm sm:text-base">{content.prompt}</p>
              {content.suggestedPoints && (
                <ul className="text-xs sm:text-sm text-teal-700 space-y-1">
                  {content.suggestedPoints.map((point, i) => (
                    <li key={i}>• {point}</li>
                  ))}
                </ul>
              )}
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-slate-500" />
              <span className="text-xs sm:text-sm text-slate-600">Suggested time: {content.duration} seconds</span>
            </div>
          </div>
        );
        
      case 'roleplay-card':
        const roleplayContent = exercise.content as {
          situation: string;
          studentRole: string;
          teacherRole: string;
          studentLines: Array<{ id: string; prompt: string; suggestedResponse?: string }>;
          teacherLines: Array<{ id: string; line: string }>;
        };
        
        return (
          <div className="space-y-3 sm:space-y-4">
            <p className="text-sm text-slate-600">{roleplayContent.situation}</p>
            <div className="flex gap-2 flex-wrap">
              <Badge className="bg-blue-100 text-blue-800 text-[10px] sm:text-xs">Student: {roleplayContent.studentRole}</Badge>
              <Badge className="bg-purple-100 text-purple-800 text-[10px] sm:text-xs">Teacher: {roleplayContent.teacherRole}</Badge>
            </div>
            
            <div className="grid sm:grid-cols-2 gap-3 sm:gap-4">
              <div className="space-y-2">
                <h4 className="font-medium text-blue-800 text-sm">Student Lines</h4>
                {roleplayContent.studentLines.map((line) => (
                  <div key={line.id} className="p-2 bg-blue-50 rounded">
                    <p className="text-xs sm:text-sm font-medium text-blue-700">{line.prompt}</p>
                    {showAnswers && line.suggestedResponse && (
                      <p className="text-xs text-blue-600 mt-1">→ {line.suggestedResponse}</p>
                    )}
                  </div>
                ))}
              </div>
              <div className="space-y-2">
                <h4 className="font-medium text-purple-800 text-sm">Teacher Lines</h4>
                {roleplayContent.teacherLines.map((line) => (
                  <div key={line.id} className="p-2 bg-purple-50 rounded">
                    <p className="text-xs sm:text-sm text-purple-700">{line.line}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );
        
      default:
        return <p>Unknown exercise type</p>;
    }
  };
  
  return (
    <Card>
      <CardHeader className="pb-2 px-3 sm:px-4 pt-3 sm:pt-4">
        <CardTitle className="text-base sm:text-lg">{exercise.title}</CardTitle>
        <CardDescription className="text-xs sm:text-sm">{exercise.instruction}</CardDescription>
      </CardHeader>
      <CardContent className="space-y-3 sm:space-y-4 px-3 sm:px-4 pb-3 sm:pb-4">
        {renderExercise()}
        <div className="flex gap-2 pt-2">
          {(isTeacher || exercise.type === 'speaking-prompt') && (
            <Button 
              variant="outline" 
              size="sm"
              onClick={() => setShowAnswers(!showAnswers)}
              className="touch-manipulation h-9"
            >
              {showAnswers ? 'Hide' : 'Show'} {isTeacher ? 'Answers' : 'Suggestions'}
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  );
}

// ============ HOMEWORK SUBMISSION ============
function HomeworkSubmission({ 
  sessionId, 
  submission,
  onSubmit 
}: { 
  sessionId: string; 
  submission?: { textAnswers: Record<string, string>; audioUrl?: string; selfRating: number };
  onSubmit: (submission: { sessionId: string; textAnswers: Record<string, string>; audioUrl?: string; selfRating: number; timestamp: string }) => void;
}) {
  const [textAnswers, setTextAnswers] = useState(submission?.textAnswers || {});
  const [audioUrl, setAudioUrl] = useState(submission?.audioUrl || '');
  const [selfRating, setSelfRating] = useState(submission?.selfRating || 3);
  
  const handleSubmit = () => {
    onSubmit({
      sessionId,
      textAnswers,
      audioUrl: audioUrl || undefined,
      selfRating,
      timestamp: new Date().toISOString(),
    });
  };
  
  return (
    <Card>
      <CardHeader className="pb-2 px-3 sm:px-4 pt-3 sm:pt-4">
        <CardTitle className="text-base sm:text-lg">Submit Homework</CardTitle>
      </CardHeader>
      <CardContent className="space-y-3 sm:space-y-4 px-3 sm:px-4 pb-3 sm:pb-4">
        <div className="space-y-2">
          <Label className="text-sm">Your Answers / Notes</Label>
          <Textarea
            placeholder="Paste your answers or notes here..."
            value={textAnswers['main'] || ''}
            onChange={(e) => setTextAnswers({ ...textAnswers, main: e.target.value })}
            rows={4}
            className="text-sm"
          />
        </div>
        
        <div className="space-y-2">
          <Label className="text-sm">Audio Link (optional)</Label>
          <Input
            placeholder="Paste a link to your audio recording..."
            value={audioUrl}
            onChange={(e) => setAudioUrl(e.target.value)}
            className="h-10 text-sm"
          />
        </div>
        
        <div className="space-y-2">
          <Label className="text-sm">Self-Rating</Label>
          <div className="flex gap-1">
            {[1, 2, 3, 4, 5].map((rating) => (
              <Button
                key={rating}
                variant={selfRating === rating ? 'default' : 'outline'}
                size="sm"
                onClick={() => setSelfRating(rating)}
                className={`w-10 h-10 touch-manipulation ${selfRating === rating ? 'bg-teal-600' : ''}`}
              >
                {rating}
              </Button>
            ))}
          </div>
        </div>
        
        <Button onClick={handleSubmit} className="w-full h-12 bg-teal-600 hover:bg-teal-700 touch-manipulation">
          <Check className="w-4 h-4 mr-2" />
          Submit Homework
        </Button>
      </CardContent>
    </Card>
  );
}

// ============ TEACHER NOTES EDITOR ============
function TeacherNotesEditor({ sessionId, initialNotes }: { sessionId: string; initialNotes: string }) {
  const [notes, setNotes] = useState(initialNotes);
  const updateSession = useAppStore((state) => state.updateSession);
  const [saved, setSaved] = useState(false);
  
  const handleSave = () => {
    updateSession(sessionId, { teacherNotes: notes });
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };
  
  return (
    <Card>
      <CardHeader className="pb-2 px-3 sm:px-4 pt-3 sm:pt-4">
        <CardTitle className="text-base sm:text-lg">Private Teacher Notes</CardTitle>
        <CardDescription className="text-xs sm:text-sm">Only visible to you</CardDescription>
      </CardHeader>
      <CardContent className="space-y-3 sm:space-y-4 px-3 sm:px-4 pb-3 sm:pb-4">
        <Textarea
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
          rows={8}
          placeholder="Add your private notes for this session..."
          className="text-sm"
        />
        <Button onClick={handleSave} className="h-11 bg-teal-600 hover:bg-teal-700 touch-manipulation">
          {saved ? <Check className="w-4 h-4 mr-2" /> : <Edit className="w-4 h-4 mr-2" />}
          {saved ? 'Saved!' : 'Save Notes'}
        </Button>
      </CardContent>
    </Card>
  );
}

// ============ PROGRESS PAGE ============
function ProgressPage() {
  const overallProgress = useOverallProgress();
  const sessions = useSessions();
  const progress = useProgress();
  
  return (
    <div className="p-3 sm:p-4 space-y-4 sm:space-y-6 pb-20">
      <h2 className="text-xl sm:text-2xl font-bold text-slate-800">My Progress</h2>
      
      {/* Stats Cards */}
      <div className="grid grid-cols-2 gap-2 sm:gap-3">
        <Card>
          <CardContent className="p-3 sm:p-4 text-center">
            <div className="text-2xl sm:text-3xl font-bold text-teal-600">{overallProgress.attendedSessions}</div>
            <div className="text-xs sm:text-sm text-slate-600">Sessions Attended</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-3 sm:p-4 text-center">
            <div className="text-2xl sm:text-3xl font-bold text-teal-600">{overallProgress.completedHomework}</div>
            <div className="text-xs sm:text-sm text-slate-600">Homework Done</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-3 sm:p-4 text-center">
            <div className="text-2xl sm:text-3xl font-bold text-teal-600">{overallProgress.streak}</div>
            <div className="text-xs sm:text-sm text-slate-600">Session Streak</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-3 sm:p-4 text-center">
            <div className="text-2xl sm:text-3xl font-bold text-teal-600">{overallProgress.avgConfidence}/5</div>
            <div className="text-xs sm:text-sm text-slate-600">Avg Confidence</div>
          </CardContent>
        </Card>
      </div>
      
      {/* Completion Progress */}
      <Card>
        <CardHeader className="pb-2 px-3 sm:px-4 pt-3 sm:pt-4">
          <CardTitle className="text-base sm:text-lg">Month Progress</CardTitle>
        </CardHeader>
        <CardContent className="px-3 sm:px-4 pb-3 sm:pb-4">
          <div className="space-y-2">
            <div className="flex justify-between text-xs sm:text-sm">
              <span className="text-slate-600">Completion</span>
              <span className="font-medium">{overallProgress.completionPercentage}%</span>
            </div>
            <Progress value={overallProgress.completionPercentage} className="h-2.5 sm:h-3" />
          </div>
        </CardContent>
      </Card>
      
      {/* Session Progress List */}
      <Card>
        <CardHeader className="pb-2 px-3 sm:px-4 pt-3 sm:pt-4">
          <CardTitle className="text-base sm:text-lg">Session Details</CardTitle>
        </CardHeader>
        <CardContent className="px-3 sm:px-4 pb-3 sm:pb-4">
          <div className="space-y-2">
            {sessions.map((session) => {
              const sessionProgress = progress.find(p => p.sessionId === session.id);
              return (
                <div key={session.id} className="flex items-center gap-2 sm:gap-3 p-2 rounded-lg bg-slate-50">
                  <div className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                    sessionProgress?.attended ? 'bg-green-100 text-green-600' : 'bg-slate-200 text-slate-500'
                  }`}>
                    {sessionProgress?.attended ? <Check className="w-3.5 h-3.5 sm:w-4 sm:h-4" /> : <span className="text-xs">{session.number}</span>}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs sm:text-sm font-medium text-slate-800 truncate">{session.title}</p>
                    <p className="text-[10px] sm:text-xs text-slate-500">{format(parseISO(session.date), 'MMM d')}</p>
                  </div>
                  <div className="flex items-center gap-1 sm:gap-2 flex-shrink-0">
                    {sessionProgress?.homeworkCompleted && (
                      <Badge variant="outline" className="text-[10px] bg-green-50 border-green-200 px-1.5">
                        <Check className="w-2.5 h-2.5 mr-0.5" />HW
                      </Badge>
                    )}
                    {sessionProgress?.confidenceRating ? (
                      <div className="flex">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <Star 
                            key={i}
                            className={`w-2.5 h-2.5 sm:w-3 sm:h-3 ${i < sessionProgress.confidenceRating ? 'text-amber-400 fill-amber-400' : 'text-slate-300'}`}
                          />
                        ))}
                      </div>
                    ) : null}
                  </div>
                </div>
              );
            })}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

// ============ DAILY ROUTINE PAGE ============
function DailyRoutinePage() {
  const sessions = useSessions();
  const [activeStep, setActiveStep] = useState<string | null>(null);
  const [timer, setTimer] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  
  // Timer effect
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isRunning) {
      interval = setInterval(() => {
        setTimer(t => t + 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isRunning]);
  
  // Get random content for daily practice
  const allVocab = sessions.flatMap(s => s.vocab);
  const allPhrases = sessions.flatMap(s => s.phrases);
  const randomVocab = [...allVocab].sort(() => Math.random() - 0.5).slice(0, 5);
  const randomPhrases = [...allPhrases].sort(() => Math.random() - 0.5).slice(0, 3);
  
  const steps = [
    { id: 'listening', title: 'Listening', duration: 5, icon: Volume2, description: 'Watch a short video' },
    { id: 'shadowing', title: 'Shadowing', duration: 3, icon: Volume2, description: 'Repeat phrases aloud' },
    { id: 'speaking', title: 'Speaking', duration: 2, icon: Mic, description: 'Answer a prompt' },
  ];
  
  const listeningSuggestions = [
    { title: 'Travel English for Beginners', type: 'Video', duration: '5-10 min' },
    { title: '6 Minute English - BBC', type: 'Audio', duration: '6 min' },
    { title: 'Ordering Food in English', type: 'Video', duration: '5 min' },
    { title: 'Airport English Conversation', type: 'Video', duration: '8 min' },
  ];
  
  const speakingPrompts = [
    'Describe what you did yesterday.',
    'Tell me about your favorite travel destination.',
    'What would you say at a hotel check-in?',
    'How would you order food at a restaurant?',
    'Introduce yourself to a new friend.',
  ];
  
  const randomPrompt = speakingPrompts[Math.floor(Math.random() * speakingPrompts.length)];
  
  return (
    <div className="p-3 sm:p-4 space-y-4 sm:space-y-6 pb-20">
      <div className="text-center py-2">
        <h2 className="text-xl sm:text-2xl font-bold text-slate-800">Daily 10-Minute Routine</h2>
        <p className="text-sm text-slate-600">Build a daily habit with quick practice</p>
      </div>
      
      {/* Steps Overview */}
      <div className="grid gap-2 sm:gap-3">
        {steps.map((step) => (
          <Card 
            key={step.id}
            className={`cursor-pointer transition-all touch-manipulation ${activeStep === step.id ? 'border-teal-400 bg-teal-50/50' : ''}`}
            onClick={() => setActiveStep(activeStep === step.id ? null : step.id)}
          >
            <CardContent className="p-3 sm:p-4">
              <div className="flex items-center gap-2 sm:gap-3">
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-teal-100 flex items-center justify-center flex-shrink-0">
                  <step.icon className="w-4 h-4 sm:w-5 sm:h-5 text-teal-600" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold text-slate-800 text-sm sm:text-base">{step.title}</h3>
                  <p className="text-xs text-slate-500 truncate">{step.description}</p>
                </div>
                <Badge variant="outline" className="text-[10px] sm:text-xs flex-shrink-0">{step.duration} min</Badge>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
      
      {/* Listening Section */}
      {activeStep === 'listening' && (
        <Card className="border-teal-200">
          <CardHeader className="pb-2 px-3 sm:px-4 pt-3 sm:pt-4">
            <CardTitle className="text-base sm:text-lg">Listening Suggestions</CardTitle>
            <CardDescription className="text-xs sm:text-sm">Choose one and watch/listen for 5 minutes</CardDescription>
          </CardHeader>
          <CardContent className="space-y-2 px-3 sm:px-4 pb-3 sm:pb-4">
            {listeningSuggestions.map((item, i) => (
              <div key={i} className="flex items-center justify-between p-2.5 sm:p-3 rounded-lg bg-slate-50">
                <div className="flex-1 min-w-0">
                  <p className="font-medium text-slate-800 text-sm truncate">{item.title}</p>
                  <div className="flex items-center gap-2 text-xs text-slate-500">
                    <Badge variant="outline" className="text-[10px]">{item.type}</Badge>
                    <span>{item.duration}</span>
                  </div>
                </div>
              </div>
            ))}
            <div className="p-2.5 sm:p-3 bg-amber-50 rounded-lg text-xs text-amber-800">
              <strong>Tip:</strong> Search for these on YouTube. Focus on main ideas, not every word.
            </div>
          </CardContent>
        </Card>
      )}
      
      {/* Shadowing Section */}
      {activeStep === 'shadowing' && (
        <Card className="border-teal-200">
          <CardHeader className="pb-2 px-3 sm:px-4 pt-3 sm:pt-4">
            <CardTitle className="text-base sm:text-lg">Shadowing Practice</CardTitle>
            <CardDescription className="text-xs sm:text-sm">Repeat each phrase aloud</CardDescription>
          </CardHeader>
          <CardContent className="space-y-2 sm:space-y-3 px-3 sm:px-4 pb-3 sm:pb-4">
            {randomPhrases.map((phrase, i) => (
              <div key={i} className="p-2.5 sm:p-3 rounded-lg bg-slate-50 space-y-1">
                <p className="font-medium text-slate-800 text-sm sm:text-base">{phrase.phrase}</p>
                <p className="text-xs sm:text-sm text-slate-600">{phrase.translation}</p>
              </div>
            ))}
            <div className="p-2.5 sm:p-3 bg-teal-50 rounded-lg text-xs text-teal-800">
              <strong>How to shadow:</strong> Read the phrase, then say it aloud 2-3 times.
            </div>
          </CardContent>
        </Card>
      )}
      
      {/* Speaking Section */}
      {activeStep === 'speaking' && (
        <Card className="border-teal-200">
          <CardHeader className="pb-2 px-3 sm:px-4 pt-3 sm:pt-4">
            <CardTitle className="text-base sm:text-lg">Speaking Prompt</CardTitle>
            <CardDescription className="text-xs sm:text-sm">Answer this prompt in 2 minutes</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3 sm:space-y-4 px-3 sm:px-4 pb-3 sm:pb-4">
            <div className="p-3 sm:p-4 bg-gradient-to-r from-teal-50 to-slate-50 rounded-lg">
              <p className="text-sm sm:text-base font-medium text-slate-800">{randomPrompt}</p>
            </div>
            <div className="flex items-center justify-center gap-4">
              <div className="text-center">
                <div className="text-3xl sm:text-4xl font-bold text-teal-600">
                  {Math.floor(timer / 60)}:{String(timer % 60).padStart(2, '0')}
                </div>
                <p className="text-xs sm:text-sm text-slate-500">Timer</p>
              </div>
            </div>
            <div className="flex gap-2 justify-center">
              <Button 
                onClick={() => setIsRunning(!isRunning)}
                className="h-11 px-6 bg-teal-600 hover:bg-teal-700 touch-manipulation"
              >
                {isRunning ? 'Pause' : 'Start'}
              </Button>
              <Button 
                variant="outline"
                onClick={() => { setTimer(0); setIsRunning(false); }}
                className="h-11 touch-manipulation"
              >
                Reset
              </Button>
            </div>
          </CardContent>
        </Card>
      )}
      
      {/* Quick Vocab Review */}
      <Card>
        <CardHeader className="pb-2 px-3 sm:px-4 pt-3 sm:pt-4">
          <CardTitle className="text-base sm:text-lg">Today&apos;s Vocab Review</CardTitle>
          <CardDescription className="text-xs sm:text-sm">5 random words to practice</CardDescription>
        </CardHeader>
        <CardContent className="px-3 sm:px-4 pb-3 sm:pb-4">
          <div className="grid grid-cols-1 gap-2">
            {randomVocab.map((item, i) => (
              <div key={i} className="flex items-center justify-between p-2 sm:p-2.5 rounded-lg bg-slate-50">
                <div className="flex-1 min-w-0">
                  <p className="font-medium text-slate-800 text-sm">{item.word}</p>
                  <p className="text-xs text-slate-600 truncate">{item.meaning}</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

// ============ PHRASEBOOK PAGE ============
function PhrasebookPage({ isTeacher }: { isTeacher: boolean }) {
  const phrasebook = useAppStore((state) => state.phrasebook);
  const favoritePhraseIds = useAppStore((state) => state.favoritePhraseIds);
  const toggleFavoritePhrase = useAppStore((state) => state.toggleFavoritePhrase);
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState<string>('all');
  const [showFavorites, setShowFavorites] = useState(false);
  
  const categories = ['all', ...new Set(phrasebook.map(p => p.category))];
  
  const filteredPhrases = phrasebook.filter((phrase) => {
    const matchesSearch = phrase.phrase.toLowerCase().includes(search.toLowerCase()) ||
      phrase.translation.toLowerCase().includes(search.toLowerCase());
    const matchesCategory = category === 'all' || phrase.category === category;
    const matchesFavorites = !showFavorites || favoritePhraseIds.includes(phrase.id);
    return matchesSearch && matchesCategory && matchesFavorites;
  });
  
  return (
    <div className="p-3 sm:p-4 space-y-3 sm:space-y-4 pb-20">
      <h2 className="text-xl sm:text-2xl font-bold text-slate-800">Phrasebook</h2>
      
      {/* Search and Filters */}
      <div className="space-y-2 sm:space-y-3">
        <Input
          placeholder="Search phrases..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="h-10 sm:h-11"
        />
        
        <div className="flex gap-1.5 sm:gap-2 overflow-x-auto pb-1 scrollbar-hide">
          <Button
            variant={showFavorites ? 'default' : 'outline'}
            size="sm"
            onClick={() => setShowFavorites(!showFavorites)}
            className={`flex-shrink-0 h-8 touch-manipulation ${showFavorites ? 'bg-rose-500 hover:bg-rose-600' : ''}`}
          >
            <Heart className={`w-3.5 h-3.5 sm:w-4 sm:h-4 mr-1 ${showFavorites ? 'fill-white' : ''}`} />
            <span className="text-xs">Favorites</span>
          </Button>
          {categories.map((cat) => (
            <Button
              key={cat}
              variant={category === cat ? 'default' : 'ghost'}
              size="sm"
              onClick={() => setCategory(cat)}
              className={`capitalize flex-shrink-0 h-8 touch-manipulation text-xs ${category === cat ? 'bg-teal-600 hover:bg-teal-700' : ''}`}
            >
              {cat}
            </Button>
          ))}
        </div>
      </div>
      
      {/* Phrases List */}
      <div className="space-y-2">
        {filteredPhrases.map((phrase) => (
          <Card key={phrase.id} className="overflow-hidden">
            <CardContent className="p-3">
              <div className="flex items-start justify-between gap-2">
                <div className="flex-1 min-w-0">
                  <p className="font-medium text-slate-800 text-sm sm:text-base">{phrase.phrase}</p>
                  <p className="text-xs sm:text-sm text-slate-600">{phrase.translation}</p>
                  <div className="flex items-center gap-2 mt-1 flex-wrap">
                    <Badge variant="outline" className="text-[10px]">{phrase.category}</Badge>
                    {phrase.situation && (
                      <span className="text-[10px] text-slate-500">{phrase.situation}</span>
                    )}
                  </div>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => toggleFavoritePhrase(phrase.id)}
                  className="p-1.5 touch-manipulation flex-shrink-0"
                >
                  <Heart className={`w-4 h-4 sm:w-5 sm:h-5 ${
                    favoritePhraseIds.includes(phrase.id) ? 'text-rose-500 fill-rose-500' : 'text-slate-300'
                  }`} />
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
      
      {filteredPhrases.length === 0 && (
        <div className="text-center py-8 text-slate-500 text-sm">
          No phrases found
        </div>
      )}
    </div>
  );
}

// ============ QUICK PRACTICE PAGE ============
function QuickPracticePage() {
  const [activeTab, setActiveTab] = useState('flashcards');
  const sessions = useAppStore((state) => state.sessions);
  
  // Get all vocab from all sessions
  const allVocab = sessions.flatMap(s => s.vocab);
  const allPhrases = sessions.flatMap(s => s.phrases);
  
  return (
    <div className="p-3 sm:p-4 space-y-3 sm:space-y-4 pb-20">
      <h2 className="text-xl sm:text-2xl font-bold text-slate-800">Quick Practice</h2>
      
      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="grid w-full grid-cols-3 h-10">
          <TabsTrigger value="flashcards" className="text-xs sm:text-sm">Flashcards</TabsTrigger>
          <TabsTrigger value="quiz" className="text-xs sm:text-sm">Quiz</TabsTrigger>
          <TabsTrigger value="speaking" className="text-xs sm:text-sm">Speaking</TabsTrigger>
        </TabsList>
        
        <TabsContent value="flashcards">
          <FlashcardsTab vocab={allVocab} phrases={allPhrases} />
        </TabsContent>
        
        <TabsContent value="quiz">
          <QuizTab vocab={allVocab} />
        </TabsContent>
        
        <TabsContent value="speaking">
          <SpeakingTab phrases={allPhrases} />
        </TabsContent>
      </Tabs>
    </div>
  );
}

function FlashcardsTab({ vocab, phrases }: { vocab: VocabItem[]; phrases: PhraseItem[] }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showBack, setShowBack] = useState(false);
  const [mode, setMode] = useState<'vocab' | 'phrases'>('vocab');
  
  const items = mode === 'vocab' ? vocab : phrases;
  const current = items[currentIndex];
  
  if (!current) return <div className="text-center py-8 text-sm">No items available</div>;
  
  return (
    <div className="space-y-3 sm:space-y-4">
      <div className="flex gap-2 justify-center">
        <Button 
          variant={mode === 'vocab' ? 'default' : 'outline'}
          size="sm"
          onClick={() => { setMode('vocab'); setCurrentIndex(0); setShowBack(false); }}
          className={`h-9 touch-manipulation ${mode === 'vocab' ? 'bg-teal-600' : ''}`}
        >
          Vocabulary
        </Button>
        <Button 
          variant={mode === 'phrases' ? 'default' : 'outline'}
          size="sm"
          onClick={() => { setMode('phrases'); setCurrentIndex(0); setShowBack(false); }}
          className={`h-9 touch-manipulation ${mode === 'phrases' ? 'bg-teal-600' : ''}`}
        >
          Phrases
        </Button>
      </div>
      
      <Card 
        className="min-h-[180px] sm:min-h-[200px] flex items-center justify-center cursor-pointer touch-manipulation"
        onClick={() => setShowBack(!showBack)}
      >
        <CardContent className="p-4 sm:p-6 text-center">
          {!showBack ? (
            <div>
              <p className="text-xl sm:text-2xl font-bold text-slate-800">
                {mode === 'vocab' ? (current as VocabItem).word : (current as PhraseItem).phrase}
              </p>
              <p className="text-xs sm:text-sm text-slate-500 mt-2">Tap to reveal</p>
            </div>
          ) : (
            <div>
              <p className="text-lg sm:text-xl text-slate-700">
                {mode === 'vocab' ? (current as VocabItem).meaning : (current as PhraseItem).translation}
              </p>
              {mode === 'vocab' && (current as VocabItem).example && (
                <p className="text-xs sm:text-sm text-teal-600 mt-3 italic">&quot;{(current as VocabItem).example}&quot;</p>
              )}
            </div>
          )}
        </CardContent>
      </Card>
      
      <div className="flex items-center justify-between gap-2">
        <Button 
          variant="outline"
          onClick={() => { setCurrentIndex(Math.max(0, currentIndex - 1)); setShowBack(false); }}
          disabled={currentIndex === 0}
          className="flex-1 h-11 touch-manipulation"
        >
          Previous
        </Button>
        <span className="text-xs text-slate-600 flex-shrink-0">{currentIndex + 1} / {items.length}</span>
        <Button 
          variant="outline"
          onClick={() => { setCurrentIndex(Math.min(items.length - 1, currentIndex + 1)); setShowBack(false); }}
          disabled={currentIndex === items.length - 1}
          className="flex-1 h-11 touch-manipulation"
        >
          Next
        </Button>
      </div>
    </div>
  );
}

function QuizTab({ vocab }: { vocab: VocabItem[] }) {
  const [started, setStarted] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [selected, setSelected] = useState<string | null>(null);
  const [answered, setAnswered] = useState(false);
  const [shuffledVocab, setShuffledVocab] = useState<VocabItem[]>([]);
  
  useEffect(() => {
    setShuffledVocab([...vocab].sort(() => Math.random() - 0.5).slice(0, 10));
  }, [vocab, started]);
  
  const current = shuffledVocab[currentIndex];
  
  const options = current ? [
    current.meaning,
    ...vocab.filter(v => v.id !== current.id).sort(() => Math.random() - 0.5).slice(0, 3).map(v => v.meaning)
  ].sort(() => Math.random() - 0.5) : [];
  
  const handleAnswer = (answer: string) => {
    setSelected(answer);
    setAnswered(true);
    if (answer === current?.meaning) {
      setScore(score + 1);
    }
  };
  
  const nextQuestion = () => {
    setCurrentIndex(currentIndex + 1);
    setSelected(null);
    setAnswered(false);
  };
  
  if (!started) {
    return (
      <div className="text-center py-8 space-y-4">
        <Target className="w-14 h-14 sm:w-16 sm:h-16 text-teal-600 mx-auto" />
        <h3 className="text-lg sm:text-xl font-bold text-slate-800">Vocabulary Quiz</h3>
        <p className="text-sm text-slate-600">Test your knowledge with 10 random words</p>
        <Button onClick={() => setStarted(true)} className="h-12 px-8 bg-teal-600 hover:bg-teal-700 touch-manipulation">
          Start Quiz
        </Button>
      </div>
    );
  }
  
  if (currentIndex >= shuffledVocab.length) {
    return (
      <div className="text-center py-8 space-y-4">
        <Award className="w-14 h-14 sm:w-16 sm:h-16 text-amber-500 mx-auto" />
        <h3 className="text-lg sm:text-xl font-bold text-slate-800">Quiz Complete!</h3>
        <p className="text-2xl sm:text-3xl font-bold text-teal-600">{score} / {shuffledVocab.length}</p>
        <p className="text-sm text-slate-600">
          {score === shuffledVocab.length ? 'Perfect! 🎉' : 
           score >= shuffledVocab.length * 0.7 ? 'Great job! 👏' :
           'Keep practicing! 💪'}
        </p>
        <Button onClick={() => { setStarted(false); setCurrentIndex(0); setScore(0); }} className="h-12 px-8 bg-teal-600 hover:bg-teal-700 touch-manipulation">
          Try Again
        </Button>
      </div>
    );
  }
  
  return (
    <div className="space-y-3 sm:space-y-4">
      <div className="flex justify-between items-center text-sm">
        <span className="text-slate-600">Question {currentIndex + 1}/{shuffledVocab.length}</span>
        <span className="font-medium text-teal-600">Score: {score}</span>
      </div>
      
      <Card>
        <CardHeader className="pb-2 px-3 sm:px-4 pt-3 sm:pt-4">
          <CardTitle className="text-lg sm:text-xl text-center">{current?.word}</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2 px-3 sm:px-4 pb-3 sm:pb-4">
          {options.map((option, i) => (
            <Button
              key={i}
              variant="outline"
              className={`w-full justify-start h-auto py-2.5 sm:py-3 text-sm touch-manipulation ${
                answered && option === current?.meaning ? 'bg-green-100 border-green-500' :
                answered && selected === option ? 'bg-red-100 border-red-500' : ''
              }`}
              onClick={() => !answered && handleAnswer(option)}
              disabled={answered}
            >
              {option}
            </Button>
          ))}
        </CardContent>
      </Card>
      
      {answered && (
        <Button onClick={nextQuestion} className="w-full h-12 bg-teal-600 hover:bg-teal-700 touch-manipulation">
          {currentIndex < shuffledVocab.length - 1 ? 'Next Question' : 'See Results'}
        </Button>
      )}
    </div>
  );
}

function SpeakingTab({ phrases }: { phrases: PhraseItem[] }) {
  const [currentPhrase, setCurrentPhrase] = useState<PhraseItem | null>(null);
  const [timer, setTimer] = useState(60);
  const [isRunning, setIsRunning] = useState(false);
  
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isRunning && timer > 0) {
      interval = setInterval(() => {
        setTimer(t => t - 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isRunning, timer]);
  
  const getRandomPhrase = () => {
    const random = phrases[Math.floor(Math.random() * phrases.length)];
    setCurrentPhrase(random);
    setTimer(60);
    setIsRunning(true);
  };
  
  return (
    <div className="space-y-3 sm:space-y-4">
      <Card className="bg-gradient-to-br from-teal-50 to-slate-50">
        <CardContent className="p-4 sm:p-6 text-center space-y-3">
          <Volume2 className="w-10 h-10 sm:w-12 sm:h-12 text-teal-600 mx-auto" />
          <h3 className="text-base sm:text-lg font-bold text-slate-800">Speaking Prompt</h3>
          <p className="text-xs sm:text-sm text-slate-600">Practice saying this phrase aloud</p>
        </CardContent>
      </Card>
      
      {currentPhrase ? (
        <div className="space-y-3 sm:space-y-4">
          <Card className="min-h-[120px] sm:min-h-[150px] flex items-center justify-center">
            <CardContent className="p-4 sm:p-6 text-center">
              <p className="text-lg sm:text-xl font-bold text-slate-800">{currentPhrase.phrase}</p>
              <p className="text-xs sm:text-sm text-slate-600 mt-2">{currentPhrase.translation}</p>
            </CardContent>
          </Card>
          
          <div className="text-center">
            <div className="text-3xl sm:text-4xl font-bold text-teal-600">{timer}s</div>
            <Button
              variant="outline"
              onClick={() => setIsRunning(!isRunning)}
              className="mt-2 h-10 touch-manipulation"
            >
              {isRunning ? 'Pause' : 'Start'} Timer
            </Button>
          </div>
          
          <Button onClick={getRandomPhrase} className="w-full h-12 bg-teal-600 hover:bg-teal-700 touch-manipulation">
            <RotateCcw className="w-4 h-4 mr-2" />
            New Phrase
          </Button>
        </div>
      ) : (
        <div className="text-center py-6">
          <Button onClick={getRandomPhrase} size="lg" className="h-14 px-8 bg-teal-600 hover:bg-teal-700 touch-manipulation">
            <Play className="w-5 h-5 mr-2" />
            Start Practice
          </Button>
        </div>
      )}
    </div>
  );
}

// ============ TEACHER DASHBOARD ============
function TeacherDashboard({ onSelectSession }: { onSelectSession: (session: Session) => void }) {
  const sessions = useSessions();
  const progress = useProgress();
  const submissions = useSubmissions();
  const nextSession = useNextSession();
  
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  
  const upcomingSessions = sessions.filter(s => {
    const sessionDate = new Date(s.date);
    sessionDate.setHours(0, 0, 0, 0);
    return sessionDate >= today;
  });
  
  return (
    <div className="p-3 sm:p-4 space-y-4 sm:space-y-6 pb-20">
      <h2 className="text-xl sm:text-2xl font-bold text-slate-800">Teacher Dashboard</h2>
      
      {/* Next Session */}
      {nextSession && (
        <Card className="border-teal-200 bg-teal-50/50">
          <CardHeader className="pb-2 px-3 sm:px-4 pt-3 sm:pt-4">
            <CardDescription className="text-teal-700 font-medium text-xs sm:text-sm">Next Session</CardDescription>
            <CardTitle className="text-base sm:text-lg">{nextSession.title}</CardTitle>
          </CardHeader>
          <CardContent className="px-3 sm:px-4 pb-3 sm:pb-4">
            <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-600 mb-3">
              <Calendar className="w-4 h-4" />
              <span>{format(parseISO(nextSession.date), 'EEE, MMM d')}</span>
            </div>
            <Button onClick={() => onSelectSession(nextSession)} className="h-11 bg-teal-600 hover:bg-teal-700 touch-manipulation">
              Open Session
            </Button>
          </CardContent>
        </Card>
      )}
      
      {/* Quick Stats */}
      <div className="grid grid-cols-2 gap-2 sm:gap-3">
        <Card>
          <CardContent className="p-3 sm:p-4 text-center">
            <div className="text-2xl sm:text-3xl font-bold text-slate-800">{progress.filter(p => p.attended).length}</div>
            <div className="text-xs sm:text-sm text-slate-600">Sessions Attended</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-3 sm:p-4 text-center">
            <div className="text-2xl sm:text-3xl font-bold text-slate-800">{submissions.length}</div>
            <div className="text-xs sm:text-sm text-slate-600">Submissions</div>
          </CardContent>
        </Card>
      </div>
      
      {/* Sessions Calendar */}
      <Card>
        <CardHeader className="pb-2 px-3 sm:px-4 pt-3 sm:pt-4">
          <CardTitle className="text-base sm:text-lg">Month Overview</CardTitle>
        </CardHeader>
        <CardContent className="px-3 sm:px-4 pb-3 sm:pb-4">
          <div className="grid grid-cols-7 gap-1 text-center text-[10px] sm:text-xs mb-2">
            {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((day, i) => (
              <div key={i} className="text-slate-500">{day}</div>
            ))}
          </div>
          <div className="grid grid-cols-7 gap-1">
            {/* March 2026 starts on Sunday */}
            {Array.from({ length: 31 }).map((_, i) => {
              const day = i + 1;
              const dateStr = `2026-03-${String(day).padStart(2, '0')}`;
              const session = sessions.find(s => s.date === dateStr);
              const sessionProgress = progress.find(p => p.sessionId === session?.id);
              const isToday = new Date(2026, 2, day).toDateString() === today.toDateString();
              
              return (
                <div
                  key={day}
                  className={`aspect-square rounded flex items-center justify-center text-xs sm:text-sm cursor-pointer transition-colors touch-manipulation ${
                    session ? (sessionProgress?.attended ? 'bg-green-100 text-green-700' : 'bg-teal-100 text-teal-700') :
                    isToday ? 'bg-slate-200' : 'bg-slate-50'
                  }`}
                  onClick={() => session && onSelectSession(session)}
                >
                  {day}
                </div>
              );
            })}
          </div>
        </CardContent>
      </Card>
      
      {/* Upcoming Sessions */}
      <Card>
        <CardHeader className="pb-2 px-3 sm:px-4 pt-3 sm:pt-4">
          <CardTitle className="text-base sm:text-lg">Upcoming Sessions</CardTitle>
        </CardHeader>
        <CardContent className="px-3 sm:px-4 pb-3 sm:pb-4">
          <div className="space-y-2">
            {upcomingSessions.slice(0, 3).map((session) => (
              <div
                key={session.id}
                className="flex items-center justify-between p-2 sm:p-2.5 rounded-lg bg-slate-50 cursor-pointer active:bg-slate-100 touch-manipulation"
                onClick={() => onSelectSession(session)}
              >
                <div className="flex-1 min-w-0">
                  <p className="font-medium text-slate-800 text-sm truncate">{session.title}</p>
                  <p className="text-xs text-slate-500">{format(parseISO(session.date), 'MMM d')}</p>
                </div>
                <ChevronRight className="w-5 h-5 text-slate-400 flex-shrink-0" />
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

// ============ TEACHER SESSIONS LIST ============
function TeacherSessionsList({ onSelectSession }: { onSelectSession: (session: Session) => void }) {
  const sessions = useSessions();
  const progress = useProgress();
  
  return (
    <div className="p-3 sm:p-4 space-y-3 sm:space-y-4 pb-20">
      <h2 className="text-xl sm:text-2xl font-bold text-slate-800">All Sessions</h2>
      
      <div className="space-y-2">
        {sessions.map((session) => {
          const sessionProgress = progress.find(p => p.sessionId === session.id);
          
          return (
            <Card
              key={session.id}
              className="cursor-pointer hover:shadow-md transition-shadow touch-manipulation"
              onClick={() => onSelectSession(session)}
            >
              <CardContent className="p-3 sm:p-4">
                <div className="flex items-center justify-between gap-2">
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-slate-800 text-sm sm:text-base">Session {session.number}: {session.title}</h3>
                    <p className="text-xs sm:text-sm text-slate-500">{format(parseISO(session.date), 'EEE, MMMM d')}</p>
                  </div>
                  <div className="flex items-center gap-2 flex-shrink-0">
                    {sessionProgress?.attended && (
                      <Badge variant="outline" className="bg-green-50 border-green-200 text-[10px]">
                        <Check className="w-3 h-3 mr-1" />
                        Attended
                      </Badge>
                    )}
                    <ChevronRight className="w-5 h-5 text-slate-400" />
                  </div>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
}

// ============ TEACHER RESOURCES ============
function TeacherResources() {
  const sessions = useSessions();
  
  // Aggregate all resources
  const allVocab = sessions.flatMap(s => s.vocab);
  const allPhrases = sessions.flatMap(s => s.phrases);
  
  return (
    <div className="p-3 sm:p-4 space-y-4 sm:space-y-6 pb-20">
      <h2 className="text-xl sm:text-2xl font-bold text-slate-800">Resources</h2>
      
      {/* Phrase Bank */}
      <Card>
        <CardHeader className="pb-2 px-3 sm:px-4 pt-3 sm:pt-4">
          <CardTitle className="text-base sm:text-lg">Phrase Bank</CardTitle>
          <CardDescription className="text-xs sm:text-sm">{allPhrases.length} phrases</CardDescription>
        </CardHeader>
        <CardContent className="px-3 sm:px-4 pb-3 sm:pb-4">
          <ScrollArea className="h-48 sm:h-64">
            <div className="space-y-1.5 sm:space-y-2 pr-2">
              {allPhrases.map((phrase, i) => (
                <div key={i} className="flex justify-between gap-2 p-2 rounded bg-slate-50 text-xs sm:text-sm">
                  <span className="text-slate-800 truncate">{phrase.phrase}</span>
                  <span className="text-slate-600 flex-shrink-0">{phrase.translation}</span>
                </div>
              ))}
            </div>
          </ScrollArea>
        </CardContent>
      </Card>
      
      {/* Vocabulary Bank */}
      <Card>
        <CardHeader className="pb-2 px-3 sm:px-4 pt-3 sm:pt-4">
          <CardTitle className="text-base sm:text-lg">Vocabulary Bank</CardTitle>
          <CardDescription className="text-xs sm:text-sm">{allVocab.length} words</CardDescription>
        </CardHeader>
        <CardContent className="px-3 sm:px-4 pb-3 sm:pb-4">
          <ScrollArea className="h-48 sm:h-64">
            <div className="grid grid-cols-2 gap-1.5 sm:gap-2 pr-2">
              {allVocab.map((item, i) => (
                <div key={i} className="p-2 rounded bg-slate-50">
                  <p className="font-medium text-slate-800 text-xs sm:text-sm">{item.word}</p>
                  <p className="text-[10px] sm:text-xs text-slate-600 truncate">{item.meaning}</p>
                </div>
              ))}
            </div>
          </ScrollArea>
        </CardContent>
      </Card>
      
      {/* Print Worksheet */}
      <Card>
        <CardHeader className="pb-2 px-3 sm:px-4 pt-3 sm:pt-4">
          <CardTitle className="text-base sm:text-lg">Print Worksheets</CardTitle>
          <CardDescription className="text-xs sm:text-sm">Generate printable materials</CardDescription>
        </CardHeader>
        <CardContent className="space-y-2 px-3 sm:px-4 pb-3 sm:pb-4">
          {sessions.map((session) => (
            <Button
              key={session.id}
              variant="outline"
              className="w-full justify-start h-10 sm:h-11 text-xs sm:text-sm touch-manipulation"
              onClick={() => {
                const printWindow = window.open('', '_blank');
                if (printWindow) {
                  printWindow.document.write(`
                    <html>
                      <head>
                        <title>Session ${session.number}: ${session.title}</title>
                        <style>
                          body { font-family: Arial, sans-serif; padding: 20px; }
                          h1 { color: #333; font-size: 18px; }
                          .vocab { margin: 8px 0; padding: 8px; background: #f5f5f5; font-size: 14px; }
                        </style>
                      </head>
                      <body>
                        <h1>Session ${session.number}: ${session.title}</h1>
                        <p><strong>Date:</strong> ${format(parseISO(session.date), 'MMMM d, yyyy')}</p>
                        <p><strong>Goal:</strong> ${session.goal}</p>
                        
                        <h2 style="font-size: 16px;">Vocabulary</h2>
                        ${session.vocab.map(v => `<div class="vocab"><strong>${v.word}</strong>: ${v.meaning}</div>`).join('')}
                        
                        <h2 style="font-size: 16px;">Key Phrases</h2>
                        ${session.phrases.map(p => `<div class="vocab"><strong>${p.phrase}</strong>: ${p.translation}</div>`).join('')}
                        
                        <h2 style="font-size: 16px;">Homework</h2>
                        <ul>${session.homework.map(h => `<li>${h.task}</li>`).join('')}</ul>
                      </body>
                    </html>
                  `);
                  printWindow.document.close();
                  printWindow.print();
                }
              }}
            >
              <FileText className="w-4 h-4 mr-2" />
              Session {session.number}: {session.title}
            </Button>
          ))}
        </CardContent>
      </Card>
    </div>
  );
}

// ============ TEACHER SETTINGS ============
function TeacherSettings() {
  const exportData = useAppStore((state) => state.exportData);
  const importData = useAppStore((state) => state.importData);
  const resetData = useAppStore((state) => state.resetData);
  const updatePassword = useAppStore((state) => state.updatePassword);
  const teacherPassword = useAppStore((state) => state.teacherPassword);
  const studentPassword = useAppStore((state) => state.studentPassword);
  
  const [newTeacherPassword, setNewTeacherPassword] = useState(teacherPassword);
  const [newStudentPassword, setNewStudentPassword] = useState(studentPassword);
  const [importText, setImportText] = useState('');
  const [showImport, setShowImport] = useState(false);
  
  const handleExport = () => {
    const data = exportData();
    const blob = new Blob([data], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `travel-english-backup-${new Date().toISOString().split('T')[0]}.json`;
    a.click();
    URL.revokeObjectURL(url);
  };
  
  const handleImport = () => {
    if (importData(importText)) {
      setShowImport(false);
      setImportText('');
      alert('Data imported successfully!');
    } else {
      alert('Failed to import data. Please check the format.');
    }
  };
  
  const handleReset = () => {
    if (confirm('Are you sure you want to reset all data? This cannot be undone.')) {
      resetData();
      alert('Data has been reset.');
    }
  };
  
  return (
    <div className="p-3 sm:p-4 space-y-4 sm:space-y-6 pb-20">
      <h2 className="text-xl sm:text-2xl font-bold text-slate-800">Settings</h2>
      
      {/* Passwords */}
      <Card>
        <CardHeader className="pb-2 px-3 sm:px-4 pt-3 sm:pt-4">
          <CardTitle className="text-base sm:text-lg">Passwords</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3 sm:space-y-4 px-3 sm:px-4 pb-3 sm:pb-4">
          <div className="space-y-2">
            <Label className="text-sm">Teacher Password</Label>
            <div className="flex gap-2">
              <Input
                type="password"
                value={newTeacherPassword}
                onChange={(e) => setNewTeacherPassword(e.target.value)}
                className="h-10 sm:h-11"
              />
              <Button 
                onClick={() => updatePassword('teacher', newTeacherPassword)}
                className="h-10 sm:h-11 bg-teal-600 hover:bg-teal-700 touch-manipulation"
              >
                Save
              </Button>
            </div>
          </div>
          <div className="space-y-2">
            <Label className="text-sm">Student Password</Label>
            <div className="flex gap-2">
              <Input
                type="password"
                value={newStudentPassword}
                onChange={(e) => setNewStudentPassword(e.target.value)}
                className="h-10 sm:h-11"
              />
              <Button 
                onClick={() => updatePassword('student', newStudentPassword)}
                className="h-10 sm:h-11 bg-teal-600 hover:bg-teal-700 touch-manipulation"
              >
                Save
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
      
      {/* Data Management */}
      <Card>
        <CardHeader className="pb-2 px-3 sm:px-4 pt-3 sm:pt-4">
          <CardTitle className="text-base sm:text-lg">Data Management</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3 sm:space-y-4 px-3 sm:px-4 pb-3 sm:pb-4">
          <div className="flex gap-2">
            <Button onClick={handleExport} className="flex-1 h-11 bg-teal-600 hover:bg-teal-700 touch-manipulation">
              <Download className="w-4 h-4 mr-2" />
              Export
            </Button>
            <Button onClick={() => setShowImport(true)} variant="outline" className="flex-1 h-11 touch-manipulation">
              <Upload className="w-4 h-4 mr-2" />
              Import
            </Button>
          </div>
          
          <Button onClick={handleReset} variant="destructive" className="w-full h-11 touch-manipulation">
            Reset All Data
          </Button>
        </CardContent>
      </Card>
      
      {/* Import Dialog */}
      <Dialog open={showImport} onOpenChange={setShowImport}>
        <DialogContent className="max-w-[95vw] sm:max-w-lg">
          <DialogHeader>
            <DialogTitle>Import Data</DialogTitle>
            <DialogDescription>
              Paste your exported JSON data below
            </DialogDescription>
          </DialogHeader>
          <Textarea
            value={importText}
            onChange={(e) => setImportText(e.target.value)}
            rows={8}
            placeholder="Paste JSON here..."
            className="text-sm"
          />
          <div className="flex gap-2 justify-end">
            <Button variant="outline" onClick={() => setShowImport(false)} className="h-10 touch-manipulation">Cancel</Button>
            <Button onClick={handleImport} className="h-10 bg-teal-600 hover:bg-teal-700 touch-manipulation">Import</Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}

// ============ MAIN APP ============
export default function Home() {
  const currentView = useAppStore((state) => state.currentView);
  const setCurrentView = useAppStore((state) => state.setCurrentView);
  const isUnlocked = useAppStore((state) => state.isUnlocked);
  const userRole = useAppStore((state) => state.userRole);
  const lock = useAppStore((state) => state.lock);
  
  const [activeTab, setActiveTab] = useState('');
  const [selectedSession, setSelectedSession] = useState<Session | null>(null);
  
  // Show landing page
  if (currentView === 'landing') {
    return <LandingPage />;
  }
  
  // Show lock screen if not unlocked
  if (!isUnlocked) {
    return (
      <LockScreen 
        role={currentView as 'teacher' | 'student'} 
        onBack={() => setCurrentView('landing')} 
      />
    );
  }
  
  // Handle session detail view
  if (selectedSession) {
    return (
      <div className="min-h-screen bg-slate-50 flex flex-col">
        <TopHeader 
          role={userRole as 'teacher' | 'student'}
          onLogout={() => {
            lock();
            setActiveTab('');
          }}
          title={`Session ${selectedSession.number}`}
          onBack={() => setSelectedSession(null)}
        />
        <SessionDetailPage 
          session={selectedSession} 
          onBack={() => setSelectedSession(null)}
          isTeacher={userRole === 'teacher'}
        />
        <MobileBottomNav 
          activeTab={activeTab} 
          setActiveTab={(tab) => { setActiveTab(tab); setSelectedSession(null); }}
          role={userRole as 'teacher' | 'student'}
        />
      </div>
    );
  }
  
  // Default tabs based on role
  const defaultTab = userRole === 'teacher' ? 'dashboard' : 'plan';
  const currentTab = activeTab || defaultTab;
  
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      <TopHeader 
        role={userRole as 'teacher' | 'student'}
        onLogout={() => {
          lock();
          setActiveTab('');
        }}
      />
      
      <main className="flex-1 max-w-4xl mx-auto w-full">
        {userRole === 'student' && (
          <>
            {currentTab === 'plan' && (
              <StudentPlanPage onSelectSession={setSelectedSession} />
            )}
            {currentTab === 'phrasebook' && (
              <PhrasebookPage isTeacher={false} />
            )}
            {currentTab === 'practice' && (
              <QuickPracticePage />
            )}
            {currentTab === 'daily' && (
              <DailyRoutinePage />
            )}
            {currentTab === 'progress' && (
              <ProgressPage />
            )}
          </>
        )}
        
        {userRole === 'teacher' && (
          <>
            {currentTab === 'dashboard' && (
              <TeacherDashboard onSelectSession={setSelectedSession} />
            )}
            {currentTab === 'sessions' && (
              <TeacherSessionsList onSelectSession={setSelectedSession} />
            )}
            {currentTab === 'phrasebook' && (
              <PhrasebookPage isTeacher={true} />
            )}
            {currentTab === 'resources' && (
              <TeacherResources />
            )}
            {currentTab === 'settings' && (
              <TeacherSettings />
            )}
          </>
        )}
      </main>
      
      <MobileBottomNav 
        activeTab={currentTab} 
        setActiveTab={setActiveTab}
        role={userRole as 'teacher' | 'student'}
      />
    </div>
  );
}
