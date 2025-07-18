// app/modules/stage_channels/native/components/SpeakerTileStatuses.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var7 = native2;
    var12 = native3;
    var3 = native6;
    var8 = native7;
    var _closure1_slot0 = var7;
    var _closure1_slot1 = var12;
    var _closure1_slot2 = var8;
    var1 = global;
    var6 = var1.Object;
    var5 = var6.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var5.bind(var6)(var3, var1, var4);
    var1 = 0;
    var5 = var8[var1];
    var4 = native4;
    var1 = undefined;
    var9 = var4.bind(var1)(var5);
    var4 = 1;
    var4 = var8[var4];
    var4 = var7.bind(var1)(var4);
    var4 = var4.View;
    var _closure1_slot3 = var4;
    var4 = 2;
    var4 = var8[var4];
    var4 = var12.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 3;
    var4 = var8[var4];
    var4 = var12.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 4;
    var4 = var8[var4];
    var4 = var12.bind(var1)(var4);
    var _closure1_slot6 = var4;
    var4 = 5;
    var4 = var8[var4];
    var4 = var7.bind(var1)(var4);
    var4 = var4.jsx;
    var _closure1_slot7 = var4;
    var4 = 6;
    var4 = var8[var4];
    var6 = var7.bind(var1)(var4);
    var5 = var6.createStyles;
    var4 = {};
    var10 = {'position': 'absolute', 'top': 4, 'left': 4, 'backgroundColor': null, 'borderRadius': null, 'width': 24, 'height': 24, 'justifyContent': 'center', 'alignItems': 'center'};
    var11 = 7;
    var13 = var8[var11];
    var13 = var12.bind(var1)(var13);
    var13 = var13.colors;
    var13 = var13.WHITE;
    var10['backgroundColor'] = var13;
    var13 = var8[var11];
    var13 = var12.bind(var1)(var13);
    var13 = var13.radii;
    var13 = var13.md;
    var10['borderRadius'] = var13;
    var4['voiceStatusWrapper'] = var10;
    var10 = {'position': 'absolute', 'top': 4, 'right': 4, 'backgroundColor': null, 'borderRadius': null, 'width': 24, 'height': 24, 'justifyContent': 'center', 'alignItems': 'center'};
    var13 = var8[var11];
    var13 = var12.bind(var1)(var13);
    var13 = var13.colors;
    var13 = var13.WHITE;
    var10['backgroundColor'] = var13;
    var13 = var8[var11];
    var13 = var12.bind(var1)(var13);
    var13 = var13.radii;
    var13 = var13.md;
    var10['borderRadius'] = var13;
    var4['moderatorStatusWrapper'] = var10;
    var10 = {};
    var11 = var8[var11];
    var11 = var12.bind(var1)(var11);
    var11 = var11.spacing;
    var11 = var11.PX_4;
    var10['marginEnd'] = var11;
    var4['restricted'] = var10;
    var4 = var5.bind(var6)(var4);
    var _closure1_slot8 = var4;
    var5 = var9.memo;
    var4 = function(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var2 = arg1;
            var11 = var2.userId;
            var _closure2_slot0 = var11;
            var12 = var2.channelId;
            var _closure2_slot1 = var12;
            var9 = var2.style;
            var2 = _closure1_slot8;
            var5 = undefined;
            var7 = var2.bind(var5)();
            var3 = _closure1_slot0;
            var8 = _closure1_slot2;
            var2 = 8;
            var4 = var8[var2];
            var15 = var3.bind(var5)(var4);
            var14 = var15.useStateFromStores;
            var4 = _closure1_slot4;
            var13 = new Array(1);
            var13[0] = var4;
            var10 = new Array(1);
            var10[0] = var11;
            var4 = function() {
                var3 = _closure1_slot4;
                var2 = var3.isLocalMute;
                var1 = _closure2_slot0;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var4 = var14.bind(var15)(var13, var4, var10);
            var2 = var8[var2];
            var10 = var3.bind(var5)(var2);
            var8 = var10.useStateFromStores;
            var2 = _closure1_slot5;
            var3 = new Array(1);
            var3[0] = var2;
            var2 = new Array(2);
            var2[0] = var12;
            var2[1] = var11;
            var1 = function() {
                var4 = _closure1_slot5;
                var3 = var4.getVoiceStateForChannel;
                var2 = _closure2_slot1;
                var1 = _closure2_slot0;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            };
            var10 = var8.bind(var10)(var3, var1, var2);
            var1 = null;
            var3 = var1 == var10;
            var2 = undefined;
            if(var3) { _fun0001_ip = 173; continue _fun0001 }
 163:
            var3 = var10.isVoiceMuted;
            var2 = var3.bind(var10)();
 173:
            var3 = var1 != var2;
            if(!var3) { _fun0001_ip = 183; continue _fun0001 }
 180:
            var3 = var2;
 183:
            var2 = var1 == var10;
            var8 = undefined;
            if(var2) { _fun0001_ip = 202; continue _fun0001 }
 192:
            var2 = var10.isVoiceDeafened;
            var8 = var2.bind(var10)();
 202:
            var2 = var1 != var8;
            if(!var2) { _fun0001_ip = 212; continue _fun0001 }
 209:
            var2 = var8;
 212:
            if(var4) { _fun0001_ip = 273; continue _fun0001 }
 215:
            if(var2) { _fun0001_ip = 249; continue _fun0001 }
 218:
            var12 = undefined;
            var8 = false;
            if(!var3) { _fun0001_ip = 295; continue _fun0001 }
 225:
            var4 = _closure1_slot1;
            var10 = _closure1_slot2;
            var3 = 11;
            var3 = var10[var3];
            var12 = var4.bind(var5)(var3);
            var8 = false;
            _fun0001_ip = 295; continue _fun0001;
 249:
            var3 = _closure1_slot1;
            var4 = _closure1_slot2;
            var2 = 10;
            var2 = var4[var2];
            var12 = var3.bind(var5)(var2);
            var8 = false;
            _fun0001_ip = 295; continue _fun0001;
 273:
            var3 = _closure1_slot1;
            var4 = _closure1_slot2;
            var2 = 9;
            var2 = var4[var2];
            var12 = var3.bind(var5)(var2);
            var8 = true;
 295:
            var2 = var1 == var12;
            var1 = null;
            if(var2) { _fun0001_ip = 438; continue _fun0001 }
 307:
            var4 = _closure1_slot7;
            var3 = _closure1_slot3;
            var2 = {};
            var10 = var7.voiceStatusWrapper;
            var7 = new Array(2);
            var7[0] = var10;
            var7[1] = var9;
            var2['style'] = var7;
            var10 = _closure1_slot1;
            var11 = _closure1_slot2;
            var9 = 12;
            var6 = var11[var9];
            var7 = var10.bind(var5)(var6);
            var6 = {};
            var6['source'] = var12;
            var9 = var11[var9];
            var9 = var10.bind(var5)(var9);
            var9 = var9.Sizes;
            var9 = var9.SMALL;
            var6['size'] = var9;
            var9 = 7;
            var9 = var11[var9];
            var9 = var10.bind(var5)(var9);
            var9 = var9.unsafe_rawColors;
            var9 = var9.BLACK_500;
            var6['color'] = var9;
            var6['disableColor'] = var8;
            var6 = var4.bind(var5)(var7, var6);
            var2['children'] = var6;
            var1 = var4.bind(var5)(var3, var2);
 438:
            return var1;
        }
    };
    var5 = var5.bind(var9)(var4);
    var6 = var9.memo;
    var4 = function(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var2 = arg1;
            var10 = var2.userId;
            var _closure2_slot0 = var10;
            var11 = var2.channelId;
            var _closure2_slot1 = var11;
            var8 = var2.style;
            var2 = _closure1_slot8;
            var5 = undefined;
            var7 = var2.bind(var5)();
            var3 = _closure1_slot0;
            var4 = _closure1_slot2;
            var2 = 8;
            var2 = var4[var2];
            var9 = var3.bind(var5)(var2);
            var4 = var9.useStateFromStores;
            var2 = _closure1_slot6;
            var3 = new Array(1);
            var3[0] = var2;
            var2 = new Array(2);
            var2[0] = var11;
            var2[1] = var10;
            var1 = function() {
                var4 = _closure1_slot6;
                var3 = var4.isModerator;
                var2 = _closure2_slot0;
                var1 = _closure2_slot1;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            };
            var1 = var4.bind(var9)(var3, var1, var2);
            var11 = undefined;
            if(!var1) { _fun0002_ip = 129; continue _fun0002 }
 109:
            var2 = _closure1_slot1;
            var3 = _closure1_slot2;
            var1 = 13;
            var1 = var3[var1];
            var11 = var2.bind(var5)(var1);
 129:
            var1 = null;
            var2 = var1 == var11;
            if(var2) { _fun0002_ip = 267; continue _fun0002 }
 141:
            var4 = _closure1_slot7;
            var3 = _closure1_slot3;
            var2 = {};
            var9 = var7.moderatorStatusWrapper;
            var7 = new Array(2);
            var7[0] = var9;
            var7[1] = var8;
            var2['style'] = var7;
            var9 = _closure1_slot1;
            var10 = _closure1_slot2;
            var8 = 12;
            var6 = var10[var8];
            var7 = var9.bind(var5)(var6);
            var6 = {};
            var6['source'] = var11;
            var8 = var10[var8];
            var8 = var9.bind(var5)(var8);
            var8 = var8.Sizes;
            var8 = var8.SMALL;
            var6['size'] = var8;
            var8 = 7;
            var8 = var10[var8];
            var8 = var9.bind(var5)(var8);
            var8 = var8.unsafe_rawColors;
            var8 = var8.BLACK_500;
            var6['color'] = var8;
            var6 = var4.bind(var5)(var7, var6);
            var2['children'] = var6;
            var1 = var4.bind(var5)(var3, var2);
 267:
            return var1;
        }
    };
    var4 = var6.bind(var9)(var4);
    var6 = 16;
    var6 = var8[var6];
    var8 = var7.bind(var1)(var6);
    var7 = var8.fileFinishedImporting;
    var6 = 'modules/stage_channels/native/components/SpeakerTileStatuses.tsx';
    var6 = var7.bind(var8)(var6);
    var3['VoiceStatus'] = var5;
    var3['ModeratorStatus'] = var4;
    var4 = function() {
        var2 = _closure1_slot8;
        var4 = undefined;
        var8 = var2.bind(var4)();
        var3 = _closure1_slot7;
        var6 = _closure1_slot1;
        var7 = _closure1_slot2;
        var5 = 12;
        var1 = var7[var5];
        var2 = var6.bind(var4)(var1);
        var1 = {};
        var8 = var8.restricted;
        var1['style'] = var8;
        var8 = 14;
        var8 = var7[var8];
        var8 = var6.bind(var4)(var8);
        var1['source'] = var8;
        var5 = var7[var5];
        var5 = var6.bind(var4)(var5);
        var5 = var5.Sizes;
        var5 = var5.EXTRA_SMALL;
        var1['size'] = var5;
        var5 = 7;
        var5 = var7[var5];
        var5 = var6.bind(var4)(var5);
        var5 = var5.unsafe_rawColors;
        var5 = var5.RED_400;
        var1['color'] = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var3['BlockedStatus'] = var4;
    var2 = function() {
        var2 = _closure1_slot8;
        var4 = undefined;
        var8 = var2.bind(var4)();
        var3 = _closure1_slot7;
        var6 = _closure1_slot1;
        var7 = _closure1_slot2;
        var5 = 12;
        var1 = var7[var5];
        var2 = var6.bind(var4)(var1);
        var1 = {};
        var8 = var8.restricted;
        var1['style'] = var8;
        var8 = 15;
        var8 = var7[var8];
        var8 = var6.bind(var4)(var8);
        var1['source'] = var8;
        var5 = var7[var5];
        var5 = var6.bind(var4)(var5);
        var5 = var5.Sizes;
        var5 = var5.EXTRA_SMALL;
        var1['size'] = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var3['IgnoredStatus'] = var2;
    return var1;
})();