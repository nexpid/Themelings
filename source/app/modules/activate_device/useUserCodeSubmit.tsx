// app/modules/activate_device/useUserCodeSubmit.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var6;
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
    var _closure1_slot2 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 2;
    var7 = var6[var4];
    var4 = metroImportAll;
    var4 = var4.bind(var1)(var7);
    var _closure1_slot4 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.OAuthConstants;
    var _closure1_slot5 = var4;
    var4 = 6;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/activate_device/useUserCodeSubmit.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function useUserCodeSubmit(arg1, arg2, arg3) {
        var8 = arg1;
        var10 = arg2;
        var9 = arg3;
        var _closure2_slot0 = var8;
        var _closure2_slot1 = var10;
        var _closure2_slot2 = var9;
        var7 = _closure1_slot4;
        var3 = var7.useState;
        var2 = false;
        var2 = var3.bind(var7)(var2);
        var13 = _closure1_slot3;
        var11 = undefined;
        var12 = 2;
        var5 = var13.bind(var11)(var2, var12);
        var3 = 0;
        var2 = var5[var3];
        var6 = 1;
        var5 = var5[var6];
        var _closure2_slot3 = var5;
        var14 = var7.useState;
        var5 = null;
        var5 = var14.bind(var7)(var5);
        var5 = var13.bind(var11)(var5, var12);
        var3 = var5[var3];
        var5 = var5[var6];
        var _closure2_slot4 = var5;
        var6 = var7.useCallback;
        var5 = _closure1_slot2;
        var4 = function* () {
            var1 = function* anon_0_() {
                _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0001_ip = 467; continue _fun0001 }
 10: // try_start_0
                    var3 = _closure2_slot3;
                    var6 = undefined;
                    var2 = true;
                    var2 = var3.bind(var6)(var2);
                    var3 = _closure1_slot0;
                    var5 = _closure1_slot1;
                    var2 = 5;
                    var2 = var5[var2];
                    var5 = var3.bind(var6)(var2);
                    var3 = var5.verifyUserCode;
                    var2 = _closure2_slot0;
                    var2 = var3.bind(var5)(var2);
                    SaveGenerator(address=68);
 66:
                    return var2;
 68:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(var3) { _fun0001_ip = 158; continue _fun0001 }
 74:
                    var5 = _closure2_slot3;
                    var3 = false;
                    var3 = var5.bind(var6)(var3);
                    var5 = _closure2_slot1;
                    var3 = {};
                    var7 = _closure2_slot0;
                    var3['userCode'] = var7;
                    var7 = var2.body;
                    var7 = var7.client_id;
                    var3['clientId'] = var7;
                    var7 = var2.body;
                    var7 = var7.scopes;
                    var3['scopes'] = var7;
                    var7 = var2.body;
                    var7 = var7.two_way_link_code;
                    var3['twoWayLinkCode'] = var7;
                    var3 = var5.bind(var6)(var3);
 153: // try_end0
                    _fun0001_ip = 462; continue _fun0001;
 158:
                    return var2;
 161: // catch_target0
                    CatchBlockStart(arg_register=2);
                    var4 = var3;
                    var7 = _closure2_slot4;
                    var6 = null;
                    var5 = var6 == var3;
                    var3 = undefined;
                    var8 = undefined;
                    if(var5) { _fun0001_ip = 194; continue _fun0001 }
 186:
                    var5 = var4;
                    var8 = var5.status;
 194:
                    var5 = 429;
                    if(!(var5 !== var8)) { _fun0001_ip = 351; continue _fun0001 }
 207:
                    var5 = 404;
                    if(!(var5 !== var8)) { _fun0001_ip = 289; continue _fun0001 }
 217:
                    var5 = 400;
                    if(!(var5 !== var8)) { _fun0001_ip = 289; continue _fun0001 }
 227:
                    var10 = _closure1_slot0;
                    var11 = _closure1_slot1;
                    var5 = 4;
                    var8 = var11[var5];
                    var8 = var10.bind(var3)(var8);
                    var9 = var8.intl;
                    var8 = var9.string;
                    var5 = var11[var5];
                    var5 = var10.bind(var3)(var5);
                    var5 = var5.t;
                    var5 = var5.JNQRU1;
                    var5 = var8.bind(var9)(var5);
                    _fun0001_ip = 349; continue _fun0001;
 289:
                    var11 = _closure1_slot0;
                    var12 = _closure1_slot1;
                    var8 = 4;
                    var9 = var12[var8];
                    var9 = var11.bind(var3)(var9);
                    var10 = var9.intl;
                    var9 = var10.string;
                    var8 = var12[var8];
                    var8 = var11.bind(var3)(var8);
                    var8 = var8.t;
                    var8 = var8.aWa1Pz;
                    var5 = var9.bind(var10)(var8);
 349:
                    _fun0001_ip = 411; continue _fun0001;
 351:
                    var11 = _closure1_slot0;
                    var12 = _closure1_slot1;
                    var8 = 4;
                    var9 = var12[var8];
                    var9 = var11.bind(var3)(var9);
                    var10 = var9.intl;
                    var9 = var10.string;
                    var8 = var12[var8];
                    var8 = var11.bind(var3)(var8);
                    var8 = var8.t;
                    var8 = var8.BPmZvr;
                    var5 = var9.bind(var10)(var8);
 411:
                    var5 = var7.bind(var3)(var5);
                    var7 = _closure2_slot3;
                    var5 = false;
                    var5 = var7.bind(var3)(var5);
                    var5 = var4;
                    var6 = var6 == var5;
                    var5 = undefined;
                    if(var6) { _fun0001_ip = 444; continue _fun0001 }
 439:
                    var5 = var4.status;
 444:
                    var4 = 401;
                    if(!(var4 === var5)) { _fun0001_ip = 462; continue _fun0001 }
 454:
                    var2 = _closure2_slot2;
                    var2 = var2.bind(var3)();
 462:
                    var2 = undefined;
                    return var2;
 467:
                    return var1;
                }
            };
            return var1;
        };
        var5 = var5.bind(var11)(var4);
        var4 = new Array(3);
        var4[0] = var8;
        var4[1] = var10;
        var4[2] = var9;
        var4 = var6.bind(var7)(var5, var4);
        var _closure2_slot5 = var4;
        var6 = var7.useEffect;
        var5 = new Array(2);
        var5[0] = var8;
        var5[1] = var4;
        var1 = function() {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                var2 = _closure2_slot0;
                var3 = var2.length;
                var2 = _closure1_slot5;
                var2 = var2.USER_CODE_LENGTH;
                if(!(var3 !== var2)) { _fun0002_ip = 44; continue _fun0002 }
 29:
                var4 = _closure2_slot4;
                var3 = undefined;
                var2 = null;
                var2 = var4.bind(var3)(var2);
                _fun0002_ip = 54; continue _fun0002;
 44:
                var2 = _closure2_slot5;
                var1 = undefined;
                var1 = var2.bind(var1)();
 54:
                var1 = undefined;
                return var1;
            }
        };
        var1 = var6.bind(var7)(var1, var5);
        var1 = {};
        var1['manualSubmit'] = var4;
        var1['error'] = var3;
        var1['submitting'] = var2;
        return var1;
    };
    var3['useUserCodeSubmit'] = var2;
    return var1;
})();