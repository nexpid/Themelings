// app/modules/voice_panel/native/pip/useControllerPIPState.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var7 = native3;
    var3 = native6;
    var6 = native7;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
    var1 = function _createForOfIteratorHelperLoose(arg1, arg2) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var3 = arg1;
            var _closure2_slot0 = var3;
            var5 = global;
            var2 = var5.Symbol;
            var4 = 'undefined';
            var2 = typeof var2;
            var2 = var4 !== var2;
            if(!var2) { _fun0001_ip = 45; continue _fun0001 }
 30:
            var4 = var5.Symbol;
            var4 = var4.iterator;
            var2 = var3[var4];
 45:
            if(var2) { _fun0001_ip = 54; continue _fun0001 }
 48:
            var2 = var3.@@iterator;
 54:
            if(var2) { _fun0001_ip = 344; continue _fun0001 }
 60:
            var6 = var5.Array;
            var4 = var6.isArray;
            var6 = var4.bind(var6)(var3);
            var4 = var2;
            if(var6) { _fun0001_ip = 322; continue _fun0001 }
 85:
            var8 = undefined;
            var6 = undefined;
            if(!var3) { _fun0001_ip = 282; continue _fun0001 }
 95:
            var9 = 'string';
            var7 = typeof var3;
            if(!(var9 !== var7)) { _fun0001_ip = 269; continue _fun0001 }
 109:
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
            if(!var7) { _fun0001_ip = 162; continue _fun0001 }
 157:
            var7 = var3.constructor;
 162:
            var10 = var9;
            if(!var7) { _fun0001_ip = 178; continue _fun0001 }
 168:
            var7 = var3.constructor;
            var10 = var7.name;
 178:
            var7 = 'Map';
            if(!(var7 !== var10)) { _fun0001_ip = 248; continue _fun0001 }
 186:
            var7 = 'Set';
            if(!(var7 !== var10)) { _fun0001_ip = 248; continue _fun0001 }
 194:
            var7 = 'Arguments';
            if(!(var7 !== var10)) { _fun0001_ip = 233; continue _fun0001 }
 204:
            var9 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
            var7 = var9.test;
            var9 = var7.bind(var9)(var10);
            var7 = undefined;
            if(!var9) { _fun0001_ip = 246; continue _fun0001 }
 233:
            var9 = _closure1_slot12;
            var7 = var9.bind(var8)(var3, var8);
 246:
            _fun0001_ip = 264; continue _fun0001;
 248:
            var10 = var5.Array;
            var9 = var10.from;
            var7 = var9.bind(var10)(var3);
 264:
            var6 = var7;
            _fun0001_ip = 282; continue _fun0001;
 269:
            var7 = _closure1_slot12;
            var6 = var7.bind(var8)(var3, var8);
 282:
            var4 = var6;
            if(var4) { _fun0001_ip = 322; continue _fun0001 }
 288:
            var7 = var5.TypeError;
            var5 = var7.prototype;
            var6 = Object.create(var5, {constructor: {value: var7}});
            var13 = 'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.';
            var14 = var6;
            var5 = new var14[var7](var13, var12);
            var5 = var5 instanceof Object ? var5 : var6;
            throw var5;
 322:
            if(!var4) { _fun0001_ip = 329; continue _fun0001 }
 325:
            _closure2_slot0 = var4;
 329:
            var4 = 0;
            var _closure2_slot1 = var4;
            var1 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var2 = _closure2_slot1;
                    var1 = _closure2_slot0;
                    var1 = var1.length;
                    if(!(!(var2 >= var1))) { _fun0002_ip = 56; continue _fun0002 }
 20:
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
                    _fun0002_ip = 67; continue _fun0002;
 56:
                    var2 = {};
                    var3 = true;
                    var2['done'] = var3;
                    var1 = var2;
 67:
                    return var1;
                }
            };
            return var1;
 344:
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
 0:
            var4 = arg1;
            var1 = null;
            var3 = undefined;
            var1 = var1 == var3;
            if(var1) { _fun0003_ip = 23; continue _fun0003 }
 14:
            var2 = var4.length;
            var1 = var3 > var2;
 23:
            var2 = undefined;
            if(!var1) { _fun0003_ip = 33; continue _fun0003 }
 28:
            var2 = var4.length;
 33:
            var1 = global;
            var1 = var1.Array;
            var1 = var1.bind(var3)(var2);
            var3 = 0;
            var5 = var3 < var2;
            if(!var5) { _fun0003_ip = 70; continue _fun0003 }
 55:
            var5 = var4[var3];
            var1[var3] = var5;
            var3 = var3 + 1;
            if(var3 < var2) { _fun0003_ip = 55; continue _fun0003 }
 70:
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
    var4 = native4;
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
 0:
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
 0:
                        var2 = _closure1_slot5;
                        var1 = var2.getConnectedActivityLocation;
                        var6 = var1.bind(var2)();
                        var1 = null;
                        if(!(var1 != var6)) { _fun0005_ip = 242; continue _fun0005 }
 26:
                        var7 = _closure1_slot7;
                        var5 = var7.getChannel;
                        var2 = _closure3_slot0;
                        var5 = var5.bind(var7)(var2);
                        if(!(var1 != var5)) { _fun0005_ip = 75; continue _fun0005 }
 51:
                        var2 = var5.isVocal;
                        var2 = var2.bind(var5)();
                        if(!var2) { _fun0005_ip = 75; continue _fun0005 }
 64:
                        var2 = _closure3_slot2;
                        if(var2) { _fun0005_ip = 75; continue _fun0005 }
 71:
                        var2 = false;
                        return var2;
 75:
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
                        if(!var1) { _fun0005_ip = 174; continue _fun0005 }
 143:
                        var7 = _closure1_slot0;
                        var10 = _closure1_slot2;
                        var2 = 11;
                        var2 = var10[var2];
                        var7 = var7.bind(var9)(var2);
                        var2 = var7.isActivityInTextSupportedForChannel;
                        var1 = var2.bind(var7)(var8);
 174:
                        if(!var1) { _fun0005_ip = 185; continue _fun0005 }
 177:
                        var2 = _closure3_slot0;
                        var1 = var5 !== var2;
 185:
                        var2 = _closure1_slot10;
                        var2 = var2.PIP;
                        var2 = var6 === var2;
                        if(!var2) { _fun0005_ip = 234; continue _fun0005 }
 202:
                        var6 = _closure3_slot1;
                        var3 = _closure1_slot9;
                        var3 = var3.PIP;
                        var3 = var6 === var3;
                        if(var3) { _fun0005_ip = 231; continue _fun0005 }
 223:
                        var4 = _closure3_slot0;
                        var3 = var5 !== var4;
 231:
                        var2 = var3;
 234:
                        if(!var1) { _fun0005_ip = 240; continue _fun0005 }
 237:
                        var1 = var2;
 240:
                        return var1;
 242:
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
            if(var14) { _fun0004_ip = 424; continue _fun0004 }
 419:
            var13 = var1.id;
 424:
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
 0:
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
 0:
                            var2 = _closure3_slot2;
                            if(!var2) { _fun0007_ip = 24; continue _fun0007 }
 10:
                            var2 = _closure3_slot1;
                            var1 = _closure3_slot0;
                            var2['current'] = var1;
 24:
                            var1 = undefined;
                            return var1;
                        }
                    };
                    var4 = var5.bind(var6)(var4);
                    if(var3) { _fun0006_ip = 94; continue _fun0006 }
 89:
                    var1 = var2.current;
 94:
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
 0:
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
                        if(var5) { _fun0008_ip = 101; continue _fun0008 }
 52:
                        var10 = var7.value;
                        var12 = _closure1_slot6;
                        var11 = var12.getParticipant;
                        var5 = _closure2_slot0;
                        var5 = var11.bind(var12)(var5, var10);
                        var3 = var10;
                        if(!(var6 == var5)) { _fun0008_ip = 101; continue _fun0008 }
 84:
                        var10 = var8.bind(var1)();
                        var5 = var10.done;
                        var7 = var10;
                        var3 = undefined;
                        if(!var5) { _fun0008_ip = 52; continue _fun0008 }
 101:
                        var _closure4_slot0 = var3;
                        var5 = _closure2_slot5;
                        var5 = var5.current;
                        var5 = var3 !== var5;
                        if(!var5) { _fun0008_ip = 125; continue _fun0008 }
 121:
                        var5 = var6 != var3;
 125:
                        if(!var5) { _fun0008_ip = 168; continue _fun0008 }
 128:
                        var5 = _closure2_slot5;
                        var5 = var5.current;
                        if(!(var6 != var5)) { _fun0008_ip = 159; continue _fun0008 }
 141:
                        var5 = _closure2_slot6;
                        var4 = function() {
                            var3 = _closure2_slot4;
                            var2 = _closure4_slot0;
                            var1 = undefined;
                            var1 = var3.bind(var1)(var2);
                            return var1;
                        };
                        var4 = var5.bind(var1)(var4);
                        _fun0008_ip = 168; continue _fun0008;
 159:
                        var2 = _closure2_slot4;
                        var2 = var2.bind(var1)(var3);
 168:
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
 0:
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
                            if(!var3) { _fun0009_ip = 68; continue _fun0009 }
 65:
                            var1 = var2;
 68:
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