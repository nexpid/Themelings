// app/modules/stage_channels/native/sheets/StageBoostingActionSheet.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var11 = native3;
    var3 = native6;
    var6 = native7;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var11;
    var _closure1_slot2 = var6;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var4);
    var1 = 0;
    var7 = var6[var1];
    var4 = native4;
    var1 = undefined;
    var4 = var4.bind(var1)(var7);
    var4 = 1;
    var4 = var6[var4];
    var4 = var11.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var11.bind(var1)(var4);
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
    var12 = var4.Fonts;
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
    var13 = 16;
    var14 = 'center';
    var9 = {'paddingLeft': 16, 'paddingRight': 16, 'paddingTop': 72, 'display': 'flex', 'flexDirection': 'column', 'alignItems': 'center'};
    var4['container'] = var9;
    var10 = 8;
    var9 = {'paddingTop': 48, 'paddingBottom': 8};
    var4['title'] = var9;
    var9 = {};
    var9['paddingBottom'] = var13;
    var4['body'] = var9;
    var9 = {'alignItems': 'center', 'paddingBottom': 24};
    var4['header'] = var9;
    var9 = {'marginTop': 16, 'marginBottom': 8};
    var4['headerTitle'] = var9;
    var9 = {};
    var9['textAlign'] = var14;
    var4['headerSubtitle'] = var9;
    var9 = {'padding': 12, 'width': '100%'};
    var14 = var6[var10];
    var14 = var11.bind(var1)(var14);
    var14 = var14.radii;
    var14 = var14.xs;
    var9['borderRadius'] = var14;
    var14 = var6[var10];
    var14 = var11.bind(var1)(var14);
    var14 = var14.colors;
    var14 = var14.BACKGROUND_TERTIARY;
    var9['backgroundColor'] = var14;
    var4['textInput'] = var9;
    var9 = {};
    var9['marginTop'] = var13;
    var4['startButton'] = var9;
    var9 = {'paddingTop': 8, 'textAlign': 'center'};
    var4['buttonSubtitle'] = var9;
    var9 = {'paddingTop': 8, 'fontSize': 12};
    var12 = var12.PRIMARY_MEDIUM;
    var9['fontFamily'] = var12;
    var10 = var6[var10];
    var10 = var11.bind(var1)(var10);
    var10 = var10.unsafe_rawColors;
    var10 = var10.RED_400;
    var9['color'] = var10;
    var4['error'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot16 = var4;
    var4 = 25;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/stage_channels/native/sheets/StageBoostingActionSheet.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function StageBoostingActionSheet(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var1 = arg1;
            var1 = var1.channel;
            var _closure2_slot0 = var1;
            var4 = undefined;
            var _closure2_slot1 = var4;
            var _closure2_slot2 = var4;
            var _closure2_slot3 = var4;
            var _closure2_slot4 = var4;
            var2 = _closure1_slot16;
            var12 = var2.bind(var4)();
            var3 = _closure1_slot0;
            var2 = _closure1_slot2;
            var9 = 9;
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
            if(var6) { _fun0001_ip = 122; continue _fun0001 }
 116:
            var5 = var2.maxStageVideoChannelUsers;
 122:
            var6 = var3 != var5;
            var8 = 0;
            if(!var6) { _fun0001_ip = 134; continue _fun0001 }
 131:
            var8 = var5;
 134:
            var5 = var3 != var2;
            if(!var5) { _fun0001_ip = 167; continue _fun0001 }
 141:
            var10 = var2.features;
            var7 = var10.has;
            var6 = _closure1_slot8;
            var6 = var6.COMMUNITY;
            var5 = var7.bind(var10)(var6);
 167:
            if(var5) { _fun0001_ip = 212; continue _fun0001 }
 170:
            var6 = var3 == var2;
            var7 = undefined;
            if(var6) { _fun0001_ip = 185; continue _fun0001 }
 179:
            var7 = var2.premiumTier;
 185:
            var6 = _closure1_slot7;
            var6 = var6.TIER_3;
            var7 = var7 !== var6;
            if(!var7) { _fun0001_ip = 210; continue _fun0001 }
 202:
            var6 = _closure1_slot9;
            var7 = var8 <= var6;
 210:
            _fun0001_ip = 220; continue _fun0001;
 212:
            var6 = _closure1_slot10;
            var7 = var8 < var6;
 220:
            var8 = _closure1_slot0;
            var6 = _closure1_slot2;
            var6 = var6[var9];
            var11 = var8.bind(var4)(var6);
            var10 = var11.useStateFromStores;
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
                var1 = 10;
                var2 = var2[var1];
                var1 = undefined;
                var1 = var5.bind(var1)(var2);
                var2 = var1.MODERATE_STAGE_CHANNEL_PERMISSIONS;
                var1 = _closure2_slot0;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            };
            var6 = var10.bind(var11)(var9, var6, var8);
            _closure2_slot1 = var6;
            if(!var5) { _fun0001_ip = 310; continue _fun0001 }
 281:
            var5 = var3 == var2;
            var3 = undefined;
            if(var5) { _fun0001_ip = 296; continue _fun0001 }
 290:
            var3 = var2.premiumTier;
 296:
            var2 = _closure1_slot7;
            var2 = var2.TIER_3;
            if(!(var3 !== var2)) { _fun0001_ip = 385; continue _fun0001 }
 310:
            var8 = _closure1_slot0;
            var9 = _closure1_slot2;
            var2 = 11;
            var3 = var9[var2];
            var3 = var8.bind(var4)(var3);
            var5 = var3.intl;
            var3 = var5.string;
            var2 = var9[var2];
            var2 = var8.bind(var4)(var2);
            var2 = var2.t;
            if(var7) { _fun0001_ip = 370; continue _fun0001 }
 357:
            var8 = var2.7FHbPD;
            var11 = var3.bind(var5)(var8);
            _fun0001_ip = 383; continue _fun0001;
 370:
            var2 = var2.8/uDSE;
            var11 = var3.bind(var5)(var2);
 383:
            _fun0001_ip = 461; continue _fun0001;
 385:
            var3 = _closure1_slot0;
            var9 = _closure1_slot2;
            var2 = 11;
            var5 = var9[var2];
            var5 = var3.bind(var4)(var5);
            var8 = var5.intl;
            var5 = var8.string;
            var2 = var9[var2];
            var2 = var3.bind(var4)(var2);
            var3 = var2.t;
            if(var7) { _fun0001_ip = 445; continue _fun0001 }
 432:
            var2 = var3.7FHbPD;
            var2 = var5.bind(var8)(var2);
            _fun0001_ip = 458; continue _fun0001;
 445:
            var3 = var3.tJmOu7;
            var2 = var5.bind(var8)(var3);
 458:
            var11 = var2;
 461:
            var14 = function handleClose() {
                var3 = _closure1_slot1;
                var4 = _closure1_slot2;
                var1 = 12;
                var2 = var4[var1];
                var1 = undefined;
                var7 = var3.bind(var1)(var2);
                var5 = var7.hideActionSheet;
                var2 = _closure1_slot5;
                var2 = var5.bind(var7)(var2);
                var2 = 13;
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
            var3 = 14;
            var5 = var8[var3];
            var10 = var2.bind(var4)(var5);
            var9 = var10.useActualStageSpeakerCount;
            var5 = var1.id;
            var5 = var9.bind(var10)(var5);
            _closure2_slot3 = var5;
            var3 = var8[var3];
            var9 = var2.bind(var4)(var3);
            var5 = var9.useStageParticipantsCount;
            var3 = var1.id;
            var1 = 15;
            var1 = var8[var1];
            var1 = var2.bind(var4)(var1);
            var1 = var1.StageChannelParticipantNamedIndex;
            var1 = var1.AUDIENCE;
            var1 = var5.bind(var9)(var3, var1);
            _closure2_slot4 = var1;
            var13 = _closure1_slot1;
            var1 = 16;
            var1 = var8[var1];
            var3 = var13.bind(var4)(var1);
            var1 = function() {
                var3 = _closure1_slot1;
                var2 = _closure1_slot2;
                var1 = 13;
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
            var1 = 17;
            var1 = var8[var1];
            var1 = var2.bind(var4)(var1);
            var2 = var1.BottomSheet;
            var1 = {};
            var9 = _closure1_slot13;
            var5 = 18;
            var5 = var8[var5];
            var8 = var13.bind(var4)(var5);
            var5 = {};
            var18 = _closure1_slot2;
            if(var7) { _fun0001_ip = 648; continue _fun0001 }
 639:
            var10 = 20;
            var10 = var18[var10];
            _fun0001_ip = 655; continue _fun0001;
 648:
            var15 = 19;
            var10 = var18[var15];
 655:
            var10 = var13.bind(var4)(var10);
            var5['source'] = var10;
            var8 = var9.bind(var4)(var8, var5);
            var5 = new Array(4);
            var5[0] = var8;
            var10 = _closure1_slot13;
            var9 = _closure1_slot0;
            var8 = _closure1_slot2;
            var13 = 21;
            var8 = var8[var13];
            var8 = var9.bind(var4)(var8);
            var9 = var8.Text;
            var8 = {};
            var15 = 'heading-xl/bold';
            var8['variant'] = var15;
            var15 = var12.title;
            var8['style'] = var15;
            var18 = _closure1_slot0;
            var15 = _closure1_slot2;
            var19 = 11;
            var20 = var15[var19];
            var20 = var18.bind(var4)(var20);
            var22 = var20.intl;
            var21 = var22.string;
            var15 = var15[var19];
            var15 = var18.bind(var4)(var15);
            var20 = var15.t;
            if(var6) { _fun0001_ip = 790; continue _fun0001 }
 775:
            var15 = var20.pqPQLy;
            var15 = var21.bind(var22)(var15);
            _fun0001_ip = 824; continue _fun0001;
 790:
            if(var7) { _fun0001_ip = 808; continue _fun0001 }
 793:
            var18 = var20.XVL8LC;
            var18 = var21.bind(var22)(var18);
            _fun0001_ip = 821; continue _fun0001;
 808:
            var20 = var20.T+zF9P;
            var18 = var21.bind(var22)(var20);
 821:
            var15 = var18;
 824:
            var8['children'] = var15;
            var8 = var10.bind(var4)(var9, var8);
            var5[1] = var8;
            var10 = _closure1_slot13;
            var9 = _closure1_slot0;
            var8 = _closure1_slot2;
            var8 = var8[var13];
            var8 = var9.bind(var4)(var8);
            var9 = var8.Text;
            var8 = {};
            var13 = 'text-sm/medium';
            var8['variant'] = var13;
            var12 = var12.body;
            var8['style'] = var12;
            var8['children'] = var11;
            var8 = var10.bind(var4)(var9, var8);
            var5[2] = var8;
            if(var7) { _fun0001_ip = 1095; continue _fun0001 }
 903:
            var8 = _closure1_slot13;
            var9 = _closure1_slot1;
            var7 = _closure1_slot2;
            var11 = 24;
            var7 = var7[var11];
            var7 = var9.bind(var4)(var7);
            if(var6) { _fun0001_ip = 994; continue _fun0001 }
 930:
            var6 = {};
            var13 = _closure1_slot0;
            var9 = _closure1_slot2;
            var10 = var9[var19];
            var10 = var13.bind(var4)(var10);
            var12 = var10.intl;
            var10 = var12.string;
            var9 = var9[var19];
            var9 = var13.bind(var4)(var9);
            var9 = var9.t;
            var9 = var9.NX+WJC;
            var9 = var10.bind(var12)(var9);
            var6['text'] = var9;
            var6['onPress'] = var14;
            _fun0001_ip = 1084; continue _fun0001;
 994:
            var9 = {};
            var13 = _closure1_slot0;
            var10 = _closure1_slot2;
            var11 = var10[var11];
            var11 = var13.bind(var4)(var11);
            var11 = var11.ButtonColors;
            var11 = var11.TRANSPARENT;
            var9['color'] = var11;
            var11 = var10[var19];
            var11 = var13.bind(var4)(var11);
            var12 = var11.intl;
            var11 = var12.string;
            var10 = var10[var19];
            var10 = var13.bind(var4)(var10);
            var10 = var10.t;
            var10 = var10.WAI6xs;
            var10 = var11.bind(var12)(var10);
            var9['text'] = var10;
            var9['onPress'] = var14;
            var6 = var9;
 1084:
            var6 = var8.bind(var4)(var7, var6);
            _fun0001_ip = 1317; continue _fun0001;
 1095:
            var9 = _closure1_slot15;
            var8 = _closure1_slot14;
            var7 = {};
            var13 = _closure1_slot13;
            var12 = _closure1_slot1;
            var15 = _closure1_slot2;
            var10 = 22;
            var10 = var15[var10];
            var11 = var12.bind(var4)(var10);
            var10 = {};
            var18 = _closure1_slot0;
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
                var2 = _closure2_slot2;
                var1 = undefined;
                var2 = var2.bind(var1)();
                var3 = _closure1_slot0;
                var4 = _closure1_slot2;
                var2 = 23;
                var2 = var4[var2];
                var5 = var3.bind(var1)(var2);
                var3 = var5.openApplyBoostModal;
                var8 = _closure2_slot0;
                var2 = var8.guild_id;
                var2 = var3.bind(var5)(var2);
                var3 = _closure1_slot1;
                var2 = 13;
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
            var10['onPress'] = var16;
            var11 = var13.bind(var4)(var11, var10);
            var10 = new Array(2);
            var10[0] = var11;
            var16 = 24;
            var11 = var15[var16];
            var12 = var12.bind(var4)(var11);
            var11 = {};
            var16 = var15[var16];
            var16 = var18.bind(var4)(var16);
            var16 = var16.ButtonColors;
            var16 = var16.TRANSPARENT;
            var11['color'] = var16;
            var16 = var15[var19];
            var16 = var18.bind(var4)(var16);
            var17 = var16.intl;
            var16 = var17.string;
            var15 = var15[var19];
            var15 = var18.bind(var4)(var15);
            var15 = var15.t;
            var15 = var15.f3Pet7;
            var15 = var16.bind(var17)(var15);
            var11['text'] = var15;
            var11['onPress'] = var14;
            var11 = var13.bind(var4)(var12, var11);
            var10[1] = var11;
            var7['children'] = var10;
            var6 = var9.bind(var4)(var8, var7);
 1317:
            var5[3] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();