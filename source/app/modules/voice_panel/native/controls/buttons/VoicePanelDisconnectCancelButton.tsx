// app/modules/voice_panel/native/controls/buttons/VoicePanelDisconnectCancelButton.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var11 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var11;
    var _closure1_slot2 = var6;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var4);
    var12 = 0;
    var4 = var6[var12];
    var1 = undefined;
    var4 = var11.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var9 = 1;
    var7 = var6[var9];
    var4 = metroImportAll;
    var4 = var4.bind(var1)(var7);
    var _closure1_slot4 = var4;
    var8 = 2;
    var4 = var6[var8];
    var4 = var11.bind(var1)(var4);
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
    var4 = var4.VoicePanelModes;
    var _closure1_slot8 = var4;
    var4 = 6;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var10 = var4.Colors;
    var4 = 7;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.jsx;
    var _closure1_slot9 = var4;
    var4 = {};
    var4['USER'] = var12;
    var7 = 'USER';
    var4[var12] = var7;
    var4['STREAM'] = var9;
    var7 = 'STREAM';
    var4[var9] = var7;
    var4['ACTIVITY'] = var8;
    var7 = 'ACTIVITY';
    var4[var8] = var7;
    var _closure1_slot10 = var4;
    var4 = 8;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = {};
    var9 = {};
    var10 = var10.RED_400;
    var9['backgroundColor'] = var10;
    var4['disconnectCancelBG'] = var9;
    var9 = {};
    var10 = 9;
    var10 = var6[var10];
    var10 = var11.bind(var1)(var10);
    var10 = var10.colors;
    var10 = var10.WHITE;
    var9['tintColor'] = var10;
    var4['icon'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot11 = var4;
    var4 = {};
    var7 = 'function VoicePanelDisconnectCancelButtonTsx1(){const{mode,VoicePanelModes,focused}=this.__closure;var _focused$get$id,_focused$get;if(mode.get()!==VoicePanelModes.PANEL){return null;}return(_focused$get$id=(_focused$get=focused.get())===null||_focused$get===void 0?void 0:_focused$get.id)!==null&&_focused$get$id!==void 0?_focused$get$id:null;}';
    var4['code'] = var7;
    var _closure1_slot12 = var4;
    var4 = {};
    var7 = 'function VoicePanelDisconnectCancelButtonTsx2(focusId,lastFocusId){const{runOnJS,handleFocusChange}=this.__closure;if(focusId!==lastFocusId){runOnJS(handleFocusChange)(focusId);}}';
    var4['code'] = var7;
    var _closure1_slot13 = var4;
    var4 = 24;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/voice_panel/native/controls/buttons/VoicePanelDisconnectCancelButton.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function DisconnectCancelButton(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var1 = arg1;
            var7 = var1.props;
            var4 = undefined;
            var _closure2_slot7 = var4;
            var1 = _closure1_slot11;
            var9 = var1.bind(var4)();
            var _closure2_slot0 = var9;
            var11 = _closure1_slot4;
            var2 = var11.useContext;
            var3 = _closure1_slot1;
            var19 = _closure1_slot2;
            var1 = 10;
            var1 = var19[var1];
            var1 = var3.bind(var4)(var1);
            var1 = var2.bind(var11)(var1);
            var12 = var1.channelId;
            var _closure2_slot1 = var12;
            var2 = var1.focused;
            var _closure2_slot2 = var2;
            var15 = var1.mode;
            var _closure2_slot3 = var15;
            var18 = _closure1_slot0;
            var1 = 11;
            var1 = var19[var1];
            var8 = var18.bind(var4)(var1);
            var3 = var8.useChangeDisconnectIconExperiment;
            var1 = {};
            var10 = 'DisconnectCancelButton';
            var1['location'] = var10;
            var1 = var3.bind(var8)(var1);
            var1 = var1.changeLeaveCallAndActivityIcons;
            var8 = var11.useState;
            var3 = null;
            var10 = var8.bind(var11)(var3);
            var8 = _closure1_slot3;
            var3 = 2;
            var10 = var8.bind(var4)(var10, var3);
            var3 = 0;
            var8 = var10[var3];
            var _closure2_slot4 = var8;
            var3 = 1;
            var3 = var10[var3];
            var _closure2_slot5 = var3;
            var13 = var11.useCallback;
            var10 = function(arg1) {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var6 = arg1;
                    var5 = null;
                    if(!(var5 == var6)) { _fun0002_ip = 28; continue _fun0002 }
 9:
                    var2 = _closure2_slot5;
                    var1 = undefined;
                    var1 = var2.bind(var1)(var5);
                    _fun0002_ip = 199; continue _fun0002;
 28:
                    var2 = _closure1_slot5;
                    var1 = var2.getCurrentEmbeddedActivity;
                    var8 = var1.bind(var2)();
                    var2 = var5 == var8;
                    var3 = undefined;
                    var1 = undefined;
                    if(var2) { _fun0002_ip = 61; continue _fun0002 }
 56:
                    var1 = var8.applicationId;
 61:
                    if(!(var5 != var1)) { _fun0002_ip = 146; continue _fun0002 }
 65:
                    var2 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var1 = 12;
                    var1 = var7[var1];
                    var7 = var2.bind(var3)(var1);
                    var2 = var7.getEmbeddedActivityParticipantId;
                    var1 = {};
                    var9 = var8.applicationId;
                    var1['applicationId'] = var9;
                    var8 = var8.compositeInstanceId;
                    var1['instanceId'] = var8;
                    var1 = var2.bind(var7)(var1);
                    if(!(var6 === var1)) { _fun0002_ip = 146; continue _fun0002 }
 122:
                    var2 = _closure2_slot5;
                    var1 = _closure1_slot10;
                    var1 = var1.ACTIVITY;
                    var1 = var2.bind(var3)(var1);
                    _fun0002_ip = 199; continue _fun0002;
 146:
                    var2 = _closure1_slot6;
                    var1 = var2.getActiveStreamForStreamKey;
                    var1 = var1.bind(var2)(var6);
                    var2 = _closure2_slot5;
                    if(!(var5 != var1)) { _fun0002_ip = 184; continue _fun0002 }
 172:
                    var1 = _closure1_slot10;
                    var1 = var1.STREAM;
                    _fun0002_ip = 194; continue _fun0002;
 184:
                    var4 = _closure1_slot10;
                    var1 = var4.USER;
 194:
                    var1 = var2.bind(var3)(var1);
 199:
                    var1 = undefined;
                    return var1;
                }
            };
            var3 = new Array(0);
            var16 = var13.bind(var11)(var10, var3);
            var _closure2_slot6 = var16;
            var17 = 13;
            var3 = var19[var17];
            var14 = var18.bind(var4)(var3);
            var13 = var14.useAnimatedReaction;
            var10 = function A() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                    var2 = _closure2_slot3;
                    var1 = var2.get;
                    var5 = var1.bind(var2)();
                    var1 = _closure1_slot8;
                    var4 = var1.PANEL;
                    var2 = null;
                    var1 = null;
                    if(!(var5 === var4)) { _fun0003_ip = 79; continue _fun0003 }
 37:
                    var4 = _closure2_slot2;
                    var3 = var4.get;
                    var4 = var3.bind(var4)();
                    var5 = var2 == var4;
                    var3 = undefined;
                    if(var5) { _fun0003_ip = 64; continue _fun0003 }
 59:
                    var3 = var4.id;
 64:
                    var4 = var2 != var3;
                    var2 = null;
                    if(!var4) { _fun0003_ip = 76; continue _fun0003 }
 73:
                    var2 = var3;
 76:
                    var1 = var2;
 79:
                    return var1;
                }
            };
            var3 = {};
            var3['mode'] = var15;
            var15 = _closure1_slot8;
            var3['VoicePanelModes'] = var15;
            var3['focused'] = var2;
            var10['__closure'] = var3;
            var3 = 1109426015268.0;
            var10['__workletHash'] = var3;
            var3 = _closure1_slot12;
            var10['__initData'] = var3;
            var3 = function p(arg1, arg2) {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                    var3 = arg1;
                    var1 = arg2;
                    if(!(var3 !== var1)) { _fun0004_ip = 57; continue _fun0004 }
 10:
                    var4 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 13;
                    var1 = var2[var1];
                    var2 = undefined;
                    var5 = var4.bind(var2)(var1);
                    var4 = var5.runOnJS;
                    var1 = _closure2_slot6;
                    var1 = var4.bind(var5)(var1);
                    var1 = var1.bind(var2)(var3);
 57:
                    var1 = undefined;
                    return var1;
                }
            };
            var15 = {};
            var17 = var19[var17];
            var17 = var18.bind(var4)(var17);
            var17 = var17.runOnJS;
            var15['runOnJS'] = var17;
            var15['handleFocusChange'] = var16;
            var3['__closure'] = var15;
            var15 = 16719769067952.0;
            var3['__workletHash'] = var15;
            var15 = _closure1_slot13;
            var3['__initData'] = var15;
            var3 = var13.bind(var14)(var10, var3);
            var10 = var11.useCallback;
            var3 = new Array(3);
            var3[0] = var12;
            var3[1] = var8;
            var3[2] = var2;
            var2 = function() {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                    var2 = _closure2_slot2;
                    var1 = var2.get;
                    var2 = var1.bind(var2)();
                    var1 = null;
                    var6 = var1 == var2;
                    var5 = undefined;
                    var4 = undefined;
                    if(var6) { _fun0005_ip = 34; continue _fun0005 }
 29:
                    var4 = var2.id;
 34:
                    var7 = _closure2_slot4;
                    var6 = _closure1_slot10;
                    var6 = var6.ACTIVITY;
                    if(!(var7 === var6)) { _fun0005_ip = 153; continue _fun0005 }
 55:
                    var7 = _closure1_slot5;
                    var6 = var7.getCurrentEmbeddedActivity;
                    var11 = var6.bind(var7)();
                    var7 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    var6 = 12;
                    var6 = var8[var6];
                    var7 = var7.bind(var5)(var6);
                    var6 = var7.activityParticipantIdToApplicationId;
                    var9 = var6.bind(var7)(var4);
                    var7 = _closure1_slot1;
                    var6 = 14;
                    var6 = var8[var6];
                    var8 = var7.bind(var5)(var6);
                    var7 = var8.leaveActivity;
                    var6 = {};
                    var12 = var1 == var11;
                    var10 = undefined;
                    if(var12) { _fun0005_ip = 138; continue _fun0005 }
 133:
                    var10 = var11.location;
 138:
                    var6['location'] = var10;
                    var6['applicationId'] = var9;
                    var6 = var7.bind(var8)(var6);
                    _fun0005_ip = 230; continue _fun0005;
 153:
                    var7 = _closure2_slot4;
                    var6 = _closure1_slot10;
                    var6 = var6.STREAM;
                    if(!(var7 !== var6)) { _fun0005_ip = 232; continue _fun0005 }
 171:
                    var7 = _closure1_slot1;
                    var8 = _closure1_slot2;
                    var6 = 17;
                    var6 = var8[var6];
                    var7 = var7.bind(var5)(var6);
                    var6 = var7.disconnect;
                    var6 = var6.bind(var7)();
                    var7 = _closure1_slot7;
                    var6 = var7.getState;
                    var8 = var6.bind(var7)();
                    var7 = var8.closeChannel;
                    var6 = _closure2_slot1;
                    var6 = var7.bind(var8)(var6);
 230:
                    return var5;
 232:
                    var7 = _closure1_slot1;
                    var8 = _closure1_slot2;
                    var6 = 15;
                    var6 = var8[var6];
                    var7 = var7.bind(var5)(var6);
                    var6 = var7.selectParticipant;
                    var3 = _closure2_slot1;
                    var3 = var6.bind(var7)(var3, var1);
                    var1 = var1 != var4;
                    if(!var1) { _fun0005_ip = 306; continue _fun0005 }
 275:
                    var3 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var2 = 16;
                    var2 = var6[var2];
                    var3 = var3.bind(var5)(var2);
                    var2 = var3.stopStream;
                    var1 = var2.bind(var3)(var4);
 306:
                    var1 = undefined;
                    return var1;
                }
            };
            var11 = var10.bind(var11)(var2, var3);
            var2 = _closure1_slot10;
            var2 = var2.ACTIVITY;
            if(!(var8 !== var2)) { _fun0001_ip = 499; continue _fun0001 }
 406:
            var2 = _closure1_slot10;
            var2 = var2.STREAM;
            if(!(var8 !== var2)) { _fun0001_ip = 471; continue _fun0001 }
 420:
            var3 = _closure1_slot0;
            var12 = _closure1_slot2;
            if(var1) { _fun0001_ip = 451; continue _fun0001 }
 431:
            var2 = 21;
            var2 = var12[var2];
            var2 = var3.bind(var4)(var2);
            var10 = var2.PhoneHangUpIcon;
            _fun0001_ip = 469; continue _fun0001;
 451:
            var2 = 19;
            var2 = var12[var2];
            var2 = var3.bind(var4)(var2);
            var10 = var2.DoorExitIcon;
 469:
            _fun0001_ip = 497; continue _fun0001;
 471:
            var3 = _closure1_slot0;
            var12 = _closure1_slot2;
            var2 = 20;
            var2 = var12[var2];
            var2 = var3.bind(var4)(var2);
            var10 = var2.ScreenXIcon;
 497:
            _fun0001_ip = 551; continue _fun0001;
 499:
            var3 = _closure1_slot0;
            var12 = _closure1_slot2;
            if(var1) { _fun0001_ip = 530; continue _fun0001 }
 510:
            var1 = 19;
            var1 = var12[var1];
            var1 = var3.bind(var4)(var1);
            var1 = var1.DoorExitIcon;
            _fun0001_ip = 548; continue _fun0001;
 530:
            var2 = 18;
            var2 = var12[var2];
            var2 = var3.bind(var4)(var2);
            var1 = var2.XSmallIcon;
 548:
            var10 = var1;
 551:
            _closure2_slot7 = var10;
            var3 = _closure1_slot9;
            var2 = _closure1_slot1;
            var12 = _closure1_slot2;
            var1 = 22;
            var1 = var12[var1];
            var2 = var2.bind(var4)(var1);
            var1 = {};
            var1['onPress'] = var11;
            var1['props'] = var7;
            var7 = var9.disconnectCancelBG;
            var1['style'] = var7;
            var7 = _closure1_slot10;
            var7 = var7.ACTIVITY;
            if(!(var8 !== var7)) { _fun0001_ip = 744; continue _fun0001 }
 616:
            var7 = _closure1_slot10;
            var7 = var7.STREAM;
            if(!(var8 !== var7)) { _fun0001_ip = 687; continue _fun0001 }
 630:
            var12 = _closure1_slot0;
            var13 = _closure1_slot2;
            var7 = 23;
            var8 = var13[var7];
            var8 = var12.bind(var4)(var8);
            var11 = var8.intl;
            var8 = var11.string;
            var7 = var13[var7];
            var7 = var12.bind(var4)(var7);
            var7 = var7.t;
            var7 = var7.6vrfgo;
            var7 = var8.bind(var11)(var7);
            _fun0001_ip = 742; continue _fun0001;
 687:
            var13 = _closure1_slot0;
            var14 = _closure1_slot2;
            var8 = 23;
            var11 = var14[var8];
            var11 = var13.bind(var4)(var11);
            var12 = var11.intl;
            var11 = var12.string;
            var8 = var14[var8];
            var8 = var13.bind(var4)(var8);
            var8 = var8.t;
            var8 = var8.q3O3Jy;
            var7 = var11.bind(var12)(var8);
 742:
            _fun0001_ip = 799; continue _fun0001;
 744:
            var13 = _closure1_slot0;
            var14 = _closure1_slot2;
            var8 = 23;
            var11 = var14[var8];
            var11 = var13.bind(var4)(var11);
            var12 = var11.intl;
            var11 = var12.string;
            var8 = var14[var8];
            var8 = var13.bind(var4)(var8);
            var8 = var8.t;
            var8 = var8.R/FK4O;
            var7 = var11.bind(var12)(var8);
 799:
            var1['accessibilityLabel'] = var7;
            var8 = _closure1_slot4;
            var7 = var8.useMemo;
            var6 = new Array(2);
            var6[0] = var10;
            var9 = var9.icon;
            var6[1] = var9;
            var5 = function() {
                var4 = _closure1_slot9;
                var3 = _closure2_slot7;
                var2 = {};
                var1 = _closure2_slot0;
                var1 = var1.icon;
                var2['style'] = var1;
                var1 = undefined;
                var1 = var4.bind(var1)(var3, var2);
                return var1;
            };
            var5 = var7.bind(var8)(var5, var6);
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();