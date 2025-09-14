// node myFile.js

const pendingTimers = [];
const PendingOsTasks = [];
const pendingOperations = [];

// New timers, tasks, operations are recorded from myFile running
myFile.runContents();


function shouldContinue(){
    // check one: Any pending setTimeout, setInterval, setImmediate?
    // check two: Any pending OS tasks? eg. server listening to port
    // check three: Any pending long-running operations? eg. fs module
    return pendingTimers.length || pendingOperations.length || PendingOsTasks.length ; // true or false 
}

// Entire body executes in `one tick`
while(shouldContinue()) {
    // 1. Node looks at pendingTimers and sees if any functions are ready to be called. setTimeout, setInterval
    // 2. Node looks at pending OS tasks and calls relevant callbacks.
    // 3. Pause excecution. Continue when...
    // - a new pending OS task is done
    // - a new pendingOperation is done
    // - a timer is about to complete
    // 4. Look at pendingTimers. Call any setImmediate
    // 5. Handle any 'close' events
}




// exit back to terminal