// app/components_native/warnings/GatedContent.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var6;
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
    var _closure1_slot2 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.Image;
    var _closure1_slot3 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.jsx;
    var _closure1_slot4 = var7;
    var4 = var4.jsxs;
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = {};
    var9 = {'flex': 1, 'padding': 20, 'alignItems': 'center', 'justifyContent': 'center', 'backgroundColor': null, 'textAlign': 'center'};
    var10 = 'center';
    var11 = 4;
    var12 = var6[var11];
    var11 = metroImportDefault;
    var11 = var11.bind(var1)(var12);
    var11 = var11.colors;
    var11 = var11.BACKGROUND_PRIMARY;
    var9['backgroundColor'] = var11;
    var4['container'] = var9;
    var9 = {};
    var9['textAlign'] = var10;
    var4['title'] = var9;
    var9 = {'width': 300, 'height': 200, 'resizeMode': 'contain'};
    var4['emptyImage'] = var9;
    var9 = {};
    var9['textAlign'] = var10;
    var4['emptyTitle'] = var9;
    var9 = {};
    var9['textAlign'] = var10;
    var4['emptyDescription'] = var9;
    var9 = {'marginBottom': 8, 'marginHorizontal': 4, 'alignItems': 'center', 'flexGrow': 0};
    var4['button'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot6 = var4;
    var4 = 11;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'components_native/warnings/GatedContent.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function GatedContent(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var1 = arg1;
            var11 = var1.source;
            var25 = var1.title;
            var23 = var1.description;
            var17 = var1.agreement;
            var19 = var1.agreementButtonVariant;
            var4 = undefined;
            if(!(var19 === var4)) { _fun0001_ip = 42; continue _fun0001 }
 38:
            var19 = 'primary';
 42:
            var14 = var1.disagreement;
            var15 = var1.disagreementButtonVariant;
            if(!(var15 === var4)) { _fun0001_ip = 62; continue _fun0001 }
 58:
            var15 = 'secondary';
 62:
            var12 = var1.onAgree;
            var _closure2_slot0 = var12;
            var5 = var1.onDisagree;
            var _closure2_slot1 = var5;
            var18 = var1.modalType;
            var _closure2_slot2 = var18;
            var16 = var1.channelId;
            var _closure2_slot3 = var16;
            var9 = var1.guildId;
            var _closure2_slot4 = var9;
            var1 = _closure1_slot6;
            var24 = var1.bind(var4)();
            var2 = _closure1_slot0;
            var1 = _closure1_slot1;
            var6 = 5;
            var6 = var1[var6];
            var7 = var2.bind(var4)(var6);
            var6 = var7.useFontScale;
            var7 = var6.bind(var7)();
            var8 = _closure1_slot2;
            var20 = var8.useEffect;
            var13 = new Array(3);
            var13[0] = var18;
            var13[1] = var16;
            var13[2] = var9;
            var6 = function() {
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var1 = 6;
                var2 = var2[var1];
                var1 = undefined;
                var6 = var3.bind(var1)(var2);
                var5 = var6.trackNsfwSpaceWarningModalViewed;
                var4 = _closure2_slot2;
                var3 = _closure2_slot3;
                var2 = _closure2_slot4;
                var2 = var5.bind(var6)(var4, var3, var2);
                return var1;
            };
            var6 = var20.bind(var8)(var6, var13);
            var13 = var8.useCallback;
            var6 = new Array(4);
            var6[0] = var5;
            var6[1] = var18;
            var6[2] = var16;
            var6[3] = var9;
            var5 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var3 = _closure1_slot0;
                    var4 = _closure1_slot1;
                    var2 = 6;
                    var5 = var4[var2];
                    var1 = undefined;
                    var8 = var3.bind(var1)(var5);
                    var7 = var8.trackNsfwSpaceWarningModalClicked;
                    var2 = var4[var2];
                    var2 = var3.bind(var1)(var2);
                    var2 = var2.NsfwSpaceWarningModalCta;
                    var12 = var2.NSFW_CHANNEL_DISAGREE_CTA;
                    var11 = _closure2_slot2;
                    var10 = _closure2_slot3;
                    var9 = _closure2_slot4;
                    var13 = var8;
                    var3 = var13[var7](var12, var11, var10, var9, var8);
                    var4 = _closure2_slot1;
                    var3 = null;
                    if(!(var3 != var4)) { _fun0002_ip = 92; continue _fun0002 }
 84:
                    var2 = _closure2_slot1;
                    var2 = var2.bind(var1)();
 92:
                    return var1;
                }
            };
            var13 = var13.bind(var8)(var5, var6);
            var6 = var8.useCallback;
            var5 = new Array(4);
            var5[0] = var12;
            var5[1] = var18;
            var5[2] = var16;
            var5[3] = var9;
            var3 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                    var3 = _closure1_slot0;
                    var4 = _closure1_slot1;
                    var2 = 6;
                    var5 = var4[var2];
                    var1 = undefined;
                    var8 = var3.bind(var1)(var5);
                    var7 = var8.trackNsfwSpaceWarningModalClicked;
                    var2 = var4[var2];
                    var2 = var3.bind(var1)(var2);
                    var2 = var2.NsfwSpaceWarningModalCta;
                    var12 = var2.NSFW_CHANNEL_AGREE_CTA;
                    var11 = _closure2_slot2;
                    var10 = _closure2_slot3;
                    var9 = _closure2_slot4;
                    var13 = var8;
                    var3 = var13[var7](var12, var11, var10, var9, var8);
                    var4 = _closure2_slot0;
                    var3 = null;
                    if(!(var3 != var4)) { _fun0003_ip = 92; continue _fun0003 }
 84:
                    var2 = _closure2_slot0;
                    var2 = var2.bind(var1)();
 92:
                    return var1;
                }
            };
            var18 = var6.bind(var8)(var3, var5);
            var3 = _closure1_slot5;
            var6 = 7;
            var1 = var1[var6];
            var1 = var2.bind(var4)(var1);
            var2 = var1.Stack;
            var1 = {};
            var5 = 16;
            var1['spacing'] = var5;
            var5 = var24.container;
            var1['style'] = var5;
            var5 = 1.5;
            var7 = var7 < var5;
            if(!var7) { _fun0001_ip = 352; continue _fun0001 }
 322:
            var9 = _closure1_slot4;
            var8 = _closure1_slot3;
            var5 = {};
            var16 = var24.emptyImage;
            var5['style'] = var16;
            var5['source'] = var11;
            var7 = var9.bind(var4)(var8, var5);
 352:
            var5 = new Array(3);
            var5[0] = var7;
            var8 = _closure1_slot5;
            var7 = _closure1_slot0;
            var9 = _closure1_slot1;
            var6 = var9[var6];
            var6 = var7.bind(var4)(var6);
            var11 = var6.Stack;
            var6 = {};
            var16 = 'center';
            var6['align'] = var16;
            var22 = _closure1_slot4;
            var20 = 8;
            var16 = var9[var20];
            var16 = var7.bind(var4)(var16);
            var21 = var16.Text;
            var16 = {'variant': 'heading-xxl/bold', 'maxFontSizeMultiplier': 2};
            var26 = var24.title;
            var16['style'] = var26;
            var16['children'] = var25;
            var21 = var22.bind(var4)(var21, var16);
            var16 = new Array(2);
            var16[0] = var21;
            var20 = var9[var20];
            var20 = var7.bind(var4)(var20);
            var21 = var20.Text;
            var20 = {'color': 'text-muted', 'variant': 'text-md/medium', 'style': null, 'maxFontSizeMultiplier': 2};
            var24 = var24.emptyDescription;
            var20['style'] = var24;
            var20['children'] = var23;
            var20 = var22.bind(var4)(var21, var20);
            var16[1] = var20;
            var6['children'] = var16;
            var6 = var8.bind(var4)(var11, var6);
            var5[1] = var6;
            var6 = 9;
            var6 = var9[var6];
            var6 = var7.bind(var4)(var6);
            var7 = var6.ButtonGroup;
            var6 = {};
            var9 = null;
            var11 = var9 != var17;
            if(!var11) { _fun0001_ip = 561; continue _fun0001 }
 557:
            var11 = var9 != var12;
 561:
            if(!var11) { _fun0001_ip = 614; continue _fun0001 }
 564:
            var16 = _closure1_slot4;
            var12 = _closure1_slot0;
            var20 = _closure1_slot1;
            var9 = 10;
            var9 = var20[var9];
            var9 = var12.bind(var4)(var9);
            var12 = var9.Button;
            var9 = {};
            var9['variant'] = var19;
            var9['onPress'] = var18;
            var9['text'] = var17;
            var11 = var16.bind(var4)(var12, var9);
 614:
            var9 = new Array(2);
            var9[0] = var11;
            var12 = _closure1_slot4;
            var11 = _closure1_slot0;
            var16 = _closure1_slot1;
            var10 = 10;
            var10 = var16[var10];
            var10 = var11.bind(var4)(var10);
            var11 = var10.Button;
            var10 = {};
            var10['variant'] = var15;
            var10['text'] = var14;
            var10['onPress'] = var13;
            var10 = var12.bind(var4)(var11, var10);
            var9[1] = var10;
            var6['children'] = var9;
            var6 = var8.bind(var4)(var7, var6);
            var5[2] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();