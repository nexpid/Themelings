// app/stores/CategoryCollapseStore.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var7 = native3;
    var3 = native6;
    var6 = native7;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var6;
    var1 = function _isNativeReflectConstruct() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
 2: // try_start_0
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
 70: // try_end0
            _fun0001_ip = 74; continue _fun0001;
 72: // catch_target0
            CatchBlockStart(arg_register=1);
 74:
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
 0:
            var3 = arg1;
            var _closure2_slot0 = var3;
            var5 = global;
            var2 = var5.Symbol;
            var4 = 'undefined';
            var2 = typeof var2;
            var2 = var4 !== var2;
            if(!var2) { _fun0002_ip = 45; continue _fun0002 }
 30:
            var4 = var5.Symbol;
            var4 = var4.iterator;
            var2 = var3[var4];
 45:
            if(var2) { _fun0002_ip = 54; continue _fun0002 }
 48:
            var2 = var3.@@iterator;
 54:
            if(var2) { _fun0002_ip = 342; continue _fun0002 }
 60:
            var6 = var5.Array;
            var4 = var6.isArray;
            var6 = var4.bind(var6)(var3);
            var4 = var2;
            if(var6) { _fun0002_ip = 322; continue _fun0002 }
 85:
            var8 = undefined;
            var6 = undefined;
            if(!var3) { _fun0002_ip = 282; continue _fun0002 }
 95:
            var9 = 'string';
            var7 = typeof var3;
            if(!(var9 !== var7)) { _fun0002_ip = 269; continue _fun0002 }
 109:
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
            if(!var7) { _fun0002_ip = 162; continue _fun0002 }
 157:
            var7 = var3.constructor;
 162:
            var10 = var9;
            if(!var7) { _fun0002_ip = 178; continue _fun0002 }
 168:
            var7 = var3.constructor;
            var10 = var7.name;
 178:
            var7 = 'Map';
            if(!(var7 !== var10)) { _fun0002_ip = 248; continue _fun0002 }
 186:
            var7 = 'Set';
            if(!(var7 !== var10)) { _fun0002_ip = 248; continue _fun0002 }
 194:
            var7 = 'Arguments';
            if(!(var7 !== var10)) { _fun0002_ip = 233; continue _fun0002 }
 204:
            var9 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
            var7 = var9.test;
            var9 = var7.bind(var9)(var10);
            var7 = undefined;
            if(!var9) { _fun0002_ip = 246; continue _fun0002 }
 233:
            var9 = _closure1_slot15;
            var7 = var9.bind(var8)(var3, var8);
 246:
            _fun0002_ip = 264; continue _fun0002;
 248:
            var10 = var5.Array;
            var9 = var10.from;
            var7 = var9.bind(var10)(var3);
 264:
            var6 = var7;
            _fun0002_ip = 282; continue _fun0002;
 269:
            var7 = _closure1_slot15;
            var6 = var7.bind(var8)(var3, var8);
 282:
            var4 = var6;
            if(var4) { _fun0002_ip = 322; continue _fun0002 }
 288:
            var7 = var5.TypeError;
            var5 = var7.prototype;
            var6 = Object.create(var5, {constructor: {value: var7}});
            var13 = 'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.';
            var14 = var6;
            var5 = new var14[var7](var13, var12);
            var5 = var5 instanceof Object ? var5 : var6;
            throw var5;
 322:
            if(!var4) { _fun0002_ip = 329; continue _fun0002 }
 325:
            _closure2_slot0 = var4;
 329:
            var4 = 0;
            var _closure2_slot1 = var4;
            var1 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                    var2 = _closure2_slot1;
                    var1 = _closure2_slot0;
                    var1 = var1.length;
                    if(!(!(var2 >= var1))) { _fun0003_ip = 56; continue _fun0003 }
 20:
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
                    _fun0003_ip = 67; continue _fun0003;
 56:
                    var2 = {};
                    var3 = true;
                    var2['done'] = var3;
                    var1 = var2;
 67:
                    return var1;
                }
            };
            return var1;
 342:
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
 0:
            var4 = arg1;
            var1 = null;
            var3 = undefined;
            var1 = var1 == var3;
            if(var1) { _fun0004_ip = 23; continue _fun0004 }
 14:
            var2 = var4.length;
            var1 = var3 > var2;
 23:
            var2 = undefined;
            if(!var1) { _fun0004_ip = 33; continue _fun0004 }
 28:
            var2 = var4.length;
 33:
            var1 = global;
            var1 = var1.Array;
            var1 = var1.bind(var3)(var2);
            var3 = 0;
            var5 = var3 < var2;
            if(!var5) { _fun0004_ip = 70; continue _fun0004 }
 55:
            var5 = var4[var3];
            var1[var3] = var5;
            var3 = var3 + 1;
            if(var3 < var2) { _fun0004_ip = 55; continue _fun0004 }
 70:
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
 0:
            var2 = arg1;
            var3 = _closure1_slot11;
            var4 = var3[var2];
            var3 = null;
            if(!(var3 != var4)) { _fun0005_ip = 32; continue _fun0005 }
 20:
            var1 = _closure1_slot11;
            var1 = delete var1[var2];
            var1 = undefined;
            return var1;
 32:
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
 0:
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
                if(var1) { _fun0006_ip = 69; continue _fun0006 }
 51:
                var7 = var9.apply;
                var5 = arguments;
                var1 = var5;
                var1 = var7.bind(var9)(var4, var1);
                _fun0006_ip = 105; continue _fun0006;
 69:
                var7 = global;
                var8 = var7.Reflect;
                var7 = var8.construct;
                var6 = _closure1_slot5;
                var6 = var6.bind(var3)(var4);
                var6 = var6.constructor;
                var5 = arguments;
                var1 = var7.bind(var8)(var9, var5, var6);
 105:
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
 0:
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
                if(!(var3 == var2)) { _fun0007_ip = 63; continue _fun0007 }
 61:
                var2 = {};
 63:
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
 0:
                var3 = arg1;
                var1 = null;
                var2 = var1 == var3;
                if(var2) { _fun0008_ip = 20; continue _fun0008 }
 12:
                var1 = 'null';
                var2 = var1 === var3;
 20:
                if(var2) { _fun0008_ip = 37; continue _fun0008 }
 23:
                var1 = _closure1_slot11;
                var1 = var1[var3];
                var2 = !var1;
 37:
                var1 = !var2;
                if(var2) { _fun0008_ip = 54; continue _fun0008 }
 43:
                var2 = _closure1_slot11;
                var1 = var2[var3];
 54:
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
 0:
            var1 = arg1;
            var2 = var1.userGuildSettings;
            var2 = var2.partial;
            if(var2) { _fun0009_ip = 27; continue _fun0009 }
 18:
            var2 = {};
            _closure1_slot11 = var2;
 27:
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
            if(var2) { _fun0009_ip = 216; continue _fun0009 }
 81:
            var2 = var6.value;
            var12 = var2.channel_overrides;
            var11 = var3;
            if(!(var7 != var12)) { _fun0009_ip = 195; continue _fun0009 }
 99:
            var12 = _closure1_slot14;
            var2 = var2.channel_overrides;
            var13 = var12.bind(var1)(var2);
            var14 = var13.bind(var1)();
            var2 = var14.done;
            var12 = var14;
            var5 = var12;
            var4 = var13;
            var11 = var3;
            if(var2) { _fun0009_ip = 195; continue _fun0009 }
 138:
            var14 = var12.value;
            var16 = var14.collapsed;
            var15 = _closure1_slot11;
            var2 = var14.channel_id;
            if(var16) { _fun0009_ip = 167; continue _fun0009 }
 161:
            var16 = delete var15[var2];
            _fun0009_ip = 171; continue _fun0009;
 167:
            var15[var2] = var8;
 171:
            var15 = var13.bind(var1)();
            var2 = var15.done;
            var12 = var15;
            var5 = var12;
            var4 = var13;
            var11 = var14;
            if(!var2) { _fun0009_ip = 138; continue _fun0009 }
 195:
            var12 = var9.bind(var1)();
            var2 = var12.done;
            var3 = var11;
            var6 = var12;
            if(!var2) { _fun0009_ip = 81; continue _fun0009 }
 216:
            return var1;
        }
    };
    var2['CONNECTION_OPEN'] = var9;
    var9 = function handleUserGuildSettingsFullUpdate(arg1) {
        _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
 0:
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
 109:
            {
 118:
                var13 = var4;
                var12 = _closure1_slot7;
                var11 = var12.getChannel;
                var11 = var11.bind(var12)(var13);
                var12 = var2 != var11;
                if(!var12) { _fun0010_ip = 151; continue _fun0010 }
 142:
                var13 = var11.guild_id;
                var12 = var2 != var13;
 151:
                if(!var12) { _fun0010_ip = 169; continue _fun0010 }
 154:
                var14 = var10.has;
                var13 = var11.guild_id;
                var12 = var14.bind(var10)(var13);
 169:
                if(!var12) { _fun0010_ip = 109; continue _fun0010 }
 172:
                var12 = _closure1_slot11;
                var11 = var11.id;
                var11 = delete var12[var11];
                _fun0010_ip = 109; continue _fun0010;
            }
 187:
            var2 = _closure1_slot14;
            var6 = var2.bind(var1)(var3);
            var3 = var6.bind(var1)();
            var2 = var3.done;
            var5 = true;
            var4 = var3;
            var3 = undefined;
            if(var2) { _fun0010_ip = 307; continue _fun0010 }
 215:
            var8 = _closure1_slot14;
            var2 = var4.value;
            var2 = var2.channel_overrides;
            var9 = var8.bind(var1)(var2);
            var8 = var9.bind(var1)();
            var2 = var8.done;
            if(var2) { _fun0010_ip = 292; continue _fun0010 }
 247:
            var10 = var8.value;
            var2 = var10.collapsed;
            if(!var2) { _fun0010_ip = 274; continue _fun0010 }
 261:
            var11 = _closure1_slot11;
            var2 = var10.channel_id;
            var11[var2] = var5;
 274:
            var11 = var9.bind(var1)();
            var2 = var11.done;
            var8 = var11;
            var3 = var10;
            if(!var2) { _fun0010_ip = 247; continue _fun0010 }
 292:
            var8 = var6.bind(var1)();
            var2 = var8.done;
            var4 = var8;
            if(!var2) { _fun0010_ip = 215; continue _fun0010 }
 307:
            return var1;
        }
    };
    var2['USER_GUILD_SETTINGS_FULL_UPDATE'] = var9;
    var9 = function handleCategoryCollapse(arg1) {
        _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
 0:
            var1 = arg1;
            var3 = var1.id;
            var2 = _closure1_slot11;
            var2 = var2[var3];
            if(var2) { _fun0011_ip = 36; continue _fun0011 }
 22:
            var2 = _closure1_slot11;
            var1 = true;
            var2[var3] = var1;
            var1 = undefined;
            return var1;
 36:
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
 0:
                var1 = arg1;
                var1 = var1.channel;
                var3 = var1.id;
                var2 = 'null';
                if(!(var2 !== var3)) { _fun0012_ip = 39; continue _fun0012 }
 21:
                var3 = _closure1_slot11;
                var2 = var1.id;
                var1 = true;
                var3[var2] = var1;
 39:
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