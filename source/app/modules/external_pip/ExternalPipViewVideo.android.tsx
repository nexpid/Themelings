// app/modules/external_pip/ExternalPipViewVideo.android.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var16 = native3;
    var3 = native6;
    var6 = native7;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var16;
    var _closure1_slot2 = var6;
    var1 = function ExternalPipViewVideoUnavailable(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var1 = arg1;
            var9 = var1.wasStream;
            var1 = _closure1_slot13;
            var4 = undefined;
            var11 = var1.bind(var4)();
            var3 = _closure1_slot11;
            var2 = _closure1_slot6;
            var1 = {};
            var5 = var11.unavailable;
            var1['style'] = var5;
            var8 = _closure1_slot10;
            var7 = _closure1_slot0;
            var12 = _closure1_slot2;
            if(var9) { _fun0001_ip = 85; continue _fun0001 }
 57:
            var5 = 10;
            var5 = var12[var5];
            var5 = var7.bind(var4)(var5);
            var6 = var5.CircleInformationIcon;
            var5 = {};
            var6 = var8.bind(var4)(var6, var5);
            _fun0001_ip = 121; continue _fun0001;
 85:
            var5 = 9;
            var5 = var12[var5];
            var5 = var7.bind(var4)(var5);
            var7 = var5.StreamEnded;
            var5 = {};
            var12 = var11.unavaiableImage;
            var5['style'] = var12;
            var6 = var8.bind(var4)(var7, var5);
 121:
            var5 = new Array(2);
            var5[0] = var6;
            var8 = _closure1_slot10;
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
            if(var9) { _fun0001_ip = 246; continue _fun0001 }
 212:
            var12 = var13.string;
            var9 = var14[var10];
            var9 = var11.bind(var4)(var9);
            var9 = var9.t;
            var9 = var9.Nzo5n5;
            var9 = var12.bind(var13)(var9);
            _fun0001_ip = 280; continue _fun0001;
 246:
            var12 = var13.formatToMarkdownString;
            var10 = var14[var10];
            var10 = var11.bind(var4)(var10);
            var10 = var10.t;
            var11 = var10.1Ww0Hh;
            var10 = {};
            var9 = var12.bind(var13)(var11, var10);
 280:
            var6['children'] = var9;
            var6 = var8.bind(var4)(var7, var6);
            var5[1] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot14 = var1;
    var1 = function ExternalPipViewVideoUser(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var2 = arg1;
            var3 = var2.userId;
            var _closure2_slot0 = var3;
            var3 = var2.channelId;
            var _closure2_slot1 = var3;
            var9 = var2.speaking;
            var2 = _closure1_slot13;
            var4 = undefined;
            var5 = var2.bind(var4)();
            var3 = _closure1_slot0;
            var6 = _closure1_slot2;
            var2 = 13;
            var7 = var6[var2];
            var12 = var3.bind(var4)(var7);
            var10 = var12.useStateFromStores;
            var7 = _closure1_slot8;
            var8 = new Array(1);
            var8[0] = var7;
            var7 = function() {
                var3 = _closure1_slot8;
                var2 = var3.getUser;
                var1 = _closure2_slot0;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var14 = var10.bind(var12)(var8, var7);
            var2 = var6[var2];
            var6 = var3.bind(var4)(var2);
            var3 = var6.useStateFromStores;
            var7 = _closure1_slot7;
            var2 = new Array(1);
            var2[0] = var7;
            var1 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                    var3 = _closure1_slot7;
                    var2 = var3.getChannel;
                    var1 = _closure2_slot1;
                    var2 = var2.bind(var3)(var1);
                    var1 = null;
                    var3 = var1 == var2;
                    var1 = undefined;
                    if(var3) { _fun0003_ip = 40; continue _fun0003 }
 35:
                    var1 = var2.guild_id;
 40:
                    return var1;
                }
            };
            var13 = var3.bind(var6)(var2, var1);
            var3 = _closure1_slot10;
            var2 = _closure1_slot6;
            var1 = {};
            var5 = var5.user;
            var1['style'] = var5;
            var5 = null;
            var6 = var5 != var14;
            if(!var6) { _fun0002_ip = 249; continue _fun0002 }
 159:
            var8 = _closure1_slot10;
            var7 = _closure1_slot1;
            var12 = _closure1_slot2;
            var10 = 14;
            var6 = var12[var10];
            var7 = var7.bind(var4)(var6);
            var6 = {};
            var6['user'] = var14;
            var14 = var14.avatarDecoration;
            var6['avatarDecoration'] = var14;
            var6['guildId'] = var13;
            var11 = _closure1_slot0;
            var10 = var12[var10];
            var10 = var11.bind(var4)(var10);
            var10 = var10.AvatarSizes;
            var10 = var10.XXLARGE;
            var6['size'] = var10;
            var6['animate'] = var9;
            var6['speaking'] = var9;
            var5 = var8.bind(var4)(var7, var6);
 249:
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot15 = var1;
    var1 = function ExternalPipViewVideoStream(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
            var2 = arg1;
            var12 = var2.streamId;
            var2 = function useStreamReady(arg1) {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                    var2 = arg1;
                    var _closure3_slot0 = var2;
                    var11 = undefined;
                    var8 = undefined;
                    if(!(var8 === var8)) { _fun0005_ip = 23; continue _fun0005 }
 17:
                    var8 = 300;
 23:
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
 0:
                            var4 = _closure3_slot2;
                            var3 = null;
                            if(!(var3 != var4)) { _fun0006_ip = 30; continue _fun0006 }
 15:
                            var5 = _closure3_slot4;
                            var3 = undefined;
                            var4 = false;
                            var4 = var5.bind(var3)(var4);
                            return var3;
 30:
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
            var4 = undefined;
            var2 = var2.bind(var4)(var12);
            var6 = var2.streamReady;
            var _closure2_slot0 = var6;
            var7 = var2.streamReadLongTime;
            var11 = var2.streamReadyCallback;
            var2 = _closure1_slot13;
            var14 = var2.bind(var4)();
            var _closure2_slot1 = var14;
            var5 = _closure1_slot4;
            var3 = var5.useMemo;
            var2 = new Array(2);
            var2[0] = var14;
            var2[1] = var6;
            var1 = function() {
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
                    var1 = _closure2_slot1;
                    var2 = var1.video;
                    var1 = new Array(2);
                    var1[0] = var2;
                    var2 = {};
                    var4 = _closure2_slot0;
                    var3 = null;
                    var4 = var3 == var4;
                    var3 = 1;
                    if(!var4) { _fun0007_ip = 41; continue _fun0007 }
 39:
                    var3 = 0;
 41:
                    var2['opacity'] = var3;
                    var1[1] = var2;
                    return var1;
                }
            };
            var15 = var3.bind(var5)(var1, var2);
            var2 = _closure1_slot0;
            var16 = _closure1_slot2;
            var1 = 15;
            var1 = var16[var1];
            var3 = var2.bind(var4)(var1);
            var2 = var3.useToken;
            var8 = _closure1_slot1;
            var1 = 8;
            var1 = var16[var1];
            var1 = var8.bind(var4)(var1);
            var1 = var1.colors;
            var1 = var1.INFO_HELP_TEXT;
            var13 = var2.bind(var3)(var1);
            var3 = _closure1_slot11;
            var2 = _closure1_slot12;
            var1 = {};
            var9 = _closure1_slot10;
            var5 = 16;
            var5 = var16[var5];
            var8 = var8.bind(var4)(var5);
            var5 = {};
            var5['style'] = var15;
            var5['streamId'] = var12;
            var5['onReady'] = var11;
            var8 = var9.bind(var4)(var8, var5);
            var5 = new Array(2);
            var5[0] = var8;
            var8 = null;
            var9 = var8 == var6;
            var6 = null;
            if(!var9) { _fun0004_ip = 294; continue _fun0004 }
 221:
            var6 = null;
            if(!var7) { _fun0004_ip = 294; continue _fun0004 }
 226:
            var9 = _closure1_slot10;
            var8 = _closure1_slot6;
            var7 = {};
            var11 = var14.videoUnavailableWrap;
            var7['style'] = var11;
            var12 = _closure1_slot10;
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
 294:
            var5[1] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot16 = var1;
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
    var4 = native4;
    var7 = var4.bind(var1)(var7);
    var _closure1_slot4 = var7;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var8 = var4.ActivityIndicator;
    var _closure1_slot5 = var8;
    var17 = var4.StyleSheet;
    var4 = var4.View;
    var _closure1_slot6 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var16.bind(var1)(var4);
    var _closure1_slot7 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var16.bind(var1)(var4);
    var _closure1_slot8 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.ParticipantTypes;
    var _closure1_slot9 = var4;
    var4 = 6;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var8 = var4.jsx;
    var _closure1_slot10 = var8;
    var8 = var4.jsxs;
    var _closure1_slot11 = var8;
    var4 = var4.Fragment;
    var _closure1_slot12 = var4;
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
    var11 = var11.BACKGROUND_SECONDARY_ALT;
    var19 = 'backgroundColor';
    var10[var19] = var11;
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
    var10[var15] = var11;
    var11 = var6[var14];
    var11 = var16.bind(var1)(var11);
    var11 = var11.radii;
    var11 = var11.sm;
    var18 = 'borderRadius';
    var10[var18] = var11;
    var12 = 'center';
    var11 = 'justifyContent';
    var10[var11] = var12;
    var13 = 'alignContent';
    var10[var13] = var12;
    var22 = 'row';
    var13 = 'flexDirection';
    var10[var13] = var22;
    var13 = 'alignItems';
    var10[var13] = var12;
    var21 = 'wrap';
    var23 = 'flexWrap';
    var10[var23] = var21;
    var23 = 'flex';
    var10[var23] = var20;
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
    var23 = var23.BACKGROUND_SECONDARY;
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
    var17 = var17.BACKGROUND_TERTIARY;
    var10[var19] = var17;
    var17 = var6[var14];
    var17 = var16.bind(var1)(var17);
    var17 = var17.radii;
    var17 = var17.sm;
    var10[var18] = var17;
    var14 = var6[var14];
    var14 = var16.bind(var1)(var14);
    var14 = var14.spacing;
    var14 = var14.PX_8;
    var10[var15] = var14;
    var10[var13] = var12;
    var10[var11] = var12;
    var4['user'] = var10;
    var4 = var8.bind(var9)(var4);
    var _closure1_slot13 = var4;
    var4 = var7.memo;
    var2 = function ExternalPipViewVideo() {
        _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
 0:
            var1 = _closure1_slot13;
            var4 = undefined;
            var5 = var1.bind(var4)();
            var2 = _closure1_slot1;
            var3 = _closure1_slot2;
            var1 = 17;
            var1 = var3[var1];
            var1 = var2.bind(var4)(var1);
            var1 = var1.bind(var4)();
            var12 = var1.channelId;
            var9 = var1.selectedParticipantStreamId;
            var13 = var1.selectedParticipantUserId;
            var11 = var1.selectedParticipantSpeaking;
            var15 = var1.focusedParticipantType;
            var3 = _closure1_slot10;
            var2 = _closure1_slot6;
            var1 = {};
            var5 = var5.container;
            var1['style'] = var5;
            var5 = null;
            if(!(var5 == var9)) { _fun0008_ip = 180; continue _fun0008 }
 91:
            if(!(var5 == var13)) { _fun0008_ip = 149; continue _fun0008 }
 95:
            var8 = _closure1_slot10;
            var7 = _closure1_slot14;
            var5 = {};
            var10 = _closure1_slot9;
            var10 = var10.STREAM;
            var10 = var15 === var10;
            if(var10) { _fun0008_ip = 136; continue _fun0008 }
 122:
            var14 = _closure1_slot9;
            var14 = var14.HIDDEN_STREAM;
            var10 = var15 === var14;
 136:
            var5['wasStream'] = var10;
            var5 = var8.bind(var4)(var7, var5);
            _fun0008_ip = 178; continue _fun0008;
 149:
            var10 = _closure1_slot10;
            var8 = _closure1_slot15;
            var7 = {};
            var7['userId'] = var13;
            var7['channelId'] = var12;
            var7['speaking'] = var11;
            var5 = var10.bind(var4)(var8, var7);
 178:
            _fun0008_ip = 201; continue _fun0008;
 180:
            var8 = _closure1_slot10;
            var7 = _closure1_slot16;
            var6 = {};
            var6['streamId'] = var9;
            var5 = var8.bind(var4)(var7, var6);
 201:
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var2 = var4.bind(var7)(var2);
    var4 = 18;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/external_pip/ExternalPipViewVideo.android.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();