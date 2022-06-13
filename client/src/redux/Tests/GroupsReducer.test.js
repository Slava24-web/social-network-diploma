import groupsReducer, {join, leave} from "../GroupsReducer";

let state = {
    groups: [
        {
            id: 1,
            members: 24,
            pathCover: "images/5a101e837705b-bp-cover-image.jpg",
            pathLogo: "images/5a101e7b809a3-bpthumb.jpg",
            name: "Drawing Lovers",
            time: "17 hours ago",
            text: "Competently formulate enterprise-wide synergy before 24/7 quality vectors. Holisticly implement enterprise intellectual capital through enabled expertise. Enthusiastically exploit.",
            status: "Public",
            joined: true
        },
        {
            id: 2,
            members: 12,
            pathCover: "images/5a101e3ee513a-bp-cover-image.jpg",
            pathLogo: "images/5a101deef28bc-bpthumb.jpg",
            name: "Jazz",
            time: "18 hours ago",
            text: "Dynamically repurpose B2B platforms after leading-edge infrastructures. Globally extend principle-centered internal or ”organic” sources for long-term high-impact value. Conveniently strategize real-time schemas through.",
            status: "Public",
            joined: true
        },
        {
            id: 3,
            members: 21,
            pathCover: "images/WhiteBG.png",
            pathLogo: "images/5c86f99ad5bf0-bpfull.jpg",
            name: "Huckers",
            time: "3 month ago",
            text: "Huckers",
            status: "Private",
            joined: false
        }
    ]
}

test("When click 'join', joined = true", () => {
   let action = join(3);

   let newGroups = groupsReducer(state, action);

   expect(newGroups.groups[2].joined).toBe(true);
});

test("When click 'join', joined = false", () => {
    let action = leave(1);

    let newGroups = groupsReducer(state, action);

    expect(newGroups.groups[0].joined).toBe(false);
});