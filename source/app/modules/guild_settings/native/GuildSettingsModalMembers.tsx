// app/modules/guild_settings/native/GuildSettingsModalMembers.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var12 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var12;
    var _closure1_slot2 = var6;
    var1 = function _createForOfIteratorHelperLoose(arg1, arg2) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var3 = arg1;
            var _closure2_slot0 = var3;
            var5 = global;
            var2 = var5.Symbol;
            var4 = 'undefined';
            var2 = typeof var2;
            var2 = var4 !== var2;
            if(!var2) { _fun0001_ip = 46; continue _fun0001 }
 30:
            var4 = var5.Symbol;
            var4 = var4.iterator;
            var2 = var3[var4];
 46:
            if(var2) { _fun0001_ip = 55; continue _fun0001 }
 49:
            var2 = var3.@@iterator;
 55:
            if(var2) { _fun0001_ip = 345; continue _fun0001 }
 61:
            var6 = var5.Array;
            var4 = var6.isArray;
            var6 = var4.bind(var6)(var3);
            var4 = var2;
            if(var6) { _fun0001_ip = 323; continue _fun0001 }
 86:
            var8 = undefined;
            var6 = undefined;
            if(!var3) { _fun0001_ip = 283; continue _fun0001 }
 96:
            var9 = 'string';
            var7 = typeof var3;
            if(!(var9 !== var7)) { _fun0001_ip = 270; continue _fun0001 }
 110:
            var7 = {};
            var9 = var7.toString;
            var7 = var9.call;
            var11 = var7.bind(var9)(var3);
            var10 = var11.slice;
            var9 = 8;
            var7 = -1;
            var9 = var10.bind(var11)(var9, var7);
            var7 = 'Object';
            var7 = var7 === var9;
            if(!var7) { _fun0001_ip = 163; continue _fun0001 }
 158:
            var7 = var3.constructor;
 163:
            var10 = var9;
            if(!var7) { _fun0001_ip = 179; continue _fun0001 }
 169:
            var7 = var3.constructor;
            var10 = var7.name;
 179:
            var7 = 'Map';
            if(!(var7 !== var10)) { _fun0001_ip = 249; continue _fun0001 }
 187:
            var7 = 'Set';
            if(!(var7 !== var10)) { _fun0001_ip = 249; continue _fun0001 }
 195:
            var7 = 'Arguments';
            if(!(var7 !== var10)) { _fun0001_ip = 234; continue _fun0001 }
 205:
            var9 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
            var7 = var9.test;
            var9 = var7.bind(var9)(var10);
            var7 = undefined;
            if(!var9) { _fun0001_ip = 247; continue _fun0001 }
 234:
            var9 = _closure1_slot22;
            var7 = var9.bind(var8)(var3, var8);
 247:
            _fun0001_ip = 265; continue _fun0001;
 249:
            var10 = var5.Array;
            var9 = var10.from;
            var7 = var9.bind(var10)(var3);
 265:
            var6 = var7;
            _fun0001_ip = 283; continue _fun0001;
 270:
            var7 = _closure1_slot22;
            var6 = var7.bind(var8)(var3, var8);
 283:
            var4 = var6;
            if(var4) { _fun0001_ip = 323; continue _fun0001 }
 289:
            var7 = var5.TypeError;
            var5 = var7.prototype;
            var6 = Object.create(var5, {constructor: {value: var7}});
            var13 = 'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.';
            var14 = var6;
            var5 = new var14[var7](var13, var12);
            var5 = var5 instanceof Object ? var5 : var6;
            throw var5;
 323:
            if(!var4) { _fun0001_ip = 330; continue _fun0001 }
 326:
            _closure2_slot0 = var4;
 330:
            var4 = 0;
            var _closure2_slot1 = var4;
            var1 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var2 = _closure2_slot1;
                    var1 = _closure2_slot0;
                    var1 = var1.length;
                    if(!(!(var2 >= var1))) { _fun0002_ip = 56; continue _fun0002 }
 20:
                    var1 = {};
                    var2 = false;
                    var1['done'] = var2;
                    var3 = _closure2_slot0;
                    var2 = _closure2_slot1;
                    var2 = parseFloat(var2);
                    var4 = var2 + 1;
                    _closure2_slot1 = var4;
                    var2 = var3[var2];
                    var1['value'] = var2;
                    _fun0002_ip = 67; continue _fun0002;
 56:
                    var2 = {};
                    var3 = true;
                    var2['done'] = var3;
                    var1 = var2;
 67:
                    return var1;
                }
            };
            return var1;
 345:
            var1 = var2.call;
            var3 = var1.bind(var2)(var3);
            var2 = var3.next;
            var1 = var2.bind;
            var1 = var1.bind(var2)(var3);
            return var1;
        }
    };
    var _closure1_slot21 = var1;
    var1 = function _arrayLikeToArray(arg1, arg2) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
            var4 = arg1;
            var1 = null;
            var3 = undefined;
            var1 = var1 == var3;
            if(var1) { _fun0003_ip = 23; continue _fun0003 }
 14:
            var2 = var4.length;
            var1 = var3 > var2;
 23:
            var2 = undefined;
            if(!var1) { _fun0003_ip = 33; continue _fun0003 }
 28:
            var2 = var4.length;
 33:
            var1 = global;
            var1 = var1.Array;
            var1 = var1.bind(var3)(var2);
            var3 = 0;
            var5 = var3 < var2;
            if(!var5) { _fun0003_ip = 70; continue _fun0003 }
 55:
            var5 = var4[var3];
            var1[var3] = var5;
            var3 = var3 + 1;
            if(var3 < var2) { _fun0003_ip = 55; continue _fun0003 }
 70:
            return var1;
        }
    };
    var _closure1_slot22 = var1;
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
    var4 = var12.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var13 = 1;
    var7 = var6[var13];
    var4 = metroImportAll;
    var7 = var4.bind(var1)(var7);
    var _closure1_slot4 = var7;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.View;
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.TABLE_ROW_HEIGHT;
    var _closure1_slot6 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var12.bind(var1)(var4);
    var _closure1_slot7 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var12.bind(var1)(var4);
    var _closure1_slot8 = var4;
    var4 = 6;
    var4 = var6[var4];
    var4 = var12.bind(var1)(var4);
    var _closure1_slot9 = var4;
    var4 = 7;
    var4 = var6[var4];
    var4 = var12.bind(var1)(var4);
    var _closure1_slot10 = var4;
    var4 = 8;
    var4 = var6[var4];
    var4 = var12.bind(var1)(var4);
    var _closure1_slot11 = var4;
    var4 = 9;
    var4 = var6[var4];
    var4 = var12.bind(var1)(var4);
    var _closure1_slot12 = var4;
    var4 = 10;
    var4 = var6[var4];
    var4 = var12.bind(var1)(var4);
    var _closure1_slot13 = var4;
    var4 = 11;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.GuildSettingsSections;
    var _closure1_slot14 = var4;
    var4 = 12;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var8 = var4.jsx;
    var _closure1_slot15 = var8;
    var8 = var4.jsxs;
    var _closure1_slot16 = var8;
    var4 = var4.Fragment;
    var _closure1_slot17 = var4;
    var4 = 13;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.AutocompleterResultTypes;
    var8 = var4.USER;
    var4 = new Array(1);
    var4[0] = var8;
    var _closure1_slot18 = var4;
    var4 = 14;
    var4 = var6[var4];
    var9 = var5.bind(var1)(var4);
    var8 = var9.createStyles;
    var4 = {};
    var10 = {};
    var11 = 15;
    var14 = var6[var11];
    var14 = var12.bind(var1)(var14);
    var14 = var14.spacing;
    var14 = var14.PX_12;
    var10['paddingHorizontal'] = var14;
    var10['flex'] = var13;
    var4['containerInner'] = var10;
    var10 = {};
    var13 = var6[var11];
    var13 = var12.bind(var1)(var13);
    var13 = var13.spacing;
    var13 = var13.PX_12;
    var10['paddingVertical'] = var13;
    var4['searchFieldContainer'] = var10;
    var10 = {};
    var11 = var6[var11];
    var11 = var12.bind(var1)(var11);
    var11 = var11.spacing;
    var11 = var11.PX_16;
    var10['paddingBottom'] = var11;
    var4['listView'] = var10;
    var10 = {};
    var11 = 70;
    var10['marginLeft'] = var11;
    var4['rowDivider'] = var10;
    var10 = {'flexDirection': 'row', 'flexWrap': 'wrap', 'overflow': 'hidden', 'paddingTop': 4};
    var4['roleList'] = var10;
    var4 = var8.bind(var9)(var4);
    var _closure1_slot19 = var4;
    var8 = var7.memo;
    var4 = function(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
            var1 = arg1;
            var10 = var1.guild;
            var _closure2_slot0 = var10;
            var12 = var1.guildMember;
            var _closure2_slot1 = var12;
            var4 = var1.sortedGuildRoles;
            var7 = var1.start;
            var6 = var1.end;
            var1 = _closure1_slot19;
            var5 = undefined;
            var15 = var1.bind(var5)();
            var2 = _closure1_slot0;
            var3 = _closure1_slot2;
            var1 = 16;
            var1 = var3[var1];
            var2 = var2.bind(var5)(var1);
            var1 = var2.useNavigation;
            var1 = var1.bind(var2)();
            var _closure2_slot2 = var1;
            var1 = null;
            if(!(var1 != var10)) { _fun0004_ip = 314; continue _fun0004 }
 96:
            var3 = var12.userId;
            var2 = var10.ownerId;
            var9 = var3 === var2;
            if(!var9) { _fun0004_ip = 138; continue _fun0004 }
 114:
            var3 = _closure1_slot7;
            var2 = var3.getId;
            var3 = var2.bind(var3)();
            var2 = var10.ownerId;
            var9 = var3 === var2;
 138:
            var3 = var4.filter;
            var2 = function(arg1) {
                var1 = _closure2_slot1;
                var3 = var1.roles;
                var2 = var3.includes;
                var1 = arg1;
                var1 = var1.id;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var4 = var3.bind(var4)(var2);
            var3 = var4.map;
            var2 = function(arg1) {
                var1 = arg1;
                var5 = _closure1_slot15;
                var3 = _closure1_slot1;
                var4 = _closure1_slot2;
                var2 = 17;
                var2 = var4[var2];
                var4 = undefined;
                var3 = var3.bind(var4)(var2);
                var2 = {};
                var2['role'] = var1;
                var6 = _closure2_slot0;
                var6 = var6.id;
                var2['guildId'] = var6;
                var1 = var1.id;
                var1 = var5.bind(var4)(var3, var2, var1);
                return var1;
            };
            var14 = var3.bind(var4)(var2);
            var4 = _closure1_slot15;
            var3 = _closure1_slot1;
            var13 = _closure1_slot2;
            var2 = 18;
            var2 = var13[var2];
            var3 = var3.bind(var5)(var2);
            var2 = {};
            var12 = var12.userId;
            var2['userId'] = var12;
            var10 = var10.id;
            var2['guildId'] = var10;
            var12 = var14.length;
            var10 = 0;
            var12 = var12 > var10;
            var10 = null;
            if(!var12) { _fun0004_ip = 271; continue _fun0004 }
 232:
            var13 = _closure1_slot15;
            var12 = _closure1_slot5;
            var11 = {};
            var15 = var15.roleList;
            var11['style'] = var15;
            var15 = 'none';
            var11['pointerEvents'] = var15;
            var11['children'] = var14;
            var10 = var13.bind(var5)(var12, var11);
 271:
            var2['subLabel'] = var10;
            var2['disabled'] = var9;
            var8 = function onPress() {
                var4 = _closure2_slot2;
                var3 = var4.push;
                var1 = _closure1_slot14;
                var2 = var1.MEMBER_EDIT;
                var1 = {};
                var5 = _closure2_slot1;
                var5 = var5.userId;
                var1['userId'] = var5;
                var1 = var3.bind(var4)(var2, var1);
                var1 = undefined;
                return var1;
            };
            var2['onPress'] = var8;
            var8 = true;
            var2['arrow'] = var8;
            var2['start'] = var7;
            var2['end'] = var6;
            var2 = var4.bind(var5)(var3, var2);
            return var2;
 314:
            return var1;
        }
    };
    var4 = var8.bind(var7)(var4);
    var _closure1_slot20 = var4;
    var4 = var7.memo;
    var2 = function GuildSettingsModalMembers(arg1) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
            var2 = arg1;
            var13 = var2.guildId;
            var _closure2_slot0 = var13;
            var22 = _closure1_slot0;
            var18 = _closure1_slot2;
            var2 = 16;
            var2 = var18[var2];
            var4 = undefined;
            var3 = var22.bind(var4)(var2);
            var2 = var3.useNavigation;
            var12 = var2.bind(var3)();
            var _closure2_slot1 = var12;
            var2 = _closure1_slot19;
            var11 = var2.bind(var4)();
            var3 = _closure1_slot1;
            var2 = 19;
            var2 = var18[var2];
            var2 = var3.bind(var4)(var2);
            var2 = var2.bind(var4)();
            var15 = var2.bottom;
            var3 = 20;
            var2 = var18[var3];
            var8 = var22.bind(var4)(var2);
            var7 = var8.useStateFromStoresObject;
            var2 = _closure1_slot11;
            var5 = new Array(2);
            var5[0] = var2;
            var2 = _closure1_slot10;
            var5[1] = var2;
            var2 = function() {
                var1 = {};
                var5 = _closure1_slot11;
                var3 = var5.getGuild;
                var4 = _closure2_slot0;
                var3 = var3.bind(var5)(var4);
                var1['guild'] = var3;
                var3 = var5.getGuild;
                var5 = var3.bind(var5)(var4);
                var3 = null;
                var3 = var3 != var5;
                var1['guildLoaded'] = var3;
                var3 = _closure1_slot10;
                var2 = var3.getSortedRoles;
                var2 = var2.bind(var3)(var4);
                var1['sortedGuildRoles'] = var2;
                return var1;
            };
            var2 = var7.bind(var8)(var5, var2);
            var9 = var2.guild;
            var _closure2_slot2 = var9;
            var16 = var2.guildLoaded;
            var _closure2_slot3 = var16;
            var2 = var2.sortedGuildRoles;
            var _closure2_slot4 = var2;
            var5 = var18[var3];
            var10 = var22.bind(var4)(var5);
            var8 = var10.useStateFromStores;
            var5 = _closure1_slot13;
            var7 = new Array(1);
            var7[0] = var5;
            var5 = function() {
                var2 = _closure1_slot13;
                var1 = var2.getProps;
                var1 = var1.bind(var2)();
                var1 = var1.selectedRoleId;
                return var1;
            };
            var20 = var8.bind(var10)(var7, var5);
            var _closure2_slot5 = var20;
            var5 = var18[var3];
            var14 = var22.bind(var4)(var5);
            var10 = var14.useStateFromStores;
            var5 = _closure1_slot8;
            var8 = new Array(1);
            var8[0] = var5;
            var7 = new Array(2);
            var7[0] = var13;
            var7[1] = var16;
            var5 = function() {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
                    var4 = _closure1_slot8;
                    var3 = var4.getMemberCount;
                    var1 = _closure2_slot0;
                    var3 = var3.bind(var4)(var1);
                    var1 = null;
                    var5 = var1 != var3;
                    var1 = 0;
                    var4 = 0;
                    if(!var5) { _fun0006_ip = 41; continue _fun0006 }
 38:
                    var4 = var3;
 41:
                    var1 = var4 > var1;
                    if(!var1) { _fun0006_ip = 58; continue _fun0006 }
 48:
                    var3 = 10000;
                    var1 = var4 <= var3;
 58:
                    if(!var1) { _fun0006_ip = 65; continue _fun0006 }
 61:
                    var1 = _closure2_slot3;
 65:
                    return var1;
                }
            };
            var7 = var10.bind(var14)(var8, var5, var7);
            var _closure2_slot6 = var7;
            var3 = var18[var3];
            var14 = var22.bind(var4)(var3);
            var10 = var14.useStateFromStoresArray;
            var3 = _closure1_slot9;
            var8 = new Array(1);
            var8[0] = var3;
            var5 = new Array(1);
            var5[0] = var13;
            var3 = function() {
                var3 = _closure1_slot9;
                var2 = var3.getMembers;
                var1 = _closure2_slot0;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var23 = var10.bind(var14)(var8, var3, var5);
            var _closure2_slot7 = var23;
            var5 = _closure1_slot4;
            var8 = var5.useState;
            var3 = new Array(0);
            var3 = var8.bind(var5)(var3);
            var19 = _closure1_slot3;
            var14 = 2;
            var3 = var19.bind(var4)(var3, var14);
            var10 = 0;
            var21 = var3[var10];
            var _closure2_slot8 = var21;
            var17 = 1;
            var3 = var3[var17];
            var _closure2_slot9 = var3;
            var8 = var5.useState;
            var3 = false;
            var3 = var8.bind(var5)(var3);
            var3 = var19.bind(var4)(var3, var14);
            var8 = var3[var10];
            var _closure2_slot10 = var8;
            var3 = var3[var17];
            var _closure2_slot11 = var3;
            var24 = var5.useState;
            var3 = function() {
                var4 = _closure1_slot1;
                var3 = _closure1_slot2;
                var2 = 13;
                var3 = var3[var2];
                var2 = undefined;
                var5 = var4.bind(var2)(var3);
                var8 = _closure2_slot9;
                var7 = _closure1_slot18;
                var1 = var5.prototype;
                var2 = Object.create(var1, {constructor: {value: var5}});
                var6 = 100;
                var9 = var2;
                var1 = new var9[var5](var8, var7, var6, var5);
                var1 = var1 instanceof Object ? var1 : var2;
                return var1;
            };
            var3 = var24.bind(var5)(var3);
            var14 = var19.bind(var4)(var3, var14);
            var3 = var14[var10];
            var _closure2_slot12 = var3;
            var14 = var14[var17];
            var19 = var5.useMemo;
            var14 = new Array(5);
            var14[0] = var13;
            var14[1] = var23;
            var14[2] = var21;
            var14[3] = var20;
            var14[4] = var8;
            var8 = function() {
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
                    var1 = new Array(0);
                    var11 = function guildRoleIsFiltered(arg1) {
                        _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
 0:
                            var3 = _closure2_slot5;
                            var1 = null;
                            var1 = var1 != var3;
                            if(!var1) { _fun0008_ip = 64; continue _fun0008 }
 16:
                            var5 = _closure1_slot0;
                            var4 = _closure1_slot2;
                            var3 = 21;
                            var4 = var4[var3];
                            var3 = undefined;
                            var6 = var5.bind(var3)(var4);
                            var5 = var6.isEveryoneRoleId;
                            var4 = _closure2_slot0;
                            var3 = _closure2_slot5;
                            var3 = var5.bind(var6)(var4, var3);
                            var1 = !var3;
 64:
                            if(!var1) { _fun0008_ip = 101; continue _fun0008 }
 67:
                            var3 = arg1;
                            var4 = var3.roles;
                            var3 = var4.indexOf;
                            var2 = _closure2_slot5;
                            var3 = var3.bind(var4)(var2);
                            var2 = -1;
                            var1 = var2 === var3;
 101:
                            return var1;
                        }
                    };
                    var4 = _closure2_slot10;
                    var3 = _closure1_slot21;
                    if(var4) { _fun0007_ip = 143; continue _fun0007 }
 30:
                    var4 = _closure2_slot7;
                    var8 = undefined;
                    var7 = var3.bind(var8)(var4);
                    var5 = var7.bind(var8)();
                    var4 = var5.done;
                    var6 = null;
                    if(var4) { _fun0007_ip = 120; continue _fun0007 }
 55:
                    var12 = var5.value;
                    var14 = _closure1_slot12;
                    var13 = var14.getUser;
                    var4 = var12.userId;
                    var4 = var13.bind(var14)(var4);
                    var4 = var6 == var4;
                    if(var4) { _fun0007_ip = 92; continue _fun0007 }
 87:
                    var4 = var11.bind(var8)(var12);
 92:
                    if(var4) { _fun0007_ip = 105; continue _fun0007 }
 95:
                    var4 = var1.push;
                    var4 = var4.bind(var1)(var12);
 105:
                    var12 = var7.bind(var8)();
                    var4 = var12.done;
                    var5 = var12;
                    if(!var4) { _fun0007_ip = 55; continue _fun0007 }
 120:
                    var4 = var1.sort;
                    var2 = function(arg1, arg2) {
                        _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
 0:
                            var2 = arg1;
                            var5 = arg2;
                            var1 = var2.nick;
                            var4 = null;
                            if(!(var4 == var1)) { _fun0009_ip = 58; continue _fun0009 }
 18:
                            var6 = _closure1_slot12;
                            var3 = var6.getUser;
                            var2 = var2.userId;
                            var3 = var3.bind(var6)(var2);
                            var6 = var4 == var3;
                            var2 = undefined;
                            if(var6) { _fun0009_ip = 55; continue _fun0009 }
 50:
                            var2 = var3.username;
 55:
                            var1 = var2;
 58:
                            var6 = var4 != var1;
                            var3 = '';
                            var2 = var3;
                            if(!var6) { _fun0009_ip = 75; continue _fun0009 }
 72:
                            var2 = var1;
 75:
                            var1 = var5.nick;
                            if(!(var4 == var1)) { _fun0009_ip = 125; continue _fun0009 }
 85:
                            var7 = _closure1_slot12;
                            var6 = var7.getUser;
                            var5 = var5.userId;
                            var6 = var6.bind(var7)(var5);
                            var7 = var4 == var6;
                            var5 = undefined;
                            if(var7) { _fun0009_ip = 122; continue _fun0009 }
 117:
                            var5 = var6.username;
 122:
                            var1 = var5;
 125:
                            var4 = var4 != var1;
                            if(!var4) { _fun0009_ip = 135; continue _fun0009 }
 132:
                            var3 = var1;
 135:
                            var1 = var2.localeCompare;
                            var1 = var1.bind(var2)(var3);
                            return var1;
                        }
                    };
                    var2 = var4.bind(var1)(var2);
                    _fun0007_ip = 296; continue _fun0007;
 143:
                    var2 = _closure2_slot8;
                    var8 = undefined;
                    var7 = var3.bind(var8)(var2);
                    var3 = var7.bind(var8)();
                    var2 = var3.done;
                    var6 = null;
                    var5 = 13;
                    var4 = var3;
                    var3 = undefined;
                    if(var2) { _fun0007_ip = 296; continue _fun0007 }
 176:
                    var2 = var4.value;
                    var13 = var2.type;
                    var14 = _closure1_slot0;
                    var12 = _closure1_slot2;
                    var12 = var12[var5];
                    var12 = var14.bind(var8)(var12);
                    var12 = var12.AutocompleterResultTypes;
                    var12 = var12.USER;
                    if(!(var13 === var12)) { _fun0007_ip = 281; continue _fun0007 }
 219:
                    var14 = _closure1_slot9;
                    var13 = var14.getMember;
                    var12 = _closure2_slot0;
                    var2 = var2.record;
                    var2 = var2.id;
                    var2 = var13.bind(var14)(var12, var2);
                    var12 = var6 == var2;
                    if(var12) { _fun0007_ip = 262; continue _fun0007 }
 257:
                    var12 = var11.bind(var8)(var2);
 262:
                    var3 = var2;
                    if(var12) { _fun0007_ip = 281; continue _fun0007 }
 268:
                    var12 = var1.push;
                    var12 = var12.bind(var1)(var2);
                    var3 = var2;
 281:
                    var12 = var7.bind(var8)();
                    var2 = var12.done;
                    var4 = var12;
                    if(!var2) { _fun0007_ip = 176; continue _fun0007 }
 296:
                    return var1;
                }
            };
            var14 = var19.bind(var5)(var8, var14);
            var8 = var14.length;
            var8 = var8 - var17;
            var _closure2_slot13 = var8;
            var19 = var5.useEffect;
            var17 = new Array(2);
            var17[0] = var9;
            var17[1] = var12;
            var12 = function() {
                var3 = _closure2_slot1;
                var2 = var3.setOptions;
                var1 = {};
                var4 = function headerRight() {
                    _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
 0:
                        var4 = _closure1_slot15;
                        var2 = _closure1_slot0;
                        var3 = _closure1_slot2;
                        var1 = 22;
                        var1 = var3[var1];
                        var3 = undefined;
                        var1 = var2.bind(var3)(var1);
                        var2 = var1.ContextMenu;
                        var1 = {};
                        var7 = _closure2_slot2;
                        var5 = null;
                        if(!(var5 == var7)) { _fun0010_ip = 56; continue _fun0010 }
 50:
                        var5 = new Array(0);
                        _fun0010_ip = 97; continue _fun0010;
 56:
                        var7 = _closure1_slot0;
                        var8 = _closure1_slot2;
                        var6 = 23;
                        var6 = var8[var6];
                        var8 = var7.bind(var3)(var6);
                        var7 = var8.getMembersManagementActions;
                        var6 = {};
                        var9 = _closure2_slot2;
                        var6['guild'] = var9;
                        var5 = var7.bind(var8)(var6);
 97:
                        var1['items'] = var5;
                        var5 = function children(arg1) {
                            var3 = arg1;
                            var6 = var3.ref;
                            var1 = null;
                            var2 = Object.create(var1);
                            var1 = 0;
                            var2['ref'] = var1;
                            var14 = {};
                            var13 = var3;
                            var12 = var2;
                            var13 = copyDataProperties(var14, var13, var12);
                            var4 = _closure1_slot15;
                            var10 = _closure1_slot0;
                            var11 = _closure1_slot2;
                            var1 = 24;
                            var1 = var11[var1];
                            var3 = undefined;
                            var1 = var10.bind(var3)(var1);
                            var2 = var1.HeaderActionButton;
                            var1 = {};
                            var8 = _closure1_slot1;
                            var7 = 25;
                            var7 = var11[var7];
                            var7 = var8.bind(var3)(var7);
                            var1['source'] = var7;
                            var7 = 26;
                            var8 = var11[var7];
                            var8 = var10.bind(var3)(var8);
                            var9 = var8.intl;
                            var8 = var9.string;
                            var7 = var11[var7];
                            var7 = var10.bind(var3)(var7);
                            var7 = var7.t;
                            var7 = var7.ogxXGh;
                            var7 = var8.bind(var9)(var7);
                            var1['accessibilityLabel'] = var7;
                            var1['ref'] = var6;
                            var14 = var1;
                            var5 = copyDataProperties(var14, var13);
                            var1 = var4.bind(var3)(var2, var1);
                            return var1;
                        };
                        var1['children'] = var5;
                        var1 = var4.bind(var3)(var2, var1);
                        return var1;
                    }
                };
                var1['headerRight'] = var4;
                var1 = var2.bind(var3)(var1);
                var1 = undefined;
                return var1;
            };
            var12 = var19.bind(var5)(var12, var17);
            var17 = var5.useEffect;
            var12 = new Array(2);
            var12[0] = var7;
            var12[1] = var13;
            var7 = function() {
                _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
 0:
                    var2 = _closure2_slot6;
                    if(!var2) { _fun0011_ip = 64; continue _fun0011 }
 10:
                    var4 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var2 = 27;
                    var3 = var3[var2];
                    var2 = undefined;
                    var6 = var4.bind(var2)(var3);
                    var5 = var6.requestMembers;
                    var10 = _closure2_slot0;
                    var9 = '';
                    var8 = 10000;
                    var7 = false;
                    var11 = var6;
                    var1 = var11[var5](var10, var9, var8, var7, var6);
 64:
                    var1 = undefined;
                    return var1;
                }
            };
            var7 = var17.bind(var5)(var7, var12);
            var17 = var5.useEffect;
            var12 = new Array(3);
            var12[0] = var13;
            var12[1] = var16;
            var12[2] = var3;
            var7 = function() {
                _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
 0:
                    var1 = _closure2_slot3;
                    if(!var1) { _fun0012_ip = 49; continue _fun0012 }
 10:
                    var3 = _closure2_slot12;
                    var2 = var3.setOptions;
                    var1 = {};
                    var4 = {};
                    var5 = _closure2_slot0;
                    var4['guild'] = var5;
                    var5 = true;
                    var4['strict'] = var5;
                    var1['userFilters'] = var4;
                    var1 = var2.bind(var3)(var1);
 49:
                    var1 = function() {
                        _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
 0:
                            var2 = _closure2_slot3;
                            if(!var2) { _fun0013_ip = 73; continue _fun0013 }
 10:
                            var6 = _closure1_slot1;
                            var7 = _closure1_slot2;
                            var2 = 28;
                            var2 = var7[var2];
                            var5 = undefined;
                            var4 = var6.bind(var5)(var2);
                            var3 = var4.selectRole;
                            var2 = 29;
                            var2 = var7[var2];
                            var6 = var6.bind(var5)(var2);
                            var5 = var6.castGuildIdAsEveryoneGuildRoleId;
                            var2 = _closure2_slot0;
                            var2 = var5.bind(var6)(var2);
                            var2 = var3.bind(var4)(var2);
 73:
                            var2 = _closure2_slot12;
                            var1 = var2.destroy;
                            var1 = var1.bind(var2)();
                            var1 = undefined;
                            return var1;
                        }
                    };
                    return var1;
                }
            };
            var7 = var17.bind(var5)(var7, var12);
            var12 = var5.useCallback;
            var7 = new Array(3);
            var7[0] = var16;
            var7[1] = var13;
            var7[2] = var3;
            var3 = function(arg1) {
                _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
 0:
                    var5 = arg1;
                    var1 = var5.trim;
                    var2 = var1.bind(var5)();
                    var1 = '';
                    var2 = var1 !== var2;
                    var3 = _closure2_slot11;
                    var1 = undefined;
                    var3 = var3.bind(var1)(var2);
                    var4 = _closure2_slot12;
                    if(var2) { _fun0014_ip = 54; continue _fun0014 }
 42:
                    var2 = var4.clear;
                    var2 = var2.bind(var4)();
                    _fun0014_ip = 79; continue _fun0014;
 54:
                    var3 = var4.search;
                    var7 = _closure2_slot3;
                    var2 = undefined;
                    if(!var7) { _fun0014_ip = 73; continue _fun0014 }
 69:
                    var2 = _closure2_slot0;
 73:
                    var2 = var3.bind(var4)(var5, var2);
 79:
                    return var1;
                }
            };
            var17 = var12.bind(var5)(var3, var7);
            var7 = var5.useCallback;
            var3 = new Array(3);
            var3[0] = var9;
            var3[1] = var8;
            var3[2] = var2;
            var2 = function(arg1) {
                var1 = arg1;
                var6 = var1.item;
                var5 = var1.index;
                var4 = _closure1_slot15;
                var3 = _closure1_slot20;
                var2 = {};
                var7 = _closure2_slot2;
                var2['guild'] = var7;
                var2['guildMember'] = var6;
                var6 = _closure2_slot4;
                var2['sortedGuildRoles'] = var6;
                var6 = 0;
                var6 = var6 === var5;
                var2['start'] = var6;
                var1 = _closure2_slot13;
                var1 = var5 === var1;
                var2['end'] = var1;
                var1 = undefined;
                var1 = var4.bind(var1)(var3, var2);
                return var1;
            };
            var13 = var7.bind(var5)(var2, var3);
            var3 = var5.useCallback;
            var2 = function(arg1) {
                var1 = arg1;
                var1 = var1.userId;
                return var1;
            };
            var1 = new Array(0);
            var16 = var3.bind(var5)(var2, var1);
            var3 = _closure1_slot16;
            var2 = _closure1_slot17;
            var1 = {};
            var7 = _closure1_slot5;
            var5 = {};
            var8 = var11.containerInner;
            var5['style'] = var8;
            var9 = _closure1_slot15;
            var8 = {};
            var11 = var11.searchFieldContainer;
            var8['style'] = var11;
            var11 = 30;
            var11 = var18[var11];
            var11 = var22.bind(var4)(var11);
            var12 = var11.SearchField;
            var11 = {};
            var19 = 'md';
            var11['size'] = var19;
            var20 = 26;
            var19 = var18[var20];
            var19 = var22.bind(var4)(var19);
            var21 = var19.intl;
            var19 = var21.string;
            var18 = var18[var20];
            var18 = var22.bind(var4)(var18);
            var18 = var18.t;
            var18 = var18.pYHobG;
            var18 = var19.bind(var21)(var18);
            var11['placeholder'] = var18;
            var11['onChange'] = var17;
            var17 = true;
            var11['isRound'] = var17;
            var11 = var9.bind(var4)(var12, var11);
            var8['children'] = var11;
            var9 = var9.bind(var4)(var7, var8);
            var8 = new Array(2);
            var8[0] = var9;
            var9 = var14.length;
            if(!(var10 === var9)) { _fun0005_ip = 1007; continue _fun0005 }
 848:
            var11 = _closure1_slot15;
            var10 = _closure1_slot1;
            var12 = _closure1_slot2;
            var9 = 32;
            var9 = var12[var9];
            var10 = var10.bind(var4)(var9);
            var9 = {};
            var19 = _closure1_slot0;
            var17 = 33;
            var17 = var12[var17];
            var17 = var19.bind(var4)(var17);
            var17 = var17.NoResults;
            var9['Illustration'] = var17;
            var17 = var12[var20];
            var17 = var19.bind(var4)(var17);
            var21 = var17.intl;
            var18 = var21.string;
            var17 = var12[var20];
            var17 = var19.bind(var4)(var17);
            var17 = var17.t;
            var17 = var17.qVQ9ub;
            var17 = var18.bind(var21)(var17);
            var9['title'] = var17;
            var17 = var12[var20];
            var17 = var19.bind(var4)(var17);
            var18 = var17.intl;
            var17 = var18.string;
            var12 = var12[var20];
            var12 = var19.bind(var4)(var12);
            var12 = var12.t;
            var12 = var12.oB9gra;
            var12 = var17.bind(var18)(var12);
            var9['body'] = var12;
            var9 = var11.bind(var4)(var10, var9);
            _fun0005_ip = 1110; continue _fun0005;
 1007:
            var12 = _closure1_slot15;
            var11 = _closure1_slot0;
            var17 = _closure1_slot2;
            var10 = 31;
            var10 = var17[var10];
            var10 = var11.bind(var4)(var10);
            var11 = var10.FlashList;
            var10 = {};
            var10['keyExtractor'] = var16;
            var10['data'] = var14;
            var10['renderItem'] = var13;
            var13 = _closure1_slot6;
            var10['estimatedItemSize'] = var13;
            var13 = {};
            var16 = _closure1_slot1;
            var14 = 15;
            var14 = var17[var14];
            var14 = var16.bind(var4)(var14);
            var14 = var14.spacing;
            var14 = var14.PX_16;
            var14 = var15 + var14;
            var13['paddingBottom'] = var14;
            var10['contentContainerStyle'] = var13;
            var9 = var12.bind(var4)(var11, var10);
 1110:
            var8[1] = var9;
            var5['children'] = var8;
            var7 = var3.bind(var4)(var7, var5);
            var5 = new Array(2);
            var5[0] = var7;
            var8 = _closure1_slot15;
            var7 = _closure1_slot0;
            var9 = _closure1_slot2;
            var6 = 34;
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
    var2 = var4.bind(var7)(var2);
    var4 = 35;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/guild_settings/native/GuildSettingsModalMembers.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();