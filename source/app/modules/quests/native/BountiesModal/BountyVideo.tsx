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
    var4 = var6[var1];
    var1 = undefined;
    var4 = var7.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 1;
    var8 = var6[var4];
    var4 = metroImportAll;
    var4 = var4.bind(var1)(var8);
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var8 = var4.View;
    var _closure1_slot5 = var8;
    var4 = var4.StyleSheet;
    var _closure1_slot6 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.QuestsExperimentLocations;
    var _closure1_slot7 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var8 = var4.jsx;
    var _closure1_slot8 = var8;
    var8 = var4.jsxs;
    var _closure1_slot9 = var8;
    var4 = var4.Fragment;
    var _closure1_slot10 = var4;
    var4 = {'top': 48, 'bottom': 16, 'left': 16, 'right': 16};
    var _closure1_slot11 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var4 = var4.radii;
    var4 = var4.lg;
    var _closure1_slot12 = var4;
    var4 = 6;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = function() {
        var1 = {};
        var2 = {};
        var3 = _closure1_slot6;
        var10 = var3.absoluteFillObject;
        var11 = var2;
        var3 = copyDataProperties(var11, var10);
        var5 = 'hidden';
        var3 = 'overflow';
        var2[2] = var5;
        var3 = _closure1_slot12;
        var5 = 'borderRadius';
        var2[4] = var3;
        var1['videoContainer'] = var2;
        var2 = {'position': 'absolute', 'top': null, 'left': null, 'flexDirection': 'row', 'alignItems': 'center'};
        var8 = _closure1_slot1;
        var7 = _closure1_slot2;
        var5 = 5;
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
        var4 = 7;
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
    var _closure1_slot13 = var4;
    var4 = {};
    var7 = 'function BountyVideoTsx1(){const{isScrollingInBoundsSharedValue,withTiming,isActive,timingStandard}=this.__closure;var _isScrollingInBoundsS;const isScrollingInBounds=((_isScrollingInBoundsS=isScrollingInBoundsSharedValue)===null||_isScrollingInBoundsS===void 0?void 0:_isScrollingInBoundsS.get())===true;return{opacity:withTiming(isActive&&!isScrollingInBounds?1:0,timingStandard)};}';
    var4['code'] = var7;
    var _closure1_slot14 = var4;
    var4 = {};
    var7 = "function BountyVideoTsx2(){const{peekScale,AUTO_SCROLL_PEEK_SCALE,AUTO_SCROLL_PEEK_TOP_OFFSET}=this.__closure;if(peekScale==null){return{};}const scale=peekScale.get();const scaleProgress=(1-scale)/(1-AUTO_SCROLL_PEEK_SCALE);return{transformOrigin:'top',transform:[{translateY:scaleProgress*AUTO_SCROLL_PEEK_TOP_OFFSET},{scale:scale}]};}";
    var4['code'] = var7;
    var _closure1_slot15 = var4;
    var4 = 20;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/quests/native/BountiesModal/BountyVideo.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function BountyVideo(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arg1;
            var30 = var1.bounty;
            var28 = var1.sourceQuestContent;
            var18 = var1.isCompleted;
            var2 = var1.isCtaVisible;
            var23 = var1.isEndCardVisible;
            var11 = var1.isScrollIndicatorEnabled;
            var24 = var1.isProgressBarVisible;
            var14 = var1.orbsBalance;
            var38 = var1.handleVideoEnd;
            var5 = var1.handleVideoProgress;
            var _closure2_slot0 = var5;
            var37 = var1.handleVideoPaused;
            var36 = var1.handleVideoResumed;
            var35 = var1.handleVideoError;
            var16 = var1.rewardRemainingSeconds;
            var17 = var1.rewardTotalSeconds;
            var25 = var1.normalizedProgress;
            var40 = var1.initialProgress;
            var33 = var1.repeat;
            var26 = var1.isActive;
            var4 = undefined;
            if(!(var26 === var4)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var26 = false;
case 2:
            var _closure2_slot1 = var26;
            var41 = var1.isRecapPageRevealed;
            if(!(var41 === var4)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var41 = false;
case 4:
            var29 = var1.isScrollingInBoundsSharedValue;
            var _closure2_slot2 = var29;
            var22 = var1.renderEndCard;
            var45 = var1.playerRef;
            var32 = var1.onPlayerStateChange;
            var13 = var1.balanceWidgetPillResetKey;
            var15 = var1.shouldLoadHls;
            if(!(var15 === var4)) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var15 = true;
case 6:
            var20 = var1.peekScale;
            var _closure2_slot3 = var20;
            var _closure2_slot4 = var4;
            var1 = _closure1_slot13;
            var9 = var1.bind(var4)();
            var21 = _closure1_slot0;
            var27 = _closure1_slot2;
            var1 = 8;
            var1 = var27[var1];
            var6 = var21.bind(var4)(var1);
            var1 = var6.useRnvHttpEngine;
            var44 = var1.bind(var6)();
            var1 = 9;
            var1 = var27[var1];
            var7 = var21.bind(var4)(var1);
            var6 = var7.useBountiesExperience;
            var1 = _closure1_slot7;
            var1 = var1.VIDEO_MODAL_MOBILE;
            var1 = var6.bind(var7)(var1);
            var43 = var1.ownedByVerticalScrollExperiment;
            var42 = var1.stage1Enabled;
            var1 = 10;
            var1 = var27[var1];
            var7 = var21.bind(var4)(var1);
            var6 = var7.useIsBountiesVerticalScrollExperimentEnabled;
            var1 = 'BountyVideo';
            var1 = var6.bind(var7)(var1);
            var8 = _closure1_slot4;
            var6 = var8.useState;
            var34 = false;
            var12 = var6.bind(var8)(var34);
            var7 = _closure1_slot3;
            var6 = 2;
            var7 = var7.bind(var4)(var12, var6);
            var6 = 0;
            var12 = var7[var6];
            var6 = 1;
            var6 = var7[var6];
            _closure2_slot4 = var6;
            var7 = var8.useCallback;
            var6 = new Array(1);
            var6[0] = var5;
            var5 = function(arg1) {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var3 = arg1;
                    var2 = var3.currentTime;
                    var1 = 0;
                    if(!(var2 > var1)) { _fun0002_ip = 8; continue _fun0002 }
case 9:
                    var4 = _closure2_slot4;
                    var2 = undefined;
                    var1 = true;
                    var1 = var4.bind(var2)(var1);
case 8:
                    var2 = _closure2_slot0;
                    var1 = undefined;
                    var2 = var2.bind(var1)(var3);
                    return var1;
                }
            };
            var39 = var7.bind(var8)(var5, var6);
            var6 = 11;
            var5 = var27[var6];
            var8 = var21.bind(var4)(var5);
            var7 = var8.useAnimatedStyle;
            var5 = function z() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var2 = _closure2_slot2;
                    var1 = null;
                    var1 = var1 == var2;
                    var7 = undefined;
                    var8 = undefined;
                    if(var1) { _fun0003_ip = 10; continue _fun0003 }
case 11:
                    var2 = _closure2_slot2;
                    var1 = var2.get;
                    var8 = var1.bind(var2)();
case 10:
                    var1 = {};
                    var5 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var4 = 12;
                    var4 = var6[var4];
                    var5 = var5.bind(var7)(var4);
                    var4 = var5.withTiming;
                    var6 = _closure2_slot1;
                    var3 = 0;
                    if(!var6) { _fun0003_ip = 12; continue _fun0003 }
case 13:
                    var6 = true;
                    var3 = 0;
                    if(!(var6 !== var8)) { _fun0003_ip = 12; continue _fun0003 }
case 14:
                    var3 = 1;
case 12:
                    var6 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    var2 = 13;
                    var2 = var8[var2];
                    var2 = var6.bind(var7)(var2);
                    var2 = var2.timingStandard;
                    var2 = var4.bind(var5)(var3, var2);
                    var1['opacity'] = var2;
                    return var1;
                }
            };
            var19 = {};
            var19['isScrollingInBoundsSharedValue'] = var29;
            var29 = 12;
            var29 = var27[var29];
            var29 = var21.bind(var4)(var29);
            var29 = var29.withTiming;
            var19['withTiming'] = var29;
            var19['isActive'] = var26;
            var29 = 13;
            var29 = var27[var29];
            var29 = var21.bind(var4)(var29);
            var29 = var29.timingStandard;
            var19['timingStandard'] = var29;
            var5['__closure'] = var19;
            var19 = 12287714482150.0;
            var5['__workletHash'] = var19;
            var19 = _closure1_slot14;
            var5['__initData'] = var19;
            var19 = var7.bind(var8)(var5);
            var5 = var27[var6];
            var7 = var21.bind(var4)(var5);
            var5 = var7.useAnimatedStyle;
            var3 = function G() {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                    var3 = _closure2_slot3;
                    var2 = null;
                    if(!(var2 != var3)) { _fun0004_ip = 15; continue _fun0004 }
case 16:
                    var2 = _closure2_slot3;
                    var1 = var2.get;
                    var4 = var1.bind(var2)();
                    var1 = {};
                    var2 = 'top';
                    var1['transformOrigin'] = var2;
                    var3 = {};
                    var10 = 1;
                    var6 = var10 - var4;
                    var8 = _closure1_slot0;
                    var9 = _closure1_slot2;
                    var5 = 14;
                    var2 = var9[var5];
                    var7 = undefined;
                    var2 = var8.bind(var7)(var2);
                    var2 = var2.AUTO_SCROLL_PEEK_SCALE;
                    var2 = var10 - var2;
                    var5 = var9[var5];
                    var5 = var8.bind(var7)(var5);
                    var5 = var5.AUTO_SCROLL_PEEK_TOP_OFFSET;
                    var2 = var6 / var2;
                    var2 = var2 * var5;
                    var3['translateY'] = var2;
                    var2 = new Array(2);
                    var2[0] = var3;
                    var3 = {};
                    var3['scale'] = var4;
                    var2[1] = var3;
                    var1['transform'] = var2;
                    return var1;
case 15:
                    var1 = {};
                    return var1;
                }
            };
            var8 = {};
            var8['peekScale'] = var20;
            var20 = 14;
            var29 = var27[var20];
            var29 = var21.bind(var4)(var29);
            var29 = var29.AUTO_SCROLL_PEEK_SCALE;
            var8['AUTO_SCROLL_PEEK_SCALE'] = var29;
            var20 = var27[var20];
            var20 = var21.bind(var4)(var20);
            var20 = var20.AUTO_SCROLL_PEEK_TOP_OFFSET;
            var8['AUTO_SCROLL_PEEK_TOP_OFFSET'] = var20;
            var3['__closure'] = var8;
            var8 = 1031694137491.0;
            var3['__workletHash'] = var8;
            var8 = _closure1_slot15;
            var3['__initData'] = var8;
            var20 = var5.bind(var7)(var3);
            var29 = var2;
            if(!var1) { _fun0001_ip = 17; continue _fun0001 }
case 18:
            var1 = var2;
            if(!var2) { _fun0001_ip = 19; continue _fun0001 }
case 20:
            var1 = !var23;
case 19:
            var29 = var1;
case 17:
            var3 = _closure1_slot9;
            var2 = _closure1_slot10;
            var1 = {};
            var7 = _closure1_slot1;
            var5 = _closure1_slot2;
            var5 = var5[var6];
            var5 = var7.bind(var4)(var5);
            var7 = var5.View;
            var5 = {};
            var8 = _closure1_slot6;
            var21 = var8.absoluteFillObject;
            var8 = new Array(2);
            var8[0] = var21;
            var8[1] = var20;
            var5['style'] = var8;
            var20 = _closure1_slot5;
            var8 = {};
            var21 = var9.videoContainer;
            var8['style'] = var21;
            var31 = _closure1_slot8;
            if(var15) { _fun0001_ip = 21; continue _fun0001 }
case 22:
            var21 = _closure1_slot5;
            var15 = {};
            var27 = _closure1_slot6;
            var46 = var27.absoluteFillObject;
            var27 = new Array(2);
            var27[0] = var46;
            var46 = {};
            var47 = '#000000';
            var46['backgroundColor'] = var47;
            var27[1] = var46;
            var15['style'] = var27;
            var15 = var31.bind(var4)(var21, var15);
            _fun0001_ip = 23; continue _fun0001;
case 21:
            var27 = _closure1_slot0;
            var46 = _closure1_slot2;
            var21 = 15;
            var21 = var46[var21];
            var21 = var27.bind(var4)(var21);
            var27 = var21.AdVideoPlayer;
            var21 = {};
            var21['ref'] = var45;
            var45 = {};
            var46 = var30.videoHls;
            var45['uri'] = var46;
            var21['source'] = var45;
            var21['httpEngine'] = var44;
            var42 = !var42;
            if(!var42) { _fun0001_ip = 24; continue _fun0001 }
case 25:
            var42 = !var43;
case 24:
            if(!var42) { _fun0001_ip = 26; continue _fun0001 }
case 27:
            var42 = undefined;
case 26:
            var21['automaticallyWaitsToMinimizeStalling'] = var42;
            var21['initialProgress'] = var40;
            var21['isFullscreen'] = var34;
            var40 = !var26;
            if(var40) { _fun0001_ip = 28; continue _fun0001 }
case 29:
            var40 = var23;
case 28:
            if(var40) { _fun0001_ip = 30; continue _fun0001 }
case 31:
            var40 = var41;
case 30:
            var21['externallyPaused'] = var40;
            var40 = _closure1_slot6;
            var40 = var40.absoluteFillObject;
            var21['style'] = var40;
            var40 = _closure1_slot11;
            var21['contentInsets'] = var40;
            var21['onProgress'] = var39;
            var21['onEnd'] = var38;
            var21['onPausePlayback'] = var37;
            var21['onResumePlayback'] = var36;
            var21['onError'] = var35;
            var21['hideControls'] = var23;
            var21['showSkipButtons'] = var34;
            var21['repeat'] = var33;
            var33 = 'center';
            var21['bufferingSpinnerPlacement'] = var33;
            var21['onPlayerStateChange'] = var32;
            var15 = var31.bind(var4)(var27, var21);
case 23:
            var21 = new Array(4);
            var21[0] = var15;
            var15 = null;
            var27 = var15 == var22;
            var15 = undefined;
            if(var27) { _fun0001_ip = 32; continue _fun0001 }
case 33:
            var15 = var22.bind(var4)();
case 32:
            var21[1] = var15;
            if(!var11) { _fun0001_ip = 34; continue _fun0001 }
case 35:
            var11 = var12;
case 34:
            if(!var11) { _fun0001_ip = 36; continue _fun0001 }
case 37:
            var22 = _closure1_slot8;
            var15 = _closure1_slot1;
            var27 = _closure1_slot2;
            var12 = 16;
            var12 = var27[var12];
            var15 = var15.bind(var4)(var12);
            var12 = {};
            var12['opacityStyle'] = var19;
            var12['isActive'] = var26;
            var12['isEndCardVisible'] = var23;
            var11 = var22.bind(var4)(var15, var12);
case 36:
            var21[2] = var11;
            var12 = _closure1_slot8;
            var11 = _closure1_slot1;
            var15 = _closure1_slot2;
            var22 = var15[var6];
            var22 = var11.bind(var4)(var22);
            var23 = var22.View;
            var22 = {};
            var26 = _closure1_slot6;
            var27 = var26.absoluteFillObject;
            var26 = new Array(2);
            var26[0] = var27;
            var26[1] = var19;
            var22['style'] = var26;
            var26 = 'box-none';
            var22['pointerEvents'] = var26;
            var26 = 17;
            var26 = var15[var26];
            var27 = var11.bind(var4)(var26);
            var26 = {};
            var26['bounty'] = var30;
            var26['visible'] = var29;
            var26['sourceQuestContent'] = var28;
            var26 = var12.bind(var4)(var27, var26);
            var22['children'] = var26;
            var22 = var12.bind(var4)(var23, var22);
            var21[3] = var22;
            var8['children'] = var21;
            var20 = var3.bind(var4)(var20, var8);
            var8 = new Array(2);
            var8[0] = var20;
            var20 = var15[var6];
            var20 = var11.bind(var4)(var20);
            var21 = var20.View;
            var20 = {};
            var23 = var9.progress;
            var22 = new Array(2);
            var22[0] = var23;
            var22[1] = var19;
            var20['style'] = var22;
            var22 = 7;
            var22 = var15[var22];
            var23 = var11.bind(var4)(var22);
            var22 = {};
            var22['progress'] = var25;
            var22['visible'] = var24;
            var22 = var12.bind(var4)(var23, var22);
            var20['children'] = var22;
            var20 = var12.bind(var4)(var21, var20);
            var8[1] = var20;
            var5['children'] = var8;
            var7 = var3.bind(var4)(var7, var5);
            var5 = new Array(2);
            var5[0] = var7;
            var8 = _closure1_slot9;
            var6 = var15[var6];
            var6 = var11.bind(var4)(var6);
            var7 = var6.View;
            var6 = {};
            var20 = var9.leftRow;
            var9 = new Array(2);
            var9[0] = var20;
            var9[1] = var19;
            var6['style'] = var9;
            var9 = 18;
            var9 = var15[var9];
            var11 = var11.bind(var4)(var9);
            var9 = {};
            var9['isCompleted'] = var18;
            var9['totalSeconds'] = var17;
            var9['remainingSeconds'] = var16;
            var11 = var12.bind(var4)(var11, var9);
            var9 = new Array(2);
            var9[0] = var11;
            var11 = _closure1_slot0;
            var10 = 19;
            var10 = var15[var10];
            var10 = var11.bind(var4)(var10);
            var11 = var10.BalanceWidgetPill;
            var10 = {};
            var10['balance'] = var14;
            var10 = var12.bind(var4)(var11, var10, var13);
            var9[1] = var10;
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