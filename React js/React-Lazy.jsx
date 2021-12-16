// witout lazy
import OtherComponent from './OtherComponent';

function MyComponent() {
    return (
        <div>
            <OtherComponent />
        </div>
    );
}

// with lazy
import React, { lazy, Suspense } from 'react'
const OtherComponent = lazy(() => import('./OtherComponent'));
const AnotherComponent = lazy(() => import('./AnotherComponent'))

function MyComponent() {
    return (
        <div>
            <Suspense fallback={<div>Loading...</div>}>
                <OtherComponent />
                <AnotherComponent />
            </Suspense>
        </div>
    );
}

// وقتی که یک کاربر صحفه وبی را باز می کند، تمام محتوا به صورت یک جا بارگزاری می شود . بعضی از قسمت های محتوا اصلا کاربر به آن نیازی ندارد و به همین دلیل ، چرا چیز با ارزشی مثل وقت و یا پهنای باند و منابع را بیهوده هدر دهیم

// استفاده می کنید کد های شما با استفاده از cra nextjs gatsby هنگامی که شما از
// وب پک ترکیب میشه و هنگام بارگزاری همه فایل هارو یکجا بارگزاری میکنه

