import InterviewCard from "@/components/InterviewCard";
import { Button } from "@/components/ui/button";
import { dummyInterviews } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Page = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="card-cta">
        <div className="flex flex-col gap-6 max-w-lg">
          <h2>Ace your interviews with AI-driven practice and feedback.</h2>
          <p className="text-lg">
            Practice with real-time interview questions and receive instant feedback.
          </p>
          <Button asChild className="btn-primary max-sm:w-full">
            <Link href="/interview">Start an Interview</Link>
          </Button>
        </div>

        <Image
          src="/robot.png"
          alt="AI Interview Assistant"
          width={400}
          height={400}
          className="max-sm:hidden"
        />
      </section>

      {/* Interview Dashboard Section */}
      <section className="flex flex-col gap-6 mt-8">
        <h2>Interview Dashboard</h2>

        {dummyInterviews.length > 0 ? (
          <div className="interviews-section">
            {dummyInterviews.map((interview) => (
              <InterviewCard key={interview.id} {...interview} />
            ))}
          </div>
        ) : (
          <p>No interviews available. Start practicing today!</p>
        )}
      </section>

      {/* Challenge Section */}
      <section className="flex flex-col gap-6 mt-8">
        <h2>Challenge Yourself with an Interview</h2>

        {dummyInterviews.length > 0 ? (
          <div className="interviews-section">
            {dummyInterviews.map((interview) => (
              <InterviewCard key={interview.id} {...interview} />
            ))}
          </div>
        ) : (
          <p>Hone your skills by starting your first interview today!</p>
        )}
      </section>
    </>
  );
};

export default Page;
