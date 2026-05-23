// app/modules/main_tabs_v2/native/YouBarConstants.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var16 = require;
    var15 = metroImportDefault;
    var3 = exports;
    var17 = dependencyMap;
    var _closure1_slot0 = var16;
    var _closure1_slot1 = var15;
    var _closure1_slot2 = var17;
    var8 = function useYouBarHorizontalMargin() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var3 = _closure1_slot1;
            var4 = _closure1_slot2;
            var1 = 3;
            var1 = var4[var1];
            var4 = undefined;
            var1 = var3.bind(var4)(var1);
            var1 = var1.bind(var4)();
            var3 = var1.bottom;
            var1 = 0;
            if(!(var3 > var1)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var3 = _closure1_slot0;
            var5 = _closure1_slot2;
            var1 = 4;
            var1 = var5[var1];
            var3 = var3.bind(var4)(var1);
            var1 = var3.isAndroid;
            var1 = var1.bind(var3)();
            if(var1) { _fun0001_ip = 2; continue _fun0001 }
case 4:
            var1 = _closure1_slot9;
            _fun0001_ip = 5; continue _fun0001;
case 2:
            var1 = _closure1_slot8;
case 5:
            return var1;
        }
    };
    var _closure1_slot11 = var8;
    var7 = function useYouBarBottomMargin() {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var8 = _closure1_slot1;
            var9 = _closure1_slot2;
            var1 = 3;
            var1 = var9[var1];
            var6 = undefined;
            var1 = var8.bind(var6)(var1);
            var1 = var1.bind(var6)();
            var5 = var1.bottom;
            var1 = 6;
            var1 = var9[var1];
            var3 = var8.bind(var6)(var1);
            var1 = 'useYouBarBottomMargin';
            var1 = var3.bind(var6)(var1);
            var4 = _closure1_slot0;
            var3 = 7;
            var3 = var9[var3];
            var7 = var4.bind(var6)(var3);
            var4 = var7.useToken;
            var3 = 2;
            var3 = var9[var3];
            var3 = var8.bind(var6)(var3);
            var3 = var3.modules;
            var3 = var3.mobile;
            var3 = var3.CHAT_INPUT_FLOATING_OFFSET_MINIMUM;
            var4 = var4.bind(var7)(var3);
            if(var1) { _fun0002_ip = 6; continue _fun0002 }
case 7:
            var1 = 0;
            if(!(var5 > var1)) { _fun0002_ip = 8; continue _fun0002 }
case 9:
            var3 = _closure1_slot0;
            var7 = _closure1_slot2;
            var1 = 4;
            var1 = var7[var1];
            var3 = var3.bind(var6)(var1);
            var1 = var3.isAndroid;
            var1 = var1.bind(var3)();
            if(var1) { _fun0002_ip = 8; continue _fun0002 }
case 10:
            var1 = _closure1_slot9;
            _fun0002_ip = 11; continue _fun0002;
case 8:
            var3 = global;
            var6 = var3.Math;
            var3 = var6.max;
            var2 = _closure1_slot10;
            var1 = var3.bind(var6)(var2, var5);
case 11:
            _fun0002_ip = 12; continue _fun0002;
case 6:
            var2 = global;
            var3 = var2.Math;
            var2 = var3.max;
            var1 = var2.bind(var3)(var4, var5);
case 12:
            return var1;
        }
    };
    var _closure1_slot12 = var7;
    var6 = function useConnectionBannerHeight() {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var3 = _closure1_slot1;
            var7 = _closure1_slot2;
            var2 = 8;
            var2 = var7[var2];
            var6 = undefined;
            var4 = var3.bind(var6)(var2);
            var3 = var4.useConfig;
            var2 = {};
            var5 = 'useConnectionBannerHeight';
            var2['location'] = var5;
            var2 = var3.bind(var4)(var2);
            var5 = var2.timeoutMs;
            var2 = var2.hidden;
            var4 = _closure1_slot0;
            var3 = 9;
            var3 = var7[var3];
            var7 = var4.bind(var6)(var3);
            var6 = var7.useStateFromStores;
            var3 = _closure1_slot3;
            var4 = new Array(1);
            var4[0] = var3;
            var3 = function() {
                var2 = _closure1_slot3;
                var1 = var2.getState;
                var1 = var1.bind(var2)();
                return var1;
            };
            var3 = var6.bind(var7)(var4, var3);
            var4 = null;
            if(!(var4 != var5)) { _fun0003_ip = 13; continue _fun0003 }
case 14:
            if(var2) { _fun0003_ip = 13; continue _fun0003 }
case 15:
            var1 = _closure1_slot4;
            var2 = var1.HIDDEN;
            var1 = 48;
            if(!(var3 === var2)) { _fun0003_ip = 16; continue _fun0003 }
case 13:
            var1 = 0;
case 16:
            return var1;
        }
    };
    var _closure1_slot13 = var6;
    var5 = function useYouBarSettingsOutsideSafeAreaTop(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var3 = _closure1_slot0;
            var6 = _closure1_slot2;
            var1 = 10;
            var1 = var6[var1];
            var5 = undefined;
            var4 = var3.bind(var5)(var1);
            var3 = var4.useYouBarEnabled;
            var1 = arg1;
            var1 = var3.bind(var4)(var1);
            var4 = _closure1_slot1;
            var3 = 11;
            var3 = var6[var3];
            var3 = var4.bind(var5)(var3);
            var3 = var3.bind(var5)();
            if(!var1) { _fun0004_ip = 17; continue _fun0004 }
case 18:
            var4 = _closure1_slot0;
            var6 = _closure1_slot2;
            var2 = 4;
            var2 = var6[var2];
            var4 = var4.bind(var5)(var2);
            var2 = var4.isAndroid;
            var2 = var2.bind(var4)();
            var2 = !var2;
            if(var2) { _fun0004_ip = 19; continue _fun0004 }
case 20:
            var2 = var3;
case 19:
            var1 = var2;
case 17:
            return var1;
        }
    };
    var _closure1_slot14 = var5;
    var2 = global;
    var11 = var2.Object;
    var10 = var11.defineProperty;
    var9 = {};
    var1 = true;
    var9['value'] = var1;
    var1 = '__esModule';
    var1 = var10.bind(var11)(var3, var1, var9);
    var9 = 0;
    var10 = var17[var9];
    var1 = undefined;
    var10 = var15.bind(var1)(var10);
    var _closure1_slot3 = var10;
    var9 = var17[var9];
    var9 = var16.bind(var1)(var9);
    var9 = var9.ConnectivityIndicatorState;
    var _closure1_slot4 = var9;
    var9 = 1;
    var9 = var17[var9];
    var9 = var16.bind(var1)(var9);
    var9 = var9.CHANNEL_DRAWER_SPACING;
    var _closure1_slot5 = var9;
    var11 = var2.Set;
    var12 = var2.Object;
    var10 = var12.values;
    var2 = 2;
    var9 = var17[var2];
    var9 = var15.bind(var1)(var9);
    var9 = var9.spacing;
    var21 = var10.bind(var12)(var9);
    var10 = var11.prototype;
    var10 = Object.create(var10, {constructor: {value: var11}});
    var22 = var10;
    var9 = new var22[var11](var21, var20);
    var9 = var9 instanceof Object ? var9 : var10;
    var _closure1_slot6 = var9;
    var9 = var17[var2];
    var9 = var15.bind(var1)(var9);
    var9 = var9.spacing;
    var14 = var9.PX_12;
    var10 = var2 * var14;
    var9 = 32;
    var13 = var9 + var10;
    var _closure1_slot7 = var13;
    var9 = var17[var2];
    var9 = var15.bind(var1)(var9);
    var9 = var9.spacing;
    var12 = var9.PX_16;
    var _closure1_slot8 = var12;
    var9 = var17[var2];
    var9 = var15.bind(var1)(var9);
    var9 = var9.spacing;
    var11 = var9.PX_24;
    var _closure1_slot9 = var11;
    var9 = var17[var2];
    var9 = var15.bind(var1)(var9);
    var9 = var9.spacing;
    var10 = var9.PX_16;
    var9 = var17[var2];
    var9 = var15.bind(var1)(var9);
    var9 = var9.spacing;
    var9 = var9.PX_16;
    var _closure1_slot10 = var9;
    var2 = var17[var2];
    var2 = var15.bind(var1)(var2);
    var2 = var2.spacing;
    var2 = var2.PX_16;
    var15 = 12;
    var15 = var17[var15];
    var17 = var16.bind(var1)(var15);
    var16 = var17.fileFinishedImporting;
    var15 = 'modules/main_tabs_v2/native/YouBarConstants.tsx';
    var15 = var16.bind(var17)(var15);
    var15 = 48;
    var3['CONNECTION_BANNER_HEIGHT'] = var15;
    var15 = {'damping': 20, 'stiffness': 300, 'mass': 1.5, 'overshootClamping': true, 'restSpeedThreshold': 0.001, 'restDisplacementThreshold': 0.001};
    var3['YOU_BAR_SPRING_CONFIG'] = var15;
    var3['YOU_BAR_PADDING'] = var14;
    var3['YOU_BAR_HEIGHT'] = var13;
    var3['YOU_BAR_MARGIN'] = var12;
    var3['YOU_BAR_MARGIN_IOS'] = var11;
    var3['YOU_BAR_LEFT_INSET'] = var10;
    var3['YOU_BAR_FLOATING_OFFSET_MINIMUM'] = var9;
    var3['useYouBarHorizontalMargin'] = var8;
    var8 = function useYouBarRightInset() {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
            var1 = _closure1_slot11;
            var4 = undefined;
            var1 = var1.bind(var4)();
            var5 = _closure1_slot1;
            var6 = _closure1_slot2;
            var2 = 5;
            var2 = var6[var2];
            var2 = var5.bind(var4)(var2);
            var2 = var2.bind(var4)();
            var4 = var2.isChatBesideChannelList;
            var2 = var1;
            if(!var4) { _fun0005_ip = 21; continue _fun0005 }
case 22:
            var4 = _closure1_slot5;
            var2 = var1 - var4;
case 21:
            var4 = _closure1_slot6;
            var3 = var4.has;
            var3 = var3.bind(var4)(var2);
            if(!var3) { _fun0005_ip = 23; continue _fun0005 }
case 24:
            var1 = var2;
case 23:
            return var1;
        }
    };
    var3['useYouBarRightInset'] = var8;
    var3['useYouBarBottomMargin'] = var7;
    var3['useConnectionBannerHeight'] = var6;
    var6 = function useYouBarTotalHeight() {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
            var3 = arguments[0];
            var4 = undefined;
            if(!(var3 === var4)) { _fun0006_ip = 25; continue _fun0006 }
case 26:
            var3 = 0;
case 25:
            var5 = _closure1_slot0;
            var6 = _closure1_slot2;
            var1 = 10;
            var1 = var6[var1];
            var6 = var5.bind(var4)(var1);
            var5 = var6.useYouBarEnabled;
            var1 = 'YouBar';
            var6 = var5.bind(var6)(var1);
            var1 = _closure1_slot12;
            var5 = var1.bind(var4)();
            var1 = _closure1_slot13;
            var4 = var1.bind(var4)();
            var1 = 0;
            if(!var6) { _fun0006_ip = 27; continue _fun0006 }
case 28:
            var2 = _closure1_slot7;
            var2 = var5 + var2;
            var2 = var2 + var4;
            var1 = var2 + var3;
case 27:
            return var1;
        }
    };
    var3['useYouBarTotalHeight'] = var6;
    var3['useYouBarSettingsOutsideSafeAreaTop'] = var5;
    var5 = function useYouBarSettingsCustomHeaderPaddingTop(arg1) {
        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
            var3 = _closure1_slot1;
            var4 = _closure1_slot2;
            var2 = 3;
            var2 = var4[var2];
            var4 = undefined;
            var2 = var3.bind(var4)(var2);
            var2 = var2.bind(var4)();
            var2 = var2.top;
            var3 = _closure1_slot14;
            var1 = arg1;
            var3 = var3.bind(var4)(var1);
            var1 = 16;
            if(var3) { _fun0007_ip = 29; continue _fun0007 }
case 30:
            var1 = var2;
case 29:
            return var1;
        }
    };
    var3['useYouBarSettingsCustomHeaderPaddingTop'] = var5;
    var4 = function useYouBarIOSModalPresentation(arg1) {
        _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
            var3 = _closure1_slot0;
            var4 = _closure1_slot2;
            var1 = 10;
            var1 = var4[var1];
            var4 = undefined;
            var5 = var3.bind(var4)(var1);
            var3 = var5.useYouBarEnabled;
            var1 = arg1;
            var1 = var3.bind(var5)(var1);
            if(!var1) { _fun0008_ip = 31; continue _fun0008 }
case 32:
            var3 = _closure1_slot0;
            var5 = _closure1_slot2;
            var2 = 4;
            var2 = var5[var2];
            var3 = var3.bind(var4)(var2);
            var2 = var3.isAndroid;
            var2 = var2.bind(var3)();
            var1 = !var2;
case 31:
            return var1;
        }
    };
    var3['useYouBarIOSModalPresentation'] = var4;
    var3['YOU_BAR_GRADIENT_EXTRA_HEIGHT'] = var2;
    return var1;
})();