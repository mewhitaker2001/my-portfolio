"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, X, Maximize2 } from "lucide-react"
import Link from "next/link"

interface FlipbookProps {
  totalPages: number
  bookTitle: string
  imagePath: string // e.g., "/images/radiance-book/"
}

export default function Flipbook({ totalPages, bookTitle, imagePath }: FlipbookProps) {
  const [currentPage, setCurrentPage] = useState(0) // 0-based index
  const [isFullscreen, setIsFullscreen] = useState(false)

  const nextPage = () => {
    if (currentPage < totalPages - 1) {
      setCurrentPage(currentPage + 1)
    }
  }

  const prevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1)
    }
  }

  const goToPage = (pageIndex: number) => {
    if (pageIndex >= 0 && pageIndex < totalPages) {
      setCurrentPage(pageIndex)
    }
  }

  // Generate page filename to match your naming convention
  const getPageFileName = (index: number) => {
    const pageNum = String(index + 1).padStart(2, '0')
    return `Radiance_Cinema_Brand_Book_Page_${pageNum}`
  }

  return (
    <div className={`relative ${isFullscreen ? 'fixed inset-0 z-50 bg-black bg-opacity-95 flex items-center justify-center' : ''}`}>
      {/* Fullscreen close button */}
      {isFullscreen && (
        <Button
          variant="ghost"
          size="sm"
          className="absolute top-4 right-4 z-50 text-white hover:bg-white hover:bg-opacity-20"
          onClick={() => setIsFullscreen(false)}
        >
          <X className="h-6 w-6" />
        </Button>
      )}

      <div className={`relative bg-white rounded-lg shadow-2xl overflow-hidden ${isFullscreen ? 'max-w-4xl max-h-[90vh]' : 'max-w-2xl'}`}>
        {/* Book Header */}
        <div className="bg-gradient-to-r from-orange-600 to-red-600 text-white p-4 flex items-center justify-between">
          <h3 className="text-lg font-semibold">{bookTitle}</h3>
          <div className="flex items-center gap-2">
            <span className="text-sm">
              Page {currentPage + 1} of {totalPages}
            </span>
            {!isFullscreen && (
              <Button
                variant="ghost"
                size="sm"
                className="text-white hover:bg-white hover:bg-opacity-20"
                onClick={() => setIsFullscreen(true)}
              >
                <Maximize2 className="h-4 w-4" />
              </Button>
            )}
          </div>
        </div>

        {/* Book Pages */}
        <div className={`relative ${isFullscreen ? 'h-[calc(95vh-120px)]' : 'h-[70vh]'} bg-gray-200 overflow-hidden p-2`}>
          {/* Current Page with shadow and border */}
          <div className="absolute inset-4 flex items-center justify-center bg-white rounded-lg shadow-lg border border-gray-300">
            <img
              src={`${imagePath}${getPageFileName(currentPage)}.jpg`}
              alt={`Page ${currentPage + 1}`}
              className="w-full h-full object-contain rounded-lg"
              onError={(e) => {
                e.currentTarget.src = '/images/placeholder-page.jpg' // fallback
              }}
            />
          </div>

          {/* Navigation Overlays - much smaller hover areas */}
          {currentPage > 0 && (
            <button
              className="absolute left-0 top-1/2 transform -translate-y-1/2 w-16 h-16 bg-white bg-opacity-80 hover:bg-opacity-100 transition-all rounded-r-full shadow-lg flex items-center justify-center group z-10 ml-2"
              onClick={prevPage}
            >
              <ChevronLeft className="h-6 w-6 text-orange-600" />
            </button>
          )}

          {currentPage < totalPages - 1 && (
            <button
              className="absolute right-0 top-1/2 transform -translate-y-1/2 w-16 h-16 bg-white bg-opacity-80 hover:bg-opacity-100 transition-all rounded-l-full shadow-lg flex items-center justify-center group z-10 mr-2"
              onClick={nextPage}
            >
              <ChevronRight className="h-6 w-6 text-orange-600" />
            </button>
          )}
        </div>

        {/* Navigation Controls */}
        <div className="bg-gray-50 p-4 border-t">
          <div className="flex items-center justify-between">
            <Button
              variant="outline"
              size="sm"
              onClick={prevPage}
              disabled={currentPage === 0}
              className="flex items-center gap-2"
            >
              <ChevronLeft className="h-4 w-4" />
              Previous
            </Button>

            {/* Page Thumbnails/Dots */}
            <div className="flex gap-1 max-w-md overflow-x-auto">
              {Array.from({ length: Math.min(totalPages, 10) }, (_, i) => {
                const pageIndex = Math.floor((i / 9) * (totalPages - 1))
                return (
                  <button
                    key={i}
                    className={`w-8 h-10 rounded border-2 text-xs flex items-center justify-center transition-colors ${
                      currentPage === pageIndex
                        ? 'border-orange-600 bg-orange-50 text-orange-600'
                        : 'border-gray-300 bg-white hover:border-orange-300'
                    }`}
                    onClick={() => goToPage(pageIndex)}
                  >
                    {pageIndex + 1}
                  </button>
                )
              })}
            </div>

            <Button
              variant="outline"
              size="sm"
              onClick={nextPage}
              disabled={currentPage === totalPages - 1}
              className="flex items-center gap-2"
            >
              Next
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}