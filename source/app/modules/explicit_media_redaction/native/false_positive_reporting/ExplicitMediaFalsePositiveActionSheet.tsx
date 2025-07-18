// app/modules/explicit_media_redaction/native/false_positive_reporting/ExplicitMediaFalsePositiveActionSheet.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var11 = native3;
    var3 = native6;
    var6 = native7;
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
    var4 = native4;
    var1 = undefined;
    var4 = var4.bind(var1)(var7);
    var _closure1_slot3 = var4;
    var12 = 1;
    var4 = var6[var12];
    var4 = var5.bind(var1)(var4);
    var7 = var4.View;
    var _closure1_slot4 = var7;
    var7 = var4.Image;
    var _closure1_slot5 = var7;
    var4 = var4.ScrollView;
    var _closure1_slot6 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.jsx;
    var _closure1_slot7 = var7;
    var4 = var4.jsxs;
    var _closure1_slot8 = var4;
    var4 = function ExplicitMediaFalsePositivePreviewEmbed(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var1 = arg1;
            var1 = var1.embed;
            var2 = var1.video;
            var5 = undefined;
            if(!(var5 !== var2)) { _fun0001_ip = 36; continue _fun0001 }
 21:
            var3 = var1.type;
            var2 = 'gifv';
            if(!(var2 === var3)) { _fun0001_ip = 60; continue _fun0001 }
 36:
            var2 = var1.thumbnail;
            var3 = null;
            var3 = var3 == var2;
            var6 = undefined;
            if(var3) { _fun0001_ip = 58; continue _fun0001 }
 53:
            var6 = var2.url;
 58:
            _fun0001_ip = 71; continue _fun0001;
 60:
            var1 = var1.video;
            var6 = var1.url;
 71:
            var1 = null;
            var2 = var1 == var6;
            if(var2) { _fun0001_ip = 103; continue _fun0001 }
 80:
            var4 = _closure1_slot7;
            var3 = _closure1_slot11;
            var2 = {};
            var2['url'] = var6;
            var1 = var4.bind(var5)(var3, var2);
 103:
            return var1;
        }
    };
    var _closure1_slot9 = var4;
    var4 = function ExplicitMediaFalsePositivePreviewAttachment(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var1 = arg1;
            var1 = var1.attachment;
            var2 = var1.url;
            var1 = null;
            var3 = var1 == var2;
            if(var3) { _fun0002_ip = 48; continue _fun0002 }
 23:
            var5 = _closure1_slot7;
            var4 = _closure1_slot11;
            var3 = {};
            var3['url'] = var2;
            var2 = undefined;
            var1 = var5.bind(var2)(var4, var3);
 48:
            return var1;
        }
    };
    var _closure1_slot10 = var4;
    var4 = function ExplicitMediaFalsePositivePreview(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
            var1 = arg1;
            var10 = var1.url;
            var1 = _closure1_slot12;
            var4 = undefined;
            var9 = var1.bind(var4)();
            var2 = _closure1_slot0;
            var3 = _closure1_slot2;
            var1 = 3;
            var1 = var3[var1];
            var2 = var2.bind(var4)(var1);
            var1 = var2.isVideo;
            var5 = var1.bind(var2)(var10);
            var3 = _closure1_slot7;
            var2 = _closure1_slot4;
            var1 = {};
            var8 = var9.mediaContainer;
            var7 = new Array(2);
            var7[0] = var8;
            var8 = var9.elevationShadow;
            var7[1] = var8;
            var1['style'] = var7;
            var8 = _closure1_slot7;
            if(var5) { _fun0003_ip = 150; continue _fun0003 }
 97:
            var7 = _closure1_slot5;
            var5 = {};
            var12 = var9.media;
            var11 = new Array(2);
            var11[0] = var12;
            var12 = var9.image;
            var11[1] = var12;
            var5['style'] = var11;
            var11 = {};
            var11['uri'] = var10;
            var5['source'] = var11;
            var5 = var8.bind(var4)(var7, var5);
            _fun0003_ip = 215; continue _fun0003;
 150:
            var7 = _closure1_slot1;
            var11 = _closure1_slot2;
            var6 = 4;
            var6 = var11[var6];
            var7 = var7.bind(var4)(var6);
            var6 = {'volume': 0, 'resizeMode': 'cover', 'repeat': true, 'style': null, 'source': null, 'controls': true, 'paused': true};
            var9 = var9.media;
            var6['style'] = var9;
            var9 = {};
            var9['uri'] = var10;
            var6['source'] = var9;
            var5 = var8.bind(var4)(var7, var6);
 215:
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot11 = var4;
    var4 = 5;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = {};
    var9 = {};
    var10 = 6;
    var13 = var6[var10];
    var13 = var11.bind(var1)(var13);
    var13 = var13.spacing;
    var13 = var13.PX_16;
    var9['padding'] = var13;
    var4['content'] = var9;
    var9 = {'justifyContent': 'center', 'textAlign': 'center', 'alignItems': 'center'};
    var4['contentContainer'] = var9;
    var9 = {};
    var13 = var6[var10];
    var13 = var11.bind(var1)(var13);
    var13 = var13.spacing;
    var13 = var13.PX_8;
    var9['marginBottom'] = var13;
    var4['heading'] = var9;
    var9 = {};
    var13 = '100%';
    var9['width'] = var13;
    var13 = var6[var10];
    var13 = var11.bind(var1)(var13);
    var13 = var13.spacing;
    var13 = var13.PX_16;
    var9['padding'] = var13;
    var13 = var6[var10];
    var13 = var11.bind(var1)(var13);
    var13 = var13.colors;
    var13 = var13.BACKGROUND_SECONDARY;
    var9['backgroundColor'] = var13;
    var13 = var6[var10];
    var13 = var11.bind(var1)(var13);
    var13 = var13.radii;
    var13 = var13.xs;
    var9['borderRadius'] = var13;
    var13 = var6[var10];
    var13 = var11.bind(var1)(var13);
    var13 = var13.spacing;
    var13 = var13.PX_8;
    var9['marginTop'] = var13;
    var13 = '4 / 3';
    var9['aspectRatio'] = var13;
    var4['mediaContainer'] = var9;
    var9 = 7;
    var13 = var6[var9];
    var14 = var5.bind(var1)(var13);
    var13 = var14.generateBoxShadowStyle;
    var9 = var6[var9];
    var9 = var5.bind(var1)(var9);
    var9 = var9.FOUR_DP_ELEVATION_SHADOW_PARAMS;
    var9 = var13.bind(var14)(var9);
    var4['elevationShadow'] = var9;
    var9 = {};
    var13 = 'contain';
    var9['resizeMode'] = var13;
    var4['image'] = var9;
    var9 = {};
    var9['flex'] = var12;
    var12 = var6[var10];
    var12 = var11.bind(var1)(var12);
    var12 = var12.radii;
    var12 = var12.xs;
    var9['borderRadius'] = var12;
    var4['media'] = var9;
    var9 = {};
    var12 = var6[var10];
    var12 = var11.bind(var1)(var12);
    var12 = var12.colors;
    var12 = var12.ACTION_SHEET_GRADIENT_BG;
    var9['backgroundColor'] = var12;
    var12 = var6[var10];
    var12 = var11.bind(var1)(var12);
    var12 = var12.spacing;
    var12 = var12.PX_12;
    var9['paddingVertical'] = var12;
    var12 = var6[var10];
    var12 = var11.bind(var1)(var12);
    var12 = var12.spacing;
    var12 = var12.PX_16;
    var9['paddingHorizontal'] = var12;
    var12 = var6[var10];
    var12 = var11.bind(var1)(var12);
    var12 = var12.spacing;
    var12 = var12.PX_8;
    var9['gap'] = var12;
    var4['footer'] = var9;
    var9 = {};
    var10 = var6[var10];
    var10 = var11.bind(var1)(var10);
    var10 = var10.spacing;
    var10 = var10.PX_4;
    var9['marginBottom'] = var10;
    var4['firstButton'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot12 = var4;
    var4 = 19;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/explicit_media_redaction/native/false_positive_reporting/ExplicitMediaFalsePositiveActionSheet.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function handleSuccess(arg1) {
        var7 = _closure1_slot1;
        var9 = _closure1_slot2;
        var1 = 8;
        var2 = var9[var1];
        var1 = undefined;
        var4 = var7.bind(var1)(var2);
        var3 = var4.hideActionSheet;
        var2 = arg1;
        var2 = var3.bind(var4)(var2);
        var2 = 9;
        var2 = var9[var2];
        var4 = var7.bind(var1)(var2);
        var3 = var4.open;
        var2 = {};
        var6 = 'explicit_media_report_false_positive_success';
        var2['key'] = var6;
        var6 = 10;
        var6 = var9[var6];
        var6 = var7.bind(var1)(var6);
        var2['icon'] = var6;
        var8 = _closure1_slot0;
        var5 = 11;
        var5 = var9[var5];
        var5 = var8.bind(var1)(var5);
        var5 = var5.ShieldIcon;
        var2['IconComponent'] = var5;
        var5 = 'text-brand';
        var2['iconColor'] = var5;
        var5 = 12;
        var6 = var9[var5];
        var6 = var8.bind(var1)(var6);
        var7 = var6.intl;
        var6 = var7.string;
        var5 = var9[var5];
        var5 = var8.bind(var1)(var5);
        var5 = var5.t;
        var5 = var5.gFsTKi;
        var5 = var6.bind(var7)(var5);
        var2['content'] = var5;
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var3['handleSuccess'] = var4;
    var4 = function handleError() {
        var7 = _closure1_slot0;
        var8 = _closure1_slot2;
        var1 = 13;
        var2 = var8[var1];
        var1 = undefined;
        var4 = var7.bind(var1)(var2);
        var3 = var4.presentError;
        var2 = 12;
        var5 = var8[var2];
        var5 = var7.bind(var1)(var5);
        var6 = var5.intl;
        var5 = var6.string;
        var2 = var8[var2];
        var2 = var7.bind(var1)(var2);
        var2 = var2.t;
        var2 = var2.R0RpRU;
        var2 = var5.bind(var6)(var2);
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var3['handleError'] = var4;
    var2 = function ExplicitMediaFalsePositiveActionSheet(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
            var2 = arg1;
            var9 = var2.channelId;
            var _closure2_slot0 = var9;
            var8 = var2.messageId;
            var _closure2_slot1 = var8;
            var19 = var2.isReportFalsePositiveLoading;
            var23 = var2.attachmentPreview;
            var20 = var2.embedPreview;
            var3 = var2.onConfirmPress;
            var _closure2_slot2 = var3;
            var2 = var2.analyticsContext;
            var _closure2_slot3 = var2;
            var5 = _closure1_slot12;
            var4 = undefined;
            var13 = var5.bind(var4)();
            var14 = _closure1_slot0;
            var17 = _closure1_slot2;
            var5 = 14;
            var5 = var17[var5];
            var7 = var14.bind(var4)(var5);
            var6 = var7.useIsEligibleForSensitiveContentGoreExperiment;
            var5 = 'ExplicitMediaFalsePositiveActionSheet';
            var6 = var6.bind(var7)(var5);
            var _closure2_slot4 = var6;
            var5 = _closure1_slot3;
            var11 = var5.useCallback;
            var10 = new Array(3);
            var10[0] = var9;
            var10[1] = var8;
            var10[2] = var2;
            var7 = function() {
                var8 = _closure1_slot0;
                var4 = _closure1_slot2;
                var7 = 15;
                var3 = var4[var7];
                var1 = undefined;
                var6 = var8.bind(var1)(var3);
                var5 = var6.trackMediaRedactionAction;
                var3 = {};
                var7 = var4[var7];
                var7 = var8.bind(var1)(var7);
                var7 = var7.TrackMediaRedactionActionType;
                var7 = var7.EXPLICIT_MEDIA_FALSE_POSITIVE_CLICK_CANCEL;
                var3['action'] = var7;
                var8 = _closure2_slot0;
                var3['channelId'] = var8;
                var8 = _closure2_slot1;
                var3['messageId'] = var8;
                var7 = _closure2_slot3;
                var3['context'] = var7;
                var3 = var5.bind(var6)(var3);
                var3 = _closure1_slot1;
                var2 = 8;
                var2 = var4[var2];
                var3 = var3.bind(var1)(var2);
                var2 = var3.hideActionSheet;
                var2 = var2.bind(var3)();
                return var1;
            };
            var16 = var11.bind(var5)(var7, var10);
            var10 = var5.useCallback;
            var7 = new Array(4);
            var7[0] = var9;
            var7[1] = var8;
            var7[2] = var2;
            var7[3] = var3;
            var3 = function() {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                    var2 = _closure2_slot2;
                    var1 = null;
                    if(!(var1 != var2)) { _fun0005_ip = 23; continue _fun0005 }
 13:
                    var2 = _closure2_slot2;
                    var1 = undefined;
                    var1 = var2.bind(var1)();
 23:
                    var7 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    var6 = 15;
                    var2 = var8[var6];
                    var1 = undefined;
                    var4 = var7.bind(var1)(var2);
                    var3 = var4.trackMediaRedactionAction;
                    var2 = {};
                    var6 = var8[var6];
                    var6 = var7.bind(var1)(var6);
                    var6 = var6.TrackMediaRedactionActionType;
                    var6 = var6.EXPLICIT_MEDIA_FALSE_POSITIVE_CLICK_CONFIRM;
                    var2['action'] = var6;
                    var6 = _closure2_slot0;
                    var2['channelId'] = var6;
                    var6 = _closure2_slot1;
                    var2['messageId'] = var6;
                    var5 = _closure2_slot3;
                    var2['context'] = var5;
                    var2 = var3.bind(var4)(var2);
                    return var1;
                }
            };
            var18 = var10.bind(var5)(var3, var7);
            var7 = var5.useEffect;
            var3 = new Array(3);
            var3[0] = var9;
            var3[1] = var8;
            var3[2] = var2;
            var2 = function() {
                var6 = _closure1_slot0;
                var7 = _closure1_slot2;
                var5 = 15;
                var2 = var7[var5];
                var1 = undefined;
                var4 = var6.bind(var1)(var2);
                var3 = var4.trackMediaRedactionAction;
                var2 = {};
                var5 = var7[var5];
                var5 = var6.bind(var1)(var5);
                var5 = var5.TrackMediaRedactionActionType;
                var5 = var5.EXPLICIT_MEDIA_FALSE_POSITIVE_VIEWED;
                var2['action'] = var5;
                var6 = _closure2_slot0;
                var2['channelId'] = var6;
                var6 = _closure2_slot1;
                var2['messageId'] = var6;
                var5 = _closure2_slot3;
                var2['context'] = var5;
                var2 = var3.bind(var4)(var2);
                return var1;
            };
            var2 = var7.bind(var5)(var2, var3);
            var3 = var5.useMemo;
            var2 = new Array(1);
            var2[0] = var6;
            var1 = function() {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
                    var1 = _closure2_slot4;
                    var6 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var2 = 12;
                    var3 = var7[var2];
                    var5 = undefined;
                    var3 = var6.bind(var5)(var3);
                    var4 = var3.intl;
                    var3 = var4.string;
                    var2 = var7[var2];
                    var2 = var6.bind(var5)(var2);
                    var2 = var2.t;
                    if(var1) { _fun0006_ip = 74; continue _fun0006 }
 59:
                    var1 = var2.gg5Dp6;
                    var1 = var3.bind(var4)(var1);
                    _fun0006_ip = 87; continue _fun0006;
 74:
                    var2 = var2.z4du/P;
                    var1 = var3.bind(var4)(var2);
 87:
                    return var1;
                }
            };
            var15 = var3.bind(var5)(var1, var2);
            var3 = _closure1_slot7;
            var1 = 16;
            var1 = var17[var1];
            var1 = var14.bind(var4)(var1);
            var2 = var1.BottomSheet;
            var1 = {};
            var5 = true;
            var1['startExpanded'] = var5;
            var7 = _closure1_slot8;
            var6 = _closure1_slot4;
            var5 = {};
            var9 = _closure1_slot6;
            var8 = {};
            var10 = var13.content;
            var8['style'] = var10;
            var10 = var13.contentContainer;
            var8['contentContainerStyle'] = var10;
            var11 = 17;
            var10 = var17[var11];
            var10 = var14.bind(var4)(var10);
            var22 = var10.Text;
            var10 = {};
            var21 = var13.heading;
            var10['style'] = var21;
            var21 = 'heading-lg/bold';
            var10['variant'] = var21;
            var21 = 12;
            var24 = var17[var21];
            var24 = var14.bind(var4)(var24);
            var26 = var24.intl;
            var25 = var26.string;
            var24 = var17[var21];
            var24 = var14.bind(var4)(var24);
            var24 = var24.t;
            var24 = var24.TPpVkJ;
            var24 = var25.bind(var26)(var24);
            var10['children'] = var24;
            var22 = var3.bind(var4)(var22, var10);
            var10 = new Array(4);
            var10[0] = var22;
            var11 = var17[var11];
            var11 = var14.bind(var4)(var11);
            var14 = var11.Text;
            var11 = {};
            var17 = 'text-sm/normal';
            var11['variant'] = var17;
            var11['children'] = var15;
            var11 = var3.bind(var4)(var14, var11);
            var10[1] = var11;
            var11 = null;
            var14 = var11 != var23;
            if(!var14) { _fun0004_ip = 484; continue _fun0004 }
 463:
            var22 = _closure1_slot7;
            var17 = _closure1_slot10;
            var15 = {};
            var15['attachment'] = var23;
            var14 = var22.bind(var4)(var17, var15);
 484:
            var10[2] = var14;
            var11 = var11 != var20;
            if(!var11) { _fun0004_ip = 516; continue _fun0004 }
 495:
            var17 = _closure1_slot7;
            var15 = _closure1_slot9;
            var14 = {};
            var14['embed'] = var20;
            var11 = var17.bind(var4)(var15, var14);
 516:
            var10[3] = var11;
            var8['children'] = var10;
            var9 = var7.bind(var4)(var9, var8);
            var8 = new Array(2);
            var8[0] = var9;
            var11 = _closure1_slot8;
            var10 = _closure1_slot4;
            var9 = {};
            var13 = var13.footer;
            var9['style'] = var13;
            var15 = _closure1_slot7;
            var20 = _closure1_slot0;
            var17 = _closure1_slot2;
            var13 = 18;
            var12 = var17[var13];
            var12 = var20.bind(var4)(var12);
            var14 = var12.Button;
            var12 = {'variant': 'primary', 'size': 'md'};
            var12['disabled'] = var19;
            var12['loading'] = var19;
            var19 = var17[var21];
            var19 = var20.bind(var4)(var19);
            var23 = var19.intl;
            var22 = var23.string;
            var19 = var17[var21];
            var19 = var20.bind(var4)(var19);
            var19 = var19.t;
            var19 = var19.cY+Ooa;
            var19 = var22.bind(var23)(var19);
            var12['text'] = var19;
            var12['onPress'] = var18;
            var14 = var15.bind(var4)(var14, var12);
            var12 = new Array(2);
            var12[0] = var14;
            var13 = var17[var13];
            var13 = var20.bind(var4)(var13);
            var14 = var13.Button;
            var13 = {'variant': 'secondary', 'size': 'md'};
            var18 = var17[var21];
            var18 = var20.bind(var4)(var18);
            var19 = var18.intl;
            var18 = var19.string;
            var17 = var17[var21];
            var17 = var20.bind(var4)(var17);
            var17 = var17.t;
            var17 = var17.ETE/oK;
            var17 = var18.bind(var19)(var17);
            var13['text'] = var17;
            var13['onPress'] = var16;
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
    var3['ExplicitMediaFalsePositiveActionSheet'] = var2;
    return var1;
})();