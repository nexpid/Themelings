// app/modules/devtools/native/components/screens/DevToolsExperimentsScreen.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var13 = metroImportDefault;
    var3 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var13;
    var _closure1_slot2 = var7;
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
    var1 = function UserExperimentDebugView(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var1 = arg1;
            var14 = var1.id;
            var19 = var1.override;
            var2 = var1.experiment;
            var1 = _closure1_slot13;
            var4 = undefined;
            var5 = var1.bind(var4)();
            var6 = _closure1_slot7;
            var1 = var6.getId;
            var6 = var1.bind(var6)();
            var7 = _closure1_slot7;
            var1 = var7.getInstallationForTracking;
            var9 = var1.bind(var7)();
            var18 = null;
            var7 = var18 != var9;
            var1 = null;
            if(!var7) { _fun0004_ip = 36; continue _fun0004 }
case 37:
            var8 = _closure1_slot0;
            var10 = _closure1_slot2;
            var7 = 25;
            var7 = var10[var7];
            var8 = var8.bind(var4)(var7);
            var7 = var8.maybeExtractId;
            var1 = var7.bind(var8)(var9);
case 36:
            var8 = var2.kind;
            var7 = 'installation';
            var10 = var6;
            if(!(var7 === var8)) { _fun0004_ip = 38; continue _fun0004 }
case 39:
            var10 = var6;
            if(!(var18 != var1)) { _fun0004_ip = 38; continue _fun0004 }
case 40:
            var10 = var1;
case 38:
            var6 = _closure1_slot0;
            var7 = _closure1_slot2;
            var8 = 26;
            var1 = var7[var8];
            var9 = var6.bind(var4)(var1);
            var1 = var9.useExperimentAssignment;
            var1 = var1.bind(var9)(var2, var10);
            var8 = var7[var8];
            var9 = var6.bind(var4)(var8);
            var8 = var9.useExperimentServerAssignment;
            var24 = var8.bind(var9)(var2, var10);
            var9 = _closure1_slot1;
            var8 = 15;
            var8 = var7[var8];
            var12 = var9.bind(var4)(var8);
            var10 = var12.sortBy;
            var13 = _closure1_slot6;
            var9 = var13.getRecentExposures;
            var8 = _closure1_slot10;
            var8 = var8.USER;
            var9 = var9.bind(var13)(var8, var14);
            var8 = function(arg1) {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                    var4 = arg1;
                    var2 = var4[Symbol.iterator];
                    var4 = var2().next;
                    var1 = var4().value;
                    var1 = var2;
                    var6 = undefined;
                    var3 = var1 === var6;
                    var1 = undefined;
                    if(var3) { _fun0005_ip = 5; continue _fun0005 }
case 41:
                    var5 = var4().value;
                    var4 = var2;
                    var4 = var4 === var6;
                    var1 = undefined;
                    var3 = var4;
                    if(var4) { _fun0005_ip = 5; continue _fun0005 }
case 42:
                    var1 = var5;
                    var3 = var4;
case 5:
                    if(var3) { _fun0005_ip = 4; continue _fun0005 }
case 43:
                    var2.return();
case 4:
                    var1 = -var1;
                    return var1;
                }
            };
            var9 = var10.bind(var12)(var9, var8);
            var8 = var9.map;
            var3 = function(arg1) {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                    var3 = arg1;
                    var1 = var3[Symbol.iterator];
                    var3 = var1().next;
                    var4 = var3().value;
                    var2 = var1;
                    var7 = undefined;
                    var2 = var2 === var7;
                    var6 = undefined;
                    if(var2) { _fun0006_ip = 44; continue _fun0006 }
case 41:
                    var6 = var4;
case 44:
                    var4 = undefined;
                    if(var2) { _fun0006_ip = 45; continue _fun0006 }
case 46:
                    var5 = var3().value;
                    var3 = var1;
                    var3 = var3 === var7;
                    var4 = undefined;
                    var2 = var3;
                    if(var3) { _fun0006_ip = 45; continue _fun0006 }
case 47:
                    var4 = var5;
                    var2 = var3;
case 45:
                    if(var2) { _fun0006_ip = 48; continue _fun0006 }
case 49:
                    var1.return();
case 48:
                    var1 = global;
                    var2 = var1.Date;
                    var3 = var2.prototype;
                    var3 = Object.create(var3, {constructor: {value: var2}});
                    var12 = var3;
                    var11 = var4;
                    var2 = new var12[var2](var11, var10);
                    var3 = var2 instanceof Object ? var2 : var3;
                    var2 = var3.toLocaleString;
                    var11 = var2.bind(var3)();
                    var1 = var1.HermesInternal;
                    var4 = var1.concat;
                    var12 = '';
                    var10 = ' (';
                    var8 = ')';
                    var9 = var6;
                    var1 = var12[var4](var11, var10, var9, var8, var7);
                    return var1;
                }
            };
            var15 = var8.bind(var9)(var3);
            var3 = var2.system;
            var2 = 21;
            var2 = var7[var2];
            var2 = var6.bind(var4)(var2);
            var2 = var2.ExperimentSystem;
            var2 = var2.LEGACY;
            if(!(var3 !== var2)) { _fun0004_ip = 50; continue _fun0004 }
case 51:
            var2 = var18 != var1;
            var14 = 'Currently unassigned';
            if(!var2) { _fun0004_ip = 52; continue _fun0004 }
case 53:
            var2 = global;
            var2 = var2.HermesInternal;
            var3 = var2.concat;
            var2 = 'Currently assigned to variant ';
            var14 = var3.bind(var2)(var1);
case 52:
            _fun0004_ip = 54; continue _fun0004;
case 50:
            var3 = var1;
            if(!(var18 == var3)) { _fun0004_ip = 55; continue _fun0004 }
case 56:
            var1 = _closure1_slot9;
            var3 = var1.NOT_ELIGIBLE;
case 55:
            var1 = global;
            var1 = var1.HermesInternal;
            var2 = var1.concat;
            var1 = 'Currently assigned to bucket ';
            var14 = var2.bind(var1)(var3);
case 54:
            var3 = _closure1_slot12;
            var2 = _closure1_slot5;
            var1 = {};
            var5 = var5.debugContainer;
            var1['style'] = var5;
            var8 = _closure1_slot11;
            var10 = _closure1_slot0;
            var9 = _closure1_slot2;
            var6 = 27;
            var5 = var9[var6];
            var5 = var10.bind(var4)(var5);
            var7 = var5.TableRowGroup;
            var5 = {'title': 'Overview', 'hasIcons': false};
            var12 = _closure1_slot11;
            var13 = 23;
            var9 = var9[var13];
            var9 = var10.bind(var4)(var9);
            var10 = var9.TableRow;
            var9 = {};
            var9['label'] = var14;
            var16 = var18 == var24;
            var14 = undefined;
            if(!var16) { _fun0004_ip = 57; continue _fun0004 }
case 58:
            var14 = 'Warning: Server did not send any experiment config. You may need to check the "Send to Client" box in the admin UI.';
case 57:
            var9['subLabel'] = var14;
            var9 = var12.bind(var4)(var10, var9);
            var5['children'] = var9;
            var7 = var8.bind(var4)(var7, var5);
            var5 = new Array(7);
            var5[0] = var7;
            var9 = _closure1_slot11;
            var12 = _closure1_slot0;
            var10 = _closure1_slot2;
            var16 = 16;
            var7 = var10[var16];
            var7 = var12.bind(var4)(var7);
            var8 = var7.Spacer;
            var7 = {};
            var7['size'] = var16;
            var7 = var9.bind(var4)(var8, var7);
            var5[1] = var7;
            var9 = _closure1_slot11;
            var7 = var10[var6];
            var7 = var12.bind(var4)(var7);
            var8 = var7.TableRowGroup;
            var7 = {'title': 'Server Descriptor', 'hasIcons': false};
            var17 = _closure1_slot11;
            var10 = var10[var13];
            var10 = var12.bind(var4)(var10);
            var14 = var10.TableRow;
            var10 = {};
            var21 = var18 == var24;
            var12 = 'None';
            var20 = var12;
            if(var21) { _fun0004_ip = 59; continue _fun0004 }
case 60:
            var21 = global;
            var23 = var21.JSON;
            var22 = var23.stringify;
            var21 = 2;
            var20 = var22.bind(var23)(var24, var4, var21);
case 59:
            var10['label'] = var20;
            var10 = var17.bind(var4)(var14, var10);
            var7['children'] = var10;
            var7 = var9.bind(var4)(var8, var7);
            var5[2] = var7;
            var9 = _closure1_slot11;
            var14 = _closure1_slot0;
            var10 = _closure1_slot2;
            var7 = var10[var16];
            var7 = var14.bind(var4)(var7);
            var8 = var7.Spacer;
            var7 = {};
            var7['size'] = var16;
            var7 = var9.bind(var4)(var8, var7);
            var5[3] = var7;
            var9 = _closure1_slot11;
            var7 = var10[var6];
            var7 = var14.bind(var4)(var7);
            var8 = var7.TableRowGroup;
            var7 = {'title': 'Override Descriptor', 'hasIcons': false};
            var17 = _closure1_slot11;
            var10 = var10[var13];
            var10 = var14.bind(var4)(var10);
            var14 = var10.TableRow;
            var10 = {};
            var20 = var18 == var19;
            var18 = var12;
            if(var20) { _fun0004_ip = 61; continue _fun0004 }
case 62:
            var20 = global;
            var22 = var20.JSON;
            var21 = var22.stringify;
            var20 = var19.originalDescriptor;
            var19 = 2;
            var18 = var21.bind(var22)(var20, var4, var19);
case 61:
            var10['label'] = var18;
            var10 = var17.bind(var4)(var14, var10);
            var7['children'] = var10;
            var7 = var9.bind(var4)(var8, var7);
            var5[4] = var7;
            var14 = _closure1_slot11;
            var10 = _closure1_slot0;
            var9 = _closure1_slot2;
            var7 = var9[var16];
            var7 = var10.bind(var4)(var7);
            var8 = var7.Spacer;
            var7 = {};
            var7['size'] = var16;
            var7 = var14.bind(var4)(var8, var7);
            var5[5] = var7;
            var8 = _closure1_slot11;
            var6 = var9[var6];
            var6 = var10.bind(var4)(var6);
            var7 = var6.TableRowGroup;
            var6 = {'title': 'Recent Exposures', 'hasIcons': false};
            var11 = _closure1_slot11;
            var9 = var9[var13];
            var9 = var10.bind(var4)(var9);
            var10 = var9.TableRow;
            var9 = {};
            var14 = var15.length;
            var13 = 0;
            if(!(var13 !== var14)) { _fun0004_ip = 63; continue _fun0004 }
case 64:
            var14 = var15.join;
            var13 = '\n';
            var12 = var14.bind(var15)(var13);
case 63:
            var9['label'] = var12;
            var9 = var11.bind(var4)(var10, var9);
            var6['children'] = var9;
            var6 = var8.bind(var4)(var7, var6);
            var5[6] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot17 = var1;
    var1 = function GuildExperimentDebugView(arg1) {
        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
            var1 = arg1;
            var13 = var1.id;
            var23 = var1.override;
            var1 = _closure1_slot13;
            var4 = undefined;
            var5 = var1.bind(var4)();
            var2 = _closure1_slot6;
            var1 = var2.getLoadedGuildExperiment;
            var27 = var1.bind(var2)(var13);
            var3 = _closure1_slot1;
            var2 = _closure1_slot2;
            var1 = 15;
            var6 = var2[var1];
            var11 = var3.bind(var4)(var6);
            var8 = var11.sortBy;
            var12 = _closure1_slot6;
            var7 = var12.getRecentExposures;
            var6 = _closure1_slot10;
            var6 = var6.GUILD;
            var7 = var7.bind(var12)(var6, var13);
            var6 = function(arg1) {
                _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                    var4 = arg1;
                    var2 = var4[Symbol.iterator];
                    var4 = var2().next;
                    var1 = var4().value;
                    var1 = var2;
                    var6 = undefined;
                    var3 = var1 === var6;
                    var1 = undefined;
                    if(var3) { _fun0008_ip = 5; continue _fun0008 }
case 41:
                    var5 = var4().value;
                    var4 = var2;
                    var4 = var4 === var6;
                    var1 = undefined;
                    var3 = var4;
                    if(var4) { _fun0008_ip = 5; continue _fun0008 }
case 42:
                    var1 = var5;
                    var3 = var4;
case 5:
                    if(var3) { _fun0008_ip = 4; continue _fun0008 }
case 43:
                    var2.return();
case 4:
                    var1 = -var1;
                    return var1;
                }
            };
            var8 = var8.bind(var11)(var7, var6);
            var7 = var8.map;
            var6 = function(arg1) {
                _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                    var3 = arg1;
                    var1 = var3[Symbol.iterator];
                    var3 = var1().next;
                    var4 = var3().value;
                    var2 = var1;
                    var7 = undefined;
                    var2 = var2 === var7;
                    var6 = undefined;
                    if(var2) { _fun0009_ip = 44; continue _fun0009 }
case 41:
                    var6 = var4;
case 44:
                    var4 = undefined;
                    if(var2) { _fun0009_ip = 45; continue _fun0009 }
case 46:
                    var5 = var3().value;
                    var3 = var1;
                    var3 = var3 === var7;
                    var4 = undefined;
                    var2 = var3;
                    if(var3) { _fun0009_ip = 45; continue _fun0009 }
case 47:
                    var4 = var5;
                    var2 = var3;
case 45:
                    if(var2) { _fun0009_ip = 48; continue _fun0009 }
case 49:
                    var1.return();
case 48:
                    var1 = global;
                    var2 = var1.Date;
                    var3 = var2.prototype;
                    var3 = Object.create(var3, {constructor: {value: var2}});
                    var12 = var3;
                    var11 = var4;
                    var2 = new var12[var2](var11, var10);
                    var3 = var2 instanceof Object ? var2 : var3;
                    var2 = var3.toLocaleString;
                    var11 = var2.bind(var3)();
                    var1 = var1.HermesInternal;
                    var4 = var1.concat;
                    var12 = '';
                    var10 = ' (';
                    var8 = ')';
                    var9 = var6;
                    var1 = var12[var4](var11, var10, var9, var8, var7);
                    return var1;
                }
            };
            var12 = var7.bind(var8)(var6);
            var2 = var2[var1];
            var7 = var3.bind(var4)(var2);
            var6 = var7.sortBy;
            var3 = _closure1_slot8;
            var2 = var3.getGuildsArray;
            var3 = var2.bind(var3)();
            var2 = function(arg1) {
                var1 = arg1;
                var2 = var1.name;
                var1 = var2.toLowerCase;
                var1 = var1.bind(var2)();
                return var1;
            };
            var6 = var6.bind(var7)(var3, var2);
            var2 = {};
            var _closure2_slot0 = var2;
            var26 = new Array(0);
            var3 = _closure1_slot15;
            var11 = var3.bind(var4)(var6);
            var6 = var11.bind(var4)();
            var3 = var6.done;
            var20 = global;
            var8 = '';
            var7 = ': ';
            var14 = 0;
            var21 = null;
            if(var3) { _fun0007_ip = 6; continue _fun0007 }
case 65:
            var3 = var6.value;
            var17 = _closure1_slot6;
            var16 = var17.getGuildExperimentDescriptor;
            var15 = var3.id;
            var15 = var16.bind(var17)(var13, var15);
            var16 = var21 == var15;
            var17 = undefined;
            if(var16) { _fun0007_ip = 66; continue _fun0007 }
case 67:
            var17 = var15.bucket;
case 66:
            if(!(var21 == var17)) { _fun0007_ip = 68; continue _fun0007 }
case 24:
            var15 = _closure1_slot9;
            var17 = var15.NOT_ELIGIBLE;
case 68:
            var15 = var17 in var2;
            if(var15) { _fun0007_ip = 69; continue _fun0007 }
case 70:
            var2[var17] = var14;
case 69:
            var15 = var2[var17];
            var15 = var15 + 1;
            var2[var17] = var15;
            var15 = var26.push;
            var16 = var3.name;
            var3 = var20.HermesInternal;
            var3 = var3.concat;
            var3 = var3.bind(var8)(var16, var7, var17);
            var3 = var15.bind(var26)(var3);
            var15 = var11.bind(var4)();
            var3 = var15.done;
            var6 = var15;
            if(!var3) { _fun0007_ip = 65; continue _fun0007 }
case 6:
            var3 = _closure1_slot1;
            var8 = _closure1_slot2;
            var1 = var8[var1];
            var1 = var3.bind(var4)(var1);
            var2 = var1.bind(var4)(var2);
            var1 = var2.keys;
            var3 = var1.bind(var2)();
            var2 = var3.map;
            var1 = var20.Number;
            var2 = var2.bind(var3)(var1);
            var1 = var2.sort;
            var3 = var1.bind(var2)();
            var2 = var3.map;
            var1 = function(arg1) {
                var5 = arg1;
                var1 = _closure2_slot0;
                var4 = var1[var5];
                var1 = global;
                var1 = var1.HermesInternal;
                var3 = var1.concat;
                var2 = '';
                var1 = ' guilds are in bucket ';
                var1 = var3.bind(var2)(var4, var1, var5);
                return var1;
            };
            var3 = var2.bind(var3)(var1);
            var2 = var3.join;
            var1 = ', ';
            var19 = var2.bind(var3)(var1);
            var3 = _closure1_slot12;
            var2 = _closure1_slot5;
            var1 = {};
            var5 = var5.debugContainer;
            var1['style'] = var5;
            var7 = _closure1_slot11;
            var15 = _closure1_slot0;
            var11 = 27;
            var5 = var8[var11];
            var5 = var15.bind(var4)(var5);
            var6 = var5.TableRowGroup;
            var5 = {'title': 'Overview', 'hasIcons': false};
            var16 = _closure1_slot11;
            var13 = 23;
            var8 = var8[var13];
            var8 = var15.bind(var4)(var8);
            var15 = var8.TableRow;
            var8 = {};
            var17 = var20.HermesInternal;
            var18 = var17.concat;
            var17 = 'Current Assignments: ';
            var17 = var18.bind(var17)(var19);
            var8['label'] = var17;
            var18 = var21 == var27;
            var17 = null;
            if(!var18) { _fun0007_ip = 71; continue _fun0007 }
case 72:
            var17 = "Warning: Server did not send any experiment config. You may need to check the 'Send to Client' box in the admin UI.";
case 71:
            var8['subLabel'] = var17;
            var8 = var16.bind(var4)(var15, var8);
            var5['children'] = var8;
            var6 = var7.bind(var4)(var6, var5);
            var5 = new Array(9);
            var5[0] = var6;
            var8 = _closure1_slot11;
            var16 = _closure1_slot0;
            var15 = _closure1_slot2;
            var17 = 16;
            var6 = var15[var17];
            var6 = var16.bind(var4)(var6);
            var7 = var6.Spacer;
            var6 = {};
            var6['size'] = var17;
            var6 = var8.bind(var4)(var7, var6);
            var5[1] = var6;
            var8 = _closure1_slot11;
            var6 = var15[var11];
            var6 = var16.bind(var4)(var6);
            var7 = var6.TableRowGroup;
            var6 = {'title': 'Guild Assignments', 'hasIcons': false};
            var22 = _closure1_slot11;
            var18 = var15[var13];
            var18 = var16.bind(var4)(var18);
            var19 = var18.TableRow;
            var18 = {};
            var25 = var26.join;
            var24 = '\n';
            var24 = var25.bind(var26)(var24);
            var18['label'] = var24;
            var18 = var22.bind(var4)(var19, var18);
            var6['children'] = var18;
            var6 = var8.bind(var4)(var7, var6);
            var5[2] = var6;
            var8 = _closure1_slot11;
            var6 = var15[var17];
            var6 = var16.bind(var4)(var6);
            var7 = var6.Spacer;
            var6 = {};
            var6['size'] = var17;
            var6 = var8.bind(var4)(var7, var6);
            var5[3] = var6;
            var8 = _closure1_slot11;
            var6 = var15[var11];
            var6 = var16.bind(var4)(var6);
            var7 = var6.TableRowGroup;
            var6 = {'title': 'Server Descriptor', 'hasIcons': false};
            var18 = _closure1_slot11;
            var15 = var15[var13];
            var15 = var16.bind(var4)(var15);
            var16 = var15.TableRow;
            var15 = {};
            var24 = var21 == var27;
            var19 = 'None';
            var22 = var19;
            if(var24) { _fun0007_ip = 73; continue _fun0007 }
case 74:
            var26 = var20.JSON;
            var25 = var26.stringify;
            var24 = 2;
            var22 = var25.bind(var26)(var27, var4, var24);
case 73:
            var15['label'] = var22;
            var15 = var18.bind(var4)(var16, var15);
            var6['children'] = var15;
            var6 = var8.bind(var4)(var7, var6);
            var5[4] = var6;
            var8 = _closure1_slot11;
            var16 = _closure1_slot0;
            var15 = _closure1_slot2;
            var6 = var15[var17];
            var6 = var16.bind(var4)(var6);
            var7 = var6.Spacer;
            var6 = {};
            var6['size'] = var17;
            var6 = var8.bind(var4)(var7, var6);
            var5[5] = var6;
            var8 = _closure1_slot11;
            var6 = var15[var11];
            var6 = var16.bind(var4)(var6);
            var7 = var6.TableRowGroup;
            var6 = {'title': 'Override Descriptor', 'hasIcons': false};
            var18 = _closure1_slot11;
            var15 = var15[var13];
            var15 = var16.bind(var4)(var15);
            var16 = var15.TableRow;
            var15 = {};
            var21 = var21 == var23;
            if(var21) { _fun0007_ip = 75; continue _fun0007 }
case 76:
            var22 = var20.JSON;
            var21 = var22.stringify;
            var20 = 2;
            var19 = var21.bind(var22)(var23, var4, var20);
case 75:
            var15['label'] = var19;
            var15 = var18.bind(var4)(var16, var15);
            var6['children'] = var15;
            var6 = var8.bind(var4)(var7, var6);
            var5[6] = var6;
            var16 = _closure1_slot11;
            var7 = _closure1_slot0;
            var6 = _closure1_slot2;
            var8 = var6[var17];
            var8 = var7.bind(var4)(var8);
            var15 = var8.Spacer;
            var8 = {};
            var8['size'] = var17;
            var8 = var16.bind(var4)(var15, var8);
            var5[7] = var8;
            var8 = _closure1_slot11;
            var6 = var6[var11];
            var6 = var7.bind(var4)(var6);
            var7 = var6.TableRowGroup;
            var6 = {'title': 'Recent Exposures', 'hasIcons': false};
            var11 = var12.length;
            if(!(var14 !== var11)) { _fun0007_ip = 77; continue _fun0007 }
case 78:
            var11 = var12.map;
            var9 = function(arg1) {
                var5 = arg1;
                var4 = _closure1_slot11;
                var2 = _closure1_slot0;
                var3 = _closure1_slot2;
                var1 = 23;
                var1 = var3[var1];
                var3 = undefined;
                var1 = var2.bind(var3)(var1);
                var2 = var1.TableRow;
                var1 = {};
                var1['label'] = var5;
                var6 = 1;
                var1['labelLineClamp'] = var6;
                var1 = var4.bind(var3)(var2, var1, var5);
                return var1;
            };
            var9 = var11.bind(var12)(var9);
            _fun0007_ip = 79; continue _fun0007;
case 77:
            var12 = _closure1_slot11;
            var11 = _closure1_slot0;
            var10 = _closure1_slot2;
            var10 = var10[var13];
            var10 = var11.bind(var4)(var10);
            var11 = var10.TableRow;
            var10 = {};
            var13 = 'none';
            var10['label'] = var13;
            var9 = var12.bind(var4)(var11, var10);
case 79:
            var6['children'] = var9;
            var6 = var8.bind(var4)(var7, var6);
            var5[8] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot18 = var1;
    var2 = function ExperimentDetails(arg1) {
        _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
            var1 = arg1;
            var12 = var1.experiment;
            var10 = var1.override;
            var11 = var1.id;
            var16 = var1.options;
            var1 = var1.onCopyLink;
            var _closure2_slot0 = var1;
            var2 = _closure1_slot13;
            var4 = undefined;
            var14 = var2.bind(var4)();
            var17 = _closure1_slot0;
            var21 = _closure1_slot2;
            var2 = 28;
            var2 = var21[var2];
            var3 = var17.bind(var4)(var2);
            var2 = var3.getURLForExperiment;
            var20 = var2.bind(var3)(var11);
            var _closure2_slot1 = var20;
            var5 = _closure1_slot4;
            var3 = var5.useCallback;
            var2 = new Array(2);
            var2[0] = var20;
            var2[1] = var1;
            var1 = function() {
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 29;
                var2 = var2[var1];
                var1 = undefined;
                var5 = var3.bind(var1)(var2);
                var4 = var5.copy;
                var3 = _closure2_slot1;
                var2 = function() {
                    _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
                        var3 = _closure1_slot1;
                        var7 = _closure1_slot2;
                        var1 = 30;
                        var2 = var7[var1];
                        var1 = undefined;
                        var4 = var3.bind(var1)(var2);
                        var3 = var4.open;
                        var2 = {'key': 'experiment-link-copied', 'content': 'Copied experiment link', 'IconComponent': null, 'iconColor': 'status-positive'};
                        var6 = _closure1_slot0;
                        var5 = 31;
                        var5 = var7[var5];
                        var5 = var6.bind(var1)(var5);
                        var5 = var5.CircleCheckIcon;
                        var2['IconComponent'] = var5;
                        var2 = var3.bind(var4)(var2);
                        var4 = _closure2_slot0;
                        var3 = null;
                        if(!(var3 != var4)) { _fun0011_ip = 80; continue _fun0011 }
case 81:
                        var2 = _closure2_slot0;
                        var2 = var2.bind(var1)();
case 80:
                        return var1;
                    }
                };
                var2 = var4.bind(var5)(var3, var2);
                return var1;
            };
            var19 = var3.bind(var5)(var1, var2);
            var3 = _closure1_slot12;
            var2 = _closure1_slot5;
            var1 = {};
            var5 = {};
            var8 = _closure1_slot1;
            var6 = 9;
            var6 = var21[var6];
            var6 = var8.bind(var4)(var6);
            var6 = var6.spacing;
            var6 = var6.PX_12;
            var5['paddingHorizontal'] = var6;
            var1['style'] = var5;
            var8 = _closure1_slot11;
            var13 = 27;
            var5 = var21[var13];
            var5 = var17.bind(var4)(var5);
            var6 = var5.TableRowGroup;
            var5 = {'title': 'Experiment Assignments', 'hasIcons': false};
            var15 = var16.map;
            var9 = function(arg1, arg2) {
                _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
case 0:
                    var1 = arg1;
                    var6 = var1.label;
                    var8 = var1.isDestructive;
                    var1 = var1.onPress;
                    var5 = _closure1_slot11;
                    var3 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var2 = 23;
                    var2 = var4[var2];
                    var4 = undefined;
                    var2 = var3.bind(var4)(var2);
                    var3 = var2.TableRow;
                    var2 = {};
                    var7 = 'default';
                    if(!var8) { _fun0012_ip = 30; continue _fun0012 }
case 48:
                    var7 = 'danger';
case 30:
                    var2['variant'] = var7;
                    var2['label'] = var6;
                    var2['onPress'] = var1;
                    var1 = arg2;
                    var1 = var5.bind(var4)(var3, var2, var1);
                    return var1;
                }
            };
            var9 = var15.bind(var16)(var9);
            var5['children'] = var9;
            var6 = var8.bind(var4)(var6, var5);
            var5 = new Array(3);
            var5[0] = var6;
            var9 = _closure1_slot11;
            var8 = _closure1_slot5;
            var6 = {};
            var14 = var14.copyExperimentLink;
            var6['style'] = var14;
            var15 = _closure1_slot11;
            var13 = var21[var13];
            var13 = var17.bind(var4)(var13);
            var14 = var13.TableRowGroup;
            var13 = {'title': 'Share', 'hasIcons': false};
            var18 = _closure1_slot11;
            var16 = 23;
            var16 = var21[var16];
            var16 = var17.bind(var4)(var16);
            var17 = var16.TableRow;
            var16 = {};
            var21 = 'Copy Link';
            var16['label'] = var21;
            var16['subLabel'] = var20;
            var16['onPress'] = var19;
            var16 = var18.bind(var4)(var17, var16);
            var13['children'] = var16;
            var13 = var15.bind(var4)(var14, var13);
            var6['children'] = var13;
            var6 = var9.bind(var4)(var8, var6);
            var5[1] = var6;
            var8 = var12.kind;
            var6 = 'guild';
            if(!(var6 !== var8)) { _fun0010_ip = 82; continue _fun0010 }
case 54:
            var9 = _closure1_slot11;
            var8 = _closure1_slot17;
            var6 = {};
            var6['id'] = var11;
            var6['override'] = var10;
            var6['experiment'] = var12;
            var6 = var9.bind(var4)(var8, var6);
            _fun0010_ip = 83; continue _fun0010;
case 82:
            var9 = _closure1_slot11;
            var8 = _closure1_slot18;
            var7 = {};
            var7['id'] = var11;
            var7['override'] = var10;
            var6 = var9.bind(var4)(var8, var7);
case 83:
            var5[2] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot19 = var2;
    var1 = function ExperimentActionSheet(arg1) {
        var1 = arg1;
        var10 = var1.id;
        var12 = var1.experiment;
        var11 = var1.override;
        var9 = var1.options;
        var8 = var1.onCopyLink;
        var4 = _closure1_slot11;
        var7 = _closure1_slot0;
        var14 = _closure1_slot2;
        var1 = 32;
        var1 = var14[var1];
        var3 = undefined;
        var1 = var7.bind(var3)(var1);
        var2 = var1.BottomSheet;
        var1 = {};
        var13 = _closure1_slot11;
        var6 = 33;
        var6 = var14[var6];
        var6 = var7.bind(var3)(var6);
        var7 = var6.BottomSheetTitleHeader;
        var6 = {};
        var14 = var12.title;
        var6['title'] = var14;
        var6['subtitle'] = var10;
        var6 = var13.bind(var3)(var7, var6);
        var1['header'] = var6;
        var7 = _closure1_slot11;
        var6 = _closure1_slot19;
        var5 = {};
        var5['experiment'] = var12;
        var5['override'] = var11;
        var5['id'] = var10;
        var5['options'] = var9;
        var5['onCopyLink'] = var8;
        var5 = var7.bind(var3)(var6, var5);
        var1['children'] = var5;
        var1 = var4.bind(var3)(var2, var1);
        return var1;
    };
    var _closure1_slot20 = var1;
    var1 = global;
    var9 = var1.Object;
    var5 = var9.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var5.bind(var9)(var3, var1, var4);
    var1 = 0;
    var4 = var7[var1];
    var1 = undefined;
    var4 = var13.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var14 = 1;
    var5 = var7[var14];
    var4 = metroImportAll;
    var10 = var4.bind(var1)(var5);
    var _closure1_slot4 = var10;
    var4 = 2;
    var4 = var7[var4];
    var4 = var6.bind(var1)(var4);
    var4 = var4.View;
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var7[var4];
    var4 = var13.bind(var1)(var4);
    var _closure1_slot6 = var4;
    var4 = 4;
    var4 = var7[var4];
    var4 = var13.bind(var1)(var4);
    var _closure1_slot7 = var4;
    var4 = 5;
    var4 = var7[var4];
    var4 = var13.bind(var1)(var4);
    var _closure1_slot8 = var4;
    var4 = 6;
    var4 = var7[var4];
    var4 = var6.bind(var1)(var4);
    var5 = var4.ExperimentBuckets;
    var _closure1_slot9 = var5;
    var4 = var4.ExperimentTypes;
    var _closure1_slot10 = var4;
    var4 = 7;
    var4 = var7[var4];
    var4 = var6.bind(var1)(var4);
    var5 = var4.jsx;
    var _closure1_slot11 = var5;
    var4 = var4.jsxs;
    var _closure1_slot12 = var4;
    var4 = 8;
    var4 = var7[var4];
    var9 = var6.bind(var1)(var4);
    var5 = var9.createStyles;
    var4 = {};
    var11 = {};
    var12 = 9;
    var15 = var7[var12];
    var15 = var13.bind(var1)(var15);
    var15 = var15.colors;
    var15 = var15.BACKGROUND_BASE_LOW;
    var11['backgroundColor'] = var15;
    var11['flex'] = var14;
    var4['container'] = var11;
    var11 = {};
    var14 = var7[var12];
    var14 = var13.bind(var1)(var14);
    var14 = var14.spacing;
    var14 = var14.PX_12;
    var11['paddingHorizontal'] = var14;
    var4['listContainer'] = var11;
    var11 = {};
    var14 = var7[var12];
    var14 = var13.bind(var1)(var14);
    var14 = var14.spacing;
    var14 = var14.PX_16;
    var11['paddingVertical'] = var14;
    var14 = var7[var12];
    var14 = var13.bind(var1)(var14);
    var14 = var14.spacing;
    var14 = var14.PX_12;
    var11['paddingHorizontal'] = var14;
    var4['searchBar'] = var11;
    var11 = {};
    var14 = var7[var12];
    var14 = var13.bind(var1)(var14);
    var14 = var14.spacing;
    var14 = var14.PX_16;
    var11['marginTop'] = var14;
    var4['debugContainer'] = var11;
    var11 = {};
    var12 = var7[var12];
    var12 = var13.bind(var1)(var12);
    var12 = var12.spacing;
    var12 = var12.PX_16;
    var11['marginTop'] = var12;
    var4['copyExperimentLink'] = var11;
    var4 = var5.bind(var9)(var4);
    var _closure1_slot13 = var4;
    var5 = var10.memo;
    var4 = function() {
        _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
case 0:
            var3 = _closure1_slot13;
            var5 = undefined;
            var16 = var3.bind(var5)();
            var6 = _closure1_slot4;
            var4 = var6.useState;
            var3 = '';
            var6 = var4.bind(var6)(var3);
            var4 = _closure1_slot3;
            var3 = 2;
            var4 = var4.bind(var5)(var6, var3);
            var3 = 0;
            var13 = var4[var3];
            var3 = 1;
            var18 = var4[var3];
            var17 = _closure1_slot0;
            var6 = _closure1_slot2;
            var3 = 10;
            var3 = var6[var3];
            var4 = var17.bind(var5)(var3);
            var3 = var4.useLegacyExperiments;
            var3 = var3.bind(var4)();
            var11 = var3.experiments;
            var _closure2_slot0 = var11;
            var10 = var3.overridesInfo;
            var _closure2_slot1 = var10;
            var3 = 11;
            var3 = var6[var3];
            var4 = var17.bind(var5)(var3);
            var3 = var4.useApexExperiments;
            var3 = var3.bind(var4)();
            var4 = var3.experiments;
            var _closure2_slot2 = var4;
            var3 = var3.overridesInfo;
            var _closure2_slot3 = var3;
            var9 = _closure1_slot4;
            var8 = var9.useMemo;
            var7 = new Array(2);
            var7[0] = var11;
            var7[1] = var4;
            var4 = function() {
                var1 = {};
                var4 = _closure2_slot0;
                var5 = var1;
                var3 = copyDataProperties(var5, var4);
                var4 = _closure2_slot2;
                var5 = var1;
                var2 = copyDataProperties(var5, var4);
                return var1;
            };
            var4 = var8.bind(var9)(var4, var7);
            var9 = _closure1_slot4;
            var8 = var9.useMemo;
            var7 = new Array(2);
            var7[0] = var10;
            var7[1] = var3;
            var3 = function() {
                var1 = {};
                var4 = _closure2_slot1;
                var5 = var1;
                var3 = copyDataProperties(var5, var4);
                var4 = _closure2_slot3;
                var5 = var1;
                var2 = copyDataProperties(var5, var4);
                return var1;
            };
            var10 = var8.bind(var9)(var3, var7);
            var _closure2_slot4 = var10;
            var3 = _closure1_slot1;
            var7 = 12;
            var7 = var6[var7];
            var8 = var3.bind(var5)(var7);
            var7 = {};
            var9 = true;
            var7['includeKeyboardHeight'] = var9;
            var7 = var8.bind(var5)(var7);
            var11 = var7.insets;
            var7 = 13;
            var7 = var6[var7];
            var7 = var3.bind(var5)(var7);
            var12 = var7.bind(var5)();
            var7 = 14;
            var8 = var6[var7];
            var9 = var17.bind(var5)(var8);
            var8 = var9.getBestMatches;
            var14 = var6[var7];
            var15 = var17.bind(var5)(var14);
            var14 = var15.sortEntries;
            var7 = var6[var7];
            var17 = var17.bind(var5)(var7);
            var7 = var17.getEntries;
            var7 = var7.bind(var17)(var4);
            var7 = var14.bind(var15)(var7, var10);
            var13 = var8.bind(var9)(var7, var13);
            var _closure2_slot5 = var13;
            var14 = _closure1_slot4;
            var9 = var14.useMemo;
            var7 = var13.length;
            var8 = new Array(1);
            var8[0] = var7;
            var7 = function() {
                var1 = _closure2_slot5;
                var2 = var1.length;
                var1 = new Array(1);
                var1[0] = var2;
                return var1;
            };
            var15 = var9.bind(var14)(var7, var8);
            var9 = _closure1_slot4;
            var8 = var9.useCallback;
            var7 = new Array(2);
            var7[0] = var13;
            var7[1] = var10;
            var1 = function(arg1, arg2) {
                var5 = arg2;
                var1 = _closure2_slot5;
                var6 = var1[var5];
                var4 = _closure1_slot11;
                var3 = _closure1_slot14;
                var2 = {};
                var8 = var6.id;
                var2['id'] = var8;
                var8 = var6.experiment;
                var2['experiment'] = var8;
                var7 = _closure2_slot4;
                var6 = var6.id;
                var6 = var7[var6];
                var2['override'] = var6;
                var6 = 0;
                var6 = var6 === var5;
                var2['start'] = var6;
                var6 = var1.length;
                var1 = 1;
                var1 = var6 - var1;
                var1 = var5 === var1;
                var2['end'] = var1;
                var1 = undefined;
                var1 = var4.bind(var1)(var3, var2);
                return var1;
            };
            var10 = var8.bind(var9)(var1, var7);
            var1 = 15;
            var1 = var6[var1];
            var3 = var3.bind(var5)(var1);
            var1 = var3.isEmpty;
            var1 = var1.bind(var3)(var4);
            if(var1) { _fun0013_ip = 84; continue _fun0013 }
case 85:
            var4 = _closure1_slot12;
            var3 = _closure1_slot5;
            var1 = {};
            var6 = var16.container;
            var1['style'] = var6;
            var8 = _closure1_slot11;
            var7 = _closure1_slot5;
            var6 = {};
            var9 = var16.searchBar;
            var6['style'] = var9;
            var17 = _closure1_slot11;
            var13 = _closure1_slot0;
            var14 = _closure1_slot2;
            var9 = 18;
            var9 = var14[var9];
            var9 = var13.bind(var5)(var9);
            var13 = var9.SearchField;
            var9 = {};
            var19 = 'md';
            var9['size'] = var19;
            var9['onChange'] = var18;
            var9 = var17.bind(var5)(var13, var9);
            var6['children'] = var9;
            var7 = var8.bind(var5)(var7, var6);
            var6 = new Array(2);
            var6[0] = var7;
            var9 = _closure1_slot11;
            var13 = _closure1_slot1;
            var7 = 19;
            var7 = var14[var7];
            var8 = var13.bind(var5)(var7);
            var7 = {};
            var16 = var16.listContainer;
            var7['style'] = var16;
            var7['sections'] = var15;
            var15 = 'windowSize';
            var7['estimatedListSize'] = var15;
            var7['itemSize'] = var12;
            var12 = var11.bottom;
            var11 = 9;
            var11 = var14[var11];
            var11 = var13.bind(var5)(var11);
            var11 = var11.spacing;
            var11 = var11.PX_16;
            var11 = var12 + var11;
            var7['insetEnd'] = var11;
            var7['renderItem'] = var10;
            var7 = var9.bind(var5)(var8, var7);
            var6[1] = var7;
            var1['children'] = var6;
            var1 = var4.bind(var5)(var3, var1);
            _fun0013_ip = 86; continue _fun0013;
case 84:
            var4 = _closure1_slot11;
            var7 = _closure1_slot0;
            var8 = _closure1_slot2;
            var2 = 16;
            var2 = var8[var2];
            var2 = var7.bind(var5)(var2);
            var3 = var2.EmptyState;
            var2 = {'Illustration': null, 'title': 'No Experiments', 'body': 'No experiments are currently running.'};
            var6 = 17;
            var6 = var8[var6];
            var6 = var7.bind(var5)(var6);
            var6 = var6.NoResults;
            var2['Illustration'] = var6;
            var1 = var4.bind(var5)(var3, var2);
case 86:
            return var1;
        }
    };
    var4 = var5.bind(var10)(var4);
    var9 = var10.memo;
    var5 = function(arg1) {
        _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
case 0:
            var3 = arg1;
            var2 = var3.id;
            var _closure2_slot0 = var2;
            var6 = var3.override;
            var _closure2_slot1 = var6;
            var10 = var3.experiment;
            var _closure2_slot2 = var10;
            var12 = var3.start;
            var11 = var3.end;
            var8 = _closure1_slot4;
            var7 = var8.useMemo;
            var4 = new Array(1);
            var4[0] = var10;
            var3 = function() {
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 20;
                var2 = var2[var1];
                var1 = undefined;
                var3 = var3.bind(var1)(var2);
                var2 = var3.getExperimentVariantsForDevTools;
                var1 = _closure2_slot2;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var3 = var7.bind(var8)(var3, var4);
            var _closure2_slot3 = var3;
            var8 = _closure1_slot4;
            var7 = var8.useCallback;
            var4 = new Array(4);
            var4[0] = var2;
            var4[1] = var10;
            var4[2] = var6;
            var4[3] = var3;
            var2 = function() {
                var3 = global;
                var1 = var3.Map;
                var4 = var1.prototype;
                var4 = Object.create(var4, {constructor: {value: var1}});
                var14 = var4;
                var1 = new var14[var1](var13);
                var5 = var1 instanceof Object ? var1 : var4;
                var _closure3_slot0 = var5;
                var6 = _closure2_slot3;
                var4 = var6.forEach;
                var1 = function(arg1) {
                    var4 = arg1;
                    var3 = _closure3_slot0;
                    var2 = var3.set;
                    var1 = var4.id;
                    var1 = var2.bind(var3)(var1, var4);
                    var1 = undefined;
                    return var1;
                };
                var1 = var4.bind(var6)(var1);
                var7 = new Array(0);
                var _closure3_slot1 = var7;
                var4 = var5.forEach;
                var1 = function(arg1) {
                    var5 = arg1;
                    var _closure4_slot0 = var5;
                    var3 = _closure3_slot1;
                    var2 = var3.push;
                    var1 = {};
                    var5 = var5.label;
                    var1['label'] = var5;
                    var4 = function onPress() {
                        var5 = _closure1_slot0;
                        var4 = _closure1_slot2;
                        var1 = 21;
                        var3 = var4[var1];
                        var1 = undefined;
                        var8 = var5.bind(var1)(var3);
                        var7 = var8.overrideBucket;
                        var5 = _closure2_slot2;
                        var6 = var5.system;
                        var5 = _closure2_slot0;
                        var3 = _closure4_slot0;
                        var3 = var3.id;
                        var3 = var7.bind(var8)(var6, var5, var3);
                        var3 = _closure1_slot1;
                        var2 = 22;
                        var2 = var4[var2];
                        var4 = var3.bind(var1)(var2);
                        var3 = var4.hideActionSheet;
                        var2 = 'UserSettingsExperimentBucket';
                        var2 = var3.bind(var4)(var2);
                        return var1;
                    };
                    var1['onPress'] = var4;
                    var1 = var2.bind(var3)(var1);
                    var1 = undefined;
                    return var1;
                };
                var1 = var4.bind(var5)(var1);
                var4 = var7.push;
                var1 = {'label': 'Clear Override', 'isDestructive': true};
                var5 = function onPress() {
                    var5 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var1 = 21;
                    var3 = var4[var1];
                    var1 = undefined;
                    var8 = var5.bind(var1)(var3);
                    var7 = var8.overrideBucket;
                    var5 = _closure2_slot2;
                    var6 = var5.system;
                    var5 = _closure2_slot0;
                    var3 = null;
                    var3 = var7.bind(var8)(var6, var5, var3);
                    var3 = _closure1_slot1;
                    var2 = 22;
                    var2 = var4[var2];
                    var4 = var3.bind(var1)(var2);
                    var3 = var4.hideActionSheet;
                    var2 = 'UserSettingsExperimentBucket';
                    var2 = var3.bind(var4)(var2);
                    return var1;
                };
                var1['onPress'] = var5;
                var1 = var4.bind(var7)(var1);
                var5 = _closure1_slot1;
                var4 = _closure1_slot2;
                var1 = 22;
                var4 = var4[var1];
                var1 = undefined;
                var6 = var5.bind(var1)(var4);
                var5 = var6.openLazy;
                var9 = var3.Promise;
                var4 = var9.resolve;
                var3 = {};
                var10 = _closure1_slot20;
                var3['default'] = var10;
                var4 = var4.bind(var9)(var3);
                var3 = {};
                var9 = _closure2_slot0;
                var3['id'] = var9;
                var9 = _closure2_slot2;
                var3['experiment'] = var9;
                var8 = _closure2_slot1;
                var3['override'] = var8;
                var3['options'] = var7;
                var2 = function onCopyLink() {
                    var3 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var1 = 22;
                    var2 = var2[var1];
                    var1 = undefined;
                    var3 = var3.bind(var1)(var2);
                    var2 = var3.hideActionSheet;
                    var1 = 'UserSettingsExperimentBucket';
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var3['onCopyLink'] = var2;
                var2 = 'UserSettingsExperimentBucket';
                var2 = var5.bind(var6)(var4, var2, var3);
                return var1;
            };
            var7 = var7.bind(var8)(var2, var4);
            var2 = null;
            var8 = var2 == var6;
            var4 = undefined;
            var2 = undefined;
            if(var8) { _fun0014_ip = 87; continue _fun0014 }
case 88:
            var2 = var6.variantId;
case 87:
            var1 = function getVariantLabel(arg1, arg2) {
                _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
case 0:
                    var4 = arg1;
                    var5 = arg2;
                    var _closure3_slot0 = var5;
                    var1 = null;
                    if(!(var1 != var5)) { _fun0015_ip = 89; continue _fun0015 }
case 90:
                    var3 = var4.find;
                    var2 = function(arg1) {
                        var1 = arg1;
                        var2 = var1.id;
                        var1 = _closure3_slot0;
                        var1 = var2 === var1;
                        return var1;
                    };
                    var2 = var3.bind(var4)(var2);
                    if(!(var1 == var2)) { _fun0015_ip = 91; continue _fun0015 }
case 92:
                    var1 = global;
                    var1 = var1.HermesInternal;
                    var4 = var1.concat;
                    var3 = 'Unknown (';
                    var1 = ')';
                    var1 = var4.bind(var3)(var5, var1);
                    _fun0015_ip = 93; continue _fun0015;
case 91:
                    var1 = var2.label;
case 93:
                    return var1;
case 89:
                    var1 = 'N/A';
                    return var1;
                }
            };
            var8 = var1.bind(var4)(var3, var2);
            var3 = _closure1_slot11;
            var6 = _closure1_slot0;
            var9 = _closure1_slot2;
            var1 = 23;
            var1 = var9[var1];
            var1 = var6.bind(var4)(var1);
            var2 = var1.TableRow;
            var1 = {};
            var13 = '100%';
            var1['height'] = var13;
            var1['start'] = var12;
            var1['end'] = var11;
            var10 = var10.title;
            var1['label'] = var10;
            var10 = 1;
            var1['labelLineClamp'] = var10;
            var1['onPress'] = var7;
            var7 = _closure1_slot11;
            var5 = 24;
            var5 = var9[var5];
            var5 = var6.bind(var4)(var5);
            var6 = var5.Text;
            var5 = {'variant': 'text-md/medium', 'color': 'text-muted'};
            var5['children'] = var8;
            var5 = var7.bind(var4)(var6, var5);
            var1['trailing'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var5 = var9.bind(var10)(var5);
    var _closure1_slot14 = var5;
    var5 = 34;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/devtools/native/components/screens/DevToolsExperimentsScreen.tsx';
    var5 = var6.bind(var7)(var5);
    var3['default'] = var4;
    var3['ExperimentDetails'] = var2;
    return var1;
})();