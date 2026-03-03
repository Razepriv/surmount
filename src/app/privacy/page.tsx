"use client";

import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import React from 'react';

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-[var(--color-cloud-white)]">
      <Section className="pt-32 pb-12">
        <Container className="prose prose-lg max-w-4xl mx-auto">
          <h1>Privacy Policy</h1>
          <p>Last updated: October 26, 2023</p>
          
          <p>
            At Surmount, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website including any other media form, media channel, mobile website, or mobile application related or connected thereto.
          </p>
          
          <h2>Collection of Data</h2>
          <p>
            We may collect information about you in a variety of ways. The information we may collect on the Site includes:
          </p>
          <ul>
            <li><strong>Personal Data:</strong> Personally identifiable information, such as your name, shipping address, email address, and telephone number, that you voluntarily give to us when you register with the Site or when you choose to participate in various activities related to the Site.</li>
            <li><strong>Derivative Data:</strong> Information our servers automatically collect when you access the Site, such as your IP address, your browser type, your operating system, your access times, and the pages you have viewed directly before and after accessing the Site.</li>
          </ul>

          <h2>Use of Data</h2>
          <p>
            Having accurate information about you permits us to provide you with a smooth, efficient, and customized experience. Specifically, we may use information collected about you via the Site to:
          </p>
          <ul>
             <li>Compile anonymous statistical data and analysis for use internally or with third parties.</li>
             <li>Create and manage your account.</li>
             <li>Deliver targeted advertising, coupons, newsletters, and other information regarding promotions and the Site to you.</li>
             <li>Email you regarding your account or order.</li>
          </ul>
        </Container>
      </Section>
    </main>
  );
}
