import { Alert } from "react-native";

export function onClickToast(path: string, person: string, router: any) {
    Alert.alert(
        "Hi there!",
        `You clicked ${person}`,
        [
            {
                text: "Yes",
                onPress: () => {
                    if (path) {
                        router.push(path as any); // Navigate using router
                    }
                },
            },
            {
                text: "Cancel",
                onPress: () => console.log("Canceled"),
                style: "cancel",
            },
        ],
        { cancelable: true }
    );
}
