/*
  # Create contact_requests table for MPC Chauffage

  1. New Tables
    - `contact_requests`
      - `id` (uuid, primary key) - Unique identifier for each contact request
      - `nom` (text) - Last name of the person making the request
      - `prenom` (text) - First name of the person making the request
      - `telephone` (text) - Phone number for callback
      - `ville` (text) - City of the person
      - `code_postal` (text) - Postal code
      - `objet` (text) - Subject of the request (type of service)
      - `created_at` (timestamptz) - Timestamp when the request was submitted
      
  2. Security
    - Enable RLS on `contact_requests` table
    - Add policy for inserting contact requests (anyone can submit)
    - Add policy for viewing requests (authenticated users only)
    
  3. Important Notes
    - This table stores all contact form submissions
    - Public can insert (for form submissions)
    - Only authenticated users can view the data
*/

CREATE TABLE IF NOT EXISTS contact_requests (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  nom text NOT NULL,
  prenom text NOT NULL,
  telephone text NOT NULL,
  ville text NOT NULL,
  code_postal text NOT NULL,
  objet text NOT NULL,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE contact_requests ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can insert contact requests"
  ON contact_requests
  FOR INSERT
  TO anon
  WITH CHECK (true);

CREATE POLICY "Authenticated users can view contact requests"
  ON contact_requests
  FOR SELECT
  TO authenticated
  USING (true);
