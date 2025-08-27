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
            var6 = _closure1_slot2;
            var1 = 7;
            var2 = var6[var1];
            var4 = undefined;
            var10 = var3.bind(var4)(var2);
            var9 = var10.useStateFromStores;
            var2 = _closure1_slot5;
            var7 = new Array(1);
            var7[0] = var2;
            var2 = function() {
                var3 = _closure1_slot5;
                var2 = var3.getGuild;
                var1 = _closure2_slot0;
                var1 = var1.guildId;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var13 = var9.bind(var10)(var7, var2);
            var1 = var6[var1];
            var9 = var3.bind(var4)(var1);
            var7 = var9.useStateFromStores;
            var1 = _closure1_slot6;
            var2 = new Array(1);
            var2[0] = var1;
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
            var1 = var7.bind(var9)(var2, var1);
            var2 = 8;
            var7 = var6[var2];
            var9 = var3.bind(var4)(var7);
            var7 = var9.useShouldAgeVerifyForAgeGate;
            var15 = var7.bind(var9)();
            var2 = var6[var2];
            var6 = var3.bind(var4)(var2);
            var3 = var6.useAgeGateVerifyContent;
            var2 = _closure1_slot4;
            var2 = var2.bind(var4)(var13);
            var7 = _closure1_slot8;
            if(var2) { _fun0001_ip = 164; continue _fun0001 }
 156:
            var2 = var7.NSFW_CHANNEL;
            _fun0001_ip = 170; continue _fun0001;
 164:
            var2 = var7.NSFW_SERVER;
 170:
            var2 = var3.bind(var6)(var2);
            var9 = var2.verifyAgreementButtonText;
            var10 = var2.verifyGateDescription;
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
            var12 = _closure1_slot3;
            var7 = var12.useCallback;
            var3 = function() {
                var3 = _closure1_slot1;
                var7 = _closure1_slot2;
                var1 = 10;
                var2 = var7[var1];
                var1 = undefined;
                var4 = var3.bind(var1)(var2);
                var3 = var4.showAgeVerificationGetStartedModal;
                var2 = {};
                var6 = _closure1_slot0;
                var5 = 11;
                var5 = var7[var5];
                var5 = var6.bind(var1)(var5);
                var5 = var5.AgeVerificationModalEntryPoint;
                var5 = var5.NSFW_GUILD;
                var2['entryPoint'] = var5;
                var2 = var3.bind(var4)(var2);
                return var1;
            };
            var2 = new Array(0);
            var7 = var7.bind(var12)(var3, var2);
            var3 = _closure1_slot0;
            var2 = _closure1_slot2;
            var12 = 12;
            var12 = var2[var12];
            var14 = var3.bind(var4)(var12);
            var12 = var14.useNsfwSource;
            var14 = var12.bind(var14)();
            var12 = _closure1_slot4;
            var16 = var12.bind(var4)(var13);
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
            if(var16) { _fun0001_ip = 314; continue _fun0001 }
 306:
            var2 = var17.ZmwvDQ;
            _fun0001_ip = 320; continue _fun0001;
 314:
            var2 = var17.xi46lp;
 320:
            var13 = var3.bind(var13)(var2);
            var3 = _closure1_slot9;
            var17 = _closure1_slot1;
            var18 = _closure1_slot2;
            var2 = 14;
            var2 = var18[var2];
            var2 = var17.bind(var4)(var2);
            if(var15) { _fun0001_ip = 983; continue _fun0001 }
 355:
            if(var1) { _fun0001_ip = 634; continue _fun0001 }
 361:
            var1 = {};
            var15 = var11.guildId;
            var1['guildId'] = var15;
            var15 = var11.channelId;
            var1['channelId'] = var15;
            var17 = _closure1_slot0;
            var15 = _closure1_slot2;
            var18 = 11;
            var18 = var15[var18];
            var18 = var17.bind(var4)(var18);
            var18 = var18.NsfwSpaceWarningModalType;
            var18 = var18.NSFW_CHANNEL_VERIFIED;
            var1['modalType'] = var18;
            var1['source'] = var14;
            var1['title'] = var13;
            var15 = var15[var12];
            var15 = var17.bind(var4)(var15);
            var18 = var15.intl;
            var17 = var18.string;
            var19 = _closure1_slot0;
            var15 = _closure1_slot2;
            var15 = var15[var12];
            var15 = var19.bind(var4)(var15);
            var19 = var15.t;
            if(var16) { _fun0001_ip = 478; continue _fun0001 }
 470:
            var15 = var19.E4Cd5O;
            _fun0001_ip = 486; continue _fun0001;
 478:
            var15 = var19.ZtuRtr;
 486:
            var15 = var17.bind(var18)(var15);
            var1['description'] = var15;
            var19 = _closure1_slot0;
            var15 = _closure1_slot2;
            var17 = var15[var12];
            var17 = var19.bind(var4)(var17);
            var20 = var17.intl;
            var18 = var20.string;
            var17 = var15[var12];
            var17 = var19.bind(var4)(var17);
            var17 = var17.t;
            var17 = var17.wVq7ur;
            var17 = var18.bind(var20)(var17);
            var1['agreement'] = var17;
            var17 = 'destructive';
            var1['agreementButtonVariant'] = var17;
            var17 = var15[var12];
            var17 = var19.bind(var4)(var17);
            var18 = var17.intl;
            var17 = var18.string;
            var15 = var15[var12];
            var15 = var19.bind(var4)(var15);
            var15 = var15.t;
            var15 = var15./g10LC;
            var15 = var17.bind(var18)(var15);
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
            _fun0001_ip = 978; continue _fun0001;
 634:
            var5 = {};
            var15 = var11.guildId;
            var5['guildId'] = var15;
            var15 = var11.channelId;
            var5['channelId'] = var15;
            var17 = _closure1_slot0;
            var15 = _closure1_slot2;
            var18 = 11;
            var18 = var15[var18];
            var18 = var17.bind(var4)(var18);
            var18 = var18.NsfwSpaceWarningModalType;
            var18 = var18.NSFW_CHANNEL_UNDERAGE;
            var5['modalType'] = var18;
            var19 = _closure1_slot1;
            var18 = 15;
            var18 = var15[var18];
            var18 = var19.bind(var4)(var18);
            var5['source'] = var18;
            var15 = var15[var12];
            var15 = var17.bind(var4)(var15);
            var18 = var15.intl;
            var17 = var18.string;
            var19 = _closure1_slot0;
            var15 = _closure1_slot2;
            var15 = var15[var12];
            var15 = var19.bind(var4)(var15);
            var19 = var15.t;
            if(var16) { _fun0001_ip = 765; continue _fun0001 }
 755:
            var15 = var19.NEabBQ;
            _fun0001_ip = 771; continue _fun0001;
 765:
            var15 = var19.H0SG/v;
 771:
            var15 = var17.bind(var18)(var15);
            var5['title'] = var15;
            var17 = _closure1_slot0;
            var15 = _closure1_slot2;
            var15 = var15[var12];
            var15 = var17.bind(var4)(var15);
            var19 = var15.intl;
            var18 = var19.format;
            var17 = _closure1_slot0;
            var15 = _closure1_slot2;
            var15 = var15[var12];
            var15 = var17.bind(var4)(var15);
            var15 = var15.t;
            if(var16) { _fun0001_ip = 842; continue _fun0001 }
 832:
            var17 = var15.2kHZen;
            _fun0001_ip = 850; continue _fun0001;
 842:
            var17 = var15.6++3cX;
 850:
            var16 = {};
            var21 = _closure1_slot1;
            var15 = _closure1_slot2;
            var20 = 16;
            var20 = var15[var20];
            var22 = var21.bind(var4)(var20);
            var21 = var22.getArticleURL;
            var20 = _closure1_slot7;
            var20 = var20.NSFW_AGE_GATING;
            var20 = var21.bind(var22)(var20);
            var16['helpURL'] = var20;
            var16 = var18.bind(var19)(var17, var16);
            var5['description'] = var16;
            var16 = 'primary';
            var5['disagreementButtonVariant'] = var16;
            var18 = _closure1_slot0;
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
 978:
            _fun0001_ip = 1119; continue _fun0001;
 983:
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
 1119:
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();