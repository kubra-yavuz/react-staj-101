import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

import { usersApi } from "./api";
import { counterReducer } from "./counterSlice";

export const store = configureStore({
    reducer: {
        counter: counterReducer,
        //Köşeli parantez ([usersApi.reducerPath]) kullanımı, JavaScript’te "computed property name" (hesaplanmış özellik adı) anlamına gelir. Yani, usersApi.reducerPath değişkeninin değerini anahtar olarak kullanır. Bu sayede, reducer’ın anahtarı dinamik olarak belirlenir ve "usersApi" gibi sabit bir string yerine, API slice’ının kendi belirlediği isim kullanılır.

        [usersApi.reducerPath]: usersApi.reducer,
    },

    //Middleware, Redux’ta action’lar dispatch edildikten sonra reducer’lara ulaşmadan önce araya girip bu action’ları yakalayan ve üzerinde işlem yapabilen fonksiyonlardır. Genellikle async işlemler, loglama, hata yakalama veya ek veri eklemek için kullanılır. Redux Toolkit’te de middleware’ler store’a eklenerek bu tür işlemler kolayca yönetilir.
    //https://medium.com/@davutdurgun redux-middleware-asenkron-i%CC%87%C5%9Flemler-ve-redux-toolkit-query-d959ff38fb15
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(usersApi.middleware),
});



//Store'dan alınan verilerin tipini tanımlıyoruz
// RootState, store'daki tüm state'lerin tipini temsil eder
export type RootState = ReturnType<typeof store.getState>;
// AppDispatch, store'daki dispatch fonksiyonunun tipini temsil eder
// Bu tipler, uygulamanın diğer bölümlerinde kullanılabilir
export type AppDispatch = typeof store.dispatch;

// Hooks
// Store'a action'lar dispatch edilir (gönderilir)
// useAppDispatch, store'dan dispatch fonksiyonunu kullanmak için özel bir hook
export const useAppDispatch: () => AppDispatch = useDispatch;
// Store'dan veriler seçilir (select edilir)
// useAppSelector, store'dan state'i seçmek için özel bir hook
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;