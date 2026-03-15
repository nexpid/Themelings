// app/modules/stage_channels/native/components/RequestToSpeakActionSheet.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var11 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var11;
    var _closure1_slot2 = var6;
    var1 = function RequestToSpeakRow(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arg1;
            var1 = var1.channel;
            var12 = _closure1_slot0;
            var8 = _closure1_slot2;
            var2 = 9;
            var2 = var8[var2];
            var4 = undefined;
            var3 = var12.bind(var4)(var2);
            var2 = var3.useRequestToSpeakPermission;
            var1 = var1.id;
            var3 = var2.bind(var3)(var1);
            var2 = _closure1_slot3;
            var1 = 2;
            var2 = var2.bind(var4)(var3, var1);
            var1 = 0;
            var6 = var2[var1];
            var1 = 1;
            var1 = var2[var1];
            var _closure2_slot0 = var1;
            var3 = _closure1_slot9;
            var1 = 10;
            var1 = var8[var1];
            var1 = var12.bind(var4)(var1);
            var2 = var1.TableSwitchRow;
            var1 = {};
            var11 = 11;
            var9 = var8[var11];
            var9 = var12.bind(var4)(var9);
            var10 = var9.intl;
            var9 = var10.string;
            var8 = var8[var11];
            var8 = var12.bind(var4)(var8);
            var8 = var8.t;
            var8 = var8.TYZgzW;
            var8 = var9.bind(var10)(var8);
            var1['label'] = var8;
            var8 = _closure1_slot0;
            var7 = _closure1_slot2;
            var9 = var7[var11];
            var9 = var8.bind(var4)(var9);
            var10 = var9.intl;
            var9 = var10.string;
            var7 = var7[var11];
            var7 = var8.bind(var4)(var7);
            var8 = var7.t;
            if(var6) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var7 = var8.laPwJQ;
            var7 = var9.bind(var10)(var7);
            _fun0001_ip = 4; continue _fun0001;
case 2:
            var8 = var8.JcFI/U;
            var7 = var9.bind(var10)(var8);
case 4:
            var1['subLabel'] = var7;
            var1['value'] = var6;
            var5 = function onValueChange(arg1) {
                var3 = _closure2_slot0;
                var2 = undefined;
                var1 = arg1;
                var1 = var3.bind(var2)(var1);
                return var1;
            };
            var1['onValueChange'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot12 = var1;
    var1 = function ManageSelfSpeakerRow(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var1 = arg1;
            var8 = var1.channel;
            var _closure2_slot0 = var8;
            var4 = undefined;
            var _closure2_slot1 = var4;
            var3 = _closure1_slot0;
            var1 = _closure1_slot2;
            var2 = 12;
            var2 = var1[var2];
            var9 = var3.bind(var4)(var2);
            var6 = var9.useStateFromStores;
            var2 = _closure1_slot6;
            var3 = new Array(1);
            var3[0] = var2;
            var2 = function() {
                var2 = _closure1_slot6;
                var1 = var2.getId;
                var1 = var1.bind(var2)();
                return var1;
            };
            var3 = var6.bind(var9)(var3, var2);
            var2 = _closure1_slot1;
            var6 = 13;
            var1 = var1[var6];
            var2 = var2.bind(var4)(var1);
            var1 = null;
            var9 = var1 == var8;
            var1 = undefined;
            if(var9) { _fun0002_ip = 5; continue _fun0002 }
case 6:
            var1 = var8.id;
case 5:
            var2 = var2.bind(var4)(var3, var1);
            var3 = _closure1_slot0;
            var1 = _closure1_slot2;
            var1 = var1[var6];
            var1 = var3.bind(var4)(var1);
            var1 = var1.RequestToSpeakStates;
            var1 = var1.ON_STAGE;
            var1 = var2 === var1;
            _closure2_slot1 = var1;
            var6 = _closure1_slot0;
            var9 = _closure1_slot2;
            var2 = 11;
            var3 = var9[var2];
            var3 = var6.bind(var4)(var3);
            var8 = var3.intl;
            var3 = var8.string;
            var2 = var9[var2];
            var2 = var6.bind(var4)(var2);
            var2 = var2.t;
            if(var1) { _fun0002_ip = 7; continue _fun0002 }
case 8:
            var6 = var2.8Joh+p;
            var6 = var3.bind(var8)(var6);
            _fun0002_ip = 9; continue _fun0002;
case 7:
            var2 = var2.ezLpY6;
            var6 = var3.bind(var8)(var2);
case 9:
            var2 = _closure1_slot0;
            var3 = _closure1_slot2;
            if(var1) { _fun0002_ip = 10; continue _fun0002 }
case 4:
            var1 = 15;
            var1 = var3[var1];
            var1 = var2.bind(var4)(var1);
            var9 = var1.MicrophoneArrowRightIcon;
            _fun0002_ip = 11; continue _fun0002;
case 10:
            var1 = 14;
            var1 = var3[var1];
            var1 = var2.bind(var4)(var1);
            var9 = var1.GroupArrowDownIcon;
case 11:
            var3 = _closure1_slot9;
            var2 = _closure1_slot0;
            var10 = _closure1_slot2;
            var1 = 16;
            var1 = var10[var1];
            var1 = var2.bind(var4)(var1);
            var2 = var1.TableRow;
            var1 = {};
            var7 = function onPress() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var1 = _closure2_slot1;
                    if(var1) { _fun0003_ip = 12; continue _fun0003 }
case 13:
                    var4 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var2 = 17;
                    var2 = var5[var2];
                    var5 = undefined;
                    var6 = var4.bind(var5)(var2);
                    var4 = var6.shouldAgeVerifyToSpeakForCurrentUser;
                    var2 = _closure2_slot0;
                    var2 = var2.id;
                    var2 = var4.bind(var6)(var2);
                    if(!var2) { _fun0003_ip = 12; continue _fun0003 }
case 14:
                    var4 = _closure1_slot1;
                    var6 = _closure1_slot2;
                    var2 = 18;
                    var2 = var6[var2];
                    var8 = var4.bind(var5)(var2);
                    var7 = var8.showAgeVerificationGetStartedModal;
                    var2 = {};
                    var10 = _closure1_slot0;
                    var9 = 19;
                    var9 = var6[var9];
                    var9 = var10.bind(var5)(var9);
                    var9 = var9.AgeVerificationModalEntryPoint;
                    var9 = var9.STAGE_CHANNEL_RAISE_HAND;
                    var2['entryPoint'] = var9;
                    var2 = var7.bind(var8)(var2);
                    var2 = 20;
                    var2 = var6[var2];
                    var4 = var4.bind(var5)(var2);
                    var2 = var4.hideActionSheet;
                    var1 = _closure1_slot8;
                    var1 = var2.bind(var4)(var1);
                    var1 = undefined;
                    return var1;
case 12:
                    var6 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var1 = 21;
                    var4 = var5[var1];
                    var1 = undefined;
                    var7 = var6.bind(var1)(var4);
                    var6 = var7.audienceAckRequestToSpeak;
                    var4 = _closure2_slot0;
                    var3 = _closure2_slot1;
                    var3 = var6.bind(var7)(var4, var3);
                    var4 = _closure1_slot1;
                    var3 = 20;
                    var3 = var5[var3];
                    var4 = var4.bind(var1)(var3);
                    var3 = var4.hideActionSheet;
                    var2 = _closure1_slot8;
                    var2 = var3.bind(var4)(var2);
                    return var1;
                }
            };
            var1['onPress'] = var7;
            var8 = _closure1_slot9;
            var7 = {};
            var7 = var8.bind(var4)(var9, var7);
            var1['icon'] = var7;
            var1['label'] = var6;
            var7 = _closure1_slot9;
            var9 = _closure1_slot1;
            var5 = 22;
            var5 = var10[var5];
            var6 = var9.bind(var4)(var5);
            var5 = {};
            var8 = 23;
            var8 = var10[var8];
            var8 = var9.bind(var4)(var8);
            var5['source'] = var8;
            var5 = var7.bind(var4)(var6, var5);
            var1['trailing'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot13 = var1;
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
    var4 = var11.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 1;
    var7 = var6[var4];
    var4 = metroImportAll;
    var4 = var4.bind(var1)(var7);
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.View;
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var11.bind(var1)(var4);
    var _closure1_slot6 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var11.bind(var1)(var4);
    var _closure1_slot7 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.REQUEST_TO_SPEAK_SHEET_KEY;
    var _closure1_slot8 = var4;
    var4 = 6;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.jsx;
    var _closure1_slot9 = var7;
    var4 = var4.jsxs;
    var _closure1_slot10 = var4;
    var4 = 7;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = {};
    var9 = {};
    var10 = 8;
    var10 = var6[var10];
    var10 = var11.bind(var1)(var10);
    var10 = var10.colors;
    var10 = var10.BACKGROUND_SURFACE_HIGH;
    var9['backgroundColor'] = var10;
    var4['container'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot11 = var4;
    var4 = 35;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/stage_channels/native/components/RequestToSpeakActionSheet.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function RequestToSpeakActionSheet(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var1 = arg1;
            var8 = var1.channelId;
            var _closure2_slot0 = var8;
            var40 = var1.analyticsLocations;
            var9 = _closure1_slot0;
            var10 = _closure1_slot2;
            var1 = 24;
            var1 = var10[var1];
            var5 = undefined;
            var4 = var9.bind(var5)(var1);
            var2 = var4.useToken;
            var7 = _closure1_slot1;
            var23 = 8;
            var1 = var10[var23];
            var1 = var7.bind(var5)(var1);
            var1 = var1.modules;
            var1 = var1.mobile;
            var1 = var1.TABLE_ROW_PADDING;
            var29 = var2.bind(var4)(var1);
            var1 = _closure1_slot11;
            var12 = var1.bind(var5)();
            var2 = 25;
            var1 = var10[var2];
            var4 = var7.bind(var5)(var1);
            var1 = new Array(1);
            var22 = 0;
            var41 = var1;
            var39 = 0;
            var6 = arraySpread(var41, var40, var39);
            var3 = 26;
            var3 = var10[var3];
            var3 = var7.bind(var5)(var3);
            var3 = var3.REQUEST_TO_SPEAK;
            var1[var6] = var3;
            var3 = 1;
            var6 = var6 + var3;
            var1 = var4.bind(var5)(var1);
            var6 = var1.analyticsLocations;
            var1 = 12;
            var1 = var10[var1];
            var11 = var9.bind(var5)(var1);
            var7 = var11.useStateFromStores;
            var1 = _closure1_slot7;
            var4 = new Array(1);
            var4[0] = var1;
            var1 = function() {
                var3 = _closure1_slot7;
                var2 = var3.getChannel;
                var1 = _closure2_slot0;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var21 = var7.bind(var11)(var4, var1);
            var1 = 27;
            var1 = var10[var1];
            var7 = var9.bind(var5)(var1);
            var4 = var7.useStageParticipantsCount;
            var1 = 28;
            var1 = var10[var1];
            var1 = var9.bind(var5)(var1);
            var1 = var1.StageChannelParticipantNamedIndex;
            var1 = var1.ALL_REQUESTED_TO_SPEAK;
            var38 = var4.bind(var7)(var8, var1);
            var4 = _closure1_slot4;
            var1 = var4.useState;
            var8 = var1.bind(var4)(var22);
            var1 = _closure1_slot3;
            var7 = 2;
            var1 = var1.bind(var5)(var8, var7);
            var24 = var1[var22];
            var _closure2_slot1 = var24;
            var1 = var1[var3];
            var _closure2_slot2 = var1;
            var1 = var4.useState;
            var4 = var1.bind(var4)(var22);
            var1 = _closure1_slot3;
            var1 = var1.bind(var5)(var4, var7);
            var19 = var1[var22];
            var _closure2_slot3 = var19;
            var1 = var1[var3];
            var _closure2_slot4 = var1;
            var1 = null;
            var3 = var1 == var21;
            if(var3) { _fun0004_ip = 15; continue _fun0004 }
case 16:
            var4 = _closure1_slot9;
            var32 = _closure1_slot0;
            var25 = _closure1_slot2;
            var2 = var25[var2];
            var2 = var32.bind(var5)(var2);
            var3 = var2.AnalyticsLocationProvider;
            var2 = {};
            var2['value'] = var6;
            var8 = _closure1_slot9;
            var6 = 29;
            var6 = var25[var6];
            var6 = var32.bind(var5)(var6);
            var7 = var6.BottomSheet;
            var6 = {};
            var9 = true;
            var6['scrollable'] = var9;
            var9 = 5;
            var9 = var38 >= var9;
            var6['startExpanded'] = var9;
            var11 = _closure1_slot9;
            var9 = 30;
            var9 = var25[var9];
            var9 = var32.bind(var5)(var9);
            var10 = var9.BottomSheetScrollView;
            var9 = {};
            var12 = var12.container;
            var9['style'] = var12;
            var12 = function onLayout(arg1) {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                    var1 = arg1;
                    var1 = var1.nativeEvent;
                    var1 = var1.layout;
                    var3 = var1.height;
                    var1 = null;
                    var1 = var1 != var3;
                    if(!var1) { _fun0005_ip = 17; continue _fun0005 }
case 18:
                    var2 = _closure2_slot3;
                    var1 = var2 !== var3;
case 17:
                    if(!var1) { _fun0005_ip = 19; continue _fun0005 }
case 20:
                    var2 = _closure2_slot4;
                    var1 = undefined;
                    var1 = var2.bind(var1)(var3);
case 19:
                    var1 = undefined;
                    return var1;
                }
            };
            var9['onLayout'] = var12;
            var14 = _closure1_slot10;
            var15 = 31;
            var12 = var25[var15];
            var12 = var32.bind(var5)(var12);
            var13 = var12.Stack;
            var12 = {};
            var12['spacing'] = var23;
            var15 = var25[var15];
            var15 = var32.bind(var5)(var15);
            var17 = var15.Stack;
            var15 = {};
            var15['spacing'] = var23;
            var18 = function onLayout(arg1) {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                    var1 = arg1;
                    var1 = var1.nativeEvent;
                    var1 = var1.layout;
                    var3 = var1.height;
                    var1 = null;
                    var1 = var1 != var3;
                    if(!var1) { _fun0006_ip = 17; continue _fun0006 }
case 18:
                    var2 = _closure2_slot1;
                    var1 = var2 !== var3;
case 17:
                    if(!var1) { _fun0006_ip = 19; continue _fun0006 }
case 20:
                    var2 = _closure2_slot2;
                    var1 = undefined;
                    var1 = var2.bind(var1)(var3);
case 19:
                    var1 = undefined;
                    return var1;
                }
            };
            var15['onLayout'] = var18;
            var18 = 32;
            var18 = var25[var18];
            var18 = var32.bind(var5)(var18);
            var20 = var18.TableRowGroup;
            var18 = {};
            var28 = _closure1_slot9;
            var27 = _closure1_slot12;
            var26 = {};
            var26['channel'] = var21;
            var27 = var28.bind(var5)(var27, var26);
            var26 = new Array(2);
            var26[0] = var27;
            var30 = _closure1_slot9;
            var28 = _closure1_slot13;
            var27 = {};
            var27['channel'] = var21;
            var27 = var30.bind(var5)(var28, var27);
            var26[1] = var27;
            var18['children'] = var26;
            var20 = var14.bind(var5)(var20, var18);
            var18 = new Array(2);
            var18[0] = var20;
            var28 = _closure1_slot9;
            var27 = _closure1_slot5;
            var26 = {};
            var20 = {};
            var20['paddingHorizontal'] = var29;
            var26['style'] = var20;
            var31 = _closure1_slot9;
            var20 = 33;
            var20 = var25[var20];
            var20 = var32.bind(var5)(var20);
            var30 = var20.Text;
            var29 = {'accessibilityRole': 'header', 'variant': 'eyebrow', 'color': 'text-default'};
            var20 = 11;
            var33 = var25[var20];
            var33 = var32.bind(var5)(var33);
            var35 = var33.intl;
            var34 = var35.format;
            var20 = var25[var20];
            var20 = var32.bind(var5)(var20);
            var20 = var20.t;
            var33 = var20.5z7q5a;
            var32 = {};
            var20 = global;
            var36 = var20.HermesInternal;
            var37 = var36.concat;
            var36 = '';
            var36 = var37.bind(var36)(var38);
            var32['numHands'] = var36;
            var32 = var34.bind(var35)(var33, var32);
            var29['children'] = var32;
            var29 = var31.bind(var5)(var30, var29);
            var26['children'] = var29;
            var26 = var28.bind(var5)(var27, var26);
            var18[1] = var26;
            var15['children'] = var18;
            var17 = var14.bind(var5)(var17, var15);
            var15 = new Array(2);
            var15[0] = var17;
            var18 = _closure1_slot9;
            var17 = _closure1_slot1;
            var16 = 34;
            var16 = var25[var16];
            var17 = var17.bind(var5)(var16);
            var16 = {};
            var16['channel'] = var21;
            var21 = var20.Math;
            var20 = var21.max;
            var19 = var19 - var24;
            var19 = var19 - var23;
            var19 = var20.bind(var21)(var19, var22);
            var16['height'] = var19;
            var16 = var18.bind(var5)(var17, var16);
            var15[1] = var16;
            var12['children'] = var15;
            var12 = var14.bind(var5)(var13, var12);
            var9['children'] = var12;
            var9 = var11.bind(var5)(var10, var9);
            var6['children'] = var9;
            var6 = var8.bind(var5)(var7, var6);
            var2['children'] = var6;
            var1 = var4.bind(var5)(var3, var2);
case 15:
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();