// app/modules/stage_channels/useStageChannelGridParticipants.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var8 = metroImportDefault;
    var3 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var7;
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
            var9 = _closure1_slot8;
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
            var7 = _closure1_slot8;
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
    var _closure1_slot7 = var1;
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
    var _closure1_slot8 = var1;
    var4 = function useStageChannelParticipantsList(arg1, arg2, arg3) {
        var5 = arg1;
        var8 = arg2;
        var6 = arg3;
        var _closure2_slot0 = var5;
        var _closure2_slot1 = var8;
        var _closure2_slot2 = var6;
        var7 = _closure1_slot0;
        var10 = _closure1_slot1;
        var3 = 4;
        var9 = var10[var3];
        var4 = undefined;
        var15 = var7.bind(var4)(var9);
        var14 = var15.useStateFromStores;
        var9 = _closure1_slot5;
        var13 = new Array(1);
        var13[0] = var9;
        var12 = new Array(1);
        var12[0] = var5;
        var9 = 5;
        var9 = var10[var9];
        var9 = var7.bind(var4)(var9);
        var16 = var9.isVersionEqual;
        var18 = function() {
            var4 = _closure2_slot0;
            var1 = new Array(2);
            var1[0] = var4;
            var3 = _closure1_slot5;
            var2 = var3.getParticipantsVersion;
            var2 = var2.bind(var3)(var4);
            var1[1] = var2;
            return var1;
        };
        var20 = var15;
        var19 = var13;
        var17 = var12;
        var9 = var20[var14](var19, var18, var17, var16, var15);
        var _closure2_slot3 = var9;
        var3 = var10[var3];
        var11 = var7.bind(var4)(var3);
        var10 = var11.useStateFromStores;
        var3 = _closure1_slot4;
        var7 = new Array(1);
        var7[0] = var3;
        var4 = new Array(1);
        var4[0] = var5;
        var3 = function() {
            var3 = _closure1_slot4;
            var2 = var3.getSelectedParticipantId;
            var1 = _closure2_slot0;
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var7 = var10.bind(var11)(var7, var3, var4);
        var _closure2_slot4 = var7;
        var4 = _closure1_slot3;
        var3 = var4.useMemo;
        var2 = new Array(5);
        var2[0] = var9;
        var2[1] = var8;
        var2[2] = var7;
        var2[3] = var6;
        var2[4] = var5;
        var1 = function() {
            _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                var3 = new Array(0);
                var _closure3_slot0 = var3;
                var2 = new Array(0);
                var _closure3_slot1 = var2;
                var12 = -1;
                var _closure3_slot2 = var12;
                var7 = new Array(0);
                var4 = _closure2_slot2;
                if(!var4) { _fun0004_ip = 211; continue _fun0004 }
 45:
                var5 = _closure1_slot7;
                var14 = _closure1_slot5;
                var13 = var14.getMutableParticipants;
                var6 = _closure2_slot0;
                var15 = _closure1_slot0;
                var4 = _closure1_slot1;
                var10 = 6;
                var4 = var4[var10];
                var9 = undefined;
                var4 = var15.bind(var9)(var4);
                var4 = var4.StageChannelParticipantNamedIndex;
                var4 = var4.SPEAKER;
                var4 = var13.bind(var14)(var6, var4);
                var6 = var5.bind(var9)(var4);
                var5 = var6.bind(var9)();
                var4 = var5.done;
                if(var4) { _fun0004_ip = 211; continue _fun0004 }
 123:
                var13 = var5.value;
                var14 = var13.type;
                var15 = _closure1_slot0;
                var4 = _closure1_slot1;
                var4 = var4[var10];
                var4 = var15.bind(var9)(var4);
                var4 = var4.StageChannelParticipantTypes;
                var4 = var4.STREAM;
                if(!(var14 === var4)) { _fun0004_ip = 211; continue _fun0004 }
 166:
                var14 = var13.id;
                var4 = _closure2_slot4;
                if(!(var14 !== var4)) { _fun0004_ip = 189; continue _fun0004 }
 179:
                var4 = var7.push;
                var4 = var4.bind(var7)(var13);
 189:
                var12 = var12 + 1;
                _closure3_slot2 = var12;
                var13 = var6.bind(var9)();
                var4 = var13.done;
                var5 = var13;
                if(!var4) { _fun0004_ip = 123; continue _fun0004 }
 211:
                var6 = function pushSection(arg1, arg2, arg3) {
                    _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                        var3 = arg1;
                        var1 = arg3;
                        var5 = var3;
                        if(!var1) { _fun0005_ip = 31; continue _fun0005 }
 12:
                        var2 = var3.filter;
                        var1 = function(arg1, arg2) {
                            _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
                                var1 = arg1;
                                var2 = var1.id;
                                var1 = _closure2_slot4;
                                var1 = var2 !== var1;
                                if(!var1) { _fun0006_ip = 36; continue _fun0006 }
 22:
                                var3 = _closure3_slot2;
                                var2 = arg2;
                                var1 = var2 > var3;
 36:
                                return var1;
                            }
                        };
                        var5 = var2.bind(var3)(var1);
 31:
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot1;
                        var1 = 7;
                        var2 = var2[var1];
                        var1 = undefined;
                        var4 = var3.bind(var1)(var2);
                        var3 = var4.chunk;
                        var2 = arg2;
                        var2 = var3.bind(var4)(var5, var2);
                        var5 = _closure3_slot1;
                        var4 = var5.push;
                        var4 = var4.bind(var5)(var2);
                        var4 = _closure3_slot0;
                        var3 = var4.push;
                        var2 = var2.length;
                        var2 = var3.bind(var4)(var2);
                        return var1;
                    }
                };
                var _closure3_slot3 = var6;
                var4 = _closure2_slot4;
                var5 = null;
                var9 = var5 != var4;
                var4 = null;
                if(!var9) { _fun0004_ip = 264; continue _fun0004 }
 237:
                var11 = _closure1_slot5;
                var10 = var11.getParticipant;
                var9 = _closure2_slot0;
                var8 = _closure2_slot4;
                var4 = var10.bind(var11)(var9, var8);
 264:
                if(!(var5 != var4)) { _fun0004_ip = 277; continue _fun0004 }
 268:
                var5 = var4.speaker;
                if(var5) { _fun0004_ip = 297; continue _fun0004 }
 277:
                var10 = undefined;
                var9 = new Array(0);
                var8 = 1;
                var5 = false;
                var5 = var6.bind(var10)(var9, var8, var5);
                _fun0004_ip = 319; continue _fun0004;
 297:
                var9 = new Array(1);
                var9[0] = var4;
                var8 = undefined;
                var5 = 1;
                var4 = false;
                var4 = var6.bind(var8)(var9, var5, var4);
 319:
                var9 = _closure1_slot0;
                var10 = _closure1_slot1;
                var4 = 6;
                var8 = var10[var4];
                var5 = undefined;
                var8 = var9.bind(var5)(var8);
                var8 = var8.StageChannelParticipantNamedIndex;
                var11 = var8.SPEAKER;
                var8 = new Array(2);
                var8[0] = var11;
                var4 = var10[var4];
                var4 = var9.bind(var5)(var4);
                var4 = var4.StageChannelParticipantNamedIndex;
                var4 = var4.AUDIENCE;
                var8[1] = var4;
                var4 = var8.forEach;
                var1 = function(arg1) {
                    var6 = arg1;
                    var5 = _closure3_slot3;
                    var7 = _closure1_slot5;
                    var4 = var7.getMutableParticipants;
                    var8 = _closure2_slot3;
                    var3 = 0;
                    var3 = var8[var3];
                    var4 = var4.bind(var7)(var3, var6);
                    var2 = _closure2_slot1;
                    var3 = var2[var6];
                    var7 = _closure1_slot0;
                    var2 = _closure1_slot1;
                    var1 = 6;
                    var2 = var2[var1];
                    var1 = undefined;
                    var2 = var7.bind(var1)(var2);
                    var2 = var2.StageChannelParticipantNamedIndex;
                    var2 = var2.SPEAKER;
                    var2 = var6 === var2;
                    var2 = var5.bind(var1)(var4, var3, var2);
                    return var1;
                };
                var1 = var4.bind(var8)(var1);
                var4 = 1;
                var1 = false;
                var1 = var6.bind(var5)(var7, var4, var1);
                var1 = new Array(2);
                var1[0] = var3;
                var1[1] = var2;
                return var1;
            }
        };
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot9 = var4;
    var1 = global;
    var10 = var1.Object;
    var9 = var10.defineProperty;
    var5 = {};
    var1 = true;
    var5['value'] = var1;
    var1 = '__esModule';
    var1 = var9.bind(var10)(var3, var1, var5);
    var12 = 0;
    var5 = var7[var12];
    var1 = undefined;
    var5 = var8.bind(var1)(var5);
    var _closure1_slot2 = var5;
    var11 = 1;
    var9 = var7[var11];
    var5 = metroImportAll;
    var5 = var5.bind(var1)(var9);
    var _closure1_slot3 = var5;
    var10 = 2;
    var5 = var7[var10];
    var5 = var8.bind(var1)(var5);
    var _closure1_slot4 = var5;
    var9 = 3;
    var5 = var7[var9];
    var5 = var8.bind(var1)(var5);
    var _closure1_slot5 = var5;
    var5 = {};
    var5['SELECTED'] = var12;
    var8 = 'SELECTED';
    var5[var12] = var8;
    var5['SPEAKER'] = var11;
    var8 = 'SPEAKER';
    var5[var11] = var8;
    var5['AUDIENCE'] = var10;
    var8 = 'AUDIENCE';
    var5[var10] = var8;
    var5['MEDIA'] = var9;
    var8 = 'MEDIA';
    var5[var9] = var8;
    var _closure1_slot6 = var5;
    var5 = 10;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/stage_channels/useStageChannelGridParticipants.tsx';
    var5 = var6.bind(var7)(var5);
    var3['useStageChannelParticipantsList'] = var4;
    var4 = function useThrottleDurationForChannel(arg1) {
        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
            var2 = _closure1_slot0;
            var8 = _closure1_slot1;
            var1 = 8;
            var1 = var8[var1];
            var6 = undefined;
            var7 = var2.bind(var6)(var1);
            var5 = var7.useStageParticipantsCount;
            var1 = 6;
            var1 = var8[var1];
            var1 = var2.bind(var6)(var1);
            var1 = var1.StageChannelParticipantNamedIndex;
            var2 = var1.AUDIENCE;
            var1 = arg1;
            var7 = var5.bind(var7)(var1, var2);
            var _closure2_slot0 = var7;
            var5 = _closure1_slot3;
            var2 = var5.useState;
            var1 = false;
            var5 = var2.bind(var5)(var1);
            var2 = _closure1_slot2;
            var1 = 2;
            var6 = var2.bind(var6)(var5, var1);
            var1 = 0;
            var2 = var6[var1];
            var5 = 1;
            var5 = var6[var5];
            var _closure2_slot1 = var5;
            var6 = _closure1_slot3;
            var5 = var6.useEffect;
            var4 = new Array(1);
            var4[0] = var7;
            var3 = function() {
                _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
 0:
                    var3 = _closure2_slot0;
                    var2 = 100;
                    if(!(!(var3 > var2))) { _fun0008_ip = 40; continue _fun0008 }
 14:
                    var3 = _closure2_slot0;
                    var2 = 75;
                    if(!(var3 < var2)) { _fun0008_ip = 53; continue _fun0008 }
 25:
                    var4 = _closure2_slot1;
                    var3 = undefined;
                    var2 = false;
                    var2 = var4.bind(var3)(var2);
                    _fun0008_ip = 53; continue _fun0008;
 40:
                    var3 = _closure2_slot1;
                    var2 = undefined;
                    var1 = true;
                    var1 = var3.bind(var2)(var1);
 53:
                    var1 = undefined;
                    return var1;
                }
            };
            var3 = var5.bind(var6)(var3, var4);
            if(!var2) { _fun0007_ip = 155; continue _fun0007 }
 149:
            var1 = 5000;
 155:
            return var1;
        }
    };
    var3['useThrottleDurationForChannel'] = var4;
    var2 = function useStageChannelParticipantsListThrottled(arg1, arg2, arg3) {
        _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
 0:
            var11 = arg2;
            var1 = arguments[3];
            var10 = undefined;
            if(!(var1 === var10)) { _fun0009_ip = 14; continue _fun0009 }
 12:
            var1 = false;
 14:
            var4 = _closure1_slot9;
            var2 = arg1;
            var14 = var4.bind(var10)(var2, var11, var1);
            var8 = _closure1_slot2;
            var7 = 2;
            var2 = var8.bind(var10)(var14, var7);
            var5 = 0;
            var9 = var2[var5];
            var4 = 1;
            var6 = var2[var4];
            var15 = _closure1_slot0;
            var16 = _closure1_slot1;
            var2 = 9;
            var2 = var16[var2];
            var13 = var15.bind(var10)(var2);
            var12 = var13.useThrottledState;
            var2 = 6;
            var2 = var16[var2];
            var2 = var15.bind(var10)(var2);
            var2 = var2.StageChannelParticipantNamedIndex;
            var2 = var2.AUDIENCE;
            var2 = var11[var2];
            var11 = new Array(1);
            var11[0] = var2;
            var2 = arg3;
            var2 = var12.bind(var13)(var14, var2, var11);
            var2 = var8.bind(var10)(var2, var7);
            var7 = var2[var5];
            var4 = var2[var4];
            var5 = _closure1_slot6;
            var2 = var1;
            if(var2) { _fun0009_ip = 161; continue _fun0009 }
 153:
            var1 = var5.SELECTED;
            _fun0009_ip = 167; continue _fun0009;
 161:
            var1 = var5.MEDIA;
 167:
            var1 = var9[var1];
            var5 = new Array(3);
            var5[0] = var1;
            var1 = _closure1_slot6;
            var8 = var1.SPEAKER;
            var8 = var9[var8];
            var5[1] = var8;
            var1 = var1.AUDIENCE;
            var1 = var7[var1];
            var5[2] = var1;
            var1 = new Array(2);
            var1[0] = var5;
            var5 = _closure1_slot6;
            if(var2) { _fun0009_ip = 234; continue _fun0009 }
 226:
            var2 = var5.SELECTED;
            _fun0009_ip = 240; continue _fun0009;
 234:
            var2 = var5.MEDIA;
 240:
            var5 = var6[var2];
            var2 = new Array(3);
            var2[0] = var5;
            var3 = _closure1_slot6;
            var5 = var3.SPEAKER;
            var5 = var6[var5];
            var2[1] = var5;
            var3 = var3.AUDIENCE;
            var3 = var4[var3];
            var2[2] = var3;
            var1[1] = var2;
            return var1;
        }
    };
    var3['useStageChannelParticipantsListThrottled'] = var2;
    return var1;
})();