// app/modules/stage_channels/native/sheets/StageBoostingActionSheet.tsx
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
    var4 = 1;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.STAGE_BOOSTING_SHEET_KEY;
    var _closure1_slot6 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.AnalyticEvents;
    var _closure1_slot7 = var7;
    var7 = var4.BoostedGuildTiers;
    var _closure1_slot8 = var7;
    var7 = var4.GuildFeatures;
    var _closure1_slot9 = var7;
    var7 = var4.MAX_STAGE_VIDEO_USER_LIMIT_TIER2;
    var _closure1_slot10 = var7;
    var4 = var4.MAX_STAGE_VIDEO_USER_LIMIT_UNCAPPED;
    var _closure1_slot11 = var4;
    var4 = 6;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.BoostingUpsellAction;
    var _closure1_slot12 = var7;
    var4 = var4.PremiumUpsellTypes;
    var _closure1_slot13 = var4;
    var4 = 7;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.jsx;
    var _closure1_slot14 = var7;
    var4 = var4.jsxs;
    var _closure1_slot15 = var4;
    var4 = 23;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/stage_channels/native/sheets/StageBoostingActionSheet.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function StageBoostingActionSheet(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arg1;
            var2 = var1.channel;
            var _closure2_slot0 = var2;
            var4 = undefined;
            var _closure2_slot1 = var4;
            var _closure2_slot2 = var4;
            var _closure2_slot3 = var4;
            var14 = function handleClose() {
                var3 = _closure1_slot1;
                var4 = _closure1_slot2;
                var1 = 11;
                var2 = var4[var1];
                var1 = undefined;
                var7 = var3.bind(var1)(var2);
                var5 = var7.hideActionSheet;
                var2 = _closure1_slot6;
                var2 = var5.bind(var7)(var2);
                var2 = 12;
                var2 = var4[var2];
                var5 = var3.bind(var1)(var2);
                var4 = var5.track;
                var2 = _closure1_slot7;
                var3 = var2.BOOSTING_UPSELL_CLICKED;
                var2 = {};
                var8 = _closure2_slot0;
                var8 = var8.guild_id;
                var2['guild_id'] = var8;
                var8 = _closure1_slot13;
                var8 = var8.VIDEO_STAGE_LIMIT;
                var2['type'] = var8;
                var7 = _closure2_slot1;
                var2['is_moderator'] = var7;
                var6 = _closure1_slot12;
                var6 = var6.DISMISS;
                var2['action'] = var6;
                var2 = var4.bind(var5)(var3, var2);
                return var1;
            };
            var _closure2_slot4 = var14;
            var5 = _closure1_slot0;
            var1 = _closure1_slot2;
            var10 = 8;
            var3 = var1[var10];
            var11 = var5.bind(var4)(var3);
            var9 = var11.useStateFromStores;
            var3 = _closure1_slot4;
            var8 = new Array(1);
            var8[0] = var3;
            var3 = var2.guild_id;
            var6 = new Array(1);
            var6[0] = var3;
            var3 = function() {
                var3 = _closure1_slot4;
                var2 = var3.getGuild;
                var1 = _closure2_slot0;
                var1 = var1.guild_id;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var3 = var9.bind(var11)(var8, var3, var6);
            var1 = var1[var10];
            var8 = var5.bind(var4)(var1);
            var6 = var8.useStateFromStores;
            var1 = _closure1_slot3;
            var5 = new Array(1);
            var5[0] = var1;
            var1 = function() {
                var1 = _closure1_slot3;
                var1 = var1.useReducedMotion;
                return var1;
            };
            var17 = var6.bind(var8)(var5, var1);
            var5 = null;
            var6 = var5 == var3;
            var1 = undefined;
            if(var6) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var1 = var3.maxStageVideoChannelUsers;
case 2:
            var6 = var5 != var1;
            var9 = 0;
            if(!var6) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var9 = var1;
case 4:
            var8 = var5 != var3;
            if(!var8) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var11 = var3.features;
            var6 = var11.has;
            var1 = _closure1_slot9;
            var1 = var1.COMMUNITY;
            var8 = var6.bind(var11)(var1);
case 6:
            if(var8) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var1 = var5 == var3;
            var6 = undefined;
            if(var1) { _fun0001_ip = 10; continue _fun0001 }
case 11:
            var6 = var3.premiumTier;
case 10:
            var1 = _closure1_slot8;
            var1 = var1.TIER_3;
            var6 = var6 !== var1;
            if(!var6) { _fun0001_ip = 12; continue _fun0001 }
case 13:
            var1 = _closure1_slot10;
            var6 = var9 <= var1;
case 12:
            _fun0001_ip = 14; continue _fun0001;
case 8:
            var1 = _closure1_slot11;
            var6 = var9 < var1;
case 14:
            var9 = _closure1_slot0;
            var1 = _closure1_slot2;
            var1 = var1[var10];
            var12 = var9.bind(var4)(var1);
            var11 = var12.useStateFromStores;
            var1 = _closure1_slot5;
            var10 = new Array(1);
            var10[0] = var1;
            var9 = new Array(1);
            var9[0] = var2;
            var1 = function() {
                var4 = _closure1_slot5;
                var3 = var4.can;
                var5 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 9;
                var2 = var2[var1];
                var1 = undefined;
                var1 = var5.bind(var1)(var2);
                var2 = var1.MODERATE_STAGE_CHANNEL_PERMISSIONS;
                var1 = _closure2_slot0;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            };
            var1 = var11.bind(var12)(var10, var1, var9);
            _closure2_slot1 = var1;
            if(!var8) { _fun0001_ip = 15; continue _fun0001 }
case 16:
            var8 = var5 == var3;
            var5 = undefined;
            if(var8) { _fun0001_ip = 17; continue _fun0001 }
case 18:
            var5 = var3.premiumTier;
case 17:
            var3 = _closure1_slot8;
            var3 = var3.TIER_3;
            if(!(var5 !== var3)) { _fun0001_ip = 19; continue _fun0001 }
case 15:
            var8 = _closure1_slot0;
            var10 = _closure1_slot2;
            var3 = 10;
            var5 = var10[var3];
            var5 = var8.bind(var4)(var5);
            var9 = var5.intl;
            var5 = var9.string;
            var3 = var10[var3];
            var3 = var8.bind(var4)(var3);
            var3 = var3.t;
            if(var6) { _fun0001_ip = 20; continue _fun0001 }
case 21:
            var8 = var3["7FHbPG"];
            var8 = var5.bind(var9)(var8);
            _fun0001_ip = 22; continue _fun0001;
case 20:
            var3 = var3["8/uDSF"];
            var8 = var5.bind(var9)(var3);
case 22:
            _fun0001_ip = 23; continue _fun0001;
case 19:
            var5 = _closure1_slot0;
            var11 = _closure1_slot2;
            var3 = 10;
            var9 = var11[var3];
            var9 = var5.bind(var4)(var9);
            var10 = var9.intl;
            var9 = var10.string;
            var3 = var11[var3];
            var3 = var5.bind(var4)(var3);
            var5 = var3.t;
            if(var6) { _fun0001_ip = 24; continue _fun0001 }
case 25:
            var3 = var5["7FHbPG"];
            var3 = var9.bind(var10)(var3);
            _fun0001_ip = 26; continue _fun0001;
case 24:
            var5 = var5.tJmOuw;
            var3 = var9.bind(var10)(var5);
case 26:
            var8 = var3;
case 23:
            var5 = _closure1_slot0;
            var3 = _closure1_slot2;
            var19 = 10;
            var9 = var3[var19];
            var9 = var5.bind(var4)(var9);
            var11 = var9.intl;
            var10 = var11.string;
            var3 = var3[var19];
            var3 = var5.bind(var4)(var3);
            var5 = var3.t;
            if(var1) { _fun0001_ip = 27; continue _fun0001 }
case 28:
            var3 = var5.pqPQL0;
            var9 = var10.bind(var11)(var3);
            _fun0001_ip = 29; continue _fun0001;
case 27:
            if(var6) { _fun0001_ip = 30; continue _fun0001 }
case 31:
            var3 = var5.XVL8LJ;
            var3 = var10.bind(var11)(var3);
            _fun0001_ip = 32; continue _fun0001;
case 30:
            var5 = var5.T+zF9M;
            var3 = var10.bind(var11)(var5);
case 32:
            var9 = var3;
case 29:
            var12 = _closure1_slot0;
            var5 = _closure1_slot2;
            var3 = 13;
            var10 = var5[var3];
            var13 = var12.bind(var4)(var10);
            var11 = var13.useActualStageSpeakerCount;
            var10 = var2.id;
            var10 = var11.bind(var13)(var10);
            _closure2_slot2 = var10;
            var3 = var5[var3];
            var11 = var12.bind(var4)(var3);
            var10 = var11.useStageParticipantsCount;
            var3 = var2.id;
            var2 = 14;
            var2 = var5[var2];
            var2 = var12.bind(var4)(var2);
            var2 = var2.StageChannelParticipantNamedIndex;
            var2 = var2.AUDIENCE;
            var2 = var10.bind(var11)(var3, var2);
            _closure2_slot3 = var2;
            var3 = _closure1_slot1;
            var2 = 15;
            var2 = var5[var2];
            var3 = var3.bind(var4)(var2);
            var2 = function() {
                var3 = _closure1_slot1;
                var2 = _closure1_slot2;
                var1 = 12;
                var2 = var2[var1];
                var1 = undefined;
                var5 = var3.bind(var1)(var2);
                var4 = var5.track;
                var2 = _closure1_slot7;
                var3 = var2.BOOSTING_UPSELL_VIEWED;
                var2 = {};
                var8 = _closure2_slot0;
                var8 = var8.guild_id;
                var2['guild_id'] = var8;
                var7 = _closure1_slot13;
                var7 = var7.VIDEO_STAGE_LIMIT;
                var2['type'] = var7;
                var7 = _closure2_slot1;
                var2['is_moderator'] = var7;
                var7 = _closure2_slot2;
                var6 = _closure2_slot3;
                var6 = var7 + var6;
                var2['listener_count'] = var6;
                var2 = var4.bind(var5)(var3, var2);
                return var1;
            };
            var2 = var3.bind(var4)(var2);
            if(var6) { _fun0001_ip = 33; continue _fun0001 }
case 34:
            var3 = _closure1_slot14;
            var5 = _closure1_slot0;
            var10 = _closure1_slot2;
            var2 = 17;
            var2 = var10[var2];
            var2 = var5.bind(var4)(var2);
            var2 = var2.Button;
            if(var1) { _fun0001_ip = 35; continue _fun0001 }
case 36:
            var1 = {'variant': 'primary', 'size': 'lg'};
            var12 = _closure1_slot0;
            var5 = _closure1_slot2;
            var10 = var5[var19];
            var10 = var12.bind(var4)(var10);
            var11 = var10.intl;
            var10 = var11.string;
            var5 = var5[var19];
            var5 = var12.bind(var4)(var5);
            var5 = var5.t;
            var5 = var5.NX+WJN;
            var5 = var10.bind(var11)(var5);
            var1['text'] = var5;
            var1['onPress'] = var14;
            _fun0001_ip = 37; continue _fun0001;
case 35:
            var5 = {'variant': 'secondary', 'size': 'lg'};
            var13 = _closure1_slot0;
            var10 = _closure1_slot2;
            var11 = var10[var19];
            var11 = var13.bind(var4)(var11);
            var12 = var11.intl;
            var11 = var12.string;
            var10 = var10[var19];
            var10 = var13.bind(var4)(var10);
            var10 = var10.t;
            var10 = var10.WAI6xu;
            var10 = var11.bind(var12)(var10);
            var5['text'] = var10;
            var5['onPress'] = var14;
            var1 = var5;
case 37:
            var5 = var3.bind(var4)(var2, var1);
            _fun0001_ip = 38; continue _fun0001;
case 33:
            var3 = _closure1_slot15;
            var18 = _closure1_slot0;
            var15 = _closure1_slot2;
            var1 = 16;
            var1 = var15[var1];
            var1 = var18.bind(var4)(var1);
            var2 = var1.ButtonGroup;
            var1 = {};
            var10 = 'lg';
            var1['size'] = var10;
            var13 = _closure1_slot14;
            var11 = 17;
            var10 = var15[var11];
            var10 = var18.bind(var4)(var10);
            var12 = var10.Button;
            var10 = {'variant': 'experimental_premium-primary', 'size': 'lg'};
            var17 = !var17;
            var10['shiny'] = var17;
            var17 = var15[var19];
            var17 = var18.bind(var4)(var17);
            var21 = var17.intl;
            var20 = var21.string;
            var17 = var15[var19];
            var17 = var18.bind(var4)(var17);
            var17 = var17.t;
            var17 = var17.Uj0md3;
            var17 = var20.bind(var21)(var17);
            var10['text'] = var17;
            var16 = function onPress() {
                var2 = _closure2_slot4;
                var1 = undefined;
                var2 = var2.bind(var1)();
                var3 = _closure1_slot0;
                var4 = _closure1_slot2;
                var2 = 18;
                var2 = var4[var2];
                var5 = var3.bind(var1)(var2);
                var3 = var5.openApplyBoostModal;
                var8 = _closure2_slot0;
                var2 = var8.guild_id;
                var2 = var3.bind(var5)(var2);
                var3 = _closure1_slot1;
                var2 = 12;
                var2 = var4[var2];
                var5 = var3.bind(var1)(var2);
                var4 = var5.track;
                var2 = _closure1_slot7;
                var3 = var2.BOOSTING_UPSELL_CLICKED;
                var2 = {};
                var8 = var8.guild_id;
                var2['guild_id'] = var8;
                var8 = _closure1_slot13;
                var8 = var8.VIDEO_STAGE_LIMIT;
                var2['type'] = var8;
                var7 = _closure2_slot1;
                var2['is_moderator'] = var7;
                var6 = _closure1_slot12;
                var6 = var6.BOOST;
                var2['action'] = var6;
                var2 = var4.bind(var5)(var3, var2);
                return var1;
            };
            var10['onPress'] = var16;
            var12 = var13.bind(var4)(var12, var10);
            var10 = new Array(2);
            var10[0] = var12;
            var11 = var15[var11];
            var11 = var18.bind(var4)(var11);
            var12 = var11.Button;
            var11 = {'variant': 'secondary', 'size': 'lg'};
            var16 = var15[var19];
            var16 = var18.bind(var4)(var16);
            var17 = var16.intl;
            var16 = var17.string;
            var15 = var15[var19];
            var15 = var18.bind(var4)(var15);
            var15 = var15.t;
            var15 = var15.f3Pet9;
            var15 = var16.bind(var17)(var15);
            var11['text'] = var15;
            var11['onPress'] = var14;
            var11 = var13.bind(var4)(var12, var11);
            var10[1] = var11;
            var1['children'] = var10;
            var5 = var3.bind(var4)(var2, var1);
case 38:
            var3 = _closure1_slot14;
            var2 = _closure1_slot0;
            var10 = _closure1_slot2;
            var1 = 19;
            var1 = var10[var1];
            var1 = var2.bind(var4)(var1);
            var2 = var1.PromoSheet;
            var1 = {};
            var1['title'] = var9;
            var1['description'] = var8;
            var9 = _closure1_slot14;
            if(var6) { _fun0001_ip = 39; continue _fun0001 }
case 40:
            var11 = _closure1_slot1;
            var12 = _closure1_slot2;
            var6 = 21;
            var6 = var12[var6];
            var8 = var11.bind(var4)(var6);
            var6 = {};
            var10 = 22;
            var10 = var12[var10];
            var10 = var11.bind(var4)(var10);
            var6['source'] = var10;
            var6 = var9.bind(var4)(var8, var6);
            _fun0001_ip = 41; continue _fun0001;
case 39:
            var8 = _closure1_slot0;
            var10 = _closure1_slot2;
            var7 = 20;
            var7 = var10[var7];
            var7 = var8.bind(var4)(var7);
            var8 = var7.HoldingGemSpotIllustration;
            var7 = {};
            var10 = false;
            var7['accessible'] = var10;
            var6 = var9.bind(var4)(var8, var7);
case 41:
            var1['illustration'] = var6;
            var1['actions'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();