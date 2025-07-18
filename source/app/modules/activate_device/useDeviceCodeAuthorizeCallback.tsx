// app/modules/activate_device/useDeviceCodeAuthorizeCallback.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var7 = native3;
    var3 = native6;
    var6 = native7;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
    var1 = function _createTwoWayLink() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot3;
        var3 = function* (arg1, arg2, arg3) {
            var1 = function* anon_0_(arg1, arg2, arg3) {
                _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                    if(var3) { _fun0001_ip = 721; continue _fun0001 }
 10:
                    var19 = arg2;
                    var2 = arg3;
                    var6 = undefined;
                    var8 = undefined;
                    var12 = undefined;
                    var4 = undefined;
                    var10 = undefined;
                    var18 = undefined;
                    var7 = undefined;
                    var15 = undefined;
                    var9 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var13 = 2;
                    var5 = var5[var13];
                    var14 = var9.bind(var6)(var5);
                    var9 = var14.clientIdToActivateDevicePlatform;
                    var5 = arg1;
                    var5 = var9.bind(var14)(var5);
                    var8 = var5;
                    var9 = null;
                    if(!(var9 != var5)) { _fun0001_ip = 651; continue _fun0001 }
 81:
                    var12 = null;
 83: // try_start_0
                    var14 = _closure1_slot1;
                    var24 = _closure1_slot2;
                    var17 = 3;
                    var5 = var24[var17];
                    var21 = var14.bind(var6)(var5);
                    var20 = var21.authorize;
                    var14 = var8;
                    var5 = {};
                    var23 = _closure1_slot0;
                    var22 = 4;
                    var22 = var24[var22];
                    var22 = var23.bind(var6)(var22);
                    var22 = var22.TwoWayLinkType;
                    var22 = var22.DEVICE_CODE;
                    var5['twoWayLinkType'] = var22;
                    var22 = var2;
                    var5['userCode'] = var22;
                    var5 = var20.bind(var21)(var14, var5);
                    SaveGenerator(address=165);
 163:
                    return var5;
 165:
                    ResumeGenerator(result_out_reg=4, return_bool_out_reg=13);
                    if(var14) { _fun0001_ip = 530; continue _fun0001 }
 174:
                    var14 = var5.body;
                    var12 = var14.url;
 184: // try_end0
                    var18 = null;
 186: // try_start_1
                    var20 = _closure1_slot1;
                    var21 = _closure1_slot2;
                    var14 = 5;
                    var22 = var21[var14];
                    var24 = var20.bind(var6)(var22);
                    var23 = var12;
                    var22 = var9 != var23;
                    var12 = 'No URL in authorize response';
                    var12 = var24.bind(var6)(var22, var12);
                    var22 = _closure1_slot0;
                    var12 = 6;
                    var12 = var21[var12];
                    var22 = var22.bind(var6)(var12);
                    var12 = var22.getCallbackParamsFromURL;
                    var12 = var12.bind(var22)(var23);
                    var12 = var12.state;
                    var14 = var21[var14];
                    var21 = var20.bind(var6)(var14);
                    var20 = var9 != var12;
                    var14 = 'Authorize URL state query parameter must be present';
                    var14 = var21.bind(var6)(var20, var14);
                    var18 = var12;
 285: // try_start_2 // try_end1
                    var14 = _closure1_slot1;
                    var12 = _closure1_slot2;
                    var12 = var12[var17];
                    var17 = var14.bind(var6)(var12);
                    var14 = var17.callback;
                    var12 = var8;
                    var8 = {};
                    var8['code'] = var19;
                    var8['state'] = var18;
                    var8 = var14.bind(var17)(var12, var8);
                    SaveGenerator(address=331);
 329:
                    return var8;
 331:
                    ResumeGenerator(result_out_reg=7, return_bool_out_reg=11);
                    if(var12) { _fun0001_ip = 340; continue _fun0001 }
 337: // try_end2
                    return var6;
 340:
                    return var8;
 343: // catch_target2
                    CatchBlockStart(arg_register=7);
                    var16 = var8;
                    var14 = _closure1_slot6;
                    var12 = var2;
                    var17 = var9 == var8;
                    var8 = undefined;
                    if(var17) { _fun0001_ip = 386; continue _fun0001 }
 364:
                    var16 = var16.body;
                    var15 = var16;
                    var16 = var9 == var16;
                    var8 = undefined;
                    if(var16) { _fun0001_ip = 386; continue _fun0001 }
 381:
                    var8 = var15.code;
 386:
                    var7 = var8;
                    var15 = var9 != var8;
                    var8 = 0;
                    if(!var15) { _fun0001_ip = 401; continue _fun0001 }
 398:
                    var8 = var7;
 401:
                    var7 = 'callback';
                    var7 = var14.bind(var6)(var12, var8, var7);
                    SaveGenerator(address=416);
 414:
                    return var7;
 416:
                    ResumeGenerator(result_out_reg=6, return_bool_out_reg=7);
                    if(var8) { _fun0001_ip = 458; continue _fun0001 }
 422:
                    var8 = global;
                    var14 = var8.Error;
                    var8 = var14.prototype;
                    var12 = Object.create(var8, {constructor: {value: var14}});
                    var27 = 'error during two way callback';
                    var28 = var12;
                    var8 = new var28[var14](var27, var26);
                    var8 = var8 instanceof Object ? var8 : var12;
                    throw var8;
 458:
                    return var7;
 461: // catch_target1
                    CatchBlockStart(arg_register=6);
                    var12 = _closure1_slot6;
                    var8 = var2;
                    var7 = 'authorize';
                    var7 = var12.bind(var6)(var8, var13, var7);
                    SaveGenerator(address=485);
 483:
                    return var7;
 485:
                    ResumeGenerator(result_out_reg=6, return_bool_out_reg=7);
                    if(var8) { _fun0001_ip = 527; continue _fun0001 }
 491:
                    var8 = global;
                    var13 = var8.Error;
                    var8 = var13.prototype;
                    var12 = Object.create(var8, {constructor: {value: var13}});
                    var27 = 'error parsing callback params';
                    var28 = var12;
                    var8 = new var28[var13](var27, var26);
                    var8 = var8 instanceof Object ? var8 : var12;
                    throw var8;
 527:
                    return var7;
 530:
                    return var5;
 533: // catch_target0
                    CatchBlockStart(arg_register=4);
                    var11 = var5;
                    var8 = _closure1_slot6;
                    var7 = var2;
                    var12 = var9 == var5;
                    var5 = undefined;
                    if(var12) { _fun0001_ip = 576; continue _fun0001 }
 554:
                    var11 = var11.body;
                    var10 = var11;
                    var11 = var9 == var11;
                    var5 = undefined;
                    if(var11) { _fun0001_ip = 576; continue _fun0001 }
 571:
                    var5 = var10.code;
 576:
                    var4 = var5;
                    var9 = var9 != var5;
                    var5 = 0;
                    if(!var9) { _fun0001_ip = 591; continue _fun0001 }
 588:
                    var5 = var4;
 591:
                    var4 = 'authorize';
                    var4 = var8.bind(var6)(var7, var5, var4);
                    SaveGenerator(address=606);
 604:
                    return var4;
 606:
                    ResumeGenerator(result_out_reg=3, return_bool_out_reg=4);
                    if(var5) { _fun0001_ip = 648; continue _fun0001 }
 612:
                    var5 = global;
                    var8 = var5.Error;
                    var5 = var8.prototype;
                    var7 = Object.create(var5, {constructor: {value: var8}});
                    var27 = 'error during two way authorize';
                    var28 = var7;
                    var5 = new var28[var8](var27, var26);
                    var5 = var5 instanceof Object ? var5 : var7;
                    throw var5;
 648:
                    return var4;
 651:
                    var5 = _closure1_slot6;
                    var4 = var2;
                    var3 = 1;
                    var2 = 'authorize';
                    var2 = var5.bind(var6)(var4, var3, var2);
                    SaveGenerator(address=676);
 674:
                    return var2;
 676:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(var3) { _fun0001_ip = 718; continue _fun0001 }
 682:
                    var3 = global;
                    var5 = var3.Error;
                    var3 = var5.prototype;
                    var4 = Object.create(var3, {constructor: {value: var5}});
                    var27 = 'Unsupported client_id for two way link';
                    var28 = var4;
                    var3 = new var28[var5](var27, var26);
                    var3 = var3 instanceof Object ? var3 : var4;
                    throw var3;
 718:
                    return var2;
 721:
                    return var1;
                }
            };
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot5 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot5 = var1;
    var1 = function silentlyFinishTwoWayLinkError() {
        var1 = undefined;
        var4 = _closure1_slot7;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot6 = var1;
    var1 = function _silentlyFinishTwoWayLinkError() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot3;
        var3 = function* (arg1, arg2, arg3) {
            var1 = function* anon_0_(arg1, arg2, arg3) {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=4);
                    if(var5) { _fun0002_ip = 76; continue _fun0002 }
 7:
                    var4 = arg1;
                    var3 = arg2;
                    var2 = arg3;
 16: // try_start_0
                    var7 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var5 = 7;
                    var6 = var6[var5];
                    var5 = undefined;
                    var6 = var7.bind(var5)(var6);
                    var5 = var6.finishUserCodeTwoWayLinkError;
                    var2 = var5.bind(var6)(var4, var3, var2);
                    SaveGenerator(address=58);
 56:
                    return var2;
 58:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(var3) { _fun0002_ip = 66; continue _fun0002 }
 64: // try_end0
                    _fun0002_ip = 71; continue _fun0002;
 66:
                    return var2;
 69: // catch_target0
                    CatchBlockStart(arg_register=1);
 71:
                    var2 = undefined;
                    return var2;
 76:
                    return var1;
                }
            };
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot7 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot7 = var1;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var4);
    var1 = 0;
    var4 = var6[var1];
    var1 = undefined;
    var4 = var7.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 1;
    var7 = var6[var4];
    var4 = native4;
    var4 = var4.bind(var1)(var7);
    var _closure1_slot4 = var4;
    var4 = 8;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/activate_device/useDeviceCodeAuthorizeCallback.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function useDeviceCodeAuthorizeCallback(arg1, arg2, arg3) {
        var7 = arg1;
        var6 = arg2;
        var5 = arg3;
        var _closure2_slot0 = var7;
        var _closure2_slot1 = var6;
        var _closure2_slot2 = var5;
        var4 = _closure1_slot4;
        var3 = var4.useCallback;
        var2 = function() {
            var4 = _closure1_slot3;
            var3 = undefined;
            var2 = function* (arg1, arg2) {
                var1 = function* anon_0_(arg1, arg2) {
                    _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                        if(var3) { _fun0003_ip = 318; continue _fun0003 }
 10:
                        var2 = arg1;
                        var3 = arg2;
                        if(var3) { _fun0003_ip = 106; continue _fun0003 }
 19: // try_start_0
                        var5 = _closure1_slot0;
                        var4 = _closure1_slot2;
                        var3 = 7;
                        var4 = var4[var3];
                        var3 = undefined;
                        var6 = var5.bind(var3)(var4);
                        var5 = var6.finishUserCode;
                        var3 = var2;
                        var4 = var3.userCode;
                        var3 = 'denied';
                        var3 = var5.bind(var6)(var4, var3);
                        SaveGenerator(address=75);
 73:
                        return var3;
 75:
                        ResumeGenerator(result_out_reg=2, return_bool_out_reg=3);
                        if(var4) { _fun0003_ip = 83; continue _fun0003 }
 81: // try_end0
                        _fun0003_ip = 88; continue _fun0003;
 83:
                        return var3;
 86: // catch_target0
                        CatchBlockStart(arg_register=2);
 88:
                        var4 = _closure2_slot0;
                        var3 = undefined;
                        var3 = var4.bind(var3)();
                        _fun0003_ip = 313; continue _fun0003;
 106:
                        var3 = var2;
                        var4 = var3.twoWayLinkCode;
                        var3 = null;
                        if(!(var3 != var4)) { _fun0003_ip = 214; continue _fun0003 }
 121: // try_start_1
                        var3 = var2;
                        var7 = var3.clientId;
                        var5 = var3.twoWayLinkCode;
                        var4 = var3.userCode;
                        var3 = function createTwoWayLink() {
                            var1 = undefined;
                            var4 = _closure1_slot5;
                            var3 = var4.apply;
                            var1 = arguments;
                            var2 = var1;
                            var1 = this;
                            var1 = var3.bind(var4)(var1, var2);
                            return var1;
                        };
                        var6 = undefined;
                        var3 = var3.bind(var6)(var7, var5, var4);
                        SaveGenerator(address=164);
 162:
                        return var3;
 164:
                        ResumeGenerator(result_out_reg=2, return_bool_out_reg=3);
                        if(var4) { _fun0003_ip = 190; continue _fun0003 }
 170:
                        var5 = _closure2_slot2;
                        var4 = var2;
                        var4 = var5.bind(var6)(var4);
 185: // try_end1
                        _fun0003_ip = 313; continue _fun0003;
 190:
                        return var3;
 193: // catch_target1
                        CatchBlockStart(arg_register=2);
                        var5 = _closure2_slot1;
                        var4 = var2;
                        var3 = undefined;
                        var3 = var5.bind(var3)(var4);
                        _fun0003_ip = 313; continue _fun0003;
 214: // try_start_2
                        var4 = _closure1_slot0;
                        var5 = _closure1_slot2;
                        var3 = 7;
                        var3 = var5[var3];
                        var6 = undefined;
                        var7 = var4.bind(var6)(var3);
                        var5 = var7.finishUserCode;
                        var3 = var2;
                        var4 = var3.userCode;
                        var3 = 'granted';
                        var3 = var5.bind(var7)(var4, var3);
                        SaveGenerator(address=268);
 266:
                        return var3;
 268:
                        ResumeGenerator(result_out_reg=2, return_bool_out_reg=3);
                        if(var4) { _fun0003_ip = 291; continue _fun0003 }
 274:
                        var5 = _closure2_slot2;
                        var4 = var2;
                        var4 = var5.bind(var6)(var4);
 289: // try_end2
                        _fun0003_ip = 313; continue _fun0003;
 291:
                        return var3;
 294: // catch_target2
                        CatchBlockStart(arg_register=2);
                        var4 = _closure2_slot1;
                        var3 = var2;
                        var2 = undefined;
                        var2 = var4.bind(var2)(var3);
 313:
                        var2 = undefined;
                        return var2;
 318:
                        return var1;
                    }
                };
                return var1;
            };
            var2 = var4.bind(var3)(var2);
            var _closure3_slot0 = var2;
            var1 = function() {
                var1 = undefined;
                var4 = _closure3_slot0;
                var3 = var4.apply;
                var1 = arguments;
                var2 = var1;
                var1 = this;
                var1 = var3.bind(var4)(var1, var2);
                return var1;
            };
            return var1;
        };
        var1 = undefined;
        var2 = var2.bind(var1)();
        var1 = new Array(3);
        var1[0] = var7;
        var1[1] = var6;
        var1[2] = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var3['useDeviceCodeAuthorizeCallback'] = var2;
    return var1;
})();