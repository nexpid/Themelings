// app/modules/guild_member_verification/native/MemberVerificationModalActionCreators.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var1 = metroImportDefault;
    var _closure1_slot1 = var1;
    var _closure1_slot2 = var6;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var2 = {};
    var1 = true;
    var2['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var2);
    var1 = 0;
    var2 = var6[var1];
    var1 = undefined;
    var2 = var5.bind(var1)(var2);
    var7 = var2.MEMBER_VERIFICATION_TYPE;
    var _closure1_slot3 = var7;
    var2 = var2.IN_APP_MEMBER_VERIFICATION_MODAL_KEY;
    var _closure1_slot4 = var2;
    var2 = 1;
    var2 = var6[var2];
    var2 = var5.bind(var1)(var2);
    var2 = var2.AnalyticEvents;
    var _closure1_slot5 = var2;
    var2 = {};
    var7 = function openMemberVerificationModal(arg1, arg2) {
        var7 = arg1;
        var5 = _closure1_slot1;
        var3 = _closure1_slot2;
        var1 = 3;
        var4 = var3[var1];
        var1 = undefined;
        var6 = var5.bind(var1)(var4);
        var4 = var6.fetchVerificationForm;
        var4 = var4.bind(var6)(var7);
        var4 = 2;
        var4 = var3[var4];
        var9 = var5.bind(var1)(var4);
        var8 = var9.track;
        var4 = _closure1_slot5;
        var6 = var4.OPEN_MODAL;
        var4 = {};
        var10 = _closure1_slot3;
        var4['type'] = var10;
        var4['guild_id'] = var7;
        var4 = var8.bind(var9)(var6, var4);
        var4 = 4;
        var4 = var3[var4];
        var6 = var5.bind(var1)(var4);
        var5 = var6.pushLazy;
        var8 = _closure1_slot0;
        var4 = 6;
        var4 = var3[var4];
        var8 = var8.bind(var1)(var4);
        var4 = 5;
        var4 = var3[var4];
        var3 = var3.paths;
        var4 = var8.bind(var1)(var4, var3);
        var3 = {};
        var3['guildId'] = var7;
        var7 = arg2;
        var3['onClose'] = var7;
        var2 = _closure1_slot4;
        var2 = var5.bind(var6)(var4, var3, var2);
        return var1;
    };
    var2['openMemberVerificationModal'] = var7;
    var4 = function closeMemberVerificationModal() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var2 = arguments[0];
            var1 = undefined;
            if(!(var2 === var1)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var2 = false;
case 2:
            if(var2) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var3 = _closure1_slot1;
            var4 = _closure1_slot2;
            var2 = 2;
            var2 = var4[var2];
            var5 = var3.bind(var1)(var2);
            var4 = var5.track;
            var2 = _closure1_slot5;
            var3 = var2.MODAL_DISMISSED;
            var2 = {};
            var6 = _closure1_slot3;
            var2['type'] = var6;
            var2 = var4.bind(var5)(var3, var2);
case 4:
            var4 = _closure1_slot1;
            var5 = _closure1_slot2;
            var3 = 4;
            var3 = var5[var3];
            var4 = var4.bind(var1)(var3);
            var3 = var4.popWithKey;
            var2 = _closure1_slot4;
            var2 = var3.bind(var4)(var2);
            return var1;
        }
    };
    var2['closeMemberVerificationModal'] = var4;
    var4 = 7;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/guild_member_verification/native/MemberVerificationModalActionCreators.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();