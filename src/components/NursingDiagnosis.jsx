import React, { useState } from 'react'

import nursingDiagnosis from '../utils/nursingDiagnosis';

export default function NursingDiagnosis() {const [searchTerm, setSearchTerm] = useState("");

  // فیلتر کردن تنها روی نام آزمایش‌ها
  const filteredTests = nursingDiagnosis.filter((test) =>
    test.diagnosisName.toLowerCase().includes(searchTerm.toLowerCase().trim())
  );

  return (
    <div className="min-h-screen flex flex-col items-center justify-start p-8 bg-gray-50">
      <h1 className="text-2xl font-bold mb-4">جستجوی تشخیص پرستاری</h1>

      <input
        type="text"
        placeholder="نام تشخیص پرستاری را وارد کنید..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="w-full max-w-md px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 mb-6"
      />

      
      {searchTerm.trim() !== "" && (
        <div className="w-full max-w-md space-y-4">
          {filteredTests.length > 0 ? (
            filteredTests.map((nurse) => (
              <div
                key={nurse.diagnosisName}
                className="p-4 bg-white rounded-lg shadow-md border"
              >
                <h2 className="text-lg font-semibold text-blue-600">
                  {nurse.diagnosisName}
                </h2>
                <p>
                  <strong> توضیحات:</strong> {nurse.description}
                </p>
              
              </div>
            ))
          ) : (
            <p className="text-gray-500">
              هیچ آزمایشی با این نام یافت نشد.
            </p>
          )}
        </div>
      )}
    </div>
  );
}
