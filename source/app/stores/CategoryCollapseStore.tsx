// app/stores/CategoryCollapseStore.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var6;
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
            _closure1_slot13 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot13 = var1;
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
            var9 = _closure1_slot15;
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
            var7 = _closure1_slot15;
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
    var _closure1_slot14 = var1;
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
    var _closure1_slot15 = var1;
    var1 = function incrementVersion() {
        var3 = _closure1_slot12;
        var1 = 1;
        var1 = var3 + var1;
        _closure1_slot12 = var1;
        var1 = undefined;
        return var1;
    };
    var _closure1_slot16 = var1;
    var1 = function deleteCategory(arg1) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
            var2 = arg1;
            var3 = _closure1_slot11;
            var4 = var3[var2];
            var3 = null;
            if(!(var3 != var4)) { _fun0005_ip = 39; continue _fun0005 }
case 33:
            var1 = _closure1_slot11;
            var1 = delete var1[var2];
            var1 = undefined;
            return var1;
case 39:
            var1 = false;
            return var1;
        }
    };
    var _closure1_slot17 = var1;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var2 = {};
    var1 = true;
    var2['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var2);
    var2 = 0;
    var8 = var6[var2];
    var1 = undefined;
    var8 = var7.bind(var1)(var8);
    var _closure1_slot2 = var8;
    var8 = 1;
    var8 = var6[var8];
    var8 = var7.bind(var1)(var8);
    var _closure1_slot3 = var8;
    var8 = 2;
    var8 = var6[var8];
    var8 = var7.bind(var1)(var8);
    var _closure1_slot4 = var8;
    var8 = 3;
    var8 = var6[var8];
    var8 = var7.bind(var1)(var8);
    var _closure1_slot5 = var8;
    var8 = 4;
    var8 = var6[var8];
    var8 = var7.bind(var1)(var8);
    var _closure1_slot6 = var8;
    var8 = 5;
    var8 = var6[var8];
    var8 = var7.bind(var1)(var8);
    var _closure1_slot7 = var8;
    var8 = 6;
    var8 = var6[var8];
    var8 = var7.bind(var1)(var8);
    var _closure1_slot8 = var8;
    var8 = 7;
    var8 = var6[var8];
    var8 = var7.bind(var1)(var8);
    var _closure1_slot9 = var8;
    var8 = 8;
    var8 = var6[var8];
    var8 = var5.bind(var1)(var8);
    var8 = var8.ChannelTypes;
    var _closure1_slot10 = var8;
    var8 = {};
    var _closure1_slot11 = var8;
    var _closure1_slot12 = var2;
    var2 = 10;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var8 = var2.PersistedStore;
    var2 = function(arg1) {
        var4 = function CategoryCollapseStore() {
            _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                var4 = this;
                var3 = undefined;
                var5 = undefined;
                var1 = _closure1_slot2;
                var2 = _closure2_slot0;
                var1 = var1.bind(var3)(var4, var2);
                var1 = _closure1_slot5;
                var9 = var1.bind(var3)(var2);
                var2 = _closure1_slot4;
                var1 = _closure1_slot13;
                var1 = var1.bind(var3)();
                if(var1) { _fun0006_ip = 40; continue _fun0006 }
case 41:
                var7 = var9.apply;
                var5 = arguments;
                var1 = var5;
                var1 = var7.bind(var9)(var4, var1);
                _fun0006_ip = 42; continue _fun0006;
case 40:
                var7 = global;
                var8 = var7.Reflect;
                var7 = var8.construct;
                var6 = _closure1_slot5;
                var6 = var6.bind(var3)(var4);
                var6 = var6.constructor;
                var5 = arguments;
                var1 = var7.bind(var8)(var9, var5, var6);
case 42:
                var1 = var2.bind(var3)(var4, var1);
                return var1;
            }
        };
        var _closure2_slot0 = var4;
        var5 = _closure1_slot6;
        var3 = undefined;
        var2 = arg1;
        var2 = var5.bind(var3)(var4, var2);
        var2 = _closure1_slot3;
        var5 = {};
        var1 = 'initialize';
        var5['key'] = var1;
        var1 = function value(arg1) {
            _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                var2 = arg1;
                var5 = this;
                var6 = var5.waitFor;
                var4 = _closure1_slot7;
                var3 = _closure1_slot8;
                var3 = var6.bind(var5)(var4, var3);
                var3 = var5.removeChangeListener;
                var4 = _closure1_slot16;
                var3 = var3.bind(var5)(var4);
                var3 = var5.addChangeListener;
                var3 = var3.bind(var5)(var4);
                var3 = null;
                if(!(var3 == var2)) { _fun0007_ip = 43; continue _fun0007 }
case 11:
                var2 = {};
case 43:
                _closure1_slot11 = var2;
                var1 = undefined;
                return var1;
            }
        };
        var5['value'] = var1;
        var1 = new Array(5);
        var1[0] = var5;
        var5 = {};
        var7 = 'getState';
        var5['key'] = var7;
        var7 = function value() {
            var1 = _closure1_slot11;
            return var1;
        };
        var5['value'] = var7;
        var1[1] = var5;
        var5 = {};
        var7 = 'isCollapsed';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                var3 = arg1;
                var1 = null;
                var2 = var1 == var3;
                if(var2) { _fun0008_ip = 33; continue _fun0008 }
case 44:
                var1 = 'null';
                var2 = var1 === var3;
case 33:
                if(var2) { _fun0008_ip = 45; continue _fun0008 }
case 35:
                var1 = _closure1_slot11;
                var1 = var1[var3];
                var2 = !var1;
case 45:
                var1 = !var2;
                if(var2) { _fun0008_ip = 46; continue _fun0008 }
case 47:
                var2 = _closure1_slot11;
                var1 = var2[var3];
case 46:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[2] = var5;
        var5 = {};
        var7 = 'getCollapsedCategories';
        var5['key'] = var7;
        var7 = function value() {
            var1 = _closure1_slot11;
            return var1;
        };
        var5['value'] = var7;
        var1[3] = var5;
        var5 = {};
        var7 = 'version';
        var5['key'] = var7;
        var6 = function get() {
            var1 = _closure1_slot12;
            return var1;
        };
        var5['get'] = var6;
        var1[4] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var8 = var2.bind(var1)(var8);
    var2 = 'CategoryCollapseStore';
    var8['displayName'] = var2;
    var2 = 'collapsedCategories';
    var8['persistKey'] = var2;
    var2 = 11;
    var2 = var6[var2];
    var12 = var7.bind(var1)(var2);
    var2 = {};
    var9 = function handleConnectionOpen(arg1) {
        _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
            var1 = arg1;
            var2 = var1.userGuildSettings;
            var2 = var2.partial;
            if(var2) { _fun0009_ip = 48; continue _fun0009 }
case 49:
            var2 = {};
            _closure1_slot11 = var2;
case 48:
            var3 = _closure1_slot14;
            var1 = var1.userGuildSettings;
            var2 = var1.entries;
            var1 = undefined;
            var9 = var3.bind(var1)(var2);
            var3 = var9.bind(var1)();
            var2 = var3.done;
            var8 = true;
            var7 = null;
            var6 = var3;
            var5 = undefined;
            var4 = undefined;
            var3 = undefined;
            if(var2) { _fun0009_ip = 50; continue _fun0009 }
case 51:
            var2 = var6.value;
            var12 = var2.channel_overrides;
            var11 = var3;
            if(!(var7 != var12)) { _fun0009_ip = 24; continue _fun0009 }
case 52:
            var12 = _closure1_slot14;
            var2 = var2.channel_overrides;
            var13 = var12.bind(var1)(var2);
            var14 = var13.bind(var1)();
            var2 = var14.done;
            var12 = var14;
            var5 = var12;
            var4 = var13;
            var11 = var3;
            if(var2) { _fun0009_ip = 24; continue _fun0009 }
case 53:
            var14 = var12.value;
            var16 = var14.collapsed;
            var15 = _closure1_slot11;
            var2 = var14.channel_id;
            if(var16) { _fun0009_ip = 54; continue _fun0009 }
case 55:
            var16 = delete var15[var2];
            _fun0009_ip = 56; continue _fun0009;
case 54:
            var15[var2] = var8;
case 56:
            var15 = var13.bind(var1)();
            var2 = var15.done;
            var12 = var15;
            var5 = var12;
            var4 = var13;
            var11 = var14;
            if(!var2) { _fun0009_ip = 53; continue _fun0009 }
case 24:
            var12 = var9.bind(var1)();
            var2 = var12.done;
            var3 = var11;
            var6 = var12;
            if(!var2) { _fun0009_ip = 51; continue _fun0009 }
case 50:
            return var1;
        }
    };
    var2['CONNECTION_OPEN'] = var9;
    var9 = function handleUserGuildSettingsFullUpdate(arg1) {
        _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
            var1 = arg1;
            var3 = var1.userGuildSettings;
            var1 = global;
            var5 = var1.Set;
            var2 = var3.map;
            var1 = function(arg1) {
                var1 = arg1;
                var1 = var1.guild_id;
                return var1;
            };
            var6 = var2.bind(var3)(var1);
            var4 = var6.filter;
            var8 = _closure1_slot0;
            var2 = _closure1_slot1;
            var1 = 9;
            var2 = var2[var1];
            var1 = undefined;
            var2 = var8.bind(var1)(var2);
            var2 = var2.isNotNullish;
            var15 = var4.bind(var6)(var2);
            var4 = var5.prototype;
            var4 = Object.create(var4, {constructor: {value: var5}});
            var16 = var4;
            var2 = new var16[var5](var15, var14);
            var10 = var2 instanceof Object ? var2 : var4;
            var8 = _closure1_slot11;
            var2 = null;
            for(var4 in var8)
case 57:
            {
case 58:
                var13 = var4;
                var12 = _closure1_slot7;
                var11 = var12.getChannel;
                var11 = var11.bind(var12)(var13);
                var12 = var2 != var11;
                if(!var12) { _fun0010_ip = 59; continue _fun0010 }
case 60:
                var13 = var11.guild_id;
                var12 = var2 != var13;
case 59:
                if(!var12) { _fun0010_ip = 21; continue _fun0010 }
case 61:
                var14 = var10.has;
                var13 = var11.guild_id;
                var12 = var14.bind(var10)(var13);
case 21:
                if(!var12) { _fun0010_ip = 57; continue _fun0010 }
case 62:
                var12 = _closure1_slot11;
                var11 = var11.id;
                var11 = delete var12[var11];
                _fun0010_ip = 57; continue _fun0010;
            }
case 23:
            var2 = _closure1_slot14;
            var6 = var2.bind(var1)(var3);
            var3 = var6.bind(var1)();
            var2 = var3.done;
            var5 = true;
            var4 = var3;
            var3 = undefined;
            if(var2) { _fun0010_ip = 63; continue _fun0010 }
case 64:
            var8 = _closure1_slot14;
            var2 = var4.value;
            var2 = var2.channel_overrides;
            var9 = var8.bind(var1)(var2);
            var8 = var9.bind(var1)();
            var2 = var8.done;
            if(var2) { _fun0010_ip = 65; continue _fun0010 }
case 27:
            var10 = var8.value;
            var2 = var10.collapsed;
            if(!var2) { _fun0010_ip = 66; continue _fun0010 }
case 67:
            var11 = _closure1_slot11;
            var2 = var10.channel_id;
            var11[var2] = var5;
case 66:
            var11 = var9.bind(var1)();
            var2 = var11.done;
            var8 = var11;
            var3 = var10;
            if(!var2) { _fun0010_ip = 27; continue _fun0010 }
case 65:
            var8 = var6.bind(var1)();
            var2 = var8.done;
            var4 = var8;
            if(!var2) { _fun0010_ip = 64; continue _fun0010 }
case 63:
            return var1;
        }
    };
    var2['USER_GUILD_SETTINGS_FULL_UPDATE'] = var9;
    var9 = function handleCategoryCollapse(arg1) {
        _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
            var1 = arg1;
            var3 = var1.id;
            var2 = _closure1_slot11;
            var2 = var2[var3];
            if(var2) { _fun0011_ip = 68; continue _fun0011 }
case 69:
            var2 = _closure1_slot11;
            var1 = true;
            var2[var3] = var1;
            var1 = undefined;
            return var1;
case 68:
            var1 = false;
            return var1;
        }
    };
    var2['CATEGORY_COLLAPSE'] = var9;
    var9 = function handleCategoryExpand(arg1) {
        var1 = arg1;
        var3 = var1.id;
        var2 = _closure1_slot17;
        var1 = undefined;
        var1 = var2.bind(var1)(var3);
        return var1;
    };
    var2['CATEGORY_EXPAND'] = var9;
    var9 = function handleCategoryCollapseAll(arg1) {
        var1 = arg1;
        var4 = var1.guildId;
        var3 = _closure1_slot9;
        var2 = var3.getChannels;
        var2 = var2.bind(var3)(var4);
        var1 = _closure1_slot10;
        var1 = var1.GUILD_CATEGORY;
        var3 = var2[var1];
        var2 = var3.forEach;
        var1 = function(arg1) {
            _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
case 0:
                var1 = arg1;
                var1 = var1.channel;
                var3 = var1.id;
                var2 = 'null';
                if(!(var2 !== var3)) { _fun0012_ip = 70; continue _fun0012 }
case 71:
                var3 = _closure1_slot11;
                var2 = var1.id;
                var1 = true;
                var3[var2] = var1;
case 70:
                var1 = undefined;
                return var1;
            }
        };
        var1 = var2.bind(var3)(var1);
        var1 = undefined;
        return var1;
    };
    var2['CATEGORY_COLLAPSE_ALL'] = var9;
    var9 = function handleCategoryExpandAll(arg1) {
        var1 = arg1;
        var4 = var1.guildId;
        var3 = _closure1_slot9;
        var2 = var3.getChannels;
        var2 = var2.bind(var3)(var4);
        var1 = _closure1_slot10;
        var1 = var1.GUILD_CATEGORY;
        var3 = var2[var1];
        var2 = var3.forEach;
        var1 = function(arg1) {
            var1 = arg1;
            var1 = var1.channel;
            var2 = _closure1_slot11;
            var1 = var1.id;
            var1 = delete var2[var1];
            var1 = undefined;
            return var1;
        };
        var1 = var2.bind(var3)(var1);
        var1 = undefined;
        return var1;
    };
    var2['CATEGORY_EXPAND_ALL'] = var9;
    var4 = function handleChannelDelete(arg1) {
        var1 = arg1;
        var1 = var1.channel;
        var3 = var1.id;
        var2 = _closure1_slot17;
        var1 = undefined;
        var1 = var2.bind(var1)(var3);
        return var1;
    };
    var2['CHANNEL_DELETE'] = var4;
    var4 = var8.prototype;
    var4 = Object.create(var4, {constructor: {value: var8}});
    var13 = var4;
    var11 = var2;
    var2 = new var13[var8](var12, var11, var10);
    var2 = var2 instanceof Object ? var2 : var4;
    var4 = 12;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'stores/CategoryCollapseStore.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();