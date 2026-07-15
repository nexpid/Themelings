// app/modules/quests/native/BountiesModal/BountyVideo.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var4);
    var1 = 0;
    var8 = var6[var1];
    var4 = metroImportAll;
    var1 = undefined;
    var4 = var4.bind(var1)(var8);
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var8 = var4.View;
    var _closure1_slot3 = var8;
    var4 = var4.StyleSheet;
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.QuestsExperimentLocations;
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var8 = var4.jsx;
    var _closure1_slot6 = var8;
    var8 = var4.jsxs;
    var _closure1_slot7 = var8;
    var4 = var4.Fragment;
    var _closure1_slot8 = var4;
    var4 = {'top': 48, 'bottom': 16, 'left': 16, 'right': 16};
    var _closure1_slot9 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var4 = var4.radii;
    var4 = var4.lg;
    var _closure1_slot10 = var4;
    var4 = 5;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = function() {
        var1 = {};
        var2 = {};
        var3 = _closure1_slot4;
        var10 = var3.absoluteFillObject;
        var11 = var2;
        var3 = copyDataProperties(var11, var10);
        var5 = 'hidden';
        var3 = 'overflow';
        var2[2] = var5;
        var3 = _closure1_slot10;
        var5 = 'borderRadius';
        var2[4] = var3;
        var1['videoContainer'] = var2;
        var2 = {'position': 'absolute', 'top': null, 'left': null, 'flexDirection': 'row', 'alignItems': 'center'};
        var8 = _closure1_slot1;
        var7 = _closure1_slot2;
        var5 = 4;
        var9 = var7[var5];
        var6 = undefined;
        var9 = var8.bind(var6)(var9);
        var9 = var9.space;
        var9 = var9.PX_8;
        var2['top'] = var9;
        var9 = var7[var5];
        var9 = var8.bind(var6)(var9);
        var9 = var9.space;
        var9 = var9.PX_8;
        var2['left'] = var9;
        var5 = var7[var5];
        var5 = var8.bind(var6)(var5);
        var5 = var5.space;
        var5 = var5.PX_8;
        var2['gap'] = var5;
        var1['leftRow'] = var2;
        var2 = {'position': 'absolute', 'bottom': 0};
        var5 = _closure1_slot0;
        var4 = 6;
        var4 = var7[var4];
        var4 = var5.bind(var6)(var4);
        var4 = var4.PROGRESS_BAR_HEIGHT;
        var2['height'] = var4;
        var2['left'] = var3;
        var2['right'] = var3;
        var1['progress'] = var2;
        return var1;
    };
    var4 = var7.bind(var8)(var4);
    var _closure1_slot11 = var4;
    var4 = {};
    var7 = 'function BountyVideoTsx1(){const{isScrollingInBoundsSharedValue,withTiming,isActive,timingStandard}=this.__closure;var _isScrollingInBoundsS;const isScrollingInBounds=((_isScrollingInBoundsS=isScrollingInBoundsSharedValue)===null||_isScrollingInBoundsS===void 0?void 0:_isScrollingInBoundsS.get())===true;return{opacity:withTiming(isActive&&!isScrollingInBounds?1:0,timingStandard)};}';
    var4['code'] = var7;
    var _closure1_slot12 = var4;
    var4 = 17;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/quests/native/BountiesModal/BountyVideo.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function BountyVideo(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arg1;
            var22 = var1.bounty;
            var20 = var1.sourceQuestContent;
            var29 = var1.isCompleted;
            var2 = var1.isCtaVisible;
            var23 = var1.isEndCardVisible;
            var11 = var1.isProgressBarVisible;
            var27 = var1.orbsBalance;
            var32 = var1.handleVideoEnd;
            var33 = var1.handleVideoProgress;
            var31 = var1.handleVideoPaused;
            var30 = var1.handleVideoResumed;
            var24 = var1.handleVideoError;
            var25 = var1.rewardRemainingSeconds;
            var28 = var1.rewardTotalSeconds;
            var12 = var1.normalizedProgress;
            var19 = var1.initialProgress;
            var17 = var1.repeat;
            var34 = var1.isActive;
            var4 = undefined;
            if(!(var34 === var4)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var34 = false;
case 2:
            var _closure2_slot0 = var34;
            var35 = var1.isRecapPageRevealed;
            if(!(var35 === var4)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var35 = false;
case 4:
            var13 = var1.isScrollingInBoundsSharedValue;
            var _closure2_slot1 = var13;
            var10 = var1.renderEndCard;
            var38 = var1.playerRef;
            var16 = var1.onPlayerStateChange;
            var26 = var1.balanceWidgetPillResetKey;
            var1 = _closure1_slot11;
            var9 = var1.bind(var4)();
            var14 = _closure1_slot0;
            var15 = _closure1_slot2;
            var1 = 7;
            var1 = var15[var1];
            var5 = var14.bind(var4)(var1);
            var1 = var5.useRnvHttpEngine;
            var37 = var1.bind(var5)();
            var1 = 8;
            var1 = var15[var1];
            var1 = var14.bind(var4)(var1);
            var6 = var1.BountiesStage1Experiment;
            var5 = var6.useConfig;
            var1 = {};
            var7 = _closure1_slot5;
            var7 = var7.VIDEO_MODAL_MOBILE;
            var1['location'] = var7;
            var1 = var5.bind(var6)(var1);
            var36 = var1.enabled;
            var1 = 9;
            var1 = var15[var1];
            var6 = var14.bind(var4)(var1);
            var5 = var6.useIsBountiesVerticalScrollExperimentEnabled;
            var1 = 'BountyVideo';
            var1 = var5.bind(var6)(var1);
            var6 = 10;
            var5 = var15[var6];
            var7 = var14.bind(var4)(var5);
            var5 = var7.useAnimatedStyle;
            var3 = function L() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var2 = _closure2_slot1;
                    var1 = null;
                    var1 = var1 == var2;
                    var7 = undefined;
                    var8 = undefined;
                    if(var1) { _fun0002_ip = 6; continue _fun0002 }
case 7:
                    var2 = _closure2_slot1;
                    var1 = var2.get;
                    var8 = var1.bind(var2)();
case 6:
                    var1 = {};
                    var5 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var4 = 11;
                    var4 = var6[var4];
                    var5 = var5.bind(var7)(var4);
                    var4 = var5.withTiming;
                    var6 = _closure2_slot0;
                    var3 = 0;
                    if(!var6) { _fun0002_ip = 8; continue _fun0002 }
case 9:
                    var6 = true;
                    var3 = 0;
                    if(!(var6 !== var8)) { _fun0002_ip = 8; continue _fun0002 }
case 10:
                    var3 = 1;
case 8:
                    var6 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    var2 = 12;
                    var2 = var8[var2];
                    var2 = var6.bind(var7)(var2);
                    var2 = var2.timingStandard;
                    var2 = var4.bind(var5)(var3, var2);
                    var1['opacity'] = var2;
                    return var1;
                }
            };
            var8 = {};
            var8['isScrollingInBoundsSharedValue'] = var13;
            var13 = 11;
            var13 = var15[var13];
            var13 = var14.bind(var4)(var13);
            var13 = var13.withTiming;
            var8['withTiming'] = var13;
            var8['isActive'] = var34;
            var13 = 12;
            var13 = var15[var13];
            var13 = var14.bind(var4)(var13);
            var13 = var13.timingStandard;
            var8['timingStandard'] = var13;
            var3['__closure'] = var8;
            var8 = 12287714482150.0;
            var3['__workletHash'] = var8;
            var8 = _closure1_slot12;
            var3['__initData'] = var8;
            var14 = var5.bind(var7)(var3);
            var21 = var2;
            if(!var1) { _fun0001_ip = 11; continue _fun0001 }
case 12:
            var1 = var2;
            if(!var2) { _fun0001_ip = 13; continue _fun0001 }
case 14:
            var1 = !var23;
case 13:
            var21 = var1;
case 11:
            var3 = _closure1_slot7;
            var2 = _closure1_slot8;
            var1 = {};
            var7 = _closure1_slot3;
            var5 = {};
            var8 = var9.videoContainer;
            var5['style'] = var8;
            var15 = _closure1_slot6;
            var13 = _closure1_slot0;
            var39 = _closure1_slot2;
            var8 = 13;
            var8 = var39[var8];
            var8 = var13.bind(var4)(var8);
            var13 = var8.AdVideoPlayer;
            var8 = {};
            var8['ref'] = var38;
            var38 = {};
            var39 = var22.videoHls;
            var38['uri'] = var39;
            var8['source'] = var38;
            var8['httpEngine'] = var37;
            var36 = !var36;
            if(!var36) { _fun0001_ip = 15; continue _fun0001 }
case 16:
            var36 = undefined;
case 15:
            var8['automaticallyWaitsToMinimizeStalling'] = var36;
            var8['initialProgress'] = var19;
            var19 = false;
            var8['isFullscreen'] = var19;
            var34 = !var34;
            if(var34) { _fun0001_ip = 17; continue _fun0001 }
case 18:
            var34 = var23;
case 17:
            if(var34) { _fun0001_ip = 19; continue _fun0001 }
case 20:
            var34 = var35;
case 19:
            var8['externallyPaused'] = var34;
            var34 = _closure1_slot4;
            var34 = var34.absoluteFillObject;
            var8['style'] = var34;
            var34 = _closure1_slot9;
            var8['contentInsets'] = var34;
            var8['onProgress'] = var33;
            var8['onEnd'] = var32;
            var8['onPausePlayback'] = var31;
            var8['onResumePlayback'] = var30;
            var8['onError'] = var24;
            var8['hideControls'] = var23;
            var8['showSkipButtons'] = var19;
            var8['repeat'] = var17;
            var17 = 'center';
            var8['bufferingSpinnerPlacement'] = var17;
            var8['onPlayerStateChange'] = var16;
            var8 = var15.bind(var4)(var13, var8);
            var15 = new Array(4);
            var15[0] = var8;
            var8 = null;
            var13 = var8 == var10;
            var8 = undefined;
            if(var13) { _fun0001_ip = 21; continue _fun0001 }
case 22:
            var8 = var10.bind(var4)();
case 21:
            var15[1] = var8;
            var19 = _closure1_slot7;
            var10 = _closure1_slot1;
            var13 = _closure1_slot2;
            var8 = var13[var6];
            var8 = var10.bind(var4)(var8);
            var17 = var8.View;
            var16 = {};
            var23 = var9.leftRow;
            var8 = new Array(2);
            var8[0] = var23;
            var8[1] = var14;
            var16['style'] = var8;
            var8 = _closure1_slot6;
            var23 = 14;
            var23 = var13[var23];
            var24 = var10.bind(var4)(var23);
            var23 = {};
            var23['isCompleted'] = var29;
            var23['totalSeconds'] = var28;
            var23['remainingSeconds'] = var25;
            var24 = var8.bind(var4)(var24, var23);
            var23 = new Array(2);
            var23[0] = var24;
            var25 = _closure1_slot0;
            var24 = 15;
            var24 = var13[var24];
            var24 = var25.bind(var4)(var24);
            var25 = var24.BalanceWidgetPill;
            var24 = {};
            var24['balance'] = var27;
            var24 = var8.bind(var4)(var25, var24, var26);
            var23[1] = var24;
            var16['children'] = var23;
            var16 = var19.bind(var4)(var17, var16);
            var15[2] = var16;
            var16 = var13[var6];
            var16 = var10.bind(var4)(var16);
            var17 = var16.View;
            var16 = {};
            var18 = _closure1_slot4;
            var19 = var18.absoluteFillObject;
            var18 = new Array(2);
            var18[0] = var19;
            var18[1] = var14;
            var16['style'] = var18;
            var18 = 'box-none';
            var16['pointerEvents'] = var18;
            var18 = 16;
            var18 = var13[var18];
            var19 = var10.bind(var4)(var18);
            var18 = {};
            var18['bounty'] = var22;
            var18['visible'] = var21;
            var18['sourceQuestContent'] = var20;
            var18 = var8.bind(var4)(var19, var18);
            var16['children'] = var18;
            var16 = var8.bind(var4)(var17, var16);
            var15[3] = var16;
            var5['children'] = var15;
            var7 = var3.bind(var4)(var7, var5);
            var5 = new Array(2);
            var5[0] = var7;
            var6 = var13[var6];
            var6 = var10.bind(var4)(var6);
            var7 = var6.View;
            var6 = {};
            var15 = var9.progress;
            var9 = new Array(2);
            var9[0] = var15;
            var9[1] = var14;
            var6['style'] = var9;
            var9 = 6;
            var9 = var13[var9];
            var10 = var10.bind(var4)(var9);
            var9 = {};
            var9['progress'] = var12;
            var9['visible'] = var11;
            var9 = var8.bind(var4)(var10, var9);
            var6['children'] = var9;
            var6 = var8.bind(var4)(var7, var6);
            var5[1] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['BountyVideo'] = var2;
    return var1;
})();