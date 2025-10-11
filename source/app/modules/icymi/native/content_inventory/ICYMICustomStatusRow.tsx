// app/modules/icymi/native/content_inventory/ICYMICustomStatusRow.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
    var1 = function UploadPlaceholder() {
        var12 = _closure1_slot0;
        var13 = _closure1_slot2;
        var1 = 9;
        var1 = var13[var1];
        var4 = undefined;
        var3 = var12.bind(var4)(var1);
        var2 = var3.useDestinationICYMIExperiment;
        var1 = {};
        var5 = 'ICYMICustomStatusRow';
        var1['location'] = var5;
        var1 = var2.bind(var3)(var1);
        var3 = var1.isNewCardDesign;
        var2 = _closure1_slot13;
        var1 = false;
        var5 = var2.bind(var4)(var3, var1);
        var3 = _closure1_slot9;
        var2 = _closure1_slot5;
        var1 = {};
        var5 = var5.uploadContainer;
        var1['style'] = var5;
        var8 = _closure1_slot8;
        var11 = _closure1_slot1;
        var9 = 10;
        var5 = var13[var9];
        var7 = var11.bind(var4)(var5);
        var5 = {};
        var10 = 11;
        var10 = var13[var10];
        var10 = var11.bind(var4)(var10);
        var5['source'] = var10;
        var9 = var13[var9];
        var9 = var12.bind(var4)(var9);
        var9 = var9.IconSizes;
        var9 = var9.SMALL;
        var5['size'] = var9;
        var7 = var8.bind(var4)(var7, var5);
        var5 = new Array(2);
        var5[0] = var7;
        var8 = _closure1_slot8;
        var6 = 12;
        var6 = var13[var6];
        var6 = var12.bind(var4)(var6);
        var7 = var6.Text;
        var6 = {'variant': 'text-md/normal', 'color': 'text-primary'};
        var9 = 13;
        var10 = var13[var9];
        var10 = var12.bind(var4)(var10);
        var11 = var10.intl;
        var10 = var11.string;
        var9 = var13[var9];
        var9 = var12.bind(var4)(var9);
        var9 = var9.t;
        var9 = var9.3UB9aW;
        var9 = var10.bind(var11)(var9);
        var6['children'] = var9;
        var6 = var8.bind(var4)(var7, var6);
        var5[1] = var6;
        var1['children'] = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var _closure1_slot14 = var1;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var4);
    var1 = 0;
    var4 = var6[var1];
    var1 = undefined;
    var4 = var7.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 1;
    var8 = var6[var4];
    var4 = metroImportAll;
    var4 = var4.bind(var1)(var8);
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.View;
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot6 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot7 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var8 = var4.jsx;
    var _closure1_slot8 = var8;
    var8 = var4.jsxs;
    var _closure1_slot9 = var8;
    var4 = var4.Fragment;
    var _closure1_slot10 = var4;
    var4 = 6;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var4 = var4.spacing;
    var4 = var4.PX_8;
    var _closure1_slot11 = var4;
    var4 = 7;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = function(arg1) {
        var1 = {};
        var2 = {};
        var3 = arg1;
        var2['backgroundColor'] = var3;
        var3 = 'hidden';
        var2['overflow'] = var3;
        var1['background'] = var2;
        return var1;
    };
    var4 = var7.bind(var8)(var4);
    var _closure1_slot12 = var4;
    var4 = 8;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createICYMIStyles;
    var4 = function(arg1, arg2, arg3) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var9 = arg1;
            var12 = arg3;
            var1 = {};
            var2 = {};
            var3 = 'absolute';
            var2['position'] = var3;
            var7 = _closure1_slot1;
            var4 = _closure1_slot2;
            var6 = 6;
            var4 = var4[var6];
            var5 = undefined;
            var4 = var7.bind(var5)(var4);
            var7 = var4.spacing;
            if(var12) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var4 = var7.PX_40;
            _fun0001_ip = 4; continue _fun0001;
case 2:
            var4 = var7.PX_56;
case 4:
            var2['top'] = var4;
            var1['bubbles'] = var2;
            var2 = {'marginLeft': 32, 'borderRadius': null, 'height': 12, 'width': 12, 'overflow': 'hidden'};
            var10 = _closure1_slot1;
            var8 = _closure1_slot2;
            var4 = var8[var6];
            var4 = var10.bind(var5)(var4);
            var4 = var4.radii;
            var4 = var4.round;
            var2['borderRadius'] = var4;
            var4 = 'hidden';
            var1['middleBubble'] = var2;
            var2 = {'marginLeft': 44, 'marginTop': 4294967292, 'borderRadius': null, 'height': 32, 'width': 32, 'overflow': 'hidden'};
            var7 = var8[var6];
            var7 = var10.bind(var5)(var7);
            var7 = var7.radii;
            var7 = var7.round;
            var2['borderRadius'] = var7;
            var1['bottomBubble'] = var2;
            var2 = {'display': 'flex', 'flexDirection': 'row', 'alignItems': 'center'};
            var7 = 'row';
            var8 = var8[var6];
            var8 = var10.bind(var5)(var8);
            var8 = var8.spacing;
            var8 = var8.PX_8;
            var2['gap'] = var8;
            var1['title'] = var2;
            var2 = {'display': 'flex', 'flexDirection': 'row', 'alignItems': 'center', 'gap': 6};
            var1['timestamp'] = var2;
            var2 = {};
            var8 = 'relative';
            var2['position'] = var8;
            var10 = arg2;
            var8 = 0;
            if(var10) { _fun0001_ip = 5; continue _fun0001 }
case 6:
            var8 = var9.inset;
case 5:
            var2['marginLeft'] = var8;
            var1['cardContainer'] = var2;
            var2 = {'gap': null, 'alignItems': 'center', 'justifyContent': 'center', 'padding': null, 'borderRadius': null, 'width': '100%', 'zIndex': 1};
            var8 = var9.margin;
            var2['gap'] = var8;
            var8 = var9.margin;
            var2['padding'] = var8;
            var10 = _closure1_slot1;
            var8 = _closure1_slot2;
            var8 = var8[var6];
            var8 = var10.bind(var5)(var8);
            var8 = var8.radii;
            var8 = var8.lg;
            var2['borderRadius'] = var8;
            var8 = 1;
            var10 = 17;
            if(!var12) { _fun0001_ip = 7; continue _fun0001 }
case 8:
            var10 = 0;
case 7:
            var2['marginBottom'] = var10;
            var2['overflow'] = var4;
            var1['card'] = var2;
            var2 = {};
            var11 = var9.margin;
            var4 = _closure1_slot1;
            var3 = _closure1_slot2;
            var10 = var3[var6];
            var10 = var4.bind(var5)(var10);
            var10 = var10.spacing;
            var10 = var10.PX_12;
            var10 = var11 + var10;
            var2['paddingVertical'] = var10;
            var1['textOnly'] = var2;
            var2 = {'flexDirection': 'row', 'alignItems': 'center', 'justifyContent': 'center'};
            var10 = var9.margin;
            var2['gap'] = var10;
            var1['emojiTextContainer'] = var2;
            var2 = {};
            var2['flexShrink'] = var8;
            var1['emojiText'] = var2;
            var2 = {};
            var10 = 'flex-start';
            var2['justifyContent'] = var10;
            var1['leftAlign'] = var2;
            var2 = {'marginHorizontal': null, 'marginBottom': null, 'alignItems': 'center', 'justifyContent': 'center', 'minHeight': null, 'width': '100%', 'borderStyle': 'dashed'};
            var10 = var9.margin;
            var2['marginHorizontal'] = var10;
            var9 = var9.margin;
            var2['marginBottom'] = var9;
            var9 = var3[var6];
            var9 = var4.bind(var5)(var9);
            var9 = var9.spacing;
            var9 = var9.PX_48;
            var2['minHeight'] = var9;
            var9 = var3[var6];
            var9 = var4.bind(var5)(var9);
            var9 = var9.colors;
            var9 = var9.BORDER_STRONG;
            var2['borderColor'] = var9;
            var2['borderWidth'] = var8;
            var8 = var3[var6];
            var8 = var4.bind(var5)(var8);
            var8 = var8.radii;
            var8 = var8.lg;
            var2['borderRadius'] = var8;
            var8 = var3[var6];
            var8 = var4.bind(var5)(var8);
            var8 = var8.spacing;
            var8 = var8.PX_4;
            var2['gap'] = var8;
            var2['flexDirection'] = var7;
            var1['uploadContainer'] = var2;
            var2 = {'alignItems': 'center', 'justifyContent': 'center', 'borderRadius': null, 'height': 28, 'width': 40};
            var3 = var3[var6];
            var3 = var4.bind(var5)(var3);
            var3 = var3.radii;
            var3 = var3.md;
            var2['borderRadius'] = var3;
            var1['buttonIcon'] = var2;
            return var1;
        }
    };
    var4 = var7.bind(var8)(var4);
    var _closure1_slot13 = var4;
    var4 = 32;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/icymi/native/content_inventory/ICYMICustomStatusRow.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function GravityCustomStatusEntryRow(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var1 = arg1;
            var40 = var1.id;
            var _closure2_slot0 = var40;
            var7 = var1.userId;
            var _closure2_slot1 = var7;
            var29 = var1.customStatusExtra;
            var15 = var1.renderForScreenshot;
            var _closure2_slot2 = var15;
            var22 = var1.variant;
            var _closure2_slot3 = var22;
            var5 = undefined;
            var _closure2_slot6 = var5;
            var _closure2_slot7 = var5;
            var _closure2_slot8 = var5;
            var2 = _closure1_slot0;
            var3 = _closure1_slot2;
            var1 = 9;
            var1 = var3[var1];
            var6 = var2.bind(var5)(var1);
            var4 = var6.useDestinationICYMIExperiment;
            var1 = {};
            var8 = 'ICYMICustomStatusRow';
            var1['location'] = var8;
            var1 = var4.bind(var6)(var1);
            var11 = var1.isNewCardDesign;
            var _closure2_slot4 = var11;
            var1 = _closure1_slot13;
            var30 = var1.bind(var5)(var11, var15);
            var _closure2_slot5 = var30;
            var35 = 14;
            var1 = var3[var35];
            var4 = var2.bind(var5)(var1);
            var1 = var4.useGradientBottom;
            var6 = var1.bind(var4)();
            var1 = 15;
            var1 = var3[var1];
            var2 = var2.bind(var5)(var1);
            var1 = var2.useConversationBackgroundColors;
            var1 = var1.bind(var2)();
            var2 = var1.primaryBackground;
            var1 = _closure1_slot12;
            if(var11) { _fun0002_ip = 9; continue _fun0002 }
case 10:
            var4 = null;
            var8 = var4 == var6;
            var3 = undefined;
            if(var8) { _fun0002_ip = 11; continue _fun0002 }
case 12:
            var3 = var6.backgroundColor;
case 11:
            if(!(var4 == var3)) { _fun0002_ip = 13; continue _fun0002 }
case 14:
            var6 = _closure1_slot1;
            var8 = _closure1_slot2;
            var4 = 6;
            var4 = var8[var4];
            var4 = var6.bind(var5)(var4);
            var4 = var4.colors;
            var3 = var4.BG_SURFACE_OVERLAY_TMP;
case 13:
            var2 = var3;
case 9:
            var21 = var1.bind(var5)(var2);
            _closure2_slot6 = var21;
            var2 = _closure1_slot0;
            var1 = _closure1_slot2;
            var3 = 16;
            var3 = var1[var3];
            var8 = var2.bind(var5)(var3);
            var6 = var8.hexWithOpacity;
            var3 = var21.background;
            var4 = var3.backgroundColor;
            var3 = 0.6;
            var18 = var6.bind(var8)(var4, var3);
            _closure2_slot7 = var18;
            var6 = 17;
            var1 = var1[var6];
            var4 = var2.bind(var5)(var1);
            var3 = var4.useStateFromStores;
            var1 = _closure1_slot6;
            var2 = new Array(1);
            var2[0] = var1;
            var1 = function() {
                var3 = _closure1_slot6;
                var2 = var3.getUser;
                var1 = _closure2_slot1;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var2 = var3.bind(var4)(var2, var1);
            var9 = {};
            var4 = var29.emoji_id;
            var1 = null;
            var3 = var1 == var4;
            var8 = undefined;
            if(var3) { _fun0002_ip = 15; continue _fun0002 }
case 16:
            var3 = var4.toString;
            var8 = var3.bind(var4)();
case 15:
            var4 = '0';
            var3 = null;
            if(!(var4 !== var8)) { _fun0002_ip = 17; continue _fun0002 }
case 18:
            var3 = var29.emoji_id;
case 17:
            var9['id'] = var3;
            var4 = var29.emoji_name;
            var8 = var1 != var4;
            var3 = '';
            if(!var8) { _fun0002_ip = 19; continue _fun0002 }
case 20:
            var3 = var4;
case 19:
            var9['name'] = var3;
            var3 = var29.emoji_animated;
            var9['animated'] = var3;
            var3 = var29.status;
            var24 = var1 != var3;
            if(!var24) { _fun0002_ip = 21; continue _fun0002 }
case 22:
            var3 = var29.status;
            var4 = var3.length;
            var3 = 0;
            var24 = var4 > var3;
case 21:
            var3 = var9.id;
            if(!(var1 == var3)) { _fun0002_ip = 23; continue _fun0002 }
case 24:
            var3 = var9.name;
            var4 = var3.length;
            var3 = 0;
            var26 = null;
            if(!(var3 !== var4)) { _fun0002_ip = 25; continue _fun0002 }
case 23:
            var8 = _closure1_slot8;
            var4 = _closure1_slot1;
            var10 = _closure1_slot2;
            var3 = 18;
            var3 = var10[var3];
            var4 = var4.bind(var5)(var3);
            var3 = {};
            var12 = {};
            var13 = _closure1_slot0;
            var16 = 19;
            var10 = var10[var16];
            var13 = var13.bind(var5)(var10);
            var10 = var13.isAndroid;
            var14 = var10.bind(var13)();
            var10 = 40;
            var13 = var10;
            if(!var14) { _fun0002_ip = 26; continue _fun0002 }
case 27:
            var13 = 36;
case 26:
            var12['lineHeight'] = var13;
            var13 = 36;
            var12['fontSize'] = var13;
            var14 = _closure1_slot0;
            var13 = _closure1_slot2;
            var13 = var13[var16];
            var14 = var14.bind(var5)(var13);
            var13 = var14.isAndroid;
            var14 = var13.bind(var14)();
            var13 = 4;
            if(!var14) { _fun0002_ip = 28; continue _fun0002 }
case 29:
            var13 = 0;
case 28:
            var12['marginTop'] = var13;
            var3['style'] = var12;
            var3['size'] = var10;
            var12 = var9.animated;
            var10 = var1 != var12;
            if(!var10) { _fun0002_ip = 30; continue _fun0002 }
case 31:
            var10 = var12;
case 30:
            var3['animate'] = var10;
            var3['emoji'] = var9;
            var26 = var8.bind(var5)(var4, var3);
case 25:
            var4 = _closure1_slot0;
            var3 = _closure1_slot2;
            var8 = var3[var6];
            var12 = var4.bind(var5)(var8);
            var10 = var12.useStateFromStores;
            var8 = _closure1_slot6;
            var9 = new Array(1);
            var9[0] = var8;
            var8 = function() {
                var3 = _closure1_slot6;
                var2 = var3.getUser;
                var1 = _closure2_slot1;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var28 = var10.bind(var12)(var9, var8);
            var9 = _closure1_slot4;
            var12 = var9.useState;
            var8 = 0;
            var10 = {'width': 0, 'height': 0};
            var13 = var12.bind(var9)(var10);
            var12 = _closure1_slot3;
            var10 = 2;
            var10 = var12.bind(var5)(var13, var10);
            var34 = var10[var8];
            var8 = 1;
            var8 = var10[var8];
            _closure2_slot8 = var8;
            var12 = var9.useMemo;
            var10 = new Array(1);
            var10[0] = var22;
            var8 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var1 = _closure2_slot3;
                    var2 = var1.kind;
                    var1 = 'ownStatus';
                    if(!(var1 !== var2)) { _fun0003_ip = 32; continue _fun0003 }
case 33:
                    var1 = {};
                    var2 = true;
                    var1['hasStatus'] = var2;
                    _fun0003_ip = 34; continue _fun0003;
case 32:
                    var2 = {};
                    var3 = _closure2_slot3;
                    var3 = var3.hasStatus;
                    var2['hasStatus'] = var3;
                    var1 = var2;
case 34:
                    return var1;
                }
            };
            var8 = var12.bind(var9)(var8, var10);
            var19 = var8.hasStatus;
            var3 = var3[var6];
            var10 = var4.bind(var5)(var3);
            var8 = var10.useStateFromStores;
            var3 = _closure1_slot7;
            var6 = new Array(1);
            var6[0] = var3;
            var4 = new Array(1);
            var4[0] = var40;
            var3 = function() {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                    var2 = _closure1_slot7;
                    var1 = var2.notificationItem;
                    var2 = var1.bind(var2)();
                    var1 = null;
                    var1 = var1 != var2;
                    if(!var1) { _fun0004_ip = 35; continue _fun0004 }
case 36:
                    var3 = var2.id;
                    var2 = _closure2_slot0;
                    var1 = var3 === var2;
case 35:
                    return var1;
                }
            };
            var6 = var8.bind(var10)(var6, var3, var4);
            var8 = var9.useMemo;
            var3 = var21.background;
            var4 = new Array(8);
            var4[0] = var3;
            var4[1] = var18;
            var4[2] = var15;
            var3 = var30.buttonIcon;
            var4[3] = var3;
            var4[4] = var11;
            var3 = var22.handlePressPrimary;
            var4[5] = var3;
            var3 = var22.handlePressSecondary;
            var4[6] = var3;
            var3 = var22.kind;
            var4[7] = var3;
            var3 = function() {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                    var2 = _closure2_slot2;
                    var1 = null;
                    if(var2) { _fun0005_ip = 37; continue _fun0005 }
case 38:
                    var2 = _closure2_slot3;
                    var3 = var2.kind;
                    var2 = 'ownStatus';
                    if(!(var2 !== var3)) { _fun0005_ip = 39; continue _fun0005 }
case 40:
                    var5 = _closure1_slot9;
                    var4 = _closure1_slot10;
                    var3 = {};
                    var9 = _closure1_slot8;
                    var11 = _closure1_slot0;
                    var15 = _closure1_slot2;
                    var7 = 20;
                    var6 = var15[var7];
                    var2 = undefined;
                    var6 = var11.bind(var2)(var6);
                    var8 = var6.PressableHighlight;
                    var6 = {};
                    var16 = _closure2_slot3;
                    var12 = var16.handlePressPrimary;
                    var6['onPress'] = var12;
                    var12 = _closure2_slot7;
                    var6['underlayColor'] = var12;
                    var12 = _closure2_slot5;
                    var17 = var12.buttonIcon;
                    var14 = new Array(3);
                    var14[0] = var17;
                    var17 = _closure2_slot6;
                    var17 = var17.background;
                    var14[1] = var17;
                    var20 = {'position': 'absolute', 'right': null, 'bottom': 3};
                    var19 = _closure1_slot1;
                    var17 = 6;
                    var18 = var15[var17];
                    var18 = var19.bind(var2)(var18);
                    var18 = var18.spacing;
                    var18 = var18.PX_16;
                    var20['right'] = var18;
                    var18 = 3;
                    var14[2] = var20;
                    var6['style'] = var14;
                    var22 = _closure1_slot8;
                    var14 = 23;
                    var14 = var15[var14];
                    var14 = var11.bind(var2)(var14);
                    var21 = var14.ArrowAngleLeftUpIcon;
                    var20 = {};
                    var14 = 'xs';
                    var20['size'] = var14;
                    var20 = var22.bind(var2)(var21, var20);
                    var6['children'] = var20;
                    var8 = var9.bind(var2)(var8, var6);
                    var6 = new Array(2);
                    var6[0] = var8;
                    var9 = _closure1_slot8;
                    var7 = var15[var7];
                    var7 = var11.bind(var2)(var7);
                    var8 = var7.PressableHighlight;
                    var7 = {};
                    var16 = var16.handlePressSecondary;
                    var7['onPress'] = var16;
                    var16 = _closure2_slot7;
                    var7['underlayColor'] = var16;
                    var16 = var12.buttonIcon;
                    var12 = new Array(3);
                    var12[0] = var16;
                    var16 = _closure2_slot6;
                    var16 = var16.background;
                    var12[1] = var16;
                    var16 = {'position': 'absolute', 'right': null, 'bottom': 3};
                    var17 = var15[var17];
                    var17 = var19.bind(var2)(var17);
                    var17 = var17.spacing;
                    var17 = var17.PX_16;
                    var18 = var17 + var18;
                    var17 = _closure1_slot11;
                    var18 = var18 + var17;
                    var17 = 40;
                    var17 = var18 + var17;
                    var16['right'] = var17;
                    var12[2] = var16;
                    var7['style'] = var12;
                    var12 = _closure1_slot8;
                    var10 = 24;
                    var10 = var15[var10];
                    var10 = var11.bind(var2)(var10);
                    var11 = var10.ReactionIcon;
                    var10 = {};
                    var10['size'] = var14;
                    var10 = var12.bind(var2)(var11, var10);
                    var7['children'] = var10;
                    var7 = var9.bind(var2)(var8, var7);
                    var6[1] = var7;
                    var3['children'] = var6;
                    var2 = var5.bind(var2)(var4, var3);
                    _fun0005_ip = 41; continue _fun0005;
case 39:
                    var6 = _closure1_slot9;
                    var5 = _closure1_slot10;
                    var4 = {};
                    var15 = _closure1_slot8;
                    var8 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var12 = 20;
                    var7 = var3[var12];
                    var3 = undefined;
                    var7 = var8.bind(var3)(var7);
                    var10 = var7.PressableHighlight;
                    var7 = {};
                    var8 = _closure2_slot3;
                    var8 = var8.handlePressSecondary;
                    var7['onPress'] = var8;
                    var8 = _closure2_slot7;
                    var7['underlayColor'] = var8;
                    var8 = _closure2_slot5;
                    var9 = var8.buttonIcon;
                    var8 = new Array(3);
                    var8[0] = var9;
                    var9 = _closure2_slot6;
                    var9 = var9.background;
                    var8[1] = var9;
                    var9 = _closure2_slot4;
                    var9 = !var9;
                    if(!var9) { _fun0005_ip = 42; continue _fun0005 }
case 43:
                    var14 = {'position': 'absolute', 'right': null, 'bottom': 3};
                    var17 = _closure1_slot1;
                    var18 = _closure1_slot2;
                    var16 = 6;
                    var16 = var18[var16];
                    var16 = var17.bind(var3)(var16);
                    var16 = var16.spacing;
                    var16 = var16.PX_16;
                    var14['right'] = var16;
                    var9 = var14;
case 42:
                    var8[2] = var9;
                    var7['style'] = var8;
                    var18 = _closure1_slot8;
                    var9 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    var14 = 21;
                    var14 = var8[var14];
                    var14 = var9.bind(var3)(var14);
                    var17 = var14.TrashIcon;
                    var16 = {};
                    var14 = 'xs';
                    var16['size'] = var14;
                    var16 = var18.bind(var3)(var17, var16);
                    var7['children'] = var16;
                    var10 = var15.bind(var3)(var10, var7);
                    var7 = new Array(2);
                    var7[0] = var10;
                    var10 = _closure1_slot8;
                    var8 = var8[var12];
                    var8 = var9.bind(var3)(var8);
                    var9 = var8.PressableHighlight;
                    var8 = {};
                    var12 = _closure2_slot3;
                    var12 = var12.handlePressPrimary;
                    var8['onPress'] = var12;
                    var12 = _closure2_slot7;
                    var8['underlayColor'] = var12;
                    var12 = _closure2_slot5;
                    var15 = var12.buttonIcon;
                    var12 = new Array(3);
                    var12[0] = var15;
                    var15 = _closure2_slot6;
                    var15 = var15.background;
                    var12[1] = var15;
                    var13 = _closure2_slot4;
                    var13 = !var13;
                    if(!var13) { _fun0005_ip = 44; continue _fun0005 }
case 45:
                    var15 = {'position': 'absolute', 'right': null, 'bottom': 3};
                    var17 = _closure1_slot1;
                    var18 = _closure1_slot2;
                    var16 = 6;
                    var16 = var18[var16];
                    var16 = var17.bind(var3)(var16);
                    var16 = var16.spacing;
                    var17 = var16.PX_16;
                    var16 = 3;
                    var17 = var17 + var16;
                    var16 = _closure1_slot11;
                    var17 = var17 + var16;
                    var16 = 40;
                    var16 = var17 + var16;
                    var15['right'] = var16;
                    var13 = var15;
case 44:
                    var12[2] = var13;
                    var8['style'] = var12;
                    var13 = _closure1_slot8;
                    var12 = _closure1_slot0;
                    var15 = _closure1_slot2;
                    var11 = 22;
                    var11 = var15[var11];
                    var11 = var12.bind(var3)(var11);
                    var12 = var11.PencilIcon;
                    var11 = {};
                    var11['size'] = var14;
                    var11 = var13.bind(var3)(var12, var11);
                    var8['children'] = var11;
                    var8 = var10.bind(var3)(var9, var8);
                    var7[1] = var8;
                    var4['children'] = var7;
                    var2 = var6.bind(var3)(var5, var4);
case 41:
                    var1 = var2;
case 37:
                    return var1;
                }
            };
            var12 = var8.bind(var9)(var3, var4);
            if(!(var1 != var2)) { _fun0002_ip = 46; continue _fun0002 }
case 47:
            var2 = var22.kind;
            var9 = 'otherUserStatus';
            var31 = var9 === var2;
            if(!var31) { _fun0002_ip = 48; continue _fun0002 }
case 49:
            var4 = _closure1_slot1;
            var8 = _closure1_slot2;
            var2 = 25;
            var2 = var8[var2];
            var3 = var4.bind(var5)(var2);
            var2 = var3.age;
            var3 = var2.bind(var3)(var40);
            var2 = 26;
            var2 = var8[var2];
            var2 = var4.bind(var5)(var2);
            var2 = var2.Millis;
            var4 = var2.MINUTE;
            var2 = 30;
            var2 = var2 * var4;
            var31 = var3 < var2;
case 48:
            var4 = _closure1_slot9;
            var27 = _closure1_slot1;
            var32 = _closure1_slot2;
            var2 = 27;
            var2 = var32[var2];
            var3 = var27.bind(var5)(var2);
            var2 = {};
            var2['contentId'] = var40;
            var2['userId'] = var7;
            var7 = 'hotwheels_custom_status';
            var2['type'] = var7;
            var2['renderForScreenshot'] = var15;
            var10 = _closure1_slot9;
            var8 = _closure1_slot5;
            var7 = {};
            var13 = var30.title;
            var7['style'] = var13;
            var16 = _closure1_slot8;
            var14 = _closure1_slot0;
            var25 = 12;
            var13 = var32[var25];
            var13 = var14.bind(var5)(var13);
            var14 = var13.Text;
            var13 = {'variant': 'text-md/semibold', 'color': 'header-primary'};
            var17 = 28;
            var17 = var32[var17];
            var27 = var27.bind(var5)(var17);
            var17 = var27.getName;
            var17 = var17.bind(var27)(var28);
            var13['children'] = var17;
            var14 = var16.bind(var5)(var14, var13);
            var13 = new Array(2);
            var13[0] = var14;
            var17 = _closure1_slot9;
            var16 = _closure1_slot5;
            var14 = {};
            var27 = var30.timestamp;
            var14['style'] = var27;
            var28 = var19;
            if(!var28) { _fun0002_ip = 50; continue _fun0002 }
case 51:
            var33 = _closure1_slot8;
            var37 = _closure1_slot0;
            var41 = _closure1_slot2;
            var27 = var41[var25];
            var27 = var37.bind(var5)(var27);
            var32 = var27.Text;
            var27 = {'lineClamp': 1, 'variant': 'text-sm/normal', 'color': 'header-muted'};
            var36 = 29;
            var36 = var41[var36];
            var38 = var37.bind(var5)(var36);
            var37 = var38.getRelativeTimestamp;
            var39 = _closure1_slot1;
            var36 = 25;
            var36 = var41[var36];
            var39 = var39.bind(var5)(var36);
            var36 = var39.extractTimestamp;
            var36 = var36.bind(var39)(var40);
            var36 = var37.bind(var38)(var36);
            var27['children'] = var36;
            var28 = var33.bind(var5)(var32, var27);
case 50:
            var27 = new Array(3);
            var27[0] = var28;
            var28 = null;
            if(!var31) { _fun0002_ip = 52; continue _fun0002 }
case 53:
            var36 = _closure1_slot8;
            var33 = _closure1_slot1;
            var37 = _closure1_slot2;
            var32 = 30;
            var32 = var37[var32];
            var33 = var33.bind(var5)(var32);
            var32 = {};
            var28 = var36.bind(var5)(var33, var32);
case 52:
            var27[1] = var28;
            var28 = null;
            if(!var31) { _fun0002_ip = 54; continue _fun0002 }
case 55:
            var33 = _closure1_slot8;
            var39 = _closure1_slot0;
            var40 = _closure1_slot2;
            var31 = var40[var25];
            var31 = var39.bind(var5)(var31);
            var32 = var31.Text;
            var31 = {'lineClamp': 1, 'variant': 'text-sm/medium', 'color': 'text-brand'};
            var36 = 13;
            var37 = var40[var36];
            var37 = var39.bind(var5)(var37);
            var38 = var37.intl;
            var37 = var38.string;
            var36 = var40[var36];
            var36 = var39.bind(var5)(var36);
            var36 = var36.t;
            var36 = var36.tWnHcH;
            var36 = var37.bind(var38)(var36);
            var31['children'] = var36;
            var28 = var33.bind(var5)(var32, var31);
case 54:
            var27[2] = var28;
            var14['children'] = var27;
            var14 = var17.bind(var5)(var16, var14);
            var13[1] = var14;
            var7['children'] = var13;
            var7 = var10.bind(var5)(var8, var7);
            var2['title'] = var7;
            var8 = var22.kind;
            var7 = null;
            if(!(var9 === var8)) { _fun0002_ip = 56; continue _fun0002 }
case 57:
            var10 = _closure1_slot8;
            var17 = _closure1_slot0;
            var27 = _closure1_slot2;
            var8 = var27[var25];
            var8 = var17.bind(var5)(var8);
            var9 = var8.Text;
            var8 = {'variant': 'text-sm/normal', 'lineClamp': 1, 'color': 'header-secondary'};
            var13 = 13;
            var14 = var27[var13];
            var14 = var17.bind(var5)(var14);
            var16 = var14.intl;
            var14 = var16.string;
            var13 = var27[var13];
            var13 = var17.bind(var5)(var13);
            var13 = var13.t;
            var13 = var13.fxOLPT;
            var13 = var14.bind(var16)(var13);
            var8['children'] = var13;
            var7 = var10.bind(var5)(var9, var8);
case 56:
            var2['subtitle'] = var7;
            var2['highlight'] = var6;
            var8 = _closure1_slot9;
            var13 = _closure1_slot1;
            var10 = _closure1_slot2;
            var36 = 31;
            var6 = var10[var36];
            var7 = var13.bind(var5)(var6);
            var6 = {};
            var9 = new Array(0);
            var6['cutouts'] = var9;
            var9 = var30.bubbles;
            var6['style'] = var9;
            var16 = _closure1_slot8;
            var14 = _closure1_slot5;
            var9 = {};
            var27 = var30.middleBubble;
            var17 = new Array(2);
            var17[0] = var27;
            var27 = var21.background;
            var17[1] = var27;
            var9['style'] = var17;
            var14 = var16.bind(var5)(var14, var9);
            var9 = new Array(2);
            var9[0] = var14;
            var17 = _closure1_slot8;
            var16 = _closure1_slot5;
            var14 = {};
            var28 = var30.bottomBubble;
            var27 = new Array(2);
            var27[0] = var28;
            var28 = var21.background;
            var27[1] = var28;
            var14['style'] = var27;
            var14 = var17.bind(var5)(var16, var14);
            var9[1] = var14;
            var6['children'] = var9;
            var7 = var8.bind(var5)(var7, var6);
            var6 = new Array(2);
            var6[0] = var7;
            var9 = _closure1_slot9;
            var8 = _closure1_slot5;
            var7 = {};
            var14 = var30.cardContainer;
            var7['style'] = var14;
            var14 = _closure1_slot8;
            var10 = var10[var36];
            var13 = var13.bind(var5)(var10);
            var10 = {};
            if(var15) { _fun0002_ip = 58; continue _fun0002 }
case 59:
            if(var11) { _fun0002_ip = 58; continue _fun0002 }
case 60:
            var16 = {};
            var37 = _closure1_slot0;
            var31 = _closure1_slot2;
            var15 = var31[var36];
            var15 = var37.bind(var5)(var15);
            var15 = var15.CutoutShape;
            var15 = var15.RoundedRect;
            var16['shape'] = var15;
            var27 = var34.width;
            var28 = _closure1_slot1;
            var17 = 6;
            var15 = var31[var17];
            var15 = var28.bind(var5)(var15);
            var15 = var15.spacing;
            var15 = var15.PX_16;
            var27 = var27 - var15;
            var15 = 40;
            var15 = var27 - var15;
            var27 = 3;
            var15 = var15 - var27;
            var16['x'] = var15;
            var15 = var34.height;
            var15 = var15 - var35;
            var15 = var15 - var27;
            var16['y'] = var15;
            var33 = 46;
            var16['width'] = var33;
            var32 = 34;
            var16['height'] = var32;
            var15 = var31[var17];
            var15 = var28.bind(var5)(var15);
            var15 = var15.radii;
            var15 = var15.md;
            var15 = var15 + var27;
            var16['cornerRadius'] = var15;
            var15 = new Array(2);
            var15[0] = var16;
            var16 = {};
            var36 = var31[var36];
            var36 = var37.bind(var5)(var36);
            var36 = var36.CutoutShape;
            var36 = var36.RoundedRect;
            var16['shape'] = var36;
            var37 = var34.width;
            var36 = var31[var17];
            var36 = var28.bind(var5)(var36);
            var36 = var36.spacing;
            var36 = var36.PX_16;
            var37 = var37 - var36;
            var36 = 86;
            var37 = var37 - var36;
            var36 = _closure1_slot11;
            var36 = var37 - var36;
            var16['x'] = var36;
            var34 = var34.height;
            var34 = var34 - var35;
            var34 = var34 - var27;
            var16['y'] = var34;
            var16['width'] = var33;
            var16['height'] = var32;
            var17 = var31[var17];
            var17 = var28.bind(var5)(var17);
            var17 = var17.radii;
            var17 = var17.md;
            var17 = var17 + var27;
            var16['cornerRadius'] = var17;
            var15[1] = var16;
            _fun0002_ip = 61; continue _fun0002;
case 58:
            var15 = new Array(0);
case 61:
            var10['cutouts'] = var15;
            var17 = _closure1_slot9;
            var16 = _closure1_slot0;
            var27 = _closure1_slot2;
            var15 = 20;
            var15 = var27[var15];
            var15 = var16.bind(var5)(var15);
            var16 = var15.PressableHighlight;
            var15 = {};
            var23 = function onLayout(arg1) {
                var1 = arg1;
                var3 = _closure2_slot8;
                var2 = {};
                var4 = var1.nativeEvent;
                var4 = var4.layout;
                var4 = var4.width;
                var2['width'] = var4;
                var1 = var1.nativeEvent;
                var1 = var1.layout;
                var1 = var1.height;
                var2['height'] = var1;
                var1 = undefined;
                var2 = var3.bind(var1)(var2);
                return var1;
            };
            var15['onLayout'] = var23;
            var22 = var22.handlePressPrimary;
            var15['onPress'] = var22;
            var15['underlayColor'] = var18;
            var22 = var30.card;
            var18 = new Array(3);
            var18[0] = var22;
            var21 = var21.background;
            var18[1] = var21;
            var22 = var1 == var26;
            var21 = null;
            if(!var22) { _fun0002_ip = 62; continue _fun0002 }
case 63:
            var21 = var30.textOnly;
case 62:
            var18[2] = var21;
            var15['style'] = var18;
            var22 = _closure1_slot9;
            var21 = _closure1_slot5;
            var18 = {};
            var27 = var30.emojiTextContainer;
            var23 = new Array(1);
            var23[0] = var27;
            var18['style'] = var23;
            var23 = new Array(3);
            var23[0] = var26;
            if(!var24) { _fun0002_ip = 64; continue _fun0002 }
case 65:
            var28 = _closure1_slot8;
            var27 = _closure1_slot0;
            var26 = _closure1_slot2;
            var26 = var26[var25];
            var26 = var27.bind(var5)(var26);
            var27 = var26.Text;
            var26 = {};
            var30 = var30.emojiText;
            var26['style'] = var30;
            var30 = 'text-md/normal';
            var26['variant'] = var30;
            var29 = var29.status;
            var26['children'] = var29;
            var24 = var28.bind(var5)(var27, var26);
case 64:
            var23[1] = var24;
            var24 = !var19;
            if(!var24) { _fun0002_ip = 66; continue _fun0002 }
case 67:
            var27 = _closure1_slot8;
            var31 = _closure1_slot0;
            var32 = _closure1_slot2;
            var25 = var32[var25];
            var25 = var31.bind(var5)(var25);
            var26 = var25.Text;
            var25 = {};
            var28 = 'text-md/normal';
            var25['variant'] = var28;
            var28 = 13;
            var29 = var32[var28];
            var29 = var31.bind(var5)(var29);
            var30 = var29.intl;
            var29 = var30.string;
            var28 = var32[var28];
            var28 = var31.bind(var5)(var28);
            var28 = var28.t;
            var28 = var28.6ojWOz;
            var28 = var29.bind(var30)(var28);
            var25['children'] = var28;
            var24 = var27.bind(var5)(var26, var25);
case 66:
            var23[2] = var24;
            var18['children'] = var23;
            var21 = var22.bind(var5)(var21, var18);
            var18 = new Array(2);
            var18[0] = var21;
            var19 = !var19;
            if(!var19) { _fun0002_ip = 68; continue _fun0002 }
case 69:
            var22 = _closure1_slot8;
            var21 = _closure1_slot14;
            var20 = {};
            var19 = var22.bind(var5)(var21, var20);
case 68:
            var18[1] = var19;
            var15['children'] = var18;
            var15 = var17.bind(var5)(var16, var15);
            var10['children'] = var15;
            var13 = var14.bind(var5)(var13, var10);
            var10 = new Array(2);
            var10[0] = var13;
            var11 = !var11;
            if(!var11) { _fun0002_ip = 70; continue _fun0002 }
case 71:
            var11 = var12;
case 70:
            var10[1] = var11;
            var7['children'] = var10;
            var7 = var9.bind(var5)(var8, var7);
            var6[1] = var7;
            var2['children'] = var6;
            var2 = var4.bind(var5)(var3, var2);
            return var2;
case 46:
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();