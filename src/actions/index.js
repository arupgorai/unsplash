import { IMAGES, STATS } from '../constants';


// IMAGES ACTIONS
const loadImages = () => ({
    type: IMAGES.LOAD
});

const setImages = images => ({
    type: IMAGES.LOAD_SUCCESS,
    images
});

const setError = error => ({
    type: IMAGES.LOAD_FAIL,
    error
});


// STATS ACTIONS
const loadImageStats = id => ({
    type: STATS.LOAD,
    id
});

const setImageStats = (id, downloads) => ({
    type: STATS.LOAD_SUCCESS,
    id,
    downloads
});

const setImageStatsError = id => ({
    type: STATS.LOAD_FAIL,
    id
});

export {
    loadImages,
    setImages,
    setError,
    loadImageStats,
    setImageStats,
    setImageStatsError
}