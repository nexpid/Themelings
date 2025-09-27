// app/modules/stage_channels/native/components/StageChannelCallList.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var4);
    var11 = 0;
    var4 = var6[var11];
    var1 = undefined;
    var4 = var7.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var10 = 1;
    var7 = var6[var10];
    var4 = metroImportAll;
    var8 = var4.bind(var1)(var7);
    var _closure1_slot4 = var8;
    var9 = 2;
    var4 = var6[var9];
    var4 = var5.bind(var1)(var4);
    var7 = var4.useActiveSpeakerPillScrollHandler;
    var _closure1_slot5 = var7;
    var4 = var4.useActiveSpeakerPillState;
    var _closure1_slot6 = var4;
    var14 = 3;
    var4 = var6[var14];
    var4 = var5.bind(var1)(var4);
    var12 = var4.MAX_AUDIENCE_ROW_LIMIT;
    var4 = 4;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.jsx;
    var _closure1_slot7 = var7;
    var4 = var4.jsxs;
    var _closure1_slot8 = var4;
    var4 = {'direction': null, 'radius': 13, 'inset': 4294967290};
    var7 = 5;
    var7 = var6[var7];
    var7 = var5.bind(var1)(var7);
    var7 = var7.CutoutDirection;
    var7 = var7.RIGHT;
    var4['direction'] = var7;
    var _closure1_slot9 = var4;
    var4 = function getSpeakerRowHeight(arg1, arg2) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var2 = arg2;
            var3 = arg1;
            var1 = 0;
            if(!(!(var3 > var1))) { _fun0001_ip = 167; continue _fun0001 }
 15:
            var1 = 1;
            if(!(var1 !== var2)) { _fun0001_ip = 121; continue _fun0001 }
 22:
            var1 = 2;
            if(!(var1 !== var2)) { _fun0001_ip = 75; continue _fun0001 }
 29:
            var3 = _closure1_slot0;
            var2 = _closure1_slot2;
            var1 = 6;
            var2 = var2[var1];
            var1 = undefined;
            var1 = var3.bind(var1)(var2);
            var1 = var1.SPEAKER_TILE_HEIGHTS;
            var2 = var1.THIRD;
            var1 = 8;
            var1 = var2 + var1;
            return var1;
 75:
            var3 = _closure1_slot0;
            var2 = _closure1_slot2;
            var1 = 6;
            var2 = var2[var1];
            var1 = undefined;
            var1 = var3.bind(var1)(var2);
            var1 = var1.SPEAKER_TILE_HEIGHTS;
            var2 = var1.HALF;
            var1 = 8;
            var1 = var2 + var1;
            return var1;
 121:
            var3 = _closure1_slot0;
            var2 = _closure1_slot2;
            var1 = 6;
            var2 = var2[var1];
            var1 = undefined;
            var1 = var3.bind(var1)(var2);
            var1 = var1.SPEAKER_TILE_HEIGHTS;
            var2 = var1.FULL;
            var1 = 8;
            var1 = var2 + var1;
            return var1;
 167:
            var3 = _closure1_slot0;
            var2 = _closure1_slot2;
            var1 = 6;
            var2 = var2[var1];
            var1 = undefined;
            var1 = var3.bind(var1)(var2);
            var1 = var1.SPEAKER_TILE_HEIGHTS;
            var2 = var1.THIRD;
            var1 = 8;
            var1 = var2 + var1;
            return var1;
        }
    };
    var _closure1_slot10 = var4;
    var4 = {};
    var7 = 7;
    var13 = var6[var7];
    var13 = var5.bind(var1)(var13);
    var13 = var13.StageChannelParticipantNamedIndex;
    var13 = var13.SPEAKER;
    var4[var13] = var14;
    var7 = var6[var7];
    var7 = var5.bind(var1)(var7);
    var7 = var7.StageChannelParticipantNamedIndex;
    var7 = var7.AUDIENCE;
    var4[var7] = var12;
    var _closure1_slot11 = var4;
    var4 = {};
    var4['STREAM'] = var11;
    var7 = 'STREAM';
    var4[var11] = var7;
    var4['SPEAKER'] = var10;
    var7 = 'SPEAKER';
    var4[var10] = var7;
    var4['AUDIENCE'] = var9;
    var7 = 'AUDIENCE';
    var4[var9] = var7;
    var _closure1_slot12 = var4;
    var7 = var8.memo;
    var4 = function(arg1) {
        var1 = arg1;
        var20 = var1.channel;
        var _closure2_slot0 = var20;
        var6 = var1.listSections;
        var _closure2_slot1 = var6;
        var16 = var1.rowsBySection;
        var _closure2_slot2 = var16;
        var14 = _closure1_slot4;
        var2 = var14.useState;
        var5 = false;
        var2 = var2.bind(var14)(var5);
        var9 = _closure1_slot3;
        var4 = undefined;
        var10 = 2;
        var2 = var9.bind(var4)(var2, var10);
        var7 = 0;
        var15 = var2[var7];
        var _closure2_slot3 = var15;
        var8 = 1;
        var22 = var2[var8];
        var _closure2_slot4 = var22;
        var2 = var14.useState;
        var2 = var2.bind(var14)(var5);
        var2 = var9.bind(var4)(var2, var10);
        var5 = var2[var7];
        var _closure2_slot5 = var5;
        var21 = var2[var8];
        var _closure2_slot6 = var21;
        var2 = _closure1_slot6;
        var2 = var2.bind(var4)();
        var2 = var9.bind(var4)(var2, var10);
        var17 = var2[var7];
        var _closure2_slot7 = var17;
        var18 = var2[var8];
        var _closure2_slot8 = var18;
        var2 = _closure1_slot5;
        var2 = var2.bind(var4)();
        var2 = var9.bind(var4)(var2, var8);
        var11 = var2[var7];
        var2 = _closure1_slot1;
        var12 = _closure1_slot2;
        var7 = 8;
        var7 = var12[var7];
        var8 = var2.bind(var4)(var7);
        var7 = function() {
            var1 = function() {
                var3 = _closure2_slot8;
                var1 = undefined;
                var2 = false;
                var2 = var3.bind(var1)(var2);
                return var1;
            };
            return var1;
        };
        var7 = var8.bind(var4)(var7);
        var8 = var14.useMemo;
        var7 = new Array(1);
        var7[0] = var6;
        var6 = function() {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                var5 = global;
                var8 = var5.Math;
                var6 = var8.max;
                var4 = _closure2_slot1;
                var1 = _closure1_slot12;
                var1 = var1.STREAM;
                var9 = var4[var1];
                var4 = null;
                var10 = var4 != var9;
                var7 = 1;
                var1 = var7;
                if(!var10) { _fun0002_ip = 55; continue _fun0002 }
 52:
                var1 = var9;
 55:
                var6 = var6.bind(var8)(var1, var7);
                var1 = new Array(3);
                var1[0] = var6;
                var6 = var5.Math;
                var5 = var6.max;
                var9 = _closure2_slot1;
                var8 = _closure1_slot12;
                var8 = var8.SPEAKER;
                var8 = var9[var8];
                var9 = var4 != var8;
                var4 = var7;
                if(!var9) { _fun0002_ip = 111; continue _fun0002 }
 108:
                var4 = var8;
 111:
                var4 = var5.bind(var6)(var4, var7);
                var1[1] = var4;
                var3 = _closure2_slot1;
                var2 = _closure1_slot12;
                var2 = var2.AUDIENCE;
                var2 = var3[var2];
                var1[2] = var2;
                return var1;
            }
        };
        var10 = var8.bind(var14)(var6, var7);
        var _closure2_slot9 = var10;
        var24 = _closure1_slot0;
        var7 = 9;
        var6 = var12[var7];
        var9 = var24.bind(var4)(var6);
        var8 = var9.useActualStageSpeakerCount;
        var6 = var20.id;
        var19 = var8.bind(var9)(var6);
        var _closure2_slot10 = var19;
        var6 = var12[var7];
        var23 = var24.bind(var4)(var6);
        var13 = var23.useStageParticipantsCount;
        var9 = var20.id;
        var6 = 7;
        var8 = var12[var6];
        var8 = var24.bind(var4)(var8);
        var8 = var8.StageChannelParticipantNamedIndex;
        var8 = var8.AUDIENCE;
        var13 = var13.bind(var23)(var9, var8);
        var _closure2_slot11 = var13;
        var23 = var14.useCallback;
        var9 = new Array(2);
        var9[0] = var19;
        var9[1] = var13;
        var8 = function(arg1) {
            _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                var2 = arg1;
                var3 = _closure1_slot12;
                var3 = var3.STREAM;
                if(!(var3 !== var2)) { _fun0003_ip = 132; continue _fun0003 }
 20:
                var3 = _closure1_slot12;
                var3 = var3.SPEAKER;
                if(!(var3 !== var2)) { _fun0003_ip = 112; continue _fun0003 }
 34:
                var3 = _closure1_slot12;
                var3 = var3.AUDIENCE;
                if(!(var3 !== var2)) { _fun0003_ip = 92; continue _fun0003 }
 48:
                var3 = _closure1_slot1;
                var4 = _closure1_slot2;
                var1 = 10;
                var1 = var4[var1];
                var4 = undefined;
                var3 = var3.bind(var4)(var1);
                var1 = null;
                var2 = var1 != var2;
                var1 = 'Section Not Found';
                var1 = var3.bind(var4)(var2, var1);
                var1 = 0;
                return var1;
 92:
                var3 = _closure2_slot11;
                var1 = 48;
                var2 = 0;
                if(!(var2 === var3)) { _fun0003_ip = 110; continue _fun0003 }
 108:
                var1 = 0;
 110:
                return var1;
 112:
                var3 = _closure2_slot10;
                var1 = 48;
                var2 = 0;
                if(!(var2 === var3)) { _fun0003_ip = 130; continue _fun0003 }
 128:
                var1 = 0;
 130:
                return var1;
 132:
                var1 = 0;
                return var1;
            }
        };
        var8 = var23.bind(var14)(var8, var9);
        var _closure2_slot12 = var8;
        var23 = var14.useCallback;
        var9 = new Array(4);
        var9[0] = var8;
        var9[1] = var16;
        var9[2] = var15;
        var9[3] = var5;
        var8 = function(arg1, arg2) {
            _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                var7 = arg1;
                var4 = arg2;
                var5 = null;
                if(!(var5 != var4)) { _fun0004_ip = 260; continue _fun0004 }
 15:
                var6 = 0;
                var3 = 0;
                if(!(var3 === var4)) { _fun0004_ip = 41; continue _fun0004 }
 23:
                var2 = _closure2_slot12;
                var1 = undefined;
                var1 = var2.bind(var1)(var7);
                var3 = var6 + var1;
 41:
                var1 = _closure1_slot12;
                var1 = var1.STREAM;
                if(!(var1 !== var7)) { _fun0004_ip = 217; continue _fun0004 }
 61:
                var1 = _closure1_slot12;
                var1 = var1.SPEAKER;
                if(!(var1 !== var7)) { _fun0004_ip = 151; continue _fun0004 }
 75:
                var1 = _closure1_slot12;
                var1 = var1.AUDIENCE;
                if(!(var1 !== var7)) { _fun0004_ip = 129; continue _fun0004 }
 89:
                var8 = _closure1_slot1;
                var9 = _closure1_slot2;
                var1 = 10;
                var1 = var9[var1];
                var10 = undefined;
                var9 = var8.bind(var10)(var1);
                var8 = var5 != var7;
                var1 = 'Section Not Found';
                var1 = var9.bind(var10)(var8, var1);
                return var6;
 129:
                var8 = _closure2_slot3;
                var1 = var3;
                if(var8) { _fun0004_ip = 149; continue _fun0004 }
 142:
                var8 = 102;
                var1 = var8 + var3;
 149:
                return var1;
 151:
                var8 = _closure2_slot2;
                var8 = var8[var7];
                var8 = var8[var4];
                if(!(var5 != var8)) { _fun0004_ip = 215; continue _fun0004 }
 170:
                var10 = _closure1_slot10;
                var8 = _closure2_slot2;
                var8 = var8[var7];
                var8 = var8[var4];
                var9 = var8.length;
                var8 = undefined;
                var8 = var10.bind(var8)(var4, var9);
                var9 = _closure2_slot5;
                var1 = var3;
                if(var9) { _fun0004_ip = 213; continue _fun0004 }
 209:
                var1 = var8 + var3;
 213:
                return var1;
 215:
                return var3;
 217:
                var1 = _closure2_slot2;
                var1 = var1[var7];
                var4 = var1[var4];
                var1 = var3;
                if(!(var5 != var4)) { _fun0004_ip = 258; continue _fun0004 }
 239:
                var5 = _closure1_slot10;
                var4 = undefined;
                var2 = 1;
                var2 = var5.bind(var4)(var6, var2);
                var1 = var2 + var3;
 258:
                return var1;
 260:
                var1 = 0;
                return var1;
            }
        };
        var8 = var23.bind(var14)(var8, var9);
        var _closure2_slot13 = var8;
        var7 = var12[var7];
        var23 = var24.bind(var4)(var7);
        var9 = var23.useStageParticipants;
        var7 = var20.id;
        var6 = var12[var6];
        var6 = var24.bind(var4)(var6);
        var6 = var6.StageChannelParticipantNamedIndex;
        var6 = var6.SPEAKER;
        var9 = var9.bind(var23)(var7, var6);
        var7 = var9.filter;
        var6 = function(arg1) {
            var1 = arg1;
            var2 = var1.type;
            var4 = _closure1_slot0;
            var3 = _closure1_slot2;
            var1 = 7;
            var3 = var3[var1];
            var1 = undefined;
            var1 = var4.bind(var1)(var3);
            var1 = var1.StageChannelParticipantTypes;
            var1 = var1.VOICE;
            var1 = var2 === var1;
            return var1;
        };
        var9 = var7.bind(var9)(var6);
        var7 = var9.map;
        var6 = function(arg1) {
            var1 = arg1;
            var1 = var1.user;
            return var1;
        };
        var6 = var7.bind(var9)(var6);
        var _closure2_slot14 = var6;
        var9 = var14.useCallback;
        var7 = new Array(7);
        var7[0] = var22;
        var7[1] = var15;
        var7[2] = var5;
        var7[3] = var21;
        var7[4] = var19;
        var7[5] = var13;
        var7[6] = var6;
        var6 = function(arg1) {
            _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                var2 = arg1;
                var1 = _closure1_slot12;
                var1 = var1.STREAM;
                if(!(var1 !== var2)) { _fun0005_ip = 479; continue _fun0005 }
 25:
                var1 = _closure1_slot12;
                var1 = var1.AUDIENCE;
                if(!(var1 !== var2)) { _fun0005_ip = 338; continue _fun0005 }
 42:
                var1 = _closure1_slot12;
                var1 = var1.SPEAKER;
                if(!(var1 !== var2)) { _fun0005_ip = 98; continue _fun0005 }
 56:
                var3 = _closure1_slot1;
                var4 = _closure1_slot2;
                var1 = 10;
                var1 = var4[var1];
                var5 = undefined;
                var4 = var3.bind(var5)(var1);
                var1 = null;
                var3 = var1 != var2;
                var2 = 'Section Not Found';
                var2 = var4.bind(var5)(var3, var2);
                return var1;
 98:
                var3 = _closure2_slot10;
                var2 = 0;
                var1 = null;
                if(!(var2 !== var3)) { _fun0005_ip = 336; continue _fun0005 }
 116:
                var5 = _closure1_slot7;
                var3 = _closure1_slot1;
                var13 = _closure1_slot2;
                var2 = 11;
                var2 = var13[var2];
                var4 = undefined;
                var3 = var3.bind(var4)(var2);
                var2 = {};
                var11 = _closure1_slot0;
                var6 = 12;
                var9 = var13[var6];
                var9 = var11.bind(var4)(var9);
                var10 = var9.intl;
                var9 = var10.string;
                var6 = var13[var6];
                var6 = var11.bind(var4)(var6);
                var6 = var6.t;
                var6 = var6.CduOk5;
                var6 = var9.bind(var10)(var6);
                var2['label'] = var6;
                var6 = _closure2_slot10;
                var2['count'] = var6;
                var6 = function onToggleCollapse() {
                    var3 = _closure2_slot6;
                    var1 = _closure2_slot5;
                    var2 = !var1;
                    var1 = undefined;
                    var1 = var3.bind(var1)(var2);
                    return var1;
                };
                var2['onToggleCollapse'] = var6;
                var9 = _closure2_slot5;
                var2['collapsed'] = var9;
                var6 = undefined;
                if(!var9) { _fun0005_ip = 326; continue _fun0005 }
 236:
                var11 = _closure1_slot7;
                var10 = _closure1_slot1;
                var14 = _closure1_slot2;
                var9 = 13;
                var9 = var14[var9];
                var10 = var10.bind(var4)(var9);
                var9 = {};
                var12 = _closure2_slot14;
                var9['users'] = var12;
                var12 = 10;
                var9['max'] = var12;
                var13 = _closure1_slot0;
                var12 = 5;
                var12 = var14[var12];
                var12 = var13.bind(var4)(var12);
                var12 = var12.AvatarSizes;
                var12 = var12.XSMALL_20;
                var9['avatarSize'] = var12;
                var12 = _closure1_slot9;
                var9['cutout'] = var12;
                var6 = var11.bind(var4)(var10, var9);
 326:
                var2['children'] = var6;
                var1 = var5.bind(var4)(var3, var2);
 336:
                return var1;
 338:
                var3 = _closure2_slot11;
                var2 = 0;
                var1 = null;
                if(!(var2 !== var3)) { _fun0005_ip = 477; continue _fun0005 }
 356:
                var5 = _closure1_slot7;
                var3 = _closure1_slot1;
                var12 = _closure1_slot2;
                var2 = 11;
                var2 = var12[var2];
                var4 = undefined;
                var3 = var3.bind(var4)(var2);
                var2 = {};
                var11 = _closure1_slot0;
                var8 = 12;
                var9 = var12[var8];
                var9 = var11.bind(var4)(var9);
                var10 = var9.intl;
                var9 = var10.string;
                var8 = var12[var8];
                var8 = var11.bind(var4)(var8);
                var8 = var8.t;
                var8 = var8.3foUu7;
                var8 = var9.bind(var10)(var8);
                var2['label'] = var8;
                var8 = _closure2_slot11;
                var2['count'] = var8;
                var7 = function onToggleCollapse() {
                    var3 = _closure2_slot4;
                    var1 = _closure2_slot3;
                    var2 = !var1;
                    var1 = undefined;
                    var1 = var3.bind(var1)(var2);
                    return var1;
                };
                var2['onToggleCollapse'] = var7;
                var6 = _closure2_slot3;
                var2['collapsed'] = var6;
                var1 = var5.bind(var4)(var3, var2);
 477:
                return var1;
 479:
                var1 = null;
                return var1;
            }
        };
        var19 = var9.bind(var14)(var6, var7);
        var _closure2_slot15 = var19;
        var9 = var14.useCallback;
        var7 = function(arg1) {
            _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
                var2 = arg1;
                var3 = _closure1_slot12;
                var3 = var3.SPEAKER;
                if(!(var3 !== var2)) { _fun0006_ip = 76; continue _fun0006 }
 20:
                var3 = _closure1_slot12;
                var3 = var3.AUDIENCE;
                if(!(var3 !== var2)) { _fun0006_ip = 76; continue _fun0006 }
 34:
                var3 = _closure1_slot1;
                var4 = _closure1_slot2;
                var1 = 10;
                var1 = var4[var1];
                var5 = undefined;
                var4 = var3.bind(var5)(var1);
                var1 = null;
                var3 = var1 != var2;
                var2 = 'Section Not Found';
                var2 = var4.bind(var5)(var3, var2);
                return var1;
 76:
                var1 = null;
                return var1;
            }
        };
        var6 = new Array(0);
        var7 = var9.bind(var14)(var7, var6);
        var13 = var14.useCallback;
        var9 = function(arg1) {
            _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
                var2 = arg1;
                var3 = _closure1_slot12;
                var3 = var3.SPEAKER;
                if(!(var3 !== var2)) { _fun0007_ip = 83; continue _fun0007 }
 20:
                var3 = _closure1_slot12;
                var3 = var3.AUDIENCE;
                if(!(var3 !== var2)) { _fun0007_ip = 78; continue _fun0007 }
 34:
                var3 = _closure1_slot1;
                var4 = _closure1_slot2;
                var1 = 10;
                var1 = var4[var1];
                var4 = undefined;
                var3 = var3.bind(var4)(var1);
                var1 = null;
                var2 = var1 != var2;
                var1 = 'Section Not Found';
                var1 = var3.bind(var4)(var2, var1);
                var1 = 0;
                return var1;
 78:
                var1 = 160;
                return var1;
 83:
                var1 = 0;
                return var1;
            }
        };
        var6 = new Array(0);
        var6 = var13.bind(var14)(var9, var6);
        var13 = var14.useCallback;
        var9 = new Array(5);
        var9[0] = var20;
        var9[1] = var19;
        var9[2] = var16;
        var9[3] = var15;
        var9[4] = var5;
        var5 = function(arg1, arg2) {
            _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
 0:
                var10 = arg1;
                var9 = arg2;
                var3 = null;
                var2 = 0;
                var1 = null;
                if(!(var2 === var9)) { _fun0008_ip = 30; continue _fun0008 }
 16:
                var4 = _closure2_slot15;
                var2 = undefined;
                var1 = var4.bind(var2)(var10);
 30:
                var2 = _closure2_slot2;
                var2 = var2[var10];
                var2 = var2[var9];
                if(!(var3 != var2)) { _fun0008_ip = 551; continue _fun0008 }
 52:
                var4 = _closure1_slot12;
                var4 = var4.STREAM;
                if(!(var4 !== var10)) { _fun0008_ip = 432; continue _fun0008 }
 72:
                var4 = _closure1_slot12;
                var4 = var4.SPEAKER;
                if(!(var4 !== var10)) { _fun0008_ip = 285; continue _fun0008 }
 89:
                var4 = _closure1_slot12;
                var4 = var4.AUDIENCE;
                if(!(var4 !== var10)) { _fun0008_ip = 143; continue _fun0008 }
 103:
                var5 = _closure1_slot1;
                var6 = _closure1_slot2;
                var4 = 10;
                var4 = var6[var4];
                var7 = undefined;
                var6 = var5.bind(var7)(var4);
                var5 = var3 != var10;
                var4 = 'Section Not Found';
                var4 = var6.bind(var7)(var5, var4);
                return var3;
 143:
                var7 = _closure1_slot8;
                var3 = _closure1_slot4;
                var6 = var3.Fragment;
                var5 = {};
                var3 = new Array(2);
                var3[0] = var1;
                var4 = _closure2_slot3;
                var4 = !var4;
                if(!var4) { _fun0008_ip = 236; continue _fun0008 }
 177:
                var14 = _closure1_slot7;
                var12 = _closure1_slot1;
                var13 = _closure1_slot2;
                var11 = 15;
                var11 = var13[var11];
                var13 = undefined;
                var12 = var12.bind(var13)(var11);
                var11 = {};
                var15 = _closure2_slot0;
                var11['channel'] = var15;
                var15 = _closure2_slot2;
                var15 = var15[var10];
                var15 = var15[var9];
                var11['participants'] = var15;
                var4 = var14.bind(var13)(var12, var11);
 236:
                var3[1] = var4;
                var5['children'] = var3;
                var3 = global;
                var3 = var3.HermesInternal;
                var11 = var3.concat;
                var4 = 'audience-';
                var3 = '-';
                var4 = var11.bind(var4)(var10, var3, var9);
                var3 = undefined;
                var3 = var7.bind(var3)(var6, var5, var4);
                return var3;
 285:
                var7 = _closure1_slot8;
                var3 = _closure1_slot4;
                var6 = var3.Fragment;
                var5 = {};
                var3 = new Array(2);
                var3[0] = var1;
                var4 = _closure2_slot5;
                var4 = !var4;
                if(!var4) { _fun0008_ip = 383; continue _fun0008 }
 319:
                var14 = _closure1_slot7;
                var12 = _closure1_slot1;
                var13 = _closure1_slot2;
                var11 = 14;
                var11 = var13[var11];
                var13 = undefined;
                var12 = var12.bind(var13)(var11);
                var11 = {};
                var15 = _closure2_slot0;
                var11['channel'] = var15;
                var15 = _closure2_slot2;
                var15 = var15[var10];
                var15 = var15[var9];
                var11['participants'] = var15;
                var11['row'] = var9;
                var4 = var14.bind(var13)(var12, var11);
 383:
                var3[1] = var4;
                var5['children'] = var3;
                var3 = global;
                var3 = var3.HermesInternal;
                var11 = var3.concat;
                var4 = 'speaker-';
                var3 = '-';
                var4 = var11.bind(var4)(var10, var3, var9);
                var3 = undefined;
                var3 = var7.bind(var3)(var6, var5, var4);
                return var3;
 432:
                var6 = _closure1_slot7;
                var3 = _closure1_slot4;
                var5 = var3.Fragment;
                var4 = {};
                var7 = _closure1_slot1;
                var3 = _closure1_slot2;
                var2 = 14;
                var2 = var3[var2];
                var3 = undefined;
                var7 = var7.bind(var3)(var2);
                var2 = {};
                var11 = _closure2_slot0;
                var2['channel'] = var11;
                var8 = _closure2_slot2;
                var8 = var8[var10];
                var8 = var8[var9];
                var2['participants'] = var8;
                var2['row'] = var9;
                var2 = var6.bind(var3)(var7, var2);
                var4['children'] = var2;
                var2 = global;
                var2 = var2.HermesInternal;
                var8 = var2.concat;
                var7 = 'stream-';
                var2 = '-';
                var2 = var8.bind(var7)(var10, var2, var9);
                var2 = var6.bind(var3)(var5, var4, var2);
                return var2;
 551:
                return var1;
            }
        };
        var9 = var13.bind(var14)(var5, var9);
        var15 = var14.useMemo;
        var13 = new Array(2);
        var13[0] = var10;
        var13[1] = var8;
        var5 = function() {
            _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
 0:
                var4 = _closure2_slot9;
                var1 = _closure1_slot12;
                var1 = var1.STREAM;
                var1 = var4[var1];
                var5 = 0;
                var4 = var1 > var5;
                var1 = 0;
                if(!var4) { _fun0009_ip = 57; continue _fun0009 }
 35:
                var4 = _closure2_slot13;
                var2 = _closure1_slot12;
                var3 = var2.STREAM;
                var2 = undefined;
                var1 = var4.bind(var2)(var3, var5);
 57:
                return var1;
            }
        };
        var15 = var15.bind(var14)(var5, var13);
        var _closure2_slot16 = var15;
        var16 = var14.useMemo;
        var13 = new Array(2);
        var13[0] = var10;
        var13[1] = var8;
        var5 = function() {
            _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
 0:
                var2 = _closure2_slot9;
                var1 = _closure1_slot12;
                var1 = var1.SPEAKER;
                var2 = var2[var1];
                var1 = 0;
                var2 = var1 < var2;
                var5 = undefined;
                var4 = 0;
                var3 = 0;
                if(!var2) { _fun0010_ip = 87; continue _fun0010 }
 39:
                var9 = _closure2_slot13;
                var2 = _closure1_slot12;
                var8 = var2.SPEAKER;
                var8 = var9.bind(var5)(var8, var3);
                var4 = var4 + var8;
                var3 = var3 + 1;
                var9 = _closure2_slot9;
                var2 = var2.SPEAKER;
                var2 = var9[var2];
                var1 = var4;
                if(var3 < var2) { _fun0010_ip = 39; continue _fun0010 }
 87:
                return var1;
            }
        };
        var16 = var16.bind(var14)(var5, var13);
        var _closure2_slot17 = var16;
        var13 = var14.useCallback;
        var5 = new Array(4);
        var5[0] = var18;
        var5[1] = var17;
        var5[2] = var16;
        var5[3] = var15;
        var3 = function(arg1) {
            _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
 0:
                var1 = arg1;
                var1 = var1.nativeEvent;
                var1 = var1.contentOffset;
                var4 = var1.y;
                var3 = _closure2_slot17;
                var2 = _closure2_slot16;
                var3 = var3 + var2;
                var2 = 60;
                var3 = var3 - var2;
                var2 = _closure2_slot7;
                if(var2) { _fun0011_ip = 68; continue _fun0011 }
 49:
                if(!(var4 > var3)) { _fun0011_ip = 68; continue _fun0011 }
 53:
                var6 = _closure2_slot8;
                var5 = undefined;
                var2 = true;
                var2 = var6.bind(var5)(var2);
                _fun0011_ip = 95; continue _fun0011;
 68:
                var2 = _closure2_slot7;
                if(!var2) { _fun0011_ip = 79; continue _fun0011 }
 75:
                var2 = var4 < var3;
 79:
                if(!var2) { _fun0011_ip = 95; continue _fun0011 }
 82:
                var3 = _closure2_slot8;
                var2 = undefined;
                var1 = false;
                var1 = var3.bind(var2)(var1);
 95:
                var1 = undefined;
                return var1;
            }
        };
        var5 = var13.bind(var14)(var3, var5);
        var3 = _closure1_slot7;
        var1 = 16;
        var1 = var12[var1];
        var2 = var2.bind(var4)(var1);
        var1 = {};
        var1['ref'] = var11;
        var1['sections'] = var10;
        var1['renderItem'] = var9;
        var1['itemSize'] = var8;
        var1['renderSectionFooter'] = var7;
        var1['sectionFooterSize'] = var6;
        var1['onScroll'] = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var4 = var7.bind(var8)(var4);
    var _closure1_slot13 = var4;
    var4 = 18;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/stage_channels/native/components/StageChannelCallList.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function StageChannelCallList(arg1) {
        var1 = arg1;
        var7 = var1.channel;
        var3 = _closure1_slot0;
        var5 = _closure1_slot2;
        var2 = 17;
        var6 = var5[var2];
        var4 = undefined;
        var9 = var3.bind(var4)(var6);
        var8 = var9.useThrottleDurationForChannel;
        var6 = var7.id;
        var11 = var8.bind(var9)(var6);
        var2 = var5[var2];
        var8 = var3.bind(var4)(var2);
        var6 = var8.useStageChannelParticipantsListThrottled;
        var13 = var7.id;
        var12 = _closure1_slot11;
        var10 = true;
        var14 = var8;
        var5 = var14[var6](var13, var12, var11, var10, var9);
        var3 = _closure1_slot3;
        var2 = 2;
        var3 = var3.bind(var4)(var5, var2);
        var2 = 0;
        var6 = var3[var2];
        var2 = 1;
        var5 = var3[var2];
        var3 = _closure1_slot7;
        var2 = _closure1_slot13;
        var1 = {};
        var1['channel'] = var7;
        var1['listSections'] = var6;
        var1['rowsBySection'] = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var3['default'] = var2;
    return var1;
})();