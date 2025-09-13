// app/modules/guild_settings/roles/native/action_sheet/AddMembersActionSheet.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var12 = metroImportDefault;
    var3 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var12;
    var _closure1_slot2 = var7;
    var1 = function _toPropertyKey(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var7 = arg1;
            var4 = 'object';
            var1 = typeof var7;
            var2 = var7;
            if(!(var4 === var1)) { _fun0001_ip = 119; continue _fun0001 }
 17:
            var2 = var7;
            if(!var2) { _fun0001_ip = 119; continue _fun0001 }
 23:
            var1 = global;
            var3 = var1.Symbol;
            var3 = var3.toPrimitive;
            var6 = var7[var3];
            var5 = undefined;
            if(!(var5 === var6)) { _fun0001_ip = 60; continue _fun0001 }
 47:
            var3 = var1.String;
            var2 = var3.bind(var5)(var7);
            _fun0001_ip = 119; continue _fun0001;
 60:
            var5 = var6.call;
            var3 = 'string';
            var5 = var5.bind(var6)(var7, var3);
            var3 = typeof var5;
            var2 = var5;
            if(!(var4 === var3)) { _fun0001_ip = 119; continue _fun0001 }
 85:
            var4 = var1.TypeError;
            var1 = var4.prototype;
            var3 = Object.create(var1, {constructor: {value: var4}});
            var9 = '@@toPrimitive must return a primitive value.';
            var10 = var3;
            var1 = new var10[var4](var9, var8);
            var1 = var1 instanceof Object ? var1 : var3;
            throw var1;
 119:
            var4 = 'symbol';
            var3 = typeof var2;
            var1 = var2;
            if(!(var4 !== var3)) { _fun0001_ip = 136; continue _fun0001 }
 133:
            var1 = '' + var2;
 136:
            return var1;
        }
    };
    var _closure1_slot12 = var1;
    var2 = function AddMembersBody(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var2 = arg1;
            var1 = var2.guild;
            var _closure2_slot0 = var1;
            var1 = var2.role;
            var _closure2_slot1 = var1;
            var1 = var2.members;
            var _closure2_slot2 = var1;
            var9 = var2.pendingAdditions;
            var _closure2_slot3 = var9;
            var3 = var2.setPendingAdditions;
            var _closure2_slot4 = var3;
            var23 = var2.autoFocusSearch;
            var21 = var2.inActionSheet;
            var2 = var2.maxCount;
            var _closure2_slot5 = var2;
            var2 = _closure1_slot11;
            var4 = undefined;
            var12 = var2.bind(var4)();
            var _closure2_slot6 = var12;
            var3 = _closure1_slot5;
            var2 = var3.useState;
            var10 = '';
            var5 = var2.bind(var3)(var10);
            var3 = _closure1_slot4;
            var2 = 2;
            var3 = var3.bind(var4)(var5, var2);
            var19 = 0;
            var15 = var3[var19];
            var _closure2_slot7 = var15;
            var2 = 1;
            var2 = var3[var2];
            var _closure2_slot8 = var2;
            var3 = _closure1_slot1;
            var5 = _closure1_slot2;
            var2 = 8;
            var2 = var5[var2];
            var3 = var3.bind(var4)(var2);
            var2 = {};
            var5 = !var21;
            var2['isKeyboardAwareOnAndroid'] = var5;
            var2 = var3.bind(var4)(var2);
            var20 = var2.insets;
            var5 = _closure1_slot5;
            var3 = var5.useMemo;
            var2 = new Array(2);
            var2[0] = var1;
            var2[1] = var15;
            var1 = function() {
                var2 = function filterByQuery(arg1) {
                    var1 = global;
                    var4 = var1.RegExp;
                    var3 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var1 = 9;
                    var2 = var2[var1];
                    var1 = undefined;
                    var3 = var3.bind(var1)(var2);
                    var2 = var3.escape;
                    var1 = _closure2_slot7;
                    var6 = var2.bind(var3)(var1);
                    var1 = var4.prototype;
                    var2 = Object.create(var1, {constructor: {value: var4}});
                    var5 = 'i';
                    var7 = var2;
                    var1 = new var7[var4](var6, var5, var4);
                    var3 = var1 instanceof Object ? var1 : var2;
                    var2 = var3.test;
                    var1 = arg1;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var _closure3_slot0 = var2;
                var3 = _closure2_slot2;
                var2 = var3.filter;
                var1 = function(arg1) {
                    _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                        var2 = arg1;
                        var5 = _closure3_slot0;
                        var1 = var2.name;
                        var4 = undefined;
                        var1 = var5.bind(var4)(var1);
                        if(var1) { _fun0003_ip = 40; continue _fun0003 }
 25:
                        var3 = _closure3_slot0;
                        var2 = var2.userTag;
                        var1 = var3.bind(var4)(var2);
 40:
                        return var1;
                    }
                };
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var13 = var3.bind(var5)(var1, var2);
            var _closure2_slot9 = var13;
            var2 = _closure1_slot0;
            var3 = _closure1_slot2;
            var1 = 13;
            var1 = var3[var1];
            var1 = var2.bind(var4)(var1);
            if(var21) { _fun0002_ip = 255; continue _fun0002 }
 247:
            var8 = var1.FlashList;
            _fun0002_ip = 261; continue _fun0002;
 255:
            var8 = var1.BottomSheetFlashList;
 261:
            var3 = _closure1_slot10;
            var2 = _closure1_slot9;
            var1 = {};
            var7 = _closure1_slot8;
            var6 = _closure1_slot6;
            var5 = {};
            var16 = var12.inputContainer;
            var5['style'] = var16;
            var22 = _closure1_slot8;
            var17 = _closure1_slot1;
            var24 = _closure1_slot2;
            var16 = 14;
            var16 = var24[var16];
            var18 = var17.bind(var4)(var16);
            var17 = {};
            var27 = _closure1_slot0;
            var16 = 15;
            var25 = var24[var16];
            var25 = var27.bind(var4)(var25);
            var26 = var25.intl;
            var25 = var26.string;
            var24 = var24[var16];
            var24 = var27.bind(var4)(var24);
            var24 = var24.t;
            var24 = var24.vMiCaW;
            var24 = var25.bind(var26)(var24);
            var17['placeholder'] = var24;
            var24 = global;
            var25 = var24.Object;
            var24 = var25.values;
            var26 = var24.bind(var25)(var9);
            var25 = var26.map;
            var24 = function(arg1) {
                var1 = arg1;
                var4 = var1.display;
                var1 = var1.row;
                var3 = var1.id;
                var1 = {};
                var5 = var1;
                var2 = copyDataProperties(var5, var4);
                var2 = 'id';
                var1[var2] = var3;
                return var1;
            };
            var24 = var25.bind(var26)(var24);
            var17['tags'] = var24;
            var24 = function onChangeText(arg1) {
                var2 = arg1;
                var1 = var2.trim;
                var2 = var1.bind(var2)();
                var1 = var2.toLowerCase;
                var3 = var1.bind(var2)();
                var5 = _closure1_slot1;
                var9 = _closure1_slot2;
                var1 = 16;
                var2 = var9[var1];
                var1 = undefined;
                var7 = var5.bind(var1)(var2);
                var6 = var7.requestMembers;
                var5 = _closure2_slot0;
                var5 = var5.id;
                var8 = _closure1_slot0;
                var4 = 17;
                var4 = var9[var4];
                var4 = var8.bind(var1)(var4);
                var4 = var4.ADD_MEMBER_QUERY_LIMIT;
                var4 = var6.bind(var7)(var5, var3, var4);
                var2 = _closure2_slot8;
                var2 = var2.bind(var1)(var3);
                return var1;
            };
            var17['onChangeText'] = var24;
            var24 = function onRemove(arg1) {
                var4 = _closure1_slot1;
                var3 = _closure1_slot2;
                var1 = 18;
                var3 = var3[var1];
                var1 = undefined;
                var6 = var4.bind(var1)(var3);
                var5 = var6.keys;
                var4 = _closure2_slot3;
                var5 = var5.bind(var6)(var4);
                var4 = arg1;
                var4 = var5[var4];
                var _closure3_slot0 = var4;
                var3 = _closure2_slot4;
                var2 = function(arg1) {
                    var4 = arg1;
                    var2 = _closure3_slot0;
                    var1 = var4[var2];
                    var3 = _closure1_slot3;
                    var5 = new Array(1);
                    var5[0] = var2;
                    var2 = var5.map;
                    var1 = _closure1_slot12;
                    var2 = var2.bind(var5)(var1);
                    var1 = undefined;
                    var1 = var3.bind(var1)(var4, var2);
                    return var1;
                };
                var2 = var3.bind(var1)(var2);
                return var1;
            };
            var17['onRemove'] = var24;
            var17['autoFocus'] = var23;
            var17['inActionSheet'] = var21;
            var17 = var22.bind(var4)(var18, var17);
            var5['children'] = var17;
            var6 = var7.bind(var4)(var6, var5);
            var5 = new Array(2);
            var5[0] = var6;
            var6 = var13.length;
            if(!(var19 !== var6)) { _fun0002_ip = 645; continue _fun0002 }
 485:
            var7 = _closure1_slot8;
            var6 = {};
            var17 = {};
            var22 = _closure1_slot1;
            var23 = _closure1_slot2;
            var18 = 7;
            var24 = var23[var18];
            var24 = var22.bind(var4)(var24);
            var24 = var24.spacing;
            var24 = var24.PX_16;
            var17['paddingHorizontal'] = var24;
            var24 = var23[var18];
            var24 = var22.bind(var4)(var24);
            var24 = var24.spacing;
            var24 = var24.PX_12;
            var17['paddingTop'] = var24;
            var18 = var23[var18];
            var18 = var22.bind(var4)(var18);
            var18 = var18.spacing;
            var18 = var18.PX_12;
            var19 = 0;
            if(!var21) { _fun0002_ip = 582; continue _fun0002 }
 577:
            var19 = var20.bottom;
 582:
            var18 = var18 + var19;
            var17['paddingBottom'] = var18;
            var6['contentContainerStyle'] = var17;
            var14 = function renderItem(arg1) {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                    var1 = arg1;
                    var11 = var1.item;
                    var _closure3_slot0 = var11;
                    var14 = var1.index;
                    var3 = var11.roles;
                    var2 = var3.includes;
                    var1 = _closure2_slot1;
                    var1 = var1.id;
                    var7 = var2.bind(var3)(var1);
                    var2 = var11.id;
                    var1 = _closure2_slot3;
                    var9 = var2 in var1;
                    var2 = _closure2_slot5;
                    var1 = null;
                    var8 = var1 != var2;
                    if(!var8) { _fun0004_ip = 108; continue _fun0004 }
 73:
                    var1 = global;
                    var3 = var1.Object;
                    var2 = var3.keys;
                    var1 = _closure2_slot3;
                    var1 = var2.bind(var3)(var1);
                    var2 = var1.length;
                    var1 = _closure2_slot5;
                    var8 = var2 >= var1;
 108:
                    var6 = var7;
                    if(var7) { _fun0004_ip = 127; continue _fun0004 }
 114:
                    var2 = var11.id;
                    var1 = _closure2_slot3;
                    var6 = var2 in var1;
 127:
                    var4 = _closure1_slot8;
                    var2 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var1 = 11;
                    var1 = var3[var1];
                    var3 = undefined;
                    var2 = var2.bind(var3)(var1);
                    var1 = {};
                    var13 = 0;
                    var13 = var13 === var14;
                    var1['start'] = var13;
                    var13 = _closure2_slot9;
                    var15 = var13.length;
                    var13 = 1;
                    var13 = var15 - var13;
                    var13 = var14 === var13;
                    var1['end'] = var13;
                    var12 = _closure2_slot0;
                    var12 = var12.id;
                    var1['guildId'] = var12;
                    var11 = var11.id;
                    var1['userId'] = var11;
                    var10 = function onPress() {
                        var3 = _closure3_slot0;
                        var2 = function updatePendingAdditions(arg1) {
                            _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                                var2 = arg1;
                                var _closure5_slot0 = var2;
                                var5 = var2.roles;
                                var4 = var5.includes;
                                var3 = _closure2_slot1;
                                var3 = var3.id;
                                var3 = var4.bind(var5)(var3);
                                if(var3) { _fun0005_ip = 58; continue _fun0005 }
 40:
                                var3 = _closure2_slot4;
                                var2 = undefined;
                                var1 = function(arg1) {
                                    _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
                                        var1 = {};
                                        var11 = arg1;
                                        var12 = var1;
                                        var2 = copyDataProperties(var12, var11);
                                        var2 = _closure5_slot0;
                                        var2 = var2.id;
                                        var4 = var2 in var1;
                                        var2 = _closure5_slot0;
                                        if(var4) { _fun0006_ip = 160; continue _fun0006 }
 38:
                                        var6 = {};
                                        var4 = var2.name;
                                        var6['text'] = var4;
                                        var8 = _closure1_slot8;
                                        var5 = _closure1_slot1;
                                        var7 = _closure1_slot2;
                                        var4 = 10;
                                        var4 = var7[var4];
                                        var7 = undefined;
                                        var5 = var5.bind(var7)(var4);
                                        var4 = {};
                                        var9 = var2.avatarSource;
                                        var4['source'] = var9;
                                        var9 = _closure2_slot6;
                                        var10 = var9.tagAvatar;
                                        var4['avatarStyle'] = var10;
                                        var9 = var9.tagAvatar;
                                        var4['style'] = var9;
                                        var4 = var8.bind(var7)(var5, var4);
                                        var6['icon'] = var4;
                                        var4 = null;
                                        if(!(var4 != var6)) { _fun0006_ip = 169; continue _fun0006 }
 134:
                                        var5 = _closure5_slot0;
                                        var4 = var5.id;
                                        var3 = {};
                                        var3['display'] = var6;
                                        var3['row'] = var5;
                                        var1[var4] = var3;
                                        _fun0006_ip = 169; continue _fun0006;
 160:
                                        var2 = var2.id;
                                        var2 = delete var1[var2];
 169:
                                        return var1;
                                    }
                                };
                                var1 = var3.bind(var2)(var1);
 58:
                                var1 = undefined;
                                return var1;
                            }
                        };
                        var1 = undefined;
                        var2 = var2.bind(var1)(var3);
                        return var1;
                    };
                    var1['onPress'] = var10;
                    if(var7) { _fun0004_ip = 237; continue _fun0004 }
 228:
                    if(!var8) { _fun0004_ip = 234; continue _fun0004 }
 231:
                    var8 = !var9;
 234:
                    var7 = var8;
 237:
                    var1['disabled'] = var7;
                    var8 = _closure1_slot8;
                    var7 = _closure1_slot0;
                    var9 = _closure1_slot2;
                    var5 = 12;
                    var5 = var9[var5];
                    var5 = var7.bind(var3)(var5);
                    var7 = var5.FormCheckbox;
                    var5 = {};
                    var5['checked'] = var6;
                    var5 = var8.bind(var3)(var7, var5);
                    var1['trailing'] = var5;
                    var5 = 'checkbox';
                    var1['accessibilityRole'] = var5;
                    var5 = {};
                    var5['checked'] = var6;
                    var1['accessibilityState'] = var5;
                    var1 = var4.bind(var3)(var2, var1);
                    return var1;
                }
            };
            var6['renderItem'] = var14;
            var6['data'] = var13;
            var13 = 56;
            var6['estimatedItemSize'] = var13;
            var6['extraData'] = var9;
            var9 = 'always';
            var6['keyboardShouldPersistTaps'] = var9;
            var6 = var7.bind(var4)(var8, var6);
            _fun0002_ip = 837; continue _fun0002;
 645:
            var9 = _closure1_slot8;
            var8 = _closure1_slot1;
            var17 = _closure1_slot2;
            var7 = 19;
            var7 = var17[var7];
            var8 = var8.bind(var4)(var7);
            var7 = {};
            var14 = _closure1_slot0;
            var13 = 20;
            var13 = var17[var13];
            var13 = var14.bind(var4)(var13);
            var13 = var13.NoResultsAlt;
            var7['Illustration'] = var13;
            var12 = var12.emptyStateText;
            var7['bodyStyle'] = var12;
            if(!(var10 === var15)) { _fun0002_ip = 767; continue _fun0002 }
 713:
            var14 = _closure1_slot0;
            var10 = _closure1_slot2;
            var12 = var10[var16];
            var12 = var14.bind(var4)(var12);
            var13 = var12.intl;
            var12 = var13.string;
            var10 = var10[var16];
            var10 = var14.bind(var4)(var10);
            var10 = var10.t;
            var10 = var10.oB9gra;
            var10 = var12.bind(var13)(var10);
            _fun0002_ip = 827; continue _fun0002;
 767:
            var12 = _closure1_slot0;
            var11 = _closure1_slot2;
            var13 = var11[var16];
            var13 = var12.bind(var4)(var13);
            var14 = var13.intl;
            var13 = var14.format;
            var11 = var11[var16];
            var11 = var12.bind(var4)(var11);
            var11 = var11.t;
            var12 = var11.ErpIY2;
            var11 = {};
            var11['query'] = var15;
            var10 = var13.bind(var14)(var12, var11);
 827:
            var7['body'] = var10;
            var6 = var9.bind(var4)(var8, var7);
 837:
            var5[1] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot13 = var2;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var5 = {};
    var1 = true;
    var5['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var5);
    var1 = 0;
    var5 = var7[var1];
    var1 = undefined;
    var5 = var12.bind(var1)(var5);
    var _closure1_slot3 = var5;
    var13 = 1;
    var5 = var7[var13];
    var5 = var12.bind(var1)(var5);
    var _closure1_slot4 = var5;
    var5 = 2;
    var8 = var7[var5];
    var5 = metroImportAll;
    var5 = var5.bind(var1)(var8);
    var _closure1_slot5 = var5;
    var5 = 3;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var5 = var5.View;
    var _closure1_slot6 = var5;
    var5 = 4;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var5 = var5.MAX_BULK_ROLE_MEMBERS_ADD;
    var _closure1_slot7 = var5;
    var5 = 5;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var8 = var5.jsx;
    var _closure1_slot8 = var8;
    var8 = var5.Fragment;
    var _closure1_slot9 = var8;
    var5 = var5.jsxs;
    var _closure1_slot10 = var5;
    var5 = 6;
    var5 = var7[var5];
    var9 = var6.bind(var1)(var5);
    var8 = var9.createStyles;
    var5 = {};
    var10 = {};
    var11 = 7;
    var14 = var7[var11];
    var14 = var12.bind(var1)(var14);
    var14 = var14.colors;
    var14 = var14.BACKGROUND_MOBILE_PRIMARY;
    var10['backgroundColor'] = var14;
    var10['flex'] = var13;
    var5['container'] = var10;
    var10 = {};
    var13 = var7[var11];
    var13 = var12.bind(var1)(var13);
    var13 = var13.spacing;
    var13 = var13.PX_16;
    var10['paddingHorizontal'] = var13;
    var13 = var7[var11];
    var13 = var12.bind(var1)(var13);
    var13 = var13.spacing;
    var13 = var13.PX_12;
    var10['paddingTop'] = var13;
    var5['inputContainer'] = var10;
    var10 = {'width': 16, 'height': 16};
    var13 = var7[var11];
    var13 = var12.bind(var1)(var13);
    var13 = var13.radii;
    var13 = var13.sm;
    var10['borderRadius'] = var13;
    var5['tagAvatar'] = var10;
    var10 = {};
    var13 = var7[var11];
    var13 = var12.bind(var1)(var13);
    var13 = var13.colors;
    var13 = var13.TEXT_NORMAL;
    var10['color'] = var13;
    var5['emptyStateText'] = var10;
    var10 = {};
    var11 = var7[var11];
    var11 = var12.bind(var1)(var11);
    var11 = var11.spacing;
    var11 = var11.PX_16;
    var10['marginHorizontal'] = var11;
    var5['addMembersDescription'] = var10;
    var5 = var8.bind(var9)(var5);
    var _closure1_slot11 = var5;
    var5 = 28;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/guild_settings/roles/native/action_sheet/AddMembersActionSheet.tsx';
    var5 = var6.bind(var7)(var5);
    var4 = function AddMembersActionSheet(arg1) {
        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
            var1 = arg1;
            var18 = var1.guild;
            var _closure2_slot0 = var18;
            var17 = var1.role;
            var _closure2_slot1 = var17;
            var1 = _closure1_slot11;
            var4 = undefined;
            var21 = var1.bind(var4)();
            var3 = _closure1_slot5;
            var2 = var3.useState;
            var1 = {};
            var3 = var2.bind(var3)(var1);
            var2 = _closure1_slot4;
            var1 = 2;
            var2 = var2.bind(var4)(var3, var1);
            var3 = 0;
            var15 = var2[var3];
            var _closure2_slot2 = var15;
            var1 = 1;
            var14 = var2[var1];
            var6 = _closure1_slot5;
            var5 = var6.useCallback;
            var1 = var17.id;
            var2 = new Array(1);
            var2[0] = var1;
            var1 = function(arg1) {
                var1 = arg1;
                var3 = var1.roles;
                var2 = var3.includes;
                var1 = _closure2_slot1;
                var1 = var1.id;
                var1 = var2.bind(var3)(var1);
                var1 = !var1;
                return var1;
            };
            var8 = var5.bind(var6)(var1, var2);
            var2 = _closure1_slot0;
            var5 = _closure1_slot2;
            var1 = 17;
            var1 = var5[var1];
            var7 = var2.bind(var4)(var1);
            var6 = var7.useGuildMembers;
            var1 = var18.id;
            var16 = var6.bind(var7)(var1, var8);
            var1 = 21;
            var1 = var5[var1];
            var7 = var2.bind(var4)(var1);
            var6 = var7.useSubscribeGuildMembers;
            var5 = {};
            var8 = var18.id;
            var1 = global;
            var10 = var1.Object;
            var2 = var10.keys;
            var2 = var2.bind(var10)(var15);
            var5[var8] = var2;
            var2 = 'AddMembersActionSheet';
            var2 = var6.bind(var7)(var5, var2);
            var5 = var1.Object;
            var2 = var5.keys;
            var2 = var2.bind(var5)(var15);
            var2 = var2.length;
            var13 = var3 === var2;
            if(var13) { _fun0007_ip = 272; continue _fun0007 }
 243:
            var2 = var1.Object;
            var1 = var2.keys;
            var1 = var1.bind(var2)(var15);
            var2 = var1.length;
            var1 = _closure1_slot7;
            var13 = var2 > var1;
 272:
            var3 = _closure1_slot8;
            var25 = _closure1_slot0;
            var22 = _closure1_slot2;
            var1 = 22;
            var1 = var22[var1];
            var1 = var25.bind(var4)(var1);
            var2 = var1.BottomSheet;
            var1 = {'scrollable': true, 'header': null, 'startExpanded': true};
            var12 = true;
            var7 = _closure1_slot8;
            var5 = 23;
            var5 = var22[var5];
            var5 = var25.bind(var4)(var5);
            var6 = var5.BottomSheetTitleHeader;
            var5 = {};
            var20 = 15;
            var8 = var22[var20];
            var8 = var25.bind(var4)(var8);
            var11 = var8.intl;
            var10 = var11.string;
            var8 = var22[var20];
            var8 = var25.bind(var4)(var8);
            var8 = var8.t;
            var8 = var8.ZYOK4+;
            var8 = var10.bind(var11)(var8);
            var5['title'] = var8;
            var8 = var17.name;
            var5['subtitle'] = var8;
            var11 = _closure1_slot8;
            var8 = 24;
            var8 = var22[var8];
            var8 = var25.bind(var4)(var8);
            var10 = var8.Button;
            var8 = {};
            var23 = 'sm';
            var8['size'] = var23;
            var23 = var22[var20];
            var23 = var25.bind(var4)(var23);
            var24 = var23.intl;
            var23 = var24.string;
            var22 = var22[var20];
            var22 = var25.bind(var4)(var22);
            var22 = var22.t;
            var22 = var22.OYkgVl;
            var22 = var23.bind(var24)(var22);
            var8['text'] = var22;
            var19 = function onPress() {
                var3 = _closure1_slot1;
                var4 = _closure1_slot2;
                var1 = 25;
                var2 = var4[var1];
                var1 = undefined;
                var8 = var3.bind(var1)(var2);
                var7 = var8.bulkAddMemberRoles;
                var5 = _closure2_slot0;
                var6 = var5.id;
                var5 = _closure2_slot1;
                var5 = var5.id;
                var9 = 18;
                var9 = var4[var9];
                var10 = var3.bind(var1)(var9);
                var9 = var10.keys;
                var2 = _closure2_slot2;
                var2 = var9.bind(var10)(var2);
                var2 = var7.bind(var8)(var6, var5, var2);
                var2 = 26;
                var2 = var4[var2];
                var3 = var3.bind(var1)(var2);
                var2 = var3.hideActionSheet;
                var2 = var2.bind(var3)();
                return var1;
            };
            var8['onPress'] = var19;
            var19 = 'primary';
            if(!var13) { _fun0007_ip = 505; continue _fun0007 }
 501:
            var19 = 'secondary';
 505:
            var8['variant'] = var19;
            var8['disabled'] = var13;
            var8 = var11.bind(var4)(var10, var8);
            var5['trailing'] = var8;
            var5 = var7.bind(var4)(var6, var5);
            var1['header'] = var5;
            var7 = _closure1_slot10;
            var6 = _closure1_slot6;
            var5 = {};
            var8 = var21.container;
            var5['style'] = var8;
            var11 = _closure1_slot8;
            var19 = _closure1_slot0;
            var13 = _closure1_slot2;
            var8 = 27;
            var8 = var13[var8];
            var8 = var19.bind(var4)(var8);
            var10 = var8.Text;
            var8 = {};
            var22 = 'text-sm/normal';
            var8['variant'] = var22;
            var21 = var21.addMembersDescription;
            var8['style'] = var21;
            var21 = var13[var20];
            var21 = var19.bind(var4)(var21);
            var22 = var21.intl;
            var21 = var22.format;
            var13 = var13[var20];
            var13 = var19.bind(var4)(var13);
            var13 = var13.t;
            var20 = var13.3OxP4u;
            var19 = {};
            var13 = _closure1_slot7;
            var19['numMembers'] = var13;
            var19 = var21.bind(var22)(var20, var19);
            var8['children'] = var19;
            var10 = var11.bind(var4)(var10, var8);
            var8 = new Array(2);
            var8[0] = var10;
            var11 = _closure1_slot8;
            var10 = _closure1_slot13;
            var9 = {};
            var9['guild'] = var18;
            var9['role'] = var17;
            var9['members'] = var16;
            var9['pendingAdditions'] = var15;
            var9['setPendingAdditions'] = var14;
            var9['autoFocusSearch'] = var12;
            var9['maxCount'] = var13;
            var9['inActionSheet'] = var12;
            var9 = var11.bind(var4)(var10, var9);
            var8[1] = var9;
            var5['children'] = var8;
            var5 = var7.bind(var4)(var6, var5);
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['default'] = var4;
    var3['AddMembersBody'] = var2;
    return var1;
})();