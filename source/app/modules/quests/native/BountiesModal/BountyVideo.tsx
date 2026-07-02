// app/modules/quests/native/BountiesModal/BountyVideo.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var8 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var8;
    var _closure1_slot2 = var6;
    var1 = global;
    var9 = var1.Object;
    var7 = var9.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var9)(var3, var1, var4);
    var1 = 0;
    var7 = var6[var1];
    var4 = metroImportAll;
    var1 = undefined;
    var4 = var4.bind(var1)(var7);
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.View;
    var _closure1_slot3 = var7;
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
    var7 = var4.jsx;
    var _closure1_slot6 = var7;
    var7 = var4.jsxs;
    var _closure1_slot7 = var7;
    var4 = var4.Fragment;
    var _closure1_slot8 = var4;
    var4 = 16;
    var7 = {'top': 48, 'bottom': 16, 'left': 16, 'right': 16};
    var _closure1_slot9 = var7;
    var7 = 4;
    var7 = var6[var7];
    var7 = var8.bind(var1)(var7);
    var7 = var7.radii;
    var7 = var7.lg;
    var _closure1_slot10 = var7;
    var7 = 5;
    var7 = var6[var7];
    var9 = var5.bind(var1)(var7);
    var8 = var9.createStyles;
    var7 = function() {
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
    var7 = var8.bind(var9)(var7);
    var _closure1_slot11 = var7;
    var7 = {};
    var8 = 'function BountyVideoTsx1(){const{isScrollingInBoundsSharedValue,withTiming,isActive,timingStandard}=this.__closure;var _isScrollingInBoundsS;const isScrollingInBounds=((_isScrollingInBoundsS=isScrollingInBoundsSharedValue)===null||_isScrollingInBoundsS===void 0?void 0:_isScrollingInBoundsS.get())===true;return{opacity:withTiming(isActive&&!isScrollingInBounds?1:0,timingStandard)};}';
    var7['code'] = var8;
    var _closure1_slot12 = var7;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/quests/native/BountiesModal/BountyVideo.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function BountyVideo(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var2 = arg1;
            var22 = var2.bounty;
            var20 = var2.sourceQuestContent;
            var29 = var2.isCompleted;
            var21 = var2.isCtaVisible;
            var24 = var2.isEndCardVisible;
            var11 = var2.isProgressBarVisible;
            var27 = var2.orbsBalance;
            var33 = var2.handleVideoEnd;
            var34 = var2.handleVideoProgress;
            var32 = var2.handleVideoPaused;
            var31 = var2.handleVideoResumed;
            var30 = var2.handleVideoError;
            var25 = var2.rewardRemainingSeconds;
            var28 = var2.rewardTotalSeconds;
            var12 = var2.normalizedProgress;
            var23 = var2.initialProgress;
            var19 = var2.repeat;
            var35 = var2.isActive;
            var4 = undefined;
            if(!(var35 === var4)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var35 = false;
case 2:
            var _closure2_slot0 = var35;
            var36 = var2.isRecapPageRevealed;
            if(!(var36 === var4)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var36 = false;
case 4:
            var7 = var2.isScrollingInBoundsSharedValue;
            var _closure2_slot1 = var7;
            var10 = var2.renderEndCard;
            var8 = var2.playerRef;
            var17 = var2.onPlayerStateChange;
            var26 = var2.balanceWidgetPillResetKey;
            var2 = _closure1_slot11;
            var9 = var2.bind(var4)();
            var15 = _closure1_slot0;
            var39 = _closure1_slot2;
            var2 = 7;
            var2 = var39[var2];
            var3 = var15.bind(var4)(var2);
            var2 = var3.useRnvHttpEngine;
            var38 = var2.bind(var3)();
            var2 = 8;
            var2 = var39[var2];
            var2 = var15.bind(var4)(var2);
            var5 = var2.BountiesStage1Experiment;
            var3 = var5.useConfig;
            var2 = {};
            var6 = _closure1_slot5;
            var6 = var6.VIDEO_MODAL_MOBILE;
            var2['location'] = var6;
            var2 = var3.bind(var5)(var2);
            var37 = var2.enabled;
            var6 = 9;
            var2 = var39[var6];
            var3 = var15.bind(var4)(var2);
            var2 = var3.useAnimatedStyle;
            var1 = function Q() {
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
                    var4 = 10;
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
                    var2 = 11;
                    var2 = var8[var2];
                    var2 = var6.bind(var7)(var2);
                    var2 = var2.timingStandard;
                    var2 = var4.bind(var5)(var3, var2);
                    var1['opacity'] = var2;
                    return var1;
                }
            };
            var5 = {};
            var5['isScrollingInBoundsSharedValue'] = var7;
            var7 = 10;
            var7 = var39[var7];
            var7 = var15.bind(var4)(var7);
            var7 = var7.withTiming;
            var5['withTiming'] = var7;
            var5['isActive'] = var35;
            var7 = 11;
            var7 = var39[var7];
            var7 = var15.bind(var4)(var7);
            var7 = var7.timingStandard;
            var5['timingStandard'] = var7;
            var1['__closure'] = var5;
            var5 = 12287714482150.0;
            var1['__workletHash'] = var5;
            var5 = _closure1_slot12;
            var1['__initData'] = var5;
            var14 = var2.bind(var3)(var1);
            var3 = _closure1_slot7;
            var2 = _closure1_slot8;
            var1 = {};
            var7 = _closure1_slot3;
            var5 = {};
            var13 = var9.videoContainer;
            var5['style'] = var13;
            var16 = _closure1_slot6;
            var13 = 12;
            var13 = var39[var13];
            var13 = var15.bind(var4)(var13);
            var15 = var13.AdVideoPlayer;
            var13 = {};
            var13['ref'] = var8;
            var39 = {};
            var41 = var22.videoHls;
            var8 = null;
            var42 = var8 != var41;
            var40 = '';
            if(!var42) { _fun0001_ip = 11; continue _fun0001 }
case 12:
            var40 = var41;
case 11:
            var39['uri'] = var40;
            var13['source'] = var39;
            var13['httpEngine'] = var38;
            var37 = !var37;
            if(!var37) { _fun0001_ip = 13; continue _fun0001 }
case 14:
            var37 = undefined;
case 13:
            var13['automaticallyWaitsToMinimizeStalling'] = var37;
            var13['initialProgress'] = var23;
            var23 = false;
            var13['isFullscreen'] = var23;
            var35 = !var35;
            if(var35) { _fun0001_ip = 15; continue _fun0001 }
case 16:
            var35 = var24;
case 15:
            if(var35) { _fun0001_ip = 17; continue _fun0001 }
case 18:
            var35 = var36;
case 17:
            var13['externallyPaused'] = var35;
            var35 = _closure1_slot4;
            var35 = var35.absoluteFillObject;
            var13['style'] = var35;
            var35 = _closure1_slot9;
            var13['contentInsets'] = var35;
            var13['onProgress'] = var34;
            var13['onEnd'] = var33;
            var13['onPausePlayback'] = var32;
            var13['onResumePlayback'] = var31;
            var13['onError'] = var30;
            var13['hideControls'] = var24;
            var13['showSkipButtons'] = var23;
            var13['repeat'] = var19;
            var19 = 'center';
            var13['bufferingSpinnerPlacement'] = var19;
            var13['onPlayerStateChange'] = var17;
            var13 = var16.bind(var4)(var15, var13);
            var15 = new Array(4);
            var15[0] = var13;
            var13 = var8 == var10;
            var8 = undefined;
            if(var13) { _fun0001_ip = 19; continue _fun0001 }
case 20:
            var8 = var10.bind(var4)();
case 19:
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
            var23 = 13;
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
            var24 = 14;
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
            var18 = 15;
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