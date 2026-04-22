// app/modules/stage_channels/native/create_channel/AddMembersBody.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var11 = metroImportDefault;
    var7 = metroImportAll;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var11;
    var _closure1_slot2 = var7;
    var _closure1_slot3 = var6;
    var1 = function _toPropertyKey(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var7 = arg1;
            var4 = 'object';
            var1 = typeof var7;
            var2 = var7;
            if(!(var4 === var1)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var2 = var7;
            if(!var2) { _fun0001_ip = 2; continue _fun0001 }
case 4:
            var1 = global;
            var3 = var1.Symbol;
            var3 = var3.toPrimitive;
            var6 = var7[var3];
            var5 = undefined;
            if(!(var5 === var6)) { _fun0001_ip = 5; continue _fun0001 }
case 6:
            var3 = var1.String;
            var2 = var3.bind(var5)(var7);
            _fun0001_ip = 2; continue _fun0001;
case 5:
            var5 = var6.call;
            var3 = 'string';
            var5 = var5.bind(var6)(var7, var3);
            var3 = typeof var5;
            var2 = var5;
            if(!(var4 === var3)) { _fun0001_ip = 2; continue _fun0001 }
case 7:
            var4 = var1.TypeError;
            var1 = var4.prototype;
            var3 = Object.create(var1, {constructor: {value: var4}});
            var9 = '@@toPrimitive must return a primitive value.';
            var10 = var3;
            var1 = new var10[var4](var9, var8);
            var1 = var1 instanceof Object ? var1 : var3;
            throw var1;
case 2:
            var4 = 'symbol';
            var3 = typeof var2;
            var1 = var2;
            if(!(var4 !== var3)) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var1 = '' + var2;
case 8:
            return var1;
        }
    };
    var _closure1_slot20 = var1;
    var1 = function getFullRowId(arg1) {
        var1 = arg1;
        var5 = var1.rowType;
        var4 = var1.id;
        var1 = global;
        var1 = var1.HermesInternal;
        var3 = var1.concat;
        var2 = '';
        var1 = ':';
        var1 = var3.bind(var2)(var5, var1, var4);
        return var1;
    };
    var _closure1_slot21 = var1;
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
    var4 = var11.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var11.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot6 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.View;
    var _closure1_slot7 = var7;
    var7 = var4.ScrollView;
    var _closure1_slot8 = var7;
    var4 = var4.SectionList;
    var _closure1_slot9 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var11.bind(var1)(var4);
    var _closure1_slot10 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var11.bind(var1)(var4);
    var _closure1_slot11 = var4;
    var4 = 6;
    var4 = var6[var4];
    var4 = var11.bind(var1)(var4);
    var _closure1_slot12 = var4;
    var4 = 7;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.RowType;
    var _closure1_slot13 = var7;
    var4 = var4.MEMBER_REQUEST_COUNT;
    var _closure1_slot14 = var4;
    var4 = 8;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.Permissions;
    var _closure1_slot15 = var4;
    var4 = 9;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.jsx;
    var _closure1_slot16 = var7;
    var7 = var4.Fragment;
    var _closure1_slot17 = var7;
    var4 = var4.jsxs;
    var _closure1_slot18 = var4;
    var4 = 10;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = {};
    var9 = {};
    var10 = 11;
    var12 = var6[var10];
    var12 = var11.bind(var1)(var12);
    var12 = var12.spacing;
    var12 = var12.PX_16;
    var9['paddingHorizontal'] = var12;
    var12 = var6[var10];
    var12 = var11.bind(var1)(var12);
    var12 = var12.spacing;
    var12 = var12.PX_12;
    var9['paddingTop'] = var12;
    var4['inputContainer'] = var9;
    var9 = {};
    var12 = 'row';
    var9['flexDirection'] = var12;
    var12 = var6[var10];
    var12 = var11.bind(var1)(var12);
    var12 = var12.spacing;
    var12 = var12.PX_16;
    var9['paddingHorizontal'] = var12;
    var12 = var6[var10];
    var12 = var11.bind(var1)(var12);
    var12 = var12.spacing;
    var12 = var12.PX_12;
    var9['paddingTop'] = var12;
    var4['inputDescContainer'] = var9;
    var9 = {'flex': 1, 'textAlign': 'center'};
    var4['inputDescText'] = var9;
    var9 = {'height': 12, 'width': 12};
    var12 = var6[var10];
    var12 = var11.bind(var1)(var12);
    var12 = var12.radii;
    var12 = var12.round;
    var9['borderRadius'] = var12;
    var4['tagRoleColor'] = var9;
    var9 = {'width': 16, 'height': 16};
    var12 = var6[var10];
    var12 = var11.bind(var1)(var12);
    var12 = var12.radii;
    var12 = var12.sm;
    var9['borderRadius'] = var12;
    var4['tagAvatar'] = var9;
    var9 = {'backgroundColor': 'transparent', 'paddingTop': 40};
    var4['emptyState'] = var9;
    var9 = {};
    var12 = var6[var10];
    var12 = var11.bind(var1)(var12);
    var12 = var12.colors;
    var12 = var12.TEXT_DEFAULT;
    var9['color'] = var12;
    var4['emptyStateText'] = var9;
    var9 = {};
    var12 = var6[var10];
    var12 = var11.bind(var1)(var12);
    var12 = var12.colors;
    var12 = var12.BACKGROUND_BASE_LOW;
    var9['backgroundColor'] = var12;
    var10 = var6[var10];
    var10 = var11.bind(var1)(var10);
    var10 = var10.spacing;
    var10 = var10.PX_12;
    var9['paddingVertical'] = var10;
    var4['sectionRowWrapper'] = var9;
    var9 = {'marginHorizontal': 16, 'marginVertical': 8};
    var4['adminWarning'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot19 = var4;
    var4 = 26;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/stage_channels/native/create_channel/AddMembersBody.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function AddMembersBody(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var1 = arg1;
            var20 = var1.channel;
            var17 = var1.guild;
            var _closure2_slot0 = var17;
            var5 = var1.pendingAdditions;
            var _closure2_slot1 = var5;
            var2 = var1.setPendingAdditions;
            var _closure2_slot2 = var2;
            var11 = var1.permission;
            var4 = undefined;
            if(!(var11 === var4)) { _fun0002_ip = 10; continue _fun0002 }
case 11:
            var3 = _closure1_slot2;
            var6 = _closure1_slot3;
            var2 = 12;
            var2 = var6[var2];
            var2 = var3.bind(var4)(var2);
            var11 = var2.NONE;
case 10:
            var26 = var1.inputDesc;
            var1 = var1.inActionSheet;
            var _closure2_slot3 = var4;
            var _closure2_slot4 = var4;
            var _closure2_slot5 = var4;
            var _closure2_slot6 = var4;
            var _closure2_slot7 = var4;
            var _closure2_slot8 = var4;
            var2 = function getQuery(arg1, arg2) {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var4 = arg1;
                    var2 = arg2;
                    var1 = var4;
                    if(!var2) { _fun0003_ip = 12; continue _fun0003 }
case 13:
                    var3 = var4.slice;
                    var2 = 1;
                    var1 = var3.bind(var4)(var2);
case 12:
                    return var1;
                }
            };
            var _closure2_slot9 = var2;
            var9 = function filterByQuery(arg1) {
                var3 = _closure2_slot9;
                var4 = _closure2_slot6;
                var2 = var4.trim;
                var2 = var2.bind(var4)();
                var1 = _closure2_slot4;
                var6 = undefined;
                var5 = var3.bind(var6)(var2, var1);
                var1 = global;
                var4 = var1.RegExp;
                var3 = _closure1_slot1;
                var7 = _closure1_slot3;
                var2 = 15;
                var2 = var7[var2];
                var3 = var3.bind(var6)(var2);
                var2 = var3.escape;
                var3 = var2.bind(var3)(var5);
                var1 = var1.HermesInternal;
                var2 = var1.concat;
                var1 = '';
                var9 = var2.bind(var1)(var3);
                var1 = var4.prototype;
                var2 = Object.create(var1, {constructor: {value: var4}});
                var8 = 'i';
                var10 = var2;
                var1 = new var10[var4](var9, var8, var7);
                var3 = var1 instanceof Object ? var1 : var2;
                var2 = var3.test;
                var1 = arg1;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var2 = _closure1_slot19;
            var14 = var2.bind(var4)();
            _closure2_slot3 = var14;
            var3 = _closure1_slot1;
            var8 = _closure1_slot3;
            var2 = 13;
            var2 = var8[var2];
            var3 = var3.bind(var4)(var2);
            var2 = {};
            var6 = !var1;
            var2['isKeyboardAwareOnAndroid'] = var6;
            var2 = var3.bind(var4)(var2);
            var15 = var2.insets;
            var6 = _closure1_slot0;
            var3 = 14;
            var2 = var8[var3];
            var16 = var6.bind(var4)(var2);
            var13 = var16.useStateFromStores;
            var2 = _closure1_slot11;
            var7 = new Array(1);
            var7[0] = var2;
            var2 = function() {
                var3 = _closure1_slot11;
                var2 = var3.getSortedRoles;
                var1 = _closure2_slot0;
                var1 = var1.id;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var13 = var13.bind(var16)(var7, var2);
            var23 = _closure1_slot6;
            var7 = var23.useState;
            var2 = false;
            var2 = var7.bind(var23)(var2);
            var22 = _closure1_slot5;
            var19 = 2;
            var16 = var22.bind(var4)(var2, var19);
            var7 = 0;
            var2 = var16[var7];
            _closure2_slot4 = var2;
            var21 = 1;
            var16 = var16[var21];
            _closure2_slot5 = var16;
            var16 = var23.useState;
            var18 = '';
            var16 = var16.bind(var23)(var18);
            var19 = var22.bind(var4)(var16, var19);
            var16 = var19[var7];
            _closure2_slot6 = var16;
            var19 = var19[var21];
            _closure2_slot7 = var19;
            var22 = _closure1_slot2;
            var19 = 12;
            var19 = var8[var19];
            var23 = var22.bind(var4)(var19);
            var22 = var23.canEveryoneRole;
            var19 = _closure1_slot15;
            var19 = var19.ADMINISTRATOR;
            var19 = var22.bind(var23)(var19, var17);
            var3 = var8[var3];
            var22 = var6.bind(var4)(var3);
            var8 = var22.useStateFromStoresArray;
            var3 = _closure1_slot10;
            var6 = new Array(1);
            var6[0] = var3;
            var3 = function() {
                var3 = _closure1_slot10;
                var2 = var3.getMemberIds;
                var1 = _closure2_slot0;
                var1 = var1.id;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var6 = var8.bind(var22)(var6, var3);
            if(var2) { _fun0002_ip = 14; continue _fun0002 }
case 15:
            var3 = _closure1_slot2;
            var2 = _closure1_slot3;
            var8 = 16;
            var2 = var2[var8];
            var3 = var3.bind(var4)(var2);
            var2 = var3.getRolesRowsWithPermissionDisabled;
            var35 = var3;
            var34 = var17;
            var33 = var13;
            var32 = var20;
            var31 = var11;
            var30 = var9;
            var3 = var35[var2](var34, var33, var32, var31, var30, var29);
            var2 = var3.length;
            var2 = var7 === var2;
            if(!var2) { _fun0002_ip = 16; continue _fun0002 }
case 17:
            var22 = var16.trim;
            var22 = var22.bind(var16)();
            var2 = var18 === var22;
case 16:
            if(!var2) { _fun0002_ip = 18; continue _fun0002 }
case 19:
            var13 = var13.length;
            var2 = var21 === var13;
case 18:
            var13 = var3;
            if(!var2) { _fun0002_ip = 20; continue _fun0002 }
case 21:
            var3 = _closure1_slot2;
            var2 = _closure1_slot3;
            var2 = var2[var8];
            var3 = var3.bind(var4)(var2);
            var2 = var3.getNoRolesRow;
            var13 = var2.bind(var3)();
            _fun0002_ip = 20; continue _fun0002;
case 14:
            var13 = new Array(0);
case 20:
            var3 = _closure1_slot2;
            var8 = _closure1_slot3;
            var2 = 16;
            var2 = var8[var2];
            var3 = var3.bind(var4)(var2);
            var2 = var3.getMembersRows;
            var35 = var3;
            var34 = var6;
            var33 = var20;
            var32 = var17;
            var31 = var11;
            var30 = var9;
            var6 = var35[var2](var34, var33, var32, var31, var30, var29);
            var11 = new Array(0);
            var3 = var11.push;
            var2 = {};
            var21 = _closure1_slot0;
            var17 = 18;
            var9 = var8[var17];
            var9 = var21.bind(var4)(var9);
            var22 = var9.intl;
            var20 = var22.string;
            var9 = var8[var17];
            var9 = var21.bind(var4)(var9);
            var9 = var9.t;
            var9 = var9.LPJmL/;
            var9 = var20.bind(var22)(var9);
            var2['title'] = var9;
            var2['data'] = var13;
            var2 = var3.bind(var11)(var2);
            var3 = var11.push;
            var2 = {};
            var9 = var8[var17];
            var9 = var21.bind(var4)(var9);
            var20 = var9.intl;
            var9 = var20.string;
            var8 = var8[var17];
            var8 = var21.bind(var4)(var8);
            var8 = var8.t;
            var8 = var8["9Oq93m"];
            var8 = var9.bind(var20)(var8);
            var2['title'] = var8;
            var2['data'] = var6;
            var2 = var3.bind(var11)(var2);
            var2 = global;
            var3 = var2.Object;
            var2 = var3.values;
            var5 = var2.bind(var3)(var5);
            var3 = var5.map;
            var2 = function(arg1) {
                var1 = arg1;
                var4 = var1.display;
                var2 = var1.row;
                var1 = {};
                var5 = var1;
                var3 = copyDataProperties(var5, var4);
                var3 = var2.id;
                var2 = 'id';
                var1[1] = var3;
                return var1;
            };
            var24 = var3.bind(var5)(var2);
            var3 = var13.length;
            var2 = var6.length;
            var2 = var3 + var2;
            _closure2_slot8 = var2;
            var8 = _closure1_slot6;
            var5 = var8.useEffect;
            var3 = new Array(2);
            var3[0] = var2;
            var3[1] = var16;
            var2 = function() {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                    var2 = _closure2_slot6;
                    var1 = '';
                    if(!(var1 !== var2)) { _fun0004_ip = 22; continue _fun0004 }
case 23:
                    var8 = _closure1_slot0;
                    var9 = _closure1_slot3;
                    var1 = 20;
                    var1 = var9[var1];
                    var2 = undefined;
                    var1 = var8.bind(var2)(var1);
                    var4 = var1.AccessibilityAnnouncer;
                    var3 = var4.announce;
                    var1 = 18;
                    var5 = var9[var1];
                    var5 = var8.bind(var2)(var5);
                    var6 = var5.intl;
                    var5 = var6.formatToPlainString;
                    var1 = var9[var1];
                    var1 = var8.bind(var2)(var1);
                    var1 = var1.t;
                    var2 = var1.ZGVL3g;
                    var1 = {};
                    var7 = _closure2_slot8;
                    var1['count'] = var7;
                    var2 = var5.bind(var6)(var2, var1);
                    var1 = 'polite';
                    var1 = var3.bind(var4)(var2, var1);
case 22:
                    var1 = undefined;
                    return var1;
                }
            };
            var2 = var5.bind(var8)(var2, var3);
            if(var1) { _fun0002_ip = 24; continue _fun0002 }
case 25:
            var9 = _closure1_slot8;
            _fun0002_ip = 26; continue _fun0002;
case 24:
            var3 = _closure1_slot0;
            var5 = _closure1_slot3;
            var2 = 21;
            var2 = var5[var2];
            var2 = var3.bind(var4)(var2);
            var9 = var2.BottomSheetScrollView;
case 26:
            if(var1) { _fun0002_ip = 27; continue _fun0002 }
case 28:
            var8 = _closure1_slot9;
            _fun0002_ip = 29; continue _fun0002;
case 27:
            var2 = _closure1_slot0;
            var3 = _closure1_slot3;
            var1 = 21;
            var1 = var3[var1];
            var1 = var2.bind(var4)(var1);
            var8 = var1.BottomSheetSectionList;
case 29:
            var3 = _closure1_slot18;
            var2 = _closure1_slot17;
            var1 = {};
            var21 = _closure1_slot16;
            var20 = _closure1_slot7;
            var5 = {};
            var22 = var14.inputContainer;
            var5['style'] = var22;
            var23 = _closure1_slot1;
            var25 = _closure1_slot3;
            var22 = 22;
            var22 = var25[var22];
            var23 = var23.bind(var4)(var22);
            var22 = {};
            var29 = _closure1_slot0;
            var27 = var25[var17];
            var27 = var29.bind(var4)(var27);
            var28 = var27.intl;
            var27 = var28.string;
            var25 = var25[var17];
            var25 = var29.bind(var4)(var25);
            var25 = var25.t;
            var25 = var25.TVZdKh;
            var25 = var27.bind(var28)(var25);
            var22['placeholder'] = var25;
            var22['tags'] = var24;
            var24 = function onChangeText(arg1) {
                var5 = arg1;
                var1 = var5.trim;
                var10 = var1.bind(var5)();
                var2 = var10.charAt;
                var1 = 0;
                var2 = var2.bind(var10)(var1);
                var1 = '@';
                var3 = var1 === var2;
                var6 = _closure1_slot1;
                var2 = _closure1_slot3;
                var1 = 23;
                var2 = var2[var1];
                var1 = undefined;
                var9 = var6.bind(var1)(var2);
                var8 = var9.requestMembers;
                var6 = _closure2_slot0;
                var7 = var6.id;
                var6 = _closure2_slot9;
                var6 = var6.bind(var1)(var10, var3);
                var4 = _closure1_slot14;
                var4 = var8.bind(var9)(var7, var6, var4);
                var4 = _closure2_slot7;
                var4 = var4.bind(var1)(var5);
                var2 = _closure2_slot5;
                var2 = var2.bind(var1)(var3);
                return var1;
            };
            var22['onChangeText'] = var24;
            var24 = function onRemove(arg1) {
                var1 = global;
                var5 = var1.Object;
                var4 = var5.keys;
                var3 = _closure2_slot1;
                var4 = var4.bind(var5)(var3);
                var3 = arg1;
                var3 = var4[var3];
                var _closure3_slot0 = var3;
                var3 = _closure2_slot2;
                var1 = undefined;
                var2 = function(arg1) {
                    var4 = arg1;
                    var2 = _closure3_slot0;
                    var1 = var4[var2];
                    var3 = _closure1_slot4;
                    var5 = new Array(1);
                    var5[0] = var2;
                    var2 = var5.map;
                    var1 = _closure1_slot20;
                    var2 = var2.bind(var5)(var1);
                    var1 = undefined;
                    var1 = var3.bind(var1)(var4, var2);
                    return var1;
                };
                var2 = var3.bind(var1)(var2);
                return var1;
            };
            var22['onRemove'] = var24;
            var24 = true;
            var22['autoFocus'] = var24;
            var22 = var21.bind(var4)(var23, var22);
            var5['children'] = var22;
            var20 = var21.bind(var4)(var20, var5);
            var5 = new Array(4);
            var5[0] = var20;
            var20 = null;
            var21 = var20 != var26;
            if(!var21) { _fun0002_ip = 30; continue _fun0002 }
case 31:
            var23 = _closure1_slot16;
            var22 = _closure1_slot7;
            var21 = {};
            var24 = var14.inputDescContainer;
            var21['style'] = var24;
            var25 = _closure1_slot0;
            var27 = _closure1_slot3;
            var24 = 24;
            var24 = var27[var24];
            var24 = var25.bind(var4)(var24);
            var25 = var24.Text;
            var24 = {'style': null, 'variant': 'text-xs/medium', 'color': 'text-default'};
            var27 = var14.inputDescText;
            var24['style'] = var27;
            var24['children'] = var26;
            var24 = var23.bind(var4)(var25, var24);
            var21['children'] = var24;
            var20 = var23.bind(var4)(var22, var21);
case 30:
            var5[1] = var20;
            if(!var19) { _fun0002_ip = 32; continue _fun0002 }
case 33:
            var22 = _closure1_slot16;
            var21 = _closure1_slot7;
            var20 = {};
            var23 = var14.adminWarning;
            var20['style'] = var23;
            var28 = _closure1_slot0;
            var25 = _closure1_slot3;
            var26 = 17;
            var23 = var25[var26];
            var23 = var28.bind(var4)(var23);
            var24 = var23.HelpMessage;
            var23 = {};
            var26 = var25[var26];
            var26 = var28.bind(var4)(var26);
            var26 = var26.HelpMessageTypes;
            var26 = var26.WARNING;
            var23['messageType'] = var26;
            var26 = var25[var17];
            var26 = var28.bind(var4)(var26);
            var27 = var26.intl;
            var26 = var27.string;
            var25 = var25[var17];
            var25 = var28.bind(var4)(var25);
            var25 = var25.t;
            var25 = var25["5f3HIC"];
            var25 = var26.bind(var27)(var25);
            var23['children'] = var25;
            var23 = var22.bind(var4)(var24, var23);
            var20['children'] = var23;
            var19 = var22.bind(var4)(var21, var20);
case 32:
            var5[2] = var19;
            if(!(var18 !== var16)) { _fun0002_ip = 34; continue _fun0002 }
case 35:
            var13 = var13.length;
            if(!(var7 === var13)) { _fun0002_ip = 34; continue _fun0002 }
case 36:
            var6 = var6.length;
            if(!(var7 !== var6)) { _fun0002_ip = 37; continue _fun0002 }
case 34:
            var7 = _closure1_slot16;
            var6 = {};
            var13 = {};
            var19 = _closure1_slot1;
            var20 = _closure1_slot3;
            var18 = 11;
            var21 = var20[var18];
            var21 = var19.bind(var4)(var21);
            var21 = var21.spacing;
            var21 = var21.PX_16;
            var13['paddingHorizontal'] = var21;
            var18 = var20[var18];
            var18 = var19.bind(var4)(var18);
            var18 = var18.spacing;
            var18 = var18.PX_16;
            var15 = var15.bottom;
            var15 = var18 + var15;
            var13['paddingBottom'] = var15;
            var6['contentContainerStyle'] = var13;
            var13 = function renderItem(arg1) {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                    var2 = arg1;
                    var8 = var2.item;
                    var _closure3_slot0 = var8;
                    var3 = var2.index;
                    var2 = var2.section;
                    var6 = {};
                    var4 = 0;
                    var4 = var4 === var3;
                    if(!var4) { _fun0005_ip = 38; continue _fun0005 }
case 39:
                    var7 = var2.title;
                    var12 = _closure1_slot0;
                    var13 = _closure1_slot3;
                    var5 = 18;
                    var9 = var13[var5];
                    var11 = undefined;
                    var9 = var12.bind(var11)(var9);
                    var10 = var9.intl;
                    var9 = var10.string;
                    var5 = var13[var5];
                    var5 = var12.bind(var11)(var5);
                    var5 = var5.t;
                    var5 = var5.LPJmL/;
                    var5 = var9.bind(var10)(var5);
                    var4 = var7 === var5;
case 38:
                    var6['start'] = var4;
                    var2 = var2.data;
                    var4 = var2.length;
                    var2 = 1;
                    var2 = var4 - var2;
                    var2 = var3 === var2;
                    var6['end'] = var2;
                    var2 = _closure2_slot0;
                    var2 = var2.id;
                    var6['guildId'] = var2;
                    var6['item'] = var8;
                    var2 = var8.disabled;
                    var6['disabled'] = var2;
                    var3 = var8.disabled;
                    var2 = null;
                    if(!var3) { _fun0005_ip = 40; continue _fun0005 }
case 41:
                    var10 = _closure1_slot0;
                    var11 = _closure1_slot3;
                    var3 = 18;
                    var4 = var11[var3];
                    var9 = undefined;
                    var4 = var10.bind(var9)(var4);
                    var7 = var4.intl;
                    var4 = var7.string;
                    var3 = var11[var3];
                    var3 = var10.bind(var9)(var3);
                    var3 = var3.t;
                    var3 = var3.MVVOCv;
                    var2 = var4.bind(var7)(var3);
case 40:
                    var6['subLabel'] = var2;
                    var1 = function onPress() {
                        var3 = _closure3_slot0;
                        var2 = function handleUpdatePendingAdditions(arg1) {
                            _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                                var2 = arg1;
                                var _closure5_slot0 = var2;
                                var3 = var2.rowType;
                                var2 = _closure1_slot13;
                                var2 = var2.EMPTY_STATE;
                                if(!(var3 !== var2)) { _fun0006_ip = 42; continue _fun0006 }
case 43:
                                var3 = _closure2_slot2;
                                var2 = undefined;
                                var1 = function(arg1) {
                                    _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                                        var1 = {};
                                        var13 = arg1;
                                        var14 = var1;
                                        var2 = copyDataProperties(var14, var13);
                                        var3 = _closure1_slot21;
                                        var2 = _closure5_slot0;
                                        var9 = undefined;
                                        var2 = var3.bind(var9)(var2);
                                        var3 = var2 in var1;
                                        if(var3) { _fun0007_ip = 44; continue _fun0007 }
case 45:
                                        var3 = _closure5_slot0;
                                        var5 = var3.rowType;
                                        var3 = _closure1_slot13;
                                        var3 = var3.ROLE;
                                        if(!(var5 !== var3)) { _fun0007_ip = 46; continue _fun0007 }
case 47:
                                        var3 = _closure5_slot0;
                                        var5 = var3.rowType;
                                        var3 = _closure1_slot13;
                                        var3 = var3.ADMINISTRATOR;
                                        if(!(var5 !== var3)) { _fun0007_ip = 46; continue _fun0007 }
case 48:
                                        var3 = _closure5_slot0;
                                        var5 = var3.rowType;
                                        var3 = _closure1_slot13;
                                        var3 = var3.MEMBER;
                                        if(!(var5 !== var3)) { _fun0007_ip = 49; continue _fun0007 }
case 50:
                                        var3 = _closure5_slot0;
                                        var7 = var3.rowType;
                                        var3 = _closure1_slot13;
                                        var3 = var3.OWNER;
                                        var5 = undefined;
                                        if(!(var7 === var3)) { _fun0007_ip = 51; continue _fun0007 }
case 49:
                                        var8 = _closure1_slot12;
                                        var7 = var8.getUser;
                                        var3 = _closure5_slot0;
                                        var3 = var3.id;
                                        var11 = var7.bind(var8)(var3);
                                        var3 = null;
                                        var3 = var3 != var11;
                                        var5 = undefined;
                                        if(!var3) { _fun0007_ip = 51; continue _fun0007 }
case 52:
                                        var3 = {};
                                        var7 = _closure5_slot0;
                                        var7 = var7.name;
                                        var3['text'] = var7;
                                        var10 = _closure1_slot16;
                                        var8 = _closure1_slot0;
                                        var12 = _closure1_slot3;
                                        var7 = 17;
                                        var7 = var12[var7];
                                        var7 = var8.bind(var9)(var7);
                                        var8 = var7.Avatar;
                                        var7 = {};
                                        var7['user'] = var11;
                                        var12 = _closure2_slot0;
                                        var12 = var12.id;
                                        var7['guildId'] = var12;
                                        var12 = _closure2_slot3;
                                        var12 = var12.tagAvatar;
                                        var7['avatarStyle'] = var12;
                                        var11 = _closure2_slot3;
                                        var11 = var11.tagAvatar;
                                        var7['style'] = var11;
                                        var7 = var10.bind(var9)(var8, var7);
                                        var3['icon'] = var7;
                                        var5 = var3;
                                        _fun0007_ip = 51; continue _fun0007;
case 46:
                                        var3 = {};
                                        var12 = _closure5_slot0;
                                        var7 = var12.name;
                                        var3['text'] = var7;
                                        var8 = _closure1_slot16;
                                        var7 = _closure1_slot7;
                                        var6 = {};
                                        var10 = _closure2_slot3;
                                        var11 = var10.tagRoleColor;
                                        var10 = new Array(2);
                                        var10[0] = var11;
                                        var11 = {};
                                        var12 = var12.colorString;
                                        var11['backgroundColor'] = var12;
                                        var10[1] = var11;
                                        var6['style'] = var10;
                                        var6 = var8.bind(var9)(var7, var6);
                                        var3['icon'] = var6;
                                        var5 = var3;
case 51:
                                        var3 = null;
                                        if(!(var3 != var5)) { _fun0007_ip = 53; continue _fun0007 }
case 54:
                                        var3 = {};
                                        var3['display'] = var5;
                                        var4 = _closure5_slot0;
                                        var3['row'] = var4;
                                        var1[var2] = var3;
                                        _fun0007_ip = 53; continue _fun0007;
case 44:
                                        var2 = delete var1[var2];
case 53:
                                        return var1;
                                    }
                                };
                                var1 = var3.bind(var2)(var1);
case 42:
                                var1 = undefined;
                                return var1;
                            }
                        };
                        var1 = undefined;
                        var2 = var2.bind(var1)(var3);
                        return var1;
                    };
                    var6['onPress'] = var1;
                    var1 = var8.disabled;
                    if(var1) { _fun0005_ip = 55; continue _fun0005 }
case 56:
                    var2 = var8.rowType;
                    var1 = _closure1_slot13;
                    var1 = var1.EMPTY_STATE;
                    if(!(var2 !== var1)) { _fun0005_ip = 55; continue _fun0005 }
case 57:
                    var4 = _closure1_slot16;
                    var2 = _closure1_slot0;
                    var3 = _closure1_slot3;
                    var1 = 19;
                    var1 = var3[var1];
                    var3 = undefined;
                    var1 = var2.bind(var3)(var1);
                    var2 = var1.ChannelOverwritesCheckboxItem;
                    var1 = {};
                    var15 = var1;
                    var14 = var6;
                    var9 = copyDataProperties(var15, var14);
                    var7 = _closure1_slot21;
                    var7 = var7.bind(var3)(var8);
                    var5 = _closure2_slot1;
                    var7 = var7 in var5;
                    var5 = 'checked';
                    var1[4] = var7;
                    var1 = var4.bind(var3)(var2, var1);
                    _fun0005_ip = 58; continue _fun0005;
case 55:
                    var5 = _closure1_slot16;
                    var3 = _closure1_slot1;
                    var4 = _closure1_slot3;
                    var2 = 19;
                    var2 = var4[var2];
                    var4 = undefined;
                    var3 = var3.bind(var4)(var2);
                    var2 = {};
                    var15 = var2;
                    var14 = var6;
                    var6 = copyDataProperties(var15, var14);
                    var1 = var5.bind(var4)(var3, var2);
case 58:
                    return var1;
                }
            };
            var6['renderItem'] = var13;
            var12 = function renderSectionHeader(arg1) {
                _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                    var1 = arg1;
                    var1 = var1.section;
                    var6 = var1.title;
                    var1 = var1.data;
                    var2 = var1.length;
                    var1 = 0;
                    var2 = var2 > var1;
                    var1 = null;
                    if(!var2) { _fun0008_ip = 59; continue _fun0008 }
case 60:
                    var5 = _closure1_slot16;
                    var3 = _closure1_slot0;
                    var4 = _closure1_slot3;
                    var2 = 24;
                    var2 = var4[var2];
                    var4 = undefined;
                    var2 = var3.bind(var4)(var2);
                    var3 = var2.Text;
                    var2 = {'style': null, 'maxFontSizeMultiplier': 2, 'accessibilityRole': 'header', 'variant': 'text-sm/semibold', 'color': 'interactive-text-default'};
                    var7 = _closure2_slot3;
                    var7 = var7.sectionRowWrapper;
                    var2['style'] = var7;
                    var2['children'] = var6;
                    var1 = var5.bind(var4)(var3, var2);
case 59:
                    return var1;
                }
            };
            var6['renderSectionHeader'] = var12;
            var6['sections'] = var11;
            var11 = 'always';
            var6['keyboardShouldPersistTaps'] = var11;
            var6 = var7.bind(var4)(var8, var6);
            _fun0002_ip = 61; continue _fun0002;
case 37:
            var8 = _closure1_slot16;
            var7 = {};
            var13 = _closure1_slot0;
            var12 = _closure1_slot3;
            var10 = 17;
            var10 = var12[var10];
            var10 = var13.bind(var4)(var10);
            var11 = var10.EmptyState;
            var10 = {};
            var15 = 25;
            var15 = var12[var15];
            var15 = var13.bind(var4)(var15);
            var15 = var15.NoResultsAlt;
            var10['Illustration'] = var15;
            var15 = var14.emptyState;
            var10['style'] = var15;
            var14 = var14.emptyStateText;
            var10['bodyStyle'] = var14;
            var14 = var12[var17];
            var14 = var13.bind(var4)(var14);
            var15 = var14.intl;
            var14 = var15.format;
            var12 = var12[var17];
            var12 = var13.bind(var4)(var12);
            var12 = var12.t;
            var13 = var12.ErpIY3;
            var12 = {};
            var12['query'] = var16;
            var12 = var14.bind(var15)(var13, var12);
            var10['body'] = var12;
            var10 = var8.bind(var4)(var11, var10);
            var7['children'] = var10;
            var6 = var8.bind(var4)(var9, var7);
case 61:
            var5[3] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();