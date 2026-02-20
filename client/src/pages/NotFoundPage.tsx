import { Card, CardContent } from "@/components/ui/card";
import { AlertCircle, Home } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gradient-to-b from-sage-50 to-white">
      <Card className="w-full max-w-md mx-4 border-sage-200 shadow-lg">
        <CardContent className="pt-6 pb-6">
          <div className="flex flex-col items-center text-center mb-6">
            <AlertCircle className="h-16 w-16 text-forest-green mb-4" />
            <h1 className="text-3xl text-forest-green font-display">Page Not Found</h1>
            <p className="mt-4 text-gray-600 text-lg">
              The page you're looking for doesn't exist or has been moved.
            </p>
          </div>
          
          <div className="flex justify-center mt-6">
            <Link href="/">
              <Button className="bg-forest-green hover:bg-forest-green/90 text-white flex items-center gap-2">
                <Home size={18} />
                Return to Home
              </Button>
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
