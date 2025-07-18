// app/stores/native/ShareStore.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var7 = native3;
    var3 = native6;
    var6 = native7;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
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
            _closure1_slot19 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot19 = var1;
    var9 = function handleTokenUpdated(arg1) {
        var1 = arg1;
        var2 = var1.token;
        var _closure1_slot5 = var2;
        var1 = false;
        return var1;
    };
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
    var _closure1_slot6 = var2;
    var2 = 1;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot7 = var2;
    var2 = 2;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot8 = var2;
    var2 = 3;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot9 = var2;
    var2 = 4;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot10 = var2;
    var2 = 5;
    var2 = var6[var2];
    var2 = var5.bind(var1)(var2);
    var2 = var2.NativeModules;
    var _closure1_slot11 = var2;
    var2 = 6;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot12 = var2;
    var2 = 7;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot13 = var2;
    var2 = 8;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot14 = var2;
    var2 = 9;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot15 = var2;
    var2 = 10;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot16 = var2;
    var2 = 11;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot17 = var2;
    var2 = 12;
    var2 = var6[var2];
    var2 = var5.bind(var1)(var2);
    var2 = var2.AppStates;
    var _closure1_slot18 = var2;
    var2 = 16;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var8 = var2.Store;
    var2 = function(arg1) {
        var4 = function ShareStore() {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                var4 = this;
                var3 = undefined;
                var5 = undefined;
                var1 = _closure1_slot6;
                var2 = _closure2_slot0;
                var1 = var1.bind(var3)(var4, var2);
                var1 = _closure1_slot9;
                var9 = var1.bind(var3)(var2);
                var2 = _closure1_slot8;
                var1 = _closure1_slot19;
                var1 = var1.bind(var3)();
                if(var1) { _fun0002_ip = 69; continue _fun0002 }
 51:
                var7 = var9.apply;
                var5 = arguments;
                var1 = var5;
                var1 = var7.bind(var9)(var4, var1);
                _fun0002_ip = 105; continue _fun0002;
 69:
                var7 = global;
                var8 = var7.Reflect;
                var7 = var8.construct;
                var6 = _closure1_slot9;
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
        var6 = _closure1_slot10;
        var3 = undefined;
        var5 = arg1;
        var5 = var6.bind(var3)(var4, var5);
        var2 = _closure1_slot7;
        var5 = {};
        var6 = 'initialize';
        var5['key'] = var6;
        var1 = function value() {
            var7 = this;
            var6 = var7.waitFor;
            var12 = _closure1_slot12;
            var11 = _closure1_slot13;
            var10 = _closure1_slot14;
            var9 = _closure1_slot15;
            var8 = _closure1_slot16;
            var13 = var7;
            var1 = var13[var6](var12, var11, var10, var9, var8, var7);
            var1 = undefined;
            return var1;
        };
        var5['value'] = var1;
        var1 = new Array(1);
        var1[0] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var8 = var2.bind(var1)(var8);
    var2 = 'ShareStore';
    var8['displayName'] = var2;
    var2 = 17;
    var2 = var6[var2];
    var13 = var7.bind(var1)(var2);
    var2 = {};
    var10 = function handleChannelSelect(arg1) {
        var1 = arg1;
        var3 = var1.guildId;
        var _closure1_slot3 = var3;
        var1 = var1.channelId;
        var _closure1_slot4 = var1;
        var1 = false;
        return var1;
    };
    var2['CHANNEL_SELECT'] = var10;
    var10 = function handleLogout() {
        var3 = _closure1_slot11;
        var5 = var3.ShareManager;
        var4 = var5.setSelectedChannel;
        var1 = null;
        var4 = var4.bind(var5)(var1, var1);
        var5 = var3.ShareManager;
        var4 = var5.setAuthenticationToken;
        var7 = _closure1_slot1;
        var6 = _closure1_slot2;
        var3 = 15;
        var6 = var6[var3];
        var3 = undefined;
        var6 = var7.bind(var3)(var6);
        var3 = var6.getSuperPropertiesBase64;
        var3 = var3.bind(var6)();
        var3 = var4.bind(var5)(var1, var3);
        _closure1_slot5 = var1;
        var1 = false;
        return var1;
    };
    var2['LOGOUT'] = var10;
    var2['REGISTER_SUCCESS'] = var9;
    var2['LOGIN_SUCCESS'] = var9;
    var2['UPDATE_TOKEN'] = var9;
    var9 = function handleStartSession() {
        var3 = _closure1_slot12;
        var1 = var3.getToken;
        var1 = var1.bind(var3)();
        _closure1_slot5 = var1;
        var1 = false;
        return var1;
    };
    var2['START_SESSION'] = var9;
    var4 = function handleAppStateUpdate(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
            var1 = arg1;
            var4 = var1.state;
            var1 = _closure1_slot18;
            var1 = var1.INACTIVE;
            if(!(var4 === var1)) { _fun0003_ip = 273; continue _fun0003 }
 28:
            var3 = _closure1_slot4;
            var1 = null;
            if(!(var1 != var3)) { _fun0003_ip = 273; continue _fun0003 }
 41:
            var6 = _closure1_slot14;
            var5 = var6.getGuild;
            var3 = _closure1_slot3;
            var6 = var5.bind(var6)(var3);
            var3 = var1 != var6;
            var7 = null;
            if(!var3) { _fun0003_ip = 87; continue _fun0003 }
 68:
            var3 = global;
            var5 = var3.JSON;
            var3 = var5.stringify;
            var7 = var3.bind(var5)(var6);
 87:
            var6 = _closure1_slot13;
            var5 = var6.getChannel;
            var8 = _closure1_slot15;
            var3 = var8.getChannelId;
            var3 = var3.bind(var8)();
            var9 = var5.bind(var6)(var3);
            var3 = var1 != var9;
            var6 = null;
            if(!var3) { _fun0003_ip = 243; continue _fun0003 }
 124:
            var3 = global;
            var8 = var3.JSON;
            var5 = var8.stringify;
            var3 = {};
            var10 = var9.toJS;
            var14 = var10.bind(var9)();
            var15 = var3;
            var10 = copyDataProperties(var15, var14);
            var11 = var9.recipients;
            if(!(var1 == var11)) { _fun0003_ip = 171; continue _fun0003 }
 167:
            var11 = new Array(0);
 171:
            var10 = var11.map;
            var9 = _closure1_slot17;
            var9 = var9.getUser;
            var11 = var10.bind(var11)(var9);
            var10 = var11.filter;
            var13 = _closure1_slot0;
            var12 = _closure1_slot2;
            var9 = 13;
            var12 = var12[var9];
            var9 = undefined;
            var9 = var13.bind(var9)(var12);
            var9 = var9.isNotNullish;
            var10 = var10.bind(var11)(var9);
            var9 = 'recipients';
            var3[var9] = var10;
            var6 = var5.bind(var8)(var3);
 243:
            var3 = _closure1_slot11;
            var5 = var3.ShareManager;
            var3 = var5.setSelectedChannel;
            var3 = var3.bind(var5)(var6, var7);
            _closure1_slot3 = var1;
            _closure1_slot4 = var1;
 273:
            var3 = _closure1_slot5;
            var1 = null;
            if(!(var1 != var3)) { _fun0003_ip = 393; continue _fun0003 }
 283:
            var5 = _closure1_slot0;
            var10 = _closure1_slot2;
            var3 = 14;
            var3 = var10[var3];
            var9 = undefined;
            var6 = var5.bind(var9)(var3);
            var5 = var6.extendSuperProperties;
            var3 = {};
            var3['client_app_state'] = var4;
            var3 = var5.bind(var6)(var3);
            var3 = _closure1_slot11;
            var7 = var3.ShareManager;
            var6 = var7.setAuthenticationToken;
            var5 = _closure1_slot5;
            var8 = _closure1_slot1;
            var3 = 15;
            var3 = var10[var3];
            var8 = var8.bind(var9)(var3);
            var3 = var8.getSuperPropertiesBase64;
            var3 = var3.bind(var8)();
            var3 = var6.bind(var7)(var5, var3);
            var3 = _closure1_slot18;
            var3 = var3.INACTIVE;
            if(!(var4 === var3)) { _fun0003_ip = 393; continue _fun0003 }
 389:
            _closure1_slot5 = var1;
 393:
            var1 = false;
            return var1;
        }
    };
    var2['APP_STATE_UPDATE'] = var4;
    var4 = var8.prototype;
    var4 = Object.create(var4, {constructor: {value: var8}});
    var14 = var4;
    var12 = var2;
    var2 = new var14[var8](var13, var12, var11);
    var2 = var2 instanceof Object ? var2 : var4;
    var4 = 18;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'stores/native/ShareStore.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();