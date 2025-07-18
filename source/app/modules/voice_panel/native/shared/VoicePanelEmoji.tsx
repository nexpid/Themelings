// app/modules/voice_panel/native/shared/VoicePanelEmoji.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var6 = native2;
    var3 = native6;
    var7 = native7;
    var _closure1_slot0 = var6;
    var1 = native3;
    var _closure1_slot1 = var1;
    var _closure1_slot2 = var7;
    var1 = global;
    var8 = var1.Object;
    var5 = var8.defineProperty;
    var2 = {};
    var1 = true;
    var2['value'] = var1;
    var1 = '__esModule';
    var1 = var5.bind(var8)(var3, var1, var2);
    var1 = 0;
    var5 = var7[var1];
    var2 = native4;
    var1 = undefined;
    var2 = var2.bind(var1)(var5);
    var2 = 1;
    var2 = var7[var2];
    var2 = var6.bind(var1)(var2);
    var2 = var2.View;
    var _closure1_slot3 = var2;
    var2 = 2;
    var2 = var7[var2];
    var2 = var6.bind(var1)(var2);
    var2 = var2.DEFAULT_CHANNEL_EMOJI_BACKGROUND_COLOR;
    var _closure1_slot4 = var2;
    var2 = 3;
    var2 = var7[var2];
    var2 = var6.bind(var1)(var2);
    var2 = var2.jsx;
    var _closure1_slot5 = var2;
    var2 = {};
    var5 = 'voice-panel-settings-header';
    var2['VoicePanelSettingsHeader'] = var5;
    var5 = 'voice-panel-settings-row-icon';
    var2['VoicePanelSettingsRowIcon'] = var5;
    var5 = 'voice-panel-pre-join';
    var2['VoicePanelPreJoin'] = var5;
    var5 = {};
    var9 = var2.VoicePanelSettingsHeader;
    var8 = [80, 40, 80];
    var5[var9] = var8;
    var9 = var2.VoicePanelSettingsRowIcon;
    var8 = [32, 16, 24];
    var5[var9] = var8;
    var9 = var2.VoicePanelPreJoin;
    var8 = [40, 32, 40];
    var5[var9] = var8;
    var _closure1_slot6 = var5;
    var5 = function stylesFor(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var2 = _closure1_slot6;
            var1 = arg1;
            var2 = var2[var1];
            var6 = var2;
            var1 = var6[Symbol.iterator];
            var6 = var1().next;
            var3 = var6().value;
            var2 = var1;
            var7 = undefined;
            var2 = var2 === var7;
            var11 = undefined;
            if(var2) { _fun0001_ip = 41; continue _fun0001 }
 38:
            var11 = var3;
 41:
            var4 = undefined;
            if(var2) { _fun0001_ip = 71; continue _fun0001 }
 46:
            var8 = var6().value;
            var3 = var1;
            var3 = var3 === var7;
            var4 = undefined;
            var2 = var3;
            if(var3) { _fun0001_ip = 71; continue _fun0001 }
 65:
            var4 = var8;
            var2 = var3;
 71:
            var3 = undefined;
            if(var2) { _fun0001_ip = 101; continue _fun0001 }
 76:
            var8 = var6().value;
            var6 = var1;
            var6 = var6 === var7;
            var3 = undefined;
            var2 = var6;
            if(var6) { _fun0001_ip = 101; continue _fun0001 }
 95:
            var3 = var8;
            var2 = var6;
 101:
            if(var2) { _fun0001_ip = 107; continue _fun0001 }
 104:
            var1.return();
 107:
            var1 = {};
            var2 = {};
            var6 = _closure1_slot0;
            var8 = _closure1_slot2;
            var5 = 4;
            var9 = var8[var5];
            var10 = var6.bind(var7)(var9);
            var9 = var10.makeSizeStyle;
            var12 = var9.bind(var10)(var11);
            var13 = var2;
            var9 = copyDataProperties(var13, var12);
            var1['wrapper'] = var2;
            var2 = {};
            var5 = var8[var5];
            var6 = var6.bind(var7)(var5);
            var5 = var6.makeSizeStyle;
            var12 = var5.bind(var6)(var4);
            var13 = var2;
            var5 = copyDataProperties(var13, var12);
            var1['emojiImage'] = var2;
            var2 = {};
            var2['fontSize'] = var4;
            var2['lineHeight'] = var3;
            var3 = 'center';
            var2['textAlign'] = var3;
            var1['emojiText'] = var2;
            return var1;
        }
    };
    var _closure1_slot7 = var5;
    var5 = 7;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/voice_panel/native/shared/VoicePanelEmoji.tsx';
    var5 = var6.bind(var7)(var5);
    var4 = function VoicePanelEmoji(arg1) {
        var1 = arg1;
        var2 = var1.variant;
        var10 = var1.style;
        var1 = _closure1_slot7;
        var4 = undefined;
        var1 = var1.bind(var4)(var2);
        var6 = var1.wrapper;
        var8 = var1.emojiImage;
        var7 = var1.emojiText;
        var3 = _closure1_slot5;
        var2 = _closure1_slot3;
        var1 = {};
        var5 = new Array(3);
        var5[0] = var6;
        var11 = {};
        var6 = _closure1_slot4;
        var11['backgroundColor'] = var6;
        var6 = _closure1_slot1;
        var9 = _closure1_slot2;
        var12 = 5;
        var12 = var9[var12];
        var12 = var6.bind(var4)(var12);
        var12 = var12.radii;
        var12 = var12.round;
        var11['borderRadius'] = var12;
        var12 = 'center';
        var11['alignItems'] = var12;
        var11['justifyContent'] = var12;
        var5[1] = var11;
        var5[2] = var10;
        var1['style'] = var5;
        var5 = 6;
        var5 = var9[var5];
        var6 = var6.bind(var4)(var5);
        var5 = {};
        var9 = '🔈';
        var5['name'] = var9;
        var5['fastImageStyle'] = var8;
        var5['textEmojiStyle'] = var7;
        var5 = var3.bind(var4)(var6, var5);
        var1['children'] = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var3['default'] = var4;
    var3['VoicePanelEmojiVariant'] = var2;
    return var1;
})();