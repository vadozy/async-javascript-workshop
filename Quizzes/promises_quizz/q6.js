let authenticated = false;

function authenticate() {
  console.log("Authenticating");
  return new Promise(resolve =>
    setTimeout(() => {
      authenticated = true;
      resolve({ status: 200 });
    }, 500)
  );
}

function publish() {
  console.log("Publishing");
  return new Promise(resolve =>
    setTimeout(resolve, 1000, { status: authenticated ? 200 : 403 })
  );
}

function timeout(sleep) {
  return new Promise((resolve, reject) => setTimeout(reject, sleep, "timeout"));
}

function publishChain() {
  return publish()
    .then(val => {
      console.log("then1: [ publishChain ] ", val);
      if (val.status !== 200) {
        return authenticate().then(val => publish());
      } else {
        return val;
      }
    })
    .catch(err => console.log("Catch All [ publishChain ]: ", err));
}

Promise.race([publishChain(), timeout(3000)])
  .then(val => console.log("Published! [ race ] ", val))
  .catch(err => console.log("Timed out! [ race ]: ", err));
