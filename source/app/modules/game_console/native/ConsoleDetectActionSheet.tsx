// app/modules/game_console/native/ConsoleDetectActionSheet.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var13 = native3;
    var3 = native6;
    var6 = native7;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var13;
    var _closure1_slot2 = var6;
    var1 = function _detectLocalConsoles() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot4;
        var3 = function* (arg1, arg2, arg3) {
            var1 = function* anon_0_(arg1, arg2, arg3) {
                _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0001_ip = 356; continue _fun0001 }
 12:
                    var6 = new Array(0);
                    var7 = false;
                    var _closure4_slot0 = var7;
                    var4 = arg1;
                    var2 = undefined;
                    var3 = function() {
                        var1 = function() {
                            var1 = true;
                            _closure4_slot0 = var1;
                            var1 = undefined;
                            return var1;
                        };
                        return var1;
                    };
                    var3 = var4.bind(var2)(var3);
                    var3 = _closure4_slot0;
                    var8 = global;
                    if(var3) { _fun0001_ip = 353; continue _fun0001 }
 51:
                    var5 = var8.Promise;
                    var3 = var5.prototype;
                    var4 = Object.create(var3, {constructor: {value: var5}});
                    var14 = function(arg1, arg2) {
                        var1 = arg1;
                        var _closure5_slot0 = var1;
                        var1 = arg2;
                        var _closure5_slot1 = var1;
                        var4 = _closure1_slot1;
                        var3 = _closure1_slot2;
                        var1 = 10;
                        var3 = var3[var1];
                        var1 = undefined;
                        var3 = var4.bind(var1)(var3);
                        var4 = var3.prototype;
                        var4 = Object.create(var4, {constructor: {value: var3}});
                        var9 = var4;
                        var3 = new var9[var3](var8);
                        var4 = var3 instanceof Object ? var3 : var4;
                        var _closure5_slot2 = var4;
                        var3 = global;
                        var6 = var3.setTimeout;
                        var5 = function() {
                            var3 = _closure5_slot2;
                            var2 = var3.stop;
                            var2 = var2.bind(var3)();
                            var3 = _closure5_slot0;
                            var1 = undefined;
                            var2 = false;
                            var2 = var3.bind(var1)(var2);
                            return var1;
                        };
                        var3 = 1000;
                        var3 = var6.bind(var1)(var5, var3);
                        var _closure5_slot3 = var3;
                        var6 = var4.on;
                        var5 = 'resolved';
                        var3 = function(arg1) {
                            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                                var2 = arg1;
                                var1 = null;
                                var1 = var1 != var2;
                                if(!var1) { _fun0002_ip = 42; continue _fun0002 }
 12:
                                var3 = var2.fullName;
                                var2 = var3.toLowerCase;
                                var4 = var2.bind(var3)();
                                var3 = var4.includes;
                                var2 = 'xbox';
                                var1 = var3.bind(var4)(var2);
 42:
                                if(!var1) { _fun0002_ip = 92; continue _fun0002 }
 45:
                                var3 = _closure5_slot2;
                                var2 = var3.stop;
                                var2 = var2.bind(var3)();
                                var2 = global;
                                var4 = var2.clearTimeout;
                                var2 = _closure5_slot3;
                                var3 = undefined;
                                var2 = var4.bind(var3)(var2);
                                var2 = _closure5_slot0;
                                var1 = true;
                                var1 = var2.bind(var3)(var1);
 92:
                                var1 = undefined;
                                return var1;
                            }
                        };
                        var3 = var6.bind(var4)(var5, var3);
                        var5 = var4.on;
                        var3 = 'error';
                        var2 = function(arg1) {
                            var1 = global;
                            var4 = var1.clearTimeout;
                            var3 = _closure5_slot3;
                            var1 = undefined;
                            var3 = var4.bind(var1)(var3);
                            var3 = _closure5_slot1;
                            var2 = arg1;
                            var2 = var3.bind(var1)(var2);
                            return var1;
                        };
                        var2 = var5.bind(var4)(var3, var2);
                        var3 = var4.scan;
                        var2 = 'xboxda';
                        var2 = var3.bind(var4)(var2);
                        return var1;
                    };
                    var15 = var4;
                    var3 = new var15[var5](var14, var13);
                    var3 = var3 instanceof Object ? var3 : var4;
                    SaveGenerator(address=88);
 86:
                    return var3;
 88:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=3);
                    if(var4) { _fun0001_ip = 350; continue _fun0001 }
 97:
                    var10 = var8.Promise;
                    var4 = var10.prototype;
                    var5 = Object.create(var4, {constructor: {value: var10}});
                    var14 = function(arg1, arg2) {
                        var1 = arg1;
                        var _closure5_slot0 = var1;
                        var1 = arg2;
                        var _closure5_slot1 = var1;
                        var4 = _closure1_slot1;
                        var3 = _closure1_slot2;
                        var1 = 10;
                        var3 = var3[var1];
                        var1 = undefined;
                        var3 = var4.bind(var1)(var3);
                        var4 = var3.prototype;
                        var4 = Object.create(var4, {constructor: {value: var3}});
                        var9 = var4;
                        var3 = new var9[var3](var8);
                        var4 = var3 instanceof Object ? var3 : var4;
                        var _closure5_slot2 = var4;
                        var3 = global;
                        var6 = var3.setTimeout;
                        var5 = function() {
                            var3 = _closure5_slot2;
                            var2 = var3.stop;
                            var2 = var2.bind(var3)();
                            var3 = _closure5_slot0;
                            var1 = undefined;
                            var2 = false;
                            var2 = var3.bind(var1)(var2);
                            return var1;
                        };
                        var3 = 1000;
                        var3 = var6.bind(var1)(var5, var3);
                        var _closure5_slot3 = var3;
                        var6 = var4.on;
                        var5 = 'resolved';
                        var3 = function(arg1) {
                            _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                                var2 = arg1;
                                var1 = null;
                                var1 = var1 != var2;
                                if(!var1) { _fun0003_ip = 44; continue _fun0003 }
 12:
                                var3 = var2.fullName;
                                var2 = var3.toLowerCase;
                                var4 = var2.bind(var3)();
                                var3 = var4.includes;
                                var2 = 'ps5';
                                var1 = var3.bind(var4)(var2);
 44:
                                if(!var1) { _fun0003_ip = 94; continue _fun0003 }
 47:
                                var3 = _closure5_slot2;
                                var2 = var3.stop;
                                var2 = var2.bind(var3)();
                                var2 = global;
                                var4 = var2.clearTimeout;
                                var2 = _closure5_slot3;
                                var3 = undefined;
                                var2 = var4.bind(var3)(var2);
                                var2 = _closure5_slot0;
                                var1 = true;
                                var1 = var2.bind(var3)(var1);
 94:
                                var1 = undefined;
                                return var1;
                            }
                        };
                        var3 = var6.bind(var4)(var5, var3);
                        var5 = var4.on;
                        var3 = 'error';
                        var2 = function(arg1) {
                            var1 = global;
                            var4 = var1.clearTimeout;
                            var3 = _closure5_slot3;
                            var1 = undefined;
                            var3 = var4.bind(var1)(var3);
                            var3 = _closure5_slot1;
                            var2 = arg1;
                            var2 = var3.bind(var1)(var2);
                            return var1;
                        };
                        var2 = var5.bind(var4)(var3, var2);
                        var3 = var4.scan;
                        var2 = 'spotify-connect';
                        var2 = var3.bind(var4)(var2);
                        return var1;
                    };
                    var15 = var5;
                    var4 = new var15[var10](var14, var13);
                    var4 = var4 instanceof Object ? var4 : var5;
                    SaveGenerator(address=134);
 132:
                    return var4;
 134:
                    ResumeGenerator(result_out_reg=3, return_bool_out_reg=4);
                    if(var5) { _fun0001_ip = 347; continue _fun0001 }
 143:
                    if(var3) { _fun0001_ip = 161; continue _fun0001 }
 146:
                    if(var4) { _fun0001_ip = 161; continue _fun0001 }
 149:
                    var5 = _closure4_slot0;
                    if(var5) { _fun0001_ip = 353; continue _fun0001 }
 159:
                    _fun0001_ip = 51; continue _fun0001;
 161:
                    if(!var3) { _fun0001_ip = 245; continue _fun0001 }
 164:
                    var9 = _closure1_slot1;
                    var10 = _closure1_slot2;
                    var8 = 11;
                    var8 = var10[var8];
                    var11 = var9.bind(var2)(var8);
                    var10 = var11.track;
                    var8 = _closure1_slot12;
                    var9 = var8.CONSOLE_LAN_DETECTION_CONSOLE_DETECTED;
                    var8 = {};
                    var12 = _closure1_slot9;
                    var12 = var12.XBOX;
                    var8['console_detected'] = var12;
                    var8 = var10.bind(var11)(var9, var8);
                    var8 = var6.push;
                    var5 = _closure1_slot9;
                    var5 = var5.XBOX;
                    var5 = var8.bind(var6)(var5);
 245:
                    if(!var4) { _fun0001_ip = 329; continue _fun0001 }
 248:
                    var9 = _closure1_slot1;
                    var10 = _closure1_slot2;
                    var8 = 11;
                    var8 = var10[var8];
                    var11 = var9.bind(var2)(var8);
                    var10 = var11.track;
                    var8 = _closure1_slot12;
                    var9 = var8.CONSOLE_LAN_DETECTION_CONSOLE_DETECTED;
                    var8 = {};
                    var12 = _closure1_slot9;
                    var12 = var12.PLAYSTATION;
                    var8['console_detected'] = var12;
                    var8 = var10.bind(var11)(var9, var8);
                    var8 = var6.push;
                    var5 = _closure1_slot9;
                    var5 = var5.PLAYSTATION;
                    var5 = var8.bind(var6)(var5);
 329:
                    var5 = arg3;
                    var5 = var5.bind(var2)(var7);
                    var5 = arg2;
                    var5 = var5.bind(var2)(var6);
                    _fun0001_ip = 353; continue _fun0001;
 347:
                    return var4;
 350:
                    return var3;
 353:
                    return var2;
 356:
                    return var1;
                }
            };
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot17 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot17 = var1;
    var1 = function useDetectLocalConsoles() {
        var3 = _closure1_slot5;
        var1 = var3.useState;
        var9 = false;
        var3 = var1.bind(var3)(var9);
        var1 = _closure1_slot3;
        var4 = undefined;
        var12 = 2;
        var1 = var1.bind(var4)(var3, var12);
        var10 = 0;
        var5 = var1[var10];
        var8 = 1;
        var1 = var1[var8];
        var _closure2_slot0 = var1;
        var3 = _closure1_slot5;
        var1 = var3.useState;
        var13 = null;
        var3 = var1.bind(var3)(var13);
        var1 = _closure1_slot3;
        var1 = var1.bind(var4)(var3, var12);
        var3 = var1[var10];
        var1 = var1[var8];
        var _closure2_slot1 = var1;
        var7 = _closure1_slot5;
        var1 = var7.useState;
        var7 = var1.bind(var7)(var9);
        var1 = _closure1_slot3;
        var7 = var1.bind(var4)(var7, var12);
        var1 = var7[var10];
        var _closure2_slot2 = var1;
        var7 = var7[var8];
        var _closure2_slot3 = var7;
        var9 = _closure1_slot5;
        var7 = var9.useState;
        var9 = var7.bind(var9)(var13);
        var7 = _closure1_slot3;
        var7 = var7.bind(var4)(var9, var12);
        var9 = var7[var10];
        var _closure2_slot4 = var9;
        var7 = var7[var8];
        var _closure2_slot5 = var7;
        var11 = _closure1_slot5;
        var7 = var11.useState;
        var11 = var7.bind(var11)(var13);
        var7 = _closure1_slot3;
        var7 = var7.bind(var4)(var11, var12);
        var10 = var7[var10];
        var _closure2_slot6 = var10;
        var7 = var7[var8];
        var _closure2_slot7 = var7;
        var8 = _closure1_slot5;
        var7 = var8.useEffect;
        var6 = new Array(2);
        var6[0] = var9;
        var6[1] = var1;
        var1 = function() {
            _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                var2 = _closure2_slot2;
                if(!var2) { _fun0004_ip = 63; continue _fun0004 }
 10:
                var4 = _closure1_slot1;
                var3 = _closure1_slot2;
                var2 = 12;
                var3 = var3[var2];
                var2 = undefined;
                var4 = var4.bind(var2)(var3);
                var3 = var4.hideActionSheet;
                var3 = var3.bind(var4)();
                var4 = _closure2_slot4;
                var3 = null;
                if(!(var3 != var4)) { _fun0004_ip = 63; continue _fun0004 }
 55:
                var1 = _closure2_slot4;
                var1 = var1.bind(var2)();
 63:
                var1 = undefined;
                return var1;
            }
        };
        var1 = var7.bind(var8)(var1, var6);
        var1 = function() {
            var4 = _closure1_slot4;
            var3 = undefined;
            var2 = function* () {
                var1 = function* anon_0_() {
                    _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                        if(var2) { _fun0005_ip = 153; continue _fun0005 }
 12:
                        var2 = undefined;
                        var _closure5_slot0 = var2;
                        var6 = _closure2_slot0;
                        var5 = true;
                        var5 = var6.bind(var2)(var5);
 32: // try_start_0
                        var6 = _closure2_slot3;
                        var5 = function checkPermissions(arg1) {
                            _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
                                var2 = arg1;
                                var _closure6_slot0 = var2;
                                var5 = _closure1_slot0;
                                var4 = _closure1_slot2;
                                var3 = 9;
                                var4 = var4[var3];
                                var3 = undefined;
                                var5 = var5.bind(var3)(var4);
                                var4 = var5.isIOS;
                                var4 = var4.bind(var5)();
                                if(var4) { _fun0006_ip = 49; continue _fun0006 }
 47:
                                return var3;
 49:
                                var2 = _closure1_slot8;
                                var3 = var2.DCDLocalNetworkDetectionManager;
                                var _closure6_slot1 = var3;
                                var2 = var3.grantOrCheck;
                                var4 = var2.bind(var3)();
                                var3 = var4.then;
                                var2 = function(arg1) {
                                    _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
                                        var1 = arg1;
                                        if(var1) { _fun0007_ip = 22; continue _fun0007 }
 6:
                                        var3 = _closure6_slot0;
                                        var2 = undefined;
                                        var1 = true;
                                        var1 = var3.bind(var2)(var1);
 22:
                                        var1 = undefined;
                                        return var1;
                                    }
                                };
                                var4 = var3.bind(var4)(var2);
                                var3 = var4.catch;
                                var2 = function() {
                                    var3 = _closure6_slot0;
                                    var1 = undefined;
                                    var2 = true;
                                    var2 = var3.bind(var1)(var2);
                                    return var1;
                                };
                                var4 = var3.bind(var4)(var2);
                                var3 = var4.finally;
                                var2 = function() {
                                    var2 = _closure6_slot1;
                                    var1 = var2.cancel;
                                    var1 = var1.bind(var2)();
                                    var1 = undefined;
                                    return var1;
                                };
                                var2 = var3.bind(var4)(var2);
                                var1 = function() {
                                    var2 = _closure6_slot1;
                                    var1 = var2.cancel;
                                    var1 = var1.bind(var2)();
                                    return var1;
                                };
                                return var1;
                            }
                        };
                        var6 = var5.bind(var2)(var6);
                        _closure5_slot0 = var6;
                        var5 = null;
                        if(!(var5 != var6)) { _fun0005_ip = 74; continue _fun0005 }
 58:
                        var6 = _closure2_slot5;
                        var5 = function() {
                            var1 = function() {
                                var2 = _closure5_slot0;
                                var1 = undefined;
                                var1 = var2.bind(var1)();
                                return var1;
                            };
                            return var1;
                        };
                        var5 = var6.bind(var2)(var5);
 74:
                        var6 = _closure2_slot7;
                        var5 = _closure2_slot1;
                        var4 = _closure2_slot0;
                        var3 = function detectLocalConsoles() {
                            var1 = undefined;
                            var4 = _closure1_slot17;
                            var3 = var4.apply;
                            var1 = arguments;
                            var2 = var1;
                            var1 = this;
                            var1 = var3.bind(var4)(var1, var2);
                            return var1;
                        };
                        var3 = var3.bind(var2)(var6, var5, var4);
                        SaveGenerator(address=104);
 102:
                        return var3;
 104:
                        ResumeGenerator(result_out_reg=2, return_bool_out_reg=3);
                        if(var4) { _fun0005_ip = 112; continue _fun0005 }
 110: // try_end0
                        _fun0005_ip = 150; continue _fun0005;
 112:
                        return var3;
 115: // catch_target0
                        CatchBlockStart(arg_register=2);
                        var4 = _closure1_slot1;
                        var5 = _closure1_slot2;
                        var3 = 12;
                        var3 = var5[var3];
                        var4 = var4.bind(var2)(var3);
                        var3 = var4.hideActionSheet;
                        var3 = var3.bind(var4)();
 150:
                        return var2;
 153:
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
        var4 = var1.bind(var4)();
        var1 = new Array(4);
        var1[0] = var5;
        var1[1] = var4;
        var1[2] = var3;
        var2 = function() {
            _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
 0:
                var1 = _closure2_slot4;
                var4 = null;
                if(!(var4 != var1)) { _fun0008_ip = 23; continue _fun0008 }
 13:
                var3 = _closure2_slot4;
                var1 = undefined;
                var1 = var3.bind(var1)();
 23:
                var5 = _closure2_slot0;
                var1 = undefined;
                var3 = false;
                var3 = var5.bind(var1)(var3);
                var3 = _closure2_slot1;
                var3 = var3.bind(var1)(var4);
                var3 = _closure2_slot6;
                if(!(var4 != var3)) { _fun0008_ip = 61; continue _fun0008 }
 53:
                var2 = _closure2_slot6;
                var2 = var2.bind(var1)();
 61:
                return var1;
            }
        };
        var1[3] = var2;
        return var1;
    };
    var _closure1_slot18 = var1;
    var1 = function BottomCancelButton(arg1) {
        var2 = arg1;
        var5 = var2.cancelCallback;
        var _closure2_slot0 = var5;
        var4 = _closure1_slot5;
        var3 = var4.useCallback;
        var2 = new Array(1);
        var2[0] = var5;
        var1 = function() {
            var3 = _closure1_slot1;
            var2 = _closure1_slot2;
            var1 = 12;
            var2 = var2[var1];
            var1 = undefined;
            var3 = var3.bind(var1)(var2);
            var2 = var3.hideActionSheet;
            var2 = var2.bind(var3)();
            var2 = _closure2_slot0;
            var2 = var2.bind(var1)();
            return var1;
        };
        var5 = var3.bind(var4)(var1, var2);
        var4 = _closure1_slot13;
        var8 = _closure1_slot1;
        var10 = _closure1_slot2;
        var7 = 13;
        var1 = var10[var7];
        var3 = undefined;
        var2 = var8.bind(var3)(var1);
        var1 = {};
        var7 = var10[var7];
        var7 = var8.bind(var3)(var7);
        var7 = var7.Colors;
        var7 = var7.TRANSPARENT;
        var1['color'] = var7;
        var9 = _closure1_slot0;
        var6 = 14;
        var7 = var10[var6];
        var7 = var9.bind(var3)(var7);
        var8 = var7.intl;
        var7 = var8.string;
        var6 = var10[var6];
        var6 = var9.bind(var3)(var6);
        var6 = var6.t;
        var6 = var6.ETE/oK;
        var6 = var7.bind(var8)(var6);
        var1['text'] = var6;
        var1['onPress'] = var5;
        var1 = var4.bind(var3)(var2, var1);
        return var1;
    };
    var _closure1_slot19 = var1;
    var1 = function ConsoleDetectSearching() {
        var1 = _closure1_slot16;
        var4 = undefined;
        var10 = var1.bind(var4)();
        var3 = _closure1_slot15;
        var2 = _closure1_slot14;
        var1 = {};
        var8 = _closure1_slot13;
        var6 = _closure1_slot7;
        var5 = {};
        var11 = _closure1_slot1;
        var13 = _closure1_slot2;
        var9 = 15;
        var9 = var13[var9];
        var9 = var11.bind(var4)(var9);
        var5['source'] = var9;
        var6 = var8.bind(var4)(var6, var5);
        var5 = new Array(3);
        var5[0] = var6;
        var14 = _closure1_slot13;
        var12 = _closure1_slot0;
        var6 = 16;
        var8 = var13[var6];
        var8 = var12.bind(var4)(var8);
        var11 = var8.Text;
        var8 = {'variant': 'heading-lg/extrabold', 'color': 'header-primary'};
        var9 = var10.titleText;
        var8['style'] = var9;
        var9 = 14;
        var15 = var13[var9];
        var15 = var12.bind(var4)(var15);
        var17 = var15.intl;
        var16 = var17.string;
        var15 = var13[var9];
        var15 = var12.bind(var4)(var15);
        var15 = var15.t;
        var15 = var15.QywP7u;
        var15 = var16.bind(var17)(var15);
        var8['children'] = var15;
        var8 = var14.bind(var4)(var11, var8);
        var5[1] = var8;
        var8 = _closure1_slot13;
        var6 = var13[var6];
        var6 = var12.bind(var4)(var6);
        var7 = var6.Text;
        var6 = {'variant': 'text-md/normal', 'color': 'header-secondary'};
        var10 = var10.descriptionText;
        var6['style'] = var10;
        var10 = var13[var9];
        var10 = var12.bind(var4)(var10);
        var11 = var10.intl;
        var10 = var11.string;
        var9 = var13[var9];
        var9 = var12.bind(var4)(var9);
        var9 = var9.t;
        var9 = var9.egQIYG;
        var9 = var10.bind(var11)(var9);
        var6['children'] = var9;
        var6 = var8.bind(var4)(var7, var6);
        var5[2] = var6;
        var1['children'] = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var _closure1_slot20 = var1;
    var1 = function DetectedConsoleRow(arg1) {
        _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
 0:
            var1 = arg1;
            var2 = var1.platformType;
            var _closure2_slot0 = var2;
            var17 = var1.darkPNG;
            var16 = var1.lightPNG;
            var10 = var1.label;
            var20 = var1.theme;
            var1 = _closure1_slot16;
            var4 = undefined;
            var11 = var1.bind(var4)();
            var3 = _closure1_slot13;
            var19 = _closure1_slot0;
            var21 = _closure1_slot2;
            var9 = 17;
            var1 = var21[var9];
            var1 = var19.bind(var4)(var1);
            var2 = var1.FormRow;
            var1 = {};
            var14 = _closure1_slot13;
            var7 = _closure1_slot1;
            var15 = 18;
            var6 = var21[var15];
            var13 = var7.bind(var4)(var6);
            var12 = {};
            var6 = 19;
            var6 = var21[var6];
            var7 = var19.bind(var4)(var6);
            var6 = var7.makeSource;
            var18 = 20;
            var18 = var21[var18];
            var19 = var19.bind(var4)(var18);
            var18 = var19.isThemeDark;
            var18 = var18.bind(var19)(var20);
            if(!var18) { _fun0009_ip = 152; continue _fun0009 }
 149:
            var16 = var17;
 152:
            var6 = var6.bind(var7)(var16);
            var12['source'] = var6;
            var7 = _closure1_slot0;
            var6 = _closure1_slot2;
            var15 = var6[var15];
            var15 = var7.bind(var4)(var15);
            var15 = var15.IconSizes;
            var15 = var15.LARGE;
            var12['size'] = var15;
            var15 = true;
            var12['disableColor'] = var15;
            var12 = var14.bind(var4)(var13, var12);
            var1['leading'] = var12;
            var11 = var11.formRow;
            var1['style'] = var11;
            var1['label'] = var10;
            var8 = _closure1_slot13;
            var6 = var6[var9];
            var6 = var7.bind(var4)(var6);
            var7 = var6.FormArrow;
            var6 = {};
            var6 = var8.bind(var4)(var7, var6);
            var1['trailing'] = var6;
            var5 = function onPress() {
                var2 = _closure1_slot1;
                var3 = _closure1_slot2;
                var1 = 21;
                var1 = var3[var1];
                var3 = undefined;
                var2 = var2.bind(var3)(var1);
                var1 = {};
                var5 = _closure2_slot0;
                var1['platformType'] = var5;
                var4 = _closure1_slot11;
                var4 = var4.CONSOLE_LAN_DETECTION_ACTION_SHEET;
                var1['location'] = var4;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var1['onPress'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot21 = var1;
    var1 = function ConsoleDetectFoundDevices(arg1) {
        var1 = arg1;
        var8 = var1.consolesDetected;
        var15 = var1.consolesFound;
        var1 = _closure1_slot16;
        var4 = undefined;
        var13 = var1.bind(var4)();
        var12 = _closure1_slot1;
        var16 = _closure1_slot2;
        var1 = 22;
        var1 = var16[var1];
        var1 = var12.bind(var4)(var1);
        var1 = var1.bind(var4)();
        var _closure2_slot0 = var1;
        var3 = _closure1_slot15;
        var2 = _closure1_slot14;
        var1 = {};
        var10 = _closure1_slot13;
        var7 = _closure1_slot7;
        var5 = {};
        var11 = 23;
        var11 = var16[var11];
        var11 = var12.bind(var4)(var11);
        var5['source'] = var11;
        var7 = var10.bind(var4)(var7, var5);
        var5 = new Array(4);
        var5[0] = var7;
        var17 = _closure1_slot13;
        var12 = _closure1_slot0;
        var7 = 16;
        var10 = var16[var7];
        var10 = var12.bind(var4)(var10);
        var14 = var10.Text;
        var10 = {'variant': 'heading-lg/extrabold', 'color': 'header-primary'};
        var18 = var13.titleText;
        var11 = new Array(2);
        var11[0] = var18;
        var18 = var13.emptyStateText;
        var11[1] = var18;
        var10['style'] = var11;
        var11 = 14;
        var18 = var16[var11];
        var18 = var12.bind(var4)(var18);
        var21 = var18.intl;
        var20 = var21.format;
        var18 = var16[var11];
        var18 = var12.bind(var4)(var18);
        var18 = var18.t;
        var19 = var18.zQN4xc;
        var18 = {};
        var18['count'] = var15;
        var18 = var20.bind(var21)(var19, var18);
        var10['children'] = var18;
        var10 = var17.bind(var4)(var14, var10);
        var5[1] = var10;
        var10 = _closure1_slot13;
        var7 = var16[var7];
        var7 = var12.bind(var4)(var7);
        var9 = var7.Text;
        var7 = {'variant': 'text-md/normal', 'color': 'header-secondary'};
        var13 = var13.descriptionText;
        var7['style'] = var13;
        var13 = var16[var11];
        var13 = var12.bind(var4)(var13);
        var14 = var13.intl;
        var13 = var14.format;
        var11 = var16[var11];
        var11 = var12.bind(var4)(var11);
        var11 = var11.t;
        var12 = var11.zdizVF;
        var11 = {};
        var11['count'] = var15;
        var11 = var13.bind(var14)(var12, var11);
        var7['children'] = var11;
        var7 = var10.bind(var4)(var9, var7);
        var5[2] = var7;
        var7 = var8.map;
        var6 = function(arg1) {
            _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
 0:
                var5 = arg1;
                var1 = _closure1_slot9;
                var1 = var1.PLAYSTATION;
                if(!(var1 !== var5)) { _fun0010_ip = 188; continue _fun0010 }
 23:
                var1 = _closure1_slot9;
                var1 = var1.XBOX;
                if(!(var1 !== var5)) { _fun0010_ip = 41; continue _fun0010 }
 37:
                var1 = undefined;
                return var1;
 41:
                var4 = _closure1_slot13;
                var3 = _closure1_slot21;
                var2 = {};
                var1 = _closure1_slot10;
                var1 = var1.XBOX;
                var2['platformType'] = var1;
                var8 = _closure1_slot1;
                var11 = _closure1_slot2;
                var1 = 26;
                var7 = var11[var1];
                var1 = undefined;
                var7 = var8.bind(var1)(var7);
                var2['darkPNG'] = var7;
                var7 = 27;
                var7 = var11[var7];
                var7 = var8.bind(var1)(var7);
                var2['lightPNG'] = var7;
                var10 = _closure1_slot0;
                var7 = 14;
                var8 = var11[var7];
                var8 = var10.bind(var1)(var8);
                var9 = var8.intl;
                var8 = var9.string;
                var7 = var11[var7];
                var7 = var10.bind(var1)(var7);
                var7 = var7.t;
                var7 = var7.bkvb+P;
                var7 = var8.bind(var9)(var7);
                var2['label'] = var7;
                var7 = _closure2_slot0;
                var2['theme'] = var7;
                var1 = var4.bind(var1)(var3, var2, var5);
                return var1;
 188:
                var4 = _closure1_slot13;
                var3 = _closure1_slot21;
                var2 = {};
                var1 = _closure1_slot10;
                var1 = var1.PLAYSTATION;
                var2['platformType'] = var1;
                var8 = _closure1_slot1;
                var10 = _closure1_slot2;
                var1 = 24;
                var7 = var10[var1];
                var1 = undefined;
                var7 = var8.bind(var1)(var7);
                var2['darkPNG'] = var7;
                var7 = 25;
                var7 = var10[var7];
                var7 = var8.bind(var1)(var7);
                var2['lightPNG'] = var7;
                var9 = _closure1_slot0;
                var6 = 14;
                var7 = var10[var6];
                var7 = var9.bind(var1)(var7);
                var8 = var7.intl;
                var7 = var8.string;
                var6 = var10[var6];
                var6 = var9.bind(var1)(var6);
                var6 = var6.t;
                var6 = var6.lDqYJy;
                var6 = var7.bind(var8)(var6);
                var2['label'] = var6;
                var6 = _closure2_slot0;
                var2['theme'] = var6;
                var1 = var4.bind(var1)(var3, var2, var5);
                return var1;
            }
        };
        var6 = var7.bind(var8)(var6);
        var5[3] = var6;
        var1['children'] = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var _closure1_slot22 = var1;
    var1 = function ConsoleDetectAuthorize(arg1) {
        var1 = arg1;
        var1 = var1.searchForDevices;
        var _closure2_slot0 = var1;
        var1 = _closure1_slot16;
        var4 = undefined;
        var15 = var1.bind(var4)();
        var3 = _closure1_slot15;
        var2 = _closure1_slot14;
        var1 = {};
        var10 = _closure1_slot13;
        var8 = _closure1_slot7;
        var5 = {};
        var7 = _closure1_slot1;
        var14 = _closure1_slot2;
        var11 = 28;
        var11 = var14[var11];
        var11 = var7.bind(var4)(var11);
        var5['source'] = var11;
        var8 = var10.bind(var4)(var8, var5);
        var5 = new Array(4);
        var5[0] = var8;
        var16 = _closure1_slot13;
        var13 = _closure1_slot0;
        var8 = 16;
        var10 = var14[var8];
        var10 = var13.bind(var4)(var10);
        var12 = var10.Text;
        var11 = {'variant': 'heading-lg/extrabold', 'color': 'header-primary'};
        var10 = var15.titleText;
        var11['style'] = var10;
        var10 = 14;
        var17 = var14[var10];
        var17 = var13.bind(var4)(var17);
        var19 = var17.intl;
        var18 = var19.string;
        var17 = var14[var10];
        var17 = var13.bind(var4)(var17);
        var17 = var17.t;
        var17 = var17.3vPQ39;
        var17 = var18.bind(var19)(var17);
        var11['children'] = var17;
        var11 = var16.bind(var4)(var12, var11);
        var5[1] = var11;
        var12 = _closure1_slot13;
        var8 = var14[var8];
        var8 = var13.bind(var4)(var8);
        var11 = var8.Text;
        var8 = {'variant': 'text-md/normal', 'color': 'header-secondary'};
        var15 = var15.descriptionText;
        var8['style'] = var15;
        var15 = var14[var10];
        var15 = var13.bind(var4)(var15);
        var17 = var15.intl;
        var16 = var17.string;
        var15 = var14[var10];
        var15 = var13.bind(var4)(var15);
        var15 = var15.t;
        var15 = var15.ARF2xs;
        var15 = var16.bind(var17)(var15);
        var8['children'] = var15;
        var8 = var12.bind(var4)(var11, var8);
        var5[2] = var8;
        var8 = _closure1_slot13;
        var6 = 13;
        var6 = var14[var6];
        var7 = var7.bind(var4)(var6);
        var6 = {};
        var11 = var14[var10];
        var11 = var13.bind(var4)(var11);
        var12 = var11.intl;
        var11 = var12.string;
        var10 = var14[var10];
        var10 = var13.bind(var4)(var10);
        var10 = var10.t;
        var10 = var10.C6S5jY;
        var10 = var11.bind(var12)(var10);
        var6['text'] = var10;
        var9 = function onPress() {
            var4 = _closure1_slot1;
            var3 = _closure1_slot2;
            var1 = 11;
            var3 = var3[var1];
            var1 = undefined;
            var5 = var4.bind(var1)(var3);
            var4 = var5.track;
            var2 = _closure1_slot12;
            var3 = var2.CONSOLE_LAN_DETECTION_OPT_IN;
            var2 = {};
            var2 = var4.bind(var5)(var3, var2);
            var2 = _closure2_slot0;
            var2 = var2.bind(var1)();
            return var1;
        };
        var6['onPress'] = var9;
        var6 = var8.bind(var4)(var7, var6);
        var5[3] = var6;
        var1['children'] = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var _closure1_slot23 = var1;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var4);
    var1 = 0;
    var4 = var6[var1];
    var1 = undefined;
    var4 = var13.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var11 = 1;
    var4 = var6[var11];
    var4 = var13.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 2;
    var7 = var6[var4];
    var4 = native4;
    var4 = var4.bind(var1)(var7);
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.View;
    var _closure1_slot6 = var7;
    var7 = var4.Image;
    var _closure1_slot7 = var7;
    var4 = var4.NativeModules;
    var _closure1_slot8 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.GameConsoleTypes;
    var _closure1_slot9 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.PlatformTypes;
    var _closure1_slot10 = var7;
    var7 = var4.AnalyticsLocations;
    var _closure1_slot11 = var7;
    var4 = var4.AnalyticEvents;
    var _closure1_slot12 = var4;
    var4 = 6;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.jsx;
    var _closure1_slot13 = var7;
    var7 = var4.Fragment;
    var _closure1_slot14 = var7;
    var4 = var4.jsxs;
    var _closure1_slot15 = var4;
    var4 = 7;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = {};
    var9 = {'flex': 1, 'alignItems': 'center', 'justifyContent': 'flex-start'};
    var4['body'] = var9;
    var9 = {'flexGrow': 1, 'justifyContent': 'space-between', 'padding': 16};
    var4['container'] = var9;
    var9 = {};
    var10 = 430;
    var9['minHeight'] = var10;
    var4['actionSheetContainer'] = var9;
    var9 = {'marginTop': 16, 'marginBottom': 4};
    var4['titleText'] = var9;
    var9 = {};
    var10 = 24;
    var9['marginBottom'] = var10;
    var4['descriptionText'] = var9;
    var9 = {};
    var10 = 8;
    var12 = var6[var10];
    var12 = var13.bind(var1)(var12);
    var12 = var12.colors;
    var12 = var12.BACKGROUND_SECONDARY_ALT;
    var9['backgroundColor'] = var12;
    var9['marginBottom'] = var10;
    var4['formRow'] = var9;
    var9 = {};
    var9['flexGrow'] = var11;
    var4['header'] = var9;
    var9 = {};
    var9['paddingTop'] = var10;
    var4['emptyStateText'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot16 = var4;
    var4 = 32;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/game_console/native/ConsoleDetectActionSheet.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function ConsoleDetectActionSheet() {
        _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
 0:
            var1 = _closure1_slot16;
            var4 = undefined;
            var14 = var1.bind(var4)();
            var5 = _closure1_slot5;
            var3 = var5.useEffect;
            var2 = function() {
                var5 = _closure1_slot0;
                var6 = _closure1_slot2;
                var1 = 29;
                var2 = var6[var1];
                var1 = undefined;
                var4 = var5.bind(var1)(var2);
                var3 = var4.UNSAFE_markDismissibleContentAsDismissed;
                var2 = 30;
                var2 = var6[var2];
                var2 = var5.bind(var1)(var2);
                var2 = var2.DismissibleContent;
                var2 = var2.CONSOLE_LOCAL_DETECT_CTA;
                var2 = var3.bind(var4)(var2);
                return var1;
            };
            var1 = new Array(0);
            var1 = var3.bind(var5)(var2, var1);
            var1 = _closure1_slot18;
            var3 = var1.bind(var4)();
            var2 = _closure1_slot3;
            var1 = 4;
            var5 = var2.bind(var4)(var3, var1);
            var3 = 0;
            var1 = var5[var3];
            var2 = 1;
            var10 = var5[var2];
            var2 = 2;
            var6 = var5[var2];
            var2 = 3;
            var13 = var5[var2];
            var7 = null;
            var5 = var7 == var6;
            var2 = undefined;
            if(var5) { _fun0011_ip = 105; continue _fun0011 }
 100:
            var2 = var6.length;
 105:
            var8 = var7 != var2;
            var5 = 0;
            if(!var8) { _fun0011_ip = 117; continue _fun0011 }
 114:
            var5 = var2;
 117:
            var9 = _closure1_slot13;
            var8 = _closure1_slot23;
            var2 = {};
            var2['searchForDevices'] = var10;
            var2 = var9.bind(var4)(var8, var2);
            if(var1) { _fun0011_ip = 192; continue _fun0011 }
 141:
            var1 = !var1;
            if(!var1) { _fun0011_ip = 151; continue _fun0011 }
 147:
            var1 = var7 != var6;
 151:
            if(!var1) { _fun0011_ip = 158; continue _fun0011 }
 154:
            var1 = var5 > var3;
 158:
            var12 = var2;
            if(!var1) { _fun0011_ip = 208; continue _fun0011 }
 164:
            var3 = _closure1_slot13;
            var2 = _closure1_slot22;
            var1 = {};
            var1['consolesDetected'] = var6;
            var1['consolesFound'] = var5;
            var12 = var3.bind(var4)(var2, var1);
            _fun0011_ip = 208; continue _fun0011;
 192:
            var3 = _closure1_slot13;
            var2 = _closure1_slot20;
            var1 = {};
            var12 = var3.bind(var4)(var2, var1);
 208:
            var3 = _closure1_slot13;
            var2 = _closure1_slot0;
            var5 = _closure1_slot2;
            var1 = 31;
            var1 = var5[var1];
            var1 = var2.bind(var4)(var1);
            var2 = var1.ActionSheet;
            var1 = {'startHeight': 430, 'startExpanded': true};
            var1['onDismiss'] = var13;
            var7 = _closure1_slot15;
            var6 = _closure1_slot6;
            var5 = {};
            var8 = var14.container;
            var5['style'] = var8;
            var9 = _closure1_slot13;
            var8 = {};
            var10 = var14.header;
            var8['style'] = var10;
            var9 = var9.bind(var4)(var6, var8);
            var8 = new Array(3);
            var8[0] = var9;
            var10 = _closure1_slot13;
            var9 = {};
            var14 = var14.body;
            var9['style'] = var14;
            var9['children'] = var12;
            var9 = var10.bind(var4)(var6, var9);
            var8[1] = var9;
            var10 = _closure1_slot13;
            var9 = {};
            var12 = _closure1_slot19;
            var11 = {};
            var11['cancelCallback'] = var13;
            var11 = var10.bind(var4)(var12, var11);
            var9['children'] = var11;
            var9 = var10.bind(var4)(var6, var9);
            var8[2] = var9;
            var5['children'] = var8;
            var5 = var7.bind(var4)(var6, var5);
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();