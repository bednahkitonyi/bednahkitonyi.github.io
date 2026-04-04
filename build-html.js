#!/usr/bin/env node

/**
 * HTML Build System
 * Compiles HTML templates with partials to reduce duplication
 */

const fs = require('fs');
const path = require('path');

// Configuration
const PARTIALS_DIR = path.join(__dirname, 'partials');
const TEMPLATES_DIR = path.join(__dirname, 'templates');
const OUTPUT_DIR = path.join(__dirname);

// Ensure directories exist
function ensureDir(dir) {
    if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
    }
}

// Load partial file
function loadPartial(name) {
    const filePath = path.join(PARTIALS_DIR, `${name}.html`);
    if (!fs.existsSync(filePath)) {
        console.warn(`Partial not found: ${name}`);
        return '';
    }
    return fs.readFileSync(filePath, 'utf8');
}

// Process template and replace partials
function processTemplate(templateContent) {
    return templateContent.replace(/<!--\s*include:\s*([a-zA-Z0-9\-_]+)\s*-->/g, (match, partialName) => {
        return loadPartial(partialName);
    });
}

// Build HTML files from templates
function buildHTML() {
    try {
        ensureDir(PARTIALS_DIR);

        // Check if templates directory exists
        if (!fs.existsSync(TEMPLATES_DIR)) {
            console.log('Note: templates/ directory not created yet. Create templates in templates/ folder and rerun this script.');
            console.log('For now, HTML files can be manually maintained or consider using an 11ty/Hugo static site generator.');
            return;
        }

        // Find all template files
        fs.readdirSync(TEMPLATES_DIR).filter(file => file.endsWith('.html')).forEach(file => {
            try {
                const templatePath = path.join(TEMPLATES_DIR, file);
                const templateContent = fs.readFileSync(templatePath, 'utf8');
                const processedContent = processTemplate(templateContent);
                const outputPath = path.join(OUTPUT_DIR, file);

                fs.writeFileSync(outputPath, processedContent, 'utf8');
                console.log(`✓ Built: ${file}`);
            } catch (error) {
                console.error(`Error building ${file}:`, error.message);
            }
        });

        console.log('\n✓ HTML build complete');
    } catch (error) {
        console.error('Build error:', error);
        process.exit(1);
    }
}

// Main
buildHTML();
