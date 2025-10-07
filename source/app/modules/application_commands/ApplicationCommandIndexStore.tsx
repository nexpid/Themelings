// app/modules/application_commands/ApplicationCommandIndexStore.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var10 = require;
    var22 = metroImportDefault;
    var13 = metroImportAll;
    var3 = exports;
    var11 = dependencyMap;
    var _closure1_slot0 = var10;
    var _closure1_slot1 = var22;
    var _closure1_slot2 = var13;
    var _closure1_slot3 = var11;
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
            var9 = _closure1_slot38;
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
            var7 = _closure1_slot38;
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
    var _closure1_slot37 = var1;
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
    var _closure1_slot38 = var1;
    var1 = function getIndexKey(arg1) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
            var1 = arg1;
            var3 = var1.type;
            var2 = 'guild';
            if(!(var2 !== var3)) { _fun0005_ip = 34; continue _fun0005 }
case 39:
            var2 = 'channel';
            if(!(var2 !== var3)) { _fun0005_ip = 40; continue _fun0005 }
case 41:
            var2 = 'user';
            if(!(var2 !== var3)) { _fun0005_ip = 42; continue _fun0005 }
case 43:
            var2 = 'application';
            if(!(var2 !== var3)) { _fun0005_ip = 44; continue _fun0005 }
case 45:
            var2 = undefined;
            return var2;
case 44:
            var2 = var1.applicationId;
            return var2;
case 42:
            var2 = _closure1_slot24;
            return var2;
case 40:
            var2 = var1.channelId;
            return var2;
case 34:
            var1 = var1.guildId;
            return var1;
        }
    };
    var _closure1_slot39 = var1;
    var1 = function updateIndex(arg1, arg2) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
            var3 = arg1;
            var8 = arg2;
            var7 = arguments[2];
            var4 = undefined;
            if(!(var7 === var4)) { _fun0006_ip = 46; continue _fun0006 }
case 47:
            var7 = false;
case 46:
            var1 = _closure1_slot39;
            var6 = var1.bind(var4)(var3);
            var1 = _closure1_slot33;
            var1 = var1.indices;
            var1 = var1[var6];
            var5 = null;
            if(!(var5 == var1)) { _fun0006_ip = 48; continue _fun0006 }
case 9:
            var5 = undefined;
            if(!var7) { _fun0006_ip = 49; continue _fun0006 }
case 50:
            var7 = {};
            var9 = _closure1_slot25;
            var7['serverVersion'] = var9;
            var9 = {};
            var10 = false;
            var9['fetching'] = var10;
            var7['fetchState'] = var9;
            var12 = var7;
            var11 = var8;
            var9 = copyDataProperties(var12, var11);
            var5 = var7;
            _fun0006_ip = 49; continue _fun0006;
case 48:
            var7 = 'fetchState';
            var7 = var7 in var8;
            if(!var7) { _fun0006_ip = 51; continue _fun0006 }
case 52:
            var9 = var1.fetchState;
            var7 = var9.fetching;
case 51:
            if(!var7) { _fun0006_ip = 53; continue _fun0006 }
case 54:
            var7 = var1.fetchState;
            var9 = var7.abort;
            var7 = var9.abort;
            var7 = var7.bind(var9)();
case 53:
            var7 = {};
            var12 = var7;
            var11 = var1;
            var9 = copyDataProperties(var12, var11);
            var12 = var7;
            var11 = var8;
            var8 = copyDataProperties(var12, var11);
            var5 = var7;
case 49:
            if(!(var4 !== var5)) { _fun0006_ip = 55; continue _fun0006 }
case 56:
            var4 = _closure1_slot33;
            var4 = var4.indices;
            var4[var6] = var5;
            var4 = var3.type;
            var3 = 'application';
            if(!(var3 === var4)) { _fun0006_ip = 55; continue _fun0006 }
case 57:
            var3 = _closure1_slot33;
            var4 = var3.applicationIndices;
            var3 = var4.set;
            var3 = var3.bind(var4)(var6, var5);
            var3 = _closure1_slot33;
            var4 = var3.applicationIndicesVersion;
            var2 = 1;
            var2 = var4 + var2;
            var3['applicationIndicesVersion'] = var2;
case 55:
            return var1;
        }
    };
    var _closure1_slot40 = var1;
    var1 = function deleteIndex(arg1) {
        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
            var4 = _closure1_slot39;
            var1 = undefined;
            var3 = arg1;
            var3 = var4.bind(var1)(var3);
            var4 = _closure1_slot33;
            var4 = var4.indices;
            var4 = var4[var3];
            var5 = null;
            var5 = var5 != var4;
            if(!var5) { _fun0007_ip = 58; continue _fun0007 }
case 45:
            var6 = var4.fetchState;
            var5 = var6.fetching;
case 58:
            if(!var5) { _fun0007_ip = 59; continue _fun0007 }
case 8:
            var4 = var4.fetchState;
            var5 = var4.abort;
            var4 = var5.abort;
            var4 = var4.bind(var5)();
case 59:
            var2 = _closure1_slot33;
            var2 = var2.indices;
            var2 = delete var2[var3];
            return var1;
        }
    };
    var _closure1_slot41 = var1;
    var25 = function handleReset() {
        _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
            var1 = global;
            var4 = var1.Object;
            var3 = var4.values;
            var2 = _closure1_slot33;
            var2 = var2.indices;
            var4 = var3.bind(var4)(var2);
            var2 = var4.length;
            var3 = 0;
            var2 = var3 < var2;
            if(!var2) { _fun0008_ip = 60; continue _fun0008 }
case 61:
            var2 = var4[var3];
            var5 = var2.fetchState;
            var5 = var5.fetching;
            if(!var5) { _fun0008_ip = 13; continue _fun0008 }
case 62:
            var2 = var2.fetchState;
            var5 = var2.abort;
            var2 = var5.abort;
            var2 = var2.bind(var5)();
case 13:
            var3 = var3 + 1;
            var2 = var4.length;
            if(var3 < var2) { _fun0008_ip = 61; continue _fun0008 }
case 60:
            var2 = _closure1_slot33;
            var1 = {};
            var2['indices'] = var1;
            var1 = undefined;
            return var1;
        }
    };
    var _closure1_slot42 = var25;
    var1 = function _getOrFetchApplicationCommandIndexForTarget() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot10;
        var3 = function* (arg1) {
            var1 = function* anon_0_(arg1) {
                _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                    StartGenerator();
                    var7 = arg1;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0009_ip = 63; continue _fun0009 }
case 64:
                    var2 = _closure1_slot39;
                    var3 = undefined;
                    var6 = var2.bind(var3)(var7);
                    var2 = _closure1_slot33;
                    var2 = var2.indices;
                    var2 = var2[var6];
                    var5 = null;
                    if(!(var5 == var2)) { _fun0009_ip = 42; continue _fun0009 }
case 65:
                    var2 = _closure1_slot29;
case 42:
                    var8 = _closure1_slot54;
                    var8 = var8.bind(var3)(var2);
                    if(var8) { _fun0009_ip = 66; continue _fun0009 }
case 67:
                    var8 = var2.fetchState;
                    var8 = var8.fetching;
                    if(var8) { _fun0009_ip = 68; continue _fun0009 }
case 69:
                    return var2;
case 68:
                    var2 = var2.fetchState;
                    var2 = var2.promise;
                    SaveGenerator(address=97);
case 70:
                    return var2;
case 71:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=7);
                    if(var8) { _fun0009_ip = 72; continue _fun0009 }
case 73:
                    var8 = _closure1_slot33;
                    var8 = var8.indices;
                    var8 = var8[var6];
                    if(!(var5 == var8)) { _fun0009_ip = 74; continue _fun0009 }
case 75:
                    var8 = _closure1_slot29;
case 74:
                    return var8;
case 72:
                    return var2;
case 66:
                    var2 = _closure1_slot44;
                    var2 = var2.bind(var3)(var7);
                    SaveGenerator(address=144);
case 53:
                    return var2;
case 76:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(var3) { _fun0009_ip = 77; continue _fun0009 }
case 78:
                    var3 = _closure1_slot33;
                    var3 = var3.indices;
                    var3 = var3[var6];
                    if(!(var5 == var3)) { _fun0009_ip = 79; continue _fun0009 }
case 80:
                    var3 = _closure1_slot29;
case 79:
                    return var3;
case 77:
                    return var2;
case 63:
                    return var1;
                }
            };
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot43 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot43 = var1;
    var1 = function updateIndexAndFetchApplicationCommandIndex() {
        var1 = undefined;
        var4 = _closure1_slot45;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot44 = var1;
    var1 = function _updateIndexAndFetchApplicationCommandIndex() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot10;
        var3 = function* (arg1) {
            var1 = function* anon_0_(arg1) {
                _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
                    StartGenerator();
                    var7 = arg1;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0010_ip = 81; continue _fun0010 }
case 64:
                    var2 = global;
                    var2 = var2.AbortController;
                    var3 = var2.prototype;
                    var3 = Object.create(var3, {constructor: {value: var2}});
                    var16 = var3;
                    var2 = new var16[var2](var15);
                    var6 = var2 instanceof Object ? var2 : var3;
                    var5 = _closure1_slot0;
                    var8 = _closure1_slot3;
                    var2 = 18;
                    var2 = var8[var2];
                    var3 = undefined;
                    var2 = var5.bind(var3)(var2);
                    var2 = var2.Future;
                    var9 = var2.prototype;
                    var9 = Object.create(var9, {constructor: {value: var2}});
                    var16 = var9;
                    var2 = new var16[var2](var15);
                    var2 = var2 instanceof Object ? var2 : var9;
                    var10 = _closure1_slot40;
                    var9 = {};
                    var11 = {};
                    var4 = true;
                    var11['fetching'] = var4;
                    var11['abort'] = var6;
                    var12 = var2.promise;
                    var11['promise'] = var12;
                    var9['fetchState'] = var11;
                    var4 = var10.bind(var3)(var7, var9, var4);
                    var4 = 19;
                    var4 = var8[var4];
                    var5 = var5.bind(var3)(var4);
                    var4 = var5.fetchApplicationCommandIndex;
                    var6 = var4.bind(var5)(var7, var6);
                    var5 = var6.then;
                    var4 = var2.resolve;
                    var5 = var5.bind(var6)(var4);
                    var4 = var5.catch;
                    var2 = var2.reject;
                    var2 = var4.bind(var5)(var2);
                    SaveGenerator(address=196);
case 82:
                    return var2;
case 83:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(var4) { _fun0010_ip = 26; continue _fun0010 }
case 84:
                    return var3;
case 26:
                    return var2;
case 81:
                    return var1;
                }
            };
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot45 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot45 = var1;
    var24 = function handleFetchSuccess(arg1) {
        _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
            var3 = arg1;
            var7 = arguments[1];
            var2 = undefined;
            if(!(var7 === var2)) { _fun0011_ip = 39; continue _fun0011 }
case 36:
            var7 = false;
case 39:
            var _closure2_slot0 = var2;
            var6 = var3.target;
            var5 = var3.index;
            var9 = _closure1_slot17;
            var4 = var9.getCurrentUser;
            var9 = var4.bind(var9)();
            var4 = null;
            var10 = var4 == var9;
            var20 = undefined;
            if(var10) { _fun0011_ip = 67; continue _fun0011 }
case 85:
            var20 = var9.id;
case 67:
            _closure2_slot0 = var20;
            if(!(var4 != var20)) { _fun0011_ip = 86; continue _fun0011 }
case 4:
            var11 = {};
            var10 = {};
            var9 = global;
            var9 = var9.Set;
            var12 = var9.prototype;
            var12 = Object.create(var12, {constructor: {value: var9}});
            var32 = var12;
            var9 = new var32[var9](var31);
            var17 = var9 instanceof Object ? var9 : var12;
            var12 = _closure1_slot37;
            var9 = var5.applications;
            var19 = var12.bind(var2)(var9);
            var12 = var19.bind(var2)();
            var9 = var12.done;
            var18 = 'permissions';
            var16 = 'botId';
            var15 = 21;
            var14 = 20;
            var13 = var12;
            var12 = undefined;
            if(var9) { _fun0011_ip = 87; continue _fun0011 }
case 88:
            var9 = var13.value;
            var21 = var9.bot;
            if(!(var4 == var21)) { _fun0011_ip = 89; continue _fun0011 }
case 90:
            var21 = var9.bot_id;
            if(!(var4 == var21)) { _fun0011_ip = 91; continue _fun0011 }
case 89:
            var22 = var9.bot;
            var21 = var12;
            if(!(var4 != var22)) { _fun0011_ip = 92; continue _fun0011 }
case 93:
            var22 = var9.bot;
            var23 = var22.id;
            var22 = var9.id;
            var10[var23] = var22;
            var21 = var12;
            _fun0011_ip = 92; continue _fun0011;
case 91:
            var23 = var9.bot_id;
            var22 = var9.id;
            var10[var23] = var22;
            var24 = _closure1_slot17;
            var23 = var24.getUser;
            var22 = var9.bot_id;
            var22 = var23.bind(var24)(var22);
            if(!(var4 == var22)) { _fun0011_ip = 94; continue _fun0011 }
case 95:
            var24 = var17.add;
            var23 = var9.bot_id;
            var23 = var24.bind(var17)(var23);
            var21 = var22;
            _fun0011_ip = 92; continue _fun0011;
case 94:
            var9['bot'] = var22;
            var21 = var22;
case 92:
            var22 = {};
            var23 = {};
            var25 = _closure1_slot0;
            var24 = _closure1_slot3;
            var24 = var24[var14];
            var26 = var25.bind(var2)(var24);
            var25 = var26.getApplicationCommandSection;
            var24 = _closure1_slot56;
            var24 = var24.bind(var2)(var9);
            var30 = var25.bind(var26)(var24);
            var31 = var23;
            var24 = copyDataProperties(var31, var30);
            var24 = var9.permissions;
            var25 = var4 != var24;
            var24 = undefined;
            if(!var25) { _fun0011_ip = 96; continue _fun0011 }
case 97:
            var26 = _closure1_slot0;
            var25 = _closure1_slot3;
            var25 = var25[var15];
            var27 = var26.bind(var2)(var25);
            var26 = var27.keyPermissions;
            var28 = _closure1_slot59;
            var25 = var9.permissions;
            var25 = var28.bind(var2)(var25, var20);
            var24 = var26.bind(var27)(var25);
case 96:
            var23[var18] = var24;
            var24 = var9.bot_id;
            var23[var16] = var24;
            var22['descriptor'] = var23;
            var23 = {};
            var22['commands'] = var23;
            var9 = var9.id;
            var11[var9] = var22;
            var22 = var19.bind(var2)();
            var9 = var22.done;
            var13 = var22;
            var12 = var21;
            if(!var9) { _fun0011_ip = 88; continue _fun0011 }
case 87:
            var12 = var6.type;
            var9 = 'guild';
            var9 = var9 === var12;
            if(!var9) { _fun0011_ip = 98; continue _fun0011 }
case 99:
            var13 = var17.size;
            var12 = 0;
            var9 = var13 > var12;
case 98:
            if(!var9) { _fun0011_ip = 100; continue _fun0011 }
case 101:
            var12 = _closure1_slot1;
            var13 = _closure1_slot3;
            var9 = 22;
            var9 = var13[var9];
            var15 = var12.bind(var2)(var9);
            var13 = var15.requestMembersById;
            var12 = var6.guildId;
            var9 = new Array(0);
            var29 = 0;
            var31 = var9;
            var30 = var17;
            var16 = arraySpread(var31, var30, var29);
            var9 = var13.bind(var15)(var12, var9);
case 100:
            var9 = _closure1_slot37;
            var13 = _closure1_slot0;
            var12 = _closure1_slot3;
            var12 = var12[var14];
            var14 = var13.bind(var2)(var12);
            var13 = var14.buildApplicationCommands;
            var15 = var5.application_commands;
            var12 = var15.map;
            var8 = function(arg1) {
                _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
case 0:
                    var2 = arg1;
                    var7 = _closure2_slot0;
                    var1 = {};
                    var11 = var1;
                    var10 = var2;
                    var3 = copyDataProperties(var11, var10);
                    var3 = var2.description_default;
                    var4 = null;
                    if(!(var4 == var3)) { _fun0012_ip = 102; continue _fun0012 }
case 103:
                    var3 = var2.description;
case 102:
                    var6 = var4 != var3;
                    var5 = '';
                    if(!var6) { _fun0012_ip = 104; continue _fun0012 }
case 105:
                    var5 = var3;
case 104:
                    var3 = 'description';
                    var1[var3] = var5;
                    var5 = var2.dm_permission;
                    var3 = 'dm_permission';
                    var1[var3] = var5;
                    var5 = var2.name_default;
                    if(!(var4 == var5)) { _fun0012_ip = 106; continue _fun0012 }
case 107:
                    var5 = var2.name;
case 106:
                    var3 = 'name';
                    var1[var3] = var5;
                    var9 = var2.options;
                    var3 = var4 == var9;
                    var6 = undefined;
                    var5 = undefined;
                    if(var3) { _fun0012_ip = 108; continue _fun0012 }
case 51:
                    var8 = var9.map;
                    var3 = _closure1_slot57;
                    var5 = var8.bind(var9)(var3);
case 108:
                    if(!(var4 == var5)) { _fun0012_ip = 53; continue _fun0012 }
case 109:
                    var5 = new Array(0);
case 53:
                    var3 = 'options';
                    var1[var3] = var5;
                    var3 = var2.permissions;
                    var3 = var4 != var3;
                    var4 = undefined;
                    if(!var3) { _fun0012_ip = 110; continue _fun0012 }
case 111:
                    var5 = _closure1_slot59;
                    var3 = var2.permissions;
                    var4 = var5.bind(var6)(var3, var7);
case 110:
                    var3 = 'permissions';
                    var1[var3] = var4;
                    var4 = var2.description;
                    var3 = var2.description_default;
                    if(!(var4 !== var3)) { _fun0012_ip = 112; continue _fun0012 }
case 113:
                    var3 = var2.description;
                    var1['description_localized'] = var3;
case 112:
                    var4 = var2.name;
                    var3 = var2.name_default;
                    if(!(var4 !== var3)) { _fun0012_ip = 114; continue _fun0012 }
case 115:
                    var2 = var2.name;
                    var1['name_localized'] = var2;
case 114:
                    return var1;
                }
            };
            var12 = var12.bind(var15)(var8);
            var8 = true;
            var8 = var13.bind(var14)(var12, var8);
            var13 = var9.bind(var2)(var8);
            var9 = var13.bind(var2)();
            var8 = var9.done;
            var12 = 'Command has no matching application';
            if(var8) { _fun0011_ip = 116; continue _fun0011 }
case 117:
            var15 = var9.value;
            var8 = var15.applicationId;
            var8 = var11[var8];
            if(!(var4 == var8)) { _fun0011_ip = 118; continue _fun0011 }
case 119:
            var16 = _closure1_slot23;
            var14 = var16.error;
            var14 = var14.bind(var16)(var12);
            _fun0011_ip = 120; continue _fun0011;
case 118:
            var14 = var8.commands;
            var8 = var15.id;
            var14[var8] = var15;
case 120:
            var14 = var13.bind(var2)();
            var8 = var14.done;
            var9 = var14;
            if(!var8) { _fun0011_ip = 117; continue _fun0011 }
case 116:
            var9 = var5.version;
            if(!(var4 == var9)) { _fun0011_ip = 121; continue _fun0011 }
case 122:
            var9 = _closure1_slot26;
case 121:
            var5 = _closure1_slot40;
            var4 = {};
            var4['serverVersion'] = var9;
            var8 = {};
            var8['sections'] = var11;
            var8['sectionIdsByBotId'] = var10;
            var8['version'] = var9;
            var4['result'] = var8;
            var8 = {};
            var9 = false;
            var8['fetching'] = var9;
            var4['fetchState'] = var8;
            var4 = var5.bind(var2)(var6, var4, var7);
            return var2;
case 86:
            var2 = _closure1_slot31;
            if(var2) { _fun0011_ip = 123; continue _fun0011 }
case 124:
            var2 = _closure1_slot32;
            var1 = var2.push;
            var1 = var1.bind(var2)(var3);
case 123:
            var1 = false;
            return var1;
        }
    };
    var _closure1_slot46 = var24;
    var1 = function updateGuildBotMembers(arg1, arg2) {
        _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
case 0:
            var4 = arg2;
            var6 = _closure1_slot39;
            var5 = {};
            var2 = 'guild';
            var5['type'] = var2;
            var2 = arg1;
            var5['guildId'] = var2;
            var2 = undefined;
            var5 = var6.bind(var2)(var5);
            var3 = _closure1_slot33;
            var3 = var3.indices;
            var5 = var3[var5];
            var3 = null;
            var6 = var3 == var5;
            if(var6) { _fun0013_ip = 125; continue _fun0013 }
case 126:
            var2 = var5.result;
case 125:
            var _closure2_slot0 = var2;
            if(!(var3 != var2)) { _fun0013_ip = 127; continue _fun0013 }
case 128:
            var2 = false;
            var _closure2_slot1 = var2;
            var3 = var4.forEach;
            var2 = function(arg1) {
                _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
case 0:
                    var1 = arg1;
                    var7 = var1.user;
                    var1 = var7.bot;
                    if(!var1) { _fun0014_ip = 115; continue _fun0014 }
case 33:
                    var1 = _closure2_slot0;
                    var3 = var1.sectionIdsByBotId;
                    var1 = var7.id;
                    var3 = var3[var1];
                    var8 = null;
                    if(!(var8 != var3)) { _fun0014_ip = 115; continue _fun0014 }
case 42:
                    var1 = _closure2_slot0;
                    var1 = var1.sections;
                    var3 = var1[var3];
                    var9 = _closure1_slot1;
                    var6 = _closure1_slot3;
                    var4 = 23;
                    var10 = var6[var4];
                    var5 = undefined;
                    var12 = var9.bind(var5)(var10);
                    var11 = var8 != var3;
                    var10 = 'Bot has no matching index section';
                    var10 = var12.bind(var5)(var11, var10);
                    var4 = var6[var4];
                    var9 = var9.bind(var5)(var4);
                    var4 = var3.descriptor;
                    var4 = var4.application;
                    var8 = var8 != var4;
                    var4 = "Bot's index section has no application info";
                    var4 = var9.bind(var5)(var8, var4);
                    var4 = _closure1_slot0;
                    var1 = 20;
                    var1 = var6[var1];
                    var5 = var4.bind(var5)(var1);
                    var4 = var5.getApplicationCommandSection;
                    var1 = {};
                    var6 = var3.descriptor;
                    var13 = var6.application;
                    var14 = var1;
                    var6 = copyDataProperties(var14, var13);
                    var6 = 'bot';
                    var1[var6] = var7;
                    var4 = var4.bind(var5)(var1);
                    var1 = {};
                    var13 = var3.descriptor;
                    var14 = var1;
                    var5 = copyDataProperties(var14, var13);
                    var14 = var1;
                    var13 = var4;
                    var4 = copyDataProperties(var14, var13);
                    var3['descriptor'] = var1;
                    var1 = true;
                    _closure2_slot1 = var1;
case 115:
                    var1 = undefined;
                    return var1;
                }
            };
            var2 = var3.bind(var4)(var2);
            var1 = _closure2_slot1;
            return var1;
case 127:
            var1 = false;
            return var1;
        }
    };
    var _closure1_slot47 = var1;
    var12 = function handleStaleUserIndex() {
        var4 = _closure1_slot40;
        var3 = {};
        var2 = 'user';
        var3['type'] = var2;
        var2 = {};
        var1 = _closure1_slot25;
        var2['serverVersion'] = var1;
        var1 = undefined;
        var2 = var4.bind(var1)(var3, var2);
        return var1;
    };
    var7 = function useContextIndexState(arg1, arg2, arg3) {
        var8 = arg1;
        var7 = arg2;
        var9 = arg3;
        var _closure2_slot0 = var8;
        var _closure2_slot1 = var7;
        var _closure2_slot2 = var9;
        var5 = _closure1_slot11;
        var4 = var5.useState;
        var1 = true;
        var6 = var4.bind(var5)(var1);
        var4 = _closure1_slot4;
        var5 = undefined;
        var1 = 2;
        var4 = var4.bind(var5)(var6, var1);
        var1 = 0;
        var6 = var4[var1];
        var _closure2_slot3 = var6;
        var1 = 1;
        var1 = var4[var1];
        var _closure2_slot4 = var1;
        var4 = _closure1_slot0;
        var10 = _closure1_slot3;
        var1 = 28;
        var1 = var10[var1];
        var10 = var4.bind(var5)(var1);
        var5 = var10.useStateFromStoresObject;
        var1 = _closure1_slot33;
        var4 = new Array(1);
        var4[0] = var1;
        var1 = function() {
            _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
case 0:
                var1 = _closure2_slot0;
                var3 = var1.type;
                var1 = 'channel';
                if(!(var1 !== var3)) { _fun0015_ip = 102; continue _fun0015 }
case 33:
                var3 = _closure1_slot33;
                var1 = var3.getUserState;
                var1 = var1.bind(var3)();
                _fun0015_ip = 11; continue _fun0015;
case 102:
                var4 = _closure1_slot33;
                var3 = var4.getContextState;
                var2 = _closure2_slot0;
                var1 = var3.bind(var4)(var2);
case 11:
                return var1;
            }
        };
        var1 = var5.bind(var10)(var4, var1);
        var _closure2_slot5 = var1;
        var5 = _closure1_slot11;
        var4 = var5.useEffect;
        var3 = new Array(5);
        var3[0] = var1;
        var3[1] = var9;
        var3[2] = var8;
        var3[3] = var7;
        var3[4] = var6;
        var2 = function() {
            _fun0016: for(var _fun0016_ip = 0; ; ) switch(_fun0016_ip) {
case 0:
                var2 = _closure2_slot3;
                if(!var2) { _fun0016_ip = 129; continue _fun0016 }
case 64:
                var2 = _closure2_slot0;
                var3 = var2.type;
                var2 = 'contextless';
                if(!(var2 === var3)) { _fun0016_ip = 130; continue _fun0016 }
case 43:
                var2 = _closure2_slot2;
                if(!var2) { _fun0016_ip = 131; continue _fun0016 }
case 102:
                var5 = _closure1_slot54;
                var4 = _closure2_slot5;
                var3 = undefined;
                var2 = var5.bind(var3)(var4);
case 131:
                if(!var2) { _fun0016_ip = 129; continue _fun0016 }
case 67:
                var4 = _closure1_slot0;
                var3 = _closure1_slot3;
                var2 = 19;
                var3 = var3[var2];
                var2 = undefined;
                var4 = var4.bind(var2)(var3);
                var3 = var4.requestApplicationCommandIndex;
                var2 = {};
                var5 = 'user';
                var2['type'] = var5;
                var2 = var3.bind(var4)(var2);
                _fun0016_ip = 129; continue _fun0016;
case 130:
                var2 = _closure2_slot2;
                if(!var2) { _fun0016_ip = 132; continue _fun0016 }
case 133:
                var2 = _closure2_slot1;
                if(!var2) { _fun0016_ip = 134; continue _fun0016 }
case 66:
                var5 = _closure1_slot53;
                var3 = _closure2_slot0;
                var4 = var3.channel;
                var3 = undefined;
                var2 = var5.bind(var3)(var4);
case 134:
                if(!var2) { _fun0016_ip = 132; continue _fun0016 }
case 135:
                var5 = _closure1_slot1;
                var4 = _closure1_slot3;
                var3 = 25;
                var3 = var4[var3];
                var4 = undefined;
                var9 = var5.bind(var4)(var3);
                var8 = var9.track;
                var3 = _closure1_slot21;
                var7 = var3.APPLICATION_COMMAND_CACHE_FETCH;
                var3 = {};
                var6 = _closure2_slot5;
                var10 = var6.result;
                var5 = null;
                var10 = var5 == var10;
                var3['miss'] = var10;
                var10 = global;
                var12 = var10.Object;
                var11 = var12.keys;
                var10 = _closure1_slot33;
                var10 = var10.indices;
                var10 = var11.bind(var12)(var10);
                var10 = var10.length;
                var3['size'] = var10;
                var3 = var8.bind(var9)(var7, var3);
                var3 = _closure1_slot54;
                var3 = var3.bind(var4)(var6);
                if(!var3) { _fun0016_ip = 132; continue _fun0016 }
case 136:
                var3 = _closure2_slot0;
                var3 = var3.channel;
                var3 = var3.guild_id;
                if(!(var5 == var3)) { _fun0016_ip = 137; continue _fun0016 }
case 138:
                var5 = _closure1_slot0;
                var6 = _closure1_slot3;
                var3 = 19;
                var3 = var6[var3];
                var6 = var5.bind(var4)(var3);
                var5 = var6.requestApplicationCommandIndex;
                var3 = {};
                var7 = 'channel';
                var3['type'] = var7;
                var7 = _closure2_slot0;
                var7 = var7.channel;
                var7 = var7.id;
                var3['channelId'] = var7;
                var3 = var5.bind(var6)(var3);
                _fun0016_ip = 132; continue _fun0016;
case 137:
                var3 = _closure1_slot0;
                var5 = _closure1_slot3;
                var2 = 19;
                var2 = var5[var2];
                var4 = var3.bind(var4)(var2);
                var3 = var4.requestApplicationCommandIndex;
                var2 = {};
                var5 = 'guild';
                var2['type'] = var5;
                var5 = _closure2_slot0;
                var5 = var5.channel;
                var5 = var5.guild_id;
                var2['guildId'] = var5;
                var2 = var3.bind(var4)(var2);
case 132:
                var3 = _closure2_slot4;
                var2 = undefined;
                var1 = false;
                var1 = var3.bind(var2)(var1);
case 129:
                var1 = undefined;
                return var1;
            }
        };
        var2 = var4.bind(var5)(var2, var3);
        return var1;
    };
    var _closure1_slot48 = var7;
    var6 = function useUserIndexState(arg1, arg2) {
        var7 = arg1;
        var8 = arg2;
        var _closure2_slot0 = var7;
        var _closure2_slot1 = var8;
        var5 = _closure1_slot11;
        var4 = var5.useState;
        var1 = true;
        var6 = var4.bind(var5)(var1);
        var4 = _closure1_slot4;
        var5 = undefined;
        var1 = 2;
        var4 = var4.bind(var5)(var6, var1);
        var1 = 0;
        var6 = var4[var1];
        var _closure2_slot2 = var6;
        var1 = 1;
        var1 = var4[var1];
        var _closure2_slot3 = var1;
        var4 = _closure1_slot0;
        var9 = _closure1_slot3;
        var1 = 28;
        var1 = var9[var1];
        var9 = var4.bind(var5)(var1);
        var5 = var9.useStateFromStoresObject;
        var1 = _closure1_slot33;
        var4 = new Array(1);
        var4[0] = var1;
        var1 = function() {
            var2 = _closure1_slot33;
            var1 = var2.getUserState;
            var1 = var1.bind(var2)();
            return var1;
        };
        var1 = var5.bind(var9)(var4, var1);
        var _closure2_slot4 = var1;
        var5 = _closure1_slot11;
        var4 = var5.useEffect;
        var3 = new Array(4);
        var3[0] = var1;
        var3[1] = var8;
        var3[2] = var7;
        var3[3] = var6;
        var2 = function() {
            _fun0017: for(var _fun0017_ip = 0; ; ) switch(_fun0017_ip) {
case 0:
                var2 = _closure2_slot2;
                if(!var2) { _fun0017_ip = 139; continue _fun0017 }
case 140:
                var2 = _closure2_slot1;
                if(!var2) { _fun0017_ip = 141; continue _fun0017 }
case 46:
                var5 = _closure1_slot54;
                var4 = _closure2_slot4;
                var3 = undefined;
                var2 = var5.bind(var3)(var4);
case 141:
                if(!var2) { _fun0017_ip = 142; continue _fun0017 }
case 143:
                var2 = _closure2_slot0;
case 142:
                if(!var2) { _fun0017_ip = 144; continue _fun0017 }
case 61:
                var4 = _closure1_slot0;
                var3 = _closure1_slot3;
                var2 = 19;
                var3 = var3[var2];
                var2 = undefined;
                var4 = var4.bind(var2)(var3);
                var3 = var4.requestApplicationCommandIndex;
                var2 = {};
                var5 = 'user';
                var2['type'] = var5;
                var2 = var3.bind(var4)(var2);
case 144:
                var3 = _closure2_slot3;
                var2 = undefined;
                var1 = false;
                var1 = var3.bind(var2)(var1);
case 139:
                var1 = undefined;
                return var1;
            }
        };
        var2 = var4.bind(var5)(var2, var3);
        return var1;
    };
    var _closure1_slot49 = var6;
    var5 = function useQueryState(arg1, arg2, arg3) {
        _fun0018: for(var _fun0018_ip = 0; ; ) switch(_fun0018_ip) {
case 0:
            var5 = arg1;
            var11 = arg2;
            var9 = arg3;
            var _closure2_slot0 = var11;
            var _closure2_slot1 = var9;
            var3 = var5.type;
            var14 = undefined;
            var2 = 'channel';
            var7 = undefined;
            if(!(var2 === var3)) { _fun0018_ip = 145; continue _fun0018 }
case 146:
            var7 = var5.channel;
case 145:
            var4 = _closure1_slot0;
            var6 = _closure1_slot3;
            var3 = 24;
            var3 = var6[var3];
            var6 = var4.bind(var14)(var3);
            var4 = var6.usePermissionContext;
            var3 = var11.commandTypes;
            var12 = var4.bind(var6)(var7, var3);
            var _closure2_slot2 = var12;
            var4 = var11.applicationCommands;
            var3 = false;
            var10 = var3 !== var4;
            var _closure2_slot3 = var10;
            var4 = _closure1_slot48;
            var3 = var9.allowFetch;
            var8 = var4.bind(var14)(var5, var10, var3);
            var _closure2_slot4 = var8;
            var4 = _closure1_slot49;
            var3 = var9.allowFetch;
            var7 = var4.bind(var14)(var10, var3);
            var _closure2_slot5 = var7;
            var3 = function useApplicationIndexStates() {
                var4 = _closure1_slot0;
                var3 = _closure1_slot3;
                var2 = 28;
                var3 = var3[var2];
                var2 = undefined;
                var4 = var4.bind(var2)(var3);
                var3 = var4.useStateFromStores;
                var1 = _closure1_slot33;
                var2 = new Array(1);
                var2[0] = var1;
                var1 = function() {
                    var2 = _closure1_slot33;
                    var1 = var2.getApplicationStates;
                    var1 = var1.bind(var2)();
                    return var1;
                };
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            };
            var6 = var3.bind(var14)();
            var _closure2_slot6 = var6;
            var3 = function useApplicationIndexStatesVersion() {
                var4 = _closure1_slot0;
                var3 = _closure1_slot3;
                var2 = 28;
                var3 = var3[var2];
                var2 = undefined;
                var4 = var4.bind(var2)(var3);
                var3 = var4.useStateFromStores;
                var1 = _closure1_slot33;
                var2 = new Array(1);
                var2[0] = var1;
                var1 = function() {
                    var1 = _closure1_slot33;
                    var1 = var1.applicationIndicesVersion;
                    return var1;
                };
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            };
            var5 = var3.bind(var14)();
            var13 = var9.applicationId;
            var4 = var9.allowFetch;
            var3 = function useMaybeFetchApplicationIndex(arg1, arg2) {
                var8 = arg1;
                var9 = arg2;
                var _closure3_slot0 = var8;
                var _closure3_slot1 = var9;
                var5 = _closure1_slot11;
                var4 = var5.useState;
                var1 = true;
                var6 = var4.bind(var5)(var1);
                var5 = _closure1_slot4;
                var1 = undefined;
                var4 = 2;
                var5 = var5.bind(var1)(var6, var4);
                var4 = 0;
                var6 = var5[var4];
                var _closure3_slot2 = var6;
                var4 = 1;
                var4 = var5[var4];
                var _closure3_slot3 = var4;
                var5 = _closure1_slot0;
                var7 = _closure1_slot3;
                var4 = 28;
                var4 = var7[var4];
                var10 = var5.bind(var1)(var4);
                var7 = var10.useStateFromStores;
                var4 = _closure1_slot33;
                var5 = new Array(1);
                var5[0] = var4;
                var4 = function() {
                    var3 = _closure1_slot33;
                    var2 = var3.getApplicationState;
                    var1 = _closure3_slot0;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var7 = var7.bind(var10)(var5, var4);
                var _closure3_slot4 = var7;
                var5 = _closure1_slot11;
                var4 = var5.useEffect;
                var3 = new Array(4);
                var3[0] = var9;
                var3[1] = var8;
                var3[2] = var7;
                var3[3] = var6;
                var2 = function() {
                    _fun0019: for(var _fun0019_ip = 0; ; ) switch(_fun0019_ip) {
case 0:
                        var2 = _closure3_slot2;
                        if(!var2) { _fun0019_ip = 147; continue _fun0019 }
case 140:
                        var2 = _closure3_slot1;
                        if(!var2) { _fun0019_ip = 141; continue _fun0019 }
case 46:
                        var5 = _closure1_slot54;
                        var4 = _closure3_slot4;
                        var3 = undefined;
                        var2 = var5.bind(var3)(var4);
case 141:
                        if(!var2) { _fun0019_ip = 148; continue _fun0019 }
case 143:
                        var4 = _closure3_slot0;
                        var3 = null;
                        var2 = var3 != var4;
case 148:
                        if(!var2) { _fun0019_ip = 52; continue _fun0019 }
case 42:
                        var4 = _closure1_slot0;
                        var3 = _closure1_slot3;
                        var2 = 19;
                        var3 = var3[var2];
                        var2 = undefined;
                        var4 = var4.bind(var2)(var3);
                        var3 = var4.requestApplicationCommandIndex;
                        var2 = {};
                        var5 = 'application';
                        var2['type'] = var5;
                        var5 = _closure3_slot0;
                        var2['applicationId'] = var5;
                        var2 = var3.bind(var4)(var2);
case 52:
                        var3 = _closure3_slot3;
                        var2 = undefined;
                        var1 = false;
                        var1 = var3.bind(var2)(var1);
case 147:
                        var1 = undefined;
                        return var1;
                    }
                };
                var2 = var4.bind(var5)(var2, var3);
                return var1;
            };
            var3 = var3.bind(var14)(var13, var4);
            var4 = _closure1_slot11;
            var3 = var4.useMemo;
            var2 = new Array(14);
            var2[0] = var12;
            var12 = var11.text;
            var2[1] = var12;
            var11 = var11.builtIns;
            var2[2] = var11;
            var2[3] = var10;
            var10 = var9.scoreMethod;
            var2[4] = var10;
            var10 = var9.allowEmptySections;
            var2[5] = var10;
            var10 = var9.sortOptions;
            var2[6] = var10;
            var10 = var9.allowApplicationState;
            var2[7] = var10;
            var10 = var9.applicationId;
            var2[8] = var10;
            var9 = var9.installOnDemand;
            var2[9] = var9;
            var2[10] = var8;
            var2[11] = var7;
            var2[12] = var6;
            var2[13] = var5;
            var1 = function() {
                _fun0020: for(var _fun0020_ip = 0; ; ) switch(_fun0020_ip) {
case 0:
                    var3 = _closure1_slot51;
                    var2 = {};
                    var4 = _closure2_slot2;
                    var2['permissionContext'] = var4;
                    var4 = _closure2_slot0;
                    var5 = var4.text;
                    var2['text'] = var5;
                    var5 = _closure2_slot3;
                    var2['allowApplicationCommands'] = var5;
                    var4 = var4.builtIns;
                    var2['builtIns'] = var4;
                    var4 = _closure2_slot1;
                    var5 = var4.scoreMethod;
                    var2['scoreMethod'] = var5;
                    var5 = var4.allowEmptySections;
                    var2['allowEmptySections'] = var5;
                    var5 = _closure2_slot4;
                    var2['contextState'] = var5;
                    var5 = _closure2_slot5;
                    var2['userState'] = var5;
                    var4 = var4.allowApplicationState;
                    if(var4) { _fun0020_ip = 149; continue _fun0020 }
case 150:
                    var4 = global;
                    var4 = var4.Map;
                    var5 = var4.prototype;
                    var5 = Object.create(var5, {constructor: {value: var4}});
                    var7 = var5;
                    var4 = new var7[var4](var6);
                    var4 = var4 instanceof Object ? var4 : var5;
                    _fun0020_ip = 151; continue _fun0020;
case 149:
                    var4 = _closure2_slot6;
case 151:
                    var2['applicationStates'] = var4;
                    var1 = _closure2_slot1;
                    var4 = var1.sortOptions;
                    var2['sortOptions'] = var4;
                    var4 = var1.applicationId;
                    var2['singleApplicationId'] = var4;
                    var1 = var1.installOnDemand;
                    var2['installOnDemand'] = var1;
                    var1 = undefined;
                    var1 = var3.bind(var1)(var2);
                    return var1;
                }
            };
            var1 = var3.bind(var4)(var1, var2);
            return var1;
        }
    };
    var _closure1_slot50 = var5;
    var1 = function queryIndex(arg1) {
        _fun0021: for(var _fun0021_ip = 0; ; ) switch(_fun0021_ip) {
case 0:
            var1 = arg1;
            var16 = var1.permissionContext;
            var3 = var1.contextState;
            var6 = var1.userState;
            var9 = var1.applicationStates;
            var2 = var1.text;
            var24 = var1.builtIns;
            var4 = undefined;
            if(!(var24 === var4)) { _fun0021_ip = 68; continue _fun0021 }
case 6:
            var8 = _closure1_slot0;
            var10 = _closure1_slot3;
            var7 = 27;
            var7 = var10[var7];
            var7 = var8.bind(var4)(var7);
            var7 = var7.BuiltInCommandFilter;
            var24 = var7.ALLOW;
case 68:
            var10 = var1.allowApplicationCommands;
            if(!(var10 === var4)) { _fun0021_ip = 152; continue _fun0021 }
case 144:
            var10 = true;
case 152:
            var8 = var1.singleApplicationId;
            var12 = var1.allowEmptySections;
            if(!(var12 === var4)) { _fun0021_ip = 153; continue _fun0021 }
case 154:
            var12 = false;
case 153:
            var13 = var1.scoreMethod;
            if(!(var13 === var4)) { _fun0021_ip = 155; continue _fun0021 }
case 75:
            var11 = _closure1_slot0;
            var14 = _closure1_slot3;
            var7 = 27;
            var7 = var14[var7];
            var7 = var11.bind(var4)(var7);
            var7 = var7.ScoreMethod;
            var13 = var7.NONE;
case 155:
            var _closure2_slot0 = var13;
            var11 = var1.sortOptions;
            if(!(var11 === var4)) { _fun0021_ip = 156; continue _fun0021 }
case 90:
            var11 = _closure1_slot34;
case 156:
            var _closure2_slot1 = var11;
            var14 = var1.installOnDemand;
            if(!(var14 === var4)) { _fun0021_ip = 93; continue _fun0021 }
case 157:
            var14 = false;
case 93:
            var _closure2_slot2 = var4;
            var23 = var16.commandTypes;
            var7 = null;
            var1 = var7 == var2;
            var20 = undefined;
            if(var1) { _fun0021_ip = 158; continue _fun0021 }
case 159:
            var1 = var2.toLowerCase;
            var20 = var1.bind(var2)();
case 158:
            var1 = var7 == var20;
            var19 = undefined;
            if(var1) { _fun0021_ip = 27; continue _fun0021 }
case 160:
            var2 = var20.split;
            var1 = ' ';
            var19 = var2.bind(var20)(var1);
case 27:
            var18 = _closure1_slot0;
            var17 = _closure1_slot3;
            var15 = 27;
            var2 = var17[var15];
            var2 = var18.bind(var4)(var2);
            var2 = var2.BuiltInCommandFilter;
            var2 = var2.ONLY_TEXT;
            var17 = var17[var15];
            var17 = var18.bind(var4)(var17);
            var17 = var17.BuiltInCommandFilter;
            var17 = var17.DENY;
            if(!(var24 === var17)) { _fun0021_ip = 161; continue _fun0021 }
case 162:
            var18 = new Array(0);
            _fun0021_ip = 163; continue _fun0021;
case 161:
            var21 = _closure1_slot0;
            var22 = _closure1_slot3;
            var17 = 31;
            var17 = var22[var17];
            var22 = var21.bind(var4)(var17);
            var21 = var22.getBuiltInCommands;
            var17 = true;
            var2 = var24 === var2;
            var18 = var21.bind(var22)(var23, var17, var2);
case 163:
            var2 = new Array(0);
            var17 = {};
            var17['permissionContext'] = var16;
            var17['query'] = var20;
            var17['splitQuery'] = var19;
            var17['allowEmptySections'] = var12;
            var17['scoreMethod'] = var13;
            var17['installOnDemand'] = var14;
            var14 = var3.result;
            var19 = var7 == var14;
            var28 = undefined;
            if(var19) { _fun0021_ip = 164; continue _fun0021 }
case 165:
            var28 = var14.sections;
case 164:
            if(!(var7 == var28)) { _fun0021_ip = 166; continue _fun0021 }
case 167:
            var28 = {};
case 166:
            var14 = var6.result;
            var19 = var7 == var14;
            var27 = undefined;
            if(var19) { _fun0021_ip = 168; continue _fun0021 }
case 169:
            var27 = var14.sections;
case 168:
            if(!(var7 == var27)) { _fun0021_ip = 170; continue _fun0021 }
case 171:
            var27 = {};
case 170:
            var26 = global;
            var14 = var26.Set;
            var19 = var14.prototype;
            var19 = Object.create(var19, {constructor: {value: var14}});
            var51 = var19;
            var14 = new var51[var14](var50);
            var20 = var14 instanceof Object ? var14 : var19;
            if(!var10) { _fun0021_ip = 172; continue _fun0021 }
case 173:
            var10 = var16.hasBaseAccessPermissions;
            if(!var10) { _fun0021_ip = 174; continue _fun0021 }
case 175:
            var21 = var28;
            for(var10 in var21)
case 176:
            {
case 177:
                var24 = var10;
                var25 = var28[var24];
                var23 = var7 != var8;
                if(!var23) { _fun0021_ip = 178; continue _fun0021 }
case 179:
                var25 = var25.descriptor;
                var25 = var25.id;
                var23 = var25 !== var8;
case 178:
                if(var23) { _fun0021_ip = 176; continue _fun0021 }
case 180:
                var23 = var20.add;
                var23 = var23.bind(var20)(var24);
                _fun0021_ip = 176; continue _fun0021;
            }
case 174:
            var21 = var27;
            for(var10 in var21)
case 181:
            {
case 182:
                var24 = var10;
                var25 = var27[var24];
                var23 = var7 != var8;
                if(!var23) { _fun0021_ip = 183; continue _fun0021 }
case 184:
                var25 = var25.descriptor;
                var25 = var25.id;
                var23 = var25 !== var8;
case 183:
                if(var23) { _fun0021_ip = 181; continue _fun0021 }
case 185:
                var23 = var20.add;
                var23 = var23.bind(var20)(var24);
                _fun0021_ip = 181; continue _fun0021;
            }
case 172:
            var10 = var26.Map;
            var14 = var10.prototype;
            var14 = Object.create(var14, {constructor: {value: var10}});
            var51 = var14;
            var10 = new var51[var10](var50);
            var25 = var10 instanceof Object ? var10 : var14;
            var10 = _closure1_slot37;
            var31 = var10.bind(var4)(var9);
            var19 = var31.bind(var4)();
            var10 = var19.done;
            var14 = 0;
            var30 = 2;
            var29 = 1;
            var24 = var19;
            var23 = undefined;
            var22 = undefined;
            var21 = undefined;
            var19 = undefined;
            if(var10) { _fun0021_ip = 186; continue _fun0021 }
case 187:
            var32 = var24.value;
            var10 = _closure1_slot4;
            var10 = var10.bind(var4)(var32, var30);
            var34 = var10[var14];
            var10 = var10[var29];
            if(!(var7 != var8)) { _fun0021_ip = 188; continue _fun0021 }
case 189:
            var33 = var21;
            var32 = var19;
            if(!(var34 === var8)) { _fun0021_ip = 190; continue _fun0021 }
case 188:
            var37 = var10.result;
            var10 = var7 == var37;
            var36 = undefined;
            if(var10) { _fun0021_ip = 191; continue _fun0021 }
case 192:
            var36 = var37.sections;
case 191:
            var23 = var37;
            var22 = var36;
            var33 = var21;
            var32 = var19;
            if(!(var7 != var36)) { _fun0021_ip = 190; continue _fun0021 }
case 193:
            var34 = var26.Object;
            var10 = var34.keys;
            var35 = var10.bind(var34)(var36);
            var10 = var35.length;
            var10 = var14 < var10;
            var34 = 0;
            var23 = var37;
            var22 = var36;
            var33 = 0;
            var32 = var35;
            if(!var10) { _fun0021_ip = 190; continue _fun0021 }
case 194:
            var39 = var35[var34];
            var10 = var20.add;
            var10 = var10.bind(var20)(var39);
            var38 = var25.set;
            var10 = var36[var39];
            var10 = var38.bind(var25)(var39, var10);
            var34 = var34 + 1;
            var10 = var35.length;
            var23 = var37;
            var22 = var36;
            var32 = var35;
            var33 = var34;
            if(var33 < var10) { _fun0021_ip = 194; continue _fun0021 }
case 190:
            var34 = var31.bind(var4)();
            var10 = var34.done;
            var21 = var33;
            var19 = var32;
            var24 = var34;
            if(!var10) { _fun0021_ip = 187; continue _fun0021 }
case 186:
            var19 = var26.Array;
            var10 = var19.from;
            var24 = var10.bind(var19)(var20);
            var10 = var24.length;
            var10 = var14 < var10;
            var23 = 23;
            var22 = 'Failed to select application descriptor';
            var21 = 'Failed to select list of application commands';
            var20 = 0;
            var19 = undefined;
            if(!var10) { _fun0021_ip = 195; continue _fun0021 }
case 196:
            var29 = var24[var20];
            var42 = var28[var29];
            var41 = var27[var29];
            var10 = var25.get;
            var10 = var10.bind(var25)(var29);
            var33 = var7 != var42;
            var32 = var7 != var41;
            if(!(var7 != var42)) { _fun0021_ip = 197; continue _fun0021 }
case 198:
            if(!(var7 == var41)) { _fun0021_ip = 199; continue _fun0021 }
case 197:
            if(!(var7 == var42)) { _fun0021_ip = 200; continue _fun0021 }
case 201:
            if(!(var7 == var41)) { _fun0021_ip = 202; continue _fun0021 }
case 203:
            var34 = var7 != var10;
            var31 = undefined;
            var30 = undefined;
            var29 = var19;
            if(!var34) { _fun0021_ip = 204; continue _fun0021 }
case 205:
            var31 = var10.descriptor;
            var36 = var26.Object;
            var35 = var36.values;
            var10 = var10.commands;
            var30 = var35.bind(var36)(var10);
            var29 = var19;
            _fun0021_ip = 204; continue _fun0021;
case 202:
            var31 = var41.descriptor;
            var36 = var26.Object;
            var35 = var36.values;
            var10 = var41.commands;
            var30 = var35.bind(var36)(var10);
            var29 = var19;
            _fun0021_ip = 204; continue _fun0021;
case 200:
            var31 = var42.descriptor;
            var36 = var26.Object;
            var35 = var36.values;
            var10 = var42.commands;
            var30 = var35.bind(var36)(var10);
            var29 = var19;
            _fun0021_ip = 204; continue _fun0021;
case 199:
            var40 = var41.descriptor;
            var39 = new Array(0);
            var36 = var41.commands;
            for(var10 in var36)
case 206:
            {
case 207:
                var43 = var10;
                var38 = var41.commands;
                var43 = var38[var43];
                var38 = var39.push;
                var38 = var38.bind(var39)(var43);
                _fun0021_ip = 206; continue _fun0021;
            }
case 208:
            var37 = var42.commands;
            var10 = var19;
            var31 = var40;
            var30 = var39;
            var29 = var10;
            for(var34 in var37)
case 209:
            {
                var29 = var10;
                var31 = var40;
                var30 = var39;
case 210:
                var43 = var34;
                var44 = var41.commands;
                var44 = var43 in var44;
                var10 = var43;
                if(var44) { _fun0021_ip = 209; continue _fun0021 }
case 211:
                var44 = var42.commands;
                var45 = var44[var43];
                var44 = var39.push;
                var44 = var44.bind(var39)(var45);
                var10 = var43;
                _fun0021_ip = 209; continue _fun0021;
            }
case 204:
            var34 = _closure1_slot1;
            var10 = _closure1_slot3;
            var35 = var10[var23];
            var36 = var34.bind(var4)(var35);
            var35 = var7 != var31;
            var35 = var36.bind(var4)(var35, var22);
            var10 = var10[var23];
            var34 = var34.bind(var4)(var10);
            var10 = var7 != var30;
            var10 = var34.bind(var4)(var10, var21);
            var10 = _closure1_slot52;
            var51 = undefined;
            var50 = var31;
            var49 = var30;
            var48 = var33;
            var47 = var32;
            var46 = var17;
            var30 = var51[var10](var50, var49, var48, var47, var46, var45);
            if(!(var7 != var30)) { _fun0021_ip = 212; continue _fun0021 }
case 213:
            var10 = var2.push;
            var10 = var10.bind(var2)(var30);
case 212:
            var20 = var20 + 1;
            var10 = var24.length;
            var19 = var29;
            if(var20 < var10) { _fun0021_ip = 196; continue _fun0021 }
case 195:
            var10 = var11.applications;
            var10 = var10.useFrecency;
            if(!var10) { _fun0021_ip = 214; continue _fun0021 }
case 215:
            var19 = _closure1_slot0;
            var20 = _closure1_slot3;
            var10 = 32;
            var10 = var20[var10];
            var10 = var19.bind(var4)(var10);
            var19 = var10.FrecencyUserSettingsActionCreators;
            var10 = var19.loadIfNecessary;
            var10 = var10.bind(var19)();
case 214:
            var19 = var2.sort;
            var10 = function(arg1, arg2) {
                _fun0022: for(var _fun0022_ip = 0; ; ) switch(_fun0022_ip) {
case 0:
                    var6 = arg1;
                    var5 = arg2;
                    var1 = _closure2_slot1;
                    var1 = var1.applications;
                    var1 = var1.useScore;
                    if(!var1) { _fun0022_ip = 80; continue _fun0022 }
case 216:
                    var4 = _closure2_slot0;
                    var7 = _closure1_slot0;
                    var2 = _closure1_slot3;
                    var1 = 27;
                    var2 = var2[var1];
                    var1 = undefined;
                    var2 = var7.bind(var1)(var2);
                    var2 = var2.ScoreMethod;
                    var2 = var2.APPLICATION_ONLY;
                    if(!(var4 === var2)) { _fun0022_ip = 80; continue _fun0022 }
case 217:
                    var2 = var6.data;
                    var8 = 0;
                    var7 = var2[var8];
                    var4 = null;
                    var9 = var4 == var7;
                    var2 = undefined;
                    if(var9) { _fun0022_ip = 139; continue _fun0022 }
case 60:
                    var2 = var7.score;
case 139:
                    if(!(var4 == var2)) { _fun0022_ip = 218; continue _fun0022 }
case 219:
                    var7 = global;
                    var7 = var7.Number;
                    var2 = var7.MAX_VALUE;
case 218:
                    var7 = var5.data;
                    var7 = var7[var8];
                    var8 = var4 == var7;
                    var1 = undefined;
                    if(var8) { _fun0022_ip = 220; continue _fun0022 }
case 221:
                    var1 = var7.score;
case 220:
                    if(!(var4 == var1)) { _fun0022_ip = 222; continue _fun0022 }
case 78:
                    var4 = global;
                    var4 = var4.Number;
                    var1 = var4.MAX_VALUE;
case 222:
                    if(!(var2 === var1)) { _fun0022_ip = 223; continue _fun0022 }
case 80:
                    var3 = _closure2_slot1;
                    var3 = var3.applications;
                    var3 = var3.useFrecency;
                    if(!var3) { _fun0022_ip = 224; continue _fun0022 }
case 23:
                    var8 = _closure1_slot12;
                    var7 = var8.getScoreWithoutLoadingLatest;
                    var4 = var6.section;
                    var4 = var4.id;
                    var4 = var7.bind(var8)(var4);
                    var8 = _closure1_slot12;
                    var7 = var8.getScoreWithoutLoadingLatest;
                    var3 = var5.section;
                    var3 = var3.id;
                    var3 = var7.bind(var8)(var3);
                    if(!(var4 === var3)) { _fun0022_ip = 136; continue _fun0022 }
case 224:
                    var8 = _closure1_slot61;
                    var6 = var6.section;
                    var7 = var6.name;
                    var5 = var5.section;
                    var6 = var5.name;
                    var5 = undefined;
                    var5 = var8.bind(var5)(var7, var6);
                    return var5;
case 136:
                    var3 = var3 - var4;
                    return var3;
case 223:
                    var1 = var2 - var1;
                    return var1;
                }
            };
            var10 = var19.bind(var2)(var10);
            var10 = var18.length;
            if(!(!(var10 > var14))) { _fun0021_ip = 225; continue _fun0021 }
case 226:
            var10 = true;
            if(!(var10 === var12)) { _fun0021_ip = 227; continue _fun0021 }
case 225:
            var14 = _closure1_slot52;
            var12 = _closure1_slot0;
            var19 = _closure1_slot3;
            var10 = 31;
            var10 = var19[var10];
            var10 = var12.bind(var4)(var10);
            var12 = var10.BUILT_IN_SECTIONS;
            var10 = _closure1_slot19;
            var10 = var10.BUILT_IN;
            var50 = var12[var10];
            var51 = undefined;
            var49 = var18;
            var48 = true;
            var47 = true;
            var46 = var17;
            var12 = var51[var14](var50, var49, var48, var47, var46, var45);
            if(!(var7 != var12)) { _fun0021_ip = 227; continue _fun0021 }
case 228:
            var10 = var2.push;
            var10 = var10.bind(var2)(var12);
case 227:
            var12 = var2.flatMap;
            var10 = function(arg1) {
                var2 = arg1;
                var _closure3_slot0 = var2;
                var3 = var2.data;
                var2 = var3.map;
                var1 = function(arg1) {
                    var1 = {};
                    var4 = arg1;
                    var5 = var1;
                    var2 = copyDataProperties(var5, var4);
                    var2 = _closure3_slot0;
                    var3 = var2.section;
                    var2 = 'section';
                    var1[var2] = var3;
                    return var1;
                };
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var10 = var12.bind(var2)(var10);
            var14 = _closure1_slot0;
            var12 = _closure1_slot3;
            var12 = var12[var15];
            var12 = var14.bind(var4)(var12);
            var12 = var12.ScoreMethod;
            var12 = var12.COMMAND_ONLY;
            if(!(var13 !== var12)) { _fun0021_ip = 229; continue _fun0021 }
case 230:
            var14 = _closure1_slot0;
            var12 = _closure1_slot3;
            var12 = var12[var15];
            var12 = var14.bind(var4)(var12);
            var12 = var12.ScoreMethod;
            var12 = var12.COMMAND_OR_APPLICATION;
            if(!(var13 === var12)) { _fun0021_ip = 231; continue _fun0021 }
case 229:
            var13 = var16.context;
            var15 = _closure1_slot16;
            var14 = var15.getGuild;
            var17 = var7 == var16;
            var12 = undefined;
            if(var17) { _fun0021_ip = 232; continue _fun0021 }
case 233:
            var16 = var16.context;
            var17 = var7 == var16;
            var12 = undefined;
            if(var17) { _fun0021_ip = 232; continue _fun0021 }
case 234:
            var12 = var16.guild_id;
case 232:
            var12 = var14.bind(var15)(var12);
            var11 = var11.commands;
            var11 = var11.useFrecency;
            if(!var11) { _fun0021_ip = 235; continue _fun0021 }
case 236:
            var11 = _closure1_slot0;
            var14 = _closure1_slot3;
            var1 = 32;
            var1 = var14[var1];
            var1 = var11.bind(var4)(var1);
            var11 = var1.FrecencyUserSettingsActionCreators;
            var1 = var11.loadIfNecessary;
            var1 = var1.bind(var11)();
case 235:
            var11 = var7 != var13;
            var1 = undefined;
            if(!var11) { _fun0021_ip = 237; continue _fun0021 }
case 238:
            var11 = {};
            var11['channel'] = var13;
            var11['guild'] = var12;
            var1 = var11;
case 237:
            _closure2_slot2 = var1;
            var11 = var10.sort;
            var1 = function(arg1, arg2) {
                _fun0023: for(var _fun0023_ip = 0; ; ) switch(_fun0023_ip) {
case 0:
                    var6 = arg1;
                    var5 = arg2;
                    var1 = _closure2_slot1;
                    var1 = var1.commands;
                    var1 = var1.useScore;
                    if(!var1) { _fun0023_ip = 3; continue _fun0023 }
case 38:
                    var4 = var6.score;
                    var7 = null;
                    var8 = var7 != var4;
                    var1 = 0;
                    if(!var8) { _fun0023_ip = 148; continue _fun0023 }
case 61:
                    var1 = var4;
case 148:
                    var4 = var5.score;
                    var7 = var7 != var4;
                    var2 = 0;
                    if(!var7) { _fun0023_ip = 239; continue _fun0023 }
case 67:
                    var2 = var4;
case 239:
                    if(!(var1 === var2)) { _fun0023_ip = 21; continue _fun0023 }
case 3:
                    var4 = _closure2_slot1;
                    var4 = var4.commands;
                    var4 = var4.useFrecency;
                    if(!var4) { _fun0023_ip = 240; continue _fun0023 }
case 241:
                    var9 = _closure1_slot18;
                    var8 = var9.getScoreWithoutLoadingLatest;
                    var4 = _closure2_slot2;
                    var4 = var8.bind(var9)(var4, var6);
                    var8 = _closure1_slot18;
                    var7 = var8.getScoreWithoutLoadingLatest;
                    var3 = _closure2_slot2;
                    var3 = var7.bind(var8)(var3, var5);
                    if(!(var4 === var3)) { _fun0023_ip = 18; continue _fun0023 }
case 240:
                    var8 = _closure1_slot61;
                    var7 = var6.displayName;
                    var6 = var5.displayName;
                    var5 = undefined;
                    var5 = var8.bind(var5)(var7, var6);
                    return var5;
case 18:
                    var3 = var3 - var4;
                    return var3;
case 21:
                    var1 = var1 - var2;
                    return var1;
                }
            };
            var1 = var11.bind(var10)(var1);
case 231:
            var1 = {};
            var1['commands'] = var10;
            var10 = var2.map;
            var5 = function(arg1) {
                var1 = arg1;
                var1 = var1.section;
                return var1;
            };
            var5 = var10.bind(var2)(var5);
            var1['descriptors'] = var5;
            var1['sectionedCommands'] = var2;
            var5 = var7 == var3;
            var2 = undefined;
            if(var5) { _fun0021_ip = 242; continue _fun0021 }
case 243:
            var3 = var3.fetchState;
            var2 = var3.fetching;
case 242:
            var5 = true;
            var2 = var5 === var2;
            if(var2) { _fun0021_ip = 244; continue _fun0021 }
case 245:
            var10 = var7 == var6;
            var3 = undefined;
            if(var10) { _fun0021_ip = 246; continue _fun0021 }
case 247:
            var6 = var6.fetchState;
            var3 = var6.fetching;
case 246:
            var2 = var5 === var3;
case 244:
            if(var2) { _fun0021_ip = 248; continue _fun0021 }
case 249:
            var3 = var7 != var8;
            if(!var3) { _fun0021_ip = 250; continue _fun0021 }
case 251:
            var6 = var9.get;
            var6 = var6.bind(var9)(var8);
            var7 = var7 == var6;
            var4 = undefined;
            if(var7) { _fun0021_ip = 252; continue _fun0021 }
case 253:
            var6 = var6.fetchState;
            var4 = var6.fetching;
case 252:
            var3 = var5 === var4;
case 250:
            var2 = var3;
case 248:
            var1['loading'] = var2;
            return var1;
        }
    };
    var _closure1_slot51 = var1;
    var1 = function queryIndexSection(arg1, arg2, arg3, arg4, arg5) {
        _fun0024: for(var _fun0024_ip = 0; ; ) switch(_fun0024_ip) {
case 0:
            var4 = arg1;
            var19 = arg3;
            var17 = arg4;
            var1 = arg5;
            var18 = var1.query;
            var12 = var1.splitQuery;
            var2 = var1.allowEmptySections;
            var6 = var1.scoreMethod;
            var16 = var1.permissionContext;
            var15 = var1.installOnDemand;
            var10 = var16.context;
            var20 = var16.userId;
            var13 = var16.roleIds;
            var11 = var16.isImpersonating;
            var1 = null;
            var5 = var1 == var10;
            var8 = undefined;
            var3 = undefined;
            if(var5) { _fun0024_ip = 254; continue _fun0024 }
case 255:
            var3 = var10.guild_id;
case 254:
            var3 = var1 != var3;
            var14 = null;
            if(!var3) { _fun0024_ip = 256; continue _fun0024 }
case 71:
            var5 = _closure1_slot2;
            var7 = _closure1_slot3;
            var3 = 33;
            var3 = var7[var3];
            var9 = var5.bind(var8)(var3);
            var7 = var9.computeAllowedForUser;
            var29 = var4.permissions;
            var28 = var10.guild_id;
            var30 = var9;
            var27 = var20;
            var26 = var13;
            var25 = var11;
            var14 = var30[var7](var29, var28, var27, var26, var25, var24);
case 256:
            var5 = var1 == var10;
            var3 = undefined;
            if(var5) { _fun0024_ip = 49; continue _fun0024 }
case 257:
            var3 = var10.guild_id;
case 49:
            var3 = var1 != var3;
            var13 = null;
            if(!var3) { _fun0024_ip = 258; continue _fun0024 }
case 259:
            var5 = _closure1_slot2;
            var7 = _closure1_slot3;
            var3 = 33;
            var3 = var7[var3];
            var9 = var5.bind(var8)(var3);
            var7 = var9.computeAllowedForChannel;
            var5 = var4.permissions;
            var3 = var10.guild_id;
            var13 = var7.bind(var9)(var5, var10, var3);
case 258:
            var10 = new Array(0);
            var7 = _closure1_slot37;
            var3 = arg2;
            var11 = var7.bind(var8)(var3);
            var7 = var11.bind(var8)();
            var3 = var7.done;
            var9 = 33;
            if(var3) { _fun0024_ip = 260; continue _fun0024 }
case 261:
            var20 = var7.value;
            var21 = _closure1_slot2;
            var3 = _closure1_slot3;
            var3 = var3[var9];
            var22 = var21.bind(var8)(var3);
            var21 = var22.hasAccess;
            var3 = {};
            var3['applicationAllowedForUser'] = var14;
            var3['applicationAllowedForChannel'] = var13;
            var23 = var4.botId;
            var3['commandBotId'] = var23;
            var3['isGuildInstalled'] = var19;
            var23 = var17;
            if(var23) { _fun0024_ip = 262; continue _fun0024 }
case 263:
            var23 = var15;
case 262:
            var3['isUserInstalled'] = var23;
            var21 = var21.bind(var22)(var20, var16, var3);
            var22 = _closure1_slot0;
            var3 = _closure1_slot3;
            var3 = var3[var9];
            var3 = var22.bind(var8)(var3);
            var3 = var3.HasAccessResult;
            var3 = var3.ALLOWED;
            if(!(var21 === var3)) { _fun0024_ip = 264; continue _fun0024 }
case 265:
            var3 = var10.push;
            var3 = var3.bind(var10)(var20);
case 264:
            var20 = var11.bind(var8)();
            var3 = var20.done;
            var7 = var20;
            if(!var3) { _fun0024_ip = 261; continue _fun0024 }
case 260:
            var7 = _closure1_slot0;
            var3 = _closure1_slot3;
            var9 = 27;
            var3 = var3[var9];
            var3 = var7.bind(var8)(var3);
            var3 = var3.ScoreMethod;
            var7 = var3.NONE;
            var3 = var10;
            if(!(var6 !== var7)) { _fun0024_ip = 266; continue _fun0024 }
case 171:
            var3 = var10;
            if(!(var1 != var18)) { _fun0024_ip = 266; continue _fun0024 }
case 267:
            var3 = var10;
            if(!(var1 != var12)) { _fun0024_ip = 266; continue _fun0024 }
case 268:
            var17 = new Array(0);
            var11 = _closure1_slot0;
            var7 = _closure1_slot3;
            var7 = var7[var9];
            var7 = var11.bind(var8)(var7);
            var7 = var7.ScoreMethod;
            var7 = var7.APPLICATION_ONLY;
            if(!(var6 !== var7)) { _fun0024_ip = 269; continue _fun0024 }
case 270:
            var11 = _closure1_slot0;
            var7 = _closure1_slot3;
            var7 = var7[var9];
            var7 = var11.bind(var8)(var7);
            var7 = var7.ScoreMethod;
            var7 = var7.COMMAND_OR_APPLICATION;
            var16 = undefined;
            if(!(var6 === var7)) { _fun0024_ip = 271; continue _fun0024 }
case 269:
            var11 = var4.name;
            var7 = var11.toLocaleLowerCase;
            var11 = var7.bind(var11)();
            var7 = var11.startsWith;
            var7 = var7.bind(var11)(var18);
            if(var7) { _fun0024_ip = 272; continue _fun0024 }
case 273:
            var7 = var11.includes;
            var7 = var7.bind(var11)(var18);
            if(var7) { _fun0024_ip = 118; continue _fun0024 }
case 274:
            var7 = var4.application;
            var11 = var1 == var7;
            var13 = undefined;
            if(var11) { _fun0024_ip = 117; continue _fun0024 }
case 275:
            var11 = var7.description;
            var7 = var1 == var11;
            var13 = undefined;
            if(var7) { _fun0024_ip = 117; continue _fun0024 }
case 276:
            var7 = var11.toLocaleLowerCase;
            var13 = var7.bind(var11)();
case 117:
            var7 = var1 != var13;
            if(!var7) { _fun0024_ip = 277; continue _fun0024 }
case 278:
            var11 = var13.includes;
            var7 = var11.bind(var13)(var18);
case 277:
            var16 = undefined;
            if(!var7) { _fun0024_ip = 271; continue _fun0024 }
case 279:
            var7 = _closure1_slot35;
            var16 = var7.SECTION_DESCRIPTION_CONTAINS;
            _fun0024_ip = 271; continue _fun0024;
case 118:
            var7 = _closure1_slot35;
            var16 = var7.SECTION_NAME_CONTAINS;
            _fun0024_ip = 271; continue _fun0024;
case 272:
            var7 = _closure1_slot35;
            var16 = var7.SECTION_NAME_STARTS_WITH;
case 271:
            var7 = 0;
            var15 = var12[var7];
            var11 = var12.slice;
            var7 = 1;
            var12 = var11.bind(var12)(var7);
            var11 = var12.join;
            var7 = ' ';
            var14 = var11.bind(var12)(var7);
            var7 = _closure1_slot37;
            var13 = var7.bind(var8)(var10);
            var10 = var13.bind(var8)();
            var7 = var10.done;
            var12 = 'score';
            var11 = var8 !== var16;
            var3 = var17;
            if(var7) { _fun0024_ip = 266; continue _fun0024 }
case 280:
            var21 = var10.value;
            var19 = _closure1_slot0;
            var7 = _closure1_slot3;
            var7 = var7[var9];
            var7 = var19.bind(var8)(var7);
            var7 = var7.ScoreMethod;
            var7 = var7.COMMAND_ONLY;
            var7 = var6 !== var7;
            if(!var7) { _fun0024_ip = 281; continue _fun0024 }
case 282:
            var20 = _closure1_slot0;
            var19 = _closure1_slot3;
            var19 = var19[var9];
            var19 = var20.bind(var8)(var19);
            var19 = var19.ScoreMethod;
            var19 = var19.COMMAND_OR_APPLICATION;
            var7 = var6 !== var19;
case 281:
            var20 = undefined;
            if(var7) { _fun0024_ip = 283; continue _fun0024 }
case 284:
            var7 = _closure1_slot60;
            var30 = undefined;
            var29 = var21;
            var28 = var18;
            var27 = var15;
            var26 = var14;
            var20 = var30[var7](var29, var28, var27, var26, var25);
case 283:
            var7 = var8 === var20;
            if(var7) { _fun0024_ip = 285; continue _fun0024 }
case 286:
            var19 = var11;
            if(!var19) { _fun0024_ip = 287; continue _fun0024 }
case 190:
            var19 = var16 < var20;
case 287:
            var7 = var19;
case 285:
            if(!var7) { _fun0024_ip = 288; continue _fun0024 }
case 289:
            var20 = var16;
case 288:
            if(!(var8 !== var20)) { _fun0024_ip = 290; continue _fun0024 }
case 291:
            var19 = var17.push;
            var7 = {};
            var29 = var7;
            var28 = var21;
            var21 = copyDataProperties(var29, var28);
            var7[var12] = var20;
            var7 = var19.bind(var17)(var7);
case 290:
            var19 = var13.bind(var8)();
            var7 = var19.done;
            var10 = var19;
            var3 = var17;
            if(!var7) { _fun0024_ip = 280; continue _fun0024 }
case 266:
            var10 = var3.length;
            var7 = 0;
            if(!(var7 === var10)) { _fun0024_ip = 292; continue _fun0024 }
case 293:
            var1 = null;
            if(!var2) { _fun0024_ip = 294; continue _fun0024 }
case 292:
            var7 = _closure1_slot0;
            var2 = _closure1_slot3;
            var2 = var2[var9];
            var2 = var7.bind(var8)(var2);
            var2 = var2.ScoreMethod;
            var2 = var2.NONE;
            var2 = var6 !== var2;
            if(!var2) { _fun0024_ip = 295; continue _fun0024 }
case 296:
            var7 = _closure1_slot0;
            var5 = _closure1_slot3;
            var5 = var5[var9];
            var5 = var7.bind(var8)(var5);
            var5 = var5.ScoreMethod;
            var5 = var5.APPLICATION_ONLY;
            var2 = var6 !== var5;
case 295:
            if(var2) { _fun0024_ip = 297; continue _fun0024 }
case 298:
            var5 = var3.sort;
            var2 = function(arg1, arg2) {
                var4 = _closure1_slot61;
                var1 = arg1;
                var3 = var1.displayName;
                var1 = arg2;
                var2 = var1.displayName;
                var1 = undefined;
                var1 = var4.bind(var1)(var3, var2);
                return var1;
            };
            var2 = var5.bind(var3)(var2);
case 297:
            var2 = {};
            var2['section'] = var4;
            var2['data'] = var3;
            var1 = var2;
case 294:
            return var1;
        }
    };
    var _closure1_slot52 = var1;
    var1 = function channelSupportsContextCommands(arg1) {
        _fun0025: for(var _fun0025_ip = 0; ; ) switch(_fun0025_ip) {
case 0:
            var8 = arg1;
            var5 = null;
            var2 = var5 == var8;
            var1 = undefined;
            if(var2) { _fun0025_ip = 299; continue _fun0025 }
case 36:
            var1 = var8.guild_id;
case 299:
            var1 = var5 != var1;
            if(var1) { _fun0025_ip = 127; continue _fun0025 }
case 300:
            var6 = var8.type;
            var2 = _closure1_slot22;
            var2 = var2.DM;
            var2 = var6 === var2;
            if(!var2) { _fun0025_ip = 71; continue _fun0025 }
case 42:
            var7 = _closure1_slot17;
            var6 = var7.getUser;
            var3 = var8.getRecipientId;
            var3 = var3.bind(var8)();
            var3 = var6.bind(var7)(var3);
            var5 = var5 == var3;
            var4 = undefined;
            if(var5) { _fun0025_ip = 144; continue _fun0025 }
case 301:
            var4 = var3.bot;
case 144:
            var3 = true;
            var2 = var3 === var4;
case 71:
            var1 = var2;
case 127:
            return var1;
        }
    };
    var _closure1_slot53 = var1;
    var1 = function shouldFetch(arg1) {
        _fun0026: for(var _fun0026_ip = 0; ; ) switch(_fun0026_ip) {
case 0:
            var3 = arg1;
            var2 = _closure1_slot55;
            var1 = undefined;
            var2 = var2.bind(var1)(var3);
            var1 = !var2;
            if(!var2) { _fun0026_ip = 141; continue _fun0026 }
case 35:
            var2 = var3.fetchState;
            var1 = var2.fetching;
case 141:
            var1 = !var1;
            if(!var1) { _fun0026_ip = 60; continue _fun0026 }
case 145:
            var2 = var3.fetchState;
            var4 = var2.retryAfter;
            var2 = null;
            var2 = var2 == var4;
            if(var2) { _fun0026_ip = 70; continue _fun0026 }
case 302:
            var4 = global;
            var5 = var4.Date;
            var4 = var5.now;
            var4 = var4.bind(var5)();
            var3 = var3.fetchState;
            var3 = var3.retryAfter;
            var2 = var4 >= var3;
case 70:
            var1 = var2;
case 60:
            return var1;
        }
    };
    var _closure1_slot54 = var1;
    var4 = function isStale(arg1) {
        _fun0027: for(var _fun0027_ip = 0; ; ) switch(_fun0027_ip) {
case 0:
            var1 = arg1;
            var3 = var1.result;
            var2 = null;
            var4 = var2 == var3;
            var2 = undefined;
            if(var4) { _fun0027_ip = 300; continue _fun0027 }
case 33:
            var2 = var3.version;
case 300:
            var1 = var1.serverVersion;
            var1 = var2 !== var1;
            return var1;
        }
    };
    var _closure1_slot55 = var4;
    var1 = function toApplication(arg1) {
        var2 = arg1;
        var1 = {};
        var3 = var2.description;
        var1['description'] = var3;
        var3 = var2.icon;
        var1['icon'] = var3;
        var3 = var2.id;
        var1['id'] = var3;
        var3 = var2.name;
        var1['name'] = var3;
        var3 = var2.bot;
        var1['bot'] = var3;
        var2 = var2.flags;
        var1['flags'] = var2;
        return var1;
    };
    var _closure1_slot56 = var1;
    var1 = function toServerOption(arg1) {
        _fun0028: for(var _fun0028_ip = 0; ; ) switch(_fun0028_ip) {
case 0:
            var2 = arg1;
            var1 = {};
            var10 = var1;
            var9 = var2;
            var3 = copyDataProperties(var10, var9);
            var8 = var2.choices;
            var3 = null;
            var5 = var3 == var8;
            var6 = undefined;
            if(var5) { _fun0028_ip = 9; continue _fun0028 }
case 43:
            var7 = var8.map;
            var5 = _closure1_slot58;
            var6 = var7.bind(var8)(var5);
case 9:
            var5 = 'choices';
            var1[var5] = var6;
            var6 = var2.description_default;
            if(!(var3 == var6)) { _fun0028_ip = 128; continue _fun0028 }
case 303:
            var6 = var2.description;
case 128:
            var5 = 'description';
            var1[var5] = var6;
            var6 = var2.name_default;
            if(!(var3 == var6)) { _fun0028_ip = 71; continue _fun0028 }
case 106:
            var6 = var2.name;
case 71:
            var5 = 'name';
            var1[var5] = var6;
            var6 = var2.options;
            var3 = var3 == var6;
            var4 = undefined;
            if(var3) { _fun0028_ip = 149; continue _fun0028 }
case 54:
            var5 = var6.map;
            var3 = _closure1_slot57;
            var4 = var5.bind(var6)(var3);
case 149:
            var3 = 'options';
            var1[var3] = var4;
            var4 = var2.description;
            var3 = var2.description_default;
            if(!(var4 !== var3)) { _fun0028_ip = 79; continue _fun0028 }
case 304:
            var3 = var2.description;
            var1['description_localized'] = var3;
case 79:
            var4 = var2.name;
            var3 = var2.name_default;
            if(!(var4 !== var3)) { _fun0028_ip = 57; continue _fun0028 }
case 23:
            var2 = var2.name;
            var1['name_localized'] = var2;
case 57:
            return var1;
        }
    };
    var _closure1_slot57 = var1;
    var1 = function toServerChoice(arg1) {
        _fun0029: for(var _fun0029_ip = 0; ; ) switch(_fun0029_ip) {
case 0:
            var2 = arg1;
            var1 = {};
            var6 = var1;
            var5 = var2;
            var3 = copyDataProperties(var6, var5);
            var4 = var2.name_default;
            var3 = null;
            if(!(var3 == var4)) { _fun0029_ip = 43; continue _fun0029 }
case 305:
            var4 = var2.name;
case 43:
            var3 = 'name';
            var1[var3] = var4;
            var4 = var2.name;
            var3 = var2.name_default;
            if(!(var4 !== var3)) { _fun0029_ip = 34; continue _fun0029 }
case 32:
            var2 = var2.name;
            var1['name_localized'] = var2;
case 34:
            return var1;
        }
    };
    var _closure1_slot58 = var1;
    var1 = function toServerPermissions(arg1, arg2) {
        _fun0030: for(var _fun0030_ip = 0; ; ) switch(_fun0030_ip) {
case 0:
            var2 = arg1;
            var1 = new Array(0);
            var3 = var2.user;
            var4 = null;
            if(!(var4 != var3)) { _fun0030_ip = 254; continue _fun0030 }
case 306:
            var5 = var1.push;
            var3 = {};
            var8 = _closure1_slot0;
            var7 = _closure1_slot3;
            var6 = 34;
            var7 = var7[var6];
            var6 = undefined;
            var6 = var8.bind(var6)(var7);
            var6 = var6.ApplicationCommandPermissionType;
            var6 = var6.USER;
            var3['type'] = var6;
            var6 = arg2;
            var3['id'] = var6;
            var6 = var2.user;
            var3['permission'] = var6;
            var3 = var5.bind(var1)(var3);
case 254:
            var3 = var2.channels;
            if(!(var4 != var3)) { _fun0030_ip = 224; continue _fun0030 }
case 307:
            var3 = global;
            var6 = var3.Object;
            var5 = var6.entries;
            var3 = var2.channels;
            var12 = var5.bind(var6)(var3);
            var3 = var12.length;
            var11 = 0;
            var3 = var11 < var3;
            var9 = undefined;
            var8 = 2;
            var7 = 1;
            var6 = 34;
            var5 = 0;
            if(!var3) { _fun0030_ip = 224; continue _fun0030 }
case 155:
            var13 = var12[var5];
            var3 = _closure1_slot4;
            var3 = var3.bind(var9)(var13, var8);
            var15 = var3[var11];
            var14 = var3[var7];
            var13 = var1.push;
            var3 = {};
            var17 = _closure1_slot0;
            var16 = _closure1_slot3;
            var16 = var16[var6];
            var16 = var17.bind(var9)(var16);
            var16 = var16.ApplicationCommandPermissionType;
            var16 = var16.CHANNEL;
            var3['type'] = var16;
            var3['id'] = var15;
            var3['permission'] = var14;
            var3 = var13.bind(var1)(var3);
            var5 = var5 + 1;
            var3 = var12.length;
            if(var5 < var3) { _fun0030_ip = 155; continue _fun0030 }
case 224:
            var3 = var2.roles;
            if(!(var4 != var3)) { _fun0030_ip = 308; continue _fun0030 }
case 309:
            var3 = global;
            var4 = var3.Object;
            var3 = var4.entries;
            var2 = var2.roles;
            var10 = var3.bind(var4)(var2);
            var2 = var10.length;
            var9 = 0;
            var2 = var9 < var2;
            var7 = undefined;
            var6 = 2;
            var5 = 1;
            var4 = 34;
            var3 = 0;
            if(!var2) { _fun0030_ip = 308; continue _fun0030 }
case 310:
            var11 = var10[var3];
            var2 = _closure1_slot4;
            var2 = var2.bind(var7)(var11, var6);
            var13 = var2[var9];
            var12 = var2[var5];
            var11 = var1.push;
            var2 = {};
            var15 = _closure1_slot0;
            var14 = _closure1_slot3;
            var14 = var14[var4];
            var14 = var15.bind(var7)(var14);
            var14 = var14.ApplicationCommandPermissionType;
            var14 = var14.ROLE;
            var2['type'] = var14;
            var2['id'] = var13;
            var2['permission'] = var12;
            var2 = var11.bind(var1)(var2);
            var3 = var3 + 1;
            var2 = var10.length;
            if(var3 < var2) { _fun0030_ip = 310; continue _fun0030 }
case 308:
            return var1;
        }
    };
    var _closure1_slot59 = var1;
    var1 = function scoreCommand(arg1, arg2, arg3, arg4) {
        _fun0031: for(var _fun0031_ip = 0; ; ) switch(_fun0031_ip) {
case 0:
            var3 = arg1;
            var5 = arg2;
            var2 = arg3;
            var4 = arg4;
            var6 = var3.untranslatedName;
            var1 = var6.toLocaleLowerCase;
            var16 = var1.bind(var6)();
            var6 = var3.displayName;
            var1 = var6.toLocaleLowerCase;
            var15 = var1.bind(var6)();
            var1 = var16.startsWith;
            var1 = var1.bind(var16)(var5);
            if(var1) { _fun0031_ip = 311; continue _fun0031 }
case 40:
            var1 = var15.startsWith;
            var1 = var1.bind(var15)(var5);
            if(var1) { _fun0031_ip = 311; continue _fun0031 }
case 59:
            var1 = var16.startsWith;
            var1 = var1.bind(var16)(var2);
            if(!var1) { _fun0031_ip = 312; continue _fun0031 }
case 144:
            var1 = var16.split;
            var7 = ' ';
            var8 = var1.bind(var16)(var7);
            var6 = var8.slice;
            var1 = 1;
            var6 = var6.bind(var8)(var1);
            var1 = var6.join;
            var6 = var1.bind(var6)(var7);
            var1 = var6.startsWith;
            var1 = var1.bind(var6)(var4);
            if(var1) { _fun0031_ip = 313; continue _fun0031 }
case 312:
            var1 = var15.startsWith;
            var1 = var1.bind(var15)(var2);
            if(!var1) { _fun0031_ip = 314; continue _fun0031 }
case 315:
            var1 = var15.split;
            var6 = ' ';
            var7 = var1.bind(var15)(var6);
            var2 = var7.slice;
            var1 = 1;
            var2 = var2.bind(var7)(var1);
            var1 = var2.join;
            var2 = var1.bind(var2)(var6);
            var1 = var2.startsWith;
            var1 = var1.bind(var2)(var4);
            if(var1) { _fun0031_ip = 121; continue _fun0031 }
case 314:
            var1 = var16.includes;
            var1 = var1.bind(var16)(var5);
            if(var1) { _fun0031_ip = 316; continue _fun0031 }
case 317:
            var14 = null;
            if(!(var14 != var15)) { _fun0031_ip = 318; continue _fun0031 }
case 115:
            var1 = var15.includes;
            var1 = var1.bind(var15)(var5);
            if(var1) { _fun0031_ip = 316; continue _fun0031 }
case 318:
            var6 = _closure1_slot37;
            var4 = var3.options;
            if(!(var14 == var4)) { _fun0031_ip = 319; continue _fun0031 }
case 320:
            var4 = new Array(0);
case 319:
            var2 = undefined;
            var13 = var6.bind(var2)(var4);
            var7 = var13.bind(var2)();
            var6 = var7.done;
            var11 = global;
            var10 = '';
            var9 = ' ';
            var8 = var7;
            var7 = false;
            var4 = false;
            if(var6) { _fun0031_ip = 275; continue _fun0031 }
case 321:
            var6 = var8.value;
            var17 = var6.name;
            var19 = var6.serverLocalizedName;
            var6 = var17.startsWith;
            var6 = var6.bind(var17)(var5);
            if(var6) { _fun0031_ip = 322; continue _fun0031 }
case 10:
            var6 = var11.HermesInternal;
            var6 = var6.concat;
            var18 = var6.bind(var10)(var16, var9, var17);
            var6 = var18.startsWith;
            var6 = var6.bind(var18)(var5);
            if(var6) { _fun0031_ip = 322; continue _fun0031 }
case 323:
            if(!(var14 != var15)) { _fun0031_ip = 324; continue _fun0031 }
case 325:
            var6 = var11.HermesInternal;
            var6 = var6.concat;
            var18 = var6.bind(var10)(var15, var9, var17);
            var6 = var18.startsWith;
            var6 = var6.bind(var18)(var5);
            if(var6) { _fun0031_ip = 322; continue _fun0031 }
case 324:
            if(!(var14 != var19)) { _fun0031_ip = 326; continue _fun0031 }
case 327:
            var6 = var19.startsWith;
            var6 = var6.bind(var19)(var5);
            if(var6) { _fun0031_ip = 328; continue _fun0031 }
case 329:
            var6 = var11.HermesInternal;
            var6 = var6.concat;
            var18 = var6.bind(var10)(var16, var9, var19);
            var6 = var18.startsWith;
            var6 = var6.bind(var18)(var5);
            if(var6) { _fun0031_ip = 328; continue _fun0031 }
case 330:
            if(!(var14 != var15)) { _fun0031_ip = 326; continue _fun0031 }
case 331:
            var6 = var11.HermesInternal;
            var6 = var6.concat;
            var18 = var6.bind(var10)(var15, var9, var19);
            var6 = var18.startsWith;
            var6 = var6.bind(var18)(var5);
            if(var6) { _fun0031_ip = 328; continue _fun0031 }
case 326:
            var6 = var17.includes;
            var6 = var6.bind(var17)(var5);
            if(var6) { _fun0031_ip = 332; continue _fun0031 }
case 179:
            var17 = var14 != var19;
            if(!var17) { _fun0031_ip = 100; continue _fun0031 }
case 333:
            var18 = var19.includes;
            var17 = var18.bind(var19)(var5);
case 100:
            var6 = var17;
case 332:
            if(!var6) { _fun0031_ip = 334; continue _fun0031 }
case 335:
            var7 = true;
case 334:
            var18 = var13.bind(var2)();
            var6 = var18.done;
            var8 = var18;
            var4 = var7;
            if(var6) { _fun0031_ip = 275; continue _fun0031 }
case 336:
            _fun0031_ip = 321; continue _fun0031;
case 328:
            var6 = _closure1_slot35;
            var6 = var6.STARTS_WITH_COMMAND_OPTION_NAME_OR_OPTION_NAME;
            return var6;
case 322:
            var6 = _closure1_slot35;
            var6 = var6.STARTS_WITH_COMMAND_OPTION_NAME_OR_OPTION_NAME;
            return var6;
case 275:
            if(var4) { _fun0031_ip = 337; continue _fun0031 }
case 338:
            var6 = var3.untranslatedDescription;
            var4 = var6.toLocaleLowerCase;
            var6 = var4.bind(var6)();
            var4 = var3.displayDescription;
            var3 = var4.toLocaleLowerCase;
            var4 = var3.bind(var4)();
            var3 = var6.includes;
            var3 = var3.bind(var6)(var5);
            if(var3) { _fun0031_ip = 339; continue _fun0031 }
case 340:
            var3 = var4.includes;
            var3 = var3.bind(var4)(var5);
            var2 = undefined;
            if(!var3) { _fun0031_ip = 120; continue _fun0031 }
case 339:
            var3 = _closure1_slot35;
            var2 = var3.COMMAND_DESCRIPTION_CONTAINS;
case 120:
            return var2;
case 337:
            var1 = _closure1_slot35;
            var1 = var1.OPTION_NAME_CONTAINS;
            return var1;
case 316:
            var1 = _closure1_slot35;
            var1 = var1.COMMAND_NAME_CONTAINS;
            return var1;
case 121:
            var1 = _closure1_slot35;
            var1 = var1.STARTS_WITH_COMMAND_NAME;
            return var1;
case 313:
            var1 = _closure1_slot35;
            var1 = var1.STARTS_WITH_COMMAND_NAME;
            return var1;
case 311:
            var1 = _closure1_slot35;
            var1 = var1.COMMAND_NAME_STARTS_WITH;
            return var1;
        }
    };
    var _closure1_slot60 = var1;
    var1 = function compareNames(arg1, arg2) {
        var1 = _closure1_slot33;
        var4 = var1.collator;
        var3 = var4.compare;
        var2 = arg1;
        var1 = arg2;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var _closure1_slot61 = var1;
    var9 = global;
    var15 = var9.Object;
    var14 = var15.defineProperty;
    var8 = {};
    var28 = true;
    var8['value'] = var28;
    var1 = '__esModule';
    var1 = var14.bind(var15)(var3, var1, var8);
    var21 = 0;
    var8 = var11[var21];
    var1 = undefined;
    var8 = var22.bind(var1)(var8);
    var _closure1_slot4 = var8;
    var20 = 1;
    var8 = var11[var20];
    var8 = var22.bind(var1)(var8);
    var _closure1_slot5 = var8;
    var19 = 2;
    var8 = var11[var19];
    var8 = var22.bind(var1)(var8);
    var _closure1_slot6 = var8;
    var18 = 3;
    var8 = var11[var18];
    var8 = var22.bind(var1)(var8);
    var _closure1_slot7 = var8;
    var17 = 4;
    var8 = var11[var17];
    var8 = var22.bind(var1)(var8);
    var _closure1_slot8 = var8;
    var16 = 5;
    var8 = var11[var16];
    var8 = var22.bind(var1)(var8);
    var _closure1_slot9 = var8;
    var15 = 6;
    var8 = var11[var15];
    var8 = var22.bind(var1)(var8);
    var _closure1_slot10 = var8;
    var14 = 7;
    var8 = var11[var14];
    var8 = var13.bind(var1)(var8);
    var _closure1_slot11 = var8;
    var13 = 8;
    var8 = var11[var13];
    var8 = var22.bind(var1)(var8);
    var _closure1_slot12 = var8;
    var8 = 9;
    var8 = var11[var8];
    var8 = var22.bind(var1)(var8);
    var _closure1_slot13 = var8;
    var8 = 10;
    var8 = var11[var8];
    var8 = var22.bind(var1)(var8);
    var _closure1_slot14 = var8;
    var8 = 11;
    var8 = var11[var8];
    var8 = var22.bind(var1)(var8);
    var _closure1_slot15 = var8;
    var8 = 12;
    var8 = var11[var8];
    var8 = var22.bind(var1)(var8);
    var _closure1_slot16 = var8;
    var8 = 13;
    var8 = var11[var8];
    var8 = var22.bind(var1)(var8);
    var _closure1_slot17 = var8;
    var8 = 14;
    var8 = var11[var8];
    var8 = var22.bind(var1)(var8);
    var _closure1_slot18 = var8;
    var8 = 15;
    var8 = var11[var8];
    var8 = var10.bind(var1)(var8);
    var23 = var8.BuiltInSectionId;
    var _closure1_slot19 = var23;
    var8 = var8.DISCOVERY_COMMANDS_FRECENCY_LIMIT;
    var _closure1_slot20 = var8;
    var8 = 16;
    var8 = var11[var8];
    var8 = var10.bind(var1)(var8);
    var23 = var8.AnalyticEvents;
    var _closure1_slot21 = var23;
    var8 = var8.ChannelTypes;
    var _closure1_slot22 = var8;
    var8 = 17;
    var8 = var11[var8];
    var23 = var22.bind(var1)(var8);
    var8 = var23.prototype;
    var26 = Object.create(var8, {constructor: {value: var23}});
    var8 = 'ApplicationCommandIndexStore';
    var36 = var26;
    var35 = var8;
    var23 = new var36[var23](var35, var34);
    var23 = var23 instanceof Object ? var23 : var26;
    var _closure1_slot23 = var23;
    var26 = var9.Symbol;
    var23 = 'currentUser';
    var23 = var26.bind(var1)(var23);
    var _closure1_slot24 = var23;
    var26 = var9.Symbol;
    var23 = 'stale';
    var29 = var26.bind(var1)(var23);
    var _closure1_slot25 = var29;
    var26 = var9.Symbol;
    var23 = 'current';
    var31 = var26.bind(var1)(var23);
    var _closure1_slot26 = var31;
    var27 = var9.Object;
    var26 = var27.freeze;
    var23 = {};
    var30 = new Array(0);
    var23['descriptors'] = var30;
    var30 = new Array(0);
    var23['commands'] = var30;
    var30 = new Array(0);
    var23['sectionedCommands'] = var30;
    var23['loading'] = var28;
    var23 = var26.bind(var27)(var23);
    var _closure1_slot27 = var23;
    var28 = var9.Object;
    var27 = var28.freeze;
    var26 = {};
    var26['serverVersion'] = var31;
    var30 = {};
    var23 = false;
    var30['fetching'] = var23;
    var26['fetchState'] = var30;
    var30 = {};
    var32 = {};
    var30['sections'] = var32;
    var32 = {};
    var30['sectionIdsByBotId'] = var32;
    var30['version'] = var31;
    var26['result'] = var30;
    var26 = var27.bind(var28)(var26);
    var _closure1_slot28 = var26;
    var28 = var9.Object;
    var27 = var28.freeze;
    var26 = {};
    var26['serverVersion'] = var29;
    var29 = {};
    var29['fetching'] = var23;
    var26['fetchState'] = var29;
    var26 = var27.bind(var28)(var26);
    var _closure1_slot29 = var26;
    var26 = {'sensitivity': 'accent', 'numeric': true};
    var _closure1_slot30 = var26;
    var _closure1_slot31 = var23;
    var23 = new Array(0);
    var _closure1_slot32 = var23;
    var23 = 28;
    var23 = var11[var23];
    var23 = var22.bind(var1)(var23);
    var26 = var23.Store;
    var23 = function(arg1) {
        var4 = function ApplicationCommandIndexStore(arg1) {
            _fun0032: for(var _fun0032_ip = 0; ; ) switch(_fun0032_ip) {
case 0:
                var6 = this;
                var3 = 0;
                var14 = 0;
                var1 = copyRestArgs(var14);
                var7 = _closure1_slot5;
                var4 = _closure2_slot0;
                var5 = undefined;
                var7 = var7.bind(var5)(var6, var4);
                var11 = new Array(0);
                var14 = var11;
                var13 = var1;
                var12 = 0;
                var1 = arraySpread(var14, var13, var12);
                var1 = _closure1_slot8;
                var10 = var1.bind(var5)(var4);
                var4 = _closure1_slot7;
                var1 = _closure1_slot36;
                var1 = var1.bind(var5)();
                if(var1) { _fun0032_ip = 13; continue _fun0032 }
case 128:
                var1 = var10.apply;
                var1 = var1.bind(var10)(var6, var11);
                _fun0032_ip = 54; continue _fun0032;
case 13:
                var7 = global;
                var9 = var7.Reflect;
                var8 = var9.construct;
                var7 = _closure1_slot8;
                var7 = var7.bind(var5)(var6);
                var7 = var7.constructor;
                var1 = var8.bind(var9)(var10, var11, var7);
case 54:
                var1 = var4.bind(var5)(var6, var1);
                var4 = {};
                var1['indices'] = var4;
                var4 = global;
                var5 = var4.Map;
                var6 = var5.prototype;
                var6 = Object.create(var6, {constructor: {value: var5}});
                var15 = var6;
                var5 = new var15[var5](var14);
                var5 = var5 instanceof Object ? var5 : var6;
                var1['applicationIndices'] = var5;
                var1['applicationIndicesVersion'] = var3;
                var3 = _closure1_slot13;
                var5 = var3.locale;
                var1['oldLocale'] = var5;
                var4 = var4.Intl;
                var5 = var4.Collator;
                var14 = var3.locale;
                var13 = _closure1_slot30;
                var3 = var5.prototype;
                var3 = Object.create(var3, {constructor: {value: var5}});
                var15 = var3;
                var2 = new var15[var5](var14, var13, var12);
                var2 = var2 instanceof Object ? var2 : var3;
                var1['collator'] = var2;
                return var1;
            }
        };
        var _closure2_slot0 = var4;
        var5 = _closure1_slot9;
        var3 = undefined;
        var2 = arg1;
        var2 = var5.bind(var3)(var4, var2);
        var2 = _closure1_slot6;
        var5 = {};
        var1 = 'initialize';
        var5['key'] = var1;
        var1 = function value() {
            var4 = this;
            var3 = var4.waitFor;
            var1 = _closure1_slot13;
            var3 = var3.bind(var4)(var1);
            var3 = var4.waitFor;
            var2 = _closure1_slot14;
            var2 = var3.bind(var4)(var2);
            var3 = var4.syncWith;
            var2 = new Array(1);
            var2[0] = var1;
            var1 = function() {
                _fun0033: for(var _fun0033_ip = 0; ; ) switch(_fun0033_ip) {
case 0:
                    var2 = _closure1_slot13;
                    var2 = var2.locale;
                    var3 = _closure1_slot33;
                    var3 = var3.oldLocale;
                    if(!(var2 !== var3)) { _fun0033_ip = 219; continue _fun0033 }
case 305:
                    var4 = _closure1_slot42;
                    var3 = undefined;
                    var3 = var4.bind(var3)();
                    var4 = _closure1_slot33;
                    var3 = global;
                    var3 = var3.Intl;
                    var6 = var3.Collator;
                    var3 = var6.prototype;
                    var5 = Object.create(var3, {constructor: {value: var6}});
                    var7 = {'sensitivity': 'accent', 'numeric': true};
                    var9 = var5;
                    var8 = var2;
                    var3 = new var9[var6](var8, var7, var6);
                    var3 = var3 instanceof Object ? var3 : var5;
                    var4['collator'] = var3;
                    var1 = _closure1_slot33;
                    var1['oldLocale'] = var2;
case 219:
                    var1 = undefined;
                    return var1;
                }
            };
            var1 = var3.bind(var4)(var2, var1);
            var1 = undefined;
            return var1;
        };
        var5['value'] = var1;
        var1 = new Array(11);
        var1[0] = var5;
        var5 = {};
        var7 = 'getContextState';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0034: for(var _fun0034_ip = 0; ; ) switch(_fun0034_ip) {
case 0:
                var6 = arg1;
                var2 = var6.type;
                var1 = 'contextless';
                if(!(var1 !== var2)) { _fun0034_ip = 45; continue _fun0034 }
case 306:
                var4 = _closure1_slot53;
                var2 = var6.channel;
                var1 = undefined;
                var1 = var4.bind(var1)(var2);
                if(var1) { _fun0034_ip = 9; continue _fun0034 }
case 45:
                var1 = _closure1_slot28;
                _fun0034_ip = 341; continue _fun0034;
case 9:
                var2 = this;
                var5 = var2.indices;
                var2 = var6.channel;
                var2 = var2.guild_id;
                var4 = null;
                if(!(var4 == var2)) { _fun0034_ip = 342; continue _fun0034 }
case 4:
                var6 = var6.channel;
                var2 = var6.id;
case 342:
                var2 = var5[var2];
                if(!(var4 == var2)) { _fun0034_ip = 15; continue _fun0034 }
case 106:
                var2 = _closure1_slot29;
case 15:
                var1 = var2;
case 341:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[1] = var5;
        var5 = {};
        var7 = 'hasContextStateApplication';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0035: for(var _fun0035_ip = 0; ; ) switch(_fun0035_ip) {
case 0:
                var1 = arg1;
                var3 = var1.applicationId;
                var4 = var1.channelId;
                var5 = var1.guildId;
                var1 = this;
                var1 = var1.indices;
                var2 = null;
                if(!(var2 != var5)) { _fun0035_ip = 146; continue _fun0035 }
case 37:
                var4 = var5;
case 146:
                var4 = var1[var4];
                var5 = var2 == var4;
                var1 = undefined;
                if(var5) { _fun0035_ip = 3; continue _fun0035 }
case 9:
                var4 = var4.result;
                var5 = var2 == var4;
                var1 = undefined;
                if(var5) { _fun0035_ip = 3; continue _fun0035 }
case 62:
                var1 = var4.sections;
case 3:
                if(!(var2 == var1)) { _fun0035_ip = 217; continue _fun0035 }
case 4:
                var1 = {};
case 217:
                var1 = var1[var3];
                var1 = var2 != var1;
                return var1;
            }
        };
        var5['value'] = var7;
        var1[2] = var5;
        var5 = {};
        var7 = 'getGuildState';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0036: for(var _fun0036_ip = 0; ; ) switch(_fun0036_ip) {
case 0:
                var3 = arg1;
                var2 = null;
                if(!(var2 != var3)) { _fun0036_ip = 141; continue _fun0036 }
case 343:
                var1 = this;
                var1 = var1.indices;
                var1 = var1[var3];
                if(!(var2 == var1)) { _fun0036_ip = 37; continue _fun0036 }
case 300:
                var1 = _closure1_slot29;
case 37:
                _fun0036_ip = 142; continue _fun0036;
case 141:
                var1 = _closure1_slot28;
case 142:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[3] = var5;
        var5 = {};
        var7 = 'getUserState';
        var5['key'] = var7;
        var7 = function value() {
            _fun0037: for(var _fun0037_ip = 0; ; ) switch(_fun0037_ip) {
case 0:
                var1 = this;
                var3 = var1.indices;
                var1 = _closure1_slot24;
                var1 = var3[var1];
                var3 = null;
                if(!(var3 == var1)) { _fun0037_ip = 7; continue _fun0037 }
case 300:
                var1 = _closure1_slot29;
case 7:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[4] = var5;
        var5 = {};
        var7 = 'hasUserStateApplication';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0038: for(var _fun0038_ip = 0; ; ) switch(_fun0038_ip) {
case 0:
                var1 = this;
                var2 = var1.indices;
                var1 = _closure1_slot24;
                var1 = var2[var1];
                var2 = null;
                var4 = var2 == var1;
                var3 = undefined;
                if(var4) { _fun0038_ip = 58; continue _fun0038 }
case 216:
                var1 = var1.result;
                var4 = var2 == var1;
                var3 = undefined;
                if(var4) { _fun0038_ip = 58; continue _fun0038 }
case 6:
                var3 = var1.sections;
case 58:
                if(!(var2 == var3)) { _fun0038_ip = 85; continue _fun0038 }
case 32:
                var3 = {};
case 85:
                var1 = arg1;
                var1 = var3[var1];
                var1 = var2 != var1;
                return var1;
            }
        };
        var5['value'] = var7;
        var1[5] = var5;
        var5 = {};
        var7 = 'getApplicationState';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0039: for(var _fun0039_ip = 0; ; ) switch(_fun0039_ip) {
case 0:
                var3 = arg1;
                var2 = null;
                if(!(var2 != var3)) { _fun0039_ip = 141; continue _fun0039 }
case 343:
                var1 = this;
                var1 = var1.indices;
                var1 = var1[var3];
                if(!(var2 == var1)) { _fun0039_ip = 37; continue _fun0039 }
case 300:
                var1 = _closure1_slot29;
case 37:
                _fun0039_ip = 142; continue _fun0039;
case 141:
                var1 = _closure1_slot28;
case 142:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[6] = var5;
        var5 = {};
        var7 = 'getApplicationStates';
        var5['key'] = var7;
        var7 = function value() {
            var1 = this;
            var1 = var1.applicationIndices;
            return var1;
        };
        var5['value'] = var7;
        var1[7] = var5;
        var5 = {};
        var7 = 'hasApplicationState';
        var5['key'] = var7;
        var7 = function value(arg1) {
            var1 = this;
            var2 = var1.indices;
            var1 = arg1;
            var1 = var1 in var2;
            return var1;
        };
        var5['value'] = var7;
        var1[8] = var5;
        var5 = {};
        var7 = 'query';
        var5['key'] = var7;
        var7 = function value(arg1, arg2, arg3) {
            _fun0040: for(var _fun0040_ip = 0; ; ) switch(_fun0040_ip) {
case 0:
                var7 = arg1;
                var10 = arg2;
                var6 = arg3;
                var4 = this;
                var3 = _closure1_slot17;
                var2 = var3.getCurrentUser;
                var2 = var2.bind(var3)();
                var14 = null;
                if(!(var14 != var2)) { _fun0040_ip = 344; continue _fun0040 }
case 345:
                var2 = var7.type;
                var5 = undefined;
                var19 = 'channel';
                var3 = undefined;
                if(!(var19 === var2)) { _fun0040_ip = 126; continue _fun0040 }
case 50:
                var3 = var7.channel;
case 126:
                var2 = var4.getContextState;
                var9 = var2.bind(var4)(var7);
                var2 = var4.getUserState;
                var8 = var2.bind(var4)();
                var7 = var4.getApplicationState;
                var2 = var6.applicationId;
                var13 = var7.bind(var4)(var2);
                var2 = var4.getApplicationStates;
                var7 = var2.bind(var4)();
                var4 = _closure1_slot0;
                var11 = _closure1_slot3;
                var2 = 24;
                var2 = var11[var2];
                var11 = var4.bind(var5)(var2);
                var4 = var11.buildPermissionContext;
                var2 = var10.commandTypes;
                var12 = var4.bind(var11)(var3, var2);
                var2 = var14 == var3;
                var18 = var3;
                if(var2) { _fun0040_ip = 77; continue _fun0040 }
case 134:
                var3 = var14 == var12;
                var4 = undefined;
                if(var3) { _fun0040_ip = 21; continue _fun0040 }
case 18:
                var4 = var12.hasBaseAccessPermissions;
case 21:
                var3 = true;
                var2 = var3 === var4;
case 77:
                var4 = var10.applicationCommands;
                var3 = false;
                var11 = var3 !== var4;
                var15 = var6.allowFetch;
                var4 = false;
                if(!var15) { _fun0040_ip = 185; continue _fun0040 }
case 346:
                var15 = var11;
                if(!var15) { _fun0040_ip = 347; continue _fun0040 }
case 348:
                var15 = var2;
case 347:
                if(!var15) { _fun0040_ip = 349; continue _fun0040 }
case 314:
                var15 = var14 != var18;
case 349:
                if(!var15) { _fun0040_ip = 317; continue _fun0040 }
case 112:
                var2 = _closure1_slot53;
                var15 = var2.bind(var5)(var18);
case 317:
                var2 = false;
                if(!var15) { _fun0040_ip = 350; continue _fun0040 }
case 351:
                var16 = _closure1_slot1;
                var17 = _closure1_slot3;
                var15 = 25;
                var15 = var17[var15];
                var20 = var16.bind(var5)(var15);
                var17 = var20.track;
                var15 = _closure1_slot21;
                var16 = var15.APPLICATION_COMMAND_CACHE_FETCH;
                var15 = {};
                var21 = var9.result;
                var21 = var14 == var21;
                var15['miss'] = var21;
                var21 = global;
                var23 = var21.Object;
                var22 = var23.keys;
                var21 = _closure1_slot33;
                var21 = var21.indices;
                var21 = var22.bind(var23)(var21);
                var21 = var21.length;
                var15['size'] = var21;
                var15 = var17.bind(var20)(var16, var15);
                var15 = _closure1_slot54;
                var15 = var15.bind(var5)(var9);
                if(!var15) { _fun0040_ip = 352; continue _fun0040 }
case 353:
                var15 = var14 != var18;
case 352:
                var3 = false;
                if(!var15) { _fun0040_ip = 354; continue _fun0040 }
case 355:
                var15 = var18.guild_id;
                if(!(var14 == var15)) { _fun0040_ip = 356; continue _fun0040 }
case 357:
                var16 = _closure1_slot0;
                var17 = _closure1_slot3;
                var15 = 19;
                var15 = var17[var15];
                var17 = var16.bind(var5)(var15);
                var16 = var17.requestApplicationCommandIndex;
                var15 = {};
                var15['type'] = var19;
                var19 = var18.id;
                var15['channelId'] = var19;
                var15 = var16.bind(var17)(var15);
                var3 = true;
                _fun0040_ip = 354; continue _fun0040;
case 356:
                var16 = _closure1_slot0;
                var17 = _closure1_slot3;
                var15 = 19;
                var15 = var17[var15];
                var17 = var16.bind(var5)(var15);
                var16 = var17.requestApplicationCommandIndex;
                var15 = {};
                var19 = 'guild';
                var15['type'] = var19;
                var18 = var18.guild_id;
                var15['guildId'] = var18;
                var15 = var16.bind(var17)(var15);
                var3 = true;
case 354:
                var2 = var3;
case 350:
                var3 = _closure1_slot54;
                var3 = var3.bind(var5)(var8);
                if(!var3) { _fun0040_ip = 358; continue _fun0040 }
case 359:
                var15 = _closure1_slot0;
                var16 = _closure1_slot3;
                var3 = 19;
                var3 = var16[var3];
                var16 = var15.bind(var5)(var3);
                var15 = var16.requestApplicationCommandIndex;
                var3 = {};
                var17 = 'user';
                var3['type'] = var17;
                var3 = var15.bind(var16)(var3);
                var2 = true;
case 358:
                var3 = _closure1_slot54;
                var3 = var3.bind(var5)(var13);
                if(!var3) { _fun0040_ip = 360; continue _fun0040 }
case 178:
                var13 = var6.applicationId;
                var3 = var14 != var13;
case 360:
                if(!var3) { _fun0040_ip = 183; continue _fun0040 }
case 361:
                var13 = _closure1_slot0;
                var14 = _closure1_slot3;
                var3 = 19;
                var3 = var14[var3];
                var14 = var13.bind(var5)(var3);
                var13 = var14.requestApplicationCommandIndex;
                var3 = {};
                var15 = 'application';
                var3['type'] = var15;
                var15 = var6.applicationId;
                var3['applicationId'] = var15;
                var3 = var13.bind(var14)(var3);
                var2 = true;
case 183:
                var4 = var2;
case 185:
                var3 = _closure1_slot51;
                var2 = {};
                var2['permissionContext'] = var12;
                var12 = var10.text;
                var2['text'] = var12;
                var2['allowApplicationCommands'] = var11;
                var10 = var10.builtIns;
                var2['builtIns'] = var10;
                var10 = var6.scoreMethod;
                var2['scoreMethod'] = var10;
                var10 = var6.allowEmptySections;
                var2['allowEmptySections'] = var10;
                var2['contextState'] = var9;
                var2['userState'] = var8;
                var8 = var6.allowApplicationState;
                if(var8) { _fun0040_ip = 362; continue _fun0040 }
case 316:
                var8 = global;
                var8 = var8.Map;
                var9 = var8.prototype;
                var9 = Object.create(var9, {constructor: {value: var8}});
                var26 = var9;
                var8 = new var26[var8](var25);
                var7 = var8 instanceof Object ? var8 : var9;
case 362:
                var2['applicationStates'] = var7;
                var7 = var6.sortOptions;
                var2['sortOptions'] = var7;
                var7 = var6.applicationId;
                var2['singleApplicationId'] = var7;
                var6 = var6.installOnDemand;
                var2['installOnDemand'] = var6;
                var2 = var3.bind(var5)(var2);
                var3 = var2.loading;
                if(var3) { _fun0040_ip = 363; continue _fun0040 }
case 364:
                var3 = var4;
case 363:
                var2['loading'] = var3;
                return var2;
case 344:
                var1 = _closure1_slot27;
                return var1;
            }
        };
        var5['value'] = var7;
        var1[9] = var5;
        var5 = {};
        var7 = 'queryInstallOnDemandApp';
        var5['key'] = var7;
        var6 = function value(arg1, arg2) {
            _fun0041: for(var _fun0041_ip = 0; ; ) switch(_fun0041_ip) {
case 0:
                var5 = this;
                var4 = _closure1_slot15;
                var3 = var4.getChannel;
                var2 = arg2;
                var6 = var3.bind(var4)(var2);
                var2 = null;
                if(!(var2 != var6)) { _fun0041_ip = 365; continue _fun0041 }
case 43:
                var4 = var5.query;
                if(!(var2 == var6)) { _fun0041_ip = 32; continue _fun0041 }
case 142:
                var3 = {};
                var2 = 'contextless';
                var3['type'] = var2;
                _fun0041_ip = 128; continue _fun0041;
case 32:
                var2 = {};
                var2['channel'] = var6;
                var6 = 'channel';
                var2['type'] = var6;
                var3 = var2;
case 128:
                var2 = {};
                var8 = _closure1_slot0;
                var9 = _closure1_slot3;
                var1 = 26;
                var1 = var9[var1];
                var7 = undefined;
                var1 = var8.bind(var7)(var1);
                var1 = var1.ApplicationCommandType;
                var6 = var1.CHAT;
                var1 = new Array(1);
                var1[0] = var6;
                var2['commandTypes'] = var1;
                var1 = {};
                var6 = 5;
                var1['placeholderCount'] = var6;
                var6 = 27;
                var6 = var9[var6];
                var6 = var8.bind(var7)(var6);
                var6 = var6.ScoreMethod;
                var6 = var6.COMMAND_ONLY;
                var1['scoreMethod'] = var6;
                var6 = arg1;
                var1['applicationId'] = var6;
                var6 = true;
                var1['allowFetch'] = var6;
                var1 = var4.bind(var5)(var3, var2, var1);
case 365:
                var1 = undefined;
                return var1;
            }
        };
        var5['value'] = var6;
        var1[10] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var23 = var23.bind(var1)(var26);
    var23['displayName'] = var8;
    var8 = 29;
    var8 = var11[var8];
    var35 = var22.bind(var1)(var8);
    var8 = {};
    var8['LOGOUT'] = var25;
    var25 = function handleConnectionOpen() {
        _fun0042: for(var _fun0042_ip = 0; ; ) switch(_fun0042_ip) {
case 0:
            var1 = global;
            var4 = var1.Object;
            var2 = var4.values;
            var1 = _closure1_slot33;
            var1 = var1.indices;
            var4 = var2.bind(var4)(var1);
            var1 = var4.length;
            var2 = 0;
            var1 = var2 < var1;
            if(!var1) { _fun0042_ip = 366; continue _fun0042 }
case 61:
            var5 = var4[var2];
            var1 = _closure1_slot25;
            var5['serverVersion'] = var1;
            var2 = var2 + 1;
            var1 = var4.length;
            if(var2 < var1) { _fun0042_ip = 61; continue _fun0042 }
case 366:
            var4 = _closure1_slot37;
            var2 = _closure1_slot32;
            var1 = undefined;
            var5 = var4.bind(var1)(var2);
            var4 = var5.bind(var1)();
            var2 = var4.done;
            if(var2) { _fun0042_ip = 367; continue _fun0042 }
case 60:
            var6 = _closure1_slot46;
            var2 = var4.value;
            var2 = var6.bind(var1)(var2);
            var6 = var5.bind(var1)();
            var2 = var6.done;
            var4 = var6;
            if(!var2) { _fun0042_ip = 60; continue _fun0042 }
case 367:
            var2 = new Array(0);
            _closure1_slot32 = var2;
            var2 = true;
            _closure1_slot31 = var2;
            return var1;
        }
    };
    var8['CONNECTION_OPEN'] = var25;
    var25 = function handleFetchRequest(arg1) {
        _fun0043: for(var _fun0043_ip = 0; ; ) switch(_fun0043_ip) {
case 0:
            var1 = arg1;
            var3 = var1.target;
            var4 = _closure1_slot39;
            var1 = undefined;
            var6 = var4.bind(var1)(var3);
            var5 = _closure1_slot54;
            var4 = _closure1_slot33;
            var4 = var4.indices;
            var4 = var4[var6];
            var6 = null;
            if(!(var6 == var4)) { _fun0043_ip = 42; continue _fun0043 }
case 65:
            var4 = _closure1_slot29;
case 42:
            var4 = var5.bind(var1)(var4);
            if(!var4) { _fun0043_ip = 303; continue _fun0043 }
case 126:
            var2 = _closure1_slot44;
            var2 = var2.bind(var1)(var3);
case 303:
            return var1;
        }
    };
    var8['APPLICATION_COMMAND_INDEX_FETCH_REQUEST'] = var25;
    var8['APPLICATION_COMMAND_INDEX_FETCH_SUCCESS'] = var24;
    var24 = function handleFetchFailure(arg1) {
        var1 = arg1;
        var4 = var1.target;
        var3 = _closure1_slot40;
        var2 = {};
        var1 = {};
        var5 = false;
        var1['fetching'] = var5;
        var5 = global;
        var6 = var5.Date;
        var5 = var6.now;
        var6 = var5.bind(var6)();
        var5 = 5000;
        var5 = var6 + var5;
        var1['retryAfter'] = var5;
        var2['fetchState'] = var1;
        var1 = undefined;
        var2 = var3.bind(var1)(var4, var2);
        return var1;
    };
    var8['APPLICATION_COMMAND_INDEX_FETCH_FAILURE'] = var24;
    var24 = function handleStaleCommand(arg1) {
        _fun0044: for(var _fun0044_ip = 0; ; ) switch(_fun0044_ip) {
case 0:
            var1 = arg1;
            var2 = var1.applicationId;
            var3 = var1.channelId;
            var4 = var1.guildId;
            var7 = _closure1_slot33;
            var6 = var7.hasContextStateApplication;
            var5 = {};
            var5['applicationId'] = var2;
            var5['channelId'] = var3;
            var5['guildId'] = var4;
            var5 = var6.bind(var7)(var5);
            if(!var5) { _fun0044_ip = 368; continue _fun0044 }
case 104:
            var6 = _closure1_slot40;
            var5 = null;
            if(!(var5 == var4)) { _fun0044_ip = 369; continue _fun0044 }
case 67:
            var5 = {};
            var7 = 'channel';
            var5['type'] = var7;
            var5['channelId'] = var3;
            _fun0044_ip = 15; continue _fun0044;
case 369:
            var3 = {};
            var7 = 'guild';
            var3['type'] = var7;
            var3['guildId'] = var4;
            var5 = var3;
case 15:
            var4 = {};
            var3 = _closure1_slot25;
            var4['serverVersion'] = var3;
            var3 = undefined;
            var3 = var6.bind(var3)(var5, var4);
case 368:
            var4 = _closure1_slot33;
            var3 = var4.hasUserStateApplication;
            var3 = var3.bind(var4)(var2);
            if(!var3) { _fun0044_ip = 111; continue _fun0044 }
case 370:
            var6 = _closure1_slot40;
            var5 = {};
            var3 = 'user';
            var5['type'] = var3;
            var4 = {};
            var3 = _closure1_slot25;
            var4['serverVersion'] = var3;
            var3 = undefined;
            var3 = var6.bind(var3)(var5, var4);
case 111:
            var4 = _closure1_slot33;
            var3 = var4.hasApplicationState;
            var3 = var3.bind(var4)(var2);
            if(!var3) { _fun0044_ip = 258; continue _fun0044 }
case 371:
            var4 = _closure1_slot40;
            var3 = {};
            var5 = 'application';
            var3['type'] = var5;
            var3['applicationId'] = var2;
            var2 = {};
            var1 = _closure1_slot25;
            var2['serverVersion'] = var1;
            var1 = undefined;
            var1 = var4.bind(var1)(var3, var2);
case 258:
            var1 = undefined;
            return var1;
        }
    };
    var8['APPLICATION_COMMAND_EXECUTE_BAD_VERSION'] = var24;
    var24 = function handleDeletedChannelIndex(arg1) {
        var1 = arg1;
        var1 = var1.channel;
        var3 = _closure1_slot41;
        var2 = {};
        var4 = 'channel';
        var2['type'] = var4;
        var1 = var1.id;
        var2['channelId'] = var1;
        var1 = undefined;
        var2 = var3.bind(var1)(var2);
        return var1;
    };
    var8['CHANNEL_DELETE'] = var24;
    var24 = function handleDeletedGuildIndex(arg1) {
        var1 = arg1;
        var1 = var1.guild;
        var3 = _closure1_slot41;
        var2 = {};
        var4 = 'guild';
        var2['type'] = var4;
        var1 = var1.id;
        var2['guildId'] = var1;
        var1 = undefined;
        var2 = var3.bind(var1)(var2);
        return var1;
    };
    var8['GUILD_DELETE'] = var24;
    var8['USER_APPLICATION_UPDATE'] = var12;
    var8['USER_APPLICATION_REMOVE'] = var12;
    var12 = function handleGuildCommandIndexUpdate(arg1) {
        _fun0045: for(var _fun0045_ip = 0; ; ) switch(_fun0045_ip) {
case 0:
            var1 = arg1;
            var2 = var1.guildId;
            var1 = var1.version;
            var4 = _closure1_slot40;
            var3 = {};
            var5 = 'guild';
            var3['type'] = var5;
            var3['guildId'] = var2;
            var2 = {};
            var8 = null;
            if(!(var8 == var1)) { _fun0045_ip = 65; continue _fun0045 }
case 372:
            var1 = _closure1_slot25;
case 65:
            var2['serverVersion'] = var1;
            var1 = undefined;
            var3 = var4.bind(var1)(var3, var2);
            var4 = var8 == var3;
            var2 = undefined;
            if(var4) { _fun0045_ip = 373; continue _fun0045 }
case 374:
            var3 = var3.result;
            var4 = var8 == var3;
            var2 = undefined;
            if(var4) { _fun0045_ip = 373; continue _fun0045 }
case 342:
            var2 = var3.sectionIdsByBotId;
case 373:
            if(!(var8 != var2)) { _fun0045_ip = 375; continue _fun0045 }
case 48:
            var6 = var2;
            var2 = 'channel';
            for(var3 in var6)
case 154:
            {
case 147:
                var12 = var3;
                var11 = _closure1_slot15;
                var10 = var11.getDMFromUserId;
                var10 = var10.bind(var11)(var12);
                if(var8 == var10) { _fun0045_ip = 154; continue _fun0045 }
case 221:
                var12 = _closure1_slot40;
                var11 = {};
                var11['type'] = var2;
                var11['channelId'] = var10;
                var10 = {};
                var13 = _closure1_slot25;
                var10['serverVersion'] = var13;
                var10 = var12.bind(var1)(var11, var10);
                _fun0045_ip = 154; continue _fun0045;
            }
case 375:
            return var1;
        }
    };
    var8['GUILD_APPLICATION_COMMAND_INDEX_UPDATE'] = var12;
    var12 = function handleGuildMembersChunkBatch(arg1) {
        _fun0046: for(var _fun0046_ip = 0; ; ) switch(_fun0046_ip) {
case 0:
            var1 = arg1;
            var2 = var1.chunks;
            var1 = _closure1_slot37;
            var6 = undefined;
            var5 = var1.bind(var6)(var2);
            var3 = var5.bind(var6)();
            var2 = var3.done;
            var4 = var3;
            var3 = false;
            var1 = false;
            if(var2) { _fun0046_ip = 70; continue _fun0046 }
case 142:
            var2 = var4.value;
            var9 = _closure1_slot47;
            var8 = var2.guildId;
            var2 = var2.members;
            var8 = var9.bind(var6)(var8, var2);
            if(var8) { _fun0046_ip = 4; continue _fun0046 }
case 366:
            var8 = var3;
case 4:
            var9 = var5.bind(var6)();
            var2 = var9.done;
            var3 = var8;
            var4 = var9;
            var1 = var3;
            if(!var2) { _fun0046_ip = 142; continue _fun0046 }
case 70:
            return var1;
        }
    };
    var8['GUILD_MEMBERS_CHUNK_BATCH'] = var12;
    var12 = var23.prototype;
    var12 = Object.create(var12, {constructor: {value: var23}});
    var36 = var12;
    var34 = var8;
    var8 = new var36[var23](var35, var34, var33);
    var8 = var8 instanceof Object ? var8 : var12;
    var _closure1_slot33 = var8;
    var22 = var9.Object;
    var12 = var22.freeze;
    var9 = {};
    var23 = {'useFrecency': false, 'useScore': false};
    var9['applications'] = var23;
    var23 = {'useFrecency': true, 'useScore': true};
    var9['commands'] = var23;
    var9 = var12.bind(var22)(var9);
    var _closure1_slot34 = var9;
    var9 = {};
    var9['COMMAND_NAME_STARTS_WITH'] = var21;
    var12 = 'COMMAND_NAME_STARTS_WITH';
    var9[var21] = var12;
    var9['STARTS_WITH_COMMAND_NAME'] = var20;
    var12 = 'STARTS_WITH_COMMAND_NAME';
    var9[var20] = var12;
    var9['COMMAND_NAME_CONTAINS'] = var19;
    var12 = 'COMMAND_NAME_CONTAINS';
    var9[var19] = var12;
    var9['STARTS_WITH_COMMAND_OPTION_NAME_OR_OPTION_NAME'] = var18;
    var12 = 'STARTS_WITH_COMMAND_OPTION_NAME_OR_OPTION_NAME';
    var9[var18] = var12;
    var9['OPTION_NAME_CONTAINS'] = var17;
    var12 = 'OPTION_NAME_CONTAINS';
    var9[var17] = var12;
    var9['SECTION_NAME_STARTS_WITH'] = var16;
    var12 = 'SECTION_NAME_STARTS_WITH';
    var9[var16] = var12;
    var9['SECTION_NAME_CONTAINS'] = var15;
    var12 = 'SECTION_NAME_CONTAINS';
    var9[var15] = var12;
    var9['COMMAND_DESCRIPTION_CONTAINS'] = var14;
    var12 = 'COMMAND_DESCRIPTION_CONTAINS';
    var9[var14] = var12;
    var9['SECTION_DESCRIPTION_CONTAINS'] = var13;
    var12 = 'SECTION_DESCRIPTION_CONTAINS';
    var9[var13] = var12;
    var _closure1_slot35 = var9;
    var9 = 35;
    var9 = var11[var9];
    var11 = var10.bind(var1)(var9);
    var10 = var11.fileFinishedImporting;
    var9 = 'modules/application_commands/ApplicationCommandIndexStore.tsx';
    var9 = var10.bind(var11)(var9);
    var3['default'] = var8;
    var8 = function getOrFetchApplicationCommandIndexForTarget() {
        var1 = undefined;
        var4 = _closure1_slot43;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['getOrFetchApplicationCommandIndexForTarget'] = var8;
    var3['useContextIndexState'] = var7;
    var7 = function useGuildIndexState(arg1, arg2) {
        var7 = arg1;
        var8 = arg2;
        var _closure2_slot0 = var7;
        var _closure2_slot1 = var8;
        var5 = _closure1_slot11;
        var4 = var5.useState;
        var1 = true;
        var6 = var4.bind(var5)(var1);
        var4 = _closure1_slot4;
        var5 = undefined;
        var1 = 2;
        var4 = var4.bind(var5)(var6, var1);
        var1 = 0;
        var6 = var4[var1];
        var _closure2_slot2 = var6;
        var1 = 1;
        var1 = var4[var1];
        var _closure2_slot3 = var1;
        var4 = _closure1_slot0;
        var9 = _closure1_slot3;
        var1 = 28;
        var1 = var9[var1];
        var9 = var4.bind(var5)(var1);
        var5 = var9.useStateFromStoresObject;
        var1 = _closure1_slot33;
        var4 = new Array(1);
        var4[0] = var1;
        var1 = function() {
            _fun0047: for(var _fun0047_ip = 0; ; ) switch(_fun0047_ip) {
case 0:
                var1 = _closure1_slot33;
                var3 = var1.indices;
                var1 = _closure2_slot0;
                var1 = var3[var1];
                var3 = null;
                if(!(var3 == var1)) { _fun0047_ip = 103; continue _fun0047 }
case 7:
                var1 = _closure1_slot29;
case 103:
                return var1;
            }
        };
        var1 = var5.bind(var9)(var4, var1);
        var _closure2_slot4 = var1;
        var5 = _closure1_slot11;
        var4 = var5.useEffect;
        var3 = new Array(4);
        var3[0] = var1;
        var3[1] = var8;
        var3[2] = var7;
        var3[3] = var6;
        var2 = function() {
            _fun0048: for(var _fun0048_ip = 0; ; ) switch(_fun0048_ip) {
case 0:
                var2 = _closure2_slot2;
                if(!var2) { _fun0048_ip = 33; continue _fun0048 }
case 140:
                var4 = _closure2_slot0;
                var3 = null;
                var2 = var3 != var4;
case 33:
                if(!var2) { _fun0048_ip = 376; continue _fun0048 }
case 300:
                var2 = _closure2_slot1;
                if(!var2) { _fun0048_ip = 377; continue _fun0048 }
case 146:
                var5 = _closure1_slot1;
                var4 = _closure1_slot3;
                var3 = 25;
                var3 = var4[var3];
                var4 = undefined;
                var8 = var5.bind(var4)(var3);
                var7 = var8.track;
                var3 = _closure1_slot21;
                var6 = var3.APPLICATION_COMMAND_CACHE_FETCH;
                var3 = {};
                var5 = _closure2_slot4;
                var10 = var5.result;
                var9 = null;
                var9 = var9 == var10;
                var3['miss'] = var9;
                var9 = global;
                var11 = var9.Object;
                var10 = var11.keys;
                var9 = _closure1_slot33;
                var9 = var9.indices;
                var9 = var10.bind(var11)(var9);
                var9 = var9.length;
                var3['size'] = var9;
                var3 = var7.bind(var8)(var6, var3);
                var3 = _closure1_slot54;
                var3 = var3.bind(var4)(var5);
                if(!var3) { _fun0048_ip = 377; continue _fun0048 }
case 134:
                var3 = _closure1_slot0;
                var5 = _closure1_slot3;
                var2 = 19;
                var2 = var5[var2];
                var4 = var3.bind(var4)(var2);
                var3 = var4.requestApplicationCommandIndex;
                var2 = {};
                var5 = 'guild';
                var2['type'] = var5;
                var5 = _closure2_slot0;
                var2['guildId'] = var5;
                var2 = var3.bind(var4)(var2);
case 377:
                var3 = _closure2_slot3;
                var2 = undefined;
                var1 = false;
                var1 = var3.bind(var2)(var1);
case 376:
                var1 = undefined;
                return var1;
            }
        };
        var2 = var4.bind(var5)(var2, var3);
        return var1;
    };
    var3['useGuildIndexState'] = var7;
    var3['useUserIndexState'] = var6;
    var6 = function useDiscoveryState(arg1, arg2, arg3, arg4) {
        var13 = arg1;
        var3 = arg2;
        var10 = arg4;
        var _closure2_slot0 = var13;
        var _closure2_slot1 = var3;
        var _closure2_slot2 = var10;
        var5 = _closure1_slot50;
        var9 = undefined;
        var4 = arg3;
        var4 = var5.bind(var9)(var13, var4, var10);
        var7 = var4.descriptors;
        var _closure2_slot3 = var7;
        var8 = var4.commands;
        var _closure2_slot4 = var8;
        var6 = var4.sectionedCommands;
        var _closure2_slot5 = var6;
        var11 = var4.loading;
        var _closure2_slot6 = var11;
        var12 = _closure1_slot11;
        var5 = var12.useMemo;
        var4 = new Array(2);
        var4[0] = var13;
        var4[1] = var3;
        var3 = function() {
            _fun0049: for(var _fun0049_ip = 0; ; ) switch(_fun0049_ip) {
case 0:
                var1 = _closure2_slot0;
                var4 = var1.type;
                var2 = 'channel';
                var1 = undefined;
                if(!(var2 === var4)) { _fun0049_ip = 148; continue _fun0049 }
case 378:
                var2 = {};
                var4 = _closure2_slot0;
                var4 = var4.channel;
                var2['channel'] = var4;
                var3 = _closure2_slot1;
                var2['guild'] = var3;
                var1 = var2;
case 148:
                return var1;
            }
        };
        var5 = var5.bind(var12)(var3, var4);
        var _closure2_slot7 = var5;
        var4 = _closure1_slot0;
        var12 = _closure1_slot3;
        var3 = 30;
        var3 = var12[var3];
        var4 = var4.bind(var9)(var3);
        var3 = var4.useTopCommands;
        var9 = var3.bind(var4)(var5);
        var _closure2_slot8 = var9;
        var4 = _closure1_slot11;
        var3 = var4.useMemo;
        var2 = new Array(7);
        var2[0] = var11;
        var10 = var10.includeFrecency;
        var2[1] = var10;
        var2[2] = var9;
        var2[3] = var8;
        var2[4] = var7;
        var2[5] = var6;
        var2[6] = var5;
        var1 = function() {
            _fun0050: for(var _fun0050_ip = 0; ; ) switch(_fun0050_ip) {
case 0:
                var3 = _closure2_slot2;
                var3 = var3.includeFrecency;
                if(!var3) { _fun0050_ip = 379; continue _fun0050 }
case 380:
                var3 = _closure2_slot8;
                var3 = var3.length;
                var4 = 0;
                if(!(var4 !== var3)) { _fun0050_ip = 379; continue _fun0050 }
case 102:
                var6 = _closure2_slot4;
                var5 = var6.filter;
                var3 = function(arg1) {
                    var3 = _closure2_slot8;
                    var2 = var3.includes;
                    var1 = arg1;
                    var1 = var1.id;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var5 = var5.bind(var6)(var3);
                var3 = var5.sort;
                var1 = function(arg1, arg2) {
                    var4 = _closure1_slot18;
                    var3 = var4.getScoreWithoutLoadingLatest;
                    var5 = _closure2_slot7;
                    var2 = arg1;
                    var2 = var3.bind(var4)(var5, var2);
                    var4 = _closure1_slot18;
                    var3 = var4.getScoreWithoutLoadingLatest;
                    var1 = arg2;
                    var1 = var3.bind(var4)(var5, var1);
                    var1 = var1 - var2;
                    return var1;
                };
                var5 = var3.bind(var5)(var1);
                var3 = var5.splice;
                var1 = _closure1_slot20;
                var3 = var3.bind(var5)(var4, var1);
                var1 = var3.length;
                if(!(var4 !== var1)) { _fun0050_ip = 381; continue _fun0050 }
case 52:
                var1 = {};
                var9 = _closure1_slot0;
                var10 = _closure1_slot3;
                var7 = 31;
                var4 = var10[var7];
                var8 = undefined;
                var4 = var9.bind(var8)(var4);
                var5 = var4.BUILT_IN_SECTIONS;
                var4 = _closure1_slot19;
                var4 = var4.FRECENCY;
                var5 = var5[var4];
                var4 = new Array(1);
                var4[0] = var5;
                var13 = _closure2_slot3;
                var5 = 1;
                var14 = var4;
                var12 = var5;
                var11 = arraySpread(var14, var13, var12);
                var1['descriptors'] = var4;
                var11 = var3.concat;
                var4 = _closure2_slot4;
                var4 = var11.bind(var3)(var4);
                var1['commands'] = var4;
                var4 = {};
                var7 = var10[var7];
                var7 = var9.bind(var8)(var7);
                var7 = var7.BUILT_IN_SECTIONS;
                var6 = _closure1_slot19;
                var6 = var6.FRECENCY;
                var6 = var7[var6];
                var4['section'] = var6;
                var4['data'] = var3;
                var3 = new Array(1);
                var3[0] = var4;
                var13 = _closure2_slot5;
                var14 = var3;
                var4 = arraySpread(var14, var13, var12);
                var1['sectionedCommands'] = var3;
                var3 = _closure2_slot6;
                var1['loading'] = var3;
                _fun0050_ip = 161; continue _fun0050;
case 381:
                var3 = {};
                var4 = _closure2_slot3;
                var3['descriptors'] = var4;
                var4 = _closure2_slot4;
                var3['commands'] = var4;
                var4 = _closure2_slot5;
                var3['sectionedCommands'] = var4;
                var4 = _closure2_slot6;
                var3['loading'] = var4;
                var1 = var3;
case 161:
                return var1;
case 379:
                var1 = {};
                var3 = _closure2_slot3;
                var1['descriptors'] = var3;
                var3 = _closure2_slot4;
                var1['commands'] = var3;
                var3 = _closure2_slot5;
                var1['sectionedCommands'] = var3;
                var2 = _closure2_slot6;
                var1['loading'] = var2;
                return var1;
            }
        };
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['useDiscoveryState'] = var6;
    var3['useQueryState'] = var5;
    var3['isStale'] = var4;
    var4 = function appLauncherOnlyCompareNames(arg1, arg2) {
        var4 = _closure1_slot61;
        var3 = undefined;
        var2 = arg1;
        var1 = arg2;
        var1 = var4.bind(var3)(var2, var1);
        return var1;
    };
    var3['appLauncherOnlyCompareNames'] = var4;
    var2 = function getSection(arg1, arg2) {
        _fun0051: for(var _fun0051_ip = 0; ; ) switch(_fun0051_ip) {
case 0:
            var8 = arg2;
            var1 = _closure1_slot19;
            var1 = var1.BUILT_IN;
            if(!(var8 !== var1)) { _fun0051_ip = 99; continue _fun0051 }
case 35:
            var3 = _closure1_slot33;
            var2 = var3.getContextState;
            var1 = arg1;
            var2 = var2.bind(var3)(var1);
            var3 = _closure1_slot33;
            var1 = var3.getUserState;
            var1 = var1.bind(var3)();
            var4 = var2.result;
            var3 = null;
            var7 = var3 == var4;
            var2 = undefined;
            if(var7) { _fun0051_ip = 69; continue _fun0051 }
case 5:
            var2 = var4.sections;
case 69:
            if(!(var3 == var2)) { _fun0051_ip = 342; continue _fun0051 }
case 382:
            var2 = {};
case 342:
            var4 = var1.result;
            var7 = var3 == var4;
            var1 = undefined;
            if(var7) { _fun0051_ip = 52; continue _fun0051 }
case 341:
            var1 = var4.sections;
case 52:
            if(!(var3 == var1)) { _fun0051_ip = 153; continue _fun0051 }
case 154:
            var1 = {};
case 153:
            var4 = var2[var8];
            var2 = var1[var8];
            var7 = _closure1_slot33;
            var1 = var7.getApplicationState;
            var1 = var1.bind(var7)(var8);
            var7 = var1.result;
            var9 = var3 == var7;
            var1 = undefined;
            if(var9) { _fun0051_ip = 80; continue _fun0051 }
case 383:
            var7 = var7.sections;
            var9 = var3 == var7;
            var1 = undefined;
            if(var9) { _fun0051_ip = 80; continue _fun0051 }
case 222:
            var1 = var7[var8];
case 80:
            if(!(var3 != var4)) { _fun0051_ip = 20; continue _fun0051 }
case 79:
            if(!(var3 == var2)) { _fun0051_ip = 384; continue _fun0051 }
case 20:
            if(!(var3 == var4)) { _fun0051_ip = 319; continue _fun0051 }
case 385:
            if(!(var3 == var2)) { _fun0051_ip = 386; continue _fun0051 }
case 23:
            var8 = var3 != var1;
            var7 = undefined;
            var6 = undefined;
            if(!var8) { _fun0051_ip = 387; continue _fun0051 }
case 346:
            var7 = var1.descriptor;
            var9 = global;
            var10 = var9.Object;
            var9 = var10.values;
            var1 = var1.commands;
            var6 = var9.bind(var10)(var1);
            _fun0051_ip = 387; continue _fun0051;
case 386:
            var7 = var2.descriptor;
            var1 = global;
            var10 = var1.Object;
            var9 = var10.values;
            var1 = var2.commands;
            var6 = var9.bind(var10)(var1);
            _fun0051_ip = 387; continue _fun0051;
case 319:
            var7 = var4.descriptor;
            var1 = global;
            var10 = var1.Object;
            var9 = var10.values;
            var1 = var4.commands;
            var6 = var9.bind(var10)(var1);
            _fun0051_ip = 387; continue _fun0051;
case 384:
            var13 = var2.descriptor;
            var12 = new Array(0);
            var10 = var2.commands;
            for(var1 in var10)
case 30:
            {
case 388:
                var15 = var1;
                var14 = var2.commands;
                var15 = var14[var15];
                var14 = var12.push;
                var14 = var14.bind(var12)(var15);
                _fun0051_ip = 30; continue _fun0051;
            }
case 389:
            var10 = var4.commands;
            var7 = var13;
            var6 = var12;
            for(var1 in var10)
case 390:
            {
                var7 = var13;
                var6 = var12;
case 391:
                var15 = var1;
                var14 = var2.commands;
                var14 = var15 in var14;
                if(var14) { _fun0051_ip = 390; continue _fun0051 }
case 166:
                var14 = var4.commands;
                var15 = var14[var15];
                var14 = var12.push;
                var14 = var14.bind(var12)(var15);
                _fun0051_ip = 390; continue _fun0051;
            }
case 387:
            var1 = {};
            var1['descriptor'] = var7;
            var1['sectionCommands'] = var6;
            var4 = var3 != var4;
            var1['isGuildInstalled'] = var4;
            var2 = var3 != var2;
            var1['isUserInstalled'] = var2;
            return var1;
case 99:
            var1 = {};
            var4 = _closure1_slot0;
            var7 = _closure1_slot3;
            var2 = 31;
            var6 = var7[var2];
            var3 = undefined;
            var6 = var4.bind(var3)(var6);
            var6 = var6.BUILT_IN_SECTIONS;
            var5 = _closure1_slot19;
            var5 = var5.BUILT_IN;
            var5 = var6[var5];
            var1['descriptor'] = var5;
            var2 = var7[var2];
            var6 = var4.bind(var3)(var2);
            var5 = var6.getBuiltInCommands;
            var2 = 26;
            var2 = var7[var2];
            var2 = var4.bind(var3)(var2);
            var2 = var2.ApplicationCommandType;
            var2 = var2.CHAT;
            var4 = new Array(1);
            var4[0] = var2;
            var2 = true;
            var3 = false;
            var3 = var5.bind(var6)(var4, var2, var3);
            var1['sectionCommands'] = var3;
            var1['isGuildInstalled'] = var2;
            var1['isUserInstalled'] = var2;
            return var1;
        }
    };
    var3['getSection'] = var2;
    return var1;
})();