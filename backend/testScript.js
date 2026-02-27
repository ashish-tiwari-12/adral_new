async function runTests() {
    const ts = Date.now();
    const testUser = {
        name: "Test User",
        email: `test${ts}@example.com`,
        password: "password123"
    };

    try {
        console.log("1. Testing Signup...");
        let res = await fetch('http://localhost:5000/api/auth/signup', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(testUser)
        });
        let data = await res.json();
        console.log("Signup Response:", res.status, data.message);
        if (!res.ok) throw new Error(data.message);

        console.log("\n2. Testing Login...");
        res = await fetch('http://localhost:5000/api/auth/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email: testUser.email, password: testUser.password })
        });
        data = await res.json();
        console.log("Login Response:", res.status, data.message);
        if (!res.ok) throw new Error(data.message);
        const token = data.accessToken;

        console.log("\n3. Testing Protected Route (/api/auth/me)...");
        res = await fetch('http://localhost:5000/api/auth/me', {
            headers: { Authorization: `Bearer ${token}` }
        });
        data = await res.json();
        console.log("Profile Response:", res.status, data.email);
        if (!res.ok) throw new Error(data.message);

        console.log("\n4. Testing Forgot Password...");
        res = await fetch('http://localhost:5000/api/auth/forgot-password', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email: testUser.email })
        });
        data = await res.json();
        console.log("Forgot Password Response:", res.status, data.message);
        if (!res.ok) throw new Error(data.message);

        console.log("\nALL TESTS PASSED ✨");
    } catch (error) {
        console.error("\nTEST errored out:", error.message);
    }
}

runTests();
