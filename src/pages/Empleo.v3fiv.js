import { getLogosImages } from 'backend/media';

$w.onReady(async function () {

    const result = await getLogosImages();

    if(result.success){

        $w("#html1").postMessage({
            images: result.images
        });

    } else {

        console.error(result.message);

    }

});