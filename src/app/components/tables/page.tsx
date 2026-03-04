"use client";

import Link from "next/link";
import { Section } from "@/components/Section";
import { useState } from "react";

export default function TablesPage() {
  const [selectedRows, setSelectedRows] = useState<number[]>([]);
  const [sortColumn, setSortColumn] = useState("name");
  const [sortDirection, setSortDirection] = useState<"asc" | "desc">("asc");

  const sampleData = [
    { id: 1, name: "Sarah Johnson", email: "sarah@example.com", role: "Client", status: "Active" },
    { id: 2, name: "Mike Williams", email: "mike@example.com", role: "Parent", status: "Active" },
    { id: 3, name: "Emily Davis", email: "emily@example.com", role: "Parent", status: "Pending" },
    { id: 4, name: "Dr. Lisa Chen", email: "lisa@articulink.com", role: "Therapist", status: "Active" },
  ];

  const toggleRow = (id: number) => {
    setSelectedRows(prev =>
      prev.includes(id) ? prev.filter(r => r !== id) : [...prev, id]
    );
  };

  const toggleAll = () => {
    setSelectedRows(prev =>
      prev.length === sampleData.length ? [] : sampleData.map(d => d.id)
    );
  };

  return (
    <div className="min-h-screen pb-16">
      {/* Header */}
      <header className="px-8 lg:px-16 py-12 lg:py-16 border-b border-border">
        <nav className="text-sm text-text-muted mb-4">
          <Link href="/components" className="hover:text-tide transition-colors">Components</Link>
          <span className="mx-2">/</span>
          <span className="text-abyss">Tables</span>
        </nav>
        <h1 className="font-display text-4xl lg:text-5xl font-extrabold text-abyss">
          Tables & Lists
        </h1>
        <p className="mt-3 text-lg text-text-secondary max-w-2xl">
          Data tables display information in rows and columns. Include sorting, pagination, and bulk actions for complex data.
        </p>
      </header>

      {/* Basic Table */}
      <Section title="Basic Table" id="basic">
        <p className="text-text-secondary mb-8 max-w-2xl">
          Simple table with header row and alternating row colors for readability.
        </p>
        <div className="rounded-2xl bg-bg-card card-depth overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-bg-secondary">
                  <th className="px-6 py-4 text-left text-sm font-semibold text-abyss">Name</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-abyss">Email</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-abyss">Role</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-abyss">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {sampleData.map((row, idx) => (
                  <tr key={row.id} className={idx % 2 === 1 ? "bg-bg-secondary/50" : ""}>
                    <td className="px-6 py-4 text-sm text-abyss font-medium">{row.name}</td>
                    <td className="px-6 py-4 text-sm text-text-secondary">{row.email}</td>
                    <td className="px-6 py-4 text-sm text-text-secondary">{row.role}</td>
                    <td className="px-6 py-4">
                      <span className={`px-2.5 py-1 rounded-full text-xs font-medium ${
                        row.status === "Active"
                          ? "bg-success/10 text-success"
                          : "bg-warning/10 text-warning"
                      }`}>
                        {row.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="p-4 bg-bg-secondary border-t border-border">
            <code className="text-sm text-text-secondary">
              Header: bg-bg-secondary text-abyss font-semibold | Rows: divide-y divide-border | Alternating: bg-bg-secondary/50
            </code>
          </div>
        </div>
      </Section>

      {/* Table with Selection */}
      <Section title="Table with Selection" id="selection">
        <p className="text-text-secondary mb-8 max-w-2xl">
          Add checkboxes for bulk selection and actions.
        </p>
        <div className="rounded-2xl bg-bg-card card-depth overflow-hidden">
          {/* Bulk action bar */}
          {selectedRows.length > 0 && (
            <div className="px-6 py-3 bg-tide/10 border-b border-tide/20 flex items-center justify-between">
              <span className="text-sm text-tide font-medium">
                {selectedRows.length} item{selectedRows.length > 1 ? "s" : ""} selected
              </span>
              <div className="flex gap-2">
                <button className="px-3 py-1.5 text-sm text-error hover:bg-error/10 rounded-lg transition-colors">
                  Delete
                </button>
                <button className="px-3 py-1.5 text-sm text-tide hover:bg-tide/10 rounded-lg transition-colors">
                  Export
                </button>
              </div>
            </div>
          )}
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-bg-secondary">
                  <th className="px-6 py-4 w-12">
                    <input
                      type="checkbox"
                      checked={selectedRows.length === sampleData.length}
                      onChange={toggleAll}
                      className="w-4 h-4 rounded border-border text-tide focus:ring-tide"
                    />
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-abyss">Name</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-abyss">Email</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-abyss">Role</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-abyss">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {sampleData.map((row) => (
                  <tr
                    key={row.id}
                    className={`${selectedRows.includes(row.id) ? "bg-tide/5" : "hover:bg-bg-secondary/50"} transition-colors`}
                  >
                    <td className="px-6 py-4">
                      <input
                        type="checkbox"
                        checked={selectedRows.includes(row.id)}
                        onChange={() => toggleRow(row.id)}
                        className="w-4 h-4 rounded border-border text-tide focus:ring-tide"
                      />
                    </td>
                    <td className="px-6 py-4 text-sm text-abyss font-medium">{row.name}</td>
                    <td className="px-6 py-4 text-sm text-text-secondary">{row.email}</td>
                    <td className="px-6 py-4 text-sm text-text-secondary">{row.role}</td>
                    <td className="px-6 py-4">
                      <button className="p-2 rounded-lg hover:bg-bg-secondary text-text-secondary hover:text-abyss transition-colors">
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
                        </svg>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </Section>

      {/* Sortable Table */}
      <Section title="Sortable Table" id="sortable">
        <p className="text-text-secondary mb-8 max-w-2xl">
          Click column headers to sort data ascending or descending.
        </p>
        <div className="rounded-2xl bg-bg-card card-depth overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-bg-secondary">
                  {["name", "email", "role", "status"].map((col) => (
                    <th
                      key={col}
                      className="px-6 py-4 text-left text-sm font-semibold text-abyss cursor-pointer hover:bg-bg-card transition-colors"
                      onClick={() => {
                        if (sortColumn === col) {
                          setSortDirection(prev => prev === "asc" ? "desc" : "asc");
                        } else {
                          setSortColumn(col);
                          setSortDirection("asc");
                        }
                      }}
                    >
                      <div className="flex items-center gap-2">
                        <span className="capitalize">{col}</span>
                        {sortColumn === col && (
                          <svg
                            className={`w-4 h-4 text-tide transition-transform ${sortDirection === "desc" ? "rotate-180" : ""}`}
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth="2"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
                          </svg>
                        )}
                        {sortColumn !== col && (
                          <svg className="w-4 h-4 text-text-secondary/50" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M8 9l4-4 4 4m0 6l-4 4-4-4" />
                          </svg>
                        )}
                      </div>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {sampleData.map((row) => (
                  <tr key={row.id} className="hover:bg-bg-secondary/50 transition-colors">
                    <td className="px-6 py-4 text-sm text-abyss font-medium">{row.name}</td>
                    <td className="px-6 py-4 text-sm text-text-secondary">{row.email}</td>
                    <td className="px-6 py-4 text-sm text-text-secondary">{row.role}</td>
                    <td className="px-6 py-4">
                      <span className={`px-2.5 py-1 rounded-full text-xs font-medium ${
                        row.status === "Active"
                          ? "bg-success/10 text-success"
                          : "bg-warning/10 text-warning"
                      }`}>
                        {row.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="p-4 bg-bg-secondary border-t border-border">
            <code className="text-sm text-text-secondary">
              Sortable header: cursor-pointer hover:bg-bg-card | Active sort icon: text-tide | Inactive: text-text-secondary/50
            </code>
          </div>
        </div>
      </Section>

      {/* List View */}
      <Section title="List View" id="list">
        <p className="text-text-secondary mb-8 max-w-2xl">
          Vertical list layout as an alternative to tables for simpler data.
        </p>
        <div className="rounded-2xl bg-bg-card card-depth overflow-hidden divide-y divide-border">
          {sampleData.map((item) => (
            <div key={item.id} className="p-4 flex items-center gap-4 hover:bg-bg-secondary/50 transition-colors">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-surf to-tide flex items-center justify-center text-white font-semibold">
                {item.name.split(" ").map(n => n[0]).join("")}
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-medium text-abyss truncate">{item.name}</p>
                <p className="text-sm text-text-secondary truncate">{item.email}</p>
              </div>
              <span className="px-2.5 py-1 rounded-full text-xs font-medium bg-tide/10 text-tide">
                {item.role}
              </span>
              <button className="p-2 rounded-lg hover:bg-bg-secondary text-text-secondary hover:text-abyss transition-colors">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          ))}
        </div>
      </Section>

      {/* Empty State */}
      <Section title="Empty State" id="empty">
        <p className="text-text-secondary mb-8 max-w-2xl">
          Show when no data is available. Include helpful messaging and a CTA when appropriate.
        </p>
        <div className="rounded-2xl bg-bg-card card-depth p-12">
          <div className="text-center max-w-sm mx-auto">
            <div className="w-16 h-16 rounded-2xl bg-bg-secondary flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
              </svg>
            </div>
            <h3 className="font-display text-lg font-bold text-abyss mb-2">No appointments yet</h3>
            <p className="text-sm text-text-secondary mb-6">
              Once you book your first session, it will appear here.
            </p>
            <button className="px-6 py-3 rounded-2xl bg-tide border-b-4 border-[#0369c1] text-white font-bold uppercase tracking-wide hover:brightness-110 active:border-b-0 active:mt-1 transition-all">
              Book Appointment
            </button>
          </div>
        </div>
      </Section>

      {/* Table Pagination */}
      <Section title="Pagination" id="pagination">
        <p className="text-text-secondary mb-8 max-w-2xl">
          Footer with pagination controls and row count display.
        </p>
        <div className="rounded-2xl bg-bg-card card-depth overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-bg-secondary">
                  <th className="px-6 py-4 text-left text-sm font-semibold text-abyss">Name</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-abyss">Email</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-abyss">Role</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {sampleData.slice(0, 3).map((row) => (
                  <tr key={row.id} className="hover:bg-bg-secondary/50 transition-colors">
                    <td className="px-6 py-4 text-sm text-abyss font-medium">{row.name}</td>
                    <td className="px-6 py-4 text-sm text-text-secondary">{row.email}</td>
                    <td className="px-6 py-4 text-sm text-text-secondary">{row.role}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {/* Pagination footer */}
          <div className="px-6 py-4 bg-bg-secondary border-t border-border flex items-center justify-between">
            <span className="text-sm text-text-secondary">
              Showing <span className="font-medium text-abyss">1-10</span> of <span className="font-medium text-abyss">247</span> results
            </span>
            <div className="flex items-center gap-1">
              <button className="w-9 h-9 rounded-lg border border-border text-text-secondary hover:bg-bg-card transition-colors flex items-center justify-center">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button className="w-9 h-9 rounded-lg bg-tide text-white font-medium text-sm">1</button>
              <button className="w-9 h-9 rounded-lg text-text-secondary hover:bg-bg-card transition-colors font-medium text-sm">2</button>
              <button className="w-9 h-9 rounded-lg text-text-secondary hover:bg-bg-card transition-colors font-medium text-sm">3</button>
              <span className="px-1 text-text-secondary">...</span>
              <button className="w-9 h-9 rounded-lg text-text-secondary hover:bg-bg-card transition-colors font-medium text-sm">25</button>
              <button className="w-9 h-9 rounded-lg border border-border text-text-secondary hover:bg-bg-card transition-colors flex items-center justify-center">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </Section>

      {/* Usage Guidelines */}
      <Section title="Usage Guidelines" id="guidelines">
        <div className="grid gap-4 md:grid-cols-2">
          <div className="rounded-xl bg-success/10 p-6">
            <div className="flex items-center gap-2 mb-4">
              <svg className="w-5 h-5 text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <span className="font-semibold text-abyss">Do</span>
            </div>
            <ul className="space-y-2 text-sm text-text-secondary">
              <li>Include pagination for large datasets</li>
              <li>Provide sorting on relevant columns</li>
              <li>Use consistent column alignment</li>
              <li>Show loading and empty states</li>
              <li>Make rows clickable when viewing details</li>
            </ul>
          </div>

          <div className="rounded-xl bg-error/10 p-6">
            <div className="flex items-center gap-2 mb-4">
              <svg className="w-5 h-5 text-error" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
              <span className="font-semibold text-abyss">Don&apos;t</span>
            </div>
            <ul className="space-y-2 text-sm text-text-secondary">
              <li>Display too many columns on mobile</li>
              <li>Hide important data in horizontal scroll</li>
              <li>Use tables for simple key-value data</li>
              <li>Forget to handle empty states</li>
              <li>Make bulk actions hard to discover</li>
            </ul>
          </div>
        </div>
      </Section>
    </div>
  );
}
