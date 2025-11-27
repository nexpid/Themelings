// app/modules/guild_member_verification/hooks/useCanReapplyToRejectedMemberVerificationApplication.tsx
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
    var4 = 2;
    var8 = var6[var4];
    var4 = metroImportAll;
    var4 = var4.bind(var1)(var8);
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot6 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot7 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.GuildFeatures;
    var _closure1_slot8 = var4;
    var4 = 8;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/guild_member_verification/hooks/useCanReapplyToRejectedMemberVerificationApplication.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function useCanReapplyToRejectedMemberVerificationApplication(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var9 = arg1;
            var _closure2_slot0 = var9;
            var7 = _closure1_slot5;
            var3 = var7.useState;
            var2 = true;
            var5 = var3.bind(var7)(var2);
            var3 = _closure1_slot4;
            var6 = undefined;
            var2 = 2;
            var5 = var3.bind(var6)(var5, var2);
            var2 = 0;
            var2 = var5[var2];
            var3 = 1;
            var3 = var5[var3];
            var _closure2_slot1 = var3;
            var5 = _closure1_slot0;
            var8 = _closure1_slot2;
            var3 = 6;
            var3 = var8[var3];
            var10 = var5.bind(var6)(var3);
            var8 = var10.useStateFromStores;
            var3 = _closure1_slot7;
            var5 = new Array(1);
            var5[0] = var3;
            var3 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var3 = _closure2_slot0;
                    var1 = null;
                    var3 = var1 != var3;
                    var1 = undefined;
                    if(!var3) { _fun0002_ip = 2; continue _fun0002 }
case 3:
                    var4 = _closure1_slot7;
                    var3 = var4.getJoinRequestGuild;
                    var2 = _closure2_slot0;
                    var1 = var3.bind(var4)(var2);
case 2:
                    return var1;
                }
            };
            var5 = var8.bind(var10)(var5, var3);
            var8 = var7.useCallback;
            var3 = function() {
                var4 = _closure1_slot3;
                var3 = undefined;
                var2 = function* (arg1) {
                    var1 = function* anon_0_(arg1) {
                        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                            StartGenerator();
                            ResumeGenerator(result_out_reg=0, return_bool_out_reg=3);
                            if(var4) { _fun0003_ip = 4; continue _fun0003 }
case 5:
                            var3 = arg1;
                            var5 = undefined;
                            var2 = undefined;
case 6: // try_start_0
                            var8 = _closure1_slot6;
                            var7 = var8.getInviteKeyForGuildId;
                            var6 = var3;
                            var7 = var7.bind(var8)(var6);
                            var2 = var7;
                            var6 = null;
                            if(!(var6 != var7)) { _fun0003_ip = 7; continue _fun0003 }
case 8:
                            var6 = _closure1_slot1;
                            var7 = _closure1_slot2;
                            var4 = 7;
                            var4 = var7[var4];
                            var6 = var6.bind(var5)(var4);
                            var4 = var6.fetchVerificationForm;
                            var2 = var4.bind(var6)(var3, var2);
                            SaveGenerator(address=83);
case 9:
                            return var2;
case 10:
                            ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                            if(var3) { _fun0003_ip = 11; continue _fun0003 }
case 7: // try_end0
                            var4 = _closure2_slot1;
                            var3 = false;
                            var3 = var4.bind(var5)(var3);
                            return var5;
case 11:
                            var4 = _closure2_slot1;
                            var3 = false;
                            var3 = var4.bind(var5)(var3);
                            return var2;
case 12: // catch_target0
                            CatchBlockStart(arg_register=1);
                            var4 = _closure2_slot1;
                            var3 = false;
                            var3 = var4.bind(var5)(var3);
                            throw var2;
case 4:
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
            var6 = var3.bind(var6)();
            var3 = new Array(0);
            var8 = var8.bind(var7)(var6, var3);
            var _closure2_slot2 = var8;
            var6 = var7.useEffect;
            var3 = new Array(2);
            var3[0] = var9;
            var3[1] = var8;
            var1 = function() {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                    var3 = _closure2_slot0;
                    var2 = null;
                    if(!(var2 != var3)) { _fun0004_ip = 13; continue _fun0004 }
case 14:
                    var3 = _closure2_slot1;
                    var4 = undefined;
                    var2 = true;
                    var2 = var3.bind(var4)(var2);
                    var3 = _closure2_slot2;
                    var2 = _closure2_slot0;
                    var2 = var3.bind(var4)(var2);
                    _fun0004_ip = 15; continue _fun0004;
case 13:
                    var3 = _closure2_slot1;
                    var2 = undefined;
                    var1 = false;
                    var1 = var3.bind(var2)(var1);
case 15:
                    var1 = undefined;
                    return var1;
                }
            };
            var1 = var6.bind(var7)(var1, var3);
            var1 = {};
            var3 = null;
            var3 = var3 != var5;
            if(!var3) { _fun0001_ip = 16; continue _fun0001 }
case 17:
            var6 = var5.features;
            var5 = var6.has;
            var4 = _closure1_slot8;
            var4 = var4.MEMBER_VERIFICATION_MANUAL_APPROVAL;
            var3 = var5.bind(var6)(var4);
case 16:
            var1['canReapply'] = var3;
            var1['isLoading'] = var2;
            return var1;
        }
    };
    var3['useCanReapplyToRejectedMemberVerificationApplication'] = var2;
    return var1;
})();