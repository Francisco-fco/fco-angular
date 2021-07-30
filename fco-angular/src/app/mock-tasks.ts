// Gives the mock-task a structure of what it wants
import {Task} from './Task'

// Conect mock-tasks to the instructed inputs from Task Interface
export const TASKS: Task[] = [
    {
      "id": 1,
      "text": "Möte",
      "day": "27 September kl 13:00",
      "reminder": true
    },
    {
      "id": 2,
      "text": "Family roadtrip",
      "day": "30 September kl 09:00",
      "reminder": true
    },
    {
      "id": 3,
      "text": "Möte",
      "day": "12 oktoberber kl 10:30",
      "reminder": false
    }
  ]