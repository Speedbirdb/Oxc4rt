import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-scheduler',
  imports: [FormsModule, CommonModule],
  templateUrl: './scheduler.html',
  styleUrl: './scheduler.scss'
})
export class Scheduler {
  plans = [
    { id: 1, name: 'Sample Project', description: 'Example project', itemCount: 2, color: '#007bff' }
  ];

  planItems = [
    { id: 1, planId: 1, title: 'Task 1', description: 'First sample task', priority: 'high', urgency: 'medium', color: '#dc3545', status: 'todo', dueDate: '2024-12-25' },
    { id: 2, planId: 1, title: 'Task 2', description: 'Second sample task', priority: 'medium', urgency: 'low', color: '#28a745', status: 'done', dueDate: '2024-12-30' }
  ];

  selectedPlan: any = null;
  showNewPlanForm: boolean = false;
  showNewItemForm: boolean = false;
  currentView: 'list' | 'calendar' = 'list';
  userEmail: string = 'user@example.com';

  newPlanName: string = '';
  newPlanDescription: string = '';
  newItemTitle: string = '';
  newItemDescription: string = '';
  newItemPriority: string = 'medium';
  newItemUrgency: string = 'medium';
  newItemColor: string = '#007bff';
  newItemDueDate: string = '';

  constructor() {
    this.userEmail = localStorage.getItem('signupEmail') || 'user@example.com';
  }

  addNewPlan() {
    if (this.newPlanName.trim()) {
      const newPlan = {
        id: Date.now(),
        name: this.newPlanName.trim(),
        description: this.newPlanDescription.trim(),
        itemCount: 0,
        color: '#' + Math.floor(Math.random()*16777215).toString(16)
      };
      this.plans.push(newPlan);
      this.newPlanName = '';
      this.newPlanDescription = '';
      this.showNewPlanForm = false;
    }
  }

  selectPlan(plan: any) {
    this.selectedPlan = plan;
    this.showNewPlanForm = false;
    this.showNewItemForm = false;
  }

  goBackToOverview() {
    this.selectedPlan = null;
    this.showNewItemForm = false;
  }

  deletePlan(planId: number) {
    this.plans = this.plans.filter(plan => plan.id !== planId);
    this.planItems = this.planItems.filter(item => item.planId !== planId);
    if (this.selectedPlan?.id === planId) {
      this.selectedPlan = null;
    }
  }

  addNewItem() {
    if (this.newItemTitle.trim() && this.selectedPlan) {
      const newItem = {
        id: Date.now(),
        planId: this.selectedPlan.id,
        title: this.newItemTitle.trim(),
        description: this.newItemDescription.trim(),
        priority: this.newItemPriority,
        urgency: this.newItemUrgency,
        color: this.newItemColor,
        status: 'todo',
        dueDate: this.newItemDueDate
      };
      this.planItems.push(newItem);
      
      // Update plan item count
      const plan = this.plans.find(p => p.id === this.selectedPlan.id);
      if (plan) {
        plan.itemCount++;
      }
      
      // Reset form
      this.newItemTitle = '';
      this.newItemDescription = '';
      this.newItemPriority = 'medium';
      this.newItemUrgency = 'medium';
      this.newItemColor = '#007bff';
      this.newItemDueDate = '';
      this.showNewItemForm = false;
    }
  }

  updateItemStatus(itemId: number, status: string) {
    const item = this.planItems.find(item => item.id === itemId);
    if (item) {
      item.status = status;
    }
  }

  deleteItem(itemId: number) {
    const item = this.planItems.find(item => item.id === itemId);
    if (item) {
      // Update plan item count
      const plan = this.plans.find(p => p.id === item.planId);
      if (plan && plan.itemCount > 0) {
        plan.itemCount--;
      }
      
      // Remove item
      this.planItems = this.planItems.filter(item => item.id !== itemId);
    }
  }

  toggleNewPlanForm() {
    this.showNewPlanForm = !this.showNewPlanForm;
    this.selectedPlan = null;
  }

  toggleNewItemForm() {
    this.showNewItemForm = !this.showNewItemForm;
  }

  switchView(view: 'list' | 'calendar') {
    this.currentView = view;
  }

  getSelectedPlanItems() {
    return this.planItems.filter(item => item.planId === this.selectedPlan?.id);
  }

  getPriorityColor(priority: string, urgency: string) {
    if (priority === 'high' && urgency === 'high') return '#dc3545';
    if (priority === 'high' && urgency === 'low') return '#fd7e14';
    if (priority === 'low' && urgency === 'high') return '#ffc107';
    return '#28a745';
  }

  getCompletedCount() {
    return this.planItems.filter(item => item.status === 'done').length;
  }

  getRecentItems() {
    return this.planItems.slice(0, 3);
  }

  getCalendarDays() {
    return Array.from({length: 31}, (_, i) => i + 1);
  }

  logout() {
    localStorage.clear();
  }
}
