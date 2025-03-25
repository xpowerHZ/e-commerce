export const StoreHours = () => {
  return (
    <div className="mt-8">
      <h3 className="font-medium mb-4">Store Hours</h3>
      <div className="grid grid-cols-2 gap-2 text-sm">
        <div className="text-muted-foreground">Monday - Friday</div>
        <div>10am - 7pm</div>
        <div className="text-muted-foreground">Saturday</div>
        <div>10am - 6pm</div>
        <div className="text-muted-foreground">Sunday</div>
        <div>12pm - 5pm</div>
      </div>
    </div>
  );
};
