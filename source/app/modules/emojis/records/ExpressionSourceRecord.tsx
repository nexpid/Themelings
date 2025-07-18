// app/modules/emojis/records/ExpressionSourceRecord.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var8 = native2;
    var4 = native3;
    var3 = native6;
    var9 = native7;
    var _closure1_slot0 = var8;
    var _closure1_slot1 = var4;
    var _closure1_slot2 = var9;
    var1 = function _callSuper(arg1, arg2, arg3) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var4 = arg1;
            var2 = _closure1_slot6;
            var3 = undefined;
            var1 = arg2;
            var9 = var2.bind(var3)(var1);
            var2 = _closure1_slot5;
            var1 = _closure1_slot16;
            var1 = var1.bind(var3)();
            if(var1) { _fun0001_ip = 48; continue _fun0001 }
 35:
            var1 = var9.apply;
            var1 = var1.bind(var9)(var4, var3);
            _fun0001_ip = 86; continue _fun0001;
 48:
            var6 = global;
            var8 = var6.Reflect;
            var7 = var8.construct;
            var6 = new Array(0);
            var5 = _closure1_slot6;
            var5 = var5.bind(var3)(var4);
            var5 = var5.constructor;
            var1 = var7.bind(var8)(var9, var6, var5);
 86:
            var1 = var2.bind(var3)(var4, var1);
            return var1;
        }
    };
    var _closure1_slot15 = var1;
    var1 = function _isNativeReflectConstruct() {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
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
            _fun0002_ip = 74; continue _fun0002;
 72: // catch_target0
            CatchBlockStart(arg_register=1);
 74:
            var2 = function _isNativeReflectConstruct() {
                var1 = _closure2_slot0;
                var1 = !var1;
                var1 = !var1;
                return var1;
            };
            _closure1_slot16 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot16 = var1;
    var1 = global;
    var6 = var1.Object;
    var5 = var6.defineProperty;
    var2 = {};
    var1 = true;
    var2['value'] = var1;
    var1 = '__esModule';
    var1 = var5.bind(var6)(var3, var1, var2);
    var1 = 0;
    var2 = var9[var1];
    var1 = undefined;
    var2 = var4.bind(var1)(var2);
    var _closure1_slot3 = var2;
    var2 = 1;
    var2 = var9[var2];
    var2 = var4.bind(var1)(var2);
    var _closure1_slot4 = var2;
    var2 = 2;
    var2 = var9[var2];
    var2 = var4.bind(var1)(var2);
    var _closure1_slot5 = var2;
    var2 = 3;
    var2 = var9[var2];
    var2 = var4.bind(var1)(var2);
    var _closure1_slot6 = var2;
    var2 = 4;
    var2 = var9[var2];
    var2 = var4.bind(var1)(var2);
    var _closure1_slot7 = var2;
    var2 = 5;
    var2 = var9[var2];
    var2 = var4.bind(var1)(var2);
    var _closure1_slot8 = var2;
    var2 = 6;
    var2 = var9[var2];
    var10 = var4.bind(var1)(var2);
    var2 = 7;
    var2 = var9[var2];
    var2 = var8.bind(var1)(var2);
    var4 = var2.Endpoints;
    var _closure1_slot9 = var4;
    var2 = var2.GuildFeatures;
    var _closure1_slot10 = var2;
    var6 = {};
    var2 = 'GUILD';
    var6['GUILD'] = var2;
    var2 = 'APPLICATION';
    var6['APPLICATION'] = var2;
    var _closure1_slot11 = var6;
    var2 = function() {
        var4 = _closure1_slot8;
        var3 = undefined;
        var2 = function* (arg1) {
            var1 = function* anon_0_(arg1) {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                    if(var3) { _fun0003_ip = 271; continue _fun0003 }
 10:
                    var10 = arg1;
                    var7 = undefined;
                    var5 = undefined;
                    var8 = null;
                    var2 = null;
 21: // try_start_0
                    var4 = _closure1_slot0;
                    var9 = _closure1_slot2;
                    var3 = 8;
                    var3 = var9[var3];
                    var3 = var4.bind(var7)(var3);
                    var9 = var3.HTTP;
                    var4 = var9.get;
                    var3 = {'url': null, 'oldFormErrors': true, 'timeout': 5000, 'rejectWithError': true};
                    var12 = _closure1_slot9;
                    var11 = var12.EMOJI_SOURCE_DATA;
                    var10 = var11.bind(var12)(var10);
                    var3['url'] = var10;
                    var3 = var4.bind(var9)(var3);
                    SaveGenerator(address=98);
 96:
                    return var3;
 98:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=3);
                    if(var4) { _fun0003_ip = 263; continue _fun0003 }
 107:
                    var4 = var3.body;
                    var5 = var4;
                    var4 = var8 == var4;
                    var9 = undefined;
                    if(var4) { _fun0003_ip = 132; continue _fun0003 }
 124:
                    var4 = var5;
                    var9 = var4.type;
 132:
                    var4 = _closure1_slot11;
                    var4 = var4.GUILD;
                    if(!(var9 !== var4)) { _fun0003_ip = 223; continue _fun0003 }
 146:
                    var4 = var5;
                    var4 = var8 == var4;
                    var7 = undefined;
                    if(var4) { _fun0003_ip = 166; continue _fun0003 }
 158:
                    var4 = var5;
                    var7 = var4.type;
 166:
                    var4 = _closure1_slot11;
                    var4 = var4.APPLICATION;
                    if(!(var7 === var4)) { _fun0003_ip = 261; continue _fun0003 }
 180:
                    var4 = {};
                    var10 = _closure1_slot14;
                    var9 = var10.createFromServer;
                    var7 = var5;
                    var8 = var7.application;
                    var8 = var9.bind(var10)(var8);
                    var4['application'] = var8;
                    var7 = var7.type;
                    var4['type'] = var7;
                    var2 = var4;
                    _fun0003_ip = 261; continue _fun0003;
 223:
                    var4 = {};
                    var8 = _closure1_slot13;
                    var7 = var8.createFromServer;
                    var6 = var5.guild;
                    var6 = var7.bind(var8)(var6);
                    var4['guild'] = var6;
                    var5 = var5.type;
                    var4['type'] = var5;
                    var2 = var4;
 261: // try_end0
                    _fun0003_ip = 268; continue _fun0003;
 263:
                    return var3;
 266: // catch_target0
                    CatchBlockStart(arg_register=2);
 268:
                    return var2;
 271:
                    return var1;
                }
            };
            return var1;
        };
        var2 = var4.bind(var3)(var2);
        var _closure2_slot0 = var2;
        var1 = function() {
            var1 = undefined;
            var4 = _closure2_slot0;
            var3 = var4.apply;
            var1 = arguments;
            var2 = var1;
            var1 = this;
            var1 = var3.bind(var4)(var1, var2);
            return var1;
        };
        return var1;
    };
    var5 = var2.bind(var1)();
    var _closure1_slot12 = var5;
    var2 = function(arg1) {
        var5 = function ExpressionSourceGuildRecord(arg1) {
            var2 = arg1;
            var5 = this;
            var6 = _closure1_slot3;
            var4 = _closure2_slot1;
            var3 = undefined;
            var6 = var6.bind(var3)(var5, var4);
            var1 = _closure1_slot15;
            var1 = var1.bind(var3)(var5, var4);
            var3 = var2.id;
            var1['id'] = var3;
            var3 = var2.name;
            var1['name'] = var3;
            var3 = var2.icon;
            var1['icon'] = var3;
            var3 = var2.description;
            var1['description'] = var3;
            var3 = var2.features;
            var1['features'] = var3;
            var3 = var2.premiumTier;
            var1['premiumTier'] = var3;
            var3 = var2.premiumSubscriberCount;
            var1['premiumSubscriberCount'] = var3;
            var3 = var2.presenceCount;
            var1['presenceCount'] = var3;
            var3 = var2.memberCount;
            var1['memberCount'] = var3;
            var2 = var2.emojis;
            var1['emojis'] = var2;
            return var1;
        };
        var _closure2_slot1 = var5;
        var3 = _closure1_slot7;
        var4 = undefined;
        var2 = arg1;
        var2 = var3.bind(var4)(var5, var2);
        var3 = _closure1_slot4;
        var6 = {};
        var2 = 'getIconURL';
        var6['key'] = var2;
        var2 = function value(arg1) {
            _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                var4 = arguments[1];
                var5 = this;
                var3 = undefined;
                if(!(var4 === var3)) { _fun0004_ip = 14; continue _fun0004 }
 12:
                var4 = false;
 14:
                var2 = _closure1_slot1;
                var6 = _closure1_slot2;
                var1 = 9;
                var1 = var6[var1];
                var3 = var2.bind(var3)(var1);
                var2 = var3.getGuildIconURL;
                var1 = {};
                var6 = var5.id;
                var1['id'] = var6;
                var6 = arg1;
                var1['size'] = var6;
                var5 = var5.icon;
                var1['icon'] = var5;
                var1['canAnimate'] = var4;
                var1 = var2.bind(var3)(var1);
                return var1;
            }
        };
        var6['value'] = var2;
        var2 = new Array(4);
        var2[0] = var6;
        var6 = {};
        var8 = 'getIconSource';
        var6['key'] = var8;
        var8 = function value(arg1) {
            _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                var4 = arguments[1];
                var2 = this;
                var _closure3_slot0 = var2;
                var2 = arg1;
                var _closure3_slot1 = var2;
                var5 = undefined;
                if(!(var4 === var5)) { _fun0005_ip = 27; continue _fun0005 }
 25:
                var4 = false;
 27:
                var3 = _closure1_slot1;
                var6 = _closure1_slot2;
                var2 = 9;
                var2 = var6[var2];
                var3 = var3.bind(var5)(var2);
                var2 = var3.getAnimatableSourceWithFallback;
                var1 = function(arg1) {
                    var3 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var1 = 9;
                    var2 = var2[var1];
                    var1 = undefined;
                    var3 = var3.bind(var1)(var2);
                    var2 = var3.getGuildIconSource;
                    var1 = {};
                    var4 = _closure3_slot0;
                    var6 = var4.id;
                    var1['id'] = var6;
                    var5 = _closure3_slot1;
                    var1['size'] = var5;
                    var4 = var4.icon;
                    var1['icon'] = var4;
                    var4 = arg1;
                    var1['canAnimate'] = var4;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var1 = var2.bind(var3)(var4, var1);
                return var1;
            }
        };
        var6['value'] = var8;
        var2[1] = var6;
        var6 = {};
        var8 = 'hasFeature';
        var6['key'] = var8;
        var8 = function value(arg1) {
            var1 = this;
            var3 = var1.features;
            var2 = var3.has;
            var1 = arg1;
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var6['value'] = var8;
        var2[2] = var6;
        var6 = {};
        var8 = 'isDiscoverable';
        var6['key'] = var8;
        var8 = function value() {
            var3 = this;
            var2 = var3.hasFeature;
            var1 = _closure1_slot10;
            var1 = var1.DISCOVERABLE;
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var6['value'] = var8;
        var2[3] = var6;
        var6 = {};
        var8 = 'getGuildFromEmojiId';
        var6['key'] = var8;
        var8 = _closure1_slot8;
        var1 = function* (arg1) {
            var1 = function* anon_0_(arg1) {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0006_ip = 86; continue _fun0006 }
 7:
                    var3 = _closure1_slot12;
                    var5 = undefined;
                    var2 = arg1;
                    var2 = var3.bind(var5)(var2);
                    SaveGenerator(address=28);
 26:
                    return var2;
 28:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(var3) { _fun0006_ip = 83; continue _fun0006 }
 34:
                    var6 = null;
                    var7 = var6 != var2;
                    var3 = null;
                    if(!var7) { _fun0006_ip = 80; continue _fun0006 }
 45:
                    var7 = var6 == var2;
                    var5 = undefined;
                    if(var7) { _fun0006_ip = 59; continue _fun0006 }
 54:
                    var5 = var2.type;
 59:
                    var4 = _closure1_slot11;
                    var4 = var4.GUILD;
                    var3 = null;
                    if(!(var5 === var4)) { _fun0006_ip = 80; continue _fun0006 }
 75:
                    var3 = var2.guild;
 80:
                    return var3;
 83:
                    return var2;
 86:
                    return var1;
                }
            };
            return var1;
        };
        var1 = var8.bind(var4)(var1);
        var _closure2_slot0 = var1;
        var1 = function getGuildFromEmojiId() {
            var1 = undefined;
            var4 = _closure2_slot0;
            var3 = var4.apply;
            var1 = arguments;
            var2 = var1;
            var1 = this;
            var1 = var3.bind(var4)(var1, var2);
            return var1;
        };
        var6['value'] = var1;
        var1 = new Array(6);
        var1[0] = var6;
        var6 = {};
        var8 = '_mapCommon';
        var6['key'] = var8;
        var8 = function value(arg1) {
            var2 = arg1;
            var1 = {};
            var3 = var2.id;
            var1['id'] = var3;
            var3 = var2.name;
            var1['name'] = var3;
            var3 = var2.icon;
            var1['icon'] = var3;
            var3 = var2.description;
            var1['description'] = var3;
            var5 = _closure1_slot0;
            var4 = _closure1_slot2;
            var3 = 10;
            var4 = var4[var3];
            var3 = undefined;
            var4 = var5.bind(var3)(var4);
            var3 = var4.toSetInplace;
            var2 = var2.features;
            var2 = var3.bind(var4)(var2);
            var1['features'] = var2;
            return var1;
        };
        var6['value'] = var8;
        var1[1] = var6;
        var6 = {};
        var8 = 'createFromGuildRecord';
        var6['key'] = var8;
        var8 = function value(arg1) {
            var2 = arg1;
            var3 = _closure2_slot1;
            var1 = {};
            var4 = var3._mapCommon;
            var6 = var4.bind(var3)(var2);
            var7 = var1;
            var4 = copyDataProperties(var7, var6);
            var5 = var2.premiumTier;
            var4 = 'premiumTier';
            var1[var4] = var5;
            var4 = var2.premiumSubscriberCount;
            var2 = 'premiumSubscriberCount';
            var1[var2] = var4;
            var4 = null;
            var2 = 'presenceCount';
            var1[var2] = var4;
            var2 = 'memberCount';
            var1[var2] = var4;
            var2 = 'emojis';
            var1[var2] = var4;
            var2 = var3.prototype;
            var2 = Object.create(var2, {constructor: {value: var3}});
            var8 = var2;
            var7 = var1;
            var1 = new var8[var3](var7, var6);
            var1 = var1 instanceof Object ? var1 : var2;
            return var1;
        };
        var6['value'] = var8;
        var1[2] = var6;
        var6 = {};
        var8 = 'createFromDiscoverableGuild';
        var6['key'] = var8;
        var8 = function value(arg1) {
            var2 = arg1;
            var3 = _closure2_slot1;
            var1 = {};
            var4 = var3._mapCommon;
            var6 = var4.bind(var3)(var2);
            var7 = var1;
            var4 = copyDataProperties(var7, var6);
            var5 = null;
            var4 = 'premiumTier';
            var1[var4] = var5;
            var5 = var2.premiumSubscriptionCount;
            var4 = 'premiumSubscriberCount';
            var1[var4] = var5;
            var5 = var2.presenceCount;
            var4 = 'presenceCount';
            var1[var4] = var5;
            var5 = var2.memberCount;
            var4 = 'memberCount';
            var1[var4] = var5;
            var4 = var2.emojis;
            var2 = 'emojis';
            var1[var2] = var4;
            var2 = var3.prototype;
            var2 = Object.create(var2, {constructor: {value: var3}});
            var8 = var2;
            var7 = var1;
            var1 = new var8[var3](var7, var6);
            var1 = var1 instanceof Object ? var1 : var2;
            return var1;
        };
        var6['value'] = var8;
        var1[3] = var6;
        var6 = {};
        var8 = 'createFromServer';
        var6['key'] = var8;
        var8 = function value(arg1) {
            var2 = arg1;
            var3 = _closure2_slot1;
            var1 = {};
            var4 = var3._mapCommon;
            var6 = var4.bind(var3)(var2);
            var7 = var1;
            var4 = copyDataProperties(var7, var6);
            var5 = var2.premium_tier;
            var4 = 'premiumTier';
            var1[var4] = var5;
            var5 = var2.premium_subscription_count;
            var4 = 'premiumSubscriberCount';
            var1[var4] = var5;
            var5 = var2.approximate_presence_count;
            var4 = 'presenceCount';
            var1[var4] = var5;
            var5 = var2.approximate_member_count;
            var4 = 'memberCount';
            var1[var4] = var5;
            var4 = var2.emojis;
            var2 = 'emojis';
            var1[var2] = var4;
            var2 = var3.prototype;
            var2 = Object.create(var2, {constructor: {value: var3}});
            var8 = var2;
            var7 = var1;
            var1 = new var8[var3](var7, var6);
            var1 = var1 instanceof Object ? var1 : var2;
            return var1;
        };
        var6['value'] = var8;
        var1[4] = var6;
        var6 = {};
        var8 = 'createFromGuildType';
        var6['key'] = var8;
        var7 = function value(arg1) {
            _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
                var5 = arg1;
                var1 = _closure2_slot1;
                var2 = var5 instanceof var1;
                var1 = var5;
                if(var2) { _fun0007_ip = 92; continue _fun0007 }
 20:
                var6 = _closure1_slot0;
                var4 = _closure1_slot2;
                var2 = 11;
                var4 = var4[var2];
                var2 = undefined;
                var4 = var6.bind(var2)(var4);
                var2 = var4.isGuildRecord;
                var2 = var2.bind(var4)(var5);
                var4 = _closure2_slot1;
                if(var2) { _fun0007_ip = 78; continue _fun0007 }
 63:
                var2 = var4.createFromDiscoverableGuild;
                var2 = var2.bind(var4)(var5);
                _fun0007_ip = 89; continue _fun0007;
 78:
                var3 = var4.createFromGuildRecord;
                var2 = var3.bind(var4)(var5);
 89:
                var1 = var2;
 92:
                return var1;
            }
        };
        var6['value'] = var7;
        var1[5] = var6;
        var1 = var3.bind(var4)(var5, var2, var1);
        return var1;
    };
    var4 = var2.bind(var1)(var10);
    var _closure1_slot13 = var4;
    var2 = function(arg1) {
        var5 = function ExpressionSourceApplicationRecord(arg1) {
            var2 = arg1;
            var5 = this;
            var6 = _closure1_slot3;
            var4 = _closure2_slot0;
            var3 = undefined;
            var6 = var6.bind(var3)(var5, var4);
            var1 = _closure1_slot15;
            var1 = var1.bind(var3)(var5, var4);
            var3 = var2.id;
            var1['id'] = var3;
            var2 = var2.name;
            var1['name'] = var2;
            return var1;
        };
        var _closure2_slot0 = var5;
        var6 = _closure1_slot7;
        var4 = undefined;
        var3 = arg1;
        var3 = var6.bind(var4)(var5, var3);
        var3 = _closure1_slot4;
        var1 = {};
        var6 = 'createFromServer';
        var1['key'] = var6;
        var2 = function value(arg1) {
            var2 = arg1;
            var3 = _closure2_slot0;
            var1 = {};
            var4 = var2.id;
            var1['id'] = var4;
            var2 = var2.name;
            var1['name'] = var2;
            var2 = var3.prototype;
            var2 = Object.create(var2, {constructor: {value: var3}});
            var6 = var2;
            var5 = var1;
            var1 = new var6[var3](var5, var4);
            var1 = var1 instanceof Object ? var1 : var2;
            return var1;
        };
        var1['value'] = var2;
        var2 = new Array(1);
        var2[0] = var1;
        var1 = null;
        var1 = var3.bind(var4)(var5, var1, var2);
        return var1;
    };
    var2 = var2.bind(var1)(var10);
    var _closure1_slot14 = var2;
    var7 = 12;
    var7 = var9[var7];
    var9 = var8.bind(var1)(var7);
    var8 = var9.fileFinishedImporting;
    var7 = 'modules/emojis/records/ExpressionSourceRecord.tsx';
    var7 = var8.bind(var9)(var7);
    var3['EmojiSourceDataTypes'] = var6;
    var3['getEmojiSourceData'] = var5;
    var3['ExpressionSourceGuildRecord'] = var4;
    var3['ExpressionSourceApplicationRecord'] = var2;
    return var1;
})();