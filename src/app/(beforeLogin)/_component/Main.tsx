import Link from "next/link";

export default function Main() {
  return (
      <>
        {/* X Logo Area */}
        <div className="flex flex-col grow items-center justify-center">
          <svg className="max-h-[380px] h-1/2 max-w-full p-5" viewBox="0 0 24 24" aria-hidden="true">
            <g>
              <path
                  d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
            </g>
          </svg>
        </div>
        {/* Content Area */}
        <div className="flex flex-col justify-center">
          <h1 className="text-[64px] leading-[84px] font-bold my-12">지금 일어나고 있는 일</h1>
          <h2 className="text-[31px] leading-[36px] font-bold mb-8">지금 가입하세요.</h2>
          <Link href="/i/flow/signup" className="text-[15px] leading-[20px] font-bold bg-[rgb(29_155_240)] text-white rounded-3xl w-[300px] h-[40px] flex items-center justify-center hover:bg-[rgb(26,140,216)]">계정 만들기</Link>
          <h3 className="text-[17px] leading-[20px] font-bold mt-10 mb-5">이미 트위터에 가입하셨나요?</h3>
          <Link href="/login" className="text-[15px] leading-[20px] font-bold bg-white text-[rgb(29_155_240)] rounded-3xl flex items-center justify-center w-[300px] h-[40px] border border-[rgb(207_217_222)] hover:bg-[rgba(29,155,240,0.1)]">로그인</Link>
        </div>
      </>
  )
};

