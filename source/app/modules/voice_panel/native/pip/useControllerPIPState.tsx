// app/modules/voice_panel/native/pip/useControllerPIPState.tsx
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
            var9 = _closure1_slot12;
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
            var7 = _closure1_slot12;
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
    var _closure1_slot11 = var1;
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
    var _closure1_slot12 = var1;
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
    var4 = var5.bind(var1)(var4);
    var4 = var4.VoicePanelModes;
    var _closure1_slot9 = var4;
    var4 = 7;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.ActivityPanelModes;
    var _closure1_slot10 = var4;
    var4 = 18;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/voice_panel/native/pip/useControllerPIPState.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function useControllerPIPState(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var1 = arg1;
            var6 = var1.channelId;
            var _closure2_slot0 = var6;
            var17 = var1.connected;
            var5 = var1.focusedId;
            var _closure2_slot1 = var5;
            var4 = var1.layoutManager;
            var _closure2_slot2 = var4;
            var16 = var1.mode;
            var22 = _closure1_slot4;
            var8 = var22.useRef;
            var1 = {'id': null, 'mode': null, 'width': 0, 'height': 0, 'containerHeight': 0, 'showSecondaryPIP': false};
            var3 = undefined;
            var1['id'] = var3;
            var1['mode'] = var3;
            var12 = 0;
            var11 = var8.bind(var22)(var1);
            var1 = var22.useState;
            var1 = var1.bind(var22)(var3);
            var20 = _closure1_slot3;
            var19 = 2;
            var1 = var20.bind(var3)(var1, var19);
            var13 = var1[var12];
            var _closure2_slot3 = var13;
            var18 = 1;
            var1 = var1[var18];
            var _closure2_slot4 = var1;
            var1 = var22.useRef;
            var1 = var1.bind(var22)(var13);
            var _closure2_slot5 = var1;
            var8 = var22.useInsertionEffect;
            var1 = function() {
                var2 = _closure2_slot5;
                var1 = _closure2_slot3;
                var2['current'] = var1;
                var1 = undefined;
                return var1;
            };
            var1 = var8.bind(var22)(var1);
            var8 = {};
            var8['channelId'] = var6;
            var8['mode'] = var16;
            var1 = function useShowSecondaryPIP(arg1) {
                var2 = arg1;
                var8 = var2.channelId;
                var _closure3_slot0 = var8;
                var6 = var2.mode;
                var _closure3_slot1 = var6;
                var4 = _closure1_slot1;
                var9 = _closure1_slot2;
                var3 = 8;
                var3 = var9[var3];
                var5 = undefined;
                var3 = var4.bind(var5)(var3);
                var7 = var3.bind(var5)(var8);
                var _closure3_slot2 = var7;
                var4 = _closure1_slot0;
                var3 = 9;
                var3 = var9[var3];
                var5 = var4.bind(var5)(var3);
                var4 = var5.useStateFromStores;
                var9 = _closure1_slot5;
                var3 = new Array(2);
                var3[0] = var9;
                var2 = _closure1_slot7;
                var3[1] = var2;
                var2 = new Array(3);
                var2[0] = var8;
                var2[1] = var7;
                var2[2] = var6;
                var1 = function() {
                    _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                        var2 = _closure1_slot5;
                        var1 = var2.getConnectedActivityLocation;
                        var6 = var1.bind(var2)();
                        var1 = null;
                        if(!(var1 != var6)) { _fun0005_ip = 36; continue _fun0005 }
case 37:
                        var7 = _closure1_slot7;
                        var5 = var7.getChannel;
                        var2 = _closure3_slot0;
                        var5 = var5.bind(var7)(var2);
                        if(!(var1 != var5)) { _fun0005_ip = 38; continue _fun0005 }
case 39:
                        var2 = var5.isVocal;
                        var2 = var2.bind(var5)();
                        if(!var2) { _fun0005_ip = 38; continue _fun0005 }
case 40:
                        var2 = _closure3_slot2;
                        if(var2) { _fun0005_ip = 38; continue _fun0005 }
case 41:
                        var2 = false;
                        return var2;
case 38:
                        var5 = _closure1_slot0;
                        var7 = _closure1_slot2;
                        var2 = 10;
                        var2 = var7[var2];
                        var9 = undefined;
                        var5 = var5.bind(var9)(var2);
                        var2 = var5.getEmbeddedActivityLocationChannelId;
                        var5 = var2.bind(var5)(var6);
                        var6 = _closure1_slot7;
                        var2 = var6.getChannel;
                        var8 = var2.bind(var6)(var5);
                        var6 = _closure1_slot5;
                        var2 = var6.getActivityPanelMode;
                        var6 = var2.bind(var6)();
                        var1 = var1 != var8;
                        if(!var1) { _fun0005_ip = 42; continue _fun0005 }
case 43:
                        var7 = _closure1_slot0;
                        var10 = _closure1_slot2;
                        var2 = 11;
                        var2 = var10[var2];
                        var7 = var7.bind(var9)(var2);
                        var2 = var7.isActivityInTextSupportedForChannel;
                        var1 = var2.bind(var7)(var8);
case 42:
                        if(!var1) { _fun0005_ip = 44; continue _fun0005 }
case 45:
                        var2 = _closure3_slot0;
                        var1 = var5 !== var2;
case 44:
                        var2 = _closure1_slot10;
                        var2 = var2.PIP;
                        var2 = var6 === var2;
                        if(!var2) { _fun0005_ip = 21; continue _fun0005 }
case 46:
                        var6 = _closure3_slot1;
                        var3 = _closure1_slot9;
                        var3 = var3.PIP;
                        var3 = var6 === var3;
                        if(var3) { _fun0005_ip = 47; continue _fun0005 }
case 48:
                        var4 = _closure3_slot0;
                        var3 = var5 !== var4;
case 47:
                        var2 = var3;
case 21:
                        if(!var1) { _fun0005_ip = 49; continue _fun0005 }
case 50:
                        var1 = var2;
case 49:
                        return var1;
case 36:
                        var1 = false;
                        return var1;
                    }
                };
                var1 = var4.bind(var5)(var3, var1, var2);
                return var1;
            };
            var8 = var1.bind(var3)(var8);
            var10 = _closure1_slot1;
            var14 = _closure1_slot2;
            var1 = 13;
            var1 = var14[var1];
            var1 = var10.bind(var3)(var1);
            var15 = var1.bind(var3)(var6);
            var9 = var22.useState;
            var1 = function() {
                var2 = _closure1_slot1;
                var3 = _closure1_slot2;
                var1 = 14;
                var1 = var3[var1];
                var5 = undefined;
                var4 = var2.bind(var5)(var1);
                var3 = {};
                var1 = true;
                var3['leading'] = var1;
                var2 = function(arg1) {
                    var2 = arg1;
                    var1 = undefined;
                    var1 = var2.bind(var1)();
                    return var1;
                };
                var1 = 1000;
                var1 = var4.bind(var5)(var2, var1, var3);
                return var1;
            };
            var1 = var9.bind(var22)(var1);
            var1 = var20.bind(var3)(var1, var18);
            var9 = var1[var12];
            var _closure2_slot6 = var9;
            var23 = var22.useLayoutEffect;
            var21 = new Array(1);
            var21[0] = var9;
            var1 = function() {
                var1 = function() {
                    var2 = _closure2_slot6;
                    var1 = var2.cancel;
                    var1 = var1.bind(var2)();
                    return var1;
                };
                return var1;
            };
            var1 = var23.bind(var22)(var1, var21);
            var21 = var22.useState;
            var1 = function() {
                var3 = _closure2_slot2;
                var2 = var3.getTargetDimensions;
                var1 = _closure2_slot1;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var1 = var21.bind(var22)(var1);
            var1 = var20.bind(var3)(var1, var19);
            var12 = var1[var12];
            var1 = var1[var18];
            var _closure2_slot7 = var1;
            var1 = 15;
            var1 = var14[var1];
            var10 = var10.bind(var3)(var1);
            var1 = {};
            var1['connected'] = var17;
            var1['mode'] = var16;
            var1['focusedId'] = var5;
            var1['participantTargetDimensions'] = var12;
            var1['selfHasVideo'] = var15;
            var1['showSecondaryPIP'] = var8;
            var29 = undefined;
            var28 = var6;
            var27 = var4;
            var26 = var5;
            var25 = var13;
            var24 = var1;
            var10 = var29[var10](var28, var27, var26, var25, var24, var23);
            var1 = var10.participant;
            var13 = var10.dimensions;
            var10 = {};
            var27 = var11.current;
            var28 = var10;
            var14 = copyDataProperties(var28, var27);
            var28 = var10;
            var27 = var13;
            var13 = copyDataProperties(var28, var27);
            var13 = null;
            var14 = var13 == var1;
            var13 = undefined;
            if(var14) { _fun0004_ip = 51; continue _fun0004 }
case 52:
            var13 = var1.id;
case 51:
            var1 = 'id';
            var10[var1] = var13;
            var1 = 'showSecondaryPIP';
            var10[var1] = var8;
            var13 = _closure1_slot0;
            var8 = _closure1_slot2;
            var1 = 16;
            var1 = var8[var1];
            var14 = var13.bind(var3)(var1);
            var13 = var14.getPIPMode;
            var1 = {};
            var1['channelId'] = var6;
            var1['connected'] = var17;
            var1['manuallyFocusedId'] = var5;
            var1['mode'] = var16;
            var1['selfHasVideo'] = var15;
            var13 = var13.bind(var14)(var1);
            var1 = 'mode';
            var10[var1] = var13;
            var1 = function useCachedPipState(arg1, arg2) {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                    var1 = arg1;
                    var2 = arg2;
                    var _closure3_slot0 = var1;
                    var _closure3_slot1 = var2;
                    var7 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var3 = 12;
                    var6 = var6[var3];
                    var3 = undefined;
                    var7 = var7.bind(var3)(var6);
                    var6 = var7.cheapWorkletShallowEqual;
                    var3 = var2.current;
                    var3 = var6.bind(var7)(var1, var3);
                    var3 = !var3;
                    var _closure3_slot2 = var3;
                    var6 = _closure1_slot4;
                    var5 = var6.useEffect;
                    var4 = function() {
                        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                            var2 = _closure3_slot2;
                            if(!var2) { _fun0007_ip = 53; continue _fun0007 }
case 54:
                            var2 = _closure3_slot1;
                            var1 = _closure3_slot0;
                            var2['current'] = var1;
case 53:
                            var1 = undefined;
                            return var1;
                        }
                    };
                    var4 = var5.bind(var6)(var4);
                    if(var3) { _fun0006_ip = 55; continue _fun0006 }
case 56:
                    var1 = var2.current;
case 55:
                    return var1;
                }
            };
            var1 = var1.bind(var3)(var10, var11);
            var11 = _closure1_slot4;
            var13 = var11.useEffect;
            var10 = new Array(2);
            var10[0] = var6;
            var10[1] = var9;
            var9 = function() {
                var5 = _closure1_slot0;
                var4 = _closure1_slot2;
                var3 = 9;
                var4 = var4[var3];
                var3 = undefined;
                var3 = var5.bind(var3)(var4);
                var5 = var3.BatchedStoreListener;
                var3 = _closure1_slot8;
                var4 = new Array(2);
                var4[0] = var3;
                var2 = _closure1_slot6;
                var4[1] = var2;
                var2 = var5.prototype;
                var3 = Object.create(var2, {constructor: {value: var5}});
                var7 = function() {
                    _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                        var3 = _closure1_slot11;
                        var2 = _closure1_slot8;
                        var1 = var2.getSpeakers;
                        var2 = var1.bind(var2)();
                        var1 = undefined;
                        var8 = var3.bind(var1)(var2);
                        var3 = var8.bind(var1)();
                        var5 = var3.done;
                        var6 = null;
                        var7 = var3;
                        var3 = undefined;
                        if(var5) { _fun0008_ip = 57; continue _fun0008 }
case 58:
                        var10 = var7.value;
                        var12 = _closure1_slot6;
                        var11 = var12.getParticipant;
                        var5 = _closure2_slot0;
                        var5 = var11.bind(var12)(var5, var10);
                        var3 = var10;
                        if(!(var6 == var5)) { _fun0008_ip = 57; continue _fun0008 }
case 59:
                        var10 = var8.bind(var1)();
                        var5 = var10.done;
                        var7 = var10;
                        var3 = undefined;
                        if(!var5) { _fun0008_ip = 58; continue _fun0008 }
case 57:
                        var _closure4_slot0 = var3;
                        var5 = _closure2_slot5;
                        var5 = var5.current;
                        var5 = var3 !== var5;
                        if(!var5) { _fun0008_ip = 60; continue _fun0008 }
case 61:
                        var5 = var6 != var3;
case 60:
                        if(!var5) { _fun0008_ip = 62; continue _fun0008 }
case 63:
                        var5 = _closure2_slot5;
                        var5 = var5.current;
                        if(!(var6 != var5)) { _fun0008_ip = 64; continue _fun0008 }
case 65:
                        var5 = _closure2_slot6;
                        var4 = function() {
                            var3 = _closure2_slot4;
                            var2 = _closure4_slot0;
                            var1 = undefined;
                            var1 = var3.bind(var1)(var2);
                            return var1;
                        };
                        var4 = var5.bind(var1)(var4);
                        _fun0008_ip = 62; continue _fun0008;
case 64:
                        var2 = _closure2_slot4;
                        var2 = var2.bind(var1)(var3);
case 62:
                        return var1;
                    }
                };
                var9 = var3;
                var8 = var4;
                var2 = new var9[var5](var8, var7, var6);
                var4 = var2 instanceof Object ? var2 : var3;
                var _closure3_slot0 = var4;
                var3 = var4.attach;
                var6 = _closure2_slot0;
                var2 = global;
                var2 = var2.HermesInternal;
                var5 = var2.concat;
                var2 = 'pipstate-change-listeners-';
                var2 = var5.bind(var2)(var6);
                var2 = var3.bind(var4)(var2);
                var1 = function() {
                    var2 = _closure3_slot0;
                    var1 = var2.detach;
                    var1 = var1.bind(var2)();
                    return var1;
                };
                return var1;
            };
            var9 = var13.bind(var11)(var9, var10);
            var10 = var11.useEffect;
            var9 = new Array(3);
            var9[0] = var5;
            var9[1] = var4;
            var9[2] = var12;
            var7 = function() {
                var3 = function updateParticipantDimensions() {
                    var3 = _closure2_slot7;
                    var1 = undefined;
                    var2 = function(arg1) {
                        _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                            var2 = arg1;
                            var4 = _closure2_slot2;
                            var3 = var4.getTargetDimensions;
                            var1 = _closure2_slot1;
                            var1 = var3.bind(var4)(var1);
                            var5 = _closure1_slot0;
                            var4 = _closure1_slot2;
                            var3 = 12;
                            var4 = var4[var3];
                            var3 = undefined;
                            var4 = var5.bind(var3)(var4);
                            var3 = var4.cheapWorkletShallowEqual;
                            var3 = var3.bind(var4)(var2, var1);
                            if(!var3) { _fun0009_ip = 66; continue _fun0009 }
case 67:
                            var1 = var2;
case 66:
                            return var1;
                        }
                    };
                    var2 = var3.bind(var1)(var2);
                    return var1;
                };
                var1 = undefined;
                var1 = var3.bind(var1)();
                var2 = _closure2_slot2;
                var1 = var2.subscribeFromItem;
                var1 = var1.bind(var2)(var3);
                return var1;
            };
            var7 = var10.bind(var11)(var7, var9);
            var7 = _closure1_slot1;
            var2 = 17;
            var2 = var8[var2];
            var2 = var7.bind(var3)(var2);
            var2 = var2.bind(var3)(var6, var4, var5);
            return var1;
        }
    };
    var3['useControllerPIPState'] = var2;
    return var1;
})();