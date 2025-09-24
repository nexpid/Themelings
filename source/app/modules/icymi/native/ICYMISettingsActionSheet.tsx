// app/modules/icymi/native/ICYMISettingsActionSheet.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var11 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
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
    var4 = var6[var1];
    var1 = undefined;
    var4 = var11.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 1;
    var7 = var6[var4];
    var4 = metroImportAll;
    var4 = var4.bind(var1)(var7);
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.View;
    var _closure1_slot4 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var11.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var11.bind(var1)(var4);
    var _closure1_slot6 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var11.bind(var1)(var4);
    var _closure1_slot7 = var4;
    var4 = 6;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.AnalyticsObjectTypes;
    var _closure1_slot8 = var7;
    var4 = var4.AnalyticsObjects;
    var _closure1_slot9 = var4;
    var4 = 7;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.jsx;
    var _closure1_slot10 = var7;
    var7 = var4.Fragment;
    var _closure1_slot11 = var7;
    var4 = var4.jsxs;
    var _closure1_slot12 = var4;
    var4 = 8;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = {};
    var9 = {};
    var10 = 9;
    var10 = var6[var10];
    var10 = var11.bind(var1)(var10);
    var10 = var10.spacing;
    var10 = var10.PX_16;
    var9['bottomPadding'] = var10;
    var10 = '100%';
    var9['width'] = var10;
    var4['padding'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot13 = var4;
    var4 = 29;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/icymi/native/ICYMISettingsActionSheet.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function ICYMISettingsActionSheet() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var16 = _closure1_slot0;
            var8 = _closure1_slot2;
            var1 = 10;
            var1 = var8[var1];
            var4 = undefined;
            var5 = var16.bind(var4)(var1);
            var3 = var5.useStateFromStoresObject;
            var1 = _closure1_slot6;
            var2 = new Array(1);
            var2[0] = var1;
            var1 = function() {
                var2 = _closure1_slot6;
                var1 = var2.getState;
                var1 = var1.bind(var2)();
                return var1;
            };
            var19 = var3.bind(var5)(var2, var1);
            var _closure2_slot0 = var19;
            var1 = _closure1_slot13;
            var9 = var1.bind(var4)();
            var1 = 11;
            var2 = var8[var1];
            var2 = var16.bind(var4)(var2);
            var5 = var2.ICYMINegativeExperiment;
            var3 = var5.useExperiment;
            var2 = {};
            var7 = 'settings action sheet';
            var2['location'] = var7;
            var2 = var3.bind(var5)(var2);
            var11 = var2.enabled;
            var1 = var8[var1];
            var5 = var16.bind(var4)(var1);
            var3 = var5.useICYMINewConversationSummaryExperiment;
            var2 = 'processRawItems';
            var1 = false;
            var1 = var3.bind(var5)(var2, var1);
            var15 = var1.contentGenerationEnabled;
            var1 = 12;
            var1 = var8[var1];
            var1 = var16.bind(var4)(var1);
            var3 = var1.ICYMIScreenRecordingExperiment;
            var2 = var3.useConfig;
            var1 = {};
            var5 = 'ICYMI';
            var1['location'] = var5;
            var1 = var2.bind(var3)(var1);
            var14 = var1.enabled;
            var3 = _closure1_slot12;
            var1 = 13;
            var1 = var8[var1];
            var1 = var16.bind(var4)(var1);
            var2 = var1.ActionSheet;
            var1 = {'showGradient': true, 'startExpanded': true};
            var5 = 14;
            var5 = var8[var5];
            var5 = var16.bind(var4)(var5);
            var7 = var5.TableRowGroup;
            var5 = {};
            var18 = 15;
            var10 = var8[var18];
            var10 = var16.bind(var4)(var10);
            var12 = var10.intl;
            var10 = var12.string;
            var8 = var8[var18];
            var8 = var16.bind(var4)(var8);
            var8 = var8.t;
            var8 = var8.7Si8Ul;
            var8 = var10.bind(var12)(var8);
            var5['title'] = var8;
            var8 = null;
            var12 = null;
            if(!var11) { _fun0001_ip = 431; continue _fun0001 }
 311:
            var17 = _closure1_slot10;
            var23 = _closure1_slot0;
            var20 = _closure1_slot2;
            var10 = 16;
            var10 = var20[var10];
            var10 = var23.bind(var4)(var10);
            var16 = var10.TableSwitchRow;
            var10 = {};
            var21 = var20[var18];
            var21 = var23.bind(var4)(var21);
            var22 = var21.intl;
            var21 = var22.string;
            var20 = var20[var18];
            var20 = var23.bind(var4)(var20);
            var20 = var20.t;
            var20 = var20.3wDyfX;
            var20 = var21.bind(var22)(var20);
            var10['label'] = var20;
            var21 = var19.filterStaffContent;
            var20 = var8 != var21;
            if(!var20) { _fun0001_ip = 409; continue _fun0001 }
 406:
            var20 = var21;
 409:
            var10['value'] = var20;
            var20 = function onValueChange() {
                var3 = _closure1_slot1;
                var4 = _closure1_slot2;
                var2 = 17;
                var5 = var4[var2];
                var1 = undefined;
                var7 = var3.bind(var1)(var5);
                var6 = var7.setFilters;
                var5 = {};
                var8 = _closure2_slot0;
                var11 = var5;
                var10 = var8;
                var9 = copyDataProperties(var11, var10);
                var8 = var8.filterStaffContent;
                var9 = !var8;
                var8 = 'filterStaffContent';
                var5[var8] = var9;
                var5 = var6.bind(var7)(var5);
                var2 = var4[var2];
                var3 = var3.bind(var1)(var2);
                var2 = var3.fetchDehydrated;
                var2 = var2.bind(var3)();
                return var1;
            };
            var10['onValueChange'] = var20;
            var12 = var17.bind(var4)(var16, var10);
 431:
            var10 = new Array(5);
            var10[0] = var12;
            var12 = null;
            if(!var15) { _fun0001_ip = 529; continue _fun0001 }
 444:
            var12 = null;
            if(!var11) { _fun0001_ip = 529; continue _fun0001 }
 449:
            var17 = _closure1_slot10;
            var16 = _closure1_slot0;
            var20 = _closure1_slot2;
            var15 = 16;
            var15 = var20[var15];
            var15 = var16.bind(var4)(var15);
            var16 = var15.TableSwitchRow;
            var15 = {};
            var20 = 'Only generated content by recency';
            var15['label'] = var20;
            var20 = var19.onlyShowRecentGeneratedCandidates;
            var19 = var8 != var20;
            if(!var19) { _fun0001_ip = 507; continue _fun0001 }
 504:
            var19 = var20;
 507:
            var15['value'] = var19;
            var19 = function onValueChange() {
                var3 = _closure1_slot1;
                var4 = _closure1_slot2;
                var2 = 17;
                var5 = var4[var2];
                var1 = undefined;
                var7 = var3.bind(var1)(var5);
                var6 = var7.setFilters;
                var5 = {};
                var8 = _closure2_slot0;
                var11 = var5;
                var10 = var8;
                var9 = copyDataProperties(var11, var10);
                var8 = var8.onlyShowRecentGeneratedCandidates;
                var9 = !var8;
                var8 = 'onlyShowRecentGeneratedCandidates';
                var5[var8] = var9;
                var5 = var6.bind(var7)(var5);
                var2 = var4[var2];
                var3 = var3.bind(var1)(var2);
                var2 = var3.fetchDehydrated;
                var2 = var2.bind(var3)();
                return var1;
            };
            var15['onValueChange'] = var19;
            var12 = var17.bind(var4)(var16, var15);
 529:
            var10[1] = var12;
            var12 = null;
            if(!var14) { _fun0001_ip = 597; continue _fun0001 }
 538:
            var16 = _closure1_slot10;
            var15 = _closure1_slot0;
            var17 = _closure1_slot2;
            var14 = 18;
            var14 = var17[var14];
            var14 = var15.bind(var4)(var14);
            var15 = var14.TableRow;
            var14 = {};
            var17 = 'Reset screen recording history';
            var14['label'] = var17;
            var17 = function onPress() {
                var3 = _closure1_slot1;
                var2 = _closure1_slot2;
                var1 = 17;
                var2 = var2[var1];
                var1 = undefined;
                var4 = var3.bind(var1)(var2);
                var3 = var4.takeSurvey;
                var2 = 0;
                var2 = var3.bind(var4)(var2);
                return var1;
            };
            var14['onPress'] = var17;
            var12 = var16.bind(var4)(var15, var14);
 597:
            var10[2] = var12;
            var8 = null;
            if(!var11) { _fun0001_ip = 753; continue _fun0001 }
 609:
            var14 = _closure1_slot12;
            var12 = _closure1_slot11;
            var11 = {};
            var19 = _closure1_slot10;
            var17 = _closure1_slot0;
            var20 = _closure1_slot2;
            var16 = 18;
            var15 = var20[var16];
            var15 = var17.bind(var4)(var15);
            var21 = var15.TableRow;
            var15 = {};
            var22 = 'Clear read states';
            var15['label'] = var22;
            var22 = function onPress() {
                var3 = _closure1_slot7;
                var2 = var3.getDehydratedItems;
                var4 = var2.bind(var3)();
                var3 = var4.forEach;
                var2 = function(arg1) {
                    _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                        var2 = arg1;
                        var5 = var2.type;
                        var6 = _closure1_slot0;
                        var4 = _closure1_slot2;
                        var1 = 19;
                        var4 = var4[var1];
                        var1 = undefined;
                        var4 = var6.bind(var1)(var4);
                        var4 = var4.ICYMIItemTypes;
                        var4 = var4.MESSAGE;
                        var4 = var5 === var4;
                        if(!var4) { _fun0002_ip = 99; continue _fun0002 }
 52:
                        var5 = var2.data;
                        var6 = var5.channel_type;
                        var7 = _closure1_slot0;
                        var8 = _closure1_slot2;
                        var5 = 20;
                        var5 = var8[var5];
                        var5 = var7.bind(var1)(var5);
                        var5 = var5.ChannelTypes;
                        var5 = var5.GUILD_ANNOUNCEMENT;
                        var4 = var6 === var5;
 99:
                        if(!var4) { _fun0002_ip = 176; continue _fun0002 }
 102:
                        var6 = _closure1_slot1;
                        var7 = _closure1_slot2;
                        var5 = 21;
                        var5 = var7[var5];
                        var8 = var6.bind(var1)(var5);
                        var7 = var8.compare;
                        var9 = _closure1_slot5;
                        var6 = var9.ackMessageId;
                        var5 = var2.data;
                        var5 = var5.channel_id;
                        var6 = var6.bind(var9)(var5);
                        var5 = var2.data;
                        var5 = var5.message_id;
                        var6 = var7.bind(var8)(var6, var5);
                        var5 = 0;
                        var4 = var6 >= var5;
 176:
                        if(!var4) { _fun0002_ip = 305; continue _fun0002 }
 182:
                        var5 = _closure1_slot0;
                        var9 = _closure1_slot2;
                        var4 = 22;
                        var4 = var9[var4];
                        var7 = var5.bind(var1)(var4);
                        var6 = var7.ack;
                        var4 = var2.data;
                        var5 = var4.channel_id;
                        var4 = {};
                        var8 = _closure1_slot9;
                        var8 = var8.ACK_GRAVITY_CLEAR_READ_STATES_BUTTON;
                        var4['object'] = var8;
                        var8 = _closure1_slot8;
                        var8 = var8.ACK_SEMI_AUTOMATIC;
                        var4['objectType'] = var8;
                        var8 = _closure1_slot1;
                        var3 = 21;
                        var3 = var9[var3];
                        var8 = var8.bind(var1)(var3);
                        var3 = var8.atPreviousMillisecond;
                        var2 = var2.data;
                        var2 = var2.message_id;
                        var10 = var3.bind(var8)(var2);
                        var15 = var7;
                        var14 = var5;
                        var13 = var4;
                        var12 = true;
                        var11 = true;
                        var2 = var15[var6](var14, var13, var12, var11, var10, var9);
 305:
                        return var1;
                    }
                };
                var2 = var3.bind(var4)(var2);
                var3 = _closure1_slot1;
                var4 = _closure1_slot2;
                var1 = 17;
                var2 = var4[var1];
                var1 = undefined;
                var5 = var3.bind(var1)(var2);
                var2 = var5.clearReadStates;
                var2 = var2.bind(var5)();
                var2 = 23;
                var2 = var4[var2];
                var3 = var3.bind(var1)(var2);
                var2 = var3.hideActionSheet;
                var2 = var2.bind(var3)();
                return var1;
            };
            var15['onPress'] = var22;
            var21 = var19.bind(var4)(var21, var15);
            var15 = new Array(2);
            var15[0] = var21;
            var16 = var20[var16];
            var16 = var17.bind(var4)(var16);
            var17 = var16.TableRow;
            var16 = {};
            var20 = 'Regenerate feed and clear read states';
            var16['label'] = var20;
            var21 = _closure1_slot3;
            var20 = function* () {
                var1 = function* anon_0_() {
                    _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                        if(var2) { _fun0003_ip = 284; continue _fun0003 }
 10:
                        var3 = _closure1_slot7;
                        var2 = var3.getDehydratedItems;
                        var4 = var2.bind(var3)();
                        var3 = var4.forEach;
                        var2 = function(arg1) {
                            _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                                var2 = arg1;
                                var5 = var2.type;
                                var6 = _closure1_slot0;
                                var4 = _closure1_slot2;
                                var1 = 19;
                                var4 = var4[var1];
                                var1 = undefined;
                                var4 = var6.bind(var1)(var4);
                                var4 = var4.ICYMIItemTypes;
                                var4 = var4.MESSAGE;
                                var4 = var5 === var4;
                                if(!var4) { _fun0004_ip = 99; continue _fun0004 }
 52:
                                var5 = var2.data;
                                var6 = var5.channel_type;
                                var7 = _closure1_slot0;
                                var8 = _closure1_slot2;
                                var5 = 20;
                                var5 = var8[var5];
                                var5 = var7.bind(var1)(var5);
                                var5 = var5.ChannelTypes;
                                var5 = var5.GUILD_ANNOUNCEMENT;
                                var4 = var6 === var5;
 99:
                                if(!var4) { _fun0004_ip = 176; continue _fun0004 }
 102:
                                var6 = _closure1_slot1;
                                var7 = _closure1_slot2;
                                var5 = 21;
                                var5 = var7[var5];
                                var8 = var6.bind(var1)(var5);
                                var7 = var8.compare;
                                var9 = _closure1_slot5;
                                var6 = var9.ackMessageId;
                                var5 = var2.data;
                                var5 = var5.channel_id;
                                var6 = var6.bind(var9)(var5);
                                var5 = var2.data;
                                var5 = var5.message_id;
                                var6 = var7.bind(var8)(var6, var5);
                                var5 = 0;
                                var4 = var6 >= var5;
 176:
                                if(!var4) { _fun0004_ip = 305; continue _fun0004 }
 182:
                                var5 = _closure1_slot0;
                                var9 = _closure1_slot2;
                                var4 = 22;
                                var4 = var9[var4];
                                var7 = var5.bind(var1)(var4);
                                var6 = var7.ack;
                                var4 = var2.data;
                                var5 = var4.channel_id;
                                var4 = {};
                                var8 = _closure1_slot9;
                                var8 = var8.ACK_GRAVITY_REGENERATE_FEED_AND_CLEAR_READ_STATES_BUTTON;
                                var4['object'] = var8;
                                var8 = _closure1_slot8;
                                var8 = var8.ACK_SEMI_AUTOMATIC;
                                var4['objectType'] = var8;
                                var8 = _closure1_slot1;
                                var3 = 21;
                                var3 = var9[var3];
                                var8 = var8.bind(var1)(var3);
                                var3 = var8.atPreviousMillisecond;
                                var2 = var2.data;
                                var2 = var2.message_id;
                                var10 = var3.bind(var8)(var2);
                                var15 = var7;
                                var14 = var5;
                                var13 = var4;
                                var12 = true;
                                var11 = true;
                                var2 = var15[var6](var14, var13, var12, var11, var10, var9);
 305:
                                return var1;
                            }
                        };
                        var2 = var3.bind(var4)(var2);
                        var3 = _closure1_slot1;
                        var2 = _closure1_slot2;
                        var7 = 17;
                        var2 = var2[var7];
                        var6 = undefined;
                        var3 = var3.bind(var6)(var2);
                        var2 = var3.clearReadStates;
                        var2 = var2.bind(var3)();
                        SaveGenerator(address=82);
 80:
                        return var2;
 82:
                        ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                        if(var3) { _fun0003_ip = 281; continue _fun0003 }
 91:
                        var4 = _closure1_slot1;
                        var3 = _closure1_slot2;
                        var3 = var3[var7];
                        var5 = var4.bind(var6)(var3);
                        var4 = var5.fetchDehydrated;
                        var3 = {'isReloading': true, 'forceRefresh': true};
                        var3 = var4.bind(var5)(var3);
                        SaveGenerator(address=137);
 135:
                        return var3;
 137:
                        ResumeGenerator(result_out_reg=2, return_bool_out_reg=3);
                        if(var4) { _fun0003_ip = 278; continue _fun0003 }
 146:
                        var5 = _closure1_slot1;
                        var4 = _closure1_slot2;
                        var4 = var4[var7];
                        var5 = var5.bind(var6)(var4);
                        var4 = var5.reloadICYMITab;
                        var4 = var4.bind(var5)();
                        SaveGenerator(address=177);
 175:
                        return var4;
 177:
                        ResumeGenerator(result_out_reg=3, return_bool_out_reg=4);
                        if(var5) { _fun0003_ip = 275; continue _fun0003 }
 183:
                        var8 = _closure1_slot1;
                        var5 = _closure1_slot2;
                        var5 = var5[var7];
                        var8 = var8.bind(var6)(var5);
                        var5 = var8.getGuildChannelScores;
                        var5 = var5.bind(var8)();
                        SaveGenerator(address=214);
 212:
                        return var5;
 214:
                        ResumeGenerator(result_out_reg=4, return_bool_out_reg=7);
                        if(var8) { _fun0003_ip = 272; continue _fun0003 }
 220:
                        var8 = _closure1_slot1;
                        var9 = _closure1_slot2;
                        var7 = var9[var7];
                        var10 = var8.bind(var6)(var7);
                        var7 = var10.getRecommendedGuilds;
                        var7 = var7.bind(var10)();
                        var7 = 23;
                        var7 = var9[var7];
                        var8 = var8.bind(var6)(var7);
                        var7 = var8.hideActionSheet;
                        var7 = var7.bind(var8)();
                        return var6;
 272:
                        return var5;
 275:
                        return var4;
 278:
                        return var3;
 281:
                        return var2;
 284:
                        return var1;
                    }
                };
                return var1;
            };
            var20 = var21.bind(var4)(var20);
            var16['onPress'] = var20;
            var16 = var19.bind(var4)(var17, var16);
            var15[1] = var16;
            var11['children'] = var15;
            var8 = var14.bind(var4)(var12, var11);
 753:
            var10[3] = var8;
            var8 = _closure1_slot10;
            var17 = _closure1_slot0;
            var14 = _closure1_slot2;
            var11 = 18;
            var11 = var14[var11];
            var11 = var17.bind(var4)(var11);
            var12 = var11.TableRow;
            var11 = {};
            var15 = var14[var18];
            var15 = var17.bind(var4)(var15);
            var16 = var15.intl;
            var15 = var16.string;
            var14 = var14[var18];
            var14 = var17.bind(var4)(var14);
            var14 = var14.t;
            var14 = var14.Eorjm5;
            var14 = var15.bind(var16)(var14);
            var11['label'] = var14;
            var13 = function onPress() {
                var5 = _closure1_slot0;
                var4 = _closure1_slot2;
                var1 = 24;
                var3 = var4[var1];
                var1 = undefined;
                var3 = var5.bind(var1)(var3);
                var8 = var3.ICYMIAnalytics;
                var7 = var8.trackItemInteraction;
                var6 = 'icymi_settings_action_sheet';
                var3 = 'custom_scoring_button';
                var3 = var7.bind(var8)(var6, var6, var3);
                var3 = _closure1_slot1;
                var2 = 25;
                var2 = var4[var2];
                var9 = var3.bind(var1)(var2);
                var8 = var9.pushLazy;
                var2 = 27;
                var2 = var4[var2];
                var7 = var5.bind(var1)(var2);
                var2 = 26;
                var6 = var4[var2];
                var2 = var4.paths;
                var7 = var7.bind(var1)(var6, var2);
                var2 = 28;
                var2 = var4[var2];
                var2 = var5.bind(var1)(var2);
                var11 = var2.ICYMI_CUSTOM_SCORES_MODAL_KEY;
                var5 = {};
                var2 = 'modal';
                var5['presentation'] = var2;
                var12 = {};
                var14 = var9;
                var13 = var7;
                var10 = var5;
                var2 = var14[var8](var13, var12, var11, var10, var9);
                var2 = 23;
                var2 = var4[var2];
                var3 = var3.bind(var1)(var2);
                var2 = var3.hideActionSheet;
                var2 = var2.bind(var3)();
                return var1;
            };
            var11['onPress'] = var13;
            var11 = var8.bind(var4)(var12, var11);
            var10[4] = var11;
            var5['children'] = var10;
            var7 = var3.bind(var4)(var7, var5);
            var5 = new Array(2);
            var5[0] = var7;
            var7 = _closure1_slot4;
            var6 = {};
            var9 = var9.padding;
            var6['style'] = var9;
            var6 = var8.bind(var4)(var7, var6);
            var5[1] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();