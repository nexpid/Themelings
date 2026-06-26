// app/modules/coded_links/findCodedLinks.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
        var10 = require;
        var13 = metroImportDefault;
        var3 = exports;
        var11 = dependencyMap;
        var _closure1_slot0 = var10;
        var _closure1_slot1 = var11;
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
                var2 = var3["@@iterator"];
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
        var15 = function getHost(arg1) {
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
                var3 = _closure1_slot1;
                var1 = 4;
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
                var2 = _closure1_slot19;
                var2 = var7.bind(var6)(var2, var5);
                var1['inviteHostRemainingPath'] = var2;
                var2 = _closure1_slot20;
                var2 = var7.bind(var6)(var2, var5);
                var1['templateHostRemainingPath'] = var2;
                var2 = _closure1_slot21;
                var2 = var7.bind(var6)(var2, var5);
                if(!(var4 == var2)) { _fun0008_ip = 46; continue _fun0008 }
case 47:
                var8 = _closure1_slot30;
                var7 = _closure1_slot22;
                var2 = var8.bind(var6)(var7, var5);
case 46:
                if(!(var4 == var2)) { _fun0008_ip = 48; continue _fun0008 }
case 42:
                var8 = _closure1_slot30;
                var7 = _closure1_slot23;
                var2 = var8.bind(var6)(var7, var5);
case 48:
                if(!(var4 == var2)) { _fun0008_ip = 49; continue _fun0008 }
case 50:
                var8 = _closure1_slot30;
                var7 = _closure1_slot24;
                var2 = var8.bind(var6)(var7, var5);
case 49:
                if(!(var4 == var2)) { _fun0008_ip = 51; continue _fun0008 }
case 52:
                var4 = _closure1_slot30;
                var3 = _closure1_slot25;
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
        var8 = function findCodedLinks(arg1) {
            _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                var7 = arg1;
                var6 = null;
                if(!(var6 != var7)) { _fun0009_ip = 54; continue _fun0009 }
case 32:
                var5 = var7.replace;
                var4 = _closure1_slot26;
                var3 = function(arg1, arg2, arg3, arg4) {
                    _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
                        var1 = arg1;
                        var3 = null;
                        var2 = arg3;
                        if(!(var3 == var2)) { _fun0010_ip = 40; continue _fun0010 }
case 55:
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
                var7 = var5.bind(var7)(var4, var3);
                var8 = _closure1_slot0;
                var9 = _closure1_slot1;
                var3 = 6;
                var4 = var9[var3];
                var3 = undefined;
                var4 = var8.bind(var3)(var4);
                var11 = var4.default;
                var10 = var11.parseToAST;
                var5 = {};
                var4 = true;
                var5['allowLinks'] = var4;
                var10 = var10.bind(var11)(var7, var4, var5);
                var5 = new Array(0);
                var _closure2_slot0 = var5;
                var4 = 7;
                var4 = var9[var4];
                var9 = var8.bind(var3)(var4);
                var8 = var9.walkAst;
                var4 = function(arg1) {
                    _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
                        var2 = arg1;
                        var4 = var2.type;
                        var5 = _closure1_slot0;
                        var3 = _closure1_slot1;
                        var1 = 8;
                        var3 = var3[var1];
                        var1 = undefined;
                        var3 = var5.bind(var1)(var3);
                        var3 = var3.AST_KEY;
                        var3 = var3.LINK;
                        var3 = var4 === var3;
                        if(!var3) { _fun0011_ip = 56; continue _fun0011 }
case 57:
                        var4 = var2.target;
                        var5 = 'string';
                        var4 = typeof var4;
                        var3 = var5 === var4;
case 56:
                        if(!var3) { _fun0011_ip = 58; continue _fun0011 }
case 59:
                        var4 = var2.target;
                        var5 = var4.length;
                        var4 = 0;
                        var3 = var5 > var4;
case 58:
                        if(!var3) { _fun0011_ip = 60; continue _fun0011 }
case 61:
                        var4 = _closure2_slot0;
                        var3 = var4.push;
                        var2 = var2.target;
                        var2 = var3.bind(var4)(var2);
case 60:
                        return var1;
                    }
                };
                var4 = var8.bind(var9)(var10, var4);
                var4 = var7.match;
                var2 = _closure1_slot18;
                var2 = var4.bind(var7)(var2);
                if(!(var6 == var5)) { _fun0009_ip = 62; continue _fun0009 }
case 63:
                var5 = new Array(0);
case 62:
                var4 = var5.concat;
                if(!(var6 == var2)) { _fun0009_ip = 64; continue _fun0009 }
case 65:
                var2 = new Array(0);
case 64:
                var2 = var4.bind(var5)(var2);
                _closure2_slot0 = var2;
                var1 = function coerceLinksToCodedLinks(arg1) {
                    _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
case 0:
                        var3 = arg1;
                        var1 = null;
                        if(!(var1 != var3)) { _fun0012_ip = 66; continue _fun0012 }
case 67:
                        var4 = var3.length;
                        var1 = 0;
                        if(!(var1 !== var4)) { _fun0012_ip = 66; continue _fun0012 }
case 68:
                        var1 = global;
                        var1 = var1.Set;
                        var4 = var1.prototype;
                        var4 = Object.create(var4, {constructor: {value: var1}});
                        var9 = var4;
                        var1 = new var9[var1](var8);
                        var1 = var1 instanceof Object ? var1 : var4;
                        var _closure3_slot0 = var1;
                        var1 = new Array(0);
                        var _closure3_slot1 = var1;
                        var6 = function _loop(arg1) {
                            _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
case 0:
                                var8 = arg1;
                                var _closure4_slot0 = var8;
                                var4 = function add(arg1, arg2) {
                                    _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
case 0:
                                        var4 = arg2;
                                        var3 = _closure3_slot0;
                                        var2 = var3.has;
                                        var2 = var2.bind(var3)(var4);
                                        if(var2) { _fun0014_ip = 69; continue _fun0014 }
case 31:
                                        var3 = _closure3_slot0;
                                        var2 = var3.add;
                                        var2 = var2.bind(var3)(var4);
                                        var3 = _closure3_slot1;
                                        var2 = var3.push;
                                        var1 = {};
                                        var5 = arg1;
                                        var1['type'] = var5;
                                        var1['code'] = var4;
                                        var4 = _closure4_slot0;
                                        var1['url'] = var4;
                                        var1 = var2.bind(var3)(var1);
case 69:
                                        var1 = undefined;
                                        return var1;
                                    }
                                };
                                var3 = _closure1_slot31;
                                var1 = undefined;
                                var3 = var3.bind(var1)(var8);
                                var6 = var3.url;
                                var14 = var3.inviteHostRemainingPath;
                                var12 = var3.templateHostRemainingPath;
                                var5 = var3.primaryHostRemainingPath;
                                var7 = null;
                                if(!(var7 != var6)) { _fun0013_ip = 70; continue _fun0013 }
case 71:
                                var3 = var6.pathname;
                                if(!(var7 != var3)) { _fun0013_ip = 70; continue _fun0013 }
case 72:
                                var9 = _closure1_slot0;
                                var3 = _closure1_slot1;
                                var10 = 9;
                                var3 = var3[var10];
                                var9 = var9.bind(var1)(var3);
                                var3 = var9.isBuildOverrideLink;
                                var3 = var3.bind(var9)(var8);
                                if(!var3) { _fun0013_ip = 73; continue _fun0013 }
case 46:
                                var9 = _closure1_slot0;
                                var13 = _closure1_slot1;
                                var3 = 5;
                                var3 = var13[var3];
                                var3 = var9.bind(var1)(var3);
                                var3 = var3.CodedLinkType;
                                var3 = var3.BUILD_OVERRIDE;
                                var3 = var4.bind(var1)(var3, var8);
case 73:
                                var9 = _closure1_slot0;
                                var3 = _closure1_slot1;
                                var3 = var3[var10];
                                var9 = var9.bind(var1)(var3);
                                var3 = var9.isManualBuildOverrideLink;
                                var3 = var3.bind(var9)(var8);
                                if(!var3) { _fun0013_ip = 74; continue _fun0013 }
case 75:
                                var9 = _closure1_slot0;
                                var10 = _closure1_slot1;
                                var3 = 5;
                                var3 = var10[var3];
                                var3 = var9.bind(var1)(var3);
                                var3 = var3.CodedLinkType;
                                var3 = var3.MANUAL_BUILD_OVERRIDE;
                                var3 = var4.bind(var1)(var3, var8);
case 74:
                                var9 = _closure1_slot0;
                                var10 = _closure1_slot1;
                                var3 = 10;
                                var3 = var10[var3];
                                var9 = var9.bind(var1)(var3);
                                var3 = var9.isExperimentEmbedURL;
                                var3 = var3.bind(var9)(var8);
                                if(!var3) { _fun0013_ip = 76; continue _fun0013 }
case 77:
                                var9 = _closure1_slot0;
                                var10 = _closure1_slot1;
                                var3 = 5;
                                var3 = var10[var3];
                                var3 = var9.bind(var1)(var3);
                                var3 = var3.CodedLinkType;
                                var3 = var3.EXPERIMENT;
                                var3 = var4.bind(var1)(var3, var8);
case 76:
                                var9 = var7 == var14;
                                var3 = undefined;
                                if(var9) { _fun0013_ip = 78; continue _fun0013 }
case 79:
                                var10 = var14.match;
                                var9 = _closure1_slot4;
                                var3 = var10.bind(var14)(var9);
case 78:
                                if(!(var7 != var3)) { _fun0013_ip = 80; continue _fun0013 }
case 81:
                                var9 = var6.protocol;
                                var3 = 'https:';
                                if(!(var3 !== var9)) { _fun0013_ip = 82; continue _fun0013 }
case 83:
                                var9 = var6.protocol;
                                var3 = 'http:';
                                if(!(var3 === var9)) { _fun0013_ip = 80; continue _fun0013 }
case 82:
                                var9 = _closure1_slot0;
                                var10 = _closure1_slot1;
                                var3 = 11;
                                var3 = var10[var3];
                                var13 = var9.bind(var1)(var3);
                                var10 = var13.generateInviteKeyFromUrlParams;
                                var9 = var14.substring;
                                var3 = 1;
                                var9 = var9.bind(var14)(var3);
                                var3 = var6.search;
                                var9 = var10.bind(var13)(var9, var3);
                                var10 = _closure1_slot2;
                                var3 = var10.getInvite;
                                var13 = var3.bind(var10)(var9);
                                if(!(var7 != var13)) { _fun0013_ip = 84; continue _fun0013 }
case 85:
                                var10 = _closure1_slot0;
                                var14 = _closure1_slot1;
                                var3 = 12;
                                var3 = var14[var3];
                                var10 = var10.bind(var1)(var3);
                                var3 = var10.isEmbeddedApplicationInvite;
                                var3 = var3.bind(var10)(var13);
                                if(var3) { _fun0013_ip = 86; continue _fun0013 }
case 84:
                                var10 = var8.includes;
                                var3 = '\\';
                                var3 = var10.bind(var8)(var3);
                                if(var3) { _fun0013_ip = 87; continue _fun0013 }
case 88:
                                var10 = _closure1_slot0;
                                var13 = _closure1_slot1;
                                var3 = 5;
                                var3 = var13[var3];
                                var3 = var10.bind(var1)(var3);
                                var3 = var3.CodedLinkType;
                                var3 = var3.INVITE;
                                var3 = var4.bind(var1)(var3, var9);
                                _fun0013_ip = 80; continue _fun0013;
case 87:
                                var3 = 0;
                                return var3;
case 86:
                                var10 = _closure1_slot0;
                                var13 = _closure1_slot1;
                                var3 = 5;
                                var3 = var13[var3];
                                var3 = var10.bind(var1)(var3);
                                var3 = var3.CodedLinkType;
                                var3 = var3.EMBEDDED_ACTIVITY_INVITE;
                                var3 = var4.bind(var1)(var3, var9);
case 80:
                                var9 = var7 == var12;
                                var3 = undefined;
                                if(var9) { _fun0013_ip = 89; continue _fun0013 }
case 90:
                                var10 = var12.match;
                                var9 = _closure1_slot4;
                                var3 = var10.bind(var12)(var9);
case 89:
                                if(!(var7 != var3)) { _fun0013_ip = 91; continue _fun0013 }
case 92:
                                var9 = _closure1_slot0;
                                var10 = _closure1_slot1;
                                var3 = 5;
                                var3 = var10[var3];
                                var3 = var9.bind(var1)(var3);
                                var3 = var3.CodedLinkType;
                                var9 = var3.TEMPLATE;
                                var10 = var12.substring;
                                var3 = 1;
                                var3 = var10.bind(var12)(var3);
                                var3 = var4.bind(var1)(var9, var3);
case 91:
                                var3 = var7 == var5;
                                var13 = undefined;
                                if(var3) { _fun0013_ip = 93; continue _fun0013 }
case 94:
                                var9 = var5.match;
                                var3 = _closure1_slot6;
                                var13 = var9.bind(var5)(var3);
case 93:
                                if(!(var7 != var13)) { _fun0013_ip = 95; continue _fun0013 }
case 96:
                                var3 = 1;
                                var9 = var13[var3];
                                var3 = var9.toUpperCase;
                                var9 = var3.bind(var9)();
                                var10 = _closure1_slot0;
                                var3 = _closure1_slot1;
                                var12 = 5;
                                var3 = var3[var12];
                                var3 = var10.bind(var1)(var3);
                                var3 = var3.CodedLinkType;
                                var3 = var3.INVITE;
                                if(!(var9 !== var3)) { _fun0013_ip = 97; continue _fun0013 }
case 98:
                                var3 = 2;
                                var3 = var13[var3];
                                var3 = var4.bind(var1)(var9, var3);
                                _fun0013_ip = 95; continue _fun0013;
case 97:
                                var9 = var8.includes;
                                var3 = '\\';
                                var3 = var9.bind(var8)(var3);
                                if(var3) { _fun0013_ip = 99; continue _fun0013 }
case 100:
                                var10 = _closure1_slot0;
                                var3 = _closure1_slot1;
                                var9 = 11;
                                var9 = var3[var9];
                                var15 = var10.bind(var1)(var9);
                                var14 = var15.generateInviteKeyFromUrlParams;
                                var9 = 2;
                                var13 = var13[var9];
                                var9 = var6.search;
                                var9 = var14.bind(var15)(var13, var9);
                                var3 = var3[var12];
                                var3 = var10.bind(var1)(var3);
                                var3 = var3.CodedLinkType;
                                var3 = var3.INVITE;
                                var3 = var4.bind(var1)(var3, var9);
case 95:
                                var9 = var7 == var5;
                                var3 = undefined;
                                if(var9) { _fun0013_ip = 101; continue _fun0013 }
case 102:
                                var10 = var5.match;
                                var9 = _closure1_slot5;
                                var3 = var10.bind(var5)(var9);
case 101:
                                if(!(var7 != var3)) { _fun0013_ip = 103; continue _fun0013 }
case 104:
                                var9 = _closure1_slot0;
                                var10 = _closure1_slot1;
                                var3 = 5;
                                var3 = var10[var3];
                                var3 = var9.bind(var1)(var3);
                                var3 = var3.CodedLinkType;
                                var9 = var3.CHANNEL_LINK;
                                var12 = var5.replace;
                                var10 = '/channels/';
                                var3 = '';
                                var3 = var12.bind(var5)(var10, var3);
                                var3 = var4.bind(var1)(var9, var3);
case 103:
                                var10 = var6.pathname;
                                var3 = var7 == var10;
                                var13 = null;
                                if(var3) { _fun0013_ip = 105; continue _fun0013 }
case 106:
                                var9 = var10.match;
                                var3 = _closure1_slot7;
                                var12 = var9.bind(var10)(var3);
                                var9 = var7 != var12;
                                var3 = null;
                                if(!var9) { _fun0013_ip = 107; continue _fun0013 }
case 108:
                                var9 = var12.length;
                                var10 = 4;
                                var9 = var9 >= var10;
                                var3 = null;
                                if(!var9) { _fun0013_ip = 107; continue _fun0013 }
case 109:
                                var9 = {};
                                var14 = 1;
                                var14 = var12[var14];
                                var9['guildId'] = var14;
                                var14 = 2;
                                var14 = var12[var14];
                                var9['guildEventId'] = var14;
                                var10 = var12[var10];
                                var9['recurrenceId'] = var10;
                                var3 = var9;
case 107:
                                var13 = var3;
case 105:
                                if(!(var7 != var13)) { _fun0013_ip = 110; continue _fun0013 }
case 111:
                                var9 = _closure1_slot0;
                                var10 = _closure1_slot1;
                                var3 = 5;
                                var3 = var10[var3];
                                var3 = var9.bind(var1)(var3);
                                var3 = var3.CodedLinkType;
                                var9 = var3.EVENT;
                                var16 = var13.guildId;
                                var15 = var13.guildEventId;
                                var12 = global;
                                var3 = var12.HermesInternal;
                                var10 = var3.concat;
                                var3 = '';
                                var14 = '-';
                                var10 = var10.bind(var3)(var16, var14, var15);
                                var15 = var13.recurrenceId;
                                var15 = var7 != var15;
                                if(!var15) { _fun0013_ip = 112; continue _fun0013 }
case 113:
                                var13 = var13.recurrenceId;
                                var12 = var12.HermesInternal;
                                var12 = var12.concat;
                                var3 = var12.bind(var14)(var13);
case 112:
                                var3 = var10 + var3;
                                var3 = var4.bind(var1)(var9, var3);
case 110:
                                var9 = var7 == var5;
                                var3 = undefined;
                                if(var9) { _fun0013_ip = 114; continue _fun0013 }
case 115:
                                var10 = var5.match;
                                var9 = _closure1_slot16;
                                var3 = var10.bind(var5)(var9);
case 114:
                                if(!(var7 != var3)) { _fun0013_ip = 116; continue _fun0013 }
case 117:
                                var3 = var6.query;
                                if(!(var7 != var3)) { _fun0013_ip = 116; continue _fun0013 }
case 118:
                                var9 = _closure1_slot0;
                                var10 = _closure1_slot1;
                                var3 = 13;
                                var3 = var10[var3];
                                var10 = var9.bind(var1)(var3);
                                var9 = var10.parseOAuth2AuthorizeProps;
                                var3 = var6.query;
                                var10 = var9.bind(var10)(var3);
                                var9 = var10.clientId;
                                var3 = var7 == var9;
                                if(var3) { _fun0013_ip = 119; continue _fun0013 }
case 120:
                                var12 = '';
                                var3 = var12 === var9;
case 119:
                                if(var3) { _fun0013_ip = 121; continue _fun0013 }
case 122:
                                var13 = var10.scopes;
                                var10 = var7 != var13;
                                if(!var10) { _fun0013_ip = 123; continue _fun0013 }
case 124:
                                var12 = var13.some;
                                var11 = function(arg1) {
                                    var3 = _closure1_slot0;
                                    var2 = _closure1_slot1;
                                    var1 = 14;
                                    var2 = var2[var1];
                                    var1 = undefined;
                                    var1 = var3.bind(var1)(var2);
                                    var1 = var1.OAuth2Scopes;
                                    var2 = var1.APPLICATIONS_COMMANDS;
                                    var1 = arg1;
                                    var1 = var1 !== var2;
                                    return var1;
                                };
                                var10 = var12.bind(var13)(var11);
case 123:
                                var3 = var10;
case 121:
                                if(var3) { _fun0013_ip = 116; continue _fun0013 }
case 125:
                                var10 = _closure1_slot0;
                                var11 = _closure1_slot1;
                                var3 = 5;
                                var3 = var11[var3];
                                var3 = var10.bind(var1)(var3);
                                var3 = var3.CodedLinkType;
                                var3 = var3.APP_OAUTH2_LINK;
                                var3 = var4.bind(var1)(var3, var9);
case 116:
                                var3 = var7 == var5;
                                var9 = undefined;
                                if(var3) { _fun0013_ip = 126; continue _fun0013 }
case 127:
                                var10 = var5.match;
                                var3 = _closure1_slot8;
                                var9 = var10.bind(var5)(var3);
case 126:
                                if(!(var7 != var9)) { _fun0013_ip = 128; continue _fun0013 }
case 129:
                                var3 = 2;
                                var9 = var9[var3];
                                var10 = _closure1_slot0;
                                var11 = _closure1_slot1;
                                var3 = 5;
                                var3 = var11[var3];
                                var3 = var10.bind(var1)(var3);
                                var3 = var3.CodedLinkType;
                                var3 = var3.APP_DIRECTORY_PROFILE;
                                var3 = var4.bind(var1)(var3, var9);
case 128:
                                var3 = var7 == var5;
                                var9 = undefined;
                                if(var3) { _fun0013_ip = 130; continue _fun0013 }
case 131:
                                var10 = var5.match;
                                var3 = _closure1_slot9;
                                var9 = var10.bind(var5)(var3);
case 130:
                                if(!(var7 != var9)) { _fun0013_ip = 132; continue _fun0013 }
case 133:
                                var3 = 2;
                                var13 = var9[var3];
                                var3 = 3;
                                var12 = var9[var3];
                                if(!(var7 == var12)) { _fun0013_ip = 134; continue _fun0013 }
case 135:
                                var9 = _closure1_slot0;
                                var10 = _closure1_slot1;
                                var3 = 5;
                                var3 = var10[var3];
                                var3 = var9.bind(var1)(var3);
                                var3 = var3.CodedLinkType;
                                var3 = var3.APP_DIRECTORY_STOREFRONT;
                                var3 = var4.bind(var1)(var3, var13);
                                _fun0013_ip = 132; continue _fun0013;
case 134:
                                var10 = _closure1_slot0;
                                var11 = _closure1_slot1;
                                var3 = 15;
                                var3 = var11[var3];
                                var9 = var10.bind(var1)(var3);
                                var3 = var9.makeStorefrontSKUCodedLink;
                                var9 = var3.bind(var9)(var13, var12);
                                var3 = 5;
                                var3 = var11[var3];
                                var3 = var10.bind(var1)(var3);
                                var3 = var3.CodedLinkType;
                                var3 = var3.APP_DIRECTORY_STOREFRONT_SKU;
                                var3 = var4.bind(var1)(var3, var9);
case 132:
                                var3 = var7 == var5;
                                var9 = undefined;
                                if(var3) { _fun0013_ip = 136; continue _fun0013 }
case 137:
                                var10 = var5.match;
                                var3 = _closure1_slot10;
                                var9 = var10.bind(var5)(var3);
case 136:
                                if(!(var7 != var9)) { _fun0013_ip = 138; continue _fun0013 }
case 139:
                                var3 = 1;
                                var9 = var9[var3];
                                var10 = _closure1_slot0;
                                var11 = _closure1_slot1;
                                var3 = 5;
                                var3 = var11[var3];
                                var3 = var10.bind(var1)(var3);
                                var3 = var3.CodedLinkType;
                                var3 = var3.ACTIVITY_BOOKMARK;
                                var3 = var4.bind(var1)(var3, var9);
case 138:
                                var3 = var7 == var5;
                                var10 = undefined;
                                if(var3) { _fun0013_ip = 140; continue _fun0013 }
case 141:
                                var9 = var5.match;
                                var3 = _closure1_slot11;
                                var10 = var9.bind(var5)(var3);
case 140:
                                if(!(var7 != var10)) { _fun0013_ip = 142; continue _fun0013 }
case 143:
                                var9 = _closure1_slot0;
                                var11 = _closure1_slot1;
                                var3 = 5;
                                var3 = var11[var3];
                                var3 = var9.bind(var1)(var3);
                                var3 = var3.CodedLinkType;
                                var9 = var3.GUILD_PRODUCT;
                                var3 = 1;
                                var13 = var10[var3];
                                var3 = 2;
                                var12 = var10[var3];
                                var3 = global;
                                var3 = var3.HermesInternal;
                                var11 = var3.concat;
                                var10 = '';
                                var3 = '-';
                                var3 = var11.bind(var10)(var13, var3, var12);
                                var3 = var4.bind(var1)(var9, var3);
case 142:
                                var3 = var7 == var5;
                                var10 = undefined;
                                if(var3) { _fun0013_ip = 144; continue _fun0013 }
case 145:
                                var9 = var5.match;
                                var3 = _closure1_slot13;
                                var10 = var9.bind(var5)(var3);
case 144:
                                if(!(var7 != var10)) { _fun0013_ip = 146; continue _fun0013 }
case 147:
                                var9 = _closure1_slot0;
                                var11 = _closure1_slot1;
                                var3 = 5;
                                var3 = var11[var3];
                                var3 = var9.bind(var1)(var3);
                                var3 = var3.CodedLinkType;
                                var9 = var3.SERVER_SHOP;
                                var3 = 1;
                                var3 = var10[var3];
                                var3 = var4.bind(var1)(var9, var3);
case 146:
                                var3 = var7 == var5;
                                var10 = undefined;
                                if(var3) { _fun0013_ip = 148; continue _fun0013 }
case 149:
                                var9 = var5.match;
                                var3 = _closure1_slot12;
                                var10 = var9.bind(var5)(var3);
case 148:
                                if(!(var7 != var10)) { _fun0013_ip = 150; continue _fun0013 }
case 151:
                                var9 = _closure1_slot0;
                                var11 = _closure1_slot1;
                                var3 = 5;
                                var3 = var11[var3];
                                var3 = var9.bind(var1)(var3);
                                var3 = var3.CodedLinkType;
                                var9 = var3.SOCIAL_LAYER_STOREFRONT;
                                var3 = 3;
                                var13 = var10[var3];
                                var3 = 1;
                                var12 = var10[var3];
                                if(!(var7 == var12)) { _fun0013_ip = 152; continue _fun0013 }
case 153:
                                var3 = 2;
                                var12 = var10[var3];
case 152:
                                var3 = global;
                                var3 = var3.HermesInternal;
                                var11 = var3.concat;
                                var10 = '';
                                var3 = '-';
                                var3 = var11.bind(var10)(var13, var3, var12);
                                var3 = var4.bind(var1)(var9, var3);
case 150:
                                var3 = _closure1_slot33;
                                var8 = var3.bind(var1)(var8);
                                if(!(var7 != var8)) { _fun0013_ip = 154; continue _fun0013 }
case 155:
                                var9 = _closure1_slot0;
                                var10 = _closure1_slot1;
                                var3 = 5;
                                var3 = var10[var3];
                                var3 = var9.bind(var1)(var3);
                                var3 = var3.CodedLinkType;
                                var3 = var3.QUESTS_EMBED;
                                var3 = var4.bind(var1)(var3, var8);
case 154:
                                var3 = var7 == var5;
                                var9 = undefined;
                                if(var3) { _fun0013_ip = 156; continue _fun0013 }
case 157:
                                var8 = var5.match;
                                var3 = _closure1_slot15;
                                var9 = var8.bind(var5)(var3);
case 156:
                                if(!(var7 != var9)) { _fun0013_ip = 158; continue _fun0013 }
case 159:
                                var8 = _closure1_slot0;
                                var10 = _closure1_slot1;
                                var3 = 5;
                                var3 = var10[var3];
                                var3 = var8.bind(var1)(var3);
                                var3 = var3.CodedLinkType;
                                var8 = var3.GAME_PROFILE;
                                var3 = 1;
                                var3 = var9[var3];
                                var3 = var4.bind(var1)(var8, var3);
case 158:
                                var3 = '/shop';
                                if(!(var3 === var5)) { _fun0013_ip = 160; continue _fun0013 }
case 161:
                                var3 = var6.query;
                                var5 = var7 != var3;
                                var3 = null;
                                if(!var5) { _fun0013_ip = 162; continue _fun0013 }
case 163:
                                var8 = _closure1_slot0;
                                var9 = _closure1_slot1;
                                var5 = 16;
                                var5 = var9[var5];
                                var9 = var8.bind(var1)(var5);
                                var8 = var9.parse;
                                var5 = var6.query;
                                var3 = var8.bind(var9)(var5);
case 162:
                                var8 = var7 == var3;
                                var5 = undefined;
                                if(var8) { _fun0013_ip = 164; continue _fun0013 }
case 165:
                                var5 = var3.tab;
case 164:
                                var8 = _closure1_slot3;
                                var8 = var8.GAME_SHOPS;
                                if(!(var5 === var8)) { _fun0013_ip = 166; continue _fun0013 }
case 167:
                                var9 = var7 == var3;
                                var8 = undefined;
                                if(var9) { _fun0013_ip = 168; continue _fun0013 }
case 169:
                                var8 = var3.applicationId;
case 168:
                                if(!(var7 != var8)) { _fun0013_ip = 166; continue _fun0013 }
case 170:
                                var9 = var7 == var3;
                                var8 = undefined;
                                if(var9) { _fun0013_ip = 171; continue _fun0013 }
case 172:
                                var8 = var3.skuId;
case 171:
                                if(!(var7 == var8)) { _fun0013_ip = 173; continue _fun0013 }
case 166:
                                var9 = var6.hash;
                                var6 = var7 == var9;
                                var11 = undefined;
                                if(var6) { _fun0013_ip = 174; continue _fun0013 }
case 175:
                                var8 = var9.match;
                                var6 = _closure1_slot17;
                                var11 = var8.bind(var9)(var6);
case 174:
                                var8 = _closure1_slot0;
                                var9 = _closure1_slot1;
                                var6 = 5;
                                var6 = var9[var6];
                                var6 = var8.bind(var1)(var6);
                                var6 = var6.CodedLinkType;
                                var6 = var6.COLLECTIBLES_SHOP;
                                var8 = var7 != var5;
                                var10 = '';
                                var9 = var10;
                                if(!var8) { _fun0013_ip = 176; continue _fun0013 }
case 177:
                                var9 = var5;
case 176:
                                var8 = var7 == var11;
                                var5 = undefined;
                                if(var8) { _fun0013_ip = 178; continue _fun0013 }
case 179:
                                var8 = 1;
                                var5 = var11[var8];
case 178:
                                var7 = var7 != var5;
                                var8 = var10;
                                if(!var7) { _fun0013_ip = 180; continue _fun0013 }
case 181:
                                var8 = var5;
case 180:
                                var5 = global;
                                var5 = var5.HermesInternal;
                                var7 = var5.concat;
                                var5 = '-';
                                var5 = var7.bind(var10)(var9, var5, var8);
                                var5 = var4.bind(var1)(var6, var5);
                                _fun0013_ip = 160; continue _fun0013;
case 173:
                                var8 = var3.applicationId;
                                var7 = var3.skuId;
                                var6 = 'string';
                                var3 = typeof var8;
                                var3 = var6 === var3;
                                if(!var3) { _fun0013_ip = 182; continue _fun0013 }
case 183:
                                var5 = typeof var7;
                                var3 = var6 === var5;
case 182:
                                if(!var3) { _fun0013_ip = 160; continue _fun0013 }
case 184:
                                var3 = _closure1_slot0;
                                var5 = _closure1_slot1;
                                var2 = 5;
                                var2 = var5[var2];
                                var2 = var3.bind(var1)(var2);
                                var2 = var2.CodedLinkType;
                                var3 = var2.SOCIAL_LAYER_STOREFRONT_APP;
                                var2 = global;
                                var2 = var2.HermesInternal;
                                var6 = var2.concat;
                                var5 = '';
                                var2 = '-';
                                var2 = var6.bind(var5)(var7, var2, var8);
                                var2 = var4.bind(var1)(var3, var2);
case 160:
                                return var1;
case 99:
                                var1 = 0;
                                return var1;
case 70:
                                var1 = 0;
                                return var1;
                            }
                        };
                        var2 = _closure1_slot27;
                        var5 = undefined;
                        var4 = var2.bind(var5)(var3);
                        var3 = var4.bind(var5)();
                        var2 = var3.done;
                        if(var2) { _fun0012_ip = 185; continue _fun0012 }
case 47:
                        var2 = var3.value;
                        var2 = var6.bind(var5)(var2);
                        var7 = var4.bind(var5)();
                        var2 = var7.done;
                        var3 = var7;
                        if(!var2) { _fun0012_ip = 47; continue _fun0012 }
case 185:
                        return var1;
case 66:
                        var1 = new Array(0);
                        return var1;
                    }
                };
                var4 = var1.bind(var3)(var2);
                var3 = var4.slice;
                var2 = 0;
                var1 = 10;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
case 54:
                var1 = new Array(0);
                return var1;
            }
        };
        var _closure1_slot32 = var8;
        var5 = function parseQuestsEmbedCode(arg1) {
            _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
case 0:
                var4 = _closure1_slot31;
                var2 = undefined;
                var1 = arg1;
                var5 = var4.bind(var2)(var1);
                var1 = null;
                var6 = var1 == var5;
                var4 = undefined;
                if(var6) { _fun0015_ip = 186; continue _fun0015 }
case 34:
                var6 = var5.primaryHostRemainingPath;
                var5 = var1 == var6;
                var4 = undefined;
                if(var5) { _fun0015_ip = 186; continue _fun0015 }
case 187:
                var5 = var6.match;
                var3 = _closure1_slot14;
                var4 = var5.bind(var6)(var3);
case 186:
                var3 = var1 == var4;
                var2 = undefined;
                if(var3) { _fun0015_ip = 188; continue _fun0015 }
case 30:
                var3 = 1;
                var2 = var4[var3];
case 188:
                var3 = var1 != var2;
                var1 = null;
                if(!var3) { _fun0015_ip = 9; continue _fun0015 }
case 189:
                var1 = var2;
case 9:
                return var1;
            }
        };
        var _closure1_slot33 = var5;
        var4 = function parseURLSafely(arg1) {
            _fun0016: for(var _fun0016_ip = 0; ; ) switch(_fun0016_ip) {
case 0:
                var1 = arg1;
case 190: // try_start_0
                var4 = _closure1_slot0;
                var3 = _closure1_slot1;
                var2 = 4;
                var3 = var3[var2];
                var2 = undefined;
                var3 = var4.bind(var2)(var3);
                var2 = var3.parse;
                var1 = var2.bind(var3)(var1);
case 45: // try_end0
                return var1;
case 191: // catch_target0
                CatchBlockStart(arg_register=0);
                var1 = null;
                return var1;
            }
        };
        var _closure1_slot34 = var4;
        var9 = global;
        var14 = var9.Object;
        var12 = var14.defineProperty;
        var7 = {};
        var1 = true;
        var7['value'] = var1;
        var1 = '__esModule';
        var1 = var12.bind(var14)(var3, var1, var7);
        var1 = 0;
        var7 = var11[var1];
        var1 = undefined;
        var7 = var13.bind(var1)(var7);
        var _closure1_slot2 = var7;
        var7 = 1;
        var7 = var11[var7];
        var7 = var10.bind(var1)(var7);
        var18 = var7.PRIMARY_DOMAIN;
        var7 = 2;
        var7 = var11[var7];
        var7 = var10.bind(var1)(var7);
        var7 = var7.CollectibleShopTab;
        var _closure1_slot3 = var7;
        var7 = /^\/([a-zA-Z0-9-]+)$/;
        var _closure1_slot4 = var7;
        var7 = /^\/channels\/([0-9]+|@me)\/([0-9]+)$/;
        var _closure1_slot5 = var7;
        var7 = /^\/(invite|template)\/([a-zA-Z0-9-]+)\/?\.?$/;
        var _closure1_slot6 = var7;
        var14 = var9.RegExp;
        var7 = var14.prototype;
        var12 = Object.create(var7, {constructor: {value: var14}});
        var27 = '^/events/(\\d+)(?:/)(\\d+)?((?:/)(\\d+))?';
        var28 = var12;
        var7 = new var28[var14](var27, var26);
        var7 = var7 instanceof Object ? var7 : var12;
        var _closure1_slot7 = var7;
        var7 = /^\/(application-directory|discovery\/applications)\/([0-9-]+)\/?((about|images|privacy)\/?)?$/;
        var _closure1_slot8 = var7;
        var7 = /^\/(application-directory|discovery\/applications)\/([0-9-]+)\/store\/?([0-9-]+)?\/?$/;
        var _closure1_slot9 = var7;
        var7 = /^\/activities\/([0-9-]+)\/?$/;
        var _closure1_slot10 = var7;
        var7 = /^\/channels\/([0-9]+)\/shop\/([0-9]+)$/;
        var _closure1_slot11 = var7;
        var7 = /^(?:\/game-shop\/([0-9]+)|\/channels\/([0-9]+)\/game-shop\/(?:[0-9]+))\/([0-9]+)(?:\/([^\/]+))?$/;
        var _closure1_slot12 = var7;
        var7 = /^\/channels\/([0-9]+)\/shop$/;
        var _closure1_slot13 = var7;
        var7 = /^\/quests\/([0-9-]+)\/?$/;
        var _closure1_slot14 = var7;
        var7 = /^\/games\/([0-9]+)(?:\/[A-Za-z0-9-]*)?\/?$/;
        var _closure1_slot15 = var7;
        var7 = /^\/oauth2\/authorize/;
        var _closure1_slot16 = var7;
        var7 = /^#itemSkuId=([0-9]+)$/;
        var _closure1_slot17 = var7;
        var7 = /dev:\/\/[\w-.~:\/?#\[\]@!$&'()*+,;=%]+/i;
        var _closure1_slot18 = var7;
        var12 = var9.window;
        var12 = var12.GLOBAL_ENV;
        var12 = var12.INVITE_HOST;
        var14 = var15.bind(var1)(var12);
        var _closure1_slot19 = var14;
        var12 = var9.window;
        var12 = var12.GLOBAL_ENV;
        var12 = var12.GUILD_TEMPLATE_HOST;
        var20 = var15.bind(var1)(var12);
        var _closure1_slot20 = var20;
        var12 = var9.window;
        var12 = var12.GLOBAL_ENV;
        var12 = var12.WEBAPP_ENDPOINT;
        var17 = null;
        if(!(var17 == var12)) { _fun0001_ip = 192; continue _fun0001 }
case 80:
        var16 = var9.HermesInternal;
        var19 = var16.concat;
        var16 = '//canary.';
        var12 = var19.bind(var16)(var18);
case 192:
        var19 = var15.bind(var1)(var12);
        var _closure1_slot21 = var19;
        var12 = var9.HermesInternal;
        var16 = var12.concat;
        var12 = '//canary.';
        var12 = var16.bind(var12)(var18);
        var12 = var15.bind(var1)(var12);
        var _closure1_slot22 = var12;
        var12 = var9.HermesInternal;
        var16 = var12.concat;
        var12 = '//ptb.';
        var12 = var16.bind(var12)(var18);
        var12 = var15.bind(var1)(var12);
        var _closure1_slot23 = var12;
        var12 = 'discordapp.com';
        var18 = var15.bind(var1)(var12);
        var _closure1_slot24 = var18;
        var12 = 'discord.com';
        var16 = var15.bind(var1)(var12);
        var _closure1_slot25 = var16;
        var12 = 3;
        var15 = var11[var12];
        var22 = var13.bind(var1)(var15);
        var21 = var22.escape;
        var23 = var14.host;
        var24 = var17 != var23;
        var15 = '';
        var14 = var15;
        if(!var24) { _fun0001_ip = 98; continue _fun0001 }
case 193:
        var14 = var23;
case 98:
        var21 = var21.bind(var22)(var14);
        var14 = new Array(5);
        var14[0] = var21;
        var21 = var11[var12];
        var22 = var13.bind(var1)(var21);
        var21 = var22.escape;
        var23 = var20.host;
        var24 = var17 != var23;
        var20 = var15;
        if(!var24) { _fun0001_ip = 194; continue _fun0001 }
case 195:
        var20 = var23;
case 194:
        var20 = var21.bind(var22)(var20);
        var14[1] = var20;
        var20 = var11[var12];
        var21 = var13.bind(var1)(var20);
        var20 = var21.escape;
        var22 = var19.host;
        var23 = var17 != var22;
        var19 = var15;
        if(!var23) { _fun0001_ip = 196; continue _fun0001 }
case 197:
        var19 = var22;
case 196:
        var19 = var20.bind(var21)(var19);
        var14[2] = var19;
        var19 = var11[var12];
        var20 = var13.bind(var1)(var19);
        var19 = var20.escape;
        var21 = var18.host;
        var22 = var17 != var21;
        var18 = var15;
        if(!var22) { _fun0001_ip = 198; continue _fun0001 }
case 199:
        var18 = var21;
case 198:
        var18 = var19.bind(var20)(var18);
        var14[3] = var18;
        var12 = var11[var12];
        var13 = var13.bind(var1)(var12);
        var12 = var13.escape;
        var16 = var16.host;
        var17 = var17 != var16;
        if(!var17) { _fun0001_ip = 200; continue _fun0001 }
case 201:
        var15 = var16;
case 200:
        var12 = var12.bind(var13)(var15);
        var14[4] = var12;
        var13 = var14.filter;
        var12 = var9.Boolean;
        var15 = var13.bind(var14)(var12);
        var14 = var9.RegExp;
        var13 = var15.join;
        var12 = '|';
        var15 = var13.bind(var15)(var12);
        var9 = var9.HermesInternal;
        var13 = var9.concat;
        var12 = '((https?://[^ ]*)|^|\\s)(';
        var9 = ')';
        var27 = var13.bind(var12)(var15, var9);
        var9 = var14.prototype;
        var12 = Object.create(var9, {constructor: {value: var14}});
        var26 = 'g';
        var28 = var12;
        var9 = new var28[var14](var27, var26, var25);
        var9 = var9 instanceof Object ? var9 : var12;
        var _closure1_slot26 = var9;
        var9 = 17;
        var9 = var11[var9];
        var11 = var10.bind(var1)(var9);
        var10 = var11.fileFinishedImporting;
        var9 = 'modules/coded_links/findCodedLinks.tsx';
        var9 = var10.bind(var11)(var9);
        var3['default'] = var8;
        var3['DEVLINK_REGEX'] = var7;
        var7 = function remainingPathFromDiscordHostMatch(arg1) {
            _fun0017: for(var _fun0017_ip = 0; ; ) switch(_fun0017_ip) {
case 0:
                var5 = arg1;
                var3 = _closure1_slot30;
                var1 = _closure1_slot21;
                var4 = undefined;
                var1 = var3.bind(var4)(var1, var5);
                var3 = null;
                if(!(var3 == var1)) { _fun0017_ip = 202; continue _fun0017 }
case 34:
                var7 = _closure1_slot30;
                var6 = _closure1_slot22;
                var1 = var7.bind(var4)(var6, var5);
case 202:
                if(!(var3 == var1)) { _fun0017_ip = 71; continue _fun0017 }
case 2:
                var7 = _closure1_slot30;
                var6 = _closure1_slot23;
                var1 = var7.bind(var4)(var6, var5);
case 71:
                if(!(var3 == var1)) { _fun0017_ip = 203; continue _fun0017 }
case 204:
                var7 = _closure1_slot30;
                var6 = _closure1_slot24;
                var1 = var7.bind(var4)(var6, var5);
case 203:
                if(!(var3 == var1)) { _fun0017_ip = 11; continue _fun0017 }
case 205:
                var3 = _closure1_slot30;
                var2 = _closure1_slot25;
                var1 = var3.bind(var4)(var2, var5);
case 11:
                return var1;
            }
        };
        var3['remainingPathFromDiscordHostMatch'] = var7;
        var3['getPathsFromURL'] = var6;
        var6 = function isSuspiciousCodedLink(arg1) {
            _fun0018: for(var _fun0018_ip = 0; ; ) switch(_fun0018_ip) {
case 0:
                var2 = arg1;
                var3 = var2.includes;
                var1 = '\\';
                var1 = var3.bind(var2)(var1);
                if(!var1) { _fun0018_ip = 206; continue _fun0018 }
case 68:
                var1 = _closure1_slot34;
                var7 = undefined;
                var2 = var1.bind(var7)(var2);
                var _closure2_slot0 = var2;
                var1 = null;
                if(!(var1 != var2)) { _fun0018_ip = 207; continue _fun0018 }
case 5:
                var6 = _closure1_slot29;
                var5 = _closure1_slot19;
                var5 = var6.bind(var7)(var5, var2);
                if(var5) { _fun0018_ip = 208; continue _fun0018 }
case 56:
                var5 = _closure1_slot21;
                var6 = new Array(5);
                var6[0] = var5;
                var5 = _closure1_slot22;
                var6[1] = var5;
                var5 = _closure1_slot23;
                var6[2] = var5;
                var5 = _closure1_slot24;
                var6[3] = var5;
                var5 = _closure1_slot25;
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
                if(var4) { _fun0018_ip = 209; continue _fun0018 }
case 206:
                var4 = false;
                return var4;
case 209:
                var5 = var2.pathname;
                var4 = var1 == var5;
                var2 = undefined;
                if(var4) { _fun0018_ip = 210; continue _fun0018 }
case 211:
                var4 = var5.toUpperCase;
                var5 = var4.bind(var5)();
                var4 = var5.includes;
                var6 = _closure1_slot0;
                var8 = _closure1_slot1;
                var3 = 5;
                var3 = var8[var3];
                var3 = var6.bind(var7)(var3);
                var3 = var3.CodedLinkType;
                var3 = var3.INVITE;
                var2 = var4.bind(var5)(var3);
case 210:
                var1 = var1 != var2;
                if(!var1) { _fun0018_ip = 212; continue _fun0018 }
case 213:
                var1 = var2;
case 212:
                return var1;
case 208:
                var1 = true;
                return var1;
case 207:
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