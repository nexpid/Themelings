// app/modules/voice_panel/native/header/VoicePanelHeaderSpeaker.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var8 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var8;
    var _closure1_slot2 = var6;
    var1 = function _createForOfIteratorHelperLoose(arg1, arg2) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var3 = arg1;
            var _closure2_slot0 = var3;
            var5 = global;
            var2 = var5.Symbol;
            var4 = 'undefined';
            var2 = typeof var2;
            var2 = var4 !== var2;
            if(!var2) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var4 = var5.Symbol;
            var4 = var4.iterator;
            var2 = var3[var4];
case 2:
            if(var2) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var2 = var3.@@iterator;
case 4:
            if(var2) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var6 = var5.Array;
            var4 = var6.isArray;
            var6 = var4.bind(var6)(var3);
            var4 = var2;
            if(var6) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var8 = undefined;
            var6 = undefined;
            if(!var3) { _fun0001_ip = 10; continue _fun0001 }
case 11:
            var9 = 'string';
            var7 = typeof var3;
            if(!(var9 !== var7)) { _fun0001_ip = 12; continue _fun0001 }
case 13:
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
            if(!var7) { _fun0001_ip = 14; continue _fun0001 }
case 15:
            var7 = var3.constructor;
case 14:
            var10 = var9;
            if(!var7) { _fun0001_ip = 16; continue _fun0001 }
case 17:
            var7 = var3.constructor;
            var10 = var7.name;
case 16:
            var7 = 'Map';
            if(!(var7 !== var10)) { _fun0001_ip = 18; continue _fun0001 }
case 19:
            var7 = 'Set';
            if(!(var7 !== var10)) { _fun0001_ip = 18; continue _fun0001 }
case 20:
            var7 = 'Arguments';
            if(!(var7 !== var10)) { _fun0001_ip = 21; continue _fun0001 }
case 22:
            var9 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
            var7 = var9.test;
            var9 = var7.bind(var9)(var10);
            var7 = undefined;
            if(!var9) { _fun0001_ip = 23; continue _fun0001 }
case 21:
            var9 = _closure1_slot20;
            var7 = var9.bind(var8)(var3, var8);
case 23:
            _fun0001_ip = 24; continue _fun0001;
case 18:
            var10 = var5.Array;
            var9 = var10.from;
            var7 = var9.bind(var10)(var3);
case 24:
            var6 = var7;
            _fun0001_ip = 10; continue _fun0001;
case 12:
            var7 = _closure1_slot20;
            var6 = var7.bind(var8)(var3, var8);
case 10:
            var4 = var6;
            if(var4) { _fun0001_ip = 8; continue _fun0001 }
case 25:
            var7 = var5.TypeError;
            var5 = var7.prototype;
            var6 = Object.create(var5, {constructor: {value: var7}});
            var13 = 'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.';
            var14 = var6;
            var5 = new var14[var7](var13, var12);
            var5 = var5 instanceof Object ? var5 : var6;
            throw var5;
case 8:
            if(!var4) { _fun0001_ip = 26; continue _fun0001 }
case 27:
            _closure2_slot0 = var4;
case 26:
            var4 = 0;
            var _closure2_slot1 = var4;
            var1 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var2 = _closure2_slot1;
                    var1 = _closure2_slot0;
                    var1 = var1.length;
                    if(!(!(var2 >= var1))) { _fun0002_ip = 28; continue _fun0002 }
case 29:
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
                    _fun0002_ip = 30; continue _fun0002;
case 28:
                    var2 = {};
                    var3 = true;
                    var2['done'] = var3;
                    var1 = var2;
case 30:
                    return var1;
                }
            };
            return var1;
case 6:
            var1 = var2.call;
            var3 = var1.bind(var2)(var3);
            var2 = var3.next;
            var1 = var2.bind;
            var1 = var1.bind(var2)(var3);
            return var1;
        }
    };
    var _closure1_slot19 = var1;
    var1 = function _arrayLikeToArray(arg1, arg2) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var4 = arg1;
            var1 = null;
            var3 = undefined;
            var1 = var1 == var3;
            if(var1) { _fun0003_ip = 31; continue _fun0003 }
case 32:
            var2 = var4.length;
            var1 = var3 > var2;
case 31:
            var2 = undefined;
            if(!var1) { _fun0003_ip = 33; continue _fun0003 }
case 34:
            var2 = var4.length;
case 33:
            var1 = global;
            var1 = var1.Array;
            var1 = var1.bind(var3)(var2);
            var3 = 0;
            var5 = var3 < var2;
            if(!var5) { _fun0003_ip = 35; continue _fun0003 }
case 4:
            var5 = var4[var3];
            var1[var3] = var5;
            var3 = var3 + 1;
            if(var3 < var2) { _fun0003_ip = 4; continue _fun0003 }
case 35:
            return var1;
        }
    };
    var _closure1_slot20 = var1;
    var1 = ['ref'];
    var _closure1_slot3 = var1;
    var1 = global;
    var9 = var1.Object;
    var7 = var9.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var9)(var3, var1, var4);
    var1 = 0;
    var4 = var6[var1];
    var1 = undefined;
    var4 = var8.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 1;
    var7 = var6[var4];
    var4 = metroImportAll;
    var7 = var4.bind(var1)(var7);
    var _closure1_slot5 = var7;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.NativeModules;
    var _closure1_slot6 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.setVoiceUpsellDismissed;
    var _closure1_slot7 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var8.bind(var1)(var4);
    var _closure1_slot8 = var4;
    var4 = 5;
    var9 = var6[var4];
    var9 = var8.bind(var1)(var9);
    var _closure1_slot9 = var9;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.RouteTypes;
    var _closure1_slot10 = var4;
    var4 = 6;
    var4 = var6[var4];
    var4 = var8.bind(var1)(var4);
    var _closure1_slot11 = var4;
    var4 = 7;
    var4 = var6[var4];
    var4 = var8.bind(var1)(var4);
    var _closure1_slot12 = var4;
    var4 = 8;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.PlatformTypes;
    var _closure1_slot13 = var4;
    var4 = 9;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var8 = var4.jsx;
    var _closure1_slot14 = var8;
    var8 = var4.Fragment;
    var _closure1_slot15 = var8;
    var4 = var4.jsxs;
    var _closure1_slot16 = var4;
    var4 = new Array(0);
    var _closure1_slot17 = var4;
    var8 = var7.memo;
    var4 = function(arg1) {
        var1 = arg1;
        var4 = var1.targetRef;
        var3 = var1.canShowTooltip;
        var5 = _closure1_slot1;
        var2 = _closure1_slot2;
        var1 = 10;
        var1 = var2[var1];
        var2 = undefined;
        var1 = var5.bind(var2)(var1);
        var1 = var1.bind(var2)(var4, var3);
        var1 = null;
        return var1;
    };
    var4 = var8.bind(var7)(var4);
    var _closure1_slot18 = var4;
    var4 = var7.memo;
    var2 = function VoicePanelHeaderSpeaker(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var1 = arg1;
            var14 = var1.isConnectedToVoiceChannel;
            var _closure2_slot0 = var14;
            var12 = var1.channelId;
            var _closure2_slot1 = var12;
            var1 = var1.style;
            var _closure2_slot2 = var1;
            var3 = undefined;
            var _closure2_slot5 = var3;
            var _closure2_slot6 = var3;
            var _closure2_slot9 = var3;
            var _closure2_slot11 = var3;
            var _closure2_slot13 = var3;
            var _closure2_slot14 = var3;
            var _closure2_slot15 = var3;
            var _closure2_slot16 = var3;
            var2 = function renderButton(arg1) {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                    var3 = arg1;
                    var14 = null;
                    if(!(var14 == var3)) { _fun0005_ip = 36; continue _fun0005 }
case 37:
                    var1 = {};
                    var2 = _closure2_slot14;
                    var1['onPress'] = var2;
                    var2 = undefined;
                    var1['ref'] = var2;
                    var3 = var1;
case 36:
                    var15 = var3.ref;
                    var2 = _closure1_slot4;
                    var1 = _closure1_slot3;
                    var4 = undefined;
                    var13 = var2.bind(var4)(var3, var1);
                    var3 = _closure1_slot16;
                    var2 = _closure1_slot15;
                    var1 = {};
                    var7 = _closure1_slot14;
                    var6 = _closure1_slot18;
                    var5 = {};
                    var8 = _closure2_slot16;
                    var5['targetRef'] = var8;
                    var8 = _closure2_slot13;
                    if(!var8) { _fun0005_ip = 38; continue _fun0005 }
case 39:
                    var8 = _closure2_slot0;
case 38:
                    var5['canShowTooltip'] = var8;
                    var6 = var7.bind(var4)(var6, var5);
                    var5 = new Array(2);
                    var5[0] = var6;
                    var8 = _closure1_slot14;
                    var10 = _closure1_slot1;
                    var16 = _closure1_slot2;
                    var6 = 28;
                    var6 = var16[var6];
                    var7 = var10.bind(var4)(var6);
                    var6 = {};
                    var9 = _closure2_slot2;
                    var6['style'] = var9;
                    var9 = _closure2_slot16;
                    var6['ref'] = var9;
                    var9 = 29;
                    var9 = var16[var9];
                    var10 = var10.bind(var4)(var9);
                    var9 = {};
                    var9['ref'] = var15;
                    var18 = var9;
                    var17 = var13;
                    var13 = copyDataProperties(var18, var17);
                    var13 = _closure2_slot0;
                    var15 = undefined;
                    if(!var13) { _fun0005_ip = 40; continue _fun0005 }
case 41:
                    var13 = _closure2_slot6;
                    var15 = undefined;
                    if(!var13) { _fun0005_ip = 40; continue _fun0005 }
case 22:
                    var15 = 'primary-overlay';
case 40:
                    var13 = 'overrideVariant';
                    var9[var13] = var15;
                    var13 = _closure2_slot9;
                    var15 = var14 != var13;
                    var13 = 'loading';
                    var9[var13] = var15;
                    var13 = _closure2_slot11;
                    if(!(var14 == var13)) { _fun0005_ip = 42; continue _fun0005 }
case 43:
                    var13 = _closure2_slot5;
                    _fun0005_ip = 44; continue _fun0005;
case 42:
                    var13 = _closure2_slot11;
case 44:
                    var12 = 'icon';
                    var9[var12] = var13;
                    var14 = _closure1_slot0;
                    var15 = _closure1_slot2;
                    var11 = 21;
                    var12 = var15[var11];
                    var12 = var14.bind(var4)(var12);
                    var13 = var12.intl;
                    var12 = var13.string;
                    var11 = var15[var11];
                    var11 = var14.bind(var4)(var11);
                    var11 = var11.t;
                    var11 = var11.dnI0AA;
                    var12 = var12.bind(var13)(var11);
                    var11 = 'accessibilityLabel';
                    var9[var11] = var12;
                    var9 = var8.bind(var4)(var10, var9);
                    var6['children'] = var9;
                    var6 = var8.bind(var4)(var7, var6);
                    var5[1] = var6;
                    var1['children'] = var5;
                    var1 = var3.bind(var4)(var2, var1);
                    return var1;
                }
            };
            var9 = _closure1_slot1;
            var13 = _closure1_slot2;
            var1 = 11;
            var1 = var13[var1];
            var1 = var9.bind(var3)(var1);
            var10 = var1.bind(var3)();
            var _closure2_slot3 = var10;
            var8 = _closure1_slot0;
            var1 = 12;
            var1 = var13[var1];
            var4 = var8.bind(var3)(var1);
            var1 = var4.useMaskedSpeakerStates;
            var1 = var1.bind(var4)();
            var6 = var1.toggleAudio;
            var _closure2_slot4 = var6;
            var4 = var1.routeSource;
            _closure2_slot5 = var4;
            var1 = var1.isAudioRouteEnabled;
            _closure2_slot6 = var1;
            var1 = 13;
            var1 = var13[var1];
            var1 = var9.bind(var3)(var1);
            var4 = var1.bind(var3)();
            var _closure2_slot7 = var4;
            var1 = 14;
            var1 = var13[var1];
            var1 = var9.bind(var3)(var1);
            var1 = var1.bind(var3)();
            var _closure2_slot8 = var1;
            var11 = 15;
            var1 = var13[var11];
            var17 = var8.bind(var3)(var1);
            var16 = var17.useStateFromStores;
            var1 = _closure1_slot8;
            var15 = new Array(1);
            var15[0] = var1;
            var1 = function() {
                var2 = _closure1_slot8;
                var1 = var2.getAwaitingRemoteSessionInfo;
                var1 = var1.bind(var2)();
                return var1;
            };
            var17 = var16.bind(var17)(var15, var1);
            _closure2_slot9 = var17;
            var1 = var13[var11];
            var16 = var8.bind(var3)(var1);
            var15 = var16.useStateFromStores;
            var1 = _closure1_slot12;
            var8 = new Array(1);
            var8[0] = var1;
            var1 = function() {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                    var3 = _closure1_slot12;
                    var2 = var3.getSessionById;
                    var4 = _closure2_slot8;
                    var1 = null;
                    var6 = var1 == var4;
                    var4 = undefined;
                    if(var6) { _fun0006_ip = 45; continue _fun0006 }
case 36:
                    var5 = _closure2_slot8;
                    var4 = var5.sessionId;
case 45:
                    var5 = var1 != var4;
                    var1 = '';
                    if(!var5) { _fun0006_ip = 4; continue _fun0006 }
case 46:
                    var1 = var4;
case 4:
                    var1 = var2.bind(var3)(var1);
                    return var1;
                }
            };
            var1 = var15.bind(var16)(var8, var1);
            var _closure2_slot10 = var1;
            var16 = _closure1_slot5;
            var15 = var16.useMemo;
            var8 = new Array(2);
            var8[0] = var17;
            var8[1] = var1;
            var1 = function() {
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                    var2 = _closure2_slot9;
                    var1 = null;
                    var2 = var1 == var2;
                    var4 = undefined;
                    var3 = undefined;
                    if(var2) { _fun0007_ip = 47; continue _fun0007 }
case 29:
                    var2 = _closure2_slot9;
                    var3 = var2.type;
case 47:
                    if(!(var1 == var3)) { _fun0007_ip = 48; continue _fun0007 }
case 33:
                    var2 = _closure2_slot10;
                    var6 = var1 == var2;
                    var2 = undefined;
                    if(var6) { _fun0007_ip = 49; continue _fun0007 }
case 2:
                    var5 = _closure2_slot10;
                    var5 = var5.clientInfo;
                    var6 = var1 == var5;
                    var2 = undefined;
                    if(var6) { _fun0007_ip = 49; continue _fun0007 }
case 50:
                    var2 = var5.os;
case 49:
                    var3 = var2;
case 48:
                    var2 = var1 != var3;
                    var1 = null;
                    if(!var2) { _fun0007_ip = 51; continue _fun0007 }
case 52:
                    var5 = _closure1_slot1;
                    var6 = _closure1_slot2;
                    var2 = 16;
                    var2 = var6[var2];
                    var2 = var5.bind(var4)(var2);
                    var1 = var2.bind(var4)(var3);
case 51:
                    return var1;
                }
            };
            var1 = var15.bind(var16)(var1, var8);
            _closure2_slot11 = var1;
            var1 = 17;
            var1 = var13[var1];
            var1 = var9.bind(var3)(var1);
            var15 = var1.bind(var3)();
            var _closure2_slot12 = var15;
            var8 = var15.length;
            var1 = 0;
            var1 = var8 > var1;
            var8 = 18;
            var8 = var13[var8];
            var8 = var9.bind(var3)(var8);
            var8 = var8.bind(var3)(var12);
            var13 = var8.canConnect;
            var8 = var8.isAtMaxCapacity;
            if(!var13) { _fun0004_ip = 53; continue _fun0004 }
case 54:
            var13 = !var8;
case 53:
            if(!var13) { _fun0004_ip = 55; continue _fun0004 }
case 56:
            var8 = var14;
            if(var14) { _fun0004_ip = 57; continue _fun0004 }
case 58:
            var8 = var1;
case 57:
            var13 = var8;
case 55:
            _closure2_slot13 = var13;
            var8 = _closure1_slot5;
            var16 = var8.useCallback;
            var9 = new Array(3);
            var9[0] = var12;
            var9[1] = var14;
            var9[2] = var6;
            var6 = function() {
                _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var1 = 19;
                    var3 = var3[var1];
                    var1 = undefined;
                    var4 = var4.bind(var1)(var3);
                    var3 = var4.isAndroid;
                    var3 = var3.bind(var4)();
                    if(var3) { _fun0008_ip = 59; continue _fun0008 }
case 60:
                    var5 = _closure2_slot4;
                    var4 = _closure2_slot1;
                    var3 = _closure2_slot0;
                    var3 = var5.bind(var1)(var4, var3);
                    _fun0008_ip = 61; continue _fun0008;
case 59:
                    var3 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var2 = 20;
                    var2 = var4[var2];
                    var5 = var3.bind(var1)(var2);
                    var4 = var5.showAudioOutputSelector;
                    var3 = _closure2_slot1;
                    var2 = _closure2_slot0;
                    var2 = var4.bind(var5)(var3, var2);
case 61:
                    return var1;
                }
            };
            var6 = var16.bind(var8)(var6, var9);
            _closure2_slot14 = var6;
            var9 = _closure1_slot0;
            var6 = _closure1_slot2;
            var6 = var6[var11];
            var16 = var9.bind(var3)(var6);
            var11 = var16.useStateFromStores;
            var6 = _closure1_slot9;
            var9 = new Array(1);
            var9[0] = var6;
            var6 = function() {
                var2 = _closure1_slot9;
                var1 = var2.getCurrentRouteType;
                var1 = var1.bind(var2)();
                return var1;
            };
            var11 = var11.bind(var16)(var9, var6);
            _closure2_slot15 = var11;
            var9 = var8.useMemo;
            var6 = new Array(5);
            var6[0] = var15;
            var6[1] = var12;
            var6[2] = var14;
            var6[3] = var11;
            var6[4] = var4;
            var4 = function() {
                _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                    var3 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var2 = 19;
                    var2 = var5[var2];
                    var7 = undefined;
                    var3 = var3.bind(var7)(var2);
                    var2 = var3.isAndroid;
                    var2 = var2.bind(var3)();
                    if(var2) { _fun0009_ip = 62; continue _fun0009 }
case 63:
                    var2 = _closure2_slot12;
                    var5 = var2.length;
                    var2 = 0;
                    if(!(var2 !== var5)) { _fun0009_ip = 62; continue _fun0009 }
case 64:
                    var2 = new Array(0);
                    var _closure3_slot0 = var2;
                    var5 = _closure2_slot7;
                    if(var5) { _fun0009_ip = 11; continue _fun0009 }
case 65:
                    var8 = _closure2_slot15;
                    var6 = _closure1_slot10;
                    var6 = var6.SPEAKER;
                    var5 = var8 !== var6;
case 11:
                    if(var5) { _fun0009_ip = 40; continue _fun0009 }
case 66:
                    var6 = var2.push;
                    var5 = {};
                    var12 = _closure1_slot0;
                    var10 = _closure1_slot2;
                    var8 = 21;
                    var9 = var10[var8];
                    var9 = var12.bind(var7)(var9);
                    var11 = var9.intl;
                    var9 = var11.string;
                    var8 = var10[var8];
                    var8 = var12.bind(var7)(var8);
                    var8 = var8.t;
                    var8 = var8.gvQIz8;
                    var8 = var9.bind(var11)(var8);
                    var5['label'] = var8;
                    var9 = _closure1_slot1;
                    var8 = 22;
                    var8 = var10[var8];
                    var8 = var9.bind(var7)(var8);
                    var5['iconSource'] = var8;
                    var8 = false;
                    var5['showIconFirst'] = var8;
                    var8 = function action() {
                        _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
                            var1 = _closure1_slot6;
                            var4 = var1.AudioRoutePicker;
                            var1 = null;
                            var2 = var1 == var4;
                            var1 = undefined;
                            if(var2) { _fun0010_ip = 60; continue _fun0010 }
case 67:
                            var3 = var4.toggleSpeaker;
                            var2 = false;
                            var1 = var3.bind(var4)(var2);
case 60:
                            return var1;
                        }
                    };
                    var5['action'] = var8;
                    var5 = var6.bind(var2)(var5);
case 40:
                    var5 = _closure2_slot7;
                    if(var5) { _fun0009_ip = 68; continue _fun0009 }
case 69:
                    var8 = _closure2_slot15;
                    var6 = _closure1_slot10;
                    var6 = var6.RECEIVER;
                    var5 = var8 !== var6;
case 68:
                    if(var5) { _fun0009_ip = 70; continue _fun0009 }
case 71:
                    var6 = var2.push;
                    var5 = {};
                    var12 = _closure1_slot0;
                    var10 = _closure1_slot2;
                    var8 = 21;
                    var9 = var10[var8];
                    var9 = var12.bind(var7)(var9);
                    var11 = var9.intl;
                    var9 = var11.string;
                    var8 = var10[var8];
                    var8 = var12.bind(var7)(var8);
                    var8 = var8.t;
                    var8 = var8.wwTN1t;
                    var8 = var9.bind(var11)(var8);
                    var5['label'] = var8;
                    var9 = _closure1_slot1;
                    var8 = 23;
                    var8 = var10[var8];
                    var8 = var9.bind(var7)(var8);
                    var5['iconSource'] = var8;
                    var8 = false;
                    var5['showIconFirst'] = var8;
                    var8 = function action() {
                        _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
                            var1 = _closure1_slot6;
                            var4 = var1.AudioRoutePicker;
                            var1 = null;
                            var2 = var1 == var4;
                            var1 = undefined;
                            if(var2) { _fun0011_ip = 60; continue _fun0011 }
case 67:
                            var3 = var4.toggleSpeaker;
                            var2 = true;
                            var1 = var3.bind(var4)(var2);
case 60:
                            return var1;
                        }
                    };
                    var5['action'] = var8;
                    var5 = var6.bind(var2)(var5);
case 70:
                    var6 = var2.push;
                    var5 = {};
                    var12 = _closure1_slot0;
                    var10 = _closure1_slot2;
                    var8 = 21;
                    var9 = var10[var8];
                    var9 = var12.bind(var7)(var9);
                    var11 = var9.intl;
                    var9 = var11.string;
                    var8 = var10[var8];
                    var8 = var12.bind(var7)(var8);
                    var8 = var8.t;
                    var8 = var8.dnI0AA;
                    var8 = var9.bind(var11)(var8);
                    var5['label'] = var8;
                    var9 = _closure1_slot1;
                    var8 = 24;
                    var8 = var10[var8];
                    var8 = var9.bind(var7)(var8);
                    var5['iconSource'] = var8;
                    var8 = false;
                    var5['showIconFirst'] = var8;
                    var8 = function action() {
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var1 = 20;
                        var2 = var2[var1];
                        var1 = undefined;
                        var5 = var3.bind(var1)(var2);
                        var4 = var5.showAudioOutputSelector;
                        var3 = _closure2_slot1;
                        var2 = _closure2_slot0;
                        var2 = var4.bind(var5)(var3, var2);
                        return var1;
                    };
                    var5['action'] = var8;
                    var5 = var6.bind(var2)(var5);
                    var6 = function _loop(arg1) {
                        _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
case 0:
                            var5 = arg1;
                            var _closure4_slot0 = var5;
                            var2 = var5.type;
                            var1 = _closure1_slot13;
                            var1 = var1.XBOX;
                            if(!(var2 === var1)) { _fun0012_ip = 14; continue _fun0012 }
case 72:
                            var3 = _closure3_slot0;
                            var2 = var3.push;
                            var1 = {};
                            var12 = _closure1_slot0;
                            var10 = _closure1_slot2;
                            var7 = 21;
                            var8 = var10[var7];
                            var9 = undefined;
                            var8 = var12.bind(var9)(var8);
                            var11 = var8.intl;
                            var8 = var11.string;
                            var7 = var10[var7];
                            var7 = var12.bind(var9)(var7);
                            var7 = var7.t;
                            var7 = var7.qVE/VF;
                            var7 = var8.bind(var11)(var7);
                            var1['label'] = var7;
                            var8 = _closure1_slot1;
                            var7 = 16;
                            var7 = var10[var7];
                            var8 = var8.bind(var9)(var7);
                            var7 = var5.type;
                            var7 = var8.bind(var9)(var7);
                            var1['iconSource'] = var7;
                            var7 = false;
                            var1['showIconFirst'] = var7;
                            var7 = function action() {
                                _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
case 0:
                                    var4 = _closure1_slot11;
                                    var3 = var4.getChannel;
                                    var2 = _closure2_slot1;
                                    var4 = var3.bind(var4)(var2);
                                    var2 = null;
                                    if(!(var2 != var4)) { _fun0013_ip = 49; continue _fun0013 }
case 3:
                                    var3 = _closure1_slot0;
                                    var2 = _closure1_slot2;
                                    var1 = 25;
                                    var2 = var2[var1];
                                    var1 = undefined;
                                    var3 = var3.bind(var1)(var2);
                                    var2 = var3.onConnectToConsole;
                                    var1 = _closure4_slot0;
                                    var1 = var2.bind(var3)(var4, var1);
case 49:
                                    var1 = undefined;
                                    return var1;
                                }
                            };
                            var1['action'] = var7;
                            var1 = var2.bind(var3)(var1);
case 14:
                            var2 = var5.type;
                            var1 = _closure1_slot13;
                            var1 = var1.PLAYSTATION;
                            if(!(var2 === var1)) { _fun0012_ip = 73; continue _fun0012 }
case 74:
                            var3 = _closure3_slot0;
                            var2 = var3.push;
                            var1 = {};
                            var12 = _closure1_slot0;
                            var9 = _closure1_slot2;
                            var8 = 21;
                            var10 = var9[var8];
                            var7 = undefined;
                            var10 = var12.bind(var7)(var10);
                            var11 = var10.intl;
                            var10 = var11.string;
                            var8 = var9[var8];
                            var8 = var12.bind(var7)(var8);
                            var8 = var8.t;
                            var8 = var8.vzfxmZ;
                            var8 = var10.bind(var11)(var8);
                            var1['label'] = var8;
                            var8 = _closure1_slot1;
                            var6 = 16;
                            var6 = var9[var6];
                            var6 = var8.bind(var7)(var6);
                            var5 = var5.type;
                            var5 = var6.bind(var7)(var5);
                            var1['iconSource'] = var5;
                            var5 = false;
                            var1['showIconFirst'] = var5;
                            var4 = function action() {
                                _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
case 0:
                                    var4 = _closure1_slot11;
                                    var3 = var4.getChannel;
                                    var2 = _closure2_slot1;
                                    var4 = var3.bind(var4)(var2);
                                    var2 = null;
                                    if(!(var2 != var4)) { _fun0014_ip = 49; continue _fun0014 }
case 3:
                                    var3 = _closure1_slot0;
                                    var2 = _closure1_slot2;
                                    var1 = 25;
                                    var2 = var2[var1];
                                    var1 = undefined;
                                    var3 = var3.bind(var1)(var2);
                                    var2 = var3.onConnectToConsole;
                                    var1 = _closure4_slot0;
                                    var1 = var2.bind(var3)(var4, var1);
case 49:
                                    var1 = undefined;
                                    return var1;
                                }
                            };
                            var1['action'] = var4;
                            var1 = var2.bind(var3)(var1);
case 73:
                            var1 = undefined;
                            return var1;
                        }
                    };
                    var4 = _closure1_slot19;
                    var3 = _closure2_slot12;
                    var5 = var4.bind(var7)(var3);
                    var4 = var5.bind(var7)();
                    var3 = var4.done;
                    if(var3) { _fun0009_ip = 75; continue _fun0009 }
case 76:
                    var3 = var4.value;
                    var3 = var6.bind(var7)(var3);
                    var8 = var5.bind(var7)();
                    var3 = var8.done;
                    var4 = var8;
                    if(!var3) { _fun0009_ip = 76; continue _fun0009 }
case 75:
                    return var2;
case 62:
                    var1 = _closure1_slot17;
                    return var1;
                }
            };
            var12 = var9.bind(var8)(var4, var6);
            var9 = var8.useCallback;
            var6 = new Array(1);
            var6[0] = var10;
            var4 = function() {
                var6 = _closure1_slot0;
                var7 = _closure1_slot2;
                var1 = 26;
                var3 = var7[var1];
                var1 = undefined;
                var5 = var6.bind(var1)(var3);
                var4 = var5.UNSAFE_markDismissibleContentAsDismissed;
                var3 = 27;
                var3 = var7[var3];
                var3 = var6.bind(var1)(var3);
                var3 = var3.DismissibleContent;
                var3 = var3.DONUT_MOBILE_NUX;
                var3 = var4.bind(var5)(var3);
                var3 = _closure1_slot7;
                var2 = true;
                var2 = var3.bind(var1)(var2);
                var3 = _closure2_slot3;
                var2 = var3.lock;
                var2 = var2.bind(var3)();
                return var1;
            };
            var11 = var9.bind(var8)(var4, var6);
            var6 = var8.useRef;
            var4 = null;
            var15 = var6.bind(var8)(var4);
            _closure2_slot16 = var15;
            if(var13) { _fun0004_ip = 77; continue _fun0004 }
case 78:
            return var4;
case 77:
            var5 = _closure1_slot0;
            var6 = _closure1_slot2;
            var4 = 19;
            var4 = var6[var4];
            var5 = var5.bind(var3)(var4);
            var4 = var5.isAndroid;
            var4 = var4.bind(var5)();
            if(var4) { _fun0004_ip = 79; continue _fun0004 }
case 80:
            if(!var1) { _fun0004_ip = 79; continue _fun0004 }
case 81:
            var5 = _closure1_slot16;
            var4 = _closure1_slot15;
            var1 = {};
            var9 = _closure1_slot14;
            var8 = _closure1_slot18;
            var6 = {};
            var6['targetRef'] = var15;
            if(!var13) { _fun0004_ip = 82; continue _fun0004 }
case 83:
            var13 = var14;
case 82:
            var6['canShowTooltip'] = var13;
            var8 = var9.bind(var3)(var8, var6);
            var6 = new Array(2);
            var6[0] = var8;
            var9 = _closure1_slot14;
            var8 = _closure1_slot0;
            var13 = _closure1_slot2;
            var7 = 30;
            var7 = var13[var7];
            var7 = var8.bind(var3)(var7);
            var8 = var7.MenuPopout;
            var7 = {'menuItems': null, 'position': 'bottom', 'align': 'end'};
            var7['menuItems'] = var12;
            var7['onRequestOpen'] = var11;
            var10 = var10.unlock;
            var7['onRequestClose'] = var10;
            var7['children'] = var2;
            var7 = var9.bind(var3)(var8, var7);
            var6[1] = var7;
            var1['children'] = var6;
            var1 = var5.bind(var3)(var4, var1);
            _fun0004_ip = 84; continue _fun0004;
case 79:
            var1 = var2.bind(var3)();
case 84:
            return var1;
        }
    };
    var2 = var4.bind(var7)(var2);
    var4 = 31;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/voice_panel/native/header/VoicePanelHeaderSpeaker.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();