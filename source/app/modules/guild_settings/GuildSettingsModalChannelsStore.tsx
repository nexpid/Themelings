// app/modules/guild_settings/GuildSettingsModalChannelsStore.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var7 = native3;
    var3 = native6;
    var6 = native7;
    var _closure1_slot0 = var7;
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
 72: // try_end0
            _fun0001_ip = 76; continue _fun0001;
 74: // catch_target0
            CatchBlockStart(arg_register=1);
 76:
            var2 = function _isNativeReflectConstruct() {
                var1 = _closure2_slot0;
                var1 = !var1;
                var1 = !var1;
                return var1;
            };
            _closure1_slot26 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot26 = var1;
    var1 = function sortCategoryList(arg1, arg2) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var1 = arg1;
            var1 = var1.channel;
            var3 = var1.position;
            var5 = var1.type;
            var1 = arg2;
            var1 = var1.channel;
            var2 = var1.position;
            var7 = var1.type;
            if(!(var5 !== var7)) { _fun0002_ip = 118; continue _fun0002 }
 40:
            var4 = _closure1_slot9;
            var6 = undefined;
            var4 = var4.bind(var6)(var5);
            if(!var4) { _fun0002_ip = 69; continue _fun0002 }
 57:
            var4 = _closure1_slot9;
            var4 = var4.bind(var6)(var7);
            if(var4) { _fun0002_ip = 118; continue _fun0002 }
 69:
            var4 = _closure1_slot10;
            var4 = var4.bind(var6)(var5);
            if(!var4) { _fun0002_ip = 93; continue _fun0002 }
 81:
            var4 = _closure1_slot10;
            var4 = var4.bind(var6)(var7);
            if(var4) { _fun0002_ip = 118; continue _fun0002 }
 93:
            var1 = _closure1_slot15;
            var4 = var1.GUILD_TEXT;
            var1 = 1;
            if(!(var5 === var4)) { _fun0002_ip = 116; continue _fun0002 }
 110:
            var1 = -1;
 116:
            _fun0002_ip = 122; continue _fun0002;
 118:
            var1 = var3 - var2;
 122:
            return var1;
        }
    };
    var _closure1_slot27 = var1;
    var1 = function setIndex(arg1, arg2) {
        var2 = arg2;
        var1 = arg1;
        var1['index'] = var2;
        var1 = undefined;
        return var1;
    };
    var _closure1_slot28 = var1;
    var1 = function buildSortedChannels() {
        var3 = {};
        var2 = new Array(0);
        var3['_categories'] = var2;
        var2 = new Array(0);
        var3['null'] = var2;
        _closure1_slot19 = var3;
        var3 = global;
        var5 = var3.Object;
        var4 = var5.keys;
        var3 = _closure1_slot23;
        var5 = var4.bind(var5)(var3);
        var4 = var5.forEach;
        var3 = function(arg1) {
            _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                var3 = _closure1_slot23;
                var1 = arg1;
                var1 = var3[var1];
                var4 = null;
                if(!(var4 != var1)) { _fun0003_ip = 218; continue _fun0003 }
 23:
                var3 = _closure1_slot19;
                if(!(var4 != var3)) { _fun0003_ip = 218; continue _fun0003 }
 34:
                var5 = var1.type;
                var3 = _closure1_slot15;
                var3 = var3.GUILD_CATEGORY;
                if(!(var5 !== var3)) { _fun0003_ip = 148; continue _fun0003 }
 53:
                var3 = global;
                var6 = var3.String;
                var3 = var1.parent_id;
                var7 = var4 != var3;
                var5 = 'null';
                if(!var7) { _fun0003_ip = 81; continue _fun0003 }
 78:
                var5 = var3;
 81:
                var3 = undefined;
                var5 = var6.bind(var3)(var5);
                var3 = _closure1_slot19;
                var3 = var3[var5];
                if(!(var4 == var3)) { _fun0003_ip = 112; continue _fun0003 }
 100:
                var6 = _closure1_slot19;
                var3 = new Array(0);
                var6[var5] = var3;
 112:
                var3 = _closure1_slot19;
                var6 = var3[var5];
                var5 = var6.push;
                var3 = {};
                var3['channel'] = var1;
                var7 = -1;
                var3['index'] = var7;
                var3 = var5.bind(var6)(var3);
                _fun0003_ip = 218; continue _fun0003;
 148:
                var3 = _closure1_slot19;
                var6 = var3._categories;
                var5 = var6.push;
                var3 = {};
                var3['channel'] = var1;
                var7 = -1;
                var3['index'] = var7;
                var3 = var5.bind(var6)(var3);
                var5 = _closure1_slot19;
                var3 = var1.id;
                var3 = var5[var3];
                if(!(var4 == var3)) { _fun0003_ip = 218; continue _fun0003 }
 201:
                var3 = _closure1_slot19;
                var2 = var1.id;
                var1 = new Array(0);
                var3[var2] = var1;
 218:
                var1 = undefined;
                return var1;
            }
        };
        var3 = var4.bind(var5)(var3);
        var3 = _closure1_slot19;
        var5 = var3._categories;
        var4 = var5.sort;
        var3 = _closure1_slot27;
        var3 = var4.bind(var5)(var3);
        var3 = _closure1_slot19;
        var4 = var3._categories;
        var3 = var4.forEach;
        var1 = function(arg1) {
            _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                var1 = arg1;
                var3 = var1.channel;
                var4 = _closure1_slot19;
                var2 = null;
                if(!(var2 != var4)) { _fun0004_ip = 57; continue _fun0004 }
 21:
                if(!(var2 != var3)) { _fun0004_ip = 57; continue _fun0004 }
 25:
                var4 = _closure1_slot19;
                var3 = var3.id;
                var3 = var4[var3];
                if(!(var2 != var3)) { _fun0004_ip = 57; continue _fun0004 }
 42:
                var2 = var3.sort;
                var1 = _closure1_slot27;
                var1 = var2.bind(var3)(var1);
 57:
                var1 = undefined;
                return var1;
            }
        };
        var1 = var3.bind(var4)(var1);
        var4 = _closure1_slot0;
        var3 = _closure1_slot1;
        var1 = 10;
        var3 = var3[var1];
        var1 = undefined;
        var5 = var4.bind(var1)(var3);
        var3 = _closure1_slot19;
        var4 = var3._categories;
        var3 = _closure1_slot19;
        var5 = var5.bind(var1)(var4, var3);
        var4 = var5.forEach;
        var3 = _closure1_slot28;
        var3 = var4.bind(var5)(var3);
        var2 = _closure1_slot31;
        var2 = var2.bind(var1)();
        return var1;
    };
    var _closure1_slot29 = var1;
    var1 = function rebuildChannels() {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
            var5 = _closure1_slot13;
            var4 = var5.getChannels;
            var3 = _closure1_slot17;
            var4 = var4.bind(var5)(var3);
            var3 = _closure1_slot20;
            if(!(var4 !== var3)) { _fun0005_ip = 135; continue _fun0005 }
 32:
            _closure1_slot20 = var4;
            var3 = {};
            _closure1_slot23 = var3;
            var3 = _closure1_slot11;
            var6 = var4[var3];
            var5 = var6.forEach;
            var3 = function(arg1) {
                var1 = arg1;
                var1 = var1.channel;
                var3 = _closure1_slot23;
                var2 = var1.id;
                var3[var2] = var1;
                return var1;
            };
            var3 = var5.bind(var6)(var3);
            var3 = _closure1_slot12;
            var6 = var4[var3];
            var5 = var6.forEach;
            var3 = function(arg1) {
                var1 = arg1;
                var1 = var1.channel;
                var3 = _closure1_slot23;
                var2 = var1.id;
                var3[var2] = var1;
                return var1;
            };
            var3 = var5.bind(var6)(var3);
            var3 = _closure1_slot15;
            var3 = var3.GUILD_CATEGORY;
            var4 = var4[var3];
            var3 = var4.forEach;
            var2 = function(arg1) {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
                    var1 = arg1;
                    var3 = var1.channel;
                    var2 = var3.id;
                    var1 = 'null';
                    var1 = var1 === var2;
                    if(var1) { _fun0006_ip = 53; continue _fun0006 }
 24:
                    var5 = _closure1_slot14;
                    var4 = var5.can;
                    var2 = _closure1_slot16;
                    var2 = var2.VIEW_CHANNEL;
                    var1 = var4.bind(var5)(var2, var3);
 53:
                    if(!var1) { _fun0006_ip = 72; continue _fun0006 }
 56:
                    var2 = _closure1_slot23;
                    var1 = var3.id;
                    var2[var1] = var3;
 72:
                    var1 = undefined;
                    return var1;
                }
            };
            var2 = var3.bind(var4)(var2);
            var2 = _closure1_slot29;
            var1 = undefined;
            var2 = var2.bind(var1)();
            return var1;
 135:
            var1 = false;
            return var1;
        }
    };
    var _closure1_slot30 = var1;
    var1 = function setupSortLists() {
        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
            var4 = _closure1_slot19;
            var3 = null;
            if(!(var3 != var4)) { _fun0007_ip = 90; continue _fun0007 }
 15:
            var4 = _closure1_slot0;
            var5 = _closure1_slot1;
            var3 = 10;
            var3 = var5[var3];
            var7 = undefined;
            var6 = var4.bind(var7)(var3);
            var3 = _closure1_slot19;
            var5 = var3._categories;
            var4 = _closure1_slot19;
            var3 = function(arg1) {
                _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
 0:
                    var1 = arg1;
                    var3 = var1.channel;
                    var2 = var3.type;
                    var1 = _closure1_slot15;
                    var1 = var1.GUILD_CATEGORY;
                    var1 = var2 === var1;
                    if(var1) { _fun0008_ip = 68; continue _fun0008 }
 33:
                    var5 = _closure1_slot21;
                    var2 = null;
                    var2 = var2 != var5;
                    if(!var2) { _fun0008_ip = 65; continue _fun0008 }
 46:
                    var5 = _closure1_slot21;
                    var4 = var5.has;
                    var3 = var3.type;
                    var2 = var4.bind(var5)(var3);
 65:
                    var1 = var2;
 68:
                    return var1;
                }
            };
            var4 = var6.bind(var7)(var5, var4, var3);
            _closure1_slot22 = var4;
            var3 = var4.map;
            var1 = function(arg1) {
                var1 = arg1;
                var1 = var1.channel;
                var1 = var1.id;
                return var1;
            };
            var1 = var3.bind(var4)(var1);
            _closure1_slot18 = var1;
 90:
            var1 = undefined;
            return var1;
        }
    };
    var _closure1_slot31 = var1;
    var1 = ['lock_permissions', 'id'];
    var _closure1_slot2 = var1;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var2 = {};
    var1 = true;
    var2['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var2);
    var1 = 0;
    var2 = var6[var1];
    var1 = undefined;
    var2 = var7.bind(var1)(var2);
    var _closure1_slot3 = var2;
    var2 = 1;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot4 = var2;
    var2 = 2;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot5 = var2;
    var2 = 3;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot6 = var2;
    var2 = 4;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot7 = var2;
    var2 = 5;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot8 = var2;
    var2 = 6;
    var2 = var6[var2];
    var2 = var5.bind(var1)(var2);
    var8 = var2.isGuildSelectableChannelType;
    var _closure1_slot9 = var8;
    var2 = var2.isGuildVocalChannelType;
    var _closure1_slot10 = var2;
    var2 = 7;
    var8 = var6[var2];
    var8 = var5.bind(var1)(var8);
    var9 = var8.GUILD_SELECTABLE_CHANNELS_KEY;
    var _closure1_slot11 = var9;
    var8 = var8.GUILD_VOCAL_CHANNELS_KEY;
    var _closure1_slot12 = var8;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot13 = var2;
    var2 = 8;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot14 = var2;
    var2 = 9;
    var2 = var6[var2];
    var2 = var5.bind(var1)(var2);
    var8 = var2.ChannelTypes;
    var _closure1_slot15 = var8;
    var2 = var2.Permissions;
    var _closure1_slot16 = var2;
    var2 = null;
    var _closure1_slot17 = var2;
    var _closure1_slot18 = var2;
    var _closure1_slot19 = var2;
    var _closure1_slot20 = var2;
    var _closure1_slot21 = var2;
    var _closure1_slot22 = var2;
    var2 = {};
    var _closure1_slot23 = var2;
    var2 = 11;
    var2 = var6[var2];
    var10 = var7.bind(var1)(var2);
    var9 = var10.debounce;
    var8 = function() {
        var3 = _closure1_slot30;
        var1 = undefined;
        var3 = var3.bind(var1)();
        var3 = _closure1_slot25;
        var2 = var3.emitChange;
        var2 = var2.bind(var3)();
        return var1;
    };
    var2 = 500;
    var2 = var9.bind(var10)(var8, var2);
    var _closure1_slot24 = var2;
    var2 = 12;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var8 = var2.Store;
    var2 = function(arg1) {
        var4 = function GuildSettingsModalChannelsStoreClass() {
            _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
 0:
                var4 = this;
                var3 = undefined;
                var5 = undefined;
                var1 = _closure1_slot3;
                var2 = _closure2_slot0;
                var1 = var1.bind(var3)(var4, var2);
                var1 = _closure1_slot6;
                var9 = var1.bind(var3)(var2);
                var2 = _closure1_slot5;
                var1 = _closure1_slot26;
                var1 = var1.bind(var3)();
                if(var1) { _fun0009_ip = 69; continue _fun0009 }
 51:
                var7 = var9.apply;
                var5 = arguments;
                var1 = var5;
                var1 = var7.bind(var9)(var4, var1);
                _fun0009_ip = 105; continue _fun0009;
 69:
                var7 = global;
                var8 = var7.Reflect;
                var7 = var8.construct;
                var6 = _closure1_slot6;
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
        var5 = _closure1_slot7;
        var3 = undefined;
        var2 = arg1;
        var2 = var5.bind(var3)(var4, var2);
        var2 = _closure1_slot4;
        var5 = {};
        var1 = 'initialize';
        var5['key'] = var1;
        var1 = function value() {
            var4 = this;
            var3 = var4.waitFor;
            var2 = _closure1_slot13;
            var2 = var3.bind(var4)(var2);
            var3 = var4.syncWith;
            var1 = _closure1_slot13;
            var2 = new Array(1);
            var2[0] = var1;
            var1 = function() {
                var2 = _closure1_slot24;
                var1 = undefined;
                var1 = var2.bind(var1)();
                var1 = false;
                return var1;
            };
            var1 = var3.bind(var4)(var2, var1);
            var1 = undefined;
            return var1;
        };
        var5['value'] = var1;
        var1 = new Array(7);
        var1[0] = var5;
        var5 = {};
        var7 = 'initGuild';
        var5['key'] = var7;
        var7 = function value(arg1) {
            var2 = arg1;
            _closure1_slot17 = var2;
            var2 = _closure1_slot30;
            var1 = undefined;
            var2 = var2.bind(var1)();
            return var1;
        };
        var5['value'] = var7;
        var1[1] = var5;
        var5 = {};
        var7 = 'channels';
        var5['key'] = var7;
        var7 = function get() {
            var1 = _closure1_slot19;
            return var1;
        };
        var5['get'] = var7;
        var1[2] = var5;
        var5 = {};
        var7 = 'order';
        var5['key'] = var7;
        var7 = function get() {
            var1 = _closure1_slot18;
            return var1;
        };
        var5['get'] = var7;
        var1[3] = var5;
        var5 = {};
        var7 = 'sortingType';
        var5['key'] = var7;
        var7 = function get() {
            var1 = _closure1_slot21;
            return var1;
        };
        var5['get'] = var7;
        var1[4] = var5;
        var5 = {};
        var7 = 'channelList';
        var5['key'] = var7;
        var7 = function get() {
            var1 = _closure1_slot22;
            return var1;
        };
        var5['get'] = var7;
        var1[5] = var5;
        var5 = {};
        var7 = 'getLocalChannel';
        var5['key'] = var7;
        var6 = function value(arg1) {
            var2 = _closure1_slot23;
            var1 = arg1;
            var1 = var2[var1];
            return var1;
        };
        var5['value'] = var6;
        var1[6] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var9 = var2.bind(var1)(var8);
    var2 = 'GuildSettingsModalChannelsStore';
    var9['displayName'] = var2;
    var2 = 13;
    var2 = var6[var2];
    var13 = var7.bind(var1)(var2);
    var2 = {};
    var7 = function handleTerminate() {
        var1 = null;
        _closure1_slot17 = var1;
        _closure1_slot18 = var1;
        _closure1_slot19 = var1;
        _closure1_slot21 = var1;
        _closure1_slot22 = var1;
        _closure1_slot20 = var1;
        var1 = undefined;
        return var1;
    };
    var2['GUILD_SETTINGS_MODAL_CHANNELS_TERMINATE'] = var7;
    var7 = function handleStartReorder(arg1) {
        _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
 0:
            var1 = arg1;
            var4 = var1.sortingType;
            var3 = _closure1_slot19;
            var2 = null;
            if(!(var2 != var3)) { _fun0010_ip = 69; continue _fun0010 }
 22:
            var2 = global;
            var2 = var2.Set;
            var3 = var2.prototype;
            var3 = Object.create(var3, {constructor: {value: var2}});
            var6 = var3;
            var5 = var4;
            var2 = new var6[var2](var5, var4);
            var2 = var2 instanceof Object ? var2 : var3;
            _closure1_slot21 = var2;
            var2 = _closure1_slot31;
            var1 = undefined;
            var2 = var2.bind(var1)();
            return var1;
 69:
            var1 = false;
            return var1;
        }
    };
    var2['GUILD_SETTINGS_MODAL_CHANNELS_START_REORDER'] = var7;
    var7 = function handleStopReorder() {
        var2 = null;
        _closure1_slot21 = var2;
        var2 = _closure1_slot31;
        var1 = undefined;
        var2 = var2.bind(var1)();
        return var1;
    };
    var2['GUILD_SETTINGS_MODAL_CHANNELS_STOP_REORDER'] = var7;
    var7 = function handleLocalSortChange(arg1) {
        var1 = arg1;
        var3 = var1.updates;
        var2 = var3.forEach;
        var1 = function(arg1) {
            _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
 0:
                var1 = arg1;
                var3 = _closure1_slot23;
                var2 = var1.id;
                var3 = var3[var2];
                var2 = null;
                if(!(var2 != var3)) { _fun0011_ip = 89; continue _fun0011 }
 25:
                var2 = var1.lock_permissions;
                var2 = var1.id;
                var5 = _closure1_slot8;
                var3 = _closure1_slot2;
                var2 = undefined;
                var5 = var5.bind(var2)(var1, var3);
                var3 = _closure1_slot23;
                var2 = var1.id;
                var4 = _closure1_slot23;
                var1 = var1.id;
                var4 = var4[var1];
                var1 = var4.merge;
                var1 = var1.bind(var4)(var5);
                var3[var2] = var1;
 89:
                var1 = undefined;
                return var1;
            }
        };
        var1 = var2.bind(var3)(var1);
        var2 = _closure1_slot29;
        var1 = undefined;
        var2 = var2.bind(var1)();
        return var1;
    };
    var2['GUILD_SETTINGS_MODAL_LOCAL_SORT_CHANGE'] = var7;
    var7 = var9.prototype;
    var7 = Object.create(var7, {constructor: {value: var9}});
    var14 = var7;
    var12 = var2;
    var2 = new var14[var9](var13, var12, var11);
    var2 = var2 instanceof Object ? var2 : var7;
    var _closure1_slot25 = var2;
    var4 = 14;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/guild_settings/GuildSettingsModalChannelsStore.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();