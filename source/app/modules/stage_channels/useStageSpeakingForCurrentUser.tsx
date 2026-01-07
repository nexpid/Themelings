// app/modules/stage_channels/useStageSpeakingForCurrentUser.tsx
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
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.Permissions;
    var _closure1_slot5 = var4;
    var4 = 7;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/stage_channels/useStageSpeakingForCurrentUser.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function useIsStageSpeakingDisabledForCurrentUser() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var4 = _closure1_slot0;
            var5 = _closure1_slot1;
            var1 = 4;
            var1 = var5[var1];
            var3 = undefined;
            var2 = var4.bind(var3)(var1);
            var1 = var2.useIsVerifiedTeen;
            var2 = var1.bind(var2)();
            var1 = 5;
            var1 = var5[var1];
            var4 = var4.bind(var3)(var1);
            var3 = var4.useIsStagePawtectEnabled;
            var1 = 'useIsStageSpeakingDisabledForCurrentUser';
            var1 = var3.bind(var4)(var1);
            if(!var1) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var1 = var2;
case 2:
            return var1;
        }
    };
    var3['useIsStageSpeakingDisabledForCurrentUser'] = var4;
    var4 = function isStageSpeakingDisabledForCurrentUser() {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var4 = _closure1_slot0;
            var5 = _closure1_slot1;
            var1 = 4;
            var1 = var5[var1];
            var3 = undefined;
            var2 = var4.bind(var3)(var1);
            var1 = var2.isVerifiedTeen;
            var2 = var1.bind(var2)();
            var1 = 5;
            var1 = var5[var1];
            var4 = var4.bind(var3)(var1);
            var3 = var4.getIsStagePawtectEnabled;
            var1 = 'isStageSpeakingDisabledForCurrentUser';
            var1 = var3.bind(var4)(var1);
            if(!var1) { _fun0002_ip = 2; continue _fun0002 }
case 3:
            var1 = var2;
case 2:
            return var1;
        }
    };
    var3['isStageSpeakingDisabledForCurrentUser'] = var4;
    var4 = function shouldAgeVerifyToSpeakForCurrentUser(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var7 = arg1;
            var3 = _closure1_slot0;
            var4 = _closure1_slot1;
            var2 = 4;
            var2 = var4[var2];
            var5 = undefined;
            var3 = var3.bind(var5)(var2);
            var2 = var3.isVerifiedAdult;
            var3 = var2.bind(var3)();
            var2 = null;
            if(!(var2 == var7)) { _fun0003_ip = 4; continue _fun0003 }
case 5:
            var6 = _closure1_slot4;
            var4 = var6.getChannelId;
            var7 = var4.bind(var6)();
case 4:
            var4 = var2 != var7;
            var8 = null;
            if(!var4) { _fun0003_ip = 6; continue _fun0003 }
case 7:
            var6 = _closure1_slot2;
            var4 = var6.getChannel;
            var8 = var4.bind(var6)(var7);
case 6:
            var2 = var2 != var8;
            if(!var2) { _fun0003_ip = 8; continue _fun0003 }
case 9:
            var7 = _closure1_slot3;
            var6 = var7.can;
            var4 = _closure1_slot5;
            var4 = var4.REQUEST_TO_SPEAK;
            var2 = var6.bind(var7)(var4, var8);
case 8:
            var4 = _closure1_slot0;
            var6 = _closure1_slot1;
            var1 = 5;
            var1 = var6[var1];
            var5 = var4.bind(var5)(var1);
            var4 = var5.getIsStagePawtectEnabled;
            var1 = 'shouldAgeVerifyToSpeakForCurrentUser';
            var1 = var4.bind(var5)(var1);
            if(!var1) { _fun0003_ip = 10; continue _fun0003 }
case 11:
            var1 = !var3;
case 10:
            if(!var1) { _fun0003_ip = 12; continue _fun0003 }
case 13:
            var1 = var2;
case 12:
            return var1;
        }
    };
    var3['shouldAgeVerifyToSpeakForCurrentUser'] = var4;
    var2 = function useShouldAgeVerifyToSpeakForCurrentUser(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var9 = arg1;
            var2 = null;
            if(!(var2 == var9)) { _fun0004_ip = 14; continue _fun0004 }
case 15:
            var3 = _closure1_slot4;
            var2 = var3.getChannelId;
            var9 = var2.bind(var3)();
case 14:
            var _closure2_slot0 = var9;
            var5 = _closure1_slot0;
            var6 = _closure1_slot1;
            var3 = 6;
            var3 = var6[var3];
            var4 = undefined;
            var8 = var5.bind(var4)(var3);
            var7 = var8.useStateFromStores;
            var10 = _closure1_slot3;
            var3 = new Array(2);
            var3[0] = var10;
            var2 = _closure1_slot2;
            var3[1] = var2;
            var2 = new Array(1);
            var2[0] = var9;
            var1 = function() {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                    var3 = _closure2_slot0;
                    var1 = null;
                    var3 = var1 != var3;
                    var5 = null;
                    if(!var3) { _fun0005_ip = 16; continue _fun0005 }
case 17:
                    var4 = _closure1_slot2;
                    var3 = var4.getChannel;
                    var2 = _closure2_slot0;
                    var5 = var3.bind(var4)(var2);
case 16:
                    var1 = var1 != var5;
                    if(!var1) { _fun0005_ip = 18; continue _fun0005 }
case 19:
                    var4 = _closure1_slot3;
                    var3 = var4.can;
                    var2 = _closure1_slot5;
                    var2 = var2.REQUEST_TO_SPEAK;
                    var1 = var3.bind(var4)(var2, var5);
case 18:
                    return var1;
                }
            };
            var2 = var7.bind(var8)(var3, var1, var2);
            var1 = 4;
            var1 = var6[var1];
            var3 = var5.bind(var4)(var1);
            var1 = var3.useIsVerifiedAdult;
            var3 = var1.bind(var3)();
            var1 = 5;
            var1 = var6[var1];
            var5 = var5.bind(var4)(var1);
            var4 = var5.useIsStagePawtectEnabled;
            var1 = 'useShouldAgeVerifyToSpeakForCurrentUser';
            var1 = var4.bind(var5)(var1);
            if(!var1) { _fun0004_ip = 20; continue _fun0004 }
case 21:
            var1 = !var3;
case 20:
            if(!var1) { _fun0004_ip = 22; continue _fun0004 }
case 23:
            var1 = var2;
case 22:
            return var1;
        }
    };
    var3['useShouldAgeVerifyToSpeakForCurrentUser'] = var2;
    return var1;
})();