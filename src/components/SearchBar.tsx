"use client";

interface SearchBarProps {
  value: string;
  onChange: (val: string) => void;
}

export default function SearchBar({ value, onChange }: SearchBarProps) {
  return (
    <div className="searchSection">
      <input
        type="text"
        placeholder="Search research papers by title..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="searchInput"
      />
    </div>
  );
}
