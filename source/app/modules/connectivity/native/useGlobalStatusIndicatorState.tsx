// app/modules/connectivity/native/useGlobalStatusIndicatorState.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var7 = native3;
    var3 = native6;
    var6 = native7;
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
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.RTC_PANEL_HEIGHT;
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.EMPTY_STRING_SNOWFLAKE_ID;
    var _closure1_slot6 = var4;
    var4 = 13;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/connectivity/native/useGlobalStatusIndicatorState.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var2 = arguments[0];
            var8 = undefined;
            if(!(var2 === var8)) { _fun0001_ip = 13; continue _fun0001 }
 11:
            var2 = false;
 13:
            var _closure2_slot0 = var8;
            var _closure2_slot1 = var8;
            var12 = _closure1_slot0;
            var13 = _closure1_slot2;
            var4 = 4;
            var4 = var13[var4];
            var6 = var12.bind(var8)(var4);
            var5 = var6.useHasPipParticipant;
            var4 = {};
            var7 = false;
            var4['isActivityViewFocused'] = var7;
            var9 = var5.bind(var6)(var4);
            var6 = _closure1_slot1;
            var4 = 5;
            var4 = var13[var4];
            var4 = var6.bind(var8)(var4);
            var10 = var4.bind(var8)();
            var4 = 6;
            var5 = var13[var4];
            var14 = var12.bind(var8)(var5);
            var11 = var14.useStateFromStores;
            var5 = _closure1_slot4;
            var7 = new Array(1);
            var7[0] = var5;
            var5 = function() {
                var2 = _closure1_slot4;
                var1 = var2.getChannelId;
                var1 = var1.bind(var2)();
                return var1;
            };
            var14 = var11.bind(var14)(var7, var5);
            _closure2_slot0 = var14;
            var5 = 7;
            var5 = var13[var5];
            var5 = var6.bind(var8)(var5);
            var6 = var5.bind(var8)();
            _closure2_slot1 = var6;
            var4 = var13[var4];
            var11 = var12.bind(var8)(var4);
            var7 = var11.useStateFromStores;
            var4 = _closure1_slot3;
            var5 = new Array(1);
            var5[0] = var4;
            var4 = new Array(2);
            var4[0] = var14;
            var4[1] = var6;
            var3 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var4 = _closure1_slot3;
                    var3 = var4.getChannel;
                    var1 = _closure2_slot0;
                    var4 = var3.bind(var4)(var1);
                    var1 = null;
                    var3 = var1 == var4;
                    var1 = undefined;
                    if(var3) { _fun0002_ip = 45; continue _fun0002 }
 35:
                    var3 = var4.isGuildStageVoice;
                    var1 = var3.bind(var4)();
 45:
                    if(!var1) { _fun0002_ip = 55; continue _fun0002 }
 48:
                    var2 = _closure2_slot1;
                    var1 = !var2;
 55:
                    return var1;
                }
            };
            var3 = var7.bind(var11)(var5, var3, var4);
            var7 = null;
            var4 = var7 != var14;
            var5 = 8;
            var5 = var13[var5];
            var11 = var12.bind(var8)(var5);
            var5 = var11.useGetStageRTCPanelHeight;
            var5 = var5.bind(var11)(var14);
            var11 = 9;
            var11 = var13[var11];
            var12 = var12.bind(var8)(var11);
            var11 = var12.useOpenModalKey;
            var12 = var11.bind(var12)();
            var11 = var7 != var10;
            if(!var11) { _fun0001_ip = 308; continue _fun0001 }
 260:
            var14 = _closure1_slot0;
            var15 = _closure1_slot2;
            var13 = 10;
            var13 = var15[var13];
            var14 = var14.bind(var8)(var13);
            var13 = var14.getVoiceChannelKey;
            var10 = var10.channelId;
            if(!(var7 == var10)) { _fun0001_ip = 299; continue _fun0001 }
 295:
            var10 = _closure1_slot6;
 299:
            var10 = var13.bind(var14)(var10);
            var11 = var10 !== var12;
 308:
            var12 = {};
            var14 = _closure1_slot0;
            var10 = _closure1_slot2;
            var13 = 11;
            var13 = var10[var13];
            var14 = var14.bind(var8)(var13);
            var13 = var14.useIsVoicePanelShowing;
            var13 = var13.bind(var14)();
            var12['voicePanelEnabled'] = var13;
            var12['isRemoteVisible'] = var11;
            var12['isVoiceChannelSelected'] = var4;
            var12['hasPipParticipant'] = var9;
            var12['showWhenParticipantOnScreen'] = var2;
            var9 = _closure1_slot1;
            var2 = 12;
            var2 = var10[var2];
            var2 = var9.bind(var8)(var2);
            var2 = var2.bind(var8)();
            var2 = var7 != var2;
            var12['isConnectedToStageChannel'] = var2;
            var12['isInvitedToSpeak'] = var6;
            var2 = var12.voicePanelEnabled;
            var7 = var12.isRemoteVisible;
            var8 = var12.isVoiceChannelSelected;
            var9 = var12.hasPipParticipant;
            var10 = var12.showWhenParticipantOnScreen;
            var11 = var12.isConnectedToStageChannel;
            var12 = var12.isInvitedToSpeak;
            if(var2) { _fun0001_ip = 486; continue _fun0001 }
 444:
            var7 = !var7;
            if(!var7) { _fun0001_ip = 462; continue _fun0001 }
 450:
            var11 = !var11;
            if(var11) { _fun0001_ip = 459; continue _fun0001 }
 456:
            var11 = !var12;
 459:
            var7 = var11;
 462:
            if(!var7) { _fun0001_ip = 483; continue _fun0001 }
 465:
            var8 = !var8;
            if(var8) { _fun0001_ip = 480; continue _fun0001 }
 471:
            if(!var9) { _fun0001_ip = 477; continue _fun0001 }
 474:
            var9 = !var10;
 477:
            var8 = var9;
 480:
            var7 = var8;
 483:
            var2 = var7;
 486:
            var2 = !var2;
            if(!var2) { _fun0001_ip = 495; continue _fun0001 }
 492:
            if(var6) { _fun0001_ip = 504; continue _fun0001 }
 495:
            var5 = 0;
            if(!var2) { _fun0001_ip = 504; continue _fun0001 }
 500:
            var5 = _closure1_slot5;
 504:
            var1 = {};
            var1['height'] = var5;
            var1['isVisible'] = var2;
            if(!var2) { _fun0001_ip = 521; continue _fun0001 }
 518:
            var2 = var4;
 521:
            if(!var2) { _fun0001_ip = 527; continue _fun0001 }
 524:
            var2 = !var3;
 527:
            var1['isCustomBackground'] = var2;
            return var1;
        }
    };
    var3['useGlobalStatusIndicatorState'] = var2;
    return var1;
})();