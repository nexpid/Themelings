// app/modules/media_panel/native/MediaPlaybackPip.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var14 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var14;
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
    var4[var13] = var15;
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
    var10[var11] = var12;
    var11 = 'alignItems';
    var10[var11] = var12;
    var7['progressBar'] = var10;
    var7 = var8.bind(var9)(var7);
    var _closure1_slot17 = var7;
    var7 = function convertMsToSecs(arg1) {
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
    var _closure1_slot18 = var7;
    var7 = function MediaInfo(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var1 = arg1;
            var2 = var1.message;
            var _closure2_slot0 = var2;
            var3 = var1.activeMediaPlayerSource;
            var9 = var1.isVoiceMessage;
            var7 = var1.isControlVisible;
            var1 = _closure1_slot17;
            var5 = undefined;
            var19 = var1.bind(var5)();
            var4 = _closure1_slot0;
            var8 = _closure1_slot2;
            var1 = 12;
            var1 = var8[var1];
            var12 = var4.bind(var5)(var1);
            var11 = var12.useToken;
            var13 = _closure1_slot1;
            var1 = 11;
            var1 = var8[var1];
            var1 = var13.bind(var5)(var1);
            var1 = var1.colors;
            var1 = var1.BACKGROUND_SURFACE_HIGH;
            var21 = var11.bind(var12)(var1);
            var1 = 13;
            var1 = var8[var1];
            var12 = var4.bind(var5)(var1);
            var11 = var12.useStateFromStores;
            var1 = _closure1_slot8;
            var8 = new Array(3);
            var8[0] = var1;
            var1 = _closure1_slot11;
            var8[1] = var1;
            var1 = _closure1_slot10;
            var8[2] = var1;
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
            var13 = var11.bind(var12)(var8, var1, var4);
            var12 = _closure1_slot4;
            var1 = var12.useState;
            var11 = 0;
            var1 = var1.bind(var12)(var11);
            var14 = _closure1_slot3;
            var8 = 2;
            var4 = var14.bind(var5)(var1, var8);
            var1 = var4[var11];
            var _closure2_slot1 = var1;
            var16 = 1;
            var4 = var4[var16];
            var _closure2_slot2 = var4;
            var4 = var12.useState;
            var4 = var4.bind(var12)(var11);
            var4 = var14.bind(var5)(var4, var8);
            var14 = var4[var11];
            var _closure2_slot3 = var14;
            var4 = var4[var16];
            var _closure2_slot4 = var4;
            var8 = var12.useMemo;
            var4 = new Array(2);
            var4[0] = var14;
            var4[1] = var1;
            var1 = function() {
                var2 = _closure2_slot3;
                var1 = _closure2_slot1;
                var1 = var2 >= var1;
                return var1;
            };
            var8 = var8.bind(var12)(var1, var4);
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
            if(var9) { _fun0002_ip = 14; continue _fun0002 }
case 15:
            var9 = var4.attachments;
            var9 = var9.length;
            var11 = var9 > var11;
            var12 = '';
            var9 = var12;
            if(!var11) { _fun0002_ip = 16; continue _fun0002 }
case 17:
            var11 = var3.attachmentIndex;
            var11 = var1 != var11;
            var9 = var12;
            if(!var11) { _fun0002_ip = 16; continue _fun0002 }
case 18:
            var4 = var4.attachments;
            var3 = var3.attachmentIndex;
            var4 = var4[var3];
            var11 = _closure1_slot1;
            var12 = _closure1_slot2;
            var3 = 15;
            var3 = var12[var3];
            var3 = var11.bind(var5)(var3);
            var9 = var3.bind(var5)(var4);
            _fun0002_ip = 16; continue _fun0002;
case 14:
            var2 = var2.author;
            var9 = var2.username;
case 16:
            var4 = _closure1_slot15;
            var3 = _closure1_slot0;
            var2 = _closure1_slot2;
            var14 = 16;
            var2 = var2[var14];
            var2 = var3.bind(var5)(var2);
            var3 = var2.Text;
            var2 = {'variant': 'text-md/semibold', 'lineClamp': 1, 'ellipsizeMode': 'clip'};
            var11 = function onLayout(arg1) {
                var3 = _closure2_slot4;
                var1 = arg1;
                var1 = var1.nativeEvent;
                var1 = var1.layout;
                var2 = var1.width;
                var1 = undefined;
                var1 = var3.bind(var1)(var2);
                return var1;
            };
            var2['onLayout'] = var11;
            var2['children'] = var9;
            var17 = var4.bind(var5)(var3, var2);
            var3 = _closure1_slot7;
            var2 = {};
            var2['accessibilityElementsHidden'] = var7;
            var7 = var19.infoContent;
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
            var7 = _closure1_slot16;
            var6 = {};
            var9 = var19.infoContainer;
            var6['style'] = var9;
            var9 = var17;
            if(!var8) { _fun0002_ip = 19; continue _fun0002 }
case 20:
            var12 = _closure1_slot16;
            var11 = _closure1_slot7;
            var8 = {};
            var15 = {};
            var15['flex'] = var16;
            var8['style'] = var15;
            var18 = _closure1_slot15;
            var16 = _closure1_slot0;
            var20 = _closure1_slot2;
            var15 = 17;
            var15 = var20[var15];
            var15 = var16.bind(var5)(var15);
            var16 = var15.Marquee;
            var15 = {'spacing': 20, 'speed': 0.2};
            var15['children'] = var17;
            var16 = var18.bind(var5)(var16, var15);
            var15 = new Array(2);
            var15[0] = var16;
            var17 = _closure1_slot1;
            var16 = 18;
            var16 = var20[var16];
            var17 = var17.bind(var5)(var16);
            var16 = {};
            var20 = {'x': 0, 'y': 0};
            var16['start'] = var20;
            var20 = {'x': 1, 'y': 0};
            var16['end'] = var20;
            var20 = [0, 0.1, 0.2, 0.8, 0.9, 1];
            var16['locations'] = var20;
            var20 = new Array(6);
            var20[0] = var21;
            var22 = 'CC';
            var23 = var21 + var22;
            var20[1] = var23;
            var23 = '00';
            var24 = var21 + var23;
            var20[2] = var24;
            var23 = var21 + var23;
            var20[3] = var23;
            var22 = var21 + var22;
            var20[4] = var22;
            var20[5] = var21;
            var16['colors'] = var20;
            var19 = var19.infoContainerGradient;
            var16['style'] = var19;
            var16 = var18.bind(var5)(var17, var16);
            var15[1] = var16;
            var8['children'] = var15;
            var9 = var12.bind(var5)(var11, var8);
case 19:
            var8 = new Array(2);
            var8[0] = var9;
            var9 = var1 != var13;
            if(!var9) { _fun0002_ip = 21; continue _fun0002 }
case 22:
            var12 = _closure1_slot15;
            var11 = _closure1_slot0;
            var10 = _closure1_slot2;
            var10 = var10[var14];
            var10 = var11.bind(var5)(var10);
            var11 = var10.Text;
            var10 = {'variant': 'text-xs/medium', 'color': 'text-subtle', 'lineClamp': 1};
            var10['children'] = var13;
            var9 = var12.bind(var5)(var11, var10);
case 21:
            var8[1] = var9;
            var6['children'] = var8;
            var6 = var7.bind(var5)(var3, var6);
            var2['children'] = var6;
            var2 = var4.bind(var5)(var3, var2);
            return var2;
case 10:
            return var1;
        }
    };
    var _closure1_slot19 = var7;
    var7 = {};
    var8 = 'function MediaPlaybackPipTsx1(){const{withTiming,visible}=this.__closure;return{opacity:withTiming(visible?1:0,{duration:200})};}';
    var7['code'] = var8;
    var _closure1_slot20 = var7;
    var7 = function PiPControls(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var3 = arg1;
            var1 = var3.message;
            var _closure2_slot0 = var1;
            var15 = var3.handleClosePip;
            var16 = var3.visible;
            var _closure2_slot1 = var16;
            var8 = var3.isVoiceMessage;
            var3 = _closure1_slot17;
            var4 = undefined;
            var17 = var3.bind(var4)();
            var7 = _closure1_slot4;
            var5 = var7.useCallback;
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
            var13 = var5.bind(var7)(var1, var3);
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
            var7 = {};
            var9 = 22;
            var9 = var11[var9];
            var9 = var10.bind(var4)(var9);
            var9 = var9.withTiming;
            var7['withTiming'] = var9;
            var7['visible'] = var16;
            var2['__closure'] = var7;
            var7 = 3641278982291.0;
            var2['__workletHash'] = var7;
            var7 = _closure1_slot20;
            var2['__initData'] = var7;
            var7 = var3.bind(var5)(var2);
            var9 = _closure1_slot0;
            var2 = _closure1_slot2;
            var10 = 23;
            var3 = var2[var10];
            var3 = var9.bind(var4)(var3);
            var5 = var3.intl;
            var3 = var5.string;
            var2 = var2[var10];
            var2 = var9.bind(var4)(var2);
            var2 = var2.t;
            if(var8) { _fun0004_ip = 30; continue _fun0004 }
case 31:
            var9 = var2.13/7kX;
            var11 = var3.bind(var5)(var9);
            _fun0004_ip = 32; continue _fun0004;
case 30:
            var2 = var2.KTonHP;
            var11 = var3.bind(var5)(var2);
case 32:
            var9 = _closure1_slot0;
            var2 = _closure1_slot2;
            var3 = var2[var10];
            var3 = var9.bind(var4)(var3);
            var5 = var3.intl;
            var3 = var5.string;
            var2 = var2[var10];
            var2 = var9.bind(var4)(var2);
            var2 = var2.t;
            if(var8) { _fun0004_ip = 33; continue _fun0004 }
case 34:
            var8 = var2.WAI6xu;
            var9 = var3.bind(var5)(var8);
            _fun0004_ip = 35; continue _fun0004;
case 33:
            var2 = var2.6rhrVG;
            var9 = var3.bind(var5)(var2);
case 35:
            var3 = _closure1_slot16;
            var2 = _closure1_slot1;
            var12 = _closure1_slot2;
            var1 = var12[var1];
            var1 = var2.bind(var4)(var1);
            var2 = var1.View;
            var1 = {};
            var8 = var17.pipControls;
            var5 = new Array(2);
            var5[0] = var8;
            var5[1] = var7;
            var1['style'] = var5;
            var8 = _closure1_slot15;
            var10 = _closure1_slot0;
            var5 = 24;
            var5 = var12[var5];
            var5 = var10.bind(var4)(var5);
            var7 = var5.BackgroundBlurFill;
            var5 = {};
            var14 = 0.05;
            var5['blurAmount'] = var14;
            var7 = var8.bind(var4)(var7, var5);
            var5 = new Array(3);
            var5[0] = var7;
            var7 = _closure1_slot6;
            var6 = {};
            var14 = !var16;
            var6['disabled'] = var14;
            var18 = var17.pipButton;
            var14 = new Array(2);
            var14[0] = var18;
            var18 = var17.backButton;
            var14[1] = var18;
            var6['style'] = var14;
            var6['onPress'] = var13;
            var14 = true;
            var6['accessible'] = var14;
            var13 = 'button';
            var6['accessibilityRole'] = var13;
            var6['accessibilityLabel'] = var11;
            var11 = 25;
            var11 = var12[var11];
            var11 = var10.bind(var4)(var11);
            var19 = var11.ArrowLargeLeftIcon;
            var18 = {};
            var11 = 'sm';
            var18['size'] = var11;
            var18 = var8.bind(var4)(var19, var18);
            var6['children'] = var18;
            var6 = var8.bind(var4)(var7, var6);
            var5[1] = var6;
            var6 = {};
            var16 = !var16;
            var6['disabled'] = var16;
            var18 = var17.pipButton;
            var16 = new Array(2);
            var16[0] = var18;
            var17 = var17.dismissButton;
            var16[1] = var17;
            var6['style'] = var16;
            var6['onPress'] = var15;
            var6['accessible'] = var14;
            var6['accessibilityRole'] = var13;
            var6['accessibilityLabel'] = var9;
            var9 = 26;
            var9 = var12[var9];
            var9 = var10.bind(var4)(var9);
            var10 = var9.XLargeIcon;
            var9 = {};
            var9['size'] = var11;
            var9 = var8.bind(var4)(var10, var9);
            var6['children'] = var9;
            var6 = var8.bind(var4)(var7, var6);
            var5[2] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot21 = var7;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/media_panel/native/MediaPlaybackPip.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function _default() {
        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
            var1 = _closure1_slot17;
            var4 = undefined;
            var17 = var1.bind(var4)();
            var2 = _closure1_slot4;
            var1 = var2.useRef;
            var20 = null;
            var18 = var1.bind(var2)(var20);
            var5 = _closure1_slot0;
            var6 = _closure1_slot2;
            var1 = 28;
            var1 = var6[var1];
            var3 = var5.bind(var4)(var1);
            var2 = var3.useMediaPlayerManagerStore;
            var1 = 29;
            var1 = var6[var1];
            var10 = var5.bind(var4)(var1);
            var7 = var10.useShallow;
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
            var1 = var7.bind(var10)(var1);
            var1 = var2.bind(var3)(var1);
            var15 = var1.isPlaying;
            var _closure2_slot0 = var15;
            var21 = var1.progress;
            var2 = var1.activeMediaPlayerSource;
            var _closure2_slot1 = var2;
            var22 = var1.mediaSourceMessage;
            var3 = var1.closePip;
            var _closure2_slot2 = var3;
            var1 = 13;
            var1 = var6[var1];
            var10 = var5.bind(var4)(var1);
            var7 = var10.useStateFromStores;
            var1 = _closure1_slot9;
            var6 = new Array(1);
            var6[0] = var1;
            var5 = new Array(1);
            var5[0] = var2;
            var1 = function() {
                _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                    var2 = _closure2_slot1;
                    var3 = null;
                    var2 = var3 == var2;
                    var4 = undefined;
                    if(var2) { _fun0008_ip = 36; continue _fun0008 }
case 37:
                    var2 = _closure2_slot1;
                    var4 = var2.channelId;
case 36:
                    var2 = _closure2_slot1;
                    var2 = var3 == var2;
                    var5 = undefined;
                    if(var2) { _fun0008_ip = 38; continue _fun0008 }
case 39:
                    var1 = _closure2_slot1;
                    var5 = var1.messageId;
case 38:
                    var2 = var3 == var4;
                    var1 = null;
                    if(var2) { _fun0008_ip = 40; continue _fun0008 }
case 41:
                    var2 = var3 == var5;
                    var1 = null;
                    if(var2) { _fun0008_ip = 40; continue _fun0008 }
case 42:
                    var3 = _closure1_slot9;
                    var2 = var3.getMessage;
                    var1 = var2.bind(var3)(var4, var5);
case 40:
                    return var1;
                }
            };
            var1 = var7.bind(var10)(var6, var1, var5);
            if(!(var20 != var1)) { _fun0007_ip = 43; continue _fun0007 }
case 44:
            var22 = var1;
case 43:
            var _closure2_slot3 = var22;
            var11 = var20 == var22;
            var6 = undefined;
            if(var11) { _fun0007_ip = 45; continue _fun0007 }
case 46:
            var1 = var22.getContentMessage;
            var1 = var1.bind(var22)();
            var11 = var20 == var1;
            var6 = var1;
case 45:
            if(var11) { _fun0007_ip = 47; continue _fun0007 }
case 48:
            var5 = var6.hasFlag;
            var1 = _closure1_slot13;
            var1 = var1.IS_VOICE_MESSAGE;
            var1 = var5.bind(var6)(var1);
            var11 = !var1;
case 47:
            var1 = !var11;
            var _closure2_slot4 = var1;
            var5 = function useAnalyticsEffects(arg1, arg2, arg3) {
                var6 = arg1;
                var7 = arg2;
                var2 = arg3;
                var _closure3_slot0 = var6;
                var _closure3_slot1 = var7;
                var _closure3_slot2 = var2;
                var4 = _closure1_slot4;
                var5 = var4.useRef;
                var3 = null;
                var3 = var5.bind(var4)(var3);
                var _closure3_slot3 = var3;
                var5 = var4.useEffect;
                var3 = new Array(3);
                var3[0] = var7;
                var3[1] = var6;
                var3[2] = var2;
                var2 = function() {
                    _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                        var2 = _closure3_slot3;
                        var2 = var2.current;
                        var4 = null;
                        var2 = var4 == var2;
                        if(!var2) { _fun0009_ip = 49; continue _fun0009 }
case 50:
                        var3 = _closure3_slot0;
                        var2 = var4 != var3;
case 49:
                        if(!var2) { _fun0009_ip = 39; continue _fun0009 }
case 5:
                        var3 = _closure3_slot1;
                        var2 = var4 != var3;
case 39:
                        if(!var2) { _fun0009_ip = 51; continue _fun0009 }
case 52:
                        var3 = _closure3_slot2;
                        var2 = var4 != var3;
case 51:
                        if(!var2) { _fun0009_ip = 53; continue _fun0009 }
case 54:
                        var3 = _closure3_slot3;
                        var2 = {};
                        var5 = _closure3_slot1;
                        var2['initialProgress'] = var5;
                        var5 = _closure3_slot0;
                        var2['activeMediaPlayerSource'] = var5;
                        var5 = _closure3_slot2;
                        var2['message'] = var5;
                        var3['current'] = var2;
case 53:
                        var2 = _closure3_slot3;
                        var2 = var2.current;
                        var2 = var4 != var2;
                        if(!var2) { _fun0009_ip = 55; continue _fun0009 }
case 56:
                        var3 = _closure3_slot1;
                        var2 = var4 != var3;
case 55:
                        if(!var2) { _fun0009_ip = 57; continue _fun0009 }
case 58:
                        var2 = _closure3_slot3;
                        var2 = var2.current;
                        var1 = _closure3_slot1;
                        var2['finalProgress'] = var1;
case 57:
                        var1 = undefined;
                        return var1;
                    }
                };
                var2 = var5.bind(var4)(var2, var3);
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
                            if(!(var3 == var1)) { _fun0010_ip = 59; continue _fun0010 }
case 37:
                            var1 = {};
case 59:
                            var9 = var1.activeMediaPlayerSource;
                            var7 = var1.message;
                            var8 = var1.initialProgress;
                            var6 = var1.finalProgress;
                            var4 = var3 == var9;
                            var1 = undefined;
                            var2 = undefined;
                            if(var4) { _fun0010_ip = 60; continue _fun0010 }
case 54:
                            var2 = var9.attachmentIndex;
case 60:
                            var2 = var3 != var2;
                            var4 = null;
                            if(!var2) { _fun0010_ip = 55; continue _fun0010 }
case 61:
                            var5 = var3 == var7;
                            var2 = undefined;
                            if(var5) { _fun0010_ip = 62; continue _fun0010 }
case 63:
                            var5 = var7.getContentMessage;
                            var5 = var5.bind(var7)();
                            var10 = var3 == var5;
                            var2 = undefined;
                            if(var10) { _fun0010_ip = 62; continue _fun0010 }
case 64:
                            var10 = var5.attachments;
                            var5 = var9.attachmentIndex;
                            var2 = var10[var5];
case 62:
                            var4 = var2;
case 55:
                            var5 = {};
                            var10 = var3 == var9;
                            var2 = undefined;
                            if(var10) { _fun0010_ip = 65; continue _fun0010 }
case 66:
                            var2 = var9.messageId;
case 65:
                            var5['message_id'] = var2;
                            var9 = var3 == var7;
                            var2 = undefined;
                            if(var9) { _fun0010_ip = 67; continue _fun0010 }
case 26:
                            var9 = var7.author;
                            var2 = var9.id;
case 67:
                            var5['sender_user_id'] = var2;
                            var9 = var3 == var4;
                            var2 = undefined;
                            if(var9) { _fun0010_ip = 68; continue _fun0010 }
case 69:
                            var2 = var4.content_type;
case 68:
                            var5['type'] = var2;
                            var4 = var3 == var7;
                            var2 = undefined;
                            if(var4) { _fun0010_ip = 70; continue _fun0010 }
case 71:
                            var4 = var7.getContentMessage;
                            var9 = var4.bind(var7)();
                            var4 = var3 == var9;
                            var2 = undefined;
                            if(var4) { _fun0010_ip = 70; continue _fun0010 }
case 72:
                            var7 = var9.hasFlag;
                            var4 = _closure1_slot13;
                            var4 = var4.IS_VOICE_MESSAGE;
                            var2 = var7.bind(var9)(var4);
case 70:
                            var5['is_voice_message'] = var2;
                            var7 = _closure1_slot18;
                            var9 = var3 == var6;
                            var4 = undefined;
                            if(var9) { _fun0010_ip = 73; continue _fun0010 }
case 74:
                            var4 = var6.duration;
case 73:
                            var4 = var7.bind(var1)(var4);
                            var5['total_duration_secs'] = var4;
                            var7 = _closure1_slot18;
                            var9 = var3 == var8;
                            var4 = undefined;
                            if(var9) { _fun0010_ip = 75; continue _fun0010 }
case 76:
                            var4 = var8.time;
case 75:
                            var4 = var7.bind(var1)(var4);
                            var5['pip_playback_start_time_secs'] = var4;
                            var4 = _closure1_slot18;
                            var7 = var3 == var6;
                            var3 = undefined;
                            if(var7) { _fun0010_ip = 77; continue _fun0010 }
case 12:
                            var3 = var6.time;
case 77:
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
            var5 = var5.bind(var4)(var2, var21, var22);
            var12 = _closure1_slot4;
            var6 = var12.useState;
            var5 = false;
            var10 = var6.bind(var12)(var5);
            var7 = _closure1_slot3;
            var6 = 2;
            var6 = var7.bind(var4)(var10, var6);
            var19 = 0;
            var13 = var6[var19];
            var _closure2_slot5 = var13;
            var10 = 1;
            var6 = var6[var10];
            var _closure2_slot6 = var6;
            var14 = var12.useEffect;
            var7 = new Array(3);
            var7[0] = var13;
            var7[1] = var6;
            var7[2] = var15;
            var6 = function() {
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
            var6 = var14.bind(var12)(var6, var7);
            var7 = var12.useContext;
            var14 = _closure1_slot1;
            var16 = _closure1_slot2;
            var6 = 30;
            var6 = var16[var6];
            var6 = var14.bind(var4)(var6);
            var6 = var7.bind(var12)(var6);
            var14 = var6.dismissPanel;
            var _closure2_slot7 = var14;
            var7 = var12.useCallback;
            var6 = new Array(2);
            var6[0] = var14;
            var6[1] = var3;
            var3 = function() {
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
            var14 = var7.bind(var12)(var3, var6);
            var _closure2_slot8 = var14;
            var3 = function usePlaybackCompletionEffects(arg1, arg2) {
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
case 37:
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
            var3 = var3.bind(var4)(var21, var14);
            if(var13) { _fun0007_ip = 85; continue _fun0007 }
case 86:
            var3 = var20 == var21;
            var6 = undefined;
            if(var3) { _fun0007_ip = 87; continue _fun0007 }
case 88:
            var6 = var21.isCompleted;
case 87:
            var3 = true;
            var13 = var3 === var6;
case 85:
            var _closure2_slot9 = var13;
            var7 = _closure1_slot4;
            var12 = var7.useCallback;
            var6 = new Array(1);
            var6[0] = var15;
            var3 = function() {
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
            var16 = var12.bind(var7)(var3, var6);
            var12 = var7.useMemo;
            var6 = new Array(1);
            var6[0] = var15;
            var3 = function() {
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
                    _fun0016_ip = 42; continue _fun0016;
case 28:
                    var2 = 31;
                    var5 = var5[var2];
                    var2 = undefined;
                    var2 = var6.bind(var2)(var5);
                    var3 = var2.PauseIcon;
case 42:
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
            var12 = var12.bind(var7)(var3, var6);
            var6 = var7.useMemo;
            var3 = new Array(4);
            var3[0] = var22;
            var3[1] = var2;
            var3[2] = var1;
            var3[3] = var13;
            var2 = function() {
                var4 = _closure1_slot15;
                var3 = _closure1_slot19;
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
            var6 = var6.bind(var7)(var2, var3);
            var3 = var7.useMemo;
            var2 = new Array(4);
            var2[0] = var22;
            var2[1] = var14;
            var2[2] = var13;
            var2[3] = var1;
            var1 = function() {
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
            var7 = var3.bind(var7)(var1, var2);
            var13 = _closure1_slot0;
            var1 = _closure1_slot2;
            var22 = 23;
            var2 = var1[var22];
            var2 = var13.bind(var4)(var2);
            var3 = var2.intl;
            var2 = var3.string;
            var1 = var1[var22];
            var1 = var13.bind(var4)(var1);
            var1 = var1.t;
            if(var11) { _fun0007_ip = 92; continue _fun0007 }
case 93:
            var13 = var1.AlHqHT;
            var13 = var2.bind(var3)(var13);
            _fun0007_ip = 94; continue _fun0007;
case 92:
            var1 = var1.RscU7I;
            var13 = var2.bind(var3)(var1);
case 94:
            var14 = _closure1_slot0;
            var1 = _closure1_slot2;
            var2 = var1[var22];
            var2 = var14.bind(var4)(var2);
            var3 = var2.intl;
            var2 = var3.string;
            var1 = var1[var22];
            var1 = var14.bind(var4)(var1);
            var1 = var1.t;
            if(var11) { _fun0007_ip = 95; continue _fun0007 }
case 96:
            var11 = var1.3XohGn;
            var14 = var2.bind(var3)(var11);
            _fun0007_ip = 97; continue _fun0007;
case 95:
            var1 = var1.ZcgDJX;
            var14 = var2.bind(var3)(var1);
case 97:
            var3 = _closure1_slot16;
            var2 = _closure1_slot6;
            var1 = {};
            var11 = var17.container;
            var1['style'] = var11;
            var1['activeOpacity'] = var10;
            var8 = function onPress() {
                _fun0017: for(var _fun0017_ip = 0; ; ) switch(_fun0017_ip) {
case 0:
                    var2 = _closure2_slot0;
                    var2 = !var2;
                    if(!var2) { _fun0017_ip = 98; continue _fun0017 }
case 99:
                    var2 = _closure2_slot9;
case 98:
                    if(var2) { _fun0017_ip = 100; continue _fun0017 }
case 59:
                    var3 = _closure2_slot6;
                    var1 = _closure2_slot5;
                    var2 = !var1;
                    var1 = undefined;
                    var1 = var3.bind(var1)(var2);
case 100:
                    var1 = undefined;
                    return var1;
                }
            };
            var1['onPress'] = var8;
            var1['accessible'] = var5;
            var5 = new Array(3);
            var5[0] = var7;
            var5[1] = var6;
            var7 = _closure1_slot7;
            var6 = {};
            var8 = var17.actionContainer;
            var6['style'] = var8;
            var11 = _closure1_slot15;
            var10 = _closure1_slot0;
            var22 = _closure1_slot2;
            var8 = 33;
            var8 = var22[var8];
            var8 = var10.bind(var4)(var8);
            var10 = var8.AnimatedCircularProgress;
            var8 = {'style': null, 'size': 48, 'width': 2};
            var22 = var17.progressBar;
            var8['style'] = var22;
            var23 = var20 == var21;
            var22 = 0;
            if(var23) { _fun0007_ip = 101; continue _fun0007 }
case 102:
            var24 = var21.time;
            var23 = var21.duration;
            var24 = var24 / var23;
            var23 = 100;
            var22 = var24 * var23;
case 101:
            var8['prefill'] = var22;
            var24 = _closure1_slot5;
            var23 = var24.out;
            var22 = var24.linear;
            var22 = var23.bind(var24)(var22);
            var8['easing'] = var22;
            var22 = var20 == var21;
            var20 = 0;
            if(var22) { _fun0007_ip = 103; continue _fun0007 }
case 104:
            var22 = var21.duration;
            var21 = var21.time;
            var20 = var22 - var21;
case 103:
            var8['duration'] = var20;
            var20 = 100;
            var8['fill'] = var20;
            var8['rotation'] = var19;
            var19 = 'round';
            var8['lineCap'] = var19;
            var8['ref'] = var18;
            var20 = _closure1_slot0;
            var22 = _closure1_slot2;
            var19 = 12;
            var18 = var22[var19];
            var25 = var20.bind(var4)(var18);
            var24 = var25.useToken;
            var21 = _closure1_slot1;
            var18 = 11;
            var23 = var22[var18];
            var23 = var21.bind(var4)(var23);
            var23 = var23.colors;
            var23 = var23.CONTROL_PRIMARY_BACKGROUND_DEFAULT;
            var23 = var24.bind(var25)(var23);
            var8['tintColor'] = var23;
            var19 = var22[var19];
            var20 = var20.bind(var4)(var19);
            var19 = var20.useToken;
            var18 = var22[var18];
            var18 = var21.bind(var4)(var18);
            var18 = var18.colors;
            var18 = var18.BACKGROUND_MOD_MUTED;
            var18 = var19.bind(var20)(var18);
            var8['backgroundColor'] = var18;
            var10 = var11.bind(var4)(var10, var8);
            var8 = new Array(2);
            var8[0] = var10;
            var11 = _closure1_slot15;
            var10 = _closure1_slot6;
            var9 = {};
            var17 = var17.playPauseButton;
            var9['style'] = var17;
            var9['onPress'] = var16;
            var16 = 'button';
            var9['accessibilityRole'] = var16;
            if(!var15) { _fun0007_ip = 105; continue _fun0007 }
case 106:
            var13 = var14;
case 105:
            var9['accessibilityLabel'] = var13;
            var9['children'] = var12;
            var9 = var11.bind(var4)(var10, var9);
            var8[1] = var9;
            var6['children'] = var8;
            var6 = var3.bind(var4)(var7, var6);
            var5[2] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();