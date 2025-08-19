// app/modules/guild_automod/native/ModerateUserActionSheet.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var8 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var8;
    var _closure1_slot2 = var6;
    var1 = global;
    var9 = var1.Object;
    var7 = var9.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var9)(var3, var1, var4);
    var1 = 0;
    var7 = var6[var1];
    var4 = metroImportAll;
    var1 = undefined;
    var7 = var4.bind(var1)(var7);
    var _closure1_slot3 = var7;
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var9 = var4.StyleSheet;
    var4 = 2;
    var4 = var6[var4];
    var4 = var8.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var8.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var8.bind(var1)(var4);
    var _closure1_slot6 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var8.bind(var1)(var4);
    var _closure1_slot7 = var4;
    var4 = 6;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.Permissions;
    var _closure1_slot8 = var4;
    var4 = 7;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var8 = var4.jsx;
    var _closure1_slot9 = var8;
    var4 = var4.jsxs;
    var _closure1_slot10 = var4;
    var8 = var9.create;
    var4 = {};
    var10 = {'padding': 16, 'gap': 16};
    var4['container'] = var10;
    var10 = {};
    var11 = 'flex-start';
    var10['justifyContent'] = var11;
    var4['memberRoles'] = var10;
    var4 = var8.bind(var9)(var4);
    var _closure1_slot11 = var4;
    var4 = var7.memo;
    var2 = function(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var1 = arg1;
            var11 = var1.user;
            var _closure2_slot0 = var11;
            var14 = var1.guild;
            var _closure2_slot1 = var14;
            var5 = undefined;
            var _closure2_slot3 = var5;
            var _closure2_slot4 = var5;
            var2 = _closure1_slot0;
            var1 = _closure1_slot2;
            var7 = 8;
            var1 = var1[var7];
            var8 = var2.bind(var5)(var1);
            var4 = var8.useStateFromStores;
            var1 = _closure1_slot4;
            var3 = new Array(1);
            var3[0] = var1;
            var2 = new Array(2);
            var2[0] = var11;
            var2[1] = var14;
            var1 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var4 = _closure1_slot4;
                    var3 = var4.getMember;
                    var5 = _closure2_slot1;
                    var2 = null;
                    var5 = var2 == var5;
                    var2 = undefined;
                    if(var5) { _fun0002_ip = 40; continue _fun0002 }
 31:
                    var5 = _closure2_slot1;
                    var2 = var5.id;
 40:
                    var1 = _closure2_slot0;
                    var1 = var1.id;
                    var1 = var3.bind(var4)(var2, var1);
                    return var1;
                }
            };
            var2 = var4.bind(var8)(var3, var1, var2);
            var _closure2_slot2 = var2;
            var1 = null;
            if(!(var1 == var2)) { _fun0001_ip = 115; continue _fun0001 }
 109:
            var13 = new Array(0);
            _fun0001_ip = 121; continue _fun0001;
 115:
            var13 = var2.roles;
 121:
            var4 = _closure1_slot0;
            var3 = _closure1_slot2;
            var3 = var3[var7];
            var9 = var4.bind(var5)(var3);
            var8 = var9.useStateFromStoresObject;
            var3 = _closure1_slot6;
            var7 = new Array(3);
            var7[0] = var3;
            var3 = _closure1_slot7;
            var7[1] = var3;
            var3 = _closure1_slot5;
            var7[2] = var3;
            var4 = new Array(2);
            var4[0] = var11;
            var4[1] = var14;
            var3 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                    var1 = {};
                    var2 = _closure2_slot1;
                    var4 = null;
                    var2 = var4 != var2;
                    if(!var2) { _fun0003_ip = 63; continue _fun0003 }
 18:
                    var7 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var5 = 9;
                    var6 = var6[var5];
                    var5 = undefined;
                    var8 = var7.bind(var5)(var6);
                    var7 = var8.canKickMember;
                    var6 = _closure2_slot0;
                    var5 = _closure2_slot1;
                    var2 = var7.bind(var8)(var6, var5);
 63:
                    var1['canKickUser'] = var2;
                    var2 = _closure2_slot1;
                    var2 = var4 != var2;
                    if(!var2) { _fun0003_ip = 124; continue _fun0003 }
 79:
                    var7 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var5 = 9;
                    var6 = var6[var5];
                    var5 = undefined;
                    var8 = var7.bind(var5)(var6);
                    var7 = var8.canBanMember;
                    var6 = _closure2_slot0;
                    var5 = _closure2_slot1;
                    var2 = var7.bind(var8)(var6, var5);
 124:
                    var1['canBanUser'] = var2;
                    var2 = _closure2_slot1;
                    var2 = var4 != var2;
                    if(!var2) { _fun0003_ip = 178; continue _fun0003 }
 140:
                    var9 = _closure1_slot6;
                    var8 = var9.canManageUser;
                    var5 = _closure1_slot8;
                    var7 = var5.MANAGE_NICKNAMES;
                    var6 = _closure2_slot0;
                    var5 = _closure2_slot1;
                    var2 = var8.bind(var9)(var7, var6, var5);
 178:
                    var1['canChangeNick'] = var2;
                    var2 = _closure2_slot1;
                    var2 = var4 != var2;
                    if(!var2) { _fun0003_ip = 227; continue _fun0003 }
 194:
                    var8 = _closure1_slot6;
                    var7 = var8.can;
                    var5 = _closure1_slot8;
                    var6 = var5.MANAGE_ROLES;
                    var5 = _closure2_slot1;
                    var2 = var7.bind(var8)(var6, var5);
 227:
                    var1['canManageRoles'] = var2;
                    var2 = _closure2_slot1;
                    var2 = var4 != var2;
                    if(!var2) { _fun0003_ip = 327; continue _fun0003 }
 243:
                    var6 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var4 = 10;
                    var5 = var5[var4];
                    var4 = undefined;
                    var7 = var6.bind(var4)(var5);
                    var6 = var7.canToggleCommunicationDisableOnUser;
                    var4 = _closure2_slot1;
                    var5 = var4.id;
                    var3 = _closure2_slot0;
                    var4 = var3.id;
                    var9 = _closure1_slot7;
                    var3 = new Array(3);
                    var3[0] = var9;
                    var9 = _closure1_slot5;
                    var3[1] = var9;
                    var8 = _closure1_slot6;
                    var3[2] = var8;
                    var2 = var6.bind(var7)(var5, var4, var3);
 327:
                    var1['canModerateMembers'] = var2;
                    return var1;
                }
            };
            var4 = var8.bind(var9)(var7, var3, var4);
            var7 = var4.canKickUser;
            var3 = var4.canBanUser;
            var16 = var4.canChangeNick;
            var15 = var4.canManageRoles;
            var4 = var4.canModerateMembers;
            if(!(var1 != var14)) { _fun0001_ip = 1406; continue _fun0001 }
 235:
            if(!(var1 != var2)) { _fun0001_ip = 1406; continue _fun0001 }
 242:
            var9 = _closure1_slot1;
            var12 = _closure1_slot2;
            var8 = 11;
            var8 = var12[var8];
            var18 = var9.bind(var5)(var8);
            var17 = var18.getName;
            var8 = var14.id;
            var20 = var17.bind(var18)(var8, var5, var11);
            var8 = 12;
            var8 = var12[var8];
            var8 = var9.bind(var5)(var8);
            var8 = var8.hideActionSheet;
            _closure2_slot3 = var8;
            var12 = new Array(0);
            var8 = var1 != var2;
            if(!var8) { _fun0001_ip = 337; continue _fun0001 }
 313:
            var9 = var7;
            if(var7) { _fun0001_ip = 322; continue _fun0001 }
 319:
            var9 = var3;
 322:
            if(var9) { _fun0001_ip = 328; continue _fun0001 }
 325:
            var9 = var16;
 328:
            if(var9) { _fun0001_ip = 334; continue _fun0001 }
 331:
            var9 = var15;
 334:
            var8 = var9;
 337:
            if(!var8) { _fun0001_ip = 353; continue _fun0001 }
 340:
            var9 = var11.isNonUserBot;
            var9 = var9.bind(var11)();
            var8 = !var9;
 353:
            if(!var8) { _fun0001_ip = 524; continue _fun0001 }
 359:
            var9 = var12.push;
            var15 = _closure1_slot9;
            var19 = _closure1_slot0;
            var21 = _closure1_slot2;
            var16 = 13;
            var8 = var21[var16];
            var8 = var19.bind(var5)(var8);
            var11 = var8.ActionSheetRow;
            var8 = {};
            var17 = 14;
            var18 = var21[var17];
            var18 = var19.bind(var5)(var18);
            var22 = var18.intl;
            var18 = var22.string;
            var17 = var21[var17];
            var17 = var19.bind(var5)(var17);
            var17 = var17.t;
            var17 = var17.HxrBOT;
            var17 = var18.bind(var22)(var17);
            var8['label'] = var17;
            var16 = var21[var16];
            var16 = var19.bind(var5)(var16);
            var16 = var16.ActionSheetRow;
            var17 = var16.Icon;
            var16 = {};
            var18 = 15;
            var18 = var21[var18];
            var18 = var19.bind(var5)(var18);
            var18 = var18.SettingsIcon;
            var16['IconComponent'] = var18;
            var16 = var15.bind(var5)(var17, var16);
            var8['icon'] = var16;
            var16 = function onPress() {
                var2 = _closure2_slot3;
                var1 = undefined;
                var2 = var2.bind(var1)();
                var5 = _closure1_slot1;
                var2 = _closure1_slot2;
                var4 = 16;
                var4 = var2[var4];
                var5 = var5.bind(var1)(var4);
                var4 = var5.pushLazy;
                var8 = _closure1_slot0;
                var3 = 18;
                var3 = var2[var3];
                var8 = var8.bind(var1)(var3);
                var3 = 17;
                var3 = var2[var3];
                var2 = var2.paths;
                var3 = var8.bind(var1)(var3, var2);
                var2 = {};
                var8 = _closure2_slot0;
                var8 = var8.id;
                var2['userId'] = var8;
                var7 = _closure2_slot1;
                var7 = var7.id;
                var2['guildId'] = var7;
                var7 = function onClose() {
                    var3 = _closure1_slot1;
                    var4 = _closure1_slot2;
                    var1 = 16;
                    var2 = var4[var1];
                    var1 = undefined;
                    var5 = var3.bind(var1)(var2);
                    var2 = var5.pop;
                    var2 = var2.bind(var5)();
                    var2 = 19;
                    var2 = var4[var2];
                    var3 = var3.bind(var1)(var2);
                    var2 = {};
                    var5 = _closure2_slot1;
                    var2['guild'] = var5;
                    var4 = _closure2_slot0;
                    var2['user'] = var4;
                    var2 = var3.bind(var1)(var2);
                    return var1;
                };
                var2['onClose'] = var7;
                var6 = function onRemove() {
                    var3 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var1 = 16;
                    var2 = var2[var1];
                    var1 = undefined;
                    var3 = var3.bind(var1)(var2);
                    var2 = var3.pop;
                    var2 = var2.bind(var3)();
                    return var1;
                };
                var2['onRemove'] = var6;
                var2 = var4.bind(var5)(var3, var2);
                return var1;
            };
            var8['onPress'] = var16;
            var8 = var15.bind(var5)(var11, var8);
            var8 = var9.bind(var12)(var8);
 524:
            if(!(var1 != var2)) { _fun0001_ip = 765; continue _fun0001 }
 531:
            if(!var4) { _fun0001_ip = 765; continue _fun0001 }
 537:
            var9 = _closure1_slot0;
            var4 = _closure1_slot2;
            var8 = 20;
            var8 = var4[var8];
            var11 = var9.bind(var5)(var8);
            var8 = var11.isMemberCommunicationDisabled;
            var16 = var8.bind(var11)(var2);
            _closure2_slot4 = var16;
            var8 = var12.push;
            var11 = _closure1_slot9;
            var15 = 13;
            var4 = var4[var15];
            var4 = var9.bind(var5)(var4);
            var9 = var4.ActionSheetRow;
            var4 = {};
            var21 = _closure1_slot0;
            var22 = _closure1_slot2;
            var17 = 14;
            var18 = var22[var17];
            var18 = var21.bind(var5)(var18);
            var19 = var18.intl;
            var18 = var19.string;
            var17 = var22[var17];
            var17 = var21.bind(var5)(var17);
            var17 = var17.t;
            if(var16) { _fun0001_ip = 661; continue _fun0001 }
 648:
            var16 = var17.xpsADQ;
            var16 = var18.bind(var19)(var16);
            _fun0001_ip = 672; continue _fun0001;
 661:
            var17 = var17.qXtNtb;
            var16 = var18.bind(var19)(var17);
 672:
            var4['label'] = var16;
            var17 = _closure1_slot9;
            var19 = _closure1_slot0;
            var21 = _closure1_slot2;
            var15 = var21[var15];
            var15 = var19.bind(var5)(var15);
            var15 = var15.ActionSheetRow;
            var16 = var15.Icon;
            var15 = {};
            var18 = 21;
            var18 = var21[var18];
            var18 = var19.bind(var5)(var18);
            var18 = var18.ClockWarningIcon;
            var15['IconComponent'] = var18;
            var15 = var17.bind(var5)(var16, var15);
            var4['icon'] = var15;
            var15 = function onPress() {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                    var2 = _closure2_slot3;
                    var1 = undefined;
                    var2 = var2.bind(var1)();
                    var2 = _closure2_slot4;
                    var4 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var3 = 22;
                    var3 = var6[var3];
                    var4 = var4.bind(var1)(var3);
                    if(var2) { _fun0004_ip = 80; continue _fun0004 }
 43:
                    var3 = var4.openDisableCommunication;
                    var2 = {};
                    var6 = _closure2_slot2;
                    var7 = var6.guildId;
                    var2['guildId'] = var7;
                    var6 = var6.userId;
                    var2['userId'] = var6;
                    var2 = var3.bind(var4)(var2);
                    _fun0004_ip = 115; continue _fun0004;
 80:
                    var3 = var4.openEnableCommunication;
                    var2 = {};
                    var5 = _closure2_slot2;
                    var6 = var5.guildId;
                    var2['guildId'] = var6;
                    var5 = var5.userId;
                    var2['userId'] = var5;
                    var2 = var3.bind(var4)(var2);
 115:
                    return var1;
                }
            };
            var4['onPress'] = var15;
            var4 = var11.bind(var5)(var9, var4);
            var4 = var8.bind(var12)(var4);
 765:
            var4 = var1 != var2;
            if(!var4) { _fun0001_ip = 775; continue _fun0001 }
 772:
            var4 = var7;
 775:
            if(!var4) { _fun0001_ip = 954; continue _fun0001 }
 781:
            var7 = var12.push;
            var9 = _closure1_slot9;
            var17 = _closure1_slot0;
            var18 = _closure1_slot2;
            var11 = 13;
            var4 = var18[var11];
            var4 = var17.bind(var5)(var4);
            var8 = var4.ActionSheetRow;
            var4 = {};
            var15 = 14;
            var16 = var18[var15];
            var16 = var17.bind(var5)(var16);
            var19 = var16.intl;
            var16 = var19.string;
            var15 = var18[var15];
            var15 = var17.bind(var5)(var15);
            var15 = var15.t;
            var15 = var15.3glT6e;
            var15 = var16.bind(var19)(var15);
            var4['label'] = var15;
            var11 = var18[var11];
            var11 = var17.bind(var5)(var11);
            var11 = var11.ActionSheetRow;
            var15 = var11.Icon;
            var11 = {};
            var16 = 23;
            var16 = var18[var16];
            var16 = var17.bind(var5)(var16);
            var16 = var16.UserMinusIcon;
            var11['IconComponent'] = var16;
            var11 = var9.bind(var5)(var15, var11);
            var4['icon'] = var11;
            var11 = 'danger';
            var4['variant'] = var11;
            var11 = function onPress() {
                var3 = _closure1_slot1;
                var2 = _closure1_slot2;
                var1 = 24;
                var2 = var2[var1];
                var1 = undefined;
                var3 = var3.bind(var1)(var2);
                var2 = {};
                var5 = _closure2_slot1;
                var5 = var5.id;
                var2['guildId'] = var5;
                var4 = _closure2_slot0;
                var4 = var4.id;
                var2['userId'] = var4;
                var4 = function cancelButtonCallback() {
                    var2 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var1 = 19;
                    var1 = var3[var1];
                    var3 = undefined;
                    var2 = var2.bind(var3)(var1);
                    var1 = {};
                    var5 = _closure2_slot1;
                    var1['guild'] = var5;
                    var4 = _closure2_slot0;
                    var1['user'] = var4;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var2['cancelButtonCallback'] = var4;
                var2 = var3.bind(var1)(var2);
                return var1;
            };
            var4['onPress'] = var11;
            var4 = var9.bind(var5)(var8, var4);
            var4 = var7.bind(var12)(var4);
 954:
            var2 = var1 != var2;
            if(!var2) { _fun0001_ip = 964; continue _fun0001 }
 961:
            var2 = var3;
 964:
            if(!var2) { _fun0001_ip = 1143; continue _fun0001 }
 970:
            var3 = var12.push;
            var7 = _closure1_slot9;
            var15 = _closure1_slot0;
            var16 = _closure1_slot2;
            var8 = 13;
            var2 = var16[var8];
            var2 = var15.bind(var5)(var2);
            var4 = var2.ActionSheetRow;
            var2 = {};
            var9 = 14;
            var11 = var16[var9];
            var11 = var15.bind(var5)(var11);
            var17 = var11.intl;
            var11 = var17.string;
            var9 = var16[var9];
            var9 = var15.bind(var5)(var9);
            var9 = var9.t;
            var9 = var9.5MBJ5O;
            var9 = var11.bind(var17)(var9);
            var2['label'] = var9;
            var8 = var16[var8];
            var8 = var15.bind(var5)(var8);
            var8 = var8.ActionSheetRow;
            var9 = var8.Icon;
            var8 = {};
            var11 = 25;
            var11 = var16[var11];
            var11 = var15.bind(var5)(var11);
            var11 = var11.HammerIcon;
            var8['IconComponent'] = var11;
            var8 = var7.bind(var5)(var9, var8);
            var2['icon'] = var8;
            var8 = 'danger';
            var2['variant'] = var8;
            var8 = function onPress() {
                var3 = _closure1_slot1;
                var2 = _closure1_slot2;
                var1 = 26;
                var2 = var2[var1];
                var1 = undefined;
                var3 = var3.bind(var1)(var2);
                var2 = {};
                var5 = _closure2_slot1;
                var5 = var5.id;
                var2['guildId'] = var5;
                var4 = _closure2_slot0;
                var4 = var4.id;
                var2['userId'] = var4;
                var4 = function cancelButtonCallback() {
                    var2 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var1 = 19;
                    var1 = var3[var1];
                    var3 = undefined;
                    var2 = var2.bind(var3)(var1);
                    var1 = {};
                    var5 = _closure2_slot1;
                    var1['guild'] = var5;
                    var4 = _closure2_slot0;
                    var1['user'] = var4;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var2['cancelButtonCallback'] = var4;
                var2 = var3.bind(var1)(var2);
                return var1;
            };
            var2['onPress'] = var8;
            var2 = var7.bind(var5)(var4, var2);
            var2 = var3.bind(var12)(var2);
 1143:
            var4 = _closure1_slot10;
            var8 = _closure1_slot0;
            var11 = _closure1_slot2;
            var2 = 27;
            var2 = var11[var2];
            var2 = var8.bind(var5)(var2);
            var3 = var2.BottomSheet;
            var2 = {};
            var9 = _closure1_slot9;
            var7 = 28;
            var7 = var11[var7];
            var7 = var8.bind(var5)(var7);
            var15 = var7.BottomSheetTitleHeader;
            var7 = {};
            var16 = 14;
            var17 = var11[var16];
            var17 = var8.bind(var5)(var17);
            var19 = var17.intl;
            var18 = var19.formatToPlainString;
            var16 = var11[var16];
            var16 = var8.bind(var5)(var16);
            var16 = var16.t;
            var17 = var16.792QKS;
            var16 = {};
            var16['nick'] = var20;
            var16 = var18.bind(var19)(var17, var16);
            var7['title'] = var16;
            var7 = var9.bind(var5)(var15, var7);
            var2['header'] = var7;
            var15 = _closure1_slot11;
            var7 = var15.container;
            var2['bodyStyles'] = var7;
            var7 = _closure1_slot1;
            var6 = 29;
            var6 = var11[var6];
            var7 = var7.bind(var5)(var6);
            var6 = {};
            var16 = var15.memberRoles;
            var15 = new Array(1);
            var15[0] = var16;
            var6['style'] = var15;
            var6['guild'] = var14;
            var6['userRoles'] = var13;
            var7 = var9.bind(var5)(var7, var6);
            var6 = new Array(2);
            var6[0] = var7;
            var7 = 30;
            var7 = var11[var7];
            var7 = var8.bind(var5)(var7);
            var8 = var7.TableRowGroup;
            var7 = {};
            var11 = var12.map;
            var10 = function(arg1, arg2) {
                var5 = _closure1_slot9;
                var1 = _closure1_slot3;
                var4 = var1.Fragment;
                var3 = {};
                var1 = arg1;
                var3['children'] = var1;
                var1 = global;
                var1 = var1.HermesInternal;
                var6 = var1.concat;
                var2 = 'action_';
                var1 = arg2;
                var2 = var6.bind(var2)(var1);
                var1 = undefined;
                var1 = var5.bind(var1)(var4, var3, var2);
                return var1;
            };
            var10 = var11.bind(var12)(var10);
            var7['children'] = var10;
            var7 = var9.bind(var5)(var8, var7);
            var6[1] = var7;
            var2['children'] = var6;
            var2 = var4.bind(var5)(var3, var2);
            return var2;
 1406:
            return var1;
        }
    };
    var2 = var4.bind(var7)(var2);
    var4 = 31;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/guild_automod/native/ModerateUserActionSheet.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();