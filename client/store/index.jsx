import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import images from "./reducer/imagesReducer";

export let store = createStore(images, applyMiddleware(thunk));
