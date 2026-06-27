// app/records/PromotionRecord.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var6;
    var1 = function _isNativeReflectConstruct() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
case 2: // try_start_0
            var2 = global;
            var3 = var2.Boolean;
            var3 = var3.prototype;
            var4 = var3.valueOf;
            var3 = var4.call;
            var8 = var2.Reflect;
            var7 = var8.construct;
            var6 = var2.Boolean;
            var5 = new Array(0);
            var2 = function() {
                var1 = undefined;
                return var1;
            };
            var2 = var7.bind(var8)(var6, var5, var2);
            var2 = var3.bind(var4)(var2);
            var2 = !var2;
            var _closure2_slot0 = var2;
case 3: // try_end0
            _fun0001_ip = 4; continue _fun0001;
case 5: // catch_target0
            CatchBlockStart(arg_register=1);
case 4:
            var2 = function _isNativeReflectConstruct() {
                var1 = _closure2_slot0;
                var1 = !var1;
                var1 = !var1;
                return var1;
            };
            _closure1_slot7 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot7 = var1;
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
    var _closure1_slot2 = var4;
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
    var4 = var7.bind(var1)(var4);
    var _closure1_slot6 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var2 = function(arg1) {
        var5 = function PromotionRecord(arg1) {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                var2 = arg1;
                var5 = this;
                var1 = _closure1_slot2;
                var3 = _closure2_slot0;
                var6 = undefined;
                var1 = var1.bind(var6)(var5, var3);
                var1 = _closure1_slot5;
                var11 = var1.bind(var6)(var3);
                var3 = _closure1_slot4;
                var1 = _closure1_slot7;
                var1 = var1.bind(var6)();
                if(var1) { _fun0002_ip = 6; continue _fun0002 }
case 7:
                var1 = var11.apply;
                var1 = var1.bind(var11)(var5, var6);
                _fun0002_ip = 8; continue _fun0002;
case 6:
                var7 = global;
                var10 = var7.Reflect;
                var9 = var10.construct;
                var7 = _closure1_slot5;
                var7 = var7.bind(var6)(var5);
                var8 = var7.constructor;
                var7 = new Array(0);
                var1 = var9.bind(var10)(var11, var7, var8);
case 8:
                var1 = var3.bind(var6)(var5, var1);
                var3 = var2.id;
                var1['id'] = var3;
                var3 = var2.trialId;
                var1['trialId'] = var3;
                var3 = var2.startDate;
                var1['startDate'] = var3;
                var3 = var2.endDate;
                var1['endDate'] = var3;
                var3 = var2.outboundRedemptionEndDate;
                var1['outboundRedemptionEndDate'] = var3;
                var3 = var2.inboundHeaderText;
                var1['inboundHeaderText'] = var3;
                var3 = var2.inboundBodyText;
                var1['inboundBodyText'] = var3;
                var3 = var2.inboundHelpCenterLink;
                var1['inboundHelpCenterLink'] = var3;
                var3 = var2.outboundTitle;
                var1['outboundTitle'] = var3;
                var3 = var2.outboundRedemptionModalBody;
                var1['outboundRedemptionModalBody'] = var3;
                var3 = var2.outboundTermsAndConditions;
                var1['outboundTermsAndConditions'] = var3;
                var3 = var2.outboundRedemptionPageLink;
                var1['outboundRedemptionPageLink'] = var3;
                var3 = var2.outboundRedemptionUrlFormat;
                var1['outboundRedemptionUrlFormat'] = var3;
                var7 = var2.flags;
                var5 = null;
                var8 = var5 != var7;
                var3 = 0;
                if(!var8) { _fun0002_ip = 9; continue _fun0002 }
case 10:
                var3 = var7;
case 9:
                var1['flags'] = var3;
                var3 = var2.inboundRestrictedCountries;
                if(!(var5 == var3)) { _fun0002_ip = 11; continue _fun0002 }
case 12:
                var3 = new Array(0);
case 11:
                var1['inboundRestrictedCountries'] = var3;
                var3 = var2.outboundRestrictedCountries;
                if(!(var5 == var3)) { _fun0002_ip = 13; continue _fun0002 }
case 14:
                var3 = new Array(0);
case 13:
                var1['outboundRestrictedCountries'] = var3;
                var3 = var2.allowedCountries;
                if(!(var5 == var3)) { _fun0002_ip = 15; continue _fun0002 }
case 16:
                var3 = new Array(0);
case 15:
                var1['allowedCountries'] = var3;
                var3 = var2.countryListMode;
                if(!(var5 == var3)) { _fun0002_ip = 17; continue _fun0002 }
case 18:
                var5 = _closure1_slot0;
                var7 = _closure1_slot1;
                var4 = 6;
                var4 = var7[var4];
                var4 = var5.bind(var6)(var4);
                var4 = var4.CountryListMode;
                var3 = var4.BLOCKLIST;
case 17:
                var1['countryListMode'] = var3;
                var3 = var2.promotionType;
                var1['promotionType'] = var3;
                var3 = var2.partnerId;
                var1['partnerId'] = var3;
                var3 = var2.marketingComponents;
                var1['marketingComponents'] = var3;
                var3 = var2.rewardSkuIds;
                var1['rewardSkuIds'] = var3;
                var2 = var2.promotionKey;
                var1['promotionKey'] = var2;
                return var1;
            }
        };
        var _closure2_slot0 = var5;
        var6 = _closure1_slot6;
        var4 = undefined;
        var3 = arg1;
        var3 = var6.bind(var4)(var5, var3);
        var3 = _closure1_slot3;
        var6 = {};
        var2 = 'isBogo';
        var6['key'] = var2;
        var2 = function get() {
            var1 = this;
            var2 = var1.promotionType;
            var4 = _closure1_slot0;
            var3 = _closure1_slot1;
            var1 = 6;
            var3 = var3[var1];
            var1 = undefined;
            var1 = var4.bind(var1)(var3);
            var1 = var1.PromotionTypes;
            var1 = var1.BOGO;
            var1 = var2 === var1;
            return var1;
        };
        var6['get'] = var2;
        var2 = new Array(4);
        var2[0] = var6;
        var6 = {};
        var7 = 'isMarketingMoment';
        var6['key'] = var7;
        var7 = function get() {
            var1 = this;
            var2 = var1.promotionType;
            var4 = _closure1_slot0;
            var3 = _closure1_slot1;
            var1 = 6;
            var3 = var3[var1];
            var1 = undefined;
            var1 = var4.bind(var1)(var3);
            var1 = var1.PromotionTypes;
            var1 = var1.MARKETING_MOMENT;
            var1 = var2 === var1;
            return var1;
        };
        var6['get'] = var7;
        var2[1] = var6;
        var6 = {};
        var7 = 'hasFlag';
        var6['key'] = var7;
        var7 = function value(arg1) {
            var3 = _closure1_slot0;
            var2 = _closure1_slot1;
            var1 = 7;
            var2 = var2[var1];
            var1 = undefined;
            var4 = var3.bind(var1)(var2);
            var3 = var4.hasFlag;
            var1 = this;
            var2 = var1.flags;
            var1 = arg1;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        };
        var6['value'] = var7;
        var2[2] = var6;
        var6 = {};
        var7 = 'isCountryRestricted';
        var6['key'] = var7;
        var7 = function value(arg1) {
            _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                var3 = arg1;
                var1 = this;
                var5 = var1.countryListMode;
                var8 = _closure1_slot0;
                var4 = _closure1_slot1;
                var7 = 6;
                var4 = var4[var7];
                var6 = undefined;
                var4 = var8.bind(var6)(var4);
                var4 = var4.CountryListMode;
                var4 = var4.ALLOWLIST;
                if(!(var5 !== var4)) { _fun0003_ip = 19; continue _fun0003 }
case 20:
                var4 = var1.promotionType;
                var8 = _closure1_slot0;
                var5 = _closure1_slot1;
                var5 = var5[var7];
                var5 = var8.bind(var6)(var5);
                var5 = var5.PromotionTypes;
                var5 = var5.THIRD_PARTY_INBOUND;
                if(!(var5 !== var4)) { _fun0003_ip = 21; continue _fun0003 }
case 22:
                var8 = _closure1_slot0;
                var5 = _closure1_slot1;
                var5 = var5[var7];
                var5 = var8.bind(var6)(var5);
                var5 = var5.PromotionTypes;
                var5 = var5.THIRD_PARTY_DIRECT_FULFILLMENT;
                if(!(var5 !== var4)) { _fun0003_ip = 21; continue _fun0003 }
case 23:
                var8 = _closure1_slot0;
                var5 = _closure1_slot1;
                var5 = var5[var7];
                var5 = var8.bind(var6)(var5);
                var5 = var5.PromotionTypes;
                var5 = var5.THIRD_PARTY_OUTBOUND;
                if(!(var5 !== var4)) { _fun0003_ip = 24; continue _fun0003 }
case 25:
                var5 = _closure1_slot0;
                var2 = _closure1_slot1;
                var2 = var2[var7];
                var2 = var5.bind(var6)(var2);
                var2 = var2.PromotionTypes;
                var2 = var2.THIRD_PARTY_OUTBOUND_RECURRING;
                if(!(var2 !== var4)) { _fun0003_ip = 24; continue _fun0003 }
case 26:
                var2 = false;
                return var2;
case 24:
                var4 = var1.outboundRestrictedCountries;
                var2 = var4.includes;
                var2 = var2.bind(var4)(var3);
                return var2;
case 21:
                var4 = var1.inboundRestrictedCountries;
                var2 = var4.includes;
                var2 = var2.bind(var4)(var3);
                return var2;
case 19:
                var2 = var1.allowedCountries;
                var1 = var2.includes;
                var1 = var1.bind(var2)(var3);
                var1 = !var1;
                return var1;
            }
        };
        var6['value'] = var7;
        var2[3] = var6;
        var6 = {};
        var7 = 'createFromServer';
        var6['key'] = var7;
        var1 = function value(arg1) {
            _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                var4 = arg1;
                var3 = _closure2_slot0;
                var1 = {};
                var2 = var4.id;
                var1['id'] = var2;
                var2 = var4.trial_id;
                var1['trialId'] = var2;
                var6 = global;
                var7 = var6.Date;
                var11 = var4.start_date;
                var5 = var7.prototype;
                var5 = Object.create(var5, {constructor: {value: var7}});
                var12 = var5;
                var2 = new var12[var7](var11, var10);
                var2 = var2 instanceof Object ? var2 : var5;
                var1['startDate'] = var2;
                var7 = var6.Date;
                var11 = var4.end_date;
                var5 = var7.prototype;
                var5 = Object.create(var5, {constructor: {value: var7}});
                var12 = var5;
                var2 = new var12[var7](var11, var10);
                var2 = var2 instanceof Object ? var2 : var5;
                var1['endDate'] = var2;
                var2 = var4.outbound_redemption_end_date;
                var5 = null;
                var7 = var5 != var2;
                var2 = null;
                if(!var7) { _fun0004_ip = 27; continue _fun0004 }
case 28:
                var8 = var6.Date;
                var11 = var4.outbound_redemption_end_date;
                var7 = var8.prototype;
                var7 = Object.create(var7, {constructor: {value: var8}});
                var12 = var7;
                var6 = new var12[var8](var11, var10);
                var2 = var6 instanceof Object ? var6 : var7;
case 27:
                var1['outboundRedemptionEndDate'] = var2;
                var7 = var4.inbound_header_text;
                var8 = var5 != var7;
                var2 = '';
                var6 = var2;
                if(!var8) { _fun0004_ip = 29; continue _fun0004 }
case 30:
                var6 = var7;
case 29:
                var1['inboundHeaderText'] = var6;
                var7 = var4.inbound_body_text;
                var8 = var5 != var7;
                var6 = var2;
                if(!var8) { _fun0004_ip = 31; continue _fun0004 }
case 32:
                var6 = var7;
case 31:
                var1['inboundBodyText'] = var6;
                var7 = var4.inbound_help_center_link;
                var8 = var5 != var7;
                var6 = var2;
                if(!var8) { _fun0004_ip = 33; continue _fun0004 }
case 34:
                var6 = var7;
case 33:
                var1['inboundHelpCenterLink'] = var6;
                var7 = var4.outbound_title;
                var8 = var5 != var7;
                var6 = var2;
                if(!var8) { _fun0004_ip = 35; continue _fun0004 }
case 36:
                var6 = var7;
case 35:
                var1['outboundTitle'] = var6;
                var7 = var4.outbound_redemption_modal_body;
                var8 = var5 != var7;
                var6 = var2;
                if(!var8) { _fun0004_ip = 37; continue _fun0004 }
case 38:
                var6 = var7;
case 37:
                var1['outboundRedemptionModalBody'] = var6;
                var7 = var4.outbound_terms_and_conditions;
                var8 = var5 != var7;
                var6 = var2;
                if(!var8) { _fun0004_ip = 39; continue _fun0004 }
case 40:
                var6 = var7;
case 39:
                var1['outboundTermsAndConditions'] = var6;
                var7 = var4.outbound_redemption_page_link;
                var8 = var5 != var7;
                var6 = var2;
                if(!var8) { _fun0004_ip = 41; continue _fun0004 }
case 42:
                var6 = var7;
case 41:
                var1['outboundRedemptionPageLink'] = var6;
                var7 = var4.outbound_redemption_url_format;
                var8 = var5 != var7;
                var6 = var2;
                if(!var8) { _fun0004_ip = 43; continue _fun0004 }
case 44:
                var6 = var7;
case 43:
                var1['outboundRedemptionUrlFormat'] = var6;
                var6 = var4.flags;
                var1['flags'] = var6;
                var6 = var4.inbound_restricted_countries;
                var1['inboundRestrictedCountries'] = var6;
                var6 = var4.outbound_restricted_countries;
                var1['outboundRestrictedCountries'] = var6;
                var6 = var4.allowed_countries;
                if(!(var5 == var6)) { _fun0004_ip = 45; continue _fun0004 }
case 46:
                var6 = new Array(0);
case 45:
                var1['allowedCountries'] = var6;
                var6 = var4.country_list_mode;
                if(!(var5 == var6)) { _fun0004_ip = 47; continue _fun0004 }
case 48:
                var9 = _closure1_slot0;
                var8 = _closure1_slot1;
                var7 = 6;
                var8 = var8[var7];
                var7 = undefined;
                var7 = var9.bind(var7)(var8);
                var7 = var7.CountryListMode;
                var6 = var7.BLOCKLIST;
case 47:
                var1['countryListMode'] = var6;
                var6 = var4.promotion_type;
                var1['promotionType'] = var6;
                var7 = var4.partner_id;
                var8 = var5 != var7;
                var6 = null;
                if(!var8) { _fun0004_ip = 49; continue _fun0004 }
case 50:
                var6 = var7;
case 49:
                var1['partnerId'] = var6;
                var6 = var4.marketing_components;
                if(!(var5 == var6)) { _fun0004_ip = 51; continue _fun0004 }
case 52:
                var6 = new Array(0);
case 51:
                var1['marketingComponents'] = var6;
                var7 = var4.metadata;
                var8 = var5 == var7;
                var6 = undefined;
                if(var8) { _fun0004_ip = 53; continue _fun0004 }
case 54:
                var7 = var7.premium_promotion;
                var8 = var5 == var7;
                var6 = undefined;
                if(var8) { _fun0004_ip = 53; continue _fun0004 }
case 55:
                var6 = var7.reward_sku_ids;
case 53:
                if(!(var5 == var6)) { _fun0004_ip = 56; continue _fun0004 }
case 57:
                var8 = var4.metadata;
                var9 = var5 == var8;
                var7 = undefined;
                if(var9) { _fun0004_ip = 58; continue _fun0004 }
case 59:
                var8 = var8.gift_promotion;
                var9 = var5 == var8;
                var7 = undefined;
                if(var9) { _fun0004_ip = 58; continue _fun0004 }
case 60:
                var7 = var8.reward_sku_ids;
case 58:
                var6 = var7;
case 56:
                if(!(var5 == var6)) { _fun0004_ip = 61; continue _fun0004 }
case 62:
                var6 = new Array(0);
case 61:
                var1['rewardSkuIds'] = var6;
                var4 = var4.promotion_key;
                var5 = var5 != var4;
                if(!var5) { _fun0004_ip = 63; continue _fun0004 }
case 64:
                var2 = var4;
case 63:
                var1['promotionKey'] = var2;
                var2 = var3.prototype;
                var2 = Object.create(var2, {constructor: {value: var3}});
                var12 = var2;
                var11 = var1;
                var1 = new var12[var3](var11, var10);
                var1 = var1 instanceof Object ? var1 : var2;
                return var1;
            }
        };
        var6['value'] = var1;
        var1 = new Array(1);
        var1[0] = var6;
        var1 = var3.bind(var4)(var5, var2, var1);
        return var1;
    };
    var2 = var2.bind(var1)(var4);
    var4 = 8;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'records/PromotionRecord.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();