// app/modules/badges/BadgeDirectoryActionCreators.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var5 = metroImportDefault;
    var3 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var5;
    var _closure1_slot2 = var7;
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
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var4);
    var1 = 0;
    var4 = var7[var1];
    var1 = undefined;
    var4 = var5.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var7[var4];
    var4 = var5.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var7[var4];
    var4 = var6.bind(var1)(var4);
    var5 = var4.Endpoints;
    var _closure1_slot5 = var5;
    var4 = var4.ME;
    var _closure1_slot6 = var4;
    var4 = function() {
        var4 = _closure1_slot3;
        var3 = undefined;
        var2 = function* (arg1) {
            var1 = function* anon_0_(arg1) {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    StartGenerator();
                    var4 = arg1;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0002_ip = 6; continue _fun0002 }
case 7:
                    var2 = undefined;
                    var8 = undefined;
                    var3 = null;
                    if(!(var3 == var4)) { _fun0002_ip = 8; continue _fun0002 }
case 9:
                    var6 = _closure1_slot4;
                    var5 = var6.getCurrentUser;
                    var6 = var5.bind(var6)();
                    var7 = var3 == var6;
                    var5 = undefined;
                    if(var7) { _fun0002_ip = 10; continue _fun0002 }
case 11:
                    var5 = var6.id;
case 10:
                    var4 = var5;
case 8:
                    var8 = var4;
                    if(!(var3 != var4)) { _fun0002_ip = 12; continue _fun0002 }
case 13: // try_start_0
                    var5 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var3 = 3;
                    var3 = var6[var3];
                    var3 = var5.bind(var2)(var3);
                    var6 = var3.HTTP;
                    var5 = var6.get;
                    var3 = {};
                    var10 = _closure1_slot5;
                    var9 = var10.USER_BADGES;
                    var11 = _closure1_slot7;
                    var7 = var8;
                    var7 = var11.bind(var2)(var7);
                    var7 = var9.bind(var10)(var7);
                    var3['url'] = var7;
                    var7 = true;
                    var3['rejectWithError'] = var7;
                    var3 = var5.bind(var6)(var3);
                    SaveGenerator(address=147);
case 14:
                    return var3;
case 15:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=4);
                    if(var5) { _fun0002_ip = 16; continue _fun0002 }
case 17:
                    var7 = var3.body;
                    var5 = _closure1_slot1;
                    var6 = _closure1_slot2;
                    var4 = 4;
                    var4 = var6[var4];
                    var6 = var5.bind(var2)(var4);
                    var5 = var6.dispatch;
                    var4 = {};
                    var9 = 'BADGE_DIRECTORY_FETCH_SUCCESS';
                    var4['type'] = var9;
                    var4['userId'] = var8;
                    var7 = var7.badges;
                    var4['badges'] = var7;
                    var4 = var5.bind(var6)(var4);
case 18: // try_end0
                    _fun0002_ip = 12; continue _fun0002;
case 16:
                    return var3;
case 19: // catch_target0
                    CatchBlockStart(arg_register=4);
                    var4 = _closure1_slot1;
                    var6 = _closure1_slot2;
                    var3 = 5;
                    var3 = var6[var3];
                    var4 = var4.bind(var2)(var3);
                    var3 = var4.captureException;
                    var3 = var3.bind(var4)(var5);
case 12:
                    return var2;
case 6:
                    return var1;
                }
            };
            return var1;
        };
        var2 = var4.bind(var3)(var2);
        var _closure2_slot0 = var2;
        var1 = function() {
            var1 = undefined;
            var4 = _closure2_slot0;
            var3 = var4.apply;
            var1 = arguments;
            var2 = var1;
            var1 = this;
            var1 = var3.bind(var4)(var1, var2);
            return var1;
        };
        return var1;
    };
    var4 = var4.bind(var1)();
    var2 = function() {
        var4 = _closure1_slot3;
        var3 = undefined;
        var2 = function* (arg1, arg2) {
            var1 = function* anon_0_(arg1, arg2) {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    StartGenerator();
                    var4 = arg2;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0003_ip = 20; continue _fun0003 }
case 7:
                    var8 = arg1;
                    var2 = undefined;
                    var7 = undefined;
                    var3 = null;
                    if(!(var3 == var4)) { _fun0003_ip = 21; continue _fun0003 }
case 22:
                    var6 = _closure1_slot4;
                    var5 = var6.getCurrentUser;
                    var6 = var5.bind(var6)();
                    var9 = var3 == var6;
                    var5 = undefined;
                    if(var9) { _fun0003_ip = 8; continue _fun0003 }
case 23:
                    var5 = var6.id;
case 8:
                    var4 = var5;
case 21:
                    var7 = var4;
                    if(!(var3 != var4)) { _fun0003_ip = 24; continue _fun0003 }
case 25: // try_start_0
                    var5 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var3 = 3;
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
case 26:
                    return var3;
case 27:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=4);
                    if(var5) { _fun0003_ip = 18; continue _fun0003 }
case 28:
                    var5 = _closure1_slot1;
                    var6 = _closure1_slot2;
                    var4 = 4;
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
case 29: // try_end0
                    _fun0003_ip = 24; continue _fun0003;
case 18:
                    return var3;
case 30: // catch_target0
                    CatchBlockStart(arg_register=4);
                    var4 = _closure1_slot1;
                    var6 = _closure1_slot2;
                    var3 = 5;
                    var3 = var6[var3];
                    var4 = var4.bind(var2)(var3);
                    var3 = var4.captureException;
                    var3 = var3.bind(var4)(var5);
case 24:
                    return var2;
case 20:
                    return var1;
                }
            };
            return var1;
        };
        var2 = var4.bind(var3)(var2);
        var _closure2_slot0 = var2;
        var1 = function() {
            var1 = undefined;
            var4 = _closure2_slot0;
            var3 = var4.apply;
            var1 = arguments;
            var2 = var1;
            var1 = this;
            var1 = var3.bind(var4)(var1, var2);
            return var1;
        };
        return var1;
    };
    var2 = var2.bind(var1)();
    var5 = 6;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/badges/BadgeDirectoryActionCreators.tsx';
    var5 = var6.bind(var7)(var5);
    var3['fetchBadgeDirectory'] = var4;
    var3['fetchBadge'] = var2;
    return var1;
})();