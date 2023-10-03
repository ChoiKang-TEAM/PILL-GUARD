package com.choikang.healguard.user.dto;

import com.choikang.healguard.common.consts.ResultCode;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class CreateUserRespDto {
    private int code = ResultCode.SUCCESS.value();
}
