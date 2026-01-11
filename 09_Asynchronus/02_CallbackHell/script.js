// When callbacks are nested within other callbacks, it leads to code that is hard to read and maintain. This is known as callback hell.
// Simulated asynchronous functions

function registerUser(name, callback) {
  setTimeout(() => {
    console.log(`✅ User ${name} registered`);
    callback(name);
  }, 1000);
}

function sendEmail(user, callback) {
  setTimeout(() => {
    console.log(`📧 Email sent to ${user}`);
    callback(user);
  }, 1500);
}

function logActivity(user, callback) {
  setTimeout(() => {
    console.log(`📝 Activity logged for ${user}`);
    callback(user);
  }, 2000);
}

function showSuccess(user, callback) {
  setTimeout(() => {
    console.log(`🎉 Registration complete for ${user}`);
    callback();
  }, 2000);
}

// ---- Callback Hell Starts Here 😩 ----
registerUser("Rahul", function (user) {
  sendEmail(user, function (user) {
    logActivity(user, function (user) {
      showSuccess(user, function () {
        console.log("✨ All tasks completed!");
      });
    });
  });
});

// 🔧 Solution:
// Use Promises and async/await for better structure.
