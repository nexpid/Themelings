// app/modules/stage_channels/native/components/StageGridRow.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var3 = native6;
    var6 = native7;
    var _closure1_slot0 = var5;
    var1 = native3;
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
    var4 = native4;
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
 0:
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
            if(!(var2 === var8)) { _fun0001_ip = 57; continue _fun0001 }
 52:
            var3 = var7.length;
 57:
            var2 = 1;
            if(!(var2 !== var3)) { _fun0001_ip = 139; continue _fun0001 }
 64:
            var2 = 2;
            if(!(var2 !== var3)) { _fun0001_ip = 105; continue _fun0001 }
 71:
            var3 = _closure1_slot0;
            var8 = _closure1_slot2;
            var2 = 4;
            var2 = var8[var2];
            var2 = var3.bind(var4)(var2);
            var2 = var2.StageTileSize;
            var2 = var2.THIRD;
            _fun0001_ip = 171; continue _fun0001;
 105:
            var8 = _closure1_slot0;
            var9 = _closure1_slot2;
            var3 = 4;
            var3 = var9[var3];
            var3 = var8.bind(var4)(var3);
            var3 = var3.StageTileSize;
            var2 = var3.HALF;
            _fun0001_ip = 171; continue _fun0001;
 139:
            var8 = _closure1_slot0;
            var9 = _closure1_slot2;
            var3 = 4;
            var3 = var9[var3];
            var3 = var8.bind(var4)(var3);
            var3 = var3.StageTileSize;
            var2 = var3.FULL;
 171:
            _closure2_slot1 = var2;
            var3 = _closure1_slot4;
            var2 = _closure1_slot3;
            var1 = {};
            var6 = var6.container;
            var1['style'] = var6;
            var6 = var7.map;
            var5 = function(arg1) {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
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
                    if(var1) { _fun0002_ip = 122; continue _fun0002 }
 52:
                    var5 = var2.type;
                    var7 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var4 = var4[var8];
                    var4 = var7.bind(var6)(var4);
                    var4 = var4.StageChannelParticipantTypes;
                    var4 = var4.VOICE;
                    var4 = var5 === var4;
                    if(!var4) { _fun0002_ip = 119; continue _fun0002 }
 93:
                    var7 = var2.voiceState;
                    var5 = null;
                    var8 = var5 == var7;
                    var5 = undefined;
                    if(var8) { _fun0002_ip = 116; continue _fun0002 }
 110:
                    var5 = var7.selfVideo;
 116:
                    var4 = var5;
 119:
                    var1 = var4;
 122:
                    var5 = _closure1_slot4;
                    var4 = _closure1_slot1;
                    var7 = _closure1_slot2;
                    if(var1) { _fun0002_ip = 213; continue _fun0002 }
 137:
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
                    _fun0002_ip = 287; continue _fun0002;
 213:
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
 287:
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