"use client";

type FilterBadgeProps = {
  label: string;
  onRemove: () => void;
};

export function FilterBadge({ label, onRemove }: FilterBadgeProps) {
  return (
    <div className="flex items-center gap-1 bg-muted px-3 py-1 rounded-full text-sm">
      {label}
      <button
        onClick={onRemove}
        className="ml-1 text-muted-foreground hover:text-foreground"
      >
        ×
      </button>
    </div>
  );
}
