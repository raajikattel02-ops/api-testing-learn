// Simple CRUD API Testing Example

const BASE_URL = "https://jsonplaceholder.typicode.com/posts";

async function runTests() {
    try {
        // CREATE (POST)
        console.log("=== CREATE ===");

        const createResponse = await fetch(BASE_URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                title: "My Test Post",
                body: "Learning API Testing",
                userId: 1
            })
        });

        const createdPost = await createResponse.json();

        console.log("Status:", createResponse.status);
        console.log("Created:", createdPost);

        const postId = createdPost.id;

        // READ (GET)
        console.log("\n=== READ ===");

        const getResponse = await fetch(`${BASE_URL}/1`);
        const post = await getResponse.json();

        console.log("Status:", getResponse.status);
        console.log("Post:", post);

        // UPDATE (PUT)
        console.log("\n=== UPDATE ===");

        const updateResponse = await fetch(`${BASE_URL}/1`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                id: 1,
                title: "Updated Title",
                body: "Updated Content",
                userId: 1
            })
        });

        const updatedPost = await updateResponse.json();

        console.log("Status:", updateResponse.status);
        console.log("Updated:", updatedPost);

        // DELETE
        console.log("\n=== DELETE ===");

        const deleteResponse = await fetch(`${BASE_URL}/1`, {
            method: "DELETE"
        });

        console.log("Status:", deleteResponse.status);

        // Simple Assertions
        console.log("\n=== TEST RESULTS ===");

        console.log(
            createResponse.status === 201
                ? "✅ POST Passed"
                : "❌ POST Failed"
        );

        console.log(
            getResponse.status === 200
                ? "✅ GET Passed"
                : "❌ GET Failed"
        );

        console.log(
            updateResponse.status === 200
                ? "✅ PUT Passed"
                : "❌ PUT Failed"
        );

        console.log(
            deleteResponse.status === 200
                ? "✅ DELETE Passed"
                : "❌ DELETE Failed"
        );

    } catch (error) {
        console.error("Error:", error);
    }
}

// CREATE/UPDATE CARD (PUT)
async function createCard() {
    try {
        console.log("\n=== CREATE CARD (PUT) ===");

        const cardId = 100; // Using ID 100 for new card
        const cardData = {
            id: cardId,
            title: "New Card",
            description: "This is a new card created with PUT request",
            status: "active",
            priority: "high",
            dueDate: "2026-12-31"
        };

        const createCardResponse = await fetch(`${BASE_URL}/${cardId}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(cardData)
        });

        const createdCard = await createCardResponse.json();

        console.log("Status:", createCardResponse.status);
        console.log("Card Created/Updated:", createdCard);

        console.log(
            createCardResponse.status === 200
                ? "✅ Card Creation (PUT) Passed"
                : "❌ Card Creation (PUT) Failed"
        );

    } catch (error) {
        console.error("Error creating card:", error);
    }
}

runTests();
createCard();