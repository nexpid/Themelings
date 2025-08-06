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
            var9 = _closure1_slot16;
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
            var7 = _closure1_slot16;
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
    var _closure1_slot15 = var1;
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
    var _closure1_slot16 = var1;
    var1 = function matchGroupDMRecipients(arg1, arg2) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
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
            if(var1) { _fun0004_ip = 336; continue _fun0004 }
 60:
            var15 = var6.value;
            var14 = _closure1_slot8;
            var1 = var14.getUser;
            var1 = var1.bind(var14)(var15);
            if(!(var8 != var1)) { _fun0004_ip = 301; continue _fun0004 }
 87:
            var15 = var1.username;
            var14 = var15.toLocaleLowerCase;
            var15 = var14.bind(var15)();
            var16 = _closure1_slot1;
            var14 = _closure1_slot2;
            var14 = var14[var9];
            var14 = var16.bind(var11)(var14);
            var14 = var14.bind(var11)(var13, var15);
            if(var14) { _fun0004_ip = 331; continue _fun0004 }
 131:
            var15 = _closure1_slot1;
            var14 = _closure1_slot2;
            var14 = var14[var7];
            var15 = var15.bind(var11)(var14);
            var14 = var15.getGlobalName;
            var17 = var14.bind(var15)(var1);
            var14 = var8 == var17;
            var15 = undefined;
            if(var14) { _fun0004_ip = 178; continue _fun0004 }
 168:
            var14 = var17.toLocaleLowerCase;
            var15 = var14.bind(var17)();
 178:
            if(!(var8 != var15)) { _fun0004_ip = 208; continue _fun0004 }
 182:
            var16 = _closure1_slot1;
            var14 = _closure1_slot2;
            var14 = var14[var9];
            var14 = var16.bind(var11)(var14);
            var14 = var14.bind(var11)(var13, var15);
            if(var14) { _fun0004_ip = 326; continue _fun0004 }
 208:
            var16 = _closure1_slot7;
            var14 = var16.getNickname;
            var1 = var1.id;
            var16 = var14.bind(var16)(var1);
            var1 = var8 == var16;
            var14 = undefined;
            if(var1) { _fun0004_ip = 247; continue _fun0004 }
 237:
            var1 = var16.toLocaleLowerCase;
            var14 = var1.bind(var16)();
 247:
            var5 = var17;
            var4 = var16;
            var3 = var15;
            var2 = var14;
            if(!(var8 != var14)) { _fun0004_ip = 301; continue _fun0004 }
 263:
            var18 = _closure1_slot1;
            var1 = _closure1_slot2;
            var1 = var1[var9];
            var1 = var18.bind(var11)(var1);
            var1 = var1.bind(var11)(var13, var14);
            var5 = var17;
            var4 = var16;
            var3 = var15;
            var2 = var14;
            if(var1) { _fun0004_ip = 321; continue _fun0004 }
 301:
            var14 = var10.bind(var11)();
            var1 = var14.done;
            var6 = var14;
            if(var1) { _fun0004_ip = 336; continue _fun0004 }
 316:
            _fun0004_ip = 60; continue _fun0004;
 321:
            var1 = 1;
            return var1;
 326:
            var1 = 1;
            return var1;
 331:
            var1 = 1;
            return var1;
 336:
            var1 = 0;
            return var1;
        }
    };
    var _closure1_slot17 = var1;
    var5 = function matchGroupDM(arg1, arg2) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
            var6 = arg1;
            var5 = arg2;
            var1 = '';
            if(!(var1 !== var5)) { _fun0005_ip = 134; continue _fun0005 }
 14:
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
            if(var2) { _fun0005_ip = 132; continue _fun0005 }
 87:
            var8 = _closure1_slot1;
            var9 = _closure1_slot2;
            var2 = 10;
            var2 = var9[var2];
            var2 = var8.bind(var4)(var2);
            var7 = var2.bind(var4)(var5, var7);
            var2 = 2;
            if(var7) { _fun0005_ip = 129; continue _fun0005 }
 119:
            var3 = _closure1_slot17;
            var2 = var3.bind(var4)(var5, var6);
 129:
            var1 = var2;
 132:
            return var1;
 134:
            var1 = 0;
            return var1;
        }
    };
    var _closure1_slot18 = var5;
    var1 = function isMatchNewMessageUserListGroupDM(arg1, arg2, arg3) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
            var4 = arg1;
            var6 = arg2;
            var3 = arg3;
            var1 = '';
            if(!(var1 !== var3)) { _fun0006_ip = 124; continue _fun0006 }
 17:
            var1 = var6.length;
            var8 = 0;
            if(!(var8 !== var1)) { _fun0006_ip = 107; continue _fun0006 }
 28:
            var5 = _closure1_slot15;
            var2 = undefined;
            var7 = var5.bind(var2)(var6);
            var6 = var7.bind(var2)();
            var5 = var6.done;
            if(var5) { _fun0006_ip = 95; continue _fun0006 }
 54:
            var10 = var6.value;
            var9 = var4.recipients;
            var5 = var9.includes;
            var5 = var5.bind(var9)(var10);
            if(var5) { _fun0006_ip = 80; continue _fun0006 }
 78:
            return var8;
 80:
            var9 = var7.bind(var2)();
            var5 = var9.done;
            var6 = var9;
            if(!var5) { _fun0006_ip = 54; continue _fun0006 }
 95:
            var1 = _closure1_slot17;
            var1 = var1.bind(var2)(var3, var4);
            return var1;
 107:
            var2 = _closure1_slot18;
            var1 = undefined;
            var1 = var2.bind(var1)(var4, var3);
            return var1;
 124:
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
 0:
                var3 = _closure2_slot0;
                if(var3) { _fun0007_ip = 35; continue _fun0007 }
 12:
                var5 = _closure2_slot3;
                var4 = _closure1_slot13;
                var3 = undefined;
                var3 = var5.bind(var3)(var4);
                _fun0007_ip = 238; continue _fun0007;
 35:
                var4 = _closure2_slot2;
                var3 = '';
                if(!(var3 === var4)) { _fun0007_ip = 70; continue _fun0007 }
 47:
                var5 = _closure2_slot3;
                var4 = _closure1_slot13;
                var3 = undefined;
                var3 = var5.bind(var3)(var4);
                _fun0007_ip = 238; continue _fun0007;
 70:
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
 0:
                        var4 = arg1;
                        var1 = var4[Symbol.iterator];
                        var4 = var1().next;
                        var2 = var4().value;
                        var2 = var1;
                        var6 = undefined;
                        var3 = var2 === var6;
                        var2 = undefined;
                        if(var3) { _fun0008_ip = 49; continue _fun0008 }
 24:
                        var5 = var4().value;
                        var4 = var1;
                        var4 = var4 === var6;
                        var2 = undefined;
                        var3 = var4;
                        if(var4) { _fun0008_ip = 49; continue _fun0008 }
 43:
                        var2 = var5;
                        var3 = var4;
 49:
                        if(var3) { _fun0008_ip = 55; continue _fun0008 }
 52:
                        var1.return();
 55:
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
 0:
                        var4 = arg1;
                        var2 = var4[Symbol.iterator];
                        var4 = var2().next;
                        var1 = var4().value;
                        var1 = var2;
                        var6 = undefined;
                        var3 = var1 === var6;
                        var1 = undefined;
                        if(var3) { _fun0009_ip = 49; continue _fun0009 }
 24:
                        var5 = var4().value;
                        var4 = var2;
                        var4 = var4 === var6;
                        var1 = undefined;
                        var3 = var4;
                        if(var4) { _fun0009_ip = 49; continue _fun0009 }
 43:
                        var1 = var5;
                        var3 = var4;
 49:
                        if(var3) { _fun0009_ip = 55; continue _fun0009 }
 52:
                        var2.return();
 55:
                        var1 = -var1;
                        return var1;
                    }
                };
                var5 = var5.bind(var6)(var7, var4);
                var4 = var5.map;
                var2 = function(arg1) {
                    _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
 0:
                        var1 = arg1;
                        var2 = var1[Symbol.iterator];
                        var1 = var2().next;
                        var4 = var1().value;
                        var3 = var2;
                        var1 = undefined;
                        var3 = var3 === var1;
                        if(var3) { _fun0010_ip = 25; continue _fun0010 }
 22:
                        var1 = var4;
 25:
                        if(var3) { _fun0010_ip = 31; continue _fun0010 }
 28:
                        var2.return();
 31:
                        return var1;
                    }
                };
                var2 = var4.bind(var5)(var2);
                var1 = _closure2_slot3;
                var1 = var1.bind(var3)(var2);
 238:
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
    var7 = 23;
    var7 = var9[var7];
    var9 = var8.bind(var1)(var7);
    var8 = var9.fileFinishedImporting;
    var7 = 'modules/main_tabs_v2/native/shared_components/user_list/NewMessageUserList.tsx';
    var7 = var8.bind(var9)(var7);
    var6 = function NewMessageUserList(arg1) {
        _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
 0:
            var1 = arg1;
            var11 = var1.selectedUserIds;
            var _closure2_slot0 = var11;
            var23 = var1.disabledUserIds;
            var _closure2_slot1 = var23;
            var12 = var1.onSelectUser;
            var _closure2_slot2 = var12;
            var15 = var1.onQueryChanged;
            var _closure2_slot3 = var15;
            var35 = var1.actions;
            var4 = undefined;
            if(!(var35 === var4)) { _fun0011_ip = 61; continue _fun0011 }
 57:
            var35 = new Array(0);
 61:
            var36 = var1.noResultActions;
            var8 = var1.rowMode;
            if(!(var8 === var4)) { _fun0011_ip = 90; continue _fun0011 }
 77:
            var2 = _closure1_slot9;
            var8 = var2.ACTIONS;
 90:
            var _closure2_slot4 = var8;
            var9 = var1.tagListInputRef;
            var17 = var1.autoFocusSearch;
            if(!(var17 === var4)) { _fun0011_ip = 112; continue _fun0011 }
 110:
            var17 = false;
 112:
            var33 = var1.withGuildMembers;
            if(!(var33 === var4)) { _fun0011_ip = 124; continue _fun0011 }
 122:
            var33 = false;
 124:
            var32 = var1.withAffinitySuggestions;
            if(!(var32 === var4)) { _fun0011_ip = 136; continue _fun0011 }
 134:
            var32 = true;
 136:
            var31 = var1.withFriends;
            if(!(var31 === var4)) { _fun0011_ip = 148; continue _fun0011 }
 146:
            var31 = true;
 148:
            var29 = var1.withGameFriends;
            if(!(var29 === var4)) { _fun0011_ip = 160; continue _fun0011 }
 158:
            var29 = true;
 160:
            var27 = var1.withFriendRequests;
            if(!(var27 === var4)) { _fun0011_ip = 172; continue _fun0011 }
 170:
            var27 = false;
 172:
            var25 = var1.withFriendRequestsIncoming;
            if(!(var25 === var4)) { _fun0011_ip = 184; continue _fun0011 }
 182:
            var25 = false;
 184:
            var24 = var1.withFriendRequestsOutgoing;
            if(!(var24 === var4)) { _fun0011_ip = 196; continue _fun0011 }
 194:
            var24 = false;
 196:
            var28 = var1.withFriendSuggestions;
            if(!(var28 === var4)) { _fun0011_ip = 208; continue _fun0011 }
 206:
            var28 = false;
 208:
            var22 = var1.withGDMNames;
            if(!(var22 === var4)) { _fun0011_ip = 220; continue _fun0011 }
 218:
            var22 = false;
 220:
            var26 = var1.defaultNoResultsFound;
            var6 = var1.overrideResults;
            var10 = var1.forceSearchResults;
            var13 = var1.onForceSearchResults;
            var14 = var1.onSearchFocus;
            var _closure2_slot5 = var4;
            var _closure2_slot6 = var4;
            var _closure2_slot7 = var4;
            var _closure2_slot8 = var4;
            var _closure2_slot9 = var4;
            var _closure2_slot10 = var4;
            var _closure2_slot11 = var4;
            var1 = _closure1_slot14;
            var30 = var1.bind(var4)();
            var7 = _closure1_slot4;
            var2 = var7.useState;
            var1 = '';
            var7 = var2.bind(var7)(var1);
            var2 = _closure1_slot3;
            var1 = 2;
            var7 = var2.bind(var4)(var7, var1);
            var19 = 0;
            var1 = var7[var19];
            var2 = 1;
            var2 = var7[var2];
            _closure2_slot5 = var2;
            var20 = _closure1_slot1;
            var7 = _closure1_slot2;
            var2 = 14;
            var2 = var7[var2];
            var18 = var20.bind(var4)(var2);
            var16 = var18.useExperiment;
            var2 = {};
            var21 = 'new-message';
            var2['location'] = var21;
            var2 = var16.bind(var18)(var2);
            var2 = var2.fastList;
            _closure2_slot6 = var2;
            var21 = _closure1_slot4;
            var18 = var21.useCallback;
            var16 = new Array(1);
            var16[0] = var15;
            var15 = function(arg1) {
                _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
 0:
                    var3 = arg1;
                    var4 = _closure2_slot5;
                    var1 = undefined;
                    var4 = var4.bind(var1)(var3);
                    var5 = _closure2_slot3;
                    var4 = null;
                    if(!(var4 != var5)) { _fun0012_ip = 36; continue _fun0012 }
 27:
                    var2 = _closure2_slot3;
                    var2 = var2.bind(var1)(var3);
 36:
                    return var1;
                }
            };
            var15 = var18.bind(var21)(var15, var16);
            var16 = var1.trim;
            var21 = var16.bind(var1)();
            var16 = var21.length;
            var16 = var16 > var19;
            var18 = 15;
            var18 = var7[var18];
            var20 = var20.bind(var4)(var18);
            var18 = {};
            var18['query'] = var21;
            var18['withGuildMembers'] = var33;
            var18['withAffinitySuggestions'] = var32;
            var18['withFriends'] = var31;
            var18['withGameFriends'] = var29;
            var18['withFriendSuggestions'] = var28;
            var18['withFriendRequests'] = var27;
            var18['withFriendRequestsIncoming'] = var25;
            var18['withFriendRequestsOutgoing'] = var24;
            var24 = true;
            var18['excludeCurrentUser'] = var24;
            var18 = var20.bind(var4)(var18);
            _closure2_slot7 = var18;
            var20 = _closure1_slot21;
            var24 = var20.bind(var4)(var22, var11, var21);
            _closure2_slot8 = var24;
            var22 = _closure1_slot4;
            var21 = var22.useMemo;
            var20 = new Array(2);
            var20[0] = var24;
            var20[1] = var18;
            var18 = function() {
                _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
 0:
                    var5 = _closure2_slot7;
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
                    var4 = _closure2_slot8;
                    var4 = var4.length;
                    var5 = 0;
                    if(!(var5 !== var4)) { _fun0013_ip = 256; continue _fun0013 }
 44:
                    var4 = {};
                    var10 = _closure1_slot0;
                    var11 = _closure1_slot2;
                    var6 = 16;
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
                    var8 = _closure2_slot8;
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
                    var6 = _closure2_slot7;
                    var3 = var6.findIndex;
                    var2 = function(arg1) {
                        var1 = arg1;
                        var2 = var1.title;
                        var6 = _closure1_slot0;
                        var7 = _closure1_slot2;
                        var1 = 16;
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
                    if(!(var2 !== var7)) { _fun0013_ip = 223; continue _fun0013 }
 168:
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
                    _fun0013_ip = 254; continue _fun0013;
 223:
                    var3 = new Array(1);
                    var14 = var3;
                    var13 = var1;
                    var12 = 0;
                    var5 = arraySpread(var14, var13, var12);
                    var3[var5] = var4;
                    var4 = 1;
                    var4 = var5 + var4;
                    var2 = var3;
 254:
                    return var2;
 256:
                    return var1;
                }
            };
            var25 = var21.bind(var22)(var18, var20);
            _closure2_slot9 = var25;
            var22 = _closure1_slot4;
            var21 = var22.useMemo;
            var20 = new Array(1);
            var20[0] = var25;
            var18 = function() {
                var3 = _closure2_slot9;
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
            var24 = var21.bind(var22)(var18, var20);
            var22 = _closure1_slot4;
            var21 = var22.useCallback;
            var20 = new Array(1);
            var20[0] = var25;
            var18 = function(arg1) {
                var1 = {};
                var2 = 'section';
                var1['type'] = var2;
                var2 = {};
                var4 = _closure2_slot9;
                var3 = arg1;
                var3 = var4[var3];
                var3 = var3.title;
                var2['title'] = var3;
                var1['props'] = var2;
                return var1;
            };
            var22 = var21.bind(var22)(var18, var20);
            var21 = _closure1_slot4;
            var20 = var21.useCallback;
            var18 = new Array(5);
            var18[0] = var25;
            var18[1] = var11;
            var18[2] = var12;
            var18[3] = var23;
            var18[4] = var8;
            var8 = function(arg1, arg2) {
                _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
 0:
                    var5 = arg1;
                    var3 = arg2;
                    var1 = _closure2_slot9;
                    var1 = var1[var5];
                    var1 = var1.items;
                    var1 = var1[var3];
                    var2 = 0;
                    var4 = var2 === var3;
                    var2 = _closure2_slot9;
                    var2 = var2[var5];
                    var2 = var2.items;
                    var5 = var2.length;
                    var2 = 1;
                    var2 = var5 - var2;
                    var3 = var3 === var2;
                    var5 = var1.type;
                    var2 = 'UserSearchItem';
                    if(!(var2 !== var5)) { _fun0014_ip = 147; continue _fun0014 }
 78:
                    var5 = var1.type;
                    var2 = 'GroupDMChannelRecord';
                    if(!(var2 !== var5)) { _fun0014_ip = 95; continue _fun0014 }
 91:
                    var2 = undefined;
                    return var2;
 95:
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
 147:
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
                    if(var12) { _fun0014_ip = 234; continue _fun0014 }
 220:
                    var12 = var5.username;
                    var9 = undefined;
                    if(!(var12 !== var11)) { _fun0014_ip = 234; continue _fun0014 }
 231:
                    var9 = var11;
 234:
                    var2['nickname'] = var9;
                    var9 = _closure2_slot2;
                    var2['onPress'] = var9;
                    var9 = _closure2_slot1;
                    var11 = var6 == var9;
                    var9 = undefined;
                    if(var11) { _fun0014_ip = 279; continue _fun0014 }
 260:
                    var13 = _closure2_slot1;
                    var12 = var13.includes;
                    var11 = var5.id;
                    var9 = var12.bind(var13)(var11);
 279:
                    var6 = var6 != var9;
                    if(!var6) { _fun0014_ip = 289; continue _fun0014 }
 286:
                    var6 = var9;
 289:
                    var2['disabled'] = var6;
                    var2['selected'] = var8;
                    var12 = _closure1_slot7;
                    var11 = var12.isFriend;
                    var9 = var5.id;
                    var9 = var11.bind(var12)(var9);
                    if(!var9) { _fun0014_ip = 327; continue _fun0014 }
 324:
                    if(var8) { _fun0014_ip = 333; continue _fun0014 }
 327:
                    var7 = _closure2_slot4;
                    _fun0014_ip = 343; continue _fun0014;
 333:
                    var8 = _closure1_slot9;
                    var7 = var8.TOGGLE;
 343:
                    var2['mode'] = var7;
                    var9 = _closure1_slot10;
                    var8 = _closure1_slot0;
                    var13 = _closure1_slot2;
                    var7 = 17;
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
            var23 = var20.bind(var21)(var8, var18);
            var18 = _closure1_slot4;
            var8 = var18.useRef;
            var37 = null;
            var25 = var8.bind(var18)(var37);
            _closure2_slot10 = var25;
            var18 = _closure1_slot4;
            var8 = var18.useRef;
            var27 = var8.bind(var18)(var37);
            _closure2_slot11 = var27;
            var8 = _closure1_slot0;
            var38 = 18;
            var7 = var7[var38];
            var18 = var8.bind(var4)(var7);
            var8 = var18.useUserListActionsProps;
            var7 = {};
            var20 = undefined;
            if(var16) { _fun0011_ip = 742; continue _fun0011 }
 739:
            var20 = var35;
 742:
            var7['actions'] = var20;
            var20 = undefined;
            if(var16) { _fun0011_ip = 763; continue _fun0011 }
 752:
            var20 = undefined;
            if(!var31) { _fun0011_ip = 763; continue _fun0011 }
 757:
            var20 = var30.searchBarRowContainer;
 763:
            var7['style'] = var20;
            var7 = var8.bind(var18)(var7);
            var21 = var7.headerSize;
            var20 = var7.renderHeader;
            var28 = _closure1_slot4;
            var18 = var28.useLayoutEffect;
            var8 = new Array(2);
            var8[0] = var1;
            var8[1] = var2;
            var7 = function() {
                _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
 0:
                    var2 = _closure2_slot6;
                    if(var2) { _fun0015_ip = 52; continue _fun0015 }
 10:
                    var2 = _closure2_slot11;
                    var4 = var2.current;
                    var2 = null;
                    if(!(var2 != var4)) { _fun0015_ip = 80; continue _fun0015 }
 25:
                    var3 = var4.scrollToOffset;
                    var2 = {'offset': 0, 'animated': false};
                    var2 = var3.bind(var4)(var2);
                    _fun0015_ip = 80; continue _fun0015;
 52:
                    var1 = _closure2_slot10;
                    var3 = var1.current;
                    var1 = null;
                    if(!(var1 != var3)) { _fun0015_ip = 80; continue _fun0015 }
 67:
                    var2 = var3.scrollToTop;
                    var1 = false;
                    var1 = var2.bind(var3)(var1);
 80:
                    var1 = undefined;
                    return var1;
                }
            };
            var7 = var18.bind(var28)(var7, var8);
            var7 = var24.some;
            var3 = function(arg1) {
                var2 = arg1;
                var1 = 0;
                var1 = var2 > var1;
                return var1;
            };
            var18 = var7.bind(var24)(var3);
            var1 = var1.length;
            var1 = var19 === var1;
            if(!var1) { _fun0011_ip = 853; continue _fun0011 }
 849:
            var1 = var37 != var26;
 853:
            if(!(var37 == var6)) { _fun0011_ip = 1270; continue _fun0011 }
 860:
            var8 = _closure1_slot10;
            if(var18) { _fun0011_ip = 1125; continue _fun0011 }
 870:
            var3 = _closure1_slot5;
            var7 = {};
            var29 = var30.noResults;
            if(var1) { _fun0011_ip = 1080; continue _fun0011 }
 888:
            var7['style'] = var29;
            var32 = _closure1_slot10;
            var28 = _closure1_slot1;
            var33 = _closure1_slot2;
            var1 = 21;
            var1 = var33[var1];
            var28 = var28.bind(var4)(var1);
            var1 = {};
            var34 = _closure1_slot0;
            var39 = 16;
            var40 = var33[var39];
            var40 = var34.bind(var4)(var40);
            var42 = var40.intl;
            var41 = var42.string;
            var40 = var33[var39];
            var40 = var34.bind(var4)(var40);
            var40 = var40.t;
            var40 = var40.sPAvXV;
            var40 = var41.bind(var42)(var40);
            var1['title'] = var40;
            var40 = var33[var39];
            var40 = var34.bind(var4)(var40);
            var41 = var40.intl;
            var40 = var41.string;
            var39 = var33[var39];
            var39 = var34.bind(var4)(var39);
            var39 = var39.t;
            var39 = var39.nQ05z8;
            var39 = var40.bind(var41)(var39);
            var1['subtitle'] = var39;
            var33 = var33[var38];
            var33 = var34.bind(var4)(var33);
            var34 = var33.UserFlashListActions;
            var33 = {};
            if(!(var37 != var36)) { _fun0011_ip = 1050; continue _fun0011 }
 1047:
            var35 = var36;
 1050:
            var33['actions'] = var35;
            var33 = var32.bind(var4)(var34, var33);
            var1['children'] = var33;
            var1 = var32.bind(var4)(var28, var1);
            var7['children'] = var1;
            var1 = var7;
            _fun0011_ip = 1114; continue _fun0011;
 1080:
            var28 = new Array(2);
            var28[0] = var29;
            var29 = undefined;
            if(!var31) { _fun0011_ip = 1099; continue _fun0011 }
 1093:
            var29 = var30.searchBarRowContainer;
 1099:
            var28[1] = var29;
            var7['style'] = var28;
            var7['children'] = var26;
            var1 = var7;
 1114:
            var1 = var8.bind(var4)(var3, var1);
            _fun0011_ip = 1267; continue _fun0011;
 1125:
            var7 = _closure1_slot0;
            var26 = _closure1_slot2;
            if(var2) { _fun0011_ip = 1196; continue _fun0011 }
 1136:
            var2 = 20;
            var2 = var26[var2];
            var2 = var7.bind(var4)(var2);
            var3 = var2.UsersFlashList;
            var2 = {};
            var2['ref'] = var27;
            var2['sections'] = var24;
            var2['getItemProps'] = var23;
            var2['getSectionProps'] = var22;
            var2['renderHeader'] = var20;
            var27 = 12;
            var2['insetEnd'] = var27;
            var2 = var8.bind(var4)(var3, var2);
            _fun0011_ip = 1264; continue _fun0011;
 1196:
            var3 = 19;
            var3 = var26[var3];
            var3 = var7.bind(var4)(var3);
            var7 = var3.UsersFastList;
            var3 = {};
            var3['ref'] = var25;
            var3['sections'] = var24;
            var3['getItemProps'] = var23;
            var3['getSectionProps'] = var22;
            var3['listHeaderSize'] = var21;
            var3['renderListHeader'] = var20;
            var3['insetStart'] = var19;
            var19 = 12;
            var3['insetEnd'] = var19;
            var2 = var8.bind(var4)(var7, var3);
 1264:
            var1 = var2;
 1267:
            var6 = var1;
 1270:
            var3 = _closure1_slot12;
            var2 = _closure1_slot11;
            var1 = {};
            var8 = _closure1_slot10;
            var7 = _closure1_slot1;
            var19 = _closure1_slot2;
            var5 = 22;
            var5 = var19[var5];
            var7 = var7.bind(var4)(var5);
            var5 = {};
            if(!var17) { _fun0011_ip = 1312; continue _fun0011 }
 1309:
            var17 = var18;
 1312:
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