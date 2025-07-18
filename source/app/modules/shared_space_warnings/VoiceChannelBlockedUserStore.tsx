// app/modules/shared_space_warnings/VoiceChannelBlockedUserStore.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var6 = native3;
    var3 = native6;
    var5 = native7;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var5;
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
 0:
            var1 = arg1;
            var2 = var1.relationship;
            var5 = _closure1_slot8;
            var3 = var5.getVoiceStateForUser;
            var1 = var2.id;
            var3 = var3.bind(var5)(var1);
            var6 = null;
            var1 = var6 != var3;
            if(!var1) { _fun0002_ip = 50; continue _fun0002 }
 41:
            var5 = var3.channelId;
            var1 = var6 != var5;
 50:
            if(!var1) { _fun0002_ip = 75; continue _fun0002 }
 53:
            var5 = _closure1_slot14;
            var4 = var3.channelId;
            var3 = var2.id;
            var2 = undefined;
            var1 = var5.bind(var2)(var4, var3);
 75:
            return var1;
        }
    };
    var1 = function processUserInChannel(arg1, arg2) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
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
            if(!var8) { _fun0003_ip = 92; continue _fun0003 }
 63:
            var3 = var7.has;
            var3 = var3.bind(var7)(var4);
            if(var3) { _fun0003_ip = 92; continue _fun0003 }
 76:
            var3 = var7.add;
            var3 = var3.bind(var7)(var4);
            var10 = true;
            var6 = true;
            _fun0003_ip = 111; continue _fun0003;
 92:
            var10 = false;
            var6 = false;
            if(var8) { _fun0003_ip = 111; continue _fun0003 }
 99:
            var8 = var7.delete;
            var10 = var8.bind(var7)(var4);
            var6 = false;
 111:
            var3 = var7.size;
            var8 = 0;
            if(!(var8 === var3)) { _fun0003_ip = 125; continue _fun0003 }
 122:
            if(var10) { _fun0003_ip = 138; continue _fun0003 }
 125:
            if(!var10) { _fun0003_ip = 146; continue _fun0003 }
 128:
            var3 = _closure1_slot9;
            var3[var5] = var7;
            _fun0003_ip = 146; continue _fun0003;
 138:
            var3 = _closure1_slot9;
            var3 = delete var3[var5];
 146:
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
            if(!var9) { _fun0003_ip = 227; continue _fun0003 }
 198:
            var1 = var7.has;
            var1 = var1.bind(var7)(var4);
            if(var1) { _fun0003_ip = 227; continue _fun0003 }
 211:
            var1 = var7.add;
            var1 = var1.bind(var7)(var4);
            var1 = true;
            var3 = true;
            _fun0003_ip = 249; continue _fun0003;
 227:
            var1 = var10;
            var3 = var6;
            if(var9) { _fun0003_ip = 249; continue _fun0003 }
 236:
            var9 = var7.delete;
            var1 = var9.bind(var7)(var4);
            var3 = var6;
 249:
            var6 = var7.size;
            if(!(var8 === var6)) { _fun0003_ip = 261; continue _fun0003 }
 258:
            if(var1) { _fun0003_ip = 274; continue _fun0003 }
 261:
            if(!var1) { _fun0003_ip = 282; continue _fun0003 }
 264:
            var6 = _closure1_slot10;
            var6[var5] = var7;
            _fun0003_ip = 282; continue _fun0003;
 274:
            var6 = _closure1_slot10;
            var6 = delete var6[var5];
 282:
            if(!var3) { _fun0003_ip = 321; continue _fun0003 }
 285:
            var6 = _closure1_slot0;
            var3 = _closure1_slot1;
            var2 = 7;
            var3 = var3[var2];
            var2 = undefined;
            var3 = var6.bind(var2)(var3);
            var2 = var3.handleBlockedOrIgnoredUserVoiceChannelJoin;
            var2 = var2.bind(var3)(var5, var4);
 321:
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
                var1 = _closure1_slot12;
                var1 = var1.bind(var3)();
                if(var1) { _fun0004_ip = 69; continue _fun0004 }
 51:
                var7 = var9.apply;
                var5 = arguments;
                var1 = var5;
                var1 = var7.bind(var9)(var4, var1);
                _fun0004_ip = 105; continue _fun0004;
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
 0:
                var3 = _closure1_slot9;
                var1 = arg1;
                var1 = var3[var1];
                var3 = null;
                if(!(var3 == var1)) { _fun0005_ip = 24; continue _fun0005 }
 20:
                var1 = _closure1_slot11;
 24:
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
 0:
                var3 = _closure1_slot10;
                var1 = arg1;
                var1 = var3[var1];
                var3 = null;
                if(!(var3 == var1)) { _fun0006_ip = 24; continue _fun0006 }
 20:
                var1 = _closure1_slot11;
 24:
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
 0:
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
            if(!var2) { _fun0007_ip = 196; continue _fun0007 }
 72:
            var13 = var8[var4];
            var12 = var9.Object;
            var2 = var12.values;
            var15 = var2.bind(var12)(var13);
            var2 = var15.length;
            var2 = var7 < var2;
            var14 = var5;
            var13 = 0;
            var12 = var14;
            if(!var2) { _fun0007_ip = 178; continue _fun0007 }
 112:
            var16 = var15[var13];
            var2 = var16.channelId;
            var17 = var14;
            if(!(var6 != var2)) { _fun0007_ip = 157; continue _fun0007 }
 128:
            var19 = _closure1_slot14;
            var18 = var16.channelId;
            var2 = var16.userId;
            var2 = var19.bind(var10)(var18, var2);
            if(var2) { _fun0007_ip = 154; continue _fun0007 }
 151:
            var2 = var14;
 154:
            var17 = var2;
 157:
            var13 = var13 + 1;
            var2 = var15.length;
            var14 = var17;
            var12 = var14;
            var3 = var16;
            if(var13 < var2) { _fun0007_ip = 112; continue _fun0007 }
 178:
            var4 = var4 + 1;
            var2 = var8.length;
            var5 = var12;
            var1 = var5;
            if(var4 < var2) { _fun0007_ip = 72; continue _fun0007 }
 196:
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
 0:
                var1 = arg1;
                var2 = var1.oldChannelId;
                var3 = null;
                if(!(var3 != var2)) { _fun0008_ip = 141; continue _fun0008 }
 18:
                var5 = _closure1_slot9;
                var4 = var1.oldChannelId;
                var4 = var5[var4];
                if(!(var3 != var4)) { _fun0008_ip = 81; continue _fun0008 }
 39:
                var5 = _closure1_slot9;
                var4 = var1.oldChannelId;
                var6 = var5[var4];
                if(!(var3 != var6)) { _fun0008_ip = 72; continue _fun0008 }
 57:
                var5 = var6.delete;
                var4 = var1.userId;
                var4 = var5.bind(var6)(var4);
 72:
                var4 = true;
                _closure2_slot0 = var4;
 81:
                var5 = _closure1_slot10;
                var4 = var1.oldChannelId;
                var4 = var5[var4];
                if(!(var3 != var4)) { _fun0008_ip = 141; continue _fun0008 }
 99:
                var4 = _closure1_slot10;
                var2 = var1.oldChannelId;
                var5 = var4[var2];
                if(!(var3 != var5)) { _fun0008_ip = 132; continue _fun0008 }
 117:
                var4 = var5.delete;
                var2 = var1.userId;
                var2 = var4.bind(var5)(var2);
 132:
                var2 = true;
                _closure2_slot0 = var2;
 141:
                var2 = var1.channelId;
                if(!(var3 != var2)) { _fun0008_ip = 192; continue _fun0008 }
 150:
                var4 = _closure1_slot14;
                var3 = var1.channelId;
                var2 = var1.userId;
                var1 = undefined;
                var2 = var4.bind(var1)(var3, var2);
                if(var2) { _fun0008_ip = 185; continue _fun0008 }
 178:
                var2 = _closure2_slot0;
 185:
                _closure2_slot0 = var2;
 192:
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
    var4 = native2;
    var6 = var4.bind(var1)(var5);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/shared_space_warnings/VoiceChannelBlockedUserStore.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();