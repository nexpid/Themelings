// app/modules/external_pip/ExternalPipViewVideo.android.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var16 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var16;
    var _closure1_slot2 = var6;
    var1 = function ExternalPipViewVideoUnavailable(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arg1;
            var9 = var1.wasStream;
            var1 = _closure1_slot14;
            var4 = undefined;
            var11 = var1.bind(var4)();
            var3 = _closure1_slot12;
            var2 = _closure1_slot6;
            var1 = {};
            var5 = var11.unavailable;
            var1['style'] = var5;
            var8 = _closure1_slot11;
            var7 = _closure1_slot0;
            var12 = _closure1_slot2;
            if(var9) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var5 = 10;
            var5 = var12[var5];
            var5 = var7.bind(var4)(var5);
            var6 = var5.CircleInformationIcon;
            var5 = {};
            var6 = var8.bind(var4)(var6, var5);
            _fun0001_ip = 4; continue _fun0001;
case 2:
            var5 = 9;
            var5 = var12[var5];
            var5 = var7.bind(var4)(var5);
            var7 = var5.StreamEnded;
            var5 = {};
            var12 = var11.unavaiableImage;
            var5['style'] = var12;
            var6 = var8.bind(var4)(var7, var5);
case 4:
            var5 = new Array(2);
            var5[0] = var6;
            var8 = _closure1_slot11;
            var7 = _closure1_slot0;
            var12 = _closure1_slot2;
            var6 = 11;
            var6 = var12[var6];
            var6 = var7.bind(var4)(var6);
            var7 = var6.Text;
            var6 = {'variant': 'text-md/semibold', 'style': null, 'lineClamp': 1};
            var11 = var11.unavailableText;
            var6['style'] = var11;
            var11 = _closure1_slot0;
            var14 = _closure1_slot2;
            var10 = 12;
            var12 = var14[var10];
            var12 = var11.bind(var4)(var12);
            var13 = var12.intl;
            if(var9) { _fun0001_ip = 5; continue _fun0001 }
case 6:
            var12 = var13.string;
            var9 = var14[var10];
            var9 = var11.bind(var4)(var9);
            var9 = var9.t;
            var9 = var9.Nzo5nz;
            var9 = var12.bind(var13)(var9);
            _fun0001_ip = 7; continue _fun0001;
case 5:
            var12 = var13.formatToMarkdownString;
            var10 = var14[var10];
            var10 = var11.bind(var4)(var10);
            var10 = var10.t;
            var11 = var10["1Ww0Hi"];
            var10 = {};
            var9 = var12.bind(var13)(var11, var10);
case 7:
            var6['children'] = var9;
            var6 = var8.bind(var4)(var7, var6);
            var5[1] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot15 = var1;
    var1 = function ExternalPipViewVideoUser(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var2 = arg1;
            var3 = var2.userId;
            var _closure2_slot0 = var3;
            var3 = var2.channelId;
            var _closure2_slot1 = var3;
            var9 = var2.speaking;
            var2 = _closure1_slot14;
            var4 = undefined;
            var5 = var2.bind(var4)();
            var3 = _closure1_slot0;
            var7 = _closure1_slot2;
            var2 = 13;
            var8 = var7[var2];
            var12 = var3.bind(var4)(var8);
            var11 = var12.useStateFromStores;
            var8 = _closure1_slot9;
            var10 = new Array(1);
            var10[0] = var8;
            var8 = function() {
                var3 = _closure1_slot9;
                var2 = var3.getUser;
                var1 = _closure2_slot0;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var14 = var11.bind(var12)(var10, var8);
            var2 = var7[var2];
            var7 = var3.bind(var4)(var2);
            var3 = var7.useStateFromStores;
            var8 = _closure1_slot8;
            var2 = new Array(1);
            var2[0] = var8;
            var1 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var3 = _closure1_slot8;
                    var2 = var3.getChannel;
                    var1 = _closure2_slot1;
                    var2 = var2.bind(var3)(var1);
                    var1 = null;
                    var3 = var1 == var2;
                    var1 = undefined;
                    if(var3) { _fun0003_ip = 8; continue _fun0003 }
case 9:
                    var1 = var2.guild_id;
case 8:
                    return var1;
                }
            };
            var13 = var3.bind(var7)(var2, var1);
            var3 = _closure1_slot11;
            var2 = _closure1_slot6;
            var1 = {};
            var5 = var5.user;
            var1['style'] = var5;
            var5 = null;
            var7 = var5 != var14;
            if(!var7) { _fun0002_ip = 10; continue _fun0002 }
case 11:
            var8 = _closure1_slot11;
            var11 = _closure1_slot0;
            var12 = _closure1_slot2;
            var10 = 14;
            var6 = var12[var10];
            var6 = var11.bind(var4)(var6);
            var7 = var6.Avatar;
            var6 = {};
            var6['user'] = var14;
            var14 = var14.avatarDecoration;
            var6['avatarDecoration'] = var14;
            var6['guildId'] = var13;
            var10 = var12[var10];
            var10 = var11.bind(var4)(var10);
            var10 = var10.AvatarSizes;
            var10 = var10.XXLARGE;
            var6['size'] = var10;
            var6['animate'] = var9;
            var6['speaking'] = var9;
            var5 = var8.bind(var4)(var7, var6);
case 10:
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot16 = var1;
    var1 = function ExternalPipViewVideoStream(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var2 = arg1;
            var15 = var2.streamId;
            var _closure2_slot0 = var15;
            var7 = var2.userId;
            var3 = _closure1_slot0;
            var18 = _closure1_slot2;
            var2 = 15;
            var2 = var18[var2];
            var4 = undefined;
            var6 = var3.bind(var4)(var2);
            var5 = var6.useSurfaceDirectRendererExperiment;
            var2 = {};
            var8 = 'ExternalPipViewVideoStream';
            var2['location'] = var8;
            var17 = var5.bind(var6)(var7, var2);
            var2 = function useStreamReady(arg1) {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                    var2 = arg1;
                    var _closure3_slot0 = var2;
                    var11 = undefined;
                    var8 = undefined;
                    if(!(var8 === var8)) { _fun0005_ip = 12; continue _fun0005 }
case 13:
                    var8 = 300;
case 12:
                    var _closure3_slot1 = var8;
                    var _closure3_slot2 = var11;
                    var _closure3_slot3 = var11;
                    var _closure3_slot4 = var11;
                    var4 = _closure1_slot4;
                    var3 = var4.useState;
                    var4 = var3.bind(var4)(var11);
                    var3 = _closure1_slot3;
                    var10 = 2;
                    var6 = var3.bind(var11)(var4, var10);
                    var3 = 0;
                    var4 = var6[var3];
                    _closure3_slot2 = var4;
                    var7 = 1;
                    var6 = var6[var7];
                    _closure3_slot3 = var6;
                    var12 = _closure1_slot4;
                    var9 = var12.useState;
                    var6 = false;
                    var9 = var9.bind(var12)(var6);
                    var6 = _closure1_slot3;
                    var6 = var6.bind(var11)(var9, var10);
                    var3 = var6[var3];
                    var6 = var6[var7];
                    _closure3_slot4 = var6;
                    var9 = _closure1_slot4;
                    var7 = var9.useCallback;
                    var6 = new Array(1);
                    var6[0] = var2;
                    var2 = function() {
                        var3 = _closure3_slot3;
                        var2 = _closure3_slot0;
                        var1 = undefined;
                        var1 = var3.bind(var1)(var2);
                        return var1;
                    };
                    var2 = var7.bind(var9)(var2, var6);
                    var7 = _closure1_slot4;
                    var6 = var7.useEffect;
                    var5 = new Array(2);
                    var5[0] = var4;
                    var5[1] = var8;
                    var1 = function() {
                        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                            var4 = _closure3_slot2;
                            var3 = null;
                            if(!(var3 != var4)) { _fun0006_ip = 14; continue _fun0006 }
case 15:
                            var5 = _closure3_slot4;
                            var3 = undefined;
                            var4 = false;
                            var4 = var5.bind(var3)(var4);
                            return var3;
case 14:
                            var3 = global;
                            var5 = var3.setTimeout;
                            var4 = _closure3_slot1;
                            var3 = undefined;
                            var2 = function() {
                                var3 = _closure3_slot4;
                                var1 = undefined;
                                var2 = true;
                                var2 = var3.bind(var1)(var2);
                                return var1;
                            };
                            var2 = var5.bind(var3)(var2, var4);
                            var _closure4_slot0 = var2;
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
                    var1 = var6.bind(var7)(var1, var5);
                    var1 = {};
                    var1['streamReady'] = var4;
                    var1['streamReadLongTime'] = var3;
                    var1['streamReadyCallback'] = var2;
                    return var1;
                }
            };
            var2 = var2.bind(var4)(var15);
            var6 = var2.streamReady;
            var _closure2_slot1 = var6;
            var7 = var2.streamReadLongTime;
            var12 = var2.streamReadyCallback;
            var2 = _closure1_slot14;
            var14 = var2.bind(var4)();
            var _closure2_slot2 = var14;
            var9 = _closure1_slot4;
            var8 = var9.useMemo;
            var5 = new Array(2);
            var5[0] = var14;
            var5[1] = var6;
            var2 = function() {
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                    var1 = _closure2_slot2;
                    var2 = var1.video;
                    var1 = new Array(2);
                    var1[0] = var2;
                    var2 = {};
                    var4 = _closure2_slot1;
                    var3 = null;
                    var4 = var3 == var4;
                    var3 = 1;
                    if(!var4) { _fun0007_ip = 16; continue _fun0007 }
case 17:
                    var3 = 0;
case 16:
                    var2['opacity'] = var3;
                    var1[1] = var2;
                    return var1;
                }
            };
            var16 = var8.bind(var9)(var2, var5);
            var2 = 16;
            var2 = var18[var2];
            var5 = var3.bind(var4)(var2);
            var3 = var5.useToken;
            var8 = _closure1_slot1;
            var2 = 8;
            var2 = var18[var2];
            var2 = var8.bind(var4)(var2);
            var2 = var2.colors;
            var2 = var2.TEXT_FEEDBACK_INFO;
            var13 = var3.bind(var5)(var2);
            var3 = _closure1_slot7;
            var2 = var3.get;
            var9 = var2.bind(var3)();
            var _closure2_slot3 = var9;
            var5 = _closure1_slot4;
            var3 = var5.useCallback;
            var2 = new Array(2);
            var2[0] = var15;
            var2[1] = var9;
            var1 = function(arg1) {
                _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                    var3 = _closure2_slot0;
                    var2 = null;
                    if(!(var2 != var3)) { _fun0008_ip = 18; continue _fun0008 }
case 19:
                    var2 = arg1;
                    var2 = var2.nativeEvent;
                    var2 = var2.layout;
                    var7 = var2.width;
                    var6 = var2.height;
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var2 = 17;
                    var3 = var3[var2];
                    var2 = undefined;
                    var5 = var4.bind(var2)(var3);
                    var4 = var5.updateVideoSize;
                    var3 = _closure2_slot0;
                    var2 = {};
                    var1 = _closure2_slot3;
                    var7 = var7 * var1;
                    var2['width'] = var7;
                    var1 = var6 * var1;
                    var2['height'] = var1;
                    var1 = 1;
                    var1 = var4.bind(var5)(var3, var2, var1);
case 18:
                    var1 = undefined;
                    return var1;
                }
            };
            var11 = var3.bind(var5)(var1, var2);
            var3 = _closure1_slot12;
            var2 = _closure1_slot13;
            var1 = {};
            var9 = _closure1_slot11;
            var5 = 18;
            var5 = var18[var5];
            var8 = var8.bind(var4)(var5);
            var5 = {};
            var5['useSurfaceDirectRenderer'] = var17;
            var5['style'] = var16;
            var5['streamId'] = var15;
            var5['onReady'] = var12;
            var5['onLayout'] = var11;
            var8 = var9.bind(var4)(var8, var5);
            var5 = new Array(2);
            var5[0] = var8;
            var8 = null;
            var9 = var8 == var6;
            var6 = null;
            if(!var9) { _fun0004_ip = 20; continue _fun0004 }
case 21:
            var6 = null;
            if(!var7) { _fun0004_ip = 20; continue _fun0004 }
case 22:
            var9 = _closure1_slot11;
            var8 = _closure1_slot6;
            var7 = {};
            var11 = var14.videoUnavailableWrap;
            var7['style'] = var11;
            var12 = _closure1_slot11;
            var11 = _closure1_slot5;
            var10 = {};
            var14 = var14.videoUnavailableSpinner;
            var10['style'] = var14;
            var14 = 'large';
            var10['size'] = var14;
            var10['color'] = var13;
            var10 = var12.bind(var4)(var11, var10);
            var7['children'] = var10;
            var6 = var9.bind(var4)(var8, var7);
case 20:
            var5[1] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot17 = var1;
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
    var4 = var16.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var20 = 1;
    var7 = var6[var20];
    var4 = metroImportAll;
    var7 = var4.bind(var1)(var7);
    var _closure1_slot4 = var7;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var8 = var4.ActivityIndicator;
    var _closure1_slot5 = var8;
    var17 = var4.StyleSheet;
    var8 = var4.View;
    var _closure1_slot6 = var8;
    var4 = var4.PixelRatio;
    var _closure1_slot7 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var16.bind(var1)(var4);
    var _closure1_slot8 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var16.bind(var1)(var4);
    var _closure1_slot9 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.ParticipantTypes;
    var _closure1_slot10 = var4;
    var4 = 6;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var8 = var4.jsx;
    var _closure1_slot11 = var8;
    var8 = var4.jsxs;
    var _closure1_slot12 = var8;
    var4 = var4.Fragment;
    var _closure1_slot13 = var4;
    var4 = 7;
    var4 = var6[var4];
    var9 = var5.bind(var1)(var4);
    var8 = var9.createStyles;
    var4 = {};
    var10 = {};
    var25 = var17.absoluteFillObject;
    var26 = var10;
    var11 = copyDataProperties(var26, var25);
    var14 = 8;
    var11 = var6[var14];
    var11 = var16.bind(var1)(var11);
    var11 = var11.colors;
    var11 = var11.BACKGROUND_SURFACE_HIGH;
    var19 = 'backgroundColor';
    var10[18] = var11;
    var4['container'] = var10;
    var10 = {};
    var25 = var17.absoluteFillObject;
    var26 = var10;
    var11 = copyDataProperties(var26, var25);
    var4['video'] = var10;
    var10 = {};
    var25 = var17.absoluteFillObject;
    var26 = var10;
    var11 = copyDataProperties(var26, var25);
    var11 = var6[var14];
    var11 = var16.bind(var1)(var11);
    var11 = var11.spacing;
    var11 = var11.PX_16;
    var15 = 'margin';
    var10[14] = var11;
    var11 = var6[var14];
    var11 = var16.bind(var1)(var11);
    var11 = var11.radii;
    var11 = var11.sm;
    var18 = 'borderRadius';
    var10[17] = var11;
    var12 = 'center';
    var11 = 'justifyContent';
    var10[10] = var12;
    var13 = 'alignContent';
    var10[12] = var12;
    var22 = 'row';
    var13 = 'flexDirection';
    var10[12] = var22;
    var13 = 'alignItems';
    var10[12] = var12;
    var21 = 'wrap';
    var23 = 'flexWrap';
    var10[22] = var21;
    var23 = 'flex';
    var10[22] = var20;
    var4['videoUnavailableWrap'] = var10;
    var10 = {};
    var23 = var6[var14];
    var23 = var16.bind(var1)(var23);
    var23 = var23.spacing;
    var23 = var23.PX_16;
    var10['marginTop'] = var23;
    var4['videoUnavailableSpinner'] = var10;
    var10 = {};
    var23 = var6[var14];
    var23 = var16.bind(var1)(var23);
    var23 = var23.colors;
    var23 = var23.BACKGROUND_SURFACE_HIGH;
    var10['backgroundColor'] = var23;
    var23 = var6[var14];
    var23 = var16.bind(var1)(var23);
    var23 = var23.radii;
    var23 = var23.sm;
    var10['borderRadius'] = var23;
    var23 = var6[var14];
    var23 = var16.bind(var1)(var23);
    var23 = var23.spacing;
    var23 = var23.PX_8;
    var10['padding'] = var23;
    var23 = var6[var14];
    var23 = var16.bind(var1)(var23);
    var23 = var23.spacing;
    var23 = var23.PX_8;
    var10['margin'] = var23;
    var10['justifyContent'] = var12;
    var10['alignContent'] = var12;
    var10['alignItems'] = var12;
    var10['flexDirection'] = var22;
    var10['flexWrap'] = var21;
    var10['flex'] = var20;
    var4['unavailable'] = var10;
    var10 = {};
    var20 = var6[var14];
    var20 = var16.bind(var1)(var20);
    var20 = var20.spacing;
    var20 = var20.PX_4;
    var10['marginLeft'] = var20;
    var10['textAlign'] = var12;
    var4['unavailableText'] = var10;
    var10 = {'marginBottom': null, 'resizeMode': 'contain', 'aspectRatio': 2.5, 'width': '80%'};
    var20 = var6[var14];
    var20 = var16.bind(var1)(var20);
    var20 = var20.spacing;
    var20 = var20.PX_8;
    var10['marginBottom'] = var20;
    var4['unavaiableImage'] = var10;
    var10 = {};
    var25 = var17.absoluteFillObject;
    var26 = var10;
    var17 = copyDataProperties(var26, var25);
    var17 = var6[var14];
    var17 = var16.bind(var1)(var17);
    var17 = var17.colors;
    var17 = var17.BACKGROUND_BASE_LOWEST;
    var10[18] = var17;
    var17 = var6[var14];
    var17 = var16.bind(var1)(var17);
    var17 = var17.radii;
    var17 = var17.sm;
    var10[17] = var17;
    var14 = var6[var14];
    var14 = var16.bind(var1)(var14);
    var14 = var14.spacing;
    var14 = var14.PX_8;
    var10[14] = var14;
    var10[12] = var12;
    var10[10] = var12;
    var4['user'] = var10;
    var4 = var8.bind(var9)(var4);
    var _closure1_slot14 = var4;
    var4 = var7.memo;
    var2 = function ExternalPipViewVideo(arg1) {
        _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
            var1 = arg1;
            var5 = var1.onLayout;
            var1 = _closure1_slot14;
            var4 = undefined;
            var7 = var1.bind(var4)();
            var2 = _closure1_slot1;
            var3 = _closure1_slot2;
            var1 = 19;
            var1 = var3[var1];
            var1 = var2.bind(var4)(var1);
            var1 = var1.bind(var4)();
            var13 = var1.channelId;
            var10 = var1.selectedParticipantStreamId;
            var9 = var1.selectedParticipantUserId;
            var12 = var1.selectedParticipantSpeaking;
            var15 = var1.focusedParticipantType;
            var8 = _closure1_slot4;
            var3 = var8.useEffect;
            var2 = new Array(3);
            var2[0] = var10;
            var2[1] = var9;
            var2[2] = var15;
            var1 = function() {
                var3 = _closure1_slot1;
                var2 = _closure1_slot2;
                var1 = 20;
                var2 = var2[var1];
                var1 = undefined;
                var3 = var3.bind(var1)(var2);
                var2 = var3.refreshPipUi;
                var2 = var2.bind(var3)();
                return var1;
            };
            var1 = var3.bind(var8)(var1, var2);
            var3 = _closure1_slot11;
            var2 = _closure1_slot6;
            var1 = {};
            var7 = var7.container;
            var1['style'] = var7;
            var1['onLayout'] = var5;
            var5 = null;
            if(!(var5 == var10)) { _fun0009_ip = 23; continue _fun0009 }
case 24:
            if(!(var5 == var9)) { _fun0009_ip = 25; continue _fun0009 }
case 26:
            var8 = _closure1_slot11;
            var7 = _closure1_slot15;
            var5 = {};
            var11 = _closure1_slot10;
            var11 = var11.STREAM;
            var11 = var15 === var11;
            if(var11) { _fun0009_ip = 27; continue _fun0009 }
case 28:
            var14 = _closure1_slot10;
            var14 = var14.HIDDEN_STREAM;
            var11 = var15 === var14;
case 27:
            var5['wasStream'] = var11;
            var5 = var8.bind(var4)(var7, var5);
            _fun0009_ip = 29; continue _fun0009;
case 25:
            var11 = _closure1_slot11;
            var8 = _closure1_slot16;
            var7 = {};
            var7['userId'] = var9;
            var7['channelId'] = var13;
            var7['speaking'] = var12;
            var5 = var11.bind(var4)(var8, var7);
case 29:
            _fun0009_ip = 30; continue _fun0009;
case 23:
            var8 = _closure1_slot11;
            var7 = _closure1_slot17;
            var6 = {};
            var6['streamId'] = var10;
            var6['userId'] = var9;
            var5 = var8.bind(var4)(var7, var6);
case 30:
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var2 = var4.bind(var7)(var2);
    var4 = 21;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/external_pip/ExternalPipViewVideo.android.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();