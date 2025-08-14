// app/modules/media_panel/native/MediaPlaybackPip.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var13 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var13;
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
    var4 = var13.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 1;
    var7 = var6[var4];
    var4 = metroImportAll;
    var4 = var4.bind(var1)(var7);
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var10 = var4.StyleSheet;
    var7 = var4.TouchableOpacity;
    var _closure1_slot5 = var7;
    var4 = var4.View;
    var _closure1_slot6 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var13.bind(var1)(var4);
    var _closure1_slot7 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var13.bind(var1)(var4);
    var _closure1_slot8 = var4;
    var15 = 5;
    var4 = var6[var15];
    var4 = var13.bind(var1)(var4);
    var _closure1_slot9 = var4;
    var4 = 6;
    var4 = var6[var4];
    var4 = var13.bind(var1)(var4);
    var _closure1_slot10 = var4;
    var4 = 7;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.AnalyticEvents;
    var _closure1_slot11 = var7;
    var7 = var4.MessageFlags;
    var _closure1_slot12 = var7;
    var4 = var4.Routes;
    var _closure1_slot13 = var4;
    var14 = 8;
    var4 = var6[var14];
    var4 = var5.bind(var1)(var4);
    var12 = var4.SquarePIPReferenceDimensions;
    var4 = 9;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.jsx;
    var _closure1_slot14 = var7;
    var4 = var4.jsxs;
    var _closure1_slot15 = var4;
    var4 = 10;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = {};
    var9 = {'justifyContent': 'center', 'alignItems': 'center'};
    var11 = 'center';
    var16 = var12.height;
    var9['height'] = var16;
    var12 = var12.width;
    var9['width'] = var12;
    var4['container'] = var9;
    var9 = {};
    var18 = var10.absoluteFillObject;
    var19 = var9;
    var12 = copyDataProperties(var19, var18);
    var12 = 'zIndex';
    var9[var12] = var15;
    var4['pipControls'] = var9;
    var9 = {'position': 'absolute', 'top': 8, 'padding': 8, 'borderRadius': null, 'borderWidth': 1};
    var12 = 11;
    var15 = var6[var12];
    var15 = var13.bind(var1)(var15);
    var15 = var15.radii;
    var15 = var15.round;
    var9['borderRadius'] = var15;
    var15 = var6[var12];
    var15 = var13.bind(var1)(var15);
    var15 = var15.colors;
    var15 = var15.REDESIGN_BUTTON_SECONDARY_BORDER;
    var9['borderColor'] = var15;
    var15 = var6[var12];
    var15 = var13.bind(var1)(var15);
    var15 = var15.colors;
    var15 = var15.REDESIGN_BUTTON_SECONDARY_TEXT;
    var9['tintColor'] = var15;
    var15 = var6[var12];
    var15 = var13.bind(var1)(var15);
    var15 = var15.colors;
    var15 = var15.REDESIGN_BUTTON_SECONDARY_BACKGROUND;
    var9['backgroundColor'] = var15;
    var15 = var6[var12];
    var15 = var13.bind(var1)(var15);
    var15 = var15.shadows;
    var18 = var15.SHADOW_LOW_HOVER;
    var19 = var9;
    var15 = copyDataProperties(var19, var18);
    var4['pipButton'] = var9;
    var9 = {};
    var9['right'] = var14;
    var4['dismissButton'] = var9;
    var9 = {};
    var9['left'] = var14;
    var4['backButton'] = var9;
    var9 = {'justifyContent': 'center', 'alignItems': 'center', 'marginBottom': 8, 'height': 34};
    var4['infoContainer'] = var9;
    var9 = {};
    var18 = var10.absoluteFillObject;
    var19 = var9;
    var14 = copyDataProperties(var19, var18);
    var4['infoContainerGradient'] = var9;
    var9 = {'justifyContent': 'center', 'alignItems': 'center', 'alignSelf': 'stretch', 'marginHorizontal': 4};
    var4['infoContent'] = var9;
    var9 = {'justifyContent': 'center', 'alignItems': 'center', 'width': 48, 'height': 48, 'zIndex': 100};
    var4['actionContainer'] = var9;
    var9 = {'justifyContent': 'center', 'alignItems': 'center', 'width': 32, 'height': 32, 'zIndex': 100};
    var14 = var6[var12];
    var14 = var13.bind(var1)(var14);
    var14 = var14.radii;
    var14 = var14.round;
    var9['borderRadius'] = var14;
    var12 = var6[var12];
    var12 = var13.bind(var1)(var12);
    var12 = var12.colors;
    var12 = var12.BG_BRAND;
    var9['backgroundColor'] = var12;
    var4['playPauseButton'] = var9;
    var9 = {};
    var18 = var10.absoluteFillObject;
    var19 = var9;
    var10 = copyDataProperties(var19, var18);
    var10 = 'justifyContent';
    var9[var10] = var11;
    var10 = 'alignItems';
    var9[var10] = var11;
    var4['progressBar'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot16 = var4;
    var4 = function convertMsToSecs(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var3 = arg1;
            var1 = null;
            var2 = var1 != var3;
            var1 = undefined;
            if(!var2) { _fun0001_ip = 24; continue _fun0001 }
 14:
            var2 = 1000;
            var1 = var3 / var2;
 24:
            return var1;
        }
    };
    var _closure1_slot17 = var4;
    var4 = function MediaInfo(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var1 = arg1;
            var2 = var1.message;
            var _closure2_slot0 = var2;
            var3 = var1.activeMediaPlayerSource;
            var1 = _closure1_slot16;
            var5 = undefined;
            var19 = var1.bind(var5)();
            var4 = _closure1_slot0;
            var7 = _closure1_slot2;
            var1 = 12;
            var1 = var7[var1];
            var9 = var4.bind(var5)(var1);
            var8 = var9.useToken;
            var11 = _closure1_slot1;
            var1 = 11;
            var1 = var7[var1];
            var1 = var11.bind(var5)(var1);
            var1 = var1.colors;
            var1 = var1.BACKGROUND_FLOATING;
            var21 = var8.bind(var9)(var1);
            var1 = 13;
            var1 = var7[var1];
            var9 = var4.bind(var5)(var1);
            var8 = var9.useStateFromStores;
            var1 = _closure1_slot7;
            var7 = new Array(3);
            var7[0] = var1;
            var1 = _closure1_slot10;
            var7[1] = var1;
            var1 = _closure1_slot9;
            var7[2] = var1;
            var4 = new Array(1);
            var4[0] = var2;
            var1 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                    var6 = _closure1_slot7;
                    var4 = var6.getChannel;
                    var3 = _closure2_slot0;
                    var1 = null;
                    var8 = var1 == var3;
                    var5 = undefined;
                    var3 = undefined;
                    if(var8) { _fun0003_ip = 41; continue _fun0003 }
 32:
                    var7 = _closure2_slot0;
                    var3 = var7.channel_id;
 41:
                    var7 = var4.bind(var6)(var3);
                    var3 = var1 != var7;
                    var1 = null;
                    if(!var3) { _fun0003_ip = 103; continue _fun0003 }
 55:
                    var4 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var3 = 14;
                    var3 = var6[var3];
                    var6 = var4.bind(var5)(var3);
                    var5 = var6.computeChannelName;
                    var12 = _closure1_slot10;
                    var11 = _closure1_slot9;
                    var14 = var6;
                    var13 = var7;
                    var10 = true;
                    var9 = true;
                    var1 = var14[var5](var13, var12, var11, var10, var9, var8);
 103:
                    return var1;
                }
            };
            var13 = var8.bind(var9)(var7, var1, var4);
            var8 = _closure1_slot4;
            var1 = var8.useState;
            var9 = 0;
            var1 = var1.bind(var8)(var9);
            var11 = _closure1_slot3;
            var7 = 2;
            var4 = var11.bind(var5)(var1, var7);
            var1 = var4[var9];
            var _closure2_slot1 = var1;
            var16 = 1;
            var4 = var4[var16];
            var _closure2_slot2 = var4;
            var4 = var8.useState;
            var4 = var4.bind(var8)(var9);
            var4 = var11.bind(var5)(var4, var7);
            var11 = var4[var9];
            var _closure2_slot3 = var11;
            var4 = var4[var16];
            var _closure2_slot4 = var4;
            var7 = var8.useMemo;
            var4 = new Array(2);
            var4[0] = var11;
            var4[1] = var1;
            var1 = function() {
                var2 = _closure2_slot3;
                var1 = _closure2_slot1;
                var1 = var2 >= var1;
                return var1;
            };
            var8 = var7.bind(var8)(var1, var4);
            var1 = null;
            var7 = var1 == var2;
            var4 = undefined;
            if(var7) { _fun0002_ip = 289; continue _fun0002 }
 279:
            var7 = var2.getContentMessage;
            var4 = var7.bind(var2)();
 289:
            if(!(var1 != var2)) { _fun0002_ip = 869; continue _fun0002 }
 296:
            if(!(var1 != var4)) { _fun0002_ip = 869; continue _fun0002 }
 303:
            if(!(var1 != var3)) { _fun0002_ip = 869; continue _fun0002 }
 310:
            var11 = var4.hasFlag;
            var7 = _closure1_slot12;
            var7 = var7.IS_VOICE_MESSAGE;
            var7 = var11.bind(var4)(var7);
            if(var7) { _fun0002_ip = 418; continue _fun0002 }
 334:
            var7 = var4.attachments;
            var7 = var7.length;
            var9 = var7 > var9;
            var11 = '';
            var7 = var11;
            if(!var9) { _fun0002_ip = 429; continue _fun0002 }
 359:
            var9 = var3.attachmentIndex;
            var9 = var1 != var9;
            var7 = var11;
            if(!var9) { _fun0002_ip = 429; continue _fun0002 }
 375:
            var4 = var4.attachments;
            var3 = var3.attachmentIndex;
            var4 = var4[var3];
            var9 = _closure1_slot1;
            var11 = _closure1_slot2;
            var3 = 15;
            var3 = var11[var3];
            var3 = var9.bind(var5)(var3);
            var7 = var3.bind(var5)(var4);
            _fun0002_ip = 429; continue _fun0002;
 418:
            var2 = var2.author;
            var7 = var2.username;
 429:
            var4 = _closure1_slot14;
            var3 = _closure1_slot0;
            var2 = _closure1_slot2;
            var14 = 16;
            var2 = var2[var14];
            var2 = var3.bind(var5)(var2);
            var3 = var2.Text;
            var2 = {'variant': 'text-md/semibold', 'lineClamp': 1, 'ellipsizeMode': 'clip'};
            var9 = function onLayout(arg1) {
                var3 = _closure2_slot4;
                var1 = arg1;
                var1 = var1.nativeEvent;
                var1 = var1.layout;
                var2 = var1.width;
                var1 = undefined;
                var1 = var3.bind(var1)(var2);
                return var1;
            };
            var2['onLayout'] = var9;
            var2['children'] = var7;
            var17 = var4.bind(var5)(var3, var2);
            var3 = _closure1_slot6;
            var2 = {};
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
            var7 = _closure1_slot15;
            var6 = {};
            var9 = var19.infoContainer;
            var6['style'] = var9;
            var9 = var17;
            if(!var8) { _fun0002_ip = 778; continue _fun0002 }
 547:
            var12 = _closure1_slot15;
            var11 = _closure1_slot6;
            var8 = {};
            var15 = {};
            var15['flex'] = var16;
            var8['style'] = var15;
            var18 = _closure1_slot14;
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
 778:
            var8 = new Array(2);
            var8[0] = var9;
            var9 = var1 != var13;
            if(!var9) { _fun0002_ip = 843; continue _fun0002 }
 793:
            var12 = _closure1_slot14;
            var11 = _closure1_slot0;
            var10 = _closure1_slot2;
            var10 = var10[var14];
            var10 = var11.bind(var5)(var10);
            var11 = var10.Text;
            var10 = {'variant': 'text-xs/medium', 'color': 'text-secondary', 'lineClamp': 1};
            var10['children'] = var13;
            var9 = var12.bind(var5)(var11, var10);
 843:
            var8[1] = var9;
            var6['children'] = var8;
            var6 = var7.bind(var5)(var3, var6);
            var2['children'] = var6;
            var2 = var4.bind(var5)(var3, var2);
            return var2;
 869:
            return var1;
        }
    };
    var _closure1_slot18 = var4;
    var4 = {};
    var7 = 'function MediaPlaybackPipTsx1(){const{withTiming,visible}=this.__closure;return{opacity:withTiming(visible?1:0,{duration:200})};}';
    var4['code'] = var7;
    var _closure1_slot19 = var4;
    var4 = function PiPControls(arg1) {
        var3 = arg1;
        var1 = var3.message;
        var _closure2_slot0 = var1;
        var14 = var3.handleClosePip;
        var15 = var3.visible;
        var _closure2_slot1 = var15;
        var3 = _closure1_slot16;
        var4 = undefined;
        var16 = var3.bind(var4)();
        var7 = _closure1_slot4;
        var5 = var7.useCallback;
        var3 = new Array(1);
        var3[0] = var1;
        var1 = function() {
            _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                var2 = _closure2_slot0;
                var3 = null;
                if(!(var3 != var2)) { _fun0004_ip = 217; continue _fun0004 }
 16:
                var2 = _closure2_slot0;
                var2 = var2.channel_id;
                if(!(var3 != var2)) { _fun0004_ip = 217; continue _fun0004 }
 32:
                var2 = _closure2_slot0;
                var2 = var2.id;
                if(!(var3 != var2)) { _fun0004_ip = 217; continue _fun0004 }
 48:
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
                var7 = _closure1_slot7;
                var6 = var7.getChannel;
                var5 = var5.channel_id;
                var5 = var6.bind(var7)(var5);
                var3 = var3 == var5;
                var7 = undefined;
                if(var3) { _fun0004_ip = 146; continue _fun0004 }
 136:
                var3 = var5.getGuildId;
                var7 = var3.bind(var5)();
 146:
                var5 = _closure1_slot1;
                var6 = _closure1_slot2;
                var3 = 20;
                var3 = var6[var3];
                var3 = var5.bind(var4)(var3);
                var6 = _closure1_slot13;
                var5 = var6.CHANNEL;
                var1 = _closure2_slot0;
                var2 = var1.channel_id;
                var1 = var1.id;
                var2 = var5.bind(var6)(var7, var2, var1);
                var1 = {'navigationReplace': true, 'openChannel': true};
                var1 = var3.bind(var4)(var2, var1);
 217:
                var1 = undefined;
                return var1;
            }
        };
        var9 = var5.bind(var7)(var1, var3);
        var10 = _closure1_slot0;
        var12 = _closure1_slot2;
        var1 = 21;
        var3 = var12[var1];
        var5 = var10.bind(var4)(var3);
        var3 = var5.useAnimatedStyle;
        var2 = function o() {
            _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
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
                if(!var2) { _fun0005_ip = 47; continue _fun0005 }
 44:
                var3 = 1;
 47:
                var2 = {};
                var6 = 200;
                var2['duration'] = var6;
                var2 = var4.bind(var5)(var3, var2);
                var1['opacity'] = var2;
                return var1;
            }
        };
        var7 = {};
        var8 = 22;
        var8 = var12[var8];
        var8 = var10.bind(var4)(var8);
        var8 = var8.withTiming;
        var7['withTiming'] = var8;
        var7['visible'] = var15;
        var2['__closure'] = var7;
        var7 = 3641278982291.0;
        var2['__workletHash'] = var7;
        var7 = _closure1_slot19;
        var2['__initData'] = var7;
        var7 = var3.bind(var5)(var2);
        var3 = _closure1_slot15;
        var2 = _closure1_slot1;
        var1 = var12[var1];
        var1 = var2.bind(var4)(var1);
        var2 = var1.View;
        var1 = {};
        var8 = var16.pipControls;
        var5 = new Array(2);
        var5[0] = var8;
        var5[1] = var7;
        var1['style'] = var5;
        var8 = _closure1_slot14;
        var5 = 23;
        var5 = var12[var5];
        var5 = var10.bind(var4)(var5);
        var7 = var5.BackgroundBlurFill;
        var5 = {};
        var11 = 0.05;
        var5['blurAmount'] = var11;
        var7 = var8.bind(var4)(var7, var5);
        var5 = new Array(3);
        var5[0] = var7;
        var7 = _closure1_slot5;
        var6 = {};
        var11 = !var15;
        var6['disabled'] = var11;
        var13 = var16.pipButton;
        var11 = new Array(2);
        var11[0] = var13;
        var13 = var16.backButton;
        var11[1] = var13;
        var6['style'] = var11;
        var6['onPress'] = var9;
        var13 = true;
        var6['accessible'] = var13;
        var9 = 24;
        var11 = var12[var9];
        var11 = var10.bind(var4)(var11);
        var18 = var11.intl;
        var17 = var18.string;
        var11 = var12[var9];
        var11 = var10.bind(var4)(var11);
        var11 = var11.t;
        var11 = var11.13/7kZ;
        var11 = var17.bind(var18)(var11);
        var6['accessibilityLabel'] = var11;
        var11 = 25;
        var11 = var12[var11];
        var11 = var10.bind(var4)(var11);
        var18 = var11.ArrowLargeLeftIcon;
        var17 = {};
        var11 = 'sm';
        var17['size'] = var11;
        var17 = var8.bind(var4)(var18, var17);
        var6['children'] = var17;
        var6 = var8.bind(var4)(var7, var6);
        var5[1] = var6;
        var6 = {};
        var15 = !var15;
        var6['disabled'] = var15;
        var17 = var16.pipButton;
        var15 = new Array(2);
        var15[0] = var17;
        var16 = var16.dismissButton;
        var15[1] = var16;
        var6['style'] = var15;
        var6['onPress'] = var14;
        var6['accessible'] = var13;
        var13 = var12[var9];
        var13 = var10.bind(var4)(var13);
        var14 = var13.intl;
        var13 = var14.string;
        var9 = var12[var9];
        var9 = var10.bind(var4)(var9);
        var9 = var9.t;
        var9 = var9.WAI6xs;
        var9 = var13.bind(var14)(var9);
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
    };
    var _closure1_slot20 = var4;
    var4 = 33;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/media_panel/native/MediaPlaybackPip.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function _default() {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
            var1 = _closure1_slot16;
            var4 = undefined;
            var16 = var1.bind(var4)();
            var2 = _closure1_slot4;
            var1 = var2.useRef;
            var19 = null;
            var11 = var1.bind(var2)(var19);
            var _closure2_slot0 = var11;
            var5 = _closure1_slot0;
            var7 = _closure1_slot2;
            var1 = 28;
            var1 = var7[var1];
            var2 = var5.bind(var4)(var1);
            var1 = var2.useMediaPlayerManagerStore;
            var2 = var1.bind(var2)();
            var13 = var2.isPlaying;
            var _closure2_slot1 = var13;
            var18 = var2.progress;
            var _closure2_slot2 = var18;
            var8 = var2.activeMediaPlayerSource;
            var _closure2_slot3 = var8;
            var1 = var2.mediaSourceMessage;
            var2 = var2.closePip;
            var _closure2_slot4 = var2;
            var3 = 13;
            var3 = var7[var3];
            var10 = var5.bind(var4)(var3);
            var9 = var10.useStateFromStores;
            var3 = _closure1_slot8;
            var7 = new Array(1);
            var7[0] = var3;
            var5 = new Array(1);
            var5[0] = var8;
            var3 = function() {
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
                    var2 = _closure2_slot3;
                    var3 = null;
                    var2 = var3 == var2;
                    var4 = undefined;
                    if(var2) { _fun0007_ip = 27; continue _fun0007 }
 18:
                    var2 = _closure2_slot3;
                    var4 = var2.channelId;
 27:
                    var2 = _closure2_slot3;
                    var2 = var3 == var2;
                    var5 = undefined;
                    if(var2) { _fun0007_ip = 49; continue _fun0007 }
 40:
                    var1 = _closure2_slot3;
                    var5 = var1.messageId;
 49:
                    var2 = var3 == var4;
                    var1 = null;
                    if(var2) { _fun0007_ip = 86; continue _fun0007 }
 58:
                    var2 = var3 == var5;
                    var1 = null;
                    if(var2) { _fun0007_ip = 86; continue _fun0007 }
 67:
                    var3 = _closure1_slot8;
                    var2 = var3.getMessage;
                    var1 = var2.bind(var3)(var4, var5);
 86:
                    return var1;
                }
            };
            var3 = var9.bind(var10)(var7, var3, var5);
            if(!(var19 != var3)) { _fun0006_ip = 169; continue _fun0006 }
 166:
            var1 = var3;
 169:
            var3 = function useAnalyticsEffects(arg1, arg2, arg3) {
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
                    _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
 0:
                        var2 = _closure3_slot3;
                        var2 = var2.current;
                        var4 = null;
                        var2 = var4 == var2;
                        if(!var2) { _fun0008_ip = 29; continue _fun0008 }
 21:
                        var3 = _closure3_slot0;
                        var2 = var4 != var3;
 29:
                        if(!var2) { _fun0008_ip = 40; continue _fun0008 }
 32:
                        var3 = _closure3_slot1;
                        var2 = var4 != var3;
 40:
                        if(!var2) { _fun0008_ip = 51; continue _fun0008 }
 43:
                        var3 = _closure3_slot2;
                        var2 = var4 != var3;
 51:
                        if(!var2) { _fun0008_ip = 92; continue _fun0008 }
 54:
                        var3 = _closure3_slot3;
                        var2 = {};
                        var5 = _closure3_slot1;
                        var2['initialProgress'] = var5;
                        var5 = _closure3_slot0;
                        var2['activeMediaPlayerSource'] = var5;
                        var5 = _closure3_slot2;
                        var2['message'] = var5;
                        var3['current'] = var2;
 92:
                        var2 = _closure3_slot3;
                        var2 = var2.current;
                        var2 = var4 != var2;
                        if(!var2) { _fun0008_ip = 116; continue _fun0008 }
 108:
                        var3 = _closure3_slot1;
                        var2 = var4 != var3;
 116:
                        if(!var2) { _fun0008_ip = 138; continue _fun0008 }
 119:
                        var2 = _closure3_slot3;
                        var2 = var2.current;
                        var1 = _closure3_slot1;
                        var2['finalProgress'] = var1;
 138:
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
                        _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
 0:
                            var1 = _closure3_slot3;
                            var1 = var1.current;
                            var3 = null;
                            if(!(var3 == var1)) { _fun0009_ip = 20; continue _fun0009 }
 18:
                            var1 = {};
 20:
                            var9 = var1.activeMediaPlayerSource;
                            var7 = var1.message;
                            var8 = var1.initialProgress;
                            var6 = var1.finalProgress;
                            var4 = var3 == var9;
                            var1 = undefined;
                            var2 = undefined;
                            if(var4) { _fun0009_ip = 60; continue _fun0009 }
 54:
                            var2 = var9.attachmentIndex;
 60:
                            var2 = var3 != var2;
                            var4 = null;
                            if(!var2) { _fun0009_ip = 116; continue _fun0009 }
 69:
                            var5 = var3 == var7;
                            var2 = undefined;
                            if(var5) { _fun0009_ip = 113; continue _fun0009 }
 78:
                            var5 = var7.getContentMessage;
                            var5 = var5.bind(var7)();
                            var10 = var3 == var5;
                            var2 = undefined;
                            if(var10) { _fun0009_ip = 113; continue _fun0009 }
 97:
                            var10 = var5.attachments;
                            var5 = var9.attachmentIndex;
                            var2 = var10[var5];
 113:
                            var4 = var2;
 116:
                            var5 = {};
                            var10 = var3 == var9;
                            var2 = undefined;
                            if(var10) { _fun0009_ip = 132; continue _fun0009 }
 127:
                            var2 = var9.messageId;
 132:
                            var5['message_id'] = var2;
                            var9 = var3 == var7;
                            var2 = undefined;
                            if(var9) { _fun0009_ip = 157; continue _fun0009 }
 146:
                            var9 = var7.author;
                            var2 = var9.id;
 157:
                            var5['sender_user_id'] = var2;
                            var9 = var3 == var4;
                            var2 = undefined;
                            if(var9) { _fun0009_ip = 177; continue _fun0009 }
 171:
                            var2 = var4.content_type;
 177:
                            var5['type'] = var2;
                            var4 = var3 == var7;
                            var2 = undefined;
                            if(var4) { _fun0009_ip = 233; continue _fun0009 }
 190:
                            var4 = var7.getContentMessage;
                            var9 = var4.bind(var7)();
                            var4 = var3 == var9;
                            var2 = undefined;
                            if(var4) { _fun0009_ip = 233; continue _fun0009 }
 209:
                            var7 = var9.hasFlag;
                            var4 = _closure1_slot12;
                            var4 = var4.IS_VOICE_MESSAGE;
                            var2 = var7.bind(var9)(var4);
 233:
                            var5['is_voice_message'] = var2;
                            var7 = _closure1_slot17;
                            var9 = var3 == var6;
                            var4 = undefined;
                            if(var9) { _fun0009_ip = 261; continue _fun0009 }
 256:
                            var4 = var6.duration;
 261:
                            var4 = var7.bind(var1)(var4);
                            var5['total_duration_secs'] = var4;
                            var7 = _closure1_slot17;
                            var9 = var3 == var8;
                            var4 = undefined;
                            if(var9) { _fun0009_ip = 290; continue _fun0009 }
 284:
                            var4 = var8.time;
 290:
                            var4 = var7.bind(var1)(var4);
                            var5['pip_playback_start_time_secs'] = var4;
                            var4 = _closure1_slot17;
                            var7 = var3 == var6;
                            var3 = undefined;
                            if(var7) { _fun0009_ip = 321; continue _fun0009 }
 315:
                            var3 = var6.time;
 321:
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
                            var2 = _closure1_slot11;
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
            var3 = var3.bind(var4)(var8, var18, var1);
            var12 = _closure1_slot4;
            var3 = var12.useState;
            var5 = false;
            var9 = var3.bind(var12)(var5);
            var7 = _closure1_slot3;
            var3 = 2;
            var3 = var7.bind(var4)(var9, var3);
            var17 = 0;
            var7 = var3[var17];
            var _closure2_slot5 = var7;
            var10 = 1;
            var3 = var3[var10];
            var _closure2_slot6 = var3;
            var15 = var12.useEffect;
            var9 = new Array(3);
            var9[0] = var7;
            var9[1] = var3;
            var9[2] = var13;
            var3 = function() {
                _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
 0:
                    var2 = _closure2_slot5;
                    if(!var2) { _fun0010_ip = 45; continue _fun0010 }
 12:
                    var2 = global;
                    var5 = var2.setTimeout;
                    var4 = undefined;
                    var3 = function() {
                        _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
 0:
                            var2 = _closure2_slot1;
                            if(!var2) { _fun0011_ip = 23; continue _fun0011 }
 10:
                            var3 = _closure2_slot6;
                            var2 = undefined;
                            var1 = false;
                            var1 = var3.bind(var2)(var1);
 23:
                            var1 = undefined;
                            return var1;
                        }
                    };
                    var2 = 3000;
                    var2 = var5.bind(var4)(var3, var2);
                    var _closure3_slot0 = var2;
 45:
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
            var3 = var15.bind(var12)(var3, var9);
            var9 = var12.useContext;
            var15 = _closure1_slot1;
            var20 = _closure1_slot2;
            var3 = 29;
            var3 = var20[var3];
            var3 = var15.bind(var4)(var3);
            var3 = var9.bind(var12)(var3);
            var15 = var3.dismissPanel;
            var _closure2_slot7 = var15;
            var9 = var12.useCallback;
            var3 = new Array(2);
            var3[0] = var15;
            var3[1] = var2;
            var2 = function() {
                var3 = _closure2_slot7;
                var1 = undefined;
                var3 = var3.bind(var1)();
                var2 = _closure2_slot4;
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
            var22 = var9.bind(var12)(var2, var3);
            var2 = function usePlaybackCompletionEffects(arg1, arg2) {
                var7 = arg1;
                var3 = arg2;
                var _closure3_slot0 = var7;
                var _closure3_slot1 = var3;
                var5 = _closure1_slot4;
                var6 = var5.useState;
                var4 = false;
                var8 = var6.bind(var5)(var4);
                var6 = _closure1_slot3;
                var1 = undefined;
                var4 = 2;
                var6 = var6.bind(var1)(var8, var4);
                var4 = 0;
                var9 = var6[var4];
                var _closure3_slot2 = var9;
                var4 = 1;
                var6 = var6[var4];
                var _closure3_slot3 = var6;
                var8 = var5.useEffect;
                var4 = new Array(3);
                var4[0] = var9;
                var4[1] = var6;
                var4[2] = var3;
                var3 = function() {
                    _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
 0:
                        var2 = _closure3_slot2;
                        if(!var2) { _fun0012_ip = 45; continue _fun0012 }
 12:
                        var2 = global;
                        var5 = var2.setTimeout;
                        var4 = undefined;
                        var3 = function() {
                            var3 = _closure3_slot1;
                            var1 = undefined;
                            var3 = var3.bind(var1)();
                            var3 = _closure3_slot3;
                            var2 = false;
                            var2 = var3.bind(var1)(var2);
                            return var1;
                        };
                        var2 = 2000;
                        var2 = var5.bind(var4)(var3, var2);
                        var _closure4_slot0 = var2;
 45:
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
                var3 = var8.bind(var5)(var3, var4);
                var4 = var5.useEffect;
                var3 = new Array(2);
                var3[0] = var7;
                var3[1] = var6;
                var2 = function() {
                    _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
 0:
                        var2 = _closure3_slot0;
                        var1 = null;
                        if(!(var1 != var2)) { _fun0013_ip = 72; continue _fun0013 }
 13:
                        var3 = _closure3_slot3;
                        var6 = _closure1_slot0;
                        var5 = _closure1_slot2;
                        var2 = 28;
                        var5 = var5[var2];
                        var2 = undefined;
                        var6 = var6.bind(var2)(var5);
                        var5 = var6.isPlaybackComplete;
                        var4 = _closure3_slot0;
                        var4 = var5.bind(var6)(var4);
                        var1 = var1 == var4;
                        if(var1) { _fun0013_ip = 67; continue _fun0013 }
 64:
                        var1 = var4;
 67:
                        var1 = var3.bind(var2)(var1);
 72:
                        var1 = undefined;
                        return var1;
                    }
                };
                var2 = var4.bind(var5)(var2, var3);
                return var1;
            };
            var2 = var2.bind(var4)(var18, var22);
            var9 = var12.useEffect;
            var3 = new Array(2);
            var3[0] = var11;
            var3[1] = var18;
            var2 = function() {
                _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
 0:
                    var2 = _closure2_slot0;
                    var2 = var2.current;
                    var3 = null;
                    if(!(var3 != var2)) { _fun0014_ip = 81; continue _fun0014 }
 18:
                    var2 = _closure2_slot2;
                    var2 = var3 == var2;
                    var4 = 0;
                    if(var2) { _fun0014_ip = 57; continue _fun0014 }
 31:
                    var2 = _closure2_slot2;
                    var3 = var2.time;
                    var2 = var2.duration;
                    var3 = var3 / var2;
                    var2 = 100;
                    var4 = var3 * var2;
 57:
                    var1 = _closure2_slot0;
                    var3 = var1.current;
                    var2 = var3.animate;
                    var1 = 100;
                    var1 = var2.bind(var3)(var4, var1);
 81:
                    var1 = undefined;
                    return var1;
                }
            };
            var2 = var9.bind(var12)(var2, var3);
            var9 = var12.useCallback;
            var3 = new Array(1);
            var3[0] = var13;
            var2 = function() {
                _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
 0:
                    var3 = _closure2_slot1;
                    var5 = _closure1_slot1;
                    var4 = _closure1_slot2;
                    var1 = 28;
                    var4 = var4[var1];
                    var1 = undefined;
                    var4 = var5.bind(var1)(var4);
                    if(var3) { _fun0015_ip = 47; continue _fun0015 }
 35:
                    var3 = var4.playCurrentPlayer;
                    var3 = var3.bind(var4)();
                    _fun0015_ip = 68; continue _fun0015;
 47:
                    var3 = var4.pauseCurrentPlayer;
                    var3 = var3.bind(var4)();
                    var3 = _closure2_slot6;
                    var2 = true;
                    var2 = var3.bind(var1)(var2);
 68:
                    return var1;
                }
            };
            var15 = var9.bind(var12)(var2, var3);
            var3 = _closure1_slot14;
            var12 = _closure1_slot0;
            var20 = _closure1_slot2;
            var9 = var1;
            if(var13) { _fun0006_ip = 445; continue _fun0006 }
 425:
            var1 = 31;
            var1 = var20[var1];
            var1 = var12.bind(var4)(var1);
            var2 = var1.PlayIcon;
            _fun0006_ip = 463; continue _fun0006;
 445:
            var1 = 30;
            var1 = var20[var1];
            var1 = var12.bind(var4)(var1);
            var2 = var1.PauseIcon;
 463:
            var1 = {};
            var23 = _closure1_slot1;
            var21 = _closure1_slot2;
            var20 = 11;
            var12 = var21[var20];
            var12 = var23.bind(var4)(var12);
            var12 = var12.colors;
            var12 = var12.WHITE;
            var1['color'] = var12;
            var12 = 'md';
            var1['size'] = var12;
            var12 = var3.bind(var4)(var2, var1);
            var3 = _closure1_slot15;
            var2 = _closure1_slot5;
            var1 = {};
            var23 = var16.container;
            var1['style'] = var23;
            var1['activeOpacity'] = var10;
            var6 = function onPress() {
                _fun0016: for(var _fun0016_ip = 0; ; ) switch(_fun0016_ip) {
 0:
                    var2 = _closure2_slot1;
                    if(!var2) { _fun0016_ip = 28; continue _fun0016 }
 10:
                    var3 = _closure2_slot6;
                    var1 = _closure2_slot5;
                    var2 = !var1;
                    var1 = undefined;
                    var1 = var3.bind(var1)(var2);
 28:
                    var1 = undefined;
                    return var1;
                }
            };
            var1['onPress'] = var6;
            var1['accessible'] = var5;
            var10 = _closure1_slot14;
            var6 = _closure1_slot20;
            var5 = {};
            var5['message'] = var9;
            var5['handleClosePip'] = var22;
            var5['visible'] = var7;
            var6 = var10.bind(var4)(var6, var5);
            var5 = new Array(3);
            var5[0] = var6;
            var7 = _closure1_slot18;
            var6 = {};
            var6['message'] = var9;
            var6['activeMediaPlayerSource'] = var8;
            var6 = var10.bind(var4)(var7, var6);
            var5[1] = var6;
            var7 = _closure1_slot6;
            var6 = {};
            var8 = var16.actionContainer;
            var6['style'] = var8;
            var9 = _closure1_slot0;
            var8 = 32;
            var8 = var21[var8];
            var8 = var9.bind(var4)(var8);
            var9 = var8.AnimatedCircularProgress;
            var8 = {'style': null, 'size': 48, 'width': 2, 'prefill': null, 'fill': 0, 'rotation': 0, 'lineCap': 'round'};
            var21 = var16.progressBar;
            var8['style'] = var21;
            var19 = var19 == var18;
            var17 = 0;
            if(var19) { _fun0006_ip = 712; continue _fun0006 }
 690:
            var19 = var18.time;
            var18 = var18.duration;
            var19 = var19 / var18;
            var18 = 100;
            var17 = var19 * var18;
 712:
            var8['prefill'] = var17;
            var8['ref'] = var11;
            var18 = _closure1_slot0;
            var11 = _closure1_slot2;
            var17 = 12;
            var19 = var11[var17];
            var23 = var18.bind(var4)(var19);
            var22 = var23.useToken;
            var19 = _closure1_slot1;
            var21 = var11[var20];
            var21 = var19.bind(var4)(var21);
            var21 = var21.colors;
            var21 = var21.REDESIGN_BUTTON_PRIMARY_BACKGROUND;
            var21 = var22.bind(var23)(var21);
            var8['tintColor'] = var21;
            var17 = var11[var17];
            var18 = var18.bind(var4)(var17);
            var17 = var18.useToken;
            var11 = var11[var20];
            var11 = var19.bind(var4)(var11);
            var11 = var11.colors;
            var11 = var11.INTERACTIVE_MUTED;
            var11 = var17.bind(var18)(var11);
            var8['backgroundColor'] = var11;
            var9 = var10.bind(var4)(var9, var8);
            var8 = new Array(2);
            var8[0] = var9;
            var11 = _closure1_slot14;
            var10 = _closure1_slot5;
            var9 = {};
            var16 = var16.playPauseButton;
            var9['style'] = var16;
            var9['onPress'] = var15;
            var17 = _closure1_slot0;
            var18 = _closure1_slot2;
            var14 = 24;
            var15 = var18[var14];
            var15 = var17.bind(var4)(var15);
            var16 = var15.intl;
            var15 = var16.string;
            var14 = var18[var14];
            var14 = var17.bind(var4)(var14);
            var14 = var14.t;
            if(var13) { _fun0006_ip = 924; continue _fun0006 }
 911:
            var13 = var14.RscU7O;
            var13 = var15.bind(var16)(var13);
            _fun0006_ip = 935; continue _fun0006;
 924:
            var14 = var14.ZcgDJS;
            var13 = var15.bind(var16)(var14);
 935:
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