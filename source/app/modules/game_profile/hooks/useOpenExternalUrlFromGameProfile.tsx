// app/modules/game_profile/hooks/useOpenExternalUrlFromGameProfile.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
    var1 = function _getDeepLinkUrl() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot4;
        var3 = function* (arg1) {
            var1 = function* anon_0_(arg1) {
                _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
                    StartGenerator();
                    var6 = arg1;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0001_ip = 2; continue _fun0001 }
case 3:
                    var3 = var6.hostname;
                    var2 = 'store.steampowered.com';
                    if(!(var2 === var3)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
                    var4 = _closure1_slot1;
                    var5 = _closure1_slot2;
                    var2 = 3;
                    var2 = var5[var2];
                    var7 = undefined;
                    var5 = var4.bind(var7)(var2);
                    var4 = var5.isProtocolRegistered;
                    var2 = _closure1_slot6;
                    var2 = var4.bind(var5)(var2);
                    SaveGenerator(address=73);
case 6:
                    return var2;
case 7:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(var4) { _fun0001_ip = 8; continue _fun0001 }
case 9:
                    if(!var2) { _fun0001_ip = 4; continue _fun0001 }
case 10:
                    var8 = var6.pathname;
                    var5 = var8.match;
                    var4 = _closure1_slot7;
                    var8 = var5.bind(var8)(var4);
                    var4 = null;
                    var5 = var4 == var8;
                    var7 = undefined;
                    if(var5) { _fun0001_ip = 11; continue _fun0001 }
case 12:
                    var5 = 1;
                    var7 = var8[var5];
case 11:
                    if(!(var4 == var7)) { _fun0001_ip = 13; continue _fun0001 }
case 4:
                    var9 = var6.hostname;
                    var11 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var8 = 4;
                    var4 = var4[var8];
                    var10 = undefined;
                    var4 = var11.bind(var10)(var4);
                    var4 = var4.XBOX_GAME_PASS_STORE_HOSTNAME;
                    if(!(var9 === var4)) { _fun0001_ip = 14; continue _fun0001 }
case 15:
                    var11 = _closure1_slot1;
                    var4 = _closure1_slot2;
                    var9 = 3;
                    var9 = var4[var9];
                    var11 = var11.bind(var10)(var9);
                    var9 = var11.isProtocolRegistered;
                    var12 = _closure1_slot0;
                    var4 = var4[var8];
                    var4 = var12.bind(var10)(var4);
                    var4 = var4.XBOX_GAME_PASS_PROTOCOL;
                    var4 = var9.bind(var11)(var4);
                    SaveGenerator(address=226);
case 16:
                    return var4;
case 17:
                    ResumeGenerator(result_out_reg=3, return_bool_out_reg=8);
                    if(var9) { _fun0001_ip = 18; continue _fun0001 }
case 19:
                    if(!var4) { _fun0001_ip = 14; continue _fun0001 }
case 20:
                    var11 = var6.pathname;
                    var9 = var11.match;
                    var6 = _closure1_slot8;
                    var12 = var9.bind(var11)(var6);
                    var6 = null;
                    var11 = var6 == var12;
                    var9 = undefined;
                    if(var11) { _fun0001_ip = 21; continue _fun0001 }
case 22:
                    var11 = 1;
                    var9 = var12[var11];
case 21:
                    if(!(var6 == var9)) { _fun0001_ip = 23; continue _fun0001 }
case 14:
                    var6 = null;
                    return var6;
case 23:
                    var6 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var5 = var5[var8];
                    var8 = var6.bind(var10)(var5);
                    var6 = var8.buildXboxGamePassStoreDeepLinkUrl;
                    var5 = global;
                    var5 = var5.decodeURIComponent;
                    var5 = var5.bind(var10)(var9);
                    var5 = var6.bind(var8)(var5);
                    return var5;
case 18:
                    return var4;
case 13:
                    var6 = _closure1_slot6;
                    var3 = global;
                    var3 = var3.HermesInternal;
                    var5 = var3.concat;
                    var4 = '';
                    var3 = '://store/';
                    var3 = var5.bind(var4)(var6, var3, var7);
                    return var3;
case 8:
                    return var2;
case 2:
                    return var1;
                }
            };
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot9 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot9 = var1;
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
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 2;
    var7 = var6[var4];
    var4 = metroImportAll;
    var4 = var4.bind(var1)(var7);
    var _closure1_slot5 = var4;
    var4 = 'steam';
    var _closure1_slot6 = var4;
    var4 = /^\/app\/(\d+)(?:\/)?/;
    var _closure1_slot7 = var4;
    var4 = /^\/games\/store\/title\/([^/]+)/;
    var _closure1_slot8 = var4;
    var4 = 6;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/game_profile/hooks/useOpenExternalUrlFromGameProfile.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function useOpenExternalUrlFromGameProfile(arg1) {
        var6 = arg1;
        var _closure2_slot0 = var6;
        var4 = _closure1_slot5;
        var5 = var4.useState;
        var3 = false;
        var7 = var5.bind(var4)(var3);
        var5 = _closure1_slot3;
        var2 = undefined;
        var3 = 2;
        var7 = var5.bind(var2)(var7, var3);
        var3 = 0;
        var5 = var7[var3];
        var _closure2_slot1 = var5;
        var3 = 1;
        var3 = var7[var3];
        var _closure2_slot2 = var3;
        var3 = var4.useCallback;
        var1 = function() {
            var4 = _closure1_slot4;
            var3 = undefined;
            var2 = function* (arg1) {
                var1 = function* anon_0_(arg1) {
                    _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                        StartGenerator();
                        var3 = arg1;
                        ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                        if(var2) { _fun0002_ip = 24; continue _fun0002 }
case 25:
                        var4 = var3;
                        var2 = undefined;
                        var5 = undefined;
                        var7 = undefined;
                        var9 = null;
                        if(!(var9 != var3)) { _fun0002_ip = 26; continue _fun0002 }
case 27: // try_start_0
                        var3 = global;
                        var10 = var3.URL;
                        var14 = var4;
                        var8 = var10.prototype;
                        var8 = Object.create(var8, {constructor: {value: var10}});
                        var15 = var8;
                        var3 = new var15[var10](var14, var13);
                        var5 = var3 instanceof Object ? var3 : var8;
case 28: // try_end0
                        var8 = var5;
                        var3 = function getDeepLinkUrl() {
                            var1 = undefined;
                            var4 = _closure1_slot9;
                            var3 = var4.apply;
                            var1 = arguments;
                            var2 = var1;
                            var1 = this;
                            var1 = var3.bind(var4)(var1, var2);
                            return var1;
                        };
                        var3 = var3.bind(var2)(var8);
                        SaveGenerator(address=83);
case 29:
                        return var3;
case 30:
                        ResumeGenerator(result_out_reg=2, return_bool_out_reg=7);
                        if(var8) { _fun0002_ip = 31; continue _fun0002 }
case 32:
                        var7 = var3;
                        var10 = var9 != var3;
                        var8 = var10;
                        if(!var10) { _fun0002_ip = 33; continue _fun0002 }
case 34:
                        var8 = _closure2_slot1;
case 33:
                        if(!var8) { _fun0002_ip = 12; continue _fun0002 }
case 35:
                        var7 = null;
case 12:
                        var8 = var5;
                        var12 = var8.searchParams;
                        var11 = var12.set;
                        var10 = 'utm_source';
                        var5 = 'discord';
                        var5 = var11.bind(var12)(var10, var5);
                        var5 = var8.toString;
                        var4 = var5.bind(var8)();
                        var8 = _closure2_slot0;
                        if(!(var9 == var8)) { _fun0002_ip = 36; continue _fun0002 }
case 37:
                        var8 = var7;
                        if(!(var9 == var8)) { _fun0002_ip = 38; continue _fun0002 }
case 39:
                        var9 = _closure1_slot1;
                        var10 = _closure1_slot2;
                        var8 = 5;
                        var8 = var10[var8];
                        var9 = var9.bind(var2)(var8);
                        var8 = var4;
                        var8 = var9.bind(var2)(var8);
                        _fun0002_ip = 26; continue _fun0002;
case 38:
                        var8 = var7;
                        var7 = _closure2_slot2;
                        var6 = function openDeepLink(arg1, arg2) {
                            var1 = arg2;
                            var _closure6_slot0 = var1;
                            var3 = global;
                            var6 = var3.setTimeout;
                            var1 = undefined;
                            var5 = function() {
                                var3 = _closure6_slot0;
                                var2 = undefined;
                                var1 = true;
                                var1 = var3.bind(var2)(var1);
                                return var1;
                            };
                            var4 = 5000;
                            var4 = var6.bind(var1)(var5, var4);
                            var _closure6_slot1 = var4;
                            var6 = var3.window;
                            var5 = var6.addEventListener;
                            var4 = {};
                            var3 = true;
                            var4['once'] = var3;
                            var3 = 'blur';
                            var2 = function() {
                                var1 = global;
                                var3 = var1.clearTimeout;
                                var2 = _closure6_slot1;
                                var1 = undefined;
                                var1 = var3.bind(var1)(var2);
                                return var1;
                            };
                            var2 = var5.bind(var6)(var3, var2, var4);
                            var3 = _closure1_slot1;
                            var4 = _closure1_slot2;
                            var2 = 5;
                            var2 = var4[var2];
                            var3 = var3.bind(var1)(var2);
                            var2 = arg1;
                            var2 = var3.bind(var1)(var2);
                            return var1;
                        };
                        var6 = var6.bind(var2)(var8, var7);
                        _fun0002_ip = 26; continue _fun0002;
case 36:
                        var5 = _closure2_slot0;
                        var4 = var5.bind(var2)(var4);
case 26:
                        return var2;
case 31:
                        return var3;
case 40: // catch_target0
                        CatchBlockStart(arg_register=2);
                        return var2;
case 24:
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
        var2 = var1.bind(var2)();
        var1 = new Array(2);
        var1[0] = var6;
        var1[1] = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var3['default'] = var2;
    return var1;
})();