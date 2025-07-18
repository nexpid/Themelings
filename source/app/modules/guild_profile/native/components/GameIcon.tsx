// app/modules/guild_profile/native/components/GameIcon.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var6 = native2;
    var11 = native3;
    var3 = native6;
    var7 = native7;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var11;
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
    var _closure1_slot3 = var2;
    var2 = 1;
    var2 = var7[var2];
    var2 = var6.bind(var1)(var2);
    var5 = var2.View;
    var _closure1_slot4 = var5;
    var2 = var2.Image;
    var _closure1_slot5 = var2;
    var2 = 2;
    var2 = var7[var2];
    var2 = var6.bind(var1)(var2);
    var5 = var2.jsx;
    var _closure1_slot6 = var5;
    var2 = var2.jsxs;
    var _closure1_slot7 = var2;
    var2 = 3;
    var2 = var7[var2];
    var8 = var6.bind(var1)(var2);
    var5 = var8.createStyles;
    var2 = {};
    var9 = {'width': 32, 'height': 32};
    var2['gameIcon'] = var9;
    var9 = {'width': 32, 'height': 32, 'borderRadius': null, 'borderWidth': 1, 'borderStyle': 'solid'};
    var10 = 4;
    var12 = var7[var10];
    var12 = var11.bind(var1)(var12);
    var12 = var12.radii;
    var12 = var12.xs;
    var9['borderRadius'] = var12;
    var12 = var7[var10];
    var12 = var11.bind(var1)(var12);
    var12 = var12.colors;
    var12 = var12.BORDER_STRONG;
    var9['borderColor'] = var12;
    var2['gameIconImage'] = var9;
    var9 = {'position': 'absolute', 'top': 4294967292, 'right': 4294967292, 'display': 'flex', 'justifyContent': 'center', 'alignItems': 'center', 'padding': 2, 'width': 18, 'height': 18};
    var12 = var7[var10];
    var12 = var11.bind(var1)(var12);
    var12 = var12.colors;
    var12 = var12.BG_BASE_SECONDARY;
    var9['backgroundColor'] = var12;
    var10 = var7[var10];
    var10 = var11.bind(var1)(var10);
    var10 = var10.radii;
    var10 = var10.sm;
    var9['borderRadius'] = var10;
    var2['gameIconMask'] = var9;
    var9 = {'marginTop': 4294967295, 'width': 14, 'height': 14};
    var2['fireIcon'] = var9;
    var2 = var5.bind(var8)(var2);
    var _closure1_slot8 = var2;
    var5 = 8;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/guild_profile/native/components/GameIcon.tsx';
    var5 = var6.bind(var7)(var5);
    var4 = function GameIcon(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var3 = arg1;
            var10 = var3.style;
            var8 = var3.game;
            var _closure2_slot0 = var8;
            var1 = var3.activityLevel;
            var3 = var3.onPress;
            var _closure2_slot1 = var3;
            var4 = _closure1_slot8;
            var6 = undefined;
            var15 = var4.bind(var6)();
            var5 = var8.getIconSource;
            var4 = 24;
            var11 = var5.bind(var8)(var4);
            var7 = _closure1_slot3;
            var5 = var7.useCallback;
            var4 = new Array(2);
            var4[0] = var8;
            var4[1] = var3;
            var2 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var3 = _closure2_slot1;
                    var2 = null;
                    if(!(var2 != var3)) { _fun0002_ip = 28; continue _fun0002 }
 13:
                    var3 = _closure2_slot1;
                    var2 = _closure2_slot0;
                    var1 = undefined;
                    var1 = var3.bind(var1)(var2);
 28:
                    var1 = undefined;
                    return var1;
                }
            };
            var7 = var5.bind(var7)(var2, var4);
            var2 = null;
            var5 = var2 == var1;
            var4 = undefined;
            if(var5) { _fun0001_ip = 111; continue _fun0001 }
 105:
            var4 = var1.level;
 111:
            var5 = _closure1_slot0;
            var8 = _closure1_slot2;
            var1 = 5;
            var1 = var8[var1];
            var1 = var5.bind(var6)(var1);
            var1 = var1.ClanGameplayActivity;
            var1 = var1.HIGH;
            var8 = var4 === var1;
            var4 = var2 == var11;
            var1 = null;
            if(var4) { _fun0001_ip = 587; continue _fun0001 }
 159:
            if(!(var2 == var3)) { _fun0001_ip = 366; continue _fun0001 }
 166:
            var4 = _closure1_slot7;
            var3 = _closure1_slot4;
            var2 = {};
            var5 = new Array(2);
            var5[0] = var10;
            var9 = var15.gameIcon;
            var5[1] = var9;
            var2['style'] = var5;
            var12 = _closure1_slot6;
            var9 = _closure1_slot5;
            var5 = {};
            var13 = var15.gameIconImage;
            var5['style'] = var13;
            var5['source'] = var11;
            var9 = var12.bind(var6)(var9, var5);
            var5 = new Array(2);
            var5[0] = var9;
            var9 = var8;
            if(!var8) { _fun0001_ip = 347; continue _fun0001 }
 242:
            var16 = _closure1_slot6;
            var13 = _closure1_slot4;
            var12 = {};
            var17 = var15.gameIconMask;
            var12['style'] = var17;
            var18 = _closure1_slot0;
            var21 = _closure1_slot2;
            var17 = 7;
            var17 = var21[var17];
            var17 = var18.bind(var6)(var17);
            var18 = var17.FireIcon;
            var17 = {};
            var19 = var15.fireIcon;
            var17['style'] = var19;
            var20 = _closure1_slot1;
            var19 = 4;
            var19 = var21[var19];
            var19 = var20.bind(var6)(var19);
            var19 = var19.unsafe_rawColors;
            var19 = var19.ORANGE_330;
            var17['color'] = var19;
            var17 = var16.bind(var6)(var18, var17);
            var12['children'] = var17;
            var9 = var16.bind(var6)(var13, var12);
 347:
            var5[1] = var9;
            var2['children'] = var5;
            var2 = var4.bind(var6)(var3, var2);
            _fun0001_ip = 584; continue _fun0001;
 366:
            var5 = _closure1_slot7;
            var4 = _closure1_slot0;
            var9 = _closure1_slot2;
            var3 = 6;
            var3 = var9[var3];
            var3 = var4.bind(var6)(var3);
            var4 = var3.PressableHighlight;
            var3 = {};
            var9 = new Array(2);
            var9[0] = var10;
            var10 = var15.gameIcon;
            var9[1] = var10;
            var3['style'] = var9;
            var3['onPress'] = var7;
            var10 = _closure1_slot6;
            var9 = _closure1_slot5;
            var7 = {};
            var12 = var15.gameIconImage;
            var7['style'] = var12;
            var7['source'] = var11;
            var9 = var10.bind(var6)(var9, var7);
            var7 = new Array(2);
            var7[0] = var9;
            if(!var8) { _fun0001_ip = 570; continue _fun0001 }
 465:
            var11 = _closure1_slot6;
            var10 = _closure1_slot4;
            var9 = {};
            var12 = var15.gameIconMask;
            var9['style'] = var12;
            var13 = _closure1_slot0;
            var16 = _closure1_slot2;
            var12 = 7;
            var12 = var16[var12];
            var12 = var13.bind(var6)(var12);
            var13 = var12.FireIcon;
            var12 = {};
            var15 = var15.fireIcon;
            var12['style'] = var15;
            var15 = _closure1_slot1;
            var14 = 4;
            var14 = var16[var14];
            var14 = var15.bind(var6)(var14);
            var14 = var14.unsafe_rawColors;
            var14 = var14.ORANGE_260;
            var12['color'] = var14;
            var12 = var11.bind(var6)(var13, var12);
            var9['children'] = var12;
            var8 = var11.bind(var6)(var10, var9);
 570:
            var7[1] = var8;
            var3['children'] = var7;
            var2 = var5.bind(var6)(var4, var3);
 584:
            var1 = var2;
 587:
            return var1;
        }
    };
    var3['default'] = var4;
    var3['useStyles'] = var2;
    return var1;
})();