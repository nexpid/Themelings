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
            _closure1_slot36 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot36 = var1;
    var1 = function calculatePositionDeltas() {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var1 = _closure1_slot19;
            var2 = null;
            if(!(var2 != var1)) { _fun0002_ip = 6; continue _fun0002 }
case 7:
            var1 = _closure1_slot27;
            if(!(var2 != var1)) { _fun0002_ip = 6; continue _fun0002 }
case 8:
            var3 = _closure1_slot1;
            var2 = _closure1_slot3;
            var1 = 11;
            var2 = var2[var1];
            var1 = undefined;
            var3 = var3.bind(var1)(var2);
            var2 = var3.calculatePositionDeltas;
            var1 = {};
            var8 = _closure1_slot11;
            var7 = var8.getSortedRoles;
            var6 = _closure1_slot19;
            var6 = var6.id;
            var6 = var7.bind(var8)(var6);
            var1['oldOrdering'] = var6;
            var5 = _closure1_slot27;
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
            _fun0002_ip = 9; continue _fun0002;
case 6:
            var1 = new Array(0);
case 9:
            return var1;
        }
    };
    var _closure1_slot37 = var1;
    var11 = function handleSetSection(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var1 = arg1;
            var3 = var1.section;
            var4 = _closure1_slot19;
            var2 = null;
            if(!(var2 == var4)) { _fun0003_ip = 10; continue _fun0003 }
case 11:
            var2 = _closure1_slot13;
            var2 = var2.ROLES;
            if(!(var3 === var2)) { _fun0003_ip = 10; continue _fun0003 }
case 12:
            var2 = _closure1_slot38;
            var1 = undefined;
            var2 = var2.bind(var1)();
            return var1;
case 10:
            var1 = false;
            return var1;
        }
    };
    var1 = function handleInit() {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var3 = arguments[0];
            var1 = undefined;
            if(!(var3 === var1)) { _fun0004_ip = 13; continue _fun0004 }
case 14:
            var3 = true;
case 13:
            var5 = _closure1_slot12;
            var4 = var5.getProps;
            var4 = var4.bind(var5)();
            var4 = var4.guild;
            var _closure1_slot19 = var4;
            var4 = false;
            _closure1_slot25 = var4;
            _closure1_slot26 = var4;
            var _closure1_slot21 = var1;
            var6 = _closure1_slot23;
            var5 = var6.clear;
            var5 = var5.bind(var6)();
            var6 = _closure1_slot33;
            var5 = var6.clear;
            var5 = var5.bind(var6)();
            var5 = _closure1_slot14;
            var5 = var5.OPEN;
            _closure1_slot24 = var5;
            var5 = _closure1_slot19;
            var6 = null;
            if(!(var6 == var5)) { _fun0004_ip = 15; continue _fun0004 }
case 16:
            var8 = new Array(0);
            _fun0004_ip = 17; continue _fun0004;
case 15:
            var9 = _closure1_slot11;
            var7 = var9.getSortedRoles;
            var5 = _closure1_slot19;
            var5 = var5.id;
            var11 = var7.bind(var9)(var5);
            var5 = new Array(0);
            var10 = 0;
            var12 = var5;
            var7 = arraySpread(var12, var11, var10);
            var8 = var5;
case 17:
            _closure1_slot27 = var8;
            var5 = new Array(0);
            var10 = 0;
            var12 = var5;
            var11 = var8;
            var7 = arraySpread(var12, var11, var10);
            _closure1_slot28 = var5;
            var7 = _closure1_slot39;
            var5 = _closure1_slot19;
            var8 = var6 == var5;
            var6 = undefined;
            if(var8) { _fun0004_ip = 18; continue _fun0004 }
case 19:
            var6 = var5.id;
case 18:
            var5 = _closure1_slot28;
            var5 = var7.bind(var1)(var6, var5);
            _closure1_slot29 = var4;
            if(!var3) { _fun0004_ip = 20; continue _fun0004 }
case 21:
            var4 = _closure1_slot32;
            var3 = var4.clear;
            var3 = var3.bind(var4)();
            var4 = _closure1_slot31;
            var3 = var4.forEach;
            var2 = function(arg1, arg2) {
                var4 = _closure1_slot32;
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
case 20:
            return var1;
        }
    };
    var _closure1_slot38 = var1;
    var1 = function initRoleStyles(arg1, arg2) {
        var3 = arg2;
        var2 = arg1;
        var _closure2_slot0 = var2;
        var2 = var3.forEach;
        var1 = function(arg1) {
            _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                var2 = arg1;
                var1 = _closure1_slot22;
                var4 = var1.SOLID;
                var6 = _closure1_slot0;
                var5 = _closure1_slot3;
                var1 = 12;
                var5 = var5[var1];
                var1 = undefined;
                var7 = var6.bind(var1)(var5);
                var6 = var7.getHasEnhancedRoleColorsForRole;
                var5 = _closure2_slot0;
                var7 = var6.bind(var7)(var5, var2);
                var6 = var2.colors;
                var5 = null;
                var6 = var5 != var6;
                if(!var6) { _fun0005_ip = 5; continue _fun0005 }
case 22:
                var6 = var7;
case 5:
                var7 = var4;
                if(!var6) { _fun0005_ip = 23; continue _fun0005 }
case 24:
                var6 = var2.colors;
                var6 = var6.tertiary_color;
                if(!(var5 == var6)) { _fun0005_ip = 25; continue _fun0005 }
case 26:
                var6 = var2.colors;
                var6 = var6.secondary_color;
                if(!(var5 != var6)) { _fun0005_ip = 27; continue _fun0005 }
case 28:
                var6 = _closure1_slot22;
                var4 = var6.GRADIENT;
case 27:
                _fun0005_ip = 29; continue _fun0005;
case 25:
                var6 = _closure1_slot22;
                var4 = var6.HOLOGRAPHIC;
case 29:
                var7 = var4;
case 23:
                var6 = {};
                var4 = _closure1_slot22;
                var8 = var4.SOLID;
                var4 = {'primary_color': null, 'secondary_color': null, 'tertiary_color': null};
                var9 = _closure1_slot15;
                var4['primary_color'] = var9;
                var6[var8] = var4;
                var4 = _closure1_slot22;
                var8 = var4.GRADIENT;
                var4 = {};
                var9 = _closure1_slot17;
                var9 = var9.primary_color;
                var4['primary_color'] = var9;
                var9 = _closure1_slot17;
                var9 = var9.secondary_color;
                var4['secondary_color'] = var9;
                var4['tertiary_color'] = var5;
                var6[var8] = var4;
                var4 = _closure1_slot22;
                var8 = var4.HOLOGRAPHIC;
                var4 = {};
                var9 = _closure1_slot18;
                var9 = var9.primary_color;
                var4['primary_color'] = var9;
                var9 = _closure1_slot18;
                var9 = var9.secondary_color;
                var4['secondary_color'] = var9;
                var9 = _closure1_slot18;
                var9 = var9.tertiary_color;
                var4['tertiary_color'] = var9;
                var6[var8] = var4;
                var4 = var2.colors;
                if(!(var5 != var4)) { _fun0005_ip = 30; continue _fun0005 }
case 31:
                var4 = {};
                var8 = var2.colors;
                var8 = var8.primary_color;
                if(!(var5 == var8)) { _fun0005_ip = 32; continue _fun0005 }
case 33:
                var8 = _closure1_slot15;
case 32:
                var4['primary_color'] = var8;
                var8 = var2.colors;
                var9 = var8.secondary_color;
                var10 = var5 != var9;
                var8 = null;
                if(!var10) { _fun0005_ip = 34; continue _fun0005 }
case 35:
                var8 = var9;
case 34:
                var4['secondary_color'] = var8;
                var8 = var2.colors;
                var8 = var8.tertiary_color;
                var9 = var5 != var8;
                var5 = null;
                if(!var9) { _fun0005_ip = 36; continue _fun0005 }
case 37:
                var5 = var8;
case 36:
                var4['tertiary_color'] = var5;
                var6[var7] = var4;
case 30:
                var5 = _closure1_slot33;
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
    var _closure1_slot39 = var1;
    var1 = function updateRole(arg1, arg2) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
            var3 = arg1;
            var4 = _closure1_slot27;
            var2 = var4.indexOf;
            var4 = var2.bind(var4)(var3);
            var6 = 0;
            if(!(!(var4 < var6))) { _fun0006_ip = 38; continue _fun0006 }
case 39:
            var2 = {};
            var9 = var2;
            var8 = var3;
            var3 = copyDataProperties(var9, var8);
            var8 = arg2;
            var9 = var2;
            var3 = copyDataProperties(var9, var8);
            var8 = _closure1_slot27;
            var3 = new Array(0);
            var9 = var3;
            var7 = 0;
            var5 = arraySpread(var9, var8, var7);
            var3[var4] = var2;
            _closure1_slot27 = var3;
            var3 = true;
            _closure1_slot25 = var3;
            var4 = _closure1_slot23;
            var3 = var4.add;
            var2 = var2.id;
            var2 = var3.bind(var4)(var2);
            var2 = _closure1_slot34;
            var1 = undefined;
            var2 = var2.bind(var1)();
            return var1;
case 38:
            var1 = false;
            return var1;
        }
    };
    var _closure1_slot40 = var1;
    var1 = function _getRole(arg1) {
        var2 = arg1;
        var _closure2_slot0 = var2;
        var3 = _closure1_slot27;
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
    var _closure1_slot41 = var1;
    var8 = function syncGuildChanges(arg1) {
        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
            var1 = arg1;
            var8 = var1.guildId;
            var1 = undefined;
            var _closure2_slot0 = var1;
            var _closure2_slot1 = var1;
            var5 = _closure1_slot12;
            var4 = var5.getProps;
            var4 = var4.bind(var5)();
            var5 = var4.guild;
            _closure1_slot19 = var5;
            var4 = null;
            if(!(var4 != var5)) { _fun0007_ip = 40; continue _fun0007 }
case 41:
            var4 = _closure1_slot19;
            var4 = var4.id;
            if(!(var8 === var4)) { _fun0007_ip = 40; continue _fun0007 }
case 22:
            var5 = _closure1_slot24;
            var4 = _closure1_slot14;
            var4 = var4.SUBMITTING;
            if(!(var5 !== var4)) { _fun0007_ip = 40; continue _fun0007 }
case 42:
            var6 = _closure1_slot11;
            var5 = var6.getSortedRoles;
            var4 = _closure1_slot19;
            var4 = var4.id;
            var12 = var5.bind(var6)(var4);
            var5 = new Array(0);
            var4 = 0;
            var13 = var5;
            var11 = 0;
            var6 = arraySpread(var13, var12, var11);
            _closure2_slot0 = var5;
            var9 = _closure1_slot23;
            var7 = var9.forEach;
            var6 = function(arg1) {
                _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                    var4 = arg1;
                    var _closure3_slot0 = var4;
                    var5 = _closure1_slot41;
                    var1 = undefined;
                    var6 = var5.bind(var1)(var4);
                    var5 = -1;
                    var _closure3_slot1 = var5;
                    var9 = _closure2_slot0;
                    var8 = var9.find;
                    var7 = function(arg1, arg2) {
                        _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                            var1 = arg1;
                            var3 = var1.id;
                            var1 = _closure3_slot0;
                            if(!(var3 !== var1)) { _fun0009_ip = 8; continue _fun0009 }
case 43:
                            var1 = undefined;
                            return var1;
case 8:
                            var1 = arg2;
                            _closure3_slot1 = var1;
                            var1 = true;
                            return var1;
                        }
                    };
                    var8 = var8.bind(var9)(var7);
                    var7 = null;
                    if(!(var7 != var8)) { _fun0008_ip = 44; continue _fun0008 }
case 45:
                    if(!(var7 != var6)) { _fun0008_ip = 44; continue _fun0008 }
case 46:
                    var5 = _closure2_slot0;
                    var3 = _closure3_slot1;
                    var5[var3] = var6;
                    _fun0008_ip = 47; continue _fun0008;
case 44:
                    var3 = _closure1_slot23;
                    var2 = var3.delete;
                    var2 = var2.bind(var3)(var4);
case 47:
                    return var1;
                }
            };
            var6 = var7.bind(var9)(var6);
            var6 = _closure1_slot23;
            var6 = var6.size;
            if(!(var4 === var6)) { _fun0007_ip = 48; continue _fun0007 }
case 49:
            var6 = false;
            _closure1_slot25 = var6;
case 48:
            var6 = global;
            var6 = var6.Map;
            var7 = var6.prototype;
            var7 = Object.create(var7, {constructor: {value: var6}});
            var14 = var7;
            var6 = new var14[var6](var13);
            var7 = var6 instanceof Object ? var6 : var7;
            _closure2_slot1 = var7;
            var10 = _closure1_slot23;
            var9 = var10.forEach;
            var6 = function(arg1) {
                _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
                    var4 = arg1;
                    var2 = _closure1_slot33;
                    var1 = var2.get;
                    var3 = var1.bind(var2)(var4);
                    var1 = null;
                    if(!(var1 != var3)) { _fun0010_ip = 50; continue _fun0010 }
case 51:
                    var2 = _closure2_slot1;
                    var1 = var2.set;
                    var1 = var1.bind(var2)(var4, var3);
case 50:
                    var1 = undefined;
                    return var1;
                }
            };
            var6 = var9.bind(var10)(var6);
            var9 = _closure1_slot33;
            var6 = var9.clear;
            var6 = var6.bind(var9)();
            var6 = _closure1_slot39;
            var6 = var6.bind(var1)(var8, var5);
            var6 = var7.forEach;
            var2 = function(arg1, arg2) {
                var4 = _closure1_slot33;
                var3 = var4.set;
                var2 = arg2;
                var1 = arg1;
                var1 = var3.bind(var4)(var2, var1);
                var1 = undefined;
                return var1;
            };
            var2 = var6.bind(var7)(var2);
            var2 = false;
            _closure1_slot26 = var2;
            var2 = new Array(0);
            var13 = var2;
            var12 = var5;
            var11 = 0;
            var4 = arraySpread(var13, var12, var11);
            _closure1_slot27 = var2;
            return var1;
case 40:
            var1 = false;
            return var1;
        }
    };
    var _closure1_slot42 = var8;
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
    var2 = var9.bind(var1)(var2);
    var _closure1_slot11 = var2;
    var2 = 8;
    var2 = var7[var2];
    var2 = var9.bind(var1)(var2);
    var _closure1_slot12 = var2;
    var2 = 9;
    var2 = var7[var2];
    var2 = var6.bind(var1)(var2);
    var10 = var2.GuildSettingsSections;
    var _closure1_slot13 = var10;
    var10 = var2.FormStates;
    var _closure1_slot14 = var10;
    var12 = var2.DEFAULT_ROLE_COLOR;
    var _closure1_slot15 = var12;
    var2 = var2.GuildFeatures;
    var _closure1_slot16 = var2;
    var2 = 10;
    var2 = var7[var2];
    var2 = var6.bind(var1)(var2);
    var12 = var2.DEFAULT_GRADIENT_ROLE_COLORS;
    var _closure1_slot17 = var12;
    var2 = var2.HOLOGRAPHIC_ROLE_COLORS;
    var _closure1_slot18 = var2;
    var2 = {};
    var12 = 'solid';
    var2['SOLID'] = var12;
    var12 = 'gradient';
    var2['GRADIENT'] = var12;
    var12 = 'holographic';
    var2['HOLOGRAPHIC'] = var12;
    var _closure1_slot22 = var2;
    var12 = var4.Set;
    var13 = var12.prototype;
    var13 = Object.create(var13, {constructor: {value: var12}});
    var17 = var13;
    var12 = new var17[var12](var16);
    var12 = var12 instanceof Object ? var12 : var13;
    var _closure1_slot23 = var12;
    var10 = var10.CLOSED;
    var _closure1_slot24 = var10;
    var10 = false;
    var _closure1_slot25 = var10;
    var _closure1_slot26 = var10;
    var12 = new Array(0);
    var _closure1_slot27 = var12;
    var12 = new Array(0);
    var _closure1_slot28 = var12;
    var _closure1_slot29 = var10;
    var10 = var4.Set;
    var12 = var10.prototype;
    var12 = Object.create(var12, {constructor: {value: var10}});
    var17 = var12;
    var10 = new var17[var10](var16);
    var10 = var10 instanceof Object ? var10 : var12;
    var _closure1_slot30 = var10;
    var10 = var4.Map;
    var12 = var10.prototype;
    var12 = Object.create(var12, {constructor: {value: var10}});
    var17 = var12;
    var10 = new var17[var10](var16);
    var10 = var10 instanceof Object ? var10 : var12;
    var _closure1_slot31 = var10;
    var10 = var4.Map;
    var12 = var10.prototype;
    var12 = Object.create(var12, {constructor: {value: var10}});
    var17 = var12;
    var10 = new var17[var10](var16);
    var10 = var10 instanceof Object ? var10 : var12;
    var _closure1_slot32 = var10;
    var4 = var4.Map;
    var10 = var4.prototype;
    var10 = Object.create(var10, {constructor: {value: var4}});
    var17 = var10;
    var4 = new var17[var4](var16);
    var4 = var4 instanceof Object ? var4 : var10;
    var _closure1_slot33 = var4;
    var4 = 18;
    var4 = var7[var4];
    var13 = var9.bind(var1)(var4);
    var12 = var13.debounce;
    var10 = function() {
        _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
            var3 = false;
            var _closure2_slot0 = var3;
            var4 = _closure1_slot26;
            if(!var4) { _fun0011_ip = 52; continue _fun0011 }
case 53:
            var5 = _closure1_slot37;
            var4 = undefined;
            var4 = var5.bind(var4)();
            var5 = var4.length;
            var4 = 0;
            var4 = var5 > var4;
            _closure1_slot26 = var4;
            if(var4) { _fun0011_ip = 52; continue _fun0011 }
case 54:
            var4 = true;
            _closure2_slot0 = var4;
case 52:
            var10 = _closure1_slot23;
            var7 = new Array(0);
            var5 = 0;
            var11 = var7;
            var9 = 0;
            var4 = arraySpread(var11, var10, var9);
            var6 = var7.forEach;
            var4 = function(arg1) {
                _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
case 0:
                    var4 = arg1;
                    var5 = _closure1_slot1;
                    var3 = _closure1_slot3;
                    var1 = 18;
                    var3 = var3[var1];
                    var1 = undefined;
                    var7 = var5.bind(var1)(var3);
                    var6 = var7.isEqual;
                    var3 = _closure1_slot41;
                    var5 = var3.bind(var1)(var4);
                    var3 = function getOriginalRole(arg1) {
                        var2 = arg1;
                        var _closure4_slot0 = var2;
                        var3 = _closure1_slot28;
                        var2 = var3.find;
                        var1 = function(arg1) {
                            var1 = arg1;
                            var2 = var1.id;
                            var1 = _closure4_slot0;
                            var1 = var2 === var1;
                            return var1;
                        };
                        var1 = var2.bind(var3)(var1);
                        return var1;
                    };
                    var3 = var3.bind(var1)(var4);
                    var3 = var6.bind(var7)(var5, var3);
                    if(!var3) { _fun0012_ip = 55; continue _fun0012 }
case 56:
                    var3 = _closure1_slot23;
                    var2 = var3.delete;
                    var2 = var2.bind(var3)(var4);
                    var2 = true;
                    _closure2_slot0 = var2;
case 55:
                    return var1;
                }
            };
            var4 = var6.bind(var7)(var4);
            var4 = _closure1_slot23;
            var4 = var4.size;
            if(!(var5 === var4)) { _fun0011_ip = 57; continue _fun0011 }
case 58:
            _closure1_slot25 = var3;
case 57:
            var4 = _closure1_slot29;
            if(!var4) { _fun0011_ip = 59; continue _fun0011 }
case 60:
            var7 = _closure1_slot1;
            var6 = _closure1_slot3;
            var5 = 18;
            var6 = var6[var5];
            var5 = undefined;
            var8 = var7.bind(var5)(var6);
            var7 = var8.isEqual;
            var6 = _closure1_slot31;
            var5 = _closure1_slot32;
            var4 = var7.bind(var8)(var6, var5);
case 59:
            if(!var4) { _fun0011_ip = 61; continue _fun0011 }
case 62:
            var4 = true;
            _closure2_slot0 = var4;
            _closure1_slot29 = var3;
case 61:
            var2 = _closure2_slot0;
            if(!var2) { _fun0011_ip = 63; continue _fun0011 }
case 64:
            var2 = _closure1_slot35;
            var1 = var2.emitChange;
            var1 = var1.bind(var2)();
case 63:
            var1 = undefined;
            return var1;
        }
    };
    var4 = 500;
    var4 = var12.bind(var13)(var10, var4);
    var _closure1_slot34 = var4;
    var4 = 19;
    var4 = var7[var4];
    var4 = var9.bind(var1)(var4);
    var10 = var4.Store;
    var4 = function(arg1) {
        var4 = function GuildSettingsRolesStore() {
            _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
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
                var1 = _closure1_slot36;
                var1 = var1.bind(var3)();
                if(var1) { _fun0013_ip = 65; continue _fun0013 }
case 66:
                var7 = var9.apply;
                var5 = arguments;
                var1 = var5;
                var1 = var7.bind(var9)(var4, var1);
                _fun0013_ip = 57; continue _fun0013;
case 65:
                var7 = global;
                var8 = var7.Reflect;
                var7 = var8.construct;
                var6 = _closure1_slot7;
                var6 = var6.bind(var3)(var4);
                var6 = var6.constructor;
                var5 = arguments;
                var1 = var7.bind(var8)(var9, var5, var6);
case 57:
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
            var3 = _closure1_slot12;
            var2 = _closure1_slot10;
            var1 = _closure1_slot11;
            var1 = var4.bind(var5)(var3, var2, var1);
            var1 = undefined;
            return var1;
        };
        var5['value'] = var1;
        var1 = new Array(16);
        var1[0] = var5;
        var5 = {};
        var7 = 'hasChanges';
        var5['key'] = var7;
        var7 = function value() {
            _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
case 0:
                var1 = _closure1_slot25;
                if(var1) { _fun0014_ip = 67; continue _fun0014 }
case 68:
                var1 = _closure1_slot26;
case 67:
                if(var1) { _fun0014_ip = 11; continue _fun0014 }
case 69:
                var1 = _closure1_slot29;
case 11:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[1] = var5;
        var5 = {};
        var7 = 'getRoleStyleData';
        var5['key'] = var7;
        var7 = function value(arg1) {
            var3 = _closure1_slot33;
            var2 = var3.get;
            var1 = arg1;
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var5['value'] = var7;
        var1[2] = var5;
        var5 = {};
        var7 = 'errorMessage';
        var5['key'] = var7;
        var7 = function get() {
            var1 = _closure1_slot21;
            return var1;
        };
        var5['get'] = var7;
        var1[3] = var5;
        var5 = {};
        var7 = 'hasSortChanges';
        var5['key'] = var7;
        var7 = function get() {
            var1 = _closure1_slot26;
            return var1;
        };
        var5['get'] = var7;
        var1[4] = var5;
        var5 = {};
        var7 = 'hasRoleConfigurationChanges';
        var5['key'] = var7;
        var7 = function get() {
            var1 = _closure1_slot29;
            return var1;
        };
        var5['get'] = var7;
        var1[5] = var5;
        var5 = {};
        var7 = 'guild';
        var5['key'] = var7;
        var7 = function get() {
            var1 = _closure1_slot19;
            return var1;
        };
        var5['get'] = var7;
        var1[6] = var5;
        var5 = {};
        var7 = 'editedRoleIds';
        var5['key'] = var7;
        var7 = function get() {
            var1 = global;
            var3 = var1.Array;
            var2 = var3.from;
            var1 = _closure1_slot23;
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var5['get'] = var7;
        var1[7] = var5;
        var5 = {};
        var7 = 'editedRoleIdsForConfigurations';
        var5['key'] = var7;
        var7 = function get() {
            var1 = _closure1_slot30;
            return var1;
        };
        var5['get'] = var7;
        var1[8] = var5;
        var5 = {};
        var7 = 'roles';
        var5['key'] = var7;
        var7 = function get() {
            var1 = _closure1_slot27;
            return var1;
        };
        var5['get'] = var7;
        var1[9] = var5;
        var5 = {};
        var7 = 'formState';
        var5['key'] = var7;
        var7 = function get() {
            var1 = _closure1_slot24;
            return var1;
        };
        var5['get'] = var7;
        var1[10] = var5;
        var5 = {};
        var7 = 'getSortDeltas';
        var5['key'] = var7;
        var7 = function value() {
            var2 = _closure1_slot37;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        };
        var5['value'] = var7;
        var1[11] = var5;
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
        var1[12] = var5;
        var5 = {};
        var7 = 'getRole';
        var5['key'] = var7;
        var7 = function value(arg1) {
            var3 = _closure1_slot41;
            var2 = undefined;
            var1 = arg1;
            var1 = var3.bind(var2)(var1);
            return var1;
        };
        var5['value'] = var7;
        var1[13] = var5;
        var5 = {};
        var7 = 'getPermissionSearchQuery';
        var5['key'] = var7;
        var7 = function value() {
            var1 = _closure1_slot20;
            return var1;
        };
        var5['value'] = var7;
        var1[14] = var5;
        var5 = {};
        var7 = 'getEditedRoleConnectionConfigurationsMap';
        var5['key'] = var7;
        var6 = function value() {
            var1 = _closure1_slot32;
            return var1;
        };
        var5['value'] = var6;
        var1[15] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var10 = var4.bind(var1)(var10);
    var4 = 'GuildSettingsRolesStore';
    var10['displayName'] = var4;
    var4 = 20;
    var4 = var7[var4];
    var16 = var9.bind(var1)(var4);
    var4 = {};
    var12 = function GUILD_SETTINGS_ROLES_INIT() {
        var2 = _closure1_slot38;
        var1 = undefined;
        var2 = var2.bind(var1)();
        return var1;
    };
    var4['GUILD_SETTINGS_ROLES_INIT'] = var12;
    var4['GUILD_SETTINGS_INIT'] = var11;
    var4['GUILD_SETTINGS_SET_SECTION'] = var11;
    var11 = function handleSortUpdate(arg1) {
        _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
case 0:
            var1 = arg1;
            var4 = var1.roles;
            var3 = _closure1_slot27;
            var1 = null;
            if(!(var1 != var3)) { _fun0015_ip = 70; continue _fun0015 }
case 71:
            var3 = var4.length;
            var1 = _closure1_slot27;
            var1 = var1.length;
            if(!(var3 === var1)) { _fun0015_ip = 72; continue _fun0015 }
case 70:
            var3 = var4.map;
            var1 = function(arg1) {
                var3 = _closure1_slot41;
                var2 = undefined;
                var1 = arg1;
                var1 = var3.bind(var2)(var1);
                return var1;
            };
            var5 = var3.bind(var4)(var1);
            var4 = var5.filter;
            var6 = _closure1_slot0;
            var3 = _closure1_slot3;
            var1 = 13;
            var3 = var3[var1];
            var1 = undefined;
            var3 = var6.bind(var1)(var3);
            var3 = var3.isNotNullish;
            var3 = var4.bind(var5)(var3);
            _closure1_slot27 = var3;
            var3 = true;
            _closure1_slot26 = var3;
            var2 = _closure1_slot34;
            var2 = var2.bind(var1)();
            return var1;
case 72:
            var1 = false;
            return var1;
        }
    };
    var4['GUILD_SETTINGS_ROLES_SORT_UPDATE'] = var11;
    var11 = function handleUpdatePermissions(arg1) {
        _fun0016: for(var _fun0016_ip = 0; ; ) switch(_fun0016_ip) {
case 0:
            var1 = arg1;
            var2 = var1.id;
            var9 = var1.flag;
            var5 = var1.allow;
            var1 = _closure1_slot41;
            var4 = undefined;
            var3 = var1.bind(var4)(var2);
            var1 = null;
            if(!(var1 != var3)) { _fun0016_ip = 73; continue _fun0016 }
case 70:
            var8 = var3.permissions;
            var2 = _closure1_slot40;
            var1 = {};
            var7 = _closure1_slot2;
            var10 = _closure1_slot3;
            var6 = 14;
            var6 = var10[var6];
            var7 = var7.bind(var4)(var6);
            if(var5) { _fun0016_ip = 55; continue _fun0016 }
case 74:
            var5 = var7.remove;
            var5 = var5.bind(var7)(var8, var9);
            _fun0016_ip = 75; continue _fun0016;
case 55:
            var6 = var7.add;
            var5 = var6.bind(var7)(var8, var9);
case 75:
            var1['permissions'] = var5;
            var1 = var2.bind(var4)(var3, var1);
            return var1;
case 73:
            var1 = false;
            return var1;
        }
    };
    var4['GUILD_SETTINGS_ROLES_UPDATE_PERMISSIONS'] = var11;
    var11 = function handleUpdatePermissionSet(arg1) {
        _fun0017: for(var _fun0017_ip = 0; ; ) switch(_fun0017_ip) {
case 0:
            var1 = arg1;
            var3 = var1.id;
            var6 = var1.permissions;
            var1 = _closure1_slot41;
            var5 = undefined;
            var4 = var1.bind(var5)(var3);
            var1 = null;
            var1 = var1 != var4;
            if(!var1) { _fun0017_ip = 76; continue _fun0017 }
case 77:
            var3 = _closure1_slot40;
            var2 = {};
            var2['permissions'] = var6;
            var1 = var3.bind(var5)(var4, var2);
case 76:
            return var1;
        }
    };
    var4['GUILD_SETTINGS_ROLES_UPDATE_PERMISSION_SET'] = var11;
    var11 = function handleClearRolePermissions(arg1) {
        _fun0018: for(var _fun0018_ip = 0; ; ) switch(_fun0018_ip) {
case 0:
            var1 = arg1;
            var2 = var1.id;
            var1 = _closure1_slot41;
            var5 = undefined;
            var4 = var1.bind(var5)(var2);
            var1 = null;
            var1 = var1 != var4;
            if(!var1) { _fun0018_ip = 5; continue _fun0018 }
case 78:
            var3 = _closure1_slot40;
            var2 = {};
            var7 = _closure1_slot2;
            var8 = _closure1_slot3;
            var6 = 15;
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
        _fun0019: for(var _fun0019_ip = 0; ; ) switch(_fun0019_ip) {
case 0:
            var1 = arg1;
            var3 = var1.id;
            var6 = var1.name;
            var1 = _closure1_slot41;
            var5 = undefined;
            var4 = var1.bind(var5)(var3);
            var1 = null;
            var1 = var1 != var4;
            if(!var1) { _fun0019_ip = 52; continue _fun0019 }
case 79:
            var3 = _closure1_slot40;
            var2 = {};
            var2['name'] = var6;
            var1 = var3.bind(var5)(var4, var2);
case 52:
            return var1;
        }
    };
    var4['GUILD_SETTINGS_ROLES_UPDATE_NAME'] = var11;
    var11 = function handleUpdateDescription(arg1) {
        _fun0020: for(var _fun0020_ip = 0; ; ) switch(_fun0020_ip) {
case 0:
            var1 = arg1;
            var3 = var1.id;
            var6 = var1.description;
            var1 = _closure1_slot41;
            var5 = undefined;
            var4 = var1.bind(var5)(var3);
            var1 = null;
            var1 = var1 != var4;
            if(!var1) { _fun0020_ip = 52; continue _fun0020 }
case 79:
            var3 = _closure1_slot40;
            var2 = {};
            var2['description'] = var6;
            var1 = var3.bind(var5)(var4, var2);
case 52:
            return var1;
        }
    };
    var4['GUILD_SETTINGS_ROLES_UPDATE_DESCRIPTION'] = var11;
    var11 = function handleUpdateColor(arg1) {
        _fun0021: for(var _fun0021_ip = 0; ; ) switch(_fun0021_ip) {
case 0:
            var1 = arg1;
            var11 = var1.id;
            var9 = var1.color;
            var6 = null;
            var1 = 0;
            var8 = null;
            if(!(var1 !== var9)) { _fun0021_ip = 80; continue _fun0021 }
case 8:
            var3 = _closure1_slot0;
            var2 = _closure1_slot3;
            var1 = 16;
            var2 = var2[var1];
            var1 = undefined;
            var2 = var3.bind(var1)(var2);
            var1 = var2.int2hex;
            var8 = var1.bind(var2)(var9);
case 80:
            var1 = _closure1_slot41;
            var5 = undefined;
            var4 = var1.bind(var5)(var11);
            if(!(var6 != var4)) { _fun0021_ip = 81; continue _fun0021 }
case 24:
            var3 = _closure1_slot33;
            var1 = var3.get;
            var12 = var1.bind(var3)(var11);
            var1 = var6 != var12;
            if(!var1) { _fun0021_ip = 82; continue _fun0021 }
case 83:
            var3 = _closure1_slot22;
            var3 = var3.SOLID;
            var12['currentStyle'] = var3;
            var10 = var12.styleColors;
            var3 = _closure1_slot22;
            var7 = var3.SOLID;
            var3 = {'primary_color': null, 'secondary_color': null, 'tertiary_color': null};
            var3['primary_color'] = var9;
            var10[var7] = var3;
            var10 = _closure1_slot33;
            var7 = var10.set;
            var3 = {};
            var15 = var3;
            var14 = var12;
            var12 = copyDataProperties(var15, var14);
            var3 = var7.bind(var10)(var11, var3);
            var3 = _closure1_slot40;
            var2 = {};
            var2['color'] = var9;
            var2['colorString'] = var8;
            var7 = {'primary_color': null, 'secondary_color': null, 'tertiary_color': null};
            var7['primary_color'] = var9;
            var2['colors'] = var7;
            var7 = var6 != var8;
            var6 = null;
            if(!var7) { _fun0021_ip = 84; continue _fun0021 }
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
        _fun0022: for(var _fun0022_ip = 0; ; ) switch(_fun0022_ip) {
case 0:
            var1 = arg1;
            var10 = var1.id;
            var7 = var1.colors;
            var3 = var1.currentStyle;
            var1 = _closure1_slot41;
            var5 = undefined;
            var4 = var1.bind(var5)(var10);
            var1 = null;
            if(!(var1 != var4)) { _fun0022_ip = 86; continue _fun0022 }
case 87:
            var8 = _closure1_slot0;
            var9 = _closure1_slot3;
            var6 = 17;
            var6 = var9[var6];
            var8 = var8.bind(var5)(var6);
            var6 = var8.extractColorStringsFromServerColors;
            var6 = var6.bind(var8)(var7);
            var9 = _closure1_slot33;
            var8 = var9.get;
            var11 = var8.bind(var9)(var10);
            var1 = var1 != var11;
            if(!var1) { _fun0022_ip = 88; continue _fun0022 }
case 89:
            var8 = var11.styleColors;
            var8[var3] = var7;
            var11['currentStyle'] = var3;
            var9 = _closure1_slot33;
            var8 = var9.set;
            var3 = {};
            var13 = var3;
            var12 = var11;
            var11 = copyDataProperties(var13, var12);
            var3 = var8.bind(var9)(var10, var3);
            var3 = _closure1_slot40;
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
        _fun0023: for(var _fun0023_ip = 0; ; ) switch(_fun0023_ip) {
case 0:
            var1 = arg1;
            var3 = var1.id;
            var7 = var1.hoist;
            var6 = var1.mentionable;
            var1 = _closure1_slot41;
            var5 = undefined;
            var4 = var1.bind(var5)(var3);
            var1 = null;
            var1 = var1 != var4;
            if(!var1) { _fun0023_ip = 90; continue _fun0023 }
case 91:
            var3 = _closure1_slot40;
            var2 = {};
            var2['hoist'] = var7;
            var2['mentionable'] = var6;
            var1 = var3.bind(var5)(var4, var2);
case 90:
            return var1;
        }
    };
    var4['GUILD_SETTINGS_ROLES_UPDATE_SETTINGS'] = var11;
    var11 = function handleUpdateRoleIcon(arg1) {
        _fun0024: for(var _fun0024_ip = 0; ; ) switch(_fun0024_ip) {
case 0:
            var1 = arg1;
            var3 = var1.id;
            var7 = var1.icon;
            var6 = var1.unicodeEmoji;
            var1 = _closure1_slot41;
            var5 = undefined;
            var4 = var1.bind(var5)(var3);
            var1 = null;
            var1 = var1 != var4;
            if(!var1) { _fun0024_ip = 92; continue _fun0024 }
case 87:
            var3 = _closure1_slot40;
            var2 = {};
            var2['icon'] = var7;
            var2['unicodeEmoji'] = var6;
            var1 = var3.bind(var5)(var4, var2);
case 92:
            return var1;
        }
    };
    var4['GUILD_SETTINGS_ROLES_UPDATE_ROLE_ICON'] = var11;
    var11 = function handleInsertRole(arg1) {
        _fun0025: for(var _fun0025_ip = 0; ; ) switch(_fun0025_ip) {
case 0:
            var1 = arg1;
            var4 = var1.role;
            var2 = var1.searchQuery;
            var _closure1_slot20 = var2;
            var5 = null;
            if(!(var5 != var4)) { _fun0025_ip = 58; continue _fun0025 }
case 93:
            var6 = _closure1_slot41;
            var3 = var4.id;
            var2 = undefined;
            var3 = var6.bind(var2)(var3);
            if(!(var5 != var3)) { _fun0025_ip = 94; continue _fun0025 }
case 95:
            var3 = _closure1_slot40;
            var3 = var3.bind(var2)(var4, var4);
            _fun0025_ip = 58; continue _fun0025;
case 94:
            var8 = _closure1_slot27;
            var3 = new Array(1);
            var7 = 0;
            var9 = var3;
            var5 = arraySpread(var9, var8, var7);
            var3[var5] = var4;
            var4 = 1;
            var4 = var5 + var4;
            _closure1_slot27 = var3;
            var1 = _closure1_slot34;
            var1 = var1.bind(var2)();
case 58:
            var1 = undefined;
            return var1;
        }
    };
    var4['GUILD_SETTINGS_ROLE_SELECT'] = var11;
    var11 = function handleRoleStyleUpdate(arg1) {
        _fun0026: for(var _fun0026_ip = 0; ; ) switch(_fun0026_ip) {
case 0:
            var1 = arg1;
            var10 = var1.id;
            var5 = var1.currentStyle;
            var2 = _closure1_slot41;
            var4 = undefined;
            var3 = var2.bind(var4)(var10);
            var7 = null;
            if(!(var7 != var3)) { _fun0026_ip = 96; continue _fun0026 }
case 77:
            var6 = _closure1_slot33;
            var2 = var6.get;
            var2 = var2.bind(var6)(var10);
            if(!(var7 != var2)) { _fun0026_ip = 63; continue _fun0026 }
case 97:
            var9 = _closure1_slot33;
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
            var2 = 17;
            var2 = var8[var2];
            var5 = var5.bind(var4)(var2);
            var2 = var5.extractColorStringsFromServerColors;
            var5 = var2.bind(var5)(var6);
            var2 = _closure1_slot40;
            var1 = {};
            var8 = var6.primary_color;
            var9 = var7 != var8;
            var7 = undefined;
            if(!var9) { _fun0026_ip = 98; continue _fun0026 }
case 99:
            var7 = var8;
case 98:
            var1['color'] = var7;
            var1['colors'] = var6;
            var6 = var5.primaryColor;
            var1['colorString'] = var6;
            var1['colorStrings'] = var5;
            var1 = var2.bind(var4)(var3, var1);
            return var1;
case 63:
            var1 = false;
            return var1;
case 96:
            var1 = false;
            return var1;
        }
    };
    var4['GUILD_SETTINGS_ROLES_ROLE_STYLE_UPDATE'] = var11;
    var11 = function handleFetchRoleConnectionConfigurations(arg1) {
        _fun0027: for(var _fun0027_ip = 0; ; ) switch(_fun0027_ip) {
case 0:
            var1 = arg1;
            var4 = var1.roleId;
            var6 = var1.roleConnectionConfigurations;
            var3 = _closure1_slot41;
            var1 = undefined;
            var3 = var3.bind(var1)(var4);
            var4 = null;
            if(!(var4 != var3)) { _fun0027_ip = 100; continue _fun0027 }
case 12:
            var7 = _closure1_slot31;
            var5 = var7.get;
            var4 = var3.id;
            var7 = var5.bind(var7)(var4);
            var5 = _closure1_slot1;
            var8 = _closure1_slot3;
            var4 = 18;
            var4 = var8[var4];
            var5 = var5.bind(var1)(var4);
            var4 = var5.isEqual;
            var4 = var4.bind(var5)(var7, var6);
            if(var4) { _fun0027_ip = 101; continue _fun0027 }
case 55:
            var7 = _closure1_slot32;
            var5 = var7.set;
            var4 = var3.id;
            var4 = var5.bind(var7)(var4, var6);
            var5 = _closure1_slot31;
            var4 = var5.set;
            var3 = var3.id;
            var3 = var4.bind(var5)(var3, var6);
            var2 = _closure1_slot34;
            var2 = var2.bind(var1)();
            return var1;
case 101:
            var1 = false;
            return var1;
case 100:
            var1 = false;
            return var1;
        }
    };
    var4['GUILD_ROLE_CONNECTIONS_CONFIGURATIONS_FETCH_SUCCESS'] = var11;
    var11 = function handleUpdateRoleConnectionConfigurations(arg1) {
        _fun0028: for(var _fun0028_ip = 0; ; ) switch(_fun0028_ip) {
case 0:
            var1 = arg1;
            var4 = var1.roleId;
            var6 = var1.roleConnectionConfigurations;
            var3 = _closure1_slot41;
            var1 = undefined;
            var3 = var3.bind(var1)(var4);
            var4 = null;
            if(!(var4 != var3)) { _fun0028_ip = 102; continue _fun0028 }
case 12:
            var4 = true;
            _closure1_slot29 = var4;
            var7 = _closure1_slot30;
            var5 = var7.add;
            var4 = var3.id;
            var4 = var5.bind(var7)(var4);
            var5 = _closure1_slot32;
            var4 = var5.set;
            var3 = var3.id;
            var3 = var4.bind(var5)(var3, var6);
            var2 = _closure1_slot34;
            var2 = var2.bind(var1)();
            return var1;
case 102:
            var1 = false;
            return var1;
        }
    };
    var4['GUILD_SETTINGS_ROLES_UPDATE_ROLE_CONNECTION_CONFIGURATIONS'] = var11;
    var11 = function handleClose() {
        var1 = null;
        _closure1_slot19 = var1;
        var1 = new Array(0);
        _closure1_slot27 = var1;
        _closure1_slot28 = var1;
        var3 = _closure1_slot31;
        var1 = var3.clear;
        var1 = var1.bind(var3)();
        var3 = _closure1_slot23;
        var1 = var3.clear;
        var1 = var1.bind(var3)();
        var3 = _closure1_slot33;
        var1 = var3.clear;
        var1 = var1.bind(var3)();
        var3 = _closure1_slot32;
        var1 = var3.clear;
        var1 = var1.bind(var3)();
        var1 = global;
        var1 = var1.Set;
        var3 = var1.prototype;
        var3 = Object.create(var3, {constructor: {value: var1}});
        var4 = var3;
        var1 = new var4[var1](var3);
        var1 = var1 instanceof Object ? var1 : var3;
        _closure1_slot30 = var1;
        var1 = false;
        _closure1_slot25 = var1;
        _closure1_slot26 = var1;
        _closure1_slot29 = var1;
        var1 = _closure1_slot14;
        var1 = var1.CLOSED;
        _closure1_slot24 = var1;
        var1 = undefined;
        return var1;
    };
    var4['GUILD_SETTINGS_CLOSE'] = var11;
    var4['GUILD_ROLE_CREATE'] = var8;
    var4['GUILD_ROLE_UPDATE'] = var8;
    var8 = function handleRoleDelete(arg1) {
        _fun0029: for(var _fun0029_ip = 0; ; ) switch(_fun0029_ip) {
case 0:
            var3 = arg1;
            var5 = _closure1_slot30;
            var4 = var5.has;
            var2 = var3.roleId;
            var2 = var4.bind(var5)(var2);
            if(!var2) { _fun0029_ip = 26; continue _fun0029 }
case 103:
            var5 = _closure1_slot30;
            var4 = var5.delete;
            var2 = var3.roleId;
            var2 = var4.bind(var5)(var2);
            var5 = _closure1_slot31;
            var4 = var5.delete;
            var2 = var3.roleId;
            var2 = var4.bind(var5)(var2);
            var5 = _closure1_slot32;
            var4 = var5.delete;
            var2 = var3.roleId;
            var2 = var4.bind(var5)(var2);
            var2 = false;
            _closure1_slot29 = var2;
case 26:
            var2 = _closure1_slot42;
            var1 = undefined;
            var1 = var2.bind(var1)(var3);
            return var1;
        }
    };
    var4['GUILD_ROLE_DELETE'] = var8;
    var8 = function handleSubmitting() {
        var1 = _closure1_slot14;
        var1 = var1.SUBMITTING;
        _closure1_slot24 = var1;
        var1 = undefined;
        return var1;
    };
    var4['GUILD_SETTINGS_ROLES_SUBMITTING'] = var8;
    var8 = function handleSaveFail(arg1) {
        var1 = arg1;
        var2 = var1.message;
        var3 = _closure1_slot14;
        var3 = var3.OPEN;
        _closure1_slot24 = var3;
        _closure1_slot21 = var2;
        var1 = undefined;
        return var1;
    };
    var4['GUILD_SETTINGS_ROLES_SAVE_FAIL'] = var8;
    var8 = function handleSaveSuccess() {
        var3 = _closure1_slot38;
        var1 = undefined;
        var2 = false;
        var2 = var3.bind(var1)(var2);
        return var1;
    };
    var4['GUILD_SETTINGS_ROLES_SAVE_SUCCESS'] = var8;
    var8 = function handlePinPermissionMigrated(arg1) {
        _fun0030: for(var _fun0030_ip = 0; ; ) switch(_fun0030_ip) {
case 0:
            var1 = arg1;
            var4 = var1.guildId;
            var3 = _closure1_slot19;
            var1 = null;
            var1 = var1 != var3;
            if(!var1) { _fun0030_ip = 77; continue _fun0030 }
case 104:
            var3 = _closure1_slot19;
            var3 = var3.id;
            var1 = var4 === var3;
case 77:
            if(!var1) { _fun0030_ip = 105; continue _fun0030 }
case 70:
            var6 = _closure1_slot9;
            var5 = _closure1_slot19;
            var4 = var5.features;
            var3 = var4.union;
            var1 = global;
            var8 = var1.Set;
            var1 = _closure1_slot16;
            var7 = var1.PIN_PERMISSION_MIGRATION_COMPLETE;
            var1 = new Array(1);
            var1[0] = var7;
            var7 = var8.prototype;
            var7 = Object.create(var7, {constructor: {value: var8}});
            var12 = var7;
            var11 = var1;
            var1 = new var12[var8](var11, var10);
            var1 = var1 instanceof Object ? var1 : var7;
            var4 = var3.bind(var4)(var1);
            var3 = undefined;
            var1 = 'features';
            var1 = var6.bind(var3)(var5, var1, var4);
            _closure1_slot19 = var1;
case 105:
            var1 = undefined;
            return var1;
        }
    };
    var4['GUILD_SETTINGS_PIN_PERMISSION_MIGRATED'] = var8;
    var8 = var10.prototype;
    var8 = Object.create(var8, {constructor: {value: var10}});
    var17 = var8;
    var15 = var4;
    var4 = new var17[var10](var16, var15, var14);
    var4 = var4 instanceof Object ? var4 : var8;
    var _closure1_slot35 = var4;
    var5 = 21;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/guild_settings/roles/GuildSettingsRolesStore.tsx';
    var5 = var6.bind(var7)(var5);
    var3['default'] = var4;
    var3['RoleColorsStyle'] = var2;
    return var1;
})();