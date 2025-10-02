// app/modules/connectivity/native/useGlobalStatusIndicatorState.tsx
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
case 0:
            var2 = arguments[0];
            var8 = undefined;
            if(!(var2 === var8)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var2 = false;
case 2:
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
case 0:
                    var4 = _closure1_slot3;
                    var3 = var4.getChannel;
                    var1 = _closure2_slot0;
                    var4 = var3.bind(var4)(var1);
                    var1 = null;
                    var3 = var1 == var4;
                    var1 = undefined;
                    if(var3) { _fun0002_ip = 4; continue _fun0002 }
case 5:
                    var3 = var4.isGuildStageVoice;
                    var1 = var3.bind(var4)();
case 4:
                    if(!var1) { _fun0002_ip = 6; continue _fun0002 }
case 7:
                    var2 = _closure2_slot1;
                    var1 = !var2;
case 6:
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
            if(!var11) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var14 = _closure1_slot0;
            var15 = _closure1_slot2;
            var13 = 10;
            var13 = var15[var13];
            var14 = var14.bind(var8)(var13);
            var13 = var14.getVoiceChannelKey;
            var10 = var10.channelId;
            if(!(var7 == var10)) { _fun0001_ip = 10; continue _fun0001 }
case 11:
            var10 = _closure1_slot6;
case 10:
            var10 = var13.bind(var14)(var10);
            var11 = var10 !== var12;
case 8:
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
            if(var2) { _fun0001_ip = 12; continue _fun0001 }
case 13:
            var7 = !var7;
            if(!var7) { _fun0001_ip = 14; continue _fun0001 }
case 15:
            var11 = !var11;
            if(var11) { _fun0001_ip = 16; continue _fun0001 }
case 17:
            var11 = !var12;
case 16:
            var7 = var11;
case 14:
            if(!var7) { _fun0001_ip = 18; continue _fun0001 }
case 19:
            var8 = !var8;
            if(var8) { _fun0001_ip = 20; continue _fun0001 }
case 21:
            if(!var9) { _fun0001_ip = 22; continue _fun0001 }
case 23:
            var9 = !var10;
case 22:
            var8 = var9;
case 20:
            var7 = var8;
case 18:
            var2 = var7;
case 12:
            var2 = !var2;
            if(!var2) { _fun0001_ip = 24; continue _fun0001 }
case 25:
            if(var6) { _fun0001_ip = 26; continue _fun0001 }
case 24:
            var5 = 0;
            if(!var2) { _fun0001_ip = 26; continue _fun0001 }
case 27:
            var5 = _closure1_slot5;
case 26:
            var1 = {};
            var1['height'] = var5;
            var1['isVisible'] = var2;
            if(!var2) { _fun0001_ip = 28; continue _fun0001 }
case 29:
            var2 = var4;
case 28:
            if(!var2) { _fun0001_ip = 30; continue _fun0001 }
case 31:
            var2 = !var3;
case 30:
            var1['isCustomBackground'] = var2;
            return var1;
        }
    };
    var3['useGlobalStatusIndicatorState'] = var2;
    return var1;
})();