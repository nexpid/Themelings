// app/utils/AutocompleteUtils.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var9 = require;
    var13 = metroImportDefault;
    var3 = exports;
    var10 = dependencyMap;
    var _closure1_slot0 = var9;
    var _closure1_slot1 = var13;
    var1 = metroImportAll;
    var _closure1_slot2 = var1;
    var _closure1_slot3 = var10;
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
            if(var2) { _fun0001_ip = 343; continue _fun0001 }
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
            var9 = _closure1_slot61;
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
            var7 = _closure1_slot61;
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
 343:
            var1 = var2.call;
            var3 = var1.bind(var2)(var3);
            var2 = var3.next;
            var1 = var2.bind;
            var1 = var1.bind(var2)(var3);
            return var1;
        }
    };
    var _closure1_slot60 = var1;
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
    var _closure1_slot61 = var1;
    var5 = function calculateScore() {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
            var2 = arguments[0];
            var3 = arguments[1];
            var1 = undefined;
            if(!(var2 === var1)) { _fun0004_ip = 14; continue _fun0004 }
 12:
            var2 = 0;
 14:
            var1 = 1000;
            var2 = var1 * var2;
            var1 = null;
            var4 = var1 != var3;
            var1 = 1;
            if(!var4) { _fun0004_ip = 39; continue _fun0004 }
 36:
            var1 = var3;
 39:
            var1 = var2 * var1;
            return var1;
        }
    };
    var _closure1_slot62 = var5;
    var1 = function getMatchValue(arg1, arg2) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
            var6 = arg2;
            var7 = arguments[2];
            var2 = arg1;
            var5 = var6.exactQuery;
            var4 = var6.containQuery;
            var1 = var6.queryLower;
            var6 = undefined;
            if(!(var7 === var6)) { _fun0005_ip = 35; continue _fun0005 }
 33:
            var7 = true;
 35:
            var3 = var7;
 38: // try_start_0
            var8 = var5;
            var7 = var8.test;
            var5 = var2;
            var5 = var7.bind(var8)(var5);
            if(var5) { _fun0005_ip = 156; continue _fun0005 }
 57:
            var7 = var4;
            var5 = var7.test;
            var4 = var2;
            var4 = var5.bind(var7)(var4);
            if(var4) { _fun0005_ip = 151; continue _fun0005 }
 76:
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
                    var1 = 35;
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
            if(var4) { _fun0005_ip = 146; continue _fun0005 }
 98:
            if(!var3) { _fun0005_ip = 139; continue _fun0005 }
 101:
            var4 = _closure1_slot1;
            var5 = _closure1_slot3;
            var3 = 36;
            var3 = var5[var3];
            var5 = var4.bind(var6)(var3);
            var4 = var1;
            var3 = var2;
            var3 = var5.bind(var6)(var4, var3);
            if(var3) { _fun0005_ip = 141; continue _fun0005 }
 139: // try_end0
            _fun0005_ip = 207; continue _fun0005;
 141:
            var3 = 1;
            return var3;
 146:
            var3 = 3;
            return var3;
 151:
            var3 = 5;
            return var3;
 156: // try_start_1
            var3 = var2;
            var2 = var3.toLocaleLowerCase;
            var3 = var2.bind(var3)();
            var2 = var1;
            var1 = 7;
            if(!(var3 === var2)) { _fun0005_ip = 186; continue _fun0005 }
 179:
            var1 = _closure1_slot50;
 186: // try_end1
            return var1;
 188: // catch_target0 // catch_target1
            CatchBlockStart(arg_register=2);
            var2 = _closure1_slot49;
            var1 = var2.error;
            var1 = var1.bind(var2)(var3);
 207:
            var1 = 0;
            return var1;
        }
    };
    var _closure1_slot63 = var1;
    var1 = function isValidGuildMember(arg1) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
            var2 = arg1;
            var3 = null;
            var4 = var3 == var2;
            var1 = undefined;
            if(var4) { _fun0006_ip = 20; continue _fun0006 }
 14:
            var1 = var2.joinedAt;
 20:
            var1 = var3 != var1;
            if(!var1) { _fun0006_ip = 36; continue _fun0006 }
 27:
            var2 = var2.isPending;
            var1 = !var2;
 36:
            return var1;
        }
    };
    var _closure1_slot64 = var1;
    var1 = function queryMemberList(arg1) {
        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
            var1 = arg1;
            var40 = var1.query;
            var39 = var1.members;
            var2 = var1.limit;
            var38 = var1.filter;
            var37 = var1.allowSnowflake;
            var36 = var1.boosters;
            var4 = _closure1_slot37;
            var1 = var4.getUsers;
            var35 = var1.bind(var4)();
            var4 = _closure1_slot36;
            var1 = var4.getGuildId;
            var34 = var1.bind(var4)();
            var1 = var40.toLocaleLowerCase;
            var33 = var1.bind(var40)();
            var4 = _closure1_slot0;
            var1 = _closure1_slot3;
            var32 = 37;
            var1 = var1[var32];
            var9 = undefined;
            var4 = var4.bind(var9)(var1);
            var1 = var4.normalize;
            var31 = var1.bind(var4)(var33);
            var5 = new Array(0);
            var8 = new Array(0);
            var30 = var39.length;
            var7 = 0;
            var41 = var7 < var30;
            var29 = 1;
            var28 = null;
            var27 = 36;
            var26 = 50;
            var25 = 38;
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
            if(!var41) { _fun0007_ip = 1853; continue _fun0007 }
 185:
            var41 = var39[var24];
            var42 = _closure1_slot21;
            var42 = var41 instanceof var42;
            if(var42) { _fun0007_ip = 239; continue _fun0007 }
 200:
            var42 = var41.nick;
            var43 = var28 == var42;
            var65 = undefined;
            if(var43) { _fun0007_ip = 225; continue _fun0007 }
 215:
            var43 = var42.toLocaleLowerCase;
            var65 = var43.bind(var42)();
 225:
            var43 = var41.userId;
            var43 = var35[var43];
            var55 = var42;
            _fun0007_ip = 291; continue _fun0007;
 239:
            var45 = _closure1_slot28;
            var44 = var45.getNick;
            var42 = var41.id;
            var44 = var44.bind(var45)(var34, var42);
            var45 = var28 == var44;
            var42 = undefined;
            if(var45) { _fun0007_ip = 279; continue _fun0007 }
 269:
            var45 = var44.toLocaleLowerCase;
            var42 = var45.bind(var44)();
 279:
            var65 = var42;
            var22 = var44;
            var55 = var21;
            var43 = var41;
 291:
            var42 = _closure1_slot1;
            var41 = _closure1_slot3;
            var41 = var41[var25];
            var42 = var42.bind(var9)(var41);
            var41 = var42.getGlobalName;
            var42 = var41.bind(var42)(var43);
            var41 = var28 == var42;
            var72 = var43;
            var64 = undefined;
            if(var41) { _fun0007_ip = 341; continue _fun0007 }
 331:
            var41 = var42.toLocaleLowerCase;
            var64 = var41.bind(var42)();
 341:
            var56 = var23;
            var54 = var20;
            var53 = var19;
            var52 = var18;
            var51 = var17;
            var50 = var16;
            var49 = var15;
            var48 = var14;
            var47 = var13;
            var46 = var12;
            var45 = var11;
            var44 = var10;
            var43 = var6;
            var42 = var4;
            var41 = var1;
            if(!(var28 != var72)) { _fun0007_ip = 1794; continue _fun0007 }
 393:
            if(!(var28 != var38)) { _fun0007_ip = 453; continue _fun0007 }
 397:
            var57 = var38.bind(var9)(var72);
            var56 = var23;
            var54 = var20;
            var53 = var19;
            var52 = var18;
            var51 = var17;
            var50 = var16;
            var49 = var15;
            var48 = var14;
            var47 = var13;
            var46 = var12;
            var45 = var11;
            var44 = var10;
            var43 = var6;
            var42 = var4;
            var41 = var1;
            if(!var57) { _fun0007_ip = 1794; continue _fun0007 }
 453:
            var58 = var72.username;
            var57 = var58.toLocaleLowerCase;
            var63 = var57.bind(var58)();
            var58 = _closure1_slot0;
            var57 = _closure1_slot3;
            var59 = var57[var32];
            var60 = var58.bind(var9)(var59);
            var59 = var60.stripDiacritics;
            var62 = var59.bind(var60)(var63);
            var57 = var57[var32];
            var58 = var58.bind(var9)(var57);
            var57 = var58.normalize;
            var61 = var57.bind(var58)(var62);
            var57 = var28 != var65;
            var60 = null;
            if(!var57) { _fun0007_ip = 553; continue _fun0007 }
 525:
            var58 = _closure1_slot0;
            var57 = _closure1_slot3;
            var57 = var57[var32];
            var58 = var58.bind(var9)(var57);
            var57 = var58.stripDiacritics;
            var60 = var57.bind(var58)(var65);
 553:
            var57 = var28 != var60;
            var59 = null;
            if(!var57) { _fun0007_ip = 590; continue _fun0007 }
 562:
            var58 = _closure1_slot0;
            var57 = _closure1_slot3;
            var57 = var57[var32];
            var58 = var58.bind(var9)(var57);
            var57 = var58.normalize;
            var59 = var57.bind(var58)(var60);
 590:
            var57 = var28 != var64;
            var58 = null;
            if(!var57) { _fun0007_ip = 627; continue _fun0007 }
 599:
            var66 = _closure1_slot0;
            var57 = _closure1_slot3;
            var57 = var57[var32];
            var66 = var66.bind(var9)(var57);
            var57 = var66.stripDiacritics;
            var58 = var57.bind(var66)(var64);
 627:
            var66 = var28 != var58;
            var57 = null;
            if(!var66) { _fun0007_ip = 664; continue _fun0007 }
 636:
            var67 = _closure1_slot0;
            var66 = _closure1_slot3;
            var66 = var66[var32];
            var67 = var67.bind(var9)(var66);
            var66 = var67.normalize;
            var57 = var66.bind(var67)(var58);
 664:
            if(!var37) { _fun0007_ip = 682; continue _fun0007 }
 667:
            var67 = var72.id;
            var66 = var20;
            if(!(var40 !== var67)) { _fun0007_ip = 1634; continue _fun0007 }
 682:
            var68 = var63.substring;
            var67 = var33.length;
            var67 = var68.bind(var63)(var7, var67);
            var66 = var20;
            if(!(var67 !== var33)) { _fun0007_ip = 1634; continue _fun0007 }
 709:
            var68 = var62.substring;
            var67 = var33.length;
            var67 = var68.bind(var62)(var7, var67);
            var66 = var20;
            if(!(var67 !== var33)) { _fun0007_ip = 1634; continue _fun0007 }
 736:
            var68 = var28 == var65;
            var67 = undefined;
            if(var68) { _fun0007_ip = 762; continue _fun0007 }
 745:
            var69 = var65.substring;
            var68 = var33.length;
            var67 = var69.bind(var65)(var7, var68);
 762:
            var66 = var65;
            if(!(var67 !== var33)) { _fun0007_ip = 1634; continue _fun0007 }
 772:
            var68 = var28 == var60;
            var67 = undefined;
            if(var68) { _fun0007_ip = 798; continue _fun0007 }
 781:
            var69 = var60.substring;
            var68 = var33.length;
            var67 = var69.bind(var60)(var7, var68);
 798:
            var66 = var65;
            if(!(var67 !== var33)) { _fun0007_ip = 1634; continue _fun0007 }
 808:
            var68 = var28 == var64;
            var67 = undefined;
            if(var68) { _fun0007_ip = 834; continue _fun0007 }
 817:
            var69 = var64.substring;
            var68 = var33.length;
            var67 = var69.bind(var64)(var7, var68);
 834:
            var66 = var65;
            if(!(var67 !== var33)) { _fun0007_ip = 1634; continue _fun0007 }
 844:
            var68 = var28 == var58;
            var67 = undefined;
            if(var68) { _fun0007_ip = 870; continue _fun0007 }
 853:
            var69 = var58.substring;
            var68 = var33.length;
            var67 = var69.bind(var58)(var7, var68);
 870:
            var66 = var65;
            if(!(var67 !== var33)) { _fun0007_ip = 1634; continue _fun0007 }
 880:
            var68 = var61.substring;
            var67 = var31.length;
            var67 = var68.bind(var61)(var7, var67);
            if(!(var67 !== var31)) { _fun0007_ip = 1470; continue _fun0007 }
 904:
            var68 = var28 == var59;
            var67 = undefined;
            if(var68) { _fun0007_ip = 930; continue _fun0007 }
 913:
            var69 = var59.substring;
            var68 = var31.length;
            var67 = var69.bind(var59)(var7, var68);
 930:
            if(!(var67 !== var31)) { _fun0007_ip = 1470; continue _fun0007 }
 937:
            var68 = var28 == var57;
            var67 = undefined;
            if(var68) { _fun0007_ip = 963; continue _fun0007 }
 946:
            var69 = var57.substring;
            var68 = var31.length;
            var67 = var69.bind(var57)(var7, var68);
 963:
            if(!(var67 !== var31)) { _fun0007_ip = 1470; continue _fun0007 }
 970:
            var56 = var23;
            var54 = var65;
            var53 = var19;
            var52 = var18;
            var51 = var63;
            var50 = var62;
            var49 = var61;
            var48 = var60;
            var47 = var59;
            var46 = var58;
            var45 = var57;
            var44 = var10;
            var43 = var6;
            var42 = var4;
            var41 = var1;
            if(!(var23 < var26)) { _fun0007_ip = 1794; continue _fun0007 }
 1022:
            var68 = _closure1_slot1;
            var67 = _closure1_slot3;
            var67 = var67[var27];
            var67 = var68.bind(var9)(var67);
            var67 = var67.bind(var9)(var33, var62);
            if(var67) { _fun0007_ip = 1305; continue _fun0007 }
 1051:
            var68 = _closure1_slot1;
            var67 = _closure1_slot3;
            var67 = var67[var27];
            var67 = var68.bind(var9)(var67);
            var67 = var67.bind(var9)(var31, var61);
            if(var67) { _fun0007_ip = 1305; continue _fun0007 }
 1080:
            if(!(var28 != var60)) { _fun0007_ip = 1113; continue _fun0007 }
 1084:
            var68 = _closure1_slot1;
            var67 = _closure1_slot3;
            var67 = var67[var27];
            var67 = var68.bind(var9)(var67);
            var67 = var67.bind(var9)(var33, var60);
            if(var67) { _fun0007_ip = 1305; continue _fun0007 }
 1113:
            if(!(var28 != var59)) { _fun0007_ip = 1146; continue _fun0007 }
 1117:
            var68 = _closure1_slot1;
            var67 = _closure1_slot3;
            var67 = var67[var27];
            var67 = var68.bind(var9)(var67);
            var67 = var67.bind(var9)(var31, var59);
            if(var67) { _fun0007_ip = 1305; continue _fun0007 }
 1146:
            if(!(var28 != var58)) { _fun0007_ip = 1179; continue _fun0007 }
 1150:
            var68 = _closure1_slot1;
            var67 = _closure1_slot3;
            var67 = var67[var27];
            var67 = var68.bind(var9)(var67);
            var67 = var67.bind(var9)(var33, var58);
            if(var67) { _fun0007_ip = 1305; continue _fun0007 }
 1179:
            var56 = var23;
            var54 = var65;
            var53 = var19;
            var52 = var18;
            var51 = var63;
            var50 = var62;
            var49 = var61;
            var48 = var60;
            var47 = var59;
            var46 = var58;
            var45 = var57;
            var44 = var10;
            var43 = var6;
            var42 = var4;
            var41 = var1;
            if(!(var28 != var57)) { _fun0007_ip = 1794; continue _fun0007 }
 1231:
            var68 = _closure1_slot1;
            var67 = _closure1_slot3;
            var67 = var67[var27];
            var67 = var68.bind(var9)(var67);
            var67 = var67.bind(var9)(var31, var57);
            var56 = var23;
            var54 = var65;
            var53 = var19;
            var52 = var18;
            var51 = var63;
            var50 = var62;
            var49 = var61;
            var48 = var60;
            var47 = var59;
            var46 = var58;
            var45 = var57;
            var44 = var10;
            var43 = var6;
            var42 = var4;
            var41 = var1;
            if(!var67) { _fun0007_ip = 1794; continue _fun0007 }
 1305:
            var70 = var8.push;
            var69 = {};
            var67 = _closure1_slot45;
            var67 = var67.USER;
            var69['type'] = var67;
            var69['record'] = var72;
            var68 = _closure1_slot62;
            var71 = var28 == var36;
            var67 = undefined;
            if(var71) { _fun0007_ip = 1353; continue _fun0007 }
 1344:
            var71 = var72.id;
            var67 = var36[var71];
 1353:
            var67 = var68.bind(var9)(var29, var67);
            var69['score'] = var67;
            var68 = var65;
            if(!(var28 != var64)) { _fun0007_ip = 1374; continue _fun0007 }
 1371:
            var68 = var64;
 1374:
            var67 = var63;
            if(!(var28 != var68)) { _fun0007_ip = 1384; continue _fun0007 }
 1381:
            var67 = var68;
 1384:
            var69['comparator'] = var67;
            var67 = var60;
            if(!(var28 != var58)) { _fun0007_ip = 1399; continue _fun0007 }
 1396:
            var67 = var58;
 1399:
            var71 = var62;
            if(!(var28 != var67)) { _fun0007_ip = 1409; continue _fun0007 }
 1406:
            var71 = var67;
 1409:
            var69['sortable'] = var71;
            var69 = var70.bind(var8)(var69);
            var56 = var23 + var29;
            var54 = var65;
            var53 = var19;
            var52 = var18;
            var51 = var63;
            var50 = var62;
            var49 = var61;
            var48 = var60;
            var47 = var59;
            var46 = var58;
            var45 = var57;
            var44 = var10;
            var43 = var6;
            var42 = var68;
            var41 = var67;
            _fun0007_ip = 1794; continue _fun0007;
 1470:
            var70 = var5.push;
            var69 = {};
            var67 = _closure1_slot45;
            var67 = var67.USER;
            var69['type'] = var67;
            var69['record'] = var72;
            var68 = _closure1_slot62;
            var71 = var28 == var36;
            var67 = undefined;
            if(var71) { _fun0007_ip = 1518; continue _fun0007 }
 1509:
            var71 = var72.id;
            var67 = var36[var71];
 1518:
            var67 = var68.bind(var9)(var29, var67);
            var69['score'] = var67;
            var68 = var65;
            if(!(var28 != var64)) { _fun0007_ip = 1539; continue _fun0007 }
 1536:
            var68 = var64;
 1539:
            var67 = var63;
            if(!(var28 != var68)) { _fun0007_ip = 1549; continue _fun0007 }
 1546:
            var67 = var68;
 1549:
            var69['comparator'] = var67;
            var67 = var60;
            if(!(var28 != var58)) { _fun0007_ip = 1564; continue _fun0007 }
 1561:
            var67 = var58;
 1564:
            var71 = var62;
            if(!(var28 != var67)) { _fun0007_ip = 1574; continue _fun0007 }
 1571:
            var71 = var67;
 1574:
            var69['sortable'] = var71;
            var69 = var70.bind(var5)(var69);
            var56 = var23;
            var54 = var65;
            var53 = var19;
            var52 = var18;
            var51 = var63;
            var50 = var62;
            var49 = var61;
            var48 = var60;
            var47 = var59;
            var46 = var58;
            var45 = var57;
            var44 = var68;
            var43 = var67;
            var42 = var4;
            var41 = var1;
            _fun0007_ip = 1794; continue _fun0007;
 1634:
            var68 = var5.push;
            var67 = {};
            var69 = _closure1_slot45;
            var69 = var69.USER;
            var67['type'] = var69;
            var67['record'] = var72;
            var71 = _closure1_slot62;
            var70 = _closure1_slot50;
            var73 = var28 == var36;
            var69 = undefined;
            if(var73) { _fun0007_ip = 1686; continue _fun0007 }
 1677:
            var72 = var72.id;
            var69 = var36[var72];
 1686:
            var69 = var71.bind(var9)(var70, var69);
            var67['score'] = var69;
            if(!(var28 != var64)) { _fun0007_ip = 1704; continue _fun0007 }
 1701:
            var65 = var64;
 1704:
            var64 = var63;
            if(!(var28 != var65)) { _fun0007_ip = 1714; continue _fun0007 }
 1711:
            var64 = var65;
 1714:
            var67['comparator'] = var64;
            var64 = var60;
            if(!(var28 != var58)) { _fun0007_ip = 1729; continue _fun0007 }
 1726:
            var64 = var58;
 1729:
            var69 = var62;
            if(!(var28 != var64)) { _fun0007_ip = 1739; continue _fun0007 }
 1736:
            var69 = var64;
 1739:
            var67['sortable'] = var69;
            var67 = var68.bind(var5)(var67);
            var56 = var23;
            var54 = var66;
            var53 = var65;
            var52 = var64;
            var51 = var63;
            var50 = var62;
            var49 = var61;
            var48 = var60;
            var47 = var59;
            var46 = var58;
            var45 = var57;
            var44 = var10;
            var43 = var6;
            var42 = var4;
            var41 = var1;
 1794:
            var24 = var24 + var29;
            var23 = var56;
            var20 = var54;
            var19 = var53;
            var18 = var52;
            var17 = var51;
            var16 = var50;
            var15 = var49;
            var14 = var48;
            var13 = var47;
            var12 = var46;
            var11 = var45;
            var10 = var44;
            var6 = var43;
            var4 = var42;
            var1 = var41;
            var21 = var55;
            if(var24 < var30) { _fun0007_ip = 185; continue _fun0007 }
 1853:
            var4 = var5.sort;
            var6 = _closure1_slot1;
            var1 = _closure1_slot3;
            var10 = 39;
            var1 = var1[var10];
            var1 = var6.bind(var9)(var1);
            var1 = var4.bind(var5)(var1);
            var4 = var5.length;
            var1 = var5;
            if(!(var4 < var2)) { _fun0007_ip = 1973; continue _fun0007 }
 1896:
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
 1973:
            var3 = var1.length;
            if(!(var3 > var2)) { _fun0007_ip = 1988; continue _fun0007 }
 1982:
            var1['length'] = var2;
 1988:
            return var1;
        }
    };
    var _closure1_slot65 = var1;
    var1 = function getPriorityForStickerMetadataType(arg1) {
        _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
 0:
            var2 = arg1;
            var6 = _closure1_slot0;
            var3 = _closure1_slot3;
            var5 = 40;
            var3 = var3[var5];
            var4 = undefined;
            var3 = var6.bind(var4)(var3);
            var3 = var3.StickerMetadataTypes;
            var3 = var3.STICKER_NAME;
            if(!(var3 !== var2)) { _fun0008_ip = 199; continue _fun0008 }
 47:
            var6 = _closure1_slot0;
            var3 = _closure1_slot3;
            var3 = var3[var5];
            var3 = var6.bind(var4)(var3);
            var3 = var3.StickerMetadataTypes;
            var3 = var3.CORRELATED_EMOJI;
            if(!(var3 !== var2)) { _fun0008_ip = 194; continue _fun0008 }
 80:
            var6 = _closure1_slot0;
            var3 = _closure1_slot3;
            var3 = var3[var5];
            var3 = var6.bind(var4)(var3);
            var3 = var3.StickerMetadataTypes;
            var3 = var3.TAG;
            if(!(var3 !== var2)) { _fun0008_ip = 189; continue _fun0008 }
 113:
            var6 = _closure1_slot0;
            var3 = _closure1_slot3;
            var3 = var3[var5];
            var3 = var6.bind(var4)(var3);
            var3 = var3.StickerMetadataTypes;
            var3 = var3.GUILD_NAME;
            if(!(var3 !== var2)) { _fun0008_ip = 184; continue _fun0008 }
 146:
            var3 = _closure1_slot0;
            var1 = _closure1_slot3;
            var1 = var1[var5];
            var1 = var3.bind(var4)(var1);
            var1 = var1.StickerMetadataTypes;
            var1 = var1.PACK_NAME;
            if(!(var1 !== var2)) { _fun0008_ip = 184; continue _fun0008 }
 179:
            var1 = 1;
            return var1;
 184:
            var1 = 8;
            return var1;
 189:
            var1 = 1;
            return var1;
 194:
            var1 = 6;
            return var1;
 199:
            var1 = 11;
            return var1;
        }
    };
    var _closure1_slot66 = var1;
    var1 = function isPartialTypeMatch(arg1, arg2) {
        _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
 0:
            var3 = _closure1_slot25;
            var1 = arg1;
            var1 = var1 === var3;
            if(!var1) { _fun0009_ip = 31; continue _fun0009 }
 17:
            var4 = _closure1_slot16;
            var3 = undefined;
            var2 = arg2;
            var1 = var4.bind(var3)(var2);
 31:
            return var1;
        }
    };
    var _closure1_slot67 = var1;
    var1 = function getBestScore(arg1, arg2, arg3) {
        _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
 0:
            var14 = arg1;
            var3 = arg2;
            var13 = arg3;
            var1 = _closure1_slot60;
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
            if(var6) { _fun0010_ip = 97; continue _fun0010 }
 50:
            var6 = var9.value;
            var15 = _closure1_slot63;
            var15 = var15.bind(var11)(var14, var6, var13);
            if(!(var15 > var8)) { _fun0010_ip = 76; continue _fun0010 }
 70:
            var8 = var15;
            var7 = var6;
 76:
            var17 = var10.bind(var11)();
            var6 = var17.done;
            var9 = var17;
            var1 = var8;
            var5 = var7;
            if(!var6) { _fun0010_ip = 50; continue _fun0010 }
 97:
            if(!(var4 != var5)) { _fun0010_ip = 144; continue _fun0010 }
 101:
            var4 = var5.isFullMatch;
            if(var4) { _fun0010_ip = 138; continue _fun0010 }
 110:
            var6 = var3.splice;
            var4 = var3.indexOf;
            var5 = var4.bind(var3)(var5);
            var4 = 1;
            var4 = var6.bind(var3)(var5, var4);
            _fun0010_ip = 144; continue _fun0010;
 138:
            var3['length'] = var2;
 144:
            return var1;
        }
    };
    var _closure1_slot68 = var1;
    var1 = function getGuildName(arg1, arg2) {
        _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
 0:
            var5 = arg1;
            var4 = arg2;
            var1 = var5.guild_id;
            var2 = null;
            if(!(var2 == var1)) { _fun0011_ip = 21; continue _fun0011 }
 17:
            var1 = undefined;
            return var1;
 21:
            var1 = var5.guild_id;
            var1 = var4[var1];
            if(!(var2 == var1)) { _fun0011_ip = 92; continue _fun0011 }
 34:
            var3 = var5.guild_id;
            var7 = _closure1_slot30;
            var6 = var7.getGuild;
            var5 = var5.guild_id;
            var5 = var6.bind(var7)(var5);
            var6 = var2 == var5;
            var2 = undefined;
            if(var6) { _fun0011_ip = 85; continue _fun0011 }
 70:
            var6 = var5.name;
            var5 = var6.toLocaleLowerCase;
            var2 = var5.bind(var6)();
 85:
            var4[var3] = var2;
            var1 = var2;
 92:
            return var1;
        }
    };
    var _closure1_slot69 = var1;
    var1 = function getCategoryName(arg1, arg2) {
        _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
 0:
            var5 = arg1;
            var4 = arg2;
            var1 = var5.parent_id;
            var2 = null;
            if(!(var2 == var1)) { _fun0012_ip = 22; continue _fun0012 }
 18:
            var1 = undefined;
            return var1;
 22:
            var1 = var5.parent_id;
            var1 = var4[var1];
            if(!(var2 == var1)) { _fun0012_ip = 96; continue _fun0012 }
 36:
            var3 = var5.parent_id;
            var7 = _closure1_slot22;
            var6 = var7.getChannel;
            var5 = var5.parent_id;
            var5 = var6.bind(var7)(var5);
            var6 = var2 == var5;
            var2 = undefined;
            if(var6) { _fun0012_ip = 89; continue _fun0012 }
 74:
            var6 = var5.name;
            var5 = var6.toLocaleLowerCase;
            var2 = var5.bind(var6)();
 89:
            var4[var3] = var2;
            var1 = var2;
 96:
            return var1;
        }
    };
    var _closure1_slot70 = var1;
    var8 = function getRecentlyTalked(arg1, arg2) {
        _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
 0:
            var6 = arg1;
            var4 = _closure1_slot22;
            var3 = var4.getChannel;
            var4 = var3.bind(var4)(var6);
            var _closure2_slot0 = var4;
            var3 = null;
            if(!(var3 != var6)) { _fun0013_ip = 190; continue _fun0013 }
 35:
            if(!(var3 != var4)) { _fun0013_ip = 190; continue _fun0013 }
 42:
            var5 = _closure1_slot1;
            var4 = _closure1_slot3;
            var3 = 41;
            var3 = var4[var3];
            var4 = undefined;
            var3 = var5.bind(var4)(var3);
            var5 = _closure1_slot31;
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
                var3 = _closure1_slot37;
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
                _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
 0:
                    var2 = arg1;
                    var1 = null;
                    if(!(var1 != var2)) { _fun0014_ip = 87; continue _fun0014 }
 9:
                    var3 = var2.isNonUserBot;
                    var3 = var3.bind(var2)();
                    if(var3) { _fun0014_ip = 83; continue _fun0014 }
 22:
                    var4 = _closure2_slot0;
                    var3 = var4.getGuildId;
                    var6 = var3.bind(var4)();
                    var1 = var1 == var6;
                    if(var1) { _fun0014_ip = 81; continue _fun0014 }
 46:
                    var4 = _closure1_slot64;
                    var5 = _closure1_slot28;
                    var3 = var5.getMember;
                    var2 = var2.id;
                    var3 = var3.bind(var5)(var6, var2);
                    var2 = undefined;
                    var1 = var4.bind(var2)(var3);
 81:
                    return var1;
 83:
                    var1 = false;
                    return var1;
 87:
                    var1 = false;
                    return var1;
                }
            };
            var3 = var3.bind(var4)(var2);
            var2 = var3.map;
            var1 = function(arg1) {
                _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
 0:
                    var5 = arg1;
                    var2 = _closure2_slot0;
                    var1 = var2.getGuildId;
                    var6 = var1.bind(var2)();
                    var4 = null;
                    var1 = var4 != var6;
                    var7 = null;
                    if(!var1) { _fun0015_ip = 55; continue _fun0015 }
 31:
                    var3 = _closure1_slot28;
                    var2 = var3.getMember;
                    var1 = var5.id;
                    var7 = var2.bind(var3)(var6, var1);
 55:
                    var1 = {};
                    var2 = _closure1_slot45;
                    var2 = var2.USER;
                    var1['type'] = var2;
                    var1['record'] = var5;
                    var2 = 0;
                    var1['score'] = var2;
                    var8 = var4 == var7;
                    var6 = undefined;
                    var2 = undefined;
                    if(var8) { _fun0015_ip = 103; continue _fun0015 }
 97:
                    var2 = var7.nick;
 103:
                    if(!(var4 == var2)) { _fun0015_ip = 138; continue _fun0015 }
 107:
                    var4 = _closure1_slot1;
                    var7 = _closure1_slot3;
                    var3 = 38;
                    var3 = var7[var3];
                    var4 = var4.bind(var6)(var3);
                    var3 = var4.getName;
                    var2 = var3.bind(var4)(var5);
 138:
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
            _fun0013_ip = 194; continue _fun0013;
 190:
            var1 = new Array(0);
 194:
            return var1;
        }
    };
    var _closure1_slot71 = var8;
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
    var2 = var9.bind(var1)(var2);
    var6 = var2.InAppNavigationRecord;
    var _closure1_slot4 = var6;
    var2 = var2.InAppNavigationType;
    var _closure1_slot5 = var2;
    var2 = 1;
    var2 = var10[var2];
    var2 = var13.bind(var1)(var2);
    var _closure1_slot6 = var2;
    var2 = 2;
    var2 = var10[var2];
    var2 = var13.bind(var1)(var2);
    var _closure1_slot7 = var2;
    var2 = 3;
    var2 = var10[var2];
    var2 = var13.bind(var1)(var2);
    var _closure1_slot8 = var2;
    var2 = 4;
    var2 = var10[var2];
    var2 = var13.bind(var1)(var2);
    var _closure1_slot9 = var2;
    var2 = 5;
    var2 = var10[var2];
    var2 = var13.bind(var1)(var2);
    var _closure1_slot10 = var2;
    var2 = 6;
    var2 = var10[var2];
    var2 = var13.bind(var1)(var2);
    var _closure1_slot11 = var2;
    var2 = 7;
    var2 = var10[var2];
    var2 = var13.bind(var1)(var2);
    var _closure1_slot12 = var2;
    var2 = 8;
    var2 = var10[var2];
    var2 = var9.bind(var1)(var2);
    var6 = var2.ChannelRecordBase;
    var _closure1_slot13 = var6;
    var6 = var2.isGuildChannelType;
    var _closure1_slot14 = var6;
    var6 = var2.isGuildSelectableChannelType;
    var _closure1_slot15 = var6;
    var6 = var2.isGuildVocalChannelType;
    var _closure1_slot16 = var6;
    var6 = var2.isThread;
    var _closure1_slot17 = var6;
    var6 = var2.PrivateChannelRecord;
    var _closure1_slot18 = var6;
    var2 = var2.UnknownChannelRecord;
    var _closure1_slot19 = var2;
    var2 = 9;
    var2 = var10[var2];
    var2 = var9.bind(var1)(var2);
    var2 = var2.isEveryoneRole;
    var _closure1_slot20 = var2;
    var2 = 10;
    var6 = var10[var2];
    var6 = var13.bind(var1)(var6);
    var _closure1_slot21 = var6;
    var6 = 11;
    var6 = var10[var6];
    var6 = var13.bind(var1)(var6);
    var _closure1_slot22 = var6;
    var6 = 12;
    var6 = var10[var6];
    var6 = var13.bind(var1)(var6);
    var _closure1_slot23 = var6;
    var6 = 13;
    var6 = var10[var6];
    var6 = var13.bind(var1)(var6);
    var _closure1_slot24 = var6;
    var6 = 14;
    var7 = var10[var6];
    var7 = var9.bind(var1)(var7);
    var12 = var7.GUILD_SELECTABLE_CHANNELS_KEY;
    var _closure1_slot25 = var12;
    var11 = var7.GUILD_VOCAL_CHANNELS_KEY;
    var _closure1_slot26 = var11;
    var6 = var10[var6];
    var6 = var13.bind(var1)(var6);
    var _closure1_slot27 = var6;
    var6 = 15;
    var6 = var10[var6];
    var6 = var13.bind(var1)(var6);
    var _closure1_slot28 = var6;
    var6 = 16;
    var6 = var10[var6];
    var6 = var13.bind(var1)(var6);
    var _closure1_slot29 = var6;
    var6 = 17;
    var6 = var10[var6];
    var6 = var13.bind(var1)(var6);
    var _closure1_slot30 = var6;
    var6 = 18;
    var6 = var10[var6];
    var6 = var13.bind(var1)(var6);
    var _closure1_slot31 = var6;
    var6 = 19;
    var6 = var10[var6];
    var6 = var13.bind(var1)(var6);
    var _closure1_slot32 = var6;
    var6 = 20;
    var6 = var10[var6];
    var6 = var13.bind(var1)(var6);
    var _closure1_slot33 = var6;
    var6 = 21;
    var6 = var10[var6];
    var6 = var13.bind(var1)(var6);
    var _closure1_slot34 = var6;
    var6 = 22;
    var6 = var10[var6];
    var6 = var13.bind(var1)(var6);
    var _closure1_slot35 = var6;
    var6 = 23;
    var6 = var10[var6];
    var6 = var13.bind(var1)(var6);
    var _closure1_slot36 = var6;
    var6 = 24;
    var6 = var10[var6];
    var6 = var13.bind(var1)(var6);
    var _closure1_slot37 = var6;
    var6 = 25;
    var6 = var10[var6];
    var6 = var13.bind(var1)(var6);
    var _closure1_slot38 = var6;
    var6 = 26;
    var6 = var10[var6];
    var6 = var13.bind(var1)(var6);
    var _closure1_slot39 = var6;
    var6 = 27;
    var6 = var10[var6];
    var6 = var9.bind(var1)(var6);
    var7 = var6.Permissions;
    var _closure1_slot40 = var7;
    var7 = var6.GuildFeatures;
    var _closure1_slot41 = var7;
    var7 = var6.ChannelTypes;
    var _closure1_slot42 = var7;
    var14 = var6.SKUTypes;
    var _closure1_slot43 = var14;
    var6 = var6.MAX_AUTOCOMPLETE_RESULTS;
    var _closure1_slot44 = var6;
    var6 = 28;
    var6 = var10[var6];
    var6 = var9.bind(var1)(var6);
    var6 = var6.AutocompleterResultTypes;
    var _closure1_slot45 = var6;
    var6 = 29;
    var6 = var10[var6];
    var6 = var9.bind(var1)(var6);
    var6 = var6.StaticChannelId;
    var _closure1_slot46 = var6;
    var6 = 30;
    var6 = var10[var6];
    var6 = var9.bind(var1)(var6);
    var6 = var6.HOISTED_SEARCH_APPLICATION_IDS_BY_PRIORITY;
    var _closure1_slot47 = var6;
    var6 = 31;
    var6 = var10[var6];
    var15 = var9.bind(var1)(var6);
    var14 = var15.createStore;
    var6 = function() {
        var1 = {};
        var2 = new Array(0);
        var1['options'] = var2;
        return var1;
    };
    var6 = var14.bind(var15)(var6);
    var _closure1_slot48 = var6;
    var6 = 32;
    var6 = var10[var6];
    var14 = var13.bind(var1)(var6);
    var6 = var14.prototype;
    var13 = Object.create(var6, {constructor: {value: var14}});
    var18 = 'AutocompleteUtils';
    var19 = var13;
    var6 = new var19[var14](var18, var17);
    var6 = var6 instanceof Object ? var6 : var13;
    var _closure1_slot49 = var6;
    var _closure1_slot50 = var2;
    var2 = function NOOP() {
        var1 = true;
        return var1;
    };
    var _closure1_slot51 = var2;
    var6 = /(\t|\s)/;
    var _closure1_slot52 = var6;
    var2 = new Array(0);
    var _closure1_slot53 = var2;
    var2 = 33;
    var13 = var10[var2];
    var13 = var9.bind(var1)(var13);
    var13 = var13.default;
    var13 = var13.MENTION_EVERYONE;
    var _closure1_slot54 = var13;
    var13 = var10[var2];
    var13 = var9.bind(var1)(var13);
    var13 = var13.default;
    var13 = var13.MENTION_HERE;
    var _closure1_slot55 = var13;
    var13 = var10[var2];
    var13 = var9.bind(var1)(var13);
    var13 = var13.default;
    var13 = var13.MENTION_GAME;
    var _closure1_slot56 = var13;
    var2 = var10[var2];
    var2 = var9.bind(var1)(var2);
    var2 = var2.default;
    var2 = var2.LAUNCHABLE_APPLICATIONS;
    var _closure1_slot57 = var2;
    var2 = new Array(3);
    var2[0] = var12;
    var2[1] = var11;
    var7 = var7.GUILD_CATEGORY;
    var2[2] = var7;
    var _closure1_slot58 = var2;
    var7 = 42;
    var7 = var10[var7];
    var12 = var9.bind(var1)(var7);
    var11 = var12.cachedFunction;
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
        var6 = 41;
        var6 = var7[var6];
        var7 = undefined;
        var6 = var8.bind(var7)(var6);
        var8 = _closure1_slot22;
        var5 = var8.getMutablePrivateChannels;
        var5 = var5.bind(var8)();
        var6 = var6.bind(var7)(var5);
        var5 = var6.values;
        var6 = var5.bind(var6)();
        var5 = var6.value;
        var6 = var5.bind(var6)();
        var5 = var6.forEach;
        var1 = function(arg1) {
            _fun0016: for(var _fun0016_ip = 0; ; ) switch(_fun0016_ip) {
 0:
                var6 = arg1;
                var1 = var6.isDM;
                var1 = var1.bind(var6)();
                if(!var1) { _fun0016_ip = 156; continue _fun0016 }
 19:
                var1 = var6.getRecipientId;
                var4 = var1.bind(var6)();
                var2 = _closure1_slot37;
                var1 = var2.getUser;
                var3 = var1.bind(var2)(var4);
                var2 = null;
                var1 = var2 == var4;
                if(var1) { _fun0016_ip = 60; continue _fun0016 }
 56:
                var1 = var2 == var3;
 60:
                if(var1) { _fun0016_ip = 80; continue _fun0016 }
 63:
                var5 = _closure2_slot0;
                var2 = var5.has;
                var1 = var2.bind(var5)(var4);
 80:
                if(var1) { _fun0016_ip = 156; continue _fun0016 }
 83:
                var5 = _closure2_slot0;
                var2 = var5.set;
                var2 = var2.bind(var5)(var4, var6);
                var6 = _closure2_slot2;
                var5 = var6.push;
                var2 = {};
                var2['userId'] = var4;
                var8 = _closure1_slot34;
                var7 = var8.getNickname;
                var7 = var7.bind(var8)(var4);
                var2['nick'] = var7;
                var2 = var5.bind(var6)(var2);
                var2 = _closure2_slot1;
                var1 = var2.set;
                var1 = var1.bind(var2)(var4, var3);
 156:
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
    var7 = var11.bind(var12)(var7);
    var _closure1_slot59 = var7;
    var7 = {};
    var11 = function queryFriends(arg1) {
        _fun0017: for(var _fun0017_ip = 0; ; ) switch(_fun0017_ip) {
 0:
            var1 = arg1;
            var7 = var1.query;
            var5 = var1.limit;
            var3 = undefined;
            if(!(var5 === var3)) { _fun0017_ip = 22; continue _fun0017 }
 19:
            var5 = 10;
 22:
            var2 = var1._fuzzy;
            var4 = var1.filter;
            var2 = _closure1_slot65;
            var1 = {};
            var1['query'] = var7;
            var8 = _closure1_slot34;
            var7 = var8.getFriendIDs;
            var9 = var7.bind(var8)();
            var8 = var9.map;
            var7 = function(arg1) {
                var3 = _closure1_slot37;
                var2 = var3.getUser;
                var1 = arg1;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var8 = var8.bind(var9)(var7);
            var7 = var8.filter;
            var9 = _closure1_slot0;
            var10 = _closure1_slot3;
            var6 = 43;
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
    var7['queryFriends'] = var11;
    var11 = function queryDMUsers(arg1) {
        _fun0018: for(var _fun0018_ip = 0; ; ) switch(_fun0018_ip) {
 0:
            var1 = arg1;
            var7 = var1.query;
            var5 = var1.limit;
            var3 = undefined;
            if(!(var5 === var3)) { _fun0018_ip = 22; continue _fun0018 }
 19:
            var5 = 10;
 22:
            var4 = var1.filter;
            var2 = _closure1_slot65;
            var1 = {};
            var1['query'] = var7;
            var8 = _closure1_slot22;
            var7 = var8.getDMUserIds;
            var9 = var7.bind(var8)();
            var8 = var9.map;
            var7 = function(arg1) {
                var3 = _closure1_slot37;
                var2 = var3.getUser;
                var1 = arg1;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var8 = var8.bind(var9)(var7);
            var7 = var8.filter;
            var9 = _closure1_slot0;
            var10 = _closure1_slot3;
            var6 = 43;
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
    var7['queryDMUsers'] = var11;
    var11 = function queryChannelUsers(arg1) {
        _fun0019: for(var _fun0019_ip = 0; ; ) switch(_fun0019_ip) {
 0:
            var1 = arg1;
            var10 = var1.channelId;
            var8 = var1.query;
            var6 = var1.limit;
            var3 = undefined;
            if(!(var6 === var3)) { _fun0019_ip = 29; continue _fun0019 }
 26:
            var6 = 10;
 29:
            var12 = var1.request;
            if(!(var12 === var3)) { _fun0019_ip = 41; continue _fun0019 }
 39:
            var12 = true;
 41:
            var9 = var1.checkRecentlyTalkedOnEmptyQuery;
            if(!(var9 === var3)) { _fun0019_ip = 53; continue _fun0019 }
 51:
            var9 = true;
 53:
            var4 = var1.allowSnowflake;
            if(!(var4 === var3)) { _fun0019_ip = 65; continue _fun0019 }
 63:
            var4 = false;
 65:
            var _closure2_slot0 = var3;
            var7 = _closure1_slot22;
            var2 = var7.getChannel;
            var7 = var2.bind(var7)(var10);
            var11 = null;
            if(!(var11 != var7)) { _fun0019_ip = 406; continue _fun0019 }
 95:
            var2 = var7.isThread;
            var2 = var2.bind(var7)();
            var10 = null;
            if(!var2) { _fun0019_ip = 130; continue _fun0019 }
 110:
            var14 = _closure1_slot22;
            var13 = var14.getChannel;
            var2 = var7.parent_id;
            var10 = var13.bind(var14)(var2);
 130:
            var2 = var7;
            if(!(var11 != var10)) { _fun0019_ip = 140; continue _fun0019 }
 137:
            var2 = var10;
 140:
            _closure2_slot0 = var2;
            if(!(var11 != var2)) { _fun0019_ip = 400; continue _fun0019 }
 151:
            var10 = var2.isPrivate;
            var10 = var10.bind(var2)();
            if(var10) { _fun0019_ip = 290; continue _fun0019 }
 167:
            var13 = var8.length;
            var10 = 0;
            if(!(var10 === var13)) { _fun0019_ip = 205; continue _fun0019 }
 178:
            if(!var9) { _fun0019_ip = 205; continue _fun0019 }
 181:
            var9 = _closure1_slot71;
            var7 = var7.id;
            var9 = var9.bind(var3)(var7, var6);
            var7 = var9.length;
            if(!(!(var7 > var10))) { _fun0019_ip = 288; continue _fun0019 }
 205:
            var13 = _closure1_slot28;
            var10 = var13.getMembers;
            var7 = var2.guild_id;
            var13 = var10.bind(var13)(var7);
            var10 = var13.filter;
            var7 = _closure1_slot64;
            var10 = var10.bind(var13)(var7);
            var7 = var10;
            if(!var12) { _fun0019_ip = 360; continue _fun0019 }
 245:
            var13 = _closure1_slot1;
            var14 = _closure1_slot3;
            var12 = 44;
            var12 = var14[var12];
            var14 = var13.bind(var3)(var12);
            var13 = var14.requestMembers;
            var12 = var2.guild_id;
            var12 = var13.bind(var14)(var12, var8, var6);
            var7 = var10;
            _fun0019_ip = 360; continue _fun0019;
 288:
            return var9;
 290:
            var10 = var2.recipients;
            var9 = var10.map;
            var2 = function(arg1) {
                _fun0020: for(var _fun0020_ip = 0; ; ) switch(_fun0020_ip) {
 0:
                    var4 = arg1;
                    var1 = {};
                    var1['userId'] = var4;
                    var3 = _closure1_slot34;
                    var2 = var3.getNickname;
                    var3 = var2.bind(var3)(var4);
                    var2 = null;
                    var4 = var2 != var3;
                    if(!var4) { _fun0020_ip = 39; continue _fun0020 }
 36:
                    var2 = var3;
 39:
                    var1['nick'] = var2;
                    return var1;
                }
            };
            var2 = var9.bind(var10)(var2);
            var10 = _closure1_slot37;
            var9 = var10.getCurrentUser;
            var12 = var9.bind(var10)();
            var7 = var2;
            if(!(var11 != var12)) { _fun0019_ip = 360; continue _fun0019 }
 331:
            var10 = var2.push;
            var9 = {};
            var12 = var12.id;
            var9['userId'] = var12;
            var9['nick'] = var11;
            var9 = var10.bind(var2)(var9);
            var7 = var2;
 360:
            var2 = _closure1_slot65;
            var1 = {};
            var1['query'] = var8;
            var1['members'] = var7;
            var1['limit'] = var6;
            var5 = function filter(arg1) {
                _fun0021: for(var _fun0021_ip = 0; ; ) switch(_fun0021_ip) {
 0:
                    var2 = _closure2_slot0;
                    var1 = var2.isPrivate;
                    var1 = var1.bind(var2)();
                    if(var1) { _fun0021_ip = 88; continue _fun0021 }
 20:
                    var4 = _closure1_slot2;
                    var3 = _closure1_slot3;
                    var2 = 45;
                    var3 = var3[var2];
                    var2 = undefined;
                    var4 = var4.bind(var2)(var3);
                    var3 = var4.can;
                    var2 = {};
                    var6 = _closure1_slot40;
                    var6 = var6.VIEW_CHANNEL;
                    var2['permission'] = var6;
                    var6 = arg1;
                    var2['user'] = var6;
                    var5 = _closure2_slot0;
                    var2['context'] = var5;
                    var1 = var3.bind(var4)(var2);
 88:
                    return var1;
                }
            };
            var1['filter'] = var5;
            var1['allowSnowflake'] = var4;
            var1 = var2.bind(var3)(var1);
            return var1;
 400:
            var1 = new Array(0);
            return var1;
 406:
            var1 = new Array(0);
            return var1;
        }
    };
    var7['queryChannelUsers'] = var11;
    var11 = function queryGuildUsers(arg1) {
        _fun0022: for(var _fun0022_ip = 0; ; ) switch(_fun0022_ip) {
 0:
            var2 = arg1;
            var11 = var2.guildId;
            var9 = var2.query;
            var7 = var2.limit;
            var4 = undefined;
            if(!(var7 === var4)) { _fun0022_ip = 27; continue _fun0022 }
 24:
            var7 = 10;
 27:
            var3 = var2.request;
            if(!(var3 === var4)) { _fun0022_ip = 39; continue _fun0022 }
 37:
            var3 = true;
 39:
            var1 = var2.checkRecentlyTalkedOnEmptyQuery;
            if(!(var1 === var4)) { _fun0022_ip = 51; continue _fun0022 }
 49:
            var1 = true;
 51:
            var6 = var2.filter;
            var5 = var2.allowSnowflake;
            var10 = _closure1_slot30;
            var8 = var10.getGuild;
            var10 = var8.bind(var10)(var11);
            var8 = null;
            if(!(var8 != var10)) { _fun0022_ip = 250; continue _fun0022 }
 88:
            var8 = var9.length;
            var12 = 0;
            if(!(var12 === var8)) { _fun0022_ip = 136; continue _fun0022 }
 99:
            if(!var1) { _fun0022_ip = 136; continue _fun0022 }
 102:
            var8 = _closure1_slot71;
            var10 = _closure1_slot35;
            var1 = var10.getChannelId;
            var1 = var1.bind(var10)(var11);
            var1 = var8.bind(var4)(var1, var7);
            var8 = var1.length;
            if(!(!(var8 > var12))) { _fun0022_ip = 248; continue _fun0022 }
 136:
            var10 = _closure1_slot28;
            var8 = var10.getMembers;
            var13 = var8.bind(var10)(var11);
            var10 = var13.filter;
            var8 = _closure1_slot64;
            var8 = var10.bind(var13)(var8);
            if(!var3) { _fun0022_ip = 177; continue _fun0022 }
 168:
            var10 = var9.length;
            var3 = var10 > var12;
 177:
            if(!var3) { _fun0022_ip = 213; continue _fun0022 }
 180:
            var10 = _closure1_slot1;
            var12 = _closure1_slot3;
            var3 = 44;
            var3 = var12[var3];
            var10 = var10.bind(var4)(var3);
            var3 = var10.requestMembers;
            var3 = var3.bind(var10)(var11, var9, var7);
 213:
            var3 = _closure1_slot65;
            var2 = {};
            var2['query'] = var9;
            var2['members'] = var8;
            var2['limit'] = var7;
            var2['filter'] = var6;
            var2['allowSnowflake'] = var5;
            var2 = var3.bind(var4)(var2);
            return var2;
 248:
            return var1;
 250:
            var1 = new Array(0);
            return var1;
        }
    };
    var7['queryGuildUsers'] = var11;
    var11 = function queryUsers(arg1) {
        _fun0023: for(var _fun0023_ip = 0; ; ) switch(_fun0023_ip) {
 0:
            var1 = arg1;
            var8 = var1.query;
            var5 = var1.filter;
            var4 = var1.boosters;
            var6 = var1.limit;
            var3 = undefined;
            if(!(var6 === var3)) { _fun0023_ip = 33; continue _fun0023 }
 30:
            var6 = 10;
 33:
            var7 = var1.users;
            var2 = _closure1_slot65;
            var1 = {};
            var1['query'] = var8;
            var1['members'] = var7;
            var1['limit'] = var6;
            var1['filter'] = var5;
            var1['boosters'] = var4;
            var1 = var2.bind(var3)(var1);
            return var1;
        }
    };
    var7['queryUsers'] = var11;
    var11 = function queryAllUsers(arg1) {
        _fun0024: for(var _fun0024_ip = 0; ; ) switch(_fun0024_ip) {
 0:
            var1 = arg1;
            var3 = this;
            var9 = var1.query;
            var5 = var1.filter;
            var4 = var1.boosters;
            var8 = var1.limit;
            var6 = undefined;
            if(!(var8 === var6)) { _fun0024_ip = 36; continue _fun0024 }
 33:
            var8 = 10;
 36:
            var7 = var1.request;
            if(!(var7 === var6)) { _fun0024_ip = 48; continue _fun0024 }
 46:
            var7 = true;
 48:
            var1 = var7;
            if(!var1) { _fun0024_ip = 65; continue _fun0024 }
 54:
            var10 = var9.length;
            var2 = 0;
            var1 = var10 > var2;
 65:
            if(!var1) { _fun0024_ip = 106; continue _fun0024 }
 68:
            var2 = _closure1_slot1;
            var10 = _closure1_slot3;
            var1 = 44;
            var1 = var10[var1];
            var10 = var2.bind(var6)(var1);
            var2 = var10.requestMembers;
            var1 = null;
            var1 = var2.bind(var10)(var1, var9, var8);
 106:
            var2 = var3.queryUsers;
            var1 = {};
            var1['query'] = var9;
            var1['limit'] = var8;
            var1['request'] = var7;
            var1['filter'] = var5;
            var1['boosters'] = var4;
            var7 = _closure1_slot1;
            var8 = _closure1_slot3;
            var5 = 41;
            var5 = var8[var5];
            var5 = var7.bind(var6)(var5);
            var7 = _closure1_slot37;
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
    var7['queryAllUsers'] = var11;
    var11 = function queryChannels(arg1) {
        _fun0025: for(var _fun0025_ip = 0; ; ) switch(_fun0025_ip) {
 0:
            var1 = arg1;
            var39 = var1.query;
            var38 = var1.guildId;
            var2 = var1.limit;
            var7 = undefined;
            if(!(var2 === var7)) { _fun0025_ip = 33; continue _fun0025 }
 26:
            var2 = _closure1_slot44;
 33:
            var37 = var1.fuzzy;
            if(!(var37 === var7)) { _fun0025_ip = 45; continue _fun0025 }
 43:
            var37 = true;
 45:
            var36 = var1.filter;
            if(!(var36 === var7)) { _fun0025_ip = 61; continue _fun0025 }
 54:
            var36 = _closure1_slot51;
 61:
            var35 = var1.type;
            if(!(var35 === var7)) { _fun0025_ip = 77; continue _fun0025 }
 70:
            var35 = _closure1_slot25;
 77:
            var3 = var1.allowEmptyQueries;
            if(!(var3 === var7)) { _fun0025_ip = 89; continue _fun0025 }
 87:
            var3 = false;
 89:
            var34 = var1.requireVocalConnectAccess;
            if(!(var34 === var7)) { _fun0025_ip = 101; continue _fun0025 }
 99:
            var34 = true;
 101:
            var33 = var1.boosters;
            if(!(var33 === var7)) { _fun0025_ip = 113; continue _fun0025 }
 111:
            var33 = {};
 113:
            var32 = var1.allowSnowflake;
            var9 = var1.includeAllThreads;
            var1 = function getSeparatedQueries(arg1) {
                _fun0026: for(var _fun0026_ip = 0; ; ) switch(_fun0026_ip) {
 0:
                    var3 = arg1;
                    var2 = arguments[1];
                    var11 = undefined;
                    if(!(var2 === var11)) { _fun0026_ip = 16; continue _fun0026 }
 14:
                    var2 = false;
 16:
                    var _closure3_slot0 = var2;
                    var2 = var3.split;
                    var9 = ' ';
                    var5 = var2.bind(var3)(var9);
                    var4 = var5.filter;
                    var2 = function(arg1) {
                        _fun0027: for(var _fun0027_ip = 0; ; ) switch(_fun0027_ip) {
 0:
                            var2 = '';
                            var1 = arg1;
                            var1 = var2 !== var1;
                            if(var1) { _fun0027_ip = 21; continue _fun0027 }
 14:
                            var1 = _closure3_slot0;
 21:
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
                        var2 = 35;
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
                    if(!var2) { _fun0026_ip = 291; continue _fun0026 }
 80:
                    var2 = var3.toLocaleLowerCase;
                    var10 = var2.bind(var3)();
                    var3 = var1.unshift;
                    var2 = {};
                    var2['queryLower'] = var10;
                    var6 = global;
                    var15 = var6.RegExp;
                    var5 = _closure1_slot1;
                    var12 = _closure1_slot3;
                    var4 = 35;
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
 291:
                    return var1;
                }
            };
            var31 = var1.bind(var7)(var39, var3);
            var1 = _closure1_slot25;
            var1 = var35 === var1;
            if(var1) { _fun0025_ip = 179; continue _fun0025 }
 150:
            var3 = _closure1_slot26;
            var3 = var35 !== var3;
            if(!var3) { _fun0025_ip = 176; continue _fun0025 }
 161:
            var6 = _closure1_slot17;
            var6 = var6.bind(var7)(var35);
            var6 = !var6;
            var3 = !var6;
 176:
            var1 = var3;
 179:
            var3 = null;
            if(!(var3 == var38)) { _fun0025_ip = 280; continue _fun0025 }
 185:
            var8 = _closure1_slot1;
            var10 = _closure1_slot3;
            var6 = 41;
            var6 = var10[var6];
            var8 = var8.bind(var7)(var6);
            var10 = _closure1_slot22;
            var6 = var10.loadAllGuildAndPrivateChannelsFromDisk;
            var6 = var6.bind(var10)();
            var8 = var8.bind(var7)(var6);
            var6 = var8.values;
            var10 = var6.bind(var8)();
            var8 = var10.concat;
            if(var1) { _fun0025_ip = 247; continue _fun0025 }
 241:
            var6 = new Array(0);
            _fun0025_ip = 261; continue _fun0025;
 247:
            var12 = _closure1_slot11;
            var11 = var12.computeAllActiveJoinedThreads;
            var6 = var11.bind(var12)();
 261:
            var8 = var8.bind(var10)(var6);
            var6 = var8.value;
            var6 = var6.bind(var8)();
            _fun0025_ip = 405; continue _fun0025;
 280:
            var10 = _closure1_slot1;
            var11 = _closure1_slot3;
            var8 = 41;
            var8 = var11[var8];
            var10 = var10.bind(var7)(var8);
            var11 = _closure1_slot27;
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
            if(var1) { _fun0025_ip = 353; continue _fun0025 }
 347:
            var1 = new Array(0);
            _fun0025_ip = 391; continue _fun0025;
 353:
            if(var9) { _fun0025_ip = 373; continue _fun0025 }
 356:
            var10 = _closure1_slot11;
            var9 = var10.computeAllActiveJoinedThreads;
            var9 = var9.bind(var10)(var38);
            _fun0025_ip = 388; continue _fun0025;
 373:
            var11 = _closure1_slot22;
            var10 = var11.getAllThreadsForGuild;
            var9 = var10.bind(var11)(var38);
 388:
            var1 = var9;
 391:
            var5 = var5.bind(var8)(var1);
            var1 = var5.value;
            var6 = var1.bind(var5)();
 405:
            var30 = {};
            var1 = new Array(0);
            var8 = _closure1_slot23;
            var5 = var8.getMaxScore;
            var29 = var5.bind(var8)();
            var5 = _closure1_slot60;
            var28 = var5.bind(var7)(var6);
            var6 = var28.bind(var7)();
            var5 = var6.done;
            var27 = 46;
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
            if(var5) { _fun0025_ip = 1610; continue _fun0025 }
 510:
            var61 = var16.value;
            var51 = var61.type;
            var5 = var3 != var38;
            if(!(var35 !== var51)) { _fun0025_ip = 663; continue _fun0025 }
 531:
            if(var5) { _fun0025_ip = 576; continue _fun0025 }
 534:
            var5 = _closure1_slot14;
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
            if(!var5) { _fun0025_ip = 1565; continue _fun0025 }
 576:
            var5 = _closure1_slot25;
            if(!(var35 !== var5)) { _fun0025_ip = 606; continue _fun0025 }
 584:
            var5 = _closure1_slot26;
            var5 = var35 === var5;
            if(!var5) { _fun0025_ip = 604; continue _fun0025 }
 595:
            var49 = _closure1_slot16;
            var5 = var49.bind(var7)(var51);
 604:
            _fun0025_ip = 630; continue _fun0025;
 606:
            var49 = _closure1_slot15;
            var49 = var49.bind(var7)(var51);
            if(var49) { _fun0025_ip = 627; continue _fun0025 }
 618:
            var50 = _closure1_slot16;
            var49 = var50.bind(var7)(var51);
 627:
            var5 = var49;
 630:
            var48 = var15;
            var47 = var14;
            var46 = var13;
            var45 = var12;
            var44 = var11;
            var43 = var10;
            var42 = var9;
            var41 = var8;
            var40 = var6;
            if(!var5) { _fun0025_ip = 1565; continue _fun0025 }
 663:
            var49 = _closure1_slot14;
            var5 = var61.type;
            var5 = var49.bind(var7)(var5);
            if(!var5) { _fun0025_ip = 750; continue _fun0025 }
 680:
            var50 = _closure1_slot32;
            var49 = var50.can;
            if(var34) { _fun0025_ip = 705; continue _fun0025 }
 693:
            var5 = _closure1_slot40;
            var5 = var5.VIEW_CHANNEL;
            _fun0025_ip = 711; continue _fun0025;
 705:
            var5 = var61.accessPermissions;
 711:
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
            if(!var5) { _fun0025_ip = 1565; continue _fun0025 }
 750:
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
            if(!var5) { _fun0025_ip = 1565; continue _fun0025 }
 788:
            var53 = new Array(0);
            var69 = var53;
            var68 = var31;
            var67 = 0;
            var5 = arraySpread(var69, var68, var67);
            var49 = var61.name;
            var5 = var49.toLocaleLowerCase;
            var52 = var5.bind(var49)();
            var51 = var32;
            if(!var51) { _fun0025_ip = 834; continue _fun0025 }
 825:
            var5 = var61.id;
            var51 = var39 === var5;
 834:
            if(var51) { _fun0025_ip = 850; continue _fun0025 }
 837:
            var5 = _closure1_slot68;
            var54 = var5.bind(var7)(var52, var53, var37);
            _fun0025_ip = 854; continue _fun0025;
 850:
            var54 = _closure1_slot50;
 854:
            var48 = var15;
            var47 = var53;
            var46 = var52;
            var45 = var51;
            var43 = var10;
            var42 = var9;
            var41 = var8;
            var40 = var6;
            var44 = var54;
            if(!(var22 !== var44)) { _fun0025_ip = 1565; continue _fun0025 }
 888:
            var55 = var53.length;
            var50 = var54;
            var49 = var8;
            var5 = var6;
            if(!(var55 > var22)) { _fun0025_ip = 1084; continue _fun0025 }
 909:
            var55 = _closure1_slot69;
            var56 = var55.bind(var7)(var61, var30);
            var55 = new Array(2);
            var55[0] = var56;
            var56 = _closure1_slot70;
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
            if(!var57) { _fun0025_ip = 1055; continue _fun0025 }
 969:
            var65 = var55[var60];
            var66 = var62;
            var64 = var58;
            if(!(var3 != var65)) { _fun0025_ip = 1025; continue _fun0025 }
 983:
            var66 = var62;
            var64 = var58;
            if(!(var17 !== var65)) { _fun0025_ip = 1025; continue _fun0025 }
 993:
            var57 = _closure1_slot68;
            var57 = var57.bind(var7)(var65, var53, var18);
            var66 = var62;
            var64 = var57;
            if(!(var22 !== var64)) { _fun0025_ip = 1025; continue _fun0025 }
 1014:
            var63 = var20 * var57;
            var66 = var62 + var63;
            var64 = var57;
 1025:
            var60 = var60 + 1;
            var57 = var55.length;
            var62 = var66;
            var58 = var64;
            var59 = var62;
            var8 = var65;
            var54 = var58;
            var56 = var60;
            if(var56 < var57) { _fun0025_ip = 969; continue _fun0025 }
 1055:
            var58 = var25.Math;
            var57 = var58.min;
            var50 = var57.bind(var58)(var19, var59);
            var10 = var56;
            var49 = var8;
            var5 = var54;
            var9 = var55;
 1084:
            var48 = var15;
            var47 = var53;
            var46 = var52;
            var45 = var51;
            var43 = var10;
            var42 = var9;
            var41 = var49;
            var40 = var5;
            var44 = var50;
            if(!(var22 !== var44)) { _fun0025_ip = 1565; continue _fun0025 }
 1118:
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
            if(!(!(var54 > var26))) { _fun0025_ip = 1565; continue _fun0025 }
 1157:
            var54 = var53.length;
            if(!(var26 === var54)) { _fun0025_ip = 1212; continue _fun0025 }
 1166:
            var54 = var53[var22];
            var54 = var54.isFullMatch;
            if(var54) { _fun0025_ip = 1212; continue _fun0025 }
 1179:
            var48 = var15;
            var47 = var53;
            var46 = var52;
            var45 = var51;
            var44 = var50;
            var43 = var10;
            var42 = var9;
            var41 = var49;
            var40 = var5;
            if(!var51) { _fun0025_ip = 1565; continue _fun0025 }
 1212:
            var55 = _closure1_slot67;
            var54 = var61.type;
            var55 = var55.bind(var7)(var35, var54);
            var54 = var50;
            if(!var55) { _fun0025_ip = 1254; continue _fun0025 }
 1233:
            var56 = var25.Math;
            var55 = var56.max;
            var50 = var50 - var26;
            var54 = var55.bind(var56)(var50, var20);
 1254:
            var50 = var61.isThread;
            var55 = var50.bind(var61)();
            var50 = var54;
            if(!var55) { _fun0025_ip = 1323; continue _fun0025 }
 1270:
            var55 = var61.isActiveThread;
            var56 = var55.bind(var61)();
            var55 = var54;
            if(var56) { _fun0025_ip = 1290; continue _fun0025 }
 1286:
            var55 = var54 - var24;
 1290:
            var57 = _closure1_slot12;
            var56 = var57.hasJoined;
            var54 = var61.id;
            var56 = var56.bind(var57)(var54);
            var54 = var55;
            if(var56) { _fun0025_ip = 1320; continue _fun0025 }
 1316:
            var54 = var55 - var21;
 1320:
            var50 = var54;
 1323:
            var57 = var25.Math;
            var56 = var57.min;
            var58 = _closure1_slot23;
            var55 = var58.getScoreWithoutFetchingLatest;
            var54 = var61.id;
            var54 = var55.bind(var58)(var54);
            var55 = var54;
            if(!(var3 == var54)) { _fun0025_ip = 1365; continue _fun0025 }
 1361:
            var55 = var22 / var29;
 1365:
            var55 = var56.bind(var57)(var55, var26);
            var57 = var25.Math;
            var56 = var57.min;
            var55 = var24 * var55;
            var55 = var50 + var55;
            var58 = var50 >= var23;
            var50 = var23;
            if(!var58) { _fun0025_ip = 1404; continue _fun0025 }
 1400:
            var50 = _closure1_slot50;
 1404:
            var50 = var56.bind(var57)(var55, var50);
            var56 = var1.push;
            var55 = {};
            var58 = _closure1_slot16;
            var57 = var61.type;
            var57 = var58.bind(var7)(var57);
            var58 = _closure1_slot45;
            if(var57) { _fun0025_ip = 1446; continue _fun0025 }
 1438:
            var57 = var58.TEXT_CHANNEL;
            _fun0025_ip = 1452; continue _fun0025;
 1446:
            var57 = var58.VOICE_CHANNEL;
 1452:
            var55['type'] = var57;
            var55['record'] = var61;
            var58 = _closure1_slot62;
            var57 = var61.id;
            var57 = var33[var57];
            var57 = var58.bind(var7)(var50, var57);
            var55['score'] = var57;
            var58 = _closure1_slot0;
            var57 = _closure1_slot3;
            var57 = var57[var27];
            var60 = var58.bind(var7)(var57);
            var59 = var60.computeChannelName;
            var58 = _closure1_slot37;
            var57 = _closure1_slot34;
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
 1565:
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
            if(!var5) { _fun0025_ip = 510; continue _fun0025 }
 1610:
            var5 = var1.sort;
            var6 = _closure1_slot1;
            var8 = _closure1_slot3;
            var4 = 39;
            var4 = var8[var4];
            var4 = var6.bind(var7)(var4);
            var4 = var5.bind(var1)(var4);
            var3 = var3 != var2;
            if(!var3) { _fun0025_ip = 1657; continue _fun0025 }
 1648:
            var4 = var1.length;
            var3 = var4 > var2;
 1657:
            if(!var3) { _fun0025_ip = 1666; continue _fun0025 }
 1660:
            var1['length'] = var2;
 1666:
            return var1;
        }
    };
    var7['queryChannels'] = var11;
    var11 = function queryGuilds(arg1) {
        _fun0028: for(var _fun0028_ip = 0; ; ) switch(_fun0028_ip) {
 0:
            var1 = arg1;
            var4 = var1.query;
            var2 = var1.limit;
            var6 = undefined;
            if(!(var2 === var6)) { _fun0028_ip = 22; continue _fun0028 }
 19:
            var2 = 10;
 22:
            var14 = var1.fuzzy;
            if(!(var14 === var6)) { _fun0028_ip = 34; continue _fun0028 }
 32:
            var14 = true;
 34:
            var13 = var1.filter;
            if(!(var13 === var6)) { _fun0028_ip = 50; continue _fun0028 }
 43:
            var13 = _closure1_slot51;
 50:
            var12 = var1.boosters;
            if(!(var12 === var6)) { _fun0028_ip = 62; continue _fun0028 }
 60:
            var12 = {};
 62:
            var1 = '';
            if(!(var1 !== var4)) { _fun0028_ip = 80; continue _fun0028 }
 70:
            var3 = var4.toLocaleLowerCase;
            var1 = var3.bind(var4)();
 80:
            var11 = {};
            var7 = global;
            var16 = var7.RegExp;
            var5 = _closure1_slot1;
            var9 = _closure1_slot3;
            var4 = 35;
            var8 = var9[var4];
            var10 = var5.bind(var6)(var8);
            var8 = var10.escape;
            var15 = var8.bind(var10)(var1);
            var8 = var7.HermesInternal;
            var10 = var8.concat;
            var8 = '^';
            var23 = var10.bind(var8)(var15);
            var8 = var16.prototype;
            var15 = Object.create(var8, {constructor: {value: var16}});
            var8 = 'i';
            var24 = var15;
            var22 = var8;
            var10 = new var24[var16](var23, var22, var21);
            var10 = var10 instanceof Object ? var10 : var15;
            var11['exactQuery'] = var10;
            var7 = var7.RegExp;
            var4 = var9[var4];
            var5 = var5.bind(var6)(var4);
            var4 = var5.escape;
            var23 = var4.bind(var5)(var1);
            var5 = var7.prototype;
            var5 = Object.create(var5, {constructor: {value: var7}});
            var24 = var5;
            var4 = new var24[var7](var23, var22, var21);
            var4 = var4 instanceof Object ? var4 : var5;
            var11['containQuery'] = var4;
            var11['queryLower'] = var1;
            var1 = new Array(0);
            var5 = _closure1_slot60;
            var7 = _closure1_slot30;
            var4 = var7.getGuildsArray;
            var4 = var4.bind(var7)();
            var10 = var5.bind(var6)(var4);
            var5 = var10.bind(var6)();
            var4 = var5.done;
            var9 = 0;
            var8 = var5;
            var7 = undefined;
            var5 = undefined;
            if(var4) { _fun0028_ip = 426; continue _fun0028 }
 283:
            var18 = var8.value;
            var4 = var13.bind(var6)(var18);
            if(!var4) { _fun0028_ip = 408; continue _fun0028 }
 296:
            var15 = var18.name;
            var4 = var15.toLocaleLowerCase;
            var15 = var4.bind(var15)();
            var4 = _closure1_slot63;
            var4 = var4.bind(var6)(var15, var11, var14);
            var7 = var15;
            var5 = var4;
            if(!(var4 > var9)) { _fun0028_ip = 408; continue _fun0028 }
 332:
            var17 = var1.push;
            var16 = {};
            var19 = _closure1_slot45;
            var19 = var19.GUILD;
            var16['type'] = var19;
            var16['record'] = var18;
            var20 = _closure1_slot62;
            var19 = var18.id;
            var19 = var12[var19];
            var19 = var20.bind(var6)(var4, var19);
            var16['score'] = var19;
            var18 = var18.name;
            var16['comparator'] = var18;
            var16['sortable'] = var15;
            var16 = var17.bind(var1)(var16);
            var7 = var15;
            var5 = var4;
 408:
            var15 = var10.bind(var6)();
            var4 = var15.done;
            var8 = var15;
            if(!var4) { _fun0028_ip = 283; continue _fun0028 }
 426:
            var4 = var1.sort;
            var5 = _closure1_slot1;
            var7 = _closure1_slot3;
            var3 = 39;
            var3 = var7[var3];
            var3 = var5.bind(var6)(var3);
            var3 = var4.bind(var1)(var3);
            var3 = var1.length;
            if(!(var3 > var2)) { _fun0028_ip = 472; continue _fun0028 }
 466:
            var1['length'] = var2;
 472:
            return var1;
        }
    };
    var7['queryGuilds'] = var11;
    var11 = function queryDMChannels(arg1) {
        _fun0029: for(var _fun0029_ip = 0; ; ) switch(_fun0029_ip) {
 0:
            var1 = arg1;
            var9 = var1.query;
            var2 = var1.limit;
            var6 = undefined;
            if(!(var2 === var6)) { _fun0029_ip = 24; continue _fun0029 }
 21:
            var2 = 10;
 24:
            var7 = var1.boosters;
            if(!(var7 === var6)) { _fun0029_ip = 36; continue _fun0029 }
 34:
            var7 = {};
 36:
            var _closure2_slot0 = var6;
            var _closure2_slot1 = var6;
            var _closure2_slot2 = var6;
            var10 = _closure1_slot59;
            var5 = _closure1_slot22;
            var1 = var5.getPrivateChannelsVersion;
            var8 = var1.bind(var5)();
            var5 = _closure1_slot34;
            var1 = var5.getVersion;
            var5 = var1.bind(var5)();
            var11 = _closure1_slot37;
            var1 = var11.getUserStoreVersion;
            var1 = var1.bind(var11)();
            var1 = var10.bind(var6)(var8, var5, var1);
            var5 = var1.channelsByRecipientId;
            _closure2_slot0 = var5;
            var5 = var1.recipientsById;
            _closure2_slot1 = var5;
            var8 = var1.recipients;
            var5 = _closure1_slot65;
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
                _fun0030: for(var _fun0030_ip = 0; ; ) switch(_fun0030_ip) {
 0:
                    var4 = arg1;
                    var3 = _closure2_slot0;
                    var2 = var3.get;
                    var1 = var4.record;
                    var1 = var1.id;
                    var7 = var2.bind(var3)(var1);
                    var1 = null;
                    if(!(var1 != var7)) { _fun0030_ip = 163; continue _fun0030 }
 40:
                    var3 = _closure2_slot2;
                    var2 = var3.push;
                    var1 = {};
                    var8 = _closure1_slot45;
                    var8 = var8.DM;
                    var1['type'] = var8;
                    var1['record'] = var7;
                    var7 = var4.score;
                    var1['score'] = var7;
                    var8 = _closure1_slot1;
                    var7 = _closure1_slot3;
                    var6 = 38;
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
 163:
                    var1 = undefined;
                    return var1;
                }
            };
            var4 = var5.bind(var7)(var4);
            var4 = var1.sort;
            var5 = _closure1_slot1;
            var7 = _closure1_slot3;
            var3 = 39;
            var3 = var7[var3];
            var3 = var5.bind(var6)(var3);
            var3 = var4.bind(var1)(var3);
            var3 = var1.length;
            if(!(var3 > var2)) { _fun0029_ip = 233; continue _fun0029 }
 227:
            var1['length'] = var2;
 233:
            return var1;
        }
    };
    var7['queryDMChannels'] = var11;
    var11 = function queryGroupDMs(arg1) {
        _fun0031: for(var _fun0031_ip = 0; ; ) switch(_fun0031_ip) {
 0:
            var1 = arg1;
            var10 = var1.query;
            var2 = var1.limit;
            var6 = undefined;
            if(!(var2 === var6)) { _fun0031_ip = 22; continue _fun0031 }
 19:
            var2 = 10;
 22:
            var18 = var1.fuzzy;
            if(!(var18 === var6)) { _fun0031_ip = 34; continue _fun0031 }
 32:
            var18 = true;
 34:
            var17 = var1.filter;
            if(!(var17 === var6)) { _fun0031_ip = 50; continue _fun0031 }
 43:
            var17 = _closure1_slot51;
 50:
            var16 = var1.boosters;
            if(!(var16 === var6)) { _fun0031_ip = 62; continue _fun0031 }
 60:
            var16 = {};
 62:
            var7 = _closure1_slot0;
            var8 = _closure1_slot3;
            var15 = 37;
            var1 = var8[var15];
            var5 = var7.bind(var6)(var1);
            var4 = var5.stripDiacritics;
            var1 = var8[var15];
            var9 = var7.bind(var6)(var1);
            var7 = var9.normalize;
            var1 = var10.toLocaleLowerCase;
            var1 = var1.bind(var10)();
            var1 = var7.bind(var9)(var1);
            var1 = var4.bind(var5)(var1);
            var14 = {};
            var13 = global;
            var11 = var13.RegExp;
            var7 = _closure1_slot1;
            var4 = 35;
            var5 = var8[var4];
            var9 = var7.bind(var6)(var5);
            var5 = var9.escape;
            var10 = var5.bind(var9)(var1);
            var5 = var13.HermesInternal;
            var9 = var5.concat;
            var5 = '^';
            var32 = var9.bind(var5)(var10);
            var9 = var11.prototype;
            var9 = Object.create(var9, {constructor: {value: var11}});
            var10 = 'i';
            var33 = var9;
            var31 = var10;
            var5 = new var33[var11](var32, var31, var30);
            var5 = var5 instanceof Object ? var5 : var9;
            var14['exactQuery'] = var5;
            var9 = var13.RegExp;
            var4 = var8[var4];
            var5 = var7.bind(var6)(var4);
            var4 = var5.escape;
            var32 = var4.bind(var5)(var1);
            var5 = var9.prototype;
            var5 = Object.create(var5, {constructor: {value: var9}});
            var33 = var5;
            var4 = new var33[var9](var32, var31, var30);
            var4 = var4 instanceof Object ? var4 : var5;
            var14['containQuery'] = var4;
            var14['queryLower'] = var1;
            var1 = new Array(0);
            var5 = _closure1_slot60;
            var4 = 41;
            var4 = var8[var4];
            var7 = var7.bind(var6)(var4);
            var8 = _closure1_slot22;
            var4 = var8.getMutablePrivateChannels;
            var4 = var4.bind(var8)();
            var7 = var7.bind(var6)(var4);
            var4 = var7.values;
            var7 = var4.bind(var7)();
            var4 = var7.value;
            var4 = var4.bind(var7)();
            var12 = var5.bind(var6)(var4);
            var5 = var12.bind(var6)();
            var4 = var5.done;
            var11 = 46;
            var10 = 0;
            var9 = '';
            var8 = var5;
            var7 = undefined;
            var5 = undefined;
            if(var4) { _fun0031_ip = 778; continue _fun0031 }
 364:
            var28 = var8.value;
            var4 = var28.isMultiUserDM;
            var4 = var4.bind(var28)();
            var20 = var7;
            var19 = var5;
            if(!var4) { _fun0031_ip = 754; continue _fun0031 }
 391:
            var4 = var17.bind(var6)(var28);
            var20 = var7;
            var19 = var5;
            if(!var4) { _fun0031_ip = 754; continue _fun0031 }
 408:
            var23 = _closure1_slot0;
            var4 = _closure1_slot3;
            var21 = var4[var11];
            var25 = var23.bind(var6)(var21);
            var24 = var25.computeChannelName;
            var22 = _closure1_slot37;
            var21 = _closure1_slot34;
            var22 = var24.bind(var25)(var28, var22, var21);
            var21 = var22.toLocaleLowerCase;
            var24 = var21.bind(var22)();
            var21 = var4[var15];
            var22 = var23.bind(var6)(var21);
            var21 = var22.stripDiacritics;
            var4 = var4[var15];
            var23 = var23.bind(var6)(var4);
            var4 = var23.normalize;
            var4 = var4.bind(var23)(var24);
            var21 = var21.bind(var22)(var4);
            var4 = _closure1_slot63;
            var25 = var4.bind(var6)(var21, var14, var18);
            var22 = var28.name;
            var4 = var25;
            if(!(var9 !== var22)) { _fun0031_ip = 635; continue _fun0031 }
 519:
            var26 = _closure1_slot0;
            var22 = _closure1_slot3;
            var23 = var22[var11];
            var29 = var26.bind(var6)(var23);
            var27 = var29.computeDefaultGroupDmName;
            var24 = _closure1_slot37;
            var23 = _closure1_slot34;
            var24 = var27.bind(var29)(var28, var24, var23);
            var23 = var24.toLocaleLowerCase;
            var27 = var23.bind(var24)();
            var23 = var22[var15];
            var24 = var26.bind(var6)(var23);
            var23 = var24.stripDiacritics;
            var22 = var22[var15];
            var26 = var26.bind(var6)(var22);
            var22 = var26.normalize;
            var22 = var22.bind(var26)(var27);
            var26 = var23.bind(var24)(var22);
            var24 = var13.Math;
            var23 = var24.max;
            var22 = _closure1_slot63;
            var22 = var22.bind(var6)(var26, var14, var18);
            var4 = var23.bind(var24)(var25, var22);
 635:
            var20 = var21;
            var19 = var4;
            if(!(var4 > var10)) { _fun0031_ip = 754; continue _fun0031 }
 645:
            var23 = var1.push;
            var22 = {};
            var24 = _closure1_slot45;
            var24 = var24.GROUP_DM;
            var22['type'] = var24;
            var22['record'] = var28;
            var25 = _closure1_slot62;
            var24 = var28.id;
            var24 = var16[var24];
            var24 = var25.bind(var6)(var4, var24);
            var22['score'] = var24;
            var25 = _closure1_slot0;
            var24 = _closure1_slot3;
            var24 = var24[var11];
            var27 = var25.bind(var6)(var24);
            var26 = var27.computeChannelName;
            var25 = _closure1_slot37;
            var24 = _closure1_slot34;
            var24 = var26.bind(var27)(var28, var25, var24);
            var22['comparator'] = var24;
            var22['sortable'] = var21;
            var22 = var23.bind(var1)(var22);
            var20 = var21;
            var19 = var4;
 754:
            var21 = var12.bind(var6)();
            var4 = var21.done;
            var7 = var20;
            var5 = var19;
            var8 = var21;
            if(!var4) { _fun0031_ip = 364; continue _fun0031 }
 778:
            var4 = var1.sort;
            var5 = _closure1_slot1;
            var7 = _closure1_slot3;
            var3 = 39;
            var3 = var7[var3];
            var3 = var5.bind(var6)(var3);
            var3 = var4.bind(var1)(var3);
            var3 = var1.length;
            if(!(var3 > var2)) { _fun0031_ip = 824; continue _fun0031 }
 818:
            var1['length'] = var2;
 824:
            return var1;
        }
    };
    var7['queryGroupDMs'] = var11;
    var11 = function queryApplications(arg1) {
        _fun0032: for(var _fun0032_ip = 0; ; ) switch(_fun0032_ip) {
 0:
            var1 = arg1;
            var3 = var1.query;
            var2 = var1.limit;
            var6 = undefined;
            if(!(var2 === var6)) { _fun0032_ip = 22; continue _fun0032 }
 19:
            var2 = 10;
 22:
            var13 = var1.fuzzy;
            if(!(var13 === var6)) { _fun0032_ip = 34; continue _fun0032 }
 32:
            var13 = true;
 34:
            var12 = var1.filter;
            if(!(var12 === var6)) { _fun0032_ip = 50; continue _fun0032 }
 43:
            var12 = _closure1_slot51;
 50:
            var1 = var3.toLocaleLowerCase;
            var1 = var1.bind(var3)();
            var11 = {};
            var7 = global;
            var15 = var7.RegExp;
            var5 = _closure1_slot1;
            var9 = _closure1_slot3;
            var4 = 35;
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
            var5 = _closure1_slot60;
            var4 = _closure1_slot57;
            var4 = var4.bind(var6)();
            var10 = var5.bind(var6)(var4);
            var5 = var10.bind(var6)();
            var4 = var5.done;
            var9 = 0;
            var8 = var5;
            var7 = undefined;
            var5 = undefined;
            if(var4) { _fun0032_ip = 383; continue _fun0032 }
 257:
            var4 = var8.value;
            var17 = var4.application;
            var4 = var12.bind(var6)(var17);
            if(!var4) { _fun0032_ip = 368; continue _fun0032 }
 275:
            var14 = var17.name;
            var4 = var14.toLocaleLowerCase;
            var14 = var4.bind(var14)();
            var4 = _closure1_slot63;
            var4 = var4.bind(var6)(var14, var11, var13);
            var7 = var14;
            var5 = var4;
            if(!(var4 > var9)) { _fun0032_ip = 368; continue _fun0032 }
 311:
            var16 = var1.push;
            var15 = {};
            var18 = _closure1_slot45;
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
 368:
            var14 = var10.bind(var6)();
            var4 = var14.done;
            var8 = var14;
            if(!var4) { _fun0032_ip = 257; continue _fun0032 }
 383:
            var4 = var1.sort;
            var5 = _closure1_slot1;
            var7 = _closure1_slot3;
            var3 = 39;
            var3 = var7[var3];
            var3 = var5.bind(var6)(var3);
            var3 = var4.bind(var1)(var3);
            var3 = var1.length;
            if(!(var3 > var2)) { _fun0032_ip = 429; continue _fun0032 }
 423:
            var1['length'] = var2;
 429:
            return var1;
        }
    };
    var7['queryApplications'] = var11;
    var11 = function queryInAppNavigations(arg1) {
        _fun0033: for(var _fun0033_ip = 0; ; ) switch(_fun0033_ip) {
 0:
            var1 = arg1;
            var3 = var1.query;
            var2 = var1.limit;
            var6 = undefined;
            if(!(var2 === var6)) { _fun0033_ip = 24; continue _fun0033 }
 21:
            var2 = 10;
 24:
            var23 = var1.fuzzy;
            if(!(var23 === var6)) { _fun0033_ip = 36; continue _fun0033 }
 34:
            var23 = true;
 36:
            var _closure2_slot0 = var23;
            var _closure2_slot1 = var6;
            var _closure2_slot2 = var6;
            var1 = var3.toLocaleLowerCase;
            var1 = var1.bind(var3)();
            var22 = {};
            var8 = global;
            var13 = var8.RegExp;
            var7 = _closure1_slot1;
            var11 = _closure1_slot3;
            var5 = 35;
            var9 = var11[var5];
            var10 = var7.bind(var6)(var9);
            var9 = var10.escape;
            var12 = var9.bind(var10)(var1);
            var9 = var8.HermesInternal;
            var10 = var9.concat;
            var9 = '^';
            var31 = var10.bind(var9)(var12);
            var9 = var13.prototype;
            var12 = Object.create(var9, {constructor: {value: var13}});
            var9 = 'i';
            var32 = var12;
            var30 = var9;
            var10 = new var32[var13](var31, var30, var29);
            var10 = var10 instanceof Object ? var10 : var12;
            var22['exactQuery'] = var10;
            var8 = var8.RegExp;
            var5 = var11[var5];
            var7 = var7.bind(var6)(var5);
            var5 = var7.escape;
            var31 = var5.bind(var7)(var1);
            var7 = var8.prototype;
            var7 = Object.create(var7, {constructor: {value: var8}});
            var32 = var7;
            var5 = new var32[var8](var31, var30, var29);
            var5 = var5 instanceof Object ? var5 : var7;
            var22['containQuery'] = var5;
            var22['queryLower'] = var1;
            _closure2_slot1 = var22;
            var21 = {};
            var1 = _closure1_slot5;
            var8 = var1.SHOP;
            var10 = _closure1_slot0;
            var7 = 47;
            var5 = var11[var7];
            var5 = var10.bind(var6)(var5);
            var12 = var5.intl;
            var9 = var12.string;
            var5 = var11[var7];
            var5 = var10.bind(var6)(var5);
            var5 = var5.t;
            var5 = var5.pWG4zc;
            var9 = var9.bind(var12)(var5);
            var5 = new Array(1);
            var5[0] = var9;
            var21[var8] = var5;
            var8 = var1.NITRO_HOME;
            var5 = var11[var7];
            var5 = var10.bind(var6)(var5);
            var12 = var5.intl;
            var9 = var12.string;
            var5 = var11[var7];
            var5 = var10.bind(var6)(var5);
            var5 = var5.t;
            var5 = var5.Ipxkoq;
            var9 = var9.bind(var12)(var5);
            var5 = new Array(1);
            var5[0] = var9;
            var21[var8] = var5;
            var8 = var1.QUEST_HOME;
            var5 = var11[var7];
            var5 = var10.bind(var6)(var5);
            var12 = var5.intl;
            var9 = var12.string;
            var5 = var11[var7];
            var5 = var10.bind(var6)(var5);
            var5 = var5.t;
            var5 = var5.JALI2N;
            var9 = var9.bind(var12)(var5);
            var5 = new Array(1);
            var5[0] = var9;
            var21[var8] = var5;
            var5 = var1.APPS_HOME;
            var1 = var11[var7];
            var1 = var10.bind(var6)(var1);
            var9 = var1.intl;
            var8 = var9.string;
            var1 = var11[var7];
            var1 = var10.bind(var6)(var1);
            var1 = var1.t;
            var1 = var1.PHjkRE;
            var8 = var8.bind(var9)(var1);
            var1 = new Array(2);
            var1[0] = var8;
            var8 = var11[var7];
            var8 = var10.bind(var6)(var8);
            var9 = var8.intl;
            var8 = var9.string;
            var7 = var11[var7];
            var7 = var10.bind(var6)(var7);
            var7 = var7.t;
            var7 = var7.AKcFUl;
            var7 = var8.bind(var9)(var7);
            var1[1] = var7;
            var21[var5] = var1;
            var1 = new Array(0);
            _closure2_slot2 = var1;
            var19 = var21;
            var15 = 0;
            var14 = null;
            var13 = undefined;
            var12 = undefined;
            var11 = undefined;
            var10 = undefined;
            for(var16 in var19)
 563:
            {
 575:
                var7 = var16;
                var5 = _closure1_slot5;
                var9 = var5[var7];
                var7 = var21[var9];
                if(var14 == var7) { _fun0033_ip = 563; continue _fun0033 }
 594:
                var5 = _closure1_slot60;
                var8 = var5.bind(var6)(var7);
                var7 = var8.bind(var6)();
                var5 = var7.done;
                var13 = var7;
                var12 = var8;
                var7 = var13;
                if(var5) { _fun0033_ip = 563; continue _fun0033 }
 624:
                var24 = var7.value;
                var5 = var24.toLocaleLowerCase;
                var26 = var5.bind(var24)();
                var5 = _closure1_slot63;
                var25 = var5.bind(var6)(var26, var22, var23);
                if(!(var25 > var15)) { _fun0033_ip = 724; continue _fun0033 }
 654:
                var24 = var1.push;
                var5 = {};
                var27 = _closure1_slot45;
                var27 = var27.IN_APP_NAVIGATION;
                var5['type'] = var27;
                var28 = _closure1_slot4;
                var27 = var28.fromType;
                var27 = var27.bind(var28)(var9);
                var5['record'] = var27;
                var27 = _closure1_slot62;
                var27 = var27.bind(var6)(var25);
                var5['score'] = var27;
                var5['comparator'] = var26;
                var5['sortable'] = var26;
                var5 = var24.bind(var1)(var5);
 724:
                var24 = var8.bind(var6)();
                var5 = var24.done;
                var13 = var24;
                var12 = var8;
                var11 = var26;
                var10 = var25;
                var7 = var13;
                if(var5) { _fun0033_ip = 563; continue _fun0033 }
 754:
                _fun0033_ip = 624; continue _fun0033;
            }
 759:
            var7 = _closure1_slot48;
            var5 = var7.getState;
            var5 = var5.bind(var7)();
            var7 = var5.options;
            var5 = var7.forEach;
            var4 = function(arg1) {
                _fun0034: for(var _fun0034_ip = 0; ; ) switch(_fun0034_ip) {
 0:
                    var5 = arg1;
                    var1 = var5.title;
                    var3 = new Array(1);
                    var3[0] = var1;
                    var2 = var3.concat;
                    var1 = var5.searchableTitles;
                    var8 = var2.bind(var3)(var1);
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot3;
                    var1 = 41;
                    var2 = var2[var1];
                    var1 = undefined;
                    var4 = var3.bind(var1)(var2);
                    var3 = var4.max;
                    var6 = var8.map;
                    var2 = function(arg1) {
                        var2 = arg1;
                        var3 = _closure1_slot62;
                        var6 = _closure1_slot63;
                        var1 = var2.toLocaleLowerCase;
                        var5 = var1.bind(var2)();
                        var4 = _closure2_slot1;
                        var1 = _closure2_slot0;
                        var2 = undefined;
                        var1 = var6.bind(var2)(var5, var4, var1);
                        var1 = var3.bind(var2)(var1);
                        return var1;
                    };
                    var2 = var6.bind(var8)(var2);
                    var3 = var3.bind(var4)(var2);
                    var2 = null;
                    var4 = var2 != var3;
                    var2 = 0;
                    var6 = 0;
                    if(!var4) { _fun0034_ip = 102; continue _fun0034 }
 99:
                    var6 = var3;
 102:
                    if(!(var6 > var2)) { _fun0034_ip = 230; continue _fun0034 }
 109:
                    var4 = _closure2_slot2;
                    var3 = var4.push;
                    var2 = {};
                    var8 = _closure1_slot45;
                    var8 = var8.IN_APP_NAVIGATION;
                    var2['type'] = var8;
                    var11 = _closure1_slot4;
                    var10 = var11.fromType;
                    var7 = _closure1_slot5;
                    var9 = var7.SETTINGS;
                    var8 = var5.path;
                    var7 = var5.title;
                    var7 = var10.bind(var11)(var9, var8, var7);
                    var2['record'] = var7;
                    var2['score'] = var6;
                    var7 = var5.title;
                    var6 = var7.toLocaleLowerCase;
                    var6 = var6.bind(var7)();
                    var2['comparator'] = var6;
                    var6 = var5.title;
                    var5 = var6.toLocaleLowerCase;
                    var5 = var5.bind(var6)();
                    var2['sortable'] = var5;
                    var2 = var3.bind(var4)(var2);
 230:
                    return var1;
                }
            };
            var4 = var5.bind(var7)(var4);
            var4 = var1.sort;
            var5 = _closure1_slot1;
            var7 = _closure1_slot3;
            var3 = 39;
            var3 = var7[var3];
            var3 = var5.bind(var6)(var3);
            var3 = var4.bind(var1)(var3);
            var3 = var1.length;
            if(!(var3 > var2)) { _fun0033_ip = 839; continue _fun0033 }
 833:
            var1['length'] = var2;
 839:
            return var1;
        }
    };
    var7['queryInAppNavigations'] = var11;
    var11 = function querySKUs(arg1) {
        _fun0035: for(var _fun0035_ip = 0; ; ) switch(_fun0035_ip) {
 0:
            var1 = arg1;
            var3 = var1.query;
            var2 = var1.limit;
            var6 = undefined;
            if(!(var2 === var6)) { _fun0035_ip = 22; continue _fun0035 }
 19:
            var2 = 10;
 22:
            var13 = var1.fuzzy;
            if(!(var13 === var6)) { _fun0035_ip = 34; continue _fun0035 }
 32:
            var13 = true;
 34:
            var12 = var1.filter;
            if(!(var12 === var6)) { _fun0035_ip = 50; continue _fun0035 }
 43:
            var12 = _closure1_slot51;
 50:
            var1 = var3.toLocaleLowerCase;
            var1 = var1.bind(var3)();
            var11 = {};
            var5 = global;
            var15 = var5.RegExp;
            var7 = _closure1_slot1;
            var8 = _closure1_slot3;
            var4 = 35;
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
            var5 = _closure1_slot60;
            var4 = 41;
            var4 = var8[var4];
            var7 = var7.bind(var6)(var4);
            var8 = _closure1_slot39;
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
            if(var4) { _fun0035_ip = 461; continue _fun0035 }
 300:
            var19 = var8.value;
            var16 = var19.type;
            var4 = _closure1_slot43;
            var4 = var4.DURABLE_PRIMARY;
            var15 = var7;
            var14 = var5;
            if(!(var16 === var4)) { _fun0035_ip = 437; continue _fun0035 }
 330:
            var4 = var12.bind(var6)(var19);
            var15 = var7;
            var14 = var5;
            if(!var4) { _fun0035_ip = 437; continue _fun0035 }
 344:
            var16 = var19.name;
            var4 = var16.toLocaleLowerCase;
            var16 = var4.bind(var16)();
            var4 = _closure1_slot63;
            var4 = var4.bind(var6)(var16, var11, var13);
            var15 = var16;
            var14 = var4;
            if(!(var4 > var9)) { _fun0035_ip = 437; continue _fun0035 }
 380:
            var18 = var1.push;
            var17 = {};
            var20 = _closure1_slot45;
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
 437:
            var16 = var10.bind(var6)();
            var4 = var16.done;
            var7 = var15;
            var5 = var14;
            var8 = var16;
            if(!var4) { _fun0035_ip = 300; continue _fun0035 }
 461:
            var4 = var1.sort;
            var5 = _closure1_slot1;
            var7 = _closure1_slot3;
            var3 = 39;
            var3 = var7[var3];
            var3 = var5.bind(var6)(var3);
            var3 = var4.bind(var1)(var3);
            var3 = var1.length;
            if(!(var3 > var2)) { _fun0035_ip = 507; continue _fun0035 }
 501:
            var1['length'] = var2;
 507:
            return var1;
        }
    };
    var7['querySKUs'] = var11;
    var7['getRecentlyTalked'] = var8;
    var8 = function queryMentionResults(arg1) {
        _fun0036: for(var _fun0036_ip = 0; ; ) switch(_fun0036_ip) {
 0:
            var4 = arg1;
            var12 = this;
            var16 = var4.query;
            var9 = var4.channel;
            var _closure2_slot0 = var9;
            var8 = var4.canMentionEveryone;
            var7 = undefined;
            if(!(var8 === var7)) { _fun0036_ip = 36; continue _fun0036 }
 34:
            var8 = false;
 36:
            var _closure2_slot1 = var8;
            var10 = var4.canMentionHere;
            if(!(var10 === var7)) { _fun0036_ip = 52; continue _fun0036 }
 50:
            var10 = true;
 52:
            var2 = var4.canMentionUsers;
            if(!(var2 === var7)) { _fun0036_ip = 64; continue _fun0036 }
 62:
            var2 = true;
 64:
            var5 = var4.canMentionRoles;
            if(!(var5 === var7)) { _fun0036_ip = 76; continue _fun0036 }
 74:
            var5 = true;
 76:
            var1 = var4.includeAllGuildUsers;
            if(!(var1 === var7)) { _fun0036_ip = 88; continue _fun0036 }
 86:
            var1 = false;
 88:
            var6 = var4.includeNonMentionableRoles;
            if(!(var6 === var7)) { _fun0036_ip = 100; continue _fun0036 }
 98:
            var6 = false;
 100:
            var _closure2_slot2 = var6;
            var15 = var4.checkRecentlyTalkedOnEmptyQuery;
            if(!(var15 === var7)) { _fun0036_ip = 116; continue _fun0036 }
 114:
            var15 = true;
 116:
            var6 = var4.limit;
            if(!(var6 === var7)) { _fun0036_ip = 132; continue _fun0036 }
 125:
            var6 = _closure1_slot44;
 132:
            var14 = var4.request;
            var13 = var4.allowSnowflake;
            if(!(var13 === var7)) { _fun0036_ip = 150; continue _fun0036 }
 148:
            var13 = false;
 150:
            var _closure2_slot3 = var13;
            var _closure2_slot4 = var7;
            var _closure2_slot5 = var7;
            if(var2) { _fun0036_ip = 171; continue _fun0036 }
 165:
            var4 = new Array(0);
            _fun0036_ip = 287; continue _fun0036;
 171:
            if(!var1) { _fun0036_ip = 185; continue _fun0036 }
 174:
            var2 = var9.guild_id;
            var1 = null;
            if(!(var1 == var2)) { _fun0036_ip = 227; continue _fun0036 }
 185:
            var2 = var12.queryChannelUsers;
            var1 = {};
            var11 = var9.id;
            var1['channelId'] = var11;
            var1['query'] = var16;
            var1['limit'] = var6;
            var1['checkRecentlyTalkedOnEmptyQuery'] = var15;
            var1['allowSnowflake'] = var13;
            var11 = var2.bind(var12)(var1);
            _fun0036_ip = 272; continue _fun0036;
 227:
            var2 = var12.queryGuildUsers;
            var1 = {};
            var17 = var9.guild_id;
            var1['guildId'] = var17;
            var1['query'] = var16;
            var1['limit'] = var6;
            var1['checkRecentlyTalkedOnEmptyQuery'] = var15;
            var1['request'] = var14;
            var1['allowSnowflake'] = var13;
            var11 = var2.bind(var12)(var1);
 272:
            var2 = var11.map;
            var1 = function(arg1) {
                var1 = arg1;
                var2 = var1.record;
                var4 = var1.score;
                var3 = var1.comparator;
                var1 = {};
                var1['user'] = var2;
                var1['score'] = var4;
                var1['comparator'] = var3;
                var7 = _closure1_slot28;
                var6 = var7.getNick;
                var4 = _closure2_slot0;
                var5 = var4.guild_id;
                var4 = var2.id;
                var4 = var6.bind(var7)(var5, var4);
                var1['nick'] = var4;
                var4 = _closure1_slot33;
                var3 = var4.getStatus;
                var2 = var2.id;
                var2 = var3.bind(var4)(var2);
                var1['status'] = var2;
                return var1;
            };
            var4 = var2.bind(var11)(var1);
 287:
            var12 = var4.length;
            var1 = var16.toLowerCase;
            var11 = var1.bind(var16)();
            _closure2_slot4 = var11;
            var17 = new Array(0);
            var2 = var17;
            var13 = var12;
            if(!(var13 < var6)) { _fun0036_ip = 524; continue _fun0036 }
 323:
            var13 = var12;
            var2 = var17;
            if(!var5) { _fun0036_ip = 524; continue _fun0036 }
 335:
            var1 = var9.getGuildId;
            var18 = var1.bind(var9)();
            _closure2_slot5 = var18;
            var15 = _closure1_slot30;
            var14 = var15.getGuild;
            var15 = var14.bind(var15)(var18);
            var14 = null;
            var13 = var12;
            var2 = var17;
            if(!(var14 != var15)) { _fun0036_ip = 524; continue _fun0036 }
 381:
            var18 = _closure1_slot1;
            var14 = _closure1_slot3;
            var17 = 41;
            var17 = var14[var17];
            var17 = var18.bind(var7)(var17);
            var19 = _closure1_slot29;
            var18 = var19.getSortedRoles;
            var15 = var15.id;
            var15 = var18.bind(var19)(var15);
            var17 = var17.bind(var7)(var15);
            var15 = var17.filter;
            var3 = function(arg1) {
                _fun0037: for(var _fun0037_ip = 0; ; ) switch(_fun0037_ip) {
 0:
                    var2 = arg1;
                    var1 = var2.mentionable;
                    var8 = var2.name;
                    var3 = var2.id;
                    if(var1) { _fun0037_ip = 29; continue _fun0037 }
 22:
                    var1 = _closure2_slot1;
 29:
                    if(var1) { _fun0037_ip = 39; continue _fun0037 }
 32:
                    var1 = _closure2_slot2;
 39:
                    if(!var1) { _fun0037_ip = 114; continue _fun0037 }
 42:
                    var4 = _closure1_slot1;
                    var5 = _closure1_slot3;
                    var2 = 36;
                    var2 = var5[var2];
                    var7 = undefined;
                    var6 = var4.bind(var7)(var2);
                    var4 = _closure2_slot4;
                    var2 = var8.toLowerCase;
                    var2 = var2.bind(var8)();
                    var2 = var6.bind(var7)(var4, var2);
                    if(var2) { _fun0037_ip = 111; continue _fun0037 }
 93:
                    var4 = _closure2_slot3;
                    if(!var4) { _fun0037_ip = 108; continue _fun0037 }
 100:
                    var5 = _closure2_slot4;
                    var4 = var5 === var3;
 108:
                    var2 = var4;
 111:
                    var1 = var2;
 114:
                    if(!var1) { _fun0037_ip = 164; continue _fun0037 }
 117:
                    var5 = _closure1_slot1;
                    var4 = _closure1_slot3;
                    var2 = 48;
                    var4 = var4[var2];
                    var2 = undefined;
                    var5 = var5.bind(var2)(var4);
                    var4 = var5.castGuildIdAsEveryoneGuildRoleId;
                    var2 = _closure2_slot5;
                    var2 = var4.bind(var5)(var2);
                    var1 = var3 !== var2;
 164:
                    return var1;
                }
            };
            var15 = var15.bind(var17)(var3);
            var3 = var15.value;
            var15 = var3.bind(var15)();
            var3 = _closure1_slot0;
            var1 = 49;
            var1 = var14[var1];
            var14 = var3.bind(var7)(var1);
            var3 = var14.matchSorter;
            var1 = {};
            var17 = ['name'];
            var1['keys'] = var17;
            var15 = var3.bind(var14)(var15, var16, var1);
            var14 = var15.slice;
            var3 = var6 - var12;
            var1 = 0;
            var1 = var14.bind(var15)(var1, var3);
            var3 = var1.length;
            var13 = var12 + var3;
            var2 = var1;
 524:
            var3 = new Array(0);
            var1 = var9.isPrivate;
            var1 = var1.bind(var9)();
            var1 = !var1;
            if(!var1) { _fun0036_ip = 547; continue _fun0036 }
 544:
            var1 = var8;
 547:
            if(!var1) { _fun0036_ip = 553; continue _fun0036 }
 550:
            var1 = var5;
 553:
            var5 = var13;
            if(!var1) { _fun0036_ip = 734; continue _fun0036 }
 562:
            var1 = var13 < var6;
            if(!var1) { _fun0036_ip = 611; continue _fun0036 }
 569:
            var15 = _closure1_slot1;
            var16 = _closure1_slot3;
            var14 = 36;
            var14 = var16[var14];
            var14 = var15.bind(var7)(var14);
            var12 = _closure1_slot54;
            var12 = var12.bind(var7)();
            var12 = var12.test;
            var1 = var14.bind(var7)(var11, var12);
 611:
            var12 = var13;
            if(!var1) { _fun0036_ip = 645; continue _fun0036 }
 617:
            var14 = var3.push;
            var1 = _closure1_slot54;
            var1 = var1.bind(var7)();
            var1 = var14.bind(var3)(var1);
            var1 = 1;
            var12 = var13 + var1;
 645:
            if(!var10) { _fun0036_ip = 652; continue _fun0036 }
 648:
            var10 = var12 < var6;
 652:
            if(!var10) { _fun0036_ip = 697; continue _fun0036 }
 655:
            var14 = _closure1_slot1;
            var15 = _closure1_slot3;
            var13 = 36;
            var13 = var15[var13];
            var13 = var14.bind(var7)(var13);
            var1 = _closure1_slot55;
            var1 = var1.bind(var7)();
            var1 = var1.test;
            var10 = var13.bind(var7)(var11, var1);
 697:
            var1 = var12;
            if(!var10) { _fun0036_ip = 731; continue _fun0036 }
 703:
            var13 = var3.push;
            var10 = _closure1_slot55;
            var10 = var10.bind(var7)();
            var10 = var13.bind(var3)(var10);
            var10 = 1;
            var1 = var12 + var10;
 731:
            var5 = var1;
 734:
            var12 = _closure1_slot0;
            var13 = _closure1_slot3;
            var10 = 50;
            var10 = var13[var10];
            var10 = var12.bind(var7)(var10);
            var13 = var10.GameMentionsGuildExperiment;
            var12 = var13.getCurrentConfig;
            var10 = {};
            var9 = var9.guild_id;
            var10['guildId'] = var9;
            var9 = 'mention autocomplete';
            var10['location'] = var9;
            var9 = {};
            var14 = true;
            var9['autoTrackExposure'] = var14;
            var9 = var12.bind(var13)(var10, var9);
            var9 = var9.enabled;
            if(!var8) { _fun0036_ip = 816; continue _fun0036 }
 813:
            var8 = var9;
 816:
            if(!var8) { _fun0036_ip = 829; continue _fun0036 }
 819:
            var10 = _closure1_slot56;
            var9 = null;
            var8 = var9 != var10;
 829:
            if(!var8) { _fun0036_ip = 853; continue _fun0036 }
 832:
            var9 = var5 < var6;
            if(var9) { _fun0036_ip = 850; continue _fun0036 }
 839:
            var12 = var11.length;
            var10 = 0;
            var9 = var10 === var12;
 850:
            var8 = var9;
 853:
            if(!var8) { _fun0036_ip = 895; continue _fun0036 }
 856:
            var10 = _closure1_slot1;
            var12 = _closure1_slot3;
            var9 = 36;
            var9 = var12[var9];
            var10 = var10.bind(var7)(var9);
            var9 = _closure1_slot56;
            var9 = var9.bind(var7)();
            var9 = var9.test;
            var8 = var10.bind(var7)(var11, var9);
 895:
            if(!var8) { _fun0036_ip = 990; continue _fun0036 }
 898:
            if(!(var5 >= var6)) { _fun0036_ip = 965; continue _fun0036 }
 902:
            var6 = var3.length;
            var8 = 0;
            if(!(!(var6 > var8))) { _fun0036_ip = 955; continue _fun0036 }
 913:
            var6 = var2.length;
            if(!(!(var6 > var8))) { _fun0036_ip = 943; continue _fun0036 }
 922:
            var6 = var4.length;
            if(!(var6 > var8)) { _fun0036_ip = 965; continue _fun0036 }
 931:
            var6 = var4.pop;
            var6 = var6.bind(var4)();
            _fun0036_ip = 965; continue _fun0036;
 943:
            var6 = var2.pop;
            var6 = var6.bind(var2)();
            _fun0036_ip = 965; continue _fun0036;
 955:
            var6 = var3.pop;
            var6 = var6.bind(var3)();
 965:
            var6 = var3.push;
            var1 = _closure1_slot56;
            var1 = var1.bind(var7)();
            var1 = var6.bind(var3)(var1);
            var1 = 1;
            var1 = var5 + var1;
 990:
            var1 = {};
            var1['users'] = var4;
            var1['globals'] = var3;
            var1['roles'] = var2;
            return var1;
        }
    };
    var7['queryMentionResults'] = var8;
    var8 = function queryGuildMentionResults(arg1) {
        _fun0038: for(var _fun0038_ip = 0; ; ) switch(_fun0038_ip) {
 0:
            var4 = arg1;
            var9 = this;
            var2 = var4.query;
            var13 = var4.guildId;
            var5 = var4.canMentionEveryone;
            var6 = undefined;
            if(!(var5 === var6)) { _fun0038_ip = 32; continue _fun0038 }
 30:
            var5 = false;
 32:
            var _closure2_slot0 = var5;
            var1 = var4.canMentionUsers;
            if(!(var1 === var6)) { _fun0038_ip = 48; continue _fun0038 }
 46:
            var1 = true;
 48:
            var7 = var4.canMentionRoles;
            if(!(var7 === var6)) { _fun0038_ip = 60; continue _fun0038 }
 58:
            var7 = true;
 60:
            var4 = var4.canMentionNonMentionableRoles;
            if(!(var4 === var6)) { _fun0038_ip = 72; continue _fun0038 }
 70:
            var4 = false;
 72:
            var _closure2_slot1 = var4;
            var _closure2_slot2 = var6;
            var _closure2_slot3 = var6;
            if(var1) { _fun0038_ip = 93; continue _fun0038 }
 87:
            var4 = new Array(0);
            _fun0038_ip = 129; continue _fun0038;
 93:
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
                var4 = _closure1_slot33;
                var3 = var4.getStatus;
                var2 = var2.record;
                var2 = var2.id;
                var3 = var3.bind(var4)(var2);
                var2 = 'status';
                var1[var2] = var3;
                return var1;
            };
            var4 = var8.bind(var9)(var1);
 129:
            var10 = var4.length;
            var1 = var2.toLowerCase;
            var9 = var1.bind(var2)();
            _closure2_slot2 = var9;
            var2 = new Array(0);
            _closure2_slot3 = var2;
            var11 = _closure1_slot44;
            var8 = var10;
            if(!(var8 < var11)) { _fun0038_ip = 308; continue _fun0038 }
 173:
            var8 = var10;
            if(!var7) { _fun0038_ip = 308; continue _fun0038 }
 182:
            var12 = _closure1_slot30;
            var11 = var12.getGuild;
            var11 = var11.bind(var12)(var13);
            var12 = null;
            var8 = var10;
            if(!(var12 != var11)) { _fun0038_ip = 308; continue _fun0038 }
 205:
            var13 = _closure1_slot1;
            var14 = _closure1_slot3;
            var12 = 41;
            var12 = var14[var12];
            var12 = var13.bind(var6)(var12);
            var14 = _closure1_slot29;
            var13 = var14.getSortedRoles;
            var11 = var11.id;
            var11 = var13.bind(var14)(var11);
            var13 = var12.bind(var6)(var11);
            var12 = var13.filter;
            var11 = function(arg1) {
                _fun0039: for(var _fun0039_ip = 0; ; ) switch(_fun0039_ip) {
 0:
                    var4 = arg1;
                    var1 = var4.mentionable;
                    if(var1) { _fun0039_ip = 19; continue _fun0039 }
 12:
                    var1 = _closure2_slot0;
 19:
                    if(var1) { _fun0039_ip = 29; continue _fun0039 }
 22:
                    var1 = _closure2_slot1;
 29:
                    if(!var1) { _fun0039_ip = 85; continue _fun0039 }
 32:
                    var3 = _closure1_slot1;
                    var5 = _closure1_slot3;
                    var2 = 36;
                    var2 = var5[var2];
                    var6 = undefined;
                    var5 = var3.bind(var6)(var2);
                    var3 = _closure2_slot2;
                    var7 = var4.name;
                    var2 = var7.toLowerCase;
                    var2 = var2.bind(var7)();
                    var1 = var5.bind(var6)(var3, var2);
 85:
                    if(!var1) { _fun0039_ip = 105; continue _fun0039 }
 88:
                    var3 = _closure1_slot20;
                    var2 = undefined;
                    var2 = var3.bind(var2)(var4);
                    var1 = !var2;
 105:
                    return var1;
                }
            };
            var13 = var12.bind(var13)(var11);
            var12 = var13.take;
            var11 = _closure1_slot44;
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
 308:
            var3 = new Array(0);
            if(!var5) { _fun0038_ip = 318; continue _fun0038 }
 315:
            var5 = var7;
 318:
            if(!var5) { _fun0038_ip = 476; continue _fun0038 }
 324:
            var5 = _closure1_slot44;
            var5 = var8 < var5;
            if(!var5) { _fun0038_ip = 374; continue _fun0038 }
 335:
            var10 = _closure1_slot1;
            var11 = _closure1_slot3;
            var7 = 36;
            var7 = var11[var7];
            var10 = var10.bind(var6)(var7);
            var7 = _closure1_slot54;
            var7 = var7.bind(var6)();
            var7 = var7.test;
            var5 = var10.bind(var6)(var9, var7);
 374:
            var7 = var8;
            if(!var5) { _fun0038_ip = 405; continue _fun0038 }
 380:
            var10 = var3.push;
            var5 = _closure1_slot54;
            var5 = var5.bind(var6)();
            var5 = var10.bind(var3)(var5);
            var5 = 1;
            var7 = var8 + var5;
 405:
            var5 = _closure1_slot44;
            var5 = var7 < var5;
            if(!var5) { _fun0038_ip = 455; continue _fun0038 }
 416:
            var8 = _closure1_slot1;
            var10 = _closure1_slot3;
            var7 = 36;
            var7 = var10[var7];
            var8 = var8.bind(var6)(var7);
            var7 = _closure1_slot55;
            var7 = var7.bind(var6)();
            var7 = var7.test;
            var5 = var8.bind(var6)(var9, var7);
 455:
            if(!var5) { _fun0038_ip = 476; continue _fun0038 }
 458:
            var5 = var3.push;
            var1 = _closure1_slot55;
            var1 = var1.bind(var6)();
            var1 = var5.bind(var3)(var1);
 476:
            var1 = {};
            var1['users'] = var4;
            var1['globals'] = var3;
            var1['roles'] = var2;
            return var1;
        }
    };
    var7['queryGuildMentionResults'] = var8;
    var8 = function queryChoice(arg1) {
        _fun0040: for(var _fun0040_ip = 0; ; ) switch(_fun0040_ip) {
 0:
            var2 = arg1;
            var3 = var2.query;
            var5 = var2.choices;
            var4 = var2.limit;
            var7 = undefined;
            if(!(var4 === var7)) { _fun0040_ip = 30; continue _fun0040 }
 27:
            var4 = 10;
 30:
            var2 = var2.fuzzy;
            if(!(var2 === var7)) { _fun0040_ip = 42; continue _fun0040 }
 40:
            var2 = true;
 42:
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
            var3 = 35;
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
            var3 = 41;
            var3 = var8[var3];
            var3 = var6.bind(var7)(var3);
            var6 = var3.bind(var7)(var5);
            var5 = var6.map;
            var3 = function(arg1, arg2) {
                _fun0041: for(var _fun0041_ip = 0; ; ) switch(_fun0041_ip) {
 0:
                    var4 = arg1;
                    var6 = _closure1_slot63;
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
                    if(!(var3 > var2)) { _fun0041_ip = 101; continue _fun0041 }
 78:
                    var2 = {};
                    var2['choice'] = var4;
                    var2['score'] = var3;
                    var3 = arg2;
                    var2['originalIndex'] = var3;
                    var1 = var2;
 101:
                    return var1;
                }
            };
            var5 = var5.bind(var6)(var3);
            var3 = var5.filter;
            var6 = _closure1_slot0;
            var2 = 43;
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
            if(!(var1 !== var4)) { _fun0040_ip = 315; continue _fun0040 }
 304:
            var1 = var3.take;
            var2 = var1.bind(var3)(var4);
 315:
            var1 = var2.value;
            var1 = var1.bind(var2)();
            return var1;
        }
    };
    var7['queryChoice'] = var8;
    var8 = function queryStaticRouteChannels(arg1) {
        _fun0042: for(var _fun0042_ip = 0; ; ) switch(_fun0042_ip) {
 0:
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
            var2 = 35;
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
            var1 = 51;
            var1 = var3[var1];
            var3 = var2.bind(var10)(var1);
            var2 = var3.canSeeOnboardingHome;
            var1 = var13.id;
            var9 = var2.bind(var3)(var1);
            if(!var9) { _fun0042_ip = 241; continue _fun0042 }
 212:
            var3 = var13.features;
            var2 = var3.has;
            var1 = _closure1_slot41;
            var1 = var1.HUB;
            var1 = var2.bind(var3)(var1);
            var9 = !var1;
 241:
            var3 = var13.features;
            var2 = var3.has;
            var1 = _closure1_slot41;
            var1 = var1.COMMUNITY;
            var8 = var2.bind(var3)(var1);
            var2 = _closure1_slot0;
            var3 = _closure1_slot3;
            var1 = 52;
            var1 = var3[var1];
            var2 = var2.bind(var10)(var1);
            var1 = var2.isGuildOnboardingAvailable;
            var7 = var1.bind(var2)(var13);
            if(!var7) { _fun0042_ip = 327; continue _fun0042 }
 301:
            var3 = var13.features;
            var2 = var3.has;
            var1 = _closure1_slot41;
            var1 = var1.COMMUNITY;
            var7 = var2.bind(var3)(var1);
 327:
            var1 = new Array(0);
            var2 = {};
            var4 = _closure1_slot46;
            var3 = var4.SERVER_GUIDE;
            var2['id'] = var3;
            var14 = _closure1_slot0;
            var15 = _closure1_slot3;
            var3 = 47;
            var5 = var15[var3];
            var5 = var14.bind(var10)(var5);
            var16 = var5.intl;
            var6 = var16.string;
            var5 = var15[var3];
            var5 = var14.bind(var10)(var5);
            var5 = var5.t;
            var5 = var5.VbpLyc;
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
            var5 = var5.et6wam;
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
            var3 = var3.h9mGOD;
            var3 = var4.bind(var5)(var3);
            var2['name'] = var3;
            var6[2] = var2;
            var2 = var6.length;
            var5 = 0;
            var2 = var5 < var2;
            var4 = false;
            var3 = 0;
            if(!var2) { _fun0042_ip = 764; continue _fun0042 }
 563:
            var15 = var6[var3];
            var14 = var15.id;
            var2 = _closure1_slot46;
            var2 = var2.SERVER_GUIDE;
            if(!(var14 === var2)) { _fun0042_ip = 592; continue _fun0042 }
 586:
            if(!var9) { _fun0042_ip = 749; continue _fun0042 }
 592:
            var14 = var15.id;
            var2 = _closure1_slot46;
            var2 = var2.CHANNEL_BROWSER;
            if(!(var14 === var2)) { _fun0042_ip = 617; continue _fun0042 }
 611:
            if(!var8) { _fun0042_ip = 749; continue _fun0042 }
 617:
            var14 = var15.id;
            var2 = _closure1_slot46;
            var2 = var2.CUSTOMIZE_COMMUNITY;
            if(!(var14 === var2)) { _fun0042_ip = 639; continue _fun0042 }
 636:
            if(!var7) { _fun0042_ip = 749; continue _fun0042 }
 639:
            var14 = _closure1_slot63;
            var16 = var15.name;
            var2 = var16.toLocaleLowerCase;
            var2 = var2.bind(var16)();
            var2 = var14.bind(var10)(var2, var12, var4);
            if(!(var2 > var5)) { _fun0042_ip = 749; continue _fun0042 }
 669:
            var14 = var1.push;
            var16 = _closure1_slot19;
            var2 = {};
            var17 = var15.id;
            var2['id'] = var17;
            var15 = var15.name;
            var2['name'] = var15;
            var15 = _closure1_slot42;
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
 749:
            var3 = var3 + 1;
            var2 = var6.length;
            if(var3 < var2) { _fun0042_ip = 563; continue _fun0042 }
 764:
            return var1;
        }
    };
    var7['queryStaticRouteChannels'] = var8;
    var8 = function queryChannelResults(arg1) {
        _fun0043: for(var _fun0043_ip = 0; ; ) switch(_fun0043_ip) {
 0:
            var1 = arg1;
            var5 = this;
            var8 = var1.query;
            var9 = var1.channel;
            var6 = var1.type;
            var7 = undefined;
            if(!(var6 === var7)) { _fun0043_ip = 36; continue _fun0043 }
 29:
            var6 = _closure1_slot25;
 36:
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
                _fun0044: for(var _fun0044_ip = 0; ; ) switch(_fun0044_ip) {
 0:
                    var3 = _closure2_slot0;
                    var1 = null;
                    var1 = var1 == var3;
                    if(var1) { _fun0044_ip = 38; continue _fun0044 }
 16:
                    var4 = _closure2_slot0;
                    var3 = var4.includes;
                    var2 = arg1;
                    var2 = var2.type;
                    var1 = var3.bind(var4)(var2);
 38:
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
    var7['queryChannelResults'] = var8;
    var8 = function queryApplicationCommandChannelResults(arg1) {
        _fun0045: for(var _fun0045_ip = 0; ; ) switch(_fun0045_ip) {
 0:
            var1 = arg1;
            var18 = this;
            var17 = var1.query;
            var3 = var1.channel;
            var6 = var1.channelTypes;
            var _closure2_slot0 = var6;
            var9 = var1.limit;
            var11 = undefined;
            if(!(var9 === var11)) { _fun0045_ip = 46; continue _fun0045 }
 39:
            var9 = _closure1_slot44;
 46:
            var16 = var1.allowSnowflake;
            var2 = var3.guild_id;
            var1 = null;
            if(!(var1 != var2)) { _fun0045_ip = 295; continue _fun0045 }
 66:
            var12 = new Array(0);
            var15 = _closure1_slot58;
            var5 = var15.length;
            var8 = 0;
            var5 = var8 < var5;
            var14 = true;
            var13 = false;
            var7 = 0;
            var10 = var12;
            if(!var5) { _fun0045_ip = 192; continue _fun0045 }
 100:
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
                _fun0046: for(var _fun0046_ip = 0; ; ) switch(_fun0046_ip) {
 0:
                    var3 = _closure2_slot0;
                    var1 = null;
                    var1 = var1 == var3;
                    if(var1) { _fun0046_ip = 38; continue _fun0046 }
 16:
                    var4 = _closure2_slot0;
                    var3 = var4.includes;
                    var2 = arg1;
                    var2 = var2.type;
                    var1 = var3.bind(var4)(var2);
 38:
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
            if(var7 < var5) { _fun0045_ip = 100; continue _fun0045 }
 192:
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
            var2 = 53;
            var2 = var12[var2];
            var2 = var10.bind(var11)(var2);
            var5 = var5.bind(var7)(var2);
            var2 = var1 != var9;
            if(!var2) { _fun0045_ip = 254; continue _fun0045 }
 245:
            var7 = var5.length;
            var2 = var7 > var9;
 254:
            var7 = var5;
            if(!var2) { _fun0045_ip = 271; continue _fun0045 }
 260:
            var2 = var5.slice;
            var7 = var2.bind(var5)(var8, var9);
 271:
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
 295:
            var2 = new Array(0);
            var1 = var1 == var6;
            if(var1) { _fun0045_ip = 321; continue _fun0045 }
 306:
            var5 = var6.includes;
            var4 = var3.type;
            var1 = var5.bind(var6)(var4);
 321:
            if(!var1) { _fun0045_ip = 334; continue _fun0045 }
 324:
            var1 = var2.push;
            var1 = var1.bind(var2)(var3);
 334:
            var1 = {};
            var1['channels'] = var2;
            return var1;
        }
    };
    var7['queryApplicationCommandChannelResults'] = var8;
    var8 = function queryChoiceResults(arg1) {
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
    var7['queryChoiceResults'] = var8;
    var8 = function queryEmojiResults(arg1) {
        _fun0047: for(var _fun0047_ip = 0; ; ) switch(_fun0047_ip) {
 0:
            var1 = arg1;
            var8 = var1.query;
            var9 = var1.channel;
            var6 = var1.intention;
            var7 = var1.maxCount;
            var4 = undefined;
            if(!(var7 === var4)) { _fun0047_ip = 38; continue _fun0047 }
 31:
            var7 = _closure1_slot44;
 38:
            var5 = var1.matchComparator;
            var3 = _closure1_slot0;
            var10 = _closure1_slot3;
            var1 = 54;
            var1 = var10[var1];
            var1 = var3.bind(var4)(var1);
            var3 = var1.FrecencyUserSettingsActionCreators;
            var1 = var3.loadIfNecessary;
            var1 = var1.bind(var3)();
            var1 = {};
            var4 = _closure1_slot6;
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
    var7['queryEmojiResults'] = var8;
    var8 = function queryStickers(arg1) {
        _fun0048: for(var _fun0048_ip = 0; ; ) switch(_fun0048_ip) {
 0:
            var1 = arguments[1];
            var2 = arguments[2];
            var5 = undefined;
            if(!(var1 === var5)) { _fun0048_ip = 16; continue _fun0048 }
 14:
            var1 = true;
 16:
            var _closure2_slot0 = var1;
            if(!(var2 === var5)) { _fun0048_ip = 48; continue _fun0048 }
 24:
            var4 = _closure1_slot51;
            var1 = [null];
            var1[1] = var4;
            var2 = var1;
 48:
            var6 = var2;
            var1 = var6[Symbol.iterator];
            var6 = var1().next;
            var7 = var6().value;
            var2 = var1;
            var2 = var2 === var5;
            var4 = undefined;
            if(var2) { _fun0048_ip = 73; continue _fun0048 }
 70:
            var4 = var7;
 73:
            var _closure2_slot1 = var4;
            var4 = undefined;
            if(var2) { _fun0048_ip = 107; continue _fun0048 }
 82:
            var7 = var6().value;
            var6 = var1;
            var6 = var6 === var5;
            var4 = undefined;
            var2 = var6;
            if(var6) { _fun0048_ip = 107; continue _fun0048 }
 101:
            var4 = var7;
            var2 = var6;
 107:
            var _closure2_slot2 = var4;
            if(var2) { _fun0048_ip = 117; continue _fun0048 }
 114:
            var1.return();
 117:
            var _closure2_slot3 = var5;
            var _closure2_slot4 = var5;
            var _closure2_slot5 = var5;
            var _closure2_slot6 = var5;
            var _closure2_slot7 = var5;
            var1 = _closure1_slot10;
            var1 = var1.stickerMetadata;
            _closure2_slot3 = var1;
            var4 = _closure1_slot37;
            var1 = var4.getCurrentUser;
            var1 = var1.bind(var4)();
            _closure2_slot4 = var1;
            var1 = global;
            var1 = var1.Set;
            var4 = var1.prototype;
            var4 = Object.create(var4, {constructor: {value: var1}});
            var11 = var4;
            var1 = new var11[var1](var10);
            var1 = var1 instanceof Object ? var1 : var4;
            _closure2_slot5 = var1;
            var4 = new Array(0);
            _closure2_slot6 = var4;
            var6 = _closure1_slot0;
            var7 = _closure1_slot3;
            var1 = 54;
            var1 = var7[var1];
            var1 = var6.bind(var5)(var1);
            var6 = var1.FrecencyUserSettingsActionCreators;
            var1 = var6.loadIfNecessary;
            var1 = var1.bind(var6)();
            var8 = function _loop() {
                _fun0049: for(var _fun0049_ip = 0; ; ) switch(_fun0049_ip) {
 0:
                    var1 = _closure2_slot7;
                    var8 = '';
                    if(!(var8 !== var1)) { _fun0049_ip = 247; continue _fun0049 }
 20:
                    var4 = _closure2_slot7;
                    var1 = var4.toLocaleLowerCase;
                    var7 = var1.bind(var4)();
                    var _closure3_slot0 = var7;
                    var6 = _closure1_slot0;
                    var11 = _closure1_slot3;
                    var1 = 37;
                    var4 = var11[var1];
                    var1 = undefined;
                    var6 = var6.bind(var1)(var4);
                    var4 = var6.stripDiacritics;
                    var10 = var4.bind(var6)(var7);
                    var4 = global;
                    var13 = var4.RegExp;
                    var9 = _closure1_slot1;
                    var5 = 35;
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
                    var4 = _closure2_slot3;
                    var3 = var4.forEach;
                    var2 = function(arg1, arg2) {
                        _fun0050: for(var _fun0050_ip = 0; ; ) switch(_fun0050_ip) {
 0:
                            var9 = arg2;
                            var2 = _closure1_slot10;
                            var1 = var2.getStickerById;
                            var6 = var1.bind(var2)(var9);
                            var3 = null;
                            if(!(var3 != var6)) { _fun0050_ip = 561; continue _fun0050 }
 30:
                            var5 = _closure2_slot2;
                            var7 = _closure1_slot0;
                            var8 = _closure1_slot3;
                            var2 = 55;
                            var2 = var8[var2];
                            var18 = undefined;
                            var10 = var7.bind(var18)(var2);
                            var8 = var10.getStickerSendability;
                            var7 = _closure2_slot4;
                            var2 = _closure2_slot1;
                            var2 = var8.bind(var10)(var6, var7, var2);
                            var2 = var5.bind(var18)(var6, var2);
                            if(!var2) { _fun0050_ip = 561; continue _fun0050 }
 92:
                            var5 = _closure1_slot60;
                            var2 = arg1;
                            var17 = var5.bind(var18)(var2);
                            var5 = var17.bind(var18)();
                            var7 = var5.done;
                            var2 = 0;
                            var16 = 7;
                            var15 = 5;
                            var13 = 40;
                            var12 = 0;
                            var11 = null;
                            var10 = var5;
                            var8 = 0;
                            var5 = null;
                            if(var7) { _fun0050_ip = 433; continue _fun0050 }
 144:
                            var7 = var10.value;
                            var24 = var7.type;
                            var7 = var7.value;
                            var19 = _closure1_slot66;
                            var22 = var19.bind(var18)(var24);
                            var19 = _closure2_slot0;
                            var21 = _closure3_slot0;
                            if(var19) { _fun0050_ip = 207; continue _fun0050 }
 179:
                            var19 = var11;
                            var20 = 0;
                            if(!(var7 === var21)) { _fun0050_ip = 396; continue _fun0050 }
 191:
                            var23 = _closure1_slot50;
                            var20 = var23 * var22;
                            var19 = var7;
                            _fun0050_ip = 396; continue _fun0050;
 207:
                            if(!(var7 !== var21)) { _fun0050_ip = 385; continue _fun0050 }
 214:
                            var23 = _closure3_slot1;
                            var21 = var23.test;
                            var21 = var21.bind(var23)(var7);
                            if(var21) { _fun0050_ip = 376; continue _fun0050 }
 234:
                            var23 = _closure1_slot0;
                            var21 = _closure1_slot3;
                            var21 = var21[var13];
                            var21 = var23.bind(var18)(var21);
                            var21 = var21.StickerMetadataTypes;
                            var21 = var21.GUILD_NAME;
                            var21 = var24 !== var21;
                            if(!var21) { _fun0050_ip = 303; continue _fun0050 }
 270:
                            var25 = _closure1_slot0;
                            var23 = _closure1_slot3;
                            var23 = var23[var13];
                            var23 = var25.bind(var18)(var23);
                            var23 = var23.StickerMetadataTypes;
                            var23 = var23.PACK_NAME;
                            var21 = var24 !== var23;
 303:
                            if(!var21) { _fun0050_ip = 339; continue _fun0050 }
 306:
                            var25 = _closure1_slot0;
                            var23 = _closure1_slot3;
                            var23 = var23[var13];
                            var23 = var25.bind(var18)(var23);
                            var23 = var23.StickerMetadataTypes;
                            var23 = var23.STICKER_NAME;
                            var21 = var24 !== var23;
 339:
                            if(var21) { _fun0050_ip = 359; continue _fun0050 }
 342:
                            var24 = _closure3_slot2;
                            var23 = var24.test;
                            var23 = var23.bind(var24)(var7);
                            var21 = !var23;
 359:
                            var19 = var11;
                            var20 = 0;
                            if(var21) { _fun0050_ip = 396; continue _fun0050 }
 367:
                            var20 = var15 * var22;
                            var19 = var11;
                            _fun0050_ip = 396; continue _fun0050;
 376:
                            var20 = var16 * var22;
                            var19 = var11;
                            _fun0050_ip = 396; continue _fun0050;
 385:
                            var21 = _closure1_slot50;
                            var20 = var21 * var22;
                            var19 = var11;
 396:
                            if(!(var20 > var12)) { _fun0050_ip = 406; continue _fun0050 }
 400:
                            var12 = var20;
                            var19 = var7;
 406:
                            var21 = var17.bind(var18)();
                            var7 = var21.done;
                            var11 = var19;
                            var10 = var21;
                            var8 = var12;
                            var5 = var11;
                            if(!var7) { _fun0050_ip = 144; continue _fun0050 }
 433:
                            var4 = _closure1_slot9;
                            var7 = var4.stickerFrecencyWithoutFetchingLatest;
                            var4 = var7.getScore;
                            var9 = var4.bind(var7)(var9);
                            var4 = var8;
                            if(!(var3 != var9)) { _fun0050_ip = 472; continue _fun0050 }
 461:
                            var7 = 100;
                            var7 = var9 / var7;
                            var4 = var8 * var7;
 472:
                            var2 = var4 > var2;
                            if(!var2) { _fun0050_ip = 483; continue _fun0050 }
 479:
                            var2 = var3 != var5;
 483:
                            if(!var2) { _fun0050_ip = 508; continue _fun0050 }
 486:
                            var8 = _closure2_slot5;
                            var7 = var8.has;
                            var3 = var6.id;
                            var3 = var7.bind(var8)(var3);
                            var2 = !var3;
 508:
                            if(!var2) { _fun0050_ip = 561; continue _fun0050 }
 511:
                            var7 = _closure2_slot5;
                            var3 = var7.add;
                            var2 = var6.id;
                            var2 = var3.bind(var7)(var2);
                            var3 = _closure2_slot6;
                            var2 = var3.push;
                            var1 = {};
                            var1['sticker'] = var6;
                            var1['comparator'] = var5;
                            var1['score'] = var4;
                            var1 = var2.bind(var3)(var1);
 561:
                            var1 = undefined;
                            return var1;
                        }
                    };
                    var2 = var3.bind(var4)(var2);
                    return var1;
 247:
                    var1 = 1;
                    return var1;
                }
            };
            var6 = _closure1_slot60;
            var1 = arg1;
            var7 = var6.bind(var5)(var1);
            var6 = var7.bind(var5)();
            var1 = var6.done;
            if(var1) { _fun0048_ip = 306; continue _fun0048 }
 278:
            var1 = var6.value;
            _closure2_slot7 = var1;
            var1 = var8.bind(var5)();
            var9 = var7.bind(var5)();
            var1 = var9.done;
            var6 = var9;
            if(!var1) { _fun0048_ip = 278; continue _fun0048 }
 306:
            var6 = _closure1_slot1;
            var7 = _closure1_slot3;
            var1 = 41;
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
            _closure2_slot6 = var1;
            var5 = var1.length;
            var4 = 0;
            if(!(var4 === var5)) { _fun0048_ip = 382; continue _fun0048 }
 371:
            var2 = _closure1_slot53;
            _closure2_slot6 = var2;
            var1 = var2;
 382:
            return var1;
        }
    };
    var7['queryStickers'] = var8;
    var8 = function querySoundmoji(arg1, arg2) {
        _fun0051: for(var _fun0051_ip = 0; ; ) switch(_fun0051_ip) {
 0:
            var6 = arg2;
            var _closure2_slot0 = var6;
            var3 = _closure1_slot37;
            var2 = var3.getCurrentUser;
            var5 = var2.bind(var3)();
            var3 = _closure1_slot8;
            var2 = var3.isFetching;
            var2 = var2.bind(var3)();
            var2 = !var2;
            if(!var2) { _fun0051_ip = 64; continue _fun0051 }
 45:
            var7 = _closure1_slot8;
            var3 = var7.hasFetchedAllSounds;
            var3 = var3.bind(var7)();
            var2 = !var3;
 64:
            if(!var2) { _fun0051_ip = 99; continue _fun0051 }
 67:
            var7 = _closure1_slot0;
            var3 = _closure1_slot3;
            var2 = 56;
            var3 = var3[var2];
            var2 = undefined;
            var3 = var7.bind(var2)(var3);
            var2 = var3.maybeFetchSoundboardSounds;
            var2 = var2.bind(var3)();
 99:
            var3 = _closure1_slot0;
            var7 = _closure1_slot3;
            var2 = 54;
            var8 = var7[var2];
            var2 = undefined;
            var8 = var3.bind(var2)(var8);
            var9 = var8.FrecencyUserSettingsActionCreators;
            var8 = var9.loadIfNecessary;
            var8 = var8.bind(var9)();
            var8 = global;
            var9 = var8.Array;
            var8 = var9.from;
            var10 = _closure1_slot8;
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
                    _fun0052: for(var _fun0052_ip = 0; ; ) switch(_fun0052_ip) {
 0:
                        var4 = arg1;
                        var3 = _closure1_slot1;
                        var2 = _closure1_slot3;
                        var1 = 57;
                        var2 = var2[var1];
                        var1 = undefined;
                        var5 = var3.bind(var1)(var2);
                        var2 = _closure2_slot0;
                        var7 = null;
                        var2 = var7 == var2;
                        var3 = undefined;
                        if(var2) { _fun0052_ip = 55; continue _fun0052 }
 46:
                        var2 = _closure2_slot0;
                        var3 = var2.guild_id;
 55:
                        var2 = _closure2_slot0;
                        var7 = var7 == var2;
                        var2 = undefined;
                        if(var7) { _fun0052_ip = 77; continue _fun0052 }
 68:
                        var6 = _closure2_slot0;
                        var2 = var6.id;
 77:
                        var2 = var5.bind(var1)(var4, var3, var2);
                        if(!var2) { _fun0052_ip = 104; continue _fun0052 }
 87:
                        var3 = _closure3_slot0;
                        var2 = var3.push;
                        var2 = var2.bind(var3)(var4);
 104:
                        return var1;
                    }
                };
                var2 = var3.bind(var4)(var2);
                return var1;
            };
            var1 = new Array(0);
            var13 = var8.bind(var9)(var4, var1);
            var1 = 58;
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
    var7['querySoundmoji'] = var8;
    var8 = function queryGames(arg1) {
        _fun0053: for(var _fun0053_ip = 0; ; ) switch(_fun0053_ip) {
 0:
            var1 = arg1;
            var _closure2_slot0 = var1;
            var1 = function getSortPriority(arg1) {
                _fun0054: for(var _fun0054_ip = 0; ; ) switch(_fun0054_ip) {
 0:
                    var5 = arg1;
                    var2 = var5.name;
                    var1 = var2.toLowerCase;
                    var7 = var1.bind(var2)();
                    var3 = _closure2_slot0;
                    var1 = var3.toLowerCase;
                    var4 = var1.bind(var3)();
                    var1 = var5.id;
                    var6 = 1000;
                    if(!(var1 !== var4)) { _fun0054_ip = 146; continue _fun0054 }
 50:
                    var6 = 5;
                    if(!(var7 !== var4)) { _fun0054_ip = 146; continue _fun0054 }
 57:
                    var1 = var7.startsWith;
                    var1 = var1.bind(var7)(var4);
                    var6 = 4;
                    if(var1) { _fun0054_ip = 146; continue _fun0054 }
 74:
                    var1 = var7.includes;
                    var1 = var1.bind(var7)(var4);
                    var6 = 3;
                    if(var1) { _fun0054_ip = 146; continue _fun0054 }
 90:
                    var1 = var7.endsWith;
                    var1 = var1.bind(var7)(var4);
                    var6 = 2;
                    if(var1) { _fun0054_ip = 146; continue _fun0054 }
 107:
                    var8 = _closure1_slot1;
                    var3 = _closure1_slot3;
                    var1 = 36;
                    var1 = var3[var1];
                    var3 = undefined;
                    var1 = var8.bind(var3)(var1);
                    var1 = var1.bind(var3)(var4, var7);
                    var6 = 0;
                    if(!var1) { _fun0054_ip = 146; continue _fun0054 }
 143:
                    var6 = 1;
 146:
                    var3 = 0;
                    var1 = var6;
                    if(!(var1 > var3)) { _fun0054_ip = 279; continue _fun0054 }
 158:
                    var7 = _closure2_slot1;
                    var4 = var7.includes;
                    var3 = var5.id;
                    var4 = var4.bind(var7)(var3);
                    var3 = var6;
                    if(!var4) { _fun0054_ip = 190; continue _fun0054 }
 183:
                    var4 = 10;
                    var3 = var6 + var4;
 190:
                    var4 = var5.id;
                    var2 = _closure2_slot2;
                    var2 = var4 in var2;
                    var4 = var3;
                    if(!var2) { _fun0054_ip = 216; continue _fun0054 }
 209:
                    var2 = 2;
                    var4 = var3 + var2;
 216:
                    var7 = _closure1_slot47;
                    var6 = var7.has;
                    var2 = var5.id;
                    var6 = var6.bind(var7)(var2);
                    var2 = var4;
                    if(!var6) { _fun0054_ip = 276; continue _fun0054 }
 244:
                    var3 = _closure1_slot47;
                    var6 = var3.get;
                    var5 = var5.id;
                    var5 = var6.bind(var3)(var5);
                    var3 = var3.size;
                    var3 = var5 / var3;
                    var2 = var4 + var3;
 276:
                    var1 = var2;
 279:
                    return var1;
                }
            };
            var _closure2_slot3 = var1;
            var4 = _closure1_slot7;
            var3 = var4.getRunningVerifiedApplicationIds;
            var3 = var3.bind(var4)();
            var _closure2_slot1 = var3;
            var3 = _closure1_slot38;
            var4 = var3.lastFetched;
            var3 = null;
            if(!(var3 == var4)) { _fun0053_ip = 89; continue _fun0053 }
 57:
            var5 = _closure1_slot2;
            var4 = _closure1_slot3;
            var3 = 59;
            var4 = var4[var3];
            var3 = undefined;
            var4 = var5.bind(var3)(var4);
            var3 = var4.fetchActivityStatistics;
            var3 = var3.bind(var4)();
 89:
            var3 = _closure1_slot38;
            var3 = var3.applicationStatistics;
            var _closure2_slot2 = var3;
            var3 = _closure1_slot24;
            var5 = var3.games;
            var6 = _closure1_slot1;
            var4 = _closure1_slot3;
            var3 = 41;
            var3 = var4[var3];
            var4 = undefined;
            var3 = var6.bind(var4)(var3);
            var5 = var3.bind(var4)(var5);
            var4 = var5.filter;
            var3 = function(arg1) {
                var3 = _closure1_slot0;
                var2 = _closure1_slot3;
                var1 = 60;
                var2 = var2[var1];
                var1 = undefined;
                var3 = var3.bind(var1)(var2);
                var2 = var3.isNSFWGame;
                var1 = arg1;
                var1 = var2.bind(var3)(var1);
                var1 = !var1;
                return var1;
            };
            var5 = var4.bind(var5)(var3);
            var4 = var5.map;
            var3 = function(arg1) {
                var4 = arg1;
                var1 = {};
                var1['game'] = var4;
                var3 = _closure2_slot3;
                var2 = undefined;
                var2 = var3.bind(var2)(var4);
                var1['score'] = var2;
                return var1;
            };
            var5 = var4.bind(var5)(var3);
            var4 = var5.filter;
            var3 = function(arg1) {
                var1 = arg1;
                var2 = var1.score;
                var1 = 0;
                var1 = var2 > var1;
                return var1;
            };
            var5 = var4.bind(var5)(var3);
            var4 = var5.sortBy;
            var3 = function(arg1) {
                var1 = arg1;
                var1 = var1.score;
                return var1;
            };
            var4 = var4.bind(var5)(var3);
            var3 = var4.map;
            var2 = function(arg1) {
                var1 = arg1;
                var1 = var1.game;
                return var1;
            };
            var3 = var3.bind(var4)(var2);
            var2 = var3.reverse;
            var3 = var2.bind(var3)();
            var2 = var3.value;
            var4 = var2.bind(var3)();
            var3 = var4.slice;
            var2 = _closure1_slot44;
            var1 = 0;
            var1 = var3.bind(var4)(var1, var2);
            return var1;
        }
    };
    var7['queryGames'] = var8;
    var8 = function matchSentinel(arg1, arg2, arg3) {
        _fun0055: for(var _fun0055_ip = 0; ; ) switch(_fun0055_ip) {
 0:
            var3 = _closure1_slot52;
            var2 = var3.test;
            var1 = arg2;
            var1 = var2.bind(var3)(var1);
            var1 = !var1;
            if(!var1) { _fun0055_ip = 36; continue _fun0055 }
 26:
            var3 = arg1;
            var2 = arg3;
            var1 = var3 === var2;
 36:
            return var1;
        }
    };
    var7['matchSentinel'] = var8;
    var8 = function hasSameRoleAsUsername(arg1, arg2) {
        _fun0056: for(var _fun0056_ip = 0; ; ) switch(_fun0056_ip) {
 0:
            var6 = arg1;
            var5 = arg2;
            var1 = var5.hasUniqueUsername;
            var1 = var1.bind(var5)();
            if(var1) { _fun0056_ip = 23; continue _fun0056 }
 19:
            var1 = false;
            return var1;
 23:
            var3 = _closure1_slot30;
            var2 = var3.getGuild;
            var1 = var6.getGuildId;
            var1 = var1.bind(var6)();
            var3 = var2.bind(var3)(var1);
            var2 = _closure1_slot60;
            var1 = null;
            if(!(var1 == var3)) { _fun0056_ip = 66; continue _fun0056 }
 60:
            var1 = new Array(0);
            _fun0056_ip = 86; continue _fun0056;
 66:
            var6 = _closure1_slot29;
            var4 = var6.getSortedRoles;
            var3 = var3.id;
            var1 = var4.bind(var6)(var3);
 86:
            var4 = undefined;
            var3 = var2.bind(var4)(var1);
            var2 = var3.bind(var4)();
            var1 = var2.done;
            if(var1) { _fun0056_ip = 165; continue _fun0056 }
 105:
            var1 = var2.value;
            var8 = var1.name;
            var7 = var5.username;
            var6 = var7.startsWith;
            var1 = var8.toLowerCase;
            var1 = var1.bind(var8)();
            var1 = var6.bind(var7)(var1);
            if(var1) { _fun0056_ip = 161; continue _fun0056 }
 144:
            var6 = var3.bind(var4)();
            var1 = var6.done;
            var2 = var6;
            if(var1) { _fun0056_ip = 165; continue _fun0056 }
 159:
            _fun0056_ip = 105; continue _fun0056;
 161:
            var1 = true;
            return var1;
 165:
            var1 = false;
            return var1;
        }
    };
    var7['hasSameRoleAsUsername'] = var8;
    var8 = 61;
    var8 = var10[var8];
    var10 = var9.bind(var1)(var8);
    var9 = var10.fileFinishedImporting;
    var8 = 'utils/AutocompleteUtils.tsx';
    var8 = var9.bind(var10)(var8);
    var3['default'] = var7;
    var7 = function populateInAppSettingNavigationOptions(arg1) {
        var3 = _closure1_slot48;
        var2 = var3.setState;
        var1 = {};
        var4 = arg1;
        var1['options'] = var4;
        var1 = var2.bind(var3)(var1);
        var1 = undefined;
        return var1;
    };
    var3['populateInAppSettingNavigationOptions'] = var7;
    var3['WHITESPACE_REGEX'] = var6;
    var3['calculateScore'] = var5;
    var4 = function getBoosterMap(arg1) {
        _fun0057: for(var _fun0057_ip = 0; ; ) switch(_fun0057_ip) {
 0:
            var12 = arg1;
            var4 = _closure1_slot23;
            var3 = var4.getFrequentlyWithoutFetchingLatest;
            var5 = var3.bind(var4)();
            var6 = var5.reduce;
            var4 = function(arg1, arg2) {
                _fun0058: for(var _fun0058_ip = 0; ; ) switch(_fun0058_ip) {
 0:
                    var1 = arg1;
                    var2 = arg2;
                    var4 = var2.id;
                    var3 = _closure1_slot23;
                    var2 = var3.getScoreWithoutFetchingLatest;
                    var2 = var2.bind(var3)(var4);
                    if(!(var2 > var1)) { _fun0058_ip = 36; continue _fun0058 }
 33:
                    var1 = var2;
 36:
                    return var1;
                }
            };
            var3 = 0;
            var11 = var6.bind(var5)(var4, var3);
            var4 = new Array(0);
            var3 = _closure1_slot45;
            var3 = var3.GUILD;
            if(!(var3 !== var12)) { _fun0057_ip = 186; continue _fun0057 }
 62:
            var3 = _closure1_slot45;
            var3 = var3.USER;
            if(!(var3 !== var12)) { _fun0057_ip = 169; continue _fun0057 }
 76:
            var3 = _closure1_slot45;
            var3 = var3.GROUP_DM;
            if(!(var3 !== var12)) { _fun0057_ip = 152; continue _fun0057 }
 90:
            var3 = _closure1_slot45;
            var3 = var3.TEXT_CHANNEL;
            if(!(var3 !== var12)) { _fun0057_ip = 135; continue _fun0057 }
 104:
            var3 = _closure1_slot45;
            var3 = var3.VOICE_CHANNEL;
            if(!(var3 === var12)) { _fun0057_ip = 201; continue _fun0057 }
 118:
            var6 = var5.filter;
            var3 = function(arg1) {
                _fun0059: for(var _fun0059_ip = 0; ; ) switch(_fun0059_ip) {
 0:
                    var3 = arg1;
                    var1 = _closure1_slot13;
                    var1 = var3 instanceof var1;
                    if(!var1) { _fun0059_ip = 27; continue _fun0059 }
 17:
                    var2 = var3.isGuildVocal;
                    var1 = var2.bind(var3)();
 27:
                    return var1;
                }
            };
            var4 = var6.bind(var5)(var3);
            _fun0057_ip = 201; continue _fun0057;
 135:
            var6 = var5.filter;
            var3 = function(arg1) {
                _fun0060: for(var _fun0060_ip = 0; ; ) switch(_fun0060_ip) {
 0:
                    var2 = arg1;
                    var1 = _closure1_slot13;
                    var1 = var2 instanceof var1;
                    if(!var1) { _fun0060_ip = 33; continue _fun0060 }
 17:
                    var4 = _closure1_slot15;
                    var3 = var2.type;
                    var2 = undefined;
                    var1 = var4.bind(var2)(var3);
 33:
                    return var1;
                }
            };
            var4 = var6.bind(var5)(var3);
            _fun0057_ip = 201; continue _fun0057;
 152:
            var6 = var5.filter;
            var3 = function(arg1) {
                _fun0061: for(var _fun0061_ip = 0; ; ) switch(_fun0061_ip) {
 0:
                    var3 = arg1;
                    var1 = _closure1_slot13;
                    var1 = var3 instanceof var1;
                    if(!var1) { _fun0061_ip = 27; continue _fun0061 }
 17:
                    var2 = var3.isMultiUserDM;
                    var1 = var2.bind(var3)();
 27:
                    return var1;
                }
            };
            var4 = var6.bind(var5)(var3);
            _fun0057_ip = 201; continue _fun0057;
 169:
            var6 = var5.filter;
            var3 = function(arg1) {
                _fun0062: for(var _fun0062_ip = 0; ; ) switch(_fun0062_ip) {
 0:
                    var3 = arg1;
                    var1 = _closure1_slot13;
                    var1 = var3 instanceof var1;
                    if(!var1) { _fun0062_ip = 36; continue _fun0062 }
 17:
                    var3 = var3.type;
                    var2 = _closure1_slot42;
                    var2 = var2.DM;
                    var1 = var3 === var2;
 36:
                    return var1;
                }
            };
            var4 = var6.bind(var5)(var3);
            _fun0057_ip = 201; continue _fun0057;
 186:
            var3 = var5.filter;
            var1 = function(arg1) {
                var3 = _closure1_slot0;
                var2 = _closure1_slot3;
                var1 = 34;
                var2 = var2[var1];
                var1 = undefined;
                var3 = var3.bind(var1)(var2);
                var2 = var3.isGuildRecord;
                var1 = arg1;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var4 = var3.bind(var5)(var1);
 201:
            var1 = {};
            var3 = _closure1_slot60;
            var8 = undefined;
            var10 = var3.bind(var8)(var4);
            var4 = var10.bind(var8)();
            var3 = var4.done;
            var7 = 1;
            var9 = var4;
            var6 = undefined;
            var5 = undefined;
            var4 = undefined;
            if(var3) { _fun0057_ip = 529; continue _fun0057 }
 241:
            var17 = var9.value;
            var14 = var17.id;
            var13 = _closure1_slot23;
            var3 = var13.getScoreWithoutFetchingLatest;
            var3 = var3.bind(var13)(var14);
            var13 = _closure1_slot45;
            var13 = var13.USER;
            if(!(var12 === var13)) { _fun0057_ip = 291; continue _fun0057 }
 280:
            var13 = _closure1_slot18;
            var13 = var17 instanceof var13;
            if(var13) { _fun0057_ip = 317; continue _fun0057 }
 291:
            var13 = var3 / var11;
            var13 = var7 + var13;
            var1[var14] = var13;
            var15 = var6;
            var14 = var5;
            var13 = var4;
            _fun0057_ip = 502; continue _fun0057;
 317:
            var18 = var17.type;
            var16 = _closure1_slot42;
            var16 = var16.DM;
            if(!(var18 !== var16)) { _fun0057_ip = 471; continue _fun0057 }
 339:
            var18 = var17.type;
            var16 = _closure1_slot42;
            var16 = var16.GROUP_DM;
            var15 = var6;
            var14 = var5;
            var13 = var4;
            if(!(var18 === var16)) { _fun0057_ip = 502; continue _fun0057 }
 370:
            var16 = var17.recipients;
            var20 = var16.length;
            var18 = _closure1_slot60;
            var16 = var17.recipients;
            var19 = var18.bind(var8)(var16);
            var21 = var19.bind(var8)();
            var16 = var21.done;
            var18 = var21;
            var15 = var18;
            var14 = var20;
            var13 = var19;
            if(var16) { _fun0057_ip = 502; continue _fun0057 }
 420:
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
            if(var16) { _fun0057_ip = 502; continue _fun0057 }
 469:
            _fun0057_ip = 420; continue _fun0057;
 471:
            var16 = var17.getRecipientId;
            var16 = var16.bind(var17)();
            var3 = var3 / var11;
            var3 = var7 + var3;
            var1[var16] = var3;
            var15 = var6;
            var14 = var5;
            var13 = var4;
 502:
            var16 = var10.bind(var8)();
            var3 = var16.done;
            var6 = var15;
            var5 = var14;
            var4 = var13;
            var9 = var16;
            if(!var3) { _fun0057_ip = 241; continue _fun0057 }
 529:
            var4 = _closure1_slot60;
            var5 = _closure1_slot34;
            var3 = var5.getFriendIDs;
            var3 = var3.bind(var5)();
            var9 = var4.bind(var8)(var3);
            var4 = var9.bind(var8)();
            var3 = var4.done;
            var5 = 0.2;
            var6 = null;
            if(var3) { _fun0057_ip = 621; continue _fun0057 }
 576:
            var10 = var4.value;
            var11 = var1[var10];
            var12 = var6 != var11;
            var3 = var7;
            if(!var12) { _fun0057_ip = 598; continue _fun0057 }
 595:
            var3 = var11;
 598:
            var3 = var3 + var5;
            var1[var10] = var3;
            var10 = var9.bind(var8)();
            var3 = var10.done;
            var4 = var10;
            if(!var3) { _fun0057_ip = 576; continue _fun0057 }
 621:
            var3 = _closure1_slot60;
            var4 = _closure1_slot22;
            var2 = var4.getDMUserIds;
            var2 = var2.bind(var4)();
            var5 = var3.bind(var8)(var2);
            var3 = var5.bind(var8)();
            var2 = var3.done;
            var4 = 0.1;
            if(var2) { _fun0057_ip = 711; continue _fun0057 }
 666:
            var9 = var3.value;
            var10 = var1[var9];
            var11 = var6 != var10;
            var2 = var7;
            if(!var11) { _fun0057_ip = 688; continue _fun0057 }
 685:
            var2 = var10;
 688:
            var2 = var2 + var4;
            var1[var9] = var2;
            var9 = var5.bind(var8)();
            var2 = var9.done;
            var3 = var9;
            if(!var2) { _fun0057_ip = 666; continue _fun0057 }
 711:
            return var1;
        }
    };
    var3['getBoosterMap'] = var4;
    var3['COMMAND_SUPPORTED_CHANNEL_TYPE_KEYS'] = var2;
    return var1;
})();