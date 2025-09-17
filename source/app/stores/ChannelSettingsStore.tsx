// app/stores/ChannelSettingsStore.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var8 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var8;
    var _closure1_slot2 = var6;
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
            _closure1_slot30 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot30 = var1;
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
            if(!var2) { _fun0002_ip = 46; continue _fun0002 }
 30:
            var4 = var5.Symbol;
            var4 = var4.iterator;
            var2 = var3[var4];
 46:
            if(var2) { _fun0002_ip = 55; continue _fun0002 }
 49:
            var2 = var3.@@iterator;
 55:
            if(var2) { _fun0002_ip = 343; continue _fun0002 }
 61:
            var6 = var5.Array;
            var4 = var6.isArray;
            var6 = var4.bind(var6)(var3);
            var4 = var2;
            if(var6) { _fun0002_ip = 323; continue _fun0002 }
 86:
            var8 = undefined;
            var6 = undefined;
            if(!var3) { _fun0002_ip = 283; continue _fun0002 }
 96:
            var9 = 'string';
            var7 = typeof var3;
            if(!(var9 !== var7)) { _fun0002_ip = 270; continue _fun0002 }
 110:
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
            if(!var7) { _fun0002_ip = 163; continue _fun0002 }
 158:
            var7 = var3.constructor;
 163:
            var10 = var9;
            if(!var7) { _fun0002_ip = 179; continue _fun0002 }
 169:
            var7 = var3.constructor;
            var10 = var7.name;
 179:
            var7 = 'Map';
            if(!(var7 !== var10)) { _fun0002_ip = 249; continue _fun0002 }
 187:
            var7 = 'Set';
            if(!(var7 !== var10)) { _fun0002_ip = 249; continue _fun0002 }
 195:
            var7 = 'Arguments';
            if(!(var7 !== var10)) { _fun0002_ip = 234; continue _fun0002 }
 205:
            var9 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
            var7 = var9.test;
            var9 = var7.bind(var9)(var10);
            var7 = undefined;
            if(!var9) { _fun0002_ip = 247; continue _fun0002 }
 234:
            var9 = _closure1_slot32;
            var7 = var9.bind(var8)(var3, var8);
 247:
            _fun0002_ip = 265; continue _fun0002;
 249:
            var10 = var5.Array;
            var9 = var10.from;
            var7 = var9.bind(var10)(var3);
 265:
            var6 = var7;
            _fun0002_ip = 283; continue _fun0002;
 270:
            var7 = _closure1_slot32;
            var6 = var7.bind(var8)(var3, var8);
 283:
            var4 = var6;
            if(var4) { _fun0002_ip = 323; continue _fun0002 }
 289:
            var7 = var5.TypeError;
            var5 = var7.prototype;
            var6 = Object.create(var5, {constructor: {value: var7}});
            var13 = 'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.';
            var14 = var6;
            var5 = new var14[var7](var13, var12);
            var5 = var5 instanceof Object ? var5 : var6;
            throw var5;
 323:
            if(!var4) { _fun0002_ip = 330; continue _fun0002 }
 326:
            _closure2_slot0 = var4;
 330:
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
 343:
            var1 = var2.call;
            var3 = var1.bind(var2)(var3);
            var2 = var3.next;
            var1 = var2.bind;
            var1 = var1.bind(var2)(var3);
            return var1;
        }
    };
    var _closure1_slot31 = var1;
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
    var _closure1_slot32 = var1;
    var7 = function handleSetSection(arg1) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
            var2 = arg1;
            var3 = var2.section;
            var _closure1_slot15 = var3;
            var2 = var2.subsection;
            var _closure1_slot16 = var2;
            var3 = _closure1_slot18;
            var2 = null;
            var2 = var2 != var3;
            if(!var2) { _fun0005_ip = 58; continue _fun0005 }
 40:
            var4 = _closure1_slot15;
            var3 = _closure1_slot12;
            var3 = var3.INSTANT_INVITES;
            var2 = var4 === var3;
 58:
            if(!var2) { _fun0005_ip = 169; continue _fun0005 }
 61:
            var2 = true;
            _closure1_slot24 = var2;
            var4 = _closure1_slot0;
            var3 = _closure1_slot2;
            var2 = 10;
            var3 = var3[var2];
            var2 = undefined;
            var2 = var4.bind(var2)(var3);
            var4 = var2.HTTP;
            var3 = var4.get;
            var2 = {'url': null, 'oldFormErrors': true, 'rejectWithError': true};
            var7 = _closure1_slot13;
            var6 = var7.INSTANT_INVITES;
            var5 = _closure1_slot18;
            var5 = var5.id;
            var5 = var6.bind(var7)(var5);
            var2['url'] = var5;
            var4 = var3.bind(var4)(var2);
            var3 = var4.then;
            var2 = function(arg1) {
                var2 = false;
                _closure1_slot24 = var2;
                var3 = _closure1_slot1;
                var2 = _closure1_slot2;
                var1 = 11;
                var2 = var2[var1];
                var1 = undefined;
                var4 = var3.bind(var1)(var2);
                var3 = var4.dispatch;
                var2 = {};
                var5 = 'CHANNEL_SETTINGS_LOADED_INVITES';
                var2['type'] = var5;
                var5 = arg1;
                var5 = var5.body;
                var2['invites'] = var5;
                var2 = var3.bind(var4)(var2);
                return var1;
            };
            var1 = function() {
                var1 = false;
                _closure1_slot24 = var1;
                return var1;
            };
            var1 = var3.bind(var4)(var2, var1);
 169:
            var1 = undefined;
            return var1;
        }
    };
    var _closure1_slot33 = var7;
    var11 = function handleSettingsClose() {
        var1 = false;
        _closure1_slot25 = var1;
        var1 = _closure1_slot14;
        var1 = var1.CLOSED;
        _closure1_slot21 = var1;
        var1 = null;
        _closure1_slot15 = var1;
        var _closure1_slot17 = var1;
        var _closure1_slot18 = var1;
        var _closure1_slot19 = var1;
        var1 = {};
        _closure1_slot23 = var1;
        var1 = undefined;
        return var1;
    };
    var _closure1_slot34 = var11;
    var1 = function _createInvite(arg1) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
            var2 = arg1;
            var3 = _closure1_slot9;
            var1 = {};
            var5 = var2.code;
            var1['code'] = var5;
            var5 = var2.temporary;
            var1['temporary'] = var5;
            var5 = var2.revoked;
            var1['revoked'] = var5;
            var6 = var2.inviter;
            var5 = null;
            var7 = var5 != var6;
            var6 = null;
            if(!var7) { _fun0006_ip = 90; continue _fun0006 }
 60:
            var9 = _closure1_slot10;
            var10 = var2.inviter;
            var8 = var9.prototype;
            var8 = Object.create(var8, {constructor: {value: var9}});
            var11 = var8;
            var7 = new var11[var9](var10, var9);
            var6 = var7 instanceof Object ? var7 : var8;
 90:
            var1['inviter'] = var6;
            var8 = _closure1_slot8;
            var7 = var2.channel;
            var6 = undefined;
            var7 = var8.bind(var6)(var7);
            var1['channel'] = var7;
            var7 = var2.guild;
            var7 = var5 != var7;
            var5 = null;
            if(!var7) { _fun0006_ip = 165; continue _fun0006 }
 129:
            var8 = _closure1_slot0;
            var9 = _closure1_slot2;
            var7 = 13;
            var7 = var9[var7];
            var9 = var8.bind(var6)(var7);
            var8 = var9.fromInviteGuild;
            var7 = var2.guild;
            var5 = var8.bind(var9)(var7);
 165:
            var1['guild'] = var5;
            var5 = var2.uses;
            var1['uses'] = var5;
            var5 = var2.max_uses;
            var1['maxUses'] = var5;
            var5 = var2.max_age;
            var1['maxAge'] = var5;
            var5 = _closure1_slot1;
            var7 = _closure1_slot2;
            var4 = 14;
            var4 = var7[var4];
            var5 = var5.bind(var6)(var4);
            var4 = var2.created_at;
            var4 = var5.bind(var6)(var4);
            var1['createdAt'] = var4;
            var2 = var2.type;
            var1['type'] = var2;
            var2 = var3.prototype;
            var2 = Object.create(var2, {constructor: {value: var3}});
            var11 = var2;
            var10 = var1;
            var1 = new var11[var3](var10, var9);
            var1 = var1 instanceof Object ? var1 : var2;
            return var1;
        }
    };
    var _closure1_slot35 = var1;
    var1 = function _syncChannelUpdate(arg1) {
        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
            var7 = arg1;
            var1 = _closure1_slot17;
            var5 = null;
            var2 = var5 == var1;
            var1 = false;
            if(var2) { _fun0007_ip = 226; continue _fun0007 }
 24:
            var2 = _closure1_slot17;
            var2 = var2.id;
            var1 = false;
            if(!(var2 === var7)) { _fun0007_ip = 226; continue _fun0007 }
 42:
            var3 = _closure1_slot17;
            var2 = _closure1_slot18;
            if(!(var3 !== var2)) { _fun0007_ip = 165; continue _fun0007 }
 54:
            var3 = _closure1_slot11;
            var2 = var3.getChannel;
            var2 = var2.bind(var3)(var7);
            var3 = var5 == var2;
            var1 = false;
            if(var3) { _fun0007_ip = 226; continue _fun0007 }
 80:
            _closure1_slot17 = var2;
            var2 = _closure1_slot18;
            var3 = var5 != var2;
            var1 = true;
            if(!var3) { _fun0007_ip = 226; continue _fun0007 }
 100:
            var10 = _closure1_slot18;
            var9 = var10.set;
            var3 = _closure1_slot17;
            var8 = var3.permissionOverwrites;
            var3 = 'permissionOverwrites';
            var3 = var9.bind(var10)(var3, var8);
            _closure1_slot18 = var3;
            var9 = _closure1_slot11;
            var8 = var9.getChannel;
            var3 = _closure1_slot18;
            var3 = var3.parent_id;
            var3 = var8.bind(var9)(var3);
            _closure1_slot19 = var3;
            var1 = true;
            _fun0007_ip = 226; continue _fun0007;
 165:
            var3 = _closure1_slot11;
            var2 = var3.getChannel;
            var2 = var2.bind(var3)(var7);
            var3 = var5 == var2;
            var1 = false;
            if(var3) { _fun0007_ip = 226; continue _fun0007 }
 188:
            _closure1_slot17 = var2;
            _closure1_slot18 = var2;
            var6 = _closure1_slot11;
            var3 = var6.getChannel;
            var2 = _closure1_slot18;
            var2 = var2.parent_id;
            var2 = var3.bind(var6)(var2);
            _closure1_slot19 = var2;
            var1 = true;
 226:
            var2 = !var1;
            if(!var1) { _fun0007_ip = 240; continue _fun0007 }
 232:
            var1 = _closure1_slot18;
            var2 = var5 == var1;
 240:
            var1 = !var2;
            if(var2) { _fun0007_ip = 304; continue _fun0007 }
 246:
            var2 = _closure1_slot20;
            var3 = var5 != var2;
            if(!var3) { _fun0007_ip = 279; continue _fun0007 }
 257:
            var2 = _closure1_slot18;
            var6 = var2.permissionOverwrites;
            var2 = _closure1_slot20;
            var2 = var6[var2];
            var3 = var5 == var2;
 279:
            var1 = true;
            if(!var3) { _fun0007_ip = 304; continue _fun0007 }
 284:
            var5 = _closure1_slot18;
            var3 = var5.getGuildId;
            var3 = var3.bind(var5)();
            var _closure1_slot20 = var3;
            var1 = true;
 304:
            return var1;
        }
    };
    var _closure1_slot36 = var1;
    var10 = function handleOverwriteUpdate(arg1) {
        var1 = arg1;
        var3 = var1.channelId;
        var2 = _closure1_slot36;
        var1 = undefined;
        var1 = var2.bind(var1)(var3);
        return var1;
    };
    var1 = global;
    var12 = var1.Object;
    var9 = var12.defineProperty;
    var2 = {};
    var1 = true;
    var2['value'] = var1;
    var1 = '__esModule';
    var1 = var9.bind(var12)(var3, var1, var2);
    var1 = 0;
    var2 = var6[var1];
    var1 = undefined;
    var2 = var8.bind(var1)(var2);
    var _closure1_slot3 = var2;
    var2 = 1;
    var2 = var6[var2];
    var2 = var8.bind(var1)(var2);
    var _closure1_slot4 = var2;
    var2 = 2;
    var2 = var6[var2];
    var2 = var8.bind(var1)(var2);
    var _closure1_slot5 = var2;
    var2 = 3;
    var2 = var6[var2];
    var2 = var8.bind(var1)(var2);
    var _closure1_slot6 = var2;
    var2 = 4;
    var2 = var6[var2];
    var2 = var8.bind(var1)(var2);
    var _closure1_slot7 = var2;
    var2 = 5;
    var2 = var6[var2];
    var2 = var5.bind(var1)(var2);
    var2 = var2.createChannelRecordFromInvite;
    var _closure1_slot8 = var2;
    var2 = 6;
    var2 = var6[var2];
    var2 = var8.bind(var1)(var2);
    var _closure1_slot9 = var2;
    var2 = 7;
    var2 = var6[var2];
    var2 = var8.bind(var1)(var2);
    var _closure1_slot10 = var2;
    var2 = 8;
    var2 = var6[var2];
    var2 = var8.bind(var1)(var2);
    var _closure1_slot11 = var2;
    var2 = 9;
    var2 = var6[var2];
    var2 = var5.bind(var1)(var2);
    var9 = var2.ChannelSettingsSections;
    var _closure1_slot12 = var9;
    var9 = var2.Endpoints;
    var _closure1_slot13 = var9;
    var2 = var2.FormStates;
    var _closure1_slot14 = var2;
    var2 = var2.CLOSED;
    var _closure1_slot21 = var2;
    var2 = {};
    var _closure1_slot22 = var2;
    var2 = {};
    var _closure1_slot23 = var2;
    var2 = false;
    var _closure1_slot24 = var2;
    var _closure1_slot25 = var2;
    var2 = null;
    var _closure1_slot26 = var2;
    var2 = ['name', 'type', 'topic_', 'bitrate_', 'userLimit_', 'nsfw_', 'flags_', 'rateLimitPerUser_', 'defaultThreadRateLimitPerUser', 'defaultAutoArchiveDuration', 'template', 'defaultReactionEmoji', 'rtcRegion', 'videoQualityMode', 'threadMetadata', 'banner', 'availableTags', 'defaultSortOrder', 'defaultForumLayout', 'defaultTagSetting', 'iconEmoji', 'themeColor'];
    var _closure1_slot27 = var2;
    var2 = 12;
    var2 = var6[var2];
    var13 = var8.bind(var1)(var2);
    var12 = var13.debounce;
    var9 = function() {
        _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
 0:
            var3 = _closure1_slot18;
            var4 = null;
            if(!(var4 != var3)) { _fun0008_ip = 123; continue _fun0008 }
 15:
            var3 = _closure1_slot17;
            if(!(var4 != var3)) { _fun0008_ip = 123; continue _fun0008 }
 23:
            var4 = _closure1_slot18;
            var3 = var4.toJS;
            var3 = var3.bind(var4)();
            var _closure2_slot0 = var3;
            var4 = _closure1_slot17;
            var3 = var4.toJS;
            var3 = var3.bind(var4)();
            var _closure2_slot1 = var3;
            var4 = _closure1_slot27;
            var3 = var4.every;
            var2 = function(arg1) {
                var3 = arg1;
                var2 = _closure2_slot0;
                var2 = var2[var3];
                var1 = _closure2_slot1;
                var1 = var1[var3];
                var1 = var2 === var1;
                return var1;
            };
            var2 = var3.bind(var4)(var2);
            if(!var2) { _fun0008_ip = 94; continue _fun0008 }
 82:
            var4 = _closure1_slot18;
            var3 = _closure1_slot17;
            var2 = var4 !== var3;
 94:
            if(!var2) { _fun0008_ip = 119; continue _fun0008 }
 97:
            var2 = _closure1_slot17;
            _closure1_slot18 = var2;
            var2 = _closure1_slot29;
            var1 = var2.emitChange;
            var1 = var1.bind(var2)();
 119:
            var1 = undefined;
            return var1;
 123:
            var1 = false;
            return var1;
        }
    };
    var2 = 500;
    var2 = var12.bind(var13)(var9, var2);
    var _closure1_slot28 = var2;
    var2 = 15;
    var2 = var6[var2];
    var2 = var8.bind(var1)(var2);
    var9 = var2.Store;
    var2 = function(arg1) {
        var4 = function ChannelSettingsStore() {
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
                var1 = _closure1_slot30;
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
            var3 = this;
            var2 = var3.waitFor;
            var1 = _closure1_slot11;
            var1 = var2.bind(var3)(var1);
            var1 = undefined;
            return var1;
        };
        var5['value'] = var1;
        var1 = new Array(10);
        var1[0] = var5;
        var5 = {};
        var7 = 'hasChanges';
        var5['key'] = var7;
        var7 = function value() {
            var2 = _closure1_slot18;
            var1 = _closure1_slot17;
            var1 = var2 !== var1;
            return var1;
        };
        var5['value'] = var7;
        var1[1] = var5;
        var5 = {};
        var7 = 'isOpen';
        var5['key'] = var7;
        var7 = function value() {
            var1 = _closure1_slot25;
            return var1;
        };
        var5['value'] = var7;
        var1[2] = var5;
        var5 = {};
        var7 = 'getSection';
        var5['key'] = var7;
        var7 = function value() {
            var1 = _closure1_slot15;
            return var1;
        };
        var5['value'] = var7;
        var1[3] = var5;
        var5 = {};
        var7 = 'getInvites';
        var5['key'] = var7;
        var7 = function value() {
            var1 = {};
            var3 = _closure1_slot23;
            var1['invites'] = var3;
            var2 = _closure1_slot24;
            var1['loading'] = var2;
            return var1;
        };
        var5['value'] = var7;
        var1[4] = var5;
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
        var1[5] = var5;
        var5 = {};
        var7 = 'getChannel';
        var5['key'] = var7;
        var7 = function value() {
            var1 = _closure1_slot18;
            return var1;
        };
        var5['value'] = var7;
        var1[6] = var5;
        var5 = {};
        var7 = 'getFormState';
        var5['key'] = var7;
        var7 = function value() {
            var1 = _closure1_slot21;
            return var1;
        };
        var5['value'] = var7;
        var1[7] = var5;
        var5 = {};
        var7 = 'getCategory';
        var5['key'] = var7;
        var7 = function value() {
            var1 = _closure1_slot19;
            return var1;
        };
        var5['value'] = var7;
        var1[8] = var5;
        var5 = {};
        var7 = 'getProps';
        var5['key'] = var7;
        var6 = function value() {
            var4 = this;
            var1 = {};
            var5 = _closure1_slot21;
            var3 = _closure1_slot14;
            var3 = var3.SUBMITTING;
            var3 = var5 === var3;
            var1['submitting'] = var3;
            var3 = _closure1_slot22;
            var1['errors'] = var3;
            var3 = _closure1_slot18;
            var1['channel'] = var3;
            var3 = _closure1_slot15;
            var1['section'] = var3;
            var3 = _closure1_slot16;
            var1['subsection'] = var3;
            var3 = _closure1_slot23;
            var1['invites'] = var3;
            var3 = _closure1_slot20;
            var1['selectedOverwriteId'] = var3;
            var3 = var4.hasChanges;
            var3 = var3.bind(var4)();
            var1['hasChanges'] = var3;
            var2 = _closure1_slot26;
            var1['analyticsLocation'] = var2;
            return var1;
        };
        var5['value'] = var6;
        var1[9] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var9 = var2.bind(var1)(var9);
    var2 = 'ChannelSettingsStore';
    var9['displayName'] = var2;
    var2 = 11;
    var2 = var6[var2];
    var16 = var8.bind(var1)(var2);
    var2 = {};
    var12 = function handleSettingsInit(arg1) {
        _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
 0:
            var3 = arg1;
            var5 = _closure1_slot11;
            var4 = var5.getChannel;
            var2 = var3.channelId;
            var2 = var4.bind(var5)(var2);
            var6 = null;
            if(!(var6 != var2)) { _fun0010_ip = 297; continue _fun0010 }
 34:
            var4 = _closure1_slot14;
            var4 = var4.OPEN;
            _closure1_slot21 = var4;
            _closure1_slot17 = var2;
            _closure1_slot18 = var2;
            var2 = 'location';
            var4 = var2 in var3;
            var2 = null;
            if(!var4) { _fun0010_ip = 88; continue _fun0010 }
 69:
            var4 = var3.location;
            var4 = var6 != var4;
            var2 = null;
            if(!var4) { _fun0010_ip = 88; continue _fun0010 }
 83:
            var2 = var3.location;
 88:
            _closure1_slot26 = var2;
            var2 = 'subsection';
            var4 = var2 in var3;
            var2 = null;
            if(!var4) { _fun0010_ip = 111; continue _fun0010 }
 105:
            var2 = var3.subsection;
 111:
            _closure1_slot16 = var2;
            var2 = _closure1_slot18;
            if(!(var6 != var2)) { _fun0010_ip = 160; continue _fun0010 }
 123:
            var5 = _closure1_slot18;
            var4 = var5.set;
            var3 = _closure1_slot18;
            var2 = var3.isNSFW;
            var3 = var2.bind(var3)();
            var2 = 'nsfw';
            var2 = var4.bind(var5)(var2, var3);
            _closure1_slot18 = var2;
 160:
            var4 = _closure1_slot11;
            var3 = var4.getChannel;
            var2 = _closure1_slot18;
            var2 = var2.parent_id;
            var2 = var3.bind(var4)(var2);
            _closure1_slot19 = var2;
            var3 = _closure1_slot18;
            var2 = var3.getGuildId;
            var2 = var2.bind(var3)();
            _closure1_slot20 = var2;
            var3 = _closure1_slot18;
            var2 = var3.isModeratorReportChannel;
            var2 = var2.bind(var3)();
            var3 = _closure1_slot12;
            if(var2) { _fun0010_ip = 235; continue _fun0010 }
 227:
            var2 = var3.OVERVIEW;
            _fun0010_ip = 241; continue _fun0010;
 235:
            var2 = var3.PERMISSIONS;
 241:
            var3 = {};
            _closure1_slot22 = var3;
            var4 = _closure1_slot33;
            var3 = {};
            var5 = 'CHANNEL_SETTINGS_SET_SECTION';
            var3['type'] = var5;
            var5 = _closure1_slot15;
            if(!(var6 != var5)) { _fun0010_ip = 273; continue _fun0010 }
 269:
            var2 = _closure1_slot15;
 273:
            var3['section'] = var2;
            var2 = _closure1_slot16;
            var3['subsection'] = var2;
            var2 = undefined;
            var2 = var4.bind(var2)(var3);
            var2 = true;
            return var2;
 297:
            var2 = _closure1_slot34;
            var1 = undefined;
            var2 = var2.bind(var1)();
            return var1;
        }
    };
    var2['CHANNEL_SETTINGS_INIT'] = var12;
    var12 = function handleSettingsSubmit() {
        var1 = _closure1_slot14;
        var1 = var1.SUBMITTING;
        _closure1_slot21 = var1;
        var1 = {};
        _closure1_slot22 = var1;
        var1 = undefined;
        return var1;
    };
    var2['CHANNEL_SETTINGS_SUBMIT'] = var12;
    var12 = function handleSettingsSubmitSuccess() {
        var1 = _closure1_slot18;
        _closure1_slot17 = var1;
        var1 = _closure1_slot14;
        var1 = var1.OPEN;
        _closure1_slot21 = var1;
        var1 = undefined;
        return var1;
    };
    var2['CHANNEL_SETTINGS_SUBMIT_SUCCESS'] = var12;
    var12 = function handleSettingsSubmitFailure(arg1) {
        _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
 0:
            var3 = arg1;
            var _closure2_slot0 = var3;
            var4 = _closure1_slot14;
            var4 = var4.OPEN;
            _closure1_slot21 = var4;
            var4 = global;
            var5 = var4.Object;
            var4 = var5.keys;
            var3 = var3.errors;
            var6 = null;
            if(!(var6 == var3)) { _fun0011_ip = 53; continue _fun0011 }
 51:
            var3 = {};
 53:
            var5 = var4.bind(var5)(var3);
            var4 = var5.reduce;
            var3 = function(arg1, arg2) {
                _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
 0:
                    var1 = arg1;
                    var3 = arg2;
                    var2 = _closure2_slot0;
                    var2 = var2.errors;
                    var5 = var2[var3];
                    var6 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var2 = 12;
                    var4 = var4[var2];
                    var2 = undefined;
                    var4 = var6.bind(var2)(var4);
                    var2 = var4.isArray;
                    var2 = var2.bind(var4)(var5);
                    if(var2) { _fun0012_ip = 67; continue _fun0012 }
 61:
                    var1[var3] = var5;
                    _fun0012_ip = 85; continue _fun0012;
 67:
                    var4 = var5.join;
                    var2 = '\n';
                    var2 = var4.bind(var5)(var2);
                    var1[var3] = var2;
 85:
                    return var1;
                }
            };
            var1 = {};
            var1 = var4.bind(var5)(var3, var1);
            _closure1_slot22 = var1;
            var1 = undefined;
            return var1;
        }
    };
    var2['CHANNEL_SETTINGS_SUBMIT_FAILURE'] = var12;
    var2['CHANNEL_SETTINGS_CLOSE'] = var11;
    var2['CHANNEL_PERMISSIONS_PUT_OVERWRITE_SUCCESS'] = var10;
    var2['CHANNEL_PERMISSIONS_DELETE_OVERWRITE_SUCCESS'] = var10;
    var10 = function handlePermissionOverwriteSelect(arg1) {
        var1 = arg1;
        var2 = var1.overwriteId;
        _closure1_slot20 = var2;
        var1 = undefined;
        return var1;
    };
    var2['CHANNEL_SETTINGS_OVERWRITE_SELECT'] = var10;
    var10 = function handleSettingsUpdate(arg1) {
        _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
 0:
            var1 = arg1;
            var28 = var1.name;
            var7 = var1.channelType;
            var27 = var1.topic;
            var26 = var1.bitrate;
            var25 = var1.userLimit;
            var24 = var1.nsfw;
            var23 = var1.flags;
            var22 = var1.rateLimitPerUser;
            var18 = var1.defaultThreadRateLimitPerUser;
            var21 = var1.autoArchiveDuration;
            var20 = var1.locked;
            var19 = var1.invitable;
            var17 = var1.defaultAutoArchiveDuration;
            var16 = var1.template;
            var13 = var1.defaultReactionEmoji;
            var15 = var1.rtcRegion;
            var14 = var1.videoQualityMode;
            var12 = var1.availableTags;
            var11 = var1.defaultSortOrder;
            var9 = var1.defaultForumLayout;
            var10 = var1.defaultTagSetting;
            var8 = var1.iconEmoji;
            var6 = var1.themeColor;
            var1 = _closure1_slot18;
            var3 = null;
            if(!(var3 != var1)) { _fun0013_ip = 872; continue _fun0013 }
 155:
            if(!(var3 != var28)) { _fun0013_ip = 182; continue _fun0013 }
 159:
            var5 = _closure1_slot18;
            var4 = var5.set;
            var1 = 'name';
            var1 = var4.bind(var5)(var1, var28);
            _closure1_slot18 = var1;
 182:
            if(!(var3 != var27)) { _fun0013_ip = 209; continue _fun0013 }
 186:
            var5 = _closure1_slot18;
            var4 = var5.set;
            var1 = 'topic';
            var1 = var4.bind(var5)(var1, var27);
            _closure1_slot18 = var1;
 209:
            if(!(var3 != var26)) { _fun0013_ip = 236; continue _fun0013 }
 213:
            var5 = _closure1_slot18;
            var4 = var5.set;
            var1 = 'bitrate';
            var1 = var4.bind(var5)(var1, var26);
            _closure1_slot18 = var1;
 236:
            if(!(var3 != var25)) { _fun0013_ip = 263; continue _fun0013 }
 240:
            var5 = _closure1_slot18;
            var4 = var5.set;
            var1 = 'userLimit';
            var1 = var4.bind(var5)(var1, var25);
            _closure1_slot18 = var1;
 263:
            if(!(var3 != var24)) { _fun0013_ip = 290; continue _fun0013 }
 267:
            var5 = _closure1_slot18;
            var4 = var5.set;
            var1 = 'nsfw';
            var1 = var4.bind(var5)(var1, var24);
            _closure1_slot18 = var1;
 290:
            if(!(var3 != var23)) { _fun0013_ip = 317; continue _fun0013 }
 294:
            var5 = _closure1_slot18;
            var4 = var5.set;
            var1 = 'flags';
            var1 = var4.bind(var5)(var1, var23);
            _closure1_slot18 = var1;
 317:
            if(!(var3 != var22)) { _fun0013_ip = 344; continue _fun0013 }
 321:
            var5 = _closure1_slot18;
            var4 = var5.set;
            var1 = 'rateLimitPerUser';
            var1 = var4.bind(var5)(var1, var22);
            _closure1_slot18 = var1;
 344:
            if(!(var3 != var18)) { _fun0013_ip = 371; continue _fun0013 }
 348:
            var5 = _closure1_slot18;
            var4 = var5.set;
            var1 = 'defaultThreadRateLimitPerUser';
            var1 = var4.bind(var5)(var1, var18);
            _closure1_slot18 = var1;
 371:
            if(!(var3 != var21)) { _fun0013_ip = 426; continue _fun0013 }
 375:
            var18 = _closure1_slot18;
            var5 = var18.set;
            var4 = {};
            var1 = _closure1_slot18;
            var29 = var1.threadMetadata;
            var30 = var4;
            var1 = copyDataProperties(var30, var29);
            var1 = 'autoArchiveDuration';
            var4[var1] = var21;
            var1 = 'threadMetadata';
            var1 = var5.bind(var18)(var1, var4);
            _closure1_slot18 = var1;
 426:
            if(!(var3 != var20)) { _fun0013_ip = 481; continue _fun0013 }
 430:
            var18 = _closure1_slot18;
            var5 = var18.set;
            var4 = {};
            var1 = _closure1_slot18;
            var29 = var1.threadMetadata;
            var30 = var4;
            var1 = copyDataProperties(var30, var29);
            var1 = 'locked';
            var4[var1] = var20;
            var1 = 'threadMetadata';
            var1 = var5.bind(var18)(var1, var4);
            _closure1_slot18 = var1;
 481:
            if(!(var3 != var19)) { _fun0013_ip = 536; continue _fun0013 }
 485:
            var18 = _closure1_slot18;
            var5 = var18.set;
            var4 = {};
            var1 = _closure1_slot18;
            var29 = var1.threadMetadata;
            var30 = var4;
            var1 = copyDataProperties(var30, var29);
            var1 = 'invitable';
            var4[var1] = var19;
            var1 = 'threadMetadata';
            var1 = var5.bind(var18)(var1, var4);
            _closure1_slot18 = var1;
 536:
            if(!(var3 != var17)) { _fun0013_ip = 563; continue _fun0013 }
 540:
            var5 = _closure1_slot18;
            var4 = var5.set;
            var1 = 'defaultAutoArchiveDuration';
            var1 = var4.bind(var5)(var1, var17);
            _closure1_slot18 = var1;
 563:
            if(!(var3 != var16)) { _fun0013_ip = 590; continue _fun0013 }
 567:
            var5 = _closure1_slot18;
            var4 = var5.set;
            var1 = 'template';
            var1 = var4.bind(var5)(var1, var16);
            _closure1_slot18 = var1;
 590:
            if(!(var3 != var7)) { _fun0013_ip = 617; continue _fun0013 }
 594:
            var5 = _closure1_slot18;
            var4 = var5.set;
            var1 = 'type';
            var1 = var4.bind(var5)(var1, var7);
            _closure1_slot18 = var1;
 617:
            var1 = undefined;
            if(!(var1 !== var15)) { _fun0013_ip = 646; continue _fun0013 }
 623:
            var7 = _closure1_slot18;
            var5 = var7.set;
            var4 = 'rtcRegion';
            var4 = var5.bind(var7)(var4, var15);
            _closure1_slot18 = var4;
 646:
            if(!(var3 != var14)) { _fun0013_ip = 673; continue _fun0013 }
 650:
            var7 = _closure1_slot18;
            var5 = var7.set;
            var4 = 'videoQualityMode';
            var4 = var5.bind(var7)(var4, var14);
            _closure1_slot18 = var4;
 673:
            if(!(var1 !== var13)) { _fun0013_ip = 700; continue _fun0013 }
 677:
            var7 = _closure1_slot18;
            var5 = var7.set;
            var4 = 'defaultReactionEmoji';
            var4 = var5.bind(var7)(var4, var13);
            _closure1_slot18 = var4;
 700:
            if(!(var3 != var12)) { _fun0013_ip = 727; continue _fun0013 }
 704:
            var7 = _closure1_slot18;
            var5 = var7.set;
            var4 = 'availableTags';
            var4 = var5.bind(var7)(var4, var12);
            _closure1_slot18 = var4;
 727:
            if(!(var3 != var11)) { _fun0013_ip = 754; continue _fun0013 }
 731:
            var7 = _closure1_slot18;
            var5 = var7.set;
            var4 = 'defaultSortOrder';
            var4 = var5.bind(var7)(var4, var11);
            _closure1_slot18 = var4;
 754:
            if(!(var3 != var10)) { _fun0013_ip = 781; continue _fun0013 }
 758:
            var7 = _closure1_slot18;
            var5 = var7.set;
            var4 = 'defaultTagSetting';
            var4 = var5.bind(var7)(var4, var10);
            _closure1_slot18 = var4;
 781:
            if(!(var3 != var9)) { _fun0013_ip = 808; continue _fun0013 }
 785:
            var7 = _closure1_slot18;
            var5 = var7.set;
            var4 = 'defaultForumLayout';
            var4 = var5.bind(var7)(var4, var9);
            _closure1_slot18 = var4;
 808:
            if(!(var1 !== var8)) { _fun0013_ip = 835; continue _fun0013 }
 812:
            var7 = _closure1_slot18;
            var5 = var7.set;
            var4 = 'iconEmoji';
            var4 = var5.bind(var7)(var4, var8);
            _closure1_slot18 = var4;
 835:
            if(!(var3 != var6)) { _fun0013_ip = 862; continue _fun0013 }
 839:
            var5 = _closure1_slot18;
            var4 = var5.set;
            var3 = 'themeColor';
            var3 = var4.bind(var5)(var3, var6);
            _closure1_slot18 = var3;
 862:
            var2 = _closure1_slot28;
            var2 = var2.bind(var1)();
            return var1;
 872:
            var1 = false;
            return var1;
        }
    };
    var2['CHANNEL_SETTINGS_UPDATE'] = var10;
    var2['CHANNEL_SETTINGS_SET_SECTION'] = var7;
    var7 = function handleLoadedInvites(arg1) {
        var1 = {};
        _closure1_slot23 = var1;
        var1 = arg1;
        var3 = var1.invites;
        var2 = var3.forEach;
        var1 = function(arg1) {
            var5 = arg1;
            var4 = _closure1_slot23;
            var3 = var5.code;
            var2 = _closure1_slot35;
            var1 = undefined;
            var2 = var2.bind(var1)(var5);
            var4[var3] = var2;
            return var1;
        };
        var1 = var2.bind(var3)(var1);
        var1 = undefined;
        return var1;
    };
    var2['CHANNEL_SETTINGS_LOADED_INVITES'] = var7;
    var7 = function handleChannelUpdates(arg1) {
        _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
 0:
            var1 = arg1;
            var2 = var1.channels;
            var3 = _closure1_slot18;
            var1 = null;
            if(!(var1 != var3)) { _fun0014_ip = 100; continue _fun0014 }
 22:
            var1 = _closure1_slot31;
            var6 = undefined;
            var5 = var1.bind(var6)(var2);
            var3 = var5.bind(var6)();
            var2 = var3.done;
            var4 = var3;
            var3 = false;
            var1 = false;
            if(var2) { _fun0014_ip = 98; continue _fun0014 }
 52:
            var8 = _closure1_slot36;
            var2 = var4.value;
            var2 = var2.id;
            var8 = var8.bind(var6)(var2);
            if(var8) { _fun0014_ip = 77; continue _fun0014 }
 74:
            var8 = var3;
 77:
            var9 = var5.bind(var6)();
            var2 = var9.done;
            var3 = var8;
            var4 = var9;
            var1 = var3;
            if(!var2) { _fun0014_ip = 52; continue _fun0014 }
 98:
            return var1;
 100:
            var1 = false;
            return var1;
        }
    };
    var2['CHANNEL_UPDATES'] = var7;
    var7 = function handleChannelDelete(arg1) {
        _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
 0:
            var1 = arg1;
            var1 = var1.channel;
            var3 = var1.id;
            var2 = _closure1_slot18;
            var1 = null;
            var1 = var1 != var2;
            if(!var1) { _fun0015_ip = 64; continue _fun0015 }
 29:
            var2 = _closure1_slot18;
            var2 = var2.id;
            var2 = var2 === var3;
            if(!var2) { _fun0015_ip = 61; continue _fun0015 }
 45:
            var3 = _closure1_slot14;
            var3 = var3.CLOSED;
            _closure1_slot21 = var3;
            var2 = undefined;
 61:
            var1 = var2;
 64:
            return var1;
        }
    };
    var2['CHANNEL_DELETE'] = var7;
    var7 = function handleInviteRevoke(arg1) {
        var2 = {};
        var4 = _closure1_slot23;
        var5 = var2;
        var3 = copyDataProperties(var5, var4);
        _closure1_slot23 = var2;
        var1 = arg1;
        var1 = var1.code;
        var1 = delete var2[var1];
        var1 = undefined;
        return var1;
    };
    var2['INSTANT_INVITE_REVOKE_SUCCESS'] = var7;
    var7 = function handleInviteCreateSuccess(arg1) {
        var1 = arg1;
        var3 = {};
        var7 = _closure1_slot23;
        var8 = var3;
        var4 = copyDataProperties(var8, var7);
        var4 = var1.invite;
        var5 = var4.code;
        var6 = _closure1_slot35;
        var4 = var1.invite;
        var1 = undefined;
        var4 = var6.bind(var1)(var4);
        var3[var5] = var4;
        _closure1_slot23 = var3;
        return var1;
    };
    var2['INSTANT_INVITE_CREATE_SUCCESS'] = var7;
    var7 = var9.prototype;
    var7 = Object.create(var7, {constructor: {value: var9}});
    var17 = var7;
    var15 = var2;
    var2 = new var17[var9](var16, var15, var14);
    var2 = var2 instanceof Object ? var2 : var7;
    var _closure1_slot29 = var2;
    var4 = 16;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'stores/ChannelSettingsStore.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();