// app/modules/coded_links/MessageCodedLinkManager.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
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
            _closure1_slot11 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot11 = var1;
    var1 = function resolveMessageCodedLinks(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var3 = _closure1_slot1;
            var2 = _closure1_slot2;
            var1 = 8;
            var2 = var2[var1];
            var1 = undefined;
            var3 = var3.bind(var1)(var2);
            var2 = arg1;
            var2 = var2.content;
            var4 = var3.bind(var1)(var2);
            var2 = null;
            var2 = var2 != var4;
            if(!var2) { _fun0002_ip = 6; continue _fun0002 }
case 7:
            var5 = var4.length;
            var3 = 0;
            var2 = var3 !== var5;
case 6:
            if(!var2) { _fun0002_ip = 8; continue _fun0002 }
case 9:
            var3 = var4.forEach;
            var2 = function(arg1) {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var1 = arg1;
                    var8 = var1.type;
                    var6 = var1.code;
                    var _closure3_slot0 = var6;
                    var4 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var7 = 9;
                    var3 = var1[var7];
                    var1 = undefined;
                    var3 = var4.bind(var1)(var3);
                    var3 = var3.CodedLinkType;
                    var3 = var3.INVITE;
                    if(!(var8 !== var3)) { _fun0003_ip = 10; continue _fun0003 }
case 11:
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var3 = var3[var7];
                    var3 = var4.bind(var1)(var3);
                    var3 = var3.CodedLinkType;
                    var3 = var3.TEMPLATE;
                    if(!(var8 !== var3)) { _fun0003_ip = 12; continue _fun0003 }
case 13:
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var3 = var3[var7];
                    var3 = var4.bind(var1)(var3);
                    var3 = var3.CodedLinkType;
                    var3 = var3.BUILD_OVERRIDE;
                    if(!(var8 !== var3)) { _fun0003_ip = 14; continue _fun0003 }
case 15:
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var3 = var3[var7];
                    var3 = var4.bind(var1)(var3);
                    var3 = var3.CodedLinkType;
                    var3 = var3.MANUAL_BUILD_OVERRIDE;
                    if(!(var8 !== var3)) { _fun0003_ip = 14; continue _fun0003 }
case 16:
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var3 = var3[var7];
                    var3 = var4.bind(var1)(var3);
                    var3 = var3.CodedLinkType;
                    var3 = var3.EVENT;
                    if(!(var8 !== var3)) { _fun0003_ip = 14; continue _fun0003 }
case 17:
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var3 = var3[var7];
                    var3 = var4.bind(var1)(var3);
                    var3 = var3.CodedLinkType;
                    var3 = var3.CHANNEL_LINK;
                    if(!(var8 !== var3)) { _fun0003_ip = 14; continue _fun0003 }
case 18:
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var3 = var3[var7];
                    var3 = var4.bind(var1)(var3);
                    var3 = var3.CodedLinkType;
                    var3 = var3.APP_DIRECTORY_PROFILE;
                    if(!(var8 !== var3)) { _fun0003_ip = 19; continue _fun0003 }
case 20:
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var3 = var3[var7];
                    var3 = var4.bind(var1)(var3);
                    var3 = var3.CodedLinkType;
                    var3 = var3.ACTIVITY_BOOKMARK;
                    if(!(var8 !== var3)) { _fun0003_ip = 14; continue _fun0003 }
case 21:
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var3 = var3[var7];
                    var3 = var4.bind(var1)(var3);
                    var3 = var3.CodedLinkType;
                    var3 = var3.EMBEDDED_ACTIVITY_INVITE;
                    if(!(var8 !== var3)) { _fun0003_ip = 14; continue _fun0003 }
case 22:
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var3 = var3[var7];
                    var3 = var4.bind(var1)(var3);
                    var3 = var3.CodedLinkType;
                    var3 = var3.GUILD_PRODUCT;
                    if(!(var8 !== var3)) { _fun0003_ip = 14; continue _fun0003 }
case 23:
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var3 = var3[var7];
                    var3 = var4.bind(var1)(var3);
                    var3 = var3.CodedLinkType;
                    var3 = var3.SERVER_SHOP;
                    if(!(var8 !== var3)) { _fun0003_ip = 14; continue _fun0003 }
case 24:
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var3 = var3[var7];
                    var3 = var4.bind(var1)(var3);
                    var3 = var3.CodedLinkType;
                    var3 = var3.QUESTS_EMBED;
                    if(!(var8 !== var3)) { _fun0003_ip = 14; continue _fun0003 }
case 25:
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var3 = var3[var7];
                    var3 = var4.bind(var1)(var3);
                    var3 = var3.CodedLinkType;
                    var3 = var3.APP_DIRECTORY_STOREFRONT;
                    if(!(var8 !== var3)) { _fun0003_ip = 14; continue _fun0003 }
case 26:
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var3 = var3[var7];
                    var3 = var4.bind(var1)(var3);
                    var3 = var3.CodedLinkType;
                    var3 = var3.APP_DIRECTORY_STOREFRONT_SKU;
                    if(!(var8 !== var3)) { _fun0003_ip = 14; continue _fun0003 }
case 27:
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var3 = var3[var7];
                    var3 = var4.bind(var1)(var3);
                    var3 = var3.CodedLinkType;
                    var3 = var3.APP_OAUTH2_LINK;
                    if(!(var8 !== var3)) { _fun0003_ip = 14; continue _fun0003 }
case 28:
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var3 = var3[var7];
                    var3 = var4.bind(var1)(var3);
                    var3 = var3.CodedLinkType;
                    var3 = var3.COLLECTIBLES_SHOP;
                    if(!(var8 !== var3)) { _fun0003_ip = 14; continue _fun0003 }
case 29:
                    var3 = global;
                    var4 = var3.Error;
                    var3 = var3.HermesInternal;
                    var7 = var3.concat;
                    var3 = 'Unknown coded link type: ';
                    var3 = var7.bind(var3)(var8);
                    var3 = var4.bind(var1)(var3);
                    throw var3;
case 19:
                    var4 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var3 = 14;
                    var3 = var7[var3];
                    var4 = var4.bind(var1)(var3);
                    var3 = var4.getEmbedApplication;
                    var3 = var3.bind(var4)(var6);
                    _fun0003_ip = 14; continue _fun0003;
case 12:
                    var4 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var3 = 10;
                    var3 = var6[var3];
                    var6 = var4.bind(var1)(var3);
                    var4 = var6.queueMessageLinkFetch;
                    var7 = _closure1_slot8;
                    var3 = function* () {
                        var1 = function* anon_0_() {
                            _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                                StartGenerator();
                                ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                                if(var2) { _fun0004_ip = 30; continue _fun0004 }
case 31:
                                var6 = _closure1_slot9;
                                var5 = var6.getGuildTemplate;
                                var4 = _closure3_slot0;
                                var5 = var5.bind(var6)(var4);
                                var4 = null;
                                if(!(var4 == var5)) { _fun0004_ip = 32; continue _fun0004 }
case 33:
                                var5 = _closure1_slot1;
                                var4 = _closure1_slot2;
                                var3 = 13;
                                var4 = var4[var3];
                                var3 = undefined;
                                var4 = var5.bind(var3)(var4);
                                var3 = var4.resolveGuildTemplate;
                                var2 = _closure3_slot0;
                                var2 = var3.bind(var4)(var2);
                                SaveGenerator(address=79);
case 34:
                                return var2;
case 35:
                                ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                                if(var3) { _fun0004_ip = 36; continue _fun0004 }
case 32:
                                var3 = undefined;
                                return var3;
case 36:
                                return var2;
case 30:
                                return var1;
                            }
                        };
                        return var1;
                    };
                    var3 = var7.bind(var1)(var3);
                    var3 = var4.bind(var6)(var3);
                    _fun0003_ip = 14; continue _fun0003;
case 10:
                    var4 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var3 = 10;
                    var3 = var6[var3];
                    var4 = var4.bind(var1)(var3);
                    var3 = var4.queueMessageLinkFetch;
                    var5 = _closure1_slot8;
                    var2 = function* () {
                        var1 = function* anon_0_() {
                            _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                                StartGenerator();
                                ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                                if(var2) { _fun0005_ip = 37; continue _fun0005 }
case 38:
                                var6 = _closure1_slot10;
                                var5 = var6.getInvite;
                                var4 = _closure3_slot0;
                                var5 = var5.bind(var6)(var4);
                                var4 = null;
                                if(!(var4 == var5)) { _fun0005_ip = 39; continue _fun0005 }
case 40:
                                var5 = _closure1_slot1;
                                var6 = _closure1_slot2;
                                var2 = 11;
                                var2 = var6[var2];
                                var4 = undefined;
                                var8 = var5.bind(var4)(var2);
                                var7 = var8.dispatch;
                                var2 = {};
                                var9 = 'INVITE_RESOLVE';
                                var2['type'] = var9;
                                var3 = _closure3_slot0;
                                var2['code'] = var3;
                                var2 = var7.bind(var8)(var2);
                                var2 = 12;
                                var2 = var6[var2];
                                var2 = var5.bind(var4)(var2);
                                var4 = var2.bind(var4)(var3);
                                var3 = var4.then;
                                var2 = function(arg1) {
                                    _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                                        var1 = arg1;
                                        var5 = var1.invite;
                                        var4 = var1.code;
                                        var6 = var1.banned;
                                        var1 = null;
                                        if(!(var1 == var5)) { _fun0006_ip = 41; continue _fun0006 }
case 42:
                                        var3 = _closure1_slot1;
                                        var2 = _closure1_slot2;
                                        var1 = 11;
                                        var2 = var2[var1];
                                        var1 = undefined;
                                        var3 = var3.bind(var1)(var2);
                                        var2 = var3.dispatch;
                                        var1 = {};
                                        var7 = 'INVITE_RESOLVE_FAILURE';
                                        var1['type'] = var7;
                                        var1['code'] = var4;
                                        var1['banned'] = var6;
                                        var1 = var2.bind(var3)(var1);
                                        _fun0006_ip = 43; continue _fun0006;
case 41:
                                        var3 = _closure1_slot1;
                                        var2 = _closure1_slot2;
                                        var1 = 11;
                                        var2 = var2[var1];
                                        var1 = undefined;
                                        var3 = var3.bind(var1)(var2);
                                        var2 = var3.dispatch;
                                        var1 = {};
                                        var6 = 'INVITE_RESOLVE_SUCCESS';
                                        var1['type'] = var6;
                                        var1['invite'] = var5;
                                        var1['code'] = var4;
                                        var1 = var2.bind(var3)(var1);
case 43:
                                        var1 = undefined;
                                        return var1;
                                    }
                                };
                                var2 = var3.bind(var4)(var2);
                                SaveGenerator(address=131);
case 44:
                                return var2;
case 45:
                                ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                                if(var3) { _fun0005_ip = 46; continue _fun0005 }
case 39:
                                var3 = undefined;
                                return var3;
case 46:
                                return var2;
case 37:
                                return var1;
                            }
                        };
                        return var1;
                    };
                    var2 = var5.bind(var1)(var2);
                    var2 = var3.bind(var4)(var2);
case 14:
                    return var1;
                }
            };
            var2 = var3.bind(var4)(var2);
case 8:
            return var1;
        }
    };
    var _closure1_slot12 = var1;
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
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot6 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot7 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot8 = var4;
    var4 = 6;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot9 = var4;
    var4 = 7;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot10 = var4;
    var4 = 16;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var2 = function(arg1) {
        var3 = function MessageCodedLinkManager() {
            _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                var5 = this;
                var1 = _closure1_slot4;
                var3 = _closure2_slot0;
                var4 = undefined;
                var1 = var1.bind(var4)(var5, var3);
                var1 = _closure1_slot6;
                var10 = var1.bind(var4)(var3);
                var3 = _closure1_slot5;
                var1 = _closure1_slot11;
                var1 = var1.bind(var4)();
                if(var1) { _fun0007_ip = 47; continue _fun0007 }
case 48:
                var1 = var10.apply;
                var1 = var1.bind(var10)(var5, var4);
                _fun0007_ip = 49; continue _fun0007;
case 47:
                var6 = global;
                var9 = var6.Reflect;
                var8 = var9.construct;
                var6 = _closure1_slot6;
                var6 = var6.bind(var4)(var5);
                var7 = var6.constructor;
                var6 = new Array(0);
                var1 = var8.bind(var9)(var10, var6, var7);
case 49:
                var1 = var3.bind(var4)(var5, var1);
                var5 = _closure1_slot1;
                var6 = _closure1_slot2;
                var3 = 15;
                var3 = var6[var3];
                var3 = var5.bind(var4)(var3);
                var2 = _closure1_slot12;
                var2 = var3.bind(var4)(var1, var2);
                return var1;
            }
        };
        var _closure2_slot0 = var3;
        var5 = _closure1_slot7;
        var2 = undefined;
        var4 = arg1;
        var4 = var5.bind(var2)(var3, var4);
        var1 = _closure1_slot3;
        var1 = var1.bind(var2)(var3);
        return var1;
    };
    var2 = var2.bind(var1)(var4);
    var4 = var2.prototype;
    var4 = Object.create(var4, {constructor: {value: var2}});
    var13 = var4;
    var2 = new var13[var2](var12);
    var2 = var2 instanceof Object ? var2 : var4;
    var4 = 17;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/coded_links/MessageCodedLinkManager.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();