// app/modules/channel_permissions/native/action_sheets/AddMembersActionSheet.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var6 = native2;
    var12 = native3;
    var8 = native4;
    var3 = native6;
    var7 = native7;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var12;
    var _closure1_slot2 = var8;
    var _closure1_slot3 = var7;
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
    var _closure1_slot22 = var1;
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
    var _closure1_slot23 = var1;
    var2 = function AddMembersBody(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var5 = arg1;
            var22 = var5.channel;
            var18 = var5.guild;
            var _closure2_slot0 = var18;
            var19 = var5.pendingAdditions;
            var _closure2_slot1 = var19;
            var1 = var5.setPendingAdditions;
            var _closure2_slot2 = var1;
            var16 = var5.permission;
            var4 = undefined;
            if(!(var16 === var4)) { _fun0002_ip = 80; continue _fun0002 }
 51:
            var2 = _closure1_slot2;
            var3 = _closure1_slot3;
            var1 = 15;
            var1 = var3[var1];
            var1 = var2.bind(var4)(var1);
            var16 = var1.NONE;
 80:
            var2 = var5.inActionSheet;
            var3 = {'channel': 0, 'guild': 0, 'pendingAdditions': 0, 'setPendingAdditions': 0, 'permission': 0, 'inActionSheet': 0};
            var35 = null;
            var36 = var3;
            var1 = silentSetPrototypeOf(var36, var35);
            var7 = 0;
            var36 = {};
            var35 = var5;
            var34 = var3;
            var10 = copyDataProperties(var36, var35, var34);
            var _closure2_slot3 = var4;
            var _closure2_slot4 = var4;
            var _closure2_slot5 = var4;
            var _closure2_slot6 = var4;
            var _closure2_slot7 = var4;
            var _closure2_slot8 = var4;
            var _closure2_slot9 = var4;
            var _closure2_slot10 = var4;
            var _closure2_slot11 = var4;
            var1 = function getQuery(arg1, arg2) {
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
            var _closure2_slot12 = var1;
            var8 = function filterByQuery(arg1) {
                var3 = _closure2_slot12;
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
                var2 = 17;
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
            var1 = _closure1_slot21;
            var15 = var1.bind(var4)();
            _closure2_slot3 = var15;
            var5 = _closure1_slot7;
            var3 = var5.useState;
            var1 = false;
            var3 = var3.bind(var5)(var1);
            var1 = _closure1_slot6;
            var9 = 2;
            var5 = var1.bind(var4)(var3, var9);
            var1 = var5[var7];
            _closure2_slot4 = var1;
            var3 = 1;
            var5 = var5[var3];
            _closure2_slot5 = var5;
            var6 = _closure1_slot7;
            var5 = var6.useState;
            var20 = '';
            var6 = var5.bind(var6)(var20);
            var5 = _closure1_slot6;
            var5 = var5.bind(var4)(var6, var9);
            var17 = var5[var7];
            _closure2_slot6 = var17;
            var5 = var5[var3];
            _closure2_slot7 = var5;
            var6 = _closure1_slot1;
            var13 = _closure1_slot3;
            var5 = 16;
            var5 = var13[var5];
            var6 = var6.bind(var4)(var5);
            var5 = {};
            var12 = !var2;
            var5['isKeyboardAwareOnAndroid'] = var12;
            var5 = var6.bind(var4)(var5);
            var12 = var5.insets;
            var6 = _closure1_slot2;
            var5 = 15;
            var5 = var13[var5];
            var21 = var6.bind(var4)(var5);
            var6 = var21.canEveryoneRole;
            var5 = _closure1_slot16;
            var5 = var5.ADMINISTRATOR;
            var21 = var6.bind(var21)(var5, var18);
            var6 = _closure1_slot0;
            var5 = 18;
            var23 = var13[var5];
            var26 = var6.bind(var4)(var23);
            var25 = var26.useStateFromStores;
            var23 = _closure1_slot11;
            var24 = new Array(1);
            var24[0] = var23;
            var23 = function() {
                var3 = _closure1_slot11;
                var2 = var3.getRoles;
                var1 = _closure2_slot0;
                var1 = var1.id;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var26 = var25.bind(var26)(var24, var23);
            var5 = var13[var5];
            var23 = var6.bind(var4)(var5);
            var13 = var23.useStateFromStoresArray;
            var5 = _closure1_slot10;
            var6 = new Array(1);
            var6[0] = var5;
            var5 = function() {
                var3 = _closure1_slot10;
                var2 = var3.getMemberIds;
                var1 = _closure2_slot0;
                var1 = var1.id;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var6 = var13.bind(var23)(var6, var5);
            if(var1) { _fun0002_ip = 588; continue _fun0002 }
 447:
            var5 = _closure1_slot2;
            var1 = _closure1_slot3;
            var24 = 19;
            var1 = var1[var24];
            var5 = var5.bind(var4)(var1);
            var1 = var5.getRolesRows;
            var37 = var5;
            var36 = var18;
            var35 = var26;
            var34 = var22;
            var33 = var16;
            var32 = var8;
            var1 = var37[var1](var36, var35, var34, var33, var32, var31);
            var5 = var1.length;
            var13 = var1;
            if(!(var7 === var5)) { _fun0002_ip = 592; continue _fun0002 }
 507:
            var5 = var17.trim;
            var5 = var5.bind(var17)();
            var5 = var20 !== var5;
            if(var5) { _fun0002_ip = 553; continue _fun0002 }
 524:
            var25 = _closure1_slot2;
            var23 = _closure1_slot3;
            var23 = var23[var24];
            var25 = var25.bind(var4)(var23);
            var23 = var25.hasCustomRoles;
            var5 = var23.bind(var25)(var18, var26);
 553:
            if(var5) { _fun0002_ip = 583; continue _fun0002 }
 556:
            var23 = _closure1_slot2;
            var5 = _closure1_slot3;
            var5 = var5[var24];
            var23 = var23.bind(var4)(var5);
            var5 = var23.getNoRolesRow;
            var1 = var5.bind(var23)();
 583:
            var13 = var1;
            _fun0002_ip = 592; continue _fun0002;
 588:
            var13 = new Array(0);
 592:
            var5 = _closure1_slot2;
            var23 = _closure1_slot3;
            var1 = 19;
            var1 = var23[var1];
            var5 = var5.bind(var4)(var1);
            var1 = var5.getMembersRows;
            var37 = var5;
            var36 = var6;
            var35 = var22;
            var34 = var18;
            var33 = var16;
            var32 = var8;
            var6 = var37[var1](var36, var35, var34, var33, var32, var31);
            var5 = new Array(0);
            var1 = var13.length;
            if(!(!(var1 > var7))) { _fun0002_ip = 659; continue _fun0002 }
 653:
            var1 = new Array(0);
            _fun0002_ip = 725; continue _fun0002;
 659:
            var22 = _closure1_slot0;
            var23 = _closure1_slot3;
            var8 = 24;
            var16 = var23[var8];
            var16 = var22.bind(var4)(var16);
            var18 = var16.intl;
            var16 = var18.string;
            var8 = var23[var8];
            var8 = var22.bind(var4)(var8);
            var8 = var8.t;
            var8 = var8.LPJmLy;
            var16 = var16.bind(var18)(var8);
            var8 = new Array(1);
            var8[0] = var16;
            var1 = var8;
 725:
            var16 = new Array(0);
            var36 = var16;
            var35 = var1;
            var34 = 0;
            var34 = arraySpread(var36, var35, var34);
            var36 = var16;
            var35 = var13;
            var8 = arraySpread(var36, var35, var34);
            var1 = var6.length;
            if(!(!(var1 > var7))) { _fun0002_ip = 766; continue _fun0002 }
 760:
            var1 = new Array(0);
            _fun0002_ip = 832; continue _fun0002;
 766:
            var24 = _closure1_slot0;
            var25 = _closure1_slot3;
            var18 = 24;
            var22 = var25[var18];
            var22 = var24.bind(var4)(var22);
            var23 = var22.intl;
            var22 = var23.string;
            var18 = var25[var18];
            var18 = var24.bind(var4)(var18);
            var18 = var18.t;
            var18 = var18.9Oq93t;
            var22 = var22.bind(var23)(var18);
            var18 = new Array(1);
            var18[0] = var22;
            var1 = var18;
 832:
            var36 = var16;
            var35 = var1;
            var34 = var8;
            var34 = arraySpread(var36, var35, var34);
            var36 = var16;
            var35 = var6;
            var1 = arraySpread(var36, var35, var34);
            var1 = var13.length;
            var1 = var1 > var7;
            var8 = 0;
            if(!var1) { _fun0002_ip = 872; continue _fun0002 }
 869:
            var8 = var3;
 872:
            _closure2_slot8 = var8;
            var1 = var13.length;
            var1 = var8 + var1;
            var1 = var1 - var3;
            _closure2_slot9 = var1;
            var18 = var6.length;
            var8 = var1;
            if(!(var18 > var7)) { _fun0002_ip = 909; continue _fun0002 }
 905:
            var8 = var1 + var9;
 909:
            _closure2_slot10 = var8;
            var1 = var6.length;
            var1 = var8 + var1;
            var1 = var1 - var3;
            _closure2_slot11 = var1;
            var3 = var5.push;
            var1 = {};
            var23 = _closure1_slot0;
            var8 = _closure1_slot3;
            var18 = 24;
            var9 = var8[var18];
            var9 = var23.bind(var4)(var9);
            var24 = var9.intl;
            var22 = var24.string;
            var9 = var8[var18];
            var9 = var23.bind(var4)(var9);
            var9 = var9.t;
            var9 = var9.LPJmLy;
            var9 = var22.bind(var24)(var9);
            var1['title'] = var9;
            var1['data'] = var13;
            var1 = var3.bind(var5)(var1);
            var3 = var5.push;
            var1 = {};
            var9 = var8[var18];
            var9 = var23.bind(var4)(var9);
            var22 = var9.intl;
            var9 = var22.string;
            var8 = var8[var18];
            var8 = var23.bind(var4)(var8);
            var8 = var8.t;
            var8 = var8.9Oq93t;
            var8 = var9.bind(var22)(var8);
            var1['title'] = var8;
            var1['data'] = var6;
            var1 = var3.bind(var5)(var1);
            var1 = global;
            var3 = var1.Object;
            var1 = var3.values;
            var5 = var1.bind(var3)(var19);
            var3 = var5.map;
            var1 = function(arg1) {
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
            var27 = var3.bind(var5)(var1);
            if(var2) { _fun0002_ip = 1111; continue _fun0002 }
 1105:
            var9 = _closure1_slot9;
            _fun0002_ip = 1137; continue _fun0002;
 1111:
            var3 = _closure1_slot0;
            var5 = _closure1_slot3;
            var1 = 25;
            var1 = var5[var1];
            var1 = var3.bind(var4)(var1);
            var9 = var1.BottomSheetScrollView;
 1137:
            var3 = _closure1_slot0;
            var5 = _closure1_slot3;
            var1 = 26;
            var1 = var5[var1];
            var1 = var3.bind(var4)(var1);
            if(var2) { _fun0002_ip = 1168; continue _fun0002 }
 1160:
            var8 = var1.FlashList;
            _fun0002_ip = 1174; continue _fun0002;
 1168:
            var8 = var1.BottomSheetFlashList;
 1174:
            var3 = _closure1_slot19;
            var2 = _closure1_slot18;
            var1 = {};
            var23 = _closure1_slot17;
            var22 = _closure1_slot8;
            var5 = {};
            var24 = var15.inputContainer;
            var5['style'] = var24;
            var26 = _closure1_slot17;
            var25 = _closure1_slot1;
            var28 = _closure1_slot3;
            var24 = 27;
            var24 = var28[var24];
            var25 = var25.bind(var4)(var24);
            var24 = {};
            var31 = _closure1_slot0;
            var29 = var28[var18];
            var29 = var31.bind(var4)(var29);
            var30 = var29.intl;
            var29 = var30.string;
            var28 = var28[var18];
            var28 = var31.bind(var4)(var28);
            var28 = var28.t;
            var28 = var28.TVZdKi;
            var28 = var29.bind(var30)(var28);
            var24['placeholder'] = var28;
            var24['tags'] = var27;
            var27 = function onChangeText(arg1) {
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
                var1 = 28;
                var2 = var2[var1];
                var1 = undefined;
                var9 = var6.bind(var1)(var2);
                var8 = var9.requestMembers;
                var6 = _closure2_slot0;
                var7 = var6.id;
                var6 = _closure2_slot12;
                var6 = var6.bind(var1)(var10, var3);
                var4 = _closure1_slot15;
                var4 = var8.bind(var9)(var7, var6, var4);
                var4 = _closure2_slot7;
                var4 = var4.bind(var1)(var5);
                var2 = _closure2_slot5;
                var2 = var2.bind(var1)(var3);
                return var1;
            };
            var24['onChangeText'] = var27;
            var27 = function onRemove(arg1) {
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
                    var3 = _closure1_slot5;
                    var5 = new Array(1);
                    var5[0] = var2;
                    var2 = var5.map;
                    var1 = _closure1_slot22;
                    var2 = var2.bind(var5)(var1);
                    var1 = undefined;
                    var1 = var3.bind(var1)(var4, var2);
                    return var1;
                };
                var2 = var3.bind(var1)(var2);
                return var1;
            };
            var24['onRemove'] = var27;
            var24 = var26.bind(var4)(var25, var24);
            var5['children'] = var24;
            var22 = var23.bind(var4)(var22, var5);
            var5 = new Array(3);
            var5[0] = var22;
            if(!var21) { _fun0002_ip = 1478; continue _fun0002 }
 1338:
            var24 = _closure1_slot17;
            var23 = _closure1_slot8;
            var22 = {};
            var25 = var15.adminWarning;
            var22['style'] = var25;
            var27 = _closure1_slot17;
            var26 = _closure1_slot1;
            var28 = _closure1_slot3;
            var29 = 29;
            var25 = var28[var29];
            var26 = var26.bind(var4)(var25);
            var25 = {};
            var31 = _closure1_slot0;
            var29 = var28[var29];
            var29 = var31.bind(var4)(var29);
            var29 = var29.HelpMessageTypes;
            var29 = var29.WARNING;
            var25['messageType'] = var29;
            var29 = var28[var18];
            var29 = var31.bind(var4)(var29);
            var30 = var29.intl;
            var29 = var30.string;
            var28 = var28[var18];
            var28 = var31.bind(var4)(var28);
            var28 = var28.t;
            var28 = var28.5f3HIC;
            var28 = var29.bind(var30)(var28);
            var25['children'] = var28;
            var25 = var27.bind(var4)(var26, var25);
            var22['children'] = var25;
            var21 = var24.bind(var4)(var23, var22);
 1478:
            var5[1] = var21;
            if(!(var20 !== var17)) { _fun0002_ip = 1507; continue _fun0002 }
 1486:
            var13 = var13.length;
            if(!(var7 === var13)) { _fun0002_ip = 1507; continue _fun0002 }
 1495:
            var6 = var6.length;
            if(!(var7 !== var6)) { _fun0002_ip = 1670; continue _fun0002 }
 1507:
            var7 = _closure1_slot17;
            var6 = {};
            var36 = var6;
            var35 = var10;
            var13 = copyDataProperties(var36, var35);
            var20 = _closure1_slot20;
            var13 = 'estimatedItemSize';
            var6[var13] = var20;
            var13 = 'extraData';
            var6[var13] = var19;
            var13 = 'data';
            var6[var13] = var16;
            var13 = {};
            var19 = _closure1_slot1;
            var20 = _closure1_slot3;
            var16 = 14;
            var21 = var20[var16];
            var21 = var19.bind(var4)(var21);
            var21 = var21.spacing;
            var21 = var21.PX_16;
            var13['paddingHorizontal'] = var21;
            var16 = var20[var16];
            var16 = var19.bind(var4)(var16);
            var16 = var16.spacing;
            var16 = var16.PX_16;
            var12 = var12.bottom;
            var12 = var16 + var12;
            var13['paddingBottom'] = var12;
            var12 = 'contentContainerStyle';
            var6[var12] = var13;
            var12 = function renderRow(arg1) {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                    var1 = arg1;
                    var6 = var1.item;
                    var _closure3_slot0 = var6;
                    var11 = var1.index;
                    var2 = 'string';
                    var1 = typeof var6;
                    if(!(var2 !== var1)) { _fun0004_ip = 212; continue _fun0004 }
 33:
                    var4 = _closure1_slot17;
                    var2 = _closure1_slot1;
                    var3 = _closure1_slot3;
                    var1 = 22;
                    var1 = var3[var1];
                    var3 = undefined;
                    var2 = var2.bind(var3)(var1);
                    var1 = {};
                    var7 = _closure2_slot8;
                    var7 = var7 === var11;
                    if(var7) { _fun0004_ip = 86; continue _fun0004 }
 78:
                    var8 = _closure2_slot10;
                    var7 = var8 === var11;
 86:
                    var1['start'] = var7;
                    var7 = _closure2_slot9;
                    var7 = var7 === var11;
                    if(var7) { _fun0004_ip = 109; continue _fun0004 }
 101:
                    var8 = _closure2_slot11;
                    var7 = var8 === var11;
 109:
                    var1['end'] = var7;
                    var1['item'] = var6;
                    var7 = _closure2_slot0;
                    var7 = var7.id;
                    var1['guildId'] = var7;
                    var5 = function onPress() {
                        var3 = _closure3_slot0;
                        var2 = function updatePendingAdditions(arg1) {
                            _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                                var2 = arg1;
                                var _closure5_slot0 = var2;
                                var3 = var2.rowType;
                                var2 = _closure1_slot14;
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
                                        var3 = _closure1_slot23;
                                        var2 = _closure5_slot0;
                                        var9 = undefined;
                                        var2 = var3.bind(var9)(var2);
                                        var3 = var2 in var1;
                                        if(var3) { _fun0006_ip = 399; continue _fun0006 }
 43:
                                        var3 = _closure5_slot0;
                                        var5 = var3.rowType;
                                        var3 = _closure1_slot14;
                                        var3 = var3.ROLE;
                                        if(!(var5 !== var3)) { _fun0006_ip = 293; continue _fun0006 }
 70:
                                        var3 = _closure5_slot0;
                                        var5 = var3.rowType;
                                        var3 = _closure1_slot14;
                                        var3 = var3.ADMINISTRATOR;
                                        if(!(var5 !== var3)) { _fun0006_ip = 293; continue _fun0006 }
 97:
                                        var3 = _closure5_slot0;
                                        var5 = var3.rowType;
                                        var3 = _closure1_slot14;
                                        var3 = var3.MEMBER;
                                        if(!(var5 !== var3)) { _fun0006_ip = 150; continue _fun0006 }
 121:
                                        var3 = _closure5_slot0;
                                        var7 = var3.rowType;
                                        var3 = _closure1_slot14;
                                        var3 = var3.OWNER;
                                        var5 = undefined;
                                        if(!(var7 === var3)) { _fun0006_ip = 372; continue _fun0006 }
 150:
                                        var8 = _closure1_slot13;
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
                                        var10 = _closure1_slot17;
                                        var8 = _closure1_slot1;
                                        var12 = _closure1_slot3;
                                        var7 = 20;
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
                                        var8 = _closure1_slot17;
                                        var7 = _closure1_slot8;
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
                    var8 = _closure1_slot17;
                    var7 = _closure1_slot0;
                    var11 = _closure1_slot3;
                    var5 = 23;
                    var5 = var11[var5];
                    var5 = var7.bind(var3)(var5);
                    var7 = var5.FormCheckbox;
                    var5 = {};
                    var10 = _closure1_slot23;
                    var10 = var10.bind(var3)(var6);
                    var9 = _closure2_slot1;
                    var9 = var10 in var9;
                    var5['checked'] = var9;
                    var5 = var8.bind(var3)(var7, var5);
                    var1['trailing'] = var5;
                    var1 = var4.bind(var3)(var2, var1);
                    _fun0004_ip = 289; continue _fun0004;
 212:
                    var5 = _closure1_slot17;
                    var3 = _closure1_slot0;
                    var4 = _closure1_slot3;
                    var2 = 21;
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
 289:
                    return var1;
                }
            };
            var11 = 'renderItem';
            var6[var11] = var12;
            var12 = 'handled';
            var11 = 'keyboardShouldPersistTaps';
            var6[var11] = var12;
            var6 = var7.bind(var4)(var8, var6);
            _fun0002_ip = 1836; continue _fun0002;
 1670:
            var8 = _closure1_slot17;
            var7 = {};
            var36 = var7;
            var35 = var10;
            var10 = copyDataProperties(var36, var35);
            var12 = _closure1_slot17;
            var11 = _closure1_slot1;
            var13 = _closure1_slot3;
            var10 = 30;
            var10 = var13[var10];
            var11 = var11.bind(var4)(var10);
            var10 = {};
            var14 = _closure1_slot0;
            var16 = 31;
            var16 = var13[var16];
            var16 = var14.bind(var4)(var16);
            var16 = var16.NoResultsAlt;
            var10['Illustration'] = var16;
            var16 = var15.emptyState;
            var10['style'] = var16;
            var15 = var15.emptyStateText;
            var10['bodyStyle'] = var15;
            var15 = var13[var18];
            var15 = var14.bind(var4)(var15);
            var16 = var15.intl;
            var15 = var16.format;
            var13 = var13[var18];
            var13 = var14.bind(var4)(var13);
            var13 = var13.t;
            var14 = var13.ErpIY2;
            var13 = {};
            var13['query'] = var17;
            var13 = var15.bind(var16)(var14, var13);
            var10['body'] = var13;
            var11 = var12.bind(var4)(var11, var10);
            var10 = 'children';
            var7[var10] = var11;
            var6 = var8.bind(var4)(var9, var7);
 1836:
            var5[2] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot24 = var2;
    var1 = global;
    var10 = var1.Object;
    var9 = var10.defineProperty;
    var5 = {};
    var1 = true;
    var5['value'] = var1;
    var1 = '__esModule';
    var1 = var9.bind(var10)(var3, var1, var5);
    var1 = 0;
    var5 = var7[var1];
    var1 = undefined;
    var5 = var12.bind(var1)(var5);
    var _closure1_slot4 = var5;
    var11 = 1;
    var5 = var7[var11];
    var5 = var12.bind(var1)(var5);
    var _closure1_slot5 = var5;
    var5 = 2;
    var5 = var7[var5];
    var5 = var12.bind(var1)(var5);
    var _closure1_slot6 = var5;
    var5 = 3;
    var5 = var7[var5];
    var5 = var8.bind(var1)(var5);
    var _closure1_slot7 = var5;
    var5 = 4;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var8 = var5.View;
    var _closure1_slot8 = var8;
    var5 = var5.ScrollView;
    var _closure1_slot9 = var5;
    var5 = 5;
    var5 = var7[var5];
    var5 = var12.bind(var1)(var5);
    var _closure1_slot10 = var5;
    var5 = 6;
    var5 = var7[var5];
    var5 = var12.bind(var1)(var5);
    var _closure1_slot11 = var5;
    var5 = 7;
    var5 = var7[var5];
    var5 = var12.bind(var1)(var5);
    var _closure1_slot12 = var5;
    var5 = 8;
    var5 = var7[var5];
    var5 = var12.bind(var1)(var5);
    var _closure1_slot13 = var5;
    var5 = 9;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var8 = var5.RowType;
    var _closure1_slot14 = var8;
    var5 = var5.MEMBER_REQUEST_COUNT;
    var _closure1_slot15 = var5;
    var5 = 10;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var8 = var5.FORM_ROW_VERTICAL_PADDING;
    var5 = 11;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var5 = var5.Permissions;
    var _closure1_slot16 = var5;
    var5 = 12;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var9 = var5.jsx;
    var _closure1_slot17 = var9;
    var9 = var5.Fragment;
    var _closure1_slot18 = var9;
    var5 = var5.jsxs;
    var _closure1_slot19 = var5;
    var5 = 30;
    var5 = var8 + var5;
    var _closure1_slot20 = var5;
    var5 = 13;
    var5 = var7[var5];
    var9 = var6.bind(var1)(var5);
    var8 = var9.createStyles;
    var5 = {};
    var10 = {};
    var10['flex'] = var11;
    var5['container'] = var10;
    var10 = {};
    var11 = 'center';
    var10['alignItems'] = var11;
    var11 = 14;
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
    var10 = {'height': 12, 'width': 12, 'borderRadius': 6};
    var5['tagRoleColor'] = var10;
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
    var13 = var13.spacing;
    var13 = var13.PX_16;
    var10['paddingTop'] = var13;
    var5['emptyState'] = var10;
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
    var11 = var11.PX_12;
    var10['paddingVertical'] = var11;
    var5['sectionRowWrapper'] = var10;
    var10 = {'marginHorizontal': 16, 'marginVertical': 8};
    var5['adminWarning'] = var10;
    var5 = var8.bind(var9)(var5);
    var _closure1_slot21 = var5;
    var5 = 40;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/channel_permissions/native/action_sheets/AddMembersActionSheet.tsx';
    var5 = var6.bind(var7)(var5);
    var4 = function AddMembersActionSheet(arg1) {
        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
            var1 = arg1;
            var15 = var1.channel;
            var _closure2_slot0 = var15;
            var11 = var1.canSkip;
            var5 = undefined;
            var _closure2_slot1 = var5;
            var1 = function _handleAddPressed() {
                var4 = undefined;
                var1 = undefined;
                var3 = _closure1_slot4;
                var2 = function* () {
                    var1 = function* anon_0_() {
                        _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
 0:
                            StartGenerator();
                            ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                            if(var3) { _fun0008_ip = 207; continue _fun0008 }
 12:
                            var3 = new Array(0);
                            var2 = var3;
                            var _closure5_slot0 = var3;
                            var3 = 0;
                            var _closure5_slot1 = var3;
                            var _closure5_slot2 = var3;
                            var3 = global;
                            var7 = var3.Object;
                            var5 = var7.values;
                            var3 = _closure2_slot1;
                            var7 = var5.bind(var7)(var3);
                            var5 = var7.forEach;
                            var3 = function(arg1) {
                                _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
 0:
                                    var1 = arg1;
                                    var1 = var1.row;
                                    var3 = var1.id;
                                    var2 = null;
                                    var2 = var2 != var3;
                                    if(!var2) { _fun0009_ip = 36; continue _fun0009 }
 23:
                                    var4 = var1.id;
                                    var3 = '';
                                    var2 = var3 !== var4;
 36:
                                    if(!var2) { _fun0009_ip = 248; continue _fun0009 }
 42:
                                    var3 = var1.rowType;
                                    var2 = _closure1_slot14;
                                    var2 = var2.ROLE;
                                    if(!(var3 !== var2)) { _fun0009_ip = 169; continue _fun0009 }
 65:
                                    var3 = var1.rowType;
                                    var2 = _closure1_slot14;
                                    var2 = var2.MEMBER;
                                    if(!(var3 === var2)) { _fun0009_ip = 248; continue _fun0009 }
 88:
                                    var3 = _closure5_slot1;
                                    var3 = var3 + 1;
                                    _closure5_slot1 = var3;
                                    var5 = _closure5_slot0;
                                    var3 = var5.push;
                                    var7 = _closure1_slot0;
                                    var6 = _closure1_slot3;
                                    var2 = 33;
                                    var6 = var6[var2];
                                    var2 = undefined;
                                    var8 = var7.bind(var2)(var6);
                                    var7 = var8.permissionOverwriteForUser;
                                    var6 = var1.id;
                                    var2 = _closure2_slot0;
                                    var2 = var2.type;
                                    var2 = var7.bind(var8)(var6, var2);
                                    var2 = var3.bind(var5)(var2);
                                    _fun0009_ip = 248; continue _fun0009;
 169:
                                    var3 = _closure5_slot2;
                                    var3 = var3 + 1;
                                    _closure5_slot2 = var3;
                                    var3 = _closure5_slot0;
                                    var2 = var3.push;
                                    var6 = _closure1_slot0;
                                    var5 = _closure1_slot3;
                                    var4 = 33;
                                    var5 = var5[var4];
                                    var4 = undefined;
                                    var6 = var6.bind(var4)(var5);
                                    var5 = var6.permissionOverwriteForRole;
                                    var4 = var1.id;
                                    var1 = _closure2_slot0;
                                    var1 = var1.type;
                                    var1 = var5.bind(var6)(var4, var1);
                                    var1 = var2.bind(var3)(var1);
 248:
                                    var1 = undefined;
                                    return var1;
                                }
                            };
                            var3 = var5.bind(var7)(var3);
 73: // try_start_0
                            var8 = _closure1_slot0;
                            var7 = _closure1_slot3;
                            var5 = 34;
                            var7 = var7[var5];
                            var5 = undefined;
                            var8 = var8.bind(var5)(var7);
                            var7 = var8.savePermissionUpdates;
                            var6 = _closure2_slot0;
                            var6 = var6.id;
                            var2 = var7.bind(var8)(var6, var2);
                            SaveGenerator(address=123);
 121:
                            return var2;
 123:
                            ResumeGenerator(result_out_reg=1, return_bool_out_reg=5);
                            if(var6) { _fun0008_ip = 197; continue _fun0008 }
 129:
                            var8 = _closure1_slot0;
                            var6 = _closure1_slot3;
                            var7 = 35;
                            var7 = var6[var7];
                            var9 = var8.bind(var5)(var7);
                            var8 = var9.memberOrRoleAddedToast;
                            var7 = _closure5_slot2;
                            var4 = _closure5_slot1;
                            var4 = var8.bind(var9)(var7, var4);
                            var4 = _closure1_slot1;
                            var3 = 36;
                            var3 = var6[var3];
                            var4 = var4.bind(var5)(var3);
                            var3 = var4.hideActionSheet;
                            var3 = var3.bind(var4)();
 195: // try_end0
                            _fun0008_ip = 202; continue _fun0008;
 197:
                            return var2;
 200: // catch_target0
                            CatchBlockStart(arg_register=1);
 202:
                            var2 = undefined;
                            return var2;
 207:
                            return var1;
                        }
                    };
                    return var1;
                };
                var4 = var3.bind(var4)(var2);
                _closure2_slot2 = var4;
                var3 = var4.apply;
                var1 = arguments;
                var2 = var1;
                var1 = this;
                var1 = var3.bind(var4)(var1, var2);
                return var1;
            };
            var _closure2_slot2 = var1;
            var1 = _closure1_slot21;
            var10 = var1.bind(var5)();
            var3 = _closure1_slot7;
            var2 = var3.useState;
            var1 = {};
            var3 = var2.bind(var3)(var1);
            var2 = _closure1_slot6;
            var1 = 2;
            var2 = var2.bind(var5)(var3, var1);
            var3 = 0;
            var14 = var2[var3];
            _closure2_slot1 = var14;
            var1 = 1;
            var13 = var2[var1];
            var2 = _closure1_slot0;
            var4 = _closure1_slot3;
            var1 = 18;
            var1 = var4[var1];
            var7 = var2.bind(var5)(var1);
            var6 = var7.useStateFromStores;
            var1 = _closure1_slot12;
            var2 = new Array(1);
            var2[0] = var1;
            var1 = function() {
                _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
 0:
                    var3 = _closure1_slot12;
                    var2 = var3.getGuild;
                    var5 = _closure2_slot0;
                    var1 = null;
                    var5 = var1 == var5;
                    var1 = undefined;
                    if(var5) { _fun0010_ip = 44; continue _fun0010 }
 30:
                    var5 = _closure2_slot0;
                    var4 = var5.getGuildId;
                    var1 = var4.bind(var5)();
 44:
                    var1 = var2.bind(var3)(var1);
                    return var1;
                }
            };
            var16 = var6.bind(var7)(var2, var1);
            var2 = _closure1_slot1;
            var1 = 32;
            var1 = var4[var1];
            var1 = var2.bind(var5)(var1);
            var12 = true;
            var2 = var1.bind(var5)(var15, var12);
            var1 = null;
            var4 = var1 != var2;
            var17 = '';
            if(!var4) { _fun0007_ip = 180; continue _fun0007 }
 177:
            var17 = var2;
 180:
            if(!(var1 != var16)) { _fun0007_ip = 658; continue _fun0007 }
 187:
            var2 = global;
            var4 = var2.Object;
            var2 = var4.keys;
            var2 = var2.bind(var4)(var14);
            var2 = var2.length;
            var19 = var3 === var2;
            var4 = _closure1_slot17;
            var21 = _closure1_slot0;
            var22 = _closure1_slot3;
            var2 = 37;
            var2 = var22[var2];
            var2 = var21.bind(var5)(var2);
            var3 = var2.BottomSheet;
            var2 = {'scrollable': true, 'header': null, 'startExpanded': true};
            var8 = _closure1_slot17;
            var6 = 38;
            var6 = var22[var6];
            var6 = var21.bind(var5)(var6);
            var7 = var6.BottomSheetTitleHeader;
            var6 = {};
            var25 = 24;
            var18 = var22[var25];
            var18 = var21.bind(var5)(var18);
            var24 = var18.intl;
            var23 = var24.string;
            var18 = var22[var25];
            var18 = var21.bind(var5)(var18);
            var18 = var18.t;
            var18 = var18.dMJ3Y2;
            var18 = var23.bind(var24)(var18);
            var6['title'] = var18;
            var6['subtitle'] = var17;
            var18 = _closure1_slot17;
            var17 = 39;
            var17 = var22[var17];
            var17 = var21.bind(var5)(var17);
            var17 = var17.Button;
            if(!var11) { _fun0007_ip = 362; continue _fun0007 }
 359:
            if(var19) { _fun0007_ip = 458; continue _fun0007 }
 362:
            var11 = {};
            var21 = 'sm';
            var11['size'] = var21;
            var24 = _closure1_slot0;
            var21 = _closure1_slot3;
            var22 = var21[var25];
            var22 = var24.bind(var5)(var22);
            var23 = var22.intl;
            var22 = var23.string;
            var21 = var21[var25];
            var21 = var24.bind(var5)(var21);
            var21 = var21.t;
            var21 = var21.OYkgVl;
            var21 = var22.bind(var23)(var21);
            var11['text'] = var21;
            var21 = function handleAddPressed() {
                var1 = undefined;
                var4 = _closure2_slot2;
                var3 = var4.apply;
                var1 = arguments;
                var2 = var1;
                var1 = this;
                var1 = var3.bind(var4)(var1, var2);
                return var1;
            };
            var11['onPress'] = var21;
            var21 = 'primary';
            if(!var19) { _fun0007_ip = 448; continue _fun0007 }
 444:
            var21 = 'secondary';
 448:
            var11['variant'] = var21;
            var11['disabled'] = var19;
            _fun0007_ip = 544; continue _fun0007;
 458:
            var19 = {};
            var21 = 'sm';
            var19['size'] = var21;
            var24 = _closure1_slot0;
            var21 = _closure1_slot3;
            var22 = var21[var25];
            var22 = var24.bind(var5)(var22);
            var23 = var22.intl;
            var22 = var23.string;
            var21 = var21[var25];
            var21 = var24.bind(var5)(var21);
            var21 = var21.t;
            var21 = var21.5WxrcX;
            var21 = var22.bind(var23)(var21);
            var19['text'] = var21;
            var20 = function onPress() {
                var3 = _closure1_slot1;
                var2 = _closure1_slot3;
                var1 = 36;
                var2 = var2[var1];
                var1 = undefined;
                var3 = var3.bind(var1)(var2);
                var2 = var3.hideActionSheet;
                var2 = var2.bind(var3)();
                return var1;
            };
            var19['onPress'] = var20;
            var20 = 'secondary';
            var19['variant'] = var20;
            var11 = var19;
 544:
            var11 = var18.bind(var5)(var17, var11);
            var6['trailing'] = var11;
            var6 = var8.bind(var5)(var7, var6);
            var2['header'] = var6;
            var8 = _closure1_slot17;
            var7 = _closure1_slot8;
            var6 = {};
            var10 = var10.container;
            var6['style'] = var10;
            var11 = _closure1_slot17;
            var10 = _closure1_slot24;
            var9 = {};
            var9['channel'] = var15;
            var9['guild'] = var16;
            var15 = var15.accessPermissions;
            var9['permission'] = var15;
            var9['pendingAdditions'] = var14;
            var9['setPendingAdditions'] = var13;
            var9['inActionSheet'] = var12;
            var9 = var11.bind(var5)(var10, var9);
            var6['children'] = var9;
            var6 = var8.bind(var5)(var7, var6);
            var2['children'] = var6;
            var2 = var4.bind(var5)(var3, var2);
            return var2;
 658:
            return var1;
        }
    };
    var3['default'] = var4;
    var3['AddMembersBody'] = var2;
    return var1;
})();