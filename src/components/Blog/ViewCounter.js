"use client"
import React, { useEffect, useState } from "react"

const ViewCounter = ({ slug, noCount = false, showCount = true }) => {
	const [views, setViews] = useState(0)

	useEffect(() => {
		if (!noCount) {
			setViews((pre) => pre + 1)
		}
	}, [slug, noCount])

	useEffect(() => { }, [slug])

	if (showCount) {
		return <div>{views} views</div>
	} else {
		return null
	}
}

export default ViewCounter
