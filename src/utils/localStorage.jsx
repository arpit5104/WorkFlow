const employees = [
      {
        "id": 1,
        "email": "employee1@example.com",
        "password": "123",
        "tasks": [
          {
            "active": true,
            "newTask": false,
            "failed": false,
            "title": "Task 1",
            "description": "Description for task 1",
            "date": "2023-10-20",
            "category": "Development"
          },
          {
            "active": false,
            "newTask": true,
            "failed": false,
            "title": "Task 2",
            "description": "Description for task 2",
            "date": "2023-10-25",
            "category": "Testing"
          },
          {
            "active": true,
            "newTask": false,
            "failed": true,
            "title": "Task 3",
            "description": "Description for task 3",
            "date": "2023-10-15",
            "category": "Documentation"
          }
        ]
      },
      {
        "id": 2,
        "email": "employee2@example.com",
        "password": "123",
        "tasks": [
          {
            "active": true,
            "newTask": false,
            "failed": false,
            "title": "Task 1",
            "description": "Description for task 1",
            "date": "2023-10-22",
            "category": "Design"
          },
          {
            "active": false,
            "newTask": true,
            "failed": false,
            "title": "Task 2",
            "description": "Description for task 2",
            "date": "2023-10-28",
            "category": "Research"
          },
          {
            "active": true,
            "newTask": false,
            "failed": true,
            "title": "Task 3",
            "description": "Description for task 3",
            "date": "2023-10-18",
            "category": "Development"
          },
          {
            "active": false,
            "newTask": true,
            "failed": false,
            "title": "Task 4",
            "description": "Description for task 4",
            "date": "2023-10-30",
            "category": "Testing"
          }
        ]
      },
      {
        "id": 3,
        "email": "employee3@example.com",
        "password": "123",
        "tasks": [
          {
            "active": true,
            "newTask": false,
            "failed": false,
            "title": "Task 1",
            "description": "Description for task 1",
            "date": "2023-10-24",
            "category": "Documentation"
          },
          {
            "active": false,
            "newTask": true,
            "failed": false,
            "title": "Task 2",
            "description": "Description for task 2",
            "date": "2023-10-29",
            "category": "Design"
          },
          {
            "active": true,
            "newTask": false,
            "failed": true,
            "title": "Task 3",
            "description": "Description for task 3",
            "date": "2023-10-19",
            "category": "Research"
          }
        ]
      },
      {
        "id": 4,
        "email": "employee4@example.com",
        "password": "123",
        "tasks": [
          {
            "active": true,
            "newTask": false,
            "failed": false,
            "title": "Task 1",
            "description": "Description for task 1",
            "date": "2023-10-23",
            "category": "Development"
          },
          {
            "active": false,
            "newTask": true,
            "failed": false,
            "title": "Task 2",
            "description": "Description for task 2",
            "date": "2023-10-27",
            "category": "Testing"
          },
          {
            "active": true,
            "newTask": false,
            "failed": true,
            "title": "Task 3",
            "description": "Description for task 3",
            "date": "2023-10-17",
            "category": "Documentation"
          },
          {
            "active": false,
            "newTask": true,
            "failed": false,
            "title": "Task 4",
            "description": "Description for task 4",
            "date": "2023-10-31",
            "category": "Design"
          }
        ]
      },
      {
        "id": 5,
        "email": "employee5@example.com",
        "password": "123",
        "tasks": [
          {
            "active": true,
            "newTask": false,
            "failed": false,
            "title": "Task 1",
            "description": "Description for task 1",
            "date": "2023-10-21",
            "category": "Research"
          },
          {
            "active": false,
            "newTask": true,
            "failed": false,
            "title": "Task 2",
            "description": "Description for task 2",
            "date": "2023-10-26",
            "category": "Development"
          },
          {
            "active": true,
            "newTask": false,
            "failed": true,
            "title": "Task 3",
            "description": "Description for task 3",
            "date": "2023-10-16",
            "category": "Testing"
          }
        ]
      }
    ];

const admin = [
    {
        "id": 1,
        "email": "admin@example.com",
        "password": "123"
      }
    ] ;
    

    export const setLocalStorage = ()=>{
        localStorage.setItem('employees', JSON.stringify(employees));
        localStorage.setItem('admin', JSON.stringify(admin));
    }

    export const getLocalStorage = ()=>{
        const data = JSON.parse(localStorage.getItem('employees'));
        const dmin = JSon.parse(localStorage.getItem('admin'));
    }
