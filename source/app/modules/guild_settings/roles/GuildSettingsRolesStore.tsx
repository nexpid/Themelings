// app/modules/guild_settings/roles/GuildSettingsRolesStore.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var9 = metroImportDefault;
    var3 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var9;
    var1 = metroImportAll;
    var _closure1_slot2 = var1;
    var _closure1_slot3 = var7;
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
            _closure1_slot39 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot39 = var1;
    var1 = function clearRoleEdit(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var4 = _closure1_slot26;
            var3 = var4.delete;
            var1 = arg1;
            var1 = var3.bind(var4)(var1);
            var1 = _closure1_slot26;
            var3 = var1.size;
            var1 = 0;
            if(!(var1 === var3)) { _fun0002_ip = 6; continue _fun0002 }
case 7:
            var1 = false;
            _closure1_slot28 = var1;
case 6:
            var1 = undefined;
            return var1;
        }
    };
    var _closure1_slot40 = var1;
    var1 = function clearConfigurationEdit(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var4 = _closure1_slot33;
            var3 = var4.delete;
            var1 = arg1;
            var1 = var3.bind(var4)(var1);
            var1 = _closure1_slot33;
            var3 = var1.size;
            var1 = 0;
            if(!(var1 === var3)) { _fun0003_ip = 6; continue _fun0003 }
case 7:
            var1 = false;
            _closure1_slot32 = var1;
case 6:
            var1 = undefined;
            return var1;
        }
    };
    var _closure1_slot41 = var1;
    var1 = function calculatePositionDeltas() {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var1 = _closure1_slot21;
            var2 = null;
            if(!(var2 != var1)) { _fun0004_ip = 8; continue _fun0004 }
case 9:
            var1 = _closure1_slot30;
            if(!(var2 != var1)) { _fun0004_ip = 8; continue _fun0004 }
case 10:
            var3 = _closure1_slot1;
            var2 = _closure1_slot3;
            var1 = 13;
            var2 = var2[var1];
            var1 = undefined;
            var3 = var3.bind(var1)(var2);
            var2 = var3.calculatePositionDeltas;
            var1 = {};
            var8 = _closure1_slot12;
            var7 = var8.getSortedRoles;
            var6 = _closure1_slot21;
            var6 = var6.id;
            var6 = var7.bind(var8)(var6);
            var1['oldOrdering'] = var6;
            var5 = _closure1_slot30;
            var1['newOrdering'] = var5;
            var5 = function idGetter(arg1) {
                var1 = arg1;
                var1 = var1.id;
                return var1;
            };
            var1['idGetter'] = var5;
            var4 = function existingPositionGetter(arg1) {
                var1 = arg1;
                var1 = var1.position;
                return var1;
            };
            var1['existingPositionGetter'] = var4;
            var4 = false;
            var1['ascending'] = var4;
            var1 = var2.bind(var3)(var1);
            _fun0004_ip = 11; continue _fun0004;
case 8:
            var1 = new Array(0);
case 11:
            return var1;
        }
    };
    var _closure1_slot42 = var1;
    var11 = function handleSetSection(arg1) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
            var1 = arg1;
            var3 = var1.section;
            var4 = _closure1_slot21;
            var2 = null;
            if(!(var2 == var4)) { _fun0005_ip = 12; continue _fun0005 }
case 13:
            var2 = _closure1_slot15;
            var2 = var2.ROLES;
            if(!(var3 === var2)) { _fun0005_ip = 12; continue _fun0005 }
case 14:
            var2 = _closure1_slot43;
            var1 = undefined;
            var2 = var2.bind(var1)();
            return var1;
case 12:
            var1 = false;
            return var1;
        }
    };
    var1 = function handleInit() {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
            var3 = arguments[0];
            var1 = undefined;
            if(!(var3 === var1)) { _fun0006_ip = 15; continue _fun0006 }
case 16:
            var3 = true;
case 15:
            var5 = _closure1_slot13;
            var4 = var5.getProps;
            var4 = var4.bind(var5)();
            var4 = var4.guild;
            var _closure1_slot21 = var4;
            var4 = false;
            _closure1_slot28 = var4;
            _closure1_slot29 = var4;
            var _closure1_slot23 = var1;
            var6 = _closure1_slot26;
            var5 = var6.clear;
            var5 = var5.bind(var6)();
            var6 = _closure1_slot36;
            var5 = var6.clear;
            var5 = var5.bind(var6)();
            var5 = _closure1_slot16;
            var5 = var5.OPEN;
            _closure1_slot27 = var5;
            var5 = _closure1_slot21;
            var6 = null;
            if(!(var6 == var5)) { _fun0006_ip = 17; continue _fun0006 }
case 18:
            var8 = new Array(0);
            _fun0006_ip = 19; continue _fun0006;
case 17:
            var9 = _closure1_slot12;
            var7 = var9.getSortedRoles;
            var5 = _closure1_slot21;
            var5 = var5.id;
            var11 = var7.bind(var9)(var5);
            var5 = new Array(0);
            var10 = 0;
            var12 = var5;
            var7 = arraySpread(var12, var11, var10);
            var8 = var5;
case 19:
            _closure1_slot30 = var8;
            var5 = new Array(0);
            var10 = 0;
            var12 = var5;
            var11 = var8;
            var7 = arraySpread(var12, var11, var10);
            _closure1_slot31 = var5;
            var7 = _closure1_slot44;
            var5 = _closure1_slot21;
            var8 = var6 == var5;
            var6 = undefined;
            if(var8) { _fun0006_ip = 20; continue _fun0006 }
case 21:
            var6 = var5.id;
case 20:
            var5 = _closure1_slot31;
            var5 = var7.bind(var1)(var6, var5);
            _closure1_slot32 = var4;
            if(!var3) { _fun0006_ip = 22; continue _fun0006 }
case 23:
            var4 = _closure1_slot35;
            var3 = var4.clear;
            var3 = var3.bind(var4)();
            var4 = _closure1_slot34;
            var3 = var4.forEach;
            var2 = function(arg1, arg2) {
                var4 = _closure1_slot35;
                var3 = var4.set;
                var2 = new Array(0);
                var7 = arg1;
                var6 = 0;
                var8 = var2;
                var1 = arraySpread(var8, var7, var6);
                var1 = arg2;
                var1 = var3.bind(var4)(var1, var2);
                var1 = undefined;
                return var1;
            };
            var2 = var3.bind(var4)(var2);
case 22:
            return var1;
        }
    };
    var _closure1_slot43 = var1;
    var1 = function initRoleStyles(arg1, arg2) {
        var3 = arg2;
        var2 = arg1;
        var _closure2_slot0 = var2;
        var2 = var3.forEach;
        var1 = function(arg1) {
            _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                var2 = arg1;
                var1 = _closure1_slot24;
                var4 = var1.SOLID;
                var6 = _closure1_slot0;
                var5 = _closure1_slot3;
                var1 = 14;
                var5 = var5[var1];
                var1 = undefined;
                var7 = var6.bind(var1)(var5);
                var6 = var7.getHasEnhancedRoleColorsForRole;
                var5 = _closure2_slot0;
                var7 = var6.bind(var7)(var5, var2);
                var6 = var2.colors;
                var5 = null;
                var6 = var5 != var6;
                if(!var6) { _fun0007_ip = 5; continue _fun0007 }
case 24:
                var6 = var7;
case 5:
                var7 = var4;
                if(!var6) { _fun0007_ip = 25; continue _fun0007 }
case 26:
                var6 = var2.colors;
                var6 = var6.tertiary_color;
                if(!(var5 == var6)) { _fun0007_ip = 27; continue _fun0007 }
case 28:
                var6 = var2.colors;
                var6 = var6.secondary_color;
                if(!(var5 != var6)) { _fun0007_ip = 29; continue _fun0007 }
case 30:
                var6 = _closure1_slot24;
                var4 = var6.GRADIENT;
case 29:
                _fun0007_ip = 31; continue _fun0007;
case 27:
                var6 = _closure1_slot24;
                var4 = var6.HOLOGRAPHIC;
case 31:
                var7 = var4;
case 25:
                var6 = {};
                var4 = _closure1_slot24;
                var8 = var4.SOLID;
                var4 = {'primary_color': null, 'secondary_color': null, 'tertiary_color': null};
                var9 = _closure1_slot17;
                var4['primary_color'] = var9;
                var6[7] = var4;
                var4 = _closure1_slot24;
                var8 = var4.GRADIENT;
                var4 = {};
                var9 = _closure1_slot19;
                var9 = var9.primary_color;
                var4['primary_color'] = var9;
                var9 = _closure1_slot19;
                var9 = var9.secondary_color;
                var4['secondary_color'] = var9;
                var4['tertiary_color'] = var5;
                var6[7] = var4;
                var4 = _closure1_slot24;
                var8 = var4.HOLOGRAPHIC;
                var4 = {};
                var9 = _closure1_slot20;
                var9 = var9.primary_color;
                var4['primary_color'] = var9;
                var9 = _closure1_slot20;
                var9 = var9.secondary_color;
                var4['secondary_color'] = var9;
                var9 = _closure1_slot20;
                var9 = var9.tertiary_color;
                var4['tertiary_color'] = var9;
                var6[7] = var4;
                var4 = var2.colors;
                if(!(var5 != var4)) { _fun0007_ip = 32; continue _fun0007 }
case 33:
                var4 = {};
                var8 = var2.colors;
                var8 = var8.primary_color;
                if(!(var5 == var8)) { _fun0007_ip = 34; continue _fun0007 }
case 35:
                var8 = _closure1_slot17;
case 34:
                var4['primary_color'] = var8;
                var8 = var2.colors;
                var9 = var8.secondary_color;
                var10 = var5 != var9;
                var8 = null;
                if(!var10) { _fun0007_ip = 36; continue _fun0007 }
case 37:
                var8 = var9;
case 36:
                var4['secondary_color'] = var8;
                var8 = var2.colors;
                var8 = var8.tertiary_color;
                var9 = var5 != var8;
                var5 = null;
                if(!var9) { _fun0007_ip = 38; continue _fun0007 }
case 39:
                var5 = var8;
case 38:
                var4['tertiary_color'] = var5;
                var6[var7] = var4;
case 32:
                var5 = _closure1_slot36;
                var4 = var5.set;
                var3 = var2.id;
                var2 = {};
                var2['currentStyle'] = var7;
                var2['styleColors'] = var6;
                var2 = var4.bind(var5)(var3, var2);
                return var1;
            }
        };
        var1 = var2.bind(var3)(var1);
        var1 = undefined;
        return var1;
    };
    var _closure1_slot44 = var1;
    var1 = function getSectionFieldContext(arg1, arg2) {
        _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
            var4 = arg1;
            var3 = _closure1_slot25;
            var1 = arg2;
            var6 = var3[var1];
            var1 = null;
            if(!(var1 != var6)) { _fun0008_ip = 40; continue _fun0008 }
case 10:
            var5 = var6.length;
            var3 = 0;
            if(!(var3 !== var5)) { _fun0008_ip = 40; continue _fun0008 }
case 41:
            var5 = _closure1_slot48;
            var3 = undefined;
            var5 = var5.bind(var3)(var4);
            var2 = _closure1_slot49;
            var4 = var2.bind(var3)(var4);
            var3 = var1 == var5;
            var2 = null;
            if(var3) { _fun0008_ip = 42; continue _fun0008 }
case 43:
            var3 = var1 == var4;
            var2 = null;
            if(var3) { _fun0008_ip = 42; continue _fun0008 }
case 3:
            var3 = {};
            var3['fields'] = var6;
            var3['role'] = var5;
            var3['original'] = var4;
            var2 = var3;
case 42:
            return var2;
case 40:
            return var1;
        }
    };
    var _closure1_slot45 = var1;
    var1 = function getRolesInOrder(arg1, arg2) {
        var5 = arg1;
        var6 = arg2;
        var _closure2_slot0 = var5;
        var3 = var6.map;
        var2 = function(arg1) {
            var3 = _closure2_slot0;
            var2 = var3.get;
            var1 = arg1;
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var4 = var3.bind(var6)(var2);
        var3 = var4.filter;
        var8 = _closure1_slot0;
        var7 = _closure1_slot3;
        var2 = 15;
        var7 = var7[var2];
        var2 = undefined;
        var2 = var8.bind(var2)(var7);
        var2 = var2.isNotNullish;
        var3 = var3.bind(var4)(var2);
        var _closure2_slot1 = var3;
        var2 = global;
        var2 = var2.Set;
        var4 = var2.prototype;
        var4 = Object.create(var4, {constructor: {value: var2}});
        var10 = var4;
        var9 = var6;
        var2 = new var10[var2](var9, var8);
        var2 = var2 instanceof Object ? var2 : var4;
        var _closure2_slot2 = var2;
        var4 = var5.forEach;
        var2 = function(arg1, arg2) {
            _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                var4 = _closure2_slot2;
                var3 = var4.has;
                var2 = arg2;
                var2 = var3.bind(var4)(var2);
                if(var2) { _fun0009_ip = 44; continue _fun0009 }
case 10:
                var3 = _closure2_slot1;
                var2 = var3.push;
                var1 = arg1;
                var1 = var2.bind(var3)(var1);
case 44:
                var1 = undefined;
                return var1;
            }
        };
        var2 = var4.bind(var5)(var2);
        var2 = var3.length;
        var _closure2_slot3 = var2;
        var2 = var3.map;
        var1 = function(arg1, arg2) {
            var1 = {};
            var4 = arg1;
            var5 = var1;
            var2 = copyDataProperties(var5, var4);
            var3 = _closure2_slot3;
            var2 = 1;
            var3 = var3 - var2;
            var2 = arg2;
            var3 = var3 - var2;
            var2 = 'position';
            var1[1] = var3;
            return var1;
        };
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var _closure1_slot46 = var1;
    var1 = function updateRole(arg1, arg2) {
        _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
            var3 = arg1;
            var4 = _closure1_slot30;
            var2 = var4.indexOf;
            var4 = var2.bind(var4)(var3);
            var6 = 0;
            if(!(!(var4 < var6))) { _fun0010_ip = 45; continue _fun0010 }
case 46:
            var2 = {};
            var9 = var2;
            var8 = var3;
            var3 = copyDataProperties(var9, var8);
            var8 = arg2;
            var9 = var2;
            var3 = copyDataProperties(var9, var8);
            var8 = _closure1_slot30;
            var3 = new Array(0);
            var9 = var3;
            var7 = 0;
            var5 = arraySpread(var9, var8, var7);
            var3[var4] = var2;
            _closure1_slot30 = var3;
            var3 = true;
            _closure1_slot28 = var3;
            var4 = _closure1_slot26;
            var3 = var4.add;
            var2 = var2.id;
            var2 = var3.bind(var4)(var2);
            var2 = _closure1_slot37;
            var1 = undefined;
            var2 = var2.bind(var1)();
            return var1;
case 45:
            var1 = false;
            return var1;
        }
    };
    var _closure1_slot47 = var1;
    var1 = function _getRole(arg1) {
        var2 = arg1;
        var _closure2_slot0 = var2;
        var3 = _closure1_slot30;
        var2 = var3.find;
        var1 = function(arg1) {
            var1 = arg1;
            var2 = var1.id;
            var1 = _closure2_slot0;
            var1 = var2 === var1;
            return var1;
        };
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var _closure1_slot48 = var1;
    var1 = function getOriginalRole(arg1) {
        var2 = arg1;
        var _closure2_slot0 = var2;
        var3 = _closure1_slot31;
        var2 = var3.find;
        var1 = function(arg1) {
            var1 = arg1;
            var2 = var1.id;
            var1 = _closure2_slot0;
            var1 = var2 === var1;
            return var1;
        };
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var _closure1_slot49 = var1;
    var8 = function syncGuildChanges(arg1) {
        _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
            var1 = arg1;
            var8 = var1.guildId;
            var1 = undefined;
            var _closure2_slot0 = var1;
            var _closure2_slot1 = var1;
            var5 = _closure1_slot13;
            var4 = var5.getProps;
            var4 = var4.bind(var5)();
            var5 = var4.guild;
            _closure1_slot21 = var5;
            var4 = null;
            if(!(var4 != var5)) { _fun0011_ip = 47; continue _fun0011 }
case 48:
            var4 = _closure1_slot21;
            var4 = var4.id;
            if(!(var8 === var4)) { _fun0011_ip = 47; continue _fun0011 }
case 24:
            var5 = _closure1_slot27;
            var4 = _closure1_slot16;
            var4 = var4.SUBMITTING;
            if(!(var5 !== var4)) { _fun0011_ip = 47; continue _fun0011 }
case 42:
            var6 = _closure1_slot12;
            var5 = var6.getSortedRoles;
            var4 = _closure1_slot21;
            var4 = var4.id;
            var12 = var5.bind(var6)(var4);
            var5 = new Array(0);
            var13 = var5;
            var11 = 0;
            var6 = arraySpread(var13, var12, var11);
            _closure2_slot0 = var5;
            var9 = _closure1_slot26;
            var7 = var9.forEach;
            var6 = function(arg1) {
                _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
case 0:
                    var3 = arg1;
                    var _closure3_slot0 = var3;
                    var5 = _closure1_slot48;
                    var1 = undefined;
                    var6 = var5.bind(var1)(var3);
                    var5 = -1;
                    var _closure3_slot1 = var5;
                    var9 = _closure2_slot0;
                    var8 = var9.find;
                    var7 = function(arg1, arg2) {
                        _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
case 0:
                            var1 = arg1;
                            var3 = var1.id;
                            var1 = _closure3_slot0;
                            if(!(var3 !== var1)) { _fun0013_ip = 10; continue _fun0013 }
case 49:
                            var1 = undefined;
                            return var1;
case 10:
                            var1 = arg2;
                            _closure3_slot1 = var1;
                            var1 = true;
                            return var1;
                        }
                    };
                    var8 = var8.bind(var9)(var7);
                    var7 = null;
                    if(!(var7 != var8)) { _fun0012_ip = 50; continue _fun0012 }
case 51:
                    if(!(var7 != var6)) { _fun0012_ip = 50; continue _fun0012 }
case 52:
                    var5 = _closure2_slot0;
                    var4 = _closure3_slot1;
                    var5[var4] = var6;
                    _fun0012_ip = 53; continue _fun0012;
case 50:
                    var2 = _closure1_slot40;
                    var2 = var2.bind(var1)(var3);
case 53:
                    return var1;
                }
            };
            var6 = var7.bind(var9)(var6);
            var6 = global;
            var6 = var6.Map;
            var7 = var6.prototype;
            var7 = Object.create(var7, {constructor: {value: var6}});
            var14 = var7;
            var6 = new var14[var6](var13);
            var7 = var6 instanceof Object ? var6 : var7;
            _closure2_slot1 = var7;
            var10 = _closure1_slot26;
            var9 = var10.forEach;
            var6 = function(arg1) {
                _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
case 0:
                    var4 = arg1;
                    var2 = _closure1_slot36;
                    var1 = var2.get;
                    var3 = var1.bind(var2)(var4);
                    var1 = null;
                    if(!(var1 != var3)) { _fun0014_ip = 54; continue _fun0014 }
case 55:
                    var2 = _closure2_slot1;
                    var1 = var2.set;
                    var1 = var1.bind(var2)(var4, var3);
case 54:
                    var1 = undefined;
                    return var1;
                }
            };
            var6 = var9.bind(var10)(var6);
            var9 = _closure1_slot36;
            var6 = var9.clear;
            var6 = var6.bind(var9)();
            var6 = _closure1_slot44;
            var6 = var6.bind(var1)(var8, var5);
            var6 = var7.forEach;
            var2 = function(arg1, arg2) {
                var4 = _closure1_slot36;
                var3 = var4.set;
                var2 = arg2;
                var1 = arg1;
                var1 = var3.bind(var4)(var2, var1);
                var1 = undefined;
                return var1;
            };
            var2 = var6.bind(var7)(var2);
            var2 = false;
            _closure1_slot29 = var2;
            var2 = new Array(0);
            var13 = var2;
            var12 = var5;
            var4 = arraySpread(var13, var12, var11);
            _closure1_slot30 = var2;
            return var1;
case 47:
            var1 = false;
            return var1;
        }
    };
    var _closure1_slot50 = var8;
    var4 = global;
    var12 = var4.Object;
    var10 = var12.defineProperty;
    var2 = {};
    var1 = true;
    var2['value'] = var1;
    var1 = '__esModule';
    var1 = var10.bind(var12)(var3, var1, var2);
    var1 = 0;
    var2 = var7[var1];
    var1 = undefined;
    var2 = var9.bind(var1)(var2);
    var _closure1_slot4 = var2;
    var2 = 1;
    var2 = var7[var2];
    var2 = var9.bind(var1)(var2);
    var _closure1_slot5 = var2;
    var2 = 2;
    var2 = var7[var2];
    var2 = var9.bind(var1)(var2);
    var _closure1_slot6 = var2;
    var2 = 3;
    var2 = var7[var2];
    var2 = var9.bind(var1)(var2);
    var _closure1_slot7 = var2;
    var2 = 4;
    var2 = var7[var2];
    var2 = var9.bind(var1)(var2);
    var _closure1_slot8 = var2;
    var2 = 5;
    var2 = var7[var2];
    var2 = var6.bind(var1)(var2);
    var2 = var2.set;
    var _closure1_slot9 = var2;
    var2 = 6;
    var2 = var7[var2];
    var2 = var9.bind(var1)(var2);
    var _closure1_slot10 = var2;
    var2 = 7;
    var2 = var7[var2];
    var2 = var6.bind(var1)(var2);
    var2 = var2.isRoleEqual;
    var _closure1_slot11 = var2;
    var2 = 8;
    var2 = var7[var2];
    var2 = var9.bind(var1)(var2);
    var _closure1_slot12 = var2;
    var2 = 9;
    var2 = var7[var2];
    var2 = var9.bind(var1)(var2);
    var _closure1_slot13 = var2;
    var2 = 10;
    var2 = var7[var2];
    var2 = var6.bind(var1)(var2);
    var13 = var2.GuildSettingsRoleEditSections;
    var _closure1_slot14 = var13;
    var2 = 11;
    var2 = var7[var2];
    var2 = var6.bind(var1)(var2);
    var10 = var2.GuildSettingsSections;
    var _closure1_slot15 = var10;
    var10 = var2.FormStates;
    var _closure1_slot16 = var10;
    var12 = var2.DEFAULT_ROLE_COLOR;
    var _closure1_slot17 = var12;
    var2 = var2.GuildFeatures;
    var _closure1_slot18 = var2;
    var2 = 12;
    var2 = var7[var2];
    var2 = var6.bind(var1)(var2);
    var12 = var2.DEFAULT_GRADIENT_ROLE_COLORS;
    var _closure1_slot19 = var12;
    var2 = var2.HOLOGRAPHIC_ROLE_COLORS;
    var _closure1_slot20 = var2;
    var2 = {};
    var12 = 'solid';
    var2['SOLID'] = var12;
    var12 = 'gradient';
    var2['GRADIENT'] = var12;
    var12 = 'holographic';
    var2['HOLOGRAPHIC'] = var12;
    var _closure1_slot24 = var2;
    var12 = {};
    var15 = var13.DISPLAY;
    var14 = ['name', 'hoist', 'mentionable', 'color', 'colors', 'colorString', 'colorStrings'];
    var12[14] = var14;
    var15 = var13.PERMISSIONS;
    var14 = ['permissions'];
    var12[14] = var14;
    var15 = var13.MEMBERS;
    var14 = new Array(0);
    var12[14] = var14;
    var14 = var13.VERIFICATIONS;
    var13 = new Array(0);
    var12[13] = var13;
    var _closure1_slot25 = var12;
    var12 = var4.Set;
    var13 = var12.prototype;
    var13 = Object.create(var13, {constructor: {value: var12}});
    var19 = var13;
    var12 = new var19[var12](var18);
    var12 = var12 instanceof Object ? var12 : var13;
    var _closure1_slot26 = var12;
    var10 = var10.CLOSED;
    var _closure1_slot27 = var10;
    var10 = false;
    var _closure1_slot28 = var10;
    var _closure1_slot29 = var10;
    var12 = new Array(0);
    var _closure1_slot30 = var12;
    var12 = new Array(0);
    var _closure1_slot31 = var12;
    var _closure1_slot32 = var10;
    var10 = var4.Set;
    var12 = var10.prototype;
    var12 = Object.create(var12, {constructor: {value: var10}});
    var19 = var12;
    var10 = new var19[var10](var18);
    var10 = var10 instanceof Object ? var10 : var12;
    var _closure1_slot33 = var10;
    var10 = var4.Map;
    var12 = var10.prototype;
    var12 = Object.create(var12, {constructor: {value: var10}});
    var19 = var12;
    var10 = new var19[var10](var18);
    var10 = var10 instanceof Object ? var10 : var12;
    var _closure1_slot34 = var10;
    var10 = var4.Map;
    var12 = var10.prototype;
    var12 = Object.create(var12, {constructor: {value: var10}});
    var19 = var12;
    var10 = new var19[var10](var18);
    var10 = var10 instanceof Object ? var10 : var12;
    var _closure1_slot35 = var10;
    var4 = var4.Map;
    var10 = var4.prototype;
    var10 = Object.create(var10, {constructor: {value: var4}});
    var19 = var10;
    var4 = new var19[var4](var18);
    var4 = var4 instanceof Object ? var4 : var10;
    var _closure1_slot36 = var4;
    var4 = 20;
    var4 = var7[var4];
    var13 = var9.bind(var1)(var4);
    var12 = var13.debounce;
    var10 = function() {
        _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
case 0:
            var1 = false;
            var _closure2_slot0 = var1;
            var3 = _closure1_slot29;
            if(!var3) { _fun0015_ip = 56; continue _fun0015 }
case 57:
            var4 = _closure1_slot42;
            var3 = undefined;
            var3 = var4.bind(var3)();
            var4 = var3.length;
            var3 = 0;
            var3 = var4 > var3;
            _closure1_slot29 = var3;
            if(var3) { _fun0015_ip = 56; continue _fun0015 }
case 58:
            var3 = true;
            _closure2_slot0 = var3;
case 56:
            var8 = _closure1_slot26;
            var6 = new Array(0);
            var9 = var6;
            var7 = 0;
            var3 = arraySpread(var9, var8, var7);
            var5 = var6.forEach;
            var3 = function(arg1) {
                _fun0016: for(var _fun0016_ip = 0; ; ) switch(_fun0016_ip) {
case 0:
                    var3 = arg1;
                    var6 = _closure1_slot11;
                    var4 = _closure1_slot48;
                    var1 = undefined;
                    var5 = var4.bind(var1)(var3);
                    var4 = _closure1_slot49;
                    var4 = var4.bind(var1)(var3);
                    var4 = var6.bind(var1)(var5, var4);
                    if(!var4) { _fun0016_ip = 59; continue _fun0016 }
case 60:
                    var2 = _closure1_slot40;
                    var2 = var2.bind(var1)(var3);
                    var2 = true;
                    _closure2_slot0 = var2;
case 59:
                    return var1;
                }
            };
            var3 = var5.bind(var6)(var3);
            var8 = _closure1_slot33;
            var5 = new Array(0);
            var9 = var5;
            var3 = arraySpread(var9, var8, var7);
            var4 = var5.forEach;
            var3 = function(arg1) {
                _fun0017: for(var _fun0017_ip = 0; ; ) switch(_fun0017_ip) {
case 0:
                    var3 = arg1;
                    var5 = _closure1_slot1;
                    var4 = _closure1_slot3;
                    var1 = 20;
                    var4 = var4[var1];
                    var1 = undefined;
                    var7 = var5.bind(var1)(var4);
                    var6 = var7.isEqual;
                    var5 = _closure1_slot35;
                    var4 = var5.get;
                    var5 = var4.bind(var5)(var3);
                    var8 = _closure1_slot34;
                    var4 = var8.get;
                    var4 = var4.bind(var8)(var3);
                    var4 = var6.bind(var7)(var5, var4);
                    if(!var4) { _fun0017_ip = 61; continue _fun0017 }
case 24:
                    var2 = _closure1_slot41;
                    var2 = var2.bind(var1)(var3);
                    var2 = true;
                    _closure2_slot0 = var2;
case 61:
                    return var1;
                }
            };
            var3 = var4.bind(var5)(var3);
            var2 = _closure2_slot0;
            if(!var2) { _fun0015_ip = 62; continue _fun0015 }
case 63:
            var2 = _closure1_slot38;
            var1 = var2.emitChange;
            var1 = var1.bind(var2)();
case 62:
            var1 = undefined;
            return var1;
        }
    };
    var4 = 500;
    var4 = var12.bind(var13)(var10, var4);
    var _closure1_slot37 = var4;
    var4 = 21;
    var4 = var7[var4];
    var4 = var9.bind(var1)(var4);
    var10 = var4.Store;
    var4 = function(arg1) {
        var4 = function GuildSettingsRolesStore() {
            _fun0018: for(var _fun0018_ip = 0; ; ) switch(_fun0018_ip) {
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
                var1 = _closure1_slot39;
                var1 = var1.bind(var3)();
                if(var1) { _fun0018_ip = 64; continue _fun0018 }
case 65:
                var7 = var9.apply;
                var5 = arguments;
                var1 = var5;
                var1 = var7.bind(var9)(var4, var1);
                _fun0018_ip = 66; continue _fun0018;
case 64:
                var7 = global;
                var8 = var7.Reflect;
                var7 = var8.construct;
                var6 = _closure1_slot7;
                var6 = var6.bind(var3)(var4);
                var6 = var6.constructor;
                var5 = arguments;
                var1 = var7.bind(var8)(var9, var5, var6);
case 66:
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
            var5 = this;
            var4 = var5.waitFor;
            var3 = _closure1_slot13;
            var2 = _closure1_slot10;
            var1 = _closure1_slot12;
            var1 = var4.bind(var5)(var3, var2, var1);
            var1 = undefined;
            return var1;
        };
        var5['value'] = var1;
        var1 = new Array(17);
        var1[0] = var5;
        var5 = {};
        var7 = 'hasChanges';
        var5['key'] = var7;
        var7 = function value() {
            _fun0019: for(var _fun0019_ip = 0; ; ) switch(_fun0019_ip) {
case 0:
                var1 = _closure1_slot28;
                if(var1) { _fun0019_ip = 67; continue _fun0019 }
case 68:
                var1 = _closure1_slot29;
case 67:
                if(var1) { _fun0019_ip = 69; continue _fun0019 }
case 70:
                var1 = _closure1_slot32;
case 69:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[1] = var5;
        var5 = {};
        var7 = 'hasSectionChanges';
        var5['key'] = var7;
        var7 = function value(arg1, arg2) {
            _fun0020: for(var _fun0020_ip = 0; ; ) switch(_fun0020_ip) {
case 0:
                var3 = arg1;
                var4 = arg2;
                var2 = _closure1_slot14;
                var2 = var2.VERIFICATIONS;
                if(!(var4 !== var2)) { _fun0020_ip = 71; continue _fun0020 }
case 10:
                var2 = _closure1_slot45;
                var7 = undefined;
                var4 = var2.bind(var7)(var3, var4);
                var2 = null;
                var2 = var2 != var4;
                if(!var2) { _fun0020_ip = 72; continue _fun0020 }
case 54:
                var6 = _closure1_slot11;
                var9 = _closure1_slot1;
                var10 = _closure1_slot3;
                var8 = 20;
                var5 = var10[var8];
                var13 = var9.bind(var7)(var5);
                var12 = var13.pick;
                var11 = var4.role;
                var5 = var4.fields;
                var5 = var12.bind(var13)(var11, var5);
                var8 = var10[var8];
                var10 = var9.bind(var7)(var8);
                var9 = var10.pick;
                var8 = var4.original;
                var4 = var4.fields;
                var4 = var9.bind(var10)(var8, var4);
                var4 = var6.bind(var7)(var5, var4);
                var2 = !var4;
case 72:
                return var2;
case 71:
                var2 = _closure1_slot33;
                var1 = var2.has;
                var1 = var1.bind(var2)(var3);
                return var1;
            }
        };
        var5['value'] = var7;
        var1[2] = var5;
        var5 = {};
        var7 = 'getRoleStyleData';
        var5['key'] = var7;
        var7 = function value(arg1) {
            var3 = _closure1_slot36;
            var2 = var3.get;
            var1 = arg1;
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var5['value'] = var7;
        var1[3] = var5;
        var5 = {};
        var7 = 'errorMessage';
        var5['key'] = var7;
        var7 = function get() {
            var1 = _closure1_slot23;
            return var1;
        };
        var5['get'] = var7;
        var1[4] = var5;
        var5 = {};
        var7 = 'hasSortChanges';
        var5['key'] = var7;
        var7 = function get() {
            var1 = _closure1_slot29;
            return var1;
        };
        var5['get'] = var7;
        var1[5] = var5;
        var5 = {};
        var7 = 'hasRoleConfigurationChanges';
        var5['key'] = var7;
        var7 = function get() {
            var1 = _closure1_slot32;
            return var1;
        };
        var5['get'] = var7;
        var1[6] = var5;
        var5 = {};
        var7 = 'guild';
        var5['key'] = var7;
        var7 = function get() {
            var1 = _closure1_slot21;
            return var1;
        };
        var5['get'] = var7;
        var1[7] = var5;
        var5 = {};
        var7 = 'editedRoleIds';
        var5['key'] = var7;
        var7 = function get() {
            var1 = global;
            var3 = var1.Array;
            var2 = var3.from;
            var1 = _closure1_slot26;
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var5['get'] = var7;
        var1[8] = var5;
        var5 = {};
        var7 = 'editedRoleIdsForConfigurations';
        var5['key'] = var7;
        var7 = function get() {
            var1 = _closure1_slot33;
            return var1;
        };
        var5['get'] = var7;
        var1[9] = var5;
        var5 = {};
        var7 = 'roles';
        var5['key'] = var7;
        var7 = function get() {
            var1 = _closure1_slot30;
            return var1;
        };
        var5['get'] = var7;
        var1[10] = var5;
        var5 = {};
        var7 = 'formState';
        var5['key'] = var7;
        var7 = function get() {
            var1 = _closure1_slot27;
            return var1;
        };
        var5['get'] = var7;
        var1[11] = var5;
        var5 = {};
        var7 = 'getSortDeltas';
        var5['key'] = var7;
        var7 = function value() {
            var2 = _closure1_slot42;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        };
        var5['value'] = var7;
        var1[12] = var5;
        var5 = {};
        var7 = 'showNotice';
        var5['key'] = var7;
        var7 = function value() {
            var2 = this;
            var1 = var2.hasChanges;
            var1 = var1.bind(var2)();
            return var1;
        };
        var5['value'] = var7;
        var1[13] = var5;
        var5 = {};
        var7 = 'getRole';
        var5['key'] = var7;
        var7 = function value(arg1) {
            var3 = _closure1_slot48;
            var2 = undefined;
            var1 = arg1;
            var1 = var3.bind(var2)(var1);
            return var1;
        };
        var5['value'] = var7;
        var1[14] = var5;
        var5 = {};
        var7 = 'getPermissionSearchQuery';
        var5['key'] = var7;
        var7 = function value() {
            var1 = _closure1_slot22;
            return var1;
        };
        var5['value'] = var7;
        var1[15] = var5;
        var5 = {};
        var7 = 'getEditedRoleConnectionConfigurationsMap';
        var5['key'] = var7;
        var6 = function value() {
            var1 = _closure1_slot35;
            return var1;
        };
        var5['value'] = var6;
        var1[16] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var10 = var4.bind(var1)(var10);
    var4 = 'GuildSettingsRolesStore';
    var10['displayName'] = var4;
    var4 = 22;
    var4 = var7[var4];
    var18 = var9.bind(var1)(var4);
    var4 = {};
    var12 = function GUILD_SETTINGS_ROLES_INIT() {
        var2 = _closure1_slot43;
        var1 = undefined;
        var2 = var2.bind(var1)();
        return var1;
    };
    var4['GUILD_SETTINGS_ROLES_INIT'] = var12;
    var4['GUILD_SETTINGS_INIT'] = var11;
    var4['GUILD_SETTINGS_SET_SECTION'] = var11;
    var11 = function handleSortUpdate(arg1) {
        _fun0021: for(var _fun0021_ip = 0; ; ) switch(_fun0021_ip) {
case 0:
            var1 = arg1;
            var4 = var1.roles;
            var3 = _closure1_slot30;
            var1 = null;
            if(!(var1 != var3)) { _fun0021_ip = 44; continue _fun0021 }
case 13:
            var3 = var4.length;
            var1 = _closure1_slot30;
            var1 = var1.length;
            if(!(var3 === var1)) { _fun0021_ip = 73; continue _fun0021 }
case 44:
            var3 = var4.map;
            var1 = function(arg1) {
                var3 = _closure1_slot48;
                var2 = undefined;
                var1 = arg1;
                var1 = var3.bind(var2)(var1);
                return var1;
            };
            var5 = var3.bind(var4)(var1);
            var4 = var5.filter;
            var6 = _closure1_slot0;
            var3 = _closure1_slot3;
            var1 = 15;
            var3 = var3[var1];
            var1 = undefined;
            var3 = var6.bind(var1)(var3);
            var3 = var3.isNotNullish;
            var3 = var4.bind(var5)(var3);
            _closure1_slot30 = var3;
            var3 = true;
            _closure1_slot29 = var3;
            var2 = _closure1_slot37;
            var2 = var2.bind(var1)();
            return var1;
case 73:
            var1 = false;
            return var1;
        }
    };
    var4['GUILD_SETTINGS_ROLES_SORT_UPDATE'] = var11;
    var11 = function handleUpdatePermissions(arg1) {
        _fun0022: for(var _fun0022_ip = 0; ; ) switch(_fun0022_ip) {
case 0:
            var1 = arg1;
            var2 = var1.id;
            var9 = var1.flag;
            var5 = var1.allow;
            var1 = _closure1_slot48;
            var4 = undefined;
            var3 = var1.bind(var4)(var2);
            var1 = null;
            if(!(var1 != var3)) { _fun0022_ip = 74; continue _fun0022 }
case 44:
            var8 = var3.permissions;
            var2 = _closure1_slot47;
            var1 = {};
            var7 = _closure1_slot2;
            var10 = _closure1_slot3;
            var6 = 16;
            var6 = var10[var6];
            var7 = var7.bind(var4)(var6);
            if(var5) { _fun0022_ip = 61; continue _fun0022 }
case 75:
            var5 = var7.remove;
            var5 = var5.bind(var7)(var8, var9);
            _fun0022_ip = 76; continue _fun0022;
case 61:
            var6 = var7.add;
            var5 = var6.bind(var7)(var8, var9);
case 76:
            var1['permissions'] = var5;
            var1 = var2.bind(var4)(var3, var1);
            return var1;
case 74:
            var1 = false;
            return var1;
        }
    };
    var4['GUILD_SETTINGS_ROLES_UPDATE_PERMISSIONS'] = var11;
    var11 = function handleUpdatePermissionSet(arg1) {
        _fun0023: for(var _fun0023_ip = 0; ; ) switch(_fun0023_ip) {
case 0:
            var1 = arg1;
            var3 = var1.id;
            var6 = var1.permissions;
            var1 = _closure1_slot48;
            var5 = undefined;
            var4 = var1.bind(var5)(var3);
            var1 = null;
            var1 = var1 != var4;
            if(!var1) { _fun0023_ip = 77; continue _fun0023 }
case 78:
            var3 = _closure1_slot47;
            var2 = {};
            var2['permissions'] = var6;
            var1 = var3.bind(var5)(var4, var2);
case 77:
            return var1;
        }
    };
    var4['GUILD_SETTINGS_ROLES_UPDATE_PERMISSION_SET'] = var11;
    var11 = function handleClearRolePermissions(arg1) {
        _fun0024: for(var _fun0024_ip = 0; ; ) switch(_fun0024_ip) {
case 0:
            var1 = arg1;
            var2 = var1.id;
            var1 = _closure1_slot48;
            var5 = undefined;
            var4 = var1.bind(var5)(var2);
            var1 = null;
            var1 = var1 != var4;
            if(!var1) { _fun0024_ip = 5; continue _fun0024 }
case 79:
            var3 = _closure1_slot47;
            var2 = {};
            var7 = _closure1_slot2;
            var8 = _closure1_slot3;
            var6 = 17;
            var6 = var8[var6];
            var6 = var7.bind(var5)(var6);
            var6 = var6.NONE;
            var2['permissions'] = var6;
            var1 = var3.bind(var5)(var4, var2);
case 5:
            return var1;
        }
    };
    var4['GUILD_SETTINGS_ROLES_CLEAR_PERMISSIONS'] = var11;
    var11 = function handleUpdateName(arg1) {
        _fun0025: for(var _fun0025_ip = 0; ; ) switch(_fun0025_ip) {
case 0:
            var1 = arg1;
            var3 = var1.id;
            var6 = var1.name;
            var1 = _closure1_slot48;
            var5 = undefined;
            var4 = var1.bind(var5)(var3);
            var1 = null;
            var1 = var1 != var4;
            if(!var1) { _fun0025_ip = 56; continue _fun0025 }
case 14:
            var3 = _closure1_slot47;
            var2 = {};
            var2['name'] = var6;
            var1 = var3.bind(var5)(var4, var2);
case 56:
            return var1;
        }
    };
    var4['GUILD_SETTINGS_ROLES_UPDATE_NAME'] = var11;
    var11 = function handleUpdateDescription(arg1) {
        _fun0026: for(var _fun0026_ip = 0; ; ) switch(_fun0026_ip) {
case 0:
            var1 = arg1;
            var3 = var1.id;
            var6 = var1.description;
            var1 = _closure1_slot48;
            var5 = undefined;
            var4 = var1.bind(var5)(var3);
            var1 = null;
            var1 = var1 != var4;
            if(!var1) { _fun0026_ip = 56; continue _fun0026 }
case 14:
            var3 = _closure1_slot47;
            var2 = {};
            var2['description'] = var6;
            var1 = var3.bind(var5)(var4, var2);
case 56:
            return var1;
        }
    };
    var4['GUILD_SETTINGS_ROLES_UPDATE_DESCRIPTION'] = var11;
    var11 = function handleUpdateColor(arg1) {
        _fun0027: for(var _fun0027_ip = 0; ; ) switch(_fun0027_ip) {
case 0:
            var1 = arg1;
            var11 = var1.id;
            var9 = var1.color;
            var6 = null;
            var1 = 0;
            var8 = null;
            if(!(var1 !== var9)) { _fun0027_ip = 80; continue _fun0027 }
case 10:
            var3 = _closure1_slot0;
            var2 = _closure1_slot3;
            var1 = 18;
            var2 = var2[var1];
            var1 = undefined;
            var2 = var3.bind(var1)(var2);
            var1 = var2.int2hex;
            var8 = var1.bind(var2)(var9);
case 80:
            var1 = _closure1_slot48;
            var5 = undefined;
            var4 = var1.bind(var5)(var11);
            if(!(var6 != var4)) { _fun0027_ip = 81; continue _fun0027 }
case 26:
            var3 = _closure1_slot36;
            var1 = var3.get;
            var12 = var1.bind(var3)(var11);
            var1 = var6 != var12;
            if(!var1) { _fun0027_ip = 82; continue _fun0027 }
case 83:
            var3 = _closure1_slot24;
            var3 = var3.SOLID;
            var12['currentStyle'] = var3;
            var10 = var12.styleColors;
            var3 = _closure1_slot24;
            var7 = var3.SOLID;
            var3 = {'primary_color': null, 'secondary_color': null, 'tertiary_color': null};
            var3['primary_color'] = var9;
            var10[var7] = var3;
            var10 = _closure1_slot36;
            var7 = var10.set;
            var3 = {};
            var15 = var3;
            var14 = var12;
            var12 = copyDataProperties(var15, var14);
            var3 = var7.bind(var10)(var11, var3);
            var3 = _closure1_slot47;
            var2 = {};
            var2['color'] = var9;
            var2['colorString'] = var8;
            var7 = {'primary_color': null, 'secondary_color': null, 'tertiary_color': null};
            var7['primary_color'] = var9;
            var2['colors'] = var7;
            var7 = var6 != var8;
            var6 = null;
            if(!var7) { _fun0027_ip = 84; continue _fun0027 }
case 85:
            var7 = {'primaryColor': null, 'secondaryColor': null, 'tertiaryColor': null};
            var7['primaryColor'] = var8;
            var6 = var7;
case 84:
            var2['colorStrings'] = var6;
            var1 = var3.bind(var5)(var4, var2);
case 82:
            return var1;
case 81:
            var1 = false;
            return var1;
        }
    };
    var4['GUILD_SETTINGS_ROLES_UPDATE_COLOR'] = var11;
    var11 = function handleUpdateColors(arg1) {
        _fun0028: for(var _fun0028_ip = 0; ; ) switch(_fun0028_ip) {
case 0:
            var1 = arg1;
            var10 = var1.id;
            var7 = var1.colors;
            var3 = var1.currentStyle;
            var1 = _closure1_slot48;
            var5 = undefined;
            var4 = var1.bind(var5)(var10);
            var1 = null;
            if(!(var1 != var4)) { _fun0028_ip = 86; continue _fun0028 }
case 87:
            var8 = _closure1_slot0;
            var9 = _closure1_slot3;
            var6 = 19;
            var6 = var9[var6];
            var8 = var8.bind(var5)(var6);
            var6 = var8.extractColorStringsFromServerColors;
            var6 = var6.bind(var8)(var7);
            var9 = _closure1_slot36;
            var8 = var9.get;
            var11 = var8.bind(var9)(var10);
            var1 = var1 != var11;
            if(!var1) { _fun0028_ip = 88; continue _fun0028 }
case 40:
            var8 = var11.styleColors;
            var8[var3] = var7;
            var11['currentStyle'] = var3;
            var9 = _closure1_slot36;
            var8 = var9.set;
            var3 = {};
            var13 = var3;
            var12 = var11;
            var11 = copyDataProperties(var13, var12);
            var3 = var8.bind(var9)(var10, var3);
            var3 = _closure1_slot47;
            var2 = {};
            var8 = var7.primary_color;
            var2['color'] = var8;
            var2['colors'] = var7;
            var7 = var6.primaryColor;
            var2['colorString'] = var7;
            var2['colorStrings'] = var6;
            var1 = var3.bind(var5)(var4, var2);
case 88:
            return var1;
case 86:
            var1 = false;
            return var1;
        }
    };
    var4['GUILD_SETTINGS_ROLES_UPDATE_COLORS'] = var11;
    var11 = function handleUpdateSettings(arg1) {
        _fun0029: for(var _fun0029_ip = 0; ; ) switch(_fun0029_ip) {
case 0:
            var1 = arg1;
            var3 = var1.id;
            var7 = var1.hoist;
            var6 = var1.mentionable;
            var1 = _closure1_slot48;
            var5 = undefined;
            var4 = var1.bind(var5)(var3);
            var1 = null;
            var1 = var1 != var4;
            if(!var1) { _fun0029_ip = 89; continue _fun0029 }
case 90:
            var3 = _closure1_slot47;
            var2 = {};
            var2['hoist'] = var7;
            var2['mentionable'] = var6;
            var1 = var3.bind(var5)(var4, var2);
case 89:
            return var1;
        }
    };
    var4['GUILD_SETTINGS_ROLES_UPDATE_SETTINGS'] = var11;
    var11 = function handleUpdateRoleIcon(arg1) {
        _fun0030: for(var _fun0030_ip = 0; ; ) switch(_fun0030_ip) {
case 0:
            var1 = arg1;
            var3 = var1.id;
            var7 = var1.icon;
            var6 = var1.unicodeEmoji;
            var1 = _closure1_slot48;
            var5 = undefined;
            var4 = var1.bind(var5)(var3);
            var1 = null;
            var1 = var1 != var4;
            if(!var1) { _fun0030_ip = 43; continue _fun0030 }
case 87:
            var3 = _closure1_slot47;
            var2 = {};
            var2['icon'] = var7;
            var2['unicodeEmoji'] = var6;
            var1 = var3.bind(var5)(var4, var2);
case 43:
            return var1;
        }
    };
    var4['GUILD_SETTINGS_ROLES_UPDATE_ROLE_ICON'] = var11;
    var11 = function handleDiscardSectionChanges(arg1) {
        _fun0031: for(var _fun0031_ip = 0; ; ) switch(_fun0031_ip) {
case 0:
            var1 = arg1;
            var5 = var1.id;
            var4 = var1.section;
            var3 = _closure1_slot45;
            var1 = undefined;
            var4 = var3.bind(var1)(var5, var4);
            var3 = null;
            if(!(var3 != var4)) { _fun0031_ip = 91; continue _fun0031 }
case 92:
            var8 = var4.fields;
            var7 = var4.role;
            var5 = var4.original;
            var6 = _closure1_slot47;
            var9 = _closure1_slot1;
            var10 = _closure1_slot3;
            var4 = 20;
            var4 = var10[var4];
            var9 = var9.bind(var1)(var4);
            var4 = var9.pick;
            var4 = var4.bind(var9)(var5, var8);
            var4 = var6.bind(var1)(var7, var4);
            var6 = var8.includes;
            var4 = 'color';
            var4 = var6.bind(var8)(var4);
            if(var4) { _fun0031_ip = 8; continue _fun0031 }
case 93:
            var7 = var8.includes;
            var6 = 'colors';
            var4 = var7.bind(var8)(var6);
case 8:
            if(!var4) { _fun0031_ip = 94; continue _fun0031 }
case 31:
            var4 = _closure1_slot44;
            var2 = _closure1_slot21;
            var6 = var3 == var2;
            var3 = undefined;
            if(var6) { _fun0031_ip = 95; continue _fun0031 }
case 19:
            var3 = var2.id;
case 95:
            var2 = new Array(1);
            var2[0] = var5;
            var2 = var4.bind(var1)(var3, var2);
case 94:
            return var1;
case 91:
            var1 = false;
            return var1;
        }
    };
    var4['GUILD_SETTINGS_ROLES_DISCARD_SECTION_CHANGES'] = var11;
    var11 = function handleDiscardConnectionsChanges(arg1) {
        _fun0032: for(var _fun0032_ip = 0; ; ) switch(_fun0032_ip) {
case 0:
            var1 = arg1;
            var3 = var1.id;
            var4 = _closure1_slot34;
            var2 = var4.get;
            var7 = var2.bind(var4)(var3);
            var2 = null;
            if(!(var2 != var7)) { _fun0032_ip = 51; continue _fun0032 }
case 79:
            var5 = _closure1_slot35;
            var4 = var5.set;
            var2 = new Array(0);
            var8 = 0;
            var10 = var2;
            var9 = var7;
            var6 = arraySpread(var10, var9, var8);
            var2 = var4.bind(var5)(var3, var2);
            _fun0032_ip = 96; continue _fun0032;
case 51:
            var4 = _closure1_slot35;
            var2 = var4.delete;
            var2 = var2.bind(var4)(var3);
case 96:
            var2 = _closure1_slot41;
            var1 = undefined;
            var2 = var2.bind(var1)(var3);
            return var1;
        }
    };
    var4['GUILD_SETTINGS_ROLES_DISCARD_CONNECTIONS_CHANGES'] = var11;
    var11 = function handleCommitSectionChanges(arg1) {
        _fun0033: for(var _fun0033_ip = 0; ; ) switch(_fun0033_ip) {
case 0:
            var1 = arg1;
            var3 = var1.id;
            var _closure2_slot0 = var3;
            var6 = var1.section;
            var1 = undefined;
            var _closure2_slot1 = var1;
            var5 = _closure1_slot45;
            var7 = var5.bind(var1)(var3, var6);
            var5 = null;
            if(!(var5 != var7)) { _fun0033_ip = 97; continue _fun0033 }
case 98:
            var9 = var7.fields;
            var6 = var7.role;
            var5 = {};
            var11 = var7.original;
            var12 = var5;
            var7 = copyDataProperties(var12, var11);
            var8 = _closure1_slot1;
            var10 = _closure1_slot3;
            var7 = 20;
            var7 = var10[var7];
            var8 = var8.bind(var1)(var7);
            var7 = var8.pick;
            var11 = var7.bind(var8)(var6, var9);
            var12 = var5;
            var7 = copyDataProperties(var12, var11);
            _closure2_slot1 = var5;
            var8 = _closure1_slot31;
            var7 = var8.map;
            var4 = function(arg1) {
                _fun0034: for(var _fun0034_ip = 0; ; ) switch(_fun0034_ip) {
case 0:
                    var1 = arg1;
                    var4 = var1.id;
                    var3 = _closure2_slot0;
                    if(!(var4 === var3)) { _fun0034_ip = 10; continue _fun0034 }
case 49:
                    var1 = _closure2_slot1;
case 10:
                    return var1;
                }
            };
            var4 = var7.bind(var8)(var4);
            _closure1_slot31 = var4;
            var4 = _closure1_slot11;
            var4 = var4.bind(var1)(var6, var5);
            if(!var4) { _fun0033_ip = 99; continue _fun0033 }
case 100:
            var2 = _closure1_slot40;
            var2 = var2.bind(var1)(var3);
case 99:
            return var1;
case 97:
            var1 = false;
            return var1;
        }
    };
    var4['GUILD_SETTINGS_ROLES_COMMIT_SECTION_CHANGES'] = var11;
    var11 = function handleInsertRole(arg1) {
        _fun0035: for(var _fun0035_ip = 0; ; ) switch(_fun0035_ip) {
case 0:
            var1 = arg1;
            var4 = var1.role;
            var2 = var1.searchQuery;
            var _closure1_slot22 = var2;
            var5 = null;
            if(!(var5 != var4)) { _fun0035_ip = 101; continue _fun0035 }
case 102:
            var6 = _closure1_slot48;
            var3 = var4.id;
            var2 = undefined;
            var3 = var6.bind(var2)(var3);
            if(!(var5 != var3)) { _fun0035_ip = 103; continue _fun0035 }
case 12:
            var3 = _closure1_slot47;
            var3 = var3.bind(var2)(var4, var4);
            _fun0035_ip = 101; continue _fun0035;
case 103:
            var8 = _closure1_slot30;
            var3 = new Array(1);
            var7 = 0;
            var9 = var3;
            var5 = arraySpread(var9, var8, var7);
            var3[4] = var4;
            var4 = 1;
            var4 = var5 + var4;
            _closure1_slot30 = var3;
            var1 = _closure1_slot37;
            var1 = var1.bind(var2)();
case 101:
            var1 = undefined;
            return var1;
        }
    };
    var4['GUILD_SETTINGS_ROLE_SELECT'] = var11;
    var11 = function handleDuplicateSuccess(arg1) {
        _fun0036: for(var _fun0036_ip = 0; ; ) switch(_fun0036_ip) {
case 0:
            var1 = arg1;
            var5 = var1.role;
            var6 = var1.roles;
            var7 = global;
            var8 = var7.Map;
            var9 = _closure1_slot30;
            var4 = var9.map;
            var1 = function(arg1) {
                var2 = arg1;
                var3 = var2.id;
                var1 = new Array(2);
                var1[0] = var3;
                var1[1] = var2;
                return var1;
            };
            var11 = var4.bind(var9)(var1);
            var4 = var8.prototype;
            var4 = Object.create(var4, {constructor: {value: var8}});
            var12 = var4;
            var1 = new var12[var8](var11, var10);
            var8 = var1 instanceof Object ? var1 : var4;
            var4 = var8.set;
            var1 = var5.id;
            var1 = var4.bind(var8)(var1, var5);
            var4 = _closure1_slot46;
            var1 = undefined;
            var8 = var4.bind(var1)(var8, var6);
            _closure1_slot30 = var8;
            var8 = var7.Map;
            var9 = _closure1_slot31;
            var7 = var9.map;
            var3 = function(arg1) {
                var2 = arg1;
                var3 = var2.id;
                var1 = new Array(2);
                var1[0] = var3;
                var1[1] = var2;
                return var1;
            };
            var11 = var7.bind(var9)(var3);
            var7 = var8.prototype;
            var7 = Object.create(var7, {constructor: {value: var8}});
            var12 = var7;
            var3 = new var12[var8](var11, var10);
            var3 = var3 instanceof Object ? var3 : var7;
            var8 = var3.set;
            var7 = var5.id;
            var7 = var8.bind(var3)(var7, var5);
            var3 = var4.bind(var1)(var3, var6);
            _closure1_slot31 = var3;
            var4 = _closure1_slot44;
            var2 = _closure1_slot21;
            var3 = null;
            var6 = var3 == var2;
            var3 = undefined;
            if(var6) { _fun0036_ip = 104; continue _fun0036 }
case 105:
            var3 = var2.id;
case 104:
            var2 = new Array(1);
            var2[0] = var5;
            var2 = var4.bind(var1)(var3, var2);
            return var1;
        }
    };
    var4['GUILD_SETTINGS_ROLES_DUPLICATE_SUCCESS'] = var11;
    var11 = function handleRoleStyleUpdate(arg1) {
        _fun0037: for(var _fun0037_ip = 0; ; ) switch(_fun0037_ip) {
case 0:
            var1 = arg1;
            var10 = var1.id;
            var5 = var1.currentStyle;
            var2 = _closure1_slot48;
            var4 = undefined;
            var3 = var2.bind(var4)(var10);
            var7 = null;
            if(!(var7 != var3)) { _fun0037_ip = 106; continue _fun0037 }
case 78:
            var6 = _closure1_slot36;
            var2 = var6.get;
            var2 = var2.bind(var6)(var10);
            if(!(var7 != var2)) { _fun0037_ip = 107; continue _fun0037 }
case 108:
            var9 = _closure1_slot36;
            var8 = var9.set;
            var6 = {};
            var6['currentStyle'] = var5;
            var11 = var2.styleColors;
            var6['styleColors'] = var11;
            var6 = var8.bind(var9)(var10, var6);
            var2 = var2.styleColors;
            var6 = var2[var5];
            var5 = _closure1_slot0;
            var8 = _closure1_slot3;
            var2 = 19;
            var2 = var8[var2];
            var5 = var5.bind(var4)(var2);
            var2 = var5.extractColorStringsFromServerColors;
            var5 = var2.bind(var5)(var6);
            var2 = _closure1_slot47;
            var1 = {};
            var8 = var6.primary_color;
            var9 = var7 != var8;
            var7 = undefined;
            if(!var9) { _fun0037_ip = 109; continue _fun0037 }
case 100:
            var7 = var8;
case 109:
            var1['color'] = var7;
            var1['colors'] = var6;
            var6 = var5.primaryColor;
            var1['colorString'] = var6;
            var1['colorStrings'] = var5;
            var1 = var2.bind(var4)(var3, var1);
            return var1;
case 107:
            var1 = false;
            return var1;
case 106:
            var1 = false;
            return var1;
        }
    };
    var4['GUILD_SETTINGS_ROLES_ROLE_STYLE_UPDATE'] = var11;
    var11 = function handleFetchRoleConnectionConfigurations(arg1) {
        _fun0038: for(var _fun0038_ip = 0; ; ) switch(_fun0038_ip) {
case 0:
            var1 = arg1;
            var4 = var1.roleId;
            var7 = var1.roleConnectionConfigurations;
            var3 = _closure1_slot48;
            var1 = undefined;
            var3 = var3.bind(var1)(var4);
            var4 = null;
            if(!(var4 != var3)) { _fun0038_ip = 110; continue _fun0038 }
case 92:
            var6 = _closure1_slot34;
            var5 = var6.get;
            var4 = var3.id;
            var6 = var5.bind(var6)(var4);
            var5 = _closure1_slot1;
            var8 = _closure1_slot3;
            var4 = 20;
            var4 = var8[var4];
            var5 = var5.bind(var1)(var4);
            var4 = var5.isEqual;
            var4 = var4.bind(var5)(var6, var7);
            if(var4) { _fun0038_ip = 109; continue _fun0038 }
case 42:
            var6 = _closure1_slot35;
            var5 = var6.set;
            var4 = var3.id;
            var4 = var5.bind(var6)(var4, var7);
            var6 = _closure1_slot34;
            var5 = var6.set;
            var4 = var3.id;
            var4 = var5.bind(var6)(var4, var7);
            var4 = _closure1_slot41;
            var3 = var3.id;
            var3 = var4.bind(var1)(var3);
            var2 = _closure1_slot37;
            var2 = var2.bind(var1)();
            return var1;
case 109:
            var1 = false;
            return var1;
case 110:
            var1 = false;
            return var1;
        }
    };
    var4['GUILD_ROLE_CONNECTIONS_CONFIGURATIONS_FETCH_SUCCESS'] = var11;
    var11 = function handleUpdateRoleConnectionConfigurations(arg1) {
        _fun0039: for(var _fun0039_ip = 0; ; ) switch(_fun0039_ip) {
case 0:
            var1 = arg1;
            var4 = var1.roleId;
            var6 = var1.roleConnectionConfigurations;
            var3 = _closure1_slot48;
            var1 = undefined;
            var3 = var3.bind(var1)(var4);
            var4 = null;
            if(!(var4 != var3)) { _fun0039_ip = 111; continue _fun0039 }
case 7:
            var4 = true;
            _closure1_slot32 = var4;
            var7 = _closure1_slot33;
            var5 = var7.add;
            var4 = var3.id;
            var4 = var5.bind(var7)(var4);
            var5 = _closure1_slot35;
            var4 = var5.set;
            var3 = var3.id;
            var3 = var4.bind(var5)(var3, var6);
            var2 = _closure1_slot37;
            var2 = var2.bind(var1)();
            return var1;
case 111:
            var1 = false;
            return var1;
        }
    };
    var4['GUILD_SETTINGS_ROLES_UPDATE_ROLE_CONNECTION_CONFIGURATIONS'] = var11;
    var11 = function handleClose() {
        var1 = null;
        _closure1_slot21 = var1;
        var1 = new Array(0);
        _closure1_slot30 = var1;
        _closure1_slot31 = var1;
        var3 = _closure1_slot34;
        var1 = var3.clear;
        var1 = var1.bind(var3)();
        var3 = _closure1_slot26;
        var1 = var3.clear;
        var1 = var1.bind(var3)();
        var3 = _closure1_slot36;
        var1 = var3.clear;
        var1 = var1.bind(var3)();
        var3 = _closure1_slot35;
        var1 = var3.clear;
        var1 = var1.bind(var3)();
        var1 = global;
        var1 = var1.Set;
        var3 = var1.prototype;
        var3 = Object.create(var3, {constructor: {value: var1}});
        var4 = var3;
        var1 = new var4[var1](var3);
        var1 = var1 instanceof Object ? var1 : var3;
        _closure1_slot33 = var1;
        var1 = false;
        _closure1_slot28 = var1;
        _closure1_slot29 = var1;
        _closure1_slot32 = var1;
        var1 = _closure1_slot16;
        var1 = var1.CLOSED;
        _closure1_slot27 = var1;
        var1 = undefined;
        return var1;
    };
    var4['GUILD_SETTINGS_CLOSE'] = var11;
    var4['GUILD_ROLE_CREATE'] = var8;
    var4['GUILD_ROLE_UPDATE'] = var8;
    var8 = function handleRoleDelete(arg1) {
        _fun0040: for(var _fun0040_ip = 0; ; ) switch(_fun0040_ip) {
case 0:
            var3 = arg1;
            var5 = _closure1_slot33;
            var4 = var5.has;
            var2 = var3.roleId;
            var2 = var4.bind(var5)(var2);
            if(!var2) { _fun0040_ip = 112; continue _fun0040 }
case 113:
            var5 = _closure1_slot34;
            var4 = var5.delete;
            var2 = var3.roleId;
            var2 = var4.bind(var5)(var2);
            var5 = _closure1_slot35;
            var4 = var5.delete;
            var2 = var3.roleId;
            var2 = var4.bind(var5)(var2);
            var5 = _closure1_slot41;
            var4 = var3.roleId;
            var2 = undefined;
            var2 = var5.bind(var2)(var4);
case 112:
            var2 = _closure1_slot50;
            var1 = undefined;
            var1 = var2.bind(var1)(var3);
            return var1;
        }
    };
    var4['GUILD_ROLE_DELETE'] = var8;
    var8 = function handleSubmitting() {
        var1 = _closure1_slot16;
        var1 = var1.SUBMITTING;
        _closure1_slot27 = var1;
        var1 = undefined;
        return var1;
    };
    var4['GUILD_SETTINGS_ROLES_SUBMITTING'] = var8;
    var8 = function handleSaveFail(arg1) {
        var1 = arg1;
        var2 = var1.message;
        var3 = _closure1_slot16;
        var3 = var3.OPEN;
        _closure1_slot27 = var3;
        _closure1_slot23 = var2;
        var1 = undefined;
        return var1;
    };
    var4['GUILD_SETTINGS_ROLES_SAVE_FAIL'] = var8;
    var8 = function handleSaveSuccess() {
        var3 = _closure1_slot43;
        var1 = undefined;
        var2 = false;
        var2 = var3.bind(var1)(var2);
        return var1;
    };
    var4['GUILD_SETTINGS_ROLES_SAVE_SUCCESS'] = var8;
    var8 = function handlePinPermissionMigrated(arg1) {
        _fun0041: for(var _fun0041_ip = 0; ; ) switch(_fun0041_ip) {
case 0:
            var1 = arg1;
            var2 = var1.guildId;
            var4 = _closure1_slot21;
            var1 = null;
            if(!(var1 != var4)) { _fun0041_ip = 114; continue _fun0041 }
case 69:
            var1 = _closure1_slot21;
            var1 = var1.id;
            if(!(var2 === var1)) { _fun0041_ip = 114; continue _fun0041 }
case 41:
            var6 = _closure1_slot9;
            var5 = _closure1_slot21;
            var1 = global;
            var4 = var1.Set;
            var1 = _closure1_slot21;
            var9 = var1.features;
            var1 = new Array(1);
            var8 = 0;
            var10 = var1;
            var7 = arraySpread(var10, var9, var8);
            var2 = _closure1_slot18;
            var2 = var2.PIN_PERMISSION_MIGRATION_COMPLETE;
            var1[6] = var2;
            var2 = 1;
            var2 = var7 + var2;
            var2 = var4.prototype;
            var2 = Object.create(var2, {constructor: {value: var4}});
            var11 = var2;
            var10 = var1;
            var1 = new var11[var4](var10, var9);
            var4 = var1 instanceof Object ? var1 : var2;
            var1 = undefined;
            var2 = 'features';
            var2 = var6.bind(var1)(var5, var2, var4);
            _closure1_slot21 = var2;
            return var1;
case 114:
            var1 = false;
            return var1;
        }
    };
    var4['GUILD_SETTINGS_PIN_PERMISSION_MIGRATED'] = var8;
    var8 = function handleSlowmodePermissionMigrated(arg1) {
        _fun0042: for(var _fun0042_ip = 0; ; ) switch(_fun0042_ip) {
case 0:
            var1 = arg1;
            var2 = var1.guildId;
            var4 = _closure1_slot21;
            var1 = null;
            if(!(var1 != var4)) { _fun0042_ip = 114; continue _fun0042 }
case 69:
            var1 = _closure1_slot21;
            var1 = var1.id;
            if(!(var2 === var1)) { _fun0042_ip = 114; continue _fun0042 }
case 41:
            var6 = _closure1_slot9;
            var5 = _closure1_slot21;
            var1 = global;
            var4 = var1.Set;
            var1 = _closure1_slot21;
            var9 = var1.features;
            var1 = new Array(1);
            var8 = 0;
            var10 = var1;
            var7 = arraySpread(var10, var9, var8);
            var2 = _closure1_slot18;
            var2 = var2.BYPASS_SLOWMODE_PERMISSION_MIGRATION_COMPLETE;
            var1[6] = var2;
            var2 = 1;
            var2 = var7 + var2;
            var2 = var4.prototype;
            var2 = Object.create(var2, {constructor: {value: var4}});
            var11 = var2;
            var10 = var1;
            var1 = new var11[var4](var10, var9);
            var4 = var1 instanceof Object ? var1 : var2;
            var1 = undefined;
            var2 = 'features';
            var2 = var6.bind(var1)(var5, var2, var4);
            _closure1_slot21 = var2;
            return var1;
case 114:
            var1 = false;
            return var1;
        }
    };
    var4['GUILD_SETTINGS_SLOWMODE_PERMISSION_MIGRATED'] = var8;
    var8 = var10.prototype;
    var8 = Object.create(var8, {constructor: {value: var10}});
    var19 = var8;
    var17 = var4;
    var4 = new var19[var10](var18, var17, var16);
    var4 = var4 instanceof Object ? var4 : var8;
    var _closure1_slot38 = var4;
    var5 = 23;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/guild_settings/roles/GuildSettingsRolesStore.tsx';
    var5 = var6.bind(var7)(var5);
    var3['default'] = var4;
    var3['RoleColorsStyle'] = var2;
    return var1;
})();