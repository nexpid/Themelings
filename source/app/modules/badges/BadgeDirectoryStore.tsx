// app/modules/badges/BadgeDirectoryStore.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var7 = require;
    var9 = metroImportDefault;
    var3 = exports;
    var8 = dependencyMap;
    var _closure1_slot0 = var7;
    var _closure1_slot1 = var9;
    var _closure1_slot2 = var8;
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
            _closure1_slot16 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot16 = var1;
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
            var2 = var3["@@iterator"];
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
            var9 = _closure1_slot18;
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
            var7 = _closure1_slot18;
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
    var _closure1_slot17 = var1;
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
            if(!var5) { _fun0004_ip = 39; continue _fun0004 }
case 8:
            var5 = var4[var3];
            var1[var3] = var5;
            var3 = var3 + 1;
            if(var3 < var2) { _fun0004_ip = 8; continue _fun0004 }
case 39:
            return var1;
        }
    };
    var _closure1_slot18 = var1;
    var4 = function getSingleRequirementThreshold(arg1) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
            var3 = arg1;
            var1 = null;
            var4 = var1 == var3;
            var2 = undefined;
            if(var4) { _fun0005_ip = 40; continue _fun0005 }
case 36:
            var4 = var3.requirements;
            var3 = 0;
            var3 = var4[var3];
            var4 = var1 == var3;
            var2 = undefined;
            if(var4) { _fun0005_ip = 40; continue _fun0005 }
case 41:
            var2 = var3.threshold;
case 40:
            var3 = var1 != var2;
            var1 = 0;
            if(!var3) { _fun0005_ip = 8; continue _fun0005 }
case 42:
            var1 = var2;
case 8:
            return var1;
        }
    };
    var _closure1_slot19 = var4;
    var2 = function getObtainedAtFromBadge(arg1) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
            var2 = arg1;
            var3 = null;
            if(!(var3 == var2)) { _fun0006_ip = 43; continue _fun0006 }
case 44:
            var1 = undefined;
            return var1;
case 43:
            var1 = var2.current_tier;
            var5 = var3 != var1;
            var1 = undefined;
            if(!var5) { _fun0006_ip = 45; continue _fun0006 }
case 38:
            var6 = var2.tier_obtained_at;
            var5 = var3 == var6;
            var4 = undefined;
            if(var5) { _fun0006_ip = 8; continue _fun0006 }
case 46:
            var5 = var2.current_tier;
            var4 = var6[var5];
case 8:
            var1 = var4;
case 45:
            if(!(var3 == var1)) { _fun0006_ip = 39; continue _fun0006 }
case 47:
            var1 = var2.obtained_at;
case 39:
            return var1;
        }
    };
    var _closure1_slot20 = var2;
    var5 = global;
    var12 = var5.Object;
    var11 = var12.defineProperty;
    var10 = {};
    var1 = true;
    var10['value'] = var1;
    var1 = '__esModule';
    var1 = var11.bind(var12)(var3, var1, var10);
    var1 = 0;
    var10 = var8[var1];
    var1 = undefined;
    var10 = var9.bind(var1)(var10);
    var _closure1_slot3 = var10;
    var10 = 1;
    var10 = var8[var10];
    var10 = var9.bind(var1)(var10);
    var _closure1_slot4 = var10;
    var10 = 2;
    var10 = var8[var10];
    var10 = var9.bind(var1)(var10);
    var _closure1_slot5 = var10;
    var10 = 3;
    var10 = var8[var10];
    var10 = var9.bind(var1)(var10);
    var _closure1_slot6 = var10;
    var10 = 4;
    var10 = var8[var10];
    var10 = var9.bind(var1)(var10);
    var _closure1_slot7 = var10;
    var10 = 5;
    var10 = var8[var10];
    var10 = var9.bind(var1)(var10);
    var _closure1_slot8 = var10;
    var10 = 6;
    var10 = var8[var10];
    var10 = var9.bind(var1)(var10);
    var10 = var10.Millis;
    var10 = var10.HOUR;
    var _closure1_slot9 = var10;
    var10 = var5.Map;
    var11 = var10.prototype;
    var11 = Object.create(var11, {constructor: {value: var10}});
    var16 = var11;
    var10 = new var16[var10](var15);
    var10 = var10 instanceof Object ? var10 : var11;
    var _closure1_slot10 = var10;
    var10 = var5.Set;
    var11 = var10.prototype;
    var11 = Object.create(var11, {constructor: {value: var10}});
    var16 = var11;
    var10 = new var16[var10](var15);
    var10 = var10 instanceof Object ? var10 : var11;
    var _closure1_slot11 = var10;
    var10 = var5.Set;
    var11 = var10.prototype;
    var11 = Object.create(var11, {constructor: {value: var10}});
    var16 = var11;
    var10 = new var16[var10](var15);
    var10 = var10 instanceof Object ? var10 : var11;
    var _closure1_slot12 = var10;
    var10 = var5.Map;
    var11 = var10.prototype;
    var11 = Object.create(var11, {constructor: {value: var10}});
    var16 = var11;
    var10 = new var16[var10](var15);
    var10 = var10 instanceof Object ? var10 : var11;
    var _closure1_slot13 = var10;
    var10 = var5.Map;
    var11 = var10.prototype;
    var11 = Object.create(var11, {constructor: {value: var10}});
    var16 = var11;
    var10 = new var16[var10](var15);
    var10 = var10 instanceof Object ? var10 : var11;
    var _closure1_slot14 = var10;
    var5 = var5.Map;
    var10 = var5.prototype;
    var10 = Object.create(var10, {constructor: {value: var5}});
    var16 = var10;
    var5 = new var16[var5](var15);
    var5 = var5 instanceof Object ? var5 : var10;
    var _closure1_slot15 = var5;
    var5 = 10;
    var5 = var8[var5];
    var5 = var9.bind(var1)(var5);
    var10 = var5.Store;
    var5 = function(arg1) {
        var4 = function BadgeDirectoryStore() {
            _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                var4 = this;
                var3 = undefined;
                var5 = undefined;
                var1 = _closure1_slot3;
                var2 = _closure2_slot0;
                var1 = var1.bind(var3)(var4, var2);
                var1 = _closure1_slot6;
                var9 = var1.bind(var3)(var2);
                var2 = _closure1_slot5;
                var1 = _closure1_slot16;
                var1 = var1.bind(var3)();
                if(var1) { _fun0007_ip = 48; continue _fun0007 }
case 49:
                var7 = var9.apply;
                var5 = arguments;
                var1 = var5;
                var1 = var7.bind(var9)(var4, var1);
                _fun0007_ip = 50; continue _fun0007;
case 48:
                var7 = global;
                var8 = var7.Reflect;
                var7 = var8.construct;
                var6 = _closure1_slot6;
                var6 = var6.bind(var3)(var4);
                var6 = var6.constructor;
                var5 = arguments;
                var1 = var7.bind(var8)(var9, var5, var6);
case 50:
                var1 = var2.bind(var3)(var4, var1);
                return var1;
            }
        };
        var _closure2_slot0 = var4;
        var5 = _closure1_slot7;
        var3 = undefined;
        var2 = arg1;
        var2 = var5.bind(var3)(var4, var2);
        var2 = _closure1_slot4;
        var5 = {};
        var1 = 'initialize';
        var5['key'] = var1;
        var1 = function value() {
            var3 = this;
            var2 = var3.waitFor;
            var1 = _closure1_slot8;
            var1 = var2.bind(var3)(var1);
            var1 = undefined;
            return var1;
        };
        var5['value'] = var1;
        var1 = new Array(11);
        var1[0] = var5;
        var5 = {};
        var7 = 'getBadges';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                var4 = arg1;
                var1 = null;
                if(!(var1 == var4)) { _fun0008_ip = 51; continue _fun0008 }
case 44:
                var3 = _closure1_slot8;
                var2 = var3.getCurrentUser;
                var3 = var2.bind(var3)();
                var5 = var1 == var3;
                var2 = undefined;
                if(var5) { _fun0008_ip = 52; continue _fun0008 }
case 53:
                var2 = var3.id;
case 52:
                var4 = var2;
case 51:
                if(!(var1 != var4)) { _fun0008_ip = 54; continue _fun0008 }
case 6:
                var3 = _closure1_slot10;
                var2 = var3.get;
                var5 = var2.bind(var3)(var4);
                if(!(var1 == var5)) { _fun0008_ip = 55; continue _fun0008 }
case 34:
                var1 = new Array(0);
                _fun0008_ip = 56; continue _fun0008;
case 55:
                var2 = global;
                var4 = var2.Array;
                var3 = var4.from;
                var2 = var5.values;
                var2 = var2.bind(var5)();
                var1 = var3.bind(var4)(var2);
case 56:
                return var1;
case 54:
                var1 = new Array(0);
                return var1;
            }
        };
        var5['value'] = var7;
        var1[1] = var5;
        var5 = {};
        var7 = 'hasCatalogFor';
        var5['key'] = var7;
        var7 = function value(arg1) {
            var3 = _closure1_slot11;
            var2 = var3.has;
            var1 = arg1;
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var5['value'] = var7;
        var1[2] = var5;
        var5 = {};
        var7 = 'isCatalogStaleFor';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                var4 = _closure1_slot13;
                var3 = var4.get;
                var1 = arg1;
                var4 = var3.bind(var4)(var1);
                var1 = null;
                var1 = var1 == var4;
                if(var1) { _fun0009_ip = 45; continue _fun0009 }
case 57:
                var3 = global;
                var5 = var3.Date;
                var3 = var5.now;
                var3 = var3.bind(var5)();
                var3 = var3 - var4;
                var2 = _closure1_slot9;
                var1 = var3 >= var2;
case 45:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[3] = var5;
        var5 = {};
        var7 = 'hasCatalogFetchErrorFor';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
                var4 = arg1;
                var1 = null;
                if(!(var1 == var4)) { _fun0010_ip = 51; continue _fun0010 }
case 44:
                var3 = _closure1_slot8;
                var2 = var3.getCurrentUser;
                var3 = var2.bind(var3)();
                var5 = var1 == var3;
                var2 = undefined;
                if(var5) { _fun0010_ip = 52; continue _fun0010 }
case 53:
                var2 = var3.id;
case 52:
                var4 = var2;
case 51:
                var1 = var1 != var4;
                if(!var1) { _fun0010_ip = 58; continue _fun0010 }
case 9:
                var3 = _closure1_slot12;
                var2 = var3.has;
                var1 = var2.bind(var3)(var4);
case 58:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[4] = var5;
        var5 = {};
        var7 = 'getBadgeById';
        var5['key'] = var7;
        var7 = function value(arg1, arg2) {
            _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
                var6 = arg2;
                var3 = null;
                if(!(var3 == var6)) { _fun0011_ip = 51; continue _fun0011 }
case 44:
                var2 = _closure1_slot8;
                var1 = var2.getCurrentUser;
                var2 = var1.bind(var2)();
                var4 = var3 == var2;
                var1 = undefined;
                if(var4) { _fun0011_ip = 52; continue _fun0011 }
case 53:
                var1 = var2.id;
case 52:
                var6 = var1;
case 51:
                var4 = var3 != var6;
                var1 = undefined;
                if(!var4) { _fun0011_ip = 59; continue _fun0011 }
case 49:
                var5 = _closure1_slot10;
                var4 = var5.get;
                var5 = var4.bind(var5)(var6);
                var3 = var3 == var5;
                var2 = undefined;
                if(var3) { _fun0011_ip = 60; continue _fun0011 }
case 61:
                var4 = var5.get;
                var3 = arg1;
                var2 = var4.bind(var5)(var3);
case 60:
                var1 = var2;
case 59:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[5] = var5;
        var5 = {};
        var7 = 'getSingleRequirementProgress';
        var5['key'] = var7;
        var7 = function value(arg1, arg2) {
            _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
case 0:
                var4 = this;
                var3 = var4.getBadgeById;
                var2 = arg1;
                var1 = arg2;
                var4 = var3.bind(var4)(var2, var1);
                var1 = null;
                var5 = var1 == var4;
                var3 = undefined;
                var2 = undefined;
                if(var5) { _fun0012_ip = 62; continue _fun0012 }
case 53:
                var2 = var4.progress;
case 62:
                if(!(var1 != var2)) { _fun0012_ip = 8; continue _fun0012 }
case 63:
                var4 = var2.length;
                var1 = 0;
                if(!(var1 === var4)) { _fun0012_ip = 64; continue _fun0012 }
case 8:
                return var3;
case 64:
                var1 = var2[var1];
                return var1;
            }
        };
        var5['value'] = var7;
        var1[6] = var5;
        var5 = {};
        var7 = 'getCurrentTier';
        var5['key'] = var7;
        var7 = function value(arg1, arg2) {
            _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
case 0:
                var5 = this;
                var4 = var5.getBadgeById;
                var3 = arg1;
                var2 = arg2;
                var2 = var4.bind(var5)(var3, var2);
                var _closure3_slot0 = var2;
                var5 = null;
                var6 = var5 == var2;
                var3 = undefined;
                var4 = undefined;
                if(var6) { _fun0013_ip = 6; continue _fun0013 }
case 62:
                var4 = var2.current_tier;
case 6:
                if(!(var5 == var4)) { _fun0013_ip = 42; continue _fun0013 }
case 65:
                return var3;
case 42:
                var3 = var2.tiers;
                var2 = var3.find;
                var1 = function(arg1) {
                    var1 = arg1;
                    var2 = var1.key;
                    var1 = _closure3_slot0;
                    var1 = var1.current_tier;
                    var1 = var2 === var1;
                    return var1;
                };
                var1 = var2.bind(var3)(var1);
                return var1;
            }
        };
        var5['value'] = var7;
        var1[7] = var5;
        var5 = {};
        var7 = 'getObtainedAt';
        var5['key'] = var7;
        var7 = function value(arg1, arg2) {
            var5 = this;
            var3 = _closure1_slot20;
            var4 = var5.getBadgeById;
            var2 = arg1;
            var1 = arg2;
            var2 = var4.bind(var5)(var2, var1);
            var1 = undefined;
            var1 = var3.bind(var1)(var2);
            return var1;
        };
        var5['value'] = var7;
        var1[8] = var5;
        var5 = {};
        var7 = 'getNextTier';
        var5['key'] = var7;
        var7 = function value(arg1, arg2) {
            _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
case 0:
                var5 = this;
                var4 = var5.getBadgeById;
                var3 = arg1;
                var2 = arg2;
                var2 = var4.bind(var5)(var3, var2);
                var _closure3_slot0 = var2;
                var5 = null;
                var6 = var5 == var2;
                var3 = undefined;
                var4 = undefined;
                if(var6) { _fun0014_ip = 6; continue _fun0014 }
case 62:
                var4 = var2.next_tier;
case 6:
                if(!(var5 == var4)) { _fun0014_ip = 42; continue _fun0014 }
case 65:
                return var3;
case 42:
                var3 = var2.tiers;
                var2 = var3.find;
                var1 = function(arg1) {
                    var1 = arg1;
                    var2 = var1.key;
                    var1 = _closure3_slot0;
                    var1 = var1.next_tier;
                    var1 = var2 === var1;
                    return var1;
                };
                var1 = var2.bind(var3)(var1);
                return var1;
            }
        };
        var5['value'] = var7;
        var1[9] = var5;
        var5 = {};
        var7 = 'getRemainingToNextTier';
        var5['key'] = var7;
        var6 = function value(arg1, arg2) {
            _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
case 0:
                var4 = arg1;
                var3 = arg2;
                var2 = this;
                var1 = var2.getNextTier;
                var8 = var1.bind(var2)(var4, var3);
                var1 = var2.getSingleRequirementProgress;
                var2 = var1.bind(var2)(var4, var3);
                var3 = null;
                var4 = var3 == var8;
                var5 = 0;
                var1 = 0;
                if(var4) { _fun0015_ip = 66; continue _fun0015 }
case 6:
                var3 = var3 == var2;
                var1 = 0;
                if(var3) { _fun0015_ip = 66; continue _fun0015 }
case 8:
                var3 = global;
                var4 = var3.Math;
                var3 = var4.max;
                var7 = _closure1_slot19;
                var6 = undefined;
                var6 = var7.bind(var6)(var8);
                var2 = var2.current;
                var2 = var6 - var2;
                var1 = var3.bind(var4)(var5, var2);
case 66:
                return var1;
            }
        };
        var5['value'] = var6;
        var1[10] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var10 = var5.bind(var1)(var10);
    var5 = 'BadgeDirectoryStore';
    var10['displayName'] = var5;
    var5 = 11;
    var5 = var8[var5];
    var15 = var9.bind(var1)(var5);
    var5 = {};
    var11 = function handleFetchStart(arg1) {
        var1 = arg1;
        var3 = var1.userId;
        var1 = global;
        var5 = var1.Set;
        var6 = _closure1_slot12;
        var4 = var5.prototype;
        var4 = Object.create(var4, {constructor: {value: var5}});
        var7 = var4;
        var2 = new var7[var5](var6, var5);
        var2 = var2 instanceof Object ? var2 : var4;
        _closure1_slot12 = var2;
        var1 = var2.delete;
        var1 = var1.bind(var2)(var3);
        var1 = undefined;
        return var1;
    };
    var5['BADGE_DIRECTORY_FETCH_START'] = var11;
    var11 = function handleFetchSuccess(arg1) {
        var1 = arg1;
        var5 = var1.userId;
        var9 = var1.badges;
        var1 = global;
        var6 = var1.Map;
        var11 = _closure1_slot10;
        var4 = var6.prototype;
        var4 = Object.create(var4, {constructor: {value: var6}});
        var12 = var4;
        var3 = new var12[var6](var11, var10);
        var3 = var3 instanceof Object ? var3 : var4;
        var6 = var3.set;
        var8 = var1.Map;
        var7 = var9.map;
        var4 = function(arg1) {
            var2 = arg1;
            var3 = var2.badge_id;
            var1 = new Array(2);
            var1[0] = var3;
            var1[1] = var2;
            return var1;
        };
        var11 = var7.bind(var9)(var4);
        var7 = var8.prototype;
        var7 = Object.create(var7, {constructor: {value: var8}});
        var12 = var7;
        var4 = new var12[var8](var11, var10);
        var4 = var4 instanceof Object ? var4 : var7;
        var4 = var6.bind(var3)(var5, var4);
        _closure1_slot10 = var3;
        var6 = var1.Set;
        var11 = _closure1_slot11;
        var4 = var6.prototype;
        var4 = Object.create(var4, {constructor: {value: var6}});
        var12 = var4;
        var3 = new var12[var6](var11, var10);
        var4 = var3 instanceof Object ? var3 : var4;
        var3 = var4.add;
        var3 = var3.bind(var4)(var5);
        _closure1_slot11 = var3;
        var6 = var1.Set;
        var11 = _closure1_slot12;
        var4 = var6.prototype;
        var4 = Object.create(var4, {constructor: {value: var6}});
        var12 = var4;
        var3 = new var12[var6](var11, var10);
        var4 = var3 instanceof Object ? var3 : var4;
        _closure1_slot12 = var4;
        var3 = var4.delete;
        var3 = var3.bind(var4)(var5);
        var6 = var1.Map;
        var11 = _closure1_slot13;
        var4 = var6.prototype;
        var4 = Object.create(var4, {constructor: {value: var6}});
        var12 = var4;
        var3 = new var12[var6](var11, var10);
        var4 = var3 instanceof Object ? var3 : var4;
        var3 = var4.set;
        var6 = var1.Date;
        var1 = var6.now;
        var1 = var1.bind(var6)();
        var1 = var3.bind(var4)(var5, var1);
        _closure1_slot13 = var1;
        var1 = undefined;
        return var1;
    };
    var5['BADGE_DIRECTORY_FETCH_SUCCESS'] = var11;
    var11 = function handleFetchFailure(arg1) {
        var1 = arg1;
        var4 = var1.userId;
        var1 = global;
        var5 = var1.Set;
        var6 = _closure1_slot12;
        var3 = var5.prototype;
        var3 = Object.create(var3, {constructor: {value: var5}});
        var7 = var3;
        var1 = new var7[var5](var6, var5);
        var3 = var1 instanceof Object ? var1 : var3;
        var1 = var3.add;
        var1 = var1.bind(var3)(var4);
        _closure1_slot12 = var1;
        var1 = undefined;
        return var1;
    };
    var5['BADGE_DIRECTORY_FETCH_FAILURE'] = var11;
    var11 = function handleBadgeFetchSuccess(arg1) {
        _fun0016: for(var _fun0016_ip = 0; ; ) switch(_fun0016_ip) {
case 0:
            var1 = arg1;
            var5 = var1.userId;
            var7 = var1.badge;
            var3 = global;
            var6 = var3.Map;
            var10 = _closure1_slot10;
            var4 = var6.prototype;
            var4 = Object.create(var4, {constructor: {value: var6}});
            var11 = var4;
            var1 = new var11[var6](var10, var9);
            var1 = var1 instanceof Object ? var1 : var4;
            var4 = var1.get;
            var6 = var4.bind(var1)(var5);
            var4 = null;
            if(!(var4 == var6)) { _fun0016_ip = 67; continue _fun0016 }
case 68:
            var4 = var3.Map;
            var8 = var4.prototype;
            var8 = Object.create(var8, {constructor: {value: var4}});
            var11 = var8;
            var4 = new var11[var4](var10);
            var6 = var4 instanceof Object ? var4 : var8;
case 67:
            var3 = var3.Map;
            var4 = var3.prototype;
            var4 = Object.create(var4, {constructor: {value: var3}});
            var11 = var4;
            var10 = var6;
            var3 = new var11[var3](var10, var9);
            var4 = var3 instanceof Object ? var3 : var4;
            var6 = var4.set;
            var3 = var7.badge_id;
            var3 = var6.bind(var4)(var3, var7);
            var3 = var1.set;
            var3 = var3.bind(var1)(var5, var4);
            _closure1_slot10 = var1;
            var1 = undefined;
            return var1;
        }
    };
    var5['BADGE_FETCH_SUCCESS'] = var11;
    var11 = function handleUserProfileFetchSuccess(arg1) {
        _fun0017: for(var _fun0017_ip = 0; ; ) switch(_fun0017_ip) {
case 0:
            var1 = arg1;
            var2 = var1.userProfile;
            var1 = var2.user;
            var3 = var1.id;
            var5 = _closure1_slot11;
            var4 = var5.has;
            var4 = var4.bind(var5)(var3);
            if(!var4) { _fun0017_ip = 69; continue _fun0017 }
case 51:
            var6 = var2.badges;
            var5 = null;
            if(!(var5 == var6)) { _fun0017_ip = 45; continue _fun0017 }
case 70:
            var6 = new Array(0);
case 45:
            var4 = var6.filter;
            var2 = function(arg1) {
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 7;
                var2 = var2[var1];
                var1 = undefined;
                var3 = var3.bind(var1)(var2);
                var2 = var3.resolveProfileBadgeId;
                var1 = arg1;
                var1 = var1.id;
                var2 = var2.bind(var3)(var1);
                var1 = null;
                var1 = var1 != var2;
                return var1;
            };
            var2 = var4.bind(var6)(var2);
            var6 = var2.length;
            var7 = _closure1_slot17;
            var4 = _closure1_slot10;
            var2 = var4.get;
            var9 = var2.bind(var4)(var3);
            var8 = var5 == var9;
            var4 = undefined;
            var2 = undefined;
            if(var8) { _fun0017_ip = 71; continue _fun0017 }
case 72:
            var8 = var9.values;
            var2 = var8.bind(var9)();
case 71:
            if(!(var5 == var2)) { _fun0017_ip = 73; continue _fun0017 }
case 74:
            var2 = new Array(0);
case 73:
            var11 = var7.bind(var4)(var2);
            var2 = var11.bind(var4)();
            var8 = var2.done;
            var10 = var2;
            var9 = 0;
            var2 = 0;
            if(var8) { _fun0017_ip = 24; continue _fun0017 }
case 75:
            var8 = var10.value;
            var8 = var8.owned;
            var12 = var9;
            if(!var8) { _fun0017_ip = 76; continue _fun0017 }
case 77:
            var12 = var9 + 1;
case 76:
            var13 = var11.bind(var4)();
            var8 = var13.done;
            var9 = var12;
            var10 = var13;
            var2 = var9;
            if(!var8) { _fun0017_ip = 75; continue _fun0017 }
case 24:
            if(!(var6 === var2)) { _fun0017_ip = 78; continue _fun0017 }
case 79:
            var6 = _closure1_slot14;
            var2 = var6.get;
            var6 = var2.bind(var6)(var3);
            if(!(var5 != var6)) { _fun0017_ip = 80; continue _fun0017 }
case 81:
            var2 = var6.succeed;
            var2 = var2.bind(var6)();
case 80:
            var6 = _closure1_slot15;
            var2 = var6.delete;
            var2 = var2.bind(var6)(var3);
            _fun0017_ip = 69; continue _fun0017;
case 78:
            var6 = _closure1_slot15;
            var2 = var6.get;
            var2 = var2.bind(var6)(var3);
            var6 = var5 != var2;
            var7 = 0;
            if(!var6) { _fun0017_ip = 82; continue _fun0017 }
case 83:
            var7 = var2;
case 82:
            var2 = global;
            var8 = var2.Date;
            var6 = var8.now;
            var6 = var6.bind(var8)();
            if(!(var6 >= var7)) { _fun0017_ip = 69; continue _fun0017 }
case 84:
            var7 = _closure1_slot14;
            var6 = var7.get;
            var8 = var6.bind(var7)(var3);
            if(!(var5 == var8)) { _fun0017_ip = 85; continue _fun0017 }
case 86:
            var6 = _closure1_slot1;
            var7 = _closure1_slot2;
            var5 = 8;
            var5 = var7[var5];
            var10 = var6.bind(var4)(var5);
            var5 = 6;
            var5 = var7[var5];
            var5 = var6.bind(var4)(var5);
            var5 = var5.Millis;
            var16 = var5.MINUTE;
            var15 = _closure1_slot9;
            var5 = var10.prototype;
            var6 = Object.create(var5, {constructor: {value: var10}});
            var14 = true;
            var17 = var6;
            var5 = new var17[var10](var16, var15, var14, var13);
            var8 = var5 instanceof Object ? var5 : var6;
case 85:
            var6 = _closure1_slot14;
            var5 = var6.set;
            var5 = var5.bind(var6)(var3, var8);
            var6 = _closure1_slot15;
            var5 = var6.set;
            var7 = var2.Date;
            var2 = var7.now;
            var7 = var2.bind(var7)();
            var2 = var8.fail;
            var2 = var2.bind(var8)();
            var2 = var7 + var2;
            var2 = var5.bind(var6)(var3, var2);
            var2 = _closure1_slot0;
            var5 = _closure1_slot2;
            var1 = 9;
            var1 = var5[var1];
            var2 = var2.bind(var4)(var1);
            var1 = var2.fetchBadgeDirectory;
            var1 = var1.bind(var2)(var3);
case 69:
            var1 = false;
            return var1;
        }
    };
    var5['USER_PROFILE_FETCH_SUCCESS'] = var11;
    var6 = function handleReset() {
        var2 = global;
        var1 = var2.Map;
        var3 = var1.prototype;
        var3 = Object.create(var3, {constructor: {value: var1}});
        var5 = var3;
        var1 = new var5[var1](var4);
        var3 = var1 instanceof Object ? var1 : var3;
        _closure1_slot10 = var3;
        var3 = var2.Set;
        var4 = var3.prototype;
        var4 = Object.create(var4, {constructor: {value: var3}});
        var5 = var4;
        var3 = new var5[var3](var4);
        var3 = var3 instanceof Object ? var3 : var4;
        _closure1_slot11 = var3;
        var3 = var2.Set;
        var4 = var3.prototype;
        var4 = Object.create(var4, {constructor: {value: var3}});
        var5 = var4;
        var3 = new var5[var3](var4);
        var3 = var3 instanceof Object ? var3 : var4;
        _closure1_slot12 = var3;
        var2 = var2.Map;
        var3 = var2.prototype;
        var3 = Object.create(var3, {constructor: {value: var2}});
        var5 = var3;
        var2 = new var5[var2](var4);
        var2 = var2 instanceof Object ? var2 : var3;
        _closure1_slot13 = var2;
        var3 = _closure1_slot14;
        var2 = var3.clear;
        var2 = var2.bind(var3)();
        var2 = _closure1_slot15;
        var1 = var2.clear;
        var1 = var1.bind(var2)();
        var1 = undefined;
        return var1;
    };
    var5['LOGOUT'] = var6;
    var6 = var10.prototype;
    var6 = Object.create(var6, {constructor: {value: var10}});
    var16 = var6;
    var14 = var5;
    var5 = new var16[var10](var15, var14, var13);
    var5 = var5 instanceof Object ? var5 : var6;
    var6 = 12;
    var6 = var8[var6];
    var8 = var7.bind(var1)(var6);
    var7 = var8.fileFinishedImporting;
    var6 = 'modules/badges/BadgeDirectoryStore.tsx';
    var6 = var7.bind(var8)(var6);
    var3['default'] = var5;
    var3['getSingleRequirementThreshold'] = var4;
    var3['getObtainedAtFromBadge'] = var2;
    return var1;
})();