'use server';

import { prisma } from '@/lib/prisma';
import { revalidatePath } from 'next/cache';

// ============ DASHBOARD ============
export async function getDashboardStats() {
  try {
    const [users, messages, services, initiatives, unreadMessages] = await Promise.all([
      prisma.user.count(),
      prisma.contactMessage.count(),
      prisma.service.count({ where: { isActive: true } }),
      prisma.initiative.count(),
      prisma.contactMessage.count({ where: { isRead: false } }),
    ]);
    return { success: true, data: { users, messages, services, initiatives, unreadMessages } };
  } catch (error) {
    console.error('Error fetching dashboard stats:', error);
    return { success: false, data: { users: 0, messages: 0, services: 0, initiatives: 0, unreadMessages: 0 } };
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

export async function createService(data: { title: string; description: string; icon?: string }) {
  try {
    await prisma.service.create({ data });
    revalidatePath('/admin/servicios');
    return { success: true };
  } catch (error) {
    console.error('Error creating service:', error);
    return { success: false, error: 'Error al crear servicio' };
  }
}

export async function updateService(id: string, data: { title?: string; description?: string; icon?: string; isActive?: boolean }) {
  try {
    await prisma.service.update({ where: { id }, data });
    revalidatePath('/admin/servicios');
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
    await prisma.initiative.create({
      data: {
        title: data.title,
        content: data.content,
        imageUrl: data.imageUrl,
        status: data.status || 'ACTIVE'
      }
    });
    revalidatePath('/admin/iniciativas');
    return { success: true };
  } catch (error) {
    console.error('Error creating initiative:', error);
    return { success: false, error: 'Error al crear iniciativa' };
  }
}

export async function updateInitiative(id: string, data: { title?: string; content?: string; imageUrl?: string; status?: string }) {
  try {
    await prisma.initiative.update({ where: { id }, data });
    revalidatePath('/admin/iniciativas');
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
    return { success: true };
  } catch (error) {
    console.error('Error deleting initiative:', error);
    return { success: false };
  }
}

// ============ USUARIOS ============
export async function getUsers() {
  try {
    const users = await prisma.user.findMany({ orderBy: { createdAt: 'desc' } });
    return { success: true, data: users };
  } catch (error) {
    console.error('Error fetching users:', error);
    return { success: false, data: [] };
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
