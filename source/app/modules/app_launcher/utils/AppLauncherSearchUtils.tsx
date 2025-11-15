// app/modules/app_launcher/utils/AppLauncherSearchUtils.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var25 = require;
    var28 = metroImportDefault;
    var27 = metroImportAll;
    var3 = exports;
    var26 = dependencyMap;
    var _closure1_slot0 = var25;
    var _closure1_slot1 = var28;
    var _closure1_slot2 = var27;
    var _closure1_slot3 = var26;
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
            var9 = _closure1_slot17;
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
            var7 = _closure1_slot17;
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
    var _closure1_slot16 = var1;
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
    var _closure1_slot17 = var1;
    var23 = function useApplicationsInContext(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var1 = arg1;
            var5 = var1.context;
            var11 = var1.onlyWithCommands;
            var _closure2_slot0 = var11;
            var8 = var1.includeBuiltIn;
            var9 = var1.allowFetch;
            var3 = undefined;
            if(!(var9 === var3)) { _fun0004_ip = 36; continue _fun0004 }
case 37:
            var9 = true;
case 36:
            var12 = var1.includeEmbeddedApps;
            var _closure2_slot1 = var12;
            var7 = var1.includeNonEmbeddedApps;
            var _closure2_slot2 = var7;
            var4 = var5.type;
            var1 = 'channel';
            var13 = undefined;
            if(!(var1 === var4)) { _fun0004_ip = 38; continue _fun0004 }
case 39:
            var13 = var5.channel;
case 38:
            var14 = _closure1_slot0;
            var15 = _closure1_slot3;
            var4 = 8;
            var4 = var15[var4];
            var10 = var14.bind(var3)(var4);
            var6 = var10.usePermissionContext;
            var4 = 9;
            var4 = var15[var4];
            var4 = var14.bind(var3)(var4);
            var4 = var4.ApplicationCommandType;
            var14 = var4.CHAT;
            var4 = new Array(1);
            var4[0] = var14;
            var4 = var6.bind(var10)(var13, var4);
            var6 = var4.hasBaseAccessPermissions;
            var4 = _closure1_slot9;
            var4 = var4.bind(var3)(var5, var6, var9);
            var5 = _closure1_slot10;
            var5 = var5.bind(var3)(var6, var9);
            var10 = _closure1_slot5;
            var9 = var10.useCallback;
            var6 = new Array(3);
            var6[0] = var12;
            var6[1] = var7;
            var6[2] = var11;
            var2 = function(arg1) {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                    var5 = arg1;
                    var1 = var5.descriptor;
                    var8 = var1.application;
                    var3 = null;
                    var1 = var3 != var8;
                    if(!var1) { _fun0005_ip = 40; continue _fun0005 }
case 41:
                    var2 = _closure2_slot1;
                    var6 = !var2;
                    if(var6) { _fun0005_ip = 42; continue _fun0005 }
case 43:
                    var9 = _closure1_slot0;
                    var7 = _closure1_slot3;
                    var2 = 10;
                    var7 = var7[var2];
                    var2 = undefined;
                    var7 = var9.bind(var2)(var7);
                    var2 = var7.isEmbeddedApp;
                    var2 = var2.bind(var7)(var8);
                    var6 = !var2;
case 42:
                    var2 = !var6;
                    if(!var6) { _fun0005_ip = 44; continue _fun0005 }
case 45:
                    var3 = var3 != var8;
                    if(!var3) { _fun0005_ip = 46; continue _fun0005 }
case 47:
                    var3 = _closure2_slot2;
case 46:
                    if(!var3) { _fun0005_ip = 48; continue _fun0005 }
case 49:
                    var9 = _closure1_slot0;
                    var7 = _closure1_slot3;
                    var6 = 10;
                    var7 = var7[var6];
                    var6 = undefined;
                    var7 = var9.bind(var6)(var7);
                    var6 = var7.isEmbeddedApp;
                    var6 = var6.bind(var7)(var8);
                    var3 = !var6;
case 48:
                    if(!var3) { _fun0005_ip = 50; continue _fun0005 }
case 51:
                    var4 = _closure2_slot0;
                    var4 = !var4;
                    if(var4) { _fun0005_ip = 52; continue _fun0005 }
case 53:
                    var6 = global;
                    var7 = var6.Object;
                    var6 = var7.keys;
                    var5 = var5.commands;
                    var5 = var6.bind(var7)(var5);
                    var6 = var5.length;
                    var5 = 0;
                    var4 = var6 > var5;
case 52:
                    var3 = var4;
case 50:
                    var2 = var3;
case 44:
                    var1 = var2;
case 40:
                    return var1;
                }
            };
            var13 = var9.bind(var10)(var2, var6);
            var2 = new Array(0);
            var9 = global;
            var6 = var9.Set;
            var10 = var6.prototype;
            var10 = Object.create(var10, {constructor: {value: var6}});
            var21 = var10;
            var6 = new var21[var6](var20);
            var12 = var6 instanceof Object ? var6 : var10;
            var10 = var4.result;
            var6 = null;
            if(!(var6 != var10)) { _fun0004_ip = 54; continue _fun0004 }
case 55:
            var14 = var9.Object;
            var11 = var14.values;
            var10 = var4.result;
            var10 = var10.sections;
            var14 = var11.bind(var14)(var10);
            var10 = var14.length;
            var11 = 0;
            var10 = var11 < var10;
            if(!var10) { _fun0004_ip = 54; continue _fun0004 }
case 56:
            var16 = var14[var11];
            var10 = var16.descriptor;
            var10 = var10.application;
            var15 = var6 != var10;
            if(!var15) { _fun0004_ip = 57; continue _fun0004 }
case 58:
            var15 = var13.bind(var3)(var16);
case 57:
            if(!var15) { _fun0004_ip = 59; continue _fun0004 }
case 60:
            var15 = var2.push;
            var15 = var15.bind(var2)(var10);
            var15 = var12.add;
            var10 = var10.id;
            var10 = var15.bind(var12)(var10);
case 59:
            var11 = var11 + 1;
            var10 = var14.length;
            if(var11 < var10) { _fun0004_ip = 56; continue _fun0004 }
case 54:
            var10 = var5.result;
            if(!(var6 != var10)) { _fun0004_ip = 61; continue _fun0004 }
case 62:
            var11 = var9.Object;
            var10 = var11.values;
            var9 = var5.result;
            var9 = var9.sections;
            var11 = var10.bind(var11)(var9);
            var9 = var11.length;
            var10 = 0;
            var9 = var10 < var9;
            if(!var9) { _fun0004_ip = 61; continue _fun0004 }
case 63:
            var15 = var11[var10];
            var9 = var15.descriptor;
            var14 = var9.application;
            var9 = var6 != var14;
            if(!var9) { _fun0004_ip = 64; continue _fun0004 }
case 65:
            var17 = var12.has;
            var16 = var14.id;
            var16 = var17.bind(var12)(var16);
            var9 = !var16;
case 64:
            if(!var9) { _fun0004_ip = 66; continue _fun0004 }
case 67:
            var9 = var13.bind(var3)(var15);
case 66:
            if(!var9) { _fun0004_ip = 68; continue _fun0004 }
case 69:
            var9 = var2.push;
            var9 = var9.bind(var2)(var14);
case 68:
            var10 = var10 + 1;
            var9 = var11.length;
            if(var10 < var9) { _fun0004_ip = 63; continue _fun0004 }
case 61:
            if(!var7) { _fun0004_ip = 70; continue _fun0004 }
case 71:
            var7 = var8;
case 70:
            if(!var7) { _fun0004_ip = 72; continue _fun0004 }
case 73:
            var7 = var2.push;
            var8 = _closure1_slot0;
            var9 = _closure1_slot3;
            var1 = 10;
            var1 = var9[var1];
            var1 = var8.bind(var3)(var1);
            var1 = var1.FAKE_BUILT_IN_APP;
            var1 = var7.bind(var2)(var1);
case 72:
            var1 = {};
            var1['apps'] = var2;
            var7 = var6 == var4;
            var2 = undefined;
            if(var7) { _fun0004_ip = 74; continue _fun0004 }
case 75:
            var4 = var4.fetchState;
            var2 = var4.fetching;
case 74:
            var4 = true;
            var2 = var4 === var2;
            if(var2) { _fun0004_ip = 76; continue _fun0004 }
case 77:
            var6 = var6 == var5;
            var3 = undefined;
            if(var6) { _fun0004_ip = 78; continue _fun0004 }
case 79:
            var5 = var5.fetchState;
            var3 = var5.fetching;
case 78:
            var2 = var4 === var3;
case 76:
            var1['loading'] = var2;
            return var1;
        }
    };
    var _closure1_slot18 = var23;
    var22 = function useApplicationCommandsInContext(arg1) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
            var2 = arg1;
            var9 = var2.context;
            var _closure2_slot0 = var9;
            var8 = var2.includeBuiltIn;
            var5 = undefined;
            if(!(var8 === var5)) { _fun0006_ip = 34; continue _fun0006 }
case 41:
            var8 = true;
case 34:
            var _closure2_slot1 = var8;
            var6 = var2.allowFetch;
            if(!(var6 === var5)) { _fun0006_ip = 80; continue _fun0006 }
case 81:
            var6 = true;
case 80:
            var _closure2_slot2 = var5;
            var _closure2_slot3 = var5;
            var3 = _closure1_slot9;
            var4 = true;
            var7 = var3.bind(var5)(var9, var4, var6);
            _closure2_slot2 = var7;
            var3 = _closure1_slot10;
            var6 = var3.bind(var5)(var4, var6);
            _closure2_slot3 = var6;
            var4 = _closure1_slot5;
            var3 = var4.useMemo;
            var2 = new Array(6);
            var2[0] = var9;
            var2[1] = var8;
            var8 = var7.fetchState;
            var8 = var8.fetching;
            var2[2] = var8;
            var9 = var7.result;
            var7 = null;
            var10 = var7 == var9;
            var8 = undefined;
            if(var10) { _fun0006_ip = 82; continue _fun0006 }
case 51:
            var8 = var9.sections;
case 82:
            var2[3] = var8;
            var8 = var6.fetchState;
            var8 = var8.fetching;
            var2[4] = var8;
            var6 = var6.result;
            var7 = var7 == var6;
            var5 = undefined;
            if(var7) { _fun0006_ip = 19; continue _fun0006 }
case 83:
            var5 = var6.sections;
case 19:
            var2[5] = var5;
            var1 = function() {
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                    var1 = _closure2_slot2;
                    var2 = var1.result;
                    var1 = null;
                    var4 = var1 == var2;
                    var8 = undefined;
                    var5 = undefined;
                    if(var4) { _fun0007_ip = 84; continue _fun0007 }
case 34:
                    var5 = var2.sections;
case 84:
                    if(!(var1 == var5)) { _fun0007_ip = 36; continue _fun0007 }
case 37:
                    var5 = {};
case 36:
                    var _closure3_slot0 = var5;
                    var2 = _closure2_slot3;
                    var2 = var2.result;
                    var4 = var1 == var2;
                    var6 = undefined;
                    if(var4) { _fun0007_ip = 85; continue _fun0007 }
case 86:
                    var6 = var2.sections;
case 85:
                    if(!(var1 == var6)) { _fun0007_ip = 39; continue _fun0007 }
case 87:
                    var6 = {};
case 39:
                    var1 = global;
                    var4 = var1.Object;
                    var2 = var4.keys;
                    var11 = var2.bind(var4)(var5);
                    var7 = new Array(0);
                    var5 = 0;
                    var12 = var7;
                    var10 = 0;
                    var10 = arraySpread(var12, var11, var10);
                    var4 = var1.Object;
                    var1 = var4.keys;
                    var6 = var1.bind(var4)(var6);
                    var4 = var6.filter;
                    var1 = function(arg1) {
                        var2 = _closure3_slot0;
                        var1 = arg1;
                        var1 = var1 in var2;
                        var1 = !var1;
                        return var1;
                    };
                    var11 = var4.bind(var6)(var1);
                    var12 = var7;
                    var1 = arraySpread(var12, var11, var10);
                    var1 = _closure2_slot1;
                    if(!var1) { _fun0007_ip = 88; continue _fun0007 }
case 89:
                    var2 = var7.push;
                    var1 = _closure1_slot14;
                    var1 = var1.BUILT_IN;
                    var1 = var2.bind(var7)(var1);
case 88:
                    var4 = new Array(0);
                    var _closure3_slot1 = var4;
                    var2 = {};
                    var _closure3_slot2 = var2;
                    var6 = function _loop() {
                        _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                            var6 = _closure1_slot8;
                            var5 = _closure2_slot0;
                            var4 = _closure3_slot3;
                            var1 = undefined;
                            var4 = var6.bind(var1)(var5, var4);
                            var _closure4_slot0 = var4;
                            var4 = var4.sectionCommands;
                            var5 = null;
                            if(!(var5 == var4)) { _fun0008_ip = 90; continue _fun0008 }
case 91:
                            var4 = new Array(0);
case 90:
                            var6 = _closure3_slot1;
                            var5 = var6.push;
                            var3 = new Array(0);
                            var8 = 0;
                            var10 = var3;
                            var9 = var4;
                            var7 = arraySpread(var10, var9, var8);
                            var10 = var5;
                            var9 = var3;
                            var8 = var6;
                            var3 = apply(var10, var9, var8);
                            var3 = var4.forEach;
                            var2 = function(arg1) {
                                _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                                    var2 = _closure4_slot0;
                                    var3 = var2.descriptor;
                                    var2 = null;
                                    if(!(var2 != var3)) { _fun0009_ip = 92; continue _fun0009 }
case 93:
                                    var3 = _closure3_slot2;
                                    var2 = arg1;
                                    var2 = var2.id;
                                    var1 = _closure4_slot0;
                                    var1 = var1.descriptor;
                                    var3[var2] = var1;
case 92:
                                    var1 = undefined;
                                    return var1;
                                }
                            };
                            var2 = var3.bind(var4)(var2);
                            return var1;
                        }
                    };
                    var1 = var7.length;
                    var1 = var5 < var1;
                    var5 = 0;
                    if(!var1) { _fun0007_ip = 94; continue _fun0007 }
case 95:
                    var1 = var7[var5];
                    var _closure3_slot3 = var1;
                    var1 = var6.bind(var8)();
                    var5 = var5 + 1;
                    var1 = var7.length;
                    if(var5 < var1) { _fun0007_ip = 95; continue _fun0007 }
case 94:
                    var1 = {};
                    var1['commands'] = var4;
                    var1['commandSectionMap'] = var2;
                    var2 = _closure2_slot2;
                    var2 = var2.fetchState;
                    var2 = var2.fetching;
                    var4 = true;
                    var2 = var4 === var2;
                    if(var2) { _fun0007_ip = 96; continue _fun0007 }
case 97:
                    var3 = _closure2_slot3;
                    var3 = var3.fetchState;
                    var3 = var3.fetching;
                    var2 = var4 === var3;
case 96:
                    var1['loading'] = var2;
                    return var1;
                }
            };
            var1 = var3.bind(var4)(var1, var2);
            return var1;
        }
    };
    var _closure1_slot19 = var22;
    var21 = function filterApplicationAllowed(arg1) {
        _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
            var6 = arg1;
            var _closure2_slot0 = var6;
            var4 = _closure1_slot0;
            var5 = _closure1_slot3;
            var3 = 8;
            var3 = var5[var3];
            var8 = undefined;
            var5 = var4.bind(var8)(var3);
            var4 = var5.buildPermissionContext;
            var9 = var6.type;
            var7 = 'channel';
            var3 = undefined;
            if(!(var7 === var9)) { _fun0010_ip = 98; continue _fun0010 }
case 4:
            var3 = var6.channel;
case 98:
            var7 = _closure1_slot0;
            var9 = _closure1_slot3;
            var6 = 9;
            var2 = var9[var6];
            var2 = var7.bind(var8)(var2);
            var2 = var2.ApplicationCommandType;
            var10 = var2.CHAT;
            var2 = new Array(2);
            var2[0] = var10;
            var6 = var9[var6];
            var6 = var7.bind(var8)(var6);
            var6 = var6.ApplicationCommandType;
            var6 = var6.PRIMARY_ENTRY_POINT;
            var2[1] = var6;
            var2 = var4.bind(var5)(var3, var2);
            var _closure2_slot1 = var2;
            var1 = function(arg1) {
                _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
                    var3 = _closure2_slot1;
                    var9 = var3.context;
                    var3 = _closure2_slot1;
                    var15 = var3.userId;
                    var3 = _closure2_slot1;
                    var14 = var3.roleIds;
                    var3 = _closure2_slot1;
                    var13 = var3.isImpersonating;
                    var4 = _closure1_slot8;
                    var3 = _closure2_slot0;
                    var1 = arg1;
                    var1 = var1.id;
                    var6 = undefined;
                    var1 = var4.bind(var6)(var3, var1);
                    var5 = var1.descriptor;
                    var _closure3_slot0 = var5;
                    var4 = var1.sectionCommands;
                    var3 = var1.isGuildInstalled;
                    var _closure3_slot1 = var3;
                    var1 = var1.isUserInstalled;
                    var _closure3_slot2 = var1;
                    var1 = null;
                    var8 = var1 == var9;
                    var3 = undefined;
                    if(var8) { _fun0011_ip = 99; continue _fun0011 }
case 100:
                    var3 = var9.guild_id;
case 99:
                    var8 = var1 != var3;
                    var3 = null;
                    if(!var8) { _fun0011_ip = 101; continue _fun0011 }
case 102:
                    var10 = _closure1_slot2;
                    var11 = _closure1_slot3;
                    var8 = 11;
                    var8 = var11[var8];
                    var12 = var10.bind(var6)(var8);
                    var11 = var12.computeAllowedForUser;
                    var8 = var1 == var5;
                    var10 = undefined;
                    if(var8) { _fun0011_ip = 103; continue _fun0011 }
case 104:
                    var10 = var5.permissions;
case 103:
                    var19 = var9.guild_id;
                    var21 = var12;
                    var20 = var10;
                    var18 = var15;
                    var17 = var14;
                    var16 = var13;
                    var3 = var21[var11](var20, var19, var18, var17, var16, var15);
case 101:
                    var _closure3_slot3 = var3;
                    var8 = var1 == var9;
                    var3 = undefined;
                    if(var8) { _fun0011_ip = 105; continue _fun0011 }
case 106:
                    var3 = var9.guild_id;
case 105:
                    var8 = var1 != var3;
                    var3 = null;
                    if(!var8) { _fun0011_ip = 107; continue _fun0011 }
case 108:
                    var8 = _closure1_slot2;
                    var10 = _closure1_slot3;
                    var7 = 11;
                    var7 = var10[var7];
                    var8 = var8.bind(var6)(var7);
                    var7 = var8.computeAllowedForChannel;
                    var10 = var1 == var5;
                    var6 = undefined;
                    if(var10) { _fun0011_ip = 109; continue _fun0011 }
case 110:
                    var6 = var5.permissions;
case 109:
                    var5 = var9.guild_id;
                    var3 = var7.bind(var8)(var6, var9, var5);
case 107:
                    var _closure3_slot4 = var3;
                    var3 = var1 != var4;
                    if(!var3) { _fun0011_ip = 56; continue _fun0011 }
case 111:
                    var5 = var4.length;
                    var1 = 0;
                    var3 = var5 > var1;
case 56:
                    var1 = !var3;
                    if(!var3) { _fun0011_ip = 112; continue _fun0011 }
case 113:
                    var3 = var4.some;
                    var2 = function(arg1) {
                        _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
case 0:
                            var3 = _closure1_slot2;
                            var2 = _closure1_slot3;
                            var5 = 11;
                            var2 = var2[var5];
                            var4 = undefined;
                            var8 = var3.bind(var4)(var2);
                            var7 = var8.hasAccess;
                            var6 = _closure2_slot1;
                            var3 = {};
                            var9 = _closure3_slot3;
                            var3['applicationAllowedForUser'] = var9;
                            var9 = _closure3_slot4;
                            var3['applicationAllowedForChannel'] = var9;
                            var10 = _closure3_slot0;
                            var9 = null;
                            var10 = var9 == var10;
                            var9 = undefined;
                            if(var10) { _fun0012_ip = 9; continue _fun0012 }
case 114:
                            var10 = _closure3_slot0;
                            var9 = var10.botId;
case 9:
                            var3['commandBotId'] = var9;
                            var9 = _closure3_slot1;
                            var3['isGuildInstalled'] = var9;
                            var2 = _closure3_slot2;
                            var3['isUserInstalled'] = var2;
                            var2 = arg1;
                            var2 = var7.bind(var8)(var2, var6, var3);
                            var3 = _closure1_slot0;
                            var1 = _closure1_slot3;
                            var1 = var1[var5];
                            var1 = var3.bind(var4)(var1);
                            var1 = var1.HasAccessResult;
                            var1 = var1.ALLOWED;
                            var1 = var2 === var1;
                            return var1;
                        }
                    };
                    var1 = var3.bind(var4)(var2);
case 112:
                    return var1;
                }
            };
            return var1;
        }
    };
    var _closure1_slot20 = var21;
    var20 = function defaultApplicationBucketing(arg1) {
        var4 = arg1;
        var1 = _closure1_slot22;
        var3 = undefined;
        var5 = var1.bind(var3)(var4);
        var1 = new Array(4);
        var1[0] = var5;
        var5 = _closure1_slot23;
        var5 = var5.bind(var3)(var4);
        var1[1] = var5;
        var5 = _closure1_slot24;
        var5 = var5.bind(var3)(var4);
        var1[2] = var5;
        var2 = _closure1_slot25;
        var2 = var2.bind(var3)(var4);
        var1[3] = var2;
        return var1;
    };
    var _closure1_slot21 = var20;
    var19 = function bucketApplicationNameStartsWith(arg1) {
        var2 = arg1;
        var _closure2_slot0 = var2;
        var1 = function(arg1) {
            var3 = _closure1_slot0;
            var2 = _closure1_slot3;
            var1 = 10;
            var2 = var2[var1];
            var1 = undefined;
            var3 = var3.bind(var1)(var2);
            var2 = var3.getSectionName;
            var1 = arg1;
            var2 = var2.bind(var3)(var1);
            var1 = var2.toLocaleLowerCase;
            var3 = var1.bind(var2)();
            var2 = var3.startsWith;
            var4 = _closure2_slot0;
            var1 = var4.toLocaleLowerCase;
            var1 = var1.bind(var4)();
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        return var1;
    };
    var _closure1_slot22 = var19;
    var18 = function bucketApplicationNameContains(arg1) {
        var2 = arg1;
        var _closure2_slot0 = var2;
        var1 = function(arg1) {
            var3 = _closure1_slot0;
            var2 = _closure1_slot3;
            var1 = 10;
            var2 = var2[var1];
            var1 = undefined;
            var3 = var3.bind(var1)(var2);
            var2 = var3.getSectionName;
            var1 = arg1;
            var2 = var2.bind(var3)(var1);
            var1 = var2.toLocaleLowerCase;
            var3 = var1.bind(var2)();
            var2 = var3.includes;
            var4 = _closure2_slot0;
            var1 = var4.toLocaleLowerCase;
            var1 = var1.bind(var4)();
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        return var1;
    };
    var _closure1_slot23 = var18;
    var17 = function bucketApplicationDescriptionStartsWith(arg1) {
        var2 = arg1;
        var _closure2_slot0 = var2;
        var1 = function(arg1) {
            _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
case 0:
                var3 = _closure1_slot0;
                var2 = _closure1_slot3;
                var1 = 10;
                var1 = var2[var1];
                var2 = undefined;
                var4 = var3.bind(var2)(var1);
                var3 = var4.getSectionDescription;
                var1 = arg1;
                var4 = var3.bind(var4)(var1);
                var1 = null;
                var3 = var1 == var4;
                var5 = undefined;
                if(var3) { _fun0013_ip = 98; continue _fun0013 }
case 115:
                var3 = var4.toLocaleLowerCase;
                var5 = var3.bind(var4)();
case 98:
                var3 = var1 == var5;
                var2 = undefined;
                if(var3) { _fun0013_ip = 116; continue _fun0013 }
case 85:
                var4 = var5.startsWith;
                var6 = _closure2_slot0;
                var3 = var6.toLocaleLowerCase;
                var3 = var3.bind(var6)();
                var2 = var4.bind(var5)(var3);
case 116:
                var1 = var1 != var2;
                if(!var1) { _fun0013_ip = 117; continue _fun0013 }
case 118:
                var1 = var2;
case 117:
                return var1;
            }
        };
        return var1;
    };
    var _closure1_slot24 = var17;
    var16 = function bucketApplicationDescriptionContains(arg1) {
        var2 = arg1;
        var _closure2_slot0 = var2;
        var1 = function(arg1) {
            _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
case 0:
                var3 = _closure1_slot0;
                var2 = _closure1_slot3;
                var1 = 10;
                var1 = var2[var1];
                var2 = undefined;
                var4 = var3.bind(var2)(var1);
                var3 = var4.getSectionDescription;
                var1 = arg1;
                var4 = var3.bind(var4)(var1);
                var1 = null;
                var3 = var1 == var4;
                var5 = undefined;
                if(var3) { _fun0014_ip = 98; continue _fun0014 }
case 115:
                var3 = var4.toLocaleLowerCase;
                var5 = var3.bind(var4)();
case 98:
                var3 = var1 == var5;
                var2 = undefined;
                if(var3) { _fun0014_ip = 11; continue _fun0014 }
case 85:
                var4 = var5.includes;
                var6 = _closure2_slot0;
                var3 = var6.toLocaleLowerCase;
                var3 = var3.bind(var6)();
                var2 = var4.bind(var5)(var3);
case 11:
                var1 = var1 != var2;
                if(!var1) { _fun0014_ip = 119; continue _fun0014 }
case 120:
                var1 = var2;
case 119:
                return var1;
            }
        };
        return var1;
    };
    var _closure1_slot25 = var16;
    var15 = function sortApplicationFreceny(arg1, arg2) {
        var4 = _closure1_slot11;
        var3 = var4.getScoreWithoutLoadingLatest;
        var2 = arg1;
        var2 = var2.id;
        var2 = var3.bind(var4)(var2);
        var4 = _closure1_slot11;
        var3 = var4.getScoreWithoutLoadingLatest;
        var1 = arg2;
        var1 = var1.id;
        var1 = var3.bind(var4)(var1);
        var1 = var1 - var2;
        return var1;
    };
    var _closure1_slot26 = var15;
    var14 = function sortApplicationAlpha(arg1, arg2) {
        var5 = _closure1_slot0;
        var6 = _closure1_slot3;
        var2 = 10;
        var3 = var6[var2];
        var4 = undefined;
        var8 = var5.bind(var4)(var3);
        var7 = var8.getSectionName;
        var3 = arg1;
        var3 = var7.bind(var8)(var3);
        var2 = var6[var2];
        var6 = var5.bind(var4)(var2);
        var5 = var6.getSectionName;
        var2 = arg2;
        var2 = var5.bind(var6)(var2);
        var1 = _closure1_slot7;
        var1 = var1.bind(var4)(var3, var2);
        return var1;
    };
    var _closure1_slot27 = var14;
    var13 = function filterCommandAllowed(arg1) {
        _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
case 0:
            var6 = arg1;
            var _closure2_slot0 = var6;
            var4 = _closure1_slot0;
            var5 = _closure1_slot3;
            var3 = 8;
            var3 = var5[var3];
            var7 = undefined;
            var5 = var4.bind(var7)(var3);
            var4 = var5.buildPermissionContext;
            var9 = var6.type;
            var8 = 'channel';
            var3 = undefined;
            if(!(var8 === var9)) { _fun0015_ip = 98; continue _fun0015 }
case 4:
            var3 = var6.channel;
case 98:
            var6 = _closure1_slot0;
            var8 = _closure1_slot3;
            var2 = 9;
            var2 = var8[var2];
            var2 = var6.bind(var7)(var2);
            var2 = var2.ApplicationCommandType;
            var6 = var2.CHAT;
            var2 = new Array(1);
            var2[0] = var6;
            var2 = var4.bind(var5)(var3, var2);
            var _closure2_slot1 = var2;
            var2 = {};
            var _closure2_slot2 = var2;
            var1 = function(arg1) {
                _fun0016: for(var _fun0016_ip = 0; ; ) switch(_fun0016_ip) {
case 0:
                    var8 = arg1;
                    var1 = _closure2_slot1;
                    var12 = var1.context;
                    var1 = _closure2_slot1;
                    var17 = var1.userId;
                    var1 = _closure2_slot1;
                    var16 = var1.roleIds;
                    var1 = _closure2_slot1;
                    var15 = var1.isImpersonating;
                    var3 = var8.applicationId;
                    var1 = _closure2_slot2;
                    var1 = var3 in var1;
                    if(var1) { _fun0016_ip = 121; continue _fun0016 }
case 86:
                    var6 = _closure1_slot8;
                    var5 = _closure2_slot0;
                    var1 = var8.applicationId;
                    var3 = undefined;
                    var1 = var6.bind(var3)(var5, var1);
                    var10 = var1.descriptor;
                    var6 = var1.isGuildInstalled;
                    var5 = var1.isUserInstalled;
                    var1 = null;
                    var9 = var1 == var12;
                    var7 = undefined;
                    if(var9) { _fun0016_ip = 122; continue _fun0016 }
case 123:
                    var7 = var12.guild_id;
case 122:
                    var7 = var1 != var7;
                    var9 = null;
                    if(!var7) { _fun0016_ip = 20; continue _fun0016 }
case 124:
                    var11 = _closure1_slot2;
                    var13 = _closure1_slot3;
                    var7 = 11;
                    var7 = var13[var7];
                    var14 = var11.bind(var3)(var7);
                    var13 = var14.computeAllowedForUser;
                    var7 = var1 == var10;
                    var11 = undefined;
                    if(var7) { _fun0016_ip = 125; continue _fun0016 }
case 126:
                    var11 = var10.permissions;
case 125:
                    var21 = var12.guild_id;
                    var23 = var14;
                    var22 = var11;
                    var20 = var17;
                    var19 = var16;
                    var18 = var15;
                    var9 = var23[var13](var22, var21, var20, var19, var18, var17);
case 20:
                    var11 = var1 == var12;
                    var7 = undefined;
                    if(var11) { _fun0016_ip = 106; continue _fun0016 }
case 127:
                    var7 = var12.guild_id;
case 106:
                    var11 = var1 != var7;
                    var7 = null;
                    if(!var11) { _fun0016_ip = 128; continue _fun0016 }
case 129:
                    var11 = _closure1_slot2;
                    var13 = _closure1_slot3;
                    var4 = 11;
                    var4 = var13[var4];
                    var11 = var11.bind(var3)(var4);
                    var4 = var11.computeAllowedForChannel;
                    var1 = var1 == var10;
                    var3 = undefined;
                    if(var1) { _fun0016_ip = 130; continue _fun0016 }
case 131:
                    var3 = var10.permissions;
case 130:
                    var1 = var12.guild_id;
                    var7 = var4.bind(var11)(var3, var12, var1);
case 128:
                    var4 = _closure2_slot2;
                    var3 = var8.applicationId;
                    var1 = {};
                    var1['descriptor'] = var10;
                    var1['applicationAllowedForUser'] = var9;
                    var1['applicationAllowedForChannel'] = var7;
                    var1['isGuildInstalled'] = var6;
                    var1['isUserInstalled'] = var5;
                    var4[var3] = var1;
case 121:
                    var3 = _closure2_slot2;
                    var1 = var8.applicationId;
                    var1 = var3[var1];
                    var12 = var1.descriptor;
                    var11 = var1.applicationAllowedForChannel;
                    var13 = var1.applicationAllowedForUser;
                    var10 = var1.isGuildInstalled;
                    var9 = var1.isUserInstalled;
                    var6 = _closure1_slot2;
                    var3 = _closure1_slot3;
                    var5 = 11;
                    var3 = var3[var5];
                    var4 = undefined;
                    var7 = var6.bind(var4)(var3);
                    var6 = var7.hasAccess;
                    var3 = _closure2_slot1;
                    var2 = {};
                    var2['applicationAllowedForUser'] = var13;
                    var2['applicationAllowedForChannel'] = var11;
                    var11 = null;
                    var13 = var11 == var12;
                    var11 = undefined;
                    if(var13) { _fun0016_ip = 132; continue _fun0016 }
case 133:
                    var11 = var12.botId;
case 132:
                    var2['commandBotId'] = var11;
                    var2['isGuildInstalled'] = var10;
                    var2['isUserInstalled'] = var9;
                    var2 = var6.bind(var7)(var8, var3, var2);
                    var3 = _closure1_slot0;
                    var1 = _closure1_slot3;
                    var1 = var1[var5];
                    var1 = var3.bind(var4)(var1);
                    var1 = var1.HasAccessResult;
                    var1 = var1.ALLOWED;
                    var1 = var2 === var1;
                    return var1;
                }
            };
            return var1;
        }
    };
    var _closure1_slot28 = var13;
    var12 = function defaultCommandBucketing(arg1) {
        var4 = arg1;
        var1 = _closure1_slot30;
        var3 = undefined;
        var5 = var1.bind(var3)(var4);
        var1 = new Array(5);
        var1[0] = var5;
        var5 = _closure1_slot31;
        var5 = var5.bind(var3)(var4);
        var1[1] = var5;
        var5 = _closure1_slot32;
        var5 = var5.bind(var3)(var4);
        var1[2] = var5;
        var5 = _closure1_slot33;
        var5 = var5.bind(var3)(var4);
        var1[3] = var5;
        var2 = _closure1_slot34;
        var2 = var2.bind(var3)(var4);
        var1[4] = var2;
        return var1;
    };
    var _closure1_slot29 = var12;
    var11 = function bucketRootCommandNameStartsWith(arg1) {
        var2 = arg1;
        var _closure2_slot0 = var2;
        var1 = function(arg1) {
            _fun0017: for(var _fun0017_ip = 0; ; ) switch(_fun0017_ip) {
case 0:
                var1 = arg1;
                var5 = var1.untranslatedName;
                var4 = var1.displayName;
                var3 = var5.startsWith;
                var1 = _closure2_slot0;
                var1 = var3.bind(var5)(var1);
                if(var1) { _fun0017_ip = 115; continue _fun0017 }
case 134:
                var3 = var4.startsWith;
                var2 = _closure2_slot0;
                var1 = var3.bind(var4)(var2);
case 115:
                return var1;
            }
        };
        return var1;
    };
    var _closure1_slot30 = var11;
    var10 = function bucketFullCommandNameStartsWith(arg1) {
        _fun0018: for(var _fun0018_ip = 0; ; ) switch(_fun0018_ip) {
case 0:
            var5 = arg1;
            var2 = null;
            var2 = var2 == var5;
            var4 = undefined;
            if(var2) { _fun0018_ip = 3; continue _fun0018 }
case 135:
            var3 = var5.split;
            var2 = ' ';
            var4 = var3.bind(var5)(var2);
case 3:
            var2 = 0;
            var2 = var4[var2];
            var _closure2_slot0 = var2;
            var3 = var4.slice;
            var2 = 1;
            var4 = var3.bind(var4)(var2);
            var3 = var4.join;
            var2 = ' ';
            var2 = var3.bind(var4)(var2);
            var _closure2_slot1 = var2;
            var1 = function(arg1) {
                _fun0019: for(var _fun0019_ip = 0; ; ) switch(_fun0019_ip) {
case 0:
                    var1 = arg1;
                    var4 = var1.untranslatedName;
                    var3 = var1.displayName;
                    var5 = var4.startsWith;
                    var2 = _closure2_slot0;
                    var2 = var5.bind(var4)(var2);
                    if(!var2) { _fun0019_ip = 136; continue _fun0019 }
case 134:
                    var2 = var4.split;
                    var5 = ' ';
                    var6 = var2.bind(var4)(var5);
                    var4 = var6.slice;
                    var2 = 1;
                    var4 = var4.bind(var6)(var2);
                    var2 = var4.join;
                    var5 = var2.bind(var4)(var5);
                    var4 = var5.startsWith;
                    var2 = _closure2_slot1;
                    var2 = var4.bind(var5)(var2);
                    if(var2) { _fun0019_ip = 125; continue _fun0019 }
case 136:
                    var4 = var3.startsWith;
                    var2 = _closure2_slot0;
                    var2 = var4.bind(var3)(var2);
                    if(!var2) { _fun0019_ip = 14; continue _fun0019 }
case 137:
                    var2 = var3.split;
                    var4 = ' ';
                    var5 = var2.bind(var3)(var4);
                    var3 = var5.slice;
                    var2 = 1;
                    var3 = var3.bind(var5)(var2);
                    var2 = var3.join;
                    var3 = var2.bind(var3)(var4);
                    var2 = var3.startsWith;
                    var1 = _closure2_slot1;
                    var1 = var2.bind(var3)(var1);
                    if(var1) { _fun0019_ip = 138; continue _fun0019 }
case 14:
                    var1 = false;
                    return var1;
case 138:
                    var1 = true;
                    return var1;
case 125:
                    var1 = true;
                    return var1;
                }
            };
            return var1;
        }
    };
    var _closure1_slot31 = var10;
    var9 = function bucketCommandNameContains(arg1) {
        var2 = arg1;
        var _closure2_slot0 = var2;
        var1 = function(arg1) {
            _fun0020: for(var _fun0020_ip = 0; ; ) switch(_fun0020_ip) {
case 0:
                var1 = arg1;
                var5 = var1.untranslatedName;
                var4 = var1.displayName;
                var3 = var5.includes;
                var1 = _closure2_slot0;
                var1 = var3.bind(var5)(var1);
                if(var1) { _fun0020_ip = 92; continue _fun0020 }
case 84:
                var3 = var4.includes;
                var2 = _closure2_slot0;
                var1 = var3.bind(var4)(var2);
case 92:
                return var1;
            }
        };
        return var1;
    };
    var _closure1_slot32 = var9;
    var8 = function bucketOptionNameStartsWithOrCommandAndOptionStartsWith(arg1) {
        var2 = arg1;
        var _closure2_slot0 = var2;
        var1 = function(arg1) {
            _fun0021: for(var _fun0021_ip = 0; ; ) switch(_fun0021_ip) {
case 0:
                var10 = arg1;
                var2 = _closure1_slot16;
                var1 = var10.options;
                var9 = null;
                if(!(var9 == var1)) { _fun0021_ip = 139; continue _fun0021 }
case 140:
                var1 = new Array(0);
case 139:
                var8 = undefined;
                var7 = var2.bind(var8)(var1);
                var2 = var7.bind(var8)();
                var1 = var2.done;
                var6 = global;
                var5 = '';
                var4 = ' ';
                if(var1) { _fun0021_ip = 141; continue _fun0021 }
case 98:
                var1 = var2.value;
                var13 = var1.name;
                var12 = var1.serverLocalizedName;
                var11 = var13.startsWith;
                var1 = _closure2_slot0;
                var1 = var11.bind(var13)(var1);
                if(var1) { _fun0021_ip = 142; continue _fun0021 }
case 116:
                var11 = var10.untranslatedName;
                var1 = var6.HermesInternal;
                var1 = var1.concat;
                var14 = var1.bind(var5)(var11, var4, var13);
                var11 = var14.startsWith;
                var1 = _closure2_slot0;
                var1 = var11.bind(var14)(var1);
                if(var1) { _fun0021_ip = 142; continue _fun0021 }
case 143:
                var1 = var10.displayName;
                if(!(var9 != var1)) { _fun0021_ip = 20; continue _fun0021 }
case 144:
                var11 = var10.displayName;
                var1 = var6.HermesInternal;
                var1 = var1.concat;
                var13 = var1.bind(var5)(var11, var4, var13);
                var11 = var13.startsWith;
                var1 = _closure2_slot0;
                var1 = var11.bind(var13)(var1);
                if(var1) { _fun0021_ip = 142; continue _fun0021 }
case 20:
                if(!(var9 != var12)) { _fun0021_ip = 145; continue _fun0021 }
case 146:
                var11 = var12.startsWith;
                var1 = _closure2_slot0;
                var1 = var11.bind(var12)(var1);
                if(var1) { _fun0021_ip = 147; continue _fun0021 }
case 148:
                var11 = var10.untranslatedName;
                var1 = var6.HermesInternal;
                var1 = var1.concat;
                var13 = var1.bind(var5)(var11, var4, var12);
                var11 = var13.startsWith;
                var1 = _closure2_slot0;
                var1 = var11.bind(var13)(var1);
                if(var1) { _fun0021_ip = 147; continue _fun0021 }
case 130:
                var1 = var10.displayName;
                if(!(var9 != var1)) { _fun0021_ip = 145; continue _fun0021 }
case 149:
                var11 = var10.displayName;
                var1 = var6.HermesInternal;
                var1 = var1.concat;
                var12 = var1.bind(var5)(var11, var4, var12);
                var11 = var12.startsWith;
                var1 = _closure2_slot0;
                var1 = var11.bind(var12)(var1);
                if(var1) { _fun0021_ip = 147; continue _fun0021 }
case 145:
                var11 = var7.bind(var8)();
                var1 = var11.done;
                var2 = var11;
                if(var1) { _fun0021_ip = 141; continue _fun0021 }
case 150:
                _fun0021_ip = 98; continue _fun0021;
case 147:
                var1 = true;
                return var1;
case 142:
                var1 = true;
                return var1;
case 141:
                var1 = false;
                return var1;
            }
        };
        return var1;
    };
    var _closure1_slot33 = var8;
    var7 = function bucketCommandOptionNameContains(arg1) {
        var2 = arg1;
        var _closure2_slot0 = var2;
        var1 = function(arg1) {
            _fun0022: for(var _fun0022_ip = 0; ; ) switch(_fun0022_ip) {
case 0:
                var2 = _closure1_slot16;
                var1 = arg1;
                var1 = var1.options;
                var6 = null;
                if(!(var6 == var1)) { _fun0022_ip = 139; continue _fun0022 }
case 140:
                var1 = new Array(0);
case 139:
                var5 = undefined;
                var4 = var2.bind(var5)(var1);
                var2 = var4.bind(var5)();
                var1 = var2.done;
                if(var1) { _fun0022_ip = 99; continue _fun0022 }
case 91:
                var1 = var2.value;
                var9 = var1.name;
                var8 = var1.serverLocalizedName;
                var7 = var9.includes;
                var1 = _closure2_slot0;
                var1 = var7.bind(var9)(var1);
                if(var1) { _fun0022_ip = 151; continue _fun0022 }
case 38:
                if(!(var6 != var8)) { _fun0022_ip = 152; continue _fun0022 }
case 45:
                var7 = var8.includes;
                var1 = _closure2_slot0;
                var1 = var7.bind(var8)(var1);
                if(var1) { _fun0022_ip = 151; continue _fun0022 }
case 152:
                var7 = var4.bind(var5)();
                var1 = var7.done;
                var2 = var7;
                if(var1) { _fun0022_ip = 99; continue _fun0022 }
case 123:
                _fun0022_ip = 91; continue _fun0022;
case 151:
                var1 = true;
                return var1;
case 99:
                var1 = false;
                return var1;
            }
        };
        return var1;
    };
    var _closure1_slot34 = var7;
    var6 = function defaultCommandsSort(arg1) {
        var4 = _closure1_slot36;
        var3 = undefined;
        var1 = arg1;
        var3 = var4.bind(var3)(var1);
        var1 = new Array(2);
        var1[0] = var3;
        var2 = _closure1_slot37;
        var1[1] = var2;
        return var1;
    };
    var _closure1_slot35 = var6;
    var5 = function sortCommandsByFreceny(arg1) {
        var2 = arg1;
        var _closure2_slot0 = var2;
        var1 = function(arg1, arg2) {
            var4 = _closure1_slot6;
            var3 = var4.getScoreWithoutLoadingLatest;
            var5 = _closure2_slot0;
            var2 = arg1;
            var2 = var3.bind(var4)(var5, var2);
            var4 = _closure1_slot6;
            var3 = var4.getScoreWithoutLoadingLatest;
            var1 = arg2;
            var1 = var3.bind(var4)(var5, var1);
            var1 = var1 - var2;
            return var1;
        };
        return var1;
    };
    var _closure1_slot36 = var5;
    var4 = function sortCommandsAlpha(arg1, arg2) {
        var4 = _closure1_slot7;
        var1 = arg1;
        var3 = var1.displayName;
        var1 = arg2;
        var2 = var1.displayName;
        var1 = undefined;
        var1 = var4.bind(var1)(var3, var2);
        return var1;
    };
    var _closure1_slot37 = var4;
    var1 = global;
    var30 = var1.Object;
    var29 = var30.defineProperty;
    var24 = {};
    var1 = true;
    var24['value'] = var1;
    var1 = '__esModule';
    var1 = var29.bind(var30)(var3, var1, var24);
    var1 = 0;
    var24 = var26[var1];
    var1 = undefined;
    var24 = var28.bind(var1)(var24);
    var _closure1_slot4 = var24;
    var24 = 1;
    var24 = var26[var24];
    var24 = var27.bind(var1)(var24);
    var _closure1_slot5 = var24;
    var24 = 2;
    var24 = var26[var24];
    var24 = var28.bind(var1)(var24);
    var _closure1_slot6 = var24;
    var24 = 3;
    var24 = var26[var24];
    var24 = var25.bind(var1)(var24);
    var27 = var24.appLauncherOnlyCompareNames;
    var _closure1_slot7 = var27;
    var27 = var24.getSection;
    var _closure1_slot8 = var27;
    var27 = var24.useContextIndexState;
    var _closure1_slot9 = var27;
    var24 = var24.useUserIndexState;
    var _closure1_slot10 = var24;
    var24 = 4;
    var24 = var26[var24];
    var24 = var28.bind(var1)(var24);
    var _closure1_slot11 = var24;
    var24 = 5;
    var27 = var26[var24];
    var27 = var28.bind(var1)(var27);
    var _closure1_slot12 = var27;
    var24 = var26[var24];
    var24 = var25.bind(var1)(var24);
    var24 = var24.FetchState;
    var _closure1_slot13 = var24;
    var24 = 6;
    var24 = var26[var24];
    var24 = var25.bind(var1)(var24);
    var24 = var24.BuiltInSectionId;
    var _closure1_slot14 = var24;
    var24 = 7;
    var24 = var26[var24];
    var24 = var25.bind(var1)(var24);
    var24 = var24.COMMAND_SENTINEL;
    var _closure1_slot15 = var24;
    var24 = 20;
    var24 = var26[var24];
    var26 = var25.bind(var1)(var24);
    var25 = var26.fileFinishedImporting;
    var24 = 'modules/app_launcher/utils/AppLauncherSearchUtils.tsx';
    var24 = var25.bind(var26)(var24);
    var3['useApplicationsInContext'] = var23;
    var3['useApplicationCommandsInContext'] = var22;
    var3['filterApplicationAllowed'] = var21;
    var3['defaultApplicationBucketing'] = var20;
    var3['bucketApplicationNameStartsWith'] = var19;
    var3['bucketApplicationNameContains'] = var18;
    var3['bucketApplicationDescriptionStartsWith'] = var17;
    var3['bucketApplicationDescriptionContains'] = var16;
    var3['sortApplicationFreceny'] = var15;
    var3['sortApplicationAlpha'] = var14;
    var3['filterCommandAllowed'] = var13;
    var3['defaultCommandBucketing'] = var12;
    var3['bucketRootCommandNameStartsWith'] = var11;
    var3['bucketFullCommandNameStartsWith'] = var10;
    var3['bucketCommandNameContains'] = var9;
    var3['bucketOptionNameStartsWithOrCommandAndOptionStartsWith'] = var8;
    var3['bucketCommandOptionNameContains'] = var7;
    var7 = function bucketCommandSectionNameStartsWith(arg1, arg2) {
        var2 = arg1;
        var _closure2_slot0 = var2;
        var2 = arg2;
        var _closure2_slot1 = var2;
        var2 = {};
        var _closure2_slot2 = var2;
        var1 = function(arg1) {
            _fun0023: for(var _fun0023_ip = 0; ; ) switch(_fun0023_ip) {
case 0:
                var1 = arg1;
                var _closure3_slot0 = var1;
                var5 = var1.applicationId;
                var4 = _closure2_slot2;
                var4 = var5 in var4;
                if(var4) { _fun0023_ip = 153; continue _fun0023 }
case 154:
                var5 = _closure2_slot0;
                var4 = var5.find;
                var3 = function(arg1) {
                    var1 = arg1;
                    var2 = var1.id;
                    var1 = _closure3_slot0;
                    var1 = var1.applicationId;
                    var1 = var2 === var1;
                    return var1;
                };
                var3 = var4.bind(var5)(var3);
                var5 = _closure1_slot0;
                var4 = _closure1_slot3;
                var9 = 10;
                var4 = var4[var9];
                var8 = undefined;
                var5 = var5.bind(var8)(var4);
                var4 = var5.getSectionName;
                var7 = null;
                if(!(var7 == var3)) { _fun0023_ip = 155; continue _fun0023 }
case 136:
                var7 = _closure1_slot0;
                var6 = _closure1_slot3;
                var6 = var6[var9];
                var6 = var7.bind(var8)(var6);
                var3 = var6.FAKE_BUILT_IN_APP;
case 155:
                var4 = var4.bind(var5)(var3);
                var3 = var4.toLocaleLowerCase;
                var5 = var3.bind(var4)();
                var4 = var5.startsWith;
                var6 = _closure2_slot1;
                var3 = var6.toLocaleLowerCase;
                var3 = var3.bind(var6)();
                var3 = var4.bind(var5)(var3);
                var5 = _closure2_slot2;
                var4 = var1.applicationId;
                var5[var4] = var3;
                return var3;
case 153:
                var2 = _closure2_slot2;
                var1 = var1.applicationId;
                var1 = var2[var1];
                return var1;
            }
        };
        return var1;
    };
    var3['bucketCommandSectionNameStartsWith'] = var7;
    var7 = function bucketCommandSectionNameContains(arg1, arg2) {
        var2 = arg1;
        var _closure2_slot0 = var2;
        var2 = arg2;
        var _closure2_slot1 = var2;
        var2 = {};
        var _closure2_slot2 = var2;
        var1 = function(arg1) {
            _fun0024: for(var _fun0024_ip = 0; ; ) switch(_fun0024_ip) {
case 0:
                var1 = arg1;
                var _closure3_slot0 = var1;
                var5 = var1.applicationId;
                var4 = _closure2_slot2;
                var4 = var5 in var4;
                if(var4) { _fun0024_ip = 138; continue _fun0024 }
case 154:
                var5 = _closure2_slot0;
                var4 = var5.find;
                var3 = function(arg1) {
                    var1 = arg1;
                    var2 = var1.id;
                    var1 = _closure3_slot0;
                    var1 = var1.applicationId;
                    var1 = var2 === var1;
                    return var1;
                };
                var3 = var4.bind(var5)(var3);
                var5 = _closure1_slot0;
                var4 = _closure1_slot3;
                var9 = 10;
                var4 = var4[var9];
                var8 = undefined;
                var5 = var5.bind(var8)(var4);
                var4 = var5.getSectionName;
                var7 = null;
                if(!(var7 == var3)) { _fun0024_ip = 155; continue _fun0024 }
case 136:
                var7 = _closure1_slot0;
                var6 = _closure1_slot3;
                var6 = var6[var9];
                var6 = var7.bind(var8)(var6);
                var3 = var6.FAKE_BUILT_IN_APP;
case 155:
                var4 = var4.bind(var5)(var3);
                var3 = var4.toLocaleLowerCase;
                var5 = var3.bind(var4)();
                var4 = var5.includes;
                var6 = _closure2_slot1;
                var3 = var6.toLocaleLowerCase;
                var3 = var3.bind(var6)();
                var3 = var4.bind(var5)(var3);
                var5 = _closure2_slot2;
                var4 = var1.applicationId;
                var5[var4] = var3;
                return var3;
case 138:
                var2 = _closure2_slot2;
                var1 = var1.applicationId;
                var1 = var2[var1];
                return var1;
            }
        };
        return var1;
    };
    var3['bucketCommandSectionNameContains'] = var7;
    var3['defaultCommandsSort'] = var6;
    var3['sortCommandsByFreceny'] = var5;
    var3['sortCommandsAlpha'] = var4;
    var4 = function useLocalSearchResults(arg1) {
        _fun0025: for(var _fun0025_ip = 0; ; ) switch(_fun0025_ip) {
case 0:
            var2 = arg1;
            var11 = var2.context;
            var _closure2_slot0 = var11;
            var7 = var2.query;
            var _closure2_slot1 = var7;
            var6 = var2.commandLimit;
            var _closure2_slot2 = var6;
            var12 = var2.applicationLimit;
            var _closure2_slot3 = var12;
            var3 = var2.searchesCommands;
            var15 = undefined;
            if(!(var3 === var15)) { _fun0025_ip = 156; continue _fun0025 }
case 28:
            var3 = true;
case 156:
            var _closure2_slot4 = var3;
            var14 = var2.searchesBots;
            if(!(var14 === var15)) { _fun0025_ip = 157; continue _fun0025 }
case 158:
            var14 = true;
case 157:
            var _closure2_slot5 = var14;
            var13 = var2.searchesActivities;
            if(!(var13 === var15)) { _fun0025_ip = 136; continue _fun0025 }
case 159:
            var13 = true;
case 136:
            var _closure2_slot6 = var13;
            var _closure2_slot7 = var15;
            var _closure2_slot8 = var15;
            var _closure2_slot9 = var15;
            var _closure2_slot10 = var15;
            var _closure2_slot11 = var15;
            var5 = var7.startsWith;
            var9 = _closure1_slot15;
            var2 = global;
            var2 = var2.HermesInternal;
            var8 = var2.concat;
            var2 = '';
            var2 = var8.bind(var2)(var9);
            var2 = var5.bind(var7)(var2);
            var10 = var7;
            if(!var2) { _fun0025_ip = 83; continue _fun0025 }
case 160:
            var5 = var7.substring;
            var2 = 1;
            var2 = var5.bind(var7)(var2);
            _closure2_slot1 = var2;
            var10 = var2;
case 83:
            var5 = _closure1_slot19;
            var2 = {};
            var2['context'] = var11;
            var7 = true;
            var2['includeBuiltIn'] = var7;
            var2 = var5.bind(var15)(var2);
            var17 = var2.commands;
            _closure2_slot7 = var17;
            var5 = var2.commandSectionMap;
            _closure2_slot8 = var5;
            var2 = var2.loading;
            var8 = _closure1_slot18;
            var7 = {'context': null, 'onlyWithCommands': true, 'includeBuiltIn': true};
            var7['context'] = var11;
            var7['includeEmbeddedApps'] = var13;
            var7['includeNonEmbeddedApps'] = var14;
            var7 = var8.bind(var15)(var7);
            var9 = var7.apps;
            _closure2_slot9 = var9;
            var8 = _closure1_slot1;
            var16 = _closure1_slot3;
            var7 = 12;
            var7 = var16[var7];
            var8 = var8.bind(var15)(var7);
            var7 = {};
            var19 = var11.type;
            var18 = 'channel';
            var16 = null;
            if(!(var18 === var19)) { _fun0025_ip = 57; continue _fun0025 }
case 161:
            var18 = var11.channel;
            var16 = var18.guild_id;
case 57:
            var7['guildId'] = var16;
            var8 = var8.bind(var15)(var7);
            _closure2_slot10 = var8;
            var16 = _closure1_slot5;
            var15 = var16.useMemo;
            var7 = new Array(5);
            var7[0] = var3;
            var7[1] = var17;
            var7[2] = var6;
            var7[3] = var11;
            var7[4] = var10;
            var6 = function() {
                _fun0026: for(var _fun0026_ip = 0; ; ) switch(_fun0026_ip) {
case 0:
                    var1 = _closure2_slot4;
                    if(var1) { _fun0026_ip = 93; continue _fun0026 }
case 162:
                    var1 = new Array(0);
                    _fun0026_ip = 15; continue _fun0026;
case 93:
                    var3 = _closure1_slot0;
                    var4 = _closure1_slot3;
                    var2 = 13;
                    var2 = var4[var2];
                    var8 = undefined;
                    var5 = var3.bind(var8)(var2);
                    var4 = var5.queryData;
                    var3 = _closure2_slot7;
                    var2 = {};
                    var7 = _closure2_slot2;
                    var2['limit'] = var7;
                    var7 = _closure1_slot28;
                    var9 = _closure2_slot0;
                    var11 = var7.bind(var8)(var9);
                    var7 = new Array(1);
                    var7[0] = var11;
                    var2['filterPredicates'] = var7;
                    var11 = _closure1_slot29;
                    var7 = _closure2_slot1;
                    var7 = var11.bind(var8)(var7);
                    var2['bucketPredicates'] = var7;
                    var7 = _closure1_slot35;
                    var6 = {};
                    var12 = var9.type;
                    var11 = 'channel';
                    var9 = undefined;
                    if(!(var11 === var12)) { _fun0026_ip = 163; continue _fun0026 }
case 164:
                    var10 = _closure2_slot0;
                    var9 = var10.channel;
case 163:
                    var6['channel'] = var9;
                    var6 = var7.bind(var8)(var6);
                    var2['sortComparers'] = var6;
                    var1 = var4.bind(var5)(var3, var2);
case 15:
                    return var1;
                }
            };
            var16 = var15.bind(var16)(var6, var7);
            _closure2_slot11 = var16;
            var15 = _closure1_slot5;
            var7 = var15.useMemo;
            var6 = new Array(3);
            var6[0] = var9;
            var6[1] = var16;
            var6[2] = var5;
            var5 = function() {
                _fun0027: for(var _fun0027_ip = 0; ; ) switch(_fun0027_ip) {
case 0:
                    var2 = _closure2_slot11;
                    var3 = var2.length;
                    var2 = 0;
                    if(!(var2 !== var3)) { _fun0027_ip = 165; continue _fun0027 }
case 29:
                    var2 = global;
                    var5 = var2.Map;
                    var6 = _closure2_slot9;
                    var3 = var6.map;
                    var2 = function(arg1) {
                        var2 = arg1;
                        var3 = var2.id;
                        var1 = new Array(2);
                        var1[0] = var3;
                        var1[1] = var2;
                        return var1;
                    };
                    var7 = var3.bind(var6)(var2);
                    var3 = var5.prototype;
                    var3 = Object.create(var3, {constructor: {value: var5}});
                    var8 = var3;
                    var2 = new var8[var5](var7, var6);
                    var2 = var2 instanceof Object ? var2 : var3;
                    var _closure3_slot0 = var2;
                    var5 = _closure1_slot1;
                    var3 = _closure1_slot3;
                    var2 = 14;
                    var3 = var3[var2];
                    var2 = undefined;
                    var3 = var5.bind(var2)(var3);
                    var2 = var3.compact;
                    var5 = _closure2_slot11;
                    var4 = var5.map;
                    var1 = function(arg1) {
                        _fun0028: for(var _fun0028_ip = 0; ; ) switch(_fun0028_ip) {
case 0:
                            var4 = arg1;
                            var3 = _closure3_slot0;
                            var2 = var3.get;
                            var1 = var4.applicationId;
                            var5 = var2.bind(var3)(var1);
                            var3 = null;
                            var2 = var3 == var5;
                            var1 = null;
                            if(var2) { _fun0028_ip = 166; continue _fun0028 }
case 167:
                            var2 = {};
                            var2['command'] = var4;
                            var2['application'] = var5;
                            var5 = _closure2_slot8;
                            var4 = var4.id;
                            var4 = var5[var4];
                            var5 = var3 != var4;
                            var3 = null;
                            if(!var5) { _fun0028_ip = 39; continue _fun0028 }
case 158:
                            var3 = var4;
case 39:
                            var2['section'] = var3;
                            var1 = var2;
case 166:
                            return var1;
                        }
                    };
                    var1 = var4.bind(var5)(var1);
                    var1 = var2.bind(var3)(var1);
                    return var1;
case 165:
                    var1 = new Array(0);
                    return var1;
                }
            };
            var7 = var7.bind(var15)(var5, var6);
            var6 = _closure1_slot5;
            var5 = var6.useMemo;
            var4 = new Array(7);
            var4[0] = var14;
            var4[1] = var13;
            var4[2] = var12;
            var4[3] = var11;
            var4[4] = var10;
            var4[5] = var9;
            var4[6] = var8;
            var1 = function() {
                _fun0029: for(var _fun0029_ip = 0; ; ) switch(_fun0029_ip) {
case 0:
                    var1 = new Array(0);
                    var3 = _closure2_slot6;
                    if(var3) { _fun0029_ip = 37; continue _fun0029 }
case 135:
                    var3 = _closure2_slot5;
                    var4 = var1;
                    if(!var3) { _fun0029_ip = 168; continue _fun0029 }
case 169:
                    var4 = _closure2_slot9;
                    _fun0029_ip = 168; continue _fun0029;
case 37:
                    var3 = global;
                    var7 = var3.Set;
                    var8 = _closure2_slot9;
                    var6 = var8.map;
                    var3 = function(arg1) {
                        var1 = arg1;
                        var1 = var1.id;
                        return var1;
                    };
                    var12 = var6.bind(var8)(var3);
                    var6 = var7.prototype;
                    var6 = Object.create(var6, {constructor: {value: var7}});
                    var13 = var6;
                    var3 = new var13[var7](var12, var11);
                    var3 = var3 instanceof Object ? var3 : var6;
                    var _closure3_slot0 = var3;
                    var6 = var1.push;
                    var11 = _closure2_slot9;
                    var3 = new Array(0);
                    var12 = var3;
                    var10 = 0;
                    var8 = arraySpread(var12, var11, var10);
                    var12 = var6;
                    var11 = var3;
                    var10 = var1;
                    var3 = apply(var12, var11, var10);
                    var3 = var1.push;
                    var9 = _closure2_slot10;
                    var8 = var9.filter;
                    var6 = function(arg1) {
                        var1 = arg1;
                        var1 = var1.application;
                        var3 = var1.id;
                        var2 = _closure3_slot0;
                        var1 = var2.has;
                        var1 = var1.bind(var2)(var3);
                        var1 = !var1;
                        return var1;
                    };
                    var8 = var8.bind(var9)(var6);
                    var6 = var8.map;
                    var2 = function(arg1) {
                        var1 = arg1;
                        var1 = var1.application;
                        return var1;
                    };
                    var11 = var6.bind(var8)(var2);
                    var2 = new Array(0);
                    var12 = var2;
                    var10 = 0;
                    var6 = arraySpread(var12, var11, var10);
                    var12 = var3;
                    var11 = var2;
                    var10 = var1;
                    var2 = apply(var12, var11, var10);
                    var4 = var1;
case 168:
                    var2 = _closure1_slot0;
                    var3 = _closure1_slot3;
                    var1 = 13;
                    var1 = var3[var1];
                    var8 = undefined;
                    var3 = var2.bind(var8)(var1);
                    var2 = var3.queryData;
                    var1 = {};
                    var7 = _closure2_slot3;
                    var1['limit'] = var7;
                    var9 = _closure1_slot20;
                    var7 = _closure2_slot0;
                    var9 = var9.bind(var8)(var7);
                    var7 = new Array(1);
                    var7[0] = var9;
                    var1['filterPredicates'] = var7;
                    var7 = _closure1_slot21;
                    var5 = _closure2_slot1;
                    var5 = var7.bind(var8)(var5);
                    var1['bucketPredicates'] = var5;
                    var7 = _closure1_slot26;
                    var5 = new Array(2);
                    var5[0] = var7;
                    var6 = _closure1_slot27;
                    var5[1] = var6;
                    var1['sortComparers'] = var5;
                    var1 = var2.bind(var3)(var4, var1);
                    return var1;
                }
            };
            var4 = var5.bind(var6)(var1, var4);
            var1 = var7.length;
            var5 = 0;
            var6 = var1 > var5;
            var1 = var4.length;
            var5 = var1 > var5;
            var1 = {};
            var1['commandResults'] = var7;
            var1['hasCommandResults'] = var6;
            var1['applicationResults'] = var4;
            var1['hasApplicationResults'] = var5;
            var4 = !var6;
            if(var6) { _fun0025_ip = 72; continue _fun0025 }
case 170:
            var4 = !var5;
case 72:
            var1['isEmptyState'] = var4;
            if(!var2) { _fun0025_ip = 171; continue _fun0025 }
case 172:
            var2 = var3;
case 171:
            var1['loading'] = var2;
            return var1;
        }
    };
    var3['useLocalSearchResults'] = var4;
    var2 = function useGlobalSearchResults(arg1) {
        _fun0030: for(var _fun0030_ip = 0; ; ) switch(_fun0030_ip) {
case 0:
            var3 = arg1;
            var2 = var3.context;
            var10 = var3.query;
            var _closure2_slot0 = var10;
            var6 = var3.fetches;
            var4 = undefined;
            if(!(var6 === var4)) { _fun0030_ip = 84; continue _fun0030 }
case 173:
            var6 = true;
case 84:
            var _closure2_slot1 = var6;
            var14 = var3.pageLimit;
            if(!(var14 === var4)) { _fun0030_ip = 98; continue _fun0030 }
case 115:
            var14 = inf;
case 98:
            var _closure2_slot2 = var14;
            var7 = var3.entrypoint;
            var _closure2_slot3 = var4;
            var _closure2_slot4 = var4;
            var _closure2_slot5 = var4;
            var _closure2_slot6 = var4;
            var _closure2_slot7 = var4;
            var _closure2_slot8 = var4;
            var _closure2_slot9 = var4;
            var _closure2_slot10 = var4;
            var _closure2_slot11 = var4;
            var8 = var10.startsWith;
            var11 = _closure1_slot15;
            var3 = global;
            var3 = var3.HermesInternal;
            var9 = var3.concat;
            var3 = '';
            var3 = var9.bind(var3)(var11);
            var3 = var8.bind(var10)(var3);
            var8 = var10;
            if(!var3) { _fun0030_ip = 174; continue _fun0030 }
case 175:
            var9 = var10.substring;
            var3 = 1;
            var3 = var9.bind(var10)(var3);
            _closure2_slot0 = var3;
            var8 = var3;
case 174:
            var9 = _closure1_slot0;
            var10 = _closure1_slot3;
            var3 = 15;
            var3 = var10[var3];
            var3 = var9.bind(var4)(var3);
            var3 = var3.AppLauncherEntrypoint;
            var3 = var3.VOICE;
            var7 = var7 === var3;
            _closure2_slot3 = var7;
            var10 = var2.type;
            var3 = 'channel';
            var9 = undefined;
            if(!(var3 === var10)) { _fun0030_ip = 176; continue _fun0030 }
case 177:
            var2 = var2.channel;
            var9 = var2.guild_id;
case 176:
            _closure2_slot4 = var9;
            var10 = _closure1_slot5;
            var2 = var10.useState;
            var3 = 1;
            var11 = var2.bind(var10)(var3);
            var10 = _closure1_slot4;
            var2 = 2;
            var2 = var10.bind(var4)(var11, var2);
            var10 = 0;
            var12 = var2[var10];
            _closure2_slot5 = var12;
            var2 = var2[var3];
            _closure2_slot6 = var2;
            var3 = _closure1_slot5;
            var2 = var3.useRef;
            var2 = var2.bind(var3)(var12);
            _closure2_slot7 = var2;
            var2['current'] = var12;
            var3 = _closure1_slot0;
            var10 = _closure1_slot3;
            var2 = 16;
            var2 = var10[var2];
            var11 = var3.bind(var4)(var2);
            var10 = var11.useStateFromStoresObject;
            var2 = _closure1_slot12;
            var4 = new Array(1);
            var4[0] = var2;
            var3 = new Array(4);
            var3[0] = var8;
            var3[1] = var9;
            var3[2] = var12;
            var3[3] = var7;
            var2 = function() {
                _fun0031: for(var _fun0031_ip = 0; ; ) switch(_fun0031_ip) {
case 0:
                    var1 = {};
                    var5 = _closure1_slot12;
                    var4 = var5.getFetchState;
                    var2 = {};
                    var6 = _closure2_slot0;
                    var2['query'] = var6;
                    var6 = _closure2_slot4;
                    var2['guildId'] = var6;
                    var6 = _closure2_slot5;
                    var2['page'] = var6;
                    var7 = _closure1_slot0;
                    var8 = _closure1_slot3;
                    var12 = 17;
                    var6 = var8[var12];
                    var3 = undefined;
                    var6 = var7.bind(var3)(var6);
                    var6 = var6.ApplicationIntegrationType;
                    var6 = var6.USER_INSTALL;
                    var2['integrationType'] = var6;
                    var11 = 1;
                    var2['minUserInstallCommandCount'] = var11;
                    var9 = true;
                    var2['excludeAppsWithCustomInstallUrl'] = var9;
                    var6 = _closure2_slot3;
                    var2['excludeNonEmbeddedApps'] = var6;
                    var2['excludeEmbeddedAppsWithoutPrimaryEntryPointAppCommand'] = var9;
                    var6 = 18;
                    var13 = var8[var6];
                    var13 = var7.bind(var3)(var13);
                    var13 = var13.SearchAppsRequestSource;
                    var13 = var13.APP_LAUNCHER;
                    var2['source'] = var13;
                    var2 = var4.bind(var5)(var2);
                    var1['fetchState'] = var2;
                    var4 = var5.getSearchResults;
                    var2 = {};
                    var13 = _closure2_slot0;
                    var2['query'] = var13;
                    var13 = _closure2_slot4;
                    var2['guildId'] = var13;
                    var13 = _closure2_slot5;
                    var2['page'] = var13;
                    var12 = var8[var12];
                    var12 = var7.bind(var3)(var12);
                    var12 = var12.ApplicationIntegrationType;
                    var12 = var12.USER_INSTALL;
                    var2['integrationType'] = var12;
                    var2['minUserInstallCommandCount'] = var11;
                    var2['excludeAppsWithCustomInstallUrl'] = var9;
                    var10 = _closure2_slot3;
                    var2['excludeNonEmbeddedApps'] = var10;
                    var2['excludeEmbeddedAppsWithoutPrimaryEntryPointAppCommand'] = var9;
                    var6 = var8[var6];
                    var6 = var7.bind(var3)(var6);
                    var6 = var6.SearchAppsRequestSource;
                    var6 = var6.APP_LAUNCHER;
                    var2['source'] = var6;
                    var4 = var4.bind(var5)(var2);
                    var2 = null;
                    var5 = var2 == var4;
                    if(var5) { _fun0031_ip = 178; continue _fun0031 }
case 179:
                    var3 = var4.totalPages;
case 178:
                    var4 = var2 != var3;
                    var2 = 0;
                    if(!var4) { _fun0031_ip = 180; continue _fun0031 }
case 181:
                    var2 = var3;
case 180:
                    var1['totalPages'] = var2;
                    return var1;
                }
            };
            var2 = var10.bind(var11)(var4, var2, var3);
            var3 = var2.fetchState;
            _closure2_slot8 = var3;
            var2 = var2.totalPages;
            _closure2_slot9 = var2;
            var13 = _closure1_slot5;
            var11 = var13.useMemo;
            var10 = new Array(5);
            var10[0] = var3;
            var10[1] = var9;
            var10[2] = var8;
            var10[3] = var12;
            var10[4] = var7;
            var4 = function() {
                _fun0032: for(var _fun0032_ip = 0; ; ) switch(_fun0032_ip) {
case 0:
                    var1 = global;
                    var4 = var1.Array;
                    var3 = var4.from;
                    var2 = {};
                    var7 = _closure2_slot8;
                    var6 = _closure1_slot13;
                    var6 = var6.FETCHED;
                    if(!(var7 !== var6)) { _fun0032_ip = 35; continue _fun0032 }
case 43:
                    var6 = _closure2_slot8;
                    var1 = _closure1_slot13;
                    var1 = var1.ERROR;
                    if(!(var6 !== var1)) { _fun0032_ip = 35; continue _fun0032 }
case 182:
                    var6 = _closure2_slot5;
                    var1 = 1;
                    var1 = var6 - var1;
                    _fun0032_ip = 157; continue _fun0032;
case 35:
                    var1 = _closure2_slot5;
case 157:
                    var2['length'] = var1;
                    var1 = function(arg1, arg2) {
                        _fun0033: for(var _fun0033_ip = 0; ; ) switch(_fun0033_ip) {
case 0:
                            var4 = _closure1_slot12;
                            var3 = var4.getSearchResults;
                            var2 = {};
                            var5 = _closure2_slot0;
                            var2['query'] = var5;
                            var5 = _closure2_slot4;
                            var2['guildId'] = var5;
                            var6 = arg2;
                            var5 = 1;
                            var6 = var6 + var5;
                            var2['page'] = var6;
                            var6 = _closure1_slot0;
                            var7 = _closure1_slot3;
                            var1 = 17;
                            var9 = var7[var1];
                            var1 = undefined;
                            var9 = var6.bind(var1)(var9);
                            var9 = var9.ApplicationIntegrationType;
                            var9 = var9.USER_INSTALL;
                            var2['integrationType'] = var9;
                            var2['minUserInstallCommandCount'] = var5;
                            var5 = true;
                            var2['excludeAppsWithCustomInstallUrl'] = var5;
                            var8 = _closure2_slot3;
                            var2['excludeNonEmbeddedApps'] = var8;
                            var2['excludeEmbeddedAppsWithoutPrimaryEntryPointAppCommand'] = var5;
                            var5 = 18;
                            var5 = var7[var5];
                            var5 = var6.bind(var1)(var5);
                            var5 = var5.SearchAppsRequestSource;
                            var5 = var5.APP_LAUNCHER;
                            var2['source'] = var5;
                            var3 = var3.bind(var4)(var2);
                            var2 = null;
                            var4 = var2 == var3;
                            if(var4) { _fun0033_ip = 14; continue _fun0033 }
case 183:
                            var1 = var3.results;
case 14:
                            if(!(var2 == var1)) { _fun0033_ip = 125; continue _fun0033 }
case 138:
                            var1 = new Array(0);
case 125:
                            return var1;
                        }
                    };
                    var1 = var3.bind(var4)(var2, var1);
                    return var1;
                }
            };
            var4 = var11.bind(var13)(var4, var10);
            _closure2_slot10 = var4;
            var13 = _closure1_slot5;
            var11 = var13.useCallback;
            var10 = new Array(4);
            var10[0] = var3;
            var10[1] = var14;
            var10[2] = var4;
            var10[3] = var2;
            var2 = function() {
                _fun0034: for(var _fun0034_ip = 0; ; ) switch(_fun0034_ip) {
case 0:
                    var2 = _closure2_slot10;
                    var5 = var2.length;
                    var3 = _closure2_slot8;
                    var2 = _closure1_slot13;
                    var2 = var2.FETCHED;
                    var2 = var3 === var2;
                    if(!var2) { _fun0034_ip = 5; continue _fun0034 }
case 167:
                    var3 = _closure2_slot7;
                    var3 = var3.current;
                    var2 = var5 === var3;
case 5:
                    if(!var2) { _fun0034_ip = 156; continue _fun0034 }
case 184:
                    var3 = 0;
                    var2 = var5 > var3;
case 156:
                    if(!var2) { _fun0034_ip = 85; continue _fun0034 }
case 7:
                    var3 = _closure2_slot9;
                    var2 = var5 < var3;
case 85:
                    if(!var2) { _fun0034_ip = 38; continue _fun0034 }
case 158:
                    var3 = _closure2_slot2;
                    var2 = var5 < var3;
case 38:
                    if(!var2) { _fun0034_ip = 185; continue _fun0034 }
case 186:
                    var4 = _closure2_slot10;
                    var3 = 1;
                    var3 = var5 - var3;
                    var3 = var4[var3];
                    var4 = var3.length;
                    var3 = 0;
                    var2 = var4 > var3;
case 185:
                    if(!var2) { _fun0034_ip = 53; continue _fun0034 }
case 187:
                    var3 = _closure2_slot7;
                    var2 = var3.current;
                    var2 = var2 + 1;
                    var3['current'] = var2;
                    var3 = _closure2_slot6;
                    var2 = undefined;
                    var1 = function(arg1) {
                        var2 = arg1;
                        var1 = 1;
                        var1 = var2 + var1;
                        return var1;
                    };
                    var1 = var3.bind(var2)(var1);
case 53:
                    var1 = undefined;
                    return var1;
                }
            };
            var2 = var11.bind(var13)(var2, var10);
            var13 = _closure1_slot5;
            var11 = var13.useCallback;
            var10 = new Array(1);
            var10[0] = var7;
            var7 = function(arg1) {
                var1 = arg1;
                var9 = var1.query;
                var7 = var1.page;
                var5 = var1.guildId;
                var3 = _closure1_slot2;
                var8 = _closure1_slot3;
                var1 = 19;
                var2 = var8[var1];
                var1 = undefined;
                var4 = var3.bind(var1)(var2);
                var3 = var4.search;
                var2 = {};
                var2['query'] = var9;
                var2['guildId'] = var5;
                var5 = {'page': null, 'integrationType': null, 'minUserInstallCommandCount': 1, 'excludeAppsWithCustomInstallUrl': true, 'excludeNonEmbeddedApps': null, 'excludeEmbeddedAppsWithoutPrimaryEntryPointAppCommand': true};
                var5['page'] = var7;
                var7 = _closure1_slot0;
                var6 = 17;
                var6 = var8[var6];
                var6 = var7.bind(var1)(var6);
                var6 = var6.ApplicationIntegrationType;
                var6 = var6.USER_INSTALL;
                var5['integrationType'] = var6;
                var6 = _closure2_slot3;
                var5['excludeNonEmbeddedApps'] = var6;
                var6 = 18;
                var6 = var8[var6];
                var6 = var7.bind(var1)(var6);
                var6 = var6.SearchAppsRequestSource;
                var6 = var6.APP_LAUNCHER;
                var5['source'] = var6;
                var2['options'] = var5;
                var2 = var3.bind(var4)(var2);
                return var1;
            };
            var13 = var11.bind(var13)(var7, var10);
            _closure2_slot11 = var13;
            var11 = _closure1_slot5;
            var10 = var11.useEffect;
            var7 = new Array(5);
            var7[0] = var8;
            var7[1] = var9;
            var7[2] = var13;
            var7[3] = var12;
            var7[4] = var6;
            var6 = function() {
                _fun0035: for(var _fun0035_ip = 0; ; ) switch(_fun0035_ip) {
case 0:
                    var2 = _closure2_slot1;
                    if(!var2) { _fun0035_ip = 5; continue _fun0035 }
case 162:
                    var3 = _closure2_slot11;
                    var2 = {};
                    var4 = _closure2_slot0;
                    var2['query'] = var4;
                    var4 = _closure2_slot5;
                    var2['page'] = var4;
                    var1 = _closure2_slot4;
                    var2['guildId'] = var1;
                    var1 = undefined;
                    var1 = var3.bind(var1)(var2);
case 5:
                    var1 = undefined;
                    return var1;
                }
            };
            var6 = var10.bind(var11)(var6, var7);
            var7 = _closure1_slot5;
            var6 = var7.useEffect;
            var5 = new Array(2);
            var5[0] = var9;
            var5[1] = var8;
            var1 = function() {
                var3 = _closure2_slot6;
                var1 = undefined;
                var2 = 1;
                var2 = var3.bind(var1)(var2);
                return var1;
            };
            var1 = var6.bind(var7)(var1, var5);
            var1 = {};
            var1['fetchState'] = var3;
            var3 = var4.flat;
            var3 = var3.bind(var4)();
            var1['applicationResults'] = var3;
            var1['fetchNextPage'] = var2;
            return var1;
        }
    };
    var3['useGlobalSearchResults'] = var2;
    return var1;
})();