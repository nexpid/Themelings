// app/modules/media_viewer/native/components/RemixButton.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var8 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var8;
    var _closure1_slot2 = var6;
    var1 = global;
    var9 = var1.Object;
    var7 = var9.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var9)(var3, var1, var4);
    var1 = 0;
    var4 = var6[var1];
    var1 = undefined;
    var4 = var8.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 1;
    var7 = var6[var4];
    var4 = metroImportAll;
    var7 = var4.bind(var1)(var7);
    var _closure1_slot4 = var7;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var9 = var4.View;
    var _closure1_slot5 = var9;
    var9 = var4.StyleSheet;
    var4 = 3;
    var4 = var6[var4];
    var4 = var8.bind(var1)(var4);
    var _closure1_slot6 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var8.bind(var1)(var4);
    var _closure1_slot7 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var8.bind(var1)(var4);
    var _closure1_slot8 = var4;
    var4 = 6;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var11 = var4.Colors;
    var4 = var4.GIF_RE_IOS;
    var _closure1_slot9 = var4;
    var4 = 7;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.ContentDismissActionType;
    var _closure1_slot10 = var4;
    var4 = 8;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var8 = var4.jsx;
    var _closure1_slot11 = var8;
    var4 = var4.jsxs;
    var _closure1_slot12 = var4;
    var8 = var9.create;
    var4 = {};
    var10 = {'position': 'absolute', 'height': 30, 'width': 30, 'zIndex': 1};
    var4['sparkle'] = var10;
    var10 = {'left': 4294967284, 'top': 4294967291};
    var4['leftSparkle'] = var10;
    var10 = {'position': 'absolute', 'right': 4294967290, 'bottom': 4294967291};
    var11 = var11.BRAND_360;
    var10['tintColor'] = var11;
    var4['rightSparkle'] = var10;
    var4 = var8.bind(var9)(var4);
    var _closure1_slot13 = var4;
    var4 = var7.memo;
    var2 = function RemixButton(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var1 = arg1;
            var17 = var1.source;
            var _closure2_slot0 = var17;
            var14 = var1.setClickedRemix;
            var _closure2_slot1 = var14;
            var12 = _closure1_slot0;
            var15 = _closure1_slot2;
            var1 = 11;
            var1 = var15[var1];
            var5 = undefined;
            var4 = var12.bind(var5)(var1);
            var3 = var4.useIsRemixEnabledForMedia;
            var2 = var17.channelId;
            var6 = _closure1_slot1;
            var1 = 12;
            var1 = var15[var1];
            var1 = var6.bind(var5)(var1);
            var1 = var1.MEDIA_VIEWER;
            var21 = var3.bind(var4)(var2, var17, var1);
            var _closure2_slot2 = var21;
            var1 = {'isVideo': false, 'isGIF': false, 'isImage': false, 'isAnimatedWebP': false, 'isAnimatedAVIF': false};
            var7 = false;
            var2 = var17.videoURI;
            var3 = null;
            if(!(var3 == var2)) { _fun0001_ip = 274; continue _fun0001 }
 124:
            var2 = var17.sourceURI;
            if(!(var3 != var2)) { _fun0001_ip = 282; continue _fun0001 }
 137:
            var4 = _closure1_slot0;
            var6 = _closure1_slot2;
            var2 = 9;
            var8 = var6[var2];
            var16 = var4.bind(var5)(var8);
            var13 = var16.urlMatchesFileExtension;
            var11 = var17.sourceURI;
            var8 = _closure1_slot9;
            var8 = var13.bind(var16)(var11, var8);
            var1['isGIF'] = var8;
            var2 = var6[var2];
            var11 = var4.bind(var5)(var2);
            var8 = var11.isImageUrl;
            var2 = var17.sourceURI;
            var2 = var8.bind(var11)(var2);
            var1['isImage'] = var2;
            var2 = 10;
            var8 = var6[var2];
            var11 = var4.bind(var5)(var8);
            var8 = var11.isAnimatedWebpSource;
            var8 = var8.bind(var11)(var17);
            var1['isAnimatedWebP'] = var8;
            var2 = var6[var2];
            var4 = var4.bind(var5)(var2);
            var2 = var4.isAnimatedAvifSource;
            var2 = var2.bind(var4)(var17);
            var1['isAnimatedAVIF'] = var2;
            _fun0001_ip = 282; continue _fun0001;
 274:
            var2 = true;
            var1['isVideo'] = var2;
 282:
            var20 = var1.isVideo;
            var _closure2_slot3 = var20;
            var19 = var1.isGIF;
            var _closure2_slot4 = var19;
            var18 = var1.isImage;
            var _closure2_slot5 = var18;
            var11 = var1.isAnimatedWebP;
            var _closure2_slot6 = var11;
            var1 = var1.isAnimatedAVIF;
            var _closure2_slot7 = var1;
            var4 = _closure1_slot8;
            var2 = var4.getCurrentUser;
            var2 = var2.bind(var4)();
            var _closure2_slot8 = var2;
            var8 = _closure1_slot7;
            var6 = var8.getMessage;
            var4 = var17.channelId;
            var2 = var17.messageId;
            var16 = var6.bind(var8)(var4, var2);
            var _closure2_slot9 = var16;
            var2 = 13;
            var2 = var15[var2];
            var8 = var12.bind(var5)(var2);
            var6 = var8.useStateFromStores;
            var2 = _closure1_slot6;
            var4 = new Array(1);
            var4[0] = var2;
            var2 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var3 = _closure1_slot6;
                    var2 = var3.getNonNitroUpsellShownTimes;
                    var5 = _closure2_slot8;
                    var1 = null;
                    var5 = var1 == var5;
                    var1 = undefined;
                    if(var5) { _fun0002_ip = 42; continue _fun0002 }
 33:
                    var4 = _closure2_slot8;
                    var1 = var4.id;
 42:
                    var1 = var2.bind(var3)(var1);
                    return var1;
                }
            };
            var4 = var6.bind(var8)(var4, var2);
            var2 = 14;
            var2 = var15[var2];
            var6 = var12.bind(var5)(var2);
            var2 = var6.useShouldUpsellRemix;
            var8 = var2.bind(var6)(var5, var7);
            var13 = _closure1_slot4;
            var7 = var13.useMemo;
            var6 = function() {
                var3 = _closure1_slot1;
                var2 = _closure1_slot2;
                var1 = 15;
                var1 = var2[var1];
                var2 = undefined;
                var1 = var3.bind(var2)(var1);
                var1 = var1.bind(var2)();
                return var1;
            };
            var2 = new Array(0);
            var6 = var7.bind(var13)(var6, var2);
            var7 = var13.useMemo;
            var2 = new Array(6);
            var2[0] = var21;
            var2[1] = var20;
            var2[2] = var19;
            var2[3] = var18;
            var2[4] = var11;
            var2[5] = var1;
            var1 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                    var1 = _closure2_slot2;
                    if(!var1) { _fun0003_ip = 17; continue _fun0003 }
 10:
                    var3 = _closure2_slot3;
                    var1 = !var3;
 17:
                    if(!var1) { _fun0003_ip = 27; continue _fun0003 }
 20:
                    var3 = _closure2_slot4;
                    var1 = !var3;
 27:
                    if(!var1) { _fun0003_ip = 34; continue _fun0003 }
 30:
                    var1 = _closure2_slot5;
 34:
                    if(!var1) { _fun0003_ip = 44; continue _fun0003 }
 37:
                    var3 = _closure2_slot6;
                    var1 = !var3;
 44:
                    if(!var1) { _fun0003_ip = 54; continue _fun0003 }
 47:
                    var2 = _closure2_slot7;
                    var1 = !var2;
 54:
                    return var1;
                }
            };
            var1 = var7.bind(var13)(var1, var2);
            var _closure2_slot10 = var1;
            var2 = 16;
            var2 = var15[var2];
            var11 = var12.bind(var5)(var2);
            var7 = var11.useSelectedDismissibleContent;
            var2 = 17;
            var2 = var15[var2];
            var2 = var12.bind(var5)(var2);
            var2 = var2.DismissibleContent;
            var12 = var2.REMIXING_ENTRYPOINT_EDUCATION_UPSELLS_MOBILE;
            var2 = new Array(1);
            var2[0] = var12;
            var11 = var7.bind(var11)(var2);
            var7 = _closure1_slot3;
            var2 = 2;
            var11 = var7.bind(var5)(var11, var2);
            var2 = 0;
            var7 = var11[var2];
            var2 = 1;
            var15 = var11[var2];
            var _closure2_slot11 = var15;
            var18 = var13.useEffect;
            var12 = new Array(1);
            var12[0] = var15;
            var11 = function() {
                var1 = function() {
                    var3 = _closure2_slot11;
                    var1 = _closure1_slot10;
                    var2 = var1.UNKNOWN;
                    var1 = undefined;
                    var1 = var3.bind(var1)(var2);
                    return var1;
                };
                return var1;
            };
            var11 = var18.bind(var13)(var11, var12);
            var12 = var13.useCallback;
            var11 = new Array(5);
            var11[0] = var1;
            var11[1] = var17;
            var11[2] = var16;
            var11[3] = var15;
            var11[4] = var14;
            var9 = function() {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                    var4 = _closure2_slot1;
                    var1 = undefined;
                    var2 = true;
                    var2 = var4.bind(var1)(var2);
                    var2 = _closure2_slot10;
                    if(var2) { _fun0004_ip = 109; continue _fun0004 }
 23:
                    var4 = _closure2_slot9;
                    var2 = null;
                    if(!(var2 != var4)) { _fun0004_ip = 186; continue _fun0004 }
 36:
                    var5 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    var4 = 19;
                    var4 = var8[var4];
                    var7 = var5.bind(var1)(var4);
                    var6 = var7.showRemixActionSheet;
                    var5 = _closure2_slot9;
                    var4 = _closure1_slot1;
                    var2 = 12;
                    var2 = var8[var2];
                    var2 = var4.bind(var1)(var2);
                    var4 = var2.MEDIA_VIEWER;
                    var2 = function() {
                        var3 = _closure2_slot11;
                        var1 = _closure1_slot10;
                        var2 = var1.AUTO;
                        var1 = undefined;
                        var2 = var3.bind(var1)(var2);
                        return var1;
                    };
                    var2 = var6.bind(var7)(var5, var4, var2);
                    _fun0004_ip = 186; continue _fun0004;
 109:
                    var5 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var4 = 18;
                    var4 = var6[var4];
                    var6 = var5.bind(var1)(var4);
                    var5 = var6.enterRemixing;
                    var4 = {};
                    var10 = _closure2_slot0;
                    var11 = var4;
                    var7 = copyDataProperties(var11, var10);
                    var8 = false;
                    var7 = 'local';
                    var4[var7] = var8;
                    var4 = var5.bind(var6)(var4);
                    var3 = _closure2_slot11;
                    var2 = _closure1_slot10;
                    var2 = var2.AUTO;
                    var2 = var3.bind(var1)(var2);
 186:
                    return var1;
                }
            };
            var11 = var12.bind(var13)(var9, var11);
            if(var1) { _fun0001_ip = 705; continue _fun0001 }
 677:
            var1 = null;
            if(!var8) { _fun0001_ip = 1082; continue _fun0001 }
 685:
            var1 = null;
            if(!var6) { _fun0001_ip = 1082; continue _fun0001 }
 693:
            var2 = var4 < var2;
            var1 = null;
            if(!var2) { _fun0001_ip = 1082; continue _fun0001 }
 705:
            var4 = _closure1_slot12;
            var3 = _closure1_slot5;
            var2 = {};
            var8 = var7;
            if(!var7) { _fun0001_ip = 808; continue _fun0001 }
 721:
            var12 = _closure1_slot11;
            var14 = _closure1_slot1;
            var15 = _closure1_slot2;
            var6 = 20;
            var6 = var15[var6];
            var9 = var14.bind(var5)(var6);
            var6 = {};
            var13 = 21;
            var13 = var15[var13];
            var13 = var14.bind(var5)(var13);
            var6['source'] = var13;
            var14 = _closure1_slot13;
            var15 = var14.sparkle;
            var13 = new Array(2);
            var13[0] = var15;
            var14 = var14.leftSparkle;
            var13[1] = var14;
            var6['style'] = var13;
            var13 = true;
            var6['disableColor'] = var13;
            var8 = var12.bind(var5)(var9, var6);
 808:
            var6 = new Array(3);
            var6[0] = var8;
            if(!var7) { _fun0001_ip = 906; continue _fun0001 }
 819:
            var12 = _closure1_slot11;
            var14 = _closure1_slot1;
            var15 = _closure1_slot2;
            var8 = 20;
            var8 = var15[var8];
            var9 = var14.bind(var5)(var8);
            var8 = {};
            var13 = 21;
            var13 = var15[var13];
            var13 = var14.bind(var5)(var13);
            var8['source'] = var13;
            var14 = _closure1_slot13;
            var15 = var14.sparkle;
            var13 = new Array(2);
            var13[0] = var15;
            var14 = var14.rightSparkle;
            var13[1] = var14;
            var8['style'] = var13;
            var13 = true;
            var8['disableColor'] = var13;
            var7 = var12.bind(var5)(var9, var8);
 906:
            var6[1] = var7;
            var9 = _closure1_slot11;
            var15 = _closure1_slot1;
            var14 = _closure1_slot2;
            var7 = 22;
            var7 = var14[var7];
            var8 = var15.bind(var5)(var7);
            var7 = {};
            var7['onPress'] = var11;
            var11 = 20;
            var11 = var14[var11];
            var12 = var15.bind(var5)(var11);
            var11 = {};
            var13 = 23;
            var13 = var14[var13];
            var13 = var15.bind(var5)(var13);
            var11['source'] = var13;
            var13 = 24;
            var13 = var14[var13];
            var13 = var15.bind(var5)(var13);
            var13 = var13.unsafe_rawColors;
            var13 = var13.WHITE_500;
            var11['color'] = var13;
            var11 = var9.bind(var5)(var12, var11);
            var7['icon'] = var11;
            var13 = _closure1_slot0;
            var10 = 25;
            var11 = var14[var10];
            var11 = var13.bind(var5)(var11);
            var12 = var11.intl;
            var11 = var12.string;
            var10 = var14[var10];
            var10 = var13.bind(var5)(var10);
            var10 = var10.t;
            var10 = var10.Gp2rPj;
            var10 = var11.bind(var12)(var10);
            var7['text'] = var10;
            var7 = var9.bind(var5)(var8, var7);
            var6[2] = var7;
            var2['children'] = var6;
            var1 = var4.bind(var5)(var3, var2);
 1082:
            return var1;
        }
    };
    var2 = var4.bind(var7)(var2);
    var4 = 26;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/media_viewer/native/components/RemixButton.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();