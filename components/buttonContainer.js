import Link from 'next/link'
import React from 'react'

export default function buttonContainer() {
    return (
        <div className="buttonContiner fullw center m30">
            <Link href="urunler">
            <div className="buttonBlack needHover">

                Ürünlere gözat
            </div>
            </Link>
        </div>
    )
}
