import { writable } from "svelte/store";

export let settings = writable({
    lightmode: false,
    colors: {
        personal: "#4a95e0",
        work: "#601787",
        household: "#177c87"
    }
})

export let lists = writable([
    { 
        title: "Monday",
        items: [
            { 
                content: "Psych",
                type: "appointment",
                kind: "personal"
            }, 
            { 
                content: "Refinement meeting",
                type: "appointment",
                kind: "work"
            }],
        highlights: []
    },
    { 
        title: "Tuesday",
        items: [
            { 
                content: "Stand-up meeting",
                type: "appointment",
                kind: "work"
            },
            { 
                content: "Watch anime",
                type: "activity",
                kind: "personal"
            }],
        highlights: ["Birthday Sara", "Birthday Alban"]
    },
    { 
        title: "Wednesday",
        items: [
            { 
                content: "Stand-up meeting",
                type: "appointment",
                kind: "work"
            }, 
            { 
                content: "Dishes",
                type: "task",
                kind: "household"
            }],
        highlights: []
    },
    { 
        title: "Thursday",
        items: [
            { 
                content: "Write report",
                type: "task",
                kind: "work"
            }, 
            { 
                content: "Send emails",
                type: "task",
                kind: "work"
            },
            { 
                content: "Client meeting @ 10:30am",
                type: "appointment",
                kind: "work"
            },
            { 
                content: "Watch stream",
                type: "activity",
                kind: "personal"
            }],
        highlights: []
    },
    { 
        title: "Friday",
        items: [
            { 
                content: "Note to self: do paperwork",
                type: "note",
                kind: "work"
            }, 
            { 
                content: "Gaming w/ friend",
                type: "activity",
                kind: "personal",
                
            },
            { 
                content: "Watch anime",
                type: "activity",
                kind: "work"
            },
            { 
                content: "Cook dinner",
                type: "task",
                kind: "household"
            }],
        highlights: ["Good friday"]
    },
    { 
        title: "Saturday",
        items: [
            { 
                content: "Today was a very productive day!",
                type: "note",
                kind: "personal"
            }, 
            { 
                content: "Gaming w/ friend",
                type: "activity",
                kind: "personal"
            }],
        highlights: []
    },
    { 
        title: "Sunday",
        items: [
            { 
                content: "Not feeling well :(",
                type: "note",
                kind: "personal"
            }, 
            { 
                content: "Gaming w/ friends",
                type: "activity",
                kind: "personal"
            }],
        highlights: ["Easter"]
    },
    { 
        title: "Notes",
        items: [
            { 
                content: "Make sure to handle finances this week",
                type: "note",
                kind: "personal"
            }, 
        ],
        highlights: []
    }
  ]);

export let modalOpen = writable(false);