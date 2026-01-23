// app/modules/voice_panel/native/hooks/useVoicePanelParticipants.tsx
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
            var9 = _closure1_slot16;
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
            var7 = _closure1_slot16;
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
    var _closure1_slot15 = var1;
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
    var _closure1_slot16 = var1;
    var1 = function getMemoizedParticipant(arg1, arg2) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var2 = arg1;
            var5 = arg2;
            var7 = var2.type;
            var6 = var2.id;
            var1 = global;
            var1 = var1.HermesInternal;
            var4 = var1.concat;
            var3 = '';
            var1 = '-';
            var4 = var4.bind(var3)(var7, var1, var6);
            var1 = var5.get;
            var1 = var1.bind(var5)(var4);
            var3 = null;
            if(!(var3 == var1)) { _fun0004_ip = 36; continue _fun0004 }
case 37:
            var3 = var5.set;
            var3 = var3.bind(var5)(var4, var2);
            var1 = var2;
case 36:
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
    var4 = 1;
    var8 = var6[var4];
    var4 = metroImportAll;
    var4 = var4.bind(var1)(var8);
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
    var7 = var4.VoicePanelCardItemType;
    var _closure1_slot11 = var7;
    var4 = var4.VoicePanelCTACard;
    var _closure1_slot12 = var4;
    var4 = 9;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.RTCConnectionStates;
    var _closure1_slot13 = var4;
    var4 = new Array(0);
    var _closure1_slot14 = var4;
    var4 = 15;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/voice_panel/native/hooks/useVoicePanelParticipants.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function useVoicePanelCards(arg1, arg2) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
            var13 = arg1;
            var12 = arg2;
            var _closure2_slot0 = var13;
            var _closure2_slot1 = var12;
            var2 = _closure1_slot6;
            var1 = var2.getId;
            var9 = var1.bind(var2)();
            var _closure2_slot2 = var9;
            var2 = _closure1_slot7;
            var1 = var2.getChannel;
            var6 = var1.bind(var2)(var13);
            var2 = null;
            var5 = var2 == var6;
            var7 = undefined;
            var1 = undefined;
            if(var5) { _fun0005_ip = 36; continue _fun0005 }
case 38:
            var5 = var6.isDM;
            var1 = var5.bind(var6)();
case 36:
            var10 = var2 != var1;
            if(!var10) { _fun0005_ip = 39; continue _fun0005 }
case 40:
            var10 = var1;
case 39:
            var _closure2_slot3 = var10;
            var2 = _closure1_slot1;
            var15 = _closure1_slot2;
            var1 = 10;
            var1 = var15[var1];
            var1 = var2.bind(var7)(var1);
            var2 = var1.bind(var7)(var13);
            var _closure2_slot4 = var2;
            var8 = _closure1_slot4;
            var5 = var8.useState;
            var1 = function() {
                var1 = global;
                var1 = var1.Map;
                var2 = var1.prototype;
                var2 = Object.create(var2, {constructor: {value: var1}});
                var3 = var2;
                var1 = new var3[var1](var2);
                var1 = var1 instanceof Object ? var1 : var2;
                return var1;
            };
            var6 = var5.bind(var8)(var1);
            var5 = _closure1_slot3;
            var1 = 1;
            var5 = var5.bind(var7)(var6, var1);
            var1 = 0;
            var11 = var5[var1];
            var _closure2_slot5 = var11;
            var6 = var8.useEffect;
            var5 = new Array(1);
            var5[0] = var11;
            var1 = function() {
                var1 = function() {
                    var2 = _closure2_slot5;
                    var1 = var2.clear;
                    var1 = var1.bind(var2)();
                    return var1;
                };
                return var1;
            };
            var1 = var6.bind(var8)(var1, var5);
            var6 = _closure1_slot0;
            var5 = 11;
            var1 = var15[var5];
            var16 = var6.bind(var7)(var1);
            var14 = var16.useStateFromStores;
            var1 = _closure1_slot8;
            var8 = new Array(1);
            var8[0] = var1;
            var1 = function() {
                var3 = _closure1_slot8;
                var2 = var3.getState;
                var2 = var2.bind(var3)();
                var1 = _closure1_slot13;
                var1 = var1.RTC_CONNECTED;
                var1 = var2 === var1;
                return var1;
            };
            var8 = var14.bind(var16)(var8, var1);
            var _closure2_slot6 = var8;
            var1 = 12;
            var1 = var15[var1];
            var14 = var6.bind(var7)(var1);
            var1 = var14.useDesyncedChannelParticipants;
            var14 = var1.bind(var14)(var13);
            var _closure2_slot7 = var14;
            var1 = {};
            var5 = var15[var5];
            var7 = var6.bind(var7)(var5);
            var6 = var7.useStateFromStoresArray;
            var15 = _closure1_slot5;
            var5 = new Array(2);
            var5[0] = var15;
            var4 = _closure1_slot10;
            var5[1] = var4;
            var4 = new Array(8);
            var4[0] = var2;
            var4[1] = var14;
            var4[2] = var13;
            var4[3] = var12;
            var4[4] = var11;
            var4[5] = var10;
            var4[6] = var9;
            var4[7] = var8;
            var3 = function() {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                    var1 = _closure2_slot4;
                    if(var1) { _fun0006_ip = 41; continue _fun0006 }
case 42:
                    var6 = _closure1_slot10;
                    var5 = var6.getVoiceStatesForChannelAlt;
                    var4 = _closure2_slot0;
                    var1 = _closure2_slot1;
                    var5 = var5.bind(var6)(var4, var1);
                    var4 = var5.map;
                    var1 = function(arg1) {
                        var4 = _closure1_slot17;
                        var3 = {};
                        var1 = _closure1_slot11;
                        var1 = var1.PARTICIPANT;
                        var3['type'] = var1;
                        var1 = arg1;
                        var1 = var1.user;
                        var1 = var1.id;
                        var3['id'] = var1;
                        var2 = _closure2_slot5;
                        var1 = undefined;
                        var1 = var4.bind(var1)(var3, var2);
                        return var1;
                    };
                    var1 = var4.bind(var5)(var1);
                    var5 = var1.length;
                    var4 = 0;
                    if(!(!(var5 > var4))) { _fun0006_ip = 43; continue _fun0006 }
case 30:
                    var1 = _closure1_slot14;
case 43:
                    return var1;
case 41:
                    var7 = _closure1_slot5;
                    var1 = var7.getVoiceParticipantsHidden;
                    var4 = _closure2_slot0;
                    var5 = var1.bind(var7)(var4);
                    var6 = new Array(0);
                    var1 = var7.getFilteredParticipants;
                    var8 = var1.bind(var7)(var4);
                    var1 = var8.length;
                    var4 = 0;
                    var1 = var4 < var1;
                    var7 = 0;
                    if(!var1) { _fun0006_ip = 44; continue _fun0006 }
case 45:
                    var9 = var8[var7];
                    var1 = var6.push;
                    var1 = var1.bind(var6)(var9);
                    var7 = var7 + 1;
                    var1 = var8.length;
                    if(var7 < var1) { _fun0006_ip = 45; continue _fun0006 }
case 44:
                    if(var5) { _fun0006_ip = 46; continue _fun0006 }
case 47:
                    var7 = _closure2_slot7;
                    var1 = null;
                    if(!(var1 != var7)) { _fun0006_ip = 46; continue _fun0006 }
case 48:
                    var7 = _closure1_slot15;
                    var1 = _closure2_slot7;
                    var9 = undefined;
                    var8 = var7.bind(var9)(var1);
                    var7 = var8.bind(var9)();
                    var1 = var7.done;
                    if(var1) { _fun0006_ip = 46; continue _fun0006 }
case 49:
                    var10 = var7.value;
                    var1 = var6.push;
                    var1 = var1.bind(var6)(var10);
                    var10 = var8.bind(var9)();
                    var1 = var10.done;
                    var7 = var10;
                    if(!var1) { _fun0006_ip = 49; continue _fun0006 }
case 46:
                    var1 = new Array(0);
                    var7 = var6.length;
                    var7 = var4 < var7;
                    var8 = undefined;
                    var11 = undefined;
                    var10 = 0;
                    var9 = undefined;
                    if(!var7) { _fun0006_ip = 50; continue _fun0006 }
case 51:
                    var7 = var6[var10];
                    var13 = _closure1_slot17;
                    var12 = {};
                    var14 = _closure1_slot11;
                    var14 = var14.PARTICIPANT;
                    var12['type'] = var14;
                    var7 = var7.id;
                    var12['id'] = var7;
                    var7 = _closure2_slot5;
                    var13 = var13.bind(var8)(var12, var7);
                    var7 = _closure2_slot3;
                    if(!var7) { _fun0006_ip = 52; continue _fun0006 }
case 53:
                    var14 = var13.id;
                    var7 = _closure2_slot2;
                    var12 = var13;
                    if(!(var14 !== var7)) { _fun0006_ip = 54; continue _fun0006 }
case 52:
                    var7 = var1.push;
                    var7 = var7.bind(var1)(var13);
                    var12 = var11;
case 54:
                    var10 = var10 + 1;
                    var7 = var6.length;
                    var11 = var12;
                    var9 = var11;
                    if(var10 < var7) { _fun0006_ip = 51; continue _fun0006 }
case 50:
                    var7 = null;
                    if(!(var7 != var9)) { _fun0006_ip = 55; continue _fun0006 }
case 56:
                    var7 = var1.push;
                    var7 = var7.bind(var1)(var9);
case 55:
                    var7 = _closure2_slot4;
                    if(!var7) { _fun0006_ip = 57; continue _fun0006 }
case 58:
                    var7 = _closure2_slot3;
                    if(!var7) { _fun0006_ip = 59; continue _fun0006 }
case 60:
                    var7 = _closure2_slot6;
case 59:
                    if(!var7) { _fun0006_ip = 61; continue _fun0006 }
case 62:
                    var10 = var1.length;
                    var9 = 1;
                    var7 = var9 === var10;
case 61:
                    if(!var7) { _fun0006_ip = 63; continue _fun0006 }
case 64:
                    var9 = var1.push;
                    var11 = _closure1_slot17;
                    var10 = {};
                    var7 = _closure1_slot11;
                    var7 = var7.CTA;
                    var10['type'] = var7;
                    var7 = _closure1_slot12;
                    var7 = var7.CALLER_DISCONNECTED;
                    var10['id'] = var7;
                    var7 = _closure2_slot5;
                    var7 = var11.bind(var8)(var10, var7);
                    var7 = var9.bind(var1)(var7);
case 63:
                    if(!var5) { _fun0006_ip = 65; continue _fun0006 }
case 66:
                    var6 = var6.length;
                    var5 = var4 === var6;
case 65:
                    if(!var5) { _fun0006_ip = 57; continue _fun0006 }
case 67:
                    var5 = var1.push;
                    var7 = _closure1_slot17;
                    var6 = {};
                    var9 = _closure1_slot11;
                    var9 = var9.CTA;
                    var6['type'] = var9;
                    var9 = _closure1_slot12;
                    var9 = var9.NO_VIDEO_PARTICIPANTS;
                    var6['id'] = var9;
                    var3 = _closure2_slot5;
                    var3 = var7.bind(var8)(var6, var3);
                    var3 = var5.bind(var1)(var3);
case 57:
                    var3 = var1.length;
                    if(!(!(var3 > var4))) { _fun0006_ip = 68; continue _fun0006 }
case 69:
                    var1 = _closure1_slot14;
case 68:
                    return var1;
                }
            };
            var3 = var6.bind(var7)(var5, var3, var4);
            var1['items'] = var3;
            var1['isConnected'] = var2;
            return var1;
        }
    };
    var3['default'] = var4;
    var2 = function useChunkedParticipants(arg1, arg2) {
        var11 = arg1;
        var8 = arg2;
        var _closure2_slot0 = var11;
        var _closure2_slot1 = var8;
        var4 = _closure1_slot6;
        var3 = var4.getId;
        var6 = var3.bind(var4)();
        var _closure2_slot2 = var6;
        var15 = _closure1_slot4;
        var4 = var15.useContext;
        var7 = _closure1_slot1;
        var12 = _closure1_slot2;
        var3 = 13;
        var3 = var12[var3];
        var5 = undefined;
        var3 = var7.bind(var5)(var3);
        var3 = var4.bind(var15)(var3);
        var9 = var3.layoutManager;
        var _closure2_slot3 = var9;
        var4 = _closure1_slot0;
        var3 = 14;
        var3 = var12[var3];
        var7 = var4.bind(var5)(var3);
        var3 = var7.useManagerSubscription;
        var7 = var3.bind(var7)(var9);
        var _closure2_slot4 = var7;
        var10 = var15.useState;
        var3 = function() {
            var1 = global;
            var1 = var1.Map;
            var2 = var1.prototype;
            var2 = Object.create(var2, {constructor: {value: var1}});
            var3 = var2;
            var1 = new var3[var1](var2);
            var1 = var1 instanceof Object ? var1 : var2;
            return var1;
        };
        var13 = var10.bind(var15)(var3);
        var10 = _closure1_slot3;
        var3 = 1;
        var10 = var10.bind(var5)(var13, var3);
        var3 = 0;
        var10 = var10[var3];
        var _closure2_slot5 = var10;
        var14 = var15.useEffect;
        var13 = new Array(1);
        var13[0] = var10;
        var3 = function() {
            var1 = function() {
                var2 = _closure2_slot5;
                var1 = var2.clear;
                var1 = var1.bind(var2)();
                return var1;
            };
            return var1;
        };
        var3 = var14.bind(var15)(var3, var13);
        var3 = 11;
        var3 = var12[var3];
        var5 = var4.bind(var5)(var3);
        var4 = var5.useStateFromStoresArray;
        var12 = _closure1_slot9;
        var3 = new Array(2);
        var3[0] = var12;
        var2 = _closure1_slot5;
        var3[1] = var2;
        var2 = new Array(6);
        var2[0] = var11;
        var2[1] = var10;
        var2[2] = var9;
        var2[3] = var8;
        var2[4] = var7;
        var2[5] = var6;
        var1 = function() {
            _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                var1 = _closure2_slot4;
                var4 = 0;
                if(!(!(var1 < var4))) { _fun0007_ip = 70; continue _fun0007 }
case 71:
                var7 = _closure1_slot9;
                var6 = var7.isInChannel;
                var5 = _closure2_slot0;
                var1 = _closure2_slot2;
                var5 = var6.bind(var7)(var5, var1);
                var1 = new Array(0);
                if(var5) { _fun0007_ip = 72; continue _fun0007 }
case 73:
                return var1;
case 72:
                var6 = _closure1_slot15;
                var10 = global;
                var8 = var10.Set;
                var5 = new Array(0);
                var7 = _closure2_slot1;
                var9 = var7.start;
                var7 = var7.end;
                if(!(var9 <= var7)) { _fun0007_ip = 48; continue _fun0007 }
case 9:
                var11 = _closure2_slot3;
                var7 = var11.getChunk;
                var13 = var7.bind(var11)(var9);
                var11 = var5.push;
                var12 = var10.Array;
                var7 = var12.from;
                var15 = var7.bind(var12)(var13);
                var7 = new Array(0);
                var16 = var7;
                var14 = 0;
                var12 = arraySpread(var16, var15, var14);
                var16 = var11;
                var15 = var7;
                var14 = var5;
                var7 = apply(var16, var15, var14);
                var9 = var9 + 1;
                var7 = _closure2_slot1;
                var7 = var7.end;
                if(var9 <= var7) { _fun0007_ip = 9; continue _fun0007 }
case 48:
                var7 = var8.prototype;
                var7 = Object.create(var7, {constructor: {value: var8}});
                var17 = var7;
                var16 = var5;
                var5 = new var17[var8](var16, var15);
                var5 = var5 instanceof Object ? var5 : var7;
                var8 = undefined;
                var7 = var6.bind(var8)(var5);
                var6 = var7.bind(var8)();
                var5 = var6.done;
                if(var5) { _fun0007_ip = 74; continue _fun0007 }
case 75:
                var11 = var6.value;
                var9 = var1.push;
                var10 = _closure1_slot17;
                var5 = _closure2_slot5;
                var5 = var10.bind(var8)(var11, var5);
                var5 = var9.bind(var1)(var5);
                var9 = var7.bind(var8)();
                var5 = var9.done;
                var6 = var9;
                if(!var5) { _fun0007_ip = 75; continue _fun0007 }
case 74:
                var7 = _closure1_slot5;
                var6 = var7.getVoiceParticipantsHidden;
                var5 = _closure2_slot0;
                var5 = var6.bind(var7)(var5);
                if(!var5) { _fun0007_ip = 76; continue _fun0007 }
case 77:
                var6 = var1.length;
                var5 = var4 === var6;
case 76:
                if(!var5) { _fun0007_ip = 78; continue _fun0007 }
case 79:
                var5 = var1.push;
                var7 = _closure1_slot17;
                var6 = {};
                var9 = _closure1_slot11;
                var9 = var9.CTA;
                var6['type'] = var9;
                var9 = _closure1_slot12;
                var9 = var9.NO_VIDEO_PARTICIPANTS;
                var6['id'] = var9;
                var3 = _closure2_slot5;
                var3 = var7.bind(var8)(var6, var3);
                var3 = var5.bind(var1)(var3);
case 78:
                var3 = var1.length;
                if(!(!(var3 > var4))) { _fun0007_ip = 80; continue _fun0007 }
case 81:
                var1 = _closure1_slot14;
case 80:
                return var1;
case 70:
                var1 = _closure1_slot14;
                return var1;
            }
        };
        var1 = var4.bind(var5)(var3, var1, var2);
        return var1;
    };
    var3['useChunkedParticipants'] = var2;
    return var1;
})();