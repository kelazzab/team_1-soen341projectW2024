# SOEN 341 Group Project: Team 1</h3>

## Summary

* [About the project](#about-the-project)
* [Technologies](#technologies)
* [Installation](#installation)
* [Prerequisite](#prerequisites)
* [Running](#running)
* [Utilisation](#utilisation)
* [Team Members](#team-members)


## About the project

The project aims to develop a car rental web application leveraging a [Micro Service](https://learn.microsoft.com/en-us/azure/architecture/guide/architecture-styles/microservices) architecture. 
This web is designed to streamline the vehicle rental process for short durations, typically from a 
few hours to several weeks. It functions as an intermediary between customers seeking to rent vehicles and the car 
rental companies providing those services. The application enables users to explore a variety of vehicle models 
available for rent, complete with descriptions, photos, and detailed specifications for each vehicle. Additionally, 
it offers a range of services to both users and rental providers, enhancing the rental experience and simplifying the 
transaction process.

It implements different services for users and renters:

#### Lists of services clients/renters

The user is most often a business looking to rent vehicles:
* Sign-up page
  ![Status][s-todo]
* Login (not required to view the homepage)
  ![Status][s-todo]
* Homepage displaying the various models offered
  ![Status][s-todo]
* 10% discount for monthly payment (from one month onwards)
  ![Status][s-todo]
* Login required for renting
  ![Status][s-todo]
* Selection of a date range
  ![Status][s-todo] ![Role][s-customer]
* Option for indefinite monthly payment (renewal each month)
  ![Status][s-todo] ![Role][s-customer]
* Display of models available for rent according to entered dates
  ![Status][s-todo] ![Role][s-customer]
* Summary page of a rental
  ![Status][s-todo] ![Role][s-customer] ![Role][s-renter]
* Panel of all completed rentals
  ![Status][s-todo] ![Role][s-customer] ![Role][s-renter]
* Access to the invoice
  ![Status][s-todo] ![Role][s-renter]
* Management panel
  ![Status][s-todo] ![Role][s-renter]
* Display of income, bookings for the current month
  ![Status][s-todo] ![Role][s-renter]
* Display of the percentage of vehicles currently rented
  ![Status][s-todo] ![Role][s-renter]
* Display of customer count
  ![Status][s-todo] ![Role][s-renter]
* Table of the latest rentals
  ![Status][s-todo] ![Role][s-renter]
* Summary page of vehicles with the status of each vehicle
  ![Status][s-todo] ![Role][s-renter]
* Vehicle modification page (not rented), with the option to remove the vehicle from stock
  ![Status][s-todo] ![Role][s-renter]
* Form to add a new vehicle
  ![Status][s-todo] ![Role][s-renter]
* Page of all clients
  ![Status][s-todo] ![Role][s-renter]
* Calculation of invoices for each client of the current month
  ![Status][s-todo] ![Role][s-renter]

#### Administrator
An Administrator role is also implemented:
* Administration panel
  ![Status][s-todo] ![Role][s-admin]
* Display of user count
  ![Status][s-todo] ![Role][s-admin]
* Table of all registered users
  ![Status][s-todo] ![Role][s-admin]
* Option to delete an account
  ![Status][s-todo] ![Role][s-admin]
* Option to set a user account as a renter account
  ![Status][s-todo] ![Role][s-admin]
* Option to set a renter account as a user account
  ![Status][s-todo] ![Role][s-admin]

#### Security
The application relies on a robust structure to ensure security:
* Secure authentication with login token
  ![Status][s-todo]
* Hashed password, with the option to rehash the password
  ![Status][s-todo]
* Access restrictions to certain URLs depending on the role
  ![Status][s-todo]
* Data stored in a database with secure access
  ![Status][s-todo]

## Technologies
This web application uses certain technologies and frameworks:

### Front-end
* [Tailwind CSS](https://tailwindcss.com)
* [SvelteKit](https://kit.svelte.dev)

### Back-end
* [Nestjs](https://nestjs.com)


<!-- Installation -->
## Installation

Work In Progress

### Prerequisites

Work In Progress

### Running

Work In Progress

### Extensions used

Work In Progress

<!-- USAGE EXAMPLES -->
## Utilisation

Work In Progress

## Team Members

- Asma Aimade: asmaaimade0@gmail.com
- Zineb Bamouh: zineb.bamouh@gmail.com
- Mohamed Gueye: mohamed.gueye88@gmail.com
- Apolline Leboucher
- Beaudelaire Tsoungui Nzodoumkouo: beaudelaire@tutamail.com

Documentation of the features offered by our application! (see the project wiki)![Status][s-todo]

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[s-url]: (#roadmap)
[s-todo]: https://img.shields.io/static/v1?label=Statut&message=Todo&color=blue
[s-in-progress]: https://img.shields.io/static/v1?label=Statut&message=In%20progress&color=orange
[s-finished]: https://img.shields.io/static/v1?label=Statut&message=Finished&color=green
[s-customer]: https://img.shields.io/static/v1?label=Role&message=Customer&color=yellow
[s-renter]: https://img.shields.io/static/v1?label=Role&message=Renter&color=purple
[s-admin]: https://img.shields.io/static/v1?label=Role&message=Admin&color=red
[s-bug]: https://img.shields.io/static/v1?label=Statut&message=Bug&color=purple
[s-frontend]: https://img.shields.io/static/v1?label=Front-end&message=90%&color=green
[s-backend]: https://img.shields.io/static/v1?label=Back-end&message=40%&color=orange
[screenshot]: images/screenshot.png
