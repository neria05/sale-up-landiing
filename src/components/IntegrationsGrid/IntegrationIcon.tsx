import React from 'react';
import { Facebook, Mail, Instagram, MessageSquare, Layout, FileText, Workflow, Table } from 'lucide-react';

interface IntegrationIconProps {
  name: string;
  className?: string;
}

const IntegrationIcon = ({ name, className = "w-12 h-12" }: IntegrationIconProps) => {
  const icons: { [key: string]: React.ReactNode } = {
    Facebook: <Facebook className={className} />,
    Gmail: <Mail className={className} />,
    Instagram: <Instagram className={className} />,
    TikTok: <MessageSquare className={className} />,
    Wix: <Layout className={className} />,
    WordPress: <FileText className={className} />,
    Zapier: <Workflow className={className} />,
    'Google Sheets': <Table className={className} />
  };

  return <div className="text-gold-400">{icons[name] || <div className={className} />}</div>;
};

export default IntegrationIcon;