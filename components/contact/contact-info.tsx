import { Mail, MapPin, Phone } from "lucide-react";

export const ContactInfo = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-start gap-4">
        <div className="bg-muted rounded-full p-2">
          <Mail className="h-5 w-5" />
        </div>
        <div>
          <h3 className="font-medium">Email</h3>
          <p className="text-sm text-muted-foreground mt-1">
            hello@zakka-shop.com
          </p>
        </div>
      </div>

      <div className="flex items-start gap-4">
        <div className="bg-muted rounded-full p-2">
          <Phone className="h-5 w-5" />
        </div>
        <div>
          <h3 className="font-medium">Phone</h3>
          <p className="text-sm text-muted-foreground mt-1">
            +1 (555) 123-4567
          </p>
        </div>
      </div>

      <div className="flex items-start gap-4">
        <div className="bg-muted rounded-full p-2">
          <MapPin className="h-5 w-5" />
        </div>
        <div>
          <h3 className="font-medium">Address</h3>
          <p className="text-sm text-muted-foreground mt-1">
            123 Design District
            <br />
            Portland, OR 97205
            <br />
            United States
          </p>
        </div>
      </div>
    </div>
  );
};
