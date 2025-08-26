// app/modules/guild_settings/native/GuildSettingsModalAuditLogFilter.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var11 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var11;
    var _closure1_slot2 = var6;
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
    var10 = 1;
    var7 = var6[var10];
    var4 = metroImportAll;
    var4 = var4.bind(var1)(var7);
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.View;
    var _closure1_slot5 = var7;
    var8 = var4.StyleSheet;
    var4 = 3;
    var4 = var6[var4];
    var4 = var11.bind(var1)(var4);
    var _closure1_slot6 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var11.bind(var1)(var4);
    var _closure1_slot7 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.AuditLogFilterTypes;
    var _closure1_slot8 = var4;
    var4 = 6;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.jsx;
    var _closure1_slot9 = var7;
    var7 = var4.Fragment;
    var _closure1_slot10 = var7;
    var4 = var4.jsxs;
    var _closure1_slot11 = var4;
    var7 = var8.create;
    var4 = {};
    var9 = {};
    var9['flex'] = var10;
    var4['container'] = var9;
    var9 = {};
    var10 = 7;
    var12 = var6[var10];
    var12 = var11.bind(var1)(var12);
    var12 = var12.spacing;
    var12 = var12.PX_12;
    var9['paddingHorizontal'] = var12;
    var10 = var6[var10];
    var10 = var11.bind(var1)(var10);
    var10 = var10.spacing;
    var10 = var10.PX_16;
    var9['paddingVertical'] = var10;
    var4['searchBar'] = var9;
    var9 = {'height': 30, 'width': 30, 'alignItems': 'center'};
    var4['allUsersIconContainer'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot12 = var4;
    var4 = 26;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/guild_settings/native/GuildSettingsModalAuditLogFilter.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function GuildSettingsModalAuditLogFilter(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var2 = arg1;
            var3 = var2.data;
            var _closure2_slot0 = var3;
            var18 = var2.filterType;
            var _closure2_slot1 = var18;
            var8 = var2.guildId;
            var _closure2_slot2 = var8;
            var5 = _closure1_slot1;
            var16 = _closure1_slot2;
            var2 = 11;
            var2 = var16[var2];
            var4 = undefined;
            var2 = var5.bind(var4)(var2);
            var2 = var2.bind(var4)();
            var11 = var2.bottom;
            var14 = _closure1_slot0;
            var2 = 12;
            var2 = var16[var2];
            var5 = var14.bind(var4)(var2);
            var2 = var5.useNavigation;
            var2 = var2.bind(var5)();
            var _closure2_slot3 = var2;
            var5 = _closure1_slot4;
            var9 = var5.useState;
            var7 = '';
            var10 = var9.bind(var5)(var7);
            var9 = _closure1_slot3;
            var7 = 2;
            var9 = var9.bind(var4)(var10, var7);
            var17 = 0;
            var10 = var9[var17];
            var _closure2_slot4 = var10;
            var7 = 1;
            var15 = var9[var7];
            var9 = var5.useMemo;
            var7 = new Array(2);
            var7[0] = var10;
            var7[1] = var3;
            var3 = function() {
                var1 = {};
                var5 = _closure2_slot0;
                var4 = var5.filter;
                var3 = function(arg1) {
                    var2 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var1 = 13;
                    var1 = var3[var1];
                    var4 = undefined;
                    var3 = var2.bind(var4)(var1);
                    var2 = _closure2_slot4;
                    var1 = var2.toLowerCase;
                    var2 = var1.bind(var2)();
                    var1 = arg1;
                    var5 = var1.label;
                    var1 = var5.toLowerCase;
                    var1 = var1.bind(var5)();
                    var1 = var3.bind(var4)(var2, var1);
                    return var1;
                };
                var3 = var4.bind(var5)(var3);
                var1['data'] = var3;
                var2 = function keyExtractor(arg1) {
                    _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                        var2 = arg1;
                        var3 = var2.value;
                        var1 = null;
                        if(!(var1 == var3)) { _fun0002_ip = 30; continue _fun0002 }
 14:
                        var3 = var2.index;
                        var1 = var3.toString;
                        var1 = var1.bind(var3)();
                        _fun0002_ip = 44; continue _fun0002;
 30:
                        var3 = var2.value;
                        var2 = var3.toString;
                        var1 = var2.bind(var3)();
 44:
                        return var1;
                    }
                };
                var1['keyExtractor'] = var2;
                return var1;
            };
            var3 = var9.bind(var5)(var3, var7);
            var10 = var3.data;
            var _closure2_slot5 = var10;
            var13 = var3.keyExtractor;
            var9 = var5.useEffect;
            var7 = new Array(2);
            var7[0] = var18;
            var7[1] = var2;
            var3 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                    var3 = _closure2_slot3;
                    var2 = var3.setOptions;
                    var1 = {};
                    var6 = _closure2_slot1;
                    var4 = _closure1_slot8;
                    var4 = var4.USER;
                    if(!(var4 !== var6)) { _fun0003_ip = 171; continue _fun0003 }
 39:
                    var4 = _closure1_slot8;
                    var4 = var4.ACTION;
                    if(!(var4 !== var6)) { _fun0003_ip = 112; continue _fun0003 }
 53:
                    var9 = _closure1_slot0;
                    var10 = _closure1_slot2;
                    var4 = 8;
                    var6 = var10[var4];
                    var8 = undefined;
                    var6 = var9.bind(var8)(var6);
                    var7 = var6.intl;
                    var6 = var7.string;
                    var4 = var10[var4];
                    var4 = var9.bind(var8)(var4);
                    var4 = var4.t;
                    var4 = var4.pEasFR;
                    var4 = var6.bind(var7)(var4);
                    _fun0003_ip = 228; continue _fun0003;
 112:
                    var10 = _closure1_slot0;
                    var11 = _closure1_slot2;
                    var6 = 8;
                    var7 = var11[var6];
                    var9 = undefined;
                    var7 = var10.bind(var9)(var7);
                    var8 = var7.intl;
                    var7 = var8.string;
                    var6 = var11[var6];
                    var6 = var10.bind(var9)(var6);
                    var6 = var6.t;
                    var6 = var6.rautdn;
                    var4 = var7.bind(var8)(var6);
                    _fun0003_ip = 228; continue _fun0003;
 171:
                    var9 = _closure1_slot0;
                    var10 = _closure1_slot2;
                    var5 = 8;
                    var6 = var10[var5];
                    var8 = undefined;
                    var6 = var9.bind(var8)(var6);
                    var7 = var6.intl;
                    var6 = var7.string;
                    var5 = var10[var5];
                    var5 = var9.bind(var8)(var5);
                    var5 = var5.t;
                    var5 = var5.hxnY/v;
                    var4 = var6.bind(var7)(var5);
 228:
                    var1['headerTitle'] = var4;
                    var1 = var2.bind(var3)(var1);
                    var1 = undefined;
                    return var1;
                }
            };
            var3 = var9.bind(var5)(var3, var7);
            var7 = var5.useCallback;
            var3 = new Array(3);
            var3[0] = var18;
            var3[1] = var8;
            var3[2] = var2;
            var2 = function(arg1, arg2) {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                    var2 = arg2;
                    var1 = arg1;
                    if(!var1) { _fun0004_ip = 160; continue _fun0004 }
 12:
                    var5 = _closure2_slot1;
                    var4 = _closure1_slot8;
                    var4 = var4.USER;
                    if(!(var5 !== var4)) { _fun0004_ip = 94; continue _fun0004 }
 36:
                    var5 = _closure2_slot1;
                    var4 = _closure1_slot8;
                    var4 = var4.ACTION;
                    if(!(var5 === var4)) { _fun0004_ip = 146; continue _fun0004 }
 54:
                    var6 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var4 = 14;
                    var5 = var5[var4];
                    var4 = undefined;
                    var6 = var6.bind(var4)(var5);
                    var5 = var6.filterByAction;
                    var4 = _closure2_slot2;
                    var4 = var5.bind(var6)(var2, var4);
                    _fun0004_ip = 146; continue _fun0004;
 94:
                    var5 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var3 = 14;
                    var4 = var4[var3];
                    var3 = undefined;
                    var5 = var5.bind(var3)(var4);
                    var4 = var5.filterByUserId;
                    var3 = null;
                    var6 = var3 != var2;
                    if(!var6) { _fun0004_ip = 136; continue _fun0004 }
 131:
                    var3 = var2.id;
 136:
                    var2 = _closure2_slot2;
                    var2 = var4.bind(var5)(var3, var2);
 146:
                    var2 = _closure2_slot3;
                    var1 = var2.pop;
                    var1 = var1.bind(var2)();
 160:
                    var1 = undefined;
                    return var1;
                }
            };
            var7 = var7.bind(var5)(var2, var3);
            var _closure2_slot6 = var7;
            var3 = var5.useCallback;
            var2 = new Array(4);
            var2[0] = var18;
            var2[1] = var8;
            var2[2] = var7;
            var7 = var10.length;
            var2[3] = var7;
            var1 = function(arg1) {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                    var1 = arg1;
                    var2 = var1.item;
                    var11 = var2.value;
                    var _closure3_slot0 = var11;
                    var8 = var2.selected;
                    var _closure3_slot1 = var8;
                    var5 = var2.label;
                    var13 = var1.index;
                    var2 = _closure2_slot1;
                    var1 = _closure1_slot8;
                    var1 = var1.USER;
                    if(!(var2 === var1)) { _fun0005_ip = 72; continue _fun0005 }
 63:
                    var1 = null;
                    if(!(var1 === var11)) { _fun0005_ip = 377; continue _fun0005 }
 72:
                    var4 = _closure1_slot9;
                    var2 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var1 = 17;
                    var1 = var3[var1];
                    var3 = undefined;
                    var1 = var2.bind(var3)(var1);
                    var2 = var1.TableRow;
                    var1 = {};
                    var9 = 0;
                    var9 = var9 === var13;
                    var1['start'] = var9;
                    var9 = _closure2_slot5;
                    var12 = var9.length;
                    var9 = 1;
                    var9 = var12 - var9;
                    var9 = var13 === var9;
                    var1['end'] = var9;
                    var12 = _closure2_slot1;
                    var9 = _closure1_slot8;
                    var9 = var9.USER;
                    if(!(var12 !== var9)) { _fun0005_ip = 196; continue _fun0005 }
 158:
                    var14 = _closure1_slot9;
                    var12 = _closure1_slot1;
                    var15 = _closure1_slot2;
                    var9 = 20;
                    var9 = var15[var9];
                    var12 = var12.bind(var3)(var9);
                    var9 = {};
                    var9['action'] = var11;
                    var9 = var14.bind(var3)(var12, var9);
                    _fun0005_ip = 299; continue _fun0005;
 196:
                    var15 = _closure1_slot9;
                    var14 = _closure1_slot5;
                    var12 = {};
                    var16 = _closure1_slot12;
                    var16 = var16.allUsersIconContainer;
                    var12['style'] = var16;
                    var19 = _closure1_slot1;
                    var20 = _closure1_slot2;
                    var18 = 18;
                    var16 = var20[var18];
                    var17 = var19.bind(var3)(var16);
                    var16 = {};
                    var18 = var20[var18];
                    var18 = var19.bind(var3)(var18);
                    var18 = var18.Sizes;
                    var18 = var18.MEDIUM;
                    var16['size'] = var18;
                    var18 = 19;
                    var18 = var20[var18];
                    var18 = var19.bind(var3)(var18);
                    var16['source'] = var18;
                    var16 = var15.bind(var3)(var17, var16);
                    var12['children'] = var16;
                    var9 = var15.bind(var3)(var14, var12);
 299:
                    var1['icon'] = var9;
                    var1['label'] = var5;
                    var5 = function onPress() {
                        var4 = _closure2_slot6;
                        var2 = _closure3_slot1;
                        var3 = !var2;
                        var2 = _closure3_slot0;
                        var1 = undefined;
                        var1 = var4.bind(var1)(var3, var2);
                        return var1;
                    };
                    var1['onPress'] = var5;
                    var12 = _closure1_slot9;
                    var9 = _closure1_slot0;
                    var14 = _closure1_slot2;
                    var5 = 16;
                    var5 = var14[var5];
                    var5 = var9.bind(var3)(var5);
                    var9 = var5.FormRadio;
                    var5 = {};
                    var5['selected'] = var8;
                    var5 = var12.bind(var3)(var9, var5);
                    var1['trailing'] = var5;
                    var1 = var4.bind(var3)(var2, var1);
                    _fun0005_ip = 513; continue _fun0005;
 377:
                    var5 = _closure1_slot9;
                    var3 = _closure1_slot1;
                    var9 = _closure1_slot2;
                    var2 = 15;
                    var2 = var9[var2];
                    var4 = undefined;
                    var3 = var3.bind(var4)(var2);
                    var2 = {};
                    var12 = 0;
                    var12 = var12 === var13;
                    var2['start'] = var12;
                    var12 = _closure2_slot5;
                    var14 = var12.length;
                    var12 = 1;
                    var12 = var14 - var12;
                    var12 = var13 === var12;
                    var2['end'] = var12;
                    var11 = var11.id;
                    var2['userId'] = var11;
                    var10 = _closure2_slot2;
                    var2['guildId'] = var10;
                    var7 = function onPress() {
                        var4 = _closure2_slot6;
                        var2 = _closure3_slot1;
                        var3 = !var2;
                        var2 = _closure3_slot0;
                        var1 = undefined;
                        var1 = var4.bind(var1)(var3, var2);
                        return var1;
                    };
                    var2['onPress'] = var7;
                    var7 = _closure1_slot0;
                    var6 = 16;
                    var6 = var9[var6];
                    var6 = var7.bind(var4)(var6);
                    var7 = var6.FormRadio;
                    var6 = {};
                    var6['selected'] = var8;
                    var6 = var5.bind(var4)(var7, var6);
                    var2['trailing'] = var6;
                    var1 = var5.bind(var4)(var3, var2);
 513:
                    return var1;
                }
            };
            var12 = var3.bind(var5)(var1, var2);
            var3 = _closure1_slot11;
            var2 = _closure1_slot10;
            var1 = {};
            var8 = _closure1_slot9;
            var7 = _closure1_slot5;
            var5 = {};
            var9 = _closure1_slot12;
            var9 = var9.searchBar;
            var5['style'] = var9;
            var9 = 21;
            var9 = var16[var9];
            var9 = var14.bind(var4)(var9);
            var14 = var9.SearchField;
            var9 = {};
            var16 = 'md';
            var9['size'] = var16;
            var16 = _closure1_slot8;
            var16 = var16.USER;
            if(!(var18 !== var16)) { _fun0001_ip = 510; continue _fun0001 }
 380:
            var16 = _closure1_slot8;
            var16 = var16.ACTION;
            if(!(var18 !== var16)) { _fun0001_ip = 451; continue _fun0001 }
 394:
            var20 = _closure1_slot0;
            var21 = _closure1_slot2;
            var16 = 8;
            var18 = var21[var16];
            var18 = var20.bind(var4)(var18);
            var19 = var18.intl;
            var18 = var19.string;
            var16 = var21[var16];
            var16 = var20.bind(var4)(var16);
            var16 = var16.t;
            var16 = var16.5h0QOD;
            var16 = var18.bind(var19)(var16);
            _fun0001_ip = 508; continue _fun0001;
 451:
            var21 = _closure1_slot0;
            var22 = _closure1_slot2;
            var18 = 8;
            var19 = var22[var18];
            var19 = var21.bind(var4)(var19);
            var20 = var19.intl;
            var19 = var20.string;
            var18 = var22[var18];
            var18 = var21.bind(var4)(var18);
            var18 = var18.t;
            var18 = var18.I288Z2;
            var16 = var19.bind(var20)(var18);
 508:
            _fun0001_ip = 565; continue _fun0001;
 510:
            var21 = _closure1_slot0;
            var22 = _closure1_slot2;
            var18 = 8;
            var19 = var22[var18];
            var19 = var21.bind(var4)(var19);
            var20 = var19.intl;
            var19 = var20.string;
            var18 = var22[var18];
            var18 = var21.bind(var4)(var18);
            var18 = var18.t;
            var18 = var18.pYHobG;
            var16 = var19.bind(var20)(var18);
 565:
            var9['placeholder'] = var16;
            var9['onChange'] = var15;
            var9 = var8.bind(var4)(var14, var9);
            var5['children'] = var9;
            var7 = var8.bind(var4)(var7, var5);
            var5 = new Array(3);
            var5[0] = var7;
            var7 = var10.length;
            if(!(var17 !== var7)) { _fun0001_ip = 716; continue _fun0001 }
 608:
            var9 = _closure1_slot9;
            var8 = _closure1_slot0;
            var14 = _closure1_slot2;
            var7 = 24;
            var7 = var14[var7];
            var7 = var8.bind(var4)(var7);
            var8 = var7.FlashList;
            var7 = {};
            var7['keyExtractor'] = var13;
            var7['renderItem'] = var12;
            var12 = 50;
            var7['estimatedItemSize'] = var12;
            var7['data'] = var10;
            var10 = {};
            var13 = _closure1_slot1;
            var12 = 7;
            var12 = var14[var12];
            var12 = var13.bind(var4)(var12);
            var12 = var12.spacing;
            var12 = var12.PX_12;
            var10['paddingHorizontal'] = var12;
            var10['paddingBottom'] = var11;
            var7['contentContainerStyle'] = var10;
            var7 = var9.bind(var4)(var8, var7);
            _fun0001_ip = 882; continue _fun0001;
 716:
            var10 = _closure1_slot9;
            var9 = _closure1_slot1;
            var13 = _closure1_slot2;
            var8 = 22;
            var8 = var13[var8];
            var9 = var9.bind(var4)(var8);
            var8 = {};
            var12 = _closure1_slot0;
            var11 = 8;
            var14 = var13[var11];
            var14 = var12.bind(var4)(var14);
            var16 = var14.intl;
            var15 = var16.string;
            var14 = var13[var11];
            var14 = var12.bind(var4)(var14);
            var14 = var14.t;
            var14 = var14.V6nAfH;
            var14 = var15.bind(var16)(var14);
            var8['body'] = var14;
            var14 = var13[var11];
            var14 = var12.bind(var4)(var14);
            var16 = var14.intl;
            var15 = var16.formatToPlainString;
            var11 = var13[var11];
            var11 = var12.bind(var4)(var11);
            var11 = var11.t;
            var14 = var11.ZGVL3t;
            var11 = {};
            var11['count'] = var17;
            var11 = var15.bind(var16)(var14, var11);
            var8['title'] = var11;
            var11 = 23;
            var11 = var13[var11];
            var11 = var12.bind(var4)(var11);
            var11 = var11.NoResults;
            var8['Illustration'] = var11;
            var7 = var10.bind(var4)(var9, var8);
 882:
            var5[1] = var7;
            var8 = _closure1_slot9;
            var7 = _closure1_slot0;
            var9 = _closure1_slot2;
            var6 = 25;
            var6 = var9[var6];
            var6 = var7.bind(var4)(var6);
            var7 = var6.NavScrim;
            var6 = {};
            var6 = var8.bind(var4)(var7, var6);
            var5[2] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['default'] = var4;
    var4 = function createAuditLogFilterUserData(arg1) {
        var7 = arg1;
        var _closure2_slot0 = var7;
        var1 = new Array(0);
        var _closure2_slot1 = var1;
        var5 = var1.push;
        var4 = {};
        var11 = _closure1_slot0;
        var12 = _closure1_slot2;
        var6 = 8;
        var8 = var12[var6];
        var10 = undefined;
        var8 = var11.bind(var10)(var8);
        var9 = var8.intl;
        var8 = var9.string;
        var6 = var12[var6];
        var6 = var11.bind(var10)(var6);
        var6 = var6.t;
        var6 = var6.ZRFdsL;
        var6 = var8.bind(var9)(var6);
        var4['label'] = var6;
        var6 = null;
        var4['value'] = var6;
        var6 = var6 == var7;
        var4['selected'] = var6;
        var6 = 0;
        var4['index'] = var6;
        var4 = var5.bind(var1)(var4);
        var4 = global;
        var4 = var4.Set;
        var5 = var4.prototype;
        var5 = Object.create(var5, {constructor: {value: var4}});
        var14 = var5;
        var4 = new var14[var4](var13);
        var4 = var4 instanceof Object ? var4 : var5;
        var _closure2_slot2 = var4;
        var4 = function userIdResolver(arg1) {
            _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
                var3 = arg1;
                var2 = null;
                if(!(var2 != var3)) { _fun0006_ip = 155; continue _fun0006 }
 12:
                var4 = _closure1_slot6;
                var1 = var4.getUser;
                var5 = var1.bind(var4)(var3);
                var7 = _closure2_slot2;
                var1 = var7.has;
                var1 = var1.bind(var7)(var3);
                if(var1) { _fun0006_ip = 54; continue _fun0006 }
 50:
                var1 = var2 == var5;
 54:
                if(var1) { _fun0006_ip = 155; continue _fun0006 }
 57:
                var2 = _closure2_slot2;
                var1 = var2.add;
                var1 = var1.bind(var2)(var3);
                var3 = _closure2_slot1;
                var2 = var3.push;
                var1 = {};
                var8 = _closure1_slot1;
                var7 = _closure1_slot2;
                var6 = 9;
                var7 = var7[var6];
                var6 = undefined;
                var7 = var8.bind(var6)(var7);
                var6 = var7.getUserTag;
                var6 = var6.bind(var7)(var5);
                var1['label'] = var6;
                var1['value'] = var5;
                var5 = var5.id;
                var4 = _closure2_slot0;
                var4 = var5 === var4;
                var1['selected'] = var4;
                var4 = var3.length;
                var1['index'] = var4;
                var1 = var2.bind(var3)(var1);
 155:
                var1 = undefined;
                return var1;
            }
        };
        var _closure2_slot3 = var4;
        var3 = _closure1_slot7;
        var6 = var3.logs;
        var5 = var6.forEach;
        var4 = function(arg1) {
            var1 = arg1;
            var3 = var1.userId;
            var2 = _closure2_slot3;
            var1 = undefined;
            var2 = var2.bind(var1)(var3);
            return var1;
        };
        var4 = var5.bind(var6)(var4);
        var5 = var3.userIds;
        var4 = var5.forEach;
        var3 = function(arg1) {
            var3 = _closure2_slot3;
            var1 = undefined;
            var2 = arg1;
            var2 = var3.bind(var1)(var2);
            return var1;
        };
        var3 = var4.bind(var5)(var3);
        var3 = var1.sort;
        var2 = function(arg1, arg2) {
            _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
                var4 = arg1;
                var3 = arg2;
                var2 = var4.selected;
                var1 = -1;
                if(var2) { _fun0007_ip = 50; continue _fun0007 }
 21:
                var5 = var3.selected;
                var2 = 1;
                if(var5) { _fun0007_ip = 47; continue _fun0007 }
 33:
                var4 = var4.index;
                var3 = var3.index;
                var2 = var4 - var3;
 47:
                var1 = var2;
 50:
                return var1;
            }
        };
        var2 = var3.bind(var1)(var2);
        return var1;
    };
    var3['createAuditLogFilterUserData'] = var4;
    var2 = function createAuditLogFilterActionData(arg1) {
        var2 = arg1;
        var _closure2_slot0 = var2;
        var4 = _closure1_slot0;
        var3 = _closure1_slot2;
        var2 = 10;
        var3 = var3[var2];
        var2 = undefined;
        var3 = var4.bind(var2)(var3);
        var2 = var3.ACTION_FILTER_ITEMS;
        var4 = var2.bind(var3)();
        var3 = var4.map;
        var2 = function(arg1, arg2) {
            var2 = arg1;
            var1 = {};
            var3 = var2.label;
            var1['label'] = var3;
            var3 = var2.value;
            var1['value'] = var3;
            var3 = _closure2_slot0;
            var2 = var2.value;
            var2 = var3 === var2;
            var1['selected'] = var2;
            var2 = arg2;
            var1['index'] = var2;
            return var1;
        };
        var3 = var3.bind(var4)(var2);
        var2 = var3.sort;
        var1 = function(arg1, arg2) {
            _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
 0:
                var4 = arg1;
                var3 = arg2;
                var2 = var4.selected;
                var1 = -1;
                if(var2) { _fun0008_ip = 50; continue _fun0008 }
 21:
                var5 = var3.selected;
                var2 = 1;
                if(var5) { _fun0008_ip = 47; continue _fun0008 }
 33:
                var4 = var4.index;
                var3 = var3.index;
                var2 = var4 - var3;
 47:
                var1 = var2;
 50:
                return var1;
            }
        };
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var3['createAuditLogFilterActionData'] = var2;
    return var1;
})();