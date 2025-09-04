// app/components_native/warnings/GuildNSFW.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
    var1 = ['modalType'];
    var _closure1_slot3 = var1;
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
    var _closure1_slot4 = var4;
    var4 = 1;
    var8 = var6[var4];
    var4 = metroImportAll;
    var4 = var4.bind(var1)(var8);
    var _closure1_slot5 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot6 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.jsx;
    var _closure1_slot7 = var4;
    var4 = 11;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'components_native/warnings/GuildNSFW.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function GuildNSFW(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var2 = arg1;
            var _closure2_slot0 = var2;
            var6 = _closure1_slot0;
            var7 = _closure1_slot2;
            var3 = 4;
            var3 = var7[var3];
            var4 = undefined;
            var9 = var6.bind(var4)(var3);
            var8 = var9.useStateFromStores;
            var3 = _closure1_slot6;
            var5 = new Array(1);
            var5[0] = var3;
            var3 = function() {
                var3 = _closure1_slot6;
                var2 = var3.getGuild;
                var1 = _closure2_slot0;
                var1 = var1.guildId;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var3 = var8.bind(var9)(var5, var3);
            var5 = 5;
            var5 = var7[var5];
            var6 = var6.bind(var4)(var5);
            var5 = var6.useAgeGateVerifyContentForGuild;
            var7 = var5.bind(var6)(var3);
            var8 = var7.modalType;
            var6 = _closure1_slot4;
            var5 = _closure1_slot3;
            var9 = var6.bind(var4)(var7, var5);
            var6 = function handleDisagree() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var3 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var1 = 6;
                    var2 = var2[var1];
                    var1 = undefined;
                    var6 = var3.bind(var1)(var2);
                    var5 = var6.nsfwReturnToSafety;
                    var3 = _closure2_slot0;
                    var4 = var3.guildId;
                    var4 = var5.bind(var6)(var4);
                    var4 = var3.onReturnToSafety;
                    var3 = null;
                    if(!(var3 != var4)) { _fun0002_ip = 74; continue _fun0002 }
 60:
                    var3 = _closure2_slot0;
                    var2 = var3.onReturnToSafety;
                    var2 = var2.bind(var3)();
 74:
                    return var1;
                }
            };
            var12 = _closure1_slot5;
            var11 = var12.useCallback;
            var7 = function() {
                var3 = _closure1_slot1;
                var7 = _closure1_slot2;
                var1 = 7;
                var2 = var7[var1];
                var1 = undefined;
                var4 = var3.bind(var1)(var2);
                var3 = var4.showAgeVerificationGetStartedModal;
                var2 = {};
                var6 = _closure1_slot0;
                var5 = 8;
                var5 = var7[var5];
                var5 = var6.bind(var1)(var5);
                var5 = var5.AgeVerificationModalEntryPoint;
                var5 = var5.NSFW_GUILD;
                var2['entryPoint'] = var5;
                var2 = var3.bind(var4)(var2);
                return var1;
            };
            var5 = new Array(0);
            var7 = var11.bind(var12)(var7, var5);
            var5 = {};
            var14 = var5;
            var13 = var9;
            var9 = copyDataProperties(var14, var13);
            var9 = null;
            var11 = var9 == var3;
            var9 = undefined;
            if(var11) { _fun0001_ip = 168; continue _fun0001 }
 163:
            var9 = var3.id;
 168:
            var3 = 'guildId';
            var5[var3] = var9;
            var3 = var2.channelId;
            var2 = 'channelId';
            var5[var2] = var3;
            var3 = _closure1_slot0;
            var2 = _closure1_slot2;
            var9 = 9;
            var11 = var2[var9];
            var11 = var3.bind(var4)(var11);
            var12 = var11.intl;
            var11 = var12.string;
            var9 = var2[var9];
            var9 = var3.bind(var4)(var9);
            var9 = var9.t;
            var9 = var9./g10LC;
            var11 = var11.bind(var12)(var9);
            var9 = 'disagreement';
            var5[var9] = var11;
            var9 = 8;
            var2 = var2[var9];
            var2 = var3.bind(var4)(var2);
            var2 = var2.NsfwSpaceWarningModalType;
            var2 = var2.NSFW_CHANNEL_AGE_VERIFY;
            if(!(var2 !== var8)) { _fun0001_ip = 486; continue _fun0001 }
 288:
            var3 = _closure1_slot0;
            var2 = _closure1_slot2;
            var2 = var2[var9];
            var2 = var3.bind(var4)(var2);
            var2 = var2.NsfwSpaceWarningModalType;
            var2 = var2.GUILD_LARGE_SERVER;
            if(!(var2 !== var8)) { _fun0001_ip = 486; continue _fun0001 }
 324:
            var3 = _closure1_slot0;
            var2 = _closure1_slot2;
            var2 = var2[var9];
            var2 = var3.bind(var4)(var2);
            var2 = var2.NsfwSpaceWarningModalType;
            var2 = var2.NSFW_CHANNEL_UNDERAGE;
            if(!(var2 !== var8)) { _fun0001_ip = 423; continue _fun0001 }
 357:
            var9 = _closure1_slot7;
            var3 = _closure1_slot1;
            var11 = _closure1_slot2;
            var2 = 10;
            var2 = var11[var2];
            var3 = var3.bind(var4)(var2);
            var2 = {};
            var2['modalType'] = var8;
            var10 = function onAgree() {
                var3 = _closure1_slot1;
                var2 = _closure1_slot2;
                var1 = 6;
                var2 = var2[var1];
                var1 = undefined;
                var4 = var3.bind(var1)(var2);
                var3 = var4.nsfwAgree;
                var2 = _closure2_slot0;
                var2 = var2.guildId;
                var2 = var3.bind(var4)(var2);
                return var1;
            };
            var2['onAgree'] = var10;
            var2['onDisagree'] = var6;
            var14 = var2;
            var13 = var5;
            var10 = copyDataProperties(var14, var13);
            var2 = var9.bind(var4)(var3, var2);
            return var2;
 423:
            var9 = _closure1_slot7;
            var3 = _closure1_slot1;
            var10 = _closure1_slot2;
            var2 = 10;
            var2 = var10[var2];
            var3 = var3.bind(var4)(var2);
            var2 = {};
            var2['modalType'] = var8;
            var10 = 'primary';
            var2['disagreementButtonVariant'] = var10;
            var2['onDisagree'] = var6;
            var14 = var2;
            var13 = var5;
            var10 = copyDataProperties(var14, var13);
            var2 = var9.bind(var4)(var3, var2);
            return var2;
 486:
            var3 = _closure1_slot7;
            var2 = _closure1_slot1;
            var9 = _closure1_slot2;
            var1 = 10;
            var1 = var9[var1];
            var2 = var2.bind(var4)(var1);
            var1 = {};
            var1['modalType'] = var8;
            var1['onAgree'] = var7;
            var1['onDisagree'] = var6;
            var14 = var1;
            var13 = var5;
            var5 = copyDataProperties(var14, var13);
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();