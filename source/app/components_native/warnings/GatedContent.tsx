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
    var7 = var4.jsx;
    var _closure1_slot3 = var7;
    var4 = var4.jsxs;
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = {};
    var9 = {'flex': 1, 'padding': 20, 'alignItems': 'center', 'justifyContent': 'center', 'backgroundColor': null, 'textAlign': 'center'};
    var10 = 'center';
    var11 = 3;
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
    var4['description'] = var9;
    var9 = {'marginBottom': 8, 'marginHorizontal': 4, 'alignItems': 'center', 'flexGrow': 0};
    var4['button'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot5 = var4;
    var4 = 9;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'components_native/warnings/GatedContent.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function GatedContent(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var3 = arg1;
            var23 = var3.title;
            var21 = var3.description;
            var16 = var3.agreement;
            var18 = var3.agreementButtonVariant;
            var4 = undefined;
            if(!(var18 === var4)) { _fun0001_ip = 39; continue _fun0001 }
 35:
            var18 = 'primary';
 39:
            var13 = var3.disagreement;
            var14 = var3.disagreementButtonVariant;
            if(!(var14 === var4)) { _fun0001_ip = 61; continue _fun0001 }
 57:
            var14 = 'secondary';
 61:
            var11 = var3.onAgree;
            var _closure2_slot0 = var11;
            var2 = var3.onDisagree;
            var _closure2_slot1 = var2;
            var8 = var3.modalType;
            var _closure2_slot2 = var8;
            var7 = var3.channelId;
            var _closure2_slot3 = var7;
            var6 = var3.guildId;
            var _closure2_slot4 = var6;
            var3 = _closure1_slot5;
            var22 = var3.bind(var4)();
            var5 = _closure1_slot2;
            var12 = var5.useEffect;
            var10 = new Array(3);
            var10[0] = var8;
            var10[1] = var7;
            var10[2] = var6;
            var3 = function() {
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var1 = 4;
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
            var3 = var12.bind(var5)(var3, var10);
            var10 = var5.useCallback;
            var3 = new Array(4);
            var3[0] = var2;
            var3[1] = var8;
            var3[2] = var7;
            var3[3] = var6;
            var2 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var3 = _closure1_slot0;
                    var4 = _closure1_slot1;
                    var2 = 4;
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
            var12 = var10.bind(var5)(var2, var3);
            var3 = var5.useCallback;
            var2 = new Array(4);
            var2[0] = var11;
            var2[1] = var8;
            var2[2] = var7;
            var2[3] = var6;
            var1 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                    var3 = _closure1_slot0;
                    var4 = _closure1_slot1;
                    var2 = 4;
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
            var17 = var3.bind(var5)(var1, var2);
            var3 = _closure1_slot4;
            var7 = _closure1_slot0;
            var8 = _closure1_slot1;
            var5 = 5;
            var1 = var8[var5];
            var1 = var7.bind(var4)(var1);
            var2 = var1.Stack;
            var1 = {};
            var6 = 16;
            var1['spacing'] = var6;
            var6 = var22.container;
            var1['style'] = var6;
            var5 = var8[var5];
            var5 = var7.bind(var4)(var5);
            var6 = var5.Stack;
            var5 = {};
            var10 = 'center';
            var5['align'] = var10;
            var20 = _closure1_slot3;
            var15 = 6;
            var10 = var8[var15];
            var10 = var7.bind(var4)(var10);
            var19 = var10.Text;
            var10 = {'variant': 'heading-xxl/bold', 'maxFontSizeMultiplier': 2};
            var24 = var22.title;
            var10['style'] = var24;
            var10['children'] = var23;
            var19 = var20.bind(var4)(var19, var10);
            var10 = new Array(2);
            var10[0] = var19;
            var15 = var8[var15];
            var15 = var7.bind(var4)(var15);
            var19 = var15.Text;
            var15 = {'color': 'text-muted', 'variant': 'text-md/medium', 'style': null, 'maxFontSizeMultiplier': 2};
            var22 = var22.description;
            var15['style'] = var22;
            var15['children'] = var21;
            var15 = var20.bind(var4)(var19, var15);
            var10[1] = var15;
            var5['children'] = var10;
            var6 = var3.bind(var4)(var6, var5);
            var5 = new Array(2);
            var5[0] = var6;
            var6 = 7;
            var6 = var8[var6];
            var6 = var7.bind(var4)(var6);
            var7 = var6.ButtonGroup;
            var6 = {};
            var8 = null;
            var10 = var8 != var16;
            if(!var10) { _fun0001_ip = 474; continue _fun0001 }
 470:
            var10 = var8 != var11;
 474:
            if(!var10) { _fun0001_ip = 527; continue _fun0001 }
 477:
            var15 = _closure1_slot3;
            var11 = _closure1_slot0;
            var19 = _closure1_slot1;
            var8 = 8;
            var8 = var19[var8];
            var8 = var11.bind(var4)(var8);
            var11 = var8.Button;
            var8 = {};
            var8['variant'] = var18;
            var8['onPress'] = var17;
            var8['text'] = var16;
            var10 = var15.bind(var4)(var11, var8);
 527:
            var8 = new Array(2);
            var8[0] = var10;
            var11 = _closure1_slot3;
            var10 = _closure1_slot0;
            var15 = _closure1_slot1;
            var9 = 8;
            var9 = var15[var9];
            var9 = var10.bind(var4)(var9);
            var10 = var9.Button;
            var9 = {};
            var9['variant'] = var14;
            var9['text'] = var13;
            var9['onPress'] = var12;
            var9 = var11.bind(var4)(var10, var9);
            var8[1] = var9;
            var6['children'] = var8;
            var6 = var3.bind(var4)(var7, var6);
            var5[1] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();