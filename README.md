
# Tanikala Voting System
[![forthebadge](https://forthebadge.com/images/badges/made-with-javascript.svg)](https://forthebadge.com)
[![forthebadge](https://forthebadge.com/images/badges/run-with-allowance-money.svg)](https://forthebadge.com)
[![forthebadge](https://forthebadge.com/images/badges/powered-by-coffee.svg)](https://forthebadge.com)

<p align="center">
  <img src="./readme-img/logo-tanikala.png" alt="Logo" width="400"/>
</p>

A blockchain-based voting system for Bulacan State University to enhance the security, reliability, and transparency of its student government elections.

By integrating blockchain into the voting system, this project addresses the common issues found in traditional voting systems:

- **Security** – Protects voter privacy by ensuring all votes are anonymous and untraceable.

- **Reliability** – Guarantees accurate vote recording and secure storage, preventing tampering, deletion, or unauthorized modification.

- **Transparency** – Enables voters to verify that their votes were counted through transaction receipts, allowing independent verification of election results without compromising privacy.

## Authors
- [@Lowell0803](https://github.com/Lowell0803)
- [@loverinaa](https://www.github.com/loverinaa)

*This is in partial fulfillment of the requirements for the course subject **Thesis**, as part of the curriculum for fourth year students of the Bachelor of Science in Mathematics with Specialization in Computer Science.*

## Screenshots

![App Screenshot](https://via.placeholder.com/468x300?text=App+Screenshot+Here)

## Features & Contributions

| Section                  | Features                                                                                   | @Lowell0803        | @loverinaa         |
|--------------------------|--------------------------------------------------------------------------------------------|--------------------|--------------------|
| Project Management       | Task organization, coordination, and execution oversight                                  |                    | <p align="center">✔️</p> |
| System Concept           | Conceptualization of System                                                               |                    | <p align="center">✔️</p> |
| Designer & Graphics      | Logo design and graphical resource creation                                               |                    | <p align="center">✔️</p> |
| System Quality Testing   | Visual QA, logic testing, user flow testing                                               |                    | <p align="center">✔️</p> |
| Home & Static Pages      | Homepage, About, Candidates, Contact, dynamic EJS pages                                   | <p align="center">✔️</p> | <p align="center">✔️</p> |
| Mobile UX                | Mobile responsiveness (Home, Voting, Results pages)                                       | <p align="center">✔️</p> | <p align="center">✔️</p> |
| Authentication           | OTP via SendGrid, Microsoft login via Azure, Admin login UI                              | <p align="center">✔️</p> | <p align="center">✔️</p> |
| Admin Panel              | Dashboard, Config, Blockchain, Logs, Admin tabs & components                              | <p align="center">✔️</p> | <p align="center">✔️</p> |
| Voting Flow              | Vote, Review, Verify, Receipt flow                                                        | <p align="center">✔️</p> | <p align="center">✔️</p> |
| Results Verification     | Tally display, turnout stats, result logic & pages                                        | <p align="center">✔️</p> | <p align="center">✔️</p> |
| Contact System           | Contact form logic with MongoDB storage                                                   | <p align="center">✔️</p> |                    |
| Candidate & Voter Data   | CRUD for candidates, tailored ballot, voter info storage/filtering                        | <p align="center">✔️</p> |                    |
| System Logic             | Election config, archive/reset logic, activity logs, admin management                     | <p align="center">✔️</p> |                    |
| UI Components            | Sidebar, Header, Footer, Notifications, reusable layout                                   | <p align="center">✔️</p> | <p align="center">✔️</p> |
| Blockchain Setup         | MetaMask, Amoy Testnet, deploy scripts, submit votes/candidates, reset, hash tracking     | <p align="center">✔️</p> |                    |
| Blockchain Features      | Vote hash storage, CoinGecko API, candidate data fetching from chain                      | <p align="center">✔️</p> |                    |

---

## Acknowledgment

Special thanks to **Formula 1**, the original thesis group led by **Ms. Dungo**, who helped in the initial UI prototyping using Canva.  
They also attempted implementation and contributed code, but due to architectural misalignment and backend integration challenges, their version could not be continued.

As a result, the entire system was fully redesigned and rebuilt from scratch by **Ms. Zarina Dungo** and **Mr. Yvan Lowell Aquino**.

In general, **Mr. Aquino** handled the backend and blockchain logic, while **Ms. Dungo** focused on the frontend, UI/UX design, system testing, and project planning.

## Deployment

This website was deployed in [Render](render.com) over the duration of 2 months for the Thesis defense. But, after that, the deployment was discontinued to save costs.  

## Environment Variables

Refer to the file `.env.setup.guide` for info about the environment variables.
## FAQs

### 1. What blockchain technology did you use?
- We used Polygon, a scaling solution built on top of Ethereum. Polygon is designed to make blockchain transactions faster, cheaper, and more efficient, which makes it well-suited for voting systems.
### 2. How was the blockchain deployed in this project?
- The blockchain component was deployed on the Amoy Testnet, which is a test network used for development and experimentation.
### 3. Is this the actual repository used in the project?
- No. This is a meta repository intended for public viewing and documentation purposes only. It does not contain the complete or production-ready source code.
### 4. How can I run the full system?
- This meta repository does not include all the components necessary to run the system. If you require access to the full implementation (for academic or research purposes), please contact us at the emails below.
### 5. What files are missing from this repository?
- The key implementation files intentionally excluded from this meta repository include: `contracts/AdminCandidates.sol`, `scripts/deploy.js`, `server.js`, `hardhat.config.js`, `db.js`, and `package-lock.json`. These files contain core backend logic, blockchain integration scripts, and server configuration. If you require access for academic or research purposes, feel free to contact us via email.

## Feedback

If you have any feedback/comment/request, please reach out to us at:  

<p align="center">
  <div style="display: inline-block; text-align: center; margin: 0 40px;">
    <img src="./readme-img/yvan.png" width="100"/><br/>
    💌 aquino.ylt@gmail.com
  </div>
  <div style="display: inline-block; text-align: center; margin: 0 40px;">
    <img src="./readme-img/zari.png" width="100"/><br/>
    💌 dungo.zr@gmail.com
  </div>
</p>

Include your name, affiliation, and a clear reason for your request.