'use strict';

const STORE = [
    {
        number: 1,
        question: "To Developement in Casper, You have prior knowledge about which OS?",
        options: [
            "macOS",
            "Linux",
            "GNU",
            "All the Above",
        ],
        answer: "All the Above",
        explanation: "It is recommended you have prior knowledge about Unix-based operating systems, like GNU/Linux or macOS to develop in Casper",
    },
    {
        number: 2,
        question: "Which Command used to install rust in OS",
        options: [
            "curl --proto '=http' --tlsv1.2 -sSf https://sh.rustup.rs | sh",
            "curl --proto '=https' --tlsv2.1 -sSf https://sh.rustup.rs | sh",
            "curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh",
            "All of the above",
        ],
        answer: "curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh",
        explanation: "Install the Rust programming language if you don't already have it on your computer. The official Rust guide recommends installing Rust by using curl:```curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh``` ",
    },
    {   
        number: 3,
        question: "How to install Casper Crates?",
        options: [
            "npm install cargo-casper",
            "cargo install cargo-casper",
            "yarn install cargo-casper",
            "All the Above",
        ],
        answer: "cargo install cargo-casper",
        explanation: "The best and fastest way to set up a Casper Rust Smart Contract project is to use cargo-casper. When you use this, it will set the project up with a simple contract, a runtime environment and a testing framework with a simple test. Cargo is a build system and package manager for Rust (much like pip if you are familiar with Python). It is possible to use this configuration in your CI/CD pipeline as well.```cargo install cargo-casper```",
    },
    {   
        number: 4,
        question: "What is a node?",
        options: [
            "A currency which is used for making or receiving payments on the blockchain",
            "The initial block within a blockchain",
            "A number used in a cryptographic communication",
            "A device connected to a blockchain network",
        ],
        answer: "A device connected to a blockchain network",
        explanation: "A node can be any active electronic device, including a computer, phone or even a printer, as long as it is connected to the internet. The role of a node is to support the network by maintaining a copy of a blockchain and, in some cases, to process transactions. All nodes are equal in importance on a blockchain, but a node can have different roles in making a blockchain work.",
    },
    {
        number: 5,
        question: "Which aspect of blockchain technology ensures that all nodes in a network are synchronized and agree on the validity of a transaction?",
        options: [
            "Consensus protocols",
            "Smart contracts",
            "Hash functions",
            "Tokens",
        ],
        answer: "Consensus protocols",
        explanation: "A consensus protocol is a set of rules that describe how the communication and transmission of data between electronic devices, such as nodes, works. Consensus is achieved when enough devices are in agreement about what is true and what should be recorded onto a blockchain."
    },
    {
        number: 6,
        question: "There are a variety of consensus protocols in blockchain. What is the consensus protocol introduced by Bitcoin?",
        options: [
            "Proof of stake",
            "Delegated proof of stake",
            "Proof of purchase",
            "Proof of work",
        ],
        answer: "Proof of work",
        explanation: "Proof of work is the consensus protocol introduced by Bitcoin and used widely by many other cryptocurrencies. The process is known as mining and the nodes on the network are known as “miners”. The “proof of work” comes in the form of an answer to a mathematical problem, one that requires considerable work to arrive at, but is easily verified to be correct once the answer has been reached.",
    },
    {   
        number: 7,
        question: "What is cryptography?",
        options: [
            "The study and practice of making maps",
            "The science of arranging events in their order of occurrence in time",
            "The study and practice of encrypting and decrypting information",
            "The aspect of language study concerned with letters and their sequences in words",
        ],
        answer: "The study and practice of encrypting and decrypting information",
        explanation: "Cryptography is the method of disguising and revealing, otherwise known as encrypting and decrypting information so that it can only be viewed by the intended recipients and nobody else. In modern terms, this is done through complex mathematics. The method involves taking unencrypted data, such as a piece of text, and encrypting it using a mathematical algorithm, known as a cipher.",
    },
    {   
        number: 8,
        question: "What type of cryptography is used in blockchain?",
        options: [
            "Symmetric-key cryptography",
            "Public-key cryptography",
            "ROT13 Cipher",
            "Enigma Cipher",
        ],
        answer: "Public-key cryptography",
        explanation: "Public-key cryptography, or asymmetric cryptography, is a cryptographic system that uses pairs of keys: public keys which are used to encrypt and may be disseminated widely, and private keys which are used to decrypt and known only to the owner. This type of cryptography is considerably better suited to blockchain technology compared to symmetric-key cryptography because a user can send their public key to anyone without worrying that someone will gain access to their private key.",
    },
    {   
        number: 9,
        question: "One of the key properties of blockchain is immutability. What gives blockchain this property?",
        options: [
            "Cryptographic hash functions",
            "Remote procedure calls ",
            "Mining",
            "Genesis blocks",
        ],
        answer: "Cryptographic hash functions",
        explanation: "Immutability, in the context of the blockchain, means that once something has been entered into the blockchain, it cannot be tampered with. The reason why the blockchain gets this property is that of cryptographic hash function. A cryptographic hash function is a hash function which takes an input (or “message”) and returns an alphanumeric string of a fixed-length. Changing any record that has previously happened on a blockchain would change all the hashes, making them false and obsolete.",
    },
    {   
        number: 10,
        question: "Blockchain is often described as what?",
        options: [
            "Trustless",
            "Trust-based",
            "Centralized",
            "Private",
        ],
        answer: "Trustless",
        explanation: "Blockchain technology creates what is referred to as a trustless model because it does not require trust to safely interact and transact. In blockchain, cryptography completely replaces third parties as the governor of trust. Participants on the network run complex consensus protocols to unanimously and securely agree on what should be added to the distributed ledger of blockchain, while also ensuring its integrity at all times.",
    },

];