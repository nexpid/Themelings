// app/modules/premium/referral_program/native/ReferralProgramShareActionSheetUtils.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var6 = dependencyMap;
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
    var _closure1_slot0 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.UserRowModes;
    var _closure1_slot1 = var4;
    var4 = 2;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/premium/referral_program/native/ReferralProgramShareActionSheetUtils.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function buildReferralUserRow(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var6 = arg1;
            var3 = var6.eligibleUsers;
            var4 = var6.row;
            var7 = var6.selectedUserIds;
            var5 = var6.resendUsers;
            var2 = var6.referralsRemaining;
            var1 = var6.selectedNotResendUsers;
            var9 = var6.onSelectUser;
            var10 = var3[var4];
            var6 = null;
            if(!(var6 == var10)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var6 = undefined;
            return var6;
case 2:
            var1 = var1.length;
            var6 = var1 >= var2;
            var2 = var7.includes;
            var1 = var10.id;
            var8 = var2.bind(var7)(var1);
            var2 = var5.has;
            var1 = var10.id;
            var7 = var2.bind(var5)(var1);
            var1 = {};
            var2 = 'user';
            var1['type'] = var2;
            var2 = {};
            var13 = _closure1_slot0;
            var12 = var13.getRelationshipType;
            var11 = var10.id;
            var11 = var12.bind(var13)(var11);
            var2['type'] = var11;
            var2['user'] = var10;
            var2['onPress'] = var9;
            var2['selected'] = var8;
            if(!var6) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var6 = !var8;
case 4:
            if(!var6) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var6 = !var7;
case 6:
            var2['disabled'] = var6;
            var5 = _closure1_slot1;
            var5 = var5.TOGGLE;
            var2['mode'] = var5;
            var5 = 0;
            var5 = var5 === var4;
            var2['start'] = var5;
            var5 = var3.length;
            var3 = 1;
            var3 = var5 - var3;
            var3 = var4 === var3;
            var2['end'] = var3;
            var1['props'] = var2;
            return var1;
        }
    };
    var3['buildReferralUserRow'] = var2;
    return var1;
})();