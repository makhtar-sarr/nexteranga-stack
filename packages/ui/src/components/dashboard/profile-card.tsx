import { Avatar, AvatarFallback, AvatarImage } from "../avatar";
import { Button } from "../button";
import { Card, CardContent, CardHeader, CardTitle } from "../card";

interface ProfileCardProps {
  user: {
    name: string;
    email: string;
    image?: string | null;
  };
  onEdit?: () => void;
}

export function ProfileCard({ user, onEdit }: ProfileCardProps) {
  return (
    <Card>
      <CardHeader className="pb-4">
        <CardTitle className="text-lg font-semibold">Profile Details</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="flex items-center gap-6">
          <Avatar className="h-20 w-20 border-2 border-muted">
            <AvatarImage src={user.image || ""} alt={user.name} />
            <AvatarFallback className="text-xl bg-primary/10 text-primary">
              {user.name.slice(0, 2).toUpperCase()}
            </AvatarFallback>
          </Avatar>
          <div className="space-y-1">
            <h3 className="text-xl font-bold tracking-tight">{user.name}</h3>
            <p className="text-sm text-muted-foreground font-medium">
              {user.email}
            </p>
          </div>
        </div>
        <div className="flex justify-end pt-2">
          <Button variant="outline" size="sm" onClick={onEdit} className="h-9">
            Edit Profile
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
