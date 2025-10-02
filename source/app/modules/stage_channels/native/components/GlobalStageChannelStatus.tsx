// app/modules/stage_channels/native/components/GlobalStageChannelStatus.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var12 = metroImportDefault;
    var8 = metroImportAll;
    var3 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var12;
    var _closure1_slot2 = var8;
    var _closure1_slot3 = var7;
    var1 = function getText(arg1, arg2) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var7 = arg1;
            var6 = arg2;
            var1 = 0;
            if(!(var7 > var1)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            if(!(!(var6 > var1))) { _fun0001_ip = 4; continue _fun0001 }
case 2:
            if(!(!(var6 > var1))) { _fun0001_ip = 5; continue _fun0001 }
case 6:
            var5 = _closure1_slot0;
            var8 = _closure1_slot3;
            var1 = 8;
            var3 = var8[var1];
            var2 = undefined;
            var3 = var5.bind(var2)(var3);
            var4 = var3.intl;
            var3 = var4.format;
            var1 = var8[var1];
            var1 = var5.bind(var2)(var1);
            var1 = var1.t;
            var2 = var1.sFzx0N;
            var1 = {};
            var1['number'] = var7;
            var1 = var3.bind(var4)(var2, var1);
            _fun0001_ip = 7; continue _fun0001;
case 5:
            var8 = _closure1_slot0;
            var9 = _closure1_slot3;
            var2 = 8;
            var4 = var9[var2];
            var3 = undefined;
            var4 = var8.bind(var3)(var4);
            var5 = var4.intl;
            var4 = var5.format;
            var2 = var9[var2];
            var2 = var8.bind(var3)(var2);
            var2 = var2.t;
            var3 = var2.0bU4FB;
            var2 = {};
            var2['number'] = var6;
            var1 = var4.bind(var5)(var3, var2);
case 7:
            _fun0001_ip = 8; continue _fun0001;
case 4:
            var8 = _closure1_slot0;
            var9 = _closure1_slot3;
            var2 = 8;
            var4 = var9[var2];
            var3 = undefined;
            var4 = var8.bind(var3)(var4);
            var5 = var4.intl;
            var4 = var5.format;
            var2 = var9[var2];
            var2 = var8.bind(var3)(var2);
            var2 = var2.t;
            var3 = var2.cXaoIy;
            var2 = {};
            var6 = var7 + var6;
            var2['number'] = var6;
            var1 = var4.bind(var5)(var3, var2);
case 8:
            return var1;
        }
    };
    var _closure1_slot13 = var1;
    var2 = function StageChannelRaiseHandAck(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var1 = arg1;
            var6 = var1.channel;
            var _closure2_slot0 = var6;
            var1 = _closure1_slot12;
            var5 = undefined;
            var16 = var1.bind(var5)();
            var3 = _closure1_slot0;
            var2 = _closure1_slot3;
            var1 = 11;
            var1 = var2[var1];
            var9 = var3.bind(var5)(var1);
            var8 = var9.useStateFromStores;
            var1 = _closure1_slot9;
            var7 = new Array(1);
            var7[0] = var1;
            var1 = var6.id;
            var4 = new Array(1);
            var4[0] = var1;
            var1 = function() {
                var3 = _closure1_slot9;
                var2 = var3.getStageInstanceByChannel;
                var1 = _closure2_slot0;
                var1 = var1.id;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var1 = var8.bind(var9)(var7, var1, var4);
            var _closure2_slot1 = var1;
            var7 = _closure1_slot1;
            var4 = 12;
            var4 = var2[var4];
            var7 = var7.bind(var5)(var4);
            var4 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var3 = _closure1_slot1;
                    var9 = _closure1_slot3;
                    var1 = 13;
                    var2 = var9[var1];
                    var1 = undefined;
                    var4 = var3.bind(var1)(var2);
                    var3 = var4.presentLocalNotification;
                    var2 = {};
                    var6 = _closure1_slot0;
                    var5 = 8;
                    var7 = var9[var5];
                    var7 = var6.bind(var1)(var7);
                    var8 = var7.intl;
                    var7 = var8.formatToPlainString;
                    var5 = var9[var5];
                    var5 = var6.bind(var1)(var5);
                    var5 = var5.t;
                    var6 = var5.sqnsSE;
                    var5 = {};
                    var9 = _closure2_slot0;
                    var9 = var9.name;
                    var5['channelName'] = var9;
                    var11 = _closure2_slot1;
                    var9 = null;
                    var11 = var9 == var11;
                    var9 = undefined;
                    if(var11) { _fun0003_ip = 9; continue _fun0003 }
case 10:
                    var10 = _closure2_slot1;
                    var9 = var10.topic;
case 9:
                    var5['channelTopic'] = var9;
                    var5 = var7.bind(var8)(var6, var5);
                    var2['alertBody'] = var5;
                    var2 = var3.bind(var4)(var2);
                    return var1;
                }
            };
            var4 = var7.bind(var5)(var4);
            var8 = _closure1_slot6;
            var7 = var8.useState;
            var4 = false;
            var8 = var7.bind(var8)(var4);
            var7 = _closure1_slot5;
            var4 = 2;
            var7 = var7.bind(var5)(var8, var4);
            var8 = 0;
            var14 = var7[var8];
            var4 = 1;
            var4 = var7[var4];
            var _closure2_slot2 = var4;
            var4 = 14;
            var2 = var2[var4];
            var9 = var3.bind(var5)(var2);
            var3 = var9.useStageBlockedUsersCount;
            var7 = null;
            var10 = var7 == var6;
            var2 = undefined;
            if(var10) { _fun0002_ip = 11; continue _fun0002 }
case 12:
            var2 = var6.id;
case 11:
            var22 = var3.bind(var9)(var2);
            var3 = _closure1_slot0;
            var2 = _closure1_slot3;
            var2 = var2[var4];
            var4 = var3.bind(var5)(var2);
            var3 = var4.useStageIgnoredUsersCount;
            var9 = var7 == var6;
            var2 = undefined;
            if(var9) { _fun0002_ip = 13; continue _fun0002 }
case 14:
            var2 = var6.id;
case 13:
            var20 = var3.bind(var4)(var2);
            var3 = _closure1_slot0;
            var4 = _closure1_slot3;
            var2 = 15;
            var2 = var4[var2];
            var4 = var3.bind(var5)(var2);
            var3 = var4.useGetStageRTCPanelHeight;
            var9 = var7 == var6;
            var2 = undefined;
            if(var9) { _fun0002_ip = 15; continue _fun0002 }
case 16:
            var2 = var6.id;
case 15:
            var10 = var3.bind(var4)(var2);
            var2 = function() {
                var4 = _closure1_slot4;
                var3 = undefined;
                var2 = function* () {
                    var1 = function* anon_0_() {
                        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                            StartGenerator();
                            ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                            if(var2) { _fun0004_ip = 17; continue _fun0004 }
case 18:
                            var2 = _closure2_slot0;
                            var7 = null;
                            if(!(var7 != var2)) { _fun0004_ip = 19; continue _fun0004 }
case 20:
                            var4 = _closure2_slot2;
                            var5 = undefined;
                            var2 = true;
                            var2 = var4.bind(var5)(var2);
case 21: // try_start_0
                            var6 = _closure1_slot0;
                            var8 = _closure1_slot3;
                            var2 = 16;
                            var2 = var8[var2];
                            var9 = var6.bind(var5)(var2);
                            var6 = var9.audienceAckRequestToSpeak;
                            var2 = _closure2_slot0;
                            var8 = false;
                            var2 = var6.bind(var9)(var2, var8);
                            SaveGenerator(address=84);
case 22:
                            return var2;
case 23:
                            ResumeGenerator(result_out_reg=1, return_bool_out_reg=5);
                            if(var6) { _fun0004_ip = 24; continue _fun0004 }
case 25: // try_end0
                            var6 = _closure2_slot2;
                            var6 = var6.bind(var5)(var8);
                            var8 = _closure1_slot8;
                            var6 = var8.getKey;
                            var6 = var6.bind(var8)();
                            if(!(var7 == var6)) { _fun0004_ip = 19; continue _fun0004 }
case 26:
                            var6 = _closure1_slot2;
                            var7 = _closure1_slot3;
                            var4 = 17;
                            var4 = var7[var4];
                            var7 = var6.bind(var5)(var4);
                            var6 = var7.openStageChannel;
                            var4 = _closure2_slot0;
                            var4 = var6.bind(var7)(var4);
case 19:
                            var4 = undefined;
                            return var4;
case 24:
                            return var2;
case 27: // catch_target0
                            CatchBlockStart(arg_register=1);
                            var4 = _closure2_slot2;
                            var3 = false;
                            var3 = var4.bind(var5)(var3);
                            throw var2;
case 17:
                            return var1;
                        }
                    };
                    return var1;
                };
                var2 = var4.bind(var3)(var2);
                var _closure3_slot0 = var2;
                var1 = function() {
                    var1 = undefined;
                    var4 = _closure3_slot0;
                    var3 = var4.apply;
                    var1 = arguments;
                    var2 = var1;
                    var1 = this;
                    var1 = var3.bind(var4)(var1, var2);
                    return var1;
                };
                return var1;
            };
            var21 = var2.bind(var5)();
            var2 = var7 == var1;
            var1 = null;
            if(var2) { _fun0002_ip = 28; continue _fun0002 }
case 29:
            var4 = _closure1_slot11;
            var3 = _closure1_slot7;
            var2 = {};
            var9 = var16.invitedContainer;
            var6 = new Array(2);
            var6[0] = var9;
            var9 = {};
            var9['height'] = var10;
            var6[1] = var9;
            var2['style'] = var6;
            var10 = _closure1_slot10;
            var9 = _closure1_slot7;
            var6 = {};
            var12 = var16.row;
            var6['style'] = var12;
            var15 = _closure1_slot10;
            var26 = _closure1_slot0;
            var23 = _closure1_slot3;
            var17 = 18;
            var12 = var23[var17];
            var12 = var26.bind(var5)(var12);
            var13 = var12.LegacyText;
            var12 = {};
            var19 = var16.invitedHeaderText;
            var12['style'] = var19;
            var19 = 'header';
            var12['accessibilityRole'] = var19;
            var19 = 8;
            var24 = var23[var19];
            var24 = var26.bind(var5)(var24);
            var25 = var24.intl;
            var24 = var25.string;
            var23 = var23[var19];
            var23 = var26.bind(var5)(var23);
            var23 = var23.t;
            var23 = var23.Ul1RJS;
            var23 = var24.bind(var25)(var23);
            var12['children'] = var23;
            var12 = var15.bind(var5)(var13, var12);
            var6['children'] = var12;
            var9 = var10.bind(var5)(var9, var6);
            var6 = new Array(3);
            var6[0] = var9;
            if(!(!(var22 > var8))) { _fun0002_ip = 30; continue _fun0002 }
case 31:
            var8 = var20 > var8;
            var7 = null;
            if(!var8) { _fun0002_ip = 32; continue _fun0002 }
case 30:
            var10 = _closure1_slot10;
            var9 = _closure1_slot7;
            var8 = {};
            var12 = var16.row;
            var8['style'] = var12;
            var15 = _closure1_slot10;
            var13 = _closure1_slot0;
            var12 = _closure1_slot3;
            var12 = var12[var17];
            var12 = var13.bind(var5)(var12);
            var13 = var12.LegacyText;
            var12 = {};
            var17 = var16.blockedUsersText;
            var12['style'] = var17;
            var17 = _closure1_slot13;
            var17 = var17.bind(var5)(var22, var20);
            var12['children'] = var17;
            var12 = var15.bind(var5)(var13, var12);
            var8['children'] = var12;
            var7 = var10.bind(var5)(var9, var8);
case 32:
            var6[1] = var7;
            var9 = _closure1_slot11;
            var8 = _closure1_slot7;
            var7 = {};
            var10 = var16.row;
            var7['style'] = var10;
            var13 = _closure1_slot10;
            var20 = _closure1_slot1;
            var15 = _closure1_slot3;
            var17 = 19;
            var10 = var15[var17];
            var12 = var20.bind(var5)(var10);
            var10 = {};
            var22 = var15[var17];
            var22 = var20.bind(var5)(var22);
            var22 = var22.Colors;
            var22 = var22.WHITE;
            var10['color'] = var22;
            var22 = var15[var17];
            var22 = var20.bind(var5)(var22);
            var22 = var22.Looks;
            var22 = var22.OUTLINED;
            var10['look'] = var22;
            var18 = function onPress() {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                    var3 = _closure2_slot0;
                    var2 = null;
                    if(!(var2 != var3)) { _fun0005_ip = 33; continue _fun0005 }
case 34:
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot3;
                    var2 = 16;
                    var3 = var3[var2];
                    var2 = undefined;
                    var4 = var4.bind(var2)(var3);
                    var3 = var4.audienceAckRequestToSpeak;
                    var2 = _closure2_slot0;
                    var1 = true;
                    var1 = var3.bind(var4)(var2, var1);
case 33:
                    var1 = undefined;
                    return var1;
                }
            };
            var10['onPress'] = var18;
            var22 = var16.button;
            var18 = new Array(2);
            var18[0] = var22;
            var22 = var16.declineButton;
            var18[1] = var22;
            var10['style'] = var18;
            var18 = var15[var17];
            var18 = var20.bind(var5)(var18);
            var18 = var18.Sizes;
            var18 = var18.SMALL;
            var10['size'] = var18;
            var18 = var16.declineButtonText;
            var10['textStyle'] = var18;
            var18 = _closure1_slot0;
            var22 = var15[var19];
            var22 = var18.bind(var5)(var22);
            var24 = var22.intl;
            var23 = var24.string;
            var22 = var15[var19];
            var22 = var18.bind(var5)(var22);
            var22 = var22.t;
            var22 = var22.1YDv7e;
            var22 = var23.bind(var24)(var22);
            var10['text'] = var22;
            var12 = var13.bind(var5)(var12, var10);
            var10 = new Array(2);
            var10[0] = var12;
            var13 = _closure1_slot10;
            var11 = var15[var17];
            var12 = var20.bind(var5)(var11);
            var11 = {};
            var22 = var15[var17];
            var22 = var20.bind(var5)(var22);
            var22 = var22.Colors;
            var22 = var22.WHITE;
            var11['color'] = var22;
            var22 = var15[var17];
            var22 = var20.bind(var5)(var22);
            var22 = var22.Looks;
            var22 = var22.FILLED;
            var11['look'] = var22;
            var11['onPress'] = var21;
            var21 = var16.button;
            var11['style'] = var21;
            var17 = var15[var17];
            var17 = var20.bind(var5)(var17);
            var17 = var17.Sizes;
            var17 = var17.SMALL;
            var11['size'] = var17;
            var16 = var16.acceptButtonText;
            var11['textStyle'] = var16;
            var16 = var15[var19];
            var16 = var18.bind(var5)(var16);
            var17 = var16.intl;
            var16 = var17.string;
            var15 = var15[var19];
            var15 = var18.bind(var5)(var15);
            var15 = var15.t;
            var15 = var15.MpO0p6;
            var15 = var16.bind(var17)(var15);
            var11['text'] = var15;
            var11['loading'] = var14;
            var11 = var13.bind(var5)(var12, var11);
            var10[1] = var11;
            var7['children'] = var10;
            var7 = var9.bind(var5)(var8, var7);
            var6[2] = var7;
            var2['children'] = var6;
            var1 = var4.bind(var5)(var3, var2);
case 28:
            return var1;
        }
    };
    var _closure1_slot14 = var2;
    var1 = global;
    var10 = var1.Object;
    var9 = var10.defineProperty;
    var5 = {};
    var1 = true;
    var5['value'] = var1;
    var1 = '__esModule';
    var1 = var9.bind(var10)(var3, var1, var5);
    var1 = 0;
    var5 = var7[var1];
    var1 = undefined;
    var5 = var12.bind(var1)(var5);
    var _closure1_slot4 = var5;
    var13 = 1;
    var5 = var7[var13];
    var5 = var12.bind(var1)(var5);
    var _closure1_slot5 = var5;
    var5 = 2;
    var5 = var7[var5];
    var5 = var8.bind(var1)(var5);
    var _closure1_slot6 = var5;
    var5 = 3;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var5 = var5.View;
    var _closure1_slot7 = var5;
    var5 = 4;
    var5 = var7[var5];
    var5 = var12.bind(var1)(var5);
    var _closure1_slot8 = var5;
    var5 = 5;
    var5 = var7[var5];
    var5 = var12.bind(var1)(var5);
    var _closure1_slot9 = var5;
    var5 = 6;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var14 = var5.Fonts;
    var5 = 7;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var8 = var5.jsx;
    var _closure1_slot10 = var8;
    var5 = var5.jsxs;
    var _closure1_slot11 = var5;
    var5 = 9;
    var5 = var7[var5];
    var9 = var6.bind(var1)(var5);
    var8 = var9.createStyles;
    var5 = {};
    var10 = {};
    var11 = 10;
    var15 = var7[var11];
    var15 = var12.bind(var1)(var15);
    var15 = var15.spacing;
    var15 = var15.PX_8;
    var10['paddingHorizontal'] = var15;
    var5['invitedContainer'] = var10;
    var10 = {};
    var15 = var7[var11];
    var15 = var12.bind(var1)(var15);
    var15 = var15.spacing;
    var15 = var15.PX_8;
    var10['marginEnd'] = var15;
    var15 = var7[var11];
    var15 = var12.bind(var1)(var15);
    var15 = var15.colors;
    var15 = var15.TEXT_NORMAL;
    var10['tintColor'] = var15;
    var5['icon'] = var10;
    var10 = {};
    var15 = var7[var11];
    var15 = var12.bind(var1)(var15);
    var15 = var15.spacing;
    var15 = var15.PX_8;
    var10['marginEnd'] = var15;
    var15 = var7[var11];
    var15 = var12.bind(var1)(var15);
    var15 = var15.colors;
    var15 = var15.WHITE;
    var10['tintColor'] = var15;
    var5['activeSpeakerIcon'] = var10;
    var10 = {};
    var15 = var7[var11];
    var15 = var12.bind(var1)(var15);
    var15 = var15.spacing;
    var15 = var15.PX_8;
    var10['marginEnd'] = var15;
    var15 = var7[var11];
    var15 = var12.bind(var1)(var15);
    var15 = var15.unsafe_rawColors;
    var15 = var15.GREEN_360;
    var10['tintColor'] = var15;
    var5['activeStageIcon'] = var10;
    var10 = {};
    var15 = var7[var11];
    var15 = var12.bind(var1)(var15);
    var15 = var15.colors;
    var15 = var15.TEXT_NORMAL;
    var10['color'] = var15;
    var15 = 14;
    var10['fontSize'] = var15;
    var16 = var14.PRIMARY_SEMIBOLD;
    var10['fontFamily'] = var16;
    var5['topic'] = var10;
    var10 = {};
    var16 = var7[var11];
    var16 = var12.bind(var1)(var16);
    var16 = var16.colors;
    var16 = var16.TEXT_NORMAL;
    var10['color'] = var16;
    var10['fontSize'] = var15;
    var16 = var14.PRIMARY_MEDIUM;
    var10['fontFamily'] = var16;
    var5['channel'] = var10;
    var10 = {};
    var16 = var7[var11];
    var16 = var12.bind(var1)(var16);
    var16 = var16.colors;
    var16 = var16.WHITE;
    var10['color'] = var16;
    var10['fontSize'] = var15;
    var14 = var14.PRIMARY_MEDIUM;
    var10['fontFamily'] = var14;
    var5['invitedHeaderText'] = var10;
    var10 = {'color': null, 'fontSize': 12, 'lineHeight': 16};
    var14 = var7[var11];
    var14 = var12.bind(var1)(var14);
    var14 = var14.colors;
    var14 = var14.WHITE;
    var10['color'] = var14;
    var5['blockedUsersText'] = var10;
    var10 = {'alignItems': 'center', 'justifyContent': 'center', 'flexDirection': 'row', 'paddingHorizontal': null, 'marginTop': 4294967288};
    var14 = var7[var11];
    var14 = var12.bind(var1)(var14);
    var14 = var14.spacing;
    var14 = var14.PX_8;
    var10['paddingHorizontal'] = var14;
    var14 = var7[var11];
    var14 = var12.bind(var1)(var14);
    var14 = var14.spacing;
    var14 = var14.PX_4;
    var10['paddingBottom'] = var14;
    var5['noticeContainer'] = var10;
    var10 = {'alignItems': 'center', 'justifyContent': 'center', 'flexDirection': 'row', 'width': '100%'};
    var14 = var7[var11];
    var14 = var12.bind(var1)(var14);
    var14 = var14.spacing;
    var14 = var14.PX_4;
    var10['gap'] = var14;
    var5['row'] = var10;
    var10 = {};
    var10['flexGrow'] = var13;
    var13 = var7[var11];
    var13 = var12.bind(var1)(var13);
    var13 = var13.spacing;
    var13 = var13.PX_8;
    var10['margin'] = var13;
    var5['button'] = var10;
    var10 = {};
    var13 = var7[var11];
    var13 = var12.bind(var1)(var13);
    var13 = var13.colors;
    var13 = var13.WHITE;
    var10['borderColor'] = var13;
    var5['declineButton'] = var10;
    var10 = {};
    var13 = var7[var11];
    var13 = var12.bind(var1)(var13);
    var13 = var13.colors;
    var13 = var13.WHITE;
    var10['color'] = var13;
    var5['declineButtonText'] = var10;
    var10 = {};
    var11 = var7[var11];
    var11 = var12.bind(var1)(var11);
    var11 = var11.unsafe_rawColors;
    var11 = var11.GREEN_360;
    var10['color'] = var11;
    var5['acceptButtonText'] = var10;
    var5 = var8.bind(var9)(var5);
    var _closure1_slot12 = var5;
    var5 = 27;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/stage_channels/native/components/GlobalStageChannelStatus.tsx';
    var5 = var6.bind(var7)(var5);
    var4 = function GlobalStageChannelStatus(arg1) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
            var1 = arg1;
            var7 = var1.channel;
            var21 = var1.guild;
            var6 = undefined;
            var _closure2_slot0 = var6;
            var1 = _closure1_slot12;
            var20 = var1.bind(var6)();
            var1 = null;
            var2 = var1 == var7;
            var11 = undefined;
            if(var2) { _fun0006_ip = 35; continue _fun0006 }
case 36:
            var11 = var7.id;
case 35:
            _closure2_slot0 = var11;
            var8 = _closure1_slot1;
            var9 = _closure1_slot3;
            var2 = 20;
            var2 = var9[var2];
            var2 = var8.bind(var6)(var2);
            var2 = var2.bind(var6)();
            var5 = 21;
            var5 = var9[var5];
            var5 = var8.bind(var6)(var5);
            var19 = var5.bind(var6)(var11);
            var8 = _closure1_slot0;
            var5 = 11;
            var5 = var9[var5];
            var10 = var8.bind(var6)(var5);
            var9 = var10.useStateFromStores;
            var5 = _closure1_slot9;
            var8 = new Array(1);
            var8[0] = var5;
            var5 = new Array(1);
            var5[0] = var11;
            var4 = function() {
                var3 = _closure1_slot9;
                var2 = var3.getStageInstanceByChannel;
                var1 = _closure2_slot0;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var5 = var9.bind(var10)(var8, var4, var5);
            if(var19) { _fun0006_ip = 37; continue _fun0006 }
case 38:
            if(!(var1 == var5)) { _fun0006_ip = 39; continue _fun0006 }
case 40:
            var18 = var20.icon;
            _fun0006_ip = 41; continue _fun0006;
case 39:
            var18 = var20.activeStageIcon;
case 41:
            _fun0006_ip = 42; continue _fun0006;
case 37:
            var18 = var20.activeSpeakerIcon;
case 42:
            var8 = _closure1_slot1;
            var9 = _closure1_slot3;
            var4 = 22;
            var4 = var9[var4];
            var4 = var8.bind(var6)(var4);
            var9 = var4.bind(var6)();
            if(var19) { _fun0006_ip = 43; continue _fun0006 }
case 11:
            if(var2) { _fun0006_ip = 43; continue _fun0006 }
case 44:
            var8 = _closure1_slot0;
            var10 = _closure1_slot3;
            var4 = 23;
            var4 = var10[var4];
            var8 = var8.bind(var6)(var4);
            var4 = var8.isThemeDark;
            var4 = var4.bind(var8)(var9);
            var13 = 'dark-content';
            if(!var4) { _fun0006_ip = 45; continue _fun0006 }
case 43:
            var13 = 'light-content';
case 45:
            if(!(var1 != var7)) { _fun0006_ip = 46; continue _fun0006 }
case 47:
            if(!(var1 != var21)) { _fun0006_ip = 46; continue _fun0006 }
case 48:
            var9 = var21.name;
            var8 = var7.name;
            var4 = global;
            var4 = var4.HermesInternal;
            var4 = var4.concat;
            var12 = '';
            var22 = ': ';
            var17 = var4.bind(var12)(var9, var22, var8);
            var8 = var1 == var5;
            var4 = undefined;
            if(var8) { _fun0006_ip = 49; continue _fun0006 }
case 50:
            var4 = var5.topic;
case 49:
            var5 = var1 != var4;
            var23 = var12;
            if(!var5) { _fun0006_ip = 51; continue _fun0006 }
case 52:
            var23 = var4;
case 51:
            var5 = var23.length;
            var4 = var17.length;
            var5 = var5 + var4;
            var4 = 50;
            var14 = var5 > var4;
            if(var2) { _fun0006_ip = 53; continue _fun0006 }
case 54:
            var5 = _closure1_slot11;
            var4 = _closure1_slot7;
            var2 = {};
            var8 = var20.noticeContainer;
            var2['style'] = var8;
            var11 = _closure1_slot10;
            var16 = _closure1_slot1;
            var9 = _closure1_slot3;
            var8 = 24;
            var8 = var9[var8];
            var10 = var16.bind(var6)(var8);
            var8 = {};
            var15 = true;
            var8['animated'] = var15;
            var8['barStyle'] = var13;
            var10 = var11.bind(var6)(var10, var8);
            var8 = new Array(3);
            var8[0] = var10;
            var15 = _closure1_slot10;
            var10 = 25;
            var11 = var9[var10];
            var13 = var16.bind(var6)(var11);
            var11 = {};
            var11['style'] = var18;
            var10 = var9[var10];
            var10 = var16.bind(var6)(var10);
            var10 = var10.Sizes;
            var10 = var10.REFRESH_SMALL_16;
            var11['size'] = var10;
            var10 = _closure1_slot0;
            var16 = 26;
            var16 = var9[var16];
            var18 = var10.bind(var6)(var16);
            var16 = var18.getChannelIconWithGuild;
            var16 = var16.bind(var18)(var7, var21);
            var11['source'] = var16;
            var11 = var15.bind(var6)(var13, var11);
            var8[1] = var11;
            var11 = _closure1_slot11;
            var18 = 18;
            var9 = var9[var18];
            var9 = var10.bind(var6)(var9);
            var10 = var9.LegacyText;
            var9 = {};
            var13 = 1;
            var9['numberOfLines'] = var13;
            var13 = var12 !== var23;
            if(!var13) { _fun0006_ip = 55; continue _fun0006 }
case 56:
            var16 = _closure1_slot11;
            var15 = _closure1_slot0;
            var12 = _closure1_slot3;
            var12 = var12[var18];
            var12 = var15.bind(var6)(var12);
            var15 = var12.LegacyText;
            var12 = {};
            var24 = var20.topic;
            var21 = new Array(2);
            var21[0] = var24;
            var24 = var19;
            if(!var19) { _fun0006_ip = 57; continue _fun0006 }
case 58:
            var24 = var20.invitedHeaderText;
case 57:
            var21[1] = var24;
            var12['style'] = var21;
            var21 = new Array(2);
            var21[0] = var23;
            if(!var14) { _fun0006_ip = 59; continue _fun0006 }
case 60:
            var22 = null;
case 59:
            var21[1] = var22;
            var12['children'] = var21;
            var13 = var16.bind(var6)(var15, var12);
case 55:
            var12 = new Array(2);
            var12[0] = var13;
            var13 = !var14;
            if(var14) { _fun0006_ip = 61; continue _fun0006 }
case 62:
            var16 = _closure1_slot10;
            var15 = _closure1_slot0;
            var14 = _closure1_slot3;
            var14 = var14[var18];
            var14 = var15.bind(var6)(var14);
            var15 = var14.LegacyText;
            var14 = {};
            var21 = var20.channel;
            var18 = new Array(2);
            var18[0] = var21;
            if(!var19) { _fun0006_ip = 63; continue _fun0006 }
case 64:
            var19 = var20.invitedHeaderText;
case 63:
            var18[1] = var19;
            var14['style'] = var18;
            var14['children'] = var17;
            var13 = var16.bind(var6)(var15, var14);
case 61:
            var12[1] = var13;
            var9['children'] = var12;
            var9 = var11.bind(var6)(var10, var9);
            var8[2] = var9;
            var2['children'] = var8;
            var2 = var5.bind(var6)(var4, var2);
            _fun0006_ip = 65; continue _fun0006;
case 53:
            var5 = _closure1_slot10;
            var4 = _closure1_slot14;
            var3 = {};
            var3['channel'] = var7;
            var2 = var5.bind(var6)(var4, var3);
case 65:
            return var2;
case 46:
            return var1;
        }
    };
    var3['default'] = var4;
    var3['StageChannelRaiseHandAck'] = var2;
    return var1;
})();