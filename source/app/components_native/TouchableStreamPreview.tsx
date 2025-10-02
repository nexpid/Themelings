// app/components_native/TouchableStreamPreview.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var12 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var12;
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
    var4 = metroImportAll;
    var1 = undefined;
    var4 = var4.bind(var1)(var7);
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var10 = var4.StyleSheet;
    var4 = var4.View;
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var12.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var12.bind(var1)(var4);
    var _closure1_slot6 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var12.bind(var1)(var4);
    var _closure1_slot7 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var12.bind(var1)(var4);
    var _closure1_slot8 = var4;
    var4 = 6;
    var4 = var6[var4];
    var4 = var12.bind(var1)(var4);
    var _closure1_slot9 = var4;
    var4 = 7;
    var4 = var6[var4];
    var4 = var12.bind(var1)(var4);
    var _closure1_slot10 = var4;
    var4 = 8;
    var4 = var6[var4];
    var4 = var12.bind(var1)(var4);
    var _closure1_slot11 = var4;
    var4 = 9;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.Permissions;
    var _closure1_slot12 = var4;
    var4 = 10;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.jsx;
    var _closure1_slot13 = var4;
    var4 = 11;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = {};
    var9 = {'borderRadius': 5, 'overflow': 'hidden'};
    var4['touchable'] = var9;
    var9 = {};
    var17 = var10.absoluteFillObject;
    var18 = var9;
    var10 = copyDataProperties(var18, var17);
    var11 = 'center';
    var10 = 'alignItems';
    var9[var10] = var11;
    var10 = 'justifyContent';
    var9[var10] = var11;
    var10 = 12;
    var10 = var6[var10];
    var15 = var5.bind(var1)(var10);
    var14 = var15.hexWithOpacity;
    var11 = 13;
    var10 = var6[var11];
    var10 = var12.bind(var1)(var10);
    var10 = var10.unsafe_rawColors;
    var13 = var10.PRIMARY_700;
    var10 = 0.7;
    var13 = var14.bind(var15)(var13, var10);
    var10 = 'backgroundColor';
    var9[var10] = var13;
    var4['ctaWrapper'] = var9;
    var9 = {'height': 40, 'paddingHorizontal': 16, 'borderRadius': 20, 'backgroundColor': null, 'justifyContent': 'center', 'alignItems': 'center'};
    var10 = 20;
    var11 = var6[var11];
    var11 = var12.bind(var1)(var11);
    var11 = var11.unsafe_rawColors;
    var11 = var11.PRIMARY_500;
    var9['backgroundColor'] = var11;
    var4['ctaBackground'] = var9;
    var9 = {};
    var9['lineHeight'] = var10;
    var4['ctaText'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot14 = var4;
    var4 = function StreamPreviewContainer(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var3 = arg1;
            var9 = var3.style;
            var13 = var3.disableTransition;
            var _closure2_slot0 = var13;
            var2 = var3.onPress;
            var _closure2_slot1 = var2;
            var7 = var3.stream;
            var _closure2_slot2 = var7;
            var3 = var3.channel;
            var _closure2_slot3 = var3;
            var5 = _closure1_slot14;
            var4 = undefined;
            var11 = var5.bind(var4)();
            var18 = _closure1_slot0;
            var6 = _closure1_slot2;
            var5 = 14;
            var5 = var6[var5];
            var14 = var18.bind(var4)(var5);
            var12 = var14.isChannelFull;
            var5 = _closure1_slot11;
            var10 = _closure1_slot9;
            var14 = var12.bind(var14)(var3, var5, var10);
            var15 = 15;
            var10 = var6[var15];
            var17 = var18.bind(var4)(var10);
            var16 = var17.useStateFromStores;
            var10 = _closure1_slot5;
            var12 = new Array(1);
            var12[0] = var10;
            var10 = function() {
                var2 = _closure1_slot5;
                var1 = var2.getRemoteSessionId;
                var2 = var1.bind(var2)();
                var1 = null;
                var1 = var1 != var2;
                return var1;
            };
            var10 = var16.bind(var17)(var12, var10);
            var12 = var6[var15];
            var19 = var18.bind(var4)(var12);
            var17 = var19.useStateFromStores;
            var12 = _closure1_slot10;
            var16 = new Array(1);
            var16[0] = var12;
            var12 = function() {
                var4 = _closure1_slot10;
                var3 = var4.can;
                var1 = _closure1_slot12;
                var2 = var1.CONNECT;
                var1 = _closure2_slot3;
                var1 = var3.bind(var4)(var2, var1);
                var1 = !var1;
                return var1;
            };
            var12 = var17.bind(var19)(var16, var12);
            var16 = var6[var15];
            var19 = var18.bind(var4)(var16);
            var17 = var19.useStateFromStores;
            var16 = new Array(1);
            var16[0] = var5;
            var5 = function() {
                var3 = _closure1_slot11;
                var2 = var3.isInChannel;
                var1 = _closure2_slot3;
                var1 = var1.id;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var5 = var17.bind(var19)(var16, var5);
            var15 = var6[var15];
            var19 = var18.bind(var4)(var15);
            var17 = var19.useStateFromStores;
            var15 = _closure1_slot6;
            var16 = new Array(2);
            var16[0] = var15;
            var15 = _closure1_slot7;
            var16[1] = var15;
            var3 = var3.id;
            var15 = new Array(2);
            var15[0] = var3;
            var3 = var7.ownerId;
            var15[1] = var3;
            var3 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var1 = _closure2_slot2;
                    var4 = var1.ownerId;
                    var5 = _closure1_slot7;
                    var1 = var5.getId;
                    var1 = var1.bind(var5)();
                    var1 = var4 === var1;
                    if(!var1) { _fun0002_ip = 2; continue _fun0002 }
case 3:
                    var4 = _closure1_slot6;
                    var3 = var4.isSelfStreamHidden;
                    var2 = _closure2_slot3;
                    var2 = var2.id;
                    var1 = var3.bind(var4)(var2);
case 2:
                    return var1;
                }
            };
            var3 = var17.bind(var19)(var16, var3, var15);
            var15 = 16;
            var16 = var6[var15];
            var16 = var18.bind(var4)(var16);
            var17 = var16.intl;
            var16 = var17.string;
            var6 = var6[var15];
            var6 = var18.bind(var4)(var6);
            var6 = var6.t;
            var6 = var6.7Xq/nZ;
            var6 = var16.bind(var17)(var6);
            if(var10) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var16 = var5;
            if(var16) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var16 = var3;
case 6:
            var10 = var6;
            var5 = false;
            if(var16) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            if(var14) { _fun0001_ip = 10; continue _fun0001 }
case 11:
            var3 = false;
            if(!var12) { _fun0001_ip = 12; continue _fun0001 }
case 13:
            var17 = _closure1_slot0;
            var12 = _closure1_slot2;
            var14 = var12[var15];
            var14 = var17.bind(var4)(var14);
            var16 = var14.intl;
            var14 = var16.string;
            var12 = var12[var15];
            var12 = var17.bind(var4)(var12);
            var12 = var12.t;
            var12 = var12.TVBCKS;
            var6 = var14.bind(var16)(var12);
            var3 = true;
case 12:
            _fun0001_ip = 14; continue _fun0001;
case 10:
            var17 = _closure1_slot0;
            var12 = _closure1_slot2;
            var14 = var12[var15];
            var14 = var17.bind(var4)(var14);
            var16 = var14.intl;
            var14 = var16.string;
            var12 = var12[var15];
            var12 = var17.bind(var4)(var12);
            var12 = var12.t;
            var12 = var12.rZfiNj;
            var6 = var14.bind(var16)(var12);
            var3 = true;
case 14:
            var10 = var6;
            var5 = var3;
            _fun0001_ip = 8; continue _fun0001;
case 4:
            var14 = _closure1_slot0;
            var3 = _closure1_slot2;
            var6 = var3[var15];
            var6 = var14.bind(var4)(var6);
            var12 = var6.intl;
            var6 = var12.string;
            var3 = var3[var15];
            var3 = var14.bind(var4)(var3);
            var3 = var3.t;
            var3 = var3.gcnYT0;
            var10 = var6.bind(var12)(var3);
            var5 = true;
case 8:
            var12 = _closure1_slot3;
            var6 = var12.useCallback;
            var3 = new Array(3);
            var3[0] = var7;
            var3[1] = var13;
            var3[2] = var2;
            var2 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var4 = _closure1_slot1;
                    var7 = _closure1_slot2;
                    var1 = 17;
                    var2 = var7[var1];
                    var1 = undefined;
                    var8 = var4.bind(var1)(var2);
                    var5 = var8.selectVoiceChannel;
                    var6 = _closure2_slot2;
                    var4 = var6.channelId;
                    var4 = var5.bind(var8)(var4);
                    var5 = _closure1_slot0;
                    var4 = 18;
                    var4 = var7[var4];
                    var5 = var5.bind(var1)(var4);
                    var4 = var5.watchStream;
                    var4 = var4.bind(var5)(var6);
                    var4 = _closure2_slot0;
                    var5 = _closure1_slot1;
                    var6 = _closure1_slot2;
                    if(var4) { _fun0003_ip = 15; continue _fun0003 }
case 16:
                    var4 = 19;
                    var4 = var6[var4];
                    var7 = var5.bind(var1)(var4);
                    var4 = _closure2_slot2;
                    var4 = var7.bind(var1)(var4);
                    _fun0003_ip = 17; continue _fun0003;
case 15:
                    var4 = 20;
                    var4 = var6[var4];
                    var5 = var5.bind(var1)(var4);
                    var4 = var5.rebuildRTCActiveChannels;
                    var4 = var4.bind(var5)();
case 17:
                    var5 = _closure1_slot1;
                    var9 = _closure1_slot2;
                    var4 = 20;
                    var4 = var9[var4];
                    var6 = var5.bind(var1)(var4);
                    var5 = var6.selectParticipant;
                    var8 = _closure2_slot2;
                    var4 = var8.channelId;
                    var7 = _closure1_slot0;
                    var3 = 21;
                    var3 = var9[var3];
                    var7 = var7.bind(var1)(var3);
                    var3 = var7.encodeStreamKey;
                    var3 = var3.bind(var7)(var8);
                    var3 = var5.bind(var6)(var4, var3);
                    var4 = _closure2_slot1;
                    var3 = null;
                    if(!(var3 != var4)) { _fun0003_ip = 18; continue _fun0003 }
case 19:
                    var2 = _closure2_slot1;
                    var2 = var2.bind(var1)();
case 18:
                    return var1;
                }
            };
            var6 = var6.bind(var12)(var2, var3);
            var2 = _closure1_slot1;
            var12 = _closure1_slot2;
            var3 = 22;
            var3 = var12[var3];
            var3 = var2.bind(var4)(var3);
            var1 = function() {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                    var3 = _closure2_slot3;
                    var2 = var3.isGuildStageVoice;
                    var2 = var2.bind(var3)();
                    if(!var2) { _fun0004_ip = 20; continue _fun0004 }
case 21:
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var2 = 18;
                    var3 = var3[var2];
                    var2 = undefined;
                    var4 = var4.bind(var2)(var3);
                    var3 = var4.watchStream;
                    var2 = _closure2_slot2;
                    var1 = {};
                    var5 = true;
                    var1['noFocus'] = var5;
                    var1 = var3.bind(var4)(var2, var1);
case 20:
                    var1 = undefined;
                    return var1;
                }
            };
            var1 = var3.bind(var4)(var1);
            var3 = _closure1_slot13;
            var1 = 23;
            var1 = var12[var1];
            var2 = var2.bind(var4)(var1);
            var1 = {};
            var1['stream'] = var7;
            var1['ctaText'] = var10;
            var13 = var11.touchable;
            var7 = new Array(2);
            var7[0] = var13;
            var7[1] = var9;
            var1['style'] = var7;
            var1['onPress'] = var6;
            var1['disabled'] = var5;
            var6 = _closure1_slot4;
            var5 = {};
            var7 = var11.ctaWrapper;
            var5['style'] = var7;
            var7 = {};
            var9 = var11.ctaBackground;
            var7['style'] = var9;
            var9 = _closure1_slot0;
            var8 = 24;
            var8 = var12[var8];
            var8 = var9.bind(var4)(var8);
            var9 = var8.Text;
            var8 = {'style': null, 'variant': 'text-md/semibold', 'color': 'always-white'};
            var11 = var11.ctaText;
            var8['style'] = var11;
            var8['children'] = var10;
            var8 = var3.bind(var4)(var9, var8);
            var7['children'] = var8;
            var7 = var3.bind(var4)(var6, var7);
            var5['children'] = var7;
            var5 = var3.bind(var4)(var6, var5);
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot15 = var4;
    var4 = 25;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'components_native/TouchableStreamPreview.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function VoiceChannelSettingsStreamPreview(arg1) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
            var6 = arg1;
            var _closure2_slot0 = var6;
            var4 = _closure1_slot0;
            var7 = _closure1_slot2;
            var3 = 15;
            var8 = var7[var3];
            var5 = undefined;
            var11 = var4.bind(var5)(var8);
            var10 = var11.useStateFromStores;
            var8 = _closure1_slot6;
            var9 = new Array(1);
            var9[0] = var8;
            var8 = function() {
                var4 = _closure1_slot6;
                var3 = var4.getStreamForUser;
                var1 = _closure2_slot0;
                var2 = var1.userId;
                var1 = var1.guildId;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            };
            var8 = var10.bind(var11)(var9, var8);
            var _closure2_slot1 = var8;
            var3 = var7[var3];
            var7 = var4.bind(var5)(var3);
            var4 = var7.useStateFromStores;
            var9 = _closure1_slot8;
            var3 = new Array(1);
            var3[0] = var9;
            var1 = function() {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                    var3 = _closure2_slot1;
                    var1 = null;
                    var3 = var1 != var3;
                    if(!var3) { _fun0006_ip = 22; continue _fun0006 }
case 23:
                    var4 = _closure1_slot8;
                    var3 = var4.getChannel;
                    var2 = _closure2_slot1;
                    var2 = var2.channelId;
                    var1 = var3.bind(var4)(var2);
case 22:
                    return var1;
                }
            };
            var7 = var4.bind(var7)(var3, var1);
            var4 = null;
            var3 = var4 == var8;
            var1 = null;
            if(var3) { _fun0005_ip = 24; continue _fun0005 }
case 25:
            var3 = var4 == var7;
            var1 = null;
            if(var3) { _fun0005_ip = 24; continue _fun0005 }
case 26:
            var4 = _closure1_slot13;
            var3 = _closure1_slot15;
            var2 = {};
            var13 = var2;
            var12 = var6;
            var6 = copyDataProperties(var13, var12);
            var6 = 'stream';
            var2[var6] = var8;
            var6 = 'channel';
            var2[var6] = var7;
            var1 = var4.bind(var5)(var3, var2);
case 24:
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();