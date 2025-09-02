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
 0:
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
            if(!(var12 !== var13)) { _fun0001_ip = 94; continue _fun0001 }
 91:
            var11 = var12;
 94:
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
 0:
            var8 = arg1;
            var7 = arguments[1];
            var6 = arguments[2];
            var5 = arguments[3];
            var1 = undefined;
            if(!(var7 === var1)) { _fun0002_ip = 20; continue _fun0002 }
 18:
            var7 = false;
 20:
            if(!(var6 === var1)) { _fun0002_ip = 26; continue _fun0002 }
 24:
            var6 = false;
 26:
            if(!(var5 === var1)) { _fun0002_ip = 32; continue _fun0002 }
 30:
            var5 = {};
 32:
            var4 = _closure1_slot5;
            var3 = var4.getChannel;
            var10 = var3.bind(var4)(var8);
            var3 = null;
            var9 = var3 == var10;
            var4 = undefined;
            if(var9) { _fun0002_ip = 70; continue _fun0002 }
 60:
            var9 = var10.getGuildId;
            var4 = var9.bind(var10)();
 70:
            if(!(var3 != var8)) { _fun0002_ip = 78; continue _fun0002 }
 74:
            if(!(var3 == var4)) { _fun0002_ip = 110; continue _fun0002 }
 78:
            var10 = _closure1_slot0;
            var11 = _closure1_slot3;
            var9 = 8;
            var9 = var11[var9];
            var10 = var10.bind(var1)(var9);
            var9 = var10.endHangout;
            var9 = var9.bind(var10)();
            _fun0002_ip = 142; continue _fun0002;
 110:
            var10 = _closure1_slot0;
            var11 = _closure1_slot3;
            var9 = 8;
            var9 = var11[var9];
            var10 = var10.bind(var1)(var9);
            var9 = var10.startHangout;
            var9 = var9.bind(var10)(var4, var8);
 142:
            var10 = _closure1_slot6;
            var9 = var10.isSupported;
            var9 = var9.bind(var10)();
            if(!var9) { _fun0002_ip = 235; continue _fun0002 }
 159:
            if(!(var3 != var8)) { _fun0002_ip = 187; continue _fun0002 }
 163:
            var9 = _closure1_slot6;
            var3 = var9.getMediaEngine;
            var9 = var3.bind(var9)();
            var3 = var9.interact;
            var3 = var3.bind(var9)();
 187:
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
 235:
            return var1;
        }
    };
    var2['selectVoiceChannel'] = var7;
    var4 = function disconnect() {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
            var4 = this;
            var3 = _closure1_slot4;
            var1 = var3.getRemoteSessionId;
            var6 = var1.bind(var3)();
            var3 = null;
            if(!(var3 != var6)) { _fun0003_ip = 59; continue _fun0003 }
 26:
            var7 = _closure1_slot2;
            var5 = _closure1_slot3;
            var1 = 10;
            var5 = var5[var1];
            var1 = undefined;
            var5 = var7.bind(var1)(var5);
            var1 = var5.remoteDisconnect;
            var1 = var1.bind(var5)(var6);
 59:
            var6 = _closure1_slot0;
            var5 = _closure1_slot3;
            var1 = 11;
            var5 = var5[var1];
            var1 = undefined;
            var6 = var6.bind(var1)(var5);
            var5 = var6.isVoicePanelEnabled;
            var5 = var5.bind(var6)();
            if(var5) { _fun0003_ip = 306; continue _fun0003 }
 97:
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
            if(!var5) { _fun0003_ip = 177; continue _fun0003 }
 152:
            var6 = var3 == var8;
            var7 = undefined;
            if(var6) { _fun0003_ip = 171; continue _fun0003 }
 161:
            var6 = var8.isThread;
            var7 = var6.bind(var8)();
 171:
            var6 = true;
            var5 = var6 === var7;
 177:
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
            if(!var5) { _fun0003_ip = 317; continue _fun0003 }
 232:
            var6 = _closure1_slot8;
            var5 = var6.getGuildId;
            var8 = var5.bind(var6)();
            if(!(var3 != var8)) { _fun0003_ip = 317; continue _fun0003 }
 250:
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
            _fun0003_ip = 317; continue _fun0003;
 306:
            var2 = var4.selectVoiceChannel;
            var2 = var2.bind(var4)(var3);
 317:
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