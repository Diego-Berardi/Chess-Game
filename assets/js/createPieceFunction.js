function createPiece(divObj, pieceName, color) {
  divObj.dataset.name = pieceName;

  if (color === "b") {
    if (pieceName === "r") {
      divObj.innerHTML = `<svg class="svg rook" viewBox="0 0 28 31" fill="none" xmlns="http://www.w3.org/2000/svg">
<g >
<path id="Vector" fill-rule="evenodd" clip-rule="evenodd" d="M1 29.6667H26.8V26.8H1V29.6667Z" fill="black" stroke="black" stroke-width="1.5" stroke-linejoin="round"/>
<path id="Vector_2" fill-rule="evenodd" clip-rule="evenodd" d="M4.34448 22.9778L5.77782 20.5889H22.0223L23.4556 22.9778H4.34448Z" fill="black" stroke="black" stroke-width="1.5" stroke-linejoin="round"/>
<path id="Vector_3" fill-rule="evenodd" clip-rule="evenodd" d="M3.8667 26.8V22.9778H23.9333V26.8H3.8667Z" fill="black" stroke="black" stroke-width="1.5" stroke-linejoin="round"/>
<path id="Vector_4" fill-rule="evenodd" clip-rule="evenodd" d="M5.77777 20.5889V8.16666H22.0222V20.5889H5.77777Z" fill="black" stroke="black" stroke-width="1.5"/>
<path id="Vector_5" fill-rule="evenodd" clip-rule="evenodd" d="M5.7778 8.16666L2.91113 5.77777H24.8889L22.0222 8.16666H5.7778Z" fill="black" stroke="black" stroke-width="1.5" stroke-linejoin="round"/>
<path id="Vector_6" fill-rule="evenodd" clip-rule="evenodd" d="M2.91113 5.77778V1H6.73336V2.91111H11.5111V1H16.2889V2.91111H21.0667V1H24.8889V5.77778H2.91113Z" fill="black" stroke="black" stroke-width="1.5" stroke-linejoin="round"/>
<path id="Vector_7" d="M3.8667 26.3222H23.9333" stroke="white" stroke-linecap="round"/>
<path id="Vector_8" d="M4.82227 22.5H22.9778" stroke="white" stroke-linecap="round"/>
<path id="Vector_9" d="M5.77777 20.5889H22.0222" stroke="white" stroke-linecap="round"/>
<path id="Vector_10" d="M5.77777 8.16666H22.0222" stroke="white" stroke-linecap="round"/>
<path id="Vector_11" d="M2.91113 5.77777H24.8889" stroke="white" stroke-linecap="round"/>
</g>
</svg>`;
    }

    if (pieceName === "n") {
      divObj.innerHTML = `<svg class="svg" viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg">
<g id="knight_B">
<g id="Vector">
<path fill-rule="evenodd" clip-rule="evenodd" d="M16.2889 3.86667C26.3222 4.82222 32.0555 11.5111 31.5777 31.5778H9.59998C9.59998 22.9778 19.1555 25.3667 17.2444 11.5111" fill="black"/>
<path d="M16.2889 3.86667C26.3222 4.82222 32.0555 11.5111 31.5777 31.5778H9.59998C9.59998 22.9778 19.1555 25.3667 17.2444 11.5111" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g id="Vector_2">
<path fill-rule="evenodd" clip-rule="evenodd" d="M18.2 11.5111C18.5631 14.2918 12.8967 18.5536 10.5556 20.1111C7.68889 22.0222 7.86089 24.2582 5.77778 23.9333C4.78209 23.0351 7.12511 21.0284 5.77778 21.0667C4.82222 21.0667 5.95933 22.242 4.82222 22.9778C3.86667 22.9778 0.997135 23.9333 1 19.1555C1 17.2444 6.73333 7.68889 6.73333 7.68889C6.73333 7.68889 8.53933 5.87333 8.64444 4.34444C7.94689 3.39462 8.16667 2.43333 8.16667 1.47778C9.12222 0.522222 11.0333 3.86667 11.0333 3.86667H12.9444C12.9444 3.86667 13.6898 1.9632 15.3333 1C16.2889 1 16.2889 3.86667 16.2889 3.86667" fill="black"/>
<path d="M18.2 11.5111C18.5631 14.2918 12.8967 18.5536 10.5556 20.1111C7.68889 22.0222 7.86089 24.2582 5.77778 23.9333C4.78209 23.0351 7.12511 21.0284 5.77778 21.0667C4.82222 21.0667 5.95933 22.242 4.82222 22.9778C3.86667 22.9778 0.997135 23.9333 1 19.1555C1 17.2444 6.73333 7.68889 6.73333 7.68889C6.73333 7.68889 8.53933 5.87333 8.64444 4.34444C7.94689 3.39462 8.16667 2.43333 8.16667 1.47778C9.12222 0.522222 11.0333 3.86667 11.0333 3.86667H12.9444C12.9444 3.86667 13.6898 1.9632 15.3333 1C16.2889 1 16.2889 3.86667 16.2889 3.86667" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<path id="Vector_3" fill-rule="evenodd" clip-rule="evenodd" d="M4.34447 18.6778C4.34447 18.8045 4.29413 18.926 4.20453 19.0156C4.11493 19.1052 3.99341 19.1556 3.86669 19.1556C3.73998 19.1556 3.61845 19.1052 3.52885 19.0156C3.43925 18.926 3.38892 18.8045 3.38892 18.6778C3.38892 18.5511 3.43925 18.4295 3.52885 18.3399C3.61845 18.2503 3.73998 18.2 3.86669 18.2C3.99341 18.2 4.11493 18.2503 4.20453 18.3399C4.29413 18.4295 4.34447 18.5511 4.34447 18.6778Z" fill="white" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path id="Vector_4" fill-rule="evenodd" clip-rule="evenodd" d="M9.53595 9.3611C9.34588 9.69031 9.12001 9.98086 8.90801 10.1688C8.69602 10.3568 8.51527 10.4268 8.40554 10.3635C8.2958 10.3001 8.26607 10.1086 8.32287 9.831C8.37968 9.55342 8.51838 9.21253 8.70845 8.88333C8.89852 8.55412 9.1244 8.26357 9.33639 8.07559C9.54838 7.8876 9.72913 7.81759 9.83886 7.88095C9.9486 7.94431 9.97833 8.13584 9.92153 8.41343C9.86472 8.69101 9.72602 9.0319 9.53595 9.3611V9.3611Z" fill="white" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path id="Vector_5" fill-rule="evenodd" clip-rule="evenodd" d="M18.7255 4.2489L18.2955 5.63446L18.7733 5.77779C21.7833 6.73335 24.1722 8.15712 26.3222 12.2278C28.4722 16.2985 29.4277 22.0796 28.95 31.5778L28.9022 32.0556H31.0522L31.1 31.5778C31.5777 21.9649 30.2591 15.4767 27.9944 11.1862C25.7298 6.89579 22.4618 4.84135 19.2129 4.34446L18.7255 4.2489Z" fill="white"/>
</g>
</svg>
`;
    }
    if (pieceName === "b") {
      divObj.innerHTML = `<svg class="svg" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
<g id="bishop_B">
<g id="Group">
<path id="Vector" fill-rule="evenodd" clip-rule="evenodd" d="M3.86667 30.1444C7.106 29.2176 13.5273 30.5553 16.7667 28.2333C20.006 30.5553 26.4273 29.2176 29.6667 30.1444C29.6667 30.1444 31.2433 30.6604 32.5333 32.0556C31.8836 32.9825 30.9567 33.0016 29.6667 32.5333C26.4273 31.6065 20.006 32.9729 16.7667 31.5778C13.5273 32.9729 7.106 31.6065 3.86667 32.5333C2.57284 33.0016 1.64691 32.9825 1 32.0556C2.29382 30.2018 3.86667 30.1444 3.86667 30.1444Z" fill="black" stroke="black" stroke-width="1.5" stroke-linejoin="round"/>
<path id="Vector_2" fill-rule="evenodd" clip-rule="evenodd" d="M9.59999 26.3222C11.9889 28.7111 21.5444 28.7111 23.9333 26.3222C24.4111 24.8889 23.9333 24.4111 23.9333 24.4111C23.9333 22.0222 21.5444 20.5889 21.5444 20.5889C26.8 19.1555 27.2778 9.59999 16.7667 5.77777C6.25555 9.59999 6.73332 19.1555 11.9889 20.5889C11.9889 20.5889 9.59999 22.0222 9.59999 24.4111C9.59999 24.4111 9.12221 24.8889 9.59999 26.3222Z" fill="black" stroke="black" stroke-width="1.5" stroke-linejoin="round"/>
<path id="Vector_3" fill-rule="evenodd" clip-rule="evenodd" d="M19.1555 3.38889C19.1555 4.02246 18.9038 4.63009 18.4558 5.07809C18.0078 5.52609 17.4002 5.77778 16.7666 5.77778C16.1331 5.77778 15.5254 5.52609 15.0774 5.07809C14.6294 4.63009 14.3777 4.02246 14.3777 3.38889C14.3777 2.75532 14.6294 2.14769 15.0774 1.69969C15.5254 1.25169 16.1331 1 16.7666 1C17.4002 1 18.0078 1.25169 18.4558 1.69969C18.9038 2.14769 19.1555 2.75532 19.1555 3.38889V3.38889Z" fill="black" stroke="black" stroke-width="1.5" stroke-linejoin="round"/>
</g>
<path id="Vector_4" d="M14.3778 12.9444H19.1555M11.9889 20.5889H21.5444H11.9889ZM9.59998 24.4111H23.9333H9.59998ZM16.7666 10.5555V15.3333V10.5555Z" stroke="white" stroke-width="1.5" stroke-linecap="round"/>
</g>
</svg>
`;
    }
    if (pieceName === "k") {
      divObj.innerHTML = `<svg class="svg" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
<g id="king_B">
<path id="Vector" d="M16.9321 6.37978V1" stroke="black" stroke-width="1.5" stroke-linecap="round"/>
<path id="Vector_2" fill-rule="evenodd" clip-rule="evenodd" d="M16.9321 19.1556C16.9321 19.1556 21.2321 11.9889 19.7988 9.12223C19.7988 9.12223 18.8432 6.73334 16.9321 6.73334C15.021 6.73334 14.0655 9.12223 14.0655 9.12223C12.6321 11.9889 16.9321 19.1556 16.9321 19.1556Z" fill="black" stroke="black" stroke-width="1.5"/>
<path id="Vector_3" fill-rule="evenodd" clip-rule="evenodd" d="M6.42099 30.6222C11.6765 33.9667 21.2321 33.9667 26.4877 30.6222V23.9333C26.4877 23.9333 35.0877 19.6333 32.221 13.9C28.3988 7.68888 19.321 10.5555 16.9321 17.7222V21.0667V17.7222C13.5877 10.5555 4.50988 7.68888 1.64321 13.9C-1.22345 19.6333 6.42099 23.4555 6.42099 23.4555V30.6222Z" fill="black" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path id="Vector_4" d="M14.5432 2.9111H19.321" stroke="black" stroke-width="1.5" stroke-linecap="round"/>
<path id="Vector_5" d="M26.0099 23.4556C26.0099 23.4556 34.1321 19.6333 31.7719 14.2344C28.0643 8.64444 19.321 12.4667 16.9321 18.6778L16.9417 20.6844L16.9321 18.6778C14.5432 12.4667 4.89783 8.64444 2.11812 14.2344C-0.267904 19.6333 6.75543 22.8344 6.75543 22.8344" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path id="Vector_6" d="M6.42102 30.6222C11.6766 27.7555 21.2321 27.7555 26.4877 30.6222M6.42102 23.9333C11.6766 21.0667 21.2321 21.0667 26.4877 23.9333H6.42102ZM6.42102 27.2778C11.6766 24.4111 21.2321 24.4111 26.4877 27.2778H6.42102Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</g>
</svg>
`;
    }

    if (pieceName === "q") {
      divObj.innerHTML = `<svg class="svg" viewBox="0 0 37 35" fill="none" xmlns="http://www.w3.org/2000/svg">
<g id="queen_B">
<g id="Group">
<path id="Vector" d="M2.62778 9.07779C4.07906 9.07779 5.25555 7.90129 5.25555 6.45001C5.25555 4.99873 4.07906 3.82224 2.62778 3.82224C1.1765 3.82224 0 4.99873 0 6.45001C0 7.90129 1.1765 9.07779 2.62778 9.07779Z" fill="black"/>
<path id="Vector_2" d="M10.2722 6.21112C11.7235 6.21112 12.9 5.03462 12.9 3.58334C12.9 2.13206 11.7235 0.955566 10.2722 0.955566C8.82097 0.955566 7.64447 2.13206 7.64447 3.58334C7.64447 5.03462 8.82097 6.21112 10.2722 6.21112Z" fill="black"/>
<path id="Vector_3" d="M18.3944 5.25555C19.8457 5.25555 21.0222 4.07906 21.0222 2.62778C21.0222 1.1765 19.8457 0 18.3944 0C16.9432 0 15.7667 1.1765 15.7667 2.62778C15.7667 4.07906 16.9432 5.25555 18.3944 5.25555Z" fill="black"/>
<path id="Vector_4" d="M26.5167 6.21112C27.968 6.21112 29.1445 5.03462 29.1445 3.58334C29.1445 2.13206 27.968 0.955566 26.5167 0.955566C25.0654 0.955566 23.8889 2.13206 23.8889 3.58334C23.8889 5.03462 25.0654 6.21112 26.5167 6.21112Z" fill="black"/>
<path id="Vector_5" d="M34.1611 9.07779C35.6124 9.07779 36.7889 7.90129 36.7889 6.45001C36.7889 4.99873 35.6124 3.82224 34.1611 3.82224C32.7098 3.82224 31.5333 4.99873 31.5333 6.45001C31.5333 7.90129 32.7098 9.07779 34.1611 9.07779Z" fill="black"/>
</g>
<path id="Vector_6" fill-rule="evenodd" clip-rule="evenodd" d="M5.49442 19.8278C13.6166 18.3944 25.5611 18.3944 31.2944 19.8278L33.6833 7.88332L26.5166 18.8722L26.23 5.39888L21.2611 18.3944L18.3944 4.53888L15.5278 18.3944L10.5589 5.39888L10.2722 18.8722L3.10553 7.88332L5.49442 19.8278Z" fill="black" stroke="black" stroke-width="1.5" stroke-linejoin="round"/>
<path id="Vector_7" fill-rule="evenodd" clip-rule="evenodd" d="M5.49445 19.8278C5.49445 21.7389 6.92778 21.7389 7.88333 23.65C8.83889 25.0833 8.83889 24.6056 8.36111 26.9944C6.92778 27.95 6.92778 29.3833 6.92778 29.3833C5.49445 30.8167 7.40556 31.7722 7.40556 31.7722C13.6167 32.7278 23.1722 32.7278 29.3833 31.7722C29.3833 31.7722 30.8167 30.8167 29.3833 29.3833C29.3833 29.3833 29.8611 27.95 28.4278 26.9944C27.95 24.6056 27.95 25.0833 28.9056 23.65C29.8611 21.7389 31.2944 21.7389 31.2944 19.8278C23.1722 18.3944 13.6167 18.3944 5.49445 19.8278Z" fill="black" stroke="black" stroke-width="1.5" stroke-linejoin="round"/>
<path id="Vector_8" d="M7.40558 31.7722C14.5223 34.248 22.2666 34.248 29.3834 31.7722" stroke="black" stroke-width="1.5" stroke-linejoin="round"/>
<path id="Vector_9" d="M7.40558 22.6945C14.5223 20.2186 22.2666 20.2186 29.3834 22.6945" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path id="Vector_10" d="M8.83887 25.0833H27.95" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path id="Vector_11" d="M7.8833 27.95C14.7086 30.2096 22.0803 30.2096 28.9055 27.95" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path id="Vector_12" d="M6.9278 30.8167C14.3333 33.5195 22.4556 33.5195 29.8611 30.8167" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</g>
</svg>`;
    }

    if (pieceName === "p") {
      divObj.innerHTML = `<svg class="svg pawn" viewBox="0 0 24 31" fill="none" xmlns="http://www.w3.org/2000/svg">
<g >
<path id="Vector" d="M11.9889 1C9.87711 1 8.16666 2.71044 8.16666 4.82222C8.16666 5.67267 8.44378 6.45622 8.912 7.09645C7.04866 8.16667 5.77778 10.1638 5.77778 12.4667C5.77778 14.4064 6.676 16.136 8.08066 17.2731C5.214 18.286 1 22.5764 1 30.1444H22.9778C22.9778 22.5764 18.7638 18.286 15.8971 17.2731C17.3018 16.136 18.2 14.4064 18.2 12.4667C18.2 10.1638 16.9291 8.16667 15.0658 7.09645C15.534 6.45622 15.8111 5.67267 15.8111 4.82222C15.8111 2.71044 14.1007 1 11.9889 1Z" fill="black" stroke="black" stroke-width="1.5" stroke-linecap="round"/>
</g>
</svg>`;
    }
  } else {
    if (pieceName === "r") {
      // rook

      divObj.innerHTML = `<svg class="svg rook" viewBox="0 0 28 31" fill="none" xmlns="http://www.w3.org/2000/svg">
<g id="rook_W">
<path id="Vector" fill-rule="evenodd" clip-rule="evenodd" d="M1 29.6667H26.8V26.8H1V29.6667Z" fill="white" stroke="black" stroke-width="1.5" stroke-linejoin="round"/>
<path id="Vector_2" fill-rule="evenodd" clip-rule="evenodd" d="M3.8667 26.8V22.9778H23.9333V26.8H3.8667Z" fill="white" stroke="black" stroke-width="1.5" stroke-linejoin="round"/>
<g id="Vector_3">
<path fill-rule="evenodd" clip-rule="evenodd" d="M2.91113 5.77778V1H6.73336V2.91111H11.5111V1H16.2889V2.91111H21.0667V1H24.8889V5.77778" fill="white"/>
<path d="M2.91113 5.77778V1H6.73336V2.91111H11.5111V1H16.2889V2.91111H21.0667V1H24.8889V5.77778" stroke="black" stroke-width="1.5" stroke-linejoin="round"/>
</g>
<g id="Vector_4">
<path fill-rule="evenodd" clip-rule="evenodd" d="M24.8889 5.77777L22.0222 8.64444H5.7778L2.91113 5.77777" fill="white"/>
<path d="M24.8889 5.77777L22.0222 8.64444H5.7778L2.91113 5.77777" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g id="Vector_5">
<path fill-rule="evenodd" clip-rule="evenodd" d="M22.0222 8.64444V20.5889H5.77777V8.64444" fill="white"/>
<path d="M22.0222 8.64444V20.5889H5.77777V8.64444" stroke="black" stroke-width="1.5"/>
</g>
<g id="Vector_6">
<path fill-rule="evenodd" clip-rule="evenodd" d="M22.0223 20.5889L23.4556 22.9778H4.34448L5.77782 20.5889" fill="white"/>
<path d="M22.0223 20.5889L23.4556 22.9778H4.34448L5.77782 20.5889" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<path id="Vector_7" d="M2.91113 5.77777H24.8889" stroke="black" stroke-width="1.5" stroke-linecap="round"/>
</g>
</svg>`;
    }

    if (pieceName === "n") {
      // knight

      divObj.innerHTML = `<svg class="svg" viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg">
<g id="knight_W">
<g id="Vector">
<path fill-rule="evenodd" clip-rule="evenodd" d="M16.2889 3.86667C26.3222 4.82222 32.0555 11.5111 31.5777 31.5778H9.59998C9.59998 22.9778 19.1555 25.3667 17.2444 11.5111" fill="white"/>
<path d="M16.2889 3.86667C26.3222 4.82222 32.0555 11.5111 31.5777 31.5778H9.59998C9.59998 22.9778 19.1555 25.3667 17.2444 11.5111" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g id="Vector_2">
<path fill-rule="evenodd" clip-rule="evenodd" d="M18.2 11.5111C18.5631 14.2918 12.8967 18.5536 10.5556 20.1111C7.68889 22.0222 7.86089 24.2582 5.77778 23.9333C4.78209 23.0351 7.12511 21.0284 5.77778 21.0667C4.82222 21.0667 5.95933 22.242 4.82222 22.9778C3.86667 22.9778 0.997135 23.9333 1 19.1556C1 17.2444 6.73333 7.68889 6.73333 7.68889C6.73333 7.68889 8.53933 5.87333 8.64444 4.34444C7.94689 3.39462 8.16667 2.43333 8.16667 1.47778C9.12222 0.522222 11.0333 3.86667 11.0333 3.86667H12.9444C12.9444 3.86667 13.6898 1.9632 15.3333 1C16.2889 1 16.2889 3.86667 16.2889 3.86667" fill="white"/>
<path d="M18.2 11.5111C18.5631 14.2918 12.8967 18.5536 10.5556 20.1111C7.68889 22.0222 7.86089 24.2582 5.77778 23.9333C4.78209 23.0351 7.12511 21.0284 5.77778 21.0667C4.82222 21.0667 5.95933 22.242 4.82222 22.9778C3.86667 22.9778 0.997135 23.9333 1 19.1556C1 17.2444 6.73333 7.68889 6.73333 7.68889C6.73333 7.68889 8.53933 5.87333 8.64444 4.34444C7.94689 3.39462 8.16667 2.43333 8.16667 1.47778C9.12222 0.522222 11.0333 3.86667 11.0333 3.86667H12.9444C12.9444 3.86667 13.6898 1.9632 15.3333 1C16.2889 1 16.2889 3.86667 16.2889 3.86667" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<path id="Vector_3" fill-rule="evenodd" clip-rule="evenodd" d="M4.34447 18.6778C4.34447 18.8045 4.29413 18.926 4.20453 19.0156C4.11493 19.1052 3.99341 19.1556 3.86669 19.1556C3.73998 19.1556 3.61845 19.1052 3.52885 19.0156C3.43925 18.926 3.38892 18.8045 3.38892 18.6778C3.38892 18.5511 3.43925 18.4296 3.52885 18.3399C3.61845 18.2503 3.73998 18.2 3.86669 18.2C3.99341 18.2 4.11493 18.2503 4.20453 18.3399C4.29413 18.4296 4.34447 18.5511 4.34447 18.6778Z" fill="black" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path id="Vector_4" fill-rule="evenodd" clip-rule="evenodd" d="M9.53595 9.3611C9.34588 9.69031 9.12001 9.98086 8.90801 10.1688C8.69602 10.3568 8.51527 10.4268 8.40554 10.3635C8.2958 10.3001 8.26607 10.1086 8.32287 9.831C8.37968 9.55342 8.51838 9.21253 8.70845 8.88333C8.89852 8.55412 9.1244 8.26357 9.33639 8.07559C9.54838 7.8876 9.72913 7.81759 9.83886 7.88095C9.9486 7.94431 9.97833 8.13584 9.92153 8.41343C9.86472 8.69101 9.72602 9.0319 9.53595 9.3611V9.3611Z" fill="black" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</g>
</svg>

`;
    }
    if (pieceName === "b") {
      divObj.innerHTML = `<svg class="svg" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
<g id="bishop_W">
<g id="Group">
<path id="Vector" fill-rule="evenodd" clip-rule="evenodd" d="M3.86667 30.1444C7.106 29.2176 13.5273 30.5553 16.7667 28.2333C20.006 30.5553 26.4273 29.2176 29.6667 30.1444C29.6667 30.1444 31.2433 30.6604 32.5333 32.0556C31.8836 32.9824 30.9567 33.0016 29.6667 32.5333C26.4273 31.6064 20.006 32.9729 16.7667 31.5778C13.5273 32.9729 7.106 31.6064 3.86667 32.5333C2.57284 33.0016 1.64691 32.9824 1 32.0556C2.29382 30.2018 3.86667 30.1444 3.86667 30.1444Z" fill="white" stroke="black" stroke-width="1.5" stroke-linejoin="round"/>
<path id="Vector_2" fill-rule="evenodd" clip-rule="evenodd" d="M9.59999 26.3222C11.9889 28.7111 21.5444 28.7111 23.9333 26.3222C24.4111 24.8889 23.9333 24.4111 23.9333 24.4111C23.9333 22.0222 21.5444 20.5889 21.5444 20.5889C26.8 19.1555 27.2778 9.59999 16.7667 5.77777C6.25555 9.59999 6.73332 19.1555 11.9889 20.5889C11.9889 20.5889 9.59999 22.0222 9.59999 24.4111C9.59999 24.4111 9.12221 24.8889 9.59999 26.3222Z" fill="white" stroke="black" stroke-width="1.5" stroke-linejoin="round"/>
<path id="Vector_3" fill-rule="evenodd" clip-rule="evenodd" d="M19.1555 3.38889C19.1555 4.02246 18.9038 4.63009 18.4558 5.07809C18.0078 5.52609 17.4002 5.77778 16.7666 5.77778C16.1331 5.77778 15.5254 5.52609 15.0774 5.07809C14.6294 4.63009 14.3777 4.02246 14.3777 3.38889C14.3777 2.75532 14.6294 2.14769 15.0774 1.69969C15.5254 1.25169 16.1331 1 16.7666 1C17.4002 1 18.0078 1.25169 18.4558 1.69969C18.9038 2.14769 19.1555 2.75532 19.1555 3.38889V3.38889Z" fill="white" stroke="black" stroke-width="1.5" stroke-linejoin="round"/>
</g>
<path id="Vector_4" d="M14.3778 12.9444H19.1555M11.9889 20.5889H21.5444H11.9889ZM9.59998 24.4111H23.9333H9.59998ZM16.7666 10.5555V15.3333V10.5555Z" stroke="black" stroke-width="1.5" stroke-linecap="round"/>
</g>
</svg>
`;
    }
    if (pieceName === "k") {
      divObj.innerHTML = `<svg class="svg" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
<g id="king_W">
<path id="Vector" d="M16.9321 6.37978V1" stroke="black" stroke-width="1.5" stroke-linecap="round"/>
<path id="Vector_2" d="M14.5432 2.9111H19.321" stroke="black" stroke-width="1.5" stroke-linecap="round"/>
<path id="Vector_3" fill-rule="evenodd" clip-rule="evenodd" d="M16.9321 19.1556C16.9321 19.1556 21.2321 11.9889 19.7988 9.12223C19.7988 9.12223 18.8432 6.73334 16.9321 6.73334C15.021 6.73334 14.0655 9.12223 14.0655 9.12223C12.6321 11.9889 16.9321 19.1556 16.9321 19.1556Z" fill="white" stroke="black" stroke-width="1.5"/>
<path id="Vector_4" fill-rule="evenodd" clip-rule="evenodd" d="M6.42099 30.6222C11.6765 33.9667 21.2321 33.9667 26.4877 30.6222V23.9333C26.4877 23.9333 35.0877 19.6333 32.221 13.9C28.3988 7.68888 19.321 10.5555 16.9321 17.7222V21.0667V17.7222C13.5877 10.5555 4.50988 7.68888 1.64321 13.9C-1.22345 19.6333 6.42099 23.4555 6.42099 23.4555V30.6222Z" fill="white" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path id="Vector_5" d="M6.42102 23.9333C11.6766 21.0667 21.2321 21.0667 26.4877 23.9333" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path id="Vector_6" d="M6.42102 27.2778C11.6766 24.4111 21.2321 24.4111 26.4877 27.2778" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path id="Vector_7" d="M6.42102 30.6222C11.6766 27.7556 21.2321 27.7556 26.4877 30.6222" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</g>
</svg>`;
    }

    if (pieceName === "q") {
      divObj.innerHTML = `<svg class="svg" viewBox="0 0 38 34" fill="none" xmlns="http://www.w3.org/2000/svg">
<g id="queen_W">
<path id="Vector" fill-rule="evenodd" clip-rule="evenodd" d="M4.82222 7.2111C4.82222 7.71796 4.62087 8.20405 4.26247 8.56246C3.90407 8.92086 3.41797 9.12221 2.91111 9.12221C2.40425 9.12221 1.91815 8.92086 1.55975 8.56246C1.20135 8.20405 1 7.71796 1 7.2111C1 6.70424 1.20135 6.21814 1.55975 5.85974C1.91815 5.50134 2.40425 5.29999 2.91111 5.29999C3.41797 5.29999 3.90407 5.50134 4.26247 5.85974C4.62087 6.21814 4.82222 6.70424 4.82222 7.2111V7.2111Z" fill="white" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path id="Vector_2" fill-rule="evenodd" clip-rule="evenodd" d="M20.5889 2.91111C20.5889 3.41797 20.3875 3.90407 20.0291 4.26247C19.6707 4.62087 19.1846 4.82222 18.6778 4.82222C18.1709 4.82222 17.6848 4.62087 17.3264 4.26247C16.968 3.90407 16.7667 3.41797 16.7667 2.91111C16.7667 2.40425 16.968 1.91815 17.3264 1.55975C17.6848 1.20135 18.1709 1 18.6778 1C19.1846 1 19.6707 1.20135 20.0291 1.55975C20.3875 1.91815 20.5889 2.40425 20.5889 2.91111V2.91111Z" fill="white" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path id="Vector_3" fill-rule="evenodd" clip-rule="evenodd" d="M36.3556 7.2111C36.3556 7.71796 36.1542 8.20405 35.7958 8.56246C35.4374 8.92086 34.9513 9.12221 34.4444 9.12221C33.9376 9.12221 33.4515 8.92086 33.0931 8.56246C32.7347 8.20405 32.5333 7.71796 32.5333 7.2111C32.5333 6.70424 32.7347 6.21814 33.0931 5.85974C33.4515 5.50134 33.9376 5.29999 34.4444 5.29999C34.9513 5.29999 35.4374 5.50134 35.7958 5.85974C36.1542 6.21814 36.3556 6.70424 36.3556 7.2111V7.2111Z" fill="white" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path id="Vector_4" fill-rule="evenodd" clip-rule="evenodd" d="M12.4667 3.86668C12.4667 4.37354 12.2653 4.85963 11.9069 5.21804C11.5485 5.57644 11.0624 5.77779 10.5556 5.77779C10.0487 5.77779 9.56262 5.57644 9.20422 5.21804C8.84582 4.85963 8.64447 4.37354 8.64447 3.86668C8.64447 3.35982 8.84582 2.87372 9.20422 2.51532C9.56262 2.15692 10.0487 1.95557 10.5556 1.95557C11.0624 1.95557 11.5485 2.15692 11.9069 2.51532C12.2653 2.87372 12.4667 3.35982 12.4667 3.86668V3.86668Z" fill="white" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path id="Vector_5" fill-rule="evenodd" clip-rule="evenodd" d="M28.7111 4.34443C28.7111 4.85129 28.5098 5.33739 28.1514 5.69579C27.793 6.05419 27.3069 6.25554 26.8 6.25554C26.2932 6.25554 25.8071 6.05419 25.4487 5.69579C25.0903 5.33739 24.8889 4.85129 24.8889 4.34443C24.8889 3.83757 25.0903 3.35147 25.4487 2.99307C25.8071 2.63467 26.2932 2.43332 26.8 2.43332C27.3069 2.43332 27.793 2.63467 28.1514 2.99307C28.5098 3.35147 28.7111 3.83757 28.7111 4.34443V4.34443Z" fill="white" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path id="Vector_6" fill-rule="evenodd" clip-rule="evenodd" d="M5.77775 20.5889C13.9 19.1556 25.8444 19.1556 31.5777 20.5889L33.4889 9.12224L26.8 19.6333V6.25557L21.5444 19.1556L18.6777 4.82224L15.8111 19.1556L10.5555 5.77779V19.6333L3.86664 9.12224L5.77775 20.5889Z" fill="white" stroke="black" stroke-width="1.5" stroke-linejoin="round"/>
<path id="Vector_7" fill-rule="evenodd" clip-rule="evenodd" d="M5.77777 20.5889C5.77777 22.5 7.2111 22.5 8.16666 24.4111C9.12222 25.8444 9.12222 25.3667 8.64444 27.7556C7.2111 28.7111 7.2111 30.1444 7.2111 30.1444C5.77777 31.5778 7.68888 32.5333 7.68888 32.5333C13.9 33.4889 23.4555 33.4889 29.6667 32.5333C29.6667 32.5333 31.1 31.5778 29.6667 30.1444C29.6667 30.1444 30.1444 28.7111 28.7111 27.7556C28.2333 25.3667 28.2333 25.8444 29.1889 24.4111C30.1444 22.5 31.5778 22.5 31.5778 20.5889C23.4555 19.1556 13.9 19.1556 5.77777 20.5889Z" fill="white" stroke="black" stroke-width="1.5" stroke-linejoin="round"/>
<path id="Vector_8" d="M8.16669 24.4111C11.5111 23.4556 25.8445 23.4556 29.1889 24.4111" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path id="Vector_9" d="M8.64447 27.7555C14.3778 26.8 22.9778 26.8 28.7111 27.7555" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</g>
</svg>
`;
    }

    if (pieceName === "p") {
      divObj.innerHTML = ` <svg class="svg pawn " viewBox="0 0 24 31" fill="none" xmlns="http://www.w3.org/2000/svg">
<g id="pawn_W">
<path id="Vector" d="M11.9889 1C9.87711 1 8.16666 2.71044 8.16666 4.82222C8.16666 5.67267 8.44378 6.45622 8.912 7.09644C7.04866 8.16667 5.77778 10.1638 5.77778 12.4667C5.77778 14.4064 6.676 16.136 8.08066 17.2731C5.214 18.286 1 22.5764 1 30.1444H22.9778C22.9778 22.5764 18.7638 18.286 15.8971 17.2731C17.3018 16.136 18.2 14.4064 18.2 12.4667C18.2 10.1638 16.9291 8.16667 15.0658 7.09644C15.534 6.45622 15.8111 5.67267 15.8111 4.82222C15.8111 2.71044 14.1007 1 11.9889 1Z" fill="white" stroke="black" stroke-width="1.5" stroke-linecap="round"/>
</g>
</svg>`;
    }
  }
}
