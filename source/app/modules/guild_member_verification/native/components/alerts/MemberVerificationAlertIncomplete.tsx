// app/modules/guild_member_verification/native/components/alerts/MemberVerificationAlertIncomplete.tsx
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
    var8 = var6[var1];
    var4 = metroImportAll;
    var1 = undefined;
    var4 = var4.bind(var1)(var8);
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.jsx;
    var _closure1_slot5 = var7;
    var7 = var4.Fragment;
    var _closure1_slot6 = var7;
    var4 = var4.jsxs;
    var _closure1_slot7 = var4;
    var4 = 10;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/guild_member_verification/native/components/alerts/MemberVerificationAlertIncomplete.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function MemberVerificationAlertIncomplete(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var5 = arg1;
            var11 = var5.guildId;
            var _closure2_slot0 = var11;
            var10 = var5.onClose;
            var _closure2_slot1 = var10;
            var2 = null;
            var4 = Object.create(var2);
            var3 = 0;
            var4['guildId'] = var3;
            var4['onClose'] = var3;
            var21 = {};
            var20 = var5;
            var19 = var4;
            var6 = copyDataProperties(var21, var20, var19);
            var7 = _closure1_slot0;
            var4 = _closure1_slot2;
            var3 = 3;
            var3 = var4[var3];
            var4 = undefined;
            var12 = var7.bind(var4)(var3);
            var9 = var12.useStateFromStores;
            var3 = _closure1_slot4;
            var8 = new Array(1);
            var8[0] = var3;
            var7 = new Array(1);
            var7[0] = var11;
            var3 = function() {
                var3 = _closure1_slot4;
                var2 = var3.getJoinRequestGuild;
                var1 = _closure2_slot0;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var9 = var9.bind(var12)(var8, var3, var7);
            var8 = _closure1_slot3;
            var12 = var8.useCallback;
            var7 = new Array(2);
            var7[0] = var11;
            var7[1] = var10;
            var3 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var3 = _closure2_slot1;
                    var1 = null;
                    if(!(var1 != var3)) { _fun0002_ip = 2; continue _fun0002 }
case 3:
                    var3 = _closure2_slot1;
                    var1 = undefined;
                    var1 = var3.bind(var1)();
case 2:
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var1 = 4;
                    var3 = var3[var1];
                    var1 = undefined;
                    var4 = var4.bind(var1)(var3);
                    var3 = var4.openMemberVerificationModal;
                    var2 = _closure2_slot0;
                    var2 = var3.bind(var4)(var2);
                    return var1;
                }
            };
            var13 = var12.bind(var8)(var3, var7);
            var7 = var8.useCallback;
            var3 = new Array(2);
            var3[0] = var11;
            var3[1] = var10;
            var1 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var2 = _closure2_slot1;
                    var1 = null;
                    if(!(var1 != var2)) { _fun0003_ip = 2; continue _fun0003 }
case 3:
                    var2 = _closure2_slot1;
                    var1 = undefined;
                    var1 = var2.bind(var1)();
case 2:
                    var8 = _closure1_slot0;
                    var9 = _closure1_slot2;
                    var1 = 5;
                    var2 = var9[var1];
                    var1 = undefined;
                    var4 = var8.bind(var1)(var2);
                    var3 = var4.openMemberVerificationCancelPendingAlert;
                    var2 = {};
                    var5 = _closure2_slot0;
                    var2['guildId'] = var5;
                    var5 = 6;
                    var6 = var9[var5];
                    var6 = var8.bind(var1)(var6);
                    var10 = var6.intl;
                    var7 = var10.string;
                    var6 = var9[var5];
                    var6 = var8.bind(var1)(var6);
                    var6 = var6.t;
                    var6 = var6.fJwWVl;
                    var6 = var7.bind(var10)(var6);
                    var2['subtitleText'] = var6;
                    var6 = var9[var5];
                    var6 = var8.bind(var1)(var6);
                    var7 = var6.intl;
                    var6 = var7.string;
                    var5 = var9[var5];
                    var5 = var8.bind(var1)(var5);
                    var5 = var5.t;
                    var5 = var5.OQFlFB;
                    var5 = var6.bind(var7)(var5);
                    var2['confirmText'] = var5;
                    var2 = var3.bind(var4)(var2);
                    return var1;
                }
            };
            var11 = var7.bind(var8)(var1, var3);
            var3 = var2 == var9;
            var1 = undefined;
            if(var3) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var1 = var9.name;
case 4:
            if(!(var2 == var1)) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var7 = _closure1_slot0;
            var8 = _closure1_slot2;
            var1 = 6;
            var2 = var8[var1];
            var2 = var7.bind(var4)(var2);
            var3 = var2.intl;
            var2 = var3.string;
            var1 = var8[var1];
            var1 = var7.bind(var4)(var1);
            var1 = var1.t;
            var1 = var1.0sTyER;
            var7 = var2.bind(var3)(var1);
            _fun0001_ip = 8; continue _fun0001;
case 6:
            var2 = _closure1_slot0;
            var10 = _closure1_slot2;
            var1 = 6;
            var3 = var10[var1];
            var3 = var2.bind(var4)(var3);
            var8 = var3.intl;
            var3 = var8.formatToPlainString;
            var1 = var10[var1];
            var1 = var2.bind(var4)(var1);
            var1 = var1.t;
            var2 = var1.f5Jaw8;
            var1 = {};
            var9 = var9.name;
            var1['guildName'] = var9;
            var7 = var3.bind(var8)(var2, var1);
case 8:
            var3 = _closure1_slot5;
            var2 = _closure1_slot1;
            var16 = _closure1_slot2;
            var1 = 7;
            var1 = var16[var1];
            var2 = var2.bind(var4)(var1);
            var1 = {};
            var21 = var1;
            var20 = var6;
            var6 = copyDataProperties(var21, var20);
            var15 = _closure1_slot0;
            var6 = 8;
            var6 = var16[var6];
            var6 = var15.bind(var4)(var6);
            var8 = var6.ListViewIcon;
            var6 = 'icon';
            var1[var6] = var8;
            var6 = 'header';
            var1[var6] = var7;
            var7 = _closure1_slot7;
            var6 = _closure1_slot6;
            var5 = {};
            var9 = 9;
            var8 = var16[var9];
            var8 = var15.bind(var4)(var8);
            var10 = var8.Button;
            var8 = {};
            var12 = 'secondary';
            var8['variant'] = var12;
            var12 = 6;
            var14 = var16[var12];
            var14 = var15.bind(var4)(var14);
            var18 = var14.intl;
            var17 = var18.string;
            var14 = var16[var12];
            var14 = var15.bind(var4)(var14);
            var14 = var14.t;
            var14 = var14.h3aGmp;
            var14 = var17.bind(var18)(var14);
            var8['text'] = var14;
            var8['onPress'] = var13;
            var10 = var3.bind(var4)(var10, var8);
            var8 = new Array(2);
            var8[0] = var10;
            var9 = var16[var9];
            var9 = var15.bind(var4)(var9);
            var10 = var9.Button;
            var9 = {};
            var13 = var16[var12];
            var13 = var15.bind(var4)(var13);
            var14 = var13.intl;
            var13 = var14.string;
            var12 = var16[var12];
            var12 = var15.bind(var4)(var12);
            var12 = var12.t;
            var12 = var12.OQFlFB;
            var12 = var13.bind(var14)(var12);
            var9['text'] = var12;
            var12 = 'destructive';
            var9['variant'] = var12;
            var9['onPress'] = var11;
            var9 = var3.bind(var4)(var10, var9);
            var8[1] = var9;
            var5['children'] = var8;
            var6 = var7.bind(var4)(var6, var5);
            var5 = 'buttons';
            var1[var5] = var6;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();