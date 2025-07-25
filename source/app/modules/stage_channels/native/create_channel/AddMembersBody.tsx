// app/modules/stage_channels/native/create_channel/AddMembersBody.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var11 = native3;
    var7 = native4;
    var3 = native6;
    var6 = native7;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var11;
    var _closure1_slot2 = var7;
    var _closure1_slot3 = var6;
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
    var12 = var12.TEXT_NORMAL;
    var9['color'] = var12;
    var4['emptyStateText'] = var9;
    var9 = {};
    var12 = var6[var10];
    var12 = var11.bind(var1)(var12);
    var12 = var12.colors;
    var12 = var12.BACKGROUND_PRIMARY;
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
    var4 = 28;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/stage_channels/native/create_channel/AddMembersBody.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function AddMembersBody(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var1 = arg1;
            var20 = var1.channel;
            var19 = var1.guild;
            var _closure2_slot0 = var19;
            var12 = var1.pendingAdditions;
            var _closure2_slot1 = var12;
            var2 = var1.setPendingAdditions;
            var _closure2_slot2 = var2;
            var17 = var1.permission;
            var4 = undefined;
            if(!(var17 === var4)) { _fun0002_ip = 80; continue _fun0002 }
 51:
            var3 = _closure1_slot2;
            var5 = _closure1_slot3;
            var2 = 12;
            var2 = var5[var2];
            var2 = var3.bind(var4)(var2);
            var17 = var2.NONE;
 80:
            var23 = var1.inputDesc;
            var1 = var1.inActionSheet;
            var _closure2_slot3 = var4;
            var _closure2_slot4 = var4;
            var _closure2_slot5 = var4;
            var _closure2_slot6 = var4;
            var _closure2_slot7 = var4;
            var2 = function getQuery(arg1, arg2) {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                    var4 = arg1;
                    var2 = arg2;
                    var1 = var4;
                    if(!var2) { _fun0003_ip = 25; continue _fun0003 }
 12:
                    var3 = var4.slice;
                    var2 = 1;
                    var1 = var3.bind(var4)(var2);
 25:
                    return var1;
                }
            };
            var _closure2_slot8 = var2;
            var10 = function filterByQuery(arg1) {
                var3 = _closure2_slot8;
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
            var9 = _closure1_slot3;
            var2 = 13;
            var2 = var9[var2];
            var3 = var3.bind(var4)(var2);
            var2 = {};
            var5 = !var1;
            var2['isKeyboardAwareOnAndroid'] = var5;
            var2 = var3.bind(var4)(var2);
            var15 = var2.insets;
            var7 = _closure1_slot0;
            var5 = 14;
            var2 = var9[var5];
            var8 = var7.bind(var4)(var2);
            var6 = var8.useStateFromStores;
            var2 = _closure1_slot11;
            var3 = new Array(1);
            var3[0] = var2;
            var2 = function() {
                var3 = _closure1_slot11;
                var2 = var3.getRoles;
                var1 = _closure2_slot0;
                var1 = var1.id;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var24 = var6.bind(var8)(var3, var2);
            var22 = _closure1_slot6;
            var3 = var22.useState;
            var2 = false;
            var2 = var3.bind(var22)(var2);
            var21 = _closure1_slot5;
            var16 = 2;
            var6 = var21.bind(var4)(var2, var16);
            var3 = 0;
            var2 = var6[var3];
            _closure2_slot4 = var2;
            var18 = 1;
            var6 = var6[var18];
            _closure2_slot5 = var6;
            var8 = var22.useState;
            var6 = '';
            var8 = var8.bind(var22)(var6);
            var8 = var21.bind(var4)(var8, var16);
            var16 = var8[var3];
            _closure2_slot6 = var16;
            var8 = var8[var18];
            _closure2_slot7 = var8;
            var18 = _closure1_slot2;
            var8 = 12;
            var8 = var9[var8];
            var21 = var18.bind(var4)(var8);
            var18 = var21.canEveryoneRole;
            var8 = _closure1_slot15;
            var8 = var8.ADMINISTRATOR;
            var8 = var18.bind(var21)(var8, var19);
            var5 = var9[var5];
            var18 = var7.bind(var4)(var5);
            var9 = var18.useStateFromStoresArray;
            var5 = _closure1_slot10;
            var7 = new Array(1);
            var7[0] = var5;
            var5 = function() {
                var3 = _closure1_slot10;
                var2 = var3.getMemberIds;
                var1 = _closure2_slot0;
                var1 = var1.id;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var9 = var9.bind(var18)(var7, var5);
            if(var2) { _fun0002_ip = 535; continue _fun0002 }
 394:
            var5 = _closure1_slot2;
            var2 = _closure1_slot3;
            var21 = 16;
            var2 = var2[var21];
            var5 = var5.bind(var4)(var2);
            var2 = var5.getRolesRowsWithPermissionDisabled;
            var32 = var5;
            var31 = var19;
            var30 = var24;
            var29 = var20;
            var28 = var17;
            var27 = var10;
            var2 = var32[var2](var31, var30, var29, var28, var27, var26);
            var7 = var2.length;
            var5 = var2;
            if(!(var3 === var7)) { _fun0002_ip = 539; continue _fun0002 }
 454:
            var7 = var16.trim;
            var7 = var7.bind(var16)();
            var7 = var6 !== var7;
            if(var7) { _fun0002_ip = 500; continue _fun0002 }
 471:
            var22 = _closure1_slot2;
            var18 = _closure1_slot3;
            var18 = var18[var21];
            var22 = var22.bind(var4)(var18);
            var18 = var22.hasCustomRoles;
            var7 = var18.bind(var22)(var19, var24);
 500:
            if(var7) { _fun0002_ip = 530; continue _fun0002 }
 503:
            var18 = _closure1_slot2;
            var7 = _closure1_slot3;
            var7 = var7[var21];
            var18 = var18.bind(var4)(var7);
            var7 = var18.getNoRolesRow;
            var2 = var7.bind(var18)();
 530:
            var5 = var2;
            _fun0002_ip = 539; continue _fun0002;
 535:
            var5 = new Array(0);
 539:
            var7 = _closure1_slot2;
            var18 = _closure1_slot3;
            var2 = 16;
            var2 = var18[var2];
            var7 = var7.bind(var4)(var2);
            var2 = var7.getMembersRows;
            var32 = var7;
            var31 = var9;
            var30 = var20;
            var29 = var19;
            var28 = var17;
            var27 = var10;
            var2 = var32[var2](var31, var30, var29, var28, var27, var26);
            var10 = new Array(0);
            var9 = var10.push;
            var7 = {};
            var21 = _closure1_slot0;
            var17 = 19;
            var19 = var18[var17];
            var19 = var21.bind(var4)(var19);
            var22 = var19.intl;
            var20 = var22.string;
            var19 = var18[var17];
            var19 = var21.bind(var4)(var19);
            var19 = var19.t;
            var19 = var19.LPJmLy;
            var19 = var20.bind(var22)(var19);
            var7['title'] = var19;
            var7['data'] = var5;
            var7 = var9.bind(var10)(var7);
            var9 = var10.push;
            var7 = {};
            var19 = var18[var17];
            var19 = var21.bind(var4)(var19);
            var20 = var19.intl;
            var19 = var20.string;
            var18 = var18[var17];
            var18 = var21.bind(var4)(var18);
            var18 = var18.t;
            var18 = var18.9Oq93t;
            var18 = var19.bind(var20)(var18);
            var7['title'] = var18;
            var7['data'] = var2;
            var7 = var9.bind(var10)(var7);
            var7 = global;
            var9 = var7.Object;
            var7 = var9.values;
            var12 = var7.bind(var9)(var12);
            var9 = var12.map;
            var7 = function(arg1) {
                var1 = arg1;
                var4 = var1.display;
                var2 = var1.row;
                var1 = {};
                var5 = var1;
                var3 = copyDataProperties(var5, var4);
                var3 = var2.id;
                var2 = 'id';
                var1[var2] = var3;
                return var1;
            };
            var21 = var9.bind(var12)(var7);
            var6 = var6 !== var16;
            if(!var6) { _fun0002_ip = 775; continue _fun0002 }
 766:
            var5 = var5.length;
            var6 = var3 === var5;
 775:
            if(!var6) { _fun0002_ip = 787; continue _fun0002 }
 778:
            var2 = var2.length;
            var6 = var3 === var2;
 787:
            if(var1) { _fun0002_ip = 796; continue _fun0002 }
 790:
            var9 = _closure1_slot8;
            _fun0002_ip = 822; continue _fun0002;
 796:
            var3 = _closure1_slot0;
            var5 = _closure1_slot3;
            var2 = 21;
            var2 = var5[var2];
            var2 = var3.bind(var4)(var2);
            var9 = var2.BottomSheetScrollView;
 822:
            if(var1) { _fun0002_ip = 831; continue _fun0002 }
 825:
            var7 = _closure1_slot9;
            _fun0002_ip = 857; continue _fun0002;
 831:
            var2 = _closure1_slot0;
            var3 = _closure1_slot3;
            var1 = 21;
            var1 = var3[var1];
            var1 = var2.bind(var4)(var1);
            var7 = var1.BottomSheetSectionList;
 857:
            var3 = _closure1_slot18;
            var2 = _closure1_slot17;
            var1 = {};
            var18 = _closure1_slot16;
            var12 = _closure1_slot7;
            var5 = {};
            var19 = var14.inputContainer;
            var5['style'] = var19;
            var20 = _closure1_slot1;
            var22 = _closure1_slot3;
            var19 = 22;
            var19 = var22[var19];
            var20 = var20.bind(var4)(var19);
            var19 = {};
            var26 = _closure1_slot0;
            var24 = var22[var17];
            var24 = var26.bind(var4)(var24);
            var25 = var24.intl;
            var24 = var25.string;
            var22 = var22[var17];
            var22 = var26.bind(var4)(var22);
            var22 = var22.t;
            var22 = var22.TVZdKi;
            var22 = var24.bind(var25)(var22);
            var19['placeholder'] = var22;
            var19['tags'] = var21;
            var21 = function onChangeText(arg1) {
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
                var6 = _closure2_slot8;
                var6 = var6.bind(var1)(var10, var3);
                var4 = _closure1_slot14;
                var4 = var8.bind(var9)(var7, var6, var4);
                var4 = _closure2_slot7;
                var4 = var4.bind(var1)(var5);
                var2 = _closure2_slot5;
                var2 = var2.bind(var1)(var3);
                return var1;
            };
            var19['onChangeText'] = var21;
            var21 = function onRemove(arg1) {
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
            var19['onRemove'] = var21;
            var21 = true;
            var19['autoFocus'] = var21;
            var19 = var18.bind(var4)(var20, var19);
            var5['children'] = var19;
            var12 = var18.bind(var4)(var12, var5);
            var5 = new Array(4);
            var5[0] = var12;
            var12 = null;
            var18 = var12 != var23;
            if(!var18) { _fun0002_ip = 1118; continue _fun0002 }
 1027:
            var20 = _closure1_slot16;
            var19 = _closure1_slot7;
            var18 = {};
            var21 = var14.inputDescContainer;
            var18['style'] = var21;
            var22 = _closure1_slot0;
            var24 = _closure1_slot3;
            var21 = 24;
            var21 = var24[var21];
            var21 = var22.bind(var4)(var21);
            var22 = var21.Text;
            var21 = {'style': null, 'variant': 'text-xs/medium', 'color': 'header-secondary'};
            var24 = var14.inputDescText;
            var21['style'] = var24;
            var21['children'] = var23;
            var21 = var20.bind(var4)(var22, var21);
            var18['children'] = var21;
            var12 = var20.bind(var4)(var19, var18);
 1118:
            var5[1] = var12;
            if(!var8) { _fun0002_ip = 1264; continue _fun0002 }
 1128:
            var19 = _closure1_slot16;
            var18 = _closure1_slot7;
            var12 = {};
            var20 = var14.adminWarning;
            var12['style'] = var20;
            var21 = _closure1_slot1;
            var22 = _closure1_slot3;
            var23 = 25;
            var20 = var22[var23];
            var21 = var21.bind(var4)(var20);
            var20 = {};
            var25 = _closure1_slot0;
            var23 = var22[var23];
            var23 = var25.bind(var4)(var23);
            var23 = var23.HelpMessageTypes;
            var23 = var23.WARNING;
            var20['messageType'] = var23;
            var23 = var22[var17];
            var23 = var25.bind(var4)(var23);
            var24 = var23.intl;
            var23 = var24.string;
            var22 = var22[var17];
            var22 = var25.bind(var4)(var22);
            var22 = var22.t;
            var22 = var22.5f3HIC;
            var22 = var23.bind(var24)(var22);
            var20['children'] = var22;
            var20 = var19.bind(var4)(var21, var20);
            var12['children'] = var20;
            var8 = var19.bind(var4)(var18, var12);
 1264:
            var5[2] = var8;
            var8 = _closure1_slot16;
            if(var6) { _fun0002_ip = 1396; continue _fun0002 }
 1275:
            var6 = {};
            var12 = {};
            var19 = _closure1_slot1;
            var20 = _closure1_slot3;
            var18 = 11;
            var21 = var20[var18];
            var21 = var19.bind(var4)(var21);
            var21 = var21.spacing;
            var21 = var21.PX_16;
            var12['paddingHorizontal'] = var21;
            var18 = var20[var18];
            var18 = var19.bind(var4)(var18);
            var18 = var18.spacing;
            var18 = var18.PX_16;
            var15 = var15.bottom;
            var15 = var18 + var15;
            var12['paddingBottom'] = var15;
            var6['contentContainerStyle'] = var12;
            var12 = function renderItem(arg1) {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                    var1 = arg1;
                    var11 = var1.item;
                    var _closure3_slot0 = var11;
                    var7 = var1.index;
                    var6 = var1.section;
                    var4 = _closure1_slot16;
                    var2 = _closure1_slot1;
                    var3 = _closure1_slot3;
                    var1 = 18;
                    var1 = var3[var1];
                    var3 = undefined;
                    var2 = var2.bind(var3)(var1);
                    var1 = {};
                    var8 = 0;
                    var8 = var8 === var7;
                    if(!var8) { _fun0004_ip = 128; continue _fun0004 }
 64:
                    var12 = var6.title;
                    var15 = _closure1_slot0;
                    var16 = _closure1_slot3;
                    var9 = 19;
                    var13 = var16[var9];
                    var13 = var15.bind(var3)(var13);
                    var14 = var13.intl;
                    var13 = var14.string;
                    var9 = var16[var9];
                    var9 = var15.bind(var3)(var9);
                    var9 = var9.t;
                    var9 = var9.LPJmLy;
                    var9 = var13.bind(var14)(var9);
                    var8 = var12 === var9;
 128:
                    var1['start'] = var8;
                    var6 = var6.data;
                    var8 = var6.length;
                    var6 = 1;
                    var6 = var8 - var6;
                    var6 = var7 === var6;
                    var1['end'] = var6;
                    var6 = _closure2_slot0;
                    var6 = var6.id;
                    var1['guildId'] = var6;
                    var1['item'] = var11;
                    var6 = var11.disabled;
                    var1['disabled'] = var6;
                    var5 = function onPress() {
                        var3 = _closure3_slot0;
                        var2 = function handleUpdatePendingAdditions(arg1) {
                            _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                                var2 = arg1;
                                var _closure5_slot0 = var2;
                                var3 = var2.rowType;
                                var2 = _closure1_slot13;
                                var2 = var2.EMPTY_STATE;
                                if(!(var3 !== var2)) { _fun0005_ip = 51; continue _fun0005 }
 32:
                                var3 = _closure2_slot2;
                                var2 = undefined;
                                var1 = function(arg1) {
                                    _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
                                        var1 = {};
                                        var13 = arg1;
                                        var14 = var1;
                                        var2 = copyDataProperties(var14, var13);
                                        var3 = _closure1_slot21;
                                        var2 = _closure5_slot0;
                                        var9 = undefined;
                                        var2 = var3.bind(var9)(var2);
                                        var3 = var2 in var1;
                                        if(var3) { _fun0006_ip = 399; continue _fun0006 }
 43:
                                        var3 = _closure5_slot0;
                                        var5 = var3.rowType;
                                        var3 = _closure1_slot13;
                                        var3 = var3.ROLE;
                                        if(!(var5 !== var3)) { _fun0006_ip = 293; continue _fun0006 }
 70:
                                        var3 = _closure5_slot0;
                                        var5 = var3.rowType;
                                        var3 = _closure1_slot13;
                                        var3 = var3.ADMINISTRATOR;
                                        if(!(var5 !== var3)) { _fun0006_ip = 293; continue _fun0006 }
 97:
                                        var3 = _closure5_slot0;
                                        var5 = var3.rowType;
                                        var3 = _closure1_slot13;
                                        var3 = var3.MEMBER;
                                        if(!(var5 !== var3)) { _fun0006_ip = 150; continue _fun0006 }
 121:
                                        var3 = _closure5_slot0;
                                        var7 = var3.rowType;
                                        var3 = _closure1_slot13;
                                        var3 = var3.OWNER;
                                        var5 = undefined;
                                        if(!(var7 === var3)) { _fun0006_ip = 372; continue _fun0006 }
 150:
                                        var8 = _closure1_slot12;
                                        var7 = var8.getUser;
                                        var3 = _closure5_slot0;
                                        var3 = var3.id;
                                        var11 = var7.bind(var8)(var3);
                                        var3 = null;
                                        var3 = var3 != var11;
                                        var5 = undefined;
                                        if(!var3) { _fun0006_ip = 372; continue _fun0006 }
 188:
                                        var3 = {};
                                        var7 = _closure5_slot0;
                                        var7 = var7.name;
                                        var3['text'] = var7;
                                        var10 = _closure1_slot16;
                                        var8 = _closure1_slot1;
                                        var12 = _closure1_slot3;
                                        var7 = 17;
                                        var7 = var12[var7];
                                        var8 = var8.bind(var9)(var7);
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
                                        _fun0006_ip = 372; continue _fun0006;
 293:
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
 372:
                                        var3 = null;
                                        if(!(var3 != var5)) { _fun0006_ip = 403; continue _fun0006 }
 378:
                                        var3 = {};
                                        var3['display'] = var5;
                                        var4 = _closure5_slot0;
                                        var3['row'] = var4;
                                        var1[var2] = var3;
                                        _fun0006_ip = 403; continue _fun0006;
 399:
                                        var2 = delete var1[var2];
 403:
                                        return var1;
                                    }
                                };
                                var1 = var3.bind(var2)(var1);
 51:
                                var1 = undefined;
                                return var1;
                            }
                        };
                        var1 = undefined;
                        var2 = var2.bind(var1)(var3);
                        return var1;
                    };
                    var1['onPress'] = var5;
                    var6 = var11.disabled;
                    var5 = null;
                    if(!var6) { _fun0004_ip = 262; continue _fun0004 }
 205:
                    var13 = _closure1_slot0;
                    var14 = _closure1_slot3;
                    var6 = 19;
                    var7 = var14[var6];
                    var7 = var13.bind(var3)(var7);
                    var12 = var7.intl;
                    var7 = var12.string;
                    var6 = var14[var6];
                    var6 = var13.bind(var3)(var6);
                    var6 = var6.t;
                    var6 = var6.MVVOCg;
                    var5 = var7.bind(var12)(var6);
 262:
                    var1['subLabel'] = var5;
                    var6 = var11.disabled;
                    var5 = null;
                    if(var6) { _fun0004_ip = 359; continue _fun0004 }
 277:
                    var7 = var11.rowType;
                    var6 = _closure1_slot13;
                    var6 = var6.EMPTY_STATE;
                    var5 = null;
                    if(!(var7 !== var6)) { _fun0004_ip = 359; continue _fun0004 }
 299:
                    var8 = _closure1_slot16;
                    var7 = _closure1_slot0;
                    var12 = _closure1_slot3;
                    var6 = 20;
                    var6 = var12[var6];
                    var6 = var7.bind(var3)(var6);
                    var7 = var6.FormCheckbox;
                    var6 = {};
                    var10 = _closure1_slot21;
                    var10 = var10.bind(var3)(var11);
                    var9 = _closure2_slot1;
                    var9 = var10 in var9;
                    var6['checked'] = var9;
                    var5 = var8.bind(var3)(var7, var6);
 359:
                    var1['trailing'] = var5;
                    var1 = var4.bind(var3)(var2, var1);
                    return var1;
                }
            };
            var6['renderItem'] = var12;
            var11 = function renderSectionHeader(arg1) {
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
                    var1 = arg1;
                    var1 = var1.section;
                    var6 = var1.title;
                    var1 = var1.data;
                    var2 = var1.length;
                    var1 = 0;
                    var2 = var2 > var1;
                    var1 = null;
                    if(!var2) { _fun0007_ip = 111; continue _fun0007 }
 34:
                    var5 = _closure1_slot16;
                    var3 = _closure1_slot0;
                    var4 = _closure1_slot3;
                    var2 = 24;
                    var2 = var4[var2];
                    var4 = undefined;
                    var2 = var3.bind(var4)(var2);
                    var3 = var2.Text;
                    var2 = {'style': null, 'maxFontSizeMultiplier': 2, 'accessibilityRole': 'header', 'variant': 'text-sm/semibold', 'color': 'interactive-normal'};
                    var7 = _closure2_slot3;
                    var7 = var7.sectionRowWrapper;
                    var2['style'] = var7;
                    var2['children'] = var6;
                    var1 = var5.bind(var4)(var3, var2);
 111:
                    return var1;
                }
            };
            var6['renderSectionHeader'] = var11;
            var6['sections'] = var10;
            var10 = 'always';
            var6['keyboardShouldPersistTaps'] = var10;
            var6 = var8.bind(var4)(var7, var6);
            _fun0002_ip = 1539; continue _fun0002;
 1396:
            var7 = {};
            var11 = _closure1_slot1;
            var12 = _closure1_slot3;
            var10 = 26;
            var10 = var12[var10];
            var11 = var11.bind(var4)(var10);
            var10 = {};
            var13 = _closure1_slot0;
            var15 = 27;
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
            var13 = var12.ErpIY2;
            var12 = {};
            var12['query'] = var16;
            var12 = var14.bind(var15)(var13, var12);
            var10['body'] = var12;
            var10 = var8.bind(var4)(var11, var10);
            var7['children'] = var10;
            var6 = var8.bind(var4)(var9, var7);
 1539:
            var5[3] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();