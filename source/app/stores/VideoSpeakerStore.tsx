// app/stores/VideoSpeakerStore.tsx
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
            _closure1_slot18 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot18 = var1;
    var11 = function updateSpeaker() {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var3 = arguments[0];
            var1 = undefined;
            if(!(var3 === var1)) { _fun0002_ip = 6; continue _fun0002 }
case 7:
            var3 = true;
case 6:
            var _closure2_slot0 = var1;
            var _closure2_slot1 = var1;
            var4 = _closure1_slot3;
            var7 = null;
            var6 = var7 == var4;
            var4 = null;
            if(var6) { _fun0002_ip = 8; continue _fun0002 }
case 9:
            var9 = _closure1_slot10;
            var8 = var9.getSelectedParticipantId;
            var6 = _closure1_slot3;
            var8 = var8.bind(var9)(var6);
            var9 = _closure1_slot11;
            var6 = var9.getLastActiveStream;
            var13 = var6.bind(var9)();
            var6 = var7 != var8;
            var10 = null;
            if(!var6) { _fun0002_ip = 10; continue _fun0002 }
case 11:
            var11 = _closure1_slot10;
            var9 = var11.getParticipant;
            var6 = _closure1_slot3;
            var10 = var9.bind(var11)(var6, var8);
case 10:
            var6 = var7 == var10;
            var9 = undefined;
            if(var6) { _fun0002_ip = 12; continue _fun0002 }
case 13:
            var9 = var10.type;
case 12:
            var6 = _closure1_slot15;
            var6 = var6.ACTIVITY;
            var6 = var9 !== var6;
            if(!var6) { _fun0002_ip = 14; continue _fun0002 }
case 15:
            var9 = var7 == var10;
            var11 = undefined;
            if(var9) { _fun0002_ip = 16; continue _fun0002 }
case 17:
            var11 = var10.type;
case 16:
            var9 = _closure1_slot15;
            var9 = var9.USER;
            var9 = var11 !== var9;
            if(var9) { _fun0002_ip = 18; continue _fun0002 }
case 19:
            var11 = var10.voiceState;
            var10 = var7 != var11;
            if(!var10) { _fun0002_ip = 20; continue _fun0002 }
case 21:
            var10 = var11.selfVideo;
case 20:
            var9 = var10;
case 18:
            var6 = var9;
case 14:
            if(var6) { _fun0002_ip = 22; continue _fun0002 }
case 23:
            var8 = null;
case 22:
            var6 = var8;
            if(!(var7 != var13)) { _fun0002_ip = 24; continue _fun0002 }
case 25:
            var6 = var8;
            if(!(var7 == var6)) { _fun0002_ip = 24; continue _fun0002 }
case 26:
            var11 = _closure1_slot10;
            var10 = var11.getParticipant;
            var9 = _closure1_slot3;
            var12 = _closure1_slot0;
            var14 = _closure1_slot2;
            var8 = 11;
            var8 = var14[var8];
            var12 = var12.bind(var1)(var8);
            var8 = var12.encodeStreamKey;
            var8 = var8.bind(var12)(var13);
            var9 = var10.bind(var11)(var9, var8);
            var10 = var7 == var9;
            var8 = undefined;
            if(var10) { _fun0002_ip = 27; continue _fun0002 }
case 28:
            var8 = var9.id;
case 27:
            var6 = var8;
case 24:
            var4 = var6;
            if(!(var7 == var4)) { _fun0002_ip = 8; continue _fun0002 }
case 29:
            var8 = _closure1_slot12;
            var6 = var8.getId;
            var6 = var6.bind(var8)();
            _closure2_slot0 = var6;
            var8 = _closure1_slot1;
            var9 = _closure1_slot2;
            var6 = 12;
            var6 = var9[var6];
            var8 = var8.bind(var1)(var6);
            var10 = _closure1_slot10;
            var9 = var10.getVideoParticipants;
            var6 = _closure1_slot3;
            var6 = var9.bind(var10)(var6);
            var9 = var8.bind(var1)(var6);
            var8 = var9.filter;
            var6 = function(arg1) {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var2 = arg1;
                    var4 = var2.type;
                    var1 = _closure1_slot15;
                    var1 = var1.USER;
                    var1 = var4 === var1;
                    if(!var1) { _fun0003_ip = 30; continue _fun0003 }
case 31:
                    var4 = var2.user;
                    var5 = var4.id;
                    var4 = _closure2_slot0;
                    var1 = var5 !== var4;
case 30:
                    if(!var1) { _fun0003_ip = 32; continue _fun0003 }
case 33:
                    var4 = _closure1_slot13;
                    var3 = var4.isLocalVideoDisabled;
                    var2 = var2.user;
                    var2 = var2.id;
                    var2 = var3.bind(var4)(var2);
                    var1 = !var2;
case 32:
                    return var1;
                }
            };
            var6 = var8.bind(var9)(var6);
            var9 = var6.map;
            var8 = function(arg1) {
                var1 = arg1;
                var1 = var1.user;
                var1 = var1.id;
                return var1;
            };
            var9 = var9.bind(var6)(var8);
            var8 = global;
            var10 = var8.Date;
            var8 = var10.now;
            var8 = var8.bind(var10)();
            _closure2_slot1 = var8;
            var10 = var6.map;
            var8 = function(arg1) {
                var2 = arg1;
                var1 = var2.user;
                var3 = var1.id;
                var1 = new Array(2);
                var1[0] = var3;
                var5 = _closure1_slot14;
                var4 = var5.getSpeakingDuration;
                var2 = var2.user;
                var3 = var2.id;
                var2 = _closure2_slot1;
                var2 = var4.bind(var5)(var3, var2);
                var1[1] = var2;
                return var1;
            };
            var11 = var10.bind(var6)(var8);
            var10 = var11.filter;
            var8 = function(arg1) {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                    var4 = arg1;
                    var1 = var4[Symbol.iterator];
                    var4 = var1().next;
                    var2 = var4().value;
                    var2 = var1;
                    var6 = undefined;
                    var3 = var2 === var6;
                    var2 = undefined;
                    if(var3) { _fun0004_ip = 30; continue _fun0004 }
case 34:
                    var5 = var4().value;
                    var4 = var1;
                    var4 = var4 === var6;
                    var2 = undefined;
                    var3 = var4;
                    if(var4) { _fun0004_ip = 30; continue _fun0004 }
case 35:
                    var2 = var5;
                    var3 = var4;
case 30:
                    if(var3) { _fun0004_ip = 36; continue _fun0004 }
case 33:
                    var1.return();
case 36:
                    var1 = 0;
                    var1 = var1 !== var2;
                    return var1;
                }
            };
            var10 = var10.bind(var11)(var8);
            var8 = var10.maxBy;
            var5 = function(arg1) {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                    var4 = arg1;
                    var2 = var4[Symbol.iterator];
                    var4 = var2().next;
                    var1 = var4().value;
                    var1 = var2;
                    var6 = undefined;
                    var3 = var1 === var6;
                    var1 = undefined;
                    if(var3) { _fun0005_ip = 30; continue _fun0005 }
case 34:
                    var5 = var4().value;
                    var4 = var2;
                    var4 = var4 === var6;
                    var1 = undefined;
                    var3 = var4;
                    if(var4) { _fun0005_ip = 30; continue _fun0005 }
case 35:
                    var1 = var5;
                    var3 = var4;
case 30:
                    if(var3) { _fun0005_ip = 36; continue _fun0005 }
case 33:
                    var2.return();
case 36:
                    var1 = -var1;
                    return var1;
                }
            };
            var10 = var8.bind(var10)(var5);
            var8 = var7 == var10;
            var5 = undefined;
            if(var8) { _fun0002_ip = 37; continue _fun0002 }
case 38:
            var8 = 0;
            var5 = var10[var8];
case 37:
            var4 = var5;
            if(!(var7 == var4)) { _fun0002_ip = 8; continue _fun0002 }
case 39:
            var5 = _closure1_slot4;
            if(!(var7 != var5)) { _fun0002_ip = 40; continue _fun0002 }
case 41:
            var8 = var9.has;
            var5 = _closure1_slot4;
            var5 = var8.bind(var9)(var5);
            if(var5) { _fun0002_ip = 42; continue _fun0002 }
case 40:
            var5 = var6.first;
            var6 = var5.bind(var6)();
            var8 = var7 == var6;
            var5 = undefined;
            if(var8) { _fun0002_ip = 43; continue _fun0002 }
case 44:
            var6 = var6.user;
            var7 = var7 == var6;
            var5 = undefined;
            if(var7) { _fun0002_ip = 43; continue _fun0002 }
case 45:
            var5 = var6.id;
case 43:
            var4 = var5;
            _fun0002_ip = 8; continue _fun0002;
case 42:
            var4 = _closure1_slot4;
case 8:
            var5 = _closure1_slot4;
            if(!(var5 !== var4)) { _fun0002_ip = 46; continue _fun0002 }
case 47:
            var _closure1_slot4 = var4;
            if(!var3) { _fun0002_ip = 46; continue _fun0002 }
case 48:
            var3 = _closure1_slot17;
            var2 = var3.emitChange;
            var2 = var2.bind(var3)();
case 46:
            return var1;
        }
    };
    var _closure1_slot19 = var11;
    var7 = function handleChannelRTCUpdate() {
        var2 = _closure1_slot16;
        var1 = undefined;
        var1 = var2.bind(var1)();
        var1 = false;
        return var1;
    };
    var _closure1_slot20 = var7;
    var1 = global;
    var10 = var1.Object;
    var9 = var10.defineProperty;
    var2 = {};
    var1 = true;
    var2['value'] = var1;
    var1 = '__esModule';
    var1 = var9.bind(var10)(var3, var1, var2);
    var1 = 0;
    var2 = var6[var1];
    var1 = undefined;
    var2 = var8.bind(var1)(var2);
    var _closure1_slot5 = var2;
    var2 = 1;
    var2 = var6[var2];
    var2 = var8.bind(var1)(var2);
    var _closure1_slot6 = var2;
    var2 = 2;
    var2 = var6[var2];
    var2 = var8.bind(var1)(var2);
    var _closure1_slot7 = var2;
    var2 = 3;
    var2 = var6[var2];
    var2 = var8.bind(var1)(var2);
    var _closure1_slot8 = var2;
    var2 = 4;
    var2 = var6[var2];
    var2 = var8.bind(var1)(var2);
    var _closure1_slot9 = var2;
    var2 = 5;
    var2 = var6[var2];
    var2 = var8.bind(var1)(var2);
    var _closure1_slot10 = var2;
    var2 = 6;
    var2 = var6[var2];
    var2 = var8.bind(var1)(var2);
    var _closure1_slot11 = var2;
    var2 = 7;
    var2 = var6[var2];
    var2 = var8.bind(var1)(var2);
    var _closure1_slot12 = var2;
    var2 = 8;
    var2 = var6[var2];
    var2 = var8.bind(var1)(var2);
    var _closure1_slot13 = var2;
    var2 = 9;
    var2 = var6[var2];
    var2 = var8.bind(var1)(var2);
    var _closure1_slot14 = var2;
    var2 = 10;
    var2 = var6[var2];
    var2 = var5.bind(var1)(var2);
    var2 = var2.ParticipantTypes;
    var _closure1_slot15 = var2;
    var2 = 12;
    var2 = var6[var2];
    var10 = var8.bind(var1)(var2);
    var9 = var10.debounce;
    var2 = 300;
    var2 = var9.bind(var10)(var11, var2);
    var _closure1_slot16 = var2;
    var2 = 13;
    var2 = var6[var2];
    var2 = var8.bind(var1)(var2);
    var9 = var2.Store;
    var2 = function(arg1) {
        var4 = function VideoSpeakerStoreClass() {
            _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                var4 = this;
                var3 = undefined;
                var5 = undefined;
                var1 = _closure1_slot5;
                var2 = _closure2_slot0;
                var1 = var1.bind(var3)(var4, var2);
                var1 = _closure1_slot8;
                var9 = var1.bind(var3)(var2);
                var2 = _closure1_slot7;
                var1 = _closure1_slot18;
                var1 = var1.bind(var3)();
                if(var1) { _fun0006_ip = 49; continue _fun0006 }
case 50:
                var7 = var9.apply;
                var5 = arguments;
                var1 = var5;
                var1 = var7.bind(var9)(var4, var1);
                _fun0006_ip = 51; continue _fun0006;
case 49:
                var7 = global;
                var8 = var7.Reflect;
                var7 = var8.construct;
                var6 = _closure1_slot8;
                var6 = var6.bind(var3)(var4);
                var6 = var6.constructor;
                var5 = arguments;
                var1 = var7.bind(var8)(var9, var5, var6);
case 51:
                var1 = var2.bind(var3)(var4, var1);
                return var1;
            }
        };
        var _closure2_slot0 = var4;
        var5 = _closure1_slot9;
        var3 = undefined;
        var2 = arg1;
        var2 = var5.bind(var3)(var4, var2);
        var2 = _closure1_slot6;
        var5 = {};
        var1 = 'initialize';
        var5['key'] = var1;
        var1 = function value() {
            var4 = this;
            var8 = var4.waitFor;
            var13 = _closure1_slot10;
            var12 = _closure1_slot12;
            var11 = _closure1_slot14;
            var10 = _closure1_slot11;
            var9 = _closure1_slot13;
            var14 = var4;
            var2 = var14[var8](var13, var12, var11, var10, var9, var8);
            var3 = var4.syncWith;
            var5 = _closure1_slot10;
            var2 = new Array(2);
            var2[0] = var5;
            var5 = _closure1_slot11;
            var2[1] = var5;
            var1 = _closure1_slot20;
            var1 = var3.bind(var4)(var2, var1);
            var1 = undefined;
            return var1;
        };
        var5['value'] = var1;
        var1 = new Array(2);
        var1[0] = var5;
        var5 = {};
        var7 = 'getSpeaker';
        var5['key'] = var7;
        var6 = function value(arg1) {
            _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                var1 = arg1;
                var3 = _closure1_slot3;
                if(!(var3 !== var1)) { _fun0007_ip = 52; continue _fun0007 }
case 53:
                var _closure1_slot3 = var1;
                var4 = _closure1_slot19;
                var3 = undefined;
                var1 = false;
                var1 = var4.bind(var3)(var1);
case 52:
                var3 = _closure1_slot4;
                var1 = null;
                if(!(var1 == var3)) { _fun0007_ip = 54; continue _fun0007 }
case 55:
                var3 = _closure1_slot12;
                var1 = var3.getId;
                var1 = var1.bind(var3)();
                _fun0007_ip = 56; continue _fun0007;
case 54:
                var1 = _closure1_slot4;
case 56:
                return var1;
            }
        };
        var5['value'] = var6;
        var1[1] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var9 = var2.bind(var1)(var9);
    var2 = 'VideoSpeakerStore';
    var9['displayName'] = var2;
    var2 = 14;
    var2 = var6[var2];
    var14 = var8.bind(var1)(var2);
    var2 = {};
    var2['AUDIO_SET_LOCAL_VIDEO_DISABLED'] = var7;
    var7 = var9.prototype;
    var7 = Object.create(var7, {constructor: {value: var9}});
    var15 = var7;
    var13 = var2;
    var2 = new var15[var9](var14, var13, var12);
    var2 = var2 instanceof Object ? var2 : var7;
    var _closure1_slot17 = var2;
    var4 = 15;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'stores/VideoSpeakerStore.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();