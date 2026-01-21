// app/modules/upsell_tooltip/native/MainViewTooltipActionSheetsV2.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var7 = require;
    var6 = metroImportDefault;
    var3 = exports;
    var8 = dependencyMap;
    var _closure1_slot0 = var7;
    var _closure1_slot1 = var6;
    var _closure1_slot2 = var8;
    var1 = function getActionSheetType(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var5 = arg1;
            var2 = _closure1_slot0;
            var1 = _closure1_slot2;
            var7 = 18;
            var1 = var1[var7];
            var6 = undefined;
            var2 = var2.bind(var6)(var1);
            var1 = var2.isSnowflakeBoundDismissibleContent;
            var2 = var1.bind(var2)(var5);
            var1 = 'snowflake_bound';
            if(var2) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var4 = _closure1_slot0;
            var2 = _closure1_slot2;
            var2 = var2[var7];
            var4 = var4.bind(var6)(var2);
            var2 = var4.isVersionedDismissibleContent;
            var4 = var2.bind(var4)(var5);
            var2 = 'versioned';
            if(var4) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var4 = _closure1_slot0;
            var3 = _closure1_slot2;
            var3 = var3[var7];
            var4 = var4.bind(var6)(var3);
            var3 = var4.isTimeRecurringDismissibleContent;
            var4 = var3.bind(var4)(var5);
            var3 = 'single_use';
            if(!var4) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var3 = 'time_recurring';
case 6:
            var2 = var3;
case 4:
            var1 = var2;
case 2:
            return var1;
        }
    };
    var _closure1_slot10 = var1;
    var2 = function trackActionSheetImpression(arg1) {
        var7 = arg1;
        var2 = _closure1_slot5;
        var1 = var2.getContent;
        var2 = var1.bind(var2)();
        var1 = null;
        var6 = var1 != var2;
        var3 = _closure1_slot1;
        var10 = _closure1_slot2;
        var1 = 19;
        var2 = var10[var1];
        var1 = undefined;
        var5 = var3.bind(var1)(var2);
        var4 = var5.track;
        var2 = _closure1_slot6;
        var3 = var2.MAIN_VIEW_ACTION_SHEET_SELECTED;
        var2 = {};
        var9 = _closure1_slot0;
        var11 = 17;
        var11 = var10[var11];
        var11 = var9.bind(var1)(var11);
        var12 = var11.DismissibleContent;
        var11 = var7.id;
        var11 = var12[var11];
        var2['dc_id'] = var11;
        var11 = _closure1_slot10;
        var8 = var7.id;
        var8 = var11.bind(var1)(var8);
        var2['dc_type'] = var8;
        var8 = 20;
        var8 = var10[var8];
        var8 = var9.bind(var1)(var8);
        var9 = var8.CONTENT_TYPES_WITH_BYPASS_FATIGUE;
        var8 = var9.has;
        var7 = var7.id;
        var7 = var8.bind(var9)(var7);
        var2['bypass_fatigue'] = var7;
        var2['is_another_action_sheet_open'] = var6;
        var2 = var4.bind(var5)(var3, var2);
        return var1;
    };
    var _closure1_slot11 = var2;
    var1 = global;
    var10 = var1.Object;
    var9 = var10.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var9.bind(var10)(var3, var1, var4);
    var9 = 0;
    var10 = var8[var9];
    var4 = metroImportAll;
    var1 = undefined;
    var4 = var4.bind(var1)(var10);
    var4 = var8[var9];
    var4 = var7.bind(var1)(var4);
    var10 = var4.useEffect;
    var _closure1_slot3 = var10;
    var4 = var4.useMemo;
    var _closure1_slot4 = var4;
    var10 = 1;
    var4 = var8[var10];
    var4 = var6.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 2;
    var4 = var8[var4];
    var4 = var7.bind(var1)(var4);
    var4 = var4.AnalyticEvents;
    var _closure1_slot6 = var4;
    var4 = 3;
    var4 = var8[var4];
    var4 = var7.bind(var1)(var4);
    var4 = var4.DismissibleContentGroupName;
    var _closure1_slot7 = var4;
    var4 = 4;
    var4 = var8[var4];
    var4 = var7.bind(var1)(var4);
    var4 = var4.jsx;
    var _closure1_slot8 = var4;
    var12 = function GiftingPromotionCoachmarkImporter() {
        var3 = _closure1_slot0;
        var1 = _closure1_slot2;
        var2 = 6;
        var2 = var1[var2];
        var4 = undefined;
        var3 = var3.bind(var4)(var2);
        var2 = 7;
        var2 = var1[var2];
        var1 = var1.paths;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var4 = {};
    var11 = 17;
    var6 = var8[var11];
    var6 = var7.bind(var1)(var6);
    var6 = var6.DismissibleContent;
    var6 = var6.GOOGLE_PLAY_PRICE_CHANGE_ACTION_SHEET;
    var4['id'] = var6;
    var6 = function importer() {
        var3 = _closure1_slot0;
        var1 = _closure1_slot2;
        var2 = 6;
        var2 = var1[var2];
        var4 = undefined;
        var3 = var3.bind(var4)(var2);
        var2 = 11;
        var2 = var1[var2];
        var1 = var1.paths;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var4['importer'] = var6;
    var6 = new Array(4);
    var6[0] = var4;
    var4 = {};
    var13 = var8[var11];
    var13 = var7.bind(var1)(var13);
    var13 = var13.DismissibleContent;
    var13 = var13.DISCOUNT_OFFER_ACTION_SHEET;
    var4['id'] = var13;
    var13 = function importer() {
        var3 = _closure1_slot0;
        var1 = _closure1_slot2;
        var2 = 6;
        var2 = var1[var2];
        var4 = undefined;
        var3 = var3.bind(var4)(var2);
        var2 = 14;
        var2 = var1[var2];
        var1 = var1.paths;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var4['importer'] = var13;
    var6[1] = var4;
    var4 = {};
    var13 = var8[var11];
    var13 = var7.bind(var1)(var13);
    var13 = var13.DismissibleContent;
    var13 = var13.CHECKPOINT_2025_BOTTOM_SHEET;
    var4['id'] = var13;
    var13 = function importer() {
        var3 = _closure1_slot0;
        var1 = _closure1_slot2;
        var2 = 6;
        var2 = var1[var2];
        var4 = undefined;
        var3 = var3.bind(var4)(var2);
        var2 = 9;
        var2 = var1[var2];
        var1 = var1.paths;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var4['importer'] = var13;
    var6[2] = var4;
    var4 = {};
    var13 = var8[var11];
    var13 = var7.bind(var1)(var13);
    var13 = var13.DismissibleContent;
    var13 = var13.MOBILE_BOGO_PROMOTION_ACTION_SHEET;
    var4['id'] = var13;
    var13 = function importer() {
        var3 = _closure1_slot0;
        var1 = _closure1_slot2;
        var2 = 6;
        var2 = var1[var2];
        var4 = undefined;
        var3 = var3.bind(var4)(var2);
        var2 = 10;
        var2 = var1[var2];
        var1 = var1.paths;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var4['importer'] = var13;
    var6[3] = var4;
    var4 = new Array(8);
    var16 = var4;
    var15 = var6;
    var14 = 0;
    var6 = arraySpread(var16, var15, var14);
    var9 = {};
    var13 = var8[var11];
    var13 = var7.bind(var1)(var13);
    var13 = var13.DismissibleContent;
    var13 = var13.PREMIUM_MARKETING_MOMENT_ANNOUNCEMENT_UPSELL;
    var9['id'] = var13;
    var13 = function importer() {
        var3 = _closure1_slot0;
        var1 = _closure1_slot2;
        var2 = 6;
        var2 = var1[var2];
        var4 = undefined;
        var3 = var3.bind(var4)(var2);
        var2 = 13;
        var2 = var1[var2];
        var1 = var1.paths;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var9['importer'] = var13;
    var4[var6] = var9;
    var6 = var6 + var10;
    var9 = {};
    var13 = var8[var11];
    var13 = var7.bind(var1)(var13);
    var13 = var13.DismissibleContent;
    var13 = var13.GIFTING_PROMOTION_MOBILE_FIRST_TIME_HALFSHEET;
    var9['id'] = var13;
    var9['importer'] = var12;
    var4[var6] = var9;
    var6 = var6 + var10;
    var9 = {};
    var13 = var8[var11];
    var13 = var7.bind(var1)(var13);
    var13 = var13.DismissibleContent;
    var13 = var13.GIFTING_PROMOTION_REMINDER;
    var9['id'] = var13;
    var9['importer'] = var12;
    var4[var6] = var9;
    var6 = var6 + var10;
    var9 = {};
    var12 = var8[var11];
    var12 = var7.bind(var1)(var12);
    var12 = var12.DismissibleContent;
    var12 = var12.NOTIFICATION_NUDGE_APP_START_BOTTOM_SHEET;
    var9['id'] = var12;
    var12 = function importer() {
        var3 = _closure1_slot0;
        var1 = _closure1_slot2;
        var2 = 6;
        var2 = var1[var2];
        var4 = undefined;
        var3 = var3.bind(var4)(var2);
        var2 = 12;
        var2 = var1[var2];
        var1 = var1.paths;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var9['importer'] = var12;
    var4[var6] = var9;
    var6 = var6 + var10;
    var9 = {};
    var12 = var8[var11];
    var12 = var7.bind(var1)(var12);
    var12 = var12.DismissibleContent;
    var12 = var12.CUSTOM_APP_ICONS_COACHMARK;
    var9['id'] = var12;
    var12 = function importer() {
        var3 = _closure1_slot0;
        var1 = _closure1_slot2;
        var2 = 6;
        var2 = var1[var2];
        var4 = undefined;
        var3 = var3.bind(var4)(var2);
        var2 = 5;
        var2 = var1[var2];
        var1 = var1.paths;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var9['importer'] = var12;
    var4[var6] = var9;
    var6 = var6 + var10;
    var9 = {};
    var12 = var8[var11];
    var12 = var7.bind(var1)(var12);
    var12 = var12.DismissibleContent;
    var12 = var12.ROBLOX_CONNECTION_COACHMARK;
    var9['id'] = var12;
    var12 = function importer() {
        var3 = _closure1_slot0;
        var1 = _closure1_slot2;
        var2 = 6;
        var2 = var1[var2];
        var4 = undefined;
        var3 = var3.bind(var4)(var2);
        var2 = 8;
        var2 = var1[var2];
        var1 = var1.paths;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var9['importer'] = var12;
    var4[var6] = var9;
    var6 = var6 + var10;
    var9 = {};
    var12 = var8[var11];
    var12 = var7.bind(var1)(var12);
    var12 = var12.DismissibleContent;
    var12 = var12.DISPLAY_NAME_STYLES_MOBILE_ANNOUNCEMENT_MODAL;
    var9['id'] = var12;
    var12 = function importer() {
        var3 = _closure1_slot0;
        var1 = _closure1_slot2;
        var2 = 6;
        var2 = var1[var2];
        var4 = undefined;
        var3 = var3.bind(var4)(var2);
        var2 = 15;
        var2 = var1[var2];
        var1 = var1.paths;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var9['importer'] = var12;
    var4[var6] = var9;
    var9 = {};
    var11 = var8[var11];
    var11 = var7.bind(var1)(var11);
    var11 = var11.DismissibleContent;
    var11 = var11.INSTALLED_GAME_COMMUNITY_UPSELL;
    var9['id'] = var11;
    var11 = function importer() {
        var3 = _closure1_slot0;
        var1 = _closure1_slot2;
        var2 = 6;
        var2 = var1[var2];
        var4 = undefined;
        var3 = var3.bind(var4)(var2);
        var2 = 16;
        var2 = var1[var2];
        var1 = var1.paths;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var9['importer'] = var11;
    var6 = var6 + var10;
    var4[var6] = var9;
    var _closure1_slot9 = var4;
    var6 = 26;
    var6 = var8[var6];
    var8 = var7.bind(var1)(var6);
    var7 = var8.fileFinishedImporting;
    var6 = 'modules/upsell_tooltip/native/MainViewTooltipActionSheetsV2.tsx';
    var6 = var7.bind(var8)(var6);
    var5 = function MainViewTooltipActionSheetsV2() {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var2 = _closure1_slot0;
            var3 = _closure1_slot2;
            var1 = 23;
            var1 = var3[var1];
            var5 = undefined;
            var2 = var2.bind(var5)(var1);
            var1 = var2.useMainViewTooltipActionSheetMap;
            var3 = var1.bind(var2)();
            var _closure2_slot0 = var3;
            var4 = _closure1_slot4;
            var2 = new Array(1);
            var2[0] = var3;
            var1 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var3 = _closure1_slot9;
                    var2 = var3.find;
                    var1 = function(arg1) {
                        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                            var2 = arg1;
                            var3 = _closure2_slot0;
                            var1 = var2.id;
                            var5 = var3[var1];
                            var7 = null;
                            var3 = var7 == var5;
                            var9 = undefined;
                            var1 = undefined;
                            if(var3) { _fun0004_ip = 8; continue _fun0004 }
case 9:
                            var1 = var5.isEligible;
case 8:
                            if(!var1) { _fun0004_ip = 10; continue _fun0004 }
case 11:
                            var8 = var2.id;
                            var2 = var7 == var5;
                            if(var2) { _fun0004_ip = 12; continue _fun0004 }
case 13:
                            var10 = _closure1_slot0;
                            var4 = _closure1_slot2;
                            var3 = 18;
                            var4 = var4[var3];
                            var10 = var10.bind(var9)(var4);
                            var4 = var10.isSnowflakeBoundDismissibleContent;
                            var4 = var4.bind(var10)(var8);
                            if(var4) { _fun0004_ip = 14; continue _fun0004 }
case 15:
                            var10 = _closure1_slot0;
                            var4 = _closure1_slot2;
                            var4 = var4[var3];
                            var10 = var10.bind(var9)(var4);
                            var4 = var10.isVersionedDismissibleContent;
                            var4 = var4.bind(var10)(var8);
                            var10 = _closure1_slot0;
                            var11 = _closure1_slot2;
                            if(var4) { _fun0004_ip = 16; continue _fun0004 }
case 17:
                            var3 = var11[var3];
                            var4 = var10.bind(var9)(var3);
                            var3 = var4.isTimeRecurringDismissibleContent;
                            var3 = var3.bind(var4)(var8);
                            if(var3) { _fun0004_ip = 18; continue _fun0004 }
case 19:
                            var4 = _closure1_slot0;
                            var12 = _closure1_slot2;
                            var3 = 21;
                            var3 = var12[var3];
                            var4 = var4.bind(var9)(var3);
                            var3 = var4.UNSAFE_isDismissibleContentDismissed;
                            var3 = var3.bind(var4)(var8);
                            _fun0004_ip = 20; continue _fun0004;
case 18:
                            var4 = var5.cooldownConfig;
                            var4 = var7 == var4;
                            if(var4) { _fun0004_ip = 21; continue _fun0004 }
case 22:
                            var13 = _closure1_slot0;
                            var14 = _closure1_slot2;
                            var12 = 22;
                            var12 = var14[var12];
                            var14 = var13.bind(var9)(var12);
                            var13 = var14.isTimeRecurringDismissibleContentDismissed;
                            var12 = var5.cooldownConfig;
                            var12 = var13.bind(var14)(var8, var12);
                            var4 = var12.isDismissed;
case 21:
                            var3 = var4;
case 20:
                            _fun0004_ip = 23; continue _fun0004;
case 16:
                            var4 = 22;
                            var4 = var11[var4];
                            var11 = var10.bind(var9)(var4);
                            var10 = var11.isVersionedDismissibleContentDismissed;
                            var4 = var5.latestVersion;
                            var4 = var10.bind(var11)(var8, var4);
                            var3 = var4.isDismissed;
case 23:
                            _fun0004_ip = 24; continue _fun0004;
case 14:
                            var4 = var5.newSnowflakeId;
                            var4 = var7 == var4;
                            if(var4) { _fun0004_ip = 25; continue _fun0004 }
case 26:
                            var7 = _closure1_slot0;
                            var10 = _closure1_slot2;
                            var6 = 21;
                            var6 = var10[var6];
                            var7 = var7.bind(var9)(var6);
                            var6 = var7.UNSAFE_isSnowflakeBoundDismissibleContentDismissed;
                            var5 = var5.newSnowflakeId;
                            var5 = var6.bind(var7)(var8, var5);
                            var4 = var5.isDismissed;
case 25:
                            var3 = var4;
case 24:
                            var2 = var3;
case 12:
                            var1 = !var2;
case 10:
                            return var1;
                        }
                    };
                    var2 = var2.bind(var3)(var1);
                    var1 = null;
                    var3 = var1 != var2;
                    if(!var3) { _fun0003_ip = 8; continue _fun0003 }
case 27:
                    var1 = var2;
case 8:
                    return var1;
                }
            };
            var9 = var4.bind(var5)(var1, var2);
            var _closure2_slot1 = var9;
            var4 = _closure1_slot3;
            var2 = new Array(1);
            var2[0] = var9;
            var1 = function() {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                    var3 = _closure2_slot1;
                    var2 = null;
                    if(!(var2 != var3)) { _fun0005_ip = 28; continue _fun0005 }
case 29:
                    var3 = _closure1_slot11;
                    var2 = _closure2_slot1;
                    var1 = undefined;
                    var1 = var3.bind(var1)(var2);
case 28:
                    var1 = undefined;
                    return var1;
                }
            };
            var1 = var4.bind(var5)(var1, var2);
            var1 = null;
            if(!(var1 != var9)) { _fun0002_ip = 30; continue _fun0002 }
case 31:
            var2 = var9.id;
            var8 = var3[var2];
            if(!(var1 == var8)) { _fun0002_ip = 32; continue _fun0002 }
case 33:
            var8 = {};
case 32:
            var _closure2_slot2 = var8;
            var3 = _closure1_slot10;
            var2 = var9.id;
            var3 = var3.bind(var5)(var2);
            var2 = 'snowflake_bound';
            if(!(var2 !== var3)) { _fun0002_ip = 34; continue _fun0002 }
case 35:
            var2 = 'versioned';
            if(!(var2 !== var3)) { _fun0002_ip = 12; continue _fun0002 }
case 36:
            var2 = 'time_recurring';
            if(!(var2 !== var3)) { _fun0002_ip = 37; continue _fun0002 }
case 38:
            var2 = 'single_use';
            if(!(var2 !== var3)) { _fun0002_ip = 39; continue _fun0002 }
case 40:
            return var1;
case 39:
            var4 = _closure1_slot8;
            var3 = _closure1_slot1;
            var10 = _closure1_slot2;
            var2 = 24;
            var2 = var10[var2];
            var3 = var3.bind(var5)(var2);
            var2 = {};
            var11 = var9.id;
            var10 = new Array(1);
            var10[0] = var11;
            var2['contentTypes'] = var10;
            var10 = _closure1_slot7;
            var10 = var10.MAIN_VIEW_TOOLTIPS;
            var2['groupName'] = var10;
            var10 = function children(arg1) {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                    var1 = arg1;
                    var3 = var1.visibleContent;
                    var7 = var1.markAsDismissed;
                    var1 = _closure2_slot1;
                    var2 = var1.id;
                    var1 = null;
                    if(!(var3 === var2)) { _fun0006_ip = 41; continue _fun0006 }
case 42:
                    var5 = _closure1_slot8;
                    var3 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var2 = 25;
                    var2 = var4[var2];
                    var4 = undefined;
                    var2 = var3.bind(var4)(var2);
                    var3 = var2.DismissibleActionSheet;
                    var2 = {};
                    var2['markAsDismissed'] = var7;
                    var7 = _closure2_slot1;
                    var7 = var7.importer;
                    var2['importer'] = var7;
                    var7 = 'MainViewTooltipActionSheets';
                    var2['actionSheetKey'] = var7;
                    var6 = _closure2_slot2;
                    var8 = var6.actionSheetProperties;
                    var9 = var2;
                    var6 = copyDataProperties(var9, var8);
                    var1 = var5.bind(var4)(var3, var2);
case 41:
                    return var1;
                }
            };
            var2['children'] = var10;
            var2 = var4.bind(var5)(var3, var2);
            return var2;
case 37:
            var4 = _closure1_slot8;
            var3 = _closure1_slot0;
            var10 = _closure1_slot2;
            var2 = 24;
            var2 = var10[var2];
            var2 = var3.bind(var5)(var2);
            var3 = var2.SelectedTimeRecurringDismissibleContent;
            var2 = {};
            var10 = var9.id;
            var2['contentType'] = var10;
            var10 = var8.cooldownConfig;
            var2['timeRecurringConfig'] = var10;
            var10 = _closure1_slot7;
            var10 = var10.MAIN_VIEW_TOOLTIPS;
            var2['groupName'] = var10;
            var10 = false;
            var2['bypassAutoDismiss'] = var10;
            var10 = function children(arg1) {
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                    var1 = arg1;
                    var3 = var1.visibleContent;
                    var7 = var1.markAsDismissed;
                    var1 = _closure2_slot1;
                    var2 = var1.id;
                    var1 = null;
                    if(!(var3 === var2)) { _fun0007_ip = 41; continue _fun0007 }
case 42:
                    var5 = _closure1_slot8;
                    var3 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var2 = 25;
                    var2 = var4[var2];
                    var4 = undefined;
                    var2 = var3.bind(var4)(var2);
                    var3 = var2.DismissibleActionSheet;
                    var2 = {};
                    var8 = 'MainViewTooltipActionSheets';
                    var2['actionSheetKey'] = var8;
                    var8 = _closure2_slot1;
                    var8 = var8.importer;
                    var2['importer'] = var8;
                    var2['markAsDismissed'] = var7;
                    var6 = _closure2_slot2;
                    var9 = var6.actionSheetProperties;
                    var10 = var2;
                    var6 = copyDataProperties(var10, var9);
                    var1 = var5.bind(var4)(var3, var2);
case 41:
                    return var1;
                }
            };
            var2['children'] = var10;
            var2 = var4.bind(var5)(var3, var2);
            return var2;
case 12:
            var4 = _closure1_slot8;
            var3 = _closure1_slot0;
            var10 = _closure1_slot2;
            var2 = 24;
            var2 = var10[var2];
            var2 = var3.bind(var5)(var2);
            var3 = var2.SelectedVersionedDismissibleContent;
            var2 = {};
            var11 = var8.latestVersion;
            var12 = var1 != var11;
            var10 = 0;
            if(!var12) { _fun0002_ip = 43; continue _fun0002 }
case 44:
            var10 = var11;
case 43:
            var2['latestVersion'] = var10;
            var10 = var9.id;
            var2['contentType'] = var10;
            var10 = _closure1_slot7;
            var10 = var10.MAIN_VIEW_TOOLTIPS;
            var2['groupName'] = var10;
            var10 = function children(arg1) {
                _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                    var1 = arg1;
                    var3 = var1.visibleContent;
                    var8 = var1.markAsDismissed;
                    var1 = _closure2_slot1;
                    var2 = var1.id;
                    var1 = null;
                    if(!(var3 === var2)) { _fun0008_ip = 45; continue _fun0008 }
case 42:
                    var5 = _closure1_slot8;
                    var3 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var2 = 25;
                    var2 = var4[var2];
                    var4 = undefined;
                    var2 = var3.bind(var4)(var2);
                    var3 = var2.DismissibleActionSheet;
                    var2 = {};
                    var7 = 'MainViewTooltipActionSheets';
                    var2['actionSheetKey'] = var7;
                    var7 = _closure2_slot1;
                    var9 = var7.importer;
                    var2['importer'] = var9;
                    var2['markAsDismissed'] = var8;
                    var7 = var7.id;
                    var2['versionedDismissibleContentType'] = var7;
                    var6 = _closure2_slot2;
                    var10 = var6.actionSheetProperties;
                    var11 = var2;
                    var6 = copyDataProperties(var11, var10);
                    var1 = var5.bind(var4)(var3, var2);
case 45:
                    return var1;
                }
            };
            var2['children'] = var10;
            var2 = var4.bind(var5)(var3, var2);
            return var2;
case 34:
            var4 = _closure1_slot8;
            var3 = _closure1_slot0;
            var10 = _closure1_slot2;
            var2 = 24;
            var2 = var10[var2];
            var2 = var3.bind(var5)(var2);
            var3 = var2.SelectedSnowflakeBoundDismissibleContent;
            var2 = {};
            var9 = var9.id;
            var2['contentType'] = var9;
            var9 = var8.newSnowflakeId;
            var10 = var1 != var9;
            var8 = '';
            if(!var10) { _fun0002_ip = 46; continue _fun0002 }
case 47:
            var8 = var9;
case 46:
            var2['newSnowflakeId'] = var8;
            var7 = _closure1_slot7;
            var7 = var7.MAIN_VIEW_TOOLTIPS;
            var2['groupName'] = var7;
            var6 = function children(arg1) {
                _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                    var1 = arg1;
                    var3 = var1.visibleContent;
                    var7 = var1.markAsDismissed;
                    var1 = _closure2_slot1;
                    var2 = var1.id;
                    var1 = null;
                    if(!(var3 === var2)) { _fun0009_ip = 41; continue _fun0009 }
case 42:
                    var5 = _closure1_slot8;
                    var3 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var2 = 25;
                    var2 = var4[var2];
                    var4 = undefined;
                    var2 = var3.bind(var4)(var2);
                    var3 = var2.DismissibleActionSheet;
                    var2 = {};
                    var8 = 'MainViewTooltipActionSheets';
                    var2['actionSheetKey'] = var8;
                    var8 = _closure2_slot1;
                    var8 = var8.importer;
                    var2['importer'] = var8;
                    var2['markAsDismissed'] = var7;
                    var6 = _closure2_slot2;
                    var9 = var6.actionSheetProperties;
                    var10 = var2;
                    var6 = copyDataProperties(var10, var9);
                    var1 = var5.bind(var4)(var3, var2);
case 41:
                    return var1;
                }
            };
            var2['children'] = var6;
            var2 = var4.bind(var5)(var3, var2);
            return var2;
case 30:
            return var1;
        }
    };
    var3['default'] = var5;
    var3['ACTION_SHEET_REGISTRY'] = var4;
    var3['trackActionSheetImpression'] = var2;
    return var1;
})();