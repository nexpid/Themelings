// app/modules/activate_device/useDeviceCodeAuthorizeCallback.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
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
case 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                    if(var3) { _fun0001_ip = 2; continue _fun0001 }
case 3:
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
                    if(!(var9 != var5)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
                    var12 = null;
case 6: // try_start_0
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
case 7:
                    return var5;
case 8:
                    ResumeGenerator(result_out_reg=4, return_bool_out_reg=13);
                    if(var14) { _fun0001_ip = 9; continue _fun0001 }
case 10:
                    var14 = var5.body;
                    var12 = var14.url;
case 11: // try_end0
                    var18 = null;
case 12: // try_start_1
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
case 13: // try_start_2 // try_end1
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
case 14:
                    return var8;
case 15:
                    ResumeGenerator(result_out_reg=7, return_bool_out_reg=11);
                    if(var12) { _fun0001_ip = 16; continue _fun0001 }
case 17: // try_end2
                    return var6;
case 16:
                    return var8;
case 18: // catch_target2
                    CatchBlockStart(arg_register=7);
                    var16 = var8;
                    var14 = _closure1_slot6;
                    var12 = var2;
                    var17 = var9 == var8;
                    var8 = undefined;
                    if(var17) { _fun0001_ip = 19; continue _fun0001 }
case 20:
                    var16 = var16.body;
                    var15 = var16;
                    var16 = var9 == var16;
                    var8 = undefined;
                    if(var16) { _fun0001_ip = 19; continue _fun0001 }
case 21:
                    var8 = var15.code;
case 19:
                    var7 = var8;
                    var15 = var9 != var8;
                    var8 = 0;
                    if(!var15) { _fun0001_ip = 22; continue _fun0001 }
case 23:
                    var8 = var7;
case 22:
                    var7 = 'callback';
                    var7 = var14.bind(var6)(var12, var8, var7);
                    SaveGenerator(address=416);
case 24:
                    return var7;
case 25:
                    ResumeGenerator(result_out_reg=6, return_bool_out_reg=7);
                    if(var8) { _fun0001_ip = 26; continue _fun0001 }
case 27:
                    var8 = global;
                    var14 = var8.Error;
                    var8 = var14.prototype;
                    var12 = Object.create(var8, {constructor: {value: var14}});
                    var27 = 'error during two way callback';
                    var28 = var12;
                    var8 = new var28[var14](var27, var26);
                    var8 = var8 instanceof Object ? var8 : var12;
                    throw var8;
case 26:
                    return var7;
case 28: // catch_target1
                    CatchBlockStart(arg_register=6);
                    var12 = _closure1_slot6;
                    var8 = var2;
                    var7 = 'authorize';
                    var7 = var12.bind(var6)(var8, var13, var7);
                    SaveGenerator(address=485);
case 29:
                    return var7;
case 30:
                    ResumeGenerator(result_out_reg=6, return_bool_out_reg=7);
                    if(var8) { _fun0001_ip = 31; continue _fun0001 }
case 32:
                    var8 = global;
                    var13 = var8.Error;
                    var8 = var13.prototype;
                    var12 = Object.create(var8, {constructor: {value: var13}});
                    var27 = 'error parsing callback params';
                    var28 = var12;
                    var8 = new var28[var13](var27, var26);
                    var8 = var8 instanceof Object ? var8 : var12;
                    throw var8;
case 31:
                    return var7;
case 9:
                    return var5;
case 33: // catch_target0
                    CatchBlockStart(arg_register=4);
                    var11 = var5;
                    var8 = _closure1_slot6;
                    var7 = var2;
                    var12 = var9 == var5;
                    var5 = undefined;
                    if(var12) { _fun0001_ip = 34; continue _fun0001 }
case 35:
                    var11 = var11.body;
                    var10 = var11;
                    var11 = var9 == var11;
                    var5 = undefined;
                    if(var11) { _fun0001_ip = 34; continue _fun0001 }
case 36:
                    var5 = var10.code;
case 34:
                    var4 = var5;
                    var9 = var9 != var5;
                    var5 = 0;
                    if(!var9) { _fun0001_ip = 37; continue _fun0001 }
case 38:
                    var5 = var4;
case 37:
                    var4 = 'authorize';
                    var4 = var8.bind(var6)(var7, var5, var4);
                    SaveGenerator(address=606);
case 39:
                    return var4;
case 40:
                    ResumeGenerator(result_out_reg=3, return_bool_out_reg=4);
                    if(var5) { _fun0001_ip = 41; continue _fun0001 }
case 42:
                    var5 = global;
                    var8 = var5.Error;
                    var5 = var8.prototype;
                    var7 = Object.create(var5, {constructor: {value: var8}});
                    var27 = 'error during two way authorize';
                    var28 = var7;
                    var5 = new var28[var8](var27, var26);
                    var5 = var5 instanceof Object ? var5 : var7;
                    throw var5;
case 41:
                    return var4;
case 4:
                    var5 = _closure1_slot6;
                    var4 = var2;
                    var3 = 1;
                    var2 = 'authorize';
                    var2 = var5.bind(var6)(var4, var3, var2);
                    SaveGenerator(address=676);
case 43:
                    return var2;
case 44:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(var3) { _fun0001_ip = 45; continue _fun0001 }
case 46:
                    var3 = global;
                    var5 = var3.Error;
                    var3 = var5.prototype;
                    var4 = Object.create(var3, {constructor: {value: var5}});
                    var27 = 'Unsupported client_id for two way link';
                    var28 = var4;
                    var3 = new var28[var5](var27, var26);
                    var3 = var3 instanceof Object ? var3 : var4;
                    throw var3;
case 45:
                    return var2;
case 2:
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
case 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=4);
                    if(var5) { _fun0002_ip = 47; continue _fun0002 }
case 48:
                    var4 = arg1;
                    var3 = arg2;
                    var2 = arg3;
case 49: // try_start_0
                    var7 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var5 = 7;
                    var6 = var6[var5];
                    var5 = undefined;
                    var6 = var7.bind(var5)(var6);
                    var5 = var6.finishUserCodeTwoWayLinkError;
                    var2 = var5.bind(var6)(var4, var3, var2);
                    SaveGenerator(address=58);
case 50:
                    return var2;
case 51:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(var3) { _fun0002_ip = 52; continue _fun0002 }
case 53: // try_end0
                    _fun0002_ip = 54; continue _fun0002;
case 52:
                    return var2;
case 55: // catch_target0
                    CatchBlockStart(arg_register=1);
case 54:
                    var2 = undefined;
                    return var2;
case 47:
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
    var4 = metroImportAll;
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
case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                        if(var3) { _fun0003_ip = 56; continue _fun0003 }
case 3:
                        var2 = arg1;
                        var3 = arg2;
                        if(var3) { _fun0003_ip = 57; continue _fun0003 }
case 58: // try_start_0
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
case 59:
                        return var3;
case 60:
                        ResumeGenerator(result_out_reg=2, return_bool_out_reg=3);
                        if(var4) { _fun0003_ip = 6; continue _fun0003 }
case 5: // try_end0
                        _fun0003_ip = 61; continue _fun0003;
case 6:
                        return var3;
case 62: // catch_target0
                        CatchBlockStart(arg_register=2);
case 61:
                        var4 = _closure2_slot0;
                        var3 = undefined;
                        var3 = var4.bind(var3)();
                        _fun0003_ip = 63; continue _fun0003;
case 57:
                        var3 = var2;
                        var4 = var3.twoWayLinkCode;
                        var3 = null;
                        if(!(var3 != var4)) { _fun0003_ip = 64; continue _fun0003 }
case 65: // try_start_1
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
case 66:
                        return var3;
case 67:
                        ResumeGenerator(result_out_reg=2, return_bool_out_reg=3);
                        if(var4) { _fun0003_ip = 68; continue _fun0003 }
case 69:
                        var5 = _closure2_slot2;
                        var4 = var2;
                        var4 = var5.bind(var6)(var4);
case 70: // try_end1
                        _fun0003_ip = 63; continue _fun0003;
case 68:
                        return var3;
case 71: // catch_target1
                        CatchBlockStart(arg_register=2);
                        var5 = _closure2_slot1;
                        var4 = var2;
                        var3 = undefined;
                        var3 = var5.bind(var3)(var4);
                        _fun0003_ip = 63; continue _fun0003;
case 64: // try_start_2
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
case 72:
                        return var3;
case 73:
                        ResumeGenerator(result_out_reg=2, return_bool_out_reg=3);
                        if(var4) { _fun0003_ip = 74; continue _fun0003 }
case 75:
                        var5 = _closure2_slot2;
                        var4 = var2;
                        var4 = var5.bind(var6)(var4);
case 76: // try_end2
                        _fun0003_ip = 63; continue _fun0003;
case 74:
                        return var3;
case 77: // catch_target2
                        CatchBlockStart(arg_register=2);
                        var4 = _closure2_slot1;
                        var3 = var2;
                        var2 = undefined;
                        var2 = var4.bind(var2)(var3);
case 63:
                        var2 = undefined;
                        return var2;
case 56:
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