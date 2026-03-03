"use client";

import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import React from 'react';

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-[var(--color-cloud-white)]">
      <Section className="pt-32 pb-12">
        <Container className="prose prose-lg max-w-4xl mx-auto">
          <h1>Terms of Service</h1>
          <p>Last updated: October 26, 2023</p>
          
          <p>
            Please read these Terms of Service ("Terms", "Terms of Service") carefully before using the Surmount website operated by Surmount Inc.
          </p>
          
          <h2>1. Introduction</h2>
          <p>
            By accessing the website at http://surmount.com, you are agreeing to be bound by these terms of service, all applicable laws and regulations, and agree that you are responsible for compliance with any applicable local laws. If you do not agree with any of these terms, you are prohibited from using or accessing this site.
          </p>

          <h2>2. Use License</h2>
          <p>
            Permission is granted to temporarily download one copy of the materials (information or software) on Surmount's website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
          </p>
          <ul>
            <li>Modify or copy the materials;</li>
            <li>Use the materials for any commercial purpose, or for any public display (commercial or non-commercial);</li>
            <li>Attempt to decompile or reverse engineer any software contained on Surmount's website;</li>
            <li>Remove any copyright or other proprietary notations from the materials; or</li>
            <li>Transfer the materials to another person or "mirror" the materials on any other server.</li>
          </ul>

          <h2>3. Disclaimer</h2>
          <p>
            The materials on Surmount's website are provided on an 'as is' basis. Surmount makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
          </p>
          
          <h2>4. Limitations</h2>
          <p>
            In no event shall Surmount or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Surmount's website.
          </p>
        </Container>
      </Section>
    </main>
  );
}
