// app/modules/devtools/native/components/screens/DevToolsGuildPowerupsScreen.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var11 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var11;
    var _closure1_slot2 = var6;
    var1 = function setWarningBoosts() {
        var1 = undefined;
        var4 = _closure1_slot22;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot21 = var1;
    var1 = function _setWarningBoosts() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot3;
        var3 = function* (arg1, arg2, arg3) {
            var1 = function* anon_0_(arg1, arg2, arg3) {
                _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
                    StartGenerator();
                    var7 = arg1;
                    var11 = arg2;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0001_ip = 2; continue _fun0001 }
case 3:
                    var5 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var2 = 12;
                    var2 = var3[var2];
                    var3 = undefined;
                    var2 = var5.bind(var3)(var2);
                    var8 = var2.HTTP;
                    var5 = var8.patch;
                    var2 = {};
                    var6 = _closure1_slot17;
                    var6 = var6.APPLIED_BOOST_MODIFY_END_DATE;
                    var2['url'] = var6;
                    var6 = {};
                    var10 = var11.map;
                    var9 = function(arg1) {
                        var1 = arg1;
                        var1 = var1.id;
                        return var1;
                    };
                    var9 = var10.bind(var11)(var9);
                    var6['applied_boost_ids'] = var9;
                    var10 = arg3;
                    var9 = null;
                    if(var10) { _fun0001_ip = 4; continue _fun0001 }
case 5:
                    var11 = _closure1_slot1;
                    var12 = _closure1_slot2;
                    var10 = 13;
                    var10 = var12[var10];
                    var10 = var11.bind(var3)(var10);
                    var13 = var10.bind(var3)();
                    var12 = var13.add;
                    var11 = 1;
                    var10 = 'day';
                    var9 = var12.bind(var13)(var11, var10);
case 4:
                    var6['ends_at'] = var9;
                    var2['body'] = var6;
                    var6 = true;
                    var2['rejectWithError'] = var6;
                    var2 = var5.bind(var8)(var2);
                    SaveGenerator(address=170);
case 6:
                    return var2;
case 7:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=4);
                    if(var5) { _fun0001_ip = 8; continue _fun0001 }
case 9:
                    var5 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    var4 = 14;
                    var4 = var8[var4];
                    var9 = var5.bind(var3)(var4);
                    var4 = var9.fetchAppliedGuildBoostsForGuild;
                    var4 = var4.bind(var9)(var7);
                    var4 = 15;
                    var4 = var8[var4];
                    var5 = var5.bind(var3)(var4);
                    var4 = var5.fetchGuildBoostEntitlements;
                    var4 = var4.bind(var5)(var7, var6);
                    return var3;
case 8:
                    return var2;
case 2:
                    return var1;
                }
            };
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot22 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot22 = var1;
    var1 = function _sendPowerupsSystemMessage() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot3;
        var3 = function* (arg1) {
            var1 = function* anon_0_(arg1) {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0002_ip = 10; continue _fun0002 }
case 11:
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var2 = 12;
                    var2 = var3[var2];
                    var3 = undefined;
                    var2 = var4.bind(var3)(var2);
                    var5 = var2.HTTP;
                    var4 = var5.post;
                    var2 = {};
                    var8 = _closure1_slot17;
                    var7 = var8.SEND_POWERUPS_SYSTEM_MESSAGE;
                    var6 = arg1;
                    var6 = var7.bind(var8)(var6);
                    var2['url'] = var6;
                    var6 = true;
                    var2['rejectWithError'] = var6;
                    var2 = var4.bind(var5)(var2);
                    SaveGenerator(address=82);
case 12:
                    return var2;
case 13:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(var4) { _fun0002_ip = 14; continue _fun0002 }
case 15:
                    return var3;
case 14:
                    return var2;
case 10:
                    return var1;
                }
            };
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot23 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot23 = var1;
    var1 = function UserDCSwitchRow(arg1) {
        var1 = arg1;
        var8 = var1.dc;
        var2 = _closure1_slot1;
        var9 = _closure1_slot2;
        var1 = 16;
        var1 = var9[var1];
        var4 = undefined;
        var1 = var2.bind(var4)(var1);
        var1 = var1.bind(var4)(var8);
        var6 = var1.isDismissed;
        var5 = var1.handleToggleDismissState;
        var3 = _closure1_slot18;
        var2 = _closure1_slot0;
        var1 = 17;
        var1 = var9[var1];
        var1 = var2.bind(var4)(var1);
        var2 = var1.TableSwitchRow;
        var1 = {};
        var7 = _closure1_slot16;
        var7 = var7.bind(var4)(var8);
        var1['label'] = var7;
        var1['value'] = var6;
        var1['onValueChange'] = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var _closure1_slot24 = var1;
    var1 = function GuildDCSwitchRow(arg1) {
        var2 = arg1;
        var8 = var2.dc;
        var _closure2_slot0 = var8;
        var5 = var2.guildId;
        var _closure2_slot1 = var5;
        var6 = var2.isDismissed;
        var4 = _closure1_slot4;
        var3 = var4.useCallback;
        var2 = new Array(2);
        var2[0] = var8;
        var2[1] = var5;
        var1 = function(arg1) {
            _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = arg1;
                if(var1) { _fun0003_ip = 16; continue _fun0003 }
case 17:
                var1 = 19;
                var1 = var2[var1];
                var4 = undefined;
                var6 = var3.bind(var4)(var1);
                var5 = var6.removeDismissedRecurringContent;
                var1 = 20;
                var1 = var2[var1];
                var1 = var3.bind(var4)(var1);
                var1 = var1.DismissibleContent;
                var1 = var1.GUILD_POWERUP_NOTIFICATION;
                var1 = var5.bind(var6)(var1);
                var1 = 18;
                var1 = var2[var1];
                var6 = var3.bind(var4)(var1);
                var5 = var6.unmarkContentAsDismissed;
                var4 = _closure2_slot0;
                var1 = _closure2_slot1;
                var1 = var5.bind(var6)(var4, var1);
                _fun0003_ip = 18; continue _fun0003;
case 16:
                var1 = 18;
                var2 = var2[var1];
                var1 = undefined;
                var5 = var3.bind(var1)(var2);
                var4 = var5.markContentAsDismissed;
                var3 = _closure2_slot0;
                var2 = _closure2_slot1;
                var1 = false;
                var1 = var4.bind(var5)(var3, var2, var1);
case 18:
                var1 = undefined;
                return var1;
            }
        };
        var5 = var3.bind(var4)(var1, var2);
        var4 = _closure1_slot18;
        var2 = _closure1_slot0;
        var3 = _closure1_slot2;
        var1 = 17;
        var1 = var3[var1];
        var3 = undefined;
        var1 = var2.bind(var3)(var1);
        var2 = var1.TableSwitchRow;
        var1 = {};
        var7 = _closure1_slot15;
        var7 = var7.bind(var3)(var8);
        var1['label'] = var7;
        var1['value'] = var6;
        var1['onValueChange'] = var5;
        var1 = var4.bind(var3)(var2, var1);
        return var1;
    };
    var _closure1_slot25 = var1;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var4);
    var1 = 0;
    var4 = var6[var1];
    var1 = undefined;
    var4 = var11.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var12 = 1;
    var7 = var6[var12];
    var4 = metroImportAll;
    var4 = var4.bind(var1)(var7);
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.ScrollView;
    var _closure1_slot5 = var7;
    var4 = var4.View;
    var _closure1_slot6 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var11.bind(var1)(var4);
    var _closure1_slot7 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var11.bind(var1)(var4);
    var _closure1_slot8 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var11.bind(var1)(var4);
    var _closure1_slot9 = var4;
    var4 = 6;
    var4 = var6[var4];
    var4 = var11.bind(var1)(var4);
    var _closure1_slot10 = var4;
    var4 = 7;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.GUILD_DCS;
    var _closure1_slot11 = var7;
    var7 = var4.SERVER_TAG_GUILD_DCS;
    var _closure1_slot12 = var7;
    var7 = var4.USER_DCS;
    var _closure1_slot13 = var7;
    var7 = var4.VANITY_URL_POWERUP_DCS;
    var _closure1_slot14 = var7;
    var7 = var4.getGuildDCString;
    var _closure1_slot15 = var7;
    var4 = var4.getUserDCString;
    var _closure1_slot16 = var4;
    var4 = 8;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.Endpoints;
    var _closure1_slot17 = var4;
    var4 = 9;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.jsx;
    var _closure1_slot18 = var7;
    var4 = var4.jsxs;
    var _closure1_slot19 = var4;
    var4 = 10;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = {};
    var9 = {};
    var10 = 11;
    var13 = var6[var10];
    var13 = var11.bind(var1)(var13);
    var13 = var13.colors;
    var13 = var13.BACKGROUND_BASE_LOW;
    var9['backgroundColor'] = var13;
    var9['flex'] = var12;
    var4['container'] = var9;
    var9 = {};
    var12 = var6[var10];
    var12 = var11.bind(var1)(var12);
    var12 = var12.spacing;
    var12 = var12.PX_16;
    var9['padding'] = var12;
    var12 = var6[var10];
    var12 = var11.bind(var1)(var12);
    var12 = var12.spacing;
    var12 = var12.PX_16;
    var9['gap'] = var12;
    var4['scrollContainer'] = var9;
    var9 = {'flex': 1, 'justifyContent': 'center', 'alignItems': 'center'};
    var10 = var6[var10];
    var10 = var11.bind(var1)(var10);
    var10 = var10.spacing;
    var10 = var10.PX_32;
    var9['padding'] = var10;
    var4['noGuildContainer'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot20 = var4;
    var4 = 26;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/devtools/native/components/screens/DevToolsGuildPowerupsScreen.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function DevToolsGuildPowerupsScreen() {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var1 = _closure1_slot20;
            var5 = undefined;
            var8 = var1.bind(var5)();
            var2 = _closure1_slot1;
            var7 = _closure1_slot2;
            var1 = 21;
            var1 = var7[var1];
            var1 = var2.bind(var5)(var1);
            var4 = var1.bind(var5)();
            var3 = _closure1_slot0;
            var2 = 22;
            var1 = var7[var2];
            var11 = var3.bind(var5)(var1);
            var10 = var11.useStateFromStores;
            var1 = _closure1_slot10;
            var9 = new Array(1);
            var9[0] = var1;
            var1 = function() {
                var2 = _closure1_slot10;
                var1 = var2.getGuildId;
                var1 = var1.bind(var2)();
                return var1;
            };
            var1 = var10.bind(var11)(var9, var1);
            var _closure2_slot0 = var1;
            var9 = var7[var2];
            var12 = var3.bind(var5)(var9);
            var11 = var12.useStateFromStores;
            var9 = _closure1_slot9;
            var10 = new Array(1);
            var10[0] = var9;
            var9 = function() {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                    var1 = _closure2_slot0;
                    var2 = null;
                    var4 = var2 != var1;
                    var1 = null;
                    if(!var4) { _fun0005_ip = 19; continue _fun0005 }
case 20:
                    var5 = _closure1_slot9;
                    var4 = var5.getGuild;
                    var3 = _closure2_slot0;
                    var3 = var4.bind(var5)(var3);
                    var4 = var2 == var3;
                    var2 = undefined;
                    if(var4) { _fun0005_ip = 21; continue _fun0005 }
case 22:
                    var2 = var3.name;
case 21:
                    var1 = var2;
case 19:
                    return var1;
                }
            };
            var11 = var11.bind(var12)(var10, var9);
            var9 = var7[var2];
            var13 = var3.bind(var5)(var9);
            var12 = var13.useStateFromStoresArray;
            var9 = _closure1_slot7;
            var10 = new Array(1);
            var10[0] = var9;
            var9 = function() {
                var6 = _closure1_slot11;
                var3 = new Array(0);
                var5 = 0;
                var7 = var3;
                var5 = arraySpread(var7, var6, var5);
                var6 = _closure1_slot12;
                var7 = var3;
                var1 = arraySpread(var7, var6, var5);
                var2 = var3.filter;
                var1 = function(arg1) {
                    _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                        var3 = _closure2_slot0;
                        var1 = null;
                        var1 = var1 != var3;
                        if(!var1) { _fun0006_ip = 23; continue _fun0006 }
case 3:
                        var5 = _closure1_slot0;
                        var4 = _closure1_slot2;
                        var3 = 18;
                        var4 = var4[var3];
                        var3 = undefined;
                        var5 = var5.bind(var3)(var4);
                        var4 = var5.isContentDismissed;
                        var3 = _closure2_slot0;
                        var2 = arg1;
                        var1 = var4.bind(var5)(var2, var3);
case 23:
                        return var1;
                    }
                };
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var9 = var12.bind(var13)(var10, var9);
            var _closure2_slot1 = var9;
            var2 = var7[var2];
            var9 = var3.bind(var5)(var2);
            var7 = var9.useStateFromStoresArray;
            var2 = _closure1_slot8;
            var3 = new Array(1);
            var3[0] = var2;
            var2 = function() {
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                    var3 = _closure2_slot0;
                    var2 = null;
                    if(!(var2 != var3)) { _fun0007_ip = 24; continue _fun0007 }
case 25:
                    var4 = _closure1_slot8;
                    var3 = var4.getAppliedGuildBoostsForGuild;
                    var1 = _closure2_slot0;
                    var1 = var3.bind(var4)(var1);
                    if(!(var2 == var1)) { _fun0007_ip = 26; continue _fun0007 }
case 24:
                    var1 = new Array(0);
case 26:
                    return var1;
                }
            };
            var2 = var7.bind(var9)(var3, var2);
            var _closure2_slot2 = var2;
            var12 = null;
            if(!(var12 != var1)) { _fun0004_ip = 27; continue _fun0004 }
case 28:
            var3 = _closure1_slot19;
            var2 = _closure1_slot5;
            var1 = {};
            var7 = var8.container;
            var1['style'] = var7;
            var9 = var8.scrollContainer;
            var7 = new Array(2);
            var7[0] = var9;
            var9 = {};
            var13 = var4.bottom;
            var15 = _closure1_slot1;
            var4 = _closure1_slot2;
            var10 = 11;
            var10 = var4[var10];
            var10 = var15.bind(var5)(var10);
            var10 = var10.spacing;
            var10 = var10.PX_16;
            var10 = var13 + var10;
            var9['paddingBottom'] = var10;
            var7[1] = var9;
            var1['contentContainerStyle'] = var7;
            var10 = _closure1_slot18;
            var9 = _closure1_slot0;
            var7 = 24;
            var4 = var4[var7];
            var4 = var9.bind(var5)(var4);
            var9 = var4.TableRowGroup;
            var4 = {};
            var12 = var12 != var11;
            var13 = 'Unknown';
            if(!var12) { _fun0004_ip = 29; continue _fun0004 }
case 30:
            var13 = var11;
case 29:
            var11 = global;
            var11 = var11.HermesInternal;
            var12 = var11.concat;
            var11 = 'Current Guild: ';
            var11 = var12.bind(var11)(var13);
            var4['title'] = var11;
            var11 = false;
            var4['hasIcons'] = var11;
            var17 = _closure1_slot18;
            var12 = _closure1_slot0;
            var15 = _closure1_slot2;
            var11 = 25;
            var13 = var15[var11];
            var13 = var12.bind(var5)(var13);
            var16 = var13.TableRow;
            var13 = {};
            var18 = 'Reset Notification Indicators';
            var13['label'] = var18;
            var18 = function onPress() {
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 15;
                var2 = var2[var1];
                var1 = undefined;
                var2 = var3.bind(var1)(var2);
                var1 = var2.guildPowerupsResetNotifications;
                var1 = var1.bind(var2)();
                return var1;
            };
            var13['onPress'] = var18;
            var13 = var17.bind(var5)(var16, var13);
            var4['children'] = var13;
            var9 = var10.bind(var5)(var9, var4);
            var4 = new Array(7);
            var4[0] = var9;
            var13 = _closure1_slot19;
            var9 = var15[var7];
            var9 = var12.bind(var5)(var9);
            var10 = var9.TableRowGroup;
            var9 = {'title': 'Warning State', 'hasIcons': false};
            var18 = _closure1_slot18;
            var16 = var15[var11];
            var16 = var12.bind(var5)(var16);
            var17 = var16.TableRow;
            var16 = {};
            var19 = 'Set Half Boosts expiring in 1 day';
            var16['label'] = var19;
            var19 = function onPress() {
                var5 = _closure1_slot21;
                var4 = _closure2_slot0;
                var3 = _closure2_slot2;
                var2 = var3.slice;
                var1 = global;
                var7 = var1.Math;
                var6 = var7.floor;
                var8 = var3.length;
                var1 = 2;
                var1 = var8 / var1;
                var1 = var6.bind(var7)(var1);
                var3 = var2.bind(var3)(var1);
                var2 = undefined;
                var1 = false;
                var1 = var5.bind(var2)(var4, var3, var1);
                return var1;
            };
            var16['onPress'] = var19;
            var17 = var18.bind(var5)(var17, var16);
            var16 = new Array(2);
            var16[0] = var17;
            var19 = _closure1_slot18;
            var17 = var15[var11];
            var17 = var12.bind(var5)(var17);
            var18 = var17.TableRow;
            var17 = {};
            var20 = 'Reset End Date';
            var17['label'] = var20;
            var20 = function onPress() {
                var5 = _closure1_slot21;
                var4 = _closure2_slot0;
                var3 = _closure2_slot2;
                var2 = undefined;
                var1 = true;
                var1 = var5.bind(var2)(var4, var3, var1);
                return var1;
            };
            var17['onPress'] = var20;
            var17 = var19.bind(var5)(var18, var17);
            var16[1] = var17;
            var9['children'] = var16;
            var9 = var13.bind(var5)(var10, var9);
            var4[1] = var9;
            var13 = _closure1_slot18;
            var9 = var15[var7];
            var9 = var12.bind(var5)(var9);
            var10 = var9.TableRowGroup;
            var9 = {'title': 'User Level DCs', 'hasIcons': false};
            var18 = _closure1_slot13;
            var17 = var18.map;
            var16 = function(arg1) {
                var5 = arg1;
                var4 = _closure1_slot18;
                var3 = _closure1_slot24;
                var2 = {};
                var2['dc'] = var5;
                var1 = undefined;
                var1 = var4.bind(var1)(var3, var2, var5);
                return var1;
            };
            var16 = var17.bind(var18)(var16);
            var9['children'] = var16;
            var9 = var13.bind(var5)(var10, var9);
            var4[2] = var9;
            var13 = _closure1_slot18;
            var9 = var15[var7];
            var9 = var12.bind(var5)(var9);
            var10 = var9.TableRowGroup;
            var9 = {'title': 'Guild Level DCs', 'hasIcons': false};
            var18 = _closure1_slot11;
            var17 = var18.map;
            var16 = function(arg1) {
                var5 = arg1;
                var4 = _closure1_slot18;
                var3 = _closure1_slot25;
                var2 = {};
                var2['dc'] = var5;
                var6 = _closure2_slot0;
                var2['guildId'] = var6;
                var6 = _closure2_slot1;
                var1 = var6.includes;
                var1 = var1.bind(var6)(var5);
                var2['isDismissed'] = var1;
                var1 = undefined;
                var1 = var4.bind(var1)(var3, var2, var5);
                return var1;
            };
            var16 = var17.bind(var18)(var16);
            var9['children'] = var16;
            var9 = var13.bind(var5)(var10, var9);
            var4[3] = var9;
            var13 = _closure1_slot18;
            var9 = var15[var7];
            var9 = var12.bind(var5)(var9);
            var10 = var9.TableRowGroup;
            var9 = {'title': 'Server Tag Guild Level DCs', 'hasIcons': false};
            var18 = _closure1_slot12;
            var17 = var18.map;
            var16 = function(arg1) {
                var5 = arg1;
                var4 = _closure1_slot18;
                var3 = _closure1_slot25;
                var2 = {};
                var2['dc'] = var5;
                var6 = _closure2_slot0;
                var2['guildId'] = var6;
                var6 = _closure2_slot1;
                var1 = var6.includes;
                var1 = var1.bind(var6)(var5);
                var2['isDismissed'] = var1;
                var1 = undefined;
                var1 = var4.bind(var1)(var3, var2, var5);
                return var1;
            };
            var16 = var17.bind(var18)(var16);
            var9['children'] = var16;
            var9 = var13.bind(var5)(var10, var9);
            var4[4] = var9;
            var13 = _closure1_slot18;
            var9 = var15[var7];
            var9 = var12.bind(var5)(var9);
            var10 = var9.TableRowGroup;
            var9 = {'title': 'Powerup Rollback DCs', 'hasIcons': false};
            var18 = _closure1_slot14;
            var17 = var18.map;
            var16 = function(arg1) {
                var5 = arg1;
                var4 = _closure1_slot18;
                var3 = _closure1_slot24;
                var2 = {};
                var2['dc'] = var5;
                var1 = undefined;
                var1 = var4.bind(var1)(var3, var2, var5);
                return var1;
            };
            var16 = var17.bind(var18)(var16);
            var9['children'] = var16;
            var9 = var13.bind(var5)(var10, var9);
            var4[5] = var9;
            var10 = _closure1_slot18;
            var7 = var15[var7];
            var7 = var12.bind(var5)(var7);
            var9 = var7.TableRowGroup;
            var7 = {'title': 'System Messages', 'hasIcons': false};
            var13 = _closure1_slot18;
            var11 = var15[var11];
            var11 = var12.bind(var5)(var11);
            var12 = var11.TableRow;
            var11 = {};
            var15 = 'Send Powerups System Message';
            var11['label'] = var15;
            var14 = function onPress() {
                var3 = _closure2_slot0;
                var2 = function sendPowerupsSystemMessage() {
                    var1 = undefined;
                    var4 = _closure1_slot23;
                    var3 = var4.apply;
                    var1 = arguments;
                    var2 = var1;
                    var1 = this;
                    var1 = var3.bind(var4)(var1, var2);
                    return var1;
                };
                var1 = undefined;
                var1 = var2.bind(var1)(var3);
                return var1;
            };
            var11['onPress'] = var14;
            var11 = var13.bind(var5)(var12, var11);
            var7['children'] = var11;
            var7 = var10.bind(var5)(var9, var7);
            var4[6] = var7;
            var1['children'] = var4;
            var1 = var3.bind(var5)(var2, var1);
            _fun0004_ip = 31; continue _fun0004;
case 27:
            var4 = _closure1_slot18;
            var3 = _closure1_slot6;
            var2 = {};
            var9 = var8.container;
            var7 = new Array(2);
            var7[0] = var9;
            var8 = var8.noGuildContainer;
            var7[1] = var8;
            var2['style'] = var7;
            var8 = _closure1_slot18;
            var7 = _closure1_slot0;
            var9 = _closure1_slot2;
            var6 = 23;
            var6 = var9[var6];
            var6 = var7.bind(var5)(var6);
            var7 = var6.Text;
            var6 = {'variant': 'heading-md/semibold', 'color': 'text-muted', 'children': 'No guild selected'};
            var6 = var8.bind(var5)(var7, var6);
            var2['children'] = var6;
            var1 = var4.bind(var5)(var3, var2);
case 31:
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();