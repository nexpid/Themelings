// app/modules/coded_links/findCodedLinks.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
        var11 = require;
        var18 = metroImportDefault;
        var3 = exports;
        var12 = dependencyMap;
        var _closure1_slot0 = var11;
        var _closure1_slot1 = var18;
        var _closure1_slot2 = var12;
        var1 = function _createForOfIteratorHelperLoose(arg1, arg2) {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                var3 = arg1;
                var _closure2_slot0 = var3;
                var5 = global;
                var2 = var5.Symbol;
                var4 = 'undefined';
                var2 = typeof var2;
                var2 = var4 !== var2;
                if(!var2) { _fun0002_ip = 2; continue _fun0002 }
case 3:
                var4 = var5.Symbol;
                var4 = var4.iterator;
                var2 = var3[var4];
case 2:
                if(var2) { _fun0002_ip = 4; continue _fun0002 }
case 5:
                var2 = var3.@@iterator;
case 4:
                if(var2) { _fun0002_ip = 6; continue _fun0002 }
case 7:
                var6 = var5.Array;
                var4 = var6.isArray;
                var6 = var4.bind(var6)(var3);
                var4 = var2;
                if(var6) { _fun0002_ip = 8; continue _fun0002 }
case 9:
                var8 = undefined;
                var6 = undefined;
                if(!var3) { _fun0002_ip = 10; continue _fun0002 }
case 11:
                var9 = 'string';
                var7 = typeof var3;
                if(!(var9 !== var7)) { _fun0002_ip = 12; continue _fun0002 }
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
                if(!var7) { _fun0002_ip = 14; continue _fun0002 }
case 15:
                var7 = var3.constructor;
case 14:
                var10 = var9;
                if(!var7) { _fun0002_ip = 16; continue _fun0002 }
case 17:
                var7 = var3.constructor;
                var10 = var7.name;
case 16:
                var7 = 'Map';
                if(!(var7 !== var10)) { _fun0002_ip = 18; continue _fun0002 }
case 19:
                var7 = 'Set';
                if(!(var7 !== var10)) { _fun0002_ip = 18; continue _fun0002 }
case 20:
                var7 = 'Arguments';
                if(!(var7 !== var10)) { _fun0002_ip = 21; continue _fun0002 }
case 22:
                var9 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
                var7 = var9.test;
                var9 = var7.bind(var9)(var10);
                var7 = undefined;
                if(!var9) { _fun0002_ip = 23; continue _fun0002 }
case 21:
                var9 = _closure1_slot28;
                var7 = var9.bind(var8)(var3, var8);
case 23:
                _fun0002_ip = 24; continue _fun0002;
case 18:
                var10 = var5.Array;
                var9 = var10.from;
                var7 = var9.bind(var10)(var3);
case 24:
                var6 = var7;
                _fun0002_ip = 10; continue _fun0002;
case 12:
                var7 = _closure1_slot28;
                var6 = var7.bind(var8)(var3, var8);
case 10:
                var4 = var6;
                if(var4) { _fun0002_ip = 8; continue _fun0002 }
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
                if(!var4) { _fun0002_ip = 26; continue _fun0002 }
case 27:
                _closure2_slot0 = var4;
case 26:
                var4 = 0;
                var _closure2_slot1 = var4;
                var1 = function() {
                    _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                        var2 = _closure2_slot1;
                        var1 = _closure2_slot0;
                        var1 = var1.length;
                        if(!(!(var2 >= var1))) { _fun0003_ip = 28; continue _fun0003 }
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
                        _fun0003_ip = 30; continue _fun0003;
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
        var _closure1_slot27 = var1;
        var1 = function _arrayLikeToArray(arg1, arg2) {
            _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                var4 = arg1;
                var1 = null;
                var3 = undefined;
                var1 = var1 == var3;
                if(var1) { _fun0004_ip = 31; continue _fun0004 }
case 32:
                var2 = var4.length;
                var1 = var3 > var2;
case 31:
                var2 = undefined;
                if(!var1) { _fun0004_ip = 33; continue _fun0004 }
case 34:
                var2 = var4.length;
case 33:
                var1 = global;
                var1 = var1.Array;
                var1 = var1.bind(var3)(var2);
                var3 = 0;
                var5 = var3 < var2;
                if(!var5) { _fun0004_ip = 35; continue _fun0004 }
case 4:
                var5 = var4[var3];
                var1[var3] = var5;
                var3 = var3 + 1;
                if(var3 < var2) { _fun0004_ip = 4; continue _fun0004 }
case 35:
                return var1;
            }
        };
        var _closure1_slot28 = var1;
        var16 = function getHost(arg1) {
            _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                var5 = arg1;
                var2 = null;
                if(!(var2 != var5)) { _fun0005_ip = 13; continue _fun0005 }
case 36:
                var3 = var5.indexOf;
                var1 = '/';
                var3 = var3.bind(var5)(var1);
                var1 = 0;
                if(!(!(var3 >= var1))) { _fun0005_ip = 37; continue _fun0005 }
case 3:
                var1 = {};
                var1['host'] = var5;
                var1['pathPrefix'] = var2;
                return var1;
case 37:
                var2 = _closure1_slot0;
                var3 = _closure1_slot2;
                var1 = 3;
                var1 = var3[var1];
                var4 = undefined;
                var3 = var2.bind(var4)(var1);
                var2 = var3.parse;
                var1 = true;
                var2 = var2.bind(var3)(var5, var4, var1);
                var1 = {};
                var3 = var2.host;
                var1['host'] = var3;
                var2 = var2.pathname;
                var1['pathPrefix'] = var2;
                return var1;
case 13:
                var1 = {'host': null, 'pathPrefix': null};
                return var1;
            }
        };
        var1 = function isHostMatch(arg1, arg2) {
            _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                var1 = arg2;
                var5 = var1.host;
                var1 = null;
                var1 = var1 == var5;
                var2 = undefined;
                if(var1) { _fun0006_ip = 5; continue _fun0006 }
case 29:
                var4 = var5.replace;
                var3 = /^www[.]/i;
                var1 = '';
                var2 = var4.bind(var5)(var3, var1);
case 5:
                var1 = arg1;
                var1 = var1.host;
                var1 = var2 === var1;
                return var1;
            }
        };
        var _closure1_slot29 = var1;
        var1 = function remainingPathFromHostMatch(arg1, arg2) {
            _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                var2 = arg1;
                var3 = arg2;
                var4 = _closure1_slot29;
                var1 = undefined;
                var4 = var4.bind(var1)(var2, var3);
                var1 = null;
                if(var4) { _fun0007_ip = 34; continue _fun0007 }
case 38:
                return var1;
case 34:
                var4 = var3.pathname;
                var6 = var1 != var4;
                var3 = '';
                var5 = var3;
                if(!var6) { _fun0007_ip = 39; continue _fun0007 }
case 40:
                var5 = var4;
case 39:
                var4 = var2.pathPrefix;
                var6 = var1 != var4;
                var2 = var3;
                if(!var6) { _fun0007_ip = 35; continue _fun0007 }
case 30:
                var2 = var4;
case 35:
                var4 = var5.startsWith;
                var4 = var4.bind(var5)(var2);
                if(var4) { _fun0007_ip = 9; continue _fun0007 }
case 41:
                return var1;
case 9:
                var4 = var5.substring;
                var2 = var2.length;
                var2 = var4.bind(var5)(var2);
                var1 = null;
                if(!(var3 !== var2)) { _fun0007_ip = 42; continue _fun0007 }
case 43:
                var1 = var2;
case 42:
                return var1;
            }
        };
        var _closure1_slot30 = var1;
        var6 = function getPathsFromURL(arg1) {
            _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                var2 = _closure1_slot34;
                var6 = undefined;
                var1 = arg1;
                var5 = var2.bind(var6)(var1);
                var4 = null;
                if(!(var4 != var5)) { _fun0008_ip = 44; continue _fun0008 }
case 38:
                var1 = var5.pathname;
                if(!(var4 != var1)) { _fun0008_ip = 44; continue _fun0008 }
case 45:
                var1 = {};
                var1['url'] = var5;
                var7 = _closure1_slot30;
                var2 = _closure1_slot17;
                var2 = var7.bind(var6)(var2, var5);
                var1['inviteHostRemainingPath'] = var2;
                var2 = _closure1_slot18;
                var2 = var7.bind(var6)(var2, var5);
                var1['templateHostRemainingPath'] = var2;
                var2 = _closure1_slot19;
                var2 = var7.bind(var6)(var2, var5);
                if(!(var4 == var2)) { _fun0008_ip = 46; continue _fun0008 }
case 47:
                var8 = _closure1_slot30;
                var7 = _closure1_slot20;
                var2 = var8.bind(var6)(var7, var5);
case 46:
                if(!(var4 == var2)) { _fun0008_ip = 48; continue _fun0008 }
case 42:
                var8 = _closure1_slot30;
                var7 = _closure1_slot21;
                var2 = var8.bind(var6)(var7, var5);
case 48:
                if(!(var4 == var2)) { _fun0008_ip = 49; continue _fun0008 }
case 50:
                var8 = _closure1_slot30;
                var7 = _closure1_slot22;
                var2 = var8.bind(var6)(var7, var5);
case 49:
                if(!(var4 == var2)) { _fun0008_ip = 51; continue _fun0008 }
case 52:
                var4 = _closure1_slot30;
                var3 = _closure1_slot23;
                var2 = var4.bind(var6)(var3, var5);
case 51:
                var1['primaryHostRemainingPath'] = var2;
                _fun0008_ip = 53; continue _fun0008;
case 44:
                var1 = {'url': null, 'inviteHostRemainingPath': null, 'templateHostRemainingPath': null, 'primaryHostRemainingPath': null};
case 53:
                return var1;
            }
        };
        var _closure1_slot31 = var6;
        var9 = function findCodedLinks(arg1) {
            _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                var8 = arg1;
                var5 = null;
                if(!(var5 != var8)) { _fun0009_ip = 23; continue _fun0009 }
case 32:
                var1 = global;
                var1 = var1.Set;
                var2 = var1.prototype;
                var2 = Object.create(var2, {constructor: {value: var1}});
                var14 = var2;
                var1 = new var14[var1](var13);
                var1 = var1 instanceof Object ? var1 : var2;
                var _closure2_slot0 = var1;
                var1 = new Array(0);
                var _closure2_slot1 = var1;
                var7 = var8.replace;
                var6 = _closure1_slot24;
                var3 = function(arg1, arg2, arg3, arg4) {
                    _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
                        var1 = arg1;
                        var3 = null;
                        var2 = arg3;
                        if(!(var3 == var2)) { _fun0010_ip = 40; continue _fun0010 }
case 54:
                        var2 = global;
                        var2 = var2.HermesInternal;
                        var6 = var2.concat;
                        var5 = '';
                        var4 = arg2;
                        var3 = 'http://';
                        var2 = arg4;
                        var1 = var6.bind(var5)(var4, var3, var2);
case 40:
                        return var1;
                    }
                };
                var9 = var7.bind(var8)(var6, var3);
                var3 = _closure1_slot25;
                var7 = undefined;
                var8 = var3.bind(var7)(var9);
                var6 = var8.match;
                var10 = _closure1_slot1;
                var11 = _closure1_slot2;
                var3 = 7;
                var3 = var11[var3];
                var3 = var10.bind(var7)(var3);
                var3 = var3.URL_REGEX;
                var6 = var6.bind(var8)(var3);
                var8 = var9.match;
                var3 = _closure1_slot16;
                var3 = var8.bind(var9)(var3);
                var8 = var6;
                if(!(var5 == var8)) { _fun0009_ip = 55; continue _fun0009 }
case 52:
                var8 = new Array(0);
case 55:
                var6 = var8.concat;
                if(!(var5 == var3)) { _fun0009_ip = 56; continue _fun0009 }
case 57:
                var3 = new Array(0);
case 56:
                var3 = var6.bind(var8)(var3);
                if(!(var5 != var3)) { _fun0009_ip = 58; continue _fun0009 }
case 59:
                var5 = var3.length;
                var6 = 0;
                if(!(var6 !== var5)) { _fun0009_ip = 58; continue _fun0009 }
case 60:
                var5 = function _loop(arg1) {
                    _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
                        var9 = arg1;
                        var _closure3_slot0 = var9;
                        var1 = _closure2_slot1;
                        var1 = var1.length;
                        var15 = 10;
                        if(!(!(var1 >= var15))) { _fun0011_ip = 61; continue _fun0011 }
case 62:
                        var1 = _closure1_slot31;
                        var2 = undefined;
                        var1 = var1.bind(var2)(var9);
                        var7 = var1.url;
                        var10 = var1.inviteHostRemainingPath;
                        var11 = var1.templateHostRemainingPath;
                        var8 = var1.primaryHostRemainingPath;
                        var6 = null;
                        if(!(var6 != var7)) { _fun0011_ip = 63; continue _fun0011 }
case 64:
                        var1 = var7.pathname;
                        if(!(var6 != var1)) { _fun0011_ip = 63; continue _fun0011 }
case 65:
                        var5 = function add(arg1, arg2) {
                            _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
case 0:
                                var4 = arg2;
                                var3 = _closure2_slot0;
                                var2 = var3.has;
                                var2 = var2.bind(var3)(var4);
                                if(var2) { _fun0012_ip = 66; continue _fun0012 }
case 31:
                                var3 = _closure2_slot0;
                                var2 = var3.add;
                                var2 = var2.bind(var3)(var4);
                                var3 = _closure2_slot1;
                                var2 = var3.push;
                                var1 = {};
                                var5 = arg1;
                                var1['type'] = var5;
                                var1['code'] = var4;
                                var4 = _closure3_slot0;
                                var1['url'] = var4;
                                var1 = var2.bind(var3)(var1);
case 66:
                                var1 = undefined;
                                return var1;
                            }
                        };
                        var3 = _closure1_slot0;
                        var1 = _closure1_slot2;
                        var13 = 8;
                        var1 = var1[var13];
                        var3 = var3.bind(var2)(var1);
                        var1 = var3.isBuildOverrideLink;
                        var1 = var1.bind(var3)(var9);
                        if(!var1) { _fun0011_ip = 67; continue _fun0011 }
case 50:
                        var3 = _closure1_slot0;
                        var14 = _closure1_slot2;
                        var1 = 6;
                        var1 = var14[var1];
                        var1 = var3.bind(var2)(var1);
                        var1 = var1.CodedLinkType;
                        var1 = var1.BUILD_OVERRIDE;
                        var1 = var5.bind(var2)(var1, var9);
case 67:
                        var3 = _closure1_slot0;
                        var1 = _closure1_slot2;
                        var1 = var1[var13];
                        var3 = var3.bind(var2)(var1);
                        var1 = var3.isManualBuildOverrideLink;
                        var1 = var1.bind(var3)(var9);
                        if(!var1) { _fun0011_ip = 68; continue _fun0011 }
case 69:
                        var3 = _closure1_slot0;
                        var13 = _closure1_slot2;
                        var1 = 6;
                        var1 = var13[var1];
                        var1 = var3.bind(var2)(var1);
                        var1 = var1.CodedLinkType;
                        var1 = var1.MANUAL_BUILD_OVERRIDE;
                        var1 = var5.bind(var2)(var1, var9);
case 68:
                        var3 = var6 == var10;
                        var1 = undefined;
                        if(var3) { _fun0011_ip = 70; continue _fun0011 }
case 71:
                        var13 = var10.match;
                        var3 = _closure1_slot4;
                        var1 = var13.bind(var10)(var3);
case 70:
                        if(!(var6 != var1)) { _fun0011_ip = 72; continue _fun0011 }
case 73:
                        var3 = var7.protocol;
                        var1 = 'https:';
                        if(!(var1 !== var3)) { _fun0011_ip = 74; continue _fun0011 }
case 75:
                        var3 = var7.protocol;
                        var1 = 'http:';
                        if(!(var1 === var3)) { _fun0011_ip = 72; continue _fun0011 }
case 74:
                        var3 = _closure1_slot0;
                        var13 = _closure1_slot2;
                        var1 = 9;
                        var1 = var13[var1];
                        var14 = var3.bind(var2)(var1);
                        var13 = var14.generateInviteKeyFromUrlParams;
                        var3 = var10.substring;
                        var1 = 1;
                        var10 = var3.bind(var10)(var1);
                        var3 = var7.search;
                        var3 = var13.bind(var14)(var10, var3);
                        var13 = _closure1_slot3;
                        var10 = var13.getInvite;
                        var14 = var10.bind(var13)(var3);
                        if(!(var6 != var14)) { _fun0011_ip = 76; continue _fun0011 }
case 77:
                        var13 = _closure1_slot0;
                        var10 = _closure1_slot2;
                        var10 = var10[var15];
                        var13 = var13.bind(var2)(var10);
                        var10 = var13.isEmbeddedApplicationInvite;
                        var10 = var10.bind(var13)(var14);
                        if(var10) { _fun0011_ip = 78; continue _fun0011 }
case 76:
                        var13 = var9.includes;
                        var10 = '\\';
                        var10 = var13.bind(var9)(var10);
                        if(var10) { _fun0011_ip = 79; continue _fun0011 }
case 80:
                        var13 = _closure1_slot0;
                        var14 = _closure1_slot2;
                        var10 = 6;
                        var10 = var14[var10];
                        var10 = var13.bind(var2)(var10);
                        var10 = var10.CodedLinkType;
                        var10 = var10.INVITE;
                        var10 = var5.bind(var2)(var10, var3);
                        _fun0011_ip = 72; continue _fun0011;
case 79:
                        return var1;
case 78:
                        var10 = _closure1_slot0;
                        var13 = _closure1_slot2;
                        var1 = 6;
                        var1 = var13[var1];
                        var1 = var10.bind(var2)(var1);
                        var1 = var1.CodedLinkType;
                        var1 = var1.EMBEDDED_ACTIVITY_INVITE;
                        var1 = var5.bind(var2)(var1, var3);
case 72:
                        var3 = var6 == var11;
                        var1 = undefined;
                        if(var3) { _fun0011_ip = 81; continue _fun0011 }
case 82:
                        var10 = var11.match;
                        var3 = _closure1_slot4;
                        var1 = var10.bind(var11)(var3);
case 81:
                        if(!(var6 != var1)) { _fun0011_ip = 83; continue _fun0011 }
case 84:
                        var3 = _closure1_slot0;
                        var10 = _closure1_slot2;
                        var1 = 6;
                        var1 = var10[var1];
                        var1 = var3.bind(var2)(var1);
                        var1 = var1.CodedLinkType;
                        var3 = var1.TEMPLATE;
                        var10 = var11.substring;
                        var1 = 1;
                        var1 = var10.bind(var11)(var1);
                        var1 = var5.bind(var2)(var3, var1);
case 83:
                        var1 = var6 == var8;
                        var14 = undefined;
                        if(var1) { _fun0011_ip = 85; continue _fun0011 }
case 86:
                        var3 = var8.match;
                        var1 = _closure1_slot6;
                        var14 = var3.bind(var8)(var1);
case 85:
                        if(!(var6 != var14)) { _fun0011_ip = 87; continue _fun0011 }
case 88:
                        var1 = 1;
                        var10 = var14[var1];
                        var3 = var10.toUpperCase;
                        var10 = var3.bind(var10)();
                        var11 = _closure1_slot0;
                        var3 = _closure1_slot2;
                        var13 = 6;
                        var3 = var3[var13];
                        var3 = var11.bind(var2)(var3);
                        var3 = var3.CodedLinkType;
                        var3 = var3.INVITE;
                        if(!(var10 !== var3)) { _fun0011_ip = 89; continue _fun0011 }
case 90:
                        var3 = 2;
                        var3 = var14[var3];
                        var3 = var5.bind(var2)(var10, var3);
                        _fun0011_ip = 87; continue _fun0011;
case 89:
                        var10 = var9.includes;
                        var3 = '\\';
                        var3 = var10.bind(var9)(var3);
                        if(var3) { _fun0011_ip = 91; continue _fun0011 }
case 92:
                        var11 = _closure1_slot0;
                        var3 = _closure1_slot2;
                        var10 = 9;
                        var10 = var3[var10];
                        var16 = var11.bind(var2)(var10);
                        var15 = var16.generateInviteKeyFromUrlParams;
                        var10 = 2;
                        var14 = var14[var10];
                        var10 = var7.search;
                        var10 = var15.bind(var16)(var14, var10);
                        var3 = var3[var13];
                        var3 = var11.bind(var2)(var3);
                        var3 = var3.CodedLinkType;
                        var3 = var3.INVITE;
                        var3 = var5.bind(var2)(var3, var10);
case 87:
                        var10 = var6 == var8;
                        var3 = undefined;
                        if(var10) { _fun0011_ip = 93; continue _fun0011 }
case 94:
                        var11 = var8.match;
                        var10 = _closure1_slot5;
                        var3 = var11.bind(var8)(var10);
case 93:
                        if(!(var6 != var3)) { _fun0011_ip = 95; continue _fun0011 }
case 96:
                        var10 = _closure1_slot0;
                        var11 = _closure1_slot2;
                        var3 = 6;
                        var3 = var11[var3];
                        var3 = var10.bind(var2)(var3);
                        var3 = var3.CodedLinkType;
                        var10 = var3.CHANNEL_LINK;
                        var13 = var8.replace;
                        var11 = '/channels/';
                        var3 = '';
                        var3 = var13.bind(var8)(var11, var3);
                        var3 = var5.bind(var2)(var10, var3);
case 95:
                        var11 = var7.pathname;
                        var3 = var6 == var11;
                        var14 = null;
                        if(var3) { _fun0011_ip = 97; continue _fun0011 }
case 98:
                        var10 = var11.match;
                        var3 = _closure1_slot7;
                        var13 = var10.bind(var11)(var3);
                        var10 = var6 != var13;
                        var3 = null;
                        if(!var10) { _fun0011_ip = 99; continue _fun0011 }
case 100:
                        var10 = var13.length;
                        var11 = 4;
                        var10 = var10 >= var11;
                        var3 = null;
                        if(!var10) { _fun0011_ip = 99; continue _fun0011 }
case 101:
                        var10 = {};
                        var15 = 1;
                        var15 = var13[var15];
                        var10['guildId'] = var15;
                        var15 = 2;
                        var15 = var13[var15];
                        var10['guildEventId'] = var15;
                        var11 = var13[var11];
                        var10['recurrenceId'] = var11;
                        var3 = var10;
case 99:
                        var14 = var3;
case 97:
                        if(!(var6 != var14)) { _fun0011_ip = 102; continue _fun0011 }
case 103:
                        var10 = _closure1_slot0;
                        var11 = _closure1_slot2;
                        var3 = 6;
                        var3 = var11[var3];
                        var3 = var10.bind(var2)(var3);
                        var3 = var3.CodedLinkType;
                        var10 = var3.EVENT;
                        var17 = var14.guildId;
                        var16 = var14.guildEventId;
                        var13 = global;
                        var3 = var13.HermesInternal;
                        var11 = var3.concat;
                        var3 = '';
                        var15 = '-';
                        var11 = var11.bind(var3)(var17, var15, var16);
                        var16 = var14.recurrenceId;
                        var16 = var6 != var16;
                        if(!var16) { _fun0011_ip = 104; continue _fun0011 }
case 105:
                        var14 = var14.recurrenceId;
                        var13 = var13.HermesInternal;
                        var13 = var13.concat;
                        var3 = var13.bind(var15)(var14);
case 104:
                        var3 = var11 + var3;
                        var3 = var5.bind(var2)(var10, var3);
case 102:
                        var10 = var6 == var8;
                        var3 = undefined;
                        if(var10) { _fun0011_ip = 106; continue _fun0011 }
case 107:
                        var11 = var8.match;
                        var10 = _closure1_slot14;
                        var3 = var11.bind(var8)(var10);
case 106:
                        if(!(var6 != var3)) { _fun0011_ip = 108; continue _fun0011 }
case 109:
                        var3 = var7.query;
                        if(!(var6 != var3)) { _fun0011_ip = 108; continue _fun0011 }
case 110:
                        var10 = _closure1_slot0;
                        var11 = _closure1_slot2;
                        var3 = 11;
                        var3 = var11[var3];
                        var11 = var10.bind(var2)(var3);
                        var10 = var11.parseOAuth2AuthorizeProps;
                        var3 = var7.query;
                        var11 = var10.bind(var11)(var3);
                        var10 = var11.clientId;
                        var3 = var6 == var10;
                        if(var3) { _fun0011_ip = 111; continue _fun0011 }
case 112:
                        var13 = '';
                        var3 = var13 === var10;
case 111:
                        if(var3) { _fun0011_ip = 113; continue _fun0011 }
case 114:
                        var14 = var11.scopes;
                        var11 = var6 != var14;
                        if(!var11) { _fun0011_ip = 115; continue _fun0011 }
case 116:
                        var13 = var14.some;
                        var12 = function(arg1) {
                            var3 = _closure1_slot0;
                            var2 = _closure1_slot2;
                            var1 = 12;
                            var2 = var2[var1];
                            var1 = undefined;
                            var1 = var3.bind(var1)(var2);
                            var1 = var1.OAuth2Scopes;
                            var2 = var1.APPLICATIONS_COMMANDS;
                            var1 = arg1;
                            var1 = var1 !== var2;
                            return var1;
                        };
                        var11 = var13.bind(var14)(var12);
case 115:
                        var3 = var11;
case 113:
                        if(var3) { _fun0011_ip = 108; continue _fun0011 }
case 117:
                        var11 = _closure1_slot0;
                        var12 = _closure1_slot2;
                        var3 = 6;
                        var3 = var12[var3];
                        var3 = var11.bind(var2)(var3);
                        var3 = var3.CodedLinkType;
                        var3 = var3.APP_OAUTH2_LINK;
                        var3 = var5.bind(var2)(var3, var10);
case 108:
                        var3 = var6 == var8;
                        var10 = undefined;
                        if(var3) { _fun0011_ip = 118; continue _fun0011 }
case 119:
                        var11 = var8.match;
                        var3 = _closure1_slot8;
                        var10 = var11.bind(var8)(var3);
case 118:
                        if(!(var6 != var10)) { _fun0011_ip = 120; continue _fun0011 }
case 121:
                        var3 = 2;
                        var10 = var10[var3];
                        var11 = _closure1_slot0;
                        var12 = _closure1_slot2;
                        var3 = 6;
                        var3 = var12[var3];
                        var3 = var11.bind(var2)(var3);
                        var3 = var3.CodedLinkType;
                        var3 = var3.APP_DIRECTORY_PROFILE;
                        var3 = var5.bind(var2)(var3, var10);
case 120:
                        var3 = var6 == var8;
                        var10 = undefined;
                        if(var3) { _fun0011_ip = 122; continue _fun0011 }
case 123:
                        var11 = var8.match;
                        var3 = _closure1_slot9;
                        var10 = var11.bind(var8)(var3);
case 122:
                        if(!(var6 != var10)) { _fun0011_ip = 124; continue _fun0011 }
case 125:
                        var3 = 2;
                        var14 = var10[var3];
                        var3 = 3;
                        var13 = var10[var3];
                        if(!(var6 == var13)) { _fun0011_ip = 126; continue _fun0011 }
case 127:
                        var10 = _closure1_slot0;
                        var11 = _closure1_slot2;
                        var3 = 6;
                        var3 = var11[var3];
                        var3 = var10.bind(var2)(var3);
                        var3 = var3.CodedLinkType;
                        var3 = var3.APP_DIRECTORY_STOREFRONT;
                        var3 = var5.bind(var2)(var3, var14);
                        _fun0011_ip = 124; continue _fun0011;
case 126:
                        var11 = _closure1_slot0;
                        var12 = _closure1_slot2;
                        var3 = 13;
                        var3 = var12[var3];
                        var10 = var11.bind(var2)(var3);
                        var3 = var10.makeStorefrontSKUCodedLink;
                        var10 = var3.bind(var10)(var14, var13);
                        var3 = 6;
                        var3 = var12[var3];
                        var3 = var11.bind(var2)(var3);
                        var3 = var3.CodedLinkType;
                        var3 = var3.APP_DIRECTORY_STOREFRONT_SKU;
                        var3 = var5.bind(var2)(var3, var10);
case 124:
                        var3 = var6 == var8;
                        var10 = undefined;
                        if(var3) { _fun0011_ip = 128; continue _fun0011 }
case 129:
                        var11 = var8.match;
                        var3 = _closure1_slot10;
                        var10 = var11.bind(var8)(var3);
case 128:
                        if(!(var6 != var10)) { _fun0011_ip = 130; continue _fun0011 }
case 131:
                        var3 = 1;
                        var10 = var10[var3];
                        var11 = _closure1_slot0;
                        var12 = _closure1_slot2;
                        var3 = 6;
                        var3 = var12[var3];
                        var3 = var11.bind(var2)(var3);
                        var3 = var3.CodedLinkType;
                        var3 = var3.ACTIVITY_BOOKMARK;
                        var3 = var5.bind(var2)(var3, var10);
case 130:
                        var3 = var6 == var8;
                        var11 = undefined;
                        if(var3) { _fun0011_ip = 132; continue _fun0011 }
case 133:
                        var10 = var8.match;
                        var3 = _closure1_slot11;
                        var11 = var10.bind(var8)(var3);
case 132:
                        if(!(var6 != var11)) { _fun0011_ip = 134; continue _fun0011 }
case 135:
                        var10 = _closure1_slot0;
                        var12 = _closure1_slot2;
                        var3 = 6;
                        var3 = var12[var3];
                        var3 = var10.bind(var2)(var3);
                        var3 = var3.CodedLinkType;
                        var10 = var3.GUILD_PRODUCT;
                        var3 = 1;
                        var14 = var11[var3];
                        var3 = 2;
                        var13 = var11[var3];
                        var3 = global;
                        var3 = var3.HermesInternal;
                        var12 = var3.concat;
                        var11 = '';
                        var3 = '-';
                        var3 = var12.bind(var11)(var14, var3, var13);
                        var3 = var5.bind(var2)(var10, var3);
case 134:
                        var3 = var6 == var8;
                        var11 = undefined;
                        if(var3) { _fun0011_ip = 136; continue _fun0011 }
case 137:
                        var10 = var8.match;
                        var3 = _closure1_slot12;
                        var11 = var10.bind(var8)(var3);
case 136:
                        if(!(var6 != var11)) { _fun0011_ip = 138; continue _fun0011 }
case 139:
                        var10 = _closure1_slot0;
                        var12 = _closure1_slot2;
                        var3 = 6;
                        var3 = var12[var3];
                        var3 = var10.bind(var2)(var3);
                        var3 = var3.CodedLinkType;
                        var10 = var3.SERVER_SHOP;
                        var3 = 1;
                        var3 = var11[var3];
                        var3 = var5.bind(var2)(var10, var3);
case 138:
                        var3 = _closure1_slot33;
                        var9 = var3.bind(var2)(var9);
                        if(!(var6 != var9)) { _fun0011_ip = 140; continue _fun0011 }
case 141:
                        var10 = _closure1_slot0;
                        var11 = _closure1_slot2;
                        var3 = 6;
                        var3 = var11[var3];
                        var3 = var10.bind(var2)(var3);
                        var3 = var3.CodedLinkType;
                        var3 = var3.QUESTS_EMBED;
                        var3 = var5.bind(var2)(var3, var9);
case 140:
                        var3 = '/shop';
                        if(!(var3 === var8)) { _fun0011_ip = 142; continue _fun0011 }
case 143:
                        var3 = var7.query;
                        var8 = var6 != var3;
                        var3 = null;
                        if(!var8) { _fun0011_ip = 144; continue _fun0011 }
case 145:
                        var9 = _closure1_slot0;
                        var10 = _closure1_slot2;
                        var8 = 14;
                        var8 = var10[var8];
                        var10 = var9.bind(var2)(var8);
                        var9 = var10.parse;
                        var8 = var7.query;
                        var8 = var9.bind(var10)(var8);
                        var3 = var8.tab;
case 144:
                        var9 = var7.hash;
                        var7 = var6 == var9;
                        var10 = undefined;
                        if(var7) { _fun0011_ip = 146; continue _fun0011 }
case 147:
                        var8 = var9.match;
                        var7 = _closure1_slot15;
                        var10 = var8.bind(var9)(var7);
case 146:
                        var7 = _closure1_slot0;
                        var8 = _closure1_slot2;
                        var4 = 6;
                        var4 = var8[var4];
                        var4 = var7.bind(var2)(var4);
                        var4 = var4.CodedLinkType;
                        var4 = var4.COLLECTIBLES_SHOP;
                        var7 = var6 != var3;
                        var9 = '';
                        var8 = var9;
                        if(!var7) { _fun0011_ip = 148; continue _fun0011 }
case 149:
                        var8 = var3;
case 148:
                        var7 = var6 == var10;
                        var3 = undefined;
                        if(var7) { _fun0011_ip = 150; continue _fun0011 }
case 151:
                        var7 = 1;
                        var3 = var10[var7];
case 150:
                        var6 = var6 != var3;
                        var7 = var9;
                        if(!var6) { _fun0011_ip = 152; continue _fun0011 }
case 153:
                        var7 = var3;
case 152:
                        var3 = global;
                        var3 = var3.HermesInternal;
                        var6 = var3.concat;
                        var3 = '-';
                        var3 = var6.bind(var9)(var8, var3, var7);
                        var3 = var5.bind(var2)(var4, var3);
case 142:
                        return var2;
case 91:
                        return var1;
case 63:
                        var1 = 1;
                        return var1;
case 61:
                        var1 = 0;
                        return var1;
                    }
                };
                var2 = _closure1_slot27;
                var4 = var2.bind(var7)(var3);
                var3 = var4.bind(var7)();
                var2 = var3.done;
                if(var2) { _fun0009_ip = 154; continue _fun0009 }
case 155:
                var2 = var3.value;
                var2 = var5.bind(var7)(var2);
                if(!(var6 !== var2)) { _fun0009_ip = 154; continue _fun0009 }
case 156:
                var8 = var4.bind(var7)();
                var2 = var8.done;
                var3 = var8;
                if(!var2) { _fun0009_ip = 155; continue _fun0009 }
case 154:
                return var1;
case 58:
                var1 = new Array(0);
                return var1;
case 23:
                var1 = new Array(0);
                return var1;
            }
        };
        var _closure1_slot32 = var9;
        var5 = function parseQuestsEmbedCode(arg1) {
            _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
case 0:
                var4 = _closure1_slot31;
                var2 = undefined;
                var1 = arg1;
                var5 = var4.bind(var2)(var1);
                var1 = null;
                var6 = var1 == var5;
                var4 = undefined;
                if(var6) { _fun0013_ip = 157; continue _fun0013 }
case 34:
                var6 = var5.primaryHostRemainingPath;
                var5 = var1 == var6;
                var4 = undefined;
                if(var5) { _fun0013_ip = 157; continue _fun0013 }
case 158:
                var5 = var6.match;
                var3 = _closure1_slot13;
                var4 = var5.bind(var6)(var3);
case 157:
                var3 = var1 == var4;
                var2 = undefined;
                if(var3) { _fun0013_ip = 159; continue _fun0013 }
case 30:
                var3 = 1;
                var2 = var4[var3];
case 159:
                var3 = var1 != var2;
                var1 = null;
                if(!var3) { _fun0013_ip = 9; continue _fun0013 }
case 160:
                var1 = var2;
case 9:
                return var1;
            }
        };
        var _closure1_slot33 = var5;
        var4 = function parseURLSafely(arg1) {
            _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
case 0:
                var1 = arg1;
case 161: // try_start_0
                var4 = _closure1_slot0;
                var3 = _closure1_slot2;
                var2 = 3;
                var3 = var3[var2];
                var2 = undefined;
                var3 = var4.bind(var2)(var3);
                var2 = var3.parse;
                var1 = var2.bind(var3)(var1);
case 45: // try_end0
                return var1;
case 162: // catch_target0
                CatchBlockStart(arg_register=0);
                var1 = null;
                return var1;
            }
        };
        var _closure1_slot34 = var4;
        var10 = global;
        var13 = var10.Object;
        var8 = var13.defineProperty;
        var7 = {};
        var1 = true;
        var7['value'] = var1;
        var1 = '__esModule';
        var1 = var8.bind(var13)(var3, var1, var7);
        var13 = 0;
        var7 = var12[var13];
        var1 = undefined;
        var7 = var18.bind(var1)(var7);
        var _closure1_slot3 = var7;
        var17 = 1;
        var7 = var12[var17];
        var7 = var11.bind(var1)(var7);
        var20 = var7.PRIMARY_DOMAIN;
        var7 = /^\\/([a-zA-Z0-9-]+)$/;
        var _closure1_slot4 = var7;
        var7 = /^\\/channels\\/([0-9]+|@me)\\/([0-9]+)$/;
        var _closure1_slot5 = var7;
        var7 = /^\\/(invite|template)\\/([a-zA-Z0-9-]+)\\/?\.?$/;
        var _closure1_slot6 = var7;
        var14 = var10.RegExp;
        var7 = var14.prototype;
        var8 = Object.create(var7, {constructor: {value: var14}});
        var29 = '^/events/(\\d+)(?:/)(\\d+)?((?:/)(\\d+))?';
        var30 = var8;
        var7 = new var30[var14](var29, var28);
        var7 = var7 instanceof Object ? var7 : var8;
        var _closure1_slot7 = var7;
        var7 = /^\\/(application-directory|discovery\\/applications)\\/([0-9-]+)\\/?((about|images|privacy)\\/?)?$/;
        var _closure1_slot8 = var7;
        var7 = /^\\/(application-directory|discovery\\/applications)\\/([0-9-]+)\\/store\\/?([0-9-]+)?\\/?$/;
        var _closure1_slot9 = var7;
        var7 = /^\\/activities\\/([0-9-]+)\\/?$/;
        var _closure1_slot10 = var7;
        var7 = /^\\/channels\\/([0-9]+)\\/shop\\/([0-9]+)$/;
        var _closure1_slot11 = var7;
        var7 = /^\\/channels\\/([0-9]+)\\/shop$/;
        var _closure1_slot12 = var7;
        var7 = /^\\/quests\\/([0-9-]+)\\/?$/;
        var _closure1_slot13 = var7;
        var7 = /^\\/oauth2\\/authorize/;
        var _closure1_slot14 = var7;
        var7 = /^#itemSkuId=([0-9]+)$/;
        var _closure1_slot15 = var7;
        var8 = /dev:\\/\\/[\w-.~:\\/?#\[\]@!$&'()*+,;=%]+/i;
        var _closure1_slot16 = var8;
        var7 = var10.window;
        var7 = var7.GLOBAL_ENV;
        var7 = var7.INVITE_HOST;
        var15 = var16.bind(var1)(var7);
        var _closure1_slot17 = var15;
        var7 = var10.window;
        var7 = var7.GLOBAL_ENV;
        var7 = var7.GUILD_TEMPLATE_HOST;
        var22 = var16.bind(var1)(var7);
        var _closure1_slot18 = var22;
        var7 = var10.window;
        var7 = var7.GLOBAL_ENV;
        var7 = var7.WEBAPP_ENDPOINT;
        var19 = null;
        if(!(var19 == var7)) { _fun0001_ip = 163; continue _fun0001 }
case 164:
        var14 = var10.HermesInternal;
        var21 = var14.concat;
        var14 = '//canary.';
        var7 = var21.bind(var14)(var20);
case 163:
        var21 = var16.bind(var1)(var7);
        var _closure1_slot19 = var21;
        var7 = var10.HermesInternal;
        var14 = var7.concat;
        var7 = '//canary.';
        var7 = var14.bind(var7)(var20);
        var7 = var16.bind(var1)(var7);
        var _closure1_slot20 = var7;
        var7 = var10.HermesInternal;
        var14 = var7.concat;
        var7 = '//ptb.';
        var7 = var14.bind(var7)(var20);
        var7 = var16.bind(var1)(var7);
        var _closure1_slot21 = var7;
        var7 = 'discordapp.com';
        var14 = var16.bind(var1)(var7);
        var _closure1_slot22 = var14;
        var7 = 'discord.com';
        var20 = var16.bind(var1)(var7);
        var _closure1_slot23 = var20;
        var7 = 2;
        var16 = var12[var7];
        var24 = var18.bind(var1)(var16);
        var23 = var24.escape;
        var25 = var15.host;
        var26 = var19 != var25;
        var16 = '';
        var15 = var16;
        if(!var26) { _fun0001_ip = 165; continue _fun0001 }
case 90:
        var15 = var25;
case 165:
        var23 = var23.bind(var24)(var15);
        var15 = new Array(5);
        var15[0] = var23;
        var23 = var12[var7];
        var24 = var18.bind(var1)(var23);
        var23 = var24.escape;
        var25 = var22.host;
        var26 = var19 != var25;
        var22 = var16;
        if(!var26) { _fun0001_ip = 166; continue _fun0001 }
case 167:
        var22 = var25;
case 166:
        var22 = var23.bind(var24)(var22);
        var15[1] = var22;
        var22 = var12[var7];
        var23 = var18.bind(var1)(var22);
        var22 = var23.escape;
        var24 = var21.host;
        var25 = var19 != var24;
        var21 = var16;
        if(!var25) { _fun0001_ip = 168; continue _fun0001 }
case 169:
        var21 = var24;
case 168:
        var21 = var22.bind(var23)(var21);
        var15[2] = var21;
        var21 = var12[var7];
        var22 = var18.bind(var1)(var21);
        var21 = var22.escape;
        var23 = var14.host;
        var24 = var19 != var23;
        var14 = var16;
        if(!var24) { _fun0001_ip = 170; continue _fun0001 }
case 171:
        var14 = var23;
case 170:
        var14 = var21.bind(var22)(var14);
        var15[3] = var14;
        var7 = var12[var7];
        var14 = var18.bind(var1)(var7);
        var7 = var14.escape;
        var20 = var20.host;
        var21 = var19 != var20;
        if(!var21) { _fun0001_ip = 172; continue _fun0001 }
case 173:
        var16 = var20;
case 172:
        var7 = var7.bind(var14)(var16);
        var15[4] = var7;
        var14 = var15.filter;
        var7 = var10.Boolean;
        var15 = var14.bind(var15)(var7);
        var16 = var10.RegExp;
        var14 = var15.join;
        var7 = '|';
        var20 = var14.bind(var15)(var7);
        var7 = var10.HermesInternal;
        var15 = var7.concat;
        var14 = '((https?://[^ ]*)|^|[^/][^/.])(';
        var7 = ')';
        var29 = var15.bind(var14)(var20, var7);
        var14 = var16.prototype;
        var14 = Object.create(var14, {constructor: {value: var16}});
        var15 = 'g';
        var30 = var14;
        var28 = var15;
        var7 = new var30[var16](var29, var28, var27);
        var7 = var7 instanceof Object ? var7 : var14;
        var _closure1_slot24 = var7;
        var7 = function stripMarkdownLinkSyntax(arg1) {
            var4 = arg1;
            var3 = var4.replaceAll;
            var2 = _closure1_slot26;
            var1 = ' $2 ';
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        };
        var _closure1_slot25 = var7;
        var14 = 4;
        var14 = var12[var14];
        var14 = var18.bind(var1)(var14);
        var14 = var14.defaultRules;
        var16 = var14.link;
        var20 = var19 == var16;
        var14 = undefined;
        if(var20) { _fun0001_ip = 174; continue _fun0001 }
case 175:
        var16 = var16.match;
        var20 = var19 == var16;
        var14 = undefined;
        if(var20) { _fun0001_ip = 174; continue _fun0001 }
case 176:
        var16 = var16.regex;
        var19 = var19 == var16;
        var14 = undefined;
        if(var19) { _fun0001_ip = 174; continue _fun0001 }
case 177:
        var14 = var16.source;
case 174:
        var16 = 5;
        var16 = var12[var16];
        var18 = var18.bind(var1)(var16);
        var16 = 'SimpleMarkdown link regex is not set.';
        var16 = var18.bind(var1)(var14, var16);
        var18 = var14[var13];
        var13 = '^';
        var16 = var14;
        var14 = var16;
        if(!(var13 === var18)) { _fun0001_ip = 178; continue _fun0001 }
case 179:
        var13 = var16.substring;
        var14 = var13.bind(var16)(var17);
case 178:
        var10 = var10.RegExp;
        var13 = var10.prototype;
        var13 = Object.create(var13, {constructor: {value: var10}});
        var30 = var13;
        var29 = var14;
        var28 = var15;
        var10 = new var30[var10](var29, var28, var27);
        var10 = var10 instanceof Object ? var10 : var13;
        var _closure1_slot26 = var10;
        var10 = 15;
        var10 = var12[var10];
        var12 = var11.bind(var1)(var10);
        var11 = var12.fileFinishedImporting;
        var10 = 'modules/coded_links/findCodedLinks.tsx';
        var10 = var11.bind(var12)(var10);
        var3['default'] = var9;
        var3['DEVLINK_REGEX'] = var8;
        var3['stripMarkdownLinkSyntax'] = var7;
        var7 = function remainingPathFromDiscordHostMatch(arg1) {
            _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
case 0:
                var5 = arg1;
                var3 = _closure1_slot30;
                var1 = _closure1_slot19;
                var4 = undefined;
                var1 = var3.bind(var4)(var1, var5);
                var3 = null;
                if(!(var3 == var1)) { _fun0015_ip = 180; continue _fun0015 }
case 34:
                var7 = _closure1_slot30;
                var6 = _closure1_slot20;
                var1 = var7.bind(var4)(var6, var5);
case 180:
                if(!(var3 == var1)) { _fun0015_ip = 181; continue _fun0015 }
case 2:
                var7 = _closure1_slot30;
                var6 = _closure1_slot21;
                var1 = var7.bind(var4)(var6, var5);
case 181:
                if(!(var3 == var1)) { _fun0015_ip = 182; continue _fun0015 }
case 183:
                var7 = _closure1_slot30;
                var6 = _closure1_slot22;
                var1 = var7.bind(var4)(var6, var5);
case 182:
                if(!(var3 == var1)) { _fun0015_ip = 11; continue _fun0015 }
case 184:
                var3 = _closure1_slot30;
                var2 = _closure1_slot23;
                var1 = var3.bind(var4)(var2, var5);
case 11:
                return var1;
            }
        };
        var3['remainingPathFromDiscordHostMatch'] = var7;
        var3['getPathsFromURL'] = var6;
        var6 = function isSuspiciousCodedLink(arg1) {
            _fun0016: for(var _fun0016_ip = 0; ; ) switch(_fun0016_ip) {
case 0:
                var2 = arg1;
                var3 = var2.includes;
                var1 = '\\';
                var1 = var3.bind(var2)(var1);
                if(!var1) { _fun0016_ip = 185; continue _fun0016 }
case 186:
                var1 = _closure1_slot34;
                var7 = undefined;
                var2 = var1.bind(var7)(var2);
                var _closure2_slot0 = var2;
                var1 = null;
                if(!(var1 != var2)) { _fun0016_ip = 187; continue _fun0016 }
case 5:
                var6 = _closure1_slot29;
                var5 = _closure1_slot17;
                var5 = var6.bind(var7)(var5, var2);
                if(var5) { _fun0016_ip = 188; continue _fun0016 }
case 189:
                var5 = _closure1_slot19;
                var6 = new Array(5);
                var6[0] = var5;
                var5 = _closure1_slot20;
                var6[1] = var5;
                var5 = _closure1_slot21;
                var6[2] = var5;
                var5 = _closure1_slot22;
                var6[3] = var5;
                var5 = _closure1_slot23;
                var6[4] = var5;
                var5 = var6.some;
                var4 = function(arg1) {
                    var4 = _closure1_slot29;
                    var3 = _closure2_slot0;
                    var2 = undefined;
                    var1 = arg1;
                    var1 = var4.bind(var2)(var1, var3);
                    return var1;
                };
                var4 = var5.bind(var6)(var4);
                if(var4) { _fun0016_ip = 190; continue _fun0016 }
case 185:
                var4 = false;
                return var4;
case 190:
                var5 = var2.pathname;
                var4 = var1 == var5;
                var2 = undefined;
                if(var4) { _fun0016_ip = 191; continue _fun0016 }
case 55:
                var4 = var5.toUpperCase;
                var5 = var4.bind(var5)();
                var4 = var5.includes;
                var6 = _closure1_slot0;
                var8 = _closure1_slot2;
                var3 = 6;
                var3 = var8[var3];
                var3 = var6.bind(var7)(var3);
                var3 = var3.CodedLinkType;
                var3 = var3.INVITE;
                var2 = var4.bind(var5)(var3);
case 191:
                var1 = var1 != var2;
                if(!var1) { _fun0016_ip = 192; continue _fun0016 }
case 155:
                var1 = var2;
case 192:
                return var1;
case 188:
                var1 = true;
                return var1;
case 187:
                var1 = false;
                return var1;
            }
        };
        var3['isSuspiciousCodedLink'] = var6;
        var3['parseQuestsEmbedCode'] = var5;
        var3['parseURLSafely'] = var4;
        var2 = function findCodedLink(arg1) {
            var3 = _closure1_slot32;
            var2 = undefined;
            var1 = arg1;
            var2 = var3.bind(var2)(var1);
            var1 = 0;
            var1 = var2[var1];
            return var1;
        };
        var3['findCodedLink'] = var2;
        return var1;
    }
})();