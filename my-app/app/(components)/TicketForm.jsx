"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
const TicketForm = ({ticket}) => {
  // const EDITMODE = ticket._id === "new" ? false : true;
  const router = useRouter();

  const handleChange = (e) => {
    const { value } = e.target;
    const { name } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch("/api/Tickets", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ formData }),
    });
    // console.log(res);
    // console.log(formData);
    if (!res.ok) {
      throw new Error("Failed to create ticket");
    }
    router.refresh();
    router.push("/");
  };

  const startingTicketData = {
    title: "",
    description: "",
    priority: 1,
    progress: 0,
    status: "not started",
    category: "development",
  };

  // if (EDITMODE) {
  //   startingTicketData["title"] = ticket.title;
  //   startingTicketData["description"] = ticket.description;
  //   startingTicketData["priority"] = ticket.priority;
  //   startingTicketData["progress"] = ticket.progress;
  //   startingTicketData["status"] = ticket.status;
  //   startingTicketData["category"] = ticket.category;
  // }


  const [formData, setFormData] = useState(startingTicketData);
  return (
    <div className="flex justify-center">
      <form
        className="flex flex-col gap-3 w-1/2"
        method="post"
        onSubmit={handleSubmit}
      >
        <h3>Create Your Ticket</h3>
        <label>Title</label>
        <input
          id="title"
          name="title"
          type="text"
          onChange={handleChange}
          required={true}
          value={formData.title}
        />
        <label>Description</label>
        <textarea
          id="description"
          name="description"
          type="text"
          onChange={handleChange}
          required={true}
          value={formData.description}
          rows={5}
        />
        <label>Category</label>
        <select
          id="category"
          name="category"
          value={formData.category}
          onChange={handleChange}
        >
          <option value="development">Development</option>
          <option value="design">Design</option>
          <option value="bug">Bug</option>
          <option value="other">Other</option>
        </select>
        <label>Priority</label>
        <div>
          <input
            id="priority-1"
            name="priority"
            type="radio"
            onChange={handleChange}
            value={1}
            checked={formData.priority == 1}
          />
          <label>1</label>
          <input
            id="priority-2"
            name="priority"
            type="radio"
            onChange={handleChange}
            value={2}
            checked={formData.priority == 2}
          />
          <label>2</label>
          <input
            id="priority-3"
            name="priority"
            type="radio"
            onChange={handleChange}
            value={3}
            checked={formData.priority == 3}
          />
          <label>3</label>
          <input
            id="priority-4"
            name="priority"
            type="radio"
            onChange={handleChange}
            value={4}
            checked={formData.priority == 4}
          />
          <label>4</label>
          <input
            id="priority-5"
            name="priority"
            type="radio"
            onChange={handleChange}
            value={5}
            checked={formData.priority == 5}
          />
          <label>5</label>
        </div>
        <label htmlFor="">Progress</label>
        <input
          type="range"
          id="progress"
          name="progress"
          value={formData.progress}
          onChange={handleChange}
          min="0"
          max="100"
        />
        <label>Status</label>
        <select name="status" value={formData.status} onChange={handleChange}>
          <option value="not started">Not Started</option>
          <option value="started">In Progress</option>
          <option value="done">Completed</option>
        </select>
        <input type="submit" className="btn " value="Create Ticket" />
      </form>
    </div>
  );
};

export default TicketForm;
