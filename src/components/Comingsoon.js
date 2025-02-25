import React from "react";
import "./Comingsoon.css";
import { motion } from "framer-motion";

const ComingSoon = () => {
  return (
    <div className="coming-soon-container vh-100 d-flex align-items-center justify-content-center">
      <motion.div
        className="text-center text-white coming-soon-content"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="display-3 fw-bold fade-in">Paskal is Coming Soon!</h1>
        <p className="lead fade-in delay-1">
          A blockchain-based, AI-moderated social network. Stay tuned! 🚀
        </p>
        <motion.div
          className="bubble-animation"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ repeat: Infinity, duration: 2 }}
        ></motion.div>
        <div className="features mt-4">
          <ul className="list-unstyled">
            <li>✅ Blockchain-Powered: Secure & Decentralized</li>
            <li>🤖 AI Moderation: Smart & Real-Time</li>
            <li>🔒 Privacy-Focused: You Control Your Data</li>
            <li>🌍 Next-Gen Social Networking</li>
          </ul>
        </div>
      </motion.div>
    </div>
  );
};

export default ComingSoon;