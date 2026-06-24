// app/modules/badges/BadgeDirectoryActionCreators.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
    var1 = function urlUserId(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arg1;
            var4 = _closure1_slot4;
            var3 = var4.getCurrentUser;
            var4 = var3.bind(var4)();
            var3 = null;
            var5 = var3 == var4;
            var3 = undefined;
            if(var5) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var3 = var4.id;
case 2:
            if(!(var1 === var3)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var1 = _closure1_slot6;
case 4:
            return var1;
        }
    };
    var _closure1_slot7 = var1;
    var1 = function _fetchBadgeDirectory() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot3;
        var3 = function* (arg1) {
            var1 = function* anon_0_(arg1) {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    StartGenerator();
                    var6 = arg1;
                    var4 = arguments[1];
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0002_ip = 6; continue _fun0002 }
case 7:
                    var3 = undefined;
                    if(!(var4 === var3)) { _fun0002_ip = 8; continue _fun0002 }
case 9:
                    var4 = {};
case 8:
                    var10 = undefined;
                    var14 = undefined;
                    var15 = undefined;
                    var8 = undefined;
                    var11 = undefined;
                    SaveGenerator(address=38);
case 10:
                    return var3;
case 11:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=4);
                    if(var5) { _fun0002_ip = 12; continue _fun0002 }
case 13:
                    var5 = null;
                    if(!(var5 == var6)) { _fun0002_ip = 14; continue _fun0002 }
case 15:
                    var9 = _closure1_slot4;
                    var7 = var9.getCurrentUser;
                    var9 = var7.bind(var9)();
                    var12 = var5 == var9;
                    var7 = undefined;
                    if(var12) { _fun0002_ip = 16; continue _fun0002 }
case 17:
                    var7 = var9.id;
case 16:
                    var6 = var7;
case 14:
                    var10 = var6;
                    if(!(var5 != var6)) { _fun0002_ip = 18; continue _fun0002 }
case 19:
                    var7 = _closure1_slot4;
                    var6 = var7.getCurrentUser;
                    var7 = var6.bind(var7)();
                    var9 = var5 == var7;
                    var6 = undefined;
                    if(var9) { _fun0002_ip = 20; continue _fun0002 }
case 21:
                    var6 = var7.id;
case 20:
                    var5 = var5 != var6;
                    var9 = 'other';
                    var7 = var9;
                    if(!var5) { _fun0002_ip = 22; continue _fun0002 }
case 23:
                    var5 = var10;
                    var7 = var9;
                    if(!(var5 === var6)) { _fun0002_ip = 22; continue _fun0002 }
case 24:
                    var7 = 'self';
case 22:
                    var13 = global;
                    var5 = var13.HermesInternal;
                    var6 = var5.concat;
                    var5 = 'viewed_user:';
                    var14 = var6.bind(var5)(var7);
                    var4 = var4.isRetry;
                    var5 = 'initial';
                    var9 = true;
                    if(!(var9 === var4)) { _fun0002_ip = 25; continue _fun0002 }
case 26:
                    var5 = 'retry';
case 25:
                    var4 = 'attempt:';
                    var15 = var4 + var5;
                    var5 = var13.Date;
                    var4 = var5.now;
                    var8 = var4.bind(var5)();
                    var6 = _closure1_slot1;
                    var5 = _closure1_slot2;
                    var4 = 3;
                    var5 = var5[var4];
                    var7 = var6.bind(var3)(var5);
                    var6 = var7.dispatch;
                    var5 = {};
                    var12 = 'BADGE_DIRECTORY_FETCH_START';
                    var5['type'] = var12;
                    var12 = var10;
                    var5['userId'] = var12;
                    var5 = var6.bind(var7)(var5);
case 27: // try_start_0
                    var6 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var5 = 4;
                    var5 = var7[var5];
                    var5 = var6.bind(var3)(var5);
                    var7 = var5.HTTP;
                    var6 = var7.get;
                    var5 = {};
                    var18 = _closure1_slot5;
                    var17 = var18.USER_BADGES;
                    var19 = _closure1_slot7;
                    var12 = var10;
                    var12 = var19.bind(var3)(var12);
                    var12 = var17.bind(var18)(var12);
                    var5['url'] = var12;
                    var5['rejectWithError'] = var9;
                    var5 = var6.bind(var7)(var5);
                    SaveGenerator(address=348);
case 28:
                    return var5;
case 29:
                    ResumeGenerator(result_out_reg=4, return_bool_out_reg=5);
                    if(var6) { _fun0002_ip = 30; continue _fun0002 }
case 31:
                    var6 = var5.body;
                    var11 = var6;
                    var7 = var14;
                    var9 = new Array(4);
                    var9[0] = var7;
                    var7 = 'result:success';
                    var9[1] = var7;
                    var6 = var6.badges;
                    var12 = var6.length;
                    var7 = 'non_empty';
                    var6 = 0;
                    if(!(var6 === var12)) { _fun0002_ip = 32; continue _fun0002 }
case 33:
                    var7 = 'empty';
case 32:
                    var6 = 'catalog_state:';
                    var6 = var6 + var7;
                    var9[2] = var6;
                    var6 = var15;
                    var9[3] = var6;
                    var7 = _closure1_slot1;
                    var6 = _closure1_slot2;
                    var12 = 5;
                    var12 = var6[var12];
                    var18 = var7.bind(var3)(var12);
                    var17 = var18.distribution;
                    var12 = {};
                    var20 = _closure1_slot0;
                    var19 = 6;
                    var19 = var6[var19];
                    var19 = var20.bind(var3)(var19);
                    var19 = var19.MetricEvents;
                    var19 = var19.BADGE_DIRECTORY_CATALOG_FETCH;
                    var12['name'] = var19;
                    var12['tags'] = var9;
                    var19 = var13.Date;
                    var9 = var19.now;
                    var19 = var9.bind(var19)();
                    var9 = var8;
                    var9 = var19 - var9;
                    var9 = var17.bind(var18)(var12, var9);
                    var6 = var6[var4];
                    var9 = var7.bind(var3)(var6);
                    var7 = var9.dispatch;
                    var6 = {};
                    var12 = 'BADGE_DIRECTORY_FETCH_SUCCESS';
                    var6['type'] = var12;
                    var12 = var10;
                    var6['userId'] = var12;
                    var11 = var11.badges;
                    var6['badges'] = var11;
                    var6 = var7.bind(var9)(var6);
case 34: // try_end0
                    _fun0002_ip = 18; continue _fun0002;
case 30:
                    return var5;
case 35: // catch_target0
                    CatchBlockStart(arg_register=5);
                    var5 = _closure1_slot1;
                    var7 = _closure1_slot2;
                    var9 = 5;
                    var9 = var7[var9];
                    var12 = var5.bind(var3)(var9);
                    var11 = var12.distribution;
                    var9 = {};
                    var17 = _closure1_slot0;
                    var16 = 6;
                    var16 = var7[var16];
                    var16 = var17.bind(var3)(var16);
                    var16 = var16.MetricEvents;
                    var16 = var16.BADGE_DIRECTORY_CATALOG_FETCH;
                    var9['name'] = var16;
                    var16 = var14;
                    var14 = new Array(4);
                    var14[0] = var16;
                    var16 = 'result:failure';
                    var14[1] = var16;
                    var16 = 'catalog_state:unknown';
                    var14[2] = var16;
                    var14[3] = var15;
                    var9['tags'] = var14;
                    var14 = var13.Date;
                    var13 = var14.now;
                    var13 = var13.bind(var14)();
                    var8 = var13 - var8;
                    var8 = var11.bind(var12)(var9, var8);
                    var4 = var7[var4];
                    var9 = var5.bind(var3)(var4);
                    var8 = var9.dispatch;
                    var4 = {};
                    var11 = 'BADGE_DIRECTORY_FETCH_FAILURE';
                    var4['type'] = var11;
                    var4['userId'] = var10;
                    var4 = var8.bind(var9)(var4);
                    var4 = 7;
                    var4 = var7[var4];
                    var5 = var5.bind(var3)(var4);
                    var4 = var5.captureException;
                    var4 = var4.bind(var5)(var6);
case 18:
                    return var3;
case 12:
                    return var2;
case 6:
                    return var1;
                }
            };
            var2 = var1.next;
            var2 = var2.bind(var1)();
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot8 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot8 = var1;
    var1 = function _fetchBadge() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot3;
        var3 = function* (arg1, arg2) {
            var1 = function* anon_0_(arg1, arg2) {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    StartGenerator();
                    var4 = arg2;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0003_ip = 36; continue _fun0003 }
case 37:
                    var8 = arg1;
                    var2 = undefined;
                    var7 = undefined;
                    var3 = null;
                    if(!(var3 == var4)) { _fun0003_ip = 38; continue _fun0003 }
case 39:
                    var6 = _closure1_slot4;
                    var5 = var6.getCurrentUser;
                    var6 = var5.bind(var6)();
                    var9 = var3 == var6;
                    var5 = undefined;
                    if(var9) { _fun0003_ip = 40; continue _fun0003 }
case 41:
                    var5 = var6.id;
case 40:
                    var4 = var5;
case 38:
                    var7 = var4;
                    if(!(var3 != var4)) { _fun0003_ip = 42; continue _fun0003 }
case 43: // try_start_0
                    var5 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var3 = 4;
                    var3 = var6[var3];
                    var3 = var5.bind(var2)(var3);
                    var6 = var3.HTTP;
                    var5 = var6.get;
                    var3 = {};
                    var11 = _closure1_slot5;
                    var10 = var11.USER_BADGE;
                    var12 = _closure1_slot7;
                    var9 = var7;
                    var9 = var12.bind(var2)(var9);
                    var8 = var10.bind(var11)(var9, var8);
                    var3['url'] = var8;
                    var8 = true;
                    var3['rejectWithError'] = var8;
                    var3 = var5.bind(var6)(var3);
                    SaveGenerator(address=151);
case 44:
                    return var3;
case 45:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=4);
                    if(var5) { _fun0003_ip = 46; continue _fun0003 }
case 47:
                    var5 = _closure1_slot1;
                    var6 = _closure1_slot2;
                    var4 = 3;
                    var4 = var6[var4];
                    var6 = var5.bind(var2)(var4);
                    var5 = var6.dispatch;
                    var4 = {};
                    var8 = 'BADGE_FETCH_SUCCESS';
                    var4['type'] = var8;
                    var4['userId'] = var7;
                    var7 = var3.body;
                    var4['badge'] = var7;
                    var4 = var5.bind(var6)(var4);
case 48: // try_end0
                    _fun0003_ip = 42; continue _fun0003;
case 46:
                    return var3;
case 49: // catch_target0
                    CatchBlockStart(arg_register=4);
                    var4 = _closure1_slot1;
                    var6 = _closure1_slot2;
                    var3 = 7;
                    var3 = var6[var3];
                    var4 = var4.bind(var2)(var3);
                    var3 = var4.captureException;
                    var3 = var3.bind(var4)(var5);
case 42:
                    return var2;
case 36:
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
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.Endpoints;
    var _closure1_slot5 = var7;
    var4 = var4.ME;
    var _closure1_slot6 = var4;
    var4 = 8;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/badges/BadgeDirectoryActionCreators.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function fetchBadgeDirectory() {
        var1 = undefined;
        var4 = _closure1_slot8;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['fetchBadgeDirectory'] = var4;
    var2 = function fetchBadge() {
        var1 = undefined;
        var4 = _closure1_slot9;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['fetchBadge'] = var2;
    return var1;
})();