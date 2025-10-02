// app/modules/remixing/native/components/RemixingEntrypointActionSheet.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var11 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
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
    var4 = metroImportAll;
    var1 = undefined;
    var4 = var4.bind(var1)(var7);
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.Image;
    var _closure1_slot4 = var7;
    var4 = var4.View;
    var _closure1_slot5 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.AnalyticsObjects;
    var _closure1_slot6 = var7;
    var7 = var4.AnalyticsSections;
    var _closure1_slot7 = var7;
    var4 = var4.UserSettingsSections;
    var _closure1_slot8 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.jsx;
    var _closure1_slot9 = var7;
    var4 = var4.jsxs;
    var _closure1_slot10 = var4;
    var4 = 4;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = {};
    var9 = {};
    var10 = 'center';
    var9['justifyContent'] = var10;
    var4['container'] = var9;
    var9 = {};
    var9['alignItems'] = var10;
    var4['info'] = var9;
    var9 = {'alignSelf': 'center', 'width': 259, 'height': 129};
    var4['image'] = var9;
    var9 = {'marginTop': 12, 'textAlign': 'center'};
    var4['title'] = var9;
    var9 = {'marginTop': 12, 'textAlign': 'center'};
    var4['subtitle'] = var9;
    var9 = {};
    var10 = 32;
    var9['marginTop'] = var10;
    var4['footer'] = var9;
    var9 = {};
    var10 = 8;
    var9['marginBottom'] = var10;
    var4['button'] = var9;
    var9 = {};
    var10 = 5;
    var10 = var6[var10];
    var10 = var11.bind(var1)(var10);
    var10 = var10.colors;
    var10 = var10.TEXT_MUTED;
    var9['color'] = var10;
    var4['cancelButtonText'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot11 = var4;
    var4 = 16;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/remixing/native/components/RemixingEntrypointActionSheet.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function RemixingEntrypointActionSheet(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arg1;
            var2 = var1.message;
            var _closure2_slot0 = var2;
            var8 = var1.analyticsLocation;
            var1 = var1.onClose;
            var _closure2_slot1 = var1;
            var3 = _closure1_slot11;
            var4 = undefined;
            var22 = var3.bind(var4)();
            var _closure2_slot2 = var22;
            var11 = _closure1_slot0;
            var14 = _closure1_slot2;
            var3 = 6;
            var6 = var14[var3];
            var7 = var11.bind(var4)(var6);
            var6 = var7.useCanRemix;
            var9 = var6.bind(var7)(var8);
            var _closure2_slot3 = var9;
            var3 = var14[var3];
            var6 = var11.bind(var4)(var3);
            var3 = var6.useIsRemixANitroPerk;
            var12 = var3.bind(var6)();
            var6 = _closure1_slot3;
            var7 = var6.useCallback;
            var3 = new Array(2);
            var3[0] = var2;
            var3[1] = var1;
            var2 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var4 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 7;
                    var2 = var2[var1];
                    var1 = undefined;
                    var5 = var4.bind(var1)(var2);
                    var4 = var5.trackRemixingUpsellAccepted;
                    var2 = {};
                    var6 = _closure1_slot6;
                    var6 = var6.REMIXING_ACTION_SHEET_UPSELL;
                    var2['object'] = var6;
                    var2 = var4.bind(var5)(var2);
                    var4 = _closure2_slot0;
                    var5 = var4.attachments;
                    var4 = null;
                    var5 = var4 != var5;
                    if(!var5) { _fun0002_ip = 2; continue _fun0002 }
case 3:
                    var6 = _closure2_slot0;
                    var6 = var6.attachments;
                    var7 = var6.length;
                    var6 = 0;
                    var5 = var6 !== var7;
case 2:
                    if(!var5) { _fun0002_ip = 4; continue _fun0002 }
case 5:
                    var5 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var3 = 8;
                    var3 = var6[var3];
                    var7 = var5.bind(var1)(var3);
                    var6 = var7.remixImage;
                    var5 = _closure2_slot0;
                    var8 = var5.attachments;
                    var3 = 0;
                    var3 = var8[var3];
                    var3 = var6.bind(var7)(var5, var3);
                    var3 = _closure2_slot1;
                    if(!(var4 != var3)) { _fun0002_ip = 4; continue _fun0002 }
case 6:
                    var2 = _closure2_slot1;
                    var2 = var2.bind(var1)();
case 4:
                    return var1;
                }
            };
            var8 = var7.bind(var6)(var2, var3);
            var _closure2_slot4 = var8;
            var7 = var6.useCallback;
            var3 = new Array(1);
            var3[0] = var1;
            var2 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var3 = _closure1_slot1;
                    var4 = _closure1_slot2;
                    var1 = 9;
                    var2 = var4[var1];
                    var1 = undefined;
                    var3 = var3.bind(var1)(var2);
                    var2 = var3.hideActionSheet;
                    var2 = var2.bind(var3)();
                    var3 = _closure1_slot0;
                    var2 = 10;
                    var2 = var4[var2];
                    var4 = var3.bind(var1)(var2);
                    var3 = var4.openUserSettings;
                    var2 = {};
                    var5 = _closure1_slot8;
                    var5 = var5.PREMIUM;
                    var2['screen'] = var5;
                    var5 = {};
                    var6 = _closure1_slot7;
                    var6 = var6.REMIX_UPSELL_ACTIONSHEET;
                    var5['section'] = var6;
                    var2['analyticsLocation'] = var5;
                    var2 = var3.bind(var4)(var2);
                    var4 = _closure2_slot1;
                    var3 = null;
                    if(!(var3 != var4)) { _fun0003_ip = 7; continue _fun0003 }
case 8:
                    var2 = _closure2_slot1;
                    var2 = var2.bind(var1)();
case 7:
                    return var1;
                }
            };
            var2 = var7.bind(var6)(var2, var3);
            var _closure2_slot5 = var2;
            var7 = var6.useMemo;
            var10 = var22.button;
            var3 = new Array(4);
            var3[0] = var10;
            var3[1] = var9;
            var3[2] = var8;
            var3[3] = var2;
            var2 = function() {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                    var4 = _closure1_slot9;
                    var2 = _closure1_slot1;
                    var1 = _closure1_slot2;
                    var8 = 11;
                    var1 = var1[var8];
                    var3 = undefined;
                    var2 = var2.bind(var3)(var1);
                    var1 = _closure2_slot3;
                    var5 = {};
                    var9 = _closure2_slot2;
                    var9 = var9.button;
                    var5['style'] = var9;
                    var9 = _closure1_slot1;
                    var11 = _closure1_slot2;
                    var8 = var11[var8];
                    var8 = var9.bind(var3)(var8);
                    var8 = var8.Colors;
                    var8 = var8.BRAND;
                    var5['color'] = var8;
                    var10 = _closure1_slot0;
                    var7 = 12;
                    var8 = var11[var7];
                    var8 = var10.bind(var3)(var8);
                    var9 = var8.intl;
                    var8 = var9.string;
                    var7 = var11[var7];
                    var7 = var10.bind(var3)(var7);
                    var7 = var7.t;
                    if(var1) { _fun0004_ip = 9; continue _fun0004 }
case 10:
                    var1 = var7.ht2Op6;
                    var1 = var8.bind(var9)(var1);
                    var5['text'] = var1;
                    var1 = _closure2_slot5;
                    var5['onPress'] = var1;
                    var1 = var5;
                    _fun0004_ip = 11; continue _fun0004;
case 9:
                    var7 = var7.mNmH8/;
                    var7 = var8.bind(var9)(var7);
                    var5['text'] = var7;
                    var6 = _closure2_slot4;
                    var5['onPress'] = var6;
                    var1 = var5;
case 11:
                    var1 = var4.bind(var3)(var2, var1);
                    return var1;
                }
            };
            var13 = var7.bind(var6)(var2, var3);
            var3 = var6.useCallback;
            var2 = new Array(1);
            var2[0] = var1;
            var1 = function() {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                    var5 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var1 = 7;
                    var3 = var4[var1];
                    var1 = undefined;
                    var6 = var5.bind(var1)(var3);
                    var5 = var6.trackRemixingUpsellDismissed;
                    var3 = {};
                    var7 = _closure1_slot6;
                    var7 = var7.REMIXING_ACTION_SHEET_UPSELL;
                    var3['object'] = var7;
                    var3 = var5.bind(var6)(var3);
                    var3 = _closure1_slot1;
                    var2 = 9;
                    var2 = var4[var2];
                    var3 = var3.bind(var1)(var2);
                    var2 = var3.hideActionSheet;
                    var2 = var2.bind(var3)();
                    var4 = _closure2_slot1;
                    var3 = null;
                    if(!(var3 != var4)) { _fun0005_ip = 12; continue _fun0005 }
case 13:
                    var2 = _closure2_slot1;
                    var2 = var2.bind(var1)();
case 12:
                    return var1;
                }
            };
            var19 = var3.bind(var6)(var1, var2);
            var3 = _closure1_slot9;
            var1 = 13;
            var1 = var14[var1];
            var1 = var11.bind(var4)(var1);
            var2 = var1.BottomSheet;
            var1 = {};
            var5 = function onDismiss() {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                    var3 = _closure2_slot1;
                    var1 = null;
                    var4 = var1 == var3;
                    var3 = undefined;
                    var1 = undefined;
                    if(var4) { _fun0006_ip = 14; continue _fun0006 }
case 15:
                    var2 = _closure2_slot1;
                    var1 = var2.bind(var3)();
case 14:
                    return var1;
                }
            };
            var1['onDismiss'] = var5;
            var7 = _closure1_slot10;
            var6 = _closure1_slot5;
            var5 = {};
            var8 = var22.container;
            var5['style'] = var8;
            var8 = {};
            var9 = var22.info;
            var8['style'] = var9;
            var10 = _closure1_slot4;
            var9 = {};
            var16 = _closure1_slot1;
            var15 = 14;
            var15 = var14[var15];
            var15 = var16.bind(var4)(var15);
            var9['source'] = var15;
            var15 = var22.image;
            var9['style'] = var15;
            var10 = var3.bind(var4)(var10, var9);
            var9 = new Array(3);
            var9[0] = var10;
            var10 = 15;
            var15 = var14[var10];
            var15 = var11.bind(var4)(var15);
            var16 = var15.Text;
            var15 = {'variant': 'heading-xl/semibold', 'style': null, 'color': 'header-primary'};
            var17 = var22.title;
            var15['style'] = var17;
            var20 = 12;
            var17 = var14[var20];
            var17 = var11.bind(var4)(var17);
            var23 = var17.intl;
            var18 = var23.string;
            var17 = var14[var20];
            var17 = var11.bind(var4)(var17);
            var17 = var17.t;
            var17 = var17.u0oRGB;
            var17 = var18.bind(var23)(var17);
            var15['children'] = var17;
            var15 = var3.bind(var4)(var16, var15);
            var9[1] = var15;
            var10 = var14[var10];
            var10 = var11.bind(var4)(var10);
            var11 = var10.Text;
            var10 = {'variant': 'text-md/normal', 'color': 'text-normal'};
            var14 = var22.subtitle;
            var10['style'] = var14;
            var17 = _closure1_slot0;
            var14 = _closure1_slot2;
            var15 = var14[var20];
            var15 = var17.bind(var4)(var15);
            var16 = var15.intl;
            var15 = var16.string;
            var14 = var14[var20];
            var14 = var17.bind(var4)(var14);
            var14 = var14.t;
            if(var12) { _fun0001_ip = 16; continue _fun0001 }
case 17:
            var12 = var14.Un8xqq;
            var12 = var15.bind(var16)(var12);
            _fun0001_ip = 18; continue _fun0001;
case 16:
            var14 = var14.VUWdQk;
            var12 = var15.bind(var16)(var14);
case 18:
            var10['children'] = var12;
            var10 = var3.bind(var4)(var11, var10);
            var9[2] = var10;
            var8['children'] = var9;
            var9 = var7.bind(var4)(var6, var8);
            var8 = new Array(2);
            var8[0] = var9;
            var11 = _closure1_slot10;
            var10 = _closure1_slot5;
            var9 = {};
            var14 = var22.footer;
            var12 = new Array(1);
            var12[0] = var14;
            var9['style'] = var12;
            var12 = new Array(2);
            var12[0] = var13;
            var15 = _closure1_slot9;
            var17 = _closure1_slot1;
            var18 = _closure1_slot2;
            var16 = 11;
            var13 = var18[var16];
            var14 = var17.bind(var4)(var13);
            var13 = {};
            var23 = var22.button;
            var13['style'] = var23;
            var22 = var22.cancelButtonText;
            var13['textStyle'] = var22;
            var23 = _closure1_slot0;
            var21 = var18[var20];
            var21 = var23.bind(var4)(var21);
            var22 = var21.intl;
            var21 = var22.string;
            var20 = var18[var20];
            var20 = var23.bind(var4)(var20);
            var20 = var20.t;
            var20 = var20.OB3OdH;
            var20 = var21.bind(var22)(var20);
            var13['text'] = var20;
            var13['onPress'] = var19;
            var16 = var18[var16];
            var16 = var17.bind(var4)(var16);
            var16 = var16.Colors;
            var16 = var16.TRANSPARENT;
            var13['color'] = var16;
            var13 = var15.bind(var4)(var14, var13);
            var12[1] = var13;
            var9['children'] = var12;
            var9 = var11.bind(var4)(var10, var9);
            var8[1] = var9;
            var5['children'] = var8;
            var5 = var7.bind(var4)(var6, var5);
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();