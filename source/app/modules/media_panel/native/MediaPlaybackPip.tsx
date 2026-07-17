// app/modules/media_panel/native/MediaPlaybackPip.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var14 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var14;
    var _closure1_slot2 = var6;
    var1 = function convertMsToSecs(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var3 = arg1;
            var1 = null;
            var2 = var1 != var3;
            var1 = undefined;
            if(!var2) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var2 = 1000;
            var1 = var3 / var2;
case 2:
            return var1;
        }
    };
    var _closure1_slot19 = var1;
    var1 = function MediaInfo(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var1 = arg1;
            var2 = var1.message;
            var _closure2_slot0 = var2;
            var3 = var1.activeMediaPlayerSource;
            var8 = var1.isVoiceMessage;
            var7 = var1.isControlVisible;
            var1 = _closure1_slot17;
            var5 = undefined;
            var20 = var1.bind(var5)();
            var4 = _closure1_slot0;
            var9 = _closure1_slot2;
            var1 = 12;
            var1 = var9[var1];
            var12 = var4.bind(var5)(var1);
            var10 = var12.useToken;
            var13 = _closure1_slot1;
            var1 = 11;
            var1 = var9[var1];
            var1 = var13.bind(var5)(var1);
            var1 = var1.colors;
            var1 = var1.BACKGROUND_SURFACE_HIGH;
            var22 = var10.bind(var12)(var1);
            var1 = 13;
            var1 = var9[var1];
            var12 = var4.bind(var5)(var1);
            var10 = var12.useStateFromStores;
            var1 = _closure1_slot8;
            var9 = new Array(3);
            var9[0] = var1;
            var1 = _closure1_slot11;
            var9[1] = var1;
            var1 = _closure1_slot10;
            var9[2] = var1;
            var4 = new Array(1);
            var4[0] = var2;
            var1 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var6 = _closure1_slot8;
                    var4 = var6.getChannel;
                    var3 = _closure2_slot0;
                    var1 = null;
                    var8 = var1 == var3;
                    var5 = undefined;
                    var3 = undefined;
                    if(var8) { _fun0003_ip = 4; continue _fun0003 }
case 5:
                    var7 = _closure2_slot0;
                    var3 = var7.channel_id;
case 4:
                    var7 = var4.bind(var6)(var3);
                    var3 = var1 != var7;
                    var1 = null;
                    if(!var3) { _fun0003_ip = 6; continue _fun0003 }
case 7:
                    var4 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var3 = 14;
                    var3 = var6[var3];
                    var6 = var4.bind(var5)(var3);
                    var5 = var6.computeChannelName;
                    var12 = _closure1_slot11;
                    var11 = _closure1_slot10;
                    var14 = var6;
                    var13 = var7;
                    var10 = true;
                    var9 = true;
                    var1 = var14[var5](var13, var12, var11, var10, var9, var8);
case 6:
                    return var1;
                }
            };
            var14 = var10.bind(var12)(var9, var1, var4);
            var4 = _closure1_slot4;
            var1 = var4.useState;
            var10 = 0;
            var4 = var1.bind(var4)(var10);
            var1 = _closure1_slot3;
            var12 = 2;
            var4 = var1.bind(var5)(var4, var12);
            var1 = var4[var10];
            var _closure2_slot1 = var1;
            var17 = 1;
            var4 = var4[var17];
            var _closure2_slot2 = var4;
            var9 = _closure1_slot4;
            var4 = var9.useState;
            var9 = var4.bind(var9)(var10);
            var4 = _closure1_slot3;
            var4 = var4.bind(var5)(var9, var12);
            var13 = var4[var10];
            var _closure2_slot3 = var13;
            var4 = var4[var17];
            var _closure2_slot4 = var4;
            var12 = _closure1_slot4;
            var9 = var12.useMemo;
            var4 = new Array(2);
            var4[0] = var13;
            var4[1] = var1;
            var1 = function() {
                var2 = _closure2_slot3;
                var1 = _closure2_slot1;
                var1 = var2 >= var1;
                return var1;
            };
            var9 = var9.bind(var12)(var1, var4);
            var1 = null;
            var12 = var1 == var2;
            var4 = undefined;
            if(var12) { _fun0002_ip = 8; continue _fun0002 }
case 9:
            var12 = var2.getContentMessage;
            var4 = var12.bind(var2)();
case 8:
            if(!(var1 != var2)) { _fun0002_ip = 10; continue _fun0002 }
case 11:
            if(!(var1 != var4)) { _fun0002_ip = 10; continue _fun0002 }
case 12:
            if(!(var1 != var3)) { _fun0002_ip = 10; continue _fun0002 }
case 13:
            if(var8) { _fun0002_ip = 14; continue _fun0002 }
case 15:
            var8 = var4.attachments;
            var8 = var8.length;
            var10 = var8 > var10;
            var12 = '';
            var8 = var12;
            if(!var10) { _fun0002_ip = 16; continue _fun0002 }
case 17:
            var10 = var3.attachmentIndex;
            var10 = var1 != var10;
            var8 = var12;
            if(!var10) { _fun0002_ip = 16; continue _fun0002 }
case 18:
            var4 = var4.attachments;
            var3 = var3.attachmentIndex;
            var4 = var4[var3];
            var10 = _closure1_slot1;
            var12 = _closure1_slot2;
            var3 = 15;
            var3 = var12[var3];
            var3 = var10.bind(var5)(var3);
            var8 = var3.bind(var5)(var4);
            _fun0002_ip = 16; continue _fun0002;
case 14:
            var2 = var2.author;
            var8 = var2.username;
case 16:
            var4 = _closure1_slot15;
            var3 = _closure1_slot0;
            var2 = _closure1_slot2;
            var15 = 16;
            var2 = var2[var15];
            var2 = var3.bind(var5)(var2);
            var3 = var2.Text;
            var2 = {'variant': 'text-md/semibold', 'lineClamp': 1, 'ellipsizeMode': 'clip'};
            var10 = function onLayout(arg1) {
                var3 = _closure2_slot4;
                var1 = arg1;
                var1 = var1.nativeEvent;
                var1 = var1.layout;
                var2 = var1.width;
                var1 = undefined;
                var1 = var3.bind(var1)(var2);
                return var1;
            };
            var2['onLayout'] = var10;
            var2['children'] = var8;
            var19 = var4.bind(var5)(var3, var2);
            var4 = _closure1_slot15;
            var3 = _closure1_slot7;
            var2 = {};
            var2['accessibilityElementsHidden'] = var7;
            var7 = var20.infoContent;
            var2['style'] = var7;
            var6 = function onLayout(arg1) {
                var3 = _closure2_slot2;
                var1 = arg1;
                var1 = var1.nativeEvent;
                var1 = var1.layout;
                var2 = var1.width;
                var1 = undefined;
                var1 = var3.bind(var1)(var2);
                return var1;
            };
            var2['onLayout'] = var6;
            var8 = _closure1_slot16;
            var7 = _closure1_slot7;
            var6 = {};
            var10 = var20.infoContainer;
            var6['style'] = var10;
            var10 = var19;
            if(!var9) { _fun0002_ip = 19; continue _fun0002 }
case 20:
            var13 = _closure1_slot16;
            var12 = _closure1_slot7;
            var9 = {};
            var16 = {};
            var16['flex'] = var17;
            var9['style'] = var16;
            var18 = _closure1_slot15;
            var17 = _closure1_slot0;
            var21 = _closure1_slot2;
            var16 = 17;
            var16 = var21[var16];
            var16 = var17.bind(var5)(var16);
            var17 = var16.Marquee;
            var16 = {'spacing': 20, 'speed': 0.2};
            var16['children'] = var19;
            var17 = var18.bind(var5)(var17, var16);
            var16 = new Array(2);
            var16[0] = var17;
            var19 = _closure1_slot15;
            var18 = _closure1_slot1;
            var17 = 18;
            var17 = var21[var17];
            var18 = var18.bind(var5)(var17);
            var17 = {};
            var21 = {'x': 0, 'y': 0};
            var17['start'] = var21;
            var21 = {'x': 1, 'y': 0};
            var17['end'] = var21;
            var21 = [0, 0.1, 0.2, 0.8, 0.9, 1];
            var17['locations'] = var21;
            var21 = new Array(6);
            var21[0] = var22;
            var23 = 'CC';
            var24 = var22 + var23;
            var21[1] = var24;
            var24 = '00';
            var25 = var22 + var24;
            var21[2] = var25;
            var24 = var22 + var24;
            var21[3] = var24;
            var23 = var22 + var23;
            var21[4] = var23;
            var21[5] = var22;
            var17['colors'] = var21;
            var20 = var20.infoContainerGradient;
            var17['style'] = var20;
            var17 = var19.bind(var5)(var18, var17);
            var16[1] = var17;
            var9['children'] = var16;
            var10 = var13.bind(var5)(var12, var9);
case 19:
            var9 = new Array(2);
            var9[0] = var10;
            var10 = var1 != var14;
            if(!var10) { _fun0002_ip = 21; continue _fun0002 }
case 22:
            var13 = _closure1_slot15;
            var12 = _closure1_slot0;
            var11 = _closure1_slot2;
            var11 = var11[var15];
            var11 = var12.bind(var5)(var11);
            var12 = var11.Text;
            var11 = {'variant': 'text-xs/medium', 'color': 'text-subtle', 'lineClamp': 1};
            var11['children'] = var14;
            var10 = var13.bind(var5)(var12, var11);
case 21:
            var9[1] = var10;
            var6['children'] = var9;
            var6 = var8.bind(var5)(var7, var6);
            var2['children'] = var6;
            var2 = var4.bind(var5)(var3, var2);
            return var2;
case 10:
            return var1;
        }
    };
    var _closure1_slot20 = var1;
    var1 = function PiPControls(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var3 = arg1;
            var1 = var3.message;
            var _closure2_slot0 = var1;
            var16 = var3.handleClosePip;
            var17 = var3.visible;
            var _closure2_slot1 = var17;
            var7 = var3.isVoiceMessage;
            var3 = _closure1_slot17;
            var4 = undefined;
            var18 = var3.bind(var4)();
            var6 = _closure1_slot4;
            var5 = var6.useCallback;
            var3 = new Array(1);
            var3[0] = var1;
            var1 = function() {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                    var2 = _closure2_slot0;
                    var3 = null;
                    if(!(var3 != var2)) { _fun0005_ip = 23; continue _fun0005 }
case 24:
                    var2 = _closure2_slot0;
                    var2 = var2.channel_id;
                    if(!(var3 != var2)) { _fun0005_ip = 23; continue _fun0005 }
case 5:
                    var2 = _closure2_slot0;
                    var2 = var2.id;
                    if(!(var3 != var2)) { _fun0005_ip = 23; continue _fun0005 }
case 25:
                    var6 = _closure1_slot1;
                    var5 = _closure1_slot2;
                    var4 = 19;
                    var5 = var5[var4];
                    var4 = undefined;
                    var11 = var6.bind(var4)(var5);
                    var10 = var11.trackJump;
                    var5 = _closure2_slot0;
                    var15 = var5.channel_id;
                    var14 = var5.id;
                    var13 = 'Media PIP';
                    var12 = {};
                    var16 = var11;
                    var6 = var16[var10](var15, var14, var13, var12, var11);
                    var7 = _closure1_slot8;
                    var6 = var7.getChannel;
                    var5 = var5.channel_id;
                    var5 = var6.bind(var7)(var5);
                    var3 = var3 == var5;
                    var7 = undefined;
                    if(var3) { _fun0005_ip = 26; continue _fun0005 }
case 27:
                    var3 = var5.getGuildId;
                    var7 = var3.bind(var5)();
case 26:
                    var5 = _closure1_slot1;
                    var6 = _closure1_slot2;
                    var3 = 20;
                    var3 = var6[var3];
                    var3 = var5.bind(var4)(var3);
                    var6 = _closure1_slot14;
                    var5 = var6.CHANNEL;
                    var1 = _closure2_slot0;
                    var2 = var1.channel_id;
                    var1 = var1.id;
                    var2 = var5.bind(var6)(var7, var2, var1);
                    var1 = {'navigationReplace': true, 'openChannel': true};
                    var1 = var3.bind(var4)(var2, var1);
case 23:
                    var1 = undefined;
                    return var1;
                }
            };
            var14 = var5.bind(var6)(var1, var3);
            var10 = _closure1_slot0;
            var11 = _closure1_slot2;
            var1 = 21;
            var3 = var11[var1];
            var5 = var10.bind(var4)(var3);
            var3 = var5.useAnimatedStyle;
            var2 = function u() {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                    var1 = {};
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var2 = 22;
                    var3 = var3[var2];
                    var2 = undefined;
                    var5 = var4.bind(var2)(var3);
                    var4 = var5.withTiming;
                    var2 = _closure2_slot1;
                    var3 = 0;
                    if(!var2) { _fun0006_ip = 28; continue _fun0006 }
case 29:
                    var3 = 1;
case 28:
                    var2 = {};
                    var6 = 200;
                    var2['duration'] = var6;
                    var2 = var4.bind(var5)(var3, var2);
                    var1['opacity'] = var2;
                    return var1;
                }
            };
            var6 = {};
            var8 = 22;
            var8 = var11[var8];
            var8 = var10.bind(var4)(var8);
            var8 = var8.withTiming;
            var6['withTiming'] = var8;
            var6['visible'] = var17;
            var2['__closure'] = var6;
            var6 = 3641278982291.0;
            var2['__workletHash'] = var6;
            var6 = _closure1_slot18;
            var2['__initData'] = var6;
            var6 = var3.bind(var5)(var2);
            var8 = _closure1_slot0;
            var2 = _closure1_slot2;
            var10 = 23;
            var3 = var2[var10];
            var3 = var8.bind(var4)(var3);
            var5 = var3.intl;
            var3 = var5.string;
            var2 = var2[var10];
            var2 = var8.bind(var4)(var2);
            var2 = var2.t;
            if(var7) { _fun0004_ip = 30; continue _fun0004 }
case 31:
            var8 = var2["13/7kX"];
            var12 = var3.bind(var5)(var8);
            _fun0004_ip = 32; continue _fun0004;
case 30:
            var2 = var2.KTonHP;
            var12 = var3.bind(var5)(var2);
case 32:
            var8 = _closure1_slot0;
            var2 = _closure1_slot2;
            var3 = var2[var10];
            var3 = var8.bind(var4)(var3);
            var5 = var3.intl;
            var3 = var5.string;
            var2 = var2[var10];
            var2 = var8.bind(var4)(var2);
            var2 = var2.t;
            if(var7) { _fun0004_ip = 33; continue _fun0004 }
case 34:
            var7 = var2.WAI6xu;
            var11 = var3.bind(var5)(var7);
            _fun0004_ip = 11; continue _fun0004;
case 33:
            var2 = var2["6rhrVG"];
            var11 = var3.bind(var5)(var2);
case 11:
            var3 = _closure1_slot16;
            var2 = _closure1_slot1;
            var13 = _closure1_slot2;
            var1 = var13[var1];
            var1 = var2.bind(var4)(var1);
            var2 = var1.View;
            var1 = {};
            var7 = var18.pipControls;
            var5 = new Array(2);
            var5[0] = var7;
            var5[1] = var6;
            var1['style'] = var5;
            var7 = _closure1_slot15;
            var10 = _closure1_slot0;
            var5 = 24;
            var5 = var13[var5];
            var5 = var10.bind(var4)(var5);
            var6 = var5.BackgroundBlurFill;
            var5 = {};
            var8 = 0.05;
            var5['blurAmount'] = var8;
            var6 = var7.bind(var4)(var6, var5);
            var5 = new Array(3);
            var5[0] = var6;
            var8 = _closure1_slot15;
            var7 = _closure1_slot6;
            var6 = {};
            var15 = !var17;
            var6['disabled'] = var15;
            var19 = var18.pipButton;
            var15 = new Array(2);
            var15[0] = var19;
            var19 = var18.backButton;
            var15[1] = var19;
            var6['style'] = var15;
            var6['onPress'] = var14;
            var15 = true;
            var6['accessible'] = var15;
            var14 = 'button';
            var6['accessibilityRole'] = var14;
            var6['accessibilityLabel'] = var12;
            var21 = _closure1_slot15;
            var12 = 25;
            var12 = var13[var12];
            var12 = var10.bind(var4)(var12);
            var20 = var12.ArrowLargeLeftIcon;
            var19 = {};
            var12 = 'sm';
            var19['size'] = var12;
            var19 = var21.bind(var4)(var20, var19);
            var6['children'] = var19;
            var6 = var8.bind(var4)(var7, var6);
            var5[1] = var6;
            var8 = _closure1_slot15;
            var7 = _closure1_slot6;
            var6 = {};
            var17 = !var17;
            var6['disabled'] = var17;
            var19 = var18.pipButton;
            var17 = new Array(2);
            var17[0] = var19;
            var18 = var18.dismissButton;
            var17[1] = var18;
            var6['style'] = var17;
            var6['onPress'] = var16;
            var6['accessible'] = var15;
            var6['accessibilityRole'] = var14;
            var6['accessibilityLabel'] = var11;
            var11 = _closure1_slot15;
            var9 = 26;
            var9 = var13[var9];
            var9 = var10.bind(var4)(var9);
            var10 = var9.XLargeIcon;
            var9 = {};
            var9['size'] = var12;
            var9 = var11.bind(var4)(var10, var9);
            var6['children'] = var9;
            var6 = var8.bind(var4)(var7, var6);
            var5[2] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot21 = var1;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var4);
    var1 = 0;
    var4 = var6[var1];
    var1 = undefined;
    var4 = var14.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 1;
    var7 = var6[var4];
    var4 = metroImportAll;
    var4 = var4.bind(var1)(var7);
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.Easing;
    var _closure1_slot5 = var7;
    var11 = var4.StyleSheet;
    var7 = var4.TouchableOpacity;
    var _closure1_slot6 = var7;
    var4 = var4.View;
    var _closure1_slot7 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var14.bind(var1)(var4);
    var _closure1_slot8 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var14.bind(var1)(var4);
    var _closure1_slot9 = var4;
    var15 = 5;
    var4 = var6[var15];
    var4 = var14.bind(var1)(var4);
    var _closure1_slot10 = var4;
    var4 = 6;
    var4 = var6[var4];
    var4 = var14.bind(var1)(var4);
    var _closure1_slot11 = var4;
    var4 = 7;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.AnalyticEvents;
    var _closure1_slot12 = var7;
    var7 = var4.MessageFlags;
    var _closure1_slot13 = var7;
    var4 = var4.Routes;
    var _closure1_slot14 = var4;
    var10 = 8;
    var4 = var6[var10];
    var4 = var5.bind(var1)(var4);
    var13 = var4.SquarePIPReferenceDimensions;
    var4 = 9;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.jsx;
    var _closure1_slot15 = var7;
    var4 = var4.jsxs;
    var _closure1_slot16 = var4;
    var4 = 10;
    var4 = var6[var4];
    var9 = var5.bind(var1)(var4);
    var8 = var9.createStyles;
    var7 = {};
    var4 = {'justifyContent': 'center', 'alignItems': 'center'};
    var12 = 'center';
    var16 = var13.height;
    var4['height'] = var16;
    var13 = var13.width;
    var4['width'] = var13;
    var7['container'] = var4;
    var4 = {};
    var18 = var11.absoluteFillObject;
    var19 = var4;
    var13 = copyDataProperties(var19, var18);
    var13 = 'zIndex';
    var4[12] = var15;
    var7['pipControls'] = var4;
    var4 = {'position': 'absolute', 'top': 8, 'padding': 8, 'borderRadius': null, 'borderWidth': 1};
    var13 = 11;
    var15 = var6[var13];
    var15 = var14.bind(var1)(var15);
    var15 = var15.radii;
    var15 = var15.round;
    var4['borderRadius'] = var15;
    var15 = var6[var13];
    var15 = var14.bind(var1)(var15);
    var15 = var15.colors;
    var15 = var15.CONTROL_SECONDARY_BORDER_DEFAULT;
    var4['borderColor'] = var15;
    var15 = var6[var13];
    var15 = var14.bind(var1)(var15);
    var15 = var15.colors;
    var15 = var15.CONTROL_SECONDARY_TEXT_DEFAULT;
    var4['tintColor'] = var15;
    var15 = var6[var13];
    var15 = var14.bind(var1)(var15);
    var15 = var15.colors;
    var15 = var15.CONTROL_SECONDARY_BACKGROUND_DEFAULT;
    var4['backgroundColor'] = var15;
    var15 = var6[var13];
    var15 = var14.bind(var1)(var15);
    var15 = var15.shadows;
    var18 = var15.SHADOW_LOW_HOVER;
    var19 = var4;
    var15 = copyDataProperties(var19, var18);
    var7['pipButton'] = var4;
    var4 = {};
    var4['right'] = var10;
    var7['dismissButton'] = var4;
    var4 = {};
    var4['left'] = var10;
    var7['backButton'] = var4;
    var4 = 34;
    var10 = {'justifyContent': 'center', 'alignItems': 'center', 'marginBottom': 8, 'height': 34};
    var7['infoContainer'] = var10;
    var10 = {};
    var18 = var11.absoluteFillObject;
    var19 = var10;
    var15 = copyDataProperties(var19, var18);
    var7['infoContainerGradient'] = var10;
    var10 = {'justifyContent': 'center', 'alignItems': 'center', 'alignSelf': 'stretch', 'marginHorizontal': 4};
    var7['infoContent'] = var10;
    var10 = {'justifyContent': 'center', 'alignItems': 'center', 'width': 48, 'height': 48, 'zIndex': 100};
    var7['actionContainer'] = var10;
    var10 = {'justifyContent': 'center', 'alignItems': 'center', 'width': 32, 'height': 32, 'zIndex': 100};
    var15 = var6[var13];
    var15 = var14.bind(var1)(var15);
    var15 = var15.radii;
    var15 = var15.round;
    var10['borderRadius'] = var15;
    var13 = var6[var13];
    var13 = var14.bind(var1)(var13);
    var13 = var13.colors;
    var13 = var13.BACKGROUND_BRAND;
    var10['backgroundColor'] = var13;
    var7['playPauseButton'] = var10;
    var10 = {};
    var18 = var11.absoluteFillObject;
    var19 = var10;
    var11 = copyDataProperties(var19, var18);
    var11 = 'justifyContent';
    var10[10] = var12;
    var11 = 'alignItems';
    var10[10] = var12;
    var7['progressBar'] = var10;
    var7 = var8.bind(var9)(var7);
    var _closure1_slot17 = var7;
    var7 = {};
    var8 = 'function MediaPlaybackPipTsx1(){const{withTiming,visible}=this.__closure;return{opacity:withTiming(visible?1:0,{duration:200})};}';
    var7['code'] = var8;
    var _closure1_slot18 = var7;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/media_panel/native/MediaPlaybackPip.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function MediaPlaybackPip() {
        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
            var1 = _closure1_slot17;
            var4 = undefined;
            var18 = var1.bind(var4)();
            var3 = _closure1_slot4;
            var1 = var3.useRef;
            var2 = null;
            var19 = var1.bind(var3)(var2);
            var5 = _closure1_slot0;
            var9 = _closure1_slot2;
            var1 = 28;
            var1 = var9[var1];
            var6 = var5.bind(var4)(var1);
            var3 = var6.useMediaPlayerManagerStore;
            var1 = 29;
            var1 = var9[var1];
            var11 = var5.bind(var4)(var1);
            var7 = var11.useShallow;
            var1 = function(arg1) {
                var2 = arg1;
                var1 = {};
                var3 = var2.isPlaying;
                var1['isPlaying'] = var3;
                var3 = var2.progress;
                var1['progress'] = var3;
                var3 = var2.activeMediaPlayerSource;
                var1['activeMediaPlayerSource'] = var3;
                var3 = var2.mediaSourceMessage;
                var1['mediaSourceMessage'] = var3;
                var2 = var2.closePip;
                var1['closePip'] = var2;
                return var1;
            };
            var1 = var7.bind(var11)(var1);
            var3 = var3.bind(var6)(var1);
            var16 = var3.isPlaying;
            var _closure2_slot0 = var16;
            var1 = var3.progress;
            var6 = var3.activeMediaPlayerSource;
            var _closure2_slot1 = var6;
            var22 = var3.mediaSourceMessage;
            var7 = var3.closePip;
            var _closure2_slot2 = var7;
            var3 = 13;
            var3 = var9[var3];
            var12 = var5.bind(var4)(var3);
            var11 = var12.useStateFromStores;
            var3 = _closure1_slot9;
            var9 = new Array(1);
            var9[0] = var3;
            var5 = new Array(1);
            var5[0] = var6;
            var3 = function() {
                _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                    var2 = _closure2_slot1;
                    var3 = null;
                    var2 = var3 == var2;
                    var4 = undefined;
                    if(var2) { _fun0008_ip = 35; continue _fun0008 }
case 36:
                    var2 = _closure2_slot1;
                    var4 = var2.channelId;
case 35:
                    var2 = _closure2_slot1;
                    var2 = var3 == var2;
                    var5 = undefined;
                    if(var2) { _fun0008_ip = 37; continue _fun0008 }
case 38:
                    var1 = _closure2_slot1;
                    var5 = var1.messageId;
case 37:
                    var2 = var3 == var4;
                    var1 = null;
                    if(var2) { _fun0008_ip = 39; continue _fun0008 }
case 40:
                    var2 = var3 == var5;
                    var1 = null;
                    if(var2) { _fun0008_ip = 39; continue _fun0008 }
case 41:
                    var3 = _closure1_slot9;
                    var2 = var3.getMessage;
                    var1 = var2.bind(var3)(var4, var5);
case 39:
                    return var1;
                }
            };
            var3 = var11.bind(var12)(var9, var3, var5);
            if(!(var2 != var3)) { _fun0007_ip = 42; continue _fun0007 }
case 43:
            var22 = var3;
case 42:
            var _closure2_slot3 = var22;
            var15 = var2 == var22;
            var9 = undefined;
            if(var15) { _fun0007_ip = 44; continue _fun0007 }
case 45:
            var3 = var22.getContentMessage;
            var3 = var3.bind(var22)();
            var15 = var2 == var3;
            var9 = var3;
case 44:
            if(var15) { _fun0007_ip = 46; continue _fun0007 }
case 47:
            var5 = var9.hasFlag;
            var3 = _closure1_slot13;
            var3 = var3.IS_VOICE_MESSAGE;
            var3 = var5.bind(var9)(var3);
            var15 = !var3;
case 46:
            var3 = !var15;
            var _closure2_slot4 = var3;
            var5 = function useAnalyticsEffects(arg1, arg2, arg3) {
                var7 = arg1;
                var8 = arg2;
                var3 = arg3;
                var _closure3_slot0 = var7;
                var _closure3_slot1 = var8;
                var _closure3_slot2 = var3;
                var6 = _closure1_slot4;
                var5 = var6.useRef;
                var4 = null;
                var4 = var5.bind(var6)(var4);
                var _closure3_slot3 = var4;
                var6 = _closure1_slot4;
                var5 = var6.useEffect;
                var4 = new Array(3);
                var4[0] = var8;
                var4[1] = var7;
                var4[2] = var3;
                var3 = function() {
                    _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                        var2 = _closure3_slot3;
                        var2 = var2.current;
                        var4 = null;
                        var2 = var4 == var2;
                        if(!var2) { _fun0009_ip = 48; continue _fun0009 }
case 49:
                        var3 = _closure3_slot0;
                        var2 = var4 != var3;
case 48:
                        if(!var2) { _fun0009_ip = 38; continue _fun0009 }
case 5:
                        var3 = _closure3_slot1;
                        var2 = var4 != var3;
case 38:
                        if(!var2) { _fun0009_ip = 50; continue _fun0009 }
case 51:
                        var3 = _closure3_slot2;
                        var2 = var4 != var3;
case 50:
                        if(!var2) { _fun0009_ip = 52; continue _fun0009 }
case 53:
                        var3 = _closure3_slot3;
                        var2 = {};
                        var5 = _closure3_slot1;
                        var2['initialProgress'] = var5;
                        var5 = _closure3_slot0;
                        var2['activeMediaPlayerSource'] = var5;
                        var5 = _closure3_slot2;
                        var2['message'] = var5;
                        var3['current'] = var2;
case 52:
                        var2 = _closure3_slot3;
                        var2 = var2.current;
                        var2 = var4 != var2;
                        if(!var2) { _fun0009_ip = 54; continue _fun0009 }
case 55:
                        var3 = _closure3_slot1;
                        var2 = var4 != var3;
case 54:
                        if(!var2) { _fun0009_ip = 56; continue _fun0009 }
case 57:
                        var2 = _closure3_slot3;
                        var2 = var2.current;
                        var1 = _closure3_slot1;
                        var2['finalProgress'] = var1;
case 56:
                        var1 = undefined;
                        return var1;
                    }
                };
                var3 = var5.bind(var6)(var3, var4);
                var4 = _closure1_slot4;
                var3 = var4.useEffect;
                var2 = function() {
                    var2 = global;
                    var2 = var2.Date;
                    var3 = var2.prototype;
                    var3 = Object.create(var3, {constructor: {value: var2}});
                    var4 = var3;
                    var2 = new var4[var2](var3);
                    var2 = var2 instanceof Object ? var2 : var3;
                    var _closure4_slot0 = var2;
                    var1 = function() {
                        _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
                            var1 = _closure3_slot3;
                            var1 = var1.current;
                            var3 = null;
                            if(!(var3 == var1)) { _fun0010_ip = 58; continue _fun0010 }
case 36:
                            var1 = {};
case 58:
                            var9 = var1.activeMediaPlayerSource;
                            var7 = var1.message;
                            var8 = var1.initialProgress;
                            var6 = var1.finalProgress;
                            var4 = var3 == var9;
                            var1 = undefined;
                            var2 = undefined;
                            if(var4) { _fun0010_ip = 59; continue _fun0010 }
case 53:
                            var2 = var9.attachmentIndex;
case 59:
                            var2 = var3 != var2;
                            var4 = null;
                            if(!var2) { _fun0010_ip = 54; continue _fun0010 }
case 60:
                            var5 = var3 == var7;
                            var2 = undefined;
                            if(var5) { _fun0010_ip = 61; continue _fun0010 }
case 62:
                            var5 = var7.getContentMessage;
                            var5 = var5.bind(var7)();
                            var10 = var3 == var5;
                            var2 = undefined;
                            if(var10) { _fun0010_ip = 61; continue _fun0010 }
case 63:
                            var10 = var5.attachments;
                            var5 = var9.attachmentIndex;
                            var2 = var10[var5];
case 61:
                            var4 = var2;
case 54:
                            var5 = {};
                            var10 = var3 == var9;
                            var2 = undefined;
                            if(var10) { _fun0010_ip = 64; continue _fun0010 }
case 65:
                            var2 = var9.messageId;
case 64:
                            var5['message_id'] = var2;
                            var9 = var3 == var7;
                            var2 = undefined;
                            if(var9) { _fun0010_ip = 66; continue _fun0010 }
case 26:
                            var9 = var7.author;
                            var2 = var9.id;
case 66:
                            var5['sender_user_id'] = var2;
                            var9 = var3 == var4;
                            var2 = undefined;
                            if(var9) { _fun0010_ip = 67; continue _fun0010 }
case 68:
                            var2 = var4.content_type;
case 67:
                            var5['type'] = var2;
                            var4 = var3 == var7;
                            var2 = undefined;
                            if(var4) { _fun0010_ip = 69; continue _fun0010 }
case 70:
                            var4 = var7.getContentMessage;
                            var9 = var4.bind(var7)();
                            var4 = var3 == var9;
                            var2 = undefined;
                            if(var4) { _fun0010_ip = 69; continue _fun0010 }
case 71:
                            var7 = var9.hasFlag;
                            var4 = _closure1_slot13;
                            var4 = var4.IS_VOICE_MESSAGE;
                            var2 = var7.bind(var9)(var4);
case 69:
                            var5['is_voice_message'] = var2;
                            var7 = _closure1_slot19;
                            var9 = var3 == var6;
                            var4 = undefined;
                            if(var9) { _fun0010_ip = 72; continue _fun0010 }
case 73:
                            var4 = var6.duration;
case 72:
                            var4 = var7.bind(var1)(var4);
                            var5['total_duration_secs'] = var4;
                            var7 = _closure1_slot19;
                            var9 = var3 == var8;
                            var4 = undefined;
                            if(var9) { _fun0010_ip = 74; continue _fun0010 }
case 75:
                            var4 = var8.time;
case 74:
                            var4 = var7.bind(var1)(var4);
                            var5['pip_playback_start_time_secs'] = var4;
                            var4 = _closure1_slot19;
                            var7 = var3 == var6;
                            var3 = undefined;
                            if(var7) { _fun0010_ip = 76; continue _fun0010 }
case 77:
                            var3 = var6.time;
case 76:
                            var3 = var4.bind(var1)(var3);
                            var5['pip_playback_end_time_secs'] = var3;
                            var4 = _closure4_slot0;
                            var3 = var4.toISOString;
                            var3 = var3.bind(var4)();
                            var5['pip_opened_timestamp'] = var3;
                            var3 = global;
                            var3 = var3.Date;
                            var4 = var3.prototype;
                            var4 = Object.create(var4, {constructor: {value: var3}});
                            var13 = var4;
                            var3 = new var13[var3](var12);
                            var4 = var3 instanceof Object ? var3 : var4;
                            var3 = var4.toISOString;
                            var3 = var3.bind(var4)();
                            var5['pip_closed_timestamp'] = var3;
                            var4 = _closure1_slot1;
                            var6 = _closure1_slot2;
                            var3 = 27;
                            var3 = var6[var3];
                            var4 = var4.bind(var1)(var3);
                            var3 = var4.track;
                            var2 = _closure1_slot12;
                            var2 = var2.MEDIA_PIP_ENDED;
                            var2 = var3.bind(var4)(var2, var5);
                            return var1;
                        }
                    };
                    return var1;
                };
                var1 = new Array(0);
                var1 = var3.bind(var4)(var2, var1);
                var1 = undefined;
                return var1;
            };
            var5 = var5.bind(var4)(var6, var1, var22);
            var11 = _closure1_slot4;
            var9 = var11.useState;
            var5 = false;
            var12 = var9.bind(var11)(var5);
            var11 = _closure1_slot3;
            var9 = 2;
            var11 = var11.bind(var4)(var12, var9);
            var20 = 0;
            var14 = var11[var20];
            var _closure2_slot5 = var14;
            var9 = 1;
            var11 = var11[var9];
            var _closure2_slot6 = var11;
            var17 = _closure1_slot4;
            var13 = var17.useEffect;
            var12 = new Array(3);
            var12[0] = var14;
            var12[1] = var11;
            var12[2] = var16;
            var11 = function() {
                _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
                    var2 = _closure2_slot5;
                    if(!var2) { _fun0011_ip = 78; continue _fun0011 }
case 79:
                    var2 = global;
                    var5 = var2.setTimeout;
                    var4 = undefined;
                    var3 = function() {
                        _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
case 0:
                            var2 = _closure2_slot0;
                            if(!var2) { _fun0012_ip = 80; continue _fun0012 }
case 81:
                            var3 = _closure2_slot6;
                            var2 = undefined;
                            var1 = false;
                            var1 = var3.bind(var2)(var1);
case 80:
                            var1 = undefined;
                            return var1;
                        }
                    };
                    var2 = 3000;
                    var2 = var5.bind(var4)(var3, var2);
                    var _closure3_slot0 = var2;
case 78:
                    var1 = function() {
                        var1 = global;
                        var3 = var1.clearTimeout;
                        var2 = _closure3_slot0;
                        var1 = undefined;
                        var1 = var3.bind(var1)(var2);
                        return var1;
                    };
                    return var1;
                }
            };
            var11 = var13.bind(var17)(var11, var12);
            var13 = _closure1_slot4;
            var12 = var13.useContext;
            var17 = _closure1_slot1;
            var21 = _closure1_slot2;
            var11 = 30;
            var11 = var21[var11];
            var11 = var17.bind(var4)(var11);
            var11 = var12.bind(var13)(var11);
            var17 = var11.dismissPanel;
            var _closure2_slot7 = var17;
            var13 = _closure1_slot4;
            var12 = var13.useCallback;
            var11 = new Array(2);
            var11[0] = var17;
            var11[1] = var7;
            var7 = function() {
                var3 = _closure2_slot7;
                var1 = undefined;
                var3 = var3.bind(var1)();
                var2 = _closure2_slot2;
                var2 = var2.bind(var1)();
                var3 = _closure1_slot1;
                var4 = _closure1_slot2;
                var2 = 28;
                var2 = var4[var2];
                var3 = var3.bind(var1)(var2);
                var2 = var3.pauseCurrentPlayer;
                var2 = var2.bind(var3)();
                return var1;
            };
            var21 = var12.bind(var13)(var7, var11);
            var _closure2_slot8 = var21;
            var7 = function usePlaybackCompletionEffects(arg1, arg2) {
                _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
case 0:
                    var3 = arg1;
                    var6 = arg2;
                    var _closure3_slot0 = var3;
                    var _closure3_slot1 = var6;
                    var5 = _closure1_slot4;
                    var4 = var5.useEffect;
                    var1 = null;
                    var8 = var1 == var3;
                    var1 = undefined;
                    var7 = undefined;
                    if(var8) { _fun0013_ip = 28; continue _fun0013 }
case 4:
                    var7 = var3.isCompleted;
case 28:
                    var3 = new Array(2);
                    var3[0] = var7;
                    var3[1] = var6;
                    var2 = function() {
                        _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
case 0:
                            var4 = _closure3_slot0;
                            var2 = null;
                            var2 = var2 != var4;
                            if(!var2) { _fun0014_ip = 82; continue _fun0014 }
case 36:
                            var3 = _closure3_slot0;
                            var2 = var3.isCompleted;
case 82:
                            if(!var2) { _fun0014_ip = 83; continue _fun0014 }
case 84:
                            var2 = global;
                            var5 = var2.setTimeout;
                            var4 = undefined;
                            var3 = function() {
                                var2 = _closure3_slot1;
                                var1 = undefined;
                                var2 = var2.bind(var1)();
                                return var1;
                            };
                            var2 = 2000;
                            var2 = var5.bind(var4)(var3, var2);
                            var _closure4_slot0 = var2;
case 83:
                            var1 = function() {
                                var1 = global;
                                var3 = var1.clearTimeout;
                                var2 = _closure4_slot0;
                                var1 = undefined;
                                var2 = var3.bind(var1)(var2);
                                return var1;
                            };
                            return var1;
                        }
                    };
                    var2 = var4.bind(var5)(var2, var3);
                    return var1;
                }
            };
            var7 = var7.bind(var4)(var1, var21);
            if(var14) { _fun0007_ip = 85; continue _fun0007 }
case 86:
            var7 = var2 == var1;
            var11 = undefined;
            if(var7) { _fun0007_ip = 87; continue _fun0007 }
case 88:
            var11 = var1.isCompleted;
case 87:
            var7 = true;
            var14 = var7 === var11;
case 85:
            var _closure2_slot9 = var14;
            var13 = _closure1_slot4;
            var12 = var13.useCallback;
            var11 = new Array(1);
            var11[0] = var16;
            var7 = function() {
                _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
case 0:
                    var3 = _closure2_slot0;
                    var5 = _closure1_slot1;
                    var4 = _closure1_slot2;
                    var1 = 28;
                    var4 = var4[var1];
                    var1 = undefined;
                    var4 = var5.bind(var1)(var4);
                    if(var3) { _fun0015_ip = 28; continue _fun0015 }
case 89:
                    var3 = var4.playCurrentPlayer;
                    var3 = var3.bind(var4)();
                    _fun0015_ip = 90; continue _fun0015;
case 28:
                    var3 = var4.pauseCurrentPlayer;
                    var3 = var3.bind(var4)();
                    var3 = _closure2_slot6;
                    var2 = true;
                    var2 = var3.bind(var1)(var2);
case 90:
                    return var1;
                }
            };
            var17 = var12.bind(var13)(var7, var11);
            var13 = _closure1_slot4;
            var12 = var13.useMemo;
            var11 = new Array(1);
            var11[0] = var16;
            var7 = function() {
                _fun0016: for(var _fun0016_ip = 0; ; ) switch(_fun0016_ip) {
case 0:
                    var4 = _closure1_slot15;
                    var2 = _closure2_slot0;
                    var6 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    if(var2) { _fun0016_ip = 28; continue _fun0016 }
case 91:
                    var2 = 32;
                    var3 = var5[var2];
                    var2 = undefined;
                    var2 = var6.bind(var2)(var3);
                    var3 = var2.PlayIcon;
                    _fun0016_ip = 41; continue _fun0016;
case 28:
                    var2 = 31;
                    var5 = var5[var2];
                    var2 = undefined;
                    var2 = var6.bind(var2)(var5);
                    var3 = var2.PauseIcon;
case 41:
                    var2 = {};
                    var6 = _closure1_slot1;
                    var5 = _closure1_slot2;
                    var1 = 11;
                    var5 = var5[var1];
                    var1 = undefined;
                    var5 = var6.bind(var1)(var5);
                    var5 = var5.colors;
                    var5 = var5.WHITE;
                    var2['color'] = var5;
                    var5 = 'md';
                    var2['size'] = var5;
                    var1 = var4.bind(var1)(var3, var2);
                    return var1;
                }
            };
            var13 = var12.bind(var13)(var7, var11);
            var12 = _closure1_slot4;
            var11 = var12.useMemo;
            var7 = new Array(4);
            var7[0] = var22;
            var7[1] = var6;
            var7[2] = var3;
            var7[3] = var14;
            var6 = function() {
                var4 = _closure1_slot15;
                var3 = _closure1_slot20;
                var2 = {};
                var5 = _closure2_slot3;
                var2['message'] = var5;
                var5 = _closure2_slot1;
                var2['activeMediaPlayerSource'] = var5;
                var5 = _closure2_slot4;
                var2['isVoiceMessage'] = var5;
                var1 = _closure2_slot9;
                var2['isControlVisible'] = var1;
                var1 = undefined;
                var1 = var4.bind(var1)(var3, var2);
                return var1;
            };
            var6 = var11.bind(var12)(var6, var7);
            var12 = _closure1_slot4;
            var11 = var12.useMemo;
            var7 = new Array(4);
            var7[0] = var22;
            var7[1] = var21;
            var7[2] = var14;
            var7[3] = var3;
            var3 = function() {
                var4 = _closure1_slot15;
                var3 = _closure1_slot21;
                var2 = {};
                var5 = _closure2_slot3;
                var2['message'] = var5;
                var5 = _closure2_slot8;
                var2['handleClosePip'] = var5;
                var5 = _closure2_slot9;
                var2['visible'] = var5;
                var1 = _closure2_slot4;
                var2['isVoiceMessage'] = var1;
                var1 = undefined;
                var1 = var4.bind(var1)(var3, var2);
                return var1;
            };
            var7 = var11.bind(var12)(var3, var7);
            var14 = _closure1_slot0;
            var3 = _closure1_slot2;
            var22 = 23;
            var11 = var3[var22];
            var11 = var14.bind(var4)(var11);
            var12 = var11.intl;
            var11 = var12.string;
            var3 = var3[var22];
            var3 = var14.bind(var4)(var3);
            var3 = var3.t;
            if(var15) { _fun0007_ip = 92; continue _fun0007 }
case 93:
            var14 = var3.AlHqHT;
            var14 = var11.bind(var12)(var14);
            _fun0007_ip = 94; continue _fun0007;
case 92:
            var3 = var3.RscU7I;
            var14 = var11.bind(var12)(var3);
case 94:
            var21 = _closure1_slot0;
            var3 = _closure1_slot2;
            var11 = var3[var22];
            var11 = var21.bind(var4)(var11);
            var12 = var11.intl;
            var11 = var12.string;
            var3 = var3[var22];
            var3 = var21.bind(var4)(var3);
            var3 = var3.t;
            if(var15) { _fun0007_ip = 95; continue _fun0007 }
case 96:
            var15 = var3["3XohGn"];
            var15 = var11.bind(var12)(var15);
            _fun0007_ip = 97; continue _fun0007;
case 95:
            var3 = var3.ZcgDJX;
            var15 = var11.bind(var12)(var3);
case 97:
            var3 = var2 == var1;
            var22 = 0;
            if(var3) { _fun0007_ip = 98; continue _fun0007 }
case 99:
            var11 = var1.time;
            var3 = var1.duration;
            var11 = var11 / var3;
            var3 = 100;
            var22 = var11 * var3;
case 98:
            var2 = var2 == var1;
            var23 = 0;
            if(var2) { _fun0007_ip = 100; continue _fun0007 }
case 101:
            var2 = var1.duration;
            var1 = var1.time;
            var23 = var2 - var1;
case 100:
            var3 = _closure1_slot16;
            var2 = _closure1_slot6;
            var1 = {};
            var11 = var18.container;
            var1['style'] = var11;
            var1['activeOpacity'] = var9;
            var8 = function onPress() {
                _fun0017: for(var _fun0017_ip = 0; ; ) switch(_fun0017_ip) {
case 0:
                    var2 = _closure2_slot0;
                    var2 = !var2;
                    if(!var2) { _fun0017_ip = 102; continue _fun0017 }
case 103:
                    var2 = _closure2_slot9;
case 102:
                    if(var2) { _fun0017_ip = 104; continue _fun0017 }
case 58:
                    var3 = _closure2_slot6;
                    var1 = _closure2_slot5;
                    var2 = !var1;
                    var1 = undefined;
                    var1 = var3.bind(var1)(var2);
case 104:
                    var1 = undefined;
                    return var1;
                }
            };
            var1['onPress'] = var8;
            var1['accessible'] = var5;
            var5 = new Array(3);
            var5[0] = var7;
            var5[1] = var6;
            var8 = _closure1_slot16;
            var7 = _closure1_slot7;
            var6 = {};
            var9 = var18.actionContainer;
            var6['style'] = var9;
            var12 = _closure1_slot15;
            var11 = _closure1_slot0;
            var21 = _closure1_slot2;
            var9 = 33;
            var9 = var21[var9];
            var9 = var11.bind(var4)(var9);
            var11 = var9.AnimatedCircularProgress;
            var9 = {'style': null, 'size': 48, 'width': 2};
            var21 = var18.progressBar;
            var9['style'] = var21;
            var9['prefill'] = var22;
            var25 = _closure1_slot5;
            var24 = var25.out;
            var21 = var25.linear;
            var21 = var24.bind(var25)(var21);
            var9['easing'] = var21;
            var21 = 0;
            if(!var16) { _fun0007_ip = 105; continue _fun0007 }
case 106:
            var21 = var23;
case 105:
            var9['duration'] = var21;
            var21 = 100;
            if(var16) { _fun0007_ip = 107; continue _fun0007 }
case 108:
            var21 = var22;
case 107:
            var9['fill'] = var21;
            var9['rotation'] = var20;
            var20 = 'round';
            var9['lineCap'] = var20;
            var9['ref'] = var19;
            var21 = _closure1_slot0;
            var23 = _closure1_slot2;
            var20 = 12;
            var19 = var23[var20];
            var26 = var21.bind(var4)(var19);
            var25 = var26.useToken;
            var22 = _closure1_slot1;
            var19 = 11;
            var24 = var23[var19];
            var24 = var22.bind(var4)(var24);
            var24 = var24.colors;
            var24 = var24.CONTROL_PRIMARY_BACKGROUND_DEFAULT;
            var24 = var25.bind(var26)(var24);
            var9['tintColor'] = var24;
            var20 = var23[var20];
            var21 = var21.bind(var4)(var20);
            var20 = var21.useToken;
            var19 = var23[var19];
            var19 = var22.bind(var4)(var19);
            var19 = var19.colors;
            var19 = var19.BACKGROUND_MOD_MUTED;
            var19 = var20.bind(var21)(var19);
            var9['backgroundColor'] = var19;
            var11 = var12.bind(var4)(var11, var9);
            var9 = new Array(2);
            var9[0] = var11;
            var12 = _closure1_slot15;
            var11 = _closure1_slot6;
            var10 = {};
            var18 = var18.playPauseButton;
            var10['style'] = var18;
            var10['onPress'] = var17;
            var17 = 'button';
            var10['accessibilityRole'] = var17;
            if(!var16) { _fun0007_ip = 109; continue _fun0007 }
case 110:
            var14 = var15;
case 109:
            var10['accessibilityLabel'] = var14;
            var10['children'] = var13;
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