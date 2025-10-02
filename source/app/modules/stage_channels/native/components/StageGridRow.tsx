// app/modules/stage_channels/native/components/StageGridRow.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var1 = metroImportDefault;
    var _closure1_slot1 = var1;
    var _closure1_slot2 = var6;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var4);
    var1 = 0;
    var7 = var6[var1];
    var4 = metroImportAll;
    var1 = undefined;
    var7 = var4.bind(var1)(var7);
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.View;
    var _closure1_slot3 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.jsx;
    var _closure1_slot4 = var4;
    var4 = 3;
    var4 = var6[var4];
    var9 = var5.bind(var1)(var4);
    var8 = var9.createStyles;
    var4 = {};
    var10 = {'flexDirection': 'row', 'alignItems': 'center'};
    var4['container'] = var10;
    var4 = var8.bind(var9)(var4);
    var _closure1_slot5 = var4;
    var4 = var7.memo;
    var2 = function(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arg1;
            var2 = var1.channel;
            var _closure2_slot0 = var2;
            var7 = var1.participants;
            var8 = var1.row;
            var4 = undefined;
            var _closure2_slot1 = var4;
            var2 = _closure1_slot5;
            var6 = var2.bind(var4)();
            var3 = 3;
            var2 = 0;
            if(!(var2 === var8)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var3 = var7.length;
case 2:
            var2 = 1;
            if(!(var2 !== var3)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var2 = 2;
            if(!(var2 !== var3)) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var3 = _closure1_slot0;
            var8 = _closure1_slot2;
            var2 = 4;
            var2 = var8[var2];
            var2 = var3.bind(var4)(var2);
            var2 = var2.StageTileSize;
            var2 = var2.THIRD;
            _fun0001_ip = 8; continue _fun0001;
case 6:
            var8 = _closure1_slot0;
            var9 = _closure1_slot2;
            var3 = 4;
            var3 = var9[var3];
            var3 = var8.bind(var4)(var3);
            var3 = var3.StageTileSize;
            var2 = var3.HALF;
            _fun0001_ip = 8; continue _fun0001;
case 4:
            var8 = _closure1_slot0;
            var9 = _closure1_slot2;
            var3 = 4;
            var3 = var9[var3];
            var3 = var8.bind(var4)(var3);
            var3 = var3.StageTileSize;
            var2 = var3.FULL;
case 8:
            _closure2_slot1 = var2;
            var3 = _closure1_slot4;
            var2 = _closure1_slot3;
            var1 = {};
            var6 = var6.container;
            var1['style'] = var6;
            var6 = var7.map;
            var5 = function(arg1) {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var2 = arg1;
                    var4 = var2.type;
                    var5 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var8 = 5;
                    var1 = var1[var8];
                    var6 = undefined;
                    var1 = var5.bind(var6)(var1);
                    var1 = var1.StageChannelParticipantTypes;
                    var1 = var1.STREAM;
                    var1 = var4 === var1;
                    if(var1) { _fun0002_ip = 9; continue _fun0002 }
case 3:
                    var5 = var2.type;
                    var7 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var4 = var4[var8];
                    var4 = var7.bind(var6)(var4);
                    var4 = var4.StageChannelParticipantTypes;
                    var4 = var4.VOICE;
                    var4 = var5 === var4;
                    if(!var4) { _fun0002_ip = 10; continue _fun0002 }
case 11:
                    var7 = var2.voiceState;
                    var5 = null;
                    var8 = var5 == var7;
                    var5 = undefined;
                    if(var8) { _fun0002_ip = 12; continue _fun0002 }
case 13:
                    var5 = var7.selfVideo;
case 12:
                    var4 = var5;
case 10:
                    var1 = var4;
case 9:
                    var5 = _closure1_slot4;
                    var4 = _closure1_slot1;
                    var7 = _closure1_slot2;
                    if(var1) { _fun0002_ip = 14; continue _fun0002 }
case 15:
                    var1 = 7;
                    var1 = var7[var1];
                    var8 = var4.bind(var6)(var1);
                    var3 = {};
                    var9 = _closure2_slot0;
                    var3['channel'] = var9;
                    var3['participant'] = var2;
                    var1 = _closure2_slot1;
                    var3['size'] = var1;
                    var10 = var2.id;
                    var1 = global;
                    var1 = var1.HermesInternal;
                    var9 = var1.concat;
                    var1 = 'stage-user-participant-';
                    var1 = var9.bind(var1)(var10);
                    var1 = var5.bind(var6)(var8, var3, var1);
                    _fun0002_ip = 16; continue _fun0002;
case 14:
                    var3 = 6;
                    var3 = var7[var3];
                    var4 = var4.bind(var6)(var3);
                    var3 = {};
                    var3['participant'] = var2;
                    var8 = _closure2_slot1;
                    var3['size'] = var8;
                    var7 = _closure2_slot0;
                    var3['channel'] = var7;
                    var8 = var2.id;
                    var2 = global;
                    var2 = var2.HermesInternal;
                    var7 = var2.concat;
                    var2 = 'stage-media-participant-';
                    var2 = var7.bind(var2)(var8);
                    var1 = var5.bind(var6)(var4, var3, var2);
case 16:
                    return var1;
                }
            };
            var5 = var6.bind(var7)(var5);
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var2 = var4.bind(var7)(var2);
    var4 = 8;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/stage_channels/native/components/StageGridRow.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();