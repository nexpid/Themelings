// app/actions/SelectedChannelActionCreators.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var1 = metroImportAll;
    var _closure1_slot2 = var1;
    var _closure1_slot3 = var6;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var2 = {};
    var1 = true;
    var2['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var2);
    var1 = 0;
    var2 = var6[var1];
    var1 = undefined;
    var2 = var7.bind(var1)(var2);
    var _closure1_slot4 = var2;
    var2 = 1;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot5 = var2;
    var2 = 2;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot6 = var2;
    var2 = 3;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot7 = var2;
    var2 = 4;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot8 = var2;
    var2 = 5;
    var2 = var6[var2];
    var2 = var5.bind(var1)(var2);
    var7 = var2.ME;
    var _closure1_slot9 = var7;
    var7 = var2.PopoutWindowKeys;
    var _closure1_slot10 = var7;
    var2 = var2.Routes;
    var _closure1_slot11 = var2;
    var2 = {};
    var7 = function selectChannel(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arg1;
            var12 = var1.guildId;
            var10 = var1.channelId;
            var9 = var1.messageId;
            var8 = var1.jumpType;
            var7 = var1.preserveDrawerState;
            var6 = var1.source;
            var5 = var1.isInitialSetup;
            var3 = _closure1_slot1;
            var2 = _closure1_slot3;
            var1 = 6;
            var2 = var2[var1];
            var1 = undefined;
            var4 = var3.bind(var1)(var2);
            var3 = var4.dispatch;
            var2 = {};
            var13 = 'CHANNEL_SELECT';
            var2['type'] = var13;
            var13 = _closure1_slot9;
            var11 = null;
            if(!(var12 !== var13)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var11 = var12;
case 2:
            var2['guildId'] = var11;
            var2['channelId'] = var10;
            var2['messageId'] = var9;
            var2['jumpType'] = var8;
            var2['preserveDrawerState'] = var7;
            var2['source'] = var6;
            var2['isInitialSetup'] = var5;
            var2 = var3.bind(var4)(var2);
            return var1;
        }
    };
    var2['selectChannel'] = var7;
    var7 = function selectPrivateChannel(arg1) {
        var4 = _closure1_slot0;
        var3 = _closure1_slot3;
        var1 = 7;
        var3 = var3[var1];
        var1 = undefined;
        var4 = var4.bind(var1)(var3);
        var3 = var4.transitionTo;
        var7 = _closure1_slot11;
        var6 = var7.CHANNEL;
        var5 = _closure1_slot9;
        var2 = arg1;
        var2 = var6.bind(var7)(var5, var2);
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var2['selectPrivateChannel'] = var7;
    var7 = function selectVoiceChannel(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var8 = arg1;
            var7 = arguments[1];
            var6 = arguments[2];
            var5 = arguments[3];
            var1 = undefined;
            if(!(var7 === var1)) { _fun0002_ip = 4; continue _fun0002 }
case 5:
            var7 = false;
case 4:
            if(!(var6 === var1)) { _fun0002_ip = 6; continue _fun0002 }
case 7:
            var6 = false;
case 6:
            if(!(var5 === var1)) { _fun0002_ip = 8; continue _fun0002 }
case 9:
            var5 = {};
case 8:
            var4 = _closure1_slot5;
            var3 = var4.getChannel;
            var10 = var3.bind(var4)(var8);
            var3 = null;
            var9 = var3 == var10;
            var4 = undefined;
            if(var9) { _fun0002_ip = 10; continue _fun0002 }
case 11:
            var9 = var10.getGuildId;
            var4 = var9.bind(var10)();
case 10:
            if(!(var3 != var8)) { _fun0002_ip = 12; continue _fun0002 }
case 13:
            if(!(var3 == var4)) { _fun0002_ip = 14; continue _fun0002 }
case 12:
            var10 = _closure1_slot0;
            var11 = _closure1_slot3;
            var9 = 8;
            var9 = var11[var9];
            var10 = var10.bind(var1)(var9);
            var9 = var10.endHangout;
            var9 = var9.bind(var10)();
            _fun0002_ip = 15; continue _fun0002;
case 14:
            var10 = _closure1_slot0;
            var11 = _closure1_slot3;
            var9 = 8;
            var9 = var11[var9];
            var10 = var10.bind(var1)(var9);
            var9 = var10.startHangout;
            var9 = var9.bind(var10)(var4, var8);
case 15:
            var10 = _closure1_slot6;
            var9 = var10.isSupported;
            var9 = var9.bind(var10)();
            if(!var9) { _fun0002_ip = 16; continue _fun0002 }
case 17:
            if(!(var3 != var8)) { _fun0002_ip = 18; continue _fun0002 }
case 19:
            var9 = _closure1_slot6;
            var3 = var9.getMediaEngine;
            var9 = var3.bind(var9)();
            var3 = var9.interact;
            var3 = var3.bind(var9)();
case 18:
            var3 = _closure1_slot0;
            var9 = _closure1_slot3;
            var2 = 9;
            var2 = var9[var2];
            var3 = var3.bind(var1)(var2);
            var2 = var3.selectVoiceChannelAdditional;
            var17 = var3;
            var16 = var8;
            var15 = var4;
            var14 = var7;
            var13 = var6;
            var12 = var5;
            var2 = var17[var2](var16, var15, var14, var13, var12, var11);
case 16:
            return var1;
        }
    };
    var2['selectVoiceChannel'] = var7;
    var4 = function disconnect() {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var4 = this;
            var3 = _closure1_slot4;
            var1 = var3.getRemoteSessionId;
            var6 = var1.bind(var3)();
            var3 = null;
            if(!(var3 != var6)) { _fun0003_ip = 20; continue _fun0003 }
case 6:
            var7 = _closure1_slot2;
            var5 = _closure1_slot3;
            var1 = 10;
            var5 = var5[var1];
            var1 = undefined;
            var5 = var7.bind(var1)(var5);
            var1 = var5.remoteDisconnect;
            var1 = var1.bind(var5)(var6);
case 20:
            var6 = _closure1_slot0;
            var5 = _closure1_slot3;
            var1 = 11;
            var5 = var5[var1];
            var1 = undefined;
            var6 = var6.bind(var1)(var5);
            var5 = var6.isVoicePanelEnabled;
            var5 = var5.bind(var6)();
            if(var5) { _fun0003_ip = 21; continue _fun0003 }
case 22:
            var8 = _closure1_slot5;
            var6 = var8.getChannel;
            var7 = _closure1_slot7;
            var5 = var7.getChannelId;
            var5 = var5.bind(var7)();
            var8 = var6.bind(var8)(var5);
            var5 = var7.getChannelId;
            var6 = var5.bind(var7)();
            var5 = var7.getVoiceChannelId;
            var5 = var5.bind(var7)();
            var5 = var6 === var5;
            if(!var5) { _fun0003_ip = 23; continue _fun0003 }
case 24:
            var6 = var3 == var8;
            var7 = undefined;
            if(var6) { _fun0003_ip = 25; continue _fun0003 }
case 26:
            var6 = var8.isThread;
            var7 = var6.bind(var8)();
case 25:
            var6 = true;
            var5 = var6 === var7;
case 23:
            var6 = var4.selectVoiceChannel;
            var6 = var6.bind(var4)(var3);
            var7 = _closure1_slot2;
            var8 = _closure1_slot3;
            var6 = 12;
            var6 = var8[var6];
            var8 = var7.bind(var1)(var6);
            var7 = var8.close;
            var6 = _closure1_slot10;
            var6 = var6.CHANNEL_CALL_POPOUT;
            var6 = var7.bind(var8)(var6);
            if(!var5) { _fun0003_ip = 27; continue _fun0003 }
case 28:
            var6 = _closure1_slot8;
            var5 = var6.getGuildId;
            var8 = var5.bind(var6)();
            if(!(var3 != var8)) { _fun0003_ip = 27; continue _fun0003 }
case 29:
            var7 = _closure1_slot0;
            var9 = _closure1_slot3;
            var2 = 7;
            var2 = var9[var2];
            var6 = var7.bind(var1)(var2);
            var5 = var6.transitionTo;
            var2 = 13;
            var2 = var9[var2];
            var7 = var7.bind(var1)(var2);
            var2 = var7.previousTextChannelRouteForGuild;
            var2 = var2.bind(var7)(var8);
            var2 = var5.bind(var6)(var2);
            _fun0003_ip = 27; continue _fun0003;
case 21:
            var2 = var4.selectVoiceChannel;
            var2 = var2.bind(var4)(var3);
case 27:
            return var1;
        }
    };
    var2['disconnect'] = var4;
    var4 = 14;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'actions/SelectedChannelActionCreators.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();