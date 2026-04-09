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
    var4 = var5.bind(var1)(var4);
    var4 = var4.STAGE_BOOSTING_SHEET_KEY;
    var _closure1_slot5 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.AnalyticEvents;
    var _closure1_slot6 = var7;
    var7 = var4.BoostedGuildTiers;
    var _closure1_slot7 = var7;
    var7 = var4.GuildFeatures;
    var _closure1_slot8 = var7;
    var7 = var4.MAX_STAGE_VIDEO_USER_LIMIT_TIER2;
    var _closure1_slot9 = var7;
    var4 = var4.MAX_STAGE_VIDEO_USER_LIMIT_UNCAPPED;
    var _closure1_slot10 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.BoostingUpsellAction;
    var _closure1_slot11 = var7;
    var4 = var4.PremiumUpsellTypes;
    var _closure1_slot12 = var4;
    var4 = 6;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.jsx;
    var _closure1_slot13 = var7;
    var7 = var4.Fragment;
    var _closure1_slot14 = var7;
    var4 = var4.jsxs;
    var _closure1_slot15 = var4;
    var4 = 7;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = {};
    var9 = {'paddingTop': 48, 'paddingBottom': 8};
    var4['title'] = var9;
    var9 = {};
    var10 = 16;
    var9['paddingBottom'] = var10;
    var4['body'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot16 = var4;
    var4 = 24;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/stage_channels/native/sheets/StageBoostingActionSheet.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function StageBoostingActionSheet(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arg1;
            var1 = var1.channel;
            var _closure2_slot0 = var1;
            var4 = undefined;
            var _closure2_slot1 = var4;
            var _closure2_slot2 = var4;
            var _closure2_slot3 = var4;
            var _closure2_slot4 = var4;
            var2 = _closure1_slot16;
            var15 = var2.bind(var4)();
            var3 = _closure1_slot0;
            var2 = _closure1_slot2;
            var9 = 8;
            var2 = var2[var9];
            var7 = var3.bind(var4)(var2);
            var6 = var7.useStateFromStores;
            var2 = _closure1_slot3;
            var5 = new Array(1);
            var5[0] = var2;
            var2 = var1.guild_id;
            var3 = new Array(1);
            var3[0] = var2;
            var2 = function() {
                var3 = _closure1_slot3;
                var2 = var3.getGuild;
                var1 = _closure2_slot0;
                var1 = var1.guild_id;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var2 = var6.bind(var7)(var5, var2, var3);
            var3 = null;
            var6 = var3 == var2;
            var5 = undefined;
            if(var6) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var5 = var2.maxStageVideoChannelUsers;
case 2:
            var6 = var3 != var5;
            var8 = 0;
            if(!var6) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var8 = var5;
case 4:
            var5 = var3 != var2;
            if(!var5) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var11 = var2.features;
            var7 = var11.has;
            var6 = _closure1_slot8;
            var6 = var6.COMMUNITY;
            var5 = var7.bind(var11)(var6);
case 6:
            if(var5) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var6 = var3 == var2;
            var7 = undefined;
            if(var6) { _fun0001_ip = 10; continue _fun0001 }
case 11:
            var7 = var2.premiumTier;
case 10:
            var6 = _closure1_slot7;
            var6 = var6.TIER_3;
            var7 = var7 !== var6;
            if(!var7) { _fun0001_ip = 12; continue _fun0001 }
case 13:
            var6 = _closure1_slot9;
            var7 = var8 <= var6;
case 12:
            _fun0001_ip = 14; continue _fun0001;
case 8:
            var6 = _closure1_slot10;
            var7 = var8 < var6;
case 14:
            var8 = _closure1_slot0;
            var6 = _closure1_slot2;
            var6 = var6[var9];
            var13 = var8.bind(var4)(var6);
            var11 = var13.useStateFromStores;
            var6 = _closure1_slot4;
            var9 = new Array(1);
            var9[0] = var6;
            var8 = new Array(1);
            var8[0] = var1;
            var6 = function() {
                var4 = _closure1_slot4;
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
            var6 = var11.bind(var13)(var9, var6, var8);
            _closure2_slot1 = var6;
            if(!var5) { _fun0001_ip = 15; continue _fun0001 }
case 16:
            var5 = var3 == var2;
            var3 = undefined;
            if(var5) { _fun0001_ip = 17; continue _fun0001 }
case 18:
            var3 = var2.premiumTier;
case 17:
            var2 = _closure1_slot7;
            var2 = var2.TIER_3;
            if(!(var3 !== var2)) { _fun0001_ip = 19; continue _fun0001 }
case 15:
            var8 = _closure1_slot0;
            var9 = _closure1_slot2;
            var2 = 10;
            var3 = var9[var2];
            var3 = var8.bind(var4)(var3);
            var5 = var3.intl;
            var3 = var5.string;
            var2 = var9[var2];
            var2 = var8.bind(var4)(var2);
            var2 = var2.t;
            if(var7) { _fun0001_ip = 20; continue _fun0001 }
case 21:
            var8 = var2["7FHbPG"];
            var13 = var3.bind(var5)(var8);
            _fun0001_ip = 22; continue _fun0001;
case 20:
            var2 = var2["8/uDSF"];
            var13 = var3.bind(var5)(var2);
case 22:
            _fun0001_ip = 23; continue _fun0001;
case 19:
            var3 = _closure1_slot0;
            var9 = _closure1_slot2;
            var2 = 10;
            var5 = var9[var2];
            var5 = var3.bind(var4)(var5);
            var8 = var5.intl;
            var5 = var8.string;
            var2 = var9[var2];
            var2 = var3.bind(var4)(var2);
            var3 = var2.t;
            if(var7) { _fun0001_ip = 24; continue _fun0001 }
case 25:
            var2 = var3["7FHbPG"];
            var2 = var5.bind(var8)(var2);
            _fun0001_ip = 26; continue _fun0001;
case 24:
            var3 = var3.tJmOuw;
            var2 = var5.bind(var8)(var3);
case 26:
            var13 = var2;
case 23:
            var14 = function handleClose() {
                var3 = _closure1_slot1;
                var4 = _closure1_slot2;
                var1 = 11;
                var2 = var4[var1];
                var1 = undefined;
                var7 = var3.bind(var1)(var2);
                var5 = var7.hideActionSheet;
                var2 = _closure1_slot5;
                var2 = var5.bind(var7)(var2);
                var2 = 12;
                var2 = var4[var2];
                var5 = var3.bind(var1)(var2);
                var4 = var5.track;
                var2 = _closure1_slot6;
                var3 = var2.BOOSTING_UPSELL_CLICKED;
                var2 = {};
                var8 = _closure2_slot0;
                var8 = var8.guild_id;
                var2['guild_id'] = var8;
                var8 = _closure1_slot12;
                var8 = var8.VIDEO_STAGE_LIMIT;
                var2['type'] = var8;
                var7 = _closure2_slot1;
                var2['is_moderator'] = var7;
                var6 = _closure1_slot11;
                var6 = var6.DISMISS;
                var2['action'] = var6;
                var2 = var4.bind(var5)(var3, var2);
                return var1;
            };
            _closure2_slot2 = var14;
            var2 = _closure1_slot0;
            var8 = _closure1_slot2;
            var3 = 13;
            var5 = var8[var3];
            var11 = var2.bind(var4)(var5);
            var9 = var11.useActualStageSpeakerCount;
            var5 = var1.id;
            var5 = var9.bind(var11)(var5);
            _closure2_slot3 = var5;
            var3 = var8[var3];
            var9 = var2.bind(var4)(var3);
            var5 = var9.useStageParticipantsCount;
            var3 = var1.id;
            var1 = 14;
            var1 = var8[var1];
            var1 = var2.bind(var4)(var1);
            var1 = var1.StageChannelParticipantNamedIndex;
            var1 = var1.AUDIENCE;
            var1 = var5.bind(var9)(var3, var1);
            _closure2_slot4 = var1;
            var16 = _closure1_slot1;
            var1 = 15;
            var1 = var8[var1];
            var3 = var16.bind(var4)(var1);
            var1 = function() {
                var3 = _closure1_slot1;
                var2 = _closure1_slot2;
                var1 = 12;
                var2 = var2[var1];
                var1 = undefined;
                var5 = var3.bind(var1)(var2);
                var4 = var5.track;
                var2 = _closure1_slot6;
                var3 = var2.BOOSTING_UPSELL_VIEWED;
                var2 = {};
                var8 = _closure2_slot0;
                var8 = var8.guild_id;
                var2['guild_id'] = var8;
                var7 = _closure1_slot12;
                var7 = var7.VIDEO_STAGE_LIMIT;
                var2['type'] = var7;
                var7 = _closure2_slot1;
                var2['is_moderator'] = var7;
                var7 = _closure2_slot3;
                var6 = _closure2_slot4;
                var6 = var7 + var6;
                var2['listener_count'] = var6;
                var2 = var4.bind(var5)(var3, var2);
                return var1;
            };
            var1 = var3.bind(var4)(var1);
            var3 = _closure1_slot15;
            var1 = 16;
            var1 = var8[var1];
            var1 = var2.bind(var4)(var1);
            var2 = var1.BottomSheet;
            var1 = {};
            var9 = _closure1_slot13;
            var5 = 17;
            var5 = var8[var5];
            var8 = var16.bind(var4)(var5);
            var5 = {};
            var18 = _closure1_slot2;
            if(var7) { _fun0001_ip = 27; continue _fun0001 }
case 28:
            var11 = 19;
            var11 = var18[var11];
            _fun0001_ip = 29; continue _fun0001;
case 27:
            var17 = 18;
            var11 = var18[var17];
case 29:
            var11 = var16.bind(var4)(var11);
            var5['source'] = var11;
            var8 = var9.bind(var4)(var8, var5);
            var5 = new Array(4);
            var5[0] = var8;
            var11 = _closure1_slot13;
            var9 = _closure1_slot0;
            var8 = _closure1_slot2;
            var16 = 20;
            var8 = var8[var16];
            var8 = var9.bind(var4)(var8);
            var9 = var8.Text;
            var8 = {};
            var17 = 'heading-xl/bold';
            var8['variant'] = var17;
            var17 = var15.title;
            var8['style'] = var17;
            var18 = _closure1_slot0;
            var17 = _closure1_slot2;
            var19 = 10;
            var20 = var17[var19];
            var20 = var18.bind(var4)(var20);
            var22 = var20.intl;
            var21 = var22.string;
            var17 = var17[var19];
            var17 = var18.bind(var4)(var17);
            var20 = var17.t;
            if(var6) { _fun0001_ip = 30; continue _fun0001 }
case 31:
            var17 = var20.pqPQL0;
            var17 = var21.bind(var22)(var17);
            _fun0001_ip = 32; continue _fun0001;
case 30:
            if(var7) { _fun0001_ip = 33; continue _fun0001 }
case 34:
            var18 = var20.XVL8LJ;
            var18 = var21.bind(var22)(var18);
            _fun0001_ip = 35; continue _fun0001;
case 33:
            var20 = var20.T+zF9M;
            var18 = var21.bind(var22)(var20);
case 35:
            var17 = var18;
case 32:
            var8['children'] = var17;
            var8 = var11.bind(var4)(var9, var8);
            var5[1] = var8;
            var11 = _closure1_slot13;
            var9 = _closure1_slot0;
            var8 = _closure1_slot2;
            var8 = var8[var16];
            var8 = var9.bind(var4)(var8);
            var9 = var8.Text;
            var8 = {};
            var16 = 'text-sm/medium';
            var8['variant'] = var16;
            var15 = var15.body;
            var8['style'] = var15;
            var8['children'] = var13;
            var8 = var11.bind(var4)(var9, var8);
            var5[2] = var8;
            if(var7) { _fun0001_ip = 36; continue _fun0001 }
case 37:
            var8 = _closure1_slot13;
            var9 = _closure1_slot0;
            var11 = _closure1_slot2;
            var7 = 23;
            var7 = var11[var7];
            var7 = var9.bind(var4)(var7);
            var7 = var7.Button;
            if(var6) { _fun0001_ip = 38; continue _fun0001 }
case 39:
            var6 = {};
            var15 = _closure1_slot0;
            var9 = _closure1_slot2;
            var11 = var9[var19];
            var11 = var15.bind(var4)(var11);
            var13 = var11.intl;
            var11 = var13.string;
            var9 = var9[var19];
            var9 = var15.bind(var4)(var9);
            var9 = var9.t;
            var9 = var9.NX+WJN;
            var9 = var11.bind(var13)(var9);
            var6['text'] = var9;
            var6['onPress'] = var14;
            _fun0001_ip = 40; continue _fun0001;
case 38:
            var9 = {};
            var11 = 'secondary';
            var9['variant'] = var11;
            var16 = _closure1_slot0;
            var11 = _closure1_slot2;
            var13 = var11[var19];
            var13 = var16.bind(var4)(var13);
            var15 = var13.intl;
            var13 = var15.string;
            var11 = var11[var19];
            var11 = var16.bind(var4)(var11);
            var11 = var11.t;
            var11 = var11.WAI6xu;
            var11 = var13.bind(var15)(var11);
            var9['text'] = var11;
            var9['onPress'] = var14;
            var6 = var9;
case 40:
            var6 = var8.bind(var4)(var7, var6);
            _fun0001_ip = 41; continue _fun0001;
case 36:
            var9 = _closure1_slot15;
            var8 = _closure1_slot14;
            var7 = {};
            var13 = _closure1_slot13;
            var18 = _closure1_slot0;
            var15 = _closure1_slot2;
            var10 = 21;
            var10 = var15[var10];
            var10 = var18.bind(var4)(var10);
            var11 = var10.ShinyButton;
            var10 = {};
            var16 = var15[var19];
            var16 = var18.bind(var4)(var16);
            var20 = var16.intl;
            var17 = var20.string;
            var16 = var15[var19];
            var16 = var18.bind(var4)(var16);
            var16 = var16.t;
            var16 = var16.Uj0md3;
            var16 = var17.bind(var20)(var16);
            var10['text'] = var16;
            var12 = function onPress() {
                var2 = _closure2_slot2;
                var1 = undefined;
                var2 = var2.bind(var1)();
                var3 = _closure1_slot0;
                var4 = _closure1_slot2;
                var2 = 22;
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
                var2 = _closure1_slot6;
                var3 = var2.BOOSTING_UPSELL_CLICKED;
                var2 = {};
                var8 = var8.guild_id;
                var2['guild_id'] = var8;
                var8 = _closure1_slot12;
                var8 = var8.VIDEO_STAGE_LIMIT;
                var2['type'] = var8;
                var7 = _closure2_slot1;
                var2['is_moderator'] = var7;
                var6 = _closure1_slot11;
                var6 = var6.BOOST;
                var2['action'] = var6;
                var2 = var4.bind(var5)(var3, var2);
                return var1;
            };
            var10['onPress'] = var12;
            var11 = var13.bind(var4)(var11, var10);
            var10 = new Array(2);
            var10[0] = var11;
            var11 = 23;
            var11 = var15[var11];
            var11 = var18.bind(var4)(var11);
            var12 = var11.Button;
            var11 = {};
            var16 = 'secondary';
            var11['variant'] = var16;
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
            var7['children'] = var10;
            var6 = var9.bind(var4)(var8, var7);
case 41:
            var5[3] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();