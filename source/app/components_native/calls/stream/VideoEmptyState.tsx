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
    var5 = 5;
    var5 = var7[var5];
    var9 = var6.bind(var1)(var5);
    var8 = var9.createStyles;
    var5 = {};
    var10 = {'alignItems': 'center', 'justifyContent': 'center', 'backgroundColor': null, 'padding': 8};
    var11 = 6;
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
    var14 = var14.WHITE;
    var10['color'] = var14;
    var13 = var13.PRIMARY_SEMIBOLD;
    var10['fontFamily'] = var13;
    var5['placeholderText'] = var10;
    var10 = {'marginTop': 16, 'alignSelf': 'center'};
    var5['buttonWrapper'] = var10;
    var10 = {};
    var11 = var7[var11];
    var11 = var12.bind(var1)(var11);
    var11 = var11.radii;
    var11 = var11.round;
    var10['borderRadius'] = var11;
    var5['buttonPill'] = var10;
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
case 0:
            var8 = arg1;
            var3 = var8.type;
            var6 = var8.style;
            var11 = var8.avError;
            var16 = var8.removeSplashImage;
            var5 = var8.removeCloseButton;
            var1 = var8.stream;
            var _closure2_slot0 = var1;
            var4 = {'type': 0, 'style': 0, 'avError': 0, 'removeSplashImage': 0, 'removeCloseButton': 0, 'stream': 0};
            var7 = null;
            var28 = var4;
            var27 = null;
            var2 = silentSetPrototypeOf(var28, var27);
            var28 = {};
            var27 = var8;
            var26 = var4;
            var9 = copyDataProperties(var28, var27, var26);
            var4 = undefined;
            var _closure2_slot1 = var4;
            var2 = _closure1_slot9;
            var13 = var2.bind(var4)();
            var2 = _closure1_slot8;
            var2 = var2.STREAM_ENDED;
            if(!(var2 !== var3)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var2 = _closure1_slot8;
            var2 = var2.STREAM_FAILED;
            if(!(var2 !== var3)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var2 = _closure1_slot8;
            var2 = var2.NONE;
            var8 = undefined;
            if(!(var2 === var3)) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var8 = null;
            _fun0001_ip = 6; continue _fun0001;
case 4:
            var15 = _closure1_slot7;
            var14 = _closure1_slot6;
            var2 = {};
            var18 = !var16;
            if(!var18) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var20 = _closure1_slot5;
            var19 = _closure1_slot0;
            var21 = _closure1_slot2;
            var17 = 10;
            var17 = var21[var17];
            var17 = var19.bind(var4)(var17);
            var19 = var17.StreamFailed;
            var17 = {};
            var21 = var13.placeholderImage;
            var17['style'] = var21;
            var18 = var20.bind(var4)(var19, var17);
case 8:
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
            var21 = var13.placeholderText;
            var18['style'] = var21;
            var21 = 9;
            var22 = var25[var21];
            var22 = var24.bind(var4)(var22);
            var23 = var22.intl;
            var22 = var23.string;
            var21 = var25[var21];
            var21 = var24.bind(var4)(var21);
            var21 = var21.t;
            var21 = var21.rSlOep;
            var21 = var22.bind(var23)(var21);
            var18['children'] = var21;
            var18 = var20.bind(var4)(var19, var18);
            var17[1] = var18;
            var2['children'] = var17;
            var8 = var15.bind(var4)(var14, var2);
            _fun0001_ip = 6; continue _fun0001;
case 2:
            var15 = _closure1_slot7;
            var14 = _closure1_slot6;
            var2 = {};
            var17 = !var16;
            if(!var17) { _fun0001_ip = 10; continue _fun0001 }
case 11:
            var19 = _closure1_slot5;
            var18 = _closure1_slot0;
            var20 = _closure1_slot2;
            var16 = 7;
            var16 = var20[var16];
            var16 = var18.bind(var4)(var16);
            var18 = var16.StreamEnded;
            var16 = {};
            var20 = var13.placeholderImage;
            var16['style'] = var20;
            var17 = var19.bind(var4)(var18, var16);
case 10:
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
            var20 = var13.placeholderText;
            var17['style'] = var20;
            var20 = 9;
            var22 = var24[var20];
            var22 = var21.bind(var4)(var22);
            var23 = var22.intl;
            var22 = var23.formatToMarkdownString;
            var20 = var24[var20];
            var20 = var21.bind(var4)(var20);
            var20 = var20.t;
            var21 = var20["1Ww0Hi"];
            var20 = {};
            var20 = var22.bind(var23)(var21, var20);
            var17['children'] = var20;
            var17 = var19.bind(var4)(var18, var17);
            var16[1] = var17;
            var2['children'] = var16;
            var8 = var15.bind(var4)(var14, var2);
case 6:
            if(!(var7 == var11)) { _fun0001_ip = 12; continue _fun0001 }
case 13:
            var2 = _closure1_slot8;
            var2 = var2.STREAM_FAILED;
            var18 = null;
            if(!(var3 === var2)) { _fun0001_ip = 14; continue _fun0001 }
case 15:
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
            var18 = var2.errorCode;
            _fun0001_ip = 14; continue _fun0001;
case 12:
            var3 = _closure1_slot0;
            var14 = _closure1_slot2;
            var2 = 11;
            var2 = var14[var2];
            var3 = var3.bind(var4)(var2);
            var2 = var3.getErrorInfo;
            var2 = var2.bind(var3)(var11);
            var18 = var2.errorCode;
case 14:
            var11 = _closure1_slot0;
            var3 = _closure1_slot2;
            var2 = 12;
            var2 = var3[var2];
            var15 = var11.bind(var4)(var2);
            var14 = var15.useStateFromStores;
            var2 = _closure1_slot4;
            var11 = new Array(1);
            var11[0] = var2;
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
            var1 = var14.bind(var15)(var11, var1, var2);
            _closure2_slot1 = var1;
            var2 = _closure1_slot1;
            var1 = 13;
            var1 = var3[var1];
            var2 = var2.bind(var4)(var1);
            var1 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var3 = _closure2_slot1;
                    var2 = null;
                    var2 = var2 != var3;
                    if(!var2) { _fun0002_ip = 16; continue _fun0002 }
case 17:
                    var4 = _closure2_slot1;
                    var3 = var4.isGuildStageVoice;
                    var2 = var3.bind(var4)();
case 16:
                    if(!var2) { _fun0002_ip = 18; continue _fun0002 }
case 19:
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
case 18:
                    var1 = undefined;
                    return var1;
                }
            };
            var1 = var2.bind(var4)(var1);
            var3 = _closure1_slot7;
            var2 = _closure1_slot3;
            var1 = {};
            var28 = var1;
            var27 = var9;
            var9 = copyDataProperties(var28, var27);
            var11 = var13.container;
            var9 = new Array(2);
            var9[0] = var11;
            var9[1] = var6;
            var6 = 'style';
            var1[var6] = var9;
            var6 = new Array(3);
            var6[0] = var8;
            var7 = var7 != var18;
            if(!var7) { _fun0001_ip = 20; continue _fun0001 }
case 21:
            var11 = _closure1_slot5;
            var15 = _closure1_slot0;
            var19 = _closure1_slot2;
            var8 = 16;
            var8 = var19[var8];
            var8 = var15.bind(var4)(var8);
            var9 = var8.Text;
            var8 = {'variant': 'text-sm/semibold', 'color': 'text-muted', 'selectable': true};
            var14 = 9;
            var16 = var19[var14];
            var16 = var15.bind(var4)(var16);
            var17 = var16.intl;
            var16 = var17.formatToPlainString;
            var14 = var19[var14];
            var14 = var15.bind(var4)(var14);
            var14 = var14.t;
            var15 = var14.ejOT95;
            var14 = {};
            var14['errorCode'] = var18;
            var14 = var16.bind(var17)(var15, var14);
            var8['children'] = var14;
            var7 = var11.bind(var4)(var9, var8);
case 20:
            var6[1] = var7;
            var5 = !var5;
            if(!var5) { _fun0001_ip = 22; continue _fun0001 }
case 23:
            var9 = _closure1_slot5;
            var8 = _closure1_slot3;
            var7 = {};
            var11 = var13.buttonWrapper;
            var7['style'] = var11;
            var16 = _closure1_slot0;
            var17 = _closure1_slot2;
            var10 = 17;
            var10 = var17[var10];
            var10 = var16.bind(var4)(var10);
            var11 = var10.BaseTextButton;
            var10 = {};
            var13 = var13.buttonPill;
            var10['pillStyle'] = var13;
            var13 = 'secondary';
            var10['variant'] = var13;
            var13 = 9;
            var14 = var17[var13];
            var14 = var16.bind(var4)(var14);
            var15 = var14.intl;
            var14 = var15.string;
            var13 = var17[var13];
            var13 = var16.bind(var4)(var13);
            var13 = var13.t;
            var13 = var13["4EGMWL"];
            var13 = var14.bind(var15)(var13);
            var10['text'] = var13;
            var12 = function onPress() {
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
            var10['onPress'] = var12;
            var10 = var9.bind(var4)(var11, var10);
            var7['children'] = var10;
            var5 = var9.bind(var4)(var8, var7);
case 22:
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