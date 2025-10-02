// app/modules/shared_space_warnings/VoiceChannelBlockedUserStore.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = metroImportDefault;
    var3 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var5;
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
            _closure1_slot12 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot12 = var1;
    var9 = function init() {
        var1 = {};
        _closure1_slot9 = var1;
        var1 = {};
        _closure1_slot10 = var1;
        var1 = undefined;
        return var1;
    };
    var _closure1_slot13 = var9;
    var4 = function handleRelationshipChange(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var1 = arg1;
            var2 = var1.relationship;
            var5 = _closure1_slot8;
            var3 = var5.getVoiceStateForUser;
            var1 = var2.id;
            var3 = var3.bind(var5)(var1);
            var6 = null;
            var1 = var6 != var3;
            if(!var1) { _fun0002_ip = 6; continue _fun0002 }
case 7:
            var5 = var3.channelId;
            var1 = var6 != var5;
case 6:
            if(!var1) { _fun0002_ip = 8; continue _fun0002 }
case 9:
            var5 = _closure1_slot14;
            var4 = var3.channelId;
            var3 = var2.id;
            var2 = undefined;
            var1 = var5.bind(var2)(var4, var3);
case 8:
            return var1;
        }
    };
    var1 = function processUserInChannel(arg1, arg2) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var5 = arg1;
            var4 = arg2;
            var1 = global;
            var7 = var1.Set;
            var3 = _closure1_slot9;
            var13 = var3[var5];
            var6 = var7.prototype;
            var6 = Object.create(var6, {constructor: {value: var7}});
            var14 = var6;
            var3 = new var14[var7](var13, var12);
            var7 = var3 instanceof Object ? var3 : var6;
            var6 = _closure1_slot7;
            var3 = var6.isBlocked;
            var8 = var3.bind(var6)(var4);
            if(!var8) { _fun0003_ip = 10; continue _fun0003 }
case 11:
            var3 = var7.has;
            var3 = var3.bind(var7)(var4);
            if(var3) { _fun0003_ip = 10; continue _fun0003 }
case 4:
            var3 = var7.add;
            var3 = var3.bind(var7)(var4);
            var10 = true;
            var6 = true;
            _fun0003_ip = 12; continue _fun0003;
case 10:
            var10 = false;
            var6 = false;
            if(var8) { _fun0003_ip = 12; continue _fun0003 }
case 13:
            var8 = var7.delete;
            var10 = var8.bind(var7)(var4);
            var6 = false;
case 12:
            var3 = var7.size;
            var8 = 0;
            if(!(var8 === var3)) { _fun0003_ip = 14; continue _fun0003 }
case 15:
            if(var10) { _fun0003_ip = 16; continue _fun0003 }
case 14:
            if(!var10) { _fun0003_ip = 17; continue _fun0003 }
case 18:
            var3 = _closure1_slot9;
            var3[var5] = var7;
            _fun0003_ip = 17; continue _fun0003;
case 16:
            var3 = _closure1_slot9;
            var3 = delete var3[var5];
case 17:
            var7 = var1.Set;
            var1 = _closure1_slot10;
            var13 = var1[var5];
            var3 = var7.prototype;
            var3 = Object.create(var3, {constructor: {value: var7}});
            var14 = var3;
            var1 = new var14[var7](var13, var12);
            var7 = var1 instanceof Object ? var1 : var3;
            var3 = _closure1_slot7;
            var1 = var3.isIgnored;
            var9 = var1.bind(var3)(var4);
            if(!var9) { _fun0003_ip = 19; continue _fun0003 }
case 20:
            var1 = var7.has;
            var1 = var1.bind(var7)(var4);
            if(var1) { _fun0003_ip = 19; continue _fun0003 }
case 21:
            var1 = var7.add;
            var1 = var1.bind(var7)(var4);
            var1 = true;
            var3 = true;
            _fun0003_ip = 22; continue _fun0003;
case 19:
            var1 = var10;
            var3 = var6;
            if(var9) { _fun0003_ip = 22; continue _fun0003 }
case 23:
            var9 = var7.delete;
            var1 = var9.bind(var7)(var4);
            var3 = var6;
case 22:
            var6 = var7.size;
            if(!(var8 === var6)) { _fun0003_ip = 24; continue _fun0003 }
case 25:
            if(var1) { _fun0003_ip = 26; continue _fun0003 }
case 24:
            if(!var1) { _fun0003_ip = 27; continue _fun0003 }
case 28:
            var6 = _closure1_slot10;
            var6[var5] = var7;
            _fun0003_ip = 27; continue _fun0003;
case 26:
            var6 = _closure1_slot10;
            var6 = delete var6[var5];
case 27:
            if(!var3) { _fun0003_ip = 29; continue _fun0003 }
case 30:
            var6 = _closure1_slot0;
            var3 = _closure1_slot1;
            var2 = 7;
            var3 = var3[var2];
            var2 = undefined;
            var3 = var6.bind(var2)(var3);
            var2 = var3.handleBlockedOrIgnoredUserVoiceChannelJoin;
            var2 = var2.bind(var3)(var5, var4);
case 29:
            return var1;
        }
    };
    var _closure1_slot14 = var1;
    var2 = global;
    var11 = var2.Object;
    var10 = var11.defineProperty;
    var7 = {};
    var1 = true;
    var7['value'] = var1;
    var1 = '__esModule';
    var1 = var10.bind(var11)(var3, var1, var7);
    var1 = 0;
    var7 = var5[var1];
    var1 = undefined;
    var7 = var6.bind(var1)(var7);
    var _closure1_slot2 = var7;
    var7 = 1;
    var7 = var5[var7];
    var7 = var6.bind(var1)(var7);
    var _closure1_slot3 = var7;
    var7 = 2;
    var7 = var5[var7];
    var7 = var6.bind(var1)(var7);
    var _closure1_slot4 = var7;
    var7 = 3;
    var7 = var5[var7];
    var7 = var6.bind(var1)(var7);
    var _closure1_slot5 = var7;
    var7 = 4;
    var7 = var5[var7];
    var7 = var6.bind(var1)(var7);
    var _closure1_slot6 = var7;
    var7 = 5;
    var7 = var5[var7];
    var7 = var6.bind(var1)(var7);
    var _closure1_slot7 = var7;
    var7 = 6;
    var7 = var5[var7];
    var7 = var6.bind(var1)(var7);
    var _closure1_slot8 = var7;
    var7 = {};
    var _closure1_slot9 = var7;
    var7 = {};
    var _closure1_slot10 = var7;
    var2 = var2.Set;
    var7 = var2.prototype;
    var7 = Object.create(var7, {constructor: {value: var2}});
    var15 = var7;
    var2 = new var15[var2](var14);
    var2 = var2 instanceof Object ? var2 : var7;
    var _closure1_slot11 = var2;
    var2 = 8;
    var2 = var5[var2];
    var2 = var6.bind(var1)(var2);
    var7 = var2.Store;
    var2 = function(arg1) {
        var4 = function VoiceChannelBlockedUserStore() {
            _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
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
                var1 = _closure1_slot12;
                var1 = var1.bind(var3)();
                if(var1) { _fun0004_ip = 31; continue _fun0004 }
case 32:
                var7 = var9.apply;
                var5 = arguments;
                var1 = var5;
                var1 = var7.bind(var9)(var4, var1);
                _fun0004_ip = 33; continue _fun0004;
case 31:
                var7 = global;
                var8 = var7.Reflect;
                var7 = var8.construct;
                var6 = _closure1_slot5;
                var6 = var6.bind(var3)(var4);
                var6 = var6.constructor;
                var5 = arguments;
                var1 = var7.bind(var8)(var9, var5, var6);
case 33:
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
        var1 = function value() {
            var4 = this;
            var3 = var4.waitFor;
            var2 = _closure1_slot7;
            var1 = _closure1_slot8;
            var1 = var3.bind(var4)(var2, var1);
            var1 = undefined;
            return var1;
        };
        var5['value'] = var1;
        var1 = new Array(3);
        var1[0] = var5;
        var5 = {};
        var7 = 'getBlockedUsersForVoiceChannel';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                var3 = _closure1_slot9;
                var1 = arg1;
                var1 = var3[var1];
                var3 = null;
                if(!(var3 == var1)) { _fun0005_ip = 34; continue _fun0005 }
case 35:
                var1 = _closure1_slot11;
case 34:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[1] = var5;
        var5 = {};
        var7 = 'getIgnoredUsersForVoiceChannel';
        var5['key'] = var7;
        var6 = function value(arg1) {
            _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                var3 = _closure1_slot10;
                var1 = arg1;
                var1 = var3[var1];
                var3 = null;
                if(!(var3 == var1)) { _fun0006_ip = 34; continue _fun0006 }
case 35:
                var1 = _closure1_slot11;
case 34:
                return var1;
            }
        };
        var5['value'] = var6;
        var1[2] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var7 = var2.bind(var1)(var7);
    var2 = 9;
    var2 = var5[var2];
    var14 = var6.bind(var1)(var2);
    var2 = {};
    var2['CONNECTION_OPEN'] = var9;
    var2['LOGOUT'] = var9;
    var9 = function handleOverlayInitialize() {
        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
            var1 = _closure1_slot13;
            var10 = undefined;
            var1 = var1.bind(var10)();
            var2 = _closure1_slot8;
            var1 = var2.getAllVoiceStates;
            var3 = var1.bind(var2)();
            var9 = global;
            var2 = var9.Object;
            var1 = var2.values;
            var8 = var1.bind(var2)(var3);
            var1 = var8.length;
            var7 = 0;
            var2 = var7 < var1;
            var5 = false;
            var6 = null;
            var4 = 0;
            var3 = undefined;
            var1 = false;
            if(!var2) { _fun0007_ip = 36; continue _fun0007 }
case 3:
            var13 = var8[var4];
            var12 = var9.Object;
            var2 = var12.values;
            var15 = var2.bind(var12)(var13);
            var2 = var15.length;
            var2 = var7 < var2;
            var14 = var5;
            var13 = 0;
            var12 = var14;
            if(!var2) { _fun0007_ip = 37; continue _fun0007 }
case 38:
            var16 = var15[var13];
            var2 = var16.channelId;
            var17 = var14;
            if(!(var6 != var2)) { _fun0007_ip = 39; continue _fun0007 }
case 18:
            var19 = _closure1_slot14;
            var18 = var16.channelId;
            var2 = var16.userId;
            var2 = var19.bind(var10)(var18, var2);
            if(var2) { _fun0007_ip = 40; continue _fun0007 }
case 41:
            var2 = var14;
case 40:
            var17 = var2;
case 39:
            var13 = var13 + 1;
            var2 = var15.length;
            var14 = var17;
            var12 = var14;
            var3 = var16;
            if(var13 < var2) { _fun0007_ip = 38; continue _fun0007 }
case 37:
            var4 = var4 + 1;
            var2 = var8.length;
            var5 = var12;
            var1 = var5;
            if(var4 < var2) { _fun0007_ip = 3; continue _fun0007 }
case 36:
            return var1;
        }
    };
    var2['OVERLAY_INITIALIZE'] = var9;
    var8 = function handleVoiceStateUpdates(arg1) {
        var2 = arg1;
        var4 = var2.voiceStates;
        var2 = false;
        var _closure2_slot0 = var2;
        var3 = var4.forEach;
        var2 = function(arg1) {
            _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                var1 = arg1;
                var2 = var1.oldChannelId;
                var3 = null;
                if(!(var3 != var2)) { _fun0008_ip = 42; continue _fun0008 }
case 43:
                var5 = _closure1_slot9;
                var4 = var1.oldChannelId;
                var4 = var5[var4];
                if(!(var3 != var4)) { _fun0008_ip = 44; continue _fun0008 }
case 45:
                var5 = _closure1_slot9;
                var4 = var1.oldChannelId;
                var6 = var5[var4];
                if(!(var3 != var6)) { _fun0008_ip = 3; continue _fun0008 }
case 46:
                var5 = var6.delete;
                var4 = var1.userId;
                var4 = var5.bind(var6)(var4);
case 3:
                var4 = true;
                _closure2_slot0 = var4;
case 44:
                var5 = _closure1_slot10;
                var4 = var1.oldChannelId;
                var4 = var5[var4];
                if(!(var3 != var4)) { _fun0008_ip = 42; continue _fun0008 }
case 13:
                var4 = _closure1_slot10;
                var2 = var1.oldChannelId;
                var5 = var4[var2];
                if(!(var3 != var5)) { _fun0008_ip = 47; continue _fun0008 }
case 48:
                var4 = var5.delete;
                var2 = var1.userId;
                var2 = var4.bind(var5)(var2);
case 47:
                var2 = true;
                _closure2_slot0 = var2;
case 42:
                var2 = var1.channelId;
                if(!(var3 != var2)) { _fun0008_ip = 49; continue _fun0008 }
case 50:
                var4 = _closure1_slot14;
                var3 = var1.channelId;
                var2 = var1.userId;
                var1 = undefined;
                var2 = var4.bind(var1)(var3, var2);
                if(var2) { _fun0008_ip = 51; continue _fun0008 }
case 37:
                var2 = _closure2_slot0;
case 51:
                _closure2_slot0 = var2;
case 49:
                var1 = undefined;
                return var1;
            }
        };
        var2 = var3.bind(var4)(var2);
        var1 = _closure2_slot0;
        return var1;
    };
    var2['VOICE_STATE_UPDATES'] = var8;
    var2['RELATIONSHIP_ADD'] = var4;
    var2['RELATIONSHIP_REMOVE'] = var4;
    var2['RELATIONSHIP_UPDATE'] = var4;
    var4 = var7.prototype;
    var4 = Object.create(var4, {constructor: {value: var7}});
    var15 = var4;
    var13 = var2;
    var2 = new var15[var7](var14, var13, var12);
    var2 = var2 instanceof Object ? var2 : var4;
    var4 = 10;
    var5 = var5[var4];
    var4 = require;
    var6 = var4.bind(var1)(var5);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/shared_space_warnings/VoiceChannelBlockedUserStore.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();