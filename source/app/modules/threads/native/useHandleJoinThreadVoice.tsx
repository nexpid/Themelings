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
case 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0001_ip = 2; continue _fun0001 }
case 3:
                    var3 = _closure2_slot0;
                    var2 = var3.getGuildId;
                    var5 = var2.bind(var3)();
                    var2 = null;
                    if(!(var2 != var5)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
                    var6 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var3 = 2;
                    var3 = var4[var3];
                    var4 = undefined;
                    var6 = var6.bind(var4)(var3);
                    var3 = var6.shouldShowMembershipVerificationGate;
                    var3 = var3.bind(var6)(var5);
                    if(var3) { _fun0001_ip = 6; continue _fun0001 }
case 4:
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
case 7:
                    return var3;
case 8:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=8);
                    if(var9) { _fun0001_ip = 9; continue _fun0001 }
case 10:
                    var12 = _closure1_slot4;
                    var10 = var12.hasJoined;
                    var9 = _closure2_slot0;
                    var9 = var9.id;
                    var9 = var10.bind(var12)(var9);
                    if(var9) { _fun0001_ip = 11; continue _fun0001 }
case 12:
                    var10 = _closure1_slot1;
                    var9 = _closure1_slot2;
                    var9 = var9[var11];
                    var12 = var10.bind(var7)(var9);
                    var11 = var12.joinThread;
                    var10 = _closure2_slot0;
                    var9 = 'Join Voice';
                    var9 = var11.bind(var12)(var10, var9);
                    SaveGenerator(address=203);
case 13:
                    return var9;
case 14:
                    ResumeGenerator(result_out_reg=8, return_bool_out_reg=9);
                    if(!var10) { _fun0001_ip = 11; continue _fun0001 }
case 15:
                    return var9;
case 11:
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
case 16:
                    return var6;
case 17:
                    ResumeGenerator(result_out_reg=5, return_bool_out_reg=8);
                    if(var9) { _fun0001_ip = 18; continue _fun0001 }
case 19:
                    var10 = var6.openGuildVoiceModal;
                    var9 = _closure2_slot0;
                    var8 = 'Thread Header';
                    var8 = var10.bind(var7)(var9, var8);
                    return var7;
case 18:
                    return var6;
case 9:
                    return var3;
case 6:
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
case 20:
                    return var2;
case 21:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(var3) { _fun0001_ip = 22; continue _fun0001 }
case 23:
                    var3 = var2.openMemberVerificationModal;
                    var3 = var3.bind(var4)(var5);
                    return var3;
case 22:
                    return var2;
case 2:
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