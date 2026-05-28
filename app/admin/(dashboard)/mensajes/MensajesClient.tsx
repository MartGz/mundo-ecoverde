'use client';

import { useState, useTransition } from 'react';
import { Mail, MailOpen, Trash2, Eye, X, Clock, User, AtSign } from 'lucide-react';
import { markMessageAsRead, deleteMessage } from '@/app/actions/admin';

interface Message {
  id: string;
  name: string;
  email: string;
  subject: string | null;
  message: string;
  isRead: boolean;
  createdAt: Date;
}

export default function MensajesClient({ initialMessages }: { initialMessages: Message[] }) {
  const [messages, setMessages] = useState(initialMessages);
  const [selected, setSelected] = useState<Message | null>(null);
  const [isPending, startTransition] = useTransition();
  const [filter, setFilter] = useState<'all' | 'unread' | 'read'>('all');

  const filtered = messages.filter(m => {
    if (filter === 'unread') return !m.isRead;
    if (filter === 'read') return m.isRead;
    return true;
  });

  const handleRead = (msg: Message) => {
    setSelected(msg);
    if (!msg.isRead) {
      startTransition(async () => {
        await markMessageAsRead(msg.id);
        setMessages(prev => prev.map(m => m.id === msg.id ? { ...m, isRead: true } : m));
      });
    }
  };

  const handleDelete = (id: string) => {
    startTransition(async () => {
      await deleteMessage(id);
      setMessages(prev => prev.filter(m => m.id !== id));
      if (selected?.id === id) setSelected(null);
    });
  };

  const unreadCount = messages.filter(m => !m.isRead).length;

  return (
    <div className="space-y-5 max-w-7xl mx-auto">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div>
          <h1 className="text-2xl font-extrabold text-white">Bandeja de Mensajes</h1>
          <p className="text-[#6b7280] text-sm mt-1">
            {unreadCount > 0 ? (
              <span className="text-[#49a739] font-semibold">{unreadCount} sin leer</span>
            ) : 'Todos los mensajes leídos'}
            {' · '}{messages.length} total
          </p>
        </div>
        <div className="flex items-center gap-2 bg-[#0d150d] border border-[#1a2e1a] rounded-xl p-1">
          {(['all', 'unread', 'read'] as const).map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-4 py-1.5 rounded-lg text-sm font-semibold transition-all
                ${filter === f ? 'bg-gradient-to-r from-[#49a739] to-[#3d8f2f] text-white shadow-[0_4px_12px_rgba(73,167,57,0.3)]' : 'text-[#6b7280] hover:text-white'}`}
            >
              {f === 'all' ? 'Todos' : f === 'unread' ? 'Sin leer' : 'Leídos'}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-4">
        {/* List */}
        <div className="lg:col-span-2 space-y-2">
          {filtered.length === 0 ? (
            <div className="bg-[#0d150d] border border-[#1a2e1a] rounded-2xl p-10 text-center">
              <Mail size={36} className="mx-auto text-[#1a2e1a] mb-3" />
              <p className="text-[#6b7280] font-medium">No hay mensajes</p>
            </div>
          ) : filtered.map((msg) => (
            <button
              key={msg.id}
              onClick={() => handleRead(msg)}
              className={`w-full text-left p-4 rounded-2xl border transition-all duration-200 group
                ${selected?.id === msg.id
                  ? 'bg-[#111a11] border-[#49a739]/50 shadow-[0_0_20px_rgba(73,167,57,0.1)]'
                  : 'bg-[#0d150d] border-[#1a2e1a] hover:border-[#2a3e2a] hover:bg-[#111a11]'
                }`}
            >
              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-full bg-gradient-to-br from-[#49a739] to-[#2e7d32] flex items-center justify-center text-white text-sm font-bold flex-shrink-0 shadow-[0_4px_12px_rgba(73,167,57,0.3)]">
                  {msg.name.charAt(0).toUpperCase()}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <p className="text-white text-sm font-bold truncate">{msg.name}</p>
                    {!msg.isRead && <span className="w-2 h-2 rounded-full bg-[#49a739] flex-shrink-0" />}
                  </div>
                  <p className="text-[#6b7280] text-xs truncate mt-0.5">{msg.subject || 'Sin asunto'}</p>
                  <p className="text-[#374151] text-xs mt-1">{new Date(msg.createdAt).toLocaleDateString('es-CO')}</p>
                </div>
                {msg.isRead
                  ? <MailOpen size={14} className="text-[#374151] flex-shrink-0 mt-1" />
                  : <Mail size={14} className="text-[#49a739] flex-shrink-0 mt-1" />
                }
              </div>
            </button>
          ))}
        </div>

        {/* Detail */}
        <div className="lg:col-span-3">
          {selected ? (
            <div className="bg-[#0d150d] border border-[#1a2e1a] rounded-2xl p-6 sticky top-0">
              <div className="flex items-start justify-between mb-5">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#49a739] to-[#2e7d32] flex items-center justify-center text-white text-lg font-bold shadow-[0_8px_20px_rgba(73,167,57,0.35)]">
                    {selected.name.charAt(0).toUpperCase()}
                  </div>
                  <div>
                    <p className="text-white font-bold">{selected.name}</p>
                    <p className="text-[#6b7280] text-xs">{selected.email}</p>
                  </div>
                </div>
                <div className="flex gap-2">
                  <button
                    onClick={() => handleDelete(selected.id)}
                    disabled={isPending}
                    className="p-2 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 hover:bg-red-500/20 transition-all"
                  >
                    <Trash2 size={16} />
                  </button>
                  <button onClick={() => setSelected(null)} className="p-2 rounded-xl bg-[#111a11] border border-[#1a2e1a] text-[#6b7280] hover:text-white transition-all">
                    <X size={16} />
                  </button>
                </div>
              </div>

              <div className="bg-[#111a11] border border-[#1a2e1a] rounded-xl px-4 py-3 mb-4">
                <p className="text-white font-bold text-sm">{selected.subject || 'Sin asunto'}</p>
              </div>

              <div className="space-y-2 mb-4">
                <div className="flex items-center gap-2 text-xs text-[#6b7280]">
                  <AtSign size={13} className="text-[#49a739]" />
                  <span>{selected.email}</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-[#6b7280]">
                  <Clock size={13} className="text-[#49a739]" />
                  <span>{new Date(selected.createdAt).toLocaleString('es-CO')}</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-[#6b7280]">
                  <User size={13} className="text-[#49a739]" />
                  <span>{selected.name}</span>
                </div>
              </div>

              <div className="bg-[#111a11] border border-[#1a2e1a] rounded-xl p-4">
                <p className="text-[#9ca3af] text-sm leading-relaxed whitespace-pre-wrap">{selected.message}</p>
              </div>

              <a
                href={`mailto:${selected.email}?subject=Re: ${selected.subject || 'Tu mensaje'}`}
                className="mt-4 w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-gradient-to-r from-[#49a739] to-[#3d8f2f] text-white font-bold text-sm shadow-[0_8px_24px_rgba(73,167,57,0.3)] hover:shadow-[0_12px_30px_rgba(73,167,57,0.4)] transition-all"
              >
                <Mail size={16} />
                Responder por Email
              </a>
            </div>
          ) : (
            <div className="bg-[#0d150d] border border-[#1a2e1a] rounded-2xl p-10 flex flex-col items-center justify-center min-h-[300px]">
              <Eye size={40} className="text-[#1a2e1a] mb-3" />
              <p className="text-[#6b7280] font-semibold text-center">Selecciona un mensaje para verlo</p>
              <p className="text-[#374151] text-sm mt-1 text-center">Haz clic en cualquier mensaje de la lista</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
