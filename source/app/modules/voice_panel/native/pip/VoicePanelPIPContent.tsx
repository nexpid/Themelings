// app/modules/voice_panel/native/pip/VoicePanelPIPContent.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var12 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var12;
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
            var9 = _closure1_slot31;
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
            var7 = _closure1_slot31;
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
    var _closure1_slot30 = var1;
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
    var _closure1_slot31 = var1;
    var1 = function VideoStream(arg1) {
        var5 = arg1;
        var9 = _closure1_slot4;
        var8 = var9.useContext;
        var2 = _closure1_slot1;
        var6 = _closure1_slot2;
        var4 = 17;
        var7 = var6[var4];
        var4 = undefined;
        var7 = var2.bind(var4)(var7);
        var7 = var8.bind(var9)(var7);
        var9 = var7.streamOutputSinkStack;
        var10 = var5.streamId;
        var _closure2_slot0 = var10;
        var8 = _closure1_slot0;
        var7 = 18;
        var7 = var6[var7];
        var8 = var8.bind(var4)(var7);
        var7 = var8.useSetHasActiveVideoOutputSink;
        var11 = var7.bind(var8)(var9);
        var _closure2_slot1 = var11;
        var9 = _closure1_slot4;
        var8 = var9.useEffect;
        var7 = new Array(2);
        var7[0] = var11;
        var7[1] = var10;
        var3 = function() {
            _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                var3 = _closure2_slot0;
                var2 = null;
                if(!(var2 == var3)) { _fun0004_ip = 36; continue _fun0004 }
case 37:
                var2 = undefined;
                return var2;
case 36:
                var4 = _closure2_slot1;
                var3 = _closure2_slot0;
                var2 = undefined;
                var1 = true;
                var1 = var4.bind(var2)(var3, var1);
                var1 = function() {
                    var4 = _closure2_slot1;
                    var3 = _closure2_slot0;
                    var1 = undefined;
                    var2 = false;
                    var2 = var4.bind(var1)(var3, var2);
                    return var1;
                };
                return var1;
            }
        };
        var3 = var8.bind(var9)(var3, var7);
        var3 = _closure1_slot19;
        var1 = 19;
        var1 = var6[var1];
        var2 = var2.bind(var4)(var1);
        var1 = {};
        var13 = var1;
        var12 = var5;
        var5 = copyDataProperties(var13, var12);
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var _closure1_slot32 = var1;
    var1 = function markContentReady() {
        var4 = _closure1_slot0;
        var3 = _closure1_slot2;
        var1 = 20;
        var3 = var3[var1];
        var1 = undefined;
        var3 = var4.bind(var1)(var3);
        var4 = var3.ComponentDispatch;
        var3 = var4.dispatch;
        var2 = _closure1_slot14;
        var2 = var2.VOICE_PANEL_PIP_CONTENT_READY;
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var _closure1_slot33 = var1;
    var1 = function useTransitionStyles(arg1, arg2, arg3) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
            var2 = arg1;
            var3 = arg2;
            var8 = arg3;
            var _closure2_slot0 = var3;
            var _closure2_slot1 = var8;
            var7 = _closure1_slot4;
            var6 = var7.useEffect;
            var5 = new Array(2);
            var5[0] = var3;
            var5[1] = var8;
            var4 = function() {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                    var5 = function handleVideoReady() {
                        var2 = global;
                        var4 = var2.clearTimeout;
                        var3 = _closure3_slot0;
                        var1 = undefined;
                        var3 = var4.bind(var1)(var3);
                        var4 = var2.setTimeout;
                        var3 = function() {
                            _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                                var3 = _closure2_slot1;
                                var1 = null;
                                var4 = var1 == var3;
                                var3 = undefined;
                                var1 = undefined;
                                if(var4) { _fun0007_ip = 34; continue _fun0007 }
case 29:
                                var2 = _closure2_slot1;
                                var1 = var2.bind(var3)();
case 34:
                                return var1;
                            }
                        };
                        var2 = 17;
                        var2 = var4.bind(var1)(var3, var2);
                        return var1;
                    };
                    var _closure3_slot1 = var5;
                    var4 = _closure2_slot0;
                    var7 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var3 = 21;
                    var3 = var6[var3];
                    var6 = undefined;
                    var3 = var7.bind(var6)(var3);
                    var3 = var3.TransitionStates;
                    var3 = var3.YEETED;
                    if(!(var4 !== var3)) { _fun0006_ip = 38; continue _fun0006 }
case 7:
                    return var6;
case 38:
                    var3 = global;
                    var7 = var3.setTimeout;
                    var4 = function() {
                        _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                            var3 = _closure2_slot1;
                            var1 = null;
                            var4 = var1 == var3;
                            var3 = undefined;
                            var1 = undefined;
                            if(var4) { _fun0008_ip = 34; continue _fun0008 }
case 29:
                            var2 = _closure2_slot1;
                            var1 = var2.bind(var3)();
case 34:
                            return var1;
                        }
                    };
                    var3 = 500;
                    var3 = var7.bind(var6)(var4, var3);
                    var _closure3_slot0 = var3;
                    var4 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var3 = 20;
                    var3 = var7[var3];
                    var3 = var4.bind(var6)(var3);
                    var4 = var3.ComponentDispatch;
                    var3 = var4.subscribe;
                    var2 = _closure1_slot14;
                    var2 = var2.VOICE_PANEL_PIP_CONTENT_READY;
                    var2 = var3.bind(var4)(var2, var5);
                    var1 = function() {
                        var4 = _closure1_slot0;
                        var3 = _closure1_slot2;
                        var1 = 20;
                        var3 = var3[var1];
                        var1 = undefined;
                        var3 = var4.bind(var1)(var3);
                        var6 = var3.ComponentDispatch;
                        var5 = var6.unsubscribe;
                        var2 = _closure1_slot14;
                        var4 = var2.VOICE_PANEL_PIP_CONTENT_READY;
                        var3 = _closure3_slot1;
                        var3 = var5.bind(var6)(var4, var3);
                        var3 = global;
                        var3 = var3.clearTimeout;
                        var2 = _closure3_slot0;
                        var2 = var3.bind(var1)(var2);
                        return var1;
                    };
                    return var1;
                }
            };
            var4 = var6.bind(var7)(var4, var5);
            var5 = _closure1_slot0;
            var4 = _closure1_slot2;
            var1 = 21;
            var4 = var4[var1];
            var1 = undefined;
            var1 = var5.bind(var1)(var4);
            var1 = var1.TransitionStates;
            var1 = var1.YEETED;
            if(!(var3 !== var1)) { _fun0005_ip = 39; continue _fun0005 }
case 40:
            var1 = var2.onBottom;
            _fun0005_ip = 41; continue _fun0005;
case 39:
            var1 = var2.onTop;
case 41:
            return var1;
        }
    };
    var _closure1_slot34 = var1;
    var1 = function InnerStroke(arg1) {
        var1 = arg1;
        var9 = var1.style;
        var _closure2_slot0 = var9;
        var2 = _closure1_slot0;
        var7 = _closure1_slot2;
        var1 = 22;
        var1 = var7[var1];
        var4 = undefined;
        var2 = var2.bind(var4)(var1);
        var1 = var2.usePIPState;
        var1 = var1.bind(var2)();
        var12 = var1.width;
        var _closure2_slot1 = var12;
        var11 = var1.height;
        var _closure2_slot2 = var11;
        var1 = _closure1_slot21;
        var10 = var1.bind(var4)();
        var _closure2_slot3 = var10;
        var3 = _closure1_slot19;
        var2 = _closure1_slot1;
        var1 = 23;
        var1 = var7[var1];
        var2 = var2.bind(var4)(var1);
        var1 = {};
        var8 = _closure1_slot4;
        var7 = var8.useMemo;
        var6 = new Array(4);
        var6[0] = var12;
        var6[1] = var11;
        var10 = var10.innerStroke;
        var6[2] = var10;
        var6[3] = var9;
        var5 = function() {
            var1 = _closure2_slot3;
            var3 = var1.innerStroke;
            var1 = new Array(3);
            var1[0] = var3;
            var3 = {};
            var6 = _closure1_slot0;
            var5 = _closure1_slot2;
            var4 = 24;
            var5 = var5[var4];
            var4 = undefined;
            var7 = var6.bind(var4)(var5);
            var6 = var7.getVoicePanelPIPBorderRadius;
            var5 = _closure2_slot1;
            var4 = _closure2_slot2;
            var5 = var6.bind(var7)(var5, var4);
            var4 = 1;
            var4 = var5 + var4;
            var3['borderRadius'] = var4;
            var1[1] = var3;
            var2 = _closure2_slot0;
            var1[2] = var2;
            return var1;
        };
        var5 = var7.bind(var8)(var5, var6);
        var1['style'] = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var _closure1_slot35 = var1;
    var1 = function ActivityInVoice(arg1) {
        _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
            var2 = arg1;
            var1 = var2.participantId;
            var _closure2_slot0 = var1;
            var13 = var2.transitionState;
            var3 = var2.transitionCleanUp;
            var2 = _closure1_slot21;
            var6 = undefined;
            var7 = var2.bind(var6)();
            var2 = _closure1_slot34;
            var10 = var2.bind(var6)(var7, var13, var3);
            var5 = _closure1_slot4;
            var3 = var5.useContext;
            var9 = _closure1_slot1;
            var16 = _closure1_slot2;
            var2 = 17;
            var2 = var16[var2];
            var2 = var9.bind(var6)(var2);
            var2 = var3.bind(var5)(var2);
            var18 = var2.channelId;
            var _closure2_slot1 = var18;
            var14 = var2.layoutManager;
            var _closure2_slot2 = var14;
            var12 = var2.windowDimensions;
            var _closure2_slot3 = var12;
            var15 = _closure1_slot0;
            var2 = 25;
            var3 = var16[var2];
            var11 = var15.bind(var6)(var3);
            var9 = var11.useStateFromStores;
            var3 = _closure1_slot10;
            var5 = new Array(1);
            var5[0] = var3;
            var3 = function() {
                var3 = _closure1_slot10;
                var2 = var3.getChannel;
                var1 = _closure2_slot1;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var11 = var9.bind(var11)(var5, var3);
            var9 = _closure1_slot4;
            var5 = var9.useState;
            var3 = 21;
            var3 = var16[var3];
            var3 = var15.bind(var6)(var3);
            var3 = var3.TransitionStates;
            var3 = var3.MOUNTED;
            var3 = var13 === var3;
            var9 = var5.bind(var9)(var3);
            var5 = _closure1_slot3;
            var3 = 2;
            var9 = var5.bind(var6)(var9, var3);
            var3 = 0;
            var3 = var9[var3];
            var _closure2_slot4 = var3;
            var5 = 1;
            var5 = var9[var5];
            var _closure2_slot5 = var5;
            var5 = var16[var2];
            var17 = var15.bind(var6)(var5);
            var13 = var17.useStateFromStores;
            var5 = _closure1_slot6;
            var9 = new Array(1);
            var9[0] = var5;
            var5 = new Array(2);
            var5[0] = var18;
            var5[1] = var1;
            var1 = function() {
                _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
                    var6 = _closure1_slot6;
                    var5 = var6.getParticipant;
                    var4 = _closure2_slot1;
                    var1 = _closure2_slot0;
                    var1 = var5.bind(var6)(var4, var1);
                    var4 = null;
                    if(!(var4 != var1)) { _fun0010_ip = 42; continue _fun0010 }
case 43:
                    var4 = var1.type;
                    var3 = _closure1_slot17;
                    var3 = var3.ACTIVITY;
                    if(!(var4 === var3)) { _fun0010_ip = 42; continue _fun0010 }
case 4:
                    var1 = var1.applicationId;
                    _fun0010_ip = 44; continue _fun0010;
case 42:
                    var1 = _closure2_slot0;
case 44:
                    return var1;
                }
            };
            var1 = var13.bind(var17)(var9, var1, var5);
            var _closure2_slot6 = var1;
            var2 = var16[var2];
            var17 = var15.bind(var6)(var2);
            var13 = var17.useStateFromStores;
            var2 = _closure1_slot5;
            var9 = new Array(1);
            var9[0] = var2;
            var5 = new Array(1);
            var5[0] = var1;
            var2 = function() {
                var3 = _closure1_slot5;
                var2 = var3.getPipOrientationLockStateForApp;
                var1 = _closure2_slot6;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var13 = var13.bind(var17)(var9, var2, var5);
            var _closure2_slot7 = var13;
            var9 = _closure1_slot4;
            var5 = var9.useCallback;
            var2 = new Array(3);
            var2[0] = var14;
            var2[1] = var13;
            var2[2] = var1;
            var1 = function(arg1) {
                _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
                    var1 = arg1;
                    var2 = var1.width;
                    var1 = var1.height;
                    var8 = var2 > var1;
                    var3 = _closure2_slot7;
                    var4 = _closure1_slot16;
                    var4 = var4.LANDSCAPE;
                    if(!(var4 !== var3)) { _fun0011_ip = 45; continue _fun0011 }
case 46:
                    var4 = _closure1_slot16;
                    var4 = var4.PORTRAIT;
                    if(!(var4 !== var3)) { _fun0011_ip = 47; continue _fun0011 }
case 4:
                    var2 = _closure1_slot16;
                    var2 = var2.UNLOCKED;
                    if(!(var2 !== var3)) { _fun0011_ip = 48; continue _fun0011 }
case 49:
                    var2 = null;
                    if(!(var2 === var3)) { _fun0011_ip = 50; continue _fun0011 }
case 48:
                    var6 = _closure2_slot2;
                    var5 = var6.setTargetDimensions;
                    var4 = _closure2_slot6;
                    var7 = 9;
                    var3 = var7;
                    if(!var8) { _fun0011_ip = 51; continue _fun0011 }
case 52:
                    var3 = 16;
case 51:
                    var2 = 16;
                    if(!var8) { _fun0011_ip = 13; continue _fun0011 }
case 53:
                    var2 = var7;
case 13:
                    var2 = var5.bind(var6)(var4, var3, var2);
                    _fun0011_ip = 50; continue _fun0011;
case 47:
                    var6 = _closure2_slot2;
                    var5 = var6.setTargetDimensions;
                    var4 = _closure2_slot6;
                    var3 = 9;
                    var2 = 16;
                    var2 = var5.bind(var6)(var4, var3, var2);
                    _fun0011_ip = 50; continue _fun0011;
case 45:
                    var5 = _closure2_slot2;
                    var4 = var5.setTargetDimensions;
                    var3 = _closure2_slot6;
                    var2 = 16;
                    var1 = 9;
                    var1 = var4.bind(var5)(var3, var2, var1);
case 50:
                    var1 = undefined;
                    return var1;
                }
            };
            var13 = var5.bind(var9)(var1, var2);
            var _closure2_slot8 = var13;
            var9 = _closure1_slot4;
            var5 = var9.useLayoutEffect;
            var2 = new Array(1);
            var2[0] = var13;
            var1 = function() {
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 26;
                var2 = var2[var1];
                var1 = undefined;
                var3 = var3.bind(var1)(var2);
                var2 = var3.getWindowDimensions;
                var4 = var2.bind(var3)();
                var3 = _closure2_slot8;
                var2 = {};
                var7 = var2;
                var6 = var4;
                var5 = copyDataProperties(var7, var6);
                var5 = var4.width;
                var4 = var4.height;
                var5 = var5 > var4;
                var4 = 'landscape';
                var2[var4] = var5;
                var2 = var3.bind(var1)(var2);
                return var1;
            };
            var1 = var5.bind(var9)(var1, var2);
            var14 = 27;
            var1 = var16[var14];
            var9 = var15.bind(var6)(var1);
            var5 = var9.useAnimatedReaction;
            var2 = function p() {
                var2 = _closure2_slot3;
                var1 = var2.get;
                var1 = var1.bind(var2)();
                return var1;
            };
            var1 = {};
            var1['windowDimensions'] = var12;
            var2['__closure'] = var1;
            var1 = 20962628184.0;
            var2['__workletHash'] = var1;
            var1 = _closure1_slot22;
            var2['__initData'] = var1;
            var1 = function l(arg1, arg2) {
                _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
case 0:
                    var3 = arg1;
                    var1 = arg2;
                    if(!(var3 !== var1)) { _fun0012_ip = 54; continue _fun0012 }
case 55:
                    var4 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 27;
                    var1 = var2[var1];
                    var2 = undefined;
                    var5 = var4.bind(var2)(var1);
                    var4 = var5.runOnJS;
                    var1 = _closure2_slot8;
                    var1 = var4.bind(var5)(var1);
                    var1 = var1.bind(var2)(var3);
case 54:
                    var1 = undefined;
                    return var1;
                }
            };
            var12 = {};
            var14 = var16[var14];
            var14 = var15.bind(var6)(var14);
            var14 = var14.runOnJS;
            var12['runOnJS'] = var14;
            var12['handleTargetAspectRatioParams'] = var13;
            var1['__closure'] = var12;
            var12 = 10001753822389.0;
            var1['__workletHash'] = var12;
            var12 = _closure1_slot23;
            var1['__initData'] = var12;
            var1 = var5.bind(var9)(var2, var1);
            var1 = null;
            var2 = var1 != var11;
            var _closure2_slot9 = var2;
            var12 = _closure1_slot4;
            var9 = var12.useEffect;
            var5 = new Array(2);
            var5[0] = var2;
            var5[1] = var3;
            var4 = function() {
                _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
case 0:
                    var3 = _closure2_slot4;
                    if(var3) { _fun0013_ip = 56; continue _fun0013 }
case 57:
                    var3 = _closure2_slot9;
                    if(!var3) { _fun0013_ip = 56; continue _fun0013 }
case 58:
                    var4 = _closure1_slot33;
                    var3 = undefined;
                    var3 = var4.bind(var3)();
                    _fun0013_ip = 46; continue _fun0013;
case 56:
                    var2 = _closure2_slot4;
                    if(var2) { _fun0013_ip = 59; continue _fun0013 }
case 46:
                    var2 = undefined;
                    return var2;
case 59:
                    var2 = global;
                    var5 = var2.setTimeout;
                    var4 = undefined;
                    var3 = function() {
                        var3 = _closure2_slot5;
                        var1 = undefined;
                        var2 = false;
                        var2 = var3.bind(var1)(var2);
                        var2 = _closure1_slot33;
                        var2 = var2.bind(var1)();
                        return var1;
                    };
                    var2 = 500;
                    var2 = var5.bind(var4)(var3, var2);
                    var _closure3_slot0 = var2;
                    var1 = function() {
                        var1 = global;
                        var3 = var1.clearTimeout;
                        var2 = _closure3_slot0;
                        var1 = undefined;
                        var2 = var3.bind(var1)(var2);
                        return var1;
                    };
                    return var1;
                }
            };
            var4 = var9.bind(var12)(var4, var5);
            if(var3) { _fun0009_ip = 60; continue _fun0009 }
case 61:
            if(var2) { _fun0009_ip = 62; continue _fun0009 }
case 63:
            var4 = _closure1_slot19;
            var3 = _closure1_slot37;
            var2 = {};
            var9 = _closure1_slot9;
            var5 = var9.getId;
            var5 = var5.bind(var9)();
            var2['participantId'] = var5;
            var2 = var4.bind(var6)(var3, var2);
            _fun0009_ip = 64; continue _fun0009;
case 62:
            var5 = _closure1_slot20;
            var9 = _closure1_slot1;
            var12 = _closure1_slot2;
            var3 = 23;
            var3 = var12[var3];
            var4 = var9.bind(var6)(var3);
            var3 = {};
            var13 = var7.activity;
            var7 = new Array(2);
            var7[0] = var13;
            var7[1] = var10;
            var3['style'] = var7;
            var10 = _closure1_slot19;
            var7 = 28;
            var7 = var12[var7];
            var9 = var9.bind(var6)(var7);
            var7 = {};
            var7['channel'] = var11;
            var11 = _closure1_slot15;
            var11 = var11.PIP;
            var7['layoutMode'] = var11;
            var9 = var10.bind(var6)(var9, var7);
            var7 = new Array(2);
            var7[0] = var9;
            var10 = _closure1_slot19;
            var9 = _closure1_slot35;
            var8 = {};
            var8 = var10.bind(var6)(var9, var8);
            var7[1] = var8;
            var3['children'] = var7;
            var2 = var5.bind(var6)(var4, var3);
case 64:
            var1 = var2;
case 60:
            return var1;
        }
    };
    var _closure1_slot36 = var1;
    var1 = function User(arg1) {
        _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
case 0:
            var1 = arg1;
            var10 = var1.participantId;
            var _closure2_slot0 = var10;
            var5 = var1.transitionState;
            var3 = var1.transitionCleanUp;
            var4 = undefined;
            var _closure2_slot7 = var4;
            var _closure2_slot8 = var4;
            var _closure2_slot9 = var4;
            var _closure2_slot10 = var4;
            var1 = _closure1_slot21;
            var14 = var1.bind(var4)();
            var _closure2_slot1 = var14;
            var1 = _closure1_slot34;
            var11 = var1.bind(var4)(var14, var5, var3);
            var _closure2_slot2 = var11;
            var6 = _closure1_slot4;
            var5 = var6.useContext;
            var8 = _closure1_slot1;
            var1 = _closure1_slot2;
            var3 = 17;
            var3 = var1[var3];
            var3 = var8.bind(var4)(var3);
            var3 = var5.bind(var6)(var3);
            var6 = var3.channelId;
            var _closure2_slot3 = var6;
            var29 = var3.guildId;
            var20 = var3.focused;
            var _closure2_slot4 = var20;
            var19 = var3.mode;
            var _closure2_slot5 = var19;
            var3 = var3.layoutManager;
            var _closure2_slot6 = var3;
            var8 = _closure1_slot0;
            var5 = 25;
            var1 = var1[var5];
            var12 = var8.bind(var4)(var1);
            var9 = var12.useStateFromStores;
            var1 = _closure1_slot6;
            var8 = new Array(1);
            var8[0] = var1;
            var1 = function() {
                _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
case 0:
                    var5 = _closure1_slot6;
                    var4 = var5.getParticipant;
                    var2 = _closure2_slot3;
                    var1 = _closure2_slot0;
                    var5 = var4.bind(var5)(var2, var1);
                    var4 = null;
                    var6 = var4 != var5;
                    var2 = undefined;
                    if(!var6) { _fun0015_ip = 65; continue _fun0015 }
case 46:
                    var2 = var5;
case 65:
                    var5 = var4 == var2;
                    var4 = undefined;
                    if(var5) { _fun0015_ip = 66; continue _fun0015 }
case 67:
                    var4 = var2.type;
case 66:
                    var3 = _closure1_slot17;
                    var3 = var3.USER;
                    var1 = undefined;
                    if(!(var4 === var3)) { _fun0015_ip = 68; continue _fun0015 }
case 69:
                    var1 = var2;
case 68:
                    return var1;
                }
            };
            var15 = var9.bind(var12)(var8, var1);
            var12 = null;
            var1 = var12 == var15;
            var28 = undefined;
            if(var1) { _fun0014_ip = 70; continue _fun0014 }
case 71:
            var28 = var15.user;
case 70:
            if(!(var12 == var28)) { _fun0014_ip = 72; continue _fun0014 }
case 73:
            var8 = _closure1_slot11;
            var1 = var8.getCurrentUser;
            var28 = var1.bind(var8)();
case 72:
            var8 = _closure1_slot0;
            var1 = _closure1_slot2;
            var25 = 29;
            var1 = var1[var25];
            var9 = var8.bind(var4)(var1);
            var8 = var9.useDominantColorFromImage;
            var13 = var12 == var28;
            var1 = undefined;
            if(var13) { _fun0014_ip = 74; continue _fun0014 }
case 75:
            var17 = var28.getAvatarURL;
            var16 = 80;
            var13 = false;
            var1 = var17.bind(var28)(var29, var16, var13);
case 74:
            var1 = var8.bind(var9)(var1);
            _closure2_slot7 = var1;
            var13 = _closure1_slot4;
            var9 = var13.useMemo;
            var8 = new Array(3);
            var8[0] = var14;
            var8[1] = var11;
            var8[2] = var1;
            var1 = function() {
                var1 = _closure2_slot1;
                var2 = var1.user;
                var1 = new Array(3);
                var1[0] = var2;
                var2 = _closure2_slot2;
                var1[1] = var2;
                var2 = {};
                var3 = _closure2_slot7;
                var2['backgroundColor'] = var3;
                var1[2] = var2;
                return var1;
            };
            var1 = var9.bind(var13)(var1, var8);
            var9 = _closure1_slot4;
            var8 = var9.useState;
            var27 = false;
            var13 = var8.bind(var9)(var27);
            var9 = _closure1_slot3;
            var8 = 2;
            var9 = var9.bind(var4)(var13, var8);
            var8 = 0;
            var16 = var9[var8];
            var8 = 1;
            var8 = var9[var8];
            _closure2_slot8 = var8;
            var13 = _closure1_slot4;
            var9 = var13.useCallback;
            var8 = new Array(1);
            var8[0] = var6;
            var6 = function(arg1, arg2) {
                _fun0016: for(var _fun0016_ip = 0; ; ) switch(_fun0016_ip) {
case 0:
                    var7 = arg1;
                    var2 = null;
                    var3 = var2 != var7;
                    var1 = undefined;
                    var5 = undefined;
                    if(!var3) { _fun0016_ip = 76; continue _fun0016 }
case 77:
                    var6 = _closure1_slot6;
                    var4 = var6.getParticipant;
                    var3 = _closure2_slot3;
                    var5 = var4.bind(var6)(var3, var7);
case 76:
                    var3 = _closure2_slot8;
                    var2 = var2 != var5;
                    if(!var2) { _fun0016_ip = 78; continue _fun0016 }
case 28:
                    var4 = _closure1_slot18;
                    var2 = var4.bind(var1)(var5);
case 78:
                    if(!var2) { _fun0016_ip = 79; continue _fun0016 }
case 80:
                    var4 = _closure1_slot12;
                    var5 = var4.PANEL;
                    var4 = arg2;
                    var2 = var4 === var5;
case 79:
                    var2 = var3.bind(var1)(var2);
                    return var1;
                }
            };
            var21 = var9.bind(var13)(var6, var8);
            _closure2_slot9 = var21;
            var6 = _closure1_slot0;
            var8 = _closure1_slot2;
            var22 = 27;
            var9 = var8[var22];
            var18 = var6.bind(var4)(var9);
            var17 = var18.useAnimatedReaction;
            var13 = function h() {
                _fun0017: for(var _fun0017_ip = 0; ; ) switch(_fun0017_ip) {
case 0:
                    var2 = _closure2_slot4;
                    var1 = var2.get;
                    var2 = var1.bind(var2)();
                    var1 = null;
                    var3 = var1 == var2;
                    var1 = undefined;
                    if(var3) { _fun0017_ip = 81; continue _fun0017 }
case 82:
                    var1 = var2.id;
case 81:
                    return var1;
                }
            };
            var9 = {};
            var9['focused'] = var20;
            var13['__closure'] = var9;
            var9 = 3980010676581.0;
            var13['__workletHash'] = var9;
            var9 = _closure1_slot24;
            var13['__initData'] = var9;
            var9 = function c(arg1, arg2) {
                _fun0018: for(var _fun0018_ip = 0; ; ) switch(_fun0018_ip) {
case 0:
                    var4 = arg1;
                    var1 = arg2;
                    if(!(var4 !== var1)) { _fun0018_ip = 80; continue _fun0018 }
case 55:
                    var2 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var1 = 27;
                    var1 = var3[var1];
                    var3 = undefined;
                    var6 = var2.bind(var3)(var1);
                    var5 = var6.runOnJS;
                    var2 = _closure2_slot9;
                    var2 = var5.bind(var6)(var2);
                    var5 = _closure2_slot5;
                    var1 = var5.get;
                    var1 = var1.bind(var5)();
                    var1 = var2.bind(var3)(var4, var1);
case 80:
                    var1 = undefined;
                    return var1;
                }
            };
            var23 = {};
            var24 = var8[var22];
            var24 = var6.bind(var4)(var24);
            var24 = var24.runOnJS;
            var23['runOnJS'] = var24;
            var23['updateIsActivityFocused'] = var21;
            var23['mode'] = var19;
            var9['__closure'] = var23;
            var23 = 5971237403457.0;
            var9['__workletHash'] = var23;
            var23 = _closure1_slot25;
            var9['__initData'] = var23;
            var9 = var17.bind(var18)(var13, var9);
            var9 = var8[var22];
            var18 = var6.bind(var4)(var9);
            var17 = var18.useAnimatedReaction;
            var13 = function S() {
                var2 = _closure2_slot5;
                var1 = var2.get;
                var1 = var1.bind(var2)();
                return var1;
            };
            var9 = {};
            var9['mode'] = var19;
            var13['__closure'] = var9;
            var9 = 8288240256860.0;
            var13['__workletHash'] = var9;
            var9 = _closure1_slot26;
            var13['__initData'] = var9;
            var9 = function v(arg1, arg2) {
                _fun0019: for(var _fun0019_ip = 0; ; ) switch(_fun0019_ip) {
case 0:
                    var4 = arg1;
                    var1 = arg2;
                    if(!(var4 !== var1)) { _fun0019_ip = 83; continue _fun0019 }
case 55:
                    var2 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var1 = 27;
                    var1 = var3[var1];
                    var3 = undefined;
                    var6 = var2.bind(var3)(var1);
                    var5 = var6.runOnJS;
                    var2 = _closure2_slot9;
                    var2 = var5.bind(var6)(var2);
                    var5 = _closure2_slot4;
                    var1 = var5.get;
                    var5 = var1.bind(var5)();
                    var1 = null;
                    var6 = var1 == var5;
                    var1 = undefined;
                    if(var6) { _fun0019_ip = 84; continue _fun0019 }
case 85:
                    var1 = var5.id;
case 84:
                    var1 = var2.bind(var3)(var1, var4);
case 83:
                    var1 = undefined;
                    return var1;
                }
            };
            var19 = {};
            var22 = var8[var22];
            var22 = var6.bind(var4)(var22);
            var22 = var22.runOnJS;
            var19['runOnJS'] = var22;
            var19['updateIsActivityFocused'] = var21;
            var19['focused'] = var20;
            var9['__closure'] = var19;
            var19 = 12552370107483.0;
            var9['__workletHash'] = var19;
            var19 = _closure1_slot27;
            var9['__initData'] = var19;
            var9 = var17.bind(var18)(var13, var9);
            var5 = var8[var5];
            var17 = var6.bind(var4)(var5);
            var13 = var17.useStateFromStoresObject;
            var5 = _closure1_slot7;
            var9 = new Array(1);
            var9[0] = var5;
            var5 = function() {
                var1 = {};
                var4 = _closure1_slot7;
                var3 = var4.isReactingToThermalState;
                var3 = var3.bind(var4)();
                var1['isReactingToThermalState'] = var3;
                var3 = _closure1_slot7;
                var2 = var3.consumedRequestToRespondToSeriousThermalState;
                var2 = var2.bind(var3)();
                var1['consumedRequestToRespondToSeriousThermalState'] = var2;
                return var1;
            };
            var9 = var13.bind(var17)(var9, var5);
            var5 = var9.isReactingToThermalState;
            var9 = var9.consumedRequestToRespondToSeriousThermalState;
            var18 = _closure1_slot4;
            var17 = var18.useCallback;
            var13 = new Array(2);
            var13[0] = var3;
            var13[1] = var10;
            var3 = function(arg1) {
                var1 = arg1;
                var1 = var1.nativeEvent;
                var5 = var1.width;
                var4 = var1.height;
                var3 = _closure2_slot6;
                var2 = var3.setTargetDimensions;
                var1 = _closure2_slot0;
                var1 = var2.bind(var3)(var1, var5, var4);
                var1 = undefined;
                return var1;
            };
            var13 = var17.bind(var18)(var3, var13);
            var3 = 30;
            var3 = var8[var3];
            var6 = var6.bind(var4)(var3);
            var3 = var6.useCanRenderParticipantVideo;
            var6 = var3.bind(var6)(var15);
            if(!var6) { _fun0014_ip = 86; continue _fun0014 }
case 87:
            var3 = var16;
            if(!var3) { _fun0014_ip = 88; continue _fun0014 }
case 89:
            var3 = var5;
case 88:
            var6 = !var3;
case 86:
            _closure2_slot10 = var6;
            var8 = _closure1_slot4;
            var5 = var8.useEffect;
            var3 = new Array(1);
            var3[0] = var6;
            var2 = function() {
                _fun0020: for(var _fun0020_ip = 0; ; ) switch(_fun0020_ip) {
case 0:
                    var1 = _closure2_slot10;
                    if(var1) { _fun0020_ip = 31; continue _fun0020 }
case 55:
                    var2 = _closure1_slot33;
                    var1 = undefined;
                    var1 = var2.bind(var1)();
case 31:
                    var1 = undefined;
                    return var1;
                }
            };
            var2 = var5.bind(var8)(var2, var3);
            var3 = _closure1_slot20;
            var5 = _closure1_slot1;
            var2 = _closure1_slot2;
            var8 = 23;
            var2 = var2[var8];
            var2 = var5.bind(var4)(var2);
            var5 = {};
            if(var6) { _fun0014_ip = 90; continue _fun0014 }
case 91:
            var5['style'] = var1;
            var17 = _closure1_slot19;
            var6 = _closure1_slot1;
            var1 = _closure1_slot2;
            var1 = var1[var8];
            var6 = var6.bind(var4)(var1);
            var1 = {};
            var18 = var14.avatarWrapper;
            var1['style'] = var18;
            var19 = var12 != var28;
            var18 = null;
            if(!var19) { _fun0014_ip = 92; continue _fun0014 }
case 93:
            var21 = _closure1_slot19;
            var20 = _closure1_slot1;
            var22 = _closure1_slot2;
            var24 = 31;
            var19 = var22[var24];
            var20 = var20.bind(var4)(var19);
            var19 = {};
            var23 = _closure1_slot0;
            var22 = var22[var25];
            var25 = var23.bind(var4)(var22);
            var23 = var25.getCachedSourceFromURI;
            var26 = var28.getAvatarURL;
            var22 = 80;
            var22 = var26.bind(var28)(var29, var22, var27);
            var22 = var23.bind(var25)(var22);
            var19['source'] = var22;
            var23 = _closure1_slot0;
            var22 = _closure1_slot2;
            var22 = var22[var24];
            var22 = var23.bind(var4)(var22);
            var23 = var22.AvatarSizes;
            if(var16) { _fun0014_ip = 94; continue _fun0014 }
case 95:
            var22 = var23.XLARGE;
            _fun0014_ip = 96; continue _fun0014;
case 94:
            var22 = var23.LARGE;
case 96:
            var19['size'] = var22;
            var23 = var12 == var15;
            var22 = undefined;
            if(var23) { _fun0014_ip = 97; continue _fun0014 }
case 98:
            var22 = var15.userAvatarDecoration;
case 97:
            var19['avatarDecoration'] = var22;
            var18 = var21.bind(var4)(var20, var19);
case 92:
            var1['children'] = var18;
            var6 = var17.bind(var4)(var6, var1);
            var1 = new Array(3);
            var1[0] = var6;
            var18 = _closure1_slot19;
            var17 = _closure1_slot35;
            var6 = {};
            var19 = var14.userOpacity;
            var6['style'] = var19;
            var6 = var18.bind(var4)(var17, var6);
            var1[1] = var6;
            var6 = null;
            if(!var16) { _fun0014_ip = 99; continue _fun0014 }
case 100:
            var6 = null;
            if(!var9) { _fun0014_ip = 99; continue _fun0014 }
case 101:
            var12 = _closure1_slot19;
            var20 = _closure1_slot1;
            var21 = _closure1_slot2;
            var8 = var21[var8];
            var9 = var20.bind(var4)(var8);
            var8 = {};
            var16 = var14.thermalAlertIconContainer;
            var8['style'] = var16;
            var18 = _closure1_slot19;
            var16 = 32;
            var16 = var21[var16];
            var17 = var20.bind(var4)(var16);
            var16 = {};
            var19 = var14.thermalAlertIcon;
            var16['style'] = var19;
            var19 = 33;
            var19 = var21[var19];
            var19 = var20.bind(var4)(var19);
            var16['source'] = var19;
            var19 = var14.thermalAlertIcon;
            var19 = var19.color;
            var16['color'] = var19;
            var16 = var18.bind(var4)(var17, var16);
            var8['children'] = var16;
            var6 = var12.bind(var4)(var9, var8);
case 99:
            var1[2] = var6;
            var5['children'] = var1;
            var1 = var5;
            _fun0014_ip = 102; continue _fun0014;
case 90:
            var8 = var14.blackBackground;
            var6 = new Array(2);
            var6[0] = var8;
            var8 = var14.user;
            var6[1] = var8;
            var5['style'] = var6;
            var9 = _closure1_slot19;
            var8 = _closure1_slot38;
            var6 = {};
            var6['style'] = var11;
            var6['participantId'] = var10;
            var12 = _closure1_slot19;
            var11 = _closure1_slot32;
            var10 = {};
            var15 = var15.streamId;
            var10['streamId'] = var15;
            var15 = var14.video;
            var14 = new Array(2);
            var14[0] = var15;
            var14[1] = var4;
            var10['style'] = var14;
            var10['onSize'] = var13;
            var13 = _closure1_slot33;
            var10['onReady'] = var13;
            var10 = var12.bind(var4)(var11, var10);
            var6['children'] = var10;
            var8 = var9.bind(var4)(var8, var6);
            var6 = new Array(2);
            var6[0] = var8;
            var9 = _closure1_slot19;
            var8 = _closure1_slot35;
            var7 = {};
            var7 = var9.bind(var4)(var8, var7);
            var6[1] = var7;
            var5['children'] = var6;
            var1 = var5;
case 102:
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot37 = var1;
    var1 = function AnimatedVideoWrapper(arg1) {
        var1 = arg1;
        var12 = var1.participantId;
        var8 = var1.style;
        var5 = var1.children;
        var10 = _closure1_slot4;
        var9 = var10.useContext;
        var2 = _closure1_slot1;
        var6 = _closure1_slot2;
        var4 = 17;
        var7 = var6[var4];
        var4 = undefined;
        var7 = var2.bind(var4)(var7);
        var7 = var9.bind(var10)(var7);
        var11 = var7.layoutManager;
        var9 = _closure1_slot0;
        var7 = 34;
        var7 = var6[var7];
        var10 = var9.bind(var4)(var7);
        var7 = var10.useTargetDimensionsSubscription;
        var11 = var7.bind(var10)(var12, var11);
        var _closure2_slot0 = var11;
        var7 = 27;
        var7 = var6[var7];
        var9 = var9.bind(var4)(var7);
        var7 = var9.useAnimatedStyle;
        var3 = function o() {
            _fun0021: for(var _fun0021_ip = 0; ; ) switch(_fun0021_ip) {
case 0:
                var2 = _closure2_slot0;
                var1 = var2.get;
                var1 = var1.bind(var2)();
                var5 = var1.width;
                var4 = var1.height;
                var7 = var4 < var5;
                var1 = 'auto';
                var6 = '100%';
                var2 = var1;
                var3 = var6;
                if(!var7) { _fun0021_ip = 4; continue _fun0021 }
case 5:
                var2 = var6;
                var3 = var1;
case 4:
                var1 = {};
                var6 = 'absolute';
                var1['position'] = var6;
                var4 = var5 / var4;
                var1['aspectRatio'] = var4;
                var1['width'] = var3;
                var1['height'] = var2;
                return var1;
            }
        };
        var10 = {};
        var10['targetDimensions'] = var11;
        var3['__closure'] = var10;
        var10 = 10377220209728.0;
        var3['__workletHash'] = var10;
        var10 = _closure1_slot28;
        var3['__initData'] = var10;
        var7 = var7.bind(var9)(var3);
        var3 = _closure1_slot19;
        var1 = 35;
        var1 = var6[var1];
        var2 = var2.bind(var4)(var1);
        var1 = {};
        var6 = new Array(2);
        var6[0] = var8;
        var6[1] = var7;
        var1['style'] = var6;
        var1['children'] = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var _closure1_slot38 = var1;
    var1 = function Stream(arg1) {
        _fun0022: for(var _fun0022_ip = 0; ; ) switch(_fun0022_ip) {
case 0:
            var1 = arg1;
            var8 = var1.participantId;
            var _closure2_slot0 = var8;
            var7 = var1.transitionState;
            var4 = var1.transitionCleanUp;
            var1 = _closure1_slot21;
            var5 = undefined;
            var6 = var1.bind(var5)();
            var1 = _closure1_slot34;
            var9 = var1.bind(var5)(var6, var7, var4);
            var7 = _closure1_slot4;
            var4 = var7.useContext;
            var11 = _closure1_slot1;
            var10 = _closure1_slot2;
            var1 = 17;
            var1 = var10[var1];
            var1 = var11.bind(var5)(var1);
            var1 = var4.bind(var7)(var1);
            var4 = var1.channelId;
            var _closure2_slot1 = var4;
            var1 = var1.layoutManager;
            var _closure2_slot2 = var1;
            var7 = _closure1_slot0;
            var4 = 25;
            var11 = var10[var4];
            var14 = var7.bind(var5)(var11);
            var13 = var14.useStateFromStores;
            var11 = _closure1_slot6;
            var12 = new Array(1);
            var12[0] = var11;
            var11 = function() {
                _fun0023: for(var _fun0023_ip = 0; ; ) switch(_fun0023_ip) {
case 0:
                    var5 = _closure1_slot6;
                    var4 = var5.getParticipant;
                    var2 = _closure2_slot1;
                    var1 = _closure2_slot0;
                    var2 = var4.bind(var5)(var2, var1);
                    var1 = null;
                    var4 = var1 != var2;
                    var1 = undefined;
                    if(!var4) { _fun0023_ip = 78; continue _fun0023 }
case 46:
                    var4 = var2.type;
                    var3 = _closure1_slot17;
                    var3 = var3.STREAM;
                    var1 = undefined;
                    if(!(var4 === var3)) { _fun0023_ip = 78; continue _fun0023 }
case 42:
                    var1 = var2.streamId;
case 78:
                    return var1;
                }
            };
            var12 = var13.bind(var14)(var12, var11);
            var4 = var10[var4];
            var11 = var7.bind(var5)(var4);
            var10 = var11.useStateFromStores;
            var4 = _closure1_slot8;
            var7 = new Array(1);
            var7[0] = var4;
            var4 = function() {
                _fun0024: for(var _fun0024_ip = 0; ; ) switch(_fun0024_ip) {
case 0:
                    var3 = _closure1_slot8;
                    var2 = var3.getActiveStreamForStreamKey;
                    var1 = _closure2_slot0;
                    var2 = var2.bind(var3)(var1);
                    var1 = null;
                    var3 = var1 == var2;
                    var1 = undefined;
                    if(var3) { _fun0024_ip = 46; continue _fun0024 }
case 43:
                    var1 = var2.state;
case 46:
                    return var1;
                }
            };
            var4 = var10.bind(var11)(var7, var4);
            var11 = _closure1_slot4;
            var10 = var11.useCallback;
            var7 = new Array(2);
            var7[0] = var1;
            var7[1] = var8;
            var1 = function(arg1) {
                var1 = arg1;
                var1 = var1.nativeEvent;
                var5 = var1.width;
                var4 = var1.height;
                var3 = _closure2_slot2;
                var2 = var3.setTargetDimensions;
                var1 = _closure2_slot0;
                var1 = var2.bind(var3)(var1, var5, var4);
                var1 = undefined;
                return var1;
            };
            var11 = var10.bind(var11)(var1, var7);
            var1 = null;
            var1 = var1 != var12;
            var _closure2_slot3 = var1;
            var13 = _closure1_slot4;
            var10 = var13.useEffect;
            var7 = new Array(1);
            var7[0] = var1;
            var3 = function() {
                _fun0025: for(var _fun0025_ip = 0; ; ) switch(_fun0025_ip) {
case 0:
                    var1 = _closure2_slot3;
                    if(!var1) { _fun0025_ip = 31; continue _fun0025 }
case 55:
                    var2 = _closure1_slot33;
                    var1 = undefined;
                    var1 = var2.bind(var1)();
case 31:
                    var1 = undefined;
                    return var1;
                }
            };
            var3 = var10.bind(var13)(var3, var7);
            var3 = _closure1_slot13;
            var3 = var3.ENDED;
            if(!(var4 !== var3)) { _fun0022_ip = 103; continue _fun0022 }
case 104:
            var3 = _closure1_slot13;
            var3 = var3.FAILED;
            if(!(var4 !== var3)) { _fun0022_ip = 105; continue _fun0022 }
case 106:
            var7 = _closure1_slot19;
            if(var1) { _fun0022_ip = 107; continue _fun0022 }
case 108:
            var3 = _closure1_slot37;
            var1 = {};
            var1['participantId'] = var8;
            var1 = var7.bind(var5)(var3, var1);
            _fun0022_ip = 109; continue _fun0022;
case 107:
            var4 = _closure1_slot38;
            var3 = {};
            var3['style'] = var9;
            var3['participantId'] = var8;
            var10 = _closure1_slot19;
            var9 = _closure1_slot32;
            var8 = {};
            var8['streamId'] = var12;
            var12 = var6.video;
            var8['style'] = var12;
            var8['onSize'] = var11;
            var8 = var10.bind(var5)(var9, var8);
            var3['children'] = var8;
            var1 = var7.bind(var5)(var4, var3);
case 109:
            _fun0022_ip = 110; continue _fun0022;
case 105:
            var7 = _closure1_slot19;
            var4 = _closure1_slot0;
            var8 = _closure1_slot2;
            var3 = 37;
            var3 = var8[var3];
            var3 = var4.bind(var5)(var3);
            var4 = var3.StreamFailed;
            var3 = {};
            var8 = var6.streamEmptyImage;
            var3['style'] = var8;
            var8 = 'contain';
            var3['resizeMode'] = var8;
            var1 = var7.bind(var5)(var4, var3);
case 110:
            _fun0022_ip = 111; continue _fun0022;
case 103:
            var4 = _closure1_slot19;
            var3 = _closure1_slot0;
            var7 = _closure1_slot2;
            var2 = 36;
            var2 = var7[var2];
            var2 = var3.bind(var5)(var2);
            var3 = var2.StreamEnded;
            var2 = {};
            var6 = var6.streamEmptyImage;
            var2['style'] = var6;
            var6 = 'contain';
            var2['resizeMode'] = var6;
            var1 = var4.bind(var5)(var3, var2);
case 111:
            return var1;
        }
    };
    var _closure1_slot39 = var1;
    var1 = function getFocusedKey(arg1) {
        var1 = arg1;
        var1 = var1.id;
        return var1;
    };
    var _closure1_slot40 = var1;
    var1 = function renderFocusedParticipant(arg1, arg2, arg3, arg4) {
        _fun0026: for(var _fun0026_ip = 0; ; ) switch(_fun0026_ip) {
case 0:
            var5 = arg1;
            var3 = arg2;
            var6 = arg3;
            var1 = arg4;
            var4 = var3.id;
            var2 = '--voice-panel-pip-empty';
            if(!(var2 !== var4)) { _fun0026_ip = 22; continue _fun0026 }
case 3:
            var2 = {};
            var4 = var3.id;
            var2['participantId'] = var4;
            var2['transitionState'] = var6;
            var2['transitionCleanUp'] = var1;
            var7 = var3.type;
            var4 = _closure1_slot17;
            var4 = var4.ACTIVITY;
            if(!(var4 !== var7)) { _fun0026_ip = 112; continue _fun0026 }
case 69:
            var4 = _closure1_slot17;
            var4 = var4.STREAM;
            if(!(var4 !== var7)) { _fun0026_ip = 113; continue _fun0026 }
case 114:
            var4 = _closure1_slot17;
            var4 = var4.USER;
            if(!(var4 !== var7)) { _fun0026_ip = 115; continue _fun0026 }
case 39:
            var4 = _closure1_slot17;
            var4 = var4.HIDDEN_STREAM;
case 115:
            var9 = _closure1_slot19;
            var8 = _closure1_slot37;
            var7 = {};
            var12 = var7;
            var11 = var2;
            var4 = copyDataProperties(var12, var11);
            var4 = undefined;
            var4 = var9.bind(var4)(var8, var7, var5);
            return var4;
case 113:
            var9 = _closure1_slot19;
            var8 = _closure1_slot39;
            var7 = {};
            var12 = var7;
            var11 = var2;
            var4 = copyDataProperties(var12, var11);
            var4 = undefined;
            var4 = var9.bind(var4)(var8, var7, var5);
            return var4;
case 112:
            var7 = _closure1_slot19;
            var4 = _closure1_slot36;
            var3 = {};
            var12 = var3;
            var11 = var2;
            var2 = copyDataProperties(var12, var11);
            var2 = undefined;
            var2 = var7.bind(var2)(var4, var3, var5);
            return var2;
case 22:
            var4 = _closure1_slot19;
            var3 = _closure1_slot29;
            var2 = {};
            var2['transitionState'] = var6;
            var2['transitionCleanUp'] = var1;
            var1 = undefined;
            var1 = var4.bind(var1)(var3, var2, var5);
            return var1;
        }
    };
    var _closure1_slot41 = var1;
    var1 = function areParticipantsEqual(arg1, arg2) {
        _fun0027: for(var _fun0027_ip = 0; ; ) switch(_fun0027_ip) {
case 0:
            var2 = arg1;
            var7 = arg2;
            var3 = var2.length;
            var1 = var7.length;
            if(!(var3 === var1)) { _fun0027_ip = 116; continue _fun0027 }
case 29:
            var1 = var2.length;
            var6 = 0;
            if(!(var6 !== var1)) { _fun0027_ip = 117; continue _fun0027 }
case 118:
            var1 = _closure1_slot30;
            var5 = undefined;
            var4 = var1.bind(var5)(var2);
            var2 = var4.bind(var5)();
            var1 = var2.done;
            var3 = null;
            var6 = 0;
            if(var1) { _fun0027_ip = 119; continue _fun0027 }
case 7:
            var1 = var2.value;
            var8 = var1.id;
            var9 = var7[var6];
            var10 = var3 == var9;
            var1 = undefined;
            if(var10) { _fun0027_ip = 120; continue _fun0027 }
case 121:
            var1 = var9.id;
case 120:
            if(!(var8 === var1)) { _fun0027_ip = 122; continue _fun0027 }
case 123:
            var6 = var6 + 1;
            var8 = var4.bind(var5)();
            var1 = var8.done;
            var2 = var8;
            if(var1) { _fun0027_ip = 119; continue _fun0027 }
case 124:
            _fun0027_ip = 7; continue _fun0027;
case 122:
            var1 = false;
            return var1;
case 119:
            var1 = true;
            return var1;
case 117:
            var1 = true;
            return var1;
case 116:
            var1 = false;
            return var1;
        }
    };
    var _closure1_slot42 = var1;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var4);
    var14 = 0;
    var4 = var6[var14];
    var1 = undefined;
    var4 = var12.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var15 = 1;
    var7 = var6[var15];
    var4 = metroImportAll;
    var7 = var4.bind(var1)(var7);
    var _closure1_slot4 = var7;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var13 = var4.StyleSheet;
    var4 = 3;
    var4 = var6[var4];
    var4 = var12.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var12.bind(var1)(var4);
    var _closure1_slot6 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var12.bind(var1)(var4);
    var _closure1_slot7 = var4;
    var4 = 6;
    var4 = var6[var4];
    var4 = var12.bind(var1)(var4);
    var _closure1_slot8 = var4;
    var4 = 7;
    var4 = var6[var4];
    var4 = var12.bind(var1)(var4);
    var _closure1_slot9 = var4;
    var4 = 8;
    var4 = var6[var4];
    var4 = var12.bind(var1)(var4);
    var _closure1_slot10 = var4;
    var4 = 9;
    var4 = var6[var4];
    var4 = var12.bind(var1)(var4);
    var _closure1_slot11 = var4;
    var4 = 10;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.VoicePanelModes;
    var _closure1_slot12 = var4;
    var4 = 11;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var8 = var4.ApplicationStreamStates;
    var _closure1_slot13 = var8;
    var4 = var4.ComponentActions;
    var _closure1_slot14 = var4;
    var4 = 12;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var8 = var4.ActivityLayoutMode;
    var _closure1_slot15 = var8;
    var4 = var4.OrientationLockState;
    var _closure1_slot16 = var4;
    var4 = 13;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var8 = var4.ParticipantTypes;
    var _closure1_slot17 = var8;
    var4 = var4.isActivityParticipant;
    var _closure1_slot18 = var4;
    var4 = 14;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var8 = var4.jsx;
    var _closure1_slot19 = var8;
    var4 = var4.jsxs;
    var _closure1_slot20 = var4;
    var4 = 15;
    var4 = var6[var4];
    var9 = var5.bind(var1)(var4);
    var8 = var9.createStyles;
    var4 = {};
    var10 = {'position': 'absolute', 'width': '100%', 'height': '100%', 'overflow': 'hidden', 'alignItems': 'center', 'justifyContent': 'center'};
    var4['contentWrapper'] = var10;
    var10 = {};
    var11 = 0.1;
    var10['opacity'] = var11;
    var4['userOpacity'] = var10;
    var10 = {'position': 'absolute', 'width': '100%', 'height': '100%'};
    var4['activity'] = var10;
    var10 = {'position': 'absolute', 'width': '100%', 'height': '100%', 'alignItems': 'center', 'justifyContent': 'center'};
    var4['user'] = var10;
    var10 = {'position': 'absolute', 'width': '100%', 'height': '100%'};
    var4['stream'] = var10;
    var10 = {'position': 'absolute', 'width': '100%', 'height': '100%'};
    var4['video'] = var10;
    var10 = {};
    var16 = {};
    var11 = -1;
    var16['scaleX'] = var11;
    var11 = new Array(1);
    var11[0] = var16;
    var10['transform'] = var11;
    var4['flip'] = var10;
    var10 = {'position': 'relative', 'width': '56%', 'height': '56%', 'alignItems': 'center', 'justifyContent': 'center'};
    var4['avatarWrapper'] = var10;
    var10 = {'width': 22, 'height': 22, 'backgroundColor': 'rgba(78, 80, 88, 0.48)', 'borderRadius': null, 'justifyContent': 'center', 'alignItems': 'center', 'position': 'absolute', 'top': 6, 'left': 6};
    var11 = 16;
    var16 = var6[var11];
    var16 = var12.bind(var1)(var16);
    var16 = var16.radii;
    var16 = var16.round;
    var10['borderRadius'] = var16;
    var4['thermalAlertIconContainer'] = var10;
    var10 = {'width': 14, 'height': 14};
    var16 = var6[var11];
    var16 = var12.bind(var1)(var16);
    var16 = var16.colors;
    var16 = var16.WHITE;
    var10['color'] = var16;
    var4['thermalAlertIcon'] = var10;
    var10 = {};
    var10['zIndex'] = var15;
    var4['onTop'] = var10;
    var10 = {};
    var10['zIndex'] = var14;
    var4['onBottom'] = var10;
    var10 = {};
    var14 = '50%';
    var10['width'] = var14;
    var4['streamEmptyImage'] = var10;
    var10 = {};
    var18 = var13.absoluteFillObject;
    var19 = var10;
    var13 = copyDataProperties(var19, var18);
    var11 = var6[var11];
    var11 = var12.bind(var1)(var11);
    var11 = var11.colors;
    var12 = var11.BLACK;
    var11 = 'backgroundColor';
    var10[var11] = var12;
    var4['emptyPip'] = var10;
    var10 = {'position': 'absolute', 'top': 4294967295, 'left': 4294967295, 'bottom': 4294967295, 'right': 4294967295, 'borderWidth': 2, 'borderColor': 'white', 'zIndex': 1, 'opacity': 0.3};
    var4['innerStroke'] = var10;
    var10 = {};
    var11 = 'black';
    var10['backgroundColor'] = var11;
    var4['blackBackground'] = var10;
    var4 = var8.bind(var9)(var4);
    var _closure1_slot21 = var4;
    var4 = {};
    var8 = 'function VoicePanelPIPContentTsx1(){const{windowDimensions}=this.__closure;return windowDimensions.get();}';
    var4['code'] = var8;
    var _closure1_slot22 = var4;
    var4 = {};
    var8 = 'function VoicePanelPIPContentTsx2(windowDimensionsVal,previousWindowDimensionsVal){const{runOnJS,handleTargetAspectRatioParams}=this.__closure;if(windowDimensionsVal!==previousWindowDimensionsVal){runOnJS(handleTargetAspectRatioParams)(windowDimensionsVal);}}';
    var4['code'] = var8;
    var _closure1_slot23 = var4;
    var4 = {};
    var8 = 'function VoicePanelPIPContentTsx3(){const{focused}=this.__closure;var _focused$get;return(_focused$get=focused.get())===null||_focused$get===void 0?void 0:_focused$get.id;}';
    var4['code'] = var8;
    var _closure1_slot24 = var4;
    var4 = {};
    var8 = 'function VoicePanelPIPContentTsx4(focusedParticipantId,previousFocusedParticipantId){const{runOnJS,updateIsActivityFocused,mode}=this.__closure;if(focusedParticipantId!==previousFocusedParticipantId){runOnJS(updateIsActivityFocused)(focusedParticipantId,mode.get());}}';
    var4['code'] = var8;
    var _closure1_slot25 = var4;
    var4 = {};
    var8 = 'function VoicePanelPIPContentTsx5(){const{mode}=this.__closure;return mode.get();}';
    var4['code'] = var8;
    var _closure1_slot26 = var4;
    var4 = {};
    var8 = 'function VoicePanelPIPContentTsx6(modeVal,previousModeVal){const{runOnJS,updateIsActivityFocused,focused}=this.__closure;if(modeVal!==previousModeVal){var _focused$get;runOnJS(updateIsActivityFocused)((_focused$get=focused.get())===null||_focused$get===void 0?void 0:_focused$get.id,modeVal);}}';
    var4['code'] = var8;
    var _closure1_slot27 = var4;
    var4 = {};
    var8 = "function VoicePanelPIPContentTsx7(){const{targetDimensions}=this.__closure;const{width:targetWidth,height:targetHeight}=targetDimensions.get();let height='100%';let width='100%';if(targetHeight<targetWidth){width='auto';}else{height='auto';}return{position:'absolute',aspectRatio:targetWidth/targetHeight,width:width,height:height};}";
    var4['code'] = var8;
    var _closure1_slot28 = var4;
    var8 = var7.memo;
    var4 = function EmptyPIP(arg1) {
        var1 = arg1;
        var9 = var1.transitionState;
        var _closure2_slot0 = var9;
        var8 = var1.transitionCleanUp;
        var _closure2_slot1 = var8;
        var3 = _closure1_slot21;
        var4 = undefined;
        var5 = var3.bind(var4)();
        var7 = _closure1_slot4;
        var6 = var7.useEffect;
        var3 = new Array(2);
        var3[0] = var9;
        var3[1] = var8;
        var2 = function() {
            _fun0028: for(var _fun0028_ip = 0; ; ) switch(_fun0028_ip) {
case 0:
                var4 = _closure2_slot0;
                var5 = _closure1_slot0;
                var3 = _closure1_slot2;
                var1 = 21;
                var3 = var3[var1];
                var1 = undefined;
                var3 = var5.bind(var1)(var3);
                var3 = var3.TransitionStates;
                var3 = var3.YEETED;
                if(!(var4 === var3)) { _fun0028_ip = 28; continue _fun0028 }
case 125:
                var2 = _closure2_slot1;
                var2 = var2.bind(var1)();
case 28:
                return var1;
            }
        };
        var2 = var6.bind(var7)(var2, var3);
        var3 = _closure1_slot19;
        var2 = _closure1_slot1;
        var6 = _closure1_slot2;
        var1 = 23;
        var1 = var6[var1];
        var2 = var2.bind(var4)(var1);
        var1 = {};
        var5 = var5.emptyPip;
        var1['style'] = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var4 = var8.bind(var7)(var4);
    var _closure1_slot29 = var4;
    var4 = var7.memo;
    var2 = function VoicePanelPIPContent() {
        var6 = _closure1_slot4;
        var5 = var6.useContext;
        var2 = _closure1_slot1;
        var10 = _closure1_slot2;
        var3 = 17;
        var3 = var10[var3];
        var4 = undefined;
        var3 = var2.bind(var4)(var3);
        var3 = var5.bind(var6)(var3);
        var5 = var3.channelId;
        var _closure2_slot0 = var5;
        var6 = _closure1_slot0;
        var3 = 22;
        var3 = var10[var3];
        var7 = var6.bind(var4)(var3);
        var3 = var7.usePIPState;
        var3 = var3.bind(var7)();
        var16 = var3.id;
        var _closure2_slot1 = var16;
        var13 = var3.width;
        var _closure2_slot2 = var13;
        var12 = var3.height;
        var _closure2_slot3 = var12;
        var3 = _closure1_slot21;
        var11 = var3.bind(var4)();
        var _closure2_slot4 = var11;
        var7 = _closure1_slot9;
        var3 = var7.getId;
        var3 = var3.bind(var7)();
        var _closure2_slot5 = var3;
        var7 = 25;
        var7 = var10[var7];
        var15 = var6.bind(var4)(var7);
        var14 = var15.useStateFromStores;
        var7 = _closure1_slot6;
        var9 = new Array(1);
        var9[0] = var7;
        var7 = new Array(3);
        var7[0] = var16;
        var7[1] = var5;
        var7[2] = var3;
        var17 = _closure1_slot42;
        var19 = function() {
            _fun0029: for(var _fun0029_ip = 0; ; ) switch(_fun0029_ip) {
case 0:
                var3 = _closure2_slot1;
                var5 = null;
                if(!(var5 == var3)) { _fun0029_ip = 34; continue _fun0029 }
case 37:
                var1 = _closure1_slot17;
                var1 = var1.USER;
                _fun0029_ip = 78; continue _fun0029;
case 34:
                var7 = _closure1_slot6;
                var6 = var7.getParticipant;
                var2 = _closure2_slot0;
                var6 = var6.bind(var7)(var2, var3);
                var7 = var5 == var6;
                var2 = undefined;
                if(var7) { _fun0029_ip = 126; continue _fun0029 }
case 127:
                var2 = var6.type;
case 126:
                var1 = var2;
case 78:
                if(!(var5 == var1)) { _fun0029_ip = 128; continue _fun0029 }
case 129:
                var2 = _closure1_slot17;
                var1 = var2.USER;
case 128:
                var2 = {};
                if(!(var5 == var3)) { _fun0029_ip = 130; continue _fun0029 }
case 79:
                var3 = _closure2_slot5;
case 130:
                var2['id'] = var3;
                var2['type'] = var1;
                var1 = new Array(1);
                var1[0] = var2;
                return var1;
            }
        };
        var21 = var15;
        var20 = var9;
        var18 = var7;
        var9 = var21[var14](var20, var19, var18, var17, var16);
        var7 = _closure1_slot4;
        var5 = var7.useMemo;
        var3 = new Array(3);
        var3[0] = var13;
        var3[1] = var12;
        var11 = var11.contentWrapper;
        var3[2] = var11;
        var1 = function() {
            var1 = _closure2_slot4;
            var1 = var1.contentWrapper;
            var2 = new Array(2);
            var2[0] = var1;
            var1 = {};
            var6 = _closure1_slot0;
            var5 = _closure1_slot2;
            var4 = 24;
            var5 = var5[var4];
            var4 = undefined;
            var6 = var6.bind(var4)(var5);
            var5 = var6.getVoicePanelPIPBorderRadius;
            var4 = _closure2_slot2;
            var3 = _closure2_slot3;
            var3 = var5.bind(var6)(var4, var3);
            var1['borderRadius'] = var3;
            var2[1] = var1;
            var1 = new Array(1);
            var1[0] = var2;
            return var1;
        };
        var5 = var5.bind(var7)(var1, var3);
        var3 = _closure1_slot19;
        var1 = 23;
        var1 = var10[var1];
        var2 = var2.bind(var4)(var1);
        var1 = {};
        var1['style'] = var5;
        var5 = 'none';
        var1['pointerEvents'] = var5;
        var7 = _closure1_slot19;
        var5 = 21;
        var5 = var10[var5];
        var5 = var6.bind(var4)(var5);
        var6 = var5.TransitionGroup;
        var5 = {};
        var5['items'] = var9;
        var9 = _closure1_slot41;
        var5['renderItem'] = var9;
        var8 = _closure1_slot40;
        var5['getItemKey'] = var8;
        var5 = var7.bind(var4)(var6, var5);
        var1['children'] = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var2 = var4.bind(var7)(var2);
    var4 = 38;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/voice_panel/native/pip/VoicePanelPIPContent.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();