// app/modules/guild_tag/native/useGuildTagCoachmark.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
    var1 = function useGuildTagBaseCoachmark(arg1, arg2, arg3) {
        var1 = arg2;
        var _closure2_slot0 = var1;
        var4 = _closure1_slot9;
        var1 = undefined;
        var4 = var4.bind(var1)();
        var _closure2_slot1 = var4;
        var4 = _closure1_slot0;
        var5 = _closure1_slot2;
        var3 = 8;
        var3 = var5[var3];
        var5 = var4.bind(var1)(var3);
        var4 = var5.useCoachmark;
        var3 = {};
        var2 = function renderImgComponent() {
            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
                var1 = _closure2_slot0;
                var11 = null;
                var1 = var11 == var1;
                var5 = undefined;
                var9 = undefined;
                if(var1) { _fun0001_ip = 2; continue _fun0001 }
case 3:
                var1 = _closure2_slot0;
                var9 = var1.profile;
case 2:
                var2 = var11 == var9;
                var1 = undefined;
                if(var2) { _fun0001_ip = 4; continue _fun0001 }
case 5:
                var1 = var9.tag;
case 4:
                var2 = var11 == var1;
                var1 = null;
                if(var2) { _fun0001_ip = 6; continue _fun0001 }
case 7:
                var4 = _closure1_slot8;
                var3 = _closure1_slot0;
                var8 = _closure1_slot2;
                var2 = 9;
                var2 = var8[var2];
                var2 = var3.bind(var5)(var2);
                var3 = var2.BaseGuildTagChiplet;
                var2 = {};
                var8 = _closure2_slot0;
                var8 = var11 == var8;
                var10 = undefined;
                if(var8) { _fun0001_ip = 8; continue _fun0001 }
case 9:
                var8 = _closure2_slot0;
                var8 = var8.profile;
                var12 = var11 == var8;
                var10 = undefined;
                if(var12) { _fun0001_ip = 8; continue _fun0001 }
case 10:
                var10 = var8.tag;
case 8:
                var12 = var11 != var10;
                var8 = undefined;
                if(!var12) { _fun0001_ip = 11; continue _fun0001 }
case 12:
                var8 = var10;
case 11:
                var2['guildTag'] = var8;
                var8 = _closure2_slot0;
                var10 = var11 == var8;
                var8 = undefined;
                if(var10) { _fun0001_ip = 13; continue _fun0001 }
case 14:
                var10 = _closure2_slot0;
                var8 = var10.id;
case 13:
                var10 = var11 != var8;
                var8 = undefined;
                if(!var10) { _fun0001_ip = 15; continue _fun0001 }
case 16:
                var12 = var11 == var9;
                var10 = undefined;
                if(var12) { _fun0001_ip = 17; continue _fun0001 }
case 18:
                var10 = var9.badge;
case 17:
                var10 = var11 != var10;
                var8 = undefined;
                if(!var10) { _fun0001_ip = 15; continue _fun0001 }
case 19:
                var11 = _closure1_slot0;
                var12 = _closure1_slot2;
                var10 = 10;
                var10 = var12[var10];
                var13 = var11.bind(var5)(var10);
                var12 = var13.getGuildTagBadgeUrl;
                var10 = _closure2_slot0;
                var11 = var10.id;
                var10 = var9.badge;
                var9 = _closure1_slot6;
                var9 = var9.SIZE_36;
                var8 = var12.bind(var13)(var11, var10, var9);
case 15:
                var2['guildBadge'] = var8;
                var7 = _closure2_slot1;
                var8 = var7.tagContainer;
                var2['containerStyles'] = var8;
                var7 = var7.tag;
                var2['textStyle'] = var7;
                var7 = 'heading-xxl/semibold';
                var2['textVariant'] = var7;
                var6 = _closure1_slot6;
                var6 = var6.SIZE_36;
                var2['badgeSize'] = var6;
                var1 = var4.bind(var5)(var3, var2);
case 6:
                return var1;
            }
        };
        var3['renderImgComponent'] = var2;
        var2 = 'top';
        var3['position'] = var2;
        var6 = arg3;
        var7 = var3;
        var2 = copyDataProperties(var7, var6);
        var2 = arg1;
        var2 = var4.bind(var5)(var2, var3);
        return var1;
    };
    var _closure1_slot10 = var1;
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
    var8 = var6[var4];
    var4 = metroImportAll;
    var4 = var4.bind(var1)(var8);
    var4 = 3;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.GuildTagBadgeSize;
    var _closure1_slot6 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.ContentDismissActionType;
    var _closure1_slot7 = var4;
    var4 = 6;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.jsx;
    var _closure1_slot8 = var4;
    var4 = 7;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = {};
    var9 = {};
    var10 = 16;
    var9['marginTop'] = var10;
    var4['tagContainer'] = var9;
    var9 = {};
    var10 = 40;
    var9['lineHeight'] = var10;
    var4['tag'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot9 = var4;
    var4 = 18;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/guild_tag/native/useGuildTagCoachmark.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function useGuildTagUpdatedCoachmark(arg1, arg2) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var10 = arg2;
            var4 = _closure1_slot0;
            var3 = _closure1_slot2;
            var1 = 11;
            var3 = var3[var1];
            var1 = undefined;
            var4 = var4.bind(var1)(var3);
            var3 = var4.useIsMobileQuestDockVisible;
            var11 = var3.bind(var4)();
            var12 = null;
            var3 = var12 == var10;
            var4 = undefined;
            if(var3) { _fun0002_ip = 20; continue _fun0002 }
case 21:
            var3 = var10.primaryGuild;
            var5 = var12 == var3;
            var4 = undefined;
            if(var5) { _fun0002_ip = 20; continue _fun0002 }
case 22:
            var4 = var3.identityGuildId;
case 20:
            var5 = var12 != var4;
            var3 = null;
            if(!var5) { _fun0002_ip = 23; continue _fun0002 }
case 24:
            var3 = var4;
case 23:
            var _closure2_slot1 = var3;
            var8 = _closure1_slot0;
            var7 = _closure1_slot2;
            var4 = 12;
            var4 = var7[var4];
            var13 = var8.bind(var1)(var4);
            var9 = var13.useStateFromStores;
            var4 = _closure1_slot5;
            var5 = new Array(1);
            var5[0] = var4;
            var4 = new Array(1);
            var4[0] = var3;
            var3 = function() {
                var3 = _closure1_slot5;
                var2 = var3.getGuild;
                var1 = _closure2_slot1;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var5 = var9.bind(var13)(var5, var3, var4);
            var _closure2_slot2 = var5;
            var3 = 13;
            var3 = var7[var3];
            var9 = var8.bind(var1)(var3);
            var4 = var9.useGuildTagUpdatedDismissibleContent;
            var3 = {};
            var11 = !var11;
            var3['shouldShow'] = var11;
            var9 = var4.bind(var9)(var10, var3);
            var4 = _closure1_slot4;
            var3 = 2;
            var4 = var4.bind(var1)(var9, var3);
            var3 = 0;
            var10 = var4[var3];
            var3 = 1;
            var3 = var4[var3];
            var _closure2_slot3 = var3;
            var3 = function handleDismiss(arg1) {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var1 = _closure2_slot2;
                    var4 = null;
                    var5 = var4 == var1;
                    var1 = undefined;
                    var3 = undefined;
                    if(var5) { _fun0003_ip = 4; continue _fun0003 }
case 3:
                    var5 = _closure2_slot2;
                    var5 = var5.profile;
                    var6 = var4 == var5;
                    var3 = undefined;
                    if(var6) { _fun0003_ip = 4; continue _fun0003 }
case 5:
                    var3 = var5.tag;
case 4:
                    if(!(var4 != var3)) { _fun0003_ip = 25; continue _fun0003 }
case 26:
                    var4 = _closure1_slot1;
                    var5 = _closure1_slot2;
                    var3 = 14;
                    var3 = var5[var3];
                    var5 = var4.bind(var1)(var3);
                    var4 = var5.dispatch;
                    var3 = {};
                    var6 = 'GUILD_TAG_CHANGED_COACHMARK_SEEN';
                    var3['type'] = var6;
                    var6 = _closure2_slot2;
                    var6 = var6.id;
                    var3['guildId'] = var6;
                    var6 = {};
                    var7 = _closure2_slot2;
                    var7 = var7.profile;
                    var7 = var7.tag;
                    var6['tag'] = var7;
                    var3['lastSeenInfo'] = var6;
                    var3 = var4.bind(var5)(var3);
case 25:
                    var3 = _closure2_slot3;
                    var2 = arg1;
                    var2 = var3.bind(var1)(var2);
                    return var1;
                }
            };
            var _closure2_slot4 = var3;
            var4 = _closure1_slot10;
            var3 = {};
            var9 = 15;
            var9 = var7[var9];
            var9 = var8.bind(var1)(var9);
            var9 = var9.DismissibleContent;
            var9 = var9.GUILD_TAG_UPDATED_COACHMARK;
            var9 = var10 === var9;
            var3['visible'] = var9;
            var11 = 16;
            var9 = var7[var11];
            var9 = var8.bind(var1)(var9);
            var10 = var9.intl;
            var9 = var10.formatToPlainString;
            var7 = var7[var11];
            var7 = var8.bind(var1)(var7);
            var7 = var7.t;
            var8 = var7.m/Tc3n;
            var7 = {};
            var13 = var12 == var5;
            var12 = undefined;
            if(var13) { _fun0002_ip = 27; continue _fun0002 }
case 6:
            var12 = var5.name;
case 27:
            var7['guildName'] = var12;
            var7 = var9.bind(var10)(var8, var7);
            var3['title'] = var7;
            var10 = _closure1_slot0;
            var7 = _closure1_slot2;
            var8 = var7[var11];
            var8 = var10.bind(var1)(var8);
            var12 = var8.intl;
            var9 = var12.string;
            var8 = var7[var11];
            var8 = var10.bind(var1)(var8);
            var8 = var8.t;
            var8 = var8.DrAXIr;
            var8 = var9.bind(var12)(var8);
            var3['description'] = var8;
            var8 = var7[var11];
            var8 = var10.bind(var1)(var8);
            var9 = var8.intl;
            var8 = var9.string;
            var7 = var7[var11];
            var7 = var10.bind(var1)(var7);
            var7 = var7.t;
            var7 = var7.jwEaiX;
            var7 = var8.bind(var9)(var7);
            var3['buttonLabel'] = var7;
            var7 = 'primary';
            var3['buttonVariant'] = var7;
            var7 = _closure1_slot3;
            var6 = function* () {
                var1 = function* anon_0_() {
                    _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                        if(var2) { _fun0004_ip = 28; continue _fun0004 }
case 29:
                        var5 = _closure1_slot0;
                        var3 = _closure1_slot2;
                        var2 = 17;
                        var2 = var3[var2];
                        var3 = undefined;
                        var8 = var5.bind(var3)(var2);
                        var7 = var8.adoptGuildIdentity;
                        var6 = _closure2_slot1;
                        var2 = true;
                        var2 = var7.bind(var8)(var6, var2);
                        SaveGenerator(address=57);
case 30:
                        return var2;
case 31:
                        ResumeGenerator(result_out_reg=1, return_bool_out_reg=5);
                        if(var6) { _fun0004_ip = 32; continue _fun0004 }
case 33:
                        var5 = _closure2_slot4;
                        var4 = _closure1_slot7;
                        var4 = var4.TAKE_ACTION;
                        var4 = var5.bind(var3)(var4);
                        return var3;
case 32:
                        return var2;
case 28:
                        return var1;
                    }
                };
                return var1;
            };
            var6 = var7.bind(var1)(var6);
            var _closure2_slot0 = var6;
            var6 = function() {
                var1 = undefined;
                var4 = _closure2_slot0;
                var3 = var4.apply;
                var1 = arguments;
                var2 = var1;
                var1 = this;
                var1 = var3.bind(var4)(var1, var2);
                return var1;
            };
            var3['onButtonPress'] = var6;
            var2 = function onDismiss() {
                var3 = _closure2_slot4;
                var1 = _closure1_slot7;
                var2 = var1.DISMISS;
                var1 = undefined;
                var1 = var3.bind(var1)(var2);
                return var1;
            };
            var3['onDismiss'] = var2;
            var2 = arg1;
            var2 = var4.bind(var1)(var2, var5, var3);
            return var1;
        }
    };
    var3['useGuildTagUpdatedCoachmark'] = var4;
    var2 = function useGuildTagAvailableCoachmark(arg1, arg2) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
            var10 = arg2;
            var _closure2_slot0 = var10;
            var8 = _closure1_slot0;
            var7 = _closure1_slot2;
            var1 = 11;
            var3 = var7[var1];
            var1 = undefined;
            var4 = var8.bind(var1)(var3);
            var3 = var4.useIsMobileQuestDockVisible;
            var11 = var3.bind(var4)();
            var3 = 12;
            var3 = var7[var3];
            var12 = var8.bind(var1)(var3);
            var9 = var12.useStateFromStores;
            var3 = _closure1_slot5;
            var5 = new Array(1);
            var5[0] = var3;
            var4 = new Array(1);
            var4[0] = var10;
            var3 = function() {
                var3 = _closure1_slot5;
                var2 = var3.getGuild;
                var1 = _closure2_slot0;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var5 = var9.bind(var12)(var5, var3, var4);
            var3 = 13;
            var3 = var7[var3];
            var9 = var8.bind(var1)(var3);
            var4 = var9.useGuildTagAvailableDismissibleContent;
            var3 = {};
            var11 = !var11;
            var3['shouldShow'] = var11;
            var9 = var4.bind(var9)(var10, var3);
            var4 = _closure1_slot4;
            var3 = 2;
            var4 = var4.bind(var1)(var9, var3);
            var3 = 0;
            var10 = var4[var3];
            var3 = 1;
            var3 = var4[var3];
            var _closure2_slot2 = var3;
            var4 = _closure1_slot10;
            var3 = {};
            var9 = 15;
            var9 = var7[var9];
            var9 = var8.bind(var1)(var9);
            var9 = var9.DismissibleContent;
            var9 = var9.GUILD_TAG_AVAILABLE_COACHMARK_V2;
            var9 = var10 === var9;
            var3['visible'] = var9;
            var11 = 16;
            var9 = var7[var11];
            var9 = var8.bind(var1)(var9);
            var10 = var9.intl;
            var9 = var10.formatToPlainString;
            var7 = var7[var11];
            var7 = var8.bind(var1)(var7);
            var7 = var7.t;
            var8 = var7.VFqnyU;
            var7 = {};
            var12 = null;
            var13 = var12 == var5;
            var12 = undefined;
            if(var13) { _fun0005_ip = 34; continue _fun0005 }
case 35:
            var12 = var5.name;
case 34:
            var7['guildName'] = var12;
            var7 = var9.bind(var10)(var8, var7);
            var3['title'] = var7;
            var10 = _closure1_slot0;
            var7 = _closure1_slot2;
            var8 = var7[var11];
            var8 = var10.bind(var1)(var8);
            var12 = var8.intl;
            var9 = var12.string;
            var8 = var7[var11];
            var8 = var10.bind(var1)(var8);
            var8 = var8.t;
            var8 = var8.DrAXIr;
            var8 = var9.bind(var12)(var8);
            var3['description'] = var8;
            var8 = var7[var11];
            var8 = var10.bind(var1)(var8);
            var9 = var8.intl;
            var8 = var9.string;
            var7 = var7[var11];
            var7 = var10.bind(var1)(var7);
            var7 = var7.t;
            var7 = var7.jwEaiX;
            var7 = var8.bind(var9)(var7);
            var3['buttonLabel'] = var7;
            var7 = 'primary';
            var3['buttonVariant'] = var7;
            var7 = _closure1_slot3;
            var6 = function* () {
                var1 = function* anon_0_() {
                    _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                        if(var2) { _fun0006_ip = 28; continue _fun0006 }
case 29:
                        var5 = _closure1_slot0;
                        var3 = _closure1_slot2;
                        var2 = 17;
                        var2 = var3[var2];
                        var3 = undefined;
                        var8 = var5.bind(var3)(var2);
                        var7 = var8.adoptGuildIdentity;
                        var6 = _closure2_slot0;
                        var2 = true;
                        var2 = var7.bind(var8)(var6, var2);
                        SaveGenerator(address=57);
case 30:
                        return var2;
case 31:
                        ResumeGenerator(result_out_reg=1, return_bool_out_reg=5);
                        if(var6) { _fun0006_ip = 32; continue _fun0006 }
case 33:
                        var5 = _closure2_slot2;
                        var4 = _closure1_slot7;
                        var4 = var4.TAKE_ACTION;
                        var4 = var5.bind(var3)(var4);
                        return var3;
case 32:
                        return var2;
case 28:
                        return var1;
                    }
                };
                return var1;
            };
            var6 = var7.bind(var1)(var6);
            var _closure2_slot1 = var6;
            var6 = function() {
                var1 = undefined;
                var4 = _closure2_slot1;
                var3 = var4.apply;
                var1 = arguments;
                var2 = var1;
                var1 = this;
                var1 = var3.bind(var4)(var1, var2);
                return var1;
            };
            var3['onButtonPress'] = var6;
            var2 = function onDismiss() {
                var3 = _closure2_slot2;
                var1 = _closure1_slot7;
                var2 = var1.DISMISS;
                var1 = undefined;
                var1 = var3.bind(var1)(var2);
                return var1;
            };
            var3['onDismiss'] = var2;
            var2 = arg1;
            var2 = var4.bind(var1)(var2, var5, var3);
            return var1;
        }
    };
    var3['useGuildTagAvailableCoachmark'] = var2;
    return var1;
})();