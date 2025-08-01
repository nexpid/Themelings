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
 0:
 2: // try_start_0
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
 70: // try_end0
            _fun0001_ip = 74; continue _fun0001;
 72: // catch_target0
            CatchBlockStart(arg_register=1);
 74:
            var2 = function _isNativeReflectConstruct() {
                var1 = _closure2_slot0;
                var1 = !var1;
                var1 = !var1;
                return var1;
            };
            _closure1_slot8 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot8 = var1;
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
    var7 = 6;
    var7 = var6[var7];
    var7 = var5.bind(var1)(var7);
    var7 = var7.PromotionFlags;
    var _closure1_slot7 = var7;
    var2 = function(arg1) {
        var5 = function PromotionRecord(arg1) {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                var2 = arg1;
                var5 = this;
                var1 = _closure1_slot2;
                var3 = _closure2_slot0;
                var4 = undefined;
                var1 = var1.bind(var4)(var5, var3);
                var1 = _closure1_slot5;
                var10 = var1.bind(var4)(var3);
                var3 = _closure1_slot4;
                var1 = _closure1_slot8;
                var1 = var1.bind(var4)();
                if(var1) { _fun0002_ip = 65; continue _fun0002 }
 52:
                var1 = var10.apply;
                var1 = var1.bind(var10)(var5, var4);
                _fun0002_ip = 103; continue _fun0002;
 65:
                var7 = global;
                var9 = var7.Reflect;
                var8 = var9.construct;
                var6 = _closure1_slot5;
                var6 = var6.bind(var4)(var5);
                var7 = var6.constructor;
                var6 = new Array(0);
                var1 = var8.bind(var9)(var10, var6, var7);
 103:
                var1 = var3.bind(var4)(var5, var1);
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
                var5 = var2.flags;
                var4 = null;
                var6 = var4 != var5;
                var3 = 0;
                if(!var6) { _fun0002_ip = 283; continue _fun0002 }
 280:
                var3 = var5;
 283:
                var1['flags'] = var3;
                var3 = var2.inboundRestrictedCountries;
                if(!(var4 == var3)) { _fun0002_ip = 303; continue _fun0002 }
 299:
                var3 = new Array(0);
 303:
                var1['inboundRestrictedCountries'] = var3;
                var3 = var2.outboundRestrictedCountries;
                if(!(var4 == var3)) { _fun0002_ip = 323; continue _fun0002 }
 319:
                var3 = new Array(0);
 323:
                var1['outboundRestrictedCountries'] = var3;
                var2 = var2.promotionType;
                var1['promotionType'] = var2;
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
        var2 = 'isThirdPartyOutbound';
        var6['key'] = var2;
        var2 = function get() {
            var1 = this;
            var2 = var1.promotionType;
            var4 = _closure1_slot0;
            var3 = _closure1_slot1;
            var1 = 7;
            var3 = var3[var1];
            var1 = undefined;
            var1 = var4.bind(var1)(var3);
            var1 = var1.PromotionTypes;
            var1 = var1.THIRD_PARTY_OUTBOUND;
            var1 = var2 === var1;
            return var1;
        };
        var6['get'] = var2;
        var2 = new Array(6);
        var2[0] = var6;
        var6 = {};
        var7 = 'isBogo';
        var6['key'] = var7;
        var7 = function get() {
            var1 = this;
            var2 = var1.promotionType;
            var4 = _closure1_slot0;
            var3 = _closure1_slot1;
            var1 = 7;
            var3 = var3[var1];
            var1 = undefined;
            var1 = var4.bind(var1)(var3);
            var1 = var1.PromotionTypes;
            var1 = var1.BOGO;
            var1 = var2 === var1;
            return var1;
        };
        var6['get'] = var7;
        var2[1] = var6;
        var6 = {};
        var7 = 'isMarketingMoment';
        var6['key'] = var7;
        var7 = function get() {
            var1 = this;
            var2 = var1.promotionType;
            var4 = _closure1_slot0;
            var3 = _closure1_slot1;
            var1 = 7;
            var3 = var3[var1];
            var1 = undefined;
            var1 = var4.bind(var1)(var3);
            var1 = var1.PromotionTypes;
            var1 = var1.MARKETING_MOMENT;
            var1 = var2 === var1;
            return var1;
        };
        var6['get'] = var7;
        var2[2] = var6;
        var6 = {};
        var7 = 'hasFlag';
        var6['key'] = var7;
        var7 = function value(arg1) {
            var3 = _closure1_slot0;
            var2 = _closure1_slot1;
            var1 = 8;
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
        var2[3] = var6;
        var6 = {};
        var7 = 'isCountryRestricted';
        var6['key'] = var7;
        var7 = function value(arg1) {
            _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                var3 = arg1;
                var1 = this;
                var4 = var1.promotionType;
                var8 = _closure1_slot0;
                var5 = _closure1_slot1;
                var7 = 7;
                var5 = var5[var7];
                var6 = undefined;
                var5 = var8.bind(var6)(var5);
                var5 = var5.PromotionTypes;
                var5 = var5.THIRD_PARTY_INBOUND;
                if(!(var5 !== var4)) { _fun0003_ip = 108; continue _fun0003 }
 53:
                var5 = _closure1_slot0;
                var2 = _closure1_slot1;
                var2 = var2[var7];
                var2 = var5.bind(var6)(var2);
                var2 = var2.PromotionTypes;
                var2 = var2.THIRD_PARTY_OUTBOUND;
                if(!(var2 !== var4)) { _fun0003_ip = 90; continue _fun0003 }
 86:
                var2 = false;
                return var2;
 90:
                var4 = var1.outboundRestrictedCountries;
                var2 = var4.includes;
                var2 = var2.bind(var4)(var3);
                return var2;
 108:
                var2 = var1.inboundRestrictedCountries;
                var1 = var2.includes;
                var1 = var1.bind(var2)(var3);
                return var1;
            }
        };
        var6['value'] = var7;
        var2[4] = var6;
        var6 = {};
        var7 = 'isRedeemableByTrialUsers';
        var6['key'] = var7;
        var7 = function value() {
            var3 = this;
            var2 = var3.hasFlag;
            var1 = _closure1_slot7;
            var1 = var1.IS_OUTBOUND_REDEEMABLE_BY_TRIAL_USERS;
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var6['value'] = var7;
        var2[5] = var6;
        var6 = {};
        var7 = 'createFromServer';
        var6['key'] = var7;
        var1 = function value(arg1) {
            _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                var2 = arg1;
                var3 = _closure2_slot0;
                var1 = {};
                var4 = var2.id;
                var1['id'] = var4;
                var4 = var2.trial_id;
                var1['trialId'] = var4;
                var5 = global;
                var7 = var5.Date;
                var9 = var2.start_date;
                var6 = var7.prototype;
                var6 = Object.create(var6, {constructor: {value: var7}});
                var10 = var6;
                var4 = new var10[var7](var9, var8);
                var4 = var4 instanceof Object ? var4 : var6;
                var1['startDate'] = var4;
                var7 = var5.Date;
                var9 = var2.end_date;
                var6 = var7.prototype;
                var6 = Object.create(var6, {constructor: {value: var7}});
                var10 = var6;
                var4 = new var10[var7](var9, var8);
                var4 = var4 instanceof Object ? var4 : var6;
                var1['endDate'] = var4;
                var4 = var2.outbound_redemption_end_date;
                var6 = null;
                var7 = var6 != var4;
                var4 = null;
                if(!var7) { _fun0004_ip = 161; continue _fun0004 }
 129:
                var8 = var5.Date;
                var9 = var2.outbound_redemption_end_date;
                var7 = var8.prototype;
                var7 = Object.create(var7, {constructor: {value: var8}});
                var10 = var7;
                var5 = new var10[var8](var9, var8);
                var4 = var5 instanceof Object ? var5 : var7;
 161:
                var1['outboundRedemptionEndDate'] = var4;
                var7 = var2.inbound_header_text;
                var8 = var6 != var7;
                var4 = '';
                var5 = var4;
                if(!var8) { _fun0004_ip = 191; continue _fun0004 }
 188:
                var5 = var7;
 191:
                var1['inboundHeaderText'] = var5;
                var7 = var2.inbound_body_text;
                var8 = var6 != var7;
                var5 = var4;
                if(!var8) { _fun0004_ip = 217; continue _fun0004 }
 214:
                var5 = var7;
 217:
                var1['inboundBodyText'] = var5;
                var7 = var2.inbound_help_center_link;
                var8 = var6 != var7;
                var5 = var4;
                if(!var8) { _fun0004_ip = 243; continue _fun0004 }
 240:
                var5 = var7;
 243:
                var1['inboundHelpCenterLink'] = var5;
                var7 = var2.outbound_title;
                var8 = var6 != var7;
                var5 = var4;
                if(!var8) { _fun0004_ip = 269; continue _fun0004 }
 266:
                var5 = var7;
 269:
                var1['outboundTitle'] = var5;
                var7 = var2.outbound_redemption_modal_body;
                var8 = var6 != var7;
                var5 = var4;
                if(!var8) { _fun0004_ip = 295; continue _fun0004 }
 292:
                var5 = var7;
 295:
                var1['outboundRedemptionModalBody'] = var5;
                var7 = var2.outbound_terms_and_conditions;
                var8 = var6 != var7;
                var5 = var4;
                if(!var8) { _fun0004_ip = 321; continue _fun0004 }
 318:
                var5 = var7;
 321:
                var1['outboundTermsAndConditions'] = var5;
                var7 = var2.outbound_redemption_page_link;
                var8 = var6 != var7;
                var5 = var4;
                if(!var8) { _fun0004_ip = 347; continue _fun0004 }
 344:
                var5 = var7;
 347:
                var1['outboundRedemptionPageLink'] = var5;
                var5 = var2.outbound_redemption_url_format;
                var6 = var6 != var5;
                if(!var6) { _fun0004_ip = 370; continue _fun0004 }
 367:
                var4 = var5;
 370:
                var1['outboundRedemptionUrlFormat'] = var4;
                var4 = var2.flags;
                var1['flags'] = var4;
                var4 = var2.inbound_restricted_countries;
                var1['inboundRestrictedCountries'] = var4;
                var4 = var2.outbound_restricted_countries;
                var1['outboundRestrictedCountries'] = var4;
                var2 = var2.promotion_type;
                var1['promotionType'] = var2;
                var2 = var3.prototype;
                var2 = Object.create(var2, {constructor: {value: var3}});
                var10 = var2;
                var9 = var1;
                var1 = new var10[var3](var9, var8);
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
    var4 = 9;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'records/PromotionRecord.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();