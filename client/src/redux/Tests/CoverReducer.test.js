import coverReducer, {setStatus} from "../CoverReducer";

let state = {
    profile: null,
    status: '',
    time: "15 minutes ago"
};

test('Check status', () => {
    let action = setStatus("I'am Slava");

    let profile = coverReducer(state, action);

    expect(profile.status).toBe("I'am Slava");
});