// app/modules/calls/VideoSpeakerStore.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var8 = metroImportDefault;
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
            _closure1_slot17 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot17 = var1;
    var1 = function _createForOfIteratorHelperLoose(arg1, arg2) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var3 = arg1;
            var _closure2_slot0 = var3;
            var5 = global;
            var2 = var5.Symbol;
            var4 = 'undefined';
            var2 = typeof var2;
            var2 = var4 !== var2;
            if(!var2) { _fun0002_ip = 6; continue _fun0002 }
case 7:
            var4 = var5.Symbol;
            var4 = var4.iterator;
            var2 = var3[var4];
case 6:
            if(var2) { _fun0002_ip = 8; continue _fun0002 }
case 9:
            var2 = var3["@@iterator"];
case 8:
            if(var2) { _fun0002_ip = 10; continue _fun0002 }
case 11:
            var6 = var5.Array;
            var4 = var6.isArray;
            var6 = var4.bind(var6)(var3);
            var4 = var2;
            if(var6) { _fun0002_ip = 12; continue _fun0002 }
case 13:
            var8 = undefined;
            var6 = undefined;
            if(!var3) { _fun0002_ip = 14; continue _fun0002 }
case 15:
            var9 = 'string';
            var7 = typeof var3;
            if(!(var9 !== var7)) { _fun0002_ip = 16; continue _fun0002 }
case 17:
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
            if(!var7) { _fun0002_ip = 18; continue _fun0002 }
case 19:
            var7 = var3.constructor;
case 18:
            var10 = var9;
            if(!var7) { _fun0002_ip = 20; continue _fun0002 }
case 21:
            var7 = var3.constructor;
            var10 = var7.name;
case 20:
            var7 = 'Map';
            if(!(var7 !== var10)) { _fun0002_ip = 22; continue _fun0002 }
case 23:
            var7 = 'Set';
            if(!(var7 !== var10)) { _fun0002_ip = 22; continue _fun0002 }
case 24:
            var7 = 'Arguments';
            if(!(var7 !== var10)) { _fun0002_ip = 25; continue _fun0002 }
case 26:
            var9 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
            var7 = var9.test;
            var9 = var7.bind(var9)(var10);
            var7 = undefined;
            if(!var9) { _fun0002_ip = 27; continue _fun0002 }
case 25:
            var9 = _closure1_slot19;
            var7 = var9.bind(var8)(var3, var8);
case 27:
            _fun0002_ip = 28; continue _fun0002;
case 22:
            var10 = var5.Array;
            var9 = var10.from;
            var7 = var9.bind(var10)(var3);
case 28:
            var6 = var7;
            _fun0002_ip = 14; continue _fun0002;
case 16:
            var7 = _closure1_slot19;
            var6 = var7.bind(var8)(var3, var8);
case 14:
            var4 = var6;
            if(var4) { _fun0002_ip = 12; continue _fun0002 }
case 29:
            var7 = var5.TypeError;
            var5 = var7.prototype;
            var6 = Object.create(var5, {constructor: {value: var7}});
            var13 = 'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.';
            var14 = var6;
            var5 = new var14[var7](var13, var12);
            var5 = var5 instanceof Object ? var5 : var6;
            throw var5;
case 12:
            if(!var4) { _fun0002_ip = 30; continue _fun0002 }
case 31:
            _closure2_slot0 = var4;
case 30:
            var4 = 0;
            var _closure2_slot1 = var4;
            var1 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var2 = _closure2_slot1;
                    var1 = _closure2_slot0;
                    var1 = var1.length;
                    if(!(!(var2 >= var1))) { _fun0003_ip = 32; continue _fun0003 }
case 33:
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
                    _fun0003_ip = 34; continue _fun0003;
case 32:
                    var2 = {};
                    var3 = true;
                    var2['done'] = var3;
                    var1 = var2;
case 34:
                    return var1;
                }
            };
            return var1;
case 10:
            var1 = var2.call;
            var3 = var1.bind(var2)(var3);
            var2 = var3.next;
            var1 = var2.bind;
            var1 = var1.bind(var2)(var3);
            return var1;
        }
    };
    var _closure1_slot18 = var1;
    var1 = function _arrayLikeToArray(arg1, arg2) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var4 = arg1;
            var1 = null;
            var3 = undefined;
            var1 = var1 == var3;
            if(var1) { _fun0004_ip = 35; continue _fun0004 }
case 36:
            var2 = var4.length;
            var1 = var3 > var2;
case 35:
            var2 = undefined;
            if(!var1) { _fun0004_ip = 37; continue _fun0004 }
case 38:
            var2 = var4.length;
case 37:
            var1 = global;
            var1 = var1.Array;
            var1 = var1.bind(var3)(var2);
            var3 = 0;
            var5 = var3 < var2;
            if(!var5) { _fun0004_ip = 3; continue _fun0004 }
case 8:
            var5 = var4[var3];
            var1[var3] = var5;
            var3 = var3 + 1;
            if(var3 < var2) { _fun0004_ip = 8; continue _fun0004 }
case 3:
            return var1;
        }
    };
    var _closure1_slot19 = var1;
    var12 = function updateSpeaker() {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
            var3 = arguments[0];
            var1 = undefined;
            if(!(var3 === var1)) { _fun0005_ip = 39; continue _fun0005 }
case 40:
            var3 = true;
case 39:
            var4 = _closure1_slot2;
            var8 = null;
            var5 = var8 == var4;
            var4 = null;
            if(var5) { _fun0005_ip = 41; continue _fun0005 }
case 42:
            var7 = _closure1_slot13;
            var6 = var7.getSelectedParticipantId;
            var5 = _closure1_slot2;
            var6 = var6.bind(var7)(var5);
            var5 = var8 != var6;
            if(!var5) { _fun0005_ip = 43; continue _fun0005 }
case 44:
            var10 = _closure1_slot13;
            var9 = var10.isParticipantPoppedOut;
            var7 = _closure1_slot2;
            var5 = var9.bind(var10)(var7, var6);
case 43:
            if(!var5) { _fun0005_ip = 45; continue _fun0005 }
case 46:
            var6 = null;
case 45:
            var7 = _closure1_slot9;
            var5 = var7.getLastActiveStream;
            var13 = var5.bind(var7)();
            var5 = var8 != var6;
            var9 = null;
            if(!var5) { _fun0005_ip = 47; continue _fun0005 }
case 48:
            var10 = _closure1_slot13;
            var7 = var10.getParticipant;
            var5 = _closure1_slot2;
            var9 = var7.bind(var10)(var5, var6);
case 47:
            var5 = var8 == var9;
            var7 = undefined;
            if(var5) { _fun0005_ip = 49; continue _fun0005 }
case 50:
            var7 = var9.type;
case 49:
            var5 = _closure1_slot14;
            var5 = var5.ACTIVITY;
            var5 = var7 !== var5;
            if(!var5) { _fun0005_ip = 51; continue _fun0005 }
case 52:
            var7 = var8 == var9;
            var10 = undefined;
            if(var7) { _fun0005_ip = 53; continue _fun0005 }
case 54:
            var10 = var9.type;
case 53:
            var7 = _closure1_slot14;
            var7 = var7.USER;
            var7 = var10 !== var7;
            if(var7) { _fun0005_ip = 55; continue _fun0005 }
case 56:
            var10 = var9.voiceState;
            var9 = var8 != var10;
            if(!var9) { _fun0005_ip = 57; continue _fun0005 }
case 58:
            var9 = var10.selfVideo;
case 57:
            var7 = var9;
case 55:
            var5 = var7;
case 51:
            var9 = var6;
            if(var5) { _fun0005_ip = 59; continue _fun0005 }
case 60:
            var9 = null;
case 59:
            var5 = var9;
            if(!(var8 != var13)) { _fun0005_ip = 61; continue _fun0005 }
case 62:
            var5 = var9;
            if(!(var8 == var9)) { _fun0005_ip = 61; continue _fun0005 }
case 63:
            var11 = _closure1_slot13;
            var10 = var11.getParticipant;
            var7 = _closure1_slot2;
            var12 = _closure1_slot0;
            var14 = _closure1_slot1;
            var6 = 11;
            var6 = var14[var6];
            var12 = var12.bind(var1)(var6);
            var6 = var12.encodeStreamKey;
            var6 = var6.bind(var12)(var13);
            var7 = var10.bind(var11)(var7, var6);
            var10 = var8 == var7;
            var6 = undefined;
            if(var10) { _fun0005_ip = 64; continue _fun0005 }
case 65:
            var6 = var7.id;
case 64:
            var7 = var8 == var6;
            if(var7) { _fun0005_ip = 66; continue _fun0005 }
case 67:
            var12 = _closure1_slot13;
            var11 = var12.isParticipantPoppedOut;
            var10 = _closure1_slot2;
            var7 = var11.bind(var12)(var10, var6);
case 66:
            var5 = var9;
            if(var7) { _fun0005_ip = 61; continue _fun0005 }
case 68:
            var5 = var6;
case 61:
            var4 = var5;
            if(!(var8 == var4)) { _fun0005_ip = 41; continue _fun0005 }
case 69:
            var6 = _closure1_slot10;
            var5 = var6.getId;
            var14 = var5.bind(var6)();
            var5 = global;
            var6 = var5.Date;
            var5 = var6.now;
            var12 = var5.bind(var6)();
            var6 = new Array(0);
            var13 = new Array(0);
            var7 = _closure1_slot18;
            var10 = _closure1_slot13;
            var9 = var10.getVideoParticipants;
            var5 = _closure1_slot2;
            var5 = var9.bind(var10)(var5);
            var11 = var7.bind(var1)(var5);
            var9 = var11.bind(var1)();
            var7 = var9.done;
            var5 = 0;
            var10 = var9;
            var9 = undefined;
            if(var7) { _fun0005_ip = 70; continue _fun0005 }
case 71:
            var18 = var10.value;
            var7 = var18.user;
            var7 = var7.id;
            var15 = var9;
            if(!(var7 !== var14)) { _fun0005_ip = 72; continue _fun0005 }
case 73:
            var17 = _closure1_slot11;
            var16 = var17.isLocalVideoDisabled;
            var7 = var18.user;
            var7 = var7.id;
            var7 = var16.bind(var17)(var7);
            var15 = var9;
            if(var7) { _fun0005_ip = 72; continue _fun0005 }
case 74:
            var19 = _closure1_slot13;
            var17 = var19.isParticipantPoppedOut;
            var16 = _closure1_slot2;
            var7 = var18.id;
            var7 = var17.bind(var19)(var16, var7);
            var15 = var9;
            if(var7) { _fun0005_ip = 72; continue _fun0005 }
case 75:
            var16 = var6.push;
            var7 = var18.user;
            var7 = var7.id;
            var7 = var16.bind(var6)(var7);
            var17 = _closure1_slot12;
            var16 = var17.getSpeakingDuration;
            var7 = var18.user;
            var7 = var7.id;
            var7 = var16.bind(var17)(var7, var12);
            var15 = var7;
            if(!(var5 !== var7)) { _fun0005_ip = 72; continue _fun0005 }
case 76:
            var17 = var13.push;
            var16 = {};
            var18 = var18.user;
            var18 = var18.id;
            var16['userId'] = var18;
            var16['duration'] = var7;
            var16 = var17.bind(var13)(var16);
            var15 = var7;
case 72:
            var16 = var11.bind(var1)();
            var7 = var16.done;
            var9 = var15;
            var10 = var16;
            if(!var7) { _fun0005_ip = 71; continue _fun0005 }
case 70:
            var7 = var13.length;
            var9 = var5 < var7;
            var12 = undefined;
            var11 = undefined;
            var10 = 0;
            var7 = undefined;
            if(!var9) { _fun0005_ip = 77; continue _fun0005 }
case 78:
            var9 = var13[var10];
            var14 = var9.userId;
            var9 = var9.duration;
            var15 = var8 == var11;
            if(var15) { _fun0005_ip = 79; continue _fun0005 }
case 80:
            var15 = var9 < var11;
case 79:
            if(!var15) { _fun0005_ip = 81; continue _fun0005 }
case 82:
            var12 = var14;
            var11 = var9;
case 81:
            var10 = var10 + 1;
            var9 = var13.length;
            var7 = var12;
            if(var10 < var9) { _fun0005_ip = 78; continue _fun0005 }
case 77:
            var4 = var7;
            if(!(var8 == var4)) { _fun0005_ip = 41; continue _fun0005 }
case 83:
            var7 = _closure1_slot3;
            if(!(var8 != var7)) { _fun0005_ip = 84; continue _fun0005 }
case 85:
            var8 = var6.includes;
            var7 = _closure1_slot3;
            var7 = var8.bind(var6)(var7);
            if(var7) { _fun0005_ip = 86; continue _fun0005 }
case 84:
            var5 = var6[var5];
            _fun0005_ip = 87; continue _fun0005;
case 86:
            var5 = _closure1_slot3;
case 87:
            var4 = var5;
case 41:
            var5 = _closure1_slot3;
            if(!(var5 !== var4)) { _fun0005_ip = 88; continue _fun0005 }
case 89:
            var _closure1_slot3 = var4;
            if(!var3) { _fun0005_ip = 88; continue _fun0005 }
case 90:
            var3 = _closure1_slot16;
            var2 = var3.emitChange;
            var2 = var2.bind(var3)();
case 88:
            return var1;
        }
    };
    var _closure1_slot20 = var12;
    var7 = function handleChannelRTCUpdate() {
        var2 = _closure1_slot15;
        var1 = undefined;
        var1 = var2.bind(var1)();
        var1 = false;
        return var1;
    };
    var _closure1_slot21 = var7;
    var1 = global;
    var11 = var1.Object;
    var10 = var11.defineProperty;
    var9 = {};
    var2 = true;
    var9['value'] = var2;
    var1 = '__esModule';
    var1 = var10.bind(var11)(var3, var1, var9);
    var1 = 0;
    var9 = var6[var1];
    var1 = undefined;
    var9 = var8.bind(var1)(var9);
    var _closure1_slot4 = var9;
    var9 = 1;
    var9 = var6[var9];
    var9 = var8.bind(var1)(var9);
    var _closure1_slot5 = var9;
    var9 = 2;
    var9 = var6[var9];
    var9 = var8.bind(var1)(var9);
    var _closure1_slot6 = var9;
    var9 = 3;
    var9 = var6[var9];
    var9 = var8.bind(var1)(var9);
    var _closure1_slot7 = var9;
    var9 = 4;
    var9 = var6[var9];
    var9 = var8.bind(var1)(var9);
    var _closure1_slot8 = var9;
    var9 = 5;
    var9 = var6[var9];
    var9 = var8.bind(var1)(var9);
    var _closure1_slot9 = var9;
    var9 = 6;
    var9 = var6[var9];
    var9 = var8.bind(var1)(var9);
    var _closure1_slot10 = var9;
    var9 = 7;
    var9 = var6[var9];
    var9 = var8.bind(var1)(var9);
    var _closure1_slot11 = var9;
    var9 = 8;
    var9 = var6[var9];
    var9 = var8.bind(var1)(var9);
    var _closure1_slot12 = var9;
    var9 = 9;
    var9 = var6[var9];
    var9 = var8.bind(var1)(var9);
    var _closure1_slot13 = var9;
    var9 = 10;
    var9 = var6[var9];
    var9 = var5.bind(var1)(var9);
    var9 = var9.ParticipantTypes;
    var _closure1_slot14 = var9;
    var9 = 12;
    var9 = var6[var9];
    var11 = var8.bind(var1)(var9);
    var10 = var11.throttle;
    var9 = {};
    var9['trailing'] = var2;
    var2 = 300;
    var2 = var10.bind(var11)(var12, var2, var9);
    var _closure1_slot15 = var2;
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
                var1 = _closure1_slot4;
                var2 = _closure2_slot0;
                var1 = var1.bind(var3)(var4, var2);
                var1 = _closure1_slot7;
                var9 = var1.bind(var3)(var2);
                var2 = _closure1_slot6;
                var1 = _closure1_slot17;
                var1 = var1.bind(var3)();
                if(var1) { _fun0006_ip = 91; continue _fun0006 }
case 92:
                var7 = var9.apply;
                var5 = arguments;
                var1 = var5;
                var1 = var7.bind(var9)(var4, var1);
                _fun0006_ip = 93; continue _fun0006;
case 91:
                var7 = global;
                var8 = var7.Reflect;
                var7 = var8.construct;
                var6 = _closure1_slot7;
                var6 = var6.bind(var3)(var4);
                var6 = var6.constructor;
                var5 = arguments;
                var1 = var7.bind(var8)(var9, var5, var6);
case 93:
                var1 = var2.bind(var3)(var4, var1);
                return var1;
            }
        };
        var _closure2_slot0 = var4;
        var5 = _closure1_slot8;
        var3 = undefined;
        var2 = arg1;
        var2 = var5.bind(var3)(var4, var2);
        var2 = _closure1_slot5;
        var5 = {};
        var1 = 'initialize';
        var5['key'] = var1;
        var1 = function value() {
            var4 = this;
            var8 = var4.waitFor;
            var13 = _closure1_slot13;
            var12 = _closure1_slot10;
            var11 = _closure1_slot12;
            var10 = _closure1_slot9;
            var9 = _closure1_slot11;
            var14 = var4;
            var2 = var14[var8](var13, var12, var11, var10, var9, var8);
            var3 = var4.syncWith;
            var5 = _closure1_slot13;
            var2 = new Array(2);
            var2[0] = var5;
            var5 = _closure1_slot9;
            var2[1] = var5;
            var1 = _closure1_slot21;
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
                var3 = _closure1_slot2;
                if(!(var3 !== var1)) { _fun0007_ip = 94; continue _fun0007 }
case 36:
                var _closure1_slot2 = var1;
                var1 = null;
                _closure1_slot3 = var1;
                var4 = _closure1_slot20;
                var3 = undefined;
                var1 = false;
                var1 = var4.bind(var3)(var1);
case 94:
                var3 = _closure1_slot3;
                var1 = null;
                if(!(var1 == var3)) { _fun0007_ip = 95; continue _fun0007 }
case 96:
                var3 = _closure1_slot10;
                var1 = var3.getId;
                var1 = var1.bind(var3)();
                _fun0007_ip = 34; continue _fun0007;
case 95:
                var1 = _closure1_slot3;
case 34:
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
    var15 = var8.bind(var1)(var2);
    var2 = {};
    var2['AUDIO_SET_LOCAL_VIDEO_DISABLED'] = var7;
    var7 = var9.prototype;
    var7 = Object.create(var7, {constructor: {value: var9}});
    var16 = var7;
    var14 = var2;
    var2 = new var16[var9](var15, var14, var13);
    var2 = var2 instanceof Object ? var2 : var7;
    var _closure1_slot16 = var2;
    var4 = 15;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/calls/VideoSpeakerStore.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();