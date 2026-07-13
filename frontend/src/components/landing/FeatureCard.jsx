function FeatureCard({ icon: Icon, title, description }) {
    return (
      <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-blue-500">
        <div className="mb-5 inline-flex rounded-xl bg-blue-600/20 p-3">
          <Icon className="h-7 w-7 text-blue-500" />
        </div>
  
        <h3 className="mb-3 text-xl font-semibold text-white">
          {title}
        </h3>
  
        <p className="leading-7 text-slate-400">
          {description}
        </p>
      </div>
    );
  }
  
  export default FeatureCard;