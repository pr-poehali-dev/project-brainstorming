import { useState } from 'react';
import Icon from '@/components/ui/icon';

const NAV_LINKS = [
  'О проекте',
  'Ход строительства',
  'Квартиры',
  'Отзывы',
  'Контакты',
];

const TABS = ['Фотогалерея', '3D-тур по квартире', 'Ход строительства'];

const ADVANTAGES = [
  { icon: 'MapPin', text: 'Развитая инфраструктура в 5 минутах' },
  { icon: 'Shield', text: 'Закрытая охраняемая территория' },
  { icon: 'Leaf', text: 'Зелёный двор без машин' },
  { icon: 'Zap', text: 'Умный дом в каждой квартире' },
  { icon: 'Star', text: 'Авторский архитектурный проект' },
];

export default function HeroSection() {
  const [activeTab, setActiveTab] = useState(2);

  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      {/* HEADER */}
      <header className="sticky top-0 z-50 bg-white shadow-sm">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-blue-600 to-teal-500">
              <Icon name="Building2" size={22} className="text-white" />
            </div>
            <div className="leading-tight">
              <span className="block text-lg font-bold text-gray-900">ТИТАН-2</span>
              <span className="block text-xs font-medium text-teal-600">Пространство для жизни</span>
            </div>
          </div>

          {/* Nav */}
          <nav className="hidden items-center gap-6 md:flex">
            {NAV_LINKS.map((link) => (
              <a
                key={link}
                href="#"
                className="text-sm font-medium text-gray-600 transition-colors hover:text-teal-600"
              >
                {link}
              </a>
            ))}
          </nav>

          <button className="hidden rounded-lg bg-gradient-to-r from-blue-600 to-teal-500 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-opacity hover:opacity-90 md:block">
            Записаться на просмотр
          </button>
        </div>
      </header>

      {/* MAIN CONTENT */}
      <main className="mx-auto max-w-7xl px-6 py-10">

        {/* VIDEO PLAYER */}
        <div className="relative mb-8 overflow-hidden rounded-2xl bg-gray-900 shadow-xl" style={{ aspectRatio: '16/7' }}>
          <img
            src="https://cdn.poehali.dev/projects/bfcd6cf1-f88d-4b9a-b16b-e61871f0cf98/files/b5d8d9db-5106-4ae3-927e-73852e13b47d.jpg"
            alt="Строительная площадка ТИТАН-2"
            className="h-full w-full object-cover opacity-80"
          />
          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

          {/* Date badge */}
          <div className="absolute left-5 top-5 rounded-md bg-black/60 px-3 py-1.5 text-sm font-semibold text-white backdrop-blur-sm">
            25.04.2026
          </div>

          {/* Play button */}
          <div className="absolute inset-0 flex items-center justify-center">
            <button className="flex h-20 w-20 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm transition-all hover:bg-white/30 hover:scale-110">
              <Icon name="Play" size={36} className="ml-1 text-white" />
            </button>
          </div>

          {/* Bottom label */}
          <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between">
            <div>
              <p className="text-xl font-bold text-white">ТИТАН-2 — Трансляция стройки</p>
              <p className="text-sm text-white/70">Онлайн-камера · Обновляется каждый день</p>
            </div>
            <span className="flex items-center gap-1.5 rounded-full bg-red-500 px-3 py-1 text-xs font-bold text-white">
              <span className="h-2 w-2 animate-pulse rounded-full bg-white" />
              LIVE
            </span>
          </div>
        </div>

        {/* TWO COLUMNS */}
        <div className="mb-8 grid grid-cols-1 gap-6 md:grid-cols-2">

          {/* Timelapse block */}
          <div className="overflow-hidden rounded-2xl bg-white shadow-md">
            <div className="relative overflow-hidden" style={{ aspectRatio: '16/9' }}>
              <img
                src="https://cdn.poehali.dev/projects/bfcd6cf1-f88d-4b9a-b16b-e61871f0cf98/files/b5d8d9db-5106-4ae3-927e-73852e13b47d.jpg"
                alt="Таймлапс"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-black/30" />
              <div className="absolute inset-0 flex items-center justify-center">
                <button className="flex h-14 w-14 items-center justify-center rounded-full bg-white/25 backdrop-blur-sm transition-all hover:bg-white/40">
                  <Icon name="Play" size={24} className="ml-0.5 text-white" />
                </button>
              </div>
              <div className="absolute left-3 top-3 rounded bg-teal-500 px-2 py-0.5 text-xs font-bold text-white">
                TIMELAPSE
              </div>
            </div>
            <div className="p-5">
              <h3 className="mb-1 text-lg font-bold text-gray-900">Таймлапс строительства</h3>
              <p className="text-sm text-gray-500">От котлована до готовых этажей — весь процесс за 2 минуты</p>
            </div>
          </div>

          {/* Infographics block */}
          <div className="overflow-hidden rounded-2xl bg-white shadow-md">
            <div className="bg-gradient-to-br from-blue-600 to-teal-500 p-6">
              <p className="mb-1 text-sm font-semibold text-white/80">Инфографика</p>
              <h3 className="text-2xl font-bold text-white">5 преимуществ ТИТАН-2</h3>
            </div>
            <div className="p-5">
              <ul className="space-y-3">
                {ADVANTAGES.map((adv, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-teal-50">
                      <Icon name={adv.icon} fallback="Star" size={16} className="text-teal-600" />
                    </div>
                    <span className="text-sm font-medium text-gray-700">{adv.text}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* TABS */}
        <div className="mb-8 rounded-2xl bg-white shadow-md overflow-hidden">
          <div className="flex border-b border-gray-100">
            {TABS.map((tab, i) => (
              <button
                key={tab}
                onClick={() => setActiveTab(i)}
                className={`flex-1 py-4 text-sm font-semibold transition-colors ${
                  activeTab === i
                    ? 'border-b-2 border-teal-500 bg-teal-50 text-teal-700'
                    : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          <div className="p-6">
            {activeTab === 0 && (
              <div className="grid grid-cols-3 gap-4">
                {[1, 2, 3, 4, 5, 6].map((n) => (
                  <div key={n} className="aspect-square overflow-hidden rounded-xl bg-gray-100">
                    <img
                      src="https://cdn.poehali.dev/projects/bfcd6cf1-f88d-4b9a-b16b-e61871f0cf98/files/b5d8d9db-5106-4ae3-927e-73852e13b47d.jpg"
                      alt={`Фото ${n}`}
                      className="h-full w-full object-cover hover:scale-105 transition-transform"
                    />
                  </div>
                ))}
              </div>
            )}

            {activeTab === 1 && (
              <div className="flex flex-col items-center justify-center py-12 text-center">
                <div className="mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-blue-50">
                  <Icon name="Box" size={36} className="text-blue-600" />
                </div>
                <p className="text-lg font-semibold text-gray-800">3D-тур по квартире</p>
                <p className="mt-2 text-sm text-gray-500">Интерактивный тур будет доступен в ближайшее время</p>
              </div>
            )}

            {activeTab === 2 && (
              <div className="space-y-4">
                {[
                  { date: 'Апрель 2026', text: 'Завершение монолитных работ 7-го этажа', done: true },
                  { date: 'Март 2026', text: 'Кладка кирпича фасада, монтаж перекрытий', done: true },
                  { date: 'Февраль 2026', text: 'Армирование и бетонирование 5–6 этажей', done: true },
                  { date: 'Январь 2026', text: 'Старт возведения надземной части', done: false },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <div className={`mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full ${item.done ? 'bg-teal-500' : 'bg-gray-200'}`}>
                      {item.done && <Icon name="Check" size={12} className="text-white" />}
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wide text-teal-600">{item.date}</p>
                      <p className="text-sm font-medium text-gray-800">{item.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* CTA BUTTON */}
        <div className="flex justify-center pb-10">
          <button className="flex items-center gap-3 rounded-xl bg-gradient-to-r from-teal-500 to-blue-600 px-10 py-4 text-lg font-bold text-white shadow-lg transition-all hover:shadow-xl hover:scale-105">
            <Icon name="Calendar" size={22} />
            Записаться на просмотр
          </button>
        </div>
      </main>
    </div>
  );
}