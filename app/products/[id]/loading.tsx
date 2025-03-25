import { LoadingSpinner } from "@/components/ui/loading-spinner";

export default function Loading() {
  return (
    <div className="fixed inset-0 flex justify-center items-center">
      <LoadingSpinner />
    </div>
  );
}