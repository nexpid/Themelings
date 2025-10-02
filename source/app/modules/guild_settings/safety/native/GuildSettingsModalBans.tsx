// app/modules/guild_settings/safety/native/GuildSettingsModalBans.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var11 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var11;
    var _closure1_slot2 = var6;
    var1 = function _createForOfIteratorHelperLoose(arg1, arg2) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var3 = arg1;
            var _closure2_slot0 = var3;
            var5 = global;
            var2 = var5.Symbol;
            var4 = 'undefined';
            var2 = typeof var2;
            var2 = var4 !== var2;
            if(!var2) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var4 = var5.Symbol;
            var4 = var4.iterator;
            var2 = var3[var4];
case 2:
            if(var2) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var2 = var3.@@iterator;
case 4:
            if(var2) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var6 = var5.Array;
            var4 = var6.isArray;
            var6 = var4.bind(var6)(var3);
            var4 = var2;
            if(var6) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var8 = undefined;
            var6 = undefined;
            if(!var3) { _fun0001_ip = 10; continue _fun0001 }
case 11:
            var9 = 'string';
            var7 = typeof var3;
            if(!(var9 !== var7)) { _fun0001_ip = 12; continue _fun0001 }
case 13:
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
            if(!var7) { _fun0001_ip = 14; continue _fun0001 }
case 15:
            var7 = var3.constructor;
case 14:
            var10 = var9;
            if(!var7) { _fun0001_ip = 16; continue _fun0001 }
case 17:
            var7 = var3.constructor;
            var10 = var7.name;
case 16:
            var7 = 'Map';
            if(!(var7 !== var10)) { _fun0001_ip = 18; continue _fun0001 }
case 19:
            var7 = 'Set';
            if(!(var7 !== var10)) { _fun0001_ip = 18; continue _fun0001 }
case 20:
            var7 = 'Arguments';
            if(!(var7 !== var10)) { _fun0001_ip = 21; continue _fun0001 }
case 22:
            var9 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
            var7 = var9.test;
            var9 = var7.bind(var9)(var10);
            var7 = undefined;
            if(!var9) { _fun0001_ip = 23; continue _fun0001 }
case 21:
            var9 = _closure1_slot15;
            var7 = var9.bind(var8)(var3, var8);
case 23:
            _fun0001_ip = 24; continue _fun0001;
case 18:
            var10 = var5.Array;
            var9 = var10.from;
            var7 = var9.bind(var10)(var3);
case 24:
            var6 = var7;
            _fun0001_ip = 10; continue _fun0001;
case 12:
            var7 = _closure1_slot15;
            var6 = var7.bind(var8)(var3, var8);
case 10:
            var4 = var6;
            if(var4) { _fun0001_ip = 8; continue _fun0001 }
case 25:
            var7 = var5.TypeError;
            var5 = var7.prototype;
            var6 = Object.create(var5, {constructor: {value: var7}});
            var13 = 'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.';
            var14 = var6;
            var5 = new var14[var7](var13, var12);
            var5 = var5 instanceof Object ? var5 : var6;
            throw var5;
case 8:
            if(!var4) { _fun0001_ip = 26; continue _fun0001 }
case 27:
            _closure2_slot0 = var4;
case 26:
            var4 = 0;
            var _closure2_slot1 = var4;
            var1 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var2 = _closure2_slot1;
                    var1 = _closure2_slot0;
                    var1 = var1.length;
                    if(!(!(var2 >= var1))) { _fun0002_ip = 28; continue _fun0002 }
case 29:
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
                    _fun0002_ip = 30; continue _fun0002;
case 28:
                    var2 = {};
                    var3 = true;
                    var2['done'] = var3;
                    var1 = var2;
case 30:
                    return var1;
                }
            };
            return var1;
case 6:
            var1 = var2.call;
            var3 = var1.bind(var2)(var3);
            var2 = var3.next;
            var1 = var2.bind;
            var1 = var1.bind(var2)(var3);
            return var1;
        }
    };
    var _closure1_slot14 = var1;
    var1 = function _arrayLikeToArray(arg1, arg2) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var4 = arg1;
            var1 = null;
            var3 = undefined;
            var1 = var1 == var3;
            if(var1) { _fun0003_ip = 31; continue _fun0003 }
case 32:
            var2 = var4.length;
            var1 = var3 > var2;
case 31:
            var2 = undefined;
            if(!var1) { _fun0003_ip = 33; continue _fun0003 }
case 34:
            var2 = var4.length;
case 33:
            var1 = global;
            var1 = var1.Array;
            var1 = var1.bind(var3)(var2);
            var3 = 0;
            var5 = var3 < var2;
            if(!var5) { _fun0003_ip = 35; continue _fun0003 }
case 4:
            var5 = var4[var3];
            var1[var3] = var5;
            var3 = var3 + 1;
            if(var3 < var2) { _fun0003_ip = 4; continue _fun0003 }
case 35:
            return var1;
        }
    };
    var _closure1_slot15 = var1;
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
    var7 = var4.View;
    var _closure1_slot5 = var7;
    var8 = var4.StyleSheet;
    var _closure1_slot6 = var8;
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
    var4 = var5.bind(var1)(var4);
    var7 = var4.jsx;
    var _closure1_slot10 = var7;
    var7 = var4.jsxs;
    var _closure1_slot11 = var7;
    var4 = var4.Fragment;
    var _closure1_slot12 = var4;
    var7 = var8.create;
    var4 = {};
    var9 = {};
    var10 = 7;
    var13 = var6[var10];
    var13 = var11.bind(var1)(var13);
    var13 = var13.spacing;
    var13 = var13.PX_12;
    var9['paddingHorizontal'] = var13;
    var9['flex'] = var12;
    var4['containerInner'] = var9;
    var9 = {};
    var10 = var6[var10];
    var10 = var11.bind(var1)(var10);
    var10 = var10.spacing;
    var10 = var10.PX_16;
    var9['paddingVertical'] = var10;
    var4['searchField'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot13 = var4;
    var4 = 26;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/guild_settings/safety/native/GuildSettingsModalBans.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function ConnectedGuildSettingsModalBans(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var2 = arg1;
            var3 = var2.guildId;
            var _closure2_slot0 = var3;
            var10 = var2.contentContainerStyle;
            var4 = undefined;
            var _closure2_slot4 = var4;
            var7 = _closure1_slot0;
            var11 = _closure1_slot2;
            var5 = 8;
            var2 = var11[var5];
            var12 = var7.bind(var4)(var2);
            var9 = var12.useStateFromStores;
            var2 = _closure1_slot7;
            var8 = new Array(1);
            var8[0] = var2;
            var2 = function() {
                var3 = _closure1_slot7;
                var2 = var3.getGuild;
                var1 = _closure2_slot0;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var2 = var9.bind(var12)(var8, var2);
            var _closure2_slot1 = var2;
            var5 = var11[var5];
            var9 = var7.bind(var4)(var5);
            var8 = var9.useStateFromStoresObject;
            var5 = _closure1_slot9;
            var7 = new Array(1);
            var7[0] = var5;
            var5 = function() {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                    var2 = _closure1_slot9;
                    var1 = var2.getProps;
                    var2 = var1.bind(var2)();
                    var3 = var2.bans;
                    var4 = var2.searchQuery;
                    var1 = {};
                    var1['bans'] = var3;
                    var3 = null;
                    var5 = var3 != var4;
                    var3 = '';
                    if(!var5) { _fun0005_ip = 36; continue _fun0005 }
case 5:
                    var3 = var4;
case 36:
                    var1['searchQuery'] = var3;
                    var2 = var2.bansVersion;
                    var1['bansVersion'] = var2;
                    return var1;
                }
            };
            var5 = var8.bind(var9)(var7, var5);
            var7 = var5.bans;
            var _closure2_slot2 = var7;
            var17 = var5.searchQuery;
            var _closure2_slot3 = var17;
            var9 = var5.bansVersion;
            var8 = _closure1_slot1;
            var5 = 9;
            var5 = var11[var5];
            var5 = var8.bind(var4)(var5);
            var15 = var5.bind(var4)();
            var8 = _closure1_slot6;
            var5 = var8.flatten;
            var8 = var5.bind(var8)(var10);
            var5 = null;
            var11 = var5 == var8;
            var10 = undefined;
            if(var11) { _fun0004_ip = 37; continue _fun0004 }
case 20:
            var10 = var8.paddingBottom;
case 37:
            var11 = 0;
            var12 = 'number';
            var8 = typeof var10;
            var13 = 0;
            if(!(var12 === var8)) { _fun0004_ip = 38; continue _fun0004 }
case 39:
            var12 = _closure1_slot1;
            var14 = _closure1_slot2;
            var8 = 7;
            var8 = var14[var8];
            var8 = var12.bind(var4)(var8);
            var8 = var8.spacing;
            var8 = var8.PX_16;
            var13 = var10 + var8;
case 38:
            var8 = _closure1_slot4;
            var12 = var8.useMemo;
            var10 = new Array(3);
            var10[0] = var7;
            var10[1] = var9;
            var10[2] = var17;
            var9 = function() {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                    var2 = new Array(0);
                    var3 = _closure1_slot14;
                    var1 = _closure2_slot2;
                    var9 = null;
                    if(!(var9 == var1)) { _fun0006_ip = 3; continue _fun0006 }
case 40:
                    var1 = new Array(0);
                    _fun0006_ip = 41; continue _fun0006;
case 3:
                    var1 = _closure2_slot2;
case 41:
                    var8 = undefined;
                    var7 = var3.bind(var8)(var1);
                    var3 = var7.bind(var8)();
                    var1 = var3.done;
                    var6 = 10;
                    var5 = 0;
                    var4 = 1;
                    if(var1) { _fun0006_ip = 37; continue _fun0006 }
case 42:
                    var12 = var3.value;
                    var1 = _closure1_slot3;
                    var1 = var1.bind(var8)(var12, var4);
                    var13 = var1[var5];
                    var12 = _closure1_slot8;
                    var1 = var12.getUser;
                    var12 = var1.bind(var12)(var13);
                    if(!(var9 != var12)) { _fun0006_ip = 43; continue _fun0006 }
case 44:
                    var1 = _closure2_slot3;
                    var1 = var1.length;
                    var1 = var5 === var1;
                    if(var1) { _fun0006_ip = 45; continue _fun0006 }
case 46:
                    var14 = _closure1_slot1;
                    var13 = _closure1_slot2;
                    var13 = var13[var6];
                    var15 = var14.bind(var8)(var13);
                    var14 = _closure2_slot3;
                    var13 = var14.toLowerCase;
                    var14 = var13.bind(var14)();
                    var16 = var12.username;
                    var13 = var16.toLowerCase;
                    var13 = var13.bind(var16)();
                    var1 = var15.bind(var8)(var14, var13);
case 45:
                    if(!var1) { _fun0006_ip = 43; continue _fun0006 }
case 47:
                    var1 = var2.push;
                    var1 = var1.bind(var2)(var12);
case 43:
                    var12 = var7.bind(var8)();
                    var1 = var12.done;
                    var3 = var12;
                    if(!var1) { _fun0006_ip = 42; continue _fun0006 }
case 37:
                    var3 = var2.sort;
                    var1 = function(arg1, arg2) {
                        var1 = arg1;
                        var2 = var1.username;
                        var1 = var2.toLowerCase;
                        var3 = var1.bind(var2)();
                        var2 = var3.localeCompare;
                        var1 = arg2;
                        var4 = var1.username;
                        var1 = var4.toLowerCase;
                        var1 = var1.bind(var4)();
                        var1 = var2.bind(var3)(var1);
                        return var1;
                    };
                    var1 = var3.bind(var2)(var1);
                    var1 = {};
                    var1['users'] = var2;
                    var3 = var2.length;
                    var2 = new Array(1);
                    var2[0] = var3;
                    var1['sections'] = var2;
                    return var1;
                }
            };
            var9 = var12.bind(var8)(var9, var10);
            var10 = var9.users;
            _closure2_slot4 = var10;
            var16 = var9.sections;
            var12 = var8.useEffect;
            var9 = new Array(1);
            var9[0] = var3;
            var3 = function() {
                var3 = _closure1_slot1;
                var2 = _closure1_slot2;
                var1 = 11;
                var2 = var2[var1];
                var1 = undefined;
                var5 = var3.bind(var1)(var2);
                var4 = var5.fetchGuildBansBatch;
                var3 = _closure2_slot0;
                var2 = 1000;
                var1 = null;
                var1 = var4.bind(var5)(var3, var2, var1);
                var1 = function() {
                    var3 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var1 = 12;
                    var2 = var2[var1];
                    var1 = undefined;
                    var4 = var3.bind(var1)(var2);
                    var3 = var4.setSearchQuery;
                    var2 = '';
                    var2 = var3.bind(var4)(var2);
                    return var1;
                };
                return var1;
            };
            var3 = var12.bind(var8)(var3, var9);
            var9 = var8.useCallback;
            var3 = new Array(3);
            var3[0] = var7;
            var3[1] = var2;
            var3[2] = var10;
            var2 = function(arg1, arg2) {
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                    var9 = arg2;
                    var1 = _closure2_slot4;
                    var12 = var1[var9];
                    var _closure3_slot0 = var12;
                    var1 = _closure2_slot2;
                    var13 = null;
                    var2 = var13 == var1;
                    var5 = undefined;
                    var1 = undefined;
                    if(var2) { _fun0007_ip = 28; continue _fun0007 }
case 48:
                    var4 = _closure2_slot2;
                    var3 = var4.get;
                    var2 = var12.id;
                    var1 = var3.bind(var4)(var2);
case 28:
                    var _closure3_slot1 = var1;
                    var2 = var13 == var1;
                    var1 = null;
                    if(var2) { _fun0007_ip = 27; continue _fun0007 }
case 49:
                    var4 = _closure1_slot10;
                    var14 = _closure1_slot0;
                    var15 = _closure1_slot2;
                    var2 = 13;
                    var2 = var15[var2];
                    var2 = var14.bind(var5)(var2);
                    var3 = var2.TableRow;
                    var2 = {};
                    var8 = 0;
                    var8 = var8 === var9;
                    var2['start'] = var8;
                    var8 = _closure2_slot4;
                    var10 = var8.length;
                    var8 = 1;
                    var8 = var10 - var8;
                    var8 = var9 === var8;
                    var2['end'] = var8;
                    var9 = _closure1_slot1;
                    var10 = 14;
                    var8 = var15[var10];
                    var9 = var9.bind(var5)(var8);
                    var8 = {};
                    var10 = var15[var10];
                    var10 = var14.bind(var5)(var10);
                    var10 = var10.AvatarSizes;
                    var10 = var10.SMALL;
                    var8['size'] = var10;
                    var8['user'] = var12;
                    var10 = _closure2_slot1;
                    var13 = var13 == var10;
                    var10 = undefined;
                    if(var13) { _fun0007_ip = 50; continue _fun0007 }
case 37:
                    var11 = _closure2_slot1;
                    var10 = var11.id;
case 50:
                    var8['guildId'] = var10;
                    var8 = var4.bind(var5)(var9, var8);
                    var2['icon'] = var8;
                    var9 = _closure1_slot1;
                    var10 = _closure1_slot2;
                    var8 = 15;
                    var8 = var10[var8];
                    var11 = var9.bind(var5)(var8);
                    var9 = var11.getUserTag;
                    var8 = {};
                    var13 = 'username';
                    var8['mode'] = var13;
                    var8 = var9.bind(var11)(var12, var8);
                    var2['label'] = var8;
                    var9 = _closure1_slot10;
                    var8 = _closure1_slot0;
                    var7 = 16;
                    var7 = var10[var7];
                    var7 = var8.bind(var5)(var7);
                    var8 = var7.TableRowArrow;
                    var7 = {};
                    var7 = var9.bind(var5)(var8, var7);
                    var2['trailing'] = var7;
                    var6 = function onPress() {
                        _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                            var1 = _closure2_slot1;
                            var8 = null;
                            if(!(var8 != var1)) { _fun0008_ip = 51; continue _fun0008 }
case 52:
                            var13 = _closure1_slot0;
                            var7 = _closure1_slot2;
                            var1 = 17;
                            var1 = var7[var1];
                            var9 = undefined;
                            var3 = var13.bind(var9)(var1);
                            var2 = var3.showSimpleActionSheet;
                            var1 = {};
                            var5 = 'GuildSettingsUnban';
                            var1['key'] = var5;
                            var5 = {};
                            var10 = 18;
                            var6 = var7[var10];
                            var6 = var13.bind(var9)(var6);
                            var15 = var6.intl;
                            var14 = var15.formatToPlainString;
                            var6 = var7[var10];
                            var6 = var13.bind(var9)(var6);
                            var6 = var6.t;
                            var12 = var6.XvAG5u;
                            var11 = {};
                            var16 = _closure3_slot0;
                            var16 = var16.username;
                            var11['user'] = var16;
                            var11 = var14.bind(var15)(var12, var11);
                            var5['title'] = var11;
                            var11 = var7[var10];
                            var11 = var13.bind(var9)(var11);
                            var12 = var11.intl;
                            var11 = var12.string;
                            var7 = var7[var10];
                            var7 = var13.bind(var9)(var7);
                            var7 = var7.t;
                            var7 = var7.9Ki66O;
                            var12 = var11.bind(var12)(var7);
                            var7 = _closure3_slot1;
                            var7 = var7.reason;
                            if(!(var8 != var7)) { _fun0008_ip = 53; continue _fun0008 }
case 54:
                            var7 = _closure3_slot1;
                            var8 = var7.reason;
                            var7 = '';
                            if(!(var7 === var8)) { _fun0008_ip = 55; continue _fun0008 }
case 53:
                            var13 = _closure1_slot0;
                            var7 = _closure1_slot2;
                            var8 = var7[var10];
                            var8 = var13.bind(var9)(var8);
                            var11 = var8.intl;
                            var8 = var11.string;
                            var7 = var7[var10];
                            var7 = var13.bind(var9)(var7);
                            var7 = var7.t;
                            var7 = var7.t+2Zcn;
                            var11 = var8.bind(var11)(var7);
                            _fun0008_ip = 56; continue _fun0008;
case 55:
                            var6 = _closure3_slot1;
                            var11 = var6.reason;
case 56:
                            var6 = global;
                            var6 = var6.HermesInternal;
                            var8 = var6.concat;
                            var7 = '';
                            var6 = ': ';
                            var6 = var8.bind(var7)(var12, var6, var11);
                            var5['subtitle'] = var6;
                            var1['header'] = var5;
                            var5 = {};
                            var8 = _closure1_slot0;
                            var4 = _closure1_slot2;
                            var6 = var4[var10];
                            var6 = var8.bind(var9)(var6);
                            var7 = var6.intl;
                            var6 = var7.string;
                            var4 = var4[var10];
                            var4 = var8.bind(var9)(var4);
                            var4 = var4.t;
                            var4 = var4.Mp6Z2t;
                            var4 = var6.bind(var7)(var4);
                            var5['label'] = var4;
                            var4 = true;
                            var5['isDestructive'] = var4;
                            var4 = function onPress() {
                                var3 = _closure1_slot1;
                                var2 = _closure1_slot2;
                                var1 = 11;
                                var2 = var2[var1];
                                var1 = undefined;
                                var5 = var3.bind(var1)(var2);
                                var4 = var5.unbanUser;
                                var2 = _closure2_slot1;
                                var3 = var2.id;
                                var2 = _closure3_slot0;
                                var2 = var2.id;
                                var2 = var4.bind(var5)(var3, var2);
                                return var1;
                            };
                            var5['onPress'] = var4;
                            var4 = new Array(1);
                            var4[0] = var5;
                            var1['options'] = var4;
                            var1 = var2.bind(var3)(var1);
case 51:
                            var1 = undefined;
                            return var1;
                        }
                    };
                    var2['onPress'] = var6;
                    var1 = var4.bind(var5)(var3, var2);
case 27:
                    return var1;
                }
            };
            var14 = var9.bind(var8)(var2, var3);
            var3 = var8.useCallback;
            var2 = function(arg1) {
                var3 = _closure1_slot1;
                var2 = _closure1_slot2;
                var1 = 12;
                var2 = var2[var1];
                var1 = undefined;
                var4 = var3.bind(var1)(var2);
                var3 = var4.setSearchQuery;
                var2 = arg1;
                var2 = var3.bind(var4)(var2);
                return var1;
            };
            var1 = new Array(0);
            var21 = var3.bind(var8)(var2, var1);
            var3 = _closure1_slot11;
            var2 = _closure1_slot12;
            var1 = {};
            if(!(var5 != var7)) { _fun0004_ip = 57; continue _fun0004 }
case 58:
            var12 = '';
            if(!(var12 === var17)) { _fun0004_ip = 59; continue _fun0004 }
case 60:
            var5 = var10.length;
            if(!(var11 !== var5)) { _fun0004_ip = 61; continue _fun0004 }
case 59:
            var8 = _closure1_slot11;
            var7 = _closure1_slot5;
            var5 = {};
            var19 = _closure1_slot13;
            var9 = var19.containerInner;
            var5['style'] = var9;
            var18 = _closure1_slot10;
            var9 = {};
            var19 = var19.searchField;
            var9['style'] = var19;
            var20 = _closure1_slot0;
            var22 = _closure1_slot2;
            var19 = 22;
            var19 = var22[var19];
            var19 = var20.bind(var4)(var19);
            var20 = var19.SearchField;
            var19 = {};
            var22 = 'md';
            var19['size'] = var22;
            var19['onChange'] = var21;
            var19 = var18.bind(var4)(var20, var19);
            var9['children'] = var19;
            var18 = var18.bind(var4)(var7, var9);
            var9 = new Array(2);
            var9[0] = var18;
            if(!(var12 !== var17)) { _fun0004_ip = 62; continue _fun0004 }
case 63:
            var10 = var10.length;
            if(!(var11 !== var10)) { _fun0004_ip = 64; continue _fun0004 }
case 62:
            var12 = _closure1_slot10;
            var11 = _closure1_slot1;
            var17 = _closure1_slot2;
            var10 = 24;
            var10 = var17[var10];
            var11 = var11.bind(var4)(var10);
            var10 = {};
            var10['sections'] = var16;
            var10['itemSize'] = var15;
            var15 = 'windowSize';
            var10['estimatedListSize'] = var15;
            var10['renderItem'] = var14;
            var10['insetEnd'] = var13;
            var10 = var12.bind(var4)(var11, var10);
            _fun0004_ip = 65; continue _fun0004;
case 64:
            var13 = _closure1_slot10;
            var12 = _closure1_slot1;
            var18 = _closure1_slot2;
            var11 = 20;
            var11 = var18[var11];
            var12 = var12.bind(var4)(var11);
            var11 = {};
            var17 = _closure1_slot0;
            var14 = 23;
            var14 = var18[var14];
            var14 = var17.bind(var4)(var14);
            var14 = var14.NoResults;
            var11['Illustration'] = var14;
            var14 = 18;
            var15 = var18[var14];
            var15 = var17.bind(var4)(var15);
            var16 = var15.intl;
            var15 = var16.string;
            var14 = var18[var14];
            var14 = var17.bind(var4)(var14);
            var14 = var14.t;
            var14 = var14.z3cK5u;
            var14 = var15.bind(var16)(var14);
            var11['body'] = var14;
            var10 = var13.bind(var4)(var12, var11);
case 65:
            var9[1] = var10;
            var5['children'] = var9;
            var7 = var8.bind(var4)(var7, var5);
            _fun0004_ip = 66; continue _fun0004;
case 61:
            var9 = _closure1_slot10;
            var8 = _closure1_slot1;
            var14 = _closure1_slot2;
            var5 = 20;
            var5 = var14[var5];
            var8 = var8.bind(var4)(var5);
            var5 = {};
            var13 = _closure1_slot0;
            var10 = 21;
            var10 = var14[var10];
            var10 = var13.bind(var4)(var10);
            var10 = var10.BansEmpty;
            var5['Illustration'] = var10;
            var10 = 18;
            var11 = var14[var10];
            var11 = var13.bind(var4)(var11);
            var15 = var11.intl;
            var12 = var15.string;
            var11 = var14[var10];
            var11 = var13.bind(var4)(var11);
            var11 = var11.t;
            var11 = var11.ZEiY1N;
            var11 = var12.bind(var15)(var11);
            var5['title'] = var11;
            var11 = var14[var10];
            var11 = var13.bind(var4)(var11);
            var12 = var11.intl;
            var11 = var12.string;
            var10 = var14[var10];
            var10 = var13.bind(var4)(var10);
            var10 = var10.t;
            var10 = var10.zfCsAw;
            var10 = var11.bind(var12)(var10);
            var5['body'] = var10;
            var7 = var9.bind(var4)(var8, var5);
case 66:
            _fun0004_ip = 67; continue _fun0004;
case 57:
            var9 = _closure1_slot10;
            var8 = _closure1_slot0;
            var10 = _closure1_slot2;
            var5 = 19;
            var5 = var10[var5];
            var5 = var8.bind(var4)(var5);
            var8 = var5.SceneLoadingIndicator;
            var5 = {};
            var7 = var9.bind(var4)(var8, var5);
case 67:
            var5 = new Array(2);
            var5[0] = var7;
            var8 = _closure1_slot10;
            var7 = _closure1_slot0;
            var9 = _closure1_slot2;
            var6 = 25;
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