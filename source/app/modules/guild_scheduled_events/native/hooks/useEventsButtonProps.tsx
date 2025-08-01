// app/modules/guild_scheduled_events/native/hooks/useEventsButtonProps.tsx
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
    var4 = var5.bind(var1)(var4);
    var4 = var4.ReadStateTypes;
    var _closure1_slot6 = var4;
    var4 = 14;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/guild_scheduled_events/native/hooks/useEventsButtonProps.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function useEventsButtonProps(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var5 = arg1;
            var _closure2_slot0 = var5;
            var4 = _closure1_slot0;
            var9 = _closure1_slot2;
            var3 = 4;
            var6 = var9[var3];
            var10 = undefined;
            var12 = var4.bind(var10)(var6);
            var11 = var12.useStateFromStoresObject;
            var6 = _closure1_slot4;
            var8 = new Array(1);
            var8[0] = var6;
            var6 = var5.id;
            var7 = new Array(1);
            var7[0] = var6;
            var6 = function() {
                var1 = {};
                var5 = _closure1_slot4;
                var7 = var5.hasUnread;
                var3 = _closure2_slot0;
                var6 = var3.id;
                var2 = _closure1_slot6;
                var4 = var2.GUILD_EVENT;
                var4 = var7.bind(var5)(var6, var4);
                var1['hasUnread'] = var4;
                var4 = var5.getMentionCount;
                var3 = var3.id;
                var2 = var2.GUILD_EVENT;
                var2 = var4.bind(var5)(var3, var2);
                var1['mentionCount'] = var2;
                return var1;
            };
            var6 = var11.bind(var12)(var8, var6, var7);
            var8 = var6.hasUnread;
            var7 = var6.mentionCount;
            var3 = var9[var3];
            var11 = var4.bind(var10)(var3);
            var6 = var11.useStateFromStores;
            var3 = _closure1_slot5;
            var4 = new Array(1);
            var4[0] = var3;
            var3 = function() {
                var3 = _closure1_slot5;
                var2 = var3.isMuteScheduledEventsEnabled;
                var1 = _closure2_slot0;
                var1 = var1.id;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var4 = var6.bind(var11)(var4, var3);
            var6 = _closure1_slot1;
            var3 = 5;
            var3 = var9[var3];
            var6 = var6.bind(var10)(var3);
            var3 = var5.id;
            var13 = var6.bind(var10)(var3);
            var9 = _closure1_slot3;
            var11 = var9.useCallback;
            var6 = new Array(1);
            var6[0] = var5;
            var3 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var2 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var1 = 6;
                    var1 = var4[var1];
                    var5 = undefined;
                    var6 = var2.bind(var5)(var1);
                    var4 = var6.shouldShowMembershipVerificationGate;
                    var1 = _closure2_slot0;
                    var1 = var1.id;
                    var1 = var4.bind(var6)(var1);
                    var4 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    if(var1) { _fun0002_ip = 88; continue _fun0002 }
 59:
                    var1 = 8;
                    var1 = var6[var1];
                    var7 = var4.bind(var5)(var1);
                    var3 = var7.openGuildEventListActionSheet;
                    var1 = _closure2_slot0;
                    var1 = var3.bind(var7)(var1);
                    _fun0002_ip = 120; continue _fun0002;
 88:
                    var3 = 7;
                    var3 = var6[var3];
                    var4 = var4.bind(var5)(var3);
                    var3 = var4.openMemberVerificationModal;
                    var2 = _closure2_slot0;
                    var2 = var2.id;
                    var1 = var3.bind(var4)(var2);
 120:
                    return var1;
                }
            };
            var3 = var11.bind(var9)(var3, var6);
            var6 = var9.useCallback;
            var11 = var5.id;
            var5 = new Array(1);
            var5[0] = var11;
            var2 = function() {
                var5 = _closure1_slot1;
                var2 = _closure1_slot2;
                var1 = 9;
                var4 = var2[var1];
                var1 = undefined;
                var6 = var5.bind(var1)(var4);
                var5 = var6.openLazy;
                var4 = _closure1_slot0;
                var3 = 11;
                var3 = var2[var3];
                var4 = var4.bind(var1)(var3);
                var3 = 10;
                var3 = var2[var3];
                var2 = var2.paths;
                var4 = var4.bind(var1)(var3, var2);
                var7 = _closure2_slot0;
                var8 = var7.id;
                var2 = global;
                var2 = var2.HermesInternal;
                var3 = var2.concat;
                var2 = 'UpcomingEventsLongPress-';
                var3 = var3.bind(var2)(var8);
                var2 = {};
                var7 = var7.id;
                var2['guildId'] = var7;
                var2 = var5.bind(var6)(var4, var3, var2);
                return var1;
            };
            var2 = var6.bind(var9)(var2, var5);
            var6 = var13.length;
            var5 = 0;
            if(!(!(var6 > var5))) { _fun0001_ip = 285; continue _fun0001 }
 228:
            var11 = _closure1_slot0;
            var12 = _closure1_slot2;
            var5 = 12;
            var6 = var12[var5];
            var6 = var11.bind(var10)(var6);
            var9 = var6.intl;
            var6 = var9.string;
            var5 = var12[var5];
            var5 = var11.bind(var10)(var5);
            var5 = var5.t;
            var5 = var5.tlopTE;
            var5 = var6.bind(var9)(var5);
            _fun0001_ip = 353; continue _fun0001;
 285:
            var9 = _closure1_slot0;
            var14 = _closure1_slot2;
            var6 = 12;
            var11 = var14[var6];
            var11 = var9.bind(var10)(var11);
            var12 = var11.intl;
            var11 = var12.formatToPlainString;
            var6 = var14[var6];
            var6 = var9.bind(var10)(var6);
            var6 = var6.t;
            var9 = var6.IBdqSk;
            var6 = {};
            var13 = var13.length;
            var6['number'] = var13;
            var5 = var11.bind(var12)(var9, var6);
 353:
            var9 = _closure1_slot0;
            var6 = _closure1_slot2;
            var11 = 13;
            var6 = var6[var11];
            var6 = var9.bind(var10)(var6);
            var6 = var6.ChannelModes;
            var6 = var6.DEFAULT;
            var9 = var8;
            if(!var9) { _fun0001_ip = 394; continue _fun0001 }
 391:
            var9 = !var4;
 394:
            if(!var9) { _fun0001_ip = 426; continue _fun0001 }
 397:
            var9 = _closure1_slot0;
            var1 = _closure1_slot2;
            var1 = var1[var11];
            var1 = var9.bind(var10)(var1);
            var1 = var1.ChannelModes;
            var6 = var1.UNREAD_IMPORTANT;
 426:
            var1 = {};
            var1['hasUnread'] = var8;
            var1['mentionCount'] = var7;
            var1['mode'] = var6;
            var1['name'] = var5;
            var1['eventsMuted'] = var4;
            var1['handlePress'] = var3;
            var1['handleLongPress'] = var2;
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();