// app/modules/quests/native/VideoQuestModal/captions/VideoQuestCaptions.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var12 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var12;
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
    var4 = var4.bind(var1)(var7);
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.View;
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.jsx;
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = {};
    var9 = {'position': 'absolute', 'bottom': null, 'left': null, 'right': null, 'alignItems': 'center', 'justifyContent': 'flex-end'};
    var11 = 4;
    var10 = var6[var11];
    var10 = var12.bind(var1)(var10);
    var10 = var10.spacing;
    var10 = var10.PX_32;
    var9['bottom'] = var10;
    var10 = var6[var11];
    var10 = var12.bind(var1)(var10);
    var10 = var10.spacing;
    var10 = var10.PX_16;
    var9['left'] = var10;
    var10 = var6[var11];
    var10 = var12.bind(var1)(var10);
    var10 = var10.spacing;
    var10 = var10.PX_16;
    var9['right'] = var10;
    var10 = 'center';
    var4['container'] = var9;
    var9 = {};
    var13 = 5;
    var13 = var6[var13];
    var14 = var12.bind(var1)(var13);
    var13 = var6[var11];
    var13 = var12.bind(var1)(var13);
    var13 = var13.unsafe_rawColors;
    var13 = var13.BLACK_500;
    var15 = var14.bind(var1)(var13);
    var14 = var15.alpha;
    var13 = 0.35;
    var14 = var14.bind(var15)(var13);
    var13 = var14.hex;
    var13 = var13.bind(var14)();
    var9['backgroundColor'] = var13;
    var13 = var6[var11];
    var13 = var12.bind(var1)(var13);
    var13 = var13.spacing;
    var13 = var13.PX_8;
    var9['padding'] = var13;
    var13 = var6[var11];
    var13 = var12.bind(var1)(var13);
    var13 = var13.radii;
    var13 = var13.sm;
    var9['borderRadius'] = var13;
    var13 = 'hidden';
    var9['overflow'] = var13;
    var4['captionBox'] = var9;
    var9 = {};
    var11 = var6[var11];
    var11 = var12.bind(var1)(var11);
    var11 = var11.colors;
    var11 = var11.WHITE;
    var9['color'] = var11;
    var9['textAlign'] = var10;
    var4['captionText'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot6 = var4;
    var4 = 10;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/quests/native/VideoQuestModal/captions/VideoQuestCaptions.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var2 = arg1;
            var4 = var2.quest;
            var10 = var2.currentTime;
            var _closure2_slot0 = var10;
            var7 = var2.style;
            var9 = var2.visible;
            var5 = undefined;
            if(!(var9 === var5)) { _fun0001_ip = 40; continue _fun0001 }
 38:
            var9 = true;
 40:
            var _closure2_slot1 = var9;
            var _closure2_slot2 = var5;
            var2 = _closure1_slot6;
            var11 = var2.bind(var5)();
            var3 = _closure1_slot0;
            var6 = _closure1_slot2;
            var2 = 6;
            var2 = var6[var2];
            var3 = var3.bind(var5)(var2);
            var2 = var3.useVideoQuestCaptions;
            var2 = var2.bind(var3)(var4);
            var12 = var2.captions;
            _closure2_slot2 = var12;
            var4 = var2.status;
            var6 = _closure1_slot3;
            var3 = var6.useMemo;
            var2 = new Array(3);
            var2[0] = var12;
            var2[1] = var10;
            var2[2] = var9;
            var1 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var1 = _closure2_slot2;
                    var4 = null;
                    var3 = var4 != var1;
                    var1 = null;
                    if(!var3) { _fun0002_ip = 72; continue _fun0002 }
 18:
                    var3 = _closure2_slot1;
                    var1 = null;
                    if(!var3) { _fun0002_ip = 72; continue _fun0002 }
 27:
                    var5 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var3 = 7;
                    var4 = var4[var3];
                    var3 = undefined;
                    var5 = var5.bind(var3)(var4);
                    var4 = var5.findActiveCaption;
                    var3 = _closure2_slot2;
                    var2 = _closure2_slot0;
                    var1 = var4.bind(var5)(var3, var2);
 72:
                    return var1;
                }
            };
            var10 = var3.bind(var6)(var1, var2);
            var3 = null;
            var2 = 'success';
            var1 = null;
            if(!(var2 === var4)) { _fun0001_ip = 339; continue _fun0001 }
 158:
            var2 = var3 == var10;
            var1 = null;
            if(var2) { _fun0001_ip = 339; continue _fun0001 }
 170:
            var4 = _closure1_slot5;
            var3 = _closure1_slot4;
            var2 = {'style': null, 'importantForAccessibility': 'no-hide-descendants', 'accessibilityRole': 'none', 'accessible': false};
            var9 = var11.container;
            var6 = new Array(2);
            var6[0] = var9;
            var6[1] = var7;
            var2['style'] = var6;
            var7 = _closure1_slot1;
            var12 = _closure1_slot2;
            var6 = 8;
            var6 = var12[var6];
            var7 = var7.bind(var5)(var6);
            var6 = {'style': null, 'blurTheme': 'dark', 'blurStyle': 'default', 'blurAmount': 0.2};
            var9 = var11.captionBox;
            var6['style'] = var9;
            var9 = _closure1_slot0;
            var8 = 9;
            var8 = var12[var8];
            var8 = var9.bind(var5)(var8);
            var9 = var8.Text;
            var8 = {};
            var12 = 'heading-sm/medium';
            var8['variant'] = var12;
            var11 = var11.captionText;
            var8['style'] = var11;
            var10 = var10.text;
            var8['children'] = var10;
            var8 = var4.bind(var5)(var9, var8);
            var6['children'] = var8;
            var6 = var4.bind(var5)(var7, var6);
            var2['children'] = var6;
            var1 = var4.bind(var5)(var3, var2);
 339:
            return var1;
        }
    };
    var3['VideoQuestCaptions'] = var2;
    return var1;
})();