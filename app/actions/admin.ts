'use server';

import { prisma } from '@/lib/prisma';
import { revalidatePath } from 'next/cache';
import bcrypt from 'bcryptjs';

const USER_SAFE_SELECT = {
  id: true,
  email: true,
  name: true,
  role: true,
  createdAt: true,
  updatedAt: true,
} as const;

// ============ DASHBOARD ============
export async function getDashboardStats() {
  try {
    // Sequential, not Promise.all: concurrent queries against the shared
    // Prisma driver-adapter pool can fail/hang intermittently (see lib/prisma.ts).
    const users = await prisma.user.count();
    const messages = await prisma.contactMessage.count();
    const services = await prisma.service.count({ where: { isActive: true } });
    const initiatives = await prisma.initiative.count();
    const unreadMessages = await prisma.contactMessage.count({ where: { isRead: false } });
    return { success: true, data: { users, messages, services, initiatives, unreadMessages } };
  } catch (error) {
    console.error('Error fetching dashboard stats:', error);
    return { success: false, data: { users: 0, messages: 0, services: 0, initiatives: 0, unreadMessages: 0 } };
  }
}

export async function getRecentActivity() {
  try {
    // Sequential, not Promise.all: concurrent queries against the shared
    // Prisma driver-adapter pool can fail/hang intermittently (see lib/prisma.ts).
    const messages = await prisma.contactMessage.findMany({
      orderBy: { createdAt: 'desc' },
      take: 5,
      select: { id: true, name: true, createdAt: true },
    });
    const services = await prisma.service.findMany({
      orderBy: { updatedAt: 'desc' },
      take: 5,
      select: { id: true, title: true, createdAt: true, updatedAt: true },
    });
    const initiatives = await prisma.initiative.findMany({
      orderBy: { updatedAt: 'desc' },
      take: 5,
      select: { id: true, title: true, createdAt: true, updatedAt: true },
    });
    const events = [
      ...messages.map((m) => ({
        id: `msg-${m.id}`,
        text: `Nuevo mensaje de ${m.name}`,
        date: m.createdAt,
        color: 'bg-blue-500',
      })),
      ...services.map((s) => ({
        id: `svc-${s.id}`,
        text: `Servicio "${s.title}" ${s.createdAt.getTime() === s.updatedAt.getTime() ? 'creado' : 'actualizado'}`,
        date: s.updatedAt,
        color: 'bg-[#49a739]',
      })),
      ...initiatives.map((i) => ({
        id: `init-${i.id}`,
        text: `Iniciativa "${i.title}" ${i.createdAt.getTime() === i.updatedAt.getTime() ? 'creada' : 'actualizada'}`,
        date: i.updatedAt,
        color: 'bg-teal-500',
      })),
    ]
      .sort((a, b) => b.date.getTime() - a.date.getTime())
      .slice(0, 6);

    return { success: true, data: events };
  } catch (error) {
    console.error('Error fetching recent activity:', error);
    return { success: false, data: [] };
  }
}

// ============ MENSAJES ============
export async function getContactMessages() {
  try {
    const messages = await prisma.contactMessage.findMany({
      orderBy: { createdAt: 'desc' }
    });
    return { success: true, data: messages };
  } catch (error) {
    console.error('Error fetching messages:', error);
    return { success: false, data: [] };
  }
}

export async function markMessageAsRead(id: string) {
  try {
    await prisma.contactMessage.update({ where: { id }, data: { isRead: true } });
    revalidatePath('/admin/mensajes');
    return { success: true };
  } catch (error) {
    console.error('Error updating message:', error);
    return { success: false };
  }
}

export async function deleteMessage(id: string) {
  try {
    await prisma.contactMessage.delete({ where: { id } });
    revalidatePath('/admin/mensajes');
    return { success: true };
  } catch (error) {
    console.error('Error deleting message:', error);
    return { success: false };
  }
}

export async function createContactMessage(data: { name: string; email: string; subject?: string; message: string }) {
  try {
    await prisma.contactMessage.create({
      data: {
        name: data.name,
        email: data.email,
        subject: data.subject || 'Sin asunto',
        message: data.message
      }
    });
    revalidatePath('/admin/mensajes');
    return { success: true };
  } catch (error) {
    console.error('Error creating message:', error);
    return { success: false };
  }
}

// ============ SERVICIOS ============
export async function getServices() {
  try {
    const services = await prisma.service.findMany({ orderBy: { createdAt: 'desc' } });
    return { success: true, data: services };
  } catch (error) {
    console.error('Error fetching services:', error);
    return { success: false, data: [] };
  }
}

export async function createService(data: { title: string; description: string; icon?: string; category?: string }) {
  try {
    const service = await prisma.service.create({ data });
    revalidatePath('/admin/servicios');
    revalidatePath('/servicios');
    return { success: true, data: service };
  } catch (error) {
    console.error('Error creating service:', error);
    return { success: false, error: 'Error al crear servicio' };
  }
}

export async function updateService(id: string, data: { title?: string; description?: string; icon?: string; category?: string; isActive?: boolean }) {
  try {
    await prisma.service.update({ where: { id }, data });
    revalidatePath('/admin/servicios');
    revalidatePath('/servicios');
    return { success: true };
  } catch (error) {
    console.error('Error updating service:', error);
    return { success: false };
  }
}

export async function deleteService(id: string) {
  try {
    await prisma.service.delete({ where: { id } });
    revalidatePath('/admin/servicios');
    revalidatePath('/servicios');
    return { success: true };
  } catch (error) {
    console.error('Error deleting service:', error);
    return { success: false };
  }
}

// ============ INICIATIVAS ============
export async function getInitiatives() {
  try {
    const initiatives = await prisma.initiative.findMany({ orderBy: { createdAt: 'desc' } });
    return { success: true, data: initiatives };
  } catch (error) {
    console.error('Error fetching initiatives:', error);
    return { success: false, data: [] };
  }
}

export async function createInitiative(data: { title: string; content: string; imageUrl?: string; status?: string }) {
  try {
    const initiative = await prisma.initiative.create({
      data: {
        title: data.title,
        content: data.content,
        imageUrl: data.imageUrl,
        status: data.status || 'ACTIVE'
      }
    });
    revalidatePath('/admin/iniciativas');
    revalidatePath('/iniciativas');
    return { success: true, data: initiative };
  } catch (error) {
    console.error('Error creating initiative:', error);
    return { success: false, error: 'Error al crear iniciativa' };
  }
}

export async function updateInitiative(id: string, data: { title?: string; content?: string; imageUrl?: string; status?: string }) {
  try {
    await prisma.initiative.update({ where: { id }, data });
    revalidatePath('/admin/iniciativas');
    revalidatePath('/iniciativas');
    return { success: true };
  } catch (error) {
    console.error('Error updating initiative:', error);
    return { success: false };
  }
}

export async function deleteInitiative(id: string) {
  try {
    await prisma.initiative.delete({ where: { id } });
    revalidatePath('/admin/iniciativas');
    revalidatePath('/iniciativas');
    return { success: true };
  } catch (error) {
    console.error('Error deleting initiative:', error);
    return { success: false };
  }
}

// ============ USUARIOS ============
export async function getUsers() {
  try {
    const users = await prisma.user.findMany({
      orderBy: { createdAt: 'desc' },
      select: USER_SAFE_SELECT,
    });
    return { success: true, data: users };
  } catch (error) {
    console.error('Error fetching users:', error);
    return { success: false, data: [] };
  }
}

export async function createUser(data: { name?: string; email: string; password: string; role?: string }) {
  try {
    const hashedPassword = await bcrypt.hash(data.password, 10);
    const user = await prisma.user.create({
      data: {
        name: data.name || null,
        email: data.email,
        password: hashedPassword,
        role: data.role || 'USER',
      },
      select: USER_SAFE_SELECT,
    });
    revalidatePath('/admin/usuarios');
    return { success: true, data: user };
  } catch (error: unknown) {
    console.error('Error creating user:', error);
    if (typeof error === 'object' && error !== null && 'code' in error && error.code === 'P2002') {
      return { success: false, error: 'Ese email ya está registrado' };
    }
    return { success: false, error: 'Error al crear usuario' };
  }
}

export async function updateUser(id: string, data: { name?: string; email?: string; password?: string; role?: string }) {
  try {
    const updateData: { name?: string; email?: string; password?: string; role?: string } = {
      name: data.name,
      email: data.email,
      role: data.role,
    };
    if (data.password) {
      updateData.password = await bcrypt.hash(data.password, 10);
    }
    const user = await prisma.user.update({
      where: { id },
      data: updateData,
      select: USER_SAFE_SELECT,
    });
    revalidatePath('/admin/usuarios');
    return { success: true, data: user };
  } catch (error: unknown) {
    console.error('Error updating user:', error);
    if (typeof error === 'object' && error !== null && 'code' in error && error.code === 'P2002') {
      return { success: false, error: 'Ese email ya está registrado' };
    }
    return { success: false, error: 'Error al actualizar usuario' };
  }
}

export async function deleteUser(id: string) {
  try {
    await prisma.user.delete({ where: { id } });
    revalidatePath('/admin/usuarios');
    return { success: true };
  } catch (error) {
    console.error('Error deleting user:', error);
    return { success: false };
  }
}
