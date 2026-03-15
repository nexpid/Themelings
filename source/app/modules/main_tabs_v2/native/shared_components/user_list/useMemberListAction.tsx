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
    var8 = var6[var1];
    var4 = metroImportAll;
    var1 = undefined;
    var4 = var4.bind(var1)(var8);
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.View;
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
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
    var4 = var5.bind(var1)(var4);
    var10 = var4.USERS_LIST_PADDING_BETWEEN_SECTIONS;
    var4 = 7;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.Permissions;
    var _closure1_slot9 = var7;
    var7 = var4.AnalyticsSections;
    var _closure1_slot10 = var7;
    var4 = var4.InstantInviteSources;
    var _closure1_slot11 = var4;
    var4 = 8;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.jsx;
    var _closure1_slot12 = var4;
    var4 = {};
    var4['listActionRenderer'] = var1;
    var4['listActionHeight'] = var1;
    var _closure1_slot13 = var4;
    var4 = 9;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = {};
    var9 = {};
    var9['paddingTop'] = var10;
    var4['wrapper'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot14 = var4;
    var4 = 30;
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
            var10 = var2.disable;
            var4 = undefined;
            if(!(var10 === var4)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var10 = false;
case 2:
            var _closure2_slot1 = var4;
            var _closure2_slot2 = var4;
            var _closure2_slot3 = var4;
            var _closure2_slot4 = var4;
            var _closure2_slot5 = var4;
            var _closure2_slot6 = var4;
            var _closure2_slot7 = var4;
            var _closure2_slot8 = var4;
            var _closure2_slot9 = var4;
            var _closure2_slot10 = var4;
            var5 = _closure1_slot14;
            var5 = var5.bind(var4)();
            _closure2_slot1 = var5;
            var7 = _closure1_slot1;
            var8 = _closure1_slot2;
            var6 = 10;
            var6 = var8[var6];
            var7 = var7.bind(var4)(var6);
            var6 = 'useMemberListAction';
            var9 = var7.bind(var4)(var6);
            _closure2_slot2 = var9;
            var7 = _closure1_slot0;
            var6 = 11;
            var6 = var8[var6];
            var11 = var7.bind(var4)(var6);
            var8 = var11.useStateFromStores;
            var6 = _closure1_slot8;
            var7 = new Array(1);
            var7[0] = var6;
            var6 = function() {
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
                    var5 = _closure1_slot8;
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
            var8 = var8.bind(var11)(var7, var6);
            _closure2_slot3 = var8;
            var11 = _closure1_slot6;
            var7 = var11.can;
            var6 = _closure1_slot9;
            var6 = var6.MANAGE_ROLES;
            var14 = var7.bind(var11)(var6, var3);
            if(!var14) { _fun0001_ip = 9; continue _fun0001 }
case 10:
            var7 = _closure1_slot0;
            var11 = _closure1_slot2;
            var6 = 12;
            var6 = var11[var6];
            var7 = var7.bind(var4)(var6);
            var6 = var7.isPrivateGuildChannel;
            var14 = var6.bind(var7)(var3);
case 9:
            _closure2_slot4 = var14;
            var7 = null;
            var6 = var7 != var3;
            if(!var6) { _fun0001_ip = 11; continue _fun0001 }
case 12:
            var6 = !var10;
case 11:
            if(!var6) { _fun0001_ip = 13; continue _fun0001 }
case 14:
            var10 = var14;
            if(var10) { _fun0001_ip = 15; continue _fun0001 }
case 16:
            var11 = var3.isDM;
            var11 = var11.bind(var3)();
            if(var11) { _fun0001_ip = 17; continue _fun0001 }
case 18:
            var11 = var3.isMultiUserDM;
            var11 = var11.bind(var3)();
            var12 = !var11;
            var11 = !var12;
            if(!var12) { _fun0001_ip = 19; continue _fun0001 }
case 20:
            var15 = _closure1_slot6;
            var13 = var15.can;
            var12 = _closure1_slot9;
            var12 = var12.CREATE_INSTANT_INVITE;
            var11 = var13.bind(var15)(var12, var3);
case 19:
            _fun0001_ip = 21; continue _fun0001;
case 17:
            var15 = _closure1_slot7;
            var13 = var15.isFriend;
            var12 = var3.getRecipientId;
            var12 = var12.bind(var3)();
            var11 = var13.bind(var15)(var12);
case 21:
            var10 = var11;
case 15:
            var6 = var10;
case 13:
            _closure2_slot5 = var6;
            var11 = var7 == var3;
            var10 = undefined;
            if(var11) { _fun0001_ip = 22; continue _fun0001 }
case 23:
            var11 = var3.isDM;
            var10 = var11.bind(var3)();
case 22:
            var11 = var7 != var10;
            if(!var11) { _fun0001_ip = 24; continue _fun0001 }
case 25:
            var11 = var10;
case 24:
            _closure2_slot6 = var11;
            var10 = var7 == var3;
            var12 = undefined;
            if(var10) { _fun0001_ip = 26; continue _fun0001 }
case 27:
            var10 = var3.isMultiUserDM;
            var12 = var10.bind(var3)();
case 26:
            var10 = var7 != var12;
            if(!var10) { _fun0001_ip = 28; continue _fun0001 }
case 29:
            var10 = var12;
case 28:
            _closure2_slot7 = var10;
            var7 = var7 == var3;
            var13 = undefined;
            if(var7) { _fun0001_ip = 30; continue _fun0001 }
case 31:
            var13 = var3.id;
case 30:
            _closure2_slot8 = var13;
            var7 = _closure1_slot1;
            var12 = _closure1_slot2;
            var3 = 13;
            var3 = var12[var3];
            var3 = var7.bind(var4)(var3);
            var7 = var3.bind(var4)();
            _closure2_slot9 = var7;
            var4 = _closure1_slot3;
            var12 = var4.useCallback;
            var3 = new Array(1);
            var3[0] = var13;
            var2 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var3 = _closure2_slot8;
                    var1 = null;
                    if(!(var1 != var3)) { _fun0003_ip = 32; continue _fun0003 }
case 33:
                    var5 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var3 = 14;
                    var4 = var4[var3];
                    var3 = undefined;
                    var4 = var5.bind(var3)(var4);
                    var3 = var4.navigateToNewGroupDM;
                    var2 = _closure2_slot8;
                    var1 = _closure1_slot10;
                    var1 = var1.MEMBER_LIST;
                    var1 = var3.bind(var4)(var2, var1);
case 32:
                    var1 = undefined;
                    return var1;
                }
            };
            var12 = var12.bind(var4)(var2, var3);
            _closure2_slot10 = var12;
            var3 = var4.useMemo;
            var2 = new Array(10);
            var2[0] = var14;
            var2[1] = var13;
            var2[2] = var12;
            var2[3] = var11;
            var2[4] = var10;
            var2[5] = var9;
            var2[6] = var8;
            var2[7] = var7;
            var2[8] = var6;
            var2[9] = var5;
            var1 = function() {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                    var1 = _closure2_slot8;
                    var7 = null;
                    if(!(var7 != var1)) { _fun0004_ip = 34; continue _fun0004 }
case 5:
                    var1 = _closure2_slot5;
                    if(!var1) { _fun0004_ip = 34; continue _fun0004 }
case 2:
                    var1 = _closure2_slot6;
                    if(var1) { _fun0004_ip = 35; continue _fun0004 }
case 36:
                    var1 = _closure2_slot7;
                    var4 = {};
                    if(var1) { _fun0004_ip = 37; continue _fun0004 }
case 38:
                    var1 = _closure2_slot4;
                    var8 = _closure1_slot1;
                    var12 = _closure1_slot2;
                    if(var1) { _fun0004_ip = 39; continue _fun0004 }
case 40:
                    var1 = 18;
                    var1 = var12[var1];
                    var11 = undefined;
                    var1 = var8.bind(var11)(var1);
                    var4['iconSource'] = var1;
                    var10 = _closure1_slot0;
                    var1 = 19;
                    var1 = var12[var1];
                    var1 = var10.bind(var11)(var1);
                    var1 = var1.GroupPlusIcon;
                    var4['IconComponent'] = var1;
                    var1 = 17;
                    var6 = var12[var1];
                    var6 = var10.bind(var11)(var6);
                    var9 = var6.intl;
                    var6 = var9.string;
                    var1 = var12[var1];
                    var1 = var10.bind(var11)(var1);
                    var1 = var1.t;
                    var1 = var1.Ab/6S0;
                    var1 = var6.bind(var9)(var1);
                    var4['label'] = var1;
                    var1 = function handlePress() {
                        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                            var3 = _closure1_slot5;
                            var2 = var3.getChannel;
                            var1 = _closure2_slot8;
                            var4 = var2.bind(var3)(var1);
                            var1 = null;
                            if(!(var1 != var4)) { _fun0005_ip = 41; continue _fun0005 }
case 42:
                            var3 = _closure1_slot0;
                            var6 = _closure1_slot2;
                            var1 = 26;
                            var1 = var6[var1];
                            var2 = undefined;
                            var7 = var3.bind(var2)(var1);
                            var1 = var7.dismissGlobalKeyboard;
                            var1 = var1.bind(var7)();
                            var1 = 27;
                            var1 = var6[var1];
                            var3 = var3.bind(var2)(var1);
                            var2 = var3.showInstantInviteActionSheet;
                            var1 = {};
                            var5 = _closure1_slot11;
                            var5 = var5.CHAT_SIDEBAR;
                            var1['source'] = var5;
                            var1 = var2.bind(var3)(var4, var1);
case 41:
                            var1 = undefined;
                            return var1;
                        }
                    };
                    var4['handlePress'] = var1;
                    var1 = var4;
                    _fun0004_ip = 43; continue _fun0004;
case 39:
                    var6 = 23;
                    var6 = var12[var6];
                    var11 = undefined;
                    var6 = var8.bind(var11)(var6);
                    var4['iconSource'] = var6;
                    var10 = _closure1_slot0;
                    var6 = 24;
                    var6 = var12[var6];
                    var6 = var10.bind(var11)(var6);
                    var6 = var6.SettingsIcon;
                    var4['IconComponent'] = var6;
                    var6 = 17;
                    var8 = var12[var6];
                    var8 = var10.bind(var11)(var8);
                    var9 = var8.intl;
                    var8 = var9.string;
                    var6 = var12[var6];
                    var6 = var10.bind(var11)(var6);
                    var6 = var6.t;
                    var6 = var6.z9Mqln;
                    var6 = var8.bind(var9)(var6);
                    var4['label'] = var6;
                    var6 = function handlePress() {
                        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                            var4 = _closure1_slot5;
                            var3 = var4.getChannel;
                            var1 = _closure2_slot8;
                            var1 = var3.bind(var4)(var1);
                            var3 = null;
                            if(!(var3 != var1)) { _fun0006_ip = 44; continue _fun0006 }
case 42:
                            var4 = _closure1_slot0;
                            var3 = _closure1_slot2;
                            var2 = 25;
                            var3 = var3[var2];
                            var2 = undefined;
                            var4 = var4.bind(var2)(var3);
                            var3 = var4.openChannelMembersActionSheet;
                            var2 = var1.id;
                            var1 = var1.guild_id;
                            var1 = var3.bind(var4)(var2, var1);
case 44:
                            var1 = undefined;
                            return var1;
                        }
                    };
                    var4['handlePress'] = var6;
                    var1 = var4;
case 43:
                    _fun0004_ip = 45; continue _fun0004;
case 37:
                    var8 = _closure1_slot1;
                    var11 = _closure1_slot2;
                    var6 = 18;
                    var6 = var11[var6];
                    var10 = undefined;
                    var6 = var8.bind(var10)(var6);
                    var4['iconSource'] = var6;
                    var9 = _closure1_slot0;
                    var5 = 19;
                    var5 = var11[var5];
                    var5 = var9.bind(var10)(var5);
                    var5 = var5.GroupPlusIcon;
                    var4['IconComponent'] = var5;
                    var5 = 17;
                    var6 = var11[var5];
                    var6 = var9.bind(var10)(var6);
                    var8 = var6.intl;
                    var6 = var8.string;
                    var5 = var11[var5];
                    var5 = var9.bind(var10)(var5);
                    var5 = var5.t;
                    var5 = var5.LR+Ptf;
                    var5 = var6.bind(var8)(var5);
                    var4['label'] = var5;
                    var5 = function handlePress() {
                        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                            var5 = _closure1_slot5;
                            var4 = var5.getChannel;
                            var2 = _closure2_slot8;
                            var4 = var4.bind(var5)(var2);
                            var2 = null;
                            if(!(var2 != var4)) { _fun0007_ip = 46; continue _fun0007 }
case 42:
                            var7 = _closure1_slot0;
                            var8 = _closure1_slot2;
                            var2 = 20;
                            var4 = var8[var2];
                            var2 = undefined;
                            var6 = var7.bind(var2)(var4);
                            var5 = var6.UNSAFE_isDismissibleContentDismissed;
                            var4 = 21;
                            var4 = var8[var4];
                            var4 = var7.bind(var2)(var4);
                            var4 = var4.DismissibleContent;
                            var4 = var4.GDM_INVITE_REMINDER;
                            var4 = var5.bind(var6)(var4);
                            if(var4) { _fun0007_ip = 47; continue _fun0007 }
case 48:
                            var4 = _closure1_slot1;
                            var5 = _closure1_slot2;
                            var3 = 22;
                            var3 = var5[var3];
                            var4 = var4.bind(var2)(var3);
                            var3 = {};
                            var5 = _closure2_slot10;
                            var3['onClick'] = var5;
                            var3 = var4.bind(var2)(var3);
                            _fun0007_ip = 46; continue _fun0007;
case 47:
                            var1 = _closure2_slot10;
                            var1 = var1.bind(var2)();
case 46:
                            var1 = undefined;
                            return var1;
                        }
                    };
                    var4['handlePress'] = var5;
                    var1 = var4;
case 45:
                    _fun0004_ip = 49; continue _fun0004;
case 35:
                    var4 = {};
                    var9 = _closure1_slot1;
                    var5 = _closure1_slot2;
                    var8 = 15;
                    var8 = var5[var8];
                    var10 = undefined;
                    var8 = var9.bind(var10)(var8);
                    var4['iconSource'] = var8;
                    var12 = _closure1_slot0;
                    var8 = 16;
                    var8 = var5[var8];
                    var8 = var12.bind(var10)(var8);
                    var8 = var8.ChatPlusIcon;
                    var4['IconComponent'] = var8;
                    var11 = 17;
                    var8 = var5[var11];
                    var8 = var12.bind(var10)(var8);
                    var9 = var8.intl;
                    var8 = var9.string;
                    var5 = var5[var11];
                    var5 = var12.bind(var10)(var5);
                    var5 = var5.t;
                    var5 = var5.3hF1W4;
                    var5 = var8.bind(var9)(var5);
                    var4['label'] = var5;
                    var5 = _closure2_slot3;
                    var7 = var7 != var5;
                    var5 = undefined;
                    if(!var7) { _fun0004_ip = 50; continue _fun0004 }
case 51:
                    var7 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var8 = var6[var11];
                    var8 = var7.bind(var10)(var8);
                    var9 = var8.intl;
                    var8 = var9.formatToPlainString;
                    var6 = var6[var11];
                    var6 = var7.bind(var10)(var6);
                    var6 = var6.t;
                    var7 = var6.Sh/xNN;
                    var6 = {};
                    var10 = _closure2_slot3;
                    var6['recipient'] = var10;
                    var5 = var8.bind(var9)(var7, var6);
case 50:
                    var4['sublabel'] = var5;
                    var5 = _closure2_slot10;
                    var4['handlePress'] = var5;
                    var1 = var4;
case 49:
                    var12 = var1.label;
                    var17 = var1.iconSource;
                    var16 = var1.IconComponent;
                    var13 = var1.handlePress;
                    var11 = var1.sublabel;
                    var6 = _closure1_slot12;
                    var5 = _closure1_slot4;
                    var4 = {};
                    var1 = _closure2_slot1;
                    var1 = var1.wrapper;
                    var4['style'] = var1;
                    var1 = _closure2_slot2;
                    var10 = _closure1_slot12;
                    var15 = _closure1_slot0;
                    var18 = _closure1_slot2;
                    if(var1) { _fun0004_ip = 52; continue _fun0004 }
case 53:
                    var1 = 29;
                    var1 = var18[var1];
                    var8 = undefined;
                    var1 = var15.bind(var8)(var1);
                    var7 = var1.TableRow;
                    var1 = {};
                    var9 = 28;
                    var9 = var18[var9];
                    var9 = var15.bind(var8)(var9);
                    var9 = var9.RowButton;
                    var14 = var9.Icon;
                    var9 = {};
                    var9['source'] = var17;
                    var19 = 'blurple';
                    var9['variant'] = var19;
                    var9['IconComponent'] = var16;
                    var9 = var10.bind(var8)(var14, var9);
                    var1['icon'] = var9;
                    var1['onPress'] = var13;
                    var1['label'] = var12;
                    var1['subLabel'] = var11;
                    var9 = true;
                    var1['start'] = var9;
                    var1['end'] = var9;
                    var1['arrow'] = var9;
                    var1 = var10.bind(var8)(var7, var1);
                    _fun0004_ip = 54; continue _fun0004;
case 52:
                    var14 = 28;
                    var7 = var18[var14];
                    var9 = undefined;
                    var7 = var15.bind(var9)(var7);
                    var8 = var7.RowButton;
                    var7 = {};
                    var14 = var18[var14];
                    var14 = var15.bind(var9)(var14);
                    var14 = var14.RowButton;
                    var15 = var14.Icon;
                    var14 = {};
                    var14['source'] = var17;
                    var14['IconComponent'] = var16;
                    var14 = var10.bind(var9)(var15, var14);
                    var7['icon'] = var14;
                    var7['onPress'] = var13;
                    var7['label'] = var12;
                    var7['subLabel'] = var11;
                    var11 = true;
                    var7['arrow'] = var11;
                    var1 = var10.bind(var9)(var8, var7);
case 54:
                    var4['children'] = var1;
                    var1 = undefined;
                    var1 = var6.bind(var1)(var5, var4);
                    var _closure3_slot0 = var1;
                    var1 = {};
                    var3 = function listActionRenderer() {
                        var1 = _closure3_slot0;
                        return var1;
                    };
                    var1['listActionRenderer'] = var3;
                    var3 = _closure2_slot9;
                    var2 = _closure2_slot1;
                    var2 = var2.wrapper;
                    var2 = var2.paddingTop;
                    var2 = var3 + var2;
                    var1['listActionHeight'] = var2;
                    return var1;
case 34:
                    var1 = _closure1_slot13;
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