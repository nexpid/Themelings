// app/utils/AutocompleteUtils.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var9 = require;
    var14 = metroImportDefault;
    var3 = exports;
    var10 = dependencyMap;
    var _closure1_slot0 = var9;
    var _closure1_slot1 = var14;
    var1 = metroImportAll;
    var _closure1_slot2 = var1;
    var _closure1_slot3 = var10;
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
            var2 = var3["@@iterator"];
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
            var9 = _closure1_slot64;
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
            var7 = _closure1_slot64;
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
    var _closure1_slot63 = var1;
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
    var _closure1_slot64 = var1;
    var5 = function calculateScore() {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var2 = arguments[0];
            var3 = arguments[1];
            var1 = undefined;
            if(!(var2 === var1)) { _fun0004_ip = 32; continue _fun0004 }
case 36:
            var2 = 0;
case 32:
            var1 = 1000;
            var2 = var1 * var2;
            var1 = null;
            var4 = var1 != var3;
            var1 = 1;
            if(!var4) { _fun0004_ip = 37; continue _fun0004 }
case 38:
            var1 = var3;
case 37:
            var1 = var2 * var1;
            return var1;
        }
    };
    var _closure1_slot65 = var5;
    var1 = function getMatchValue(arg1, arg2) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
            var6 = arg2;
            var7 = arguments[2];
            var2 = arg1;
            var5 = var6.exactQuery;
            var4 = var6.containQuery;
            var1 = var6.queryLower;
            var6 = undefined;
            if(!(var7 === var6)) { _fun0005_ip = 39; continue _fun0005 }
case 33:
            var7 = true;
case 39:
            var3 = var7;
case 40: // try_start_0
            var8 = var5;
            var7 = var8.test;
            var5 = var2;
            var5 = var7.bind(var8)(var5);
            if(var5) { _fun0005_ip = 41; continue _fun0005 }
case 42:
            var7 = var4;
            var5 = var7.test;
            var4 = var2;
            var4 = var5.bind(var7)(var4);
            if(var4) { _fun0005_ip = 43; continue _fun0005 }
case 44:
            var7 = var1;
            var5 = var2;
            var4 = function multiTokenMatch(arg1, arg2) {
                var4 = arg1;
                var2 = arg2;
                var _closure3_slot0 = var2;
                var3 = var4.split;
                var2 = /(?:,| )+/;
                var3 = var3.bind(var4)(var2);
                var2 = var3.every;
                var1 = function(arg1) {
                    var1 = global;
                    var4 = var1.RegExp;
                    var3 = _closure1_slot1;
                    var2 = _closure1_slot3;
                    var1 = 36;
                    var2 = var2[var1];
                    var1 = undefined;
                    var3 = var3.bind(var1)(var2);
                    var2 = var3.escape;
                    var1 = arg1;
                    var6 = var2.bind(var3)(var1);
                    var1 = var4.prototype;
                    var2 = Object.create(var1, {constructor: {value: var4}});
                    var5 = 'i';
                    var7 = var2;
                    var1 = new var7[var4](var6, var5, var4);
                    var3 = var1 instanceof Object ? var1 : var2;
                    var2 = var3.test;
                    var1 = _closure3_slot0;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var4 = var4.bind(var6)(var7, var5);
            if(var4) { _fun0005_ip = 45; continue _fun0005 }
case 46:
            if(!var3) { _fun0005_ip = 47; continue _fun0005 }
case 48:
            var4 = _closure1_slot1;
            var5 = _closure1_slot3;
            var3 = 37;
            var3 = var5[var3];
            var5 = var4.bind(var6)(var3);
            var4 = var1;
            var3 = var2;
            var3 = var5.bind(var6)(var4, var3);
            if(var3) { _fun0005_ip = 49; continue _fun0005 }
case 47: // try_end0
            _fun0005_ip = 50; continue _fun0005;
case 49:
            var3 = 1;
            return var3;
case 45:
            var3 = 3;
            return var3;
case 43:
            var3 = 5;
            return var3;
case 41: // try_start_1
            var3 = var2;
            var2 = var3.toLocaleLowerCase;
            var3 = var2.bind(var3)();
            var2 = var1;
            var1 = 7;
            if(!(var3 === var2)) { _fun0005_ip = 51; continue _fun0005 }
case 16:
            var1 = _closure1_slot51;
case 51: // try_end1
            return var1;
case 52: // catch_target0 // catch_target1
            CatchBlockStart(arg_register=2);
            var2 = _closure1_slot50;
            var1 = var2.error;
            var1 = var1.bind(var2)(var3);
case 50:
            var1 = 0;
            return var1;
        }
    };
    var _closure1_slot66 = var1;
    var1 = function isValidGuildMember(arg1) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
            var2 = arg1;
            var3 = null;
            var4 = var3 == var2;
            var1 = undefined;
            if(var4) { _fun0006_ip = 29; continue _fun0006 }
case 32:
            var1 = var2.joinedAt;
case 29:
            var1 = var3 != var1;
            if(!var1) { _fun0006_ip = 38; continue _fun0006 }
case 53:
            var2 = var2.isPending;
            var1 = !var2;
case 38:
            return var1;
        }
    };
    var _closure1_slot67 = var1;
    var1 = function stripAndNormalize(arg1) {
        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
            var7 = arg1;
            var1 = null;
            if(!(var1 != var7)) { _fun0007_ip = 54; continue _fun0007 }
case 55:
            var5 = _closure1_slot0;
            var6 = _closure1_slot3;
            var2 = 38;
            var1 = var6[var2];
            var3 = undefined;
            var4 = var5.bind(var3)(var1);
            var1 = var4.stripDiacritics;
            var4 = var1.bind(var4)(var7);
            var1 = new Array(2);
            var1[0] = var4;
            var2 = var6[var2];
            var3 = var5.bind(var3)(var2);
            var2 = var3.normalize;
            var2 = var2.bind(var3)(var4);
            var1[1] = var2;
            return var1;
case 54:
            var1 = [null, null];
            return var1;
        }
    };
    var _closure1_slot68 = var1;
    var8 = function queryMemberList(arg1) {
        _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
            var1 = arg1;
            var41 = var1.query;
            var40 = var1.members;
            var2 = var1.limit;
            var39 = var1.filter;
            var38 = var1.allowSnowflake;
            var37 = var1.boosters;
            var4 = _closure1_slot40;
            var1 = var4.getUsers;
            var36 = var1.bind(var4)();
            var4 = _closure1_slot39;
            var1 = var4.getGuildId;
            var35 = var1.bind(var4)();
            var1 = var41.toLocaleLowerCase;
            var34 = var1.bind(var41)();
            var4 = _closure1_slot0;
            var1 = _closure1_slot3;
            var33 = 38;
            var1 = var1[var33];
            var9 = undefined;
            var4 = var4.bind(var9)(var1);
            var1 = var4.normalize;
            var32 = var1.bind(var4)(var34);
            var5 = new Array(0);
            var8 = new Array(0);
            var31 = var40.length;
            var7 = 0;
            var42 = var7 < var31;
            var30 = 1;
            var29 = null;
            var28 = 37;
            var27 = 50;
            var26 = 2;
            var25 = 39;
            var24 = 0;
            var23 = 0;
            var22 = undefined;
            var21 = undefined;
            var20 = undefined;
            var19 = undefined;
            var18 = undefined;
            var17 = undefined;
            var16 = undefined;
            var15 = undefined;
            var14 = undefined;
            var13 = undefined;
            var12 = undefined;
            var11 = undefined;
            var10 = undefined;
            var6 = undefined;
            var4 = undefined;
            var1 = undefined;
            if(!var42) { _fun0008_ip = 56; continue _fun0008 }
case 57:
            var42 = var40[var24];
            var43 = _closure1_slot24;
            var43 = var42 instanceof var43;
            if(var43) { _fun0008_ip = 58; continue _fun0008 }
case 59:
            var43 = var42.nick;
            var44 = var29 == var43;
            var66 = undefined;
            if(var44) { _fun0008_ip = 60; continue _fun0008 }
case 61:
            var44 = var43.toLocaleLowerCase;
            var66 = var44.bind(var43)();
case 60:
            var44 = var42.userId;
            var44 = var36[var44];
            var56 = var43;
            _fun0008_ip = 62; continue _fun0008;
case 58:
            var46 = _closure1_slot31;
            var45 = var46.getNick;
            var43 = var42.id;
            var45 = var45.bind(var46)(var35, var43);
            var46 = var29 == var45;
            var43 = undefined;
            if(var46) { _fun0008_ip = 10; continue _fun0008 }
case 63:
            var46 = var45.toLocaleLowerCase;
            var43 = var46.bind(var45)();
case 10:
            var66 = var43;
            var22 = var45;
            var56 = var21;
            var44 = var42;
case 62:
            var43 = _closure1_slot1;
            var42 = _closure1_slot3;
            var42 = var42[var25];
            var43 = var43.bind(var9)(var42);
            var42 = var43.getGlobalName;
            var43 = var42.bind(var43)(var44);
            var42 = var29 == var43;
            var73 = var44;
            var65 = undefined;
            if(var42) { _fun0008_ip = 64; continue _fun0008 }
case 65:
            var42 = var43.toLocaleLowerCase;
            var65 = var42.bind(var43)();
case 64:
            var57 = var23;
            var55 = var20;
            var54 = var19;
            var53 = var18;
            var52 = var17;
            var51 = var16;
            var50 = var15;
            var49 = var14;
            var48 = var13;
            var47 = var12;
            var46 = var11;
            var45 = var10;
            var44 = var6;
            var43 = var4;
            var42 = var1;
            if(!(var29 != var73)) { _fun0008_ip = 66; continue _fun0008 }
case 67:
            if(!(var29 != var39)) { _fun0008_ip = 68; continue _fun0008 }
case 69:
            var58 = var39.bind(var9)(var73);
            var57 = var23;
            var55 = var20;
            var54 = var19;
            var53 = var18;
            var52 = var17;
            var51 = var16;
            var50 = var15;
            var49 = var14;
            var48 = var13;
            var47 = var12;
            var46 = var11;
            var45 = var10;
            var44 = var6;
            var43 = var4;
            var42 = var1;
            if(!var58) { _fun0008_ip = 66; continue _fun0008 }
case 68:
            var59 = var73.username;
            var58 = var59.toLocaleLowerCase;
            var64 = var58.bind(var59)();
            var59 = _closure1_slot0;
            var58 = _closure1_slot3;
            var60 = var58[var33];
            var61 = var59.bind(var9)(var60);
            var60 = var61.stripDiacritics;
            var63 = var60.bind(var61)(var64);
            var58 = var58[var33];
            var59 = var59.bind(var9)(var58);
            var58 = var59.normalize;
            var62 = var58.bind(var59)(var63);
            var58 = _closure1_slot68;
            var60 = var58.bind(var9)(var66);
            var59 = _closure1_slot4;
            var59 = var59.bind(var9)(var60, var26);
            var61 = var59[var7];
            var60 = var59[var30];
            var59 = var58.bind(var9)(var65);
            var58 = _closure1_slot4;
            var58 = var58.bind(var9)(var59, var26);
            var59 = var58[var7];
            var58 = var58[var30];
            if(!var38) { _fun0008_ip = 70; continue _fun0008 }
case 71:
            var68 = var73.id;
            var67 = var20;
            if(!(var41 !== var68)) { _fun0008_ip = 72; continue _fun0008 }
case 70:
            var69 = var64.substring;
            var68 = var34.length;
            var68 = var69.bind(var64)(var7, var68);
            var67 = var20;
            if(!(var68 !== var34)) { _fun0008_ip = 72; continue _fun0008 }
case 73:
            var69 = var63.substring;
            var68 = var34.length;
            var68 = var69.bind(var63)(var7, var68);
            var67 = var20;
            if(!(var68 !== var34)) { _fun0008_ip = 72; continue _fun0008 }
case 74:
            var69 = var29 == var66;
            var68 = undefined;
            if(var69) { _fun0008_ip = 75; continue _fun0008 }
case 76:
            var70 = var66.substring;
            var69 = var34.length;
            var68 = var70.bind(var66)(var7, var69);
case 75:
            var67 = var66;
            if(!(var68 !== var34)) { _fun0008_ip = 72; continue _fun0008 }
case 77:
            var69 = var29 == var61;
            var68 = undefined;
            if(var69) { _fun0008_ip = 78; continue _fun0008 }
case 79:
            var70 = var61.substring;
            var69 = var34.length;
            var68 = var70.bind(var61)(var7, var69);
case 78:
            var67 = var66;
            if(!(var68 !== var34)) { _fun0008_ip = 72; continue _fun0008 }
case 80:
            var69 = var29 == var65;
            var68 = undefined;
            if(var69) { _fun0008_ip = 81; continue _fun0008 }
case 82:
            var70 = var65.substring;
            var69 = var34.length;
            var68 = var70.bind(var65)(var7, var69);
case 81:
            var67 = var66;
            if(!(var68 !== var34)) { _fun0008_ip = 72; continue _fun0008 }
case 83:
            var69 = var29 == var59;
            var68 = undefined;
            if(var69) { _fun0008_ip = 84; continue _fun0008 }
case 85:
            var70 = var59.substring;
            var69 = var34.length;
            var68 = var70.bind(var59)(var7, var69);
case 84:
            var67 = var66;
            if(!(var68 !== var34)) { _fun0008_ip = 72; continue _fun0008 }
case 86:
            var69 = var62.substring;
            var68 = var32.length;
            var68 = var69.bind(var62)(var7, var68);
            if(!(var68 !== var32)) { _fun0008_ip = 87; continue _fun0008 }
case 88:
            var69 = var29 == var60;
            var68 = undefined;
            if(var69) { _fun0008_ip = 89; continue _fun0008 }
case 90:
            var70 = var60.substring;
            var69 = var32.length;
            var68 = var70.bind(var60)(var7, var69);
case 89:
            if(!(var68 !== var32)) { _fun0008_ip = 87; continue _fun0008 }
case 91:
            var69 = var29 == var58;
            var68 = undefined;
            if(var69) { _fun0008_ip = 92; continue _fun0008 }
case 93:
            var70 = var58.substring;
            var69 = var32.length;
            var68 = var70.bind(var58)(var7, var69);
case 92:
            if(!(var68 !== var32)) { _fun0008_ip = 87; continue _fun0008 }
case 94:
            var57 = var23;
            var55 = var66;
            var54 = var19;
            var53 = var18;
            var52 = var64;
            var51 = var63;
            var50 = var62;
            var49 = var61;
            var48 = var60;
            var47 = var59;
            var46 = var58;
            var45 = var10;
            var44 = var6;
            var43 = var4;
            var42 = var1;
            if(!(var23 < var27)) { _fun0008_ip = 66; continue _fun0008 }
case 95:
            var69 = _closure1_slot1;
            var68 = _closure1_slot3;
            var68 = var68[var28];
            var68 = var69.bind(var9)(var68);
            var68 = var68.bind(var9)(var34, var63);
            if(var68) { _fun0008_ip = 96; continue _fun0008 }
case 97:
            var69 = _closure1_slot1;
            var68 = _closure1_slot3;
            var68 = var68[var28];
            var68 = var69.bind(var9)(var68);
            var68 = var68.bind(var9)(var32, var62);
            if(var68) { _fun0008_ip = 96; continue _fun0008 }
case 98:
            if(!(var29 != var61)) { _fun0008_ip = 99; continue _fun0008 }
case 100:
            var69 = _closure1_slot1;
            var68 = _closure1_slot3;
            var68 = var68[var28];
            var68 = var69.bind(var9)(var68);
            var68 = var68.bind(var9)(var34, var61);
            if(var68) { _fun0008_ip = 96; continue _fun0008 }
case 99:
            if(!(var29 != var60)) { _fun0008_ip = 101; continue _fun0008 }
case 102:
            var69 = _closure1_slot1;
            var68 = _closure1_slot3;
            var68 = var68[var28];
            var68 = var69.bind(var9)(var68);
            var68 = var68.bind(var9)(var32, var60);
            if(var68) { _fun0008_ip = 96; continue _fun0008 }
case 101:
            if(!(var29 != var59)) { _fun0008_ip = 103; continue _fun0008 }
case 104:
            var69 = _closure1_slot1;
            var68 = _closure1_slot3;
            var68 = var68[var28];
            var68 = var69.bind(var9)(var68);
            var68 = var68.bind(var9)(var34, var59);
            if(var68) { _fun0008_ip = 96; continue _fun0008 }
case 103:
            var57 = var23;
            var55 = var66;
            var54 = var19;
            var53 = var18;
            var52 = var64;
            var51 = var63;
            var50 = var62;
            var49 = var61;
            var48 = var60;
            var47 = var59;
            var46 = var58;
            var45 = var10;
            var44 = var6;
            var43 = var4;
            var42 = var1;
            if(!(var29 != var58)) { _fun0008_ip = 66; continue _fun0008 }
case 105:
            var69 = _closure1_slot1;
            var68 = _closure1_slot3;
            var68 = var68[var28];
            var68 = var69.bind(var9)(var68);
            var68 = var68.bind(var9)(var32, var58);
            var57 = var23;
            var55 = var66;
            var54 = var19;
            var53 = var18;
            var52 = var64;
            var51 = var63;
            var50 = var62;
            var49 = var61;
            var48 = var60;
            var47 = var59;
            var46 = var58;
            var45 = var10;
            var44 = var6;
            var43 = var4;
            var42 = var1;
            if(!var68) { _fun0008_ip = 66; continue _fun0008 }
case 96:
            var71 = var8.push;
            var70 = {};
            var68 = _closure1_slot47;
            var68 = var68.USER;
            var70['type'] = var68;
            var70['record'] = var73;
            var69 = _closure1_slot65;
            var72 = var29 == var37;
            var68 = undefined;
            if(var72) { _fun0008_ip = 106; continue _fun0008 }
case 107:
            var72 = var73.id;
            var68 = var37[var72];
case 106:
            var68 = var69.bind(var9)(var30, var68);
            var70['score'] = var68;
            var69 = var66;
            if(!(var29 != var65)) { _fun0008_ip = 108; continue _fun0008 }
case 109:
            var69 = var65;
case 108:
            var68 = var64;
            if(!(var29 != var69)) { _fun0008_ip = 110; continue _fun0008 }
case 111:
            var68 = var69;
case 110:
            var70['comparator'] = var68;
            var68 = var61;
            if(!(var29 != var59)) { _fun0008_ip = 112; continue _fun0008 }
case 113:
            var68 = var59;
case 112:
            var72 = var63;
            if(!(var29 != var68)) { _fun0008_ip = 114; continue _fun0008 }
case 115:
            var72 = var68;
case 114:
            var70['sortable'] = var72;
            var70 = var71.bind(var8)(var70);
            var57 = var23 + var30;
            var55 = var66;
            var54 = var19;
            var53 = var18;
            var52 = var64;
            var51 = var63;
            var50 = var62;
            var49 = var61;
            var48 = var60;
            var47 = var59;
            var46 = var58;
            var45 = var10;
            var44 = var6;
            var43 = var69;
            var42 = var68;
            _fun0008_ip = 66; continue _fun0008;
case 87:
            var71 = var5.push;
            var70 = {};
            var68 = _closure1_slot47;
            var68 = var68.USER;
            var70['type'] = var68;
            var70['record'] = var73;
            var69 = _closure1_slot65;
            var72 = var29 == var37;
            var68 = undefined;
            if(var72) { _fun0008_ip = 116; continue _fun0008 }
case 117:
            var72 = var73.id;
            var68 = var37[var72];
case 116:
            var68 = var69.bind(var9)(var30, var68);
            var70['score'] = var68;
            var69 = var66;
            if(!(var29 != var65)) { _fun0008_ip = 118; continue _fun0008 }
case 119:
            var69 = var65;
case 118:
            var68 = var64;
            if(!(var29 != var69)) { _fun0008_ip = 120; continue _fun0008 }
case 121:
            var68 = var69;
case 120:
            var70['comparator'] = var68;
            var68 = var61;
            if(!(var29 != var59)) { _fun0008_ip = 122; continue _fun0008 }
case 123:
            var68 = var59;
case 122:
            var72 = var63;
            if(!(var29 != var68)) { _fun0008_ip = 124; continue _fun0008 }
case 125:
            var72 = var68;
case 124:
            var70['sortable'] = var72;
            var70 = var71.bind(var5)(var70);
            var57 = var23;
            var55 = var66;
            var54 = var19;
            var53 = var18;
            var52 = var64;
            var51 = var63;
            var50 = var62;
            var49 = var61;
            var48 = var60;
            var47 = var59;
            var46 = var58;
            var45 = var69;
            var44 = var68;
            var43 = var4;
            var42 = var1;
            _fun0008_ip = 66; continue _fun0008;
case 72:
            var69 = var5.push;
            var68 = {};
            var70 = _closure1_slot47;
            var70 = var70.USER;
            var68['type'] = var70;
            var68['record'] = var73;
            var72 = _closure1_slot65;
            var71 = _closure1_slot51;
            var74 = var29 == var37;
            var70 = undefined;
            if(var74) { _fun0008_ip = 126; continue _fun0008 }
case 127:
            var73 = var73.id;
            var70 = var37[var73];
case 126:
            var70 = var72.bind(var9)(var71, var70);
            var68['score'] = var70;
            if(!(var29 != var65)) { _fun0008_ip = 128; continue _fun0008 }
case 129:
            var66 = var65;
case 128:
            var65 = var64;
            if(!(var29 != var66)) { _fun0008_ip = 130; continue _fun0008 }
case 131:
            var65 = var66;
case 130:
            var68['comparator'] = var65;
            var65 = var61;
            if(!(var29 != var59)) { _fun0008_ip = 132; continue _fun0008 }
case 133:
            var65 = var59;
case 132:
            var70 = var63;
            if(!(var29 != var65)) { _fun0008_ip = 134; continue _fun0008 }
case 135:
            var70 = var65;
case 134:
            var68['sortable'] = var70;
            var68 = var69.bind(var5)(var68);
            var57 = var23;
            var55 = var67;
            var54 = var66;
            var53 = var65;
            var52 = var64;
            var51 = var63;
            var50 = var62;
            var49 = var61;
            var48 = var60;
            var47 = var59;
            var46 = var58;
            var45 = var10;
            var44 = var6;
            var43 = var4;
            var42 = var1;
case 66:
            var24 = var24 + var30;
            var23 = var57;
            var20 = var55;
            var19 = var54;
            var18 = var53;
            var17 = var52;
            var16 = var51;
            var15 = var50;
            var14 = var49;
            var13 = var48;
            var12 = var47;
            var11 = var46;
            var10 = var45;
            var6 = var44;
            var4 = var43;
            var1 = var42;
            var21 = var56;
            if(var24 < var31) { _fun0008_ip = 57; continue _fun0008 }
case 56:
            var4 = var5.sort;
            var6 = _closure1_slot1;
            var1 = _closure1_slot3;
            var10 = 40;
            var1 = var1[var10];
            var1 = var6.bind(var9)(var1);
            var1 = var4.bind(var5)(var1);
            var4 = var5.length;
            var1 = var5;
            if(!(var4 < var2)) { _fun0008_ip = 136; continue _fun0008 }
case 137:
            var4 = var8.sort;
            var6 = _closure1_slot1;
            var3 = _closure1_slot3;
            var3 = var3[var10];
            var3 = var6.bind(var9)(var3);
            var3 = var4.bind(var8)(var3);
            var4 = var5.concat;
            var6 = var8.slice;
            var3 = global;
            var10 = var3.Math;
            var9 = var10.max;
            var3 = var5.length;
            var3 = var2 - var3;
            var3 = var9.bind(var10)(var7, var3);
            var3 = var6.bind(var8)(var7, var3);
            var1 = var4.bind(var5)(var3);
case 136:
            var3 = var1.length;
            if(!(var3 > var2)) { _fun0008_ip = 138; continue _fun0008 }
case 139:
            var1['length'] = var2;
case 138:
            return var1;
        }
    };
    var _closure1_slot69 = var8;
    var1 = function getPriorityForStickerMetadataType(arg1) {
        _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
            var2 = arg1;
            var6 = _closure1_slot0;
            var3 = _closure1_slot3;
            var5 = 41;
            var3 = var3[var5];
            var4 = undefined;
            var3 = var6.bind(var4)(var3);
            var3 = var3.StickerMetadataTypes;
            var3 = var3.STICKER_NAME;
            if(!(var3 !== var2)) { _fun0009_ip = 140; continue _fun0009 }
case 141:
            var6 = _closure1_slot0;
            var3 = _closure1_slot3;
            var3 = var3[var5];
            var3 = var6.bind(var4)(var3);
            var3 = var3.StickerMetadataTypes;
            var3 = var3.CORRELATED_EMOJI;
            if(!(var3 !== var2)) { _fun0009_ip = 142; continue _fun0009 }
case 143:
            var6 = _closure1_slot0;
            var3 = _closure1_slot3;
            var3 = var3[var5];
            var3 = var6.bind(var4)(var3);
            var3 = var3.StickerMetadataTypes;
            var3 = var3.TAG;
            if(!(var3 !== var2)) { _fun0009_ip = 57; continue _fun0009 }
case 144:
            var6 = _closure1_slot0;
            var3 = _closure1_slot3;
            var3 = var3[var5];
            var3 = var6.bind(var4)(var3);
            var3 = var3.StickerMetadataTypes;
            var3 = var3.GUILD_NAME;
            if(!(var3 !== var2)) { _fun0009_ip = 145; continue _fun0009 }
case 45:
            var3 = _closure1_slot0;
            var1 = _closure1_slot3;
            var1 = var1[var5];
            var1 = var3.bind(var4)(var1);
            var1 = var1.StickerMetadataTypes;
            var1 = var1.PACK_NAME;
            if(!(var1 !== var2)) { _fun0009_ip = 145; continue _fun0009 }
case 16:
            var1 = 1;
            return var1;
case 145:
            var1 = 8;
            return var1;
case 57:
            var1 = 1;
            return var1;
case 142:
            var1 = 6;
            return var1;
case 140:
            var1 = 11;
            return var1;
        }
    };
    var _closure1_slot70 = var1;
    var1 = function isPartialTypeMatch(arg1, arg2) {
        _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
            var3 = _closure1_slot28;
            var1 = arg1;
            var1 = var1 === var3;
            if(!var1) { _fun0010_ip = 146; continue _fun0010 }
case 147:
            var4 = _closure1_slot19;
            var3 = undefined;
            var2 = arg2;
            var1 = var4.bind(var3)(var2);
case 146:
            return var1;
        }
    };
    var _closure1_slot71 = var1;
    var1 = function getBestScore(arg1, arg2, arg3) {
        _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
            var14 = arg1;
            var3 = arg2;
            var13 = arg3;
            var1 = _closure1_slot63;
            var11 = undefined;
            var10 = var1.bind(var11)(var3);
            var1 = var10.bind(var11)();
            var6 = var1.done;
            var2 = 0;
            var4 = null;
            var9 = var1;
            var8 = 0;
            var7 = null;
            var1 = 0;
            var5 = null;
            if(var6) { _fun0011_ip = 148; continue _fun0011 }
case 149:
            var6 = var9.value;
            var15 = _closure1_slot66;
            var15 = var15.bind(var11)(var14, var6, var13);
            if(!(var15 > var8)) { _fun0011_ip = 44; continue _fun0011 }
case 35:
            var8 = var15;
            var7 = var6;
case 44:
            var17 = var10.bind(var11)();
            var6 = var17.done;
            var9 = var17;
            var1 = var8;
            var5 = var7;
            if(!var6) { _fun0011_ip = 149; continue _fun0011 }
case 148:
            if(!(var4 != var5)) { _fun0011_ip = 150; continue _fun0011 }
case 48:
            var4 = var5.isFullMatch;
            if(var4) { _fun0011_ip = 151; continue _fun0011 }
case 13:
            var6 = var3.splice;
            var4 = var3.indexOf;
            var5 = var4.bind(var3)(var5);
            var4 = 1;
            var4 = var6.bind(var3)(var5, var4);
            _fun0011_ip = 150; continue _fun0011;
case 151:
            var3['length'] = var2;
case 150:
            return var1;
        }
    };
    var _closure1_slot72 = var1;
    var1 = function getGuildName(arg1, arg2) {
        _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
case 0:
            var5 = arg1;
            var4 = arg2;
            var1 = var5.guild_id;
            var2 = null;
            if(!(var2 == var1)) { _fun0012_ip = 152; continue _fun0012 }
case 147:
            var1 = undefined;
            return var1;
case 152:
            var1 = var5.guild_id;
            var1 = var4[var1];
            if(!(var2 == var1)) { _fun0012_ip = 153; continue _fun0012 }
case 154:
            var3 = var5.guild_id;
            var7 = _closure1_slot33;
            var6 = var7.getGuild;
            var5 = var5.guild_id;
            var5 = var6.bind(var7)(var5);
            var6 = var2 == var5;
            var2 = undefined;
            if(var6) { _fun0012_ip = 9; continue _fun0012 }
case 155:
            var6 = var5.name;
            var5 = var6.toLocaleLowerCase;
            var2 = var5.bind(var6)();
case 9:
            var4[var3] = var2;
            var1 = var2;
case 153:
            return var1;
        }
    };
    var _closure1_slot73 = var1;
    var1 = function getCategoryName(arg1, arg2) {
        _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
case 0:
            var5 = arg1;
            var4 = arg2;
            var1 = var5.parent_id;
            var2 = null;
            if(!(var2 == var1)) { _fun0013_ip = 156; continue _fun0013 }
case 157:
            var1 = undefined;
            return var1;
case 156:
            var1 = var5.parent_id;
            var1 = var4[var1];
            if(!(var2 == var1)) { _fun0013_ip = 11; continue _fun0013 }
case 38:
            var3 = var5.parent_id;
            var7 = _closure1_slot25;
            var6 = var7.getChannel;
            var5 = var5.parent_id;
            var5 = var6.bind(var7)(var5);
            var6 = var2 == var5;
            var2 = undefined;
            if(var6) { _fun0013_ip = 158; continue _fun0013 }
case 159:
            var6 = var5.name;
            var5 = var6.toLocaleLowerCase;
            var2 = var5.bind(var6)();
case 158:
            var4[var3] = var2;
            var1 = var2;
case 11:
            return var1;
        }
    };
    var _closure1_slot74 = var1;
    var11 = function getRecentlyTalked(arg1, arg2) {
        _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
case 0:
            var6 = arg1;
            var4 = _closure1_slot25;
            var3 = var4.getChannel;
            var4 = var3.bind(var4)(var6);
            var _closure2_slot0 = var4;
            var3 = null;
            if(!(var3 != var6)) { _fun0014_ip = 160; continue _fun0014 }
case 39:
            if(!(var3 != var4)) { _fun0014_ip = 160; continue _fun0014 }
case 161:
            var5 = _closure1_slot1;
            var4 = _closure1_slot3;
            var3 = 42;
            var3 = var4[var3];
            var4 = undefined;
            var3 = var5.bind(var4)(var3);
            var5 = _closure1_slot34;
            var2 = var5.getMessages;
            var5 = var2.bind(var5)(var6);
            var2 = var5.toArray;
            var2 = var2.bind(var5)();
            var3 = var3.bind(var4)(var2);
            var2 = var3.reverse;
            var4 = var2.bind(var3)();
            var3 = var4.uniqBy;
            var2 = function(arg1) {
                var1 = arg1;
                var1 = var1.author;
                var1 = var1.id;
                return var1;
            };
            var4 = var3.bind(var4)(var2);
            var3 = var4.map;
            var2 = function(arg1) {
                var3 = _closure1_slot40;
                var2 = var3.getUser;
                var1 = arg1;
                var1 = var1.author;
                var1 = var1.id;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var4 = var3.bind(var4)(var2);
            var3 = var4.filter;
            var2 = function(arg1) {
                _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
case 0:
                    var2 = arg1;
                    var1 = null;
                    if(!(var1 != var2)) { _fun0015_ip = 162; continue _fun0015 }
case 55:
                    var3 = var2.isNonUserBot;
                    var3 = var3.bind(var2)();
                    if(var3) { _fun0015_ip = 163; continue _fun0015 }
case 156:
                    var4 = _closure2_slot0;
                    var3 = var4.getGuildId;
                    var6 = var3.bind(var4)();
                    var1 = var1 == var6;
                    if(var1) { _fun0015_ip = 164; continue _fun0015 }
case 2:
                    var4 = _closure1_slot67;
                    var5 = _closure1_slot31;
                    var3 = var5.getMember;
                    var2 = var2.id;
                    var3 = var3.bind(var5)(var6, var2);
                    var2 = undefined;
                    var1 = var4.bind(var2)(var3);
case 164:
                    return var1;
case 163:
                    var1 = false;
                    return var1;
case 162:
                    var1 = false;
                    return var1;
                }
            };
            var3 = var3.bind(var4)(var2);
            var2 = var3.map;
            var1 = function(arg1) {
                _fun0016: for(var _fun0016_ip = 0; ; ) switch(_fun0016_ip) {
case 0:
                    var5 = arg1;
                    var2 = _closure2_slot0;
                    var1 = var2.getGuildId;
                    var6 = var1.bind(var2)();
                    var4 = null;
                    var1 = var4 != var6;
                    var7 = null;
                    if(!var1) { _fun0016_ip = 4; continue _fun0016 }
case 146:
                    var3 = _closure1_slot31;
                    var2 = var3.getMember;
                    var1 = var5.id;
                    var7 = var2.bind(var3)(var6, var1);
case 4:
                    var1 = {};
                    var2 = _closure1_slot47;
                    var2 = var2.USER;
                    var1['type'] = var2;
                    var1['record'] = var5;
                    var2 = 0;
                    var1['score'] = var2;
                    var8 = var4 == var7;
                    var6 = undefined;
                    var2 = undefined;
                    if(var8) { _fun0016_ip = 165; continue _fun0016 }
case 148:
                    var2 = var7.nick;
case 165:
                    if(!(var4 == var2)) { _fun0016_ip = 151; continue _fun0016 }
case 166:
                    var4 = _closure1_slot1;
                    var7 = _closure1_slot3;
                    var3 = 39;
                    var3 = var7[var3];
                    var4 = var4.bind(var6)(var3);
                    var3 = var4.getName;
                    var2 = var3.bind(var4)(var5);
case 151:
                    var1['comparator'] = var2;
                    return var1;
                }
            };
            var3 = var2.bind(var3)(var1);
            var2 = var3.take;
            var1 = arg2;
            var2 = var2.bind(var3)(var1);
            var1 = var2.value;
            var1 = var1.bind(var2)();
            _fun0014_ip = 142; continue _fun0014;
case 160:
            var1 = new Array(0);
case 142:
            return var1;
        }
    };
    var _closure1_slot75 = var11;
    var1 = global;
    var7 = var1.Object;
    var6 = var7.defineProperty;
    var2 = {};
    var1 = true;
    var2['value'] = var1;
    var1 = '__esModule';
    var1 = var6.bind(var7)(var3, var1, var2);
    var1 = 0;
    var2 = var10[var1];
    var1 = undefined;
    var2 = var14.bind(var1)(var2);
    var _closure1_slot4 = var2;
    var2 = 1;
    var2 = var10[var2];
    var2 = var14.bind(var1)(var2);
    var _closure1_slot5 = var2;
    var2 = 2;
    var2 = var10[var2];
    var2 = var14.bind(var1)(var2);
    var _closure1_slot6 = var2;
    var2 = 3;
    var2 = var10[var2];
    var2 = var9.bind(var1)(var2);
    var6 = var2.InAppNavigationRecord;
    var _closure1_slot7 = var6;
    var2 = var2.InAppNavigationType;
    var _closure1_slot8 = var2;
    var2 = 4;
    var2 = var10[var2];
    var2 = var14.bind(var1)(var2);
    var _closure1_slot9 = var2;
    var2 = 5;
    var2 = var10[var2];
    var2 = var14.bind(var1)(var2);
    var _closure1_slot10 = var2;
    var2 = 6;
    var2 = var10[var2];
    var2 = var14.bind(var1)(var2);
    var _closure1_slot11 = var2;
    var2 = 7;
    var2 = var10[var2];
    var2 = var14.bind(var1)(var2);
    var _closure1_slot12 = var2;
    var2 = 8;
    var2 = var10[var2];
    var2 = var14.bind(var1)(var2);
    var _closure1_slot13 = var2;
    var2 = 9;
    var2 = var10[var2];
    var2 = var14.bind(var1)(var2);
    var _closure1_slot14 = var2;
    var2 = 10;
    var6 = var10[var2];
    var6 = var14.bind(var1)(var6);
    var _closure1_slot15 = var6;
    var6 = 11;
    var6 = var10[var6];
    var6 = var9.bind(var1)(var6);
    var7 = var6.ChannelRecordBase;
    var _closure1_slot16 = var7;
    var7 = var6.isGuildChannelType;
    var _closure1_slot17 = var7;
    var7 = var6.isGuildSelectableChannelType;
    var _closure1_slot18 = var7;
    var7 = var6.isGuildVocalChannelType;
    var _closure1_slot19 = var7;
    var7 = var6.isThread;
    var _closure1_slot20 = var7;
    var7 = var6.PrivateChannelRecord;
    var _closure1_slot21 = var7;
    var6 = var6.UnknownChannelRecord;
    var _closure1_slot22 = var6;
    var6 = 12;
    var6 = var10[var6];
    var6 = var9.bind(var1)(var6);
    var6 = var6.isEveryoneRole;
    var _closure1_slot23 = var6;
    var6 = 13;
    var6 = var10[var6];
    var6 = var14.bind(var1)(var6);
    var _closure1_slot24 = var6;
    var6 = 14;
    var6 = var10[var6];
    var6 = var14.bind(var1)(var6);
    var _closure1_slot25 = var6;
    var6 = 15;
    var6 = var10[var6];
    var6 = var14.bind(var1)(var6);
    var _closure1_slot26 = var6;
    var6 = 16;
    var6 = var10[var6];
    var6 = var14.bind(var1)(var6);
    var _closure1_slot27 = var6;
    var6 = 17;
    var7 = var10[var6];
    var7 = var9.bind(var1)(var7);
    var13 = var7.GUILD_SELECTABLE_CHANNELS_KEY;
    var _closure1_slot28 = var13;
    var12 = var7.GUILD_VOCAL_CHANNELS_KEY;
    var _closure1_slot29 = var12;
    var6 = var10[var6];
    var6 = var14.bind(var1)(var6);
    var _closure1_slot30 = var6;
    var6 = 18;
    var6 = var10[var6];
    var6 = var14.bind(var1)(var6);
    var _closure1_slot31 = var6;
    var6 = 19;
    var6 = var10[var6];
    var6 = var14.bind(var1)(var6);
    var _closure1_slot32 = var6;
    var6 = 20;
    var6 = var10[var6];
    var6 = var14.bind(var1)(var6);
    var _closure1_slot33 = var6;
    var6 = 21;
    var6 = var10[var6];
    var6 = var14.bind(var1)(var6);
    var _closure1_slot34 = var6;
    var6 = 22;
    var6 = var10[var6];
    var6 = var14.bind(var1)(var6);
    var _closure1_slot35 = var6;
    var6 = 23;
    var6 = var10[var6];
    var6 = var14.bind(var1)(var6);
    var _closure1_slot36 = var6;
    var6 = 24;
    var6 = var10[var6];
    var6 = var14.bind(var1)(var6);
    var _closure1_slot37 = var6;
    var6 = 25;
    var6 = var10[var6];
    var6 = var14.bind(var1)(var6);
    var _closure1_slot38 = var6;
    var6 = 26;
    var6 = var10[var6];
    var6 = var14.bind(var1)(var6);
    var _closure1_slot39 = var6;
    var6 = 27;
    var6 = var10[var6];
    var6 = var14.bind(var1)(var6);
    var _closure1_slot40 = var6;
    var6 = 28;
    var6 = var10[var6];
    var6 = var14.bind(var1)(var6);
    var _closure1_slot41 = var6;
    var6 = 29;
    var6 = var10[var6];
    var6 = var9.bind(var1)(var6);
    var7 = var6.Permissions;
    var _closure1_slot42 = var7;
    var7 = var6.GuildFeatures;
    var _closure1_slot43 = var7;
    var7 = var6.ChannelTypes;
    var _closure1_slot44 = var7;
    var15 = var6.SKUTypes;
    var _closure1_slot45 = var15;
    var6 = var6.MAX_AUTOCOMPLETE_RESULTS;
    var _closure1_slot46 = var6;
    var6 = 30;
    var6 = var10[var6];
    var6 = var9.bind(var1)(var6);
    var6 = var6.AutocompleterResultTypes;
    var _closure1_slot47 = var6;
    var6 = 31;
    var6 = var10[var6];
    var6 = var9.bind(var1)(var6);
    var6 = var6.StaticChannelId;
    var _closure1_slot48 = var6;
    var6 = 32;
    var6 = var10[var6];
    var6 = var9.bind(var1)(var6);
    var6 = var6.HOISTED_SEARCH_APPLICATION_IDS_BY_PRIORITY;
    var _closure1_slot49 = var6;
    var6 = 33;
    var6 = var10[var6];
    var15 = var14.bind(var1)(var6);
    var6 = var15.prototype;
    var14 = Object.create(var6, {constructor: {value: var15}});
    var18 = 'AutocompleteUtils';
    var19 = var14;
    var6 = new var19[var15](var18, var17);
    var6 = var6 instanceof Object ? var6 : var14;
    var _closure1_slot50 = var6;
    var _closure1_slot51 = var2;
    var2 = function NOOP() {
        var1 = true;
        return var1;
    };
    var _closure1_slot52 = var2;
    var6 = /(\t|\s)/;
    var _closure1_slot53 = var6;
    var2 = new Array(0);
    var _closure1_slot54 = var2;
    var2 = 34;
    var14 = var10[var2];
    var14 = var9.bind(var1)(var14);
    var14 = var14.default;
    var14 = var14.MENTION_EVERYONE;
    var _closure1_slot55 = var14;
    var14 = var10[var2];
    var14 = var9.bind(var1)(var14);
    var14 = var14.default;
    var14 = var14.MENTION_HERE;
    var _closure1_slot56 = var14;
    var14 = var10[var2];
    var14 = var9.bind(var1)(var14);
    var14 = var14.default;
    var14 = var14.MENTION_GAME;
    var _closure1_slot57 = var14;
    var14 = var10[var2];
    var14 = var9.bind(var1)(var14);
    var14 = var14.default;
    var14 = var14.MENTION_TIMESTAMP;
    var _closure1_slot58 = var14;
    var2 = var10[var2];
    var2 = var9.bind(var1)(var2);
    var2 = var2.default;
    var2 = var2.LAUNCHABLE_APPLICATIONS;
    var _closure1_slot59 = var2;
    var2 = function() {
        var4 = _closure1_slot6;
        var3 = function AutocompleteBoostersCache() {
            var3 = this;
            var4 = _closure1_slot5;
            var2 = _closure2_slot0;
            var1 = undefined;
            var2 = var4.bind(var1)(var3, var2);
            var2 = null;
            var3['lastFrecencyVersion'] = var2;
            var3['lastRelationshipVersion'] = var2;
            var3['lastPrivateChannelsVersion'] = var2;
            var2 = global;
            var2 = var2.Map;
            var4 = var2.prototype;
            var4 = Object.create(var4, {constructor: {value: var2}});
            var7 = var4;
            var2 = new var7[var2](var6);
            var2 = var2 instanceof Object ? var2 : var4;
            var3['cache'] = var2;
            return var1;
        };
        var _closure2_slot0 = var3;
        var1 = {};
        var2 = 'get';
        var1['key'] = var2;
        var2 = function value(arg1) {
            _fun0017: for(var _fun0017_ip = 0; ; ) switch(_fun0017_ip) {
case 0:
                var5 = arg1;
                var3 = this;
                var1 = var3.isStale;
                var1 = var1.bind(var3)();
                if(!var1) { _fun0017_ip = 39; continue _fun0017 }
case 167:
                var2 = var3.cache;
                var1 = var2.clear;
                var1 = var1.bind(var2)();
case 39:
                var2 = var3.cache;
                var1 = var2.get;
                var1 = var1.bind(var2)(var5);
                var2 = null;
                if(!(var2 == var1)) { _fun0017_ip = 162; continue _fun0017 }
case 42:
                var2 = var3.build;
                var2 = var2.bind(var3)(var5);
                var4 = var3.cache;
                var3 = var4.set;
                var3 = var3.bind(var4)(var5, var2);
                return var2;
case 162:
                return var1;
            }
        };
        var1['value'] = var2;
        var2 = new Array(3);
        var2[0] = var1;
        var1 = {};
        var6 = 'isStale';
        var1['key'] = var6;
        var6 = function value() {
            _fun0018: for(var _fun0018_ip = 0; ; ) switch(_fun0018_ip) {
case 0:
                var3 = this;
                var4 = _closure1_slot27;
                var2 = var4.getVersion;
                var5 = var2.bind(var4)();
                var4 = _closure1_slot37;
                var2 = var4.getVersion;
                var4 = var2.bind(var4)();
                var2 = _closure1_slot25;
                var1 = var2.getPrivateChannelsVersion;
                var2 = var1.bind(var2)();
                var1 = var3.lastFrecencyVersion;
                var1 = var1 !== var5;
                if(var1) { _fun0018_ip = 155; continue _fun0018 }
case 7:
                var6 = var3.lastRelationshipVersion;
                var1 = var6 !== var4;
case 155:
                if(var1) { _fun0018_ip = 168; continue _fun0018 }
case 159:
                var6 = var3.lastPrivateChannelsVersion;
                var1 = var6 !== var2;
case 168:
                if(!var1) { _fun0018_ip = 166; continue _fun0018 }
case 162:
                var3['lastFrecencyVersion'] = var5;
                var3['lastRelationshipVersion'] = var4;
                var3['lastPrivateChannelsVersion'] = var2;
                var1 = true;
case 166:
                return var1;
            }
        };
        var1['value'] = var6;
        var2[1] = var1;
        var1 = {};
        var6 = 'build';
        var1['key'] = var6;
        var5 = function value(arg1) {
            _fun0019: for(var _fun0019_ip = 0; ; ) switch(_fun0019_ip) {
case 0:
                var12 = arg1;
                var4 = _closure1_slot27;
                var3 = var4.getFrequentlyWithoutFetchingLatest;
                var5 = var3.bind(var4)();
                var6 = var5.reduce;
                var4 = function(arg1, arg2) {
                    _fun0020: for(var _fun0020_ip = 0; ; ) switch(_fun0020_ip) {
case 0:
                        var1 = arg1;
                        var2 = arg2;
                        var4 = var2.id;
                        var3 = _closure1_slot27;
                        var2 = var3.getScoreWithoutFetchingLatest;
                        var2 = var2.bind(var3)(var4);
                        if(!(var2 > var1)) { _fun0020_ip = 38; continue _fun0020 }
case 33:
                        var1 = var2;
case 38:
                        return var1;
                    }
                };
                var3 = 0;
                var11 = var6.bind(var5)(var4, var3);
                var4 = new Array(0);
                var3 = _closure1_slot47;
                var3 = var3.GUILD;
                if(!(var3 !== var12)) { _fun0019_ip = 51; continue _fun0019 }
case 169:
                var3 = _closure1_slot47;
                var3 = var3.USER;
                if(!(var3 !== var12)) { _fun0019_ip = 17; continue _fun0019 }
case 44:
                var3 = _closure1_slot47;
                var3 = var3.GROUP_DM;
                if(!(var3 !== var12)) { _fun0019_ip = 170; continue _fun0019 }
case 171:
                var3 = _closure1_slot47;
                var3 = var3.TEXT_CHANNEL;
                if(!(var3 !== var12)) { _fun0019_ip = 172; continue _fun0019 }
case 173:
                var3 = _closure1_slot47;
                var3 = var3.VOICE_CHANNEL;
                if(!(var3 === var12)) { _fun0019_ip = 174; continue _fun0019 }
case 175:
                var6 = var5.filter;
                var3 = function(arg1) {
                    _fun0021: for(var _fun0021_ip = 0; ; ) switch(_fun0021_ip) {
case 0:
                        var3 = arg1;
                        var1 = _closure1_slot16;
                        var1 = var3 instanceof var1;
                        if(!var1) { _fun0021_ip = 53; continue _fun0021 }
case 147:
                        var2 = var3.isGuildVocal;
                        var1 = var2.bind(var3)();
case 53:
                        return var1;
                    }
                };
                var4 = var6.bind(var5)(var3);
                _fun0019_ip = 174; continue _fun0019;
case 172:
                var6 = var5.filter;
                var3 = function(arg1) {
                    _fun0022: for(var _fun0022_ip = 0; ; ) switch(_fun0022_ip) {
case 0:
                        var2 = arg1;
                        var1 = _closure1_slot16;
                        var1 = var2 instanceof var1;
                        if(!var1) { _fun0022_ip = 33; continue _fun0022 }
case 147:
                        var4 = _closure1_slot18;
                        var3 = var2.type;
                        var2 = undefined;
                        var1 = var4.bind(var2)(var3);
case 33:
                        return var1;
                    }
                };
                var4 = var6.bind(var5)(var3);
                _fun0019_ip = 174; continue _fun0019;
case 170:
                var6 = var5.filter;
                var3 = function(arg1) {
                    _fun0023: for(var _fun0023_ip = 0; ; ) switch(_fun0023_ip) {
case 0:
                        var3 = arg1;
                        var1 = _closure1_slot16;
                        var1 = var3 instanceof var1;
                        if(!var1) { _fun0023_ip = 53; continue _fun0023 }
case 147:
                        var2 = var3.isMultiUserDM;
                        var1 = var2.bind(var3)();
case 53:
                        return var1;
                    }
                };
                var4 = var6.bind(var5)(var3);
                _fun0019_ip = 174; continue _fun0019;
case 17:
                var6 = var5.filter;
                var3 = function(arg1) {
                    _fun0024: for(var _fun0024_ip = 0; ; ) switch(_fun0024_ip) {
case 0:
                        var3 = arg1;
                        var1 = _closure1_slot16;
                        var1 = var3 instanceof var1;
                        if(!var1) { _fun0024_ip = 38; continue _fun0024 }
case 147:
                        var3 = var3.type;
                        var2 = _closure1_slot44;
                        var2 = var2.DM;
                        var1 = var3 === var2;
case 38:
                        return var1;
                    }
                };
                var4 = var6.bind(var5)(var3);
                _fun0019_ip = 174; continue _fun0019;
case 51:
                var3 = var5.filter;
                var1 = function(arg1) {
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot3;
                    var1 = 35;
                    var2 = var2[var1];
                    var1 = undefined;
                    var3 = var3.bind(var1)(var2);
                    var2 = var3.isGuildRecord;
                    var1 = arg1;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var4 = var3.bind(var5)(var1);
case 174:
                var1 = {};
                var3 = _closure1_slot63;
                var8 = undefined;
                var10 = var3.bind(var8)(var4);
                var4 = var10.bind(var8)();
                var3 = var4.done;
                var7 = 1;
                var9 = var4;
                var6 = undefined;
                var5 = undefined;
                var4 = undefined;
                if(var3) { _fun0019_ip = 176; continue _fun0019 }
case 177:
                var17 = var9.value;
                var14 = var17.id;
                var13 = _closure1_slot27;
                var3 = var13.getScoreWithoutFetchingLatest;
                var3 = var3.bind(var13)(var14);
                var13 = _closure1_slot47;
                var13 = var13.USER;
                if(!(var12 === var13)) { _fun0019_ip = 178; continue _fun0019 }
case 179:
                var13 = _closure1_slot21;
                var13 = var17 instanceof var13;
                if(var13) { _fun0019_ip = 180; continue _fun0019 }
case 178:
                var13 = var3 / var11;
                var13 = var7 + var13;
                var1[var14] = var13;
                var15 = var6;
                var14 = var5;
                var13 = var4;
                _fun0019_ip = 181; continue _fun0019;
case 180:
                var18 = var17.type;
                var16 = _closure1_slot44;
                var16 = var16.DM;
                if(!(var18 !== var16)) { _fun0019_ip = 182; continue _fun0019 }
case 183:
                var18 = var17.type;
                var16 = _closure1_slot44;
                var16 = var16.GROUP_DM;
                var15 = var6;
                var14 = var5;
                var13 = var4;
                if(!(var18 === var16)) { _fun0019_ip = 181; continue _fun0019 }
case 184:
                var16 = var17.recipients;
                var20 = var16.length;
                var18 = _closure1_slot63;
                var16 = var17.recipients;
                var19 = var18.bind(var8)(var16);
                var21 = var19.bind(var8)();
                var16 = var21.done;
                var18 = var21;
                var15 = var18;
                var14 = var20;
                var13 = var19;
                if(var16) { _fun0019_ip = 181; continue _fun0019 }
case 185:
                var21 = var18.value;
                var22 = var3 / var11;
                var16 = var7 / var20;
                var16 = var22 * var16;
                var16 = var7 + var16;
                var1[var21] = var16;
                var21 = var19.bind(var8)();
                var16 = var21.done;
                var18 = var21;
                var15 = var18;
                var14 = var20;
                var13 = var19;
                if(var16) { _fun0019_ip = 181; continue _fun0019 }
case 186:
                _fun0019_ip = 185; continue _fun0019;
case 182:
                var16 = var17.getRecipientId;
                var16 = var16.bind(var17)();
                var3 = var3 / var11;
                var3 = var7 + var3;
                var1[var16] = var3;
                var15 = var6;
                var14 = var5;
                var13 = var4;
case 181:
                var16 = var10.bind(var8)();
                var3 = var16.done;
                var6 = var15;
                var5 = var14;
                var4 = var13;
                var9 = var16;
                if(!var3) { _fun0019_ip = 177; continue _fun0019 }
case 176:
                var4 = _closure1_slot63;
                var5 = _closure1_slot37;
                var3 = var5.getFriendIDs;
                var3 = var3.bind(var5)();
                var9 = var4.bind(var8)(var3);
                var4 = var9.bind(var8)();
                var3 = var4.done;
                var5 = 0.2;
                var6 = null;
                if(var3) { _fun0019_ip = 187; continue _fun0019 }
case 188:
                var10 = var4.value;
                var11 = var1[var10];
                var12 = var6 != var11;
                var3 = var7;
                if(!var12) { _fun0019_ip = 189; continue _fun0019 }
case 190:
                var3 = var11;
case 189:
                var3 = var3 + var5;
                var1[var10] = var3;
                var10 = var9.bind(var8)();
                var3 = var10.done;
                var4 = var10;
                if(!var3) { _fun0019_ip = 188; continue _fun0019 }
case 187:
                var3 = _closure1_slot63;
                var4 = _closure1_slot25;
                var2 = var4.getDMUserIds;
                var2 = var2.bind(var4)();
                var5 = var3.bind(var8)(var2);
                var3 = var5.bind(var8)();
                var2 = var3.done;
                var4 = 0.1;
                if(var2) { _fun0019_ip = 191; continue _fun0019 }
case 192:
                var9 = var3.value;
                var10 = var1[var9];
                var11 = var6 != var10;
                var2 = var7;
                if(!var11) { _fun0019_ip = 79; continue _fun0019 }
case 193:
                var2 = var10;
case 79:
                var2 = var2 + var4;
                var1[var9] = var2;
                var9 = var5.bind(var8)();
                var2 = var9.done;
                var3 = var9;
                if(!var2) { _fun0019_ip = 192; continue _fun0019 }
case 191:
                return var1;
            }
        };
        var1['value'] = var5;
        var2[2] = var1;
        var1 = undefined;
        var1 = var4.bind(var1)(var3, var2);
        return var1;
    };
    var2 = var2.bind(var1)();
    var14 = var2.prototype;
    var14 = Object.create(var14, {constructor: {value: var2}});
    var19 = var14;
    var2 = new var19[var2](var18);
    var2 = var2 instanceof Object ? var2 : var14;
    var _closure1_slot60 = var2;
    var2 = new Array(3);
    var2[0] = var13;
    var2[1] = var12;
    var7 = var7.GUILD_CATEGORY;
    var2[2] = var7;
    var _closure1_slot61 = var2;
    var7 = 43;
    var7 = var10[var7];
    var13 = var9.bind(var1)(var7);
    var12 = var13.cachedFunction;
    var7 = function() {
        var2 = global;
        var3 = var2.Map;
        var4 = var3.prototype;
        var4 = Object.create(var4, {constructor: {value: var3}});
        var10 = var4;
        var3 = new var10[var3](var9);
        var4 = var3 instanceof Object ? var3 : var4;
        var _closure2_slot0 = var4;
        var2 = var2.Map;
        var3 = var2.prototype;
        var3 = Object.create(var3, {constructor: {value: var2}});
        var10 = var3;
        var2 = new var10[var2](var9);
        var3 = var2 instanceof Object ? var2 : var3;
        var _closure2_slot1 = var3;
        var2 = new Array(0);
        var _closure2_slot2 = var2;
        var8 = _closure1_slot1;
        var7 = _closure1_slot3;
        var6 = 42;
        var6 = var7[var6];
        var7 = undefined;
        var6 = var8.bind(var7)(var6);
        var8 = _closure1_slot25;
        var5 = var8.getMutablePrivateChannels;
        var5 = var5.bind(var8)();
        var6 = var6.bind(var7)(var5);
        var5 = var6.values;
        var6 = var5.bind(var6)();
        var5 = var6.value;
        var6 = var5.bind(var6)();
        var5 = var6.forEach;
        var1 = function(arg1) {
            _fun0025: for(var _fun0025_ip = 0; ; ) switch(_fun0025_ip) {
case 0:
                var6 = arg1;
                var1 = var6.isDM;
                var1 = var1.bind(var6)();
                if(!var1) { _fun0025_ip = 41; continue _fun0025 }
case 167:
                var1 = var6.getRecipientId;
                var4 = var1.bind(var6)();
                var2 = _closure1_slot40;
                var1 = var2.getUser;
                var3 = var1.bind(var2)(var4);
                var2 = null;
                var1 = var2 == var4;
                if(var1) { _fun0025_ip = 194; continue _fun0025 }
case 28:
                var1 = var2 == var3;
case 194:
                if(var1) { _fun0025_ip = 143; continue _fun0025 }
case 195:
                var5 = _closure2_slot0;
                var2 = var5.has;
                var1 = var2.bind(var5)(var4);
case 143:
                if(var1) { _fun0025_ip = 41; continue _fun0025 }
case 163:
                var5 = _closure2_slot0;
                var2 = var5.set;
                var2 = var2.bind(var5)(var4, var6);
                var6 = _closure2_slot2;
                var5 = var6.push;
                var2 = {};
                var2['userId'] = var4;
                var8 = _closure1_slot37;
                var7 = var8.getNickname;
                var7 = var7.bind(var8)(var4);
                var2['nick'] = var7;
                var2 = var5.bind(var6)(var2);
                var2 = _closure2_slot1;
                var1 = var2.set;
                var1 = var1.bind(var2)(var4, var3);
case 41:
                var1 = undefined;
                return var1;
            }
        };
        var1 = var5.bind(var6)(var1);
        var1 = {};
        var1['channelsByRecipientId'] = var4;
        var1['recipientsById'] = var3;
        var1['recipients'] = var2;
        return var1;
    };
    var7 = var12.bind(var13)(var7);
    var _closure1_slot62 = var7;
    var7 = {};
    var12 = function queryFriends(arg1) {
        _fun0026: for(var _fun0026_ip = 0; ; ) switch(_fun0026_ip) {
case 0:
            var1 = arg1;
            var7 = var1.query;
            var5 = var1.limit;
            var3 = undefined;
            if(!(var5 === var3)) { _fun0026_ip = 31; continue _fun0026 }
case 29:
            var5 = 10;
case 31:
            var2 = var1._fuzzy;
            var4 = var1.filter;
            var2 = _closure1_slot69;
            var1 = {};
            var1['query'] = var7;
            var8 = _closure1_slot37;
            var7 = var8.getFriendIDs;
            var9 = var7.bind(var8)();
            var8 = var9.map;
            var7 = function(arg1) {
                var3 = _closure1_slot40;
                var2 = var3.getUser;
                var1 = arg1;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var8 = var8.bind(var9)(var7);
            var7 = var8.filter;
            var9 = _closure1_slot0;
            var10 = _closure1_slot3;
            var6 = 44;
            var6 = var10[var6];
            var6 = var9.bind(var3)(var6);
            var6 = var6.isNotNullish;
            var6 = var7.bind(var8)(var6);
            var1['members'] = var6;
            var1['limit'] = var5;
            var1['filter'] = var4;
            var1 = var2.bind(var3)(var1);
            return var1;
        }
    };
    var7['queryFriends'] = var12;
    var12 = function queryDMUsers(arg1) {
        _fun0027: for(var _fun0027_ip = 0; ; ) switch(_fun0027_ip) {
case 0:
            var1 = arg1;
            var7 = var1.query;
            var5 = var1.limit;
            var3 = undefined;
            if(!(var5 === var3)) { _fun0027_ip = 31; continue _fun0027 }
case 29:
            var5 = 10;
case 31:
            var4 = var1.filter;
            var2 = _closure1_slot69;
            var1 = {};
            var1['query'] = var7;
            var8 = _closure1_slot25;
            var7 = var8.getDMUserIds;
            var9 = var7.bind(var8)();
            var8 = var9.map;
            var7 = function(arg1) {
                var3 = _closure1_slot40;
                var2 = var3.getUser;
                var1 = arg1;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var8 = var8.bind(var9)(var7);
            var7 = var8.filter;
            var9 = _closure1_slot0;
            var10 = _closure1_slot3;
            var6 = 44;
            var6 = var10[var6];
            var6 = var9.bind(var3)(var6);
            var6 = var6.isNotNullish;
            var6 = var7.bind(var8)(var6);
            var1['members'] = var6;
            var1['limit'] = var5;
            var1['filter'] = var4;
            var1 = var2.bind(var3)(var1);
            return var1;
        }
    };
    var7['queryDMUsers'] = var12;
    var12 = function queryChannelUsers(arg1) {
        _fun0028: for(var _fun0028_ip = 0; ; ) switch(_fun0028_ip) {
case 0:
            var1 = arg1;
            var10 = var1.channelId;
            var8 = var1.query;
            var6 = var1.limit;
            var3 = undefined;
            if(!(var6 === var3)) { _fun0028_ip = 3; continue _fun0028 }
case 53:
            var6 = 10;
case 3:
            var12 = var1.request;
            if(!(var12 === var3)) { _fun0028_ip = 161; continue _fun0028 }
case 196:
            var12 = true;
case 161:
            var9 = var1.checkRecentlyTalkedOnEmptyQuery;
            if(!(var9 === var3)) { _fun0028_ip = 197; continue _fun0028 }
case 198:
            var9 = true;
case 197:
            var4 = var1.allowSnowflake;
            if(!(var4 === var3)) { _fun0028_ip = 199; continue _fun0028 }
case 200:
            var4 = false;
case 199:
            var _closure2_slot0 = var3;
            var7 = _closure1_slot25;
            var2 = var7.getChannel;
            var7 = var2.bind(var7)(var10);
            var11 = null;
            if(!(var11 != var7)) { _fun0028_ip = 201; continue _fun0028 }
case 11:
            var2 = var7.isThread;
            var2 = var2.bind(var7)();
            var10 = null;
            if(!var2) { _fun0028_ip = 202; continue _fun0028 }
case 203:
            var14 = _closure1_slot25;
            var13 = var14.getChannel;
            var2 = var7.parent_id;
            var10 = var13.bind(var14)(var2);
case 202:
            var2 = var7;
            if(!(var11 != var10)) { _fun0028_ip = 49; continue _fun0028 }
case 151:
            var2 = var10;
case 49:
            _closure2_slot0 = var2;
            if(!(var11 != var2)) { _fun0028_ip = 204; continue _fun0028 }
case 170:
            var10 = var2.isPrivate;
            var10 = var10.bind(var2)();
            if(var10) { _fun0028_ip = 178; continue _fun0028 }
case 205:
            var13 = var8.length;
            var10 = 0;
            if(!(var10 === var13)) { _fun0028_ip = 206; continue _fun0028 }
case 16:
            if(!var9) { _fun0028_ip = 206; continue _fun0028 }
case 207:
            var9 = _closure1_slot75;
            var7 = var7.id;
            var9 = var9.bind(var3)(var7, var6);
            var7 = var9.length;
            if(!(!(var7 > var10))) { _fun0028_ip = 25; continue _fun0028 }
case 206:
            var13 = _closure1_slot31;
            var10 = var13.getMembers;
            var7 = var2.guild_id;
            var13 = var10.bind(var13)(var7);
            var10 = var13.filter;
            var7 = _closure1_slot67;
            var10 = var10.bind(var13)(var7);
            var7 = var10;
            if(!var12) { _fun0028_ip = 208; continue _fun0028 }
case 209:
            var13 = _closure1_slot1;
            var14 = _closure1_slot3;
            var12 = 45;
            var12 = var14[var12];
            var14 = var13.bind(var3)(var12);
            var13 = var14.requestMembers;
            var12 = var2.guild_id;
            var12 = var13.bind(var14)(var12, var8, var6);
            var7 = var10;
            _fun0028_ip = 208; continue _fun0028;
case 25:
            return var9;
case 178:
            var10 = var2.recipients;
            var9 = var10.map;
            var2 = function(arg1) {
                _fun0029: for(var _fun0029_ip = 0; ; ) switch(_fun0029_ip) {
case 0:
                    var4 = arg1;
                    var1 = {};
                    var1['userId'] = var4;
                    var3 = _closure1_slot37;
                    var2 = var3.getNickname;
                    var3 = var2.bind(var3)(var4);
                    var2 = null;
                    var4 = var2 != var3;
                    if(!var4) { _fun0029_ip = 37; continue _fun0029 }
case 38:
                    var2 = var3;
case 37:
                    var1['nick'] = var2;
                    return var1;
                }
            };
            var2 = var9.bind(var10)(var2);
            var10 = _closure1_slot40;
            var9 = var10.getCurrentUser;
            var12 = var9.bind(var10)();
            var7 = var2;
            if(!(var11 != var12)) { _fun0028_ip = 208; continue _fun0028 }
case 210:
            var10 = var2.push;
            var9 = {};
            var12 = var12.id;
            var9['userId'] = var12;
            var9['nick'] = var11;
            var9 = var10.bind(var2)(var9);
            var7 = var2;
case 208:
            var2 = _closure1_slot69;
            var1 = {};
            var1['query'] = var8;
            var1['members'] = var7;
            var1['limit'] = var6;
            var5 = function filter(arg1) {
                _fun0030: for(var _fun0030_ip = 0; ; ) switch(_fun0030_ip) {
case 0:
                    var2 = _closure2_slot0;
                    var1 = var2.isPrivate;
                    var1 = var1.bind(var2)();
                    if(var1) { _fun0030_ip = 211; continue _fun0030 }
case 29:
                    var4 = _closure1_slot2;
                    var3 = _closure1_slot3;
                    var2 = 46;
                    var3 = var3[var2];
                    var2 = undefined;
                    var4 = var4.bind(var2)(var3);
                    var3 = var4.can;
                    var2 = {};
                    var6 = _closure1_slot42;
                    var6 = var6.VIEW_CHANNEL;
                    var2['permission'] = var6;
                    var6 = arg1;
                    var2['user'] = var6;
                    var5 = _closure2_slot0;
                    var2['context'] = var5;
                    var1 = var3.bind(var4)(var2);
case 211:
                    return var1;
                }
            };
            var1['filter'] = var5;
            var1['allowSnowflake'] = var4;
            var1 = var2.bind(var3)(var1);
            return var1;
case 204:
            var1 = new Array(0);
            return var1;
case 201:
            var1 = new Array(0);
            return var1;
        }
    };
    var7['queryChannelUsers'] = var12;
    var12 = function queryGuildUsers(arg1) {
        _fun0031: for(var _fun0031_ip = 0; ; ) switch(_fun0031_ip) {
case 0:
            var2 = arg1;
            var11 = var2.guildId;
            var9 = var2.query;
            var7 = var2.limit;
            var4 = undefined;
            if(!(var7 === var4)) { _fun0031_ip = 34; continue _fun0031 }
case 212:
            var7 = 10;
case 34:
            var3 = var2.request;
            if(!(var3 === var4)) { _fun0031_ip = 196; continue _fun0031 }
case 40:
            var3 = true;
case 196:
            var1 = var2.checkRecentlyTalkedOnEmptyQuery;
            if(!(var1 === var4)) { _fun0031_ip = 198; continue _fun0031 }
case 149:
            var1 = true;
case 198:
            var6 = var2.filter;
            var5 = var2.allowSnowflake;
            var10 = _closure1_slot33;
            var8 = var10.getGuild;
            var10 = var8.bind(var10)(var11);
            var8 = null;
            if(!(var8 != var10)) { _fun0031_ip = 213; continue _fun0031 }
case 171:
            var8 = var9.length;
            var12 = 0;
            if(!(var12 === var8)) { _fun0031_ip = 151; continue _fun0031 }
case 48:
            if(!var1) { _fun0031_ip = 151; continue _fun0031 }
case 173:
            var8 = _closure1_slot75;
            var10 = _closure1_slot38;
            var1 = var10.getChannelId;
            var1 = var1.bind(var10)(var11);
            var1 = var8.bind(var4)(var1, var7);
            var8 = var1.length;
            if(!(!(var8 > var12))) { _fun0031_ip = 214; continue _fun0031 }
case 151:
            var10 = _closure1_slot31;
            var8 = var10.getMembers;
            var13 = var8.bind(var10)(var11);
            var10 = var13.filter;
            var8 = _closure1_slot67;
            var8 = var10.bind(var13)(var8);
            if(!var3) { _fun0031_ip = 16; continue _fun0031 }
case 215:
            var10 = var9.length;
            var3 = var10 > var12;
case 16:
            if(!var3) { _fun0031_ip = 216; continue _fun0031 }
case 207:
            var10 = _closure1_slot1;
            var12 = _closure1_slot3;
            var3 = 45;
            var3 = var12[var3];
            var10 = var10.bind(var4)(var3);
            var3 = var10.requestMembers;
            var3 = var3.bind(var10)(var11, var9, var7);
case 216:
            var3 = _closure1_slot69;
            var2 = {};
            var2['query'] = var9;
            var2['members'] = var8;
            var2['limit'] = var7;
            var2['filter'] = var6;
            var2['allowSnowflake'] = var5;
            var2 = var3.bind(var4)(var2);
            return var2;
case 214:
            return var1;
case 213:
            var1 = new Array(0);
            return var1;
        }
    };
    var7['queryGuildUsers'] = var12;
    var12 = function queryUsers(arg1) {
        _fun0032: for(var _fun0032_ip = 0; ; ) switch(_fun0032_ip) {
case 0:
            var1 = arg1;
            var9 = var1.query;
            var6 = var1.filter;
            var4 = var1.boosters;
            var7 = var1.limit;
            var3 = undefined;
            if(!(var7 === var3)) { _fun0032_ip = 154; continue _fun0032 }
case 146:
            var7 = 10;
case 154:
            var8 = var1.users;
            var5 = var1.allowSnowflake;
            var2 = _closure1_slot69;
            var1 = {};
            var1['query'] = var9;
            var1['members'] = var8;
            var1['limit'] = var7;
            var1['filter'] = var6;
            var1['allowSnowflake'] = var5;
            var1['boosters'] = var4;
            var1 = var2.bind(var3)(var1);
            return var1;
        }
    };
    var7['queryUsers'] = var12;
    var12 = function queryAllUsers(arg1) {
        _fun0033: for(var _fun0033_ip = 0; ; ) switch(_fun0033_ip) {
case 0:
            var1 = arg1;
            var3 = this;
            var9 = var1.query;
            var5 = var1.filter;
            var4 = var1.boosters;
            var8 = var1.limit;
            var6 = undefined;
            if(!(var8 === var6)) { _fun0033_ip = 217; continue _fun0033 }
case 154:
            var8 = 10;
case 217:
            var7 = var1.request;
            if(!(var7 === var6)) { _fun0033_ip = 5; continue _fun0033 }
case 141:
            var7 = true;
case 5:
            var1 = var7;
            if(!var1) { _fun0033_ip = 199; continue _fun0033 }
case 4:
            var10 = var9.length;
            var2 = 0;
            var1 = var10 > var2;
case 199:
            if(!var1) { _fun0033_ip = 166; continue _fun0033 }
case 218:
            var2 = _closure1_slot1;
            var10 = _closure1_slot3;
            var1 = 45;
            var1 = var10[var1];
            var10 = var2.bind(var6)(var1);
            var2 = var10.requestMembers;
            var1 = null;
            var1 = var2.bind(var10)(var1, var9, var8);
case 166:
            var2 = var3.queryUsers;
            var1 = {};
            var1['query'] = var9;
            var1['limit'] = var8;
            var1['request'] = var7;
            var1['filter'] = var5;
            var1['boosters'] = var4;
            var7 = _closure1_slot1;
            var8 = _closure1_slot3;
            var5 = 42;
            var5 = var8[var5];
            var5 = var7.bind(var6)(var5);
            var7 = _closure1_slot40;
            var4 = var7.getUsers;
            var4 = var4.bind(var7)();
            var5 = var5.bind(var6)(var4);
            var4 = var5.values;
            var5 = var4.bind(var5)();
            var4 = var5.value;
            var4 = var4.bind(var5)();
            var1['users'] = var4;
            var1 = var2.bind(var3)(var1);
            return var1;
        }
    };
    var7['queryAllUsers'] = var12;
    var12 = function queryChannels(arg1) {
        _fun0034: for(var _fun0034_ip = 0; ; ) switch(_fun0034_ip) {
case 0:
            var1 = arg1;
            var39 = var1.query;
            var38 = var1.guildId;
            var2 = var1.limit;
            var7 = undefined;
            if(!(var2 === var7)) { _fun0034_ip = 154; continue _fun0034 }
case 53:
            var2 = _closure1_slot46;
case 154:
            var37 = var1.fuzzy;
            if(!(var37 === var7)) { _fun0034_ip = 2; continue _fun0034 }
case 219:
            var37 = true;
case 2:
            var36 = var1.filter;
            if(!(var36 === var7)) { _fun0034_ip = 169; continue _fun0034 }
case 4:
            var36 = _closure1_slot52;
case 169:
            var35 = var1.type;
            if(!(var35 === var7)) { _fun0034_ip = 220; continue _fun0034 }
case 155:
            var35 = _closure1_slot28;
case 220:
            var3 = var1.allowEmptyQueries;
            if(!(var3 === var7)) { _fun0034_ip = 171; continue _fun0034 }
case 211:
            var3 = false;
case 171:
            var34 = var1.requireVocalConnectAccess;
            if(!(var34 === var7)) { _fun0034_ip = 221; continue _fun0034 }
case 222:
            var34 = true;
case 221:
            var33 = var1.boosters;
            if(!(var33 === var7)) { _fun0034_ip = 223; continue _fun0034 }
case 224:
            var33 = {};
case 223:
            var32 = var1.allowSnowflake;
            var9 = var1.includeAllThreads;
            var1 = function getSeparatedQueries(arg1) {
                _fun0035: for(var _fun0035_ip = 0; ; ) switch(_fun0035_ip) {
case 0:
                    var3 = arg1;
                    var2 = arguments[1];
                    var11 = undefined;
                    if(!(var2 === var11)) { _fun0035_ip = 225; continue _fun0035 }
case 32:
                    var2 = false;
case 225:
                    var _closure3_slot0 = var2;
                    var2 = var3.split;
                    var9 = ' ';
                    var5 = var2.bind(var3)(var9);
                    var4 = var5.filter;
                    var2 = function(arg1) {
                        _fun0036: for(var _fun0036_ip = 0; ; ) switch(_fun0036_ip) {
case 0:
                            var2 = '';
                            var1 = arg1;
                            var1 = var2 !== var1;
                            if(var1) { _fun0036_ip = 152; continue _fun0036 }
case 32:
                            var1 = _closure3_slot0;
case 152:
                            return var1;
                        }
                    };
                    var4 = var4.bind(var5)(var2);
                    var2 = var4.map;
                    var1 = function(arg1) {
                        var2 = arg1;
                        var1 = var2.toLocaleLowerCase;
                        var6 = var1.bind(var2)();
                        var1 = {};
                        var1['queryLower'] = var6;
                        var4 = global;
                        var11 = var4.RegExp;
                        var7 = _closure1_slot1;
                        var8 = _closure1_slot3;
                        var2 = 36;
                        var5 = var8[var2];
                        var3 = undefined;
                        var9 = var7.bind(var3)(var5);
                        var5 = var9.escape;
                        var10 = var5.bind(var9)(var6);
                        var5 = var4.HermesInternal;
                        var9 = var5.concat;
                        var5 = '^';
                        var13 = var9.bind(var5)(var10);
                        var5 = var11.prototype;
                        var10 = Object.create(var5, {constructor: {value: var11}});
                        var5 = 'i';
                        var14 = var10;
                        var12 = var5;
                        var9 = new var14[var11](var13, var12, var11);
                        var9 = var9 instanceof Object ? var9 : var10;
                        var1['exactQuery'] = var9;
                        var4 = var4.RegExp;
                        var2 = var8[var2];
                        var3 = var7.bind(var3)(var2);
                        var2 = var3.escape;
                        var13 = var2.bind(var3)(var6);
                        var3 = var4.prototype;
                        var3 = Object.create(var3, {constructor: {value: var4}});
                        var14 = var3;
                        var2 = new var14[var4](var13, var12, var11);
                        var2 = var2 instanceof Object ? var2 : var3;
                        var1['containQuery'] = var2;
                        var2 = false;
                        var1['isFullMatch'] = var2;
                        return var1;
                    };
                    var1 = var2.bind(var4)(var1);
                    var2 = var3.includes;
                    var2 = var2.bind(var3)(var9);
                    if(!var2) { _fun0035_ip = 226; continue _fun0035 }
case 227:
                    var2 = var3.toLocaleLowerCase;
                    var10 = var2.bind(var3)();
                    var3 = var1.unshift;
                    var2 = {};
                    var2['queryLower'] = var10;
                    var6 = global;
                    var15 = var6.RegExp;
                    var5 = _closure1_slot1;
                    var12 = _closure1_slot3;
                    var4 = 36;
                    var7 = var12[var4];
                    var8 = var5.bind(var11)(var7);
                    var7 = var8.escape;
                    var13 = var7.bind(var8)(var10);
                    var7 = var13.replace;
                    var8 = '( |-)';
                    var14 = var7.bind(var13)(var9, var8);
                    var7 = var6.HermesInternal;
                    var13 = var7.concat;
                    var7 = '^';
                    var17 = var13.bind(var7)(var14);
                    var7 = var15.prototype;
                    var14 = Object.create(var7, {constructor: {value: var15}});
                    var7 = 'i';
                    var18 = var14;
                    var16 = var7;
                    var13 = new var18[var15](var17, var16, var15);
                    var13 = var13 instanceof Object ? var13 : var14;
                    var2['exactQuery'] = var13;
                    var6 = var6.RegExp;
                    var4 = var12[var4];
                    var5 = var5.bind(var11)(var4);
                    var4 = var5.escape;
                    var5 = var4.bind(var5)(var10);
                    var4 = var5.replace;
                    var17 = var4.bind(var5)(var9, var8);
                    var5 = var6.prototype;
                    var5 = Object.create(var5, {constructor: {value: var6}});
                    var18 = var5;
                    var16 = var7;
                    var4 = new var18[var6](var17, var16, var15);
                    var4 = var4 instanceof Object ? var4 : var5;
                    var2['containQuery'] = var4;
                    var4 = true;
                    var2['isFullMatch'] = var4;
                    var2 = var3.bind(var1)(var2);
case 226:
                    return var1;
                }
            };
            var31 = var1.bind(var7)(var39, var3);
            var1 = _closure1_slot28;
            var1 = var35 === var1;
            if(var1) { _fun0034_ip = 228; continue _fun0034 }
case 43:
            var3 = _closure1_slot29;
            var3 = var35 !== var3;
            if(!var3) { _fun0034_ip = 229; continue _fun0034 }
case 230:
            var6 = _closure1_slot20;
            var6 = var6.bind(var7)(var35);
            var6 = !var6;
            var3 = !var6;
case 229:
            var1 = var3;
case 228:
            var3 = null;
            if(!(var3 == var38)) { _fun0034_ip = 231; continue _fun0034 }
case 51:
            var8 = _closure1_slot1;
            var10 = _closure1_slot3;
            var6 = 42;
            var6 = var10[var6];
            var8 = var8.bind(var7)(var6);
            var10 = _closure1_slot25;
            var6 = var10.loadAllGuildAndPrivateChannelsFromDisk;
            var6 = var6.bind(var10)();
            var8 = var8.bind(var7)(var6);
            var6 = var8.values;
            var10 = var6.bind(var8)();
            var8 = var10.concat;
            if(var1) { _fun0034_ip = 232; continue _fun0034 }
case 233:
            var6 = new Array(0);
            _fun0034_ip = 234; continue _fun0034;
case 232:
            var12 = _closure1_slot14;
            var11 = var12.computeAllActiveJoinedThreads;
            var6 = var11.bind(var12)();
case 234:
            var8 = var8.bind(var10)(var6);
            var6 = var8.value;
            var6 = var6.bind(var8)();
            _fun0034_ip = 235; continue _fun0034;
case 231:
            var10 = _closure1_slot1;
            var11 = _closure1_slot3;
            var8 = 42;
            var8 = var11[var8];
            var10 = var10.bind(var7)(var8);
            var11 = _closure1_slot30;
            var8 = var11.getChannels;
            var8 = var8.bind(var11)(var38);
            var8 = var8[var35];
            var10 = var10.bind(var7)(var8);
            var8 = var10.map;
            var5 = function(arg1) {
                var1 = arg1;
                var1 = var1.channel;
                return var1;
            };
            var8 = var8.bind(var10)(var5);
            var5 = var8.concat;
            if(var1) { _fun0034_ip = 236; continue _fun0034 }
case 237:
            var1 = new Array(0);
            _fun0034_ip = 238; continue _fun0034;
case 236:
            if(var9) { _fun0034_ip = 239; continue _fun0034 }
case 240:
            var10 = _closure1_slot14;
            var9 = var10.computeAllActiveJoinedThreads;
            var9 = var9.bind(var10)(var38);
            _fun0034_ip = 241; continue _fun0034;
case 239:
            var11 = _closure1_slot25;
            var10 = var11.getAllThreadsForGuild;
            var9 = var10.bind(var11)(var38);
case 241:
            var1 = var9;
case 238:
            var5 = var5.bind(var8)(var1);
            var1 = var5.value;
            var6 = var1.bind(var5)();
case 235:
            var30 = {};
            var1 = new Array(0);
            var8 = _closure1_slot27;
            var5 = var8.getMaxScore;
            var29 = var5.bind(var8)();
            var5 = _closure1_slot63;
            var28 = var5.bind(var7)(var6);
            var6 = var28.bind(var7)();
            var5 = var6.done;
            var27 = 47;
            var26 = 1;
            var25 = global;
            var24 = 3;
            var23 = 7;
            var22 = 0;
            var21 = 5;
            var20 = 0.5;
            var19 = 6;
            var18 = false;
            var17 = '';
            var16 = var6;
            var15 = undefined;
            var14 = undefined;
            var13 = undefined;
            var12 = undefined;
            var11 = undefined;
            var10 = undefined;
            var9 = undefined;
            var8 = undefined;
            var6 = undefined;
            if(var5) { _fun0034_ip = 242; continue _fun0034 }
case 243:
            var61 = var16.value;
            var51 = var61.type;
            var5 = var3 != var38;
            if(!(var35 !== var51)) { _fun0034_ip = 244; continue _fun0034 }
case 245:
            if(var5) { _fun0034_ip = 246; continue _fun0034 }
case 247:
            var5 = _closure1_slot17;
            var5 = var5.bind(var7)(var51);
            var48 = var15;
            var47 = var14;
            var46 = var13;
            var45 = var12;
            var44 = var11;
            var43 = var10;
            var42 = var9;
            var41 = var8;
            var40 = var6;
            if(!var5) { _fun0034_ip = 248; continue _fun0034 }
case 246:
            var5 = _closure1_slot28;
            if(!(var35 !== var5)) { _fun0034_ip = 249; continue _fun0034 }
case 250:
            var5 = _closure1_slot29;
            var5 = var35 === var5;
            if(!var5) { _fun0034_ip = 251; continue _fun0034 }
case 252:
            var49 = _closure1_slot19;
            var5 = var49.bind(var7)(var51);
case 251:
            _fun0034_ip = 253; continue _fun0034;
case 249:
            var49 = _closure1_slot18;
            var49 = var49.bind(var7)(var51);
            if(var49) { _fun0034_ip = 254; continue _fun0034 }
case 255:
            var50 = _closure1_slot19;
            var49 = var50.bind(var7)(var51);
case 254:
            var5 = var49;
case 253:
            var48 = var15;
            var47 = var14;
            var46 = var13;
            var45 = var12;
            var44 = var11;
            var43 = var10;
            var42 = var9;
            var41 = var8;
            var40 = var6;
            if(!var5) { _fun0034_ip = 248; continue _fun0034 }
case 244:
            var49 = _closure1_slot17;
            var5 = var61.type;
            var5 = var49.bind(var7)(var5);
            if(!var5) { _fun0034_ip = 83; continue _fun0034 }
case 256:
            var50 = _closure1_slot35;
            var49 = var50.can;
            if(var34) { _fun0034_ip = 257; continue _fun0034 }
case 258:
            var5 = _closure1_slot42;
            var5 = var5.VIEW_CHANNEL;
            _fun0034_ip = 259; continue _fun0034;
case 257:
            var5 = var61.accessPermissions;
case 259:
            var5 = var49.bind(var50)(var5, var61);
            var48 = var15;
            var47 = var14;
            var46 = var13;
            var45 = var12;
            var44 = var11;
            var43 = var10;
            var42 = var9;
            var41 = var8;
            var40 = var6;
            if(!var5) { _fun0034_ip = 248; continue _fun0034 }
case 83:
            var5 = var36.bind(var7)(var61);
            var48 = var15;
            var47 = var14;
            var46 = var13;
            var45 = var12;
            var44 = var11;
            var43 = var10;
            var42 = var9;
            var41 = var8;
            var40 = var6;
            if(!var5) { _fun0034_ip = 248; continue _fun0034 }
case 260:
            var53 = new Array(0);
            var69 = var53;
            var68 = var31;
            var67 = 0;
            var5 = arraySpread(var69, var68, var67);
            var49 = _closure1_slot0;
            var5 = _closure1_slot3;
            var5 = var5[var27];
            var51 = var49.bind(var7)(var5);
            var50 = var51.computeChannelName;
            var49 = _closure1_slot40;
            var5 = _closure1_slot37;
            var49 = var50.bind(var51)(var61, var49, var5);
            var5 = var49.toLocaleLowerCase;
            var52 = var5.bind(var49)();
            var51 = var32;
            if(!var51) { _fun0034_ip = 261; continue _fun0034 }
case 262:
            var5 = var61.id;
            var51 = var39 === var5;
case 261:
            if(var51) { _fun0034_ip = 263; continue _fun0034 }
case 264:
            var5 = _closure1_slot72;
            var54 = var5.bind(var7)(var52, var53, var37);
            _fun0034_ip = 265; continue _fun0034;
case 263:
            var54 = _closure1_slot51;
case 265:
            var48 = var15;
            var47 = var53;
            var46 = var52;
            var45 = var51;
            var43 = var10;
            var42 = var9;
            var41 = var8;
            var40 = var6;
            var44 = var54;
            if(!(var22 !== var44)) { _fun0034_ip = 248; continue _fun0034 }
case 266:
            var55 = var53.length;
            var50 = var54;
            var49 = var8;
            var5 = var6;
            if(!(var55 > var22)) { _fun0034_ip = 267; continue _fun0034 }
case 268:
            var55 = _closure1_slot73;
            var56 = var55.bind(var7)(var61, var30);
            var55 = new Array(2);
            var55[0] = var56;
            var56 = _closure1_slot74;
            var56 = var56.bind(var7)(var61, var30);
            var55[1] = var56;
            var56 = var55.length;
            var57 = var22 < var56;
            var62 = var54;
            var60 = 0;
            var58 = var6;
            var59 = var62;
            var56 = 0;
            var54 = var58;
            if(!var57) { _fun0034_ip = 269; continue _fun0034 }
case 270:
            var65 = var55[var60];
            var66 = var62;
            var64 = var58;
            if(!(var3 != var65)) { _fun0034_ip = 271; continue _fun0034 }
case 272:
            var66 = var62;
            var64 = var58;
            if(!(var17 !== var65)) { _fun0034_ip = 271; continue _fun0034 }
case 273:
            var57 = _closure1_slot72;
            var57 = var57.bind(var7)(var65, var53, var18);
            var66 = var62;
            var64 = var57;
            if(!(var22 !== var64)) { _fun0034_ip = 271; continue _fun0034 }
case 274:
            var63 = var20 * var57;
            var66 = var62 + var63;
            var64 = var57;
case 271:
            var60 = var60 + 1;
            var57 = var55.length;
            var62 = var66;
            var58 = var64;
            var59 = var62;
            var8 = var65;
            var54 = var58;
            var56 = var60;
            if(var56 < var57) { _fun0034_ip = 270; continue _fun0034 }
case 269:
            var58 = var25.Math;
            var57 = var58.min;
            var50 = var57.bind(var58)(var19, var59);
            var10 = var56;
            var49 = var8;
            var5 = var54;
            var9 = var55;
case 267:
            var48 = var15;
            var47 = var53;
            var46 = var52;
            var45 = var51;
            var43 = var10;
            var42 = var9;
            var41 = var49;
            var40 = var5;
            var44 = var50;
            if(!(var22 !== var44)) { _fun0034_ip = 248; continue _fun0034 }
case 275:
            var54 = var53.length;
            var48 = var15;
            var47 = var53;
            var46 = var52;
            var45 = var51;
            var44 = var50;
            var43 = var10;
            var42 = var9;
            var41 = var49;
            var40 = var5;
            if(!(!(var54 > var26))) { _fun0034_ip = 248; continue _fun0034 }
case 276:
            var54 = var53.length;
            if(!(var26 === var54)) { _fun0034_ip = 277; continue _fun0034 }
case 278:
            var54 = var53[var22];
            var54 = var54.isFullMatch;
            if(var54) { _fun0034_ip = 277; continue _fun0034 }
case 279:
            var48 = var15;
            var47 = var53;
            var46 = var52;
            var45 = var51;
            var44 = var50;
            var43 = var10;
            var42 = var9;
            var41 = var49;
            var40 = var5;
            if(!var51) { _fun0034_ip = 248; continue _fun0034 }
case 277:
            var55 = _closure1_slot71;
            var54 = var61.type;
            var55 = var55.bind(var7)(var35, var54);
            var54 = var50;
            if(!var55) { _fun0034_ip = 111; continue _fun0034 }
case 280:
            var56 = var25.Math;
            var55 = var56.max;
            var50 = var50 - var26;
            var54 = var55.bind(var56)(var50, var20);
case 111:
            var50 = var61.isThread;
            var55 = var50.bind(var61)();
            var50 = var54;
            if(!var55) { _fun0034_ip = 281; continue _fun0034 }
case 282:
            var55 = var61.isActiveThread;
            var56 = var55.bind(var61)();
            var55 = var54;
            if(var56) { _fun0034_ip = 283; continue _fun0034 }
case 284:
            var55 = var54 - var24;
case 283:
            var57 = _closure1_slot15;
            var56 = var57.hasJoined;
            var54 = var61.id;
            var56 = var56.bind(var57)(var54);
            var54 = var55;
            if(var56) { _fun0034_ip = 285; continue _fun0034 }
case 286:
            var54 = var55 - var21;
case 285:
            var50 = var54;
case 281:
            var57 = var25.Math;
            var56 = var57.min;
            var58 = _closure1_slot27;
            var55 = var58.getScoreWithoutFetchingLatest;
            var54 = var61.id;
            var54 = var55.bind(var58)(var54);
            var55 = var54;
            if(!(var3 == var54)) { _fun0034_ip = 287; continue _fun0034 }
case 288:
            var55 = var22 / var29;
case 287:
            var55 = var56.bind(var57)(var55, var26);
            var57 = var25.Math;
            var56 = var57.min;
            var55 = var24 * var55;
            var55 = var50 + var55;
            var58 = var50 >= var23;
            var50 = var23;
            if(!var58) { _fun0034_ip = 289; continue _fun0034 }
case 290:
            var50 = _closure1_slot51;
case 289:
            var50 = var56.bind(var57)(var55, var50);
            var56 = var1.push;
            var55 = {};
            var58 = _closure1_slot19;
            var57 = var61.type;
            var57 = var58.bind(var7)(var57);
            var58 = _closure1_slot47;
            if(var57) { _fun0034_ip = 291; continue _fun0034 }
case 292:
            var57 = var58.TEXT_CHANNEL;
            _fun0034_ip = 293; continue _fun0034;
case 291:
            var57 = var58.VOICE_CHANNEL;
case 293:
            var55['type'] = var57;
            var55['record'] = var61;
            var58 = _closure1_slot65;
            var57 = var61.id;
            var57 = var33[var57];
            var57 = var58.bind(var7)(var50, var57);
            var55['score'] = var57;
            var58 = _closure1_slot0;
            var57 = _closure1_slot3;
            var57 = var57[var27];
            var60 = var58.bind(var7)(var57);
            var59 = var60.computeChannelName;
            var58 = _closure1_slot40;
            var57 = _closure1_slot37;
            var57 = var59.bind(var60)(var61, var58, var57);
            var55['comparator'] = var57;
            var55['sortable'] = var52;
            var55 = var56.bind(var1)(var55);
            var48 = var54;
            var47 = var53;
            var46 = var52;
            var45 = var51;
            var44 = var50;
            var43 = var10;
            var42 = var9;
            var41 = var49;
            var40 = var5;
case 248:
            var49 = var28.bind(var7)();
            var5 = var49.done;
            var15 = var48;
            var14 = var47;
            var13 = var46;
            var12 = var45;
            var11 = var44;
            var10 = var43;
            var9 = var42;
            var8 = var41;
            var6 = var40;
            var16 = var49;
            if(!var5) { _fun0034_ip = 243; continue _fun0034 }
case 242:
            var5 = var1.sort;
            var6 = _closure1_slot1;
            var8 = _closure1_slot3;
            var4 = 40;
            var4 = var8[var4];
            var4 = var6.bind(var7)(var4);
            var4 = var5.bind(var1)(var4);
            var3 = var3 != var2;
            if(!var3) { _fun0034_ip = 294; continue _fun0034 }
case 295:
            var4 = var1.length;
            var3 = var4 > var2;
case 294:
            if(!var3) { _fun0034_ip = 296; continue _fun0034 }
case 297:
            var1['length'] = var2;
case 296:
            return var1;
        }
    };
    var7['queryChannels'] = var12;
    var12 = function queryGuilds(arg1) {
        _fun0037: for(var _fun0037_ip = 0; ; ) switch(_fun0037_ip) {
case 0:
            var1 = arg1;
            var16 = var1.query;
            var2 = var1.limit;
            var6 = undefined;
            if(!(var2 === var6)) { _fun0037_ip = 31; continue _fun0037 }
case 29:
            var2 = 10;
case 31:
            var15 = var1.fuzzy;
            if(!(var15 === var6)) { _fun0037_ip = 39; continue _fun0037 }
case 33:
            var15 = true;
case 39:
            var14 = var1.allowSnowflake;
            var13 = var1.filter;
            if(!(var13 === var6)) { _fun0037_ip = 42; continue _fun0037 }
case 149:
            var13 = _closure1_slot52;
case 42:
            var12 = var1.boosters;
            if(!(var12 === var6)) { _fun0037_ip = 218; continue _fun0037 }
case 30:
            var12 = {};
case 218:
            var1 = '';
            if(!(var1 !== var16)) { _fun0037_ip = 162; continue _fun0037 }
case 298:
            var3 = var16.toLocaleLowerCase;
            var1 = var3.bind(var16)();
case 162:
            var11 = {};
            var7 = global;
            var18 = var7.RegExp;
            var5 = _closure1_slot1;
            var9 = _closure1_slot3;
            var4 = 36;
            var8 = var9[var4];
            var10 = var5.bind(var6)(var8);
            var8 = var10.escape;
            var17 = var8.bind(var10)(var1);
            var8 = var7.HermesInternal;
            var10 = var8.concat;
            var8 = '^';
            var25 = var10.bind(var8)(var17);
            var8 = var18.prototype;
            var17 = Object.create(var8, {constructor: {value: var18}});
            var8 = 'i';
            var26 = var17;
            var24 = var8;
            var10 = new var26[var18](var25, var24, var23);
            var10 = var10 instanceof Object ? var10 : var17;
            var11['exactQuery'] = var10;
            var7 = var7.RegExp;
            var4 = var9[var4];
            var5 = var5.bind(var6)(var4);
            var4 = var5.escape;
            var25 = var4.bind(var5)(var1);
            var5 = var7.prototype;
            var5 = Object.create(var5, {constructor: {value: var7}});
            var26 = var5;
            var4 = new var26[var7](var25, var24, var23);
            var4 = var4 instanceof Object ? var4 : var5;
            var11['containQuery'] = var4;
            var11['queryLower'] = var1;
            var1 = new Array(0);
            var5 = _closure1_slot63;
            var7 = _closure1_slot33;
            var4 = var7.getGuildsArray;
            var4 = var4.bind(var7)();
            var10 = var5.bind(var6)(var4);
            var5 = var10.bind(var6)();
            var4 = var5.done;
            var9 = 0;
            var8 = var5;
            var7 = undefined;
            var5 = undefined;
            if(var4) { _fun0037_ip = 299; continue _fun0037 }
case 300:
            var20 = var8.value;
            var4 = var13.bind(var6)(var20);
            if(!var4) { _fun0037_ip = 301; continue _fun0037 }
case 302:
            var17 = var20.name;
            var4 = var17.toLocaleLowerCase;
            var17 = var4.bind(var17)();
            if(!var14) { _fun0037_ip = 303; continue _fun0037 }
case 304:
            var4 = var20.id;
            if(!(var16 !== var4)) { _fun0037_ip = 305; continue _fun0037 }
case 303:
            var4 = _closure1_slot66;
            var4 = var4.bind(var6)(var17, var11, var15);
            _fun0037_ip = 306; continue _fun0037;
case 305:
            var4 = _closure1_slot51;
case 306:
            var7 = var17;
            var5 = var4;
            if(!(var4 > var9)) { _fun0037_ip = 301; continue _fun0037 }
case 307:
            var19 = var1.push;
            var18 = {};
            var21 = _closure1_slot47;
            var21 = var21.GUILD;
            var18['type'] = var21;
            var18['record'] = var20;
            var22 = _closure1_slot65;
            var21 = var20.id;
            var21 = var12[var21];
            var21 = var22.bind(var6)(var4, var21);
            var18['score'] = var21;
            var20 = var20.name;
            var18['comparator'] = var20;
            var18['sortable'] = var17;
            var18 = var19.bind(var1)(var18);
            var7 = var17;
            var5 = var4;
case 301:
            var17 = var10.bind(var6)();
            var4 = var17.done;
            var8 = var17;
            if(!var4) { _fun0037_ip = 300; continue _fun0037 }
case 299:
            var4 = var1.sort;
            var5 = _closure1_slot1;
            var7 = _closure1_slot3;
            var3 = 40;
            var3 = var7[var3];
            var3 = var5.bind(var6)(var3);
            var3 = var4.bind(var1)(var3);
            var3 = var1.length;
            if(!(var3 > var2)) { _fun0037_ip = 308; continue _fun0037 }
case 309:
            var1['length'] = var2;
case 308:
            return var1;
        }
    };
    var7['queryGuilds'] = var12;
    var12 = function queryDMChannels(arg1) {
        _fun0038: for(var _fun0038_ip = 0; ; ) switch(_fun0038_ip) {
case 0:
            var1 = arg1;
            var9 = var1.query;
            var2 = var1.limit;
            var6 = undefined;
            if(!(var2 === var6)) { _fun0038_ip = 212; continue _fun0038 }
case 156:
            var2 = 10;
case 212:
            var7 = var1.boosters;
            if(!(var7 === var6)) { _fun0038_ip = 217; continue _fun0038 }
case 39:
            var7 = {};
case 217:
            var _closure2_slot0 = var6;
            var _closure2_slot1 = var6;
            var _closure2_slot2 = var6;
            var10 = _closure1_slot62;
            var5 = _closure1_slot25;
            var1 = var5.getPrivateChannelsVersion;
            var8 = var1.bind(var5)();
            var5 = _closure1_slot37;
            var1 = var5.getVersion;
            var5 = var1.bind(var5)();
            var11 = _closure1_slot40;
            var1 = var11.getUserStoreVersion;
            var1 = var1.bind(var11)();
            var1 = var10.bind(var6)(var8, var5, var1);
            var5 = var1.channelsByRecipientId;
            _closure2_slot0 = var5;
            var5 = var1.recipientsById;
            _closure2_slot1 = var5;
            var8 = var1.recipients;
            var5 = _closure1_slot69;
            var1 = {};
            var1['query'] = var9;
            var1['members'] = var8;
            var8 = var8.length;
            var1['limit'] = var8;
            var1['boosters'] = var7;
            var7 = var5.bind(var6)(var1);
            var1 = new Array(0);
            _closure2_slot2 = var1;
            var5 = var7.forEach;
            var4 = function(arg1) {
                _fun0039: for(var _fun0039_ip = 0; ; ) switch(_fun0039_ip) {
case 0:
                    var4 = arg1;
                    var3 = _closure2_slot0;
                    var2 = var3.get;
                    var1 = var4.record;
                    var1 = var1.id;
                    var7 = var2.bind(var3)(var1);
                    var1 = null;
                    if(!(var1 != var7)) { _fun0039_ip = 14; continue _fun0039 }
case 196:
                    var3 = _closure2_slot2;
                    var2 = var3.push;
                    var1 = {};
                    var8 = _closure1_slot47;
                    var8 = var8.DM;
                    var1['type'] = var8;
                    var1['record'] = var7;
                    var7 = var4.score;
                    var1['score'] = var7;
                    var8 = _closure1_slot1;
                    var7 = _closure1_slot3;
                    var6 = 39;
                    var7 = var7[var6];
                    var6 = undefined;
                    var7 = var8.bind(var6)(var7);
                    var6 = var7.getUserTag;
                    var9 = _closure2_slot1;
                    var8 = var9.get;
                    var5 = var4.record;
                    var5 = var5.id;
                    var5 = var8.bind(var9)(var5);
                    var5 = var6.bind(var7)(var5);
                    var1['comparator'] = var5;
                    var4 = var4.sortable;
                    var1['sortable'] = var4;
                    var1 = var2.bind(var3)(var1);
case 14:
                    var1 = undefined;
                    return var1;
                }
            };
            var4 = var5.bind(var7)(var4);
            var4 = var1.sort;
            var5 = _closure1_slot1;
            var7 = _closure1_slot3;
            var3 = 40;
            var3 = var7[var3];
            var3 = var5.bind(var6)(var3);
            var3 = var4.bind(var1)(var3);
            var3 = var1.length;
            if(!(var3 > var2)) { _fun0038_ip = 310; continue _fun0038 }
case 60:
            var1['length'] = var2;
case 310:
            return var1;
        }
    };
    var7['queryDMChannels'] = var12;
    var12 = function queryGroupDMs(arg1) {
        _fun0040: for(var _fun0040_ip = 0; ; ) switch(_fun0040_ip) {
case 0:
            var1 = arg1;
            var10 = var1.query;
            var2 = var1.limit;
            var6 = undefined;
            if(!(var2 === var6)) { _fun0040_ip = 31; continue _fun0040 }
case 29:
            var2 = 10;
case 31:
            var31 = var1.fuzzy;
            if(!(var31 === var6)) { _fun0040_ip = 39; continue _fun0040 }
case 33:
            var31 = true;
case 39:
            var30 = var1.filter;
            if(!(var30 === var6)) { _fun0040_ip = 311; continue _fun0040 }
case 219:
            var30 = _closure1_slot52;
case 311:
            var29 = var1.boosters;
            if(!(var29 === var6)) { _fun0040_ip = 195; continue _fun0040 }
case 7:
            var29 = {};
case 195:
            var7 = _closure1_slot0;
            var8 = _closure1_slot3;
            var28 = 38;
            var1 = var8[var28];
            var5 = var7.bind(var6)(var1);
            var4 = var5.stripDiacritics;
            var1 = var8[var28];
            var9 = var7.bind(var6)(var1);
            var7 = var9.normalize;
            var1 = var10.toLocaleLowerCase;
            var1 = var1.bind(var10)();
            var1 = var7.bind(var9)(var1);
            var1 = var4.bind(var5)(var1);
            var27 = {};
            var26 = global;
            var11 = var26.RegExp;
            var7 = _closure1_slot1;
            var4 = 36;
            var5 = var8[var4];
            var9 = var7.bind(var6)(var5);
            var5 = var9.escape;
            var10 = var5.bind(var9)(var1);
            var5 = var26.HermesInternal;
            var9 = var5.concat;
            var5 = '^';
            var66 = var9.bind(var5)(var10);
            var9 = var11.prototype;
            var9 = Object.create(var9, {constructor: {value: var11}});
            var10 = 'i';
            var67 = var9;
            var65 = var10;
            var5 = new var67[var11](var66, var65, var64);
            var5 = var5 instanceof Object ? var5 : var9;
            var27['exactQuery'] = var5;
            var9 = var26.RegExp;
            var4 = var8[var4];
            var5 = var7.bind(var6)(var4);
            var4 = var5.escape;
            var66 = var4.bind(var5)(var1);
            var5 = var9.prototype;
            var5 = Object.create(var5, {constructor: {value: var9}});
            var67 = var5;
            var4 = new var67[var9](var66, var65, var64);
            var4 = var4 instanceof Object ? var4 : var5;
            var27['containQuery'] = var4;
            var27['queryLower'] = var1;
            var1 = new Array(0);
            var5 = _closure1_slot63;
            var4 = 42;
            var4 = var8[var4];
            var7 = var7.bind(var6)(var4);
            var8 = _closure1_slot25;
            var4 = var8.getMutablePrivateChannels;
            var4 = var4.bind(var8)();
            var7 = var7.bind(var6)(var4);
            var4 = var7.values;
            var7 = var4.bind(var7)();
            var4 = var7.value;
            var4 = var4.bind(var7)();
            var25 = var5.bind(var6)(var4);
            var5 = var25.bind(var6)();
            var4 = var5.done;
            var24 = 47;
            var23 = 0;
            var22 = 5;
            var21 = null;
            var20 = 39;
            var19 = var5;
            var18 = undefined;
            var17 = undefined;
            var16 = undefined;
            var15 = undefined;
            var14 = undefined;
            var13 = undefined;
            var12 = undefined;
            var11 = undefined;
            var10 = undefined;
            var9 = undefined;
            var8 = undefined;
            var7 = undefined;
            var5 = undefined;
            if(var4) { _fun0040_ip = 96; continue _fun0040 }
case 312:
            var59 = var19.value;
            var4 = var59.isMultiUserDM;
            var4 = var4.bind(var59)();
            var44 = var18;
            var43 = var17;
            var42 = var16;
            var41 = var15;
            var40 = var14;
            var39 = var13;
            var38 = var12;
            var37 = var11;
            var36 = var10;
            var35 = var9;
            var34 = var8;
            var33 = var7;
            var32 = var5;
            if(!var4) { _fun0040_ip = 313; continue _fun0040 }
case 314:
            var4 = var30.bind(var6)(var59);
            var44 = var18;
            var43 = var17;
            var42 = var16;
            var41 = var15;
            var40 = var14;
            var39 = var13;
            var38 = var12;
            var37 = var11;
            var36 = var10;
            var35 = var9;
            var34 = var8;
            var33 = var7;
            var32 = var5;
            if(!var4) { _fun0040_ip = 313; continue _fun0040 }
case 315:
            var47 = _closure1_slot0;
            var4 = _closure1_slot3;
            var45 = var4[var24];
            var49 = var47.bind(var6)(var45);
            var48 = var49.computeChannelName;
            var46 = _closure1_slot40;
            var45 = _closure1_slot37;
            var46 = var48.bind(var49)(var59, var46, var45);
            var45 = var46.toLocaleLowerCase;
            var48 = var45.bind(var46)();
            var45 = var4[var28];
            var46 = var47.bind(var6)(var45);
            var45 = var46.stripDiacritics;
            var4 = var4[var28];
            var47 = var47.bind(var6)(var4);
            var4 = var47.normalize;
            var4 = var4.bind(var47)(var48);
            var51 = var45.bind(var46)(var4);
            var4 = _closure1_slot66;
            var45 = var4.bind(var6)(var51, var27, var31);
            var4 = new Array(0);
            var47 = _closure1_slot63;
            var46 = var59.recipients;
            var49 = var47.bind(var6)(var46);
            var46 = var49.bind(var6)();
            var50 = var46.done;
            var56 = var46;
            var55 = var11;
            var54 = var10;
            var53 = var9;
            var52 = var56;
            var48 = var55;
            var47 = var54;
            var46 = var53;
            if(var50) { _fun0040_ip = 316; continue _fun0040 }
case 317:
            var62 = var56.value;
            var57 = _closure1_slot40;
            var50 = var57.getUser;
            var61 = var50.bind(var57)(var62);
            if(!(var21 != var61)) { _fun0040_ip = 318; continue _fun0040 }
case 319:
            var58 = var61.username;
            var57 = _closure1_slot1;
            var50 = _closure1_slot3;
            var50 = var50[var20];
            var57 = var57.bind(var6)(var50);
            var50 = var57.getGlobalName;
            var57 = var50.bind(var57)(var61);
            var60 = _closure1_slot37;
            var50 = var60.getNickname;
            var50 = var50.bind(var60)(var62);
            if(!(var21 != var58)) { _fun0040_ip = 320; continue _fun0040 }
case 321:
            var60 = var4.push;
            var60 = var60.bind(var4)(var58);
case 320:
            if(!(var21 != var57)) { _fun0040_ip = 322; continue _fun0040 }
case 323:
            var60 = var4.push;
            var60 = var60.bind(var4)(var57);
case 322:
            var55 = var58;
            var54 = var57;
            var53 = var50;
            if(!(var21 != var50)) { _fun0040_ip = 318; continue _fun0040 }
case 324:
            var60 = var4.push;
            var60 = var60.bind(var4)(var50);
            var55 = var58;
            var54 = var57;
            var53 = var50;
case 318:
            var63 = var49.bind(var6)();
            var50 = var63.done;
            var56 = var63;
            var52 = var56;
            var13 = var62;
            var12 = var61;
            var48 = var55;
            var47 = var54;
            var46 = var53;
            if(!var50) { _fun0040_ip = 317; continue _fun0040 }
case 316:
            var50 = var4.length;
            var53 = var23 < var50;
            var55 = var45;
            var54 = 0;
            var50 = var55;
            var45 = 0;
            if(!var53) { _fun0040_ip = 325; continue _fun0040 }
case 326:
            var61 = var4[var54];
            var58 = _closure1_slot0;
            var53 = _closure1_slot3;
            var56 = var53[var28];
            var57 = var58.bind(var6)(var56);
            var56 = var57.stripDiacritics;
            var53 = var53[var28];
            var60 = var58.bind(var6)(var53);
            var58 = var60.normalize;
            var53 = var61.toLocaleLowerCase;
            var53 = var53.bind(var61)();
            var53 = var58.bind(var60)(var53);
            var58 = var56.bind(var57)(var53);
            var57 = var26.Math;
            var56 = var57.min;
            var53 = _closure1_slot66;
            var53 = var53.bind(var6)(var58, var27, var31);
            var57 = var56.bind(var57)(var22, var53);
            if(!(var57 > var55)) { _fun0040_ip = 327; continue _fun0040 }
case 268:
            var55 = var57;
case 327:
            var54 = var54 + 1;
            var53 = var4.length;
            var50 = var55;
            var5 = var57;
            var45 = var54;
            if(var45 < var53) { _fun0040_ip = 326; continue _fun0040 }
case 325:
            var44 = var52;
            var43 = var51;
            var42 = var50;
            var41 = var4;
            var40 = var49;
            var39 = var13;
            var38 = var12;
            var37 = var48;
            var36 = var47;
            var35 = var46;
            var34 = var45;
            var33 = var41;
            var32 = var5;
            if(!(var50 > var23)) { _fun0040_ip = 313; continue _fun0040 }
case 328:
            var54 = var1.push;
            var53 = {};
            var55 = _closure1_slot47;
            var55 = var55.GROUP_DM;
            var53['type'] = var55;
            var53['record'] = var59;
            var56 = _closure1_slot65;
            var55 = var59.id;
            var55 = var29[var55];
            var55 = var56.bind(var6)(var50, var55);
            var53['score'] = var55;
            var56 = _closure1_slot0;
            var55 = _closure1_slot3;
            var55 = var55[var24];
            var58 = var56.bind(var6)(var55);
            var57 = var58.computeChannelName;
            var56 = _closure1_slot40;
            var55 = _closure1_slot37;
            var55 = var57.bind(var58)(var59, var56, var55);
            var53['comparator'] = var55;
            var53['sortable'] = var51;
            var53 = var54.bind(var1)(var53);
            var44 = var52;
            var43 = var51;
            var42 = var50;
            var41 = var4;
            var40 = var49;
            var39 = var13;
            var38 = var12;
            var37 = var48;
            var36 = var47;
            var35 = var46;
            var34 = var45;
            var33 = var41;
            var32 = var5;
case 313:
            var45 = var25.bind(var6)();
            var4 = var45.done;
            var18 = var44;
            var17 = var43;
            var16 = var42;
            var15 = var41;
            var14 = var40;
            var13 = var39;
            var12 = var38;
            var11 = var37;
            var10 = var36;
            var9 = var35;
            var8 = var34;
            var7 = var33;
            var5 = var32;
            var19 = var45;
            if(!var4) { _fun0040_ip = 312; continue _fun0040 }
case 96:
            var4 = var1.sort;
            var5 = _closure1_slot1;
            var7 = _closure1_slot3;
            var3 = 40;
            var3 = var7[var3];
            var3 = var5.bind(var6)(var3);
            var3 = var4.bind(var1)(var3);
            var3 = var1.length;
            if(!(var3 > var2)) { _fun0040_ip = 329; continue _fun0040 }
case 330:
            var1['length'] = var2;
case 329:
            return var1;
        }
    };
    var7['queryGroupDMs'] = var12;
    var12 = function queryApplications(arg1) {
        _fun0041: for(var _fun0041_ip = 0; ; ) switch(_fun0041_ip) {
case 0:
            var1 = arg1;
            var3 = var1.query;
            var2 = var1.limit;
            var6 = undefined;
            if(!(var2 === var6)) { _fun0041_ip = 31; continue _fun0041 }
case 29:
            var2 = 10;
case 31:
            var13 = var1.fuzzy;
            if(!(var13 === var6)) { _fun0041_ip = 39; continue _fun0041 }
case 33:
            var13 = true;
case 39:
            var12 = var1.filter;
            if(!(var12 === var6)) { _fun0041_ip = 311; continue _fun0041 }
case 219:
            var12 = _closure1_slot52;
case 311:
            var1 = var3.toLocaleLowerCase;
            var1 = var1.bind(var3)();
            var11 = {};
            var7 = global;
            var15 = var7.RegExp;
            var5 = _closure1_slot1;
            var9 = _closure1_slot3;
            var4 = 36;
            var8 = var9[var4];
            var10 = var5.bind(var6)(var8);
            var8 = var10.escape;
            var14 = var8.bind(var10)(var1);
            var8 = var7.HermesInternal;
            var10 = var8.concat;
            var8 = '^';
            var21 = var10.bind(var8)(var14);
            var8 = var15.prototype;
            var14 = Object.create(var8, {constructor: {value: var15}});
            var8 = 'i';
            var22 = var14;
            var20 = var8;
            var10 = new var22[var15](var21, var20, var19);
            var10 = var10 instanceof Object ? var10 : var14;
            var11['exactQuery'] = var10;
            var7 = var7.RegExp;
            var4 = var9[var4];
            var5 = var5.bind(var6)(var4);
            var4 = var5.escape;
            var21 = var4.bind(var5)(var1);
            var5 = var7.prototype;
            var5 = Object.create(var5, {constructor: {value: var7}});
            var22 = var5;
            var4 = new var22[var7](var21, var20, var19);
            var4 = var4 instanceof Object ? var4 : var5;
            var11['containQuery'] = var4;
            var11['queryLower'] = var1;
            var1 = new Array(0);
            var5 = _closure1_slot63;
            var4 = _closure1_slot59;
            var4 = var4.bind(var6)();
            var10 = var5.bind(var6)(var4);
            var5 = var10.bind(var6)();
            var4 = var5.done;
            var9 = 0;
            var8 = var5;
            var7 = undefined;
            var5 = undefined;
            if(var4) { _fun0041_ip = 331; continue _fun0041 }
case 332:
            var4 = var8.value;
            var17 = var4.application;
            var4 = var12.bind(var6)(var17);
            if(!var4) { _fun0041_ip = 333; continue _fun0041 }
case 334:
            var14 = var17.name;
            var4 = var14.toLocaleLowerCase;
            var14 = var4.bind(var14)();
            var4 = _closure1_slot66;
            var4 = var4.bind(var6)(var14, var11, var13);
            var7 = var14;
            var5 = var4;
            if(!(var4 > var9)) { _fun0041_ip = 333; continue _fun0041 }
case 335:
            var16 = var1.push;
            var15 = {};
            var18 = _closure1_slot47;
            var18 = var18.APPLICATION;
            var15['type'] = var18;
            var15['record'] = var17;
            var15['score'] = var4;
            var17 = var17.name;
            var15['comparator'] = var17;
            var15['sortable'] = var14;
            var15 = var16.bind(var1)(var15);
            var7 = var14;
            var5 = var4;
case 333:
            var14 = var10.bind(var6)();
            var4 = var14.done;
            var8 = var14;
            if(!var4) { _fun0041_ip = 332; continue _fun0041 }
case 331:
            var4 = var1.sort;
            var5 = _closure1_slot1;
            var7 = _closure1_slot3;
            var3 = 40;
            var3 = var7[var3];
            var3 = var5.bind(var6)(var3);
            var3 = var4.bind(var1)(var3);
            var3 = var1.length;
            if(!(var3 > var2)) { _fun0041_ip = 336; continue _fun0041 }
case 337:
            var1['length'] = var2;
case 336:
            return var1;
        }
    };
    var7['queryApplications'] = var12;
    var12 = function queryInAppNavigations(arg1) {
        _fun0042: for(var _fun0042_ip = 0; ; ) switch(_fun0042_ip) {
case 0:
            var1 = arg1;
            var3 = var1.query;
            var2 = var1.limit;
            var6 = undefined;
            if(!(var2 === var6)) { _fun0042_ip = 31; continue _fun0042 }
case 29:
            var2 = 10;
case 31:
            var22 = var1.fuzzy;
            if(!(var22 === var6)) { _fun0042_ip = 39; continue _fun0042 }
case 33:
            var22 = true;
case 39:
            var1 = var3.toLocaleLowerCase;
            var1 = var1.bind(var3)();
            var21 = {};
            var7 = global;
            var12 = var7.RegExp;
            var5 = _closure1_slot1;
            var9 = _closure1_slot3;
            var4 = 36;
            var8 = var9[var4];
            var10 = var5.bind(var6)(var8);
            var8 = var10.escape;
            var11 = var8.bind(var10)(var1);
            var8 = var7.HermesInternal;
            var10 = var8.concat;
            var8 = '^';
            var30 = var10.bind(var8)(var11);
            var8 = var12.prototype;
            var11 = Object.create(var8, {constructor: {value: var12}});
            var8 = 'i';
            var31 = var11;
            var29 = var8;
            var10 = new var31[var12](var30, var29, var28);
            var10 = var10 instanceof Object ? var10 : var11;
            var21['exactQuery'] = var10;
            var7 = var7.RegExp;
            var4 = var9[var4];
            var5 = var5.bind(var6)(var4);
            var4 = var5.escape;
            var30 = var4.bind(var5)(var1);
            var5 = var7.prototype;
            var5 = Object.create(var5, {constructor: {value: var7}});
            var31 = var5;
            var4 = new var31[var7](var30, var29, var28);
            var4 = var4 instanceof Object ? var4 : var5;
            var21['containQuery'] = var4;
            var21['queryLower'] = var1;
            var20 = {};
            var4 = _closure1_slot8;
            var7 = var4.SHOP;
            var8 = _closure1_slot0;
            var1 = 48;
            var5 = var9[var1];
            var5 = var8.bind(var6)(var5);
            var11 = var5.intl;
            var10 = var11.string;
            var5 = var9[var1];
            var5 = var8.bind(var6)(var5);
            var5 = var5.t;
            var5 = var5.pWG4ze;
            var10 = var10.bind(var11)(var5);
            var5 = new Array(1);
            var5[0] = var10;
            var20[6] = var5;
            var7 = var4.SHOP_ORBS_TAB;
            var5 = var9[var1];
            var5 = var8.bind(var6)(var5);
            var11 = var5.intl;
            var10 = var11.string;
            var5 = var9[var1];
            var5 = var8.bind(var6)(var5);
            var5 = var5.t;
            var5 = var5.ElYQFS;
            var10 = var10.bind(var11)(var5);
            var5 = new Array(3);
            var5[0] = var10;
            var10 = var9[var1];
            var10 = var8.bind(var6)(var10);
            var12 = var10.intl;
            var11 = var12.string;
            var10 = var9[var1];
            var10 = var8.bind(var6)(var10);
            var10 = var10.t;
            var10 = var10.pWG4ze;
            var10 = var11.bind(var12)(var10);
            var5[1] = var10;
            var10 = var9[var1];
            var10 = var8.bind(var6)(var10);
            var12 = var10.intl;
            var11 = var12.string;
            var10 = var9[var1];
            var10 = var8.bind(var6)(var10);
            var10 = var10.t;
            var10 = var10.EBYkzk;
            var10 = var11.bind(var12)(var10);
            var5[2] = var10;
            var20[6] = var5;
            var7 = var4.QUEST_ORBS;
            var5 = var9[var1];
            var5 = var8.bind(var6)(var5);
            var11 = var5.intl;
            var10 = var11.string;
            var5 = var9[var1];
            var5 = var8.bind(var6)(var5);
            var5 = var5.t;
            var5 = var5.ElYQFS;
            var10 = var10.bind(var11)(var5);
            var5 = new Array(3);
            var5[0] = var10;
            var10 = var9[var1];
            var10 = var8.bind(var6)(var10);
            var12 = var10.intl;
            var11 = var12.string;
            var10 = var9[var1];
            var10 = var8.bind(var6)(var10);
            var10 = var10.t;
            var10 = var10.v/R2aC;
            var10 = var11.bind(var12)(var10);
            var5[1] = var10;
            var10 = var9[var1];
            var10 = var8.bind(var6)(var10);
            var12 = var10.intl;
            var11 = var12.string;
            var10 = var9[var1];
            var10 = var8.bind(var6)(var10);
            var10 = var10.t;
            var10 = var10.qQR4tn;
            var10 = var11.bind(var12)(var10);
            var5[2] = var10;
            var20[6] = var5;
            var7 = var4.NITRO_HOME;
            var5 = var9[var1];
            var5 = var8.bind(var6)(var5);
            var11 = var5.intl;
            var10 = var11.string;
            var5 = var9[var1];
            var5 = var8.bind(var6)(var5);
            var5 = var5.t;
            var5 = var5.Ipxkog;
            var10 = var10.bind(var11)(var5);
            var5 = new Array(1);
            var5[0] = var10;
            var20[6] = var5;
            var7 = var4.QUEST_HOME;
            var5 = var9[var1];
            var5 = var8.bind(var6)(var5);
            var11 = var5.intl;
            var10 = var11.string;
            var5 = var9[var1];
            var5 = var8.bind(var6)(var5);
            var5 = var5.t;
            var5 = var5.JALI2K;
            var10 = var10.bind(var11)(var5);
            var5 = new Array(1);
            var5[0] = var10;
            var20[6] = var5;
            var7 = var4.APPS_HOME;
            var5 = var9[var1];
            var5 = var8.bind(var6)(var5);
            var11 = var5.intl;
            var10 = var11.string;
            var5 = var9[var1];
            var5 = var8.bind(var6)(var5);
            var5 = var5.t;
            var5 = var5.PHjkRE;
            var10 = var10.bind(var11)(var5);
            var5 = new Array(2);
            var5[0] = var10;
            var10 = var9[var1];
            var10 = var8.bind(var6)(var10);
            var12 = var10.intl;
            var11 = var12.string;
            var10 = var9[var1];
            var10 = var8.bind(var6)(var10);
            var10 = var10.t;
            var10 = var10.AKcFUj;
            var10 = var11.bind(var12)(var10);
            var5[1] = var10;
            var20[6] = var5;
            var4 = var4.SETTINGS;
            var5 = var9[var1];
            var5 = var8.bind(var6)(var5);
            var7 = var5.intl;
            var5 = var7.string;
            var1 = var9[var1];
            var1 = var8.bind(var6)(var1);
            var1 = var1.t;
            var1 = var1["3D5yo/"];
            var5 = var5.bind(var7)(var1);
            var1 = new Array(1);
            var1[0] = var5;
            var20[3] = var1;
            var1 = new Array(0);
            var18 = var20;
            var14 = 0;
            var13 = null;
            var12 = undefined;
            var11 = undefined;
            var10 = undefined;
            var9 = undefined;
            for(var15 in var18)
case 338:
            {
case 339:
                var5 = var15;
                var4 = _closure1_slot8;
                var8 = var4[var5];
                var5 = var20[var8];
                if(var13 == var5) { _fun0042_ip = 338; continue _fun0042 }
case 97:
                var4 = _closure1_slot63;
                var7 = var4.bind(var6)(var5);
                var5 = var7.bind(var6)();
                var4 = var5.done;
                var12 = var5;
                var11 = var7;
                var5 = var12;
                if(var4) { _fun0042_ip = 338; continue _fun0042 }
case 340:
                var23 = var5.value;
                var4 = var23.toLocaleLowerCase;
                var25 = var4.bind(var23)();
                var4 = _closure1_slot66;
                var24 = var4.bind(var6)(var25, var21, var22);
                if(!(var24 > var14)) { _fun0042_ip = 341; continue _fun0042 }
case 342:
                var23 = var1.push;
                var4 = {};
                var26 = _closure1_slot47;
                var26 = var26.IN_APP_NAVIGATION;
                var4['type'] = var26;
                var27 = _closure1_slot7;
                var26 = var27.fromType;
                var26 = var26.bind(var27)(var8);
                var4['record'] = var26;
                var26 = _closure1_slot65;
                var26 = var26.bind(var6)(var24);
                var4['score'] = var26;
                var4['comparator'] = var25;
                var4['sortable'] = var25;
                var4 = var23.bind(var1)(var4);
case 341:
                var23 = var7.bind(var6)();
                var4 = var23.done;
                var12 = var23;
                var11 = var7;
                var10 = var25;
                var9 = var24;
                var5 = var12;
                if(var4) { _fun0042_ip = 338; continue _fun0042 }
case 343:
                _fun0042_ip = 340; continue _fun0042;
            }
case 344:
            var4 = var1.sort;
            var5 = _closure1_slot1;
            var7 = _closure1_slot3;
            var3 = 40;
            var3 = var7[var3];
            var3 = var5.bind(var6)(var3);
            var3 = var4.bind(var1)(var3);
            var3 = var1.length;
            if(!(var3 > var2)) { _fun0042_ip = 345; continue _fun0042 }
case 346:
            var1['length'] = var2;
case 345:
            return var1;
        }
    };
    var7['queryInAppNavigations'] = var12;
    var12 = function querySKUs(arg1) {
        _fun0043: for(var _fun0043_ip = 0; ; ) switch(_fun0043_ip) {
case 0:
            var1 = arg1;
            var3 = var1.query;
            var2 = var1.limit;
            var6 = undefined;
            if(!(var2 === var6)) { _fun0043_ip = 31; continue _fun0043 }
case 29:
            var2 = 10;
case 31:
            var13 = var1.fuzzy;
            if(!(var13 === var6)) { _fun0043_ip = 39; continue _fun0043 }
case 33:
            var13 = true;
case 39:
            var12 = var1.filter;
            if(!(var12 === var6)) { _fun0043_ip = 311; continue _fun0043 }
case 219:
            var12 = _closure1_slot52;
case 311:
            var1 = var3.toLocaleLowerCase;
            var1 = var1.bind(var3)();
            var11 = {};
            var5 = global;
            var15 = var5.RegExp;
            var7 = _closure1_slot1;
            var8 = _closure1_slot3;
            var4 = 36;
            var9 = var8[var4];
            var10 = var7.bind(var6)(var9);
            var9 = var10.escape;
            var14 = var9.bind(var10)(var1);
            var9 = var5.HermesInternal;
            var10 = var9.concat;
            var9 = '^';
            var23 = var10.bind(var9)(var14);
            var10 = var15.prototype;
            var14 = Object.create(var10, {constructor: {value: var15}});
            var10 = 'i';
            var24 = var14;
            var22 = var10;
            var9 = new var24[var15](var23, var22, var21);
            var9 = var9 instanceof Object ? var9 : var14;
            var11['exactQuery'] = var9;
            var9 = var5.RegExp;
            var4 = var8[var4];
            var5 = var7.bind(var6)(var4);
            var4 = var5.escape;
            var23 = var4.bind(var5)(var1);
            var5 = var9.prototype;
            var5 = Object.create(var5, {constructor: {value: var9}});
            var24 = var5;
            var4 = new var24[var9](var23, var22, var21);
            var4 = var4 instanceof Object ? var4 : var5;
            var11['containQuery'] = var4;
            var11['queryLower'] = var1;
            var1 = new Array(0);
            var5 = _closure1_slot63;
            var4 = 42;
            var4 = var8[var4];
            var7 = var7.bind(var6)(var4);
            var8 = _closure1_slot41;
            var4 = var8.getSKUs;
            var4 = var4.bind(var8)();
            var7 = var7.bind(var6)(var4);
            var4 = var7.values;
            var7 = var4.bind(var7)();
            var4 = var7.value;
            var4 = var4.bind(var7)();
            var10 = var5.bind(var6)(var4);
            var5 = var10.bind(var6)();
            var4 = var5.done;
            var9 = 0;
            var8 = var5;
            var7 = undefined;
            var5 = undefined;
            if(var4) { _fun0043_ip = 347; continue _fun0043 }
case 348:
            var19 = var8.value;
            var16 = var19.type;
            var4 = _closure1_slot45;
            var4 = var4.DURABLE_PRIMARY;
            var15 = var7;
            var14 = var5;
            if(!(var16 === var4)) { _fun0043_ip = 349; continue _fun0043 }
case 350:
            var4 = var12.bind(var6)(var19);
            var15 = var7;
            var14 = var5;
            if(!var4) { _fun0043_ip = 349; continue _fun0043 }
case 64:
            var16 = var19.name;
            var4 = var16.toLocaleLowerCase;
            var16 = var4.bind(var16)();
            var4 = _closure1_slot66;
            var4 = var4.bind(var6)(var16, var11, var13);
            var15 = var16;
            var14 = var4;
            if(!(var4 > var9)) { _fun0043_ip = 349; continue _fun0043 }
case 351:
            var18 = var1.push;
            var17 = {};
            var20 = _closure1_slot47;
            var20 = var20.SKU;
            var17['type'] = var20;
            var17['record'] = var19;
            var17['score'] = var4;
            var19 = var19.name;
            var17['comparator'] = var19;
            var17['sortable'] = var16;
            var17 = var18.bind(var1)(var17);
            var15 = var16;
            var14 = var4;
case 349:
            var16 = var10.bind(var6)();
            var4 = var16.done;
            var7 = var15;
            var5 = var14;
            var8 = var16;
            if(!var4) { _fun0043_ip = 348; continue _fun0043 }
case 347:
            var4 = var1.sort;
            var5 = _closure1_slot1;
            var7 = _closure1_slot3;
            var3 = 40;
            var3 = var7[var3];
            var3 = var5.bind(var6)(var3);
            var3 = var4.bind(var1)(var3);
            var3 = var1.length;
            if(!(var3 > var2)) { _fun0043_ip = 352; continue _fun0043 }
case 181:
            var1['length'] = var2;
case 352:
            return var1;
        }
    };
    var7['querySKUs'] = var12;
    var7['getRecentlyTalked'] = var11;
    var11 = function queryMentionResults(arg1) {
        _fun0044: for(var _fun0044_ip = 0; ; ) switch(_fun0044_ip) {
case 0:
            var4 = arg1;
            var9 = this;
            var15 = var4.query;
            var12 = var4.channel;
            var _closure2_slot0 = var12;
            var11 = var4.canMentionEveryone;
            var6 = undefined;
            if(!(var11 === var6)) { _fun0044_ip = 217; continue _fun0044 }
case 39:
            var11 = false;
case 217:
            var _closure2_slot1 = var11;
            var5 = var4.canMentionHere;
            if(!(var5 === var6)) { _fun0044_ip = 353; continue _fun0044 }
case 311:
            var5 = true;
case 353:
            var3 = var4.canMentionUsers;
            if(!(var3 === var6)) { _fun0044_ip = 354; continue _fun0044 }
case 195:
            var3 = true;
case 354:
            var10 = var4.canMentionRoles;
            if(!(var10 === var6)) { _fun0044_ip = 298; continue _fun0044 }
case 355:
            var10 = true;
case 298:
            var2 = var4.canMentionOtherGlobals;
            if(!(var2 === var6)) { _fun0044_ip = 158; continue _fun0044 }
case 162:
            var2 = true;
case 158:
            var _closure2_slot2 = var2;
            var2 = var4.includeAllGuildUsers;
            if(!(var2 === var6)) { _fun0044_ip = 356; continue _fun0044 }
case 165:
            var2 = false;
case 356:
            var7 = var4.includeNonMentionableRoles;
            if(!(var7 === var6)) { _fun0044_ip = 357; continue _fun0044 }
case 358:
            var7 = false;
case 357:
            var _closure2_slot3 = var7;
            var16 = var4.checkRecentlyTalkedOnEmptyQuery;
            if(!(var16 === var6)) { _fun0044_ip = 359; continue _fun0044 }
case 202:
            var16 = true;
case 359:
            var8 = var4.limit;
            if(!(var8 === var6)) { _fun0044_ip = 360; continue _fun0044 }
case 361:
            var8 = _closure1_slot46;
case 360:
            var _closure2_slot4 = var8;
            var14 = var4.request;
            var13 = var4.allowSnowflake;
            if(!(var13 === var6)) { _fun0044_ip = 362; continue _fun0044 }
case 17:
            var13 = false;
case 362:
            var _closure2_slot5 = var13;
            var _closure2_slot6 = var6;
            var _closure2_slot7 = var6;
            var _closure2_slot8 = var6;
            var _closure2_slot9 = var6;
            var _closure2_slot10 = var6;
            var _closure2_slot11 = var6;
            if(var3) { _fun0044_ip = 363; continue _fun0044 }
case 364:
            var4 = new Array(0);
            _fun0044_ip = 27; continue _fun0044;
case 363:
            if(!var2) { _fun0044_ip = 365; continue _fun0044 }
case 366:
            var3 = var12.guild_id;
            var2 = null;
            if(!(var2 == var3)) { _fun0044_ip = 24; continue _fun0044 }
case 365:
            var3 = var9.queryChannelUsers;
            var2 = {};
            var7 = var12.id;
            var2['channelId'] = var7;
            var2['query'] = var15;
            var2['limit'] = var8;
            var2['checkRecentlyTalkedOnEmptyQuery'] = var16;
            var2['allowSnowflake'] = var13;
            var7 = var3.bind(var9)(var2);
            _fun0044_ip = 367; continue _fun0044;
case 24:
            var3 = var9.queryGuildUsers;
            var2 = {};
            var17 = var12.guild_id;
            var2['guildId'] = var17;
            var2['query'] = var15;
            var2['limit'] = var8;
            var2['checkRecentlyTalkedOnEmptyQuery'] = var16;
            var2['request'] = var14;
            var2['allowSnowflake'] = var13;
            var7 = var3.bind(var9)(var2);
case 367:
            var3 = var7.map;
            var2 = function(arg1) {
                var1 = arg1;
                var2 = var1.record;
                var4 = var1.score;
                var3 = var1.comparator;
                var1 = {};
                var1['user'] = var2;
                var1['score'] = var4;
                var1['comparator'] = var3;
                var7 = _closure1_slot31;
                var6 = var7.getNick;
                var4 = _closure2_slot0;
                var5 = var4.guild_id;
                var4 = var2.id;
                var4 = var6.bind(var7)(var5, var4);
                var1['nick'] = var4;
                var4 = _closure1_slot36;
                var3 = var4.getStatus;
                var2 = var2.id;
                var2 = var3.bind(var4)(var2);
                var1['status'] = var2;
                return var1;
            };
            var4 = var3.bind(var7)(var2);
case 27:
            _closure2_slot6 = var4;
            var2 = var4.length;
            _closure2_slot7 = var2;
            var2 = var15.toLowerCase;
            var9 = var2.bind(var15)();
            _closure2_slot8 = var9;
            var14 = new Array(0);
            _closure2_slot9 = var14;
            var3 = _closure2_slot7;
            var2 = var14;
            if(!(var3 < var8)) { _fun0044_ip = 368; continue _fun0044 }
case 369:
            var2 = var14;
            if(!var10) { _fun0044_ip = 368; continue _fun0044 }
case 331:
            var3 = var12.getGuildId;
            var16 = var3.bind(var12)();
            _closure2_slot10 = var16;
            var13 = _closure1_slot33;
            var7 = var13.getGuild;
            var7 = var7.bind(var13)(var16);
            var13 = null;
            var2 = var14;
            if(!(var13 != var7)) { _fun0044_ip = 368; continue _fun0044 }
case 370:
            var16 = _closure1_slot1;
            var13 = _closure1_slot3;
            var14 = 42;
            var14 = var13[var14];
            var14 = var16.bind(var6)(var14);
            var17 = _closure1_slot32;
            var16 = var17.getSortedRoles;
            var7 = var7.id;
            var7 = var16.bind(var17)(var7);
            var16 = var14.bind(var6)(var7);
            var14 = var16.filter;
            var7 = function(arg1) {
                _fun0045: for(var _fun0045_ip = 0; ; ) switch(_fun0045_ip) {
case 0:
                    var2 = arg1;
                    var1 = var2.mentionable;
                    var8 = var2.name;
                    var3 = var2.id;
                    if(var1) { _fun0045_ip = 371; continue _fun0045 }
case 156:
                    var1 = _closure2_slot1;
case 371:
                    if(var1) { _fun0045_ip = 37; continue _fun0045 }
case 372:
                    var1 = _closure2_slot3;
case 37:
                    if(!var1) { _fun0045_ip = 223; continue _fun0045 }
case 161:
                    var4 = _closure1_slot1;
                    var5 = _closure1_slot3;
                    var2 = 37;
                    var2 = var5[var2];
                    var7 = undefined;
                    var6 = var4.bind(var7)(var2);
                    var4 = _closure2_slot8;
                    var2 = var8.toLowerCase;
                    var2 = var2.bind(var8)();
                    var2 = var6.bind(var7)(var4, var2);
                    if(var2) { _fun0045_ip = 203; continue _fun0045 }
case 153:
                    var4 = _closure2_slot5;
                    if(!var4) { _fun0045_ip = 373; continue _fun0045 }
case 222:
                    var5 = _closure2_slot8;
                    var4 = var5 === var3;
case 373:
                    var2 = var4;
case 203:
                    var1 = var2;
case 223:
                    if(!var1) { _fun0045_ip = 374; continue _fun0045 }
case 357:
                    var5 = _closure1_slot1;
                    var4 = _closure1_slot3;
                    var2 = 49;
                    var4 = var4[var2];
                    var2 = undefined;
                    var5 = var5.bind(var2)(var4);
                    var4 = var5.castGuildIdAsEveryoneGuildRoleId;
                    var2 = _closure2_slot10;
                    var2 = var4.bind(var5)(var2);
                    var1 = var3 !== var2;
case 374:
                    return var1;
                }
            };
            var14 = var14.bind(var16)(var7);
            var7 = var14.value;
            var14 = var7.bind(var14)();
            var7 = _closure1_slot0;
            var3 = 50;
            var3 = var13[var3];
            var13 = var7.bind(var6)(var3);
            var7 = var13.matchSorter;
            var3 = {};
            var16 = ['name'];
            var3['keys'] = var16;
            var14 = var7.bind(var13)(var14, var15, var3);
            var13 = var14.slice;
            var3 = _closure2_slot7;
            var7 = var8 - var3;
            var3 = 0;
            var3 = var13.bind(var14)(var3, var7);
            _closure2_slot9 = var3;
            var13 = _closure2_slot7;
            var7 = var3.length;
            var7 = var13 + var7;
            _closure2_slot7 = var7;
            var2 = var3;
case 368:
            var3 = new Array(0);
            _closure2_slot11 = var3;
            var7 = var12.isPrivate;
            var7 = var7.bind(var12)();
            var7 = !var7;
            if(!var7) { _fun0044_ip = 375; continue _fun0044 }
case 376:
            var7 = var11;
case 375:
            if(!var7) { _fun0044_ip = 377; continue _fun0044 }
case 378:
            var7 = var10;
case 377:
            if(!var7) { _fun0044_ip = 379; continue _fun0044 }
case 380:
            var7 = _closure2_slot7;
            var7 = var7 < var8;
            if(!var7) { _fun0044_ip = 77; continue _fun0044 }
case 381:
            var12 = _closure1_slot1;
            var13 = _closure1_slot3;
            var11 = 37;
            var11 = var13[var11];
            var11 = var12.bind(var6)(var11);
            var10 = _closure1_slot55;
            var10 = var10.bind(var6)();
            var10 = var10.test;
            var7 = var11.bind(var6)(var9, var10);
case 77:
            if(!var7) { _fun0044_ip = 382; continue _fun0044 }
case 319:
            var10 = var3.push;
            var7 = _closure1_slot55;
            var7 = var7.bind(var6)();
            var7 = var10.bind(var3)(var7);
            var10 = _closure2_slot7;
            var7 = 1;
            var7 = var10 + var7;
            _closure2_slot7 = var7;
case 382:
            if(!var5) { _fun0044_ip = 383; continue _fun0044 }
case 384:
            var7 = _closure2_slot7;
            var5 = var7 < var8;
case 383:
            if(!var5) { _fun0044_ip = 385; continue _fun0044 }
case 386:
            var10 = _closure1_slot1;
            var11 = _closure1_slot3;
            var8 = 37;
            var8 = var11[var8];
            var8 = var10.bind(var6)(var8);
            var7 = _closure1_slot56;
            var7 = var7.bind(var6)();
            var7 = var7.test;
            var5 = var8.bind(var6)(var9, var7);
case 385:
            if(!var5) { _fun0044_ip = 379; continue _fun0044 }
case 84:
            var7 = var3.push;
            var5 = _closure1_slot56;
            var5 = var5.bind(var6)();
            var5 = var7.bind(var3)(var5);
            var7 = _closure2_slot7;
            var5 = 1;
            var5 = var7 + var5;
            _closure2_slot7 = var5;
case 379:
            var5 = function maybePushOtherGlobal(arg1) {
                _fun0046: for(var _fun0046_ip = 0; ; ) switch(_fun0046_ip) {
case 0:
                    var4 = arg1;
                    var1 = _closure2_slot2;
                    if(!var1) { _fun0046_ip = 167; continue _fun0046 }
case 387:
                    var3 = null;
                    var1 = var3 != var4;
case 167:
                    if(!var1) { _fun0046_ip = 388; continue _fun0046 }
case 212:
                    var3 = _closure2_slot7;
                    var1 = _closure2_slot4;
                    var1 = var3 < var1;
                    if(var1) { _fun0046_ip = 4; continue _fun0046 }
case 196:
                    var3 = _closure2_slot8;
                    var5 = var3.length;
                    var3 = 0;
                    var1 = var3 === var5;
case 4:
                    if(!var1) { _fun0046_ip = 46; continue _fun0046 }
case 389:
                    var5 = _closure1_slot1;
                    var6 = _closure1_slot3;
                    var3 = 37;
                    var3 = var6[var3];
                    var7 = undefined;
                    var6 = var5.bind(var7)(var3);
                    var5 = _closure2_slot8;
                    var3 = var4.test;
                    var1 = var6.bind(var7)(var5, var3);
case 46:
                    if(var1) { _fun0046_ip = 223; continue _fun0046 }
case 48:
                    var5 = _closure2_slot8;
                    var3 = var4.test;
                    var1 = var5 === var3;
case 223:
                    if(!var1) { _fun0046_ip = 388; continue _fun0046 }
case 357:
                    var3 = _closure2_slot7;
                    var1 = _closure2_slot4;
                    if(!(var3 >= var1)) { _fun0046_ip = 19; continue _fun0046 }
case 390:
                    var1 = _closure2_slot9;
                    var1 = var1.length;
                    var3 = 0;
                    if(!(!(var1 > var3))) { _fun0046_ip = 391; continue _fun0046 }
case 150:
                    var1 = _closure2_slot6;
                    var1 = var1.length;
                    if(!(var1 > var3)) { _fun0046_ip = 19; continue _fun0046 }
case 392:
                    var3 = _closure2_slot6;
                    var1 = var3.pop;
                    var1 = var1.bind(var3)();
                    _fun0046_ip = 19; continue _fun0046;
case 391:
                    var3 = _closure2_slot9;
                    var1 = var3.pop;
                    var1 = var1.bind(var3)();
case 19:
                    var3 = _closure2_slot11;
                    var1 = var3.push;
                    var1 = var1.bind(var3)(var4);
                    var3 = _closure2_slot7;
                    var1 = 1;
                    var1 = var3 + var1;
                    _closure2_slot7 = var1;
case 388:
                    var1 = undefined;
                    return var1;
                }
            };
            var8 = _closure1_slot0;
            var9 = _closure1_slot3;
            var1 = 51;
            var1 = var9[var1];
            var1 = var8.bind(var6)(var1);
            var9 = var1.GameMentionsExperiment;
            var8 = var9.getConfig;
            var1 = {};
            var10 = 'mention autocomplete';
            var1['location'] = var10;
            var8 = var8.bind(var9)(var1);
            var1 = var8.enabled;
            if(!var1) { _fun0044_ip = 393; continue _fun0044 }
case 394:
            var8 = var8.combineMentionAutocomplete;
            var1 = !var8;
case 393:
            if(!var1) { _fun0044_ip = 395; continue _fun0044 }
case 396:
            var8 = _closure1_slot57;
            var1 = null;
            var8 = var1 == var8;
            var1 = undefined;
            if(var8) { _fun0044_ip = 397; continue _fun0044 }
case 398:
            var8 = _closure1_slot57;
            var1 = var8.bind(var6)();
case 397:
            var1 = var5.bind(var6)(var1);
case 395:
            var8 = _closure1_slot58;
            var1 = null;
            var8 = var1 == var8;
            var1 = undefined;
            if(var8) { _fun0044_ip = 399; continue _fun0044 }
case 400:
            var7 = _closure1_slot58;
            var1 = var7.bind(var6)();
case 399:
            var1 = var5.bind(var6)(var1);
            var1 = {};
            var1['users'] = var4;
            var1['globals'] = var3;
            var1['roles'] = var2;
            return var1;
        }
    };
    var7['queryMentionResults'] = var11;
    var11 = function queryGuildMentionResults(arg1) {
        _fun0047: for(var _fun0047_ip = 0; ; ) switch(_fun0047_ip) {
case 0:
            var4 = arg1;
            var9 = this;
            var2 = var4.query;
            var13 = var4.guildId;
            var5 = var4.canMentionEveryone;
            var6 = undefined;
            if(!(var5 === var6)) { _fun0047_ip = 33; continue _fun0047 }
case 146:
            var5 = false;
case 33:
            var _closure2_slot0 = var5;
            var1 = var4.canMentionUsers;
            if(!(var1 === var6)) { _fun0047_ip = 5; continue _fun0047 }
case 141:
            var1 = true;
case 5:
            var7 = var4.canMentionRoles;
            if(!(var7 === var6)) { _fun0047_ip = 7; continue _fun0047 }
case 401:
            var7 = true;
case 7:
            var4 = var4.canMentionNonMentionableRoles;
            if(!(var4 === var6)) { _fun0047_ip = 402; continue _fun0047 }
case 155:
            var4 = false;
case 402:
            var _closure2_slot1 = var4;
            var _closure2_slot2 = var6;
            var _closure2_slot3 = var6;
            if(var1) { _fun0047_ip = 403; continue _fun0047 }
case 211:
            var4 = new Array(0);
            _fun0047_ip = 202; continue _fun0047;
case 403:
            var8 = var9.queryGuildUsers;
            var1 = {};
            var1['guildId'] = var13;
            var1['query'] = var2;
            var9 = var8.bind(var9)(var1);
            var8 = var9.map;
            var1 = function(arg1) {
                var2 = arg1;
                var1 = {};
                var6 = var1;
                var5 = var2;
                var3 = copyDataProperties(var6, var5);
                var4 = _closure1_slot36;
                var3 = var4.getStatus;
                var2 = var2.record;
                var2 = var2.id;
                var3 = var3.bind(var4)(var2);
                var2 = 'status';
                var1[1] = var3;
                return var1;
            };
            var4 = var8.bind(var9)(var1);
case 202:
            var10 = var4.length;
            var1 = var2.toLowerCase;
            var9 = var1.bind(var2)();
            _closure2_slot2 = var9;
            var2 = new Array(0);
            _closure2_slot3 = var2;
            var11 = _closure1_slot46;
            var8 = var10;
            if(!(var8 < var11)) { _fun0047_ip = 367; continue _fun0047 }
case 404:
            var8 = var10;
            if(!var7) { _fun0047_ip = 367; continue _fun0047 }
case 145:
            var12 = _closure1_slot33;
            var11 = var12.getGuild;
            var11 = var11.bind(var12)(var13);
            var12 = null;
            var8 = var10;
            if(!(var12 != var11)) { _fun0047_ip = 367; continue _fun0047 }
case 363:
            var13 = _closure1_slot1;
            var14 = _closure1_slot3;
            var12 = 42;
            var12 = var14[var12];
            var12 = var13.bind(var6)(var12);
            var14 = _closure1_slot32;
            var13 = var14.getSortedRoles;
            var11 = var11.id;
            var11 = var13.bind(var14)(var11);
            var13 = var12.bind(var6)(var11);
            var12 = var13.filter;
            var11 = function(arg1) {
                _fun0048: for(var _fun0048_ip = 0; ; ) switch(_fun0048_ip) {
case 0:
                    var4 = arg1;
                    var1 = var4.mentionable;
                    if(var1) { _fun0048_ip = 167; continue _fun0048 }
case 36:
                    var1 = _closure2_slot0;
case 167:
                    if(var1) { _fun0048_ip = 371; continue _fun0048 }
case 156:
                    var1 = _closure2_slot1;
case 371:
                    if(!var1) { _fun0048_ip = 405; continue _fun0048 }
case 372:
                    var3 = _closure1_slot1;
                    var5 = _closure1_slot3;
                    var2 = 37;
                    var2 = var5[var2];
                    var6 = undefined;
                    var5 = var3.bind(var6)(var2);
                    var3 = _closure2_slot2;
                    var7 = var4.name;
                    var2 = var7.toLowerCase;
                    var2 = var2.bind(var7)();
                    var1 = var5.bind(var6)(var3, var2);
case 405:
                    if(!var1) { _fun0048_ip = 356; continue _fun0048 }
case 211:
                    var3 = _closure1_slot23;
                    var2 = undefined;
                    var2 = var3.bind(var2)(var4);
                    var1 = !var2;
case 356:
                    return var1;
                }
            };
            var13 = var12.bind(var13)(var11);
            var12 = var13.take;
            var11 = _closure1_slot46;
            var11 = var11 - var10;
            var12 = var12.bind(var13)(var11);
            var11 = var12.forEach;
            var3 = function(arg1) {
                var3 = _closure2_slot3;
                var2 = var3.push;
                var1 = arg1;
                var1 = var2.bind(var3)(var1);
                var1 = undefined;
                return var1;
            };
            var3 = var11.bind(var12)(var3);
            var3 = var2.length;
            var8 = var10 + var3;
case 367:
            var3 = new Array(0);
            if(!var5) { _fun0047_ip = 406; continue _fun0047 }
case 407:
            var5 = var7;
case 406:
            if(!var5) { _fun0047_ip = 408; continue _fun0047 }
case 409:
            var5 = _closure1_slot46;
            var5 = var8 < var5;
            if(!var5) { _fun0047_ip = 410; continue _fun0047 }
case 411:
            var10 = _closure1_slot1;
            var11 = _closure1_slot3;
            var7 = 37;
            var7 = var11[var7];
            var10 = var10.bind(var6)(var7);
            var7 = _closure1_slot55;
            var7 = var7.bind(var6)();
            var7 = var7.test;
            var5 = var10.bind(var6)(var9, var7);
case 410:
            var7 = var8;
            if(!var5) { _fun0047_ip = 201; continue _fun0047 }
case 412:
            var10 = var3.push;
            var5 = _closure1_slot55;
            var5 = var5.bind(var6)();
            var5 = var10.bind(var3)(var5);
            var5 = 1;
            var7 = var8 + var5;
case 201:
            var5 = _closure1_slot46;
            var5 = var7 < var5;
            if(!var5) { _fun0047_ip = 413; continue _fun0047 }
case 414:
            var8 = _closure1_slot1;
            var10 = _closure1_slot3;
            var7 = 37;
            var7 = var10[var7];
            var8 = var8.bind(var6)(var7);
            var7 = _closure1_slot56;
            var7 = var7.bind(var6)();
            var7 = var7.test;
            var5 = var8.bind(var6)(var9, var7);
case 413:
            if(!var5) { _fun0047_ip = 408; continue _fun0047 }
case 415:
            var5 = var3.push;
            var1 = _closure1_slot56;
            var1 = var1.bind(var6)();
            var1 = var5.bind(var3)(var1);
case 408:
            var1 = {};
            var1['users'] = var4;
            var1['globals'] = var3;
            var1['roles'] = var2;
            return var1;
        }
    };
    var7['queryGuildMentionResults'] = var11;
    var11 = function queryChoice(arg1) {
        _fun0049: for(var _fun0049_ip = 0; ; ) switch(_fun0049_ip) {
case 0:
            var2 = arg1;
            var3 = var2.query;
            var5 = var2.choices;
            var4 = var2.limit;
            var7 = undefined;
            if(!(var4 === var7)) { _fun0049_ip = 146; continue _fun0049 }
case 34:
            var4 = 10;
case 146:
            var2 = var2.fuzzy;
            if(!(var2 === var7)) { _fun0049_ip = 416; continue _fun0049 }
case 417:
            var2 = true;
case 416:
            var _closure2_slot0 = var2;
            var _closure2_slot1 = var7;
            var _closure2_slot2 = var7;
            var _closure2_slot3 = var7;
            var2 = var3.toLocaleLowerCase;
            var12 = var2.bind(var3)();
            _closure2_slot1 = var12;
            var9 = global;
            var14 = var9.RegExp;
            var6 = _closure1_slot1;
            var8 = _closure1_slot3;
            var3 = 36;
            var10 = var8[var3];
            var11 = var6.bind(var7)(var10);
            var10 = var11.escape;
            var13 = var10.bind(var11)(var12);
            var10 = var9.HermesInternal;
            var11 = var10.concat;
            var10 = '^';
            var16 = var11.bind(var10)(var13);
            var11 = var14.prototype;
            var13 = Object.create(var11, {constructor: {value: var14}});
            var11 = 'i';
            var17 = var13;
            var15 = var11;
            var10 = new var17[var14](var16, var15, var14);
            var10 = var10 instanceof Object ? var10 : var13;
            _closure2_slot2 = var10;
            var10 = var9.RegExp;
            var3 = var8[var3];
            var9 = var6.bind(var7)(var3);
            var3 = var9.escape;
            var16 = var3.bind(var9)(var12);
            var9 = var10.prototype;
            var9 = Object.create(var9, {constructor: {value: var10}});
            var17 = var9;
            var3 = new var17[var10](var16, var15, var14);
            var3 = var3 instanceof Object ? var3 : var9;
            _closure2_slot3 = var3;
            var3 = 42;
            var3 = var8[var3];
            var3 = var6.bind(var7)(var3);
            var6 = var3.bind(var7)(var5);
            var5 = var6.map;
            var3 = function(arg1, arg2) {
                _fun0050: for(var _fun0050_ip = 0; ; ) switch(_fun0050_ip) {
case 0:
                    var4 = arg1;
                    var6 = _closure1_slot66;
                    var2 = var4.displayName;
                    var1 = var2.toLocaleLowerCase;
                    var5 = var1.bind(var2)();
                    var3 = {};
                    var2 = _closure2_slot2;
                    var3['exactQuery'] = var2;
                    var2 = _closure2_slot3;
                    var3['containQuery'] = var2;
                    var2 = _closure2_slot1;
                    var3['queryLower'] = var2;
                    var2 = _closure2_slot0;
                    var1 = undefined;
                    var3 = var6.bind(var1)(var5, var3, var2);
                    var2 = 0;
                    var1 = null;
                    if(!(var3 > var2)) { _fun0050_ip = 48; continue _fun0050 }
case 220:
                    var2 = {};
                    var2['choice'] = var4;
                    var2['score'] = var3;
                    var3 = arg2;
                    var2['originalIndex'] = var3;
                    var1 = var2;
case 48:
                    return var1;
                }
            };
            var5 = var5.bind(var6)(var3);
            var3 = var5.filter;
            var6 = _closure1_slot0;
            var2 = 44;
            var2 = var8[var2];
            var2 = var6.bind(var7)(var2);
            var2 = var2.isNotNullish;
            var3 = var3.bind(var5)(var2);
            var2 = var3.sortBy;
            var1 = function(arg1) {
                var1 = arg1;
                var2 = var1.score;
                var1 = -1;
                var1 = var1 * var2;
                return var1;
            };
            var3 = var2.bind(var3)(var1);
            var1 = null;
            var2 = var3;
            if(!(var1 !== var4)) { _fun0049_ip = 418; continue _fun0049 }
case 419:
            var1 = var3.take;
            var2 = var1.bind(var3)(var4);
case 418:
            var1 = var2.value;
            var1 = var1.bind(var2)();
            return var1;
        }
    };
    var7['queryChoice'] = var11;
    var11 = function queryStaticRouteChannels(arg1) {
        _fun0051: for(var _fun0051_ip = 0; ; ) switch(_fun0051_ip) {
case 0:
            var1 = arg1;
            var2 = var1.query;
            var13 = var1.guild;
            var1 = var2.toLocaleLowerCase;
            var1 = var1.bind(var2)();
            var12 = {};
            var5 = global;
            var9 = var5.RegExp;
            var4 = _closure1_slot1;
            var3 = _closure1_slot3;
            var2 = 36;
            var6 = var3[var2];
            var10 = undefined;
            var7 = var4.bind(var10)(var6);
            var6 = var7.escape;
            var8 = var6.bind(var7)(var1);
            var6 = var5.HermesInternal;
            var7 = var6.concat;
            var6 = '^';
            var20 = var7.bind(var6)(var8);
            var6 = var9.prototype;
            var8 = Object.create(var6, {constructor: {value: var9}});
            var6 = 'i';
            var21 = var8;
            var19 = var6;
            var7 = new var21[var9](var20, var19, var18);
            var7 = var7 instanceof Object ? var7 : var8;
            var12['exactQuery'] = var7;
            var5 = var5.RegExp;
            var2 = var3[var2];
            var4 = var4.bind(var10)(var2);
            var2 = var4.escape;
            var20 = var2.bind(var4)(var1);
            var4 = var5.prototype;
            var4 = Object.create(var4, {constructor: {value: var5}});
            var21 = var4;
            var2 = new var21[var5](var20, var19, var18);
            var2 = var2 instanceof Object ? var2 : var4;
            var12['containQuery'] = var2;
            var12['queryLower'] = var1;
            var2 = _closure1_slot0;
            var1 = 52;
            var1 = var3[var1];
            var3 = var2.bind(var10)(var1);
            var2 = var3.canSeeOnboardingHome;
            var1 = var13.id;
            var9 = var2.bind(var3)(var1);
            if(!var9) { _fun0051_ip = 233; continue _fun0051 }
case 420:
            var3 = var13.features;
            var2 = var3.has;
            var1 = _closure1_slot43;
            var1 = var1.HUB;
            var1 = var2.bind(var3)(var1);
            var9 = !var1;
case 233:
            var3 = var13.features;
            var2 = var3.has;
            var1 = _closure1_slot43;
            var1 = var1.COMMUNITY;
            var8 = var2.bind(var3)(var1);
            var2 = _closure1_slot0;
            var3 = _closure1_slot3;
            var1 = 53;
            var1 = var3[var1];
            var2 = var2.bind(var10)(var1);
            var1 = var2.isGuildOnboardingAvailable;
            var7 = var1.bind(var2)(var13);
            if(!var7) { _fun0051_ip = 421; continue _fun0051 }
case 422:
            var3 = var13.features;
            var2 = var3.has;
            var1 = _closure1_slot43;
            var1 = var1.COMMUNITY;
            var7 = var2.bind(var3)(var1);
case 421:
            var1 = new Array(0);
            var2 = {};
            var4 = _closure1_slot48;
            var3 = var4.SERVER_GUIDE;
            var2['id'] = var3;
            var14 = _closure1_slot0;
            var15 = _closure1_slot3;
            var3 = 48;
            var5 = var15[var3];
            var5 = var14.bind(var10)(var5);
            var16 = var5.intl;
            var6 = var16.string;
            var5 = var15[var3];
            var5 = var14.bind(var10)(var5);
            var5 = var5.t;
            var5 = var5.VbpLyU;
            var5 = var6.bind(var16)(var5);
            var2['name'] = var5;
            var6 = new Array(3);
            var6[0] = var2;
            var2 = {};
            var5 = var4.CHANNEL_BROWSER;
            var2['id'] = var5;
            var5 = var15[var3];
            var5 = var14.bind(var10)(var5);
            var17 = var5.intl;
            var16 = var17.string;
            var5 = var15[var3];
            var5 = var14.bind(var10)(var5);
            var5 = var5.t;
            var5 = var5.et6wav;
            var5 = var16.bind(var17)(var5);
            var2['name'] = var5;
            var6[1] = var2;
            var2 = {};
            var4 = var4.CUSTOMIZE_COMMUNITY;
            var2['id'] = var4;
            var4 = var15[var3];
            var4 = var14.bind(var10)(var4);
            var5 = var4.intl;
            var4 = var5.string;
            var3 = var15[var3];
            var3 = var14.bind(var10)(var3);
            var3 = var3.t;
            var3 = var3.h9mGOP;
            var3 = var4.bind(var5)(var3);
            var2['name'] = var3;
            var6[2] = var2;
            var2 = var6.length;
            var5 = 0;
            var2 = var5 < var2;
            var4 = false;
            var3 = 0;
            if(!var2) { _fun0051_ip = 423; continue _fun0051 }
case 424:
            var15 = var6[var3];
            var14 = var15.id;
            var2 = _closure1_slot48;
            var2 = var2.SERVER_GUIDE;
            if(!(var14 === var2)) { _fun0051_ip = 425; continue _fun0051 }
case 368:
            if(!var9) { _fun0051_ip = 426; continue _fun0051 }
case 425:
            var14 = var15.id;
            var2 = _closure1_slot48;
            var2 = var2.CHANNEL_BROWSER;
            if(!(var14 === var2)) { _fun0051_ip = 427; continue _fun0051 }
case 428:
            if(!var8) { _fun0051_ip = 426; continue _fun0051 }
case 427:
            var14 = var15.id;
            var2 = _closure1_slot48;
            var2 = var2.CUSTOMIZE_COMMUNITY;
            if(!(var14 === var2)) { _fun0051_ip = 429; continue _fun0051 }
case 381:
            if(!var7) { _fun0051_ip = 426; continue _fun0051 }
case 429:
            var14 = _closure1_slot66;
            var16 = var15.name;
            var2 = var16.toLocaleLowerCase;
            var2 = var2.bind(var16)();
            var2 = var14.bind(var10)(var2, var12, var4);
            if(!(var2 > var5)) { _fun0051_ip = 426; continue _fun0051 }
case 430:
            var14 = var1.push;
            var16 = _closure1_slot22;
            var2 = {};
            var17 = var15.id;
            var2['id'] = var17;
            var15 = var15.name;
            var2['name'] = var15;
            var15 = _closure1_slot44;
            var15 = var15.UNKNOWN;
            var2['type'] = var15;
            var15 = var13.id;
            var2['guild_id'] = var15;
            var15 = var16.prototype;
            var15 = Object.create(var15, {constructor: {value: var16}});
            var21 = var15;
            var20 = var2;
            var2 = new var21[var16](var20, var19);
            var2 = var2 instanceof Object ? var2 : var15;
            var2 = var14.bind(var1)(var2);
case 426:
            var3 = var3 + 1;
            var2 = var6.length;
            if(var3 < var2) { _fun0051_ip = 424; continue _fun0051 }
case 423:
            return var1;
        }
    };
    var7['queryStaticRouteChannels'] = var11;
    var11 = function queryChannelResults(arg1) {
        _fun0052: for(var _fun0052_ip = 0; ; ) switch(_fun0052_ip) {
case 0:
            var1 = arg1;
            var5 = this;
            var8 = var1.query;
            var9 = var1.channel;
            var6 = var1.type;
            var7 = undefined;
            if(!(var6 === var7)) { _fun0052_ip = 217; continue _fun0052 }
case 3:
            var6 = _closure1_slot28;
case 217:
            var1 = var1.channelTypes;
            var _closure2_slot0 = var1;
            var1 = {};
            var4 = var5.queryChannels;
            var3 = {};
            var3['query'] = var8;
            var8 = var9.getGuildId;
            var8 = var8.bind(var9)();
            var3['guildId'] = var8;
            var3['limit'] = var7;
            var3['fuzzy'] = var7;
            var7 = function filter(arg1) {
                _fun0053: for(var _fun0053_ip = 0; ; ) switch(_fun0053_ip) {
case 0:
                    var3 = _closure2_slot0;
                    var1 = null;
                    var1 = var1 == var3;
                    if(var1) { _fun0053_ip = 40; continue _fun0053 }
case 225:
                    var4 = _closure2_slot0;
                    var3 = var4.includes;
                    var2 = arg1;
                    var2 = var2.type;
                    var1 = var3.bind(var4)(var2);
case 40:
                    return var1;
                }
            };
            var3['filter'] = var7;
            var3['type'] = var6;
            var6 = true;
            var3['allowEmptyQueries'] = var6;
            var4 = var4.bind(var5)(var3);
            var3 = var4.map;
            var2 = function(arg1) {
                var1 = arg1;
                var1 = var1.record;
                return var1;
            };
            var2 = var3.bind(var4)(var2);
            var1['channels'] = var2;
            return var1;
        }
    };
    var7['queryChannelResults'] = var11;
    var11 = function queryApplicationCommandChannelResults(arg1) {
        _fun0054: for(var _fun0054_ip = 0; ; ) switch(_fun0054_ip) {
case 0:
            var1 = arg1;
            var18 = this;
            var17 = var1.query;
            var3 = var1.channel;
            var6 = var1.channelTypes;
            var _closure2_slot0 = var6;
            var9 = var1.limit;
            var11 = undefined;
            if(!(var9 === var11)) { _fun0054_ip = 141; continue _fun0054 }
case 196:
            var9 = _closure1_slot46;
case 141:
            var16 = var1.allowSnowflake;
            var2 = var3.guild_id;
            var1 = null;
            if(!(var1 != var2)) { _fun0054_ip = 431; continue _fun0054 }
case 30:
            var12 = new Array(0);
            var15 = _closure1_slot61;
            var5 = var15.length;
            var8 = 0;
            var5 = var8 < var5;
            var14 = true;
            var13 = false;
            var7 = 0;
            var10 = var12;
            if(!var5) { _fun0054_ip = 142; continue _fun0054 }
case 48:
            var21 = var15[var7];
            var19 = var12.concat;
            var20 = var18.queryChannels;
            var5 = {};
            var5['query'] = var17;
            var22 = var3.guild_id;
            var5['guildId'] = var22;
            var5['limit'] = var9;
            var5['fuzzy'] = var14;
            var22 = function filter(arg1) {
                _fun0055: for(var _fun0055_ip = 0; ; ) switch(_fun0055_ip) {
case 0:
                    var3 = _closure2_slot0;
                    var1 = null;
                    var1 = var1 == var3;
                    if(var1) { _fun0055_ip = 40; continue _fun0055 }
case 225:
                    var4 = _closure2_slot0;
                    var3 = var4.includes;
                    var2 = arg1;
                    var2 = var2.type;
                    var1 = var3.bind(var4)(var2);
case 40:
                    return var1;
                }
            };
            var5['filter'] = var22;
            var5['type'] = var21;
            var5['allowEmptyQueries'] = var14;
            var5['requireVocalConnectAccess'] = var13;
            var5['allowSnowflake'] = var16;
            var5 = var20.bind(var18)(var5);
            var12 = var19.bind(var12)(var5);
            var7 = var7 + 1;
            var5 = var15.length;
            var10 = var12;
            if(var7 < var5) { _fun0054_ip = 48; continue _fun0054 }
case 142:
            var7 = var10.filter;
            var5 = function(arg1) {
                var1 = arg1;
                var1 = var1.record;
                var2 = var1.id;
                var1 = 'null';
                var1 = var1 !== var2;
                return var1;
            };
            var7 = var7.bind(var10)(var5);
            var5 = var7.sort;
            var10 = _closure1_slot1;
            var12 = _closure1_slot3;
            var2 = 54;
            var2 = var12[var2];
            var2 = var10.bind(var11)(var2);
            var5 = var5.bind(var7)(var2);
            var2 = var1 != var9;
            if(!var2) { _fun0054_ip = 432; continue _fun0054 }
case 23:
            var7 = var5.length;
            var2 = var7 > var9;
case 432:
            var7 = var5;
            if(!var2) { _fun0054_ip = 63; continue _fun0054 }
case 234:
            var2 = var5.slice;
            var7 = var2.bind(var5)(var8, var9);
case 63:
            var2 = {};
            var5 = var7.map;
            var4 = function(arg1) {
                var1 = arg1;
                var1 = var1.record;
                return var1;
            };
            var4 = var5.bind(var7)(var4);
            var2['channels'] = var4;
            return var2;
case 431:
            var2 = new Array(0);
            var1 = var1 == var6;
            if(var1) { _fun0054_ip = 8; continue _fun0054 }
case 433:
            var5 = var6.includes;
            var4 = var3.type;
            var1 = var5.bind(var6)(var4);
case 8:
            if(!var1) { _fun0054_ip = 434; continue _fun0054 }
case 27:
            var1 = var2.push;
            var1 = var1.bind(var2)(var3);
case 434:
            var1 = {};
            var1['channels'] = var2;
            return var1;
        }
    };
    var7['queryApplicationCommandChannelResults'] = var11;
    var11 = function queryChoiceResults(arg1) {
        var1 = arg1;
        var4 = this;
        var6 = var1.query;
        var5 = var1.choices;
        var1 = {};
        var3 = var4.queryChoice;
        var2 = {};
        var2['query'] = var6;
        var2['choices'] = var5;
        var5 = null;
        var2['limit'] = var5;
        var4 = var3.bind(var4)(var2);
        var3 = var4.map;
        var2 = function(arg1) {
            var1 = arg1;
            var1 = var1.choice;
            return var1;
        };
        var2 = var3.bind(var4)(var2);
        var1['choices'] = var2;
        return var1;
    };
    var7['queryChoiceResults'] = var11;
    var11 = function queryEmojiResults(arg1) {
        _fun0056: for(var _fun0056_ip = 0; ; ) switch(_fun0056_ip) {
case 0:
            var1 = arg1;
            var8 = var1.query;
            var9 = var1.channel;
            var6 = var1.intention;
            var7 = var1.maxCount;
            var4 = undefined;
            if(!(var7 === var4)) { _fun0056_ip = 37; continue _fun0056 }
case 372:
            var7 = _closure1_slot46;
case 37:
            var5 = var1.matchComparator;
            var3 = _closure1_slot0;
            var10 = _closure1_slot3;
            var1 = 55;
            var1 = var10[var1];
            var1 = var3.bind(var4)(var1);
            var3 = var1.FrecencyUserSettingsActionCreators;
            var1 = var3.loadIfNecessary;
            var1 = var1.bind(var3)();
            var1 = {};
            var4 = _closure1_slot9;
            var3 = var4.searchWithoutFetchingLatest;
            var2 = {};
            var2['channel'] = var9;
            var2['query'] = var8;
            var2['count'] = var7;
            var2['intention'] = var6;
            var2['matchComparator'] = var5;
            var2 = var3.bind(var4)(var2);
            var1['emojis'] = var2;
            return var1;
        }
    };
    var7['queryEmojiResults'] = var11;
    var11 = function queryStickers(arg1) {
        _fun0057: for(var _fun0057_ip = 0; ; ) switch(_fun0057_ip) {
case 0:
            var1 = arguments[1];
            var2 = arguments[2];
            var5 = undefined;
            if(!(var1 === var5)) { _fun0057_ip = 225; continue _fun0057 }
case 32:
            var1 = true;
case 225:
            var _closure2_slot0 = var1;
            if(!(var2 === var5)) { _fun0057_ip = 435; continue _fun0057 }
case 436:
            var4 = _closure1_slot52;
            var1 = [null];
            var1[1] = var4;
            var2 = var1;
case 435:
            var6 = var2;
            var1 = var6[Symbol.iterator];
            var6 = var1().next;
            var7 = var6().value;
            var2 = var1;
            var2 = var2 === var5;
            var4 = undefined;
            if(var2) { _fun0057_ip = 402; continue _fun0057 }
case 35:
            var4 = var7;
case 402:
            var _closure2_slot1 = var4;
            var4 = undefined;
            if(var2) { _fun0057_ip = 166; continue _fun0057 }
case 227:
            var7 = var6().value;
            var6 = var1;
            var6 = var6 === var5;
            var4 = undefined;
            var2 = var6;
            if(var6) { _fun0057_ip = 166; continue _fun0057 }
case 48:
            var4 = var7;
            var2 = var6;
case 166:
            var _closure2_slot2 = var4;
            if(var2) { _fun0057_ip = 357; continue _fun0057 }
case 223:
            var1.return();
case 357:
            var _closure2_slot3 = var5;
            var _closure2_slot4 = var5;
            var _closure2_slot5 = var5;
            var _closure2_slot6 = var5;
            var4 = _closure1_slot40;
            var1 = var4.getCurrentUser;
            var1 = var1.bind(var4)();
            _closure2_slot3 = var1;
            var1 = global;
            var1 = var1.Set;
            var4 = var1.prototype;
            var4 = Object.create(var4, {constructor: {value: var1}});
            var11 = var4;
            var1 = new var11[var1](var10);
            var1 = var1 instanceof Object ? var1 : var4;
            _closure2_slot4 = var1;
            var4 = new Array(0);
            _closure2_slot5 = var4;
            var6 = _closure1_slot0;
            var7 = _closure1_slot3;
            var1 = 55;
            var1 = var7[var1];
            var1 = var6.bind(var5)(var1);
            var6 = var1.FrecencyUserSettingsActionCreators;
            var1 = var6.loadIfNecessary;
            var1 = var1.bind(var6)();
            var8 = function _loop() {
                _fun0058: for(var _fun0058_ip = 0; ; ) switch(_fun0058_ip) {
case 0:
                    var3 = _closure2_slot6;
                    var8 = '';
                    if(!(var8 !== var3)) { _fun0058_ip = 437; continue _fun0058 }
case 29:
                    var3 = _closure2_slot6;
                    var1 = var3.toLocaleLowerCase;
                    var6 = var1.bind(var3)();
                    var _closure3_slot0 = var6;
                    var5 = _closure1_slot0;
                    var11 = _closure1_slot3;
                    var1 = 38;
                    var4 = var11[var1];
                    var1 = undefined;
                    var5 = var5.bind(var1)(var4);
                    var4 = var5.stripDiacritics;
                    var10 = var4.bind(var5)(var6);
                    var4 = global;
                    var13 = var4.RegExp;
                    var9 = _closure1_slot1;
                    var5 = 36;
                    var6 = var11[var5];
                    var7 = var9.bind(var1)(var6);
                    var6 = var7.escape;
                    var12 = var6.bind(var7)(var10);
                    var6 = var4.HermesInternal;
                    var7 = var6.concat;
                    var6 = '^';
                    var15 = var7.bind(var6)(var12);
                    var7 = var13.prototype;
                    var12 = Object.create(var7, {constructor: {value: var13}});
                    var7 = 'i';
                    var16 = var12;
                    var14 = var7;
                    var6 = new var16[var13](var15, var14, var13);
                    var6 = var6 instanceof Object ? var6 : var12;
                    var _closure3_slot1 = var6;
                    var6 = var4.RegExp;
                    var5 = var11[var5];
                    var9 = var9.bind(var1)(var5);
                    var5 = var9.escape;
                    var5 = var5.bind(var9)(var10);
                    var4 = var4.HermesInternal;
                    var4 = var4.concat;
                    var15 = var4.bind(var8)(var5);
                    var5 = var6.prototype;
                    var5 = Object.create(var5, {constructor: {value: var6}});
                    var16 = var5;
                    var4 = new var16[var6](var15, var14, var13);
                    var4 = var4 instanceof Object ? var4 : var5;
                    var _closure3_slot2 = var4;
                    var4 = _closure1_slot13;
                    var3 = var4.getStickerMetadataArrays;
                    var4 = var3.bind(var4)();
                    var3 = var4.forEach;
                    var2 = function(arg1) {
                        var3 = arg1;
                        var2 = var3.forEach;
                        var1 = function(arg1, arg2) {
                            _fun0059: for(var _fun0059_ip = 0; ; ) switch(_fun0059_ip) {
case 0:
                                var9 = arg2;
                                var2 = _closure1_slot13;
                                var1 = var2.getStickerById;
                                var6 = var1.bind(var2)(var9);
                                var3 = null;
                                if(!(var3 != var6)) { _fun0059_ip = 438; continue _fun0059 }
case 3:
                                var5 = _closure2_slot2;
                                var7 = _closure1_slot0;
                                var8 = _closure1_slot3;
                                var2 = 56;
                                var2 = var8[var2];
                                var18 = undefined;
                                var10 = var7.bind(var18)(var2);
                                var8 = var10.getStickerSendability;
                                var7 = _closure2_slot3;
                                var2 = _closure2_slot1;
                                var2 = var8.bind(var10)(var6, var7, var2);
                                var2 = var5.bind(var18)(var6, var2);
                                if(!var2) { _fun0059_ip = 438; continue _fun0059 }
case 439:
                                var5 = _closure1_slot63;
                                var2 = arg1;
                                var17 = var5.bind(var18)(var2);
                                var5 = var17.bind(var18)();
                                var7 = var5.done;
                                var2 = 0;
                                var16 = 7;
                                var15 = 5;
                                var13 = 41;
                                var12 = 0;
                                var11 = null;
                                var10 = var5;
                                var8 = 0;
                                var5 = null;
                                if(var7) { _fun0059_ip = 440; continue _fun0059 }
case 150:
                                var7 = var10.value;
                                var24 = var7.type;
                                var7 = var7.value;
                                var19 = _closure1_slot70;
                                var22 = var19.bind(var18)(var24);
                                var19 = _closure2_slot0;
                                var21 = _closure3_slot0;
                                if(var19) { _fun0059_ip = 50; continue _fun0059 }
case 16:
                                var19 = var11;
                                var20 = 0;
                                if(!(var7 === var21)) { _fun0059_ip = 441; continue _fun0059 }
case 442:
                                var23 = _closure1_slot51;
                                var20 = var23 * var22;
                                var19 = var7;
                                _fun0059_ip = 441; continue _fun0059;
case 50:
                                if(!(var7 !== var21)) { _fun0059_ip = 443; continue _fun0059 }
case 444:
                                var23 = _closure3_slot1;
                                var21 = var23.test;
                                var21 = var21.bind(var23)(var7);
                                if(var21) { _fun0059_ip = 445; continue _fun0059 }
case 21:
                                var23 = _closure1_slot0;
                                var21 = _closure1_slot3;
                                var21 = var21[var13];
                                var21 = var23.bind(var18)(var21);
                                var21 = var21.StickerMetadataTypes;
                                var21 = var21.GUILD_NAME;
                                var21 = var24 !== var21;
                                if(!var21) { _fun0059_ip = 446; continue _fun0059 }
case 12:
                                var25 = _closure1_slot0;
                                var23 = _closure1_slot3;
                                var23 = var23[var13];
                                var23 = var25.bind(var18)(var23);
                                var23 = var23.StickerMetadataTypes;
                                var23 = var23.PACK_NAME;
                                var21 = var24 !== var23;
case 446:
                                if(!var21) { _fun0059_ip = 183; continue _fun0059 }
case 302:
                                var25 = _closure1_slot0;
                                var23 = _closure1_slot3;
                                var23 = var23[var13];
                                var23 = var25.bind(var18)(var23);
                                var23 = var23.StickerMetadataTypes;
                                var23 = var23.STICKER_NAME;
                                var21 = var24 !== var23;
case 183:
                                if(var21) { _fun0059_ip = 447; continue _fun0059 }
case 448:
                                var24 = _closure3_slot2;
                                var23 = var24.test;
                                var23 = var23.bind(var24)(var7);
                                var21 = !var23;
case 447:
                                var19 = var11;
                                var20 = 0;
                                if(var21) { _fun0059_ip = 441; continue _fun0059 }
case 449:
                                var20 = var15 * var22;
                                var19 = var11;
                                _fun0059_ip = 441; continue _fun0059;
case 445:
                                var20 = var16 * var22;
                                var19 = var11;
                                _fun0059_ip = 441; continue _fun0059;
case 443:
                                var21 = _closure1_slot51;
                                var20 = var21 * var22;
                                var19 = var11;
case 441:
                                if(!(var20 > var12)) { _fun0059_ip = 235; continue _fun0059 }
case 450:
                                var12 = var20;
                                var19 = var7;
case 235:
                                var21 = var17.bind(var18)();
                                var7 = var21.done;
                                var11 = var19;
                                var10 = var21;
                                var8 = var12;
                                var5 = var11;
                                if(!var7) { _fun0059_ip = 150; continue _fun0059 }
case 440:
                                var4 = _closure1_slot12;
                                var7 = var4.stickerFrecencyWithoutFetchingLatest;
                                var4 = var7.getScore;
                                var9 = var4.bind(var7)(var9);
                                var4 = var8;
                                if(!(var3 != var9)) { _fun0059_ip = 451; continue _fun0059 }
case 415:
                                var7 = 100;
                                var7 = var9 / var7;
                                var4 = var8 * var7;
case 451:
                                var2 = var4 > var2;
                                if(!var2) { _fun0059_ip = 452; continue _fun0059 }
case 408:
                                var2 = var3 != var5;
case 452:
                                if(!var2) { _fun0059_ip = 352; continue _fun0059 }
case 453:
                                var8 = _closure2_slot4;
                                var7 = var8.has;
                                var3 = var6.id;
                                var3 = var7.bind(var8)(var3);
                                var2 = !var3;
case 352:
                                if(!var2) { _fun0059_ip = 438; continue _fun0059 }
case 243:
                                var7 = _closure2_slot4;
                                var3 = var7.add;
                                var2 = var6.id;
                                var2 = var3.bind(var7)(var2);
                                var3 = _closure2_slot5;
                                var2 = var3.push;
                                var1 = {};
                                var1['sticker'] = var6;
                                var1['comparator'] = var5;
                                var1['score'] = var4;
                                var1 = var2.bind(var3)(var1);
case 438:
                                var1 = undefined;
                                return var1;
                            }
                        };
                        var1 = var2.bind(var3)(var1);
                        var1 = undefined;
                        return var1;
                    };
                    var2 = var3.bind(var4)(var2);
                    return var1;
case 437:
                    var1 = 1;
                    return var1;
                }
            };
            var6 = _closure1_slot63;
            var1 = arg1;
            var7 = var6.bind(var5)(var1);
            var6 = var7.bind(var5)();
            var1 = var6.done;
            if(var1) { _fun0057_ip = 454; continue _fun0057 }
case 332:
            var1 = var6.value;
            _closure2_slot6 = var1;
            var1 = var8.bind(var5)();
            var9 = var7.bind(var5)();
            var1 = var9.done;
            var6 = var9;
            if(!var1) { _fun0057_ip = 332; continue _fun0057 }
case 454:
            var6 = _closure1_slot1;
            var7 = _closure1_slot3;
            var1 = 42;
            var1 = var7[var1];
            var1 = var6.bind(var5)(var1);
            var5 = var1.bind(var5)(var4);
            var4 = var5.sortBy;
            var1 = function(arg1) {
                var1 = arg1;
                var2 = var1.score;
                var1 = -1;
                var1 = var1 * var2;
                return var1;
            };
            var4 = var4.bind(var5)(var1);
            var1 = var4.value;
            var1 = var1.bind(var4)();
            _closure2_slot5 = var1;
            var5 = var1.length;
            var4 = 0;
            if(!(var4 === var5)) { _fun0057_ip = 455; continue _fun0057 }
case 456:
            var2 = _closure1_slot54;
            _closure2_slot5 = var2;
            var1 = var2;
case 455:
            return var1;
        }
    };
    var7['queryStickers'] = var11;
    var11 = function querySoundmoji(arg1, arg2) {
        _fun0060: for(var _fun0060_ip = 0; ; ) switch(_fun0060_ip) {
case 0:
            var6 = arg2;
            var _closure2_slot0 = var6;
            var3 = _closure1_slot40;
            var2 = var3.getCurrentUser;
            var5 = var2.bind(var3)();
            var3 = _closure1_slot11;
            var2 = var3.isFetching;
            var2 = var2.bind(var3)();
            var2 = !var2;
            if(!var2) { _fun0060_ip = 200; continue _fun0060 }
case 457:
            var7 = _closure1_slot11;
            var3 = var7.hasFetchedAllSounds;
            var3 = var3.bind(var7)();
            var2 = !var3;
case 200:
            if(!var2) { _fun0060_ip = 458; continue _fun0060 }
case 30:
            var7 = _closure1_slot0;
            var3 = _closure1_slot3;
            var2 = 57;
            var3 = var3[var2];
            var2 = undefined;
            var3 = var7.bind(var2)(var3);
            var2 = var3.maybeFetchSoundboardSounds;
            var2 = var2.bind(var3)();
case 458:
            var3 = _closure1_slot0;
            var7 = _closure1_slot3;
            var2 = 55;
            var8 = var7[var2];
            var2 = undefined;
            var8 = var3.bind(var2)(var8);
            var9 = var8.FrecencyUserSettingsActionCreators;
            var8 = var9.loadIfNecessary;
            var8 = var8.bind(var9)();
            var8 = global;
            var9 = var8.Array;
            var8 = var9.from;
            var10 = _closure1_slot11;
            var4 = var10.getSounds;
            var10 = var4.bind(var10)();
            var4 = var10.values;
            var4 = var4.bind(var10)();
            var9 = var8.bind(var9)(var4);
            var8 = var9.reduce;
            var4 = function(arg1, arg2) {
                var1 = arg1;
                var4 = arg2;
                var _closure3_slot0 = var1;
                var3 = var4.forEach;
                var2 = function(arg1) {
                    _fun0061: for(var _fun0061_ip = 0; ; ) switch(_fun0061_ip) {
case 0:
                        var4 = arg1;
                        var3 = _closure1_slot1;
                        var2 = _closure1_slot3;
                        var1 = 58;
                        var2 = var2[var1];
                        var1 = undefined;
                        var5 = var3.bind(var1)(var2);
                        var2 = _closure2_slot0;
                        var7 = null;
                        var2 = var7 == var2;
                        var3 = undefined;
                        if(var2) { _fun0061_ip = 4; continue _fun0061 }
case 2:
                        var2 = _closure2_slot0;
                        var3 = var2.guild_id;
case 4:
                        var2 = _closure2_slot0;
                        var7 = var7 == var2;
                        var2 = undefined;
                        if(var7) { _fun0061_ip = 298; continue _fun0061 }
case 459:
                        var6 = _closure2_slot0;
                        var2 = var6.id;
case 298:
                        var2 = var5.bind(var1)(var4, var3, var2);
                        if(!var2) { _fun0061_ip = 173; continue _fun0061 }
case 162:
                        var3 = _closure3_slot0;
                        var2 = var3.push;
                        var2 = var2.bind(var3)(var4);
case 173:
                        return var1;
                    }
                };
                var2 = var3.bind(var4)(var2);
                return var1;
            };
            var1 = new Array(0);
            var13 = var8.bind(var9)(var4, var1);
            var1 = 59;
            var1 = var7[var1];
            var3 = var3.bind(var2)(var1);
            var2 = var3.searchSounds;
            var14 = arg1;
            var15 = var3;
            var12 = var5;
            var11 = var6;
            var1 = var15[var2](var14, var13, var12, var11, var10);
            return var1;
        }
    };
    var7['querySoundmoji'] = var11;
    var11 = function queryGames(arg1) {
        _fun0062: for(var _fun0062_ip = 0; ; ) switch(_fun0062_ip) {
case 0:
            var3 = arg1;
            var _closure2_slot0 = var3;
            var1 = function getSortPriority(arg1) {
                _fun0063: for(var _fun0063_ip = 0; ; ) switch(_fun0063_ip) {
case 0:
                    var4 = arg1;
                    var3 = _closure1_slot0;
                    var5 = _closure1_slot3;
                    var1 = 38;
                    var1 = var5[var1];
                    var10 = undefined;
                    var5 = var3.bind(var10)(var1);
                    var3 = var5.stripDiacritics;
                    var6 = var4.name;
                    var1 = var6.toLowerCase;
                    var1 = var1.bind(var6)();
                    var7 = var3.bind(var5)(var1);
                    var1 = _closure2_slot2;
                    var9 = var7;
                    if(!var1) { _fun0063_ip = 158; continue _fun0063 }
case 30:
                    var6 = var7.replaceAll;
                    var5 = '_';
                    var1 = ' ';
                    var9 = var6.bind(var7)(var5, var1);
case 158:
                    var5 = var4.id;
                    var1 = _closure2_slot0;
                    var6 = 1000;
                    if(!(var5 !== var1)) { _fun0063_ip = 460; continue _fun0063 }
case 373:
                    var1 = _closure2_slot3;
                    var6 = 5;
                    if(!(var9 !== var1)) { _fun0063_ip = 460; continue _fun0063 }
case 461:
                    var5 = var9.startsWith;
                    var1 = _closure2_slot3;
                    var1 = var5.bind(var9)(var1);
                    var6 = 4;
                    if(var1) { _fun0063_ip = 460; continue _fun0063 }
case 462:
                    var5 = var9.includes;
                    var1 = _closure2_slot3;
                    var1 = var5.bind(var9)(var1);
                    var6 = 3;
                    if(var1) { _fun0063_ip = 460; continue _fun0063 }
case 463:
                    var1 = _closure2_slot0;
                    var5 = var1.length;
                    var1 = 1;
                    var5 = var5 > var1;
                    if(!var5) { _fun0063_ip = 464; continue _fun0063 }
case 16:
                    var8 = _closure1_slot1;
                    var11 = _closure1_slot3;
                    var7 = 37;
                    var7 = var11[var7];
                    var8 = var8.bind(var10)(var7);
                    var7 = _closure2_slot3;
                    var5 = var8.bind(var10)(var7, var9);
case 464:
                    var6 = 0;
                    if(!var5) { _fun0063_ip = 460; continue _fun0063 }
case 444:
                    var6 = var1;
case 460:
                    var5 = 0;
                    var1 = var6;
                    if(!(var1 > var5)) { _fun0063_ip = 446; continue _fun0063 }
case 465:
                    var7 = _closure2_slot1;
                    var5 = var7.includes;
                    var3 = var4.id;
                    var5 = var5.bind(var7)(var3);
                    var3 = var6;
                    if(!var5) { _fun0063_ip = 332; continue _fun0063 }
case 214:
                    var5 = 10;
                    var3 = var6 + var5;
case 332:
                    var6 = _closure1_slot49;
                    var5 = var6.get;
                    var4 = var4.id;
                    var4 = var5.bind(var6)(var4);
                    var5 = null;
                    var1 = var3;
                    if(!(var5 != var4)) { _fun0063_ip = 446; continue _fun0063 }
case 454:
                    var2 = _closure1_slot49;
                    var2 = var2.size;
                    var2 = var4 / var2;
                    var1 = var3 + var2;
case 446:
                    return var1;
                }
            };
            var _closure2_slot4 = var1;
            var5 = _closure1_slot10;
            var4 = var5.getRunningVerifiedApplicationIds;
            var9 = var4.bind(var5)();
            var _closure2_slot1 = var9;
            var4 = var3.includes;
            var8 = '_';
            var4 = var4.bind(var3)(var8);
            var _closure2_slot2 = var4;
            var5 = _closure1_slot0;
            var6 = _closure1_slot3;
            var4 = 38;
            var4 = var6[var4];
            var6 = undefined;
            var7 = var5.bind(var6)(var4);
            var5 = var7.stripDiacritics;
            var4 = var3.toLowerCase;
            var4 = var4.bind(var3)();
            var7 = var5.bind(var7)(var4);
            var5 = var7.replaceAll;
            var4 = ' ';
            var4 = var5.bind(var7)(var8, var4);
            var _closure2_slot3 = var4;
            var3 = var3.length;
            var4 = 0;
            if(!(var4 !== var3)) { _fun0062_ip = 466; continue _fun0062 }
case 172:
            var3 = _closure1_slot26;
            var5 = var3.games;
            _fun0062_ip = 467; continue _fun0062;
case 466:
            var3 = global;
            var8 = var3.Array;
            var7 = var8.from;
            var10 = var3.Set;
            var3 = new Array(0);
            var15 = var3;
            var14 = var9;
            var13 = 0;
            var13 = arraySpread(var15, var14, var13);
            var12 = _closure1_slot49;
            var9 = var12.keys;
            var14 = var9.bind(var12)();
            var15 = var3;
            var9 = arraySpread(var15, var14, var13);
            var9 = var10.prototype;
            var9 = Object.create(var9, {constructor: {value: var10}});
            var16 = var9;
            var15 = var3;
            var3 = new var16[var10](var15, var14);
            var3 = var3 instanceof Object ? var3 : var9;
            var8 = var7.bind(var8)(var3);
            var7 = var8.map;
            var3 = function(arg1) {
                var3 = _closure1_slot26;
                var2 = var3.getDetectableGame;
                var1 = arg1;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var8 = var7.bind(var8)(var3);
            var7 = var8.filter;
            var9 = _closure1_slot0;
            var10 = _closure1_slot3;
            var3 = 44;
            var3 = var10[var3];
            var3 = var9.bind(var6)(var3);
            var3 = var3.isNotNullish;
            var5 = var7.bind(var8)(var3);
case 467:
            var7 = _closure1_slot1;
            var8 = _closure1_slot3;
            var3 = 42;
            var3 = var8[var3];
            var3 = var7.bind(var6)(var3);
            var6 = var3.bind(var6)(var5);
            var5 = var6.filter;
            var3 = function(arg1) {
                _fun0064: for(var _fun0064_ip = 0; ; ) switch(_fun0064_ip) {
case 0:
                    var4 = arg1;
                    var3 = _closure1_slot0;
                    var1 = _closure1_slot3;
                    var6 = 60;
                    var1 = var1[var6];
                    var5 = undefined;
                    var3 = var3.bind(var5)(var1);
                    var1 = var3.isNSFWGame;
                    var1 = var1.bind(var3)(var4);
                    var1 = !var1;
                    if(!var1) { _fun0064_ip = 44; continue _fun0064 }
case 457:
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot3;
                    var2 = var2[var6];
                    var3 = var3.bind(var5)(var2);
                    var2 = var3.isAgeRestrictedGame;
                    var2 = var2.bind(var3)(var4);
                    var1 = !var2;
case 44:
                    return var1;
                }
            };
            var6 = var5.bind(var6)(var3);
            var5 = var6.map;
            var3 = function(arg1) {
                var4 = arg1;
                var1 = {};
                var1['game'] = var4;
                var3 = _closure2_slot4;
                var2 = undefined;
                var2 = var3.bind(var2)(var4);
                var1['score'] = var2;
                return var1;
            };
            var6 = var5.bind(var6)(var3);
            var5 = var6.filter;
            var3 = function(arg1) {
                var1 = arg1;
                var2 = var1.score;
                var1 = 0;
                var1 = var2 > var1;
                return var1;
            };
            var6 = var5.bind(var6)(var3);
            var5 = var6.sortBy;
            var3 = function(arg1) {
                var1 = arg1;
                var1 = var1.score;
                return var1;
            };
            var5 = var5.bind(var6)(var3);
            var3 = var5.map;
            var2 = function(arg1) {
                var1 = arg1;
                var1 = var1.game;
                return var1;
            };
            var3 = var3.bind(var5)(var2);
            var2 = var3.reverse;
            var3 = var2.bind(var3)();
            var2 = var3.value;
            var3 = var2.bind(var3)();
            var2 = var3.slice;
            var1 = _closure1_slot46;
            var1 = var2.bind(var3)(var4, var1);
            return var1;
        }
    };
    var7['queryGames'] = var11;
    var11 = function matchSentinel(arg1, arg2, arg3) {
        _fun0065: for(var _fun0065_ip = 0; ; ) switch(_fun0065_ip) {
case 0:
            var3 = _closure1_slot53;
            var2 = var3.test;
            var1 = arg2;
            var1 = var2.bind(var3)(var1);
            var1 = !var1;
            if(!var1) { _fun0065_ip = 38; continue _fun0065 }
case 468:
            var3 = arg1;
            var2 = arg3;
            var1 = var3 === var2;
case 38:
            return var1;
        }
    };
    var7['matchSentinel'] = var11;
    var11 = function hasSameRoleAsUsername(arg1, arg2) {
        _fun0066: for(var _fun0066_ip = 0; ; ) switch(_fun0066_ip) {
case 0:
            var6 = arg1;
            var5 = arg2;
            var1 = var5.hasUniqueUsername;
            var1 = var1.bind(var5)();
            if(var1) { _fun0066_ip = 31; continue _fun0066 }
case 167:
            var1 = false;
            return var1;
case 31:
            var3 = _closure1_slot33;
            var2 = var3.getGuild;
            var1 = var6.getGuildId;
            var1 = var1.bind(var6)();
            var3 = var2.bind(var3)(var1);
            var2 = _closure1_slot63;
            var1 = null;
            if(!(var1 == var3)) { _fun0066_ip = 30; continue _fun0066 }
case 7:
            var1 = new Array(0);
            _fun0066_ip = 162; continue _fun0066;
case 30:
            var6 = _closure1_slot32;
            var4 = var6.getSortedRoles;
            var3 = var3.id;
            var1 = var4.bind(var6)(var3);
case 162:
            var4 = undefined;
            var3 = var2.bind(var4)(var1);
            var2 = var3.bind(var4)();
            var1 = var2.done;
            if(var1) { _fun0066_ip = 469; continue _fun0066 }
case 470:
            var1 = var2.value;
            var8 = var1.name;
            var7 = var5.username;
            var6 = var7.startsWith;
            var1 = var8.toLowerCase;
            var1 = var1.bind(var8)();
            var1 = var6.bind(var7)(var1);
            if(var1) { _fun0066_ip = 14; continue _fun0066 }
case 45:
            var6 = var3.bind(var4)();
            var1 = var6.done;
            var2 = var6;
            if(var1) { _fun0066_ip = 469; continue _fun0066 }
case 471:
            _fun0066_ip = 470; continue _fun0066;
case 14:
            var1 = true;
            return var1;
case 469:
            var1 = false;
            return var1;
        }
    };
    var7['hasSameRoleAsUsername'] = var11;
    var7['queryMemberList'] = var8;
    var8 = 61;
    var8 = var10[var8];
    var10 = var9.bind(var1)(var8);
    var9 = var10.fileFinishedImporting;
    var8 = 'utils/AutocompleteUtils.tsx';
    var8 = var9.bind(var10)(var8);
    var3['default'] = var7;
    var3['WHITESPACE_REGEX'] = var6;
    var3['calculateScore'] = var5;
    var4 = function getBoosterMap(arg1) {
        var3 = _closure1_slot60;
        var2 = var3.get;
        var1 = arg1;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var3['getBoosterMap'] = var4;
    var3['COMMAND_SUPPORTED_CHANNEL_TYPE_KEYS'] = var2;
    return var1;
})();