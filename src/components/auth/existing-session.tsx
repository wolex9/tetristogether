"use client";

import { Button } from "@/components/ui/button";
import type { User } from "@/lib/auth-context";

interface ExistingSessionProps {
  user: User;
  onContinue: () => void;
  onSignOut: () => void;
  loading?: boolean;
}

export function ExistingSession({ user, onContinue, onSignOut, loading }: ExistingSessionProps) {
  return (
    <div className="space-y-4">
      <div className="text-center">
        <p className="mb-2 text-sm text-gray-600">Jūs jau esat pieteicies kā</p>
        <p className="text-lg font-semibold">{user.username}</p>
        {/* Guest mode is handled by AuthProvider via isGuest flag */}
      </div>

      <Button onClick={onContinue} className="w-full" size="lg" disabled={loading}>
        Turpināt
      </Button>

      <Button onClick={onSignOut} variant="outline" className="w-full" disabled={loading}>
        Iziet un izmantot citu kontu
      </Button>
    </div>
  );
}
