<!-- Node js history -->
<!-- CJS vs MJS module -->
<!-- type: module, mjs extension -->
<!-- sync or async , strict and non strict -->
<!-- calculator folder to export them in one go -->


<!-- Dominos example -->

Micorservice/ Monolith

1: Codebase
2: Scalability
3: Development
4: Deployment
5: Tech Stack
6: Bug Issue
7: server failure
8: Maintainence
9: Debugging
10: Cost



Code	Meaning	               When to Use
200	    OK	                    Successful GET/PUT/PATCH
201	    Created	                Resource created (POST)
400	    Bad Request	            Invalid client input
401	    Unauthorized            Authentication needed
403	    Forbidden	              No permission
404	    Not Found	              Resource doesn't exist
500	    Internal Server Error	Server-side failure






const response = await fetch('https://api.example.com/data', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ name: 'John', age: 30 })
});


JSON.parse("invalid json");





The CAP theorem, also known as Brewer’s theorem, is a principle that applies to distributed databases and systems. It states that a distributed system can simultaneously guarantee at most two out of the following three properties:

Consistency
Definition: Every read receives the most recent write or an error. In other words, all nodes in the system reflect the same data at the same time.
Implication: After an update, every client sees the update immediately. This is similar to the behavior of a single-node database.

Availability
Definition: Every request (read or write) receives a response—regardless of whether the response contains the most recent data.
Implication: The system is always operational and responsive. However, during certain failures, the data returned might not be up-to-date.

Partition Tolerance
Definition: The system continues to operate even if network partitions (communication breakdowns between nodes) occur.
Implication: Since network failures are inevitable in distributed systems, partition tolerance is generally non-negotiable.




BSON encodes JSON-like documents in a binary format that includes type information, which makes it efficient to parse and traverse.



Track and sector



Leo Medium: https://medium.com/data-science-in-your-pocket/dont-be-a-vibe-coder-30fa7c525971

