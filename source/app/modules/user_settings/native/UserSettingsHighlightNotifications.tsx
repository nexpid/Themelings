// app/modules/user_settings/native/UserSettingsHighlightNotifications.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var7 = native3;
    var3 = native6;
    var6 = native7;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
    var1 = function Row(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var2 = arg1;
            var11 = var2.guildId;
            var _closure2_slot0 = var11;
            var7 = var2.isStart;
            var6 = var2.isEnd;
            var8 = _closure1_slot3;
            var5 = var8.useCallback;
            var4 = new Array(1);
            var4[0] = var11;
            var3 = function(arg1) {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var2 = arg1;
                    var4 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var1 = 6;
                    var3 = var3[var1];
                    var1 = undefined;
                    var6 = var4.bind(var1)(var3);
                    var5 = var6.updateGuildNotificationSettings;
                    var4 = _closure2_slot0;
                    var3 = {};
                    var9 = _closure1_slot7;
                    if(var2) { _fun0002_ip = 58; continue _fun0002 }
 50:
                    var8 = var9.DISABLED;
                    _fun0002_ip = 64; continue _fun0002;
 58:
                    var8 = var9.ENABLED;
 64:
                    var3['notify_highlights'] = var8;
                    var8 = _closure1_slot0;
                    var9 = _closure1_slot2;
                    var7 = 7;
                    var7 = var9[var7];
                    var7 = var8.bind(var1)(var7);
                    var8 = var7.NotificationLabel;
                    var7 = var8.highlights;
                    var2 = !var2;
                    var2 = var7.bind(var8)(var2);
                    var2 = var5.bind(var6)(var4, var3, var2);
                    return var1;
                }
            };
            var8 = var5.bind(var8)(var3, var4);
            var4 = _closure1_slot0;
            var5 = _closure1_slot2;
            var3 = 8;
            var3 = var5[var3];
            var5 = undefined;
            var10 = var4.bind(var5)(var3);
            var9 = var10.useStateFromStoresObject;
            var3 = _closure1_slot6;
            var4 = new Array(2);
            var4[0] = var3;
            var3 = _closure1_slot4;
            var4[1] = var3;
            var3 = new Array(1);
            var3[0] = var11;
            var1 = function() {
                var1 = {};
                var5 = _closure1_slot4;
                var3 = var5.getGuild;
                var4 = _closure2_slot0;
                var3 = var3.bind(var5)(var4);
                var1['guild'] = var3;
                var5 = _closure1_slot6;
                var3 = var5.isMuted;
                var3 = var3.bind(var5)(var4);
                var1['muted'] = var3;
                var3 = _closure1_slot6;
                var2 = var3.getNotifyHighlights;
                var2 = var2.bind(var3)(var4);
                var1['notifyHighlights'] = var2;
                return var1;
            };
            var1 = var9.bind(var10)(var4, var1, var3);
            var13 = var1.guild;
            var3 = var1.muted;
            var9 = var1.notifyHighlights;
            var1 = null;
            var10 = var1 == var13;
            var4 = undefined;
            if(var10) { _fun0001_ip = 162; continue _fun0001 }
 157:
            var4 = var13.name;
 162:
            if(!(var1 != var4)) { _fun0001_ip = 291; continue _fun0001 }
 169:
            var11 = var13.name;
            if(var3) { _fun0001_ip = 191; continue _fun0001 }
 177:
            var4 = _closure1_slot7;
            var4 = var4.DISABLED;
            var3 = var9 === var4;
 191:
            var9 = !var3;
            var10 = _closure1_slot8;
            var4 = _closure1_slot1;
            var12 = _closure1_slot2;
            var3 = 9;
            var3 = var12[var3];
            var4 = var4.bind(var5)(var3);
            var3 = {};
            var3['guild'] = var13;
            var10 = var10.bind(var5)(var4, var3);
            var4 = _closure1_slot8;
            var3 = _closure1_slot0;
            var2 = 10;
            var2 = var12[var2];
            var2 = var3.bind(var5)(var2);
            var3 = var2.TableSwitchRow;
            var2 = {};
            var2['label'] = var11;
            var2['icon'] = var10;
            var2['value'] = var9;
            var2['onValueChange'] = var8;
            var2['start'] = var7;
            var2['end'] = var6;
            var2 = var4.bind(var5)(var3, var2);
            return var2;
 291:
            return var1;
        }
    };
    var _closure1_slot9 = var1;
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
    var4 = native4;
    var1 = undefined;
    var4 = var4.bind(var1)(var8);
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot6 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.HighlightSettings;
    var _closure1_slot7 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.jsx;
    var _closure1_slot8 = var4;
    var4 = 12;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/user_settings/native/UserSettingsHighlightNotifications.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function UserSettingsHighlightNotifications() {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
            var4 = _closure1_slot0;
            var5 = _closure1_slot2;
            var1 = 8;
            var1 = var5[var1];
            var5 = undefined;
            var7 = var4.bind(var5)(var1);
            var6 = var7.useStateFromStoresArray;
            var1 = _closure1_slot5;
            var4 = new Array(1);
            var4[0] = var1;
            var1 = function() {
                var2 = _closure1_slot5;
                var1 = var2.getFlattenedGuildIds;
                var1 = var1.bind(var2)();
                return var1;
            };
            var1 = var6.bind(var7)(var4, var1);
            var _closure2_slot0 = var1;
            var7 = _closure1_slot3;
            var6 = var7.useMemo;
            var4 = new Array(1);
            var4[0] = var1;
            var3 = function() {
                var3 = _closure2_slot0;
                var2 = var3.map;
                var1 = function(arg1, arg2) {
                    var5 = arg1;
                    var6 = arg2;
                    var4 = _closure1_slot8;
                    var3 = _closure1_slot9;
                    var2 = {};
                    var2['guildId'] = var5;
                    var1 = 0;
                    var1 = var1 === var6;
                    var2['isStart'] = var1;
                    var1 = _closure2_slot0;
                    var7 = var1.length;
                    var1 = 1;
                    var1 = var7 - var1;
                    var1 = var6 === var1;
                    var2['isEnd'] = var1;
                    var1 = undefined;
                    var1 = var4.bind(var1)(var3, var2, var5);
                    return var1;
                };
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var6 = var6.bind(var7)(var3, var4);
            var4 = var1.length;
            var3 = 0;
            var1 = null;
            if(!(var3 !== var4)) { _fun0003_ip = 147; continue _fun0003 }
 105:
            var4 = _closure1_slot8;
            var3 = _closure1_slot0;
            var7 = _closure1_slot2;
            var2 = 11;
            var2 = var7[var2];
            var2 = var3.bind(var5)(var2);
            var3 = var2.Form;
            var2 = {};
            var2['children'] = var6;
            var1 = var4.bind(var5)(var3, var2);
 147:
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();