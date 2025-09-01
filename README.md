# Tanikala Voting System

[![Made in College](readme-img/made-in-college.svg)](https://forthebadge.com) [![Start Date](readme-img/start-date.svg)](https://forthebadge.com)

[![Made with Node.js](readme-img/made-with-node.js.svg)](https://forthebadge.com) [![Made with Solidity](readme-img/made-with-solidity.svg)](https://forthebadge.com) [![Powered by Blockchain](readme-img/powered-by-blockchain.svg)](https://forthebadge.com) [![Tested in Polygon Amoy](readme-img/tested-in-polygon-amoy.svg)](https://forthebadge.com)

<p align="center">
  <img src="./readme-img/logo-tanikala.png" alt="Logo" width="400"/>
</p>

A blockchain-based voting system designed for Bulacan State University to enhance the security, reliability, and transparency of its student government elections.

By integrating blockchain into the voting system, this project addresses the common issues found in traditional voting systems:

- **Security** – Protects voter privacy by ensuring all votes are anonymous and untraceable.

- **Reliability** – Guarantees accurate vote recording and secure storage, preventing tampering, deletion, or unauthorized modification.

- **Transparency** – Enables voters to verify that their votes were counted through voting receipts, allowing independent verification of election results without compromising privacy.

## Developers

- [@loverinaa](https://www.github.com/loverinaa)
- [@Lowell0803](https://github.com/Lowell0803)

_This is in partial fulfillment of the requirements for the course subject **Thesis**, as part of the curriculum for fourth year students of the Bachelor of Science in Mathematics with Specialization in Computer Science._

## Features & Contributions

| Section                | Features                                                                              | @Lowell0803              | @loverinaa               |
| ---------------------- | ------------------------------------------------------------------------------------- | ------------------------ | ------------------------ |
| Project Management     | Task organization, coordination, and execution oversight                              |                          | <p align="center">✔️</p> |
| System Concept         | Conceptualization of System                                                           |                          | <p align="center">✔️</p> |
| Designer & Graphics    | Logo design and graphical resource creation                                           |                          | <p align="center">✔️</p> |
| System Quality Testing | Visual QA, logic testing, user flow testing                                           |                          | <p align="center">✔️</p> |
| Home & Static Pages    | Homepage, About, Candidates, Contact, dynamic EJS pages                               | <p align="center">✔️</p> | <p align="center">✔️</p> |
| Mobile UX              | Mobile responsiveness (Home, Voting, Results pages)                                   | <p align="center">✔️</p> | <p align="center">✔️</p> |
| Authentication         | OTP via SendGrid, Microsoft login via Azure, Admin login UI                           | <p align="center">✔️</p> | <p align="center">✔️</p> |
| Admin Panel            | Dashboard, Config, Blockchain, Logs, Admin tabs & components                          | <p align="center">✔️</p> | <p align="center">✔️</p> |
| Voting Flow            | Vote, Review, Verify, Receipt flow                                                    | <p align="center">✔️</p> | <p align="center">✔️</p> |
| Results Verification   | Tally display, turnout stats, result logic & pages                                    | <p align="center">✔️</p> | <p align="center">✔️</p> |
| Contact System         | Contact form logic with MongoDB storage                                               | <p align="center">✔️</p> |                          |
| Candidate & Voter Data | CRUD for candidates, tailored ballot, voter info storage/filtering                    | <p align="center">✔️</p> |                          |
| System Logic           | Election config, archive/reset logic, activity logs, admin management                 | <p align="center">✔️</p> |                          |
| UI Components          | Sidebar, Header, Footer, Notifications, reusable layout                               | <p align="center">✔️</p> | <p align="center">✔️</p> |
| Blockchain Setup       | MetaMask, Amoy Testnet, deploy scripts, submit votes/candidates, reset, hash tracking | <p align="center">✔️</p> |                          |
| Blockchain Features    | Vote hash storage, CoinGecko API, candidate data fetching from chain                  | <p align="center">✔️</p> |                          |

---

## System Screenshots

<div align="center">
  <h3>Homepage</h3>
  <img src="readme-img/ss-homepage.png" width="500" style="border-radius: 8px;" alt="Homepage" />
  <br/>
  <i><span style="font-size: xx-small;">The homepage dynamically changes based on the election phase: inactive, registration, voting, double-checking, or results. </span></i>
</div>

<div align="center">
  <h3>Voter Registration</h3>
  <img src="readme-img/ss-registration.png" width="500" style="border-radius: 8px;" alt="Voter Registration" />
  <br/>
  <i><span style="font-size: xx-small;">Only BulSU undergraduate students enrolled in the current school year can register via Microsoft Authentication.</span></i>
</div>

<div align="center">
  <h3>Voting Interface</h3>
  <img src="readme-img/ss-vote.png" width="500" style="border-radius: 8px;" alt="Vote Interface" />
  <br/>
  <i><span style="font-size: xx-small;">Tailored ballots are generated based on the student voter's college and program.</span></i>
</div>

<div align="center">
  <h3>Vote Verification</h3>
  <img src="readme-img/ss-verify.png" width="500" style="border-radius: 8px;" alt="Vote Verification" />
  <br/>
  <i><span style="font-size: xx-small;">After voting, voters can verify their votes along with their hashed voter ID through a generated voting receipt.</span></i>
</div>

<div align="center">
  <h3>Voting Receipt</h3>
  <img src="readme-img/ss-receipt.png" style="border-radius: 8px;" alt="Vote Receipt" />
  <br/>
  <i><span style="font-size: xx-small;">The voting receipt, which contains a hashed voter ID and the selected candidates, can be downloaded by the voter for independent verification after the election.</span></i>
</div>

<div align="center">
  <h3>Admin Dashboard</h3>
  <img src="readme-img/ss-admin-dashboard.png" width="500" style="border-radius: 8px;" alt="Admin Dashboard" />
  <br/>
  <i><span style="font-size: xx-small;">It contains an overview of the election and provides quick actions.</span></i>
</div>

<div align="center">
  <h3>Blockchain Management</h3>
  <img src="readme-img/ss-blockchain-1.png" width="500" style="border-radius: 8px;" alt="Blockchain Record 1" />
  <br/><br/>
  <img src="readme-img/ss-blockchain-2.png" width="500" style="border-radius: 8px;" alt="Blockchain Record 2" />
  <br/>
  <i><span style="font-size: xx-small;">
    Provides information about the blockchain, with a focus on tracking expenses.
  </span></i>
</div>

<div align="center">
  <h3>Vote Audit Log</h3>
  <img src="readme-img/ss-vote-audit.png" width="500" style="border-radius: 8px;" alt="Vote Audit Log" />
  <br/>
  <i><span style="font-size: xx-small;">The votes are tracked by the admin using the Vote Audit Log. However, they cannot see the voter's personal information—only the hashed voter ID and the candidates selected.</span></i>
</div>

<div align="center">
  <h3>Vote Tally</h3>
  <img src="readme-img/ss-vote-tally.png" width="500" style="border-radius: 8px;" alt="Vote Tally" />
  <br/>
  <i><span style="font-size: xx-small;">The vote tally provides a live update of the election results.</span></i>
</div>

<div align="center">
  <h3>Results Verification Portal</h3>
  <img src="readme-img/ss-rvs.png" width="500" style="border-radius: 8px;" alt="RVS Main" />
  <br/>
  <i><span style="font-size: xx-small;">The Results Verification Portal, accessible once the elections have concluded, publicly displays election results—including voter turnout, votes per candidate, and final winners—while ensuring that voters’ personal information remains confidential.</span></i>
</div>

<div align="center">
  <h3>Results Verification Portal - Votes Per Candidate</h3>
  <img src="readme-img/ss-rvs-votes-per-candidate.png" width="500" style="border-radius: 8px;" alt="RVS Votes Per Candidate" />
  <br/>
  <i><span style="font-size: xx-small;">Displays the vote count for each candidate along with their list of hashed voter IDs, verifying the validity of the counts while keeping voter identities confidential.</span></i>

<div align="center">
  <h3>List of Voter IDs per Candidate</h3>
  <img src="readme-img/ss-rvs-voter-id.png" width="500" style="border-radius: 8px;" alt="RVS Voter ID View" />
  <br/>
  <i><span style="font-size: xx-small;">For each candidate, users can search for their hashed voter ID (from their receipt) to independently verify that their vote has been counted, without revealing their personal identity.</span></i>
</div>

</div>

<br/>
<small>
<i><b>Disclaimer:</b> Only selected pages and tabs are shown to keep this README concise.</i>
</small>

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

<table align="center" width="100%">
  <tr>
    <td align="center" width="50%">
      <img src="./readme-img/zari.png" width="120"/><br/>
      💌<br/>dungo.zr@gmail.com
    </td>
    <td align="center" width="50%">
      <img src="./readme-img/yvan.png" width="120"/><br/>
      💌<br/>aquino.ylt@gmail.com
    </td>
  </tr>
</table>

Include your name, affiliation, and a clear reason for your request.

### Thank you and God bless!
