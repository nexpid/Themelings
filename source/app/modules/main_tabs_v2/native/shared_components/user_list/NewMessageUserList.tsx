// app/modules/main_tabs_v2/native/shared_components/user_list/NewMessageUserList.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var8 = require;
    var14 = metroImportDefault;
    var3 = exports;
    var9 = dependencyMap;
    var _closure1_slot0 = var8;
    var _closure1_slot1 = var14;
    var _closure1_slot2 = var9;
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
            var9 = _closure1_slot16;
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
            var7 = _closure1_slot16;
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
    var _closure1_slot15 = var1;
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
    var _closure1_slot16 = var1;
    var1 = function matchGroupDMRecipients(arg1, arg2) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var13 = arg1;
            var2 = _closure1_slot15;
            var1 = arg2;
            var1 = var1.recipients;
            var11 = undefined;
            var10 = var2.bind(var11)(var1);
            var2 = var10.bind(var11)();
            var1 = var2.done;
            var9 = 10;
            var8 = null;
            var7 = 11;
            var6 = var2;
            var5 = undefined;
            var4 = undefined;
            var3 = undefined;
            var2 = undefined;
            if(var1) { _fun0004_ip = 36; continue _fun0004 }
case 37:
            var15 = var6.value;
            var14 = _closure1_slot8;
            var1 = var14.getUser;
            var1 = var1.bind(var14)(var15);
            if(!(var8 != var1)) { _fun0004_ip = 38; continue _fun0004 }
case 39:
            var15 = var1.username;
            var14 = var15.toLocaleLowerCase;
            var15 = var14.bind(var15)();
            var16 = _closure1_slot1;
            var14 = _closure1_slot2;
            var14 = var14[var9];
            var14 = var16.bind(var11)(var14);
            var14 = var14.bind(var11)(var13, var15);
            if(var14) { _fun0004_ip = 40; continue _fun0004 }
case 41:
            var15 = _closure1_slot1;
            var14 = _closure1_slot2;
            var14 = var14[var7];
            var15 = var15.bind(var11)(var14);
            var14 = var15.getGlobalName;
            var17 = var14.bind(var15)(var1);
            var14 = var8 == var17;
            var15 = undefined;
            if(var14) { _fun0004_ip = 42; continue _fun0004 }
case 43:
            var14 = var17.toLocaleLowerCase;
            var15 = var14.bind(var17)();
case 42:
            if(!(var8 != var15)) { _fun0004_ip = 44; continue _fun0004 }
case 45:
            var16 = _closure1_slot1;
            var14 = _closure1_slot2;
            var14 = var14[var9];
            var14 = var16.bind(var11)(var14);
            var14 = var14.bind(var11)(var13, var15);
            if(var14) { _fun0004_ip = 27; continue _fun0004 }
case 44:
            var16 = _closure1_slot7;
            var14 = var16.getNickname;
            var1 = var1.id;
            var16 = var14.bind(var16)(var1);
            var1 = var8 == var16;
            var14 = undefined;
            if(var1) { _fun0004_ip = 23; continue _fun0004 }
case 46:
            var1 = var16.toLocaleLowerCase;
            var14 = var1.bind(var16)();
case 23:
            var5 = var17;
            var4 = var16;
            var3 = var15;
            var2 = var14;
            if(!(var8 != var14)) { _fun0004_ip = 38; continue _fun0004 }
case 47:
            var18 = _closure1_slot1;
            var1 = _closure1_slot2;
            var1 = var1[var9];
            var1 = var18.bind(var11)(var1);
            var1 = var1.bind(var11)(var13, var14);
            var5 = var17;
            var4 = var16;
            var3 = var15;
            var2 = var14;
            if(var1) { _fun0004_ip = 48; continue _fun0004 }
case 38:
            var14 = var10.bind(var11)();
            var1 = var14.done;
            var6 = var14;
            if(var1) { _fun0004_ip = 36; continue _fun0004 }
case 49:
            _fun0004_ip = 37; continue _fun0004;
case 48:
            var1 = 1;
            return var1;
case 27:
            var1 = 1;
            return var1;
case 40:
            var1 = 1;
            return var1;
case 36:
            var1 = 0;
            return var1;
        }
    };
    var _closure1_slot17 = var1;
    var5 = function matchGroupDM(arg1, arg2) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
            var6 = arg1;
            var5 = arg2;
            var1 = '';
            if(!(var1 !== var5)) { _fun0005_ip = 50; continue _fun0005 }
case 32:
            var2 = _closure1_slot0;
            var4 = _closure1_slot2;
            var1 = 12;
            var1 = var4[var1];
            var4 = undefined;
            var8 = var2.bind(var4)(var1);
            var7 = var8.computeChannelName;
            var2 = _closure1_slot8;
            var1 = _closure1_slot7;
            var2 = var7.bind(var8)(var6, var2, var1);
            var1 = var2.toLocaleLowerCase;
            var7 = var1.bind(var2)();
            var1 = var7.startsWith;
            var2 = var1.bind(var7)(var5);
            var1 = 3;
            if(var2) { _fun0005_ip = 51; continue _fun0005 }
case 39:
            var8 = _closure1_slot1;
            var9 = _closure1_slot2;
            var2 = 10;
            var2 = var9[var2];
            var2 = var8.bind(var4)(var2);
            var7 = var2.bind(var4)(var5, var7);
            var2 = 2;
            if(var7) { _fun0005_ip = 52; continue _fun0005 }
case 53:
            var3 = _closure1_slot17;
            var2 = var3.bind(var4)(var5, var6);
case 52:
            var1 = var2;
case 51:
            return var1;
case 50:
            var1 = 0;
            return var1;
        }
    };
    var _closure1_slot18 = var5;
    var1 = function isMatchNewMessageUserListGroupDM(arg1, arg2, arg3) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
            var4 = arg1;
            var6 = arg2;
            var3 = arg3;
            var1 = '';
            if(!(var1 !== var3)) { _fun0006_ip = 54; continue _fun0006 }
case 55:
            var1 = var6.length;
            var8 = 0;
            if(!(var8 !== var1)) { _fun0006_ip = 56; continue _fun0006 }
case 34:
            var5 = _closure1_slot15;
            var2 = undefined;
            var7 = var5.bind(var2)(var6);
            var6 = var7.bind(var2)();
            var5 = var6.done;
            if(var5) { _fun0006_ip = 57; continue _fun0006 }
case 58:
            var10 = var6.value;
            var9 = var4.recipients;
            var5 = var9.includes;
            var5 = var5.bind(var9)(var10);
            if(var5) { _fun0006_ip = 59; continue _fun0006 }
case 60:
            return var8;
case 59:
            var9 = var7.bind(var2)();
            var5 = var9.done;
            var6 = var9;
            if(!var5) { _fun0006_ip = 58; continue _fun0006 }
case 57:
            var1 = _closure1_slot17;
            var1 = var1.bind(var2)(var3, var4);
            return var1;
case 56:
            var2 = _closure1_slot18;
            var1 = undefined;
            var1 = var2.bind(var1)(var4, var3);
            return var1;
case 54:
            var1 = 0;
            return var1;
        }
    };
    var _closure1_slot19 = var1;
    var4 = function filterGroupDMs(arg1) {
        var2 = arg1;
        var1 = var2.isGroupDM;
        var1 = var1.bind(var2)();
        return var1;
    };
    var _closure1_slot20 = var4;
    var2 = function useSearchGDMNames(arg1, arg2, arg3) {
        var8 = arg1;
        var7 = arg2;
        var6 = arg3;
        var _closure2_slot0 = var8;
        var _closure2_slot1 = var7;
        var _closure2_slot2 = var6;
        var5 = _closure1_slot4;
        var4 = var5.useState;
        var1 = new Array(0);
        var9 = var4.bind(var5)(var1);
        var5 = _closure1_slot3;
        var4 = undefined;
        var1 = 2;
        var5 = var5.bind(var4)(var9, var1);
        var1 = 0;
        var1 = var5[var1];
        var4 = 1;
        var4 = var5[var4];
        var _closure2_slot3 = var4;
        var5 = _closure1_slot4;
        var4 = var5.useEffect;
        var3 = new Array(3);
        var3[0] = var8;
        var3[1] = var7;
        var3[2] = var6;
        var2 = function() {
            _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                var3 = _closure2_slot0;
                if(var3) { _fun0007_ip = 61; continue _fun0007 }
case 62:
                var5 = _closure2_slot3;
                var4 = _closure1_slot13;
                var3 = undefined;
                var3 = var5.bind(var3)(var4);
                _fun0007_ip = 63; continue _fun0007;
case 61:
                var4 = _closure2_slot2;
                var3 = '';
                if(!(var3 === var4)) { _fun0007_ip = 35; continue _fun0007 }
case 64:
                var5 = _closure2_slot3;
                var4 = _closure1_slot13;
                var3 = undefined;
                var3 = var5.bind(var3)(var4);
                _fun0007_ip = 63; continue _fun0007;
case 35:
                var4 = _closure2_slot2;
                var3 = var4.toLocaleLowerCase;
                var3 = var3.bind(var4)();
                var _closure3_slot0 = var3;
                var3 = global;
                var6 = var3.Object;
                var5 = var6.values;
                var7 = _closure1_slot6;
                var4 = var7.getMutablePrivateChannels;
                var4 = var4.bind(var7)();
                var6 = var5.bind(var6)(var4);
                var5 = var6.filter;
                var4 = _closure1_slot20;
                var6 = var5.bind(var6)(var4);
                var5 = var6.map;
                var4 = function(arg1) {
                    var6 = arg1;
                    var1 = new Array(2);
                    var1[0] = var6;
                    var5 = _closure1_slot19;
                    var4 = _closure2_slot1;
                    var3 = _closure3_slot0;
                    var2 = undefined;
                    var2 = var5.bind(var2)(var6, var4, var3);
                    var1[1] = var2;
                    return var1;
                };
                var6 = var5.bind(var6)(var4);
                var5 = var6.filter;
                var4 = function(arg1) {
                    _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                        var4 = arg1;
                        var1 = var4[Symbol.iterator];
                        var4 = var1().next;
                        var2 = var4().value;
                        var2 = var1;
                        var6 = undefined;
                        var3 = var2 === var6;
                        var2 = undefined;
                        if(var3) { _fun0008_ip = 5; continue _fun0008 }
case 65:
                        var5 = var4().value;
                        var4 = var1;
                        var4 = var4 === var6;
                        var2 = undefined;
                        var3 = var4;
                        if(var4) { _fun0008_ip = 5; continue _fun0008 }
case 66:
                        var2 = var5;
                        var3 = var4;
case 5:
                        if(var3) { _fun0008_ip = 4; continue _fun0008 }
case 67:
                        var1.return();
case 4:
                        var1 = 0;
                        var1 = var2 > var1;
                        return var1;
                    }
                };
                var7 = var5.bind(var6)(var4);
                var5 = _closure1_slot1;
                var4 = _closure1_slot2;
                var3 = 13;
                var4 = var4[var3];
                var3 = undefined;
                var6 = var5.bind(var3)(var4);
                var5 = var6.sortBy;
                var4 = function(arg1) {
                    _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                        var4 = arg1;
                        var2 = var4[Symbol.iterator];
                        var4 = var2().next;
                        var1 = var4().value;
                        var1 = var2;
                        var6 = undefined;
                        var3 = var1 === var6;
                        var1 = undefined;
                        if(var3) { _fun0009_ip = 5; continue _fun0009 }
case 65:
                        var5 = var4().value;
                        var4 = var2;
                        var4 = var4 === var6;
                        var1 = undefined;
                        var3 = var4;
                        if(var4) { _fun0009_ip = 5; continue _fun0009 }
case 66:
                        var1 = var5;
                        var3 = var4;
case 5:
                        if(var3) { _fun0009_ip = 4; continue _fun0009 }
case 67:
                        var2.return();
case 4:
                        var1 = -var1;
                        return var1;
                    }
                };
                var5 = var5.bind(var6)(var7, var4);
                var4 = var5.map;
                var2 = function(arg1) {
                    _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
                        var1 = arg1;
                        var2 = var1[Symbol.iterator];
                        var1 = var2().next;
                        var4 = var1().value;
                        var3 = var2;
                        var1 = undefined;
                        var3 = var3 === var1;
                        if(var3) { _fun0010_ip = 68; continue _fun0010 }
case 69:
                        var1 = var4;
case 68:
                        if(var3) { _fun0010_ip = 70; continue _fun0010 }
case 34:
                        var2.return();
case 70:
                        return var1;
                    }
                };
                var2 = var4.bind(var5)(var2);
                var1 = _closure2_slot3;
                var1 = var1.bind(var3)(var2);
case 63:
                var1 = undefined;
                return var1;
            }
        };
        var2 = var4.bind(var5)(var2, var3);
        return var1;
    };
    var _closure1_slot21 = var2;
    var1 = global;
    var11 = var1.Object;
    var10 = var11.defineProperty;
    var7 = {};
    var1 = true;
    var7['value'] = var1;
    var1 = '__esModule';
    var1 = var10.bind(var11)(var3, var1, var7);
    var1 = 0;
    var7 = var9[var1];
    var1 = undefined;
    var7 = var14.bind(var1)(var7);
    var _closure1_slot3 = var7;
    var15 = 1;
    var10 = var9[var15];
    var7 = metroImportAll;
    var7 = var7.bind(var1)(var10);
    var _closure1_slot4 = var7;
    var7 = 2;
    var7 = var9[var7];
    var7 = var8.bind(var1)(var7);
    var7 = var7.View;
    var _closure1_slot5 = var7;
    var7 = 3;
    var7 = var9[var7];
    var7 = var14.bind(var1)(var7);
    var _closure1_slot6 = var7;
    var7 = 4;
    var7 = var9[var7];
    var7 = var14.bind(var1)(var7);
    var _closure1_slot7 = var7;
    var7 = 5;
    var7 = var9[var7];
    var7 = var14.bind(var1)(var7);
    var _closure1_slot8 = var7;
    var7 = 6;
    var7 = var9[var7];
    var7 = var8.bind(var1)(var7);
    var7 = var7.UserRowModes;
    var _closure1_slot9 = var7;
    var7 = 7;
    var7 = var9[var7];
    var7 = var8.bind(var1)(var7);
    var10 = var7.jsx;
    var _closure1_slot10 = var10;
    var10 = var7.Fragment;
    var _closure1_slot11 = var10;
    var7 = var7.jsxs;
    var _closure1_slot12 = var7;
    var7 = new Array(0);
    var _closure1_slot13 = var7;
    var7 = 8;
    var7 = var9[var7];
    var11 = var8.bind(var1)(var7);
    var10 = var11.createStyles;
    var7 = {};
    var12 = {};
    var13 = 9;
    var16 = var9[var13];
    var16 = var14.bind(var1)(var16);
    var16 = var16.spacing;
    var16 = var16.PX_8;
    var12['paddingTop'] = var16;
    var7['searchBarRowContainer'] = var12;
    var12 = {};
    var12['flex'] = var15;
    var13 = var9[var13];
    var13 = var14.bind(var1)(var13);
    var13 = var13.colors;
    var13 = var13.BG_BASE_SECONDARY;
    var12['backgroundColor'] = var13;
    var7['noResults'] = var12;
    var7 = var10.bind(var11)(var7);
    var _closure1_slot14 = var7;
    var7 = 21;
    var7 = var9[var7];
    var9 = var8.bind(var1)(var7);
    var8 = var9.fileFinishedImporting;
    var7 = 'modules/main_tabs_v2/native/shared_components/user_list/NewMessageUserList.tsx';
    var7 = var8.bind(var9)(var7);
    var6 = function NewMessageUserList(arg1) {
        _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
            var1 = arg1;
            var11 = var1.selectedUserIds;
            var _closure2_slot0 = var11;
            var22 = var1.disabledUserIds;
            var _closure2_slot1 = var22;
            var12 = var1.onSelectUser;
            var _closure2_slot2 = var12;
            var3 = var1.onQueryChanged;
            var _closure2_slot3 = var3;
            var33 = var1.actions;
            var4 = undefined;
            if(!(var33 === var4)) { _fun0011_ip = 7; continue _fun0011 }
case 71:
            var33 = new Array(0);
case 7:
            var34 = var1.noResultActions;
            var7 = var1.rowMode;
            if(!(var7 === var4)) { _fun0011_ip = 72; continue _fun0011 }
case 73:
            var5 = _closure1_slot9;
            var7 = var5.ACTIONS;
case 72:
            var _closure2_slot4 = var7;
            var9 = var1.tagListInputRef;
            var17 = var1.autoFocusSearch;
            if(!(var17 === var4)) { _fun0011_ip = 74; continue _fun0011 }
case 13:
            var17 = false;
case 74:
            var32 = var1.withGuildMembers;
            if(!(var32 === var4)) { _fun0011_ip = 54; continue _fun0011 }
case 75:
            var32 = false;
case 54:
            var31 = var1.withAffinitySuggestions;
            if(!(var31 === var4)) { _fun0011_ip = 76; continue _fun0011 }
case 50:
            var31 = true;
case 76:
            var29 = var1.withFriends;
            if(!(var29 === var4)) { _fun0011_ip = 77; continue _fun0011 }
case 78:
            var29 = true;
case 77:
            var30 = var1.withGameFriends;
            if(!(var30 === var4)) { _fun0011_ip = 79; continue _fun0011 }
case 15:
            var30 = true;
case 79:
            var26 = var1.withFriendRequests;
            if(!(var26 === var4)) { _fun0011_ip = 80; continue _fun0011 }
case 81:
            var26 = false;
case 80:
            var24 = var1.withFriendRequestsIncoming;
            if(!(var24 === var4)) { _fun0011_ip = 82; continue _fun0011 }
case 45:
            var24 = false;
case 82:
            var23 = var1.withFriendRequestsOutgoing;
            if(!(var23 === var4)) { _fun0011_ip = 83; continue _fun0011 }
case 84:
            var23 = false;
case 83:
            var27 = var1.withFriendSuggestions;
            if(!(var27 === var4)) { _fun0011_ip = 44; continue _fun0011 }
case 85:
            var27 = false;
case 44:
            var21 = var1.withGDMNames;
            if(!(var21 === var4)) { _fun0011_ip = 86; continue _fun0011 }
case 87:
            var21 = false;
case 86:
            var25 = var1.defaultNoResultsFound;
            var6 = var1.overrideResults;
            var10 = var1.forceSearchResults;
            var13 = var1.onForceSearchResults;
            var14 = var1.onSearchFocus;
            var _closure2_slot5 = var4;
            var _closure2_slot6 = var4;
            var _closure2_slot7 = var4;
            var _closure2_slot8 = var4;
            var _closure2_slot9 = var4;
            var1 = _closure1_slot14;
            var28 = var1.bind(var4)();
            var15 = _closure1_slot4;
            var8 = var15.useState;
            var1 = '';
            var15 = var8.bind(var15)(var1);
            var8 = _closure1_slot3;
            var1 = 2;
            var16 = var8.bind(var4)(var15, var1);
            var8 = 0;
            var1 = var16[var8];
            var15 = 1;
            var15 = var16[var15];
            _closure2_slot5 = var15;
            var18 = _closure1_slot4;
            var16 = var18.useCallback;
            var15 = new Array(1);
            var15[0] = var3;
            var3 = function(arg1) {
                _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
case 0:
                    var3 = arg1;
                    var4 = _closure2_slot5;
                    var1 = undefined;
                    var4 = var4.bind(var1)(var3);
                    var5 = _closure2_slot3;
                    var4 = null;
                    if(!(var4 != var5)) { _fun0012_ip = 88; continue _fun0012 }
case 89:
                    var2 = _closure2_slot3;
                    var2 = var2.bind(var1)(var3);
case 88:
                    return var1;
                }
            };
            var15 = var16.bind(var18)(var3, var15);
            var3 = var1.trim;
            var20 = var3.bind(var1)();
            var3 = var20.length;
            var16 = var3 > var8;
            var19 = _closure1_slot1;
            var3 = _closure1_slot2;
            var18 = 14;
            var18 = var3[var18];
            var19 = var19.bind(var4)(var18);
            var18 = {};
            var18['query'] = var20;
            var18['withGuildMembers'] = var32;
            var18['withAffinitySuggestions'] = var31;
            var18['withFriends'] = var29;
            var18['withGameFriends'] = var30;
            var18['withFriendSuggestions'] = var27;
            var18['withFriendRequests'] = var26;
            var18['withFriendRequestsIncoming'] = var24;
            var18['withFriendRequestsOutgoing'] = var23;
            var23 = true;
            var18['excludeCurrentUser'] = var23;
            var18 = var19.bind(var4)(var18);
            _closure2_slot6 = var18;
            var19 = _closure1_slot21;
            var23 = var19.bind(var4)(var21, var11, var20);
            _closure2_slot7 = var23;
            var21 = _closure1_slot4;
            var20 = var21.useMemo;
            var19 = new Array(2);
            var19[0] = var23;
            var19[1] = var18;
            var18 = function() {
                _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
case 0:
                    var5 = _closure2_slot6;
                    var4 = var5.map;
                    var1 = function(arg1) {
                        var2 = arg1;
                        var1 = {};
                        var3 = var2.title;
                        var1['title'] = var3;
                        var4 = var2.items;
                        var3 = var4.map;
                        var2 = function(arg1) {
                            var1 = {};
                            var2 = 'UserSearchItem';
                            var1['type'] = var2;
                            var2 = arg1;
                            var1['data'] = var2;
                            return var1;
                        };
                        var2 = var3.bind(var4)(var2);
                        var1['items'] = var2;
                        return var1;
                    };
                    var1 = var4.bind(var5)(var1);
                    var4 = _closure2_slot7;
                    var4 = var4.length;
                    var5 = 0;
                    if(!(var5 !== var4)) { _fun0013_ip = 90; continue _fun0013 }
case 91:
                    var4 = {};
                    var10 = _closure1_slot0;
                    var11 = _closure1_slot2;
                    var6 = 15;
                    var7 = var11[var6];
                    var9 = undefined;
                    var7 = var10.bind(var9)(var7);
                    var8 = var7.intl;
                    var7 = var8.string;
                    var6 = var11[var6];
                    var6 = var10.bind(var9)(var6);
                    var6 = var6.t;
                    var6 = var6.qGlQra;
                    var6 = var7.bind(var8)(var6);
                    var4['title'] = var6;
                    var8 = _closure2_slot7;
                    var7 = var8.map;
                    var6 = function(arg1) {
                        var1 = {};
                        var2 = 'GroupDMChannelRecord';
                        var1['type'] = var2;
                        var2 = arg1;
                        var1['data'] = var2;
                        return var1;
                    };
                    var6 = var7.bind(var8)(var6);
                    var4['items'] = var6;
                    var6 = _closure2_slot6;
                    var3 = var6.findIndex;
                    var2 = function(arg1) {
                        var1 = arg1;
                        var2 = var1.title;
                        var6 = _closure1_slot0;
                        var7 = _closure1_slot2;
                        var1 = 15;
                        var3 = var7[var1];
                        var5 = undefined;
                        var3 = var6.bind(var5)(var3);
                        var4 = var3.intl;
                        var3 = var4.string;
                        var1 = var7[var1];
                        var1 = var6.bind(var5)(var1);
                        var1 = var1.t;
                        var1 = var1.y29JXl;
                        var1 = var3.bind(var4)(var1);
                        var1 = var2 === var1;
                        return var1;
                    };
                    var7 = var3.bind(var6)(var2);
                    var2 = -1;
                    if(!(var2 !== var7)) { _fun0013_ip = 92; continue _fun0013 }
case 43:
                    var2 = var1.slice;
                    var13 = var2.bind(var1)(var5, var7);
                    var2 = new Array(1);
                    var14 = var2;
                    var12 = 0;
                    var6 = arraySpread(var14, var13, var12);
                    var2[var6] = var4;
                    var3 = 1;
                    var12 = var6 + var3;
                    var3 = var1.slice;
                    var13 = var3.bind(var1)(var7);
                    var14 = var2;
                    var3 = arraySpread(var14, var13, var12);
                    _fun0013_ip = 93; continue _fun0013;
case 92:
                    var3 = new Array(1);
                    var14 = var3;
                    var13 = var1;
                    var12 = 0;
                    var5 = arraySpread(var14, var13, var12);
                    var3[var5] = var4;
                    var4 = 1;
                    var4 = var5 + var4;
                    var2 = var3;
case 93:
                    return var2;
case 90:
                    return var1;
                }
            };
            var24 = var20.bind(var21)(var18, var19);
            _closure2_slot8 = var24;
            var21 = _closure1_slot4;
            var20 = var21.useMemo;
            var19 = new Array(1);
            var19[0] = var24;
            var18 = function() {
                var3 = _closure2_slot8;
                var2 = var3.map;
                var1 = function(arg1) {
                    var1 = arg1;
                    var1 = var1.items;
                    var1 = var1.length;
                    return var1;
                };
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var23 = var20.bind(var21)(var18, var19);
            var21 = _closure1_slot4;
            var20 = var21.useCallback;
            var19 = new Array(1);
            var19[0] = var24;
            var18 = function(arg1) {
                var1 = {};
                var2 = 'section';
                var1['type'] = var2;
                var2 = {};
                var4 = _closure2_slot8;
                var3 = arg1;
                var3 = var4[var3];
                var3 = var3.title;
                var2['title'] = var3;
                var1['props'] = var2;
                return var1;
            };
            var21 = var20.bind(var21)(var18, var19);
            var20 = _closure1_slot4;
            var19 = var20.useCallback;
            var18 = new Array(5);
            var18[0] = var24;
            var18[1] = var11;
            var18[2] = var12;
            var18[3] = var22;
            var18[4] = var7;
            var7 = function(arg1, arg2) {
                _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
case 0:
                    var5 = arg1;
                    var3 = arg2;
                    var1 = _closure2_slot8;
                    var1 = var1[var5];
                    var1 = var1.items;
                    var1 = var1[var3];
                    var2 = 0;
                    var4 = var2 === var3;
                    var2 = _closure2_slot8;
                    var2 = var2[var5];
                    var2 = var2.items;
                    var5 = var2.length;
                    var2 = 1;
                    var2 = var5 - var2;
                    var3 = var3 === var2;
                    var5 = var1.type;
                    var2 = 'UserSearchItem';
                    if(!(var2 !== var5)) { _fun0014_ip = 94; continue _fun0014 }
case 60:
                    var5 = var1.type;
                    var2 = 'GroupDMChannelRecord';
                    if(!(var2 !== var5)) { _fun0014_ip = 57; continue _fun0014 }
case 95:
                    var2 = undefined;
                    return var2;
case 57:
                    var2 = {};
                    var5 = 'gdm';
                    var2['type'] = var5;
                    var5 = {};
                    var6 = var1.data;
                    var5['channel'] = var6;
                    var6 = _closure2_slot2;
                    var5['onPress'] = var6;
                    var6 = true;
                    var5['arrow'] = var6;
                    var5['start'] = var4;
                    var5['end'] = var3;
                    var2['props'] = var5;
                    return var2;
case 94:
                    var1 = var1.data;
                    var6 = var1.type;
                    var5 = var1.user;
                    var11 = var1.firstMatch;
                    var8 = _closure2_slot0;
                    var2 = var8.includes;
                    var1 = var5.id;
                    var8 = var2.bind(var8)(var1);
                    var1 = {};
                    var2 = 'user';
                    var1['type'] = var2;
                    var2 = {};
                    var2['type'] = var6;
                    var2['user'] = var5;
                    var6 = null;
                    var12 = var6 == var11;
                    var10 = undefined;
                    var9 = undefined;
                    if(var12) { _fun0014_ip = 21; continue _fun0014 }
case 86:
                    var12 = var5.username;
                    var9 = undefined;
                    if(!(var12 !== var11)) { _fun0014_ip = 21; continue _fun0014 }
case 96:
                    var9 = var11;
case 21:
                    var2['nickname'] = var9;
                    var9 = _closure2_slot2;
                    var2['onPress'] = var9;
                    var9 = _closure2_slot1;
                    var11 = var6 == var9;
                    var9 = undefined;
                    if(var11) { _fun0014_ip = 97; continue _fun0014 }
case 98:
                    var13 = _closure2_slot1;
                    var12 = var13.includes;
                    var11 = var5.id;
                    var9 = var12.bind(var13)(var11);
case 97:
                    var6 = var6 != var9;
                    if(!var6) { _fun0014_ip = 25; continue _fun0014 }
case 99:
                    var6 = var9;
case 25:
                    var2['disabled'] = var6;
                    var2['selected'] = var8;
                    var12 = _closure1_slot7;
                    var11 = var12.isFriend;
                    var9 = var5.id;
                    var9 = var11.bind(var12)(var9);
                    if(!var9) { _fun0014_ip = 100; continue _fun0014 }
case 101:
                    if(var8) { _fun0014_ip = 102; continue _fun0014 }
case 100:
                    var7 = _closure2_slot4;
                    _fun0014_ip = 103; continue _fun0014;
case 102:
                    var8 = _closure1_slot9;
                    var7 = var8.TOGGLE;
case 103:
                    var2['mode'] = var7;
                    var9 = _closure1_slot10;
                    var8 = _closure1_slot0;
                    var13 = _closure1_slot2;
                    var7 = 16;
                    var7 = var13[var7];
                    var7 = var8.bind(var10)(var7);
                    var8 = var7.Text;
                    var7 = {'variant': 'text-xs/medium', 'color': 'text-muted'};
                    var12 = _closure1_slot1;
                    var11 = 11;
                    var11 = var13[var11];
                    var12 = var12.bind(var10)(var11);
                    var11 = var12.getUserTag;
                    var11 = var11.bind(var12)(var5);
                    var7['children'] = var11;
                    var7 = var9.bind(var10)(var8, var7);
                    var2['subLabel'] = var7;
                    var7 = _closure1_slot7;
                    var6 = var7.isFriend;
                    var5 = var5.id;
                    var5 = var6.bind(var7)(var5);
                    var5 = !var5;
                    var2['arrow'] = var5;
                    var2['start'] = var4;
                    var2['end'] = var3;
                    var1['props'] = var2;
                    return var1;
                }
            };
            var22 = var19.bind(var20)(var7, var18);
            var18 = _closure1_slot4;
            var7 = var18.useRef;
            var35 = null;
            var24 = var7.bind(var18)(var35);
            _closure2_slot9 = var24;
            var7 = _closure1_slot0;
            var36 = 17;
            var3 = var3[var36];
            var18 = var7.bind(var4)(var3);
            var7 = var18.useUserListActionsProps;
            var3 = {};
            var19 = undefined;
            if(var16) { _fun0011_ip = 104; continue _fun0011 }
case 105:
            var19 = var33;
case 104:
            var3['actions'] = var19;
            var19 = undefined;
            if(var16) { _fun0011_ip = 106; continue _fun0011 }
case 107:
            var19 = undefined;
            if(!var29) { _fun0011_ip = 106; continue _fun0011 }
case 108:
            var19 = var28.searchBarRowContainer;
case 106:
            var3['style'] = var19;
            var3 = var7.bind(var18)(var3);
            var20 = var3.headerSize;
            var19 = var3.renderHeader;
            var26 = _closure1_slot4;
            var18 = var26.useLayoutEffect;
            var7 = new Array(1);
            var7[0] = var1;
            var3 = function() {
                _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
case 0:
                    var1 = _closure2_slot9;
                    var3 = var1.current;
                    var1 = null;
                    if(!(var1 != var3)) { _fun0015_ip = 70; continue _fun0015 }
case 109:
                    var2 = var3.scrollToTop;
                    var1 = false;
                    var1 = var2.bind(var3)(var1);
case 70:
                    var1 = undefined;
                    return var1;
                }
            };
            var3 = var18.bind(var26)(var3, var7);
            var3 = var23.some;
            var2 = function(arg1) {
                var2 = arg1;
                var1 = 0;
                var1 = var2 > var1;
                return var1;
            };
            var18 = var3.bind(var23)(var2);
            var1 = var1.length;
            var1 = var8 === var1;
            if(!var1) { _fun0011_ip = 110; continue _fun0011 }
case 111:
            var1 = var35 != var25;
case 110:
            if(!(var35 == var6)) { _fun0011_ip = 112; continue _fun0011 }
case 113:
            var7 = _closure1_slot10;
            if(var18) { _fun0011_ip = 114; continue _fun0011 }
case 115:
            var2 = _closure1_slot5;
            var3 = {};
            var27 = var28.noResults;
            if(var1) { _fun0011_ip = 116; continue _fun0011 }
case 117:
            var3['style'] = var27;
            var30 = _closure1_slot10;
            var26 = _closure1_slot1;
            var31 = _closure1_slot2;
            var1 = 19;
            var1 = var31[var1];
            var26 = var26.bind(var4)(var1);
            var1 = {};
            var32 = _closure1_slot0;
            var37 = 15;
            var38 = var31[var37];
            var38 = var32.bind(var4)(var38);
            var40 = var38.intl;
            var39 = var40.string;
            var38 = var31[var37];
            var38 = var32.bind(var4)(var38);
            var38 = var38.t;
            var38 = var38.sPAvXV;
            var38 = var39.bind(var40)(var38);
            var1['title'] = var38;
            var38 = var31[var37];
            var38 = var32.bind(var4)(var38);
            var39 = var38.intl;
            var38 = var39.string;
            var37 = var31[var37];
            var37 = var32.bind(var4)(var37);
            var37 = var37.t;
            var37 = var37.nQ05z8;
            var37 = var38.bind(var39)(var37);
            var1['subtitle'] = var37;
            var31 = var31[var36];
            var31 = var32.bind(var4)(var31);
            var32 = var31.UserFlashListActions;
            var31 = {};
            if(!(var35 != var34)) { _fun0011_ip = 118; continue _fun0011 }
case 119:
            var33 = var34;
case 118:
            var31['actions'] = var33;
            var31 = var30.bind(var4)(var32, var31);
            var1['children'] = var31;
            var1 = var30.bind(var4)(var26, var1);
            var3['children'] = var1;
            var1 = var3;
            _fun0011_ip = 120; continue _fun0011;
case 116:
            var26 = new Array(2);
            var26[0] = var27;
            var27 = undefined;
            if(!var29) { _fun0011_ip = 121; continue _fun0011 }
case 122:
            var27 = var28.searchBarRowContainer;
case 121:
            var26[1] = var27;
            var3['style'] = var26;
            var3['children'] = var25;
            var1 = var3;
case 120:
            var1 = var7.bind(var4)(var2, var1);
            _fun0011_ip = 123; continue _fun0011;
case 114:
            var3 = _closure1_slot0;
            var25 = _closure1_slot2;
            var2 = 18;
            var2 = var25[var2];
            var2 = var3.bind(var4)(var2);
            var3 = var2.UsersFastList;
            var2 = {};
            var2['ref'] = var24;
            var2['sections'] = var23;
            var2['getItemProps'] = var22;
            var2['getSectionProps'] = var21;
            var2['listHeaderSize'] = var20;
            var2['renderListHeader'] = var19;
            var2['insetStart'] = var8;
            var8 = 12;
            var2['insetEnd'] = var8;
            var1 = var7.bind(var4)(var3, var2);
case 123:
            var6 = var1;
case 112:
            var3 = _closure1_slot12;
            var2 = _closure1_slot11;
            var1 = {};
            var8 = _closure1_slot10;
            var7 = _closure1_slot1;
            var19 = _closure1_slot2;
            var5 = 20;
            var5 = var19[var5];
            var7 = var7.bind(var4)(var5);
            var5 = {};
            if(!var17) { _fun0011_ip = 124; continue _fun0011 }
case 125:
            var17 = var18;
case 124:
            var5['autoFocus'] = var17;
            var5['hasQuery'] = var16;
            var5['onChangeText'] = var15;
            var5['onFocus'] = var14;
            var5['onForceSearchResults'] = var13;
            var5['onSelectUser'] = var12;
            var5['selectedUserIds'] = var11;
            var5['forceSearchResults'] = var10;
            var5['tagListInputRef'] = var9;
            var7 = var8.bind(var4)(var7, var5);
            var5 = new Array(2);
            var5[0] = var7;
            var5[1] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['default'] = var6;
    var3['matchGroupDM'] = var5;
    var3['filterGroupDMs'] = var4;
    var3['useSearchGDMNames'] = var2;
    return var1;
})();