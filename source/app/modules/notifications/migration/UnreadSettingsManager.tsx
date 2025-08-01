// app/modules/notifications/migration/UnreadSettingsManager.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
    var1 = function _createForOfIteratorHelperLoose(arg1, arg2) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var3 = arg1;
            var _closure2_slot0 = var3;
            var5 = global;
            var2 = var5.Symbol;
            var4 = 'undefined';
            var2 = typeof var2;
            var2 = var4 !== var2;
            if(!var2) { _fun0001_ip = 45; continue _fun0001 }
 30:
            var4 = var5.Symbol;
            var4 = var4.iterator;
            var2 = var3[var4];
 45:
            if(var2) { _fun0001_ip = 54; continue _fun0001 }
 48:
            var2 = var3.@@iterator;
 54:
            if(var2) { _fun0001_ip = 344; continue _fun0001 }
 60:
            var6 = var5.Array;
            var4 = var6.isArray;
            var6 = var4.bind(var6)(var3);
            var4 = var2;
            if(var6) { _fun0001_ip = 322; continue _fun0001 }
 85:
            var8 = undefined;
            var6 = undefined;
            if(!var3) { _fun0001_ip = 282; continue _fun0001 }
 95:
            var9 = 'string';
            var7 = typeof var3;
            if(!(var9 !== var7)) { _fun0001_ip = 269; continue _fun0001 }
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
            if(!var7) { _fun0001_ip = 162; continue _fun0001 }
 157:
            var7 = var3.constructor;
 162:
            var10 = var9;
            if(!var7) { _fun0001_ip = 178; continue _fun0001 }
 168:
            var7 = var3.constructor;
            var10 = var7.name;
 178:
            var7 = 'Map';
            if(!(var7 !== var10)) { _fun0001_ip = 248; continue _fun0001 }
 186:
            var7 = 'Set';
            if(!(var7 !== var10)) { _fun0001_ip = 248; continue _fun0001 }
 194:
            var7 = 'Arguments';
            if(!(var7 !== var10)) { _fun0001_ip = 233; continue _fun0001 }
 204:
            var9 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
            var7 = var9.test;
            var9 = var7.bind(var9)(var10);
            var7 = undefined;
            if(!var9) { _fun0001_ip = 246; continue _fun0001 }
 233:
            var9 = _closure1_slot16;
            var7 = var9.bind(var8)(var3, var8);
 246:
            _fun0001_ip = 264; continue _fun0001;
 248:
            var10 = var5.Array;
            var9 = var10.from;
            var7 = var9.bind(var10)(var3);
 264:
            var6 = var7;
            _fun0001_ip = 282; continue _fun0001;
 269:
            var7 = _closure1_slot16;
            var6 = var7.bind(var8)(var3, var8);
 282:
            var4 = var6;
            if(var4) { _fun0001_ip = 322; continue _fun0001 }
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
            if(!var4) { _fun0001_ip = 329; continue _fun0001 }
 325:
            _closure2_slot0 = var4;
 329:
            var4 = 0;
            var _closure2_slot1 = var4;
            var1 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var2 = _closure2_slot1;
                    var1 = _closure2_slot0;
                    var1 = var1.length;
                    if(!(!(var2 >= var1))) { _fun0002_ip = 56; continue _fun0002 }
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
                    _fun0002_ip = 67; continue _fun0002;
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
 344:
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
 0:
            var4 = arg1;
            var1 = null;
            var3 = undefined;
            var1 = var1 == var3;
            if(var1) { _fun0003_ip = 23; continue _fun0003 }
 14:
            var2 = var4.length;
            var1 = var3 > var2;
 23:
            var2 = undefined;
            if(!var1) { _fun0003_ip = 33; continue _fun0003 }
 28:
            var2 = var4.length;
 33:
            var1 = global;
            var1 = var1.Array;
            var1 = var1.bind(var3)(var2);
            var3 = 0;
            var5 = var3 < var2;
            if(!var5) { _fun0003_ip = 70; continue _fun0003 }
 55:
            var5 = var4[var3];
            var1[var3] = var5;
            var3 = var3 + 1;
            if(var3 < var2) { _fun0003_ip = 55; continue _fun0003 }
 70:
            return var1;
        }
    };
    var _closure1_slot16 = var1;
    var1 = function _isNativeReflectConstruct() {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
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
            _fun0004_ip = 76; continue _fun0004;
 74: // catch_target0
            CatchBlockStart(arg_register=1);
 76:
            var2 = function _isNativeReflectConstruct() {
                var1 = _closure2_slot0;
                var1 = !var1;
                var1 = !var1;
                return var1;
            };
            _closure1_slot17 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot17 = var1;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var4);
    var1 = 0;
    var4 = var6[var1];
    var1 = undefined;
    var4 = var7.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var8 = 1;
    var4 = var6[var8];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot6 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot7 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot8 = var4;
    var4 = 6;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot9 = var4;
    var4 = 7;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot10 = var4;
    var4 = 8;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var9 = var4.ChannelTypes;
    var _closure1_slot11 = var9;
    var4 = var4.UserNotificationSettings;
    var _closure1_slot12 = var4;
    var4 = 9;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.ChannelNotificationSettingsFlags;
    var _closure1_slot13 = var4;
    var4 = 10;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var4 = var4.Millis;
    var4 = var4.DAY;
    var4 = var8 * var4;
    var _closure1_slot14 = var4;
    var4 = 15;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var2 = function(arg1) {
        var4 = function UnreadSettingsManager(arg1) {
            _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                var5 = this;
                var13 = 0;
                var1 = copyRestArgs(var13);
                var8 = _closure1_slot3;
                var2 = _closure2_slot0;
                var4 = undefined;
                var8 = var8.bind(var4)(var5, var2);
                var10 = new Array(0);
                var13 = var10;
                var12 = var1;
                var11 = 0;
                var1 = arraySpread(var13, var12, var11);
                var1 = _closure1_slot6;
                var9 = var1.bind(var4)(var2);
                var2 = _closure1_slot5;
                var1 = _closure1_slot17;
                var1 = var1.bind(var4)();
                if(var1) { _fun0005_ip = 86; continue _fun0005 }
 73:
                var1 = var9.apply;
                var1 = var1.bind(var9)(var5, var10);
                _fun0005_ip = 120; continue _fun0005;
 86:
                var7 = global;
                var8 = var7.Reflect;
                var7 = var8.construct;
                var6 = _closure1_slot6;
                var6 = var6.bind(var4)(var5);
                var6 = var6.constructor;
                var1 = var7.bind(var8)(var9, var10, var6);
 120:
                var1 = var2.bind(var4)(var5, var1);
                var _closure3_slot0 = var1;
                var2 = {};
                var4 = function GUILD_CREATE() {
                    var2 = _closure3_slot0;
                    var1 = var2.checkGuilds;
                    var1 = var1.bind(var2)();
                    return var1;
                };
                var2['GUILD_CREATE'] = var4;
                var3 = function POST_CONNECTION_OPEN() {
                    var2 = _closure3_slot0;
                    var1 = var2.checkGuilds;
                    var1 = var1.bind(var2)();
                    return var1;
                };
                var2['POST_CONNECTION_OPEN'] = var3;
                var1['actions'] = var2;
                return var1;
            }
        };
        var _closure2_slot0 = var4;
        var6 = _closure1_slot7;
        var3 = undefined;
        var5 = arg1;
        var5 = var6.bind(var3)(var4, var5);
        var2 = _closure1_slot4;
        var5 = {};
        var6 = 'checkGuilds';
        var5['key'] = var6;
        var1 = function value() {
            _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
                var2 = _closure1_slot10;
                var2 = var2.useNewNotifications;
                if(!var2) { _fun0006_ip = 49; continue _fun0006 }
 16:
                var2 = _closure1_slot9;
                var1 = var2.getGuildsArray;
                var3 = var1.bind(var2)();
                var2 = var3.forEach;
                var1 = function(arg1) {
                    _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
                        var3 = arg1;
                        var1 = var3.joinedAt;
                        var10 = null;
                        if(!(var10 != var1)) { _fun0007_ip = 546; continue _fun0007 }
 18:
                        var4 = global;
                        var2 = var4.Date;
                        var1 = var2.now;
                        var2 = var1.bind(var2)();
                        var5 = var3.joinedAt;
                        var1 = var5.getTime;
                        var1 = var1.bind(var5)();
                        var5 = var2 - var1;
                        var1 = _closure1_slot14;
                        if(!(!(var5 > var1))) { _fun0007_ip = 546; continue _fun0007 }
 69:
                        var6 = _closure1_slot10;
                        var5 = var6.getMessageNotifications;
                        var1 = var3.id;
                        var5 = var5.bind(var6)(var1);
                        var1 = _closure1_slot12;
                        var1 = var1.ALL_MESSAGES;
                        if(!(var5 !== var1)) { _fun0007_ip = 546; continue _fun0007 }
 106:
                        var6 = var4.Object;
                        var5 = var6.values;
                        var8 = _closure1_slot10;
                        var7 = var8.getChannelOverrides;
                        var1 = var3.id;
                        var1 = var7.bind(var8)(var1);
                        var9 = var5.bind(var6)(var1);
                        var1 = var9.length;
                        var6 = 0;
                        var5 = var6 < var1;
                        var8 = 11;
                        var1 = undefined;
                        var7 = 0;
                        if(!var5) { _fun0007_ip = 281; continue _fun0007 }
 163:
                        var5 = var9[var7];
                        var11 = var5.message_notifications;
                        if(!(var10 != var11)) { _fun0007_ip = 200; continue _fun0007 }
 177:
                        var12 = var5.message_notifications;
                        var11 = _closure1_slot12;
                        var11 = var11.NULL;
                        if(!(var12 === var11)) { _fun0007_ip = 544; continue _fun0007 }
 200:
                        var11 = var5.flags;
                        if(!(var10 != var11)) { _fun0007_ip = 269; continue _fun0007 }
 209:
                        var12 = _closure1_slot0;
                        var11 = _closure1_slot2;
                        var11 = var11[var8];
                        var13 = var12.bind(var1)(var11);
                        var12 = var13.hasAnyFlag;
                        var11 = var5.flags;
                        var5 = _closure1_slot13;
                        var14 = var5.UNREADS_ALL_MESSAGES;
                        var5 = var5.UNREADS_ONLY_MENTIONS;
                        var5 = var14 | var5;
                        var5 = var12.bind(var13)(var11, var5);
                        if(var5) { _fun0007_ip = 542; continue _fun0007 }
 269:
                        var7 = var7 + 1;
                        var5 = var9.length;
                        if(var7 < var5) { _fun0007_ip = 163; continue _fun0007 }
 281:
                        var7 = var4.Object;
                        var5 = var7.values;
                        var9 = _closure1_slot8;
                        var8 = var9.getMutableBasicGuildChannelsForGuild;
                        var4 = var3.id;
                        var4 = var8.bind(var9)(var4);
                        var7 = var5.bind(var7)(var4);
                        var5 = var7.filter;
                        var4 = function(arg1) {
                            var1 = arg1;
                            var2 = var1.type;
                            var1 = _closure1_slot11;
                            var1 = var1.GUILD_ANNOUNCEMENT;
                            var1 = var2 === var1;
                            return var1;
                        };
                        var5 = var5.bind(var7)(var4);
                        var4 = var5.length;
                        if(!(var6 !== var4)) { _fun0007_ip = 546; continue _fun0007 }
 348:
                        var6 = {};
                        var4 = _closure1_slot15;
                        var8 = var4.bind(var1)(var5);
                        var5 = var8.bind(var1)();
                        var4 = var5.done;
                        var7 = 12;
                        if(var4) { _fun0007_ip = 474; continue _fun0007 }
 374:
                        var10 = var5.value;
                        var9 = var10.id;
                        var4 = {};
                        var12 = _closure1_slot0;
                        var11 = _closure1_slot2;
                        var11 = var11[var7];
                        var13 = var12.bind(var1)(var11);
                        var12 = var13.withChannelUnreadFlags;
                        var15 = _closure1_slot10;
                        var14 = var15.getChannelIdFlags;
                        var11 = var3.id;
                        var10 = var10.id;
                        var11 = var14.bind(var15)(var11, var10);
                        var10 = _closure1_slot13;
                        var10 = var10.UNREADS_ALL_MESSAGES;
                        var10 = var12.bind(var13)(var11, var10);
                        var4['flags'] = var10;
                        var6[var9] = var4;
                        var9 = var8.bind(var1)();
                        var4 = var9.done;
                        var5 = var9;
                        if(!var4) { _fun0007_ip = 374; continue _fun0007 }
 474:
                        var5 = _closure1_slot1;
                        var8 = _closure1_slot2;
                        var4 = 13;
                        var4 = var8[var4];
                        var5 = var5.bind(var1)(var4);
                        var4 = var5.updateChannelOverrideSettingsBulk;
                        var3 = var3.id;
                        var7 = _closure1_slot0;
                        var2 = 14;
                        var2 = var8[var2];
                        var2 = var7.bind(var1)(var2);
                        var2 = var2.NotificationLabels;
                        var2 = var2.AnnouncementAutoEnable;
                        var2 = var4.bind(var5)(var3, var6, var2);
                        _fun0007_ip = 546; continue _fun0007;
 542:
                        return var1;
 544:
                        return var1;
 546:
                        var1 = undefined;
                        return var1;
                    }
                };
                var1 = var2.bind(var3)(var1);
 49:
                var1 = undefined;
                return var1;
            }
        };
        var5['value'] = var1;
        var1 = new Array(1);
        var1[0] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var2 = var2.bind(var1)(var4);
    var4 = var2.prototype;
    var4 = Object.create(var4, {constructor: {value: var2}});
    var13 = var4;
    var2 = new var13[var2](var12);
    var2 = var2 instanceof Object ? var2 : var4;
    var4 = 16;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/notifications/migration/UnreadSettingsManager.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();