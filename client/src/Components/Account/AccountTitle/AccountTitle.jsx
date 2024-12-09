import React from "react";

export default function AccountTitle({ classValue, nickName = "코딩몬스터", stamp = "0" }) {
  return (
    <div className={classValue}>
      <div>
        <span>{nickName}</span>님
      </div>
      <div>스탬프 {stamp}개</div>
    </div>
  );
}
