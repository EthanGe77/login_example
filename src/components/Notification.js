import React from "react"

export default function({ message }) {
  if (!message) {
    return null
  }
  return <div className="notification">{message}</div>
}
