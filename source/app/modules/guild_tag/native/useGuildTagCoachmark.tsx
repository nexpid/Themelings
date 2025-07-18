// app/modules/guild_tag/native/useGuildTagCoachmark.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var7 = native3;
    var3 = native6;
    var6 = native7;
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
    var8 = var6[var4];
    var4 = native4;
    var4 = var4.bind(var1)(var8);
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot6 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.GuildTagBadgeSize;
    var _closure1_slot7 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.ContentDismissActionType;
    var _closure1_slot8 = var4;
    var4 = 6;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.jsx;
    var _closure1_slot9 = var4;
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
    var _closure1_slot10 = var4;
    var4 = 19;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/guild_tag/native/useGuildTagCoachmark.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function useGuildTagCoachmark(arg1, arg2) {
        var12 = arg2;
        var _closure2_slot0 = var12;
        var3 = _closure1_slot10;
        var1 = undefined;
        var8 = var3.bind(var1)();
        var _closure2_slot1 = var8;
        var3 = _closure1_slot0;
        var4 = _closure1_slot2;
        var6 = 8;
        var6 = var4[var6];
        var7 = var3.bind(var1)(var6);
        var6 = var7.useGuildTagCoachmarkType;
        var10 = var6.bind(var7)(var12);
        var _closure2_slot2 = var10;
        var6 = 9;
        var6 = var4[var6];
        var13 = var3.bind(var1)(var6);
        var11 = var13.useStateFromStores;
        var6 = _closure1_slot6;
        var9 = new Array(1);
        var9[0] = var6;
        var7 = new Array(1);
        var7[0] = var12;
        var6 = function() {
            var3 = _closure1_slot6;
            var2 = var3.getGuild;
            var1 = _closure2_slot0;
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var13 = var11.bind(var13)(var9, var6, var7);
        var _closure2_slot3 = var13;
        var6 = 10;
        var6 = var4[var6];
        var7 = var3.bind(var1)(var6);
        var6 = var7.useGuildTagCoachmarkDismissibleContent;
        var9 = var6.bind(var7)(var12);
        var7 = _closure1_slot4;
        var6 = 2;
        var7 = var7.bind(var1)(var9, var6);
        var6 = 0;
        var11 = var7[var6];
        var _closure2_slot4 = var11;
        var6 = 1;
        var9 = var7[var6];
        var _closure2_slot5 = var9;
        var7 = _closure1_slot5;
        var6 = var7.useMemo;
        var5 = new Array(6);
        var5[0] = var13;
        var5[1] = var12;
        var5[2] = var11;
        var5[3] = var10;
        var5[4] = var9;
        var5[5] = var8;
        var2 = function() {
            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
                var1 = _closure2_slot3;
                var13 = null;
                var1 = var13 == var1;
                var6 = undefined;
                var4 = undefined;
                if(var1) { _fun0001_ip = 32; continue _fun0001 }
 22:
                var1 = _closure2_slot3;
                var4 = var1.profile;
 32:
                var _closure3_slot0 = var4;
                var1 = {'title': '', 'description': '', 'position': 'top', 'visible': false};
                var2 = function onDismiss() {
                    var1 = undefined;
                    return var1;
                };
                var1['onDismiss'] = var2;
                var2 = function renderImgComponent() {
                    _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                        var1 = _closure3_slot0;
                        var11 = null;
                        var2 = var11 == var1;
                        var5 = undefined;
                        var1 = undefined;
                        if(var2) { _fun0002_ip = 29; continue _fun0002 }
 20:
                        var2 = _closure3_slot0;
                        var1 = var2.tag;
 29:
                        var2 = var11 == var1;
                        var1 = null;
                        if(var2) { _fun0002_ip = 294; continue _fun0002 }
 41:
                        var4 = _closure1_slot9;
                        var3 = _closure1_slot0;
                        var7 = _closure1_slot2;
                        var2 = 11;
                        var2 = var7[var2];
                        var2 = var3.bind(var5)(var2);
                        var3 = var2.BaseGuildTagChiplet;
                        var2 = {};
                        var8 = _closure2_slot3;
                        var8 = var11 == var8;
                        var10 = undefined;
                        if(var8) { _fun0002_ip = 116; continue _fun0002 }
 92:
                        var8 = _closure2_slot3;
                        var8 = var8.profile;
                        var12 = var11 == var8;
                        var10 = undefined;
                        if(var12) { _fun0002_ip = 116; continue _fun0002 }
 111:
                        var10 = var8.tag;
 116:
                        var12 = var11 != var10;
                        var8 = undefined;
                        if(!var12) { _fun0002_ip = 128; continue _fun0002 }
 125:
                        var8 = var10;
 128:
                        var2['guildTag'] = var8;
                        var10 = _closure2_slot0;
                        var8 = undefined;
                        if(!(var11 !== var10)) { _fun0002_ip = 232; continue _fun0002 }
 143:
                        var10 = _closure3_slot0;
                        var12 = var11 == var10;
                        var10 = undefined;
                        if(var12) { _fun0002_ip = 166; continue _fun0002 }
 156:
                        var12 = _closure3_slot0;
                        var10 = var12.badge;
 166:
                        var10 = var11 != var10;
                        var8 = undefined;
                        if(!var10) { _fun0002_ip = 232; continue _fun0002 }
 175:
                        var11 = _closure1_slot0;
                        var12 = _closure1_slot2;
                        var10 = 12;
                        var10 = var12[var10];
                        var13 = var11.bind(var5)(var10);
                        var12 = var13.getGuildTagBadgeUrl;
                        var11 = _closure2_slot0;
                        var9 = _closure3_slot0;
                        var10 = var9.badge;
                        var9 = _closure1_slot7;
                        var9 = var9.SIZE_36;
                        var8 = var12.bind(var13)(var11, var10, var9);
 232:
                        var2['guildBadge'] = var8;
                        var7 = _closure2_slot1;
                        var8 = var7.tagContainer;
                        var2['containerStyles'] = var8;
                        var7 = var7.tag;
                        var2['textStyle'] = var7;
                        var7 = 'heading-xxl/semibold';
                        var2['textVariant'] = var7;
                        var6 = _closure1_slot7;
                        var6 = var6.SIZE_36;
                        var2['badgeSize'] = var6;
                        var1 = var4.bind(var5)(var3, var2);
 294:
                        return var1;
                    }
                };
                var1['renderImgComponent'] = var2;
                var2 = _closure2_slot0;
                if(!(var13 !== var2)) { _fun0001_ip = 807; continue _fun0001 }
 85:
                var5 = var13 == var4;
                var2 = undefined;
                if(var5) { _fun0001_ip = 99; continue _fun0001 }
 94:
                var2 = var4.tag;
 99:
                if(!(var13 != var2)) { _fun0001_ip = 807; continue _fun0001 }
 106:
                var5 = _closure2_slot4;
                var7 = _closure1_slot0;
                var8 = _closure1_slot2;
                var2 = 13;
                var2 = var8[var2];
                var2 = var7.bind(var6)(var2);
                var2 = var2.DismissibleContent;
                var2 = var2.GUILD_TAG_AVAILABLE_COACHMARK;
                var7 = var5 === var2;
                var2 = function() {
                    var4 = _closure1_slot3;
                    var3 = undefined;
                    var2 = function* () {
                        var1 = function* anon_0_() {
                            _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                                StartGenerator();
                                ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                                if(var2) { _fun0003_ip = 69; continue _fun0003 }
 7:
                                var4 = _closure1_slot0;
                                var3 = _closure1_slot2;
                                var2 = 14;
                                var2 = var3[var2];
                                var3 = undefined;
                                var6 = var4.bind(var3)(var2);
                                var5 = var6.adoptGuildIdentity;
                                var4 = _closure2_slot0;
                                var2 = true;
                                var2 = var5.bind(var6)(var4, var2);
                                SaveGenerator(address=57);
 55:
                                return var2;
 57:
                                ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                                if(var4) { _fun0003_ip = 66; continue _fun0003 }
 63:
                                return var3;
 66:
                                return var2;
 69:
                                return var1;
                            }
                        };
                        return var1;
                    };
                    var2 = var4.bind(var3)(var2);
                    var _closure4_slot0 = var2;
                    var1 = function() {
                        var1 = undefined;
                        var4 = _closure4_slot0;
                        var3 = var4.apply;
                        var1 = arguments;
                        var2 = var1;
                        var1 = this;
                        var1 = var3.bind(var4)(var1, var2);
                        return var1;
                    };
                    return var1;
                };
                var2 = var2.bind(var6)();
                var _closure3_slot3 = var2;
                var5 = _closure2_slot2;
                var2 = 'changed';
                if(!(var2 !== var5)) { _fun0001_ip = 498; continue _fun0001 }
 179:
                var2 = 'available';
                if(!(var2 !== var5)) { _fun0001_ip = 189; continue _fun0001 }
 187:
                return var1;
 189:
                var2 = function _handleDismiss(arg1) {
                    var3 = arg1;
                    var4 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var1 = 17;
                    var2 = var5[var1];
                    var1 = undefined;
                    var8 = var4.bind(var1)(var2);
                    var7 = var8.markContentAsDismissed;
                    var2 = 13;
                    var2 = var5[var2];
                    var2 = var4.bind(var1)(var2);
                    var2 = var2.DismissibleGuildContent;
                    var12 = var2.ADOPT_CLAN_IDENTITY_NOTICE;
                    var11 = _closure2_slot0;
                    var10 = true;
                    var13 = var8;
                    var9 = var3;
                    var4 = var13[var7](var12, var11, var10, var9, var8);
                    var2 = _closure2_slot5;
                    var2 = var2.bind(var1)(var3);
                    return var1;
                };
                var _closure3_slot5 = var2;
                var2 = {};
                var17 = var2;
                var16 = var1;
                var5 = copyDataProperties(var17, var16);
                var5 = 'visible';
                var2[var5] = var7;
                var8 = _closure1_slot0;
                var5 = _closure1_slot2;
                var11 = 16;
                var9 = var5[var11];
                var9 = var8.bind(var6)(var9);
                var10 = var9.intl;
                var9 = var10.formatToPlainString;
                var5 = var5[var11];
                var5 = var8.bind(var6)(var5);
                var5 = var5.t;
                var8 = var5.VFqnyc;
                var5 = {};
                var14 = _closure2_slot3;
                var15 = var13 == var14;
                var14 = undefined;
                if(var15) { _fun0001_ip = 297; continue _fun0001 }
 288:
                var15 = _closure2_slot3;
                var14 = var15.name;
 297:
                var5['guildName'] = var14;
                var8 = var9.bind(var10)(var8, var5);
                var5 = 'title';
                var2[var5] = var8;
                var10 = _closure1_slot0;
                var5 = _closure1_slot2;
                var8 = var5[var11];
                var8 = var10.bind(var6)(var8);
                var14 = var8.intl;
                var9 = var14.string;
                var8 = var5[var11];
                var8 = var10.bind(var6)(var8);
                var8 = var8.t;
                var8 = var8.DrAXIi;
                var9 = var9.bind(var14)(var8);
                var8 = 'description';
                var2[var8] = var9;
                var8 = var5[var11];
                var8 = var10.bind(var6)(var8);
                var9 = var8.intl;
                var8 = var9.string;
                var5 = var5[var11];
                var5 = var10.bind(var6)(var5);
                var5 = var5.t;
                var5 = var5.jwEaiY;
                var8 = var8.bind(var9)(var5);
                var5 = 'buttonLabel';
                var2[var5] = var8;
                var8 = 'primary';
                var5 = 'buttonVariant';
                var2[var5] = var8;
                var8 = _closure1_slot3;
                var5 = function* () {
                    var1 = function* anon_0_() {
                        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                            StartGenerator();
                            ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                            if(var2) { _fun0004_ip = 58; continue _fun0004 }
 7:
                            var2 = _closure3_slot3;
                            var3 = undefined;
                            var2 = var2.bind(var3)();
                            SaveGenerator(address=24);
 22:
                            return var2;
 24:
                            ResumeGenerator(result_out_reg=1, return_bool_out_reg=4);
                            if(var5) { _fun0004_ip = 55; continue _fun0004 }
 30:
                            var5 = _closure3_slot5;
                            var4 = _closure1_slot8;
                            var4 = var4.TAKE_ACTION;
                            var4 = var5.bind(var3)(var4);
                            return var3;
 55:
                            return var2;
 58:
                            return var1;
                        }
                    };
                    return var1;
                };
                var5 = var8.bind(var6)(var5);
                var _closure3_slot1 = var5;
                var8 = function() {
                    var1 = undefined;
                    var4 = _closure3_slot1;
                    var3 = var4.apply;
                    var1 = arguments;
                    var2 = var1;
                    var1 = this;
                    var1 = var3.bind(var4)(var1, var2);
                    return var1;
                };
                var5 = 'onButtonPress';
                var2[var5] = var8;
                var8 = function onDismiss() {
                    var3 = _closure3_slot5;
                    var1 = _closure1_slot8;
                    var2 = var1.DISMISS;
                    var1 = undefined;
                    var1 = var3.bind(var1)(var2);
                    return var1;
                };
                var5 = 'onDismiss';
                var2[var5] = var8;
                return var2;
 498:
                var2 = function handleDismiss(arg1) {
                    var3 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var1 = 15;
                    var2 = var2[var1];
                    var1 = undefined;
                    var5 = var3.bind(var1)(var2);
                    var4 = var5.dispatch;
                    var3 = {};
                    var2 = 'GUILD_TAG_CHANGED_COACHMARK_SEEN';
                    var3['type'] = var2;
                    var6 = _closure2_slot0;
                    var3['guildId'] = var6;
                    var6 = {};
                    var7 = _closure3_slot0;
                    var7 = var7.tag;
                    var6['tag'] = var7;
                    var3['lastSeenInfo'] = var6;
                    var3 = var4.bind(var5)(var3);
                    var3 = _closure2_slot5;
                    var2 = arg1;
                    var2 = var3.bind(var1)(var2);
                    return var1;
                };
                var _closure3_slot4 = var2;
                var2 = {};
                var17 = var2;
                var16 = var1;
                var5 = copyDataProperties(var17, var16);
                var5 = 'visible';
                var2[var5] = var7;
                var7 = _closure1_slot0;
                var5 = _closure1_slot2;
                var10 = 16;
                var8 = var5[var10];
                var8 = var7.bind(var6)(var8);
                var9 = var8.intl;
                var8 = var9.formatToPlainString;
                var5 = var5[var10];
                var5 = var7.bind(var6)(var5);
                var5 = var5.t;
                var7 = var5.m/Tc3t;
                var5 = {};
                var11 = _closure2_slot3;
                var13 = var13 == var11;
                var11 = undefined;
                if(var13) { _fun0001_ip = 606; continue _fun0001 }
 597:
                var12 = _closure2_slot3;
                var11 = var12.name;
 606:
                var5['guildName'] = var11;
                var7 = var8.bind(var9)(var7, var5);
                var5 = 'title';
                var2[var5] = var7;
                var9 = _closure1_slot0;
                var5 = _closure1_slot2;
                var7 = var5[var10];
                var7 = var9.bind(var6)(var7);
                var11 = var7.intl;
                var8 = var11.string;
                var7 = var5[var10];
                var7 = var9.bind(var6)(var7);
                var7 = var7.t;
                var7 = var7.DrAXIi;
                var8 = var8.bind(var11)(var7);
                var7 = 'description';
                var2[var7] = var8;
                var7 = var5[var10];
                var7 = var9.bind(var6)(var7);
                var8 = var7.intl;
                var7 = var8.string;
                var5 = var5[var10];
                var5 = var9.bind(var6)(var5);
                var5 = var5.t;
                var5 = var5.jwEaiY;
                var7 = var7.bind(var8)(var5);
                var5 = 'buttonLabel';
                var2[var5] = var7;
                var7 = 'primary';
                var5 = 'buttonVariant';
                var2[var5] = var7;
                var5 = _closure1_slot3;
                var4 = function* () {
                    var1 = function* anon_0_() {
                        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                            StartGenerator();
                            ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                            if(var2) { _fun0005_ip = 58; continue _fun0005 }
 7:
                            var2 = _closure3_slot3;
                            var3 = undefined;
                            var2 = var2.bind(var3)();
                            SaveGenerator(address=24);
 22:
                            return var2;
 24:
                            ResumeGenerator(result_out_reg=1, return_bool_out_reg=4);
                            if(var5) { _fun0005_ip = 55; continue _fun0005 }
 30:
                            var5 = _closure3_slot4;
                            var4 = _closure1_slot8;
                            var4 = var4.TAKE_ACTION;
                            var4 = var5.bind(var3)(var4);
                            return var3;
 55:
                            return var2;
 58:
                            return var1;
                        }
                    };
                    return var1;
                };
                var4 = var5.bind(var6)(var4);
                var _closure3_slot2 = var4;
                var5 = function() {
                    var1 = undefined;
                    var4 = _closure3_slot2;
                    var3 = var4.apply;
                    var1 = arguments;
                    var2 = var1;
                    var1 = this;
                    var1 = var3.bind(var4)(var1, var2);
                    return var1;
                };
                var4 = 'onButtonPress';
                var2[var4] = var5;
                var4 = function onDismiss() {
                    var3 = _closure3_slot4;
                    var1 = _closure1_slot8;
                    var2 = var1.DISMISS;
                    var1 = undefined;
                    var1 = var3.bind(var1)(var2);
                    return var1;
                };
                var3 = 'onDismiss';
                var2[var3] = var4;
                return var2;
 807:
                return var1;
            }
        };
        var5 = var6.bind(var7)(var2, var5);
        var2 = 18;
        var2 = var4[var2];
        var4 = var3.bind(var1)(var2);
        var3 = var4.useCoachmark;
        var2 = arg1;
        var2 = var3.bind(var4)(var2, var5);
        return var1;
    };
    var3['useGuildTagCoachmark'] = var2;
    return var1;
})();