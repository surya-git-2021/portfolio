import React from 'react';
import { Link, Mail, Github } from 'lucide-react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';

const ProfileLinks = () => {
  return (
    <Card className="w-full max-w-md">
      <CardContent className="space-y-4">
        <div className="flex items-center gap-3">
          <Link className="h-5 w-5 text-blue-600" />
          <a 
            href="https://www.linkedin.com/in/jamasuryateja/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            LinkedIn
          </a>
        </div>
        
        <div className="flex items-center gap-3">
          <Github className="h-5 w-5 text-gray-800" />
          <a 
            href="https://github.com/surya-git-2021" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-800 hover:underline"
          >
            GitHub
          </a>
        </div>
        
        <div className="flex items-center gap-3">
          <Mail className="h-5 w-5 text-red-600" />
          <a 
            href="mailto:jama.suryateja@gmail.com"
            className="text-red-600 hover:underline"
          >
            jama.suryateja@gmail.com
          </a>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProfileLinks;