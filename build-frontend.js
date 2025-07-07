#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('Building frontend for deployment...');

try {
  // Install dependencies
  console.log('Installing dependencies...');
  execSync('npm install', { stdio: 'inherit' });
  
  // Build the frontend
  console.log('Building frontend...');
  execSync('npm run build', { stdio: 'inherit' });
  
  // Check if build was successful
  const distPath = path.join(__dirname, 'dist', 'public');
  if (fs.existsSync(distPath)) {
    console.log('✅ Frontend build completed successfully!');
    console.log('Build output directory:', distPath);
  } else {
    console.error('❌ Build failed - output directory not found');
    process.exit(1);
  }
  
} catch (error) {
  console.error('❌ Build failed:', error.message);
  process.exit(1);
}