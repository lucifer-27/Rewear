import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { storage } from "./firebase";
import { v4 as uuidv4 } from 'uuid';

export async function uploadImages(images: File[], userId: string): Promise<string[]> {
    const imageUrls: string[] = [];

    const uploadPromises = images.map(image => {
        const imageRef = ref(storage, `items/${userId}/${uuidv4()}-${image.name}`);
        return uploadBytes(imageRef, image).then(snapshot => {
            return getDownloadURL(snapshot.ref);
        });
    });

    try {
        const urls = await Promise.all(uploadPromises);
        imageUrls.push(...urls);
        return imageUrls;
    } catch (error) {
        console.error("Error uploading images: ", error);
        throw new Error("Could not upload images.");
    }
}
