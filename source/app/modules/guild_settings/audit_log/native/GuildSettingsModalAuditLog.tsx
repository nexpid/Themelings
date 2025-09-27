// app/modules/guild_settings/audit_log/native/GuildSettingsModalAuditLog.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var12 = metroImportDefault;
    var7 = metroImportAll;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var12;
    var _closure1_slot2 = var7;
    var _closure1_slot3 = var6;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var4);
    var10 = 0;
    var4 = var6[var10];
    var1 = undefined;
    var4 = var12.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.ActivityIndicator;
    var _closure1_slot6 = var7;
    var7 = var4.View;
    var _closure1_slot7 = var7;
    var4 = var4.FlatList;
    var _closure1_slot8 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var12.bind(var1)(var4);
    var _closure1_slot9 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var12.bind(var1)(var4);
    var _closure1_slot10 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var12.bind(var1)(var4);
    var _closure1_slot11 = var4;
    var4 = 6;
    var4 = var6[var4];
    var4 = var12.bind(var1)(var4);
    var _closure1_slot12 = var4;
    var4 = 7;
    var4 = var6[var4];
    var4 = var12.bind(var1)(var4);
    var _closure1_slot13 = var4;
    var4 = 8;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.GuildSettingsSections;
    var _closure1_slot14 = var7;
    var4 = var4.AuditLogFilterTypes;
    var _closure1_slot15 = var4;
    var4 = 9;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.jsx;
    var _closure1_slot16 = var7;
    var7 = var4.jsxs;
    var _closure1_slot17 = var7;
    var4 = var4.Fragment;
    var _closure1_slot18 = var4;
    var4 = 10;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = {};
    var9 = {};
    var11 = 12;
    var9['marginVertical'] = var11;
    var4['listView'] = var9;
    var9 = {};
    var11 = 40;
    var9['marginTop'] = var11;
    var4['spinner'] = var9;
    var9 = {'borderRadius': null, 'paddingVertical': 6, 'paddingHorizontal': 8};
    var11 = 11;
    var13 = var6[var11];
    var13 = var12.bind(var1)(var13);
    var13 = var13.radii;
    var13 = var13.md;
    var9['borderRadius'] = var13;
    var13 = var6[var11];
    var13 = var12.bind(var1)(var13);
    var13 = var13.colors;
    var13 = var13.INPUT_BACKGROUND;
    var9['backgroundColor'] = var13;
    var4['filterTextWrapper'] = var9;
    var9 = {};
    var13 = var6[var11];
    var13 = var12.bind(var1)(var13);
    var13 = var13.spacing;
    var13 = var13.PX_12;
    var9['paddingTop'] = var13;
    var11 = var6[var11];
    var11 = var12.bind(var1)(var11);
    var11 = var11.spacing;
    var11 = var11.PX_8;
    var9['paddingHorizontal'] = var11;
    var4['filtersWrapper'] = var9;
    var9 = {};
    var9['marginTop'] = var10;
    var4['firstAuditRow'] = var9;
    var9 = {};
    var9['marginBottom'] = var10;
    var4['lastAuditRow'] = var9;
    var9 = {'flexDirection': 'row', 'alignItems': 'center', 'flexWrap': 'wrap', 'gap': 8};
    var4['filterTrailing'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot19 = var4;
    var4 = 27;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/guild_settings/audit_log/native/GuildSettingsModalAuditLog.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function ConnectedGuildSettingsModalAuditLog(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var2 = arg1;
            var1 = var2.guildId;
            var _closure2_slot0 = var1;
            var23 = var2.contentContainerStyle;
            var2 = _closure1_slot19;
            var4 = undefined;
            var25 = var2.bind(var4)();
            var _closure2_slot1 = var25;
            var9 = _closure1_slot0;
            var8 = _closure1_slot3;
            var2 = 12;
            var2 = var8[var2];
            var3 = var9.bind(var4)(var2);
            var2 = var3.useNavigation;
            var2 = var2.bind(var3)();
            var _closure2_slot2 = var2;
            var5 = 13;
            var3 = var8[var5];
            var11 = var9.bind(var4)(var3);
            var10 = var11.useStateFromStores;
            var3 = _closure1_slot9;
            var7 = new Array(2);
            var7[0] = var3;
            var3 = _closure1_slot11;
            var7[1] = var3;
            var3 = function() {
                var3 = _closure1_slot9;
                var2 = var3.getChannel;
                var4 = _closure1_slot11;
                var1 = var4.getChannelId;
                var1 = var1.bind(var4)();
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var3 = var10.bind(var11)(var7, var3);
            var _closure2_slot3 = var3;
            var7 = var8[var5];
            var12 = var9.bind(var4)(var7);
            var11 = var12.useStateFromStoresObject;
            var7 = _closure1_slot13;
            var10 = new Array(2);
            var10[0] = var7;
            var7 = _closure1_slot12;
            var10[1] = var7;
            var7 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var3 = _closure1_slot2;
                    var4 = _closure1_slot3;
                    var1 = 14;
                    var1 = var4[var1];
                    var8 = undefined;
                    var3 = var3.bind(var8)(var1);
                    var1 = var3.ACTION_FILTER_ITEMS;
                    var4 = var1.bind(var3)();
                    var3 = var4.filter;
                    var1 = function(arg1) {
                        var1 = arg1;
                        var2 = var1.value;
                        var1 = _closure1_slot13;
                        var1 = var1.actionFilter;
                        var1 = var2 === var1;
                        return var1;
                    };
                    var3 = var3.bind(var4)(var1);
                    var1 = 0;
                    var6 = var3[var1];
                    var1 = _closure1_slot13;
                    var1 = var1.userIdFilter;
                    var3 = null;
                    var1 = var3 != var1;
                    var4 = null;
                    if(!var1) { _fun0002_ip = 106; continue _fun0002 }
 81:
                    var7 = _closure1_slot12;
                    var5 = var7.getUser;
                    var1 = _closure1_slot13;
                    var1 = var1.userIdFilter;
                    var4 = var5.bind(var7)(var1);
 106:
                    var1 = {};
                    var5 = _closure1_slot13;
                    var7 = var5.isInitialLoading;
                    var1['isInitialLoading'] = var7;
                    var7 = var5.isLoading;
                    var1['isLoading'] = var7;
                    var7 = var5.isLoadingNextPage;
                    var1['isLoadingNextPage'] = var7;
                    var9 = var5.groupedFetchCount;
                    var7 = 2;
                    var7 = var9 > var7;
                    var1['showLoadMore'] = var7;
                    var7 = var5.hasError;
                    var1['hasError'] = var7;
                    var7 = var5.hasOlderLogs;
                    var1['hasOlderLogs'] = var7;
                    var5 = var5.actionFilter;
                    var1['actionFilter'] = var5;
                    var7 = var3 != var6;
                    var5 = '';
                    if(!var7) { _fun0002_ip = 216; continue _fun0002 }
 211:
                    var5 = var6.label;
 216:
                    var1['actionFilterLabel'] = var5;
                    var5 = _closure1_slot13;
                    var5 = var5.userIdFilter;
                    var1['userIdFilter'] = var5;
                    if(!(var3 == var4)) { _fun0002_ip = 297; continue _fun0002 }
 240:
                    var7 = _closure1_slot0;
                    var9 = _closure1_slot3;
                    var3 = 15;
                    var5 = var9[var3];
                    var5 = var7.bind(var8)(var5);
                    var6 = var5.intl;
                    var5 = var6.string;
                    var3 = var9[var3];
                    var3 = var7.bind(var8)(var3);
                    var3 = var3.t;
                    var3 = var3.ZRFdsL;
                    var3 = var5.bind(var6)(var3);
                    _fun0002_ip = 302; continue _fun0002;
 297:
                    var3 = var4.tag;
 302:
                    var1['userIdFilterLabel'] = var3;
                    var2 = _closure1_slot13;
                    var2 = var2.logs;
                    var1['_logs'] = var2;
                    return var1;
                }
            };
            var10 = var11.bind(var12)(var10, var7);
            var15 = var10.isInitialLoading;
            var17 = var10.isLoading;
            var13 = var10.isLoadingNextPage;
            var19 = var10.hasError;
            var12 = var10.actionFilter;
            var _closure2_slot4 = var12;
            var7 = var10.userIdFilter;
            var _closure2_slot5 = var7;
            var39 = var10.userIdFilterLabel;
            var37 = var10.actionFilterLabel;
            var14 = var10._logs;
            var _closure2_slot6 = var14;
            var5 = var8[var5];
            var11 = var9.bind(var4)(var5);
            var10 = var11.useStateFromStores;
            var5 = _closure1_slot10;
            var9 = new Array(1);
            var9[0] = var5;
            var5 = function() {
                var3 = _closure1_slot10;
                var2 = var3.getGuild;
                var1 = _closure2_slot0;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var9 = var10.bind(var11)(var9, var5);
            var _closure2_slot7 = var9;
            var5 = _closure1_slot5;
            var11 = var5.useMemo;
            var10 = new Array(2);
            var10[0] = var14;
            var10[1] = var9;
            var9 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                    var1 = _closure2_slot6;
                    var3 = null;
                    if(!(var3 != var1)) { _fun0003_ip = 21; continue _fun0003 }
 13:
                    var1 = _closure2_slot7;
                    if(!(var3 == var1)) { _fun0003_ip = 27; continue _fun0003 }
 21:
                    var1 = new Array(0);
                    _fun0003_ip = 72; continue _fun0003;
 27:
                    var5 = _closure1_slot2;
                    var4 = _closure1_slot3;
                    var3 = 14;
                    var4 = var4[var3];
                    var3 = undefined;
                    var5 = var5.bind(var3)(var4);
                    var4 = var5.transformLogs;
                    var3 = _closure2_slot6;
                    var2 = _closure2_slot7;
                    var1 = var4.bind(var5)(var3, var2);
 72:
                    return var1;
                }
            };
            var22 = var11.bind(var5)(var9, var10);
            var _closure2_slot8 = var22;
            var10 = var5.useState;
            var9 = {'current': null, 'prev': null};
            var14 = var10.bind(var5)(var9);
            var10 = _closure1_slot4;
            var9 = 2;
            var10 = var10.bind(var4)(var14, var9);
            var16 = 0;
            var21 = var10[var16];
            var _closure2_slot9 = var21;
            var9 = 1;
            var9 = var10[var9];
            var _closure2_slot10 = var9;
            var10 = var5.useCallback;
            var9 = new Array(3);
            var9[0] = var12;
            var9[1] = var7;
            var9[2] = var2;
            var7 = function() {
                var11 = _closure1_slot0;
                var12 = _closure1_slot3;
                var1 = 16;
                var2 = var12[var1];
                var1 = undefined;
                var4 = var11.bind(var1)(var2);
                var3 = var4.showSimpleActionSheet;
                var2 = {};
                var5 = 'GuildSettingsAuditLogFilter';
                var2['key'] = var5;
                var6 = {};
                var8 = 15;
                var5 = var12[var8];
                var5 = var11.bind(var1)(var5);
                var10 = var5.intl;
                var9 = var10.string;
                var5 = var12[var8];
                var5 = var11.bind(var1)(var5);
                var5 = var5.t;
                var5 = var5.hxnY/v;
                var5 = var9.bind(var10)(var5);
                var6['label'] = var5;
                var5 = function onPress() {
                    _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                        var5 = _closure2_slot2;
                        var4 = var5.push;
                        var2 = _closure1_slot14;
                        var3 = var2.AUDIT_LOG_FILTER;
                        var2 = {};
                        var6 = _closure1_slot15;
                        var6 = var6.USER;
                        var2['filterType'] = var6;
                        var7 = _closure1_slot0;
                        var6 = _closure1_slot3;
                        var1 = 17;
                        var6 = var6[var1];
                        var1 = undefined;
                        var8 = var7.bind(var1)(var6);
                        var7 = var8.createAuditLogFilterUserData;
                        var10 = _closure2_slot5;
                        var6 = null;
                        var10 = var6 != var10;
                        var6 = undefined;
                        if(!var10) { _fun0004_ip = 89; continue _fun0004 }
 85:
                        var6 = _closure2_slot5;
 89:
                        var6 = var7.bind(var8)(var6);
                        var2['data'] = var6;
                        var2 = var4.bind(var5)(var3, var2);
                        return var1;
                    }
                };
                var6['onPress'] = var5;
                var5 = new Array(2);
                var5[0] = var6;
                var6 = {};
                var9 = var12[var8];
                var9 = var11.bind(var1)(var9);
                var10 = var9.intl;
                var9 = var10.string;
                var8 = var12[var8];
                var8 = var11.bind(var1)(var8);
                var8 = var8.t;
                var8 = var8.rautdn;
                var8 = var9.bind(var10)(var8);
                var6['label'] = var8;
                var7 = function onPress() {
                    var5 = _closure2_slot2;
                    var4 = var5.push;
                    var2 = _closure1_slot14;
                    var3 = var2.AUDIT_LOG_FILTER;
                    var2 = {};
                    var7 = _closure1_slot15;
                    var7 = var7.ACTION;
                    var2['filterType'] = var7;
                    var8 = _closure1_slot0;
                    var7 = _closure1_slot3;
                    var1 = 17;
                    var7 = var7[var1];
                    var1 = undefined;
                    var8 = var8.bind(var1)(var7);
                    var7 = var8.createAuditLogFilterActionData;
                    var6 = _closure2_slot4;
                    var6 = var7.bind(var8)(var6);
                    var2['data'] = var6;
                    var2 = var4.bind(var5)(var3, var2);
                    return var1;
                };
                var6['onPress'] = var7;
                var5[1] = var6;
                var2['options'] = var5;
                var2 = var3.bind(var4)(var2);
                return var1;
            };
            var29 = var10.bind(var5)(var7, var9);
            var _closure2_slot11 = var29;
            var9 = var5.useCallback;
            var7 = new Array(5);
            var7[0] = var25;
            var7[1] = var21;
            var7[2] = var3;
            var7[3] = var1;
            var3 = var22.length;
            var7[4] = var3;
            var3 = function(arg1) {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                    var2 = arg1;
                    var1 = var2.item;
                    var13 = var2.index;
                    var2 = _closure2_slot9;
                    var10 = var2.current;
                    var9 = var1.id;
                    var8 = var2.prev;
                    var7 = var1.id;
                    var2 = _closure2_slot8;
                    var3 = var2.length;
                    var2 = 1;
                    var2 = var3 - var2;
                    var12 = var13 === var2;
                    var5 = _closure1_slot16;
                    var3 = _closure1_slot1;
                    var4 = _closure1_slot3;
                    var2 = 18;
                    var2 = var4[var2];
                    var4 = undefined;
                    var3 = var3.bind(var4)(var2);
                    var2 = {};
                    var11 = 0;
                    var13 = var11 === var13;
                    if(!var13) { _fun0005_ip = 111; continue _fun0005 }
 101:
                    var11 = _closure2_slot1;
                    var13 = var11.firstAuditRow;
 111:
                    var11 = new Array(2);
                    var11[0] = var13;
                    if(!var12) { _fun0005_ip = 132; continue _fun0005 }
 122:
                    var13 = _closure2_slot1;
                    var12 = var13.lastAuditRow;
 132:
                    var11[1] = var12;
                    var2['containerStyle'] = var11;
                    var11 = function onHeaderClick(arg1) {
                        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
                            var4 = arg1;
                            var2 = _closure2_slot9;
                            var3 = var2.current;
                            var2 = var4.id;
                            if(!(var3 === var2)) { _fun0006_ip = 51; continue _fun0006 }
 24:
                            var5 = _closure2_slot10;
                            var3 = undefined;
                            var2 = {'current': null, 'prev': null};
                            var2 = var5.bind(var3)(var2);
                            _fun0006_ip = 87; continue _fun0006;
 51:
                            var3 = _closure2_slot10;
                            var2 = {};
                            var4 = var4.id;
                            var2['current'] = var4;
                            var1 = _closure2_slot9;
                            var1 = var1.current;
                            var2['prev'] = var1;
                            var1 = undefined;
                            var1 = var3.bind(var1)(var2);
 87:
                            var1 = undefined;
                            return var1;
                        }
                    };
                    var2['onHeaderClick'] = var11;
                    var2['log'] = var1;
                    var9 = var10 === var9;
                    var2['expanded'] = var9;
                    var7 = var8 === var7;
                    var2['lastExpanded'] = var7;
                    var7 = _closure2_slot0;
                    var2['guildId'] = var7;
                    var6 = _closure2_slot3;
                    var2['channel'] = var6;
                    var1 = var1.id;
                    var1 = var5.bind(var4)(var3, var2, var1);
                    return var1;
                }
            };
            var20 = var9.bind(var5)(var3, var7);
            var7 = var5.useLayoutEffect;
            var3 = new Array(2);
            var3[0] = var29;
            var3[1] = var2;
            var2 = function() {
                var3 = _closure2_slot2;
                var2 = var3.setOptions;
                var1 = {};
                var4 = function headerRight() {
                    var4 = _closure1_slot16;
                    var8 = _closure1_slot0;
                    var9 = _closure1_slot3;
                    var1 = 19;
                    var1 = var9[var1];
                    var3 = undefined;
                    var1 = var8.bind(var3)(var1);
                    var2 = var1.HeaderActionButton;
                    var1 = {};
                    var5 = _closure2_slot11;
                    var1['onPress'] = var5;
                    var5 = 15;
                    var6 = var9[var5];
                    var6 = var8.bind(var3)(var6);
                    var7 = var6.intl;
                    var6 = var7.string;
                    var5 = var9[var5];
                    var5 = var8.bind(var3)(var5);
                    var5 = var5.t;
                    var5 = var5.pEasFR;
                    var5 = var6.bind(var7)(var5);
                    var1['text'] = var5;
                    var1 = var4.bind(var3)(var2, var1);
                    return var1;
                };
                var1['headerRight'] = var4;
                var1 = var2.bind(var3)(var1);
                var1 = undefined;
                return var1;
            };
            var2 = var7.bind(var5)(var2, var3);
            var3 = var5.useEffect;
            var2 = new Array(1);
            var2[0] = var1;
            var1 = function() {
                var3 = _closure1_slot0;
                var2 = _closure1_slot3;
                var1 = 20;
                var2 = var2[var1];
                var1 = undefined;
                var4 = var3.bind(var1)(var2);
                var3 = var4.fetchLogs;
                var2 = _closure2_slot0;
                var2 = var3.bind(var4)(var2);
                return var1;
            };
            var1 = var3.bind(var5)(var1, var2);
            var3 = _closure1_slot16;
            var2 = _closure1_slot6;
            var1 = {};
            var5 = var25.spinner;
            var1['style'] = var5;
            var5 = true;
            var1['animating'] = var5;
            var7 = _closure1_slot1;
            var5 = 11;
            var5 = var8[var5];
            var5 = var7.bind(var4)(var5);
            var5 = var5.unsafe_rawColors;
            var5 = var5.BRAND_500;
            var1['color'] = var5;
            var5 = 'large';
            var1['size'] = var5;
            var12 = var3.bind(var4)(var2, var1);
            var3 = _closure1_slot17;
            var2 = _closure1_slot18;
            var1 = {};
            var7 = var12;
            if(var17) { _fun0001_ip = 1332; continue _fun0001 }
 611:
            var7 = var12;
            if(var15) { _fun0001_ip = 1332; continue _fun0001 }
 620:
            var9 = _closure1_slot17;
            var8 = _closure1_slot18;
            var5 = {};
            var26 = _closure1_slot16;
            var14 = _closure1_slot7;
            var10 = {};
            var24 = var25.filtersWrapper;
            var10['style'] = var24;
            var30 = _closure1_slot0;
            var31 = _closure1_slot3;
            var24 = 21;
            var24 = var31[var24];
            var24 = var30.bind(var4)(var24);
            var28 = var24.TableRow;
            var27 = {'start': true, 'end': true};
            var35 = 22;
            var24 = var31[var35];
            var24 = var30.bind(var4)(var24);
            var33 = var24.Text;
            var32 = {};
            var24 = 'text-md/semibold';
            var32['variant'] = var24;
            var24 = 15;
            var34 = var31[var24];
            var34 = var30.bind(var4)(var34);
            var38 = var34.intl;
            var36 = var38.string;
            var34 = var31[var24];
            var34 = var30.bind(var4)(var34);
            var34 = var34.t;
            var34 = var34.kP6oFx;
            var34 = var36.bind(var38)(var34);
            var32['children'] = var34;
            var32 = var26.bind(var4)(var33, var32);
            var27['icon'] = var32;
            var32 = {};
            var33 = var25.filterTrailing;
            var32['style'] = var33;
            var33 = {};
            var34 = var25.filterTextWrapper;
            var33['style'] = var34;
            var34 = var31[var35];
            var34 = var30.bind(var4)(var34);
            var36 = var34.Text;
            var34 = {};
            var38 = 'text-sm/semibold';
            var34['variant'] = var38;
            var34['children'] = var39;
            var34 = var26.bind(var4)(var36, var34);
            var33['children'] = var34;
            var34 = var26.bind(var4)(var14, var33);
            var33 = new Array(2);
            var33[0] = var34;
            var34 = {};
            var36 = var25.filterTextWrapper;
            var34['style'] = var36;
            var35 = var31[var35];
            var35 = var30.bind(var4)(var35);
            var36 = var35.Text;
            var35 = {};
            var35['variant'] = var38;
            var35['children'] = var37;
            var35 = var26.bind(var4)(var36, var35);
            var34['children'] = var35;
            var34 = var26.bind(var4)(var14, var34);
            var33[1] = var34;
            var32['children'] = var33;
            var32 = var9.bind(var4)(var14, var32);
            var27['label'] = var32;
            var27['onPress'] = var29;
            var29 = 23;
            var29 = var31[var29];
            var29 = var30.bind(var4)(var29);
            var30 = var29.TableRowArrow;
            var29 = {};
            var29 = var26.bind(var4)(var30, var29);
            var27['trailing'] = var29;
            var27 = var26.bind(var4)(var28, var27);
            var10['children'] = var27;
            var14 = var26.bind(var4)(var14, var10);
            var10 = new Array(3);
            var10[0] = var14;
            var14 = var12;
            if(var17) { _fun0001_ip = 1306; continue _fun0001 }
 988:
            var14 = var12;
            if(var15) { _fun0001_ip = 1306; continue _fun0001 }
 997:
            var15 = var22.length;
            if(!(var16 !== var15)) { _fun0001_ip = 1088; continue _fun0001 }
 1006:
            var17 = _closure1_slot16;
            var16 = _closure1_slot8;
            var15 = {};
            var26 = var25.listView;
            var25 = new Array(1);
            var25[0] = var26;
            var15['style'] = var25;
            var15['contentContainerStyle'] = var23;
            var15['data'] = var22;
            var15['extraData'] = var21;
            var21 = function keyExtractor(arg1) {
                var1 = arg1;
                var1 = var1.id;
                return var1;
            };
            var15['keyExtractor'] = var21;
            var15['renderItem'] = var20;
            var18 = function onEndReached() {
                var3 = _closure1_slot0;
                var2 = _closure1_slot3;
                var1 = 20;
                var2 = var2[var1];
                var1 = undefined;
                var4 = var3.bind(var1)(var2);
                var3 = var4.fetchNextLogPage;
                var2 = _closure2_slot0;
                var2 = var3.bind(var4)(var2);
                return var1;
            };
            var15['onEndReached'] = var18;
            var15 = var17.bind(var4)(var16, var15);
            _fun0001_ip = 1303; continue _fun0001;
 1088:
            var18 = _closure1_slot16;
            var17 = _closure1_slot1;
            var20 = _closure1_slot3;
            var16 = 24;
            var16 = var20[var16];
            var17 = var17.bind(var4)(var16);
            var16 = {};
            var21 = _closure1_slot0;
            var20 = _closure1_slot3;
            var22 = var20[var24];
            var22 = var21.bind(var4)(var22);
            var23 = var22.intl;
            var22 = var23.string;
            var20 = var20[var24];
            var20 = var21.bind(var4)(var20);
            var21 = var20.t;
            if(var19) { _fun0001_ip = 1173; continue _fun0001 }
 1158:
            var20 = var21.lNuYho;
            var20 = var22.bind(var23)(var20);
            _fun0001_ip = 1186; continue _fun0001;
 1173:
            var21 = var21.tzkaDw;
            var20 = var22.bind(var23)(var21);
 1186:
            var16['body'] = var20;
            var23 = _closure1_slot0;
            var20 = _closure1_slot3;
            var21 = var20[var24];
            var21 = var23.bind(var4)(var21);
            var22 = var21.intl;
            var21 = var22.string;
            var20 = var20[var24];
            var20 = var23.bind(var4)(var20);
            var20 = var20.t;
            if(var19) { _fun0001_ip = 1249; continue _fun0001 }
 1234:
            var19 = var20.RHhk+P;
            var19 = var21.bind(var22)(var19);
            _fun0001_ip = 1262; continue _fun0001;
 1249:
            var20 = var20.Ww5Tj4;
            var19 = var21.bind(var22)(var20);
 1262:
            var16['title'] = var19;
            var20 = _closure1_slot0;
            var21 = _closure1_slot3;
            var19 = 25;
            var19 = var21[var19];
            var19 = var20.bind(var4)(var19);
            var19 = var19.EmptyServerSettingsAuditLog;
            var16['Illustration'] = var19;
            var15 = var18.bind(var4)(var17, var16);
 1303:
            var14 = var15;
 1306:
            var10[1] = var14;
            var11 = null;
            if(!var13) { _fun0001_ip = 1318; continue _fun0001 }
 1315:
            var11 = var12;
 1318:
            var10[2] = var11;
            var5['children'] = var10;
            var7 = var9.bind(var4)(var8, var5);
 1332:
            var5 = new Array(2);
            var5[0] = var7;
            var8 = _closure1_slot16;
            var7 = _closure1_slot0;
            var9 = _closure1_slot3;
            var6 = 26;
            var6 = var9[var6];
            var6 = var7.bind(var4)(var6);
            var7 = var6.NavScrim;
            var6 = {};
            var6 = var8.bind(var4)(var7, var6);
            var5[1] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();