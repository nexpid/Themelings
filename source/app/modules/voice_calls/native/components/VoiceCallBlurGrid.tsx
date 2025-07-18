// app/modules/voice_calls/native/components/VoiceCallBlurGrid.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var11 = native3;
    var3 = native6;
    var6 = native7;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var11;
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
    var4 = var4.bind(var1)(var7);
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.View;
    var _closure1_slot3 = var7;
    var7 = var4.ImageBackground;
    var _closure1_slot4 = var7;
    var8 = var4.StyleSheet;
    var _closure1_slot5 = var8;
    var4 = 2;
    var4 = var6[var4];
    var4 = var11.bind(var1)(var4);
    var _closure1_slot6 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var11.bind(var1)(var4);
    var _closure1_slot7 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var11.bind(var1)(var4);
    var _closure1_slot8 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.jsx;
    var _closure1_slot9 = var7;
    var4 = var4.jsxs;
    var _closure1_slot10 = var4;
    var7 = var8.create;
    var4 = {};
    var9 = {};
    var14 = var8.absoluteFillObject;
    var15 = var9;
    var10 = copyDataProperties(var15, var14);
    var12 = 0.5;
    var10 = 'opacity';
    var9[var10] = var12;
    var10 = 6;
    var10 = var6[var10];
    var10 = var11.bind(var1)(var10);
    var10 = var10.unsafe_rawColors;
    var11 = var10.PRIMARY_600;
    var10 = 'backgroundColor';
    var9[var10] = var11;
    var4['imageBackgroundCover'] = var9;
    var9 = {'flex': 1, 'alignSelf': 'stretch'};
    var4['avatar'] = var9;
    var9 = {'flex': 1, 'alignSelf': 'stretch', 'flexDirection': 'row'};
    var4['avatarRow'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot11 = var4;
    var4 = function AvatarRow(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var1 = arg1;
            var4 = var1.recipients;
            var1 = var1.guildId;
            var _closure2_slot0 = var1;
            var1 = null;
            if(!(var1 != var4)) { _fun0001_ip = 95; continue _fun0001 }
 26:
            var5 = var4.length;
            var3 = 0;
            if(!(var3 !== var5)) { _fun0001_ip = 95; continue _fun0001 }
 37:
            var3 = var4.map;
            var2 = function(arg1) {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var6 = arg1;
                    var3 = _closure1_slot8;
                    var1 = var3.getUser;
                    var9 = var1.bind(var3)(var6);
                    var1 = null;
                    var3 = var1 == var9;
                    if(var3) { _fun0002_ip = 85; continue _fun0002 }
 30:
                    var5 = _closure1_slot9;
                    var4 = _closure1_slot4;
                    var3 = {};
                    var8 = var9.getAvatarSource;
                    var7 = _closure2_slot0;
                    var7 = var8.bind(var9)(var7);
                    var3['source'] = var7;
                    var2 = _closure1_slot11;
                    var2 = var2.avatar;
                    var3['style'] = var2;
                    var2 = undefined;
                    var1 = var5.bind(var2)(var4, var3, var6);
 85:
                    return var1;
                }
            };
            var2 = var3.bind(var4)(var2);
            var5 = _closure1_slot9;
            var4 = _closure1_slot3;
            var3 = {};
            var6 = _closure1_slot11;
            var6 = var6.avatarRow;
            var3['style'] = var6;
            var3['children'] = var2;
            var2 = undefined;
            var2 = var5.bind(var2)(var4, var3);
            return var2;
 95:
            return var1;
        }
    };
    var _closure1_slot12 = var4;
    var4 = 10;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/voice_calls/native/components/VoiceCallBlurGrid.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function _default(arg1) {
        var2 = arg1;
        var9 = var2.channelId;
        var _closure2_slot0 = var9;
        var12 = var2.guildId;
        var5 = _closure1_slot0;
        var11 = _closure1_slot2;
        var2 = 7;
        var2 = var11[var2];
        var4 = undefined;
        var7 = var5.bind(var4)(var2);
        var6 = var7.useStateFromStoresArray;
        var2 = _closure1_slot7;
        var3 = new Array(1);
        var3[0] = var2;
        var2 = new Array(1);
        var2[0] = var9;
        var1 = function() {
            _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                var3 = _closure1_slot7;
                var2 = var3.getChannel;
                var1 = _closure2_slot0;
                var2 = var2.bind(var3)(var1);
                var1 = null;
                if(!(var1 != var2)) { _fun0003_ip = 43; continue _fun0003 }
 30:
                var1 = var2.isPrivate;
                var1 = var1.bind(var2)();
                if(var1) { _fun0003_ip = 49; continue _fun0003 }
 43:
                var1 = new Array(0);
                _fun0003_ip = 71; continue _fun0003;
 49:
                var5 = var2.recipients;
                var4 = var5.slice;
                var3 = 0;
                var2 = 3;
                var1 = var4.bind(var5)(var3, var2);
 71:
                return var1;
            }
        };
        var6 = var6.bind(var7)(var3, var1, var2);
        var1 = var6.shift;
        var1 = var1.bind(var6)();
        var7 = new Array(2);
        var7[0] = var1;
        var1 = var6.shift;
        var1 = var1.bind(var6)();
        var7[1] = var1;
        var3 = var7.filter;
        var1 = 8;
        var2 = var11[var1];
        var2 = var5.bind(var4)(var2);
        var2 = var2.isNotNullish;
        var13 = var3.bind(var7)(var2);
        var3 = _closure1_slot6;
        var2 = var3.getId;
        var2 = var2.bind(var3)();
        var3 = new Array(2);
        var3[0] = var2;
        var2 = var6.shift;
        var2 = var2.bind(var6)();
        var3[1] = var2;
        var2 = var3.filter;
        var1 = var11[var1];
        var1 = var5.bind(var4)(var1);
        var1 = var1.isNotNullish;
        var6 = var2.bind(var3)(var1);
        var3 = _closure1_slot10;
        var2 = _closure1_slot3;
        var1 = {};
        var10 = _closure1_slot5;
        var5 = var10.absoluteFill;
        var1['style'] = var5;
        var7 = _closure1_slot9;
        var9 = _closure1_slot12;
        var5 = {};
        var5['recipients'] = var6;
        var5['guildId'] = var12;
        var6 = var7.bind(var4)(var9, var5);
        var5 = new Array(4);
        var5[0] = var6;
        var6 = {};
        var6['recipients'] = var13;
        var6['guildId'] = var12;
        var6 = var7.bind(var4)(var9, var6);
        var5[1] = var6;
        var9 = _closure1_slot1;
        var6 = 9;
        var6 = var11[var6];
        var9 = var9.bind(var4)(var6);
        var6 = {};
        var11 = 'dark';
        var6['blurTheme'] = var11;
        var10 = var10.absoluteFill;
        var6['style'] = var10;
        var6 = var7.bind(var4)(var9, var6);
        var5[2] = var6;
        var6 = {};
        var8 = _closure1_slot11;
        var8 = var8.imageBackgroundCover;
        var6['style'] = var8;
        var6 = var7.bind(var4)(var2, var6);
        var5[3] = var6;
        var1['children'] = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var3['default'] = var2;
    return var1;
})();