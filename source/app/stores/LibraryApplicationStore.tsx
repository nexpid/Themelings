// app/stores/LibraryApplicationStore.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var1 = metroImportAll;
    var _closure1_slot2 = var1;
    var _closure1_slot3 = var6;
    var1 = function _isNativeReflectConstruct() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
case 2: // try_start_0
            var2 = global;
            var3 = var2.Boolean;
            var3 = var3.prototype;
            var4 = var3.valueOf;
            var3 = var4.call;
            var8 = var2.Reflect;
            var7 = var8.construct;
            var6 = var2.Boolean;
            var5 = new Array(0);
            var2 = function() {
                var1 = undefined;
                return var1;
            };
            var2 = var7.bind(var8)(var6, var5, var2);
            var2 = var3.bind(var4)(var2);
            var2 = !var2;
            var _closure2_slot0 = var2;
case 3: // try_end0
            _fun0001_ip = 4; continue _fun0001;
case 5: // catch_target0
            CatchBlockStart(arg_register=1);
case 4:
            var2 = function _isNativeReflectConstruct() {
                var1 = _closure2_slot0;
                var1 = !var1;
                var1 = !var1;
                return var1;
            };
            _closure1_slot20 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot20 = var1;
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
            if(!var2) { _fun0002_ip = 6; continue _fun0002 }
case 7:
            var4 = var5.Symbol;
            var4 = var4.iterator;
            var2 = var3[var4];
case 6:
            if(var2) { _fun0002_ip = 8; continue _fun0002 }
case 9:
            var2 = var3.@@iterator;
case 8:
            if(var2) { _fun0002_ip = 10; continue _fun0002 }
case 11:
            var6 = var5.Array;
            var4 = var6.isArray;
            var6 = var4.bind(var6)(var3);
            var4 = var2;
            if(var6) { _fun0002_ip = 12; continue _fun0002 }
case 13:
            var8 = undefined;
            var6 = undefined;
            if(!var3) { _fun0002_ip = 14; continue _fun0002 }
case 15:
            var9 = 'string';
            var7 = typeof var3;
            if(!(var9 !== var7)) { _fun0002_ip = 16; continue _fun0002 }
case 17:
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
            if(!var7) { _fun0002_ip = 18; continue _fun0002 }
case 19:
            var7 = var3.constructor;
case 18:
            var10 = var9;
            if(!var7) { _fun0002_ip = 20; continue _fun0002 }
case 21:
            var7 = var3.constructor;
            var10 = var7.name;
case 20:
            var7 = 'Map';
            if(!(var7 !== var10)) { _fun0002_ip = 22; continue _fun0002 }
case 23:
            var7 = 'Set';
            if(!(var7 !== var10)) { _fun0002_ip = 22; continue _fun0002 }
case 24:
            var7 = 'Arguments';
            if(!(var7 !== var10)) { _fun0002_ip = 25; continue _fun0002 }
case 26:
            var9 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
            var7 = var9.test;
            var9 = var7.bind(var9)(var10);
            var7 = undefined;
            if(!var9) { _fun0002_ip = 27; continue _fun0002 }
case 25:
            var9 = _closure1_slot22;
            var7 = var9.bind(var8)(var3, var8);
case 27:
            _fun0002_ip = 28; continue _fun0002;
case 22:
            var10 = var5.Array;
            var9 = var10.from;
            var7 = var9.bind(var10)(var3);
case 28:
            var6 = var7;
            _fun0002_ip = 14; continue _fun0002;
case 16:
            var7 = _closure1_slot22;
            var6 = var7.bind(var8)(var3, var8);
case 14:
            var4 = var6;
            if(var4) { _fun0002_ip = 12; continue _fun0002 }
case 29:
            var7 = var5.TypeError;
            var5 = var7.prototype;
            var6 = Object.create(var5, {constructor: {value: var7}});
            var13 = 'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.';
            var14 = var6;
            var5 = new var14[var7](var13, var12);
            var5 = var5 instanceof Object ? var5 : var6;
            throw var5;
case 12:
            if(!var4) { _fun0002_ip = 30; continue _fun0002 }
case 31:
            _closure2_slot0 = var4;
case 30:
            var4 = 0;
            var _closure2_slot1 = var4;
            var1 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var2 = _closure2_slot1;
                    var1 = _closure2_slot0;
                    var1 = var1.length;
                    if(!(!(var2 >= var1))) { _fun0003_ip = 32; continue _fun0003 }
case 33:
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
                    _fun0003_ip = 34; continue _fun0003;
case 32:
                    var2 = {};
                    var3 = true;
                    var2['done'] = var3;
                    var1 = var2;
case 34:
                    return var1;
                }
            };
            return var1;
case 10:
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
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var4 = arg1;
            var1 = null;
            var3 = undefined;
            var1 = var1 == var3;
            if(var1) { _fun0004_ip = 35; continue _fun0004 }
case 36:
            var2 = var4.length;
            var1 = var3 > var2;
case 35:
            var2 = undefined;
            if(!var1) { _fun0004_ip = 37; continue _fun0004 }
case 38:
            var2 = var4.length;
case 37:
            var1 = global;
            var1 = var1.Array;
            var1 = var1.bind(var3)(var2);
            var3 = 0;
            var5 = var3 < var2;
            if(!var5) { _fun0004_ip = 3; continue _fun0004 }
case 8:
            var5 = var4[var3];
            var1[var3] = var5;
            var3 = var3 + 1;
            if(var3 < var2) { _fun0004_ip = 8; continue _fun0004 }
case 3:
            return var1;
        }
    };
    var _closure1_slot22 = var1;
    var1 = function getSavedData() {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
            var4 = _closure1_slot0;
            var3 = _closure1_slot3;
            var2 = 8;
            var3 = var3[var2];
            var2 = undefined;
            var2 = var4.bind(var2)(var3);
            var3 = var2.Storage;
            var2 = var3.get;
            var1 = _closure1_slot12;
            var1 = var2.bind(var3)(var1);
            var2 = null;
            if(!(var2 == var1)) { _fun0005_ip = 39; continue _fun0005 }
case 40:
            var1 = {};
case 39:
            return var1;
        }
    };
    var _closure1_slot23 = var1;
    var1 = function saveActiveLaunchOptionIds() {
        var3 = _closure1_slot0;
        var2 = _closure1_slot3;
        var1 = 8;
        var2 = var2[var1];
        var1 = undefined;
        var2 = var3.bind(var1)(var2);
        var5 = var2.Storage;
        var4 = var5.set;
        var3 = _closure1_slot12;
        var2 = {};
        var7 = _closure1_slot23;
        var8 = var7.bind(var1)();
        var9 = var2;
        var7 = copyDataProperties(var9, var8);
        var7 = _closure1_slot18;
        var6 = 'activeLaunchOptionIds';
        var2[var6] = var7;
        var2 = var4.bind(var5)(var3, var2);
        return var1;
    };
    var _closure1_slot24 = var1;
    var1 = function saveActiveLibraryApplicationBranchIds() {
        var3 = _closure1_slot0;
        var2 = _closure1_slot3;
        var1 = 8;
        var2 = var2[var1];
        var1 = undefined;
        var2 = var3.bind(var1)(var2);
        var5 = var2.Storage;
        var4 = var5.set;
        var3 = _closure1_slot12;
        var2 = {};
        var7 = _closure1_slot23;
        var8 = var7.bind(var1)();
        var9 = var2;
        var7 = copyDataProperties(var9, var8);
        var7 = _closure1_slot17;
        var6 = 'activeLibraryApplicationBranchIds';
        var2[var6] = var7;
        var2 = var4.bind(var5)(var3, var2);
        return var1;
    };
    var _closure1_slot25 = var1;
    var1 = function setLibraryApplications(arg1) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
            var3 = _closure1_slot21;
            var1 = undefined;
            var2 = arg1;
            var5 = var3.bind(var1)(var2);
            var3 = var5.bind(var1)();
            var2 = var3.done;
            var4 = 9;
            if(var2) { _fun0006_ip = 41; continue _fun0006 }
case 42:
            var8 = var3.value;
            var7 = _closure1_slot9;
            var2 = var7.createFromServer;
            var8 = var2.bind(var7)(var8);
            var7 = _closure1_slot0;
            var2 = _closure1_slot3;
            var2 = var2[var4];
            var10 = var7.bind(var1)(var2);
            var9 = var10.getComboId;
            var7 = var8.id;
            var2 = var8.branchId;
            var7 = var9.bind(var10)(var7, var2);
            var2 = _closure1_slot14;
            var2[var7] = var8;
            var7 = var5.bind(var1)();
            var2 = var7.done;
            var3 = var7;
            if(!var2) { _fun0006_ip = 42; continue _fun0006 }
case 41:
            return var1;
        }
    };
    var _closure1_slot26 = var1;
    var9 = function handleLibraryApplicationUpdate(arg1) {
        var1 = arg1;
        var4 = var1.libraryApplication;
        var3 = _closure1_slot9;
        var1 = var3.createFromServer;
        var5 = var1.bind(var3)(var4);
        var4 = _closure1_slot0;
        var3 = _closure1_slot3;
        var1 = 9;
        var3 = var3[var1];
        var1 = undefined;
        var7 = var4.bind(var1)(var3);
        var6 = var7.getComboId;
        var4 = var5.id;
        var3 = var5.branchId;
        var4 = var6.bind(var7)(var4, var3);
        var3 = _closure1_slot14;
        var3[var4] = var5;
        var3 = _closure1_slot16;
        var2 = var3.delete;
        var2 = var2.bind(var3)(var4);
        return var1;
    };
    var1 = function _getLibraryApplication(arg1, arg2) {
        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
            var4 = _closure1_slot0;
            var3 = _closure1_slot3;
            var1 = 9;
            var3 = var3[var1];
            var1 = undefined;
            var5 = var4.bind(var1)(var3);
            var4 = var5.getComboId;
            var3 = arg1;
            var1 = arg2;
            var3 = var4.bind(var5)(var3, var1);
            var1 = _closure1_slot14;
            var1 = var1[var3];
            var4 = null;
            if(!(var4 == var1)) { _fun0007_ip = 43; continue _fun0007 }
case 44:
            var2 = _closure1_slot15;
            var1 = var2[var3];
case 43:
            return var1;
        }
    };
    var _closure1_slot27 = var1;
    var1 = function _getAllLibraryApplications() {
        var1 = {};
        var4 = _closure1_slot15;
        var5 = var1;
        var3 = copyDataProperties(var5, var4);
        var4 = _closure1_slot14;
        var5 = var1;
        var2 = copyDataProperties(var5, var4);
        return var1;
    };
    var _closure1_slot28 = var1;
    var10 = global;
    var11 = var10.Object;
    var8 = var11.defineProperty;
    var2 = {};
    var1 = true;
    var2['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var11)(var3, var1, var2);
    var1 = 0;
    var2 = var6[var1];
    var1 = undefined;
    var2 = var7.bind(var1)(var2);
    var _closure1_slot4 = var2;
    var2 = 1;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot5 = var2;
    var2 = 2;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot6 = var2;
    var2 = 3;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot7 = var2;
    var2 = 4;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot8 = var2;
    var2 = 5;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot9 = var2;
    var2 = 6;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot10 = var2;
    var2 = 7;
    var2 = var6[var2];
    var2 = var5.bind(var1)(var2);
    var2 = var2.LibraryApplicationFlags;
    var _closure1_slot11 = var2;
    var2 = 'LibraryApplicationStore';
    var _closure1_slot12 = var2;
    var8 = false;
    var _closure1_slot13 = var8;
    var11 = {};
    var _closure1_slot14 = var11;
    var11 = {};
    var _closure1_slot15 = var11;
    var10 = var10.Set;
    var11 = var10.prototype;
    var11 = Object.create(var11, {constructor: {value: var10}});
    var15 = var11;
    var10 = new var15[var10](var14);
    var10 = var10 instanceof Object ? var10 : var11;
    var _closure1_slot16 = var10;
    var10 = {};
    var _closure1_slot17 = var10;
    var10 = {};
    var _closure1_slot18 = var10;
    var _closure1_slot19 = var8;
    var8 = 12;
    var8 = var6[var8];
    var8 = var7.bind(var1)(var8);
    var10 = var8.Store;
    var8 = function(arg1) {
        var4 = function LibraryApplicationStore() {
            _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                var4 = this;
                var3 = undefined;
                var5 = undefined;
                var1 = _closure1_slot4;
                var2 = _closure2_slot0;
                var1 = var1.bind(var3)(var4, var2);
                var1 = _closure1_slot7;
                var9 = var1.bind(var3)(var2);
                var2 = _closure1_slot6;
                var1 = _closure1_slot20;
                var1 = var1.bind(var3)();
                if(var1) { _fun0008_ip = 45; continue _fun0008 }
case 40:
                var7 = var9.apply;
                var5 = arguments;
                var1 = var5;
                var1 = var7.bind(var9)(var4, var1);
                _fun0008_ip = 46; continue _fun0008;
case 45:
                var7 = global;
                var8 = var7.Reflect;
                var7 = var8.construct;
                var6 = _closure1_slot7;
                var6 = var6.bind(var3)(var4);
                var6 = var6.constructor;
                var5 = arguments;
                var1 = var7.bind(var8)(var9, var5, var6);
case 46:
                var1 = var2.bind(var3)(var4, var1);
                return var1;
            }
        };
        var _closure2_slot0 = var4;
        var5 = _closure1_slot8;
        var3 = undefined;
        var2 = arg1;
        var2 = var5.bind(var3)(var4, var2);
        var2 = _closure1_slot5;
        var5 = {};
        var1 = 'initialize';
        var5['key'] = var1;
        var1 = function value() {
            _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                var4 = this;
                var3 = var4.waitFor;
                var1 = _closure1_slot10;
                var1 = var3.bind(var4)(var1);
                var4 = _closure1_slot0;
                var3 = _closure1_slot3;
                var1 = 8;
                var3 = var3[var1];
                var1 = undefined;
                var3 = var4.bind(var1)(var3);
                var5 = var3.Storage;
                var4 = var5.get;
                var3 = _closure1_slot12;
                var3 = var4.bind(var5)(var3);
                var5 = null;
                if(!(var5 != var3)) { _fun0009_ip = 47; continue _fun0009 }
case 45:
                var4 = var3.activeLaunchOptionIds;
                if(!(var5 != var4)) { _fun0009_ip = 48; continue _fun0009 }
case 49:
                var4 = var3.activeLaunchOptionIds;
                _closure1_slot18 = var4;
                _fun0009_ip = 50; continue _fun0009;
case 48:
                var4 = _closure1_slot24;
                var4 = var4.bind(var1)();
case 50:
                var4 = var3.activeLibraryApplicationBranchIds;
                if(!(var5 != var4)) { _fun0009_ip = 51; continue _fun0009 }
case 52:
                var3 = var3.activeLibraryApplicationBranchIds;
                _closure1_slot17 = var3;
                _fun0009_ip = 47; continue _fun0009;
case 51:
                var2 = _closure1_slot25;
                var2 = var2.bind(var1)();
case 47:
                return var1;
            }
        };
        var5['value'] = var1;
        var1 = new Array(13);
        var1[0] = var5;
        var5 = {};
        var7 = 'libraryApplications';
        var5['key'] = var7;
        var7 = function get() {
            var3 = function getLibraryApplicationsFiltered(arg1) {
                var1 = arg1;
                var _closure4_slot0 = var1;
                var3 = _closure1_slot28;
                var1 = undefined;
                var1 = var3.bind(var1)();
                var _closure4_slot1 = var1;
                var3 = global;
                var4 = var3.Object;
                var3 = var4.keys;
                var4 = var3.bind(var4)(var1);
                var3 = var4.forEach;
                var2 = function(arg1) {
                    _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
                        var3 = arg1;
                        var5 = _closure4_slot0;
                        var1 = _closure4_slot1;
                        var4 = var1[var3];
                        var1 = undefined;
                        var4 = var5.bind(var1)(var4);
                        if(var4) { _fun0010_ip = 53; continue _fun0010 }
case 38:
                        var2 = _closure4_slot1;
                        var2 = delete var2[var3];
case 53:
                        return var1;
                    }
                };
                var2 = var3.bind(var4)(var2);
                return var1;
            };
            var2 = undefined;
            var1 = function(arg1) {
                var2 = arg1;
                var1 = var2.isHidden;
                var1 = var1.bind(var2)();
                var1 = !var1;
                return var1;
            };
            var1 = var3.bind(var2)(var1);
            return var1;
        };
        var5['get'] = var7;
        var1[1] = var5;
        var5 = {};
        var7 = 'getAllLibraryApplications';
        var5['key'] = var7;
        var7 = function value() {
            var2 = _closure1_slot28;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        };
        var5['value'] = var7;
        var1[2] = var5;
        var5 = {};
        var7 = 'hasLibraryApplication';
        var5['key'] = var7;
        var7 = function value() {
            var1 = global;
            var3 = var1.Object;
            var2 = var3.keys;
            var4 = _closure1_slot28;
            var1 = undefined;
            var1 = var4.bind(var1)();
            var1 = var2.bind(var3)(var1);
            var2 = var1.length;
            var1 = 0;
            var1 = var2 > var1;
            return var1;
        };
        var5['value'] = var7;
        var1[3] = var5;
        var5 = {};
        var7 = 'hasApplication';
        var5['key'] = var7;
        var7 = function value(arg1, arg2) {
            _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
                var2 = arguments[2];
                var6 = undefined;
                if(!(var2 === var6)) { _fun0011_ip = 54; continue _fun0011 }
case 55:
                var2 = false;
case 54:
                var5 = _closure1_slot27;
                var4 = arg1;
                var1 = arg2;
                var5 = var5.bind(var6)(var4, var1);
                var1 = null;
                var1 = var1 != var5;
                if(!var1) { _fun0011_ip = 56; continue _fun0011 }
case 57:
                var2 = !var2;
                if(!var2) { _fun0011_ip = 8; continue _fun0011 }
case 58:
                var4 = var5.isHidden;
                var2 = var4.bind(var5)();
case 8:
                var2 = !var2;
                if(!var2) { _fun0011_ip = 59; continue _fun0011 }
case 11:
                var4 = _closure1_slot0;
                var7 = _closure1_slot3;
                var3 = 9;
                var3 = var7[var3];
                var4 = var4.bind(var6)(var3);
                var3 = var4.isUserEntitledToLibraryApplication;
                var2 = var3.bind(var4)(var5);
case 59:
                var1 = var2;
case 56:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[4] = var5;
        var5 = {};
        var7 = 'getLibraryApplication';
        var5['key'] = var7;
        var7 = function value(arg1, arg2) {
            _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
case 0:
                var2 = arguments[2];
                var6 = undefined;
                if(!(var2 === var6)) { _fun0012_ip = 54; continue _fun0012 }
case 55:
                var2 = false;
case 54:
                var5 = _closure1_slot27;
                var3 = arg1;
                var1 = arg2;
                var3 = var5.bind(var6)(var3, var1);
                var1 = var3;
                if(!var2) { _fun0012_ip = 60; continue _fun0012 }
case 53:
                var2 = null;
                var1 = var3;
                if(!(var2 != var1)) { _fun0012_ip = 60; continue _fun0012 }
case 58:
                var5 = _closure1_slot0;
                var7 = _closure1_slot3;
                var4 = 9;
                var4 = var7[var4];
                var5 = var5.bind(var6)(var4);
                var4 = var5.isUserEntitledToLibraryApplication;
                var4 = var4.bind(var5)(var3);
                var2 = null;
                if(!var4) { _fun0012_ip = 61; continue _fun0012 }
case 62:
                var2 = var3;
case 61:
                var1 = var2;
case 60:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[5] = var5;
        var5 = {};
        var7 = 'getActiveLibraryApplication';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
case 0:
                var15 = arg1;
                var14 = arguments[1];
                var2 = undefined;
                if(!(var14 === var2)) { _fun0013_ip = 36; continue _fun0013 }
case 63:
                var14 = false;
case 36:
                var1 = _closure1_slot17;
                var6 = var1[var15];
                var3 = null;
                if(!(var3 != var6)) { _fun0013_ip = 64; continue _fun0013 }
case 65:
                var4 = _closure1_slot0;
                var1 = _closure1_slot3;
                var5 = 9;
                var1 = var1[var5];
                var4 = var4.bind(var2)(var1);
                var1 = var4.getComboId;
                var6 = var1.bind(var4)(var15, var6);
                var1 = _closure1_slot14;
                var1 = var1[var6];
                if(!(var3 == var1)) { _fun0013_ip = 66; continue _fun0013 }
case 67:
                var4 = _closure1_slot15;
                var1 = var4[var6];
case 66:
                if(!(var3 != var1)) { _fun0013_ip = 64; continue _fun0013 }
case 60:
                var4 = _closure1_slot0;
                var3 = _closure1_slot3;
                var3 = var3[var5];
                var4 = var4.bind(var2)(var3);
                var3 = var4.isUserEntitledToLibraryApplication;
                var3 = var3.bind(var4)(var1);
                if(!var3) { _fun0013_ip = 64; continue _fun0013 }
case 68:
                if(var14) { _fun0013_ip = 27; continue _fun0013 }
case 69:
                var3 = var1.isHidden;
                var3 = var3.bind(var1)();
                if(!var3) { _fun0013_ip = 27; continue _fun0013 }
case 64:
                var3 = _closure1_slot28;
                var12 = var3.bind(var2)();
                var10 = var12;
                var6 = 9;
                var5 = undefined;
                for(var7 in var10)
case 70:
                {
case 71:
                    var3 = var7;
                    var4 = var12[var3];
                    var4 = var4.id;
                    if(var4 !== var15) { _fun0013_ip = 70; continue _fun0013 }
case 72:
                    var3 = var12[var3];
                    var16 = _closure1_slot0;
                    var4 = _closure1_slot3;
                    var4 = var4[var6];
                    var16 = var16.bind(var2)(var4);
                    var4 = var16.isUserEntitledToLibraryApplication;
                    var4 = var4.bind(var16)(var3);
                    var5 = var3;
                    if(!var4) { _fun0013_ip = 70; continue _fun0013 }
case 73:
                    if(var14) { _fun0013_ip = 74; continue _fun0013 }
case 75:
                    var4 = var3.isHidden;
                    var4 = var4.bind(var3)();
                    var5 = var3;
                    if(var4) { _fun0013_ip = 70; continue _fun0013 }
case 74:
                    return var3;
                }
case 76:
                return var2;
case 27:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[6] = var5;
        var5 = {};
        var7 = 'isUpdatingFlags';
        var5['key'] = var7;
        var7 = function value(arg1, arg2) {
            var3 = _closure1_slot16;
            var2 = var3.has;
            var5 = _closure1_slot0;
            var4 = _closure1_slot3;
            var1 = 9;
            var4 = var4[var1];
            var1 = undefined;
            var6 = var5.bind(var1)(var4);
            var5 = var6.getComboId;
            var4 = arg1;
            var1 = arg2;
            var1 = var5.bind(var6)(var4, var1);
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var5['value'] = var7;
        var1[7] = var5;
        var5 = {};
        var7 = 'getActiveLaunchOptionId';
        var5['key'] = var7;
        var7 = function value(arg1, arg2) {
            var2 = _closure1_slot18;
            var4 = _closure1_slot0;
            var3 = _closure1_slot3;
            var1 = 9;
            var3 = var3[var1];
            var1 = undefined;
            var5 = var4.bind(var1)(var3);
            var4 = var5.getComboId;
            var3 = arg1;
            var1 = arg2;
            var1 = var4.bind(var5)(var3, var1);
            var1 = var2[var1];
            return var1;
        };
        var5['value'] = var7;
        var1[8] = var5;
        var5 = {};
        var7 = 'fetched';
        var5['key'] = var7;
        var7 = function get() {
            var1 = _closure1_slot13;
            return var1;
        };
        var5['get'] = var7;
        var1[9] = var5;
        var5 = {};
        var7 = 'entitledBranchIds';
        var5['key'] = var7;
        var7 = function get() {
            var5 = _closure1_slot1;
            var4 = _closure1_slot3;
            var3 = 11;
            var3 = var4[var3];
            var4 = undefined;
            var3 = var5.bind(var4)(var3);
            var2 = _closure1_slot28;
            var2 = var2.bind(var4)();
            var3 = var3.bind(var4)(var2);
            var2 = var3.values;
            var4 = var2.bind(var3)();
            var3 = var4.filter;
            var2 = function(arg1) {
                var3 = _closure1_slot0;
                var2 = _closure1_slot3;
                var1 = 9;
                var2 = var2[var1];
                var1 = undefined;
                var3 = var3.bind(var1)(var2);
                var2 = var3.isUserEntitledToLibraryApplication;
                var1 = arg1;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var3 = var3.bind(var4)(var2);
            var2 = var3.map;
            var1 = function(arg1) {
                var1 = arg1;
                var1 = var1.branchId;
                return var1;
            };
            var2 = var2.bind(var3)(var1);
            var1 = var2.value;
            var1 = var1.bind(var2)();
            return var1;
        };
        var5['get'] = var7;
        var1[10] = var5;
        var5 = {};
        var7 = 'hasRemovedLibraryApplicationThisSession';
        var5['key'] = var7;
        var7 = function get() {
            var1 = _closure1_slot19;
            return var1;
        };
        var5['get'] = var7;
        var1[11] = var5;
        var5 = {};
        var7 = 'whenInitialized';
        var5['key'] = var7;
        var6 = function value(arg1) {
            var3 = this;
            var2 = arg1;
            var _closure3_slot0 = var2;
            var2 = var3.addConditionalChangeListener;
            var1 = function() {
                _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
case 0:
                    var1 = _closure1_slot13;
                    var3 = undefined;
                    if(var1) { _fun0014_ip = 36; continue _fun0014 }
case 63:
                    return var3;
case 36:
                    var1 = global;
                    var2 = var1.setImmediate;
                    var1 = _closure3_slot0;
                    var1 = var2.bind(var3)(var1);
                    var1 = false;
                    return var1;
                }
            };
            var1 = var2.bind(var3)(var1);
            var1 = undefined;
            return var1;
        };
        var5['value'] = var6;
        var1[12] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var8 = var8.bind(var1)(var10);
    var8['displayName'] = var2;
    var2 = 13;
    var2 = var6[var2];
    var14 = var7.bind(var1)(var2);
    var2 = {};
    var10 = function handleLogout() {
        var1 = false;
        _closure1_slot13 = var1;
        var1 = undefined;
        return var1;
    };
    var2['LOGOUT'] = var10;
    var10 = function handleFetchSuccess(arg1) {
        var1 = arg1;
        var4 = var1.libraryApplications;
        var1 = {};
        _closure1_slot14 = var1;
        var2 = _closure1_slot26;
        var1 = undefined;
        var2 = var2.bind(var1)(var4);
        var2 = true;
        _closure1_slot13 = var2;
        return var1;
    };
    var2['LIBRARY_FETCH_SUCCESS'] = var10;
    var10 = function handlePurchaseSuccess(arg1) {
        var1 = arg1;
        var3 = var1.libraryApplications;
        var2 = _closure1_slot26;
        var1 = undefined;
        var2 = var2.bind(var1)(var3);
        return var1;
    };
    var2['SKU_PURCHASE_SUCCESS'] = var10;
    var10 = function handleFlagsUpdateStart(arg1) {
        _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
case 0:
            var1 = arg1;
            var6 = var1.applicationId;
            var5 = var1.branchId;
            var8 = var1.flags;
            var4 = _closure1_slot0;
            var3 = _closure1_slot3;
            var1 = 9;
            var3 = var3[var1];
            var1 = undefined;
            var4 = var4.bind(var1)(var3);
            var3 = var4.getComboId;
            var4 = var3.bind(var4)(var6, var5);
            var3 = _closure1_slot27;
            var6 = var3.bind(var1)(var6, var5);
            var3 = null;
            var3 = var3 != var6;
            if(!var3) { _fun0015_ip = 77; continue _fun0015 }
case 67:
            var5 = var6.isHidden;
            var5 = var5.bind(var6)();
            var3 = !var5;
case 77:
            if(!var3) { _fun0015_ip = 78; continue _fun0015 }
case 48:
            var6 = _closure1_slot2;
            var7 = _closure1_slot3;
            var5 = 10;
            var5 = var7[var5];
            var7 = var6.bind(var1)(var5);
            var6 = var7.hasFlag;
            var5 = _closure1_slot11;
            var5 = var5.HIDDEN;
            var3 = var6.bind(var7)(var8, var5);
case 78:
            if(!var3) { _fun0015_ip = 79; continue _fun0015 }
case 80:
            var3 = true;
            _closure1_slot19 = var3;
case 79:
            var3 = _closure1_slot16;
            var2 = var3.add;
            var2 = var2.bind(var3)(var4);
            return var1;
        }
    };
    var2['LIBRARY_APPLICATION_FLAGS_UPDATE_START'] = var10;
    var2['LIBRARY_APPLICATION_FLAGS_UPDATE_SUCCESS'] = var9;
    var2['LIBRARY_APPLICATION_UPDATE'] = var9;
    var9 = function handleActiveLaunchOptionIdUpdate(arg1) {
        var1 = arg1;
        var8 = var1.applicationId;
        var7 = var1.branchId;
        var5 = var1.launchOptionId;
        var4 = _closure1_slot18;
        var6 = _closure1_slot0;
        var3 = _closure1_slot3;
        var1 = 9;
        var3 = var3[var1];
        var1 = undefined;
        var6 = var6.bind(var1)(var3);
        var3 = var6.getComboId;
        var3 = var3.bind(var6)(var8, var7);
        var4[var3] = var5;
        var2 = _closure1_slot24;
        var2 = var2.bind(var1)();
        return var1;
    };
    var2['LIBRARY_APPLICATION_ACTIVE_LAUNCH_OPTION_UPDATE'] = var9;
    var9 = function handleActiveBranchUpdate(arg1) {
        _fun0016: for(var _fun0016_ip = 0; ; ) switch(_fun0016_ip) {
case 0:
            var1 = arg1;
            var4 = var1.applicationId;
            var3 = var1.branchId;
            var2 = _closure1_slot17;
            var2 = var2[var4];
            if(!(var2 !== var3)) { _fun0016_ip = 9; continue _fun0016 }
case 81:
            var2 = _closure1_slot17;
            var2[var4] = var3;
            var2 = _closure1_slot25;
            var1 = undefined;
            var2 = var2.bind(var1)();
            return var1;
case 9:
            var1 = false;
            return var1;
        }
    };
    var2['LIBRARY_APPLICATION_ACTIVE_BRANCH_UPDATE'] = var9;
    var9 = function handleTestModeEnabled(arg1) {
        _fun0017: for(var _fun0017_ip = 0; ; ) switch(_fun0017_ip) {
case 0:
            var1 = arg1;
            var3 = var1.libraryApplications;
            var2 = _closure1_slot21;
            var1 = undefined;
            var5 = var2.bind(var1)(var3);
            var3 = var5.bind(var1)();
            var2 = var3.done;
            var4 = 9;
            if(var2) { _fun0017_ip = 82; continue _fun0017 }
case 83:
            var8 = var3.value;
            var7 = _closure1_slot0;
            var2 = _closure1_slot3;
            var2 = var2[var4];
            var10 = var7.bind(var1)(var2);
            var9 = var10.getComboId;
            var7 = var8.id;
            var2 = var8.branchId;
            var7 = var9.bind(var10)(var7, var2);
            var2 = _closure1_slot15;
            var2[var7] = var8;
            var7 = var5.bind(var1)();
            var2 = var7.done;
            var3 = var7;
            if(!var2) { _fun0017_ip = 83; continue _fun0017 }
case 82:
            return var1;
        }
    };
    var2['LIBRARY_APPLICATIONS_TEST_MODE_ENABLED'] = var9;
    var4 = function handleTestModeDisabled() {
        var1 = {};
        _closure1_slot15 = var1;
        var1 = undefined;
        return var1;
    };
    var2['DEVELOPER_TEST_MODE_RESET'] = var4;
    var4 = var8.prototype;
    var4 = Object.create(var4, {constructor: {value: var8}});
    var15 = var4;
    var13 = var2;
    var2 = new var15[var8](var14, var13, var12);
    var2 = var2 instanceof Object ? var2 : var4;
    var4 = 14;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'stores/LibraryApplicationStore.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();