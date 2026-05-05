// app/modules/main_tabs_v2/native/shared_components/user_list/useMemberListAction.tsx
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
    var8 = var6[var4];
    var4 = metroImportAll;
    var4 = var4.bind(var1)(var8);
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.View;
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
    var4 = var7.bind(var1)(var4);
    var _closure1_slot8 = var4;
    var4 = 6;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot9 = var4;
    var4 = 7;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var10 = var4.USERS_LIST_PADDING_BETWEEN_SECTIONS;
    var4 = 8;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.Permissions;
    var _closure1_slot10 = var7;
    var7 = var4.AnalyticsSections;
    var _closure1_slot11 = var7;
    var4 = var4.InstantInviteSources;
    var _closure1_slot12 = var4;
    var4 = 9;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.jsx;
    var _closure1_slot13 = var4;
    var4 = {};
    var4['listActionRenderer'] = var1;
    var4['listActionHeight'] = var1;
    var _closure1_slot14 = var4;
    var4 = 10;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = {};
    var9 = {};
    var9['paddingTop'] = var10;
    var4['wrapper'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot15 = var4;
    var4 = 31;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/main_tabs_v2/native/shared_components/user_list/useMemberListAction.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function useMemberListAction(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var2 = arg1;
            var3 = var2.channel;
            var _closure2_slot0 = var3;
            var7 = var2.disable;
            var10 = undefined;
            if(!(var7 === var10)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var7 = false;
case 2:
            var _closure2_slot1 = var10;
            var _closure2_slot2 = var10;
            var _closure2_slot3 = var10;
            var _closure2_slot4 = var10;
            var _closure2_slot5 = var10;
            var _closure2_slot6 = var10;
            var _closure2_slot7 = var10;
            var _closure2_slot8 = var10;
            var _closure2_slot9 = var10;
            var _closure2_slot10 = var10;
            var _closure2_slot11 = var10;
            var _closure2_slot12 = var10;
            var _closure2_slot13 = var10;
            var4 = _closure1_slot15;
            var5 = var4.bind(var10)();
            _closure2_slot1 = var5;
            var6 = _closure1_slot1;
            var8 = _closure1_slot2;
            var4 = 11;
            var4 = var8[var4];
            var6 = var6.bind(var10)(var4);
            var4 = 'useMemberListAction';
            var11 = var6.bind(var10)(var4);
            _closure2_slot2 = var11;
            var6 = _closure1_slot0;
            var4 = 12;
            var4 = var8[var4];
            var9 = var6.bind(var10)(var4);
            var8 = var9.useStateFromStores;
            var4 = _closure1_slot9;
            var6 = new Array(1);
            var6[0] = var4;
            var4 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var1 = _closure2_slot0;
                    var2 = null;
                    var4 = var2 != var1;
                    var1 = null;
                    if(!var4) { _fun0002_ip = 4; continue _fun0002 }
case 5:
                    var5 = _closure2_slot0;
                    var4 = var5.isDM;
                    var4 = var4.bind(var5)();
                    var1 = null;
                    if(!var4) { _fun0002_ip = 4; continue _fun0002 }
case 6:
                    var5 = _closure1_slot9;
                    var4 = var5.getUser;
                    var6 = _closure2_slot0;
                    var3 = var6.getRecipientId;
                    var3 = var3.bind(var6)();
                    var3 = var4.bind(var5)(var3);
                    var4 = var2 == var3;
                    var2 = undefined;
                    if(var4) { _fun0002_ip = 7; continue _fun0002 }
case 8:
                    var2 = var3.username;
case 7:
                    var1 = var2;
case 4:
                    return var1;
                }
            };
            var8 = var8.bind(var9)(var6, var4);
            _closure2_slot3 = var8;
            var9 = _closure1_slot7;
            var6 = var9.can;
            var4 = _closure1_slot10;
            var4 = var4.MANAGE_ROLES;
            var16 = var6.bind(var9)(var4, var3);
            if(!var16) { _fun0001_ip = 9; continue _fun0001 }
case 10:
            var6 = _closure1_slot0;
            var9 = _closure1_slot2;
            var4 = 13;
            var4 = var9[var4];
            var6 = var6.bind(var10)(var4);
            var4 = var6.isPrivateGuildChannel;
            var16 = var4.bind(var6)(var3);
case 9:
            _closure2_slot4 = var16;
            var4 = null;
            var6 = var4 != var3;
            if(!var6) { _fun0001_ip = 11; continue _fun0001 }
case 12:
            var6 = !var7;
case 11:
            if(!var6) { _fun0001_ip = 13; continue _fun0001 }
case 14:
            var7 = var16;
            if(var7) { _fun0001_ip = 15; continue _fun0001 }
case 16:
            var9 = var3.isDM;
            var9 = var9.bind(var3)();
            if(var9) { _fun0001_ip = 17; continue _fun0001 }
case 18:
            var9 = var3.isMultiUserDM;
            var9 = var9.bind(var3)();
            var12 = !var9;
            var9 = !var12;
            if(!var12) { _fun0001_ip = 19; continue _fun0001 }
case 20:
            var14 = _closure1_slot7;
            var13 = var14.can;
            var12 = _closure1_slot10;
            var12 = var12.CREATE_INSTANT_INVITE;
            var9 = var13.bind(var14)(var12, var3);
case 19:
            _fun0001_ip = 21; continue _fun0001;
case 17:
            var14 = _closure1_slot8;
            var13 = var14.isFriend;
            var12 = var3.getRecipientId;
            var12 = var12.bind(var3)();
            var9 = var13.bind(var14)(var12);
case 21:
            var7 = var9;
case 15:
            var6 = var7;
case 13:
            _closure2_slot5 = var6;
            var9 = var4 == var3;
            var7 = undefined;
            if(var9) { _fun0001_ip = 22; continue _fun0001 }
case 23:
            var9 = var3.isDM;
            var7 = var9.bind(var3)();
case 22:
            var13 = var4 != var7;
            if(!var13) { _fun0001_ip = 24; continue _fun0001 }
case 25:
            var13 = var7;
case 24:
            _closure2_slot6 = var13;
            var9 = var4 == var3;
            var7 = undefined;
            if(var9) { _fun0001_ip = 26; continue _fun0001 }
case 27:
            var9 = var3.isMultiUserDM;
            var7 = var9.bind(var3)();
case 26:
            var12 = var4 != var7;
            if(!var12) { _fun0001_ip = 28; continue _fun0001 }
case 29:
            var12 = var7;
case 28:
            _closure2_slot7 = var12;
            var4 = var4 == var3;
            var15 = undefined;
            if(var4) { _fun0001_ip = 30; continue _fun0001 }
case 31:
            var15 = var3.id;
case 30:
            _closure2_slot8 = var15;
            var4 = _closure1_slot1;
            var7 = _closure1_slot2;
            var3 = 14;
            var3 = var7[var3];
            var3 = var4.bind(var10)(var3);
            var7 = var3.bind(var10)();
            _closure2_slot9 = var7;
            var4 = _closure1_slot4;
            var3 = var4.useState;
            var9 = var3.bind(var4)(var10);
            var3 = _closure1_slot3;
            var2 = 2;
            var3 = var3.bind(var10)(var9, var2);
            var2 = 0;
            var10 = var3[var2];
            _closure2_slot10 = var10;
            var2 = 1;
            var2 = var3[var2];
            _closure2_slot11 = var2;
            var9 = var4.useCallback;
            var3 = function(arg1) {
                var1 = arg1;
                var1 = var1.nativeEvent;
                var1 = var1.layout;
                var1 = var1.height;
                var _closure3_slot0 = var1;
                var3 = _closure2_slot11;
                var1 = undefined;
                var2 = function(arg1) {
                    _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                        var1 = arg1;
                        var2 = null;
                        if(!(var2 == var1)) { _fun0003_ip = 32; continue _fun0003 }
case 33:
                        var1 = _closure3_slot0;
case 32:
                        return var1;
                    }
                };
                var2 = var3.bind(var1)(var2);
                return var1;
            };
            var2 = new Array(0);
            var9 = var9.bind(var4)(var3, var2);
            _closure2_slot12 = var9;
            var14 = var4.useCallback;
            var3 = new Array(1);
            var3[0] = var15;
            var2 = function() {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                    var3 = _closure2_slot8;
                    var1 = null;
                    if(!(var1 != var3)) { _fun0004_ip = 34; continue _fun0004 }
case 35:
                    var5 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var3 = 15;
                    var4 = var4[var3];
                    var3 = undefined;
                    var4 = var5.bind(var3)(var4);
                    var3 = var4.navigateToNewGroupDM;
                    var2 = _closure2_slot8;
                    var1 = _closure1_slot11;
                    var1 = var1.MEMBER_LIST;
                    var1 = var3.bind(var4)(var2, var1);
case 34:
                    var1 = undefined;
                    return var1;
                }
            };
            var14 = var14.bind(var4)(var2, var3);
            _closure2_slot13 = var14;
            var3 = var4.useMemo;
            var2 = new Array(12);
            var2[0] = var16;
            var2[1] = var15;
            var2[2] = var14;
            var2[3] = var13;
            var2[4] = var12;
            var2[5] = var11;
            var2[6] = var10;
            var2[7] = var9;
            var2[8] = var8;
            var2[9] = var7;
            var2[10] = var6;
            var2[11] = var5;
            var1 = function() {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                    var1 = _closure2_slot8;
                    var5 = null;
                    if(!(var5 != var1)) { _fun0005_ip = 36; continue _fun0005 }
case 5:
                    var1 = _closure2_slot5;
                    if(!var1) { _fun0005_ip = 36; continue _fun0005 }
case 2:
                    var1 = _closure2_slot6;
                    if(var1) { _fun0005_ip = 28; continue _fun0005 }
case 37:
                    var1 = _closure2_slot7;
                    var4 = {};
                    if(var1) { _fun0005_ip = 38; continue _fun0005 }
case 39:
                    var1 = _closure2_slot4;
                    var8 = _closure1_slot1;
                    var12 = _closure1_slot2;
                    if(var1) { _fun0005_ip = 40; continue _fun0005 }
case 41:
                    var1 = 19;
                    var1 = var12[var1];
                    var11 = undefined;
                    var1 = var8.bind(var11)(var1);
                    var4['iconSource'] = var1;
                    var10 = _closure1_slot0;
                    var1 = 20;
                    var1 = var12[var1];
                    var1 = var10.bind(var11)(var1);
                    var1 = var1.GroupPlusIcon;
                    var4['IconComponent'] = var1;
                    var1 = 18;
                    var7 = var12[var1];
                    var7 = var10.bind(var11)(var7);
                    var9 = var7.intl;
                    var7 = var9.string;
                    var1 = var12[var1];
                    var1 = var10.bind(var11)(var1);
                    var1 = var1.t;
                    var1 = var1.Ab/6S0;
                    var1 = var7.bind(var9)(var1);
                    var4['label'] = var1;
                    var1 = function handlePress() {
                        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                            var3 = _closure1_slot6;
                            var2 = var3.getChannel;
                            var1 = _closure2_slot8;
                            var4 = var2.bind(var3)(var1);
                            var1 = null;
                            if(!(var1 != var4)) { _fun0006_ip = 42; continue _fun0006 }
case 43:
                            var3 = _closure1_slot0;
                            var6 = _closure1_slot2;
                            var1 = 27;
                            var1 = var6[var1];
                            var2 = undefined;
                            var7 = var3.bind(var2)(var1);
                            var1 = var7.dismissGlobalKeyboard;
                            var1 = var1.bind(var7)();
                            var1 = 28;
                            var1 = var6[var1];
                            var3 = var3.bind(var2)(var1);
                            var2 = var3.showInstantInviteActionSheet;
                            var1 = {};
                            var5 = _closure1_slot12;
                            var5 = var5.CHAT_SIDEBAR;
                            var1['source'] = var5;
                            var1 = var2.bind(var3)(var4, var1);
case 42:
                            var1 = undefined;
                            return var1;
                        }
                    };
                    var4['handlePress'] = var1;
                    var1 = var4;
                    _fun0005_ip = 44; continue _fun0005;
case 40:
                    var7 = 24;
                    var7 = var12[var7];
                    var11 = undefined;
                    var7 = var8.bind(var11)(var7);
                    var4['iconSource'] = var7;
                    var10 = _closure1_slot0;
                    var7 = 25;
                    var7 = var12[var7];
                    var7 = var10.bind(var11)(var7);
                    var7 = var7.SettingsIcon;
                    var4['IconComponent'] = var7;
                    var7 = 18;
                    var8 = var12[var7];
                    var8 = var10.bind(var11)(var8);
                    var9 = var8.intl;
                    var8 = var9.string;
                    var7 = var12[var7];
                    var7 = var10.bind(var11)(var7);
                    var7 = var7.t;
                    var7 = var7.z9Mqln;
                    var7 = var8.bind(var9)(var7);
                    var4['label'] = var7;
                    var7 = function handlePress() {
                        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                            var4 = _closure1_slot6;
                            var3 = var4.getChannel;
                            var1 = _closure2_slot8;
                            var1 = var3.bind(var4)(var1);
                            var3 = null;
                            if(!(var3 != var1)) { _fun0007_ip = 45; continue _fun0007 }
case 43:
                            var4 = _closure1_slot0;
                            var3 = _closure1_slot2;
                            var2 = 26;
                            var3 = var3[var2];
                            var2 = undefined;
                            var4 = var4.bind(var2)(var3);
                            var3 = var4.openChannelMembersActionSheet;
                            var2 = var1.id;
                            var1 = var1.guild_id;
                            var1 = var3.bind(var4)(var2, var1);
case 45:
                            var1 = undefined;
                            return var1;
                        }
                    };
                    var4['handlePress'] = var7;
                    var1 = var4;
case 44:
                    _fun0005_ip = 46; continue _fun0005;
case 38:
                    var8 = _closure1_slot1;
                    var11 = _closure1_slot2;
                    var7 = 19;
                    var7 = var11[var7];
                    var10 = undefined;
                    var7 = var8.bind(var10)(var7);
                    var4['iconSource'] = var7;
                    var9 = _closure1_slot0;
                    var6 = 20;
                    var6 = var11[var6];
                    var6 = var9.bind(var10)(var6);
                    var6 = var6.GroupPlusIcon;
                    var4['IconComponent'] = var6;
                    var6 = 18;
                    var7 = var11[var6];
                    var7 = var9.bind(var10)(var7);
                    var8 = var7.intl;
                    var7 = var8.string;
                    var6 = var11[var6];
                    var6 = var9.bind(var10)(var6);
                    var6 = var6.t;
                    var6 = var6.LR+Ptf;
                    var6 = var7.bind(var8)(var6);
                    var4['label'] = var6;
                    var6 = function handlePress() {
                        _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                            var5 = _closure1_slot6;
                            var4 = var5.getChannel;
                            var2 = _closure2_slot8;
                            var4 = var4.bind(var5)(var2);
                            var2 = null;
                            if(!(var2 != var4)) { _fun0008_ip = 47; continue _fun0008 }
case 43:
                            var7 = _closure1_slot0;
                            var8 = _closure1_slot2;
                            var2 = 21;
                            var4 = var8[var2];
                            var2 = undefined;
                            var6 = var7.bind(var2)(var4);
                            var5 = var6.UNSAFE_isDismissibleContentDismissed;
                            var4 = 22;
                            var4 = var8[var4];
                            var4 = var7.bind(var2)(var4);
                            var4 = var4.DismissibleContent;
                            var4 = var4.GDM_INVITE_REMINDER;
                            var4 = var5.bind(var6)(var4);
                            if(var4) { _fun0008_ip = 48; continue _fun0008 }
case 49:
                            var4 = _closure1_slot1;
                            var5 = _closure1_slot2;
                            var3 = 23;
                            var3 = var5[var3];
                            var4 = var4.bind(var2)(var3);
                            var3 = {};
                            var5 = _closure2_slot13;
                            var3['onClick'] = var5;
                            var3 = var4.bind(var2)(var3);
                            _fun0008_ip = 47; continue _fun0008;
case 48:
                            var1 = _closure2_slot13;
                            var1 = var1.bind(var2)();
case 47:
                            var1 = undefined;
                            return var1;
                        }
                    };
                    var4['handlePress'] = var6;
                    var1 = var4;
case 46:
                    _fun0005_ip = 50; continue _fun0005;
case 28:
                    var4 = {};
                    var9 = _closure1_slot1;
                    var6 = _closure1_slot2;
                    var8 = 16;
                    var8 = var6[var8];
                    var11 = undefined;
                    var8 = var9.bind(var11)(var8);
                    var4['iconSource'] = var8;
                    var10 = _closure1_slot0;
                    var8 = 17;
                    var8 = var6[var8];
                    var8 = var10.bind(var11)(var8);
                    var8 = var8.ChatPlusIcon;
                    var4['IconComponent'] = var8;
                    var12 = 18;
                    var8 = var6[var12];
                    var8 = var10.bind(var11)(var8);
                    var9 = var8.intl;
                    var8 = var9.string;
                    var6 = var6[var12];
                    var6 = var10.bind(var11)(var6);
                    var6 = var6.t;
                    var6 = var6["3hF1W4"];
                    var6 = var8.bind(var9)(var6);
                    var4['label'] = var6;
                    var6 = _closure2_slot3;
                    var8 = var5 != var6;
                    var6 = undefined;
                    if(!var8) { _fun0005_ip = 51; continue _fun0005 }
case 52:
                    var8 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var9 = var7[var12];
                    var9 = var8.bind(var11)(var9);
                    var10 = var9.intl;
                    var9 = var10.formatToPlainString;
                    var7 = var7[var12];
                    var7 = var8.bind(var11)(var7);
                    var7 = var7.t;
                    var8 = var7.Sh/xNN;
                    var7 = {};
                    var11 = _closure2_slot3;
                    var7['recipient'] = var11;
                    var6 = var9.bind(var10)(var8, var7);
case 51:
                    var4['sublabel'] = var6;
                    var6 = _closure2_slot13;
                    var4['handlePress'] = var6;
                    var1 = var4;
case 50:
                    var13 = var1.label;
                    var18 = var1.iconSource;
                    var17 = var1.IconComponent;
                    var14 = var1.handlePress;
                    var12 = var1.sublabel;
                    var7 = _closure1_slot13;
                    var6 = _closure1_slot5;
                    var4 = {};
                    var1 = _closure2_slot1;
                    var1 = var1.wrapper;
                    var4['style'] = var1;
                    var1 = _closure2_slot12;
                    var4['onLayout'] = var1;
                    var1 = _closure2_slot2;
                    var11 = _closure1_slot13;
                    var16 = _closure1_slot0;
                    var19 = _closure1_slot2;
                    if(var1) { _fun0005_ip = 53; continue _fun0005 }
case 54:
                    var1 = 30;
                    var1 = var19[var1];
                    var9 = undefined;
                    var1 = var16.bind(var9)(var1);
                    var8 = var1.TableRow;
                    var1 = {};
                    var10 = 29;
                    var10 = var19[var10];
                    var10 = var16.bind(var9)(var10);
                    var10 = var10.RowButton;
                    var15 = var10.Icon;
                    var10 = {};
                    var10['source'] = var18;
                    var10['IconComponent'] = var17;
                    var10 = var11.bind(var9)(var15, var10);
                    var1['icon'] = var10;
                    var1['onPress'] = var14;
                    var1['label'] = var13;
                    var1['subLabel'] = var12;
                    var10 = true;
                    var1['start'] = var10;
                    var1['end'] = var10;
                    var1['arrow'] = var10;
                    var1 = var11.bind(var9)(var8, var1);
                    _fun0005_ip = 55; continue _fun0005;
case 53:
                    var15 = 29;
                    var8 = var19[var15];
                    var10 = undefined;
                    var8 = var16.bind(var10)(var8);
                    var9 = var8.RowButton;
                    var8 = {};
                    var15 = var19[var15];
                    var15 = var16.bind(var10)(var15);
                    var15 = var15.RowButton;
                    var16 = var15.Icon;
                    var15 = {};
                    var15['source'] = var18;
                    var15['IconComponent'] = var17;
                    var15 = var11.bind(var10)(var16, var15);
                    var8['icon'] = var15;
                    var8['onPress'] = var14;
                    var8['label'] = var13;
                    var8['subLabel'] = var12;
                    var12 = true;
                    var8['arrow'] = var12;
                    var1 = var11.bind(var10)(var9, var8);
case 55:
                    var4['children'] = var1;
                    var1 = undefined;
                    var1 = var7.bind(var1)(var6, var4);
                    var _closure3_slot0 = var1;
                    var4 = _closure2_slot9;
                    var1 = _closure2_slot1;
                    var1 = var1.wrapper;
                    var1 = var1.paddingTop;
                    var1 = var4 + var1;
                    var4 = _closure2_slot10;
                    if(!(var5 != var4)) { _fun0005_ip = 56; continue _fun0005 }
case 57:
                    var1 = _closure2_slot10;
case 56:
                    var _closure3_slot1 = var1;
                    var1 = {};
                    var3 = function listActionRenderer() {
                        var1 = _closure3_slot0;
                        return var1;
                    };
                    var1['listActionRenderer'] = var3;
                    var2 = function listActionHeight() {
                        var1 = _closure3_slot1;
                        return var1;
                    };
                    var1['listActionHeight'] = var2;
                    return var1;
case 36:
                    var1 = _closure1_slot14;
                    return var1;
                }
            };
            var1 = var3.bind(var4)(var1, var2);
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();