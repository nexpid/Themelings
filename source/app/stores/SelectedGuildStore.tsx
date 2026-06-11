// app/stores/SelectedGuildStore.tsx
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
            _closure1_slot16 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot16 = var1;
    var9 = function handleConnectionOpen() {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var3 = _closure1_slot13;
            var2 = null;
            var3 = var2 != var3;
            if(!var3) { _fun0002_ip = 6; continue _fun0002 }
case 7:
            var6 = _closure1_slot10;
            var5 = var6.getGuild;
            var4 = _closure1_slot13;
            var4 = var5.bind(var6)(var4);
            var3 = var2 == var4;
case 6:
            if(!var3) { _fun0002_ip = 8; continue _fun0002 }
case 9:
            var6 = _closure1_slot7;
            var5 = var6.getRequest;
            var4 = _closure1_slot13;
            var4 = var5.bind(var6)(var4);
            var3 = var2 == var4;
case 8:
            if(!var3) { _fun0002_ip = 5; continue _fun0002 }
case 10:
            _closure1_slot13 = var2;
case 5:
            var3 = _closure1_slot14;
            var3 = var2 != var3;
            if(!var3) { _fun0002_ip = 11; continue _fun0002 }
case 12:
            var6 = _closure1_slot10;
            var5 = var6.getGuild;
            var4 = _closure1_slot14;
            var4 = var5.bind(var6)(var4);
            var3 = var2 == var4;
case 11:
            if(!var3) { _fun0002_ip = 13; continue _fun0002 }
case 14:
            var6 = _closure1_slot7;
            var5 = var6.getRequest;
            var4 = _closure1_slot14;
            var4 = var5.bind(var6)(var4);
            var3 = var2 == var4;
case 13:
            if(!var3) { _fun0002_ip = 15; continue _fun0002 }
case 16:
            _closure1_slot14 = var2;
case 15:
            var3 = _closure1_slot18;
            var2 = _closure1_slot13;
            var1 = undefined;
            var2 = var3.bind(var1)(var2);
            return var1;
        }
    };
    var _closure1_slot17 = var9;
    var1 = function updateLastSelectedGuildMillis(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var3 = arg1;
            var1 = null;
            if(!(var1 != var3)) { _fun0003_ip = 17; continue _fun0003 }
case 18:
            var2 = _closure1_slot15;
            var1 = global;
            var4 = var1.Date;
            var1 = var4.now;
            var1 = var1.bind(var4)();
            var2[var3] = var1;
case 17:
            var1 = undefined;
            return var1;
        }
    };
    var _closure1_slot18 = var1;
    var1 = function handleGuildRemove(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var4 = arg1;
            var1 = _closure1_slot15;
            var1 = delete var1[var4];
            var3 = _closure1_slot14;
            var1 = false;
            if(!(var3 === var4)) { _fun0004_ip = 19; continue _fun0004 }
case 20:
            var3 = null;
            _closure1_slot14 = var3;
            var1 = true;
case 19:
            var3 = _closure1_slot13;
            if(!(var3 === var4)) { _fun0004_ip = 21; continue _fun0004 }
case 22:
            var3 = function pickFallbackGuildId(arg1) {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                    var12 = arg1;
                    var _closure3_slot0 = var12;
                    var2 = _closure1_slot14;
                    var3 = null;
                    if(!(var3 != var2)) { _fun0005_ip = 23; continue _fun0005 }
case 24:
                    var6 = _closure1_slot10;
                    var4 = var6.getGuild;
                    var2 = _closure1_slot14;
                    var2 = var4.bind(var6)(var2);
                    if(!(var3 == var2)) { _fun0005_ip = 25; continue _fun0005 }
case 23:
                    var2 = global;
                    var6 = var2.Object;
                    var4 = var6.keys;
                    var2 = _closure1_slot15;
                    var11 = var4.bind(var6)(var2);
                    var4 = var11.length;
                    var2 = 0;
                    var6 = var2 < var4;
                    var10 = null;
                    var9 = 0;
                    var8 = 0;
                    var7 = undefined;
                    var2 = null;
                    if(!var6) { _fun0005_ip = 26; continue _fun0005 }
case 27:
                    var15 = var11[var8];
                    var13 = var10;
                    var14 = var9;
                    if(!(var15 !== var12)) { _fun0005_ip = 28; continue _fun0005 }
case 29:
                    var6 = _closure1_slot15;
                    var6 = var6[var15];
                    var16 = var6 > var9;
                    if(!var16) { _fun0005_ip = 30; continue _fun0005 }
case 31:
                    var18 = _closure1_slot10;
                    var17 = var18.getGuild;
                    var17 = var17.bind(var18)(var15);
                    var16 = var3 != var17;
case 30:
                    var13 = var10;
                    var14 = var9;
                    var7 = var6;
                    if(!var16) { _fun0005_ip = 28; continue _fun0005 }
case 32:
                    var13 = var15;
                    var14 = var6;
                    var7 = var14;
case 28:
                    var8 = var8 + 1;
                    var6 = var11.length;
                    var10 = var13;
                    var9 = var14;
                    var2 = var10;
                    if(var8 < var6) { _fun0005_ip = 27; continue _fun0005 }
case 26:
                    if(!(var3 == var2)) { _fun0005_ip = 33; continue _fun0005 }
case 34:
                    var7 = _closure1_slot10;
                    var6 = var7.getGuildsArray;
                    var7 = var6.bind(var7)();
                    var6 = var7.find;
                    var5 = function(arg1) {
                        var1 = arg1;
                        var2 = var1.id;
                        var1 = _closure3_slot0;
                        var1 = var2 !== var1;
                        return var1;
                    };
                    var5 = var6.bind(var7)(var5);
                    var6 = var3 == var5;
                    var4 = undefined;
                    if(var6) { _fun0005_ip = 35; continue _fun0005 }
case 36:
                    var4 = var5.id;
case 35:
                    var5 = var3 != var4;
                    var3 = null;
                    if(!var5) { _fun0005_ip = 37; continue _fun0005 }
case 38:
                    var3 = var4;
case 37:
                    return var3;
case 33:
                    return var2;
case 25:
                    var1 = _closure1_slot14;
                    return var1;
                }
            };
            var5 = undefined;
            var6 = var3.bind(var5)(var4);
            var3 = null;
            if(!(var3 == var6)) { _fun0004_ip = 39; continue _fun0004 }
case 40:
            _closure1_slot13 = var3;
            var4 = _closure1_slot0;
            var7 = _closure1_slot1;
            var3 = 10;
            var3 = var7[var3];
            var7 = var4.bind(var5)(var3);
            var4 = var7.replaceWith;
            var3 = _closure1_slot12;
            var3 = var3.ME;
            var3 = var4.bind(var7)(var3);
            var1 = true;
            _fun0004_ip = 21; continue _fun0004;
case 39:
            _closure1_slot13 = var6;
            var4 = _closure1_slot0;
            var7 = _closure1_slot1;
            var3 = 10;
            var3 = var7[var3];
            var4 = var4.bind(var5)(var3);
            var3 = var4.replaceWith;
            var5 = _closure1_slot12;
            var2 = var5.CHANNEL;
            var2 = var2.bind(var5)(var6);
            var2 = var3.bind(var4)(var2);
            var1 = true;
case 21:
            return var1;
        }
    };
    var _closure1_slot19 = var1;
    var1 = global;
    var10 = var1.Object;
    var8 = var10.defineProperty;
    var2 = {};
    var1 = true;
    var2['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var10)(var3, var1, var2);
    var1 = 0;
    var2 = var6[var1];
    var1 = undefined;
    var2 = var7.bind(var1)(var2);
    var _closure1_slot2 = var2;
    var2 = 1;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot3 = var2;
    var2 = 2;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot4 = var2;
    var2 = 3;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot5 = var2;
    var2 = 4;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot6 = var2;
    var2 = 5;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot7 = var2;
    var2 = 6;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot8 = var2;
    var2 = 7;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot9 = var2;
    var2 = 8;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot10 = var2;
    var2 = 9;
    var2 = var6[var2];
    var2 = var5.bind(var1)(var2);
    var8 = var2.ME;
    var _closure1_slot11 = var8;
    var2 = var2.Routes;
    var _closure1_slot12 = var2;
    var2 = null;
    var _closure1_slot13 = var2;
    var _closure1_slot14 = var2;
    var2 = {};
    var _closure1_slot15 = var2;
    var2 = 13;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var8 = var2.PersistedStore;
    var2 = function(arg1) {
        var4 = function SelectedGuildStore() {
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
                var1 = _closure1_slot16;
                var1 = var1.bind(var3)();
                if(var1) { _fun0006_ip = 41; continue _fun0006 }
case 42:
                var7 = var9.apply;
                var5 = arguments;
                var1 = var5;
                var1 = var7.bind(var9)(var4, var1);
                _fun0006_ip = 43; continue _fun0006;
case 41:
                var7 = global;
                var8 = var7.Reflect;
                var7 = var8.construct;
                var6 = _closure1_slot5;
                var6 = var6.bind(var3)(var4);
                var6 = var6.constructor;
                var5 = arguments;
                var1 = var7.bind(var8)(var9, var5, var6);
case 43:
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
                var8 = this;
                var3 = var8.mustEmitChanges;
                var1 = function(arg1) {
                    var1 = arg1;
                    var2 = var1.type;
                    var1 = 'CONNECTION_OPEN';
                    var1 = var1 !== var2;
                    return var1;
                };
                var1 = var3.bind(var8)(var1);
                var7 = var8.waitFor;
                var16 = _closure1_slot8;
                var15 = _closure1_slot9;
                var14 = _closure1_slot10;
                var13 = _closure1_slot7;
                var17 = var8;
                var1 = var17[var7](var16, var15, var14, var13, var12);
                var4 = null;
                var6 = var4 == var2;
                var1 = undefined;
                var5 = undefined;
                if(var6) { _fun0007_ip = 44; continue _fun0007 }
case 41:
                var5 = var2.selectedGuildTimestampMillis;
case 44:
                if(!(var4 == var5)) { _fun0007_ip = 45; continue _fun0007 }
case 46:
                var5 = {};
case 45:
                _closure1_slot15 = var5;
                var5 = var4 == var2;
                var6 = undefined;
                if(var5) { _fun0007_ip = 47; continue _fun0007 }
case 27:
                var6 = var2.selectedGuildId;
case 47:
                var7 = var4 != var6;
                var5 = null;
                if(!var7) { _fun0007_ip = 39; continue _fun0007 }
case 14:
                var5 = var6;
case 39:
                _closure1_slot13 = var5;
                var6 = var4 == var2;
                var5 = undefined;
                if(var6) { _fun0007_ip = 48; continue _fun0007 }
case 49:
                var5 = var2.lastSelectedGuildId;
case 48:
                var6 = var4 != var5;
                var2 = null;
                if(!var6) { _fun0007_ip = 50; continue _fun0007 }
case 51:
                var2 = var5;
case 50:
                _closure1_slot14 = var2;
                var2 = _closure1_slot9;
                var7 = var2.lastNonVoiceRoute;
                var11 = _closure1_slot0;
                var12 = _closure1_slot1;
                var2 = 11;
                var2 = var12[var2];
                var6 = var11.bind(var1)(var2);
                var5 = var6.matchPath;
                var2 = {};
                var10 = _closure1_slot12;
                var9 = var10.CHANNEL;
                var8 = 12;
                var8 = var12[var8];
                var8 = var11.bind(var1)(var8);
                var11 = var8.RouteParam;
                var8 = var11.guildId;
                var8 = var8.bind(var11)();
                var8 = var9.bind(var10)(var8);
                var2['path'] = var8;
                var2 = var5.bind(var6)(var7, var2);
                var5 = var4 == var2;
                var6 = undefined;
                if(var5) { _fun0007_ip = 52; continue _fun0007 }
case 53:
                var2 = var2.params;
                var5 = var4 == var2;
                var6 = undefined;
                if(var5) { _fun0007_ip = 52; continue _fun0007 }
case 54:
                var6 = var2.guildId;
case 52:
                var5 = _closure1_slot11;
                var2 = null;
                if(!(var6 !== var5)) { _fun0007_ip = 55; continue _fun0007 }
case 56:
                var7 = var4 != var6;
                var5 = null;
                if(!var7) { _fun0007_ip = 57; continue _fun0007 }
case 58:
                var5 = var6;
case 57:
                var2 = var5;
case 55:
                var4 = var4 != var2;
                if(!var4) { _fun0007_ip = 59; continue _fun0007 }
case 60:
                var5 = _closure1_slot13;
                var4 = var2 !== var5;
case 59:
                if(!var4) { _fun0007_ip = 61; continue _fun0007 }
case 62:
                _closure1_slot13 = var2;
case 61:
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
            var1 = {};
            var3 = _closure1_slot15;
            var1['selectedGuildTimestampMillis'] = var3;
            var3 = _closure1_slot13;
            var1['selectedGuildId'] = var3;
            var2 = _closure1_slot14;
            var1['lastSelectedGuildId'] = var2;
            return var1;
        };
        var5['value'] = var7;
        var1[1] = var5;
        var5 = {};
        var7 = 'getGuildId';
        var5['key'] = var7;
        var7 = function value() {
            var1 = _closure1_slot13;
            return var1;
        };
        var5['value'] = var7;
        var1[2] = var5;
        var5 = {};
        var7 = 'getLastSelectedGuildId';
        var5['key'] = var7;
        var7 = function value() {
            var1 = _closure1_slot14;
            return var1;
        };
        var5['value'] = var7;
        var1[3] = var5;
        var5 = {};
        var7 = 'getLastSelectedTimestamp';
        var5['key'] = var7;
        var6 = function value(arg1) {
            _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                var3 = arg1;
                var4 = _closure1_slot13;
                var1 = -1;
                if(!(var4 !== var3)) { _fun0008_ip = 63; continue _fun0008 }
case 64:
                var2 = _closure1_slot15;
                var1 = var2[var3];
case 63:
                return var1;
            }
        };
        var5['value'] = var6;
        var1[4] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var8 = var2.bind(var1)(var8);
    var2 = 'SelectedGuildStore';
    var8['displayName'] = var2;
    var8['persistKey'] = var2;
    var2 = 14;
    var2 = var6[var2];
    var13 = var7.bind(var1)(var2);
    var2 = {};
    var2['CONNECTION_OPEN'] = var9;
    var9 = function handleOverlayInitialize(arg1) {
        var1 = arg1;
        var1 = var1.selectedGuildId;
        _closure1_slot13 = var1;
        var1 = undefined;
        _closure1_slot14 = var1;
        var2 = _closure1_slot17;
        var2 = var2.bind(var1)();
        return var1;
    };
    var2['OVERLAY_INITIALIZE'] = var9;
    var9 = function handleChannelSelect(arg1) {
        _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
            var1 = arg1;
            var3 = var1.guildId;
            var1 = _closure1_slot13;
            if(!(var1 !== var3)) { _fun0009_ip = 65; continue _fun0009 }
case 66:
            var4 = _closure1_slot18;
            var5 = _closure1_slot13;
            var1 = undefined;
            var5 = var4.bind(var1)(var5);
            var4 = var4.bind(var1)(var3);
            var4 = null;
            if(!(var4 != var3)) { _fun0009_ip = 67; continue _fun0009 }
case 68:
            _closure1_slot14 = var3;
case 67:
            _closure1_slot13 = var3;
            return var1;
case 65:
            var1 = false;
            return var1;
        }
    };
    var2['CHANNEL_SELECT'] = var9;
    var9 = function handleGuildMemberRemove(arg1) {
        _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
            var1 = arg1;
            var4 = var1.guildId;
            var1 = var1.user;
            var3 = var1.id;
            var5 = _closure1_slot8;
            var1 = var5.getId;
            var1 = var1.bind(var5)();
            var1 = var3 === var1;
            if(!var1) { _fun0010_ip = 69; continue _fun0010 }
case 9:
            var3 = _closure1_slot19;
            var2 = undefined;
            var1 = var3.bind(var2)(var4);
case 69:
            return var1;
        }
    };
    var2['GUILD_MEMBER_REMOVE'] = var9;
    var9 = function handleGuildDelete(arg1) {
        _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
            var1 = arg1;
            var1 = var1.guild;
            var4 = var1.id;
            var2 = var1.unavailable;
            var1 = true;
            var1 = var1 !== var2;
            if(!var1) { _fun0011_ip = 9; continue _fun0011 }
case 63:
            var3 = _closure1_slot19;
            var2 = undefined;
            var1 = var3.bind(var2)(var4);
case 9:
            return var1;
        }
    };
    var2['GUILD_DELETE'] = var9;
    var4 = function handleLogout() {
        var1 = null;
        _closure1_slot13 = var1;
        _closure1_slot14 = var1;
        var1 = undefined;
        return var1;
    };
    var2['LOGOUT'] = var4;
    var4 = var8.prototype;
    var4 = Object.create(var4, {constructor: {value: var8}});
    var14 = var4;
    var12 = var2;
    var2 = new var14[var8](var13, var12, var11);
    var2 = var2 instanceof Object ? var2 : var4;
    var4 = 15;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'stores/SelectedGuildStore.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    var2 = -1;
    var3['SELECTED_GUILD_TIMESTAMP_NOW'] = var2;
    return var1;
})();