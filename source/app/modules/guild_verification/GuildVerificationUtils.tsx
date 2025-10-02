// app/modules/guild_verification/GuildVerificationUtils.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var6;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var4);
    var1 = 0;
    var7 = var6[var1];
    var4 = metroImportDefault;
    var1 = undefined;
    var4 = var4.bind(var1)(var7);
    var _closure1_slot2 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.GuildFeatures;
    var _closure1_slot3 = var7;
    var4 = var4.Routes;
    var _closure1_slot4 = var4;
    var4 = 5;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/guild_verification/GuildVerificationUtils.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var4 = arg1;
            var7 = var4.features;
            var3 = null;
            var5 = var3 == var7;
            var1 = undefined;
            if(var5) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var6 = var7.includes;
            var5 = _closure1_slot3;
            var5 = var5.MEMBER_VERIFICATION_GATE_ENABLED;
            var1 = var6.bind(var7)(var5);
case 2:
            if(!var1) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var5 = var4.features;
            var3 = var3 == var5;
            var2 = undefined;
            if(var3) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var4 = var5.includes;
            var3 = _closure1_slot3;
            var3 = var3.MEMBER_VERIFICATION_MANUAL_APPROVAL;
            var2 = var4.bind(var5)(var3);
case 6:
            var1 = var2;
case 4:
            return var1;
        }
    };
    var3['inviteGuildHasPendingMemberDisabledVerification'] = var4;
    var2 = function(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var5 = arg1;
            var3 = _closure1_slot2;
            var2 = var3.getRequest;
            var2 = var2.bind(var3)(var5);
            var3 = null;
            if(!(var3 != var2)) { _fun0002_ip = 8; continue _fun0002 }
case 9:
            var3 = var2.applicationStatus;
            var6 = _closure1_slot0;
            var4 = _closure1_slot1;
            var2 = 2;
            var2 = var4[var2];
            var4 = undefined;
            var2 = var6.bind(var4)(var2);
            var2 = var2.GuildJoinRequestApplicationStatuses;
            var2 = var2.STARTED;
            if(!(var3 === var2)) { _fun0002_ip = 10; continue _fun0002 }
case 8:
            var6 = _closure1_slot0;
            var3 = _closure1_slot1;
            var2 = 4;
            var3 = var3[var2];
            var2 = undefined;
            var3 = var6.bind(var2)(var3);
            var2 = var3.openMemberVerificationModal;
            var2 = var2.bind(var3)(var5);
            _fun0002_ip = 11; continue _fun0002;
case 10:
            var3 = _closure1_slot0;
            var6 = _closure1_slot1;
            var2 = 3;
            var2 = var6[var2];
            var3 = var3.bind(var4)(var2);
            var2 = var3.transitionTo;
            var4 = _closure1_slot4;
            var1 = var4.GUILD_MEMBER_VERIFICATION;
            var1 = var1.bind(var4)(var5);
            var1 = var2.bind(var3)(var1);
case 11:
            var1 = undefined;
            return var1;
        }
    };
    var3['openVerificationModalOrTransitionToApplication'] = var2;
    return var1;
})();