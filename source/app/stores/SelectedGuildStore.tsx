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
            _closure1_slot15 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot15 = var1;
    var9 = function handleConnectionOpen() {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var3 = _closure1_slot12;
            var2 = null;
            var3 = var2 != var3;
            if(!var3) { _fun0002_ip = 38; continue _fun0002 }
 16:
            var6 = _closure1_slot10;
            var5 = var6.getGuild;
            var4 = _closure1_slot12;
            var4 = var5.bind(var6)(var4);
            var3 = var2 == var4;
 38:
            if(!var3) { _fun0002_ip = 64; continue _fun0002 }
 41:
            var6 = _closure1_slot7;
            var5 = var6.getRequest;
            var4 = _closure1_slot12;
            var4 = var5.bind(var6)(var4);
            var3 = var2 == var4;
 64:
            if(!var3) { _fun0002_ip = 71; continue _fun0002 }
 67:
            _closure1_slot12 = var2;
 71:
            var3 = _closure1_slot13;
            var3 = var2 != var3;
            if(!var3) { _fun0002_ip = 104; continue _fun0002 }
 82:
            var6 = _closure1_slot10;
            var5 = var6.getGuild;
            var4 = _closure1_slot13;
            var4 = var5.bind(var6)(var4);
            var3 = var2 == var4;
 104:
            if(!var3) { _fun0002_ip = 130; continue _fun0002 }
 107:
            var6 = _closure1_slot7;
            var5 = var6.getRequest;
            var4 = _closure1_slot13;
            var4 = var5.bind(var6)(var4);
            var3 = var2 == var4;
 130:
            if(!var3) { _fun0002_ip = 137; continue _fun0002 }
 133:
            _closure1_slot13 = var2;
 137:
            var3 = _closure1_slot17;
            var2 = _closure1_slot12;
            var1 = undefined;
            var2 = var3.bind(var1)(var2);
            return var1;
        }
    };
    var _closure1_slot16 = var9;
    var1 = function updateLastSelectedGuildMillis(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
            var3 = arg1;
            var1 = null;
            if(!(var1 != var3)) { _fun0003_ip = 37; continue _fun0003 }
 9:
            var2 = _closure1_slot14;
            var1 = global;
            var4 = var1.Date;
            var1 = var4.now;
            var1 = var1.bind(var4)();
            var2[var3] = var1;
 37:
            var1 = undefined;
            return var1;
        }
    };
    var _closure1_slot17 = var1;
    var1 = function handleGuildRemove(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
            var4 = arg1;
            var _closure2_slot0 = var4;
            var1 = _closure1_slot14;
            var1 = delete var1[var4];
            var3 = _closure1_slot13;
            var1 = false;
            if(!(var3 === var4)) { _fun0004_ip = 38; continue _fun0004 }
 30:
            var3 = null;
            _closure1_slot13 = var3;
            var1 = true;
 38:
            var3 = _closure1_slot12;
            if(!(var3 === var4)) { _fun0004_ip = 199; continue _fun0004 }
 49:
            var4 = _closure1_slot10;
            var3 = var4.getGuildsArray;
            var4 = var3.bind(var4)();
            var3 = var4.find;
            var2 = function(arg1) {
                var1 = arg1;
                var2 = var1.id;
                var1 = _closure2_slot0;
                var1 = var2 !== var1;
                return var1;
            };
            var2 = var3.bind(var4)(var2);
            var3 = null;
            if(!(var3 == var2)) { _fun0004_ip = 135; continue _fun0004 }
 84:
            _closure1_slot12 = var3;
            var6 = _closure1_slot0;
            var4 = _closure1_slot1;
            var3 = 10;
            var4 = var4[var3];
            var3 = undefined;
            var6 = var6.bind(var3)(var4);
            var4 = var6.replaceWith;
            var3 = _closure1_slot11;
            var3 = var3.ME;
            var3 = var4.bind(var6)(var3);
            var1 = true;
            _fun0004_ip = 199; continue _fun0004;
 135:
            var3 = var2.id;
            _closure1_slot12 = var3;
            var6 = _closure1_slot0;
            var4 = _closure1_slot1;
            var3 = 10;
            var4 = var4[var3];
            var3 = undefined;
            var4 = var6.bind(var3)(var4);
            var3 = var4.replaceWith;
            var6 = _closure1_slot11;
            var5 = var6.CHANNEL;
            var2 = var2.id;
            var2 = var5.bind(var6)(var2);
            var2 = var3.bind(var4)(var2);
            var1 = true;
 199:
            return var1;
        }
    };
    var _closure1_slot18 = var1;
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
    var2 = var2.Routes;
    var _closure1_slot11 = var2;
    var2 = null;
    var _closure1_slot12 = var2;
    var _closure1_slot13 = var2;
    var2 = {};
    var _closure1_slot14 = var2;
    var2 = 13;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var8 = var2.PersistedStore;
    var2 = function(arg1) {
        var4 = function SelectedGuildStore() {
            _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
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
                var1 = _closure1_slot15;
                var1 = var1.bind(var3)();
                if(var1) { _fun0005_ip = 69; continue _fun0005 }
 51:
                var7 = var9.apply;
                var5 = arguments;
                var1 = var5;
                var1 = var7.bind(var9)(var4, var1);
                _fun0005_ip = 105; continue _fun0005;
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
            _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
                var2 = arg1;
                var7 = this;
                var3 = var7.mustEmitChanges;
                var1 = function(arg1) {
                    var1 = arg1;
                    var2 = var1.type;
                    var1 = 'CONNECTION_OPEN';
                    var1 = var1 !== var2;
                    return var1;
                };
                var1 = var3.bind(var7)(var1);
                var6 = var7.waitFor;
                var5 = _closure1_slot10;
                var4 = _closure1_slot8;
                var1 = _closure1_slot9;
                var1 = var6.bind(var7)(var5, var4, var1);
                var4 = null;
                var6 = var4 == var2;
                var1 = undefined;
                var5 = undefined;
                if(var6) { _fun0006_ip = 71; continue _fun0006 }
 65:
                var5 = var2.selectedGuildTimestampMillis;
 71:
                if(!(var4 == var5)) { _fun0006_ip = 77; continue _fun0006 }
 75:
                var5 = {};
 77:
                _closure1_slot14 = var5;
                var5 = var4 == var2;
                var6 = undefined;
                if(var5) { _fun0006_ip = 96; continue _fun0006 }
 90:
                var6 = var2.selectedGuildId;
 96:
                var7 = var4 != var6;
                var5 = null;
                if(!var7) { _fun0006_ip = 108; continue _fun0006 }
 105:
                var5 = var6;
 108:
                _closure1_slot12 = var5;
                var6 = var4 == var2;
                var5 = undefined;
                if(var6) { _fun0006_ip = 127; continue _fun0006 }
 121:
                var5 = var2.lastSelectedGuildId;
 127:
                var6 = var4 != var5;
                var2 = null;
                if(!var6) { _fun0006_ip = 139; continue _fun0006 }
 136:
                var2 = var5;
 139:
                _closure1_slot13 = var2;
                var2 = _closure1_slot9;
                var7 = var2.lastNonVoiceRoute;
                var11 = _closure1_slot0;
                var12 = _closure1_slot1;
                var2 = 11;
                var2 = var12[var2];
                var6 = var11.bind(var1)(var2);
                var5 = var6.matchPath;
                var2 = {};
                var10 = _closure1_slot11;
                var9 = var10.CHANNEL;
                var8 = 12;
                var8 = var12[var8];
                var8 = var11.bind(var1)(var8);
                var11 = var8.RouteParam;
                var8 = var11.guildId;
                var8 = var8.bind(var11)();
                var8 = var9.bind(var10)(var8);
                var2['path'] = var8;
                var5 = var5.bind(var6)(var7, var2);
                var6 = var4 == var5;
                var2 = undefined;
                if(var6) { _fun0006_ip = 263; continue _fun0006 }
 243:
                var5 = var5.params;
                var6 = var4 == var5;
                var2 = undefined;
                if(var6) { _fun0006_ip = 263; continue _fun0006 }
 258:
                var2 = var5.guildId;
 263:
                var4 = var4 != var2;
                if(!var4) { _fun0006_ip = 278; continue _fun0006 }
 270:
                var5 = _closure1_slot12;
                var4 = var2 !== var5;
 278:
                if(!var4) { _fun0006_ip = 285; continue _fun0006 }
 281:
                _closure1_slot12 = var2;
 285:
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
            var3 = _closure1_slot14;
            var1['selectedGuildTimestampMillis'] = var3;
            var3 = _closure1_slot12;
            var1['selectedGuildId'] = var3;
            var2 = _closure1_slot13;
            var1['lastSelectedGuildId'] = var2;
            return var1;
        };
        var5['value'] = var7;
        var1[1] = var5;
        var5 = {};
        var7 = 'getGuildId';
        var5['key'] = var7;
        var7 = function value() {
            var1 = _closure1_slot12;
            return var1;
        };
        var5['value'] = var7;
        var1[2] = var5;
        var5 = {};
        var7 = 'getLastSelectedGuildId';
        var5['key'] = var7;
        var7 = function value() {
            var1 = _closure1_slot13;
            return var1;
        };
        var5['value'] = var7;
        var1[3] = var5;
        var5 = {};
        var7 = 'getLastSelectedTimestamp';
        var5['key'] = var7;
        var6 = function value(arg1) {
            _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
                var3 = arg1;
                var4 = _closure1_slot12;
                var1 = -1;
                if(!(var4 !== var3)) { _fun0007_ip = 28; continue _fun0007 }
 20:
                var2 = _closure1_slot14;
                var1 = var2[var3];
 28:
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
        _closure1_slot12 = var1;
        var1 = undefined;
        _closure1_slot13 = var1;
        var2 = _closure1_slot16;
        var2 = var2.bind(var1)();
        return var1;
    };
    var2['OVERLAY_INITIALIZE'] = var9;
    var9 = function handleChannelSelect(arg1) {
        _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
 0:
            var1 = arg1;
            var3 = var1.guildId;
            var1 = _closure1_slot12;
            if(!(var1 !== var3)) { _fun0008_ip = 55; continue _fun0008 }
 19:
            var4 = _closure1_slot17;
            var5 = _closure1_slot12;
            var1 = undefined;
            var5 = var4.bind(var1)(var5);
            var4 = var4.bind(var1)(var3);
            var4 = null;
            if(!(var4 != var3)) { _fun0008_ip = 49; continue _fun0008 }
 45:
            _closure1_slot13 = var3;
 49:
            _closure1_slot12 = var3;
            return var1;
 55:
            var1 = false;
            return var1;
        }
    };
    var2['CHANNEL_SELECT'] = var9;
    var9 = function handleGuildMemberRemove(arg1) {
        _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
 0:
            var1 = arg1;
            var4 = var1.guildId;
            var1 = var1.user;
            var3 = var1.id;
            var5 = _closure1_slot8;
            var1 = var5.getId;
            var1 = var1.bind(var5)();
            var1 = var3 === var1;
            if(!var1) { _fun0009_ip = 53; continue _fun0009 }
 42:
            var3 = _closure1_slot18;
            var2 = undefined;
            var1 = var3.bind(var2)(var4);
 53:
            return var1;
        }
    };
    var2['GUILD_MEMBER_REMOVE'] = var9;
    var9 = function handleGuildDelete(arg1) {
        _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
 0:
            var1 = arg1;
            var1 = var1.guild;
            var4 = var1.id;
            var2 = var1.unavailable;
            var1 = true;
            var1 = var1 !== var2;
            if(!var1) { _fun0010_ip = 42; continue _fun0010 }
 28:
            var3 = _closure1_slot18;
            var2 = undefined;
            var1 = var3.bind(var2)(var4);
 42:
            return var1;
        }
    };
    var2['GUILD_DELETE'] = var9;
    var4 = function handleLogout() {
        var1 = null;
        _closure1_slot12 = var1;
        _closure1_slot13 = var1;
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