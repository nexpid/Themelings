// app/modules/threads/native/useHandleJoinThreadVoice.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
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
    var4 = 7;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/threads/native/useHandleJoinThreadVoice.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function useHandleJoinThreadVoice(arg1) {
        var2 = arg1;
        var _closure2_slot0 = var2;
        var3 = _closure1_slot3;
        var2 = undefined;
        var1 = function* () {
            var1 = function* anon_0_() {
                _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0001_ip = 356; continue _fun0001 }
 10:
                    var3 = _closure2_slot0;
                    var2 = var3.getGuildId;
                    var5 = var2.bind(var3)();
                    var2 = null;
                    if(!(var2 != var5)) { _fun0001_ip = 75; continue _fun0001 }
 33:
                    var6 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var3 = 2;
                    var3 = var4[var3];
                    var4 = undefined;
                    var6 = var6.bind(var4)(var3);
                    var3 = var6.shouldShowMembershipVerificationGate;
                    var3 = var3.bind(var6)(var5);
                    if(var3) { _fun0001_ip = 291; continue _fun0001 }
 75:
                    var9 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var11 = 5;
                    var3 = var3[var11];
                    var7 = undefined;
                    var10 = var9.bind(var7)(var3);
                    var9 = var10.unarchiveThreadIfNecessary;
                    var3 = _closure2_slot0;
                    var3 = var3.id;
                    var3 = var9.bind(var10)(var3);
                    SaveGenerator(address=124);
 122:
                    return var3;
 124:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=8);
                    if(var9) { _fun0001_ip = 288; continue _fun0001 }
 133:
                    var12 = _closure1_slot4;
                    var10 = var12.hasJoined;
                    var9 = _closure2_slot0;
                    var9 = var9.id;
                    var9 = var10.bind(var12)(var9);
                    if(var9) { _fun0001_ip = 212; continue _fun0001 }
 160:
                    var10 = _closure1_slot1;
                    var9 = _closure1_slot2;
                    var9 = var9[var11];
                    var12 = var10.bind(var7)(var9);
                    var11 = var12.joinThread;
                    var10 = _closure2_slot0;
                    var9 = 'Join Voice';
                    var9 = var11.bind(var12)(var10, var9);
                    SaveGenerator(address=203);
 201:
                    return var9;
 203:
                    ResumeGenerator(result_out_reg=8, return_bool_out_reg=9);
                    if(!var10) { _fun0001_ip = 212; continue _fun0001 }
 209:
                    return var9;
 212:
                    var10 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var9 = 4;
                    var9 = var6[var9];
                    var10 = var10.bind(var7)(var9);
                    var9 = 6;
                    var9 = var6[var9];
                    var6 = var6.paths;
                    var6 = var10.bind(var7)(var9, var6);
                    SaveGenerator(address=254);
 252:
                    return var6;
 254:
                    ResumeGenerator(result_out_reg=5, return_bool_out_reg=8);
                    if(var9) { _fun0001_ip = 285; continue _fun0001 }
 260:
                    var10 = var6.openGuildVoiceModal;
                    var9 = _closure2_slot0;
                    var8 = 'Thread Header';
                    var8 = var10.bind(var7)(var9, var8);
                    return var7;
 285:
                    return var6;
 288:
                    return var3;
 291:
                    var6 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var3 = 4;
                    var3 = var2[var3];
                    var6 = var6.bind(var4)(var3);
                    var3 = 3;
                    var3 = var2[var3];
                    var2 = var2.paths;
                    var2 = var6.bind(var4)(var3, var2);
                    SaveGenerator(address=333);
 331:
                    return var2;
 333:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(var3) { _fun0001_ip = 353; continue _fun0001 }
 339:
                    var3 = var2.openMemberVerificationModal;
                    var3 = var3.bind(var4)(var5);
                    return var3;
 353:
                    return var2;
 356:
                    return var1;
                }
            };
            return var1;
        };
        var1 = var3.bind(var2)(var1);
        return var1;
    };
    var3['default'] = var2;
    return var1;
})();