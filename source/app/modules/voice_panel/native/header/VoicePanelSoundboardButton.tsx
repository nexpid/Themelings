// app/modules/voice_panel/native/header/VoicePanelSoundboardButton.tsx
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
    var4 = var6[var1];
    var1 = undefined;
    var4 = var5.bind(var1)(var4);
    var4 = var4.View;
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.jsx;
    var _closure1_slot4 = var7;
    var4 = var4.jsxs;
    var _closure1_slot5 = var4;
    var4 = 7;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/voice_panel/native/header/VoicePanelSoundboardButton.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function VoicePanelSoundboardButton(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var1 = arg1;
            var3 = var1.channelId;
            var6 = var1.style;
            var4 = _closure1_slot1;
            var7 = _closure1_slot2;
            var1 = 2;
            var2 = var7[var1];
            var5 = undefined;
            var2 = var4.bind(var5)(var2);
            var4 = _closure1_slot0;
            var1 = var7[var1];
            var1 = var4.bind(var5)(var1);
            var1 = var1.SoundboardButtonLocation;
            var1 = var1.HEADER;
            var1 = var2.bind(var5)(var3, var1);
            var2 = var1.visible;
            var12 = var1.handlePress;
            var11 = var1.disabled;
            var7 = var1.showIndicator;
            var1 = null;
            if(!var2) { _fun0001_ip = 308; continue _fun0001 }
 100:
            var4 = _closure1_slot5;
            var3 = _closure1_slot3;
            var2 = {};
            var2['style'] = var6;
            var10 = _closure1_slot4;
            var9 = _closure1_slot1;
            var17 = _closure1_slot2;
            var6 = 3;
            var6 = var17[var6];
            var9 = var9.bind(var5)(var6);
            var6 = {};
            var16 = _closure1_slot0;
            var13 = 4;
            var13 = var17[var13];
            var13 = var16.bind(var5)(var13);
            var14 = var13.SoundboardIcon;
            var13 = {'color': 'white', 'size': 'sm'};
            var13 = var10.bind(var5)(var14, var13);
            var6['icon'] = var13;
            var13 = 5;
            var14 = var17[var13];
            var14 = var16.bind(var5)(var14);
            var15 = var14.intl;
            var14 = var15.string;
            var13 = var17[var13];
            var13 = var16.bind(var5)(var13);
            var13 = var13.t;
            var13 = var13.6EJvHh;
            var13 = var14.bind(var15)(var13);
            var6['accessibilityLabel'] = var13;
            var6['onPress'] = var12;
            var6['disabled'] = var11;
            var9 = var10.bind(var5)(var9, var6);
            var6 = new Array(2);
            var6[0] = var9;
            if(!var7) { _fun0001_ip = 294; continue _fun0001 }
 262:
            var10 = _closure1_slot4;
            var9 = _closure1_slot1;
            var11 = _closure1_slot2;
            var8 = 6;
            var8 = var11[var8];
            var9 = var9.bind(var5)(var8);
            var8 = {};
            var7 = var10.bind(var5)(var9, var8);
 294:
            var6[1] = var7;
            var2['children'] = var6;
            var1 = var4.bind(var5)(var3, var2);
 308:
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();