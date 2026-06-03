// app/modules/lurker_mode/native/LurkerServerPreviewJoinButton.tsx
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
    var7 = var4.bind(var1)(var7);
    var _closure1_slot3 = var7;
    var4 = 1;
    var4 = var6[var4];
    var4 = var8.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var8.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var8.bind(var1)(var4);
    var _closure1_slot6 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.JoinGuildSources;
    var _closure1_slot7 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.jsx;
    var _closure1_slot8 = var4;
    var4 = var7.memo;
    var2 = function LurkerServerPreviewJoinButton(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arg1;
            var9 = var1.guildId;
            var _closure2_slot0 = var9;
            var8 = var1.joinSource;
            var _closure2_slot1 = var8;
            var2 = var1.onBeforeJoin;
            var _closure2_slot2 = var2;
            var5 = _closure1_slot0;
            var4 = _closure1_slot2;
            var3 = 6;
            var3 = var4[var3];
            var4 = undefined;
            var7 = var5.bind(var4)(var3);
            var6 = var7.useStateFromStores;
            var3 = _closure1_slot5;
            var5 = new Array(1);
            var5[0] = var3;
            var3 = function() {
                var2 = _closure1_slot5;
                var1 = var2.getCurrentUser;
                var1 = var1.bind(var2)();
                return var1;
            };
            var7 = var6.bind(var7)(var5, var3);
            var _closure2_slot3 = var7;
            var6 = _closure1_slot3;
            var5 = var6.useCallback;
            var3 = new Array(3);
            var3[0] = var9;
            var3[1] = var8;
            var3[2] = var2;
            var2 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var4 = _closure1_slot6;
                    var3 = var4.getLurkingSourceForGuild;
                    var1 = _closure2_slot0;
                    var3 = var3.bind(var4)(var1);
                    var4 = null;
                    var5 = var4 == var3;
                    var1 = undefined;
                    var7 = undefined;
                    if(var5) { _fun0002_ip = 2; continue _fun0002 }
case 3:
                    var7 = var3.type;
case 2:
                    var5 = _closure1_slot7;
                    var5 = var5.DIRECTORY_ENTRY;
                    if(!(var7 === var5)) { _fun0002_ip = 4; continue _fun0002 }
case 5:
                    var7 = _closure1_slot4;
                    var5 = var7.getChannel;
                    var3 = var3.directoryChannelId;
                    var5 = var5.bind(var7)(var3);
                    if(!(var4 != var5)) { _fun0002_ip = 4; continue _fun0002 }
case 6:
                    var9 = _closure1_slot0;
                    var10 = _closure1_slot2;
                    var3 = 7;
                    var3 = var10[var3];
                    var8 = var9.bind(var1)(var3);
                    var7 = var8.setHubProgressActionComplete;
                    var3 = var5.getGuildId;
                    var5 = var3.bind(var5)();
                    var3 = 8;
                    var3 = var10[var3];
                    var3 = var9.bind(var1)(var3);
                    var3 = var3.HubProgressStep;
                    var3 = var3.JOIN_GUILD;
                    var3 = var7.bind(var8)(var5, var3);
case 4:
                    var5 = _closure1_slot0;
                    var11 = _closure1_slot2;
                    var3 = 9;
                    var3 = var11[var3];
                    var9 = var5.bind(var1)(var3);
                    var8 = var9.trackJoinClicked;
                    var7 = _closure2_slot0;
                    var5 = _closure2_slot1;
                    var10 = _closure1_slot1;
                    var3 = 10;
                    var3 = var11[var3];
                    var10 = var10.bind(var1)(var3);
                    var3 = var10.hasNavigatedAway;
                    var3 = var3.bind(var10)(var7);
                    var3 = var8.bind(var9)(var7, var5, var3);
                    var3 = _closure2_slot2;
                    if(!(var4 != var3)) { _fun0002_ip = 7; continue _fun0002 }
case 8:
                    var3 = _closure2_slot2;
                    var3 = var3.bind(var1)();
case 7:
                    var3 = _closure1_slot1;
                    var4 = _closure1_slot2;
                    var2 = 11;
                    var2 = var4[var2];
                    var5 = var3.bind(var1)(var2);
                    var4 = var5.joinGuild;
                    var3 = _closure2_slot0;
                    var2 = {};
                    var6 = _closure2_slot1;
                    var2['source'] = var6;
                    var2 = var4.bind(var5)(var3, var2);
                    return var1;
                }
            };
            var5 = var5.bind(var6)(var2, var3);
            var2 = null;
            if(!(var2 != var7)) { _fun0001_ip = 9; continue _fun0001 }
case 10:
            var3 = _closure1_slot1;
            var10 = _closure1_slot2;
            var2 = 14;
            var2 = var10[var2];
            var6 = var3.bind(var4)(var2);
            var3 = var6.getUserAvatarSource;
            var2 = false;
            var9 = var3.bind(var6)(var7, var2);
            var8 = _closure1_slot0;
            var2 = 13;
            var3 = var10[var2];
            var3 = var8.bind(var4)(var3);
            var7 = var3.intl;
            var6 = var7.formatToPlainString;
            var2 = var10[var2];
            var2 = var8.bind(var4)(var2);
            var2 = var2.t;
            var3 = var2["5qtVhX"];
            var2 = {};
            var11 = function usernameHook() {
                var3 = _closure1_slot1;
                var2 = _closure1_slot2;
                var1 = 15;
                var2 = var2[var1];
                var1 = undefined;
                var3 = var3.bind(var1)(var2);
                var2 = var3.getFormattedName;
                var1 = _closure2_slot3;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var2['usernameHook'] = var11;
            var11 = var6.bind(var7)(var3, var2);
            var6 = _closure1_slot8;
            var7 = 12;
            var2 = var10[var7];
            var2 = var8.bind(var4)(var2);
            var3 = var2.Button;
            var2 = {'grow': true, 'variant': 'primary', 'size': 'md'};
            var2['text'] = var11;
            var7 = var10[var7];
            var7 = var8.bind(var4)(var7);
            var7 = var7.Button;
            var8 = var7.Icon;
            var7 = {};
            var7['source'] = var9;
            var9 = 'entity';
            var7['variant'] = var9;
            var7 = var6.bind(var4)(var8, var7);
            var2['icon'] = var7;
            var2['onPress'] = var5;
            var2 = var6.bind(var4)(var3, var2);
            return var2;
case 9:
            var3 = _closure1_slot8;
            var9 = _closure1_slot0;
            var10 = _closure1_slot2;
            var1 = 12;
            var1 = var10[var1];
            var1 = var9.bind(var4)(var1);
            var2 = var1.Button;
            var1 = {'grow': true, 'variant': 'primary', 'size': 'md'};
            var6 = 13;
            var7 = var10[var6];
            var7 = var9.bind(var4)(var7);
            var8 = var7.intl;
            var7 = var8.string;
            var6 = var10[var6];
            var6 = var9.bind(var4)(var6);
            var6 = var6.t;
            var6 = var6.VJlc0S;
            var6 = var7.bind(var8)(var6);
            var1['text'] = var6;
            var1['onPress'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var2 = var4.bind(var7)(var2);
    var4 = 16;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/lurker_mode/native/LurkerServerPreviewJoinButton.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();