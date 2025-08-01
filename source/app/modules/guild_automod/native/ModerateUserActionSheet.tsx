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
            if(!(var1 != var14)) { _fun0001_ip = 1450; continue _fun0001 }
 235:
            if(!(var1 != var2)) { _fun0001_ip = 1450; continue _fun0001 }
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
            if(!var8) { _fun0001_ip = 540; continue _fun0001 }
 359:
            var9 = var12.push;
            var15 = _closure1_slot9;
            var19 = _closure1_slot0;
            var21 = _closure1_slot2;
            var8 = 13;
            var8 = var21[var8];
            var8 = var19.bind(var5)(var8);
            var11 = var8.TableRow;
            var8 = {};
            var16 = 14;
            var17 = var21[var16];
            var17 = var19.bind(var5)(var17);
            var18 = var17.intl;
            var17 = var18.string;
            var16 = var21[var16];
            var16 = var19.bind(var5)(var16);
            var16 = var16.t;
            var16 = var16.HxrBOT;
            var16 = var17.bind(var18)(var16);
            var8['label'] = var16;
            var19 = _closure1_slot1;
            var16 = 15;
            var16 = var21[var16];
            var17 = var19.bind(var5)(var16);
            var16 = {};
            var18 = 16;
            var18 = var21[var18];
            var18 = var19.bind(var5)(var18);
            var16['source'] = var18;
            var18 = 17;
            var18 = var21[var18];
            var18 = var19.bind(var5)(var18);
            var18 = var18.unsafe_rawColors;
            var18 = var18.PRIMARY_400;
            var16['color'] = var18;
            var16 = var15.bind(var5)(var17, var16);
            var8['icon'] = var16;
            var16 = function onPress() {
                var2 = _closure2_slot3;
                var1 = undefined;
                var2 = var2.bind(var1)();
                var5 = _closure1_slot1;
                var2 = _closure1_slot2;
                var4 = 18;
                var4 = var2[var4];
                var5 = var5.bind(var1)(var4);
                var4 = var5.pushLazy;
                var8 = _closure1_slot0;
                var3 = 20;
                var3 = var2[var3];
                var8 = var8.bind(var1)(var3);
                var3 = 19;
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
                    var1 = 18;
                    var2 = var4[var1];
                    var1 = undefined;
                    var5 = var3.bind(var1)(var2);
                    var2 = var5.pop;
                    var2 = var2.bind(var5)();
                    var2 = 21;
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
                    var1 = 18;
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
 540:
            if(!(var1 != var2)) { _fun0001_ip = 793; continue _fun0001 }
 547:
            if(!var4) { _fun0001_ip = 793; continue _fun0001 }
 553:
            var9 = _closure1_slot0;
            var16 = _closure1_slot2;
            var4 = 22;
            var4 = var16[var4];
            var8 = var9.bind(var5)(var4);
            var4 = var8.isMemberCommunicationDisabled;
            var15 = var4.bind(var8)(var2);
            _closure2_slot4 = var15;
            var8 = var12.push;
            var11 = _closure1_slot9;
            var4 = 13;
            var4 = var16[var4];
            var4 = var9.bind(var5)(var4);
            var9 = var4.TableRow;
            var4 = {};
            var19 = _closure1_slot0;
            var21 = _closure1_slot2;
            var16 = 14;
            var17 = var21[var16];
            var17 = var19.bind(var5)(var17);
            var18 = var17.intl;
            var17 = var18.string;
            var16 = var21[var16];
            var16 = var19.bind(var5)(var16);
            var16 = var16.t;
            if(var15) { _fun0001_ip = 677; continue _fun0001 }
 664:
            var15 = var16.xpsADQ;
            var15 = var17.bind(var18)(var15);
            _fun0001_ip = 688; continue _fun0001;
 677:
            var16 = var16.qXtNtb;
            var15 = var17.bind(var18)(var16);
 688:
            var4['label'] = var15;
            var17 = _closure1_slot9;
            var19 = _closure1_slot1;
            var21 = _closure1_slot2;
            var15 = 15;
            var15 = var21[var15];
            var16 = var19.bind(var5)(var15);
            var15 = {};
            var18 = 23;
            var18 = var21[var18];
            var18 = var19.bind(var5)(var18);
            var15['source'] = var18;
            var18 = 17;
            var18 = var21[var18];
            var18 = var19.bind(var5)(var18);
            var18 = var18.unsafe_rawColors;
            var18 = var18.RED_400;
            var15['color'] = var18;
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
                    var3 = 24;
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
 793:
            var4 = var1 != var2;
            if(!var4) { _fun0001_ip = 803; continue _fun0001 }
 800:
            var4 = var7;
 803:
            if(!var4) { _fun0001_ip = 990; continue _fun0001 }
 809:
            var7 = var12.push;
            var9 = _closure1_slot9;
            var17 = _closure1_slot0;
            var18 = _closure1_slot2;
            var4 = 13;
            var4 = var18[var4];
            var4 = var17.bind(var5)(var4);
            var8 = var4.TableRow;
            var4 = {};
            var11 = 14;
            var15 = var18[var11];
            var15 = var17.bind(var5)(var15);
            var16 = var15.intl;
            var15 = var16.string;
            var11 = var18[var11];
            var11 = var17.bind(var5)(var11);
            var11 = var11.t;
            var11 = var11.3glT6e;
            var11 = var15.bind(var16)(var11);
            var4['label'] = var11;
            var17 = _closure1_slot1;
            var11 = 15;
            var11 = var18[var11];
            var15 = var17.bind(var5)(var11);
            var11 = {};
            var16 = 25;
            var16 = var18[var16];
            var16 = var17.bind(var5)(var16);
            var11['source'] = var16;
            var16 = 17;
            var16 = var18[var16];
            var16 = var17.bind(var5)(var16);
            var16 = var16.unsafe_rawColors;
            var16 = var16.RED_400;
            var11['color'] = var16;
            var11 = var9.bind(var5)(var15, var11);
            var4['icon'] = var11;
            var11 = function onPress() {
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
                    var1 = 21;
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
 990:
            var2 = var1 != var2;
            if(!var2) { _fun0001_ip = 1000; continue _fun0001 }
 997:
            var2 = var3;
 1000:
            if(!var2) { _fun0001_ip = 1187; continue _fun0001 }
 1006:
            var3 = var12.push;
            var7 = _closure1_slot9;
            var15 = _closure1_slot0;
            var16 = _closure1_slot2;
            var2 = 13;
            var2 = var16[var2];
            var2 = var15.bind(var5)(var2);
            var4 = var2.TableRow;
            var2 = {};
            var8 = 14;
            var9 = var16[var8];
            var9 = var15.bind(var5)(var9);
            var11 = var9.intl;
            var9 = var11.string;
            var8 = var16[var8];
            var8 = var15.bind(var5)(var8);
            var8 = var8.t;
            var8 = var8.5MBJ5O;
            var8 = var9.bind(var11)(var8);
            var2['label'] = var8;
            var15 = _closure1_slot1;
            var8 = 15;
            var8 = var16[var8];
            var9 = var15.bind(var5)(var8);
            var8 = {};
            var11 = 27;
            var11 = var16[var11];
            var11 = var15.bind(var5)(var11);
            var8['source'] = var11;
            var11 = 17;
            var11 = var16[var11];
            var11 = var15.bind(var5)(var11);
            var11 = var11.unsafe_rawColors;
            var11 = var11.RED_400;
            var8['color'] = var11;
            var8 = var7.bind(var5)(var9, var8);
            var2['icon'] = var8;
            var8 = function onPress() {
                var3 = _closure1_slot1;
                var2 = _closure1_slot2;
                var1 = 28;
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
                    var1 = 21;
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
 1187:
            var4 = _closure1_slot10;
            var8 = _closure1_slot0;
            var11 = _closure1_slot2;
            var2 = 29;
            var2 = var11[var2];
            var2 = var8.bind(var5)(var2);
            var3 = var2.BottomSheet;
            var2 = {};
            var9 = _closure1_slot9;
            var7 = 30;
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
            var6 = 31;
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
            var7 = 32;
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
 1450:
            return var1;
        }
    };
    var2 = var4.bind(var7)(var2);
    var4 = 33;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/guild_automod/native/ModerateUserActionSheet.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();