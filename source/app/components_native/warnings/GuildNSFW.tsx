// app/components_native/warnings/GuildNSFW.tsx
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
    var4 = var5.bind(var1)(var4);
    var4 = var4.isGuildNSFW;
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
    var4 = var4.HelpdeskArticles;
    var _closure1_slot7 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.AgeGateSource;
    var _closure1_slot8 = var4;
    var4 = 6;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.jsx;
    var _closure1_slot9 = var4;
    var4 = 17;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'components_native/warnings/GuildNSFW.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function GuildNSFW(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var11 = arg1;
            var _closure2_slot0 = var11;
            var3 = _closure1_slot0;
            var2 = _closure1_slot2;
            var1 = 7;
            var6 = var2[var1];
            var4 = undefined;
            var10 = var3.bind(var4)(var6);
            var9 = var10.useStateFromStores;
            var6 = _closure1_slot5;
            var7 = new Array(1);
            var7[0] = var6;
            var6 = function() {
                var3 = _closure1_slot5;
                var2 = var3.getGuild;
                var1 = _closure2_slot0;
                var1 = var1.guildId;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var13 = var9.bind(var10)(var7, var6);
            var1 = var2[var1];
            var9 = var3.bind(var4)(var1);
            var7 = var9.useStateFromStores;
            var1 = _closure1_slot6;
            var6 = new Array(1);
            var6[0] = var1;
            var1 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var2 = _closure1_slot6;
                    var1 = var2.getCurrentUser;
                    var1 = var1.bind(var2)();
                    var2 = null;
                    var3 = var2 == var1;
                    var2 = undefined;
                    if(var3) { _fun0002_ip = 33; continue _fun0002 }
 27:
                    var2 = var1.nsfwAllowed;
 33:
                    var1 = false;
                    var1 = var1 === var2;
                    return var1;
                }
            };
            var1 = var7.bind(var9)(var6, var1);
            var6 = 8;
            var7 = var2[var6];
            var9 = var3.bind(var4)(var7);
            var7 = var9.useShouldAgeVerifyForAgeGate;
            var16 = var7.bind(var9)();
            var6 = var2[var6];
            var9 = var3.bind(var4)(var6);
            var7 = var9.useAgeGateVerifyContent;
            var6 = _closure1_slot8;
            var6 = var6.NSFW_CHANNEL;
            var6 = var7.bind(var9)(var6);
            var9 = var6.verifyAgreementButtonText;
            var10 = var6.verifyGateDescription;
            var6 = function handleDisagree() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                    var3 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var1 = 9;
                    var2 = var2[var1];
                    var1 = undefined;
                    var6 = var3.bind(var1)(var2);
                    var5 = var6.nsfwReturnToSafety;
                    var3 = _closure2_slot0;
                    var4 = var3.guildId;
                    var4 = var5.bind(var6)(var4);
                    var4 = var3.onReturnToSafety;
                    var3 = null;
                    if(!(var3 != var4)) { _fun0003_ip = 74; continue _fun0003 }
 60:
                    var3 = _closure2_slot0;
                    var2 = var3.onReturnToSafety;
                    var2 = var2.bind(var3)();
 74:
                    return var1;
                }
            };
            var15 = _closure1_slot3;
            var14 = var15.useCallback;
            var12 = function() {
                var4 = _closure1_slot1;
                var6 = _closure1_slot2;
                var1 = 10;
                var3 = var6[var1];
                var1 = undefined;
                var4 = var4.bind(var1)(var3);
                var3 = var4.showAgeVerificationGetStartedModal;
                var5 = _closure1_slot0;
                var2 = 11;
                var2 = var6[var2];
                var2 = var5.bind(var1)(var2);
                var2 = var2.AgeVerificationModalEntryPoint;
                var2 = var2.NSFW_GUILD;
                var2 = var3.bind(var4)(var2);
                return var1;
            };
            var7 = new Array(0);
            var7 = var14.bind(var15)(var12, var7);
            var12 = 12;
            var12 = var2[var12];
            var14 = var3.bind(var4)(var12);
            var12 = var14.useNsfwSource;
            var14 = var12.bind(var14)();
            var12 = _closure1_slot4;
            var15 = var12.bind(var4)(var13);
            var12 = 13;
            var2 = var2[var12];
            var2 = var3.bind(var4)(var2);
            var13 = var2.intl;
            var3 = var13.string;
            var17 = _closure1_slot0;
            var2 = _closure1_slot2;
            var2 = var2[var12];
            var2 = var17.bind(var4)(var2);
            var17 = var2.t;
            if(var15) { _fun0001_ip = 286; continue _fun0001 }
 278:
            var2 = var17.ZmwvDQ;
            _fun0001_ip = 292; continue _fun0001;
 286:
            var2 = var17.xi46lp;
 292:
            var13 = var3.bind(var13)(var2);
            var3 = _closure1_slot9;
            var17 = _closure1_slot1;
            var18 = _closure1_slot2;
            var2 = 14;
            var2 = var18[var2];
            var2 = var17.bind(var4)(var2);
            if(var16) { _fun0001_ip = 895; continue _fun0001 }
 327:
            if(var1) { _fun0001_ip = 606; continue _fun0001 }
 333:
            var1 = {};
            var16 = var11.guildId;
            var1['guildId'] = var16;
            var16 = var11.channelId;
            var1['channelId'] = var16;
            var17 = _closure1_slot0;
            var16 = _closure1_slot2;
            var18 = 11;
            var18 = var16[var18];
            var18 = var17.bind(var4)(var18);
            var18 = var18.NsfwSpaceWarningModalType;
            var18 = var18.NSFW_CHANNEL_VERIFIED;
            var1['modalType'] = var18;
            var1['source'] = var14;
            var1['title'] = var13;
            var16 = var16[var12];
            var16 = var17.bind(var4)(var16);
            var17 = var16.intl;
            var16 = var17.string;
            var19 = _closure1_slot0;
            var18 = _closure1_slot2;
            var18 = var18[var12];
            var18 = var19.bind(var4)(var18);
            var18 = var18.t;
            if(var15) { _fun0001_ip = 450; continue _fun0001 }
 442:
            var15 = var18.E4Cd5O;
            _fun0001_ip = 458; continue _fun0001;
 450:
            var15 = var18.ZtuRtr;
 458:
            var15 = var16.bind(var17)(var15);
            var1['description'] = var15;
            var18 = _closure1_slot0;
            var15 = _closure1_slot2;
            var16 = var15[var12];
            var16 = var18.bind(var4)(var16);
            var19 = var16.intl;
            var17 = var19.string;
            var16 = var15[var12];
            var16 = var18.bind(var4)(var16);
            var16 = var16.t;
            var16 = var16.wVq7ur;
            var16 = var17.bind(var19)(var16);
            var1['agreement'] = var16;
            var16 = 'destructive';
            var1['agreementButtonVariant'] = var16;
            var16 = var15[var12];
            var16 = var18.bind(var4)(var16);
            var17 = var16.intl;
            var16 = var17.string;
            var15 = var15[var12];
            var15 = var18.bind(var4)(var15);
            var15 = var15.t;
            var15 = var15./g10LC;
            var15 = var16.bind(var17)(var15);
            var1['disagreement'] = var15;
            var5 = function onAgree() {
                var3 = _closure1_slot1;
                var2 = _closure1_slot2;
                var1 = 9;
                var2 = var2[var1];
                var1 = undefined;
                var4 = var3.bind(var1)(var2);
                var3 = var4.nsfwAgree;
                var2 = _closure2_slot0;
                var2 = var2.guildId;
                var2 = var3.bind(var4)(var2);
                return var1;
            };
            var1['onAgree'] = var5;
            var1['onDisagree'] = var6;
            _fun0001_ip = 890; continue _fun0001;
 606:
            var5 = {};
            var15 = var11.guildId;
            var5['guildId'] = var15;
            var15 = var11.channelId;
            var5['channelId'] = var15;
            var18 = _closure1_slot0;
            var15 = _closure1_slot2;
            var16 = 11;
            var16 = var15[var16];
            var16 = var18.bind(var4)(var16);
            var16 = var16.NsfwSpaceWarningModalType;
            var16 = var16.NSFW_CHANNEL_UNDERAGE;
            var5['modalType'] = var16;
            var22 = _closure1_slot1;
            var16 = 15;
            var16 = var15[var16];
            var16 = var22.bind(var4)(var16);
            var5['source'] = var16;
            var16 = var15[var12];
            var16 = var18.bind(var4)(var16);
            var19 = var16.intl;
            var17 = var19.string;
            var16 = var15[var12];
            var16 = var18.bind(var4)(var16);
            var16 = var16.t;
            var16 = var16.NEabBQ;
            var16 = var17.bind(var19)(var16);
            var5['title'] = var16;
            var16 = var15[var12];
            var16 = var18.bind(var4)(var16);
            var20 = var16.intl;
            var19 = var20.format;
            var16 = var15[var12];
            var16 = var18.bind(var4)(var16);
            var16 = var16.t;
            var17 = var16.2kHZen;
            var16 = {};
            var21 = 16;
            var21 = var15[var21];
            var23 = var22.bind(var4)(var21);
            var22 = var23.getArticleURL;
            var21 = _closure1_slot7;
            var21 = var21.NSFW_AGE_GATING;
            var21 = var22.bind(var23)(var21);
            var16['helpURL'] = var21;
            var16 = var19.bind(var20)(var17, var16);
            var5['description'] = var16;
            var16 = 'primary';
            var5['disagreementButtonVariant'] = var16;
            var16 = var15[var12];
            var16 = var18.bind(var4)(var16);
            var17 = var16.intl;
            var16 = var17.string;
            var15 = var15[var12];
            var15 = var18.bind(var4)(var15);
            var15 = var15.t;
            var15 = var15./g10LC;
            var15 = var16.bind(var17)(var15);
            var5['disagreement'] = var15;
            var5['onDisagree'] = var6;
            var1 = var5;
 890:
            _fun0001_ip = 1031; continue _fun0001;
 895:
            var5 = {};
            var15 = var11.guildId;
            var5['guildId'] = var15;
            var11 = var11.channelId;
            var5['channelId'] = var11;
            var11 = _closure1_slot0;
            var8 = _closure1_slot2;
            var15 = 11;
            var15 = var8[var15];
            var15 = var11.bind(var4)(var15);
            var15 = var15.NsfwSpaceWarningModalType;
            var15 = var15.NSFW_CHANNEL_AGE_VERIFY;
            var5['modalType'] = var15;
            var5['source'] = var14;
            var5['title'] = var13;
            var5['description'] = var10;
            var5['agreement'] = var9;
            var9 = var8[var12];
            var9 = var11.bind(var4)(var9);
            var10 = var9.intl;
            var9 = var10.string;
            var8 = var8[var12];
            var8 = var11.bind(var4)(var8);
            var8 = var8.t;
            var8 = var8./g10LC;
            var8 = var9.bind(var10)(var8);
            var5['disagreement'] = var8;
            var5['onAgree'] = var7;
            var5['onDisagree'] = var6;
            var1 = var5;
 1031:
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();