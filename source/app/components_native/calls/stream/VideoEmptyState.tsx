// app/components_native/calls/stream/VideoEmptyState.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var12 = metroImportDefault;
    var3 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var12;
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
    var2 = metroImportAll;
    var1 = undefined;
    var2 = var2.bind(var1)(var5);
    var2 = 1;
    var2 = var7[var2];
    var2 = var6.bind(var1)(var2);
    var9 = var2.StyleSheet;
    var2 = var2.View;
    var _closure1_slot3 = var2;
    var2 = 2;
    var2 = var7[var2];
    var2 = var12.bind(var1)(var2);
    var _closure1_slot4 = var2;
    var2 = 3;
    var2 = var7[var2];
    var2 = var6.bind(var1)(var2);
    var13 = var2.Fonts;
    var2 = 4;
    var2 = var7[var2];
    var2 = var6.bind(var1)(var2);
    var5 = var2.jsx;
    var _closure1_slot5 = var5;
    var5 = var2.Fragment;
    var _closure1_slot6 = var5;
    var2 = var2.jsxs;
    var _closure1_slot7 = var2;
    var2 = {};
    var5 = 'NONE';
    var2['NONE'] = var5;
    var5 = 'STREAM_ENDED';
    var2['STREAM_ENDED'] = var5;
    var5 = 'STREAM_FAILED';
    var2['STREAM_FAILED'] = var5;
    var _closure1_slot8 = var2;
    var8 = var9.create;
    var5 = {};
    var10 = {'alignItems': 'center', 'justifyContent': 'center', 'backgroundColor': null, 'padding': 8};
    var11 = 5;
    var14 = var7[var11];
    var14 = var12.bind(var1)(var14);
    var14 = var14.unsafe_rawColors;
    var14 = var14.PRIMARY_700;
    var10['backgroundColor'] = var14;
    var5['container'] = var10;
    var10 = {'marginBottom': 8, 'width': '100%', 'resizeMode': 'contain'};
    var5['placeholderImage'] = var10;
    var10 = {'color': null, 'fontFamily': null, 'fontSize': 16, 'lineHeight': 20, 'textAlign': 'center'};
    var14 = var7[var11];
    var14 = var12.bind(var1)(var14);
    var14 = var14.unsafe_rawColors;
    var14 = var14.WHITE_500;
    var10['color'] = var14;
    var13 = var13.PRIMARY_SEMIBOLD;
    var10['fontFamily'] = var13;
    var5['placeholderText'] = var10;
    var10 = {'marginTop': 16, 'paddingHorizontal': 16, 'alignSelf': 'center', 'flexGrow': 0};
    var11 = var7[var11];
    var11 = var12.bind(var1)(var11);
    var11 = var11.radii;
    var11 = var11.round;
    var10['borderRadius'] = var11;
    var5['button'] = var10;
    var5 = var8.bind(var9)(var5);
    var _closure1_slot9 = var5;
    var5 = 18;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'components_native/calls/stream/VideoEmptyState.tsx';
    var5 = var6.bind(var7)(var5);
    var4 = function VideoEmptyState(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var7 = arg1;
            var3 = var7.type;
            var6 = var7.style;
            var13 = var7.avError;
            var16 = var7.removeSplashImage;
            var5 = var7.removeCloseButton;
            var1 = var7.stream;
            var _closure2_slot0 = var1;
            var4 = {'type': 0, 'style': 0, 'avError': 0, 'removeSplashImage': 0, 'removeCloseButton': 0, 'stream': 0};
            var8 = null;
            var28 = var4;
            var27 = null;
            var2 = silentSetPrototypeOf(var28, var27);
            var28 = {};
            var27 = var7;
            var26 = var4;
            var12 = copyDataProperties(var28, var27, var26);
            var4 = undefined;
            var _closure2_slot1 = var4;
            var7 = _closure1_slot0;
            var9 = _closure1_slot2;
            var2 = 6;
            var2 = var9[var2];
            var9 = var7.bind(var4)(var2);
            var7 = var9.useAVErrorExperiment;
            var2 = {};
            var14 = 'VideoEmptyState';
            var2['location'] = var14;
            var2 = var7.bind(var9)(var2);
            var7 = var2.avErrorUIEnabled;
            var2 = _closure1_slot8;
            var2 = var2.STREAM_ENDED;
            if(!(var2 !== var3)) { _fun0001_ip = 395; continue _fun0001 }
 155:
            var2 = _closure1_slot8;
            var2 = var2.STREAM_FAILED;
            if(!(var2 !== var3)) { _fun0001_ip = 195; continue _fun0001 }
 169:
            var2 = _closure1_slot8;
            var2 = var2.NONE;
            var9 = undefined;
            if(!(var2 === var3)) { _fun0001_ip = 592; continue _fun0001 }
 188:
            var9 = null;
            _fun0001_ip = 592; continue _fun0001;
 195:
            var15 = _closure1_slot7;
            var14 = _closure1_slot6;
            var2 = {};
            var18 = !var16;
            if(!var18) { _fun0001_ip = 263; continue _fun0001 }
 211:
            var20 = _closure1_slot5;
            var19 = _closure1_slot0;
            var21 = _closure1_slot2;
            var17 = 10;
            var17 = var21[var17];
            var17 = var19.bind(var4)(var17);
            var19 = var17.StreamFailed;
            var17 = {};
            var21 = _closure1_slot9;
            var21 = var21.placeholderImage;
            var17['style'] = var21;
            var18 = var20.bind(var4)(var19, var17);
 263:
            var17 = new Array(2);
            var17[0] = var18;
            var20 = _closure1_slot5;
            var24 = _closure1_slot0;
            var25 = _closure1_slot2;
            var18 = 8;
            var18 = var25[var18];
            var18 = var24.bind(var4)(var18);
            var19 = var18.LegacyText;
            var18 = {};
            var21 = _closure1_slot9;
            var21 = var21.placeholderText;
            var18['style'] = var21;
            var21 = 9;
            var22 = var25[var21];
            var22 = var24.bind(var4)(var22);
            var23 = var22.intl;
            var22 = var23.string;
            var21 = var25[var21];
            var21 = var24.bind(var4)(var21);
            var21 = var21.t;
            var21 = var21.rSlOen;
            var21 = var22.bind(var23)(var21);
            var18['children'] = var21;
            var18 = var20.bind(var4)(var19, var18);
            var17[1] = var18;
            var2['children'] = var17;
            var9 = var15.bind(var4)(var14, var2);
            _fun0001_ip = 592; continue _fun0001;
 395:
            var15 = _closure1_slot7;
            var14 = _closure1_slot6;
            var2 = {};
            var17 = !var16;
            if(!var17) { _fun0001_ip = 463; continue _fun0001 }
 411:
            var19 = _closure1_slot5;
            var18 = _closure1_slot0;
            var20 = _closure1_slot2;
            var16 = 7;
            var16 = var20[var16];
            var16 = var18.bind(var4)(var16);
            var18 = var16.StreamEnded;
            var16 = {};
            var20 = _closure1_slot9;
            var20 = var20.placeholderImage;
            var16['style'] = var20;
            var17 = var19.bind(var4)(var18, var16);
 463:
            var16 = new Array(2);
            var16[0] = var17;
            var19 = _closure1_slot5;
            var21 = _closure1_slot0;
            var24 = _closure1_slot2;
            var17 = 8;
            var17 = var24[var17];
            var17 = var21.bind(var4)(var17);
            var18 = var17.LegacyText;
            var17 = {};
            var20 = _closure1_slot9;
            var20 = var20.placeholderText;
            var17['style'] = var20;
            var20 = 9;
            var22 = var24[var20];
            var22 = var21.bind(var4)(var22);
            var23 = var22.intl;
            var22 = var23.formatToMarkdownString;
            var20 = var24[var20];
            var20 = var21.bind(var4)(var20);
            var20 = var20.t;
            var21 = var20.1Ww0Hh;
            var20 = {};
            var20 = var22.bind(var23)(var21, var20);
            var17['children'] = var20;
            var17 = var19.bind(var4)(var18, var17);
            var16[1] = var17;
            var2['children'] = var16;
            var9 = var15.bind(var4)(var14, var2);
 592:
            if(!(var8 == var13)) { _fun0001_ip = 672; continue _fun0001 }
 596:
            var2 = _closure1_slot8;
            var2 = var2.STREAM_FAILED;
            var17 = null;
            if(!(var3 === var2)) { _fun0001_ip = 709; continue _fun0001 }
 612:
            var15 = _closure1_slot0;
            var16 = _closure1_slot2;
            var2 = 11;
            var3 = var16[var2];
            var14 = var15.bind(var4)(var3);
            var3 = var14.getErrorInfo;
            var2 = var16[var2];
            var2 = var15.bind(var4)(var2);
            var2 = var2.AVError;
            var2 = var2.STREAM_FAILED_TO_START;
            var2 = var3.bind(var14)(var2);
            var17 = var2.errorCode;
            _fun0001_ip = 709; continue _fun0001;
 672:
            var3 = _closure1_slot0;
            var14 = _closure1_slot2;
            var2 = 11;
            var2 = var14[var2];
            var3 = var3.bind(var4)(var2);
            var2 = var3.getErrorInfo;
            var2 = var2.bind(var3)(var13);
            var17 = var2.errorCode;
 709:
            var13 = _closure1_slot0;
            var3 = _closure1_slot2;
            var2 = 12;
            var2 = var3[var2];
            var15 = var13.bind(var4)(var2);
            var14 = var15.useStateFromStores;
            var2 = _closure1_slot4;
            var13 = new Array(1);
            var13[0] = var2;
            var1 = var1.channelId;
            var2 = new Array(1);
            var2[0] = var1;
            var1 = function() {
                var3 = _closure1_slot4;
                var2 = var3.getChannel;
                var1 = _closure2_slot0;
                var1 = var1.channelId;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var1 = var14.bind(var15)(var13, var1, var2);
            _closure2_slot1 = var1;
            var2 = _closure1_slot1;
            var1 = 13;
            var1 = var3[var1];
            var2 = var2.bind(var4)(var1);
            var1 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var3 = _closure2_slot1;
                    var2 = null;
                    var2 = var2 != var3;
                    if(!var2) { _fun0002_ip = 30; continue _fun0002 }
 16:
                    var4 = _closure2_slot1;
                    var3 = var4.isGuildStageVoice;
                    var2 = var3.bind(var4)();
 30:
                    if(!var2) { _fun0002_ip = 96; continue _fun0002 }
 33:
                    var6 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var2 = 14;
                    var2 = var7[var2];
                    var5 = undefined;
                    var3 = var6.bind(var5)(var2);
                    var2 = var3.stopStream;
                    var4 = 15;
                    var4 = var7[var4];
                    var5 = var6.bind(var5)(var4);
                    var4 = var5.encodeStreamKey;
                    var1 = _closure2_slot0;
                    var1 = var4.bind(var5)(var1);
                    var1 = var2.bind(var3)(var1);
 96:
                    var1 = undefined;
                    return var1;
                }
            };
            var1 = var2.bind(var4)(var1);
            var3 = _closure1_slot7;
            var2 = _closure1_slot3;
            var1 = {};
            var28 = var1;
            var27 = var12;
            var12 = copyDataProperties(var28, var27);
            var12 = _closure1_slot9;
            var13 = var12.container;
            var12 = new Array(2);
            var12[0] = var13;
            var12[1] = var6;
            var6 = 'style';
            var1[var6] = var12;
            var6 = new Array(3);
            var6[0] = var9;
            if(!var7) { _fun0001_ip = 870; continue _fun0001 }
 866:
            var7 = var8 != var17;
 870:
            if(!var7) { _fun0001_ip = 981; continue _fun0001 }
 873:
            var12 = _closure1_slot5;
            var14 = _closure1_slot0;
            var18 = _closure1_slot2;
            var8 = 16;
            var8 = var18[var8];
            var8 = var14.bind(var4)(var8);
            var9 = var8.Text;
            var8 = {'variant': 'text-sm/semibold', 'color': 'text-muted', 'selectable': true};
            var13 = 9;
            var15 = var18[var13];
            var15 = var14.bind(var4)(var15);
            var16 = var15.intl;
            var15 = var16.formatToPlainString;
            var13 = var18[var13];
            var13 = var14.bind(var4)(var13);
            var13 = var13.t;
            var14 = var13.ejOT9/;
            var13 = {};
            var13['errorCode'] = var17;
            var13 = var15.bind(var16)(var14, var13);
            var8['children'] = var13;
            var7 = var12.bind(var4)(var9, var8);
 981:
            var6[1] = var7;
            var5 = !var5;
            if(!var5) { _fun0001_ip = 1133; continue _fun0001 }
 994:
            var9 = _closure1_slot5;
            var13 = _closure1_slot1;
            var15 = _closure1_slot2;
            var12 = 17;
            var7 = var15[var12];
            var8 = var13.bind(var4)(var7);
            var7 = {};
            var14 = _closure1_slot9;
            var14 = var14.button;
            var7['style'] = var14;
            var12 = var15[var12];
            var12 = var13.bind(var4)(var12);
            var12 = var12.Colors;
            var12 = var12.GREY;
            var7['color'] = var12;
            var14 = _closure1_slot0;
            var11 = 9;
            var12 = var15[var11];
            var12 = var14.bind(var4)(var12);
            var13 = var12.intl;
            var12 = var13.string;
            var11 = var15[var11];
            var11 = var14.bind(var4)(var11);
            var11 = var11.t;
            var11 = var11.4EGMWF;
            var11 = var12.bind(var13)(var11);
            var7['text'] = var11;
            var10 = function onPress() {
                var5 = _closure1_slot0;
                var6 = _closure1_slot2;
                var1 = 14;
                var2 = var6[var1];
                var1 = undefined;
                var4 = var5.bind(var1)(var2);
                var3 = var4.stopStream;
                var2 = 15;
                var2 = var6[var2];
                var6 = var5.bind(var1)(var2);
                var5 = var6.encodeStreamKey;
                var2 = _closure2_slot0;
                var2 = var5.bind(var6)(var2);
                var2 = var3.bind(var4)(var2);
                return var1;
            };
            var7['onPress'] = var10;
            var5 = var9.bind(var4)(var8, var7);
 1133:
            var6[2] = var5;
            var5 = 'children';
            var1[var5] = var6;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['default'] = var4;
    var3['VideoEmptyTypes'] = var2;
    return var1;
})();