import React from 'react'
import { useState } from 'react';
import Question from "./Question";
import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
  } from "@/components/ui/pagination"
  
const QuestionsSection = () => {
    const questions = Array.from({ length: 17 }, (_, index) => ({
        id: index + 1,
        text: `This is question ${index + 1}`,
      }));
    
      const [currentPage, setCurrentPage] = useState(1);
      const questionsPerPage = [5, 5, 3, 4]; 
      const totalPages = questionsPerPage.length;
    
      const startIdx = questionsPerPage.slice(0, currentPage - 1).reduce((a, b) => a + b, 0);
      const endIdx = startIdx + questionsPerPage[currentPage - 1];
      const currentQuestions = questions.slice(startIdx, endIdx);
    
      const handlePageChange = (page) => {
        window.scrollTo({
            top:10,
            behavior:"smooth",
        })
        if (page >= 1 && page <= totalPages) {
          setCurrentPage(page);
        }
      };
  return (
    <>
    <div className="w-3/4 flex flex-col align-middle justify-center mt-20">
        {currentQuestions.map((question) => (
          <Question key={question.id} text={question.text} />
        ))}
      </div>

      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious
              href="#"
              onClick={(e) => {
                e.preventDefault();
                handlePageChange(currentPage - 1);
              }}
            />
          </PaginationItem>
          {Array.from({ length: totalPages }, (_, index) => (
            <PaginationItem key={index}>
              <PaginationLink
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  handlePageChange(index + 1);
                }}
                className={currentPage === index + 1 ? "font-bold" : ""}
              >
                {index + 1}
              </PaginationLink>
            </PaginationItem>
          ))}
          <PaginationItem>
            <PaginationNext
              href="#"
              onClick={(e) => {
                e.preventDefault();
                handlePageChange(currentPage + 1);
              }}
            />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
      </>
  )
}

export default QuestionsSection